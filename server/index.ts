import { Nitro } from 'nitropack';
import mongoose from 'mongoose';

export default async (_nitroApp: Nitro) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/oahu');
    console.log('connect to db');
  } catch (e) {
    console.log(e);
  }
  console.log('nitro started');
};
