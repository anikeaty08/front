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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // --- DATA ---
        const products = [];
        const imageMap = {
            "#f0f0f0": "https://i.ibb.co/6RdqX3G0/Chat-GPT-mage-18-Ara-2025-02-52-44.png", 
            "#1a1a1a": "https://i.ibb.co/4wj5mHtM/Chat-GPT-mage-18-Ara-2025-02-57-54.png", 
            "#f24f13": "https://i.ibb.co/HT9tPqGp/Chat-GPT-mage-18-Ara-2025-03-02-28.png",
            "#17a6a6": "https://i.ibb.co/HT9tPqGp/Chat-GPT-mage-18-Ara-2025-03-02-28.png"
        };
        const baseImages = [imageMap["#f0f0f0"], imageMap["#f24f13"], imageMap["#1a1a1a"]];
        const descriptions = [
            "Gün boyu konfor için özel olarak tasarlandı. İskandinav minimalizmini yansıtan bu parça, nefes alabilen organik pamuk dokusuyla modern gardırobunuzun vazgeçilmez temeli.",
            "Canlı renkleri ve yumuşak dokusuyla her adımda fark yaratın. Özel iplik teknolojisi sayesinde renkler uzun süre parlaklığını korur.",
            "Klasik tarzın modern yorumu. En yüksek kalite pamuk ipliklerinden üretilen bu model, iş toplantılarından hafta sonu gezilerine kadar her anınıza eşlik eder."
        ];

        for (let i = 1; i <= 40; i++) {
            const type = i % 3;
            let colors = type === 0 ? ["#f0f0f0", "#1a1a1a", "#f24f13"] : (type === 1 ? ["#f24f13", "#f0f0f0"] : ["#1a1a1a", "#17a6a6"]);
            let name = type === 0 ? "Essential White" : (type === 1 ? "Sunset Orange" : "Midnight Black");
            name += ` ${i < 10 ? '0' + i : i}`;
            products.push({
                id: i,
                name: name,
                price: `₺${type === 1 ? 280 : (type === 2 ? 300 : 260)}.00`,
                priceValue: type === 1 ? 280 : (type === 2 ? 300 : 260),
                image: baseImages[type],
                gallery: [baseImages[type], baseImages[(type+1)%3], baseImages[(type+2)%3]],
                colors: colors,
                badge: i % 5 === 0 ? "Çok Satan" : (i % 7 === 0 ? "Yeni" : ""),
                description: descriptions[type]
            });
        }

        // --- NAVIGATION ---
        function navigateTo(pageId) {
            document.querySelectorAll('[id^="page-"]').forEach(p => p.classList.add('hidden-page'));
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden-page');
                window.scrollTo(0, 0);
                
                // Update Title
                const titles = { 'home': 'Anasayfa', 'collection': 'Koleksiyon', 'about': 'Hikaye', 'contact': 'İletişim', 'cart': 'Sepetim', 'checkout': 'Ödeme', 'success': 'Sipariş Alındı' };
                document.title = `Ensokken - ${titles[pageId] || 'Mağaza'}`;
            }

            document.querySelectorAll('.nav-btn').forEach(b => {
                b.classList.remove('text-black', 'bg-white/50');
                b.classList.add('text-zinc-500');
            });
            const activeBtn = document.getElementById('nav-' + pageId);
            if(activeBtn) {
                activeBtn.classList.remove('text-zinc-500');
                activeBtn.classList.add('text-black', 'bg-white/50');
            }

            if(pageId === 'collection') renderCollection(1);
            if(pageId === 'cart') renderCart();
            if(pageId === 'checkout') renderCheckout();
        }

        // --- SEARCH & MENU ---
        function toggleSearch() {
            const overlay = document.getElementById('search-overlay');
            const isActive = overlay.classList.contains('active');
            if(isActive) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                setTimeout(() => document.getElementById('search-input').focus(), 300);
            }
        }
        function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('active'); }
        
        // --- FILTERS ---
        function toggleFilterDrawer() {
            const drawer = document.getElementById('mobile-filter-drawer');
            const content = document.getElementById('mobile-filter-content');
            const source = document.getElementById('filter-content-source');
            
            if(!drawer.classList.contains('active')) {
                // Copy filters from desktop sidebar to mobile drawer
                content.innerHTML = source.innerHTML;
                drawer.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Search Logic
        document.getElementById('search-input').addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const list = document.getElementById('search-results-list');
            const initial = document.getElementById('search-initial');
            const noRes = document.getElementById('search-no-results');
            
            if(!val) { initial.classList.remove('hidden'); list.classList.add('hidden'); noRes.classList.add('hidden'); return; }
            initial.classList.add('hidden');
            
            const filtered = products.filter(p => p.name.toLowerCase().includes(val));
            if(filtered.length === 0) { list.classList.add('hidden'); noRes.classList.remove('hidden'); }
            else {
                noRes.classList.add('hidden');
                list.classList.remove('hidden');
                list.innerHTML = filtered.slice(0, 5).map(p => `
                    <div onclick="toggleSearch(); openProductDetail(${p.id})" class="flex items-center gap-4 p-3 hover:bg-black/5 rounded-xl cursor-pointer">
                        <img src="${p.image}" class="w-10 h-10 object-contain">
                        <div><h4 class="text-sm font-semibold">${p.name}</h4><p class="text-xs text-zinc-500">${p.price}</p></div>
                    </div>`).join('');
            }
        });
        function fillSearch(t) { document.getElementById('search-input').value = t; document.getElementById('search-input').dispatchEvent(new Event('input')); }

        // --- COLLECTION ---
        function renderCollection(page) {
            const grid = document.getElementById('product-grid');
            if(!grid) return;
            grid.innerHTML = "";
            const start = (page-1)*20;
            const end = start+20;
            
            products.slice(start, end).forEach(p => {
                const colorsHtml = p.colors.map(c => `<span class="w-3 h-3 rounded-full border border-black/10" style="background-color:${c}"></span>`).join('');
                const badgeHtml = p.badge ? `<span class="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 uppercase tracking-wide">${p.badge}</span>` : '';
                
                grid.innerHTML += `
                    <article class="group cursor-pointer flex flex-col h-full fade-in" onclick="openProductDetail(${p.id})">
                        <div class="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-black/5 relative mb-3 hover:border-black/20 hover:shadow-lg transition-all duration-300">
                            ${badgeHtml}
                            <img src="${p.image}" loading="lazy" class="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500">
                            <button onclick="addToCartQuick(${p.id}, event)" class="absolute bottom-4 right-4 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-[#333] z-20">
                                <i data-lucide="plus" width="18" height="18"></i>
                            </button>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex gap-1.5 mt-2">${colorsHtml}</div>
                            <h3 class="font-medium text-black text-sm mt-1">${p.name}</h3>
                            <span class="text-zinc-500 font-semibold text-sm">${p.price}</span>
                        </div>
                    </article>`;
            });
            lucide.createIcons();
            document.getElementById('showing-text').innerText = `${start+1}-${Math.min(end, products.length)}`;
            
            // Pagination UI
            const btn1 = document.getElementById('btn-page-1');
            const btn2 = document.getElementById('btn-page-2');
            if(btn1) {
                if(page===1) { btn1.className="w-10 h-10 flex items-center justify-center rounded-lg border border-black bg-black text-white font-medium text-sm"; btn2.className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/5 bg-white text-zinc-600 hover:border-black/20 font-medium text-sm"; }
                else { btn1.className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/5 bg-white text-zinc-600 hover:border-black/20 font-medium text-sm"; btn2.className="w-10 h-10 flex items-center justify-center rounded-lg border border-black bg-black text-white font-medium text-sm"; }
            }
        }
        function changePage(p) { renderCollection(p); window.scrollTo({top:0, behavior:'smooth'}); }

        // --- PRODUCT DETAIL ---
        let currentProduct = null;
        let selSize = '40-43', selColor = null;

        function openProductDetail(id) {
            currentProduct = products.find(p => p.id === id);
            if(!currentProduct) return;
            selSize = '40-43'; selColor = currentProduct.colors[0];

            document.getElementById('detail-img').src = currentProduct.image;
            document.getElementById('detail-title').innerText = currentProduct.name;
            document.getElementById('detail-price').innerText = currentProduct.price;
            document.getElementById('detail-desc').innerText = currentProduct.description;

            const thumbs = document.getElementById('detail-thumbnails');
            thumbs.innerHTML = '';
            currentProduct.gallery.forEach(src => {
                const btn = document.createElement('button');
                btn.className = "w-16 h-20 rounded-xl border-2 shrink-0 bg-[#f9f9f9] overflow-hidden p-2 flex items-center justify-center border-transparent hover:border-black/20";
                btn.onclick = () => { document.getElementById('detail-img').src=src; };
                btn.innerHTML = `<img src="${src}" class="w-full h-full object-contain pointer-events-none">`;
                thumbs.appendChild(btn);
            });

            const colors = document.getElementById('detail-color-container');
            colors.innerHTML = '';
            currentProduct.colors.forEach(c => {
                const btn = document.createElement('button');
                btn.className = "w-8 h-8 rounded-full border border-black/10 focus:outline-none transition-all";
                if(c === selColor) btn.classList.add('ring-2', 'ring-offset-2', 'ring-black');
                btn.style.backgroundColor = c;
                btn.onclick = () => { 
                    selColor = c; 
                    Array.from(colors.children).forEach(b=>b.classList.remove('ring-2','ring-offset-2','ring-black'));
                    btn.classList.add('ring-2','ring-offset-2','ring-black');
                    document.getElementById('detail-img').src = imageMap[c] || currentProduct.image;
                };
                colors.appendChild(btn);
            });

            navigateTo('product-detail');
        }

        function selectDetailSize(s) {
            selSize = s;
            ['36-39','40-43','44-46'].forEach(z => {
                const b = document.getElementById(`size-btn-${z}`);
                if(b) b.className = z === s ? "py-3 rounded-xl border border-black bg-black text-white text-sm font-medium transition-all" : "py-3 rounded-xl border border-black/10 bg-white text-black hover:border-black text-sm font-medium transition-all";
            });
        }

        // --- CART ---
        let cart = [];
        
        function addToCartQuick(id, e) {
            if(e) e.stopPropagation();
            const p = products.find(i => i.id === id);
            const variantId = `${p.id}-40-43-${p.colors[0]}`;
            const exists = cart.find(x => x.variantId === variantId);
            if(exists) exists.quantity++;
            else cart.push({ ...p, variantId, selectedSize: '40-43', selectedColor: p.colors[0], quantity: 1 });
            updateCartUI(true);
        }

        function addToCartCurrent() {
            if(!currentProduct) return;
            const variantId = `${currentProduct.id}-${selSize}-${selColor}`;
            const exists = cart.find(x => x.variantId === variantId);
            if(exists) exists.quantity++;
            else cart.push({ ...currentProduct, variantId, selectedSize: selSize, selectedColor: selColor, image: imageMap[selColor] || currentProduct.image, quantity: 1 });
            updateCartUI(true);
        }

        function updateCartUI(showBadgeAnim) {
            const count = cart.reduce((a,b)=>a+b.quantity,0);
            const badge = document.getElementById('cart-count');
            badge.innerText = count;
            badge.style.opacity = count > 0 ? '1' : '0';
            if(showBadgeAnim) { badge.style.transform='scale(1.2)'; setTimeout(()=>badge.style.transform='scale(1)', 200); }
        }

        function renderCart() {
            const wrap = document.getElementById('cart-items-wrapper');
            const empty = document.getElementById('cart-empty-state');
            const summary = document.getElementById('cart-summary-box');
            
            if(cart.length === 0) {
                wrap.innerHTML = ''; empty.classList.remove('hidden'); summary.style.opacity = '0.5'; summary.style.pointerEvents='none';
                ['subtotal','tax','total'].forEach(id => document.getElementById('summary-'+id).innerText = '₺0.00');
                return;
            }
            
            empty.classList.add('hidden'); summary.style.opacity = '1'; summary.style.pointerEvents='auto';
            let subtotal = 0;
            wrap.innerHTML = cart.map(item => {
                subtotal += item.priceValue * item.quantity;
                return `
                <div class="flex gap-4 p-4 bg-white rounded-2xl border border-black/5 items-center">
                    <img src="${item.image}" class="w-16 h-16 object-contain">
                    <div class="flex-1">
                        <h4 class="font-medium text-black">${item.name}</h4>
                        <p class="text-xs text-zinc-500">${item.selectedSize} / ${getColorName(item.selectedColor)}</p>
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        <span class="font-bold text-sm">₺${(item.priceValue*item.quantity).toFixed(2)}</span>
                        <div class="flex items-center gap-2 bg-[#eeebdf] rounded-lg px-2 py-0.5 text-xs">
                            <button onclick="modQ('${item.variantId}',-1)">-</button><span>${item.quantity}</span><button onclick="modQ('${item.variantId}',1)">+</button>
                        </div>
                    </div>
                </div>`;
            }).join('');
            
            document.getElementById('cart-header-count').innerText = cart.reduce((a,b)=>a+b.quantity,0);
            
            // Totals
            const tax = subtotal * 0.2;
            const ship = subtotal >= 1000 ? 0 : 49.90;
            document.getElementById('summary-subtotal').innerText = `₺${subtotal.toFixed(2)}`;
            document.getElementById('summary-tax').innerText = `₺${tax.toFixed(2)}`;
            document.getElementById('summary-total').innerText = `₺${(subtotal+tax+ship).toFixed(2)}`;
            document.getElementById('summary-shipping').innerText = ship === 0 ? "Ücretsiz" : `₺${ship.toFixed(2)}`;
        }

        function modQ(vid, change) {
            const item = cart.find(x => x.variantId === vid);
            if(item) {
                item.quantity += change;
                if(item.quantity <= 0) cart = cart.filter(x => x.variantId !== vid);
                renderCart(); updateCartUI();
            }
        }

        function renderCheckout() {
            const list = document.getElementById('checkout-items-list');
            list.innerHTML = "";
            let sub = 0;
            cart.forEach(i => {
                sub += i.priceValue * i.quantity;
                list.innerHTML += `<div class="flex gap-4 items-center mb-4"><img src="${i.image}" class="w-10 h-10 object-contain"><div class="flex-1 text-sm"><p class="font-medium">${i.name}</p><p class="text-zinc-500">x${i.quantity}</p></div><span>₺${(i.priceValue*i.quantity).toFixed(2)}</span></div>`;
            });
            document.getElementById('checkout-item-count').innerText = cart.reduce((a,b)=>a+b.quantity,0);
            document.getElementById('checkout-total').innerText = `₺${(sub + (sub>=1000?0:49.90)).toFixed(2)}`;
        }

        function processPayment() {
            const btn = document.getElementById('btn-pay-text');
            const load = document.getElementById('btn-pay-loader');
            btn.innerText = 'İşleniyor...'; load.classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('order-number').innerText = Math.floor(100000 + Math.random() * 900000);
                navigateTo('success');
                btn.innerText = 'Siparişi Tamamla'; load.classList.add('hidden');
            }, 2000);
        }

        function getColorName(hex) { return hex==='#f0f0f0'?'Beyaz':(hex==='#1a1a1a'?'Siyah':(hex==='#f24f13'?'Turuncu':'Turkuaz')); }
        function changeColor(c) { document.querySelectorAll('.sock-image').forEach(i=>i.style.opacity='0'); document.getElementById('sock-'+c).style.opacity='1'; document.getElementById('bg-glow').style.backgroundColor = c==='white'?'rgba(23,166,166,0.2)':(c==='orange'?'rgba(242,79,19,0.2)':'rgba(0,0,0,0.2)'); }

        // Init
        window.addEventListener('load', () => navigateTo('home'));
        
        // Filter Interactions
        document.querySelectorAll('.custom-checkbox').forEach(cb => {
            cb.addEventListener('change', function() {
                // Visual toggle only for demo
                const div = this.nextElementSibling;
                const icon = div.querySelector('i');
                if(this.checked) { div.className="w-4 h-4 rounded border border-black bg-black flex items-center justify-center transition-all"; icon.classList.remove('hidden'); }
                else { div.className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all"; icon.classList.add('hidden'); }
            });
        });
        function resetFilters() { document.querySelectorAll('.custom-checkbox').forEach(c => { c.checked=false; c.dispatchEvent(new Event('change')); }); }
    
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
      

<header className="fixed top-0 left-0 w-full z-50 border-b border-black/5 backdrop-blur-xl bg-[#eeebdf]/80 transition-all duration-300">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2 group cursor-pointer focus:outline-none rounded-lg z-50" href="#" onclick="navigateTo('home'); return false;">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-[#f24f13] transition-colors duration-300">
<span className="font-semibold text-[#eeebdf] tracking-tighter">E</span>
</div>
<span className="font-semibold text-lg tracking-tight text-black">Ensokken.</span>
</a>
<nav className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-black/5 backdrop-blur-md absolute left-1/2 -translate-x-1/2">
<button className="nav-btn px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-zinc-500 hover:text-black hover:bg-white/50" id="nav-home" onclick="navigateTo('home')">Anasayfa</button>
<button className="nav-btn px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-zinc-500 hover:text-black hover:bg-white/50" id="nav-collection" onclick="navigateTo('collection')">Koleksiyon</button>
<button className="nav-btn px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-zinc-500 hover:text-black hover:bg-white/50" id="nav-about" onclick="navigateTo('about')">Hikaye</button>
<button className="nav-btn px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-zinc-500 hover:text-black hover:bg-white/50" id="nav-contact" onclick="navigateTo('contact')">İletişim</button>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Ara" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-zinc-600 hover:text-black" onclick="toggleSearch()">
<i data-lucide="search" height="18" width="18"></i>
</button>
<div className="relative group cursor-pointer" onclick="navigateTo('cart')" role="button">
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-zinc-600 hover:text-black">
<i data-lucide="shopping-bag" height="18" width="18"></i>
</button>
<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#f24f13] rounded-full text-[9px] flex items-center justify-center text-white opacity-0 transition-opacity font-bold" id="cart-count">0</span>
</div>
<button className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-zinc-600 hover:text-black ml-2" onclick="toggleMobileMenu()">
<i data-lucide="menu" height="20" width="20"></i>
</button>
</div>
</div>
</header>

<div aria-hidden="true" className="search-overlay fixed inset-0 z-[60] bg-black/20 backdrop-blur-md flex items-start justify-center pt-20 px-4" id="search-overlay">
<div className="absolute inset-0" onclick="toggleSearch()"></div>
<div className="search-content relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/5 ring-1 ring-black/5">
<div className="flex items-center gap-3 px-5 py-4 border-b border-black/5">
<i className="text-zinc-400 w-5 h-5" data-lucide="search"></i>
<input autocomplete="off" className="flex-1 bg-transparent border-none outline-none text-black placeholder-zinc-400 text-lg h-10" id="search-input" placeholder="Ürün, renk veya kategori ara..." type="text"/>
<button className="px-2 py-1 bg-zinc-100 rounded text-[10px] font-semibold text-zinc-500 border border-zinc-200 hover:bg-zinc-200 transition-colors" onclick="toggleSearch()">ESC</button>
</div>
<div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2 bg-[#fcfcfc]" id="search-results-container">
<div className="p-4" id="search-initial">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3 block">Popüler Aramalar</span>
<div className="flex gap-2 flex-wrap">
<button className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-sm text-zinc-600 hover:border-black/20 hover:text-black transition-colors" onclick="fillSearch('Essential')">Essential</button>
<button className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-sm text-zinc-600 hover:border-black/20 hover:text-black transition-colors" onclick="fillSearch('Orange')">Orange</button>
<button className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-sm text-zinc-600 hover:border-black/20 hover:text-black transition-colors" onclick="fillSearch('Black')">Midnight</button>
</div>
</div>
<div className="space-y-1 hidden" id="search-results-list"></div>
<div className="hidden p-10 flex flex-col items-center justify-center text-center" id="search-no-results">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 mb-3">
<i data-lucide="search-x" height="20" width="20"></i>
</div>
<p className="text-zinc-600 font-medium">Sonuç bulunamadı.</p>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="mobile-overlay fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden" id="mobile-menu" onclick="toggleMobileMenu()">
<div className="mobile-drawer absolute top-0 right-0 w-[280px] h-full bg-[#eeebdf] border-l border-black/5 shadow-2xl p-6 flex flex-col" onclick="event.stopPropagation()">
<div className="flex justify-between items-center mb-8">
<span className="font-bold text-xl tracking-tight">Menü</span>
<button className="p-2 hover:bg-black/5 rounded-full" onclick="toggleMobileMenu()">
<i data-lucide="x" height="24" width="24"></i>
</button>
</div>
<nav className="flex flex-col gap-4">
<button className="text-left text-lg font-medium py-3 border-b border-black/5 flex items-center gap-2" onclick="toggleSearch(); toggleMobileMenu();"><i data-lucide="search" height="18" width="18"></i> Arama Yap</button>
<button className="text-left text-lg font-medium py-3 border-b border-black/5" onclick="navigateTo('home'); toggleMobileMenu()">Anasayfa</button>
<button className="text-left text-lg font-medium py-3 border-b border-black/5" onclick="navigateTo('collection'); toggleMobileMenu()">Koleksiyon</button>
<button className="text-left text-lg font-medium py-3 border-b border-black/5" onclick="navigateTo('about'); toggleMobileMenu()">Hikaye</button>
<button className="text-left text-lg font-medium py-3 border-b border-black/5" onclick="navigateTo('contact'); toggleMobileMenu()">İletişim</button>
<button className="text-left text-lg font-medium py-3 border-b border-black/5 text-[#f24f13]" onclick="navigateTo('cart'); toggleMobileMenu()">Sepetim</button>
</nav>
</div>
</div>

<div aria-hidden="true" className="mobile-overlay fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden" id="mobile-filter-drawer" onclick="toggleFilterDrawer()">
<div className="mobile-drawer absolute top-0 right-0 w-[300px] h-full bg-[#eeebdf] border-l border-black/5 shadow-2xl p-6 flex flex-col overflow-y-auto" onclick="event.stopPropagation()">
<div className="flex justify-between items-center mb-6">
<h2 className="font-bold text-xl tracking-tight flex items-center gap-2"><i data-lucide="sliders-horizontal" height="18" width="18"></i> Filtreler</h2>
<button className="p-2 hover:bg-black/5 rounded-full" onclick="toggleFilterDrawer()">
<i data-lucide="x" height="24" width="24"></i>
</button>
</div>
<div id="mobile-filter-content">

</div>
<div className="mt-auto pt-6 border-t border-black/5">
<button className="w-full py-3 bg-black text-white rounded-xl font-medium" onclick="toggleFilterDrawer()">Sonuçları Gör</button>
</div>
</div>
</div>

<div className="pt-16 flex-grow relative">

<div className="hidden-page fade-in" id="page-home">
<div className="max-w-7xl mx-auto px-6">
<section className="min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden py-12 lg:py-0 border-b border-black/5">
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f24f13]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#17a6a6]/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
<div className="flex-1 z-10 flex flex-col items-start justify-center space-y-8 lg:pr-12 order-2 lg:order-1 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 border border-black/5 rounded-full backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17a6a6] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#17a6a6]"></span>
</span>
<span className="text-xs font-semibold text-zinc-800 uppercase tracking-wide">Yeni Sezon</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-black tracking-tight leading-[1.05]">
                            Adımlarınız için <br/>
<span className="text-zinc-400">mükemmel temel.</span>
</h1>
<p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-normal">
                            İskandinav minimalizmi ile üstün konforu birleştiren premium organik pamuk çoraplar. Gün boyu süren yumuşaklığı keşfedin.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
<button className="group relative px-8 py-4 bg-black text-white font-medium rounded-full overflow-hidden transition-all hover:bg-[#222] shadow-xl shadow-black/10 active:scale-95" onclick="navigateTo('collection')">
<span className="relative flex items-center justify-center gap-2">
                                    Koleksiyonu İncele 
                                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 bg-white text-black font-medium rounded-full border border-black/5 hover:border-black/20 transition-all hover:bg-gray-50" onclick="navigateTo('about')">
                                Hikayemiz
                            </button>
</div>
</div>
<div className="flex-1 w-full h-[400px] lg:h-[600px] flex items-center justify-center relative order-1 lg:order-2 stage-3d z-20" id="scene-container">
<div className="card-3d relative w-[300px] h-[440px] lg:w-[340px] lg:h-[500px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-2xl shadow-black/5 cursor-grab active:cursor-grabbing" id="card">
<div className="absolute inset-0 overflow-hidden rounded-[2.5rem] layer-base">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#17a6a6]/20 blur-[60px] rounded-full transition-colors duration-700" id="bg-glow"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center layer-mid pointer-events-none">
<img alt="White Sock" className="sock-image absolute w-[260px] lg:w-[300px] object-contain drop-shadow-2xl z-20" id="sock-white" src="https://i.ibb.co/6RdqX3G0/Chat-GPT-mage-18-Ara-2025-02-52-44.png"/>
<img alt="Orange Sock" className="sock-image absolute w-[260px] lg:w-[300px] object-contain drop-shadow-2xl opacity-0 z-10" id="sock-orange" src="https://i.ibb.co/HT9tPqGp/Chat-GPT-mage-18-Ara-2025-03-02-28.png"/>
<img alt="Black Sock" className="sock-image absolute w-[260px] lg:w-[300px] object-contain drop-shadow-2xl opacity-0 z-10" id="sock-black" src="https://i.ibb.co/4wj5mHtM/Chat-GPT-mage-18-Ara-2025-02-57-54.png"/>
</div>
<div className="absolute bottom-8 left-0 w-full px-8 layer-top">
<div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg flex justify-between items-center">
<div className="flex gap-3">
<button className="w-6 h-6 rounded-full bg-[#f0f0f0] border border-zinc-300 hover:scale-110 transition-transform focus:outline-none ring-2 ring-transparent focus:ring-black/10" onclick="changeColor('white', event)"></button>
<button className="w-6 h-6 rounded-full bg-[#f24f13] border border-[#f24f13] hover:scale-110 transition-transform focus:outline-none ring-2 ring-transparent focus:ring-black/10" onclick="changeColor('orange', event)"></button>
<button className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#1a1a1a] hover:scale-110 transition-transform focus:outline-none ring-2 ring-transparent focus:ring-black/10" onclick="changeColor('black', event)"></button>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">The Essential</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="hidden-page fade-in" id="page-collection">
<main className="py-12 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12">

<aside className="hidden lg:block w-64 shrink-0 sticky top-24 h-fit space-y-8" id="desktop-filters">
<div className="flex items-center justify-between pb-4 border-b border-black/5">
<h2 className="font-semibold text-lg tracking-tight flex items-center gap-2"><i data-lucide="sliders-horizontal" height="16" width="16"></i> Filtreler</h2>
<button className="text-xs text-zinc-500 hover:text-black underline" onclick="resetFilters()">Temizle</button>
</div>

<div id="filter-content-source">

<div className="space-y-4 mb-8">
<div className="flex items-center justify-between cursor-pointer group">
<p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Kategori</p>
<i className="text-zinc-400 group-hover:text-black transition-colors" data-lucide="chevron-down" height="14" width="14"></i>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input checked="" className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-all">
<i className="hidden text-white" data-lucide="check" height="10" width="10"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-black transition-colors">Tüm Çoraplar</span>
<span className="ml-auto text-xs text-zinc-400">40</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-all">
<i className="hidden text-white" data-lucide="check" height="10" width="10"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-black transition-colors">Erkek</span>
<span className="ml-auto text-xs text-zinc-400">18</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-all">
<i className="hidden text-white" data-lucide="check" height="10" width="10"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-black transition-colors">Kadın</span>
<span className="ml-auto text-xs text-zinc-400">22</span>
</label>
</div>
</div>

<div className="space-y-4 mb-8 pt-4 border-t border-black/5">
<p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Renk</p>
<div className="flex flex-wrap gap-3">
<button className="w-6 h-6 rounded-full bg-black border border-black/10 ring-2 ring-transparent hover:ring-black/20 focus:ring-black/40 transition-all" title="Siyah"></button>
<button className="w-6 h-6 rounded-full bg-white border border-zinc-200 ring-2 ring-transparent hover:ring-black/20 focus:ring-black/40 transition-all" title="Beyaz"></button>
<button className="w-6 h-6 rounded-full bg-[#f24f13] border border-black/5 ring-2 ring-transparent hover:ring-black/20 focus:ring-black/40 transition-all" title="Turuncu"></button>
<button className="w-6 h-6 rounded-full bg-[#17a6a6] border border-black/5 ring-2 ring-transparent hover:ring-black/20 focus:ring-black/40 transition-all" title="Turkuaz"></button>
<button className="w-6 h-6 rounded-full bg-zinc-500 border border-black/5 ring-2 ring-transparent hover:ring-black/20 focus:ring-black/40 transition-all" title="Gri"></button>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-black/5">
<p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Fiyat</p>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-all">
<i className="hidden text-white" data-lucide="check" height="10" width="10"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-black transition-colors">₺0 - ₺200</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-all">
<i className="hidden text-white" data-lucide="check" height="10" width="10"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-black transition-colors">₺200 - ₺400</span>
</label>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-black/5 gap-4">
<div>
<h1 className="text-2xl font-semibold text-black tracking-tight">Koleksiyon</h1>
<span className="text-sm text-zinc-500 mt-1 block">Toplam 40 Ürün</span>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">

<button className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-lg border border-black/5 hover:border-black/20 transition-colors shadow-sm text-black" onclick="toggleFilterDrawer()">
<i data-lucide="sliders-horizontal" height="14" width="14"></i> Filtrele
                                </button>
<div className="relative z-20 flex-1 sm:flex-none">
<button className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-lg border border-black/5 hover:border-black/20 transition-colors shadow-sm focus:outline-none focus:border-black/30 w-full sm:w-44 justify-between text-zinc-600" onclick="document.getElementById('sort-dropdown').classList.toggle('hidden')">
<span id="current-sort">Önerilen</span>
<i data-lucide="chevron-down" height="14" width="14"></i>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-black/5 shadow-xl p-1.5 flex flex-col gap-0.5 z-30 animate-in fade-in zoom-in-95 duration-200" id="sort-dropdown">
<button className="text-left px-3 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-medium" onclick="updateSort('Önerilen')">Önerilen</button>
<button className="text-left px-3 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-medium" onclick="updateSort('En Yeniler')">En Yeniler</button>
<button className="text-left px-3 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-medium" onclick="updateSort('Fiyat: Artan')">Fiyat: Artan</button>
<button className="text-left px-3 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-medium" onclick="updateSort('Fiyat: Azalan')">Fiyat: Azalan</button>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10" id="product-grid"></div>

<div className="mt-16 flex items-center justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/5 bg-white text-zinc-400 cursor-not-allowed" disabled="" id="prev-page" onclick="changePage(1)">
<i data-lucide="chevron-left" height="16" width="16"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-black bg-black text-white font-medium text-sm transition-colors" id="btn-page-1" onclick="changePage(1)">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/5 bg-white text-zinc-600 hover:border-black/20 font-medium text-sm transition-colors" id="btn-page-2" onclick="changePage(2)">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/5 bg-white text-zinc-600 hover:border-black/20 hover:text-black transition-colors" id="next-page" onclick="changePage(2)">
<i data-lucide="chevron-right" height="16" width="16"></i>
</button>
</div>
<div className="text-center mt-4 text-xs text-zinc-400">
<span id="showing-text">1-20</span> / 40 ürün gösteriliyor
                        </div>
</div>
</div>
</main>
</div>

<div className="hidden-page fade-in" id="page-product-detail">
<main className="py-12 px-6 max-w-7xl mx-auto">
<button className="mb-8 text-sm text-zinc-500 hover:text-black flex items-center gap-1" onclick="navigateTo('collection')"><i data-lucide="arrow-left" height="14" width="14"></i> Koleksiyona Dön</button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
<div className="flex flex-col gap-4">
<div className="aspect-[4/5] bg-white rounded-[2.5rem] border border-black/5 flex items-center justify-center p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[#f0f0f0] opacity-30 transition-colors duration-500" id="detail-bg-effect"></div>
<img alt="Product Detail" className="w-full h-full object-contain drop-shadow-xl z-10 transition-all duration-500" id="detail-img" src=""/>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" id="detail-thumbnails"></div>
</div>
<div className="flex flex-col justify-start">
<h1 className="text-4xl font-semibold text-black tracking-tight mb-2" id="detail-title">Essential White.</h1>
<p className="text-zinc-500 mb-4 text-lg">Unisex Organik Çorap</p>
<div className="flex items-center gap-4 mb-6">
<span className="text-3xl font-medium text-black" id="detail-price">₺260.00</span>
</div>
<div className="prose prose-sm text-zinc-600 leading-relaxed mb-8" id="detail-desc"></div>
<div className="space-y-8 border-t border-black/5 pt-8">
<div>
<span className="text-sm font-medium text-black mb-3 block">Renk Seçimi</span>
<div className="flex gap-3" id="detail-color-container"></div>
</div>
<div>
<span className="text-sm font-medium text-black mb-3 block">Beden Seçimi</span>
<div className="grid grid-cols-3 gap-3" id="detail-size-container">
<button className="py-3 rounded-xl border border-black/10 bg-white text-black hover:border-black transition-all text-sm font-medium" id="size-btn-36-39" onclick="selectDetailSize('36-39')">36-39</button>
<button className="py-3 rounded-xl border border-black/10 bg-white text-black hover:border-black transition-all text-sm font-medium" id="size-btn-40-43" onclick="selectDetailSize('40-43')">40-43</button>
<button className="py-3 rounded-xl border border-black/10 bg-white text-black hover:border-black transition-all text-sm font-medium" id="size-btn-44-46" onclick="selectDetailSize('44-46')">44-46</button>
</div>
</div>
<button className="w-full py-4 bg-[#f24f13] hover:bg-[#d63f0a] text-white rounded-xl font-medium shadow-lg shadow-[#f24f13]/20 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg" onclick="addToCartCurrent()">
                                Sepete Ekle <i data-lucide="shopping-bag" height="20" width="20"></i>
</button>
<div className="space-y-4 pt-4">
<details className="group border-b border-black/5 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-black">
                                        Ürün Özellikleri
                                        <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                                        %85 Organik Pamuk, %13 Poliamid, %2 Elastan. <br/>
                                        Nefes alabilen özel örgü teknolojisi.
                                    </p>
</details>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden-page fade-in" id="page-cart">
<main className="py-12 px-6 max-w-7xl mx-auto">
<header className="mb-10">
<h1 className="text-3xl font-semibold text-black tracking-tight mb-2">Sepetim (<span id="cart-header-count">0</span>)</h1>
<p className="text-zinc-500">Siparişiniz için teşekkürler, harika bir seçim.</p>
</header>
<div className="flex flex-col lg:flex-row gap-12">
<div className="flex-1 space-y-6">
<div className="bg-white p-5 rounded-2xl border border-black/5 flex items-center gap-4 shadow-sm hidden" id="shipping-progress-container">
<div className="w-10 h-10 rounded-full bg-[#eeebdf] flex items-center justify-center text-[#f24f13] shrink-0">
<i data-lucide="truck" height="20" width="20"></i>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-black">Ücretsiz kargo hedefine</span>
<span className="text-zinc-400" id="shipping-text">₺280 kaldı</span>
</div>
<div className="h-1.5 w-full bg-[#eeebdf] rounded-full overflow-hidden">
<div className="h-full bg-black w-[0%] rounded-full transition-all duration-500" id="shipping-bar"></div>
</div>
</div>
</div>
<div className="hidden flex flex-col items-center justify-center py-20 text-center" id="cart-empty-state">
<div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mb-4 text-zinc-300">
<i data-lucide="shopping-bag" height="32" width="32"></i>
</div>
<h3 className="text-lg font-semibold text-black mb-1">Sepetiniz Boş</h3>
<button className="mt-4 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-[#222] transition-colors" onclick="navigateTo('collection')">
                                Alışverişe Başla
                            </button>
</div>
<div className="space-y-4" id="cart-items-wrapper"></div>
</div>
<div className="lg:w-96 shrink-0" id="cart-summary-box">
<div className="bg-white p-6 rounded-[2rem] border border-black/5 sticky top-24">
<h3 className="font-semibold text-lg text-black mb-6">Sipariş Özeti</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-zinc-600 text-sm">
<span>Ara Toplam</span>
<span id="summary-subtotal">₺0.00</span>
</div>
<div className="flex justify-between text-zinc-600 text-sm">
<span>Kargo</span>
<span className="text-[#17a6a6] font-medium" id="summary-shipping">--</span>
</div>
<div className="flex justify-between text-zinc-600 text-sm">
<span>Vergi (%20)</span>
<span id="summary-tax">₺0.00</span>
</div>
</div>
<div className="flex justify-between items-center text-lg font-bold text-black border-t border-black/5 pt-4 mb-6">
<span>Toplam</span>
<span id="summary-total">₺0.00</span>
</div>
<button className="w-full py-4 bg-black text-white rounded-xl font-medium shadow-xl shadow-black/10 active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-[#222]" onclick="navigateTo('checkout')">
                                Ödemeye Geç <i data-lucide="arrow-right" height="16" width="16"></i>
</button>
</div>
</div>
</div>
</main>
</div>

<div className="hidden-page fade-in" id="page-checkout">
<main className="py-10 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
<div className="flex-1 space-y-10">
<nav className="flex items-center gap-2 text-sm">
<button className="text-zinc-500 hover:text-black" onclick="navigateTo('cart')">Sepet</button>
<i className="text-zinc-300" data-lucide="chevron-right" height="14" width="14"></i>
<span className="font-semibold text-black">Ödeme</span>
</nav>
<div className="space-y-4">
<h2 className="text-lg font-semibold tracking-tight text-black">İletişim &amp; Adres</h2>
<input className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-black transition-all" placeholder="E-posta Adresi" type="email"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-black transition-all" placeholder="Ad" type="text"/>
<input className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-black transition-all" placeholder="Soyad" type="text"/>
<input className="w-full md:col-span-2 bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-black transition-all" placeholder="Adres" type="text"/>
<input className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-black transition-all" placeholder="Şehir" type="text"/>
</div>
</div>
<div className="space-y-4 pt-6 border-t border-black/5">
<h2 className="text-lg font-semibold tracking-tight text-black">Ödeme</h2>
<div className="bg-white border border-black/10 rounded-xl p-4 space-y-4">
<input className="w-full bg-transparent border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-all" placeholder="Kart Numarası" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-transparent border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-all" placeholder="AA/YY" type="text"/>
<input className="w-full bg-transparent border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-all" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<button className="w-full py-5 bg-black text-white rounded-xl font-medium shadow-xl shadow-black/10 active:scale-95 transition-all text-lg hover:bg-[#222] flex justify-center items-center" onclick="processPayment()">
<span id="btn-pay-text">Siparişi Tamamla</span>
<div className="loader hidden ml-2 border-white border-t-transparent" id="btn-pay-loader"></div>
</button>
</div>
<div className="w-full lg:w-[400px] shrink-0 bg-[#f9f9f9] lg:bg-transparent rounded-[2rem] p-6 lg:p-0 h-fit lg:sticky lg:top-24 border border-black/5 lg:border-none">
<div className="lg:bg-white lg:p-8 lg:rounded-[2rem] lg:border lg:border-black/5 lg:shadow-sm">
<h3 className="font-semibold text-black mb-6 flex items-center gap-2">
                                Sipariş Özeti 
                                <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full" id="checkout-item-count">0</span>
</h3>
<div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar" id="checkout-items-list"></div>
<div className="space-y-3 pt-6 border-t border-black/5">
<div className="flex justify-between text-sm text-zinc-600">
<span>Ara Toplam</span>
<span id="checkout-subtotal">₺0.00</span>
</div>
<div className="flex justify-between items-center text-lg font-bold text-black pt-4 border-t border-black/5 mt-4">
<span>Toplam</span>
<span id="checkout-total">₺0.00</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden-page fade-in" id="page-success">
<main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
<div className="w-24 h-24 bg-[#17a6a6] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-[#17a6a6]/20 animate-bounce">
<i className="text-white w-12 h-12" data-lucide="check"></i>
</div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-black mb-4">Siparişiniz Alındı!</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-md">
                    Sipariş numaranız <strong className="text-black">#ENS<span id="order-number">1234</span></strong>.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#222] transition-all" onclick="navigateTo('collection'); cart=[]; updateCartCount();">Alışverişe Devam Et</button>
</div>
</main>
</div>

<div className="hidden-page fade-in" id="page-about"><main className="py-16 px-6 max-w-7xl mx-auto text-center"><h1 className="text-4xl font-bold">Hikayemiz</h1></main></div>
<div className="hidden-page fade-in" id="page-contact"><main className="py-16 px-6 max-w-7xl mx-auto text-center"><h1 className="text-4xl font-bold">İletişim</h1></main></div>
</div>

<footer className="bg-white border-t border-black/5 pt-16 pb-8 mt-auto relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center"><span className="font-semibold text-[#eeebdf] text-xs">E</span></div>
<span className="font-semibold text-base tracking-tight text-black">Ensokken.</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">İskandinav minimalizmi.</p>
</div>
<div>
<h4 className="font-semibold text-black text-sm mb-4">Alışveriş</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><button className="hover:text-black" onclick="navigateTo('collection')">Koleksiyon</button></li>
</ul>
</div>
</div>
<div className="border-t border-black/5 pt-8 flex justify-between items-center"><p className="text-xs text-zinc-400">© 2024 Ensokken.</p></div>
</div>
</footer>


    </>
  );
}
