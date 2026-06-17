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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll
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



                function nextStep(step) {
                  document.querySelectorAll('.calc-step').forEach(el => el.classList.add('hidden'));
                  const target = document.getElementById('calc-step-' + step);
                  if(target) target.classList.remove('hidden');
                  // Optional: scroll to top of calculator
                  document.getElementById('calculator-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                function showResult() {
                  const btn = event.target;
                  const actions = document.getElementById('submit-actions');
                  btn.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
                  setTimeout(() => {
                    actions.classList.add('hidden');
                    document.getElementById('result-box').classList.remove('hidden');
                  }, 1500);
                }
              


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        hamburger.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          hamburgerIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('hidden');
        });
      });

      // Modal Logic
      function openModal() {
         const modal = document.getElementById('consultation-modal');
         modal.classList.remove('hidden');
         document.body.classList.add('no-scroll');
      }

      function closeModal() {
         const modal = document.getElementById('consultation-modal');
         modal.classList.add('hidden');
         document.body.classList.remove('no-scroll');
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
      
<div className="" id="wrapper">

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
</div>
<header className="fixed top-0 left-0 right-0 z-50 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 mix-blend-multiply" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
            R
          </div>
<span>RenovAlgarve</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Process
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Calculator
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">
            About
          </a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Contact
          </a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" onclick="openModal()" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
            Schedule Consultation
          </button>
</div>
<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors" id="hamburger">
<svg className="w-6 h-6" fill="none" height="24" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="w-6 h-6 hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="md:hidden hidden" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 pb-6">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 shadow-xl shadow-slate-900/10 overflow-hidden" style={{boxShadow: '0 20px 40px -12px rgba(15, 23, 42, 0.15), 0 12px 20px -8px rgba(15, 23, 42, 0.1)'}}>
<nav className="flex flex-col">
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">
                Process
              </a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">
                Calculator
              </a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">
                About
              </a>
<a className="px-6 py-4 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100" href="#">
                Contact
              </a>
<div className="p-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-3 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" onclick="openModal()" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                  Schedule Consultation
                </button>
</div>
</nav>
</div>
</div>
</div>
</header>
<main className="">
<section className="relative overflow-hidden pt-24">
<div className="max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 items-start">

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll animate">
<h1 className="sm:text-5xl lg:text-7xl leading-[1.05] text-4xl font-semibold text-slate-900 tracking-tighter">
                PREMIUM PROPERTY
                <span className="inline-block mr-2 ml-2 relative">
<span className="shadow-amber-500/20 xl:pr-2 xl:pl-2 xl:pt-0 xl:pb-0 sm:pl-2 sm:pr-2 sm:pb-0 sm:pt-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl pt-0 pr-1 pb-0 pl-1 relative shadow-lg" style={{boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.15), 0 8px 10px -6px rgba(245, 158, 11, 0.1)'}}>
                    TRANSFORMATION
                  </span>
</span>
                IN THE ALGARVE.
              </h1>
<div className="mt-6 max-w-xl [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<p className="text-base sm:text-lg text-slate-600">
                  You've bought your dream home in Portugal. Now let's make it
                  livable. We bring European standards, transparent pricing, and
                  Belgium expertise to your Algarve renovation project.
                </p>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-3 text-sm sm:text-base font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" onclick="openModal()" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
                  Start Your Project
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm sm:text-base font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10" style={{boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.05)'}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
                  View Transformations
                </button>
</div>
</div>

<aside className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="max-w-md lg:ml-auto">
<p className="text-sm sm:text-base text-slate-600">
                  Don't let "Portuguese timing" and language barriers ruin your
                  investment. We offer detailed quotes, English communication,
                  and high-end finishing for international buyers.
                </p>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                      15+
                    </div>
<div className="text-xs text-slate-600">Years Experience</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                      100%
                    </div>
<div className="text-xs text-slate-600">English Speaker</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 transition-all hover:shadow-lg hover:shadow-slate-400/10" style={{boxShadow: '0 4px 12px -2px rgba(71, 85, 105, 0.08)'}}>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                      Fixed
                    </div>
<div className="text-xs text-slate-600">Price &amp; Time</div>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="relative">
<img alt="Luxurious modern home exterior" className="w-full aspect-[4/3] object-cover rounded-3xl ring-1 ring-slate-200/60 transition-all hover:shadow-2xl hover:shadow-slate-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99ba349f-6119-4d26-b759-12862567fbc0_1600w.webp" style={{boxShadow: '0 20px 40px -12px rgba(71, 85, 105, 0.15), 0 12px 20px -8px rgba(71, 85, 105, 0.1)'}}/>

<div className="absolute -bottom-6 left-6 sm:left-8">
<div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 sm:p-6 ring-1 ring-white/10 transition-all hover:shadow-2xl hover:shadow-slate-900/40" style={{boxShadow: '0 20px 40px -12px rgba(15, 23, 42, 0.3), 0 12px 20px -8px rgba(15, 23, 42, 0.2)', maxWidth: '20rem'}}>
<div className="text-3xl font-semibold tracking-tight">
                      BE/PT
                    </div>
<div className="mt-1.5 text-sm text-slate-300">
                      Belgium Expertise, Algarve Based
                    </div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
                      Fully Insured Excellence
                    </div>
</div>
</div>
</div>
<p className="mt-12 max-w-2xl text-slate-600">
                RenovAlgarve is your bridge between Northern European
                expectations and Southern European charm. We handle everything
                from outdated kitchens to full property modernizations.
              </p>
</div>
<div className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="relative max-w-md lg:ml-auto">
<img alt="Elegant home interior with high ceilings" className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-slate-200/60 transition-all hover:shadow-2xl hover:shadow-slate-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/588ff515-542e-4057-9122-0b57118b3e74_1600w.webp" style={{boxShadow: '0 20px 40px -12px rgba(71, 85, 105, 0.15), 0 12px 20px -8px rgba(71, 85, 105, 0.1)'}}/>

<div className="absolute -top-4 -right-4">
<div className="rounded-3xl bg-white ring-1 ring-slate-200/60 px-4 py-3 flex items-center gap-2 transition-all hover:shadow-xl hover:shadow-amber-500/15" style={{boxShadow: '0 12px 24px -6px rgba(245, 158, 11, 0.12), 0 8px 14px -4px rgba(71, 85, 105, 0.08)'}}>
<svg className="w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{fill: 'rgb(251, 191, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<div>
<div className="text-sm font-medium leading-tight text-slate-900">
                        4.9/5
                      </div>
<div className="text-xs text-slate-600 leading-tight">
                        Expat Satisfaction
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="pt-20 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6 mb-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(51, 65, 85)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect className="" height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">
                      Fixed Timelines
                    </div>
<p className="text-sm text-slate-600 mt-1">
                      We respect deadlines with contractual penalties for
                      delays.
                    </p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path>
<path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
<path d="M16 11h.01"></path>
</svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">
                      Transparent Pricing
                    </div>
<p className="text-sm text-slate-600 mt-1">
                      Detailed breakdowns. No surprise budget explosions halfway
                      through.
                    </p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="M10 4v4"></path>
<path d="M2 8h20"></path>
<path d="M6 4v4"></path>
</svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">
                      English Communication
                    </div>
<p className="text-sm text-slate-600 mt-1">
                      We speak your language. Follow your project from abroad
                      with ease.
                    </p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10">
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<div className="text-base font-medium tracking-tight text-slate-900">
                      Belgium Expertise
                    </div>
<p className="text-sm text-slate-600 mt-1">
                      15 years of high-end construction experience brought to
                      Portugal.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="rounded-[28px] bg-white ring-1 ring-slate-200/60 shadow-xl shadow-slate-900/10 overflow-hidden [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-6 p-8 sm:p-12">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-slate-900 tracking-tight">
                    We fix the problem every new buyer faces: finding a
                    contractor you can trust.
                  </h2>
<p className="text-slate-600 max-w-xl mt-5">
                    Local contractors don't return calls. Quotes vary wildly.
                    "Portuguese timing" drives you crazy. RenovAlgarve changes
                    the narrative with professional management and European
                    quality standards.
                  </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-3 text-sm sm:text-base font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" onclick="openModal()" style={{boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.15)'}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
<path d="M4 17v2"></path>
<path d="M5 18H3"></path>
</svg>
                      Get a Proposal
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm sm:text-base font-medium transition-all hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10" style={{boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.05)'}}>
<svg className="lucide lucide-route w-4 h-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
<circle cx="18" cy="5" r="3"></circle>
</svg>
                      Our Process
                    </button>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold text-slate-900 tracking-tight">
                        73%
                      </div>
<div className="text-xs text-slate-600">
                        Buyers Frustrated
                      </div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-slate-900">
                        100%
                      </div>
<div className="text-xs text-slate-600">Success Rate</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200/60 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-slate-900">
                        5-Star
                      </div>
<div className="text-xs text-slate-600">Reviews</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative h-full">
<img alt="Modern living space with natural light" className="lg:aspect-[4/3] aspect-[16/10] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08efc9bf-5aeb-4790-b4d1-06829b5a7cdc_1600w.webp"/>

<div className="absolute bottom-5 left-5">
<div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl px-4 py-3 shadow-2xl shadow-slate-900/30 border-gradient before:rounded-2xl" style={{position: 'relative'}}>
<div className="flex items-center gap-2 text-xs text-white">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                          Bathroom upgraded in 14 days
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
<section className="relative overflow-hidden bg-slate-950">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute -bottom-32 right-0 w-[36rem] h-[rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
<div className="max-w-3xl [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
            Built for discerning clients
            <p></p>
<h2 className="mt-4 text-3xl sm:text-5xl lg:text--tight text-white">
              Founded by Franklin, bringing 15 years of high-end Belgian
              construction expertise to your Algarve home.
            </h2>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="lg:col-span-4">
<img alt="Client portrait" className="aspect-square shadow-slate-900/50 w-full object-cover rounded-3xl ring-white/10 ring-1 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/128d394a-63e0-4638-a6b9-5f3af4d3a419_800w.jpg"/>
</div>
<div className="lg:col-span-8">
<div className="max-w-2xl">
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<p className="text-base sm:text-lg text-slate-300">
                    We bought a villa near Vilamoura that needed a full
                    overhaul. I was terrified of managing it from the UK.
                    Franklin and his team were a breath of fresh air. They sent
                    weekly videos, the finish quality was exactly what we're
                    used to back home, and there were zero hidden costs.
                  </p>
</div>
<p className="mt-4 text-sm text-slate-400">
                  Sarah &amp; James Thompson, London — Homeowners in Vilamoura
                </p>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
<span className="whitespace-nowrap">
                      European quality standards guaranteed
                    </span>
<svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-900 px-5 py-2.5 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30" onclick="openModal()">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                    Schedule a Consultation
                  </button>
</div>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">
                      40+
                    </div>
<div className="text-xs text-slate-400">Algarve Projects</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">
                      15yr
                    </div>
<div className="text-xs text-slate-400">
                      European Experience
                    </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-white">
                      0%
                    </div>
<div className="text-xs text-slate-400">Hidden Costs</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-slate-50 py-24">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-blue-500/5 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-4xl mb-12">
<p className="text-xs font-bold uppercase text-emerald-600 tracking-widest">
              Estimate Your Renovation Budget
            </p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Plan your project confidently
            </h2>
<p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
              Select your project parameters to get an instant estimated range.
              We believe in transparency from the very first click.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

<div className="lg:col-span-4 space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h20"></path>
<path d="M5 20v-4"></path>
<path d="M19 20v-4"></path>
<path d="M9 20v-8"></path>
<path d="M15 20v-8"></path>
<path d="M12 20v-12"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div>
<h4 className="font-semibold text-slate-900">
                    Accurate Estimations
                  </h4>
<p className="mt-1 text-sm text-slate-600">
                    Based on current market rates in the Algarve for materials
                    and labor.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h4 className="font-semibold text-slate-900">
                    Tailored to Quality
                  </h4>
<p className="mt-1 text-sm text-slate-600">
                    Choose between Standard, Superior, or Premium finishing
                    levels.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="font-semibold text-slate-900">Direct Support</h4>
<p className="mt-1 text-sm text-slate-600">
                    Get a PDF quote sent directly to your email and WhatsApp.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="w-full rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8" id="calculator-container">

<div className="calc-step" id="calc-step-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">
                      1. Project Type
                    </h3>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step 1 of 5
                    </span>
</div>
<p className="text-sm text-slate-600 mb-4">
                    What type of renovation do you intend to carry out?
                  </p>
<div className="space-y-3">
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer transition-all group">
<input className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300" name="project_type" type="radio" value="master_suite"/>
<div>
<div className="font-semibold text-slate-900 group-hover:text-emerald-700">
                          Master Suite
                        </div>
<div className="text-xs text-slate-500">
                          Full renovation including private bathroom
                        </div>
</div>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer transition-all group">
<input className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300" name="project_type" type="radio" value="bathroom"/>
<div>
<div className="font-semibold text-slate-900 group-hover:text-emerald-700">
                          Bathroom
                        </div>
<div className="text-xs text-slate-500">
                          Complete modernization with new plumbing
                        </div>
</div>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer transition-all group">
<input className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300" name="project_type" type="radio" value="kitchen"/>
<div>
<div className="font-semibold text-slate-900 group-hover:text-emerald-700">
                          Kitchen
                        </div>
<div className="text-xs text-slate-500">
                          Remodel with custom cabinets and appliances
                        </div>
</div>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer transition-all group">
<input className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300" name="project_type" type="radio" value="full_renovation"/>
<div>
<div className="font-semibold text-slate-900 group-hover:text-emerald-700">
                          Full Interior Renovation
                        </div>
<div className="text-xs text-slate-500">
                          Integral property transformation
                        </div>
</div>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer transition-all group">
<input className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300" name="project_type" type="radio" value="other"/>
<div className="w-full">
<div className="font-semibold text-slate-900 group-hover:text-emerald-700">
                          Other
                        </div>
<input className="mt-1 w-full text-sm border-b border-slate-300 focus:border-emerald-500 outline-none bg-transparent py-1" onclick="this.parentElement.previousElementSibling.checked = true" placeholder="Specify your project type..." type="text"/>
</div>
</label>
</div>
<button className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" onclick="nextStep(2)">
                    Continue
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="calc-step hidden" id="calc-step-2">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">
                      2. Space Dimension
                    </h3>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step 2 of 5
                    </span>
</div>
<p className="text-sm text-slate-600 mb-6">
                    What is the approximate area to renovate?
                  </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" name="area" type="radio" value="small"/>
<div className="h-full p-5 rounded-xl border border-slate-200 bg-slate-50 peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="font-bold text-slate-900">Up to 15m²</div>
<div className="text-xs text-slate-500 mt-1">
                          e.g., Small bathroom
                        </div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="area" type="radio" value="medium"/>
<div className="h-full p-5 rounded-xl border border-slate-200 bg-slate-50 peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="font-bold text-slate-900">15m² - 30m²</div>
<div className="text-xs text-slate-500 mt-1">
                          e.g., Master bath, compact kitchen
                        </div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="area" type="radio" value="large"/>
<div className="h-full p-5 rounded-xl border border-slate-200 bg-slate-50 peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="font-bold text-slate-900">30m² - 60m²</div>
<div className="text-xs text-slate-500 mt-1">
                          e.g., Large kitchen, master suite
                        </div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="area" type="radio" value="xlarge"/>
<div className="h-full p-5 rounded-xl border border-slate-200 bg-slate-50 peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="font-bold text-slate-900">
                          More than 60m²
                        </div>
<div className="text-xs text-slate-500 mt-1">
                          e.g., Multiple areas
                        </div>
</div>
</label>
</div>
<div className="mt-8 flex gap-3">
<button className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors" onclick="nextStep(1)">
                      Back
                    </button>
<button className="flex-1 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" onclick="nextStep(3)">
                      Continue
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="calc-step hidden" id="calc-step-3">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">
                      3. Finishing Level
                    </h3>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step 3 of 5
                    </span>
</div>
<div className="space-y-4">
<label className="cursor-pointer block">
<input className="peer sr-only" name="quality" type="radio" value="standard"/>
<div className="relative p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="flex justify-between items-start">
<div>
<div className="font-bold text-slate-900">Standard</div>
<div className="text-xs text-slate-500 mt-0.5">
                              Ideal for: Main residences, rentals
                            </div>
</div>
<div className="font-bold text-slate-400 tracking-tight">
                            €€
                          </div>
</div>
<ul className="mt-3 space-y-1">
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Certified quality materials
                          </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Functional design &amp; major brands
                          </li>
</ul>
</div>
</label>
<label className="cursor-pointer block">
<input className="peer sr-only" name="quality" type="radio" value="superior"/>
<div className="relative p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="flex justify-between items-start">
<div>
<div className="font-bold text-slate-900">Superior</div>
<div className="text-xs text-slate-500 mt-0.5">
                              Ideal for: Value increase, second homes
                            </div>
</div>
<div className="font-bold text-slate-600 tracking-tight">
                            €€€
                          </div>
</div>
<ul className="mt-3 space-y-1">
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Premium materials &amp; custom design
                          </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Mid-high end equipment
                          </li>
</ul>
</div>
</label>
<label className="cursor-pointer block">
<input className="peer sr-only" name="quality" type="radio" value="premium"/>
<div className="relative p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-emerald-400 peer-checked:bg-white peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900">
                                Premium
                              </span>
<span className="px-2 py-0.5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-700 uppercase">
                                Luxury
                              </span>
</div>
<div className="text-xs text-slate-500 mt-0.5">
                              Ideal for: Prestige properties
                            </div>
</div>
<div className="font-bold text-slate-900 tracking-tight">
                            €€€€
                          </div>
</div>
<ul className="mt-3 space-y-1">
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Luxury materials (marble, noble woods)
                          </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Exclusive architect design &amp; smart home
                          </li>
</ul>
</div>
</label>
</div>
<div className="mt-8 flex gap-3">
<button className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors" onclick="nextStep(2)">
                      Back
                    </button>
<button className="flex-1 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" onclick="nextStep(4)">
                      Continue
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="calc-step hidden" id="calc-step-4">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">
                      4. Timeline
                    </h3>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step 4 of 5
                    </span>
</div>
<p className="text-sm text-slate-600 mb-6">
                    When would you like the project to be completed?
                  </p>
<div className="space-y-3">
<label className="cursor-pointer block">
<input className="peer sr-only" name="timeline" type="radio" value="priority"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-bold text-slate-900">
                            Priority
                            <span className="text-slate-400 font-normal text-sm ml-1">
                              (Start 2-4 wks)
                            </span>
</span>
<span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                            +20% Cost
                          </span>
</div>
<p className="text-xs text-slate-500 mt-1">
                          Dedicated team, accelerated execution.
                        </p>
</div>
</label>
<label className="cursor-pointer block">
<input checked="" className="peer sr-only" name="timeline" type="radio" value="standard"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-bold text-slate-900">
                            Standard
                            <span className="text-slate-400 font-normal text-sm ml-1">
                              (Start 6-8 wks)
                            </span>
</span>
<span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                            Base Price
                          </span>
</div>
<p className="text-xs text-slate-500 mt-1">
                          Normal timeline for most projects.
                        </p>
</div>
</label>
<label className="cursor-pointer block">
<input className="peer sr-only" name="timeline" type="radio" value="flexible"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50/20 transition-all">
<div className="flex justify-between items-center">
<span className="font-bold text-slate-900">
                            Flexible
                            <span className="text-slate-400 font-normal text-sm ml-1">
                              (Start 10-12 wks)
                            </span>
</span>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                            -5% Discount
                          </span>
</div>
<p className="text-xs text-slate-500 mt-1">
                          Greater schedule flexibility.
                        </p>
</div>
</label>
</div>
<div className="mt-4 p-3 bg-blue-50 rounded-lg flex gap-3">
<svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-xs text-blue-800 leading-relaxed">
<strong>Note:</strong>
                      Final timelines confirmed after technical visit. We always
                      attach an execution plan to our proposal and service
                      contract.
                    </p>
</div>
<div className="mt-8 flex gap-3">
<button className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors" onclick="nextStep(3)">
                      Back
                    </button>
<button className="flex-1 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" onclick="nextStep(5)">
                      Continue
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="calc-step hidden" id="calc-step-5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">
                      5. Location &amp; Contact
                    </h3>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step 5 of 5
                    </span>
</div>
<div className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Municipality *
                        </label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none">
<option>Albufeira</option>
<option>Lagos</option>
<option>Portimão</option>
<option>Faro</option>
<option>Loulé</option>
<option>Tavira</option>
<option>Other</option>
</select>
<svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Full Address (Optional)
                        </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none" placeholder="Helps with technical visit" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Email *
                        </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Phone/WhatsApp *
                        </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Preferred Contact Method
                      </label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="text-emerald-600 focus:ring-emerald-500" name="contact_pref" type="radio" value="email"/>
<span className="text-sm text-slate-600">Email</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-emerald-600 focus:ring-emerald-500" name="contact_pref" type="radio" value="phone"/>
<span className="text-sm text-slate-600">Phone</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-emerald-600 focus:ring-emerald-500" name="contact_pref" type="radio" value="whatsapp"/>
<span className="text-sm text-slate-600">WhatsApp</span>
</label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Additional Info / Photos (Max 10)
                      </label>
<div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center cursor-pointer hover:bg-slate-100 transition-colors">
<svg className="mx-auto w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-xs text-slate-500 mt-2">
                          Click to upload photos (Max 20MB)
                        </p>
</div>
</div>
<div className="space-y-2 mt-4">
<label className="flex items-start gap-2 cursor-pointer">
<input className="mt-1 text-emerald-600 rounded focus:ring-emerald-500" type="checkbox"/>
<span className="text-xs text-slate-500">
                          I agree to the
                          <a className="underline" href="#">Privacy Policy</a>
                          .
                        </span>
</label>
<label className="flex items-start gap-2 cursor-pointer">
<input checked="" className="mt-1 text-emerald-600 rounded focus:ring-emerald-500" type="checkbox"/>
<span className="text-xs text-slate-500">
                          I authorize RenovAlgarve to contact me regarding this
                          estimate.
                        </span>
</label>
</div>
</div>
<div className="hidden mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center" id="result-box">
<svg className="w-12 h-12 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h4 className="text-xl font-bold text-emerald-900">
                      Request Sent Successfully!
                    </h4>
<p className="text-sm text-emerald-700 mt-2">
                      We have received your project details. A dedicated manager
                      will review your request and send a preliminary estimate
                      within 24 hours.
                    </p>
</div>
<div className="mt-6 flex gap-3" id="submit-actions">
<button className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors" onclick="nextStep(4)">
                      Back
                    </button>
<button className="flex-1 py-3.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 text-lg" onclick="showResult()">
                      Get Detailed Estimate →
                    </button>
</div>
</div>
</div>

</div>
</div>
</div>
</section>
</main>
<footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-1">
<a className="inline-flex items-center gap-2 font-bold text-xl tracking-tight text-white mb-4" href="#">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold">
              R
            </div>
<span>RenovAlgarve</span>
</a>
<p className="text-sm leading-relaxed text-slate-400">
            Premium property transformation in the Algarve. Bringing Belgian
            expertise to your Portuguese dream home.
          </p>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                About Us
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Our Process
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Portfolio
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                Renovation Calculator
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Algarve Guide
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<svg className="mt-1 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>+351 912 345 678</span>
</li>
<li className="flex items-start gap-2">
<svg className="mt-1 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span>hello@renovalgarve.com</span>
</li>
<li className="flex items-start gap-2">
<svg className="mt-1 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Vilamoura, Portugal</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 RenovAlgarve. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-white transition-colors" href="#">
            Cookie Policy
          </a>
</div>
</div>
</footer>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="consultation-modal" role="dialog">
<div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
<button className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10" onclick="closeModal()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="p-6 sm:p-8">
<div className="text-center mb-6">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 mb-4">
<svg className="text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<h3 className="text-2xl font-bold text-slate-900">
                  Schedule Consultation
                </h3>
<p className="text-sm text-slate-600 mt-2">
                  Leave your details and we'll contact you within 24 hours to
                  discuss your project.
                </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal(); alert('Thank you! We will be in touch shortly.');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">
                    Full Name
                  </label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 px-3 border" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 px-3 border" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 px-3 border" id="phone" placeholder="+351 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">
                    Project Details
                  </label>
<textarea className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 px-3 border" id="message" placeholder="Tell us about your property and goals..." rows="3"></textarea>
</div>
<button className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all hover:shadow-lg" type="submit">
                  Request Call Back
                </button>
</form>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
