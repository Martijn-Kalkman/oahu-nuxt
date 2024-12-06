import { categoryService } from '~~/server/service/category.service';
import { paramSlugSchema } from '~~/shared/payload/param.slug.schema';

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, paramSlugSchema.parse);
  console.log('Category api call ', params.slug);

  if (params.slug) {
    const category = await categoryService.getBySlug(params.slug);
    console.log(category);
    if (!category) {
      throw createError({
        status: 400,
        statusMessage: 'Not found',
      });
    }

    return {
      category,
    };
  }

  const categories = await categoryService.getAll();
  return {
    category: categories[0],
  };
});
