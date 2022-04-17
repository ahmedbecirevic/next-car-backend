import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import config from '../../config.js';
import logger from '../../logger.js';
import {
  getUserByGoogleId,
  getUserById,
  getUserByEmail,
  createUser,
} from './userDal.js';

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
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/user/auth/google/callback',
      passReqToCallback: true,
    },
    //  Passport verify callback
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        logger.warn(profile);
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

passport.serializeUser((user, cb) => {
  logger.warn('Serializing user:', user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await getUserById(id).catch((err) => {
    logger.warn('Error deserializing', err);
    cb(err, null);
  });

  logger.warn('DeSerialized user', user);

  if (user) { cb(null, user); }
});

// // Saves user's ID to a session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // Retrieve user's ID from a session
// passport.deserializeUser((id, done) => {
//   getUserById(id).then((user) => {
//     done(null, user);
//   });
// });
