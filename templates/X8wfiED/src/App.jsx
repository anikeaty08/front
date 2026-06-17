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
      

<section className="py-24 bg-black">
<div className="container mx-auto px-6">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Powerful features</span> 
          for modern teams
        </h2>
<p className="text-gray-300 text-xl max-w-2xl mx-auto font-extralight">
          Everything you need to connect, manage, and scale your global operations with unprecedented efficiency.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-indigo-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-all">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Global Connectivity</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Connect teams across borders with real-time collaboration tools designed for distributed workforces.
          </p>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-purple-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Intelligent Automation</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Streamline workflows with AI-powered automation that learns and adapts to your team's unique processes.
          </p>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Advanced Analytics</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Gain actionable insights with customizable dashboards that visualize your most important metrics.
          </p>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-green-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all">
<svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Enterprise Security</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Protect sensitive data with bank-level encryption and compliance frameworks that meet global standards.
          </p>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-pink-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-all">
<svg className="h-6 w-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Team Collaboration</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Foster seamless teamwork with integrated communication tools, file sharing, and project management.
          </p>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
<div className="bg-amber-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-all">
<svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-3">Scalable Infrastructure</h3>
<p className="text-gray-400 font-extralight leading-relaxed">
            Grow with confidence on a platform designed to handle enterprise-level demands with zero downtime.
          </p>
</div>
</div>

<div className="mt-16 text-center">
<button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-light rounded-md px-8 py-3 hover:opacity-90 transition-all">
          Explore all features
        </button>
</div>
</div>
</section>

    </>
  );
}
