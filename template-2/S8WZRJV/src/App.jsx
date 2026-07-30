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
    document.getElementById('year').textContent = new Date().getFullYear();
    // Fade-in animation
    document.querySelectorAll('[class*="animate-fade-in"]').forEach(el => {
      el.style.opacity = 1;
      el.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1)';
    });
  
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
      

<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800/70 to-transparent my-0"></div>
<footer className="pt-14 pb-8 px-4 sm:px-8 lg:px-16 relative bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent z-20">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

<div className="flex-1 min-w-[240px] max-w-md mb-8 lg:mb-0">
<a className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight font-satoshi text-white hover:text-brand-400 transition-colors duration-300 mb-5" href="#">
<i className="w-7 h-7 text-brand-500" data-lucide="layers"></i>
          FlowSync
        </a>
<p className="mt-3 text-gray-400 text-base leading-relaxed mb-7">
          Accelerate your team’s workflow. Seamlessly connect, automate, and monitor your workspace tools from one powerful hub.
        </p>
<form className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-200">
<div className="relative w-full">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" data-lucide="mail"></i>
<input className="w-full py-2.5 pr-4 pl-11 rounded-lg border border-gray-700/60 bg-gray-900/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-sm" placeholder="Your email" required type="email" />
</div>
<button className="px-4 py-2.5 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-700 rounded-lg font-semibold text-white text-sm flex items-center gap-1 transition duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-lg group" type="submit">
<span>Subscribe</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" data-lucide="arrow-right"></i>
</button>
</form>
<span className="block mt-2 text-xs text-gray-500">No spam. Unsubscribe anytime.</span>
</div>

<div className="flex-1 flex flex-col sm:flex-row gap-10 lg:gap-16 justify-between">

<div>
<h4 className="text-white font-semibold mb-4 tracking-tight text-base flex items-center gap-1">
<i className="w-4 h-4 text-brand-400" data-lucide="grid"></i>
            Product
          </h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4 text-brand-400" data-lucide="zap"></i>
                Automation Hub
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4 text-blue-400" data-lucide="layers"></i>
                Integrations
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4 text-purple-400" data-lucide="bar-chart"></i>
                Analytics
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4 text-green-400" data-lucide="shield"></i>
                Security
              </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4 tracking-tight text-base flex items-center gap-1">
<i className="w-4 h-4 text-blue-400" data-lucide="book-open"></i>
            Resources
          </h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
                Documentation
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="help-circle"></i>
                Help Center
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail"></i>
                Contact Support
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="megaphone"></i>
                Blog
              </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4 tracking-tight text-base flex items-center gap-1">
<i className="w-4 h-4 text-purple-400" data-lucide="building-2"></i>
            Company
          </h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                About Us
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="briefcase"></i>
                Careers
                <span className="ml-1 px-2 py-0.5 bg-green-700/60 text-xs text-white rounded-full font-medium">Hiring</span>
</a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="award"></i>
                Press
              </a>
</li>
<li>
<a className="hover:text-white hover:underline flex items-center gap-2 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="credit-card"></i>
                Pricing
              </a>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent"></div>

<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-1">
<div className="flex items-center gap-2 text-xs text-gray-500">
<span>© <span id="year"></span> FlowSync Technologies Inc.</span>
<span className="hidden sm:inline">•</span>
<a className="hover:underline hover:text-gray-300" href="#">Privacy Policy</a>
<span className="hidden sm:inline">•</span>
<a className="hover:underline hover:text-gray-300" href="#">Terms of Service</a>
<span className="hidden sm:inline">•</span>
<a className="hover:underline hover:text-gray-300" href="#">Status</a>
</div>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="p-2 rounded-lg bg-gray-800/60 hover:bg-brand-600 group transition duration-300" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-white" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="p-2 rounded-lg bg-gray-800/60 hover:bg-blue-600 group transition duration-300" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-white" data-lucide="github"></i>
</a>
<a aria-label="Slack" className="p-2 rounded-lg bg-gray-800/60 hover:bg-green-600 group transition duration-300" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-white" data-lucide="slack"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-lg bg-gray-800/60 hover:bg-purple-600 group transition duration-300" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-white" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
