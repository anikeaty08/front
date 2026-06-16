import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const restaurants = [
            { id: 1, name: "Pizza Paradise", category: "pizza", rating: 4.8, time: "25-35", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop", tags: ["Italian", "Pizza"], promoted: true },
            { id: 2, name: "Burger Barn", category: "burger", rating: 4.5, time: "20-30", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", tags: ["American", "Fast Food"] },
            { id: 3, name: "Sushi Master", category: "sushi", rating: 4.9, time: "30-40", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop", tags: ["Japanese", "Sushi"], promoted: true },
            { id: 4, name: "Spice Garden", category: "indian", rating: 4.6, time: "35-45", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop", tags: ["Indian", "Curry"] },
            { id: 5, name: "Dragon Wok", category: "chinese", rating: 4.4, time: "25-35", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop", tags: ["Chinese", "Noodles"] },
            { id: 6, name: "Sweet Treats", category: "dessert", rating: 4.7, time: "15-25", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", tags: ["Desserts", "Bakery"] },
            { id: 7, name: "Italiano", category: "pizza", rating: 4.3, time: "30-40", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", tags: ["Italian", "Pasta"] },
            { id: 8, name: "Grill House", category: "burger", rating: 4.6, time: "20-30", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop", tags: ["American", "Grill"] }
        ];

        const menus = {
            1: [
                { id: 101, name: "Margherita Pizza", price: 14.99, desc: "Fresh tomatoes, mozzarella, basil", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
                { id: 102, name: "Pepperoni Pizza", price: 16.99, desc: "Classic pepperoni with cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" },
                { id: 103, name: "BBQ Chicken Pizza", price: 18.99, desc: "Grilled chicken, BBQ sauce, onions", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
                { id: 104, name: "Garlic Bread", price: 5.99, desc: "Crispy bread with garlic butter", image: "https://images.unsplash.com/photo-1619531040576-f9416afe8c79?w=200&h=200&fit=crop" }
            ],
            2: [
                { id: 201, name: "Classic Burger", price: 12.99, desc: "Beef patty, lettuce, tomato, cheese", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
                { id: 202, name: "Bacon Burger", price: 14.99, desc: "Crispy bacon, cheddar, special sauce", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop" },
                { id: 203, name: "Fries", price: 4.99, desc: "Golden crispy fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop" }
            ],
            3: [
                { id: 301, name: "Salmon Sashimi", price: 18.99, desc: "Fresh Atlantic salmon, 8 pieces", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop" },
                { id: 302, name: "Dragon Roll", price: 16.99, desc: "Eel, avocado, cucumber", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&fit=crop" },
                { id: 303, name: "Miso Soup", price: 4.99, desc: "Traditional Japanese soup", image: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=200&h=200&fit=crop" }
            ],
            4: [
                { id: 401, name: "Butter Chicken", price: 15.99, desc: "Creamy tomato curry with chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop" },
                { id: 402, name: "Biryani", price: 14.99, desc: "Aromatic rice with spices", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop" },
                { id: 403, name: "Naan Bread", price: 3.99, desc: "Fresh baked flatbread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop" }
            ],
            5: [
                { id: 501, name: "Kung Pao Chicken", price: 13.99, desc: "Spicy chicken with peanuts", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop" },
                { id: 502, name: "Fried Rice", price: 10.99, desc: "Wok-fried rice with vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop" }
            ],
            6: [
                { id: 601, name: "Chocolate Cake", price: 8.99, desc: "Rich chocolate layer cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop" },
                { id: 602, name: "Ice Cream Sundae", price: 6.99, desc: "Vanilla ice cream with toppings", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop" }
            ],
            7: [
                { id: 701, name: "Pasta Carbonara", price: 14.99, desc: "Creamy pasta with bacon", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop" },
                { id: 702, name: "Lasagna", price: 16.99, desc: "Layered pasta with meat sauce", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=200&h=200&fit=crop" }
            ],
            8: [
                { id: 801, name: "Ribeye Steak", price: 24.99, desc: "12oz grilled ribeye", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=200&h=200&fit=crop" },
                { id: 802, name: "BBQ Ribs", price: 19.99, desc: "Slow-cooked pork ribs", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop" }
            ]
        };

        let cart = [];
        let currentCategory = 'all';

        function renderRestaurants() {
            const grid = document.getElementById('restaurantGrid');
            const filtered = currentCategory === 'all' ? restaurants : restaurants.filter(r => r.category === currentCategory);
            
            grid.innerHTML = filtered.map(r => `
                <div onclick="showMenu(${r.id})" class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group">
                    <div class="relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${r.name}" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
                        ${r.promoted ? '<span class="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-orange-400 text-white text-xs font-medium px-2 py-1 rounded-full">Promoted</span>' : ''}
                        <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-full">${r.time} min</span>
                    </div>
                    <div class="p-4">
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="font-medium text-gray-900">${r.name}</h3>
                            <div class="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-md text-xs font-medium">
                                <span class="iconify" data-icon="lucide:star" style="stroke-width: 1.5px;" data-width="12"></span>
                                ${r.rating}
                            </div>
                        </div>
                        <p class="text-sm text-gray-500">${r.tags.join(' • ')}</p>
                    </div>
                </div>
            `).join('');
        }

        function showMenu(restaurantId) {
            const restaurant = restaurants.find(r => r.id === restaurantId);
            const menu = menus[restaurantId] || [];
            
            document.getElementById('restaurantGrid').parentElement.classList.add('hidden');
            document.getElementById('menuSection').classList.remove('hidden');
            
            document.getElementById('restaurantHeader').innerHTML = `
                <div class="flex flex-col sm:flex-row gap-4">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="${restaurant.name}" class="w-full sm:w-32 h-32 object-cover rounded-xl">
                    <div>
                        <h2 class="text-xl font-semibold text-gray-900 tracking-tight mb-2">${restaurant.name}</h2>
                        <p class="text-sm text-gray-500 mb-3">${restaurant.tags.join(' • ')}</p>
                        <div class="flex items-center gap-4 text-sm">
                            <div class="flex items-center gap-1 text-green-600">
                                <span class="iconify" data-icon="lucide:star" style="stroke-width: 1.5px;" data-width="16"></span>
                                <span class="font-medium">${restaurant.rating}</span>
                            </div>
                            <div class="flex items-center gap-1 text-gray-500">
                                <span class="iconify" data-icon="lucide:clock" style="stroke-width: 1.5px;" data-width="16"></span>
                                <span>${restaurant.time} min</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('menuGrid').innerHTML = menu.map(item => `
                <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-all">
                    <div class="flex gap-4">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
                        <div class="flex-1 min-w-0">
                            <h4 class="font-medium text-gray-900 text-sm mb-1">${item.name}</h4>
                            <p class="text-xs text-gray-500 mb-2 line-clamp-2">${item.desc}</p>
                            <div class="flex items-center justify-between">
                                <span class="font-medium text-gray-900 text-sm">$${item.price.toFixed(2)}</span>
                                <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="bg-rose-50 text-rose-500 p-1.5 rounded-lg hover:bg-rose-100 transition-colors">
                                    <span class="iconify" data-icon="lucide:plus" style="stroke-width: 1.5px;" data-width="16"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function hideMenu() {
            document.getElementById('restaurantGrid').parentElement.classList.remove('hidden');
            document.getElementById('menuSection').classList.add('hidden');
        }

        function filterCategory(category) {
            currentCategory = category;
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('bg-gray-900', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            event.target.classList.remove('bg-gray-100', 'text-gray-700');
            event.target.classList.add('bg-gray-900', 'text-white');
            renderRestaurants();
        }

        function addToCart(item) {
            const existing = cart.find(c => c.id === item.id);
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
            updateCart();
        }

        function removeFromCart(itemId) {
            const index = cart.findIndex(c => c.id === itemId);
            if (index > -1) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
            }
            updateCart();
        }

        function updateCart() {
            document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            const cartItems = document.getElementById('cartItems');
            const cartFooter = document.getElementById('cartFooter');
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center">
                        <span class="iconify text-gray-300 mb-4" data-icon="lucide:shopping-bag" style="stroke-width: 1.5px;" data-width="48"></span>
                        <p class="text-gray-500 text-sm">Your cart is empty</p>
                        <p class="text-gray-400 text-xs mt-1">Add items to get started</p>
                    </div>
                `;
                cartFooter.classList.add('hidden');
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex gap-3 mb-4 pb-4 border-b border-gray-100 last:border-0">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-medium text-gray-900 text-sm">${item.name}</h4>
                            <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
                            <div class="flex items-center gap-3 mt-2">
                                <button onclick="removeFromCart(${item.id})" class="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <span class="iconify" data-icon="lucide:minus" style="stroke-width: 1.5px;" data-width="14"></span>
                                </button>
                                <span class="text-sm font-medium w-4 text-center">${item.quantity}</span>
                                <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <span class="iconify" data-icon="lucide:plus" style="stroke-width: 1.5px;" data-width="14"></span>
                                </button>
                            </div>
                        </div>
                        <span class="font-medium text-gray-900 text-sm">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('');
                
                const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
                document.getElementById('total').textContent = `$${(subtotal + 2.99).toFixed(2)}`;
                cartFooter.classList.remove('hidden');
            }
        }

        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('hidden');
        }

        // Initialize
        renderRestaurants();
        updateCart();

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = restaurants.filter(r => 
                r.name.toLowerCase().includes(query) || 
                r.tags.some(t => t.toLowerCase().includes(query))
            );
            
            const grid = document.getElementById('restaurantGrid');
            if (query && filtered.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No restaurants found for "${query}"</div>`;
            } else if (query) {
                currentCategory = 'all';
                grid.innerHTML = filtered.map(r => `
                    <div onclick="showMenu(${r.id})" class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group">
                        <div class="relative">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${r.name}" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
                            ${r.promoted ? '<span class="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-orange-400 text-white text-xs font-medium px-2 py-1 rounded-full">Promoted</span>' : ''}
                            <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-full">${r.time} min</span>
                        </div>
                        <div class="p-4">
                            <div class="flex items-start justify-between mb-2">
                                <h3 class="font-medium text-gray-900">${r.name}</h3>
                                <div class="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-md text-xs font-medium">
                                    <span class="iconify" data-icon="lucide:star" style="stroke-width: 1.5px;" data-width="12"></span>
                                    ${r.rating}
                                </div>
                            </div>
                            <p class="text-sm text-gray-500">${r.tags.join(' • ')}</p>
                        </div>
                    </div>
                `).join('');
            } else {
                renderRestaurants();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight text-rose-500" href="#">foodhub</a>

<div className="hidden md:flex items-center gap-2 text-gray-700 cursor-pointer hover:text-gray-900">
<span className="iconify" data-icon="lucide:map-pin" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span className="text-sm font-medium">New York, NY</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5px'}}></span>
</div>
</div>

<div className="hidden sm:flex flex-1 max-w-xl mx-8">
<div className="relative w-full">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" id="searchInput" placeholder="Search for restaurants or dishes..." type="text"/>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
<span className="iconify" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span>Sign In</span>
</button>
<button className="relative flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-rose-600 transition-colors" onclick="toggleCart()">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span className="hidden sm:inline">Cart</span>
<span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" id="cartCount">0</span>
</button>
</div>
</div>
</div>
</header>

<section className="bg-gradient-to-br from-rose-500 to-orange-400 py-12 sm:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">Delicious food, delivered fast</h1>
<p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">Order from the best restaurants near you. Fresh ingredients, amazing taste, at your doorstep.</p>

<div className="sm:hidden max-w-md mx-auto">
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<input className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white shadow-lg" placeholder="Search restaurants..." type="text"/>
</div>
</div>
</div>
</section>

<section className="py-8 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
<button className="category-btn active flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-900 text-white transition-all" onclick="filterCategory('all')">All</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('pizza')">🍕 Pizza</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('burger')">🍔 Burgers</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('sushi')">🍣 Sushi</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('indian')">🍛 Indian</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('chinese')">🥡 Chinese</button>
<button className="category-btn flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all" onclick="filterCategory('dessert')">🍰 Desserts</button>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">Popular Restaurants</h2>
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="16" style={{strokeWidth: '1.5px'}}></span>
<span>Filters</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="restaurantGrid">

</div>
</div>

<div className="hidden" id="menuSection">
<button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm font-medium" onclick="hideMenu()">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18" style={{strokeWidth: '1.5px'}}></span>
                Back to restaurants
            </button>
<div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100" id="restaurantHeader">

</div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">Menu</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="menuGrid">

</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="cartSidebar">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="toggleCart()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
<div className="flex items-center justify-between p-6 border-b border-gray-100">
<h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="toggleCart()">
<span className="iconify" data-icon="lucide:x" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6" id="cartItems">

</div>
<div className="hidden border-t border-gray-100 p-6 bg-gray-50" id="cartFooter">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Subtotal</span>
<span className="text-sm font-medium text-gray-900" id="subtotal">$0.00</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Delivery</span>
<span className="text-sm font-medium text-gray-900">$2.99</span>
</div>
<div className="flex items-center justify-between mb-4 pt-2 border-t border-gray-200">
<span className="text-base font-medium text-gray-900">Total</span>
<span className="text-base font-semibold text-gray-900" id="total">$0.00</span>
</div>
<button className="w-full bg-rose-500 text-white py-3 rounded-xl text-sm font-medium hover:bg-rose-600 transition-colors">
                    Checkout
                </button>
</div>
</div>
</div>


    </>
  );
}
