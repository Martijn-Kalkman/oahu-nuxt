import Categories from "~/server/models/categories"


export default defineEventHandler(async (event) => {

    const categories = await Categories.find();

    return {
        categories
    }
})