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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-medium tracking-tight text-lg">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                NEXUS
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Start for free</a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Nexus AI 2.0 is now available
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 text-glow leading-[1.1]">
                    Customer relationships,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">reimagined for speed.</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    The intelligent CRM designed for high-growth teams. Automate outreach, enrich leads, and visualize your entire pipeline without the clutter.
                </p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-neutral-900 border border-neutral-800 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative max-w-6xl mx-auto perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-float">

<div className="h-10 border-b border-white/5 bg-neutral-900/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="ml-4 flex-1 max-w-md">
<div className="h-6 bg-neutral-800/50 rounded-md border border-white/5 flex items-center px-3 gap-2">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-xs text-neutral-500">nexus.app/dashboard</span>
</div>
</div>
</div>
<div className="flex h-[600px]">

<div className="w-16 md:w-64 border-r border-white/5 bg-neutral-900/20 flex flex-col justify-between py-6">
<div className="px-4">
<div className="flex items-center gap-2 text-white font-medium mb-8 px-2">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="hidden md:inline text-sm tracking-tight">Nexus</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white/5 text-white rounded-lg text-sm border border-white/5 cursor-pointer">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
<span className="hidden md:inline font-medium">Overview</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white rounded-lg text-sm cursor-pointer transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="hidden md:inline">Contacts</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white rounded-lg text-sm cursor-pointer transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
<span className="hidden md:inline">Pipeline</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white rounded-lg text-sm cursor-pointer transition-colors">
<iconify-icon icon="solar:inbox-unread-linear" width="20"></iconify-icon>
<span className="hidden md:inline">Inbox</span>
<span className="hidden md:flex ml-auto w-5 h-5 items-center justify-center bg-indigo-500/20 text-indigo-300 text-[10px] rounded-full">4</span>
</div>
</div>
</div>
<div className="px-4">
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white rounded-lg text-sm cursor-pointer transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="hidden md:inline">Settings</span>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10"></div>
<div className="hidden md:block">
<div className="text-xs text-white font-medium">Alex Chen</div>
<div className="text-[10px] text-neutral-500">Pro Plan</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-black/40 p-8 overflow-hidden relative">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 flex flex-col h-full">

<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-white font-medium text-lg">Dashboard</h2>
<p className="text-xs text-neutral-500 mt-1">October 24, 2023</p>
</div>
<div className="flex gap-3">
<button className="h-9 px-3 rounded-lg border border-white/10 bg-white/5 text-neutral-400 text-xs hover:text-white flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                                            Filter
                                        </button>
<button className="h-9 px-3 rounded-lg bg-white text-black text-xs font-semibold hover:bg-neutral-200 flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                                            Add Lead
                                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-neutral-400">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+12.5%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">$48,200</div>
<div className="text-xs text-neutral-500 mt-1">Total Revenue</div>
</div>
<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-neutral-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+4.2%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1,240</div>
<div className="text-xs text-neutral-500 mt-1">Active Leads</div>
</div>
<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-neutral-400">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 bg-white/5 px-2 py-1 rounded-full">0.0%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">86%</div>
<div className="text-xs text-neutral-500 mt-1">Conversion Rate</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 flex-1 min-h-0">

<div className="col-span-2 glass-card rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Performance</h3>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="text-[10px] text-neutral-500">Current</span>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-2 px-2 relative">

<div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
</div>
<div className="w-full bg-indigo-500/20 h-[65%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[45%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[85%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[55%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[70%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-[10px] text-white">90%</div>
</div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-500/40 transition-all"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-600 px-1">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span>
</div>
</div>

<div className="glass-card rounded-xl p-0 overflow-hidden flex flex-col">
<div className="p-4 border-b border-white/5">
<h3 className="text-sm font-medium text-white">Recent Leads</h3>
</div>
<div className="flex-1 overflow-hidden p-2 space-y-1">

<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-colors">
<div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center text-xs font-medium border border-orange-500/20">JD</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">John Doe</div>
<div className="text-[10px] text-neutral-500 truncate">Acme Inc.</div>
</div>
<div className="text-[10px] text-neutral-400">$12k</div>
</div>

<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-medium border border-purple-500/20">AS</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">Anna Smith</div>
<div className="text-[10px] text-neutral-500 truncate">Design Co.</div>
</div>
<div className="text-[10px] text-neutral-400">$8.5k</div>
</div>

<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-medium border border-blue-500/20">MR</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">Mike Ross</div>
<div className="text-[10px] text-neutral-500 truncate">Pearson</div>
</div>
<div className="text-[10px] text-neutral-400">$24k</div>
</div>

<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-colors">
<div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center text-xs font-medium border border-pink-500/20">SL</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">Sarah Lee</div>
<div className="text-[10px] text-neutral-500 truncate">TechStart</div>
</div>
<div className="text-[10px] text-neutral-400">$5k</div>
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
</header>

<section className="border-y border-white/5 bg-black/50 backdrop-blur-sm py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-neutral-500 mb-8 uppercase tracking-widest font-medium">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-xl"><iconify-icon icon="solar:planet-linear"></iconify-icon> Orbit</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-xl"><iconify-icon icon="solar:atom-linear"></iconify-icon> Atomic</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-xl"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Boxed</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-xl"><iconify-icon icon="solar:infinity-linear"></iconify-icon> Loop</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-xl"><iconify-icon icon="solar:layers-linear"></iconify-icon> Stack</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-medium text-purple-300 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                    Workflow Automation
                </div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                    Stop managing lists.<br/>Start closing deals.
                </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    Build powerful automation workflows in seconds. Drag, drop, and let Nexus handle the follow-ups, lead scoring, and data entry.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Visual pipeline builder</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>AI-driven lead scoring</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated email sequences</span>
</li>
</ul>
<button className="text-white border-b border-white pb-0.5 text-sm font-medium hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                    Explore Automations →
                </button>
</div>

<div className="relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 rounded-3xl blur-2xl"></div>
<div className="glass-card rounded-2xl p-1 border border-white/10 relative overflow-hidden h-[500px] w-full bg-[#0F0F0F]">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-full h-full p-8 overflow-hidden">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-[#1A1A1A] border border-white/10 rounded-xl p-4 shadow-xl z-10 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Trigger</div>
<div className="text-sm text-white font-medium">New Lead Created</div>
</div>
</div>

<div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white/20 to-white/5"></div>

<div className="absolute top-36 left-1/2 -translate-x-1/2 w-64 bg-[#1A1A1A] border border-white/10 rounded-xl p-4 shadow-xl z-10 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Action</div>
<div className="text-sm text-white font-medium">Enrich Data (AI)</div>
</div>
<div className="ml-auto">
<iconify-icon className="text-neutral-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="absolute top-[210px] left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10"></div>
<div className="absolute top-[258px] left-[35%] w-[30%] h-[1px] bg-white/10 border-t border-dashed border-white/20"></div> 
<div className="absolute top-[258px] left-[35%] w-[1px] h-8 bg-white/10"></div>
<div className="absolute top-[258px] right-[35%] w-[1px] h-8 bg-white/10"></div>

<div className="absolute top-[246px] left-1/2 -translate-x-1/2 bg-[#0F0F0F] border border-white/10 px-3 py-1 rounded-full text-[10px] text-neutral-400 z-20">
                            Score &gt; 50?
                        </div>

<div className="absolute top-[290px] left-[20%] w-56 bg-[#1A1A1A] border border-emerald-500/30 rounded-xl p-3 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<div className="text-xs text-white font-medium">Send Email Sequence</div>
</div>
<div className="bg-black/40 rounded p-2 border border-white/5">
<div className="w-full h-1.5 bg-neutral-800 rounded mb-1.5 w-3/4"></div>
<div className="w-full h-1.5 bg-neutral-800 rounded mb-1.5"></div>
<div className="w-full h-1.5 bg-neutral-800 rounded w-1/2"></div>
</div>
</div>

<div className="absolute top-[290px] right-[20%] w-56 bg-[#1A1A1A] border border-white/5 rounded-xl p-3 shadow-xl z-10 opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:archive-down-minimlistic-linear" width="16"></iconify-icon>
</div>
<div className="text-xs text-neutral-400 font-medium">Archive Lead</div>
</div>
</div>

<div className="absolute top-[320px] left-[35%] z-30 drop-shadow-lg">
<iconify-icon className="text-white text-2xl transform -rotate-12" icon="solar:cursor-bold"></iconify-icon>
<div className="absolute top-5 left-3 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">You</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
                NEXUS
            </div>
<div className="text-neutral-500 text-sm">
                © 2024 Nexus Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
