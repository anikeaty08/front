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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Alpine global stores: cart
    document.addEventListener('alpine:init', () => {
      Alpine.store('cart', {
        items: [],
        promoCode: '',
        placed: false,
        status: 1, // 1 confirmed, 2 cooking, 3 driving, 4 delivered
        timerPrep: 15,
        timerDrive: 10,
        get count() { return this.items.reduce((a,i)=>a+i.qty,0); },
        key(item){ return `${item.id}:${(item.extras||[]).map(e=>e.code).sort().join('|')}`; },
        add(line){
          const key=this.key(line);
          const existing=this.items.find(l=>l.key===key);
          if(existing){ existing.qty+=line.qty||1; }
          else{
            this.items.push({
              key,
              id: line.id,
              name: line.name,
              image: line.image,
              unit: line.unit,
              qty: line.qty||1,
              extras: line.extras||[]
            });
          }
        },
        inc(key){ const l=this.items.find(i=>i.key===key); if(l){ l.qty++; } },
        dec(key){ const l=this.items.find(i=>i.key===key); if(l){ l.qty=Math.max(1,l.qty-1); } },
        remove(key){ this.items=this.items.filter(i=>i.key!==key); },
        clear(){ this.items=[]; this.promoCode=''; this.placed=false; this.status=1; this.timerPrep=15; this.timerDrive=10; },
        subtotal(){ return this.items.reduce((a,i)=>a + i.unit * i.qty, 0); },
        delivery(){ const s=this.subtotal(); return s>=1000 || s===0 ? 0 : 50; },
        discount(){ return (this.promoCode==='PANINO50') ? 50 : 0; },
        total(){ return Math.max(0, this.subtotal() + this.delivery() - this.discount()); },
        eta(){
          // Base 25–40 min + per-item prep; approximate by max prep among items if available on id map
          const prep = this.items.reduce((m,i)=>Math.max(m,(window.__prepTimes?.[i.id]||0)),0);
          const lower = Math.min(40, Math.max(25, 25 + Math.round(prep/2)));
          const upper = Math.max(lower+5, 25 + prep + 10);
          return `~${lower}–${upper} мин`;
        },
        applyPromo(){
          this.promoCode = (this.promoCode || '').trim().toUpperCase();
        },
        checkout(){
          if(this.items.length===0) return;
          this.placed = true;
          this.status = 1;
          // Simulate timers
          const step2 = setTimeout(()=>{ this.status=2; }, 500);
          const step3 = setTimeout(()=>{ this.status=3; }, 2000);
          const step4 = setTimeout(()=>{ this.status=4; }, 5000);

          // countdowns
          const prepInt = setInterval(()=> {
            if(this.timerPrep>0) this.timerPrep--;
            else clearInterval(prepInt);
          }, 60000/15); // accelerated demo
          const driveInt = setInterval(()=> {
            if(this.timerDrive>0 && this.status>=3) this.timerDrive--;
            if(this.timerDrive<=0) clearInterval(driveInt);
          }, 60000/10);
        }
      });
    });

    // Product gallery component
    function gallery(){ return {
      images: [],
      index: 0,
      init(arr){ this.images = Array.isArray(arr) && arr.length ? arr : []; this.index = 0; },
      prev(){ this.index = (this.index - 1 + this.images.length) % this.images.length; },
      next(){ this.index = (this.index + 1) % this.images.length; },
    } }

    // Main app
    function paninoSeed(){
      return [
        {
          id:'classic-cheeseburger',
          name:'Классический Чизбургер',
          short:'Говяжья котлета, сыр, салат, томаты, соус.',
          long:'Сочная котлета из говядины с расплавленным сыром, свежим салатом, помидором, маринованными огурчиками и фирменным соусом в подрумяненной булочке.',
          image:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200&auto=format&fit=crop',
          images:[
            'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551782450-17144c3a09af?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606756790138-c9e9b0a19b37?q=80&w=1200&auto=format&fit=crop'
          ],
          price:249,
          rating:4.8,
          time:15,
          kcal:450,
          category:'burgers',
          ingredients:['Булочка', 'Котлета говяжья', 'Сыр Чеддер', 'Салат', 'Помидор', 'Огурчик маринованный', 'Соус фирменный'],
          extras:[
            { code:'double', name:'Двойная котлета', price:100, desc:'x2 мясо' },
            { code:'spicy', name:'Острый соус', price:50, desc:'с перцем' },
            { code:'bacon', name:'Добавить бекон', price:80, desc:'хрустящий' },
            { code:'cheese', name:'Extra сыр', price:70, desc:'ещё чеддер' },
          ]
        },
        {
          id:'fries-classic',
          name:'Картошка Фри',
          short:'Золотистая и хрустящая.',
          long:'Классическая картошка фри — идеальный гарнир к любому бургеру.',
          image:'https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1200&auto=format&fit=crop',
          images:['https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1200&auto=format&fit=crop'],
          price:119,
          rating:4.8,
          time:7,
          kcal:300,
          category:'potatoes',
          ingredients:['Картофель', 'Масло растительное', 'Соль'],
          extras:[]
        },
        {
          id:'shake-shekspiro',
          name:'Шекспиро',
          short:'Молочный коктейль на выбор: ваниль/шоколад.',
          long:'Густой молочный коктейль, приготовленный из молока и мороженого.',
          image:'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1200&auto=format&fit=crop',
          images:['https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1200&auto=format&fit=crop'],
          price:149,
          rating:4.8,
          time:5,
          kcal:220,
          category:'drinks',
          ingredients:['Молоко', 'Мороженое', 'Сироп'],
          extras:[]
        },
        {
          id:'pepperoni-pizza',
          name:'Пицца Пепперони',
          short:'Тонкое тесто, пепперони, сыр моцарелла.',
          long:'Классическая пицца на тонком тесте с колбасой пепперони и тянущимся сыром.',
          image:'https://images.unsplash.com/photo-1548366086-7fbaf3f0b787?q=80&w=1200&auto=format&fit=crop',
          images:['https://images.unsplash.com/photo-1548366086-7fbaf3f0b787?q=80&w=1200&auto=format&fit=crop'],
          price:499,
          rating:4.8,
          time:20,
          kcal:900,
          category:'pizza',
          ingredients:['Тесто', 'Томатный соус', 'Сыр Моцарелла', 'Пепперони'],
          extras:[{code:'extra-cheese', name:'Extra сыр', price:70, desc:'больше моцареллы'}]
        }
      ];
    }

    function paninoApp(){ return {
      // UI state
      searchQuery: '',
      activeCategory: 'all',
      categories: [
        { slug:'all', title:'Все' },
        { slug:'burgers', title:'Бургеры' },
        { slug:'pizza', title:'Пицца' },
        { slug:'potatoes', title:'Картофель' },
        { slug:'desserts', title:'Десерты' },
        { slug:'drinks', title:'Напитки' },
        { slug:'sauces', title:'Соусы' },
      ],
      items: [],
      selectedProduct: {
        id:'',
        name:'',
        short:'',
        long:'',
        image:'',
        images:[],
        price:0,
        rating:4.8,
        time:15,
        kcal:0,
        category:'burgers',
        ingredients:[],
        extras:[]
      },
      detailTab:'desc',
      // detail state
      qty:1,
      chosenExtras: new Set(),
      note:'',

      init(){
        // Seed
        this.items = paninoSeed();

        // Expose prep times for ETA (cart store)
        window.__prepTimes = {};
        this.items.forEach(i => window.__prepTimes[i.id]=i.time||0);

        // Default product
        this.openProduct(this.items[0]);

        // Try to hydrate from Ghost Content API (optional)
        // this.loadFromGhost(); // Uncomment when API key and URL provided

        // Render lucide after Alpine draws DOM
        setTimeout(()=> { if(window.lucide){ lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } }, 50);
      },

      filteredItems(){
        const q=(this.searchQuery||'').toLowerCase();
        return this.items
          .filter(i => this.activeCategory==='all' ? true : i.category===this.activeCategory)
          .filter(i => !q ? true : (i.name.toLowerCase().includes(q) || i.short.toLowerCase().includes(q)))
          .slice(0, 8);
      },

      openProduct(item){
        this.selectedProduct = JSON.parse(JSON.stringify(item));
        this.qty = 1;
        this.chosenExtras = new Set();
        this.note='';
        this.detailTab='desc';
        setTimeout(()=> { if(window.lucide){ lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } }, 10);
      },

      backToHome(){ /* preview layout only; in theme use browser history */ },

      toggleExtra(extra){
        if(this.chosenExtras.has(extra.code)) this.chosenExtras.delete(extra.code);
        else this.chosenExtras.add(extra.code);
      },

      incQty(){ this.qty++; },
      decQty(){ this.qty = Math.max(1, this.qty-1); },

      totalPrice(){
        const base = this.selectedProduct.price || 0;
        const extrasPrice = (this.selectedProduct.extras||[]).filter(e=>this.chosenExtras.has(e.code)).reduce((a,e)=>a+e.price,0);
        return base * this.qty + extrasPrice * this.qty;
      },

      addToCartDetail(){
        const chosen = (this.selectedProduct.extras||[]).filter(e=>this.chosenExtras.has(e.code));
        Alpine.store('cart').add({
          id: this.selectedProduct.id,
          name: this.selectedProduct.name,
          image: this.selectedProduct.image,
          unit: this.selectedProduct.price + chosen.reduce((a,e)=>a+e.price,0),
          qty: this.qty,
          extras: chosen
        });
        // feedback
        this.qty = 1;
        this.chosenExtras = new Set();
      },

      addToCartQuick(item){
        Alpine.store('cart').add({
          id: item.id,
          name: item.name,
          image: item.image,
          unit: item.price,
          qty: 1,
          extras: []
        });
      },

      applyPromo(code){
        Alpine.store('cart').promoCode = (code||'').trim().toUpperCase();
      },

      async loadFromGhost(){
        try{
          // Example: load posts tagged "menu" and map to items
          const ghostUrl = window.GHOST_URL || ''; // e.g. 'https://your.ghost.site'
          const ghostKey = window.GHOST_CONTENT_KEY || ''; // Content API key
          if(!ghostUrl || !ghostKey) return;
          const res = await fetch(`${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&filter=tag:menu&include=tags,authors&fields=id,slug,title,feature_image,custom_excerpt,html,excerpt,updated_at`);
          const data = await res.json();
          const mapped = (data.posts||[]).map(p => ({
            id: p.slug,
            name: p.title,
            short: p.custom_excerpt || p.excerpt || '',
            long: p.excerpt || '',
            image: p.feature_image,
            images: [p.feature_image].filter(Boolean),
            price: parseInt((/price:(\d+)/i.exec(p.html||'')||[])[1] || '0', 10) || 0,
            rating: 4.8,
            time: parseInt((/time:(\d+)/i.exec(p.html||'')||[])[1] || '15', 10) || 15,
            kcal: parseInt((/kcal:(\d+)/i.exec(p.html||'')||[])[1] || '0', 10) || 0,
            category: ((p.tags||[]).find(t=>/^menu-/i.test(t.slug))||{slug:'menu-unknown'}).slug.replace(/^menu-/, ''),
            ingredients: ((p.html||'').match(/ingredients:\s*([^<]+)/i)||[])[1]?.split(',').map(s=>s.trim()) || [],
            extras: [] // could parse from html or use a related page
          }));
          if(mapped.length){
            this.items = mapped;
            window.__prepTimes = {};
            this.items.forEach(i => window.__prepTimes[i.id]=i.time||0);
            this.openProduct(this.items[0]);
          }
        }catch(e){ console.error('Ghost fetch error', e); }
      }
    } }
  
}

{

    // Init lucide after full hydration
    window.addEventListener('load', () => {
      if(window.lucide){ lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
    });
  
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
      

<div className="min-h-screen flex items-center justify-center p-4" x-data="paninoApp" x-init="init()">
<div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-8">

<section className="relative w-full h-[780px] md:h-[852px] overflow-hidden bg-neutral-950 border border-neutral-800 rounded-[36px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-full z-40"></div>

<div className="h-14 flex items-end px-6 pb-1">
<div className="w-full flex items-center justify-between text-xs text-white/80 font-medium">
<span>9:41</span>
<div className="flex items-center gap-1 opacity-80">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-6 h-3" data-lucide="battery"></i>
</div>
</div>
</div>

<div className="px-6">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-400">Доставка по городу Панино</p>
<h1 className="text-[22px] md:text-2xl tracking-tight font-semibold">Добро пожаловать в Панино Фуд!</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition">
<i className="w-5 h-5 text-neutral-300" data-lucide="bell"></i>
</button>
<div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-orange-400/40">
<img alt="user" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=320&auto=format&fit=crop" />
</div>
</div>
</div>
</div>

<div className="px-6 mt-4">
<div className="relative">
<input className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-2xl pl-11 pr-12 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Искать блюда, напитки, десерты" type="text" x-model="searchQuery" />
<i className="w-5 h-5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-300 hover:text-orange-200">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</button>
</div>
</div>

<div className="px-6 mt-4">
<div className="rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-r from-orange-600 to-rose-600">
<div className="p-4 flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="percent"></i>
</div>
<div className="flex-1">
<p className="text-white font-semibold tracking-tight">Успейте получить эксклюзивные скидки!</p>
<p className="text-white/90 text-sm">Только сегодня: промокод PANINO50</p>
</div>
<button className="px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-sm font-medium">Активировать</button>
</div>
</div>
</div>

<div className="px-6 mt-5">
<div className="flex items-center gap-2 overflow-x-auto" style={{scrollbarWidth: `none`}}>
<template x-for="cat in categories"><button className="flex-shrink-0 px-4 py-2 rounded-xl border text-sm"><span x-text="cat.title"></span></button></template>
</div>
</div>

<div className="px-6 mt-5 flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Рекомендуем для вас</h2>
<a className="text-sm text-orange-300 hover:text-orange-200" href="/menu">Смотреть все</a>
</div>

<div className="px-6 mt-3 h-[355px] md:h-[430px] overflow-y-auto" style={{scrollbarWidth: `none`}}>
<div className="grid grid-cols-2 gap-4">
<template x-for="item in filteredItems()"><article className="rounded-2xl overflow-hidden bg-neutral-900/70 border border-neutral-800 hover:bg-neutral-900 transition"><a className="block relative" href="#"><img className="w-full h-32 md:h-36 object-cover" loading="lazy" /><div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full text-xs"><i className="w-3.5 h-3.5 text-yellow-400" data-lucide="star"></i><span x-text="item.rating.toFixed(1)"></span></div></a><div className="p-3"><h3 className="text-[15px] font-semibold tracking-tight mb-0.5" x-text="item.name"></h3><p className="text-xs text-neutral-400 line-clamp-2 mb-2" x-text="item.short"></p><div className="flex items-center justify-between"><span className="text-rose-400 font-semibold" x-text="item.price + ' руб.'"></span><button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-medium"><i className="w-4 h-4" data-lucide="plus"></i></button></div></div></article></template>
</div>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-neutral-950/90 backdrop-blur border-t border-neutral-800">
<div className="flex items-center justify-between px-8 py-3 text-xs text-neutral-300">
<button className="flex flex-col items-center gap-1 text-white">
<i className="w-5 h-5" data-lucide="house"></i><span>Главная</span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-white">
<i className="w-5 h-5" data-lucide="grid"></i><span>Каталог</span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-white relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i><span>Корзина</span>
<span className="absolute -top-1 -right-3 text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded" style={{display: `none`}} x-show="$store.cart.count > 0" x-text="$store.cart.count"></span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-white">
<i className="w-5 h-5" data-lucide="receipt"></i><span>Заказы</span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-white">
<i className="w-5 h-5" data-lucide="user"></i><span>Профиль</span>
</button>
</div>
<div className="w-[134px] h-[5px] bg-white/20 rounded-full mx-auto mb-2"></div>
</nav>
</section>

<section className="relative w-full h-[780px] md:h-[852px] overflow-hidden bg-neutral-950 border border-neutral-800 rounded-[36px]">
<div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-full z-40"></div>

<div className="h-14 flex items-end px-6 pb-1">
<div className="w-full flex items-center justify-between text-xs text-white/80 font-medium">
<span>9:41</span>
<div className="flex items-center gap-1 opacity-80">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-6 h-3" data-lucide="battery"></i>
</div>
</div>
</div>
<div className="flex-1 flex flex-col h-[calc(100%-56px)]">

<div className="px-6 flex items-center justify-between">
<button className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition">
<i className="w-5 h-5 text-neutral-300" data-lucide="arrow-left"></i>
</button>
<h2 className="text-base font-semibold">Товар</h2>
<button className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition">
<i className="w-5 h-5 text-neutral-300" data-lucide="share"></i>
</button>
</div>

<div className="px-6 mt-3">
<div className="relative overflow-hidden rounded-2xl border border-neutral-800" x-data="gallery" x-init="init(selectedProduct.images)">
<img alt="" className="w-full h-56 object-cover transition" />
<button className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-black/60">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-black/60">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
<template x-for="(img, i) in images"><div className="h-1.5 rounded-full"></div></template>
</div>
</div>
</div>

<div className="px-6 mt-4 flex-1 overflow-y-auto" style={{scrollbarWidth: `none`}}>
<div className="flex items-start justify-between">
<div className="pr-3">
<h1 className="text-[22px] md:text-2xl tracking-tight font-semibold" x-text="selectedProduct.name">Классический Чизбургер</h1>
<p className="text-sm text-neutral-400 mt-1" x-text="selectedProduct.long">
                  Сочная котлета из говядины с расплавленным сыром, свежим салатом, помидором, маринованными огурчиками и фирменным соусом в подрумяненной булочке.
                </p>
</div>
<button className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center hover:bg-rose-500/25 transition">
<i className="w-5 h-5 text-rose-400" data-lucide="heart"></i>
</button>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="star"></i>
<div>
<p className="text-xs text-neutral-400">Рейтинг</p>
<p className="text-sm font-semibold" x-text="selectedProduct.rating.toFixed(1)">4.8</p>
</div>
</div>
<div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
<i className="w-5 h-5 text-orange-300" data-lucide="timer"></i>
<div>
<p className="text-xs text-neutral-400">Готовка</p>
<p className="text-sm font-semibold" x-text="'~' + selectedProduct.time + ' мин'">~15 мин</p>
</div>
</div>
<div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
<i className="w-5 h-5 text-rose-400" data-lucide="flame"></i>
<div>
<p className="text-xs text-neutral-400">Калории</p>
<p className="text-sm font-semibold" x-text="selectedProduct.kcal + ' ккал'">450 ккал</p>
</div>
</div>
</div>

<div className="mt-5">
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-xl text-sm">Описание</button>
<button className="px-4 py-2 rounded-xl text-sm">Состав</button>
</div>
<div className="mt-3">
<div className="text-sm text-neutral-300 leading-relaxed" x-show="detailTab==='desc'" x-text="selectedProduct.long"></div>
<ul className="text-sm text-neutral-300 list-disc pl-5" x-show="detailTab==='ing'">
<template x-for="ing in selectedProduct.ingredients"><li x-text="ing"></li></template>
</ul>
</div>
</div>

<div className="mt-6">
<h3 className="text-lg tracking-tight font-semibold">Добавить по вкусу</h3>
<div className="mt-3 space-y-2">
<template x-for="extra in selectedProduct.extras"><label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer"><div className="flex items-center gap-3"><span className="relative inline-flex w-5 h-5"><input className="peer absolute inset-0 opacity-0" type="checkbox" /><span className="w-5 h-5 rounded-md border border-neutral-700 bg-neutral-800 peer-checked:border-orange-400 peer-checked:bg-gradient-to-r from-orange-500 to-rose-500"></span><i className="w-3.5 h-3.5 text-white absolute left-1 top-1 opacity-0 peer-checked:opacity-100 transition" data-lucide="check"></i></span><div><p className="text-sm font-medium" x-text="extra.name"></p><p className="text-xs text-neutral-400" x-text="extra.desc"></p></div></div><span className="text-sm font-semibold text-rose-300" x-text="'+' + extra.price + ' руб.'"></span></label></template>
</div>
</div>

<div className="mt-5">
<label className="text-sm text-neutral-300">Добавить комментарий</label>
<textarea className="mt-2 w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Без лука, соус отдельно..." rows="3" x-model="note"></textarea>
</div>
<p className="mt-4 text-xs text-neutral-400">Доставка по городу Панино • Среднее время доставки 25–40 мин</p>
<div className="h-28"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-neutral-950/90 backdrop-blur border-t border-neutral-800 p-4">
<div className="flex items-center gap-3">
<button className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="minus"></i>
</button>
<div className="w-12 text-center font-semibold" x-text="qty"></div>
<button className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="plus"></i>
</button>
<button className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-rose-600 transition shadow-lg shadow-orange-500/20">
<span x-text="'В корзину за ' + totalPrice() + ' руб.'"></span>
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
</div>
<div className="w-[134px] h-[5px] bg-white/20 rounded-full mx-auto mt-3"></div>
</div>
</div>
</section>

<section className="relative w-full h-[780px] md:h-[852px] overflow-hidden bg-neutral-950 border border-neutral-800 rounded-[36px]">
<div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-full z-40"></div>

<div className="h-14 flex items-end px-6 pb-1">
<div className="w-full flex items-center justify-between text-xs text-white/80 font-medium">
<span>9:41</span>
<div className="flex items-center gap-1 opacity-80">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-6 h-3" data-lucide="battery"></i>
</div>
</div>
</div>
<div className="px-6 mt-2 flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Корзина</h2>
<button className="text-sm text-neutral-300 hover:text-white">Очистить</button>
</div>

<div className="px-6 mt-4 h-[360px] md:h-[440px] overflow-y-auto" style={{scrollbarWidth: `none`}}>
<template x-if="$store.cart.items.length === 0"><div className="flex flex-col items-center justify-center text-center text-neutral-400 h-44"><i className="w-8 h-8 mb-2" data-lucide="shopping-bag"></i><p></p></div></template>
<div className="space-y-3">
<template x-for="line in $store.cart.items"><div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800"><div className="flex items-start gap-3"><img alt="" className="w-16 h-16 rounded-xl object-cover border border-neutral-800" /><div className="flex-1"><div className="flex items-start justify-between"><h3 className="text-sm font-semibold tracking-tight" x-text="line.name"></h3><button className="text-neutral-400 hover:text-white"><i className="w-5 h-5" data-lucide="x"></i></button></div><p className="text-xs text-neutral-400 mt-0.5" x-text="line.extras && line.extras.length ? 'Допы: ' + line.extras.map(e=>e.name).join(', ') : 'Без допов'"></p><div className="mt-2 flex items-center justify-between"><div className="inline-flex items-center gap-2"><button className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800"><i className="w-4 h-4" data-lucide="minus"></i></button><span className="w-6 text-center text-sm font-semibold" x-text="line.qty"></span><button className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800"><i className="w-4 h-4" data-lucide="plus"></i></button></div><div className="text-right"><p className="text-sm text-neutral-300"><span className="font-semibold" x-text="line.unit + ' руб.'"></span></p><p className="text-sm font-semibold text-rose-300" x-text="(line.unit*line.qty) + ' руб.'"></p></div></div></div></div></div></template>
</div>
</div>

<div className="px-6 mt-4">
<div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-orange-300" data-lucide="ticket-percent"></i>
<input className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl h-10 px-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Промокод" type="text" x-model="$store.cart.promoCode" />
<button className="px-3 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-medium">Применить</button>
</div>
<p className="text-xs text-neutral-400 mt-2">Бесплатная доставка при заказе от 1000 руб.</p>
</div>
</div>

<div className="px-6 mt-4">
<div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
<div className="flex items-center justify-between text-sm">
<span>Стоимость товаров</span>
<span x-text="$store.cart.subtotal() + ' руб.'"></span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Доставка</span>
<span x-text="$store.cart.delivery() > 0 ? ($store.cart.delivery() + ' руб.') : 'Бесплатно'"></span>
</div>
<div className="flex items-center justify-between text-sm" x-show="$store.cart.discount() > 0">
<span>Скидка</span>
<span className="text-emerald-300" x-text="'-' + $store.cart.discount() + ' руб.'"></span>
</div>
<div className="border-t border-neutral-800 pt-2 mt-2 flex items-center justify-between">
<span className="font-semibold text-lg tracking-tight">Итого к оплате</span>
<span className="font-semibold text-lg tracking-tight text-white" x-text="$store.cart.total() + ' руб.'"></span>
</div>
<p className="text-xs text-neutral-400">Оценка доставки: <span x-text="$store.cart.eta()"></span> по Панино</p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-neutral-950/90 backdrop-blur border-t border-neutral-800 p-4">
<template x-if="!$store.cart.placed"><button className="w-full h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-rose-600 transition shadow-lg shadow-orange-500/20"><i className="w-5 h-5" data-lucide="arrow-right"></i></button></template>
<template x-if="$store.cart.placed"><div className="space-y-2"><div className="flex items-center gap-2 text-sm"><i className="w-5 h-5 text-emerald-400" data-lucide="check-circle2"></i><span className="font-medium"></span></div><div className="flex items-center gap-2 text-sm"><i className="w-5 h-5 text-orange-300" data-lucide="chef-hat"></i><span className="font-medium"></span><span className="ml-auto text-xs text-neutral-400" x-text="'~' + $store.cart.timerPrep + ' мин'"></span></div><div className="flex items-center gap-2 text-sm"><i className="w-5 h-5 text-sky-300" data-lucide="car"></i><span className="font-medium"></span><span className="ml-auto text-xs text-neutral-400" x-text="'~' + $store.cart.timerDrive + ' мин'"></span></div><div className="flex items-center gap-2 text-sm"><i className="w-5 h-5 text-emerald-400" data-lucide="circle-check"></i><span className="font-medium"></span></div></div></template>
<div className="w-[134px] h-[5px] bg-white/20 rounded-full mx-auto mt-3"></div>
</div>
</section>
</div>
</div>

  {"{"}{"{"}!-- Ghost footer --{"}"}{"}"}
  {"{"}{"{"}ghost_foot{"}"}{"}"}

  


    </>
  );
}
