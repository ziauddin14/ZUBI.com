import { useState } from 'react';
import { Switch, Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { CartPage } from '@/pages/CartPage';
import { WishlistPage } from '@/pages/WishlistPage';
import { FAQPage } from '@/pages/FAQPage';
import { ProductDetail } from '@/components/product/ProductDetail';
import { products } from '@/lib/data';
import NotFound from '@/pages/not-found';
import { FilterState } from '@/lib/types';

function Router() {
  const [shopFilters, setShopFilters] = useState<Partial<FilterState>>({});

  const handleSearch = (query: string) => {
    setShopFilters({ searchQuery: query });
    // Navigate to shop page with search
    window.location.hash = '/shop';
  };

  const handleCategoryFilter = (categoryId: string) => {
    setShopFilters({ categories: [categoryId] });
    // Navigate to shop page with category filter
    window.location.hash = '/shop';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSearch={handleSearch} />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" exact>
            <HomePage onCategoryFilter={handleCategoryFilter} />
          </Route>
          
          <Route path="/shop">
            <ShopPage initialFilters={shopFilters} />
          </Route>
          
          <Route path="/product/:id">
            {(params) => {
              const productId = parseInt(params.id);
              const product = products.find(p => p.id === productId);
              
              if (!product) {
                return <NotFound />;
              }
              
              const relatedProducts = products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4);
              
              return <ProductDetail product={product} relatedProducts={relatedProducts} />;
            }}
          </Route>
          
          <Route path="/cart">
            <CartPage />
          </Route>
          
          <Route path="/wishlist">
            <WishlistPage />
          </Route>
          
          <Route path="/faq">
            <FAQPage />
          </Route>
          
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
