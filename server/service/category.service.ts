import { categoryCollection } from '~~/server/use/use.db.connection';

const getAll = async () => {
  return categoryCollection.find({}).toArray();
};

const getBySlug = async (slug: string) => {
  return categoryCollection.findOne({ slug });
};

export const categoryService = {
  getAll,
  getBySlug,
};
