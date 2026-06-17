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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function placeOrder(productName) {
            const message = encodeURIComponent(`Hi, I'd like to order the ${productName} candle.`);
            
            // Your two provided numbers
            const number1 = "7003693814";
            //const number2 = "8272938340";
            
            const url1 = `https://wa.me/${number1}?text=${message}`;
            //const url2 = `https://wa.me/${number2}?text=${message}`;
            
            // Opens the first chat in a new browser tab
            window.open(url2, '_blank
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
      

<nav className="sticky top-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-stone-200/40">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl tracking-tighter font-medium text-stone-900 flex items-center gap-2" href="#">
<iconify-icon className="text-amber-700" height="1.2em" icon="solar:flame-linear" width="1.2em"></iconify-icon>
                PS GLOW
            </a>
<div className="flex items-center gap-8">
<a className="hover:text-stone-900 transition-colors hidden sm:block text-sm font-light text-stone-500" href="#collection">Collection</a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors hidden sm:block" href="#philosophy">Philosophy</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-stone-700 transition-all text-xs font-medium text-[#faf9f6] bg-amber-800 rounded-full px-5 py-2.5" href="#collection">
                    Shop Now
                </a>
</div>
</div>
</nav>

<section className="flex flex-col animate-fade-in text-center max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 items-center">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 mb-6">Hand-poured in small batches</span>
<h1 className="font-serif text-5xl sm:text-7xl tracking-tight font-medium text-stone-900 mb-8 max-w-3xl leading-tight">
            Light up your <span className="italic text-stone-600">sanctuary.</span>
</h1>
<p className="text-base sm:text-lg text-stone-500 max-w-xl mb-12 font-light leading-relaxed">
            Crafted with natural soy wax and botanical essential oils to bring warmth, peace, and lingering comfort to your personal space.
        </p>
<div className="w-full max-w-5xl aspect-[16/9] sm:aspect-[21/9] bg-stone-200 rounded-[2rem] overflow-hidden relative mt-8">
<img alt="Lit candles in a cozy setting" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>

<div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent mix-blend-multiply"></div>
</div>
</section>

<section className="py-24 bg-stone-100/30" id="collection">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-medium text-stone-900 mb-3">Signature Scents</h2>
<p className="text-sm text-stone-500 font-light max-w-md">Explore our core collection. Simple, elegant, and designed to elevate your everyday rituals.</p>
</div>
<div className="flex items-center gap-2 text-xs text-stone-400 font-light">
<iconify-icon height="1.2em" icon="solar:info-circle-linear" width="1.2em"></iconify-icon>
                    Orders are processed seamlessly via WhatsApp.
                </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group flex flex-col opacity-0 animate-fade-in">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Midnight Amber Candle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-[#faf9f6]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-stone-800">
                            Bestseller
                        </div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl tracking-tight font-medium text-stone-900">Midnight Amber</h3>
<span className="text-base text-stone-900 font-medium">$28</span>
</div>
<p className="text-xs text-stone-500 mb-6 font-light leading-relaxed h-10">Oakmoss, rich sandalwood, and a hint of warm vanilla.</p>
<button className="inline-flex hover:bg-amber-900 transition-all duration-300 text-sm text-[#faf9f6] bg-amber-800 w-full rounded-full pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" onclick="placeOrder('Midnight Amber')">
<iconify-icon height="1.2em" icon="solar:chat-round-line-linear" width="1.2em"></iconify-icon>
                        Order on WhatsApp
                    </button>
</div>

<div className="group flex flex-col opacity-0 animate-fade-in delay-100">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Fig &amp; Cedar Candle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl tracking-tight font-medium text-stone-900">Fig &amp; Cedar</h3>
<span className="text-base text-stone-900 font-medium">$26</span>
</div>
<p className="text-xs text-stone-500 mb-6 font-light leading-relaxed h-10">Ripe fig, earthy cedarwood, and delicate white tea leaves.</p>
<button className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-[#faf9f6] transition-all duration-300 text-sm w-full rounded-full py-3" onclick="placeOrder('Fig &amp; Cedar')">
<iconify-icon height="1.2em" icon="solar:chat-round-line-linear" width="1.2em"></iconify-icon>
                        Order on WhatsApp
                    </button>
</div>

<div className="group flex flex-col opacity-0 animate-fade-in delay-200">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Wild Sage Candle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl tracking-tight font-medium text-stone-900">Wild Sage</h3>
<span className="text-base text-stone-900 font-medium">$26</span>
</div>
<p className="text-xs text-stone-500 mb-6 font-light leading-relaxed h-10">Fresh lavender, wild sage, and a touch of sea salt.</p>
<button className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-[#faf9f6] transition-all duration-300 text-sm w-full rounded-full py-3" onclick="placeOrder('Wild Sage')">
<iconify-icon height="1.2em" icon="solar:chat-round-line-linear" width="1.2em"></iconify-icon>
                        Order on WhatsApp
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32" id="philosophy">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-amber-700/50 mb-8" height="2em" icon="solar:sparkles-linear" width="2em"></iconify-icon>
<h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-medium text-stone-900 mb-6">Mindfully Crafted</h2>
<p className="text-base sm:text-lg text-stone-500 font-light leading-relaxed mb-16">
                Every candle is poured by hand in our quiet studio. We use 100% natural soy wax, lead-free cotton wicks, and phthalate-free fragrances. Our philosophy is simple: create beautiful, minimal objects that foster moments of stillness and comfort.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-stone-200/50 pt-16">
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4">
<iconify-icon className="text-stone-600" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-stone-900 mb-2">Natural Ingredients</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">Clean-burning soy wax sourced from sustainable farms.</p>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4">
<iconify-icon className="text-stone-600" height="1.2em" icon="solar:clock-circle-linear" width="1.2em"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-stone-900 mb-2">Long Lasting</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">Carefully tested wick sizes ensure a slow, even burn up to 50 hours.</p>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4">
<iconify-icon className="text-stone-600" height="1.2em" icon="solar:box-minimalistic-linear" width="1.2em"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-stone-900 mb-2">Eco Packaging</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">Shipped in recyclable materials with zero plastic.</p>
</div>
</div>
</div>
</section>

<footer className="text-stone-400 bg-amber-800 border-stone-800 border-t py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-500" height="1.2em" icon="solar:flame-linear" width="1.2em"></iconify-icon>
<span className="font-serif text-lg tracking-tighter font-medium text-stone-200">A U R A</span>
</div>
<p className="text-xs font-light">© 2026 Aura Candles. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">
<iconify-icon className="" height="1.5em" icon="solar:camera-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">
<iconify-icon height="1.5em" icon="solar:letter-linear" width="1.5em"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
