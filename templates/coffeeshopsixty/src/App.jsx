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



        function switchView(viewName) {
            const homeView = document.getElementById('home-view');
            const menuView = document.getElementById('menu-view');
            
            // Scroll to top when switching
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (viewName === 'menu') {
                homeView.classList.remove('active');
                setTimeout(() => {
                    homeView.style.display = 'none';
                    menuView.style.display = 'block';
                    // subtle delay to allow display block to apply before opacity
                    requestAnimationFrame(() => {
                        menuView.classList.add('active');
                    });
                }, 500);
            } else {
                menuView.classList.remove('active');
                setTimeout(() => {
                    menuView.style.display = 'none';
                    homeView.style.display = 'block';
                    requestAnimationFrame(() => {
                        homeView.classList.add('active');
                    });
                }, 500);
            }
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
      

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-2xl font-semibold tracking-tighter text-white hover:text-[#7d1b18] transition-colors duration-300 z-50" href="#" onclick="switchView('home')">
                BLANC<span className="text-[#7d1b18]">.</span>
</a>

<div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-wide uppercase text-neutral-400">
<button className="hover:text-white transition-colors uppercase" onclick="switchView('menu')">Full Menu</button>
<a className="hover:text-white transition-colors" href="#shop" onclick="switchView('home')">Shop</a>
<a className="hover:text-white transition-colors" href="#visit" onclick="switchView('home')">Location</a>
</div>

<div className="hidden md:flex items-center gap-6">

<div className="flex items-center gap-3 pr-6 border-r border-white/10">
<a className="group relative flex items-center justify-center bg-black border border-white/10 w-9 h-9 rounded-full hover:border-[#fc8019] transition-colors" href="#" title="Order on Swiggy">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-[#fc8019] transition-colors" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12.87 2.05c-3.15-.35-5.96 2.09-5.96 5.25v2.85c0 .41-.34.75-.75.75H5.4c-2.43 0-4.4 1.97-4.4 4.4v2.8c0 2.43 1.97 4.4 4.4 4.4h12.8c2.43 0 4.4-1.97 4.4-4.4v-8.8c0-3.92-3.08-7.15-6.95-7.25h-.78z"></path>
</svg>
</a>
<a className="group relative flex items-center justify-center bg-black border border-white/10 w-9 h-9 rounded-full hover:border-[#cb202d] transition-colors" href="#" title="Order on Zomato">
<svg className="w-12 h-12 text-neutral-400 group-hover:text-[#cb202d] transition-colors" fill="currentColor" viewbox="0 0 64 64">
<path d="M46.7,21.6c-2.7,0-5.1,1.5-6.4,3.8L32.9,40.1c-0.3,0.6-1.1,0.6-1.4,0l-3.3-6.6c-0.2-0.5-0.7-0.8-1.3-0.8 c-0.8,0-1.4,0.6-1.4,1.4c0,0.2,0.1,0.4,0.2,0.6l5.7,11.5c1.3,2.7,4.1,4.4,7.1,4.4c1.9,0,3.7-0.7,5.1-2c1.4-1.4,2.2-3.3,2.2-5.3 C46,36.5,46.7,21.6,46.7,21.6z M19.3,26.5c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3 C24.6,28.9,22.2,26.5,19.3,26.5z"></path>
<path d="M32,0C14.3,0,0,14.3,0,32s14.3,32,32,32s32-14.3,32-32S49.7,0,32,0z M44.6,45.4c-1.9,1.9-4.5,2.9-7.1,2.9 c-4.2,0-8-2.3-9.9-6.1l-4.1-8.2c-0.4-0.8-1.5-0.8-1.9,0l-0.8,1.6c-0.2,0.5-0.7,0.8-1.3,0.8c-0.8,0-1.4-0.6-1.4,1.4 c0,0.2,0.1,0.4,0.2,0.6l5.7,11.5c1.3,2.7,4.1,4.4,7.1,4.4c1.9,0,3.7-0.7,5.1-2c1.4-1.4,2.2-3.3,2.2-5.3C38.6,45.4,44.6,45.4,44.6,45.4 z" opacity="0.1"></path>
</svg>
</a>
</div>
<button className="group flex items-center gap-2 text-sm font-medium text-[#7d1b18] hover:text-white transition-colors" onclick="switchView('menu')">
<span>Reserve</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="view-section active" id="home-view">

<header className="md:pt-48 md:pb-32 overflow-hidden max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">

<div className="steam-particle w-12 h-12 top-[60%] left-[65%]" style={{animation: 'steam 4s infinite ease-out'}}></div>
<div className="steam-particle w-16 h-16 top-[55%] left-[68%]" style={{animation: 'steam 5s infinite ease-out 1s'}}></div>
<div className="steam-particle w-10 h-10 top-[65%] left-[62%]" style={{animation: 'steam 3.5s infinite ease-out 0.5s'}}></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 z-10 relative gap-x-12 gap-y-12 items-end">
<div className="md:col-span-7 space-y-8 animate-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-4 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#7d1b18]"></span>
                        Bengaluru Edition: Monsoon Malabar
                    </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white">
                        Bengaluru's <br/>
<span className="font-serif italic text-[#7d1b18]">Brewing</span> <br/>
                        Soul.
                    </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-md font-light leading-relaxed delay-100 animate-reveal">
                        "Bengaluru runs on filter coffee, we just perfected the art." <br/>
<span className="block text-sm text-neutral-600 mt-2">Found in Gandhi Nagar, Designed for You.</span>
</p>
<div className="flex items-center gap-6 pt-4 delay-200 animate-reveal">
<button className="bg-[#7d1b18] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2" onclick="switchView('menu')">
                            Order Pickup
                            <iconify-icon icon="lucide:coffee" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
                            Find on Map
                        </button>
</div>
</div>

<div className="md:col-span-5 relative delay-300 animate-reveal">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 group">

<img alt="Pour over coffee brewing" className="bg-animate object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88f42277-86ec-405a-b6bc-196282e68b33_800w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[2px] bg-[#dfa878]/80" style={{animation: 'drip 2s infinite ease-in'}}></div>
<div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex justify-between items-center">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Now Pouring</p>
<p className="text-sm font-semibold text-white">Chikmagalur Estate Reserve</p>
</div>
<div className="h-10 w-10 rounded-full bg-[#7d1b18] text-white flex items-center justify-center">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/10 bg-[#0a0a0a] py-6 overflow-hidden relative">
<div className="whitespace-nowrap flex animate-marquee">
<span className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-800 mx-8 uppercase">Aesthetics • Kaapi • Culture • Blanc •</span>
<span className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-800 mx-8 uppercase">Aesthetics • Kaapi • Culture • Blanc •</span>
<span className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-800 mx-8 uppercase">Aesthetics • Kaapi • Culture • Blanc •</span>
</div>
</div>

<section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden border-b border-white/5" id="menu-preview">
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16">
<div className="self-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#7d1b18] mb-2 block">The Collection</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">Elevated <br/> Classics.</h2>
<p className="font-light text-neutral-400 max-w-md mb-8">Our beans are sourced directly from the misty hills of Karnataka and roasted in small batches in Gandhinagar.</p>
<button className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1 hover:border-[#7d1b18] hover:text-[#7d1b18] transition-colors" onclick="switchView('menu')">
                        View Full Menu
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="bg-[#111] text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5">
<ul className="space-y-6">

<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-lg text-neutral-200">Blanc Filter Kaapi</h4>
<span className="text-[#7d1b18] font-medium">₹180</span>
</div>
<p className="text-xs text-neutral-500">Traditional steel tumbler, chicory blend, frothed milk.</p>
</div>
</li>
<hr className="border-dashed border-neutral-800"/>

<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-lg text-neutral-200">Mysore Nugget Pour-Over</h4>
<span className="text-[#7d1b18] font-medium">₹240</span>
</div>
<p className="text-xs text-neutral-500">V60 drip, notes of spice and dark chocolate.</p>
</div>
</li>
<hr className="border-dashed border-neutral-800"/>

<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-lg text-neutral-200">Indiranagar Cold Brew</h4>
<span className="text-[#7d1b18] font-medium">₹260</span>
</div>
<p className="text-xs text-neutral-500">Steeped 18 hours, served with orange peel.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#050505] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="shop">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tighter mb-2">Drool Worthy</h2>
<p className="text-neutral-500 text-sm">Bring the BLANC experience to your kitchen.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-[#7d1b18] transition-colors" href="#">
                    View All
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="relative bg-[#111] rounded-xl overflow-hidden mb-4 aspect-square border border-white/5">
<img alt="Coffee Beans" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/045fb789-12b7-4580-b696-6aa96f265e87_800w.jpg"/>
<div className="absolute top-4 right-4">
<button className="bg-[#050505] text-white p-2 rounded-full border border-white/10 hover:border-[#7d1b18] transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Tiramisu</h3>
<p className="text-xs text-neutral-500 mb-2">Coorg &amp; Chikmagalur • 250g</p>
<p className="font-medium text-[#7d1b18]">₹550</p>
</div>

<div className="group">
<div className="relative bg-[#111] rounded-xl overflow-hidden mb-4 aspect-square border border-white/5">
<img alt="Ceramic Cup" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72b37b11-ce80-453d-8062-c8acc16de9d6_800w.jpg"/>
<div className="absolute top-4 right-4">
<button className="bg-[#050505] text-white p-2 rounded-full border border-white/10 hover:border-[#7d1b18] transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Burger &amp; Fries</h3>
<p className="text-xs text-neutral-500 mb-2">Juicy &amp; Delicious</p>
<p className="font-medium text-[#7d1b18]">₹899</p>
</div>

<div className="group">
<div className="relative bg-[#111] rounded-xl overflow-hidden mb-4 aspect-square border border-white/5">
<img alt="Coffee Scale" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c5a307e-d5f7-4244-9759-a42012cb1b38_800w.jpg"/>
<div className="absolute top-4 right-4">
<button className="bg-[#050505] text-white p-2 rounded-full border border-white/10 hover:border-[#7d1b18] transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Cheesecake</h3>
<p className="text-xs text-neutral-500 mb-2">Dripper, Papers, Scoop</p>
<p className="font-medium text-[#7d1b18]">₹1,200</p>
</div>
</div>
</section>

<section className="text-white bg-[#0a0a0a] border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="visit">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter">Visit BLANC</h2>
<div className="space-y-4 text-neutral-400 font-light">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-[#7d1b18]" icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
<p className="">Gandhi Nagar<br className=""/>Bengaluru, KA 560038</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-[#7d1b18]" icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
<p className="">Mon - Fri: 8am - 10pm<br/>Sat - Sun: 8am - 11pm</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-[#7d1b18]" icon="lucide:wifi" strokeWidth="1.5" width="20"></iconify-icon>
<p className="">High-speed WiFi for digital nomads.</p>
</div>
</div>
<div className="pt-8">
<p className="text-sm font-medium mb-4 text-neutral-300">Join the coffee club</p>
<form className="flex gap-2 max-w-sm">
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#7d1b18] placeholder-neutral-600 text-white outline-none transition-all" placeholder="email@domain.com" type="email"/>
<button className="bg-[#7d1b18] hover:bg-white hover:text-black text-white px-5 py-3 rounded-lg transition-colors duration-300" type="button">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/5">
<img alt="Bengaluru Coffee Shop" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium">Open Now</span>
</div>
</div>
</div>
</section>
</main>

<main className="view-section pt-32 pb-20" id="menu-view">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 animate-reveal">
<span className="text-xs font-medium tracking-widest uppercase text-[#7d1b18] mb-3 block">From Seed to Cup</span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Our Offerings</h1>
<p className="text-neutral-400 max-w-lg mx-auto font-light">
                    Meticulously sourced, carefully roasted, and brewed with precision. 
                    Experience the finest selection of Indian specialty coffee.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="space-y-12 animate-reveal delay-100">

<div>
<h3 className="text-2xl font-medium text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
<iconify-icon className="text-[#7d1b18]" icon="lucide:cup-soda"></iconify-icon> Espresso Bar
                        </h3>
<div className="space-y-5">
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Double Espresso</h4>
<p className="text-xs text-neutral-500">The foundation. Rich, syrupy, complex.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹140</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Piccolo / Cortado</h4>
<p className="text-xs text-neutral-500">1:1 ratio. Punchy yet milky.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹160</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Cappuccino</h4>
<p className="text-xs text-neutral-500">Thick foam, cocoa dusting.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹180</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Silk Board Flat White</h4>
<p className="text-xs text-neutral-500">Microfoam art, double ristretto.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹200</span>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
<iconify-icon className="text-[#7d1b18]" icon="lucide:flask-conical"></iconify-icon> Manual Brew
                        </h3>
<div className="space-y-5">
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">V60 Pour Over</h4>
<p className="text-xs text-neutral-500">Clean, tea-like body, highlights acidity.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹240</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Aeropress</h4>
<p className="text-xs text-neutral-500">Full immersion, rich body.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹240</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Classic French Press</h4>
<p className="text-xs text-neutral-500">Bold, heavy body, timeless.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹220</span>
</div>
</div>
</div>
</div>

<div className="space-y-12 animate-reveal delay-200">

<div>
<h3 className="text-2xl font-medium text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
<iconify-icon className="text-[#7d1b18]" icon="lucide:snowflake"></iconify-icon> Signature Cold
                        </h3>
<div className="space-y-5">
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Indiranagar Cold Brew</h4>
<p className="text-xs text-neutral-500">18hr steep, chocolate &amp; orange notes.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹260</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Vietnamese Iced Coffee</h4>
<p className="text-xs text-neutral-500">Robusta, condensed milk, lots of ice.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹240</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Espresso Tonic</h4>
<p className="text-xs text-neutral-500">Double shot, tonic water, lime slice.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹280</span>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
<iconify-icon className="text-[#7d1b18]" icon="lucide:utensils-crossed"></iconify-icon> From The Kitchen
                        </h3>
<div className="space-y-5">
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Butter Croissant</h4>
<p className="text-xs text-neutral-500">Flaky, french butter, served warm.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹180</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Sourdough Avocado Toast</h4>
<p className="text-xs text-neutral-500">Feta, cherry tomatoes, chili oil.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹450</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">Smash Burger &amp; Fries</h4>
<p className="text-xs text-neutral-500">Double patty, house sauce, brioche bun.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹899</span>
</div>
<div className="menu-item-row flex items-baseline justify-between group cursor-default">
<div className="flex-1">
<h4 className="text-neutral-200 font-medium">New York Cheesecake</h4>
<p className="text-xs text-neutral-500">Berry compote, biscuit base.</p>
</div>
<div className="menu-dots flex-1 mx-4 border-b border-dashed border-neutral-800 relative -top-1 transition-all duration-300"></div>
<span className="text-[#7d1b18] font-medium">₹320</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center animate-reveal delay-300">
<button className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all" onclick="switchView('home')">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon>
                    Back to Home
                </button>
</div>
</div>
</main>

<footer className="bg-[#050505] text-neutral-500 border-t border-white/5 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs font-medium">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white mb-6 block" href="#" onclick="switchView('home')">BLANC.</a>
<p className="mb-4">Bengaluru's finest specialty coffee experience.</p>
<div className="flex gap-4 mt-4">

<span className="hover:text-[#cb202d] transition-colors cursor-pointer">Zomato</span>
<span className="hover:text-[#fc8019] transition-colors cursor-pointer">Swiggy</span>
</div>
</div>
<div className="flex flex-col space-y-3">
<span className="text-white mb-2">Explore</span>
<button className="text-left hover:text-white transition-colors" onclick="switchView('menu')">Menu</button>
<a className="hover:text-white transition-colors" href="#">Roastery</a>
<a className="hover:text-white transition-colors" href="#">Merch</a>
</div>
<div className="flex flex-col space-y-3">
<span className="text-white mb-2">Social</span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col space-y-3">
<span className="text-white mb-2">Legal</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 pt-8 border-t border-white/5">
<p className="">© 2024 Blanc Coffee Bengaluru.</p>
<p className="">Made with ☕ in Gandhi Nagar</p>
</div>
</footer>


    </>
  );
}
