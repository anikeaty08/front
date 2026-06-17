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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 group" href="#">
<div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="self-center text-lg font-['Montserrat'] font-medium whitespace-nowrap text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors">Mahad AuraBuild</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-slate-900 transition-all duration-200 bg-amber-500 border border-transparent rounded-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="#contact">
                    Get Consultation
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none" data-collapse-toggle="navbar-sticky" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-800 rounded-lg bg-slate-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-300 hover:text-amber-400 md:p-0 transition-colors" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-amber-400 md:p-0 transition-colors" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-amber-400 md:p-0 transition-colors" href="#process">Process</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-amber-400 md:p-0 transition-colors" href="#projects">Portfolio</a></li>
</ul>
</div>
</div>

<div className="hidden md:hidden bg-slate-900 border-b border-white/5" id="mobile-menu">
<ul className="flex flex-col p-4 space-y-2">
<li><a className="block py-2 text-slate-300 hover:text-amber-400" href="#about">About</a></li>
<li><a className="block py-2 text-slate-300 hover:text-amber-400" href="#services">Services</a></li>
<li><a className="block py-2 text-slate-300 hover:text-amber-400" href="#process">Process</a></li>
<li><a className="block py-2 text-slate-300 hover:text-amber-400" href="#projects">Portfolio</a></li>
<li><a className="block py-2 text-amber-500 font-medium" href="#contact">Get Consultation</a></li>
</ul>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp'}}>

<div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-xs uppercase tracking-widest text-slate-300 font-medium">Mahad AuraBuild Studio</span>
</div>
<h1 className="text-5xl md:text-7xl font-['Montserrat'] font-medium text-white tracking-tight leading-[1.1] mb-6">
                Designing Tomorrow, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Today.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Innovative Design • Smart Planning • Premium Execution. <br className="hidden md:block"/>
                We craft future-ready spaces with precision and architectural excellence.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium text-sm rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]" href="#contact">
                    Get Free Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium text-sm rounded-sm backdrop-blur-sm transition-all flex items-center justify-center gap-2 group" href="#projects">
                    View Portfolio
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden" id="about">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-['Montserrat'] font-medium text-white tracking-tight">
                        Redefining Modern <br/>
<span className="text-amber-500">Architecture</span>
</h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                            Founded by Mahad, <strong className="text-white font-medium">Mahad AuraBuild</strong> is more than just an architectural firm; it is a vision of precision, elegance, and functionality. We believe that every line drawn on paper shapes the way people live and interact with their environment.
                        </p>
<p>
                            Our mission is to deliver modern, innovative, and precise architectural solutions that stand the test of time. We combine smart planning with high-end 3D visualization to ensure our clients see their dreams before the first brick is laid.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
<div>
<div className="text-3xl font-['Montserrat'] text-white mb-1">100%</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Custom Design</div>
</div>
<div>
<div className="text-3xl font-['Montserrat'] text-white mb-1">Premium</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Quality Execution</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-slate-900 rounded-sm overflow-hidden relative group">
<img alt="Architectural Model" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-['Montserrat'] text-lg">Mahad</p>
<p className="text-amber-500 text-sm">Founder &amp; Lead Architect</p>
</div>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-amber-500/30 rounded-tr-3xl"></div>
<div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-amber-500/30 rounded-bl-3xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-3 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-['Montserrat'] text-white font-medium tracking-tight mb-4">Comprehensive Design Solutions</h2>
<p className="text-slate-400 font-light">From concept to construction, we handle every detail with absolute precision.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">Architectural Planning</h3>
<p className="text-sm text-slate-400 leading-relaxed">Strategic layout design ensuring functionality, aesthetic appeal, and structural integrity for all building types.</p>
</div>

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">3D Floor Plans &amp; Rendering</h3>
<p className="text-sm text-slate-400 leading-relaxed">High-fidelity 3D visualizations that bring blueprints to life, allowing you to experience the space before construction.</p>
</div>

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">Interior &amp; Exterior Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">Curating cohesive environments that blend exterior architecture with interior comfort and style.</p>
</div>

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">Construction Supervision</h3>
<p className="text-sm text-slate-400 leading-relaxed">On-site oversight to ensure the built reality matches the design intent and quality standards.</p>
</div>

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">Renovation &amp; Remodeling</h3>
<p className="text-sm text-slate-400 leading-relaxed">Transforming existing structures into modern masterpieces through strategic structural updates.</p>
</div>

<div className="group p-8 bg-slate-950 border border-white/5 rounded-sm hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] text-white mb-3">Custom AutoCAD Drawings</h3>
<p className="text-sm text-slate-400 leading-relaxed">Precise technical drawings and smart space optimization for residential and commercial projects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-['Montserrat'] text-white font-medium tracking-tight mb-16 text-center">Our Workflow</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-800"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-all mb-6 relative">
<span className="text-2xl font-['Montserrat']">01</span>
</div>
<h4 className="text-white font-medium mb-2">Consultation</h4>
<p className="text-xs text-slate-500">Understanding your needs &amp; vision.</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-all mb-6 relative">
<span className="text-2xl font-['Montserrat']">02</span>
</div>
<h4 className="text-white font-medium mb-2">Concept Design</h4>
<p className="text-xs text-slate-500">Sketching preliminary ideas.</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-all mb-6 relative">
<span className="text-2xl font-['Montserrat']">03</span>
</div>
<h4 className="text-white font-medium mb-2">3D Modeling</h4>
<p className="text-xs text-slate-500">Visualizing the project in detail.</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-all mb-6 relative">
<span className="text-2xl font-['Montserrat']">04</span>
</div>
<h4 className="text-white font-medium mb-2">Approval</h4>
<p className="text-xs text-slate-500">Refining based on feedback.</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-all mb-6 relative">
<span className="text-2xl font-['Montserrat']">05</span>
</div>
<h4 className="text-white font-medium mb-2">Execution</h4>
<p className="text-xs text-slate-500">Delivering the final build.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-8">Powered by Industry Leading Software</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-slate-300 font-semibold"><iconify-icon className="text-amber-500" icon="solar:monitor-camera-linear"></iconify-icon> AutoCAD</div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><iconify-icon className="text-amber-500" icon="solar:box-bold"></iconify-icon> SketchUp</div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><iconify-icon className="text-amber-500" icon="solar:buildings-linear"></iconify-icon> Revit</div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><iconify-icon className="text-amber-500" icon="solar:cup-hot-linear"></iconify-icon> Lumion</div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><iconify-icon className="text-amber-500" icon="solar:filters-linear"></iconify-icon> Blender</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-['Montserrat'] text-white font-medium tracking-tight mb-2">Featured Projects</h2>
<p className="text-slate-400 font-light">A curation of our recent architectural endeavors.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-amber-500 text-sm font-medium hover:text-amber-400" href="#">View All Work <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-sm bg-slate-900 cursor-pointer">
<img alt="Modern Villa" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-amber-500 uppercase tracking-widest mb-1">Residential</p>
<h3 className="text-xl text-white font-['Montserrat']">The Obsidian Villa</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm bg-slate-900 cursor-pointer">
<img alt="Corporate Office" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-amber-500 uppercase tracking-widest mb-1">Commercial</p>
<h3 className="text-xl text-white font-['Montserrat']">Apex Tech Hub</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm bg-slate-900 cursor-pointer">
<img alt="Luxury Apartment" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-amber-500 uppercase tracking-widest mb-1">Interior</p>
<h3 className="text-xl text-white font-['Montserrat']">Skyline Penthouse</h3>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-amber-500 text-sm font-medium hover:text-amber-400" href="#">View All Work <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-['Montserrat'] text-center text-white font-medium tracking-tight mb-16">Why Mahad AuraBuild?</h2>
<div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:verified-check-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Precision &amp; Accuracy</h4>
<p className="text-sm text-slate-400">Every millimeter accounts. We pride ourselves on error-free planning.</p>
</div>

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Fast Delivery</h4>
<p className="text-sm text-slate-400">Streamlined workflows ensure we meet deadlines without compromising quality.</p>
</div>

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Affordable Premium</h4>
<p className="text-sm text-slate-400">High-end design made accessible through smart resource management.</p>
</div>

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:eye-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Transparent Planning</h4>
<p className="text-sm text-slate-400">No hidden costs. You stay informed at every stage of the project.</p>
</div>

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Client Centric</h4>
<p className="text-sm text-slate-400">Your vision is our blueprint. We listen, adapt, and deliver.</p>
</div>

<div className="bg-slate-950 p-8 flex flex-col items-center text-center">
<iconify-icon className="text-amber-500 mb-4" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Quality Guarantee</h4>
<p className="text-sm text-slate-400">We stand by the integrity of our designs and execution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-['Montserrat'] text-white font-medium tracking-tight mb-16 text-center">Client Words</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-sm bg-slate-900/50 border border-white/5 relative">
<iconify-icon className="text-amber-500/20 text-6xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-300 italic mb-6 relative z-10">"Mahad AuraBuild transformed our vision into a reality far better than we imagined. The 3D visualization was a game changer."</p>
<div>
<h5 className="text-white font-medium">Sarah Jenkins</h5>
<p className="text-xs text-amber-500">Residential Client</p>
</div>
</div>

<div className="p-8 rounded-sm bg-slate-900/50 border border-white/5 relative">
<iconify-icon className="text-amber-500/20 text-6xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-300 italic mb-6 relative z-10">"Professional, precise, and incredibly creative. Mahad's team optimized our office space perfectly."</p>
<div>
<h5 className="text-white font-medium">David Chen</h5>
<p className="text-xs text-amber-500">Tech Start-up CEO</p>
</div>
</div>

<div className="p-8 rounded-sm bg-slate-900/50 border border-white/5 relative">
<iconify-icon className="text-amber-500/20 text-6xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-300 italic mb-6 relative z-10">"The attention to detail in the structural drawings saved us significant costs during construction. Highly recommended."</p>
<div>
<h5 className="text-white font-medium">Emily Rodriguez</h5>
<p className="text-xs text-amber-500">Property Developer</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-4xl font-['Montserrat'] text-white font-medium tracking-tight mb-4">Let's Build <br/>Something Iconic.</h2>
<p className="text-slate-400">Ready to start your project? Get a free quote or schedule a consultation with Mahad.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-medium">Phone</h5>
<p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-medium">Email</h5>
<p className="text-slate-400 text-sm">contact@mahadaurabuild.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-medium">Studio</h5>
<p className="text-slate-400 text-sm">123 Architectural Ave, Design District, City</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-slate-800 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622646633658!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-slate-950 border border-white/5 p-8 md:p-10 rounded-sm">
<h3 className="text-xl text-white font-medium mb-6">Request a Quote</h3>
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="relative group">
<input className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer" id="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer" id="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Address</label>
</div>
</div>
<div className="relative group">
<input className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer" id="phone" placeholder=" " type="tel"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="phone">Phone Number</label>
</div>
<div className="relative group">
<label className="sr-only" htmlFor="service">Select Service</label>
<select className="block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer" id="service">
<option className="bg-slate-900 text-slate-400" selected="">Select Service Interested In</option>
<option className="bg-slate-900 text-white" value="planning">Architectural Planning</option>
<option className="bg-slate-900 text-white" value="interior">Interior Design</option>
<option className="bg-slate-900 text-white" value="3d">3D Rendering</option>
<option className="bg-slate-900 text-white" value="renovation">Renovation</option>
</select>
</div>
<div className="relative group">
<textarea className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer" id="message" placeholder=" " rows="4"></textarea>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="message">Project Details</label>
</div>
<button className="w-full px-6 py-3 text-sm font-medium text-slate-900 bg-amber-500 rounded-sm hover:bg-amber-400 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-amber-500" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="w-6 h-6 bg-amber-500 rounded-sm flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon>
</div>
<span className="self-center text-sm font-['Montserrat'] font-medium text-white tracking-tight uppercase">Mahad AuraBuild</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Designing future-ready spaces with precision, innovation, and architectural excellence.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">Architectural Planning</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Interior Design</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">3D Rendering</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Renovation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Mahad AuraBuild. All Rights Reserved.</p>
<p className="text-xs text-slate-600">Designed for Mahad.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:bg-green-500 hover:scale-110 transition-all duration-300" href="#">
<iconify-icon className="text-white" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</a>

    </>
  );
}
