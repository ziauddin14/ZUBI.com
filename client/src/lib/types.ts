export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface AppState {
  cart: CartItem[];
  wishlist: Product[];
  auth: AuthState;
  darkMode: boolean;
}

export type ViewMode = 'grid' | 'list';

export interface FilterState {
  categories: string[];
  brands: string[];
  maxPrice: number;
  searchQuery: string;
  sortBy: 'default' | 'price-low' | 'price-high' | 'rating' | 'newest';
}
