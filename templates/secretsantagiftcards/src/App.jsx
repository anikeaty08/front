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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">

<div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-rose-500 to-amber-500"></div>
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="relative">
<svg aria-hidden="true" className="iconify text-rose-600 iconify--lucide" data-icon="lucide:gift" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>

<svg aria-hidden="true" className="iconify absolute -top-1.5 -right-1.5 text-emerald-500 iconify--lucide" data-icon="lucide:snowflake" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></path><path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"></path><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"></path></g></svg>
</div>
<span className="uppercase text-sm font-semibold tracking-widest">Razorpay</span>
</div>
<div className="hidden sm:block">
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden text-white bg-[#0B1120] pt-20 relative items-center justify-center">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
<div className="snowflake text-white/20" style={{left: '10%', animationDuration: '10s', fontSize: '10px'}}>❄</div>
<div className="snowflake text-white/30" style={{left: '20%', animationDuration: '12s', animationDelay: '2s', fontSize: '14px'}}>❄</div>
<div className="snowflake text-white/10" style={{left: '30%', animationDuration: '8s', animationDelay: '4s', fontSize: '8px'}}>❄</div>
<div className="snowflake text-white/25" style={{left: '50%', animationDuration: '15s', fontSize: '12px'}}>❄</div>
<div className="snowflake text-white/20" style={{left: '70%', animationDuration: '11s', animationDelay: '1s', fontSize: '10px'}}>❄</div>
<div className="snowflake text-white/15" style={{left: '90%', animationDuration: '9s', animationDelay: '3s', fontSize: '14px'}}>❄</div>
</div>

<div className="blur-[100px] bg-emerald-900/20 w-[500px] h-[500px] rounded-full absolute top-0 right-0"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[100px]"></div>
<div className="content-relative z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-xs font-medium text-rose-200 tracking-wide">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:candy-cane" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6a2 2 0 1 1-3.464-2a2 2 0 1 0-3.464-2ZM17.75 7L15 2.1m-4.1 2.7L13 9m-5.1.7l2 4.4m-5 .6L7 18.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">Campaign Report</span>
</div>
<h1 className="leading-[1.1] bg-clip-text md:text-5xl text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500">Secret Santa Campaign,<br/> Powered by Razorpay Gift Cards</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto ml-auto">A Christmas campaign executed to show how Razorpay powers gift cards as infrastructure.</p>
<div className="pt-8 flex flex-col items-center gap-4 animate-bounce">
<span className="uppercase flex items-center gap-2 text-xs text-emerald-400/80 tracking-widest">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Unwrap the Story
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
<svg className="w-full h-8 fill-slate-50" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
<div className="text-center max-w-3xl mr-auto ml-auto pt-8 pr-6 pl-6 space-y-8">
<div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-amber-50 text-amber-500 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide w-[24px] h-[24px]" data-icon="lucide:star" data-icon-replaced="true" data-width="24" height="24" role="img" strokeWidth="2" style={{color: 'rgb(245, 158, 11)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="md:text-4xl leading-tight text-3xl font-medium text-slate-900 tracking-tight">Sometimes, the strongest stories are shown - not told.</h2>
<div className="w-16 h-0.5 bg-gradient-to-r from-emerald-200 to-rose-200 mx-auto"></div>
<p className="leading-relaxed text-lg font-light text-slate-500">Most brands know Razorpay as a payments platform. This campaign used the spirit of Christmas to quietly show something more - that we power the infrastructure of gifting itself.</p>
<p className="text-lg font-medium text-slate-900">No decks. No Pitches. Just a clear experience.</p>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

<div className="space-y-8">
<div className="space-y-4">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600 border border-rose-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">The "Nice List" Goals</h3>
</div>
<ul className="space-y-3 pl-2 border-l border-slate-200 ml-5">
<li className="pl-4 text-slate-600 text-sm md:text-base flex items-start gap-2">
<span className="text-rose-400 mt-1">•</span> Create market awareness that Razorpay powers gift cards
                            </li>
<li className="pl-4 text-slate-600 text-sm md:text-base flex items-start gap-2">
<span className="text-rose-400 mt-1">•</span> Reposition gift cards as infrastructure, not just a festive perk
                            </li>
</ul>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-700 border border-emerald-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Holiday Bonuses</h3>
</div>
<ul className="space-y-3 pl-2 border-l border-slate-200 ml-5">
<li className="pl-4 text-slate-600 text-sm md:text-base flex items-start gap-2">
<span className="text-emerald-400 mt-1">•</span> Spark organic buzz in the founder &amp; CMO ecosystem
                            </li>
<li className="pl-4 text-slate-600 text-sm md:text-base flex items-start gap-2">
<span className="text-emerald-400 mt-1">•</span> Drive inbound interest via a low-friction lead flow
                            </li>
</ul>
</div>
</div>

<div className="relative h-full min-h-[300px] flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-8">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative text-center space-y-6 z-10">

<div className="flex flex-col items-center justify-center -space-y-6">

<svg aria-hidden="true" className="iconify text-amber-400 animate-pulse mb-2 iconify--lucide" data-icon="lucide:star" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

<div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[40px] border-b-emerald-600 border-r-[30px] border-r-transparent"></div>
<div className="w-0 h-0 border-l-[45px] border-l-transparent border-b-[50px] border-b-emerald-700 border-r-[45px] border-r-transparent z-10"></div>
<div className="w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-emerald-800 border-r-[60px] border-r-transparent z-20"></div>

<div className="w-8 h-8 bg-amber-900 rounded-sm mt-0 z-0"></div>
</div>
<div className="space-y-2 mt-4">
<h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">The Strategy</h4>
<p className="text-xl font-medium text-slate-900 tracking-tight">Infrastructure wrappedas Delight</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<span className="inline-block p-2 bg-rose-50 rounded-full text-rose-600 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-open" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"></path></g></svg>
</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Secret Santa, but Infrastructure-Led</h2>
<p className="text-slate-500 max-w-2xl mx-auto">The box did the explaining. Not a slide.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

<div className="bg-slate-50 p-12 flex flex-col justify-center items-center relative overflow-hidden">

<div className="absolute top-0 bottom-0 left-1/2 w-8 bg-rose-500/10 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-8 bg-rose-500/10 -translate-y-1/2"></div>
<div className="flex transition-transform hover:rotate-0 duration-500 group z-20 bg-white w-64 h-48 border-slate-200 border rounded-xl relative shadow-lg rotate-3 items-center justify-center">
<span className="text-slate-900 font-medium tracking-tight flex gap-2 items-center">
<svg aria-hidden="true" className="iconify text-rose-600 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:gift" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
                            Brand Gift Card
                        </span>

<div className="absolute -top-3 -right-3">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:flower" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"></path></g></svg>
</div>
</div>

<div className="w-64 h-48 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center absolute z-10 -rotate-3 bg-slate-50/80 backdrop-blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Reserved Slot</span>
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-icon="lucide:qr-code" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg>
</div>
</div>

<div className="p-10 md:p-12 flex flex-col justify-center space-y-6">
<h3 className="text-xl font-medium text-slate-900 flex items-center gap-2">
                        A premium Secret Santa box.
                    </h3>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-slate-600 text-sm leading-relaxed">Real gift cards from brands powered by Razorpay</span>
</li>
<li className="flex gap-3 items-start">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-slate-600 text-sm leading-relaxed">One slot left empty on purpose (The Mystery)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white bg-grain relative overflow-hidden">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundSize: '60px 60px'}}></div>
<div className="max-w-5xl mx-auto px-6 content-relative">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Santa's Route</h2>
<p className="text-slate-400 mt-2">Multiple Sleighs, One Story</p>
</div>
<div className="hidden md:flex gap-2 text-slate-500">
<svg aria-hidden="true" className="iconify text-rose-500 animate-spin-slow iconify--lucide" data-icon="lucide:snowflake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></path><path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"></path><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"></path></g></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-emerald-500/30">
<div className="mb-4 p-2 bg-emerald-500/20 w-fit rounded-lg text-emerald-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Leg 1: The Sleigh Drop</h3>
<p className="text-sm text-slate-400 leading-relaxed">125 enterprise brands received the box with real gift cards and one intentional empty slot.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-rose-500/30">
<div className="mb-4 p-2 bg-rose-500/20 w-fit rounded-lg text-rose-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2">Leg 2: Ecosystem Cheer</h3>
<p className="text-sm text-slate-400 leading-relaxed">Organic posts from founders &amp; CMOs. Spreading joy without paid amplification.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-amber-500/30">
<div className="mb-4 p-2 bg-amber-500/20 w-fit rounded-lg text-amber-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z"></path><path d="m22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Leg 3: Letters from North Pole</h3>
<p className="text-sm text-slate-400 leading-relaxed">Reinforced the "this slot is for you" narrative before the box even arrived.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-blue-500/30">
<div className="mb-4 p-2 bg-blue-500/20 w-fit rounded-lg text-blue-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:megaphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Leg 4: The Elves (Leadership)</h3>
<p className="text-sm text-slate-400 leading-relaxed">Posts from Razorpay leadership across Product, Business, and Sales.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 hover:border-purple-500/30">
<div className="mb-4 p-2 bg-purple-500/20 w-fit rounded-lg text-purple-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Leg 5: Workshop Amplification</h3>
<p className="text-sm text-slate-400 leading-relaxed">Cross-function participation increased reach. The internal team became the biggest advocates of the infrastructure story.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-5xl mx-auto px-6 content-relative">
<div className="flex items-center justify-center gap-3 mb-16">
<svg aria-hidden="true" className="iconify text-rose-600 iconify--lucide" data-icon="lucide:party-popper" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"></path></g></svg>
<h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900">Campaign Impact</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<p className="text-4xl md:text-5xl font-semibold text-rose-600 tracking-tight">125</p>
<p className="text-xs font-medium uppercase tracking-widest text-slate-500">Brands Gifted</p>
</div>
<div className="space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<p className="text-4xl md:text-5xl font-semibold text-emerald-600 tracking-tight">30+</p>
<p className="text-xs font-medium uppercase tracking-widest text-slate-500">Inbound Leads</p>
</div>
<div className="space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-center gap-1">
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-[#0077b5] iconify--lucide" data-icon="lucide:linkedin" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-black iconify--lucide" data-icon="lucide:twitter" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-xs font-medium uppercase tracking-widest text-slate-500 mt-4">Buzz Generated</p>
</div>
<div className="space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<p className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">0</p>
<p className="text-xs font-medium uppercase tracking-widest text-slate-500">Ad Spend</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">Santa's Nice List</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">The Market Spoke</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto">Founders, CMOs, and operators across consumer and enterprise brands engaged with the narrative.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-64 hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">

<div className="w-10 h-10 bg-slate-100 rounded-full relative overflow-visible border border-slate-200">
<svg aria-hidden="true" className="absolute -top-3 -right-2 text-rose-500 iconify iconify--lucide" data-icon="lucide:party-popper" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"></path></g></svg>
</div>
<div className="space-y-1">
<div className="w-24 h-3 bg-slate-100 rounded"></div>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-2/3 h-3 bg-slate-50 rounded"></div>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-500 italic">"This is how you do B2B marketing. Infra led, experience first."</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-64 hover:shadow-md transition-shadow">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full relative border border-slate-200"></div>
<div className="space-y-1">
<div className="w-24 h-3 bg-slate-100 rounded"></div>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-2/3 h-3 bg-slate-50 rounded"></div>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-500 italic">"Kudos to the Razorpay team. A masterclass in subtle positioning."</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-64 hover:shadow-md transition-shadow">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full relative border border-slate-200"></div>
<div className="space-y-1">
<div className="w-24 h-3 bg-slate-100 rounded"></div>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-full h-3 bg-slate-50 rounded"></div>
<div className="w-2/3 h-3 bg-slate-50 rounded"></div>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-500 italic">"Received this beauty today. The empty slot concept is brilliant."</p>
</div>
</div>
</div>
<div className="mt-8 text-center flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-slate-500">Including appreciation from Prakash Sikaria (CEO, Super.money)</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 border-b border-slate-100 pb-4 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:gift" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
                Why it worked
            </h2>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:tree-pine" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm md:text-base text-slate-700 font-medium">Physical experiences cut through digital clutter</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm md:text-base text-slate-700 font-medium">Familiar brands built instant trust</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-rose-50/50 border border-rose-100">
<svg aria-hidden="true" className="iconify text-rose-600 iconify--lucide" data-icon="lucide:help-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<span className="text-sm md:text-base text-slate-700 font-medium">The "Open Slot" invited participation and curiosity</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm md:text-base text-slate-700 font-medium">Infrastructure-led positioning felt credible, not salesy</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0B1120] text-white bg-grain text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 content-relative">

<div className="mx-auto w-12 h-12 mb-6 relative">
<svg aria-hidden="true" className="iconify text-rose-500 w-full h-full iconify--lucide" data-icon="lucide:crown" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
                We set out to create buzz.
                <span className="text-rose-400">We ended up creating belief.</span>
</h2>
<p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                The Secret Santa campaign reframed how the market sees Razorpay — not just as a payments company, but as the infrastructure powering how value (and joy) moves.
            </p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-2 bg-slate-100"></div>
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="flex items-center gap-2 text-slate-900">
<svg aria-hidden="true" className="iconify text-rose-600 iconify--lucide" data-icon="lucide:gift" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
<span className="text-xs font-semibold tracking-widest uppercase">Razorpay</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:tree-pine" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs text-slate-500">Built by the Razorpay Gift Cards Team</span>
</div>

<a className="group inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md text-xs font-medium hover:bg-slate-800 transition-all border border-transparent hover:border-emerald-500/50" href="#">
                Explore Gift Cards
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</footer>

    </>
  );
}
