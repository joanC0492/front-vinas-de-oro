export interface ElBarCarrousel {
  id: string;
  img: string;
}
export interface ElBar {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  image: string;
  carrousel: ElBarCarrousel[];
}
export interface ElBarCategoryPage {
  title: string; // Fáciles y Rápidos
  slug: string; // faciles-y-rapidos
  elbar: ElBar[];
}
