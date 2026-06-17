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
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
},
slate: {
850: '#1f2937',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'glow': '0 0 40px -10px rgba(249, 115, 22, 0.15)',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<header className="relative z-10 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0">
<div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 bg-brand-500 rounded-md flex items-center justify-center text-white shadow-sm">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="2.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">FoxPrep</span>
</div>
<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
<span className="iconify text-emerald-600" data-icon="lucide:lock" data-strokeWidth="2" data-width="12"></span>
<span className="text-[11px] font-medium text-slate-600 tracking-tight uppercase">Bank of Georgia Secure</span>
</div>
</div>
</header>
<main className="relative z-10 max-w-2xl mx-auto px-6 pt-10 pb-24">

<div className="text-center mb-12 animate-fade-in">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-900 text-xs font-medium mb-6 border border-brand-100 shadow-sm">
                Request for Giorgi
            </div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                Full exam preparation suite.
            </h1>
<p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
                Secure access for Giorgi until July 2026. <br className="hidden sm:block"/>Built on the official NAEC format.
            </p>
</div>

<div className="mb-12 relative group select-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-500/10 blur-3xl rounded-full -z-10"></div>
<div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden max-w-sm mx-auto transform transition hover:scale-[1.01] duration-500">

<div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between bg-slate-50/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Student Dashboard</div>
</div>

<div className="p-5">
<div className="flex justify-between items-end mb-4">
<div>
<div className="text-xs text-slate-400 mb-1">Weak Topic Detected</div>
<div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
<span className="iconify text-brand-500" data-icon="lucide:alert-circle" data-width="14"></span>
                                Geometry: Vectors
                            </div>
</div>
<div className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded border border-brand-100">
                            +15% Improvement
                        </div>
</div>

<div className="h-16 flex items-end justify-between gap-1">
<div className="w-full bg-slate-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-brand-500 rounded-t-sm h-[90%] relative group-hover:h-[95%] transition-all duration-700"></div>
</div>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-3 font-medium">Actual interface: Progress tracking &amp; targeted quizzes</p>
</div>

<div className="relative bg-white rounded-2xl shadow-subtle border border-slate-200 overflow-hidden mb-16">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 to-amber-500"></div>
<div className="p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">ONE-TIME PAYMENT</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-900">₾59</span>
<span className="text-lg text-slate-400 font-normal line-through decoration-slate-300">₾89</span>
</div>
<p className="text-xs text-slate-500 mt-1">Full access until July 2026</p>
</div>
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-emerald-600 mb-0.5">Save ₾30</div>
<div className="text-xs text-slate-400">Parent discount applied</div>
</div>
</div>

<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<div className="mt-0.5 p-0.5 rounded-full bg-brand-50 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-sm text-slate-700">Unlimited practice tests (NAEC style)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-0.5 rounded-full bg-brand-50 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-sm text-slate-700">Auto-generated quizzes for weak topics</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 p-0.5 rounded-full bg-brand-50 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-sm text-slate-700">Step-by-step explanations for every mistake</span>
</li>
</ul>

<a className="group relative w-full bg-slate-900 hover:bg-slate-800 text-white font-medium h-12 rounded-lg flex items-center justify-between px-4 transition-all active:scale-[0.99] shadow-lg shadow-slate-900/10 overflow-hidden" href="#">
<span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
<span className="relative z-10 pl-2">Continue to Bank of Georgia</span>
<span className="relative z-10 flex items-center gap-2 pr-2 text-slate-400 group-hover:text-white transition-colors">
<span className="text-xs font-normal">Secure checkout</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</a>
<div className="mt-4 flex items-center justify-center gap-2">
<span className="iconify text-slate-300" data-icon="lucide:lock" data-width="12"></span>
<span className="text-[11px] text-slate-400">FoxPrep does not store card data.</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-2">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:target" data-width="18"></span>
                    Smart Preparation
                </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Instead of random quizzes, the platform identifies exactly where Giorgi struggles and creates custom practice sets to fix those specific gaps.
                </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:bar-chart-2" data-width="18"></span>
                    Visible Progress
                </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    You and Giorgi can see score improvements in real-time. It provides the structure of a tutor session, available 24/7.
                </p>
</div>
</div>

<div className="border-y border-slate-100 py-10 mb-16">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">N</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">G</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">D</div>
</div>
<div className="flex flex-col">
<div className="flex gap-0.5 text-amber-400 mb-0.5">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
<span className="text-xs font-medium text-slate-700">Trusted by 12,000+ students in Georgia</span>
</div>
</div>
<p className="text-sm text-slate-600 italic">"The explanations are what makes the difference. My son finally understands why he got the answer wrong, not just that it was wrong."</p>
<p className="text-xs text-slate-400 mt-2 font-medium">— Nino K., Parent in Tbilisi</p>
</div>

<div className="max-w-xl mx-auto space-y-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 text-center">Common Questions</h4>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer transition-colors hover:border-slate-300">
<summary className="flex items-center justify-between p-4 font-medium text-slate-900 text-sm select-none">
                    What happens after payment?
                    <span className="iconify text-slate-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed pt-1">
                    Giorgi’s account is instantly upgraded to Premium. He will have uninterrupted access until July 2026.
                </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer transition-colors hover:border-slate-300">
<summary className="flex items-center justify-between p-4 font-medium text-slate-900 text-sm select-none">
                    Is this a subscription?
                    <span className="iconify text-slate-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed pt-1">
                    No. This is a one-time payment of ₾59. You will not be charged again.
                </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer transition-colors hover:border-slate-300">
<summary className="flex items-center justify-between p-4 font-medium text-slate-900 text-sm select-none">
                    Is the payment secure?
                    <span className="iconify text-slate-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed pt-1">
                    Absolutely. The payment is processed directly on Bank of Georgia's secure checkout page. We do not see or store your card details.
                </div>
</details>
</div>

<footer className="mt-20 pt-8 border-t border-slate-200 text-center">
<div className="flex items-center justify-center gap-6 mb-6">
<a className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="mailto:support@foxprep.ai">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                    support@foxprep.ai
                </a>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest">
                © 2025 FoxPrep AI
            </p>
</footer>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 p-4 md:hidden z-50 pb-[env(safe-area-inset-bottom)]">
<div className="flex items-center gap-4 max-w-lg mx-auto">
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-900">₾59.00</span>
<span className="text-[10px] text-slate-500 font-medium">One-time payment</span>
</div>
<a className="flex-1 bg-slate-900 text-white font-medium h-11 rounded-lg flex items-center justify-center shadow-lg active:scale-[0.97] transition-transform text-sm" href="#">
                Secure Checkout (BoG)
            </a>
</div>
</div>

    </>
  );
}
