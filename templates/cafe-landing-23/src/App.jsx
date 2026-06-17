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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-t-0 border-x-0 border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<span className="text-emerald-500 tracking-tighter">OZ</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<a className="bg-white text-zinc-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors hidden md:block" href="#booking">
                Book Table
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[2px] z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10"></div>
<img alt="Cafe Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6 border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                Dhanmondi's Green Oasis
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                Welcome to Ozz Cafe
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
                Affordable luxury dining with a cozy green vibe. The perfect spot to unwind, connect, and enjoy great food.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]" href="#menu">
                    View Menu
                </a>
<a className="w-full sm:w-auto px-8 py-3 rounded-full glass-panel text-white font-medium hover:bg-zinc-800/50 transition-all" href="#booking">
                    Book a Table
                </a>
</div>
</div>
</section>

<section className="py-12 relative z-20 -mt-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm tracking-tight mb-1">Budget Friendly</h3>
<p className="text-xs text-zinc-500">From ৳200 to ৳800</p>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm tracking-tight mb-1">Aesthetic Vibe</h3>
<p className="text-xs text-zinc-500">Nature-inspired decor</p>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm tracking-tight mb-1">Indoor &amp; Outdoor</h3>
<p className="text-xs text-zinc-500">AC &amp; Balcony seating</p>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm tracking-tight mb-1">Perfect Spot</h3>
<p className="text-xs text-zinc-500">For friends &amp; dates</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
<div className="relative grid grid-cols-2 gap-4">
<img alt="Cafe Interior" className="rounded-2xl w-full h-64 object-cover glass-panel p-1 mt-8" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Coffee" className="rounded-2xl w-full h-64 object-cover glass-panel p-1" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">A Premium Vibe, <br/><span className="text-emerald-500">Without the Premium Tag.</span></h2>
<p className="text-zinc-400 font-light leading-relaxed mb-6 text-sm md:text-base">
                        Located in the heart of Dhanmondi, Ozz Cafe is your go-to hangout spot. We believe that a beautiful, aesthetically pleasing environment shouldn't cost a fortune. Our space is carefully designed with lush greenery, soft lighting, and modern decor to provide a high-end experience.
                    </p>
<p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm md:text-base">
                        Whether you want to chill in our cozy air-conditioned indoor area or enjoy the evening breeze on our balcony, we've got you covered. With a menu ranging from just <strong className="text-white font-medium">৳200 to ৳800</strong>, it's the perfect place for students, friends, and family to gather.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Highly Instagrammable interior
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Budget-friendly menu
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Popular Dhanmondi location
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50 border-t border-zinc-900" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Featured Menu</h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto">Discover our most loved items. High-quality taste crafted to fit your everyday budget.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-4 flex flex-col group hover:bg-zinc-900/60 transition-colors">
<div className="h-48 rounded-xl overflow-hidden mb-4 relative">
<img alt="Special Platter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-white text-sm font-medium">
                            ৳250
                        </div>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg mb-2">Ozz Special Platter</h3>
<p className="text-xs text-zinc-500 font-light mb-4 flex-grow">Chicken Cutlet, Fried Rice, Thai Soup, Spring Roll, Chicken Masala, and Fresh Vegetables.</p>
<div className="pt-4 border-t border-zinc-800/50 flex justify-between items-center">
<span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded">Best Seller</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col group hover:bg-zinc-900/60 transition-colors">
<div className="h-48 rounded-xl overflow-hidden mb-4 relative">
<img alt="Chicken Wings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-white text-sm font-medium">
                            ৳111
                        </div>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg mb-2">Spicy Chicken Wings</h3>
<p className="text-xs text-zinc-500 font-light mb-4 flex-grow">6 pieces of crispy, juicy wings tossed in our signature spicy BBQ sauce.</p>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col group hover:bg-zinc-900/60 transition-colors">
<div className="h-48 rounded-xl overflow-hidden mb-4 relative">
<img alt="BBQ Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 text-white text-sm font-medium">
                            ৳450
                        </div>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg mb-2">BBQ Chicken Pizza</h3>
<p className="text-xs text-zinc-500 font-light mb-4 flex-grow">Classic thin crust topped with grilled BBQ chicken, mozzarella, onions, and cilantro.</p>
</div>

<div className="glass-panel rounded-2xl p-6 md:col-span-2 lg:col-span-3">
<h3 className="text-white font-medium tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:cup-hot-linear"></iconify-icon> More Favorites
                    </h3>
<div className="grid md:grid-cols-3 gap-y-4 gap-x-8">
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<div>
<h4 className="text-sm text-zinc-200 font-medium">Creamy Pasta</h4>
<p className="text-xs text-zinc-500">White sauce, mushroom, chicken</p>
</div>
<span className="text-sm text-white font-medium">৳320</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<div>
<h4 className="text-sm text-zinc-200 font-medium">Authentic Thai Soup</h4>
<p className="text-xs text-zinc-500">Prawns, mushrooms, lemongrass</p>
</div>
<span className="text-sm text-white font-medium">৳280</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
<div>
<h4 className="text-sm text-zinc-200 font-medium">Fried Rice Combo</h4>
<p className="text-xs text-zinc-500">Rice, crispy chicken, veggies</p>
</div>
<span className="text-sm text-white font-medium">৳220</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="reviews">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Honest Experiences</h2>
<p className="text-zinc-400 text-sm">See what our customers are saying about us.</p>
</div>
<div className="flex items-center gap-4 glass-panel px-6 py-3 rounded-full border-zinc-800/50">
<div className="text-3xl font-semibold text-white tracking-tight">4.3</div>
<div>
<div className="flex text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-line-duotone"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mt-1">Based on 450+ reviews</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl flex flex-col">
<div className="flex text-emerald-500 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light mb-6 flex-grow leading-relaxed">"Amazing aesthetics! Perfect for Instagram photos. The plant decor gives it such a fresh vibe. Prices are incredibly reasonable for a place in Dhanmondi."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">SA</div>
<div>
<p className="text-sm text-white font-medium">Sadia A.</p>
<p className="text-xs text-zinc-600">Local Guide</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl flex flex-col">
<div className="flex text-emerald-500 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light mb-6 flex-grow leading-relaxed">"Loved the Special Platter for just 250 tk! It's super fulfilling. The indoor AC area is very cozy for long hangouts with friends. Friendly staff too."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">RH</div>
<div>
<p className="text-sm text-white font-medium">Rahat H.</p>
<p className="text-xs text-zinc-600">Student</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl flex flex-col bg-zinc-900/20">
<div className="flex text-emerald-500 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light mb-6 flex-grow leading-relaxed">"Great environment and aesthetic lighting. However, the service was a bit slow during the weekend rush. Food was decent but took about 40 minutes to arrive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">TI</div>
<div>
<p className="text-sm text-white font-medium">Tahsin I.</p>
<p className="text-xs text-zinc-600">Food Blogger</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl flex flex-col bg-zinc-900/20">
<div className="flex text-emerald-500 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-line-duotone"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light mb-6 flex-grow leading-relaxed">"Very affordable, which is great. But food consistency is an issue. Sometimes the pasta is amazing, sometimes it lacks flavor. Tables could be cleaned faster."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">MA</div>
<div>
<p className="text-sm text-white font-medium">Maliha A.</p>
<p className="text-xs text-zinc-600">Regular Customer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center">The Atmosphere</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel p-1">
<img alt="Cafe details" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel p-1 md:translate-y-8">
<img alt="Cafe seating" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel p-1">
<img alt="Outdoor seating" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel p-1 md:translate-y-8">
<img alt="Plants decor" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="booking">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border-emerald-500/20 green-glow">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
<div className="relative z-10 text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Reserve Your Spot</h2>
<p className="text-zinc-400 text-sm">Secure your table for the best hangout experience.</p>
</div>
<form className="relative z-10 grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Full Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Phone Number</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="+880 1..." type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Date &amp; Time</label>
<div className="relative">
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none [&amp;::-webkit-calendar-picker-indicator]:invert [&amp;::-webkit-calendar-picker-indicator]:opacity-50" type="datetime-local"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-medium text-zinc-400 ml-1">Number of Guests</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all">
<option value="1">1 Person</option>
<option selected="" value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5+">5+ People</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="md:col-span-2 mt-4">
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg shadow-emerald-900/20" type="button">
                            Confirm Reservation
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="mt-auto border-t border-zinc-900 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-12">
<div>
<div className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<span className="text-emerald-500 tracking-tighter">OZ</span>
</div>
                        Ozz Cafe
                    </div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                        Affordable luxury dining. Your everyday escape into nature, coffee, and good conversations.
                    </p>
</div>
<div>
<h4 className="text-white font-medium tracking-tight mb-4 text-sm">Location</h4>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-emerald-500" icon="solar:map-point-linear"></iconify-icon>
<span>House 12, Road 27 (Old),<br/>Dhanmondi, Dhaka 1209</span>
</li>
<li className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
<iconify-icon className="text-emerald-500" icon="solar:phone-linear"></iconify-icon>
                            +880 1234 567890
                        </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium tracking-tight mb-4 text-sm">Opening Hours</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex justify-between w-48"><span>Sat - Thu</span> <span>11:00 AM - 11:00 PM</span></li>
<li className="flex justify-between w-48 text-emerald-400"><span>Friday</span> <span>02:00 PM - 11:00 PM</span></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 Ozz Cafe. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/30 transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/30 transition-all" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/30 transition-all" href="#">
<iconify-icon icon="solar:map-arrow-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
