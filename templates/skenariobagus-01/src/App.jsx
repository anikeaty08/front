import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'duration-1000', 'ease-out');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => {
                el.classList.add('transition-all'); 
                observer.observe(el);
            });
        });
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-black via-transparent to-transparent z-10 pointer-events-none"></div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">

<span className="text-white text-2xl font-logo transform -rotate-2 select-none">Water</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white transition-all">
<svg className="lucide lucide-log-in w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                Create account
            </button>
</div>
</nav>

<main className="flex flex-col z-40 pt-20 pr-4 pl-4 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">For startups to global finance teams</span>
</div>

<h1 className="text-center text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Unlock the true power of <br className="hidden md:block"/>
<span className="font-display italic bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent pr-2">cashflow intelligence</span>
</h1>

<p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Keep every account, ledger, and payment stream aligned. Monitor, forecast, and act— all from a single, secure workspace designed for speed and clarity.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
<button className="group relative px-6 py-2.5 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] hover:border-white/20 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-white text-sm font-medium">Discover</span>
</div>

<div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-transparent border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition-all">
                Learn more
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="w-full max-w-[1100px] mx-auto perspective-[2000px]">

<div className="relative bg-[#09090b] rounded-2xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#09090b]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center overflow-hidden ring-2 ring-white/5">
<img alt="Avatar" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aria&amp;backgroundColor=c0aede"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Good morning, Aria</span>
<span className="text-[10px] text-gray-500">Overview</span>
</div>
</div>
<div className="flex items-center gap-4 text-gray-500">
<svg className="lucide lucide-search w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-bell w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<svg className="lucide lucide-settings w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0c0c0e]">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="bg-[#131315] rounded-xl p-6 border border-white/5 relative group">
<div className="flex justify-between items-start mb-2">
<span className="text-sm text-gray-400">Total Balance</span>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight">$842,910.23</span>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium text-emerald-400">+12.7% this month</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                    Transfer
                                </button>
<button className="flex-1 bg-[#1e1e20] hover:bg-[#252527] border border-white/5 text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-arrow-down-left w-4 h-4" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
                                    Request
                                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">USD Wallet</span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+3.1%</span>
</div>
<div className="text-xl font-medium text-white tracking-tight">$312,870</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">EUR Wallet</span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+1.4%</span>
</div>
<div className="text-xl font-medium text-white tracking-tight">€154,260</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">GBP Wallet</span>
<span className="text-[10px] text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">-0.6%</span>
</div>
<div className="text-xl font-medium text-white tracking-tight">£98,540</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">Crypto</span>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+7.9%</span>
</div>
<div className="text-xl font-medium text-white tracking-tight">₿12.04</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#131315] rounded-xl border border-white/5 p-6 flex flex-col h-full">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-medium text-gray-200">Income vs Spend</span>
<div className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 cursor-pointer hover:bg-white/10">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Last 12 mo</span>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 mb-6 min-h-[140px]">


<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-8 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-14 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-12 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-24 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-32 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-20 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-16 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-36 group-hover:bg-white/20 transition-all"></div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group">
<div className="w-full bg-white/10 rounded-t-sm h-12 group-hover:bg-white/20 transition-all"></div>
</div>
</div>

<div className="flex justify-between text-[10px] text-gray-500 border-t border-white/5 pt-2">
<span>$0</span>
<span>$50k</span>
<span>$100k</span>
</div>

<div className="grid grid-cols-2 gap-4 mt-6">
<div className="bg-[#1a1a1c] p-3 rounded-lg border border-white/5">
<div className="text-[10px] text-gray-500 mb-1">Total Income</div>
<div className="text-sm font-medium text-white">$126,400</div>
</div>
<div className="bg-[#1a1a1c] p-3 rounded-lg border border-white/5">
<div className="text-[10px] text-gray-500 mb-1">Total Spend</div>
<div className="text-sm font-medium text-white">$78,950</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main><section className="overflow-hidden flex flex-col bg-[#030303] w-full pt-32 pb-32 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-emerald-900/10 via-emerald-900/5 to-transparent blur-[100px] -z-10 pointer-events-none"></div>

<div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">

<div className="reveal-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-emerald-400 text-xs font-medium mb-8 hover:bg-white/10 transition-colors cursor-default transition-all">
<svg className="lucide lucide-globe w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Global Ecosystem</span>
</div>

<h2 className="reveal-element delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl transition-all">
            Join 15,000+ finance pioneers 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">transforming the industry</span>
</h2>

<p className="reveal-element delay-200 text-lg text-gray-400 max-w-2xl mb-10 font-light leading-relaxed transition-all">
            Connect with CFOs, treasury experts, and founders from 120+ countries redefining how modern capital flows and grows.
        </p>

<button className="reveal-element delay-300 group relative px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)]">
<span className="relative z-10 flex items-center gap-2 text-emerald-950 font-semibold text-sm">
                Access the Network
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>

<div className="w-full max-w-7xl mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 px-4">

<div className="reveal-element delay-[400ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3abecb91-7a25-48a9-994b-1afb799b6db7_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Elena R.</span>
</div>
</div>

<div className="reveal-element delay-[450ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c13ef29b-044c-451f-bd58-309e4e18991a_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">David K.</span>
</div>
</div>

<div className="reveal-element delay-[500ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca24203-35d4-4043-a007-591a487cbc43_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Sarah L.</span>
</div>
</div>

<div className="reveal-element delay-[550ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08f72a02-8995-40f8-9680-f1c42c9d5aae_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Marcus T.</span>
</div>
</div>

<div className="reveal-element delay-[600ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3d4d588-f8cc-4129-8a9b-d0f004d15ab4_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Priya M.</span>
</div>
</div>

<div className="reveal-element delay-[650ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffe72e43-4af9-46c9-85c3-07c3f7705f9a_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">James W.</span>
</div>
</div>

<div className="reveal-element delay-[700ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Aiko N.</span>
</div>
</div>

<div className="reveal-element delay-[750ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/048e5eb9-a8ee-421c-bbae-c58b2f9b80eb_800w.webp" style={{}}/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-xs font-medium">Omar F.</span>
</div>
</div>

<div className="reveal-element delay-[800ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-xs font-medium">Linda B.</span>
</div>
</div>

<div className="reveal-element delay-[850ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Tom H.</span>
</div>
</div>

<div className="reveal-element delay-[900ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35e4d1f8-bfb2-466b-b7a6-e5aff58b226a_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Sophie K.</span>
</div>
</div>

<div className="reveal-element delay-[950ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c5de88f-ee46-4879-af40-1a1a29aa03fb_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium">Ryan G.</span>
</div>
</div>
</div>
</div>


</section><section className="overflow-hidden bg-[#030303] w-full pt-24 pb-24 relative">
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col">
<span className="reveal-element text-gray-500 font-medium mb-4 text-sm transition-all">Intelligence Platform</span>
<h2 className="reveal-element delay-100 text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-12 transition-all">
                    Financial operations that think ahead.
                </h2>

<div className="relative space-y-10 pl-4 mb-16">

<div className="bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-blue-500/10 w-[1px] absolute top-2 bottom-2 left-[7px]"></div>

<div className="reveal-element delay-200 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-emerald-400 font-medium text-lg mb-1 group-hover:text-emerald-300 transition-colors">Real-time reconciliation</h3>
<p className="text-gray-500 leading-relaxed text-sm">AI-powered transaction matching across 200+ accounts</p>
</div>

<div className="reveal-element delay-300 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-cyan-500 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-cyan-400 font-medium text-lg mb-1 group-hover:text-cyan-300 transition-colors">Predictive cashflow</h3>
<p className="text-gray-500 leading-relaxed text-sm">30-day ML forecasts with 98.5% accuracy</p>
</div>

<div className="reveal-element delay-400 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-sky-500 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-sky-500 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-sky-400 font-medium text-lg mb-1 group-hover:text-sky-300 transition-colors">Automated workflows</h3>
<p className="text-gray-500 leading-relaxed text-sm">Smart rules that adapt to your finance operations</p>
</div>
</div>

<div className="reveal-element delay-500 mb-8 transition-all">
<h4 className="text-white font-semibold mb-2">Intelligent by design</h4>
<p className="text-gray-500 leading-relaxed text-sm max-w-md">
                        From treasury management to payment orchestration, every feature is built to give you clarity and control at enterprise scale.
                    </p>
</div>

<div className="reveal-element delay-500 transition-all">
<button className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
                        Explore capabilities
                        <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-125 transition-transform"></div>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="reveal-element delay-200 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Treasury" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg className="lucide lucide-credit-card" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="px-2.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-medium text-white/90">Treasury</span>
</div>

<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Multi-currency ops</h4>
</div>
</div>

<div className="reveal-element delay-300 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Collections" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg className="lucide lucide-wallet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<span className="px-2.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-medium text-white/90">Payments</span>
</div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Smart collections</h4>
</div>
</div>

<div className="reveal-element delay-400 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Access" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="px-2.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-medium text-white/90">Teams</span>
</div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Role-based access</h4>
</div>
</div>

<div className="reveal-element delay-500 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Dashboards" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg className="lucide lucide-user-cog" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m21.7 16.4-.9-.3"></path><path d="m15.2 13.9-.9-.3"></path><path d="m16.6 18.7.3-.9"></path><path d="m19.1 12.2.3-.9"></path><path d="m19.6 18.7-.4-1"></path><path d="m16.8 12.3-.4-1"></path><path d="m14.3 16.6 1-.4"></path><path d="m20.7 13.8 1-.4"></path></svg>
</div>
<span className="px-2.5 py-1 rounded-full border border-white/20 bg-emerald-500/20 backdrop-blur-md text-[10px] font-medium text-emerald-100">Analytics</span>
</div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Executive dashboards</h4>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full bg-[#030303] pb-24 relative">
<div className="container mx-auto px-4 sm:px-6 max-w-7xl">

<div className="bg-[#0A0A0B] border border-white/5 rounded-[32px] p-6 md:p-10 mb-8 relative overflow-hidden group">

<div className="flex items-center justify-between mb-10 px-2">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Featured Financial Solutions</h3>
<a className="group/link flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">
                    View all 
                    <svg className="lucide lucide-arrow-up-right transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">

<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#38bdf8] text-[10px] font-semibold uppercase tracking-wide">Popular</span>
<img alt="Treasury" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>

<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">Multi-Currency Treasury</h4>
<span className="text-white font-semibold text-sm">Enterprise</span>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center gap-1.5 text-gray-500">
<svg className="lucide lucide-map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs">Global Operations</span>
</div>
<span className="w-0.5 h-0.5 bg-gray-600 rounded-full"></span>
<span className="text-[10px] text-gray-600">150+ currencies • Real-time FX</span>
</div>
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
<svg className="lucide lucide-eye" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                View demo
                            </button>
<button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/10 transition-all">
<svg className="lucide lucide-heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
</div>

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#a78bfa] text-[10px] font-semibold uppercase tracking-wide">Advanced</span>
<img alt="Reconciliation" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">Automated Reconciliation</h4>
<span className="text-white font-semibold text-sm">Premium</span>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center gap-1.5 text-gray-500">
<svg className="lucide lucide-map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs">All Regions</span>
</div>
<span className="w-0.5 h-0.5 bg-gray-600 rounded-full"></span>
<span className="text-[10px] text-gray-600">AI-powered • 99.8% accuracy</span>
</div>
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
<svg className="lucide lucide-eye" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                View demo
                            </button>
<button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/10 transition-all">
<svg className="lucide lucide-heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
</div>

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-white/90 border border-white/20 text-black text-[10px] font-semibold uppercase tracking-wide">Live Now</span>
<img alt="Forecasting" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">Cash Flow Forecasting</h4>
<span className="text-white font-semibold text-sm">Standard</span>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center gap-1.5 text-gray-500">
<svg className="lucide lucide-map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs">SMB to Enterprise</span>
</div>
<span className="w-0.5 h-0.5 bg-gray-600 rounded-full"></span>
<span className="text-[10px] text-gray-600">30-day predictions • ML models</span>
</div>
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
<svg className="lucide lucide-git-branch" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                                Get started
                            </button>
<button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/10 transition-all">
<svg className="lucide lucide-heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-[#060807]">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060807] to-emerald-950/40 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#060807] to-transparent pointer-events-none"></div>
<div className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-900/10 text-emerald-400 text-xs font-medium mb-8">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Ready to transform your finance operations?</span>
</div>

<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 max-w-4xl leading-[1.1]">
                    Start your journey to financial clarity
                </h2>

<p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-12 font-light">
                    Join thousands of finance teams using Quantivo to streamline operations, forecast with confidence, and scale with ease.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        Get started free
                    </button>
<button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3.5 rounded-full font-medium text-white transition-all">
                        Schedule a demo
                        <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section><footer className="bg-[#030303] w-full pt-24 pb-12 relative border-t border-white/5 text-gray-400">
<div className="container mx-auto px-4 sm:px-6 max-w-7xl">

<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Water</h2>
<p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                Financial intelligence for modern companies. Connect your accounts, automate reconciliation, and forecast with confidence.
            </p>
</div>

<div className="bg-[#0e0e10] border border-white/5 rounded-3xl p-6 md:p-10 lg:p-12 mb-24 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                            Available 24/7
                        </div>
<h3 className="text-xl font-medium text-white mb-8">Get in touch</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-emerald-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Enterprise-grade security and compliance</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-emerald-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Dedicated implementation support</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-emerald-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Flexible pricing for teams of all sizes</span>
</li>
</ul>
</div>
<div className="mt-auto pt-8 lg:pt-0">
<a className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors text-sm font-medium" href="mailto:hello@quantivo.io">
<svg className="lucide lucide-mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            hello@quantivo.io
                        </a>
</div>
</div>

<div className="lg:col-span-8">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Your name</label>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Email</label>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Company</label>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="Acme Inc." type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">I'm interested in</label>
<div className="relative">
<select className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer">
<option>Scheduling a demo</option>
<option>Pricing information</option>
<option>Technical support</option>
<option>Partnership</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Message</label>
<textarea className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none" placeholder="Tell us about your financial operations needs..." rows="4"></textarea>
</div>
<div className="flex justify-end pt-2">
<button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-medium px-6 py-2.5 rounded-lg text-sm transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] flex items-center gap-2" type="button">
<svg className="lucide lucide-send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                                Send message
                            </button>
</div>
</form>
</div>
</div>
</div>
<div className="w-full h-px bg-white/5 mb-16"></div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">

<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Product</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-sm hover:text-white transition-colors" href="#">Security</a>
<a className="text-sm hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Solutions</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Startups</a>
<a className="text-sm hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-sm hover:text-white transition-colors" href="#">Treasury</a>
<a className="text-sm hover:text-white transition-colors" href="#">Accounting</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Company</h4>
<a className="text-sm hover:text-white transition-colors" href="#">About</a>
<a className="text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-sm hover:text-white transition-colors" href="#">Contact</a>
<a className="text-sm hover:text-white transition-colors" href="#">Press</a>
</div>

<div className="col-span-2 md:col-span-3 lg:col-span-2">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">Stay Updated</h4>
<form className="flex gap-2 mb-8">
<div className="relative flex-grow">
<svg className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-all" placeholder="you@example.com" type="email"/>
</div>
<button className="bg-white hover:bg-gray-100 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors" type="button">Join</button>
</form>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-github" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-twitter" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 Water. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<span className="w-0.5 h-0.5 rounded-full bg-gray-700"></span>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span className="w-0.5 h-0.5 rounded-full bg-gray-700"></span>
<button className="hover:text-white transition-colors flex items-center gap-1 group" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    Back to top 
                    <svg className="lucide lucide-arrow-up transition-transform group-hover:-translate-y-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<a className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 hover:bg-[#252525] transition-colors group" href="#">
<div className="w-5 h-5 bg-[#333] rounded flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-white">A</div>
<span className="text-xs text-gray-400 group-hover:text-white">Made in Aura</span>
</a>
</div>


    </>
  );
}
