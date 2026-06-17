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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0c0a09]/80 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-semibold text-lg tracking-tighter flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-6 h-6 rounded bg-gradient-to-tr from-orange-600 to-amber-500 text-black">
<span className="iconify" data-icon="lucide:flame" data-width="14"></span>
</div>
                BBC
            </a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#private">Private Dining</a>
</div>

<div className="flex items-center gap-4">
<a className="text-xs font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-stone-200 transition-colors flex items-center gap-2" href="#reservations">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="14"></span>
                    Reserve
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ember-glow pointer-events-none opacity-80 mix-blend-screen"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] text-orange-400 font-medium tracking-wide uppercase mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
                Michelin Guide 2024 Selection
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-8">
                Primitive fire. <br/>
<span className="text-stone-500">Modern precision.</span>
</h1>
<p className="text-lg text-stone-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
                Experience the alchemy of charcoal and seasonal ingredients. <br className="hidden md:block"/>BBC redefines the bistro for the modern palate.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-stone-200 transition-all flex items-center justify-center gap-2">
                    Book a Table
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-stone-900 border border-stone-800 text-white font-medium text-sm rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
                    View Seasonal Menu
                    <span className="iconify text-stone-500" data-icon="lucide:arrow-down" data-width="14"></span>
</button>
</div>
</div>
</section>

<section className="py-20 relative" id="experience">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-8 rounded-xl md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-white" data-icon="lucide:flame" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 text-orange-400">
<span className="iconify" data-icon="lucide:chef-hat" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">The Charcoal Hearth</h3>
<p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                            Our open kitchen centers around a custom-built 3-tier grill. We use Binchotan charcoal to sear at 1000°F, locking in flavor while imparting a delicate smokiness.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative overflow-hidden group">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-900/20 to-transparent rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 text-emerald-400">
<span className="iconify" data-icon="lucide:sprout" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Hyper-Local</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Ingredients sourced within 50 miles. Our menu changes daily based on harvest.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl relative overflow-hidden group">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-900/20 to-transparent rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-6 text-rose-400">
<span className="iconify" data-icon="lucide:wine" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Curated Cellar</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Natural wines and rare vintages selected to pair perfectly with smoke and char.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl md:col-span-2 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-black uppercase tracking-wider">Signature</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-stone-700 text-stone-400 uppercase tracking-wider">Dry Aged</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">45-Day Wagyu Ribeye</h3>
<p className="text-stone-400 text-sm leading-relaxed mb-6">
                            Served with bone marrow butter, confit garlic, and charred leeks. A testament to patience and precision.
                        </p>
<a className="text-xs font-medium text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-1" href="#">
                            View Full Menu <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>

<div className="w-full md:w-48 h-32 md:h-40 rounded-lg bg-stone-900 border border-stone-800 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-stone-900 to-stone-900"></div>
<div className="w-24 h-24 rounded-full border border-stone-800 flex items-center justify-center relative">
<div className="w-16 h-16 rounded-full bg-stone-800"></div>
<span className="absolute -right-2 -top-2 text-stone-600">
<span className="iconify" data-icon="lucide:utensils-crossed" data-width="16"></span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="menu">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-orange-500 font-mono text-xs tracking-widest uppercase block mb-3">The Selection</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Autumn Tasting</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

<div className="group menu-item-hover rounded-lg p-2 -m-2 transition-colors cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium">Smoked Beef Tartare</h4>
<span className="text-stone-500 text-sm font-mono">$24</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">Egg yolk emulsion, pickled mustard seed, sourdough crisp.</p>
</div>

<div className="group menu-item-hover rounded-lg p-2 -m-2 transition-colors cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium">Charred Octopus</h4>
<span className="text-stone-500 text-sm font-mono">$32</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">Romesco sauce, fingerling potatoes, chorizo oil.</p>
</div>

<div className="group menu-item-hover rounded-lg p-2 -m-2 transition-colors cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium">Heritage Pork Chop</h4>
<span className="text-stone-500 text-sm font-mono">$45</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">Apple fennel slaw, cider glaze, burnt onion puree.</p>
</div>

<div className="group menu-item-hover rounded-lg p-2 -m-2 transition-colors cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium">Wild Mushroom Risotto</h4>
<span className="text-stone-500 text-sm font-mono">$36</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">Black truffle, parmesan crisp, thyme oil.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="text-xs font-medium text-stone-400 border border-stone-800 px-6 py-3 rounded-md hover:bg-stone-800 hover:text-white transition-all" href="#">Download Full Menu (PDF)</a>
</div>
</div>
</section>

<section className="py-24 relative" id="reservations">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Secure your table.</h2>
<p className="text-stone-400 font-light mb-8 max-w-md">
                    Reservations are released 30 days in advance. For parties larger than 8, please contact our events team directly.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h5 className="text-white text-sm font-medium">Location</h5>
<p className="text-stone-500 text-xs mt-1">128 Culinary Ave, Design District<br/>New York, NY 10013</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-400">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h5 className="text-white text-sm font-medium">Hours</h5>
<p className="text-stone-500 text-xs mt-1">
                                Tue - Thu: 5pm - 10pm<br/>
                                Fri - Sat: 5pm - 11pm<br/>
                                Sun: 4pm - 9pm
                            </p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2">
<div className="glass-panel rounded-2xl p-1 border-t border-white/10 shadow-2xl shadow-orange-900/10">
<div className="bg-[#0c0a09]/90 rounded-xl p-8 border border-white/5">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase font-semibold text-stone-500 mb-2 tracking-wide">Date</label>
<input className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors cursor-pointer invert-calendar-icon" type="date"/>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-stone-500 mb-2 tracking-wide">Guests</label>
<div className="relative">
<select className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 appearance-none cursor-pointer">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5 Guests</option>
<option>6+ Guests</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-stone-500 mb-2 tracking-wide">Time</label>
<div className="grid grid-cols-4 gap-2">
<button className="text-xs py-2.5 rounded-md border border-stone-800 bg-stone-900 text-stone-400 hover:border-orange-500/30 hover:text-white transition-colors" type="button">5:00 PM</button>
<button className="text-xs py-2.5 rounded-md border border-stone-800 bg-stone-900 text-stone-400 hover:border-orange-500/30 hover:text-white transition-colors" type="button">5:30 PM</button>
<button className="text-xs py-2.5 rounded-md border border-orange-500/40 bg-orange-500/10 text-white font-medium shadow-[0_0_15px_rgba(249,115,22,0.1)]" type="button">6:30 PM</button>
<button className="text-xs py-2.5 rounded-md border border-stone-800 bg-stone-900 text-stone-400 hover:border-orange-500/30 hover:text-white transition-colors" type="button">7:00 PM</button>
</div>
</div>
<div className="pt-2">
<label className="block text-[10px] uppercase font-semibold text-stone-500 mb-2 tracking-wide">Contact Details</label>
<input className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 mb-3 placeholder:text-stone-700" placeholder="Email Address" type="email"/>
<button className="w-full bg-white text-black font-semibold text-sm py-3.5 rounded-lg hover:bg-stone-200 transition-colors shadow-lg shadow-white/5" type="button">
                                    Confirm Request
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded bg-stone-900 text-orange-500">
<span className="iconify" data-icon="lucide:flame" data-width="16"></span>
</div>
<span className="text-white font-semibold tracking-tighter">BBC</span>
</div>
<div className="flex gap-6 text-xs text-stone-500 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Press</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Allergens</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4 text-stone-500">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
</footer>

    </>
  );
}
