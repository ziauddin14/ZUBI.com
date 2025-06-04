import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/product/ProductCard';
import { products, categories, brands } from '@/lib/data';
import { Product, FilterState, ViewMode } from '@/lib/types';
import { Grid, List } from 'lucide-react';

interface ShopPageProps {
  initialFilters?: Partial<FilterState>;
}

export function ShopPage({ initialFilters = {} }: ShopPageProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filters, setFilters] = useState<FilterState>({
    categories: initialFilters.categories || [],
    brands: [],
    maxPrice: 2000,
    searchQuery: initialFilters.searchQuery || '',
    sortBy: 'default',
    ...initialFilters
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0 && !filters.categories.includes('all')) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    // Apply price filter
    filtered = filtered.filter(product => product.price <= filters.maxPrice);

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
    setDisplayedProducts(8);
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFilters(prev => {
      const newCategories = checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter(c => c !== categoryId);
      return { ...prev, categories: newCategories };
    });
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    setFilters(prev => {
      const newBrands = checked
        ? [...prev.brands, brandId]
        : prev.brands.filter(b => b !== brandId);
      return { ...prev, brands: newBrands };
    });
  };

  const loadMoreProducts = () => {
    setDisplayedProducts(prev => prev + 8);
  };

  const productsToShow = filteredProducts.slice(0, displayedProducts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-foreground">Category</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="all"
                      checked={filters.categories.length === 0 || filters.categories.includes('all')}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFilters(prev => ({ ...prev, categories: ['all'] }));
                        } else {
                          setFilters(prev => ({ ...prev, categories: [] }));
                        }
                      }}
                    />
                    <label htmlFor="all" className="text-sm text-muted-foreground">
                      All Categories
                    </label>
                  </div>
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={filters.categories.includes(category.id)}
                        onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                      />
                      <label htmlFor={category.id} className="text-sm text-muted-foreground">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-foreground">Price Range</h4>
                <div className="space-y-3">
                  <Slider
                    value={[filters.maxPrice]}
                    onValueChange={([value]) => setFilters(prev => ({ ...prev, maxPrice: value }))}
                    max={2000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>${filters.maxPrice}</span>
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-foreground">Brand</h4>
                <div className="space-y-2">
                  {brands.slice(0, 6).map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={filters.brands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
                      />
                      <label htmlFor={brand} className="text-sm text-muted-foreground capitalize">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Sorting and View Options */}
          <Card className="mb-6">
            <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-muted-foreground">Sort by:</span>
                <Select 
                  value={filters.sortBy} 
                  onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value as any }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Products Container */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {productsToShow.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Load More Button */}
          {displayedProducts < filteredProducts.length && (
            <div className="text-center mt-8">
              <Button onClick={loadMoreProducts} variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}

          {/* No products found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                onClick={() => setFilters({
                  categories: [],
                  brands: [],
                  maxPrice: 2000,
                  searchQuery: '',
                  sortBy: 'default'
                })}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
