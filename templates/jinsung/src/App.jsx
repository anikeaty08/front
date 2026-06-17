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



(function () {
const style = document.createElement("style");
style.textContent = `.animate-on-scroll { animation-play-state: paused !important; } .animate-on-scroll.animate { animation-play-state: running !important; }`;
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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="w-full">
<div className="flex xl:mt-8 w-full mt-8 mb-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/54f89022-71e7-435d-b90f-9f79794a5404_1600w.png)] bg-cover rounded-xl invert" href="#"></a>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-neutral-900 transition-colors font-medium font-geist" href="#work">
              Work
            </a>
<a className="hover:text-neutral-900 transition-colors font-medium font-geist" href="#about">
              About
            </a>
<a className="hover:text-neutral-900 transition-colors font-medium font-geist" href="#testimonials">
              Testimonials
            </a>
<a className="hover:text-neutral-900 transition-colors font-medium font-geist" href="#contact">
              Contact
            </a>
</nav>
<div className="flex gap-3 items-center">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors" id="mobile-menu-btn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
<path d="M4 6h16"></path>
</svg>
</button>
<button className="hidden md:inline-flex cursor-pointer flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-neutral-900/50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-sm text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-full pt-3 pr-8 pb-3 pl-8 items-center justify-center font-geist" role="button">
              Get Started
            </button>
</div>
</div>
<div className="md:hidden hidden bg-white/80 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6" id="mobile-menu">
<nav className="py-4 space-y-2">
<a className="block px-4 py-3 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 transition font-geist" href="#work">
              Work
            </a>
<a className="block px-4 py-3 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 transition font-geist" href="#about">
              About
            </a>
<a className="block px-4 py-3 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 transition font-geist" href="#testimonials">
              Testimonials
            </a>
<a className="block px-4 py-3 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 transition font-geist" href="#contact">
              Contact
            </a>
</nav>
</div>
</header>

<section className="sm:py-24 lg:py-32 pt-24 pb-24">
<div className="max-w-4xl [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll">
<h1 className="text-5xl sm:text-6xl lg:text-8xl md:text-7xl leading-[1.05] font-medium text-neutral-900 mb-6 font-geist tracking-tighter">
      Designing digital
      <img alt="Product UI" className="inline-block align-middle sm:h-16 sm:w-28 md:h-20 md:w-36 lg:h-24 lg:w-40 w-16 h-12 object-cover rounded-2xl mr-2 ml-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5fb37561-0fbe-434c-aa29-2fd9d562d134_320w.webp"/>
      experiences that users love
      <img alt="Design system" className="inline-block align-middle sm:h-16 sm:w-20 md:h-20 md:w-28 lg:h-24 lg:w-32 w-14 h-12 object-cover rounded-2xl mr-2 ml-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_320w.webp"/>
</h1>
<p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl leading-relaxed font-geist [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
      UI/UX Designer based in San Francisco. I craft intuitive interfaces
      and design systems that help teams build better products—from
      zero-to-one to scale.
    </p>
<div className="flex flex-wrap gap-2.5 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist shadow-sm">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
        UI/UX Design
      </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist shadow-sm">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
        Design Systems
      </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist shadow-sm">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="M9 15h12"></path>
</svg>
        Prototyping
      </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist shadow-sm">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
        User Research
      </span>
</div>
<div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="button-wrap relative z-10 rounded-full bg-transparent pointer-events-none">
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative block select-none font-medium text-base text-neutral-800 tracking-tight px-6 py-3.5 font-geist" style={{fontSize: '17px'}}>
            View my work
          </span>
<div className="button-shine"></div>
</button>
<style>
          @property --angle-1{syntax:"<angle>";inherits:false;initial-value:-75deg}@property --angle-2{syntax:"<angle>";inherits:false;initial-value:-45deg}.button-wrap{transition:all 400ms cubic-bezier(0.25,1,0.5,1)}.glass-button{background:linear-gradient(-75deg,rgba(255,255,255,0.05),rgba(255,255,255,0.2),rgba(255,255,255,0.05));box-shadow:inset 0 0.125em 0.125em rgba(0,0,0,0.05),inset 0 -0.125em 0.125em rgba(255,255,255,0.5),0 0.25em 0.125em -0.125em rgba(0,0,0,0.2),0 0 0.1em 0.25em rgba(255,255,255,0.2) inset,0 0 0 0 rgba(255,255,255,1);backdrop-filter:blur(clamp(1px,0.125em,4px));transition:all 400ms cubic-bezier(0.25,1,0.5,1)}.glass-button:hover{transform:scale(0.975);backdrop-filter:blur(0.01em);box-shadow:inset 0 0.125em 0.125em rgba(0,0,0,0.05),inset 0 -0.125em 0.125em rgba(255,255,255,0.5),0 0.15em 0.05em -0.1em rgba(0,0,0,0.25),0 0 0.05em 0.1em rgba(255,255,255,0.5) inset,0 0 0 0 rgba(255,255,255,1)}.glass-button:active{transform:scale(0.95) rotate3d(1,0,0,25deg);box-shadow:inset 0 0.125em 0.125em rgba(0,0,0,0.05),inset 0 -0.125em 0.125em rgba(255,255,255,0.5),0 0.125em 0.125em -0.125em rgba(0,0,0,0.2),0 0 0.1em 0.25em rgba(255,255,255,0.2) inset,0 0.225em 0.05em 0 rgba(0,0,0,0.05),0 0.25em 0 0 rgba(255,255,255,0.75),inset 0 0.25em 0.05em 0 rgba(0,0,0,0.15)}.button-text{text-shadow:0em 0.25em 0.05em rgba(0,0,0,0.1);transition:all 400ms cubic-bezier(0.25,1,0.5,1)}.glass-button:hover .button-text{text-shadow:0.025em 0.025em 0.025em rgba(0,0,0,0.12)}.glass-button:active .button-text{text-shadow:0.025em 0.25em 0.05em rgba(0,0,0,0.12)}.glass-button::after{content:'';position:absolute;inset:0;border-radius:999px;width:calc(100% + 2px);height:calc(100% + 2px);top:-1px;left:-1px;padding:1px;box-sizing:border-box;background:conic-gradient(from var(--angle-1) at 50% 50%,rgba(0,0,0,0.5),rgba(0,0,0,0) 5% 40%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0) 60% 95%,rgba(0,0,0,0.5)),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5));mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;transition:all 400ms cubic-bezier(0.25,1,0.5,1),--angle-1 500ms ease;box-shadow:inset 0 0 0 0.5px rgba(255,255,255,0.5)}.glass-button:hover::after{--angle-1:-125deg}.glass-button:active::after{--angle-1:-75deg}.button-shine{position:absolute;inset:0;border-radius:999px;width:calc(100% - 1px);height:calc(100% - 1px);top:0.5px;left:0.5px;background:linear-gradient(var(--angle-2),rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 40% 50%,rgba(255,255,255,0) 55%);mix-blend-mode:screen;pointer-events:none;background-size:200% 200%;background-position:0% 50%;background-repeat:no-repeat;transition:background-position 500ms cubic-bezier(0.25,1,0.5,1),--angle-2 500ms cubic-bezier(0.25,1,0.5,1)}.glass-button:hover .button-shine{background-position:25% 50%}.glass-button:active .button-shine{background-position:50% 15%;--angle-2:-15deg}
        </style>
</div>
<a className="inline-flex items-center justify-center hover:bg-neutral-100 text-base font-medium text-neutral-900 bg-white border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-geist" href="mailto:hello@jinsung.design">
        Contact me
      </a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<div className="relative overflow-hidden rounded-3xl aspect-square ring-1 ring-neutral-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="3D Blue Navigation Pin App Icon" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8e48a5a-a172-4ead-919c-bf35b5db4dc8_800w.webp"/>
</div>
<div className="relative overflow-hidden rounded-3xl aspect-square ring-1 ring-neutral-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="Glowing Blue Minimalist Clock Icon" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a3354ce-cfb4-4e82-b458-faabddc2d0bd_800w.webp"/>
</div>
<div className="relative overflow-hidden rounded-3xl aspect-square ring-1 ring-neutral-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bf763d5d-3860-46d9-843b-a85136ecf41b_800w.jpg"/>
</div>
<div className="relative overflow-hidden rounded-3xl aspect-square ring-1 ring-neutral-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="3D Glass Code Icon on Sky Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2a5d80ec-fd5e-4db7-9b51-378cd6af85f2_800w.jpg"/>
</div>
</div>
<style>
    .button{cursor:pointer;position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;transition:all 0.25s ease;background:radial-gradient(65.28% 65.28% at 50% 100%,rgba(255,165,0,0.8) 0%,rgba(255,165,0,0) 100%),linear-gradient(0deg,#f97316,#f97316);border-radius:9999px;border:none;outline:none;padding:12px 24px;min-height:48px;min-width:102px}.button::before,.button::after{content:"";position:absolute;transition:all 0.5s ease-in-out;z-index:0}.button::before{inset:1px;background:linear-gradient(177.95deg,rgba(255,255,255,0.19) 0%,rgba(255,255,255,0) 100%);border-radius:9999px}.button::after{inset:2px;background:radial-gradient(65.28% 65.28% at 50% 100%,rgba(255,165,0,0.8) 0%,rgba(255,165,0,0) 100%),linear-gradient(0deg,#f97316,#f97316);border-radius:9999px}.button:active{transform:scale(0.95)}.points_wrapper{overflow:hidden;width:100%;height:100%;pointer-events:none;position:absolute;z-index:1}.points_wrapper .point{bottom:-10px;position:absolute;animation:floating-points infinite ease-in-out;pointer-events:none;width:2px;height:2px;background-color:#fff;border-radius:9999px}@keyframes floating-points{0%{transform:translateY(0)}85%{opacity:0}100%{transform:translateY(-55px);opacity:0}}.points_wrapper .point:nth-child(1){left:10%;opacity:1;animation-duration:2.35s;animation-delay:0.2s}.points_wrapper .point:nth-child(2){left:30%;opacity:0.7;animation-duration:2.5s;animation-delay:0.5s}.points_wrapper .point:nth-child(3){left:25%;opacity:0.8;animation-duration:2.2s;animation-delay:0.1s}.points_wrapper .point:nth-child(4){left:44%;opacity:0.6;animation-duration:2.05s}.points_wrapper .point:nth-child(5){left:50%;opacity:1;animation-duration:1.9s}.points_wrapper .point:nth-child(6){left:75%;opacity:0.5;animation-duration:1.5s;animation-delay:1.5s}.points_wrapper .point:nth-child(7){left:88%;opacity:0.9;animation-duration:2.2s;animation-delay:0.2s}.points_wrapper .point:nth-child(8){left:58%;opacity:0.8;animation-duration:2.25s;animation-delay:0.2s}.points_wrapper .point:nth-child(9){left:98%;opacity:0.6;animation-duration:2.6s;animation-delay:0.1s}.points_wrapper .point:nth-child(10){left:65%;opacity:1;animation-duration:2.5s;animation-delay:0.2s}.inner{z-index:2;gap:6px;position:relative;width:100%;color:white;display:inline-flex;align-items:center;justify-content:center;font-size:16px;font-weight:500;line-height:1.5;transition:color 0.2s ease-in-out}.inner svg.icon{width:18px;height:18px;transition:transform 0.3s ease;stroke:white;fill:none}.button:hover svg.icon{transform:translateX(2px)}.button:hover svg.icon path{animation:dash 0.8s linear forwards}@keyframes dash{0%{stroke-dasharray:0,20;stroke-dashoffset:0}50%{stroke-dasharray:10,10;stroke-dashoffset:-5}100%{stroke-dasharray:20,0;stroke-dashoffset:-10}}
  </style>
</section>

<section className="py-16 sm:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="work">
<div className="mb-12">
<p className="text-xs uppercase text-neutral-500 tracking-widest mb-2 font-geist">
            Selected Work
          </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-geist tracking-tighter font-medium" style={{}}>
            Recent Projects
          </h2>
</div>
<div className="grid gap-8 lg:gap-12">
<article className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 hover:shadow-xl transition-all duration-500 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 px-3 py-1 text-xs font-medium mb-4 w-fit font-geist">
                  Mobile App
                </div>
<h3 className="text-2xl sm:text-3xl mb-4 font-geist tracking-tighter font-medium" style={{}}>
                  FinanceFlow
                </h3>
<p className="text-neutral-600 mb-6 leading-relaxed font-geist">
                  A comprehensive financial management app that simplifies
                  budgeting and expense tracking with intuitive visualizations
                  and smart insights.
                </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    UI Design
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    Mobile
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    iOS/Android
                  </span>
</div>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-3 transition-all font-geist" href="#">
                  View case study
                  <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50 ring-1 ring-neutral-200">
<img alt="Minimal Smartphone Mockup on Pastel Gradient" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75780764-3e6d-44ae-83f0-f5d7783019f5_1600w.webp"/>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 hover:shadow-xl transition-all duration-500 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
<div className="order-2 lg:order-1 relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-orange-100 to-rose-50 ring-1 ring-neutral-200">
<img alt="3D stack of colorful credit cards" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10af7b89-4823-42f7-82ac-eecf56ee5d0a_1600w.webp"/>
</div>
<div className="flex flex-col justify-center order-1 lg:order-2">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-50 text-purple-700 ring-1 ring-purple-200 px-3 py-1 text-xs font-medium mb-4 w-fit font-geist">
                  Web Platform
                </div>
<h3 className="text-2xl sm:text-3xl mb-4 font-geist tracking-tighter font-medium" style={{}}>
                  PayStream
                </h3>
<p className="text-neutral-600 mb-6 leading-relaxed font-geist">
                  Modern payment platform designed for seamless transactions
                  with enhanced security features and real-time analytics
                  dashboard.
                </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    Web Design
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    Dashboard
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-geist">
                    FinTech
                  </span>
</div>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-3 transition-all font-geist" href="#">
                  View case study
                  <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="py-16 sm:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="about">
<div className="mb-8">
<p className="text-xs uppercase text-neutral-500 tracking-widest mb-2 font-geist">
            About Me
          </p>
<h2 className="text-3xl sm:text-4xl font-geist tracking-tighter font-medium" style={{}}>
            Behind the pixels
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
<div className="lg:col-span-8">
<div className="relative overflow-hidden bg-white ring-1 ring-neutral-200 rounded-3xl shadow-sm">
<img alt="Abstract glassy wave in blue and violet gradient" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48ebcefa-01a3-427d-b3b9-ef83db6995e0_1600w.webp"/>
<div className="p-6 sm:p-8">
<div className="prose prose-neutral max-w-none">
<p className="text-lg text-neutral-700 leading-relaxed mb-4 font-geist">
                    With over 7 years of experience in UI/UX design, I've helped
                    startups and established companies create products that
                    users love.
                  </p>
<p className="text-neutral-600 mb-4 font-geist">
                    Based in San Francisco, I specialize in creating intuitive
                    interfaces and scalable design systems. My approach combines
                    user research, rapid prototyping, and iterative design to
                    solve complex problems with elegant solutions.
                  </p>
<p className="text-neutral-600 font-geist">
                    When I'm not designing, you'll find me exploring the city's
                    coffee shops, attending design meetups, or contributing to
                    open-source design projects.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
<div className="ring-1 ring-neutral-200 bg-white rounded-3xl p-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M7 11h8"></path>
<path d="M7 16h12"></path>
<path d="M7 6h3"></path>
</svg>
<span className="font-geist">By the Numbers</span>
</div>
<div className="space-y-4">
<div>
<p className="text-2xl text-neutral-900 font-geist tracking-tighter font-medium" style={{}}>
                    50+
                  </p>
<p className="text-sm text-neutral-600 font-geist">
                    Projects Completed
                  </p>
</div>
<div>
<p className="text-2xl text-neutral-900 font-geist tracking-tighter font-medium" style={{}}>
                    7
                  </p>
<p className="text-sm text-neutral-600 font-geist">
                    Years Experience
                  </p>
</div>
<div>
<p className="text-2xl text-neutral-900 font-geist tracking-tighter font-medium" style={{}}>
                    25+
                  </p>
<p className="text-sm text-neutral-600 font-geist">
                    Happy Clients
                  </p>
</div>
</div>
</div>
<div className="bg-neutral-900 rounded-3xl shadow-sm p-6">
<div className="flex items-center gap-2 text-white/80 text-xs mb-4">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect>
<path d="M9 22v-4h6v4"></path>
<path d="M8 6h.01"></path>
<path d="M16 6h.01"></path>
<path d="M12 6h.01"></path>
<path d="M12 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 10h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 10h.01"></path>
<path d="M8 14h.01"></path>
</svg>
<span className="font-geist">Tools</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Figma</span>
<span className="text-white/60 text-xs font-geist">Primary</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Sketch</span>
<span className="text-white/60 text-xs font-geist">Design</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Framer</span>
<span className="text-white/60 text-xs font-geist">
                    Prototyping
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Adobe CC</span>
<span className="text-white/60 text-xs font-geist">Graphics</span>
</div>
</div>
</div>
<div className="ring-1 ring-neutral-200 bg-white rounded-3xl p-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
<span className="font-geist">Recognition</span>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-600 font-geist">
                  Featured on Awwwards
                </p>
<p className="text-sm text-neutral-600 font-geist">
                  CSS Design Awards Winner
                </p>
<p className="text-sm text-neutral-600 font-geist">
                  Dribbble Top Designer 2024
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="testimonials">
<div className="flex items-center justify-between mb-8">
<div className="space-y-1">
<p className="text-xs uppercase text-neutral-500 tracking-widest font-geist">
              What clients say
            </p>
<h2 className="text-3xl sm:text-4xl font-geist tracking-tighter font-medium" style={{}}>
              Testimonials
            </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<span className="text-sm font-geist">Real feedback from clients</span>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional Portrait of Curly-Haired Businessman" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Michael Chen
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      CEO, TechStart
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin transformed our product completely. The new design
                  increased user engagement by 300% within the first month.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Freckled young woman close-up portrait" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a77e6b3-efc2-47ae-a304-9e97bf3ebee3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Sarah Johnson
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      Product Lead, DesignCo
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Incredible attention to detail and user needs. Jin's designs
                  are both beautiful and highly functional.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Stylish male studio portrait in dark suit" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a34e7279-3582-477a-8b2b-d9e9789eb63c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        David Park
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      Founder, AppWorks
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Working with Jin was seamless. Fast iterations, clear
                  communication, and outstanding results.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Studio portrait of woman in emerald blazer" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a1822f8-a919-4c21-8c72-c2b907f785f5_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Emma Wilson
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      Director, CreativeLab
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin's design thinking elevated our brand. The design system
                  they created is still being used today.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional Portrait of Curly-Haired Businessman" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Michael Chen
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      CEO, TechStart
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin transformed our product completely. The new design
                  increased user engagement by 300% within the first month.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Freckled young woman close-up portrait" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a77e6b3-efc2-47ae-a304-9e97bf3ebee3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Sarah Johnson
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      Product Lead, DesignCo
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Incredible attention to detail and user needs. Jin's designs
                  are both beautiful and highly functional.
                </p>
</article>
</div>
</div>
<div className="border-t border-neutral-200"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional Portrait of Smiling Young Woman" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Lisa Martinez
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      VP Design, Innovate
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  The design system Jin created streamlined our entire workflow.
                  Best investment we made this year.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional smiling man portrait in suit" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48bfa4c0-f6a0-4932-b61a-337e47aa04e9_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        James Lee
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      CTO, DataFlow
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin understands both design and development. The handoff was
                  perfect, saving us weeks of iterations.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Studio portrait of woman with striking blue eyes" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Rachel Kim
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      Head of UX, CloudBase
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  A true professional who delivers exceptional work every single
                  time. Highly recommended!
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional portrait of confident businessman" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5a8f3649-9a97-4446-955e-d3ced353790f_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Tom Anderson
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      COO, StartupHub
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin's work speaks for itself. Our conversion rate doubled
                  after the redesign launch.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional Portrait of Smiling Young Woman" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        Lisa Martinez
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      VP Design, Innovate
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  The design system Jin created streamlined our entire workflow.
                  Best investment we made this year.
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-3">
<img alt="Professional smiling man portrait in suit" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48bfa4c0-f6a0-4932-b61a-337e47aa04e9_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-900 font-geist">
                        James Lee
                      </span>
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-neutral-500 font-geist">
                      CTO, DataFlow
                    </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-700 font-geist">
                  Jin understands both design and development. The handoff was
                  perfect, saving us weeks of iterations.
                </p>
</article>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="mb-12 text-center">
<p className="text-xs uppercase text-neutral-500 tracking-widest mb-2 font-geist">
            Featured Reviews
          </p>
<h2 className="text-3xl sm:text-4xl font-geist tracking-tighter font-medium" style={{}}>
            Client Highlights
          </h2>
</div>
<div className="relative flex items-center justify-center py-12 sm:py-20" style={{minHeight: '450px'}}>
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-10deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-neutral-200 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-geist">
                    Working with Jin was transformative. The design elevated our
                    brand and user experience to new heights. Their attention to
                    detail is unmatched.
                  </p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Portrait of smiling young man on white background" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900 font-geist">
                          Alex Rivera
                        </div>
<div className="text-xs text-neutral-500 font-geist">
                          CEO, GrowthLabs
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-6deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white/90 text-neutral-900 shadow-xl ring-1 ring-neutral-200 backdrop-blur overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-geist">
                    Jin's expertise in both UX and visual design made our
                    project seamless. They delivered beyond expectations and on
                    time every milestone.
                  </p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Moody studio portrait of elegant woman" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900 font-geist">
                          Nina Patel
                        </div>
<div className="text-xs text-neutral-500 font-geist">
                          Director, PixelCraft
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(0deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white/80 text-neutral-900 shadow-lg ring-1 ring-neutral-200 backdrop-blur overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-geist">
                    Exceptional designer with a strategic mindset. Jin helped us
                    rethink our entire product experience from the ground up.
                  </p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Dramatic Black-and-White Male Portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900 font-geist">
                          Marcus Webb
                        </div>
<div className="text-xs text-neutral-500 font-geist">
                          VP Product, Velocity
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="contact">
<div className="relative overflow-hidden bg-white border border-neutral-200 rounded-3xl">
<div className="relative z-10 p-8 sm:p-12">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12">
<div className="lg:col-span-4">
<div className="mb-6">
<h3 className="text-2xl text-neutral-900 mb-2 font-geist tracking-tighter font-medium" style={{}}>
                    Jin Sung
                  </h3>
<p className="text-lg text-neutral-600 font-geist">
                    UI/UX Designer crafting digital experiences in San Francisco
                  </p>
</div>
<div className="p-8 sm:p-12 bg-gradient-to-b from-neutral-800 to-neutral-950 border-neutral-200 border rounded-3xl shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 px-3 py-2 text-sm font-geist">
<span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Let's work together
                      </div>
<h4 className="text-2xl text-white font-geist tracking-tighter font-medium" style={{}}>
                        Get in touch
                      </h4>
<ul className="space-y-3 text-base text-white/70">
<li className="flex items-start gap-3 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                          Available for freelance projects
                        </li>
<li className="flex items-start gap-3 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                          Responds within 24 hours
                        </li>
<li className="flex items-start gap-3 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                          Based in San Francisco, CA
                        </li>
</ul>
<div className="pt-2">
<a className="inline-flex items-center gap-2 h-12 px-6 rounded-xl ring-1 ring-white/20 text-sm text-white bg-black/20 hover:bg-white hover:text-black transition font-geist" href="mailto:hello@jinsung.design">
                          Email me
                          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4 font-geist">
                          Services
                        </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition font-geist" href="#ui-design">
                              UI Design
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#ux-research">
                              UX Research
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#prototyping">
                              Prototyping
                            </a>
</li>
<li className="">
<a className="hover:text-white transition font-geist" href="#design-systems">
                              Design Systems
                            </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4 font-geist">
                          Portfolio
                        </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition font-geist" href="#work">
                              Recent Work
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#case-studies">
                              Case Studies
                            </a>
</li>
<li className="">
<a className="hover:text-white transition font-geist" href="#experiments">
                              Experiments
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#dribbble">
                              Dribbble
                            </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4 font-geist">
                          Connect
                        </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition font-geist" href="#about">
                              About
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#blog">
                              Blog
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#contact">
                              Contact
                            </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#linkedin">
                              LinkedIn
                            </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-4 text-base text-neutral-600">
<span className="font-geist">© 2025 Jin Sung</span>
<span className="hidden sm:inline text-neutral-300 font-geist">
                      |
                    </span>
<a className="hover:text-neutral-900 transition font-geist" href="#privacy">
                      Privacy
                    </a>
<span className="text-neutral-300 font-geist">/</span>
<a className="hover:text-neutral-900 transition font-geist" href="#terms">
                      Terms
                    </a>
</div>
<div className="flex items-center gap-3">
<a aria-label="Dribbble" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition" href="https://dribbble.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.63 12c0 .74-.1 1.46-.28 2.15-1.37-.32-2.89-.5-4.5-.5-1.19 0-2.35.1-3.47.29-.2-.48-.4-.97-.61-1.46 1.78-.75 3.4-1.88 4.73-3.28 1.54 1.37 2.63 3.2 3.13 5.3zM12 2.18c2.61 0 4.97 1.04 6.71 2.72-1.17 1.27-2.63 2.3-4.26 2.99-1.17-2.14-2.5-3.99-3.91-5.44.47-.18.96-.27 1.46-.27zM6.65 3.63c1.4 1.45 2.72 3.27 3.89 5.38-2.19.7-4.63 1.08-7.28 1.11.46-2.87 1.91-5.37 4.14-7.04zM2.18 12c0-.17.01-.34.02-.51 3.13-.03 6.02-.55 8.63-1.45.19.42.37.85.55 1.28-2.18.75-4.18 1.95-5.88 3.49-1.92-1.74-3.19-4.16-3.32-6.81zm9.82 9.82c-2.61 0-4.97-1.04-6.71-2.72 1.44-1.39 3.22-2.44 5.21-3.03.75 1.88 1.36 3.88 1.81 5.98-.43.12-.88.18-1.34.18zm3.89-1.26c-.48-2.19-1.13-4.25-1.92-6.18 1.03-.17 2.1-.26 3.21-.26 1.43 0 2.8.14 4.09.4-.63 2.63-2.25 4.87-4.52 6.31z"></path>
</svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 16 16" width="20">
<path d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition" href="https://linkedin.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0zM7.3 20.45H3.9V9h3.4zm-1.7-13a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14.85 13H17v-5.6c0-1.34 0-3.07-1.87-3.07s-2.15 1.46-2.15 2.97v5.7H9.6V9h3.25v1.5h.05a3.56 3.56 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
