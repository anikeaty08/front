import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
900: '#0B1121', // Dark background from image
800: '#162032', // Lighter navy for cards
},
gold: {
400: '#D4AF37', // Gold text
500: '#C5A02F', // Gold accent
600: '#B08D26', // Darker gold
dim: 'rgba(212, 175, 55, 0.1)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
arabic: ['Tajawal', 'sans-serif'],
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Cart State
        let cart = [];
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        const body = document.body;

        // Toggle Cart Drawer
        function toggleCart() {
            body.classList.toggle('cart-open');
            renderCart();
        }

        // Add to Cart Function
        function addToCart(id, name, price) {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            
            // Show badge
            updateBadge();
            
            // Open cart to show feedback
            if (!body.classList.contains('cart-open')) {
                toggleCart();
            } else {
                renderCart();
            }
        }

        // Remove from Cart
        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            renderCart();
            updateBadge();
        }

        // Update Cart Badge
        function updateBadge() {
            const badge = document.getElementById('cart-badge');
            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            
            if (totalItems > 0) {
                badge.innerText = totalItems;
                badge.classList.remove('opacity-0');
            } else {
                badge.classList.add('opacity-0');
            }
        }

        // Render Cart Items
        function renderCart() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const emptyMsg = document.getElementById('empty-cart-msg');
            
            container.innerHTML = '';
            
            if (cart.length === 0) {
                container.appendChild(emptyMsg);
                emptyMsg.style.display = 'flex';
                totalEl.innerText = 'LYD 0.00';
                return;
            } else {
                emptyMsg.style.display = 'none';
            }

            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const el = document.createElement('div');
                el.className = 'flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5';
                el.innerHTML = `
                    <div class="w-16 h-16 bg-navy-900 rounded border border-white/10 flex items-center justify-center text-slate-600">
                        <i data-lucide="watch" class="w-8 h-8"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-white text-sm font-medium leading-tight mb-1">${item.name}</h4>
                        <p class="text-gold-400 text-xs mb-2">LYD ${item.price.toLocaleString()}</p>
                        <div class="flex items-center gap-3">
                            <span class="text-xs text-slate-500">Qty: ${item.quantity}</span>
                            <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-400 hover:text-red-300 underline">Remove</button>
                        </div>
                    </div>
                `;
                container.appendChild(el);
            });

            totalEl.innerText = 'LYD ' + total.toLocaleString();
            lucide.createIcons(); // Refresh icons in dynamic content
        }

        // Checkout via WhatsApp
        function checkoutWhatsApp() {
            if (cart.length === 0) return;

            const phoneNumber = "218910000000"; // REPLACE WITH YOUR PHONE NUMBER
            let message = "Hello Mohy Watches, I would like to order:%0A%0A";
            let total = 0;

            cart.forEach(item => {
                message += `- ${item.name} (x${item.quantity}): LYD ${item.price * item.quantity}%0A`;
                total += item.price * item.quantity;
            });

            message += `%0A*Total: LYD ${total}*`;
            message += "%0A%0APlease confirm availability and delivery.";

            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full border border-gold-400/30 bg-navy-800 flex items-center justify-center text-gold-400 relative overflow-hidden">
<img alt="Mohy Watches Icon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<svg className="lucide lucide-watch w-5 h-5" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v2.2l1.6 1"></path><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></svg>
</div>
<div className="flex flex-col">
<span className="uppercase leading-none text-sm font-semibold text-[#d9b74a] tracking-tight mb-1">HEMMY WATCHES</span>
<span className="text-gold-400 leading-none text-xs font-bold tracking-wide font-arabic">حمي للساعات</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium hover:text-gold-400 transition-colors" href="#collection">Collection</a>
<a className="text-sm font-medium hover:text-gold-400 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-gold-400 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-5">
<button className="relative text-slate-400 hover:text-gold-400 transition-colors group" onclick="toggleCart()">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-500 text-navy-900 text-[10px] font-bold rounded-full flex items-center justify-center opacity-0 transition-opacity" id="cart-badge">0</span>
</button>
<button className="md:hidden text-slate-400 hover:text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-black/60 z-[60] cart-overlay backdrop-blur-sm" id="cart-overlay" onclick="toggleCart()"></div>
<div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-navy-900 z-[70] cart-drawer border-l border-gold-400/20 shadow-2xl flex flex-col" id="cart-drawer">
<div className="p-6 border-b border-white/5 flex items-center justify-between bg-navy-800/50">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<svg className="lucide lucide-shopping-cart w-5 h-5 text-gold-400" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> Shopping Bag
            </h2>
<button className="text-slate-500 hover:text-white transition-colors" onclick="toggleCart()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items">

<div className="h-full flex flex-col items-center justify-center text-center opacity-60" id="empty-cart-msg">
<svg className="lucide lucide-shopping-bag w-12 h-12 mb-4 text-slate-600" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<p className="text-sm">Your bag is empty.</p>
</div>
</div>

<div className="p-6 border-t border-white/5 bg-navy-800/30">
<div className="flex justify-between items-center mb-4">
<span className="text-slate-400 text-sm">Total</span>
<span className="text-xl font-semibold text-gold-400" id="cart-total">LYD 0.00</span>
</div>
<button className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]" onclick="checkoutWhatsApp()">
<span>Complete Order via WhatsApp</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-center text-[10px] text-slate-600 mt-3">Orders are processed manually via WhatsApp.</p>
</div>
</div>

<section className="md:pt-52 md:pb-40 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="text-center md:text-left md:max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/20 bg-gold-500/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-[11px] font-bold text-gold-400 tracking-wider uppercase font-arabic">مقرها في ليبيا • أصالة 100٪</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                        Timeless luxury, <br/>
<span className="gold-gradient-text">crafted for you.</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed font-light">
                        Discover the exclusive collection at <span className="text-white font-medium">Mohy Watches</span>. 
                        Where Arabic heritage meets Swiss precision.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy-900 text-sm font-semibold rounded hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#collection">
                            Explore Collection
                        </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-gold-400/50 hover:bg-gold-500/10 text-white text-sm font-medium rounded transition-all flex items-center justify-center gap-2" href="https://wa.me/218910000000">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            Contact Us
                        </a>
</div>
</div>

<div className="relative w-full max-w-sm md:max-w-md aspect-square">
<div className="absolute inset-0 border border-gold-400/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-6xl font-arabic text-gold-400/20 font-bold mb-2">محي</div>
<div className="text-xs tracking-[0.3em] text-gold-400/40 uppercase">Watches</div>
</div>
</div>

<img alt="Luxury Watch" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-800/30 border-y border-white/5" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Curated Collection</h2>
<p className="text-slate-500 text-sm">Select a timepiece to add to your order.</p>
</div>

<div className="flex gap-2 p-1 bg-navy-900 rounded-lg border border-white/5">
<button className="px-4 py-1.5 bg-gold-500 text-navy-900 text-xs font-bold rounded shadow-lg">All</button>
<button className="px-4 py-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors">Rolex</button>
<button className="px-4 py-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors">Omega</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


<div className="group relative bg-navy-900 rounded-xl border border-white/5 hover:border-gold-400/30 transition-all duration-300 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden bg-navy-800 relative">
<img alt="Classic Chronograph" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80"></div>
<span className="absolute top-4 right-4 px-2 py-1 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase rounded">In Stock</span>
</div>
<div className="p-6 relative">
<div className="mb-4">
<h3 className="text-lg font-medium text-white mb-1">Classic Chronograph</h3>
<p className="text-xs text-slate-500">Ref. 126334 • 41mm • Steel</p>
</div>
<div className="flex items-center justify-between">
<span className="text-gold-400 font-medium font-mono">LYD 1,250</span>
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 flex items-center justify-center transition-all active:scale-95" onclick="addToCart('1', 'Classic Chronograph', 1250)">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>


<div className="group relative bg-navy-900 rounded-xl border border-white/5 hover:border-gold-400/30 transition-all duration-300 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden bg-navy-800 relative">
<img alt="Royal Oak Style" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-6 relative">
<div className="mb-4">
<h3 className="text-lg font-medium text-white mb-1">Royal Oak Style</h3>
<p className="text-xs text-slate-500">Automatic • 39mm • Rose Gold</p>
</div>
<div className="flex items-center justify-between">
<span className="text-gold-400 font-medium font-mono">LYD 2,400</span>
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 flex items-center justify-center transition-all active:scale-95" onclick="addToCart('2', 'Royal Oak Style', 2400)">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative bg-navy-900 rounded-xl border border-white/5 hover:border-gold-400/30 transition-all duration-300 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden bg-navy-800 relative">
<img alt="Black Bay Diver" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80"></div>
<span className="absolute top-4 left-4 px-2 py-1 bg-white/10 backdrop-blur text-[10px] font-medium text-white uppercase border border-white/10 rounded">Best Seller</span>
</div>
<div className="p-6 relative">
<div className="mb-4">
<h3 className="text-lg font-medium text-white mb-1">Black Bay Diver</h3>
<p className="text-xs text-slate-500">200m • 42mm • Fabric Strap</p>
</div>
<div className="flex items-center justify-between">
<span className="text-gold-400 font-medium font-mono">LYD 1,850</span>
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 flex items-center justify-center transition-all active:scale-95" onclick="addToCart('3', 'Black Bay Diver', 1850)">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-gold-500/5 -skew-y-3 transform origin-top-left scale-110"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-gold-400 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-bold uppercase tracking-widest">Our Location</span>
</div>
<h2 className="text-4xl font-semibold text-white tracking-tight">
                        Visit us in <br/> <span className="text-slate-400">the heart of Libya.</span>
</h2>
<p className="text-slate-400 leading-relaxed font-light">
                        Mohy Watches is your trusted destination for authentic timepieces. 
                        We pride ourselves on verification, quality service, and transparency.
                        Whether you are in Tripoli or Benghazi, we deliver secure shipping nationwide.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-4 rounded-lg bg-navy-800/50 border border-white/5">
<svg className="lucide lucide-shield-check w-6 h-6 text-gold-400 mb-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h4 className="text-white font-medium mb-1">Authentic</h4>
<p className="text-xs text-slate-500">100% Original Verified</p>
</div>
<div className="p-4 rounded-lg bg-navy-800/50 border border-white/5">
<svg className="lucide lucide-truck w-6 h-6 text-gold-400 mb-3" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<h4 className="text-white font-medium mb-1">Delivery</h4>
<p className="text-xs text-slate-500">Safe shipping across Libya</p>
</div>
</div>
</div>
<div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 group">

<img alt="Store Interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-navy-900/40"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur rounded border border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-white text-sm font-medium">Mohy Watches HQ</p>
<p className="text-xs text-slate-400">Tripoli, Libya</p>
</div>
<a className="w-8 h-8 flex items-center justify-center bg-gold-500 rounded text-navy-900" href="#">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/5 border-t pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="lucide lucide-watch w-6 h-6 text-gold-400" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v2.2l1.6 1"></path><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></svg>
<span className="text-xl font-bold text-white tracking-tight uppercase">MOHY WATCHES</span>
</a>
<p className="text-slate-500 text-sm max-w-xs mb-6">
                        The gold standard in Libyan luxury horology.
                        <br/>محي للساعات - التميز والفخامة
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-gold-400 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-gold-400 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-gold-400 transition-colors" href="https://wa.me/218910000000"><svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 gap-12">
<div className="">
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-gold-400" href="#collection">Collection</a></li>
<li className=""><a className="hover:text-gold-400" href="#about">About Us</a></li>
<li><a className="hover:text-gold-400" href="#">Shipping Policy</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="">Tripoli, Libya</li>
<li className="">091-8460060</li>
<li className="">info@mohywatches.ly</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Mohy Watches. All rights reserved.</p>
<div className="flex gap-2 text-slate-700">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-xs">Cash on Delivery Available</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
