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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Main dark background
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



// Check local storage or system preference on load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
function toggleTheme() {
if (document.documentElement.classList.contains('dark')) {
document.documentElement.classList.remove('dark');
localStorage.theme = 'light';
} else {
document.documentElement.classList.add('dark');
localStorage.theme = 'dark';
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Trigger hero animations immediately
setTimeout(() => {
document.querySelectorAll("#hero .animate-on-scroll").forEach(el => el.classList.add("animate"));
}, 100);
});



        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-zinc-200/40 via-zinc-100/20 to-transparent dark:from-zinc-900/40 dark:via-zinc-950/20 dark:to-transparent -z-10 pointer-events-none transition-colors duration-500"></div>
<div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] bg-zinc-200/50 dark:bg-zinc-800/20 rounded-full blur-[120px] -z-10 pointer-events-none transition-colors duration-500"></div>

<div className="pointer-events-none fixed inset-0 z-0 bg-spotlight transition-opacity duration-300"></div>

<div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent z-50 opacity-50"></div>

<div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-zinc-200 dark:border-white/5 h-[3200px] transition-colors duration-500">
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-zinc-900/10 dark:via-white/20 to-transparent animate-beam" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-zinc-900/5 dark:via-white/10 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-75"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-zinc-900/10 dark:via-white/20 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-400"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-150"></div>
<div className="border-r border-zinc-200 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl shrink-0">
<div className="rounded-full border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/50 px-4 md:px-5 h-14 flex items-center justify-between gap-4 md:gap-12 transition-all duration-300">

<div className="flex items-center gap-2">
<span className="iconify text-zinc-900 dark:text-white" data-icon="lucide:globe" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium tracking-tight text-zinc-900 dark:text-white">MicAyla<span className="text-zinc-400 dark:text-zinc-500">.Global</span></span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#focus">Focus Areas</a>
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#leadership">Leadership</a>
</div>

<div className="flex items-center gap-2 md:gap-4">

<button aria-label="Toggle Theme" className="rounded-full w-8 h-8 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onclick="toggleTheme()">
<span className="iconify hidden dark:block" data-icon="lucide:sun" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="iconify block dark:hidden" data-icon="lucide:moon" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<a className="rounded-full bg-zinc-900 dark:bg-white px-5 py-2 text-xs font-semibold text-white dark:text-zinc-950 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all overflow-hidden group" href="#contact">
<span className="relative z-10">Partner With Us</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-24">

<section className="flex flex-col w-full max-w-7xl z-10 mt-16 md:mt-32 mx-auto px-6 relative min-h-[80vh] justify-center" id="hero">

<div className="w-full flex justify-start mb-10 spotlight-group relative animate-on-scroll">
<a className="relative z-10 group flex items-center gap-3 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 pr-4 pl-1.5 py-1.5 hover:border-zinc-300 dark:hover:border-white/20 transition-all overflow-hidden" href="#about">
<span className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 px-2.5 py-0.5 text-[10px] font-bold text-zinc-900 dark:text-white tracking-wide uppercase">
                        Est. 2015
                    </span>
<span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300">Global Asset Management</span>
<span className="iconify text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll">
<div className="flex flex-col gap-2">
<div className="flex text-xs text-zinc-500 dark:text-zinc-500 font-mono mb-4 gap-x-2 gap-y-2 items-center tracking-widest uppercase">
                            01_EMPOWERMENT <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h1 className="text-5xl md:text-8xl lg:text-[100px] leading-[0.95] tracking-tighter font-serif text-zinc-900 dark:text-white dark:mix-blend-screen transition-colors">
<span className="block word-mask"><span className="block word-reveal" style={{transitionDelay: '100ms'}}>Partners in</span></span>
<span className="block word-mask"><span className="block word-reveal font-light text-zinc-400 dark:text-zinc-500 sans-serif" style={{transitionDelay: '250ms'}}>Economic &amp; Ecosocial</span></span>
<span className="block word-mask"><span className="block word-reveal italic" style={{transitionDelay: '400ms'}}>Empowerment.</span></span>
</h1>
</div>
</div>
</div>

<div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end animate-on-scroll" style={{transitionDelay: '400ms'}}>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/10 p-6 md:p-8 spotlight-group overflow-hidden hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-500 backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="absolute left-0 top-8 w-0.5 h-12 bg-zinc-900 dark:bg-white rounded-r-full"></div>
<p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
                        "Approaching every development with a commitment to sustainability. Utilizing bespoke technologies, methodologies, and financial resources to add lasting value."
                    </p>
<div className="mt-8 flex gap-3 items-center">

<div className="flex -space-x-3">
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-50 dark:ring-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-white/10">
<span className="iconify text-zinc-500 dark:text-zinc-400" data-icon="lucide:globe" data-width="14"></span>
</div>
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-50 dark:ring-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-white/10">
<span className="iconify text-zinc-500 dark:text-zinc-400" data-icon="lucide:zap" data-width="14"></span>
</div>
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-50 dark:ring-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-white/10">
<span className="iconify text-zinc-500 dark:text-zinc-400" data-icon="lucide:leaf" data-width="14"></span>
</div>
</div>
<span className="text-[10px] text-zinc-500 font-mono tracking-wider font-semibold uppercase">Operating Globally</span>
</div>
</div>

<div className="flex flex-col sm:flex-row md:items-center gap-4 z-10 lg:justify-end pb-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 dark:bg-white px-8 font-medium text-white dark:text-zinc-950 transition-all duration-300 hover:bg-zinc-700 dark:hover:bg-zinc-200" href="#focus">
<span className="mr-2 text-sm">Explore Focus Areas</span>
<span className="iconify text-zinc-400 dark:text-zinc-600 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors" data-icon="lucide:arrow-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-transparent px-8 font-medium text-zinc-600 dark:text-zinc-400 transition-all hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/30" href="#about">
<span className="text-sm">Our Story</span>
<span className="iconify ml-2 text-zinc-400 dark:text-zinc-600 group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white transition-all" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="z-20 w-full mt-24 relative animate-on-scroll" style={{transitionDelay: '600ms'}}>
<p className="uppercase text-xs font-bold text-zinc-400 dark:text-zinc-600 tracking-widest font-mono text-center mb-10">Sectors of Expertise</p>
<div className="relative flex overflow-hidden marquee-mask">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-24 items-center opacity-30 hover:opacity-50 transition-opacity dark:text-white text-zinc-900">

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:factory" data-width="32"></span><span className="font-mono text-sm tracking-widest">INFRASTRUCTURE</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:zap" data-width="32"></span><span className="font-mono text-sm tracking-widest">ENERGY</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:droplet" data-width="32"></span><span className="font-mono text-sm tracking-widest">OIL&amp;GAS</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:leaf" data-width="32"></span><span className="font-mono text-sm tracking-widest">SUSTAINABILITY</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:graduation-cap" data-width="32"></span><span className="font-mono text-sm tracking-widest">EDUCATION</span></div>

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:factory" data-width="32"></span><span className="font-mono text-sm tracking-widest">INFRASTRUCTURE</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:zap" data-width="32"></span><span className="font-mono text-sm tracking-widest">ENERGY</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:droplet" data-width="32"></span><span className="font-mono text-sm tracking-widest">OIL&amp;GAS</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:leaf" data-width="32"></span><span className="font-mono text-sm tracking-widest">SUSTAINABILITY</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:graduation-cap" data-width="32"></span><span className="font-mono text-sm tracking-widest">EDUCATION</span></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 md:mt-40 mx-auto px-6 relative" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">

<div className="flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-zinc-900 dark:text-white text-xl" data-icon="lucide:compass" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-mono tracking-widest uppercase text-zinc-900 dark:text-white font-bold">Our Philosophy</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white tracking-tight mb-6 leading-none transition-colors">
<span className="italic block text-zinc-500 dark:text-zinc-600 font-light">Global reach,</span>
<span className="font-medium">Sustainable value.</span>
</h2>
<p className="text-lg text-zinc-600 dark:text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
                        Founded in 2015, MicAyla is an asset management group focused on impactful projects and acquisitions across the U.S., Africa, and the Caribbean.
                    </p>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white p-1 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:globe-2" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900 dark:text-white mb-0.5">Execution</div>
<div className="text-xs text-zinc-500 font-light">Complex projects globally</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white p-1 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:leaf" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900 dark:text-white mb-0.5">Sustainability</div>
<div className="text-xs text-zinc-500 font-light">Lasting value for partners</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-10 animate-on-scroll" style={{transitionDelay: '200ms'}}>

<div className="w-full rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-1 relative shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/50 transition-colors duration-500">
<div className="flex overflow-hidden bg-zinc-100 dark:bg-black w-full h-[400px] rounded-lg relative group">

<img alt="Industrial Architecture" className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-200 via-transparent to-transparent dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/50"></div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="p-4 rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-semibold text-zinc-900 dark:text-white">Active Operations</span>
</div>
<span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">2015 - PRESENT</span>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded text-[10px] text-zinc-600 dark:text-zinc-300">USA</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded text-[10px] text-zinc-600 dark:text-zinc-300">Africa</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded text-[10px] text-zinc-600 dark:text-zinc-300">Caribbean</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 mt-32 md:mt-44 relative py-32 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500" id="focus">
<div className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:100px_50px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 dark:text-white tracking-tight mb-4 transition-colors">
                        Focus <span className="not-italic text-zinc-500 dark:text-zinc-500 font-normal font-sans">Areas</span>
</h2>
<p className="text-zinc-600 dark:text-zinc-500 text-lg font-light leading-relaxed">
                        Deploying expertise across key sectors to drive innovation and stability.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll shadow-sm dark:shadow-none">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-56 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 relative overflow-hidden">
<img alt="Energy" className="w-full h-full object-cover opacity-60 dark:opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-200/90 dark:from-zinc-900/90 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="px-2 py-1 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 rounded flex items-center gap-2 w-fit">
<span className="iconify text-emerald-500" data-icon="lucide:wind" data-width="12"></span>
<span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300">RENEWABLES</span>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Energy Transition</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Supporting both ends of the transition spectrum through innovation. Innovation • Renewables.
                            </p>
</div>
</div>

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-56 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 relative overflow-hidden">
<img alt="Eco Builds" className="w-full h-full object-cover opacity-60 dark:opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-200/90 dark:from-zinc-900/90 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="px-2 py-1 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 rounded flex items-center gap-2 w-fit">
<span className="iconify text-emerald-500" data-icon="lucide:home" data-width="12"></span>
<span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300">DEVELOPMENT</span>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Eco Friendly Builds</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Rapid development, reduced carbon footprint, made to last. Development • Sustainability.
                            </p>
</div>
</div>

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-56 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 relative overflow-hidden">
<img alt="Finance" className="w-full h-full object-cover opacity-60 dark:opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-200/90 dark:from-zinc-900/90 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="px-2 py-1 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 rounded flex items-center gap-2 w-fit">
<span className="iconify text-emerald-500" data-icon="lucide:bar-chart-2" data-width="12"></span>
<span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300">CONTROLS</span>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Finance &amp; Controls</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Engineering successful project outcomes through rigorous financial control.
                            </p>
</div>
</div>

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-56 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 relative overflow-hidden">
<img alt="Training" className="w-full h-full object-cover opacity-60 dark:opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-200/90 dark:from-zinc-900/90 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="px-2 py-1 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 rounded flex items-center gap-2 w-fit">
<span className="iconify text-emerald-500" data-icon="lucide:book-open" data-width="12"></span>
<span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300">EDUCATION</span>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Training &amp; Certification</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Knowledge transfer with an impact on local content.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 relative py-32 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500" id="services">
<div className="max-w-7xl mx-auto px-6 w-full relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white tracking-tight mb-4 leading-none transition-colors">
<span className="italic block text-zinc-500 dark:text-zinc-500 font-light">Precision in</span>
<span className="font-medium">Project Controls.</span>
</h2>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light">
                            Delivering on time and on budget. We provide comprehensive project services that mitigate risk and ensure financial discipline from conception to closeout.
                        </p>
</div>
<div className="hidden md:block">
<a className="text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-300 dark:border-white/20 pb-1 hover:border-zinc-900 dark:hover:border-white transition-all" href="#contact">Request Consultation</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Planning &amp; Scheduling</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Developing robust schedules (L1-L4), Critical Path Method (CPM) analysis, and resource loading to ensure project timelines are realistic and achievable.
                        </p>
</div>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:circle-dollar-sign" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Cost Management</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Budget development, cash flow forecasting, and Earned Value Management (EVM) to track performance and prevent cost overruns.
                        </p>
</div>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Estimating</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Providing accurate CAPEX and OPEX estimates ranging from Class 5 conceptual to Class 1 definitive bids, ensuring competitive project pricing.
                        </p>
</div>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:git-pull-request-arrow" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Change Management</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Rigorous tracking of scope changes, trends, and change orders. We analyze impacts on cost and schedule before they become claims.
                        </p>
</div>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Risk Analysis</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Proactive identification of threats. Quantitative risk analysis (Monte Carlo) and mitigation strategy development to protect project value.
                        </p>
</div>

<div className="group relative rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 spotlight-group overflow-hidden animate-on-scroll shadow-sm dark:shadow-none" style={{transitionDelay: '500ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300"></div>
<div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-900 dark:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Reporting &amp; Analytics</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            Custom dashboards and KPI tracking providing stakeholders with transparent, real-time insights into project health and progress.
                        </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 relative pt-32 pb-32 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500" id="leadership">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#a1a1aa12_1px,transparent_1px),linear-gradient(to_bottom,#a1a1aa12_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_50px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white tracking-tight mb-4 leading-none transition-colors">
<span className="italic block text-zinc-500 dark:text-zinc-500 font-light">Leadership</span>
<span className="font-medium">Experience.</span>
</h2>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light">
                            Decades of experience in project management, services, and controls across the Oil &amp; Gas and infrastructure sectors.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">

<div className="relative group rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-white/5">
<span className="iconify text-zinc-500 dark:text-zinc-400" data-icon="lucide:user" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Verniss Dillon</h3>
<p className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Principal &amp; Founder</p>
</div>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-light">
                            An experienced Business Development and Project Controls professional with a demonstrated history of working in the oil &amp; energy industry. Skilled in Petroleum, Gas, EPC, and Project Estimation.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">Business Dev</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">Strategic Planning</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">Project Controls</span>
</div>
</div>

<div className="relative group rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-white/5">
<span className="iconify text-zinc-500 dark:text-zinc-400" data-icon="lucide:user" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Tom O'Brien</h3>
<p className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Project Management Expert</p>
</div>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-light">
                            Over 34 years of experience in project management and controls across oil &amp; gas, infrastructure, and power sectors. Expert in all phases of EPC work, from FEED through execution. PMI Cost Management REP.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">Jazan ASU</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">BP Modernization</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-600 dark:text-zinc-400">Claims Mgmt</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 transition-colors duration-500" id="contact">
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Open for Partnerships
                </div>
<h2 className="text-5xl md:text-[64px] font-serif text-zinc-900 dark:text-white tracking-tight leading-none mb-6 transition-colors">
                    Partner with <span className="italic text-zinc-500">MicAyla.</span>
</h2>
<p className="text-xl text-zinc-600 dark:text-zinc-500 font-light max-w-2xl mb-10">
                    Engineering successful project outcomes through rigorous financial control and sustainable practices.
                </p>

<div className="w-full max-w-md bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm mb-12 text-left shadow-lg dark:shadow-none transition-colors">
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Email Address</label>
<input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-all" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-all resize-none" placeholder="How can we help?" rows="3"></textarea>
</div>
<button className="w-full py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/10 dark:shadow-white/10">
                            Send Message
                        </button>
</div>
</div>
<div className="flex flex-col gap-4 text-sm text-zinc-500">
<div className="flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
<span>2200 Post Oak Blvd, Suite 1000, Houston, TX 77056</span>
</div>
<div className="flex items-center justify-center gap-6">
<a className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors" href="mailto:info@micayla.global">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            info@micayla.global
                         </a>
<a className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors" href="tel:+17137305038">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            +1 (713) 730-5038
                         </a>
</div>
</div>
</div>
</section>

<footer className="w-full bg-zinc-100 dark:bg-black pt-12 pb-12 relative z-20 border-t border-zinc-200 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-900 dark:text-white" data-icon="lucide:globe" data-width="16"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">MicAyla</span>
</div>
<p className="text-xs text-zinc-500 dark:text-zinc-600 font-mono">
                            © 2023 MicAyla Inc. All rights reserved.
                        </p>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
