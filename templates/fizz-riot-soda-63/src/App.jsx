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



        // Initialize Icons
        lucide.createIcons();

        // Panic Button / Shake Logic
        const panicBtn = document.getElementById('panic-btn');
        const body = document.body;
        
        panicBtn.addEventListener('click', () => {
            // Audio simulation via console
            console.log("🔊 [SOUND]: AIR HORN REMIX");
            
            // Visual Chaos
            body.classList.add('shake-active');
            body.style.filter = 'invert(1)';
            
            setTimeout(() => {
                body.classList.remove('shake-active');
                body.style.filter = 'invert(0)';
            }, 5000); // 5 seconds of chaos
        });

        // Cursor Bubbles Logic
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.8) { // Don't spawn on every frame, too heavy
                const bubble = document.createElement('div');
                bubble.classList.add('cursor-bubble');
                
                // Random colors
                const colors = ['#ff00ff', '#00ff00', '#00ffff', '#ffff00'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                const size = Math.random() * 20 + 5;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.background = randomColor;
                bubble.style.left = `${e.clientX}px`;
                bubble.style.top = `${e.clientY}px`;
                
                document.body.appendChild(bubble);
                
                setTimeout(() => {
                    bubble.remove();
                }, 1000);
            }
        });

        // Caffeine Meter Logic
        const slider = document.getElementById('caffeine-slider');
        slider.addEventListener('input', (e) => {
            const speed = 2 - (e.target.value / 50); // Faster animation as value goes up
            document.documentElement.style.setProperty('--speed', `${speed}s`);
            // Apply to elements manually if needed, or use CSS variable in animations
            // Simple effect: rotate hue of body based on value
            document.body.style.filter = `hue-rotate(${e.target.value * 3.6}deg)`;
        });

        // Random Burp Logic (Visual Toast)
        setInterval(() => {
            if(Math.random() > 0.7) {
                const toast = document.createElement('div');
                toast.innerText = "BURP!";
                toast.style.position = 'fixed';
                toast.style.left = `${Math.random() * 90}%`;
                toast.style.top = `${Math.random() * 90}%`;
                toast.style.fontFamily = 'Bangers';
                toast.style.fontSize = '3rem';
                toast.style.color = '#fff';
                toast.style.textShadow = '4px 4px #000';
                toast.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
                toast.style.zIndex = '99999';
                toast.style.pointerEvents = 'none';
                document.body.appendChild(toast);
                
                // Animate out
                setTimeout(() => {
                    toast.style.transition = 'all 1s';
                    toast.style.opacity = '0';
                    toast.style.transform += ' scale(2)';
                }, 100);

                setTimeout(() => toast.remove(), 1100);
            }
        }, 47000); // 47 seconds roughly
    
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
      

<div className="fixed inset-0 pointer-events-none z-40 noise-bg opacity-40 mix-blend-overlay"></div>

<div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-600 via-purple-800 to-blue-900 animate-[pulse_4s_ease-in-out_infinite] opacity-80"></div>
<div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50 blur-[100px]">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-chaos"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-chaos" style={{animationDelay: '-2s'}}></div>
<div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-chaos" style={{animationDelay: '-4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b-4 border-black bg-white/10 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="group relative">
<div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
<h1 className="relative font-glitch text-4xl md:text-5xl text-white tracking-tighter hover:scale-110 transition-transform cursor-pointer" data-text="FIZZ RIOT">
                    FIZZ RIOT
                </h1>
</div>
<div className="hidden md:flex gap-8 font-banger text-2xl tracking-wide text-yellow-300">
<a className="hover:text-cyan-400 hover:-rotate-6 hover:scale-125 transition-all duration-100" href="#">FLAVORS</a>
<a className="hover:text-lime-400 hover:rotate-6 hover:scale-125 transition-all duration-100" href="#">CHAOS LAB</a>
<a className="hover:text-fuchsia-400 hover:-rotate-12 hover:scale-125 transition-all duration-100" href="#">MANIFESTO</a>
</div>
<button className="relative bg-red-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] text-white font-bold font-mono-space py-2 px-4 uppercase tracking-widest transition-all active:bg-red-700" id="panic-btn">
<span className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="skull"></i> PANIC MODE</span>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-20">
<span className="font-banger text-[20vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">BURP</span>
</div>
<div className="relative z-10 text-center px-4">
<div className="inline-block transform -rotate-2 mb-4 hover:rotate-2 transition-transform duration-75">
<span className="bg-lime-400 text-black font-mono-space font-bold px-2 py-1 text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">WARNING: CONTENTS UNDER PRESSURE</span>
</div>
<h2 className="glitch-layers font-black text-7xl md:text-9xl text-white font-glitch mb-8 leading-none drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" data-text="DRINK THE NOISE">
                DRINK THE<br/>NOISE
            </h2>

<div className="relative w-64 h-[500px] mx-auto my-12 group perspective-1000">
<div className="w-full h-full relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-12 animate-float-chaos">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-[3rem] border-4 border-black flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.5)] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 mix-blend-overlay"></div>

<div className="bg-yellow-300 w-full h-48 -skew-y-6 border-y-4 border-black flex items-center justify-center overflow-hidden relative">
<span className="font-banger text-8xl text-black absolute whitespace-nowrap animate-marquee">
                                LIQUID LIGHTNING /// LIQUID LIGHTNING /// LIQUID LIGHTNING
                            </span>
</div>
<div className="absolute bottom-8 font-mono-space font-bold text-white text-xl">0% SUBTLETY</div>
</div>

<div className="absolute -top-10 left-1/2 -translate-x-1/2">
<div className="flex justify-center items-end gap-2 h-20">
<div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-6 h-6 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
<div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
<button className="group relative px-8 py-4 bg-fuchsia-600 text-white font-banger text-3xl tracking-widest border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all" onclick="explodeConfetti(event)">
<span className="relative z-10 group-hover:animate-pulse">BUY NOW OR CRY LATER</span>
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
</button>
<div className="flex items-center gap-2 bg-black text-lime-400 border-2 border-lime-400 px-4 py-2 font-mono-space text-sm">
<i className="w-4 h-4 animate-pulse" data-lucide="zap"></i>
<span>CURRENT HYPE: 9,000%</span>
</div>
</div>
</div>
</main>

<div className="bg-yellow-400 border-y-4 border-black py-4 overflow-hidden relative -rotate-1 scale-105 z-20">
<div className="whitespace-nowrap font-banger text-5xl md:text-7xl text-black animate-marquee flex gap-8">
<span>NO PRESERVATIVES ONLY ADRENALINE</span>
<i className="w-12 h-12 fill-black" data-lucide="star"></i>
<span>TASTES LIKE THE INTERNET</span>
<i className="w-12 h-12 fill-black" data-lucide="bomb"></i>
<span>VOID FLAVORED</span>
<i className="w-12 h-12 fill-black" data-lucide="zap"></i>
<span>NO PRESERVATIVES ONLY ADRENALINE</span>
<i className="w-12 h-12 fill-black" data-lucide="star"></i>
<span>TASTES LIKE THE INTERNET</span>
</div>
</div>

<section className="py-32 relative z-10 bg-white overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:30px_30px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4">
<h3 className="font-black text-6xl md:text-8xl mb-20 text-black text-center font-glitch tracking-tighter uppercase transform -rotate-2">
                Choose Your <span className="text-fuchsia-600 decoration-wavy underline decoration-4">Poison</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">

<div className="group relative bg-black p-1 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:z-20">
<div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
<div className="relative h-full bg-cyan-300 border-4 border-black p-6 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<i className="w-12 h-12 text-black stroke-[2.5]" data-lucide="smile"></i>
</div>
<div className="mt-8 transform group-hover:scale-110 transition-transform duration-500">
<h4 className="font-banger text-6xl text-black leading-none mb-2">BLUE<br/>SCREEN</h4>
<p className="font-mono-space text-black font-bold text-lg border-t-2 border-black pt-2">FLAVOR: ERROR 404</p>
</div>
<button className="mt-8 w-full bg-black text-white font-mono-space font-bold py-3 hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                            CRASH SYSTEM
                        </button>
</div>
</div>

<div className="group relative bg-black p-1 transform -rotate-2 scale-110 z-10 hover:rotate-0 transition-transform duration-300">
<div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-100 transition-opacity duration-300 blur-lg animate-pulse"></div>
<div className="relative h-full bg-pink-500 border-4 border-black p-6 flex flex-col justify-between shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
<div className="absolute -right-4 -top-4 bg-yellow-400 text-black font-banger text-xl px-4 py-1 border-2 border-black rotate-12">
                            BEST SELLER
                        </div>
<div className="mt-8 transform group-hover:scale-110 transition-transform duration-500">
<h4 className="font-banger text-6xl text-white leading-none mb-2 text-stroke-black">NEON<br/>VOMIT</h4>
<p className="font-mono-space text-white font-bold text-lg border-t-2 border-white pt-2">FLAVOR: UNKNOWN FRUIT</p>
</div>
<button className="mt-8 w-full bg-yellow-300 text-black font-mono-space font-bold py-3 border-4 border-black hover:bg-black hover:text-yellow-300 transition-colors">
                            RISK IT
                        </button>
</div>
</div>

<div className="group relative bg-black p-1 transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:z-20">
<div className="absolute -inset-2 bg-gradient-to-r from-lime-400 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
<div className="relative h-full bg-lime-400 border-4 border-black p-6 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<i className="w-12 h-12 text-black stroke-[2.5]" data-lucide="radio"></i>
</div>
<div className="mt-8 transform group-hover:scale-110 transition-transform duration-500">
<h4 className="font-banger text-6xl text-black leading-none mb-2">RADIO<br/>ACTIVE</h4>
<p className="font-mono-space text-black font-bold text-lg border-t-2 border-black pt-2">FLAVOR: URANIUM-235</p>
</div>
<button className="mt-8 w-full bg-black text-white font-mono-space font-bold py-3 hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                            GLOW UP
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden border-y-4 border-white">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<h3 className="font-marker text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mb-12 transform -rotate-1">
                FIZZ PHYSICS PLAYGROUND
            </h3>
<div className="bg-gray-900 border-4 border-white p-8 max-w-2xl mx-auto shadow-[15px_15px_0px_0px_#333]">
<div className="flex justify-between items-end mb-8">
<div className="text-left">
<p className="font-mono-space text-gray-400 text-sm">SYSTEM STATUS</p>
<p className="font-mono-space text-green-400 font-bold blink">● ONLINE (BARELY)</p>
</div>
<div className="font-banger text-4xl text-white">
                        CAFFEINE METER
                    </div>
</div>
<input className="w-full h-12 bg-gray-700 rounded-none appearance-none cursor-pointer border-2 border-white mb-8 accent-fuchsia-500 hover:accent-lime-400 transition-all" id="caffeine-slider" max="100" min="1" type="range" value="50"/>
<div className="grid grid-cols-2 gap-4">
<div className="bg-blue-600 p-4 border-2 border-white transform hover:-translate-y-1 transition-transform cursor-not-allowed opacity-50">
<i className="w-8 h-8 mx-auto mb-2" data-lucide="cloud-rain"></i>
<span className="font-mono-space font-bold text-sm">RAIN SODA</span>
</div>
<div className="bg-orange-500 p-4 border-2 border-white transform hover:-translate-y-1 transition-transform cursor-pointer hover:bg-orange-400" onclick="document.body.classList.toggle('rainbow-mode')">
<i className="w-8 h-8 mx-auto mb-2" data-lucide="palette"></i>
<span className="font-mono-space font-bold text-sm">DISCO MODE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-900 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<h3 className="font-banger text-6xl md:text-8xl text-white mb-16 text-center">REVIEWS FROM THE VOID</h3>
<div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-12 snap-x">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform rotate-1 snap-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="alien"></i>
</div>
<div>
<p className="font-bold font-mono-space">ZORG FROM SECTOR 7</p>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="font-marker text-xl">"I drank this and now I can taste colors. My spaceship is jealous of my energy."</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-lime-300 p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform -rotate-2 snap-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="ghost"></i>
</div>
<div>
<p className="font-bold font-mono-space">CASPER THE UNFRIENDLY</p>
<div className="flex text-black">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star-half"></i>
</div>
</div>
</div>
<p className="font-marker text-xl">"It's too loud. The soda is literally yelling at me. 10/10 would recommend."</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-cyan-300 p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] transform rotate-3 snap-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
<i className="text-white w-8 h-8" data-lucide="glasses"></i>
</div>
<div>
<p className="font-bold font-mono-space">DEV_OPERATOR</p>
<div className="flex text-black">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="font-marker text-xl">"Fixed my bugs by simply intimidating the code with my burps."</p>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white border-t-8 border-lime-400 pb-12 pt-20">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-md">
<h2 className="font-glitch text-6xl mb-4 text-lime-400">FIZZ RIOT</h2>
<p className="font-mono-space text-gray-400">
                    Legal: We are not responsible if you accidentally phase into another dimension. Drink responsibly (or don't, we're a soda, not your mom).
                </p>
</div>
<div className="grid grid-cols-2 gap-8 font-banger text-2xl text-fuchsia-500">
<a className="hover:text-white hover:translate-x-2 transition-transform" href="#">INSTAGRAM</a>
<a className="hover:text-white hover:translate-x-2 transition-transform" href="#">TIKTOK</a>
<a className="hover:text-white hover:translate-x-2 transition-transform" href="#">MYSPACE</a>
<a className="hover:text-white hover:translate-x-2 transition-transform" href="#">DARK WEB</a>
</div>
</div>
<div className="mt-20 text-center font-mono-space text-xs text-gray-700">
            © 202X FIZZ RIOT. ALL RIGHTS RESERVED IN THIS UNIVERSE.
        </div>
</footer>



    </>
  );
}
