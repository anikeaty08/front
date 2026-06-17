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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Loader & Navbar Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if(loader) {
                    loader.classList.add('opacity-0');
                    setTimeout(() => {
                        loader.style.display = 'none';
                        loader.classList.remove('z-[100]');
                    }, 1000);
                }
                document.getElementById('navbar').classList.remove('-translate-y-full');
            }, 2500);
        });

        // Complex Scroll Reveal Observer
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-y-16', 'translate-y-24', '-translate-x-12', 'translate-x-12', 'blur-xl', 'blur-2xl', 'blur-lg', 'scale-95', 'scale-90');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'blur-none', 'scale-100');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-target').forEach(el => {
                observer.observe(el);
            });

            // Card Hover Glow Effect Logic
            document.querySelectorAll('.card-glow').forEach(glowEl => {
                const card = glowEl.closest('.group');
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    glowEl.style.setProperty('--x', `${x}%`);
                    glowEl.style.setProperty('--y', `${y}%`);
                });
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
      

<div className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center transition-opacity duration-1000 ease-in-out" id="loader">
<div className="relative flex items-center justify-center w-40 h-40 animate-[spin_4s_linear_infinite] [transform-style:preserve-3d]">
<div className="absolute inset-0 bg-white/5 rounded-full blur-2xl"></div>
<img alt="Divina Cura Logo" className="w-32 h-32 object-contain relative z-10 rounded-full animate-[spin_4s_linear_reverse_infinite]" src="logo.png"/>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#030303]/70 backdrop-blur-2xl border-b border-white/5 transition-transform duration-700 -translate-y-full" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<img alt="Divina Cura Logo" className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-full" src="logo.png"/>
<span className="font-['Playfair_Display',_serif] text-xl tracking-tight uppercase text-white/90 group-hover:text-white transition-colors duration-300">Ledger</span>
</div>
<div className="hidden md:flex items-center gap-10 text-base">
<a className="text-white/50 hover:text-white hover:blur-[0.5px] transition-all duration-300" href="#philosophy">Philosophy</a>
<a className="text-white/50 hover:text-white hover:blur-[0.5px] transition-all duration-300" href="#experience">Experience</a>
<a className="text-white/50 hover:text-white hover:blur-[0.5px] transition-all duration-300" href="#ecosystem">Ecosystem</a>
</div>
<div className="flex items-center gap-6">
<a className="text-base text-white/50 hover:text-white transition-colors duration-300 hidden sm:block" href="#">Sign In</a>
<a className="text-base border border-white/20 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-white px-5 py-2 rounded-full transition-all duration-500 font-light" href="#">Apply</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-target opacity-0 translate-y-12 blur-xl scale-95 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300">
<h1 className="font-['Playfair_Display',_serif] text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-8 leading-[1.05]">
                A Private World,<br/>
<span className="italic text-white/80">Intelligently Curated.</span>
</h1>
<p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-thin tracking-wide">
                An elevated members experience combining AI precision with human concierge excellence. Discretion, access, and flawless execution.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group w-full sm:w-auto text-lg bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-3 font-light overflow-hidden relative" href="#">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
<span className="relative z-10">Request Private Access</span>
<i className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="group w-full sm:w-auto text-lg text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors duration-300" href="#experience">
                    View Member Experience
                    <div className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300 absolute bottom-0"></div>
</a>
</div>
</div>

<div className="max-w-6xl mx-auto mt-32 relative z-10 reveal-target opacity-0 translate-y-24 blur-2xl scale-95 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-3xl rounded-full -z-10 transform -translate-y-1/4"></div>
<div className="bg-[#0a0a0a]/80 border border-[#1c1c1c] rounded-2xl p-2 md:p-3 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] relative overflow-hidden backdrop-blur-xl group/board hover:border-white/10 transition-colors duration-1000">

<div className="flex items-center justify-between px-5 py-4 border-b border-[#1c1c1c] mb-4">
<div className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" style={{boxShadow: '0 0 12px rgba(212, 175, 55, 0.8)'}}></div>
<span className="text-xs uppercase tracking-[0.2em] text-white/40 font-light">Active</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs text-white/30 font-mono tracking-wider">
<span className="hover:text-white/70 cursor-default transition-colors">LDN 14:00</span>
<span className="hover:text-white/70 cursor-default transition-colors">NYC 09:00</span>
<span className="hover:text-white/70 cursor-default transition-colors">TYO 23:00</span>
</div>
<div className="flex items-center gap-3 cursor-pointer group/user">
<span className="text-base text-white/80 font-['Playfair_Display',_serif] italic group-hover/user:text-white transition-colors">M. Kensington</span>
<div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/user:border-white/30 transition-all duration-500 overflow-hidden relative">
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover/user:translate-y-0 transition-transform duration-300"></div>
<i className="w-4 h-4 text-white/50 relative z-10" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-4 bg-[#080808] border border-[#1c1c1c] rounded-xl p-6 flex flex-col h-[420px] relative overflow-hidden group/chat hover:border-white/10 transition-colors duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/chat:opacity-100 transition-opacity duration-1000"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Intelligence Desk</span>
<i className="w-4 h-4 text-white/30 hover:text-white/70 cursor-pointer transition-colors" data-lucide="search" strokeWidth="1.5"></i>
</div>
<div className="flex-1 overflow-hidden flex flex-col gap-6">
<div className="self-end bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-5 py-3.5 text-white/80 max-w-[85%] text-base font-extralight backdrop-blur-md shadow-lg transform transition-transform hover:-translate-y-0.5 duration-300">
                                Secure a table for two at Plénitude, Paris. Tomorrow 8 PM.
                            </div>
<div className="self-start flex gap-4 w-full group/msg">
<div className="w-7 h-7 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover/msg:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow duration-500">
<i className="w-3 h-3 text-[#d4af37]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="text-white/60 leading-relaxed text-base font-thin bg-[#050505] p-4 rounded-2xl rounded-tl-sm border border-[#1c1c1c]">
                                    Table secured at Plénitude for 20:00 tomorrow. The tasting menu has been pre-selected, and dietary notes regarding truffles have been communicated to the chef.
                                </div>
</div>
</div>
<div className="mt-4 pt-4 relative z-10">
<div className="bg-[#030303] border border-[#1c1c1c] rounded-xl px-5 py-3 flex items-center justify-between group-hover/chat:border-white/20 transition-colors duration-500 cursor-text">
<span className="text-base text-white/30 font-extralight">Type a request...</span>
<i className="w-4 h-4 text-white/30 hover:text-white transition-colors cursor-pointer" data-lucide="mic" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="md:col-span-8 grid grid-rows-2 gap-4 h-[420px]">

<div className="bg-[#080808] border border-[#1c1c1c] rounded-xl p-7 relative overflow-hidden group/itinerary hover:border-white/10 transition-colors duration-500 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 pointer-events-none"></div>
<img alt="Flight" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/itinerary:opacity-40 group-hover/itinerary:scale-105 transition-all duration-[2s] ease-out grayscale" src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl px-4 py-1.5 bg-black/40 rounded-full border border-white/10 font-light">Upcoming</span>
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover/itinerary:bg-white/10 transition-colors duration-500">
<i className="w-5 h-5 text-white/80 group-hover/itinerary:translate-x-1 group-hover/itinerary:-translate-y-1 transition-transform duration-500" data-lucide="plane" strokeWidth="1.5"></i>
</div>
</div>
<div className="transform group-hover/itinerary:translate-x-2 transition-transform duration-700 ease-out">
<p className="text-base text-white/50 mb-2 font-mono tracking-wider">LX-VIP • G650ER</p>
<h3 className="font-['Playfair_Display',_serif] text-4xl tracking-tight text-white mb-2">London to Tokyo</h3>
<p className="text-lg text-white/60 font-thin">Departing Farnborough (FAB) • 14:00 GMT</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-[#080808] border border-[#1c1c1c] rounded-xl p-6 flex flex-col justify-between group/card hover:border-white/10 hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden cursor-pointer">
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl group-hover/card:bg-[#d4af37]/10 transition-colors duration-700"></div>
<i className="w-6 h-6 text-white/40 mb-4 group-hover/card:text-white/80 transition-colors duration-500 relative z-10" data-lucide="wine" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover/card:translate-y-[-2px] transition-transform duration-500">
<p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-2 font-light">Dining</p>
<p className="text-xl text-white/90 font-['Playfair_Display',_serif] tracking-tight">Plénitude, Paris</p>
<p className="text-base text-white/50 mt-1 font-thin">Confirmed • 2 Guests</p>
</div>
</div>

<div className="bg-gradient-to-br from-[#111] to-[#030303] border border-white/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group/cc cursor-pointer shadow-lg hover:shadow-white/5 transition-all duration-500">
<div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover/cc:scale-150 transition-transform duration-1000 ease-out"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50 mix-blend-overlay"></div>
<div className="flex items-center justify-between relative z-10">
<span className="text-xs tracking-[0.2em] uppercase text-white/60 font-light">Ledger Black</span>
<i className="w-5 h-5 text-white/50 group-hover/cc:text-white transition-colors duration-500" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<p className="text-base text-white/40 font-mono mb-1 tracking-widest">•••• 8092</p>
<p className="text-lg text-white/90 font-['Playfair_Display',_serif] tracking-tight">M. Kensington</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 border-t border-white/5 bg-[#030303] relative" id="philosophy">
<div className="absolute left-0 top-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

<div className="flex flex-col reveal-target opacity-0 translate-y-16 blur-xl transition-all duration-1000 ease-out">
<div className="w-12 h-px bg-gradient-to-r from-[#d4af37]/80 to-transparent mb-10"></div>
<h3 className="font-['Playfair_Display',_serif] text-4xl tracking-tight text-white mb-5">Precision over noise.</h3>
<p className="text-lg text-white/50 leading-relaxed font-thin">
                        We filter the world's complexities, presenting only what matters. Our intelligence engine anticipates needs before they are articulated, ensuring flawless execution in every domain.
                    </p>
</div>

<div className="flex flex-col reveal-target opacity-0 translate-y-16 blur-xl transition-all duration-1000 ease-out delay-150">
<div className="w-12 h-px bg-gradient-to-r from-[#d4af37]/80 to-transparent mb-10"></div>
<h3 className="font-['Playfair_Display',_serif] text-4xl tracking-tight text-white mb-5">Access over availability.</h3>
<p className="text-lg text-white/50 leading-relaxed font-thin">
                        True luxury is found in the unattainable. Ledger members exist beyond public waitlists, enjoying seamless entry to the world’s most guarded establishments and private events.
                    </p>
</div>

<div className="flex flex-col reveal-target opacity-0 translate-y-16 blur-xl transition-all duration-1000 ease-out delay-300">
<div className="w-12 h-px bg-gradient-to-r from-[#d4af37]/80 to-transparent mb-10"></div>
<h3 className="font-['Playfair_Display',_serif] text-4xl tracking-tight text-white mb-5">Discretion above all.</h3>
<p className="text-lg text-white/50 leading-relaxed font-thin">
                        Operating in the shadows to illuminate your lifestyle. Our architecture is built on military-grade privacy, ensuring your movements, preferences, and data remain strictly yours.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 relative overflow-hidden" id="experience">
<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="reveal-target opacity-0 -translate-x-12 blur-xl transition-all duration-1000 ease-out">
<span className="text-base uppercase tracking-[0.2em] text-[#d4af37] mb-8 block font-light">The Interface</span>
<h2 className="font-['Playfair_Display',_serif] text-6xl md:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
                        Artificial Precision,<br/>
<span className="italic text-white/70">Human Intuition.</span>
</h2>
<p className="text-xl text-white/50 leading-relaxed mb-10 font-thin">
                        The Ledger app functions as a private intelligence desk in your pocket. Routine requests are handled instantly by our proprietary AI, while complex lifestyle management is seamlessly transitioned to your dedicated human concierge team.
                    </p>
<ul className="flex flex-col gap-5 text-lg text-white/70 font-extralight">
<li className="flex items-start gap-4 group">
<i className="w-5 h-5 text-white/30 group-hover:text-[#d4af37] transition-colors mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-white transition-colors">Sub-second response times for global arrangements.</span>
</li>
<li className="flex items-start gap-4 group">
<i className="w-5 h-5 text-white/30 group-hover:text-[#d4af37] transition-colors mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-white transition-colors">Hyper-personalized recommendations based on behavioral data.</span>
</li>
<li className="flex items-start gap-4 group">
<i className="w-5 h-5 text-white/30 group-hover:text-[#d4af37] transition-colors mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-white transition-colors">Direct line to luxury lifestyle managers in 12 global hubs.</span>
</li>
</ul>
</div>

<div className="relative reveal-target opacity-0 translate-x-12 blur-xl transition-all duration-1000 ease-out delay-200 perspective-1000">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-[2rem] opacity-30 transform translate-x-8 translate-y-8 pointer-events-none"></div>
<div className="bg-[#050505]/90 backdrop-blur-2xl border border-[#1c1c1c] rounded-3xl p-6 md:p-10 relative z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] hover:border-white/10 transition-colors duration-700 transform-gpu hover:rotate-y-2 hover:-rotate-x-1">
<div className="flex items-center justify-between mb-10 pb-5 border-b border-[#1c1c1c]">
<div>
<h4 className="font-['Playfair_Display',_serif] text-2xl text-white tracking-tight">Concierge Desk</h4>
<p className="text-base text-white/40 font-mono mt-1 tracking-wide">End-to-End Encrypted</p>
</div>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<div className="space-y-8 text-lg">

<div className="flex justify-end reveal-target opacity-0 translate-y-4 transition-all duration-700 delay-500">
<div className="bg-white/10 border border-white/10 text-white/90 px-6 py-4 rounded-3xl rounded-tr-sm max-w-[85%] font-extralight shadow-lg">
                                    I need to source a vintage Patek Philippe Nautilus (ref. 3700) before my trip to Geneva next week. Condition must be pristine.
                                </div>
</div>

<div className="flex justify-center reveal-target opacity-0 transition-opacity duration-1000 delay-700">
<span className="text-base text-white/40 font-mono flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full border border-white/5">
<i className="w-4 h-4 animate-spin text-white/60" data-lucide="refresh-cw" strokeWidth="1.5"></i>
                                    Scanning global private dealer networks
                                </span>
</div>

<div className="flex justify-start reveal-target opacity-0 translate-y-4 transition-all duration-700 delay-1000">
<div className="flex gap-4 max-w-[90%]">
<div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
<span className="font-['Playfair_Display',_serif] text-white/80 text-base">A</span>
</div>
<div className="text-white/70 leading-relaxed pt-2 font-extralight bg-[#080808] p-5 rounded-3xl rounded-tl-sm border border-[#1c1c1c]">
                                        Sir, we have located two pieces meeting your criteria. One via a private collector in London, and another pending auction in Dubai. I have paused the London piece for 24 hours. I will forward the dossier and high-resolution imaging to your secure vault momentarily.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 border-t border-white/5 relative bg-[#010101]" id="ecosystem">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24 reveal-target opacity-0 translate-y-10 blur-lg transition-all duration-1000">
<h2 className="font-['Playfair_Display',_serif] text-5xl md:text-6xl tracking-tight text-white mb-6">The Ecosystem</h2>
<p className="text-lg md:text-xl text-white/50 max-w-lg mx-auto font-thin">Unrivaled access across every pillar of a curated lifestyle, designed for the exceptional few.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="plane" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">Aviation &amp; Travel</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">Off-market charter rates, empty leg intelligence, and invisible commercial airport transits globally.</p>
</div>
</div>

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="wine" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">Gastronomy</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">Guaranteed allocations at Michelin-starred establishments and backdoor access to private clubs.</p>
</div>
</div>

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-200">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="leaf" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">Longevity</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">Priority access to world-leading functional medicine clinics, private retreats, and specialist physicians.</p>
</div>
</div>

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-[300ms]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="ticket" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">Global Events</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">VIP structuring for F1 paddocks, art fairs, film festivals, and invitation-only galas.</p>
</div>
</div>

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-[400ms]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="shield" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">Assets &amp; Vault</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">Off-market property sourcing, fine art acquisition, and secure logistics management.</p>
</div>
</div>

<div className="group h-[320px] border border-[#1c1c1c] bg-[#050505] p-10 flex flex-col justify-between cursor-pointer relative overflow-hidden reveal-target opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-[500ms]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out card-glow"></div>
<i className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-700 relative z-10 group-hover:-translate-y-1 transform" data-lucide="users" strokeWidth="1.5"></i>
<div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
<h3 className="font-['Playfair_Display',_serif] text-3xl tracking-tight text-white mb-3">The Network</h3>
<p className="text-base text-white/40 leading-relaxed font-thin group-hover:text-white/60 transition-colors">Carefully orchestrated introductions between members of aligned status, capital, and intent.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-52 px-6 border-t border-white/5 relative overflow-hidden bg-black">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 reveal-target opacity-0 scale-90 blur-xl transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]">
<h2 className="font-['Playfair_Display',_serif] text-6xl md:text-8xl tracking-tight text-white mb-8">Access More Than a Platform.</h2>
<p className="text-xl text-white/50 mb-14 font-thin max-w-xl mx-auto">
                Enter a world designed around precision, discretion, and extraordinary access. Membership is strictly limited by invitation or application.
            </p>
<a className="inline-block text-lg bg-white text-black px-12 py-4 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-500 font-light tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]" href="#">
                Apply for Access
            </a>
<p className="text-base text-white/30 mt-8 font-mono uppercase tracking-[0.2em]">Applications currently under 72-hour review</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-3">
<img alt="Divina Cura Logo" className="w-8 h-8 object-contain opacity-30 grayscale rounded-full" src="logo.png"/>
<span className="font-['Playfair_Display',_serif] text-2xl tracking-tight text-white/30 uppercase">Ledger</span>
</div>
<div className="text-base text-white/20 font-mono tracking-[0.3em] uppercase hidden md:block">
                Strictly Confidential
            </div>
<div className="flex items-center gap-8 text-base text-white/40 font-thin">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span>© 2024</span>
</div>
</div>
</footer>


    </>
  );
}
