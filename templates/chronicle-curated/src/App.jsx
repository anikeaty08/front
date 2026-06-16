import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
        


                                (function() {
                                                    const wrapper = document.querySelector('#hero');
                                                    if (!wrapper) return;

                                                    const observer = new IntersectionObserver((entries) => {
                                                      entries.forEach(entry => {
                                                        if (entry.isIntersecting) {
                                                          // Reveal Title
                                                          wrapper.querySelectorAll('[data-hero-text]').forEach(el => {
                                                            el.classList.remove('translate-y-full', 'skew-y-3', 'opacity-0');
                                                          });
                                                          // Reveal Line
                                                          const line = wrapper.querySelector('[data-hero-line]');
                                                          if(line) line.classList.remove('scale-x-0');

                                                          // Reveal Badge
                                                          const badge = wrapper.querySelector('#anim-badge');
                                                          if(badge) badge.classList.remove('opacity-0', 'translate-y-8');

                                                          // Reveal Content Staggered
                                                          const desc = wrapper.querySelector('#anim-desc');
                                                          const btns = wrapper.querySelector('#anim-btns');
                                                          if(desc) setTimeout(() => desc.classList.remove('opacity-0', 'translate-y-8'), 300);
                                                          if(btns) setTimeout(() => btns.classList.remove('opacity-0', 'translate-y-8'), 500);

                                                          observer.disconnect();
                                                        }
                                                      });
                                                    }, { threshold: 0.15 });

                                                    observer.observe(wrapper);
                                                  })();
                              


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

            // --- NEW: CRAZY SECTION TRANSITIONS ---

            // 1. Philosophy: Glitch/Blur Entry
            gsap.from("#philosophy .section-title", {
              scrollTrigger: { trigger: "#philosophy", start: "top 80%" },
              duration: 1.5,
              skewX: 20,
              x: -50,
              opacity: 0,
              filter: "blur(20px)",
              ease: "power4.out"
            });

            // 2. Issues: Elastic Rotate
            gsap.from("#issues .section-title", {
              scrollTrigger: { trigger: "#issues", start: "top 80%" },
              duration: 1.2,
              scale: 0.5,
              rotation: -15,
              transformOrigin: "left center",
              opacity: 0,
              ease: "elastic.out(1, 0.75)"
            });

            // 3. Contributors: Card Shuffle/Fan
            gsap.from(".contributor-row", {
              scrollTrigger: { trigger: "#contributors", start: "top 70%" },
              duration: 1,
              x: (i) => (i % 2 === 0 ? -100 : 100),
              y: 50,
              rotation: (i) => (i % 2 === 0 ? -5 : 5),
              opacity: 0,
              stagger: 0.15,
              ease: "power3.out"
            });

            // 4. Methodology: Staggered Decode & Number Count
            gsap.from("#methodology .section-title", {
              scrollTrigger: { trigger: "#methodology", start: "top 80%" },
              duration: 1,
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
              ease: "elastic.out(1, 0.3)"
            });
            gsap.utils.toArray("#methodology .process-card .font-mono").forEach((num) => {
               gsap.from(num, {
                 scrollTrigger: { trigger: num, start: "top 90%" },
                 duration: 1.5,
                 textContent: "00",
                 snap: { textContent: 1 },
                 ease: "power2.inOut"
               });
            });

            // 5. Features: 3D Venetian Blinds
            gsap.from(".accordion-item", {
              scrollTrigger: { trigger: "#features", start: "top 75%" },
              duration: 1.2,
              rotationX: -90,
              y: -30,
              opacity: 0,
              transformOrigin: "top center",
              stagger: 0.2,
              ease: "expo.out"
            });

            // 6. Footer: Curtain Rise
            gsap.from("#community", {
               scrollTrigger: { trigger: "#community", start: "top 90%" },
               duration: 1.5,
               yPercent: 20,
               opacity: 0,
               scale: 0.9,
               ease: "power3.out"
            });

            // --- END NEW TRANSITIONS ---

            // Hero Intro
            gsap.from(".hero-title span span", {
              y: "110%",
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
            });

            gsap.from([".hero-desc", ".hero-btns"], {
              opacity: 0,
              y: 16,
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.2,
            });

            // Marquee
            gsap.to(".marquee-track", {
              xPercent: -50,
              repeat: -1,
              duration: 20,
              ease: "linear",
            });

            // Reveal cards scrub
            gsap.utils.toArray(".reveal-card").forEach((card) => {
              gsap.fromTo(
                card,
                { opacity: 0.15, y: 40 },
                {
                  opacity: 1,
                  y: 0,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 55%",
                    scrub: true,
                  },
                }
              );
            });

            // Philosophy progress
            gsap.to(".philosophy-progress", {
              y: "0%",
              ease: "none",
              scrollTrigger: {
                trigger: "#philosophy",
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            });

            // Hero zoom
            gsap.timeline({
              scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
              },
            })
              .to(
                ".hero-visual",
                {
                  width: "100vw",
                  height: "100vh",
                  top: 0,
                  right: 0,
                  opacity: 1,
                  borderRadius: 0,
                  ease: "power2.inOut",
                },
                0
              )
              .to(
                ".hero-visual img",
                {
                  rotation: 0,
                  scale: 1,
                  filter: "blur(0px) grayscale(0%)",
                  borderRadius: 0,
                  opacity: 1,
                  ease: "power2.inOut",
                },
                0
              );

            // Horizontal scroll
            function setupHorizontal() {
              const wrapper = document.querySelector(".horizontal-wrapper");
              const container = document.querySelector("#issues");
              if (!wrapper || !container) return;

              const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);

              ScrollTrigger.matchMedia({
                "(min-width: 769px)": function () {
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
            setupHorizontal();

            // Contributors hover
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

            // Methodology stacking dim
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
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div>
</div>

<nav className="fixed top-0 w-full z-50 px-[5vw] py-5 flex justify-between items-center glass-nav">
<div className="flex items-center gap-2 z-50">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-semibold text-sm tracking-tight text-white">
          CHRONICLE
        </span>
</div>
<div className="flex items-center gap-6 z-50">
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#download">
          Get the App
        </a>
<button className="menu-btn group flex flex-col gap-[5px] w-8 items-end cursor-pointer">
<span className="w-full h-[1.5px] bg-zinc-300 transition-all duration-300 group-hover:w-3/4"></span>
<span className="w-2/3 h-[1.5px] bg-zinc-300 transition-all duration-300 group-hover:w-full"></span>
</button>
</div>
</nav>

<div className="menu-overlay fixed inset-0 bg-background z-40 flex flex-col justify-center items-center">
<div className="flex flex-col gap-6 text-center">
<a className="menu-link text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-600 hover:text-white transition-colors" href="#hero">
          Start
        </a>
<a className="menu-link text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-600 hover:text-white transition-colors" href="#issues">
          Issues
        </a>
<a className="menu-link text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-600 hover:text-white transition-colors" href="#features">
          Features
        </a>
<a className="menu-link text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-600 hover:text-white transition-colors" href="#community">
          Join
        </a>
</div>
<div className="absolute bottom-10 left-[5vw] right-[5vw] flex justify-between text-xs font-mono text-zinc-600 uppercase">
<span>v.2.4.0</span>
<span>San Francisco, CA</span>
</div>
</div>

<main className="" id="smooth-wrapper">
<div className="" id="smooth-content">

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1945px', padding: '0px 0px 1167px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px 0px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px 0px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px 0px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px 0px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px 0px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px -10px -1px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px -10px -1px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0.001px -10px -1px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '778px', padding: '0px'}}>
<section className="relative min-h-screen flex flex-col justify-center px-[5vw] pt-20 overflow-hidden border-b border-white/10" id="hero" style={{translate: 'none', rotate: 'none', scale: 'none', left: '0px', top: '0.001px', margin: '0px', maxWidth: '1506px', width: '1506px', maxHeight: '778px', height: '778px', padding: '80px 75.6px 0px', boxSizing: 'border-box', position: 'fixed', transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
<div className="hero-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_60%)] blur-[100px] z-0"></div>

<div className="hero-visual absolute right-0 md:right-[8%] top-[18%] w-[280px] md:w-[420px] aspect-[3/4] z-0 group perspective-midrange" style={{borderRadius: '0px', opacity: '1', right: '120px', top: '140px', height: '71.9794vh', width: '27.7778vw'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="absolute inset-0 translate-x-6 translate-y-6 bg-[#080808] border border-white/5 rounded-2xl rotate-6 opacity-60 transition-transform duration-500 group-hover:rotate-12 group-hover:translate-x-8 group-hover:translate-y-8 ease-out">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
</div>

<div className="absolute inset-0 -translate-x-4 -translate-y-3 bg-zinc-900/90 backdrop-blur-sm border border-white/10 rounded-2xl -rotate-3 overflow-hidden opacity-40 transition-transform duration-500 group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:-translate-y-6 ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5 flex justify-between items-center opacity-50">
<div className="space-y-1.5">
<div className="h-1 w-16 bg-zinc-600 rounded-full"></div>
<div className="h-1 w-24 bg-zinc-600 rounded-full"></div>
</div>
<div className="font-mono text-[10px] text-zinc-500 tracking-widest">
                                    REF.024
                                  </div>
</div>
</div>

<div className="overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group-hover:shadow-blue-900/20 bg-zinc-900 border-white/10 border rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-2xl saturate-0">
<img alt="Featured Article" className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c430d894-0b9a-4c2f-a12e-b3fd9c70a707_1600w.webp"/>

<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0">

<div className="absolute top-5 right-5 flex gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group/btn">
<svg className="lucide lucide-bookmark text-white/70 group-hover/btn:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
</svg>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
<div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-mono font-medium text-blue-400 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                                      EXCLUSIVE
                                    </div>
<h3 className="text-2xl md:text-3xl font-serif italic text-white leading-[1.1] mb-3 tracking-tight">
                                      The Architectureof Silence
                                    </h3>
<div className="flex items-center gap-4 text-xs text-zinc-400 font-mono border-t border-white/10 pt-3 mt-3">
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                                        8 min
                                      </span>
<span className="w-px h-3 bg-zinc-700"></span>
<span>Issue 24</span>
<span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-right text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</div>
</div>
</div>

<div className="absolute -left-4 top-10 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-lg p-3 shadow-2xl transform -rotate-3 transition-all duration-300 group-hover:-rotate-1 group-hover:-translate-x-2 hover:scale-105 z-20 hidden md:block w-40">
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center shrink-0">
<svg className="lucide lucide-play text-white ml-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
<div className="overflow-hidden">
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider truncate">
                                      Audio Version
                                    </div>
</div>
</div>
<div className="flex gap-[2px] items-center h-4 px-1 opacity-80">
<div className="w-0.5 bg-blue-500 h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-blue-500 h-3 animate-[pulse_1.5s_ease-in-out_infinite] delay-75"></div>
<div className="w-0.5 bg-blue-500 h-1.5 animate-[pulse_0.8s_ease-in-out_infinite] delay-100"></div>
<div className="w-0.5 bg-blue-500 h-3.5 animate-[pulse_1.2s_ease-in-out_infinite] delay-150"></div>
<div className="w-0.5 bg-blue-500 h-2 animate-[pulse_1s_ease-in-out_infinite] delay-200"></div>
<div className="w-0.5 bg-zinc-700 h-4"></div>
<div className="w-0.5 bg-zinc-700 h-2"></div>
<div className="w-0.5 bg-zinc-700 h-1.5"></div>
<div className="w-0.5 bg-zinc-700 h-3"></div>
</div>
</div>

<div className="absolute -right-5 bottom-20 bg-white text-black px-3.5 py-2 rounded-lg shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] transform rotate-3 transition-all duration-300 group-hover:rotate-6 hover:scale-105 z-20 flex items-center gap-2.5 hidden md:flex cursor-pointer border-2 border-transparent hover:border-blue-500/20">
<div className="relative">
<svg className="lucide lucide-arrow-down" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full border border-white"></span>
</div>
<div className="flex flex-col leading-none">
<span className="text-[10px] font-bold tracking-tight uppercase">
                                    Offline
                                  </span>
<span className="text-[8px] text-zinc-500 font-mono">
                                    24MB
                                  </span>
</div>
</div>
</div>
<div className="z-10 md:mt-0 flex flex-col max-w-5xl mt-16 relative justify-center">

<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit mb-10 backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform" id="anim-badge">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-geist-mono text-zinc-400">
                                  Issue 24 Available
                                </span>
</div>

<h1 className="hero-title relative z-20 flex flex-col text-[clamp(4rem,11vw,10rem)] leading-[0.8] font-semibold tracking-tighter text-white mb-10 font-bricolage">
<div className="overflow-hidden">
<span className="block transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform" data-hero-text="">
                                    SIGNAL
                                  </span>
</div>
<div className="flex items-center gap-6 overflow-hidden -mt-2 md:-mt-4">
<span className="h-[3px] w-16 md:w-32 bg-blue-500 transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 origin-left" data-hero-line=""></span>
<span className="block font-instrument-serif italic font-normal text-zinc-500 transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] delay-150 will-change-transform" data-hero-text="">
                                    detected.
                                  </span>
</div>
</h1>

<div className="flex flex-col md:flex-row gap-10 items-start">
<p className="hero-desc text-lg md:text-xl text-zinc-400 max-w-sm leading-relaxed font-newsreader italic border-l-2 border-white/10 pl-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-300 will-change-transform" id="anim-desc" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 16px)', opacity: '0'}}>
                                  A digital magazine designed for the focused
                                  mind. Curated journalism, zero distractions.
                                </p>
<div className="hero-btns flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-500 will-change-transform" id="anim-btns" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 16px)', opacity: '0'}}>
<button className="btn-glow group relative px-8 py-4 rounded-full text-sm font-medium text-white flex items-center gap-3 overflow-hidden">
<span className="relative z-10">
                                      Download App
                                    </span>
<svg className="relative z-10 lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="px-8 py-4 rounded-full text-sm font-medium text-zinc-500 hover:text-white transition-colors">
                                    Web Reader
                                  </button>
</div>
</div>

</div>
<div className="absolute bottom-12 left-[5vw] flex flex-col gap-4 opacity-50">
<div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest -rotate-90 origin-top-left translate-y-full translate-x-2">
                                Scroll
                              </span>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-6 border-b bg-surface/50 marquee-container border-white/10">
<div className="marquee-track flex gap-12 whitespace-nowrap overflow-hidden" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-8.03%, 0%) translate3d(0px, 0px, 0px)'}}>
<div className="flex gap-12 items-center text-sm font-mono text-zinc-400 uppercase tracking-widest">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
                Technology
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:palette" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
                Design
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
                Culture
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Science
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</g>
</svg>
                Venture
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
                Technology
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:palette" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
                Design
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
                Culture
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Science
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</g>
</svg>
                Venture
              </span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-[5vw] py-32 border-b relative border-white/10" id="philosophy">
<div className="sticky top-32 h-fit">
<span className="font-mono text-blue-500 text-xs tracking-widest uppercase mb-4 block">
              Philosophy
            </span>
<h2 className="section-title text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-8">
<span className="inline-block overflow-hidden align-bottom">
<span className="inline-block pb-1">Signal over</span>
</span>
<span className="inline-block overflow-hidden align-bottom">
<span className="inline-block text-zinc-600 pb-1">noise.</span>
</span>
</h2>
<div className="hidden md:flex flex-col items-center h-[50vh] max-h-[400px] mt-8">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] z-10"></div>
<div className="w-px flex-1 bg-zinc-800 relative overflow-hidden my-2">
<div className="philosophy-progress absolute top-0 left-0 w-full h-full bg-blue-500 will-change-transform -translate-y-full" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, -99.5853%)'}}></div>
</div>
<div className="w-1.5 h-1.5 bg-zinc-800 rounded-full z-10"></div>
</div>
</div>
<div className="flex flex-col gap-24">
<div className="reveal-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 40px)', opacity: '0.15'}}>
<p className="text-xl md:text-2xl leading-relaxed text-zinc-100 mb-6">
                The internet is broken. Algorithmic feeds prioritize outrage
                over insight. Chronicle is a quiet space tailored for deep
                reading.
              </p>
<div className="aspect-video bg-zinc-900 rounded-lg border overflow-hidden relative group border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 saturate-0"></div>
<img alt="Cybersecurity" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c7615f8-1793-4e8f-a978-46f1415813bc_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-xs font-mono text-white border border-white/20 px-2 py-1 rounded">
                    01. Curation
                  </span>
</div>
</div>
</div>
<div className="reveal-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 40px)', opacity: '0.15'}}>
<p className="text-xl md:text-2xl leading-relaxed text-zinc-100 mb-6">
                We collaborate with the world's leading thinkers to produce
                issues that stand the test of time. No clickbait. No ads.
              </p>
<div className="aspect-video bg-zinc-900 rounded-lg border overflow-hidden relative group border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
<img alt="Network" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd1afaa1-94ec-44d8-95d5-eb4ff60b9ef4_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-xs font-mono text-white border border-white/20 px-2 py-1 rounded">
                    02. Depth
                  </span>
</div>
</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1347px', padding: '0px 0px 559px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1344px', padding: '0px 0px 556px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1344px', padding: '0px 0px 556px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1506px', height: '1344px', padding: '0px 0px 556px'}}>
<section className="bg-[#080808] text-white py-24 overflow-hidden relative border-b border-white/10" id="issues" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1506px', width: '1506px', maxHeight: '787.797px', height: '787.797px', padding: '96px 0px', transform: 'translate(0px, 0px)'}}>
<div className="px-[5vw] mb-16 flex justify-between items-end">
<div>
<span className="font-mono text-blue-500 text-xs tracking-widest uppercase mb-2 block">
                                  Library
                                </span>
<h2 className="section-title text-3xl font-semibold tracking-tight">
<span className="inline-block overflow-hidden align-bottom">
<span className="inline-block pb-1">
                                      Recent
                                    </span>
</span>
<span className="inline-block overflow-hidden align-bottom">
<span className="inline-block pb-1">
                                      Issues
                                    </span>
</span>
</h2>
</div>
<div className="hidden md:flex gap-2">
<span className="text-xs font-mono text-zinc-500">
                                  DRAG TO EXPLORE -&gt;
                                </span>
</div>
</div>
<div className="horizontal-scroll-container w-full">
<div className="horizontal-wrapper flex" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>

<div className="w-[85vw] md:w-[30vw] h-[50vh] md:h-[60vh] relative flex-shrink-0 group cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 rounded-xl overflow-hidden border border-white/10">
<img alt="Issue 24" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bbfae4a-083d-4b6f-9384-5298923d7501_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<span className="text-4xl font-semibold tracking-tighter">
                                          The Void
                                        </span>
<span className="font-mono text-xs">
                                          NO. 24
                                        </span>
</div>
<p className="text-sm text-zinc-400 line-clamp-2">
                                        Exploring the concept of emptiness in
                                        digital spaces and urban architecture.
                                      </p>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[30vw] h-[50vh] md:h-[60vh] relative flex-shrink-0 group cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 rounded-xl overflow-hidden border border-white/10">
<img alt="Issue 23" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd276cb3-a53d-4683-83d8-727dc1ffaf68_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<span className="text-4xl font-semibold tracking-tighter">
                                          Synthetic
                                        </span>
<span className="font-mono text-xs">
                                          NO. 23
                                        </span>
</div>
<p className="text-sm text-zinc-400 line-clamp-2">
                                        The rise of AI generated realities and
                                        what it means for human creativity.
                                      </p>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[30vw] h-[50vh] md:h-[60vh] relative flex-shrink-0 group cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 rounded-xl overflow-hidden border border-white/10">
<img alt="Issue 22" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6be9a98c-f91e-4233-9dea-23a01f1f60c2_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<span className="text-4xl font-semibold tracking-tighter">
                                          Circuit
                                        </span>
<span className="font-mono text-xs">
                                          NO. 22
                                        </span>
</div>
<p className="text-sm text-zinc-400 line-clamp-2">
                                        Hardware renaissance. Why analog
                                        computing is making a comeback.
                                      </p>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[30vw] h-[50vh] md:h-[60vh] relative flex-shrink-0 group cursor-pointer pr-[5vw]">
<div className="absolute inset-0 bg-zinc-900 rounded-xl overflow-hidden border flex items-center justify-center border-white/10">
<div className="text-center group-hover:scale-110 transition-transform">
<span className="block text-sm font-mono text-blue-500 mb-2">
                                        ARCHIVE
                                      </span>
<span className="text-2xl font-semibold text-white">
                                        View All Issues
                                      </span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-32 px-[5vw] border-b relative overflow-hidden border-white/10" id="contributors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_40%)] pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-24 relative z-10">
<div className="w-full md:w-5/12">
<span className="font-mono text-blue-500 text-xs tracking-widest uppercase mb-12 block">
                Network
              </span>
<h2 className="section-title text-5xl font-semibold tracking-tighter text-white mb-16">
<span className="block overflow-hidden">
<span className="block pb-2">Global</span>
</span>
<span className="block overflow-hidden">
<span className="block text-zinc-600 pb-2">Correspondents.</span>
</span>
</h2>
<div className="flex flex-col">
<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1964&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline">
<h3 className="text-2xl text-zinc-400 group-hover:text-white transition-colors">
                      Dr. Aris Thorne
                    </h3>
<span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500">
                      LDN
                    </span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-zinc-500 transition-all duration-300">
                    Former editor at Wired UK. Specialist in cyber-physical
                    systems.
                  </p>
</div>
<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline">
<h3 className="text-2xl text-zinc-400 group-hover:text-white transition-colors">
                      Elena Kogan
                    </h3>
<span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500">
                      BER
                    </span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-zinc-500 transition-all duration-300">
                    Investigative journalist focusing on digital privacy and
                    cryptography.
                  </p>
</div>
<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline">
<h3 className="text-2xl text-zinc-400 group-hover:text-white transition-colors">
                      Kenji Sato
                    </h3>
<span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500">
                      TKY
                    </span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-zinc-500 transition-all duration-300">
                    Architect turned tech writer. Exploring the interface of
                    smart cities.
                  </p>
</div>
<div className="contributor-row group py-8 border-t cursor-pointer transition-colors hover:border-white/20 border-white/10" data-img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-baseline">
<h3 className="text-2xl text-zinc-400 group-hover:text-white transition-colors">
                      David Chen
                    </h3>
<span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500">
                      SF
                    </span>
</div>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-zinc-500 transition-all duration-300">
                    Venture analyst covering the intersection of finance and AI.
                  </p>
</div>
</div>
</div>
<div className="hidden md:block w-7/12 relative h-[80vh]">
<div className="sticky top-24 w-full h-full rounded-sm overflow-hidden bg-zinc-900 border border-white/5 relative">
<img alt="" className="w-full h-full object-cover filter grayscale opacity-60 transition-transform duration-700" id="contrib-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59edf8c1-4c43-4c22-802b-b4dc8b56c547_3840w.webp"/>
<div className="absolute bottom-8 left-8 z-30 mix-blend-difference">
<div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full border-white/20">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-white uppercase tracking-widest">
                      Live Uplink
                    </span>
</div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[5vw] bg-surface border-b relative border-white/10" id="methodology">
<div className="mb-32">
<span className="font-mono text-blue-500 text-xs tracking-widest uppercase mb-4 block">
              Process
            </span>
<h2 className="section-title text-5xl md:text-7xl font-semibold tracking-tighter text-white">
<span className="block overflow-hidden">
<span className="block pb-2">Refinement</span>
</span>
<span className="block overflow-hidden">
<span className="block text-zinc-700 pb-2">Protocol.</span>
</span>
</h2>
</div>
<div className="flex flex-col gap-8 relative max-w-5xl mx-auto">
<div className="process-card sticky top-32 w-full bg-[#0E0E0E] border border-white/10 rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 min-h-[400px]" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="font-mono text-6xl md:text-8xl text-zinc-800 leading-none">
                01
              </div>
<div className="pt-4 w-full">
<h3 className="text-3xl text-white font-medium mb-6">
                  Global Ingestion
                </h3>
<p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                  Our systems parse 50,000+ data points daily, from academic
                  repositories to edge-case forums.
                </p>
<div className="mt-12 h-px w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500 w-1/3 animate-loading-bar"></div>
</div>
</div>
</div>
<div className="process-card sticky top-40 w-full bg-[#111] border border-white/10 rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 min-h-[400px] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)]" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="font-mono text-6xl md:text-8xl text-zinc-800 leading-none">
                02
              </div>
<div className="pt-4 w-full">
<h3 className="text-3xl text-white font-medium mb-6">
                  Signal Verification
                </h3>
<p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                  Cross-referencing against historical baselines to eliminate
                  hallucination and bias.
                </p>
<div className="mt-12 flex gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></span>
<span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
</div>
</div>
</div>
<div className="process-card sticky top-48 w-full bg-[#141414] border border-white/10 rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 min-h-[400px] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)]" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', transform: 'translate(0px, 0px)'}}>
<div className="font-mono text-6xl md:text-8xl text-zinc-800 leading-none">
                03
              </div>
<div className="pt-4 w-full">
<h3 className="text-3xl text-white font-medium mb-6">
                  Narrative Synthesis
                </h3>
<p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                  The final output is not just data, but a coherent story
                  designed for the human mind.
                </p>
<button className="mt-12 text-sm font-mono text-blue-500 border-b border-blue-500/30 pb-1 hover:text-white hover:border-white transition-all">
                  READ MANIFESTO -&gt;
                </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-[5vw] border-b border-white/10" id="features">
<div className="max-w-3xl mx-auto">
<span className="font-mono text-blue-500 text-xs tracking-widest uppercase mb-12 block text-center">
              System Capabilities
            </span>
<div className="space-y-0">
<div className="accordion-item border-t group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                    Offline Synthesis
                  </h3>
<svg aria-hidden="true" className="iconify text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-zinc-400 leading-relaxed text-sm max-w-lg">
                    Full library synchronization allows for seamless reading
                    experiences without network connectivity. Your library is
                    locally indexed and searchable on device.
                  </div>
</div>
</div>
<div className="accordion-item border-t group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                    Audio Transcription
                  </h3>
<svg aria-hidden="true" className="iconify text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-zinc-400 leading-relaxed text-sm max-w-lg">
                    Every article is available as a high-fidelity audio
                    narration. Switch context from reading to listening
                    instantly with position syncing.
                  </div>
</div>
</div>
<div className="accordion-item border-t border-b group hover:bg-white/[0.02] transition-colors cursor-pointer border-white/10">
<div className="py-6 flex justify-between items-center">
<h3 className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                    Cross-Platform State
                  </h3>
<svg aria-hidden="true" className="iconify text-zinc-500 transition-transform duration-300 group-[.active]:rotate-45 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="accordion-content h-0 overflow-hidden opacity-0">
<div className="pb-6 text-zinc-400 leading-relaxed text-sm max-w-lg">
                    Start on iOS, continue on Web. Your reading progress,
                    highlights, and margin notes are encrypted and synced in
                    real-time.
                  </div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-[5vw] bg-[#020202] relative" id="community">
<div className="mb-24 text-center">
<h2 className="section-title text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tighter text-white mb-8 leading-none">
<span className="block overflow-hidden">
<span className="block pb-2">Upgrade your</span>
</span>
<span className="block overflow-hidden">
<span className="block text-zinc-600 pb-2">input source.</span>
</span>
</h2>
<button className="btn-glow px-10 py-4 rounded-full text-base font-medium text-white inline-flex items-center gap-2 group">
<span>Start Free Trial</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t pt-12 border-white/10">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="font-semibold text-sm text-white">CHRONICLE</span>
</div>
<p className="text-xs text-zinc-500 max-w-[200px]">
                Designed in Tokyo.
                <br/>
                Built for the global mind.
                <br/>
                © 2024
              </p>
</div>
<div>
<h4 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-wider">
                Product
              </h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Download
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Gift Cards
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-wider">
                Company
              </h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Manifesto
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Legal
                  </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-wider">
                Newsletter
              </h4>
<form className="flex items-center border-b pb-2 border-white/20" onsubmit="event.preventDefault()">
<input className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-zinc-600 font-mono" placeholder="email@address.com" type="email"/>
<button className="text-zinc-400 hover:text-white transition-colors" type="submit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</form>
</div>
</div>
</footer>
</div>
</main>






    </>
  );
}
