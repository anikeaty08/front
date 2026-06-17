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
      

<div className="fixed inset-0 noise-overlay pointer-events-none z-50"></div>

<nav className="fixed top-6 left-0 right-0 z-40 mx-auto max-w-7xl px-4">
<div className="bg-[#12121a]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<span className="text-base font-semibold tracking-tight text-white">
            FreightPoint
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400 uppercase">
<a className="hover:text-white transition-colors" href="#">The Gap</a>
<a className="hover:text-white transition-colors" href="#">Workflows</a>
<a className="hover:text-white transition-colors" href="#">Meteom</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
          BOOK A CALL
        </a>
</div>
</nav>

<header className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-left max-w-2xl relative z-20">
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
              We run the operational workflows that slow
              <br/>
<span className="text-gradient font-semibold">logistics teams down.</span>
</h1>
<p className="text-xl text-zinc-400 leading-relaxed mb-10 pr-4">
              We take ownership of high-friction back-office work like quoting,
              order entry, document handling, and portal updates — to free up your
              team for revenue generating tasks.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-base flex items-center gap-2 hover:bg-zinc-200 transition-colors group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Book a Call
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="flex flex-col sm:flex-row gap-4 text-xs font-medium text-zinc-500 uppercase tracking-wide">
<span className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center">
<i className="w-2.5 h-2.5 text-green-500" data-lucide="check"></i>
</div>
                  AIXEMPRICING
                </span>
<span className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center">
<i className="w-2.5 h-2.5 text-green-500" data-lucide="check"></i>
</div>
                  NO RIP-AND-REPLACE
                </span>
</div>
</div>
<div className="border-t border-white/5 pt-8 w-full">
<p className="text-xs tracking-[0.2em] text-zinc-600 uppercase font-medium">
                // Works inside your TMS, Excel, Email, and Portals.
              </p>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(255,255,255,0.02)"></stop>
<stop offset="50%" stop-color="rgba(59, 130, 246, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0.02)"></stop>
</lineargradient>
</defs>


<path className="opacity-30" d="M300 100 L300 230" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<circle className="animate-ping opacity-20" cx="300" cy="165" fill="#60A5FA" r="2" style={{animationDuration: '3s'}}></circle>

<path className="opacity-30" d="M480 140 Q 380 180 380 250" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<path className="opacity-30" d="M520 300 L 410 300" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path className="animate-flow" d="M520 300 L 410 300" fill="none" stroke="#60A5FA" strokeWidth="1"></path>

<path className="opacity-30" d="M480 460 Q 380 420 380 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<path className="opacity-30" d="M300 500 L 300 370" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<path className="opacity-30" d="M120 460 Q 220 420 220 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path className="animate-flow" d="M120 460 Q 220 420 220 350" fill="none" stroke="#60A5FA" strokeWidth="1" style={{animationDelay: '1s'}}></path>

<path className="opacity-30" d="M80 300 L 190 300" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<path className="opacity-30" d="M120 140 Q 220 180 220 250" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
</svg>

<div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] glass-panel rounded-xl shadow-2xl shadow-black/80 border border-blue-500/20 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 bg-[#0e0e14] flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] uppercase font-mono text-blue-400 tracking-wider">Operational Automation Layer</span>
</div>
<div className="p-4 bg-[#0a0a0f]/90 font-mono text-[10px] leading-relaxed text-zinc-400">
<div className="flex justify-between items-center mb-2 pb-2 border-b border-white/5">
<span>Execution Log</span>
<span className="text-green-500">Live</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="text-zinc-600">09:01 AM</span>
<span className="text-white">POD processed: synced to TMS</span>
<i className="w-3 h-3 text-green-500 ml-auto" data-lucide="check-circle"></i>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-600">09:15 AM</span>
<span className="text-white">Invoice flagged: sent via Email</span>
<i className="w-3 h-3 text-green-500 ml-auto" data-lucide="check-circle"></i>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-600">09:30 AM</span>
<span className="text-white">Routing update: driver SMS</span>
<i className="w-3 h-3 text-green-500 ml-auto" data-lucide="check-circle"></i>
</div>
<div className="flex items-center gap-2 opacity-50">
<span className="text-zinc-600">09:32 AM</span>
<span className="text-white">Parsing rate quote (PDF)...</span>
<div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin ml-auto"></div>
</div>
</div>
</div>
</div>


<div className="absolute top-[60px] left-1/2 -translate-x-1/2 glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-blue-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<i className="w-4 h-4 text-blue-400" data-lucide="box"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">TMS</span>
<span className="text-[9px] text-zinc-500">Transportation Management</span>
</div>
</div>

<div className="absolute top-[100px] right-[20px] glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-green-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
<i className="w-4 h-4 text-green-400" data-lucide="file-spreadsheet"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Excel</span>
<span className="text-[9px] text-zinc-500">Spreadsheets / CSV</span>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-[-20px] glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-cyan-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
<i className="w-4 h-4 text-cyan-400" data-lucide="globe"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Carrier Portals</span>
<span className="text-[9px] text-zinc-500">Web Scraping</span>
</div>
</div>

<div className="absolute bottom-[100px] right-[20px] glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-yellow-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
<i className="w-4 h-4 text-yellow-400" data-lucide="mail"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Email</span>
<span className="text-[9px] text-zinc-500">Inbox Parsing</span>
</div>
</div>

<div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-purple-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
<i className="w-4 h-4 text-purple-400" data-lucide="map-pin"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">GPS / ELD</span>
<span className="text-[9px] text-zinc-500">Real-time Location</span>
</div>
</div>

<div className="absolute bottom-[100px] left-[20px] glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-zinc-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-zinc-700/30 flex items-center justify-center border border-zinc-600/30">
<i className="w-4 h-4 text-zinc-300" data-lucide="folder"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Documents</span>
<span className="text-[9px] text-zinc-500">PDF Storage</span>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 left-[-20px] glass-pill px-4 py-2 rounded-full flex items-center gap-3 shadow-lg hover:border-orange-500/30 transition-colors z-10">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
<i className="w-4 h-4 text-orange-400" data-lucide="message-square"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">SMS / Msg</span>
<span className="text-[9px] text-zinc-500">Driver Comms</span>
</div>
</div>

<div className="absolute top-[28%] left-[58%] text-[9px] font-mono text-zinc-500 bg-[#0a0a0f] px-1 border border-white/5 rounded">updates status</div>
<div className="absolute top-[40%] left-[65%] text-[9px] font-mono text-zinc-500 bg-[#0a0a0f] px-1 border border-white/5 rounded">reads data</div>
<div className="absolute top-[60%] right-[25%] text-[9px] font-mono text-zinc-500 bg-[#0a0a0f] px-1 border border-white/5 rounded">sends alerts</div>
</div>
</div>
</div>
</header>

<section className="relative py-24 border-t border-white/5 bg-[#0c0c14]">
<div className="absolute inset-0 section-glow-blue pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 relative">
<div className="sticky top-32">
<span className="text-xs text-blue-400 font-mono mb-4 block">
                // THE REALITY
              </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                Most operational problems don't show up as failures.
                <br/>
<span className="text-zinc-600">
                  They show up as work quietly slipping between systems.
                </span>
</h2>
</div>
</div>

<div className="lg:col-span-7">
<p className="text-lg text-zinc-400 leading-relaxed mb-12">
              In logistics operations, the work that matters most rarely lives
              in one place. It lives across inboxes, spreadsheets, portals, PMs,
              and message threads — stitched together by people who know what to
              check, who to follow up with, and when something "doesn't look
              right."
            </p>
<p className="text-base text-zinc-500 mb-8">
              This works — until it doesn't. As volume increases, small gaps
              compound:
            </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-blue-400 mb-4 stroke-[1.5]" data-lucide="file-warning"></i>
<h3 className="text-lg font-medium text-white mb-1">
                  Incomplete Docs
                </h3>
<p className="text-sm text-zinc-500">
                  Documents arrive late or contain errors.
                </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-cyan-400 mb-4 stroke-[1.5]" data-lucide="dollar-sign"></i>
<h3 className="text-lg font-medium text-white mb-1">
                  Missed Accessorials
                </h3>
<p className="text-sm text-zinc-500">
                  Accessorials get missed or disputed.
                </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-purple-400 mb-4 stroke-[1.5]" data-lucide="clock"></i>
<h3 className="text-lg font-medium text-white mb-1">
                  Billing Delays
                </h3>
<p className="text-sm text-zinc-500">
                  Billing is delayed by manual rework.
                </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-green-400 mb-4 stroke-[1.5]" data-lucide="alert-circle"></i>
<h3 className="text-lg font-medium text-white mb-1">
                  Late Exceptions
                </h3>
<p className="text-sm text-zinc-500">
                  Exceptions caught days too late.
                </p>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-8 mb-12">
<p className="text-base text-zinc-300 mb-4">
                Nothing breaks all at once. Things just quietly fall out of
                sync. This creates a different problem:
              </p>
<ul className="space-y-2 text-zinc-400 text-sm list-disc pl-5">
<li>More handoffs.</li>
<li>More dependency on tribal knowledge.</li>
<li>
                  More things that only work when the right person is paying
                  attention.
                </li>
</ul>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3">
                The Transitional Reality
              </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                If this feels uncomfortably familiar, it's because it's how most
                logistics operations actually run today. The question isn't
                whether the work is getting done. It's whether it's being caught
                early — or discovered after it's already cost you time, money,
                or trust.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0a0a12]">
<div className="absolute inset-0 section-glow-purple pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs text-purple-400 font-mono mb-4 block">
              // SCOPE OF SERVICE
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Workflows We Run
            </h2>
<p className="text-lg text-zinc-400 max-w-xl">
              Automate the high-friction manual tasks that slow down your supply
              chain, from order entry to final payment.
            </p>
</div>

<div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
<button className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
              All
            </button>
<button className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white text-xs font-medium transition-colors">
              Brokerages
            </button>
<button className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white text-xs font-medium transition-colors">
              3PLs
            </button>
<button className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white text-xs font-medium transition-colors">
              Carriers
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="file-plus"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Quote &amp; Order Entry
            </h3>
<p className="text-base text-zinc-500">
              We extract data from email requests and PDFs to build quotes or
              orders directly in your TMS.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="truck"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Track &amp; Trace
            </h3>
<p className="text-base text-zinc-500">
              We scrape carrier sites and portals for location updates and
              update your system of record automatically.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="receipt"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              AP Invoice Audit
            </h3>
<p className="text-base text-zinc-500">
              We validate incoming carrier invoices against quoted amounts and
              flag discrepancies for review.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="download"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Document Retrieval
            </h3>
<p className="text-base text-zinc-500">
              We chase PODs, BOLs, and receipts from carriers and attach them to
              the correct loads in your system.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="user-plus"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Carrier Onboarding
            </h3>
<p className="text-base text-zinc-500">
              We validate insurance packets, authority status, and banking info
              to set up new carriers instantly.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-300 stroke-[1.5]" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Claims Processing
            </h3>
<p className="text-base text-zinc-500">
              We aggregate claim documentation, file initial notices, and track
              status across carrier portals.
            </p>
</div>
</div>
<div className="flex justify-center">
<button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10">
            See all workflows
            <i className="w-4 h-4" data-lucide="arrow-down"></i>
</button>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0e0e18]">
<div className="absolute inset-0 section-glow-cyan pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-xs text-blue-400 font-mono mb-4 block">
            // THE PROCESS
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            From chaotic inputs to
            <span className="text-gradient">streamlined outcomes.</span>
</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We replace manual back-office grinding with deterministic workflows.
            No long integration projects. No new software to learn.
          </p>
</div>
<div className="space-y-4">

<div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="search"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">
                Discovery &amp; Audit
              </h3>
<p className="text-base text-zinc-500">
                We deep-dive into your current process "as is". We analyze email
                threads, PMS formats, and portal workflows to map every input,
                rule, and exception path.
              </p>
</div>
<span className="text-xs font-mono text-zinc-700">01</span>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="git-branch"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">Logic Mapping</h3>
<p className="text-base text-zinc-500">
                We convert implicit tribal knowledge into explicit logic. We
                document the exact decision tree your team follows to create
                coded rules.
              </p>
</div>
<span className="text-xs font-mono text-zinc-700">02</span>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="zap"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">
                Zero-IT Integration
              </h3>
<p className="text-base text-zinc-500">
                We connect to your existing stack—TMS, Email, Portals,
                Excel—without waiting for internal IT resources using secure,
                non-invasive connectors.
              </p>
</div>
<span className="text-xs font-mono text-zinc-700">03</span>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="check-circle"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">
                Shadow Validation
              </h3>
<p className="text-base text-zinc-500">
                We run in "shadow mode" alongside your team for one week,
                comparing automated outputs against manual work to ensure 100%
                accuracy.
              </p>
</div>
<span className="text-xs font-mono text-zinc-700">04</span>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-1">
                Steady State &amp; Scale
              </h3>
<p className="text-base text-zinc-500">
                We take the wheel. The system handles the volume, and you
                receive a daily digest of outcomes. Your team only steps in for
                true edge-cases.
              </p>
</div>
<span className="text-xs font-mono text-zinc-700">05</span>
</div>
</div>
</div>
</section>

<section className="relative py-12 bg-[#0a0a12]">
<div className="max-w-6xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-[#0c0c14] p-2 md:p-4 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

<div className="relative bg-[#08080e] rounded-lg border border-white/10 overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0c0c14]">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="ml-3 text-xs text-zinc-500 font-mono">
                  secure_gateway_v4.sh
                </span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span>LIVE</span>
<span className="text-zinc-700">|</span>
<span>US-EAST-1</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">

<div className="col-span-1 border-r border-white/5 p-6 bg-[#0a0a10] hidden md:block">
<div className="mb-8">
<p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                    Active Workflows
                  </p>
<p className="text-3xl font-medium text-white mb-1">2,841</p>
<p className="text-xs text-green-400 font-medium">+12% volume</p>
</div>
<div className="mb-8">
<p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                    Avg Latency
                  </p>
<p className="text-3xl font-medium text-white mb-1">142ms</p>
</div>
<div className="mb-8">
<p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                    Success Rate
                  </p>
<p className="text-3xl font-medium text-white">99.9%</p>
</div>
<div className="mt-auto pt-12">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="cpu"></i>
                    Auto-scaling active
                  </div>
</div>
</div>

<div className="col-span-3 p-0 text-xs font-mono">

<div className="grid grid-cols-5 px-6 py-3 border-b border-white/5 text-zinc-500 uppercase tracking-wider text-[10px]">
<div className="col-span-1">Time</div>
<div className="col-span-2">Event</div>
<div className="col-span-1">ID</div>
<div className="col-span-1 text-right">Status</div>
</div>

<div className="divide-y divide-white/5">
<div className="grid grid-cols-5 px-6 py-4 hover:bg-white/5 transition-colors group">
<div className="col-span-1 text-zinc-400">14:24:01</div>
<div className="col-span-2 text-white flex items-center gap-2">
<i className="w-3 h-3 text-blue-400" data-lucide="file-text"></i>
                      Quote Parser
                    </div>
<div className="col-span-1 text-zinc-600">REQ-9921</div>
<div className="col-span-1 text-right">
<span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">
                        COMPLETED
                      </span>
</div>
</div>
<div className="grid grid-cols-5 px-6 py-4 hover:bg-white/5 transition-colors group">
<div className="col-span-1 text-zinc-400">14:24:04</div>
<div className="col-span-2 text-white flex items-center gap-2">
<i className="w-3 h-3 text-purple-400" data-lucide="refresh-cw"></i>
                      Portal Sync
                    </div>
<div className="col-span-1 text-zinc-600">LD-8821</div>
<div className="col-span-1 text-right">
<span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                        SYNCED
                      </span>
</div>
</div>
<div className="grid grid-cols-5 px-6 py-4 hover:bg-white/5 transition-colors group">
<div className="col-span-1 text-zinc-400">14:24:12</div>
<div className="col-span-2 text-white flex items-center gap-2">
<i className="w-3 h-3 text-yellow-400" data-lucide="check-square"></i>
                      Doc Validation
                    </div>
<div className="col-span-1 text-zinc-600">INV-202</div>
<div className="col-span-1 text-right">
<span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/20">
                        FLAGGED
                      </span>
</div>
</div>
<div className="grid grid-cols-5 px-6 py-4 hover:bg-white/5 transition-colors group">
<div className="col-span-1 text-zinc-400">14:24:18</div>
<div className="col-span-2 text-white flex items-center gap-2">
<i className="w-3 h-3 text-cyan-400" data-lucide="shield"></i>
                      Smart Audit
                    </div>
<div className="col-span-1 text-zinc-600">LD-9920</div>
<div className="col-span-1 text-right">
<span className="bg-zinc-500/10 text-zinc-400 px-2 py-0.5 rounded border border-zinc-500/20">
                        PROCESSING
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0c0c14] border-y border-white/5">
<div className="absolute inset-0 section-glow-blue pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="glass-panel p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Predictable, Flat-Rate Pricing
            </h2>
<p className="text-lg text-zinc-400">
              We believe operational costs should be predictable. Our pricing is
              fixed, capped, and transparent. We don't charge per-click or
              per-user penalties that discourage adoption.
            </p>
</div>
<div className="flex flex-col gap-6 w-full lg:w-auto">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white">
                  Fixed Monthly Cost
                </h4>
<p className="text-sm text-zinc-500">
                  Know exactly what you will pay, regardless of seasonal volume
                  spikes.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white">Outcome Based</h4>
<p className="text-sm text-zinc-500">
                  You pay for the workflow being managed, not for the server
                  time.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0a0a12]">
<div className="absolute inset-0 section-glow-purple pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
              Operational velocity,
              <span className="text-zinc-600">quantified.</span>
</h2>
<p className="text-base text-zinc-400 max-w-md">
              We measure success in hours reclaimed and errors prevented. Here
              is what that looks like in production.
            </p>
</div>
<div className="flex gap-12">
<div>
<p className="text-4xl font-medium text-white mb-1">15h+</p>
<p className="text-[10px] uppercase tracking-wider text-zinc-500">
                Saved / Rep / Week
              </p>
</div>
<div>
<p className="text-4xl font-medium text-white mb-1">99.9%</p>
<p className="text-[10px] uppercase tracking-wider text-zinc-500">
                Audit Accuracy
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed mb-8">
                "We stopped chasing missing PODs. The system just finds them and
                attaches them. It saved our collections team about 15 hours a
                week immediately."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                DO
              </div>
<div>
<p className="text-sm font-medium text-white">
                  Director of Operations
                </p>
<p className="text-xs text-zinc-500">Mid-sized 3PL</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed mb-8">
                "The biggest win wasn't just the time saved, it was the silence.
                Our tracking inbox used to be a firehose. Now it's manageable."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                AS
              </div>
<div>
<p className="text-sm font-medium text-white">Logistics Manager</p>
<p className="text-xs text-zinc-500">CPG Brand</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-green-500 text-green-500" data-lucide="star"></i>
</div>
<p className="text-base text-zinc-300 leading-relaxed mb-8">
                "Compliance used to be a bottleneck for onboarding. Now carriers
                are cleared in minutes, not days. It's a game changer for
                capacity."
              </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                MR
              </div>
<div>
<p className="text-sm font-medium text-white">
                  Carrier Relations VP
                </p>
<p className="text-xs text-zinc-500">Digital Freight Brokerage</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0c0c14]">
<div className="absolute inset-0 section-glow-cyan pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              We install, monitor, and operate these workflows end-to-end.
            </h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-8">
              When something breaks, changes, or needs escalation, it comes to
              us — not you. You aren't managing tools, agents, or edge cases.
              You get outcomes with full visibility, while we take
              accountability for the execution.
            </p>
<button className="bg-white text-black px-6 py-3 rounded-full font-medium text-base hover:bg-zinc-200 transition-colors">
              Book a Call
            </button>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="relative group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-800">
<img alt="Michael Ross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
</div>
<div className="mt-4">
<h4 className="text-lg font-medium text-white">Michael Ross</h4>
<p className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
                  Founder — Operations
                </p>
<p className="text-xs text-zinc-600 mt-1">
                  Ex-Logistics / Supply Chain Ops
                </p>
</div>
</div>

<div className="relative group mt-12">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-800">
<img alt="David Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
</div>
<div className="mt-4">
<h4 className="text-lg font-medium text-white">David Chen</h4>
<p className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
                  Founder — Technical
                </p>
<p className="text-xs text-zinc-600 mt-1">
                  Systems Engineering Lead
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0a0a12] border-t border-white/5">
<div className="absolute inset-0 section-glow-blue pointer-events-none opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-medium text-center mb-2">
          Frequently asked questions
        </h2>
<p className="text-sm text-zinc-500 text-center mb-12">
          Everything you need to know about our integration, compliance, and
          workflows.
        </p>
<div className="space-y-4">
<div className="glass-panel rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm font-medium text-zinc-300">
              Do I need to change my TMS?
            </span>
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
</div>
<div className="glass-panel rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm font-medium text-zinc-300">
              How long does implementation take?
            </span>
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
</div>
<div className="glass-panel rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm font-medium text-zinc-300">
              What happens if the system makes a mistake?
            </span>
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
</div>
<div className="glass-panel rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm font-medium text-zinc-300">
              Is there a minimum volume requirement?
            </span>
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
</div>
<div className="glass-panel rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm font-medium text-zinc-300">
              Can I customize the workflows?
            </span>
<i className="w-4 h-4 text-zinc-500" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<footer className="bg-[#08080e] border-t border-white/5 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold text-white">FreightPoint</span>
</div>
<div className="flex gap-4">
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
<div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                Workflows
              </h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    Quote &amp; Order Entry
                  </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    Track &amp; Trace
                  </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    AP Invoice Audit
                  </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    Document Retrieval
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    Book A Call
                  </a>
</li>
<li>
<a className="hover:text-zinc-300 transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 FreightPoint Systems Inc. All Rights Reserved.</p>
<p>We Are An Equal Opportunity Employer.</p>
</div>
</div>
</footer>


    </>
  );
}
