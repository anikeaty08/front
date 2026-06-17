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



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay (animation handled by CSS transition)
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Add hover effect for links and buttons
        const hoverTargets = document.querySelectorAll('.cursor-none-target, a, button');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            target.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect for Grid Background on Scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const grid = document.querySelector('.grid-floor');
            if(grid) {
                grid.style.transform = `rotateX(80deg) translateY(${scrolled * 0.2}px)`;
            }
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-none-target">
<div className="w-8 h-8 relative">
<div className="absolute inset-0 border border-[#67FFBD] rounded-sm transform rotate-45 transition-transform group-hover:rotate-90 duration-500"></div>
<div className="absolute inset-2 bg-[#67FFBD] rounded-sm transform rotate-45"></div>
</div>
<span className="text-xl font-bold tracking-tight pl-2 font-display text-white">DEXTRABOT</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium text-neutral-500">
<a className="hover:text-[#67FFBD] transition-colors cursor-none-target" href="#features">Features</a>
<a className="hover:text-[#67FFBD] transition-colors cursor-none-target" href="#bots">Bots</a>
<a className="hover:text-[#67FFBD] transition-colors cursor-none-target" href="#workflow">Workflow</a>
<a className="hover:text-[#67FFBD] transition-colors cursor-none-target" href="#pricing">Access</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-none-target" href="#">LOGIN</a>
<button className="text-xs font-bold bg-[#67FFBD] text-black px-6 py-2.5 rounded-sm hover:bg-[#5ceba9] transition-all hover:scale-105 shadow-[0_0_15px_rgba(103,255,189,0.3)] cursor-none-target">
                    LAUNCH APP
                </button>
</div>
</div>
</nav>

<header className="relative h-screen flex flex-col justify-center perspective-container overflow-hidden">

<div className="grid-floor"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,255,189,0.08)_0%,transparent_60%)] z-0 pointer-events-none"></div>

<div className="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-[#67FFBD]/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none z-0"></div>
<div className="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none z-0"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#67FFBD]/30 bg-[#67FFBD]/5 mb-8 backdrop-blur-sm fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67FFBD] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#67FFBD]"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#67FFBD] font-medium">V 2.0 System Operational</span>
</div>
<h1 className="text-7xl md:text-9xl font-bold font-display tracking-tighter text-white mb-6 leading-[0.85] fade-in-up" style={{transitionDelay: '100ms'}}>
                DEXTRA<br/><span className="text-neutral-600">BOT</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mb-10 leading-relaxed fade-in-up" style={{transitionDelay: '200ms'}}>
                Institutional-grade crypto automation.<br/>
<span className="text-white">Copy Trade • Bots • Analytics</span>
</p>
<div className="flex flex-col sm:flex-row gap-5 fade-in-up" style={{transitionDelay: '300ms'}}>
<button className="px-8 py-4 bg-[#67FFBD] text-black font-bold text-sm tracking-wide rounded hover:bg-[#5ceba9] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(103,255,189,0.4)] cursor-none-target flex items-center justify-center gap-2 group">
                    START TRADING
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-sm tracking-wide rounded hover:bg-white/5 hover:border-white/50 transition-all cursor-none-target">
                    EXPLORE FEATURES
                </button>
</div>

<div className="mt-20 border-t border-l border-r border-white/10 rounded-t-2xl bg-black/40 backdrop-blur-xl max-w-4xl h-40 relative overflow-hidden fade-in-up opacity-0" style={{transitionDelay: '500ms'}}>
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_8s_linear_infinite]"></div>
<div className="p-4 border-b border-white/5 flex gap-4 items-center">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
</div>
<div className="p-6 grid grid-cols-4 gap-6">
<div className="space-y-2">
<div className="h-2 w-12 bg-white/10 rounded"></div>
<div className="h-4 w-20 bg-[#67FFBD]/20 rounded border border-[#67FFBD]/30"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-12 bg-white/10 rounded"></div>
<div className="h-4 w-16 bg-white/10 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-12 bg-white/10 rounded"></div>
<div className="h-4 w-24 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 relative bg-[#020202]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-in-up">
<div>
<h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">Command Center</h2>
<p className="text-neutral-500 max-w-md">Precision tools designed for high-frequency execution and deep chain analysis.</p>
</div>
<div className="h-px bg-white/10 flex-grow md:ml-12 mb-2 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#67FFBD] rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 md:col-span-2 group hover:border-[#67FFBD]/30 transition-all duration-500 cursor-none-target fade-in-up">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 text-[#67FFBD]">
<iconify-icon icon="lucide:copy" width="20"></iconify-icon>
</div>
<div className="bg-[#67FFBD] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Popular</div>
</div>
<h3 className="text-2xl font-bold mb-2">Copy Trade Engine</h3>
<p className="text-sm text-neutral-400 mb-8 max-w-sm">Mirror institutional wallets with zero latency. Set custom slippage, max gas, and stop-loss per wallet.</p>

<div className="w-full bg-[#050505] border border-white/5 rounded-lg p-4 relative overflow-hidden">
<div className="scan-line"></div>
<div className="flex items-center justify-between text-xs font-mono mb-2">
<span className="text-neutral-500">TARGET: 0x8a...4f2</span>
<span className="text-[#67FFBD]">PENDING TX</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-600">
<span>Input</span>
<span>Output</span>
</div>
<div className="flex justify-between text-sm font-medium">
<span>12.5 ETH</span>
<span className="text-white">PEPE</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 group hover:border-[#67FFBD]/30 transition-all duration-500 cursor-none-target fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 text-white mb-6 group-hover:text-[#67FFBD] transition-colors">
<iconify-icon icon="lucide:radar" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Discover Wallets</h3>
<p className="text-sm text-neutral-400 mb-6">Filter by PnL, Win Rate, and Holding Time.</p>
<div className="space-y-2 mt-auto">
<div className="flex items-center justify-between text-xs p-2 bg-white/[0.02] rounded border border-white/5">
<span className="font-mono text-neutral-400">0x3...a9</span>
<span className="text-[#67FFBD]">+420%</span>
</div>
<div className="flex items-center justify-between text-xs p-2 bg-white/[0.02] rounded border border-white/5">
<span className="font-mono text-neutral-400">0x7...b2</span>
<span className="text-[#67FFBD]">+124%</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 group hover:border-[#67FFBD]/30 transition-all duration-500 cursor-none-target fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 text-white mb-6 group-hover:text-[#67FFBD] transition-colors">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Deep Analytics</h3>
<p className="text-sm text-neutral-400">Visualize risk exposure and historical performance.</p>
</div>

<div className="glass-card rounded-2xl p-8 md:col-span-2 group hover:border-[#67FFBD]/30 transition-all duration-500 cursor-none-target fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#67FFBD]" icon="lucide:bell" width="20"></iconify-icon>
<h3 className="text-xl font-bold">Real-Time Alerts</h3>
</div>
<p className="text-sm text-neutral-400 mb-4">Instant notifications via Telegram/Discord when tracked wallets interact with new contracts.</p>
<a className="text-xs font-bold text-[#67FFBD] flex items-center gap-1 hover:gap-2 transition-all" href="#">CONFIGURE ALERTS <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon></a>
</div>
<div className="w-full md:w-1/2 h-24 bg-gradient-to-r from-neutral-900 to-transparent rounded border-l-2 border-[#67FFBD] p-4 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] bg-[#67FFBD]/20 text-[#67FFBD] px-1.5 py-0.5 rounded">WHALE ALERT</span>
<span className="text-[10px] text-neutral-500">1m ago</span>
</div>
<div className="text-xs text-white font-mono">0x...88a bought 40ETH of $NOVA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden" id="bots">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 text-center">
<span className="text-[#67FFBD] text-xs font-bold tracking-widest uppercase mb-2 block">Automation</span>
<h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">Algorithmic Bots</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-[#020202] border border-white/5 p-8 rounded-xl hover:border-[#67FFBD] transition-colors duration-300 cursor-none-target fade-in-up">
<div className="h-40 mb-6 border border-white/5 bg-neutral-900/20 rounded relative overflow-hidden flex flex-col justify-center px-4 gap-3">
<div className="w-full h-px bg-[#67FFBD]/30 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#67FFBD] shadow-[0_0_5px_#67FFBD]"></div></div>
<div className="w-full h-px bg-[#67FFBD]/30 relative"><div className="absolute left-10 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#67FFBD]"></div></div>
<div className="w-full h-px bg-white/20 relative"></div>
<div className="w-full h-px bg-[#67FFBD]/30 relative"><div className="absolute right-10 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#67FFBD]"></div></div>
<div className="w-full h-px bg-[#67FFBD]/30 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#67FFBD]"></div></div>
</div>
<h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#67FFBD] transition-colors">Grid Bot</h3>
<p className="text-sm text-neutral-400">Capitalize on sideways market volatility with automated buy low/sell high orders.</p>
</div>

<div className="group bg-[#020202] border border-white/5 p-8 rounded-xl hover:border-[#67FFBD] transition-colors duration-300 cursor-none-target fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="h-40 mb-6 border border-white/5 bg-neutral-900/20 rounded relative overflow-hidden flex items-end justify-between px-6 pb-6">
<div className="w-4 h-8 bg-[#67FFBD]/20 rounded-sm"></div>
<div className="w-4 h-12 bg-[#67FFBD]/40 rounded-sm"></div>
<div className="w-4 h-16 bg-[#67FFBD]/60 rounded-sm"></div>
<div className="w-4 h-24 bg-[#67FFBD] rounded-sm shadow-[0_0_15px_#67FFBD]"></div>
</div>
<h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#67FFBD] transition-colors">DCA Bot</h3>
<p className="text-sm text-neutral-400">Dollar Cost Averaging strategy to reduce impact of volatility on large purchases.</p>
</div>

<div className="group bg-[#020202] border border-white/5 p-8 rounded-xl hover:border-[#67FFBD] transition-colors duration-300 cursor-none-target fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="h-40 mb-6 border border-white/5 bg-neutral-900/20 rounded relative overflow-hidden flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/10 relative animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#67FFBD] rounded-full shadow-[0_0_10px_#67FFBD]"></div>
</div>
<div className="absolute text-xs font-mono text-[#67FFBD]">YIELD</div>
</div>
<h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#67FFBD] transition-colors">Farm Bot</h3>
<p className="text-sm text-neutral-400">Auto-compound yields across compatible protocols. Optimize for APY.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202]" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-display font-bold mb-20 text-center">Three Simple Steps</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#67FFBD]/40 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center fade-in-up">
<div className="w-16 h-16 rounded-full bg-[#050505] border border-[#67FFBD] text-[#67FFBD] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(103,255,189,0.2)]">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Discover</h3>
<p className="text-sm text-neutral-500">Scan the blockchain for high-performing wallets and emerging tokens.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center fade-in-up" style={{transitionDelay: '150ms'}}>
<div className="w-16 h-16 rounded-full bg-[#050505] border border-neutral-800 text-white flex items-center justify-center mb-6 group-hover:border-[#67FFBD] transition-colors">
<iconify-icon icon="lucide:crosshair" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Analyze</h3>
<p className="text-sm text-neutral-500">Review historical PnL, risk metrics, and holding patterns.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 rounded-full bg-[#050505] border border-neutral-800 text-white flex items-center justify-center mb-6">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Copy Trade</h3>
<p className="text-sm text-neutral-500">Deploy capital with automated risk controls and let Dextrabot execute.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-display font-bold mb-12 text-center">FAQ</h2>
<div className="space-y-6">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden cursor-none-target">
<summary className="flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group-hover:border-[#67FFBD]/50 transition-colors">
<span className="text-base font-medium text-white group-hover:text-[#67FFBD] transition-colors">Is my private key safe?</span>
<span className="relative ml-4 shrink-0 size-5 flex items-center justify-center">
<iconify-icon className="group-open:hidden text-neutral-500" icon="lucide:plus"></iconify-icon>
<iconify-icon className="hidden group-open:block text-[#67FFBD]" icon="lucide:minus"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Dextrabot is non-custodial. We execute trades via API keys (CEX) or smart contracts (DEX). Your funds never leave your exchange or wallet.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden cursor-none-target">
<summary className="flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group-hover:border-[#67FFBD]/50 transition-colors">
<span className="text-base font-medium text-white group-hover:text-[#67FFBD] transition-colors">What chains are supported?</span>
<span className="relative ml-4 shrink-0 size-5 flex items-center justify-center">
<iconify-icon className="group-open:hidden text-neutral-500" icon="lucide:plus"></iconify-icon>
<iconify-icon className="hidden group-open:block text-[#67FFBD]" icon="lucide:minus"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Currently supporting Ethereum, Solana, Arbitrum, and Binance Smart Chain. More L2 integrations are coming in Q4.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden cursor-none-target">
<summary className="flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group-hover:border-[#67FFBD]/50 transition-colors">
<span className="text-base font-medium text-white group-hover:text-[#67FFBD] transition-colors">How fast is the execution?</span>
<span className="relative ml-4 shrink-0 size-5 flex items-center justify-center">
<iconify-icon className="group-open:hidden text-neutral-500" icon="lucide:plus"></iconify-icon>
<iconify-icon className="hidden group-open:block text-[#67FFBD]" icon="lucide:minus"></iconify-icon>
</span>
</summary>
<div className="pt-4 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Our nodes run in the same data centers as major validators. Average latency is &lt;50ms, ensuring you front-run the retail crowd.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-[#020202] text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="text-xl font-display font-bold text-white mb-4">DEXTRABOT</div>
<p className="text-neutral-500 max-w-xs">The institutional standard for automated decentralized trading infrastructure.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<h4 className="font-bold text-white mb-2">Product</h4>
<a className="text-neutral-500 hover:text-[#67FFBD] transition-colors relative group cursor-none-target" href="#">
                        Documentation
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#67FFBD] transition-all group-hover:w-full"></span>
</a>
<a className="text-neutral-500 hover:text-[#67FFBD] transition-colors relative group cursor-none-target" href="#">
                        API Reference
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#67FFBD] transition-all group-hover:w-full"></span>
</a>
<a className="text-neutral-500 hover:text-[#67FFBD] transition-colors relative group cursor-none-target" href="#">
                        Pricing
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#67FFBD] transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-white mb-2">Legal</h4>
<a className="text-neutral-500 hover:text-[#67FFBD] transition-colors relative group cursor-none-target" href="#">
                        Privacy Policy
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#67FFBD] transition-all group-hover:w-full"></span>
</a>
<a className="text-neutral-500 hover:text-[#67FFBD] transition-colors relative group cursor-none-target" href="#">
                        Risk Disclaimer
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#67FFBD] transition-all group-hover:w-full"></span>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 text-xs text-neutral-600 font-mono">
            © 2024 DEXTRABOT SYSTEMS. ALL RIGHTS RESERVED.
        </div>
</footer>


    </>
  );
}
