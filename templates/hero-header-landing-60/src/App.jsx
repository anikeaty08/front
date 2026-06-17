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
      const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      gsap.registerPlugin(ScrollTrigger);

      const splitTextToScrub = (el) => {
          const text = el.innerText;
          el.innerHTML = text.split(' ').map(word => `<span class="scrub-word inline-block">${word}&nbsp;</span>`).join('');
      };

      const initAnimations = () => {
          // Loader
          const tl = gsap.timeline();
          tl.to('.loader-counter', { y: 0, duration: 1, ease: 'power4.out' })
            .to('.loader-progress', { width: '100%', duration: 1.2, ease: 'expo.inOut' }, 0)
            .to('.loader-counter', { y: '-100%', duration: 0.5, ease: 'power2.in' }, 1.5)
            .to('.loader', { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut' }, 1.8)
            .to('.hero-title-l, .hero-title-r', { y: 0, duration: 1.4, ease: 'power3.out', stagger: 0.1 }, 2.0);

          // Hero Parallax
          gsap.to('.hero-title-l', { x: '-15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-title-r', { x: '15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-img', { scale: 1.2, y: '20%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

          // Intro Scrub
          const introText = document.querySelector('.intro-scrub-text');
          if(introText) {
              splitTextToScrub(introText);
              gsap.to('.scrub-word', {
                  opacity: 1, color: '#000000', stagger: 0.05, ease: 'none',
                  scrollTrigger: { trigger: introText, start: 'top 80%', end: 'bottom 40%', scrub: true }
              });
          }

          // Card Stack Rotation
          const cards = gsap.utils.toArray('.card-item');
          cards.forEach((card, i) => {
              const inner = card.querySelector('.card-inner');
              const rot = (i % 2 === 0 ? 3 : -3) + (Math.random() * 2 - 1);
              if (i < cards.length - 1) {
                   gsap.to(inner, {
                      scale: 0.9, rotation: rot, y: -30, filter: 'blur(5px)', opacity: 0.6, ease: 'none',
                      scrollTrigger: { trigger: cards[i+1], start: 'top bottom', end: 'top 20%', scrub: true }
                  });
              }
          });

          // Horizontal Scroll Section
          const horizSection = document.querySelector('#horiz-scroll');
          if (horizSection) {
            const horizWrap = horizSection.querySelector('.horiz-wrap');
            gsap.to(horizWrap, {
              x: () => -(horizWrap.scrollWidth - window.innerWidth),
              ease: "none",
              scrollTrigger: {
                trigger: horizSection,
                start: "top top",
                end: () => `+=${horizWrap.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
              }
            });
          }

          // Parallax Grid
          const parallaxGrid = document.querySelector('#parallax-grid');
          if (parallaxGrid) {
            const cols = parallaxGrid.querySelectorAll('.parallax-col');
            cols.forEach((col, i) => {
              const speed = (i + 1) * 30;
              gsap.to(col, {
                y: -speed * 2,
                ease: "none",
                scrollTrigger: {
                  trigger: parallaxGrid,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              });
            });
          }

          // Inverted Reveal
          const darkSection = document.querySelector('#inverted-section');
          if (darkSection) {
            gsap.from(darkSection.querySelectorAll('.reveal-item'), {
              y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out",
              scrollTrigger: { trigger: darkSection, start: "top 70%" }
            });
          }

          // Philosophy Reveal
          gsap.from('.wrapper > section:last-of-type h2', {
              scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out',
              scrollTrigger: { trigger: '.wrapper > section:last-of-type', start: 'top 75%' }
          });
      };

      // Make visible and start
      document.body.style.opacity = 1;
      initAnimations();
    
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
      

<div className="noise"></div>

<div className="loader fixed inset-0 z-[9999] bg-[#0A0A0A] text-white flex flex-col items-center justify-center">
<div className="overflow-hidden h-[1.2em] mb-6">
<div className="loader-counter display-font text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-full">
          100
        </div>
</div>
<div className="w-64 h-[1px] bg-white/10 overflow-hidden">
<div className="loader-progress w-0 h-full bg-white"></div>
</div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white mix-blend-exclusion">
<div className="display-font text-lg font-semibold tracking-tighter flex items-center gap-2">
        OBLIQUE
      </div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#">Work</a>
<a className="hover:opacity-100 transition-opacity" href="#">Studio</a>
<a className="hover:opacity-100 transition-opacity" href="#">News</a>
<a className="hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
<button className="md:hidden group">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="menu"></i>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 w-full h-full hero-img-wrap will-change-transform">
<img alt="Hero" className="w-full h-full object-cover brightness-[0.5] hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/820a6b98-1866-428e-8ec7-a7b50fbb1095_3840w.webp"/>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-exclusion py-32 px-6 md:px-12">
<div className="overflow-hidden self-start">
<h1 className="hero-text-huge hero-title-l translate-y-full block">
              OB
            </h1>
</div>
<div className="overflow-hidden self-end">
<h1 className="hero-text-huge hero-title-r translate-y-full block italic font-light">
              LIQUE
            </h1>
</div>
</div>
<div className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-[0.2em]">
            Architecture / Research
          </span>
<span className="text-[10px] uppercase tracking-[0.2em]">Est. 2025</span>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/10 pt-4">
<span className="text-xs font-mono text-gray-400">01 — MANIFESTO</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="display-font text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-6xl intro-scrub-text text-black">
              Architecture is not about filling space. It is about creating the
              void that remains. We excavate the atmosphere to reveal the
              essential silence of a place.
            </h2>
</div>
</div>
</section>

<section className="stack-section pb-32 perspective-stack">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Case Studies
              </span>
</div>
<h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">
              RECENT
              <br/>
              ARTIFACTS
            </h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
              View Archive
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="stack-container px-4 md:px-0">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">01 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                    VOID RESIDENCE
                  </h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                    Kyoto, Japan
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                    A minimalist concrete residence composed entirely of shadows
                    and planes. A study in absolute privacy.
                  </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      Residential
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      2023
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Silent Villa" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97c65e8c-b22b-4453-854a-d8fcd8c0189d_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">02 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                    AETHER GALLERY
                  </h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                    Berlin, Germany
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                    An exhibition space that disappears into the fog. White on
                    white materials create an infinite horizon.
                  </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      Public
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      2024
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Vertical Farm" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e51b786-c9d3-46ed-9b4f-4120dffdfffb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">03 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">
                    ECHO TOWER
                  </h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                    Seattle, USA
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                    A monolithic structure reflecting the constant rain. Glass
                    and steel merge to form a vertical river.
                  </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      Concept
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">
                      2025
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Nordic Cliff" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a82ca5b-ffa7-4e34-81d1-7b20a0bbd06d_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>
<section className="relative h-screen overflow-hidden bg-[var(--c-bg)] border-t border-black/5" id="horiz-scroll">
<div className="horiz-wrap flex h-full w-[300vw]">
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
              01 — CAPABILITY
            </span>
<h2 className="display-font text-6xl md:text-8xl font-medium tracking-tight">
              STRATEGY
            </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
              Defining the problem before shaping the solution. We analyze
              cultural currents to position projects where they belong.
            </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#f0f0f2]">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
              02 — CAPABILITY
            </span>
<h2 className="display-font text-6xl md:text-8xl font-medium tracking-tight">
              SPACE
            </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
              Physical environments that breathe. Architecture as a frame for
              life, stripping away the inessential.
            </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
              03 — CAPABILITY
            </span>
<h2 className="display-font text-6xl md:text-8xl font-medium tracking-tight">
              DIGITAL
            </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
              Translating physical sensibilities into screens. Tactile digital
              experiences that respect the user's attention.
            </p>
</div>
</div>
</section>
<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] overflow-hidden" id="parallax-grid">
<div className="mb-24 flex justify-between items-end">
<h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">
            STUDIO
            <br/>
            ATMOSPHERE
          </h2>
<p className="text-xs font-mono text-gray-400 hidden md:block">
            PROCESS / MATERIALS / RAW
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 min-h-[120vh]">
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-20">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b06aa955-b6b1-4e6f-b981-73a9b99d4089_1600w.webp"/>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47fe88db-5cb4-420e-a432-93e70710424e_1600w.webp"/>
<div className="p-8 flex flex-col justify-center aspect-[4/5] bg-gray-100">
<span className="display-font text-4xl">Aa</span>
<span className="text-xs text-gray-400 mt-2">Space Grotesk</span>
</div>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/accbf142-6114-4514-998a-cc7f14a62c91_1600w.jpg"/>
<div className="p-8 border border-black/5 bg-white flex items-center justify-center text-center aspect-square">
<p className="font-mono text-xs leading-relaxed tracking-widest uppercase">
                "Form follows
                
                fiction."
                
                
                — Oblique
              </p>
</div>
<img className="w-full aspect-[4/3] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dd84541-a76d-49cb-bf81-43adff44a39a_1600w.webp"/>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-40 hidden md:flex">
<div className="w-full aspect-[3/4] bg-[#111] text-white flex items-center justify-center">
<i className="w-12 h-12 opacity-50" data-lucide="box"></i>
</div>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/086cf2b0-6c11-4854-be3e-89d7f32408a1_1600w.webp"/>
</div>
</div>
</section>
<section className="py-48 bg-[#0A0A0A] text-white relative z-20" id="inverted-section">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
<div className="reveal-item">
<span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">
              RECOGNITION
            </span>
<h2 className="display-font text-5xl md:text-7xl font-medium tracking-tighter leading-none">
              SELECTED
              <br/>
              AWARDS
            </h2>
</div>
<div className="flex flex-col gap-0 reveal-item">
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                Pritzker Emerging
              </span>
<span className="text-xs font-mono text-gray-500">2024</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                Dezeen Awards / Gold
              </span>
<span className="text-xs font-mono text-gray-500">2023</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                Mies van der Rohe
              </span>
<span className="text-xs font-mono text-gray-500">2023</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white">
                AIA Honor Award
              </span>
<span className="text-xs font-mono text-gray-500">2022</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
<h2 className="display-font text-3xl md:text-5xl font-semibold tracking-tight mb-8 relative z-10">
          Silence is the
          <span className="text-gray-400 italic font-light">loudest sound.</span>
</h2>
<div className="max-w-lg text-gray-500 font-light leading-relaxed relative z-10">
          We reduce until only the truth remains. Every project is an attempt to
          capture the invisible.
        </div>

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</section>
</div>


<footer className="footer-sticky">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 text-center w-full max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-gray-300">
            Accepting new commissions
          </span>
</div>
<a className="block group" href="mailto:hello@oblique.com">
<h2 className="display-font text-[10vw] leading-[0.8] font-semibold tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
            START PROJECT
          </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              Socials
            </span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              Instagram
            </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              LinkedIn
            </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              Are.na
            </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              Office
            </span>
<p className="text-xs text-gray-400">Akersgata 12 0158 Oslo Norway</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              Contact
            </span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              hello@littleline.com
            </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              +47 22 33 44 55
            </a>
</div>
<div className="flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              © 2025
            </span>
<div className="text-[10px] text-gray-600 uppercase tracking-widest">
              Oblique Studio
            </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
