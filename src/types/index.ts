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
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: [
    {
      width: number;
      height: number;
      depth: number;
    }
  ]
  warrantlyInformation: string;
  images: string[];
}
export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  sortBy?: string;
  priceOrder?: "asc" | "desc";
}
export interface ICustomer {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  // phone_number: string;
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
    color: string[];
    additional_info: string;
    description: string;
    average_rating: number;
    sku: string;
    tags: string[];
    categoryId?: number;
    product_category: {
      id: number;
      name: string;
    };
    product_comments: {
      comment: string;
  };
  };
}
