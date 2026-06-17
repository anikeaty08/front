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
},
brand: {
400: '#34d399', // Brighter green for Sunshine
500: '#10b981',
600: '#059669',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
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
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
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
      

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(52, 211, 153,0.06), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 z-50 opacity-60"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x h-full border-white/5">
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.3s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.4s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.1s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-green-300 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.2s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.15s'}}></div>
<div className="border-r h-full hidden md:block animate-line relative overflow-hidden border-white/5" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b backdrop-blur-md shrink-0 border-white/5 bg-black/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:sun-2-bold-duotone" width="32"></iconify-icon>
<span className="text-lg md:text-xl font-semibold tracking-tight uppercase text-white">Sunshine Junk Removal</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal transition-colors flex items-center gap-1 group hover:text-white text-green-400" href="#services"> Services </a>
<a className="text-sm font-normal transition-colors hover:text-white text-green-400" href="#comparison"> Why Us </a>
<a className="text-sm font-normal transition-colors hover:text-white text-green-400" href="#pricing"> Pricing </a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 hover:text-white text-sm font-normal text-green-300" href="tel:732-232-3429">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                732-232-3429
            </a>
<a className="transition-all duration-300 overflow-hidden group hover:bg-white/10 text-xs font-semibold text-white tracking-wide bg-white/5 border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5 relative" href="tel:732-232-3429">
<span className="relative z-10 uppercase">Call Now</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</a>
</div>
</div>
</nav>

<main className="relative bottom--5 w-full">

<div className="absolute top-0 inset-x-0 h-[850px] w-full z-0 overflow-hidden pointer-events-none select-none">

<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-10"></div>

<img alt="Junk Removal Truck Background" className="w-full h-full object-cover object-center opacity-50 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<section className="flex flex-col z-10 w-full max-w-7xl mt-24 mr-auto mb-32 ml-auto pr-6 pl-6 relative">

<div className="flex spotlight-group [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate w-full mb-8 relative justify-start" style={{'--mouse-x-rel': '1196px', '--mouse-y-rel': '527px'}}>
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(16,185,129,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-4 rounded-full border pr-4 pl-1.5 py-1.5 transition-all overflow-hidden border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20" href="#">
<span className="rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-[10px] font-semibold text-green-400 tracking-wide uppercase"> Local </span>
<span className="text-sm font-light text-green-200">Serving Ocean &amp; Monmouth County</span>
<iconify-icon className="text-green-400 group-hover:translate-x-1 transition-transform" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 w-full border-0 translate-x-0 md:translate-x-12 scale-100 md:scale-105 gap-x-12 gap-y-12 items-center">

<div className="relative z-20 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="flex flex-col gap-2 drop-shadow-2xl">
<div className="font-mono text-xs mb-3 flex items-center gap-2 text-white/50 shadow-black drop-shadow-md"> 
                        EST_2024 
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
</div>
<h1 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic tracking-tight font-serif text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
<span className="block text-green-400">Fast. Friendly.</span>
<span className="block not-italic font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-green-100 to-green-400 uppercase">AFFORDABLE.</span>
</h1>
</div>
</div>
</div>

<div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">

<div className="group relative rounded-2xl bg-black/40 backdrop-blur-sm p-6 md:p-8 spotlight-group spotlight-card overflow-hidden" style={{'--mouse-x-rel': '1196px', '--mouse-y-rel': '200px'}}>
<div className="absolute inset-0 pointer-events-none border rounded-2xl border-white/5"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(52, 211, 153, 0.2), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-green-500 to-teal-600 rounded-r-full" style={{}}></div>
<p className="md:text-lg leading-relaxed text-base italic font-serif max-w-lg z-10 relative text-green-100/90 drop-shadow-md">"Your #1 choice for Junk Removal and Demolition services! Whether it's a single item pickup or a full property cleanout, we make it disappear."</p>
<div className="mt-6 flex gap-3 items-center">
<span className="text-lg font-bold tracking-tight text-white drop-shadow-md">732-232-3429</span>
<span className="text-[10px] tracking-wider font-mono ml-auto text-green-400 uppercase">Call or Text</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-5 z-10 pl-2 relative justify-end">

<a className="group/btn rounded-full relative" href="tel:732-232-3429">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-green-600/50 opacity-40 rounded-full absolute blur"></div>
<div className="flex active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_2px_0_#15803d] transition-all duration-150 text-white bg-gradient-to-b from-[#16a34a] to-[#14532d] hover:bg-[#15803d] h-14 rounded-full pr-8 pl-8 relative shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_4px_0_#14532d,0_10px_15px_-3px_rgba(0,0,0,0.5)] gap-x-3 gap-y-3 items-center">
<span className="text-lg font-bold tracking-tight uppercase">Get Quote</span>
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
</a>

<a className="transition-all flex items-center justify-center group overflow-hidden hover:bg-black/40 backdrop-blur-md text-sm font-medium h-14 rounded-full pr-8 pl-8 relative text-green-200" href="#pricing" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="group-hover:text-white transition-colors text-base font-medium tracking-tight text-green-50 drop-shadow-md">View Pricing</span>
</a>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate w-full z-20 mt-16 relative">
<p className="uppercase text-xs font-semibold tracking-widest font-mono text-center mb-8 text-green-600">SERVING OCEAN &amp; MONMOUTH COUNTY</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-100">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center">

<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Residential Junk</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:sledgehammer-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Demolition Services</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Ocean County</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:trash-bin-trash-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Haul Away</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Monmouth County</span>
</div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
<span className="font-serif italic text-2xl">Green Disposal</span>
</div>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Residential Junk</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:sledgehammer-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Demolition Services</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Ocean County</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:trash-bin-trash-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Haul Away</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Monmouth County</span></div>
<div className="flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity text-green-500"><iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon><span className="font-serif italic text-2xl">Green Disposal</span></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 w-full max-w-7xl mt-44 mr-auto mb-44 ml-auto pr-6 pl-6 relative items-center" id="services">

<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-center max-w-2xl mr-auto mb-16 ml-auto pr-6 pl-6">
<h2 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-4 text-white">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-green-500">Reclaim your space</span>
<span className="text-green-500">today.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-green-400">Professional, insured, and efficient. We are the friendly guys in the green truck.</p>
</div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative gap-x-6 gap-y-6">

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mouse-x-rel': '1196px', '--mouse-y-rel': '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,197,94,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex flex-col select-none group hover:bg-white/[0.02] transition-all duration-500 hover:border-white/10 bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 relative gap-x-3 gap-y-3 items-center justify-center">
<div className="w-16 h-16 backdrop-blur-sm rounded-xl border flex items-center justify-center shadow-[0_0_15px_-5px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-green-500/40 group-hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)] bg-black/40 border-white/10">
<iconify-icon className="text-green-500" icon="solar:sofa-linear" width="32"></iconify-icon>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex gap-3 mb-3 gap-x-3 gap-y-3 items-center">
<span className="text-xs font-mono text-green-500 border border-green-500/20 bg-green-500/5 px-2 py-0.5 rounded"> FULL SERVICE </span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Junk Removal</h3>
<p className="leading-relaxed text-sm text-green-500">We take it all: furniture, appliances, electronics, yard waste, and construction debris. You point, we load.</p>
</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mouse-x-rel': '777.34375px', '--mouse-y-rel': '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,197,94,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex select-none bg-black/40 w-full h-48 border-white/5 border rounded-xl mb-8 pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="w-16 h-16 backdrop-blur-sm rounded-xl border flex items-center justify-center shadow-[0_0_15px_-5px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-green-500/40 group-hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)] bg-black/40 border-white/10">
<iconify-icon className="text-green-500" icon="solar:sledgehammer-linear" width="32"></iconify-icon>
</div>
</div>
<div className="z-10 mt-auto relative">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-green-500 border border-green-500/20 bg-green-500/5 px-2 py-0.5 rounded"> TEAR DOWN </span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Light Demolition</h3>
<p className="leading-relaxed text-sm text-green-500">Sheds, hot tubs, decks, swing sets, and more. We safely demolish and haul away the debris.</p>
</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll h-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{'--mouse-x-rel': '358.671875px', '--mouse-y-rel': '-536.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,197,94,0.08), transparent 40%)'}}></div>
<div className="overflow-hidden flex select-none w-full h-48 border rounded-xl mb-8 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center bg-black/40 border-white/5">
<div className="text-center">
<div className="text-5xl font-bold text-green-500 tracking-tighter font-mono mb-2">Fast</div>
<div className="uppercase text-xs tracking-widest text-green-500">Response</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1 rounded-full overflow-hidden bg-green-900/40">
<div className="h-full bg-green-500 w-full animate-beam" style={{animationDuration: '1.5s'}}></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs text-green-500 font-mono bg-green-500/5 border-green-500/20 border rounded pt-0.5 pr-2 pb-0.5 pl-2">SAME DAY</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Fast &amp; Friendly</h3>
<p className="leading-relaxed text-sm text-green-500">Need it gone today? We offer flexible scheduling and same-day service in Ocean &amp; Monmouth County.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="pricing">
<div className="text-center mb-16">
<h2 className="md:text-6xl text-4xl tracking-tight font-serif mb-6 text-white">Affordable <span className="italic text-green-500">Transparent Pricing.</span></h2>
<p className="leading-relaxed text-lg font-light max-w-2xl mr-auto ml-auto text-green-300">No hidden fees. Just honest, upfront quotes based on volume.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">

<div className="bg-[#0A0A0A] border rounded-2xl p-8 flex flex-col gap-6 relative group transition-colors h-full border-white/10 hover:border-white/20">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-green-400"> Single Item </span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-sm font-mono text-green-400"> Starting at </span>
<span className="text-5xl font-serif tracking-tight text-white"> $99 </span>
</div>
<p className="text-xs text-green-500 font-bold font-mono mt-3 uppercase tracking-wide"> Curbside Pickup </p>
<p className="text-sm mt-4 leading-relaxed text-green-400"> Perfect for getting rid of that one old sofa or appliance. </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm font-medium text-green-300">
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Mattress / Sofa 
                    </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Appliances 
                    </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Curbside discount 
                    </li>
</ul>
<a className="w-full py-4 rounded-lg border font-semibold text-center transition-all mt-auto bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-green-200" href="tel:732-232-3429"> Call for Quote </a>
</div>

<div className="relative group z-10 md:-my-6">
<div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-100"></div>
<div className="relative border border-green-500/50 rounded-2xl p-8 flex flex-col gap-6 shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)] h-full bg-black">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-teal-500 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg text-white"> Most Popular </div>
<div className="">
<span className="text-xs font-bold text-green-400 uppercase tracking-widest"> 1/4 Truck </span>
<div className="flex gap-2 mt-4 gap-x-2 gap-y-2 items-baseline">
<span className="text-sm font-mono text-green-400"> Est. </span>
<span className="text-5xl text-white tracking-tight font-serif">$350+</span>
</div>
<p className="text-xs text-green-500 font-bold font-mono mt-3 uppercase tracking-wide"> Room Cleanout </p>
<p className="text-sm mt-4 leading-relaxed text-green-400"> Ideal for clearing out a garage, small basement, or bedroom. </p>
</div>
<div className="w-full h-px bg-white/10"></div>
<ul className="space-y-4 text-sm font-medium text-white">
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                            Two-person crew 
                        </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                            Labor &amp; loading included
                        </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                            Sweep-up finish 
                        </li>
</ul>
<a className="w-full py-4 rounded-lg bg-green-600 font-bold text-center text-lg hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] mt-auto hover:-translate-y-0.5 text-white" href="tel:732-232-3429"> 732-232-3429 </a>
</div>
</div>

<div className="bg-[#0A0A0A] border rounded-2xl p-8 flex flex-col gap-6 relative group transition-colors h-full border-white/10 hover:border-white/20">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-green-400"> Demolition </span>
<div className="flex gap-2 mt-4 gap-x-2 gap-y-2 items-baseline">
<span className="text-sm font-mono text-green-400"> Custom </span>
<span className="text-5xl text-white tracking-tight font-serif">Quote</span>
</div>
<p className="text-xs text-green-500 font-bold font-mono mt-3 uppercase tracking-wide"> Sheds / Decks </p>
<p className="text-sm mt-4 leading-relaxed text-green-400"> Light demolition services for your yard and home. </p>
</div>
<div className="w-full h-px bg-white/5"></div>
<ul className="space-y-4 text-sm font-medium text-green-300">
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Safe dismantling
                    </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Full debris removal
                    </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        Hot tub removal
                    </li>
</ul>
<a className="w-full py-4 rounded-lg border font-semibold text-center transition-all mt-auto bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-green-200" href="tel:732-232-3429"> Text Us Photos </a>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-sm flex items-center justify-center gap-2 text-green-400">
<iconify-icon className="text-green-500" icon="solar:shield-check-linear"></iconify-icon>
                Fully Licensed &amp; Insured in NJ. 100% Satisfaction Guarantee. 
            </p>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="comparison">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-green-500 text-xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-green-500"> Why Choose Us </span>
</div>
<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6 leading-[0.95] text-white">
<span className="block font-light italic text-green-500">The hard way.</span>
<span className="font-medium">The Sunshine way.</span>
</h2>
<p className="text-lg font-light leading-relaxed max-w-lg text-green-400"> See why Ocean and Monmouth County residents choose Sunshine Junk Removal. </p>
</div>
</div>

<div className="w-full overflow-x-auto pb-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 border-b pb-4 border-white/10">
<div className="px-6 text-sm font-mono uppercase tracking-widest text-green-500"> Feature </div>
<div className="px-6 text-sm font-semibold text-green-400"> DIY / Dumpster </div>
<div className="px-6 text-sm font-semibold text-green-400"> Generic Hauler </div>
<div className="px-6 text-sm font-bold text-green-500">Sunshine</div>
</div>

<div className="bg-[#0A0A0A]/50 backdrop-blur-sm">

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="text-sm font-medium pt-6 pr-6 pb-6 pl-6 text-green-300">Labor Include</div>
<div className="p-6 text-sm font-mono text-gray-400/80"> No (You lift) </div>
<div className="text-sm text-gray-500/80 font-mono px-6 py-6"> Varies </div>
<div className="p-6 text-sm text-green-100 bg-green-900/[0.2] border-x border-green-500/10 font-mono flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                            Full Crew 
                        </div>
</div>

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="p-6 text-sm font-medium text-green-300"> Pricing </div>
<div className="p-6 text-sm font-mono text-green-500">Rental + Weight Fees</div>
<div className="p-6 text-sm font-mono text-green-500"> Hourly / Surprise </div>
<div className="p-6 text-sm text-green-100 bg-green-900/[0.2] border-x border-green-500/10 font-mono flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                            Affordable Flat Rate 
                        </div>
</div>

<div className="grid grid-cols-4 border-b hover:bg-white/[0.02] transition-colors group/row items-center border-white/5">
<div className="p-6 text-sm font-medium text-green-300"> Eco-Friendly </div>
<div className="p-6 text-sm font-mono text-gray-400/80"> Landfill </div>
<div className="p-6 text-sm font-mono text-gray-500/80"> Landfill </div>
<div className="p-6 text-sm text-green-100 bg-green-900/[0.2] border-x border-green-500/10 font-mono flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:leaf-bold"></iconify-icon>
                            Sorted &amp; Recycled 
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mx-auto my-32 pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h3 className="text-2xl text-white font-serif mb-8">About Us</h3>
<div className="space-y-4">
<details className="group border-b pb-4 border-white/10" open="">
<summary className="flex cursor-pointer font-medium items-center justify-between text-green-200">
<span className="">At Sunshine Junk Removal, we make clearing clutter easy. Serving Ocean and Monmouth County, our team provides fast, friendly, and affordable junk removal and demolition services. We handle the heavy lifting so you don't have to.</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="group-open:animate-fadeIn mt-3 text-sm text-green-400"> We take almost everything: furniture, appliances, electronics, yard waste, and construction debris. Hazardous materials (paint, chemicals) are excluded. </p>
</details>
</div>
</div><div className="">
<h3 className="text-2xl text-white font-serif mb-8"> What our clients say </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-green-300"> "Sunshine Junk Removal was amazing. They cleared my garage in 2 hours. Very friendly guys!" </p>
<div className="text-xs font-medium text-green-500"> — Sarah M., Ocean County </div>
</div>
<div className="p-4 rounded-xl border bg-white/5 border-white/5">
<p className="text-sm mb-3 text-green-300"> "Best price I found for demolition of my old shed. They cleaned up everything perfectly." </p>
<div className="text-xs font-medium text-green-500"> — James P., Monmouth </div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black w-full border-white/10 border-t pt-32 pb-32 relative">

<div className="absolute inset-0 bg-gradient-to-t from-green-500/20 pointer-events-none to-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="leading-none md:text-[80px] text-6xl text-green-500 tracking-tight font-serif mb-8">Ready for some Sunshine?</h2>
<p className="text-xl font-light max-w-2xl mb-12 text-green-400"> 
                Fast, friendly, and affordable junk removal. Call or text us today!
            </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<a className="h-14 px-8 rounded-full bg-green-600 font-semibold text-lg hover:bg-green-500 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2 text-white" href="tel:732-232-3429"> 
                    732-232-3429
                    <iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</a>
<div className="text-sm mt-4 md:mt-0 text-green-500"> 
                    Serving Ocean &amp; Monmouth County
                </div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 relative z-20 border-white/5">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-green-500 text-xl" icon="solar:sun-2-bold-duotone"></iconify-icon>
<span className="text-sm font-semibold tracking-tight uppercase">Sunshine Junk Removal</span>
</div>
<div className="text-xs font-mono text-green-600"> 
                © 2024 Sunshine Junk Removal. Licensed &amp; Insured. 
            </div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t to-transparent pointer-events-none z-20 from-black via-black/90"></div>


    </>
  );
}
