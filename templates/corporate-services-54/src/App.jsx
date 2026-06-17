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
      

<div className="w-full max-w-[1400px] h-[90vh] bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden relative ring-1 ring-white/5">

<div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-4 shrink-0 z-20">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-zinc-800/50 border border-zinc-700/50 rounded flex items-center px-3 py-1 w-full max-w-md">
<iconify-icon className="text-zinc-500 mr-2" icon="solar:lock-password-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-xs text-zinc-500">nexus-digital.com</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scroll relative scroll-smooth bg-zinc-900">

<a className="fixed bottom-6 right-8 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-900/80 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter text-white font-medium flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:infinity-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
                        NEXUS
                    </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="text-white bg-white/10 px-4 py-2 rounded-full border border-white/5 hover:bg-white/20 transition-all duration-200" href="#contact">Contact Us</a>
</div>

<button className="md:hidden text-zinc-300">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-24 pb-32 px-6 border-b border-zinc-800/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900">
<div className="max-w-4xl mx-auto text-center animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Accepting new enterprise projects
                    </div>
<h1 className="text-4xl md:text-6xl tracking-tight text-white font-normal mb-6 leading-[1.1]">
                        Digital transformation for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">modern era.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10 delay-100 animate-slide-up">
                        We build high-performance web applications and digital strategies that drive growth, efficiency, and measurable results.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 delay-200 animate-slide-up">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                            Start a Project
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center justify-center" href="#work">
                            View Portfolio
                        </a>
</div>
</div>
</header>

<section className="py-20 border-b border-zinc-800/50" id="about">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<h3 className="text-4xl text-white font-normal tracking-tight">50+</h3>
<p className="text-sm text-zinc-500">Enterprise Clients</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl text-white font-normal tracking-tight">98%</h3>
<p className="text-sm text-zinc-500">Retention Rate</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl text-white font-normal tracking-tight">5yr</h3>
<p className="text-sm text-zinc-500">Market Presence</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl text-white font-normal tracking-tight">24/7</h3>
<p className="text-sm text-zinc-500">Critical Support</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="services">
<div className="mb-16">
<h2 className="text-3xl tracking-tight text-white font-normal mb-4">Our Expertise</h2>
<p className="text-lg text-zinc-400 font-light max-w-xl">Comprehensive digital solutions engineered for scalability and performance.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Custom Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Full-stack web applications built with React, Node.js, and modern architectures tailored to your business logic.</p>
</div>

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Strategic Consulting</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Digital roadmapping and tech stack optimization to align technology investments with business goals.</p>
</div>

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Mobile Solutions</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Native and cross-platform mobile applications ensuring a seamless experience across all devices.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 bg-zinc-900/30" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl tracking-tight text-white font-normal mb-4">Selected Work</h2>
<p className="text-lg text-zinc-400 font-light">Recent projects shipping to millions of users.</p>
</div>
<a className="text-sm text-white hover:text-zinc-300 flex items-center gap-1" href="#">
                            View All Projects 
                            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-zinc-800 rounded-lg border border-zinc-700/50 overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-2 py-1 rounded inline-block mb-2">Fintech</div>
</div>
</div>
<h3 className="text-xl text-white font-normal group-hover:underline decoration-zinc-600 underline-offset-4">Nova Finance Platform</h3>
<p className="text-sm text-zinc-500 mt-2">Re-engineering legacy banking infrastructure.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-zinc-800 rounded-lg border border-zinc-700/50 overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-2 py-1 rounded inline-block mb-2">E-Commerce</div>
</div>
</div>
<h3 className="text-xl text-white font-normal group-hover:underline decoration-zinc-600 underline-offset-4">Lumina Marketplace</h3>
<p className="text-sm text-zinc-500 mt-2">Headless commerce solution scaling to 50k transactions/day.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto text-center">
<iconify-icon className="text-zinc-600 mb-8" icon="solar:quote-up-linear" strokeWidth="1" width="40"></iconify-icon>
<blockquote className="text-2xl md:text-3xl text-white font-light tracking-tight leading-normal mb-8">
                    "Nexus transformed our digital presence entirely. Their technical depth combined with design sensibility delivered a product that exceeded our KPIs by 200%."
                </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700"></div>
<div className="text-left">
<div className="text-sm text-white font-medium">Elena Ross</div>
<div className="text-xs text-zinc-500">CTO, Vertex Industries</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tight text-white font-normal mb-4">Let's build together</h2>
<p className="text-lg text-zinc-400 font-light">Tell us about your project. We typically reply within 2 hours.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">First Name</label>
<input className="w-full bg-zinc-800/40 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:border-white/40 focus:ring-0 focus:outline-none transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Last Name</label>
<input className="w-full bg-zinc-800/40 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:border-white/40 focus:ring-0 focus:outline-none transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Email</label>
<input className="w-full bg-zinc-800/40 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:border-white/40 focus:ring-0 focus:outline-none transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-zinc-800/40 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:border-white/40 focus:ring-0 focus:outline-none transition-colors resize-none" placeholder="Describe your project goals..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-4" type="button">
                            Send Message
                        </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-800 bg-zinc-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-zinc-500">
                        © 2024 Nexus Digital. All rights reserved.
                    </div>
<div className="flex space-x-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
