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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter">LUNNAD</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#feature">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#testimonial">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="bg-zinc-900 text-zinc-50 text-xs font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-zinc-800 transition-all">
                Inquire
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-screen-xl mx-auto px-6">
<div className="max-w-4xl">
<div className="reveal-element inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-1 rounded-full mb-8 shadow-sm" style={{animationDelay: '100ms'}}>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"></span>
<span className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-500">Available for 2024 Projects</span>
</div>
<h1 className="reveal-element text-5xl md:text-8xl font-light tracking-tight leading-[1.1] mb-10" style={{animationDelay: '200ms'}}>
                    We craft digital <span className="text-zinc-400">identities</span> that define industries.
                </h1>
<p className="reveal-element text-base md:text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed" style={{animationDelay: '300ms'}}>
                    Lunnad is a multi-disciplinary creative studio focused on elevating brands through minimalist design and high-performance engineering.
                </p>
<div className="reveal-element flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: '400ms'}}>
<a className="w-full sm:w-auto bg-zinc-900 text-zinc-50 text-sm font-medium px-8 py-4 rounded-xl shadow-sm text-center flex items-center justify-center gap-2 group" href="#contact">
                        Start a project
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto border border-zinc-200 bg-white text-zinc-900 text-sm font-medium px-8 py-4 rounded-xl shadow-sm text-center hover:bg-zinc-50 transition-colors" href="#feature">
                        Our Services
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-zinc-200 bg-white" id="feature">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<h2 className="text-3xl font-light tracking-tight sticky top-24">Our Core Expertise</h2>
</div>
<div className="lg:col-span-8 space-y-24">

<div className="reveal-element group" style={{animationDelay: '200ms'}}>
<span className="block text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">01</span>
<h3 className="text-3xl font-normal tracking-tight mb-6 flex items-center gap-4">
                            Brand Strategy &amp; Design
                            <iconify-icon className="text-zinc-300" icon="solar:globus-linear"></iconify-icon>
</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-8">
                            We build cohesive visual languages that resonate. From typography to color theory, we ensure your brand tells a compelling story across every touchpoint.
                        </p>
<ul className="flex flex-wrap gap-3">
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">Visual Identity</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">Market Positioning</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">Style Guides</li>
</ul>
</div>

<div className="reveal-element group" style={{animationDelay: '300ms'}}>
<span className="block text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">02</span>
<h3 className="text-3xl font-normal tracking-tight mb-6 flex items-center gap-4">
                            Digital Product Engineering
                            <iconify-icon className="text-zinc-300" icon="solar:code-square-linear"></iconify-icon>
</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-8">
                            High-end development tailored for the modern web. We specialize in fluid interactions and pixel-perfect layouts that perform seamlessly.
                        </p>
<ul className="flex flex-wrap gap-3">
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">React/Next.js</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">Web3 Integration</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">E-commerce</li>
</ul>
</div>

<div className="reveal-element group" style={{animationDelay: '400ms'}}>
<span className="block text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">03</span>
<h3 className="text-3xl font-normal tracking-tight mb-6 flex items-center gap-4">
                            Art Direction &amp; Motion
                            <iconify-icon className="text-zinc-300" icon="solar:play-circle-linear"></iconify-icon>
</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-8">
                            Bringing static ideas to life through movement. We use motion to guide user focus and create memorable, immersive digital experiences.
                        </p>
<ul className="flex flex-wrap gap-3">
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">3D Rendering</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">UI Animation</li>
<li className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600">Content Production</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="testimonial">
<div className="max-w-screen-xl mx-auto px-6">
<div className="bg-white p-12 md:p-24 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden">
<iconify-icon className="absolute top-10 right-10 text-zinc-100 text-8xl md:text-9xl" icon="solar:double-quotes-l-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-2xl md:text-4xl font-light tracking-tight leading-relaxed mb-12">
                        "Lunnad transformed our digital presence from a standard landing page to a <span className="italic">world-class experience</span>. Their attention to detail in motion and typography is unparalleled in the agency space."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-semibold text-zinc-400">AM</div>
<div>
<div className="text-sm font-semibold tracking-tight">Alexander Miller</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Founder, Stratos Labs</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Let's build the <span className="text-zinc-400">future</span> of your brand.</h2>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed">
                        Currently accepting new projects for Q3 2024. Reach out for a consultation and let's discuss how we can scale your vision.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">hello@lunnad.studio</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">Remote Worldwide • HQ Oslo</span>
</div>
</div>
</div>
<div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400 ml-1">Name</label>
<input className="w-full bg-white border border-zinc-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400 ml-1">Company</label>
<input className="w-full bg-white border border-zinc-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all" placeholder="Acme Inc" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400 ml-1">Email</label>
<input className="w-full bg-white border border-zinc-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-400 ml-1">Project Brief</label>
<textarea className="w-full bg-white border border-zinc-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all resize-none" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-zinc-50 text-sm font-medium py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-sm">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-200 bg-white">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="text-2xl font-semibold tracking-tighter mb-2">LUNNAD</div>
<p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">© 2024 Lunnad Creative Studio.</p>
</div>
<div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">X (Twitter)</a>
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Dribbble</a>
</div>
<div className="text-xs font-medium text-zinc-400">
                    Built with Precision
                </div>
</div>
</div>
</footer>

    </>
  );
}
