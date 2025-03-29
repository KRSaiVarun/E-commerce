// Initialize Lucide icons
lucide.createIcons();

// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Premium T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        category: "Fashion"
    },
    {
        id: 4,
        name: "Designer Sunglasses",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
        category: "Fashion"
    }
];

// Shopping cart
let cart = [];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const cartCount = document.querySelector('.cart-count');

// Render products
function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('Product added to cart');
    }
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    // Implement search functionality
    console.log('Search clicked');
});

// Account functionality
const accountBtn = document.querySelector('.account-btn');
accountBtn.addEventListener('click', () => {
    // Implement account functionality
    console.log('Account clicked');
});

// Cart button functionality
const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', () => {
    // Implement cart view
    console.log('Cart clicked');
});