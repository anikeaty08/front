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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 px-4 py-4">
<div className="max-w-6xl mx-auto backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border-2 border-[#2B2D42]/5 bg-white/90" style={{}}>
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#F60000] rounded-full flex items-center justify-center rotate-3 text-white" style={{}}>
<i className="w-6 h-6 stroke-[2.5]" data-lucide="smile"></i>
</div>
<span className="text-xl font-display font-black tracking-tight text-[#2B2D42] -rotate-1" style={{}}>Happy Everyday</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#2B2D42]/70">
<a className="hover:text-[#F60000] transition-colors" href="#flavors">Flavors</a>
<a className="hover:text-[#00D215] transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-[#4D9EFF] transition-colors" href="#reviews" style={{}}>Reviews</a>
</div>
<button className="bg-[#00D215] hover:bg-[#00b512] text-xs font-bold px-6 py-3 rounded-full transition-transform hover:scale-105 shadow-[4px_4px_0px_#00960f] active:translate-y-1 active:shadow-none flex items-center gap-2 border-2 border-[#00960f] text-white" style={{}}>
                Get Starter Box
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<header className="relative pt-36 pb-24 overflow-hidden bg-[#4D9EFF]">

<div className="absolute inset-0 overflow-hidden">

<div className="absolute top-20 left-10 animate-float text-white/30" style={{}}>
<i className="w-32 h-32 fill-white" data-lucide="cloud"></i>
</div>
<div className="absolute top-40 right-[-5%] animate-float-delayed text-white/30" style={{}}>
<i className="w-32 h-32 fill-white" data-lucide="cloud"></i>
</div>

<div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] border-[60px] border-[#FF9BCA] rounded-full opacity-50"></div>
<div className="absolute bottom-[-15%] left-[-5%] w-[40%] h-[40%] border-[60px] border-[#FFDD00] rounded-full opacity-50" style={{}}></div>
</div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-[#4D9EFF] px-5 py-2 rounded-full shadow-lg -rotate-2 transform hover:rotate-0 transition-transform cursor-default bg-white" style={{}}>
<i className="w-4 h-4 fill-[#FFDD00] text-[#FFDD00]" data-lucide="sparkles"></i>
<span className="text-xs font-bold uppercase tracking-widest">New: Berry Blast Flavor</span>
</div>
<h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] drop-shadow-sm text-white" style={{}}>
                    HAPPY <br/>
<span className="text-[#FFDD00]" style={{}}>CATS</span> <br/>
                    EVERYDAY
                </h1>
<p className="text-xl font-medium max-w-md leading-relaxed text-white/90">
                    Premium nutrition disguised as pure joy. Real meat, superfoods, and zero boring bits.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#F60000] hover:bg-[#d50000] text-lg font-bold px-10 py-5 rounded-full shadow-[6px_6px_0px_#990000] transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-none border-2 border-[#990000] flex items-center justify-center gap-3 text-white" style={{}}>
                        Shop Now
                        <i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
<button className="text-[#4D9EFF] border-2 border-[#4D9EFF] text-lg font-bold px-10 py-5 rounded-full shadow-[6px_6px_0px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2 bg-white hover:bg-slate-50" style={{}}>
<i className="w-5 h-5" data-lucide="play-circle"></i>
                        Our Story
                    </button>
</div>
<div className="pt-4 flex items-center gap-4 text-white" style={{}}>
<div className="flex -space-x-4">
<img alt="Customer" className="w-12 h-12 rounded-full border-4 border-[#4D9EFF]" src="https://i.pravatar.cc/150?img=32"/>
<img alt="Customer" className="w-12 h-12 rounded-full border-4 border-[#4D9EFF]" src="https://i.pravatar.cc/150?img=44"/>
<img alt="Customer" className="w-12 h-12 rounded-full border-4 border-[#4D9EFF]" src="https://i.pravatar.cc/150?img=12"/>
</div>
<div className="flex flex-col">
<div className="flex text-[#FFDD00]" style={{}}>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-bold">5,000+ Happy Purrs</span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="animate-float sticker bg-[#FF9BCA] z-20 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-10 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] rotate-12">
<i className="w-10 h-10 stroke-[2.5] text-white fill-white" data-lucide="heart"></i>
</div>
<div className="absolute bottom-20 left-0 bg-[#FFDD00] p-5 rounded-full shadow-[8px_8px_0px_rgba(0,0,0,0.1)] animate-float-delayed z-20 -rotate-12 sticker">
<i className="text-[#F60000] w-12 h-12 fill-[#F60000] stroke-none" data-lucide="sun"></i>
</div>

<div className="relative w-full h-full p-4">
<div className="absolute inset-0 bg-[#FFDD00] rounded-[3rem] rotate-3 opacity-100 border-4 shadow-xl border-white"></div>
<div className="absolute inset-0 bg-[#FF9BCA] rounded-[3rem] -rotate-2 opacity-100 border-4 shadow-xl translate-x-4 translate-y-4 border-white"></div>
<div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-8 shadow-2xl bg-[#00D215] border-white">
<img alt="Happy Cat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute bottom-10 right-10 px-8 py-4 rounded-2xl shadow-[6px_6px_0px_#2B2D42] border-2 border-[#2B2D42] flex items-center gap-4 z-30 transform rotate-2 hover:rotate-0 transition-transform bg-white">
<div className="w-10 h-10 rounded-full bg-[#F60000] flex items-center justify-center text-white" style={{}}>
<i className="w-6 h-6 fill-white" data-lucide="zap"></i>
</div>
<div>
<p className="text-xs text-[#2B2D42]/60 font-bold uppercase tracking-wider">Energy</p>
<p className="text-lg font-black text-[#2B2D42]" style={{}}>MAXIMUM</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-[#FFFDF5]" id="benefits" style={{}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="bg-[#F60000] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-widest inline-block -rotate-2 mb-4 text-white" style={{}}>Why Choose Happy?</span>
<h2 className="text-5xl md:text-6xl font-black mt-2 text-[#2B2D42] tracking-tight" style={{}}>Pure Joy in <br/>Every <span className="text-[#00D215] underline decoration-wavy decoration-4">Kibble</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F60000] p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_#2B2D42] border-4 border-[#2B2D42]">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#F60000] rotate-3 bg-white">
<i className="w-8 h-8 stroke-[2.5]" data-lucide="cherry"></i>
</div>
<h3 className="text-3xl font-black mb-3 text-white" style={{}}>Real Fruit</h3>
<p className="text-lg font-medium leading-relaxed text-white/90">Antioxidants from real cranberries and blueberries. No fake stuff allowed.</p>
</div>

<div className="bg-[#FFDD00] p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 md:col-span-2 shadow-[8px_8px_0px_#2B2D42] border-4 border-[#2B2D42]">
<div className="flex flex-col md:flex-row items-center gap-12 h-full">
<div className="flex-1">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#FFDD00] -rotate-3 bg-white" style={{}}>
<i className="w-8 h-8 stroke-[2.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-3xl font-black mb-3 text-[#2B2D42]" style={{}}>Tummy Friendly</h3>
<p className="text-[#2B2D42]/80 text-lg font-medium leading-relaxed">Easy digestion means happier cats and cleaner litter boxes. It's a win-win.</p>
</div>
<div className="w-full md:w-1/2 flex justify-center">

<div className="relative w-48 h-48 rounded-full flex items-center justify-center border-4 border-[#2B2D42] shadow-lg bg-white">
<i className="w-24 h-24 text-[#00D215] stroke-[2.5]" data-lucide="smile"></i>
<div className="absolute -top-4 -right-4 bg-[#F60000] px-3 py-1 rounded-lg border-2 border-[#2B2D42] font-bold text-xs rotate-12 text-white" style={{}}>100% Good</div>
</div>
</div>
</div>
</div>

<div className="bg-[#00D215] p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 md:col-span-2 shadow-[8px_8px_0px_#2B2D42] border-4 border-[#2B2D42]">
<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="flex-1">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#00D215] rotate-2 bg-white">
<i className="w-8 h-8 stroke-[2.5]" data-lucide="sparkles"></i>
</div>
<h3 className="text-3xl font-black mb-3 text-white" style={{}}>Shiny Coat Magic</h3>
<p className="text-lg font-medium leading-relaxed text-white/90">Omega-rich salmon oil turns fluff into silk. Prepare for extreme softness.</p>
</div>
<div className="relative w-full md:w-1/3">
<div className="p-2 rounded-2xl rotate-[-4deg] shadow-lg bg-white">
<img alt="Cat fur" className="rounded-xl border-2 border-[#2B2D42]" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="bg-[#4D9EFF] p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_#2B2D42] border-4 border-[#2B2D42]">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#4D9EFF] -rotate-2 bg-white" style={{}}>
<i className="w-8 h-8 stroke-[2.5] fill-current" data-lucide="cloud"></i>
</div>
<h3 className="text-3xl font-black mb-3 text-white" style={{}}>Cloud Soft</h3>
<p className="text-lg font-medium leading-relaxed text-white/90">Lightly cooked to preserve nutrients without the crunch being too hard.</p>
</div>
</div>
</div>
</section>

<section className="py-8 bg-[#F60000] overflow-hidden border-y-4 border-[#2B2D42]">
<div className="flex gap-8 items-center justify-center animate-marquee whitespace-nowrap font-black text-4xl uppercase tracking-wider text-white" style={{}}>

<span className="flex items-center gap-4"><i className="fill-[#FFDD00] text-[#FFDD00] w-8 h-8" data-lucide="star"></i> HAPPY EVERYDAY</span>
<span className="flex items-center gap-4"><i className="text-[#F60000] w-8 h-8 fill-white" data-lucide="smile"></i> YUMMY TUMMY</span>
<span className="flex items-center gap-4"><i className="fill-[#FF9BCA] text-[#FF9BCA] w-8 h-8" data-lucide="heart"></i> MADE WITH LOVE</span>
<span className="flex items-center gap-4"><i className="fill-[#FFDD00] text-[#FFDD00] w-8 h-8" data-lucide="sun"></i> PURE SUNSHINE</span>
<span className="flex items-center gap-4"><i className="fill-[#FFDD00] text-[#FFDD00] w-8 h-8" data-lucide="star"></i> HAPPY EVERYDAY</span>
<span className="flex items-center gap-4"><i className="text-[#F60000] w-8 h-8 fill-white" data-lucide="smile"></i> YUMMY TUMMY</span>
<span className="flex items-center gap-4"><i className="fill-[#FF9BCA] text-[#FF9BCA] w-8 h-8" data-lucide="heart"></i> MADE WITH LOVE</span>
</div>
</section>

<section className="py-24 px-6 relative bg-[#FF9BCA]">
<div className="max-w-5xl mx-auto rounded-[3rem] shadow-[12px_12px_0px_rgba(0,0,0,0.15)] overflow-hidden border-4 border-[#2B2D42] bg-white">
<div className="grid lg:grid-cols-2">

<div className="bg-[#FFDD00] p-10 flex flex-col items-center justify-center relative border-b-4 lg:border-b-0 lg:border-r-4 border-[#2B2D42]">
<div className="absolute top-10 left-10">
<i className="w-20 h-20 opacity-50 text-white fill-white" data-lucide="cloud"></i>
</div>
<div className="absolute bottom-10 right-10">
<i className="w-16 h-16 text-[#F60000] fill-[#F60000] opacity-20 rotate-12" data-lucide="star"></i>
</div>
<div className="relative z-10 w-72 h-72 rounded-full border-8 bg-[#F60000] overflow-hidden shadow-xl mb-8 border-white">
<img alt="Cat Food Bowl" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 flex gap-4 w-full px-4">
<div className="flex-1 px-4 py-4 rounded-xl shadow-[4px_4px_0px_#2B2D42] border-2 border-[#2B2D42] text-center transform -rotate-2 bg-white">
<p className="text-[10px] uppercase text-[#2B2D42] font-black tracking-wider" style={{}}>Protein</p>
<p className="text-2xl font-black text-[#F60000]">42%</p>
</div>
<div className="flex-1 px-4 py-4 rounded-xl shadow-[4px_4px_0px_#2B2D42] border-2 border-[#2B2D42] text-center transform rotate-2 bg-white">
<p className="text-[10px] uppercase text-[#2B2D42] font-black tracking-wider" style={{}}>Taste</p>
<p className="text-2xl font-black text-[#00D215]">100%</p>
</div>
</div>
</div>

<div className="p-10 lg:p-14 bg-white">
<h3 className="text-4xl font-black text-[#2B2D42] mb-3" style={{}}>Build Your Box</h3>
<p className="text-slate-500 mb-8 font-medium text-lg" style={{}}>Pick your flavors. Cancel anytime.</p>
<form className="space-y-6">

<div>
<label className="block text-xs font-bold uppercase text-[#2B2D42]/50 tracking-wider mb-3">Select Size</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="weight" type="radio"/>
<div className="border-2 rounded-2xl p-4 text-center peer-checked:border-[#2B2D42] peer-checked:bg-[#FFDD00] peer-checked:shadow-[4px_4px_0px_#2B2D42] transition-all group-hover:border-[#2B2D42]/50 border-slate-200" style={{}}>
<p className="font-black text-[#2B2D42] text-xl" style={{}}>5 lbs</p>
<p className="text-xs font-bold text-[#2B2D42]/60">$29.00</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="weight" type="radio"/>
<div className="border-2 rounded-2xl p-4 text-center peer-checked:border-[#2B2D42] peer-checked:bg-[#FFDD00] peer-checked:shadow-[4px_4px_0px_#2B2D42] transition-all group-hover:border-[#2B2D42]/50 border-slate-200" style={{}}>
<p className="font-black text-[#2B2D42] text-xl" style={{}}>10 lbs</p>
<p className="text-xs font-bold text-[#2B2D42]/60">$49.00</p>
</div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-bold uppercase text-[#2B2D42]/50 tracking-wider mb-3">Select Flavor</label>
<div className="relative">
<select className="w-full appearance-none border-2 text-[#2B2D42] rounded-xl px-5 py-4 pr-10 focus:outline-none focus:border-[#2B2D42] focus:shadow-[4px_4px_0px_#2B2D42] font-bold text-lg transition-all cursor-pointer bg-slate-50 border-slate-200" style={{}}>
<option>🍓 Strawberry Chicken</option>
<option>🐟 Cloudy Salmon</option>
<option>🌈 Rainbow Turkey</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#2B2D42]" style={{}}>
<i className="w-5 h-5 stroke-[3]" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="flex items-center justify-between p-5 rounded-2xl border-2 bg-slate-50 border-slate-200" style={{}}>
<div>
<p className="font-bold text-[#2B2D42] text-base" style={{}}>Subscribe &amp; Save 10%</p>
<p className="text-xs font-bold mt-1 text-slate-400" style={{}}>Never run out of yummy.</p>
</div>
<div className="relative inline-block w-14 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-7 h-7 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 checked:right-0 left-0 top-0.5 z-10 bg-white border-slate-300" id="toggle" name="toggle" style={{}} type="checkbox"/>
<label className="toggle-label block overflow-hidden h-8 rounded-full cursor-pointer transition-colors duration-300 bg-slate-300" htmlFor="toggle" style={{}}></label>
</div>
</div>
<button className="w-full bg-[#00D215] hover:bg-[#00b512] font-black text-xl py-5 rounded-2xl shadow-[0px_6px_0px_#00960f] active:translate-y-1 active:shadow-none transition-all flex justify-between items-center px-8 group border-2 border-[#00960f] mt-4 text-white" style={{}}>
<span>Add to Cart</span>
<span className="px-3 py-1 rounded-lg text-base group-hover:bg-white/30 transition-colors bg-white/20" style={{}}>$29.00</span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#F60000] pt-24 pb-12 border-t-4 border-[#2B2D42] text-white" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center gap-2">
<div className="w-12 h-12 rounded-full flex items-center justify-center text-[#F60000] border-2 border-[#2B2D42] shadow-[4px_4px_0px_#2B2D42] bg-white">
<i className="w-8 h-8 stroke-[2.5]" data-lucide="smile"></i>
</div>
<span className="text-3xl font-display font-black tracking-tight -rotate-1">Happy Everyday</span>
</div>
<p className="max-w-sm text-lg font-medium text-white/80" style={{}}>
                        Making cats happy, one colorful bowl at a time. No boring beige food here.
                    </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-[#FF9BCA] border-2 border-[#2B2D42] flex items-center justify-center text-[#2B2D42] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2B2D42] transition-all" href="#" style={{}}>
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="w-12 h-12 rounded-full bg-[#4D9EFF] border-2 border-[#2B2D42] flex items-center justify-center text-[#2B2D42] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2B2D42] transition-all" href="#" style={{}}>
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a className="w-12 h-12 rounded-full bg-[#FFDD00] border-2 border-[#2B2D42] flex items-center justify-center text-[#2B2D42] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2B2D42] transition-all" href="#" style={{}}>
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
</div>
</div>
<div className="">
<h4 className="font-black text-[#FFDD00] mb-6 text-xl uppercase tracking-wider" style={{}}>Shop</h4>
<ul className="space-y-4 font-bold text-white" style={{}}>
<li><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Dry Food</a></li>
<li><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Wet Food</a></li>
<li className=""><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Treats</a></li>
</ul>
</div>
<div>
<h4 className="font-black text-[#FFDD00] mb-6 text-xl uppercase tracking-wider" style={{}}>Company</h4>
<ul className="space-y-4 font-bold text-white" style={{}}>
<li><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Our Story</a></li>
<li><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Ingredients</a></li>
<li><a className="hover:text-[#FFDD00] transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="chevron-right"></i> Contact</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold border-white/20 text-white/60" style={{}}>
<p>© 2024 Happy Everyday Inc.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
