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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { opacity: 0; animation-play-state: paused; }
.animate-on-scroll.animate { animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
`;
document.head.appendChild(style);
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
window.initAnimations = function() {
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
};
document.addEventListener("DOMContentLoaded", () => window.initAnimations());
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



      const cardsData = [
        { 
            title: "Support Triage Agent", 
            category: "Customer Support",
            icon: "lucide:headphones",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            desc: "Deployed a custom LLM agent to classify, tag, and draft responses for incoming support tickets.",
            stat1Label: "Response Time", stat1Val: "-92%", stat1Color: "text-green-600",
            stat2Label: "Auto-resolution", stat2Val: "45%", stat2Color: "text-zinc-900"
        },
        { 
            title: "Loan Processing", 
            category: "FinTech",
            icon: "lucide:file-text",
            color: "text-green-600",
            bg: "bg-green-50",
            desc: "Automated document extraction and risk analysis for mortgage applications.",
            stat1Label: "Processing Cost", stat1Val: "-65%", stat1Color: "text-green-600",
            stat2Label: "Manual Review", stat2Val: "-80%", stat2Color: "text-zinc-900"
        },
        { 
            title: "Route Optimization", 
            category: "Logistics",
            icon: "lucide:truck",
            color: "text-blue-600",
            bg: "bg-blue-50",
            desc: "Dynamic routing algorithm adjusting for real-time traffic and inventory loads.",
            stat1Label: "Fuel Saved", stat1Val: "18%", stat1Color: "text-zinc-900",
            stat2Label: "Dispatch Time", stat2Val: "-40%", stat2Color: "text-green-600"
        }
      ];

      let currentIndex = 0;
      let isAnimating = false;

      function updateDOM() {
        // Calculate indices
        const leftIdx = (currentIndex - 1 + cardsData.length) % cardsData.length;
        const centerIdx = currentIndex;
        const rightIdx = (currentIndex + 1) % cardsData.length;

        const leftEl = document.getElementById("card-left");
        const centerEl = document.getElementById("card-center");
        const rightEl = document.getElementById("card-right");

        // Helper to populate card HTML with Light Theme classes
        const populateCard = (el, idx) => {
            const data = cardsData[idx];
            el.innerHTML = `
                <div class="flex flex-col h-full relative z-10">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="p-2 ${data.bg} rounded-lg ${data.color}"><iconify-icon icon="${data.icon}"></iconify-icon></div>
                        <span class="text-sm font-mono text-zinc-400 uppercase">${data.category}</span>
                    </div>
                    <h3 class="text-2xl text-zinc-900 font-medium mb-4">${data.title}</h3>
                     ${el.id === 'card-center' ? `<p class="text-zinc-500 text-sm mb-8 leading-relaxed">${data.desc}</p>` : ''}
                    <div class="mt-auto space-y-4">
                        <div class="flex justify-between border-b border-zinc-100 pb-2">
                            <span class="text-zinc-400 text-sm">${data.stat1Label}</span>
                            <span class="${data.stat1Color} font-mono font-medium">${data.stat1Val}</span>
                        </div>
                        <div class="flex justify-between border-b border-zinc-100 pb-2">
                            <span class="text-zinc-400 text-sm">${data.stat2Label}</span>
                            <span class="${data.stat2Color} font-mono font-medium">${data.stat2Val}</span>
                        </div>
                    </div>
                </div>
            `;
            // Add glow only to center
            if(el.id === 'card-center') {
                const glow = document.createElement('div');
                glow.className = "absolute -top-20 -right-20 w-40 h-40 bg-indigo-50/50 blur-[50px] rounded-full";
                el.prepend(glow);
            }
        };

        populateCard(leftEl, leftIdx);
        populateCard(centerEl, centerIdx);
        populateCard(rightEl, rightIdx);
      }

      function rotateCarousel(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const centerEl = document.getElementById("card-center");
        
        // Quick fade out
        centerEl.style.opacity = "0.5";
        centerEl.style.transform = "scale(0.95)";

        setTimeout(() => {
          if (direction === "next") {
            currentIndex = (currentIndex + 1) % cardsData.length;
          } else {
            currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
          }

          updateDOM();

          // Reset styles
          centerEl.style.opacity = "1";
          centerEl.style.transform = "scale(1)";
          
          isAnimating = false;
        }, 300);
      }
      
      // Initialize
      updateDOM();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
</div>

<div className="fixed top-0 left-0 w-full z-40 h-24 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-transparent"></div>
<div className="absolute inset-0 backdrop-blur-[1px] mask-image-linear-gradient(to bottom, white, transparent)"></div>
</div>

<nav className="fixed w-full z-50 px-6 lg:px-12 py-6 flex items-center justify-between border-b border-zinc-200 bg-white/70 backdrop-blur-md">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md animate-logo-pulse"></div>
<div className="relative w-full h-full bg-zinc-900 rounded-lg border border-zinc-700/50 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>

<iconify-icon className="text-white text-sm relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-300" icon="lucide:zap" strokeWidth="2.5"></iconify-icon>

<div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 blur-sm rounded-full animate-pulse"></div>
</div>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900">SpeedWins<span className="text-zinc-400 font-normal">AI</span></span>
</div>
<div className="hidden md:flex items-center bg-zinc-100/50 border border-zinc-200 rounded-full p-1 px-1.5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#solutions">Solutions</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#how-it-works">Process</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors tracking-tight flex items-center gap-2 shadow-lg shadow-zinc-200/50">
                Book Strategy Call
                <iconify-icon className="text-xs" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="md:hidden text-zinc-600 hover:text-zinc-900" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<iconify-icon className="text-2xl" icon="lucide:menu"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-[60] transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center gap-8 border-l border-zinc-100" id="mobile-menu">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<iconify-icon className="text-3xl" icon="lucide:x"></iconify-icon>
</button>
<a className="text-3xl font-medium text-zinc-900 tracking-tight" href="#">Solutions</a>
<a className="text-3xl font-medium text-zinc-900 tracking-tight" href="#">Process</a>
<a className="text-3xl font-medium text-zinc-900 tracking-tight" href="#">Case Studies</a>
<button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium mt-4">Book Strategy Call</button>
</div>

<section className="relative pt-40 pb-20 px-6 lg:px-12 border-b border-zinc-200/60 bg-white">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-mono uppercase tracking-widest w-fit mb-8 animate-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    Systems Operational
                </div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] font-medium text-zinc-900 tracking-tight mb-6 animate-on-scroll delay-100">
                    AI that turns <br/> conversations <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 animate-gradient">into revenue.</span>
</h1>
<p className="text-lg text-zinc-500 font-light leading-relaxed max-w-lg mb-10 animate-on-scroll delay-200">
                    We don't sell theory. We build production-ready AI agents and automated workflows that solve real business problems. From idea to deployment in weeks.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-scroll delay-300">
<button className="px-6 py-3.5 bg-zinc-900 text-white rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200">
                        Book a Strategy Call
                        <iconify-icon className="text-sm" icon="lucide:calendar"></iconify-icon>
</button>
<button className="px-6 py-3.5 glass-panel text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 border border-zinc-200">
                        View Use Cases
                        <iconify-icon className="text-zinc-400" icon="lucide:arrow-down-right"></iconify-icon>
</button>
</div>

<div className="mt-16 pt-8 border-t border-zinc-100 animate-on-scroll delay-300">
<p className="text-xs text-zinc-400 font-mono mb-4 uppercase tracking-wider">Trusted by operations leaders at</p>
<div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 filter brightness-0">
<iconify-icon className="text-2xl" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:linear"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:airtable"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:notion"></iconify-icon>
</div>
</div>
</div>

<div className="relative animate-on-scroll delay-200 lg:h-[600px] flex items-center justify-center order-1 lg:order-2">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-transparent blur-[80px] rounded-full"></div>

<div className="relative w-full max-w-md bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 flex flex-col overflow-hidden h-[540px]">

<div className="px-6 py-4 border-b border-zinc-100 bg-white/80 backdrop-blur-md flex items-center justify-between z-10">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 border border-indigo-100 flex items-center justify-center">
<iconify-icon className="text-indigo-600 text-lg" icon="lucide:bot"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-900">Ops_Agent_01</span>
<span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Active • v2.4</span>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal"></iconify-icon>
</button>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden bg-zinc-50/30 relative">

<div className="flex justify-end msg-anim-1">
<div className="bg-zinc-900 text-white rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-[85%] shadow-lg shadow-zinc-200">
<p className="text-sm font-medium leading-relaxed">Pull Q3 marketing spend from Snowflake and forecast Oct budget based on current CPI.</p>
</div>
</div>

<div className="flex flex-col gap-2 max-w-[90%] msg-anim-2">
<div className="flex items-center gap-2 mb-1 pl-2">
<div className="w-4 h-4 rounded-full border border-indigo-200 border-t-indigo-600 animate-spin"></div>
<span className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider">Running Workflow</span>
</div>

<div className="bg-white border border-indigo-100 rounded-xl p-3 shadow-sm flex flex-col gap-2 w-full">
<div className="flex items-center gap-3 text-xs text-zinc-600 border-b border-zinc-50 pb-2">
<iconify-icon className="text-blue-400" icon="simple-icons:snowflake"></iconify-icon>
<span className="font-mono">querying_table('marketing_spend')</span>
<span className="ml-auto text-green-600 font-mono">✓ 20ms</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-600">
<iconify-icon className="text-orange-400" icon="lucide:calculator"></iconify-icon>
<span className="font-mono">running_model('forecast_v2')</span>
<div className="ml-auto h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full animate-loader"></div>
</div>
</div>
</div>
</div>

<div className="flex justify-start msg-anim-3">
<div className="bg-white border border-zinc-200 text-zinc-800 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[90%] shadow-sm">
<p className="text-sm leading-relaxed mb-3">I've analyzed the Q3 data. With a current CPI of <strong>$14.20</strong>, here is the projected budget for October:</p>

<div className="bg-zinc-50 rounded-lg p-3 border border-zinc-100 flex items-center justify-between mb-2">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase font-mono">Forecasted Spend</span>
<span className="text-lg font-semibold text-zinc-900">$42,500</span>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
                                        +12% vs Q3
                                    </div>
</div>
<button className="w-full mt-1 py-2 rounded border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:file-text"></iconify-icon>
                                    Download Full Report PDF
                                </button>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-zinc-100">
<div className="relative flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors p-2 hover:bg-zinc-50 rounded-full">
<iconify-icon className="text-lg" icon="lucide:paperclip"></iconify-icon>
</button>
<div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-full h-10 px-4 flex items-center text-sm text-zinc-400">
                                Ask a follow up...
                            </div>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200">
<iconify-icon className="text-lg" icon="lucide:arrow-up"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute -right-6 top-32 p-3 bg-white rounded-lg shadow-lg border border-zinc-100 flex items-center gap-3 animate-bounce delay-700">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="lucide:check"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase">Status</span>
<span className="text-xs font-semibold text-zinc-900">Task Complete</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#FAFAFA]" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16 animate-on-scroll">
<h2 className="text-3xl lg:text-4xl font-medium text-zinc-900 mb-4 tracking-tight">Deploying logic, not just chat.</h2>
<p className="text-zinc-500 max-w-lg text-sm lg:text-base font-light">We move beyond simple chatbots to build autonomous systems that handle complex operations.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl glass-panel p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors animate-on-scroll delay-100 bg-white">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-transparent blur-3xl group-hover:from-indigo-100/50 transition-all"></div>
<div className="z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="lucide:workflow"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">End-to-End Automation</h3>
<p className="text-sm text-zinc-500 max-w-sm">Connect your existing stack (CRM, ERP, Email) with intelligent logic layers that execute tasks without human intervention.</p>
</div>
<div className="flex gap-2 mt-8 opacity-50 group-hover:opacity-80 transition-opacity">
<div className="h-2 w-12 bg-indigo-500 rounded-full"></div>
<div className="h-2 w-8 bg-zinc-200 rounded-full"></div>
<div className="h-2 w-16 bg-zinc-200 rounded-full"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl glass-panel p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors animate-on-scroll delay-200 bg-white">
<div className="z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="lucide:bot"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Autonomous Agents</h3>
<p className="text-sm text-zinc-500">Digital workers that research, negotiate, and compile data 24/7.</p>
</div>
<div className="absolute bottom-6 right-6">
<iconify-icon className="text-6xl text-zinc-100 rotate-12" icon="lucide:cpu"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl glass-panel p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors animate-on-scroll delay-100 bg-white">
<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-50 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-all"></div>
<div className="z-10 relative h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="lucide:mic"></iconify-icon>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] text-zinc-500 font-medium uppercase tracking-wide">
<iconify-icon className="text-xs" icon="lucide:phone"></iconify-icon> Calls
                                </div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] text-zinc-500 font-medium uppercase tracking-wide">
<iconify-icon className="text-xs" icon="lucide:mail"></iconify-icon> Email
                                </div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] text-zinc-500 font-medium uppercase tracking-wide">
<iconify-icon className="text-xs" icon="lucide:message-square"></iconify-icon> SMS
                                </div>
</div>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">AI Voice Employees</h3>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">
                            Trained, reliable, and always available. They answer incoming calls, emails, and text messages with a great personality, handling complex workflows with human-like latency.
                        </p>

<div className="mt-auto pt-6">
<div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 flex items-center gap-4 max-w-sm hover:shadow-sm transition-shadow">
<div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
<iconify-icon className="text-white text-sm" icon="lucide:phone-call"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1">
<div className="flex items-center gap-1 h-6">

<div className="voice-bar h-2 animation-delay-0" style={{animationDelay: '0ms'}}></div>
<div className="voice-bar h-4 animation-delay-100" style={{animationDelay: '100ms'}}></div>
<div className="voice-bar h-3 animation-delay-200" style={{animationDelay: '200ms'}}></div>
<div className="voice-bar h-5 animation-delay-150" style={{animationDelay: '300ms'}}></div>
<div className="voice-bar h-2 animation-delay-300" style={{animationDelay: '400ms'}}></div>
<div className="voice-bar h-4 animation-delay-75" style={{animationDelay: '150ms'}}></div>
<div className="voice-bar h-3 animation-delay-200" style={{animationDelay: '250ms'}}></div>
<div className="voice-bar h-5 animation-delay-100" style={{animationDelay: '350ms'}}></div>
</div>
</div>
<span className="text-xs font-mono text-indigo-600 font-medium">00:42</span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl glass-panel p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors animate-on-scroll delay-100 bg-white">
<div className="z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="lucide:bar-chart-3"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Data Intelligence</h3>
<p className="text-sm text-zinc-500">Turn unstructured PDFs, calls, and emails into structured databases.</p>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl glass-panel p-8 flex flex-col md:flex-row items-center justify-between hover:border-zinc-300 transition-colors animate-on-scroll delay-200 bg-white min-h-[240px]">
<div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent blur-3xl group-hover:from-blue-100/50 transition-all"></div>
<div className="z-10 flex flex-col gap-4 max-w-xl">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-2 text-zinc-900">
<iconify-icon className="text-xl" icon="lucide:lightbulb"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900">Strategic Implementation</h3>
<p className="text-sm text-zinc-500">We audit your workflows to identify high-ROI opportunities. No experimental science projects—only high-impact shipping.</p>
</div>
<div className="mt-8 md:mt-0 z-10 flex flex-col gap-3 min-w-[200px]">
<div className="px-4 py-2 bg-green-50 text-green-700 border border-green-100 rounded-lg text-xs font-mono font-medium flex items-center gap-2">
<iconify-icon icon="lucide:check"></iconify-icon> ROI Focused
                        </div>
<div className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-mono font-medium flex items-center gap-2">
<iconify-icon icon="lucide:timer"></iconify-icon> 2-Week Sprints
                        </div>
<div className="px-4 py-2 bg-zinc-50 text-zinc-700 border border-zinc-100 rounded-lg text-xs font-mono font-medium flex items-center gap-2">
<iconify-icon icon="lucide:shield-check"></iconify-icon> Enterprise Grade
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-y border-zinc-200 bg-zinc-50/50" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 animate-on-scroll">
<span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2 block">The SpeedWins Protocol</span>
<h2 className="text-3xl lg:text-4xl font-medium text-zinc-900 tracking-tight">From audit to automation in weeks.</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll delay-100">
<div className="w-24 h-24 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-xl shadow-zinc-200/50">
<iconify-icon className="text-3xl text-zinc-400" icon="lucide:search"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Discover</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We analyze your manual bottlenecks and identify high-value automation targets.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll delay-200">
<div className="w-24 h-24 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-xl shadow-zinc-200/50">
<iconify-icon className="text-3xl text-zinc-400" icon="lucide:pen-tool"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Design</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We architect the custom AI agent workflows and data pipelines.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll delay-300">
<div className="w-24 h-24 rounded-2xl bg-white border border-indigo-200 flex items-center justify-center mb-6 shadow-xl shadow-indigo-100 ring-1 ring-indigo-50">
<iconify-icon className="text-3xl text-indigo-500" icon="lucide:code-2"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Build</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We code and integrate the solution into your existing tech stack (no new platforms).</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll delay-100">
<div className="w-24 h-24 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-xl shadow-zinc-200/50">
<iconify-icon className="text-3xl text-zinc-400" icon="lucide:rocket"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Deploy</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We ship to production, monitor performance, and iterate on results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden" id="results">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex justify-between items-end mb-16 px-4">
<div className="animate-on-scroll">
<h2 className="text-3xl lg:text-4xl font-medium text-zinc-900 mb-2 tracking-tight">Real-World Wins</h2>
<p className="text-zinc-500">Measurable impact, not hypothetical projections.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-600 transition-colors shadow-sm" onclick="rotateCarousel('prev')">
<iconify-icon icon="lucide:chevron-left"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-600 transition-colors shadow-sm" onclick="rotateCarousel('next')">
<iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>

<div className="flex h-[400px] relative items-center justify-center perspective-[1000px]" id="carousel-container">

<div className="carousel-card absolute w-[350px] lg:w-[450px] h-[350px] bg-white rounded-2xl border border-zinc-200 p-8 opacity-40 scale-90 -translate-x-[60%] z-10 cursor-pointer shadow-lg overflow-hidden" id="card-left" onclick="rotateCarousel('prev')">

</div>

<div className="carousel-card absolute w-[350px] lg:w-[450px] h-[350px] bg-white rounded-2xl border border-indigo-100 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.1)] scale-100 z-20 p-8 overflow-hidden" id="card-center">

<div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-50/50 blur-[50px] rounded-full"></div>

</div>

<div className="carousel-card absolute w-[350px] lg:w-[450px] h-[350px] bg-white rounded-2xl border border-zinc-200 p-8 opacity-40 scale-90 translate-x-[60%] z-10 cursor-pointer shadow-lg overflow-hidden" id="card-right" onclick="rotateCarousel('next')">

</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 bg-[#FAFAFA] text-zinc-900 border-t border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Built for speed. <br/><span className="text-zinc-400 font-light">Engineered for ROI.</span></h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        Traditional consultancies give you slide decks and 6-month roadmaps. We give you functioning code and automated workflows in 2-week sprints.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-900 text-lg" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm font-medium">Production-grade architecture</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-900 text-lg" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm font-medium">Flat-fee, transparent pricing</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-900 text-lg" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm font-medium">Full IP ownership transfer</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 animate-on-scroll delay-100">
<div className="p-8 bg-white rounded-2xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-all">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 block mb-2">10x</span>
<span className="text-xs font-mono uppercase text-zinc-400">Efficiency Gain</span>
</div>
<div className="p-8 bg-zinc-900 text-white rounded-2xl shadow-xl shadow-zinc-900/10">
<span className="text-4xl font-semibold tracking-tight block mb-2">14<span className="text-lg text-zinc-400 font-normal">days</span></span>
<span className="text-xs font-mono uppercase text-zinc-400">Avg. Deployment</span>
</div>
<div className="p-8 bg-white rounded-2xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-all col-span-2 flex items-center justify-between">
<div>
<span className="text-4xl font-semibold tracking-tight text-zinc-900 block mb-2">100%</span>
<span className="text-xs font-mono uppercase text-zinc-400">Custom Code</span>
</div>
<iconify-icon className="text-4xl text-zinc-200" icon="lucide:code"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-white border-t border-zinc-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-50 blur-[120px] rounded-full opacity-60"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center animate-on-scroll">
<h2 className="text-4xl lg:text-6xl font-medium text-zinc-900 tracking-tight mb-8">
                Stop planning AI. <br/>
                Start <span className="text-indigo-600">shipping</span> it.
            </h2>
<p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
                Schedule a 30-minute discovery call to identify your highest-value automation opportunities. No sales pressure, just engineering strategy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-zinc-900 text-white rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-xl shadow-zinc-200 hover:scale-[1.02]">
                    Book Discovery Call
                    <iconify-icon className="text-sm" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                    Calculate ROI
                </button>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-[#FAFAFA] pt-20 pb-10 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="flex flex-col gap-6 max-w-xs">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500/20 rounded-md blur animate-logo-pulse"></div>
<div className="relative w-full h-full bg-zinc-900 rounded-md border border-zinc-700 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-indigo-500/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
<iconify-icon className="text-white text-[10px] relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-300" icon="lucide:zap" strokeWidth="2.5"></iconify-icon>
</div>
</div>
<span className="text-base font-medium text-zinc-900">SpeedWins AI</span>
</div>
<p className="text-sm text-zinc-500">
                    We help companies automate operations and unlock revenue with production-ready AI agents.
                </p>
</div>
<div className="flex gap-16 text-sm">
<div className="flex flex-col gap-4">
<h4 className="text-zinc-900 font-medium">Company</h4>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Process</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-zinc-900 font-medium">Solutions</h4>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Automation</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Consulting</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Agents</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-zinc-900 font-medium">Social</h4>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">Twitter</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-indigo-600 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2024 SpeedWins AI. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
