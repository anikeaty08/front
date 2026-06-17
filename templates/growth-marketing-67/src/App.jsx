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
            if (window.lucide) {
                lucide.createIcons();
            }

            // Counter Animation
            function animateCounters() {
                const counters = document.querySelectorAll('.counter');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target;
                            const target = parseFloat(counter.getAttribute('data-target'));
                            const suffix = counter.getAttribute('data-suffix') || '';
                            const duration = 2000;
                            const startTime = performance.now();

                            function updateCounter(currentTime) {
                                const elapsedTime = currentTime - startTime;
                                const progress = Math.min(elapsedTime / duration, 1);
                                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                                
                                let current;
                                if (suffix === 'x' || suffix === '%') {
                                    current = (target * easeOutQuart).toFixed(1);
                                } else if (suffix === 'M+') {
                                    current = Math.floor(target * easeOutQuart);
                                } else {
                                    current = Math.floor(target * easeOutQuart);
                                }
                                
                                counter.innerText = (suffix === 'M+') ? '$' + current + suffix : current + suffix;
                                
                                if (progress < 1) {
                                    requestAnimationFrame(updateCounter);
                                }
                            }
                            
                            requestAnimationFrame(updateCounter);
                            observer.unobserve(counter);
                        }
                    });
                }, { threshold: 0.5 });

                counters.forEach(counter => observer.observe(counter));
            }
            animateCounters();
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8b3b39-e23c-43e6-be7b-500fa586c81f_1600w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--orange)] opacity-[0.05] blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#3D2C8D] opacity-[0.04] blur-[100px]"></div>
</div>

<header className="fixed top-6 left-4 right-4 z-50 fade-in">
<div className="max-w-7xl mx-auto">
<div className="flex transition-all duration-300 [--fx-filter:blur(2px)_liquid-glass(2.7,10)_saturate(0.8)_noise(0.5,1,0)_contrast(0.6)] bg-black/40 opacity-90 h-16 border-0 rounded-2xl ring-[#ff883a] ring-2 pr-6 pl-6 shadow-2xl backdrop-blur-2xl grayscale-0 invert-0 saturate-150 brightness-125 items-center justify-between">
<div className="flex gap-3 items-center cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-8 h-8 flex bg-gradient-to-br from-[var(--orange)] to-[var(--orange-2)] rounded-lg items-center justify-center shadow-lg shadow-orange-500/20">
<svg className="h-5 w-5 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Xpandor</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[var(--orange)] transition-colors text-[#B7B7C2]" href="#">Služby</a>
<a className="text-[#B7B7C2] hover:text-[var(--orange)] transition-colors" href="#">Práca</a>
<a className="text-[#B7B7C2] hover:text-[var(--orange)] transition-colors" href="#">Proces</a>
<a className="text-[#B7B7C2] hover:text-[var(--orange)] transition-colors" href="#">Cenník</a>
</nav>
<div className="hidden md:flex items-center gap-4">

<button className="particle-btn">
<span className="inner">Kontaktujte nás
                            <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
</button>
</div>
<button className="md:hidden p-2 text-white/80 hover:text-white">
<svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</header>

<div className="sm:px-6 lg:px-8 z-10 font-playfair max-w-full mr-auto ml-auto pt-40 pr-4 pl-4 relative">

<div className="-translate-x-1/2 -z-10 opacity-30 w-[800px] h-[400px] absolute top-20 left-1/2 blur-3xl"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="slide-up inline-flex items-center gap-3 px-4 py-1.5 bg-[#1A1A24] border border-white/10 rounded-full mb-8 hover:border-[var(--orange)]/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse shadow-[0_0_10px_var(--orange)]"></div>
<span className="uppercase text-xs font-semibold text-[#B7B7C2] tracking-wider">S predvídateľnou návratnosťou investícií (ROI)</span>
</div>
<h1 className="slide-up stagger-1 display-font leading-[1.1] sm:text-7xl lg:text-8xl text-5xl font-semibold text-white tracking-normal font-merriweather mb-8">Škáluj neuveriteľným spôsobom</h1>
<p className="slide-up stagger-2 md:text-xl leading-relaxed text-lg font-normal text-[#B7B7C2] max-w-2xl mr-auto mb-10 ml-auto">
                Xpandor je rastovým partnerom pre ambiciózne značky. Spájame stratégiu založenú na dátach so špičkovou kreatívou pre ziskové získavanie zákazníkov vo veľkom.
            </p>
<div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">

<button className="particle-btn">
<span className="inner">Rezervovať bezplatnú konzultáciu
                        <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
</button>
<button className="px-8 py-3.5 text-[#F5F5F7] font-semibold border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2 group min-h-[48px]">
                    Zobraziť prípadové štúdie
                    <svg className="w-4 h-4 text-[var(--orange)] group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="slide-up stagger-4 mt-12 flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="uppercase font-medium text-white/50 tracking-widest">Dôveruje nám už viac ako 10 rastúcich firiem.</span>
</div>
</div>
</div>

<section className="pt-24 pb-12">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="stagger-2 glass-effect overflow-hidden md:p-8 shadow-black/50 bg-[#0D0D12] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl blur-in">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-6">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
<div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
</div>
<span className="text-sm text-[#B7B7C2] font-mono">Xpandor_Growth_OS</span>
</div>
<div className="flex items-center gap-3">
<div className="text-[var(--orange)] border-[var(--orange)]/20 text-xs font-medium border rounded-full pt-1 pr-3 pb-1 pl-3">
<span className="animate-pulse text-[#22c55e] mr-1.5">●</span> Live Data
                        </div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-6">

<aside className="hidden lg:block lg:col-span-3 space-y-4">
<div className="text-xs font-bold text-white/30 uppercase tracking-wider mb-2 pl-2">Aktívne Kanály</div>
<div className="space-y-1">
<div className="flex items-center gap-3 p-3 bg-white/5 border-l-2 border-[var(--orange)] rounded-r-lg cursor-pointer">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<span className="text-sm font-medium text-white">Meta Ads</span>
<span className="ml-auto text-xs text-green-400">+12%</span>
</div>
<div className="flex hover:bg-white/5 hover:border-white/20 cursor-pointer transition-colors opacity-70 border-transparent rounded-r-lg border-l-2 pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-medium text-[#B7B7C2]">Google PPC</span>
</div>
<div className="flex items-center gap-3 p-3 hover:bg-white/5 border-l-2 border-transparent hover:border-white/20 rounded-r-lg cursor-pointer transition-colors opacity-70">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-sm font-medium text-[#B7B7C2]">Email Flows</span>
</div>
</div>
</aside>

<main className="lg:col-span-6">
<div className="bg-[#050508] border border-white/10 rounded-xl overflow-hidden shadow-inner">
<div className="flex items-center gap-1 p-2 border-b border-white/5 bg-[#0B0B0F]">
<div className="flex gap-2 bg-white/5 border-white/10 border rounded px-3 py-1.5 items-center">
<span className="text-[10px] text-[var(--orange)] font-bold">TS</span>
<span className="text-xs text-[#E1E1E3]">škálovacia-stratégia.ts</span>
</div>
<div className="hover:text-white cursor-pointer text-xs text-white/30 pt-1.5 pr-3 pb-1.5 pl-3">audience_data</div>
</div>
<div className="p-6 h-[420px] relative text-sm font-mono leading-relaxed overflow-hidden">
<div className="absolute inset-6 space-y-1">
<div className="flex items-start animate-typing-1 opacity-0"><span className="text-white/20 w-6 select-none">1</span><span><span className="text-[#C678DD]">import</span> { <span className="text-[#E5C07B]">Revenue</span>, <span className="text-[#E5C07B]">ROAS</span> } <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">'@xpandor/core'</span>;</span></div>
<div className="flex items-start animate-typing-2 opacity-0"><span className="text-white/20 w-6 select-none">2</span><span><span className="text-[#C678DD]">const</span> <span className="text-[#E06C75]">campaign</span> = <span className="text-[#C678DD]">new</span> <span className="text-[#E5C07B]">Campaign</span>(<span className="text-[#98C379]">'Q4_Scale_Aggressive'</span>);</span></div>
<div className="flex items-start animate-typing-4 opacity-0"><span className="text-white/20 w-6 select-none">4</span><span><span className="text-[#61AFEF]">async</span> <span className="text-[#C678DD]">function</span> <span className="text-[#61AFEF]">optimizePerformance</span>() {</span></div>
<div className="flex items-start animate-typing-5 opacity-0"><span className="text-white/20 w-6 select-none">5</span><span className="pl-4"><span className="text-[#C678DD]">if</span> (current_roas &gt; <span className="text-[#D19A66]">4.5</span>) {</span></div>
<div className="flex items-start animate-typing-6 opacity-0"><span className="text-white/20 w-6 select-none">6</span><span className="pl-8"><span className="text-[#E5C07B]">console</span>.<span className="text-[#61AFEF]">log</span>(<span className="text-[#98C379]">"🚀 Scaling budget by 200%"</span>);</span></div>
<div className="flex items-start animate-typing-7 opacity-0"><span className="text-white/20 w-6 select-none">7</span><span className="pl-8"><span className="text-[#C678DD]">await</span> <span className="text-[#E06C75]">campaign</span>.<span className="text-[#61AFEF]">scaleBudget</span>({ <span className="text-[#D19A66]">multiplier</span>: <span className="text-[#D19A66]">2.0</span> });</span></div>
<div className="flex items-start animate-typing-8 opacity-0"><span className="text-white/20 w-6 select-none">8</span><span className="pl-4">} <span className="text-[#C678DD]">else</span> {</span></div>
<div className="flex items-start animate-typing-9 opacity-0"><span className="text-white/20 w-6 select-none">9</span><span className="pl-8"><span className="text-[#C678DD]">await</span> <span className="text-[#E06C75]">campaign</span>.<span className="text-[#61AFEF]">deployCreative</span>(<span className="text-[#98C379]">'Var_B_Winner'</span>);</span></div>
<div className="flex items-start animate-typing-10 opacity-0"><span className="text-white/20 w-6 select-none">10</span><span className="pl-4">}</span></div>
<div className="flex items-start animate-typing-11 opacity-0"><span className="text-white/20 w-6 select-none">11</span><span>}</span></div>
<div className="flex items-start animate-typing-12 opacity-0"><span className="text-white/20 w-6 select-none">12</span><span><span className="text-[#5C6370]">// Status: Optimization Complete. Revenue +$45k today.</span><span className="inline-block w-2 h-4 bg-[var(--orange)] animate-pulse ml-2 align-middle"></span></span></div>
</div>
</div>
</div>
</main>

<aside className="lg:col-span-3 space-y-4">
<div className="bg-[#050508] border border-white/10 rounded-xl flex flex-col h-full">
<div className="flex items-center justify-between p-3 border-b border-white/5 bg-[#0B0B0F]">
<span className="text-xs font-bold text-white/50 uppercase">Živé Záznamy</span>
<span className="flex bg-green-500 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
</div>
<div className="text-[11px] overflow-y-auto text-white/70 font-mono h-full pt-4 pr-4 pb-4 pl-4 space-y-3">
<div className=""><span className="text-white/30">[10:42:01]</span> <span className="text-[var(--orange)]">INFO:</span> New creative test launched</div>
<div className=""><span className="text-white/30">[10:45:12]</span> <span className="text-green-400">SUCCESS:</span> CPA dropped to $12.40</div>
<div className=""><span className="text-white/30">[10:48:30]</span> <span className="text-blue-400">SCALE:</span> Increasing budget on AdSet_04</div>
<div className=""><span className="text-white/30">[11:02:15]</span> <span className="text-[var(--orange)]">ALERT:</span> ROAS target (4.5x) exceeded</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121A] border border-white/10 text-xs font-medium text-[var(--orange)] mb-6 shadow-lg shadow-black/20">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] shadow-[0_0_8px_var(--orange)]"></span>
                    Technológia
                </div>
<h2 className="text-5xl sm:text-6xl display-font font-semibold text-white tracking-tight">Xpandor Studio</h2>
</div>

<div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0E0E11] shadow-2xl shadow-black/80 ring-1 ring-white/5">

<div className="flex h-14 items-center justify-between border-b border-white/5 bg-[#121216] px-5">
<div className="flex items-center gap-5">
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-inner"></div>
<div className="h-3 w-3 rounded-full bg-[#FEBC2E] shadow-inner"></div>
<div className="h-3 w-3 rounded-full bg-[#28C840] shadow-inner"></div>
</div>
<div className="hidden items-center gap-2.5 rounded-md border border-white/5 bg-[#1C1C21] px-3 py-1.5 text-xs font-medium text-[#787880] sm:flex shadow-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="9" x2="9" y1="3" y2="21"></line></svg>
<span>Xpandor Studio — Campaign: Aurora</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="rounded-lg p-2 text-[#787880] hover:bg-white/5 hover:text-white transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>

<button className="particle-btn" style={{minHeight: '38px', padding: '8px 16px', minWidth: '80px'}}>
<span className="inner" style={{fontSize: '12px'}}>Deploy
                                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
</button>
</div>
</div>

<div className="grid h-[650px] grid-cols-1 md:grid-cols-[260px_1fr_260px] bg-[#09090B]">

<div className="hidden border-r border-white/5 p-4 md:block">
<div className="h-full rounded-xl border border-white/5 bg-[#121216] p-4">
<h3 className="mb-4 text-xs font-medium text-[#52525B]">Vrstvy</h3>
<div className="space-y-1">
<div className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--orange)]/10 bg-[var(--orange)]/10 px-3 py-2 text-xs font-medium text-[var(--orange)] transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
                                    Hero_Video
                                </div>
<div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-[#71717A] hover:bg-white/5 hover:text-white transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                                    Overlay
                                </div>
</div>
</div>
</div>

<div className="relative flex flex-col bg-black/20">
<div className="flex h-10 items-center gap-3 border-b border-white/5 bg-[#0E0E11] px-4 text-[10px] font-medium text-[#71717A]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span>Mobile Portrait</span>
<span className="text-white/10">|</span>
<span>1080x1920</span>
</div>
<div className="flex flex-1 items-center justify-center p-8">
<div className="relative aspect-[9/16] h-[520px] overflow-hidden rounded-[2rem] border-[6px] border-[#1C1C21] bg-[#1C1C21] shadow-2xl">
<img alt="Campaign Creative" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-6 right-6">
<button className="w-full rounded-xl bg-white py-3.5 text-xs font-bold text-black shadow-lg hover:bg-gray-100 transition-colors">Shop Now</button>
</div>

<div className="absolute top-0 left-0 right-0 flex justify-between px-5 py-3">
<span className="text-[10px] font-bold text-white">9:41</span>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-white"></div>
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden border-l border-white/5 p-4 md:block">
<div className="h-full rounded-xl border border-white/5 bg-[#121216] p-4">
<h3 className="mb-4 text-xs font-medium text-[#52525B]">Efekty</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs text-[#71717A]">Blur</span>
<span className="rounded bg-[#1C1C21] px-2 py-1 text-[10px] font-medium text-[#A1A1AA] border border-white/5">8px</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-[#71717A]">Contrast</span>
<span className="rounded bg-[#1C1C21] px-2 py-1 text-[10px] font-medium text-[#A1A1AA] border border-white/5">+15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 slide-up stagger-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[var(--orange)] mb-6">
<span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse"></span>
                        Social Media &amp; Content
                    </div>
<h2 className="text-4xl sm:text-5xl display-font font-semibold text-white mb-6">
                        Kreatíva, ktorá nielen vyzerá, ale aj predáva
                    </h2>
<p className="text-xl text-[#B7B7C2] mb-8 leading-relaxed">
                        Dáta sú palivo, ale kreatíva je motor. Vytvárame obsah pre sociálne siete, ktorý buduje komunitu a zároveň agresívne konvertuje.
                    </p>
<ul className="space-y-6 mb-8">
<li className="flex items-start gap-4 text-[#F5F5F7]">
<div className="mt-1 w-6 h-6 rounded-lg bg-[var(--orange)]/10 border border-[var(--orange)]/20 flex items-center justify-center text-[var(--orange)] shrink-0">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div>
<span className="text-[#B7B7C2] text-sm">Obsah optimalizovaný pre algoritmy Instagramu a TikToku.</span>
</div>
</li>
<li className="flex items-start gap-4 text-[#F5F5F7]">
<div className="mt-1 w-6 h-6 rounded-lg bg-[var(--orange)]/10 border border-[var(--orange)]/20 flex items-center justify-center text-[var(--orange)] shrink-0">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div>
<span className="text-[#B7B7C2] text-sm">Váš brand bude rozpoznateľný v zlomku sekundy.</span>
</div>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 flex justify-center perspective-1000 slide-up stagger-2">
<div className="relative w-[300px] h-[600px] bg-[#12121A] rounded-[2.5rem] border-[6px] border-[#2A2A35] shadow-2xl shadow-black/60 rotate-y-12 hover:rotate-0 transition-transform duration-700 ease-out group/phone">
<div className="-translate-x-1/2 bg-black w-[100px] h-[24px] z-20 rounded-b-xl absolute top-0 left-1/2"></div>
<div className="absolute inset-0 bg-black rounded-[2rem] overflow-hidden flex flex-col">
<div className="flex justify-between items-center px-4 pt-8 pb-3 bg-black z-10">
<span className="text-white font-bold text-lg font-playfair italic">Instagram</span>
<div className="flex gap-4 text-white">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
<div className="flex-1 overflow-hidden relative">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
<div className="w-full h-full rounded-full bg-black border border-black overflow-hidden flex items-center justify-center">
<span className="text-[8px] font-bold text-white">XP</span>
</div>
</div>
<div className="flex flex-col">
<span className="text-white text-xs font-semibold">xpandor_agency</span>
</div>
</div>
</div>
<div className="relative w-full aspect-[4/5] bg-[#1A1A24] overflow-hidden group-hover/phone:scale-[1.02] transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-black to-[#1E1E2E]"></div>
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.4),transparent_50%)] animate-[spin_8s_linear_infinite] opacity-60"></div>
<div className="flex flex-col text-center z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h3 className="text-2xl font-bold text-white font-merriweather leading-tight drop-shadow-lg">
                                                Dominujte trhu.
                                            </h3>
</div>
</div>
<div className="flex justify-between items-center px-3 py-3">
<div className="flex items-center gap-4 text-white">
<svg className="text-red-500 like-animation" fill="#ef4444" height="22" stroke="none" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="slide-up stagger-1 text-4xl sm:text-5xl display-font font-semibold text-white mb-6">
                    Komplexný rast (Full-Stack)
                </h2>
<p className="slide-up stagger-2 text-xl text-[#B7B7C2] max-w-2xl mx-auto">
                    Neponúkame len menu. Ponúkame výsledok. Tu je postup, ako vás tam dostaneme.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-[#12121A] border border-white/5 rounded-3xl hover:border-[var(--orange)]/30 hover:bg-[#15151E] transition-all duration-300 group">
<div className="w-12 h-12 flex bg-[var(--orange)]/10 border border-[var(--orange)]/20 rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6 text-[var(--orange)]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3 display-font">Platená reklama</h3>
<p className="text-[#B7B7C2] text-sm leading-relaxed">Získajte zákazníkov ziskovo na Meta, Google, TikTok a LinkedIn pomocou algoritmických stratégií.</p>
</div>

<div className="p-8 bg-[#12121A] border border-white/5 rounded-3xl hover:border-[var(--orange)]/30 hover:bg-[#15151E] transition-all duration-300 group">
<div className="w-12 h-12 flex bg-purple-500/10 border border-purple-500/20 rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3 display-font">Kreatíva a obsah</h3>
<p className="text-[#B7B7C2] text-sm leading-relaxed">Kreatíva, ktorá predáva. Tvoríme vysoko konverzné UGC, statické reklamy a VSL.</p>
</div>

<div className="p-8 bg-[#12121A] border border-white/5 rounded-3xl hover:border-[var(--orange)]/30 hover:bg-[#15151E] transition-all duration-300 group">
<div className="w-12 h-12 flex bg-blue-500/10 border border-blue-500/20 rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3 display-font">CRO a pristávacie stránky</h3>
<p className="text-[#B7B7C2] text-sm leading-relaxed">Premeňte viac kliknutí na leady. Budujeme a optimalizujeme stránky pre maximálnu konverziu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<h2 className="text-4xl display-font font-semibold text-white mb-8">Transparentné ceny</h2>

<div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 hover:border-[var(--orange)] transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[var(--orange)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="text-lg font-bold text-white">Growth Partner</h3>
<p className="text-[#B7B7C2] text-sm mt-1">Pre firmy škálujúce na €50k+ mesačne.</p>
</div>
<div className="text-right">
<span className="block text-2xl font-bold text-white">€2,500</span>
<span className="text-xs text-[#B7B7C2]">/ mesiac + % z obratu</span>
</div>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-sm text-[#E1E1E3]">
<svg className="w-4 h-4 text-[var(--orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Full-Stack Media Buying
                            </li>
<li className="flex items-center gap-3 text-sm text-[#E1E1E3]">
<svg className="w-4 h-4 text-[var(--orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                4x Nové kreatívy mesačne
                            </li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-[#050508] border border-white/5 hover:border-white/20 transition-colors relative">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-bold text-white">Enterprise</h3>
<p className="text-[#B7B7C2] text-sm mt-1">Vlastný tím pre globálne značky.</p>
</div>
<div className="text-right">
<span className="block text-xl font-bold text-white">Na mieru</span>
</div>
</div>
<div className="mt-6">

<button className="particle-btn" style={{minWidth: '100%', minHeight: '42px', padding: '10px'}}>
<span className="inner" style={{fontSize: '14px'}}>Kontaktujte nás
                                    <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
</button>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] flex items-center justify-center">
<div className="relative w-full max-w-md aspect-[4/3] transform hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-tr from-[var(--orange)]/20 to-purple-500/20 blur-[60px] rounded-full"></div>
<img alt="Premium Card" className="relative z-10 w-full h-full object-contain drop-shadow-2xl rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cb11911-53c5-45cc-a756-9dbe2010e635_800w.jpg"/>
</div>
</div>
</div>
</div>
</section>
<style>
        /* Typing Animation Delays */
        .animate-typing-1 { animation: fadeIn 0.1s forwards 0.2s; }
        .animate-typing-2 { animation: fadeIn 0.1s forwards 0.6s; }
        .animate-typing-4 { animation: fadeIn 0.1s forwards 1.0s; }
        .animate-typing-5 { animation: fadeIn 0.1s forwards 1.4s; }
        .animate-typing-6 { animation: fadeIn 0.1s forwards 1.8s; }
        .animate-typing-7 { animation: fadeIn 0.1s forwards 2.2s; }
        .animate-typing-8 { animation: fadeIn 0.1s forwards 2.6s; }
        .animate-typing-9 { animation: fadeIn 0.1s forwards 3.0s; }
        .animate-typing-10 { animation: fadeIn 0.1s forwards 3.4s; }
        .animate-typing-11 { animation: fadeIn 0.1s forwards 3.6s; }
        .animate-typing-12 { animation: fadeIn 0.1s forwards 4.0s; }
    </style>

<section className="py-24 border-t border-white/5 bg-[#0B0B0F]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="slide-up text-4xl sm:text-5xl display-font font-semibold text-white mb-6">
                    Výsledky, ktoré sa znásobujú
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="success-card rounded-2xl p-0 group">
<div className="h-48 bg-[#12121A] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent z-10"></div>
<div className="absolute bottom-4 left-6 z-20">
<h3 className="text-2xl font-bold text-white mb-1 display-font">300% ROAS</h3>
<p className="text-sm text-[var(--orange)] font-medium">E-commerce Móda</p>
</div>
</div>
<div className="p-6">
<p className="text-[#B7B7C2] text-sm leading-relaxed">"Xpandor kompletne prepracoval našu kreatívnu stratégiu."</p>
</div>
</div>

<div className="success-card rounded-2xl p-0 group">
<div className="h-48 bg-[#12121A] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent z-10"></div>
<div className="absolute bottom-4 left-6 z-20">
<h3 className="text-2xl font-bold text-white mb-1 display-font">$2.4M Generovaných</h3>
<p className="text-sm text-[var(--orange)] font-medium">SaaS B2B</p>
</div>
</div>
<div className="p-6">
<p className="text-[#B7B7C2] text-sm leading-relaxed">"Najtechnickejšia agentúra, s akou sme pracovali."</p>
</div>
</div>

<div className="success-card rounded-2xl p-0 group">
<div className="h-48 bg-[#12121A] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent z-10"></div>
<div className="absolute bottom-4 left-6 z-20">
<h3 className="text-2xl font-bold text-white mb-1 display-font">-45% CPA</h3>
<p className="text-sm text-[var(--orange)] font-medium">Fintech Aplikácia</p>
</div>
</div>
<div className="p-6">
<p className="text-[#B7B7C2] text-sm leading-relaxed">"Xpandor opravil náš lievik a zdvojnásobil dennú akvizíciu."</p>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
<div className="text-center group hover:transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl display-font font-semibold text-white mb-2 counter" data-suffix="M+" data-target="50">$50M+</div>
<div className="text-sm text-[#B7B7C2] uppercase tracking-wide">Spravované výdavky</div>
</div>
<div className="text-center group hover:transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl display-font font-semibold text-white mb-2 counter" data-suffix="x" data-target="4.5">4.5x</div>
<div className="text-sm text-[#B7B7C2] uppercase tracking-wide">Priemerné ROAS</div>
</div>
<div className="text-center group hover:transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl display-font font-semibold text-white mb-2 counter" data-suffix="M+" data-target="200">$200M+</div>
<div className="text-sm text-[#B7B7C2] uppercase tracking-wide">Generované tržby</div>
</div>
<div className="text-center group hover:transform hover:scale-105 transition-transform">
<div className="text-4xl lg:text-5xl display-font font-semibold text-white mb-2 counter" data-suffix="%" data-target="95">95.0%</div>
<div className="text-sm text-[#B7B7C2] uppercase tracking-wide">Retencia klientov</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-3xl font-semibold text-white mb-6">Navštívte nás</h2>
<p className="text-[#B7B7C2] mb-8">
                        Sídlo v Košiciach. Pôsobnosť globálne. Príďte na kávu a preberme vašu stratégiu.
                    </p>
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<svg className="text-[var(--orange)]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="text-white font-semibold">Adresa</h4>
<p className="text-[#B7B7C2] text-sm">Moyzesova 36040 01 Košice, Slovensko</p>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden bg-stone-100 border border-white/10 shadow-2xl">
<iframe allowfullscreen="" className="grayscale invert brightness-75 contrast-125" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Moyzesova%2036%2C%20Ko%C5%A1ice&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0', minHeight: '300px'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--orange)]/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="glass-effect rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl shadow-[var(--orange)]/10">
<h2 className="text-4xl sm:text-5xl display-font font-semibold text-white mb-6">
                    Prestaňte hádať. Začnite škálovať.
                </h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center">

<button className="particle-btn">
<span className="inner">Kontaktujte nás
                            <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
</button>
<button className="hover:bg-white/5 transition-all flex gap-2 font-semibold text-white border-white/20 border rounded-2xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center min-h-[48px]">Zavolať</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-12 bg-[#050508]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center pt-8">
<p className="text-xs text-white/30">© 2026 Xpandor, Inc. Všetky práva vyhradené.</p>
<div className="text-white/30 text-xs mt-4 md:mt-0 flex gap-4 items-center">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
