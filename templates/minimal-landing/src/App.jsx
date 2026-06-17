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
        if(!el) return;
        const text = el.innerText;
        el.innerHTML = text.split(' ').map(word => `<span class="scrub-word inline-block opacity-10 transition-colors duration-200">${word}&nbsp;</span>`).join('');
      };

      const initAnimations = () => {
        // 1. Hero Entrance (Loader removed)
        const tl = gsap.timeline();
        // Start hero animations immediately
        tl.to('.hero-img', { opacity: 1, scale: 1, duration: 2, ease: 'expo.out' }, 0)
          .from('.hero-title-l', { x: -100, opacity: 0, duration: 1.5, ease: 'power3.out' }, 0.2)
          .from('.hero-title-r', { x: 100, opacity: 0, duration: 1.5, ease: 'power3.out' }, 0.2);

        // 2. Hero Parallax
        if(document.querySelector('.hero-title-l')) {
          gsap.to('.hero-title-l', { x: '-20%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-title-r', { x: '20%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-img', { y: '15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
        }

        // 3. Intro Text Scrub
        const introText = document.querySelector('.intro-scrub-text');
        if(introText) {
            splitTextToScrub(introText);
            gsap.to('.scrub-word', { opacity: 1, color: '#000', stagger: 0.1, ease: 'none', scrollTrigger: { trigger: introText, start: 'top 85%', end: 'bottom 45%', scrub: true } });
        }

        // 4. Project Sticky List
        if (window.innerWidth > 768) {
          const projectWrapper = document.querySelector('.project-wrapper');
          if(projectWrapper) {
              ScrollTrigger.create({ trigger: '.project-wrapper', start: 'top top', end: 'bottom bottom', pin: '.project-images' });
              const projects = document.querySelectorAll('.project-item');
              const images = document.querySelectorAll('.project-img-container');
              projects.forEach((item, i) => {
                ScrollTrigger.create({
                  trigger: item, start: 'top center', end: 'bottom center',
                  onEnter: () => { images.forEach(img => img.classList.remove('active')); if(images[i]) images[i].classList.add('active'); item.classList.add('active'); },
                  onEnterBack: () => { images.forEach(img => img.classList.remove('active')); if(images[i]) images[i].classList.add('active'); item.classList.add('active'); },
                  onLeave: () => item.classList.remove('active'),
                  onLeaveBack: () => item.classList.remove('active')
                });
              });
          }
        }

        // 5. Horizontal Scroll
        const horizSection = document.querySelector('#horiz-scroll');
        if (horizSection && window.innerWidth > 768) {
          const horizWrap = horizSection.querySelector('.horiz-wrap');
          gsap.to(horizWrap, {
            x: () => -(horizWrap.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: horizSection,
              start: "top top",
              end: () => `+=${horizWrap.scrollWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true
            }
          });
        }

        // 6. Parallax Grid
        const parallaxGrid = document.querySelector('#parallax-grid');
        if (parallaxGrid) {
          const cols = parallaxGrid.querySelectorAll('.parallax-col');
          cols.forEach((col, i) => {
            const speed = (i + 1) * 50;
            gsap.to(col, {
              y: (i % 2 === 0 ? -speed : speed),
              ease: "none",
              scrollTrigger: { trigger: parallaxGrid, start: "top bottom", end: "bottom top", scrub: true }
            });
          });
        }

        // 7. Inverted Reveal
        const darkSection = document.querySelector('#inverted-section');
        if (darkSection) {
          const items = darkSection.querySelectorAll('.reveal-item');
          gsap.fromTo(items,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: darkSection, start: "top 60%" } }
          );
          gsap.to(darkSection.querySelector('.w-full.h-px'), {
              scaleX: 1, duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: darkSection, start: "top 60%" }
          });
        }
      };

      document.body.style.opacity = 1;
      initAnimations();
    


      (function() {
        const btn = document.getElementById('menu-toggle');
        const menu = document.getElementById('mobile-menu');
        const content = document.getElementById('mobile-menu-content');
        const iconOpen = btn.querySelector('.icon-open');
        const iconClose = btn.querySelector('.icon-close');
        let isOpen = false;

        btn.addEventListener('click', () => {
          isOpen = !isOpen;
          if (isOpen) {
            menu.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('translate-y-8');
            iconOpen.classList.replace('opacity-100', 'opacity-0');
            iconOpen.classList.add('rotate-90');
            iconClose.classList.replace('opacity-0', 'opacity-100');
            iconClose.classList.remove('-rotate-90');
            document.body.style.overflow = 'hidden';
          } else {
            menu.classList.add('opacity-0', 'pointer-events-none');
            content.classList.add('translate-y-8');
            iconOpen.classList.replace('opacity-0', 'opacity-100');
            iconOpen.classList.remove('rotate-90');
            iconClose.classList.replace('opacity-100', 'opacity-0');
            iconClose.classList.add('-rotate-90');
            document.body.style.overflow = '';
          }
        });
      })();
    
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
      
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-geist">
      .font-geist { font-family: 'Geist', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-roboto">
      .font-roboto { font-family: 'Roboto', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-montserrat">
      .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-poppins">
      .font-poppins { font-family: 'Poppins', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-playfair">
      .font-playfair { font-family: 'Playfair Display', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-instrument-serif">
      .font-instrument-serif { font-family: 'Instrument Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-merriweather">
      .font-merriweather { font-family: 'Merriweather', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-bricolage">
      .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-jakarta">
      .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-manrope">
      .font-manrope { font-family: 'Manrope', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-space-grotesk">
      .font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-work-sans">
      .font-work-sans { font-family: 'Work Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-pt-serif">
      .font-pt-serif { font-family: 'PT Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-geist-mono">
      .font-geist-mono { font-family: 'Geist Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-space-mono">
      .font-space-mono { font-family: 'Space Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/>
<style id="all-fonts-style-font-quicksand">
      .font-quicksand { font-family: 'Quicksand', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/>
<style id="all-fonts-style-font-nunito">
      .font-nunito { font-family: 'Nunito', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/>
<style id="all-fonts-style-font-newsreader">
      .font-newsreader { font-family: 'Newsreader', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-google-sans-flex" rel="stylesheet"/>
<style id="all-fonts-style-font-google-sans-flex">
      .font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-oswald" rel="stylesheet"/>
<style id="all-fonts-style-font-oswald">
      .font-oswald { font-family: 'Oswald', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-dm-sans">
      .font-dm-sans { font-family: 'DM Sans', sans-serif !important; }
    </style>



<nav className="fixed top-0 w-full px-6 py-6 md:px-12 flex justify-between items-start z-50 mix-blend-exclusion text-white pointer-events-none">
<div className="flex flex-col">
<div className="display-font cursor-pointer pointer-events-auto text-xl font-bold tracking-tighter" onclick="window.location.href='/home'" role="button">
          KAIROS
        </div>
<span className="text-[10px] uppercase tracking-widest opacity-60 mt-1 hidden md:block">
          Spatial / Digital / Void
        </span>
</div>
<div className="hidden md:flex flex-col items-end gap-1 pointer-events-auto">
<a className="uppercase hover:line-through transition-all text-xs font-medium tracking-widest" href="/work">
          work
        </a>
<a className="uppercase hover:line-through transition-all text-xs font-medium tracking-widest" href="/studio">
          Studio
        </a>
<a className="uppercase hover:line-through transition-all text-xs font-medium tracking-widest" href="/new">
          new
        </a>
<a className="uppercase hover:line-through transition-all text-xs font-medium tracking-widest" href="/contact">
          Contact
        </a>
</div>
<button className="md:hidden pointer-events-auto relative w-8 h-8 flex items-center justify-center" id="menu-toggle">
<svg className="icon-open w-8 h-8 text-white transition-all duration-300 opacity-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="icon-close w-8 h-8 text-white absolute transition-all duration-300 opacity-0 -rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="M6 6 18 18"></path>
</svg>
</button>
</nav>
<div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-all duration-500" id="mobile-menu">
<div className="flex flex-col gap-6 text-center translate-y-8 transition-transform duration-500 delay-75" id="mobile-menu-content">
<a className="display-font text-5xl md:text-6xl font-medium tracking-tighter text-white hover:text-gray-400 hover:line-through transition-all uppercase" href="/work">
          Work
        </a>
<a className="display-font text-5xl md:text-6xl font-medium tracking-tighter text-white hover:text-gray-400 hover:line-through transition-all uppercase" href="/studio">
          Studio
        </a>
<a className="display-font text-5xl md:text-6xl font-medium tracking-tighter text-white hover:text-gray-400 hover:line-through transition-all uppercase" href="/new">
          New
        </a>
<a className="display-font text-5xl md:text-6xl font-medium tracking-tighter text-white hover:text-gray-400 hover:line-through transition-all uppercase" href="/contact">
          Contact
        </a>
</div>
</div>

<div className="wrapper">

<section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] h-[100dvh]" id="hero">
<div className="absolute inset-0 w-full h-full opacity-60">
<div className="absolute inset-0 z-10 bg-[#050505]">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<video autoplay="" className="w-full h-full object-cover grayscale brightness-50" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-man-in-white-clothes-walking-in-39634-large.mp4" type="video/mp4"/>
</video>
</div>
<div className="md:px-32 flex flex-col md:flex-row text-white w-full z-20 pr-12 pl-12 relative items-center justify-between">
<h1 className="hero-title-l display-font text-[10vw] leading-[0.8] font-medium text-white tracking-tighter" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
            KAIROS
          </h1>
<h1 className="hero-title-r display-font text-[10vw] leading-[0.8] md:text-right font-medium italic tracking-tighter text-white" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
            STUDIO
          </h1>
</div>
<div className="absolute bottom-12 w-full px-6 md:px-12 flex justify-between items-end text-white/50 text-xs font-mono uppercase tracking-widest mix-blend-exclusion z-30">
<div className="hidden md:block">Oslo, Norway</div>
<div className="animate-bounce">Scroll to Explore</div>
<div className="hidden md:block">Est. 2021</div>
</div>
</section>

<section className="py-24 bg-[#050505] text-white overflow-hidden border-b border-white/10">
<div className="marquee-container">
<div className="marquee-content display-font text-[8vw] md:text-[6vw] font-medium leading-none tracking-tight text-transparent stroke-text" style={{animationDuration: '60s'}}>
            RESIDENTIAL — CULTURAL — DIGITAL — EXPERIMENTAL — ARCHIVE —
            DESIGNING THE VOID — ARCHITECTURE OF SILENCE — FORM FOLLOWS FICTION
          </div>
</div>
<style>
          .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        </style>
</section>

<section className="relative bg-[#050505] text-white">
<section className="relative py-24 px-6 md:px-12 bg-[#050505] text-white z-10" id="archive-list">
<div className="max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<h2 className="display-font text-6xl md:text-9xl tracking-tighter leading-none">
                INDEX
              </h2>
<div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
<button className="text-white border-b border-white pb-1">
                  All
                </button>
<button className="hover:text-white transition-colors pb-1">
                  Architecture
                </button>
<button className="hover:text-white transition-colors pb-1">
                  Interior
                </button>
<button className="hover:text-white transition-colors pb-1">
                  Digital
                </button>
</div>
</div>
<div className="border-t border-white/20">

<div className="archive-item group relative border-b border-white/10">
<div className="flex flex-col md:flex-row py-8 md:items-center relative z-20 mix-blend-difference">
<div className="md:w-1/12 text-xs font-mono text-gray-500">
                    01
                  </div>
<div className="md:w-5/12">
<h3 className="display-font text-4xl md:text-6xl group-hover:pl-8 transition-all duration-300">
                      VOID RES.
                    </h3>
</div>
<div className="md:w-3/12 text-sm font-light text-gray-400 mt-2 md:mt-0">
                    Kyoto, Japan
                  </div>
<div className="md:w-2/12 text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 md:mt-0">
                    Residential
                  </div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video object-cover grayscale opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10 hidden md:block" src="https://images.unsplash.com/photo-1678694270945-fda8641bdb0a?w=3840&amp;q=80"/>
</div>

<div className="archive-item group relative border-b border-white/10">
<div className="flex flex-col md:flex-row py-8 md:items-center relative z-20 mix-blend-difference">
<div className="md:w-1/12 text-xs font-mono text-gray-500">
                    02
                  </div>
<div className="md:w-5/12">
<h3 className="display-font text-4xl md:text-6xl group-hover:pl-8 transition-all duration-300">
                      AETHER
                    </h3>
</div>
<div className="md:w-3/12 text-sm font-light text-gray-400 mt-2 md:mt-0">
                    Berlin, Germany
                  </div>
<div className="md:w-2/12 text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 md:mt-0">
                    Cultural
                  </div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video object-cover grayscale opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10 hidden md:block" src="https://images.unsplash.com/photo-1683029083464-4b28b07d7f09?w=1600&amp;q=80"/>
</div>

<div className="archive-item group relative border-b border-white/10">
<div className="flex flex-col md:flex-row py-8 md:items-center relative z-20 mix-blend-difference">
<div className="md:w-1/12 text-xs font-mono text-gray-500">
                    03
                  </div>
<div className="md:w-5/12">
<h3 className="display-font text-4xl md:text-6xl group-hover:pl-8 transition-all duration-300">
                      ECHO TWR.
                    </h3>
</div>
<div className="md:w-3/12 text-sm font-light text-gray-400 mt-2 md:mt-0">
                    Seattle, WA
                  </div>
<div className="md:w-2/12 text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 md:mt-0">
                    Commercial
                  </div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video object-cover grayscale opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10 hidden md:block" src="https://images.unsplash.com/photo-1651551590552-33174178e327?w=3840&amp;q=80"/>
</div>

<div className="archive-item group relative border-b border-white/10">
<div className="flex flex-col md:flex-row py-8 md:items-center relative z-20 mix-blend-difference">
<div className="md:w-1/12 text-xs font-mono text-gray-500">
                    04
                  </div>
<div className="md:w-5/12">
<h3 className="display-font text-4xl md:text-6xl group-hover:pl-8 transition-all duration-300">
                      MONOLITH
                    </h3>
</div>
<div className="md:w-3/12 text-sm font-light text-gray-400 mt-2 md:mt-0">
                    Oslo, Norway
                  </div>
<div className="md:w-2/12 text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 md:mt-0">
                    Installation
                  </div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video object-cover grayscale opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10 hidden md:block" src="https://images.unsplash.com/photo-1594317568093-b27c52bb8d73?w=1600&amp;q=80"/>
</div>

<div className="archive-item group relative border-b border-white/10">
<div className="flex flex-col md:flex-row py-8 md:items-center relative z-20 mix-blend-difference">
<div className="md:w-1/12 text-xs font-mono text-gray-500">
                    05
                  </div>
<div className="md:w-5/12">
<h3 className="display-font text-4xl md:text-6xl group-hover:pl-8 transition-all duration-300">
                      SÄKRA
                    </h3>
</div>
<div className="md:w-3/12 text-sm font-light text-gray-400 mt-2 md:mt-0">
                    Stockholm, SWE
                  </div>
<div className="md:w-2/12 text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 md:mt-0">
                    Digital
                  </div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video object-cover grayscale opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10 hidden md:block" src="https://images.unsplash.com/photo-1592202681439-58723118d3d1?w=3840&amp;q=80"/>
</div>
</div>
</div>
</section>
</section>
<section className="bg-[#0A0A0A] text-white px-6 md:px-12 border-t border-white/10 py-20 md:py-32" id="featured-detail">
<div className="max-w-[1800px] mx-auto">
<div className="mb-24">
<h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
              In Depth
            </h2>
<p className="display-font text-4xl md:text-6xl max-w-2xl leading-tight">
              CASE STUDY 01:
              <span className="text-gray-500">VOID RESIDENCE</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div className="relative">
<div className="sticky top-32">
<p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-12">
                  Located in the dense urban fabric of Kyoto, the Void Residence
                  turns inward. A series of concrete planes fold to create a
                  central courtyard—a lung for the house that captures light and
                  rain.
                </p>
<div className="grid grid-cols-2 gap-8 text-xs font-mono uppercase tracking-widest text-gray-500">
<div>
<span className="block text-white mb-2">Status</span>
                    Completed 2023
                  </div>
<div>
<span className="block text-white mb-2">Area</span>
                    240 SQM
                  </div>
<div>
<span className="block text-white mb-2">Team</span>
                    J. Doe, A. Smith
                  </div>
<div>
<span className="block text-white mb-2">Photo</span>
                    K. Yamashita
                  </div>
</div>
</div>
</div>
<div className="flex flex-col gap-8">
<img className="w-full aspect-[4/5] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97c65e8c-b22b-4453-854a-d8fcd8c0189d_1600w.webp"/>
<img className="w-full aspect-[4/3] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/275ff158-0484-45d3-89b9-491a0c2bc5cd_1600w.webp"/>
<div className="bg-[#111] p-12 flex items-center justify-center text-center border border-white/10 aspect-square">
<p className="display-font text-3xl">
                  "SILENCE IS NOT EMPTY. IT IS FULL OF ANSWERS."
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-[#EAEAEA] text-black overflow-hidden py-24 md:py-0 md:h-screen flex flex-col md:flex-row items-center" id="horiz-scroll">
<div className="horiz-wrap flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-24 items-start md:items-center w-full md:w-auto will-change-transform">
<div className="flex-shrink-0 w-full md:w-[30vw] flex flex-col gap-6">
<h2 className="display-font text-6xl md:text-8xl tracking-tighter">
              PROCESS
            </h2>
<p className="text-lg md:text-xl font-light text-gray-600 max-w-sm">
              We define the void before we build the walls. A subtractive
              methodology.
            </p>
</div>
<div className="card-item flex-shrink-0 w-full md:w-[25vw] aspect-[3/4] bg-white p-8 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 perspective-midrange">
<div className="card-inner w-full h-full flex flex-col justify-between">
<span className="font-mono text-xs tracking-widest text-gray-400">
                01 — CONCEPT
              </span>
<div className="h-3/5 overflow-hidden">
<img className="object-cover w-full h-full grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200"/>
</div>
<p className="text-sm font-medium">
                Sketching the invisible lines of force.
              </p>
</div>
</div>
<div className="card-item flex-shrink-0 w-full md:w-[25vw] aspect-[3/4] bg-white p-8 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 perspective-midrange">
<div className="card-inner w-full h-full flex flex-col justify-between">
<span className="font-mono text-xs tracking-widest text-gray-400">
                02 — MATERIALITY
              </span>
<div className="h-3/5 overflow-hidden">
<img className="object-cover w-full h-full grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1200"/>
</div>
<p className="text-sm font-medium">
                Selecting textures that catch the light.
              </p>
</div>
</div>
<div className="card-item flex-shrink-0 w-full md:w-[25vw] aspect-[3/4] bg-white p-8 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 perspective-midrange">
<div className="card-inner w-full h-full flex flex-col justify-between">
<span className="font-mono text-xs tracking-widest text-gray-400">
                03 — VOID
              </span>
<div className="h-3/5 overflow-hidden">
<img className="object-cover w-full h-full grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1668910251266-081835549c07?w=3840&amp;q=80"/>
</div>
<p className="text-sm font-medium">
                Precision in every joint and shadow.
              </p>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-[15vw] flex items-center justify-center py-12 md:py-0">
<div className="w-24 h-24 rounded-full border border-black flex items-center justify-center animate-[spin_10s_linear_infinite]">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="px-6 bg-[#EAEAEA] text-[#050505] flex flex-col items-center justify-center text-center relative overflow-hidden py-24 md:py-48" id="inverted-section">
<div className="max-w-4xl z-10">
<div className="overflow-hidden">
<h2 className="reveal-item display-font text-6xl md:text-9xl tracking-tighter mb-2" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}>
              REDUCTIVE
            </h2>
</div>
<div className="overflow-hidden">
<h2 className="reveal-item display-font text-6xl md:text-9xl tracking-tighter mb-12 italic font-serif" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}>
              ESSENTIALISM
            </h2>
</div>
<div className="w-full h-px bg-black/20 mb-12 reveal-item scale-x-0 origin-left" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}></div>
<p className="reveal-item text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto text-gray-600" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}>
            We do not decorate. We do not cover. We reveal.
            <br/>
            Architecture is not about adding to the world, but framing what is
            already there.
            <span className="block mt-12 font-mono text-xs uppercase tracking-widest text-black">
              — The Kairos Manifesto, 2025
            </span>
</p>
</div>
</section>
</div>


<footer className="relative bg-white text-black pb-12 px-6 md:px-12 pt-20 md:pt-32">
<div className="max-w-[1800px] mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-32">
<div>
<h2 className="display-font text-[12vw] leading-[0.8] tracking-tighter mb-8">
              NEXT?
            </h2>
<a className="inline-block border-b-2 border-black pb-1 text-xl md:text-3xl hover:opacity-50 transition-opacity" href="mailto:hello@kairos.com">
              hello@kairos.com
            </a>
</div>
<div className="flex flex-col justify-end items-start md:items-end">
<p className="max-w-md text-lg md:text-xl font-light leading-relaxed mb-8 md:text-right">
              We are currently accepting new commissions for 2025. Let's discuss
              the void.
            </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-8">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest font-bold">
              Kairos Studio
            </span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">
              Akersgata 12, Oslo
            </span>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-[10px] uppercase tracking-widest hover:underline" href="#">
              Legal
            </a>
<a className="text-[10px] uppercase tracking-widest hover:underline" href="#">
              Privacy
            </a>
<span className="text-[10px] uppercase tracking-widest text-gray-400">
              © 2025
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
