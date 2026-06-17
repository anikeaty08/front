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
      

<main className="max-w-lg mx-auto min-h-screen bg-white shadow-2xl shadow-neutral-200/50 relative overflow-hidden border-x border-neutral-100">

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-100 px-6 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">


<img alt="Khatta Singh Logo" className="w-auto h-12 object-cover bg-center scale-110 skew-y-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9c329bb-3086-4008-9c2c-573ac3b46e22_320w.png"/>
</div>
<a className="hover:bg-neutral-800 transition-colors text-xs font-medium text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4" href="#menu">
                View Menu
            </a>
</nav>

<header className="px-6 pt-10 pb-12 relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-100/50 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span>100% Organic &amp; Natural</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight leading-[1.1] mb-4 text-neutral-900">
                    Not a normal stall, <br/>
<span className="text-neutral-500">it’s a flavour brand.</span>
</h1>
<p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                    Normal golgappe sab dete hain. Flavoured, organic &amp; natural golgappe sirf <span className="font-medium text-neutral-900 decoration-lime-400 decoration-2 underline underline-offset-2">Khatta Singh</span>.
                </p>
<div className="flex flex-col gap-3">
<a className="w-full bg-lime-400 text-neutral-900 font-medium py-3.5 rounded-xl border border-lime-500 shadow-[0_2px_0_0_rgba(163,230,53,1)] active:shadow-none active:translate-y-[2px] transition-all flex items-center justify-center gap-2" href="#location">
<span>Visit Stall in Motijheel</span>
<iconify-icon className="text-lg" icon="solar:map-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Open Daily 4:00 PM (Closed Tuesdays)</span>
</div>
</div>
</div>
</header>

<div className="w-full bg-neutral-900 py-3 overflow-hidden whitespace-nowrap">
<div className="inline-flex gap-8 animate-marquee">
<span className="text-white/90 text-sm font-medium tracking-wide uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> No Preservatives</span>
<span className="text-white/90 text-sm font-medium tracking-wide uppercase flex items-center gap-2"><iconify-icon icon="solar:drop-linear"></iconify-icon> Mineral Water</span>
<span className="text-white/90 text-sm font-medium tracking-wide uppercase flex items-center gap-2"><iconify-icon icon="solar:chef-hat-linear"></iconify-icon> Fresh Daily</span>
<span className="text-white/90 text-sm font-medium tracking-wide uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> No Artificial Colors</span>
</div>
</div>

<section className="bg-neutral-50/50 pt-12 pb-12">
<div className="px-6 mb-6">
<h2 className="text-xl font-semibold tracking-tight mb-1">The Signatures</h2>
<p className="text-sm text-neutral-500">Rotate daily based on fresh availability.</p>
</div>

<div className="flex overflow-x-auto gap-4 px-6 pb-4 no-scrollbar snap-x">

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="flex text-pink-600 bg-pink-100 w-12 h-12 rounded-full mb-3 items-center justify-center">
<iconify-icon className="text-2xl" icon="lucide:strawberry" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Strawberry</h3>
<span className="text-xs text-neutral-500">Berry Sweet</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" height="24" icon="solar:sun-2-linear" strokeWidth="1.5" style={{color: 'rgb(202, 138, 4)'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Pineapple</h3>
<span className="text-xs text-neutral-500">Sweet &amp; Tangy</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:round-alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Orange</h3>
<span className="text-xs text-neutral-500">Citrus Blast</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Guava</h3>
<span className="text-xs text-neutral-500">Mildly Sweet</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Hing</h3>
<span className="text-xs text-neutral-500">Digestive Punch</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:dropper-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Pure Imli</h3>
<span className="text-xs text-neutral-500">Classic Tart</span>
</div>

<div className="min-w-[140px] snap-center bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-1">Garlic</h3>
<span className="text-xs text-neutral-500">Bold &amp; Spicy</span>
</div>
</div>
</section>

<section className="pt-12 pr-6 pb-12 pl-6" id="menu">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Menu</h2>
<div className="space-y-4">

<div className="group flex border-neutral-100 border-b pb-4 items-start justify-between">
<div>
<h3 className="font-medium text-neutral-900 text-lg">Atta Golgappe</h3>
<p className="text-sm text-neutral-500 mt-1">6 pieces • Crisp &amp; Classic</p>
</div>
<div className="font-semibold text-neutral-900">₹30</div>
</div>

<div className="group flex border-neutral-100 border-b pb-4 items-start justify-between">
<div>
<h3 className="font-medium text-neutral-900 text-lg">Suji Golgappe</h3>
<p className="text-sm text-neutral-500 mt-1">6 pieces • Light &amp; Crunchy</p>
</div>
<div className="font-semibold text-neutral-900">₹30</div>
</div>

<div className="group flex justify-between items-start border-b border-neutral-100 pb-4">
<div>
<h3 className="font-medium text-neutral-900 text-lg">Full Plate</h3>
<p className="text-sm text-neutral-500 mt-1">7 pieces • Mix &amp; Match</p>
</div>
<div className="font-semibold text-neutral-900">₹50</div>
</div>

<div className="group flex justify-between items-start border-b border-neutral-100 pb-4">
<div>
<h3 className="font-medium text-neutral-900 text-lg">Papri Chaat</h3>
<p className="text-sm text-neutral-500 mt-1">Loaded with yogurt &amp; chutney</p>
</div>
<div className="font-semibold text-neutral-900">₹50</div>
</div>
</div>

<div className="mt-8 bg-neutral-50 rounded-xl p-4 border border-neutral-200 flex gap-3 items-start">
<iconify-icon className="text-neutral-400 text-xl flex-shrink-0 mt-0.5" icon="solar:box-minimalistic-linear"></iconify-icon>
<div className="text-xs text-neutral-600">
<p className="font-medium text-neutral-900 mb-1">Takeaway Rules</p>
<p>Packaging Charge: ₹10 per plate.</p>
<p className="mt-1 opacity-80">Only one flavour of water is provided with packed orders to ensure quality.</p>
</div>
</div>
</section>

<section className="px-6 py-12 bg-neutral-900 text-white relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-lime-400 text-3xl mb-4" icon="solar:heart-angle-linear"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight mb-4 leading-snug">"Not just a stall, it’s an emotion."</h2>
<p className="text-neutral-300 font-light leading-relaxed">
                    In a city full of street food, we decided to strip away the chemicals and bring back the soul of Kanpur's favourite snack. Clean water, honest ingredients, and flavours that speak for themselves.
                </p>
</div>

<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl"></div>
</section>

<section className="px-6 py-12" id="location">
<h2 className="text-xl font-semibold tracking-tight mb-6">Find us in Motijheel</h2>
<div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-1 overflow-hidden">

<div className="w-full h-40 bg-neutral-100 rounded-xl mb-4 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="flex bg-white z-10 border-neutral-200 border rounded-lg pt-2 pr-4 pb-2 pl-4 relative shadow-sm -skew-y-5 gap-x-2 gap-y-2 items-center">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold text-neutral-900">We are here</span>
</div>
</div>
<div className="px-3 pb-3">
<address className="not-italic text-sm text-neutral-600 space-y-3">
<div className="flex gap-3">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>
<strong className="block text-neutral-900 font-medium">Motijheel, Kanpur</strong>
                                Near Kargil Park, in front of Swami Vivekananda Statue.
                            </span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<span>
                                4:00 PM – Till Sold Out
                                <span className="text-red-500 text-xs">Closed on Tuesdays</span>
</span>
</div>
</address>
<a className="mt-4 w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-medium text-sm py-3 rounded-xl hover:bg-neutral-800 transition-colors" href="https://maps.google.com" target="_blank">
<iconify-icon icon="solar:map-arrow-up-linear"></iconify-icon>
                        Get Directions
                    </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-8 px-6 text-center">

<div className="flex mb-4 justify-center">
</div>
<p className="text-xs text-neutral-400">Premium Street Pani Puri </p>
<div className="flex gap-6 mt-6 gap-x-6 gap-y-6 justify-center">
<a className="text-neutral-400 hover:text-pink-600 transition-colors" href="#">
<iconify-icon className="text-xl" height="20" icon="lucide:instagram" style={{color: 'rgb(219, 39, 119)'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-green-600 transition-colors" href="#">
<iconify-icon className="text-xl" height="20" icon="lucide:phone-call" style={{color: 'rgb(22, 163, 74)'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon className="text-xl" height="20" icon="lucide:facebook" style={{color: 'rgb(37, 99, 235)'}} width="20"></iconify-icon>
</a>
</div>
<p className="text-[10px] text-neutral-300 mt-8">
                © 2024 Khatta Singh. Made in Kanpur.
            </p>
</footer>

<div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
<a className="w-full bg-neutral-900/90 backdrop-blur-md text-white font-medium py-3.5 rounded-2xl shadow-xl flex items-center justify-between px-6 border border-white/10" href="#location">
<span className="text-sm">Visit Today</span>
<div className="flex items-center gap-2 text-lime-400">
<span className="text-sm font-semibold">Directions</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</main>

    </>
  );
}
