import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#FAFAFA',
100: '#F5F5F5',
200: '#E5E5E5',
300: '#D4D4D4',
400: '#A3A3A3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // --- Data ---
        const products = [
            { id: 1, title: "Analog Mechanical Keyboard", price: 199, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800", cat: "Electronics" },
            { id: 2, title: "Lumina Desk Lamp", price: 89, image: "https://images.unsplash.com/photo-1534234828563-025010a39599?auto=format&fit=crop&q=80&w=800", cat: "Lighting" },
            { id: 3, title: "Nomad Leather Folio", price: 120, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", cat: "Accessories" },
            { id: 4, title: "Studio Monitor Stand", price: 150, image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800", cat: "Furniture" },
            { id: 5, title: "Ergo Chair Ultra", price: 599, image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800", cat: "Furniture" },
            { id: 6, title: "Ceramic Coffee Set", price: 45, image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=800", cat: "Accessories" },
            { id: 7, title: "Noise Cancelling Headphones", price: 349, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800", cat: "Audio" },
            { id: 8, title: "Minimalist Wall Clock", price: 75, image: "https://images.unsplash.com/photo-1563861826100-9cb868c06095?auto=format&fit=crop&q=80&w=800", cat: "Furniture" },
            { id: 9, title: "Aluminum Laptop Sleeve", price: 65, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", cat: "Carry" },
            { id: 10, title: "Precision Mouse", price: 95, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800", cat: "Electronics" },
            { id: 11, title: "Felt Desk Mat", price: 35, image: "https://images.unsplash.com/photo-1616628188894-6e6e8e01083b?auto=format&fit=crop&q=80&w=800", cat: "Workspace" },
            { id: 12, title: "Bookshelf Speaker Pair", price: 299, image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800", cat: "Audio" },
        ];

        let cart = [];
        let currentProduct = null;

        // --- Navigation ---
        function navTo(pageId) {
            window.scrollTo(0, 0);
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
                setTimeout(() => {
                   if(p.id !== pageId) p.style.display = 'none'; 
                }, 300); 
            });
            
            const target = document.getElementById(pageId);
            if(target) {
                target.style.display = 'block';
                // Force reflow
                void target.offsetWidth; 
                target.classList.add('active');
            }

            if (pageId === 'cart') renderCart();
        }

        // --- Shop Render ---
        const grid = document.getElementById('product-grid');
        // Update count
        document.getElementById('result-count').innerText = `Showing ${products.length} results`;

        products.forEach(p => {
            const el = document.createElement('div');
            el.className = "group cursor-pointer flex flex-col";
            el.innerHTML = `
                <div class="bg-gray-100 rounded-lg aspect-square overflow-hidden mb-4 relative" onclick="openProduct(${p.id})">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply">
                    <button class="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-sm hover:bg-white" onclick="event.stopPropagation(); addToCart(${p.id})">
                        <iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
                    </button>
                </div>
                <div onclick="openProduct(${p.id})">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">${p.title}</h3>
                        <span class="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">$${p.price}</span>
                    </div>
                    <p class="text-xs text-gray-400">${p.cat}</p>
                </div>
            `;
            grid.appendChild(el);
        });

        // --- Product Detail ---
        function openProduct(id) {
            currentProduct = products.find(p => p.id === id);
            if (!currentProduct) return;

            document.getElementById('detail-img').src = currentProduct.image;
            document.getElementById('detail-title').innerText = currentProduct.title;
            document.getElementById('detail-price').innerText = `$${currentProduct.price}`;
            
            navTo('product');
        }

        function addToCartFromDetail() {
            if (currentProduct) {
                addToCart(currentProduct.id);
                navTo('cart');
            }
        }

        // --- Cart Logic ---
        function addToCart(id) {
            const item = products.find(p => p.id === id);
            cart.push(item);
            updateCartBadge();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            renderCart();
            updateCartBadge();
        }

        function updateCartBadge() {
            const badge = document.getElementById('cart-badge');
            if (cart.length > 0) {
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const empty = document.getElementById('cart-empty');
            const content = document.getElementById('cart-content');
            
            container.innerHTML = '';
            
            if (cart.length === 0) {
                content.classList.add('hidden');
                empty.classList.remove('hidden');
                return;
            }

            content.classList.remove('hidden');
            empty.classList.add('hidden');

            let subtotal = 0;

            cart.forEach((item, index) => {
                subtotal += item.price;
                const row = document.createElement('div');
                row.className = "flex items-center gap-4 py-4 border-b border-gray-100 last:border-0";
                row.innerHTML = `
                    <div class="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-full h-full object-cover mix-blend-multiply">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-medium text-gray-900 text-sm">${item.title}</h4>
                        <p class="text-xs text-gray-500">${item.cat}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-medium text-gray-900 text-sm mb-1">$${item.price}</p>
                        <button onclick="removeFromCart(${index})" class="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 ml-auto">
                            Remove
                        </button>
                    </div>
                `;
                container.appendChild(row);
            });

            document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
            document.getElementById('cart-total').innerText = `$${subtotal.toFixed(2)}`;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tighter text-gray-900 select-none" href="#" onclick="navTo('home')">
                    LUMOS
                </a>
<div className="hidden md:flex items-center gap-6">
<button className="text-gray-500 hover:text-gray-900 transition-colors font-medium" onclick="navTo('shop')">Shop</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors font-medium" onclick="navTo('new-arrivals')">New Arrivals</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors font-medium" onclick="navTo('journal')">Journal</button>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-1.5 gap-2 group focus-within:ring-1 focus-within:ring-gray-300 transition-all">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 w-32 text-xs font-medium" placeholder="Search..." type="text"/>
</div>
<button className="text-gray-500 hover:text-gray-900 transition-colors p-1 relative" onclick="navTo('cart')">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white hidden" id="cart-badge"></span>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-14">

<section className="page active" id="home">

<div className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center opacity-40"></div>
<div className="relative z-10 text-center text-white px-6 max-w-2xl">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm mb-6 bg-white/5">Fall Collection 2024</span>
<h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-6">Objects for the <br/><span className="text-gray-400">Thoughtful.</span></h1>
<p className="text-lg text-gray-300 mb-8 font-light tracking-wide">Meticulously designed workspace essentials for the modern creator.</p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all active:scale-95" onclick="navTo('shop')">Shop Collection</button>
<button className="px-6 py-3 rounded-md font-medium text-white hover:text-gray-200 transition-all flex items-center gap-2" onclick="navTo('journal')">
                            Read Manifesto <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="border-b border-gray-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-medium text-gray-900">Workspace</h3>
<p className="text-xs text-gray-500">Desks, Chairs, Lighting</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-medium text-gray-900">Audio</h3>
<p className="text-xs text-gray-500">Headphones, Speakers</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-medium text-gray-900">Carry</h3>
<p className="text-xs text-gray-500">Backpacks, Organizers</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-medium text-gray-900">Analog</h3>
<p className="text-xs text-gray-500">Notebooks, Pens</p>
</div>
</div>
</div>
</div>
</section>

<section className="page" id="new-arrivals">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col items-center justify-center text-center mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Just Landed</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-4">Latest Additions</h2>
<p className="text-gray-500 max-w-lg mx-auto leading-relaxed">Fresh from our design lab. Discover the newest tools crafted to elevate your daily workflow.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer" onclick="openProduct(5)">
<div className="relative bg-gray-100 rounded-lg aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10 text-gray-900">New</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-sm hover:bg-white" onclick="event.stopPropagation(); addToCart(5)">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Ergo Chair Ultra</h3>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">$599</span>
</div>
<p className="text-xs text-gray-400">Furniture</p>
</div>
</div>

<div className="group cursor-pointer" onclick="openProduct(3)">
<div className="relative bg-gray-100 rounded-lg aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10 text-gray-900">New</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-sm hover:bg-white" onclick="event.stopPropagation(); addToCart(3)">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Nomad Leather Folio</h3>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">$120</span>
</div>
<p className="text-xs text-gray-400">Accessories</p>
</div>
</div>

<div className="group cursor-pointer" onclick="openProduct(8)">
<div className="relative bg-gray-100 rounded-lg aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10 text-gray-900">Restocked</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-sm hover:bg-white" onclick="event.stopPropagation(); addToCart(8)">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Minimalist Wall Clock</h3>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">$75</span>
</div>
<p className="text-xs text-gray-400">Furniture</p>
</div>
</div>

<div className="group cursor-pointer" onclick="openProduct(1)">
<div className="relative bg-gray-100 rounded-lg aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10 text-gray-900">Trending</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-sm hover:bg-white" onclick="event.stopPropagation(); addToCart(1)">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Analog Keyboard</h3>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">$199</span>
</div>
<p className="text-xs text-gray-400">Electronics</p>
</div>
</div>
</div>
<div className="mt-20 border-t border-gray-100 pt-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover opacity-10 mix-blend-overlay"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium tracking-tight mb-4">The Fall 2024 Lookbook</h3>
<p className="text-gray-400 mb-8 max-w-md">Explore how we integrate natural textures with industrial precision in our latest collection.</p>
<button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-xs">View Lookbook</button>
</div>
<div className="relative z-10 hidden md:block">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur rounded-lg h-32 w-full"></div>
<div className="bg-white/5 backdrop-blur rounded-lg h-32 w-full translate-y-8"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page" id="journal">
<div className="max-w-7xl mx-auto px-6 py-12">
<h2 className="text-4xl font-semibold tracking-tighter text-gray-900 mb-2">The Journal</h2>
<p className="text-gray-500 mb-12">Stories on design, process, and the workspace.</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center group cursor-pointer border-b border-gray-100 pb-20">
<div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden order-last lg:order-first">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-900">Featured</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-xs text-gray-500 font-medium">October 12, 2024</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 group-hover:text-gray-600 transition-colors tracking-tight leading-tight">The Philosophy of Subtracting: Why Less is More in Workspace Design</h3>
<p className="text-gray-500 leading-relaxed mb-8 text-base">We explore the cognitive benefits of a minimal environment and how removing clutter can amplify creativity. An interview with lead designer Sarah Chen.</p>
<span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline underline-offset-4 group-hover:text-gray-600">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden mb-5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-medium text-gray-400 mb-2 block">Process • Sep 28, 2024</span>
<h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors tracking-tight">Materiality in the Digital Age</h4>
<p className="text-sm text-gray-500 leading-relaxed">Why tactile feedback matters more than ever when we spend our days behind screens.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden mb-5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-medium text-gray-400 mb-2 block">Guide • Sep 15, 2024</span>
<h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors tracking-tight">Optimizing Light Temperature</h4>
<p className="text-sm text-gray-500 leading-relaxed">A comprehensive guide to Kelvin scales and setting the mood for deep work.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden mb-5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-medium text-gray-400 mb-2 block">Studio • Aug 30, 2024</span>
<h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors tracking-tight">Visit our NYC Showroom</h4>
<p className="text-sm text-gray-500 leading-relaxed">We've opened a new space in SoHo tailored for experiencing our products.</p>
</div>
</div>
</div>
</section>

<section className="page" id="shop">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="font-medium text-gray-900 mb-4 tracking-tight">Categories</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">All Products</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">Electronics</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">Furniture</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">Accessories</span>
</label>
</div>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-4 tracking-tight">Price Range</h3>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" max="1000" min="0" type="range"/>
<div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
<span>$0</span>
<span>$1000+</span>
</div>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-4 tracking-tight">Status</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">In Stock</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-black focus:ring-0 transition-all" type="checkbox"/>
<span className="text-gray-500 group-hover:text-gray-900 transition-colors">New Arrival</span>
</label>
</div>
</div>
</aside>

<div className="flex-grow">

<div className="flex items-center justify-between mb-8">
<span className="text-gray-500 text-xs font-medium" id="result-count">Showing results</span>
<div className="flex items-center gap-2 text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-900">
<span>Sort by: Featured</span>
<iconify-icon icon="solar:sort-vertical-linear" width="16"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" id="product-grid">

</div>
</div>
</div>
</div>
</section>

<section className="page" id="product">
<div className="max-w-7xl mx-auto px-6 py-12">
<button className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-xs font-medium" onclick="navTo('shop')">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to Shop
                </button>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="bg-gray-100 rounded-xl aspect-square md:aspect-[4/5] overflow-hidden relative group">
<img className="w-full h-full object-cover mix-blend-multiply" id="detail-img" src=""/>
</div>

<div className="flex flex-col justify-center">
<div className="mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2" id="detail-title"></h2>
<p className="text-xl text-gray-500 font-normal" id="detail-price"></p>
</div>
<div className="prose prose-sm text-gray-500 mb-8 leading-relaxed">
<p>Engineered for the demanding creative. This product features premium materials, meticulously crafted to ensure longevity and timeless aesthetic appeal. Integrates seamlessly into your workflow.</p>
<ul className="list-disc pl-4 mt-4 space-y-1">
<li>Matte finish coating</li>
<li>Ergonomic design structure</li>
<li>Sustainable packaging</li>
</ul>
</div>
<div className="space-y-6">

<div>
<label className="block text-xs font-medium text-gray-900 mb-2">Color</label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-gray-900"></button>
<button className="w-8 h-8 rounded-full bg-gray-200 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"></button>
<button className="w-8 h-8 rounded-full bg-stone-400 hover:ring-2 hover:ring-offset-2 hover:ring-stone-400 transition-all"></button>
</div>
</div>

<div className="flex gap-4 pt-4 border-t border-gray-200">
<button className="flex-grow bg-gray-900 text-white h-12 rounded-lg font-medium hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-[0.98]" onclick="addToCartFromDetail()">
<span>Add to Cart</span>
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</button>
<button className="h-12 w-12 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-gray-400 flex items-center gap-2">
<iconify-icon icon="solar:box-linear"></iconify-icon> Free shipping on orders over $200
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="page" id="cart">
<div className="max-w-3xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Shopping Cart</h2>
<div className="text-center py-20 hidden" id="cart-empty">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
<iconify-icon className="text-gray-400" icon="solar:bag-linear" width="32"></iconify-icon>
</div>
<p className="text-gray-500 mb-6">Your cart is currently empty.</p>
<button className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600" onclick="navTo('shop')">Continue Shopping</button>
</div>
<div id="cart-content">
<div className="space-y-6" id="cart-items-container">

</div>
<div className="mt-10 border-t border-gray-200 pt-8">
<div className="flex justify-between items-center mb-2">
<span className="text-gray-500">Subtotal</span>
<span className="font-medium text-gray-900" id="cart-subtotal">$0.00</span>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-gray-500">Shipping</span>
<span className="text-gray-500 text-xs">Calculated at next step</span>
</div>
<div className="flex justify-between items-center mb-8 text-lg font-semibold">
<span>Total</span>
<span id="cart-total">$0.00</span>
</div>
<button className="w-full bg-gray-900 text-white h-12 rounded-lg font-medium hover:bg-black transition-all shadow-lg shadow-gray-200 active:scale-[0.99]">
                            Checkout
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<span className="text-base font-semibold tracking-tighter text-gray-900 block mb-4">LUMOS</span>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                    Crafting the future of workspaces with minimal, functional design for the discerning creator.
                </p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#" onclick="navTo('new-arrivals')">New Arrivals</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Support</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs w-full focus:outline-none focus:border-gray-400 transition-colors" placeholder="email@domain.com" type="email"/>
<button className="bg-gray-900 text-white px-3 rounded hover:bg-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
<p>© 2024 Lumos Design Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
