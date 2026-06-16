import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function () {
            var buttons = Array.prototype.slice.call(document.querySelectorAll('.shop-cat-btn'));
            var grid = document.getElementById('shopGrid');
            var empty = document.getElementById('shopEmpty');
            var items = Array.prototype.slice.call(document.querySelectorAll('.shop-item'));
            var active = 'featured';
            var animLock = false;

            function setActiveButton(category) {
                buttons.forEach(function (btn) {
                    var isActive = btn.getAttribute('data-shop-category') === category;
                    btn.classList.toggle('bg-rose-100', isActive);
                    btn.classList.toggle('text-rose-600', isActive);
                    btn.classList.toggle('font-bold', isActive);

                    btn.classList.toggle('bg-[#F5EFE6]', !isActive);
                    btn.classList.toggle('text-stone-600', !isActive);
                    btn.classList.toggle('font-semibold', !isActive);

                    btn.classList.toggle('shadow-[0_10px_30px_-18px_rgba(244,63,94,0.55)]', isActive);
                    btn.classList.toggle('hover:shadow-[0_14px_34px_-18px_rgba(244,63,94,0.45)]', isActive);
                });
            }

            function filterItems(category) {
                var visibleCount = 0;
                items.forEach(function (card) {
                    var cats = (card.getAttribute('data-category') || '').toLowerCase().split(/\s+/);
                    var show = cats.indexOf(category) !== -1;
                    card.classList.toggle('hidden', !show);
                    if (show) visibleCount += 1;
                });
                if (empty) empty.classList.toggle('hidden', visibleCount !== 0);
            }

            function switchCategory(category) {
                if (animLock || category === active) return;
                animLock = true;

                // animate out
                grid.classList.remove('shop-grid-visible');
                grid.classList.add('shop-grid-hidden');

                window.setTimeout(function () {
                    active = category;
                    setActiveButton(active);
                    filterItems(active);

                    // animate in
                    grid.classList.remove('shop-grid-hidden');
                    grid.classList.add('shop-grid-visible');

                    window.setTimeout(function () {
                        animLock = false;
                    }, 280);
                }, 260);
            }

            buttons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    switchCategory(btn.getAttribute('data-shop-category'));
                });
            });

            // init
            setActiveButton(active);
            filterItems(active);
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed md:p-6 transition-all duration-300 z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<div className="glass-panel flex hover:shadow-md transition-shadow duration-300 max-w-7xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform bg-rose-300 text-white">
                    F
                </div>
<span className="group-hover:text-rose-400 transition-colors text-xl font-bold text-stone-700 tracking-tight">Foxy<span className="text-rose-400">Land</span></span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full p-1 border bg-white/50 border-white/60">
<a className="hover:text-rose-500 transition-all hover:shadow-sm hover:bg-white text-sm font-semibold text-stone-600 rounded-full pt-2 pr-5 pb-2 pl-5" href="#">Home</a>
<a className="hover:text-rose-500 transition-all hover:shadow-sm hover:bg-white text-sm font-semibold text-stone-600 rounded-full pt-2 pr-5 pb-2 pl-5" href="#about">About</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold hover:text-rose-500 transition-all hover:shadow-sm text-stone-600 hover:bg-white" href="#characters">Friends</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold hover:text-rose-500 transition-all hover:shadow-sm text-stone-600 hover:bg-white" href="#shop">Store</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all text-white shadow-rose-200 hover:shadow-rose-300 bg-gradient-to-br from-rose-300 to-[#fbe96f]" href="#">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Play Free
                </a>
<button className="md:hidden w-10 h-10 rounded-full flex items-center justify-center shadow-sm bg-white text-stone-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 z-0">
<img alt="Cozy Village" className="w-full h-full object-cover opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-b from-[#FFF9F0]/80 via-[#FFF9F0]/90 to-[#FFF9F0] absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="absolute top-20 left-10 float-animation opacity-60 text-rose-200" style={{animationDelay: '0s'}}>
<iconify-icon className="" icon="solar:cloud-sun-2-linear" width="64"></iconify-icon>
</div>
<div className="absolute top-40 right-20 float-animation opacity-60 text-sky-200" style={{animationDelay: '1.5s'}}>
<iconify-icon icon="solar:balloon-linear" width="48"></iconify-icon>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse bg-rose-100 text-rose-600">
<iconify-icon className="" icon="solar:star-linear" width="14"></iconify-icon>
        Season of Blossoms is here!
    </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-extrabold text-stone-800 tracking-tight mb-6">
        Build your
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ff7ab4] to-[#ffcd94]">dreamy</span> little
        life.
    </h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-stone-500 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Escape to FoxyLand, where the tea is always warm, the neighbors are fluffy, and every day is a gentle adventure.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="w-full sm:w-auto px-8 py-4 rounded-[2rem] font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 bg-stone-800 text-white hover:bg-stone-700">
<iconify-icon className="" icon="solar:download-square-linear" width="24"></iconify-icon>
                    Download Now
                </button>
<button className="sm:w-auto hover:text-rose-500 transition-all flex gap-2 hover:border-rose-300 hover:bg-rose-50 text-lg font-bold text-stone-700 bg-white w-full border-stone-200 border-2 rounded-[2rem] pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="" icon="solar:shop-2-linear" width="24"></iconify-icon>
                    General Store
                </button>
</div>
</div>
</header>

<section className="pt-16 pr-6 pb-16 pl-6">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r rounded-[3rem] opacity-50 rotate-3 from-teal-100 to-emerald-100">
</div>
<img alt="Cozy Cabin" aria-label="View more photos" className="hover:rotate-0 transition-all duration-500 bg-center cursor-pointer object-auto object-cover border-white border-4 rounded-[2.5rem] relative shadow-2xl hue-rotate-0 rotate-[-2deg]" data-gallery='["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9280b18-de7b-4794-8b36-51a5f647705c_1600w.png","https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80","https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80","https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"]' onclick="(function(el){try{var arr=JSON.parse(el.getAttribute('data-gallery')||'[]');if(!arr.length)return;var i=parseInt(el.getAttribute('data-gallery-index')||'0',10);i=(i+1)%arr.length;el.setAttribute('data-gallery-index',String(i));el.src=arr[i];el.setAttribute('data-element-src',arr[i]);}catch(e){}})(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9280b18-de7b-4794-8b36-51a5f647705c_1600w.png" style={{touchAction: 'manipulation', WebkitUserSelect: 'none', userSelect: 'none'}} tabindex="0"/>
<div className="-bottom-6 -right-6 glass-panel flex gap-3 float-animation rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute shadow-lg gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-orange-500 bg-orange-100">
<iconify-icon className="" icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-semibold text-stone-400">Vibe Check</p>
<p className="text-sm font-bold text-stone-700">100% Coziness</p>
</div>
</div>
</div>
<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-800">A Tiny World, Full of Big
                    Hearts</h2>
<p className="leading-relaxed font-medium text-stone-500 mb-6">Forget about grinding or stress. In FoxyLand, your biggest challenge is deciding whether to bake blueberry muffins or strawberry tarts for the town picnic. Decorate your cottage, tend to your garden, and make friends with the quirky locals.</p>
<div className="grid grid-cols-2 gap-4">
<div className="hover:shadow-md transition-all wiggle-hover bg-white border-stone-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm">
<iconify-icon className="mb-2 text-rose-400" icon="solar:home-smile-linear" width="32"></iconify-icon>
<h3 className="font-bold text-stone-700">Cozy Decor</h3>
<p className="text-xs text-stone-400 mt-1">Design your nook.</p>
</div>
<div className="hover:shadow-md transition-all wiggle-hover bg-white border-stone-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm">
<iconify-icon className="mb-2 text-emerald-400" icon="solar:leaf-linear" width="32"></iconify-icon>
<h3 className="font-bold text-stone-700">Lazy Gardening</h3>
<p className="text-xs text-stone-400 mt-1">Grow magic herbs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#FFF9F0] to-rose-50/50 pt-20 pr-6 pb-20 pl-6" id="characters">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<span className="font-bold tracking-wider text-sm uppercase text-rose-400">Meet the Neighbors</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-stone-800">Friends waiting for you</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-[2rem] p-3 shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white shadow-stone-200/50">
<div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-3 bg-sky-100">
<img alt="Pip" className="group-hover:scale-110 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cedad377-2238-495a-bb49-209a2d671d66_800w.png"/>
</div>
<div className="text-center pb-2">
<h3 className="text-lg font-bold text-stone-800">Pip</h3>
<p className="inline-block text-xs font-semibold text-sky-400 bg-sky-50 rounded-full mt-1 pt-1 pr-3 pb-1 pl-3">Loves Sweets
          </p>
</div>
</div>

<div className="group relative rounded-[2rem] p-3 shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white shadow-stone-200/50">
<div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-3 bg-emerald-100">
<img alt="Kesh" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ff8c43f-d8e6-4ce6-84d2-c1f8f4101fae_800w.png"/>
</div>
<div className="text-center pb-2">
<h3 className="text-lg font-bold text-stone-800">Kesh</h3>
<p className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-50 rounded-full mt-1 pt-1 pr-3 pb-1 pl-3">Businessman</p>
</div>
</div>

<div className="group relative rounded-[2rem] p-3 shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white shadow-stone-200/50">
<div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-3 bg-orange-100">
<img alt="Cat" className="group-hover:scale-110 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a52c65b9-a011-4d67-8611-bac8c0a70b05_800w.png"/>
</div>
<div className="text-center pb-2">
<h3 className="text-lg font-bold text-stone-800">Luna</h3>
<p className="inline-block text-xs font-semibold text-orange-400 bg-orange-50 rounded-full mt-1 pt-1 pr-3 pb-1 pl-3">Depends on the coffee</p>
</div>
</div>

<div className="group relative rounded-[2rem] p-3 shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white shadow-stone-200/50">
<div className="aspect-[4/5] overflow-hidden bg-center bg-rose-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4360b4c-b535-4207-a7df-c5587b80ab05_800w.png)] bg-cover rounded-[1.5rem] mb-3 relative">
</div>
<div className="text-center pb-2">
<h3 className="text-lg font-bold text-stone-800">Momo</h3>
<p className="inline-block text-xs font-semibold text-rose-400 bg-rose-50 rounded-full mt-1 pt-1 pr-3 pb-1 pl-3">Local Gardener</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F2ECE4] pt-24 pr-4 pb-24 pl-4 relative" id="shop">

<div className="absolute top-0 left-0 w-full h-16 bg-[#FFF9F0] rounded-b-[50%]"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
<div className="">
<h2 className="flex items-center gap-3 text-3xl font-bold text-stone-800">
<iconify-icon className="text-stone-600" icon="solar:shop-linear"></iconify-icon>
    General Store
</h2>
<p className="text-stone-500 mt-2 font-medium">Spruce up your cottage with today's specials!</p>
</div>

<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg relative bg-stone-800 text-white hover:bg-stone-700">
<iconify-icon className="" icon="solar:cart-large-linear" width="22"></iconify-icon>
<span className="-top-1 -right-1 text-[10px] flex items-center justify-center font-bold text-white bg-rose-500 w-5 h-5 border-[#F2ECE4] border-2 rounded-full absolute">0</span>
</button>
</div>
</div>
<div className="grid lg:grid-cols-4 gap-8 gap-x-8 gap-y-8">

<div className="lg:col-span-1 space-y-4">
<div className="sticky bg-white border-stone-200/60 border rounded-3xl pt-4 pr-4 pb-4 pl-4 top-28 shadow-sm">
<h3 className="uppercase text-sm font-bold text-stone-400 tracking-wider mb-4 pr-2 pl-2">Categories</h3>

<nav aria-label="Shop categories" className="space-y-2">
<button className="shop-cat-btn flex transition-all text-sm text-left w-full rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between bg-rose-100 text-rose-600 font-bold shadow-[0_10px_30px_-18px_rgba(244,63,94,0.55)] hover:shadow-[0_14px_34px_-18px_rgba(244,63,94,0.45)]" data-shop-category="featured">
<span className="">Featured</span>
<iconify-icon className="" height="20" icon="mingcute:star-line" strokeWidth="1.5" style={{color: 'rgb(87, 83, 78)'}} width="20"></iconify-icon>
</button>
<button className="shop-cat-btn flex transition-all hover:shadow-[0_12px_30px_-18px_rgba(251,113,133,0.5)] text-sm text-left w-full rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between bg-[#F5EFE6] text-stone-600 font-semibold" data-shop-category="toys">
<span className="">Toys</span>
<iconify-icon className="" height="20" icon="mingcute:toy-horse-line" strokeWidth="1.5" style={{color: 'rgb(87, 83, 78)'}} width="20"></iconify-icon>
</button>
<button className="shop-cat-btn flex transition-all hover:shadow-[0_12px_30px_-18px_rgba(251,113,133,0.5)] text-sm text-left w-full rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between bg-[#F5EFE6] text-stone-600 font-semibold" data-shop-category="clothing">
<span>Clothing</span>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="t-shirt-linear" height="18" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(87, 83, 78)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547c.448.562.985.66 2.058.858c.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716s.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968c.132.3.132.643.132 1.327Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
<button className="shop-cat-btn flex transition-all hover:shadow-[0_12px_30px_-18px_rgba(251,113,133,0.5)] text-sm text-left w-full rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between bg-[#F5EFE6] text-stone-600 font-semibold" data-shop-category="cups">
<span>Cups</span>
<iconify-icon className="" height="20" icon="solar:cup-hot-linear" strokeWidth="1.5" style={{color: 'rgb(87, 83, 78)'}} width="20"></iconify-icon>
</button>
</nav>
<p className="mt-4 px-2 text-xs font-medium text-stone-400">Tip: tap a category to browse the shelves.</p>
</div>
</div>

<div className="lg:col-span-3">
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 shop-grid-transition" id="shopGrid">

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="featured cups">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-rose-50">
<img alt="Potion" className="group-hover:scale-110 transition-transform mix-blend-multiply w-3/4 h-3/4 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-2 right-2 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-stone-500 border bg-white/80 border-white">
                RARE</div>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Love Potion Tea</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Adds +5 heart warmth</p>
<div className="flex mt-3 items-center justify-between">
<span className="text-sm font-bold text-amber-500">300 $</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="featured">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-blue-50">
<img alt="Chair" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Cloud Armchair</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Soft as a marshmallow</p>
<div className="flex mt-3 items-center justify-between">
<span className="text-sm font-bold text-amber-500">850 $</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="featured">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-emerald-50">
<img alt="Plant" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Monstera Baby</h4>
<p className="line-clamp-1 text-xs text-stone-400 mt-1">Needs water daily</p>
<div className="flex mt-3 items-center justify-between">
<span className="text-sm font-bold text-amber-500">120 $</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="clothing featured">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-sky-50">
<img alt="Hat" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 right-2 px-2 py-1 rounded-lg text-[10px] font-bold border bg-rose-400 text-white border-rose-300">
                -20%</div>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Summer Hat</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Perfect for farming</p>
<div className="flex items-center justify-between mt-3">
<div className="flex flex-col leading-none">
<span className="text-[10px] line-through text-stone-400">200 $</span>
<span className="text-sm font-bold text-amber-500">160$</span>
</div>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100 hidden" data-category="toys">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-amber-50">
<img alt="Toy" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Wooden Bunny</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Hand-carved charm</p>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-amber-500 text-sm">90 c</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100 hidden" data-category="cups">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-rose-50">
<img alt="Cup" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Berry Mug</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Best for cocoa nights</p>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-amber-500 text-sm">140 c</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="featured">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-amber-50">
<img alt="Lamp" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Toadstool Lamp</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Glows at night</p>
<div className="flex mt-3 items-center justify-between">
<span className="text-sm font-bold text-amber-500">450 $</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="shop-item rounded-3xl p-3 pb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border bg-white border-stone-100" data-category="featured">
<div className="rounded-2xl aspect-square flex items-center justify-center mb-3 relative overflow-hidden bg-purple-50">
<img alt="Star Fragment" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="px-1">
<h4 className="font-bold text-sm md:text-base text-stone-800">Star Fragment</h4>
<p className="text-xs mt-1 line-clamp-1 text-stone-400">Crafting material</p>
<div className="flex mt-3 items-center justify-between">
<span className="text-sm font-bold text-amber-500">2000 $</span>
<button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors bg-stone-100 hover:bg-rose-400 hover:text-white text-stone-600">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="hidden mt-6 rounded-3xl border border-white/60 bg-white/70 p-8 text-center text-stone-500" id="shopEmpty">
<div className="mx-auto mb-3 w-12 h-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
<iconify-icon icon="solar:confetti-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-stone-700">Nothing on this shelf yet.</p>
<p className="text-xs mt-1 text-stone-400">Try another category (the store restocks often!).</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-500 font-bold transition-colors">
                     View All Items
                     <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto">

<div className="grid md:grid-cols-2 gap-6 mb-20">
<div className="bg-[#5865F2]/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-[#5865F2]/20 transition-colors cursor-pointer group">
<div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform text-white">
<iconify-icon className="" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#5865F2] mb-2">Join the Discord</h3>
<p className="text-sm text-stone-600">Meet 50,000+ other villagers, trade items, and share your cottage designs!</p>
</div>
<div className="bg-[#1DA1F2]/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-[#1DA1F2]/20 transition-colors cursor-pointer group">
<div className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="solar:mailbox-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1DA1F2] mb-2">Weekly News</h3>
<p className="text-sm text-stone-600">Get dev updates, sneak peeks at new furniture sets, and free codes.</p>
</div>
</div>

<div className="rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl bg-stone-800">

<div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50 bg-stone-700"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-30 bg-rose-900"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Ready to find your calm?</h2>
<p className="text-lg text-stone-300 max-w-lg mr-auto mb-8 ml-auto" style={{}}>Your cozy cottage is waiting. Start your adventure in FoxyLand today.</p>
<button className="px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(251,113,133,0.5)] hover:scale-105 transition-all inline-flex items-center gap-2 text-white bg-gradient-to-br from-[#f39ba8] to-orange-300">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        Play for Free
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white rounded-t-[3rem] mt-10 pt-16 pr-6 pb-8 pl-6 shadow-inner">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-rose-300 text-white">F</div>
<span className="font-bold text-stone-700">FoxyLand</span>
</div>
<p className="leading-relaxed text-xs text-stone-400">Made with love and warm tea. <br/> © 2026 Dev Hub Games.</p>
</div>
<div className="">
<h4 className="font-bold mb-4 text-stone-800">Explore</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className=""></li>
<li className=""><a className="transition-colors hover:text-rose-400" href="#">Characters</a></li>
<li className=""><a className="transition-colors hover:text-rose-400" href="#">Updates</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold mb-4 text-stone-800">Support</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className=""><a className="transition-colors hover:text-rose-400" href="#">Help Center</a></li>
<li className=""><a className="transition-colors hover:text-rose-400" href="#">Community Rules</a></li>
<li className=""><a className="transition-colors hover:text-rose-400" href="#">Contact Us</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold mb-4 text-stone-800">Socials</h4>
<div className="flex gap-3 gap-x-3 gap-y-3">
<a className="w-10 h-10 rounded-full flex items-center justify-center hover:text-rose-500 transition-all bg-stone-100 text-stone-600 hover:bg-rose-100" href="#">
<iconify-icon className="" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center hover:text-sky-500 transition-all bg-stone-100 text-stone-600 hover:bg-sky-100" href="#">
<iconify-icon className="" icon="solar:plain-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between text-xs border-stone-100 text-stone-400">
<p className="">Privacy Policy • Terms of Service</p>
<p className="mt-2 md:mt-0 flex items-center gap-1">
                    Designed with <iconify-icon className="text-rose-300" icon="solar:heart-bold"></iconify-icon> for cozy gamers
                </p>
</div>
</div>
</footer>


    </>
  );
}
