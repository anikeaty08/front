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
      

<div className="fixed -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 rounded-full blur-2xl z-0"></div>
<div className="fixed top-20 right-0 w-72 h-72 bg-gradient-to-br from-pink-300 to-yellow-200 opacity-40 rounded-full blur-2xl z-0"></div>
<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-44 bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-100 opacity-30 rounded-full blur-2xl z-0"></div>

<nav className="relative z-10 flex justify-between items-center px-6 py-4 max-w-4xl mx-auto">
<a className="flex items-center gap-2 font-bold text-indigo-500 text-lg" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7"></path>
</svg>
      Back
    </a>
<div className="flex items-center gap-5 text-indigo-700 font-medium">
<a className="hover:text-indigo-900 transition" href="#">Home</a>
<a className="text-indigo-900 font-semibold underline underline-offset-4" href="#">Courses</a>
<a className="hover:text-indigo-900 transition" href="#">Profile</a>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center px-4 py-8 min-h-screen">

<section className="w-full max-w-4xl">
<div className="relative w-full rounded-3xl bg-white/60 border border-white/40 shadow-xl overflow-hidden backdrop-blur-xl mb-10">

<div className="absolute -top-20 -left-16 w-56 h-56 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 rounded-full blur-2xl"></div>
<div className="absolute -bottom-12 -right-16 w-52 h-52 bg-gradient-to-br from-pink-400 to-yellow-300 opacity-40 rounded-full blur-2xl"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 px-10 pt-10 pb-7">
<div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center shadow-lg">
<svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 20l9-5-9-5-9 5 9 5z"></path>
<path d="M12 12V4l9 5-9 5-9-5 9-5z"></path>
</svg>
</div>
<div className="flex-1 flex flex-col gap-3">
<h1 className="font-extrabold text-3xl text-indigo-900 mb-1 leading-tight">
              UI Design for Beginners
            </h1>
<div className="flex flex-wrap gap-4 text-indigo-600 font-medium text-sm">
<span className="flex items-center gap-1"><svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> 2.5 hours</span>
<span className="flex items-center gap-1"><svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="4" width="16" x="4" y="4"></rect></svg> 12 sections</span>
<span className="flex items-center gap-1"><svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"></path></svg> Beginner</span>
</div>
<p className="text-indigo-800 text-base mt-2 leading-relaxed max-w-xl">
              Master the fundamentals of UI Design including color theory, typography, grid, and prototyping. This course takes you from zero to your first interactive design, perfect for beginners and aspiring designers.
            </p>
<div className="flex items-center gap-2 mt-2">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-white shadow" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<div className="text-indigo-600 font-bold">Jane Lee</div>
<div className="text-indigo-400 text-xs">Lead Designer &amp; Instructor</div>
</div>
</div>
<div className="flex items-center gap-4 mt-4">
<button className="bg-gradient-to-r from-indigo-500 to-pink-400 text-white px-6 py-2 font-bold rounded-lg shadow hover:from-indigo-600 hover:to-pink-500 transition">Resume Course</button>
<div className="flex items-center gap-2">
<div className="w-28 h-3 bg-indigo-100 rounded-full overflow-hidden">
<div className="h-3 bg-gradient-to-r from-pink-400 to-yellow-300 rounded-full" style={{width: '30%'}}></div>
</div>
<span className="text-indigo-600 text-xs font-semibold">30% complete</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl grid md:grid-cols-3 gap-8">

<aside className="md:col-span-1 bg-white/70 border border-white/40 rounded-2xl p-6 shadow-sm backdrop-blur-lg flex flex-col gap-5">
<h2 className="font-bold text-lg text-indigo-900 mb-2">About this course</h2>
<p className="text-indigo-800 text-sm leading-relaxed">
          Dive into UI design essentials: discover best practices in layout, color, typography, and prototyping. Each section provides hands-on exercises and real-world examples to solidify your learning.
        </p>
<div>
<h3 className="font-semibold text-indigo-900 mb-1 text-sm">What you'll learn:</h3>
<ul className="list-disc pl-5 space-y-1 text-indigo-700 text-sm">
<li>UI design principles &amp; patterns</li>
<li>Color theory &amp; accessibility</li>
<li>Typography for digital products</li>
<li>Interactive prototyping</li>
<li>Layout &amp; grid systems</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-indigo-900 mb-1 text-sm">Requirements:</h4>
<ul className="list-disc pl-5 space-y-1 text-indigo-700 text-sm">
<li>No prior experience needed</li>
<li>Figma (free version)</li>
<li>Internet access</li>
</ul>
</div>
</aside>

<div className="md:col-span-2 flex flex-col gap-6">
<h2 className="text-lg font-bold text-indigo-900 mb-2">Curriculum</h2>
<div className="flex flex-col gap-4">

<div className="relative bg-white/70 border border-white/40 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur-lg group hover:bg-indigo-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-300 to-blue-200 flex items-center justify-center shadow">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8m-4-4v8"></path>
</svg>
</div>
<div>
<p className="font-semibold text-indigo-900">Introduction to UI Design</p>
<p className="text-indigo-400 text-xs mt-1">5 min</p>
</div>
</div>
<div>
<span className="text-indigo-400 font-semibold text-xs px-2 py-1 rounded-full bg-indigo-100">Preview</span>
</div>
</div>
<div className="relative bg-white/70 border border-white/40 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur-lg group hover:bg-indigo-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center shadow">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="16" rx="4" width="16" x="4" y="4"></rect>
</svg>
</div>
<div>
<p className="font-semibold text-indigo-900">Color Theory</p>
<p className="text-indigo-400 text-xs mt-1">12 min</p>
</div>
</div>
<div>
<svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
<div className="relative bg-white/70 border border-white/40 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur-lg group hover:bg-indigo-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-300 flex items-center justify-center shadow">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="12" rx="2" width="12" x="6" y="6"></rect>
</svg>
</div>
<div>
<p className="font-semibold text-indigo-900">Typography Basics</p>
<p className="text-indigo-400 text-xs mt-1">18 min</p>
</div>
</div>
<div>
<svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
<div className="relative bg-white/70 border border-white/40 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur-lg group hover:bg-indigo-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-yellow-200 flex items-center justify-center shadow">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div>
<p className="font-semibold text-indigo-900">Prototyping in Figma</p>
<p className="text-indigo-400 text-xs mt-1">20 min</p>
</div>
</div>
<div>
<svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>

</div>
</div>
</section>
</main>

    </>
  );
}
