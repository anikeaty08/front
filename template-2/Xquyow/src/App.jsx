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
      

<section className="py-20 bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
<span className="block">Powerful features for</span>
<span className="block text-cyan-400">data-driven teams</span>
</h2>
<p className="mt-4 max-w-2xl text-lg text-gray-400 mx-auto">
          Everything you need to understand your data and make better business decisions.
        </p>
</div>
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Advanced Analytics</h3>
<p className="text-gray-400 mb-6">Powerful tools to analyze trends, identify patterns, and extract insights from complex datasets with minimal effort.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Real-time Reporting</h3>
<p className="text-gray-400 mb-6">Get instant insights with real-time dashboards and reports that update automatically as data changes throughout your business.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI-Powered Insights</h3>
<p className="text-gray-400 mb-6">Machine learning algorithms automatically discover insights and anomalies in your data to highlight opportunities you might miss.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Enterprise Security</h3>
<p className="text-gray-400 mb-6">Bank-level encryption, role-based access controls, and compliance features to keep your sensitive business data protected.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Seamless Integrations</h3>
<p className="text-gray-400 mb-6">Connect with over 100+ popular business tools and platforms to centralize your data and streamline your workflow.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-colors group">
<div className="w-14 h-14 rounded-md bg-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-800/50 transition-colors">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Export & Sharing</h3>
<p className="text-gray-400 mb-6">Easily export reports in multiple formats or share live dashboards with team members and stakeholders in just a few clicks.</p>
<div className="pt-2 border-t border-gray-700">
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300" href="#">
              Learn more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
