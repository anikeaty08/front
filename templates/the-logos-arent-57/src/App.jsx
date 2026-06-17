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
      

<header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">

<div className="relative">
<div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#2563EB] opacity-20 blur group-hover:opacity-40 transition duration-200"></div>
<img alt="ClearSet.AI Icon" className="relative h-9 w-9 rounded-lg object-contain bg-white ring-1 ring-gray-100" src="https://placehold.co/100x100/ffffff/00C9A7?text=CS"/>
</div>
<span className="text-xl font-semibold tracking-tight text-[#1A2E4C]">
            ClearSet.AI
          </span>
</a>
<span className="inline-flex items-center rounded-full bg-[#00C9A7]/10 px-3 py-1 text-xs font-medium text-[#00BFA5] ring-1 ring-inset ring-[#00C9A7]/20">
          Coming Soon
        </span>
</div>
</header>
<main>

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1A2E4C] mb-8">
            AI Built To Grow
            <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#00BFA5] to-[#2563EB]">
              With You.
            </span>
</h1>
<p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We are currently building a new digital experience. ClearSet.AI
            transforms organizations into data-driven identities through
            automated workflows and advanced intelligence.
          </p>

<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-400 group-focus-within:text-[#00C9A7] transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="block w-full pl-10 pr-3 py-3 text-base border-0 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00C9A7] rounded-lg bg-white shadow-sm transition-all duration-200" placeholder="Enter your email for updates" required="" type="email"/>
</div>
<button className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#1A2E4C] hover:bg-[#14243C] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A2E4C] transition-all duration-200 w-full sm:w-auto" type="button">
              Notify Me
            </button>
</form>
<p className="mt-5 text-sm text-gray-400 font-light">
            We respect your data. No spam.
          </p>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#00C9A7] blur-[100px] animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute top-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-200 blur-[100px]"></div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center">
<div className="mb-8 p-4 bg-blue-50/50 rounded-full ring-1 ring-blue-100">
<i className="w-6 h-6 text-[#1A2E4C] fill-[#1A2E4C]/10" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<blockquote className="text-xl md:text-2xl font-normal leading-relaxed text-[#1A2E4C] tracking-tight">
              “Turning organizations into data-driven identities. We automate
              your workflow into an AI-driven system. We're designing not just
              solutions but a new identity. We design your SLOps (systems
              lifecycle operations) into an emotional, business, and now
              technical revolution.”
            </blockquote>
<div className="mt-10 flex items-center justify-center gap-4">
<div className="h-px w-10 bg-gray-200"></div>
<div className="flex flex-col items-center">
<cite className="not-italic text-lg font-semibold text-[#00C9A7]">
                  Yasmine Gardiner
                </cite>
<span className="text-gray-400 text-sm font-light">
                  Founder, ClearSet.AI
                </span>
</div>
<div className="h-px w-10 bg-gray-200"></div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-medium tracking-tight text-[#1A2E4C]">
            Our Expertise
          </h2>
<p className="mt-4 text-lg text-gray-500 font-light">
            Comprehensive AI solutions tailored for your growth.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Machine Learning &amp; MLOps
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              End-to-end ML lifecycle management and scalable model deployment.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="scan-face" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Computer Vision
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Advanced image processing and visual data interpretation systems.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="message-square-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Natural Language Processing
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Language modeling and semantic analysis to unlock textual data
              value.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Data Analysis &amp; Visualization
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Transforming raw metrics into actionable, visual business
              insights.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Data Validation
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Ensuring integrity, accuracy, and consistency across your data
              pipelines.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              AI Consulting
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Strategic guidance to integrate artificial intelligence into your
              core business.
            </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-[#00C9A7]/30 hover:shadow-xl hover:shadow-[#00C9A7]/5 transition-all duration-300 md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">

<i className="w-6 h-6 text-[#1A2E4C] group-hover:text-[#00C9A7] transition-colors" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1A2E4C] mb-3 tracking-tight">
              Agentic AI
            </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
              Autonomous agents designed to perform complex tasks and decision
              making.
            </p>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-100 py-16">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
<img alt="ClearSet.AI Logo" className="h-8 w-8 rounded-md object-contain" src="https://placehold.co/100x100/ffffff/00C9A7?text=CS"/>
<span className="text-lg font-semibold tracking-tight text-[#1A2E4C]">
            ClearSet.AI
          </span>
</div>
<div className="text-gray-400 text-sm font-light">
          © 2024 ClearSet.AI. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#00C9A7] transition-colors" href="https://www.linkedin.com/company/clearset-ai">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
