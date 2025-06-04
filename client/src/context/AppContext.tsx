import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AppState, CartItem, Product, User } from '@/lib/types';
import { storage } from '@/lib/storage';

type AppAction =
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_WISHLIST'; payload: Product[] }
  | { type: 'TOGGLE_WISHLIST'; payload: Product }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_DARK_MODE'; payload: boolean };

const initialState: AppState = {
  cart: [],
  wishlist: [],
  auth: {
    user: null,
    isAuthenticated: false
  },
  darkMode: false
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
        return { ...state, cart: newCart };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cart.filter(item => item.id !== action.payload);
      return { ...state, cart: updatedCart };
    }
    
    case 'UPDATE_CART_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
        return { ...state, cart: updatedCart };
      }
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cart: updatedCart };
    }
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'SET_WISHLIST':
      return { ...state, wishlist: action.payload };
    
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (exists) {
        const updatedWishlist = state.wishlist.filter(item => item.id !== action.payload.id);
        return { ...state, wishlist: updatedWishlist };
      } else {
        const updatedWishlist = [...state.wishlist, action.payload];
        return { ...state, wishlist: updatedWishlist };
      }
    }
    
    case 'SET_USER':
      return {
        ...state,
        auth: {
          user: action.payload,
          isAuthenticated: !!action.payload
        }
      };
    
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload };
    
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load initial data from localStorage
  useEffect(() => {
    const cart = storage.getCart();
    const wishlist = storage.getWishlist();
    const user = storage.getUser();
    const darkMode = storage.getDarkMode();

    dispatch({ type: 'SET_CART', payload: cart });
    dispatch({ type: 'SET_WISHLIST', payload: wishlist });
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'SET_DARK_MODE', payload: darkMode });

    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    storage.setCart(state.cart);
  }, [state.cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    storage.setWishlist(state.wishlist);
  }, [state.wishlist]);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    storage.setUser(state.auth.user);
  }, [state.auth.user]);

  // Save dark mode and apply to document
  useEffect(() => {
    storage.setDarkMode(state.darkMode);
    if (state.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.darkMode]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
