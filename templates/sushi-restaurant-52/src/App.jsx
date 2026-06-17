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
      

<header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
<div className="container mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:fish" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6s6.06 2.54 7 6c-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86m-9 4.6C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5c-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m0 11.86l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></g></svg>
<span className="text-lg font-medium tracking-tighter uppercase text-[var(--foreground)]">SushiDeli</span>
</div>
<nav className="hidden md:flex gap-6 text-sm font-medium text-[var(--muted-foreground)]">
<a className="hover:text-[var(--foreground)] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[var(--foreground)] transition-colors" href="#">Delivery Info</a>
<a className="hover:text-[var(--foreground)] transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end text-xs text-[var(--muted-foreground)] leading-tight">
<span className="font-medium text-[var(--foreground)]">0320 - 123 456</span>
<span>Agoraweg 2, Lelystad</span>
</div>
<button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80 h-9 px-4 py-2 rounded-[var(--radius)] text-sm font-medium transition-colors flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:user" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="hidden sm:inline">Sign In</span>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="md:py-20 lg:py-24 overflow-hidden border-[var(--border)] bg-white border-b pt-12 pb-12 relative">
<div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start gap-6 max-w-2xl">
<div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--secondary-foreground)]">
<span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse"></span>
                            Open for Delivery &amp; Takeaway
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--foreground)] leading-[1.1]">
                            Order Fresh Sushi <br/> in <span className="text-[var(--primary)]">Lelystad</span>
</h1>
<p className="text-lg text-[var(--muted-foreground)] max-w-md leading-relaxed">
                            Hand-rolled daily using premium ingredients. From our kitchen to your door in 30 minutes.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<a className="inline-flex h-12 items-center justify-center rounded-[var(--radius)] bg-[var(--primary)] px-8 text-sm font-medium text-[var(--primary-foreground)] shadow transition-colors hover:bg-[var(--primary)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--ring)]" href="#menu">
                                Order Sushi
                                <svg aria-hidden="true" data-icon="lucide:arrow-down" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="flex items-center gap-4 px-4 h-12 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--muted-foreground)]">
<svg aria-hidden="true" data-icon="lucide:bike" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3l4-3l2 3h2"></path></g></svg>
<span>Delivery ~30 min</span>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] mt-2">
<div className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-[var(--foreground)]">4.8/5</span> on Thuisbezorgd
                            </div>
<span>•</span>
<div>Agoraweg 2, 8224 BX Lelystad</div>
</div>
</div>
<div className="relative lg:h-[500px] w-full hidden lg:block rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow)] bg-[var(--muted)]">

<div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
<img alt="Fresh Sushi Platter" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 left-4 backdrop-blur px-4 py-2 rounded-[var(--radius)] text-xs font-medium border border-[var(--border)] shadow-sm bg-white/90">
                            Featured: Salmon Lover Box
                        </div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="menu">
<div className="container mx-auto max-w-7xl px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

<aside className="md:col-span-3 lg:col-span-2 hidden md:block">
<nav className="sticky top-24 space-y-1">
<p className="px-3 pb-2 text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Categories</p>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium bg-[var(--secondary)] text-[var(--primary)]" href="#boxes">
<span>Sushi Boxes</span>
<svg aria-hidden="true" data-icon="lucide:package" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
</a>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors" href="#nigiri">
<span>Nigiri</span>
</a>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors" href="#hosomaki">
<span>Hosomaki</span>
</a>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors" href="#futomaki">
<span>Futomaki</span>
</a>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors" href="#fried">
<span>Fried Rolls</span>
</a>
<a className="group flex items-center justify-between rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors" href="#poke">
<span>Pokébowls</span>
</a>
</nav>
</aside>

<div className="md:hidden col-span-1 sticky top-[65px] z-40 bg-[var(--background)]/95 backdrop-blur py-2 border-b border-[var(--border)] -mx-4 px-4 overflow-x-auto hide-scrollbar flex gap-2">
<a className="flex-none px-4 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium" href="#boxes">Boxes</a>
<a className="flex-none px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground)] text-xs font-medium bg-white" href="#nigiri">Nigiri</a>
<a className="flex-none px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground)] text-xs font-medium bg-white" href="#hosomaki">Hosomaki</a>
<a className="flex-none px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground)] text-xs font-medium bg-white" href="#poke">Poké</a>
</div>

<div className="col-span-1 md:col-span-5 lg:col-span-7 space-y-12">

<div className="scroll-mt-28" id="boxes">
<h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-2">
                                Sushi Boxes
                                <span className="h-px flex-1 bg-[var(--border)] ml-4"></span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="group relative flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[var(--primary)]/50 transition-colors shadow-[var(--shadow-sm)]">
<div className="mb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-[var(--card-foreground)]">Salmon Lover Box</h3>
<span className="text-sm font-medium text-[var(--foreground)]">€18.50</span>
</div>
<p className="text-xs text-[var(--muted-foreground)] line-clamp-2">4x Sake Nigiri, 4x Sake Maki, 4x Salmon Avocado Inside Out, Wakame Salad.</p>
</div>
<button className="w-full mt-auto bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] h-8 rounded-[var(--radius)] text-xs font-medium transition-colors flex items-center justify-center gap-2">
<svg aria-hidden="true" data-icon="lucide:plus" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Add
                                    </button>
</div>

<div className="group relative flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[var(--primary)]/50 transition-colors shadow-[var(--shadow-sm)]">
<div className="mb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-[var(--card-foreground)]">Family Mix (32pcs)</h3>
<span className="text-sm font-medium text-[var(--foreground)]">€34.00</span>
</div>
<p className="text-xs text-[var(--muted-foreground)] line-clamp-2">Chef's selection of Nigiri, Maki, and California Rolls suitable for 3-4 people.</p>
</div>
<button className="w-full mt-auto bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] h-8 rounded-[var(--radius)] text-xs font-medium transition-colors flex items-center justify-center gap-2">
<svg aria-hidden="true" data-icon="lucide:plus" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Add
                                    </button>
</div>
</div>
</div>

<div className="scroll-mt-28" id="nigiri">
<h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-2">
                                Nigiri <span className="text-sm font-normal text-[var(--muted-foreground)] mt-1">(2 pcs)</span>
<span className="h-px flex-1 bg-[var(--border)] ml-4"></span>
</h2>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/30 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-sm text-[var(--foreground)]">Sake Nigiri</span>
<span className="text-xs text-[var(--muted-foreground)]">Fresh Salmon</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium">€3.80</span>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--primary)] transition-colors hover:text-white">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/30 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-sm text-[var(--foreground)]">Maguro Nigiri</span>
<span className="text-xs text-[var(--muted-foreground)]">Yellowfin Tuna</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium">€4.20</span>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--primary)] transition-colors hover:text-white">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/30 transition-colors">
<div className="flex flex-col">
<span className="font-medium text-sm text-[var(--foreground)]">Ebi Nigiri</span>
<span className="text-xs text-[var(--muted-foreground)]">Boiled Shrimp</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium">€3.50</span>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--primary)] transition-colors hover:text-white">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="scroll-mt-28" id="poke">
<h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-2">
                                Pokébowls
                                <span className="h-px flex-1 bg-[var(--border)] ml-4"></span>
</h2>
<div className="grid grid-cols-1 gap-4">
<div className="flex flex-col sm:flex-row gap-4 p-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)]">
<div className="h-24 w-24 flex-shrink-0 bg-[var(--muted)] rounded-[var(--radius)] overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-medium text-[var(--foreground)]">Spicy Tuna Bowl</h3>
<span className="text-sm font-medium">€12.50</span>
</div>
<p className="text-xs text-[var(--muted-foreground)] mt-1 mb-3">Sushi rice, fresh tuna, edamame, avocado, cucumber, spicy mayo, sesame seeds.</p>
<button className="text-xs font-medium text-[var(--primary)] hover:underline flex items-center gap-1">
                                            Customize Ingredients <svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex items-end justify-end sm:justify-start">
<button className="h-8 px-4 rounded-[var(--radius)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--primary)] text-xs font-medium transition-colors hover:text-white">
                                            Add to Order
                                        </button>
</div>
</div>
</div>
</div>
</div>

<aside className="md:col-span-4 lg:col-span-3">
<div className="sticky top-24 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] overflow-hidden">
<div className="p-4 border-b border-[var(--border)] bg-[var(--muted)]/30">
<h3 className="font-medium text-[var(--foreground)] flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
                                    Your Basket
                                </h3>
</div>

<div className="hidden p-8 text-center text-[var(--muted-foreground)]">
<p className="text-sm">Your basket is empty</p>
</div>

<div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">

<div className="flex justify-between items-start gap-2">
<div className="flex items-center gap-2">
<div className="flex items-center rounded-[var(--radius-sm)] border border-[var(--border)]">
<button className="p-1 hover:text-[var(--primary)] transition-colors"><svg aria-hidden="true" data-icon="lucide:minus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<span className="text-xs font-medium w-4 text-center">1</span>
<button className="p-1 hover:text-[var(--primary)] transition-colors"><svg aria-hidden="true" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
<div className="text-sm text-[var(--foreground)]">
<div className="font-medium">Salmon Box</div>
<div className="text-[10px] text-[var(--muted-foreground)]">No Wasabi</div>
</div>
</div>
<span className="text-sm font-medium">€18.50</span>
</div>

<div className="flex justify-between items-start gap-2">
<div className="flex items-center gap-2">
<div className="flex items-center rounded-[var(--radius-sm)] border border-[var(--border)]">
<button className="p-1 hover:text-[var(--primary)] transition-colors"><svg aria-hidden="true" data-icon="lucide:minus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<span className="text-xs font-medium w-4 text-center">2</span>
<button className="p-1 hover:text-[var(--primary)] transition-colors"><svg aria-hidden="true" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
<div className="text-sm text-[var(--foreground)]">
<div className="font-medium">Sake Nigiri</div>
</div>
</div>
<span className="text-sm font-medium">€7.60</span>
</div>
</div>

<div className="p-4 bg-[var(--muted)]/20 border-t border-[var(--border)] space-y-2">
<div className="flex justify-between text-xs text-[var(--muted-foreground)]">
<span>Subtotal</span>
<span>€26.10</span>
</div>
<div className="flex justify-between text-xs text-[var(--muted-foreground)]">
<span>Delivery</span>
<span>€2.50</span>
</div>
<div className="flex justify-between text-sm font-medium text-[var(--foreground)] pt-2 border-t border-[var(--border)]/50">
<span>Total</span>
<span>€28.60</span>
</div>
</div>

<div className="p-4 pt-0 bg-[var(--muted)]/20">
<button className="w-full flex items-center justify-between bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] h-11 px-4 rounded-[var(--radius)] font-medium text-sm shadow transition-all hover:translate-y-[-1px]">
<span>Checkout</span>
<span className="px-2 py-0.5 rounded text-xs bg-black/10">€28.60</span>
</button>
<div className="mt-3 flex justify-center gap-2">
<span className="iconify text-[var(--muted-foreground)] opacity-50" data-icon="logos:ideal" data-width="20"></span>
<svg aria-hidden="true" data-icon="logos:mastercard" data-width="20" height="15.55" role="img" viewbox="0 0 256 199" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634s-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976s4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"></path><path d="M93.298 16.903h69.15v124.251h-69.15z" fill="#FF5F00"></path><path d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029s35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125" fill="#EB001B"></path><path d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125s-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029" fill="#F79E1B"></path></svg>
<svg aria-hidden="true" data-icon="logos:visa" data-width="20" height="6.49" role="img" viewbox="0 0 256 83" width="20" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="IconifyId19b64a356474838450" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></lineargradient></defs><path d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" fill="url(#IconifyId19b64a356474838450)" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="border-t border-[var(--border)] bg-[var(--card)] py-12 mt-auto">
<div className="container mx-auto max-w-7xl px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" data-icon="lucide:fish" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6s6.06 2.54 7 6c-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86m-9 4.6C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5c-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m0 11.86l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></g></svg>
<span className="font-medium tracking-tight text-[var(--foreground)]">SUSHIDELI</span>
</div>
<p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        Authentic Japanese flavors delivered to your doorstep in Lelystad. Fresh ingredients, prepared daily.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-3">Service</h4>
<ul className="space-y-2 text-xs text-[var(--muted-foreground)]">
<li><a className="hover:underline" href="#">Delivery Area</a></li>
<li><a className="hover:underline" href="#">Track Order</a></li>
<li><a className="hover:underline" href="#">Allergen Info</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-3">Legal</h4>
<ul className="space-y-2 text-xs text-[var(--muted-foreground)]">
<li><a className="hover:underline" href="#">Privacy Policy</a></li>
<li><a className="hover:underline" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-3">Contact</h4>
<ul className="space-y-2 text-xs text-[var(--muted-foreground)]">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:phone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 0320 - 123 456</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:map-pin" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Agoraweg 2, Lelystad</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[10px] text-[var(--muted-foreground)]">
                © 2024 SushiDeli Lelystad. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
