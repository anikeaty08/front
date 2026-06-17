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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="w-px h-full bg-stone-100 hidden md:block"></div>
<div className="w-px h-full bg-stone-100 hidden lg:block"></div>
<div className="w-px h-full bg-stone-100 hidden md:block"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 flex items-center justify-between mix-blend-difference text-white">
<div className="flex items-center gap-12">
<button className="flex flex-col gap-1.5 group w-8">
<div className="w-full h-px bg-white group-hover:w-3/4 transition-all duration-500 ease-out"></div>
<div className="w-2/3 h-px bg-white group-hover:w-full transition-all duration-500 ease-out delay-75"></div>
</button>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-90">
<a className="hover:opacity-60 transition-opacity" href="#">Stay</a>
<a className="hover:opacity-60 transition-opacity" href="#">Dine</a>
<a className="hover:opacity-60 transition-opacity" href="#">Wellness</a>
</div>
</div>
<div className="absolute left-1/2 top-6 -translate-x-1/2 text-center hidden md:block">
<a className="font-serif text-xl tracking-tight font-medium italic" href="#">Vintner's</a>
</div>
<button className="bg-white text-stone-900 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors rounded-full">
            Reserve
        </button>
</nav>

<header className="relative w-full min-h-screen pt-24 pb-12 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 max-w-screen-2xl mx-auto">

<div className="absolute top-24 right-6 md:right-12 z-20 pointer-events-none mix-blend-difference text-white hidden md:block">
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="animate-spin-slow w-full h-full" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text fill="currentColor" fontFamily="Inter" fontSize="11" font-weight="500" letter-spacing="2px">
<textpath href="#circlePath" startoffset="0%">EST. 1924 • NAPA VALLEY •</textpath>
</text>
</svg>
<iconify-icon className="absolute" icon="lucide:grape" width="16"></iconify-icon>
</div>
</div>

<div className="lg:col-span-5 h-full flex flex-col justify-center relative order-2 lg:order-1">
<div className="mb-12">
<span className="inline-block py-1 px-3 border border-stone-200 rounded-full text-[10px] uppercase tracking-widest text-stone-500 mb-6">The Collection</span>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] tracking-tight text-stone-900 mb-8">
                    Sanctuary <br/>
<span className="italic text-stone-400 ml-4">in the</span> <br/>
                    Valley
                </h1>
<p className="max-w-sm text-stone-500 text-sm leading-relaxed border-l border-stone-200 pl-6 ml-1">
                    An architectural marvel nestled in the rolling vineyards. Experience refined luxury designed for the senses.
                </p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-xl p-6 rounded-2xl max-w-md w-full relative z-30">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-stone-50 rounded-lg p-3 relative group">
<label className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold block mb-1">Check In</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Nov 14</span>
<iconify-icon className="text-stone-300 w-3" icon="lucide:calendar"></iconify-icon>
</div>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="date"/>
</div>
<div className="bg-stone-50 rounded-lg p-3 relative group">
<label className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold block mb-1">Check Out</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Nov 18</span>
<iconify-icon className="text-stone-300 w-3" icon="lucide:calendar"></iconify-icon>
</div>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="date"/>
</div>
</div>
<button className="w-full bg-stone-900 text-white h-12 rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest shadow-lg shadow-stone-200">
<span>Search Availability</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-7 h-[60vh] lg:h-[85vh] relative order-1 lg:order-2">
<div className="absolute inset-0 rounded-t-[12rem] rounded-b-lg overflow-hidden shadow-2xl">
<img alt="Vineyard Resort" className="w-full h-full object-cover object-center brightness-[0.9] hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

<div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white max-w-[200px] hidden md:block">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="lucide:sun" width="16"></iconify-icon>
<span className="text-xs font-medium">72°F Sunny</span>
</div>
<p className="text-[10px] leading-relaxed opacity-80">Ideal weather for the vineyard walk today.</p>
</div>
</div>
</div>
</header>

<div className="w-full overflow-hidden border-y border-stone-200 bg-white py-4">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex items-center gap-12 text-stone-300 text-xs font-serif italic tracking-wider px-6">
<span>Organic Farming</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Michelin Dining</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Thermal Spa</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Private Cellars</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Organic Farming</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Michelin Dining</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Thermal Spa</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Private Cellars</span>
</div>
</div>
</div>

<section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[3/4] rounded-full overflow-hidden w-2/3 mx-auto md:mr-auto relative z-10 border border-stone-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-stone-200 rounded-full z-0 -rotate-12"></div>
</div>
<div>
<iconify-icon className="text-stone-200 mb-8" icon="lucide:quote" width="48"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 tracking-tight leading-[1.1]">
                    Defined by <br/><span className="italic text-stone-400">relaxed elegance.</span>
</h2>
<div className="space-y-6 text-stone-600 font-light text-base leading-relaxed pl-8 border-l border-stone-900">
<p>
                        Nestled in the heart of wine country, Vintner's Estate offers a unique blend of rustic charm and modern sophistication. 
                    </p>
<p>
                        Whether you are here to explore the vineyards, rejuvenate in our hillside spa, or simply disconnect, our resort is your canvas.
                    </p>
</div>
<div className="mt-12 pl-8">
<a className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 hover:gap-5 transition-all" href="#">
                        Discover Our Story
                        <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-100 overflow-hidden relative rounded-t-[3rem]">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="px-6 md:px-12 mb-12 flex items-end justify-between max-w-screen-2xl mx-auto relative z-10">
<div>
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3 block">Accommodations</span>
<h3 className="text-3xl md:text-4xl font-serif text-white tracking-tight">Curated Spaces</h3>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">

<div className="min-w-[85vw] md:min-w-[450px] snap-center group relative">
<div className="relative h-[550px] overflow-hidden rounded-lg mb-6 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<h4 className="text-2xl font-serif text-white mb-2">Estate King Room</h4>
<p className="text-stone-300 text-sm font-light">Vineyard View • Fireplace</p>
</div>
</div>

<div className="absolute top-4 -right-2 w-full h-full border border-white/20 rounded-lg -z-10 group-hover:top-2 group-hover:-right-1 transition-all"></div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] snap-center group relative">
<div className="relative h-[550px] overflow-hidden rounded-lg mb-6 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<h4 className="text-2xl font-serif text-white mb-2">Garden Terrace</h4>
<p className="text-stone-300 text-sm font-light">Private Terrace • Soaking Tub</p>
</div>
</div>

<div className="absolute top-4 -right-2 w-full h-full border border-white/20 rounded-lg -z-10 group-hover:top-2 group-hover:-right-1 transition-all"></div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] snap-center group relative">
<div className="relative h-[550px] overflow-hidden rounded-lg mb-6 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<h4 className="text-2xl font-serif text-white mb-2">Oakview Studio</h4>
<p className="text-stone-300 text-sm font-light">Balcony • Kitchenette</p>
</div>
</div>

<div className="absolute top-4 -right-2 w-full h-full border border-white/20 rounded-lg -z-10 group-hover:top-2 group-hover:-right-1 transition-all"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-3xl font-serif text-stone-900 tracking-tight mb-6">Designed for <br/> <span className="italic text-stone-400">Restoration.</span></h3>
<p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                    Every detail of the Estate is considered for your well-being. From the mineral content of our pools to the thread count of our linens.
                </p>
<button className="text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1">View All Amenities</button>
</div>
<div className="md:col-span-8 grid grid-cols-2 md:grid-cols-2 gap-px bg-stone-100 border border-stone-100">
<div className="bg-white p-10 flex flex-col justify-between aspect-square group hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-900 mb-auto" icon="lucide:waves" strokeWidth="1" width="28"></iconify-icon>
<div>
<h5 className="font-serif text-xl mb-2">Infinity Pools</h5>
<p className="text-xs text-stone-500 leading-relaxed">Heated mineral water overlooking the valley floor.</p>
</div>
</div>
<div className="bg-white p-10 flex flex-col justify-between aspect-square group hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-900 mb-auto" icon="lucide:flower-2" strokeWidth="1" width="28"></iconify-icon>
<div>
<h5 className="font-serif text-xl mb-2">Organic Spa</h5>
<p className="text-xs text-stone-500 leading-relaxed">Treatments utilizing herbs grown in our gardens.</p>
</div>
</div>
<div className="bg-white p-10 flex flex-col justify-between aspect-square group hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-900 mb-auto" icon="lucide:wine" strokeWidth="1" width="28"></iconify-icon>
<div>
<h5 className="font-serif text-xl mb-2">Private Tastings</h5>
<p className="text-xs text-stone-500 leading-relaxed">Exclusive access to our vintage cellar collections.</p>
</div>
</div>
<div className="bg-white p-10 flex flex-col justify-between aspect-square group hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-900 mb-auto" icon="lucide:chef-hat" strokeWidth="1" width="28"></iconify-icon>
<div>
<h5 className="font-serif text-xl mb-2">Culinary Arts</h5>
<p className="text-xs text-stone-500 leading-relaxed">Farm-to-table dining led by Chef Marco Pierre.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 text-stone-900 py-20 px-6 md:px-12 text-sm font-light border-t border-stone-200">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4 flex flex-col justify-between h-full">
<div>
<a className="font-serif text-2xl tracking-tight block mb-8" href="#">Vintner's Estate</a>
<p className="mb-8 leading-relaxed text-stone-500 max-w-xs">
                        A place where time slows down, allowing you to reconnect with nature and yourself.
                    </p>
</div>
<div className="flex gap-6 text-stone-400">
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:instagram" width="20"></iconify-icon>
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:facebook" width="20"></iconify-icon>
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:twitter" width="20"></iconify-icon>
</div>
</div>
<div className="md:col-span-2">
<h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-stone-400">Explore</h5>
<ul className="space-y-4">
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Accommodations</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Dining</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Wellness</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Events</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-stone-400">Visit</h5>
<ul className="space-y-4">
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Getting Here</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Concierge</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Gift Cards</a></li>
<li><a className="hover:text-stone-600 transition-colors block border-b border-transparent hover:border-stone-300 w-fit" href="#">Weather</a></li>
</ul>
</div>
<div className="md:col-span-4 bg-white p-8 border border-stone-200">
<h5 className="text-xl font-serif italic mb-2">The Newsletter</h5>
<p className="text-stone-500 text-xs mb-6">Curated notes from the valley, seasonal recipes, and exclusive offers.</p>
<div className="flex gap-2 border-b border-stone-300 pb-2">
<input className="flex-1 bg-transparent text-sm focus:outline-none placeholder-stone-400" placeholder="Email Address" type="email"/>
<button className="text-[10px] font-bold uppercase tracking-widest hover:text-stone-600">Submit</button>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-500">
<span>© 2023 Vintner's Estate</span>
<div className="flex gap-6">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Sitemap</a>
</div>
</div>
</footer>

    </>
  );
}
