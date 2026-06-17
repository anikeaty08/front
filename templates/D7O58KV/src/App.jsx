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
      

<nav className="flex items-center justify-between px-8 py-6">
<div className="flex items-center space-x-2">
<img alt="Portal Logo" className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/ffffff/portal.png"/>
<span className="text-2xl font-bold text-white">Portal</span>
</div>
<div className="space-x-6">
<a className="text-white hover:text-purple-300 transition" href="#features">Features</a>
<a className="text-white hover:text-purple-300 transition" href="#pricing">Pricing</a>
<a className="text-white hover:text-purple-300 transition" href="#faq">FAQ</a>
<a className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-lg shadow" href="#signup">Get Started</a>
</div>
</nav>

<section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-28">
<div className="md:w-1/2 space-y-7">
<h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
        Meet <span className="text-purple-400">Portal</span>:<br/>Your AI Web Browser
      </h1>
<p className="text-lg md:text-xl text-white/80 mb-6">
        Portal supercharges your browsing with AI. Discover, research, and work smarter than ever—right in your browser.
      </p>
<form className="flex flex-col sm:flex-row gap-3" id="signup">
<input className="rounded-lg px-4 py-3 text-base w-full sm:w-auto focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Enter your email" required="" type="email"/>
<button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition" type="submit">
          Get Early Access
        </button>
</form>
<p className="text-sm text-purple-200 mt-2">No credit card required. Be among the first to experience Portal!</p>
</div>
<div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
<img alt="Portal AI Browser" className="w-[380px] rounded-3xl shadow-2xl border border-white/10" src="https://framerusercontent.com/images/3Xn4Wv5JrQYw1oOQKj5YbEoZT.png"/>
</div>
</section>

<section className="px-8 md:px-20 py-16 bg-white/5 rounded-3xl mx-4 md:mx-16 mt-10 shadow-2xl" id="features">
<h2 className="text-3xl font-bold text-white mb-10 text-center">Why Portal?</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-indigo-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center">
<div className="bg-purple-600 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 17v-2a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v4a4 4 0 01-4 4v2"></path><circle cx="12" cy="19" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI-Driven Research</h3>
<p className="text-white/80 text-center">Find what you need instantly. Portal summarizes articles, answers questions, and suggests relevant resources as you browse.</p>
</div>
<div className="bg-indigo-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center">
<div className="bg-purple-600 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
<p className="text-white/80 text-center">Your data stays yours. Portal uses on-device AI and industry-leading encryption to keep your browsing private.</p>
</div>
<div className="bg-indigo-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center">
<div className="bg-purple-600 p-3 rounded-full mb-4">
<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m0-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
<p className="text-white/80 text-center">Automate repetitive tasks: fill forms, organize tabs, and extract data—Portal adapts to your workflow.</p>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-20" id="pricing">
<h2 className="text-3xl font-bold text-white text-center mb-10">Simple, Transparent Pricing</h2>
<div className="flex flex-col md:flex-row justify-center gap-8">
<div className="bg-white/10 rounded-2xl p-10 shadow-xl flex-1 max-w-md">
<h3 className="text-xl font-bold text-white mb-4">Free</h3>
<p className="text-white/80 mb-6">Try Portal with core AI features and privacy protection.</p>
<ul className="text-white/70 mb-8 space-y-2">
<li>✔️ Basic AI browsing</li>
<li>✔️ Summarization</li>
<li>✔️ Privacy tools</li>
<li>✔️ Community support</li>
</ul>
<div className="text-3xl font-bold text-white mb-6">Free</div>
<a className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition" href="#signup">Get Started</a>
</div>
<div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-10 shadow-2xl flex-1 max-w-md border-4 border-purple-400 relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-800 text-white px-5 py-1 rounded-full text-xs font-bold shadow">Most Popular</span>
<h3 className="text-xl font-bold text-white mb-4">Pro</h3>
<p className="text-white/80 mb-6">Unlock all AI powers, automation, and priority support.</p>
<ul className="text-white mb-8 space-y-2">
<li>✔️ Everything in Free</li>
<li>✔️ Advanced AI research</li>
<li>✔️ Workflow automation</li>
<li>✔️ Priority support</li>
</ul>
<div className="text-3xl font-bold text-white mb-2">$12<span className="text-lg font-medium ml-1">/mo</span></div>
<a className="block w-full bg-white hover:bg-purple-100 text-purple-700 text-center py-3 rounded-lg font-semibold transition" href="#signup">Start Free Trial</a>
</div>
</div>
</section>

<section className="px-8 md:px-32 py-16 bg-white/5 rounded-3xl mx-4 md:mx-16 mt-8 shadow-2xl" id="faq">
<h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-6 max-w-2xl mx-auto">
<div>
<h4 className="text-lg font-semibold text-purple-300">Is Portal a standalone browser or an extension?</h4>
<p className="text-white/70 mt-1">Portal is a full-featured browser built from the ground up, integrating AI natively for the best experience.</p>
</div>
<div>
<h4 className="text-lg font-semibold text-purple-300">How does Portal protect my privacy?</h4>
<p className="text-white/70 mt-1">Your data is processed locally whenever possible. We use end-to-end encryption to keep your information secure.</p>
</div>
<div>
<h4 className="text-lg font-semibold text-purple-300">Which platforms does Portal support?</h4>
<p className="text-white/70 mt-1">Portal is available for Windows, macOS, and Linux. Mobile versions are coming soon.</p>
</div>
<div>
<h4 className="text-lg font-semibold text-purple-300">Can I try Portal before subscribing?</h4>
<p className="text-white/70 mt-1">Absolutely! Sign up for early access and get started with our Free plan, no credit card required.</p>
</div>
</div>
</section>

<footer className="mt-16 px-8 py-10 bg-indigo-950/90 text-white flex flex-col md:flex-row justify-between items-center rounded-t-2xl">
<div className="flex items-center space-x-2 mb-4 md:mb-0">
<img alt="Portal Logo" className="w-7 h-7" src="https://img.icons8.com/ios-filled/50/ffffff/portal.png"/>
<span className="font-bold text-xl">Portal</span>
</div>
<div className="flex space-x-6 text-white/70">
<a className="hover:text-purple-300" href="#">Privacy Policy</a>
<a className="hover:text-purple-300" href="#">Terms</a>
<a className="hover:text-purple-300" href="mailto:hello@portalbrowser.ai">Contact</a>
</div>
<div className="text-xs text-white/40 mt-4 md:mt-0">© 2024 Portal. All rights reserved.</div>
</footer>

    </>
  );
}
