import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => ({
  uri: process.env.MONGO_URI,
}));
