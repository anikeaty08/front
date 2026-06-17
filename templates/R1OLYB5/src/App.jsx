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
      
    document.addEventListener("DOMContentLoaded", () => {
      const faders = document.querySelectorAll('.fade-in');
      const appearOptions = { threshold: 0.12 };
      const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if(!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, appearOptions);
      faders.forEach(fader => appearOnScroll.observe(fader));
    });
  
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
      
<header className="relative z-10">
<nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
<div className="flex items-center gap-3">

<span aria-label="Technology Labs Logo" className="outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl transition" tabindex="0">
<svg aria-hidden="true" className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 p-1 shadow-lg" fill="none" height="40" viewbox="0 0 44 44" width="40" xmlns="http://www.w3.org/2000/svg">
<polygon fill="none" points="22,5 39,14.5 39,32.5 22,42 5,32.5 5,14.5" stroke="white" strokeWidth="2.3"></polygon>

<circle cx="22" cy="5" fill="#fff" r="2.5" stroke="#a5b4fc" strokeWidth="1"></circle>
<circle cx="39" cy="14.5" fill="#fff" r="2.5" stroke="#a5b4fc" strokeWidth="1"></circle>
<circle cx="39" cy="32.5" fill="#fff" r="2.5" stroke="#a78bfa" strokeWidth="1"></circle>
<circle cx="22" cy="42" fill="#fff" r="2.5" stroke="#a78bfa" strokeWidth="1"></circle>
<circle cx="5" cy="32.5" fill="#fff" r="2.5" stroke="#818cf8" strokeWidth="1"></circle>
<circle cx="5" cy="14.5" fill="#fff" r="2.5" stroke="#818cf8" strokeWidth="1"></circle>

<polyline fill="none" opacity="0.3" points="22,5 39,14.5 39,32.5 22,42 5,32.5 5,14.5 22,5" stroke="url(#grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.3"></polyline>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="grad" x1="5" x2="39" y1="5" y2="42">
<stop stop-color="#818cf8"></stop>
<stop offset="0.5" stop-color="#a5b4fc"></stop>
<stop offset="1" stop-color="#a78bfa"></stop>
</lineargradient>
</defs>
</svg>
</span>
<span className="text-2xl font-extrabold tracking-wide text-white">Technology Labs LLC</span>
</div>
<div>
<a className="text-gray-300 hover:text-white px-4 py-2 rounded-md transition" href="#projects">Projects</a>
<a className="text-gray-300 hover:text-white px-4 py-2 rounded-md transition" href="#contact">Contact</a>
</div>
</nav>
</header>
<main>
<section className="relative flex flex-col items-center justify-center text-center py-32 fade-in">
<h1 className="text-5xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-500 animate-gradient-x tracking-tight">
        Building the Future of Intelligent Tech
      </h1>
<p className="text-lg sm:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
        Technology Labs LLC is a holding company creating next-generation AI, crypto and finance research, spiritual, wellness, and entertainment products. We power innovation across finance, wellness, creativity, and fun.
      </p>
<a className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transform transition duration-300" href="#projects">
        Explore Our Projects
      </a>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-700 via-purple-500 to-transparent opacity-30 rounded-full blur-3xl animate-pulse"></div>
</section>
<section className="max-w-7xl mx-auto px-6 py-20 fade-in" id="projects">
<h2 className="text-4xl font-extrabold text-center mb-12 text-white tracking-tight">Our Projects</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="https://coinresearch.ai" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl font-black">₿</div>
<span className="text-xl font-bold">CoinResearch.ai</span>
</div>
<p className="text-gray-300 mb-4">AI-powered crypto research, insights, and analytics for the fast-paced world of digital assets.</p>
<span className="text-indigo-400 font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full blur-sm opacity-30"></span>
</a>
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="https://stockresearch.ai" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl font-black">$</div>
<span className="text-xl font-bold">StockResearch.ai</span>
</div>
<p className="text-gray-300 mb-4">Cutting-edge AI tools for stock market analysis, portfolio insights, and financial intelligence.</p>
<span className="text-green-400 font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-purple-500 rounded-full blur-sm opacity-30"></span>
</a>
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="https://promptdaddy.ai" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl font-black">🤖</div>
<span className="text-xl font-bold">PromptDaddy.ai</span>
</div>
<p className="text-gray-300 mb-4">The ultimate AI prompt engineering tool for creators, marketers, and developers to supercharge LLMs.</p>
<span className="text-pink-400 font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-full blur-sm opacity-30"></span>
</a>
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="http://cryptoai.news" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-[#2563ea] to-[#16a34a] rounded-xl flex items-center justify-center">
<svg aria-hidden="true" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xl font-bold">CryptoAi.news</span>
</div>
<p className="text-gray-300 mb-2">Intelligent News Curation for Crypto &amp; AI Investors</p>
<p className="text-gray-400 mb-4 text-sm">Automated news aggregation and content creation suite designed for Boomer/GenX investors.</p>
<span className="text-[#2563ea] font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2563ea] to-[#16a34a] rounded-full blur-sm opacity-30"></span>
</a>
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="https://healingcircle.io" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 rounded-xl flex items-center justify-center text-2xl font-black">♡</div>
<span className="text-xl font-bold">HealingCircle.io</span>
</div>
<p className="text-gray-300 mb-4">A community-driven platform supporting wellness, connection, and collective healing practices.</p>
<span className="text-pink-300 font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full blur-sm opacity-30"></span>
</a>
<a className="group relative glass rounded-3xl p-8 shadow-xl border border-[#30363d] hover:scale-105 transition-transform duration-300 fade-in" href="https://baseballsudoku.com" target="_blank">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 bg-gradient-to-tr from-orange-400 via-yellow-500 to-lime-400 rounded-xl flex items-center justify-center text-2xl font-black">⚾</div>
<span className="text-xl font-bold">BaseballSudoku.com</span>
</div>
<p className="text-gray-300 mb-4">A fun and addictive mobile game merging the excitement of baseball with the challenge of sudoku!</p>
<span className="text-yellow-400 font-semibold group-hover:underline">Visit →</span>
<span className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-lime-400 rounded-full blur-sm opacity-30"></span>
</a>
</div>
</section>
<section className="max-w-3xl mx-auto px-6 py-24 text-center fade-in" id="contact">
<h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Let’s Collaborate</h3>
<p className="text-gray-400 mb-8 text-lg">Interested in partnering, investing, or learning more? Reach out and let’s build the future together.</p>
<a className="inline-block px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold rounded-lg shadow-xl hover:scale-105 transform transition duration-300" href="mailto:hello@technologylabs.io">
        Email Us
      </a>
<div className="mt-10 flex justify-center space-x-6">
<a className="text-gray-400 hover:text-indigo-400 text-2xl transition" href="#"><span className="sr-only">Twitter</span>🐦</a>
<a className="text-gray-400 hover:text-purple-400 text-2xl transition" href="#"><span className="sr-only">LinkedIn</span>💼</a>
<a className="text-gray-400 hover:text-pink-400 text-2xl transition" href="#"><span className="sr-only">Instagram</span>📸</a>
</div>
</section>
</main>
<footer className="border-t border-[#22242b] py-8 text-center text-gray-500 text-sm">
    © 2024 Technology Labs LLC. All rights reserved.
  </footer>
<style>
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 5s ease-in-out infinite;
    }
  </style>

    </>
  );
}
