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



      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            borderRadius: {
              xl2: "1.5rem",
            },
          },
        },
      };
    


      lucide.createIcons();
    
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
      
<main className="relative">
<section className="relative max-w-7xl sm:px-6 lg:px-8 sm:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="text-center mb-16 sm:mb-20">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
<span className="text-7xl font-normal text-red-500 tracking-tight font-instrument-serif">Choose Your</span><br/>
<span className="text-8xl font-normal text-black tracking-tight font-instrument-serif">Creative Journey</span>
</h1>
<p className="sm:text-lg max-w-3xl text-base text-neutral-600 mr-auto ml-auto">
            From indie creators to enterprise teams, we've crafted the perfect plan for every stage of your design evolution
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

<article className="relative hover:border-red-500 transition-all duration-300 lg:p-10 flex flex-col bg-white border-neutral-200 border-2 rounded-xl2 pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-palette w-5 h-5 text-red-500" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Creative</span>
</div>
<span className="text-xs font-medium uppercase bg-red-50 border border-red-200 rounded-full px-3 py-1 text-red-600">
                Perfect Start
              </span>
</div>
<div className="mb-8">
<h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Individual Creators</h2>
<p className="text-neutral-600 text-sm">
                Everything you need to launch your creative projects
              </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-bold tracking-tight">$79</span>
<span className="text-neutral-500 mb-1">/month</span>
</div>
<p className="text-xs text-neutral-500">Billed monthly • Cancel anytime</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<button className="w-full rounded-full bg-red-500 text-white px-6 py-3 text-sm font-semibold hover:bg-red-600 transition-all duration-200">
                Start Creating
              </button>
<button className="w-full rounded-full border-2 border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200">
                Learn More
              </button>
</div>
<hr className="border-neutral-200 mb-8"/>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className=""><strong>Brand Identity</strong> - Logo, colors, typography</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className=""><strong>Website</strong> - 5 pages, mobile-optimized</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className=""><strong>Social Media Kit</strong> - 10 custom templates</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Email Support</strong> - Response within 24 hours</span>
</li>
</ul>
</article>

<article className="relative rounded-xl2 bg-black text-white border-2 border-black transition-all duration-300 p-8 lg:p-10 flex flex-col scale-105 lg:scale-110 z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="bg-red-500 text-white text-xs font-bold uppercase px-4 py-2 rounded-full">
                Most Popular
              </div>
</div>
<div className="flex justify-between items-start mb-8 mt-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-rocket w-5 h-5 text-red-500" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-sm font-semibold uppercase tracking-wide text-neutral-400">Professional</span>
</div>
</div>
<div className="mb-8">
<h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Growing Businesses</h2>
<p className="text-neutral-300 text-sm">
                Scale your brand with comprehensive design systems
              </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-bold tracking-tight">$199</span>
<span className="text-neutral-400 mb-1">/month</span>
</div>
<p className="text-xs text-neutral-400">Billed monthly • 2 months free yearly</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<button className="w-full rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-neutral-100 transition-all duration-200">
                Scale Your Brand
              </button>
<button className="w-full rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-200">
                Book Demo
              </button>
</div>
<hr className="border-neutral-700 mb-8"/>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className=""><strong>Brand Strategy</strong> - Market research &amp; positioning</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Web Experience</strong> - 15 pages + e-commerce</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>UI/UX Design</strong> - App or web application</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Marketing Materials</strong> - Brochures, presentations</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Priority Support</strong> - Slack + video calls</span>
</li>
</ul>
</article>

<article className="relative hover:border-red-500 transition-all duration-300 lg:p-10 flex flex-col lg:col-span-2 xl:col-span-1 bg-white border-neutral-200 border-2 rounded-xl2 pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-building-2 w-5 h-5 text-red-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Enterprise</span>
</div>
<span className="text-xs font-medium uppercase bg-neutral-100 border border-neutral-300 rounded-full px-3 py-1 text-neutral-700">
                Custom
              </span>
</div>
<div className="mb-8">
<h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Large Teams</h2>
<p className="text-sm text-neutral-600">
                Dedicated design team with unlimited creative capacity
              </p>
</div>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl lg:text-5xl font-bold tracking-tight text-black">Custom</span>
</div>
<p className="text-xs text-neutral-500">Tailored pricing based on your needs</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<button className="w-full rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition-all duration-200">
                Get Custom Quote
              </button>
<button className="w-full rounded-full border-2 border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200">
                Enterprise Demo
              </button>
</div>
<hr className="border-neutral-200 mb-8"/>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Dedicated Team</strong> - 3-5 senior designers</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>Enterprise System</strong> - Multi-brand management</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>White-label Solutions</strong> - Custom portals</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span><strong>24/7 Support</strong> - Dedicated account manager</span>
</li>
</ul>
</article>
</div>

<div className="mt-16 sm:mt-20 text-center">
<p className="text-sm text-neutral-500 mb-8">Trusted by 2,500+ creative professionals worldwide</p>
<div className="flex items-center justify-center gap-8 opacity-60">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">SSL Secured</span>
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-sm">24/7 Support</span>
<svg className="lucide lucide-refresh-cw w-6 h-6" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<span className="text-sm">Cancel Anytime</span>
</div>
</div>
</section>
</main>


    </>
  );
}
