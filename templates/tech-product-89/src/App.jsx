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



        lucide.createIcons();

        // --- iPhone 3D Parallax & Game Logic ---
        const iphoneContainer = document.getElementById('iphone-container');
        const iphoneCanvas = document.getElementById('iphone-game');
        const iphoneUiOverlay = document.getElementById('iphone-ui-overlay');
        const ctxPhone = iphoneCanvas.getContext('2d');
        
        // Set canvas res
        iphoneCanvas.width = iphoneContainer.offsetWidth;
        iphoneCanvas.height = iphoneContainer.offsetHeight;

        let isPhoneGameActive = false;
        let phoneParticles = [];

        // Parallax Effect
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            // Subtle rotation limit
            const rotateX = ((clientY - centerY) / centerY) * -15; 
            const rotateY = ((clientX - centerX) / centerX) * 15;

            // Apply to iPhone container only if in view (simple optimization)
            if (window.scrollY < window.innerHeight) {
                iphoneContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        // Phone Game Logic (Space Shooter style particles)
        iphoneContainer.addEventListener('click', () => {
            if(!isPhoneGameActive) {
                isPhoneGameActive = true;
                iphoneUiOverlay.style.opacity = '0';
                spawnPhoneParticles();
                animatePhoneGame();
            } else {
                // Shoot effect
                spawnExplosion(iphoneCanvas.width/2, iphoneCanvas.height/2);
            }
        });

        class Particle {
            constructor(x, y, color, speed) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.size = Math.random() * 3 + 1;
                this.speedY = speed;
                this.speedX = (Math.random() - 0.5) * 2;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                if(this.y > iphoneCanvas.height) this.y = 0;
            }
            draw() {
                ctxPhone.fillStyle = this.color;
                ctxPhone.beginPath();
                ctxPhone.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctxPhone.fill();
            }
        }

        function spawnPhoneParticles() {
            for(let i=0; i<50; i++) {
                phoneParticles.push(new Particle(
                    Math.random() * iphoneCanvas.width,
                    Math.random() * iphoneCanvas.height,
                    `rgba(${Math.random()*100 + 155}, ${Math.random()*100 + 155}, 255, 0.8)`,
                    Math.random() * 5 + 2
                ));
            }
        }

        function spawnExplosion(x, y) {
             for(let i=0; i<20; i++) {
                phoneParticles.push(new Particle(x, y, '#ffcc00', (Math.random()-0.5)*10));
             }
        }

        function animatePhoneGame() {
            if (!isPhoneGameActive) return;
            ctxPhone.fillStyle = 'rgba(0,0,0,0.2)'; // Trail effect
            ctxPhone.fillRect(0, 0, iphoneCanvas.width, iphoneCanvas.height);
            
            phoneParticles.forEach(p => {
                p.update();
                p.draw();
            });
            
            requestAnimationFrame(animatePhoneGame);
        }


        // --- MacBook Performance Game Logic ---
        const macCanvas = document.getElementById('mac-game');
        const ctxMac = macCanvas.getContext('2d');
        const cpuBar = document.getElementById('cpu-bar');
        
        // Resize observer for mac canvas
        const resizeMacCanvas = () => {
            macCanvas.width = macCanvas.parentElement.offsetWidth;
            macCanvas.height = macCanvas.parentElement.offsetHeight;
        };
        window.addEventListener('resize', resizeMacCanvas);
        resizeMacCanvas();

        let macParticles = [];
        let mouse = { x: undefined, y: undefined };
        let speedMultiplier = 1;

        macCanvas.addEventListener('mousemove', (e) => {
            const rect = macCanvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            
            // Increase "CPU Load" based on movement speed (simulated here by distance from center for simplicity)
            const dist = Math.hypot(mouse.x - macCanvas.width/2, mouse.y - macCanvas.height/2);
            speedMultiplier = 1 + (dist / 100);
            
            // Update UI Bar
            let percentage = Math.min(100, (speedMultiplier * 10));
            cpuBar.style.width = `${percentage}%`;
            if(percentage > 80) cpuBar.classList.add('from-red-500', 'to-orange-500');
            else cpuBar.classList.remove('from-red-500', 'to-orange-500');
        });

        macCanvas.addEventListener('mouseleave', () => {
            mouse.x = undefined;
            mouse.y = undefined;
            speedMultiplier = 1;
            cpuBar.style.width = '10%';
        });

        class FlowParticle {
            constructor() {
                this.x = Math.random() * macCanvas.width;
                this.y = Math.random() * macCanvas.height;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.size = Math.random() * 2;
                this.color = `rgba(${Math.random()*50}, ${Math.random()*100 + 150}, 255, `;
            }
            update() {
                // If mouse interacts, particles swirl
                if(mouse.x) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if(dist < 200) {
                        const force = (200 - dist) / 200;
                        this.vx += dx/dist * force * speedMultiplier * 0.5;
                        this.vy += dy/dist * force * speedMultiplier * 0.5;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Friction
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Bounce edges
                if(this.x < 0 || this.x > macCanvas.width) this.vx *= -1;
                if(this.y < 0 || this.y > macCanvas.height) this.vy *= -1;
            }
            draw() {
                ctxMac.fillStyle = this.color + (speedMultiplier/5 + 0.2) + ')';
                ctxMac.beginPath();
                ctxMac.arc(this.x, this.y, this.size * (speedMultiplier/2), 0, Math.PI*2);
                ctxMac.fill();
            }
        }

        function initMac() {
            for(let i=0; i<150; i++) macParticles.push(new FlowParticle());
            animateMac();
        }

        function animateMac() {
            ctxMac.fillStyle = 'rgba(13, 13, 13, 0.2)';
            ctxMac.fillRect(0, 0, macCanvas.width, macCanvas.height);
            
            macParticles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateMac);
        }
        
        initMac();

    
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
      

<nav className="fixed w-full z-50 glass-nav h-12 text-gray-300 text-xs">
<div className="max-w-5xl mx-auto h-full flex justify-between items-center px-4">
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.52.87 3.29.87.76 0 2.21-1.07 3.71-0.91.63.03 2.42.26 3.56 1.93-2.9 1.73-2.39 5.84.5 7.05-.36.93-.86 1.88-1.17 2.67zM13 3.5c.54-.65 1.94-1.35 3.23-1.35.15 1.64-1.1 3.53-2.66 4.09-.73.26-2.32-.09-2.7-2.14-.06-.33.02-.44 2.13-.6z"></path></svg>
</a>
<div className="hidden md:flex space-x-8 tracking-tight font-normal">
<a className="hover:text-white transition-colors" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Mac</a>
<a className="hover:text-white transition-colors" href="#">iPad</a>
<a className="hover:text-white transition-colors" href="#">iPhone</a>
<a className="hover:text-white transition-colors" href="#">Watch</a>
<a className="hover:text-white transition-colors" href="#">Vision</a>
<a className="hover:text-white transition-colors" href="#">AirPods</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="flex items-center space-x-4">
<i className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" data-lucide="search"></i>
<i className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" data-lucide="shopping-bag"></i>
</div>
</div>
</nav>

<section className="relative h-screen bg-[#101010] text-white flex flex-col items-center pt-32 overflow-hidden perspective-1000">
<div className="z-10 text-center space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold text-[#b69974]">iPhone 15 Pro</h2>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight">Titanium. So strong.<br/>So light. So Pro.</h1>
<div className="flex items-center justify-center gap-4 mt-4">
<button className="apple-btn text-white rounded-full px-5 py-2 text-sm font-medium">Buy</button>
<a className="text-[#2997ff] hover:underline text-sm flex items-center gap-1" href="#">Learn more <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
</div>

<div className="mt-12 relative w-full max-w-md aspect-[9/19] transition-transform duration-100 ease-out" id="iphone-container">

<div className="absolute inset-0 bg-[#2a2a2a] rounded-[3rem] shadow-2xl border-[6px] border-[#4a4a4a] overflow-hidden transform preserve-3d">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
<div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
</div>

<canvas className="w-full h-full bg-black cursor-crosshair" id="iphone-game"></canvas>

<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500 pointer-events-none" id="iphone-ui-overlay">
<i className="w-12 h-12 text-white mb-4 opacity-80" data-lucide="gamepad-2"></i>
<p className="text-white text-sm font-medium tracking-wide">A17 Pro Chip Demo</p>
<p className="text-gray-400 text-xs mt-2">Click to launch Ray Tracing</p>
</div>
</div>

<div className="absolute inset-0 rounded-[3rem] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] z-30"></div>
</div>
<p className="absolute bottom-8 text-gray-500 text-xs font-medium">Experience the power of A17 Pro. Interactive WebGL Simulation.</p>
</section>

<section className="relative h-screen bg-[#fbfbfd] text-[#1d1d1f] flex flex-col items-center justify-start pt-24 overflow-hidden">
<div className="z-10 text-center space-y-2 mb-12">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">MacBook Air</h2>
<p className="text-xl md:text-2xl font-normal tracking-tight text-gray-500">Lean. Mean. M3 Machine.</p>
<div className="flex items-center justify-center gap-4 mt-4">
<button className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white transition-colors rounded-full px-5 py-2 text-sm font-medium">Buy</button>
<a className="text-[#0071e3] hover:underline text-sm flex items-center gap-1" href="#">Learn more <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
</div>

<div className="relative w-[90%] max-w-4xl aspect-[16/10]">

<div className="absolute inset-x-[12%] top-0 bottom-[8%] bg-black rounded-t-2xl border-t-4 border-x-4 border-gray-300 shadow-2xl overflow-hidden mac-screen-glow group cursor-pointer">

<div className="w-full h-full bg-[#0d0d0d] relative overflow-hidden">
<canvas className="w-full h-full" id="mac-game"></canvas>

<div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none select-none">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-white text-xs font-mono">CPU LOAD</span>
</div>
<div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[10%] transition-all duration-100" id="cpu-bar"></div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
<div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap"></i>
<span className="text-white text-sm font-medium">Move mouse to test M3 Speed</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-[8%] bg-[#d8d8d8] rounded-b-xl shadow-lg flex justify-center">
<div className="w-[15%] h-[40%] bg-[#a0a0a0] rounded-b-md"></div>
</div>
</div>
</section>

<section className="bg-white py-4 px-4">
<div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#f5f5f7] h-[500px] md:h-[600px] flex flex-col items-center justify-end pb-12 overflow-hidden group relative cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">

<div className="w-64 h-64 rounded-full bg-gradient-to-tr from-orange-300 to-purple-400 blur-[80px] opacity-40"></div>
</div>
<div className="z-10 text-center mb-auto mt-16">
<h3 className="text-3xl font-semibold tracking-tight mb-1 text-black">Vision Pro</h3>
<p className="text-lg text-gray-500">Welcome to the era of spatial computing.</p>
</div>
<div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
<div className="w-64 h-40 bg-gradient-to-b from-gray-200 to-gray-300 rounded-[2rem] shadow-inner border border-gray-300 flex items-center justify-center">
<span className="font-semibold text-gray-400 tracking-widest text-xs">VISION OS</span>
</div>
</div>
</div>

<div className="bg-[#f5f5f7] h-[500px] md:h-[600px] flex flex-col items-center justify-start pt-16 overflow-hidden group relative cursor-pointer">
<div className="z-10 text-center">
<div className="flex items-center justify-center gap-1 mb-1">
<i className="w-5 h-5 fill-current" data-lucide="apple"></i>
<h3 className="text-3xl font-semibold tracking-tight text-black">WATCH</h3>
</div>
<p className="text-orange-600 text-sm font-semibold tracking-wide uppercase">Ultra 2</p>
<p className="text-lg text-gray-500 mt-1">Next level adventure.</p>
</div>
<div className="mt-auto mb-12 relative">

<div className="w-48 h-56 bg-[#222] rounded-[2.5rem] border-4 border-[#b6b6b6] shadow-xl flex items-center justify-center relative group-hover:-translate-y-4 transition-transform duration-500">
<div className="w-2 h-8 bg-orange-500 absolute -right-[6px] top-12 rounded-r-md"></div>
<div className="text-white text-center">
<span className="text-4xl font-bold font-mono text-orange-500">10:09</span>
<div className="text-xs text-gray-400 mt-1">ALT 2,400M</div>
</div>
</div>
</div>
</div>

<div className="bg-black text-white h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden relative group col-span-1 md:col-span-2">
<div className="z-10 text-center space-y-2 absolute top-16">
<h3 className="text-4xl font-semibold tracking-tight">iPad Pro</h3>
<p className="text-xl text-gray-400">Supercharged by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">M2</span></p>
</div>

<div className="mt-24 w-3/4 h-64 relative group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-80 blur-xl"></div>
<div className="absolute inset-2 bg-black rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden">

<div className="w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
<div className="w-12 h-12 bg-blue-500/50 rounded-full absolute top-1/4 left-1/4 animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#f5f5f7] py-12 text-xs text-gray-500 border-t border-gray-200">
<div className="max-w-5xl mx-auto px-4 space-y-4">
<div className="space-y-2 pb-4 border-b border-gray-200">
<p>1. Game simulations are for illustrative purposes only. Actual battery life varies by use.</p>
<p>2. 3D Parallax requires a pointing device.</p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-2">
<div className="mb-2 md:mb-0">
<p>Copyright © 2024 Apple Inc. All rights reserved.</p>
</div>
<div className="flex space-x-4">
<a className="hover:underline text-gray-700" href="#">Privacy Policy</a>
<div className="h-3 w-px bg-gray-300"></div>
<a className="hover:underline text-gray-700" href="#">Terms of Use</a>
<div className="h-3 w-px bg-gray-300"></div>
<a className="hover:underline text-gray-700" href="#">Sales and Refunds</a>
<div className="h-3 w-px bg-gray-300"></div>
<a className="hover:underline text-gray-700" href="#">Legal</a>
<div className="h-3 w-px bg-gray-300"></div>
<a className="hover:underline text-gray-700" href="#">Site Map</a>
</div>
<div className="mt-2 md:mt-0">
<a className="hover:underline text-gray-700" href="#">United States</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
