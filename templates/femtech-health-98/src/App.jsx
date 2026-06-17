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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // === Core Interactions ===

        // 1. Reveal on Scroll
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Trigger custom class for HR divider
                    if(entry.target.classList.contains('thermal-hr')) {
                        entry.target.classList.add('in-view');
                    }
                    
                    // Trigger SVG line drawing
                    const drawLine = entry.target.querySelector('.draw-line');
                    if(drawLine) drawLine.style.strokeDashoffset = '0';

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-reveal, .trigger-in-view').forEach(el => observer.observe(el));

        // 2. Thermal Text Reveal (H2s)
        document.querySelectorAll('.thermal-target').forEach(el => {
            // Only split if no child SVGs are present to avoid breaking layout elements
            const textNodes = [];
            el.childNodes.forEach(node => {
                if(node.nodeType === 3) textNodes.push(node); // Text node
            });
            
            textNodes.forEach(node => {
                const text = node.textContent;
                const wrapper = document.createElement('span');
                
                text.split('').forEach((char, i) => {
                    if(char === ' ') {
                        wrapper.appendChild(document.createTextNode(' '));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'thermal-char';
                        span.style.transitionDelay = `${(i * 15) % 600}ms`; // Stagger
                        wrapper.appendChild(span);
                    }
                });
                el.replaceChild(wrapper, node);
            });

            const textObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('thermal-active');
                        textObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            textObserver.observe(el);
        });

        // 3. Count Ups
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseFloat(entry.target.getAttribute('data-target'));
                    const decimals = parseInt(entry.target.getAttribute('data-decimals') || 0);
                    const duration = 2000;
                    const start = performance.now();
                    
                    const updateCount = (timestamp) => {
                        const progress = Math.min((timestamp - start) / duration, 1);
                        // Ease out expo
                        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                        const current = easeProgress * target;
                        
                        entry.target.innerText = decimals > 0 
                            ? current.toFixed(decimals) 
                            : Math.floor(current).toLocaleString();

                        if (progress < 1) requestAnimationFrame(updateCount);
                        else entry.target.innerText = target.toLocaleString() + (decimals > 0 && target % 1 !== 0 ? '' : '');
                    };
                    requestAnimationFrame(updateCount);
                    countObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.count-up, .tick-up').forEach(el => countObserver.observe(el));

        // 4. Parallax Hero Mockup
        const heroMockup = document.getElementById('hero-parallax');
        if (heroMockup && window.innerWidth > 1024) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                heroMockup.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(${scrolled * -0.15}px)`;
            });
        }

        // 5. FlashGuard Timeline Animation
        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer) {
            const tlObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    document.getElementById('timeline-fill').style.width = '80%';
                    document.getElementById('timeline-dot').style.left = '90%';
                    
                    const nodes = document.querySelectorAll('.timeline-node');
                    nodes.forEach((node, index) => {
                        setTimeout(() => {
                            node.style.borderColor = '#e8734a';
                            node.style.backgroundColor = 'rgba(232,115,74,0.1)';
                        }, (index + 1) * 600);
                    });
                    tlObserver.disconnect();
                }
            }, { threshold: 0.6 });
            tlObserver.observe(timelineContainer);
        }

        // 6. Pricing Toggle
        const btnToggle = document.getElementById('billing-toggle');
        const pricePro = document.getElementById('price-pro');
        const indicator = btnToggle?.querySelector('div');
        
        if (btnToggle) {
            btnToggle.addEventListener('click', () => {
                const isAnnual = btnToggle.getAttribute('aria-pressed') === 'true';
                btnToggle.setAttribute('aria-pressed', !isAnnual);
                
                if (!isAnnual) { // Switch to Annual
                    indicator.style.transform = 'translateX(1.5rem)';
                    document.getElementById('label-annual').classList.add('text-[#f0edf8]');
                    document.getElementById('label-annual').classList.remove('text-[#8b85a0]');
                    document.getElementById('label-monthly').classList.remove('text-[#f0edf8]');
                    document.getElementById('label-monthly').classList.add('text-[#8b85a0]');
                    
                    // Animate number change
                    let current = 15;
                    const interval = setInterval(() => {
                        current -= 1;
                        pricePro.innerText = current;
                        if(current <= 12) clearInterval(interval);
                    }, 50);
                } else { // Switch to Monthly
                    indicator.style.transform = 'translateX(0)';
                    document.getElementById('label-monthly').classList.add('text-[#f0edf8]');
                    document.getElementById('label-monthly').classList.remove('text-[#8b85a0]');
                    document.getElementById('label-annual').classList.remove('text-[#f0edf8]');
                    document.getElementById('label-annual').classList.add('text-[#8b85a0]');
                    
                    let current = 12;
                    const interval = setInterval(() => {
                        current += 1;
                        pricePro.innerText = current;
                        if(current >= 15) clearInterval(interval);
                    }, 50);
                }
            });
        }

        // === WebGL-Simulated Thermal Particle Field (Canvas) ===
        // Only run on non-mobile devices for performance
        if (window.innerWidth > 768) {
            const canvas = document.getElementById('thermal-canvas');
            const ctx = canvas.getContext('2d', { alpha: false }); // Optimize
            
            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Colors
            const baseBg = '#0c0b10';
            const violet = { r: 124, g: 77, b: 255 }; // #7c4dff
            const amber = { r: 232, g: 115, b: 74 };  // #e8734a

            let particles = [];
            const PARTICLE_COUNT = 1800; // Adjusted for canvas perf
            let mouseX = width / 2;
            let mouseY = height / 2;
            let targetMouseX = mouseX;
            let targetMouseY = mouseY;
            let time = 0;

            window.addEventListener('mousemove', (e) => {
                targetMouseX = e.clientX;
                targetMouseY = e.clientY;
            });

            window.addEventListener('resize', () => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
                initParticles();
            });

            class Particle {
                constructor() {
                    this.init();
                }
                
                init() {
                    // Polar distribution for organic feel
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * Math.max(width, height) * 0.7;
                    this.x = width/2 + Math.cos(angle) * radius;
                    this.y = height/2 + Math.sin(angle) * radius;
                    
                    this.baseSize = Math.random() * 1.5 + 0.5;
                    this.freq = (Math.random() - 0.5) * 0.3;
                    this.phase = Math.random() * Math.PI * 2;
                }

                draw() {
                    // Breath envelope (4s cycle)
                    const breath = Math.sin(time * 0.0015 * Math.PI * 2) * 0.5 + 0.5;
                    
                    // Individual oscillation
                    const osc = Math.sin(time * 0.001 * this.freq * Math.PI * 2 + this.phase);
                    
                    // Distance to mouse (Heat Bloom)
                    const dx = this.x - mouseX;
                    const dy = this.y - mouseY;
                    const distToMouse = Math.sqrt(dx*dx + dy*dy);
                    const heatInfluence = Math.max(0, 1 - distToMouse / 250); // 250px radius

                    // Distance to drift origin
                    const driftX = width/2 + Math.sin(time * 0.0005) * width * 0.2;
                    const distToDrift = Math.sqrt(Math.pow(this.x - driftX, 2) + Math.pow(this.y - height/2, 2));
                    const driftInfluence = Math.max(0, 1 - distToDrift / 400);

                    // Combined Heat Value (0 to 1)
                    const heat = Math.min(1, (heatInfluence * 1.5) + (driftInfluence * 0.8) + (osc * 0.2 + 0.2) * breath);

                    // Size calculation
                    const currentSize = this.baseSize + (heat * 4); // Max +4px amplitude

                    // Color calculation (Lerp base -> violet -> amber)
                    let r, g, b, alpha;
                    if (heat < 0.2) {
                        r = 22; g = 20; b = 32; alpha = 0.3; // Very dim surface color
                    } else if (heat < 0.6) {
                        const t = (heat - 0.2) / 0.4;
                        r = violet.r; g = violet.g; b = violet.b; alpha = 0.4 + t * 0.3;
                    } else {
                        const t = (heat - 0.6) / 0.4;
                        r = violet.r + (amber.r - violet.r) * t;
                        g = violet.g + (amber.g - violet.g) * t;
                        b = violet.b + (amber.b - violet.b) * t;
                        alpha = 0.7 + t * 0.3;
                    }

                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                for(let i = 0; i < PARTICLE_COUNT; i++) {
                    particles.push(new Particle());
                }
            }

            function animate(currentTime) {
                time = currentTime;
                
                // Clear background
                ctx.fillStyle = baseBg;
                ctx.fillRect(0, 0, width, height);

                // Lag mouse follower
                mouseX += (targetMouseX - mouseX) * 0.08;
                mouseY += (targetMouseY - mouseY) * 0.08;

                // Draw
                for(let i = 0; i < particles.length; i++) {
                    particles[i].draw();
                }

                requestAnimationFrame(animate);
            }

            initParticles();
            requestAnimationFrame(animate);
        } else {
            // Hide canvas on mobile
            document.getElementById('thermal-canvas').style.display = 'none';
        }

    
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
      
<div className="noise-bg"></div>

<canvas className="fixed inset-0 z-[-1] w-full h-full opacity-60" id="thermal-canvas"></canvas>

<div className="fixed inset-0 z-[-2] pointer-events-none md:hidden" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,77,255,0.35) 0%, rgba(232,115,74,0.2) 45%, transparent 100%)'}}></div>

<nav className="fixed top-0 w-full z-40 bg-[#0c0b10]/70 backdrop-blur-[1rem] border-b border-[#f0edf8]/5 transition-all duration-300" id="navbar">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4 h-[4.5rem] flex items-center justify-between">
<a className="flex items-center gap-[0.75rem] group" href="#">
<div className="relative w-[1.75rem] h-[1.75rem] ring-pulse">
<svg className="w-full h-full text-[#f0edf8]" fill="none" viewbox="0 0 24 24">
<circle className="transition-all duration-400 group-hover:stroke-[#e8734a]" cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="60 10" strokeLinecap="round" strokeWidth="2.5"></circle>
<line className="text-[#e8734a]" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" x1="22" x2="26" y1="12" y2="12"></line>
</svg>
</div>
<span className="font-syne font-bold text-[clamp(1.125rem,1.5vw,1.25rem)] tracking-[-0.02em] text-[#f0edf8]">MenoMorph</span>
</a>
<div className="hidden md:flex items-center gap-[clamp(1.5rem,2.5vw,2.5rem)] text-[clamp(0.8125rem,0.9vw,0.875rem)] font-medium text-[#8b85a0]">
<a className="nav-link hover:text-[#f0edf8] transition-colors" href="#thermo">Thermo-Sync</a>
<a className="nav-link hover:text-[#f0edf8] transition-colors" href="#nutrition">Nutrition</a>
<a className="nav-link hover:text-[#f0edf8] transition-colors" href="#ai">Meno-GPT</a>
<a className="nav-link hover:text-[#f0edf8] transition-colors" href="#proof">Research</a>
<a className="nav-link hover:text-[#f0edf8] transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center justify-center bg-[#e8734a] text-[#0c0b10] font-syne font-semibold text-[clamp(0.75rem,0.8vw,0.8125rem)] px-[1.25rem] py-[0.625rem] clip-para hover:bg-[#f5c97a] transition-colors" href="#pricing">
                Get the Ring
            </a>
<button className="md:hidden text-[#f0edf8]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-[6rem] pb-[clamp(5rem,10vw,8.75rem)] overflow-hidden">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center">
<div className="animate-reveal opacity-0 translate-y-[1.75rem]">
<div className="inline-flex items-center gap-[0.5rem] bg-[#161420]/80 border border-[#f0edf8]/10 rounded-full px-[1rem] py-[0.375rem] backdrop-blur-sm mb-[2rem]">
<div className="w-[0.375rem] h-[0.375rem] bg-[#e8734a] rounded-full live-dot"></div>
<span className="font-mono-data tracking-[0.15em] text-[#e8734a] uppercase">Live Sync</span>
</div>
</div>
<h1 className="font-syne font-bold text-[clamp(3.25rem,6.5vw,6rem)] leading-[1.05] tracking-[-0.03em] max-w-[62rem] mx-auto animate-reveal opacity-0 translate-y-[1.75rem]" style={{animationDelay: '90ms'}}>
                Your Body's Running a Fever. We Track It First.
            </h1>
<p className="mt-[1.5rem] text-[clamp(1.125rem,1.5vw,1.375rem)] text-[#8b85a0] max-w-[38rem] mx-auto leading-[1.6] animate-reveal opacity-0 translate-y-[1.75rem]" style={{animationDelay: '180ms'}}>
                MenoMorph's Aura Ring detects hot flashes seconds before they hit — and stops them.
            </p>
<div className="mt-[2.5rem] flex flex-col sm:flex-row items-center gap-[1rem] sm:gap-[1.5rem] animate-reveal opacity-0 translate-y-[1.75rem]" style={{animationDelay: '270ms'}}>
<a className="bg-[#e8734a] text-[#0c0b10] font-syne font-semibold text-[clamp(0.9375rem,1vw,1rem)] px-[2rem] py-[1rem] clip-para hover:bg-[#f5c97a] transition-colors w-full sm:w-auto" href="#pricing">
                    Start Mastering Your Data
                </a>
<a className="btn-ghost font-syne font-semibold text-[clamp(0.9375rem,1vw,1rem)] px-[2rem] py-[1rem] clip-para w-full sm:w-auto" href="#thermo">
                    See How It Works
                </a>
</div>
<div className="mt-[3.5rem] flex flex-wrap justify-center gap-[1.5rem] md:gap-[3rem] text-[#8b85a0] font-mono-data opacity-0 animate-reveal" style={{animationDelay: '360ms'}}>
<div className="flex items-center gap-[0.5rem]"><span className="text-[#e8734a]">◉</span> FDA-Registered Sensor</div>
<div className="flex items-center gap-[0.5rem]"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> HIPAA-Compliant AI</div>
<div className="flex items-center gap-[0.5rem]"><span className="text-[#f5c97a]">★</span> 4.9 / 3,200 Reviews</div>
<div className="flex items-center gap-[0.5rem]"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Ships in 48h</div>
</div>

<div className="absolute -bottom-[15%] -right-[5%] md:right-[5%] w-[clamp(18.75rem,25vw,22rem)] bento-card p-[1.5rem] bg-[#161420]/90 backdrop-blur-md hidden lg:block opacity-0 animate-reveal" id="hero-parallax" style={{animationDelay: '450ms', transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)'}}>

<div className="absolute -top-[1.5rem] left-[10%] w-[80%] bg-[#e8734a] text-[#0c0b10] p-[0.75rem] rounded-[0.5rem] flex items-center justify-between shadow-lg flash-alert z-20">
<div className="flex items-center gap-[0.5rem] font-syne font-semibold text-[0.875rem]">
<iconify-icon icon="solar:thermometer-linear" strokeWidth="2"></iconify-icon>
                        +0.4°C detected
                    </div>
<span className="font-mono-data text-[#0c0b10]/70">NOW</span>
</div>
<div className="flex justify-between items-center mb-[1.5rem] border-b border-[#f0edf8]/10 pb-[1rem]">
<div className="flex items-center gap-[0.75rem]">
<div className="w-[2rem] h-[2rem] rounded-full bg-[#f0edf8]/10 flex items-center justify-center text-[0.75rem] font-syne">SM</div>
<div>
<div className="text-[0.875rem] font-medium text-[#f0edf8] leading-tight">Sarah M., 47</div>
<div className="text-[0.6875rem] text-[#8b85a0] flex items-center gap-[0.25rem] mt-[0.125rem]">
<div className="w-[0.25rem] h-[0.25rem] bg-[#e8734a] rounded-full"></div> Ring Connected
                            </div>
</div>
</div>
</div>
<div className="flex gap-[1rem] text-[0.75rem] text-[#8b85a0] font-medium mb-[1.5rem] border-b border-[#f0edf8]/5 pb-[0.5rem]">
<span className="text-[#f0edf8] border-b border-[#e8734a] pb-[0.5rem]">Today</span>
<span>Cycle</span>
<span>Nutrition</span>
</div>
<div className="space-y-[1.5rem]">
<div>
<div className="flex justify-between text-[0.75rem] mb-[0.5rem]">
<span className="text-[#8b85a0]">Core Temp Variance</span>
<span className="text-[#e8734a] font-mono-data">+0.4°</span>
</div>
<div className="h-[3rem] w-full relative flex items-end gap-[0.25rem]">
<div className="w-full h-[30%] bg-[#f0edf8]/10 rounded-t-sm"></div>
<div className="w-full h-[40%] bg-[#f0edf8]/10 rounded-t-sm"></div>
<div className="w-full h-[35%] bg-[#f0edf8]/10 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-[#f0edf8]/10 rounded-t-sm"></div>
<div className="w-full h-[50%] bg-[#f0edf8]/10 rounded-t-sm"></div>
<div className="w-full h-[90%] bg-[#e8734a] rounded-t-sm relative">
<div className="absolute -top-[0.25rem] left-1/2 -translate-x-1/2 w-[0.375rem] h-[0.375rem] bg-[#f0edf8] rounded-full shadow-[0_0_0_4px_rgba(232,115,74,0.3)]"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-[0.75rem]">
<div className="bg-[#0c0b10] p-[0.75rem] rounded-[0.5rem] border border-[#f0edf8]/5">
<div className="text-[0.6875rem] text-[#8b85a0] mb-[0.25rem]">Next Predicted Flash</div>
<div className="font-syne font-semibold text-[1rem] text-[#f0edf8]">~2h 14m</div>
</div>
<div className="bg-[#0c0b10] p-[0.75rem] rounded-[0.5rem] border border-[#f0edf8]/5">
<div className="text-[0.6875rem] text-[#8b85a0] mb-[0.25rem]">Sleep Quality</div>
<div className="font-syne font-semibold text-[1rem] text-[#f0edf8]">78%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="thermal-hr trigger-in-view"></div>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">
<div className="font-mono-data text-[#e8734a] mb-[1.5rem] flex items-center gap-[1rem] trigger-in-view opacity-0 translate-y-4 transition-all duration-700">
                /001/ <div className="h-[0.0625rem] w-[2rem] bg-[#e8734a]"></div> THE PROBLEM
            </div>
<div className="grid lg:grid-cols-2 gap-[clamp(3rem,6vw,5rem)] items-center">
<div className="trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#8b85a0] thermal-target relative pl-[1rem]">
<svg className="absolute left-0 top-0 h-full w-[0.125rem]" preserveaspectratio="none">
<line className="draw-line" stroke="var(--accent)" strokeWidth="2" style={{strokeDasharray: '100', strokeDashoffset: '100', transition: 'stroke-dashoffset 1s ease-out'}} x1="1" x2="1" y1="0" y2="100%"></line>
</svg>
                        84% of Women Go Through It Blind.
                    </h2>
<p className="mt-[2rem] text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-[#8b85a0] leading-[1.6]">
                        No data. No warning. No plan. Just waking up drenched at 3am and Googling 'is this normal?' for the fourth time this week. Your doctor gets 12 minutes per visit. You get a pamphlet. <span className="text-[#f0edf8] font-medium">MenoMorph ends the guessing.</span>
</p>
<div className="mt-[3rem] grid grid-cols-3 gap-[1.5rem] pt-[2rem] border-t border-[#f0edf8]/10">
<div>
<div className="font-syne font-bold text-[clamp(1.5rem,2vw,2rem)] text-[#f0edf8]"><span className="count-up" data-target="12">0</span> min</div>
<div className="text-[clamp(0.75rem,0.8vw,0.8125rem)] text-[#8b85a0] mt-[0.25rem]">Avg doctor visit</div>
</div>
<div>
<div className="font-syne font-bold text-[clamp(1.5rem,2vw,2rem)] text-[#f0edf8]"><span className="count-up" data-decimals="1" data-target="5.3">0</span> yrs</div>
<div className="text-[clamp(0.75rem,0.8vw,0.8125rem)] text-[#8b85a0] mt-[0.25rem]">Avg duration</div>
</div>
<div>
<div className="font-syne font-bold text-[clamp(1.5rem,2vw,2rem)] text-[#e8734a]">0</div>
<div className="text-[clamp(0.75rem,0.8vw,0.8125rem)] text-[#8b85a0] mt-[0.25rem]">FDA predictors before us</div>
</div>
</div>
</div>

<div className="bento-card p-[clamp(1.5rem,3vw,2.5rem)] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="flex justify-between items-end mb-[2rem]">
<div className="font-syne font-semibold text-[1.125rem]">Symptom Frequency</div>
<div className="flex items-center gap-[0.5rem] text-[0.6875rem] font-mono-data text-[#8b85a0]">
<span>LOW</span>
<div className="flex gap-[0.125rem]">
<div className="w-[0.5rem] h-[0.5rem] bg-[#f0edf8]/5 rounded-sm"></div>
<div className="w-[0.5rem] h-[0.5rem] bg-[#f0edf8]/20 rounded-sm"></div>
<div className="w-[0.5rem] h-[0.5rem] bg-[#e8734a]/50 rounded-sm"></div>
<div className="w-[0.5rem] h-[0.5rem] bg-[#e8734a] rounded-sm"></div>
</div>
<span>SEVERE</span>
</div>
</div>
<div className="grid grid-cols-7 gap-[clamp(0.25rem,0.5vw,0.5rem)]">

<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">M</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">T</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">W</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">T</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">F</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">S</div>
<div className="text-[0.6875rem] text-center text-[#8b85a0] mb-[0.5rem]">S</div>

<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#e8734a]/50 rounded-sm"></div>
<div className="aspect-square bg-[#e8734a] rounded-sm relative"><div className="absolute inset-0 bg-[#e8734a] rounded-sm animate-pulse opacity-50"></div></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#e8734a] rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#e8734a]/50 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#e8734a] rounded-sm relative"><div className="absolute inset-0 bg-[#e8734a] rounded-sm animate-pulse opacity-50"></div></div>
<div className="aspect-square bg-[#e8734a]/50 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/20 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
<div className="aspect-square bg-[#f0edf8]/5 rounded-sm"></div>
</div>
</div>
</div>
</div>
</section>

<div className="thermal-hr trigger-in-view"></div>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative" id="thermo">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">
<div className="font-mono-data text-[#e8734a] mb-[1.5rem] flex items-center gap-[1rem] trigger-in-view opacity-0 translate-y-4 transition-all duration-700">
                /002/ <div className="h-[0.0625rem] w-[2rem] bg-[#e8734a]"></div> THERMO-SYNC
            </div>

<div className="mb-[clamp(4rem,8vw,6rem)] pt-[2rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100" id="timeline-container">
<h3 className="font-syne font-semibold text-[1.25rem] mb-[3rem] text-center">The FlashGuard Protocol</h3>
<div className="relative max-w-[48rem] mx-auto">

<div className="absolute top-[0.625rem] left-[10%] right-[10%] h-[0.125rem] bg-[#f0edf8]/10 rounded-full"></div>

<div className="absolute top-[0.625rem] left-[10%] h-[0.125rem] bg-[#e8734a] rounded-full w-0 transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]" id="timeline-fill"></div>

<div className="absolute top-[0.375rem] left-[10%] w-[0.625rem] h-[0.625rem] bg-[#f0edf8] rounded-full shadow-[0_0_10px_rgba(232,115,74,0.8)] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] z-10" id="timeline-dot"></div>
<div className="flex justify-between relative z-10">
<div className="flex flex-col items-center text-center w-[30%]">
<div className="w-[1.375rem] h-[1.375rem] rounded-full bg-[#161420] border-2 border-[#e8734a] mb-[1rem]"></div>
<div className="font-mono-data text-[#e8734a] mb-[0.25rem]">T-MINUS 180s</div>
<div className="text-[clamp(0.8125rem,0.9vw,0.875rem)] font-medium">Spike Detected</div>
</div>
<div className="flex flex-col items-center text-center w-[30%]">
<div className="w-[1.375rem] h-[1.375rem] rounded-full bg-[#161420] border-2 border-[#f0edf8]/30 mb-[1rem] timeline-node transition-colors duration-300 delay-[600ms]"></div>
<div className="font-mono-data text-[#8b85a0] mb-[0.25rem]">T-MINUS 120s</div>
<div className="text-[clamp(0.8125rem,0.9vw,0.875rem)] font-medium text-[#8b85a0]">Cooling Triggered</div>
</div>
<div className="flex flex-col items-center text-center w-[30%]">
<div className="w-[1.375rem] h-[1.375rem] rounded-full bg-[#161420] border-2 border-[#f0edf8]/30 mb-[1rem] timeline-node transition-colors duration-300 delay-[1200ms]"></div>
<div className="font-mono-data text-[#8b85a0] mb-[0.25rem]">T-ZERO</div>
<div className="text-[clamp(0.8125rem,0.9vw,0.875rem)] font-medium text-[#8b85a0]">Flash Averted</div>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-[clamp(2rem,4vw,3rem)] items-start">
<div className="lg:col-span-5 trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#8b85a0] thermal-target relative pl-[1rem]">
<svg className="absolute left-0 top-0 h-full w-[0.125rem]" preserveaspectratio="none">
<line className="draw-line" stroke="var(--accent)" strokeWidth="2" style={{strokeDasharray: '100', strokeDashoffset: '100', transition: 'stroke-dashoffset 1s ease-out'}} x1="1" x2="1" y1="0" y2="100%"></line>
</svg>
                        3 Seconds of Warning Changes Everything.
                    </h2>
<p className="mt-[2rem] text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-[#8b85a0] leading-[1.6]">
                        Our skin-contact sensor reads core temperature shifts imperceptible to you — a 0.4°C rise that precedes every flash. Thermo-Sync triggers your paired cooling device or delivers haptic breathing prompts before the wave hits. Not after.
                    </p>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-[1rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-300">

<div className="bento-card p-[1.5rem] hover-shake sm:col-span-2 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-[#e8734a]/10 rounded-full blur-2xl group-hover:bg-[#e8734a]/20 transition-colors duration-700"></div>
<iconify-icon className="text-[#e8734a] mb-[1rem]" icon="solar:radar-linear" width="2rem"></iconify-icon>
<h4 className="font-syne font-semibold text-[1.125rem] text-[#f0edf8] mb-[0.5rem]">Sensor reads every 200ms</h4>
<p className="text-[0.875rem] text-[#8b85a0]">Continuous bioscan mapping your unique thermal topography. Data point generation count: <span className="font-mono-data text-[#f0edf8] tick-up" data-target="432000">0</span>/day.</p>
</div>
<div className="bento-card p-[1.5rem] hover-shake">
<iconify-icon className="text-[#f0edf8] mb-[1rem]" icon="solar:devices-linear" width="2rem"></iconify-icon>
<h4 className="font-syne font-semibold text-[1.125rem] text-[#f0edf8] mb-[0.5rem]">Cooling Integration</h4>
<p className="text-[0.875rem] text-[#8b85a0]">Pairs seamlessly via Bluetooth LE with Embr Wave &amp; BioSelf wearables.</p>
</div>
<div className="bento-card p-[1.5rem] hover-shake">
<iconify-icon className="text-[#f0edf8] mb-[1rem]" icon="solar:lungs-linear" width="2rem"></iconify-icon>
<h4 className="font-syne font-semibold text-[1.125rem] text-[#f0edf8] mb-[0.5rem]">Haptic Breath Prompts</h4>
<p className="text-[0.875rem] text-[#8b85a0]">Vibrates in a 4-7-8 rhythm to activate parasympathetic cooling down-regulation.</p>
</div>
</div>
</div>
</div>
</section>

<div className="thermal-hr trigger-in-view"></div>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative bg-[#161420]/30" id="nutrition">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">
<div className="font-mono-data text-[#e8734a] mb-[1.5rem] flex items-center gap-[1rem] trigger-in-view opacity-0 translate-y-4 transition-all duration-700">
                /003/ <div className="h-[0.0625rem] w-[2rem] bg-[#e8734a]"></div> HORMONE-MAPPED NUTRITION
            </div>
<div className="grid lg:grid-cols-2 gap-[clamp(3rem,6vw,5rem)] items-center">

<div className="order-2 lg:order-1 bento-card p-[clamp(1.5rem,3vw,2.5rem)] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="flex justify-between items-center mb-[2rem]">
<div className="font-syne font-semibold text-[1.25rem]">Today's Stack</div>
<div className="text-[0.6875rem] font-mono-data bg-[#f0edf8]/10 px-[0.5rem] py-[0.25rem] rounded-sm">OCT 14</div>
</div>
<div className="p-[1rem] bg-[#0c0b10] rounded-[0.5rem] border border-[#e8734a]/30 mb-[1.5rem]">
<div className="text-[0.75rem] text-[#e8734a] font-mono-data mb-[0.25rem]">RATIONALE</div>
<div className="text-[0.875rem] text-[#f0edf8]">Adjusted based on your 3-night sleep dip and cortisol elevation pattern.</div>
</div>
<div className="space-y-[1rem]">
<div className="flex items-center justify-between p-[1rem] bg-[#f0edf8]/5 rounded-[0.5rem] hover-shake cursor-default">
<div className="flex items-center gap-[1rem]">
<iconify-icon className="text-[#f0edf8]" icon="solar:pills-linear" width="1.5rem"></iconify-icon>
<div>
<div className="font-medium text-[#f0edf8] text-[0.9375rem]">Magnesium Glycinate</div>
<div className="text-[0.75rem] text-[#8b85a0]">Nervous system support</div>
</div>
</div>
<div className="font-mono-data text-[#f0edf8]">320mg</div>
</div>
<div className="flex items-center justify-between p-[1rem] bg-[#f0edf8]/5 rounded-[0.5rem] hover-shake cursor-default">
<div className="flex items-center gap-[1rem]">
<iconify-icon className="text-[#f0edf8]" icon="solar:leaf-linear" width="1.5rem"></iconify-icon>
<div>
<div className="font-medium text-[#f0edf8] text-[0.9375rem]">Black Cohosh</div>
<div className="text-[0.75rem] text-[#8b85a0]">Vasomotor regulation</div>
</div>
</div>
<div className="font-mono-data text-[#f0edf8]">40mg</div>
</div>
<div className="flex items-center justify-between p-[1rem] bg-[#f0edf8]/5 rounded-[0.5rem] hover-shake cursor-default">
<div className="flex items-center gap-[1rem]">
<iconify-icon className="text-[#f0edf8]" icon="solar:sun-linear" width="1.5rem"></iconify-icon>
<div>
<div className="font-medium text-[#f0edf8] text-[0.9375rem]">Vitamin D3</div>
<div className="text-[0.75rem] text-[#8b85a0]">Bone density preservation</div>
</div>
</div>
<div className="font-mono-data text-[#f0edf8]">2000IU</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#8b85a0] thermal-target relative pl-[1rem]">
<svg className="absolute left-0 top-0 h-full w-[0.125rem]" preserveaspectratio="none">
<line className="draw-line" stroke="var(--accent)" strokeWidth="2" style={{strokeDasharray: '100', strokeDashoffset: '100', transition: 'stroke-dashoffset 1s ease-out'}} x1="1" x2="1" y1="0" y2="100%"></line>
</svg>
                        Your Supplements, Decided by Your Data.
                    </h2>
<p className="mt-[2rem] text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-[#8b85a0] leading-[1.6]">
                        Not a generic women's multivitamin. Your ring's sleep + temperature data maps to specific micronutrient gaps each day. Meno-Pro ships exactly what your body needs, when it needs it.
                    </p>
<ul className="mt-[2rem] space-y-[1rem] text-[#f0edf8] font-medium text-[clamp(0.9375rem,1vw,1rem)]">
<li className="flex items-center gap-[0.75rem]"><iconify-icon className="text-[#e8734a]" icon="solar:check-circle-linear"></iconify-icon> Formulated by endocrinologists.</li>
<li className="flex items-center gap-[0.75rem]"><iconify-icon className="text-[#e8734a]" icon="solar:check-circle-linear"></iconify-icon> Adjusted weekly based on biosync.</li>
<li className="flex items-center gap-[0.75rem]"><iconify-icon className="text-[#e8734a]" icon="solar:check-circle-linear"></iconify-icon> Zero subscription lock-in.</li>
</ul>
</div>
</div>
</div>
</section>

<div className="thermal-hr trigger-in-view"></div>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative" id="ai">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4 text-center">
<div className="font-mono-data text-[#e8734a] mb-[1.5rem] flex items-center justify-center gap-[1rem] trigger-in-view opacity-0 translate-y-4 transition-all duration-700">
<div className="h-[0.0625rem] w-[2rem] bg-[#e8734a]"></div> /004/ MENO-GPT <div className="h-[0.0625rem] w-[2rem] bg-[#e8734a]"></div>
</div>
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#8b85a0] thermal-target max-w-[48rem] mx-auto trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
                An Endocrinologist in Your Pocket. Private. Always On.
            </h2>
<p className="mt-[2rem] text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-[#8b85a0] leading-[1.6] max-w-[42rem] mx-auto trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
                Trained on 14,000+ peer-reviewed studies and the latest NAMS, BHRT, and WHI research. Generate a data report your doctor will actually use.
            </p>
<div className="mt-[4rem] max-w-[48rem] mx-auto bento-card p-[clamp(1rem,2vw,2rem)] text-left flex flex-col h-[28rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-300 relative">
<div className="flex-1 overflow-hidden flex flex-col gap-[1.5rem] p-[1rem]">
<div className="self-end max-w-[80%] bg-[#f0edf8]/10 text-[#f0edf8] p-[1rem] rounded-[1rem] rounded-tr-sm text-[0.9375rem]">
                        Is bioidentical HRT safer than synthetic options? My doctor mentioned Premarin.
                    </div>
<div className="self-start max-w-[90%] bg-[#0c0b10] border border-[#f0edf8]/10 text-[#f0edf8] p-[1rem] rounded-[1rem] rounded-tl-sm text-[0.9375rem]">
<div className="flex items-center gap-[0.5rem] mb-[0.5rem] text-[#e8734a] font-syne font-semibold text-[0.8125rem]">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Meno-GPT
                        </div>
                        Based on the 2024 NAMS guidelines, transdermal bioidentical estradiol carries a lower risk profile for VTE (blood clots) compared to oral synthetic estrogens like Premarin. Let's look at how this applies to your recent sleep data...
                        <div className="mt-[1rem] flex gap-[0.5rem]">
<span className="text-[0.6875rem] font-mono-data bg-[#f0edf8]/5 px-[0.5rem] py-[0.25rem] text-[#8b85a0] border border-[#f0edf8]/10">[Ref: NAMS 2024]</span>
<span className="text-[0.6875rem] font-mono-data bg-[#f0edf8]/5 px-[0.5rem] py-[0.25rem] text-[#8b85a0] border border-[#f0edf8]/10">[Ref: WHI Follow-up]</span>
</div>
</div>
</div>
<div className="mt-auto pt-[1rem] border-t border-[#f0edf8]/10">
<div className="flex items-center gap-[1rem] bg-[#0c0b10] rounded-full p-[0.5rem] pl-[1.5rem] border border-[#f0edf8]/20 focus-within:border-[#e8734a] transition-colors">
<input className="bg-transparent border-none outline-none flex-1 text-[#f0edf8] text-[0.9375rem] placeholder-[#8b85a0]" disabled="" placeholder="Ask MenoGPT..." type="text"/>
<button className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#e8734a] text-[#0c0b10] flex items-center justify-center hover:bg-[#f5c97a] transition-colors">
<iconify-icon icon="solar:arrow-up-linear" width="1.25rem"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:flex absolute top-1/2 -left-[14rem] -translate-y-1/2 flex-col gap-[1rem]">
<div className="bg-[#161420] border border-[#f0edf8]/10 px-[1rem] py-[0.5rem] rounded-full text-[0.75rem] font-mono-data text-[#8b85a0] flex items-center gap-[0.5rem] shadow-lg"><iconify-icon className="text-[#e8734a]" icon="solar:lock-password-linear"></iconify-icon> HIPAA-Compliant</div>
<div className="bg-[#161420] border border-[#f0edf8]/10 px-[1rem] py-[0.5rem] rounded-full text-[0.75rem] font-mono-data text-[#8b85a0] flex items-center gap-[0.5rem] shadow-lg"><iconify-icon className="text-[#e8734a]" icon="solar:shield-warning-linear"></iconify-icon> Zero data sold</div>
</div>
<div className="hidden lg:flex absolute top-1/2 -right-[14rem] -translate-y-1/2 flex-col gap-[1rem]">
<div className="bg-[#161420] border border-[#f0edf8]/10 px-[1rem] py-[0.5rem] rounded-full text-[0.75rem] font-mono-data text-[#8b85a0] flex items-center gap-[0.5rem] shadow-lg"><iconify-icon className="text-[#e8734a]" icon="solar:stethoscope-linear"></iconify-icon> NP escalation in &lt;4h</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,6rem)] border-y border-[#f0edf8]/5 bg-[#161420]/30 overflow-hidden" id="proof">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">

<div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] text-center mb-[4rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700">
<div>
<div className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-[#f0edf8] tracking-tight"><span className="count-up" data-target="127000">0</span></div>
<div className="text-[0.875rem] text-[#8b85a0] mt-[0.5rem]">Women tracking daily</div>
</div>
<div>
<div className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-[#e8734a] tracking-tight"><span className="count-up" data-target="91">0</span>%</div>
<div className="text-[0.875rem] text-[#8b85a0] mt-[0.5rem]">Reduced flash severity in 30 days</div>
</div>
<div>
<div className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-[#f0edf8] tracking-tight"><span className="count-up" data-decimals="1" data-target="4.9">0</span>★</div>
<div className="text-[0.875rem] text-[#8b85a0] mt-[0.5rem]">Average app store rating</div>
</div>
</div>

<div className="relative w-[100vw] left-1/2 -translate-x-1/2 mb-[4rem]">

<div className="absolute left-0 top-0 bottom-0 w-[10vw] bg-gradient-to-r from-[#0c0b10] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-[10vw] bg-gradient-to-l from-[#0c0b10] to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-[1.5rem] w-max animate-scroll hover:[animation-play-state:paused] px-[10vw]">

<div className="w-[24rem] bento-card p-[1.5rem] flex-shrink-0">
<div className="text-[#f0edf8] text-[1rem] leading-[1.6] mb-[1.5rem]">"I stopped waking up in a panic. I wake up with a graph. It's the difference between feeling broken and feeling informed."</div>
<div className="flex items-center gap-[1rem]">
<div className="w-[2.5rem] h-[2.5rem] bg-[#f0edf8]/10 rounded-full flex items-center justify-center font-syne text-[#8b85a0]">SM</div>
<div>
<div className="text-[0.875rem] text-[#f0edf8] font-medium">Sarah M., 47</div>
<div className="text-[0.75rem] text-[#8b85a0] font-mono-data mt-[0.125rem]">AUSTIN, TX</div>
</div>
</div>
</div>

<div className="w-[24rem] bento-card p-[1.5rem] flex-shrink-0">
<div className="text-[#f0edf8] text-[1rem] leading-[1.6] mb-[1.5rem]">"My patients bring in MenoMorph reports. I wish every tool worked this way. It gives me the data I need to prescribe accurately."</div>
<div className="flex items-center gap-[1rem]">
<div className="w-[2.5rem] h-[2.5rem] bg-[#f0edf8]/10 rounded-full flex items-center justify-center font-syne text-[#8b85a0]">PN</div>
<div>
<div className="text-[0.875rem] text-[#f0edf8] font-medium">Dr. Priya N.</div>
<div className="text-[0.75rem] text-[#e8734a] font-mono-data mt-[0.125rem]">OB-GYN</div>
</div>
</div>
</div>

<div className="w-[24rem] bento-card p-[1.5rem] flex-shrink-0">
<div className="text-[#f0edf8] text-[1rem] leading-[1.6] mb-[1.5rem]">"The supplement delivery based on my sleep dips completely changed my energy levels. It feels like magic, but it's just math."</div>
<div className="flex items-center gap-[1rem]">
<div className="w-[2.5rem] h-[2.5rem] bg-[#f0edf8]/10 rounded-full flex items-center justify-center font-syne text-[#8b85a0]">JL</div>
<div>
<div className="text-[0.875rem] text-[#f0edf8] font-medium">Jessica L., 51</div>
<div className="text-[0.75rem] text-[#8b85a0] font-mono-data mt-[0.125rem]">SEATTLE, WA</div>
</div>
</div>
</div>

<div className="w-[24rem] bento-card p-[1.5rem] flex-shrink-0">
<div className="text-[#f0edf8] text-[1rem] leading-[1.6] mb-[1.5rem]">"I stopped waking up in a panic. I wake up with a graph. It's the difference between feeling broken and feeling informed."</div>
<div className="flex items-center gap-[1rem]">
<div className="w-[2.5rem] h-[2.5rem] bg-[#f0edf8]/10 rounded-full flex items-center justify-center font-syne text-[#8b85a0]">SM</div>
<div>
<div className="text-[0.875rem] text-[#f0edf8] font-medium">Sarah M., 47</div>
<div className="text-[0.75rem] text-[#8b85a0] font-mono-data mt-[0.125rem]">AUSTIN, TX</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center items-center gap-[clamp(2rem,4vw,4rem)] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-syne font-bold text-[1.25rem] tracking-tight">VOGUE</span>
<span className="font-syne font-bold text-[1.25rem] tracking-tight">Well+Good</span>
<span className="font-syne font-bold text-[1.25rem] tracking-tight">STAT</span>
<span className="font-syne font-bold text-[1.25rem] tracking-tight">Forbes</span>
<span className="font-syne font-bold text-[1.25rem] tracking-tight">NYT Well</span>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative" id="pricing">
<div className="max-w-[clamp(21.25rem,88vw,60rem)] mx-auto px-4">
<div className="text-center mb-[4rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700">
<div className="font-mono-data text-[#e8734a] mb-[1rem]">/006/ PRICING</div>
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#f0edf8]">Pick Your Level of Control.</h2>
<div className="mt-[2rem] flex items-center justify-center gap-[1rem] text-[0.875rem]">
<span className="text-[#8b85a0] font-medium" id="label-monthly">Monthly</span>
<button aria-pressed="false" className="w-[3rem] h-[1.5rem] bg-[#161420] border border-[#f0edf8]/20 rounded-full relative transition-colors duration-300" id="billing-toggle">
<div className="w-[1.125rem] h-[1.125rem] bg-[#e8734a] rounded-full absolute top-[0.125rem] left-[0.1875rem] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
</button>
<span className="text-[#f0edf8] font-medium" id="label-annual">Annual <span className="text-[#e8734a] text-[0.6875rem] font-mono-data ml-[0.25rem]">SAVE 20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-[1.5rem] items-stretch">

<div className="bento-card p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
<h3 className="font-syne font-semibold text-[1.5rem] mb-[0.5rem]">Hardware</h3>
<div className="text-[0.875rem] text-[#8b85a0] mb-[2rem]">The essential sensor layer.</div>
<div className="font-syne font-bold text-[3rem] text-[#f0edf8] mb-[2rem] leading-none">$149 <span className="text-[1rem] font-inter text-[#8b85a0] font-normal">one-time</span></div>
<ul className="space-y-[1rem] mb-[3rem] flex-1 text-[0.9375rem]">
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#f0edf8] mt-[0.25rem]" icon="solar:check-circle-linear"></iconify-icon> <span className="text-[#8b85a0]">Aura Ring Band</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#f0edf8] mt-[0.25rem]" icon="solar:check-circle-linear"></iconify-icon> <span className="text-[#8b85a0]">Thermo-Sync real-time alerts</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#f0edf8] mt-[0.25rem]" icon="solar:check-circle-linear"></iconify-icon> <span className="text-[#8b85a0]">Basic app tracking</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#f0edf8] mt-[0.25rem]" icon="solar:check-circle-linear"></iconify-icon> <span className="text-[#8b85a0]">Free shipping</span></li>
</ul>
<button className="w-full btn-ghost font-syne font-semibold text-[1rem] py-[1rem] clip-para">Get the Ring</button>
</div>

<div className="bento-card p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col border-[#e8734a]/40 relative trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="absolute -top-[0.75rem] left-1/2 -translate-x-1/2 bg-[#e8734a] text-[#0c0b10] font-mono-data text-[0.6875rem] px-[1rem] py-[0.25rem] rounded-full font-bold">MOST POPULAR</div>
<h3 className="font-syne font-semibold text-[1.5rem] mb-[0.5rem] text-[#e8734a]">Meno-Pro</h3>
<div className="text-[0.875rem] text-[#8b85a0] mb-[2rem]">The complete data &amp; clinical ecosystem.</div>
<div className="font-syne font-bold text-[3rem] text-[#f0edf8] mb-[2rem] leading-none flex items-baseline">
                        $<span id="price-pro">15</span> <span className="text-[1rem] font-inter text-[#8b85a0] font-normal ml-[0.5rem]">/mo</span>
<span className="text-[0.75rem] font-inter text-[#8b85a0] ml-auto">+ $149 Ring</span>
</div>
<ul className="space-y-[1rem] mb-[3rem] flex-1 text-[0.9375rem]">
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#e8734a] mt-[0.25rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="text-[#f0edf8]">Everything in Hardware</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#e8734a] mt-[0.25rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="text-[#f0edf8]">Personalized supplement delivery</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#e8734a] mt-[0.25rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="text-[#f0edf8]">24/7 Nurse Practitioner access</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#e8734a] mt-[0.25rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="text-[#f0edf8]">Meno-GPT unlimited queries</span></li>
<li className="flex items-start gap-[0.75rem]"><iconify-icon className="text-[#e8734a] mt-[0.25rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="text-[#f0edf8]">Monthly doctor-ready PDF</span></li>
</ul>
<button className="w-full bg-[#e8734a] text-[#0c0b10] font-syne font-semibold text-[1rem] py-[1rem] clip-para hover:bg-[#f5c97a] transition-colors">Start Meno-Pro</button>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,8.75rem)] relative border-t border-[#f0edf8]/5">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">
<div className="grid lg:grid-cols-12 gap-[clamp(3rem,6vw,5rem)] items-start">
<div className="lg:col-span-5 trigger-in-view opacity-0 translate-y-8 transition-all duration-700">
<div className="font-mono-data text-[#e8734a] mb-[1rem]">/007/ OBJECTIONS</div>
<h2 className="font-syne font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#f0edf8]">You Have Questions. We Have Data.</h2>
</div>
<div className="lg:col-span-7 space-y-[1rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
<details className="group bg-[#161420] border border-[#f0edf8]/10 rounded-[1rem] overflow-hidden" open="">
<summary className="flex justify-between items-center p-[1.5rem] cursor-pointer font-syne font-semibold text-[1.125rem] text-[#f0edf8]">
                            Is it medically validated?
                            <iconify-icon className="text-[#e8734a] group-open:hidden" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-[#e8734a] hidden group-open:block" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="px-[1.5rem] pb-[1.5rem] text-[#8b85a0] text-[0.9375rem] leading-[1.6]">
                            Sensor accuracy independently verified at 0.1°C resolution. Clinical study analyzing efficacy in vasomotor symptom prediction published Q1 2025.
                        </div>
</details>
<details className="group bg-[#161420] border border-[#f0edf8]/10 rounded-[1rem] overflow-hidden">
<summary className="flex justify-between items-center p-[1.5rem] cursor-pointer font-syne font-semibold text-[1.125rem] text-[#f0edf8]">
                            What if HRT is right for me?
                            <iconify-icon className="text-[#e8734a] group-open:hidden" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-[#e8734a] hidden group-open:block" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="px-[1.5rem] pb-[1.5rem] text-[#8b85a0] text-[0.9375rem] leading-[1.6]">
                            Meno-GPT helps you prepare that exact conversation. We support every treatment path. Our data often helps physicians titrate HRT doses more accurately.
                        </div>
</details>
<details className="group bg-[#161420] border border-[#f0edf8]/10 rounded-[1rem] overflow-hidden">
<summary className="flex justify-between items-center p-[1.5rem] cursor-pointer font-syne font-semibold text-[1.125rem] text-[#f0edf8]">
                            I already have an Apple Watch.
                            <iconify-icon className="text-[#e8734a] group-open:hidden" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-[#e8734a] hidden group-open:block" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="px-[1.5rem] pb-[1.5rem] text-[#8b85a0] text-[0.9375rem] leading-[1.6]">
                            Apple Watch measures heart rate and retrospective nightly temperature averages. We measure continuous thermoregulation at the hormonal trigger layer in real-time. They tell you how you slept; we tell you when a flash is coming.
                        </div>
</details>
<details className="group bg-[#161420] border border-[#f0edf8]/10 rounded-[1rem] overflow-hidden">
<summary className="flex justify-between items-center p-[1.5rem] cursor-pointer font-syne font-semibold text-[1.125rem] text-[#f0edf8]">
                            What about my privacy?
                            <iconify-icon className="text-[#e8734a] group-open:hidden" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-[#e8734a] hidden group-open:block" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="px-[1.5rem] pb-[1.5rem] text-[#8b85a0] text-[0.9375rem] leading-[1.6]">
                            HIPAA-compliant, SOC 2 Type II certified. Your data is encrypted end-to-end and never sold to third parties. Ever.
                        </div>
</details>
<details className="group bg-[#161420] border border-[#f0edf8]/10 rounded-[1rem] overflow-hidden">
<summary className="flex justify-between items-center p-[1.5rem] cursor-pointer font-syne font-semibold text-[1.125rem] text-[#f0edf8]">
                            What if it doesn't work?
                            <iconify-icon className="text-[#e8734a] group-open:hidden" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-[#e8734a] hidden group-open:block" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="px-[1.5rem] pb-[1.5rem] text-[#8b85a0] text-[0.9375rem] leading-[1.6]">
                            30-day full refund. No questions asked, no return shipping fee. We want you to feel the difference yourself.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,115,74,0.1)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-[clamp(21.25rem,88vw,48rem)] mx-auto px-4 text-center relative z-10">
<div className="inline-flex items-center gap-[0.5rem] bg-[#e8734a]/10 border border-[#e8734a]/30 rounded-full px-[1rem] py-[0.375rem] mb-[2rem] trigger-in-view opacity-0 translate-y-4 transition-all duration-700">
<div className="w-[0.375rem] h-[0.375rem] bg-[#e8734a] rounded-full live-dot"></div>
<span className="font-mono-data tracking-[0.05em] text-[#e8734a] uppercase">LIMITED: First 500 Meno-Pro Members Lock $12/mo Forever</span>
</div>
<h2 className="font-syne font-bold text-[clamp(3rem,5vw,4.5rem)] leading-[1.05] text-[#f0edf8] mb-[1.5rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-100">
                Don't Just Survive the Change.
            </h2>
<p className="text-[clamp(1.125rem,1.5vw,1.375rem)] text-[#8b85a0] mb-[3rem] trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-200">
                Join 127,000 women who stopped guessing and started knowing.
            </p>
<div className="trigger-in-view opacity-0 translate-y-8 transition-all duration-700 delay-300">
<button className="bg-[#e8734a] text-[#0c0b10] font-syne font-bold text-[clamp(1.125rem,1.5vw,1.25rem)] px-[3rem] py-[1.25rem] clip-para hover:bg-[#f5c97a] hover:scale-105 transition-all duration-300 shadow-[0_0_2rem_rgba(232,115,74,0.3)]">
                    Get Your Aura Ring
                </button>
</div>
<div className="mt-[2rem] flex flex-wrap justify-center gap-[1.5rem] text-[#8b85a0] text-[0.75rem] trigger-in-view opacity-0 transition-all duration-700 delay-500">
<span>Free shipping</span> • <span>30-day guarantee</span> • <span>Ships in 48h</span> • <span>HIPAA-compliant</span>
</div>
</div>
</section>

<footer className="border-t border-[#f0edf8]/10 bg-[#0c0b10] pt-[clamp(4rem,8vw,6rem)] pb-[2rem]">
<div className="max-w-[clamp(21.25rem,88vw,77.5rem)] mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] mb-[4rem]">

<div className="md:col-span-1">
<a className="flex items-center gap-[0.75rem] mb-[1rem]" href="#">
<div className="relative w-[1.5rem] h-[1.5rem]">
<svg className="w-full h-full text-[#f0edf8]" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="60 10" strokeWidth="2.5"></circle>
<line className="text-[#e8734a]" stroke="currentColor" strokeWidth="2.5" x1="22" x2="26" y1="12" y2="12"></line>
</svg>
</div>
<span className="font-syne font-bold text-[1.125rem] tracking-[-0.02em] text-[#f0edf8]">MenoMorph</span>
</a>
<p className="text-[0.875rem] text-[#8b85a0] mb-[1.5rem]">Master the data behind the change.</p>
<div className="flex gap-[1rem] text-[#8b85a0]">
<a className="hover:text-[#e8734a] transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="1.25rem"></iconify-icon></a>
<a className="hover:text-[#e8734a] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="1.25rem"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-syne font-semibold text-[#f0edf8] mb-[1rem]">Product</h4>
<ul className="space-y-[0.75rem] text-[0.875rem] text-[#8b85a0]">
<li><a className="hover:text-[#f0edf8] transition-colors" href="#thermo">Thermo-Sync</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#nutrition">Nutrition</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#ai">Meno-GPT</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>

<div>
<h4 className="font-syne font-semibold text-[#f0edf8] mb-[1rem]">Company</h4>
<ul className="space-y-[0.75rem] text-[0.875rem] text-[#8b85a0]">
<li><a className="hover:text-[#f0edf8] transition-colors" href="#">Research</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#">Press</a></li>
<li><a className="hover:text-[#f0edf8] transition-colors" href="#">HIPAA Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-syne font-semibold text-[#f0edf8] mb-[1rem]">Newsletter</h4>
<p className="text-[0.875rem] text-[#8b85a0] mb-[1rem]">Weekly insights on hormones, data, and your body.</p>
<form className="flex" onsubmit="event.preventDefault();">
<input className="bg-[#161420] border border-[#f0edf8]/10 text-[#f0edf8] text-[0.875rem] px-[1rem] py-[0.5rem] outline-none focus:border-[#e8734a] w-full" placeholder="Email address" required="" type="email"/>
<button className="bg-[#e8734a] text-[#0c0b10] px-[1rem] flex items-center justify-center clip-para -ml-[0.5rem] hover:bg-[#f5c97a] transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="pt-[2rem] border-t border-[#f0edf8]/10 flex flex-col md:flex-row justify-between items-center gap-[1rem] text-[0.75rem] text-[#8b85a0]">
<div>© 2025 MenoMorph Inc. Built by women, for the transition.</div>
<div className="flex gap-[1rem] font-mono-data">
<span className="px-[0.5rem] py-[0.125rem] bg-[#161420] rounded-sm">SOC 2 TYPE II</span>
<span className="px-[0.5rem] py-[0.125rem] bg-[#161420] rounded-sm">HIPAA COMPLIANT</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
