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
      
<div className="container mx-auto px-4 max-w-6xl">

<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4 text-white">Powerful Features</h2>
<p className="text-xl max-w-3xl mx-auto">Everything you need to build, deploy and scale your applications</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Lightning Fast</h3>
<p>Optimized performance with global edge network ensures your applications run at peak speed.</p>
</div>

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Advanced Security</h3>
<p>Enterprise-grade security with end-to-end encryption and compliance with industry standards.</p>
</div>

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Flexible API</h3>
<p>Comprehensive API that adapts to your workflow with extensive documentation and examples.</p>
</div>

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Real-time Analytics</h3>
<p>Monitor performance and user behavior with detailed dashboards and custom reports.</p>
</div>

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Team Collaboration</h3>
<p>Built for teams with role-based permissions, activity logs, and shared workspaces.</p>
</div>

<div className="feature-card shadow-lg p-6">
<div className="w-12 h-12 rounded-lg accent-bg flex items-center justify-center mb-5">
<svg className="w-6 h-6 text-[#071527]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Seamless Integration</h3>
<p>Connect with your favorite tools through our extensive library of integrations and webhooks.</p>
</div>
</div>

<div className="mt-16 text-center">
<a className="inline-block py-3 px-8 rounded-lg accent-bg text-[#071527] font-medium hover:bg-[#33deff] transition-colors" href="#">
        Explore All Features
      </a>
</div>
</div>

    </>
  );
}
