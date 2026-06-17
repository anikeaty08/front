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
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Initialize Icons
      lucide.createIcons();

      // Tab Switcher Logic
      function switchTab(tabId) {
        // Buttons
        document.querySelectorAll('.spine-tab').forEach(el => {
          el.classList.remove('active');
          el.classList.add('inactive');
          el.classList.remove('shadow-sm', 'border-slate-200'); // Remove active styles
          el.classList.add('border-transparent');
        });

        const activeBtn = document.getElementById('tab-' + tabId);
        activeBtn.classList.add('active');
        activeBtn.classList.remove('inactive');
        activeBtn.classList.add('shadow-sm');
        activeBtn.classList.remove('border-transparent');

        // Panels
        document.querySelectorAll('.spine-panel').forEach(el => el.classList.remove('active'));
        document.getElementById('panel-' + tabId).classList.add('active');
      }
    
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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="text-sm font-bold text-slate-900 tracking-tight font-display" onclick="window.location.href='/home'" role="button">
              Hatchearly
            </span>
</a>

<nav className="hidden md:flex gap-8 text-[13px] font-medium text-slate-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-slate-900 transition-colors" href="#infrastructure">
              Infrastructure
            </a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
              Process
            </a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">
              Integrations
            </a>
<a className="hover:text-slate-900 transition-colors" href="/#comparison-section">Pricing</a></nav>

<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center text-[13px] hover:bg-slate-800 hover:shadow-md transition-all active:scale-95 font-semibold text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="/#cta-section">
  Book strategy call
</a>
</div>
</div>
</div>
</header>


    </>
  );
}
