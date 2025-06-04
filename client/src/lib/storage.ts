import { CartItem, Product, User, AppState } from './types';

const STORAGE_KEYS = {
  CART: 'shophub_cart',
  WISHLIST: 'shophub_wishlist',
  USER: 'shophub_user',
  DARK_MODE: 'shophub_dark_mode'
};

export const storage = {
  // Cart operations
  getCart(): CartItem[] {
    try {
      const cart = localStorage.getItem(STORAGE_KEYS.CART);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  },

  setCart(cart: CartItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  },

  // Wishlist operations
  getWishlist(): Product[] {
    try {
      const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      return [];
    }
  },

  setWishlist(wishlist: Product[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  },

  // User operations
  getUser(): User | null {
    try {
      const user = localStorage.getItem(STORAGE_KEYS.USER);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      return null;
    }
  },

  setUser(user: User | null): void {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  },

  // Dark mode
  getDarkMode(): boolean {
    try {
      const darkMode = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
      return darkMode === 'true';
    } catch (error) {
      console.error('Error loading dark mode from localStorage:', error);
      return false;
    }
  },

  setDarkMode(darkMode: boolean): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DARK_MODE, darkMode.toString());
    } catch (error) {
      console.error('Error saving dark mode to localStorage:', error);
    }
  }
};
