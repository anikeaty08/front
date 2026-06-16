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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function() {
      const section = document.getElementById('feature-scroll-section');
      const items = [
        document.getElementById('nav-item-1'),
        document.getElementById('nav-item-2'),
        document.getElementById('nav-item-3'),
        document.getElementById('nav-item-4')
      ];
      
      const chatSidebar = document.getElementById('chat-sidebar');
      const propsSidebar = document.getElementById('props-sidebar');
      const selectionOverlay = document.getElementById('selection-overlay');
      const cmsOverlay = document.getElementById('cms-overlay');
      const syncOverlay = document.getElementById('sync-overlay');
      
      let currentState = 1;

      const setActiveItem = (index) => {
        items.forEach((item, i) => {
          const isActive = (i + 1) === index;
          
          const line = item.querySelector('.active-line');
          const title = item.querySelector('.title');
          const content = item.querySelector('.content');
          
          if (isActive) {
            line.style.opacity = '1';
            line.style.height = '100%';
            title.classList.replace('text-zinc-600', 'text-white');
            content.style.maxHeight = '200px';
            content.style.opacity = '1';
          } else {
            line.style.opacity = '0';
            line.style.height = '0';
            title.classList.replace('text-white', 'text-zinc-600');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
          }
        });
      };

      const updateMockup = (state) => {
        // Reset all states first
        chatSidebar.style.width = '0px';
        chatSidebar.style.opacity = '0';
        propsSidebar.style.width = '0px';
        propsSidebar.style.opacity = '0';
        selectionOverlay.style.opacity = '0';
        cmsOverlay.style.opacity = '0';
        cmsOverlay.style.pointerEvents = 'none';
        syncOverlay.style.opacity = '0';

        if (state === 1) { // Gen UI
          chatSidebar.style.width = '280px';
          chatSidebar.style.opacity = '1';
        } else if (state === 2) { // Visual Editor
          propsSidebar.style.width = '240px';
          propsSidebar.style.opacity = '1';
          setTimeout(() => selectionOverlay.style.opacity = '1', 300);
        } else if (state === 3) { // CMS
           cmsOverlay.style.opacity = '1';
           cmsOverlay.style.pointerEvents = 'auto';
        } else if (state === 4) { // Sync
           syncOverlay.style.opacity = '1';
        }
      };

      const handleScroll = () => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate progress through the section relative to viewport
        // 0 = section entering from bottom, 1 = section leaving top
        const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1);
        
        let newState = 1;
        if (progress < 0.35) newState = 1;
        else if (progress < 0.55) newState = 2;
        else if (progress < 0.75) newState = 3;
        else newState = 4;

        if (newState !== currentState) {
          currentState = newState;
          setActiveItem(currentState);
          updateMockup(currentState);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check
      handleScroll();
    })();
  


        (function() {
          const faqItems = document.querySelectorAll('[data-element-id="aura-emh906t4ngsde0i5h"] .faq-item');
          
          faqItems.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');
            
            trigger.addEventListener('click', () => {
              const isOpen = content.style.display === 'block';
              
              if (isOpen) {
                content.style.display = 'none';
                icon.innerHTML = '<path d="M5 12h14"></path><path d="M12 5v14"></path>';
                trigger.setAttribute('aria-expanded', 'false');
              } else {
                content.style.display = 'block';
                icon.innerHTML = '<path d="M5 12h14"></path>';
                trigger.setAttribute('aria-expanded', 'true');
              }
            });
          });
        })();
        


        lucide.createIcons();
        
        // Mobile menu
        const menuBtn = document.getElementById('menuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
        closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
        mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));
        
        // Accordion
        document.querySelectorAll('.accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.closest('.accordion-item');
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('.accordion-icon');
                const isOpen = content.classList.contains('open');
                
                content.classList.toggle('open');
                icon.classList.toggle('open');
                trigger.setAttribute('aria-expanded', !isOpen);
            });
        });

        // Year
        document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[840px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"><div data-us-text="id-cc6uybuk7hm7zovd7h2ii3" style={{width: '1845.89px', top: '234.667px', left: '101.057px', fontSize: '368.64px', lineHeight: '370.665px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-8vf2c3usjujgw26c93nyfm" style={{width: '1515.52px', top: '239.366px', left: '266.24px', fontSize: '368.64px', lineHeight: '361.267px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div></div>
</div>
<div className="gradient-blur">
<div className=""></div>
<div className=""></div>
<div></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
</div>
<style className="">
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>


<header className="sticky z-20 top-0">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-x-2 gap-y-2 items-center" onclick="window.location.href='/index'" role="button">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="layers-bold-duotone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="#ffffff">
</path>
<path className="" clip-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" fill="#ffffff" fill-rule="evenodd"></path>
<path className="" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="#ffffff" opacity=".7"></path>
<path className="" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" fill="#ffffff" opacity=".4"></path>
</svg>
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59828c7b-af73-42f3-a409-8e57afbb2db4_320w.png?w=800&amp;q=80)] bg-cover rounded-full invert" href="/index"></a>
</div>
<nav className="hidden gap-6 md:flex gap-x-6 gap-y-6 items-center">
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="/features">Features</a><a className="nav-link hover:text-white text-sm text-slate-300 relative" href="/community">Community</a>
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="/templates">Templates</a>
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="/resources">Resources</a>
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="/pricing">Pricing</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-sm text-white bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4" href="/login">Log
        in</a>
</nav>
<button aria-label="Open menu" className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="menuBtn">
<svg aria-hidden="true" className="lucide lucide-menu w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<aside aria-label="Mobile menu" className="mobile-menu fixed z-50 bg-slate-950/95 w-[80%] max-w-sm border-white/10 border-l pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 backdrop-blur" id="mobileMenu">
<div className="flex items-center justify-between">
<span className="font-semibold">Cauras</span>
<button aria-label="Close menu" className="rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="closeMenuBtn">
<svg aria-hidden="true" className="lucide lucide-x h-6 w-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="mt-6 space-y-4">
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="/features">Features</a>
</li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="/community">Community</a>
</li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="/templates">Templates</a>
</li>
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="/resources">Resources</a>
</li>
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="/pricing">Pricing</a>
</li>
</ul>
<a className="mobile-link mt-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition-colors" href="/login">
      Log in <svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</aside>
</header>

<section className="text-left max-w-7xl mr-auto ml-auto pt-16 pb-36 pl-20 relative">
<div className="text-center max-w-3xl mr-auto ml-0">
<h1 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-8xl font-medium text-zinc-100 tracking-tighter font-geist text-left mt-20" style={{maskImage: 'linear-gradient(290deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(290deg, transparent, black 0%, black 40%, transparent)'}}>Design and publish your dream site.</h1>
<div className="flex flex-wrap xl:mt-10 mt-12 gap-x-3 gap-y-3 justify-start">
<div className="inline-block bg-transparent">
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #3b82f6 5%, var(--gradient-shine) 15%, #3b82f6 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #3b82f6, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #3b82f6; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<button className="shiny-cta focus:outline-none">
<span className="">Start for free</span>
</button>
</div>
<a className="inline-flex items-center gap-2 hover:bg-white/5 transition-colors text-sm text-white border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-2xl" href="#showcase">
                    Watch Video <svg aria-hidden="true" className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>

</div>
</section>

<div className="flex xl:pt-0 xl:pb-0 sm:pl-4 sm:pr-4 sm:pt-20 sm:pb-0 w-screen h-1000 pt-20 pr-2 pb-40 pl-2 scale-100 rotate-x-5 items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)'}}>
<div className="flex flex-col overflow-hidden xl:bg-neutral-900/20 bg-neutral-900 w-full h-[700px] max-w-7xl max-h-[95vh] border-neutral-800 border rounded-xl shadow-2xl backdrop-blur-xl perspective-none" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}>

<div className="flex border-neutral-700/50 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center justify-between" style={{background: 'rgba(40, 40, 40, 0.5)'}}>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full" style={{background: '#505050'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: '#606060'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: '#707070'}}></div>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
<span className="text-white">Portfolio v2</span>
<span>/</span>
<span>Desktop</span>
</div>
<div className="flex items-center gap-2">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] px-2 py-1 rounded font-medium">Publish</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="flex flex-col w-60 border-neutral-800/50 border-r" style={{background: 'rgba(30, 30, 30, 0.8)'}}>
<div className="p-3 border-b border-neutral-800/50 flex justify-between items-center">
<span className="text-xs font-semibold text-neutral-400">Layers</span>
<svg className="text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 overflow-y-auto pt-2 pb-2">
<div className="px-2 py-1 text-xs text-white bg-blue-600/20 rounded mx-2 flex items-center gap-2">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
                Desktop
            </div>
<div className="pl-6 pr-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                Navigation
            </div>
<div className="pl-6 pr-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
                Hero Section
            </div>
<div className="pl-10 pr-2 py-1 text-xs text-blue-400 bg-neutral-800/50 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>
                Heading
            </div>
<div className="pl-10 pr-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Image
            </div>
<div className="pl-6 pr-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
                Grid
            </div>
</div>
<div className="border-neutral-800/50 border-t pt-3 pr-3 pb-3 pl-3">
<div className="text-[10px] text-neutral-500 uppercase font-semibold mb-2">Assets</div>
<div className="grid grid-cols-4 gap-2">
<div className="aspect-square bg-neutral-800 rounded"></div>
<div className="aspect-square bg-neutral-800 rounded"></div>
<div className="aspect-square bg-neutral-800 rounded"></div>
<div className="aspect-square bg-neutral-800 rounded"></div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#111] relative overflow-hidden items-center justify-center p-8">

<div className="bg-black w-full max-w-2xl h-full shadow-2xl border border-neutral-800 relative overflow-hidden group">

<div className="opacity-[0.1] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-[30%] left-[10%] right-[10%] h-[120px] border-2 border-blue-500 z-20 pointer-events-none">
<div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500"></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500"></div>
<div className="absolute -top-6 left-0 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm">H1 Heading</div>
</div>

<nav className="flex items-center justify-between p-6 border-b border-neutral-900">
<div className="w-8 h-8 bg-neutral-800 rounded-full"></div>
<div className="flex gap-4">
<div className="w-16 h-2 bg-neutral-900 rounded-full"></div>
<div className="w-16 h-2 bg-neutral-900 rounded-full"></div>
</div>
</nav>
<div className="p-12 text-center mt-10">
<h1 className="text-5xl font-bold text-white tracking-tighter mb-4">Design the future.</h1>
<p className="text-neutral-500 text-lg max-w-md mx-auto">Create stunning experiences with a powerful visual editor.</p>
<div className="mt-8 flex justify-center gap-4">
<div className="h-10 w-32 bg-white rounded-full"></div>
<div className="h-10 w-32 border border-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</main>

<aside className="w-64 border-l border-neutral-800/50 flex flex-col" style={{background: 'rgba(30, 30, 30, 0.8)'}}>
<div className="px-4 py-3 border-b border-neutral-800/50 flex justify-between items-center">
<div className="text-xs font-semibold text-neutral-400">Heading</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="">
<div className="text-[10px] text-neutral-500 font-bold uppercase mb-2">Position</div>
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="bg-neutral-800/50 rounded p-1.5 flex items-center justify-between">
<span className="text-[10px] text-neutral-500">X</span>
<span className="text-xs text-white">120</span>
</div>
<div className="bg-neutral-800/50 rounded p-1.5 flex items-center justify-between">
<span className="text-[10px] text-neutral-500">Y</span>
<span className="text-xs text-white">340</span>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-neutral-800/50 rounded p-1.5 flex items-center justify-between">
<span className="text-[10px] text-neutral-500">W</span>
<span className="text-xs text-white">Fill</span>
</div>
<div className="bg-neutral-800/50 rounded p-1.5 flex items-center justify-between">
<span className="text-[10px] text-neutral-500">H</span>
<span className="text-xs text-white">Auto</span>
</div>
</div>
</div>

<div className="">
<div className="text-[10px] text-neutral-500 font-bold uppercase mb-2">Typography</div>
<div className="bg-neutral-800/50 rounded p-2 mb-2 flex justify-between items-center">
<span className="text-xs text-white">Inter</span>
<svg className="text-neutral-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="flex gap-2 mb-2">
<div className="bg-neutral-800/50 rounded p-1.5 flex-1 flex justify-center">
<span className="text-xs text-white font-bold">B</span>
</div>
<div className="bg-neutral-800/50 rounded p-1.5 flex-1 flex justify-center">
<span className="text-xs text-white italic">I</span>
</div>
<div className="bg-neutral-800/50 rounded p-1.5 flex-1 flex justify-center">
<span className="text-xs text-white underline">U</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white border border-neutral-600"></div>
<span className="text-xs text-white">#FFFFFF</span>
<span className="text-xs text-neutral-500 ml-auto">100%</span>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-2">
<div className="text-[10px] text-neutral-500 font-bold uppercase">Effects</div>
<svg className="text-neutral-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs text-neutral-300 py-1">
<span className="">Appear</span>
<span className="text-blue-400">Fade In</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-300 py-1">
<span className="">Hover</span>
<span className="text-blue-400">Scale</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div><section className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate sm:px-6 lg:px-8 lg:pt-6 z-10 max-w-7xl mt-8 mr-auto mb-16 ml-auto pt-6 pr-4 pb-6 pl-4 relative">


<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
      Empowering design teams at
    </p>
</div>
<div className="overflow-hidden mt-6 relative">
<style>
      @keyframes smoothCarousel {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .carousel-wrapper {
        animation: smoothCarousel 40s linear infinite;
        width: max-content;
      }
      .carousel-wrapper:hover {
        animation-play-state: paused;
      }
    </style>
<div className="w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex carousel-wrapper gap-x-12 lg:gap-x-24 items-center">

<div className="flex gap-x-12 lg:gap-x-24 shrink-0 items-center">
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="" height="30" icon="logos:google"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="invert" height="28" icon="logos:openai"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon height="28" icon="logos:microsoft"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="" height="28" icon="logos:stripe"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="invert" height="24" icon="logos:vercel"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="" height="24" icon="logos:meta"></iconify-icon>
</a>
</div>

<div className="flex gap-x-12 lg:gap-x-24 shrink-0 items-center">
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon height="30" icon="logos:google"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="invert" height="28" icon="logos:openai"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon height="28" icon="logos:microsoft"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon height="28" icon="logos:stripe"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon className="invert" height="24" icon="logos:vercel"></iconify-icon>
</a>
<a className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" href="#">
<iconify-icon height="24" icon="logos:meta"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section><section className="sm:pt-24 md:pt-120 max-w-7xl mr-auto ml-auto pt-24 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<h2 className="sm:text-5xl text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)'}}>Ship sites with speed</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 gap-x-5 gap-y-5">

<div className="group overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:ring-blue-500/20 z-10 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex mb-4 items-start justify-between" style={{}}>
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-white/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<div className="h-1.5 w-1.5 animate-pulse bg-blue-400 rounded-full"></div>
              Editor
            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2" style={{}}>Visual Editing</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6" style={{}}>Design just like you would in Figma. Drag, drop, and style elements with pixel-perfect precision.</p>

<div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-44 ring-white/5 ring-1 rounded-xl flex items-center justify-center" style={{}}>
<div className="relative w-32 h-24 border border-dashed border-neutral-700 rounded bg-neutral-900/50 flex flex-col p-2 gap-2 shadow-2xl backdrop-blur-sm">
<div className="w-full h-2 bg-neutral-800 rounded-full"></div>
<div className="flex gap-2 h-full">
<div className="w-1/3 h-full bg-neutral-800/50 rounded"></div>
<div className="w-2/3 h-full bg-neutral-800/50 rounded border border-blue-500/50 relative">

<div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-4 right-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">Width: 320px</span></div>
<div className="absolute bottom-4 left-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">Flex Layout</span></div>
</div>
</div>
</div>

<div className="group overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:ring-indigo-500/20 z-10 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-white/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<div className="h-1.5 w-1.5 animate-pulse bg-indigo-400 rounded-full"></div>
              Motion
            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">Animation</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Add scroll transforms, appearing effects, and component interactions without writing code.</p>

<div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-44 ring-white/5 ring-1 rounded-xl flex items-center justify-center">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/40 to-indigo-600/10 border border-indigo-500/50 animate-bounce shadow-lg shadow-indigo-500/20"></div>
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/40 to-indigo-600/10 border border-indigo-500/50 animate-bounce shadow-lg shadow-indigo-500/20" style={{animationDelay: '0.1s'}}></div>
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/40 to-indigo-600/10 border border-indigo-500/50 animate-bounce shadow-lg shadow-indigo-500/20" style={{animationDelay: '0.2s'}}></div>
</div>

<div className="absolute top-3 left-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">Scroll Y</span></div>
<div className="absolute bottom-3 right-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">Spring: 120</span></div>
</div>
</div>
</div>

<div className="group overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:ring-emerald-500/20 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-white/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<div className="h-1.5 w-1.5 animate-pulse bg-emerald-400 rounded-full"></div>
              Speed
            </span>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-2">Performance</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Sites are optimized automatically and deployed to a global edge network for blazing speed.</p>

<div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-44 ring-white/5 ring-1 rounded-xl flex items-center justify-center">
<div className="relative w-[150px] h-[150px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 rounded-full border border-dashed border-white/10"></div>
<div className="absolute inset-8 rounded-full border border-dashed border-white/10"></div>

<span className="absolute top-1/2 left-1/2 origin-top-left border-dashed animate-[radar81_4s_linear_infinite] w-1/2 h-full bg-gradient-to-r from-emerald-500/20 to-transparent border-t border-emerald-500/50" style={{marginTop: '-1px', maskImage: 'linear-gradient(to right, black, transparent)'}}></span>
</div>

<div className="absolute top-4 left-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">Score: 100</span></div>
<div className="absolute bottom-4 right-4"><span className="inline-flex items-center ring-1 ring-white/10 text-[10px] font-medium text-neutral-300 bg-neutral-900/80 rounded-full py-0.5 px-2 backdrop-blur-sm">CDN Active</span></div>
</div>
</div>
</div>
</div>
</div>
<style className="">
    @keyframes radar81 {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</section><section className="mt-40 mb-24 pt-0 pb-0 relative" id="features">
<div className="sm:px-6 lg:px-8 lg:pb-0 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-2xl font-medium text-white tracking-tighter text-left mb-0 sm:text-5xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)'}}>A complete visual workspace</h2>
<section className="mt-10 mb-20 pt-0 pb-0 relative">
<div className="sm:px-6 lg:px-8 lg:pt-8 max-w-full pt-16 pr-4 pb-16 pl-4">
<div className="rounded-2xl mt-10 backdrop-blur" style={{maskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-lg text-white">Visual Layout</h3>
<p className="text-sm text-zinc-400 mt-1">Freeform positioning on the canvas</p>
</div>
<div className="md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Effects &amp; Motion</h3>
<p className="text-sm text-zinc-400 mt-1">Scroll transforms and animations</p>
</div>
<div className="md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">CMS</h3>
<p className="text-sm text-zinc-400 mt-1">Manage content at scale</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="md:border-r md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Instant Publish</h3>
<p className="text-sm text-zinc-400 mt-1">Live in seconds with global CDN</p>
</div>
<div className="hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Localization</h3>
<p className="text-sm text-zinc-400 mt-1">Translate your site instantly</p>
</div>
</div>
</div>
</div>
</section>
</div>
</section><section className="overflow-hidden group sm:pb-40 sm:pt-40 bg-black border-white/10 border-t pt-24 pb-24 relative" id="feature-scroll-section">

<div className="-translate-x-1/2 blur-[120px] pointer-events-none -z-10 bg-blue-500/5 w-full h-[500px] max-w-3xl rounded-full absolute top-0 left-1/2"></div>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="max-w-4xl mb-24">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[0.95] mb-6">
        Design, develop, and deploy.
      </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-24 items-start">

<div className="flex flex-col w-full space-y-2">

<div className="relative pl-8 py-4 border-l border-white/10 cursor-pointer group transition-all duration-500 ease-in-out" id="nav-item-1">

<div className="active-line absolute left-[-1px] top-0 bottom-0 w-[2px] bg-blue-500 transition-all duration-500 ease-in-out opacity-100 h-full" style={{opacity: '1', height: '100%'}}></div>
<h3 className="title text-2xl font-medium transition-colors duration-300">Generative UI</h3>
<div className="content overflow-hidden transition-all duration-700 ease-in-out max-h-[200px] opacity-100" style={{maxHeight: '200px', opacity: '1'}}>
<p className="text-zinc-400 text-lg leading-relaxed mt-4 mb-6 font-light">
              Turn prompts into pixel-perfect interfaces. Our AI understands your design system and generates production-ready components instantly.
            </p>
<a className="inline-flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors group/link" href="#">
              Explore AI 
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="relative pl-8 py-4 border-l border-white/10 cursor-pointer group transition-all duration-500 ease-in-out" id="nav-item-2">
<div className="active-line absolute left-[-1px] top-0 bottom-0 w-[2px] bg-blue-500 transition-all duration-500 ease-in-out opacity-0 h-0" style={{opacity: '0', height: '0px'}}></div>
<h3 className="title text-2xl font-medium transition-colors duration-300">Visual Editor</h3>
<div className="content overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0" style={{maxHeight: '0px', opacity: '0'}}>
<p className="text-zinc-400 text-lg leading-relaxed mt-4 mb-6 font-light">
              Fine-tune every detail visually. Select elements to inspect properties, adjust layouts, and style components with immediate feedback.
            </p>
<a className="inline-flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors group/link" href="#">
              Start Building
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="relative pl-8 py-4 border-l border-white/10 cursor-pointer group transition-all duration-500 ease-in-out" id="nav-item-3">
<div className="active-line absolute left-[-1px] top-0 bottom-0 w-[2px] bg-blue-500 transition-all duration-500 ease-in-out opacity-0 h-0" style={{opacity: '0', height: '0px'}}></div>
<h3 className="title text-2xl font-medium transition-colors duration-300">Content Management</h3>
<div className="content overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0" style={{maxHeight: '0px', opacity: '0'}}>
<p className="text-zinc-400 text-lg leading-relaxed mt-4 mb-6 font-light">
              Structure content with a visual CMS. Define schemas, manage entries, and publish updates without touching code.
            </p>
<a className="inline-flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors group/link" href="#">
              Manage Content
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="relative pl-8 py-4 border-l border-white/10 cursor-pointer group transition-all duration-500 ease-in-out" id="nav-item-4">
<div className="active-line absolute left-[-1px] top-0 bottom-0 w-[2px] bg-blue-500 transition-all duration-500 ease-in-out opacity-0 h-0" style={{opacity: '0', height: '0px'}}></div>
<h3 className="title text-2xl font-medium transition-colors duration-300">Real-time Sync</h3>
<div className="content overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0" style={{maxHeight: '0px', opacity: '0'}}>
<p className="text-zinc-400 text-lg leading-relaxed mt-4 mb-6 font-light">
              Collaborate seamlessly. See live cursors, leave comments, and build together with your team in real-time.
            </p>
<a className="inline-flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors group/link" href="#">
              Start Collaboration
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>

<div className="relative w-full rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden flex flex-col aspect-[16/10] min-h-[600px] ring-1 ring-white/5 transform transition-transform duration-700">

<div className="h-12 border-b border-white/5 bg-[#141414] flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-4">
<div className="flex gap-2 group">
<div className="w-3 h-3 rounded-full bg-[#2C2C2C] group-hover:bg-[#FF5F57] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2C2C2C] group-hover:bg-[#FEBC2E] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2C2C2C] group-hover:bg-[#28C840] transition-colors"></div>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-2"></div>
<div className="flex gap-1">
<button className="p-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
<button className="p-1.5 rounded-md hover:bg-white/5 text-zinc-400 transition-colors"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg></button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 border border-[#141414] flex items-center justify-center text-[8px] text-white font-bold relative z-10">JD</div>
<div className="w-6 h-6 rounded-full bg-emerald-500 border border-[#141414] flex items-center justify-center text-[8px] text-white font-bold relative z-0">AS</div>
</div>
<button className="h-7 px-3 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-medium rounded transition-colors shadow-lg shadow-blue-900/20">Publish</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden relative">

<div className="w-[280px] bg-[#0F0F0F] border-r border-white/5 flex flex-col shrink-0 transition-all duration-[800ms] cubic-bezier(0.16,1,0.3,1) overflow-hidden relative" id="chat-sidebar" style={{width: '280px', opacity: '1'}}>
<div className="w-[280px] flex flex-col h-full">

<div className="h-10 border-b border-white/5 flex items-center px-4 text-[11px] text-zinc-400 gap-2 shrink-0">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span className="text-zinc-200">Builder</span>
</div>

<div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
<div className="bg-[#1C1C1C] border border-white/5 rounded-xl p-3 rounded-tr-sm">
<p className="text-[11px] text-zinc-300 leading-relaxed">Design a landing page for an AI architecture firm.</p>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center shrink-0 mt-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path></svg>
</div>
<div className="space-y-2">
<p className="text-[11px] text-zinc-400 leading-relaxed">I've created a concept for 'Archetypes' focusing on minimalist geometry and ample whitespace.</p>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 mt-auto shrink-0">
<div className="bg-[#1C1C1C] border border-white/5 rounded-lg p-2.5 flex items-center justify-between group cursor-text">
<span className="text-[11px] text-zinc-500">Ask Canvas AI...</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#050505] relative overflow-hidden flex flex-col transition-all duration-700">

<div className="h-8 flex items-end px-2 gap-1 border-b border-white/5 bg-[#0A0A0A]">
<div className="bg-blue-500/10 border-t border-x border-white/5 text-blue-400 text-[10px] px-3 py-1.5 rounded-t font-medium flex items-center gap-2">
<svg fill="currentColor" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3z"></path></svg>
                  Home - V1
               </div>
<div className="text-zinc-600 text-[10px] px-3 py-1.5 font-medium hover:text-zinc-400 cursor-pointer">Projects</div>
</div>

<div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar relative">
<div className="w-full h-full border border-white/5 rounded bg-black relative flex flex-col p-8 md:p-12 group/canvas">

<div className="absolute inset-0 z-30 pointer-events-none opacity-0 transition-opacity duration-500" id="selection-overlay" style={{opacity: '0'}}>

<div className="absolute inset-0 border-2 border-blue-500/50 rounded pointer-events-none"></div>

<div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm shadow-sm"></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm shadow-sm"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm shadow-sm"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500 rounded-sm shadow-sm"></div>

<div className="absolute -top-7 left-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded font-medium shadow-lg">Hero Section</div>
</div>

<div className="absolute inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm pointer-events-none opacity-0 transition-all duration-500 flex flex-col p-8" id="cms-overlay" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
<h3 className="text-xl font-medium text-white">Content: Homepage</h3>
<div className="px-3 py-1 bg-blue-600 text-white text-xs rounded font-medium">Save Changes</div>
</div>
<div className="space-y-3">
<div className="p-4 bg-[#141414] border border-white/10 rounded-lg">
<div className="text-[10px] text-zinc-500 uppercase font-medium mb-1">Headline</div>
<div className="text-sm text-white">Building tomorrow.</div>
</div>
<div className="p-4 bg-[#141414] border border-white/10 rounded-lg">
<div className="text-[10px] text-zinc-500 uppercase font-medium mb-1">Subheadline</div>
<div className="text-sm text-white">AI-driven architecture for modern living.</div>
</div>
<div className="p-4 bg-[#141414] border border-white/10 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded"></div>
<div className="flex-1">
<div className="text-[10px] text-zinc-500 uppercase font-medium mb-1">Hero Image</div>
<div className="text-xs text-blue-400">Replace Image</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 pointer-events-none opacity-0 transition-all duration-500" id="sync-overlay" style={{opacity: '0'}}>

<div className="absolute top-[30%] left-[40%] transition-all duration-[3000ms] ease-in-out" style={{transform: 'translate(0, 0)'}}>
<svg className="text-emerald-500 drop-shadow-md" fill="none" height="24" viewbox="0 0 18 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L17.5 17.5H8.75L5 24L0 0Z" fill="currentColor"></path></svg>
<div className="absolute left-4 top-2 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">Alex</div>
</div>

<div className="absolute top-[60%] left-[70%] transition-all duration-[4000ms] ease-in-out" style={{transform: 'translate(0, 0)'}}>
<svg className="text-pink-500 drop-shadow-md" fill="none" height="24" viewbox="0 0 18 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L17.5 17.5H8.75L5 24L0 0Z" fill="currentColor"></path></svg>
<div className="absolute left-4 top-2 bg-pink-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">Sarah</div>
</div>
</div>

<nav className="flex justify-between items-center mb-16 relative z-10">
<div className="text-white font-bold tracking-tight">Archetypes</div>
<div className="bg-white/5 backdrop-blur border border-white/5 rounded-full px-1 p-1 flex items-center">
<span className="px-3 py-1 text-[10px] text-white bg-white/10 rounded-full">Works</span>
<span className="px-3 py-1 text-[10px] text-zinc-400">Studio</span>
</div>
</nav>

<div className="max-w-2xl relative z-10">
<h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-2">
                        Building tomorrow.
                     </h1>
<h1 className="text-4xl md:text-5xl font-bold text-zinc-600 tracking-tighter leading-[1.1] mb-12">
                        AI-driven architecture for modern living.
                     </h1>
<div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors cursor-pointer">
                        View Projects
                     </div>
</div>

<div className="mt-16 w-full aspect-[2/1] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center relative">
<div className="flex items-center gap-4 opacity-30">
<div className="w-12 h-12 bg-zinc-400 rounded-sm"></div>
<div className="w-12 h-12 bg-zinc-400 rounded-full"></div>
<div className="w-12 h-12 bg-zinc-400" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0F0F0F] border-l border-white/5 flex flex-col shrink-0 transition-all duration-[800ms] cubic-bezier(0.16,1,0.3,1) overflow-hidden w-0 opacity-0" id="props-sidebar" style={{width: '0px', opacity: '0'}}>
<div className="w-[240px] flex flex-col h-full">

<div className="h-10 border-b border-white/5 flex justify-between items-center px-2 shrink-0">
<div className="flex gap-1">
<button className="p-1 text-zinc-300 hover:text-white"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18"></path><path d="M3 12h18"></path><path d="M3 21h18"></path></svg></button>
</div>
<span className="text-[10px] font-medium text-white">Properties</span>
<div className="flex gap-1">
<button className="p-1 text-zinc-500 hover:text-zinc-300"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg></button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-0">

<div className="p-3 border-b border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-[11px] font-medium text-white">Size</span>
</div>
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="bg-[#1C1C1C] rounded border border-white/5 px-2 py-1 flex items-center justify-between">
<span className="text-[10px] text-zinc-500">W</span>
<span className="text-[10px] text-zinc-300 font-mono">Fill</span>
</div>
<div className="bg-[#1C1C1C] rounded border border-white/5 px-2 py-1 flex items-center justify-between">
<span className="text-[10px] text-zinc-500">H</span>
<span className="text-[10px] text-zinc-300 font-mono">Auto</span>
</div>
</div>
</div>

<div className="p-3 border-b border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-[11px] font-medium text-white">Typography</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between bg-[#1C1C1C] rounded p-1.5 border border-white/5">
<span className="text-[10px] text-zinc-400">Inter Display</span>
<span className="text-[10px] text-zinc-300">Bold</span>
</div>
<div className="flex gap-1">
<div className="flex-1 bg-[#1C1C1C] rounded border border-white/5 p-1.5 text-center text-[10px] text-zinc-300">48px</div>
<div className="flex-1 bg-[#1C1C1C] rounded border border-white/5 p-1.5 text-center text-[10px] text-zinc-300">1.1</div>
</div>
</div>
</div>

<div className="p-3 border-b border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-[11px] font-medium text-white">Styles</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between gap-2">
<span className="text-[10px] text-zinc-500 w-10">Fill</span>
<div className="flex-1 flex bg-[#1C1C1C] rounded border border-white/5 p-1 items-center gap-2">
<div className="w-3 h-3 bg-white border border-white/20 rounded-sm"></div>
<span className="text-[10px] text-zinc-400">#FFFFFF</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>


<section className="sm:pt-24 md:pt-40 pt-24 pb-20 relative" id="showcase">

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center">
<h2 className="sm:text-5xl text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 0%, transparent)'}}>Made with Cauras</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 mt-10 pt-0 pr-0 pb-0 pl-0 space-x-5">

<div className="group overflow-hidden hover:bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] hover:from-blue-400/30 hover:to-blue-400/0 hover:border-slate-50/20 transition-all duration-300 sm:p-6 bg-gradient-to-b from-[#ffffff]/10 to-[#000000]/10 ring-[#ffffff]/10 ring-1 rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="opacity-[0.07] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 px-2.5 py-1 text-xs text-white/80">Featured</span>
</div>
<h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight font-manrope">Start with a template</h3>
<p className="text-sm text-neutral-400 mt-2">Jumpstart your next project with professionally designed templates for portfolios, SaaS, and more.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">Portfolio</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">Landing Page</span>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900" style={{}}>
<div className="relative">
<img alt="Minimal Portfolio" className="group-hover:grayscale-0 transition-all duration-300 w-full h-[224px] object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286dcc4a-3b11-43d3-af80-a7b1c3aaaad1_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Minimal Portfolio</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Designers</p>
</div>
</div>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900" style={{}}>
<div className="relative">
<img alt="SaaS Landing" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>SaaS Landing</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Startups</p>
</div>
</div>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900" style={{}}>
<div className="relative">
<img alt="Agency Site" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a59cef23-182d-4015-9d64-9748fcf818c3_800w.webp" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Agency Site</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Teams</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Dashboard Pro" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0255963c-52aa-4da8-b87e-9a8069544a92_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Dashboard Pro</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Analytics</p>
</div>
</div>

<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Ecommerce Starter" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d95b58e-fd06-4ba8-aeb8-0242169986a8_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Ecommerce Starter</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Shops</p>
</div>
</div>

<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Blog Modern" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Blog Modern</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Creators</p>
</div>
</div>

<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Documentation" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bff6227d-4480-48a1-a0aa-731da287e47a_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-white hover:bg-slate-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Preview</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Documentation</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>For Knowledge</p>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 sm:py-10 md:py-12 lg:pl-8 lg:pr-8 max-w-7xl mt-20 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-zinc-400">Loved by designers</p>
<h2 className="text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6 sm:text-5xl" style={{maskImage: 'linear-gradient(250deg, transparent, black 25%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(250deg, transparent, black 25%, black 70%, transparent)'}}>Testimonials</h2>
</div>
</div>
<div className="sm:mt-8 overflow-hidden sm:rounded-3xl mt-6 relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'}}>
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10">
</div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10">
</div>

<div className="sm:py-8 pt-6 pb-6 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Canvas completely changed how I build websites. The visual editor is intuitive and the generated code is clean.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            I launched my portfolio in an afternoon. No coding required, just pure design freedom.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ethan Garcia</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The animation tools are top tier. Adding scroll effects and transitions is just a matter of clicks.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Canvas completely changed how I build websites. The visual editor is intuitive and the generated code is clean.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            I launched my portfolio in an afternoon. No coding required, just pure design freedom.
          </p>
</article>
</div>
</div>
</div>
<style className="">
    @keyframes marquee-rtl {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes marquee-ltr {
      0% {
        transform: translateX(-50%);
      }

      100% {
        transform: translateX(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {

      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] {
        animation: none !important;
      }
    }
  </style>
</section>

<section className="md:p-10 bg-zinc-500/5 max-w-7xl border-white/10 border rounded-3xl ring-white/10 ring-1 mt-40 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(200deg, transparent, black 25%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 25%, black 65%, transparent)'}}>

<div className="mb-8 flex items-center justify-between" style={{}}>
<div className="flex items-center gap-3">
<div className="">
<h1 className="sm:text-5xl text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 45%, transparent)'}}>Cauras— Help &amp; FAQs</h1>
<p className="mt-1 text-sm text-slate-400">Common questions about the editor and publishing.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6" style={{}}>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex text-left w-full gap-x-4 gap-y-4 items-center justify-between" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Do I need to know how to code?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              No. Canvas is a visual tool that writes the code for you. If you can use design software like Figma, you can build a site with Canvas.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Can I connect my own domain?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Yes. Every paid plan includes the ability to connect custom domains. SSL certificates are generated automatically.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Is hosting included?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Yes, we provide ultra-fast global hosting powered by a CDN. You don't need to worry about servers or infrastructure.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Can I export the code?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              While Canvas is designed to host your site, certain plans allow you to export static HTML/CSS/JS for hosting elsewhere.
            </div>
</div>
</div>

<div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="h-5 w-5 text-sky-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</span>
<p className="text-sm text-slate-300">Still have questions? We're here to help.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex hover:bg-white/10 text-sm font-medium text-slate-200 bg-white/5 border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
              Contact Support
            </button>
<a className="hover:shadow-lg transition-shadow text-sm font-medium text-slate-900 bg-white rounded-full pt-3 pr-5 pb-3 pl-5 shadow" href="#">
              Start Building
            </a>
</div>
</div>

</section>

<section className="overflow-hidden my-10 relative" id="cta">
<div className="text-white max-w-7xl mr-auto ml-auto pr-0 pb-24 pl-0">
<div className="md:p-10 bg-zinc-500/5 max-w-7xl border-white/10 border rounded-3xl ring-white/10 ring-1 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 60%, transparent)'}}>
<div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:p-12 pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 items-center">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Ready to launch?</h3>
<p className="text-slate-200 max-w-prose mt-2">Join thousands of designers building the future of the web with Cauras. Start your free project today.</p>
<div className="mt-5 flex gap-3 flex-wrap">
<a className="hover:shadow-lg transition-shadow text-sm font-medium text-slate-900 bg-white rounded-full pt-3 pr-5 pb-3 pl-5 shadow" href="#">Start for Free</a>
<a className="hover:bg-white/5 transition-colors text-sm text-white border-white/20 border rounded-full pt-3 pr-5 pb-3 pl-5" href="#features">View Templates</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-16 pb-10" style={{maskImage: 'linear-gradient(100deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="layers-bold-duotone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="#ffffff">
</path>
<path className="" clip-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" fill="#ffffff" fill-rule="evenodd"></path>
<path className="" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="#ffffff" opacity=".7"></path>
<path className="" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" fill="#ffffff" opacity=".4"></path>
</svg>
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59828c7b-af73-42f3-a409-8e57afbb2db4_320w.png?w=800&amp;q=80)] bg-cover rounded-full invert" href="#"></a>
</div>
<p className="text-sm text-slate-400 max-w-xs">The web builder for creative pros. Design, animate, and publish.</p>
<div className="flex items-center gap-3">
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features">Features</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li className=""><a className="hover:text-white transition-colors text-sm text-slate-400" href="/templates">Templates</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">About</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Documentation</a>
</li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Help Center</a>
</li>
<li className=""><a className="hover:text-white transition-colors text-sm text-slate-400" href="#">Learn</a></li><li className=""><a className="hover:text-white transition-colors text-sm text-slate-400" href="#">Community</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">© <span id="year">2026</span> Cauras Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
