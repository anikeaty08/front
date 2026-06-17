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
      

<nav className="flex justify-between items-center px-6 py-4 max-w-4xl mx-auto">
<a className="flex items-center gap-2 font-bold text-stone-600 text-lg" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7"></path>
</svg>
      Back
    </a>
<div className="flex items-center gap-5 text-stone-600 font-medium">
<a className="hover:text-stone-900 transition" href="#">Home</a>
<a className="text-stone-900 font-semibold underline underline-offset-4" href="#">Milestones</a>
<a className="hover:text-stone-900 transition" href="#">Profile</a>
<img alt="Parent Avatar" className="w-8 h-8 rounded-full border border-stone-300 shadow" src="https://randomuser.me/api/portraits/men/33.jpg"/>
</div>
</nav>
<main className="flex flex-col items-center px-4 py-8 min-h-screen">

<section className="w-full max-w-4xl">
<div className="relative w-full rounded-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden mb-10">
<div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 px-8 pt-10 pb-7">
<div className="flex-shrink-0 w-24 h-24 rounded-xl bg-stone-100 flex items-center justify-center shadow-2xl">

<svg className="w-14 h-14" fill="none" viewbox="0 0 64 64">
<ellipse cx="20" cy="48" fill="#f9fafb" rx="10" ry="14"></ellipse>
<ellipse cx="44" cy="44" fill="#f1f5f9" rx="11" ry="16"></ellipse>
<ellipse cx="18" cy="30" fill="#e7e5e4" rx="3" ry="4"></ellipse>
<ellipse cx="25" cy="27" fill="#e7e5e4" rx="2" ry="3"></ellipse>
<ellipse cx="36" cy="26" fill="#e7e5e4" rx="3" ry="4"></ellipse>
<ellipse cx="50" cy="32" fill="#e7e5e4" rx="2" ry="3"></ellipse>
</svg>
</div>
<div className="flex-1 flex flex-col gap-3">
<h1 className="font-extrabold text-2xl text-stone-800 mb-1 leading-tight">
              Milestone: First Steps
            </h1>
<div className="flex flex-wrap gap-4 text-stone-500 font-medium text-sm">
<span className="flex items-center gap-1">
<svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                11 months
              </span>
<span className="flex items-center gap-1">
<svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="16" rx="4" width="16" x="4" y="4"></rect>
</svg>
                Physical
              </span>
<span className="flex items-center gap-1">
<svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 20l9-5-9-5-9 5 9 5z"></path>
</svg>
                Completed
              </span>
</div>
<p className="text-stone-700 text-base mt-2 leading-relaxed max-w-xl">
              Congratulations! Your baby took their first steps. This is a huge milestone in physical development. Celebrate and encourage your little one's progress with lots of hugs and smiles!
            </p>
<div className="flex items-center gap-2 mt-2">
<img alt="Parent" className="w-8 h-8 rounded-full border border-stone-200 shadow" src="https://randomuser.me/api/portraits/men/33.jpg"/>
<div>
<div className="text-stone-700 font-bold">Alex Johnson</div>
<div className="text-stone-400 text-xs">Parent</div>
</div>
</div>
<div className="flex items-center gap-4 mt-4">
<button className="bg-stone-800 text-white px-6 py-2 font-bold rounded-lg shadow-2xl hover:bg-stone-700 transition">Add Photo</button>
<div className="flex items-center gap-2">
<div className="w-28 h-3 bg-stone-200 rounded-full overflow-hidden">
<div className="h-3 bg-stone-800 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-stone-500 text-xs font-semibold">Milestone reached!</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl grid md:grid-cols-3 gap-8">

<aside className="md:col-span-1 bg-white border border-stone-200 rounded-2xl p-6 shadow-2xl flex flex-col gap-5">
<h2 className="font-bold text-lg text-stone-800 mb-2">About this milestone</h2>
<p className="text-stone-700 text-sm leading-relaxed">
          Taking first steps marks an exciting leap in your baby's journey. Every child develops at their own pace, so cherish this moment and keep encouraging exploration!
        </p>
<div>
<h3 className="font-semibold text-stone-800 mb-1 text-sm">Tips:</h3>
<ul className="list-disc pl-5 space-y-1 text-stone-700 text-sm">
<li>Give baby lots of floor time</li>
<li>Use soft shoes or let them go barefoot</li>
<li>Offer hands for support</li>
<li>Keep the area safe and clear</li>
<li>Celebrate every wobble and step!</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-800 mb-1 text-sm">What's next?</h4>
<ul className="list-disc pl-5 space-y-1 text-stone-700 text-sm">
<li>Walking with confidence</li>
<li>Climbing and exploring</li>
<li>Learning to run</li>
</ul>
</div>
</aside>

<div className="md:col-span-2 flex flex-col gap-6">
<h2 className="text-lg font-bold text-stone-800 mb-2">Milestone Timeline</h2>
<div className="flex flex-col gap-4">

<div className="relative bg-white border border-stone-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shadow">

<svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
<circle cx="9" cy="10" r="1"></circle>
<circle cx="15" cy="10" r="1"></circle>
</svg>
</div>
<div>
<p className="font-semibold text-stone-800">Pulled up to stand</p>
<p className="text-stone-400 text-xs mt-1">10 months</p>
</div>
</div>
<div>
<span className="text-stone-400 font-semibold text-xs px-2 py-1 rounded-full bg-stone-100">Completed</span>
</div>
</div>
<div className="relative bg-white border border-stone-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shadow">

<svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<ellipse cx="12" cy="18" rx="6" ry="2"></ellipse>
<circle cx="12" cy="8" r="4"></circle>
<path d="M12 12v2"></path>
<path d="M10 14l-2 3"></path>
<path d="M14 14l2 3"></path>
</svg>
</div>
<div>
<p className="font-semibold text-stone-800">Crawled</p>
<p className="text-stone-400 text-xs mt-1">8 months</p>
</div>
</div>
<div>
<span className="text-stone-400 font-semibold text-xs px-2 py-1 rounded-full bg-stone-100">Completed</span>
</div>
</div>
<div className="relative bg-white border border-stone-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shadow">

<svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<ellipse cx="8" cy="15" rx="3" ry="4"></ellipse>
<ellipse cx="16" cy="13" rx="3" ry="5"></ellipse>
</svg>
</div>
<div>
<p className="font-semibold text-stone-800">First Steps</p>
<p className="text-stone-400 text-xs mt-1">11 months</p>
</div>
</div>
<div>
<svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
<div className="relative bg-white border border-stone-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shadow">

<svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="7" r="2"></circle>
<path d="M12 9v3"></path>
<path d="M12 12l-2 4"></path>
<path d="M12 12l2 4"></path>
</svg>
</div>
<div>
<p className="font-semibold text-stone-800">Started running</p>
<p className="text-stone-400 text-xs mt-1">Upcoming</p>
</div>
</div>
<div>
<span className="text-stone-400 font-semibold text-xs px-2 py-1 rounded-full bg-stone-100">Soon</span>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
