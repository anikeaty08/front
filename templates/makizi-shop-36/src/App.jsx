import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mock Data
        const MOCK_PRODUCTS = [
            {
                id: 1, vendorId: 'v1', title: 'Sneakers Urban Style',
                description: 'Sneakers confortables et tendance pour un look urbain. Design moderne avec semelle cushion.',
                price: '5 108 900 FCFA', priceRaw: 5108900,
                images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&h=900&fit=crop',
                         'https://images.unsplash.com/photo-1526178610586-4f3f0d8161d8?w=1200&h=900&fit=crop'],
                video: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=900&fit=crop',
                likes: 1200, rating: 4.7, category: 'Sneakers'
            },
            {
                id: 2, vendorId: 'v2', title: 'Montre Luxe Premium',
                description: 'Montre élégante en acier inoxydable avec mouvement automatique.',
                price: '2 450 000 FCFA', priceRaw: 2450000,
                images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=900&fit=crop'],
                video: null, likes: 856, rating: 4.6, category: 'Montres'
            },
            {
                id: 3, vendorId: 'v1', title: 'Sac à Dos Designer',
                description: 'Sac à dos en cuir véritable avec compartiment laptop sécurisé.',
                price: '850 000 FCFA', priceRaw: 850000,
                images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=900&fit=crop'],
                video: null, likes: 634, rating: 4.5, category: 'Sacs'
            },
            {
                id: 4, vendorId: 'v2', title: 'Jordan 1 Retro High',
                description: 'Coloris Chicago, taille 42, état neuf jamais porté. Authentique avec certificat.',
                price: '625 000 FCFA', priceRaw: 625000,
                images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=900&fit=crop'],
                video: null, likes: 892, rating: 4.8, category: 'Sneakers'
            }
        ];

        const PLANS = [
            { id: 'start', name: 'Start', price: 'Gratuit', features: ['3 produits', 'Profil basique', 'Support email'] },
            { id: 'pro', name: 'Pro', price: '4 900 FCFA/mois', features: ['15 produits', 'Statistiques avancées', 'Badge vérifié'] },
            { id: 'biz', name: 'Business', price: '9 900 FCFA/mois', features: ['Produits illimités', 'Vitrine personnalisée', 'Support prioritaire'] }
        ];

        // State
        let currentPage = 'home';
        let products = [...MOCK_PRODUCTS];
        let cart = [];
        let feedIndex = 0;
        let isSeller = false;
        let selectedCategory = 'Tous';

        // Utility
        const formatNumber = (n) => n.toLocaleString('fr-FR');
        const $ = (sel) => document.querySelector(sel);
        const $$ = (sel) => document.querySelectorAll(sel);

        // Navigation
        function showPage(page) {
            currentPage = page;
            $$('.page-content').forEach(p => p.classList.add('hide'));
            $(`#page-${page}`).classList.remove('hide');
            $(`#page-${page}`).classList.add('animate-fade-in');
            
            $$('.nav-btn').forEach(btn => {
                if (btn.dataset.page === page) {
                    btn.classList.remove('text-gray-400');
                    btn.classList.add('text-purple-600');
                } else {
                    btn.classList.remove('text-purple-600');
                    btn.classList.add('text-gray-400');
                }
            });

            if (page === 'home') renderFeed();
            if (page === 'market') renderMarket();
            if (page === 'sell') renderPlans();
        }

        $$('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => showPage(btn.dataset.page));
        });

        // Home Feed
        function renderFeed() {
            const container = $('#feed-container');
            if (feedIndex >= products.length) feedIndex = 0;
            const p = products[feedIndex];
            
            container.innerHTML = `
                <div class="absolute inset-0">
                    <img src="${p.images[0]}" alt="${p.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                </div>

                <div class="absolute top-6 left-4">
                    <div class="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Feed</div>
                </div>

                <div class="absolute right-4 bottom-32 flex flex-col gap-6">
                    <button onclick="likeProduct(${p.id})" class="flex flex-col items-center hover:scale-110 transition-transform active:scale-90">
                        <i data-lucide="heart" class="w-8 h-8 text-white"></i>
                        <div class="text-xs mt-1">${formatNumber(p.likes)}</div>
                    </button>
                    <button class="flex flex-col items-center hover:scale-110 transition-transform active:scale-90">
                        <i data-lucide="message-circle" class="w-8 h-8 text-white"></i>
                        <div class="text-xs mt-1">${Math.floor(Math.random()*100)}</div>
                    </button>
                    <button class="flex flex-col items-center hover:scale-110 transition-transform active:scale-90">
                        <i data-lucide="share-2" class="w-8 h-8 text-white"></i>
                        <div class="text-xs mt-1">Partager</div>
                    </button>
                </div>

                <div class="absolute left-4 right-4 bottom-24">
                    <h2 class="text-2xl font-bold mb-2">${p.title}</h2>
                    <p class="text-sm text-gray-300 line-clamp-2 mb-4">${p.description}</p>
                    <div class="flex gap-3">
                        <button class="flex-1 bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-100 transition-all active:scale-95">
                            ${p.price}
                        </button>
                        <button onclick="addToCart(${p.id})" class="bg-purple-600 text-white py-3 px-4 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-all active:scale-95">
                            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                            Panier
                        </button>
                    </div>
                </div>

                <div class="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-4">
                    <button onclick="prevFeed()" class="text-white/80 hover:text-white p-2">
                        <i data-lucide="chevron-up" class="w-6 h-6"></i>
                    </button>
                    <button onclick="nextFeed()" class="text-white/80 hover:text-white p-2">
                        <i data-lucide="chevron-down" class="w-6 h-6"></i>
                    </button>
                </div>
            `;
            lucide.createIcons();
        }

        function nextFeed() {
            feedIndex = (feedIndex + 1) % products.length;
            renderFeed();
        }

        function prevFeed() {
            feedIndex = feedIndex === 0 ? products.length - 1 : feedIndex - 1;
            renderFeed();
        }

        function likeProduct(id) {
            products = products.map(p => p.id === id ? {...p, likes: p.likes + 1} : p);
            renderFeed();
        }

        // Market
        function renderMarket() {
            const categories = ['Tous', 'Sneakers', 'Montres', 'Sacs', 'Vêtements', 'Accessoires'];
            const tagsContainer = $('#category-tags');
            tagsContainer.innerHTML = categories.map(cat => `
                <button onclick="filterByCategory('${cat}')" 
                        class="px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95 ${cat === selectedCategory ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 shadow-sm hover:shadow-md'}">
                    ${cat}
                </button>
            `).join('');

            renderProductGrid();
        }

        function filterByCategory(cat) {
            selectedCategory = cat;
            renderMarket();
        }

        function renderProductGrid() {
            const query = $('#search-input')?.value.toLowerCase() || '';
            const filtered = products.filter(p => 
                (selectedCategory === 'Tous' || p.category === selectedCategory) &&
                p.title.toLowerCase().includes(query)
            );

            const grid = $('#product-grid');
            grid.innerHTML = filtered.map(p => `
                <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                    <img src="${p.images[0]}" alt="${p.title}" class="w-full h-44 object-cover">
                    <div class="p-3">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="font-semibold text-sm line-clamp-1 flex-1">${p.title}</h3>
                        </div>
                        <div class="text-purple-600 font-bold text-sm mb-2">${p.price}</div>
                        <div class="flex items-center gap-2 mb-3 text-xs text-gray-500">
                            <span class="flex items-center gap-1">
                                <i data-lucide="heart" class="w-3 h-3"></i>
                                ${formatNumber(p.likes)}
                            </span>
                            <span class="flex items-center gap-1">
                                <i data-lucide="star" class="w-3 h-3 fill-yellow-400 text-yellow-400"></i>
                                ${p.rating}
                            </span>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="addToCart(${p.id})" class="flex-1 bg-purple-600 text-white text-sm py-2 rounded-lg hover:bg-purple-700 transition-all active:scale-95">
                                Ajouter
                            </button>
                            <button onclick="viewProduct(${p.id})" class="bg-white border border-gray-200 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all active:scale-95">
                                <i data-lucide="eye" class="w-4 h-4 text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        $('#search-input')?.addEventListener('input', renderProductGrid);

        function viewProduct(id) {
            alert(`Voir le produit ${id} (modal de détail à implémenter)`);
        }

        // Cart
        function addToCart(id) {
            const product = products.find(p => p.id === id);
            if (product) {
                cart.push(product);
                updateCart();
                showNotification('Produit ajouté au panier');
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const count = cart.length;
            const badge = $('#cart-badge');
            const cartCount = $('#cart-count');
            
            if (count > 0) {
                badge.classList.remove('hide');
                badge.textContent = count;
            } else {
                badge.classList.add('hide');
            }

            if (cartCount) cartCount.textContent = count;

            if (currentPage === 'cart') {
                renderCart();
            }
        }

        function renderCart() {
            const empty = $('#cart-empty');
            const items = $('#cart-items');
            const footer = $('#cart-footer');
            const total = cart.reduce((sum, item) => sum + item.priceRaw, 0);

            if (cart.length === 0) {
                empty.classList.remove('hide');
                items.classList.add('hide');
                footer.classList.add('hide');
            } else {
                empty.classList.add('hide');
                items.classList.remove('hide');
                footer.classList.remove('hide');

                items.innerHTML = cart.map((item, idx) => `
                    <div class="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
                        <img src="${item.images[0]}" alt="${item.title}" class="w-20 h-20 object-cover rounded-lg">
                        <div class="flex-1">
                            <h3 class="font-semibold text-sm mb-1">${item.title}</h3>
                            <p class="text-purple-600 font-bold text-sm">${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${idx})" class="text-red-500 hover:text-red-700 transition-colors active:scale-90">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                `).join('');

                $('#cart-total').textContent = formatNumber(total) + ' FCFA';
                lucide.createIcons();
            }
        }

        $('#checkout-btn')?.addEventListener('click', () => {
            alert('Commande validée ! (simulation de paiement)');
            cart = [];
            updateCart();
            showNotification('Commande passée avec succès');
        });

        // Sell
        function renderPlans() {
            const plansSection = $('#plans-section');
            plansSection.classList.remove('hide');
            $('#sell-form').classList.add('hide');

            plansSection.innerHTML = PLANS.map(plan => `
                <div class="p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <div class="font-semibold text-lg">${plan.name}</div>
                            <div class="text-sm text-purple-600 font-medium">${plan.price}</div>
                        </div>
                        <button onclick="choosePlan('${plan.id}')" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all active:scale-95">
                            Choisir
                        </button>
                    </div>
                    <div class="text-xs text-gray-500 space-y-1">
                        ${plan.features.map(f => `<div class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-green-600"></i>${f}</div>`).join('')}
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function choosePlan(planId) {
            $('#plans-section').classList.add('hide');
            $('#sell-form').classList.remove('hide');
        }

        $('#upload-btn').addEventListener('click', () => $('#file-input').click());
        $('#camera-btn').addEventListener('click', () => alert('Ouvrir la caméra (demo)'));

        $('#file-input').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    $('#preview-img').src = e.target.result;
                    $('#media-preview').classList.remove('hide');
                };
                reader.readAsDataURL(file);
            }
        });

        $('#cancel-sell-btn').addEventListener('click', () => {
            $('#sell-form').classList.add('hide');
            $('#plans-section').classList.remove('hide');
            $('#media-preview').classList.add('hide');
            $('#sell-title').value = '';
            $('#sell-desc').value = '';
            $('#sell-price').value = '';
        });

        $('#publish-btn').addEventListener('click', () => {
            const title = $('#sell-title').value;
            const desc = $('#sell-desc').value;
            const price = $('#sell-price').value;
            const category = $('#sell-category').value;
            const imgSrc = $('#preview-img').src;

            if (!title || !price) {
                alert('Veuillez remplir au moins le titre et le prix');
                return;
            }

            const newProduct = {
                id: Date.now(),
                vendorId: 'v1',
                title,
                description: desc || 'Pas de description',
                price: formatNumber(parseInt(price)) + ' FCFA',
                priceRaw: parseInt(price),
                images: [imgSrc || 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=600&fit=crop'],
                video: null,
                likes: 0,
                rating: 5.0,
                category
            };

            products.unshift(newProduct);
            showNotification('Produit publié avec succès !');
            showPage('market');
        });

        // Profile
        $('#seller-toggle').addEventListener('click', () => {
            isSeller = !isSeller;
            $('#seller-status').textContent = isSeller ? 'ON' : 'OFF';
            $('#seller-status').classList.toggle('text-purple-600', isSeller);
            $('#seller-dashboard').classList.toggle('hide', !isSeller);
        });

        // Notifications
        function showNotification(message) {
            const notif = document.createElement('div');
            notif.className = 'fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-slide-up';
            notif.textContent = message;
            document.body.appendChild(notif);
            setTimeout(() => notif.remove(), 3000);
        }

        // Initialize
        lucide.createIcons();
        showPage('home');
        updateCart();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 max-w-md mx-auto bg-white shadow-sm z-50">
<div className="p-3 flex items-center gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">M</div>
<div>
<div className="font-semibold text-sm">Makizi Shop</div>
<div className="text-xs text-gray-500">Marketplace</div>
</div>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all active:scale-95">
<i className="w-4 h-4 text-gray-600" data-lucide="search"></i>
</button>
<button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all active:scale-95 relative">
<i className="w-4 h-4 text-gray-600" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">3</span>
</button>
</div>
</div>
</div>

<div className="max-w-md mx-auto pt-16 pb-20">

<div className="page-content" id="page-home">
<div className="relative h-screen bg-black text-white swipe-container" id="feed-container">

</div>
</div>

<div className="page-content hide" id="page-market">
<div className="p-4 bg-gray-50 min-h-screen">
<div className="flex items-center gap-3 mb-4">
<div className="flex-1 relative">
<i className="absolute left-3 top-3 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" id="search-input" placeholder="Rechercher des produits..." type="text"/>
</div>
<button className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all active:scale-95" id="filter-btn">
<i className="w-5 h-5 text-gray-600" data-lucide="filter"></i>
</button>
</div>
<div className="mb-4 overflow-x-auto flex gap-3 pb-2" id="category-tags">

</div>
<div className="grid grid-cols-2 gap-4" id="product-grid">

</div>
</div>
</div>

<div className="page-content hide" id="page-sell">
<div className="p-4 bg-gray-50 min-h-screen">
<h1 className="text-2xl font-bold mb-4 tracking-tight">Vendre</h1>

<div className="grid gap-3" id="plans-section">

</div>

<div className="hide bg-white rounded-xl p-4 shadow-sm animate-slide-up" id="sell-form">
<label className="block text-sm font-medium mb-2">Photo / Vidéo</label>
<div className="flex gap-2 mb-3">
<button className="flex-1 border-dashed border-2 border-gray-300 py-3 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all active:scale-95" id="upload-btn">
<i className="w-5 h-5 mx-auto mb-1 text-gray-400" data-lucide="upload"></i>
<div className="text-sm text-gray-600">Importer</div>
</button>
<button className="px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all active:scale-95 flex items-center gap-2" id="camera-btn">
<i className="w-5 h-5" data-lucide="camera"></i>
                            Filmer
                        </button>
<input accept="image/*,video/*" className="hidden" id="file-input" type="file"/>
</div>
<div className="hide mb-3" id="media-preview">
<img alt="preview" className="w-full h-44 object-cover rounded-lg" id="preview-img" src=""/>
</div>
<div className="space-y-2">
<input className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" id="sell-title" placeholder="Titre du produit" type="text"/>
<textarea className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" id="sell-desc" placeholder="Description détaillée" rows="4"></textarea>
<input className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" id="sell-price" placeholder="Prix (FCFA)" type="number"/>
<select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" id="sell-category">
<option>Sneakers</option>
<option>Montres</option>
<option>Sacs</option>
<option>Vêtements</option>
<option>Accessoires</option>
</select>
<div className="flex gap-2 pt-2">
<button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-all active:scale-95" id="publish-btn">
                                Publier
                            </button>
<button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all active:scale-95" id="cancel-sell-btn">
                                Annuler
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-content hide" id="page-cart">
<div className="p-4 bg-gray-50 min-h-screen pb-32">
<h1 className="text-2xl font-bold mb-4 tracking-tight">Panier (<span id="cart-count">0</span>)</h1>
<div className="flex flex-col items-center justify-center h-64 text-gray-400" id="cart-empty">
<i className="w-16 h-16 mb-4" data-lucide="shopping-cart"></i>
<p>Votre panier est vide</p>
</div>
<div className="hide space-y-3 mb-20" id="cart-items">

</div>
<div className="hide fixed bottom-20 left-0 right-0 max-w-md mx-auto bg-white p-4 shadow-lg border-t border-gray-200" id="cart-footer">
<div className="flex justify-between items-center mb-3">
<span className="font-semibold">Total:</span>
<span className="text-xl font-bold text-purple-600" id="cart-total">0 FCFA</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-all active:scale-95" id="checkout-btn">
                            Commander Maintenant
                        </button>
<button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all active:scale-95">
                            Sauvegarder
                        </button>
</div>
</div>
</div>
</div>

<div className="page-content hide" id="page-profile">
<div className="p-4 bg-gray-50 min-h-screen">
<div className="bg-white rounded-xl p-6 shadow-sm mb-4">
<div className="flex items-center gap-4 mb-4">
<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">M</div>
<div>
<h2 className="text-xl font-bold tracking-tight">Makizi Shop</h2>
<p className="text-gray-500 text-sm">Vendeur &amp; Acheteur</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<div className="text-2xl font-bold">4.8k</div>
<div className="text-sm text-gray-500">Ventes</div>
</div>
<div>
<div className="text-2xl font-bold">1.2k</div>
<div className="text-sm text-gray-500">Abonnés</div>
</div>
<div>
<div className="text-2xl font-bold">4.8</div>
<div className="text-sm text-gray-500">Note</div>
</div>
</div>
</div>
<div className="space-y-3">
<button className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
<span className="font-medium">Mes commandes</span>
<span className="text-gray-400">›</span>
</button>
<button className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
<span className="font-medium">Mes favoris</span>
<span className="text-gray-400">›</span>
</button>
<button className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all active:scale-[0.98]" id="seller-toggle">
<span className="font-medium">Mode vendeur</span>
<span className="text-gray-400" id="seller-status">OFF</span>
</button>
<button className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
<span className="font-medium">Paramètres</span>
<span className="text-gray-400">›</span>
</button>
</div>

<div className="hide mt-4 space-y-4 animate-slide-up" id="seller-dashboard">
<div className="grid grid-cols-2 gap-3">
<div className="bg-white rounded-xl p-4 shadow-sm">
<div className="text-sm text-gray-500">Ventes totales</div>
<div className="text-2xl font-bold">7.5M FCFA</div>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm">
<div className="text-sm text-gray-500">Commandes</div>
<div className="text-2xl font-bold">24</div>
</div>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm">
<h3 className="font-semibold mb-3">Commandes récentes</h3>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 border rounded-lg">
<div className="flex-1">
<div className="font-medium text-sm">Sneakers Urban Style</div>
<div className="text-xs text-gray-500">Client: Amina • 30/10/2025</div>
</div>
<button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-all active:scale-95">
                                    Expédier
                                </button>
</div>
<div className="flex items-center justify-between p-2 border rounded-lg">
<div className="flex-1">
<div className="font-medium text-sm">Montre Luxe Premium</div>
<div className="text-xs text-gray-500">Client: Babacar • 01/11/2025</div>
</div>
<button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-all active:scale-95">
                                    Expédier
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 z-40">
<div className="flex justify-around items-center py-2">
<button className="nav-btn flex flex-col items-center gap-1 px-4 py-2 text-purple-600 transition-all active:scale-90" data-page="home">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-xs">Accueil</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 px-4 py-2 text-gray-400 transition-all active:scale-90" data-page="market">
<i className="w-6 h-6" data-lucide="store"></i>
<span className="text-xs">Marché</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 px-4 py-2 text-purple-600 transition-all active:scale-90" data-page="sell">
<i className="w-8 h-8" data-lucide="plus-circle"></i>
<span className="text-xs">Vendre</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 px-4 py-2 relative text-gray-400 transition-all active:scale-90" data-page="cart">
<i className="w-6 h-6" data-lucide="shopping-cart"></i>
<span className="hide absolute top-1 right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center" id="cart-badge">0</span>
<span className="text-xs">Panier</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 px-4 py-2 text-gray-400 transition-all active:scale-90" data-page="profile">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-xs">Profil</span>
</button>
</div>
</div>


    </>
  );
}
