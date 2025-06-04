import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, ViewMode } from '@/types';

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found.</p>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className={
      viewMode === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        : "space-y-4"
    }>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};
