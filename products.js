// ZUBI Products Data
const products = [
  {
    id: 1,
    name: "MacBook Pro 14\"",
    price: 1999,
    originalPrice: 2199,
    category: "electronics",
    brand: "apple",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    description: "Professional laptop with M2 Pro chip for demanding workflows.",
    features: ["14-inch Liquid Retina XDR display", "M2 Pro chip", "22 hours battery", "Advanced camera and audio"]
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 999,
    originalPrice: 1099,
    category: "electronics",
    brand: "apple",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    description: "Latest iPhone with advanced camera system.",
    features: ["6.1-inch display", "A16 Bionic chip", "Pro camera system"]
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    price: 249,
    originalPrice: 349,
    category: "electronics",
    brand: "sony",
    rating: 4.7,
    reviews: 523,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Noise canceling wireless headphones.",
    features: ["Active Noise Canceling", "30-hour battery", "Touch controls"]
  },
  {
    id: 4,
    name: "Levi's 501 Jeans",
    price: 89,
    originalPrice: 119,
    category: "fashion",
    brand: "levis",
    rating: 4.3,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    description: "Classic straight-fit jeans.",
    features: ["100% cotton denim", "Classic fit", "Button fly"]
  },
  {
    id: 5,
    name: "Nike Hoodie",
    price: 79,
    originalPrice: 99,
    category: "fashion",
    brand: "nike",
    rating: 4.5,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    description: "Comfortable pullover hoodie.",
    features: ["Cotton blend", "Kangaroo pocket", "Ribbed cuffs"]
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    price: 129,
    originalPrice: 149,
    category: "sports",
    brand: "nike",
    rating: 4.5,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Running shoes with Max Air.",
    features: ["Max Air unit", "Lightweight", "Durable outsole"]
  },
  // ... Add 94 more products with real/unique images and varied categories/brands ...
]; 