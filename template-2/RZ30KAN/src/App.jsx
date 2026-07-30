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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
          colors: {
            flux: {
              50:'#faf7ff',
              100:'#f3efff',
              200:'#e9dfff',
              300:'#d6c2ff',
              400:'#b794ff',
              500:'#9567ff',
              600:'#7c3aed',
              700:'#6d28d9',
              800:'#5b21b6'
            }
          }
        }
      }
    }
  


    lucide.createIcons();
    
    // Simulate reading progress
    let progress = 65;
    const progressRing = document.querySelector('.progress-ring');
    progressRing.style.setProperty('--value', progress);
  
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
      
<div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden my-4 md:my-8 border border-white">

<header className="flex flex-col md:flex-row items-start md:items-center justify-between md:px-8 border-flux-100 bg-gradient-to-b from-flux-50/30 border-b pt-6 pr-4 pb-6 pl-4">
<div className="flex items-center space-x-3 mb-4 md:mb-0">
<div className="bg-clip-text text-2xl font-medium text-transparent tracking-tighter bg-gradient-to-r from-flux-700 to-flux-500">Journal</div>
</div>
<nav className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium mb-4 md:mb-0">
<a className="flex items-center space-x-1 text-flux-700 font-semibold" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Home</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="">Features</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-archive w-4 h-4" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
<span>Archive</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>About</span>
</a>
</nav>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<aside className="col-span-1 lg:col-span-4 lg:p-8 lg:border-r lg:border-flux-100 bg-gradient-to-b from-flux-50/30 to-white pt-6 pr-6 pb-6 pl-6">
<div className="md:text-7xl leading-none text-flux-200 text-5xl font-light mb-2">[07]</div>
<div className="flex items-center space-x-2 text-flux-600 mb-6">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium">June 2025</span>
</div>
<h2 className="md:text-2xl leading-tight text-xl font-normal text-gray-900 tracking-tight mb-4">
          Designing Tomorrow's Digital Experiences
        </h2>
<p className="md:text-base leading-relaxed text-sm text-gray-700 mb-8">
          An exploration into the intersection of artificial intelligence, user experience design, and emerging technologies. 
          How creative professionals are adapting to rapid technological change while maintaining human-centered design principles.
        </p>

<div className="space-y-4 mb-8">
<div className="flex items-center justify-between py-3 border-b border-flux-100">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-layers w-4 h-4 text-flux-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="font-medium text-gray-900">Issue Focus</span>
</div>
<span className="text-gray-600 text-sm">AI & Design</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-flux-100">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-users w-4 h-4 text-flux-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium text-gray-900">Contributors</span>
</div>
<span className="text-gray-600 text-sm">12 Experts</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-flux-100">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-clock w-4 h-4 text-flux-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-medium text-gray-900">Read Time</span>
</div>
<span className="text-gray-600 text-sm">15 min</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-flux-100">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-flux-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium text-gray-900">Trending Topic</span>
</div>
<span className="text-gray-600 text-sm">UX Innovation</span>
</div>
</div>

<div className="flex items-center space-x-3 mb-8">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Share</span>
<button className="p-2 rounded-lg bg-flux-100 hover:bg-flux-200 transition-colors">
<svg className="lucide lucide-twitter w-4 h-4 text-flux-600" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button className="p-2 rounded-lg bg-flux-100 hover:bg-flux-200 transition-colors">
<svg className="lucide lucide-linkedin w-4 h-4 text-flux-600" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
<button className="p-2 rounded-lg bg-flux-100 hover:bg-flux-200 transition-colors">
<svg className="lucide lucide-link w-4 h-4 text-flux-600" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</button>
</div>
<div className="flex items-center space-x-2 text-flux-400">
<svg className="lucide lucide-mouse w-4 h-4" data-lucide="mouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
<p className="uppercase text-xs tracking-wide">[Scroll to explore more]</p>
</div>
</aside>

<article className="col-span-1 lg:col-span-8 lg:p-12 space-y-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between space-y-4 lg:space-y-0">
<h1 className="md:text-6xl lg:text-7xl leading-tight max-w-4xl text-4xl font-normal text-gray-900 tracking-tight font-instrument-serif">
            The Evolution of 
            <span className="bg-clip-text text-6xl font-semibold text-transparent tracking-tighter font-playfair bg-gradient-to-r from-flux-600 to-flux-400">
              Creative Intelligence
            </span>
</h1>
<div className="flex items-center space-x-4">
<button className="flex items-center space-x-2 bg-flux-600 hover:bg-flux-700 transition-colors w-44 text-white bg-violet-400 rounded-lg pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="text-sm font-medium">Watch Interview</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 border border-flux-200 text-flux-700 rounded-lg hover:bg-flux-50 transition-colors">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="text-sm font-medium">Save</span>
</button>
</div>
</div>

<figure className="relative w-full group">
<img alt="AI Design Workshop" className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1627635174707-a629d585e1e7?w=2160&q=80" />
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center space-x-2 text-sm font-medium mb-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="">Adobe Design Summit, San Francisco</span>
</div>
<p className="text-xs opacity-80">Creative directors exploring AI-powered design workflows</p>
</div>
</figure>

<div className="prose prose-lg max-w-none">
<p className="leading-relaxed text-xl font-light text-gray-700">
            As artificial intelligence reshapes the creative landscape, design professionals are discovering new ways to augment their creativity while preserving the human touch that makes great design truly resonate.
          </p>
<div className="flex items-center justify-between mt-8 pt-8 border-t border-flux-100">
<div className="flex items-center space-x-3">
<img alt="Sarah Chen" className="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&q=80" />
<div className="">
<p className="font-semibold text-gray-900">Sarah Chen</p>
<p className="text-sm text-gray-600">Creative Director at Figma</p>
</div>
</div>
<button className="flex items-center space-x-2 text-flux-600 hover:text-flux-700 font-medium">
<span className="">Continue Reading</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>
</section>
</div>


    </>
  );
}
