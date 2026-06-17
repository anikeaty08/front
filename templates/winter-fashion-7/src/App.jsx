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
      

<div className="bg-neutral-900 text-white text-xs py-2.5 text-center flex justify-center items-center gap-6 font-medium tracking-wide">
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="truck"></i> Free shipping on orders over $100</span>
<span className="text-neutral-500">•</span>
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="leaf"></i> Fresh &amp; natural, just for you!</span>
<span className="text-neutral-500">•</span>
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="tag"></i> Buy more, save more! Enjoy exclusive discounts</span>
</div>

<nav className="flex items-center justify-between px-6 py-5 lg:px-12 sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-neutral-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 text-white flex items-center justify-center rounded-sm">
<i className="w-4 h-4" data-lucide="snowflake"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Winterella</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="text-neutral-900" href="#">New arrivals</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Winter collection</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Jackets</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Knitwear</a>
<a className="hover:text-neutral-900 transition-colors text-orange-600" href="#">Sale</a>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors">
<div className="relative">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-600 rounded-full"></span>
</div>
<span className="text-xs font-semibold">Cart (1)</span>
</button>
<button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="heart"></i>
</button>
<button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
</button>
</div>
</nav>

<header className="relative w-full overflow-hidden pt-4 pb-20 lg:pt-10 lg:pb-32">

<div className="flex justify-between px-6 lg:px-12 mb-4 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<span>Move Comfortably</span>
<span className="hidden md:block">Live Freely</span>
<span>Feel Confident</span>
</div>

<div className="absolute inset-0 top-20 flex justify-center pointer-events-none select-none z-0">
<h1 className="text-[18vw] leading-[0.8] font-semibold text-neutral-900 uppercase tracking-tighter text-center opacity-90 scale-y-110">
                Pure<br/>Comfort
            </h1>
</div>

<div className="relative z-10 container mx-auto px-6 h-full flex flex-col lg:flex-row items-end justify-center pt-10 lg:pt-20">

<div className="lg:absolute left-12 top-1/2 -translate-y-1/2 w-full lg:w-64 mb-10 lg:mb-0">
<p className="text-base text-neutral-600 leading-relaxed font-medium">
                    Designed for everyday movement. Soft fabrics, relaxed fits, and effortless comfort.
                </p>
<div className="mt-8 hidden lg:block">
<i className="w-24 h-24 text-orange-100/50" data-lucide="asterisk"></i>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-xl">
<img alt="Winter Fashion Model" className="relative z-10 w-full h-auto object-cover rounded-sm grayscale-[20%] contrast-125 drop-shadow-2xl mask-image-gradient" src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/4 -right-4 lg:-right-24 z-20 w-48 bg-white/40 backdrop-blur-xl border border-white/50 p-3 rounded-xl shadow-xl transform rotate-3">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Autumn Hoodie</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="more-vertical"></i>
</div>
<div className="bg-white rounded-lg p-2 mb-2 shadow-inner">
<img className="w-full h-24 object-cover rounded" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] text-neutral-500 font-medium">Fabric</span>
<span className="text-sm font-semibold">$71.32</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-4 z-30">
<button className="bg-orange-600 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                    Shop The Collection
                </button>
<button className="bg-neutral-900/10 backdrop-blur-md border border-neutral-900/20 text-neutral-900 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/50 transition-colors">
                    Explore New Arrivals
                </button>
</div>
</div>
</header>

<section className="bg-[#0A0A0A] text-white py-24 px-6 lg:px-12 relative overflow-hidden">
<div className="container mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xs">
<p className="text-sm text-neutral-400 font-medium leading-relaxed">
                        Experience the perfect blend of innovation and convenience with smart tech solutions crafted simply.
                    </p>
<div className="flex gap-1 mt-4">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="w-2 h-2 rounded-full bg-neutral-800"></span>
<span className="w-2 h-2 rounded-full bg-neutral-800"></span>
</div>
</div>
<div className="text-center">
<span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">Hot Products</span>
<h2 className="text-5xl lg:text-6xl font-semibold uppercase tracking-tight leading-none">Smart Tech For<br/>Everyday Use</h2>
</div>
<div className="flex gap-3">
<button className="p-3 rounded-full border border-neutral-700 hover:border-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full border border-neutral-700 hover:border-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#F5F5F5] rounded-xl overflow-hidden p-4">
<div className="flex justify-end mb-4">
<button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
<i className="w-4 h-4 text-neutral-900 stroke-[1.5]" data-lucide="heart"></i>
</button>
</div>
<div className="h-80 flex items-center justify-center overflow-hidden">
<img className="object-cover h-full w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-end mt-4 px-2">
<h3 className="text-lg font-semibold text-neutral-900">Autumn Coat</h3>
<span className="text-lg font-medium text-neutral-900">$84.50</span>
</div>
</div>

<div className="group relative bg-[#F5F5F5] rounded-xl overflow-hidden p-4">
<div className="flex justify-end mb-4">
<button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
<i className="w-4 h-4 text-neutral-900 stroke-[1.5]" data-lucide="heart"></i>
</button>
</div>
<div className="h-80 flex items-center justify-center overflow-hidden relative">
<img className="object-cover h-full w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                             Add to Cart <i className="w-3 h-3" data-lucide="shopping-bag"></i>
</button>
</div>
<div className="flex justify-between items-end mt-4 px-2">
<h3 className="text-lg font-semibold text-neutral-900">Leather Jacket</h3>
<span className="text-lg font-medium text-neutral-900">$56.00</span>
</div>
</div>

<div className="group relative bg-[#F5F5F5] rounded-xl overflow-hidden p-4">
<div className="flex justify-end mb-4">
<button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
<i className="w-4 h-4 text-neutral-900 stroke-[1.5]" data-lucide="heart"></i>
</button>
</div>
<div className="h-80 flex items-center justify-center overflow-hidden">
<img className="object-cover h-full w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-end mt-4 px-2">
<h3 className="text-lg font-semibold text-neutral-900">Down Jacket</h3>
<span className="text-lg font-medium text-neutral-900">$154.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-stone-50">
<div className="container mx-auto">
<div className="text-center mb-16">
<span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">Hot Products</span>
<h2 className="text-5xl font-semibold uppercase tracking-tight">Smart Tech For Everyday Use</h2>
</div>
<div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">

<div className="bg-neutral-950 p-12 flex flex-col justify-center items-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">

<svg height="100%" width="100%"><pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path></pattern><rect fill="url(#grid)" height="100%" width="100%"></rect></svg>
</div>
<ul className="text-center space-y-2 z-10">
<li className="text-2xl font-bold text-neutral-700 uppercase tracking-tight">Jumper</li>
<li className="text-3xl font-bold text-neutral-600 uppercase tracking-tight">Pullover</li>
<li className="text-4xl font-bold text-neutral-500 uppercase tracking-tight">Cardigan</li>
<li className="text-5xl font-bold text-neutral-400 uppercase tracking-tight">Sweatshirt</li>
<li className="text-6xl font-bold text-white uppercase tracking-tight flex items-center gap-4">
<span className="bg-white text-black rounded-lg p-1"><i className="w-8 h-8" data-lucide="package"></i></span>
                            Hoodie
                        </li>
<li className="text-5xl font-bold text-neutral-400 uppercase tracking-tight">Leggings</li>
<li className="text-4xl font-bold text-neutral-500 uppercase tracking-tight">Longsleeve</li>
<li className="text-3xl font-bold text-neutral-600 uppercase tracking-tight">Shortsleeve</li>
</ul>
</div>

<div className="relative min-h-[500px]">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-8 right-8 flex flex-col gap-2 items-end">
<span className="bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Comform on your body</span>
<span className="bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Soft Fabrics</span>
<span className="bg-neutral-900/80 backdrop-blur text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Suitable for you</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden bg-white">
<div className="container mx-auto relative">
<div className="flex flex-col items-start gap-0">
<span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">Hot Products</span>
<h2 className="text-4xl lg:text-5xl font-semibold uppercase tracking-tight leading-none max-w-lg">
                    Smart Tech For<br/>Everyday Use
                </h2>
</div>
<div className="relative h-[600px] w-full flex items-center justify-center mt-12">

<div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-10">
<span className="text-[12vw] leading-none font-bold uppercase font-oswald text-neutral-400 text-center scale-y-125">Feel Body</span>
<span className="text-[12vw] leading-none font-bold uppercase font-oswald text-neutral-400 text-center scale-y-125">Feel Body</span>
</div>

<div className="relative z-10 text-center mix-blend-multiply">
<h1 className="text-[18vw] leading-[0.8] font-semibold text-orange-600 uppercase tracking-tighter scale-y-125">
                        Com<span className="text-neutral-900">fort</span>able
                    </h1>
</div>

<div className="absolute top-0 right-[20%] w-48 h-56 bg-white p-2 shadow-xl transform rotate-12 z-20">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1520591799316-6b30425429aa?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="absolute bottom-10 left-[20%] w-56 h-48 bg-white p-2 shadow-xl transform -rotate-12 z-20">
<div className="w-full h-full bg-neutral-100 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
<div className="absolute top-1/3 left-[15%] w-40 h-40 bg-white p-2 shadow-xl transform -rotate-6 z-20 rounded-full overflow-hidden border-4 border-white">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-12 items-end mt-12">
<div className="hidden lg:block"></div> 
<div className="lg:col-span-1 text-center lg:text-right">
<p className="text-sm text-neutral-600 font-medium mb-6">
                        Experience the perfect blend of innovation and convenience <span className="text-neutral-900 font-bold">smart tech</span> solutions crafted to simplify and enhance your everyday life
                     </p>
<button className="bg-neutral-900 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
                        Shop The Collection
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#FDFBF7]">
<div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="flex -space-x-4 mb-8">
<img className="w-16 h-16 rounded-full border-4 border-[#FDFBF7]" src="https://i.pravatar.cc/150?u=1"/>
<img className="w-16 h-16 rounded-full border-4 border-[#FDFBF7]" src="https://i.pravatar.cc/150?u=2"/>
<img className="w-16 h-16 rounded-full border-4 border-[#FDFBF7]" src="https://i.pravatar.cc/150?u=3"/>
<div className="w-16 h-16 rounded-full border-4 border-[#FDFBF7] bg-neutral-900 flex items-center justify-center text-white text-xs font-bold">4.8k+</div>
</div>
<span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 mb-4 uppercase tracking-wider">Testimonials</span>
<h2 className="text-5xl font-semibold uppercase tracking-tight mb-8 leading-none">From Happy<br/>Clients</h2>
<h3 className="text-3xl font-bold uppercase mb-4">Koen Ceggs</h3>
<p className="text-lg text-neutral-600 font-medium leading-relaxed mb-8">
                    "Experience the perfect blend of innovation and solutions <span className="font-bold text-neutral-900">convenience with</span> smart tech solutions crafted to simplify and enhance your everyday life."
                </p>
<div className="flex items-center gap-4">
<span className="text-4xl font-light text-neutral-400">01 <span className="text-sm text-neutral-300">/ 05</span></span>
<div className="flex gap-2 ml-auto lg:ml-8">
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-center mb-2">
<div className="flex text-orange-500 gap-1 text-xs">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-neutral-500">(4.5 ratings)</span>
</div>
<div className="rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 lg:px-12">
<div className="text-center mb-10">
<span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">Winter Essentials</span>
<h2 className="text-4xl lg:text-5xl font-semibold uppercase tracking-tight">Winter Style, Perfected By Winterella</h2>
</div>
<div className="container mx-auto grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl h-auto lg:h-[600px]">

<div className="relative h-[500px] lg:h-full bg-neutral-200">
<img className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<span className="absolute top-20 left-10 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase transform -rotate-6 rounded-sm shadow-sm">Signature Winter</span>
<span className="absolute bottom-32 left-10 bg-orange-100 text-orange-800 px-3 py-1 text-[10px] font-bold uppercase transform rotate-6 rounded-sm shadow-sm">Cozy &amp; Chic</span>
<span className="absolute top-48 right-10 bg-yellow-100 text-yellow-800 px-3 py-1 text-[10px] font-bold uppercase transform rotate-3 rounded-sm shadow-sm">Luxury Warmth</span>
<span className="absolute bottom-20 right-20 bg-blue-100 text-blue-800 px-3 py-1 text-[10px] font-bold uppercase transform -rotate-3 rounded-sm shadow-sm">Customer Favorite</span>
</div>

<div className="bg-neutral-950 p-12 flex flex-col justify-center text-white relative">
<div className="flex items-center gap-2 mb-4 text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs text-neutral-400 ml-2 font-medium">Trusted by 119.5k+ women</span>
</div>
<h2 className="text-5xl font-semibold uppercase tracking-tight mb-6 leading-none">Elevated Fashion For<br/>Everyday Women</h2>
<p className="text-neutral-400 text-sm font-medium leading-relaxed mb-10 max-w-md">
                     Carefully designed winter wear that blends warmth, comfort, and modern style — made for women who want to look confident every day.
                 </p>

<div className="flex gap-4 mb-10">
<div className="w-24 h-32 rounded-lg overflow-hidden border border-neutral-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="w-24 h-32 rounded-lg overflow-hidden border border-neutral-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="w-24 h-32 rounded-lg overflow-hidden border border-neutral-700">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<button className="bg-orange-600 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors w-fit shadow-lg shadow-orange-900/50">
                    Check Exclusive Collections
                </button>
</div>
</div>
</section>

<footer className="bg-[#FDFBF7] pt-24 pb-8 relative overflow-hidden">
<div className="container mx-auto px-6 lg:px-12 relative z-20">
<div className="flex flex-col lg:flex-row justify-between gap-12 mb-40">

<div className="space-y-4">
<p className="text-sm font-medium text-neutral-800">1234 Sunshine Blvd, Suite 567<br/>Miami, FL 33101</p>
<div className="space-y-1">
<p className="text-sm font-semibold text-neutral-900">1-800-555-SUNRAYS</p>
<p className="text-sm font-medium text-neutral-500">(1-800-552-3542)</p>
</div>
<p className="text-sm font-medium text-neutral-900">hello@winterella.com</p>
</div>

<div className="flex gap-16">
<div>
<h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Quick Links</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="bg-white px-3 py-1 rounded shadow-sm inline-block" href="#">About us</a></li>
<li><a className="hover:text-neutral-900" href="#">Shop</a></li>
<li><a className="bg-neutral-100 px-3 py-1 rounded inline-block" href="#">New Arrivals</a></li>
<li><a className="hover:text-neutral-900" href="#">Winter Collection</a></li>
<li><a className="hover:text-neutral-900" href="#">Career</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Services</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900" href="#">Return Policy</a></li>
<li><a className="hover:text-neutral-900" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-neutral-900" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-neutral-900" href="#">FAQ</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 text-center">
<p className="text-xs text-neutral-500 font-medium">© 2026 Winterall. All rights reserved.</p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[500px] flex justify-center overflow-hidden z-10 pointer-events-none">
<h1 className="absolute bottom-[-5%] text-[24vw] leading-none font-bold uppercase font-oswald text-neutral-900 tracking-tighter z-10 mix-blend-overlay opacity-80">Winterella</h1>

<img className="relative z-0 h-[450px] object-cover object-top mask-image-bottom-fade translate-y-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</footer>


    </>
  );
}
