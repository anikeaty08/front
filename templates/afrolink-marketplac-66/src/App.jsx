import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- DATA ---
        const PRODUCTS = [
            {id:1, name:'Jollof Rice Meal Kit', vendor:"Ngozi's Kitchen", price:18.00, rating:5.0, reviews:211, tag:'Top Seller', img:'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80', icon:'solar:cup-hot-linear', desc:'Authentic kit with tomato base, Scotch bonnet peppers, and all spices needed.'},
            {id:2, name:'Suya Spice Mix 200g', vendor:"Mama Kemi's Kitchen", price:12.50, oldPrice:15.00, rating:4.9, reviews:127, tag:'Sale', img:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', icon:'solar:fire-linear', desc:'Traditional blend of groundnut, ginger, garlic, chili. Perfect for grilling.'},
            {id:3, name:'Raw Shea Butter 250g', vendor:'Pure Nature', price:14.50, rating:4.6, reviews:39, img:'https://images.unsplash.com/photo-1611078518977-18c7bc744923?w=600&q=80', icon:'solar:leaf-linear', desc:'100% unrefined, cold-pressed shea butter from Ghana.'},
            {id:4, name:'Ankara Print Tote', vendor:'Kemi Designs', price:32.00, rating:4.9, reviews:61, img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', icon:'solar:bag-3-linear', desc:'Handmade tote bag in vibrant West African Ankara print.'},
            {id:5, name:'Ethiopian Berbere', vendor:'Addis Spice', price:9.50, rating:4.8, reviews:47, tag:'New', img:'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&q=80', icon:'solar:fire-linear', desc:'Fiery spice mix of chili, fenugreek, coriander, cardamom.'},
            {id:6, name:'Egusi Seeds 1kg', vendor:'Accra Grocery', price:10.99, rating:4.8, reviews:54, img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', icon:'solar:leaf-linear', desc:'Premium ground egusi from West Africa.'},
            {id:7, name:'African Black Soap', vendor:'Pure Nature', price:8.00, rating:4.9, reviews:108, tag:'Top Seller', img:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80', icon:'solar:star-linear', desc:'Traditional Ghanaian soap made from plantain skin ash.'},
            {id:8, name:'Pepper Soup Kit', vendor:"Mama Kemi's Kitchen", price:16.00, rating:4.7, reviews:68, img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', icon:'solar:cup-hot-linear', desc:'Spice kit with uziza leaves, ehuru, utazi. Serves 4.'}
        ];

        const VENDORS = [
            {id:1, name:"Ngozi's Kitchen", type:'Prepared Meals', rating:4.9, img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80', banner:'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', badge:'Top Vendor'},
            {id:2, name:"Mama Kemi's", type:'Spices & Kits', rating:4.8, img:'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80', banner:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'},
            {id:3, name:'Accra Grocery', type:'Pantry Essentials', rating:4.7, img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', banner:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80'},
            {id:4, name:'Addis Spice', type:'Ethiopian Spices', rating:4.8, img:'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&q=80', banner:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', badge:'New'},
        ];

        const REELS = [
            {id:1, author:"Chef Ngozi", desc:"How to make the perfect Jollof Rice at home. Let's settle the debate! 🇳🇬🔥", likes:'12.4k', comments:'842', img:'https://images.unsplash.com/photo-1583394293214-56389ee3c0c7?w=600&h=1000&fit=crop', avatar:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80'},
            {id:2, author:"Kwame's Eats", desc:"Supporting local vendors today. The flavors are incredible! 🇬🇭", likes:'8.2k', comments:'312', img:'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=600&h=1000&fit=crop', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80'},
            {id:3, author:"Mama Kemi", desc:"Sunday pepper soup prep with the family. 🍲", likes:'15.1k', comments:'1.2k', img:'https://images.unsplash.com/photo-1555243896-771a80b06b0d?w=600&h=1000&fit=crop', avatar:'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&q=80'}
        ];

        // --- RENDERERS ---
        function generateProductHTML(p) {
            const badgeHTML = p.tag ? `<div class="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md text-[#1C0A00] shadow-sm">${p.tag}</div>` : '';
            const oldPriceHTML = p.oldPrice ? `<span class="text-xs text-[#9B7355] line-through ml-2">$${p.oldPrice.toFixed(2)}</span>` : '';
            
            return `
            <div class="bg-white rounded-2xl border border-[#F5E6D0] overflow-hidden group hover:shadow-xl hover:border-[#EDD5B0] transition-all duration-300 flex flex-col h-full cursor-pointer">
                <div class="relative h-48 bg-[#FDF6EC] overflow-hidden">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    ${badgeHTML}
                    <button onclick="event.stopPropagation(); showToast('solar:heart-bold', 'Saved to wishlist!')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#9B7355] hover:text-[#C0392B] shadow-sm transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                        <iconify-icon icon="solar:heart-linear"></iconify-icon>
                    </button>
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <div class="text-[11px] font-semibold text-[#C4712A] uppercase tracking-wider mb-1">${p.vendor}</div>
                    <div class="font-semibold text-[#1C0A00] text-base leading-tight mb-2">${p.name}</div>
                    <p class="text-xs text-[#5C3A1E] line-clamp-2 mb-4 flex-1">${p.desc}</p>
                    <div class="flex items-end justify-between mt-auto">
                        <div>
                            <div class="flex items-center text-xs text-[#D4A017] mb-1 font-semibold">
                                <iconify-icon icon="solar:star-bold"></iconify-icon> <span class="ml-1">${p.rating}</span> <span class="text-[#9B7355] font-normal ml-1">(${p.reviews})</span>
                            </div>
                            <div class="font-serif text-lg font-semibold tracking-tight text-[#1C0A00]">$${p.price.toFixed(2)}${oldPriceHTML}</div>
                        </div>
                        <button onclick="event.stopPropagation(); addToCart(${p.id})" class="w-10 h-10 rounded-xl bg-[#FDF6EC] text-[#7C3D12] hover:bg-[#7C3D12] hover:text-white transition-colors flex items-center justify-center">
                            <iconify-icon icon="solar:cart-plus-linear" class="text-lg"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>`;
        }

        function generateVendorHTML(v) {
            const badgeHTML = v.badge ? `<span class="absolute top-3 right-3 bg-[#1C0A00] text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm">${v.badge}</span>` : '';
            return `
            <div class="bg-white rounded-2xl border border-[#F5E6D0] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div class="relative h-28 bg-[#EDD5B0] overflow-hidden">
                    <img src="${v.banner}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                    ${badgeHTML}
                </div>
                <div class="px-5 pb-5 relative">
                    <div class="w-16 h-16 rounded-2xl border-4 border-white bg-[#FDF6EC] -mt-8 mb-3 overflow-hidden shadow-md relative z-10">
                        <img src="${v.img}" alt="${v.name}" class="w-full h-full object-cover">
                    </div>
                    <h3 class="font-semibold text-[#1C0A00] text-lg leading-none mb-1">${v.name}</h3>
                    <div class="text-xs text-[#5C3A1E] mb-3">${v.type}</div>
                    <div class="flex items-center gap-1 text-xs text-[#D4A017] font-semibold bg-[#FDF6EC] inline-flex px-2 py-1 rounded-md">
                        <iconify-icon icon="solar:star-bold"></iconify-icon> ${v.rating}
                    </div>
                </div>
            </div>`;
        }

        function generateReelHTML(r) {
            return `
            <div class="w-full h-full snap-start relative bg-black overflow-hidden group">
                <img src="${r.img}" alt="Community Reel" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <!-- Play Icon (Center) -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div class="w-16 h-16 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                        <iconify-icon icon="solar:play-bold" class="text-3xl ml-1"></iconify-icon>
                    </div>
                </div>

                <!-- Right Actions -->
                <div class="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-10">
                    <button class="flex flex-col items-center gap-1 text-white hover:text-[#C0392B] transition-colors group/btn">
                        <div class="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                            <iconify-icon icon="solar:heart-linear" class="text-xl"></iconify-icon>
                        </div>
                        <span class="text-[10px] font-semibold drop-shadow-md">${r.likes}</span>
                    </button>
                    <button class="flex flex-col items-center gap-1 text-white hover:text-white/80 transition-colors group/btn">
                        <div class="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                            <iconify-icon icon="solar:chat-round-dots-linear" class="text-xl"></iconify-icon>
                        </div>
                        <span class="text-[10px] font-semibold drop-shadow-md">${r.comments}</span>
                    </button>
                    <button class="flex flex-col items-center gap-1 text-white hover:text-white/80 transition-colors group/btn" onclick="showToast('solar:link-linear', 'Link copied!')">
                        <div class="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                            <iconify-icon icon="solar:forward-linear" class="text-xl"></iconify-icon>
                        </div>
                        <span class="text-[10px] font-semibold drop-shadow-md">Share</span>
                    </button>
                </div>
                
                <!-- Bottom Info -->
                <div class="absolute bottom-6 left-6 right-20 text-white z-10">
                    <div class="flex items-center gap-2 mb-3">
                        <img src="${r.avatar}" class="w-9 h-9 rounded-full border border-white/20 object-cover">
                        <span class="font-semibold text-sm drop-shadow-md">${r.author}</span>
                        <button class="ml-2 px-2 py-0.5 rounded border border-white/40 text-[10px] font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur">Follow</button>
                    </div>
                    <p class="text-sm line-clamp-2 text-white/90 drop-shadow-md">${r.desc}</p>
                    <div class="flex items-center gap-2 mt-3 text-xs text-white/70 bg-black/30 backdrop-blur w-fit px-3 py-1.5 rounded-full">
                        <iconify-icon icon="solar:music-note-linear"></iconify-icon>
                        <span class="animate-pulse">Original Audio — ${r.author}</span>
                    </div>
                </div>
            </div>`;
        }

        // --- INIT & LOGIC ---
        let cart = [];

        window.onload = () => {
            document.getElementById('homeFeaturedProducts').innerHTML = PRODUCTS.slice(0, 4).map(generateProductHTML).join('');
            document.getElementById('shopProducts').innerHTML = PRODUCTS.map(generateProductHTML).join('');
            document.getElementById('homeVendors').innerHTML = VENDORS.slice(0, 4).map(generateVendorHTML).join('');
            document.getElementById('allVendors').innerHTML = VENDORS.map(generateVendorHTML).join('');
            
            // Community Reels
            document.getElementById('reelsContainer').innerHTML = REELS.map(generateReelHTML).join('');

            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-lg');
                    nav.classList.replace('bg-white/5', 'bg-[#1C0A00]/95');
                } else {
                    nav.classList.remove('shadow-lg');
                    nav.classList.replace('bg-[#1C0A00]/95', 'bg-white/5');
                }
            });
        };

        function showPage(id) {
            document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
            document.getElementById('page-' + id).classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        // Cart functions
        function addToCart(id) {
            const product = PRODUCTS.find(p => p.id === id);
            const existing = cart.find(i => i.id === id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({...product, qty: 1});
            }
            updateCartUI();
            showToast('solar:cart-check-linear', `Added ${product.name} to cart`);
        }

        function updateCartUI() {
            const badge = document.getElementById('cartBadge');
            const itemsContainer = document.getElementById('cartItems');
            const subEl = document.getElementById('cartSubtotal');
            const totEl = document.getElementById('cartTotal');
            
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            badge.textContent = totalItems;
            
            if (cart.length === 0) {
                itemsContainer.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-[#9B7355] text-center">
                        <iconify-icon icon="solar:bag-3-linear" class="text-6xl mb-4 opacity-50"></iconify-icon>
                        <p class="font-semibold text-lg text-[#5C3A1E]">Your cart is empty</p>
                        <p class="text-sm mt-1 max-w-[16rem]">Discover authentic African products and bring the taste of home.</p>
                        <button onclick="toggleCart(); showPage('shop');" class="mt-6 text-[#7C3D12] text-sm font-semibold border border-[#7C3D12] rounded-full px-6 py-2 hover:bg-[#FDF6EC] transition-colors">Start Shopping</button>
                    </div>`;
                subEl.textContent = '$0.00';
                totEl.textContent = '$0.00';
                return;
            }

            itemsContainer.innerHTML = cart.map(item => `
                <div class="flex gap-4 items-start">
                    <img src="${item.img}" class="w-20 h-20 rounded-xl object-cover border border-[#F5E6D0]">
                    <div class="flex-1">
                        <div class="text-xs text-[#C4712A] font-semibold mb-0.5">${item.vendor}</div>
                        <div class="text-sm font-semibold text-[#1C0A00] leading-tight mb-2">${item.name}</div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 bg-[#FDF6EC] rounded-lg border border-[#EDD5B0] px-2 py-1">
                                <button onclick="changeQty(${item.id}, -1)" class="text-[#5C3A1E] hover:text-[#1C0A00]"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
                                <span class="text-xs font-semibold w-4 text-center">${item.qty}</span>
                                <button onclick="changeQty(${item.id}, 1)" class="text-[#5C3A1E] hover:text-[#1C0A00]"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
                            </div>
                            <span class="font-semibold text-[#1C0A00]">$${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `).join('');

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            subEl.textContent = `$${subtotal.toFixed(2)}`;
            totEl.textContent = `$${(subtotal > 50 ? subtotal : subtotal + 7.99).toFixed(2)}`;
        }

        function changeQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
                updateCartUI();
            }
        }

        function toggleCart() {
            const drawer = document.getElementById('cartDrawer');
            const overlay = document.getElementById('cartOverlay');
            if (drawer.classList.contains('translate-x-full')) {
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        // Modals & UI
        function showModal(type) {
            const overlay = document.getElementById('modalOverlay');
            const content = document.getElementById('modalContent');
            const tpl = document.getElementById('tpl-auth').innerHTML;
            
            content.innerHTML = tpl;
            
            // Adjust texts based on type
            if(type === 'signup') {
                document.getElementById('authTitle').textContent = 'Create Account';
                document.getElementById('authSub').textContent = 'Join the AfroLink community today.';
                document.getElementById('authToggleText').textContent = 'Already have an account?';
            }
            
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                content.classList.remove('scale-95');
            }, 10);
        }

        function closeModalBtn() {
            const overlay = document.getElementById('modalOverlay');
            const content = document.getElementById('modalContent');
            content.classList.add('scale-95');
            setTimeout(() => {
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }, 200);
        }

        function closeModal(e) {
            if (e.target.id === 'modalOverlay') closeModalBtn();
        }

        let toastTimeout;
        function showToast(iconStr, text) {
            const toast = document.getElementById('toast');
            document.getElementById('toastIcon').innerHTML = `<iconify-icon icon="${iconStr}"></iconify-icon>`;
            document.getElementById('toastText').textContent = text;
            
            toast.classList.remove('translate-y-20', 'opacity-0');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function applyPromo() {
            const input = document.getElementById('promoInput').value.toUpperCase();
            if(input === 'AFRILINK25') {
                showToast('solar:ticket-linear', 'Promo applied successfully!');
            } else {
                showToast('solar:close-circle-linear', 'Invalid code');
            }
        }

        function copyPromo() {
            navigator.clipboard.writeText('AFRILINK25');
            showToast('solar:copy-linear', 'Promo code copied!');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-dark py-3 px-6 md:px-10 flex items-center justify-between" id="navbar">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#" onclick="showPage('home')">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C4712A] to-[#7C3D12] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
<iconify-icon className="text-white text-xl" icon="solar:earth-bold"></iconify-icon>
</div>
<span className="font-serif text-xl tracking-tight text-white font-semibold">Afro<span className="text-[#C4712A]">Link</span></span>
</a>
<div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 pl-4 w-80 focus-within:w-96 focus-within:border-[#C4712A]/50 focus-within:bg-white/10 transition-all">
<iconify-icon className="text-white/50 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white text-sm w-full py-1.5 px-2 placeholder-white/40 font-sans-alt" placeholder="Search groceries, meals..." type="text"/>
</div>
</div>
<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-1 font-sans-alt text-sm font-medium">
<a className="nav-link active px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" href="#" onclick="showPage('home')">Home</a>
<a className="nav-link px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" href="#" onclick="showPage('shop')">Shop</a>
<a className="nav-link px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" href="#" onclick="showPage('vendors')">Vendors</a>
<a className="nav-link px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" href="#" onclick="showPage('community')">Community</a>
</div>
<div className="w-[1px] h-6 bg-white/20"></div>
<div className="flex items-center gap-3">
<button className="text-sm font-semibold text-white/90 hover:text-white transition-colors" onclick="showModal('login')">Sign In</button>
<button className="bg-gradient-to-r from-[#C4712A] to-[#7C3D12] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-[0_4px_14px_rgba(196,113,42,0.3)] hover:shadow-[0_6px_20px_rgba(196,113,42,0.4)] hover:-translate-y-0.5 transition-all" onclick="showModal('signup')">Join Free</button>
<button className="relative ml-2 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onclick="toggleCart()">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#E07820] text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full border border-[#1C0A00]" id="cartBadge">0</span>
</button>
</div>
</div>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#1C0A00]/60 backdrop-blur-sm z-[100] opacity-0 pointer-events-none transition-opacity duration-300" id="cartOverlay" onclick="toggleCart()"></div>
<div className="fixed top-0 right-0 bottom-0 w-full md:w-[26rem] bg-white z-[101] translate-x-full transition-transform duration-300 ease-out shadow-2xl flex flex-col" id="cartDrawer">
<div className="p-6 border-b border-[#F5E6D0] flex items-center justify-between bg-[#FDF6EC]">
<h3 className="font-serif text-2xl tracking-tight text-[#2C1500] font-semibold flex items-center gap-2">
<iconify-icon className="text-[#7C3D12]" icon="solar:cart-large-minimalistic-linear"></iconify-icon> Your Cart
            </h3>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-[#5C3A1E] transition-colors" onclick="toggleCart()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar bg-white" id="cartItems">

<div className="h-full flex flex-col items-center justify-center text-[#9B7355] text-center">
<iconify-icon className="text-6xl mb-4 opacity-50" icon="solar:bag-3-linear"></iconify-icon>
<p className="font-semibold text-lg text-[#5C3A1E]">Your cart is empty</p>
<p className="text-sm mt-1 max-w-[16rem]">Discover authentic African products and bring the taste of home to your kitchen.</p>
<button className="mt-6 text-[#7C3D12] text-sm font-semibold border border-[#7C3D12] rounded-full px-6 py-2 hover:bg-[#FDF6EC] transition-colors" onclick="toggleCart(); showPage('shop');">Start Shopping</button>
</div>
</div>
<div className="p-6 border-t border-[#F5E6D0] bg-[#FDF6EC] space-y-4">
<div className="flex justify-between text-sm text-[#5C3A1E]">
<span>Subtotal</span>
<span className="font-semibold text-[#2C1500]" id="cartSubtotal">$0.00</span>
</div>
<div className="flex justify-between text-sm text-[#5C3A1E]">
<span>Delivery</span>
<span className="text-[#2D6A2D] font-medium flex items-center gap-1"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Free over $50</span>
</div>
<div className="pt-4 border-t border-[#F5E6D0]/50 flex justify-between items-center">
<span className="font-semibold text-base text-[#2C1500]">Total</span>
<span className="font-serif text-3xl tracking-tight text-[#7C3D12] font-semibold" id="cartTotal">$0.00</span>
</div>
<div className="flex gap-2 pt-2">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9B7355]" icon="solar:ticket-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-3 rounded-xl border border-[#EDD5B0] text-sm focus:outline-none focus:border-[#C4712A] focus:ring-1 focus:ring-[#C4712A]/30 bg-white placeholder-[#9B7355]/60 transition-all" id="promoInput" placeholder="Promo code" type="text"/>
</div>
<button className="px-5 py-3 rounded-xl bg-white border border-[#EDD5B0] text-[#7C3D12] text-sm font-semibold hover:bg-[#F5E6D0] transition-colors" onclick="applyPromo()">Apply</button>
</div>
<button className="w-full py-4 rounded-xl bg-[#1C0A00] text-white text-base font-semibold hover:bg-[#3d1a06] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Checkout Securely <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-[#1C0A00]/70 backdrop-blur-sm z-[200] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 p-4" id="modalOverlay" onclick="closeModal(event)">
<div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl transform scale-95 transition-transform duration-300 relative overflow-hidden" id="modalContent">

</div>
</div>

<div className="fixed bottom-8 right-8 z-[300] bg-[#1C0A00] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 max-w-sm border border-white/10" id="toast">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg shrink-0" id="toastIcon"></div>
<span className="text-sm font-medium" id="toastText"></span>
</div>

<main className="page block pt-[4.25rem]" id="page-home">

<div className="bg-[#1C0A00] text-white py-2 px-6 flex items-center justify-center gap-4 relative z-10 text-xs sm:text-sm" id="promoStrip">
<div className="kente-line absolute top-0 left-0 right-0 h-[2px] opacity-80"></div>
<span className="flex items-center gap-2"><iconify-icon className="text-[#D4A017] text-lg" icon="solar:confetti-linear"></iconify-icon> <span className="hidden sm:inline">Welcome Offer:</span> Free delivery on first order over $30.</span>
<button className="font-mono text-xs bg-white/10 px-3 py-1 rounded border border-white/20 hover:bg-white/20 transition-colors tracking-widest font-semibold flex items-center gap-1" onclick="copyPromo()">
                AFRILINK25 <iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
<button className="absolute right-4 text-white/50 hover:text-white" onclick="document.getElementById('promoStrip').style.display='none'"><iconify-icon className="text-lg" icon="solar:close-square-linear"></iconify-icon></button>
</div>

<section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-gradient-to-br from-[#1C0A00] via-[#3d1a06] to-[#7C3D12] animate-grad-shift">

<div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] bg-[#C4712A] rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-[#D4A017] rounded-full blur-[100px] opacity-10 pointer-events-none mix-blend-overlay"></div>
<div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 max-w-2xl text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-full px-4 py-1.5 text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Canada's African Marketplace
                    </div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-white font-semibold leading-[1.1] mb-6">
                        Where <span className="italic text-[#C4712A] font-medium">African Roots</span><br/> Meet Canadian Homes.
                    </h1>
<p className="text-base md:text-lg text-white/70 font-sans-alt mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Discover authentic groceries, home-cooked meals, spices, and crafts from verified African Canadian vendors. Delivered fresh across the country.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-16">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1C0A00] rounded-full text-base font-semibold hover:bg-[#FDF6EC] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2" onclick="showPage('shop')">
<iconify-icon className="text-xl" icon="solar:bag-smile-linear"></iconify-icon> Start Shopping
                        </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2" onclick="showModal('become-vendor')">
<iconify-icon className="text-xl" icon="solar:shop-2-linear"></iconify-icon> Become a Vendor
                        </button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-left">
<div>
<div className="font-serif text-3xl text-white font-semibold tracking-tight">1.2k+</div>
<div className="text-xs text-white/50 font-semibold uppercase tracking-wider mt-1">Active Users</div>
</div>
<div>
<div className="font-serif text-3xl text-white font-semibold tracking-tight">25+</div>
<div className="text-xs text-white/50 font-semibold uppercase tracking-wider mt-1">Vendors</div>
</div>
<div>
<div className="font-serif text-3xl text-white font-semibold tracking-tight">500+</div>
<div className="text-xs text-white/50 font-semibold uppercase tracking-wider mt-1">Products</div>
</div>
<div>
<div className="font-serif text-3xl text-white font-semibold tracking-tight">4.9</div>
<div className="text-xs text-white/50 font-semibold uppercase tracking-wider mt-1 flex items-center gap-1">
<iconify-icon className="text-[#D4A017]" icon="solar:star-fall-linear"></iconify-icon> Rating
                            </div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-xl relative hidden md:block">

<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-[#3d1a06]">
<img alt="African Canadian Vendor" className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C0A00]/80 via-transparent to-transparent"></div>
</div>

<div className="absolute -left-12 bottom-20 glass rounded-2xl p-4 flex items-center gap-4 shadow-xl animate-float max-w-[16rem]">
<div className="w-12 h-12 rounded-full bg-[#E07820]/20 flex items-center justify-center text-[#E07820] shrink-0">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-[#5C3A1E] uppercase tracking-wider">Live Delivery</div>
<div className="text-sm font-semibold text-[#1C0A00] mt-0.5">Jollof Kit to Ottawa</div>
<div className="text-xs text-[#9B7355] mt-1">Arriving in 15 mins</div>
</div>
</div>

<div className="absolute -right-8 top-32 glass rounded-2xl p-4 shadow-xl animate-float-delayed">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<img alt="Community Member" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&amp;q=80"/>
<img alt="Community Member" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-[#F5E6D0] flex items-center justify-center text-xs font-semibold text-[#7C3D12]">+8</div>
</div>
</div>
<div className="text-sm font-semibold text-[#1C0A00]">Top Rated Vendor</div>
<div className="flex items-center gap-1 text-xs text-[#D4A017] mt-1 font-semibold">
                            ★ 5.0 <span className="text-[#9B7355] font-normal">(124 reviews)</span>
</div>
</div>
</div>
</div>
</section>

<div className="sticky top-[4.25rem] z-40 bg-white/80 backdrop-blur-md border-b border-[#F5E6D0] shadow-sm">
<div className="container mx-auto px-6 overflow-x-auto hide-scrollbar flex items-center gap-2 py-3">
<button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1C0A00] text-white text-sm font-semibold shrink-0 transition-all hover:shadow-md" onclick="showPage('shop')">
<iconify-icon icon="solar:widget-linear"></iconify-icon> All Categories
                </button>
<button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold shrink-0 hover:bg-[#FDF6EC] hover:border-[#C4712A] transition-all" onclick="showPage('shop')">
<iconify-icon className="text-[#2D6A2D]" icon="solar:leaf-linear"></iconify-icon> Groceries
                </button>
<button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold shrink-0 hover:bg-[#FDF6EC] hover:border-[#C4712A] transition-all" onclick="showPage('shop')">
<iconify-icon className="text-[#E07820]" icon="solar:chef-hat-linear"></iconify-icon> Prepared Meals
                </button>
<button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold shrink-0 hover:bg-[#FDF6EC] hover:border-[#C4712A] transition-all" onclick="showPage('shop')">
<iconify-icon className="text-[#C0392B]" icon="solar:fire-linear"></iconify-icon> Spices &amp; Sauces
                </button>
<button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold shrink-0 hover:bg-[#FDF6EC] hover:border-[#C4712A] transition-all" onclick="showPage('shop')">
<iconify-icon className="text-[#1565C0]" icon="solar:palette-linear"></iconify-icon> Crafts &amp; Art
                </button>
<button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold shrink-0 hover:bg-[#FDF6EC] hover:border-[#C4712A] transition-all" onclick="showPage('community')">
<iconify-icon className="text-[#7C3D12]" icon="solar:play-circle-linear"></iconify-icon> Recipes
                </button>
</div>
</div>

<section className="py-20 container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-[#C4712A] text-xs font-semibold tracking-widest uppercase mb-2 block">Curated Selection</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1C0A00] font-semibold">Featured Products</h2>
</div>
<button className="text-[#7C3D12] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" onclick="showPage('shop')">
                    Browse all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="homeFeaturedProducts">

</div>
</section>

<section className="py-24 bg-white border-y border-[#F5E6D0] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFREQ1QjAiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1C0A00] font-semibold mb-4">Simple &amp; Seamless</h2>
<p className="text-[#5C3A1E] text-base">Connecting you with authentic African Canadian vendors in three intuitive steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#C4712A]/30 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#FDF6EC] border-2 border-[#EDD5B0] flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform duration-300 group-hover:border-[#C4712A]">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1C0A00] text-white flex items-center justify-center text-sm font-semibold shadow-lg">1</div>
<iconify-icon className="text-4xl text-[#7C3D12]" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold text-[#1C0A00] mb-3">Discover &amp; Browse</h3>
<p className="text-sm text-[#5C3A1E] leading-relaxed px-4">Explore hundreds of authentic products from verified vendors. Filter by country, category, or delivery day.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#FDF6EC] border-2 border-[#EDD5B0] flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform duration-300 group-hover:border-[#C4712A]">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1C0A00] text-white flex items-center justify-center text-sm font-semibold shadow-lg">2</div>
<iconify-icon className="text-4xl text-[#7C3D12]" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold text-[#1C0A00] mb-3">Order Securely</h3>
<p className="text-sm text-[#5C3A1E] leading-relaxed px-4">Mix items from multiple vendors. Pay safely via Stripe using Visa, Mastercard, or Apple Pay.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#FDF6EC] border-2 border-[#EDD5B0] flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform duration-300 group-hover:border-[#C4712A]">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1C0A00] text-white flex items-center justify-center text-sm font-semibold shadow-lg">3</div>
<iconify-icon className="text-4xl text-[#7C3D12]" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold text-[#1C0A00] mb-3">Fresh Delivery</h3>
<p className="text-sm text-[#5C3A1E] leading-relaxed px-4">Track your order in real-time. Enjoy free delivery on orders over $50, direct to your doorstep.</p>
</div>
</div>
</div>
</section>

<section className="py-20 container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1C0A00] font-semibold">Top Community Vendors</h2>
</div>
<button className="text-[#7C3D12] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" onclick="showPage('vendors')">
                    View all vendors <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="homeVendors">

</div>
</section>

<section className="container mx-auto px-6 py-12">
<div className="bg-[#1C0A00] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-[#C4712A] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-xl">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white font-semibold mb-6">Take AfroLink wherever you go.</h2>
<p className="text-white/70 text-base mb-8">Download our app for exclusive mobile discounts, real-time delivery tracking, and faster checkout.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl px-6 py-3 flex items-center gap-3 transition-colors">
<iconify-icon className="text-2xl" icon="simple-icons:apple"></iconify-icon>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider text-white/70">Download on the</div>
<div className="text-sm font-semibold">App Store</div>
</div>
</button>
<button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl px-6 py-3 flex items-center gap-3 transition-colors">
<iconify-icon className="text-2xl" icon="simple-icons:googleplay"></iconify-icon>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider text-white/70">GET IT ON</div>
<div className="text-sm font-semibold">Google Play</div>
</div>
</button>
</div>
</div>
<div className="relative z-10 w-full max-w-[16rem] hidden lg:block">

<div className="w-full aspect-[1/2] rounded-[2.5rem] border-8 border-[#3d1a06] bg-gradient-to-b from-[#7C3D12] to-[#1C0A00] relative overflow-hidden shadow-2xl">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#3d1a06] rounded-full"></div>
<div className="absolute inset-x-4 top-16 bottom-4 bg-[#FDF6EC] rounded-2xl p-4 flex flex-col gap-3">
<div className="w-full h-24 bg-[#EDD5B0] rounded-xl animate-pulse"></div>
<div className="w-3/4 h-4 bg-[#EDD5B0] rounded animate-pulse"></div>
<div className="w-1/2 h-4 bg-[#EDD5B0] rounded animate-pulse"></div>
<div className="w-full h-12 bg-[#C4712A]/20 rounded-lg mt-auto animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page hidden pt-[4.25rem] bg-[#FDF6EC] min-h-screen" id="page-shop">
<div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 shrink-0 space-y-8">
<div>
<h3 className="font-sans-alt font-semibold text-[#1C0A00] text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filters
                    </h3>
<button className="text-xs text-[#C4712A] font-semibold hover:underline mb-4">Clear All</button>
</div>

<div className="space-y-3 border-t border-[#EDD5B0] pt-6">
<h4 className="font-semibold text-sm text-[#1C0A00]">Category</h4>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded border-2 border-[#EDD5B0] bg-white peer-checked:bg-[#7C3D12] peer-checked:border-[#7C3D12] transition-colors flex items-center justify-center group-hover:border-[#7C3D12]">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</input></div>
<span className="text-sm text-[#5C3A1E] group-hover:text-[#1C0A00] transition-colors">All Products</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded border-2 border-[#EDD5B0] bg-white peer-checked:bg-[#7C3D12] peer-checked:border-[#7C3D12] transition-colors flex items-center justify-center group-hover:border-[#7C3D12]">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</input></div>
<span className="text-sm text-[#5C3A1E] group-hover:text-[#1C0A00] transition-colors">Groceries</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border-2 border-[#EDD5B0] bg-white peer-checked:bg-[#7C3D12] peer-checked:border-[#7C3D12] transition-colors flex items-center justify-center group-hover:border-[#7C3D12]">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-[#5C3A1E] group-hover:text-[#1C0A00] transition-colors">Prepared Meals</span>
</label>
</div>

<div className="space-y-4 border-t border-[#EDD5B0] pt-6">
<h4 className="font-semibold text-sm text-[#1C0A00]">Price Range</h4>
<input max="100" min="0" type="range" value="60"/>
<div className="flex justify-between text-xs font-semibold text-[#9B7355]">
<span>$0</span>
<span>$60 max</span>
</div>
</div>

<div className="space-y-3 border-t border-[#EDD5B0] pt-6">
<h4 className="font-semibold text-sm text-[#1C0A00]">Origin Country</h4>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-[#5C3A1E]">Nigeria</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="peer sr-only" id="toggle1" name="toggle" type="checkbox" />
<div className="block bg-[#EDD5B0] w-10 h-6 rounded-full peer-checked:bg-[#7C3D12] transition-colors duration-300"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform peer-checked:translate-x-4 shadow-sm"></div>
</input></div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-[#5C3A1E]">Ghana</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="peer sr-only" id="toggle2" name="toggle" type="checkbox"/>
<div className="block bg-[#EDD5B0] w-10 h-6 rounded-full peer-checked:bg-[#7C3D12] transition-colors duration-300"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform peer-checked:translate-x-4 shadow-sm"></div>
</div>
</label>
</div>
</aside>

<div className="flex-1">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-white p-4 rounded-2xl border border-[#F5E6D0]">
<div>
<h1 className="font-serif text-2xl tracking-tight text-[#1C0A00] font-semibold">All Products</h1>
<p className="text-sm text-[#9B7355] mt-1">Showing all authentic results</p>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative flex-1 sm:w-48">
<select className="w-full appearance-none bg-[#FDF6EC] border border-[#EDD5B0] text-[#5C3A1E] text-sm font-semibold rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-[#C4712A]">
<option>Sort: Popular</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest First</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B7355] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" id="shopProducts">

</div>

<div className="flex justify-center items-center gap-2 mt-12">
<button className="w-10 h-10 rounded-xl border border-[#EDD5B0] text-[#9B7355] flex items-center justify-center hover:bg-white transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-xl bg-[#1C0A00] text-white font-semibold flex items-center justify-center shadow-md">1</button>
<button className="w-10 h-10 rounded-xl border border-[#EDD5B0] text-[#5C3A1E] font-semibold flex items-center justify-center hover:bg-white transition-colors">2</button>
<button className="w-10 h-10 rounded-xl border border-[#EDD5B0] text-[#5C3A1E] font-semibold flex items-center justify-center hover:bg-white transition-colors">3</button>
<button className="w-10 h-10 rounded-xl border border-[#EDD5B0] text-[#5C3A1E] flex items-center justify-center hover:bg-white transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</main>

<main className="page hidden pt-[4.25rem] bg-black min-h-screen relative" id="page-community">
<div className="absolute top-24 left-6 z-20">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all" onclick="showPage('home')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
<div className="container mx-auto px-4 h-[calc(100vh-4.25rem)] py-6 flex items-center justify-center">

<div className="w-full max-w-sm h-full max-h-[800px] bg-[#111] rounded-[2.5rem] shadow-2xl overflow-y-scroll snap-y snap-mandatory hide-scrollbar relative border border-white/10" id="reelsContainer">

</div>

<div className="hidden lg:flex flex-col max-w-sm ml-12 h-full justify-center gap-6">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-white">
<h2 className="font-serif text-3xl font-semibold mb-2 tracking-tight">Food &amp; Culture</h2>
<p className="text-white/60 text-sm leading-relaxed mb-6">Discover recipes, unboxings, and stories from the African Canadian community. Scroll to explore.</p>
<div className="space-y-4">
<div className="text-xs font-semibold uppercase tracking-wider text-white/40">Trending Tags</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">#JollofWars</span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">#WestAfrican</span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">#Egusi</span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">#CanadianVendor</span>
</div>
</div>
</div>
<button className="bg-gradient-to-r from-[#C4712A] to-[#7C3D12] text-white rounded-2xl py-4 font-semibold shadow-lg hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:video-frame-play-horizontal-linear"></iconify-icon> Post a Recipe
                </button>
</div>
</div>
</main>

<main className="page hidden pt-[4.25rem] bg-[#FDF6EC] min-h-screen" id="page-vendors">
<div className="container mx-auto px-6 py-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#C4712A] text-xs font-semibold tracking-widest uppercase mb-2 block">Our Partners</span>
<h2 className="font-serif text-4xl tracking-tight text-[#1C0A00] font-semibold mb-4">Meet Our Vendors</h2>
<p className="text-[#5C3A1E] text-base">Verified African Canadian entrepreneurs bringing the best of the continent to your neighborhood.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="allVendors">

</div>
</div>
</main>

<footer className="bg-[#1C0A00] text-white/70 pt-20 pb-10 border-t border-[#3d1a06]">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
<div className="lg:col-span-2">
<span className="font-serif text-2xl tracking-tight text-white font-semibold block mb-4">Afro<span className="text-[#C4712A]">Link</span></span>
<p className="text-sm leading-relaxed max-w-sm mb-6">Canada's premier marketplace connecting African Canadian vendors and customers through culture, community, and authentic commerce.</p>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C4712A] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="simple-icons:facebook"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C4712A] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="simple-icons:instagram"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C4712A] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="simple-icons:x"></iconify-icon>
</button>
</div>
</div>
<div>
<h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Shop</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#C4712A] transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Groceries</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Prepared Meals</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Crafts &amp; Art</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Community</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Recipes Feed</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Events</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Become a Vendor</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Driver Program</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Help Centre</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Delivery Info</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-[#C4712A] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/40">© 2026 AfroLink Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-white/30 text-2xl">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:visa"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:mastercard"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-3xl hover:text-white transition-colors" icon="simple-icons:applepay"></iconify-icon>
</div>
</div>
</div>
</footer>


<template id="tpl-auth">
<div className="flex flex-col md:flex-row h-full max-h-[90vh]">

<div className="hidden md:flex w-2/5 bg-gradient-to-br from-[#7C3D12] to-[#1C0A00] p-8 flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative z-10">
<span className="font-serif text-2xl tracking-tight text-white font-semibold">Afro<span className="text-[#C4712A]">Link</span></span>
<h3 className="text-white text-xl font-serif font-semibold mt-8 mb-2 tracking-tight">Join the community.</h3>
<p className="text-white/70 text-sm leading-relaxed">Discover, shop, and connect with authentic African Canadian creators.</p>
</div>
<div className="relative z-10 flex -space-x-2">
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-[#1C0A00] object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&amp;q=80"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-[#1C0A00] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-[#1C0A00] object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&amp;q=80"/>
<div className="text-xs text-white/50 ml-4 flex items-center">1.2k+ joined</div>
</div>
</div>

<div className="flex-1 p-8 md:p-10 bg-white relative">
<button className="absolute top-4 right-4 text-[#9B7355] hover:text-[#1C0A00] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#FDF6EC] transition-colors" onclick="closeModalBtn()"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
<h3 className="font-serif text-2xl tracking-tight text-[#1C0A00] font-semibold mb-1" id="authTitle">Welcome Back</h3>
<p className="text-sm text-[#5C3A1E] mb-8" id="authSub">Sign in to your account to continue.</p>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-[#5C3A1E] uppercase tracking-wider mb-1.5">Email Address</label>
<input className="w-full bg-[#FDF6EC] border border-[#EDD5B0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4712A] focus:ring-1 focus:ring-[#C4712A]/30 transition-all text-[#1C0A00]" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-[#5C3A1E] uppercase tracking-wider mb-1.5">Password</label>
<input className="w-full bg-[#FDF6EC] border border-[#EDD5B0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4712A] focus:ring-1 focus:ring-[#C4712A]/30 transition-all text-[#1C0A00]" placeholder="••••••••" type="password"/>
</div>
<div className="flex justify-end">
<a className="text-xs font-semibold text-[#C4712A] hover:underline" href="#">Forgot password?</a>
</div>
</div>
<button className="w-full bg-[#1C0A00] text-white rounded-xl py-3.5 font-semibold mt-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm" onclick="showToast('solar:check-circle-linear', 'Success!'); closeModalBtn();">
                    Continue
                </button>
<div className="mt-6 text-center text-sm text-[#5C3A1E]">
<span id="authToggleText">Don't have an account?</span>
<button className="font-semibold text-[#C4712A] hover:underline ml-1">Sign up</button>
</div>
</div>
</div>
</template>



    </>
  );
}
