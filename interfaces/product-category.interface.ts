export interface Recipe {
  id: string;
  title: string;
  image: string;
  preparation: string;
  slug: string;
}
export interface ProductCarrousel {
  id: string;
  img: string;
}
export interface Product {
  id: string;
  title: string; //Quebranta
  slug: string; //pisco-premium-quebranta2
  content: string; //Abrir una botella es percibir sensaciones aromáticas
  image: string; // Imagen Principal
  carrousel: ProductCarrousel[]; // Carrousel
  recipe: Recipe;
}
export interface ProductCategoryPage {
  title: string; // Línea Premium
  description: string; // Nuestra Línea Premium se caracteriza por tener nuestra botella
  slug: string; // linea-premium
  product: Product[];
}