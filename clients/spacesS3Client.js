/* eslint-disable consistent-return */
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import config from '../config.js';
import logger from '../logger.js';

const s3Client = new S3Client({
  endpoint: 'https://fra1.digitaloceanspaces.com',
  region: config.SPACES_REGION,
  credentials: {
    accessKeyId: 'DO00P23BVZZK99UFQY8G',
    secretAccessKey: config.SPACES_SECRET,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const uploadObject = async (name, imageData) => {
  const params = {
    Bucket: config.SPACES_BUCKET_NAME,
    Key: name,
    Body: imageData,
    ACL: 'public-read',
  };
  try {
    const data = await s3Client.send(new PutObjectCommand(params));

    return [data, `https://${config.SPACES_BUCKET_NAME}.${config.SPACES_REGION}.cdn.digitaloceanspaces.com/${name}`];
  } catch (err) {
    logger.error(err);
  }
};
