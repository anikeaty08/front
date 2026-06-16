import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // ========================
    // DATA & CONFIG
    // ========================
    const L = {
        de: {
            cats: { shisha: 'Shisha', mixes: 'Mixes', drinks: 'Drinks', snacks: 'Snacks' },
            service: { waiter: 'Kellner gerufen', coal: 'Neue Kohle angefordert', bill: 'Rechnung angefordert' },
            cart: { label: 'Bestellung', empty: 'Leer', prep: 'Senden an Bar' }
        },
        en: {
            cats: { shisha: 'Hookah', mixes: 'Mixes', drinks: 'Drinks', snacks: 'Snacks' },
            service: { waiter: 'Waiter called', coal: 'Coal requested', bill: 'Bill requested' },
            cart: { label: 'Current Order', empty: 'Empty', prep: 'Send to Bar' }
        }
    };

    const ITEMS = [
        // SHISHA
        { id:'s5', cat:'shisha', name:'Pistachio Breeze', price:22, img:'https://images.unsplash.com/photo-1632205561914-f58444a1e944?auto=format&fit=crop&q=80&w=800', tags:['premium','neu'], hook:'Ein Dessert im Rauchformat.', desc:{de:'Cremige Pistazie mit sanfter Vanille. Unser exklusivster Tabak für Kenner.', en:'Creamy pistachio with soft vanilla. Exclusive tobacco for connoisseurs.'}, attr:{s:8,i:2,st:6} },
        { id:'s2', cat:'shisha', name:'Black Nana', price:19.5, img:'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80', tags:['bestseller'], hook:'Der stärkste Traube-Minze Mix.', desc:{de:'Dunkle Traube trifft auf authentische marokkanische Minze. Intensiv und herb.', en:'Dark grape meets authentic Moroccan mint. Intense and tart.'}, attr:{s:4,i:6,st:9} },
        { id:'s1', cat:'shisha', name:'Love 66', price:18, img:'https://images.unsplash.com/photo-1542456486-13a8c3e2db5d?w=600&q=80', tags:['beliebt'], hook:'Der Klassiker schlechthin.', desc:{de:'Honigmelone, Wassermelone, Maracuja und ein Hauch frischer Minze.', en:'Honeydew, watermelon, passion fruit and a hint of mint.'}, attr:{s:7,i:4,st:3} },
        { id:'s3', cat:'shisha', name:'Lady Killer', price:18, img:'https://images.unsplash.com/photo-1618397941444-48601832103a?w=600&q=80', tags:[], hook:'Fruchtig, süß, sommerlich.', desc:{de:'Mango, Pfirsich und kühle Minze. Absoluter Publikumsliebling im Sommer.', en:'Mango, peach and cool mint. Summer favorite.'}, attr:{s:8,i:5,st:4} },
        
        // MIXES
        { id:'m1', cat:'mixes', name:'Citrus Explode', price:24, img:'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&q=80', tags:['staff pick'], hook:'Sauer macht lustig.', desc:{de:'Zitrone, Limette, Grapefruit und Ice. Sehr frisch.', en:'Lemon, lime, grapefruit and ice. Very fresh.'} },
        
        // DRINKS - Soft
        { id:'d1', cat:'drinks', name:'Homemade Ice Tea', price:6.5, img:'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80', tags:['bestseller'], hook:'Frisch aufgebrüht.', desc:{de:'Pfirsich-Tee mit Zitrone und Minze auf Crushed Ice.', en:'Peach tea with lemon and mint on crushed ice.'} },
        { id:'d_coke', cat:'drinks', name:'Coca-Cola Zero', price:4.5, img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80', tags:[], hook:'Eiskalt, 0.33l', desc:{de:'Der Klassiker ohne Zucker. Serviert mit Zitrone.', en:'Classic taste, zero sugar. Served with lemon.'} },
        { id:'d_redbull', cat:'drinks', name:'Red Bull', price:5.0, img:'https://images.unsplash.com/photo-1598380120239-015822dd6276?w=600&q=80', tags:[], hook:'Energy Drink', desc:{de:'Belebt Geist und Körper.', en:'Vitalizes body and mind.'} },
        { id:'d_water', cat:'drinks', name:'VOSS Water', price:6.5, img:'https://images.unsplash.com/photo-1563640237722-e1e35d1f04db?w=600&q=80', tags:['premium'], hook:'Still / Sparkling, 0.5l', desc:{de:'Premium Wasser aus Norwegen.', en:'Premium artesian water from Norway.'} },
        
        // DRINKS - Hot
        { id:'d_tea', cat:'drinks', name:'Moroccan Mint', price:5.5, img:'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80', tags:['hot'], hook:'Frischer Minztee', desc:{de:'Traditionell serviert mit frischer Minze und Zucker.', en:'Served traditionally with fresh mint leaves.'} },
        { id:'d_coffee', cat:'drinks', name:'Espresso Doppio', price:3.5, img:'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80', tags:['hot'], hook:'Double Shot', desc:{de:'Starker, italienischer Espresso.', en:'Strong Italian espresso.'} },

        // DRINKS - Alcohol
        { id:'d2', cat:'drinks', name:'Midnight Mule', price:11, img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80', tags:['alkohol','signature'], hook:'Spicy & Fresh.', desc:{de:'Wodka, Spicy Ginger Beer, Gurke & Holunderblüte.', en:'Vodka, spicy ginger beer, cucumber & elderflower.'} },
        { id:'d_mojito', cat:'drinks', name:'Classic Mojito', price:12, img:'https://images.unsplash.com/photo-1551538827-9c037cb485da?w=600&q=80', tags:['alkohol'], hook:'Cuban Classic.', desc:{de:'Weißer Rum, frische Limette, Minze, Rohrzucker.', en:'White rum, fresh lime, mint, cane sugar.'} },
        { id:'d_aperol', cat:'drinks', name:'Aperol Spritz', price:9.5, img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80', tags:['alkohol','beliebt'], hook:'Summer Vibes.', desc:{de:'Aperol, Prosecco, Soda und Orange.', en:'Aperol, Prosecco, Soda and orange slice.'} },
        { id:'d_sour', cat:'drinks', name:'Whiskey Sour', price:13, img:'https://images.unsplash.com/photo-1629247648356-83210e363162?w=600&q=80', tags:['alkohol','strong'], hook:'Smooth & Tasty.', desc:{de:'Bourbon, Zitrone, Zucker, Eiweiß.', en:'Bourbon, lemon, sugar, egg white.'} },

        // SNACKS
        { id:'sn_nachos', cat:'snacks', name:'Nachos Supreme', price:9.5, img:'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80', tags:['share'], hook:'Mit Käse überbacken.', desc:{de:'Warme Nachos mit Cheddar Sauce, Jalapeños und Salsa Dip.', en:'Warm nachos with cheddar sauce, jalapeños and salsa dip.'} },
        { id:'sn_fruits', cat:'snacks', name:'Exotic Fruit Plate', price:16, img:'https://images.unsplash.com/photo-1615486511484-92e57bb6eb64?w=600&q=80', tags:['premium','healthy'], hook:'Frische Früchte.', desc:{de:'Saisonaler Mix aus Melone, Beeren, Ananas und Drachenfrucht.', en:'Seasonal mix of melon, berries, pineapple and dragon fruit.'} },
        { id:'sn_popcorn', cat:'snacks', name:'Truffle Popcorn', price:6.5, img:'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=600&q=80', tags:['beliebt'], hook:'Hausgemacht.', desc:{de:'Frisches Popcorn verfeinert mit Trüffelöl und Parmesan.', en:'Fresh popcorn refined with truffle oil and parmesan.'} },
        { id:'sn_nuts', cat:'snacks', name:'Roasted Nuts', price:4.5, img:'https://images.unsplash.com/photo-1536591375315-1988d6960545?w=600&q=80', tags:[], hook:'Bar Klassiker.', desc:{de:'Gerösteter Nussmix, leicht gesalzen.', en:'Roasted nut mix, lightly salted.'} }
    ];

    let lang = 'de';
    let cat = 'shisha';
    let cart = [];
    let detailItem = null;
    let detailQty = 1;
    let serviceTimer = null;
    let isSearchOpen = false;

    const $ = id => document.getElementById(id);
    const t = () => L[lang];

    // ========================
    // RENDER LOGIC
    // ========================
    function init() {
        renderCats();
        renderProducts();
        updateUI();
    }

    function updateUI() {
        $('lang-toggle').textContent = lang.toUpperCase();
        $('cart-btn-label').textContent = t().cart.label;
        const total = cart.reduce((a,b)=>a+b.price*b.qty,0);
        const count = cart.reduce((a,b)=>a+b.qty,0);
        
        $('cart-badge').textContent = count;
        $('cart-badge').style.transform = count > 0 ? 'scale(1)' : 'scale(0)';
        
        $('cart-btn-total').textContent = `€${total.toFixed(2)}`;
        $('cart-status').textContent = count > 0 ? `${count} Items` : t().cart.empty;
        $('cart-total-btn').textContent = `€${total.toFixed(2)}`;
        
        // Button state
        const btn = $('order-btn');
        btn.disabled = count === 0;
        if(count > 0) {
            btn.classList.remove('opacity-50');
        } else {
            btn.classList.add('opacity-50');
        }
    }

    function renderCats() {
        const cats = Object.keys(t().cats);
        const icons = { shisha:'solar:fire-bold', mixes:'solar:magic-stick-3-bold', drinks:'solar:cup-bold', snacks:'solar:donut-bold' };
        
        $('cat-tabs').innerHTML = cats.map(c => {
            const active = cat === c;
            const bgClass = active ? 'bg-white text-black shadow-lg shadow-white/10' : 'bg-zinc-900 text-zinc-500 border border-white/5';
            return `<button onclick="setCat('${c}')" class="flex-none flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${bgClass}">
                <iconify-icon icon="${icons[c]}" width="16"></iconify-icon>
                ${t().cats[c]}
            </button>`;
        }).join('');
    }

    function renderProducts() {
        const query = $('search-input').value.toLowerCase();
        let items = ITEMS.filter(i => i.cat === cat);
        
        if (query) {
             items = ITEMS.filter(i => i.name.toLowerCase().includes(query) || i.hook.toLowerCase().includes(query));
             $('section-title').textContent = query ? 'Suchergebnisse' : t().cats[cat];
        } else {
            $('section-title').textContent = t().cats[cat];
        }

        const featured = items.filter(i => i.tags.includes('premium') || i.tags.includes('bestseller') || i.tags.includes('signature'));
        const standard = items.filter(i => !featured.includes(i));
        
        $('featured-list').innerHTML = featured.map(p => {
            const isPrem = p.tags.includes('premium');
            const css = isPrem ? 'card-premium' : 'card-standard bg-zinc-900';
            let badge = '';
            
            if (isPrem) {
                badge = `<div class="absolute top-3 left-3 px-2 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md">Premium</div>`;
            } else if (p.tags.includes('bestseller')) {
                 badge = `<div class="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-md shadow-lg shadow-red-500/40 flex gap-1 items-center"><iconify-icon icon="solar:flame-bold"></iconify-icon> Hot</div>`;
            } else if (p.tags.includes('signature')) {
                 badge = `<div class="absolute top-3 left-3 px-2 py-1 bg-violet-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-md shadow-lg shadow-violet-500/40">Signature</div>`;
            }
            
            return `<div onclick="openProduct('${p.id}')" class="relative rounded-3xl p-1 ${css} active:scale-[0.98] transition-transform">
                <div class="flex gap-4 p-3">
                    <div class="w-24 h-24 flex-none rounded-2xl img-box">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg">
                        ${badge}
                    </div>
                    <div class="flex-1 py-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <h3 class="font-bold text-white text-base truncate">${p.name}</h3>
                            <p class="text-xs text-zinc-400 mt-1 line-clamp-2">${p.hook}</p>
                        </div>
                        <div class="flex justify-between items-end mt-2">
                            <span class="font-mono font-bold text-white">€${p.price.toFixed(2)}</span>
                            <button class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                <iconify-icon icon="solar:add-bold" width="16"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        $('product-list').innerHTML = standard.map((p, i) => `
            <div onclick="openProduct('${p.id}')" class="card-standard rounded-2xl p-3 flex items-center gap-4 active:scale-[0.98] transition-transform">
                <div class="w-16 h-16 rounded-xl img-box flex-none">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg">
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="font-bold text-white text-sm truncate">${p.name}</h3>
                    <p class="text-[11px] text-zinc-500 mt-0.5 truncate">${p.hook}</p>
                    <span class="font-mono font-bold text-xs text-white mt-1 block">€${p.price.toFixed(2)}</span>
                </div>
                <button class="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 border border-white/5 flex items-center justify-center">
                    <iconify-icon icon="solar:add-bold" width="16"></iconify-icon>
                </button>
            </div>
        `).join('');
    }

    // ========================
    // INTERACTION LOGIC
    // ========================
    function setCat(c) { 
        cat = c; 
        $('search-input').value = ''; // clear search when changing cat
        renderCats(); 
        renderProducts(); 
        $('main-content').scrollTo({top:0, behavior:'smooth'});
    }

    function toggleSearch() {
        isSearchOpen = !isSearchOpen;
        const con = $('search-container');
        const trigger = $('search-trigger');
        const input = $('search-input');
        
        if (isSearchOpen) {
            con.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
            trigger.classList.add('bg-white', 'text-black');
            trigger.classList.remove('glass', 'text-zinc-400');
            setTimeout(() => input.focus(), 100);
        } else {
            con.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
            trigger.classList.remove('bg-white', 'text-black');
            trigger.classList.add('glass', 'text-zinc-400');
            input.value = '';
            input.blur();
            handleSearch();
        }
    }

    function handleSearch() {
        renderProducts();
    }

    function toggleLang() {
        lang = lang === 'de' ? 'en' : 'de';
        init();
    }

    function openProduct(id) {
        detailItem = ITEMS.find(x => x.id === id);
        detailQty = 1;
        
        $('dm-img').src = detailItem.img;
        $('dm-name').textContent = detailItem.name;
        $('dm-price').textContent = `€${detailItem.price.toFixed(2)}`;
        $('dm-hook').textContent = detailItem.hook;
        $('dm-desc').textContent = detailItem.desc[lang];
        
        $('dm-profile').classList.toggle('hidden', !detailItem.attr);
        if(detailItem.attr) {
            ['sweet','ice','str'].forEach(k => document.getElementById(`bar-${k}`).style.width = '0%');
            setTimeout(() => {
                $('bar-sweet').style.width = (detailItem.attr.s * 10) + '%';
                $('bar-ice').style.width = (detailItem.attr.i * 10) + '%';
                $('bar-str').style.width = (detailItem.attr.st * 10) + '%';
            }, 300);
        }

        $('dm-tags').innerHTML = detailItem.tags.map(t => 
            `<span class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase text-zinc-400">${t}</span>`
        ).join('');
        
        updateDetailCalc();
        $('detail-modal').style.transform = 'translateY(0)';
    }

    function closeDetail() {
        $('detail-modal').style.transform = 'translateY(100%)';
    }

    function adjQty(d) {
        detailQty = Math.max(1, detailQty + d);
        updateDetailCalc();
    }

    function updateDetailCalc() {
        $('dm-qty').textContent = detailQty;
        $('dm-total').textContent = `€${(detailItem.price * detailQty).toFixed(2)}`;
    }

    function addToCart() {
        const existing = cart.find(c => c.id === detailItem.id);
        if(existing) existing.qty += detailQty;
        else cart.push({...detailItem, qty: detailQty, cid: Date.now()});
        
        closeDetail();
        updateUI();
    }

    function openCart() {
        if(cart.length === 0) return;
        renderCartItems();
        $('cart-modal').style.transform = 'translateY(0)';
    }

    function closeCart() {
        $('cart-modal').style.transform = 'translateY(100%)';
    }

    function renderCartItems() {
        $('cart-items').innerHTML = cart.map((item, idx) => `
            <div class="flex gap-4 items-center">
                <div class="w-16 h-16 rounded-xl img-box flex-none">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg">
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-white text-sm">${item.name}</h4>
                    <span class="text-xs text-zinc-500">€${item.price.toFixed(2)} / Stk.</span>
                </div>
                <div class="flex flex-col items-end gap-2">
                    <span class="font-mono font-bold text-sm">€${(item.price*item.qty).toFixed(2)}</span>
                    <div class="flex items-center bg-zinc-800 rounded-lg h-8">
                        <button onclick="updateCartItem(${item.cid}, -1)" class="w-8 h-full flex items-center justify-center text-zinc-400 hover:text-white"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
                        <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                        <button onclick="updateCartItem(${item.cid}, 1)" class="w-8 h-full flex items-center justify-center text-zinc-400 hover:text-white"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function updateCartItem(cid, d) {
        const item = cart.find(c => c.cid === cid);
        item.qty += d;
        if(item.qty <= 0) cart = cart.filter(c => c.cid !== cid);
        if(cart.length === 0) closeCart();
        else renderCartItems();
        updateUI();
    }

    function placeOrder() {
        $('order-btn').innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="24"></iconify-icon>`;
        setTimeout(() => {
            closeCart();
            cart = [];
            updateUI();
            $('order-btn').innerHTML = `<span id="order-btn-text">Kostenpflichtig bestellen</span>`;
            $('success-modal').classList.remove('hidden');
        }, 1500);
    }

    function closeSuccess() {
        $('success-modal').classList.add('hidden');
    }

    // ========================
    // SERVICE LOGIC
    // ========================
    function openService() {
        $('service-modal').classList.remove('pointer-events-none', 'opacity-0');
        $('service-sheet').classList.remove('translate-y-full');
    }

    function closeService() {
        $('service-sheet').classList.add('translate-y-full');
        $('service-modal').classList.add('opacity-0');
        setTimeout(() => $('service-modal').classList.add('pointer-events-none'), 300);
    }

    function triggerService(type) {
        closeService();
        const toast = $('service-toast');
        const bar = $('st-bar');
        
        // Reset Animation
        bar.classList.remove('progress-bar');
        void bar.offsetWidth; // trigger reflow
        
        $('st-title').textContent = t().service[type];
        
        toast.classList.remove('translate-y-24');
        bar.classList.add('progress-bar');
        
        clearTimeout(serviceTimer);
        serviceTimer = setTimeout(() => {
            toast.classList.add('translate-y-24');
        }, 5000); // 5s Undo Window
    }

    function cancelService() {
        clearTimeout(serviceTimer);
        $('service-toast').classList.add('translate-y-24');
    }

    function toggleStaffMode() {
        const el = $('staff-modal');
        el.classList.toggle('hidden');
        closeService();
    }

    // Init
    init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative z-10 h-full flex flex-col max-w-lg mx-auto bg-[#09090b]" id="app">

<header className="flex-none z-50 px-5 pt-4 pb-3 relative">
<div className="glass-strong rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl shadow-black/40 relative z-20">
<div>
<div className="flex items-center gap-2">
<h1 className="text-xl font-extrabold tracking-tight text-white">NOIR</h1>
</div>
<div className="flex items-center gap-2 mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dot-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider" id="table-label">Tisch 04 · Verbunden</span>
</div>
</div>
<div className="flex items-center gap-2">

<button className="h-10 w-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all active:scale-90" id="search-trigger" onclick="toggleSearch()">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="h-10 w-10 rounded-xl glass flex items-center justify-center text-[10px] font-bold text-zinc-400 hover:text-white hover:bg-white/10 transition-all active:scale-90" onclick="toggleLang()">
<span id="lang-toggle">DE</span>
</button>

<button className="h-10 w-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center relative hover:bg-white transition-all active:scale-90 shadow-lg shadow-white/5" onclick="openService()">
<iconify-icon icon="solar:bell-bing-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-20 left-0 right-0 z-10 px-5 transition-all duration-300 opacity-0 pointer-events-none -translate-y-4" id="search-container">
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<input className="w-full h-12 pl-11 pr-10 bg-[#121214]/95 backdrop-blur-xl border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all placeholder:text-zinc-600 shadow-2xl shadow-black/50" id="search-input" oninput="handleSearch()" placeholder="Suche..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-500 hover:text-white transition-colors" onclick="toggleSearch()">
<iconify-icon icon="solar:close-circle-bold" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-36" id="main-content">

<div className="px-5 pt-2 pb-4">
<div className="flex gap-2.5 overflow-x-auto no-scrollbar" id="cat-tabs">

</div>
</div>

<div className="px-5" id="products-section">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-bold tracking-tight text-white" id="section-title">Shisha</h2>
</div>

<div className="space-y-4 mb-4" id="featured-list"></div>

<div className="space-y-3" id="product-list"></div>
</div>
<div className="h-8"></div>
</main>

<div className="absolute bottom-0 left-0 right-0 z-40 px-5 pb-6 pt-20 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-transparent pointer-events-none">
<div className="flex gap-3 pointer-events-auto">
<button className="flex-1 h-14 rounded-2xl bg-white text-zinc-950 flex items-center justify-between px-2 hover-lift shadow-[0_4px_30px_rgba(255,255,255,0.1)] active:scale-[0.97] transition-all relative overflow-hidden group" onclick="openCart()">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 relative z-10 px-4 w-full">
<div className="relative flex-none">
<iconify-icon icon="solar:bag-5-bold" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white scale-0 transition-transform duration-300" id="cart-badge">0</span>
</div>
<div className="flex flex-col items-start leading-none">
<span className="font-extrabold text-sm" id="cart-btn-label">Bestellung</span>
<span className="text-[10px] text-zinc-500 font-medium mt-0.5" id="cart-status">Leer</span>
</div>
<div className="flex-1"></div>
<span className="font-mono font-bold text-sm relative z-10" id="cart-btn-total">€0.00</span>
</div>
</button>
</div>
</div>

<div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="service-modal">
<div className="bg-[#121214] rounded-t-[32px] border-t border-white/10 shadow-2xl transform translate-y-full transition-transform duration-300 pb-8" id="service-sheet">
<div className="flex justify-center pt-3 pb-6" onclick="closeService()">
<div className="w-12 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<div className="px-6 pb-6">
<h2 className="text-xl font-bold text-white mb-1">Service</h2>
<p className="text-sm text-zinc-500 mb-6">Wie können wir helfen?</p>
<div className="grid grid-cols-2 gap-3 mb-6">
<button className="h-24 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 group" onclick="triggerService('waiter')">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-colors">
<iconify-icon icon="solar:user-hand-up-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-300">Kellner rufen</span>
</button>
<button className="h-24 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 group" onclick="triggerService('coal')">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-orange-500 transition-colors">
<iconify-icon icon="solar:flame-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-300">Kohle nachlegen</span>
</button>
<button className="h-24 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 group" onclick="triggerService('bill')">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-emerald-500 transition-colors">
<iconify-icon icon="solar:bill-list-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-300">Rechnung</span>
</button>
<button className="h-24 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 group" onclick="toggleStaffMode()">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
<iconify-icon icon="solar:shield-user-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-300">Staff Login</span>
</button>
</div>
<button className="w-full py-4 text-sm font-medium text-zinc-500 hover:text-white transition-colors" onclick="closeService()">Abbrechen</button>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 flex flex-col bg-[#09090b]" id="detail-modal" style={{transform: 'translateY(100%)', transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20">
<button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white active:scale-90 transition-transform" onclick="closeDetail()">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '2'}} width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-[#09090b]">

<div className="relative w-full aspect-square img-box">
<img alt="Product" className="transition-transform duration-700 hover:scale-105" id="dm-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]"></div>
</div>
<div className="px-6 -mt-8 relative z-10">

<div className="flex items-start justify-between mb-2">
<h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight max-w-[70%]" id="dm-name"></h1>
<div className="text-right">
<span className="text-2xl font-bold text-white tracking-tight" id="dm-price"></span>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-6" id="dm-tags"></div>

<div className="mb-8">
<h3 className="text-lg font-medium text-violet-200 mb-2 leading-snug" id="dm-hook"></h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light" id="dm-desc"></p>
</div>

<div className="mb-8 hidden" id="dm-profile">
<div className="grid grid-cols-3 gap-3">
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-3 text-center">
<span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Süße</span>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-0 transition-all duration-1000" id="bar-sweet"></div>
</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-3 text-center">
<span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Frische</span>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 w-0 transition-all duration-1000" id="bar-ice"></div>
</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-3 text-center">
<span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Stärke</span>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-0 transition-all duration-1000" id="bar-str"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-5 glass-panel z-30 bg-[#09090b]">
<div className="flex items-center gap-4">
<div className="flex items-center bg-zinc-800 rounded-xl h-14 px-1 flex-none">
<button className="w-12 h-full flex items-center justify-center text-zinc-400 hover:text-white active:scale-90" onclick="adjQty(-1)">
<iconify-icon icon="solar:minus-linear" width="20"></iconify-icon>
</button>
<span className="w-6 text-center font-bold text-lg text-white" id="dm-qty">1</span>
<button className="w-12 h-full flex items-center justify-center text-zinc-400 hover:text-white active:scale-90" onclick="adjQty(1)">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
<button className="flex-1 h-14 rounded-xl bg-white text-zinc-950 font-bold text-base flex items-center justify-between px-6 active:scale-[0.98] transition-all shadow-xl shadow-white/5" onclick="addToCart()">
<span id="dm-add-label">Hinzufügen</span>
<span className="font-mono" id="dm-total">€0.00</span>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 flex flex-col bg-[#09090b]" id="cart-modal" style={{transform: 'translateY(100%)', transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-none px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/5">
<h2 className="text-xl font-bold tracking-tight">Bestellung</h2>
<button className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white active:scale-90" onclick="closeCart()">
<iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-4" id="cart-items"></div>
<div className="flex-none p-5 border-t border-white/5 bg-zinc-900/50">
<button className="w-full h-14 rounded-xl bg-white text-zinc-900 font-bold text-sm flex items-center justify-center gap-3 active:scale-[0.97] transition-all shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed" id="order-btn" onclick="placeOrder()">
<span id="order-btn-text">Kostenpflichtig bestellen</span>
<span className="font-mono bg-zinc-200 px-2 py-0.5 rounded text-xs" id="cart-total-btn">€0.00</span>
</button>
</div>
</div>

<div className="absolute inset-0 z-[60] flex flex-col items-center justify-center p-8 text-center bg-[#09090b] hidden" id="success-modal">
<div className="relative mb-8">
<div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="svg-spinners:blocks-scale" width="40"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-extrabold tracking-tight mb-2 text-white">Wird zubereitet</h2>
<p className="text-zinc-400 text-sm mb-10 max-w-[240px]">Deine Bestellung wurde an die Bar gesendet.</p>
<div className="w-full max-w-[280px] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-bold text-zinc-500 uppercase">Status</span>
<span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        In Arbeit
                    </span>
</div>
<div className="p-4 bg-zinc-900/80">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-400">Tisch</span>
<span className="text-white font-mono font-bold">04</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Order ID</span>
<span className="text-white font-mono" id="order-number">#0000</span>
</div>
</div>
</div>
<button className="mt-12 text-zinc-500 text-sm font-medium hover:text-white transition-colors" onclick="closeSuccess()">Zurück zur Karte</button>
</div>

<div className="absolute inset-0 z-[70] bg-[#000] hidden flex flex-col" id="staff-modal">
<div className="p-5 flex justify-between items-center border-b border-zinc-800">
<h2 className="text-lg font-bold text-white"><span className="text-violet-500">NOIR</span> Manager</h2>
<button className="text-xs bg-zinc-800 px-3 py-1.5 rounded-lg" onclick="toggleStaffMode()">Close Demo</button>
</div>
<div className="p-5 space-y-4 overflow-y-auto">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex justify-between mb-3">
<span className="font-bold text-white">Tisch 04</span>
<span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">Service</span>
</div>
<p className="text-sm text-zinc-400">Kohle nachlegen (vor 2m)</p>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex justify-between mb-3">
<span className="font-bold text-white">Tisch 02</span>
<span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">New Order</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm text-zinc-300"><span>1x Love 66</span></div>
<div className="flex justify-between text-sm text-zinc-300"><span>2x Coke Zero</span></div>
</div>
<div className="mt-3 pt-3 border-t border-zinc-800 flex justify-end gap-2">
<button className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg">Accept</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 left-5 right-5 z-[80] translate-y-24 transition-transform duration-500" id="service-toast">
<div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
<div className="p-4 flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-none" id="st-icon-bg">
<iconify-icon className="text-white" icon="solar:bell-bold" id="st-icon" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-white" id="st-title">Service gerufen</h4>
<p className="text-xs text-zinc-500" id="st-msg">Ein Mitarbeiter macht sich auf den Weg.</p>
</div>
<button className="text-xs font-bold text-zinc-400 hover:text-white px-2 py-2" onclick="cancelService()">Undo</button>
</div>

<div className="h-0.5 bg-zinc-800 w-full absolute bottom-0 left-0">
<div className="h-full bg-white w-full" id="st-bar"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
