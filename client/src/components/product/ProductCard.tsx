import { Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { Link } from 'wouter';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            {discount > 0 && (
              <Badge className="absolute -top-2 -left-2 bg-destructive text-destructive-foreground">
                {discount}% OFF
              </Badge>
            )}
          </div>
          
          <div className="flex-1">
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-foreground mb-1 hover:text-primary cursor-pointer transition-colors">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {product.description}
            </p>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleWishlist(product)}
                className={isInWishlist(product.id) ? 'text-red-500 border-red-500' : ''}
              >
                <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </Button>
              <Button
                size="sm"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200 transform hover:scale-105 overflow-hidden">
      <div className="relative">
        {discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground z-10">
            {discount}% OFF
          </Badge>
        )}
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        <Button
          variant="outline"
          size="sm"
          className={`absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm ${
            isInWishlist(product.id) ? 'text-red-500 border-red-500' : ''
          }`}
          onClick={() => toggleWishlist(product)}
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
