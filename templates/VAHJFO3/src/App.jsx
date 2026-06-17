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
      

<header className="w-full flex items-center justify-between px-6 py-5 border-b border-[#23243b] bg-[#16171e]/80 backdrop-blur">
<div className="flex items-center gap-3">
<span className="flex items-center gap-2">
<span className="bg-gradient-to-r from-purple-400 to-orange-300 p-1 rounded-lg">
<svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 8l-4 8-4-4 8-4z"></path>
</svg>
</span>
<span className="font-extrabold text-2xl tracking-tight text-white headline">GitCompass</span>
</span>
</div>
<div className="flex items-center gap-8">
<a className="text-gray-400 hover:text-white font-medium transition" href="#features">Features</a>
<a className="text-gray-400 hover:text-white font-medium transition" href="#how">How it works</a>
<a className="text-gray-400 hover:text-white font-medium transition" href="#faq">FAQ</a>
</div>
<div>
<a className="rounded-lg px-5 py-2 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow focus:outline-none focus:ring-4 focus:ring-orange-200" href="/dashboard">Dashboard</a>
</div>
</header>
<main className="flex-grow flex flex-col items-center justify-center px-4 py-20 text-center">
<div className="max-w-2xl mx-auto">
<span className="inline-block mb-6 rounded-lg border border-white/10 px-4 py-2">
<span className="uppercase tracking-widest text-xs font-bold text-blue-400">
          Next-Gen Developer Onboarding
        </span>
</span>
<h1 className="headline mb-4 text-white font-normal">
        Onboard developers<br className="hidden sm:inline"/>in
        <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent font-normal">Days</span>,
        not <span className="text-gray-300">Months</span>
</h1>
<h2 className="text-lg font-normal mb-7 text-gray-200">
        GitCompass maps your codebase, so new engineers can contribute with confidence from day one.<br/>
        AI-powered visualizations, documentation, and onboarding flows.
      </h2>
<a className="inline-block rounded-lg px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200" href="/signup" style={{fontSize: '16px'}}>
        Get Started Free
      </a>
<div className="mt-6 text-gray-400 text-sm">
        No credit card required · 14-day free trial
      </div>
</div>
<div className="mt-16 flex justify-center">
<img alt="GitCompass Dashboard Preview" className="mx-auto max-w-full w-[500px] md:w-[700px] rounded-xl shadow-2xl border border-gray-800 transition" loading="lazy" src="https://raw.githubusercontent.com/gitcompass/press/main/gitcompass-dashboard-preview.png"/>
</div>
<section className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" id="features">
<div className="bg-[#171826] border border-[#23243b] rounded-xl p-6 flex flex-col items-center">
<svg className="w-8 h-8 mb-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 8l-4 8-4-4 8-4z"></path></svg>
<h3 className="text-white font-semibold text-lg mb-1">Instant Code Mapping</h3>
<p className="text-gray-400 text-sm">Visualize all files, classes, and dependencies, instantly.</p>
</div>
<div className="bg-[#171826] border border-[#23243b] rounded-xl p-6 flex flex-col items-center">
<svg className="w-8 h-8 mb-3 text-orange-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="12" rx="2" width="18" x="3" y="8"></rect><path d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"></path></svg>
<h3 className="text-white font-semibold text-lg mb-1">AI-Powered Docs</h3>
<p className="text-gray-400 text-sm">Automated documentation and onboarding guides for every repo.</p>
</div>
<div className="bg-[#171826] border border-[#23243b] rounded-xl p-6 flex flex-col items-center">
<svg className="w-8 h-8 mb-3 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a9 9 0 0 1 13 0"></path></svg>
<h3 className="text-white font-semibold text-lg mb-1">Guided Onboarding</h3>
<p className="text-gray-400 text-sm">Personalized, interactive paths for every new team member.</p>
</div>
</section>
<section className="max-w-3xl mx-auto mt-24" id="how">
<h2 className="text-2xl md:text-3xl font-bold text-white mb-6 headline">How GitCompass Works</h2>
<ol className="space-y-6 text-left text-gray-300 text-lg mx-auto max-w-lg">
<li><span className="font-bold text-purple-300">1.</span> Connect your GitHub repository</li>
<li><span className="font-bold text-orange-300">2.</span> Let our AI analyze and map your codebase</li>
<li><span className="font-bold text-pink-300">3.</span> Get onboarding flows, docs, and diagrams, instantly</li>
</ol>
</section>
<section className="max-w-3xl mx-auto mt-24 mb-10" id="faq">
<h2 className="text-2xl font-bold text-white mb-6 headline">FAQ</h2>
<div className="space-y-5 text-left">
<div>
<h3 className="text-white font-semibold">Is my code secure?</h3>
<p className="text-gray-400 text-sm">We use encrypted, ephemeral analysis and never store your source code.</p>
</div>
<div>
<h3 className="text-white font-semibold">Can I use it with private repos?</h3>
<p className="text-gray-400 text-sm">Yes – GitCompass supports public and private GitHub repositories.</p>
</div>
<div>
<h3 className="text-white font-semibold">How much does it cost?</h3>
<p className="text-gray-400 text-sm">Try free for 14 days, then select a plan that fits your team.</p>
</div>
</div>
</section>
</main>
<footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-[#23243b] bg-[#16171e]">
    © 2024 GitCompass. All rights reserved.
  </footer>

    </>
  );
}
