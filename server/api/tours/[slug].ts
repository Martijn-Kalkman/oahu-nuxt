import { categoryService } from '~~/server/service/category.service';
import { paramSlugSchema } from '~~/shared/payload/param.slug.schema';

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, paramSlugSchema.parse);

  if (params.slug) {
    const category = await categoryService.getBySlug(params.slug);
    if (!category) {
      throw createError({
        status: 400,
        statusMessage: 'Not found',
      });
    }

    return {
      category: {
        ...category,
        cards: category.cards.map((card) => {
          return {
            ...card,
            discountedPrice: (card.price * parseFloat(card.discountPercentage)) / 100,
          };
        }),
      },
    };
  }

  const categories = await categoryService.getAll();
  return {
    category: {
      ...categories[0],
      cards: categories[0].cards.map((card) => {
        return {
          ...card,
          discountedPrice: (card.price * parseFloat(card.discountPercentage)) / 100,
        };
      }),
    },
  };
});
