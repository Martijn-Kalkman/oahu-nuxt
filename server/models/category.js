import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  slug: { type: String },
  headerTitle: { type: String },
  headerSubTitle: { type: String },
  headerImage: { type: String },
  title: { type: String },
  text: { type: String },
  video: { type: String },
  imagesArrayMain: [
    {
      imagesArray: [{ image: { type: String } }],
    },
  ],
  cards: [
    {
      headerTitle: { type: String },
      headerSubTitle: { type: String },
      headerImage: { type: String },
      slug: { type: String },
      text: { type: String },
      price: { type: String },
      discountPercentage: { type: String },
    },
  ],
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
