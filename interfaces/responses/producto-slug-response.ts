export interface ProductoSlugsResponse {
  productoss: Productoss;
}

export interface Productoss {
  nodes: ProductossNode[];
}

export interface ProductossNode {
  slug:                string;
  productosCategorias: ProductosCategorias;
}

export interface ProductosCategorias {
  nodes: ProductosCategoriasNode[];
}

export interface ProductosCategoriasNode {
  slug: string;
}
