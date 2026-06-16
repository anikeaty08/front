import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA MODEL ---
        // Generate a larger dataset for scrolling
        const products = Array.from({ length: 48 }, (_, i) => {
            const types = ['Custom Box', 'Label Sticker', 'Paper Bag', 'Rigid Box'];
            const type = types[i % 4];
            const priceBase = [2, 0.5, 1.5, 5]; // Base price per unit
            // Alternate images for visual variety
            const imgIndex = i % 4;
            const images = [
                'https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=600'
            ];
            
            return {
                id: i + 1,
                name: `${type} - Series ${String.fromCharCode(65 + (i % 5))}${i+1}`,
                category: type,
                desc: "Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.",
                pricePerUnit: priceBase[i % 4],
                image: images[imgIndex]
            };
        });

        let cart = [];
        let currentProduct = null;
        let currentQty = 100;

        // --- RENDER FUNCTION ---
        function renderProducts(filter = 'all') {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';

            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);

            filtered.forEach(p => {
                const card = document.createElement('div');
                card.className = "group cursor-pointer animate-[fadeInUp_0.3s_ease-out]";
                card.onclick = () => openModal(p.id);
                card.innerHTML = `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
                        <img src="${p.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${p.name}">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                        <button class="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
                        </button>
                    </div>
                    <div>
                        <h3 class="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">${p.name}</h3>
                        <p class="text-xs text-slate-500 mb-1 line-clamp-1">${p.desc}</p>
                        <p class="text-sm font-semibold text-[#1A1A1A]">From $${p.pricePerUnit * 100} / 100pcs</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // --- HERO GRID ---
        function renderHeroGrid() {
            const grid = document.getElementById('hero-grid');
            // Take 4 random products
            const featured = products.slice(0, 4);
            grid.innerHTML = featured.map(p => `
                 <div class="group cursor-pointer" onclick="openModal(${p.id})">
                    <div class="aspect-square rounded-xl overflow-hidden mb-2 relative">
                         <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                         <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <p class="text-xs font-medium text-slate-700 truncate group-hover:text-[#FF7802]">${p.name}</p>
                 </div>
            `).join('');
        }

        function filterProducts() {
            const val = document.getElementById('category-filter').value;
            renderProducts(val);
        }

        // --- MODAL & CART LOGIC ---
        function openModal(id) {
            currentProduct = products.find(p => p.id === id);
            if(!currentProduct) return;

            currentQty = 100;
            document.getElementById('modal-qty').innerText = currentQty;
            
            // Reset radio buttons
            const sizeRadios = document.querySelectorAll('input[name="size"]');
            if(sizeRadios.length) sizeRadios[0].checked = true;
            const matRadios = document.querySelectorAll('input[name="material"]');
            if(matRadios.length) matRadios[0].checked = true;

            document.getElementById('modal-img').src = currentProduct.image;
            document.getElementById('modal-title').innerText = currentProduct.name;
            document.getElementById('modal-desc').innerText = currentProduct.desc;
            document.getElementById('modal-price').innerText = `Base Price: $${currentProduct.pricePerUnit} per unit`;

            document.getElementById('product-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('product-modal').classList.add('hidden');
        }

        function updateQty(amount) {
            const newQty = currentQty + amount;
            if(newQty >= 100) {
                currentQty = newQty;
                document.getElementById('modal-qty').innerText = currentQty;
            }
        }

        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const backdrop = document.getElementById('cart-backdrop');
            const panel = document.getElementById('cart-panel');

            if(drawer.classList.contains('hidden')) {
                drawer.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('translate-x-full');
                }, 10);
            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    drawer.classList.add('hidden');
                }, 300);
            }
        }

        function addToCart() {
            if(!currentProduct) return;
            
            const size = document.querySelector('input[name="size"]:checked').value;
            const material = document.querySelector('input[name="material"]:checked').value;
            const totalPrice = (currentProduct.pricePerUnit * currentQty).toFixed(2);

            cart.push({
                ...currentProduct,
                cartId: Date.now(),
                selectedSize: size,
                selectedMaterial: material,
                qty: currentQty,
                totalPrice: parseFloat(totalPrice)
            });

            updateCartUI();
            closeModal();
            toggleCart();
        }

        function removeFromCart(cartId) {
            cart = cart.filter(item => item.cartId !== cartId);
            updateCartUI();
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const emptyState = document.getElementById('empty-cart-state');
            const badge = document.getElementById('cart-badge');
            const totalDisplay = document.getElementById('cart-total');

            badge.innerText = cart.length;
            badge.classList.toggle('scale-0', cart.length === 0);

            const grandTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
            totalDisplay.innerText = `$${grandTotal.toFixed(2)}`;

            if(cart.length === 0) {
                container.innerHTML = '';
                container.appendChild(emptyState);
                emptyState.style.display = 'flex';
            } else {
                emptyState.style.display = 'none';
                container.innerHTML = cart.map(item => `
                    <div class="flex gap-4 animate-[fadeInUp_0.3s_ease-out]">
                        <div class="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                            <img src="${item.image}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-start">
                                <h4 class="font-medium text-sm text-[#1A1A1A] line-clamp-1">${item.name}</h4>
                                <button onclick="removeFromCart(${item.cartId})" class="text-slate-300 hover:text-red-500 transition-colors">
                                    <iconify-icon icon="solar:trash-bin-linear"></iconify-icon>
                                </button>
                            </div>
                            <p class="text-xs text-slate-500 mt-0.5">${item.selectedSize} • ${item.selectedMaterial}</p>
                            <div class="flex justify-between items-center mt-2">
                                <div class="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Qty: ${item.qty}</div>
                                <span class="font-semibold text-sm text-[#1A1A1A]">$${item.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        function checkoutViaMessenger() {
            if(cart.length === 0) return alert("Your cart is empty.");
            let message = "Hello FrameFlex BD! I would like to order:\n\n";
            let total = 0;
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name}\n   Size: ${item.selectedSize}, Material: ${item.selectedMaterial}\n   Qty: ${item.qty} pcs - Price: $${item.totalPrice}\n\n`;
                total += item.totalPrice;
            });
            message += `Total Order Value: $${total.toFixed(2)}\nConfirm availability?`;
            window.open(`https://m.me/frameflexbd?text=${encodeURIComponent(message)}`, '_blank');
        }

        // --- SCROLL SPY (Highlight Nav) ---
        function initScrollSpy() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if(link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, { threshold: 0.2 }); // Trigger when 20% of section is visible

            sections.forEach(section => observer.observe(section));
        }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderHeroGrid();
            renderProducts();
            initScrollSpy();
        });

        // Navbar Scroll Styling
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) {
                nav.classList.add('shadow-md', 'bg-white/95');
                nav.classList.remove('bg-white/80', 'border-white/10');
                nav.classList.add('border-slate-100');
            } else {
                nav.classList.remove('shadow-md', 'bg-white/95', 'border-slate-100');
                nav.classList.add('bg-white/80', 'border-white/10');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 backdrop-blur-xl border-b transition-all duration-300 bg-white/80 border-white/10" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#home">
<div className="w-8 h-8 bg-gradient-to-br from-[#FF7802] to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-[#1A1A1A] tracking-tight font-poppins" style={{}}>FrameFlex BD</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="nav-link hover:text-[#1A1A1A] transition-colors font-poppins active" href="#home" style={{}}>Home</a>
<a className="nav-link hover:text-[#1A1A1A] transition-colors font-poppins" href="#products" style={{}}>Products</a>
<a className="nav-link hover:text-[#1A1A1A] transition-colors font-poppins" href="#services" style={{}}>Services</a>
<a className="nav-link hover:text-[#1A1A1A] transition-colors font-poppins" href="#about" style={{}}>About</a>
<a className="nav-link hover:text-[#1A1A1A] transition-colors font-poppins" href="#contact" style={{}}>Contact</a>
</div>

<button className="relative p-2.5 bg-slate-50 hover:bg-orange-50 rounded-full transition-all group border border-slate-100" onclick="toggleCart()">
<iconify-icon className="text-slate-600 group-hover:text-[#FF7802] transition-colors" icon="solar:cart-large-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#FF7802] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md scale-0 transition-transform duration-300 font-poppins" id="cart-badge" style={{}}>0</span>
</button>
</div>
</nav>

<main className="min-h-screen relative overflow-hidden">

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
</div>

<section className="min-h-screen flex flex-col text-center pt-32 pr-6 pb-20 pl-6 relative items-center justify-center" id="home">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-[#FF7802] text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm font-poppins" style={{}}>
<span className="w-2 h-2 rounded-full bg-[#FF7802] animate-pulse"></span>
                Now Shipping Worldwide
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1A1A1A] mb-6 max-w-4xl leading-[1.1] font-poppins" style={{}}>
                Complete Printing &amp; <br className="hidden md:block"/>
<span className="text-slate-400 font-poppins" style={{}}>Packaging Solutions.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mb-10 font-light leading-relaxed font-poppins" style={{}}>
                Custom boxes, labels, stickers &amp; packaging designed for your brand. <br className="hidden md:block"/> Fast, affordable, and professional manufacturing at scale.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
<a className="px-8 py-4 bg-[#FF7802] hover:bg-[#e66a00] text-white rounded-2xl font-medium transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 text-center font-poppins" href="#products" style={{}}>
                    Browse Catalog
                </a>
<a className="px-8 py-4 bg-white border border-slate-200 text-[#1A1A1A] hover:border-[#FF7802] hover:text-[#FF7802] rounded-2xl font-medium transition-all flex items-center justify-center gap-2 font-poppins" href="https://m.me/frameflexbd" style={{}} target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                    Messenger
                </a>
</div>

<div className="mt-20 w-full max-w-6xl mx-auto">
<div className="text-left mb-6">
<span className="text-sm font-semibold text-slate-900 font-poppins" style={{}}>Trending Now</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="hero-grid">
<div className="group cursor-pointer" onclick="openModal(1)">
<div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#FF7802]">Custom Box - Series A1</p>
</div>
<div className="group cursor-pointer" onclick="openModal(2)">
<div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#FF7802]">Label Sticker - Series B2</p>
</div>
<div className="group cursor-pointer" onclick="openModal(3)">
<div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#FF7802]">Paper Bag - Series C3</p>
</div>
<div className="group cursor-pointer" onclick="openModal(4)">
<div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#FF7802]">Rigid Box - Series D4</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/50 backdrop-blur-sm border-t border-slate-100" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] font-poppins" style={{}}>Product Catalog</h2>
<p className="text-slate-500 mt-2 font-light font-poppins" style={{}}>Explore our extensive range of custom packaging solutions.</p>
</div>
<div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium pl-3 font-poppins" style={{}}>Filter:</span>
<select className="bg-slate-50 border-0 text-slate-700 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-0 cursor-pointer hover:bg-slate-100 transition-colors" id="category-filter" onchange="filterProducts()">
<option className="font-poppins" style={{}} value="all">All Categories</option>
<option className="font-poppins" style={{}} value="Custom Box">Boxes</option>
<option className="font-poppins" style={{}} value="Label Sticker">Stickers</option>
<option className="font-poppins" style={{}} value="Paper Bag">Bags</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10" id="products-grid"><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series A1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series A1</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series B2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series B2</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series C3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series C3</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series D4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series D4</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series E5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series E5</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series A6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series A6</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series B7" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series B7</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series C8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series C8</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series D9" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series D9</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series E10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series E10</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series A11" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series A11</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series B12" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series B12</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series C13" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series C13</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series D14" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series D14</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series E15" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series E15</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series A16" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series A16</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series B17" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series B17</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series C18" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series C18</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series D19" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series D19</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series E20" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series E20</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series A21" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series A21</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series B22" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series B22</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series C23" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series C23</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series D24" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series D24</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series E25" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series E25</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series A26" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series A26</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series B27" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series B27</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series C28" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series C28</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series D29" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series D29</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series E30" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series E30</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series A31" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series A31</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series B32" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series B32</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series C33" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series C33</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series D34" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series D34</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series E35" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series E35</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series A36" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series A36</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series B37" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series B37</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series C38" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series C38</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series D39" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series D39</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series E40" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series E40</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series A41" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series A41</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series B42" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series B42</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series C43" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series C43</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series D44" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series D44</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Custom Box - Series E45" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166325683-162981a84cd8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Custom Box - Series E45</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $200 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Label Sticker - Series A46" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532152737604-0c2d30800755?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Label Sticker - Series A46</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $50 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Paper Bag - Series B47" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Paper Bag - Series B47</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $150 / 100pcs</p>
</div>
</div><div className="group cursor-pointer animate-[fadeInUp_0.3s_ease-out]">
<div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative aspect-[4/5] mb-4">
<img alt="Rigid Box - Series C48" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<h3 className="font-medium text-[#1A1A1A] group-hover:text-[#FF7802] transition-colors">Rigid Box - Series C48</h3>
<p className="text-xs text-slate-500 mb-1 line-clamp-1">Premium grade material tailored for brand visibility. Durable, eco-friendly, and fully customizable.</p>
<p className="text-sm font-semibold text-[#1A1A1A]">From $500 / 100pcs</p>
</div>
</div></div>
<div className="mt-16 text-center">
<button className="px-8 py-3 border border-slate-200 hover:border-[#FF7802] hover:text-[#FF7802] rounded-xl text-sm font-medium transition-all text-slate-600 bg-white font-poppins" id="load-more-btn" style={{}}>
                        Load More Products
                    </button>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-12 text-center font-poppins" style={{}}>Our Services</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#FF7802]/30 transition-all group">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF7802] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:printer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins" style={{}}>Premium Printing</h3>
<p className="text-sm text-slate-500 leading-relaxed font-poppins" style={{}}>High-resolution offset and digital printing for marketing materials and collateral.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#FF7802]/30 transition-all group">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF7802] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins" style={{}}>Custom Packaging</h3>
<p className="text-sm text-slate-500 leading-relaxed font-poppins" style={{}}>Bespoke box structures tailored to fit your products perfectly with custom finishes.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#FF7802]/30 transition-all group">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF7802] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins" style={{}}>Design Studio</h3>
<p className="text-sm text-slate-500 leading-relaxed font-poppins" style={{}}>Our in-house design team creates die-lines and artwork to bring your vision to life.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#FF7802]/30 transition-all group">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF7802] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins" style={{}}>Bulk Orders</h3>
<p className="text-sm text-slate-500 leading-relaxed font-poppins" style={{}}>Scalable manufacturing solutions for enterprise clients with volume discounts.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<h6 className="text-[#FF7802] font-semibold tracking-wide uppercase text-xs mb-4 font-poppins" style={{}}>Our Story</h6>
<h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 tracking-tight font-poppins" style={{}}>Crafting the first impression of your brand.</h1>
<p className="text-slate-500 leading-loose mb-6 font-poppins" style={{}}>
                            FrameFlex BD was established with a singular mission: to democratize high-quality packaging for businesses of all sizes. We believe that unboxing is an experience, not just a process.
                        </p>
<p className="text-slate-500 leading-loose font-poppins" style={{}}>
                            From humble beginnings in a small workshop to a full-scale manufacturing facility, we combine traditional craftsmanship with modern technology to deliver boxes, stickers, and labels that speak volumes.
                        </p>
</div>
<div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Printing Press" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
<div className="text-white">
<p className="font-medium text-lg font-poppins" style={{}}>Dhaka, Bangladesh</p>
<p className="text-white/70 text-sm font-poppins" style={{}}>Established 2018</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-4 font-poppins" style={{}}>Get in Touch</h1>
<p className="text-slate-500 mb-8 font-poppins" style={{}}>Visit our factory or chat with us online for instant quotes.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#FF7802]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#1A1A1A] font-poppins" style={{}}>Headquarters</h4>
<p className="text-sm text-slate-500 mt-1 font-poppins" style={{}}>123 Industrial Area, TejgaonDhaka 1208, Bangladesh</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#FF7802]">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#1A1A1A] font-poppins" style={{}}>Phone</h4>
<p className="text-sm text-slate-500 mt-1 font-poppins" style={{}}>+880 1700 000000</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[#FF7802]">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#1A1A1A] font-poppins" style={{}}>Email</h4>
<p className="text-sm text-slate-500 mt-1 font-poppins" style={{}}>hello@frameflexbd.com</p>
</div>
</div>
</div>
<a className="mt-10 inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#0084FF] text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:bg-[#0074E0] transition-all gap-2 group font-poppins" href="https://m.me/frameflexbd" style={{}} target="_blank">
<iconify-icon className="group-hover:animate-pulse" icon="solar:chat-round-dots-linear" width="22"></iconify-icon>
                        Chat on Messenger
                    </a>
</div>

<div className="bg-slate-200 rounded-3xl overflow-hidden h-80 md:h-auto min-h-[350px] relative shadow-inner">
<iframe allowfullscreen="" className="grayscale contrast-[0.9] opacity-80 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430139!2d90.39108031536267!3d23.75085809467642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3f983d%3A0x20c709880452546c!2sTejgaon%20Industrial%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625562234567!5m2!1sen!2sbd" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-[#FF7802] rounded-md flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="font-bold text-[#1A1A1A] font-poppins" style={{}}>FrameFlex BD</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed font-poppins" style={{}}>Premium printing and packaging solutions designed to elevate your brand identity.</p>
</div>
<div>
<h4 className="font-semibold text-sm text-[#1A1A1A] mb-4 font-poppins" style={{}}>Quick Links</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#FF7802] font-poppins" href="#products" style={{}}>Products</a></li>
<li><a className="hover:text-[#FF7802] font-poppins" href="#services" style={{}}>Services</a></li>
<li><a className="hover:text-[#FF7802] font-poppins" href="#about" style={{}}>About Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-[#1A1A1A] mb-4 font-poppins" style={{}}>Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#FF7802] font-poppins" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-[#FF7802] font-poppins" href="#" style={{}}>Terms of Service</a></li>
<li><a className="hover:text-[#FF7802] font-poppins" href="#" style={{}}>Return Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-[#1A1A1A] mb-4 font-poppins" style={{}}>Connect</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7802] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7802] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7802] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:linkedin-linear"></iconify-icon>
</a>
</div>
<a className="mt-4 inline-block text-xs font-medium text-[#FF7802] hover:underline font-poppins" href="https://m.me/frameflexbd" style={{}} target="_blank">Quick Order via Messenger</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-slate-50 pt-8 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-wider">
<span className="font-poppins" style={{}}>© 2023 FrameFlex BD.</span>
<span className="font-poppins" style={{}}>Designed with Precision</span>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="product-modal">

<div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] animate-[fadeInUp_0.3s_ease-out]">
<button className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-50 relative">
<img alt="Product" className="w-full h-full object-cover" id="modal-img" src=""/>
</div>

<div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
<div className="mb-auto">
<span className="text-[#FF7802] text-xs font-bold uppercase tracking-wider mb-2 block font-poppins" style={{}}>Custom Order</span>
<h2 className="text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-2 font-poppins" id="modal-title" style={{}}>Product Name</h2>
<p className="text-xl text-slate-900 font-medium mb-4 font-poppins" id="modal-price" style={{}}>Start From 100</p>
<p className="text-slate-500 text-sm leading-relaxed font-light mb-8 font-poppins" id="modal-desc" style={{}}>Description...</p>

<div className="space-y-6">

<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 font-poppins" style={{}}>Size Selection</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input checked="" className="config-radio hidden" name="size" type="radio" value="Small"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Small</div>
</label>
<label className="cursor-pointer group">
<input className="config-radio hidden" name="size" type="radio" value="Medium"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Medium</div>
</label>
<label className="cursor-pointer group">
<input className="config-radio hidden" name="size" type="radio" value="Large"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Large</div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 font-poppins" style={{}}>Material Finish</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input checked="" className="config-radio hidden" name="material" type="radio" value="Kraft"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Kraft</div>
</label>
<label className="cursor-pointer group">
<input className="config-radio hidden" name="material" type="radio" value="Matte"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Matte</div>
</label>
<label className="cursor-pointer group">
<input className="config-radio hidden" name="material" type="radio" value="Glossy"/>
<div className="border border-slate-200 rounded-xl py-3 text-center text-sm text-slate-500 font-medium transition-all group-hover:border-slate-300 font-poppins" style={{}}>Glossy</div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 font-poppins" style={{}}>Quantity (Min 100)</label>
<div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2 w-max border border-slate-200">
<button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-[#FF7802] transition-colors" onclick="updateQty(-50)"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="w-16 text-center font-semibold text-[#1A1A1A] font-poppins" id="modal-qty" style={{}}>100</span>
<button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-[#FF7802] transition-colors" onclick="updateQty(50)"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
<button className="w-full bg-[#1A1A1A] hover:bg-[#FF7802] text-white font-medium py-4 rounded-xl mt-8 transition-all flex justify-center items-center gap-2 shadow-xl" onclick="addToCart()">
<span className="font-poppins" style={{}}>Add to Cart</span>
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden pointer-events-none" id="cart-drawer">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-auto" id="cart-backdrop" onclick="toggleCart()"></div>
<div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-out pointer-events-auto flex flex-col" id="cart-panel">

<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-[#1A1A1A] font-poppins" style={{}}>Your Quote Cart</h2>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items-container">

<div className="h-full flex flex-col items-center justify-center text-center opacity-50" id="empty-cart-state">
<iconify-icon className="mb-4 text-slate-300" icon="solar:bag-linear" width="64"></iconify-icon>
<p className="text-slate-500 font-poppins" style={{}}>Your cart is currently empty.</p>
</div>
</div>

<div className="p-6 bg-slate-50 border-t border-slate-100">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-slate-500 font-poppins" style={{}}>Estimated Total</span>
<span className="text-2xl font-bold text-[#1A1A1A] font-poppins" id="cart-total" style={{}}>$0</span>
</div>
<button className="w-full bg-[#0084FF] hover:bg-[#0074E0] text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30 flex justify-center items-center gap-3 font-poppins" onclick="checkoutViaMessenger()" style={{}}>
<iconify-icon icon="solar:chat-round-check-linear" width="24"></iconify-icon>
                    Place Order via Messenger
                </button>
<p className="text-[10px] text-center text-slate-400 mt-3 font-poppins" style={{}}>You will be redirected to Messenger to confirm details.</p>
</div>
</div>
</div>

<style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translate(-50%, -45%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    </style>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
