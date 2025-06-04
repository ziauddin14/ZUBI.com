import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/product/ProductCard';
import { products, categories } from '@/lib/data';
import { Laptop, Shirt, Home, Dumbbell } from 'lucide-react';
import { Link } from 'wouter';

const categoryIcons = {
  laptop: Laptop,
  shirt: Shirt,
  home: Home,
  dumbbell: Dumbbell
};

interface HomePageProps {
  onCategoryFilter: (category: string) => void;
}

export function HomePage({ onCategoryFilter }: HomePageProps) {
  const featuredProducts = products.slice(0, 4);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryFilter(categoryId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover amazing products at unbeatable prices
          </p>
          <Link href="/shop">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 text-lg transition-all duration-200 transform hover:scale-105 animate-bounce-subtle"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
              return (
                <Card 
                  key={category.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-xl mb-8">Get 30% off on all electronics. Use code: TECH30</p>
          <Link href="/shop">
            <Button 
              variant="secondary"
              size="lg"
              className="font-bold py-3 px-8"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
