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
      
<div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
<p className="mt-2 text-4xl md:text-5xl font-light tracking-tight">Everything you need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">create amazing</span> projects</p>
<p className="mt-5 text-xl text-gray-400">Our platform provides all the tools you need to build, deploy, and scale your applications with confidence.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Lightning Fast Performance</h3>
<p className="text-gray-400">Optimized infrastructure ensures your applications load quickly and run smoothly, even under heavy traffic.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Enterprise-Grade Security</h3>
<p className="text-gray-400">Advanced security protocols protect your data and applications from threats with automated monitoring and updates.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Intuitive Interface</h3>
<p className="text-gray-400">A clean, modern dashboard that makes managing your projects simple and efficient with drag-and-drop functionality.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Detailed Analytics</h3>
<p className="text-gray-400">Gain valuable insights into user behavior and application performance with comprehensive reporting tools.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">Flexible Payment Options</h3>
<p className="text-gray-400">Multiple payment gateways integrated for seamless transactions with automatic invoicing and receipt generation.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
<div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
<div className="h-12 w-12 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-3">24/7 Expert Support</h3>
<p className="text-gray-400">Our dedicated team is always available to help with any questions or issues through live chat, email, or phone.</p>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-transparent"></div>
<div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
<h3 className="text-2xl md:text-3xl font-light mb-4">Advanced integrations that <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">power your workflow</span></h3>
<p className="text-gray-400 mb-6">Connect with over 200+ tools and services to create a seamless development pipeline that matches your team's existing workflow.</p>
<a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" href="#">
            Explore Integrations
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="md:w-1/2 grid grid-cols-3 gap-3">
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="GitHub" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
</div>
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="Slack" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"/>
</div>
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="Figma" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
</div>
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="AWS" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg"/>
</div>
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="Google Cloud" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"/>
</div>
<div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
<img alt="Azure" className="h-8 w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"/>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
