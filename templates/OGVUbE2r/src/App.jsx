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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<div className="content min-h-screen">

<header className="pt-8 pb-12 px-6 md:px-12 lg:px-24">
<div className="flex items-center space-x-2 mb-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<h2 className="text-sm font-medium text-purple-400">Premium Features</h2>
</div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">Powerful tools to elevate your workflow</h1>
<p className="text-gray-400 max-w-2xl text-lg">Discover how our platform can transform your productivity with these cutting-edge features.</p>
</header>

<main className="px-6 md:px-12 lg:px-24 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="space-y-8 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10">
<h2 className="text-2xl font-semibold mb-8">Core Capabilities</h2>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Lightning Fast Performance</h3>
<p className="text-gray-400">Optimized architecture delivers responses in milliseconds, not seconds.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Enterprise-Grade Security</h3>
<p className="text-gray-400">Bank-level encryption with advanced threat protection built in.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Workflow Automation</h3>
<p className="text-gray-400">Streamline processes with customizable automation tools.</p>
</div>
</div>
</div>

<div className="space-y-8 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10">
<h2 className="text-2xl font-semibold mb-8">Advanced Solutions</h2>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Advanced Analytics</h3>
<p className="text-gray-400">Powerful insights with real-time data visualization and custom reports.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">24/7 Priority Support</h3>
<p className="text-gray-400">Our dedicated team is always available to help resolve any issues.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
<svg className="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Compliance Ready</h3>
<p className="text-gray-400">Built to meet GDPR, HIPAA, and SOC2 compliance requirements.</p>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
