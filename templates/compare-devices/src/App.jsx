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
      

<section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Abstract fluid background" className="w-full h-full object-cover opacity-90 block" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-8 drop-shadow-sm">
                Different sleep devices look similar.<br/>
<span className="text-slate-500">The experience is not.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-medium tracking-tight">
                Sleepal compares what matters — comfort, intelligence, and how seamlessly sleep support fits into real life.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black hover:scale-105 transition-all duration-300 text-white rounded-full px-8 h-14 text-sm font-medium shadow-xl shadow-slate-200" href="#compare-table">
                    Shop Sleepal
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 relative bg-[#F8F9FA]" id="compare-table">
<div className="max-w-6xl mx-auto">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Technical Comparison</h2>
<p className="text-slate-500 text-base mb-6">See how Sleepal stacks up against common alternatives.</p>

<div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-medium md:hidden animate-pulse">
<svg className="lucide lucide-move-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="18 8 22 12 18 16"></polyline><polyline points="6 8 2 12 6 16"></polyline><line x1="2" x2="22" y1="12" y2="12"></line></svg>
                    Swipe to compare
                </div>
</div>


<div className="relative w-full overflow-x-auto no-scrollbar scroll-smooth pb-12 -mx-4 px-4 md:px-0">
<div className="grid grid-cols-[160px_minmax(140px,1.2fr)_minmax(120px,1fr)_minmax(120px,1fr)] md:grid-cols-[1.5fr_1.2fr_1fr_1fr] min-w-[700px] md:min-w-0">


<div className="p-6 pl-4 text-sm font-medium text-slate-400 flex items-end pb-8 sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
                        Key Features
                    </div>

<div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.03)] border-x border-t border-slate-100 p-8 text-center relative z-10 transform translate-y-2">
<span className="text-2xl font-bold text-slate-900 block tracking-tight">Sleepal</span>
<div className="inline-flex items-center gap-1 mt-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600">Recommended</span>
</div>
</div>

<div className="p-6 text-center flex flex-col justify-end pb-8">
<span className="text-sm font-semibold text-slate-500">Wearables</span>
</div>

<div className="p-6 text-center flex flex-col justify-end pb-8">
<span className="text-sm font-semibold text-slate-500 leading-tight">Under-Mattress</span>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex items-center text-sm font-medium text-slate-900 sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
                        Contact-Free Use
                    </div>
<div className="bg-white border-x border-slate-100 p-6 flex items-center justify-center relative z-10">
<svg className="lucide lucide-check-circle-2 text-slate-900 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-check text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex items-center gap-2 group tooltip-trigger cursor-help sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
<span className="text-sm font-medium text-slate-900 leading-tight">Motion &amp; Breathing</span>
<svg className="lucide lucide-info text-slate-400 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="tooltip-content absolute left-24 top-0 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 invisible transition-all duration-200 w-48 z-40 pointer-events-none text-center shadow-xl">
                            Detects micro-movements of chest wall for respiration tracking.
                        </div>
</div>
<div className="bg-white border-x border-slate-100 p-6 flex items-center justify-center relative z-10">
<svg className="lucide lucide-check-circle-2 text-slate-900 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-help-circle text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex items-center gap-2 group tooltip-trigger cursor-help sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
<span className="text-sm font-medium text-slate-900 leading-tight">Clinical Accuracy</span>
<svg className="lucide lucide-info text-slate-400 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<div className="bg-white border-x border-slate-100 p-6 flex items-center justify-center relative z-10">
<svg className="lucide lucide-check-circle-2 text-slate-900 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-help-circle text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex flex-col justify-center sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
<span className="text-sm font-medium text-slate-900 leading-tight">Adaptive Support</span>
<span className="text-[10px] text-slate-400 font-normal mt-0.5">Light + Sound</span>
</div>
<div className="bg-white border-x border-slate-100 p-6 flex items-center justify-center relative z-10">
<svg className="lucide lucide-check-circle-2 text-slate-900 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex items-center text-sm font-medium text-slate-900 sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
<span className="leading-tight">AI Wake Window</span>
</div>
<div className="bg-white border-x border-slate-100 p-6 flex items-center justify-center relative z-10">
<svg className="lucide lucide-check-circle-2 text-slate-900 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<svg className="lucide lucide-x text-slate-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>

<div className="p-6 pl-4 border-t border-slate-200 flex items-center text-sm font-medium text-slate-500 sticky left-0 z-20 bg-[#F8F9FA] border-r border-slate-200/50 md:border-r-0">
                        One-time Investment
                    </div>
<div className="bg-white rounded-b-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-x border-b border-slate-100 p-6 flex flex-col items-center justify-center relative z-10">
<span className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">$499.00</span>
<span className="text-[10px] text-slate-500 mt-1 font-medium whitespace-nowrap">No subscription</span>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<span className="text-sm md:text-lg font-medium text-slate-500 tracking-tight">$449.00</span>
</div>
<div className="p-6 border-t border-slate-200 flex items-center justify-center">
<span className="text-sm md:text-lg font-medium text-slate-500 tracking-tight">$299.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 bg-[#F8F9FA]">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] group">
<img alt="Calm minimal bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616594039964-408359566371?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Sanctuary, uninterrupted.</h3>
<p className="text-white/80 max-w-lg">Create a space where technology supports rest without demanding attention.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Comfort</h3>
<p className="text-sm font-medium text-slate-700 mb-3">Sleep works best when you forget the device exists.</p>
<p className="text-sm text-slate-500 leading-relaxed">
                        Wearables can be bulky and disruptive. Under-mattress devices are easily confused by pets or partners. Sleepal sits on your bedside table—invisible and passive.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.479 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M20 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Intelligence</h3>
<p className="text-sm font-medium text-slate-700 mb-3">Data is only useful when it understands context.</p>
<p className="text-sm text-slate-500 leading-relaxed">
                        Your sleep isn't just about movement. Sleepal correlates your biometrics with room temperature, light, and noise to tell you why you woke up.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Consistency</h3>
<p className="text-sm font-medium text-slate-700 mb-3">The best sleep system is the one you actually use.</p>
<p className="text-sm text-slate-500 leading-relaxed">
                        No charging batteries. No remembering to put it on. No syncing issues. Sleepal is always on, removing the friction that kills healthy habits.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0B0C10] text-white overflow-hidden relative">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Designed for your bedroom.<span className="text-white/40">Not for surveillance.</span></h2>
<p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Sleepal gathers insights, not raw footage. It was designed to belong in your most private space—quietly and respectfully.
            </p>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-camera-off text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.564 14.558a3 3 0 1 1-4.122-4.121M2 2l20 20"></path><path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175m2.879-2.801A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"></path></svg>
</div>
<span className="text-sm font-medium tracking-wide">No Cameras</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-mic-off text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3m3-12.66V5a3 3 0 0 0-5.68-1.33m7.63 13.28A7 7 0 0 1 5 12v-2m13.89 3.23A7 7 0 0 0 19 12v-2M2 2l20 20"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path></svg>
</div>
<span className="text-sm font-medium tracking-wide">No Microphones</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-cpu text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<span className="text-sm font-medium tracking-wide">Local Processing</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield-check text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm font-medium tracking-wide">You Own The Data</span>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
<div className="relative rounded-3xl overflow-hidden h-64 md:h-80 bg-slate-100">
<img alt="Abstract technology detail" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<p className="text-2xl md:text-3xl font-medium text-slate-800 tracking-tight text-center px-4">Engineered for silence.</p>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Technical Specifications</h2>
<p className="text-lg text-slate-500 max-w-2xl font-medium">Hardware details, sensor capabilities, and compliance standards for the Sleepal AI Lamp.</p>
</div>
<dl className="grid grid-cols-1 divide-y divide-slate-100 border-t border-slate-100">

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Product Name</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">Sleepal AI Lamp</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Dimensions</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">210 × 118 × 319 mm</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Weight</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">965g</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Input Power</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">DC 12V ⎓ 2A</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Sensor Array</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">mmWave Radar, Thermal Array, Temperature &amp; Humidity, Ambient Light, Acoustic Array</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Metrics Tracked</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0 leading-relaxed">Sleep Stage, Sleep Position, Heart Rate, HRV, Breathing Rate, Time in Bed, Snoring Detection, Noise Levels, Room Temperature, Humidity</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Display</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">1.39-inch Touch Screen</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Connectivity</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">Wi-Fi 2.4GHz / 5GHz</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">App Compatibility</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">iOS and Android</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Light Specifications</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">
<ul className="flex flex-col gap-1">
<li>LED Light Source</li>
<li>2700K – 6500K Color Temperature</li>
<li className="">CRI Ra97</li>
<li>RG0 Blue Light Safety Rating</li>
</ul>
</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Detection Coverage</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">Up to 2 meters</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Multi-Person Support</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">Yes (Tracks nearest person)</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">Certifications</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">CE, FCC, IC, RoHS</dd>
</div>

<div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors px-2 rounded-lg">
<dt className="text-sm font-medium text-slate-500">In the Box</dt>
<dd className="mt-1 text-sm font-medium text-slate-900 sm:col-span-2 sm:mt-0">Sleepal AI Lamp, Power Adapter, User Manual</dd>
</div>
</dl>
</div>
</section>

<section className="relative py-32 px-6 bg-[#0B0C10] overflow-hidden flex items-center justify-center border-t border-slate-900">

<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="bg-gradient-to-t from-[#0B0C10] via-transparent to-[#0B0C10]/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<h2 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-10 drop-shadow-lg" style={{}}>Sleep, finally done right.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
                    Shop Sleepal
                </a>

<a className="h-12 px-8 rounded-full border border-white/20 text-white font-medium text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300" href="/">
                    Back to Homepage
                </a>
</div>
</div>
</section>

    </>
  );
}
