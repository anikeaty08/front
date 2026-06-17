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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12">
<div className="glass-panel max-w-7xl mx-auto rounded-full border border-stone-200/50 px-6 py-4 flex items-center justify-between shadow-sm">

<a className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-800 hover:opacity-70 transition-opacity" href="#">
                L'Alpage
            </a>

<div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">PHILOSOPHY</a>
<a className="hover:text-stone-900 transition-colors" href="#menu">SEASONAL MENU</a>
<a className="hover:text-stone-900 transition-colors" href="#wines">CAVE</a>
</div>

<div className="flex items-center gap-4">
<button className="bg-[#292524] text-[#FDFCF8] px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-stone-700 transition-colors flex items-center gap-2">
<span>RESERVE TABLE</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E8E8E4] rounded-full blur-[120px] opacity-60"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] bg-[#D8E2DC] rounded-full blur-[100px] opacity-50"></div>
<div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-[#FAE1DD] rounded-full blur-[90px] opacity-40"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7 space-y-8 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/40 text-[10px] tracking-widest uppercase font-medium text-stone-500">
<span className="w-1.5 h-1.5 rounded-full bg-[#9EB384]"></span>
                    Chamonix, France — 2100m
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal serif tracking-tight leading-[1.1] text-gradient">
                    Taste the <br/>
<span className="italic font-light text-stone-500">Alpine</span> Spirit.
                </h1>
<p className="text-stone-500 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed font-light">
                    A culinary sanctuary nestled in the peaks. We craft sustainable, organic experiences sourced directly from the mountain pastures to your plate.
                </p>
<div className="flex flex-col md:flex-row items-center gap-6 pt-4">
<div className="flex items-center gap-4">
<span className="flex -space-x-3">
<img alt="Chef" className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Guest" className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Guest" className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
</span>
<div className="text-left">
<p className="text-xs font-semibold text-stone-800">Michelin Green Star</p>
<div className="flex text-[#D4A373]">
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 relative group">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
<img alt="Plateing" className="w-full h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-white/20 flex justify-between items-end">
<div className="text-white">
<p className="text-[10px] tracking-widest uppercase opacity-80 mb-1">Current Menu</p>
<p className="serif text-xl">L'Hiver 2024</p>
</div>
<div className="h-8 w-8 rounded-full bg-white text-stone-900 flex items-center justify-center">
<iconify-icon icon="lucide:arrow-down-right" width="16"></iconify-icon>
</div>
</div>
</img></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
<span className="text-[10px] uppercase tracking-widest">Discover</span>
<div className="w-[1px] h-12 bg-stone-800"></div>
</div>
</header>

<section className="py-24 px-6 bg-white relative" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Alps view" className="rounded-2xl h-64 w-full object-cover translate-y-8" src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Fresh herbs" className="rounded-2xl h-64 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#FAE1DD] rounded-full blur-3xl opacity-50"></div>
</div>
<div className="order-1 md:order-2 space-y-6">
<div className="flex items-center gap-3 text-[#9EB384]">
<iconify-icon icon="lucide:sprout" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase text-stone-400">Our Ethos</span>
</div>
<h2 className="text-4xl md:text-5xl serif text-stone-900 leading-tight tracking-tight">
                        Rooted in the <br/>
<span className="italic text-stone-500">Terroir.</span>
</h2>
<p className="text-stone-500 font-light leading-relaxed">
                        Our kitchen follows the rhythm of the mountain seasons. We collaborate with local foragers and farmers within a 30km radius to bring the purest flavors of the Alps to your table.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-stone-100">
<div>
<p className="text-3xl font-light serif text-stone-800">100%</p>
<p className="text-xs text-stone-400 mt-1 uppercase tracking-wide">Organic Produce</p>
</div>
<div>
<p className="text-3xl font-light serif text-stone-800">2100<span className="text-lg">m</span></p>
<p className="text-xs text-stone-400 mt-1 uppercase tracking-wide">Elevation</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFCF8]" id="menu">
<div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-2 block">The Carte</span>
<h2 className="text-3xl md:text-4xl serif text-stone-900 tracking-tight">Seasonal Highlights</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-[#292524] text-white flex items-center justify-center hover:bg-stone-700 transition">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10 snap-x">

<div className="min-w-[300px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="relative h-[420px] rounded-[2rem] overflow-hidden mb-6">
<img alt="Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">€45</div>
</div>
<h3 className="serif text-xl text-stone-900 mb-2">Arctic Char</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Wild sorrel sauce, fermented pine nuts, and grilled alpine roots.</p>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="relative h-[420px] rounded-[2rem] overflow-hidden mb-6 bg-[#F4F1EE]">
<img alt="Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">€38</div>
</div>
<h3 className="serif text-xl text-stone-900 mb-2">Forest Mushroom Tart</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Chanterelles, truffle cream, buckwheat crust, aged Beaufort cheese.</p>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="relative h-[420px] rounded-[2rem] overflow-hidden mb-6">
<img alt="Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">€52</div>
</div>
<h3 className="serif text-xl text-stone-900 mb-2">Venison Loin</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Juniper berry reduction, parsnip purée, caramelized pear.</p>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="relative h-[420px] rounded-[2rem] overflow-hidden mb-6 bg-[#E8E8E4]">
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 group-hover:bg-[#dcdcd8] transition-colors">
<iconify-icon className="text-stone-400 mb-4" icon="lucide:wine" width="32"></iconify-icon>
<h3 className="serif text-xl text-stone-900 mb-2">Wine Pairing</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Discover our cellar of 400+ organic wines from the Savoie region.</p>
<span className="mt-6 text-xs border-b border-stone-800 pb-0.5 uppercase tracking-wide">View List</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 relative overflow-hidden">

<div className="absolute inset-0 bg-[#D8E2DC]/30"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FAE1DD]/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-stone-200/50 border border-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<h2 className="text-4xl serif text-stone-900 tracking-tight">Book a table.</h2>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                        Join us for an unforgettable evening. For parties larger than 8, please contact us directly.
                    </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#F4F1EE] flex items-center justify-center text-stone-600 shrink-0">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Location</p>
<p className="text-sm text-stone-500 font-light">120 Chemin de la Montagne, Chamonix</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#F4F1EE] flex items-center justify-center text-stone-600 shrink-0">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Hours</p>
<p className="text-sm text-stone-500 font-light">Tue - Sun: 18:00 - 23:00</p>
</div>
</div>
</div>
</div>

<form className="space-y-5">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 ml-1">Name</label>
<input className="w-full bg-[#F8F7F5] rounded-2xl px-5 py-4 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#9EB384] transition-all" placeholder="Enter your name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 ml-1">Date</label>
<div className="relative">
<input className="w-full bg-[#F8F7F5] rounded-2xl px-5 py-4 text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#9EB384] transition-all appearance-none" type="date"/>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="lucide:calendar" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 ml-1">Guests</label>
<div className="relative">
<select className="w-full bg-[#F8F7F5] rounded-2xl px-5 py-4 text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#9EB384] transition-all appearance-none cursor-pointer">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-sm text-stone-600 font-light">Request window seat</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9EB384]"></div>
</label>
</div>
<button className="w-full bg-[#292524] text-[#FDFCF8] rounded-2xl py-4 font-medium tracking-wide hover:bg-stone-800 transition-colors shadow-lg shadow-stone-300/50 flex items-center justify-center gap-2 mt-4" type="button">
                        Confirm Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
<div>
<a className="text-lg font-semibold tracking-[0.2em] uppercase text-stone-900 block mb-6" href="#">L'Alpage</a>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition" href="#">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row gap-12 text-sm font-light text-stone-500">
<div className="space-y-3">
<p className="font-medium text-stone-900 uppercase tracking-widest text-xs mb-4">Sitemap</p>
<a className="block hover:text-[#9EB384] transition-colors" href="#">Philosophy</a>
<a className="block hover:text-[#9EB384] transition-colors" href="#">The Menu</a>
<a className="block hover:text-[#9EB384] transition-colors" href="#">Private Events</a>
</div>
<div className="space-y-3">
<p className="font-medium text-stone-900 uppercase tracking-widest text-xs mb-4">Legal</p>
<a className="block hover:text-[#9EB384] transition-colors" href="#">Privacy Policy</a>
<a className="block hover:text-[#9EB384] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
<p>© 2024 L'Alpage Restaurant. All rights reserved.</p>
<p className="flex items-center gap-1">
                    Made with <iconify-icon icon="lucide:heart" width="10"></iconify-icon> in the Alps
                </p>
</div>
</div>
</footer>

    </>
  );
}
