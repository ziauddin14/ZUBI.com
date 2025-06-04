import { useAppContext } from '@/context/AppContext';
import { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export function useWishlist() {
  const { state, dispatch } = useAppContext();
  const { toast } = useToast();

  const toggleWishlist = (product: Product) => {
    const isInWishlist = state.wishlist.some(item => item.id === product.id);
    
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product });
    
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist!",
      description: isInWishlist 
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
      variant: isInWishlist ? "destructive" : "default",
    });
  };

  const isInWishlist = (productId: number) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const getWishlistCount = () => {
    return state.wishlist.length;
  };

  return {
    wishlist: state.wishlist,
    toggleWishlist,
    isInWishlist,
    getWishlistCount
  };
}
