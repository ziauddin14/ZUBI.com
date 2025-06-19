// SPA Navigation & Theme Toggle for ZUBI

// Page IDs
const pages = [
  'homePage', 'shopPage', 'productDetailPage', 'checkoutPage', 'orderSuccessPage',
  'orderHistoryPage', 'wishlistPage', 'faqPage', 'aboutPage', 'contactPage', 'termsPage', 'privacyPage'
];

// Show only selected page
function showPage(pageId) {
  pages.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
  // Close cart sidebar if open
  document.getElementById('cartSidebar').classList.add('hidden');
}

// Theme toggle
function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.setItem('zubi_dark_mode', html.classList.contains('dark'));
  renderNavbar();
}

// On load, set theme
(function() {
  if (localStorage.getItem('zubi_dark_mode') === 'true') {
    document.documentElement.classList.add('dark');
  }
})();

// Navbar rendering
function renderNavbar() {
  const isDark = document.documentElement.classList.contains('dark');
  document.getElementById('navbar').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
      <div class="flex flex-col items-start">
        <span class="text-2xl font-bold bg-gradient-zubi bg-clip-text text-transparent cursor-pointer leading-tight" onclick="showPage('homePage')">ZUBI</span>
        <span class="text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wide ml-1 mt-1">ZU Business Industries</span>
      </div>
      <div class="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <button onclick="showPage('homePage')" class="px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">Home</button>
        <button onclick="showPage('shopPage')" class="px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">Shop</button>
        <button onclick="showPage('wishlistPage')" class="relative px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">
          Wishlist <span id="wishlistCount" class="ml-1 text-xs bg-primary text-white rounded-full px-2 hidden">0</span>
        </button>
        <button onclick="toggleCartSidebar()" class="relative px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">
          Cart <span id="cartCount" class="ml-1 text-xs bg-primary text-white rounded-full px-2 hidden">0</span>
        </button>
        <button onclick="showPage('faqPage')" class="px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">FAQs</button>
        <button onclick="showAuthModal('login')" class="px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">Login</button>
        <button onclick="showAuthModal('signup')" class="px-3 py-2 rounded font-semibold hover:bg-primary/10 hover:text-primary transition">Sign Up</button>
        <button onclick="toggleDarkMode()" class="ml-2 text-xl">${isDark ? '🌙' : '☀️'}</button>
      </div>
    </div>
  `;
}

// Footer rendering
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-2 text-primary">ZUBI</h3>
        <p class="text-gray-400">ZU Business Industries - Your premier destination for online shopping with the best products and unbeatable prices.</p>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Customer Service</h4>
        <ul class="space-y-1 text-gray-400">
          <li><button onclick="showPage('contactPage')" class="hover:text-white">Contact Us</button></li>
          <li><button onclick="showPage('faqPage')" class="hover:text-white">FAQs</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Company</h4>
        <ul class="space-y-1 text-gray-400">
          <li><button onclick="showPage('aboutPage')" class="hover:text-white">About Us</button></li>
          <li><button onclick="showPage('shopPage')" class="hover:text-white">Shop</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Legal</h4>
        <ul class="space-y-1 text-gray-400">
          <li><button onclick="showPage('privacyPage')" class="hover:text-white">Privacy Policy</button></li>
          <li><button onclick="showPage('termsPage')" class="hover:text-white">Terms of Service</button></li>
        </ul>
        <div class="flex space-x-3 mt-4">
          <a href="#" class="hover:text-primary" title="Facebook"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          <a href="#" class="hover:text-primary" title="Instagram"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.998 2.334 6.407 2.334 12c0 5.593.013 6.002.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-7.282 0-5.593-.013-6.002-.072-7.282-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
          <a href="#" class="hover:text-primary" title="LinkedIn"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
          <a href="#" class="hover:text-primary" title="GitHub"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a href="#" class="hover:text-primary" title="Twitter"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">&copy; 2025 ZU Business Industries. All rights reserved.</div>
  `;
}

// Cart sidebar toggle (placeholder)
function toggleCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('hidden');
}

// Auth modal (placeholder)
function showAuthModal(mode) {
  const modal = document.getElementById('authModal');
  modal.classList.remove('hidden');
  modal.innerHTML = `<div class='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6'>
    <div class='flex justify-between items-center mb-4'>
      <h2 class='text-lg font-semibold text-gray-900 dark:text-white'>${mode === 'signup' ? 'Sign Up' : 'Login'}</h2>
      <button onclick="closeAuthModal()" class='text-gray-400 hover:text-gray-600'>&times;</button>
    </div>
    <form onsubmit='return false;'>
      <input type='email' placeholder='Email' class='w-full mb-3 px-3 py-2 border rounded'/>
      <input type='password' placeholder='Password' class='w-full mb-3 px-3 py-2 border rounded'/>
      ${mode === 'signup' ? "<input type='text' placeholder='Full Name' class='w-full mb-3 px-3 py-2 border rounded'/>" : ''}
      <button class='w-full bg-primary text-white py-2 rounded'>${mode === 'signup' ? 'Sign Up' : 'Login'}</button>
    </form>
  </div>`;
}
function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
}

// --- Fake Data ---
const categories = [
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'sports', name: 'Sports & Fitness', icon: '⚽' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'books', name: 'Books & Media', icon: '📚' },
  { id: 'beauty', name: 'Health & Beauty', icon: '💄' },
  { id: 'toys', name: 'Toys & Games', icon: '🧸' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
  { id: 'office', name: 'Office Supplies', icon: '💼' },
  { id: 'pets', name: 'Pet Supplies', icon: '🐕' },
  { id: 'garden', name: 'Garden & Outdoor', icon: '🌱' },
  { id: 'jewelry', name: 'Jewelry & Watches', icon: '💎' }
];
const brands = ['apple', 'samsung', 'nike', 'sony', 'levis', 'instant', 'adidas', 'google', 'dell', 'hp', 'zara', 'hm', 'calvinklein', 'penguin', 'cerave', 'nintendo'];

// Generate 100 fake products
const products = Array.from({ length: 100 }, (_, i) => {
  const cat = categories[i % categories.length];
  const brand = brands[i % brands.length];
  return {
    id: i + 1,
    name: `${brand.charAt(0).toUpperCase() + brand.slice(1)} Product ${i + 1}`,
    price: Math.round(Math.random() * 900 + 20),
    originalPrice: Math.round(Math.random() * 1000 + 100),
    category: cat.id,
    brand,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500 + 10),
    image: `https://source.unsplash.com/400x300/?${cat.name},${brand}`,
    description: `This is a ${cat.name} product by ${brand}.`,
    features: [
      'High quality',
      'Best seller',
      'Limited stock',
      'Free shipping'
    ]
  };
});

// Sample users (for auth, later)
const users = [
  { id: 1, name: 'Zia Uddin', email: 'zu37216@gmail.com', password: 'password' }
];

// --- Home Page Render ---
function renderHomePage() {
  // Hero Section
  const hero = `
    <section class="relative bg-gradient-zubi text-white py-16 rounded-b-3xl overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="relative max-w-3xl mx-auto px-4 text-center z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow">Welcome to <span class="bg-white bg-opacity-20 px-2 rounded text-primary">ZUBI</span></h1>
        <p class="text-xl md:text-2xl mb-8">Discover amazing products at unbeatable prices</p>
        <button onclick="showPage('shopPage')" class="bg-white text-primary font-bold py-3 px-8 text-lg rounded-lg shadow hover:bg-gray-100 transition-all">Start Shopping</button>
      </div>
    </section>
  `;
  // Categories Grid
  const categoriesGrid = `
    <section class="py-10 bg-white dark:bg-gray-900">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Shop by Category</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        ${categories.map(cat => `
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg cursor-pointer flex flex-col items-center p-5 transition-all hover:scale-105" onclick="filterShopByCategory('${cat.id}')">
            <div class="text-4xl mb-2">${cat.icon}</div>
            <span class="font-semibold text-gray-900 dark:text-white">${cat.name}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Featured Products
  const featured = products.slice(0, 6);
  const featuredProducts = `
    <section class="py-10 bg-gray-50 dark:bg-gray-900">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        ${featured.map(product => `
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all overflow-hidden flex flex-col">
            <img src="${product.image || 'https://via.placeholder.com/400x300?text=Product'}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4 flex-1 flex flex-col">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
              <div class="flex items-center mb-2">
                <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
                <span class="text-gray-400 line-through">$${product.originalPrice}</span>
              </div>
              <div class="flex items-center mb-2">
                <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
                <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
              </div>
              <div class="mt-auto flex gap-2">
                <button class="flex-1 bg-primary text-white py-2 rounded hover:bg-opacity-90 transition-all" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="flex-1 border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition-all" onclick="addToWishlist(${product.id})">Wishlist</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  document.getElementById('homePage').innerHTML = hero + categoriesGrid + featuredProducts;
}

// Category filter (placeholder)
function filterShopByCategory(categoryId) {
  // TODO: Implement shop filter logic
  showPage('shopPage');
}

// Add to Cart/Wishlist (placeholder)
function addToCart(productId) {
  alert('Add to Cart: ' + productId);
}
function addToWishlist(productId) {
  alert('Add to Wishlist: ' + productId);
}

// --- Shop Page State ---
let shopFilters = {
  search: '',
  categories: [],
  brands: [],
  maxPrice: 2000,
  sortBy: 'default',
  view: 'grid',
};
let shopDisplayed = 12;

function renderShopPage() {
  // Filtered products
  let filtered = products.filter(p => {
    let match = true;
    if (shopFilters.search) {
      const q = shopFilters.search.toLowerCase();
      match = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    if (match && shopFilters.categories.length)
      match = shopFilters.categories.includes(p.category);
    if (match && shopFilters.brands.length)
      match = shopFilters.brands.includes(p.brand);
    if (match && shopFilters.maxPrice)
      match = p.price <= shopFilters.maxPrice;
    return match;
  });
  // Sorting
  if (shopFilters.sortBy === 'price-low') filtered.sort((a,b)=>a.price-b.price);
  if (shopFilters.sortBy === 'price-high') filtered.sort((a,b)=>b.price-a.price);
  if (shopFilters.sortBy === 'rating') filtered.sort((a,b)=>b.rating-a.rating);
  if (shopFilters.sortBy === 'newest') filtered.sort((a,b)=>b.id-a.id);
  // Pagination
  const productsToShow = filtered.slice(0, shopDisplayed);

  // Filters UI
  const categoryFilters = categories.map(cat => `
    <label class="flex items-center space-x-2">
      <input type="checkbox" value="${cat.id}" ${shopFilters.categories.includes(cat.id)?'checked':''} onchange="toggleShopCategory('${cat.id}')" class="rounded border-gray-300 text-primary focus:ring-primary">
      <span>${cat.name}</span>
    </label>
  `).join('');
  const brandFilters = brands.map(brand => `
    <label class="flex items-center space-x-2">
      <input type="checkbox" value="${brand}" ${shopFilters.brands.includes(brand)?'checked':''} onchange="toggleShopBrand('${brand}')" class="rounded border-gray-300 text-primary focus:ring-primary">
      <span class="capitalize">${brand}</span>
    </label>
  `).join('');

  // Main Shop UI
  document.getElementById('shopPage').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      <!-- Filters Sidebar -->
      <aside class="lg:w-1/4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-fit">
        <h3 class="text-lg font-semibold mb-4">Filters</h3>
        <div class="mb-6">
          <h4 class="font-medium mb-2">Category</h4>
          <div class="space-y-2">${categoryFilters}</div>
        </div>
        <div class="mb-6">
          <h4 class="font-medium mb-2">Brand</h4>
          <div class="space-y-2">${brandFilters}</div>
        </div>
        <div class="mb-6">
          <h4 class="font-medium mb-2">Price Range</h4>
          <input type="range" min="0" max="2000" value="${shopFilters.maxPrice}" oninput="setShopPrice(this.value)" class="w-full">
          <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>$0</span><span id="shopPriceValue">$${shopFilters.maxPrice}</span>
          </div>
        </div>
        <button onclick="clearShopFilters()" class="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mt-2">Clear Filters</button>
      </aside>
      <!-- Products Grid/List -->
      <section class="lg:w-3/4">
        <div class="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <form onsubmit="shopSearch(event)" class="flex-1 relative">
            <input type="text" placeholder="Search products..." value="${shopFilters.search}" oninput="setShopSearch(this.value)" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </form>
          <div class="flex items-center gap-2">
            <span>Sort:</span>
            <select onchange="setShopSort(this.value)" class="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 bg-white dark:bg-gray-700">
              <option value="default" ${shopFilters.sortBy==='default'?'selected':''}>Default</option>
              <option value="price-low" ${shopFilters.sortBy==='price-low'?'selected':''}>Price: Low to High</option>
              <option value="price-high" ${shopFilters.sortBy==='price-high'?'selected':''}>Price: High to Low</option>
              <option value="rating" ${shopFilters.sortBy==='rating'?'selected':''}>Highest Rated</option>
              <option value="newest" ${shopFilters.sortBy==='newest'?'selected':''}>Newest</option>
            </select>
            <button onclick="setShopView('grid')" class="p-2 rounded ${shopFilters.view==='grid'?'bg-primary text-white':'border border-gray-300'}">🔲</button>
            <button onclick="setShopView('list')" class="p-2 rounded ${shopFilters.view==='list'?'bg-primary text-white':'border border-gray-300'}">📋</button>
          </div>
        </div>
        <div class="${shopFilters.view==='grid'?'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6':'flex flex-col gap-4'}">
          ${productsToShow.map(product => shopFilters.view==='grid' ? renderProductCard(product) : renderProductListItem(product)).join('')}
        </div>
        ${shopDisplayed < filtered.length ? `<div class="text-center mt-8"><button onclick="loadMoreShop()" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Load More Products</button></div>` : ''}
        ${filtered.length === 0 ? `<div class="text-center py-12 text-gray-500">No products found.</div>` : ''}
      </section>
    </div>
  `;
  document.getElementById('shopPriceValue').textContent = `$${shopFilters.maxPrice}`;
}

function renderProductCard(product) {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all overflow-hidden flex flex-col">
      <img src="${product.image || 'https://via.placeholder.com/400x300?text=Product'}" alt="${product.name}" class="w-full h-48 object-cover">
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
        <div class="flex items-center mb-2">
          <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
          <span class="text-gray-400 line-through">$${product.originalPrice}</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
          <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
        </div>
        <div class="mt-auto flex gap-2">
          <button class="flex-1 bg-primary text-white py-2 rounded hover:bg-opacity-90 transition-all" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="flex-1 border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition-all" onclick="addToWishlist(${product.id})">Wishlist</button>
        </div>
      </div>
    </div>
  `;
}
function renderProductListItem(product) {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col sm:flex-row overflow-hidden">
      <img src="${product.image || 'https://via.placeholder.com/400x300?text=Product'}" alt="${product.name}" class="w-full sm:w-48 h-48 object-cover">
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
        <div class="flex items-center mb-2">
          <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
          <span class="text-gray-400 line-through">$${product.originalPrice}</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
          <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
        </div>
        <div class="flex gap-2 mt-auto">
          <button class="flex-1 bg-primary text-white py-2 rounded hover:bg-opacity-90 transition-all" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="flex-1 border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition-all" onclick="addToWishlist(${product.id})">Wishlist</button>
        </div>
      </div>
    </div>
  `;
}
// Shop filter handlers
function setShopSearch(val) { shopFilters.search = val; renderShopPage(); }
function setShopSort(val) { shopFilters.sortBy = val; renderShopPage(); }
function setShopView(val) { shopFilters.view = val; renderShopPage(); }
function setShopPrice(val) { shopFilters.maxPrice = parseInt(val); renderShopPage(); }
function toggleShopCategory(cat) {
  if (shopFilters.categories.includes(cat)) shopFilters.categories = shopFilters.categories.filter(c=>c!==cat);
  else shopFilters.categories.push(cat);
  renderShopPage();
}
function toggleShopBrand(brand) {
  if (shopFilters.brands.includes(brand)) shopFilters.brands = shopFilters.brands.filter(b=>b!==brand);
  else shopFilters.brands.push(brand);
  renderShopPage();
}
function clearShopFilters() {
  shopFilters = { search: '', categories: [], brands: [], maxPrice: 2000, sortBy: 'default', view: shopFilters.view };
  renderShopPage();
}
function loadMoreShop() { shopDisplayed += 12; renderShopPage(); }
function shopSearch(e) { e.preventDefault(); renderShopPage(); }

// Home category click wires to Shop filter
toShopCategory = function(catId) {
  shopFilters.categories = [catId];
  showPage('shopPage');
  renderShopPage();
};
// Update HomePage category click
function filterShopByCategory(categoryId) {
  toShopCategory(categoryId);
}

// --- Update SPA navigation to call renderShopPage ---
const oldShowPage2 = showPage;
showPage = function(pageId) {
  oldShowPage2(pageId);
  if (pageId === 'homePage') renderHomePage();
  if (pageId === 'shopPage') renderShopPage();
};

// Initial render
window.onload = function() {
  renderNavbar();
  renderFooter();
  renderHomePage();
  renderShopPage();
  showPage('homePage');
};

// Render products on shop.html
function renderProducts(page = 1, perPage = 12) {
  const container = document.getElementById('productsContainer');
  if (!container || typeof products === 'undefined') return;
  container.innerHTML = '';
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageProducts = products.slice(start, end);

  if (pageProducts.length === 0) {
    document.getElementById('noProductsFound').classList.remove('hidden');
    document.getElementById('loadMoreContainer').classList.add('hidden');
    return;
  } else {
    document.getElementById('noProductsFound').classList.add('hidden');
  }

  pageProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all overflow-hidden flex flex-col';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
        <div class="flex items-center mb-2">
          <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
          <span class="text-gray-400 line-through">$${product.originalPrice}</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
          <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
        </div>
        <div class="mt-auto flex gap-2">
          <a href="cart.html" class="flex-1 bg-primary text-white py-2 rounded text-center hover:bg-opacity-90 transition-all">Add to Cart</a>
          <a href="wishlist.html" class="flex-1 border border-primary text-primary py-2 rounded text-center hover:bg-primary hover:text-white transition-all">Wishlist</a>
        </div>
      </div>
    `;
    container.appendChild(productCard);
  });

  // Show/hide Load More button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (end >= products.length) {
    document.getElementById('loadMoreContainer').classList.add('hidden');
  } else {
    document.getElementById('loadMoreContainer').classList.remove('hidden');
    loadMoreBtn.dataset.page = page + 1;
  }
}

// --- Shop Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('shop.html')) {
  // Helper: get unique categories and brands from products
  function getUnique(arr, key) {
    return [...new Set(arr.map(item => item[key]))];
  }

  // State
  let shopState = {
    search: '',
    categories: [],
    brands: [],
    maxPrice: 2000,
    sortBy: 'default',
    view: 'grid',
    page: 1,
    perPage: 12
  };

  // Populate filters
  function renderShopFilters() {
    // Categories
    const cats = getUnique(products, 'category');
    const catHtml = cats.map(cat => `
      <label class="flex items-center space-x-2">
        <input type="checkbox" value="${cat}" ${shopState.categories.includes(cat)?'checked':''} onchange="shopToggleCategory(this.value)">
        <span class="capitalize">${cat.replace(/-/g,' ')}</span>
      </label>
    `).join('');
    document.getElementById('categoryFilters').innerHTML = catHtml;
    // Brands
    const brs = getUnique(products, 'brand');
    const brandHtml = brs.map(brand => `
      <label class="flex items-center space-x-2">
        <input type="checkbox" value="${brand}" ${shopState.brands.includes(brand)?'checked':''} onchange="shopToggleBrand(this.value)">
        <span class="capitalize">${brand}</span>
      </label>
    `).join('');
    document.getElementById('brandFilters').innerHTML = brandHtml;
    // Price
    document.getElementById('priceRange').value = shopState.maxPrice;
    document.getElementById('shopPriceValue').textContent = `$${shopState.maxPrice}`;
    // Search
    document.getElementById('shopSearchInput').value = shopState.search;
    // Sort
    document.getElementById('shopSortSelect').value = shopState.sortBy;
    // View
    document.getElementById('shopGridBtn').className = `p-2 rounded ${shopState.view==='grid'?'bg-primary text-white':'border border-gray-300'}`;
    document.getElementById('shopListBtn').className = `p-2 rounded ${shopState.view==='list'?'bg-primary text-white':'border border-gray-300'}`;
  }

  // Filtering logic
  function getFilteredProducts() {
    let filtered = products.filter(p => {
      let match = true;
      if (shopState.search) {
        const q = shopState.search.toLowerCase();
        match = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      }
      if (match && shopState.categories.length)
        match = shopState.categories.includes(p.category);
      if (match && shopState.brands.length)
        match = shopState.brands.includes(p.brand);
      if (match && shopState.maxPrice)
        match = p.price <= shopState.maxPrice;
      return match;
    });
    // Sorting
    if (shopState.sortBy === 'price-low') filtered.sort((a,b)=>a.price-b.price);
    if (shopState.sortBy === 'price-high') filtered.sort((a,b)=>b.price-a.price);
    if (shopState.sortBy === 'rating') filtered.sort((a,b)=>b.rating-a.rating);
    if (shopState.sortBy === 'newest') filtered.sort((a,b)=>b.id-a.id);
    return filtered;
  }

  // Render products
  function renderShopProducts() {
    const filtered = getFilteredProducts();
    const start = 0;
    const end = shopState.page * shopState.perPage;
    const pageProducts = filtered.slice(start, end);
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    if (pageProducts.length === 0) {
      document.getElementById('noProductsFound').classList.remove('hidden');
      document.getElementById('loadMoreContainer').classList.add('hidden');
      return;
    } else {
      document.getElementById('noProductsFound').classList.add('hidden');
    }
    pageProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = shopState.view==='grid'
        ? 'bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all overflow-hidden flex flex-col'
        : 'bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col sm:flex-row overflow-hidden';
      card.innerHTML = shopState.view==='grid' ? `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
          <div class="flex items-center mb-2">
            <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
            <span class="text-gray-400 line-through">$${product.originalPrice}</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
            <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
          </div>
          <div class="mt-auto flex gap-2">
            <a href="cart.html" class="flex-1 bg-primary text-white py-2 rounded text-center hover:bg-opacity-90 transition-all">Add to Cart</a>
            <a href="wishlist.html" class="flex-1 border border-primary text-primary py-2 rounded text-center hover:bg-primary hover:text-white transition-all">Wishlist</a>
          </div>
        </div>
      ` : `
        <img src="${product.image}" alt="${product.name}" class="w-full sm:w-48 h-48 object-cover">
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
          <div class="flex items-center mb-2">
            <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
            <span class="text-gray-400 line-through">$${product.originalPrice}</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="text-yellow-400 mr-1">★</span> <span>${product.rating}</span>
            <span class="ml-2 text-xs text-gray-500">(${product.reviews} reviews)</span>
          </div>
          <div class="flex gap-2 mt-auto">
            <a href="cart.html" class="flex-1 bg-primary text-white py-2 rounded text-center hover:bg-opacity-90 transition-all">Add to Cart</a>
            <a href="wishlist.html" class="flex-1 border border-primary text-primary py-2 rounded text-center hover:bg-primary hover:text-white transition-all">Wishlist</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
    // Show/hide Load More
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (end >= getFilteredProducts().length) {
      document.getElementById('loadMoreContainer').classList.add('hidden');
    } else {
      document.getElementById('loadMoreContainer').classList.remove('hidden');
      loadMoreBtn.dataset.page = shopState.page + 1;
    }
  }

  // Event handlers
  window.shopToggleCategory = function(cat) {
    if (shopState.categories.includes(cat)) shopState.categories = shopState.categories.filter(c=>c!==cat);
    else shopState.categories.push(cat);
    shopState.page = 1;
    renderShopProducts();
  };
  window.shopToggleBrand = function(brand) {
    if (shopState.brands.includes(brand)) shopState.brands = shopState.brands.filter(b=>b!==brand);
    else shopState.brands.push(brand);
    shopState.page = 1;
    renderShopProducts();
  };
  document.getElementById('priceRange').addEventListener('input', function() {
    shopState.maxPrice = parseInt(this.value);
    shopState.page = 1;
    document.getElementById('shopPriceValue').textContent = `$${shopState.maxPrice}`;
    renderShopProducts();
  });
  document.getElementById('shopSearchInput').addEventListener('input', function() {
    shopState.search = this.value;
    shopState.page = 1;
    renderShopProducts();
  });
  document.getElementById('shopSortSelect').addEventListener('change', function() {
    shopState.sortBy = this.value;
    shopState.page = 1;
    renderShopProducts();
  });
  document.getElementById('shopGridBtn').addEventListener('click', function(e) {
    e.preventDefault();
    shopState.view = 'grid';
    renderShopFilters();
    renderShopProducts();
  });
  document.getElementById('shopListBtn').addEventListener('click', function(e) {
    e.preventDefault();
    shopState.view = 'list';
    renderShopFilters();
    renderShopProducts();
  });
  document.getElementById('loadMoreBtn').addEventListener('click', function() {
    shopState.page = Number(this.dataset.page) || (shopState.page + 1);
    renderShopProducts();
  });
  window.clearShopFilters = function() {
    shopState = { ...shopState, search: '', categories: [], brands: [], maxPrice: 2000, sortBy: 'default', page: 1 };
    renderShopFilters();
    renderShopProducts();
  };

  // Initial render
  renderShopFilters();
  renderShopProducts();
}

// --- Cart Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('cart.html')) {
  // Helpers
  function getCart() {
    return JSON.parse(localStorage.getItem('zubi_cart') || '[]');
  }
  function setCart(cart) {
    localStorage.setItem('zubi_cart', JSON.stringify(cart));
  }
  function findProduct(id) {
    return products.find(p => String(p.id) === String(id));
  }
  function updateCartQty(id, qty) {
    let cart = getCart();
    cart = cart.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item);
    setCart(cart);
    renderCart();
  }
  function removeCartItem(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    setCart(cart);
    renderCart();
  }

  function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cartContainer');
    if (!cart.length) {
      container.innerHTML = `<div class='text-center py-24 text-2xl text-gray-400'>Your cart is empty.<br><a href='shop.html' class='mt-4 inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition'>Continue Shopping</a></div>`;
      return;
    }
    let subtotal = 0;
    let rows = cart.map(item => {
      const product = findProduct(item.id);
      if (!product) return '';
      const itemTotal = product.price * item.qty;
      subtotal += itemTotal;
      return `
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <td class="py-4"><img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded"/></td>
          <td class="py-4">
            <div class="font-semibold text-gray-900 dark:text-white">${product.name}</div>
            <div class="text-sm text-gray-500 capitalize">${product.brand}</div>
          </td>
          <td class="py-4 text-primary font-bold">$${product.price}</td>
          <td class="py-4">
            <input type="number" min="1" value="${item.qty}" class="w-16 px-2 py-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700" onchange="window.updateCartQty(${product.id}, this.value)">
          </td>
          <td class="py-4 font-semibold">$${itemTotal}</td>
          <td class="py-4">
            <button onclick="window.removeCartItem(${product.id})" class="text-red-500 hover:text-red-700 font-bold text-lg">&times;</button>
          </td>
        </tr>
      `;
    }).join('');
    container.innerHTML = `
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th class="py-3 px-2 text-left">Product</th>
              <th class="py-3 px-2 text-left">Name</th>
              <th class="py-3 px-2">Price</th>
              <th class="py-3 px-2">Quantity</th>
              <th class="py-3 px-2">Subtotal</th>
              <th class="py-3 px-2"></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <div class="text-xl font-bold">Subtotal: <span class="text-primary">$${subtotal}</span></div>
        <div class="flex gap-4">
          <a href="shop.html" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold">Continue Shopping</a>
          <a href="checkout.html" class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Proceed to Checkout</a>
        </div>
      </div>
    `;
  }
  // Expose handlers for inline events
  window.updateCartQty = updateCartQty;
  window.removeCartItem = removeCartItem;
  // Initial render
  document.addEventListener('DOMContentLoaded', renderCart);
}

// --- Wishlist Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('wishlist.html')) {
  // Helpers
  function getWishlist() {
    return JSON.parse(localStorage.getItem('zubi_wishlist') || '[]');
  }
  function setWishlist(wishlist) {
    localStorage.setItem('zubi_wishlist', JSON.stringify(wishlist));
  }
  function getCart() {
    return JSON.parse(localStorage.getItem('zubi_cart') || '[]');
  }
  function setCart(cart) {
    localStorage.setItem('zubi_cart', JSON.stringify(cart));
  }
  function findProduct(id) {
    return products.find(p => String(p.id) === String(id));
  }
  function removeWishlistItem(id) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(pid => pid !== id);
    setWishlist(wishlist);
    renderWishlist();
  }
  function moveToCart(id) {
    let cart = getCart();
    if (!cart.some(item => item.id === id)) {
      cart.push({ id, qty: 1 });
      setCart(cart);
    }
    removeWishlistItem(id);
  }

  function renderWishlist() {
    const wishlist = getWishlist();
    const container = document.getElementById('wishlistContainer');
    if (!wishlist.length) {
      container.innerHTML = `<div class='text-center py-24 text-2xl text-gray-400'>Your wishlist is empty.<br><a href='shop.html' class='mt-4 inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition'>Continue Shopping</a></div>`;
      return;
    }
    container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">${wishlist.map(id => {
      const product = findProduct(id);
      if (!product) return '';
      return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all overflow-hidden flex flex-col">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          <div class="p-4 flex-1 flex flex-col">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">${product.name}</h3>
            <div class="flex items-center mb-2">
              <span class="text-primary text-lg font-bold mr-2">$${product.price}</span>
              <span class="text-gray-400 line-through">$${product.originalPrice}</span>
            </div>
            <div class="text-sm text-gray-500 capitalize mb-2">${product.brand}</div>
            <div class="mt-auto flex gap-2">
              <button onclick="window.moveToCart(${product.id})" class="flex-1 bg-primary text-white py-2 rounded text-center hover:bg-opacity-90 transition-all">Move to Cart</button>
              <button onclick="window.removeWishlistItem(${product.id})" class="flex-1 border border-primary text-primary py-2 rounded text-center hover:bg-primary hover:text-white transition-all">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('')}</div>`;
  }
  // Expose handlers for inline events
  window.removeWishlistItem = removeWishlistItem;
  window.moveToCart = moveToCart;
  // Initial render
  document.addEventListener('DOMContentLoaded', renderWishlist);
}

// --- Checkout Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('checkout.html')) {
  function getCart() {
    return JSON.parse(localStorage.getItem('zubi_cart') || '[]');
  }
  function setCart(cart) {
    localStorage.setItem('zubi_cart', JSON.stringify(cart));
  }
  function findProduct(id) {
    return products.find(p => String(p.id) === String(id));
  }
  function getOrders() {
    return JSON.parse(localStorage.getItem('zubi_orders') || '[]');
  }
  function setOrders(orders) {
    localStorage.setItem('zubi_orders', JSON.stringify(orders));
  }

  function renderCheckout() {
    const cart = getCart();
    const container = document.getElementById('checkoutContainer');
    if (!cart.length) {
      container.innerHTML = `<div class='text-center py-24 text-2xl text-gray-400'>Your cart is empty.<br><a href='shop.html' class='mt-4 inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition'>Continue Shopping</a></div>`;
      return;
    }
    let subtotal = 0;
    let itemsHtml = cart.map(item => {
      const product = findProduct(item.id);
      if (!product) return '';
      const itemTotal = product.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="flex items-center gap-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded"/>
          <div class="flex-1">
            <div class="font-semibold text-gray-900 dark:text-white">${product.name}</div>
            <div class="text-sm text-gray-500 capitalize">${product.brand}</div>
            <div class="text-sm">Qty: ${item.qty}</div>
          </div>
          <div class="font-bold text-primary">$${itemTotal}</div>
        </div>
      `;
    }).join('');
    container.innerHTML = `
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Shipping Form -->
        <form id="shippingForm" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col gap-4">
          <h2 class="text-xl font-bold mb-2">Shipping Details</h2>
          <input type="text" name="name" placeholder="Full Name" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="email" name="email" placeholder="Email" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="tel" name="phone" placeholder="Phone" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="text" name="address" placeholder="Address" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="text" name="city" placeholder="City" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="text" name="postal" placeholder="Postal Code" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <input type="text" name="country" placeholder="Country" class="px-4 py-2 rounded border dark:bg-gray-900 dark:border-gray-700" required>
          <button type="submit" class="mt-4 bg-primary text-white py-3 rounded font-semibold hover:bg-opacity-90 transition-all">Place Order</button>
        </form>
        <!-- Order Summary -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="flex flex-col gap-2 mb-4">${itemsHtml}</div>
          <div class="flex justify-between font-bold text-lg mt-6">
            <span>Subtotal:</span>
            <span class="text-primary">$${subtotal}</span>
          </div>
          <div class="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span class="text-primary">$${subtotal}</span>
          </div>
        </div>
      </div>
    `;
    document.getElementById('shippingForm').onsubmit = function(e) {
      e.preventDefault();
      const form = e.target;
      const order = {
        id: Date.now(),
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        city: form.city.value,
        postal: form.postal.value,
        country: form.country.value,
        items: cart,
        total: subtotal,
        date: new Date().toISOString(),
        status: 'Placed'
      };
      // Save order
      const orders = getOrders();
      orders.push(order);
      setOrders(orders);
      // Clear cart
      setCart([]);
      // Redirect
      window.location.href = 'order-success.html';
    };
  }
  document.addEventListener('DOMContentLoaded', renderCheckout);
}

// --- Order Success Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('order-success.html')) {
  function getOrders() {
    return JSON.parse(localStorage.getItem('zubi_orders') || '[]');
  }
  function findProduct(id) {
    return products.find(p => String(p.id) === String(id));
  }
  function renderOrderSuccess() {
    const container = document.getElementById('orderSuccessContainer');
    const orders = getOrders();
    if (!orders.length) {
      container.innerHTML = `
        <div class="text-center py-24">
          <div class="text-5xl mb-4">😅</div>
          <div class="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-200">No recent order found</div>
          <div class="mb-6 text-gray-500">Looks like you haven't placed an order yet.</div>
          <a href="shop.html" class="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Continue Shopping</a>
        </div>
      `;
      return;
    }
    const order = orders[orders.length - 1];
    // Shipping info
    const shipping = `
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <h3 class="font-semibold mb-2 text-primary">Shipping Information</h3>
        <div class="text-gray-700 dark:text-gray-200">
          <div><span class="font-medium">Name:</span> ${order.name}</div>
          <div><span class="font-medium">Email:</span> ${order.email}</div>
          <div><span class="font-medium">Phone:</span> ${order.phone}</div>
          <div><span class="font-medium">Address:</span> ${order.address}, ${order.city}, ${order.postal}, ${order.country}</div>
          <div><span class="font-medium">Order Date:</span> ${new Date(order.date).toLocaleString()}</div>
          <div><span class="font-medium">Order ID:</span> ${order.id}</div>
        </div>
      </div>
    `;
    // Items
    const items = order.items.map(item => {
      const product = findProduct(item.id);
      if (!product) return '';
      return `
        <div class="flex items-center gap-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded"/>
          <div class="flex-1">
            <div class="font-semibold text-gray-900 dark:text-white">${product.name}</div>
            <div class="text-sm text-gray-500 capitalize">${product.brand}</div>
            <div class="text-sm">Qty: ${item.qty}</div>
          </div>
          <div class="font-bold text-primary">$${product.price * item.qty}</div>
        </div>
      `;
    }).join('');
    // Main content
    container.innerHTML = `
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">✅</div>
        <div class="text-3xl font-bold mb-2 text-primary">Thank you for your order!</div>
        <div class="mb-4 text-gray-700 dark:text-gray-200">Your order has been placed successfully. A confirmation email will be sent to you soon.</div>
      </div>
      ${shipping}
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-6">
        <h3 class="font-semibold mb-2 text-primary">Order Items</h3>
        <div class="flex flex-col gap-2">${items}</div>
        <div class="flex justify-between font-bold text-lg mt-6">
          <span>Total:</span>
          <span class="text-primary">$${order.total}</span>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a href="shop.html" class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center">Continue Shopping</a>
        <a href="order-history.html" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition text-center">View Order History</a>
      </div>
    `;
  }
  document.addEventListener('DOMContentLoaded', renderOrderSuccess);
}

// --- Order History Page Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('order-history.html')) {
  function getOrders() {
    return JSON.parse(localStorage.getItem('zubi_orders') || '[]');
  }
  function findProduct(id) {
    return products.find(p => String(p.id) === String(id));
  }
  function renderOrderHistory() {
    const container = document.getElementById('orderHistoryContainer');
    const orders = getOrders().slice().reverse();
    if (!orders.length) {
      container.innerHTML = `
        <div class="text-center py-24">
          <div class="text-5xl mb-4">📦</div>
          <div class="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-200">No orders found</div>
          <div class="mb-6 text-gray-500">You haven't placed any orders yet.</div>
          <a href="shop.html" class="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Start Shopping</a>
        </div>
      `;
      return;
    }
    container.innerHTML = orders.map(order => {
      const items = order.items.map(item => {
        const product = findProduct(item.id);
        if (!product) return '';
        return `
          <div class="flex items-center gap-4 py-2 border-b border-gray-100 dark:border-gray-800">
            <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded"/>
            <div class="flex-1">
              <div class="font-semibold text-gray-900 dark:text-white">${product.name}</div>
              <div class="text-sm text-gray-500 capitalize">${product.brand}</div>
              <div class="text-sm">Qty: ${item.qty}</div>
            </div>
            <div class="font-bold text-primary">$${product.price * item.qty}</div>
          </div>
        `;
      }).join('');
      return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div>
              <div class="font-bold text-lg text-primary">Order #${order.id}</div>
              <div class="text-sm text-gray-500">${new Date(order.date).toLocaleString()}</div>
            </div>
            <div class="flex gap-4 items-center">
              <div class="font-semibold">Total: <span class="text-primary">$${order.total}</span></div>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.status==='Placed'?'bg-green-100 text-green-700':'bg-gray-200 text-gray-700'}\">${order.status}</span>
            </div>
          </div>
          <div class="mb-2"><span class="font-medium">Shipping:</span> ${order.name}, ${order.address}, ${order.city}, ${order.postal}, ${order.country}</div>
          <div class="flex flex-col gap-2">${items}</div>
        </div>
      `;
    }).join('');
  }
  document.addEventListener('DOMContentLoaded', renderOrderHistory);
}

// --- Auth Logic for Login & Signup Pages ---
if (window.location.pathname.endsWith('signup.html')) {
  function getUsers() {
    return JSON.parse(localStorage.getItem('zubi_users') || '[]');
  }
  function setUsers(users) {
    localStorage.setItem('zubi_users', JSON.stringify(users));
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Show/hide password
    document.getElementById('toggleSignupPassword').onclick = function() {
      const input = document.getElementById('signupPassword');
      input.type = input.type === 'password' ? 'text' : 'password';
      this.textContent = input.type === 'password' ? '👁️' : '🙈';
    };
    document.getElementById('toggleSignupConfirmPassword').onclick = function() {
      const input = document.getElementById('signupConfirmPassword');
      input.type = input.type === 'password' ? 'text' : 'password';
      this.textContent = input.type === 'password' ? '👁️' : '🙈';
    };
    // Signup form
    document.getElementById('signupForm').onsubmit = function(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim().toLowerCase();
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
      const msg = document.getElementById('signupMessage');
      msg.textContent = '';
      msg.className = 'text-center text-sm mt-2';
      if (!name || !email || !password || !confirmPassword) {
        msg.textContent = 'Please fill in all fields.';
        msg.classList.add('text-red-500');
        return;
      }
      if (password.length < 6) {
        msg.textContent = 'Password must be at least 6 characters.';
        msg.classList.add('text-red-500');
        return;
      }
      if (password !== confirmPassword) {
        msg.textContent = 'Passwords do not match.';
        msg.classList.add('text-red-500');
        return;
      }
      const users = getUsers();
      if (users.some(u => u.email === email)) {
        msg.textContent = 'An account with this email already exists.';
        msg.classList.add('text-red-500');
        return;
      }
      users.push({ id: Date.now(), name, email, password });
      setUsers(users);
      msg.textContent = 'Account created successfully! Redirecting to login...';
      msg.classList.remove('text-red-500');
      msg.classList.add('text-green-600');
      setTimeout(() => { window.location.href = 'login.html'; }, 1500);
    };
  });
}
if (window.location.pathname.endsWith('login.html')) {
  function getUsers() {
    return JSON.parse(localStorage.getItem('zubi_users') || '[]');
  }
  function setCurrentUser(user) {
    localStorage.setItem('zubi_current_user', JSON.stringify(user));
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Show/hide password
    document.getElementById('toggleLoginPassword').onclick = function() {
      const input = document.getElementById('loginPassword');
      input.type = input.type === 'password' ? 'text' : 'password';
      this.textContent = input.type === 'password' ? '👁️' : '🙈';
    };
    // Login form
    document.getElementById('loginForm').onsubmit = function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim().toLowerCase();
      const password = document.getElementById('loginPassword').value;
      const msg = document.getElementById('loginMessage');
      msg.textContent = '';
      msg.className = 'text-center text-sm mt-2';
      if (!email || !password) {
        msg.textContent = 'Please enter your email and password.';
        msg.classList.add('text-red-500');
        return;
      }
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        msg.textContent = 'Invalid email or password.';
        msg.classList.add('text-red-500');
        return;
      }
      setCurrentUser(user);
      msg.textContent = 'Login successful! Redirecting...';
      msg.classList.remove('text-red-500');
      msg.classList.add('text-green-600');
      setTimeout(() => { window.location.href = 'index.html'; }, 1200);
    };
  });
} 

// --- FAQ Accordion Logic for Multi-Page Version ---
if (window.location.pathname.endsWith('faq.html')) {
  const faqs = [
    {
      q: "How do I place an order?",
      a: "Browse our shop, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept major credit/debit cards, PayPal, and other secure payment options as shown at checkout."
    },
    {
      q: "How can I track my order?",
      a: "After placing your order, you'll receive a confirmation email with a tracking link once your order ships."
    },
    {
      q: "Can I return or exchange an item?",
      a: "Yes! We offer a hassle-free return policy. Please see our Returns & Refunds section for details."
    },
    {
      q: "How do I contact customer support?",
      a: "You can reach us via the Contact Us page, email (support@zubi.com), or phone. We're here to help!"
    },
    {
      q: "Do you offer international shipping?",
      a: "Yes, we ship to many countries worldwide. Shipping options and costs are shown at checkout."
    },
    {
      q: "How do I create an account?",
      a: "Click Sign Up in the navigation bar and fill out the registration form to create your account."
    },
    {
      q: "Is my personal information safe?",
      a: "Absolutely. We use industry-standard security measures to protect your data. See our Privacy Policy for more."
    }
  ];
  function renderFAQAccordion() {
    const container = document.getElementById('faqAccordion');
    container.innerHTML = faqs.map((faq, i) => `
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <button type="button" aria-expanded="${i===0?'true':'false'}" aria-controls="faq-panel-${i}" id="faq-header-${i}"
          class="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left focus:outline-none focus:ring-2 focus:ring-primary transition bg-white dark:bg-gray-800 ${i===0?'':'border-b-0'}"
          onclick="toggleFAQ(${i})">
          <span>${faq.q}</span>
          <svg class="w-5 h-5 ml-2 transition-transform duration-200 ${i===0?'rotate-180':''}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="faq-panel-${i}" class="px-6 pb-4 text-gray-700 dark:text-gray-200 ${i===0?'block':'hidden'}" role="region" aria-labelledby="faq-header-${i}">
          ${faq.a}
        </div>
      </div>
    `).join('');
  }
  window.toggleFAQ = function(idx) {
    const n = faqs.length;
    for (let i = 0; i < n; i++) {
      const btn = document.getElementById(`faq-header-${i}`);
      const panel = document.getElementById(`faq-panel-${i}`);
      if (i === idx) {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        panel.classList.toggle('hidden', expanded);
        panel.classList.toggle('block', !expanded);
        btn.querySelector('svg').classList.toggle('rotate-180', !expanded);
      } else {
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.add('hidden');
        panel.classList.remove('block');
        btn.querySelector('svg').classList.remove('rotate-180');
      }
    }
  };
  document.addEventListener('DOMContentLoaded', renderFAQAccordion);
} 