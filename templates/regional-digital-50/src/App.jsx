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



            const checkboxes = document.querySelectorAll('input[type="checkbox"][data-price]');
            const summaryContainer = document.getElementById('selected-services');
            const totalDisplay = document.getElementById('total-price');

            function updateCalculator() {
                let total = 0;
                let html = '';
                
                checkboxes.forEach(box => {
                    if(box.checked) {
                        const price = parseInt(box.dataset.price);
                        total += price;
                        html += `<div class="flex justify-between"><span>${box.dataset.name}</span><span>$${price}</span></div>`;
                    }
                });

                if(html === '') {
                    html = '<p class="italic opacity-60">Pick some items to see the total...</p>';
                }
                
                summaryContainer.innerHTML = html;
                totalDisplay.innerText = '$' + total;
            }

            checkboxes.forEach(box => {
                box.addEventListener('change', updateCalculator);
            });
         


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

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

      function openModal(context = '') {
         const modal = document.getElementById('consultation-modal');
         const contextField = document.getElementById('context-field');
         if(context && contextField) {
             contextField.value = "Enquiry regarding: " + context;
         }
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
          mask: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%);
        }
        /* Adjusted colors to match brand palette (greys/whites) */
        .gradient-blur>div:nth-of-type(1) { z-index: 2; backdrop-filter: blur(1px); mask: linear-gradient(to top, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%); }
        .gradient-blur>div:nth-of-type(2) { z-index: 3; backdrop-filter: blur(2px); mask: linear-gradient(to top, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%); }
        .gradient-blur>div:nth-of-type(3) { z-index: 4; backdrop-filter: blur(4px); mask: linear-gradient(to top, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%); }
        .gradient-blur>div:nth-of-type(4) { z-index: 5; backdrop-filter: blur(8px); mask: linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%); }
        .gradient-blur>div:nth-of-type(5) { z-index: 6; backdrop-filter: blur(16px); mask: linear-gradient(to top, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%); }
        .gradient-blur>div:nth-of-type(6) { z-index: 7; backdrop-filter: blur(32px); mask: linear-gradient(to top, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%); }
        .gradient-blur::after { content: ""; z-index: 8; backdrop-filter: blur(64px); mask: linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%); }
      </style>
</div>

<header className="fixed top-0 left-0 right-0 z-50 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll bg-[#f4f3f0]/90 backdrop-blur-md border-b border-[#3d3b3a]/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 font-semibold text-xl tracking-tight text-[#3d3b3a]" href="#">
<div className="h-10 w-auto flex items-center">
<span className="font-semibold text-2xl tracking-tighter uppercase">Digital</span>
<span className="ml-1 font-light text-2xl tracking-tight opacity-80">Accomplice</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#3d3b3a] font-semibold transition-colors" href="#audits">
            Audits
          </a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] transition-colors font-medium" href="#quick-fixes">
            Quick Fixes
          </a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] transition-colors font-medium" href="#ai-automation">
            AI Automations
          </a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] transition-colors font-medium" href="#about">
            About
          </a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] transition-colors font-medium" href="#blog">
            Blog
          </a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-[#3d3b3a] text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-xl hover:shadow-[#3d3b3a]/20 hover:-translate-y-0.5" onclick="openModal('Audit Request')">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
            Send an Enquiry
          </button>
</div>
<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors text-[#3d3b3a]" id="hamburger">
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

<div className="md:hidden hidden bg-[#f4f3f0] border-b border-[#3d3b3a]/5" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 pb-6 pt-2">
<nav className="flex flex-col space-y-4">
<a className="text-sm text-[#3d3b3a] font-semibold" href="#audits">Audits (Start Here)</a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] font-medium" href="#quick-fixes">Quick Fixes</a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] font-medium" href="#ai-automation">AI Automations</a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] font-medium" href="#about">About</a>
<a className="text-sm text-[#737373] hover:text-[#3d3b3a] font-medium" href="#blog">Blog</a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3d3b3a] text-white px-5 py-3 text-sm font-medium" href="#contact" onclick="openModal('Enquiry')">
                Email Me
              </a>
</nav>
</div>
</div>
</header>
<main className="">

<section className="relative overflow-hidden pt-32 pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#3d3b3a]/10 mb-6 text-xs font-semibold uppercase tracking-wider text-[#737373]">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Regional QLD Support
              </div>
<h1 className="sm:text-5xl lg:text-7xl leading-[1.05] text-4xl font-semibold text-[#3d3b3a] tracking-tighter">
                PRACTICAL
                <span className="inline-block relative z-10">
                   DIGITAL
                   <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#737373]/20 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
                SUPPORT.
              </h1>
<div className="mt-6 max-w-xl [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<p className="text-base sm:text-lg text-[#737373]">
                  Practical digital and AI support for Central Queensland businesses. From a simple audit to automated systems that help you run things smoothly, I help you figure out what to fix and how to fix it.
                </p>
<p className="mt-3 text-base sm:text-lg text-[#737373] font-medium">
                  Start with an audit, then we fix the rest.
                </p>
</div>

<div className="mt-8 flex flex-col md:flex-row gap-4 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#3d3b3a] text-white px-5 py-3.5 text-sm font-medium transition-all hover:shadow-xl hover:shadow-[#3d3b3a]/20 hover:-translate-y-0.5 text-center" href="#audits">
                  Request an Audit
                </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#3d3b3a] border border-[#3d3b3a]/10 px-5 py-3.5 text-sm font-medium transition-all hover:bg-gray-50 hover:border-[#3d3b3a]/30 text-center" href="#quick-fixes">
                  See Quick Fixes
                </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#3d3b3a] border border-[#3d3b3a]/10 px-5 py-3.5 text-sm font-medium transition-all hover:bg-gray-50 hover:border-[#3d3b3a]/30 text-center" href="#ai-automation">
                  Explore AI Automations
                </a>
</div>
</div>

<div className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="relative">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#737373]/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3d3b3a]/5 rounded-full blur-2xl"></div>

<img alt="Workspace" className="hero-image-filter relative z-10 rounded-3xl shadow-2xl shadow-[#3d3b3a]/10 border border-white/50 aspect-[4/5] object-cover" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 -left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#f4f3f0] flex items-center justify-center text-[#3d3b3a]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div>
<div className="text-xs text-[#737373]">Practical</div>
<div className="text-sm font-semibold text-[#3d3b3a]">Local Support</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#3d3b3a]/5 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f4f3f0] flex items-center justify-center text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div>
<h3 className="font-semibold text-[#3d3b3a] text-lg">Standard Delivery</h3>
<p className="text-sm text-[#737373]">Most work is delivered within 5–7 business days.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f4f3f0] flex items-center justify-center text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-[#3d3b3a] text-lg">Local to CQ</h3>
<p className="text-sm text-[#737373]">I live here and understand the challenges of regional business.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f4f3f0] flex items-center justify-center text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<div>
<h3 className="font-semibold text-[#3d3b3a] text-lg">Flexible Support</h3>
<p className="text-sm text-[#737373]">Start with an audit. From there, you can choose one-off fixes or ongoing support if needed.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="audits">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<span className="text-[#737373] font-semibold tracking-wider text-xs uppercase mb-2 block">Step 1: The Diagnosis</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#3d3b3a] tracking-tight mb-4">Audits (Start Here)</h2>
<p className="text-lg text-[#737373]">
                    Don't spend money fixing the wrong things. I'll check what's actually broken and give you a simple list of priority fixes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-3xl border border-[#3d3b3a]/10 p-8 hover:shadow-xl hover:shadow-[#3d3b3a]/5 hover:border-[#3d3b3a]/20 transition-all bg-[#f4f3f0]/30">
<div className="w-12 h-12 rounded-xl bg-white border border-[#3d3b3a]/5 flex items-center justify-center mb-6 text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-[#3d3b3a] mb-2">Digital Presence Audit</h3>
<p className="text-sm text-[#737373] mb-6 min-h-[40px]">For businesses that feel invisible online.</p>
<div className="space-y-4 mb-8">
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">What I check:</span>
<ul className="mt-2 space-y-2 text-sm text-[#737373]">
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Google Business Profile status</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Name/Address consistency</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Search visibility gaps</li>
</ul>
</div>
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">You get:</span>
<p className="mt-1 text-sm text-[#737373]">A short summary + priority action list.</p>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-[#3d3b3a]/20 text-[#3d3b3a] font-medium hover:bg-[#3d3b3a] hover:text-white transition-colors" onclick="openModal('Digital Presence Audit')">Request Audit</button>
</div>

<div className="group rounded-3xl border border-[#3d3b3a]/10 p-8 hover:shadow-xl hover:shadow-[#3d3b3a]/5 hover:border-[#3d3b3a]/20 transition-all bg-[#f4f3f0]/30">
<div className="w-12 h-12 rounded-xl bg-white border border-[#3d3b3a]/5 flex items-center justify-center mb-6 text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-[#3d3b3a] mb-2">Clarity &amp; Conversion</h3>
<p className="text-sm text-[#737373] mb-6 min-h-[40px]">For websites that get visitors but no phone calls.</p>
<div className="space-y-4 mb-8">
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">What I check:</span>
<ul className="mt-2 space-y-2 text-sm text-[#737373]">
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Mobile load speed &amp; usability</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Contact form pathways</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Trust factors (hours, location)</li>
</ul>
</div>
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">You get:</span>
<p className="mt-1 text-sm text-[#737373]">List of fixes + structure tweaks.</p>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-[#3d3b3a]/20 text-[#3d3b3a] font-medium hover:bg-[#3d3b3a] hover:text-white transition-colors" onclick="openModal('Clarity Audit')">Request Audit</button>
</div>

<div className="group rounded-3xl border border-[#3d3b3a]/10 p-8 hover:shadow-xl hover:shadow-[#3d3b3a]/5 hover:border-[#3d3b3a]/20 transition-all bg-[#f4f3f0]/30">
<div className="w-12 h-12 rounded-xl bg-white border border-[#3d3b3a]/5 flex items-center justify-center mb-6 text-[#3d3b3a]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-[#3d3b3a] mb-2">Automation Readiness</h3>
<p className="text-sm text-[#737373] mb-6 min-h-[40px]">For busy teams drowning in admin.</p>
<div className="space-y-4 mb-8">
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">What I check:</span>
<ul className="mt-2 space-y-2 text-sm text-[#737373]">
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Where enquiries get lost</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Current tools (email/calendar)</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Low-risk automation opportunities</li>
</ul>
</div>
<div>
<span className="text-xs font-semibold text-[#3d3b3a] uppercase tracking-wide">You get:</span>
<p className="mt-1 text-sm text-[#737373]">"What to automate first" shortlist.</p>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-[#3d3b3a]/20 text-[#3d3b3a] font-medium hover:bg-[#3d3b3a] hover:text-white transition-colors" onclick="openModal('Automation Audit')">Request Audit</button>
</div>
</div>
<div className="mt-16 text-center">
<div className="inline-flex flex-col items-center bg-[#f4f3f0] p-8 rounded-2xl border border-[#3d3b3a]/5">
<h4 className="text-xl font-semibold text-[#3d3b3a] mb-2">Ready to start?</h4>
<p className="text-[#737373] mb-6 text-sm">Local to Central Queensland. Practical fixes, no fuss.</p>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3d3b3a] text-white px-8 py-3 text-sm font-medium transition-all hover:shadow-xl hover:shadow-[#3d3b3a]/20 hover:-translate-y-0.5" onclick="openModal('Audit Request')">
                        Request an Audit
                     </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f3f0] relative" id="price-calculator">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#737373] font-semibold tracking-wider text-xs uppercase mb-2 block">Step 2: The Fixes</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#3d3b3a] tracking-tight mb-4">Quick Digital Fixes</h2>
<p className="text-[#737373]">
                   After the audit, we tackle the quick wins. These are fixed-scope improvements to get your digital presence sorted. Tick the boxes to see what common jobs cost.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

<div className="lg:col-span-8">
<div className="bg-white rounded-3xl shadow-xl shadow-[#3d3b3a]/5 border border-[#3d3b3a]/5 overflow-hidden">
<div className="p-8 border-b border-[#3d3b3a]/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="text-xl font-semibold text-[#3d3b3a]">Common Fixes</h3>
<p className="text-sm text-[#737373]">Build your own package.</p>
</div>
</div>
<form className="p-8 space-y-4" id="service-form">

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="One-Page Website" data-price="299" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">One-Page Website</div>
<div className="text-xs text-[#737373]">A professional landing page to get you online properly.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$299</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Website Speed &amp; Mobile Fix" data-price="199" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Website Speed &amp; Mobile Fix</div>
<div className="text-xs text-[#737373]">Make your site load faster and look good on phones.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$199</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Basic Local SEO Presence" data-price="199" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Basic Local SEO Presence</div>
<div className="text-xs text-[#737373]">Help locals find you when they search online.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$199</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Google Business Profile" data-price="149" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Google Business Profile Setup</div>
<div className="text-xs text-[#737373]">Claim and clean up your map listing.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$149</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Facebook Page Cleanup" data-price="149" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Facebook Page Cleanup</div>
<div className="text-xs text-[#737373]">Make your social page look professional.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$149</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Domain &amp; Hosting Setup" data-price="99" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Domain &amp; Hosting Setup</div>
<div className="text-xs text-[#737373]">Secure your website name and server space.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$99</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Professional Email Setup" data-price="99" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Professional Email Setup</div>
<div className="text-xs text-[#737373]">Look pro with a real business email address.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$99</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="Contact &amp; Enquiry Fix" data-price="99" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">Contact &amp; Enquiry Fix</div>
<div className="text-xs text-[#737373]">Ensure your website forms actually send emails to you.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$99</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#3d3b3a]/10 hover:border-[#3d3b3a]/30 hover:bg-[#f4f3f0]/50 cursor-pointer transition-all group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 rounded border-gray-300 text-[#3d3b3a] focus:ring-[#3d3b3a]" data-name="HTTPS / Security Fix" data-price="99" type="checkbox"/>
<div>
<div className="font-semibold text-[#3d3b3a]">HTTPS / Security Fix</div>
<div className="text-xs text-[#737373]">Get rid of that "Not Secure" warning in the browser.</div>
</div>
</div>
<div className="font-mono font-semibold text-[#3d3b3a]">$99</div>
</label>
</form>
</div>
</div>

<div className="lg:col-span-4 sticky top-24">
<div className="bg-[#3d3b3a] text-white rounded-3xl p-8 shadow-2xl shadow-[#3d3b3a]/20">
<h3 className="text-xl font-semibold mb-6">Estimate</h3>
<div className="space-y-3 mb-6 min-h-[50px] text-sm text-gray-300" id="selected-services">
<p className="italic opacity-60">Pick some items to see the total...</p>
</div>
<div className="border-t border-white/10 pt-4 mb-8">
<div className="flex justify-between items-end">
<span className="text-gray-400 font-medium">Total</span>
<span className="text-3xl font-semibold" id="total-price">$0</span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-white text-[#3d3b3a] font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" onclick="openModal('From Calculator')">
                            Send Enquiry
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
<p className="text-xs text-center text-gray-400 mt-4">No payment needed now. Just starting the conversation.</p>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-[#3d3b3a] text-white relative overflow-hidden" id="ai-automation">

<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#737373]/20 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#f4f3f0]/5 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-16 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<span className="text-[#737373] font-semibold tracking-widest text-xs uppercase mb-2 block">Step 3: AI Automations</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Don't let leads slip away.</h2>
<p className="text-lg text-gray-300">
                    We can set up simple AI tools to handle the admin and enquiry load. They reply instantly to customers, so you don't miss out on work.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">

<div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-[#f4f3f0]/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#3d3b3a] transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Instant Lead Reply</h3>
<p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        If you take too long to reply, customers go elsewhere. This system texts or calls new enquiries within 5 minutes to lock them in.
                    </p>
<ul className="space-y-2 mb-6 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Catch customers while they are interested
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Stops phone tag
                        </li>
</ul>
<button className="text-sm font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors" onclick="openModal('Instant Lead Reply')">Ask about this →</button>
</div>

<div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-[#f4f3f0]/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#3d3b3a] transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-3">24/7 Booking Agent</h3>
<p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        Fill up your calendar while you sleep. An automated agent on WhatsApp or SMS checks your diary and books appointments for you.
                    </p>
<ul className="space-y-2 mb-6 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Save hours of admin time
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Get more bookings automatically
                        </li>
</ul>
<button className="text-sm font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors" onclick="openModal('Booking Agent')">Ask about this →</button>
</div>

<div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-[#f4f3f0]/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#3d3b3a] transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Social Media Helper</h3>
<p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        Automatically answers the common questions in your Instagram and Facebook DMs, like "Price?" or "Opening Hours?", so you don't have to constantly check your phone.
                    </p>
<ul className="space-y-2 mb-6 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Instant replies to customers
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Focus on your work, not messaging
                        </li>
</ul>
<button className="text-sm font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors" onclick="openModal('Social Media Helper')">Ask about this →</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#3d3b3a]/5" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">

<div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#3d3b3a]/10">
<img alt="Ange Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://placehold.co/800x1000/ffdee2/3d3b3a?text=Ange+Profile+Photo"/>
</div>
</div>
<div className="w-full md:w-2/3 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll">
<h2 className="text-3xl font-semibold text-[#3d3b3a] mb-6">Hi, I'm Ange.</h2>
<div className="space-y-4 text-lg text-[#737373] leading-relaxed">
<p>
                              I started Digital Accomplice because I saw a real problem here in Central Queensland. We have amazing small business owners who are great at their trade, but the digital side of things often gets put in the "too hard" basket.
                          </p>
<p>
                              You don't need a big agency. You just need someone to check what's going on (an audit), fix the basics, and maybe set up some systems to save you time.
                          </p>
<p>
                              Start with an audit. From there, you can choose one-off fixes or ongoing support if needed. Let's just get it sorted.
                          </p>
</div>
<div className="mt-8 pt-8 border-t border-[#3d3b3a]/10">
<button className="inline-flex items-center gap-2 text-[#3d3b3a] font-semibold border-b-2 border-[#3d3b3a] pb-1 hover:text-[#737373] hover:border-[#737373] transition-colors" onclick="openModal('About Section')">
                              Send me an enquiry
                              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#3d3b3a] text-gray-300 py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-1">
<a className="inline-flex items-center gap-2 font-semibold text-xl tracking-tight text-white mb-4 uppercase" href="#">
            Digital Accomplice
          </a>
<p className="text-sm leading-relaxed text-gray-400 mb-6">
            Practical digital support and AI automation for Regional Queensland small businesses.
          </p>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all text-gray-400" href="https://www.facebook.com/digitalaccompliceaustralia" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>

<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all text-gray-400" href="https://www.linkedin.com/in/digitalaccompliceaustralia" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#audits">Digital Audits</a></li>
<li><a className="hover:text-white transition-colors" href="#quick-fixes">Quick Digital Fixes</a></li>
<li><a className="hover:text-white transition-colors" href="#ai-automation">AI Automations</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Flexible Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="mt-1 text-[#737373]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span>ange@digitalaccomplice.com.au</span>
</li>
<li className="flex items-start gap-2">
<svg className="mt-1 text-[#737373]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Central Queensland, Australia</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2024 Digital Accomplice. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="consultation-modal" role="dialog">
<div className="fixed inset-0 bg-[#3d3b3a]/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
<button className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10" onclick="closeModal()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="p-6 sm:p-8">
<div className="text-center mb-6">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f3f0] text-[#3d3b3a] mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-[#3d3b3a]">Send an Enquiry</h3>
<p className="text-sm text-[#737373] mt-2">
                  Tell me what you need fixed. I'll get back to you via email shortly.
                </p>
</div>
<form action="mailto:ange@digitalaccomplice.com.au" className="space-y-4" enctype="text/plain" method="post">
<input id="context-field" name="context" type="hidden"/>
<div>
<label className="block text-xs font-medium text-[#737373] mb-1" htmlFor="name">Full Name</label>
<input className="w-full rounded-lg border-gray-200 focus:border-[#3d3b3a] focus:ring-[#3d3b3a] text-sm py-2.5 px-3 border bg-[#f4f3f0]" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#737373] mb-1" htmlFor="service-type">What do you need?</label>
<select className="w-full rounded-lg border-gray-200 focus:border-[#3d3b3a] focus:ring-[#3d3b3a] text-sm py-2.5 px-3 border bg-[#f4f3f0]" id="service-type" name="service-type">
<option value="Audit">Audit (Start Here)</option>
<option value="Quick Fix">Quick Digital Fix</option>
<option value="Automation">AI Automation</option>
<option value="Not Sure">Not Sure</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-[#737373] mb-1" htmlFor="email">Email Address</label>
<input className="w-full rounded-lg border-gray-200 focus:border-[#3d3b3a] focus:ring-[#3d3b3a] text-sm py-2.5 px-3 border bg-[#f4f3f0]" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#737373] mb-1" htmlFor="message">Message (Optional)</label>
<textarea className="w-full rounded-lg border-gray-200 focus:border-[#3d3b3a] focus:ring-[#3d3b3a] text-sm py-2.5 px-3 border bg-[#f4f3f0]" id="message" name="message" placeholder="e.g. I need my Google Business Profile setup..." rows="3"></textarea>
</div>
<button className="w-full rounded-full bg-[#3d3b3a] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2c2a29] transition-all hover:shadow-lg" type="submit">
                  Send Message
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
