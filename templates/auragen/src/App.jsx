import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

try{window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}catch(e){}


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
        
        // Review rotation
        const reviewCards = document.querySelectorAll('.review-card');
        let currentReview = 0;
        setInterval(() => {
            reviewCards[currentReview].classList.remove('review-active');
            currentReview = (currentReview + 1) % reviewCards.length;
            reviewCards[currentReview].classList.add('review-active');
        }, 4000);
        reviewCards[0].classList.add('review-active');
        
        // Year
        document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[900px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
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
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[120px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3473923-ebc4-44bd-a2b8-bcf5197f648b_800w.png)] bg-cover rounded" href="#"></a>
<nav className="hidden gap-6 md:flex gap-x-6 gap-y-6 items-center">
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="#features">Features</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#gallery">Gallery</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#reviews">Reviews</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#faq">FAQ</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-sm text-white bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4" href="#cta">
        Get Started <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
<button aria-label="Open menu" className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<aside aria-label="Mobile menu" className="mobile-menu fixed z-50 bg-slate-950/95 w-[80%] max-w-sm border-white/10 border-l pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 backdrop-blur" id="mobileMenu">
<div className="flex items-center justify-between">
<span className="font-semibold">AuraGen</span>
<button aria-label="Close menu" className="rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="closeMenuBtn">
<svg className="lucide lucide-x h-6 w-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="mt-6 space-y-4">
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#features">Features</a>
</li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#gallery">Gallery</a>
</li>
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#reviews">Reviews</a>
</li>
<li className=""><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#faq">FAQ</a>
</li>
</ul>
<a className="mobile-link mt-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition-colors" href="#cta">
      Get Started <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</aside>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-16 pb-36 relative">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h1 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-8xl font-medium text-zinc-100 tracking-tighter font-geist mt-20" style={{maskImage: 'linear-gradient(290deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(290deg, transparent, black 0%, black 40%, transparent)'}}>Where imagination meets artificial intelligence</h1>
<div className="flex flex-wrap xl:mt-20 mt-40 gap-x-3 gap-y-3 items-center justify-center">
<div className="inline-block bg-transparent">
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<button className="shiny-cta focus:outline-none">
<span className="">Try AuraGen</span>
</button>
</div>
<a className="inline-flex items-center gap-2 hover:bg-white/5 transition-colors text-sm text-white border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-2xl" href="#gallery">
                    See Demo <svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>

</div>
</section>

<div className="flex xl:pt-0 xl:pb-0 sm:pl-4 sm:pr-4 sm:pt-20 w-screen h-1000 pt-20 pr-2 pb-40 pl-2 scale-100 rotate-x-5 items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 1%, transparent)'}}>
<div className="flex flex-col overflow-hidden xl:bg-neutral-900/20 bg-neutral-900 w-full h-[700px] max-w-7xl max-h-[95vh] border-neutral-800 border rounded-xl shadow-2xl backdrop-blur-xl perspective-none" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}>

<div className="flex border-neutral-700/50 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center justify-between" style={{background: 'rgba(40, 40, 40, 0.5)'}}>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full" style={{background: '#505050'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: '#606060'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: '#707070'}}></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-neutral-700/50">
<svg className="h-4 w-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle className="" cx="19" cy="12" r="1"></circle><circle className="" cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="flex flex-col w-64 border-neutral-800/50 border-r" style={{background: 'rgba(30, 30, 30, 0.8)'}}>

<div className="p-4 border-b border-neutral-800/50">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3473923-ebc4-44bd-a2b8-bcf5197f648b_800w.png)] bg-cover rounded" href="#"></a>
<div className="text-xs text-neutral-500 mt-0.5 pl-4">AI Image Generator</div>
</div>

<nav className="flex-1 overflow-y-auto">
<div className="pt-3 pr-3 pl-3">
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white" style={{background: 'rgba(60, 60, 60, 0.7)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 3v18"></path>
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M3 9h18"></path>
<path className="" d="M9 21V9"></path>
</svg>
              Generate
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle className="" cx="9" cy="9" r="2"></circle>
<path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
              Gallery
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="12" cy="7" r="4"></circle>
</svg>
              Community
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
              Explore
            </a>
</div>
<div className="px-3 pt-4">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-2">Recent Projects</div>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
              Cyberpunk City
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
              Fantasy Landscapes
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
              Portrait Studies
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
              Abstract Art
            </a>
</div>
<div className="px-3 pt-4 pb-3">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-2">Resources</div>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
              Documentation
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle className="" cx="12" cy="12" r="3"></circle>
</svg>
              Settings
            </a>
</div>
</nav>

<div className="border-t border-neutral-800/50 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-400">Credits</span>
<span className="text-xs font-medium text-white">250 / 500</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{width: '50%'}}></div>
</div>
<button className="mt-2 w-full rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-700/70" style={{background: '#606060'}}>
              Get More Credits
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col xl:bg-neutral-950/80">

<div className="flex items-center justify-between border-b border-neutral-800/50 px-5 py-3" style={{background: 'rgba(30, 30, 30, 0.5)'}}>
<div className="flex items-center gap-3">
<h1 className="text-lg font-semibold tracking-tight">Generate</h1>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="21 8 21 21 3 21 3 8"></polyline><rect className="" height="5" rx="2" width="18" x="3" y="3"></rect><line className="" x1="10" x2="10" y1="12" y2="17"></line><line className="" x1="14" x2="14" y1="12" y2="17"></line></svg>
                History
              </button>
<button className="p-2 rounded-md hover:bg-neutral-800/50">
<svg className="h-5 w-5 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle className="" cx="19" cy="12" r="1"></circle><circle className="" cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5">
<div className="grid grid-cols-2 gap-4 mb-5">

<div className="group relative aspect-square rounded-lg overflow-hidden border border-neutral-800/50 hover:border-neutral-700">
<img alt="Generated image 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e230abf5-bdd2-4209-acf5-4a6dd6b37e1c_800w.jpg" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline className="" points="7 10 12 15 17 10"></polyline><line className="" x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download
                      </button>
<button className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<span className="text-xs rounded-full border border-neutral-700 bg-black/60 backdrop-blur px-2 py-0.5 text-neutral-300">1/4</span>
</div>
</div>

<div className="group relative aspect-square rounded-lg overflow-hidden border border-neutral-800/50 hover:border-neutral-700">
<img alt="Generated image 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dbdc5b42-1ade-4607-8a26-3418307156a0_800w.webp" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline className="" points="7 10 12 15 17 10"></polyline><line className="" x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download
                      </button>
<button className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<span className="text-xs rounded-full border border-neutral-700 bg-black/60 backdrop-blur px-2 py-0.5 text-neutral-300">2/4</span>
</div>
</div>

<div className="group relative aspect-square rounded-lg overflow-hidden border border-neutral-800/50 hover:border-neutral-700">
<img alt="Generated image 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d84e4a08-d7bc-4dfe-8eeb-2449c350464f_800w.jpg" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline className="" points="7 10 12 15 17 10"></polyline><line className="" x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download
                      </button>
<button className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<span className="text-xs rounded-full border border-neutral-700 bg-black/60 backdrop-blur px-2 py-0.5 text-neutral-300">3/4</span>
</div>
</div>

<div className="group relative aspect-square rounded-lg overflow-hidden border border-neutral-800/50 hover:border-neutral-700">
<img alt="Generated image 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bd7142dc-e78f-43dd-8dba-3b22e39c8cbb_800w.jpg" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline className="" points="7 10 12 15 17 10"></polyline><line className="" x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download
                      </button>
<button className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/20" style={{background: 'rgba(255,255,255,0.1)'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<span className="text-xs rounded-full border border-neutral-700 bg-black/60 backdrop-blur px-2 py-0.5 text-neutral-300">4/4</span>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-800/50 p-4" style={{background: 'rgba(30, 30, 30, 0.5)'}}>
<div className="flex items-start justify-between mb-2">
<div className="text-sm font-medium text-neutral-300">Prompt Used</div>
<button className="p-1 rounded hover:bg-neutral-800/50">
<svg className="h-4 w-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path className="" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">
              Futuristic cyberpunk cityscape at night, neon lights reflecting on wet streets, holographic
              advertisements, flying cars, detailed architecture, cinematic lighting, 8k, highly detailed
            </p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="text-xs rounded-full border border-neutral-700 bg-neutral-800/40 px-2 py-1 text-neutral-300">Aspect: 1:1</span>
<span className="text-xs rounded-full border border-neutral-700 bg-neutral-800/40 px-2 py-1 text-neutral-300">Quality: High</span>
<span className="text-xs rounded-full border border-neutral-700 bg-neutral-800/40 px-2 py-1 text-neutral-300">Style: Photorealistic</span>
</div>
</div>
</div>

<div className="border-t border-neutral-800/50 p-4" style={{background: 'rgba(30, 30, 30, 0.5)'}}>
<div className="rounded-lg border border-neutral-700 bg-neutral-800/40 focus-within:ring-2 focus-within:ring-indigo-500/40">
<div className="px-4 py-3">
<textarea className="w-full bg-transparent text-sm placeholder-neutral-500 focus:outline-none resize-none" placeholder="Describe the image you want to generate..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between border-t border-neutral-700/50 px-4 py-3">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle className="" cx="9" cy="9" r="2"></circle><path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    Upload Image
                  </button>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                    Random Prompt
                  </button>
</div>
<button className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white" style={{background: '#606060'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path className="" d="M12 9v4"></path><path className="" d="M12 17h.01"></path></svg>
                  Generate (4 credits)
                </button>
</div>
</div>
</div>
</main>

<aside className="w-80 border-l border-neutral-800/50 flex flex-col" style={{background: 'rgba(30, 30, 30, 0.8)'}}>
<div className="px-4 py-3 border-b border-neutral-800/50">
<div className="text-sm font-semibold tracking-tight">Settings</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-5">

<div className="">
<label className="text-xs text-neutral-400 mb-2 block">Model</label>
<div className="space-y-2">
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-white" style={{background: 'rgba(60, 60, 60, 0.7)'}}>
<div className="font-medium">AuraGen</div>
<div className="text-xs text-neutral-400 mt-0.5">Latest model, best quality</div>
</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">
<div className="font-medium">AuraGen</div>
<div className="text-xs text-neutral-400 mt-0.5">Fast generation</div>
</button>
</div>
</div>

<div className="">
<label className="text-xs text-neutral-400 mb-2 block">Aspect Ratio</label>
<div className="grid grid-cols-3 gap-2">
<button className="px-3 py-2 rounded-md text-sm text-white border border-neutral-600" style={{background: 'rgba(60, 60, 60, 0.7)'}}>1:1</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">16:9</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">9:16</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">4:3</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">3:4</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">21:9</button>
</div>
</div>

<div className="">
<label className="text-xs text-neutral-400 mb-2 block">Quality</label>
<div className="space-y-2">
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">
<div className="flex items-center justify-between">
<span className="">Standard</span>
<span className="text-xs text-neutral-500">2 credits</span>
</div>
</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-white border border-neutral-600" style={{background: 'rgba(60, 60, 60, 0.7)'}}>
<div className="flex items-center justify-between">
<span className="">High</span>
<span className="text-xs text-neutral-500">4 credits</span>
</div>
</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">
<div className="flex items-center justify-between">
<span>Ultra</span>
<span className="text-xs text-neutral-500">8 credits</span>
</div>
</button>
</div>
</div>

<div className="">
<label className="text-xs text-neutral-400 mb-2 block">Style Preset</label>
<div className="space-y-2">
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-white border border-neutral-600" style={{background: 'rgba(60, 60, 60, 0.7)'}}>Photorealistic</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">Artistic</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">Anime</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">Digital Art</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">3D Render</button>
</div>
</div>

<div>
<label className="text-xs text-neutral-400 mb-2 block">Number of Images</label>
<div className="grid grid-cols-4 gap-2">
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">1</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">2</button>
<button className="px-3 py-2 rounded-md text-sm text-white border border-neutral-600" style={{background: 'rgba(60, 60, 60, 0.7)'}}>4</button>
<button className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800/50">8</button>
</div>
</div>

<div className="pt-2 border-t border-neutral-800/50">
<button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
                Advanced Settings
              </button>
</div>
</div>
</aside>
</div>
</div>
</div><section className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate sm:px-6 lg:px-8 lg:pt-6 max-w-7xl z-10 mt-8 mr-auto mb-16 ml-auto pt-16 pr-4 pb-6 pl-4 relative">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
      Trusted by teams at leading companies
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
      }
      .carousel-wrapper:hover {
        animation-play-state: paused;
      }
    </style>
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex carousel-wrapper gap-x-6 lg:gap-x-20">
<div className="flex gap-6 shrink-0 gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
</div>
<div className="flex shrink-0 gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg transition-transform hover:scale-110" href="#"></a>
</div>
</div>
</div>
</div>
</section><section className="mt-10 mb-0 pt-0 pb-0 relative">
<div className="sm:px-6 lg:px-8 lg:pb-0 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-2xl font-medium text-white tracking-tighter text-left mb-0 sm:text-5xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)'}}>Complete AI Generation Suite</h2>
<section className="mt-10 mb-20 pt-0 pb-0 relative">
<div className="sm:px-6 lg:px-8 lg:pt-8 max-w-full pt-16 pr-4 pb-16 pl-4">
<div className="rounded-2xl mt-10 backdrop-blur" style={{maskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<h3 className="text-lg text-white">Text to Image</h3>
<p className="text-sm text-zinc-400 mt-1">generate from description</p>
</div>
<div className="md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Image to Image</h3>
<p className="text-sm text-zinc-400 mt-1">transform and enhance</p>
</div>
<div className="md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">API Access</h3>
<p className="text-sm text-zinc-400 mt-1">integrate into your apps</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="md:border-r md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Lightning Fast</h3>
<p className="text-sm text-zinc-400 mt-1">results in seconds</p>
</div>
<div className="hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)'}}>
<div className="inline-flex group-hover:bg-white/10 transition-colors duration-300 text-slate-200 bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg mr-auto mb-4 ml-auto items-center justify-center">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Safe &amp; Secure</h3>
<p className="text-sm text-zinc-400 mt-1">privacy protected</p>
</div>
</div>
</div>
</div>
</section>
</div>
</section><section className="sm:pt-24 md:pt-10 max-w-7xl mr-auto ml-auto pt-24 pb-20 relative">

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6 sm:text-5xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 10%, transparent)'}}>AI‑Powered Image Generation</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

<div className="group overflow-hidden hover:bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] hover:from-indigo-400/30 hover:to-indigo-400/0 hover:border-slate-50/20 transition-all duration-300 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative" style={{maskImage: 'linear-gradient(160deg, transparent, black 30%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 30%, black 75%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="relative sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5">Text to Image</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">Describe your vision in words and watch AI bring it to life with photorealistic or stylized results in seconds.</p>

<div className="bg-neutral-50/5 ring-white/10 ring-1 rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>

<div className="relative bg-black/40 rounded-xl px-3 py-2 text-xs text-white/80 font-mono">
            "futuristic city at sunset..."
          </div>
<svg className="opacity-60 max-w-[320px] mt-4 mr-auto ml-auto relative w-[320px] h-[16px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '320px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 320 60">
<path d="M160 5 L160 55" opacity="0.5" stroke="currentColor" stroke-dasharray="3 3" strokeWidth="1.5"></path>
</svg>
<div className="flex bg-neutral-50/5 w-full h-20 ring-white/20 ring-1 rounded-lg mt-4 relative shadow-xl items-center justify-center">
<svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] hover:from-indigo-400/30 hover:to-indigo-400/0 hover:border-slate-50/20 transition-all duration-300 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Image to Image</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">Upload a sketch, screenshot, or photo and transform it into refined artwork with full style control.</p>

<div className="bg-neutral-50/5 rounded-2xl ring-white/10 ring-1 mt-6 pt-4 pr-4 pb-4 pl-4 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 75%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 75%, black 100%, transparent)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-600/10 via-blue-700/10 to-transparent pointer-events-none"></div>
<div className="relative flex items-center gap-3">
<div className="flex-1 flex bg-white/10 h-16 rounded-lg ring-white/10 ring-1 items-center justify-center">
<svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
</div>
<svg className="w-5 h-5 text-white/60 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
<div className="flex-1 flex bg-slate-50/5 h-16 ring-white/20 ring-1 rounded-lg shadow-md items-center justify-center">
<svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
</div>
<div className="flex gap-2 mt-3 gap-x-2 gap-y-2" style={{maskImage: 'linear-gradient(230deg, transparent, black 50%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(230deg, transparent, black 50%, black 100%, transparent)'}}>
<span className="px-2 py-1 text-[10px] rounded-full bg-white/5 border border-white/10 text-white/70">Style Transfer</span>
<span className="px-2 py-1 text-[10px] rounded-full bg-white/5 border border-white/10 text-white/70">Upscale</span>
<span className="px-2 py-1 text-[10px] rounded-full bg-white/5 border border-white/10 text-white/70">Enhance</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] hover:from-indigo-400/30 hover:to-indigo-400/0 hover:border-slate-50/20 transition-all duration-300 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative" style={{maskImage: 'linear-gradient(210deg, transparent, black 45%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 45%, black 55%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Safe &amp; Secure</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">Built-in safety filters, clear usage rights, and privacy controls to protect you and your content.</p>

<div className="bg-neutral-50/5 rounded-2xl ring-white/10 ring-1 mt-6 pt-4 pr-4 pb-4 pl-4 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>
<div className="relative space-y-2">
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(74, 222, 128)', width: '12px', height: '12px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-white/80">Content Filter Active</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-slate-50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-white/80">Commercial Rights</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-slate-50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-white/80">Privacy Protected</span>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-12 border-white/10 border-t mt-10 pt-8" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">Lightning Fast</p>
<p className="text-sm text-white/60 mt-1 font-sans">Generate images in seconds, not minutes.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">Multiple Styles</p>
<p className="text-sm text-white/60 mt-1 font-sans">Photorealistic, artistic, anime, and more.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-3 3"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">High Resolution</p>
<p className="text-sm text-white/60 mt-1 font-sans">Up to 4K output with upscaling options.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">API Access</p>
<p className="text-sm text-white/60 mt-1 font-sans">Integrate generation into your apps.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="sm:pt-24 md:pt-20 pt-24 pb-20 relative">

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 10%, transparent)'}}>

<div className="text-center" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>
<h2 className="text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6 sm:text-5xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 0%, transparent)'}}>Stunning AI Creations</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 mt-10 pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4">

<div className="group overflow-hidden hover:bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] hover:from-indigo-400/30 hover:to-indigo-400/0 hover:border-slate-50/20 transition-all duration-300 sm:p-6 bg-gradient-to-b from-[#ffffff]/10 to-[#000000]/10 rounded-2xl ring-[#ffffff]/10 ring-1 pt-5 pr-5 pb-5 pl-5 relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 px-2.5 py-1 text-xs text-white/80">2024</span>
</div>
<h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight font-manrope">Neural Art Generator</h3>
<ul className="mt-4 grid grid-cols-1 gap-2">
<li className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="inline-flex w-5 h-5 items-center justify-center ring-1 ring-indigo-300/20 bg-indigo-500/10 rounded-full">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(165, 180, 252)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Text-to-Image Generation
      </li>
<li className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="inline-flex w-5 h-5 items-center justify-center ring-1 ring-indigo-300/20 bg-indigo-500/10 rounded-full">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(165, 180, 252)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        Style Transfer AI
      </li>
<li className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="inline-flex w-5 h-5 items-center justify-center ring-1 ring-indigo-300/20 bg-indigo-500/10 rounded-full">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(165, 180, 252)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
        High-Res Output
      </li>
</ul>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">Neural Networks</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">Creative AI</span>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Cyberpunk City" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/95221975-49b7-4db6-a8fe-15f9a78f1303_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Cyberpunk City</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Neon-lit metropolis</p>
</div>
</div>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Fantasy Landscape" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ed20b9-8613-42c5-b728-617b435290b4_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Fantasy Landscape</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Magical realm</p>
</div>
</div>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Abstract Art" className="w-full h-[224px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48805e96-414c-4480-b758-2938cccff968_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Abstract Art</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Digital creation</p>
</div>
</div>
</div>
</div>

<main className="mt-6 px-4">
<div className="max-w-7xl mx-auto">
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4" id="masonry">

<article className="mb-4 reveal" data-date="2024-10-01" data-tags="interior minimal workspace" data-title="Calm modern workspace" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Calm modern workspace" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f6a30d42-6743-483d-9bcf-9eb702125518_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Calm modern workspace
            </h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Clean and focused environment
            </p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-08-11" data-tags="nature landscape travel" data-title="Mountain Landscape" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition rounded-2xl ring-white/10 ring-1 bg-zinc-900">
<div className="relative">
<img alt="Mountain Landscape" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a40bff5-bbf9-4bda-b05d-e479626177de_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Mountain Landscape
            </h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Nature photography</p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-09-12" data-tags="interior zen workspace minimal" data-title="Zen workspace aesthetic" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Zen workspace aesthetic" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cbd42f6a-8433-4bf4-bfa8-34c942421611_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Zen workspace
              aesthetic</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Minimalist productivity space
            </p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-06-30" data-tags="interior decor home" data-title="Interior Design" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Interior Design" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0507dacd-8de9-4e89-818e-41aaa3f63eff_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Interior Design</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Home decor ideas</p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-07-18" data-tags="nature forest travel" data-title="Forest Path" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Forest Path" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/886fdf92-24b5-46a8-929e-6b489c693321_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Forest Path</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Nature wanderlust</p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-05-26" data-tags="fashion style editorial" data-title="Fashion Style" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Fashion Style" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4b03cd7d-42d4-44d2-b798-b0d2bdb875d9_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Fashion Style</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Style inspiration</p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-09-02" data-tags="tech innovation digital 3d" data-title="Tech Innovation" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Tech Innovation" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0b6d5bfd-1b46-4b40-ab34-933ab71441a3_800w.webp"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Tech Innovation</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Future technology</p>
</div>
</div>
</article>
<article className="mb-4 reveal" data-date="2024-04-14" data-tags="travel ocean seascape motion" data-title="Ocean Views" style={{breakInside: 'avoid', opacity: '1', transform: 'translateY(0px)'}}>
<div className="group overflow-hidden hover:ring-white/20 hover:shadow-xl transition ring-white/10 ring-1 rounded-2xl bg-zinc-900">
<div className="relative">
<img alt="Ocean Views" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c0a942-8db1-4109-b875-9ccb3cee3299_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
<button className="px-3.5 py-1.5 rounded-full text-black text-xs bg-purple-50 hover:bg-purple-200" style={{fontFamily: '\'Inter\',sans-serif'}}>Collect</button>
</div>
</div>
<div className="p-4">
<h4 className="text-sm font-medium text-slate-100" style={{fontFamily: '\'Inter\',sans-serif'}}>Ocean Views</h4>
<p className="text-xs text-slate-400 mt-1" style={{fontFamily: '\'Inter\',sans-serif'}}>Travel destinations</p>
</div>
</div>
</article>
</div>

<div className="hidden text-center py-16" id="emptyState">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 mb-4 bg-zinc-900">
<svg className="lucide lucide-search text-slate-400" data-lucide="search" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h4 className="text-lg font-medium mb-1" style={{fontFamily: '\'Inter\',sans-serif'}}>No results found</h4>
<p className="text-sm text-slate-400" style={{fontFamily: '\'Inter\',sans-serif'}}>Try a different keyword or filter.</p>
</div>
</div>
</main>
</div>
</section><section className="sm:px-6 sm:py-10 md:py-12 lg:pl-8 lg:pr-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-zinc-400">What people say</p>
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
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            AuraGen's text-to-image is incredible. I described a sunset cityscape and got exactly what I envisioned in seconds.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The quality is unmatched. Every image looks professional and polished. Perfect for our creative projects.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Lightning fast generation with stunning results. The style presets make it so easy to get exactly what I need.
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
            The image-to-image transformation is magic. I can upload sketches and get fully realized artwork instantly.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            AuraGen's text-to-image is incredible. I described a sunset cityscape and got exactly what I envisioned in seconds.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The quality is unmatched. Every image looks professional and polished. Perfect for our creative projects.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Lightning fast generation with stunning results. The style presets make it so easy to get exactly what I need.
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
            The image-to-image transformation is magic. I can upload sketches and get fully realized artwork instantly.
          </p>
</article>
</div>
</div>
<div className="border-t border-zinc-900/80"></div>

<div className="sm:py-8 pt-6 pb-6 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The API integration was seamless. We built an entire creative workflow around AuraGen in just days.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Commercial rights included with every generation. No more worrying about licensing issues.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The privacy controls give us peace of mind. Our creative assets stay completely private and secure.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Support team is incredibly responsive. Had a question at 2am and got a helpful response within minutes.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The API integration was seamless. We built an entire creative workflow around AuraGen in just days.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Commercial rights included with every generation. No more worrying about licensing issues.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The privacy controls give us peace of mind. Our creative assets stay completely private and secure.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Support team is incredibly responsive. Had a question at 2am and got a helpful response within minutes.
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

<section className="md:p-10 bg-zinc-500/5 max-w-7xl border-white/10 border ring-white/10 ring-1 rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(200deg, transparent, black 25%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 25%, black 65%, transparent)'}}>

<div className="mb-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="">
<h1 className="sm:text-5xl text-2xl font-medium text-white tracking-tighter text-left pt-6 pb-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 45%, transparent)'}}>AuraGen — Help &amp; FAQs</h1>
<p className="mt-1 text-sm text-slate-400">Quick answers about AI image generation and features.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex text-left w-full gap-x-4 gap-y-4 items-center justify-between" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">What is Arcade AI?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Arcade AI is a powerful image generation platform that transforms your text descriptions into stunning visuals. Using advanced AI models, we create photorealistic, artistic, and stylized images in seconds.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">How fast is image generation?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Most images are generated in 5-15 seconds depending on quality settings. High-resolution outputs may take up to 30 seconds. We prioritize speed without compromising quality.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">What styles are available?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              We support photorealistic, artistic, anime, digital art, 3D render, and many more styles. Each preset can be customized with additional parameters for complete creative control.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Can I use images commercially?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Yes! All images generated on paid plans come with full commercial usage rights. You own the rights to use, modify, and sell your generated images.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">What is the credit system?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Credits are used to generate images. Standard quality uses 2 credits, high quality uses 4 credits, and ultra quality uses 8 credits per image. Credits refill monthly based on your plan.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Is my data safe and private?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Absolutely. Your prompts and generated images are completely private by default. We use industry-standard encryption and never train our models on your private content.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">Can I integrate via API?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Yes! Pro and Enterprise plans include full API access with comprehensive documentation. Integrate AI image generation directly into your applications and workflows.
            </div>
</div>

<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100">What if I need help?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="faq-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
              Our support team is available 24/7 via chat and email. We also provide comprehensive documentation, video tutorials, and an active community forum.
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
              Get Started Free
            </a>
</div>
</div>

</section>

<section className="overflow-hidden my-10 relative" id="cta">
<div className="text-white max-w-7xl mr-auto ml-auto pr-0 pb-24 pl-0">
<div className="md:p-10 bg-zinc-500/5 max-w-7xl border-white/10 border rounded-3xl ring-white/10 ring-1 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 60%, transparent)'}}>
<div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:p-12 pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 items-center">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Ready to turn prompts into pixels?</h3>
<p className="mt-2 max-w-prose text-slate-200">Tell us about your site, budget, and timeline—we'll shape a clear plan from concept to permits to construction drawings.</p>
<div className="mt-5 flex gap-3 flex-wrap">
<a className="hover:shadow-lg transition-shadow text-sm font-medium text-slate-900 bg-white rounded-full pt-3 pr-5 pb-3 pl-5 shadow" href="#">Start Generating</a>
<a className="hover:bg-white/5 transition-colors text-sm text-white border-white/20 border rounded-full pt-3 pr-5 pb-3 pl-5" href="#features">View Pricing</a>
</div>
</div>
<div className="text-sm text-slate-200 bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<p className="font-medium">Customization notes</p>
<ul className="mt-2 list-disc space-y-1 pl-5">
<li className="">Swap images in gallery array.</li>
<li className="">Edit copy in features and testimonials.</li>
<li className="">Adjust palette via tokens.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-16 pb-10" style={{maskImage: 'linear-gradient(100deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="space-y-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[120px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3473923-ebc4-44bd-a2b8-bcf5197f648b_800w.png)] bg-cover rounded" href="#"></a>
<p className="text-sm text-slate-400 max-w-xs">Transform your imagination into stunning visuals with AI-powered image generation.</p>
<div className="flex items-center gap-3">
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features">Features</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">API</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Changelog</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Roadmap</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">About</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Press</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Partners</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#reviews">Reviews</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Community</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Contact</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 pb-8">
<div className="max-w-xl mx-auto text-center">
<h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
<p className="text-sm text-slate-400 mb-4">Get the latest features and updates delivered to your inbox.</p>
<form className="flex gap-2 max-w-md mx-auto">
<input className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Enter your email" type="email"/>
<button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">
        © <span id="year">2025</span> Arcade AI. All rights reserved.
      </p>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
