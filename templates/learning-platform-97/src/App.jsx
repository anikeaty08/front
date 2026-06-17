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
      

<div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#D41F22] w-full rounded-t-[100%] scale-x-150 translate-y-1/3 pointer-events-none z-0"></div>

<div className="relative z-10 container mx-auto px-4 pt-16 md:pt-24 flex flex-col items-center">

<div className="text-center max-w-4xl mx-auto mb-12">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                Pengalaman Baru dalam Belajar
            </h1>
<p className="text-lg md:text-xl font-normal text-red-50 opacity-95 leading-relaxed max-w-3xl mx-auto">
                Kami mengundang Anda untuk bergabung dan menata ulang apa itu pendidikan, bukan sebagai tujuan, tetapi sebagai cara hidup.
            </p>

<div className="mt-10 inline-flex items-center bg-white rounded-full py-3 px-6 pr-4 shadow-xl w-full max-w-md mx-auto transition-transform hover:scale-105 cursor-pointer group">
<input className="bg-transparent border-none outline-none text-gray-800 text-lg placeholder-gray-800 font-medium flex-grow pl-2" disabled="" placeholder="Mulai Jelajahi Program" type="text"/>
<div className="text-gray-800 group-hover:text-black">
<i className="w-7 h-7 stroke-[2]" data-lucide="search"></i>
</div>
</div>
</div>

<div className="relative w-full max-w-7xl h-[600px] md:h-[700px] mt-8 flex justify-center">


<div className="absolute bottom-0 z-10 w-full flex justify-center items-end">
<img alt="Students" className="h-[400px] md:h-[550px] object-cover rounded-t-3xl shadow-2xl mask-image-gradient" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>

<div className="absolute top-0 left-4 md:left-10 lg:left-20 z-20 w-64 bg-white text-gray-800 rounded-2xl p-4 shadow-2xl floating-card hidden md:block">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-gray-900">Cohorts</h3>

<div className="bg-blue-50 p-1.5 rounded-lg">
<i className="w-4 h-4 text-blue-500" data-lucide="users"></i>
</div>
</div>
<p className="text-sm text-gray-500 leading-snug">
                    Interactive online/offline classes &amp; bootcamps for real-time expert collaboration.
                </p>

<div className="mt-3 flex items-end gap-1 h-8 border-b border-gray-100 pb-1">
<div className="w-2 bg-blue-200 rounded-t h-3"></div>
<div className="w-2 bg-blue-300 rounded-t h-5"></div>
<div className="w-2 bg-blue-500 rounded-t h-full"></div>
<div className="w-2 bg-blue-200 rounded-t h-4"></div>
</div>
</div>

<div className="absolute top-20 right-4 md:right-10 lg:right-20 z-20 w-64 bg-white text-gray-800 rounded-2xl p-4 shadow-2xl floating-card-delayed hidden md:block">
<div className="flex gap-3 items-start">
<div className="bg-red-50 p-2 rounded-xl flex-shrink-0">
<i className="w-6 h-6 text-red-500 fill-red-100" data-lucide="play-circle"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900 mb-1">Courses</h3>
<p className="text-sm text-gray-500 leading-snug">
                            Self-paced video learning and materials for flexible study anytime, anywhere.
                        </p>
</div>
</div>
</div>

<div className="absolute bottom-32 left-0 md:left-8 lg:left-12 z-30 w-72 bg-white text-gray-800 rounded-2xl p-4 shadow-2xl floating-card-delayed hidden md:block">
<div className="flex gap-4">
<div className="flex-1">
<h3 className="text-lg font-medium text-gray-900 mb-1">Assessment</h3>
<p className="text-sm text-gray-500 leading-snug">
                            Exercises, simulations, and tryouts for real-world skill preparation.
                        </p>
</div>
<div className="flex flex-col items-center justify-center bg-green-50 rounded-lg w-16 h-16 flex-shrink-0 border border-green-100">
<div className="bg-green-500 rounded-full p-1 mb-1">
<i className="w-4 h-4 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[10px] font-bold text-green-700">PASS</span>
</div>
</div>

<div className="mt-3 space-y-1.5">
<div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-20 right-0 md:right-12 lg:right-16 z-30 w-64 bg-white text-gray-800 rounded-2xl p-4 shadow-2xl floating-card hidden md:block">
<div className="relative">

<div className="absolute -top-6 -right-2 bg-yellow-400 rounded-full p-1.5 border-4 border-white shadow-sm">
<i className="w-4 h-4 text-white fill-white" data-lucide="lightbulb"></i>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 text-right pr-4">Content</h3>
<p className="text-sm text-gray-500 leading-snug text-right">
                        Templates, e-books, and resources to support learning and growth.
                    </p>
<div className="mt-3 flex justify-end gap-2">
<div className="w-8 h-10 bg-indigo-100 rounded border border-indigo-200"></div>
<div className="w-8 h-10 bg-orange-100 rounded border border-orange-200 transform -rotate-6"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 w-full pb-12 md:hidden relative z-20">
<div className="bg-white p-5 rounded-xl shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-blue-500" data-lucide="users"></i>
<h3 className="text-lg font-medium text-gray-900">Cohorts</h3>
</div>
<p className="text-sm text-gray-500">Interactive online/offline classes &amp; bootcamps.</p>
</div>
<div className="bg-white p-5 rounded-xl shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-red-500" data-lucide="play-circle"></i>
<h3 className="text-lg font-medium text-gray-900">Courses</h3>
</div>
<p className="text-sm text-gray-500">Self-paced video learning anytime, anywhere.</p>
</div>
<div className="bg-white p-5 rounded-xl shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-green-500" data-lucide="check-circle-2"></i>
<h3 className="text-lg font-medium text-gray-900">Assessment</h3>
</div>
<p className="text-sm text-gray-500">Exercises and simulations for skill preparation.</p>
</div>
<div className="bg-white p-5 rounded-xl shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-yellow-500" data-lucide="book-open"></i>
<h3 className="text-lg font-medium text-gray-900">Content</h3>
</div>
<p className="text-sm text-gray-500">Templates, e-books, and resources.</p>
</div>
</div>
</div>


    </>
  );
}
