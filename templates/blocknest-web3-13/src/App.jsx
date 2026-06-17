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



        // --- Number Counter Animation Logic ---
        function animateValue(obj, start, end, duration, prefix = "", suffix = "") {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Linear easing for numbers looks better usually, or mild easeOut
                let current = progress * (end - start) + start;
                
                // Format: if integer, show integer. If float, show 1 decimal
                let formatted = Number.isInteger(end) ? Math.floor(current) : current.toFixed(1);

                obj.innerHTML = `${prefix}${formatted}${suffix}`;
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                     obj.innerHTML = `${prefix}${end}${suffix}`; // Ensure final value is exact
                }
            };
            window.requestAnimationFrame(step);
        }

        // --- Intersection Observer ---
        document.addEventListener("DOMContentLoaded", function() {
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        // Add active class to trigger CSS transition
                        target.classList.add('active');

                        // Check if it's a counter
                        if (target.classList.contains('stat-counter') || target.querySelector('.stat-counter')) {
                            const counter = target.classList.contains('stat-counter') ? target : target.querySelector('.stat-counter');
                            
                            // Prevent re-running if already animated
                            if(!counter.dataset.animated) {
                                const val = parseFloat(counter.getAttribute('data-val'));
                                const suffix = counter.getAttribute('data-suffix') || "";
                                const prefix = counter.getAttribute('data-prefix') || "";
                                
                                animateValue(counter, 0, val, 2000, prefix, suffix);
                                counter.dataset.animated = "true";
                            }
                        }

                        // Stop observing once animated
                        observer.unobserve(target);
                    }
                });
            }, observerOptions);

            // Observe all elements with 'reveal' class and counters
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));

            // Observe counters separately if they aren't inside a reveal block (though here they are)
            const counters = document.querySelectorAll('.stat-counter');
            counters.forEach(el => {
                // Find closest parent with reveal, if not, observe the counter itself
                if(!el.closest('.reveal')) {
                    observer.observe(el);
                }
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[600px] bg-purple-900/30 blur-[100px] rounded-[50%]"></div>
<div className="absolute top-20 left-20 w-1 h-1 bg-white/20 rounded-full"></div>
<div className="absolute top-40 right-40 w-1 h-1 bg-white/30 rounded-full"></div>
<div className="absolute bottom-60 left-1/3 w-1 h-1 bg-white/10 rounded-full"></div>
</div>

<div className="absolute top-[650px] left-1/2 -translate-x-1/2 w-[200%] h-[1000px] border-t border-purple-500/30 rounded-[50%] z-0 shadow-[0_-10px_40px_rgba(168,85,247,0.2)]"></div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center reveal reveal-up">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium text-white tracking-tight">BlockNest</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Integration</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center transition-all duration-200 hover:bg-purple-600 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] text-sm font-medium text-white bg-purple-600/20 border-purple-500/50 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-[0_0_20px_rgba(147,51,234,0.15)]" href="#">
            Start Building
        </a>
</nav>

<main className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pt-20 pr-4 pb-32 pl-4 relative items-start justify-center">

<div className="w-full">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight max-w-4xl mx-auto reveal reveal-up delay-100">
                Launch Web3 Products 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 glow-text">Without Coding</span>
</h1>
<p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed reveal reveal-up delay-200">
                BlockNest helps startups and non-technical founders deploy decentralized applications seamlessly. No smart contract knowledge required.
            </p>

<div className="mt-10 p-1.5 pl-5 rounded-full glass-card flex items-center w-full max-w-md mx-auto group focus-within:border-purple-500/50 transition-colors reveal reveal-up delay-300">
<input className="bg-transparent border-none outline-none text-white placeholder-slate-500 w-full text-base font-normal h-10" placeholder="Enter your work email" type="email"/>
<button className="hover:opacity-90 transition-opacity shadow-purple-900/20 whitespace-nowrap text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full ml-2 pt-3 pr-6 pb-3 pl-6 shadow-lg">
                    Get Started
                </button>
</div>
</div>

<div className="mt-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end relative perspective-1000">

<div className="lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between h-[180px] hover:-translate-y-1 transition-transform duration-500 w-full lg:mb-4 reveal reveal-bottom-right delay-200">
<div className="flex justify-between items-start">
<div>
<p className="text-sm text-slate-400 font-normal mb-1">Total Balance</p>
<h3 className="text-2xl font-medium text-white tracking-tight">$124,592.00</h3>
</div>
<div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">+14.8%</span>
</div>
</div>
<div className="flex items-center gap-4 mt-auto">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-[#1a1b26] border border-slate-700 flex items-center justify-center z-20">
<iconify-icon className="text-slate-200" icon="simple-icons:ethereum" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-[#1a1b26] border border-slate-700 flex items-center justify-center z-10">
<iconify-icon className="text-slate-200" icon="simple-icons:bitcoin" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-[#1a1b26] border border-slate-700 flex items-center justify-center z-0">
<iconify-icon className="text-slate-200" icon="simple-icons:solana" width="14"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-500 font-normal">Active Assets</span>
</div>
</div>

<div className="lg:col-span-4 glass-card rounded-2xl p-6 border-t border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative z-10 w-full reveal reveal-up delay-100">

<div className="bg-[#0B0C15]/50 rounded-xl p-4 border border-white/5">
<div className="flex justify-between mb-2">
<span className="text-sm text-slate-400 font-normal">Selling</span>
<span className="text-sm text-slate-400 font-normal">Balance: 4.2 ETH</span>
</div>
<div className="flex justify-between items-center">
<span className="text-2xl font-medium text-white tracking-tight">1.5</span>
<div className="flex items-center gap-2 bg-[#1E1F2E] px-3 py-1.5 rounded-full border border-white/10">
<iconify-icon className="text-purple-400" icon="simple-icons:ethereum" width="18"></iconify-icon>
<span className="text-base font-medium text-white">ETH</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-500 mt-1 block">$2,764.50</span>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1E1F2E] border border-purple-500/30 rounded-full flex items-center justify-center text-white shadow-lg z-20">
<iconify-icon icon="solar:transfer-vertical-linear" width="20"></iconify-icon>
</div>

<div className="bg-[#0B0C15]/50 rounded-xl p-4 border border-white/5 mt-2 pt-6">
<div className="flex justify-between mb-2">
<span className="text-sm text-slate-400 font-normal">Buying</span>
</div>
<div className="flex justify-between items-center">
<span className="text-2xl font-medium text-white tracking-tight">2,760</span>
<div className="flex items-center gap-2 bg-[#1E1F2E] px-3 py-1.5 rounded-full border border-white/10">
<iconify-icon className="text-emerald-400" icon="simple-icons:tether" width="18"></iconify-icon>
<span className="text-base font-medium text-white">USDT</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-500 mt-1 block">~ $1.00</span>
</div>
</div>

<div className="lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-center h-[180px] hover:-translate-y-1 transition-transform duration-500 w-full lg:mb-4 reveal reveal-bottom-right delay-300">

<div className="flex items-center justify-between mb-5 border-b border-white/5 pb-4 last:border-0 last:mb-0 last:pb-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
<iconify-icon className="text-orange-500" icon="simple-icons:bitcoin" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-base font-medium text-white leading-tight">Bitcoin</p>
<p className="text-xs text-slate-500">BTC</p>
</div>
</div>

<div className="hidden sm:block">
<svg fill="none" height="20" viewbox="0 0 60 20" width="60" xmlns="http://www.w3.org/2000/svg">
<path d="M1 15L15 8L30 12L45 5L59 1" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="text-right">
<p className="text-base font-medium text-white tracking-tight">$34,204</p>
<p className="text-xs text-emerald-400">+2.4%</p>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
<iconify-icon className="text-purple-400" icon="simple-icons:polygon" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-base font-medium text-white leading-tight">Polygon</p>
<p className="text-xs text-slate-500">MATIC</p>
</div>
</div>

<div className="hidden sm:block">
<svg fill="none" height="20" viewbox="0 0 60 20" width="60" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5L15 12L30 8L45 15L59 18" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="text-right">
<p className="text-base font-medium text-white tracking-tight">$0.89</p>
<p className="text-xs text-rose-400">-1.2%</p>
</div>
</div>
</div>
</div>
</main>
<section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-32">

<div className="w-full mb-32 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm reveal reveal-up delay-200">
<div className="flex flex-col pt-12 pb-12 items-center">
<p className="text-xs font-semibold text-slate-500 mb-10 tracking-widest uppercase">Trusted by industry leaders</p>
<div className="flex flex-wrap hover:opacity-100 transition-opacity duration-500 md:gap-20 opacity-50 gap-x-1 gap-y-12 items-center justify-center">

<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#0052FF]" icon="simple-icons:coinbase" width="32"></iconify-icon>
</div>
<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#F0B90B]" icon="simple-icons:binance" width="32"></iconify-icon>
</div>
<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#E2761B]" icon="simple-icons:metamask" width="36"></iconify-icon>
</div>
<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#627EEA]" icon="simple-icons:ethereum" width="32"></iconify-icon>
</div>
<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#8247E5]" icon="simple-icons:polygon" width="32"></iconify-icon>
</div>
<div className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-[#375BD2]" icon="simple-icons:chainlink" width="30"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 text-center relative">
<div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="hidden md:block absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

<div className="relative flex flex-col items-center group reveal reveal-up delay-100">
<div className="flex items-center gap-2 mb-3 text-slate-300">
<iconify-icon className="text-purple-400/80" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium">Global Community</h3>
</div>

<div className="stat-counter text-6xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-pink-400 to-indigo-400 mb-4 py-2 glow-text group-hover:scale-105 transition-transform duration-500 ease-out" data-prefix="+" data-suffix="M" data-val="1.5">
                    0
                </div>
<p className="text-sm text-slate-500 font-normal">Wallets Connected</p>
</div>

<div className="relative flex flex-col items-center group reveal reveal-up delay-200">
<div className="flex items-center gap-2 mb-3 text-slate-300">
<iconify-icon className="text-purple-400/80" icon="solar:chart-square-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium">Transaction Growth</h3>
</div>

<div className="stat-counter text-6xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-pink-400 to-indigo-400 mb-4 py-2 glow-text group-hover:scale-105 transition-transform duration-500 ease-out" data-prefix="$" data-suffix="B+" data-val="2">
                    0
                </div>
<p className="text-sm text-slate-500 font-normal max-w-[200px] mx-auto leading-relaxed">Secure, transparent, and unstoppable</p>
</div>

<div className="relative flex flex-col items-center group reveal reveal-up delay-300">
<div className="flex items-center gap-2 mb-3 text-slate-300">
<iconify-icon className="text-purple-400/80" icon="solar:shield-check-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium">Platform Reliability</h3>
</div>

<div className="stat-counter text-6xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-pink-400 to-indigo-400 mb-4 py-2 glow-text group-hover:scale-105 transition-transform duration-500 ease-out" data-prefix="" data-suffix="K+" data-val="200">
                    0
                </div>
<p className="text-sm text-slate-500 font-normal">DApp Integrations</p>
</div>
</div>
</section>
<section className="overflow-hidden w-full max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-10 pointer-events-none mix-blend-screen"></div>

<div className="text-center mb-20 relative">
<div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm reveal reveal-up">
<iconify-icon className="text-purple-400 mr-2" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Community Driven</span>
</div>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1] reveal reveal-right delay-100">
                Built for People, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 animate-gradient-x">Powered by Web3</span>
</h2>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed reveal reveal-right delay-200">
                Join thousands of developers and creators shaping the decentralized revolution — because innovation happens together.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

<div className="group relative p-8 rounded-3xl bg-[#0B0C15]/80 border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between h-full min-h-[280px] reveal reveal-bottom-right delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="mb-6">
<div className="flex gap-1 text-purple-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
<p className="text-slate-200 text-lg leading-relaxed font-normal">"The integration speed is unmatched. We migrated our entire DeFi protocol infrastructure in less than a week with zero downtime."</p>
</div>
<div className="relative z-10 flex items-end justify-between mt-10">
<div className="opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#FF007A]" icon="simple-icons:uniswap" width="42"></iconify-icon>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Rating</span>
<span className="block text-sm font-semibold text-white">5.0/5.0</span>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#13141F] to-[#0A0B10] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-center min-h-[280px] reveal reveal-bottom-right delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-indigo-500" icon="solar:graph-new-up-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Live Activity</span>
</div>
<h3 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4">145K+</h3>
<p className="text-slate-400 text-sm font-normal leading-relaxed max-w-[200px]">Daily active wallets interacting across all chains.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500">Growth</span>
<span className="text-xs text-emerald-400 font-medium">+24.5% this week</span>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0B0C15]/80 border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between h-full min-h-[280px] reveal reveal-bottom-right delay-300">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-[1px]">
<div className="w-full h-full rounded-full bg-[#0B0C15] flex items-center justify-center text-white text-xs font-bold">JD</div>
</div>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-200 text-lg leading-relaxed font-normal">"Finally, a Web3 dashboard that prioritizes user experience. Managing my NFT collections and liquidity pools has never been this intuitive."</p>
</div>
<div className="relative z-10 mt-8">
<p className="text-sm font-medium text-white">James Dupont</p>
<p className="text-xs text-slate-500 mt-0.5">Senior Product Designer</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0B0C15]/80 border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between h-full min-h-[280px] reveal reveal-bottom-right delay-200">
<div className="relative z-10">
<div className="mb-6">
<div className="flex gap-1 text-purple-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="opacity-50" icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
</div>
<p className="text-slate-200 text-lg leading-relaxed font-normal">"Scalability was our biggest bottleneck. BlockNest's rollup solution helped us handle 10x the traffic during our token launch."</p>
</div>
<div className="relative z-10 flex items-end justify-between mt-10">
<div className="opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#8247E5]" icon="simple-icons:polygon" width="38"></iconify-icon>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Rating</span>
<span className="block text-sm font-semibold text-white">4.8/5.0</span>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0B0C15]/80 border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between h-full min-h-[280px] reveal reveal-bottom-right delay-300">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 p-[1px]">
<div className="w-full h-full rounded-full bg-[#0B0C15] flex items-center justify-center text-white text-xs font-bold">AS</div>
</div>
<iconify-icon className="text-purple-500" icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-200 text-lg leading-relaxed font-normal">"The developer SDKs are a dream. We cut our smart contract deployment time by 60% and the documentation is top-tier."</p>
</div>
<div className="relative z-10 mt-8">
<p className="text-sm font-medium text-white">Anna Silva</p>
<p className="text-xs text-slate-500 mt-0.5">Blockchain Engineer</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-gradient-to-b from-purple-900/20 to-[#0B0C15] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-center min-h-[280px] overflow-hidden reveal reveal-bottom-right delay-400">

<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/20 blur-2xl rounded-full"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-purple-300">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Security First</span>
</div>
<h3 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4">$4.2B+</h3>
<p className="text-slate-400 text-sm font-normal leading-relaxed">Total value locked (TVL) across all integrated partner protocols.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-slate-500">
<iconify-icon icon="simple-icons:audits" width="16"></iconify-icon>
<span className="text-xs">Audited by Certik &amp; Trail of Bits</span>
</div>
</div>
</div>
</section>

<section className="relative w-full pt-32 pb-48 overflow-hidden bg-[#05060E]">
<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<div className="absolute w-[200%] h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_70%)]"></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-600/30 blur-[130px] rounded-full pointer-events-none"></div>
<div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#05060E] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#05060E] to-transparent z-10"></div>
<div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight reveal reveal-up">
                Ready to Build Your Web3 World?
            </h2>
<p className="text-slate-300 text-lg md:text-xl font-normal mb-10 tracking-normal reveal reveal-up delay-100">
                Join the decentralized future today.
            </p>
<button className="reveal reveal-up delay-200 bg-white hover:bg-slate-100 text-purple-950 transition-all duration-300 font-medium text-sm rounded-full px-10 py-3.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                Access Platform
            </button>
</div>
</section>


    </>
  );
}
