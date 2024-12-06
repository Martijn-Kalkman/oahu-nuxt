import consola from 'consola';
import { db } from '~~/server/use/use.db.connection';

export default defineNitroPlugin(async () => {
  try {
    consola.success('... connected database name', db.databaseName);
  } catch (error) {
    consola.error('Nitro startup error', error);
  }
});
