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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'], // Used as proxy for Geist for broad compatibility
},
colors: {
brand: {
DEFAULT: '#8e24aa',
light: '#f3e5f5',
dark: '#5c176e'
},
nav: {
DEFAULT: '#222222'
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(142, 36, 170, 0.3)',
}
}
}
}



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
      

<div className="relative w-full overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[#8e24aa]/10 rounded-[100%] blur-[120px]"></div>

<div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[100px]"></div>

<div className="absolute bottom-[0%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[80px]"></div>
</div>

<nav className="relative z-50 w-full bg-transparent pt-6 pb-4">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-12">

<div className="flex-shrink-0 cursor-pointer group">
<span className="text-xl font-semibold tracking-tighter text-slate-900 group-hover:text-[#8e24aa] transition-colors duration-300">
                            AURA AESTHETICS
                        </span>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Treatments</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">About Us</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Financing</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Locations</a>
</div>

<div className="hidden md:flex items-center">
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] flex items-center gap-2 transition-colors duration-200" href="#">
                            Book Consultation 
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex md:hidden">
<button className="text-[#222222] hover:text-[#8e24aa] p-2" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative z-10 pt-20 pb-32 lg:pt-32 lg:pb-48">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-purple-100 backdrop-blur-sm shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-[#8e24aa]"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Trusted Financing Partners</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Flexible Payment <br className="hidden md:block"/> Options
                </h1>

<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Achieve your aesthetic goals today without the financial stress. We partner with industry leaders to offer simple, transparent, and budget-friendly payment plans tailored just for you.
                </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-[#8e24aa] rounded-full hover:bg-[#7b1fa2] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8e24aa]" href="#plans">
<span>Explore Plans</span>
<i className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" data-lucide="chevron-down"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-600 transition-colors bg-transparent rounded-full hover:text-[#8e24aa] hover:bg-purple-50" href="#consultation">
                        Learn how it works
                    </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by thousands of patients</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#8e24aa]" data-lucide="credit-card"></i>
<span className="text-lg font-bold tracking-tight text-slate-800">Cherry</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#8e24aa]" data-lucide="heart-handshake"></i>
<span className="text-lg font-bold tracking-tight text-slate-800">CareCredit</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#8e24aa]" data-lucide="check-circle-2"></i>
<span className="text-lg font-bold tracking-tight text-slate-800">Affirm</span>
</div>
</div>
</div>
</div>
</section>
</div>



    </>
  );
}
