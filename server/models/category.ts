export interface CategoryCard {
  headerTitle: string;
  headerSubTitle: string;
  headerImage: string;
  slug: string;
  text: string;
  price: number;
  discountPercentage: number;
}

export interface Category {
  slug: string;
  headerTitle: string;
  headerSubTitle: string;
  headerImage: string;
  title: string;
  text: string;
  video: string;

  cards: CategoryCard[];
}
