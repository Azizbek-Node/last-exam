export interface IGetResponseProducts {
  data: IGetProducts;
  message: string;
  statusCode: number;
}

export interface IGetProducts {
  limit: number;
  page: number;
  products: IProduct[];
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  images: string[];
}

export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  sortBy?: string;
}

export interface IGetResponseSingleProduct {
  data: IGetSingleProduct;
  message: string;
  statusCode: number;
}

export interface IGetSingleProduct {
  product: {
    id: number;
    image: string[];
    price: number;
    title: string;
    description: string;
    average_rating: number;
    sku: string;
    tags: string[];
    categoryId?: number;
    product_category: {
      id: number;
      name: string;
    };
  };
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  id: number;
  username: string;
  email: string;
}

