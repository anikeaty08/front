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
      
<div className="relative bg-black rounded-[2.5rem] shadow-2xl p-2 w-[390px] h-[844px] flex flex-col items-center border-8 border-neutral-900 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl w-32 h-5 flex items-center justify-center">
<div className="w-7 h-2 rounded bg-neutral-800 mx-1"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>

<div className="absolute right-0 top-24 w-1 h-10 rounded-l bg-neutral-900"></div>
<div className="absolute right-0 top-44 w-1 h-7 rounded-l bg-neutral-900"></div>
<div className="absolute left-0 top-32 w-1 h-20 rounded-r bg-neutral-900"></div>

<div className="relative bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50 rounded-[2rem] w-[366px] h-[800px] overflow-y-auto">

<div className="fixed -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 rounded-full blur-2xl z-0"></div>
<div className="fixed top-20 right-0 w-72 h-72 bg-gradient-to-br from-pink-300 to-yellow-200 opacity-40 rounded-full blur-2xl z-0"></div>
<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-44 bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-100 opacity-30 rounded-full blur-2xl z-0"></div>
<main className="relative z-10 flex flex-col px-5 pt-8 pb-6 min-h-full">

<div className="flex items-center mb-6">
<button className="mr-4 rounded-xl bg-white/60 border border-white/40 shadow backdrop-blur p-2 hover:bg-white/80 transition">
<svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div>
<p className="text-xs text-indigo-500 font-medium">Course</p>
<h2 className="font-bold text-xl text-indigo-900">UI Design</h2>
</div>
</div>

<div className="relative mb-8">
<div className="h-36 w-full rounded-2xl bg-gradient-to-br from-indigo-400 via-blue-400 to-pink-300 shadow-lg flex items-end overflow-hidden relative">
<svg className="absolute right-0 bottom-0 w-32 h-32 opacity-50" fill="none" viewbox="0 0 120 120">
<rect fill="#fff" fillOpacity="0.13" height="80" rx="20" width="80" x="20" y="20"></rect>
<rect fill="#fff" fillOpacity="0.09" height="50" rx="15" width="50" x="35" y="35"></rect>
</svg>
<div className="flex items-center gap-3 p-4">
<div className="w-14 h-14 rounded-xl bg-white/30 flex items-center justify-center shadow border-white/40 border">
<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="12" rx="2" width="12" x="6" y="6"></rect>
</svg>
</div>
<div>
<h3 className="text-white text-lg font-bold">UI Design</h3>
<p className="text-white/80 text-xs">Completed</p>
</div>
</div>
</div>
<div className="flex justify-between items-center -mt-5 px-3">
<div className="flex items-center bg-white/80 border border-white/40 rounded-xl px-3 py-1 shadow">
<svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z"></path>
</svg>
<span className="text-sm text-indigo-700 font-semibold">4.8</span>
</div>
<div className="flex items-center gap-1 text-xs text-indigo-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
              3h 45m
            </div>
<div className="flex items-center gap-1 text-xs text-indigo-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="2" rx="1" width="14" x="5" y="11"></rect>
</svg>
              12 lessons
            </div>
</div>
</div>

<div className="mb-6">
<h4 className="font-bold text-indigo-900 text-base mb-1">About this course</h4>
<p className="text-indigo-500 text-sm leading-relaxed">
            Learn the fundamentals of UI Design, including color, typography, spacing, and prototyping. This course will help you design beautiful and functional interfaces for apps and websites. Perfect for beginners.
          </p>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-indigo-900 font-semibold">Progress</span>
<span className="text-xs text-indigo-500 font-medium">100%</span>
</div>
<div className="w-full h-3 bg-indigo-100 rounded-full relative overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-300 rounded-full" style={{width: '100%'}}></div>
</div>
</div>

<div>
<h4 className="font-bold text-indigo-900 text-base mb-3">Lessons</h4>
<div className="flex flex-col gap-3">

<div className="flex items-center bg-white/60 border border-white/40 rounded-xl shadow backdrop-blur-xl px-4 py-3">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center shadow mr-3">
<span className="text-white font-bold text-sm">1</span>
</div>
<div className="flex-1">
<p className="font-semibold text-indigo-900 text-sm">Introduction to UI Design</p>
<p className="text-xs text-indigo-400">6:00 min</p>
</div>
<span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">✓</span>
</div>
<div className="flex items-center bg-white/60 border border-white/40 rounded-xl shadow backdrop-blur-xl px-4 py-3">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-yellow-300 flex items-center justify-center shadow mr-3">
<span className="text-white font-bold text-sm">2</span>
</div>
<div className="flex-1">
<p className="font-semibold text-indigo-900 text-sm">Color Theory Basics</p>
<p className="text-xs text-indigo-400">8:15 min</p>
</div>
<span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">✓</span>
</div>
<div className="flex items-center bg-white/60 border border-white/40 rounded-xl shadow backdrop-blur-xl px-4 py-3">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-200 flex items-center justify-center shadow mr-3">
<span className="text-white font-bold text-sm">3</span>
</div>
<div className="flex-1">
<p className="font-semibold text-indigo-900 text-sm">Typography Essentials</p>
<p className="text-xs text-indigo-400">10:00 min</p>
</div>
<span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">✓</span>
</div>
<div className="flex items-center bg-white/60 border border-white/40 rounded-xl shadow backdrop-blur-xl px-4 py-3">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-yellow-300 flex items-center justify-center shadow mr-3">
<span className="text-white font-bold text-sm">4</span>
</div>
<div className="flex-1">
<p className="font-semibold text-indigo-900 text-sm">Spacing &amp; Layout</p>
<p className="text-xs text-indigo-400">9:30 min</p>
</div>
<span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">✓</span>
</div>
<div className="flex items-center bg-white/60 border border-white/40 rounded-xl shadow backdrop-blur-xl px-4 py-3">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-200 flex items-center justify-center shadow mr-3">
<span className="text-white font-bold text-sm">5</span>
</div>
<div className="flex-1">
<p className="font-semibold text-indigo-900 text-sm">Prototyping Tools</p>
<p className="text-xs text-indigo-400">7:45 min</p>
</div>
<span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">✓</span>
</div>

</div>
</div>
<div className="flex-1"></div>

<a className="mt-7 w-full bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-300 text-white font-bold py-3 rounded-xl shadow-xl text-center text-base transition hover:scale-105" href="#">
          View Certificate
        </a>
</main>

<nav className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 border border-white/40 rounded-2xl shadow-lg backdrop-blur-xl flex items-center justify-around py-3 z-20">
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 9.75L12 3l9 6.75V19a2 2 0 01-2 2H5a2 2 0 01-2-2V9.75z"></path>
<path d="M9 22V12h6v10"></path>
</svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
<span className="text-xs">Courses</span>
</button>
<button className="flex flex-col items-center text-indigo-600 font-semibold">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 16l4-8 4 8"></path>
</svg>
<span className="text-xs">Progress</span>
</button>
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
<span className="text-xs">Profile</span>
</button>
</nav>
</div>
</div>

    </>
  );
}
