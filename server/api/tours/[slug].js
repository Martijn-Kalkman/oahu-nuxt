import Category from '~/server/models/category';

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;
  console.log('Category api call ', slug);
  if (slug) {
    const category = await Category.findOne({ slug: slug });
    console.log(category);
    if (!category) {
      return {
        statusCode: 404,
        message: 'Category not found.',
      };
    }

    return {
      category,
    };
  }

  const category = await Category.find();
  return {
    category,
  };
});
