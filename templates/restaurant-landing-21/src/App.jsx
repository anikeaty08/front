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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-['Forum'] text-xl text-white tracking-tighter uppercase group-hover:text-[#C65A1E] transition-colors duration-300">
                    The Lost Yeti
                </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors duration-200" href="#menu">Menu</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors duration-200" href="#chefs">Chefs</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors duration-200" href="#blog">Blog</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors duration-200" href="#locations">Locations</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#C65A1E] rounded-xl hover:bg-[#a84915] hover:shadow-[0_0_20px_rgba(198,90,30,0.4)] transition-all duration-300" href="#reserve">
                    Book a Table
                </a>

<button className="md:hidden text-white p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-fire-in-a-fireplace-5334/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90"></div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center animate-fade-in">
<h1 className="font-['Forum'] text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6">
                A Bold Himalayan Kitchen <br/>
<span className="text-[#C65A1E] italic font-medium">Crafted by Fire</span> &amp; Flavor
            </h1>
<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Step into The Lost Yeti Kitchen &amp; Bar — where authentic Himalayan recipes, flame-grilled specialties, and modern dining come together in an unforgettable atmosphere.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#C65A1E] rounded-xl hover:bg-[#a84915] hover:shadow-[0_0_25px_rgba(198,90,30,0.5)] transition-all duration-300 flex items-center justify-center gap-2" href="#menu">
                    Explore Menu
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center" href="#reserve">
                    Reserve Table
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 animate-bounce">
<span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
<iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<section className="relative z-20 -mt-20 md:-mt-32 px-6" id="reserve">
<div className="max-w-5xl mx-auto">
<div className="bg-[#111] border border-white/5 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row">

<div className="p-10 md:p-12 md:w-2/5 flex flex-col justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
<h2 className="font-['Forum'] text-3xl md:text-4xl text-white tracking-tight mb-4">Reserve Your Table</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                        Experience unforgettable flavors in a warm, premium setting. For parties larger than 8, please contact us directly.
                    </p>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-[#C65A1E]" icon="solar:phone-linear" width="20"></iconify-icon>
                        +44 (0) 1481 123456
                    </div>
</div>

<div className="p-10 md:p-12 md:w-3/5 border-t md:border-t-0 md:border-l border-white/5">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 ml-1">Full Name</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 ml-1">Phone Number</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-all" placeholder="+44..." type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 ml-1">Date</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-all" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 ml-1">Time</label>
<div className="relative">
<select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-all">
<option>18:00</option>
<option>18:30</option>
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
<option>20:30</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="text-xs text-neutral-400 ml-1">Number of Guests</label>
<div className="relative">
<select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-all">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<button className="sm:col-span-2 mt-2 w-full px-6 py-3.5 text-sm font-medium text-[#0a0a0a] bg-white rounded-xl hover:bg-[#C65A1E] hover:text-white hover:shadow-[0_0_20px_rgba(198,90,30,0.4)] transition-all duration-300" type="button">
                            Confirm Booking
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Cooking over fire" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#111] rounded-full border border-white/5 flex items-center justify-center p-6 hidden md:flex">
<p className="font-['Forum'] text-center text-sm text-white tracking-tight uppercase">Crafted<br/><span className="text-[#C65A1E]">With Passion</span><br/>Since 2026</p>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-8">
<div>
<span className="text-[#C65A1E] text-xs font-medium tracking-[0.2em] uppercase mb-2 block">Our Story</span>
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight leading-tight">The Lost Yeti <br/> Experience</h2>
</div>
<p className="text-base text-neutral-400 leading-relaxed font-light">
                    At The Lost Yeti Kitchen &amp; Bar, we bring the soul of the Himalayas to your plate. Our culinary philosophy is rooted in ancient traditions, where fire, spice, and time-honored techniques transform simple ingredients into extraordinary feasts. 
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 text-[#C65A1E]">
<iconify-icon icon="solar:flame-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Flame-Grilled</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Specialties cooked over open flames for deep flavor.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 text-[#C65A1E]">
<iconify-icon icon="solar:leaf-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Fresh Ingredients</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Locally sourced produce mixed with Himalayan herbs.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 text-[#C65A1E]">
<iconify-icon icon="solar:star-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Authentic Flavors</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Recipes passed down through generations.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 text-[#C65A1E]">
<iconify-icon icon="solar:cup-hot-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Premium Ambience</h4>
<p className="text-xs text-neutral-500 leading-relaxed">A dark, warm setting perfect for any occasion.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<a className="group relative aspect-square rounded-2xl overflow-hidden block" href="#menu">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight">Starters</h3>
</div>
</a>

<a className="group relative aspect-square rounded-2xl overflow-hidden block" href="#menu">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight">Grill &amp; BBQ</h3>
</div>
</a>

<a className="group relative aspect-square rounded-2xl overflow-hidden block" href="#menu">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&amp;w=2088&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight">Himalayan Mains</h3>
</div>
</a>

<a className="group relative aspect-square rounded-2xl overflow-hidden block" href="#menu">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight">Cocktails</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#0d0d0d]" id="menu">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#C65A1E] text-xs font-medium tracking-[0.2em] uppercase mb-2 block">Signatures</span>
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Crafted With Passion</h2>
</div>
<div className="space-y-10">

<div className="group">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight group-hover:text-[#C65A1E] transition-colors">Himalayan Momo Selection</h3>
<div className="flex-grow border-b border-white/10 border-dotted mx-4 relative top-[-6px]"></div>
<span className="font-['Forum'] text-xl text-white">£14</span>
</div>
<p className="text-sm text-neutral-500 font-light pr-12">Steamed dumplings filled with spiced ground meat or vegetables, served with roasted tomato and sesame achar.</p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight group-hover:text-[#C65A1E] transition-colors">Flame-Grilled Yeti Platter</h3>
<div className="flex-grow border-b border-white/10 border-dotted mx-4 relative top-[-6px]"></div>
<span className="font-['Forum'] text-xl text-white">£32</span>
</div>
<p className="text-sm text-neutral-500 font-light pr-12">An assortment of overnight marinated lamb chops, chicken tikka, and smoked pork belly, grilled over charcoal.</p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight group-hover:text-[#C65A1E] transition-colors">Traditional Thukpa Bowl</h3>
<div className="flex-grow border-b border-white/10 border-dotted mx-4 relative top-[-6px]"></div>
<span className="font-['Forum'] text-xl text-white">£18</span>
</div>
<p className="text-sm text-neutral-500 font-light pr-12">Hearty hand-pulled noodle soup enriched with slow-cooked bone broth, seasonal greens, and chili crisp.</p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight group-hover:text-[#C65A1E] transition-colors">Yeti Special Curry</h3>
<div className="flex-grow border-b border-white/10 border-dotted mx-4 relative top-[-6px]"></div>
<span className="font-['Forum'] text-xl text-white">£24</span>
</div>
<p className="text-sm text-neutral-500 font-light pr-12">Tender goat meat slow-braised in a rich, dark gravy of black cardamom, fenugreek, and secret mountain spices.</p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['Forum'] text-xl md:text-2xl text-white tracking-tight group-hover:text-[#C65A1E] transition-colors">Saffron Dessert Delight</h3>
<div className="flex-grow border-b border-white/10 border-dotted mx-4 relative top-[-6px]"></div>
<span className="font-['Forum'] text-xl text-white">£11</span>
</div>
<p className="text-sm text-neutral-500 font-light pr-12">Warm reduced milk pudding infused with mountain saffron, topped with crushed pistachios and edible gold leaf.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/20 rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300" href="#">
                    View Full Menu
                </a>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Cinematic food preparation" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<h2 className="font-['Forum'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">Discover The Lost Yeti</h2>
<p className="text-base md:text-lg text-neutral-300 font-light">
                Explore the passion, fire, and rigorous craftsmanship behind every dish we serve. It's more than a meal; it's a journey to the top of the world.
            </p>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="chefs">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[#C65A1E] text-xs font-medium tracking-[0.2em] uppercase mb-2 block">The Masters</span>
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Meet Our Chefs</h2>
</div>
<p className="text-sm text-neutral-400 max-w-md font-light leading-relaxed">
                    Bringing decades of experience from the high-altitude kitchens of Nepal to the modern culinary scene.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-[#111]">
<img alt="Chef Arjun Rai" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-['Forum'] text-2xl text-white tracking-tight mb-1">Arjun Rai</h3>
<span className="text-xs text-[#C65A1E] uppercase tracking-wider font-medium block mb-3">Head Chef</span>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        With over 20 years mastering fire-based cooking techniques in Kathmandu, Chef Arjun brings an uncompromising standard for authentic flavor and presentation to every plate.
                    </p>
</div>

<div className="group md:mt-16">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-[#111]">
<img alt="Chef Maya Sherpa" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-['Forum'] text-2xl text-white tracking-tight mb-1">Maya Sherpa</h3>
<span className="text-xs text-[#C65A1E] uppercase tracking-wider font-medium block mb-3">Sous Chef</span>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        A specialist in Himalayan spices and marinades, Maya's delicate touch balances the intense heat of the grill with subtle, fragrant undertones that define our signature dishes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d0d0d] px-6 border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#111] border border-white/5 relative">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#C65A1E]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic leading-relaxed mb-6">"An unforgettable dining experience. The Momo selection was incredible, and the atmosphere feels both exclusive and welcoming."</p>
<span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">James T.</span>
</div>

<div className="p-8 rounded-2xl bg-[#111] border border-white/5 relative">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#C65A1E]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic leading-relaxed mb-6">"The ambiance is warm and premium. The flame-grilled lamb chops were arguably the best I’ve ever had. Highly recommend booking in advance."</p>
<span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Sarah L.</span>
</div>

<div className="p-8 rounded-2xl bg-[#111] border border-white/5 relative">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#C65A1E]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic leading-relaxed mb-6">"Best Himalayan food I’ve ever had outside of Kathmandu. The dark, moody aesthetic makes it perfect for date night."</p>
<span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Michael R.</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="blog">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[#C65A1E] text-xs font-medium tracking-[0.2em] uppercase mb-2 block">Journal</span>
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Stories From The Fire</h2>
</div>
<a className="text-sm text-white hover:text-[#C65A1E] transition-colors flex items-center gap-2 pb-2" href="#">
                    View All Posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group block rounded-2xl bg-[#111] border border-white/5 overflow-hidden hover:border-white/10 transition-colors" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<span className="text-xs text-neutral-500 mb-3 block">Oct 12, 2026</span>
<h3 className="font-['Forum'] text-xl text-white tracking-tight mb-3 group-hover:text-[#C65A1E] transition-colors">The Story Behind Himalayan Flavors</h3>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">Discover the rich history and cultural significance of the spices that define our unique menu offerings.</p>
<span className="text-xs font-medium text-white group-hover:text-[#C65A1E] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block rounded-2xl bg-[#111] border border-white/5 overflow-hidden hover:border-white/10 transition-colors" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs text-neutral-500 mb-3 block">Oct 05, 2026</span>
<h3 className="font-['Forum'] text-xl text-white tracking-tight mb-3 group-hover:text-[#C65A1E] transition-colors">5 Must-Try Dishes at The Lost Yeti</h3>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">A curated guide to navigating our menu, from classic Momos to our signature flame-grilled platters.</p>
<span className="text-xs font-medium text-white group-hover:text-[#C65A1E] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block rounded-2xl bg-[#111] border border-white/5 overflow-hidden hover:border-white/10 transition-colors" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs text-neutral-500 mb-3 block">Sep 28, 2026</span>
<h3 className="font-['Forum'] text-xl text-white tracking-tight mb-3 group-hover:text-[#C65A1E] transition-colors">The Art of Fire-Grilled Cooking</h3>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">Why we believe cooking over an open flame is the only way to truly unlock the depth of our ingredients.</p>
<span className="text-xs font-medium text-white group-hover:text-[#C65A1E] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                            Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6" id="locations">
<div className="max-w-7xl mx-auto bg-[#111] border border-white/5 rounded-2xl overflow-hidden flex flex-col lg:flex-row">

<div className="w-full lg:w-1/2 min-h-[400px] relative bg-[#1a1a1a]">

<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0a0a0a]/50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C65A1E] flex flex-col items-center drop-shadow-[0_0_15px_rgba(198,90,30,0.5)]">
<iconify-icon icon="solar:map-point-bold" width="48"></iconify-icon>
<div className="w-3 h-1 bg-black/50 rounded-[100%] mt-1 blur-[2px]"></div>
</div>
</div>

<div className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
<h2 className="font-['Forum'] text-3xl md:text-4xl text-white tracking-tight mb-8">Visit Us</h2>
<div className="space-y-8">
<div>
<h4 className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Address
                        </h4>
<p className="text-base text-neutral-300 font-light leading-relaxed">
                            Town Centre,<br/>
                            St Peter Port,<br/>
                            Guernsey, GY1 2PN
                        </p>
</div>
<div className="h-px w-full bg-white/5"></div>
<div>
<h4 className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon> Opening Hours
                        </h4>
<div className="grid grid-cols-2 gap-4 max-w-xs text-sm text-neutral-300 font-light">
<span>Lunch:</span>
<span>12:00 PM – 2:00 PM</span>
<span>Dinner:</span>
<span>6:00 PM – 9:00 PM</span>
</div>
<p className="text-xs text-[#C65A1E] mt-3 italic">* Closed on Mondays</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<span className="font-['Forum'] text-2xl text-white tracking-tighter uppercase mb-4 block">The Lost Yeti</span>
<p className="text-sm text-neutral-500 font-light leading-relaxed pr-4">
                        Bold flavors. Warm moments. Unforgettable experiences crafted by fire.
                    </p>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Our Menu</a></li>
<li><a className="hover:text-[#C65A1E] transition-colors" href="#reserve">Reservations</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li>+44 (0) 1481 123456</li>
<li>hello@thelostyeti.com</li>
<li>Town Centre, Guernsey</li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6">Follow Us</h4>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600 font-light">© 2026 The Lost Yeti Kitchen &amp; Bar. All rights reserved.</p>
<div className="flex gap-4 text-xs text-neutral-600 font-light">
<a className="hover:text-neutral-300" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
