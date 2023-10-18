export interface ProductCategoryPageResponse {
  productosCategorias: ProductosCategorias;
}

export interface ProductosCategorias {
  nodes: ProductosCategoriasNode[];
}

export interface ProductosCategoriasNode {
  name:        string;
  description: string;
  slug:        string;
  productoss:  Productoss;
}

export interface Productoss {
  nodes: ProductossNode[];
}

export interface ProductossNode {
  id:            string;
  title:         string;
  slug:          string;
  content:       string;
  featuredImage: FeaturedImage;
  galeria:       Galeria;
  receta:        Receta;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface FeaturedImageNode {
  sourceUrl: string;
}

export interface Galeria {
  nodes: GaleriaNode[];
}

export interface GaleriaNode {
  id:   string;
  guid: string;
}

export interface Receta {
  node: RecetaNode;
}

export interface RecetaNode {
  id:              string;
  title:           string;
  featuredImage:   FeaturedImage;
  preparation:     string;
  slug:            string;
  elBarCategorias: ElBarCategorias;
}

export interface ElBarCategorias {
  nodes: ElBarCategoriasNode[];
}

export interface ElBarCategoriasNode {
  slug: string;
}
