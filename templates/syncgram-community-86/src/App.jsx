import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="sticky top-0 z-50 w-full backdrop-blur-xl border-b bg-black/50 border-white/5">
<div className="flex max-w-7xl mx-auto px-6 h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e2e2fe] text-[#0f115e] shadow-[0_0_15px_rgba(226,226,254,0.3)]">
<svg className="lucide lucide-zap fill-current" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<span className="text-lg font-semibold text-white tracking-tight">
            Syncgram
          </span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="transition-colors hover:text-[#e2e2fe]" href="#">Product</a>
<a className="transition-colors hover:text-[#e2e2fe]" href="#">Pricing</a>
<a className="transition-colors hover:text-[#e2e2fe]" href="#">
            Showcase
          </a>
<a className="transition-colors hover:text-[#e2e2fe]" href="#">
            Resources
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium transition-colors text-slate-400 hover:text-white" href="#">
            Login
          </a>
<a className="text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-2 group bg-white text-black hover:bg-[#e2e2fe]" href="#">
<span>Get Started</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>
<main className="w-full relative">
<div className="fixed inset-0 bg-noise pointer-events-none z-0"></div>

<div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0f115e]/30 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e2e2fe]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start text-left max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e2e2fe]/20 bg-[#0f115e]/30 text-xs font-medium text-[#e2e2fe] mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#e2e2fe]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2e2fe]"></span>
</span>
                Now supporting WhatsApp Groups
              </div>
<h1 className="text-5xl lg:text-7xl tracking-tight leading-[1.05] font-semibold text-white mb-6">
                Monetize your
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e2fe] via-[#a8a8ff] to-[#6366f1]">
                  Community.
                </span>
</h1>
<p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                The all-in-one platform to automate memberships, manage access,
                and scale your paid Telegram and WhatsApp groups without the
                headache.
              </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
<button className="w-full sm:w-auto text-base font-semibold px-8 py-4 rounded-full transition-all bg-[#e2e2fe] text-[#0f115e] hover:bg-white shadow-[0_0_20px_rgba(226,226,254,0.3)] hover:shadow-[0_0_30px_rgba(226,226,254,0.5)]">
                  Start Building Free
                </button>
<button className="w-full sm:w-auto border border-white/10 text-base font-medium px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
<svg className="lucide lucide-play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
                  View Demo
                </button>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border border-black bg-slate-700 bg-[url('https://i.pravatar.cc/100?img=12')] bg-cover"></div>
<div className="w-8 h-8 rounded-full border border-black bg-slate-700 bg-[url('https://i.pravatar.cc/100?img=33')] bg-cover"></div>
<div className="w-8 h-8 rounded-full border border-black bg-slate-700 bg-[url('https://i.pravatar.cc/100?img=59')] bg-cover"></div>
<div className="w-8 h-8 rounded-full border border-black bg-[#1a1a1a] flex items-center justify-center text-[10px] text-white font-medium">
                    +2k
                  </div>
</div>
<div className="text-sm text-slate-500">
                  Trusted by
                  <span className="text-white font-medium">2,000+</span>
                  creators
                </div>
</div>
</div>

<div className="relative perspective-[2000px] w-full lg:-mr-32">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#e2e2fe] to-transparent rounded-full opacity-10 blur-2xl animate-pulse"></div>

<div className="relative rounded-2xl border border-white/10 bg-[#050505] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden transform lg:rotate-y-[-6deg] lg:rotate-x-[4deg] transition-all duration-700 hover:rotate-0 hover:scale-[1.01] flex h-[640px]">

<div className="w-[240px] flex-shrink-0 bg-[#0c0e2e] border-r border-white/5 flex flex-col justify-between py-6 px-4">
<div>
<div className="flex items-center gap-2 mb-10 px-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#e2e2fe] text-[#0f115e]">
<svg className="lucide lucide-zap fill-current" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<span className="text-base font-semibold text-white tracking-tight">
                        Syncgram
                      </span>
</div>
<div className="space-y-8">
<div>
<div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
                          General
                        </div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e2e2fe]/10 text-white text-xs font-medium border border-white/5">
<svg className="lucide lucide-layout-dashboard" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                            Overview
                          </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">
<svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                            Subscribers
                          </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">
<svg className="lucide lucide-clipboard-list" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M12 11h4"></path>
<path d="M12 16h4"></path>
<path d="M8 11h.01"></path>
<path d="M8 16h.01"></path>
</svg>
                            Waitlists
                          </div>
</div>
</div>
</div>
</div>
<div className="relative p-4 rounded-xl bg-[#e2e2fe] overflow-hidden">
<h3 className="font-bold text-[#0f115e] mb-1 text-sm">
                      Upgrade to Pro
                    </h3>
<p className="text-[10px] text-[#0f115e]/70 mb-3 leading-tight">
                      Unlock premium features and advanced tools.
                    </p>
<button className="w-full flex items-center justify-between px-3 py-2 bg-[#0f115e] rounded-lg text-[10px] font-semibold text-white hover:bg-black transition-colors">
                      Upgrade to Pro
                      <svg className="lucide lucide-external-link" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
</button>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-[#020410] relative">
<div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#020410]/80 backdrop-blur-md sticky top-0 z-20">
<h2 className="text-sm font-medium text-white">Dashboard</h2>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 bg-[url('https://i.pravatar.cc/150?img=60')] bg-cover border border-white/10"></div>
<div className="text-[10px] leading-tight">
<div className="font-medium text-white">Omotola Joseph</div>
<div className="text-slate-500">Free user</div>
</div>
</div>
</div>
<div className="flex-1 p-8 overflow-y-auto no-scrollbar">
<div className="mb-10">
<h1 className="text-2xl font-semibold text-white mb-8">
                        Good Evening Joseph 🌟
                      </h1>
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
<div>
<div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
                            Total Balance
                            <svg className="lucide lucide-info" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<div className="text-5xl font-bold tracking-tight text-white">
                            $12,500
                          </div>
</div>
<div className="flex gap-3">
<button className="px-5 py-2.5 bg-[#e2e2fe] text-[#0f115e] rounded-lg text-xs font-bold hover:bg-white transition-colors">
                            Withdraw
                          </button>
<button className="px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">
                            Access Code
                          </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5">
<div className="p-5">
<h3 className="font-semibold text-sm text-white mb-5">
                            Recent Transactions
                          </h3>
<div className="space-y-1 mt-2">
<div className="grid grid-cols-12 gap-4 px-2 py-3 text-xs text-slate-300 items-center hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="col-span-2 text-white font-medium">
                                0192JB3
                              </div>
<div className="col-span-2 text-slate-400">
                                Payment
                              </div>
<div className="col-span-4 truncate pr-4 text-slate-400 group-hover:text-slate-300">
                                Payment from boluwatife...
                              </div>
<div className="col-span-2 text-emerald-400 font-medium">
                                +$149.00
                              </div>
<div className="col-span-2 text-right">
<div className="text-[10px] text-slate-500 mb-0.5">
                                  19/11/2025
                                </div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                                  Successful
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 gradient-text">
            Powering thousands of communities
          </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
            Syncgram provides the infrastructure for creators, traders, and
            coaches to build thriving digital spaces.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#e2e2fe]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[#0f115e]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-[#050505] rounded-[22px] p-6 border border-white/5 flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0f115e] to-[#2c3099] border border-[#e2e2fe]/10 flex items-center justify-center text-[#e2e2fe] font-bold text-lg">
<svg className="lucide lucide-candlestick-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5v4"></path>
<rect height="6" rx="1" width="4" x="7" y="9"></rect>
<path d="M9 15v2"></path>
<path d="M17 3v2"></path>
<rect height="8" rx="1" width="4" x="15" y="5"></rect>
<path d="M17 13v3"></path>
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
</svg>
</div>
<div>
<h3 className="font-semibold text-white">Alpha Traders VIP</h3>
<p className="text-xs text-[#e2e2fe] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#e2e2fe] animate-pulse"></span>
                      24 active now
                    </p>
</div>
</div>
<div className="text-xs font-mono text-slate-500">TRADING</div>
</div>
<div className="space-y-3 mb-6 relative">
<div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5">
<p className="text-xs text-slate-300">
                    Entry confirmed at 142.50. Target 150. 🚀
                  </p>
</div>
<div className="bg-[#0f115e] p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto border border-[#e2e2fe]/20">
<p className="text-xs text-[#e2e2fe]">
                    Got in! Thanks for the signal.
                  </p>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<p className="text-sm text-slate-400">
                  For signal groups &amp; analysts.
                </p>
</div>
</div>
</div>

<div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#e2e2fe]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[#e2e2fe]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-[#050505] rounded-[22px] p-6 border border-white/5 flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#e2e2fe]/20 to-[#0f115e]/50 border border-[#e2e2fe]/10 flex items-center justify-center text-white font-bold text-lg">
<svg className="lucide lucide-graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
<path d="M22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>
</div>
<div>
<h3 className="font-semibold text-white">Creator Circle</h3>
<p className="text-xs text-[#e2e2fe]/80 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#e2e2fe] animate-pulse"></span>
                      12 typing...
                    </p>
</div>
</div>
<div className="text-xs font-mono text-slate-500">COACHING</div>
</div>
<div className="space-y-3 mb-6 relative">
<div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5">
<p className="text-xs text-slate-300">
                    New module is live! Check the pinned post.
                  </p>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<p className="text-sm text-slate-400">
                  For coaches &amp; educators.
                </p>
</div>
</div>
</div>

<div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#e2e2fe]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[#e2e2fe]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-[#050505] rounded-[22px] p-6 border border-white/5 flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-white to-[#e2e2fe] text-[#0f115e] flex items-center justify-center font-bold text-lg">
<svg className="lucide lucide-crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
</svg>
</div>
<div>
<h3 className="font-semibold text-white">Inner Circle</h3>
<p className="text-xs text-[#e2e2fe] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#e2e2fe] animate-pulse"></span>
                      Live Voice Chat
                    </p>
</div>
</div>
<div className="text-xs font-mono text-slate-500">PREMIUM</div>
</div>
<div className="space-y-3 mb-6 relative">
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 border border-white/5 border-dashed">
<div className="flex gap-1 items-end h-4">
<div className="w-1 bg-[#e2e2fe] h-2 animate-[bounce_1s_infinite]"></div>
<div className="w-1 bg-[#e2e2fe] h-4 animate-[bounce_1.2s_infinite]"></div>
<div className="w-1 bg-[#e2e2fe] h-3 animate-[bounce_0.8s_infinite]"></div>
</div>
<span className="ml-2 text-xs text-slate-400">
                    Voice broadcast...
                  </span>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<p className="text-sm text-slate-400">
                  For influencers &amp; personalities.
                </p>
</div>
</div>
</div>
</div>
</section>

<div className="py-24 space-y-32">

<section className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-[#0f115e]/30 border border-[#e2e2fe]/20 text-[#e2e2fe]">
<svg className="lucide lucide-bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#e2e2fe]">
                  Autopilot
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                Membership management
                <br/>
                on autopilot.
              </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Stop manually adding and removing people. Our bot handles
                everything instantly—from the moment they pay to the second
                their subscription expires.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#0f115e] border border-[#e2e2fe]/20 flex items-center justify-center text-[#e2e2fe] shrink-0">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-slate-300">
                    Instant invite links sent after payment
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#0f115e] border border-[#e2e2fe]/20 flex items-center justify-center text-[#e2e2fe] shrink-0">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-slate-300">
                    Auto-kick when subscription fails/expires
                  </span>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl">
<div className="h-14 border-b border-white/5 bg-white/5 flex items-center justify-between px-6">
<span className="text-sm font-medium text-slate-400">
                    Syncgram Bot
                  </span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-[#e2e2fe] rounded-full animate-pulse"></span>
<span className="text-xs text-[#e2e2fe]">Online</span>
</div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4 relative">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="self-start bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-message-1">
<p className="text-sm text-slate-200">
                      Hey! Your subscription for
                      <span className="text-[#e2e2fe] font-semibold">
                        VIP Signals
                      </span>
                      has expired. 🔒
                    </p>
</div>
<div className="self-center my-2 text-xs text-slate-600 font-mono animate-message-1 border border-white/5 px-3 py-1 rounded-full">
                    User removed from channel
                  </div>
<div className="self-end bg-[#0f115e] border border-[#e2e2fe]/20 rounded-2xl rounded-tr-none p-4 max-w-[80%] animate-message-2 shadow-lg">
<p className="text-sm text-white">Resubscribing now! 💳</p>
</div>
<div className="self-start bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-message-3 flex items-start gap-3">
<div className="p-2 bg-[#0f115e] rounded-lg text-[#e2e2fe]">
<svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div>
<p className="text-sm text-slate-200 mb-2">
                        Payment received! Welcome back.
                      </p>
<button className="text-xs bg-[#e2e2fe] text-[#0f115e] px-3 py-1.5 rounded-md font-semibold hover:bg-white transition-colors">
                        Join Channel
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row-reverse items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-[#0f115e]/30 border border-[#e2e2fe]/20 text-[#e2e2fe]">
<svg className="lucide lucide-globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#e2e2fe]">
                  Borderless
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                Accept payments
                <br/>
                from anywhere.
              </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Don't limit your community. Syncgram Pay creates a unified
                checkout that accepts credit cards, Apple Pay, and Crypto
                automatically.
              </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="text-2xl font-semibold text-white mb-1">135+</div>
<div className="text-sm text-slate-500">Currencies</div>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="text-2xl font-semibold text-white mb-1">0%</div>
<div className="text-sm text-slate-500">Addt'l fees</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative perspective-[1000px]">
<div className="relative h-[400px] w-full flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,17,94,0.3),transparent_70%)]"></div>
<div className="relative w-80 h-52 rounded-2xl bg-[#0f115e] border border-[#e2e2fe]/20 shadow-2xl p-6 flex flex-col justify-between animate-float z-20">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-6 bg-gradient-to-r from-[#e2e2fe] to-white rounded"></div>
<svg className="lucide lucide-wifi text-[#e2e2fe]/50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01"></path>
<path d="M2 8.82a15 15 0 0 1 20 0"></path>
<path d="M5 12.859a10 10 0 0 1 14 0"></path>
<path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
</svg>
</div>
<div>
<div className="text-[#e2e2fe]/50 text-xs font-mono mb-1">
                      CARD NUMBER
                    </div>
<div className="text-[#e2e2fe] font-mono text-lg tracking-widest">
                      **** **** **** 4291
                    </div>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-[#e2e2fe]/50 text-xs font-mono">
                        HOLDER
                      </div>
<div className="text-[#e2e2fe] text-sm">ALEXANDER M.</div>
</div>
<div className="w-8 h-8 rounded-full bg-[#e2e2fe] flex items-center justify-center">
<svg className="lucide lucide-check text-[#0f115e]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
</div>
<div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed z-10">
<svg className="w-8 h-8" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.127 3.675-.552 9.127 1.519 12.153 1.015 1.481 2.228 3.133 3.825 3.072 1.535-.06 2.116-1.002 3.96-1.002 1.84 0 2.365 1.002 3.986 0 .045 1.636-1.493 2.628-3.238 2.613-3.223-.846-2.071-4.66-8.526-4.66-8.526 3.694.137 6.365 3.136 6.365 5.547 0 .148-.005.295-.015.438 2.367-.34 4.197-1.583 4.887-2.658.077-.123.15-.249.218-.378-.002.002.002.003-.001.005zM12.03 6.643c.96-1.18 1.61-2.82 1.433-4.464-1.385.056-3.07 1.05-3.992 2.13-.845.975-1.583 2.535-1.384 4.09 1.547.12 3.125-.726 3.943-1.756z" fill="black"></path>
</svg>
</div>
<div className="absolute bottom-10 left-10 w-16 h-16 bg-[#F7931A] rounded-full shadow-lg flex items-center justify-center animate-float-delayed z-10" style={{animationDelay: '1s'}}>
<svg className="lucide lucide-bitcoin text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.279 5.343m9.125 1 2.457 2.457m-9.125-1-.347 1.971"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-[#0f115e]/30 border border-[#e2e2fe]/20 text-[#e2e2fe]">
<svg className="lucide lucide-users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#e2e2fe]">
                  Audience CRM
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                Know your people,
                <br/>
                grow your revenue.
              </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Turn anonymous usernames into real profiles. Track join dates,
                lifetime value, and engagement. Use this data to upsell and
                retain members.
              </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  #HighValue
                </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  #ChurnRisk
                </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  #VIP
                </span>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden p-6 shadow-2xl">
<div className="relative bg-white/5 border border-white/5 rounded-2xl p-6 z-10">
<div className="flex items-start justify-between mb-6">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-full bg-slate-700 bg-[url('https://i.pravatar.cc/150?img=11')] bg-cover"></div>
<div>
<h3 className="text-lg font-semibold text-white">
                          Sarah Jenkins
                        </h3>
<p className="text-slate-500 text-sm">@s.jenkins</p>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/10">
                      Active
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<div className="text-xs text-slate-500 mb-1">
                        LIFETIME VALUE
                      </div>
<div className="text-xl font-mono text-white">$1,240</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">JOINED</div>
<div className="text-sm text-white">Oct 24, 2023</div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-[#e2e2fe] text-[#0f115e] rounded-lg text-xs font-bold hover:bg-white transition-colors">
                      View Profile
                    </button>
<button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-slate-400">
<svg className="lucide lucide-message-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</button>
</div>
</div>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#e2e2fe] shadow-[0_0_15px_rgba(226,226,254,1)] animate-scan pointer-events-none opacity-50"></div>
</div>
</div>
</div>
</section>
</div>
</main>



<footer className="border-t border-white/5 py-12 mt-auto bg-black relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="zap"></i>
</div>
<span className="text-zinc-500 text-sm">© 2024 Syncgram Inc.</span>
</div>
<div className="flex gap-6 text-zinc-500">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</footer>


    </>
  );
}
