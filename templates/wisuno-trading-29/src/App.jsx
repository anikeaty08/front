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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
orange: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
},
neutral: {
25: '#fcfcfc',
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
800: '#262626',
900: '#171717',
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(234, 88, 12, 0.15), 0 8px 30px rgba(0,0,0,0.04)',
'glow-orange': '0 0 40px -10px rgba(249, 115, 22, 0.2)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'float-slow': 'float 8s ease-in-out 1s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-20px) rotate(2deg)' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 glass-light transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2 group" href="#">
<span className="flex items-center h-8">
<img alt="Logo" className="w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66bf23d2-528c-43fa-87d9-2b0080eb3264_320w.png"/>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#markets">Markets</a>
<a className="hover:text-neutral-900 transition-colors" href="#platforms">Platform</a>
<a className="text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60 hover:border-neutral-300 transition-colors" href="#">Promotions</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 px-2 transition-colors" href="#">Log in</a>
<a className="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-all shadow-sm border border-transparent hover:shadow-orange-500/20" href="#">
                    Open Account
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-25 pt-32 pb-20 relative">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid-black opacity-60"></div>

<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
<div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-yellow-50/50 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex gap-2 uppercase text-[11px] font-bold text-emerald-700 tracking-wider bg-emerald-50/50 border-emerald-200/60 border rounded-full mb-8 py-1.5 pl-2 pr-4 shadow-sm items-center backdrop-blur-sm">
<span className="relative flex h-2 w-2 ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Limited Time Offer
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 mb-6 leading-[1.05]">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">50%</span> First-Time<br/>
                        Deposit Bonus
                    </h1>
<p className="text-neutral-500 text-lg md:text-xl font-normal mb-10 leading-relaxed max-w-lg border-l-2 border-orange-200 pl-6">
                        Boost your trading power with Wisuno.<br/>
                        Deposit now &amp; trade more with increased margin.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto bg-orange-600 text-white h-12 px-8 rounded-lg text-base font-semibold hover:bg-orange-700 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_14px_rgba(234,88,12,0.4)] hover:shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Get Bonus
                            <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-neutral-400 text-xs sm:ml-2">*T&amp;Cs apply</p>
</div>
</div>

<div className="lg:h-[600px] flex select-none relative perspective-[2000px] items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 via-transparent to-transparent opacity-60 blur-3xl rounded-full pointer-events-none z-0"></div>

<div className="absolute -left-4 top-24 z-20 animate-float pointer-events-none">
<div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-card-hover rotate-[-12deg] flex flex-col items-center justify-center border border-white/50 ring-1 ring-orange-100/50 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/30 opacity-50"></div>
<span className="relative text-2xl font-bold text-orange-600 tracking-tight">50%</span>
<span className="relative text-[9px] font-bold text-orange-400 uppercase tracking-wider mt-0.5">Extra</span>
</div>
</div>

<div className="absolute right-4 top-12 z-0 animate-float-delayed pointer-events-none">
<div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-card rotate-[12deg] flex items-center justify-center border border-white/50 ring-1 ring-neutral-100">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:gift" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-neutral-900 rounded-[2.5rem] border-[6px] border-neutral-800 shadow-2xl rotate-[-6deg] transform hover:rotate-0 transition-transform duration-700 ease-out z-10 ring-1 ring-black/5">
<div className="absolute top-0 left-0 w-full h-full bg-neutral-50 rounded-[2.2rem] overflow-hidden flex flex-col">

<div className="relative flex text-[10px] z-20 font-semibold text-neutral-900 bg-white/80 backdrop-blur-md h-12 pr-6 pb-2 pl-6 items-end justify-between border-b border-neutral-100/50">
<span>9:41</span>
<span className="absolute left-1/2 -translate-x-1/2 bottom-2 font-medium text-orange-600 text-[10px] bg-orange-50 px-2 py-0.5 rounded-full">Bonus Active</span>
<div className="flex gap-1.5 items-center opacity-80">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:signal" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:battery-full" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10v4m4-4v4m8 0v-4M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>

<div className="bg-white px-5 pt-3 pb-4 border-b border-neutral-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex text-[10px] font-bold text-orange-600 bg-orange-50 w-8 h-8 rounded-full border border-orange-100 items-center justify-center">BL</div>
<div className="">
<div className="text-[10px] text-neutral-400 font-medium">Welcome back</div>
<div className="leading-tight text-sm font-bold text-neutral-900">Blessing *****</div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-500 bg-white hover:bg-neutral-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-hidden relative bg-neutral-50">
<div className="p-5 space-y-5">

<div className="w-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white shadow-lg shadow-neutral-900/10 relative overflow-hidden group ring-1 ring-white/10">

<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-full -mr-10 -mt-10 blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 opacity-20 rounded-full -ml-10 -mb-10 blur-xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="">
<div className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase">Total Equity</div>
<div className="text-3xl font-bold tracking-tight mt-1">$1,500.00</div>
</div>
<div className="bg-orange-600/90 backdrop-blur text-[9px] font-bold px-2 py-1 rounded text-white flex items-center gap-1 shadow-sm border border-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                                                    BOOSTED
                                                </div>
</div>
<div className="flex gap-3">
<div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
<div className="text-[9px] text-neutral-400 mb-0.5">Cash</div>
<div className="text-sm font-semibold">$1,000.00</div>
</div>
<div className="flex-1 p-2 bg-orange-500/10 rounded-lg border border-orange-500/20 backdrop-blur-sm">
<div className="text-[9px] text-orange-200 mb-0.5">Credit Bonus</div>
<div className="text-sm font-semibold text-orange-50">$500.00</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down-to-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3m-6 8l6 6l6-6m1 10H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">Deposit</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-from-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 9l-6-6l-6 6m6-6v14m-7 4h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">Withdraw</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:repeat" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg>
</div>
<span className="text-[10px] group-hover:text-neutral-900 font-medium text-neutral-600">Trade</span>
</button>
</div>

<div className="">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xs font-bold text-neutral-900">Recent Activity</h3>
<a className="text-[10px] text-orange-600 font-medium hover:text-orange-700" href="#">See all</a>
</div>
<div className="space-y-2.5">

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-neutral-100 shadow-sm relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gift" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
</div>
<div>
<div className="text-xs font-bold text-neutral-900">Welcome Bonus</div>
<div className="text-[10px] text-neutral-400">Today, 09:30 AM</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-emerald-600">+ $500.00</div>
<div className="text-[9px] text-orange-500 font-medium">Completed</div>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-neutral-100 shadow-sm group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-50 text-neutral-600 flex items-center justify-center border border-neutral-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down-left" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 7L7 17m10 0H7V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-neutral-900">Deposit (BTC)</div>
<div className="text-[10px] text-neutral-400">Today, 09:28 AM</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-neutral-900">+ $1,000.00</div>
<div className="text-[9px] text-neutral-400">Success</div>
</div>
</div>
</div>
</div>

<div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<div className="text-xs font-bold text-emerald-900">Balance Protected</div>
<div className="text-[10px] text-emerald-700 leading-tight mt-0.5">Negative balance protection is active.</div>
</div>
</div>
</div>
</div>

<div className="h-14 bg-white/90 backdrop-blur border-t border-neutral-100 flex items-center justify-between px-6 pb-1">
<button className="flex flex-col items-center gap-0.5 text-orange-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path className="" d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<span className="text-[9px] font-bold">Wallet</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[9px] font-medium">Trade</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:history" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
<span className="text-[9px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<span className="text-[9px] font-medium">Profile</span>
</button>
</div>
</div>

<div className="absolute -right-1.5 top-24 w-1.5 h-10 bg-neutral-800 rounded-r-sm shadow-sm"></div>
<div className="absolute -left-1.5 top-20 w-1.5 h-8 bg-neutral-800 rounded-l-sm shadow-sm"></div>
<div className="absolute -left-1.5 top-32 w-1.5 h-12 bg-neutral-800 rounded-l-sm shadow-sm"></div>
</div>

<div className="absolute -right-8 bottom-32 z-20 animate-float pointer-events-none">
<div className="w-16 h-16 rounded-full bg-white shadow-card rotate-6 flex items-center justify-center border-b-4 border-emerald-100">
<div className="w-12 h-12 rounded-full border border-emerald-50 flex items-center justify-center bg-emerald-50 text-emerald-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-neutral-100 py-12">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="text-[10px] text-neutral-400 font-bold mb-10 uppercase tracking-[0.2em]">Instant Deposits • Local &amp; Global Payments</p>
<div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center transition-opacity duration-500">

<div className="flex items-center group cursor-default transition-all duration-300">
<span className="font-extrabold text-2xl tracking-tight text-[#E60000] font-sans">M</span>
<span className="font-extrabold text-2xl tracking-tight text-[#43B02A] font-sans">-PESA</span>
</div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="bg-[#FFCC00] text-[#004F9F] w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-[9px] italic border border-[#FFCC00] shadow-sm">MTN</div>
<span className="font-semibold text-lg text-neutral-800 tracking-tight">MobileMoney</span>
</div>

<div className="flex items-center gap-1.5 group cursor-default transition-all duration-300">
<div className="w-8 h-8 bg-[#E60000] rounded flex items-center justify-center text-white font-semibold text-xl font-sans lowercase">a</div>
<span className="font-semibold text-lg text-neutral-800">airtel</span>
</div>

<div className="hidden md:block w-px h-8 bg-neutral-200 mx-2"></div>

<div className="flex items-center group cursor-default transition-all duration-300">
<span className="font-semibold text-3xl text-[#1A1F71] italic tracking-tight" style={{fontFamily: 'serif'}}>VISA</span>
</div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="flex relative w-10 h-7 items-center">
<div className="absolute left-0 w-6 h-6 rounded-full bg-[#EB001B] mix-blend-multiply"></div>
<div className="absolute right-0 w-6 h-6 rounded-full bg-[#FF5F00] mix-blend-multiply"></div>
</div>
<span className="font-semibold text-lg text-neutral-800 hidden sm:block">mastercard</span>
</div>

<div className="flex items-center gap-2 group cursor-default pl-2 transition-all duration-300">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center text-white z-10 ring-2 ring-white shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bitcoin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-[#26A17B] flex items-center justify-center text-white z-0 ring-2 ring-white shadow-sm">
<span className="font-semibold text-[10px]">T</span>
</div>
</div>
<span className="font-medium text-lg text-neutral-800">Crypto</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-b border-neutral-100" id="markets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Trade the World's Markets</h2>
<p className="text-neutral-500 text-lg font-light">Diversify your portfolio with access to over 1,000+ instruments across 6 asset classes.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:banknote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Forex CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Trade over 50 major, minor, and exotic currency pairs with ultra-low spreads and fast execution.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplets" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Commodities CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Access global energy and agricultural markets including Oil, Gas, Coffee, and more.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Stock CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Buy and sell shares of top global companies like Apple, Tesla, and Amazon with leverage.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-4" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-8-4V9m5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Indices CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Trade the world’s leading stock market indices including the S&amp;P 500, NASDAQ 100, and DAX 40.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bitcoin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Crypto CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Speculate on the price movements of popular cryptocurrencies like Bitcoin, Ethereum, and more 24/7.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Metals CFD</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Diversify with precious metals. Trade Gold (XAU) and Silver (XAG) with competitive spreads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-25 relative border-b border-neutral-100" id="platforms">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">World-Class Trading Platforms</h2>
<p className="text-neutral-500 text-lg font-light">Execute your strategy with precision on the world's most popular trading interfaces, available on Desktop, Web, and Mobile.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden group hover:border-orange-200 hover:shadow-card-hover transition-all duration-300 flex flex-col">
<div className="p-8 pb-0 flex-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900">MetaTrader 4</h3>
<span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-1 rounded">The Standard</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">The gold standard for forex trading. Known for its reliability, intuitive interface, and massive library of Expert Advisors (EAs).</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Advanced charting tools &amp; 30+ indicators</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Supports Automated Trading (EAs)</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Single-thread strategy tester</span>
</li>
</ul>
</div>

<div className="relative bg-neutral-100 h-64 mx-8 rounded-t-lg border-x border-t border-neutral-200 overflow-hidden flex flex-col shadow-sm">

<div className="h-8 bg-white border-b border-neutral-200 flex items-center px-3 gap-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="w-px h-4 bg-neutral-200 mx-2"></div>
<div className="w-16 h-1.5 bg-neutral-100 rounded"></div>
<div className="w-10 h-1.5 bg-neutral-100 rounded"></div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-24 bg-neutral-50 border-r border-neutral-200 p-2 space-y-2 hidden sm:block">
<div className="h-1.5 w-12 bg-neutral-200 rounded mb-3"></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-green-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-red-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-green-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-red-500/20 rounded"></div></div>
</div>

<div className="flex-1 bg-white relative p-4 flex items-end justify-between gap-1 group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">

<div className="w-full h-full flex items-end justify-around gap-1 opacity-80">
<div className="w-2 h-[40%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-10px] left-1/2 -translate-x-1/2 h-[calc(100%+20px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[30%] bg-red-500 rounded-sm relative"><div className="absolute top-[-5px] left-1/2 -translate-x-1/2 h-[calc(100%+15px)] w-px bg-red-500"></div></div>
<div className="w-2 h-[55%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-15px] left-1/2 -translate-x-1/2 h-[calc(100%+20px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[45%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-8px] left-1/2 -translate-x-1/2 h-[calc(100%+12px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[25%] bg-red-500 rounded-sm relative"><div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-[calc(100%+30px)] w-px bg-red-500"></div></div>
<div className="w-2 h-[60%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-10px] left-1/2 -translate-x-1/2 h-[calc(100%+15px)] w-px bg-emerald-500"></div></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path d="M10 100 L 40 140 L 80 80 L 120 100 L 160 150 L 200 60" fill="none" stroke="#ea580c" stroke-opacity="0.3" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute top-4 left-4 bg-white border border-neutral-200 shadow-sm rounded p-1.5 flex gap-2">
<div className="bg-red-50 text-red-600 text-[8px] font-bold px-1.5 py-0.5 rounded border border-red-100">SELL</div>
<div className="bg-emerald-50 text-emerald-600 text-[8px] font-bold px-1.5 py-0.5 rounded border border-emerald-100">BUY</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden group hover:border-orange-200 hover:shadow-card-hover transition-all duration-300 flex flex-col">
<div className="p-8 pb-0 flex-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900">MetaTrader 5</h3>
<span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">Next Gen</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">A powerful multi-asset platform. Offers superior tools for comprehensive price analysis, algorithmic trading (EAs), and copy trading.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>21 Timeframes &amp; Depth of Market (DOM)</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Built-in Economic Calendar</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Multi-threaded strategy tester</span>
</li>
</ul>
</div>

<div className="relative bg-neutral-900 h-64 mx-8 rounded-t-lg border-x border-t border-neutral-800 overflow-hidden flex flex-col shadow-lg">

<div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-3 gap-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>
<div className="w-px h-4 bg-neutral-700 mx-2"></div>
<div className="w-16 h-1.5 bg-neutral-700 rounded"></div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="flex-1 grid grid-cols-2 grid-rows-1 gap-px bg-neutral-800 p-px">

<div className="bg-neutral-900 relative p-3">
<div className="text-[8px] font-mono text-neutral-400 mb-2">EURUSD, H1</div>
<div className="flex items-end h-24 gap-0.5 justify-end">
<div className="w-1.5 h-8 bg-neutral-700 rounded-sm"></div>
<div className="w-1.5 h-12 bg-neutral-700 rounded-sm"></div>
<div className="w-1.5 h-6 bg-orange-600 rounded-sm shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
<div className="w-1.5 h-10 bg-neutral-700 rounded-sm"></div>
</div>
</div>

<div className="bg-neutral-900 relative p-3">
<div className="text-[8px] font-mono text-neutral-400 mb-2">XAUUSD, M15</div>
<svg className="w-full h-24" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 40 Q 20 30 40 35 T 80 10 L 100 20" fill="none" stroke="#22c55e" strokeWidth="1.5"></path>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22c55e', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: '0'}}></stop>
</lineargradient>
<path d="M0 40 Q 20 30 40 35 T 80 10 L 100 20 V 50 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="h-6 bg-neutral-800 border-t border-neutral-700 flex items-center px-3 justify-between">
<div className="flex gap-2">
<div className="w-8 h-1 bg-neutral-600 rounded"></div>
<div className="w-8 h-1 bg-neutral-600 rounded"></div>
</div>
<div className="w-12 h-1 bg-orange-600/50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-flex items-center gap-6 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
                         Windows / Mac
                     </span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
                         iOS / Android
                     </span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
                         Web Trader
                     </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 relative">
<div className="absolute inset-0 bg-grid-black opacity-[0.6] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Why claim the bonus?</h2>
<p className="text-neutral-500 leading-relaxed text-lg font-light">Capital is the trader's main tool. We provide more of it so you can execute your strategy without compromise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-orange-600 transition-colors iconify--lucide" data-icon="lucide:maximize" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Larger Position Sizing</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">With 50% more margin, you can open larger positions without increasing your leverage ratio, effectively managing your risk per trade more dynamically.</p>
</div>
<div className="absolute right-0 bottom-0 w-80 h-64 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-500 text-orange-600">
<svg fill="currentColor" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.3C59.6,43.1,48.3,51.8,36.4,58.6C24.5,65.4,12,70.3,-1.5,72.9C-15,75.5,-30,75.8,-43.3,69.5C-56.6,63.2,-68.2,50.3,-75.6,35.6C-83,20.9,-86.2,4.4,-82.9,-10.6C-79.6,-25.6,-69.8,-39.1,-57.4,-47.1C-45,-55.1,-30,-57.6,-16.2,-60.9C-2.4,-64.2,10.2,-68.3,30.5,-83.6" transform="translate(100 100)"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Drawdown Buffer</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Weather short-term volatility. The extra funds act as a significant buffer for your strategy during market swings.</p>
</div>
<div className="mt-8 pt-6 border-t border-dashed border-neutral-200 flex items-center gap-3 text-xs font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Negative Balance Protection
                    </div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="flex items-center justify-between mb-5">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[10px] font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-500 border border-neutral-200">AUTO</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">Instant Credit</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Funds are automatically credited to your trading account instantly after your deposit clears.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="flex items-center justify-between mb-5">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:candlestick-chart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2m8-14v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3M3 3v18h18"></path></g></svg>
</div>
<span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100">LIVE</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">Fully Tradable</h3>
<p className="text-neutral-500 text-sm leading-relaxed">The bonus isn't just for show. Use it to open trades, cover margin requirements, and generate real profit.</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-100 border-t pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-4 tracking-tight text-center text-neutral-900">Frequently Asked Questions</h2>
<p className="text-neutral-500 text-center mb-12">Everything you need to know about the 50% First Deposit Bonus</p>
<div className="grid md:grid-cols-2 gap-4">

<div className="space-y-4">

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex cursor-pointer list-none hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-700 p-5 items-center justify-between select-none">
                            Who is eligible for the bonus?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The bonus is available to new clients residing in Tanzania, Uganda, Kenya, Zambia, Zimbabwe, Rwanda, Botswana, Ghana, Nigeria, Cameroon, South Africa, Ethiopia, and India who open a Wisuno MT5 Standard account.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            What are the deposit limits?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The minimum deposit required to qualify is . The 50% bonus is capped at a maximum of  (which applies to a $1,000 deposit). Only your first deposit is eligible.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Is the bonus withdrawable?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The bonus funds are for margin support only and cannot be withdrawn. However, any profits generated using the bonus are fully withdrawable after meeting a trading volume requirement.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Do I need to verify my account?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Yes. KYC (Know Your Customer) verification must be fully completed before the bonus can be credited to your trading account.
                        </div>
</details>
</div>

<div className="space-y-4">

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            How long is the bonus valid?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The bonus is valid for  from the moment it is credited. It will be automatically removed from your account 30 days after issuance.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            What happens if I make a withdrawal?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Any withdrawal request or internal transfer made before meeting the trading requirements will result in the immediate .
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Can I use the bonus for hedging?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            No. Hedging positions (either internally within the same account or externally between multiple accounts) using the trading bonus is strictly prohibited and may result in bonus removal.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Are there strategy restrictions?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Yes. Activities such as arbitrage, scalping (rapid buying/selling in short timeframes), churning, and high-risk manipulation are classified as market abuse and are not allowed.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 text-neutral-900 border-t border-neutral-200">

<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-10">

<div className="flex gap-2 group gap-x-2 gap-y-2 items-center">
<img alt="Wisuno Logo" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66bf23d2-528c-43fa-87d9-2b0080eb3264_320w.png"/>
</div>

<h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-6">
                        Trade <span className="text-orange-600">Anytime, Anywhere</span>
</h2>

<div className="space-y-6 text-neutral-500 text-sm leading-relaxed max-w-2xl font-normal">
<p>Triple-regulated and trusted by 184,000+ traders worldwide, Wisuno delivers institutional-grade CFD trading with 12+ years of proven market expertise. Access 1,000+ CFD instruments across forex, commodities, stocks, indices, cryptocurrencies, and metals—all with lightning-fast execution (99.35% of orders under 13ms).</p>
<p>Trade with confidence on desktop or mobile using advanced trading platforms, ultra-low spreads from 0.0 pips on ECN accounts, and professional tools built to support your trading strategy—with leverage up to 2000:1.</p>
</div>

<div className="flex items-center gap-3">
<button className="bg-white text-orange-600 border border-orange-200 px-6 py-3 rounded-full text-xs font-semibold tracking-wide shadow-sm hover:-translate-y-0.5 transition-transform">MetaTrader 4</button>
<button className="bg-neutral-100 text-neutral-500 border border-neutral-200 px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:text-neutral-900 hover:bg-white hover:border-neutral-300 transition-all hover:-translate-y-0.5">MetaTrader 5</button>
</div>

<div className="">
<p className="text-[11px] text-neutral-900 font-medium italic mb-4">MetaTrader 4 available on Desktop, iOS and Android</p>
<div className="flex gap-3">
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hard-drive-download" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 2v8m4-4l-4 4l-4-4"></path><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h.01M10 18h.01"></path></g></svg>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
</div>
</div>

<div className="pt-2">
<h4 className="text-sm font-semibold mb-3 text-neutral-900">Contact</h4>
<button className="bg-white border border-neutral-200 hover:border-green-500 hover:bg-green-50 transition-all rounded-xl p-2.5 flex items-center gap-3 pr-6 group shadow-sm hover:shadow-md">
<div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-left">
<div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Start a chat on</div>
<div className="text-sm font-bold text-neutral-900 leading-none mt-0.5">WHATSAPP</div>
</div>
</button>
</div>
</div>

<div className="lg:col-span-5 pt-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">

<div className="">
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Start Trading</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Live Account</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Demo Account</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">MT4 Platform</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">MT5 Platform</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Copy Trading</a></li>
</ul>
</div>

<div className="">
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Markets</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Forex</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Crypto</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Commodities</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Indices</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Metals</a></li>
</ul>
</div>

<div>
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Accounts</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Standard</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">ECN</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">USD Cent</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Copy Trading</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Swap Free</a></li>
</ul>
</div>

<div className="">
</div></div></div></div></div></footer>
    </>
  );
}
