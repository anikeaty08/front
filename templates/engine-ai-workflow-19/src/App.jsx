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



        document.addEventListener('DOMContentLoaded', () => {
            // Cursor Logic
            const dot = document.getElementById('cursor-dot');
            const outline = document.getElementById('cursor-outline');
            const body = document.body;
            
            if (window.matchMedia("(pointer: fine)").matches) {
                let mouseX = 0, mouseY = 0;
                let outlineX = 0, outlineY = 0;

                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                });

                const animateCursor = () => {
                    outlineX += (mouseX - outlineX) * 0.15;
                    outlineY += (mouseY - outlineY) * 0.15;
                    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
                    requestAnimationFrame(animateCursor);
                };
                animateCursor();

                document.querySelectorAll('.interactable, a, button').forEach(el => {
                    el.addEventListener('mouseenter', () => body.classList.add('hovering'));
                    el.addEventListener('mouseleave', () => body.classList.remove('hovering'));
                });
            }

            // Scroll Reveal
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 3D Tilt Effect on Hero Card
            const card = document.getElementById('hero-card');
            const cardInner = card.querySelector('div');
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                cardInner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                cardInner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#6b7eff]/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4a5acc]/10 rounded-full blur-[100px]"></div>
</div>

<div className="hidden md:block" id="cursor-dot"></div>
<div className="hidden md:block" id="cursor-outline"></div>

<nav className="fixed top-0 w-full z-50 border-b border-[#6b7eff]/10 bg-[#0a0e27]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="interactable flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-[#6b7eff]/10 border border-[#6b7eff]/20 flex items-center justify-center text-[#6b7eff] group-hover:bg-[#6b7eff] group-hover:text-white transition-all duration-300">
<span className="iconify" data-icon="lucide:layers" data-width="16"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Gemini 3 Pro</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-[#b0b8c8]">
<a className="interactable hover:text-white transition-colors" href="#features">Features</a>
<a className="interactable hover:text-white transition-colors" href="#integration">Integration</a>
<a className="interactable hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="interactable text-xs font-medium text-[#b0b8c8] hover:text-white hidden sm:block" href="#">Sign in</a>
<button className="interactable relative overflow-hidden group bg-[#6b7eff] hover:bg-[#5568e0] text-white px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-[0_0_20px_rgba(107,126,255,0.3)] hover:shadow-[0_0_30px_rgba(107,126,255,0.5)]">
<span className="relative z-10">Start Building</span>
<div className="shine-effect absolute inset-0"></div>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-xl">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6b7eff]/30 bg-[#6b7eff]/10 text-[10px] font-medium text-[#6b7eff] mb-8 w-fit">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6b7eff] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6b7eff]"></span>
</span>
                    v3.0 Stable Release
                </div>
<h1 className="reveal text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-lg">
                    Design at the speed of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b0b8c8] to-[#6b7eff]">thought.</span>
</h1>
<p className="reveal text-sm md:text-base text-[#b0b8c8] font-light mb-10 leading-relaxed max-w-md" style={{animationDelay: '100ms'}}>
                    The first generative UI engine that respects your design tokens. From prompt to production-ready React components in milliseconds.
                </p>
<div className="reveal flex flex-wrap items-center gap-4" style={{animationDelay: '200ms'}}>
<button className="interactable group relative px-7 py-3.5 bg-[#6b7eff] text-white text-xs font-semibold rounded-full transition-all shadow-[0_0_25px_-5px_rgba(107,126,255,0.4)] hover:shadow-[0_0_35px_-5px_rgba(107,126,255,0.6)] hover:-translate-y-0.5">
<span className="flex items-center gap-2">
                            Deploy Free
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</button>
<button className="interactable px-7 py-3.5 text-[#e0e6ed] hover:text-white text-xs font-medium rounded-full border border-[#2d3554] hover:bg-[#1a1f3a] transition-all flex items-center gap-2 bg-[#0a0e27]">
<span className="iconify" data-icon="lucide:terminal" data-width="14"></span>
                        Documentation
                    </button>
</div>
<div className="reveal mt-12 flex items-center gap-8 text-[10px] text-[#8a92a6] font-medium uppercase tracking-wider" style={{animationDelay: '300ms'}}>
<span className="flex items-center gap-2">
<span className="iconify text-[#4ade80]" data-icon="lucide:check-circle" data-width="14"></span> 
                        Type Safe
                    </span>
<span className="flex items-center gap-2">
<span className="iconify text-[#4ade80]" data-icon="lucide:check-circle" data-width="14"></span> 
                        Zero Config
                    </span>
<span className="flex items-center gap-2">
<span className="iconify text-[#4ade80]" data-icon="lucide:check-circle" data-width="14"></span> 
                        Edge Ready
                    </span>
</div>
</div>

<div className="reveal relative perspective-1000 group" id="hero-card" style={{animationDelay: '200ms'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-[#6b7eff] to-[#4a5acc] rounded-xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-xl overflow-hidden bg-[#0f1525] border border-[#2d3554] shadow-2xl transform transition-transform duration-300 hover:scale-[1.01]" style={{transformStyle: 'preserve-3d'}}>

<div className="flex items-center justify-between px-4 py-3 border-b border-[#2d3554] bg-[#1a1f3a]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-[10px] text-[#8a92a6] font-mono opacity-80">DesignSystem.config.ts</div>
<div className="w-10"></div>
</div>

<div className="p-6 font-mono text-[11px] leading-relaxed overflow-x-auto">
<div className="flex">
<div className="flex flex-col text-right pr-4 text-[#4a5acc] select-none border-r border-[#2d3554] mr-4 opacity-50">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
</div>
<div className="w-full relative text-[#e0e6ed]">
<span className="code-keyword">import</span> { createSystem } <span className="code-keyword">from</span> <span className="code-highlight">'@gemini/core'</span>;<br/><br/>
<span className="code-keyword">export const</span> <span className="code-function">theme</span> = <span className="code-function">createSystem</span>({<br/>
                                  tokens: {<br/>
                                    colors: {<br/>
                                      primary: <span className="code-highlight">'#6b7eff'</span>,<br/>
                                      surface: <span className="code-highlight">'#0a0e27'</span><br/>
                                    },<br/>
                                    physics: <span className="code-highlight">'spring(120, 20)'</span><br/>
                                  }<br/>
                                });
                                <span className="absolute bottom-6 ml-1 w-2 h-4 bg-[#6b7eff] animate-pulse"></span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-panel px-5 py-3 rounded-xl flex items-center gap-3 shadow-[0_16px_48px_rgba(0,0,0,0.5)] animate-[float_4s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] border border-[#4ade80]/20">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</div>
<div>
<div className="text-[9px] text-[#8a92a6] uppercase tracking-wider font-bold">Latency</div>
<div className="text-xs font-semibold text-white">12ms Render</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-[#2d3554] bg-[#0f1525] overflow-hidden">
<p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#8a92a6] font-semibold mb-8">Trusted by engineering teams at</p>
<div className="relative flex w-full overflow-hidden mask-image-linear-gradient" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex items-center gap-24 animate-marquee whitespace-nowrap will-change-transform">

<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">VERCEL</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">LINEAR</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">STRIPE</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">RAYCAST</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">OPENAI</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">SCALE</span>

<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">VERCEL</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">LINEAR</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">STRIPE</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">RAYCAST</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">OPENAI</span>
<span className="text-xl font-bold text-[#5a6280] tracking-tighter hover:text-white transition-colors cursor-default">SCALE</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="reveal text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Built for flow state.</h2>
<p className="reveal text-[#b0b8c8] font-light max-w-xl text-sm leading-relaxed">
                    Eliminate the context switching between design tools and VS Code. Gemini keeps your system synchronized automatically.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal interactable group glass-panel p-8 rounded-2xl hover:bg-[#1a1f3a] transition-all duration-500 border border-[#2d3554] hover:border-[#6b7eff]/30">
<div className="w-10 h-10 rounded-lg bg-[#6b7eff]/10 flex items-center justify-center text-[#6b7eff] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(107,126,255,0.15)]">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-white text-base font-medium mb-3">Context Aware</h3>
<p className="text-xs text-[#b0b8c8] leading-relaxed font-light">
                        Reads your codebase to match coding style, imports, and component composition patterns automatically.
                    </p>
</div>

<div className="reveal interactable group glass-panel p-8 rounded-2xl hover:bg-[#1a1f3a] transition-all duration-500 border border-[#2d3554] hover:border-[#6b7eff]/30" style={{animationDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.15)]">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-white text-base font-medium mb-3">Physics Engine</h3>
<p className="text-xs text-[#b0b8c8] leading-relaxed font-light">
                        Don't just animate values. Simulate mass and friction. Gemini injects spring physics into every interaction.
                    </p>
</div>

<div className="reveal interactable group glass-panel p-8 rounded-2xl hover:bg-[#1a1f3a] transition-all duration-500 border border-[#2d3554] hover:border-[#6b7eff]/30" style={{animationDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.15)]">
<span className="iconify" data-icon="lucide:git-pull-request" data-width="20"></span>
</div>
<h3 className="text-white text-base font-medium mb-3">Self-Healing</h3>
<p className="text-xs text-[#b0b8c8] leading-relaxed font-light">
                        Detects breaking changes in your design tokens and automatically generates pull requests to fix downstream.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-[#2d3554] bg-[#0f1525] relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="reveal text-3xl font-semibold text-white mb-6 tracking-tight">Performance is a feature.</h2>
<div className="space-y-6">
<div className="reveal p-4 rounded-lg bg-[#1a1f3a] border border-[#2d3554]">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-white">Gemini 3 Pro</span>
<span className="text-xs font-bold text-[#4ade80]">99/100</span>
</div>
<div className="w-full h-1.5 bg-[#0a0e27] rounded-full overflow-hidden">
<div className="h-full bg-[#4ade80] w-[99%] shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
</div>
<div className="reveal p-4 rounded-lg border border-[#2d3554] opacity-50">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-[#b0b8c8]">Standard UI Lib</span>
<span className="text-xs font-bold text-[#b0b8c8]">64/100</span>
</div>
<div className="w-full h-1.5 bg-[#0a0e27] rounded-full overflow-hidden">
<div className="h-full bg-[#64748b] w-[64%]"></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="reveal p-6 rounded-2xl bg-[#1a1f3a] border border-[#2d3554] text-center">
<div className="text-3xl font-bold text-white mb-1">0ms</div>
<div className="text-[10px] uppercase tracking-wider text-[#8a92a6]">Runtime Overhead</div>
</div>
<div className="reveal p-6 rounded-2xl bg-[#1a1f3a] border border-[#2d3554] text-center">
<div className="text-3xl font-bold text-white mb-1">100%</div>
<div className="text-[10px] uppercase tracking-wider text-[#8a92a6]">Type Safety</div>
</div>
<div className="reveal col-span-2 p-6 rounded-2xl bg-[#1a1f3a] border border-[#2d3554] text-center">
<div className="text-3xl font-bold text-white mb-1">&lt; 5kb</div>
<div className="text-[10px] uppercase tracking-wider text-[#8a92a6]">Bundle Size (Gzipped)</div>
</div>
</div>
</div>
</section>

<footer className="py-32 relative overflow-hidden bg-[#0a0e27]">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-4xl sm:text-5xl font-semibold text-white mb-8 tracking-tight">
                Ready to ship your <br/>
<span className="text-[#6b7eff]">magnum opus</span>?
            </h2>
<p className="reveal text-[#b0b8c8] text-sm mb-12 max-w-md mx-auto leading-relaxed">
                Join thousands of engineers who have replaced their component library with Gemini 3 Pro. Start building your legacy today.
            </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="interactable px-8 py-4 bg-white text-[#0a0e27] text-sm font-bold rounded-full transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Start for free
                </button>
<button className="interactable px-8 py-4 text-[#8a92a6] hover:text-white text-sm font-medium transition-colors hover:underline decoration-[#6b7eff] underline-offset-4">
                    Contact Sales
                </button>
</div>
<div className="mt-24 pt-8 border-t border-[#2d3554] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#5a6280] uppercase tracking-wider font-semibold">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="iconify" data-icon="lucide:layers" data-width="12"></span>
<span>© 2024 Gemini Inc.</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
