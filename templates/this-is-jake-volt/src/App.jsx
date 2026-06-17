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



        // Icons
        lucide.createIcons();

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Adding a slight delay to the outline for a fluid feel
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add magnetic effect to specific elements
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        // Glitch text effect on hover
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        document.querySelectorAll('.glitch-hover').forEach(element => {
            element.onmouseover = event => {
                let iteration = 0;
                const originalText = event.target.dataset.text || event.target.innerText;
                const interval = setInterval(() => {
                    event.target.innerText = originalText
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) {
                                return originalText[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");
                    
                    if(iteration >= originalText.length){ 
                        clearInterval(interval);
                    }
                    
                    iteration += 1/3;
                }, 30);
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

<div className="noise-overlay"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-[drift_10s_infinite_alternate]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] animate-[drift_15s_infinite_alternate_reverse]"></div>
<div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[30vw] h-[30vw] bg-yellow-400/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030308]/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="display-font text-lg font-semibold tracking-tighter text-white flex items-center gap-2 group" href="#">
<i className="w-4 h-4 text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" data-lucide="zap"></i>
                JAKE VOLT
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors" href="#tour">TOUR</a>
<a className="hover:text-white transition-colors" href="#music">MUSIC</a>
<a className="hover:text-white transition-colors" href="#party">IBIZA '26</a>
<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/10 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    JOIN THE CURRENT
                </button>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu-shorter"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">

<div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 items-center">
<div className="text-[10px] text-cyan-500 font-mono mb-2 rotate-[-90deg]">VOLTAGE</div>
<div className="w-1 h-32 bg-white/10 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-t from-cyan-500 to-purple-500 shadow-[0_0_15px_#00D4FF]"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono mt-2">MAX</div>
</div>
<div className="text-center z-10 relative perspective-[1000px]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-mono mb-6 backdrop-blur-sm animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00D4FF]"></span>
                LIVE SIGNAL DETECTED
            </div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-2 relative group cursor-default select-none">
                JAKE VOLT
                <span className="absolute -inset-1 blur-2xl bg-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
</h1>
<div className="text-3xl md:text-5xl font-medium tracking-tight text-white/90 mb-8 flex items-center justify-center gap-4 flex-wrap">
<span className="font-serif italic text-purple-400">presents</span>
<span className="glitch-hover" data-text="LAMBOLOCCA">LAMBOLOCCA</span>
</div>
<p className="max-w-md mx-auto text-sm md:text-base text-zinc-400 leading-relaxed mb-10">
                A sonic journey through high-voltage frequencies. 
                Experience the intersection of digital chaos and analog warmth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3 bg-white text-black font-semibold text-sm tracking-tight rounded-full overflow-hidden transition-transform hover:scale-105">
<span className="relative z-10 flex items-center gap-2">
<i className="w-4 h-4 fill-black" data-lucide="play"></i> STREAM NOW
                    </span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<button className="px-8 py-3 text-white border border-white/20 font-medium text-sm tracking-tight rounded-full hover:bg-white/5 transition-colors">
                    PRE-ORDER VINYL
                </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 opacity-20 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-cyan-500/20 rounded-full z-0 opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
</section>

<div className="bg-gradient-to-r from-purple-900 to-blue-900 border-y border-white/10 py-4 rotate-1 scale-105 relative z-20 shadow-2xl overflow-hidden">
<div className="marquee-container">
<div className="marquee-content flex gap-8">
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">10,000 VOLTS OF PURE ENERGY</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">AVAILABLE ON ALL PLATFORMS</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">THE NEW SOUND OF SUMMER</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">10,000 VOLTS OF PURE ENERGY</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">AVAILABLE ON ALL PLATFORMS</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
<span className="text-4xl font-bold tracking-tighter text-white italic opacity-80">THE NEW SOUND OF SUMMER</span>
<span className="text-4xl font-bold tracking-tighter ticker-text italic">///</span>
</div>
</div>
</div>

<section className="py-32 relative" id="party">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Target Lock: Ibiza</span>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-2">03.03.26</h2>
<p className="text-xl text-purple-400 font-medium mb-8">LAMBOLOCCA RELEASE PARTY</p>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-black/40 p-4 rounded text-center border border-white/5">
<span className="block text-2xl font-bold text-white">458</span>
<span className="text-[10px] text-zinc-500 uppercase">Days</span>
</div>
<div className="bg-black/40 p-4 rounded text-center border border-white/5">
<span className="block text-2xl font-bold text-white">12</span>
<span className="text-[10px] text-zinc-500 uppercase">Hours</span>
</div>
<div className="bg-black/40 p-4 rounded text-center border border-white/5">
<span className="block text-2xl font-bold text-white">33</span>
<span className="text-[10px] text-zinc-500 uppercase">Mins</span>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group/map">
<div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 group-hover/map:text-white group-hover/map:bg-cyan-500 transition-all">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-semibold text-white">Amnesia Nightclub</div>
<div className="text-xs text-zinc-400">San Antonio Rd, Ibiza</div>
</div>
<i className="w-4 h-4 ml-auto text-zinc-500 group-hover/map:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-cyan-400 font-mono text-xs mb-4 block tracking-widest">/// EVENT DETAILS</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                    WHERE SOUND MEETS <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ELECTRICITY</span>
</h2>
<p className="text-zinc-400 text-sm leading-loose mb-8 max-w-lg">
                    Join us for a once-in-a-lifetime night where the digital world bleeds into reality. Holographic visuals, 30,000 watts of bass, and the exclusive premiere of the LAMBOLOCCA EP.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Exclusive Merch Drop
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> VR Experience Zone
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Special Guest: CyberPunk
                    </li>
</ul>
<button className="text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors text-sm font-medium">VIEW FULL LINEUP</button>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black/40" id="tour">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">WORLD TOUR <span className="text-zinc-600">2025/26</span></h2>
<div className="flex gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-zinc-400">TICKETS SELLING FAST</span>
</div>
</div>
<div className="grid gap-1">

<div className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-zinc-500 group-hover:text-purple-400">OCT 14</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">London, UK</span>
<span className="text-xs text-zinc-500">Printworks</span>
</div>
</div>
<button className="px-4 py-1 border border-white/20 rounded-full text-xs text-white hover:bg-white hover:text-black transition-colors">TICKETS</button>
</div>

<div className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/5 opacity-60">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-zinc-500">NOV 02</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight line-through decoration-zinc-500">Berlin, DE</span>
<span className="text-xs text-zinc-500">Berghain</span>
</div>
</div>
<span className="px-3 py-1 bg-red-900/30 text-red-500 border border-red-500/30 rounded text-[10px] font-bold tracking-wider">SOLD OUT</span>
</div>

<div className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-zinc-500 group-hover:text-yellow-400">DEC 18</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">Tokyo, JP</span>
<span className="text-xs text-zinc-500">Womb</span>
</div>
</div>
<button className="px-4 py-1 border border-white/20 rounded-full text-xs text-white hover:bg-white hover:text-black transition-colors">TICKETS</button>
</div>

<div className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-zinc-500 group-hover:text-cyan-400">JAN 05</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tight">Miami, USA</span>
<span className="text-xs text-zinc-500">Club Space</span>
</div>
</div>
<button className="px-4 py-1 border border-white/20 rounded-full text-xs text-white hover:bg-white hover:text-black transition-colors">TICKETS</button>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-block mb-12">
<i className="w-8 h-8 text-white/20 mx-auto mb-4" data-lucide="quote"></i>
<h3 className="text-2xl md:text-3xl font-medium leading-tight text-white tracking-tight max-w-2xl mx-auto">
                    "Jake Volt isn't just playing music; he's engineering raw energy. The most electrifying set I've seen in a decade."
                </h3>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
<div className="text-left">
<div className="text-sm font-semibold text-white">DJ MAG</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Editor's Choice</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="glass-panel p-1 rounded-3xl">
<div className="bg-[#050510] rounded-[22px] p-8 md:p-12 border border-white/5">
<div className="text-center mb-8">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">GET YOUR FREE PASS</h2>
<p className="text-zinc-400 text-sm">Join the mailing list for early access to tracks and VIP tour perks.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('success-msg').classList.remove('hidden'); this.classList.add('hidden');">
<div className="group">
<label className="text-[10px] font-mono text-zinc-500 uppercase mb-1 block group-focus-within:text-cyan-400 transition-colors">Email Frequency</label>
<div className="relative">
<i className="absolute left-3 top-3 w-4 h-4 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" data-lucide="zap"></i>
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600" placeholder="name@example.com" required="" type="email"/>
</div>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-zinc-600 to-cyan-500 w-0 transition-all duration-500 group-focus-within:w-[70%]"></div>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-3 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group" type="submit">
<span>CLAIM YOUR VOLTAGE</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
<div className="hidden text-center py-8" id="success-msg">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-4">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-1">YOU'RE CHARGED!</h3>
<p className="text-zinc-500 text-sm">Check your inbox for the download link.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<a className="display-font text-2xl font-bold tracking-tighter text-white block mb-2" href="#">JAKE VOLT</a>
<p className="text-xs text-zinc-600">© 2026 High Voltage Records. All rights reserved.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-400 hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-400 hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="music-2"></i></a>
<a className="text-zinc-400 hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 w-80 glass-panel rounded-xl p-4 hidden md:block border-t border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02] cursor-grab active:cursor-grabbing" id="music-player">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded overflow-hidden relative group">
<div className="absolute inset-0 bg-cyan-500/20 animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-6 h-6 text-white animate-[spin_3s_linear_infinite]" data-lucide="disc"></i>
</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-white truncate">Lambolocca - Radio Edit</h4>
<div className="text-[10px] text-zinc-400 uppercase tracking-wide">Jake Volt</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform">
<i className="w-3 h-3 fill-black" data-lucide="play"></i>
</button>
</div>

<div className="mt-3 flex items-end justify-between h-6 gap-[2px] opacity-70">
<div className="w-1 bg-cyan-500 rounded-t-sm h-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500 rounded-t-sm h-[60%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[80%] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[40%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-yellow-400 rounded-t-sm h-[90%] animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-yellow-400 rounded-t-sm h-[50%] animate-[pulse_0.9s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500 rounded-t-sm h-[70%] animate-[pulse_1.3s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500 rounded-t-sm h-[30%] animate-[pulse_1.4s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[85%] animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[45%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-yellow-400 rounded-t-sm h-[65%] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-yellow-400 rounded-t-sm h-[25%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500 rounded-t-sm h-[70%] animate-[pulse_1.3s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500 rounded-t-sm h-[30%] animate-[pulse_1.4s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[85%] animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-purple-500 rounded-t-sm h-[45%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
</div>
</div>


    </>
  );
}
