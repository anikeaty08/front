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
      

<nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-[90rem] mx-auto w-full">
<a className="text-xl font-medium tracking-tighter uppercase" href="#">MDY</a>
<div className="hidden md:flex gap-8 text-sm font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#gifts">Gifts</a>
<a className="hover:text-stone-900 transition-colors" href="#personalized">Personalized</a>
<a className="hover:text-stone-900 transition-colors" href="#categories">Categories</a>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
<p className="text-xs font-medium text-stone-400 mb-6 tracking-widest uppercase">The Mother's Day Edit</p>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-stone-900">A reflection of her.</h1>
<p className="text-base md:text-lg text-stone-500 font-light mb-10 max-w-2xl leading-relaxed">
            Celebrate every facet of the woman who raised you with pieces designed to be as unique and enduring as her love.
        </p>
<a className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm" href="#shop-all">
            Explore the Guide
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</header>

<section className="max-w-[90rem] mx-auto px-6 py-16 md:py-24 border-t border-stone-200/50" id="gifts">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="max-w-xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900">For every kind of Mom</h2>
<p className="text-sm text-stone-500 mt-2 font-light leading-relaxed">Curated selections tailored to her personal style, ensuring a gift that feels intuitively right.</p>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Minimalist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Minimalist</h3>
<p className="text-xs text-stone-500 font-light mt-1">Refined, subtle everyday staples.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Statement Maker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Statement Maker</h3>
<p className="text-xs text-stone-500 font-light mt-1">Bold pieces that command the room.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Classicist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Classicist</h3>
<p className="text-xs text-stone-500 font-light mt-1">Timeless designs she'll wear forever.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Trendsetter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Trendsetter</h3>
<p className="text-xs text-stone-500 font-light mt-1">Modern silhouettes and unique cuts.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Romantic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Romantic</h3>
<p className="text-xs text-stone-500 font-light mt-1">Soft tones and intricate details.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 mb-5 relative border border-stone-200/50">
<img alt="The Collector" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">The Collector</h3>
<p className="text-xs text-stone-500 font-light mt-1">Stackable pieces for her growing gallery.</p>
</a>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-6 py-16 md:py-24" id="personalized">
<div className="bg-white rounded-[2rem] p-6 md:p-16 border border-stone-200/60 shadow-sm flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
<div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 relative group">
<img alt="Isabella Personalized" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-6 border border-rose-100">
<iconify-icon className="text-lg text-rose-500" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Make it unequivocally hers.</h2>
<p className="text-sm md:text-base text-stone-500 font-light leading-relaxed mb-8 max-w-lg">
                    Add initials, meaningful dates, or a secret message. The Isabella Collection features bespoke engravable surfaces designed to carry your sentiments beautifully.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors" href="#">
                    Shop Personalized Gifts
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50 border-y border-stone-200/50 overflow-hidden" id="shop-all">
<div className="max-w-[90rem] mx-auto px-6 mb-10 flex flex-col md:flex-row justify-between md:items-end gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900">Curated for Mom</h2>
<p className="text-sm text-stone-500 font-light mt-2">A selection of our finest pieces across all collections.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 max-w-[90rem] mx-auto hide-scrollbar">

<a className="snap-start shrink-0 w-[260px] md:w-[300px] group block" href="#">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-stone-200/50 mb-4 p-8 relative flex items-center justify-center">
<img alt="Zachary Chain" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-stone-50 text-stone-900 text-xs px-2 py-1 rounded-md font-medium border border-stone-200">New</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-stone-900 leading-snug">Zachary Link Bracelet</h3>
<p className="text-xs text-stone-500 font-light mt-1">14k Solid Gold</p>
</div>
<span className="text-sm font-medium text-stone-900">$450</span>
</div>
</a>

<a className="snap-start shrink-0 w-[260px] md:w-[300px] group block" href="#">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-stone-200/50 mb-4 p-8 relative flex items-center justify-center">
<img alt="Earrings" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-stone-900 leading-snug">Pavé Huggie Hoops</h3>
<p className="text-xs text-stone-500 font-light mt-1">Diamond &amp; White Gold</p>
</div>
<span className="text-sm font-medium text-stone-900">$850</span>
</div>
</a>

<a className="snap-start shrink-0 w-[260px] md:w-[300px] group block" href="#">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-stone-200/50 mb-4 p-8 relative flex items-center justify-center">
<img alt="Pendant" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-stone-900 leading-snug">Locket Pendant</h3>
<p className="text-xs text-stone-500 font-light mt-1">Engravable</p>
</div>
<span className="text-sm font-medium text-stone-900">$320</span>
</div>
</a>

<a className="snap-start shrink-0 w-[260px] md:w-[300px] group block" href="#">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-stone-200/50 mb-4 p-8 relative flex items-center justify-center">
<img alt="Ring" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-stone-50 text-stone-900 text-xs px-2 py-1 rounded-md font-medium border border-stone-200">Best Seller</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-stone-900 leading-snug">Eternity Band</h3>
<p className="text-xs text-stone-500 font-light mt-1">18k Gold</p>
</div>
<span className="text-sm font-medium text-stone-900">$1,200</span>
</div>
</a>

<a className="snap-start shrink-0 w-[260px] md:w-[300px] group block" href="#">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-stone-200/50 mb-4 p-8 relative flex items-center justify-center">
<img alt="Ring" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-stone-900 leading-snug">Signet Ring</h3>
<p className="text-xs text-stone-500 font-light mt-1">Custom Initial</p>
</div>
<span className="text-sm font-medium text-stone-900">$280</span>
</div>
</a>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-6 py-16 md:py-24" id="categories">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-10">Shop by Category</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">

<a className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-stone-100 flex flex-col justify-end p-8 border border-stone-200/40" href="#">
<img alt="Rings" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end text-white">
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Rings</h3>
<p className="text-sm text-stone-200 font-light">Stackable bands &amp; statement signets.</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="relative group overflow-hidden rounded-[2rem] bg-stone-100 flex flex-col justify-end p-8 border border-stone-200/40" href="#">
<img alt="Pendants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end text-white">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Pendants</h3>
<p className="text-sm text-stone-200 font-light hidden md:block">Close to her heart.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="relative group overflow-hidden rounded-[2rem] bg-stone-100 flex flex-col justify-end p-8 border border-stone-200/40" href="#">
<img alt="Bracelets" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end text-white">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Bracelets</h3>
<p className="text-sm text-stone-200 font-light hidden md:block">Links and delicate chains.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-stone-100 flex flex-col justify-end p-8 border border-stone-200/40" href="#">
<img alt="Earrings" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end text-white">
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Earrings</h3>
<p className="text-sm text-stone-200 font-light">From subtle studs to dramatic drops.</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-[90rem] mx-auto px-4 md:px-6">
<div className="relative rounded-[2.5rem] overflow-hidden bg-stone-900 text-white min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center border border-stone-800">
<img alt="Watch lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent"></div>
<div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-stone-500"></div>
<span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-300">Timepieces</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Moments caught in time.</h2>
<p className="text-base md:text-lg text-stone-400 font-light mb-10 leading-relaxed">
                        The Isabella Watch Collection. Precision engineering meets timeless elegance, designed to be worn daily and passed down through generations.
                    </p>
<button className="bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors inline-flex items-center gap-2">
                        Explore Timepieces
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-6 py-16 md:py-24">
<div className="border border-stone-200/60 rounded-[2rem] p-8 md:p-16 bg-white shadow-sm">
<div className="text-center md:text-left mb-12 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-3">Design Her Perfect Earring</h2>
<p className="text-sm md:text-base text-stone-500 font-light">Build a completely custom piece in three simple steps.</p>
</div>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="w-full lg:w-1/2 aspect-square bg-stone-50 rounded-3xl border border-stone-200/50 flex items-center justify-center relative p-8">
<img alt="Base Earring Preview" className="w-full h-full object-cover rounded-2xl mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-medium text-stone-700 flex items-center gap-2 border border-stone-200/50">
<iconify-icon className="text-rose-500" icon="solar:magic-stick-3-linear"></iconify-icon> Live Preview
                    </div>
</div>

<div className="w-full lg:w-1/2 space-y-6">

<div className="group cursor-pointer p-4 -mx-4 rounded-2xl hover:bg-stone-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-medium text-stone-400 uppercase tracking-widest">Step 01</h4>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-lg md:text-xl font-medium text-stone-900 block mb-1">Select Base Hoop</span>
<p className="text-sm text-stone-500 font-light">Choose from classic, pavé, or textured.</p>
</div>
<div className="h-px w-full bg-stone-200/60"></div>

<div className="group cursor-pointer p-4 -mx-4 rounded-2xl hover:bg-stone-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-medium text-stone-400 uppercase tracking-widest">Step 02</h4>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-lg md:text-xl font-medium text-stone-900 block mb-1">Choose Charm</span>
<p className="text-sm text-stone-500 font-light">Add initials, birthstones, or symbols.</p>
</div>
<div className="h-px w-full bg-stone-200/60"></div>

<div className="group cursor-pointer p-4 -mx-4 rounded-2xl hover:bg-stone-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-medium text-stone-400 uppercase tracking-widest">Step 03</h4>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-lg md:text-xl font-medium text-stone-900 block mb-1">Select Metal</span>
<p className="text-sm text-stone-500 font-light">14k Yellow, White, or Rose Gold.</p>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-xl text-sm font-medium mt-8 hover:bg-stone-800 transition-colors shadow-sm">
                        Start Designing
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-[60rem] mx-auto px-6 py-20 border-t border-stone-200/50 mt-10">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-3">Meanings in Every Stone</h2>
<p className="text-sm text-stone-500 font-light">Discover the significance behind her favorite gems.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors border border-stone-200/60 group-hover:border-rose-200 shadow-sm">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600 transition-colors" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">Diamond</h3>
<p className="text-xs text-stone-500 font-light mt-1">Strength &amp; Love</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors border border-stone-200/60 group-hover:border-rose-200 shadow-sm">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600 transition-colors" icon="solar:drop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">Sapphire</h3>
<p className="text-xs text-stone-500 font-light mt-1">Wisdom &amp; Purity</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors border border-stone-200/60 group-hover:border-rose-200 shadow-sm">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600 transition-colors" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">Emerald</h3>
<p className="text-xs text-stone-500 font-light mt-1">Growth &amp; Peace</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors border border-stone-200/60 group-hover:border-rose-200 shadow-sm">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600 transition-colors" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">Citrine</h3>
<p className="text-xs text-stone-500 font-light mt-1">Joy &amp; Abundance</p>
</div>
</div>

<div className="rounded-[2rem] overflow-hidden aspect-[16/9] bg-stone-200 relative group">
<img alt="Gemstone jewelry context" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
<a className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2" href="#">
                Shop Birthstones
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-stone-100 py-12 mt-auto border-t border-stone-200/60">
<div className="max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-lg font-medium tracking-tighter uppercase text-stone-900">MDY</div>
<div className="flex gap-6 text-xs text-stone-500 font-light">
<a className="hover:text-stone-900 transition-colors" href="#">Shipping &amp; Returns</a>
<a className="hover:text-stone-900 transition-colors" href="#">Care Guide</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-stone-400 font-light">
                © 2024 MDY Jewelry.
            </div>
</div>
</footer>

    </>
  );
}
