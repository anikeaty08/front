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
      

<nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 border-stone-100" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">

<a className="text-2xl font-semibold tracking-tight" href="#">LIGHTGLAM</a>

<div className="hidden md:flex items-center gap-8 text-base font-medium text-orange-500" style={{}}>
<a className="transition-colors text-orange-900 hover:text-orange-900" href="#" style={{}}>Bats</a>
<a className="transition-colors hover:text-orange-900" href="#">Gloves</a>
<a className="transition-colors hover:text-orange-900" href="#" style={{}}>Training</a>
<a className="transition-colors text-green-600 hover:text-orange-900" href="#" style={{}}>Sale</a>
</div>

<div className="flex items-center flex-1 justify-end gap-6">
<div className="hidden lg:flex items-center w-full max-w-xs rounded-full px-4 py-2.5 border border-transparent focus-within:border-stone-200 focus-within:bg-white transition-all group bg-stone-50" style={{}}>
<svg className="lucide lucide-search w-5 h-5 group-focus-within:text-sky-900 text-blue-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none outline-none text-base ml-3 w-full placeholder:text-stone-400" placeholder="Search for bats, gear..." style={{}} type="text"/>
</div>
<div className="flex items-center gap-5">
<button className="relative group">
<svg className="lucide lucide-shopping-bag w-6 h-6 transition-colors group-hover:text-sky-900 text-sky-700" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-medium text-white bg-orange-900" style={{}}>2</span>
</button>
<button className="group">
<svg className="lucide lucide-heart w-6 h-6 transition-colors group-hover:text-sky-900 text-sky-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="h-9 w-9 rounded-full overflow-hidden border cursor-pointer bg-stone-200 border-stone-200" style={{}}>
<img alt="User" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98937415-1c21-42a8-9023-7f0ea1520120_320w.jpg"/>
</div>
</div>
</div>
</div>
</nav>

<div className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-4 pl-6">
<div className="flex items-center gap-2 text-base text-stone-500 mb-6" style={{}}>
<a className="hover:text-orange-900" href="#" style={{}}>Cricket</a>
<span className="text-stone-300" style={{}}>/</span>
<a className="hover:text-orange-900" href="#" style={{}}>English Willow</a>
<span className="text-stone-300" style={{}}>/</span>
<span className="text-orange-900" style={{}}>Pro Series</span>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-12 gap-y-12">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-zoom-in border bg-stone-50 border-stone-100" style={{}}>
<img alt="Stryker Pro Bat" className="group-hover:scale-105 transition-transform duration-500 ease-out bg-center mix-blend-normal w-full h-full object-contain text-stone-950" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51a9b48c-b550-48fa-a4a4-d67fcc7f6f28_1600w.png" style={{}}/>
<div className="absolute top-4 left-4">
<span className="backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider border bg-white/90 border-stone-200 text-orange-900" style={{}}>Best Seller</span>
</div>
</div>

<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-xl border-2 overflow-hidden p-2 bg-stone-50 border-orange-900" style={{}}>
<img className="mix-blend-multiply w-full h-full object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d7464b9-1764-48a8-b0e8-45e3f5e77649_320w.webp" style={{maskImage: 'linear-gradient(230deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(230deg, transparent, black 0%, black 100%, transparent)'}}/>
</button>
<button className="aspect-square rounded-xl border overflow-hidden p-2 transition-colors bg-stone-50 border-stone-100 hover:border-stone-300" style={{}}>
<img className="opacity-80 mix-blend-multiply w-full h-full object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/932609f5-87b1-4670-9798-d168dbac55e2_320w.webp" style={{}}/>
</button>
<button className="aspect-square rounded-xl border overflow-hidden p-2 transition-colors bg-stone-50 border-stone-100 hover:border-stone-300" style={{}}>
<img className="opacity-80 mix-blend-multiply w-full h-full object-contain scale-150" src="https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</button>
<button className="aspect-square rounded-xl border overflow-hidden flex items-center justify-center text-stone-500 transition-all bg-stone-50 border-stone-100 hover:bg-stone-100 hover:text-orange-900" style={{}}>
<span className="text-sm font-medium">+4 more</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-5 h-5 text-sky-900" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-base font-medium text-orange-900" style={{}}>Stryker Elite</span>
</div>
<span className="text-sm font-mono text-stone-400" style={{}}>STR-EW-24</span>
</div>
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-orange-900" style={{}}>Willow Blade Master</h1>
<div className="flex items-center gap-4 mb-8">
<div className="flex text-red-500 gap-0.5" style={{}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<a className="text-base text-stone-500 underline transition-colors decoration-stone-300 hover:text-orange-900" href="#reviews" style={{}}>42 reviews</a>
</div>
<div className="text-4xl font-medium mb-8 text-orange-900" style={{}}>$349.00</div>

<div className="space-y-8 mb-10">

<div className="">
<div className="flex justify-between mb-3">
<span className="text-base font-medium text-orange-900" style={{}}>Grip Color</span>
<span className="text-base text-stone-500" style={{}}>Electric Blue</span>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full border shadow-sm hover:scale-110 transition-transform relative bg-white border-stone-200" style={{}}>
<span className="absolute inset-0.5 rounded-full bg-stone-100" style={{}}></span>
</button>
<button className="w-10 h-10 rounded-full border shadow-sm hover:scale-110 transition-transform relative ring-2 ring-offset-2 bg-white border-stone-200 ring-orange-900" style={{}}>
<span className="absolute inset-0.5 rounded-full bg-red-500" style={{}}></span>
</button>
<button className="w-10 h-10 rounded-full border shadow-sm hover:scale-110 transition-transform relative bg-white border-stone-200" style={{}}>
<span className="absolute inset-0.5 rounded-full bg-red-500" style={{}}></span>
</button>
<button className="w-10 h-10 rounded-full border shadow-sm hover:scale-110 transition-transform relative bg-white border-stone-200" style={{}}>
<span className="absolute inset-0.5 rounded-full bg-orange-500" style={{}}></span>
</button>
</div>
</div>

<div className="">
<div className="flex justify-between mb-3">
<span className="text-base font-medium text-orange-900" style={{}}>Weight (lbs)</span>
<a className="text-base underline text-stone-400 hover:text-orange-900" href="#" style={{}}>Size guide</a>
</div>
<div className="flex flex-wrap gap-3">
<button className="px-5 py-3 rounded-lg border text-base font-medium transition-all min-w-[4rem] border-stone-200 bg-white text-orange-900 hover:border-orange-900" style={{}}>2.7</button>
<button className="px-5 py-3 rounded-lg border text-base font-medium shadow-lg min-w-[4rem] text-white border-orange-900 bg-orange-900 shadow-orange-900/20" style={{}}>2.8</button>
<button className="px-5 py-3 rounded-lg border text-base font-medium transition-all min-w-[4rem] border-stone-200 bg-white text-orange-900 hover:border-orange-900" style={{}}>2.9</button>
<button className="px-5 py-3 rounded-lg border text-base font-medium cursor-not-allowed min-w-[4rem] border-stone-200 text-stone-300 bg-stone-50" style={{}}>2.10</button>
</div>
</div>
</div>

<div className="flex gap-4 mb-6">
<button className="flex-1 text-lg font-medium py-4 px-8 rounded-xl active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3 text-white bg-orange-900 hover:bg-orange-800 shadow-orange-900/10" style={{}}>
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                        Add to cart
                    </button>
<button className="aspect-square rounded-xl border flex items-center justify-center transition-all border-stone-200 hover:bg-stone-50 text-orange-900 hover:border-orange-900" style={{}}>
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex items-center gap-3 text-base text-stone-500" style={{}}>
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="">Free express delivery on orders over $150</span>
</div>
</div>
</div>

<div className="mt-24 border-b mb-12 border-stone-100" style={{}}>
<div className="flex items-center gap-8 overflow-x-auto">
<button className="text-xl font-medium pb-4 transition-colors text-stone-400 hover:text-orange-900" style={{}}>Details</button>
<button className="text-xl font-medium pb-4 border-b-2 text-orange-900 border-orange-900" style={{}}>Reviews</button>
<button className="text-xl font-medium pb-4 transition-colors text-stone-400 hover:text-orange-900" style={{}}>Discussion</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24" id="reviews">

<div className="lg:col-span-7 space-y-10">
<div className="flex justify-between items-center">
<div className="relative inline-block text-left">
<button className="inline-flex justify-center w-full rounded-lg border px-4 py-2 text-base font-medium focus:outline-none flex items-center gap-2 border-stone-200 bg-white text-stone-700 hover:bg-stone-50" style={{}}>
                            Newest
                            <svg className="lucide lucide-chevron-down w-4 h-4 text-blue-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="flex gap-4">
<img alt="Reviewer" className="w-12 h-12 rounded-full object-cover border border-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-semibold text-orange-900" style={{}}>James Anderson</h4>
<span className="text-sm text-stone-400" style={{}}>Yesterday</span>
</div>
<div className="flex text-red-500 gap-0.5 mb-3" style={{}}>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-orange-800 mb-4">Exceptional balance on this bat. The pickup feels surprisingly light for a 2.9lb. The ping off the middle is incredible. Highly recommended for front foot players.</p>
<div className="flex items-center gap-6 text-sm text-stone-500 font-medium" style={{}}>
<button className="flex items-center gap-2 hover:text-orange-900" style={{}}>Reply</button>
<button className="flex items-center gap-2 hover:text-orange-900" style={{}}><svg className="lucide lucide-thumbs-up w-4 h-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg> 42</button>
<button className="flex items-center gap-2 hover:text-orange-900" style={{}}><svg className="lucide lucide-thumbs-down w-4 h-4" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path className="" d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg> 0</button>
</div>
</div>
</div>
<div className="w-full h-px bg-stone-100" style={{}}></div>

<div className="flex gap-4">
<img alt="Reviewer" className="w-12 h-12 rounded-full object-cover border border-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-semibold text-orange-900" style={{}}>Sarah Taylor</h4>
<span className="text-sm text-stone-400" style={{}}>2 days ago</span>
</div>
<div className="flex text-red-500 gap-0.5 mb-3" style={{}}>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-blue-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-orange-800 mb-4">Great finish and grains. Needed a bit more knocking in than expected, but performs well now.</p>
<div className="flex items-center gap-6 text-sm text-stone-500 font-medium" style={{}}>
<button className="flex items-center gap-2 hover:text-orange-900" style={{}}>Reply</button>
<button className="flex items-center gap-2 hover:text-orange-900" style={{}}><svg className="lucide lucide-thumbs-up w-4 h-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg> 12</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-12">

<div className="">
<div className="flex items-baseline justify-between mb-6">
<div className="flex text-red-500 gap-1" style={{}}>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-5 h-5 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-3xl font-medium text-orange-900" style={{}}>4.8</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-stone-500 w-3" style={{}}>5</span>
<div className="flex-1 h-2 rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full w-[85%] rounded-full bg-red-400" style={{}}></div>
</div>
<span className="text-sm font-medium w-6 text-right text-orange-900" style={{}}>28</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-stone-500 w-3" style={{}}>4</span>
<div className="flex-1 h-2 rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full w-[30%] rounded-full bg-red-400" style={{}}></div>
</div>
<span className="text-sm font-medium w-6 text-right text-orange-900" style={{}}>9</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-stone-500 w-3" style={{}}>3</span>
<div className="flex-1 h-2 rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full w-[10%] rounded-full bg-red-400" style={{}}></div>
</div>
<span className="text-sm font-medium w-6 text-right text-orange-900" style={{}}>4</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-stone-500 w-3" style={{}}>2</span>
<div className="flex-1 h-2 rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full w-[2%] rounded-full bg-stone-200" style={{}}></div>
</div>
<span className="text-sm font-medium w-6 text-right text-orange-900" style={{}}>1</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-stone-500 w-3" style={{}}>1</span>
<div className="flex-1 h-2 rounded-full overflow-hidden bg-stone-100" style={{}}>
<div className="h-full w-[0%] rounded-full bg-stone-200" style={{}}></div>
</div>
<span className="text-sm font-medium w-6 text-right text-orange-900" style={{}}>0</span>
</div>
</div>
</div>

<div className="bg-[#EAE8DF] p-8 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl font-medium mb-2 leading-tight text-orange-900" style={{}}>Pro Accessories Bundle Deal</h3>
<p className="text-lg mb-6 text-orange-700" style={{}}>Get 25% off gloves &amp; pads with any bat purchase.</p>
<div className="flex gap-2 mb-8">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-orange-900" style={{}}>GM</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-orange-900" style={{}}>KOOK</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-green-600 text-white" style={{}}>NB</div>
</div>
<button className="px-6 py-2.5 bg-transparent border text-base font-medium rounded-lg transition-all hover:text-white border-orange-900 text-orange-900 hover:bg-orange-900" style={{}}>
                            View bundles
                        </button>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl bg-white/20"></div>
</div>
</div>
</div>

<div className="mt-24">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-medium tracking-tight text-orange-900" style={{}}>You might also like</h3>
<div className="flex gap-2">
<button className="p-2 border rounded-full transition-colors border-stone-200 hover:border-orange-900" style={{}}><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-2 border rounded-full transition-colors border-stone-200 hover:border-orange-900" style={{}}><svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="rounded-xl overflow-hidden aspect-square mb-4 relative bg-stone-50" style={{}}>
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute top-3 right-3 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<svg className="lucide lucide-heart w-4 h-4 text-sky-900" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="text-center">
<h4 className="text-base font-medium mb-1 text-orange-900" style={{}}>Ghost Pro 5.0</h4>
<p className="text-base text-stone-500" style={{}}>$289.00</p>
</div>
</div>

<div className="group">
<div className="rounded-xl overflow-hidden aspect-square mb-4 relative bg-stone-50" style={{}}>
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<span className="absolute top-3 left-3 bg-green-500 text-[10px] font-bold px-2 py-1 rounded text-white" style={{}}>SALE</span>
</div>
<div className="text-center">
<h4 className="text-base font-medium mb-1 text-orange-900" style={{}}>Shadow Training Bat</h4>
<div className="flex items-center justify-center gap-2">
<p className="text-base text-green-500 font-medium" style={{}}>$89.00</p>
<p className="text-sm line-through text-stone-400" style={{}}>$120.00</p>
</div>
</div>
</div>

<div className="group">
<div className="rounded-xl overflow-hidden aspect-square mb-4 relative bg-stone-50" style={{}}>
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587385789097-0197a7fbd179?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="text-center">
<h4 className="text-base font-medium mb-1 text-orange-900" style={{}}>Elite Batting Gloves</h4>
<p className="text-base text-stone-500" style={{}}>$55.00</p>
</div>
</div>

<div className="group">
<div className="rounded-xl overflow-hidden aspect-square mb-4 relative bg-stone-50" style={{}}>
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-center">
<h4 className="text-base font-medium mb-1 text-orange-900" style={{}}>Classic Leather Ball</h4>
<p className="text-base text-stone-500" style={{}}>$45.00</p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t pt-16 pb-12 bg-stone-50 border-stone-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="block text-2xl font-semibold tracking-tight mb-6" href="#">STRYKER<span className="text-stone-400" style={{}}>.</span></a>
<p className="text-lg text-stone-500 mb-6 max-w-sm leading-relaxed" style={{}}>Crafting the finest English Willow bats for the modern cricketer. Designed for performance, balanced for power.</p>
<div className="flex gap-4">
<a className="transition-colors text-stone-400 hover:text-orange-900" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="transition-colors text-stone-400 hover:text-orange-900" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-stone-400 hover:text-orange-900" href="#" style={{}}><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div>
<h5 className="text-base font-semibold mb-4 text-orange-900" style={{}}>Company</h5>
<ul className="space-y-3 text-base text-stone-500" style={{}}>
<li><a className="hover:text-orange-900" href="#" style={{}}>About Us</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>Stores</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>Contacts</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>News</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-4 text-orange-900" style={{}}>Support</h5>
<ul className="space-y-3 text-base text-stone-500" style={{}}>
<li><a className="hover:text-orange-900" href="#" style={{}}>Help Center</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>Delivery</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>Returns &amp; Refund</a></li>
<li><a className="hover:text-orange-900" href="#" style={{}}>Track Order</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-4 text-orange-900" style={{}}>Contacts</h5>
<ul className="space-y-3 text-base text-stone-500" style={{}}>
<li>+44 204 578-10-92</li>
<li>hello@stryker.com</li>
<li className="flex gap-2 pt-2">
<svg className="lucide lucide-credit-card w-8 h-6 text-blue-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<svg className="lucide lucide-lock w-4 h-4 text-blue-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm border-stone-200 text-stone-400" style={{}}>
<p>© 2024 Stryker Cricket. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-orange-900" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-orange-900" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
