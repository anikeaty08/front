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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Lucide icons
        lucide.createIcons();

        // Simple SPA Navigation
        function navigateTo(pageId) {
            // Hide all views
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-universities').classList.add('hidden');
            document.getElementById('view-contact').classList.add('hidden');
            
            // Show requested view
            const view = document.getElementById('view-' + pageId);
            if(view) {
                view.classList.remove('hidden');
                // Re-trigger animation
                view.classList.remove('fade-in');
                void view.offsetWidth; // trigger reflow
                view.classList.add('fade-in');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Re-init icons just in case
            lucide.createIcons();
        }

        // Accordion Toggle
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            if (content.classList.contains('hidden')) {
                // Open
                content.classList.remove('hidden');
                content.classList.add('fade-in');
                icon.style.transform = 'rotate(180deg)';
            } else {
                // Close
                content.classList.add('hidden');
                content.classList.remove('fade-in');
                icon.style.transform = 'rotate(0deg)';
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-40"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex flex-col justify-center cursor-pointer" href="#" onclick="navigateTo('home'); return false;">
<div className="flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-graduation-cap text-purple-500 group-hover:text-purple-400 transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path className="" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<h1 className="text-white font-serif font-bold text-2xl tracking-tight leading-none">Luceria</h1>
</div>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium mt-1 ml-1 group-hover:text-neutral-400 transition-colors">From education to employment</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="navigateTo('home'); return false;">Home</a>
<button className="text-sm text-neutral-400 hover:text-white transition-colors" onclick="navigateTo('home'); setTimeout(() =&gt; document.getElementById('story').scrollIntoView({behavior: 'smooth'}), 100);">Our Story</button>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="navigateTo('universities'); return false;">Universities &amp; Colleges</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="navigateTo('contact'); return false;">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full transition-all" href="#">Join Early Access</a>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="fade-in" id="view-home">

<section className="md:pt-32 md:pb-24 pt-20 pb-16 relative overflow-hidden" id="home">
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8 cursor-default hover:bg-purple-500/20 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Early Access Open</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                        AI career workflows for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white">students and graduates.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Luceria turns every application into a clear plan with tasks, deadlines and built-in scam protection – from first CV to first graduate role.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-neutral-200 transition-colors w-full md:w-auto">
                            Join early access
                        </button>
<button className="hover:text-white hover:border-white/30 transition-colors md:w-auto flex gap-2 font-medium text-neutral-300 bg-white/5 w-full border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="navigateTo('universities')">
                            For universities &amp; colleges
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000 group">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex h-[400px] md:h-[500px] text-left">
<div className="w-16 md:w-64 border-r border-white/5 bg-neutral-900/30 p-4 hidden md:flex flex-col gap-6">
<div className="space-y-1">
<div className="h-9 w-full bg-white/5 rounded-md flex items-center px-3 gap-3 border border-white/5 text-white">
<svg className="lucide lucide-layout-grid w-4 h-4 text-purple-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-sm font-medium">Dashboard</span>
</div>
<div className="h-9 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-3 text-neutral-500 transition-colors">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-sm">Applications</span>
</div>
<div className="h-9 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-3 text-neutral-500 transition-colors">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Risk Check</span>
</div>
</div>
</div>
<div className="flex-1 p-6 md:p-10 overflow-y-auto bg-neutral-950/50">
<div className="flex justify-between items-end mb-8">
<div className="">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1">Current Focus</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Software Engineer Grad Scheme</h3>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-400">Risk Level:</span>
<span className="flex items-center gap-1 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Safe
                                            </span>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between text-sm mb-2 text-neutral-400">
<span>Workflow Progress</span>
<span>40%</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 w-[40%] rounded-full"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/item">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded border border-purple-500 bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-neutral-400 line-through decoration-neutral-600 decoration-1">Scan job description for red flags</span>
</div>
<span className="text-xs text-neutral-600 font-medium">Done</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded border border-neutral-600 hover:border-purple-500 cursor-pointer transition-colors"></div>
<span className="text-white">Customize CV keywords for ATS</span>
</div>
<span className="text-xs text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2 py-1 rounded font-medium">Today</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded border border-neutral-600 hover:border-purple-500 cursor-pointer transition-colors"></div>
<span className="text-neutral-300">Draft outreach email to recruiter</span>
</div>
<span className="text-xs text-neutral-500 font-medium">Tomorrow</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 text-center tracking-tight">Why students need structure.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-zap-off w-6 h-6 text-orange-400" data-lucide="zap-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"></path><path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"></path><path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"></path><path d="m2 2 20 20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Chaos &amp; Overload</h3>
<p className="text-neutral-400 leading-relaxed">Juggling multiple portals, emails, and deadline types. Without a unified system, it’s easy to miss opportunities.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-shield-alert w-6 h-6 text-red-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Scams &amp; Unrealistic Offers</h3>
<p className="text-neutral-400 leading-relaxed">Predatory schemes target students and graduates. We detect the red flags before you invest your time or money.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-book-open w-6 h-6 text-purple-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">The ‘Hidden’ Curriculum</h3>
<p className="text-neutral-400 leading-relaxed">Universities teach theory, not how to follow up, negotiate salary, or handle rejection. We fill that practical gap.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-purple-400 font-medium tracking-wider uppercase text-sm">The Workflow</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 tracking-tight">How Luceria works</h2>
</div>
<div className="grid md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-neutral-800 via-purple-900 to-neutral-800 -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 z-10 relative group-hover:border-purple-500/50 transition-colors">
<svg className="lucide lucide-upload-cloud w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h3 className="text-white font-medium text-lg text-center mb-2">1. Upload Context</h3>
<p className="text-neutral-500 text-sm text-center leading-relaxed px-2">Paste a job description, course syllabus, or apprenticeship offer.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 z-10 relative group-hover:border-purple-500/50 transition-colors">
<svg className="lucide lucide-scan-search w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
</div>
<h3 className="text-white font-medium text-lg text-center mb-2">2. AI Analysis</h3>
<p className="text-neutral-500 text-sm text-center leading-relaxed px-2">Luceria checks for scams and realistic salaries instantly.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 z-10 relative group-hover:border-purple-500/50 transition-colors">
<svg className="lucide lucide-kanban-square w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="kanban-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
</div>
<h3 className="text-white font-medium text-lg text-center mb-2">3. Workflow Plan</h3>
<p className="text-neutral-500 text-sm text-center leading-relaxed px-2">Generates a clear timeline with tasks, reminders, and scripts.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 z-10 relative group-hover:border-purple-500/50 transition-colors">
<svg className="lucide lucide-message-square-quote w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="message-square-quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 14a2 2 0 0 0 2-2V8h-2"></path><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M8 14a2 2 0 0 0 2-2V8H8"></path></svg>
</div>
<h3 className="text-white font-medium text-lg text-center mb-2">4. Coaching</h3>
<p className="text-neutral-500 text-sm text-center leading-relaxed px-2">Step-by-step guidance on CVs, interviews, and salary talks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 text-center tracking-tight">Everything you need to land it.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-red-500/10 text-red-400"><svg className="lucide lucide-radar w-6 h-6" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">Scam &amp; Risk Radar</h3>
<p className="text-neutral-400">Visual risk meters for job offers and 'business opportunities' to keep you safe.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-400"><svg className="lucide lucide-layout-dashboard w-6 h-6" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">Workflow Dashboard</h3>
<p className="text-neutral-400">Manage all your applications in one structured, clear view.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-purple-500/10 text-purple-400"><svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">CV Tuning</h3>
<p className="text-neutral-400">Tailor your experience to the specific language of any job spec.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-green-500/10 text-green-400"><svg className="lucide lucide-mic-2 w-6 h-6" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">Interview Prep</h3>
<p className="text-neutral-400">Practice questions generated directly from the company’s profile.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-yellow-500/10 text-yellow-400"><svg className="lucide lucide-mail-check w-6 h-6" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">Real-world Comms</h3>
<p className="text-neutral-400">Templates for salary negotiation and chasing recruiters professionally.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/20 transition-all group">
<div className="mb-6 inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-400"><svg className="lucide lucide-map w-6 h-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg></div>
<h3 className="text-xl font-semibold text-white mb-3">UK-Specific Guidance</h3>
<p className="text-neutral-400">Tailored for UCAS, NHS bands, Big 4 schemes, and apprenticeships.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-purple-900/10" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-purple-400 text-sm font-medium mb-4 block uppercase tracking-wider">Our Story</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                                Built from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">experience.</span>
</h2>
<div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
<p>
                                    Luceria was born from a non-linear journey through the education system: the International Baccalaureate, the "wrong" degree, a year in the NHS, and eventually landing a competitive Big 4 apprenticeship.
                                </p>
<p>
                                    Along the way, we dealt with exam anxiety, resits, and immense pressure. We learned that success isn't just about grades—it's about managing the process, avoiding pitfalls, and knowing how to recover from setbacks.
                                </p>
<p>
                                    Today, Luceria helps both struggling students and high performers with the things universities often miss: networking, safety from scams, and structured planning.
                                </p>
</div>
</div>

<div className="relative h-[400px] w-full bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden p-8 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
<div className="relative z-10 w-full max-w-sm space-y-6">

<div className="flex gap-4 opacity-50">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-neutral-600"></div>
<div className="w-px h-full bg-neutral-800 my-1"></div>
</div>
<div className="pb-6">
<h4 className="text-neutral-300 font-medium">Education &amp; Anxiety</h4>
<p className="text-sm text-neutral-600">Navigating exams and uncertainty.</p>
</div>
</div>

<div className="flex gap-4 opacity-70">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-neutral-500"></div>
<div className="w-px h-full bg-neutral-800 my-1"></div>
</div>
<div className="pb-6">
<h4 className="text-neutral-300 font-medium">The Pivot</h4>
<p className="text-sm text-neutral-600">NHS experience &amp; rethinking career.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<div className="w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent my-1"></div>
</div>
<div>
<h4 className="text-white font-semibold">Success &amp; Luceria</h4>
<p className="text-sm text-purple-400">Big 4 Apprenticeship &amp; building the tool.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in" id="view-universities">

<section className="py-24 md:py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-900/10 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                        Luceria for <span className="text-purple-400">universities &amp; colleges.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Give your students structured, scam-aware career workflows – while boosting employability outcomes and your institutional reputation.
                    </p>
<p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">
                        Built for careers teams, widening participation, and student support.
                    </p>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-16 text-center tracking-tight">How it works for your institution</h2>
<div className="grid md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-key-round w-7 h-7 text-purple-400" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Simple Access</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Students sign in through your chosen method (SSO or access codes) and start new ‘career workflows’ immediately.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-shield-check w-7 h-7 text-purple-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">AI Analysis</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Luceria analyses job ads and ‘opportunities’ for scam indicators, unrealistic claims and salary realism.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-workflow w-7 h-7 text-purple-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Workflow Coaching</h3>
<p className="text-sm text-neutral-400 leading-relaxed">It turns each application into a step-by-step plan with templates for CV tuning, follow-ups, and interviews.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-bar-chart-2 w-7 h-7 text-purple-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Insight for your team</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Optional dashboard showing usage trends, targeted sectors, and common risks flagged by your students.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
<span className="bg-purple-500/20 p-2 rounded-lg"><svg className="lucide lucide-graduation-cap w-5 h-5 text-purple-400" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></span>
                                Benefits for your students
                            </h3>
<div className="space-y-4">

<div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Clear Structure</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Students juggle multiple application portals, deadlines and email threads. Luceria pulls everything into one coherent workflow, with tasks and reminders that make the process feel manageable rather than overwhelming.
                                    </div>
</div>

<div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Scam Protection</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Our Scam &amp; Risk Radar analyses job ads and 'opportunities' for classic red flags, unrealistic pay and pressure tactics. Students get a simple risk signal plus an explanation in plain English, helping them avoid losing time, money or confidence.
                                    </div>
</div>

<div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Confidence &amp; Preparedness</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Luceria coaches students through follow-up messages, interview prep and realistic salary expectations. They arrive at interviews knowing what to say, what to ask, and how to present their experience effectively.
                                    </div>
</div>

<div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Fairer Access</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Not everyone has parents, siblings or contacts who work in the professions they’re targeting. Luceria gives those students the same insider playbook – from timelines and templates to risk checks – levelling the playing field.
                                    </div>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
<span className="bg-blue-500/20 p-2 rounded-lg"><svg className="lucide lucide-building-2 w-5 h-5 text-blue-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg></span>
                                Benefits for your institution
                            </h3>
<div className="space-y-4">

<div className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Stronger Graduate Outcomes</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        By giving students structured workflows and practical support, more of them complete high-quality applications and secure appropriate roles. This directly supports your graduate employment and progression metrics.
                                    </div>
</div>

<div className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Enhanced Reputation &amp; Rankings</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Improved employability results and student satisfaction around careers support feed into external rankings and word-of-mouth. Luceria helps you stand out as an institution that takes transition to work seriously.
                                    </div>
</div>

<div className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Safeguarding &amp; Wellbeing</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Financial scams and exploitative 'business opportunities' can have long-term consequences for students. Our built-in scam checks support your safeguarding duty and reduce the risk of harm that careers and wellbeing teams have to deal with later.
                                    </div>
</div>

<div className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Scalable Careers Support</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Careers teams are stretched. Luceria automates the repetitive guidance – timelines, reminders, template emails – so staff can focus on high-impact one-to-one work and strategic employer relationships.
                                    </div>
</div>

<div className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900 transition-colors" onclick="toggleAccordion(this)">
<span className="text-white font-medium">Attraction &amp; Retention</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        Prospective students and parents increasingly ask what support exists beyond the degree itself. Offering Luceria as part of your careers and transition package makes your institution more attractive and helps current students feel supported enough to stay and complete.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-4">Book a consultation</h2>
<p className="text-neutral-400">Interested in Luceria for your institution? Book a short call to explore pricing, rollout options and pilots.</p>
</div>
<form className="space-y-6 bg-black border border-white/10 p-8 rounded-2xl shadow-2xl">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Institution</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Role</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Phone (Optional)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-300">Preferred Date/Time</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors text-sm" type="datetime-local"/>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors mt-4" type="button">
                            Request a consultation
                        </button>
</form>
</div>
</section>
</div>

<div className="hidden fade-in" id="view-contact">
<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Contact Luceria.</h1>
<p className="text-xl text-neutral-400">Whether you’re a student, educator or partner, we’d love to hear from you.</p>
</div>
<div className="grid md:grid-cols-12 gap-12">

<div className="md:col-span-5 space-y-8">
<div className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-purple-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h3 className="text-white font-medium mb-1">Email</h3>
<a className="text-purple-400 hover:text-white transition-colors block mb-1" href="mailto:luceriaai@gmail.com">luceriaai@gmail.com</a>
<p className="text-sm text-neutral-500">General enquiries &amp; partnerships</p>
</div>
</div>
</div>
<div className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-green-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h3 className="text-white font-medium mb-1">Phone</h3>
<p className="text-white mb-1"><a href="tel:07748 840405">07748 840405</a></p>
<p className="text-sm text-neutral-500">Call or WhatsApp (UK)</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-500 mt-4 px-2">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>We aim to respond within 2–3 working days.</span>
</div>
</div>

<div className="md:col-span-7">
<form className="bg-neutral-900/10 border border-white/10 rounded-2xl p-8" onsubmit="event.preventDefault(); alert('Thanks for reaching out – we’ll get back to you soon.');">
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Organisation (Optional)</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg hover:bg-neutral-200 transition-colors" type="submit">
                                        Send message
                                    </button>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-neutral-400 text-sm leading-relaxed">
                                        Luceria exists to make the journey from education into work clearer, safer and more achievable. If you’re interested in pilots, partnerships or have any questions, reach out.
                                    </p>
</div>
</form>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="py-24 border-t border-white/10 relative overflow-hidden bg-black mt-auto">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-900/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-4 gap-12 pt-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<svg className="lucide lucide-graduation-cap w-6 h-6 text-purple-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-white font-serif font-bold text-lg tracking-tight">Luceria</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        The AI workflow coach for education to employment transitions. Guiding light, scam protection, and career structure.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#" onclick="navigateTo('universities'); return false;">For Universities</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#" onclick="navigateTo('home'); setTimeout(() =&gt; document.getElementById('story').scrollIntoView({behavior: 'smooth'}), 100); return false;">Our Story</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#" onclick="navigateTo('contact'); return false;">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-4">
<span>© 2024 Luceria Ltd. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
