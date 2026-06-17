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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
<div className="max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="flex items-center justify-between h-24">
<div className="font-playfair text-[22px] tracking-tight text-[#1a1a1a] font-semibold">STELLAR</div>
<div className="hidden lg:flex items-center gap-12 text-[13px] tracking-wide uppercase">
<a className="text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">Windows</a>
<a className="text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">Doors</a>
<a className="text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">Process</a>
<a className="text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">Projects</a>
<a className="text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">Contact</a>
</div>
<button className="hidden lg:block px-7 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] tracking-wide uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                    Book Consultation
                </button>
<button className="lg:hidden">
<i className="w-6 h-6 text-[#1a1a1a]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-24 relative h-[92vh] flex items-center">
<div className="absolute inset-0">
<img alt="Modern architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/40"></div>
<div className="absolute inset-0 window-grid-light"></div>
</div>
<div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 w-full">
<div className="max-w-3xl">
<h1 className="font-playfair text-6xl lg:text-8xl text-white mb-8 tracking-tight leading-[0.95] font-medium">
                    Architectural<br/>Windows &amp; Doors
                </h1>
<p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-xl">
                    Precision-crafted fenestration for discerning architects and homeowners.
                </p>
</div>
</div>
</section>

<section className="relative">
<div className="grid lg:grid-cols-2">

<div className="relative h-[70vh] lg:h-auto">
<img alt="Window detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&amp;q=80"/>
</div>

<div className="relative bg-[#f5f5f5] window-grid flex items-center">
<div className="py-20 lg:py-32 px-8 lg:px-20">
<div className="max-w-xl">
<p className="text-[11px] tracking-[0.2em] text-[#666] uppercase mb-6 font-medium">Our Philosophy</p>
<h2 className="font-playfair text-4xl lg:text-5xl text-[#1a1a1a] mb-8 tracking-tight leading-[1.1] font-medium">
                            Engineering Excellence Through Thoughtful Design
                        </h2>
<div className="space-y-6 text-[15px] text-[#4a4a4a] leading-relaxed">
<p>
                                Every Stellar window and door represents a synthesis of architectural vision and structural integrity. Our team collaborates directly with architects to ensure seamless integration into the built environment.
                            </p>
<p>
                                From initial consultation through installation, we maintain exacting standards that have defined luxury fenestration for nearly four decades.
                            </p>
</div>
<div className="mt-10 flex items-center gap-3">
<a className="text-[13px] tracking-wide uppercase text-[#1a1a1a] hover:text-[#666] transition-colors duration-300 border-b border-[#1a1a1a] hover:border-[#666] pb-1" href="#">
                                View Process
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[60vh]">
<img alt="Craftsmanship detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/20"></div>
</section>

<section className="relative">
<div className="grid lg:grid-cols-2">

<div className="relative bg-[#1a1a1a] window-grid-light flex items-center order-2 lg:order-1">
<div className="py-20 lg:py-32 px-8 lg:px-20">
<div className="max-w-xl">
<p className="text-[11px] tracking-[0.2em] text-white/60 uppercase mb-6 font-medium">Collections</p>
<h2 className="font-playfair text-4xl lg:text-5xl text-white mb-8 tracking-tight leading-[1.1] font-medium">
                            Curtain Wall Systems
                        </h2>
<div className="space-y-6 text-[15px] text-white/80 leading-relaxed">
<p>
                                Our signature curtain wall systems redefine the relationship between interior and exterior space. Engineered for maximum transparency and minimal sightlines.
                            </p>
<p>
                                Custom profiles accommodate project-specific performance requirements while maintaining aesthetic consistency across large-scale applications.
                            </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8">
<div>
<p className="font-playfair text-4xl text-white mb-2 font-medium">U-0.14</p>
<p className="text-[13px] text-white/60 uppercase tracking-wide">Thermal Performance</p>
</div>
<div>
<p className="font-playfair text-4xl text-white mb-2 font-medium">±80 PSF</p>
<p className="text-[13px] text-white/60 uppercase tracking-wide">Wind Load Rating</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[70vh] lg:h-auto order-1 lg:order-2">
<img alt="Curtain wall" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&amp;q=80"/>
</div>
</div>
</section>

<section className="relative bg-white py-24 lg:py-32 door-pattern">
<div className="max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="mb-20">
<p className="text-[11px] tracking-[0.2em] text-[#666] uppercase mb-4 font-medium">Product Lines</p>
<h2 className="font-playfair text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight font-medium max-w-2xl">
                    Comprehensive Solutions for Every Application
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-1">

<div className="group relative overflow-hidden bg-[#f5f5f5]">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Fixed windows" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="font-playfair text-2xl text-[#1a1a1a] mb-3 font-medium">Fixed Windows</h3>
<p className="text-[14px] text-[#666] mb-4 leading-relaxed">
                            Picture windows and direct-set glazing for uninterrupted views.
                        </p>
<a className="inline-flex items-center gap-2 text-[12px] tracking-wide uppercase text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">
<span>Explore</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative overflow-hidden bg-[#f5f5f5]">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Operable windows" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="font-playfair text-2xl text-[#1a1a1a] mb-3 font-medium">Operable Systems</h3>
<p className="text-[14px] text-[#666] mb-4 leading-relaxed">
                            Casement, awning, and tilt-turn configurations with precision hardware.
                        </p>
<a className="inline-flex items-center gap-2 text-[12px] tracking-wide uppercase text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">
<span>Explore</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative overflow-hidden bg-[#f5f5f5]">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Door systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="font-playfair text-2xl text-[#1a1a1a] mb-3 font-medium">Door Systems</h3>
<p className="text-[14px] text-[#666] mb-4 leading-relaxed">
                            Pivot, sliding, and folding doors engineered for architectural impact.
                        </p>
<a className="inline-flex items-center gap-2 text-[12px] tracking-wide uppercase text-[#1a1a1a] hover:text-[#666] transition-colors duration-300" href="#">
<span>Explore</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 lg:py-40">
<div className="absolute inset-0">
<img alt="Modern home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
<div className="absolute inset-0 window-grid-light"></div>
</div>
<div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="max-w-3xl mb-20">
<h2 className="font-playfair text-4xl lg:text-6xl text-white mb-8 tracking-tight leading-[1.05] font-medium">
                    Built to Last<br/>Generations
                </h2>
<p className="text-lg text-white/80 leading-relaxed">
                    Our commitment to longevity extends beyond materials and engineering. Each installation is backed by comprehensive support and a warranty that reflects our confidence in lasting performance.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-12">
<div className="border-t border-white/20 pt-6">
<p className="font-playfair text-5xl text-white mb-3 font-medium">38</p>
<p className="text-[13px] text-white/70 uppercase tracking-wide">Years in Business</p>
</div>
<div className="border-t border-white/20 pt-6">
<p className="font-playfair text-5xl text-white mb-3 font-medium">2,400+</p>
<p className="text-[13px] text-white/70 uppercase tracking-wide">Projects Completed</p>
</div>
<div className="border-t border-white/20 pt-6">
<p className="font-playfair text-5xl text-white mb-3 font-medium">100%</p>
<p className="text-[13px] text-white/70 uppercase tracking-wide">Custom Fabrication</p>
</div>
<div className="border-t border-white/20 pt-6">
<p className="font-playfair text-5xl text-white mb-3 font-medium">Lifetime</p>
<p className="text-[13px] text-white/70 uppercase tracking-wide">Warranty Coverage</p>
</div>
</div>
</div>
</section>

<section className="relative bg-white py-24 lg:py-32">
<div className="max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="mb-20">
<p className="text-[11px] tracking-[0.2em] text-[#666] uppercase mb-4 font-medium">Selected Work</p>
<h2 className="font-playfair text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight font-medium">
                    Recent Projects
                </h2>
</div>
<div className="space-y-1">

<div className="grid lg:grid-cols-12 gap-1">
<div className="lg:col-span-8 relative h-[50vh] lg:h-[70vh] overflow-hidden group">
<img alt="Residence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500"></div>
</div>
<div className="lg:col-span-4 bg-[#f5f5f5] flex items-center">
<div className="p-12">
<p className="text-[11px] tracking-[0.2em] text-[#666] uppercase mb-4">Private Residence</p>
<h3 className="font-playfair text-3xl text-[#1a1a1a] mb-4 font-medium">Pacific Heights</h3>
<p className="text-[14px] text-[#666] mb-6 leading-relaxed">
                                Floor-to-ceiling curtain wall system with minimal sightlines, creating seamless indoor-outdoor living spaces overlooking the bay.
                            </p>
<p className="text-[12px] text-[#999] uppercase tracking-wide">San Francisco, CA</p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-1">
<div className="lg:col-span-4 bg-[#1a1a1a] flex items-center order-2 lg:order-1">
<div className="p-12">
<p className="text-[11px] tracking-[0.2em] text-white/60 uppercase mb-4">Multi-Family</p>
<h3 className="font-playfair text-3xl text-white mb-4 font-medium">Hudson Commons</h3>
<p className="text-[14px] text-white/70 mb-6 leading-relaxed">
                                Custom window wall system across 12 stories, balancing thermal performance with architectural transparency.
                            </p>
<p className="text-[12px] text-white/50 uppercase tracking-wide">New York, NY</p>
</div>
</div>
<div className="lg:col-span-8 relative h-[50vh] lg:h-[70vh] overflow-hidden group order-1 lg:order-2">
<img alt="Multi-family building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500"></div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-12 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] tracking-wide uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300" href="#">
                    View All Projects
                </a>
</div>
</div>
</section>

<section className="relative py-32 lg:py-40">
<div className="absolute inset-0">
<img alt="Workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-white/95"></div>
<div className="absolute inset-0 door-pattern"></div>
</div>
<div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="max-w-2xl mb-20">
<p className="text-[11px] tracking-[0.2em] text-[#666] uppercase mb-4 font-medium">How We Work</p>
<h2 className="font-playfair text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1] font-medium">
                    From Concept to Completion
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-16">
<div>
<div className="text-[11px] tracking-[0.2em] text-[#999] uppercase mb-4 font-medium">01</div>
<h3 className="text-xl text-[#1a1a1a] mb-4 font-medium">Design Collaboration</h3>
<p className="text-[14px] text-[#666] leading-relaxed">
                        Direct coordination with project architects to refine specifications and ensure design intent is maintained throughout fabrication.
                    </p>
</div>
<div>
<div className="text-[11px] tracking-[0.2em] text-[#999] uppercase mb-4 font-medium">02</div>
<h3 className="text-xl text-[#1a1a1a] mb-4 font-medium">Precision Fabrication</h3>
<p className="text-[14px] text-[#666] leading-relaxed">
                        Each unit is custom-manufactured in our facility using advanced CNC equipment and traditional joinery techniques.
                    </p>
</div>
<div>
<div className="text-[11px] tracking-[0.2em] text-[#999] uppercase mb-4 font-medium">03</div>
<h3 className="text-xl text-[#1a1a1a] mb-4 font-medium">Expert Installation</h3>
<p className="text-[14px] text-[#666] leading-relaxed">
                        Factory-trained teams execute field installation with attention to weatherproofing, alignment, and long-term performance.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 lg:py-40">
<div className="absolute inset-0">
<img alt="Architecture detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#1a1a1a]/60"></div>
</div>
<div className="relative max-w-[1200px] mx-auto px-6 lg:px-16 text-center">
<h2 className="font-playfair text-4xl lg:text-6xl text-white mb-8 tracking-tight leading-[1.05] font-medium">
                Let's Discuss Your Project
            </h2>
<p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation to explore how Stellar can bring precision and performance to your next architectural vision.
            </p>
<a className="inline-block px-12 py-4 bg-white text-[#1a1a1a] text-[13px] tracking-wide uppercase hover:bg-white/90 transition-all duration-300" href="#">
                Book Consultation
            </a>
</div>
</section>

<footer className="bg-[#1a1a1a] text-white py-20 window-grid-light">
<div className="max-w-[1600px] mx-auto px-6 lg:px-16">
<div className="grid md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-4">
<div className="font-playfair text-[22px] tracking-tight mb-6 font-semibold">STELLAR</div>
<p className="text-[14px] text-white/60 leading-relaxed mb-6">
                        Architectural windows and doors crafted for lasting performance.
                    </p>
<p className="text-[13px] text-white/40">
                        San Francisco, California
                    </p>
</div>
<div className="md:col-span-2">
<h5 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6 font-medium">Products</h5>
<ul className="space-y-3 text-[14px] text-white/70">
<li><a className="hover:text-white transition-colors duration-300" href="#">Windows</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Doors</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Curtain Walls</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Hardware</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6 font-medium">Company</h5>
<ul className="space-y-3 text-[14px] text-white/70">
<li><a className="hover:text-white transition-colors duration-300" href="#">About</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Projects</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Showroom</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6 font-medium">Resources</h5>
<ul className="space-y-3 text-[14px] text-white/70">
<li><a className="hover:text-white transition-colors duration-300" href="#">Specifications</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Downloads</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6 font-medium">Follow</h5>
<div className="flex gap-4">
<a className="text-white/60 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-white/60 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/40">
<p>© 2024 Stellar Windows and Doors. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white/70 transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-white/70 transition-colors duration-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
