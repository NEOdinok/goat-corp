interface Pagination {
  limit: number;
  totalCount: number;
  currentPage: number;
  totalPageCount: number;
}

interface ProductGroup {
  id: number;
}

interface OfferPrice {
  priceType: string;
  price: number;
  ordering: number;
  currency: string;
}

interface Offer {
  name: string;
  price: number;
  images: string[];
  id: number;
  prices: OfferPrice[];
  purchasePrice: number;
  vatRate: string;
  properties?: string[];
  quantity: number;
  active: boolean;
  unit: {
    code: string;
    name: string;
    sym: string;
  };
}

interface Product {
  type: string;
  minPrice: number;
  maxPrice: number;
  catalogId: number;
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  popular: boolean;
  stock: boolean;
  novelty: boolean;
  recommended: boolean;
  groups: ProductGroup[];
  manufacturer: string;
  offers: Offer[];
  updatedAt: string;
  active: boolean;
  quantity: number;
  markable: boolean;
}

interface GetProductsResponse {
  success: boolean;
  pagination: Pagination;
  products: Product[];
}

export {
  type GetProductsResponse,
  type Product,
  type Offer,
  type OfferPrice,
  type ProductGroup,
  type Pagination,
};
