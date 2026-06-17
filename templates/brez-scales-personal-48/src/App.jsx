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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 60s linear infinite',
'beam': 'beam 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



(function () {
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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Mouse spotlight effect
        const spotlight = document.querySelector('.pointer-events-none');
        const cards = document.querySelectorAll('.spotlight-card, .spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            spotlight.style.setProperty('--mouse-x', `${x}px`);
            spotlight.style.setProperty('--mouse-y', `${y}px`);

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x-rel', `${x}px`);
                card.style.setProperty('--mouse-y-rel', `${y}px`);
            });
        });
        
        // Scramble effect logic
        const scrambleElements = document.querySelectorAll('.scramble-text');
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        const runScramble = (el) => {
            let iteration = 0;
            const originalText = el.dataset.text;
            clearInterval(el.interval);
            
            el.interval = setInterval(() => {
                el.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) return originalText[index];
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                
                if(iteration >= originalText.length) clearInterval(el.interval);
                iteration += 1/3;
            }, 30);
        }

        // Initialize scramble on load (wait for initial fade-in)
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
                scrambleElements.forEach(el => runScramble(el));
            }, 1000); 
        });

        // Keep hover effect
        scrambleElements.forEach(el => {
            el.onmouseover = () => runScramble(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.04), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 z-50 opacity-60"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 w-full h-full border-x border-white/5">
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}><div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-beam" style={{animationDuration: '12s', animationDelay: '1.5s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}><div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-sky-500 to-transparent animate-beam" style={{animationDuration: '15s', animationDelay: '4s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.4s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.25s'}}><div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-beam" style={{animationDuration: '10s', animationDelay: '0.5s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.35s'}}><div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-beam" style={{animationDuration: '14s', animationDelay: '2.5s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.2s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.45s'}}><div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam" style={{animationDuration: '13s', animationDelay: '5s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:infinity-bold"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white">Brez Scales</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">Scale Your Brand <iconify-icon className="text-gray-600 group-hover:text-white transition-colors" icon="lucide:chevron-down" width="10"></iconify-icon></a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#">Mentorship</a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#">Free Training</a>
<a className="text-xs font-normal text-gray-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-1 text-xs font-normal text-gray-300 hover:text-white" href="#">Log In</a>
<button className="relative rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group uppercase">
<span className="relative z-10">Scale Your Brand</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="relative pt-8">

<section className="flex flex-col w-full max-w-7xl z-10 mt-16 mr-auto mb-20 ml-auto px-6 relative" id="hero">

<div className="w-full flex justify-start mb-6 spotlight-group relative [animation:animationIn_1.2s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,211,238,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-3 rounded-full border border-white/10 bg-black/40 pr-3 pl-1 py-1 hover:border-white/20 transition-all overflow-hidden" href="#">
<span className="rounded-full bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 text-[9px] font-semibold text-cyan-300 tracking-wide uppercase">New</span>
<span className="text-xs font-light text-gray-300">Free Training: The Ad Blueprint</span>
<iconify-icon className="text-gray-500 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

<div className="relative z-20 [animation:animationIn_1.2s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="flex flex-col gap-1">
<div className="text-white/30 font-mono text-[10px] mb-2 flex items-center gap-2">01_SCALE <div className="w-1 h-1 rounded-full bg-cyan-500/80 animate-pulse"></div></div>
<h1 className="md:text-5xl lg:text-[64px] leading-[0.9] text-4xl italic text-white tracking-tight font-serif">
<span className="block scramble-text" data-text="I SCALE BRANDS">I SCALE BRANDS</span>
<span className="block not-italic font-light text-gray-500 tracking-tighter scramble-text" data-text="WITH PAID ADS.">WITH PAID ADS.</span>
</h1>
</div>
</div>

<div className="relative z-20 md:text-right [animation:animationIn_1.2s_ease-out_0.6s_both] animate-on-scroll animate">
<div className="flex flex-col gap-1 md:items-end">
<div className="text-white/30 font-mono text-[10px] mb-2 flex items-center gap-2 justify-start md:justify-end"><div className="w-1 h-1 rounded-full bg-sky-500/80 animate-pulse"></div> 02_RESULTS</div>
<h2 className="md:text-5xl lg:text-[64px] leading-[0.9] text-4xl italic text-white tracking-tight font-serif">
<span className="block not-italic md:text-5xl text-3xl font-light text-gray-500 tracking-tighter mb-1 scramble-text" data-text="20-year-old entrepreneur">20-year-old entrepreneur</span>
<span className="block scramble-text" data-text="taking brands to 6 figures.">taking brands to 6 figures.</span>
</h2>
</div>
</div>
</div>

<div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end [animation:animationIn_1.2s_ease-out_0.8s_both] animate-on-scroll animate">

<div className="group relative rounded-2xl bg-white/[0.02] p-5 md:p-6 spotlight-group spotlight-card overflow-hidden">
<div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34, 211, 238, 0.15), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-sky-600 rounded-r-full"></div>
<p className="text-sm md:text-base text-gray-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
                        "Young entrepreneur working on a laptop with ads dashboards and city lights in the background. We run your TikTok and Meta ads from A to Z: strategy, launch, scaling, and daily optimization."
                    </p>
<div className="mt-4 flex gap-2 items-center">
<div className="flex -space-x-2">
<div className="h-5 w-5 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[7px] text-white">F</div>
<div className="h-5 w-5 rounded-full border border-black bg-cyan-900 flex items-center justify-center text-[7px] text-white">A</div>
<div className="h-5 w-5 rounded-full border border-black bg-sky-900 flex items-center justify-center text-[7px] text-white">B</div>
</div>
<span className="text-[9px] text-gray-500 font-mono tracking-wider">TRUSTED_BY_BRANDS</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-4 z-10 pl-2 relative justify-end">

<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-cyan-500/40 opacity-40 rounded-full absolute blur"></div>
<div className="flex gap-2 active:translate-y-[2px] transition-all duration-150 text-cyan-950 bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 h-12 rounded-full px-6 relative shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_4px_0_#0e7490,0_10px_15px_-3px_rgba(0,0,0,0.5)] items-center">
<span className="text-sm font-semibold tracking-tight">Scale Your Brand</span>
<iconify-icon className="text-cyan-950/60" icon="lucide:zap" width="16"></iconify-icon>
</div>
</button>

<button className="hover:bg-white/5 transition-all flex h-12 text-sm font-medium text-gray-200 bg-white/[0.03] rounded-full px-6 items-center justify-center group relative overflow-hidden" style={{'--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="text-sm font-medium text-gray-300 tracking-tight group-hover:text-white transition-colors">Watch Free Training</span>
<iconify-icon className="ml-2 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="z-20 w-full mt-12 relative [animation:animationIn_1.2s_ease-out_1.0s_both] animate-on-scroll animate">
<p className="uppercase text-[10px] font-semibold text-gray-600 tracking-widest font-mono text-center mb-6">WHY BRANDS TRUST ME</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-16 gap-y-16 items-center">
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:openai" width="80"></iconify-icon>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:stripe" width="80"></iconify-icon>
<svg className="text-gray-500" data-icon-set="simple-icons" data-simple-icons="vercel" height="28" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:ycombinator" width="80"></iconify-icon>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:linear" width="80"></iconify-icon>
</div>
<div aria-hidden="true" className="flex gap-16 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-16">
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:openai" width="80"></iconify-icon>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:stripe" width="80"></iconify-icon>
<svg className="text-gray-500" height="28" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:ycombinator" width="80"></iconify-icon>
<iconify-icon className="text-gray-500" height="28" icon="simple-icons:linear" width="80"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto px-6 relative items-center" id="features">

<div className="text-center max-w-2xl mx-auto px-6 mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight mb-3">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Everything You Need</span>
<span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">To Scale</span>
</h2>
<p className="text-gray-400 text-base font-light leading-relaxed">We focus on Media Buying, Creatives, and Data.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full relative">

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-5 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,211,238,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex flex-col p-3 gap-2 select-none">
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 relative z-10"><div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div><div className="h-1 w-10 bg-white/20 rounded"></div></div><div className="h-1 w-6 bg-white/10 rounded"></div></div>
<div className="flex items-center justify-between p-2 rounded bg-transparent border border-white/5 relative z-10 opacity-60"><div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div><div className="h-1 w-14 bg-white/20 rounded"></div></div><div className="h-1 w-4 bg-white/10 rounded"></div></div>
<div className="absolute bottom-3 right-3 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 z-20 shadow-xl"><iconify-icon className="text-cyan-400 text-[10px]" icon="solar:verified-check-linear"></iconify-icon><span className="text-[8px] font-mono text-cyan-200">SCALING</span></div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-2 mb-2"><span className="text-[10px] font-mono text-cyan-500 border border-cyan-500/20 bg-cyan-500/5 px-1.5 py-0.5 rounded">01</span><iconify-icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" icon="solar:transfer-horizontal-linear" width="16"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1 tracking-tight">Paid Ads Management</h3>
<p className="text-xs text-gray-500 leading-relaxed">We run your TikTok and Meta ads from A to Z: strategy, launch, scaling, and daily optimization.</p>
</div>
</div>

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-5 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(14,165,233,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-3 select-none">
<div className="w-full max-w-[150px] space-y-2 relative z-10">
<div className="flex items-center justify-between px-2 py-1.5 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm"><div className="flex items-center gap-1.5"><iconify-icon className="text-gray-400 text-[10px]" icon="solar:graph-new-linear"></iconify-icon><div className="h-1 w-10 bg-white/30 rounded"></div></div><div className="text-[9px] text-sky-400 font-mono">+320%</div></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-2 mb-2"><span className="text-[10px] font-mono text-sky-500 border border-sky-500/20 bg-sky-500/5 px-1.5 py-0.5 rounded">02</span><iconify-icon className="text-gray-400 group-hover:text-sky-400 transition-colors" icon="solar:chart-square-linear" width="16"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1 tracking-tight">Scroll-Stopping Creatives</h3>
<p className="text-xs text-gray-500 leading-relaxed">UGC-style and high-production creatives that feel native to the feed but still convert like crazy.</p>
</div>
</div>

<div className="group relative rounded-xl bg-white/[0.02] border border-white/5 p-5 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight-border" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(99,102,241,0.06), transparent 40%)'}}></div>
<div className="h-40 w-full mb-6 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 80px'}}></div>
<div className="relative w-full h-full border border-dashed border-white/10 rounded-md flex flex-col justify-between p-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"><div className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[9px] font-mono">ROAS &gt; 3.0</div></div>
<div className="absolute top-3 left-3 right-6 bottom-6 bg-indigo-500/5 border border-indigo-500/30 rounded border-dashed animate-pulse"></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-2 mb-2"><span className="text-[10px] font-mono text-indigo-400 border border-indigo-400/20 bg-indigo-400/5 px-1.5 py-0.5 rounded">03</span><iconify-icon className="text-gray-400 group-hover:text-indigo-400 transition-colors" icon="solar:box-minimalistic-linear" width="16"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1 tracking-tight">Data-Driven Scaling</h3>
<p className="text-xs text-gray-500 leading-relaxed">Every decision is made from numbers: ROAS, MER, and profit – not feelings.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto px-6 relative items-center" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">

<div className="flex flex-col justify-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-400 text-base" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">My Story</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4 leading-[0.95]">
<span className="italic block text-gray-500 font-light">From Broke Student</span>
<span className="font-medium">TO 400K/MONTH.</span>
</h2>
<p className="text-base text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
                        Two years ago I was just a college kid with a cracked phone. I realized the internet moved faster than textbooks. I took on small clients, tested creatives in Canva, and became obsessed with ads. Fast forward: 400K/month combined revenue – purely from execution.
                    </p>
<div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
<div className="flex items-start gap-2 group"><div className="mt-0.5 text-cyan-400"><iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon></div><div><div className="text-xs font-medium text-gray-200">High Volume Testing</div></div></div>
<div className="flex items-start gap-2 group"><div className="mt-0.5 text-cyan-400"><iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon></div><div><div className="text-xs font-medium text-gray-200">Native Content</div></div></div>
<div className="flex items-start gap-2 group"><div className="mt-0.5 text-cyan-400"><iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon></div><div><div className="text-xs font-medium text-gray-200">Data Driven</div></div></div>
<div className="flex items-start gap-2 group"><div className="mt-0.5 text-cyan-400"><iconify-icon icon="solar:cpu-bolt-linear" width="18"></iconify-icon></div><div><div className="text-xs font-medium text-gray-200">Partnerships</div></div></div>
</div>
<div className="border-t border-white/10 pt-6">
<div className="flex gap-12">
<div><div className="text-3xl font-serif italic text-white mb-1 tracking-tight">400K/mo</div><div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Revenue</div></div>
<div><div className="text-3xl font-serif italic text-white mb-1 tracking-tight">50+</div><div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Brands Scaled</div></div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="w-full rounded-xl bg-[#050505] border border-white/10 p-1 relative shadow-2xl overflow-hidden group/ui">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
<div className="flex overflow-hidden bg-black/40 w-full h-[360px] rounded-lg">

<div className="flex-1 border-r border-white/5 bg-white/[0.01] p-3 flex flex-col gap-3">
<div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><iconify-icon className="text-gray-500 text-xs" icon="solar:clock-circle-linear"></iconify-icon><span className="text-xs font-medium text-gray-200">Testing</span></div></div>
<div className="p-3 rounded-md bg-[#0F0F0F] border border-white/5 shadow-lg">
<div className="flex justify-between items-start mb-2"><span className="text-[9px] font-mono text-gray-600">AD-944</span></div>
<div className="text-xs text-gray-200 font-medium mb-2 leading-snug">Launch Creative Test Batch #3</div>
<span className="px-1.5 py-0.5 rounded-[3px] text-[9px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">High Priority</span>
</div>
<div className="bg-[#0F0F0F] border-white/5 border rounded-md p-3 shadow-lg"><div className="text-xs text-gray-200 font-medium mb-2 leading-snug">Script New Angle</div></div>
</div>

<div className="flex-1 p-3 flex flex-col gap-3 bg-black/20">
<div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><iconify-icon className="text-cyan-500 text-xs" icon="solar:check-circle-linear"></iconify-icon><span className="text-xs font-medium text-gray-200">Scaling</span></div></div>
<div className="p-3 rounded-md bg-[#0F0F0F] border border-white/5 shadow-lg opacity-90">
<div className="text-xs text-gray-500 font-medium mb-2 leading-snug line-through">Scale Winner #2891</div>
<span className="px-1.5 py-0.5 rounded-[3px] text-[9px] font-medium bg-cyan-950/30 text-cyan-400 border border-cyan-500/20">Finalized</span>
</div>
</div>
</div>
</div>
<div className="pl-2 relative">
<div className="absolute -left-4 top-0 text-4xl font-serif text-white/5 -z-10 select-none">“</div>
<blockquote className="text-lg font-serif text-gray-300 leading-relaxed mb-4 italic">"Working with this team felt like plugging a growth engine into our brand. Predictable results."</blockquote>
<div className="flex items-center gap-3"><span className="text-xs text-white font-medium">Results vary</span><div className="h-6 w-px bg-white/10"></div><iconify-icon className="text-gray-500 opacity-80" icon="solar:star-circle-bold" width="24"></iconify-icon></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-24 mr-auto mb-24 ml-auto px-6 relative" id="pricing">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-4"><iconify-icon className="text-cyan-400 text-base" icon="solar:tag-price-linear"></iconify-icon><span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">Services</span></div>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-3 leading-[0.95]">
<span className="italic block text-gray-500 font-light">Done-For-You</span>
<span className="font-medium">Growth Infrastructure.</span>
</h2>
</div>
<button className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"><span className="text-xs font-medium text-white">Apply To Work With Me</span><iconify-icon className="text-gray-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="w-full overflow-x-auto pb-4 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="min-w-[800px]">
<div className="grid grid-cols-4 gap-3 mb-3 items-end">
<div className="p-4"><span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Core Features</span></div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-cyan-900/10 rounded-t-xl blur-xl opacity-50"></div>
<div className="relative bg-[#0A0A0A] border border-cyan-500/30 border-b-0 rounded-t-xl p-5 pb-8 flex flex-col gap-4 shadow-[0_-10px_40px_-10px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div><span className="text-xs font-medium text-cyan-200">Done-For-You Paid Ads</span></div>
<div><span className="text-2xl font-serif text-white">Full Service</span><p className="text-[10px] text-gray-400 mt-1 font-light">We plan, launch, and scale.</p></div>
<button className="w-full py-2.5 rounded-md bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-colors">Apply Now</button>
<div className="absolute -bottom-4 left-0 w-full h-8 bg-[#0A0A0A] z-10"></div><div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 border-b-0 rounded-t-xl p-5 pb-8 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full border border-gray-500"></div><span className="text-xs font-medium text-gray-200">Creative Strategy</span></div>
<div><span className="text-2xl font-serif text-white">Content Only</span></div>
<button className="w-full py-2.5 rounded-md bg-white/5 border border-white/10 text-gray-300 font-medium text-xs hover:bg-white/10 transition-colors">Get Creatives</button>
</div>

<div className="bg-[#0A0A0A] border border-white/5 border-b-0 rounded-t-xl p-5 pb-8 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full border border-gray-500"></div><span className="text-xs font-medium text-gray-200">Consulting</span></div>
<div><span className="text-2xl font-serif text-white">Funnel Fix</span></div>
<button className="w-full py-2.5 rounded-md bg-white/5 border border-white/10 text-gray-300 font-medium text-xs hover:bg-white/10 transition-colors">Fix My Funnel</button>
</div>
</div>

<div className="bg-[#0A0A0A]/50 backdrop-blur-sm border-t border-white/10">
<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"><div className="p-4 text-xs text-gray-400 font-medium">Ad Spend Managed</div><div className="p-4 text-xs text-cyan-300 bg-cyan-950/[0.1] border-x border-cyan-500/10 font-mono">Unlimited</div><div className="p-4 text-xs text-gray-400 font-mono">-</div><div className="p-4 text-xs text-gray-400 font-mono">Audit</div></div>
<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"><div className="p-4 text-xs text-gray-400 font-medium">Creatives/Month</div><div className="p-4 text-xs text-gray-200 bg-cyan-950/[0.1] border-x border-cyan-500/10 font-mono">Included</div><div className="p-4 text-xs text-gray-400 font-mono">10-20</div><div className="p-4 text-xs text-gray-400 font-mono">Feedback</div></div>
<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"><div className="p-4 text-xs text-gray-400 font-medium">Slack Support</div><div className="p-4 flex justify-center bg-cyan-950/[0.1] border-x border-cyan-500/10"><iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon></div><div className="p-4 flex justify-center"><iconify-icon className="text-gray-600" icon="solar:check-circle-linear"></iconify-icon></div><div className="p-4 flex justify-center"><iconify-icon className="text-gray-200" icon="solar:check-circle-bold"></iconify-icon></div></div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-black pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono mb-6">
<span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span></span> Spots Limited
                </div>

<h2 className="text-5xl md:text-[64px] font-serif text-white tracking-tight leading-none mb-6">READY TO STOP <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]">GUESSING?</span></h2>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">Apply To Work With Me <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon></button>
<button className="h-12 px-8 rounded-full bg-black border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2">Join Mentorship</button>
</div>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-black pt-10 pb-10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-10">
<div className="col-span-2 md:col-span-4 flex flex-col gap-4">
<div className="flex items-center gap-2 text-white"><iconify-icon className="text-cyan-400 text-xl" icon="solar:infinity-bold"></iconify-icon><span className="text-base font-semibold tracking-tight">Brez Scales</span></div>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">I scale brands with paid ads. No fluff, just results.</p>
<div className="flex gap-4 mt-1">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="16"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon></a>
</div>
</div>
<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-xs font-medium text-white mb-4">Explore</h4>
<ul className="flex flex-col gap-3 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Mentorship</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="flex flex-col gap-3 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="flex flex-col gap-3 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-gray-600">© 2024 Brez Scales. All rights reserved.</p>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-gray-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
