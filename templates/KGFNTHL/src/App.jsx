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
          fontFamily: {
            'sans': ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  


    lucide.createIcons();
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
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
      

<div className="animated-bg">
<div className="bg-blob blob1"></div>
<div className="bg-blob blob2"></div>
<div className="bg-blob blob3"></div>
<div className="bg-blob blob4"></div>
</div>

<header className="fixed w-full z-50 glass-border fade-in">
<div className="max-w-6xl flex items-center justify-between mr-auto ml-auto pt-4 pr-6 pb-4 pl-6">
<div className="flex items-center gap-2">
<span className="font-medium text-slate-50">Alex Carter</span>
</div>
<nav className="flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#projects">Portfolio</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col justify-center items-center bg-[url(https://images.unsplash.com/photo-1719090024495-055990fc4228?w=2160&amp;q=80)] bg-cover mr-0 ml-0 pt-16 pr-6 pl-6">
<div className="w-20 h-20 overflow-hidden glass-border delay-200 w-[400px] h-[400px] rounded-2xl mb-20 blur-in">
<img alt="Alex Carter" className="w-full h-full w-[200px] h-[200px] object-cover" src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=2160&amp;q=80"/>
</div>
<h1 className="md:text-7xl slide-up delay-400 text-5xl font-normal text-slate-50 font-instrument-serif text-center mb-10">UI Engineer</h1>
<p className="max-w-md fade-in delay-600 text-2xl text-slate-50 text-center mb-20">Crafting smooth digital experiences with modern code and creative design.</p>
<div className="flex items-center gap-4 text-slate-50">
<a className="glass-border hover:bg-white/5 transition-all flex items-center gap-2 slide-left delay-800 text-sm font-medium bg-gray-700 rounded-lg pt-2 pr-6 pb-2 pl-6" href="#projects">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        See Portfolio
      </a>
<a className="hover:text-white transition-colors flex items-center gap-2 slide-right delay-1000 text-sm text-slate-200 pt-2 pr-6 pb-2 pl-6" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
        Get in Touch
      </a>
</div>
</section>

<section className="max-w-4xl mx-auto py-24 px-6" id="about">
<div className="flex items-center gap-3 mb-8 animate-on-scroll in-view">
<svg className="lucide lucide-user w-5 h-5 text-green-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h2 className="text-xl font-medium text-white">About</h2>
</div>
<p className="text-gray-300 mb-12 leading-relaxed animate-on-scroll in-view">
      Hello! I'm Alex, a UI engineer with 6+ years of experience building beautiful, performant websites and apps. My toolkit includes Vue.js, JavaScript, and CSS, with a passion for accessibility and pixel-perfect layouts.
    </p>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-6 rounded-xl animate-on-scroll in-view">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-code w-4 h-4 text-green-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<h3 className="font-medium text-white">Expertise</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">Vue.js</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">JavaScript</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">Nuxt</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">Sass</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl animate-on-scroll in-view">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-activity w-4 h-4 text-green-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="font-medium text-white">Status</h3>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">Open for new projects</span>
<label className="custom-toggle cursor-pointer">
<input checked="" className="sr-only" type="checkbox"/>
<div className="toggle-bg w-8 h-5 rounded-full bg-gray-700 relative transition-colors">
<div className="toggle-dot w-3 h-3 bg-gray-400 rounded-full absolute top-1 left-1 transition-transform"></div>
</div>
</label>
</div>
</div>
</div>
</section>

<section className="py-24" id="projects">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12 animate-on-scroll in-view">
<svg className="lucide lucide-folder w-5 h-5 text-green-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<h2 className="text-xl font-medium text-white">Portfolio</h2>
</div>
<div className="space-y-6">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll in-view">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="font-medium text-white mb-1">TaskFlow</h3>
<p className="text-sm text-gray-400">Workflow app for efficient daily planning</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Vue.js</span>
<span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded">JavaScript</span>
<span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">Firebase</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll in-view">
<div className="flex items-start justify-between mb-4">
<div className="">
<h3 className="font-medium text-white mb-1">PaletteKit</h3>
<p className="text-sm text-gray-400">Color palette generator and sharing tool</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-figma w-4 h-4 text-gray-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded">Nuxt</span>
<span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">SCSS</span>
<span className="text-xs text-pink-400 bg-pink-400/10 px-2 py-1 rounded">Design</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll in-view">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="font-medium text-white mb-1">ShopNest</h3>
<p className="text-sm text-gray-400">Minimal e-commerce storefront for modern brands</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Vue.js</span>
<span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">Stripe</span>
<span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">GSAP</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pb-24" id="contact">
<div className="max-w-lg mx-auto px-6">
<div className="flex items-center gap-3 mb-8 animate-on-scroll">
<svg className="lucide lucide-mail w-5 h-5 text-green-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<h2 className="text-xl font-medium text-white">Contact</h2>
</div>
<form className="space-y-6">
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all" placeholder="Your name" type="text"/>
</div>
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all" placeholder="you@email.com" type="email"/>
</div>
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all resize-none" placeholder="How can I help you?" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 animate-on-scroll">
<input className="w-4 h-4 rounded border-gray-600 bg-transparent text-green-500 focus:ring-green-500 focus:ring-2" id="copy" type="checkbox"/>
<label className="text-sm text-gray-400" htmlFor="copy">Send me a copy</label>
</div>
<button className="w-full glass-border px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 animate-on-scroll" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
          Send Message
        </button>
</form>
<div className="flex justify-center gap-6 mt-12 animate-on-scroll">
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5 text-gray-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-dribbble w-5 h-5 text-gray-400" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</div>
</section>

<footer className="text-center bg-neutral-950 pt-8 pb-8">
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8 animate-on-scroll"></div>
<p className="text-sm text-gray-500 animate-on-scroll">© 2024 Alex Carter</p>
</footer>


    </>
  );
}
