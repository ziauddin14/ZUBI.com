import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999.99,
    originalPrice: 1099.99,
    category: "electronics",
    brand: "apple",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "The latest iPhone with advanced camera system and A16 Bionic chip.",
    features: ["6.1-inch Super Retina XDR display", "A16 Bionic chip", "Pro camera system", "48MP Main camera"]
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 799.99,
    originalPrice: 899.99,
    category: "electronics",
    brand: "samsung",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Premium Android smartphone with exceptional camera capabilities.",
    features: ["6.1-inch Dynamic AMOLED display", "Snapdragon 8 Gen 2", "Triple camera system", "8K video recording"]
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    price: 129.99,
    originalPrice: 149.99,
    category: "sports",
    brand: "nike",
    rating: 4.5,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Comfortable running shoes with Max Air cushioning.",
    features: ["Max Air unit", "Lightweight design", "Durable rubber outsole", "Breathable mesh upper"]
  },
  {
    id: 4,
    name: "MacBook Pro 14\"",
    price: 1999.99,
    originalPrice: 2199.99,
    category: "electronics",
    brand: "apple",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Professional laptop with M2 Pro chip for demanding workflows.",
    features: ["14-inch Liquid Retina XDR display", "M2 Pro chip", "Up to 22 hours battery", "Advanced camera and audio"]
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    price: 249.99,
    originalPrice: 349.99,
    category: "electronics",
    brand: "sony",
    rating: 4.7,
    reviews: 523,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Industry-leading noise canceling wireless headphones.",
    features: ["Active Noise Canceling", "30-hour battery life", "Touch controls", "High-resolution audio"]
  },
  {
    id: 6,
    name: "Levi's 501 Jeans",
    price: 89.99,
    originalPrice: 119.99,
    category: "fashion",
    brand: "levis",
    rating: 4.3,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Classic straight-fit jeans made from premium denim.",
    features: ["100% cotton denim", "Classic straight fit", "Button fly", "Iconic styling"]
  },
  {
    id: 7,
    name: "Instant Pot Duo 7-in-1",
    price: 79.99,
    originalPrice: 99.99,
    category: "home",
    brand: "instant",
    rating: 4.6,
    reviews: 1245,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Multi-functional electric pressure cooker for quick and easy meals.",
    features: ["7-in-1 functionality", "6-quart capacity", "Safe and easy to use", "Free recipe app"]
  },
  {
    id: 8,
    name: "Adidas Ultraboost 22",
    price: 189.99,
    originalPrice: 219.99,
    category: "sports",
    brand: "adidas",
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Premium running shoes with responsive Boost cushioning.",
    features: ["Boost midsole", "Primeknit upper", "Continental rubber outsole", "Sock-like fit"]
  },
  {
    id: 9,
    name: "iPad Air",
    price: 599.99,
    originalPrice: 649.99,
    category: "electronics",
    brand: "apple",
    rating: 4.7,
    reviews: 321,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Powerful, colorful, and versatile iPad with M1 chip.",
    features: ["10.9-inch Liquid Retina display", "M1 chip", "12MP cameras", "All-day battery life"]
  },
  {
    id: 10,
    name: "Under Armour HeatGear Shirt",
    price: 34.99,
    originalPrice: 44.99,
    category: "sports",
    brand: "underarmour",
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Lightweight, breathable athletic shirt for peak performance.",
    features: ["HeatGear fabric", "Moisture-wicking", "Anti-odor technology", "4-way stretch"]
  },
  {
    id: 11,
    name: "KitchenAid Stand Mixer",
    price: 379.99,
    originalPrice: 429.99,
    category: "home",
    brand: "kitchenaid",
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Professional-grade stand mixer for all your baking needs.",
    features: ["5-quart bowl", "10 speeds", "Tilt-head design", "Multiple attachments"]
  },
  {
    id: 12,
    name: "Calvin Klein Dress Shirt",
    price: 69.99,
    originalPrice: 89.99,
    category: "fashion",
    brand: "calvinklein",
    rating: 4.1,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Classic slim-fit dress shirt for professional occasions.",
    features: ["100% cotton", "Slim fit", "Wrinkle-resistant", "Machine washable"]
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'laptop' },
  { id: 'fashion', name: 'Fashion', icon: 'shirt' },
  { id: 'home', name: 'Home & Garden', icon: 'home' },
  { id: 'sports', name: 'Sports', icon: 'dumbbell' }
];

export const brands = [
  'apple',
  'samsung', 
  'nike',
  'sony',
  'levis',
  'instant',
  'adidas',
  'underarmour',
  'kitchenaid',
  'calvinklein'
];
