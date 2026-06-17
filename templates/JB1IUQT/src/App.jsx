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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.section-fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Custom cursor
        const cursorDot = document.querySelector('.cursor-dot');
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/hypnotism-pt5mAN1UhCYxlbJiQtA1wdYe" width="100%"></iframe></div>
<div className="cursor-dot" style={{left: '440px', top: '0px'}}></div>
<div className="cursor-ring" style={{left: '420px', top: '-20px', transform: 'scale(1)', borderColor: 'rgba(37, 99, 235, 0.3)'}}></div>

<nav className="fixed top-0 w-full z-50 nav-fade-in">
<div className="glass-morphism px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="font-display font-bold text-2xl tracking-tight text-white" style={{}}>
                    RubyHouses
                </div>
<div className="hidden md:flex space-x-8">
<a className="text-white transition-colors duration-300 font-medium hover:text-blue-200" href="#work" style={{}}>Work</a>
<a className="text-white transition-colors duration-300 font-medium hover:text-blue-200" href="#services" style={{}}>Services</a>
<a className="text-white transition-colors duration-300 font-medium hover:text-blue-200" href="#about" style={{}}>About</a>
<a className="text-white transition-colors duration-300 font-medium hover:text-blue-200" href="#insights" style={{}}>Insights</a>
<a className="text-white transition-colors duration-300 font-medium hover:text-blue-200" href="#contact" style={{}}>Contact</a>
</div>
<button className="md:hidden text-white" id="mobile-menu-btn" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Creative workspace" className="w-full h-full object-cover" src="default"/>
<div className="video-overlay absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 mr-auto ml-auto pr-6 pl-6 items-center">
<div className="lg:col-span-7 text-white" style={{}}>
<h1 className="md:text-7xl hero-fade-in text-5xl font-bold tracking-tight font-display text-center mb-6">
                    We Build Brands<br/>
<span className="text-blue-300" style={{}}>That Break</span><br/>
                    Boundaries
                </h1>
<p className="md:text-2xl hero-fade-in hero-fade-in-delay-1 text-xl text-gray-100 text-center mb-8" style={{}}>
                    Strategic branding and digital experiences for forward-thinking companies
                </p><div className="flex flex-col sm:flex-row gap-4 hero-fade-in hero-fade-in-delay-2 text-left mb-12">
<button className="transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-white rounded-lg pt-4 pr-8 pb-4 pl-8 translate-x-16 hover:bg-blue-700 bg-blue-600" style={{}}>
                        Start Your Project
                    </button>
<button className="hover:bg-white transition-all duration-300 font-semibold text-white border-white border-2 rounded-lg pt-4 pr-8 pb-4 pl-8 translate-x-16 hover:text-blue-600" style={{}}>
                        View Our Work
                    </button>
</div>
<div className="flex flex-col sm:flex-row gap-8 text-sm hero-fade-in hero-fade-in-delay-3">
<div className="flex gap-2 translate-x-16 items-center">
<div className="w-2 h-2 bg-blue-400 rounded-full" style={{}}></div>
<span className="">50+ Brands Transformed</span>
</div>
<div className="flex gap-2 translate-x-16 items-center">
<div className="w-2 h-2 bg-blue-400 rounded-full" style={{}}></div>
<span className="">5 Years of Excellence</span>
</div>
<div className="flex gap-2 translate-x-16 items-center">
<div className="w-2 h-2 bg-blue-400 rounded-full" style={{}}></div>
<span className="">Award-Winning Team</span>
</div>
</div>
</div>
<div className="lg:col-span-5 hero-fade-in hero-fade-in-delay-4">
<div className="space-y-6">
<div className="glass-morphism float-animation rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 flex rounded-full items-center justify-center bg-blue-600" style={{}}>
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-white" style={{}}>Brand Strategy</h3>
<p className="text-gray-300 text-sm" style={{}}>Data-driven approach</p>
</div>
</div>
</div>
<div className="glass-morphism float-animation-delay rounded-2xl ml-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center" style={{}}>
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold text-white" style={{}}>Visual Identity</h3>
<p className="text-gray-300 text-sm" style={{}}>Memorable designs</p>
</div>
</div>
</div>
<div className="glass-morphism float-animation rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 flex bg-indigo-600 rounded-full items-center justify-center" style={{}}>
<svg className="lucide lucide-monitor w-6 h-6 text-white" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div className="">
<h3 className="font-semibold text-white" style={{}}>UI UX Design</h3>
<p className="text-sm text-gray-300" style={{}}>User-centered design</p>
</div>
</div>
</div><div className="glass-morphism float-animation-delay rounded-2xl ml-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 flex bg-cyan-600 rounded-full items-center justify-center" style={{}}>
<svg className="lucide lucide-palette w-[24px] h-[24px]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold text-white" style={{}}>Web / App Development</h3>
<p className="text-sm text-gray-300" style={{}}>Memorable Website / App</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center hero-fade-in hero-fade-in-delay-4" style={{}}>
<p className="text-sm mb-2">Scroll to explore</p>
<svg className="lucide lucide-chevron-down w-6 h-6 animate-bounce mx-auto" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 section-fade-in visible">
<h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight mb-4" style={{}}>
                    Our Services
                </h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{}}>
                    Comprehensive creative solutions that drive business growth and brand recognition
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 section-fade-in visible hover:border-blue-300" style={{}}>
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-600" style={{}}>
<svg className="lucide lucide-target w-8 h-8 group-hover:text-white text-blue-600" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3" style={{}}>Brand Strategy</h3>
<p className="text-gray-600 leading-relaxed" style={{}}>Strategic positioning and messaging that resonates with your target audience.</p>
</div>
<div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 section-fade-in visible hover:border-blue-300" style={{}}>
<div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300" style={{}}>
<svg className="lucide lucide-palette w-8 h-8 text-sky-600 group-hover:text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3" style={{}}>Visual Identity</h3>
<p className="text-gray-600 leading-relaxed" style={{}}>Logo design, color systems, and brand guidelines that make lasting impressions.</p>
</div>
<div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 section-fade-in visible hover:border-blue-300" style={{}}>
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-600" style={{}}>
<svg className="lucide lucide-smartphone w-8 h-8 group-hover:text-white text-blue-600" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3" style={{}}>Digital Design</h3>
<p className="text-gray-600 leading-relaxed" style={{}}>User interfaces and digital experiences that engage and convert visitors.</p>
</div>
<div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 section-fade-in visible hover:border-blue-300" style={{}}>
<div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300" style={{}}>
<svg className="lucide lucide-code w-8 h-8 text-sky-600 group-hover:text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="font-display font-semibold text-xl text-gray-900 mb-3" style={{}}>Web Development</h3>
<p className="text-gray-600 leading-relaxed" style={{}}>Custom websites and applications built with cutting-edge technologies.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="work" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 section-fade-in visible">
<h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight mb-4" style={{}}>
                    Featured Work
                </h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{}}>
                    Transformative projects that showcase our creative excellence and strategic thinking
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative overflow-hidden rounded-2xl section-fade-in visible">
<img alt="Brand identity project" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
<div className="absolute bottom-6 left-6 right-6 text-white" style={{}}>
<h3 className="font-display font-semibold text-xl mb-2">TechFlow Brand Identity</h3>
<p className="text-gray-200 text-sm mb-4" style={{}}>Complete brand overhaul for fintech startup</p>
<button className="font-medium flex items-center gap-2 text-blue-400 hover:text-blue-300" style={{}}>
                                View Case Study <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl section-fade-in visible">
<img alt="Digital experience project" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
<div className="absolute bottom-6 left-6 right-6 text-white" style={{}}>
<h3 className="font-display font-semibold text-xl mb-2">EcoLiving Platform</h3>
<p className="text-gray-200 text-sm mb-4" style={{}}>Sustainable lifestyle e-commerce experience</p>
<button className="font-medium flex items-center gap-2 text-blue-400 hover:text-blue-300" style={{}}>
                                View Case Study <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl section-fade-in visible">
<img alt="Creative campaign project" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1604478373812-0ef15d185d90?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-6 left-6 right-6 text-white" style={{}}>
<h3 className="font-display font-semibold text-xl mb-2">Artisan Collective</h3>
<p className="text-gray-200 text-sm mb-4" style={{}}>Creative direction and brand storytelling</p>
<button className="font-medium flex items-center gap-2 text-blue-400 hover:text-blue-300" style={{}}>
                                View Case Study <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-600" id="contact" style={{}}>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="section-fade-in visible">
<h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-6" style={{}}>
                    Ready to Transform Your Brand?
                </h2>
<p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100" style={{}}>
                    Let's create something extraordinary together. Start your project today.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-blue-600" style={{}}>
                        Get Started
                    </button>
<button className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:text-blue-600" style={{}}>
                        Schedule a Call
                    </button>
</div>
</div>
</div>
</section>

    </>
  );
}
