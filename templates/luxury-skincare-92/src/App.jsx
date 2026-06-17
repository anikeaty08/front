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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E6DDC4] opacity-20 blur-[120px] animate-glow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#DBC8AC] opacity-20 blur-[100px] animate-glow" style={{animationDelay: '2s'}}></div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
<nav className="glass-panel w-full max-w-7xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3 flex items-center justify-between transition-all duration-300">

<div className="flex items-center gap-6 hidden md:flex">
<a className="text-xs tracking-widest uppercase hover:text-[#9A8C6B] transition-colors" href="#">Shop</a>
<a className="text-xs tracking-widest uppercase hover:text-[#9A8C6B] transition-colors" href="#">Rituals</a>
<a className="text-xs tracking-widest uppercase hover:text-[#9A8C6B] transition-colors" href="#">About</a>
</div>

<button className="md:hidden text-neutral-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="font-serif text-2xl tracking-tighter text-neutral-900 font-medium" href="#">L U M I N È</a>
</div>

<div className="flex items-center gap-4">

<div className="relative group hidden sm:block">
<div className="flex items-center gap-2 bg-neutral-50/50 border border-neutral-200/60 rounded-full px-3 py-1.5 focus-within:ring-1 focus-within:ring-[#D4C49D] transition-all w-32 focus-within:w-64">
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-xs w-full placeholder:text-neutral-400 font-light" placeholder="Search essence..." type="text"/>
</div>
</div>
<button className="relative group text-neutral-600 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4C49D] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A8C6B]"></span>
</span>
</button>
<button className="text-neutral-600 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>
</header>
<main className="relative z-10 pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-24">

<section className="relative rounded-3xl overflow-hidden h-[70vh] w-full flex items-center justify-center">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
<div className="relative text-center text-white space-y-6 max-w-2xl px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
<iconify-icon className="text-[#FFEBB2]" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="text-xs tracking-wider uppercase font-light">New Collection</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-none text-[#FDFCF8] font-light">
                    Radiance <br/> <span className="italic text-[#FFEBB2]">Reimagined</span>
</h1>
<p className="text-sm md:text-base font-light text-white/90 tracking-wide max-w-md mx-auto">
                    Experience the synergy of botanical purity and clinical precision. A glowing ritual for the modern muse.
                </p>
<div className="pt-4 flex justify-center gap-4">
<button className="bg-[#FDFCF8] text-[#1a1a1a] px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#E6DDC4] transition-colors duration-300">
                        Discover
                    </button>
<button className="backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                        View Rituals
                    </button>
</div>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="font-serif text-3xl tracking-tight text-neutral-900 font-normal">Curated Essentials</h2>
<p className="text-neutral-500 text-sm font-light mt-2">Formulated for luminosity and deep hydration.</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="category" type="radio"/>
<div className="border border-neutral-200 px-4 py-1.5 rounded-full text-xs text-neutral-600 hover:border-neutral-400 transition-all">All</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="category" type="radio"/>
<div className="border border-neutral-200 px-4 py-1.5 rounded-full text-xs text-neutral-600 hover:border-neutral-400 transition-all">Serums</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="category" type="radio"/>
<div className="border border-neutral-200 px-4 py-1.5 rounded-full text-xs text-neutral-600 hover:border-neutral-400 transition-all">Creams</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="category" type="radio"/>
<div className="border border-neutral-200 px-4 py-1.5 rounded-full text-xs text-neutral-600 hover:border-neutral-400 transition-all">Sets</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-neutral-100 p-4 rounded-xl hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#E6DDC4] transition-all duration-500">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 mb-4">
<img alt="Serum" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">Best Seller</div>

<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-neutral-900 w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4C49D] hover:text-white shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-lg text-neutral-900 leading-tight">Luminous Drops</h3>
<span className="text-xs font-medium text-neutral-600">$85</span>
</div>
<p className="text-xs text-neutral-400 font-light">Hyaluronic &amp; Gold Flakes</p>
</div>
</div>

<div className="group relative bg-white border border-neutral-100 p-4 rounded-xl hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#E6DDC4] transition-all duration-500">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 mb-4">
<img alt="Cream" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-neutral-900 w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4C49D] hover:text-white shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-lg text-neutral-900 leading-tight">Velvet Night</h3>
<span className="text-xs font-medium text-neutral-600">$120</span>
</div>
<p className="text-xs text-neutral-400 font-light">Restorative Peptide Cream</p>
</div>
</div>

<div className="group relative bg-white border border-neutral-100 p-4 rounded-xl hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#E6DDC4] transition-all duration-500">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 mb-4">
<img alt="Toner" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-neutral-900 w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4C49D] hover:text-white shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-lg text-neutral-900 leading-tight">Pure Mist</h3>
<span className="text-xs font-medium text-neutral-600">$45</span>
</div>
<p className="text-xs text-neutral-400 font-light">Rosewater &amp; Aloe</p>
</div>
</div>

<div className="group relative bg-white border border-neutral-100 p-4 rounded-xl hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#E6DDC4] transition-all duration-500">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 mb-4">
<img alt="Oil" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-[#D4C49D] text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">New</div>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-neutral-900 w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4C49D] hover:text-white shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-serif text-lg text-neutral-900 leading-tight">Golden Elixir</h3>
<span className="text-xs font-medium text-neutral-600">$95</span>
</div>
<p className="text-xs text-neutral-400 font-light">Repairing Facial Oil</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[500px]">

<div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4C49D] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 z-10 font-light">The Science of <br/><span className="text-[#D4C49D] italic">Glow</span></h2>
<p className="text-neutral-400 font-light text-sm max-w-sm mb-8 z-10 leading-relaxed">
                    Our formulations combine ancient botanical wisdom with modern dermatological science. Every drop is designed to enhance your natural barrier and reveal inner luminosity.
                </p>
<ul className="space-y-3 z-10 mb-8">
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-[#D4C49D]" icon="solar:check-circle-linear"></iconify-icon> Cruelty Free &amp; Vegan
                    </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-[#D4C49D]" icon="solar:check-circle-linear"></iconify-icon> Sustainably Sourced
                    </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-[#D4C49D]" icon="solar:check-circle-linear"></iconify-icon> Dermatologist Tested
                    </li>
</ul>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4C49D] hover:text-white transition-colors z-10" href="#">
                    Read our story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
<div className="relative rounded-2xl overflow-hidden row-span-2 group">
<img alt="Texture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white tracking-widest uppercase border border-white/20">Texture</div>
</div>
<div className="relative rounded-2xl overflow-hidden group">
<img alt="Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative rounded-2xl overflow-hidden bg-[#F5EFE6] flex items-center justify-center group">
<div className="text-center p-4">
<iconify-icon className="text-[#9A8C6B] mb-2 text-2xl group-hover:scale-110 transition-transform" icon="solar:verified-check-linear"></iconify-icon>
<p className="font-serif text-lg text-neutral-900 italic">"Pure magic in a bottle."</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2">— Vogue Beauty</p>
</div>
</div>
</div>
</section>

<section className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgb(0,0,0,0.02)]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-100 pb-6 mb-6">
<div>
<h2 className="font-serif text-2xl text-neutral-900 font-normal">Your Selection</h2>
<p className="text-neutral-400 text-xs font-light mt-1">Free shipping on orders over $150</p>
</div>
<div className="text-right mt-4 md:mt-0">
<p className="text-xs text-neutral-500 uppercase tracking-wider">Subtotal</p>
<p className="text-xl font-medium text-neutral-900">$205.00</p>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg bg-neutral-50 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900">Luminous Drops</h4>
<p className="text-xs text-neutral-500 font-light">30ml</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3 border border-neutral-200 rounded-full px-2 py-1">
<button className="text-neutral-400 hover:text-neutral-900"><iconify-icon icon="solar:minus-linear" width="12"></iconify-icon></button>
<span className="text-xs font-medium w-3 text-center">1</span>
<button className="text-neutral-400 hover:text-neutral-900"><iconify-icon icon="solar:add-linear" width="12"></iconify-icon></button>
</div>
<span className="text-sm text-neutral-900 font-medium">$85</span>
<button className="text-neutral-300 hover:text-red-400 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg bg-neutral-50 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900">Velvet Night</h4>
<p className="text-xs text-neutral-500 font-light">50ml</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3 border border-neutral-200 rounded-full px-2 py-1">
<button className="text-neutral-400 hover:text-neutral-900"><iconify-icon icon="solar:minus-linear" width="12"></iconify-icon></button>
<span className="text-xs font-medium w-3 text-center">1</span>
<button className="text-neutral-400 hover:text-neutral-900"><iconify-icon icon="solar:add-linear" width="12"></iconify-icon></button>
</div>
<span className="text-sm text-neutral-900 font-medium">$120</span>
<button className="text-neutral-300 hover:text-red-400 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex justify-end">
<button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#D4C49D] hover:text-[#1a1a1a] transition-colors duration-300 shadow-lg shadow-neutral-200">
                    Proceed to Checkout
                </button>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-neutral-200/60 bg-white/50 backdrop-blur-sm mt-12">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="font-serif text-lg font-medium text-neutral-900">L U M I N È</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
