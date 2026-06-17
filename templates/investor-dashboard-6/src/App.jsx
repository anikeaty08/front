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
      

<nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="bg-slate-900 text-white p-2 rounded-lg">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="file-text"></i>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight">Fundable Investor</span>
</div>

<div className="flex items-center gap-6">
<span className="text-base font-medium text-slate-600 hidden sm:block">waleedashfaqm@gmail.com</span>
<a className="text-base font-semibold text-slate-900 hover:text-slate-700" href="#">Logout</a>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-12">

<div className="mb-10">
<h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Welcome back, Muhammad!</h1>
<p className="text-lg text-slate-500 font-medium">Your path to lender-ready presentations starts here.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div>
<h2 className="text-xl font-semibold text-slate-800 tracking-tight mb-2">Presentations Remaining</h2>
<p className="text-base text-slate-500 mb-6">You've used all your presentations</p>
<button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors text-base">
                        Get More Presentations
                    </button>
</div>
<div className="flex gap-3">

<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="link-2-off"></i>
</div>
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="link-2-off"></i>
</div>
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="link-2-off"></i>
</div>
</div>
</div>
</div>

<div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-10 flex items-start gap-3">
<i className="w-6 h-6 text-slate-700 stroke-[1.5] flex-shrink-0 mt-0.5" data-lucide="alert-triangle"></i>
<p className="text-base text-orange-900/80 font-medium">
<span className="font-semibold text-orange-900">IMPORTANT:</span> To get the most out of this system, do NOT use the Wizard until you have a specific deal ready to present to a lender.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5] ml-1" data-lucide="play"></i> 
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Start Here: Welcome Guide</h3>
<p className="text-base text-slate-500 leading-snug">Brief orientation to get started</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="book-open"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Educational Deck</h3>
<p className="text-base text-slate-500 leading-snug">The Funding Readiness Framework</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="file-text"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Wizard Reference Guide</h3>
<p className="text-base text-slate-500 leading-snug">Field-by-field companion for the wizard</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border-2 border-orange-400 hover:shadow-md transition-all flex items-center gap-5 relative overflow-hidden" href="#">
<div className="w-14 h-14 rounded-xl bg-orange-400 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Create Your Presentation</h3>
<p className="text-base text-slate-500 leading-snug">Build your borrower packet</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-pink-500 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="gift"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Bonus Tools</h3>
<p className="text-base text-slate-500 leading-snug">Downloadable guides and checklists</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-slate-500 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="help-circle"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">FAQ</h3>
<p className="text-base text-slate-500 leading-snug">Common questions answered</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>

<a className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center gap-5" href="#">
<div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white flex-shrink-0">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="message-circle"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Contact Support</h3>
<p className="text-base text-slate-500 leading-snug">Get help when you need it</p>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors stroke-[1.5]" data-lucide="chevron-right"></i>
</a>
</div>
</main>


    </>
  );
}
