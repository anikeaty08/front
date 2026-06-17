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
      

<nav className="fixed w-full top-0 z-50 bg-[#F7F3EE]/80 backdrop-blur-md border-b border-[#1C1C1C]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase text-[#1C1C1C] leading-none">KAATERSKILL</span>
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#5A3E2B] mt-0.5">Build</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#5A3E2B] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#5A3E2B] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[#1C1C1C]/70 hover:text-[#5A3E2B] transition-colors" href="#areas">Service Areas</a>
</div>
<div className="flex items-center">
<a className="bg-[#1C1C1C] text-[#F7F3EE] text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#5A3E2B] transition-all duration-300 shadow-sm flex items-center gap-2" href="#quote">
                    Request Quote
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/20 text-[#5A3E2B] text-xs font-medium mb-8">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
                    Over 10 Years of Excellence
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1C1C1C] leading-[1.05] mb-6">
                    Mastering the art of <br className="hidden md:block"/>
<span className="text-[#5A3E2B]">premium craftsmanship.</span>
</h1>
<p className="text-lg md:text-xl text-[#1C1C1C]/60 font-light max-w-2xl leading-relaxed mb-10">
                    Delivering clean workmanship, unwavering reliability, and professional execution for homeowners and businesses who value enduring quality.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#5A3E2B] text-white text-base font-medium px-8 py-4 rounded-md hover:bg-[#1C1C1C] transition-colors shadow-md flex justify-center items-center gap-2" href="#quote">
                        Start Your Project
                    </a>
<a className="bg-transparent border border-[#1C1C1C]/20 text-[#1C1C1C] text-base font-medium px-8 py-4 rounded-md hover:bg-[#1C1C1C]/5 transition-colors flex justify-center items-center" href="#services">
                        Explore Services
                    </a>
</div>
</div>

<div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative shadow-2xl shadow-[#1C1C1C]/5">
<div className="absolute inset-0 bg-[#1C1C1C]/10 mix-blend-overlay z-10"></div>
<img alt="Premium woodworking interior" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1C1C] text-[#F7F3EE]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">A Decade of Dedication.</h2>
<p className="text-base text-[#F7F3EE]/70 font-light leading-relaxed mb-6">
                        Kaaterskill Build was founded on a simple premise: do it right, make it last. For over ten years, we have brought a meticulous eye and skilled hands to woodworking, landscaping, and carpentry projects.
                    </p>
<p className="text-base text-[#F7F3EE]/70 font-light leading-relaxed mb-8">
                        We don't just build structures; we craft environments. Our approach is defined by careful execution, transparent communication, and a commitment to high standards that outlive passing trends. When you work with us, you are investing in reliability and professional grace.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#F7F3EE]/10">
<div>
<div className="text-3xl font-semibold text-[#B08D57] tracking-tight mb-1">10+</div>
<div className="text-sm text-[#F7F3EE]/60 font-medium">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#B08D57] tracking-tight mb-1">100%</div>
<div className="text-sm text-[#F7F3EE]/60 font-medium">Detail Focused</div>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-xl overflow-hidden">
<img alt="Craftsman working with wood" className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1540638349517-3abd5afc5847?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#5A3E2B] text-sm font-medium tracking-wide uppercase mb-3 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Tailored solutions for your space.</h2>
<p className="text-base text-[#1C1C1C]/60 font-light">Comprehensive craftsmanship spanning interior refinements to robust outdoor constructions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Custom Carpentry</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        Bespoke cabinetry, built-ins, and architectural detailing designed to elevate your living spaces with seamless integration and flawless utility.
                    </p>
</div>

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Fine Woodworking</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        Precision-crafted furniture and specialty wood pieces. We select premium materials to create focal points that stand the test of time.
                    </p>
</div>

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Outdoor Structures</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        Durable and elegant decks, pergolas, and structural additions that expand your living area while harmonizing with the natural environment.
                    </p>
</div>

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Landscaping Builds</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        Integrating hardscaping and structural woodwork into your landscape to create cohesive, beautiful, and functional exterior grounds.
                    </p>
</div>

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Repairs &amp; Restoration</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        Careful restoration of existing structures and precise repairs that respect original craftsmanship while ensuring modern structural integrity.
                    </p>
</div>

<div className="bg-white/40 border border-[#1C1C1C]/5 rounded-xl p-8 hover:bg-white/80 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#5A3E2B]/10 flex items-center justify-center text-[#5A3E2B] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Home Improvement</h3>
<p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-light">
                        General contracting and enhancement projects managed with a meticulous eye for detail, ensuring polished, high-end results across your home.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-[#1C1C1C]/5 bg-white/20" id="areas">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-8">Trusted locally across the region</h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">

<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> Newburgh
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> Woodstock
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> New York City
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> Kingston
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> Beacon
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> Stamford
                </div>
<div className="px-5 py-2.5 rounded-full border border-[#1C1C1C]/10 bg-white text-sm font-medium text-[#1C1C1C]/80 shadow-sm flex items-center gap-2">
<iconify-icon className="text-[#5A3E2B]" icon="solar:map-point-linear"></iconify-icon> New Windsor
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="quote">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B08D57]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl shadow-[#1C1C1C]/5 border border-[#1C1C1C]/5 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 bg-[#5A3E2B] text-[#F7F3EE] p-10 md:p-12 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Discuss your project.</h2>
<p className="text-sm text-[#F7F3EE]/80 font-light leading-relaxed mb-10">
                            Tell us about your vision. Our team will review your requirements and follow up promptly to schedule a consultation and provide a comprehensive quote.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-[#F7F3EE]/60 font-medium mb-0.5">Email Us</div>
<a className="text-sm font-medium hover:text-[#B08D57] transition-colors" href="mailto:info@kaaterskillbuild.com">info@kaaterskillbuild.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-[#F7F3EE]/60 font-medium mb-0.5">Website</div>
<a className="text-sm font-medium hover:text-[#B08D57] transition-colors" href="https://kaaterskillbuild.com">kaaterskillbuild.com</a>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10">
<p className="text-xs text-[#F7F3EE]/60 font-light">
                            Fully insured and dedicated to exceptional standards across every build.
                        </p>
</div>
</div>

<div className="lg:col-span-3 p-10 md:p-12 bg-white">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="first-name">First Name</label>
<input className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C]/30 focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="last-name">Last Name</label>
<input className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C]/30 focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="email">Email Address</label>
<input className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C]/30 focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="location">Project Location (City/Town)</label>
<input className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C]/30 focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all" id="location" name="location" placeholder="e.g., Woodstock" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="service-type">Primary Service Needed</label>
<div className="relative">
<select className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] appearance-none focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all" id="service-type" name="service-type">
<option disabled="" selected="" value="">Select a category...</option>
<option value="custom-carpentry">Custom Carpentry</option>
<option value="woodworking">Fine Woodworking</option>
<option value="outdoor">Outdoor Structures</option>
<option value="landscaping">Landscaping Builds</option>
<option value="repairs">Repairs &amp; Restoration</option>
<option value="general">General Home Improvement</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1C1C1C]/50">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#1C1C1C]" htmlFor="details">Project Details</label>
<textarea className="w-full bg-[#F7F3EE]/50 border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C]/30 focus:outline-none focus:border-[#5A3E2B] focus:ring-1 focus:ring-[#5A3E2B] transition-all resize-none" id="details" name="details" placeholder="Briefly describe your goals, timeline, and any specific materials you have in mind..." rows="4"></textarea>
</div>
<button className="w-full bg-[#1C1C1C] text-white font-medium py-3.5 rounded-lg text-sm hover:bg-[#5A3E2B] transition-colors shadow-md flex justify-center items-center gap-2 mt-4" type="submit">
                            Request Free Quote
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="mt-auto bg-[#1C1C1C] text-[#F7F3EE] py-12 border-t border-[#F7F3EE]/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-xl font-semibold tracking-tighter uppercase text-[#F7F3EE] leading-none mb-1">KAATERSKILL</span>
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B08D57]">Build</span>
</div>
<div className="flex gap-6 text-sm text-[#F7F3EE]/60">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#areas">Areas</a>
<a className="hover:text-white transition-colors" href="#quote">Contact</a>
</div>
<div className="text-xs text-[#F7F3EE]/40 font-light">
                © 2023 Kaaterskill Build. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
