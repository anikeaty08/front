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



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Process slider functionality
    document.getElementById('processNext').addEventListener('click', function() {
      const slider = document.getElementById('processSlider');
      const cardWidth = slider.querySelector('div').offsetWidth + 24; // card width + gap
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
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
      

<aside className="hidden lg:flex flex-col items-center space-y-4 py-6 w-16 bg-[#0a0a0a] border-r border-[#1a1a1a] fade-in">
<div className="text-xl font-semibold tracking-tighter text-[#ff6b00]">MD</div>
<button className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#ff6b00] shadow-lg shadow-[#ff6b00]/20 hover:shadow-[#ff6b00]/30 transition-all duration-300">
<i className="w-5 h-5 text-black stroke-[1.5]" data-lucide="home"></i>
</button>
<div className="w-6 border-t border-[#1a1a1a] my-2"></div>
<button className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-grid"></i>
</button>
<button className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers-3"></i>
</button>
<button className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="message-circle"></i>
</button>
<button className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bookmark"></i>
</button>
<div className="flex-1"></div>
<button className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
</button>
</aside>
<main className="flex-1 overflow-y-auto">

<header className="flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-6 fade-in fade-in-delay-1">
<nav className="flex space-x-1 bg-[#0a0a0a] rounded-lg p-1 border border-[#1a1a1a]">
<a className="px-4 py-2 rounded-md text-sm font-medium bg-[#1a1a1a] text-white transition-all duration-300" href="#">Portfolio</a>
<a className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1a1a1a] text-gray-400 hover:text-white transition-all duration-300" href="#">Residential</a>
<a className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1a1a1a] text-gray-400 hover:text-white transition-all duration-300" href="#">Commercial</a>
<a className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1a1a1a] text-gray-400 hover:text-white transition-all duration-300" href="#">Hospitality</a>
</nav>
<div className="flex items-center space-x-4">
<button className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
</button>
<div className="flex items-center space-x-3">
<div className="text-right hidden md:block">
<p className="text-sm font-medium">Sarah Mitchell</p>
<p className="text-xs text-gray-400">Senior Designer</p>
</div>
<img alt="Sarah Mitchell" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1a1a1a] hover:ring-[#ff6b00] transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81508906-af60-495c-ac86-8039b3832a33_320w.jpg"/>
</div>
</div>
</header>

<section className="mt-12 px-4 sm:px-6 lg:px-12 fade-in fade-in-delay-2">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
<div>
<h1 className="text-4xl sm:text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            MERIDIAN <span className="text-gray-500">DESIGN</span>
</h1>
<p className="text-lg text-gray-400 mt-6 max-w-lg leading-relaxed">
            Award-winning interior architecture studio crafting exceptional spaces for discerning clients worldwide.
          </p>
</div>
<div className="mt-8 lg:mt-0 flex items-center space-x-6">
<div className="text-center">
<div className="text-2xl font-semibold text-[#ff6b00]">150+</div>
<div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
</div>
<div className="w-px h-12 bg-[#1a1a1a]"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-[#ff6b00]">25+</div>
<div className="text-xs text-gray-400 uppercase tracking-wider">Awards</div>
</div>
<div className="w-px h-12 bg-[#1a1a1a]"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-[#ff6b00]">8</div>
<div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
</div>
</div>
</div>
</section>

<section className="mt-12 px-4 sm:px-6 lg:px-12 fade-in fade-in-delay-3">
<div className="flex items-center justify-between">
<div className="flex space-x-8 overflow-x-auto">
<button className="relative pb-3 text-sm font-medium uppercase tracking-widest whitespace-nowrap">
<span className="relative">
              Luxury Residences
              <div className="absolute -bottom-3 left-0 h-0.5 w-full bg-[#ff6b00]"></div>
</span>
</button>
<button className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 whitespace-nowrap">Corporate Offices</button>
<button className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 whitespace-nowrap">Boutique Hotels</button>
<button className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 whitespace-nowrap">Art Galleries</button>
</div>
<div className="flex space-x-2">
<button className="w-8 h-8 rounded-lg border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="grid-3x3"></i>
</button>
<button className="w-8 h-8 rounded-lg border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="list"></i>
</button>
</div>
</div>
</section>

<section className="mt-8 px-4 sm:px-6 lg:px-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 fade-in fade-in-delay-4">
<article className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-500 hover:transform hover:scale-[1.02]">
<div className="relative overflow-hidden">
<img alt="Manhattan Penthouse" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
<i className="w-4 h-4 stroke-[1.5] hover:fill-[#ff6b00] hover:stroke-[#ff6b00] transition-colors duration-300" data-lucide="heart"></i>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase tracking-widest text-[#ff6b00] font-medium">Luxury Residential</span>
<span className="text-xs text-gray-500">Manhattan, NY</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">Tribeca Penthouse</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">A 4,000 sq ft penthouse featuring custom millwork, Italian marble, and panoramic city views.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Completed 2024</span>
<i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
<article className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-500 hover:transform hover:scale-[1.02]">
<div className="relative overflow-hidden">
<img alt="Tech Headquarters" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
<i className="w-4 h-4 stroke-[1.5] hover:fill-[#ff6b00] hover:stroke-[#ff6b00] transition-colors duration-300" data-lucide="heart"></i>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase tracking-widest text-[#ff6b00] font-medium">Corporate</span>
<span className="text-xs text-gray-500">San Francisco, CA</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">Zenith Tech HQ</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Modern workspace design promoting collaboration with biophilic elements and flexible zones.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Completed 2023</span>
<i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
<article className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-500 hover:transform hover:scale-[1.02]">
<div className="relative overflow-hidden">
<img alt="Boutique Hotel" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
<i className="w-4 h-4 stroke-[1.5] hover:fill-[#ff6b00] hover:stroke-[#ff6b00] transition-colors duration-300" data-lucide="heart"></i>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase tracking-widest text-[#ff6b00] font-medium">Hospitality</span>
<span className="text-xs text-gray-500">Miami, FL</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">Azure Boutique Hotel</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Intimate 40-room hotel with ocean-inspired interiors and locally sourced materials.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Completed 2024</span>
<i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
<article className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-500 hover:transform hover:scale-[1.02]">
<div className="relative overflow-hidden">
<img alt="Art Gallery" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
<i className="w-4 h-4 stroke-[1.5] hover:fill-[#ff6b00] hover:stroke-[#ff6b00] transition-colors duration-300" data-lucide="heart"></i>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase tracking-widest text-[#ff6b00] font-medium">Cultural</span>
<span className="text-xs text-gray-500">London, UK</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">Meridian Art Gallery</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Contemporary gallery space with precise lighting and flexible exhibition areas.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Completed 2023</span>
<i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
</section>

<section className="flex flex-col sm:flex-row gap-4 mt-8 px-4 sm:px-6 lg:px-12 fade-in">
<a className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300" href="#process">
<i className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" data-lucide="play-circle"></i>
        Our Process
      </a>
<a className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#ff6b00] text-black hover:bg-[#ff7a1a] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b00]/25" href="#consultation">
<i className="w-4 h-4 stroke-[1.5] text-black group-hover:scale-110 transition-transform duration-300" data-lucide="calendar-check"></i>
        Book Consultation
      </a>
<a className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-[#2a2a2a] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all duration-300" href="#portfolio">
<i className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" data-lucide="image"></i>
        View All Projects
      </a>
</section>

<section className="mt-24 px-4 sm:px-6 lg:px-12 fade-in" id="process">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
<div>
<h2 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight tracking-tight">
            OUR <span className="text-gray-500">PROCESS</span>
</h2>
<p className="text-lg text-gray-400 mt-6 max-w-2xl leading-relaxed">
            From initial concept to final installation, we guide you through every step of creating your dream space with meticulous attention to detail and unwavering commitment to excellence.
          </p>
</div>
<div className="flex gap-3 mt-8 lg:mt-0">
<button className="w-12 h-12 flex items-center justify-center border border-[#2a2a2a] rounded-lg hover:bg-[#1a1a1a] hover:border-[#ff6b00] transition-all duration-300" id="processNext">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative">
<div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 pb-4" id="processSlider">
<div className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] snap-center">
<div className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] p-8 h-full hover:border-[#2a2a2a] transition-all duration-500 group">
<div className="w-12 h-12 bg-[#ff6b00]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5] text-[#ff6b00]" data-lucide="lightbulb"></i>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-[#ff6b00] transition-colors duration-300">Discovery &amp; Concept</h3>
<p className="text-gray-400 leading-relaxed mb-6">We begin with an in-depth consultation to understand your vision, lifestyle, and functional requirements. Our team develops initial concepts and mood boards that capture your unique aesthetic.</p>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Initial consultation &amp; site analysis
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Concept development &amp; mood boards
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Budget planning &amp; timeline
                </div>
</div>
</div>
</div>
<div className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] snap-center">
<div className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] p-8 h-full hover:border-[#2a2a2a] transition-all duration-500 group">
<div className="w-12 h-12 bg-[#ff6b00]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5] text-[#ff6b00]" data-lucide="drafting-compass"></i>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-[#ff6b00] transition-colors duration-300">Design Development</h3>
<p className="text-gray-400 leading-relaxed mb-6">Detailed technical drawings, 3D visualizations, and material selections bring your space to life. We refine every detail to ensure perfection before moving forward.</p>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Technical drawings &amp; floor plans
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Photorealistic 3D renderings
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Material &amp; furniture selection
                </div>
</div>
</div>
</div>
<div className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] snap-center">
<div className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] p-8 h-full hover:border-[#2a2a2a] transition-all duration-500 group">
<div className="w-12 h-12 bg-[#ff6b00]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5] text-[#ff6b00]" data-lucide="hammer"></i>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-[#ff6b00] transition-colors duration-300">Implementation</h3>
<p className="text-gray-400 leading-relaxed mb-6">Our experienced project managers coordinate with trusted craftsmen and suppliers to ensure flawless execution. We handle every detail so you can focus on enjoying the transformation.</p>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Project management &amp; coordination
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Quality control &amp; installation
                </div>
<div className="flex items-center gap-2 text-gray-500">
<i className="w-4 h-4 stroke-[1.5] text-[#ff6b00]" data-lucide="check"></i>
                  Final styling &amp; handover
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6 lg:px-12 fade-in">
<h2 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-16">
        DESIGN <span className="text-gray-500">SERVICES</span>
</h2>
<div className="space-y-20">

<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start group">
<div className="lg:col-span-5">
<div className="sticky top-8">
<h3 className="text-sm uppercase tracking-widest text-[#ff6b00] font-medium mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#ff6b00]"></span>
                Service 01
              </h3>
<h4 className="text-3xl lg:text-4xl font-semibold mb-6 group-hover:text-[#ff6b00] transition-colors duration-500">Luxury Residential</h4>
<p className="text-gray-400 leading-relaxed mb-8 text-lg">Transform your home into a sanctuary of style and comfort. From intimate apartments to sprawling estates, we create bespoke interiors that reflect your personality and enhance your daily life.</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="home"></i>
<div>
<h5 className="font-medium mb-1">Complete Home Design</h5>
<p className="text-sm text-gray-500">Full-service interior design for all living spaces</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="palette"></i>
<div>
<h5 className="font-medium mb-1">Custom Furniture Design</h5>
<p className="text-sm text-gray-500">Bespoke pieces crafted to your specifications</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="lightbulb"></i>
<div>
<h5 className="font-medium mb-1">Lighting Design</h5>
<p className="text-sm text-gray-500">Sophisticated lighting schemes for ambiance and function</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#ff6b00] hover:gap-3 transition-all duration-300 font-medium" href="#consultation">
                Learn More
                <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-6">
<img alt="Luxury Living Room" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Modern Kitchen" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 sm:mt-8" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start group">
<div className="lg:col-span-7 order-2 lg:order-1">
<div className="grid sm:grid-cols-2 gap-6">
<img alt="Modern Office" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 sm:mt-8" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Corporate Workspace" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2">
<div className="sticky top-8">
<h3 className="text-sm uppercase tracking-widest text-[#ff6b00] font-medium mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#ff6b00]"></span>
                Service 02
              </h3>
<h4 className="text-3xl lg:text-4xl font-semibold mb-6 group-hover:text-[#ff6b00] transition-colors duration-500">Commercial Spaces</h4>
<p className="text-gray-400 leading-relaxed mb-8 text-lg">Design inspiring work environments that boost productivity and reflect your brand values. From corporate headquarters to boutique offices, we create spaces that drive success.</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="building-2"></i>
<div>
<h5 className="font-medium mb-1">Office Design &amp; Planning</h5>
<p className="text-sm text-gray-500">Strategic workspace layouts for optimal productivity</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="users"></i>
<div>
<h5 className="font-medium mb-1">Collaborative Spaces</h5>
<p className="text-sm text-gray-500">Meeting rooms and social areas that inspire teamwork</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="award"></i>
<div>
<h5 className="font-medium mb-1">Brand Integration</h5>
<p className="text-sm text-gray-500">Seamlessly incorporate your company's identity</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#ff6b00] hover:gap-3 transition-all duration-300 font-medium" href="#consultation">
                Learn More
                <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start group">
<div className="lg:col-span-5">
<div className="sticky top-8">
<h3 className="text-sm uppercase tracking-widest text-[#ff6b00] font-medium mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#ff6b00]"></span>
                Service 03
              </h3>
<h4 className="text-3xl lg:text-4xl font-semibold mb-6 group-hover:text-[#ff6b00] transition-colors duration-500">Hospitality Design</h4>
<p className="text-gray-400 leading-relaxed mb-8 text-lg">Create memorable experiences through thoughtful design. Our hospitality projects combine luxury with functionality to ensure guests feel welcomed and valued.</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="bed"></i>
<div>
<h5 className="font-medium mb-1">Hotel &amp; Resort Design</h5>
<p className="text-sm text-gray-500">Luxurious accommodations that exceed expectations</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="utensils"></i>
<div>
<h5 className="font-medium mb-1">Restaurant Concepts</h5>
<p className="text-sm text-gray-500">Dining spaces that enhance the culinary journey</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00] mt-0.5" data-lucide="map-pin"></i>
<div>
<h5 className="font-medium mb-1">Experiential Retail</h5>
<p className="text-sm text-gray-500">Immersive shopping environments that drive engagement</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#ff6b00] hover:gap-3 transition-all duration-300 font-medium" href="#consultation">
                Learn More
                <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-6">
<img alt="Hotel Lobby" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Restaurant Interior" className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 sm:mt-8" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6 lg:px-12 mb-16 fade-in" id="consultation">
<div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl border border-[#2a2a2a] p-8 lg:p-12">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6">
            START YOUR <span className="text-[#ff6b00]">JOURNEY</span>
</h2>
<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Schedule a consultation with our design experts and take the first step towards your dream environment.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-[#ff6b00] text-black hover:bg-[#ff7a1a] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b00]/25" href="mailto:hello@meridiandesign.studio">
<i className="w-5 h-5 stroke-[1.5] text-black group-hover:scale-110 transition-transform duration-300" data-lucide="mail"></i>
              Schedule Consultation
            </a>
<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium border border-[#2a2a2a] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all duration-300" href="tel:+1-555-DESIGN">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" data-lucide="phone"></i>
              Call Us Today
            </a>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00]" data-lucide="clock"></i>
<span className="text-gray-400">Response within 24 hours</span>
</div>
<div className="hidden sm:block w-px h-6 bg-[#2a2a2a]"></div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00]" data-lucide="shield-check"></i>
<span className="text-gray-400">Free initial consultation</span>
</div>
<div className="hidden sm:block w-px h-6 bg-[#2a2a2a]"></div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-[1.5] text-[#ff6b00]" data-lucide="star"></i>
<span className="text-gray-400">5-star rated service</span>
</div>
</div>
</div>
</div>
</section>
</main>




    </>
  );
}
