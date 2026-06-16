import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      function toggleNavMenu(id) {
        const menus = ['nav-menu-1','nav-menu-2','nav-menu-3','nav-menu-4'];
        const overlay = document.getElementById('nav-overlay');
        const isAlreadyOpen = document.getElementById(id).querySelector('.nav-dropdown').classList.contains('open');
        menus.forEach(function(menuId) {
          const menu = document.getElementById(menuId);
          if (!menu) return;
          const dropdown = menu.querySelector('.nav-dropdown');
          const icon = menu.querySelector('iconify-icon');
          dropdown.classList.remove('open');
          if (icon) icon.style.transform = '';
        });
        if (!isAlreadyOpen) {
          const target = document.getElementById(id);
          const dropdown = target.querySelector('.nav-dropdown');
          const icon = target.querySelector('iconify-icon');
          dropdown.classList.add('open');
          if (icon) icon.style.transform = 'rotate(180deg)';
          overlay.classList.add('active');
        } else {
          overlay.classList.remove('active');
        }
      }
      function closeAllNavMenus() {
        const menus = ['nav-menu-1','nav-menu-2','nav-menu-3','nav-menu-4'];
        const overlay = document.getElementById('nav-overlay');
        menus.forEach(function(menuId) {
          const menu = document.getElementById(menuId);
          if (!menu) return;
          const dropdown = menu.querySelector('.nav-dropdown');
          const icon = menu.querySelector('iconify-icon');
          dropdown.classList.remove('open');
          if (icon) icon.style.transform = '';
        });
        if (overlay) overlay.classList.remove('active');
      }
    


    function toggleMobileMenu() {
      const overlay = document.getElementById('mobile-menu-overlay');
      const burgerBtn = document.getElementById('mobile-burger-btn');
      const isOpen = overlay.classList.contains('open');
      if (isOpen) {
        overlay.classList.remove('open');
        burgerBtn.classList.remove('burger-open');
        document.body.style.overflow = '';
      } else {
        overlay.classList.add('open');
        burgerBtn.classList.add('burger-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function handleMobileOverlayClick(event) {
      if (event.target === document.getElementById('mobile-menu-overlay')) {
        toggleMobileMenu();
      }
    }

    function toggleMobileAccordion(id, btn) {
      const content = document.getElementById(id);
      const chevron = btn.querySelector('.mob-chevron');
      const allContents = document.querySelectorAll('.mobile-nav-accordion-content');
      const allChevrons = document.querySelectorAll('.mob-chevron');
      const isOpen = content.classList.contains('open');
      allContents.forEach(function(c) { c.classList.remove('open'); });
      allChevrons.forEach(function(ch) { ch.style.transform = ''; });
      if (!isOpen) {
        content.classList.add('open');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    }

    window.addEventListener('scroll', function() {
      const nav = document.querySelector('[data-element-id="aura-emncwkn1r6k4kf9jy"]');
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add('is-scrolled');
        } else {
          nav.classList.remove('is-scrolled');
        }
      }
    });
  


          function switchUseCase(index) {
        // Handle Tabs
        document.querySelectorAll('.uc-tab').forEach((tab, i) => {
            const isTarget = (i + 1) === index;
            const icon = tab.querySelector('.tab-icon');
            const title = tab.querySelector('.tab-title');

            if (isTarget) {
                // Active State
                tab.classList.remove('border-transparent', 'hover:border-white/20');
                tab.classList.add('border-[#7FDBFF]', '-translate-y-1', 'bg-white/[0.03]', 'shadow-[0_-10px_20px_-10px_rgba(127,219,255,0.15)]', 'rounded-t-xl');
                
                title.classList.remove('text-slate-500', 'font-normal');
                title.classList.add('text-white', 'font-medium');
                
                icon.classList.remove('text-slate-500');
                icon.classList.add('text-[#7FDBFF]');
            } else {
                // Inactive State
                tab.classList.add('border-transparent', 'hover:border-white/20');
                tab.classList.remove('border-[#7FDBFF]', '-translate-y-1', 'bg-white/[0.03]', 'shadow-[0_-10px_20px_-10px_rgba(127,219,255,0.15)]', 'rounded-t-xl');
                
                title.classList.add('text-slate-500', 'font-normal');
                title.classList.remove('text-white', 'font-medium');
                
                icon.classList.add('text-slate-500');
                icon.classList.remove('text-[#7FDBFF]');
            }
        });

        // Handle Visuals
        document.querySelectorAll('.uc-visual').forEach((visual, i) => {
            const isTarget = (i + 1) === index;
            if (isTarget) {
                visual.classList.remove('hidden');
                // Retrigger entrance animation for snappier feel
                visual.classList.remove('animate-in', 'fade-in', 'slide-in-from-bottom-4');
                void visual.offsetWidth; // Trigger DOM reflow
                visual.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4');
            } else {
                visual.classList.add('hidden');
            }
        });
    }
        


    (function() {
            const container = document.getElementById('testimonials-container');
            if (!container) return;
            
            const cards = [
              document.getElementById('testimonial-card-1'),
              document.getElementById('testimonial-card-2'),
              document.getElementById('testimonial-card-3')
            ];
            
            const btns = container.querySelectorAll('button');
            
            let isAnimating = false;
            let positions = [0, 1, 2]; // Initial layout maps: card1 -> 0(left), card2 -> 1(center), card3 -> 2(right)
            
            const posClasses = {
              0: ["md:w-[400px]", "md:-translate-x-[130%]", "md:-translate-y-[50%]", "md:-rotate-[8deg]", "md:scale-[0.8]", "z-10", "md:opacity-40", "hover:md:opacity-80", "hover:z-20", "md:blur-[2px]", "hover:md:blur-none"],
              1: ["md:w-[480px]", "md:-translate-x-1/2", "md:-translate-y-[65%]", "z-30", "md:opacity-100", "md:rotate-0", "md:scale-110", "md:blur-none", "md:shadow-2xl"],
              2: ["md:w-[400px]", "md:translate-x-[30%]", "md:-translate-y-[50%]", "md:rotate-[8deg]", "md:scale-[0.8]", "z-10", "md:opacity-40", "hover:md:opacity-80", "hover:z-20", "md:blur-[2px]", "hover:md:blur-none"]
            };
            
            function updateCards() {
              cards.forEach((card, i) => {
                if (!card) return;
                Object.values(posClasses).forEach(clsArray => {
                  card.classList.remove(...clsArray);
                });
                card.classList.add(...posClasses[positions[i]]);
              });
            }
            
            window.handleTestimonialSwipe = function(direction) {
              if (isAnimating) return;
              isAnimating = true;
              
              btns.forEach(b => b.disabled = true);
              
              if (direction === 1) {
                // Next / Right Arrow
                positions = positions.map(p => (p === 0 ? 2 : p - 1));
              } else {
                // Prev / Left Arrow
                positions = positions.map(p => (p === 2 ? 0 : p + 1));
              }
              
              updateCards();
              
              setTimeout(() => {
                isAnimating = false;
                btns.forEach(b => b.disabled = false);
              }, 800); // Wait for transition duration
            };

            window.handleCardClick = function(clickedIndex) {
              if (isAnimating) return;
              const currentPos = positions[clickedIndex];
              if (currentPos === 1) return; // Already center
              
              if (currentPos === 0) {
                 window.handleTestimonialSwipe(-1); // Swipe left to bring it to center
              } else if (currentPos === 2) {
                 window.handleTestimonialSwipe(1); // Swipe right to bring it to center
              }
            };
            
            let touchStartX = 0;
            let touchEndX = 0;
            
            container.addEventListener('touchstart', e => {
              touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});
            
            container.addEventListener('touchend', e => {
              touchEndX = e.changedTouches[0].screenX;
              if (touchEndX < touchStartX - 50) window.handleTestimonialSwipe(1);
              if (touchEndX > touchStartX + 50) window.handleTestimonialSwipe(-1);
            }, {passive: true});
            
            // Initialization is handled natively by initial HTML classes, 
            // ensuring no FOUC (Flash of Unstyled Content).
          })();
  


        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-50 blur-md brightness-75 mix-blend-screen opacity-30" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="vi5SxDwDvEJMwkyTdyH8"></div>

</div></div>

<div className="flex flex-col overflow-hidden min-h-[850px] w-full max-w-7xl z-0 mr-auto ml-auto relative items-center">
<div className="aura-background-component z-0 w-full h-full absolute top-0 left-0" style={{maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)'}}>
</div>
<nav className="group sticky transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex [animation:animationIn_0.8s_ease-out_0.1s_both] [&amp;.is-scrolled]:max-w-5xl [&amp;.is-scrolled]:top-4 [&amp;.is-scrolled]:pt-3 [&amp;.is-scrolled]:pb-3 [&amp;.is-scrolled]:px-6 [&amp;.is-scrolled]:bg-[#1E1E1E]/80 [&amp;.is-scrolled]:backdrop-blur-xl [&amp;.is-scrolled]:rounded-full [&amp;.is-scrolled]:border-[#D6BFA3]/20 [&amp;.is-scrolled]:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] z-50 w-full max-w-7xl border-transparent border mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 sm:pr-8 sm:pl-8 top-0 items-center justify-between">
<style>
    .nav-dropdown { opacity: 0; visibility: hidden; margin-top: 1.5rem; transition: opacity 0.25s ease, visibility 0.25s ease, margin-top 0.25s ease; }
    .nav-dropdown.open { opacity: 1; visibility: visible; margin-top: 1rem; }
    .nav-overlay { position: fixed; inset: 0; z-index: 40; background: transparent; display: none; }
    .nav-overlay.active { display: block; }
    .nav-btn-active iconify-icon { transform: rotate(180deg); }

    /* Mobile menu overlay */
    #mobile-menu-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.35s ease, visibility 0.35s ease;
    }
    #mobile-menu-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    #mobile-menu-panel {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: min(320px, 90vw);
      background: linear-gradient(to bottom, #1E1E1E, #121212);
      border-left: 1px solid rgba(214,191,163,0.12);
      box-shadow: -20px 0 60px rgba(0,0,0,0.7);
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    #mobile-menu-overlay.open #mobile-menu-panel {
      transform: translateX(0);
    }

    .mobile-nav-section { border-bottom: 1px solid rgba(255,255,255,0.05); }
    .mobile-nav-accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .mobile-nav-accordion-content.open {
      max-height: 300px;
    }
    .burger-bar {
      display: block;
      width: 22px;
      height: 1.5px;
      background: #D6BFA3;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
      transform-origin: center;
    }
    .burger-open .burger-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .burger-open .burger-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .burger-open .burger-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  </style>

<div className="flex-1 flex gap-x-3 gap-y-3 items-center">
<svg className="w-[32px] h-[32px] drop-shadow-[0_0_8px_rgba(127,219,255,0.6)]" data-icon-replaced="true" fill="none" height="32" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill="#1E1E1E" stroke="#7FDBFF" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M25 7H13L7 16H25L19 25H7" stroke="#D6BFA3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="text-[#D6BFA3] font-manrope font-light text-xl sm:text-2xl tracking-tight">SynqorAI</span>
</div>

<div className="hidden md:flex gap-8 transition-all duration-500 group-[.is-scrolled]:bg-transparent group-[.is-scrolled]:border-transparent group-[.is-scrolled]:shadow-none bg-[#1E1E1E]/60 border-[#D6BFA3]/10 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center">

<div className="nav-overlay" id="nav-overlay" onclick="closeAllNavMenus()"></div>
<div className="relative" id="nav-menu-1">
<button className="nav-trigger flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D6BFA3]/70 hover:text-[#D6BFA3] transition-colors font-medium outline-none cursor-pointer" onclick="toggleNavMenu('nav-menu-1')">
        Capabilities
        <iconify-icon className="text-[10px] opacity-70 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#121212]/95 backdrop-blur-xl border border-[#D6BFA3]/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col p-2 z-50">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-[#7FDBFF]/10 flex items-center justify-center border border-[#7FDBFF]/20 group-hover/link:bg-[#7FDBFF]/20 transition-colors">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:workflow"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">Orchestration</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Autonomous logic</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-[#D6BFA3]/10 flex items-center justify-center border border-[#D6BFA3]/20 group-hover/link:bg-[#D6BFA3]/20 transition-colors">
<iconify-icon className="text-[#D6BFA3]" icon="lucide:network"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">Integrations</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Connect ecosystem</span>
</div>
</a>
</div>
</div>
<div className="relative" id="nav-menu-2">
<button className="nav-trigger flex uppercase hover:text-[#D6BFA3] transition-colors outline-none cursor-pointer text-xs font-medium text-[#D6BFA3]/70 tracking-widest gap-x-1.5 gap-y-1.5 items-center" onclick="toggleNavMenu('nav-menu-2')">
        Solutions
        <iconify-icon className="text-[10px] opacity-70 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#121212]/95 backdrop-blur-xl border border-[#D6BFA3]/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col p-2 z-50">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300" icon="lucide:building-2"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">Enterprise</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Global scale</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300" icon="lucide:rocket"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">Startups</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Rapid deployment</span>
</div>
</a>
</div>
</div>
<div className="relative" id="nav-menu-3">
<button className="nav-trigger flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D6BFA3]/70 hover:text-[#D6BFA3] transition-colors font-medium outline-none cursor-pointer" onclick="toggleNavMenu('nav-menu-3')">
        Resources
        <iconify-icon className="text-[10px] opacity-70 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#121212]/95 backdrop-blur-xl border border-[#D6BFA3]/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col p-2 z-50">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300" icon="lucide:book-open"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">Documentation</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Guides &amp; setup</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300" icon="lucide:terminal-square"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-slate-200 group-hover/link:text-white transition-colors tracking-normal">API Reference</span>
<span className="text-[10px] text-slate-500 font-normal tracking-normal">Endpoints</span>
</div>
</a>
</div>
</div>
<div className="relative" id="nav-menu-4">
<button className="nav-trigger flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D6BFA3]/70 hover:text-[#D6BFA3] transition-colors font-medium outline-none cursor-pointer" onclick="toggleNavMenu('nav-menu-4')">
        Company
        <iconify-icon className="text-[10px] opacity-70 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#121212]/95 backdrop-blur-xl border border-[#D6BFA3]/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col p-2 z-50 text-left">
<a className="px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium tracking-normal" href="#">About Us</a>
<a className="px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium tracking-normal" href="#">Careers</a>
<a className="px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium tracking-normal" href="#">Contact</a>
</div>
</div>

</div>

<div className="hidden md:flex flex-1 justify-end">
<button className="px-6 py-2.5 rounded-full bg-[#1E1E1E]/80 border border-[#D6BFA3]/20 text-[#D6BFA3] text-xs font-medium uppercase tracking-wider hover:bg-[#1E1E1E] hover:border-[#D6BFA3]/40 transition-all shadow-lg active:translate-y-[1px]">
      Contact Sales
    </button>
</div>

<div className="flex md:hidden items-center gap-3">
<button className="px-4 py-2 rounded-full bg-[#1E1E1E]/80 border border-[#D6BFA3]/20 text-[#D6BFA3] text-[10px] font-medium uppercase tracking-wider hover:bg-[#1E1E1E] hover:border-[#D6BFA3]/40 transition-all shadow-lg active:translate-y-[1px] whitespace-nowrap">
      Contact
    </button>

<button aria-label="Open menu" className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl bg-[#1E1E1E]/80 border border-[#D6BFA3]/10 shadow-lg transition-all duration-300 hover:border-[#D6BFA3]/30 active:scale-95 flex-shrink-0" id="mobile-burger-btn" onclick="toggleMobileMenu()">
<span className="burger-bar"></span>
<span className="burger-bar"></span>
<span className="burger-bar"></span>
</button>
</div>

<div id="mobile-menu-overlay" onclick="handleMobileOverlayClick(event)">
<div id="mobile-menu-panel">

<div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
<div className="flex items-center gap-2.5">
<svg fill="none" height="24" style={{width: '24px', height: '24px'}} viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill="#1E1E1E" stroke="#7FDBFF" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M25 7H13L7 16H25L19 25H7" stroke="#D6BFA3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="text-[#D6BFA3] font-manrope font-light text-lg tracking-tight">SynqorAI</span>
</div>
<button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95" onclick="toggleMobileMenu()">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
</button>
</div>

<div className="flex-1 py-2 overflow-y-auto">

<div className="mobile-nav-section">
<button className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[#D6BFA3]/80 hover:text-[#D6BFA3] uppercase tracking-widest transition-colors" onclick="toggleMobileAccordion('mob-acc-1', this)">
<span>Capabilities</span>
<svg className="mob-chevron w-4 h-4 text-slate-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mobile-nav-accordion-content px-6 pb-2" id="mob-acc-1">
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#7FDBFF]/10 flex items-center justify-center border border-[#7FDBFF]/20 flex-shrink-0">
<iconify-icon className="text-[#7FDBFF] text-sm" icon="lucide:workflow"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Orchestration</div>
<div className="text-[10px] text-slate-500">Autonomous logic</div>
</div>
</a>
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#D6BFA3]/10 flex items-center justify-center border border-[#D6BFA3]/20 flex-shrink-0">
<iconify-icon className="text-[#D6BFA3] text-sm" icon="lucide:network"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Integrations</div>
<div className="text-[10px] text-slate-500">Connect ecosystem</div>
</div>
</a>
</div>
</div>

<div className="mobile-nav-section">
<button className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[#D6BFA3]/80 hover:text-[#D6BFA3] uppercase tracking-widest transition-colors" onclick="toggleMobileAccordion('mob-acc-2', this)">
<span>Solutions</span>
<svg className="mob-chevron w-4 h-4 text-slate-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mobile-nav-accordion-content px-6 pb-2" id="mob-acc-2">
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="lucide:building-2"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Enterprise</div>
<div className="text-[10px] text-slate-500">Global scale</div>
</div>
</a>
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="lucide:rocket"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Startups</div>
<div className="text-[10px] text-slate-500">Rapid deployment</div>
</div>
</a>
</div>
</div>

<div className="mobile-nav-section">
<button className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[#D6BFA3]/80 hover:text-[#D6BFA3] uppercase tracking-widest transition-colors" onclick="toggleMobileAccordion('mob-acc-3', this)">
<span>Resources</span>
<svg className="mob-chevron w-4 h-4 text-slate-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mobile-nav-accordion-content px-6 pb-2" id="mob-acc-3">
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="lucide:book-open"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Documentation</div>
<div className="text-[10px] text-slate-500">Guides &amp; setup</div>
</div>
</a>
<a className="flex items-center gap-3 py-3 rounded-xl px-3 hover:bg-white/5 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="lucide:terminal-square"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">API Reference</div>
<div className="text-[10px] text-slate-500">Endpoints</div>
</div>
</a>
</div>
</div>

<div className="mobile-nav-section">
<button className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[#D6BFA3]/80 hover:text-[#D6BFA3] uppercase tracking-widest transition-colors" onclick="toggleMobileAccordion('mob-acc-4', this)">
<span>Company</span>
<svg className="mob-chevron w-4 h-4 text-slate-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mobile-nav-accordion-content px-6 pb-2" id="mob-acc-4">
<a className="block px-3 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium" href="#">About Us</a>
<a className="block px-3 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium" href="#">Careers</a>
<a className="block px-3 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium" href="#">Contact</a>
</div>
</div>
</div>

<div className="px-6 py-6 border-t border-white/5 flex-shrink-0">
<button className="w-full py-3.5 rounded-full bg-gradient-to-b from-[#D6BFA3] to-[#B89B7A] text-[#121212] text-sm font-semibold tracking-wide shadow-[0_4px_15px_rgba(214,191,163,0.3)] hover:brightness-110 transition-all active:scale-[0.98]">
          Contact Sales
        </button>
<div className="flex items-center justify-center gap-2 mt-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] animate-pulse shadow-[0_0_5px_rgba(127,219,255,0.8)]"></span>
<span className="text-[10px] text-[#7FDBFF]/70 font-mono uppercase tracking-wider">All Systems Operational</span>
</div>
</div>
</div>
</div>

</nav>
<div className="flex flex-col flex-1 z-10 text-center w-full max-w-5xl pr-6 pl-6 items-center justify-center">
<div className="inline-flex [animation:animationIn_0.8s_ease-out_0.2s_both] bg-[#1E1E1E]/60 border-[#D6BFA3]/20 border rounded-full mb-10 pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_20px_rgba(214,191,163,0.15)] backdrop-blur-sm items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FDBFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#7FDBFF]"></span>
</span>
<span className="text-[10px] text-[#D6BFA3] uppercase font-bold tracking-[0.2em]">Enterprise AI Workflow • Now Live</span>
</div>
<h1 className="md:text-7xl lg:text-[100px] leading-[0.95] [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl font-light text-white tracking-tighter font-manrope mb-8">
      The Operating System<br/>
<span className="opacity-80 text-[#D6BFA3]">for Your AI Workflow</span>
</h1>
<p className="leading-relaxed md:text-xl [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg font-light text-slate-300 max-w-2xl mr-auto mb-12 ml-auto">
      SynqorAI deploys autonomous AI workflows that execute complex tasks, optimize decisions, and scale across your
      enterprise infrastructure.
    </p>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<style className="">
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      </style>
<button className="group inline-flex transition-all duration-500 hover:scale-105 active:scale-95 [animation:animationIn_0.8s_ease-out_0.5s_both] z-10 relative scale-75 items-center justify-center">
<div className="absolute -inset-4 group-hover:-inset-6 bg-gradient-to-r from-[#D6BFA3]/50 via-[#7FDBFF]/50 to-[#D6BFA3]/50 opacity-40 group-hover:opacity-80 rounded-full blur-2xl transition-all duration-700 pointer-events-none"></div>
<div className="absolute -inset-1 group-hover:-inset-2 bg-gradient-to-r from-[#7FDBFF]/40 to-[#D6BFA3]/40 opacity-50 group-hover:opacity-100 rounded-full blur-xl transition-all duration-500 pointer-events-none"></div>
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:bg-[#121212] group-hover:border-[#7FDBFF]/60 group-hover:shadow-[0_30px_60px_-10px_rgba(127,219,255,0.3),inset_0_2px_2px_rgba(127,219,255,0.6),inset_0_-4px_8px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(127,219,255,0.2)] flex bg-[#1E1E1E]/90 border-[#D6BFA3]/30 border rounded-full pt-5 pr-12 pb-5 pl-12 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(214,191,163,0.3),inset_0_-4px_8px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(214,191,163,0.1)] backdrop-blur-xl gap-x-4 gap-y-4 items-center">
<div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent w-[150%] pointer-events-none"></div>
<div className="relative flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="text-[#7FDBFF] text-xl drop-shadow-[0_0_10px_rgba(127,219,255,0.8)] group-hover:rotate-180 transition-transform duration-700" icon="lucide:sparkles"></iconify-icon>
<div className="absolute inset-0 bg-[#7FDBFF]/40 blur-md rounded-full pointer-events-none"></div>
</div>
<span className="relative z-10 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D6BFA3] to-[#D6BFA3]/70 group-hover:from-white group-hover:to-[#7FDBFF]/80 tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500">
          DEPLOY YOUR WORKFLOWS
        </span>
<div className="relative flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="text-[#D6BFA3] text-xl drop-shadow-[0_0_10px_rgba(214,191,163,0.8)] group-hover:-rotate-12 transition-transform duration-500" icon="lucide:bot"></iconify-icon>
<div className="absolute inset-0 bg-[#D6BFA3]/40 blur-md rounded-full pointer-events-none"></div>
</div>
</div>
<div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#1E1E1E]/80 border border-[#7FDBFF]/40 shadow-[0_0_15px_rgba(127,219,255,0.4)] backdrop-blur-md flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20 pointer-events-none">
<iconify-icon className="text-[#7FDBFF] text-sm animate-pulse" icon="lucide:cpu"></iconify-icon>
</div>
<div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-[#1E1E1E]/80 border border-[#D6BFA3]/40 shadow-[0_0_15px_rgba(214,191,163,0.4)] backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 z-20 pointer-events-none">
<iconify-icon className="text-[#D6BFA3] text-xs animate-pulse" icon="lucide:network"></iconify-icon>
</div>
<div className="absolute -inset-1 group-hover:-inset-2 rounded-full border border-[#7FDBFF]/0 group-hover:border-[#7FDBFF]/40 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none shadow-[0_0_20px_rgba(127,219,255,0.3)]"></div>
</button>
</div>
</div>
</div>

<main className="flex flex-col z-10 w-full relative items-center">

<div className="flex flex-col -translate-y-4 [animation:animationIn_0.8s_ease-out_0.6s_both] w-full max-w-[1280px] mr-auto ml-auto pt-0 pr-4 pb-4 pl-4 items-center justify-center">
<div className="group/window bg-gradient-to-b from-[#1E1E1E] to-[#121212] w-full border-white/10 border rounded-[1.5rem] sm:rounded-[2.5rem] pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">
<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D6BFA3]/40 to-transparent opacity-70 z-50 pointer-events-none">
</div>
<div className="overflow-hidden flex text-[13px] leading-normal antialiased text-slate-400 font-sans bg-[#121212] w-full h-auto min-h-[600px] sm:h-[850px] ring-white/5 ring-1 rounded-[1rem] sm:rounded-[2rem] relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] flex-col sm:flex-row">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none z-0">
</div>
<div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-[#7FDBFF]/5 to-transparent pointer-events-none z-0">
</div>

<div className="hidden sm:flex flex-col flex-shrink-0 z-10 w-[260px] border-white/5 border-r relative shadow-[10px_0_30px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md">
<div className="flex h-16 border-white/5 border-b pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3 text-slate-200 font-semibold font-manrope text-sm tracking-wide group cursor-pointer">
<span className="">Synqor_OS</span>
<iconify-icon className="text-slate-500 group-hover:text-[#D6BFA3] transition-colors" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
<div className="pt-4 pr-3 pb-4 pl-3 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-b from-[#7FDBFF]/[0.1] to-transparent border border-[#7FDBFF]/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-[#7FDBFF] cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#7FDBFF] shadow-[0_0_10px_rgba(127,219,255,1)]"></div>
<iconify-icon className="text-[#7FDBFF] drop-shadow-[0_0_5px_rgba(127,219,255,0.5)]" icon="lucide:layout-dashboard" width="16"></iconify-icon>
<span className="font-medium text-shadow-sm">Workflow Hub</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
<iconify-icon className="" icon="lucide:activity" width="16"></iconify-icon>
<span className="font-normal">Execution Monitor</span>
</div>
<div className="flex gap-3 hover:bg-white/[0.05] cursor-pointer transition-all hover:text-slate-200 hover:border-white/5 text-slate-400 border-transparent border rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<iconify-icon className="" icon="lucide:network" width="16"></iconify-icon>
<span className="font-normal">Graph Topology</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
<iconify-icon className="" icon="lucide:database" width="16"></iconify-icon>
<span className="font-normal">Data Layer</span>
</div>
</div>
<div className="mt-4 px-4 mb-2 flex items-center justify-between group cursor-pointer">
<span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-shadow-sm group-hover:text-slate-400 transition-colors">Environments</span>
<div className="w-5 h-5 rounded bg-white/[0.05] border border-white/5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-slate-200 transition-colors" icon="lucide:plus" width="10"></iconify-icon>
</div>
</div>
<div className="px-3 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-[#7FDBFF] rounded-full blur-[2px]"></div>
<div className="relative w-2 h-2 rounded-full bg-[#7FDBFF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-[#7FDBFF]/50">
</div>
</div>
<span className="">Prod-Global</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
<div className="relative w-2 h-2">
<div className="relative w-2 h-2 rounded-full bg-[#D6BFA3] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#D6BFA3]/50">
</div>
</div>
<span className="">Stage-Alpha</span>
</div>
</div>
<div className="mt-6 px-4 mb-2 flex items-center justify-between">
<span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-shadow-sm">Active Workflows</span>
</div>
<div className="px-3 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.05] text-white cursor-pointer border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:bot" width="14"></iconify-icon>
<span className="text-xs font-normal tracking-wide">Data-ETL-01</span>
<div className="ml-auto w-1 h-1 rounded-full bg-[#7FDBFF] shadow-[0_0_5px_rgba(127,219,255,1)]"></div>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
<iconify-icon className="" icon="lucide:shield-alert" width="14"></iconify-icon>
<span className="text-xs">Compliance-Bot</span>
</div>
</div>
<div className="mt-auto border-t border-white/5 p-4 bg-white/[0.02]">
<div className="flex items-center gap-3 px-2 py-1 cursor-pointer group rounded-lg hover:bg-white/[0.05] transition-all">
<div className="bg-center w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81f86f12-b96c-426a-ba6e-49e2fa337c25_320w.jpg)] bg-cover border-[#D6BFA3]/20 border ring-[#121212] ring-2 rounded-full shadow-md group-hover:border-[#D6BFA3]/40 transition-colors">
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-200 font-semibold group-hover:text-white transition-colors">SysAdmin</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">admin@synqor.ai</span>
</div>
</div>
</div>
</div>

<div className="flex sm:hidden h-12 border-white/5 border-b pr-4 pl-4 items-center justify-between z-10 bg-[#121212]/80 backdrop-blur-md flex-shrink-0">
<div className="flex items-center gap-2 text-slate-200 font-semibold font-manrope text-xs tracking-wide cursor-pointer">
<span>Synqor_OS</span>
<iconify-icon className="text-slate-500" icon="lucide:chevron-down" width="10"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20">
<div className="w-1 h-1 rounded-full bg-[#7FDBFF] animate-pulse"></div>
<span className="text-[#7FDBFF] text-[9px] font-semibold tracking-wider">RUNNING</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/5">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:cpu" width="10"></iconify-icon>
<span className="text-[9px] font-mono text-slate-300">24%</span>
</div>
</div>
</div>

<div className="flex sm:hidden border-b border-white/5 z-10 bg-[#121212]/60 backdrop-blur-md flex-shrink-0 overflow-x-auto">
<div className="flex items-center gap-0 min-w-max px-2 py-1">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-b from-[#7FDBFF]/[0.1] to-transparent border border-[#7FDBFF]/20 text-[#7FDBFF] cursor-pointer mx-0.5">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:layout-dashboard" width="12"></iconify-icon>
<span className="text-[10px] font-medium">Hub</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 mx-0.5">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
<span className="text-[10px]">Monitor</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 mx-0.5">
<iconify-icon icon="lucide:network" width="12"></iconify-icon>
<span className="text-[10px]">Graph</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 mx-0.5">
<iconify-icon icon="lucide:database" width="12"></iconify-icon>
<span className="text-[10px]">Data</span>
</div>
</div>
</div>
<div className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">
<div className="hidden sm:flex h-16 border-b border-white/5 items-center justify-between px-8 bg-[#121212]/80 backdrop-blur-md z-20 sticky top-0 shadow-sm">
<div className="flex items-center gap-2 text-slate-500 text-sm font-normal">
<span className="hover:text-slate-300 cursor-pointer transition-colors">Prod-Global</span>
<iconify-icon className="opacity-50" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-slate-200 text-shadow-sm">Data-ETL-01</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 ml-3 shadow-[inset_0_0_5px_rgba(127,219,255,0.1)]">
<div className="w-1 h-1 rounded-full bg-[#7FDBFF] animate-pulse"></div>
<span className="text-[#7FDBFF] text-[10px] font-semibold tracking-wider">RUNNING</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 shadow-[0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none transition-all">
<iconify-icon className="text-slate-400 group-hover:text-slate-200" icon="lucide:pause" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-400 group-hover:text-slate-200">Pause</span>
</button>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-b from-[#7FDBFF]/20 to-[#7FDBFF]/5 border border-[#7FDBFF]/30 hover:border-[#7FDBFF]/50 shadow-[0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none transition-all">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:terminal" width="12"></iconify-icon>
<span className="text-xs font-medium text-[#7FDBFF] group-hover:text-white">Console</span>
</button>
</div>
</div>

<div className="flex sm:hidden items-center justify-between px-3 py-2 border-b border-white/5 bg-[#121212]/60 backdrop-blur-md z-20 flex-shrink-0">
<div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-normal">
<span className="text-slate-200">Data-ETL-01</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 transition-all">
<iconify-icon className="text-slate-400" icon="lucide:pause" width="10"></iconify-icon>
<span className="text-[10px] font-medium text-slate-400">Pause</span>
</button>
<button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-b from-[#7FDBFF]/20 to-[#7FDBFF]/5 border border-[#7FDBFF]/30 transition-all">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:terminal" width="10"></iconify-icon>
<span className="text-[10px] font-medium text-[#7FDBFF]">Console</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="max-w-5xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8">
<div className="mb-5 sm:mb-8 flex items-start sm:items-end justify-between gap-3">
<div className="">
<h1 className="text-lg sm:text-2xl font-semibold font-manrope text-white mb-1 sm:mb-2 tracking-tight drop-shadow-md">Data Ingestion &amp; Sync</h1>
<div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500 font-normal">
<span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-slate-400 border border-white/5">ID: WRK-001</span>
<span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700"></span>
<span className="">Last active: 2s ago</span>
</div>
</div>
<div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/5 shadow-inner flex-shrink-0">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:cpu" width="12"></iconify-icon>
<span className="text-[10px] sm:text-xs font-mono text-slate-300">24% Load</span>
</div>
</div>
<div className="w-full h-40 sm:h-64 bg-white/[0.02] backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 mb-5 sm:mb-8 relative overflow-hidden group shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
</div>
<div className="flex flex-col pt-3 pr-3 pb-3 pl-3 sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between">
<style>
    @keyframes vbar1 { 0%, 100% { height: 30%; } 50% { height: 50%; } }
    @keyframes vbar2 { 0%, 100% { height: 45%; } 50% { height: 60%; } }
    @keyframes vbar3 { 0%, 100% { height: 40%; } 50% { height: 20%; } }
    @keyframes vbar4 { 0%, 100% { height: 70%; } 50% { height: 40%; } }
    @keyframes vbar5 { 0%, 100% { height: 85%; } 50% { height: 65%; } }
    @keyframes vbar6 { 0%, 100% { height: 95%; } 50% { height: 75%; } }
    @keyframes vbar7 { 0%, 100% { height: 60%; } 50% { height: 45%; } }
    @keyframes vbar8 { 0%, 100% { height: 40%; } 50% { height: 55%; } }
    @keyframes vbar9 { 0%, 100% { height: 30%; } 50% { height: 15%; } }
  </style>
<div className="flex justify-between text-[9px] sm:text-xs font-normal text-slate-400 uppercase tracking-wider">
<span className="flex items-center gap-1 sm:gap-2">
<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-violet-500 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
<span className="hidden sm:inline">API Requests (req/min)</span>
<span className="sm:hidden">API Req/min</span>
</span>
<span className="text-violet-400/80 font-mono tracking-normal">Live Sync</span>
</div>
<div className="flex gap-1 sm:gap-3 z-10 h-24 sm:h-40 pr-1 pl-1 sm:pr-2 sm:pl-2 relative items-end">
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/5 to-[#7FDBFF]/20 border-t border-[#7FDBFF]/30 rounded-t-md transition-all hover:from-[#7FDBFF]/15 hover:to-[#7FDBFF]/40 hover:border-[#7FDBFF]/60 hover:shadow-[0_0_15px_rgba(127,219,255,0.3)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar1 2.5s ease-in-out infinite', animationDelay: '0s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/5 to-[#7FDBFF]/20 border-t border-[#7FDBFF]/30 rounded-t-md transition-all hover:from-[#7FDBFF]/15 hover:to-[#7FDBFF]/40 hover:border-[#7FDBFF]/60 hover:shadow-[0_0_15px_rgba(127,219,255,0.3)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar2 2.5s ease-in-out infinite', animationDelay: '0.1s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/10 to-[#7FDBFF]/30 border-t border-[#7FDBFF]/40 rounded-t-md transition-all hover:from-[#7FDBFF]/20 hover:to-[#7FDBFF]/50 hover:border-[#7FDBFF]/70 hover:shadow-[0_0_15px_rgba(127,219,255,0.4)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar3 2.5s ease-in-out infinite', animationDelay: '0.2s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/10 to-[#7FDBFF]/40 border-t border-[#7FDBFF]/50 rounded-t-md shadow-[0_0_15px_rgba(127,219,255,0.2)] transition-all hover:from-[#7FDBFF]/20 hover:to-[#7FDBFF]/60 hover:border-[#7FDBFF]/70 hover:shadow-[0_0_20px_rgba(127,219,255,0.4)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar4 2.5s ease-in-out infinite', animationDelay: '0.3s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/20 to-[#7FDBFF]/50 border-t border-[#7FDBFF]/60 rounded-t-md shadow-[0_0_20px_rgba(127,219,255,0.3)] transition-all hover:from-[#7FDBFF]/30 hover:to-[#7FDBFF]/70 hover:border-[#7FDBFF]/80 hover:shadow-[0_0_25px_rgba(127,219,255,0.5)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar5 2.5s ease-in-out infinite', animationDelay: '0.4s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/30 to-[#7FDBFF]/70 border-t-2 border-[#7FDBFF] rounded-t-md relative group cursor-pointer shadow-[0_0_30px_rgba(127,219,255,0.5)] transition-all hover:from-[#7FDBFF]/40 hover:to-[#7FDBFF]/90 hover:shadow-[0_0_40px_rgba(127,219,255,0.7)] hover:-translate-y-1" style={{animation: 'vbar6 2.5s ease-in-out infinite', animationDelay: '0.5s'}}>
<div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-[#121212]/90 backdrop-blur-md border border-[#7FDBFF]/40 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md text-[9px] sm:text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl z-20 pointer-events-none group-hover:-translate-y-1">
      14,205 rpm
      <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#121212]/90 border-r border-b border-[#7FDBFF]/40 rotate-45">
</div>
</div>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/10 to-[#7FDBFF]/40 border-t border-[#7FDBFF]/50 rounded-t-md shadow-[0_0_15px_rgba(127,219,255,0.2)] transition-all hover:from-[#7FDBFF]/20 hover:to-[#7FDBFF]/60 hover:border-[#7FDBFF]/70 hover:shadow-[0_0_20px_rgba(127,219,255,0.4)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar7 2.5s ease-in-out infinite', animationDelay: '0.6s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/5 to-[#7FDBFF]/30 border-t border-[#7FDBFF]/40 rounded-t-md transition-all hover:from-[#7FDBFF]/15 hover:to-[#7FDBFF]/50 hover:border-[#7FDBFF]/60 hover:shadow-[0_0_15px_rgba(127,219,255,0.3)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar8 2.5s ease-in-out infinite', animationDelay: '0.7s'}}>
</div>
<div className="flex-1 bg-gradient-to-t from-[#7FDBFF]/5 to-[#7FDBFF]/20 border-t border-[#7FDBFF]/30 rounded-t-md transition-all hover:from-[#7FDBFF]/15 hover:to-[#7FDBFF]/40 hover:border-[#7FDBFF]/60 hover:shadow-[0_0_15px_rgba(127,219,255,0.3)] cursor-pointer hover:-translate-y-1" style={{animation: 'vbar9 2.5s ease-in-out infinite', animationDelay: '0.8s'}}>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#7FDBFF]/5 to-transparent pointer-events-none">
</div>
</div>
<div className="text-xs sm:text-sm font-semibold text-slate-200 mb-4 sm:mb-6 flex items-center gap-2">
              Execution Logs
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] animate-pulse"></div>
<span className="text-slate-400 font-normal text-[10px] uppercase">Live</span>
</div>
</div>
<div className="border-white/5 border-l ml-1 sm:ml-2 pl-2 sm:pl-3 relative space-y-5 sm:space-y-8">
<style>
    @keyframes seqFade {
      0%, 45%, 100% { opacity: 0.3; }
      15%, 30% { opacity: 1; }
    }
    @keyframes seqShift {
      0%, 45%, 100% { transform: translateX(0); }
      15%, 30% { transform: translateX(6px); }
    }
    @keyframes seqDot {
      0%, 45%, 100% { transform: scale(0.8); filter: brightness(0.5); }
      15%, 30% { transform: scale(1.3); filter: brightness(1.5); }
    }
  </style>
<div className="group pl-5 sm:pl-8 relative" style={{animation: 'seqFade 6s ease-in-out infinite both', animationDelay: '0s'}}>
<div className="-left-[21px] flex bg-[#121212] w-3 h-3 border-[#7FDBFF] border rounded-full absolute top-0 shadow-[0_0_10px_rgba(127,219,255,0.4)] items-center justify-center" style={{animation: 'seqDot 6s ease-in-out infinite both', animationDelay: '0s'}}>
</div>
<div className="flex flex-col gap-1.5 sm:gap-2" style={{animation: 'seqShift 6s ease-in-out infinite both', animationDelay: '0s'}}>
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-200 text-[10px] sm:text-xs">Batch Process Completed</span>
<span className="text-[10px] text-slate-600 font-mono">Just now</span>
</div>
<div className="text-slate-400 font-mono text-[10px] sm:text-xs bg-white/[0.03] backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-white/5 shadow-inner">
        Processed 14,020 records in 450ms. <span className="text-[#7FDBFF] font-semibold">Success</span>.
      </div>
</div>
</div>
<div className="relative pl-5 sm:pl-8 group" style={{animation: 'seqFade 6s ease-in-out infinite both', animationDelay: '2s'}}>
<div className="-left-[21px] flex bg-[#121212] w-3 h-3 border-[#D6BFA3] border rounded-full absolute top-0 shadow-[0_0_10px_rgba(214,191,163,0.4)] items-center justify-center" style={{animation: 'seqDot 6s ease-in-out infinite both', animationDelay: '2s'}}>
</div>
<div className="flex flex-col gap-1.5 sm:gap-2" style={{animation: 'seqShift 6s ease-in-out infinite both', animationDelay: '2s'}}>
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-200 text-[10px] sm:text-xs">Auto-Scaling Triggered</span>
<span className="text-[10px] text-slate-600 font-mono">2m ago</span>
</div>
<p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed">
        Load threshold exceeded (85%). Spawning 2 worker nodes.
      </p>
</div>
</div>
<div className="group pl-5 sm:pl-8 relative" style={{animation: 'seqFade 6s ease-in-out infinite both', animationDelay: '4s'}}>
<div className="-left-[21px] flex bg-[#121212] w-3 h-3 border-[#7FDBFF] border rounded-full absolute top-0 shadow-[0_0_10px_rgba(127,219,255,0.4)] items-center justify-center" style={{animation: 'seqDot 6s ease-in-out infinite both', animationDelay: '4s'}}>
</div>
<div className="flex flex-col gap-1.5 sm:gap-2" style={{animation: 'seqShift 6s ease-in-out infinite both', animationDelay: '4s'}}>
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-200 text-[10px] sm:text-xs">Schema Update Detected</span>
<span className="text-[10px] text-slate-600 font-mono">15m ago</span>
</div>
<p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed">
        New field
        <code className="bg-[#7FDBFF]/10 text-[#7FDBFF] px-1 py-0.5 rounded text-[10px] border border-[#7FDBFF]/20">user_segment</code>
        found in stream. Adapting transformation logic automatically.
      </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden sm:flex w-[300px] border-l border-white/5 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)] bg-white/[0.02] backdrop-blur-md flex-shrink-0 flex-col relative z-10">
<div className="h-16 px-6 flex items-center justify-between border-b border-white/5">
<span className="text-slate-400 font-semibold text-xs uppercase tracking-wider">Parameters</span>
<div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
<iconify-icon className="text-slate-400" icon="lucide:settings" width="14"></iconify-icon>
</div>
</div>
<div className="p-6 space-y-8">
<div className="space-y-4">
<div className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">Runtime</div>
<div className="group bg-white/[0.03] rounded-xl p-3 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-white/10 transition-colors">
<div className="grid grid-cols-[20px_1fr] gap-3 items-center">
<iconify-icon className="text-slate-500" icon="lucide:hard-drive" width="14"></iconify-icon>
<div className="flex justify-between w-full text-xs">
<span className="text-slate-400 font-normal">Memory</span>
<span className="text-slate-200 font-mono text-shadow-sm">2.4 GB</span>
</div>
</div>
</div>
<div className="group bg-white/[0.03] rounded-xl p-3 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-white/10 transition-colors">
<div className="grid grid-cols-[20px_1fr] gap-3 items-center">
<iconify-icon className="text-slate-500" icon="lucide:zap" width="14"></iconify-icon>
<div className="flex justify-between w-full text-xs">
<span className="text-slate-400 font-normal">Latency</span>
<span className="text-[#7FDBFF] font-mono text-shadow-sm">12ms</span>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">AI Configuration</div>
<div className="bg-white/[0.03] rounded-xl p-4 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] space-y-3">
<div className="flex justify-between text-xs">
<span className="text-slate-400 font-normal">Temperature</span>
<span className="text-white font-mono">0.7</span>
</div>
<div className="w-full bg-[#121212] h-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] overflow-visible relative">
<div className="absolute left-0 top-0 h-full w-[70%] bg-[#D6BFA3] rounded-full shadow-[0_0_8px_rgba(214,191,163,0.6)]">
</div>
<div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-200 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-white cursor-pointer hover:scale-110 transition-transform">
</div>
</div>
</div>
<div className="flex justify-between items-center text-xs pt-2">
<span className="text-slate-400 font-normal">Context Window</span>
<span className="text-[#D6BFA3] bg-[#D6BFA3]/10 px-2 py-0.5 rounded border border-[#D6BFA3]/20 font-mono shadow-[0_0_10px_rgba(214,191,163,0.1)]">128k</span>
</div>
</div>
<div className="space-y-3 pt-4 border-t border-white/5">
<div className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">Connectors</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center gap-1.5 shadow-sm hover:border-white/20 cursor-pointer transition-colors">
<iconify-icon className="text-blue-300" icon="simple-icons:snowflake" width="12"></iconify-icon> Snowflake
              </span>
<span className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center gap-1.5 shadow-sm hover:border-white/20 cursor-pointer transition-colors">
<iconify-icon className="text-[#D6BFA3]" icon="simple-icons:slack" width="12"></iconify-icon> Slack
              </span>
</div>
</div>
</div>
</div>

<div className="flex sm:hidden border-t border-white/5 bg-white/[0.02] backdrop-blur-md flex-shrink-0 z-10 px-3 py-2 gap-3 overflow-x-auto">
<div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/5">
<iconify-icon className="text-slate-500" icon="lucide:hard-drive" width="10"></iconify-icon>
<span className="text-[9px] text-slate-400">Mem:</span>
<span className="text-[9px] text-slate-200 font-mono">2.4 GB</span>
</div>
<div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/5">
<iconify-icon className="text-slate-500" icon="lucide:zap" width="10"></iconify-icon>
<span className="text-[9px] text-slate-400">Lat:</span>
<span className="text-[9px] text-[#7FDBFF] font-mono">12ms</span>
</div>
<div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/5">
<span className="text-[9px] text-slate-400">Ctx:</span>
<span className="text-[9px] text-[#D6BFA3] font-mono">128k</span>
</div>
<div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/5">
<iconify-icon className="text-blue-300" icon="simple-icons:snowflake" width="9"></iconify-icon>
<span className="text-[9px] text-slate-300">Snowflake</span>
</div>
<div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/5">
<iconify-icon className="text-[#D6BFA3]" icon="simple-icons:slack" width="9"></iconify-icon>
<span className="text-[9px] text-slate-300">Slack</span>
</div>
</div>
<div className="hidden sm:flex flex-col overflow-hidden z-50 bg-[#121212]/90 w-[420px] border-white/10 border ring-white/5 ring-1 rounded-xl absolute right-8 bottom-8 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
<style>
    @keyframes loginFade {
      0%, 95% { opacity: 0.6; max-height: 50px; margin-bottom: 0.75rem; }
      95.01%, 100% { opacity: 0; max-height: 0; margin-bottom: 0; }
    }
    @keyframes cmd1Fade {
      0%, 4.99% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
      5%, 95% { opacity: 1; max-height: 50px; margin-bottom: 0.75rem; overflow: visible; }
      95.01%, 100% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
    }
    @keyframes typeCmd1 {
      0%, 4.99% { max-width: 0; border-right: 2px solid transparent; }
      5% { max-width: 0; border-right: 2px solid #7FDBFF; animation-timing-function: steps(22, end); }
      15.99% { max-width: 25ch; border-right: 2px solid #7FDBFF; }
      16%, 95% { max-width: 25ch; border-right: 2px solid transparent; }
      95.01%, 100% { max-width: 0; border-right: 2px solid transparent; }
    }
    @keyframes out1Fade {
      0%, 19.99% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
      20%, 95% { opacity: 1; max-height: 200px; margin-bottom: 0.75rem; overflow: hidden; }
      95.01%, 100% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
    }
    @keyframes cmd2Fade {
      0%, 39.99% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
      40%, 95% { opacity: 1; max-height: 50px; margin-bottom: 0.75rem; overflow: visible; }
      95.01%, 100% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
    }
    @keyframes typeCmd2 {
      0%, 39.99% { max-width: 0; border-right: 2px solid transparent; }
      40% { max-width: 0; border-right: 2px solid #7FDBFF; animation-timing-function: steps(24, end); }
      49.99% { max-width: 25ch; border-right: 2px solid #7FDBFF; }
      50%, 95% { max-width: 25ch; border-right: 2px solid transparent; }
      95.01%, 100% { max-width: 0; border-right: 2px solid transparent; }
    }
    @keyframes out2Fade {
      0%, 54.99% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
      55%, 95% { opacity: 1; max-height: 100px; margin-bottom: 0; overflow: visible; }
      95.01%, 100% { opacity: 0; max-height: 0; margin-bottom: 0; overflow: hidden; }
    }
  </style>
<div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-white/10 to-transparent border-b border-white/5">
<div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:terminal-square" width="14"></iconify-icon>
      synqor-cli
    </div>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-inner"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-inner"></div>
</div>
</div>
<div className="text-[11px] leading-relaxed overflow-y-auto text-slate-300 font-mono bg-black/60 h-[200px] pt-5 pr-5 pb-5 pl-5 shadow-inner">
<div className="mb-3" style={{animation: 'loginFade 12s infinite'}}>
      Last login: Wed Oct 11 09:23:01 on ttys001
    </div>
<div className="mb-3" style={{animation: 'cmd1Fade 12s infinite'}}>
<span className="text-[#D6BFA3] font-medium">➜</span> <span className="text-[#7FDBFF] font-medium">~</span>
<span className="inline-block overflow-hidden whitespace-nowrap align-bottom" style={{animation: 'typeCmd1 12s infinite'}}>workflow status --verbose</span>
</div>
<div className="text-slate-400 mb-3 pl-4 border-l border-white/10" style={{animation: 'out1Fade 12s infinite'}}>
      Retrieving telemetry... <br/>
<span className="text-[#7FDBFF]">[INFO]</span> Connection established (4ms) <br/>
<span className="text-[#7FDBFF]">[INFO]</span> Node health: 99.8% <br/>
<span className="text-[#D6BFA3]">[WARN]</span> Memory pressure detected in region us-east-1a
    </div>
<div className="mb-3" style={{animation: 'cmd2Fade 12s infinite'}}>
<span className="text-[#D6BFA3] font-medium">➜</span> <span className="text-[#7FDBFF] font-medium">~</span>
<span className="inline-block overflow-hidden whitespace-nowrap align-bottom" style={{animation: 'typeCmd2 12s infinite'}}>optimize --target=memory</span>
</div>
<div className="text-slate-100" style={{animation: 'out2Fade 12s infinite'}}>
      Initiating garbage collection protocol...
      <span className="inline-block w-2 h-4 bg-slate-400 align-middle animate-pulse ml-1"></span>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="sm:py-24 fade-in fade-in-delay-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 pt-8 pb-8 relative gap-x-6 gap-y-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-[10px] font-semibold text-[#D6BFA3]/70 tracking-[0.2em]">
          Powering autonomous workflows for
        </p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:shield-check" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-manrope">Cybernetics</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:globe" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight font-manrope">GlobalData</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:pie-chart" width="24"></iconify-icon>
<span className="text-xl font-normal tracking-tight font-manrope">FinServe</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:workflow" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-manrope">OmniFlow</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:cloud-cog" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight font-manrope">CloudScale</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:brain" width="24"></iconify-icon>
<span className="text-xl font-normal tracking-tight font-manrope">NeuralNet</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:cpu" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight italic font-manrope">VertexAI</span>
</div>
</div>

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:shield-check" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-manrope">Cybernetics</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:globe" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight font-manrope">GlobalData</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:pie-chart" width="24"></iconify-icon>
<span className="text-xl font-normal tracking-tight font-manrope">FinServe</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:workflow" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-manrope">OmniFlow</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:cloud-cog" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight font-manrope">CloudScale</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#D6BFA3] transition-colors duration-300" height="24" icon="lucide:brain" width="24"></iconify-icon>
<span className="text-xl font-normal tracking-tight font-manrope">NeuralNet</span>
</div>

<div className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 group cursor-default">
<iconify-icon className="text-slate-600 group-hover:text-[#7FDBFF] transition-colors duration-300" height="24" icon="lucide:cpu" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight italic font-manrope">VertexAI</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
      @keyframes ticker {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-100%);
        }
      }

      .ticker-track {
        animation: ticker 40s linear infinite;
        width: calc(200% + 16px);
      }

      .ticker-track:hover {
        animation-play-state: paused;
      }
    </style>
</section>

<section className="z-10 overflow-hidden w-full pt-32 pr-6 pb-32 pl-6 relative gap-x-6 gap-y-6">
<div className="flex flex-col max-w-7xl mr-auto ml-auto relative items-center">
<div className="mb-28 relative w-full">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

<div className="flex items-center gap-8 mb-16">
<span className="text-xs text-[#D6BFA3] tracking-[0.4em] font-mono">
                  01
                </span>
<div className="h-px w-20 bg-gradient-to-r from-[#D6BFA3]/60 to-transparent"></div>
<span className="text-xs uppercase font-medium text-white/60 tracking-[0.35em]">
                  Core Architecture
                </span>
</div>

<div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

<div className="flex-1 space-y-8">
<h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl">
                How SynqorAI Orchestrates
                <br/>
<span className="bg-clip-text font-normal text-transparent bg-gradient-to-b from-white to-white/40">
                      AI Workflows
                    </span>
</h2>
</div>

<div className="flex-1 max-w-xl space-y-10">
<p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                From complex triggers to resolved actions. Our platform ensures seamless integration, intelligent routing, and supervised autonomous execution across your entire ecosystem.
              </p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 [animation:animationIn_0.8s_ease-out_0.1s_both] w-full pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">
<div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
</div>
<div className="h-64 m-2 rounded-[1.5rem] bg-[#121212] relative overflow-hidden flex flex-col p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7FDBFF]/20 rounded-full blur-[80px] pointer-events-none">
</div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-t border-white/10 border-b border-black/50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] group-hover:-translate-y-0.5 transition-transform duration-300">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7FDBFF] to-[#00A1E0] flex items-center justify-center shadow-lg text-white shadow-[#7FDBFF]/30">
<iconify-icon className="text-lg" icon="lucide:cloud"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-200 shadow-black drop-shadow-sm">Salesforce CRM</span>
<span className="text-[10px] text-slate-400 font-normal">Connected</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#7FDBFF] shadow-[0_0_8px_rgba(127,219,255,0.8)] animate-pulse">
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-t border-white/10 border-b border-black/50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] group-hover:-translate-y-0.5 transition-transform duration-300 delay-75">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D6BFA3] to-[#B89B7A] flex items-center justify-center shadow-lg text-white shadow-[#D6BFA3]/30">
<iconify-icon className="text-lg" icon="lucide:server"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-200">AWS Cluster</span>
<span className="text-[10px] text-slate-400 font-normal">us-east-1</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#7FDBFF] shadow-[0_0_8px_rgba(127,219,255,0.6)]"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border-t border-white/5 border-b border-black/50 opacity-80">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E1E1E] to-[#121212] flex items-center justify-center shadow-inner border border-white/5">
<iconify-icon className="text-slate-400" icon="lucide:database"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-400">PostgreSQL</span>
<span className="text-[10px] text-slate-500">Syncing...</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#D6BFA3]/50"></div>
</div>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-1 shadow-black drop-shadow-md">Ecosystem Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed font-normal">Connect your tools seamlessly with zero-trust security.
            </p>
</div>
</div>
<div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
</div>
<div className="h-64 m-2 rounded-[1.5rem] bg-[#121212] relative overflow-hidden flex flex-col justify-center p-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D6BFA3]/10 rounded-full blur-[60px] pointer-events-none">
</div>
<div className="z-10 relative space-y-6">
<div className="space-y-3">
<div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
<span>Processing</span>
<span className="text-[#D6BFA3] drop-shadow-sm">High</span>
</div>
<div className="h-3 w-full bg-black/60 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] border-b border-white/10 relative">
<div className="absolute left-0 top-0 bottom-0 w-[75%] rounded-full bg-gradient-to-r from-[#D6BFA3]/30 to-[#D6BFA3]/60">
</div>
<div className="absolute left-[75%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 border border-white shadow-[0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.5)_inset] cursor-pointer group-hover:scale-110 transition-transform">
<div className="absolute inset-[30%] rounded-full bg-[#D6BFA3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] border border-white/5">
<span className="text-sm font-normal text-slate-300">Safety Guardrails</span>
<div className="w-10 h-6 rounded-full bg-[#1E1E1E]/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-[#D6BFA3]/20 relative">
<div className="absolute right-1 top-1 bottom-1 w-4 rounded-full bg-gradient-to-b from-[#D6BFA3] to-[#B89B7A] shadow-md">
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] border border-white/5">
<span className="text-sm font-normal text-slate-300">Auto-Approval</span>
<div className="w-10 h-6 rounded-full bg-slate-900/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-white/5 relative">
<div className="absolute left-1 top-1 bottom-1 w-4 rounded-full bg-gradient-to-b from-slate-400 to-slate-600 shadow-md">
</div>
</div>
</div>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-1">Workflow Routing</h3>
<p className="text-sm text-slate-400 leading-relaxed font-normal">Define custom triggers, logic, and intelligent routing.</p>
</div>
</div>
<div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
</div>
<div className="h-64 m-2 rounded-[1.5rem] bg-[#121212] relative overflow-hidden flex items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#7FDBFF]/10 rounded-full blur-[60px] pointer-events-none">
</div>
<div className="w-full h-full rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">
<div className="h-7 bg-gradient-to-b from-white/10 to-transparent border-b border-white/5 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-red-300/50">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-yellow-300/50">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-green-300/50">
</div>
</div>
<div className="p-4 font-mono text-[10px] leading-loose text-slate-300 relative z-10">
<div className="opacity-50">Last login: Tue Oct 24 14:02:11</div>
<div className="mt-2"><span className="text-[#7FDBFF]">➜</span> <span className="text-[#D6BFA3]">~</span> synqor
                  start
                  --mode=orchestrate</div>
<div className="text-[#7FDBFF]/80">&gt; Initializing workflow engine... OK</div>
<div className="text-[#7FDBFF]/80">&gt; Connecting to integrations... OK</div>
<div className="flex gap-2 bg-[#7FDBFF]/10 -mx-4 px-4 py-1 mt-1 border-y border-[#7FDBFF]/10">
<span className="text-[#7FDBFF] font-semibold">EXEC</span>
<span className="text-white">Processing Event #4922</span>
</div>
<div className="mt-1"><span className="animate-pulse">_</span></div>
</div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none">
</div>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-1">Execution Engine</h3>
<p className="text-sm text-slate-400 leading-relaxed font-normal">Resilient task execution with comprehensive auditability.
            </p>
</div>
</div>
<div className="md:col-span-3 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
</div>
<div className="h-64 m-2 rounded-[1.5rem] bg-[#121212] relative overflow-hidden flex items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D6BFA3]/10 rounded-full blur-[80px] group-hover:bg-[#D6BFA3]/20 transition-colors duration-700">
</div>
<div className="relative w-full h-full flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D6BFA3] to-[#B89B7A] shadow-[0_0_30px_rgba(214,191,163,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] relative z-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out border border-[#D6BFA3]/20">
<iconify-icon className="text-2xl text-[#121212] drop-shadow-md" icon="lucide:network"></iconify-icon>
</div>
<div className="absolute w-40 h-40 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
<div className="w-4 h-4 rounded-full bg-[#1E1E1E] border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)] absolute -top-2 left-1/2 -translate-x-1/2">
</div>
</div>
<div className="absolute w-56 h-56 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]">
<div className="w-3 h-3 rounded-full bg-[#D6BFA3]/40 border border-[#D6BFA3]/50 shadow-[0_0_10px_rgba(214,191,163,0.5)] absolute top-1/2 -right-1.5 -translate-y-1/2">
</div>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<line className="opacity-50" stroke="url(#goldGradient)" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="30%"></line>
<line className="opacity-50" stroke="url(#goldGradient)" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="70%" y1="50%" y2="70%"></line>
<defs>
<lineargradient id="goldGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(214, 191, 163, 0)"></stop>
<stop offset="50%" stop-color="rgba(214, 191, 163, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(214, 191, 163, 0)"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="p-6 pt-2 relative z-10">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-medium text-white">Global Context</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-normal">Persistent state management ensures every workflow step has access to real-time data context.</p>
</div>
</div>
<div className="md:col-span-3 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
</div>
<div className="h-64 m-2 rounded-[1.5rem] bg-[#121212] relative overflow-hidden flex flex-col items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7FDBFF]/10 rounded-full blur-[80px] pointer-events-none">
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border-4 border-[#1E1E1E]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.05)]">
</div>
<div className="absolute inset-0 rounded-full border-t-2 border-[#7FDBFF] animate-[spin_3s_linear_infinite] shadow-[0_0_15px_rgba(127,219,255,0.5)]">
</div>
<div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1E1E1E] to-[#121212] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center border border-white/5">
<iconify-icon className="text-4xl text-[#7FDBFF] drop-shadow-[0_0_10px_rgba(127,219,255,0.8)]" icon="lucide:shield-check"></iconify-icon>
</div>
</div>
<div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/30 shadow-[0_0_15px_rgba(127,219,255,0.15)]">
<div className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] animate-pulse shadow-[0_0_5px_rgba(127,219,255,1)]"></div>
<span className="text-[10px] font-mono font-semibold text-[#7FDBFF] tracking-wider">SOC2 COMPLIANT</span>
</div>
</div>
<div className="p-6 pt-2 relative z-10">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-[#7FDBFF]/10 flex items-center justify-center border border-[#7FDBFF]/20 shadow-[inset_0_0_10px_rgba(127,219,255,0.1)]">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:lock"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Enterprise Security</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-normal">Bank-grade encryption, role-based access
              control,
              and comprehensive audit logs.</p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden z-10 w-full pt-32 pr-6 pb-32 pl-6 relative">
<div className="flex flex-col max-w-7xl mr-auto ml-auto relative items-center group/section">
<style className="">
        @keyframes flowGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        .animate-grid-flow {
          animation: flowGrid 4s linear infinite;
        }
        @keyframes shimmerShift {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-shift {
          animation: shimmerShift 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-soft {
          animation: pulseSoft 4s ease-in-out infinite;
        }
      </style>
<div className="mb-28 relative w-full">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

<div className="flex items-center gap-8 mb-16">
<span className="text-xs text-[#D6BFA3] tracking-[0.4em] font-mono font-semibold group-hover/section:text-[#7FDBFF] transition-colors duration-700">
                  02
                </span>
<div className="h-px w-20 bg-gradient-to-r from-[#D6BFA3]/60 to-transparent group-hover/section:from-[#7FDBFF]/60 transition-colors duration-700"></div>
<span className="text-xs uppercase font-normal text-white/60 tracking-[0.35em] group-hover/section:text-white/80 transition-colors duration-700">
                  Capabilities
                </span>
</div>

<div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

<div className="flex-1 space-y-8">
<h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope font-extralight max-w-3xl">
                SynqorAI
                <br/>
<span className="bg-clip-text font-normal text-transparent bg-gradient-to-b from-white to-white/40 group-hover/section:from-[#7FDBFF] group-hover/section:to-white/40 transition-all duration-1000">
                      In Action
                    </span>
</h2>
</div>

<div className="flex-1 max-w-xl space-y-10">
<p className="leading-relaxed text-lg font-light text-slate-400 font-manrope group-hover/section:text-slate-300 transition-colors duration-700">
                Experience the power of autonomous workflows. SynqorAI intelligently adapts to your infrastructure, optimizing performance, orchestrating data pipelines, and reducing manual overhead.
              </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 items-center">
<div className="group/device w-full relative perspective-distant">
<div className="overflow-hidden flex flex-col bg-gradient-to-b from-[#1E1E1E] to-[#121212] w-full h-[520px] border-white/10 group-hover/device:border-white/20 border rounded-[2.5rem] relative shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] group-hover/device:shadow-[0_40px_80px_-20px_rgba(127,219,255,0.15),0_20px_40px_-12px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/device:-translate-y-2">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 group-hover/device:via-[#7FDBFF]/60 to-transparent opacity-70 z-50 transition-colors duration-700">
</div>
<div className="absolute inset-2 rounded-[2rem] bg-[#121212] ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none animate-grid-flow">
</div>
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#7FDBFF]/5 group-hover/device:from-[#7FDBFF]/10 to-transparent pointer-events-none transition-colors duration-700">
</div>
<div className="w-full h-full relative">

<div className="uc-visual w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500" id="uc-visual-1">
<div className="flex h-16 border-white/5 border-b pr-8 pl-8 backdrop-blur-md items-center justify-between rounded-t-[2rem]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#D6BFA3] to-[#B89B7A] shadow-[0_0_15px_rgba(214,191,163,0.5)] flex items-center justify-center border border-white/20 hover:scale-110 hover:rotate-6 transition-transform duration-300">
<iconify-icon className="text-[#121212] text-sm" icon="lucide:sparkles"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-wide text-shadow-sm font-manrope">Synqor Copilot</span>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-[#7FDBFF] shadow-[0_0_8px_rgba(127,219,255,0.8)] animate-[pulse_2s_ease-in-out_infinite]">
</div>
</div>
</div>
<div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
<div className="flex justify-end">
<div className="relative max-w-[80%] group/msg hover:-translate-y-1 transition-transform duration-300">
<div className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] border border-white/10 text-slate-200 text-sm px-5 py-3 rounded-2xl rounded-tr-sm shadow-lg font-sans group-hover/msg:border-white/20 group-hover/msg:shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all">
                          Optimize the data ingestion pipeline for AWS region us-east-1.
                        </div>
</div>
</div>
<div className="flex gap-4 max-w-[90%] group/bot">
<div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex-shrink-0 flex items-center justify-center group-hover/bot:border-[#D6BFA3]/40 group-hover/bot:bg-white/10 transition-all duration-300">
<iconify-icon className="text-[#D6BFA3] text-lg drop-shadow-[0_0_5px_rgba(214,191,163,0.8)]" icon="lucide:bot"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 text-slate-300 text-sm p-6 rounded-2xl rounded-tl-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] font-sans hover:border-white/10 transition-colors duration-300">
<p className="mb-4 text-slate-200 font-normal">Analyzing current pipeline architecture. Here are the suggested optimizations:</p>
<ul className="space-y-3">
<li className="flex gap-3 items-start group/item hover:translate-x-1 transition-transform duration-300 cursor-default">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#7FDBFF] shadow-[0_0_8px_rgba(127,219,255,0.6)] group-hover/item:scale-150 transition-transform duration-300">
</div>
<span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">Increase batch size from 500 to 2000 for Kinesis stream.</span>
</li>
<li className="flex gap-3 items-start group/item hover:translate-x-1 transition-transform duration-300 cursor-default">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D6BFA3] shadow-[0_0_8px_rgba(214,191,163,0.6)] group-hover/item:scale-150 transition-transform duration-300">
</div>
<span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">Enable dynamic auto-scaling on worker nodes (Threshold: 75%).</span>
</li>
<li className="flex gap-3 items-start group/item hover:translate-x-1 transition-transform duration-300 cursor-default">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1E1E1E] border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/item:scale-150 group-hover/item:border-white/50 transition-all duration-300">
</div>
<span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">Cache frequent queries in Redis to reduce DB load.</span>
</li>
</ul>
</div>
<div className="flex gap-2">
<button className="relative overflow-hidden group/opt flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-[#7FDBFF]/50 hover:bg-[#7FDBFF]/10 hover:text-[#7FDBFF] transition-all duration-300 text-xs text-slate-300 shadow-md active:scale-95">
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/opt:animate-shimmer-shift"></div>
<iconify-icon className="relative z-10 group-hover/opt:scale-110 transition-transform" icon="lucide:check-circle"></iconify-icon> <span className="relative z-10">Apply optimizations</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-xs text-slate-300 shadow-md active:scale-95 group/graph">
<iconify-icon className="group-hover/graph:rotate-12 transition-transform" icon="lucide:network"></iconify-icon> View topology graph
                          </button>
</div>
</div>
</div>
</div>
<div className="p-6 pt-0">
<div className="relative group/input">
<div className="absolute inset-0 bg-[#7FDBFF]/10 rounded-xl blur-lg opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500">
</div>
<input className="relative w-full bg-[#121212]/80 border border-white/10 rounded-xl pl-5 pr-12 py-4 text-sm text-white placeholder-slate-500 shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#7FDBFF]/50 focus:-translate-y-1 focus:shadow-[0_10px_20px_-10px_rgba(127,219,255,0.15)] transition-all duration-300 font-sans" placeholder="Prompt SynqorAI..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-[#7FDBFF]/10 text-[#7FDBFF] hover:bg-[#7FDBFF] hover:text-[#121212] transition-all duration-300 border border-[#7FDBFF]/30 hover:scale-110 active:scale-95 z-10">
<iconify-icon className="text-base font-semibold" icon="lucide:arrow-up"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500" id="uc-visual-2">
<div className="h-20 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-default group/icon">
<iconify-icon className="text-slate-400 text-lg group-hover/icon:text-white transition-colors duration-300" icon="lucide:network"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium font-manrope text-lg tracking-tight text-shadow-sm">Active Integrations</h3>
<div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] shadow-[0_0_5px_rgba(127,219,255,0.8)] animate-pulse"></span> Connected
                        </div>
</div>
</div>
<div className="flex items-center gap-4 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 shadow-inner hover:border-white/20 transition-colors duration-300 cursor-pointer group/add">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-[#D6BFA3]/20 border border-black flex items-center justify-center text-[10px] text-[#D6BFA3] shadow-md font-semibold hover:-translate-y-1 transition-transform duration-300 z-30">
                          DB</div>
<div className="w-8 h-8 rounded-full bg-[#7FDBFF]/20 border border-black flex items-center justify-center text-[10px] text-[#7FDBFF] shadow-md font-semibold hover:-translate-y-1 transition-transform duration-300 z-20">
                          API</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-black flex items-center justify-center text-[10px] text-slate-300 shadow-md font-semibold hover:-translate-y-1 transition-transform duration-300 z-10">
                          S3</div>
</div>
<iconify-icon className="text-slate-500 text-xs group-hover/add:text-white group-hover/add:rotate-90 transition-all duration-300" icon="lucide:plus"></iconify-icon>
</div>
</div>
<div className="flex-1 p-8 grid grid-cols-1 gap-4 overflow-y-auto font-sans">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Data Sources</div>
<div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/[0.06] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5),0_0_15px_rgba(127,219,255,0.1)] hover:border-[#7FDBFF]/30 cursor-pointer">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#7FDBFF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-[#00A1E0] text-xl drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(0,161,224,0.6)] transition-all" icon="simple-icons:salesforce"></iconify-icon>
</div>
<div>
<h4 className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">Salesforce CRM</h4>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
<iconify-icon className="text-[10px] group-hover:animate-spin transition-all" icon="lucide:refresh-cw"></iconify-icon> Synced 2m ago
                          </div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400 font-normal group-hover:border-white/20 transition-colors">
                        Database
                      </div>
</div>
<div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/[0.06] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5),0_0_15px_rgba(214,191,163,0.15)] hover:border-[#D6BFA3]/30 cursor-pointer">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6BFA3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#D6BFA3]/10 flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-[#D6BFA3] text-xl drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(214,191,163,0.6)] transition-all" icon="simple-icons:amazonaws"></iconify-icon>
</div>
<div>
<h4 className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">AWS S3 Bucket</h4>
<div className="flex items-center gap-2 mt-1">
<span className="px-1.5 py-0.5 rounded bg-[#D6BFA3]/10 text-[#D6BFA3] border border-[#D6BFA3]/20 text-[9px] font-semibold uppercase tracking-wider group-hover:shadow-[0_0_8px_rgba(214,191,163,0.3)] transition-all">Active</span>
</div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400 font-normal group-hover:border-white/20 transition-colors">
                        Storage
                      </div>
</div>
<div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/[0.06] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5),0_0_15px_rgba(127,219,255,0.15)] hover:border-[#7FDBFF]/30 cursor-pointer">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7FDBFF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#7FDBFF]/10 flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-[#7FDBFF] text-xl drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(127,219,255,0.6)] transition-all" icon="simple-icons:snowflake"></iconify-icon>
</div>
<div>
<h4 className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">Snowflake Data Warehouse</h4>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
<iconify-icon className="text-[10px] group-hover:text-[#7FDBFF] transition-colors" icon="lucide:activity"></iconify-icon> Processing Queries 
                            <span className="inline-flex gap-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
<span className="w-[3px] h-[3px] bg-[#7FDBFF] rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
<span className="w-[3px] h-[3px] bg-[#7FDBFF] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
<span className="w-[3px] h-[3px] bg-[#7FDBFF] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
</span>
</div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400 font-normal group-hover:border-white/20 transition-colors">
                        Warehouse
                      </div>
</div>
</div>
</div>

<div className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans" id="uc-visual-3">
<div className="h-16 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
<h3 className="text-white font-medium font-manrope text-lg tracking-tight">Execution Monitor</h3>
<div className="flex items-center gap-2 px-2 py-1 bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 rounded text-[#7FDBFF] text-[10px] font-mono uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] animate-pulse"></span> Telemetry OK
                    </div>
</div>
<div className="flex-1 p-0 overflow-y-auto">
<div className="relative pl-8 pr-6 py-6">
<div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent">
<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-[#7FDBFF]/50 to-transparent animate-[flowGrid_3s_linear_infinite]"></div>
</div>
<div className="relative pl-8 pb-8 group/log">
<div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#121212] border border-[#7FDBFF] shadow-[0_0_10px_rgba(127,219,255,0.5)] z-10 group-hover/log:scale-125 group-hover/log:shadow-[0_0_15px_rgba(127,219,255,0.8)] transition-all duration-300">
</div>
<div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group-hover/log:translate-x-2">
<div className="w-10 h-10 rounded-lg bg-[#7FDBFF]/10 flex items-center justify-center border border-[#7FDBFF]/20 flex-shrink-0 shadow-inner group-hover/log:bg-[#7FDBFF]/20 transition-colors duration-300">
<iconify-icon className="text-[#7FDBFF] group-hover/log:scale-110 transition-transform duration-300" icon="lucide:server"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-slate-200 group-hover/log:text-white transition-colors">Pipeline-Alpha</span>
<span className="text-[10px] text-slate-500 font-normal">2m ago</span>
</div>
<p className="text-xs text-slate-400 group-hover/log:text-slate-300 transition-colors">Deployed successfully to
                              <span className="text-[#7FDBFF] font-medium">us-east-1</span> edge nodes.
                            </p>
<div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-slate-500">
<iconify-icon className="text-[#7FDBFF]" icon="lucide:check-circle"></iconify-icon> Latency: 42ms
                            </div>
</div>
</div>
</div>
<div className="relative pl-8 pb-8 group/log">
<div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#121212] border border-[#D6BFA3] shadow-[0_0_10px_rgba(214,191,163,0.5)] z-10 group-hover/log:scale-125 group-hover/log:shadow-[0_0_15px_rgba(214,191,163,0.8)] transition-all duration-300">
</div>
<div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group-hover/log:translate-x-2">
<div className="w-10 h-10 rounded-lg bg-[#D6BFA3]/10 flex items-center justify-center border border-[#D6BFA3]/20 flex-shrink-0 shadow-inner group-hover/log:bg-[#D6BFA3]/20 transition-colors duration-300">
<iconify-icon className="text-[#D6BFA3] group-hover/log:scale-110 transition-transform duration-300" icon="lucide:database"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-slate-200 group-hover/log:text-white transition-colors">Data Sync Job</span>
<span className="text-[10px] text-slate-500 font-normal">14m ago</span>
</div>
<p className="text-xs text-slate-400 group-hover/log:text-slate-300 transition-colors">
<span className="text-white font-mono bg-white/10 px-1 rounded">1.2M rows</span> processed and validated.
                            </p>
<div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-slate-500">
<iconify-icon className="text-slate-600 group-hover/log:text-slate-400 transition-colors" icon="lucide:clock"></iconify-icon> Duration: 4.2s
                            </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans" id="uc-visual-4">
<div className="h-20 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
<h3 className="text-white font-medium font-manrope text-lg tracking-tight">System Health</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-medium shadow hover:bg-white/[0.1] hover:text-white active:scale-95 transition-all duration-200">Filter</button>
<button className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-medium shadow hover:bg-white/[0.1] hover:text-white active:scale-95 transition-all duration-200">Sort</button>
</div>
</div>
<div className="flex-1 p-6 space-y-4 overflow-y-auto">
<div className="relative group/card p-1 rounded-2xl bg-gradient-to-b from-red-500/20 to-transparent p-[1px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
<div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse-soft">
</div>
<div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group-hover/card:bg-white/[0.05] group-hover/card:border-red-500/30 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden group-hover/card:border-red-500/50 transition-colors duration-300">
<div className="absolute bottom-0 w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)] group-hover/card:h-1.5 transition-all duration-300">
</div>
<span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider group-hover/card:text-red-400 transition-colors">Crit</span>
<span className="text-xl font-semibold text-white tracking-tighter group-hover/card:scale-110 transition-transform duration-300">98</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-slate-200 font-medium text-sm group-hover/card:text-white transition-colors">API Rate Limit Warning</h4>
<span className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-semibold shadow-[0_0_10px_rgba(239,68,68,0.2)]">GATEWAY</span>
</div>
<p className="text-xs text-slate-400 group-hover/card:text-slate-300 transition-colors">Approaching 95% threshold. Traffic shaping applied.</p>
</div>
<button className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-red-500 group-hover/card:translate-x-1 duration-300">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
<div className="relative group/card p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
<div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group-hover/card:bg-white/[0.05] group-hover/card:border-yellow-500/30 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden group-hover/card:border-yellow-500/50 transition-colors duration-300">
<div className="absolute bottom-0 w-full h-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,1)] group-hover/card:h-1.5 transition-all duration-300">
</div>
<span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider group-hover/card:text-yellow-400 transition-colors">High</span>
<span className="text-xl font-semibold text-white tracking-tighter group-hover/card:scale-110 transition-transform duration-300">72</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-slate-200 font-medium text-sm group-hover/card:text-white transition-colors">Memory Usage Spiking</h4>
<span className="px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] text-yellow-400 font-semibold">WORKER-2</span>
</div>
<p className="text-xs text-slate-400 group-hover/card:text-slate-300 transition-colors">Node requires garbage collection or scale-out.</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:text-yellow-400 transition-all text-slate-400 group-hover/card:translate-x-1 duration-300">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
<div className="relative group/card p-[1px] rounded-2xl bg-white/5 opacity-70 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
<div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group-hover/card:bg-white/[0.05] group-hover/card:border-[#7FDBFF]/30 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden group-hover/card:border-[#7FDBFF]/50 transition-colors duration-300">
<div className="absolute bottom-0 w-full h-1 bg-[#7FDBFF] shadow-[0_0_10px_rgba(127,219,255,1)] group-hover/card:h-1.5 transition-all duration-300"></div>
<span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider group-hover/card:text-[#7FDBFF] transition-colors">Info</span>
<span className="text-xl font-semibold text-white tracking-tighter group-hover/card:scale-110 transition-transform duration-300">45</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-slate-200 font-medium text-sm group-hover/card:text-white transition-colors">Cluster Auto-scaled</h4>
<span className="px-2 py-0.5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 text-[10px] text-[#7FDBFF] font-semibold">SYSTEM</span>
</div>
<p className="text-xs text-slate-400 group-hover/card:text-slate-300 transition-colors">Successfully provisioned 2 additional instances.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full grid grid-cols-1 md:grid-cols-4 border-t border-white/5 pt-0 gap-0 mt-4 relative z-20">
<div className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.04] transition-all duration-300 border-t-2 border-[#7FDBFF] -translate-y-1 bg-white/[0.03] shadow-[0_-10px_20px_-10px_rgba(127,219,255,0.15)] rounded-t-xl" id="uc-tab-1" onclick="switchUseCase(1)">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#7FDBFF] text-base tab-icon group-hover:scale-110 transition-transform duration-300" icon="lucide:sparkles"></iconify-icon>
<h4 className="text-sm font-medium text-white tab-title font-manrope transition-colors duration-300">Copilot</h4>
</div>
<p className="text-xs text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">Natural Language Interface for complex workflows.</p>
</div>
<div className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.04] transition-all duration-300 border-t-2 border-transparent hover:border-white/20 hover:-translate-y-1 rounded-t-xl" id="uc-tab-2" onclick="switchUseCase(2)">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500 text-base tab-icon group-hover:text-slate-300 group-hover:scale-110 transition-all duration-300" icon="lucide:layers"></iconify-icon>
<h4 className="tab-title group-hover:text-white text-sm font-normal text-slate-500 font-manrope transition-colors duration-300">Integrations</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">Unified view of connected data sources.</p>
</div>
<div className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.04] transition-all duration-300 border-t-2 border-transparent hover:border-white/20 hover:-translate-y-1 rounded-t-xl" id="uc-tab-3" onclick="switchUseCase(3)">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500 text-base tab-icon group-hover:text-slate-300 group-hover:scale-110 transition-all duration-300" icon="lucide:zap"></iconify-icon>
<h4 className="text-sm font-normal text-slate-500 tab-title group-hover:text-white font-manrope transition-colors duration-300">Monitor</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">Real-time execution telemetry.</p>
</div>
<div className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.04] transition-all duration-300 border-t-2 border-transparent hover:border-white/20 hover:-translate-y-1 rounded-t-xl" id="uc-tab-4" onclick="switchUseCase(4)">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500 text-base tab-icon group-hover:text-slate-300 group-hover:scale-110 transition-all duration-300" icon="lucide:bar-chart-3"></iconify-icon>
<h4 className="text-sm font-normal text-slate-500 tab-title group-hover:text-white font-manrope transition-colors duration-300">Health</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">AI-driven system health signals.</p>
</div>
</div>

</div>
</div>
</section>
<section className="overflow-hidden z-10 font-sans w-full pt-24 pb-32 relative">

<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="mb-28 relative w-full">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

<div className="flex items-center gap-8 mb-16">
<span className="text-xs text-[#D6BFA3] tracking-[0.4em] font-mono font-medium">
                  03
                </span>
<div className="h-px w-20 bg-gradient-to-r from-[#D6BFA3]/60 to-transparent"></div>
<span className="text-xs uppercase font-medium text-white/60 tracking-[0.35em]">
                  Pricing Plans
                </span>
</div>

<div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

<div className="flex-1 space-y-8">
<h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl font-light">
                Simple, transparent
                <br/>
<span className="bg-clip-text font-normal text-transparent bg-gradient-to-b from-white to-white/40">
                      pricing for SynqorAI
                    </span>
</h2>
</div>

<div className="flex-1 max-w-xl space-y-10">
<p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                Start small. Scale as your AI workflows grow. Choose a plan
                that fits your current requirements and upgrade as your autonomous
                workforce expands across your enterprise infrastructure.
              </p>

<div className="flex items-center p-1 w-fit rounded-full border border-white/10 bg-[#1E1E1E]/40 backdrop-blur-sm">
<button className="px-6 py-2 rounded-full text-sm font-normal text-white bg-white/10 shadow-sm border border-white/5 transition-all">
                      Monthly
                    </button>
<button className="px-6 py-2 rounded-full text-sm font-normal text-neutral-500 hover:text-white transition-colors">
                      Yearly
                    </button>
</div>
</div>
</div>
</div>
</div>
<style>
        .pricing-card {
          transition:
            transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 380ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 380ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 380ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pricing-card:hover {
          transform: translateY(-16px);
          background: rgba(30, 30, 30, 0.6);
          border-color: rgba(127, 219, 255, 0.2);
          box-shadow: 0 0 50px -10px rgba(127, 219, 255, 0.2);
        }

        .pricing-card-accent,
        .pricing-card-orb,
        .pricing-card-bottom {
          opacity: 0;
          transition: opacity 380ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pricing-card:hover .pricing-card-accent,
        .pricing-card:hover .pricing-card-orb,
        .pricing-card:hover .pricing-card-bottom {
          opacity: 1;
        }

        .pricing-card-button {
          transition:
            background-color 300ms ease,
            background-image 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease,
            filter 300ms ease;
        }

        .pricing-card:hover .pricing-card-button {
          background-image: linear-gradient(to bottom right, #7FDBFF, #00A1E0);
          border-color: rgba(127, 219, 255, 0.5);
          box-shadow: 0 0 25px rgba(127, 219, 255, 0.35);
          filter: brightness(1.05);
        }
      </style>

<div className="grid grid-cols-1 md:grid-cols-3 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-8 gap-y-8 items-stretch">

<div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">
<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 z-30">
</div>
<div className="relative h-full bg-[#121212] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#7FDBFF]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#7FDBFF]/20 transition-colors duration-500">
</div>
<div className="relative z-10 mb-8">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-black border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-[#7FDBFF] drop-shadow-[0_0_10px_rgba(127,219,255,0.8)]" icon="lucide:scan" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Starter</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">For solo developers and small teams needing essential workflow features.</p>
</div>
<div className="relative z-10 mb-8">
<span className="text-5xl font-medium text-white tracking-tighter text-shadow-sm">$0</span>
<span className="text-slate-500 font-normal ml-1">/mo</span>
</div>
<button className="relative w-full py-4 rounded-xl bg-[#1E1E1E] border border-white/5 shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white hover:border-white/10 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10">
              Try for free
            </button>
<div className="space-y-4 relative z-10 mt-auto">
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 flex items-center justify-center shadow-[0_0_10px_rgba(127,219,255,0.1)]">
<iconify-icon className="text-[#7FDBFF] group-hover/item:text-[#7FDBFF]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">Limited workflows</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 flex items-center justify-center shadow-[0_0_10px_rgba(127,219,255,0.1)]">
<iconify-icon className="text-[#7FDBFF] group-hover/item:text-[#7FDBFF]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">Basic node routing</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 flex items-center justify-center shadow-[0_0_10px_rgba(127,219,255,0.1)]">
<iconify-icon className="text-[#7FDBFF] group-hover/item:text-[#7FDBFF]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">Manual execution triggers</span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-[#D6BFA3]/30 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2 z-10 md:-my-4">
<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#D6BFA3] to-transparent shadow-[0_0_10px_rgba(214,191,163,0.5)] z-30">
</div>
<div className="relative h-full bg-[#121212] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#D6BFA3]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D6BFA3]/20 transition-colors duration-500">
</div>
<div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#D6BFA3]/10 border border-[#D6BFA3]/20 text-[10px] font-medium uppercase tracking-wider text-[#D6BFA3] shadow-[0_0_10px_rgba(214,191,163,0.2)]">
              Most Popular
            </div>
<div className="relative z-10 mb-8">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D6BFA3]/20 to-[#D6BFA3]/5 border border-[#D6BFA3]/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<svg className="drop-shadow-[0_0_10px_rgba(214,191,163,0.5)] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="solar" data-solar="earth-outline" height="28" strokeWidth="2" style={{color: 'rgb(214, 191, 163)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.578 5.343a9.25 9.25 0 0 0 6.803 15.9c-.206-.912-.234-2.138.393-3.319c.652-1.229 2.002-1.762 2.995-2.006a9.2 9.2 0 0 1 1.898-.254h.043c1.673-.018 2.426-.562 2.826-1.08c.342-.444.47-.887.602-1.336l.05-.172A9.22 9.22 0 0 0 18.6 5.519l-.027.1c-.163.594-.425 1.202-.711 1.636c-.256.388-.752.78-1.164 1.076a10 10 0 0 1-.902.56c-.228.132-.433.25-.63.38c-.432.286-.766.593-.991 1.056a.67.67 0 0 0-.035.49c.075.272.126.578.126.889c.002.649-.328 1.176-.753 1.518a2.4 2.4 0 0 1-1.521.526c-2.455-.027-3.965-2.02-4.164-4.236c-.08-.881-.466-1.773-.954-2.552a8.8 8.8 0 0 0-1.296-1.62m1.167-.956a10.5 10.5 0 0 1 1.4 1.779c.558.89 1.069 2.012 1.177 3.214c.15 1.68 1.213 2.854 2.686 2.87a.9.9 0 0 0 .563-.194c.146-.117.196-.24.195-.346c0-.156-.026-.328-.072-.495a2.16 2.16 0 0 1 .131-1.542c.385-.794.956-1.285 1.514-1.653c.239-.158.487-.3.71-.43l.09-.05c.255-.148.48-.28.683-.427c.431-.31.704-.557.787-.684c.183-.276.388-.734.518-1.207c.103-.374.131-.662.122-.84A9.2 9.2 0 0 0 12 2.75a9.2 9.2 0 0 0-5.255 1.637M22.68 13.24q.07-.61.071-1.24c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12S6.063 22.75 12 22.75c5.46 0 9.97-4.071 10.659-9.344a3 3 0 0 1 .048-.156zm-2.774 3.567c-.596.218-1.314.348-2.179.357h-.031l-.09.003a7.7 7.7 0 0 0-1.477.208c-.902.221-1.693.62-2.029 1.252c-.456.859-.39 1.793-.22 2.432a9.26 9.26 0 0 0 6.026-4.252" fill="#d6bfa3" fill-rule="evenodd"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Team</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Collaboration, dynamic integrations, and unlimited nodes for growing teams.</p>
</div>
<div className="relative z-10 mb-8 p-4 rounded-2xl bg-black/40 border border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tighter text-shadow-sm">$49</span>
<div className="flex flex-col ml-2">
<span className="text-xs text-[#D6BFA3] font-medium uppercase tracking-wider">Per User</span>
<span className="text-xs text-slate-500 font-normal">/month billed annually</span>
</div>
</div>
<button className="relative w-full py-4 rounded-xl bg-gradient-to-b from-[#D6BFA3] to-[#B89B7A] border-t border-[#D6BFA3] shadow-[0_4px_15px_rgba(214,191,163,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] text-[#121212] text-sm font-medium hover:brightness-110 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10 overflow-hidden group/btn">
<span className="relative z-10">Start 14-day free trial</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
</button>
<div className="space-y-4 relative z-10 mt-auto">
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#D6BFA3]/10 border border-[#D6BFA3]/20 flex items-center justify-center shadow-[0_0_10px_rgba(214,191,163,0.2)]">
<iconify-icon className="text-[#D6BFA3] group-hover/item:text-[#D6BFA3]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300 group-hover/item:text-white transition-colors font-normal">Unlimited workflows</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#D6BFA3]/10 border border-[#D6BFA3]/20 flex items-center justify-center shadow-[0_0_10px_rgba(214,191,163,0.2)]">
<iconify-icon className="text-[#D6BFA3] group-hover/item:text-[#D6BFA3]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300 group-hover/item:text-white transition-colors font-normal">AI-powered node orchestration</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#D6BFA3]/10 border border-[#D6BFA3]/20 flex items-center justify-center shadow-[0_0_10px_rgba(214,191,163,0.2)]">
<iconify-icon className="text-[#D6BFA3] group-hover/item:text-[#D6BFA3]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300 group-hover/item:text-white transition-colors font-normal">Advanced integrations</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-[#D6BFA3]/10 border border-[#D6BFA3]/20 flex items-center justify-center shadow-[0_0_10px_rgba(214,191,163,0.2)]">
<iconify-icon className="text-[#D6BFA3] group-hover/item:text-[#D6BFA3]/80 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300 group-hover/item:text-white transition-colors font-normal">Collaborative workspaces</span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#1E1E1E] to-[#121212] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">
<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 z-30">
</div>
<div className="relative h-full bg-[#121212] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500">
</div>
<div className="relative z-10 mb-8">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-black border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" height="24" icon="simple-icons:anydesk" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Enterprise</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Custom deployment, SSO, and advanced security for large organizations.</p>
</div>
<div className="relative z-10 mb-8">
<span className="text-5xl font-medium text-white tracking-tighter text-shadow-sm">Custom</span>
</div>
<button className="relative w-full py-4 rounded-xl bg-[#1E1E1E] border border-white/5 shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white hover:border-white/10 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10">
              Contact sales
            </button>
<div className="space-y-4 relative z-10 mt-auto">
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white group-hover/item:text-slate-300 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">VPC Deployment</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white group-hover/item:text-slate-300 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">SSO &amp; Audit logs</span>
</div>
<div className="flex items-center gap-3 group/item">
<div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white group-hover/item:text-slate-300 transition-colors" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-normal">Priority SLA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden z-10 font-sans w-full pt-24 pb-32 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative group/section">
<div className="mb-28 relative w-full">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">
<div className="flex items-center gap-8 mb-16">
<span className="text-xs text-[#D6BFA3] tracking-[0.4em] font-mono font-medium group-hover/section:text-[#7FDBFF] transition-colors duration-700">04</span>
<div className="h-px w-20 bg-gradient-to-r from-[#D6BFA3]/60 to-transparent group-hover/section:from-[#7FDBFF]/60 transition-colors duration-700"></div>
<span className="text-xs uppercase font-medium text-white/60 tracking-[0.35em] group-hover/section:text-white/80 transition-colors duration-700">
            Success Stories
          </span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">
<div className="flex-1 space-y-8">
<h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope font-light max-w-3xl">
                Empowering data teams,
                <br/>
<span className="bg-clip-text font-normal text-transparent bg-gradient-to-b from-white to-white/40 group-hover/section:from-[#7FDBFF] group-hover/section:to-white/40 transition-all duration-1000">
                trusted by enterprises
              </span>
</h2>
</div>
<div className="flex-1 max-w-xl space-y-10">
<p className="leading-relaxed text-lg font-light text-slate-400 font-manrope group-hover/section:text-slate-300 transition-colors duration-700">
                Discover how global enterprises are transforming their data operations with SynqorAI's autonomous workflow orchestration.
              </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 rounded-full text-sm font-normal text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<span>Read case studies</span>
<iconify-icon className="text-slate-400 group-hover:text-white transition-all group-hover:translate-x-1 duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col group/container overflow-hidden md:block md:h-[650px] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[1200px] mr-auto ml-auto pt-12 pb-12 relative perspective-distant" id="testimonials-container">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7FDBFF]/10 blur-[120px] rounded-full z-0 pointer-events-none transition-opacity duration-700 animate-[pulse_4s_ease-in-out_infinite]">
</div>
<div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-6 z-40">
<button className="group w-14 h-14 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-t border-white/10 border-b border-black shadow-[0_8px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 active:shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:text-slate-400" onclick="handleTestimonialSwipe(-1)">
<svg className="group-hover:-translate-x-1 transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="group w-14 h-14 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-t border-white/10 border-b border-black shadow-[0_8px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 active:shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:text-slate-400" onclick="handleTestimonialSwipe(1)">
<svg className="group-hover:translate-x-1 transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[400px] md:-translate-x-[130%] md:-translate-y-[50%] md:-rotate-[8deg] md:scale-[0.8] z-10 md:opacity-40 hover:md:opacity-80 hover:z-20 md:blur-[2px] hover:md:blur-none" id="testimonial-card-1" onclick="handleCardClick(0)">
<div className="relative flex flex-col bg-gradient-to-b from-[#1E1E1E]/90 to-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-30">
</div>
<div className="relative h-full bg-[#121212]/80 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-8 flex flex-col group-[.z-30]:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow duration-700">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
</div>
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#7FDBFF]/5 to-transparent pointer-events-none group-[.z-30]:from-[#7FDBFF]/15 transition-colors duration-700">
</div>
<div className="relative z-10">
<div className="flex items-center gap-1 mb-6 text-[#D6BFA3] drop-shadow-[0_0_8px_rgba(214,191,163,0.4)]">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<blockquote className="leading-relaxed text-lg text-slate-300 mb-8 font-light group-[.z-30]:text-white transition-colors duration-700">
            "SynqorAI has completely transformed how we scale our data pipelines. The autonomous orchestration capabilities are unmatched."
          </blockquote>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="flex group-[.z-30]:border-white/20 group-[.z-30]:text-white transition-colors duration-700 text-sm font-medium text-slate-300 tracking-wider bg-[#1E1E1E] w-12 h-12 border-white/10 border rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] items-center justify-center">SF</div>
<div className="">
<div className="group-[.z-30]:text-white transition-colors duration-700 text-sm font-medium text-slate-200 tracking-wide">Sandra F</div>
<div className="text-xs text-slate-500 font-light">CTO at TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[480px] md:-translate-x-1/2 md:-translate-y-[65%] z-30 md:opacity-100 md:rotate-0 md:scale-110 md:blur-none md:shadow-2xl" id="testimonial-card-2" onclick="handleCardClick(1)">
<div className="relative flex flex-col bg-gradient-to-b from-[#1E1E1E]/90 to-[#121212]/90 backdrop-blur-xl border border-[#7FDBFF]/30 rounded-[2.5rem] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_30px_rgba(127,219,255,0.15)] group-[.z-30]:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_40px_rgba(127,219,255,0.25)] transition-shadow duration-700">
<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#7FDBFF] to-transparent opacity-100 z-30 shadow-[0_0_10px_rgba(127,219,255,0.8)] group-[.z-30]:shadow-[0_0_15px_rgba(127,219,255,1)] transition-shadow duration-700">
</div>
<div className="relative h-full bg-[#121212]/90 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-10 flex flex-col">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
</div>
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#7FDBFF]/10 to-transparent pointer-events-none group-[.z-30]:from-[#7FDBFF]/20 transition-colors duration-700">
</div>
<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#7FDBFF]/15 rounded-full blur-[80px] pointer-events-none group-[.z-30]:bg-[#7FDBFF]/30 transition-colors duration-700 animate-[pulse_4s_ease-in-out_infinite]">
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-1 text-[#D6BFA3] drop-shadow-[0_0_8px_rgba(214,191,163,0.5)]">
<svg className="w-5 h-5" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-5 h-5" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-5 h-5" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-5 h-5" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-5 h-5" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<span className="px-3 py-1 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/30 text-[#7FDBFF] text-[10px] font-medium uppercase tracking-widest shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
              Featured
            </span>
</div>
<blockquote className="text-xl md:text-[1.35rem] text-slate-300 group-[.z-30]:text-white transition-colors duration-700 mb-10 leading-relaxed font-light tracking-tight text-shadow-sm flex-1">
            "The real-time execution monitor is a game changer. We manage complex integration networks with zero anxiety and total transparency."
          </blockquote>
<div className="flex items-center gap-5 pt-6 border-t border-white/10 mt-auto">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7FDBFF] to-[#00A1E0] p-[2px] shadow-[0_0_15px_rgba(127,219,255,0.3)] group-[.z-30]:shadow-[0_0_25px_rgba(127,219,255,0.5)] transition-shadow duration-700">
<div className="flex font-medium text-white tracking-widest bg-[#1E1E1E] w-full h-full border-[#1E1E1E] border-2 rounded-full shadow-inner items-center justify-center">ML</div>
</div>
<div className="absolute bottom-0 right-0 bg-[#D6BFA3] w-4 h-4 rounded-full border-[3px] border-[#121212] shadow-[0_0_8px_rgba(214,191,163,0.8)]">
</div>
</div>
<div className="">
<div className="group-[.z-30]:text-white transition-colors duration-700 text-base font-medium text-slate-200 tracking-wide">Monali L</div>
<div className="text-sm text-[#7FDBFF]/80 font-light">Lead Architect at CloudBase</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[400px] md:translate-x-[30%] md:-translate-y-[50%] md:rotate-[8deg] md:scale-[0.8] z-10 md:opacity-40 hover:md:opacity-80 hover:z-20 md:blur-[2px] hover:md:blur-none" id="testimonial-card-3" onclick="handleCardClick(2)">
<div className="relative flex flex-col bg-gradient-to-b from-[#1E1E1E]/90 to-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-30">
</div>
<div className="relative h-full bg-[#121212]/80 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-8 flex flex-col group-[.z-30]:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow duration-700">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
</div>
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#7FDBFF]/5 to-transparent pointer-events-none group-[.z-30]:from-[#7FDBFF]/15 transition-colors duration-700">
</div>
<div className="relative z-10">
<div className="flex items-center gap-1 mb-6 text-[#D6BFA3] drop-shadow-[0_0_8px_rgba(214,191,163,0.4)]">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<blockquote className="leading-relaxed group-[.z-30]:text-white transition-colors duration-700 text-lg font-light text-slate-300 mb-8">
            "Simply the best platform for managing enterprise AI workflows. It helped us automate manual ETLS we thought were impossible to scale."
          </blockquote>
<div className="flex gap-4 border-white/5 border-t pt-6 gap-x-4 gap-y-4 items-center">
<div className="flex group-[.z-30]:border-white/20 group-[.z-30]:text-white transition-colors duration-700 text-sm font-medium text-slate-300 tracking-wider bg-[#1E1E1E] w-12 h-12 border-white/10 border rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] items-center justify-center">AJ</div>
<div className="">
<div className="group-[.z-30]:text-white transition-colors duration-700 text-sm font-medium text-slate-200 tracking-wide">Amiya J</div>
<div className="text-xs font-light text-slate-500">VP Data at Nexus Labs</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="overflow-hidden font-sans w-full z-10 pt-24 pb-0 relative">

<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll group/cta bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-white/10 border rounded-[3.5rem] mb-32 pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">
<div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-50 pointer-events-none"></div>
<div className="overflow-hidden bg-[#121212] ring-white/5 ring-1 rounded-[3rem] pt-32 pb-32 relative shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)]">
<div className="pointer-events-none z-0 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#7FDBFF]/10 blur-[120px] pointer-events-none rounded-full z-0 transition-opacity duration-700 group-hover/cta:opacity-100 opacity-70"></div>
<div className="z-0 pointer-events-none opacity-80 mix-blend-screen w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<style>
    @keyframes flow {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    @keyframes float-grid {
      0% { background-position: 0 0; }
      100% { background-position: 0 40px; }
    }
    @keyframes spin-slow {
      0% { transform: rotate(0deg) scale(1.5); }
      50% { transform: rotate(180deg) scale(1.2); }
      100% { transform: rotate(360deg) scale(1.5); }
    }
  </style>

<div className="absolute inset-0 bg-[linear-gradient(rgba(127,219,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(127,219,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" style={{animation: 'float-grid 3s linear infinite'}}></div>

<div className="absolute top-0 left-[15%] w-px h-[40%] bg-gradient-to-b from-transparent via-[#7FDBFF] to-transparent shadow-[0_0_10px_rgba(127,219,255,0.8)]" style={{animation: 'flow 4s ease-in-out infinite'}}></div>
<div className="absolute top-0 left-[35%] w-px h-[55%] bg-gradient-to-b from-transparent via-[#D6BFA3] to-transparent shadow-[0_0_10px_rgba(214,191,163,0.8)]" style={{animation: 'flow 6s ease-in-out infinite 1s'}}></div>
<div className="absolute top-0 left-[65%] w-px h-[35%] bg-gradient-to-b from-transparent via-[#00A1E0] to-transparent shadow-[0_0_10px_rgba(0,161,224,0.8)]" style={{animation: 'flow 5s ease-in-out infinite 2s'}}></div>
<div className="absolute top-0 left-[85%] w-px h-[60%] bg-gradient-to-b from-transparent via-[#7FDBFF] to-transparent shadow-[0_0_10px_rgba(127,219,255,0.8)]" style={{animation: 'flow 7s ease-in-out infinite 0.5s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-60 mix-blend-screen">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,219,255,0.15)_0%,transparent_50%)] origin-center" style={{animation: 'spin-slow 20s linear infinite', transformOrigin: '40% 60%'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,191,163,0.12)_0%,transparent_50%)] origin-center" style={{animation: 'spin-slow 25s linear infinite reverse', transformOrigin: '60% 40%'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,161,224,0.1)_0%,transparent_40%)] origin-center" style={{animation: 'spin-slow 30s linear infinite', transformOrigin: '30% 70%'}}></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-transparent to-[#121212]/95"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#121212_100%)] opacity-80"></div>
</div>

<div className="relative z-10 text-center max-w-3xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7FDBFF]/20 bg-[#7FDBFF]/10 mb-8 shadow-[inset_0_0_10px_rgba(127,219,255,0.1)] backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#7FDBFF] animate-pulse shadow-[0_0_8px_rgba(127,219,255,0.8)]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7FDBFF] drop-shadow-sm">
            Initialize SynqorAI
          </span>
</div>
<h2 className="text-5xl md:text-6xl text-white tracking-tight font-manrope font-light leading-[1.1] mb-8 drop-shadow-lg">
          Automate your<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#D6BFA3] via-[#D6BFA3]/90 to-[#D6BFA3]/40 font-medium drop-shadow-sm">
            Workflow Ecosystem
          </span>
</h2>
<p className="leading-relaxed text-lg font-light text-slate-400 font-manrope max-w-2xl mr-auto mb-12 ml-auto drop-shadow-md">
          Deploy intelligent workflows that learn your business logic and
          execute complex processes across your entire infrastructure.
          Start your enterprise transformation today.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="relative px-8 py-4 rounded-full bg-[#D6BFA3] text-[#121212] text-sm font-semibold tracking-wide hover:brightness-110 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(214,191,163,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(214,191,163,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border-t border-[#D6BFA3] ring-1 ring-[#D6BFA3]/50">
            Get Started Now
          </button>
<button className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md active:scale-[0.98]">
            Schedule Demo
          </button>
</div>
</div>
</div>
</div>
<footer className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#1E1E1E]/50 border-white/5 rounded-t-[3rem] border-t mt-12 pt-16 pr-8 pb-12 pl-8 relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D6BFA3]/30 to-transparent"></div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 relative z-10">
<div className="col-span-2 lg:col-span-1">
<div className="mb-6 relative inline-block">
<div className="absolute inset-0 bg-[#D6BFA3]/20 blur-xl rounded-full"></div>
<div className="flex-1 flex gap-x-3 gap-y-3 items-center">
<svg className="w-[32px] h-[32px] drop-shadow-[0_0_8px_rgba(127,219,255,0.6)]" data-icon-replaced="true" fill="none" height="32" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill="#1E1E1E" stroke="#7FDBFF" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path className="" d="M25 7H13L7 16H25L19 25H7" stroke="#D6BFA3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="text-[#D6BFA3] font-manrope font-light text-2xl tracking-tight">SynqorAI</span>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-manrope font-light max-w-[200px]">
          The operating system for enterprise AI workflow automation and orchestration.
        </p>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1" href="#">
<iconify-icon className="" icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold mb-6 tracking-widest uppercase opacity-80">Platform</h4>
<ul className="space-y-4">
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Workflow Hub</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Execution Monitor</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Data Layer</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold mb-6 tracking-widest uppercase opacity-80">Solutions</h4>
<ul className="space-y-4">
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Data Ingestion</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Auto-Scaling</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Security Ops</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold mb-6 tracking-widest uppercase opacity-80">Company</h4>
<ul className="space-y-4">
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>About</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Careers</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold mb-6 tracking-widest uppercase opacity-80">Resources</h4>
<ul className="space-y-4">
<li><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Documentation</a></li>
<li><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>API Reference</a></li>
<li className=""><a className="group flex items-center text-sm text-slate-400 hover:text-[#D6BFA3] transition-colors font-light" href="#"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#D6BFA3] opacity-0 group-hover:opacity-100">›</span>Community</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 relative z-10">
<div className="flex flex-wrap justify-center items-center gap-6 order-2 md:order-1">
<span className="text-xs font-normal text-slate-600">© 2026 SynqorAI Technologies Inc. <span className="mx-2 opacity-50">|</span> UI/UX by Kunal Lonare</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light" href="#">Cookies</a>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7FDBFF]/10 border border-[#7FDBFF]/20 order-1 md:order-2 shadow-[inset_0_0_10px_rgba(127,219,255,0.1)]">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FDBFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#7FDBFF] shadow-[0_0_5px_rgba(127,219,255,0.8)]"></span>
</div>
<span className="text-[10px] text-[#7FDBFF] font-semibold uppercase tracking-wider">
          All Systems Operational
        </span>
</div>
</div>
</footer>
</div>
</section>
</main>

    </>
  );
}
