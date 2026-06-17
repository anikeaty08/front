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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // 1. INITIALIZE LENIS (Optimized)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false, // Better performance on touch devices
            touchMultiplier: isMobile ? 1.5 : 2,
        });

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf);

        // 2. REGISTER PLUGINS
        gsap.registerPlugin(ScrollTrigger);

        // 3. MAIN ANIMATION INITIALIZATION
        function initScrollAnimations() {
            // Hero Animations
            const headings = document.querySelectorAll('.mask-text span');
            headings.forEach((h, i) => {
                gsap.to(h, { y: 0, duration: 1.2, ease: "power3.out", delay: i * 0.1 });
            });
            gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
            gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });

            // Portal Pinning
            const tlPortal = gsap.timeline({
                scrollTrigger: {
                    trigger: "#portal-container",
                    start: "top top",
                    end: "+=100%", 
                    scrub: true,
                    pin: true,
                }
            });
            tlPortal.to("#portal-image", { width: "100%", height: "100%", ease: "none" });

            // Horizontal Scroll
            const horizontalSection = document.getElementById('work');
            const horizontalTrack = document.getElementById('horizontal-track');
            
            // Function to recalculate scroll width accurately
            let getScrollAmount = () => horizontalTrack.scrollWidth - window.innerWidth;

            gsap.to(horizontalTrack, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true, 
                }
            });

            // Testimonial Parallax
            const testimonialSection = document.querySelector('#testimonials');
            const cols = document.querySelectorAll('.testimonial-col');
            if (window.innerWidth > 768) {
                cols.forEach((col) => {
                    const speed = col.dataset.speed;
                    gsap.to(col, {
                        y: () => (speed * 100), 
                        ease: "none",
                        scrollTrigger: {
                            trigger: testimonialSection,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                });
            }
        }

        // 4. WAIT FOR LOAD TO PREVENT LAYOUT SHIFTS
        window.addEventListener("load", () => {
            initCanvas(); 
            animateCanvas();
            initScrollAnimations();
            ScrollTrigger.refresh(); // Important: Recalculate after everything is rendered
        });

        // 5. CURSOR
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');
        const viewTriggers = document.querySelectorAll('.view-trigger');
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            hoverTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });
            viewTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('view-cursor'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('view-cursor'));
            });
        }

        // 6. HERO CANVAS
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, streams = [];

        class Stream {
            constructor(x) {
                this.x = x;
                this.y = Math.random() * height;
                this.speed = Math.random() * 2 + 0.5;
                this.length = Math.random() * 100 + 50;
                this.opacity = Math.random() * 0.3 + 0.05;
            }
            update() {
                this.y -= this.speed;
                if (this.y + this.length < 0) {
                    this.y = height + Math.random() * 100;
                    this.speed = Math.random() * 2 + 0.5;
                }
            }
            draw(ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, height);
                ctx.stroke();
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
                ctx.fillStyle = gradient;
                ctx.fillRect(this.x - 1, this.y, 3, this.length);
            }
        }
        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            streams = [];
            const currentGap = window.innerWidth < 768 ? 60 : 40;
            for (let x = currentGap / 2; x < width; x += currentGap) streams.push(new Stream(x));
        }
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            streams.forEach(s => { s.update(); s.draw(ctx); });
            requestAnimationFrame(animateCanvas);
        }
        window.addEventListener('resize', initCanvas);

        // 7. 3D CARD TILT
        const cards3d = document.querySelectorAll('.card-3d-wrap');
        cards3d.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.querySelector('.card-3d-inner').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.querySelector('.card-3d-inner').style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });

        // 8. MOBILE MENU
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const btn = document.getElementById('mobile-menu-btn');
            const body = document.body;
            const isOpen = menu.style.opacity === '1';
            if (!isOpen) {
                menu.style.transform = 'translateY(0)';
                menu.style.opacity = '1';
                body.classList.add('menu-open');
                btn.innerHTML = '<iconify-icon icon="lucide:x" width="24" height="24"></iconify-icon>';
            } else {
                menu.style.transform = 'translateY(-100%)';
                menu.style.opacity = '0';
                body.classList.remove('menu-open');
                btn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" height="24"></iconify-icon>';
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="aura-background-component absolute inset-0 w-full h-full" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>
</div>
</div>



<div id="cursor" style={{left: '576px', top: '440px'}}></div>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform translate-y-[-100%] opacity-0 flex flex-col justify-center items-center" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<a className="text-2xl font-display font-medium text-white hover:text-neutral-400 transition-colors" href="#services" onclick="toggleMenu()">Capabilities</a>
<a className="text-2xl font-display font-medium text-white hover:text-neutral-400 transition-colors" href="#process" onclick="toggleMenu()">Methodology</a>
<a className="text-2xl font-display font-medium text-white hover:text-neutral-400 transition-colors" href="#work" onclick="toggleMenu()">Selected Works</a>
<a className="mt-8 bg-white text-black px-8 flex items-center justify-center h-[48px] rounded-full text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="#contact" onclick="toggleMenu()">
                Connect
            </a>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6 transition-transform duration-300" id="navbar">
<div className="max-w-[1600px] mx-auto flex items-center justify-between glass rounded-full px-5 py-3 md:px-8 md:py-4">
<a className="flex items-center gap-3 group hover-trigger min-h-[44px]" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<iconify-icon className="group-hover:rotate-90 transition-transform duration-500" height="20" icon="lucide:terminal-square" width="20"></iconify-icon>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">DAVID<span className="font-light text-neutral-500">MORGAN</span></span>
</a>

<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger py-2" href="#services">Capabilities</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger py-2" href="#process">Methodology</a>
<a className="uppercase hover:text-white transition-colors hover-trigger text-xs font-medium text-neutral-400 tracking-widest pt-2 pb-2" href="#work">Selected Works</a>
</div>
<div className="flex items-center gap-4">

<button aria-label="Toggle Menu" className="md:hidden w-10 h-10 flex items-center justify-center text-white min-h-[44px]" id="mobile-menu-btn" onclick="toggleMenu()">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>

<a className="hidden md:flex bg-white text-black px-6 h-[44px] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors hover-trigger items-center justify-center" href="#contact">
                    Connect
                </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden z-10 px-6 relative items-center justify-center pt-24 md:pt-0">

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" height="865" id="hero-canvas" width="1248"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-[1400px] w-full mx-auto relative">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-12 hover-trigger opacity-0 animate-fade-in" style={{opacity: '1'}}>
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">David Henry Morgan</span>
</div>
<h1 className="font-display text-[clamp(2.5rem,9vw,7rem)] font-medium tracking-tighter text-white leading-[0.95] mb-8 md:mb-12 mix-blend-difference w-full break-words">
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>ENGINEERING</span></span>
<span className="mask-text"><span className="text-neutral-500" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>THE DIGITAL</span></span>
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>FUTURE</span></span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8 md:mt-12 border-t border-white/10 pt-8 opacity-0 animate-fade-up" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<p className="text-neutral-400 text-sm max-w-xs text-left">
                    I architect and build business-first digital ecosystems. No platform lock-in. Just scalable, custom solutions engineered for your specific growth.
                </p>
<div className="flex gap-12 mt-8 md:mt-0">
<div className="text-left">
<div className="text-2xl font-display font-bold">Full Stack</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Architecture</div>
</div>
<div className="text-left">
<div className="text-2xl font-display font-bold">100%</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Custom Built</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative w-full" id="portal-wrapper">
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: 'auto', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '1730px', padding: '0px 0px 865px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '865px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '865px', padding: '0px'}}><section className="h-screen w-full overflow-hidden flex items-center justify-center bg-[#030303]" id="portal-container" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1233px', width: '1233px', maxHeight: '865px', height: '865px', padding: '0px', transform: 'translate(0px, 2595px)'}}>
<div className="relative w-full h-full flex items-center justify-center">
<div className="w-[80%] md:w-[30%] h-[30%] md:h-[40%] overflow-hidden relative" id="portal-image" style={{height: '100%', width: '100%'}}>
<img alt="Digital Infrastructure Portal - David Morgan Digital Architect" className="absolute inset-0 w-full h-full object-cover grayscale-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40">
<h2 className="text-3xl md:text-4xl lg:text-7xl font-display font-bold text-white tracking-tighter mix-blend-overlay text-center">ENTER THE SYSTEM</h2>
</div>
</div>
</div>
</section></div></div></div>
</div>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '1467px', padding: '0px 0px 602px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '1467px', padding: '0px 0px 602px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1233px', height: '1467px', padding: '0px 0px 602px'}}><section className="relative bg-[#030303] overflow-hidden" id="work" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1233px', width: '1233px', maxHeight: '865px', height: '865px', padding: '0px', transform: 'translate(0px, 1806px)'}}>
<div className="h-screen flex flex-col justify-center relative">
<div className="absolute top-0 left-0 right-0 py-12 px-6 border-b border-white/10 flex justify-between items-end z-20 bg-[#030303]/90 backdrop-blur-sm">
<h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">Selected Works</h3>
<span className="text-xs text-white">SCROLL DOWN ↓</span>
</div>
<div className="flex flex-nowrap md:pl-24 md:gap-32 w-max h-[70vh] pl-6 gap-x-12 gap-y-12 items-center" id="horizontal-track" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-602px, 0px)'}}>

<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="Legacy System Overhaul Case Study - David Morgan Digital Architect" className="w-full h-full object-cover grayscale-img" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] text-white uppercase tracking-widest">System Architecture</span>
</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-2xl md:text-3xl font-display font-medium text-white">Legacy System Overhaul</h4>
<p className="text-neutral-500 text-sm mt-1">Modernizing infrastructure for a logistics firm.</p>
</div>
<div className="text-white text-lg font-display">01</div>
</div>
</div>
<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="Intelligent Workflows AI - David Morgan Digital Architect" className="w-full h-full object-cover grayscale-img" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] text-white uppercase tracking-widest">AI &amp; Automation</span>
</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-2xl md:text-3xl font-display font-medium text-white">Intelligent Workflows</h4>
<p className="text-neutral-500 text-sm mt-1">Automated service layer with 94% resolution rate.</p>
</div>
<div className="text-white text-lg font-display">02</div>
</div>
</div>
<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger pr-24">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="SaaS Analytics Platform - David Morgan Digital Architect" className="w-full h-full object-cover grayscale-img" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] text-white uppercase tracking-widest">B2B SaaS</span>
</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-2xl md:text-3xl font-display font-medium text-white">Custom Analytics Platform</h4>
<p className="text-neutral-500 text-sm mt-1">Scalable multi-tenant architecture for financial data.</p>
</div>
<div className="text-white text-lg font-display">03</div>
</div>
</div>
</div>
</div>
</section></div></div></div>

<section className="md:py-40 z-10 bg-[#050509] border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
<div className="static lg:sticky top-32 h-fit">
<h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 md:mb-8">My Capabilities <br/>&amp; Stack</h2>
<p className="text-neutral-400 text-base md:text-lg max-w-md mb-8 md:mb-12">
                        I provide versatile, code-first solutions. Whether you need to migrate from a restrictive platform, integrate complex APIs, or build a custom product from scratch.
                    </p>
<ul className="space-y-6">
<li className="group flex flex-col gap-2">
<div className="flex items-center gap-4 text-white">
<span className="h-[1px] w-8 bg-white transition-all group-hover:w-12"></span>
<span className="text-lg">Custom Web &amp; App Development</span>
</div>
<p className="pl-12 text-xs text-neutral-500 max-w-xs">Full-stack engineering tailored to your business logic, not template constraints.</p>
</li>
<li className="group flex flex-col gap-2">
<div className="flex items-center gap-4 text-neutral-400 group-hover:text-white transition-colors">
<span className="h-[1px] w-8 bg-neutral-800 transition-all group-hover:w-12 group-hover:bg-white"></span>
<span className="text-lg">Platform Integration &amp; Migration</span>
</div>
<p className="pl-12 text-xs text-neutral-500 max-w-xs hidden group-hover:block animate-fade-in" style={{opacity: '1'}}>Seamless data transition and API connecting for unified operations.</p>
</li>
<li className="group flex flex-col gap-2">
<div className="flex items-center gap-4 text-neutral-400 group-hover:text-white transition-colors">
<span className="h-[1px] w-8 bg-neutral-800 transition-all group-hover:w-12 group-hover:bg-white"></span>
<span className="text-lg">AI &amp; Intelligent Automation</span>
</div>
<p className="pl-12 text-xs text-neutral-500 max-w-xs hidden group-hover:block animate-fade-in" style={{opacity: '1'}}>Deploying LLMs and automated workflows to reduce operational overhead.</p>
</li>
</ul>
</div>
<div className="flex flex-col gap-x-12 gap-y-12">

<div className="card-3d-wrap group md:h-[450px] cursor-pointer hover-trigger w-full h-[400px]">
<div className="card-3d-inner relative w-full h-full bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]">

<div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-5" style={{backgroundImage: 'url(\'data:image/svg+xml', animation: 'noise-drift 2s steps(10) infinite'}}></div>

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 40px'}}></div>
<div className="card-element relative w-full h-56 md:h-64 mb-6 perspective-1000 z-10">
<div className="absolute top-10 left-10 w-[80%] h-40 border border-white/5 bg-white/[0.01] rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
<div className="absolute inset-0 w-[90%] h-48 md:h-52 bg-[#030303] border border-white/10 rounded-xl mx-auto shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
<div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="p-4 font-mono text-[10px] text-neutral-500 space-y-2">
<div className="flex gap-2"><span className="text-purple-400">class</span> <span className="text-yellow-300">Solution</span> <span className="text-white">extends</span> <span className="text-blue-400">Enterprise</span> {</div>
<div className="pl-4 flex gap-2"><span className="text-purple-400">constructor</span>() {</div>
<div className="pl-8 text-green-400">this.scalable = true;</div>
<div className="pl-8 text-green-400">this.secure = true;</div>
<div className="pl-8 bg-white/10 h-3 rounded w-0 animate-type"></div>
<div className="pl-4">}</div>
<div>}</div>
</div>
</div>
<div className="absolute -bottom-2 -right-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
                                    Full Stack
                                </div>
</div>
<div className="card-element relative z-10">
<h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white mb-2">Custom Engineering</h3>
<p className="text-neutral-500 text-sm md:text-base max-w-sm font-light leading-relaxed">Frontend, Backend, Database. I build exactly what your business needs without bloat.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group h-[400px] md:h-[450px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-5" style={{backgroundImage: 'url(\'data:image/svg+xml', animation: 'noise-drift 2s steps(10) infinite'}}></div>
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="card-element relative w-full h-56 md:h-64 border border-white/10 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center z-10 transition-colors duration-500 group-hover:border-white/20">
<div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 animate-scan"></div>
<div className="absolute w-24 h-24 border border-white/10 rounded-full flex items-center justify-center z-10 bg-black/40 backdrop-blur-md">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" height="32" icon="lucide:database" width="32"></iconify-icon>
</div>
<div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
<div className="absolute top-[20%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute top-[80%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="absolute bottom-3 left-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-green-400 transition-colors duration-300">
                                    Migrating Data... 98%
                                </div>
</div>
<div className="card-element relative z-10">
<h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white mb-2">Integration &amp; AI</h3>
<p className="text-neutral-500 text-sm md:text-base max-w-sm font-light leading-relaxed">Connecting disparate systems and implementing intelligent automation layers.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-black relative border-t border-white/5" id="process">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">How I Build</h2>
<p className="text-neutral-500 uppercase tracking-widest text-xs">Strategic Execution, Every Time</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group border-t border-white/20 pt-8 hover:border-white transition-colors duration-500">
<span className="block text-4xl font-display font-bold text-white/20 mb-6 group-hover:text-white transition-colors">01</span>
<h3 className="text-xl text-white font-medium mb-3">Discovery</h3>
<p className="text-sm text-neutral-500 leading-relaxed">I audit your existing stack and define clear business requirements before writing a single line of code.</p>
</div>

<div className="group border-t border-white/20 pt-8 hover:border-white transition-colors duration-500">
<span className="block text-4xl font-display font-bold text-white/20 mb-6 group-hover:text-white transition-colors">02</span>
<h3 className="text-xl text-white font-medium mb-3">Architecture</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Designing a technology-agnostic blueprint that ensures scalability, security, and future flexibility.</p>
</div>

<div className="group border-t border-white/20 pt-8 hover:border-white transition-colors duration-500">
<span className="block text-4xl font-display font-bold text-white/20 mb-6 group-hover:text-white transition-colors">03</span>
<h3 className="text-xl text-white font-medium mb-3">Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Full-stack implementation using the best tools for the job. No vendor lock-in, just clean, efficient code.</p>
</div>

<div className="group border-t border-white/20 pt-8 hover:border-white transition-colors duration-500">
<span className="block text-4xl font-display font-bold text-white/20 mb-6 group-hover:text-white transition-colors">04</span>
<h3 className="text-xl text-white font-medium mb-3">Deployment</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Rigorous testing, seamless migration, and ongoing optimization to ensure business impact.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-black relative border-t border-white/10 overflow-hidden" id="testimonials">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">Client Trust</h2>
<p className="text-neutral-500 uppercase tracking-widest text-xs">Delivering Business Outcomes</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px] overflow-hidden relative fade-mask">
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

<div className="flex flex-col gap-8 testimonial-col" data-speed="0.5" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 49.9997px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"David didn't just build an app; he solved a core operational bottleneck that was costing us six figures annually."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">JD</div>
<div>
<div className="text-white text-sm font-medium">James Dalton</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CEO, LogisticsCore</div>
</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"The transition from our legacy low-code tool to a custom React stack was flawless. The performance gains are incredible."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">SM</div>
<div>
<div className="text-white text-sm font-medium">Sarah Miller</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CTO, Fintech Start</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col gap-8 testimonial-col -mt-24" data-speed="-0.8" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, -79.9996px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Finally, a developer who speaks business. David understood our market constraints and delivered accordingly."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">MR</div>
<div>
<div className="text-white text-sm font-medium">Michael Ross</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Director, Retail Giant</div>
</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Our integration requirements were a mess. David architected a clean middleware solution that scaled perfectly."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">EK</div>
<div>
<div className="text-white text-sm font-medium">Elena K.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Product Lead, SaaS Co</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col gap-8 testimonial-col" data-speed="0.6" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 59.9997px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Strategic partner is the right term. He helps us make technology decisions that drive growth, not just write code."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">AT</div>
<div>
<div className="text-white text-sm font-medium">Alan Turing</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Founder, AI Labs</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#030303] relative border-t border-white/5" id="contact">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Start a Project</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
                        Ready to upgrade your infrastructure? I am currently accepting new enterprise contracts for Q4.
                    </p>
<div className="space-y-8">
<div className="">
<div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</div>
<a className="hover:text-neutral-400 transition-colors text-2xl font-medium text-white font-display" href="/mailto:idavidhenrymorgan@gmail.com">idavidhenrymorgan@gmail.com</a>
</div>
<div className="">
<div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Location</div>
<div className="text-white">Melbourne Beach, FL (Remote Friendly)</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 overflow-hidden">

<form className="space-y-6 relative z-10" id="contact-form" onsubmit="event.preventDefault(); document.getElementById('success-message').classList.remove('hidden'); document.getElementById('contact-form').classList.add('opacity-0', 'pointer-events-none');">
<div className="space-y-4">
<div>
<label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold" htmlFor="name">Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold" htmlFor="message">Message</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 resize-none" id="message" name="message" placeholder="Tell me about your project..." required="" rows="4"></textarea>
</div>
</div>
<button className="w-full bg-white text-black font-bold uppercase tracking-wider text-xs py-4 rounded-lg hover:bg-neutral-200 transition-colors" type="submit">
                                Send Signal
                            </button>
</form>

<div className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050505] border border-green-500/20 rounded-2xl" id="success-message">

<div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 to-transparent pointer-events-none"></div>
<div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 animate-pulse">
<iconify-icon className="text-green-400" height="32" icon="lucide:check" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Signal Received</h3>
<p className="text-green-400/80 text-sm">I will be in touch shortly.</p>
</div>
</div>

<div className="absolute -top-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-10 bg-[#050505]"></div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
<div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<iconify-icon height="20" icon="lucide:terminal-square" width="20"></iconify-icon>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">DAVID<span className="font-light text-neutral-500">MORGAN</span></span>
</a>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                        David Henry Morgan. Engineering digital reality for enterprise clients worldwide.
                    </p>
</div>
<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Capabilities</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Custom Development</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">AI Automation</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">About</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#work">Selected Works</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="mailto:davidhenrymorgan@gmail.com">Email Me</a></li>
</ul>
</div>
</div>
<div className="lg:col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors block min-h-[44px] md:min-h-0 flex items-center" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2026 Henry LLC. All Rights Reserved.
                </div>
</div>
</div>
</footer>

<aside className="fixed top-0 right-0 h-screen w-[90%] md:w-[600px] bg-neutral-900 border-l border-white/10 z-[60] transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl flex flex-col" id="project-drawer">

<div className="flex justify-end p-6 md:p-8">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-white" id="drawer-close-btn">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="px-6 md:px-10 pb-10 overflow-y-auto h-full">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono mb-4 block">Case Study 01</span>
<h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 leading-tight">Legacy System Overhaul</h2>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                This is a placeholder description for the project detail. It would typically contain specific technologies used, the challenge faced, and the solution implemented. The drawer allows users to dive deeper into the work without leaving the main context of the page.
            </p>

<div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Timeline</div>
<div className="text-white text-sm">4 Months</div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Role</div>
<div className="text-white text-sm">Lead Architect</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
