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

        // Gallery Interaction Logic
        (function() {
            const container = document.getElementById('gallery-container');
            const cards = container.querySelectorAll('.card-item');
            let activeCard = null;
            
            cards.forEach((card) => {
                card.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    if (activeCard === card) {
                        // Clicked same card -> Reset
                        resetCards();
                        return;
                    }
                    
                    // Reset others
                    cards.forEach((c) => {
                        c.style.filter = 'blur(4px) grayscale(40%)';
                        c.style.opacity = '0.5';
                        c.style.transform = 'scale(0.95)';
                        c.style.zIndex = '1';
                        // Keep relative position
                    });
                    
                    // Focus clicked card
                    card.style.filter = 'blur(0px) grayscale(0%)';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1.15) translateY(-10px) rotate(0deg)';
                    card.style.zIndex = '50';
                    card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                    
                    activeCard = card;
                });
            });
            
            // Click outside to reset
            document.addEventListener('click', function(e) {
                if (activeCard && !container.contains(e.target)) {
                    resetCards();
                }
            });
            
            function resetCards() {
                cards.forEach((c) => {
                    c.style.filter = '';
                    c.style.opacity = '';
                    c.style.transform = '';
                    c.style.zIndex = '';
                    c.style.boxShadow = '';
                });
                activeCard = null;
            }
        })();
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-noise"></div>
<div className="fixed inset-0 w-full h-full opacity-[0.4] pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<section className="relative min-h-screen flex flex-col pt-6 pb-20 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] right-[20%] w-[60%] h-[60%] bg-orange-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-stone-200/60 blur-[100px] rounded-full mix-blend-multiply"></div>
</div>
<div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 relative z-10">

<nav className="flex justify-between items-center py-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="flex bg-gradient-to-br from-orange-500 to-amber-600 w-8 h-8 rounded-full items-center justify-center shadow-md">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-xl font-serif font-semibold tracking-tight text-stone-900">
                        ReadFlow
                    </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium tracking-widest uppercase hover:text-orange-600 transition-colors text-stone-500" href="#features">Features</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-orange-600 transition-colors text-stone-500" href="#how-it-works">Methodology</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-orange-600 transition-colors text-stone-500" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-stone-900 transition-colors text-stone-500 hidden sm:block" href="#">Log In</a>
<button className="group relative px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5" type="button">
<span className="relative z-10">Get Access</span>
</button>
</div>
</nav>

<div className="flex-1 flex flex-col justify-center pt-8 sm:pt-24 pb-12">

<div className="mx-auto max-w-4xl text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
<h1 className="text-5xl sm:text-7xl lg:text-7xl leading-[0.95] tracking-tighter text-stone-900 font-serif font-medium mb-8">
                        Curate your mental
                        library.
                    </h1>
<p className="mx-auto max-w-xl text-lg sm:text-xl text-stone-500 font-light leading-relaxed">
                        Transform scattered reading into structured knowledge. Visualize your progress and build a legacy of ideas.
                    </p>
</div>

<div className="mt-16 sm:mt-24 max-w-5xl mx-auto relative w-full animate-fade-in" style={{animationDelay: '0.4s'}}>

<div className="-top-8 left-[5%] sm:left-[10%] z-40 absolute animate-[bounce_4s_infinite]">
<div className="relative group cursor-pointer hover:-translate-y-1 transition-transform">
<span className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white border border-stone-200 rounded-full py-1.5 px-3 shadow-beautiful hover:shadow-lg transition-shadow">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                Fiction
                            </span>
</div>
</div>

<div className="-top-12 right-[5%] sm:right-[15%] z-40 absolute animate-[bounce_5s_infinite]">
<div className="relative group cursor-pointer hover:-translate-y-1 transition-transform">
<span className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white border border-stone-200 rounded-full py-1.5 px-3 shadow-beautiful hover:shadow-lg transition-shadow">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                Philosophy
                            </span>
</div>
</div>

<div className="flex justify-center w-full px-4" id="gallery-container">
<div className="grid grid-cols-6 gap-3 sm:gap-6 w-full max-w-4xl" id="book-grid">

<div className="card-item col-span-2 sm:col-span-1 transform -rotate-6 translate-y-4 cursor-pointer group" data-index="0">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div> 
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 transform rotate-3 translate-y-8 cursor-pointer group" data-index="1">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 transform -rotate-2 -translate-y-2 cursor-pointer group" data-index="2">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 transform rotate-6 translate-y-3 cursor-pointer group" data-index="3">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 transform -rotate-3 translate-y-6 cursor-pointer group" data-index="4">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 transform rotate-2 -translate-y-1 cursor-pointer group" data-index="5">
<div className="aspect-[2/3] relative rounded-r-md rounded-l-sm bg-white shadow-book overflow-hidden border-l-2 border-stone-100 ring-1 ring-black/5 group-hover:ring-orange-500/30 transition-shadow">
<img alt="Book Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629196914168-3a9644388fb3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
<button className="group relative px-8 py-3.5 bg-stone-900 text-white rounded-full text-base font-medium overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-800 to-stone-900"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-2">
                            Start Tracking
                            <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-stone-600 border border-stone-200 text-base font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
                        View Examples
                        <svg className="opacity-60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>
</section>
<main className="z-10 relative">

<section className="relative z-40 py-24 px-6 border-t border-stone-200/60 bg-white/50 backdrop-blur-sm">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

<div className="relative bg-white p-8 shadow-beautiful rotate-[-1deg] hover:rotate-0 transition-transform duration-300 min-h-[220px] flex flex-col justify-center border-t-4 border-orange-200">
<div className="mb-4 text-orange-500">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">The Collector's Trap</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            "You buy books with enthusiasm but struggle to actually finish them, leaving shelves full of unread potential."
                        </p>
</div>

<div className="relative bg-white p-8 shadow-beautiful rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 min-h-[220px] flex flex-col justify-center border-t-4 border-stone-300 md:-mt-6">
<div className="mb-4 text-orange-500">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Fleeting Insights</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            "Great ideas slip away because you have nowhere to capture them. Your margins are messy and notebooks get lost."
                        </p>
</div>

<div className="relative bg-white p-8 shadow-beautiful rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 min-h-[220px] flex flex-col justify-center border-t-4 border-orange-200">
<div className="mb-4 text-orange-500">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Inconsistent Habit</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            "Reading feels sporadic despite your best intentions. You lose momentum and forget where you left off."
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/50 relative border-t border-stone-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-20">
<span className="text-orange-600 font-mono text-xs uppercase tracking-widest mb-2 block">The Toolkit</span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight">Everything you need to read deeper.</h2>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="flex-1 order-2 md:order-1 relative">

<div className="relative bg-stone-50 p-6 rounded shadow-beautiful border border-stone-100 rotate-[-1deg] max-w-sm mx-auto">
<div className="absolute -top-3 left-10 w-16 h-4 bg-orange-300/30 -rotate-2"></div>
<div className="space-y-4">
<div className="flex gap-4 items-center p-3 bg-white rounded border border-stone-100 shadow-sm">
<div className="w-10 h-14 bg-stone-800 rounded-sm"></div>
<div className="flex-1">
<div className="h-2 w-20 bg-stone-200 rounded mb-2"></div>
<div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-[75%] h-full bg-green-500"></div>
</div>
</div>
</div>
<div className="flex gap-4 items-center p-3 bg-white rounded border border-stone-100 shadow-sm opacity-60">
<div className="w-10 h-14 bg-orange-100 rounded-sm"></div>
<div className="flex-1">
<div className="h-2 w-16 bg-stone-200 rounded mb-2"></div>
<div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-[30%] h-full bg-orange-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2 text-left">
<h3 className="text-2xl font-serif text-stone-900 mb-4">Never Lose Your Place</h3>
<p className="text-stone-600 leading-relaxed mb-6 font-light">
                                Visual progress tracking across your entire library. See exactly where you are in each book and how far you've come.
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-stone-600">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Beautiful visual library
                                </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Stay motivated with % completion
                                </li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="flex-1 text-left">
<h3 className="text-2xl font-serif text-stone-900 mb-4">Capture Lightning in a Bottle</h3>
<p className="text-stone-600 leading-relaxed mb-6 font-light">
                                Create timestamped notes and reflections as you read. Tag insights by theme, connect ideas across books, and build your personal knowledge base.
                            </p>
<p className="text-sm font-medium text-orange-600">Transform reading from consumption to creation.</p>
</div>
<div className="flex-1 relative">

<div className="relative bg-white p-6 rounded-sm shadow-beautiful border border-stone-200 rotate-[1deg] max-w-sm mx-auto">
<div className="absolute -top-3 right-10 w-24 h-6 bg-orange-200/50 backdrop-blur-sm -rotate-1"></div>
<div className="font-serif text-lg italic text-stone-800 border-l-2 border-orange-500 pl-4 mb-4">
                                    "The only way to win is to learn faster than anyone else."
                                </div>
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 bg-stone-100 text-[10px] uppercase tracking-wide text-stone-500 rounded">#Strategy</span>
<span className="px-2 py-1 bg-stone-100 text-[10px] uppercase tracking-wide text-stone-500 rounded">#Growth</span>
</div>
<div className="text-xs text-stone-400 font-mono text-right">Page 142 • The Lean Startup</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 relative" id="how-it-works">

<div className="absolute top-0 left-0 w-full h-8 bg-white z-10" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 2% 50%, 4% 100%, 6% 50%, 8% 100%, 10% 50%, 12% 100%, 14% 50%, 16% 100%, 18% 50%, 20% 100%, 22% 50%, 24% 100%, 26% 50%, 28% 100%, 30% 50%, 32% 100%, 34% 50%, 36% 100%, 38% 50%, 40% 100%, 42% 50%, 44% 100%, 46% 50%, 48% 100%, 50% 50%, 52% 100%, 54% 50%, 56% 100%, 58% 50%, 60% 100%, 62% 50%, 64% 100%, 66% 50%, 68% 100%, 70% 50%, 72% 100%, 74% 50%, 76% 100%, 78% 50%, 80% 100%, 82% 50%, 84% 100%, 86% 50%, 88% 100%, 90% 50%, 92% 100%, 94% 50%, 96% 100%, 98% 50%)', transform: 'rotate(180deg)', marginTop: '-1px'}}></div>
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-serif text-center mb-16 text-stone-900">How It Works</h2>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 border-l border-dashed border-stone-400"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h4 className="text-lg font-medium text-stone-900">Add to Library</h4>
<p className="text-sm text-stone-600 mt-1">Import your physical and digital books.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10 shadow-sm"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-2 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10 shadow-sm"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-2">
<h4 className="text-lg font-medium text-stone-900">Start Session</h4>
<p className="text-sm text-stone-600 mt-1">Set a goal and start the focus timer.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h4 className="text-lg font-medium text-stone-900">Capture Insights</h4>
<p className="text-sm text-stone-600 mt-1">Jot down thoughts as they emerge.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10 shadow-sm"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-2 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10 shadow-sm"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-2">
<h4 className="text-lg font-medium text-stone-900">Review</h4>
<p className="text-sm text-stone-600 mt-1">See your knowledge base grow.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto" id="faq">
<h2 className="text-3xl font-serif text-center mb-12 text-stone-900">Common Questions</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-6 rounded shadow-sm border border-stone-200">
<h4 className="font-medium text-stone-900 mb-2">Is my reading data private?</h4>
<p className="text-sm text-stone-600 leading-relaxed">Absolutely. Your notes and reading history are stored locally on your device by default, with optional encrypted cloud backup.</p>
</div>
<div className="bg-white p-6 rounded shadow-sm border border-stone-200">
<h4 className="font-medium text-stone-900 mb-2">Can I export my notes?</h4>
<p className="text-sm text-stone-600 leading-relaxed">Yes. Export to Markdown, PDF, or directly to Notion and Obsidian to integrate with your second brain.</p>
</div>
<div className="bg-white p-6 rounded shadow-sm border border-stone-200">
<h4 className="font-medium text-stone-900 mb-2">Does it work offline?</h4>
<p className="text-sm text-stone-600 leading-relaxed">ReadFlow is designed to be distraction-free. It works perfectly without an internet connection.</p>
</div>
<div className="bg-white p-6 rounded shadow-sm border border-stone-200">
<h4 className="font-medium text-stone-900 mb-2">How is this different from Goodreads?</h4>
<p className="text-sm text-stone-600 leading-relaxed">Goodreads is for discovery and social. ReadFlow is for the act of reading itself—focusing, tracking, and learning.</p>
</div>
</div>
</section>

<section className="py-20 text-center relative overflow-hidden bg-stone-900">
<div className="absolute inset-0 opacity-10 bg-noise z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to read smarter?</h2>
<p className="text-stone-400 mb-8 font-light text-lg">Join the waitlist and get early access to the future of reading.</p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
<input className="px-4 py-3 rounded bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 w-full" placeholder="Enter your email" type="email"/>
<button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded font-medium transition-colors whitespace-nowrap">Join Waitlist</button>
</form>
</div>
</section>
</main>

<footer className="bg-stone-100 text-stone-500 py-12 text-sm border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-serif font-bold text-stone-900">ReadFlow</span>
<span className="text-xs">© 2025</span>
</div>
<div className="flex gap-6">
<a className="hover:text-orange-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-orange-600 transition-colors" href="#">Terms</a>
<a className="hover:text-orange-600 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
