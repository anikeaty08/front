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
      

<div className="bg-teal-950 text-white text-[10px] uppercase tracking-widest font-semibold py-2.5 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-50 skew-x-12 translate-x-1/2"></div>
<span className="relative z-10 opacity-90 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
            Free shipping on orders over €50
        </span>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-900 hover:text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
<a className="text-lg font-bold tracking-tighter text-teal-950" href="#">SANA.</a>
</div>

<div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 rounded-full hover:bg-white hover:shadow-sm hover:text-teal-950 transition-all" href="#">Face</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 rounded-full hover:bg-white hover:shadow-sm hover:text-teal-950 transition-all" href="#">Body</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 rounded-full hover:bg-white hover:shadow-sm hover:text-teal-950 transition-all" href="#">Supplements</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 rounded-full hover:bg-white hover:shadow-sm hover:text-teal-950 transition-all" href="#">Baby</a>
</div>

<div className="flex items-center gap-5">
<button className="text-slate-500 hover:text-teal-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="relative group">
<span className="iconify text-slate-500 group-hover:text-teal-900 transition-colors" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-teal-950 text-[9px] font-bold text-white">2</span>
</button>
</div>
</div>
</nav>

<section className="pt-12 pb-20 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-6 animate-fade-in relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-slate-500 text-[10px] uppercase font-semibold tracking-wider mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                    Dermatologist Approved
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-teal-950 mb-6 leading-[0.95]">
                    Science for <br/>
<span className="text-slate-400">sensitive skin.</span>
</h1>
<p className="text-base text-slate-500 mb-10 leading-relaxed font-normal max-w-md tracking-tight">
                    Clinically proven formulations for daily health. Sourced directly from European laboratories with full traceability.
                </p>
<div className="flex flex-wrap items-center gap-3">
<button className="px-6 py-3 bg-teal-950 hover:bg-slate-800 text-white text-xs font-medium rounded-full transition-all flex items-center gap-2 shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 hover:-translate-y-0.5">
                        Start Diagnosis
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 text-slate-600 text-xs font-medium rounded-full transition-all hover:bg-gray-50">
                        View Catalog
                    </button>
</div>
</div>

<div className="md:col-span-6 relative h-[500px] w-full animate-fade-in delay-100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-100/40 via-purple-100/30 to-transparent blur-3xl opacity-60"></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-64 h-80 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl shadow-slate-200/50 flex flex-col items-center justify-center p-6 z-20 hover:scale-105 transition-transform duration-700 ease-out">

<div className="relative w-20 h-40 bg-gradient-to-br from-white to-gray-100 border border-gray-100 rounded-b-xl rounded-t-lg shadow-inner mb-6 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-10 bg-gray-50 border-b border-gray-100"></div> 
<div className="absolute bottom-4 inset-x-4 h-12 bg-teal-50/50 rounded-sm"></div>
</div>
<div className="text-center w-full">
<div className="h-2 w-16 bg-slate-200 rounded-full mx-auto mb-2"></div>
<div className="h-2 w-24 bg-slate-100 rounded-full mx-auto"></div>
</div>

<div className="absolute -right-8 top-10 bg-white border border-gray-100 shadow-xl px-3 py-2 rounded-xl flex items-center gap-2 animate-bounce duration-[3000ms]">
<span className="iconify text-teal-600" data-icon="lucide:droplet" data-width="14"></span>
<span className="text-[10px] font-semibold text-teal-950">Hydration +40%</span>
</div>
</div>

<div className="absolute -left-4 bottom-10 w-48 h-56 bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg z-10 rotate-[-6deg]"></div>

<div className="absolute -right-4 top-10 w-48 h-48 bg-teal-50/40 backdrop-blur-md border border-white/40 rounded-full shadow-lg z-0 animate-pulse"></div>
</div>
</div>
</div>
</section>

<div className="border-y border-gray-100 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-12 py-5 overflow-x-auto no-scrollbar mask-image-linear-gradient px-6">
<span className="text-xs font-semibold text-slate-300 uppercase tracking-widest whitespace-nowrap">Shop by</span>
<a className="group flex items-center gap-2 text-slate-500 hover:text-teal-950 transition-colors whitespace-nowrap" href="#">
<span className="p-1 rounded bg-slate-100 group-hover:bg-teal-50 transition-colors"><span className="iconify" data-icon="lucide:sun" data-width="14"></span></span>
<span className="text-xs font-medium">Suncare</span>
</a>
<span className="h-1 w-1 rounded-full bg-slate-200"></span>
<a className="group flex items-center gap-2 text-slate-500 hover:text-teal-950 transition-colors whitespace-nowrap" href="#">
<span className="p-1 rounded bg-slate-100 group-hover:bg-teal-50 transition-colors"><span className="iconify" data-icon="lucide:sparkles" data-width="14"></span></span>
<span className="text-xs font-medium">Anti-Aging</span>
</a>
<span className="h-1 w-1 rounded-full bg-slate-200"></span>
<a className="group flex items-center gap-2 text-slate-500 hover:text-teal-950 transition-colors whitespace-nowrap" href="#">
<span className="p-1 rounded bg-slate-100 group-hover:bg-teal-50 transition-colors"><span className="iconify" data-icon="lucide:baby" data-width="14"></span></span>
<span className="text-xs font-medium">Maternity</span>
</a>
<span className="h-1 w-1 rounded-full bg-slate-200"></span>
<a className="group flex items-center gap-2 text-slate-500 hover:text-teal-950 transition-colors whitespace-nowrap" href="#">
<span className="p-1 rounded bg-slate-100 group-hover:bg-teal-50 transition-colors"><span className="iconify" data-icon="lucide:pill" data-width="14"></span></span>
<span className="text-xs font-medium">Vitamins</span>
</a>
<span className="h-1 w-1 rounded-full bg-slate-200"></span>
<a className="group flex items-center gap-2 text-slate-500 hover:text-teal-950 transition-colors whitespace-nowrap" href="#">
<span className="p-1 rounded bg-slate-100 group-hover:bg-teal-50 transition-colors"><span className="iconify" data-icon="lucide:flask-conical" data-width="14"></span></span>
<span className="text-xs font-medium">Dermatology</span>
</a>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-semibold tracking-tight text-teal-950">Essential Care</h2>
<p className="text-xs text-slate-500 mt-1">Pharmacist recommendations for this season.</p>
</div>
<a className="text-xs font-medium text-slate-400 hover:text-teal-950 transition-colors flex items-center gap-1 group" href="#">
                Browse all <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">

<div className="group cursor-pointer">
<div className="relative bg-gray-100 aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-transparent group-hover:border-gray-200 transition-all">

<div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
<div className="w-16 h-36 bg-gradient-to-t from-white to-gray-50 border border-gray-100 rounded-sm relative shadow-sm group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-50/50 rounded-full"></div>
<div className="absolute bottom-4 left-2 right-2 h-1 bg-blue-400"></div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full py-2 bg-white/90 backdrop-blur text-teal-950 text-xs font-semibold rounded-lg shadow-lg hover:bg-teal-950 hover:text-white transition-colors">Add to Cart</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">La Roche-Posay</p>
<h3 className="text-sm font-medium text-slate-800 leading-tight">Effaclar Duo+</h3>
</div>
<span className="text-sm font-semibold text-teal-950">€14.50</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-100 aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-transparent group-hover:border-gray-200 transition-all">
<div className="absolute top-3 right-3 z-10 bg-white border border-gray-100 rounded px-1.5 py-0.5 shadow-sm">
<div className="flex gap-0.5 text-orange-400 text-[10px]">
<span className="iconify" data-icon="lucide:star" data-width="10" fill="currentColor"></span>
<span className="font-semibold text-slate-700 ml-1">4.9</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
<div className="w-24 h-24 bg-white border border-gray-100 rounded-full relative shadow-sm group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<div className="w-20 h-20 border border-blue-50 rounded-full"></div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full py-2 bg-white/90 backdrop-blur text-teal-950 text-xs font-semibold rounded-lg shadow-lg hover:bg-teal-950 hover:text-white transition-colors">Add to Cart</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">CeraVe</p>
<h3 className="text-sm font-medium text-slate-800 leading-tight">Moisturizing Cream</h3>
</div>
<span className="text-sm font-semibold text-teal-950">€18.90</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-100 aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-transparent group-hover:border-gray-200 transition-all">
<div className="absolute top-3 left-3 z-10 bg-teal-900 text-white px-2 py-0.5 text-[10px] font-semibold tracking-wide rounded">NEW</div>

<div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
<div className="w-12 h-32 bg-gradient-to-b from-transparent via-white to-white border border-gray-100 rounded-b-xl rounded-t-sm relative shadow-sm group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-0 w-full h-8 bg-gray-200/50"></div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full py-2 bg-white/90 backdrop-blur text-teal-950 text-xs font-semibold rounded-lg shadow-lg hover:bg-teal-950 hover:text-white transition-colors">Add to Cart</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Vichy</p>
<h3 className="text-sm font-medium text-slate-800 leading-tight">Mineral 89 Booster</h3>
</div>
<span className="text-sm font-semibold text-teal-950">€24.00</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-100 aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-transparent group-hover:border-gray-200 transition-all">

<div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
<div className="w-10 h-28 bg-amber-50/30 border border-gray-200 rounded-sm relative shadow-sm group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-4 left-0 right-0 h-8 border-y border-amber-900/10"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-6 bg-black rounded-t-sm"></div> 
</div>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full py-2 bg-white/90 backdrop-blur text-teal-950 text-xs font-semibold rounded-lg shadow-lg hover:bg-teal-950 hover:text-white transition-colors">Add to Cart</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">SkinCeuticals</p>
<h3 className="text-sm font-medium text-slate-800 leading-tight">C E Ferulic Serum</h3>
</div>
<span className="text-sm font-semibold text-teal-950">€148.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 max-w-sm">
<h3 className="text-2xl font-semibold text-teal-950 mb-3 tracking-tight">Prescription Upload</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Skip the queue. Upload your doctor's prescription securely and get your medication delivered in 24h.
                    </p>
<a className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1" href="#">
                        Secure Upload <span className="iconify" data-icon="lucide:lock" data-width="12"></span>
</a>
</div>
<div className="relative z-10 w-full md:w-1/3 h-32 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center shadow-sm">
<span className="iconify text-slate-200" data-icon="lucide:file-up" data-width="48"></span>
</div>
</div>

<div className="bg-teal-950 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden text-white group">
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
<div>
<span className="iconify text-teal-300 mb-4" data-icon="lucide:message-circle-heart" data-width="24"></span>
<h3 className="text-lg font-semibold tracking-tight">Expert Chat</h3>
</div>
<p className="text-xs text-teal-200/80 leading-relaxed mt-4">
                    Speak with a certified pharmacist. Available daily 9am - 8pm.
                </p>
</div>

<div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col justify-center text-center items-center hover:border-teal-100 transition-colors">
<div className="w-10 h-10 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-3">
<span className="iconify" data-icon="lucide:leaf" data-width="18"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Eco-Responsible</h3>
<p className="text-xs text-slate-500">Recyclable packaging &amp; carbon neutral shipping.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 p-8 flex items-center relative overflow-hidden">
<div className="flex-1">
<h3 className="text-lg font-semibold text-teal-950 mb-2">The SANA. Club</h3>
<p className="text-xs text-slate-500 max-w-xs mb-4">Join 15,000+ members getting exclusive early access and better prices.</p>
<form className="flex gap-2 max-w-xs">
<input className="flex-1 bg-white border border-gray-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-teal-500 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-teal-950 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors">Join</button>
</form>
</div>
<div className="hidden md:block w-32 h-32 relative">
<div className="absolute inset-0 bg-teal-100/50 rounded-full blur-2xl"></div>
<span className="iconify text-teal-900/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-icon="lucide:crown" data-width="80"></span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-12 px-6 text-xs">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2">
<a className="text-lg font-bold tracking-tighter text-teal-950 mb-4 block" href="#">SANA.</a>
<p className="text-slate-400 max-w-xs leading-relaxed mb-6">
                        Bridging the gap between clinical expertise and daily self-care. Your digital pharmacy partner.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-teal-950 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-slate-400 hover:text-teal-950 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
<div className="col-span-1">
<h4 className="font-semibold text-slate-900 mb-4">Shop</h4>
<ul className="space-y-2.5 text-slate-500">
<li><a className="hover:text-teal-700" href="#">Skincare</a></li>
<li><a className="hover:text-teal-700" href="#">Supplements</a></li>
<li><a className="hover:text-teal-700" href="#">First Aid</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-semibold text-slate-900 mb-4">About</h4>
<ul className="space-y-2.5 text-slate-500">
<li><a className="hover:text-teal-700" href="#">Our Story</a></li>
<li><a className="hover:text-teal-700" href="#">Pharmacists</a></li>
<li><a className="hover:text-teal-700" href="#">Careers</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2.5 text-slate-500">
<li><a className="hover:text-teal-700" href="#">Privacy Policy</a></li>
<li><a className="hover:text-teal-700" href="#">Terms of Service</a></li>
<li><a className="hover:text-teal-700" href="#">Cookie Settings</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2.5 text-slate-500">
<li><a className="hover:text-teal-700" href="#">support@sana.com</a></li>
<li>+33 1 23 45 67 89</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
<p>© 2024 SANA Parapharmacie.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
