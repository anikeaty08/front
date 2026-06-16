import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. DATA GENERATION ---
        const shoeNames = ["Velocity", "Kinetic", "Aero", "Flux", "Quantum", "Nebula", "Stratus", "Pulse", "Vortex", "Apex"];
        const modifiers = ["X", "Pro", "Ultra", "Lite", "Max", "Elite"];
        const colors = ["Cyber Cyan", "Neon Lime", "Void Black", "Plasma Pink", "Solar Orange", "Glitch White"];
        const categories = ["running", "lifestyle", "tech"];
        
        // Helper to get random image from Unsplash
        // Note: Using specific IDs to simulate different shoe angles/types
        const baseImages = [
            "1606107557195-0e29a4b5b4aa", "1491553895911-0055eca6402d", "1549298916-b41d501d3772", 
            "1595950653106-6c9ebd614d3a", "1600185365483-26d7a4cc7519", "1603808033192-082d6919d3e1",
            "1560769629-975ec94e6a86", "1542291026-7eec264c27ff", "1525966548548-3ed5955db751"
        ];

        let products = [];
        let cart = 0;
        let currentPage = 1;
        const itemsPerPage = 9;
        const totalPages = 5;

        // Generate 45 products (5 pages * 9)
        for (let i = 1; i <= 45; i++) {
            const name = `MIK ${shoeNames[Math.floor(Math.random() * shoeNames.length)]} ${modifiers[Math.floor(Math.random() * modifiers.length)]}`;
            const price = Math.floor(Math.random() * (350 - 120 + 1) + 120);
            const imgId = baseImages[i % baseImages.length];
            const category = categories[i % categories.length];
            
            products.push({
                id: i,
                name: name,
                price: price,
                category: category,
                color: colors[Math.floor(Math.random() * colors.length)],
                // Simulating different views by slight URL variations or different images
                images: [
                    `https://images.unsplash.com/photo-${imgId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`, // Side
                    `https://images.unsplash.com/photo-${baseImages[(i+1)%baseImages.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`, // Top
                    `https://images.unsplash.com/photo-${baseImages[(i+2)%baseImages.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`, // Back
                    `https://images.unsplash.com/photo-${baseImages[(i+3)%baseImages.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`  // Lifestyle
                ],
                tag: i % 5 === 0 ? "Best Seller" : (i % 3 === 0 ? "New" : "")
            });
        }

        let currentFilter = 'all';
        let currentProducts = products;

        // --- 2. RENDER FUNCTIONS ---
        function renderGrid() {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = '';
            
            // Filter logic
            let filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
            currentProducts = filtered;
            
            document.getElementById('item-count').innerText = filtered.length;

            // Pagination logic
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageItems = filtered.slice(start, end);

            pageItems.forEach(product => {
                const delay = Math.random() * 0.2;
                const card = `
                    <div class="group cursor-pointer animate-fade-in" style="animation-delay: ${delay}s" onclick="openProductModal(${product.id})">
                        <div class="relative aspect-[4/5] rounded-xl overflow-hidden glass border border-white/5 mb-4">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            
                            ${product.tag ? `<div class="absolute top-3 left-3 z-20 px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wide rounded-sm">${product.tag}</div>` : ''}
                            
                            <img src="${product.images[0]}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${product.name}">
                            
                            <div class="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <button class="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-cyan-400 transition-colors shadow-lg">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-white group-hover:text-cyan-400 transition-colors">${product.name}</h3>
                                <p class="text-xs text-zinc-500">${product.color}</p>
                            </div>
                            <span class="font-semibold text-white bg-white/10 px-2 py-1 rounded text-sm">$${product.price}</span>
                        </div>
                    </div>
                `;
                grid.innerHTML += card;
            });

            renderPagination(filtered.length);
        }

        function renderPagination(totalItems) {
            const numPages = Math.ceil(totalItems / itemsPerPage);
            const container = document.getElementById('pagination-numbers');
            container.innerHTML = '';

            // Cap at 5 pages for UI
            const maxPages = Math.min(numPages, 5);

            for(let i=1; i<=maxPages; i++) {
                const activeClass = i === currentPage ? 'bg-white text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-white/10';
                const btn = `<button onclick="goToPage(${i})" class="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition-all ${activeClass}">${i}</button>`;
                container.innerHTML += btn;
            }

            document.getElementById('prev-page').disabled = currentPage === 1;
            document.getElementById('next-page').disabled = currentPage === maxPages;
        }

        // --- 3. INTERACTION FUNCTIONS ---
        function filterProducts(category) {
            currentFilter = category;
            currentPage = 1;
            renderGrid();
        }

        function goToPage(page) {
            currentPage = page;
            renderGrid();
            document.getElementById('shop-anchor').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToShop() {
            document.getElementById('shop-anchor').scrollIntoView({ behavior: 'smooth' });
        }

        // --- 4. MODAL LOGIC ---
        let currentModalProduct = null;

        function openProductModal(id) {
            const product = products.find(p => p.id === id);
            currentModalProduct = product;
            
            document.getElementById('modal-title').innerText = product.name;
            document.getElementById('modal-price').innerText = `$${product.price}`;
            document.getElementById('modal-img').src = product.images[0];
            
            // Set thumbnails
            product.images.forEach((img, idx) => {
                document.getElementById(`thumb-${idx}`).src = img;
            });

            // Reset active thumbnail styling
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('ring-2', 'ring-cyan-400'));
            document.querySelector('.view-btn').classList.add('ring-2', 'ring-cyan-400'); // First one active

            const modal = document.getElementById('product-modal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('product-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function changeView(index) {
            const mainImg = document.getElementById('modal-img');
            // Add fade animation
            mainImg.style.opacity = 0;
            setTimeout(() => {
                mainImg.src = currentModalProduct.images[index];
                mainImg.style.opacity = 1;
            }, 200);

            // Update border ring
            document.querySelectorAll('.view-btn').forEach((btn, idx) => {
                if(idx === index) btn.classList.add('ring-2', 'ring-cyan-400');
                else btn.classList.remove('ring-2', 'ring-cyan-400');
            });
        }

        function addToCartFromModal() {
            cart++;
            document.getElementById('cart-count').innerText = cart;
            document.getElementById('cart-count').classList.remove('opacity-0');
            
            // Animation for cart bubble
            const bubble = document.getElementById('cart-count');
            bubble.classList.add('scale-125');
            setTimeout(() => bubble.classList.remove('scale-125'), 200);

            showToast(currentModalProduct.name);
            closeModal();
        }

        function showToast(productName) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = `${productName} added`;
            toast.classList.remove('translate-x-64', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-x-64', 'opacity-0');
            }, 3000);
        }

        // --- 5. INITIALIZATION ---
        window.onload = () => {
            renderGrid();
        };

        // Size button logic in modal
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.size-btn').forEach(b => {
                    b.classList.remove('bg-cyan-500', 'text-black', 'border-cyan-500');
                    b.classList.add('text-zinc-400', 'border-white/10');
                });
                this.classList.remove('text-zinc-400', 'border-white/10');
                this.classList.add('bg-cyan-500', 'text-black', 'border-cyan-500');
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mesh-bg"></div>
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>

<div className="fixed top-24 right-6 z-[60] transform translate-x-64 transition-transform duration-500 pointer-events-none opacity-0" id="toast">
<div className="glass p-4 rounded-xl flex items-center gap-4 border-l-4 border-cyan-500 shadow-2xl bg-black/80">
<div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
<div>
<h4 className="font-bold text-sm">Added to Cart</h4>
<p className="text-xs text-zinc-400" id="toast-message">MIK Velocity V1 (Size 9)</p>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-black italic">M</div>
<span className="text-xl font-bold tracking-tighter uppercase">MIK</span>
</div>
<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-white hover:text-cyan-400 transition-colors" onclick="filterProducts('all')">Shop All</button>
<button className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors" onclick="filterProducts('running')">Performance</button>
<button className="text-sm font-medium text-zinc-400 hover:text-fuchsia-400 transition-colors" onclick="filterProducts('lifestyle')">Lifestyle</button>
<button className="text-sm font-medium text-zinc-400 hover:text-lime-400 transition-colors" onclick="filterProducts('tech')">Tech-Wear</button>
</div>
<div className="flex items-center gap-4">
<button className="relative group p-2">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="relative group p-2" onclick="toggleCart()">
<span className="iconify text-zinc-400 group-hover:text-cyan-400 transition-colors" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-1 right-0 w-4 h-4 bg-cyan-500 text-[10px] font-bold text-black rounded-full flex items-center justify-center opacity-0 transition-opacity" id="cart-count">0</span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-12">

<section className="max-w-7xl mx-auto px-6 mb-16">
<div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 group">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556906781-9a412961d28c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center px-12">
<div className="max-w-xl animate-slide-up">
<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-400/10 border border-lime-400/20 rounded-full">Season 05 / Drop 1</span>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            RUN THE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-400">NEON FUTURE</span>
</h1>
<p className="text-zinc-300 text-lg mb-8 max-w-md">Adaptive algorithmic foam. Self-lacing tension. The MIK-Z1 is here.</p>
<button className="bg-white text-black px-8 py-4 rounded-xl font-bold tracking-tight hover:scale-105 transition-transform flex items-center gap-2" onclick="scrollToShop()">
                            Explore Collection <span className="iconify" data-icon="lucide:arrow-down" data-width="18"></span>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10" id="shop-anchor">

<div className="lg:col-span-3 space-y-8 h-fit sticky top-24">
<div className="glass p-6 rounded-2xl">
<h3 className="font-bold text-lg mb-6 flex items-center gap-2">
<span className="iconify text-cyan-400" data-icon="lucide:sliders-horizontal" data-width="18"></span>
                        Filters
                    </h3>
<div className="space-y-6">

<div>
<h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Category</h4>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
<div className="w-2 h-2 bg-cyan-400 rounded-sm opacity-0 group-hover:opacity-100"></div>
</div>
<span className="text-sm text-zinc-300 group-hover:text-white">All Terrain</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center group-hover:border-fuchsia-400 transition-colors">
<div className="w-2 h-2 bg-fuchsia-400 rounded-sm opacity-0"></div>
</div>
<span className="text-sm text-zinc-300 group-hover:text-white">Street Runner</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center group-hover:border-lime-400 transition-colors">
<div className="w-2 h-2 bg-lime-400 rounded-sm opacity-0"></div>
</div>
<span className="text-sm text-zinc-300 group-hover:text-white">Cyber-Casual</span>
</label>
</div>
</div>

<div>
<h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Price Range</h4>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="500" min="100" type="range" value="300"/>
<div className="flex justify-between text-xs text-zinc-400 mt-2">
<span>$100</span>
<span>$500+</span>
</div>
</div>

<div>
<h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Colors</h4>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-cyan-500 hover:ring-2 ring-white ring-offset-2 ring-offset-black transition-all"></button>
<button className="w-6 h-6 rounded-full bg-fuchsia-500 hover:ring-2 ring-white ring-offset-2 ring-offset-black transition-all"></button>
<button className="w-6 h-6 rounded-full bg-lime-500 hover:ring-2 ring-white ring-offset-2 ring-offset-black transition-all"></button>
<button className="w-6 h-6 rounded-full bg-white hover:ring-2 ring-white ring-offset-2 ring-offset-black transition-all"></button>
<button className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 hover:ring-2 ring-white ring-offset-2 ring-offset-black transition-all"></button>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl p-6 border border-white/10 group cursor-pointer">
<img alt="Promo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="relative z-10">
<h4 className="font-bold text-2xl text-white mb-1">PRO CLUB</h4>
<p className="text-xs text-zinc-300 mb-4">Join for exclusive drops.</p>
<span className="text-xs font-bold border-b border-white pb-0.5">Learn More</span>
</div>
</div>
</div>

<div className="lg:col-span-9">

<div className="flex justify-between items-center mb-6">
<span className="text-sm text-zinc-400">Showing <span className="text-white font-bold" id="item-count">9</span> results</span>
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-500">Sort by:</span>
<select className="bg-transparent text-sm font-medium text-white border-none outline-none cursor-pointer">
<option className="bg-black">Newest</option>
<option className="bg-black">Price: Low to High</option>
<option className="bg-black">Price: High to Low</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="product-grid">

</div>

<div className="mt-12 flex items-center justify-center gap-2">
<button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50" id="prev-page">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<div className="flex gap-2" id="pagination-numbers">

</div>
<button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" id="next-page">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<h2 className="text-3xl font-bold tracking-tighter">JOIN THE MOVEMENT</h2>
<div className="flex w-full md:w-auto gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full md:w-64 text-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-zinc-200 transition-colors">SUBSCRIBE</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div>
<h4 className="font-bold mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Collections</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">About</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-cyan-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-fuchsia-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="product-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="closeModal()"></div>

<div className="absolute inset-4 md:inset-12 bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-fade-in">

<button className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="closeModal()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>

<div className="w-full md:w-2/3 relative bg-gradient-to-br from-zinc-900 to-black flex flex-col">

<div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-full blur-[100px]"></div>
<img alt="Detail" className="relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:scale-105 hover:-rotate-6" id="modal-img" src=""/>
</div>

<div className="h-24 border-t border-white/10 bg-black/40 backdrop-blur flex items-center justify-center gap-4 px-6 overflow-x-auto no-scrollbar">
<button className="view-btn w-16 h-16 rounded-lg border border-white/20 bg-white/5 p-1 hover:border-cyan-400 transition-all focus:ring-2 ring-cyan-400" data-view="side" onclick="changeView(0)">
<img className="w-full h-full object-cover rounded" id="thumb-0" src=""/>
</button>
<button className="view-btn w-16 h-16 rounded-lg border border-white/10 bg-white/5 p-1 hover:border-cyan-400 transition-all focus:ring-2 ring-cyan-400" data-view="top" onclick="changeView(1)">
<img className="w-full h-full object-cover rounded" id="thumb-1" src=""/>
</button>
<button className="view-btn w-16 h-16 rounded-lg border border-white/10 bg-white/5 p-1 hover:border-cyan-400 transition-all focus:ring-2 ring-cyan-400" data-view="back" onclick="changeView(2)">
<img className="w-full h-full object-cover rounded" id="thumb-2" src=""/>
</button>
<button className="view-btn w-16 h-16 rounded-lg border border-white/10 bg-white/5 p-1 hover:border-cyan-400 transition-all focus:ring-2 ring-cyan-400" data-view="lifestyle" onclick="changeView(3)">
<img className="w-full h-full object-cover rounded" id="thumb-3" src=""/>
</button>
</div>
</div>

<div className="w-full md:w-1/3 bg-[#0a0a0a] p-8 md:p-12 overflow-y-auto border-l border-white/10 flex flex-col justify-between relative">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest" id="modal-tag">New Arrival</span>
<div className="flex text-amber-400 text-xs">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-none" id="modal-title"></h2>
<p className="text-2xl font-medium text-white mb-6" id="modal-price"></p>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        Engineered with our proprietary <span className="text-white">Flux-Weave™</span> technology. Featuring a carbon-plated midsole for explosive energy return and a holographic upper that shifts color with your speed.
                    </p>

<div className="mb-8">
<div className="flex justify-between mb-3">
<span className="text-xs font-bold uppercase text-zinc-500">Select Size (US)</span>
<span className="text-xs text-cyan-400 cursor-pointer hover:underline">Size Guide</span>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">7</button>
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">8</button>
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">9</button>
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">10</button>
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">11</button>
<button className="size-btn py-3 rounded-lg border border-white/10 hover:border-cyan-500 hover:text-white text-zinc-400 text-sm font-medium transition-all focus:bg-cyan-500 focus:text-black focus:border-cyan-500">12</button>
</div>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<span className="iconify text-white" data-icon="lucide:wind" data-width="18"></span>
<span>Ultra-lightweight (210g)</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<span className="iconify text-white" data-icon="lucide:zap" data-width="18"></span>
<span>85% Energy Return Foam</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<span className="iconify text-white" data-icon="lucide:recycle" data-width="18"></span>
<span>100% Recycled Upper</span>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full bg-white text-black py-4 rounded-xl font-bold tracking-tight text-base hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" onclick="addToCartFromModal()">
                        Add to Cart
                    </button>
<p className="text-[10px] text-center text-zinc-600 mt-4 uppercase tracking-widest">Free Worldwide Shipping</p>
</div>
</div>
</div>
</div>



    </>
  );
}
