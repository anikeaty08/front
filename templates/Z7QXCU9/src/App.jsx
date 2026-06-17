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
      
<section className="relative w-full max-w-5xl mx-auto bg-gradient-to-b from-[#172554]/90 via-[#13151A]/95 to-[#090A0D]/95 border border-[#24304b] rounded-2xl shadow-2xl ring-glow shine overflow-hidden py-14 px-6 md:px-14 z-10">
<div className="absolute top-0 left-0 w-full h-1.5 gradient-bar"></div>
<div className="relative z-10">
<div className="flex flex-col items-center mb-10">
<span className="inline-flex items-center px-3 py-1 bg-blue-700/10 text-blue-400 font-semibold text-xs rounded-full mb-4 pulse-animation">
<svg className="w-3 h-3 mr-1.5" fill="currentColor" viewbox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>
          PRICING
        </span>
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 text-center drop-shadow-lg mb-4">
          Choose the right plan for your team
        </h2>
<p className="text-base md:text-lg text-slate-300 text-center max-w-2xl">
          Simple, transparent pricing. No hidden fees. Upgrade or downgrade anytime.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

<div className="flex flex-col bg-[#151725]/80 border border-[#223] rounded-xl shadow-lg ring-glow px-8 py-8 relative">
<h3 className="text-lg font-semibold text-slate-100 mb-2">Starter</h3>
<div className="flex items-end mb-4">
<span className="text-3xl font-extrabold text-slate-100">$0</span>
<span className="text-slate-400 ml-1 mb-1 text-sm">/mo</span>
</div>
<p className="text-slate-400 text-sm mb-6">For individuals and small teams starting out.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Up to 3 users
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Unlimited tasks
            </li>
<li className="flex items-center text-sm text-slate-400">
<svg className="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Basic integrations
            </li>
</ul>
<a className="mt-auto block px-5 py-2.5 bg-[#22243a] hover:bg-[#28304c] text-blue-200 font-medium rounded-lg border border-blue-800/30 text-base transition-all duration-150 text-center" href="#">
            Get Started
          </a>
</div>

<div className="flex flex-col bg-[#1f2336]/90 border-2 border-blue-700/40 rounded-xl shadow-xl ring-glow px-8 py-10 relative z-20">
<div className="absolute -top-6 left-1/2 -translate-x-1/2">
<span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg ring-2 ring-blue-400/30 uppercase tracking-widest">Most Popular</span>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2 mt-4 text-center">Pro</h3>
<div className="flex items-end justify-center mb-4">
<span className="text-4xl font-extrabold text-blue-300">$12</span>
<span className="text-slate-400 ml-1 mb-1 text-sm">/user/mo</span>
</div>
<p className="text-slate-400 text-sm text-center mb-6">Best for growing teams that need more power.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Unlimited users
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Advanced integrations
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Priority support
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Team analytics
            </li>
</ul>
<a className="mt-auto block px-5 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-700 hover:to-indigo-500 text-white font-bold rounded-lg text-base shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 text-center" href="#">
            Start Pro Trial
          </a>
</div>

<div className="flex flex-col bg-[#151725]/80 border border-[#223] rounded-xl shadow-lg ring-glow px-8 py-8 relative">
<h3 className="text-lg font-semibold text-slate-100 mb-2">Enterprise</h3>
<div className="flex items-end mb-4">
<span className="text-3xl font-extrabold text-slate-100">Custom</span>
</div>
<p className="text-slate-400 text-sm mb-6">Tailored solutions and premium support for large orgs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Everything in Pro
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              SSO &amp; advanced security
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              Dedicated manager
            </li>
<li className="flex items-center text-sm text-slate-200">
<svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
              99.9% uptime SLA
            </li>
</ul>
<a className="mt-auto block px-5 py-2.5 bg-[#22243a] hover:bg-[#28304c] text-blue-200 font-medium rounded-lg border border-blue-800/30 text-base transition-all duration-150 text-center" href="#">
            Contact Sales
          </a>
</div>
</div>
<div className="mt-10 flex flex-col items-center text-xs text-slate-400">
<span className="flex items-center mb-2">
<svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          14-day free trial on Pro. No credit card required.
        </span>
<span>
          Need a custom plan? <a className="text-blue-300 underline hover:text-blue-400" href="#">Let's talk</a>
</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 gradient-bar"></div>
</section>

    </>
  );
}
