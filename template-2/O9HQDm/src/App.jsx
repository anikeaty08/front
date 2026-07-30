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
      
<div className="max-w-[800px] mx-auto flex min-h-screen border border-gray-800 rounded-lg overflow-hidden shadow-2xl my-4">

<aside className="w-48 bg-gray-900 border-r border-gray-800 p-5 flex flex-col">
<div className="mb-8">
<div className="w-16 h-16 rounded-full bg-gray-800 mb-4 overflow-hidden">
<img alt="Alex Morgan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80" />
</div>
<h1 className="text-lg font-medium text-white">Alex Morgan</h1>
<p className="text-xs text-gray-500 mt-1">Product Designer</p>
</div>
<nav className="space-y-1">
<a className="block py-1.5 text-sm font-medium text-white" href="#work">Work</a>
<a className="block py-1.5 text-sm font-medium text-gray-500 hover:text-white transition-colors" href="#about">About</a>
<a className="block py-1.5 text-sm font-medium text-gray-500 hover:text-white transition-colors" href="#resume">Resume</a>
<a className="block py-1.5 text-sm font-medium text-gray-500 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="mt-auto pt-6">
<div className="flex space-x-3">
<a className="text-gray-500 hover:text-gray-300" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path></svg>
</a>
<a className="text-gray-500 hover:text-gray-300" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.454-1.158-1.111-1.466-1.111-1.466-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-4.951 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
</a>
<a className="text-gray-500 hover:text-gray-300" href="#">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
</a>
</div>
<div className="h-px bg-gray-800 my-4"></div>
<p className="text-xs text-gray-600">© 2023</p>
</div>
</aside>

<main className="flex-1 bg-gray-950 p-6 overflow-y-auto">

<section className="mb-10" id="work">
<header className="mb-6">
<h2 className="text-xl font-medium text-white">Selected Work</h2>
<p className="text-xs text-gray-500 mt-1">Recent design projects</p>
</header>
<div className="grid grid-cols-3 gap-3">

<a className="block rounded-md overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group" href="#">
<div className="aspect-square overflow-hidden">
<img alt="Abstract design" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" />
</div>
<div className="p-2">
<h3 className="text-xs font-medium text-white">Nebula UI</h3>
<p className="text-[10px] text-gray-500">Design System</p>
</div>
</a>

<a className="block rounded-md overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group" href="#">
<div className="aspect-square overflow-hidden">
<img alt="Abstract design" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" />
</div>
<div className="p-2">
<h3 className="text-xs font-medium text-white">Flux Mobile</h3>
<p className="text-[10px] text-gray-500">iOS App</p>
</div>
</a>

<a className="block rounded-md overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors group" href="#">
<div className="aspect-square overflow-hidden">
<img alt="Abstract design" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" />
</div>
<div className="p-2">
<h3 className="text-xs font-medium text-white">Echo</h3>
<p className="text-[10px] text-gray-500">Web Dashboard</p>
</div>
</a>
</div>
</section>
<div className="h-px bg-gray-800 my-6"></div>

<section className="mb-10" id="about">
<header className="mb-4">
<h2 className="text-xl font-medium text-white">About Me</h2>
</header>
<div className="bg-gray-900 rounded-md border border-gray-800 p-4">
<p className="text-sm leading-relaxed text-gray-400">
            I'm a product designer with 8+ years of experience creating digital experiences that are both beautiful and functional. My approach combines strategic thinking with a keen eye for aesthetics and a deep understanding of user needs.
          </p>
<p className="text-sm leading-relaxed text-gray-400 mt-3">
            My design philosophy centers around simplicity, accessibility, and purpose. I believe that great design should feel intuitive and enhance the user's experience without calling attention to itself.
          </p>
<div className="mt-4 pt-4 border-t border-gray-800">
<h3 className="text-sm font-medium text-white mb-2">Areas of Expertise</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">UI/UX Design</span>
<span className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">Design Systems</span>
<span className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">Product Strategy</span>
</div>
</div>
</div>
</section>
<div className="h-px bg-gray-800 my-6"></div>

<section id="resume">
<header className="mb-4">
<h2 className="text-xl font-medium text-white">Resume</h2>
</header>
<div className="bg-gray-900 rounded-md border border-gray-800 p-4">

<div className="mb-6">
<h3 className="text-sm font-medium text-white mb-3">Work Experience</h3>
<div className="mb-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-gray-300">Senior Product Designer</h4>
<p className="text-xs text-gray-500">Nebula Technologies</p>
</div>
<span className="text-xs text-gray-500">2020—Present</span>
</div>
<p className="text-xs text-gray-400 mt-2">Led design for flagship SaaS product, increasing user engagement by 43%.</p>
</div>
<div className="mb-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-gray-300">Product Designer</h4>
<p className="text-xs text-gray-500">Flux Digital</p>
</div>
<span className="text-xs text-gray-500">2017—2020</span>
</div>
<p className="text-xs text-gray-400 mt-2">Designed mobile applications for Fortune 500 clients.</p>
</div>
</div>
<div className="h-px bg-gray-800 my-4"></div>

<div>
<h3 className="text-sm font-medium text-white mb-3">Education</h3>
<div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-gray-300">MFA, Interaction Design</h4>
<p className="text-xs text-gray-500">California Institute of the Arts</p>
</div>
<span className="text-xs text-gray-500">2013—2015</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-end">
<a className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center" href="#">
              Download CV
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="mt-6 bg-gray-900 rounded-md border border-gray-800 p-4" id="contact">
<h3 className="text-sm font-medium text-white mb-3">Contact</h3>
<div className="space-y-2">
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="text-sm text-indigo-400 hover:text-indigo-300" href="mailto:alex@example.com">alex@example.com</a>
</div>
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-gray-400">San Francisco, CA</span>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
