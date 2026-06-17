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



        lucide.createIcons();
        
        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        });

        document.querySelectorAll('.animate-slide-up, .animate-blur-in').forEach(el => {
            observer.observe(el);
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>

<nav className="fixed top-0 w-full backdrop-blur-md border-b z-50 animate-fade-in bg-neutral-950/80 border-neutral-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight text-white font-sans" style={{}}>NEURAL</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="transition-colors duration-200 text-neutral-300 hover:text-white font-sans" href="#features" style={{}}>Features</a>
<a className="transition-colors duration-200 text-neutral-300 hover:text-white font-sans" href="#technology" style={{}}>Technology</a>
<a className="transition-colors duration-200 hover:text-white text-neutral-300 font-sans" href="#pricing" style={{}}>Pricing</a>
<button className="px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white font-sans" style={{}}>
                        Download Beta
                    </button>
</div>
<div className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6 text-gray-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</div>
</div>
</div>
</nav>

<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 animate-slide-up opacity-0 stagger-1 text-white font-manrope font-light" style={{opacity: '1'}}>
                    The Future of<br/>
<span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-indigo-400 font-manrope font-light" style={{}}>Web Browsing</span>
</h1>
<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 stagger-2 text-neutral-300 font-manrope font-light" style={{opacity: '1'}}>
                    Experience the web like never before with AI-powered browsing that understands, predicts, and adapts to your needs.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 stagger-3" style={{opacity: '1'}}>
<button className="transition-all duration-200 hover:scale-105 hover:bg-blue-700 text-lg font-medium text-white bg-blue-600 rounded-lg pt-4 pr-8 pb-4 pl-8" id="aura-emd91ids0" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)', border: '0', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px', boxSizing: 'border-box', color: '#ffffff', display: 'flex', fontSize: '18px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: '140px', padding: '3px', textDecoration: 'none', userSelect: 'none', WebkitUserSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'all 0.3s'}}>
<span style={{backgroundColor: 'rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', width: '100%', height: '100%', transition: '300ms'}}>
    Download Neural Browser
  </span>
</button>
<button className="border px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white hover:bg-neutral-800/50 font-sans" style={{}}>
                        Watch Demo
                    </button>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-8 pb-16">
<div className="max-w-6xl mx-auto">
<div className="rounded-xl border p-1 animate-blur-in opacity-0 stagger-4 bg-neutral-900 border-neutral-800" style={{opacity: '1'}}>
<div className="rounded-lg p-4 bg-neutral-800">
<div className="flex items-center space-x-2 mb-4">
<div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
</div>
<div className="rounded-lg p-3 mb-4 flex items-center space-x-3 bg-neutral-700">
<svg className="lucide lucide-brain w-5 h-5 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<span className="text-sm text-neutral-300 font-sans" style={{}}>AI is analyzing this page for you...</span>
</div>
<img alt="Browser Interface" className="w-full h-80 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0e3a7d5-39a3-46bb-ae4f-31a0b0efed45_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 animate-slide-up opacity-0 stagger-1 text-white font-manrope font-light" style={{opacity: '1'}}>
                    Intelligent Features
                </h2>
<p className="text-lg max-w-2xl mx-auto animate-slide-up opacity-0 stagger-2 text-neutral-300 font-sans" style={{opacity: '1'}}>
                    Every feature is designed to make your browsing experience faster, smarter, and more intuitive.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-3 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-600/20">
<svg className="lucide lucide-zap w-6 h-6 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Lightning Fast</h3>
<p className="text-neutral-300 font-sans" style={{}}>AI-powered caching and preloading makes every page load instantly.</p>
</div>
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-4 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-600/20">
<svg className="lucide lucide-shield w-6 h-6 text-purple-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Privacy First</h3>
<p className="text-neutral-300 font-sans" style={{}}>Advanced AI protection against tracking and malicious content.</p>
</div>
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-5 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-cyan-600/20">
<svg className="lucide lucide-brain w-6 h-6 text-green-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Smart Predictions</h3>
<p className="text-neutral-300 font-sans" style={{}}>Learn your habits and predict what you'll want to browse next.</p>
</div>
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-6 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-600/20">
<svg className="lucide lucide-search w-6 h-6 text-orange-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Semantic Search</h3>
<p className="text-neutral-300 font-sans" style={{}}>Find anything on the web using natural language queries.</p>
</div>
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-6 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-600/20">
<svg className="lucide lucide-eye w-6 h-6 text-pink-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Visual Recognition</h3>
<p className="text-neutral-300 font-sans" style={{}}>Understand images and videos to provide contextual information.</p>
</div>
<div className="border rounded-xl p-6 transition-all duration-200 animate-slide-up opacity-0 stagger-6 bg-neutral-900 border-neutral-800 hover:border-neutral-700" style={{opacity: '1'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-600/20">
<svg className="lucide lucide-message-circle w-6 h-6 text-cyan-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>AI Assistant</h3>
<p className="text-neutral-300 font-sans" style={{}}>Get instant answers and summaries for any webpage content.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900/50" id="technology">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="animate-slide-up opacity-0 stagger-1" style={{opacity: '1'}}>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 text-white font-manrope font-light" style={{}}>
                        Built on Advanced AI
                    </h2>
<p className="text-lg mb-8 text-neutral-300 font-sans" style={{}}>
                        Neural Browser leverages cutting-edge machine learning models to understand web content, predict user behavior, and optimize every aspect of your browsing experience.
                    </p>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300 font-sans" style={{}}>Real-time content analysis</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300 font-sans" style={{}}>Predictive prefetching</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300 font-sans" style={{}}>Natural language processing</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300 font-sans" style={{}}>Computer vision integration</span>
</div>
</div>
</div>
<div className="animate-blur-in opacity-0 stagger-2" style={{opacity: '1'}}>
<img alt="AI Technology" className="rounded-xl object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c559c9bc-e44b-4961-98dc-a38fa548ee96_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="animate-slide-up opacity-0 stagger-1" style={{opacity: '1'}}>
<div className="text-4xl mb-2 text-white font-manrope font-light" style={{}}>3x</div>
<div className="text-neutral-300 font-sans" style={{}}>Faster Loading</div>
</div>
<div className="animate-slide-up opacity-0 stagger-2" style={{opacity: '1'}}>
<div className="text-4xl mb-2 text-white font-manrope font-light" style={{}}>90%</div>
<div className="text-neutral-300 font-sans" style={{}}>Less Memory Usage</div>
</div>
<div className="animate-slide-up opacity-0 stagger-3" style={{opacity: '1'}}>
<div className="text-4xl mb-2 text-white font-manrope font-light" style={{}}>100%</div>
<div className="text-neutral-300 font-sans" style={{}}>Private &amp; Secure</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 animate-slide-up opacity-0 stagger-1 text-white font-manrope font-light" style={{opacity: '1'}}>
                Ready to Experience the Future?
            </h2>
<p className="text-lg mb-8 animate-slide-up opacity-0 stagger-2 text-neutral-300 font-sans" style={{opacity: '1'}}>
                Join thousands of users who have already made the switch to intelligent browsing.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 stagger-3" style={{opacity: '1'}}>
<button className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white font-sans" style={{}}>
                    Download Neural Browser
                </button>
<div className="text-sm text-neutral-400 font-sans" style={{}}>Available for Windows, Mac, and Linux</div>
</div>
</div>
</section>

<footer className="border-t py-12 px-4 sm:px-6 lg:px-8 border-neutral-800">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="">
<div className="text-xl font-semibold tracking-tight mb-4 text-white font-sans" style={{}}>NEURAL</div>
<p className="text-sm text-neutral-400 font-sans" style={{}}>The AI-powered browser for the next generation of web users.</p>
</div>
<div>
<h4 className="font-medium mb-4 text-white font-sans" style={{}}>Product</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Features</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Technology</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white font-sans" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>About</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Blog</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white font-sans" style={{}}>Support</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Help Center</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Contact</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t mt-8 pt-8 text-center text-sm border-neutral-800 text-neutral-400 font-sans" style={{}}>
                © 2024 Neural Browser. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
