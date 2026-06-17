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
darkMode: 'class',
}



        lucide.createIcons();
        
        // Simple dark mode toggle logic
        const toggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        toggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
            } else {
                html.classList.add('dark');
            }
        });
    
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
      

<div className="w-full max-w-md bg-slate-50 dark:bg-slate-950 min-h-screen relative flex flex-col transition-colors duration-300">

<header className="px-6 mt-4 mb-6 flex justify-between items-start">
<h1 className="text-5xl text-slate-800 dark:text-slate-50 tracking-tight font-semibold">Chand?!</h1>
<button className="p-2 -mr-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors" id="theme-toggle">
<span className="block dark:hidden">
<svg className="lucide lucide-moon w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</span>
<span className="hidden dark:block">
<svg className="lucide lucide-sun w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</span>
</button>
</header>

<div className="px-6 mb-5 flex justify-between items-end">
<div className="flex items-center gap-2">
<span className="text-2xl grayscale dark:grayscale-0">💵</span>
<h2 className="text-xl font-medium text-slate-700 dark:text-slate-200 tracking-tight">Currencies</h2>
</div>
<span className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">Sep 16, 2020 at 8:13 PM</span>
</div>

<main className="flex-1 px-4 pb-10 overflow-y-auto">
<div className="grid grid-cols-2 gap-y-2 gap-x-2">

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="US" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/us.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">US Dollar</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">USD</div>
</div>
</div>
<div className="">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">26,800</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">26,900</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="EU" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/eu.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Euro</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">EUR</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">31,650</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">31,800</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="GB" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/gb.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">British Pound</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">GBP</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">34,700</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">34,900</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="CH" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/ch.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Swiss Franc</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">CHF</div>
</div>
</div>
<div className="">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">29,450</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">29,600</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="CA" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/ca.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Canadian Dollar</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">CAD</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">20,305</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">20,405</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="AU" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/au.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Australian Dollar</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">AUD</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">19,590</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">19,690</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="SE" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/se.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Swedish Krona</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">SEK</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">3,120</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">3,145</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100/50 dark:border-slate-800 flex flex-col justify-between h-44 transition-colors duration-300">
<div className="flex justify-between items-start">
<img alt="NO" className="w-8 h-6 rounded shadow-sm object-cover opacity-90" src="https://flagcdn.com/no.svg"/>
<div className="text-right">
<div className="text-sm font-medium text-slate-400 dark:text-slate-500">Norwegian Krone</div>
<div className="text-base font-semibold text-slate-700 dark:text-slate-200 tracking-tight">NOK</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-0.5">2,890</div>
<div className="text-3xl font-medium text-red-500 dark:text-red-400 tracking-tighter">2,910</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
