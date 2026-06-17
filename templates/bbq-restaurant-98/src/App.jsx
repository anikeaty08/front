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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-zinc-800">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-medium tracking-tighter text-sm">
                    HT
                </div>
<span className="text-sm font-medium tracking-tight text-white">Home Time BBQ</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#menu">Menu</a>
<a className="hover:text-white transition-colors duration-200" href="#bakery">Bakery</a>
<a className="hover:text-white transition-colors duration-200" href="#hours">Hours</a>
<a className="hover:text-white transition-colors duration-200" href="#location">Location</a>
</div>
<button className="bg-white text-black hover:bg-zinc-200 transition-colors px-4 py-2 rounded text-xs font-medium tracking-tight">
                Order Online
            </button>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 px-6 max-w-6xl mx-auto w-full relative">
<div className="subtle-gradient absolute inset-0 pointer-events-none"></div>

<header className="mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Open until 8:00 PM
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Texas-style barbecue <br className="hidden md:block"/>
<span className="text-zinc-500">meets artisan bakery in Brooks.</span>
</h1>
<p className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
                A favorite local gathering place blending southern barbecue traditions with café comforts. Wood-fired smoked meats, house-made sauces, and fresh pastries daily.
            </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group glass-panel rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">The Smokehouse</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                        Specializing in slow-smoked brisket, ribs, pulled pork, and chicken. Don't miss our signature Tailgater platter or the Chicken Crunch Sandwich.
                    </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Brisket</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Ribs</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">House Sauces</span>
</div>
</div>

<div className="group glass-panel rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:croissant" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="lucide:coffee" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Bakery &amp; Café</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                        Fresh artisan loaves, sourdough, cheesecakes, and our famous butter tarts. Paired perfectly with specialty espresso drinks.
                    </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Sourdough</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Pastries</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">Espresso</span>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-xl p-6 border-zinc-800 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3 text-orange-400">
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-sm text-white font-medium mb-1">"Travellers’ Choice"</p>
<p className="text-xs text-zinc-500 mb-4">Recognized on TripAdvisor for consistent quality and hospitality.</p>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Welcoming, family-friendly environment with soul music and generous portions. A community hub hosting events like the Hometime Christmas Market.
                        </p>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">

<div className="glass-panel rounded-xl p-6 border-zinc-800 h-full" id="hours">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:clock" strokeWidth="1.5" width="16"></iconify-icon>
                            Opening Hours
                        </h3>
<div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Monday</span>
<span className="text-zinc-600">Closed</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Tuesday</span>
<span className="text-white">8:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Wednesday</span>
<span className="text-white">8:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Thursday</span>
<span className="text-white">8:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Friday</span>
<span className="text-white">8:00 AM - 9:00 PM</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Saturday</span>
<span className="text-white">9:00 AM - 9:00 PM</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Sunday</span>
<span className="text-zinc-600">Closed</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 border-zinc-800 relative overflow-hidden group cursor-pointer" id="location">

<div className="absolute inset-0 bg-zinc-900 z-0 opacity-50">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white flex items-center gap-2 mb-1">
<iconify-icon className="text-zinc-500" icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
                                Visit Us
                            </h3>
</div>
<div>
<address className="not-italic text-sm text-zinc-300 mb-3 block">
                                703 1 St W,<br/>
                                Brooks, AB T1R 0N3<br/>
                                Canada
                            </address>
<a className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" href="tel:4037940974">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
                                (403) 794-0974
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4">
<div className="glass-panel rounded-xl p-8 border-zinc-800">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="text-xl font-medium text-white tracking-tight">Menu Favorites</h2>
<p className="text-sm text-zinc-500 mt-1">Authentic flavors made from scratch.</p>
</div>
<button className="text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded transition-colors self-start md:self-auto">
                        View Full Menu
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-2">
<div className="h-40 w-full bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-2 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="text-zinc-700 text-xs">Image Placeholder</span>
</div>
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Tailgater Platter</h4>
<span className="text-xs text-zinc-500">$32</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">The ultimate sampler. Brisket, ribs, and pulled pork served with two scratch-made sides.</p>
</div>

<div className="flex flex-col gap-2">
<div className="h-40 w-full bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-2 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="text-zinc-700 text-xs">Image Placeholder</span>
</div>
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Brisket Poutine</h4>
<span className="text-xs text-zinc-500">$16</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Classic Canadian comfort meets Texas BBQ. Crispy fries, curds, gravy, and smoked brisket.</p>
</div>

<div className="flex flex-col gap-2">
<div className="h-40 w-full bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-2 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="text-zinc-700 text-xs">Image Placeholder</span>
</div>
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Chicken Crunch</h4>
<span className="text-xs text-zinc-500">$15</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">A crowd favorite sandwich featuring crispy chicken with our signature house sauce.</p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-900 bg-black/50 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-zinc-400 text-xs font-bold">HT</div>
<span className="text-sm font-medium text-white tracking-tight">Home Time BBQ</span>
</div>
<p className="text-xs text-zinc-500">© 2023 Home Time Bar-B-Que and Bakery.<br/>Proudly serving Brooks, Alberta.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
