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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab Navigation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const tabPanes = document.querySelectorAll('.tab-pane');

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('data-tab');

                    // Reset all links styles
                    navLinks.forEach(l => {
                        l.classList.remove('bg-zinc-50', 'text-zinc-900');
                        l.classList.add('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');
                    });
                    
                    // Activate clicked link
                    link.classList.add('bg-zinc-50', 'text-zinc-900');
                    link.classList.remove('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');

                    // Show corresponding tab pane
                    tabPanes.forEach(pane => {
                        if(pane.id === target) {
                            pane.classList.remove('hidden');
                            pane.classList.add('block', 'animate-fade-in');
                        } else {
                            pane.classList.add('hidden');
                            pane.classList.remove('block', 'animate-fade-in');
                        }
                    });
                });
            });

            // 3D Tilt Effect Logic
            const tiltElements = document.querySelectorAll('.tilt-effect');
            
            tiltElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    
                    // Calculate mouse position relative to element center
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate rotation angles (max 8 degrees for subtlety)
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    // Apply transform inline
                    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
                });
                
                // Reset transform when mouse leaves
                el.addEventListener('mouseleave', () => {
                    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                });
            });
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
      

<header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-zinc-200 sticky top-0 z-50">
<div className="text-xl font-semibold tracking-tighter text-zinc-900">BNK</div>
<button className="p-2 text-zinc-500 hover:text-zinc-900 bg-zinc-50 rounded-md">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-zinc-200 h-screen sticky top-0 shrink-0 z-50">
<div className="p-6 pb-2">
<div className="text-2xl font-semibold tracking-tighter text-zinc-900">BNK</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">
<nav className="space-y-1">
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Menu</p>
<a className="nav-link flex items-center gap-3 px-3 py-2 bg-zinc-50 text-zinc-900 rounded-md font-medium text-sm transition-colors" data-tab="dashboard" href="#">
<iconify-icon className="text-lg" icon="solar:home-angle-linear"></iconify-icon>
                    Dashboard
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md font-medium text-sm transition-colors" data-tab="accounts" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                    Accounts
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md font-medium text-sm transition-colors" data-tab="transfers" href="#">
<iconify-icon className="text-lg" icon="solar:transfer-horizontal-linear"></iconify-icon>
                    Transfers
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md font-medium text-sm transition-colors" data-tab="payments" href="#">
<iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon>
                    Payments
                </a>
</nav>
<nav className="space-y-1">
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Settings</p>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md font-medium text-sm transition-colors" data-tab="profile" href="#">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
                    Profile
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md font-medium text-sm transition-colors" data-tab="security" href="#">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear"></iconify-icon>
                    Security
                </a>
</nav>
</div>
<div className="p-4 border-t border-zinc-200">
<button className="flex items-center gap-3 px-3 py-2 w-full text-zinc-500 hover:text-red-600 hover:bg-red-50 rounded-md font-medium text-sm transition-colors text-left">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon>
                Sign out
            </button>
</div>
</aside>

<main className="flex-1 min-w-0 flex flex-col relative z-0">

<nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white/50 backdrop-blur-sm border-b border-zinc-200/50 sticky top-0 z-40">
<div className="text-sm font-medium text-zinc-500">
                Good morning, <span className="text-zinc-900">Alexander</span>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-200 border border-zinc-300 overflow-hidden flex items-center justify-center text-xs font-medium text-zinc-600">
                    AL
                </div>
</div>
</nav>

<div className="tab-pane block p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6 animate-fade-in" id="dashboard">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Track your balances, recent transactions, and spending.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    Add Money
                </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 lg:col-span-2 bg-zinc-900 text-white rounded-2xl p-6 md:p-8 relative shadow-sm flex flex-col justify-between min-h-[14rem] tilt-effect" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start" style={{transform: 'translateZ(40px)'}}>
<div>
<p className="text-sm text-zinc-400 font-medium mb-1">Total Available Balance</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">$42,590.50</h2>
</div>
<div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 hidden sm:block">
<iconify-icon className="text-xl text-white" icon="solar:wallet-linear"></iconify-icon>
</div>
</div>
<div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10" style={{transform: 'translateZ(20px)'}}>
<div>
<p className="text-xs text-zinc-400 mb-0.5">Checking (...4920)</p>
<p className="text-sm font-medium text-zinc-100">$12,050.00</p>
</div>
<div>
<p className="text-xs text-zinc-400 mb-0.5">Savings (...8193)</p>
<p className="text-sm font-medium text-zinc-100">$30,540.50</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col z-10">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-4">Quick Transfer</h3>
<div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
<button className="flex flex-col items-center gap-2 min-w-[4rem] group">
<div className="w-12 h-12 rounded-full border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500">New</span>
</button>
<button className="flex flex-col items-center gap-2 min-w-[4rem]">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">SM</div>
<span className="text-xs font-medium text-zinc-900">Sarah</span>
</button>
<button className="flex flex-col items-center gap-2 min-w-[4rem]">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<span className="text-xs font-medium text-zinc-900">John</span>
</button>
</div>
<div className="mt-auto space-y-3">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pl-7 pr-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-shadow" placeholder="0.00" type="text"/>
</div>
<button className="w-full bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                            Send Money
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Cash Flow</h3>
<select className="bg-transparent text-xs font-medium text-zinc-500 focus:outline-none cursor-pointer">
<option>This Week</option>
<option>This Month</option>
<option>This Year</option>
</select>
</div>
<div className="flex-1 flex items-end justify-between gap-2 h-40 mt-auto">
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '30%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '40%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Mon</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '50%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '20%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Tue</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '20%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '60%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Wed</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '70%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '30%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Thu</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '40%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '50%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Fri</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '60%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '40%'}}></div>
<span className="text-xs text-zinc-900 font-medium text-center mt-2">Sat</span>
</div>
<div className="w-full flex flex-col justify-end gap-1 group">
<div className="bg-blue-100 group-hover:bg-blue-200 w-full rounded-sm transition-colors" style={{height: '30%'}}></div>
<div className="bg-zinc-900 w-full rounded-sm transition-colors" style={{height: '20%'}}></div>
<span className="text-xs text-zinc-400 text-center mt-2">Sun</span>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-900"></div>
<span className="text-xs text-zinc-500">Income</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-100"></div>
<span className="text-xs text-zinc-500">Expenses</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col perspective-1000">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Active Card</h3>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>

<div className="bg-zinc-900 text-white rounded-xl p-5 relative shadow-lg flex-1 flex flex-col justify-between min-h-[11rem] tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 opacity-50 rounded-xl pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<span className="text-xs font-medium tracking-widest text-zinc-300">DEBIT</span>
<iconify-icon className="text-xl text-zinc-400" icon="solar:sim-card-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-auto" style={{transform: 'translateZ(30px)'}}>
<p className="text-lg tracking-widest font-medium mb-1 drop-shadow-md">**** **** **** 4920</p>
<div className="flex justify-between items-end text-xs text-zinc-400">
<span className="drop-shadow-sm">ALEXANDER DOE</span>
<span className="drop-shadow-sm">12/26</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-4">
<span className="text-sm text-zinc-500">Card Status</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden">
<div className="flex items-center justify-between p-6 border-b border-zinc-100">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Recent Transactions</h3>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">View All</a>
</div>
<div className="flex flex-col">
<div className="flex items-center justify-between p-4 px-6 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0 group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-white transition-colors">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Apple Store</p>
<p className="text-xs text-zinc-500 mt-0.5">Oct 24, 2023 • Electronics</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-zinc-900">-$1,299.00</p>
<span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-700 bg-green-100 rounded-full">Completed</span>
</div>
</div>
<div className="flex items-center justify-between p-4 px-6 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0 group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-white transition-colors">
<iconify-icon className="text-xl text-green-600" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Salary Deposit</p>
<p className="text-xs text-zinc-500 mt-0.5">Oct 22, 2023 • Income</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-green-600">+$4,500.00</p>
<span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-700 bg-green-100 rounded-full">Completed</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-pane hidden p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6" id="accounts">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Accounts</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your checking, savings, and credit accounts.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
                    Open Account
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm flex flex-col justify-between tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start mb-8" style={{transform: 'translateZ(10px)'}}>
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-500 uppercase">Checking Account</h3>
<p className="text-xs text-zinc-400 mt-1">**** **** 4920</p>
</div>
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-200">
<iconify-icon className="text-xl text-zinc-600" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
<div style={{transform: 'translateZ(20px)'}}>
<p className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">$12,050.00</p>
<div className="flex gap-2">
<button className="flex-1 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 py-2 rounded-lg text-xs font-medium transition-colors">Deposit</button>
<button className="flex-1 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 py-2 rounded-lg text-xs font-medium transition-colors">Transfer</button>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-white tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start mb-8" style={{transform: 'translateZ(10px)'}}>
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-400 uppercase">Savings Account</h3>
<p className="text-xs text-zinc-500 mt-1">**** **** 8193</p>
</div>
<div className="p-2 bg-white/10 rounded-lg border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:safe-2-linear"></iconify-icon>
</div>
</div>
<div style={{transform: 'translateZ(20px)'}}>
<p className="text-3xl font-semibold tracking-tight text-white mb-4">$30,540.50</p>
<div className="flex gap-2">
<button className="flex-1 bg-white/10 border border-white/20 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-medium transition-colors">Add Funds</button>
<button className="flex-1 bg-white border border-white hover:bg-zinc-100 text-zinc-900 py-2 rounded-lg text-xs font-medium transition-colors">Withdraw</button>
</div>
</div>
</div>
</div>
</div>

<div className="tab-pane hidden p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6" id="transfers">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Transfers</h1>
<p className="text-sm text-zinc-500 mt-1">Send money to internal accounts or external contacts.</p>
</div>
</div>
<div className="max-w-2xl bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/80 shadow-sm tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div style={{transform: 'translateZ(10px)'}}>
<div className="mb-6 space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">From Account</label>
<select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 cursor-pointer">
<option>Checking (...4920) - $12,050.00</option>
<option>Savings (...8193) - $30,540.50</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">To Recipient</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-shadow" placeholder="Name, Email, or Account Number" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm font-medium">$</span>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 pl-7 pr-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-shadow" placeholder="0.00" type="number"/>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm">
                        Confirm Transfer
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tab-pane hidden p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6" id="payments">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Payments</h1>
<p className="text-sm text-zinc-500 mt-1">Manage scheduled bills and subscriptions.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    New Bill
                </button>
</div>
<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="flex items-center justify-between p-6 border-b border-zinc-100" style={{transform: 'translateZ(5px)'}}>
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Upcoming Bills</h3>
</div>
<div className="flex flex-col" style={{transform: 'translateZ(15px)'}}>
<div className="flex items-center justify-between p-4 px-6 hover:bg-zinc-50 transition-colors border-b border-zinc-100 group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-white transition-colors">
<iconify-icon className="text-xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Rent Payment</p>
<p className="text-xs text-zinc-500 mt-0.5">Due Oct 31, 2023</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-zinc-900">-$2,100.00</p>
<span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-700 bg-amber-100 rounded-full">Scheduled</span>
</div>
</div>
<div className="flex items-center justify-between p-4 px-6 hover:bg-zinc-50 transition-colors border-b border-zinc-100 group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Electric Utility</p>
<p className="text-xs text-zinc-500 mt-0.5">Due Nov 02, 2023</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-zinc-900">-$145.20</p>
<span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-700 bg-amber-100 rounded-full">Scheduled</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-pane hidden p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6" id="profile">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Profile Settings</h1>
<p className="text-sm text-zinc-500 mt-1">Update your personal details and preferences.</p>
</div>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/80 shadow-sm max-w-2xl tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="flex items-center gap-6 mb-8" style={{transform: 'translateZ(15px)'}}>
<div className="h-20 w-20 rounded-full bg-zinc-100 border-2 border-zinc-200 overflow-hidden flex items-center justify-center text-2xl font-medium text-zinc-400">
                        AL
                    </div>
<div>
<button className="bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-xs font-medium transition-colors">
                            Change Avatar
                        </button>
</div>
</div>
<div className="space-y-4" style={{transform: 'translateZ(10px)'}}>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">First Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900" type="text" value="Alexander"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Last Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900" type="text" value="Doe"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900" type="email" value="alexander.doe@example.com"/>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto mt-4 shadow-sm">
                        Save Changes
                    </button>
</div>
</div>
</div>

<div className="tab-pane hidden p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 space-y-6" id="security">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Security</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your account security and authentication.</p>
</div>
</div>
<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm max-w-2xl overflow-hidden tilt-effect" style={{transformStyle: 'preserve-3d'}}>
<div className="p-6 border-b border-zinc-100 flex items-center justify-between" style={{transform: 'translateZ(5px)'}}>
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Two-Factor Authentication</h3>
<p className="text-xs text-zinc-500 mt-0.5">Add an extra layer of security to your account.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</div>
<div className="p-6 border-b border-zinc-100 flex items-center justify-between" style={{transform: 'translateZ(10px)'}}>
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Login Notifications</h3>
<p className="text-xs text-zinc-500 mt-0.5">Get alerted when signed in from a new device.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</div>
<div className="p-6 flex items-center justify-between" style={{transform: 'translateZ(15px)'}}>
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Change Password</h3>
<p className="text-xs text-zinc-500 mt-0.5">Last updated 3 months ago.</p>
</div>
<button className="bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-xs font-medium transition-colors">
                        Update
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
