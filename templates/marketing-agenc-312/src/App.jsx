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
  


                // Simple entry animation script
                document.addEventListener("DOMContentLoaded", () => {
                    setTimeout(() => {
                        const texts = document.querySelectorAll('[data-hero-text]');
                        texts.forEach((el, i) => {
                            el.style.transition = `all 1s cubic-bezier(0.2, 1, 0.3, 1) ${i * 0.1}s`;
                            el.classList.remove('translate-y-full', 'opacity-0');
                        });
                        
                        const badge = document.getElementById('anim-badge');
                        badge.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1) 0.5s';
                        badge.classList.remove('translate-y-4', 'opacity-0');

                        const desc = document.getElementById('anim-desc');
                        desc.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1) 0.6s';
                        desc.classList.remove('translate-y-4', 'opacity-0');

                        const btns = document.getElementById('anim-btns');
                        btns.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1) 0.7s';
                        btns.classList.remove('translate-y-4', 'opacity-0');

                        const visual = document.getElementById('hero-visual-container');
                        if(visual) {
                             visual.classList.remove('opacity-0', 'translate-x-20');
                        }
                    }, 100);
                });
            


        function openPackageModal(card) {
            if (window.innerWidth > 768) return;
            const modal = document.getElementById('packageModal');
            const modalContent = document.getElementById('modalContent');
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = card.innerHTML;
            modal.classList.remove('hidden');
            setTimeout(() => { modalContent.classList.add('modal-slide-in'); modalContent.classList.remove('translate-x-full'); }, 10);
            document.body.style.overflow = 'hidden';
        }
        function closePackageModal() {
            const modal = document.getElementById('packageModal');
            const modalContent = document.getElementById('modalContent');
            modalContent.classList.remove('modal-slide-in');
            modalContent.classList.add('modal-slide-out');
            setTimeout(() => { modal.classList.add('hidden'); modalContent.classList.remove('modal-slide-out'); modalContent.classList.add('translate-x-full'); document.body.style.overflow = ''; }, 300);
        }
        document.getElementById('packageModal').addEventListener('click', function(e) { if (e.target === this) closePackageModal(); });
    


      gsap.registerPlugin(ScrollTrigger);

      // Lenis smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Marquee
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      // Pain Points Reveal
      gsap.from("#pain .grid > div", {
          scrollTrigger: { trigger: "#pain", start: "top 70%" },
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
      });

      // Stats Count
      gsap.from(".text-5xl.font-bold", {
          scrollTrigger: { trigger: ".text-5xl.font-bold", start: "top 80%" },
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
      });

      // Horizontal Scroll for Packages
      function setupHorizontal() {
        const wrapper = document.querySelector(".horizontal-wrapper");
        const container = document.querySelector("#packages");
        if (!wrapper || !container) return;
        
        // Calculate scroll amount differently for mobile
        const isMobile = window.innerWidth < 768;
        
        if(!isMobile) {
            ScrollTrigger.matchMedia({
            "(min-width: 769px)": function () {
                const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);
                gsap.to(wrapper, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
                    invalidateOnRefresh: true,
                },
                });
            },
            });
        }
      }
      setupHorizontal();

      // Contributors/Cases Hover Logic
      const contribRows = document.querySelectorAll(".contributor-row");
      const contribImg = document.querySelector("#contrib-img");

      if (contribImg) {
        contribRows.forEach((row) => {
          row.addEventListener("mouseenter", () => {
            const src = row.getAttribute("data-img");
            gsap.to(contribImg, {
              opacity: 0.2,
              duration: 0.2,
              onComplete: () => {
                contribImg.src = src;
                gsap.to(contribImg, { opacity: 0.6, duration: 0.3, scale: 1.05 });
              },
            });
          });
          row.addEventListener("mouseleave", () => {
            gsap.to(contribImg, { scale: 1, duration: 0.5 });
          });
        });
      }

      // Process Cards Stacking
      gsap.utils.toArray(".process-card").forEach((card) => {
        gsap.to(card, {
          scale: 0.95,
          filter: "brightness(0.55)",
          scrollTrigger: {
            trigger: card,
            start: "top 150px",
            end: "max",
            scrub: true,
          },
        });
      });

      // Accordion
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          const content = item.querySelector(".accordion-content");

          document.querySelectorAll(".accordion-item").forEach((other) => {
            other.classList.remove("active");
            gsap.to(other.querySelector(".accordion-content"), {
              height: 0,
              opacity: 0,
              duration: 0.35,
            });
          });

          if (!isActive) {
            item.classList.add("active");
            gsap.to(content, { height: "auto", opacity: 1, duration: 0.35 });
          }
        });
      });

      // Menu overlay
      const menuBtn = document.querySelector(".menu-btn");
      const menuOverlay = document.querySelector(".menu-overlay");
      const menuLinks = document.querySelectorAll(".menu-link");
      let isMenuOpen = false;

      if (menuBtn && menuOverlay) {
        menuBtn.addEventListener("click", () => {
          isMenuOpen = !isMenuOpen;

          if (isMenuOpen) {
            menuOverlay.classList.add("active");
            gsap.to(menuOverlay, {
              clipPath: "inset(0 0 0 0)",
              duration: 0.8,
              ease: "power4.inOut",
            });
            lenis.stop();
          } else {
            gsap.to(menuOverlay, {
              clipPath: "inset(0 0 100% 0)",
              duration: 0.8,
              ease: "power4.inOut",
              onComplete: () => menuOverlay.classList.remove("active"),
            });
            lenis.start();
          }
        });

        menuLinks.forEach((link) => {
          link.addEventListener("click", () => {
            isMenuOpen = false;
            gsap.to(menuOverlay, {
              clipPath: "inset(0 0 100% 0)",
              duration: 0.8,
              ease: "power4.inOut",
              onComplete: () => menuOverlay.classList.remove("active"),
            });
            lenis.start();
          });
        });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-[5vw] py-5 flex justify-between items-center glass-nav">
<div className="flex items-center gap-2 z-50">
<div className="w-5 h-5 rounded-sm flex items-center justify-center bg-cyan-500">
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<span className="font-semibold text-sm tracking-tight uppercase font-sans text-white">
          SYDYKOV AGENCY
        </span>
</div>
<div className="flex gap-6 z-50 items-center">
<style>
    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
    @property --gradient-shine { syntax: "<color>"; initial-value: #22d3ee; inherits: false; }
    .shiny-cta-nav { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #22d3ee; position: relative; overflow: hidden; border-radius: 9999px; padding: 0.5rem 1rem; font-size: 0.75rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #0891b2 5%, var(--gradient-shine) 15%, #0891b2 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; font-family: 'Inter', sans-serif; z-index: 0; animation: border-spin-nav 2.5s linear infinite; }
    @keyframes border-spin-nav { to { --gradient-angle: 360deg; } }
    .shiny-cta-nav:active { transform: translateY(1px); }
    .shiny-cta-nav::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; }
    .shiny-cta-nav::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #0891b2, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer-nav 4s linear infinite; }
    .shiny-cta-nav span { position: relative; z-index: 2; display: inline-block; }
    @keyframes shimmer-nav { to { transform: translate(-50%, -50%) rotate(360deg);} }
  </style>
<a className="hidden md:block" href="#cta">
<button className="shiny-cta-nav focus:outline-none">
<span>Забронировать звонок</span>
</button>
</a>
<button className="menu-btn group flex flex-col gap-[5px] w-8 items-end cursor-pointer">
<span className="h-[1.5px] transition-all duration-300 group-hover:w-3/4 bg-neutral-300 w-full"></span>
<span className="w-2/3 h-[1.5px] transition-all duration-300 group-hover:w-full bg-neutral-300"></span>
</button>
</div>
</nav>

<div className="menu-overlay fixed inset-0 z-40 flex flex-col justify-center items-center bg-black" style={{clipPath: 'inset(0px 0px 100%)'}}>
<div className="flex flex-col gap-6 text-center">
<a className="menu-link text-5xl md:text-6xl tracking-tighter transition-colors font-manrope font-medium text-neutral-600 hover:text-cyan-400" href="#packages">
          Цены
        </a>
<a className="menu-link text-5xl md:text-6xl tracking-tighter transition-colors font-manrope font-medium text-neutral-600 hover:text-cyan-400" href="#cases">
          Кейсы
        </a>
<a className="menu-link text-5xl md:text-6xl tracking-tighter transition-colors font-manrope font-medium text-neutral-600 hover:text-cyan-400" href="#process">
          Процесс
        </a>
<a className="menu-link text-5xl md:text-6xl tracking-tighter transition-colors font-manrope font-medium text-neutral-600 hover:text-cyan-400" href="#about">
          О нас
        </a>
</div>
<div className="absolute bottom-10 left-[5vw] right-[5vw] flex justify-between text-xs font-mono uppercase text-neutral-600">
<span className="font-sans">Бишкек, Кыргызстан</span>
<span className="font-sans">+996 (XXX) XX-XX-XX</span>
</div>
</div>

<main className="" id="smooth-wrapper">
<div className="" id="smooth-content">

<section className="relative min-h-screen flex flex-col justify-center px-[5vw] pt-32 pb-20 border-b overflow-hidden border-white/10" id="hero">
<div className="hero-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_60%)] blur-[100px] z-0"></div>

<div className="hero-visual absolute right-[5vw] top-[20%] w-[300px] md:w-[500px] aspect-[4/3] z-0 perspective-midrange hidden lg:block transition-all duration-1000 ease-out" id="hero-visual-container">
<div className="absolute inset-0 border rounded-xl transform rotate-y-[-12deg] rotate-x-[5deg] shadow-2xl overflow-hidden group bg-neutral-900/90 border-white/10">

<div className="h-8 border-b flex items-center px-4 gap-2 border-white/5 bg-white/5">
<div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
<div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>

<div className="p-6 relative h-full">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs text-neutral-500 font-mono mb-1 font-sans">ОБЩИЙ ДОХОД</div>
<div className="text-3xl font-manrope font-medium text-white">$12,450.00</div>
</div>
<div className="px-2 py-1 text-xs rounded font-mono font-sans bg-cyan-500/20 text-cyan-400">+24.5%</div>
</div>

<div className="flex items-end justify-between h-32 gap-2">
<div className="w-full rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-700 delay-100 bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[45%] group-hover:h-[60%] transition-all duration-700 delay-200 bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[35%] group-hover:h-[50%] transition-all duration-700 delay-300 bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[60%] group-hover:h-[75%] transition-all duration-700 delay-150 bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[80%] group-hover:h-[95%] transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] relative bg-cyan-500">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-sans bg-white text-black">ВЫ</div>
</div>
</div>
</div>
</div>
</div>
<div className="z-10 relative max-w-4xl">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border w-fit mb-8 backdrop-blur-md border-white/10 bg-white/5" id="anim-badge" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1) 0.5s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-mono font-sans text-neutral-400">
                  Анализ рынка: Кыргызстан
                </span>
</div>
<h1 className="hero-title relative z-20 flex flex-col text-[clamp(2.5rem,5vw,5rem)] leading-[1.0] font-bold tracking-tight mb-8 text-white">
<div className="overflow-hidden">
<span className="block font-manrope font-medium" data-hero-text="" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1)'}}>
                    Ты теряешь клиентов,
                  </span>
</div>
<div className="overflow-hidden">
<span className="block text-neutral-500 font-manrope font-medium" data-hero-text="" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1) 0.1s'}}>
                    потому что тебя
                   </span>
</div>
<div className="flex items-center gap-4 overflow-hidden">
<span className="block font-manrope font-medium text-white" data-hero-text="" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1) 0.2s'}}>
                    не находят в <span className="font-manrope font-medium text-cyan-500">Google</span>.
                  </span>
</div>
</h1>
<p className="text-lg md:text-xl max-w-xl leading-relaxed border-l-2 pl-6 mb-10 font-sans text-neutral-400 border-cyan-500/50" id="anim-desc" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1) 0.6s'}}>
                Сайт, который приносит реальные заказы за 2 недели.
                Пока твой конкурент зарабатывает через сайт <span className="font-medium font-sans text-white">$5,000 в месяц</span>,
                ты оставляешь эти деньги на столе.
              </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" id="anim-btns" style={{transition: '1s cubic-bezier(0.2, 1, 0.3, 1) 0.7s'}}>
<a className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-300 font-sans text-black bg-cyan-500 hover:bg-cyan-400" href="#cta">
                  ЗАБРОНИРОВАТЬ КОНСУЛЬТАЦИЮ
                </a>
<div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-sans">15 минут</span>
<span className="w-px h-3 mx-1 bg-neutral-800"></span>
<svg className="lucide lucide-video" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
<span className="font-sans">Zoom / Встреча</span>
</div>
</div>
</div>

</section>

<section className="py-6 border-b marquee-container overflow-hidden bg-neutral-900/30 border-white/10">
<div className="marquee-track flex gap-12 whitespace-nowrap" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-38.52%, 0%) translate3d(0px, 0px, 0px)'}}>
<div className="flex gap-12 items-center text-sm font-mono text-neutral-500 uppercase tracking-widest">
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>WEB DEVELOPMENT</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>SEO OPTIMIZATION</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>GOOGLE ADS</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>ANALYTICS</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>DESIGN</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>WEB DEVELOPMENT</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>SEO OPTIMIZATION</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>GOOGLE ADS</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>ANALYTICS</span>
<span className="flex items-center gap-2 font-sans"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>DESIGN</span>
</div>
</div>
</section>

<section className="px-[5vw] py-24 border-b border-white/10" id="pain">
<div className="mb-16">
<span className="font-mono text-xs tracking-widest uppercase mb-4 block font-sans text-cyan-500">
              Реальность рынка
            </span>
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl font-manrope font-medium text-white">
              Узнаете себя? <br/>
<span className="text-neutral-500 font-manrope font-medium">Почему 50% бизнесов в КГ теряют деньги.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border p-8 rounded-xl transition-colors group bg-neutral-900/50 border-white/10 hover:bg-neutral-900" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5">
<svg className="group-hover:text-red-400 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" x2="23" y1="8" y2="13"></line><line x1="23" x2="18" y1="8" y2="13"></line></svg>
</div>
<h3 className="text-xl font-medium mb-4 font-sans text-white">Клиент не находит вас</h3>
<p className="text-sm leading-relaxed font-sans text-neutral-400">
                Почти половина клиентов ищет товары в Google. Они находят вашего конкурента с сайтом, а вас — нет. <br/>
<span className="block mt-2 font-sans text-cyan-400">-1 клиент, -1000$ дохода.</span>
</p>
</div>

<div className="border p-8 rounded-xl transition-colors group bg-neutral-900/50 border-white/10 hover:bg-neutral-900" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5">
<svg className="group-hover:text-yellow-400 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-4 font-sans text-white">Рутина в WhatsApp</h3>
<p className="text-sm leading-relaxed font-sans text-neutral-400">
                "Какая цена?", "Есть доставка?". Вы тратите 3 часа в день на одинаковые ответы вместо того, чтобы заниматься развитием.
              </p>
</div>

<div className="border p-8 rounded-xl transition-colors group bg-neutral-900/50 border-white/10 hover:bg-neutral-900" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5">
<svg className="group-hover:text-white text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M8.5 15.5v.01"></path><path d="M15.5 8.5v.01"></path></svg>
</div>
<h3 className="text-xl font-medium mb-4 font-sans text-white">Имидж "подвала"</h3>
<p className="text-sm leading-relaxed font-sans text-neutral-400">
                  Сайт = доверие. Без него клиент думает: "Может это фирма-однодневка?". Конкурент с сайтом выглядит солиднее и забирает крупный чек.
                </p>
</div>
</div>
</section>

<section className="px-[5vw] py-16 border-b border-white/10 bg-black">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div>
<div className="text-5xl md:text-7xl mb-2 font-manrope font-medium text-white" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>85%</div>
<div className="text-sm text-neutral-500 font-mono uppercase tracking-wider font-sans">Покупателей ищутв Google</div>
</div>
<div className="w-px h-24 hidden md:block bg-neutral-800"></div>
<div>
<div className="text-5xl md:text-7xl mb-2 font-manrope font-medium text-white text-neutral-600" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>50%</div>
<div className="text-sm text-neutral-500 font-mono uppercase tracking-wider font-sans">Бизнесов КГне имеют сайта</div>
</div>
<div className="w-px h-24 hidden md:block bg-neutral-800"></div>
<div>
<div className="text-5xl md:text-7xl mb-2 font-manrope font-medium text-cyan-500" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>+40%</div>
<div className="text-sm text-neutral-500 font-mono uppercase tracking-wider font-sans">Рост продажпосле запуска</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1168px', height: '1290px', padding: '0px 0px 164px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1168px', height: '1290px', padding: '0px 0px 164px'}}><section className="bg-[#080808] py-24 overflow-hidden relative border-b text-white border-white/10" id="packages" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1168px', width: '1168px', maxHeight: '1126px', height: '1126px', padding: '96px 0px', transform: 'translate(0px, 0px)'}}>
<div className="px-[5vw] mb-12 flex justify-between items-end">
<div>
<span className="font-mono text-xs tracking-widest uppercase mb-2 block font-sans text-cyan-500">
                  Предложение
                </span>
<h2 className="text-3xl tracking-tight font-manrope font-medium">
                    Выберите свой пакет
                </h2>
</div>
<div className="hidden md:flex gap-2">
<span className="text-xs font-mono text-neutral-500 font-sans">
                  ЛИСТАЙТЕ ВПРАВО -&gt;
                </span>
</div>
</div>
<div className="horizontal-scroll-container w-full mb-20">
<div className="horizontal-wrapper flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" style={{scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch'}}>

<div className="w-[85vw] md:w-[35vw] h-auto relative flex-shrink-0 group border rounded-xl p-8 flex flex-col justify-between transition-colors bg-neutral-900/50 border-white/10 hover:border-white/30 snap-center cursor-pointer package-card" onclick="openPackageModal(this)">
<div className="">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-sans bg-neutral-800">🚀</div>
<span className="px-3 py-1 rounded text-xs font-mono font-sans bg-neutral-800 text-neutral-400">1-2 недели</span>
</div>
<h3 className="text-3xl mb-2 font-manrope font-medium text-white">СТАРТОВЫЙ</h3>
<div className="text-4xl mb-6 font-manrope font-medium text-cyan-400">$600</div>
<ul className="space-y-3 text-sm mb-8 text-neutral-300">
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Одностраничный сайт (Landing)</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Адаптация под мобильные</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Форма заявки в WhatsApp/TG</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Базовая SEO-оптимизация</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Домен + Хостинг на год</li>
</ul>
</div>
<button className="w-full py-4 border rounded-lg transition-colors font-medium font-sans border-white/20 hover:bg-white hover:text-black">ЗАКАЗАТЬ СТАРТОВЫЙ</button>
</div>

<div className="w-[85vw] md:w-[35vw] h-auto relative flex-shrink-0 group bg-[#0F1512] border rounded-xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(16,185,129,0.05)] border-cyan-500/50 snap-center cursor-pointer package-card" onclick="openPackageModal(this)">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest font-sans text-black bg-cyan-500">ХИТ ПРОДАЖ</div>
<div>
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-sans bg-cyan-900/50">🛒</div>
<span className="px-3 py-1 rounded text-xs font-mono font-sans bg-cyan-900/30 text-cyan-400">2-4 недели</span>
</div>
<h3 className="text-3xl mb-2 font-manrope font-medium text-white">ИНТЕРНЕТ-МАГАЗИН</h3>
<div className="text-4xl mb-6 font-manrope font-medium text-cyan-400">$2,000</div>
<ul className="space-y-3 text-sm mb-8 text-neutral-300">
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Полнофункциональный магазин</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Управление товарами</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Оплата (Paybox, Elsom)</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> SEO для 15 товаров</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Интеграция Wildberries (опция)</li>
</ul>
</div>
<button className="w-full py-4 rounded-lg transition-colors font-bold shadow-lg font-sans text-white hover:bg-cyan-500 shadow-cyan-500/20 bg-cyan-600">ЗАКАЗАТЬ МАГАЗИН</button>
</div>

<div className="w-[85vw] md:w-[35vw] h-auto relative flex-shrink-0 group border rounded-xl p-8 flex flex-col justify-between transition-colors bg-neutral-900/50 border-white/10 hover:border-white/30 snap-center cursor-pointer package-card" onclick="openPackageModal(this)">
<div>
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-sans bg-neutral-800">📈</div>
<span className="px-3 py-1 rounded text-xs font-mono font-sans bg-neutral-800 text-neutral-400">1-2 месяца</span>
</div>
<h3 className="text-3xl mb-2 font-manrope font-medium text-white">ПРЕМИУМ + ADS</h3>
<div className="text-4xl mb-6 font-manrope font-medium text-cyan-400">$4,000</div>
<ul className="space-y-3 text-sm mb-8 text-neutral-300">
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Всё из пакета Магазин</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Полная SEO-стратегия (6 мес)</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Настройка Google Ads / Yandex</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Аналитика и отчеты</li>
<li className="flex gap-2 font-sans"><svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> CRM Интеграция</li>
</ul>
</div>
<button className="w-full py-4 border rounded-lg transition-colors font-medium font-sans border-white/20 hover:bg-white hover:text-black">ЗАБРОНИРОВАТЬ</button>
</div>

<div className="fixed inset-0 z-50 hidden" id="packageModal" style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)'}}>
<div className="fixed right-0 top-0 h-full w-[80vw] bg-[#0a0a0a] border-l border-white/10 transform translate-x-full transition-transform duration-300 ease-out overflow-y-auto" id="modalContent">
<button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10" onclick="closePackageModal()">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="p-8 pt-16" id="modalBody"></div>
</div>
</div>
<style>
        .horizontal-wrapper::-webkit-scrollbar { height: 4px; }
        .horizontal-wrapper::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .horizontal-wrapper::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.5); border-radius: 4px; }
        .horizontal-wrapper { direction: rtl; }
        .horizontal-wrapper > * { direction: ltr; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(100%); } }
        .modal-slide-in { animation: slideIn 0.3s ease-out forwards; }
        .modal-slide-out { animation: slideOut 0.3s ease-out forwards; }
    </style>

</div>
</div>

<div className="px-[5vw] max-w-6xl mx-auto hidden md:block">
<table className="w-full text-left border-collapse text-sm text-neutral-400">
<thead>
<tr className="border-b text-xs uppercase tracking-widest border-white/10">
<th className="py-4 font-normal font-sans text-neutral-600">Сравнение</th>
<th className="py-4 font-normal font-sans text-white">Стартовый</th>
<th className="py-4 font-normal font-sans text-cyan-400">Магазин</th>
<th className="py-4 font-normal font-sans text-white">Премиум</th>
</tr>
</thead>
<tbody>
<tr className="border-b hover:bg-white/[0.02] border-white/5">
<td className="py-4 font-sans">Мобильная версия</td>
<td className="py-4 font-sans text-cyan-500">✓</td>
<td className="py-4 font-sans text-cyan-500">✓</td>
<td className="py-4 font-sans text-cyan-500">✓</td>
</tr>
<tr className="border-b hover:bg-white/[0.02] border-white/5">
<td className="py-4 font-sans">Онлайн-оплата</td>
<td className="py-4 font-sans text-neutral-700">—</td>
<td className="py-4 font-sans text-cyan-500">✓</td>
<td className="py-4 font-sans text-cyan-500">✓</td>
</tr>
<tr className="border-b hover:bg-white/[0.02] border-white/5">
<td className="py-4 font-sans">SEO Статьи</td>
<td className="py-4 font-sans">3 шт</td>
<td className="py-4 font-sans">10 шт</td>
<td className="py-4 font-sans">20+ шт</td>
</tr>
<tr className="border-b hover:bg-white/[0.02] border-white/5">
<td className="py-4 font-sans">Бюджет на рекламу</td>
<td className="py-4 font-sans text-neutral-700">—</td>
<td className="py-4 font-sans text-neutral-700">—</td>
<td className="py-4 font-sans text-cyan-500">$500</td>
</tr>
</tbody>
</table>
</div>
</section></div></div>

<section className="py-32 px-[5vw] border-b relative overflow-hidden border-white/10" id="cases">
<div className="flex flex-col md:flex-row gap-24 relative z-10">
<div className="w-full md:w-5/12">
<span className="font-mono text-xs tracking-widest uppercase mb-12 block font-sans text-cyan-500">
                Портфолио
              </span>
<h2 className="text-4xl tracking-tighter mb-16 font-manrope font-medium text-white">
                 Бизнесы из КГ, которые <br/>
<span className="text-neutral-500 font-manrope font-medium">выросли благодаря нам.</span>
</h2>
<div className="flex flex-col">

<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-white transition-colors font-manrope font-medium text-neutral-400">
                      GULUM Textiles
                    </h3>
<span className="font-mono text-xs font-sans text-neutral-600 group-hover:text-cyan-500">Швейная фабрика</span>
</div>
<div className="flex gap-4 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">
<span className="font-sans">+$8,000/мес</span>
<span className="font-sans">200+ заказов</span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-neutral-500 transition-all duration-300 font-sans">
                    Запустили интернет-магазин, вышли на WB. Окупаемость за 3 недели.
                  </p>
</div>

<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-white transition-colors font-manrope font-medium text-neutral-400">
                      Логистика КГ
                    </h3>
<span className="font-mono text-xs font-sans text-neutral-600 group-hover:text-cyan-500">B2B Доставка</span>
</div>
<div className="flex gap-4 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">
<span className="font-sans">Топ-1 в поиске</span>
<span className="font-sans">Контракты $5k+</span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-neutral-500 transition-all duration-300 font-sans">
                    Корпоративный сайт + Google Ads. Рост заявок на 40% за полгода.
                  </p>
</div>

<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-white transition-colors font-manrope font-medium text-neutral-400">
                      Beauty Lounge
                    </h3>
<span className="font-mono text-xs font-sans text-neutral-600 group-hover:text-cyan-500">Салон красоты</span>
</div>
<div className="flex gap-4 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">
<span className="font-sans">-3 часа рутины</span>
<span className="font-sans">+20% клиентов</span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-neutral-500 transition-all duration-300 font-sans">
                    Лендинг с онлайн-записью. Админ разгружен, запись полная.
                  </p>
</div>
</div>
</div>
<div className="hidden md:block w-7/12 relative h-[80vh]">
<div className="sticky top-24 w-full h-full rounded-sm overflow-hidden border relative bg-neutral-900 border-white/5">
<img alt="" className="w-full h-full object-cover filter grayscale opacity-60 transition-transform duration-700" id="contrib-img" src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-30 mix-blend-difference">
<div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full backdrop-blur border-white/20 bg-black/50">
<div className="w-2 h-2 rounded-full animate-pulse bg-cyan-500"></div>
<span className="text-[10px] font-mono uppercase tracking-widest font-sans text-white">
                      Результат подтвержден
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-[5vw] border-b border-white/10 bg-neutral-900/20" id="about">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl mb-8 font-manrope font-medium text-white">О нас (Почему нам доверяют)</h2>
<div className="text-left space-y-6 leading-relaxed text-neutral-400">
<p className="text-xl font-sans text-white">Привет, я Сыдыков. Веб-разработчик и маркетолог из Бишкека.</p>
<p className="font-sans">Я не просто делаю "красивые картинки". Я создаю инструменты продаж. За 5+ лет работы на рынке Кыргызстана я понял главную боль: агентства берут $5000 и делают полгода, а фрилансеры пропадают с предоплатой.</p>
<p className="font-sans">Мы работаем иначе:</p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
<li className="flex gap-3 items-center font-sans text-white"><span className="font-sans text-cyan-500">✓</span> Стартовый сайт за 2 недели</li>
<li className="flex gap-3 items-center font-sans text-white"><span className="font-sans text-cyan-500">✓</span> Понимание специфики КГ (Elsom, Logist)</li>
<li className="flex gap-3 items-center font-sans text-white"><span className="font-sans text-cyan-500">✓</span> Оплата частями (30/40/30)</li>
<li className="flex gap-3 items-center font-sans text-white"><span className="font-sans text-cyan-500">✓</span> Встречи в Бишкеке</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-[5vw] bg-[#050505] border-b relative border-white/10" id="process">
<div className="mb-32">
<span className="font-mono text-xs tracking-widest uppercase mb-4 block font-sans text-cyan-500">
              Процесс
            </span>
<h2 className="section-title text-5xl md:text-7xl font-semibold tracking-tighter text-white">
<span className="block overflow-hidden">
<span className="block pb-2 font-manrope font-medium">От идеи до</span>
</span>
<span className="block overflow-hidden">
<span className="block pb-2 font-manrope font-medium text-neutral-700">Заказа.</span>
</span>
</h2>
</div>
<div className="flex flex-col gap-8 relative max-w-4xl mx-auto">

<div className="process-card sticky top-32 w-full bg-[#0E0E0E] border rounded-xl p-8 md:p-12 flex gap-8 items-start shadow-xl border-white/10" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="text-5xl leading-none font-manrope font-medium text-neutral-800">01</div>
<div>
<h3 className="text-2xl mb-4 font-manrope font-medium text-white">Встреча и Договор</h3>
<p className="leading-relaxed font-sans text-neutral-400">
                  День 1-2. Обсуждаем цели, анализируем конкурентов. Подписываем договор, вы вносите 30%. Ясный план действий.
                </p>
</div>
</div>

<div className="process-card sticky top-40 w-full bg-[#111] border rounded-xl p-8 md:p-12 flex gap-8 items-start shadow-xl border-white/10" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="text-5xl leading-none font-manrope font-medium text-neutral-800">02</div>
<div>
<h3 className="text-2xl mb-4 font-manrope font-medium text-white">Макет Дизайна</h3>
<p className="leading-relaxed font-sans text-neutral-400">
                  День 3-7. Я создаю визуальный макет. Вы видите, как будет выглядеть сайт до начала программирования. Вносим правки.
                </p>
</div>
</div>

<div className="process-card sticky top-48 w-full bg-[#141414] border rounded-xl p-8 md:p-12 flex gap-8 items-start shadow-xl border-white/10" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="text-5xl leading-none font-manrope font-medium text-neutral-800">03</div>
<div>
<h3 className="text-2xl mb-4 font-manrope font-medium text-white">Разработка</h3>
<p className="leading-relaxed font-sans text-neutral-400">
                  День 8-14. Я кодю сайт. Каждые 3 дня — отчет со скриншотами. Подключаем домен, настраиваем админку.
                </p>
</div>
</div>

<div className="process-card sticky top-56 w-full bg-[#171717] border rounded-xl p-8 md:p-12 flex gap-8 items-start shadow-xl border-white/10" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="text-5xl leading-none font-manrope font-medium text-neutral-800">04</div>
<div>
<h3 className="text-2xl mb-4 font-manrope font-medium text-white">Запуск и Реклама</h3>
<p className="leading-relaxed font-sans text-neutral-400">
                    День 15-20. Сайт выходит в онлайн. Настраиваем Google Ads и SEO. Обучаем вас пользоваться сайтом (15 мин).
                  </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-[5vw] border-b border-white/10" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl mb-12 text-center font-manrope font-medium text-white">Вы (скорее всего) волнуетесь...</h2>
<div className="space-y-0">
<div className="accordion-item border-t group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-lg font-medium group-hover:text-white transition-colors font-sans text-neutral-300">
                    А разве веб-разработка это не дорого?
                  </h3>
<svg className="text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-sm leading-relaxed max-w-xl font-sans text-neutral-400">
                    Агентства просят $5000-$10000. Мы предлагаем решения для малого бизнеса КГ от $600. Сайт окупится с 2-3 клиентов. Это инвестиция, а не трата.
                  </div>
</div>
</div>
<div className="accordion-item border-t group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-lg font-medium group-hover:text-white transition-colors font-sans text-neutral-300">
                    Я не технарь, смогу ли управлять сайтом?
                  </h3>
<svg className="text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-sm leading-relaxed max-w-xl font-sans text-neutral-400">
                    100%. Мы делаем админку простой как Instagram. Плюс, мы проводим 30-минутное обучение и даем 3 месяца поддержки.
                  </div>
</div>
</div>
<div className="accordion-item border-t group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-lg font-medium group-hover:text-white transition-colors font-sans text-neutral-300">
                    А что если вы возьмете деньги и исчезнете?
                  </h3>
<svg className="text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-sm leading-relaxed max-w-xl font-sans text-neutral-400">
                    Мы работаем по договору. Оплата разбита на части (30% старт). Мы находимся в Бишкеке и открыты к личным встречам. Репутация дороже денег.
                  </div>
</div>
</div>
<div className="accordion-item border-t border-b group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-lg font-medium group-hover:text-white transition-colors font-sans text-neutral-300">
                    Когда будут первые клиенты?
                  </h3>
<svg className="text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-sm leading-relaxed max-w-xl font-sans text-neutral-400">
                    С рекламой (Google Ads) — через 3-7 дней после запуска. С SEO — через 1-2 месяца. Мы не просто даем сайт, мы помогаем с рекламой.
                  </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-[5vw]">
<div className="bg-gradient-to-br border rounded-2xl p-8 md:p-12 relative overflow-hidden text-center max-w-4xl mx-auto to-black border-cyan-500/30 from-cyan-900/40">
<div className="relative z-10">
<div className="inline-block font-bold px-3 py-1 text-xs rounded mb-6 animate-pulse font-sans text-black bg-cyan-500">ДЕЙСТВУЕТ В ЯНВАРЕ 2026</div>
<h2 className="text-4xl mb-6 font-manrope font-medium text-white">Скидка 20% на все пакеты</h2>
<div className="flex justify-center gap-8 mb-8 text-lg font-sans">
<span className="line-through text-neutral-500 font-sans">$600</span> -&gt; <span className="font-bold font-sans text-cyan-400">$480</span>
<span className="font-sans text-neutral-600">|</span>
<span className="line-through text-neutral-500 font-sans">$2000</span> -&gt; <span className="font-bold font-sans text-cyan-400">$1600</span>
</div>
<p className="mb-8 max-w-lg mx-auto font-sans text-neutral-300">
                        + Бесплатный аудит конкурентов и 5 SEO статей в подарок. 
                        Осталось 3 места на этот месяц.
                    </p>
<a className="inline-block font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform font-sans text-black bg-cyan-500" href="#cta">ЗАБРОНИРОВАТЬ МЕСТО</a>
</div>
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] bg-cyan-500/10"></div>
</div>
</section>

<footer className="pt-24 pb-12 px-[5vw] bg-[#020202] relative" id="cta">
<div className="mb-24 text-center">
<h2 className="text-[clamp(2rem,5vw,4rem)] tracking-tighter mb-8 leading-tight font-manrope font-medium text-white">
              Не теряйте еще один день. <br/>
<span className="font-manrope font-medium text-neutral-600">Начнем работу?</span>
</h2>
<div className="flex flex-col items-center gap-6">
<button className="btn-primary px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 group">
<span className="font-sans">Забронировать консультацию</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-neutral-500 text-sm font-sans">или напишите в <a className="underline font-sans text-cyan-500" href="#">WhatsApp</a></p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t pt-12 border-white/10">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-cyan-500">
<div className="w-1.5 h-1.5 rounded-full bg-black"></div>
</div>
<span className="font-semibold text-sm font-sans text-white">SYDYKOV AGENCY</span>
</div>
<p className="text-xs text-neutral-500 max-w-[200px] font-sans">
                Бишкек, Кыргызстан.
                <br/>
                Разработка сайтов и маркетинг.
                <br/>
                © 2026
              </p>
</div>
<div>
<h4 className="font-mono text-xs text-neutral-500 mb-6 uppercase tracking-wider font-sans">
                Услуги
              </h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="transition-colors font-sans hover:text-white" href="#">Разработка сайтов</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Интернет-магазины</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Google Реклама</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-neutral-500 mb-6 uppercase tracking-wider font-sans">
                Компания
              </h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="transition-colors font-sans hover:text-white" href="#">Портфолио</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">О нас</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Контакты</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-mono text-xs text-neutral-500 mb-6 uppercase tracking-wider font-sans">
                Контакты
              </h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex gap-2 items-center font-sans"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +996 555 00 00 00</li>
<li className="flex gap-2 items-center font-sans"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> hello@sydykov.kg</li>
<li className="flex gap-2 items-center font-sans"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Бишкек, Центр</li>
</ul>
</div>
</div>
</footer>
</div>
</main>






    </>
  );
}
