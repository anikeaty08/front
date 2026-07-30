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
      
        lucide.createIcons();
        
        // Add subtle parallax effect
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.glass');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index % 3 + 1) * 0.5;
                card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-20 blur-3xl float"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-15 blur-3xl float" style={{animationDelay: `-2s`}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full opacity-10 blur-3xl float" style={{animationDelay: `-4s`}}></div>
</div>
<div className="relative z-10 min-h-screen flex flex-col">

<nav className="glass rounded-2xl m-6 px-6 py-4" style={{transform: `translate(0.343277px, 0.167688px)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-book-open w-4 h-4 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">BookForge</span>
</div>
<div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#">Templates</a>
<a className="hover:text-gray-900 transition-colors" href="#">Gallery</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
</div>
</nav>

<div className="flex-1 flex items-center justify-center px-6 pb-6">
<div className="w-full max-w-6xl">

<div className="glass rounded-3xl p-8 md:p-12 mb-8" style={{transform: `translate(0.686553px, 0.335375px)`}}>
<div className="text-center mb-12">
<h1 className="md:text-[55px] bg-clip-text text-[27px] font-medium text-transparent tracking-tight bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 mb-6" id="aura-emddcd52n">
                            Your Story, Brought to Life
                        </h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Transform your book idea into a complete digital masterpiece with AI-powered tools that understand creativity
                        </p>
</div>

<div className="max-w-4xl mx-auto mb-12">
<div className="glass-dark rounded-2xl p-8 prompt-glow">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles w-5 h-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div className="flex-1">
<textarea className="w-full bg-transparent text-white placeholder-gray-300 resize-none border-none focus:outline-none text-lg leading-relaxed min-h-32" placeholder="Describe your book idea... ✨ 

Example: 'I want to write a contemporary romance about a travel blogger who gets stranded in a small Italian village and falls in love with a local vineyard owner. The story should have elements of self-discovery, family secrets, and the healing power of food and wine.'"></textarea>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600">
<div className="flex items-center space-x-4 text-sm text-gray-400">
<span className="flex items-center space-x-1">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>AI-Enhanced</span>
</span>
<span className="flex items-center space-x-1">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Your IP Protected</span>
</span>
</div>
<button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
<span>Create My Book</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200" style={{transform: `translate(1.02983px, 0.503063px)`}}>
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-git-branch w-6 h-6 text-white" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Visual Storyboarding</h3>
<p className="text-gray-600 text-sm leading-relaxed mb-4">Interactive plot mapping with character arcs, turning points, and world-building elements</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">Plot Points</span>
<span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">Character Arcs</span>
</div>
</div>

<div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200" style={{transform: `translate(0.343277px, 0.167688px)`}}>
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-layers w-6 h-6 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Smart Templates</h3>
<p className="text-gray-600 text-sm leading-relaxed mb-4">Genre-specific frameworks for romance, fantasy, mystery, and more</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Romance</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Fantasy</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Mystery</span>
</div>
</div>

<div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200 md:col-span-2 lg:col-span-1" style={{transform: `translate(0.686553px, 0.335375px)`}}>
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight">AI Cover Designer</h3>
<p className="text-gray-600 text-sm leading-relaxed mb-4">Professional book covers generated from your story themes and market trends</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">Print Ready</span>
<span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">Market Tested</span>
</div>
</div>
</div>
</div>

<div className="text-center">
<div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 text-sm font-medium text-gray-600" style={{transform: `translate(1.02983px, 0.503063px)`}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Join 50,000+ authors bringing their stories to life</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
