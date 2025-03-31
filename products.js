// Define global products array
let products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 119900,
        stock: 15,
        category: "electronics",
        location: "Floor 1, Apple Store (A-12)",
        image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
        description: "The latest iPhone featuring the A17 Pro chip, advanced camera system, and titanium design.",
        featured: true,
        new: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 124999,
        stock: 10,
        category: "electronics",
        location: "Floor 1, Samsung Store (A-14)",
        image: "https://images.samsung.com/is/image/samsung/p6pim/latin/sm-s918bzkb2ar/gallery/latin-galaxy-s23-ultra-s918-sm-s918bzkb2ar-536169461?$1300_1038_PNG$",
        description: "Flagship Android smartphone with S Pen, 200MP camera and powerful Snapdragon processor.",
        featured: true
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        price: 34990,
        stock: 20,
        category: "electronics",
        location: "Floor 1, Sony Store (A-18)",
        image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f4?fmt=png-alpha&wid=720&hei=720",
        description: "Premium noise-cancelling headphones with industry-leading sound quality and comfort.",
        bestseller: true
    },
    {
        id: 4,
        name: "Nike Air Jordan 1",
        price: 14995,
        stock: 8,
        category: "clothing",
        location: "Floor 2, Nike Store (B-05)",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f55bf45a-2ca0-4d68-8dc6-2fd1f977e28d/air-jordan-1-retro-high-og-shoes-Pz5Hk5.png",
        description: "Iconic basketball shoes that have become a streetwear staple with classic colorways.",
        bestseller: true,
        featured: true
    },
    {
        id: 5,
        name: "Levi's 501 Original Fit Jeans",
        price: 5999,
        stock: 25,
        category: "clothing",
        location: "Floor 2, Levi's Store (B-08)",
        image: "https://picsum.photos/id/786/300/200",
        description: "The original button fly jeans that started it all. Straight leg styling with signature fit."
    },
    {
        id: 6,
        name: "Dyson V15 Detect Vacuum Cleaner",
        price: 62900,
        stock: 5,
        category: "home",
        location: "Floor 3, Dyson Store (C-22)",
        image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/393889-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640",
        description: "Cordless vacuum with laser detection to reveal microscopic dust and powerful suction.",
        featured: true
    },
    {
        id: 7,
        name: "MacBook Pro 16-inch",
        price: 249900,
        stock: 7,
        category: "electronics",
        location: "Floor 1, Apple Store (A-12)",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202",
        description: "Professional laptop with stunning display, powerful performance, and amazing battery life.",
        bestseller: true
    },
    {
        id: 8,
        name: "PlayStation 5",
        price: 49900,
        stock: 10,
        category: "electronics",
        location: "Floor 1, Sony Store (A-15)",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-Console-with-dualsense-controller-image-block-01-en-16oct23?$1600px$",
        description: "Next-gen gaming console with ultra-high speed SSD, ray tracing, and haptic feedback controller.",
        featured: true
    },
    {
        id: 9,
        name: "Adidas Ultraboost 23",
        price: 19999,
        stock: 12,
        category: "clothing",
        location: "Floor 2, Adidas Store (B-06)",
        image: "https://picsum.photos/id/103/300/200",
        description: "Running shoes with responsive boost cushioning and a supportive, sock-like fit."
    },
    {
        id: 10,
        name: "IKEA BILLY Bookcase",
        price: 7999,
        stock: 15,
        category: "home",
        location: "Floor 3, IKEA Section (C-30)",
        image: "https://picsum.photos/id/91/300/200",
        description: "Versatile bookcase that can be used to display books, decorative items, or storage boxes."
    },
    {
        id: 11,
        name: "Samsung 55\" QLED 4K TV",
        price: 79990,
        stock: 8,
        category: "electronics",
        location: "Floor 1, Samsung Store (A-20)",
        image: "https://images.samsung.com/is/image/samsung/p6pim/us/qn55q60dafxza/gallery/us-qled-q60d-qn55q60dafxza-538857-538857-Q60D_1600x1200.jpg",
        description: "Crystal clear 4K resolution with Quantum Dot technology for over a billion colors.",
        featured: true
    },
    {
        id: 12,
        name: "Zara Oversized Blazer",
        price: 6990,
        stock: 15,
        category: "clothing",
        location: "Floor 2, Zara Store (B-12)",
        image: "https://picsum.photos/id/237/300/200",
        description: "Elegant oversized blazer that can be dressed up or down for various occasions."
    },
    {
        id: 13,
        name: "Instant Pot Duo Plus",
        price: 12999,
        stock: 20,
        category: "home",
        location: "Floor 3, Croma Store (C-18)",
        image: "https://picsum.photos/id/112/300/200",
        description: "9-in-1 electric pressure cooker that speeds up cooking while preserving nutrients.",
        bestseller: true
    },
    {
        id: 14,
        name: "Canon EOS R6 Camera",
        price: 215990,
        stock: 6,
        category: "electronics",
        location: "Floor 1, Canon Store (A-22)",
        image: "https://picsum.photos/id/96/300/200",
        description: "Full-frame mirrorless camera with in-body stabilization and fast hybrid autofocus.",
        featured: true
    },
    {
        id: 15,
        name: "H&M Slim Fit Shirt",
        price: 2499,
        stock: 40,
        category: "clothing",
        location: "Floor 2, H&M Store (B-16)",
        image: "https://picsum.photos/id/26/300/200",
        description: "Easy-iron shirt in premium cotton with a button-down collar and slim fit design."
    },
    {
        id: 16,
        name: "Philips Hue Starter Kit",
        price: 10999,
        stock: 12,
        category: "home",
        location: "Floor 3, Smart Home Section (C-18)",
        image: "https://picsum.photos/id/91/300/200",
        description: "Smart lighting system that can be controlled via app with millions of color options."
    },
    {
        id: 17,
        name: "Apple Watch Series 9",
        price: 41900,
        stock: 15,
        category: "electronics",
        location: "Floor 1, Apple Store (A-12)",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT553_VW_34FR+watch-45-alum-midnight-nc-10s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1693593622616",
        description: "Smart watch with fitness tracking, ECG, always-on display, and water resistance.",
        bestseller: true
    },
    {
        id: 18,
        name: "Philips Air Fryer XXL",
        price: 16999,
        stock: 10,
        category: "home",
        location: "Floor 3, Croma Store (C-18)",
        image: "https://picsum.photos/id/292/300/200",
        description: "Healthy cooking appliance that fries with up to 90% less fat using minimal oil.",
        new: true,
        bestseller: true
    },
    {
        id: 19,
        name: "Ray-Ban Aviator Sunglasses",
        price: 9990,
        stock: 25,
        category: "clothing",
        location: "Floor 2, Sunglass Hut (B-24)",
        image: "https://picsum.photos/id/1062/300/200",
        description: "Iconic sunglasses with teardrop-shaped lenses and thin metal frame.",
        bestseller: true
    },
    {
        id: 20,
        name: "Bose QuietComfort Earbuds",
        price: 26900,
        stock: 8,
        category: "electronics",
        location: "Floor 1, Bose Store (A-24)",
        image: "https://picsum.photos/id/39/300/200",
        description: "True wireless earbuds with world-class noise cancellation and high-fidelity audio.",
        new: true
    },
    {
        id: 21,
        name: "The North Face Jacket",
        price: 12999,
        stock: 18,
        category: "clothing",
        location: "Floor 2, The North Face Store (B-28)",
        image: "https://picsum.photos/id/36/300/200",
        description: "Waterproof breathable jacket designed for outdoor adventures in all weather conditions.",
        new: true
    }
];

// Function to update product count display
function updateProductCount() {
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = `Total Products: ${products.length}`;
    }
}

// Function to update featured product count display
function updateFeaturedProductCount() {
    const featuredProductCountElement = document.getElementById('featured-product-count');
    if (featuredProductCountElement) {
        const featuredCount = products.filter(product => product.featured).length;
        featuredProductCountElement.textContent = `Featured Products: ${featuredCount}`;
    }
}

// Function to display products
function displayProducts(productList) {
    console.log("Displaying products:", productList.length);
    const productContainer = document.getElementById('product-container');
    
    if (!productContainer) {
        console.error('Product container not found');
        return;
    }
    
    // Clear existing products
    productContainer.innerHTML = '';
    
    // Add each product to the container
    productList.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
    
    // Refresh cart event listeners
    if (typeof refreshCartEventListeners === 'function') {
        refreshCartEventListeners();
    }

    // Update product count
    updateProductCount();

    // Update featured product count
    updateFeaturedProductCount();
}

// Function to create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    // Add data-id attribute for easy selection during stock updates
    productCard.setAttribute('data-id', product.id);
    
    // Stock status
    let stockStatus = '';
    let stockClass = '';
    
    if (product.stock > 10) {
        stockStatus = 'In Stock';
        stockClass = 'in-stock';
    } else if (product.stock > 0) {
        stockStatus = `Low Stock (${product.stock})`;
        stockClass = 'low-stock';
    } else {
        stockStatus = 'Out of Stock';
        stockClass = 'out-of-stock';
    }
    
    // Product badges for featured, bestseller, new
    let productBadges = '';
    if (product.featured) {
        productBadges += '<span class="product-badge featured-badge">Featured</span>';
    }
    if (product.bestseller) {
        productBadges += '<span class="product-badge bestseller-badge">Bestseller</span>';
    }
    if (product.new) {
        productBadges += '<span class="product-badge new-badge">New</span>';
    }
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${productBadges ? `<div class="product-badges">${productBadges}</div>` : ''}
        </div>
        <div class="product-details">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <p class="product-stock ${stockClass}" data-product-id="${product.id}">
                <i class="fas ${stockClass === 'in-stock' ? 'fa-check-circle' : stockClass === 'low-stock' ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                ${stockStatus}
            </p>
            <p class="product-location">
                <i class="fas fa-map-marker-alt"></i> ${product.location}
            </p>
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i> ${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <button class="view-details" data-id="${product.id}">
                    <i class="fas fa-eye"></i> Details
                </button>
            </div>
        </div>
    `;
    
    // Add event listener for view details button
    const viewDetailsBtn = productCard.querySelector('.view-details');
    viewDetailsBtn.addEventListener('click', () => {
        showProductDetails(product);
    });
    
    return productCard;
}

// Function to show product details
function showProductDetails(product) {
    // Check if modal already exists
    let productModal = document.getElementById('product-details-modal');
    
    if (!productModal) {
        // Create modal if it doesn't exist
        productModal = document.createElement('div');
        productModal.id = 'product-details-modal';
        productModal.classList.add('modal');
        document.body.appendChild(productModal);
    }
    
    // Stock status
    let stockStatus = '';
    let stockClass = '';
    
    if (product.stock > 10) {
        stockStatus = 'In Stock';
        stockClass = 'in-stock';
    } else if (product.stock > 0) {
        stockStatus = `Low Stock (${product.stock})`;
        stockClass = 'low-stock';
    } else {
        stockStatus = 'Out of Stock';
        stockClass = 'out-of-stock';
    }
    
    // Product badges for featured, bestseller, new
    let productBadges = '';
    if (product.featured) {
        productBadges += '<span class="product-badge featured-badge">Featured</span>';
    }
    if (product.bestseller) {
        productBadges += '<span class="product-badge bestseller-badge">Bestseller</span>';
    }
    if (product.new) {
        productBadges += '<span class="product-badge new-badge">New</span>';
    }
    
    // Set modal content
    productModal.innerHTML = `
        <div class="modal-content product-modal-content">
            <span class="close-btn">&times;</span>
            <div class="product-detail-content">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${productBadges ? `<div class="product-badges">${productBadges}</div>` : ''}
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <p class="product-detail-price">₹${product.price.toLocaleString()}</p>
                    <p class="product-detail-stock ${stockClass}">
                        <i class="fas ${stockClass === 'in-stock' ? 'fa-check-circle' : stockClass === 'low-stock' ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                        ${stockStatus}
                    </p>
                    <p class="product-detail-location">
                        <i class="fas fa-map-marker-alt"></i> ${product.location}
                    </p>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-actions">
                        <button class="add-to-cart-detail" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i> ${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="navigate-to-product" data-id="${product.id}" data-location="${product.location}">
                            <i class="fas fa-map-marker-alt"></i> Navigate to Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    const closeBtn = productModal.querySelector('.close-btn');
    const addToCartBtn = productModal.querySelector('.add-to-cart-detail');
    const navigateBtn = productModal.querySelector('.navigate-to-product');
    
    closeBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    addToCartBtn.addEventListener('click', () => {
        if (typeof addToCart === 'function' && product.stock > 0) {
            addToCart(product);
        }
    });
    
    navigateBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
        navigateToProduct(product.location);
    });
    
    // Close modal when clicking outside
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Function to filter products
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    const featuredFilter = document.getElementById('featured-filter').value;
    
    // Filter by category
    let filteredProducts = products;
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by price
    if (priceFilter) {
        const [min, max] = priceFilter.split('-');
        if (min && max) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= parseInt(min) && product.price <= parseInt(max)
            );
        } else if (min) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= parseInt(min)
            );
        }
    }
    
    // Filter by featured status
    if (featuredFilter) {
        switch (featuredFilter) {
            case 'featured':
                filteredProducts = filteredProducts.filter(product => product.featured === true);
                break;
            case 'bestseller':
                filteredProducts = filteredProducts.filter(product => product.bestseller === true);
                break;
            case 'new':
                filteredProducts = filteredProducts.filter(product => product.new === true);
                break;
            default:
                // All products, no filtering needed
                break;
        }
    }
    
    // Sort products
    if (sortFilter) {
        switch (sortFilter) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                // If we had ratings, we would sort by them here
                break;
            default:
                // Default is relevance, no sorting needed
                break;
        }
    }
    
    // Display filtered products
    displayProducts(filteredProducts);
}

// Function to search products
function searchProducts(query) {
    if (!query) {
        return displayProducts(products);
    }
    
    query = query.toLowerCase();
    
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.location.toLowerCase().includes(query)
    );
    
    displayProducts(searchResults);
}

// Function to navigate to product location
function navigateToProduct(location) {
    const mapView = document.getElementById('map-view');
    
    if (mapView) {
        // Scroll to map section
        const mallMapSection = document.querySelector('.mall-map');
        if (mallMapSection) {
            mallMapSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Show navigation path
        if (typeof showNavigationPath === 'function') {
            showNavigationPath(location);
        } else {
            console.log("Navigation to: " + location);
        }
    }
}

// Load products from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
    // Check if products exist in localStorage
    const savedProducts = localStorage.getItem('mallnav_products');
    
    if (savedProducts) {
        // Use saved products with updated stock
        products = JSON.parse(savedProducts);
        console.log('Loaded products from localStorage with updated stock levels');
    } else {
        // First time loading the site, save default products to localStorage
        localStorage.setItem('mallnav_products', JSON.stringify(products));
        console.log('Saved default products to localStorage');
    }
    
    // Initialize product display
    if (typeof displayProducts === 'function') {
        displayProducts(products);
    }

    // Update product count initially
    updateProductCount();

    // Update featured product count initially
    updateFeaturedProductCount();
    
    // Add event listener for stock updates
    window.addEventListener('stockUpdated', function(event) {
        // Check if we have detailed information in the event
        if (event.detail && event.detail.products) {
            // Use the products from the event
            products = event.detail.products;
            console.log('Updated products from stock update event with detailed information');
            
            // If specific product IDs were updated, update just those products in the UI
            if (event.detail.updatedProductIds && event.detail.updatedProductIds.length > 0) {
                event.detail.updatedProductIds.forEach(productId => {
                    // Update all product cards for this specific product using a more reliable selector
                    // First find by add-to-cart button
                    const allAddToCartButtons = document.querySelectorAll(`.add-to-cart[data-id="${productId}"]`);
                    allAddToCartButtons.forEach(btn => {
                        const card = btn.closest('.product-card');
                        if (card) {
                            // Find the product
                            const product = products.find(p => p.id === parseInt(productId));
                            if (product) {
                                // Update stock display
                                const stockElem = card.querySelector('.product-stock');
                                if (stockElem) {
                                    let stockClass, stockText;
                                    if (product.stock > 10) {
                                        stockClass = 'in-stock';
                                        stockText = 'In Stock';
                                    } else if (product.stock > 0) {
                                        stockClass = 'low-stock';
                                        stockText = `Low Stock (${product.stock})`;
                                    } else {
                                        stockClass = 'out-of-stock';
                                        stockText = 'Out of Stock';
                                    }
                                    
                                    // Remove old classes
                                    stockElem.classList.remove('in-stock', 'low-stock', 'out-of-stock');
                                    // Add new class
                                    stockElem.classList.add(stockClass);
                                    
                                    // Update HTML
                                    stockElem.innerHTML = `
                                        <i class="fas ${stockClass === 'in-stock' ? 'fa-check-circle' : stockClass === 'low-stock' ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                                        ${stockText}
                                    `;
                                }
                                
                                // Update add to cart button
                                if (product.stock > 0) {
                                    btn.disabled = false;
                                    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                                } else {
                                    btn.disabled = true;
                                    btn.innerHTML = '<i class="fas fa-times"></i> Out of Stock';
                                }
                            }
                        }
                    });
                    
                    // Also check for standalone cards by data-id attribute
                    const standaloneCards = document.querySelectorAll(`.product-card[data-id="${productId}"]`);
                    standaloneCards.forEach(card => {
                        // Skip cards already updated via button selection
                        if (!card.querySelector(`.add-to-cart[data-id="${productId}"]`)) {
                            // Find the product
                            const product = products.find(p => p.id === parseInt(productId));
                            if (product) {
                                // Update stock display
                                const stockElem = card.querySelector('.product-stock');
                                if (stockElem) {
                                    let stockClass, stockText;
                                    if (product.stock > 10) {
                                        stockClass = 'in-stock';
                                        stockText = 'In Stock';
                                    } else if (product.stock > 0) {
                                        stockClass = 'low-stock';
                                        stockText = `Low Stock (${product.stock})`;
                                    } else {
                                        stockClass = 'out-of-stock';
                                        stockText = 'Out of Stock';
                                    }
                                    
                                    // Remove old classes
                                    stockElem.classList.remove('in-stock', 'low-stock', 'out-of-stock');
                                    // Add new class
                                    stockElem.classList.add(stockClass);
                                    
                                    // Update HTML
                                    stockElem.innerHTML = `
                                        <i class="fas ${stockClass === 'in-stock' ? 'fa-check-circle' : stockClass === 'low-stock' ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                                        ${stockText}
                                    `;
                                    
                                    // Also update any add to cart button
                                    const addToCartBtn = card.querySelector('.add-to-cart');
                                    if (addToCartBtn) {
                                        if (product.stock > 0) {
                                            addToCartBtn.disabled = false;
                                            addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                                        } else {
                                            addToCartBtn.disabled = true;
                                            addToCartBtn.innerHTML = '<i class="fas fa-times"></i> Out of Stock';
                                        }
                                    }
                                }
                            }
                        }
                    });
                });
                
                console.log('Updated specific product displays for IDs:', event.detail.updatedProductIds);
            } else {
                // Refresh all products
                displayProducts(products);
            }
        } else {
            // Fallback to loading products from localStorage
            const updatedProducts = localStorage.getItem('mallnav_products');
            if (updatedProducts) {
                products = JSON.parse(updatedProducts);
                
                // Refresh the display
                if (typeof displayProducts === 'function') {
                    displayProducts(products);
                }
            }
        }
    });
    
    // Initialize filter event listeners
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const featuredFilter = document.getElementById('featured-filter');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
    
    if (featuredFilter) {
        featuredFilter.addEventListener('change', filterProducts);
    }
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchProducts(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts(searchInput.value);
            }
        });
    }
}); 