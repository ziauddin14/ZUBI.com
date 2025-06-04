import { CartItem, Product, User } from '@/types';

const STORAGE_KEYS = {
  CART: 'shophub_cart',
  WISHLIST: 'shophub_wishlist',
  USER: 'shophub_user',
  DARK_MODE: 'shophub_dark_mode'
} as const;

// Cart functions
export const getCartFromStorage = (): CartItem[] => {
  try {
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCartToStorage = (cart: CartItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

// Wishlist functions
export const getWishlistFromStorage = (): Product[] => {
  try {
    const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch {
    return [];
  }
};

export const saveWishlistToStorage = (wishlist: Product[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  } catch (error) {
    console.error('Failed to save wishlist to localStorage:', error);
  }
};

// User functions
export const getUserFromStorage = (): User | null => {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const saveUserToStorage = (user: User): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (error) {
    console.error('Failed to save user to localStorage:', error);
  }
};

export const removeUserFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER);
  } catch (error) {
    console.error('Failed to remove user from localStorage:', error);
  }
};

// Dark mode functions
export const getDarkModeFromStorage = (): boolean => {
  try {
    const darkMode = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    return darkMode === 'true';
  } catch {
    return false;
  }
};

export const saveDarkModeToStorage = (isDark: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, isDark.toString());
  } catch (error) {
    console.error('Failed to save dark mode to localStorage:', error);
  }
};
