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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-300">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-9 h-9 flex items-center justify-center bg-white text-black rounded-sm overflow-hidden">
<svg className="w-full h-full p-1 fill-black group-hover:fill-[#e81d25] transition-colors duration-300" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0 L58 18 L76 26 L58 34 L50 52 L42 34 L24 26 L42 18 Z"></path>
<path d="M10 25 L50 95 L90 25 L75 25 L50 68 L25 25 Z"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-bold tracking-tight uppercase text-white">Victory</span>
<span className="text-[0.6rem] font-bold tracking-[0.25em] text-[#e81d25]">E&amp;C</span>
</div>
</a>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase">
<a className="hover:text-[#e81d25] transition-colors" href="#about">About</a>
<a className="hover:text-[#e81d25] transition-colors" href="#services">Expertise</a>
<a className="hover:text-[#e81d25] transition-colors" href="#work">Portfolio</a>
<a className="hover:text-[#e81d25] transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white hover:text-[#e81d25]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#e81d25] rounded-full blur-[180px] opacity-[0.15]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-900 rounded-full blur-[150px] opacity-[0.1]"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10">
<div className="lg:col-span-7 space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#e81d25] animate-pulse"></span>
<span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Available for Global Projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] font-semibold text-white">
                    Experience <br/>
                    Design &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#e81d25]">Fabrication.</span>
</h1>
<p className="text-lg text-gray-400 max-w-xl leading-relaxed font-light border-l border-[#e81d25] pl-6">
                    Victory E&amp;C is a full-service creative agency specializing in experiential marketing, custom fabrication, and large-scale event production. We build the stages where brands perform.
                </p>
<div className="flex flex-wrap gap-6 pt-4">
<a className="px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-wider hover:bg-[#e81d25] hover:text-white transition-colors duration-300" href="#contact">
                        Start Your Project
                    </a>
<a className="px-8 py-4 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-colors duration-300" href="#work">
                        View Showreel
                    </a>
</div>
</div>
<div className="lg:col-span-5 relative h-[60vh] lg:h-[70vh] w-full">
<div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 group">
<img alt="Victory Production" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<p className="text-xs font-mono text-[#e81d25]">LATEST PROJECT</p>
<p className="text-sm font-medium text-white">Tech Summit 2024 — Main Stage</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#0a0a0a]" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="text-sm font-bold text-[#e81d25] uppercase tracking-widest mb-2">Since 2019</h2>
<h3 className="text-3xl md:text-5xl tracking-tight font-medium leading-tight">
                    Bridging the gap between <span className="text-gray-500">creative vision</span> and <span className="text-white">technical execution</span>.
                </h3>
</div>
<div className="space-y-8 font-light text-gray-400 leading-relaxed text-lg">
<p>
                    Founded in 2019, Victory E&amp;C began with a singular mission: to provide end-to-end event and construction solutions that defy the ordinary. What started as a boutique agency has grown into a powerhouse of production.
                </p>
<p>
                    From our headquarters, we deploy teams across the region to handle everything from concept design and 3D visualization to on-site fabrication and event management. We don't just plan events; we engineer experiences.
                </p>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
<div>
<span className="block text-3xl font-semibold text-white">150+</span>
<span className="text-xs uppercase tracking-wider text-gray-500">Projects Delivered</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white">12</span>
<span className="text-xs uppercase tracking-wider text-gray-500">Global Awards</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white">100%</span>
<span className="text-xs uppercase tracking-wider text-gray-500">Client Retention</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Capabilities</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#e81d25] hover:gap-4 transition-all" href="#contact">Download Capability Statement <i className="w-4 h-4" data-lucide="arrow-down-to-line"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="mic-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Event Production</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        Full-scale technical production including sound, lighting, AV, and staging solutions for corporate galas, concerts, and conferences.
                    </p>
</div>

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Custom Fabrication</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        In-house carpentry and metalwork workshops delivering bespoke exhibition stands, kiosks, and brand activations with precision.
                    </p>
</div>

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Brand Activations</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        Immersive consumer experiences designed to engage audiences and drive conversion through interactive installations.
                    </p>
</div>

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="printer"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Large Format Printing</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        High-quality branding solutions, wall graphics, banners, and vehicle wraps produced in our dedicated print studio.
                    </p>
</div>

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="presentation"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Exhibition Management</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        Turnkey exhibition management from floor planning and shell schemes to exhibitor coordination and logistics.
                    </p>
</div>

<div className="group relative bg-[#111] border border-white/5 p-8 hover:bg-[#e81d25] transition-colors duration-500 cursor-default">
<div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white text-white group-hover:text-[#e81d25] transition-colors">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Creative Strategy</h3>
<p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                        3D visualization, spatial design, and strategic planning to ensure your event achieves its marketing objectives.
                    </p>
</div>
</div>
</div>
</section>

<div className="py-8 bg-[#e81d25] overflow-hidden rotate-1 scale-105 border-y-4 border-black">
<div className="whitespace-nowrap flex gap-8 animate-marquee">
<span className="text-4xl font-bold uppercase text-black tracking-tighter">Event Management • Fabrication • Digital Printing • Branding • AV Solutions •</span>
<span className="text-4xl font-bold uppercase text-black tracking-tighter">Event Management • Fabrication • Digital Printing • Branding • AV Solutions •</span>
<span className="text-4xl font-bold uppercase text-black tracking-tighter">Event Management • Fabrication • Digital Printing • Branding • AV Solutions •</span>
<span className="text-4xl font-bold uppercase text-black tracking-tighter">Event Management • Fabrication • Digital Printing • Branding • AV Solutions •</span>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#050505]" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Recent Work</h2>
<p className="text-gray-400 text-lg font-light">
                    A selection of projects where design meets durability. We take pride in our precision and attention to detail.
                </p>
</div>
<a className="inline-flex items-center gap-2 text-[#e81d25] uppercase tracking-widest font-bold text-xs hover:text-white transition-colors" href="#">
                View Full Portfolio <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="space-y-32">

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 overflow-hidden rounded-sm relative">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all"></div>
<img alt="Tech Expo" className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1540575467063-17e6fc8c62d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-5 space-y-6 lg:pl-12">
<span className="text-[#e81d25] font-mono text-xs">01 / EXHIBITION</span>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-[#e81d25] transition-colors">GITEX Global Booth</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        Designed and fabricated a 400sqm double-decker stand for a leading telecom provider. Features included interactive touchwalls, private meeting suites, and a suspended LED halo.
                    </p>
<ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
<li className="border border-white/10 px-3 py-1 rounded-full">Fabrication</li>
<li className="border border-white/10 px-3 py-1 rounded-full">Project Management</li>
<li className="border border-white/10 px-3 py-1 rounded-full">AV Rental</li>
</ul>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row-reverse">
<div className="lg:col-span-5 space-y-6 lg:pr-12 order-2 lg:order-1">
<span className="text-[#e81d25] font-mono text-xs">02 / ACTIVATION</span>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-[#e81d25] transition-colors">Summer Music Festival</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        Complete site branding and stage construction for a 3-day music festival. Delivered perimeter branding, VIP lounges, and the main stage truss structure.
                    </p>
<ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
<li className="border border-white/10 px-3 py-1 rounded-full">Outdoor Branding</li>
<li className="border border-white/10 px-3 py-1 rounded-full">Staging</li>
<li className="border border-white/10 px-3 py-1 rounded-full">Logistics</li>
</ul>
</div>
<div className="lg:col-span-7 overflow-hidden rounded-sm relative order-1 lg:order-2">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all"></div>
<img alt="Concert Stage" className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1470229722913-7ea03852754e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 overflow-hidden rounded-sm relative">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all"></div>
<img alt="Corporate Event" className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&amp;w=2636&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-5 space-y-6 lg:pl-12">
<span className="text-[#e81d25] font-mono text-xs">03 / CORPORATE</span>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-[#e81d25] transition-colors">Annual Banking Summit</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        End-to-end execution of a high-profile banking conference. Services provided included registration management, stage set design, and live streaming services.
                    </p>
<ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
<li className="border border-white/10 px-3 py-1 rounded-full">Event Management</li>
<li className="border border-white/10 px-3 py-1 rounded-full">Set Design</li>
<li className="border border-white/10 px-3 py-1 rounded-full">Registration</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#111] border-y border-white/5">
<div className="max-w-5xl mx-auto text-center space-y-12">
<i className="w-12 h-12 text-[#e81d25] mx-auto opacity-50" data-lucide="quote"></i>
<h3 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight">
                "Victory E&amp;C transformed our chaotic concept into a seamless reality. Their attention to fabrication detail and on-site problem solving is unmatched in the region."
            </h3>
<div className="flex flex-col items-center">
<span className="text-white font-bold uppercase tracking-wider text-sm">Sarah Jenkins</span>
<span className="text-gray-500 text-xs mt-1">Marketing Director, Global Tech Solutions</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
                    Ready to <span className="text-[#e81d25]">Build</span><br/>Something Great?
                </h2>
<p className="text-gray-400 text-lg mb-12 max-w-md font-light">
                    Whether it's a custom fabrication project or a full-scale event, our team is ready to discuss your requirements.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Headquarters</h4>
<p className="text-gray-400 text-sm">Industrial Area Phase 2,<br/>Lahore, Pakistan</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Email Us</h4>
<a className="text-gray-400 text-sm hover:text-white transition-colors" href="mailto:info@victoryec.com">info@victoryec.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Call Us</h4>
<a className="text-gray-400 text-sm hover:text-white transition-colors" href="tel:+923001234567">+92 300 123 4567</a>
</div>
</div>
</div>
</div>
<form className="bg-[#111] p-8 md:p-12 rounded-sm border border-white/5 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Name</label>
<input className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Company</label>
<input className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="Company Name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email</label>
<input className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Project Details</label>
<textarea className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors h-32 rounded-sm" placeholder="Tell us about your event or fabrication needs..."></textarea>
</div>
<button className="w-full py-4 bg-[#e81d25] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm" type="button">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<svg className="w-8 h-8 fill-white" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0 L58 18 L76 26 L58 34 L50 52 L42 34 L24 26 L42 18 Z"></path>
<path d="M10 25 L50 95 L90 25 L75 25 L50 68 L25 25 Z"></path>
</svg>
<span className="text-lg font-bold tracking-tight text-white uppercase">Victory E&amp;C</span>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#e81d25] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-[#e81d25] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-[#e81d25] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
<p>© 2024 Victory Events &amp; Concepts. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
    </style>

    </>
  );
}
