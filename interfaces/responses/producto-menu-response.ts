export interface ProductoMenuResponse {
  productosCategorias: ProductosCategorias;
}

export interface ProductosCategorias {
  nodes: ProductosCategoriasNode[];
}

export interface ProductosCategoriasNode {
  id:         string;
  name:       string;
  slug:       string;
  productoss: Productoss;
}

export interface Productoss {
  nodes: ProductossNode[];
}

export interface ProductossNode {
  id:    string;
  title: string;
  slug:  string;
}