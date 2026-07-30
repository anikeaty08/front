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

    // Observe all elements with animate-on-scroll class
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
      

<header className="fixed w-full z-50 glass-border fade-in">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-violet-500 bg-[url(https://images.unsplash.com/photo-1636690581110-a512fed05fd3?w=1080&q=80)] bg-cover rounded-md"></div>
<span className="font-medium text-gray-900">Jane Doe</span>
</div>
<nav className="flex items-center gap-8 text-sm text-gray-600">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col justify-center items-center bg-[url(https://images.unsplash.com/photo-1634655377962-e6e7b446e7e9?w=2160&q=80)] bg-cover pt-16 pr-6 pl-6">
<div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 glass-border blur-in delay-200">
<img alt="Jane Doe" className="w-full h-full object-cover bg-cover" src="https://images.unsplash.com/photo-1636690598773-c50645a47aeb?w=1080&q=80" />
</div>
<h1 className="md:text-7xl text-4xl font-normal text-gray-950 tracking-tighter font-serif text-center mb-4 slide-up delay-400">Frontend Developer</h1>
<p className="max-w-md text-2xl text-gray-600 text-center mb-12 fade-in delay-600">Building exceptional digital products with clean code and thoughtful design.</p>
<div className="flex items-center gap-4">
<a className="glass-border hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium bg-gray-700 rounded-lg pt-2 pr-6 pb-2 pl-6 slide-left delay-800" href="#projects">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
        View work
      </a>
<a className="hover:text-white transition-colors flex items-center gap-2 text-sm text-gray-600 pt-2 pr-6 pb-2 pl-6 slide-right delay-1000" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
        Contact
      </a>
</div>
</section>

<section className="max-w-4xl mx-auto py-24 px-6" id="about">
<div className="flex items-center gap-3 mb-8 animate-on-scroll">
<svg className="lucide lucide-user w-5 h-5 text-violet-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h2 className="text-xl font-medium text-white">About</h2>
</div>
<p className="text-gray-300 mb-12 leading-relaxed animate-on-scroll">
      I'm a frontend developer with 5+ years of experience creating intuitive interfaces. 
      I specialize in React, TypeScript, and modern web technologies, with a focus on performance and accessibility.
    </p>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-6 rounded-xl animate-on-scroll">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-code w-4 h-4 text-violet-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="font-medium text-white">Skills</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">React</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">TypeScript</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">Next.js</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-300">Tailwind</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl animate-on-scroll">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-activity w-4 h-4 text-violet-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="font-medium text-white">Status</h3>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">Available for work</span>
<label className="custom-toggle cursor-pointer">
<input checked className="sr-only" type="checkbox" />
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
<div className="flex items-center gap-3 mb-12 animate-on-scroll">
<svg className="lucide lucide-folder w-5 h-5 text-violet-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h2 className="text-xl font-medium text-white">Projects</h2>
</div>
<div className="space-y-6">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="font-medium text-white mb-1">Linear Clone</h3>
<p className="text-sm text-gray-400">Project management tool with real-time collaboration</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-1 rounded">React</span>
<span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded">TypeScript</span>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Supabase</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="font-medium text-white mb-1">Design System</h3>
<p className="text-sm text-gray-400">Component library with accessibility focus</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-figma w-4 h-4 text-gray-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded">Storybook</span>
<span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">CSS</span>
<span className="text-xs text-pink-400 bg-pink-400/10 px-2 py-1 rounded">Figma</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group animate-on-scroll">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="font-medium text-white mb-1">E-commerce Platform</h3>
<p className="text-sm text-gray-400">Modern shopping experience with smooth animations</p>
</div>
<div className="flex items-center gap-2">
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a className="p-2 hover:bg-white/10 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-1 rounded">Next.js</span>
<span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">Stripe</span>
<span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">Framer Motion</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pb-24" id="contact">
<div className="max-w-lg mx-auto px-6">
<div className="flex items-center gap-3 mb-8 animate-on-scroll">
<svg className="lucide lucide-mail w-5 h-5 text-violet-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h2 className="text-xl font-medium text-white">Contact</h2>
</div>
<form className="space-y-6">
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all" placeholder="Your name" type="text" />
</div>
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all" placeholder="your@email.com" type="email" />
</div>
<div className="animate-on-scroll">
<label className="block text-sm text-gray-300 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder-gray-500 focus:outline-none transition-all resize-none" placeholder="Tell me about your project" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 animate-on-scroll">
<input className="w-4 h-4 rounded border-gray-600 bg-transparent text-violet-500 focus:ring-violet-500 focus:ring-2" id="copy" type="checkbox" />
<label className="text-sm text-gray-400" htmlFor="copy">Send me a copy</label>
</div>
<button className="w-full glass-border px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 animate-on-scroll" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
          Send message
        </button>
</form>
<div className="flex justify-center gap-6 mt-12 animate-on-scroll">
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-gray-400" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a className="p-3 hover:bg-white/5 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-400" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</section>

<footer className="text-center bg-neutral-950 pt-8 pb-8">
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8 animate-on-scroll"></div>
<p className="text-sm text-gray-500 animate-on-scroll">© 2024 Jane Doe</p>
</footer>


    </>
  );
}
