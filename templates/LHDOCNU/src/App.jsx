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
      

<header className="w-full flex justify-between items-center px-8 py-6">
<div className="text-2xl font-bold tracking-wide text-green-400">InvestEase</div>
<nav className="space-x-8 text-gray-300 hidden md:block">
<a className="hover:text-green-300 transition" href="#features">Features</a>
<a className="hover:text-green-300 transition" href="#testimonials">Testimonials</a>
<a className="hover:text-green-300 transition" href="#waitlist">Waitlist</a>
</nav>
</header>

<section className="flex flex-col items-center text-center mt-12 mb-10 w-full px-4">
<h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent mb-4">
      Track Investments. <br/>Grow Your Wealth.
    </h1>
<p className="max-w-xl text-gray-300 text-lg mb-8">
      Your all-in-one platform to track your investments, get real-time insights, and receive personalized advice. 
      <span className="text-green-300">Free, secure, and always up-to-date.</span>
</p>
<a className="inline-block px-8 py-3 rounded-full bg-green-400 text-black font-semibold shadow-lg transition hover:bg-green-300 mb-4" href="#waitlist">
      Join the Waitlist
    </a>
</section>

<section className="w-full flex flex-col items-center mb-10 px-4">
<div className="glass max-w-3xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-xl">
<img alt="Unified Investment Tracker" className="w-48 md:w-68 rounded-2xl shadow-xl mb-6 md:mb-0" src="https://lfurnhgalbdgecymrmol.supabase.co/storage/v1/object/public/ai-images//ChatGPT%20Image%2012%20de%20jun.%20de%202025,%2014_02_56.png" style={{width: '192px', maxWidth: '120%', minWidth: '0'}}/>
<div>
<h3 className="font-semibold text-2xl mb-2 text-green-200">Unified Investment Tracker</h3>
<p className="text-gray-300 text-lg">See all your portfolios, stocks, and crypto in one beautiful dashboard.</p>
</div>
</div>
</section>
<section className="w-full flex flex-col items-center mb-10 px-4">
<div className="glass max-w-3xl w-full mx-auto flex flex-col md:flex-row-reverse items-center gap-8 p-8 rounded-3xl shadow-xl">
<img alt="Real-Time Insights" className="w-48 md:w-68 rounded-2xl shadow-xl mb-6 md:mb-0" src="https://lfurnhgalbdgecymrmol.supabase.co/storage/v1/object/public/ai-images//ChatGPT%20Image%2012%20de%20jun.%20de%202025,%2014_03_04.png" style={{width: '192px', maxWidth: '120%', minWidth: '0'}}/>
<div>
<h3 className="font-semibold text-2xl mb-2 text-green-200">Real-Time Insights</h3>
<p className="text-gray-300 text-lg">Get the latest data, trends, and performance analysis instantly.</p>
</div>
</div>
</section>
<section className="w-full flex flex-col items-center mb-10 px-4">
<div className="glass max-w-3xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-xl">
<img alt="Free Expert Advice" className="w-48 md:w-68 rounded-2xl shadow-xl mb-6 md:mb-0" src="https://lfurnhgalbdgecymrmol.supabase.co/storage/v1/object/public/ai-images//ChatGPT%20Image%2012%20de%20jun.%20de%202025,%2014_03_10.png" style={{width: '192px', maxWidth: '120%', minWidth: '0'}}/>
<div>
<h3 className="font-semibold text-2xl mb-2 text-green-200">Free Expert Advice</h3>
<p className="text-gray-300 text-lg">Personalized, actionable tips from leading investment experts—no hidden fees.</p>
</div>
</div>
</section>
<section className="w-full flex flex-col items-center mb-10 px-4">
<div className="glass max-w-3xl w-full mx-auto flex flex-col md:flex-row-reverse items-center gap-8 p-8 rounded-3xl shadow-xl">
<img alt="Portfolio Overview" className="w-48 md:w-68 rounded-2xl shadow-xl mb-6 md:mb-0" src="https://lfurnhgalbdgecymrmol.supabase.co/storage/v1/object/public/ai-images//ChatGPT%20Image%2012%20de%20jun.%20de%202025,%2014_03_18.png" style={{width: '192px', maxWidth: '120%', minWidth: '0'}}/>
<div>
<h3 className="font-semibold text-2xl mb-2 text-green-200">Portfolio Overview</h3>
<p className="text-gray-300 text-lg">Visualize your performance and allocation with clarity and confidence.</p>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto mt-10 mb-20 px-4" id="testimonials">
<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-300">What Investors Say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass p-6 rounded-2xl">
<p className="text-gray-200 italic mb-4">“Finally, I can see all my investments in one place. The advice has helped me grow my portfolio faster and smarter.”</p>
<div className="flex items-center gap-3">
<span className="block w-10 h-10 rounded-full bg-green-500/10 border border-green-300"></span>
<div>
<div className="font-semibold text-green-200">Priya S.</div>
<div className="text-xs text-gray-400">Tech Investor</div>
</div>
</div>
</div>
<div className="glass p-6 rounded-2xl">
<p className="text-gray-200 italic mb-4">“Simple, beautiful, and powerful. I love the glass design and how easy it is to track my assets.”</p>
<div className="flex items-center gap-3">
<span className="block w-10 h-10 rounded-full bg-green-500/10 border border-green-300"></span>
<div>
<div className="font-semibold text-green-200">James L.</div>
<div className="text-xs text-gray-400">Angel Investor</div>
</div>
</div>
</div>
<div className="glass p-6 rounded-2xl">
<p className="text-gray-200 italic mb-4">“The free advice is genuinely helpful and unbiased. InvestEase is now my daily companion.”</p>
<div className="flex items-center gap-3">
<span className="block w-10 h-10 rounded-full bg-green-500/10 border border-green-300"></span>
<div>
<div className="font-semibold text-green-200">Maria F.</div>
<div className="text-xs text-gray-400">Stock Enthusiast</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full flex flex-col items-center mb-20 px-4" id="waitlist">
<h3 className="text-2xl font-bold mb-4 text-green-300">Get Early Access</h3>
<p className="text-gray-300 mb-6 text-center max-w-xl">Be the first to try InvestEase. Join our waitlist for exclusive early access and updates.</p>
<form className="w-full max-w-xl flex flex-col md:flex-row gap-4">
<input className="flex-1 px-5 py-3 rounded-full bg-black/50 border border-green-400 text-white outline-none focus:ring-2 focus:ring-green-300 placeholder:text-gray-400" placeholder="Your email address" required="" type="email"/>
<button className="px-8 py-3 rounded-full bg-green-400 text-black font-semibold transition hover:bg-green-300" type="submit">Join Waitlist</button>
</form>
</section>

<footer className="w-full text-center text-gray-500 text-sm py-8">
    © 2025 InvestEase. All rights reserved.
  </footer>

    </>
  );
}
