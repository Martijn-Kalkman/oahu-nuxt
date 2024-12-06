import { MongoClient, ServerApiVersion } from 'mongodb';
import consola from 'consola';
import { Category } from '~~/server/models/category';

const client = new MongoClient(useRuntimeConfig().MONGO_URI || `${process.env.MONGO_URI}`, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connection = await client.connect();
const db = connection.db();
const categoryCollection = db.collection<Category>('categories');
await categoryCollection.createIndex({ slug: 1 }, { unique: true });

consola.success('**Connected to MongoDB!!!!');

export { db, categoryCollection };
