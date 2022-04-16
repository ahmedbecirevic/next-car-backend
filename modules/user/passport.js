import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import envVar from '../../config.js';
import {
  getUserByGoogleId,
  getUserById,
  getUserByEmail,
  createUser,
} from './userDal.js';

// const GoogleTokenStrategy = require('passport-google-oauth2').Strategy;
// import google

const GoogleTokenStrategy = GoogleStrategy.Strategy;

const getProfile = (profile) => {
  const {
    id, displayName, emails, provider,
  } = profile;
  if (emails && emails.length) {
    const email = emails[0].value;

    return {
      googleId: id, name: displayName, email, provider,
    };
  }

  return null;
};

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: envVar.GOOGLE_CLIENT_ID,
      clientSecret: envVar.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000',
    },
    //  Passport verify callback
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingGoogleUser = await getUserByGoogleId(profile.id);

        if (!existingGoogleUser) {
          const existingEmailUser = await getUserByEmail(getProfile(profile).email);
          // Create user if he is not registered already
          if (!existingEmailUser) {
            const newUser = await createUser(getProfile(profile));

            return done(null, newUser);
          }

          return done(null, existingEmailUser);
        }

        return done(null, existingGoogleUser);
      } catch (e) {
        throw new Error(e);
      }
    },
  ),
);

// Saves user's ID to a session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Retrieve user's ID from a session
passport.deserializeUser((id, done) => {
  getUserById(id).then((user) => {
    done(null, user);
  });
});
