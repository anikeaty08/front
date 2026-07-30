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
      

<div className="absolute inset-0 bg-black">
<div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`, backgroundSize: `20px 20px`}}></div>
</div>
<div className="relative z-10 container mx-auto max-w-7xl px-4 py-16">

<div className="text-center mb-16">
<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
<span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Simple, transparent pricing</span>
</div>
<h1 className="lg:text-6xl text-4xl font-light text-white tracking-tighter mb-6">
                Choose your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">plan</span>
</h1>
<p className="max-w-2xl leading-relaxed text-md text-gray-400 mx-auto">
                Start free and scale as you grow. All plans include our core AI features with increasing limits and capabilities.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

<div className="linear-gradient-border">
<div className="card-inner p-8 h-full flex flex-col">
<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white">Starter</h3>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-normal text-white">$9</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Perfect for individuals and small projects getting started with AI-powered assistance.
                        </p>
<button className="basic-button w-full py-3 px-4 rounded-xl text-white text-sm font-medium">
                            Start free trial
                        </button>
</div>
<div className="divider mb-6"></div>
<div className="flex-grow">
<h4 className="text-white text-sm font-medium mb-4">What's included:</h4>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">100 AI messages</span>
<p className="text-gray-400 text-xs">Per month with rollover</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">GPT-4 access</span>
<p className="text-gray-400 text-xs">Latest AI models</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">Email support</span>
<p className="text-gray-400 text-xs">48-hour response time</p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="pro-card relative">

<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
<div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg">
                        Most popular
                    </div>
</div>
<div className="card-inner p-8 h-full flex flex-col relative z-2">
<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white">Professional</h3>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-normal text-white">$29</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Advanced features and unlimited access for professionals and growing teams.
                        </p>
<button className="linear-button w-full py-3 px-4 rounded-xl text-white text-sm font-medium relative overflow-hidden">
                            Upgrade to Pro
                        </button>
</div>
<div className="divider mb-6"></div>
<div className="flex-grow">
<h4 className="text-white text-sm font-medium mb-4">Everything in Starter, plus:</h4>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">Unlimited messages</span>
<p className="text-gray-400 text-xs">No monthly limits</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">File uploads</span>
<p className="text-gray-400 text-xs">PDF, Doc, Images up to 25MB</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">API access</span>
<p className="text-gray-400 text-xs">10,000 calls/month</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">Priority support</span>
<p className="text-gray-400 text-xs">24-hour response time</p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="linear-gradient-border">
<div className="card-inner p-8 h-full flex flex-col">
<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white">Enterprise</h3>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-orange-500 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-normal text-white">$99</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Complete enterprise solution with advanced security, compliance, and dedicated support.
                        </p>
<button className="enterprise-button w-full py-3 px-4 rounded-xl text-white text-sm font-medium relative overflow-hidden">
                            Contact sales
                        </button>
</div>
<div className="divider mb-6"></div>
<div className="flex-grow">
<h4 className="text-white text-sm font-medium mb-4">Everything in Pro, plus:</h4>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">Unlimited team members</span>
<p className="text-gray-400 text-xs">Advanced role management</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">SSO & SAML</span>
<p className="text-gray-400 text-xs">Enterprise authentication</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">Advanced analytics</span>
<p className="text-gray-400 text-xs">Usage insights & reporting</p>
</div>
</li>
<li className="flex items-start">
<svg className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<div>
<span className="text-gray-200 text-sm font-medium">99.9% SLA</span>
<p className="text-gray-400 text-xs">Guaranteed uptime</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
