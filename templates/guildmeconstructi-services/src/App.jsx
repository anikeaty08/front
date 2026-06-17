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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm text-white">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-brand-blue uppercase leading-none tracking-tight">Guild Me All The Way</span>
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Building &amp; Construction</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-orange transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-orange transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-orange transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-orange transition-colors" href="#why-us">Why Us</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-semibold bg-brand-blue text-white px-6 py-3 rounded-sm hover:bg-[#004a6b] transition-colors shadow-lg shadow-blue-900/20" href="#contact">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    Get a Quote
                </a>
<button className="md:hidden text-brand-blue">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] w-full flex items-center pt-20">

<div className="absolute inset-0 z-0">
<img alt="Modern Construction" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#005F89]/95 via-[#005F89]/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border-l-4 border-brand-orange bg-white/10 backdrop-blur-sm">
<span className="text-xs font-semibold tracking-widest text-white uppercase">Eastern Region • Ghana</span>
</div>
<h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6 tracking-tight">
                    Experts in Construction, <br/>
<span className="text-brand-orange">Consultation</span> &amp; <br/>
                    Project Management
                </h1>
<h2 className="text-xl md:text-2xl text-teal-300 font-medium mb-8 italic font-serif">
                    "Looking Out, To Serve You Best"
                </h2>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-14 px-8 bg-brand-orange text-white font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2 rounded-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20" href="#contact">
                        Get a Quote
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="h-14 px-8 bg-white text-brand-blue font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2 rounded-sm hover:bg-slate-100 transition-all" href="https://wa.me/233269363193">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<section className="py-20 bg-white relative -mt-10 z-20 rounded-t-3xl shadow-2xl mx-2 md:mx-6 lg:mx-12" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
<h2 className="text-3xl md:text-4xl text-brand-blue font-bold mt-2">Building Trust, Delivering Excellence</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="group p-6 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm border-b-2 border-transparent hover:border-brand-orange">
<div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2">Reliable Supervision</h3>
<p className="text-sm text-slate-500 leading-relaxed">We oversee every detail ensuring your project stays on track.</p>
</div>

<div className="group p-6 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm border-b-2 border-transparent hover:border-brand-orange">
<div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2">Modern Designs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Contemporary architectural solutions that stand out.</p>
</div>

<div className="group p-6 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm border-b-2 border-transparent hover:border-brand-orange">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2">Expert Team</h3>
<p className="text-sm text-slate-500 leading-relaxed">Experienced builders and consultants at your service.</p>
</div>

<div className="group p-6 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm border-b-2 border-transparent hover:border-brand-orange">
<div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2">Quality Finishing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Superior craftsmanship in every corner of your build.</p>
</div>

<div className="group p-6 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm border-b-2 border-transparent hover:border-brand-orange">
<div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-handshake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-2">Client Focused</h3>
<p className="text-sm text-slate-500 leading-relaxed">Your vision is our priority. We listen and deliver.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-xl"></div>
<div className="relative rounded-sm overflow-hidden shadow-2xl border-8 border-white">
<img alt="Construction Site Meeting" className="w-full h-auto" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -right-6 bg-brand-blue p-8 rounded-sm shadow-xl max-w-xs hidden md:block">
<iconify-icon className="text-brand-orange mb-3" icon="solar:quote-up-linear" width="30"></iconify-icon>
<p className="text-white text-lg font-serif italic mb-2">"Looking Out, To Serve You Best"</p>
<p className="text-teal-400 text-xs uppercase tracking-widest font-semibold">Our Mission</p>
</div>
</div>
<div>
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2 block">About Guild Me All The Way</span>
<h2 className="text-3xl md:text-5xl text-brand-blue font-bold tracking-tight mb-8">Your Trusted Construction Partner in Ghana</h2>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>
                            Guild Me All The Way Building &amp; Construction Works is a premier construction firm based in the Eastern Region. We specialize in transforming architectural visions into concrete reality.
                        </p>
<p>
                            With years of experience in the local market, we have established ourselves as a reliable partner for residential and commercial projects. Whether it's building from the ground up, providing expert consultation, or managing complex projects, we bring dedication and expertise to every site.
                        </p>
</div>
<div className="mt-10 flex gap-6 border-t border-slate-200 pt-8">
<div>
<span className="block text-3xl font-bold text-brand-blue">100+</span>
<span className="text-xs text-slate-500 uppercase">Projects Completed</span>
</div>
<div>
<span className="block text-3xl font-bold text-brand-blue">100%</span>
<span className="text-xs text-slate-500 uppercase">Client Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#005F89] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comprehensive Construction Solutions</h2>
<p className="text-slate-300 font-light">From initial planning to the final coat of paint, we handle every aspect of the building process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 bg-brand-orange flex items-center justify-center rounded-sm mb-6 text-white shadow-lg">
<iconify-icon icon="solar:hammer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">Construction Works</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Complete execution of residential and commercial builds. We handle structural works, masonry, roofing, and renovations with precision.
                    </p>
<ul className="text-sm text-teal-400 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Residential Housing</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Commercial Units</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Renovations</li>
</ul>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 bg-teal-600 flex items-center justify-center rounded-sm mb-6 text-white shadow-lg">
<iconify-icon icon="solar:clipboard-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">Building Consultation</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Expert advice to guide your investment. We assist with architectural planning, material selection, and regulatory compliance.
                    </p>
<ul className="text-sm text-teal-400 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Architectural Guidance</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Cost Estimation</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Site Analysis</li>
</ul>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group">
<div className="w-14 h-14 bg-blue-700 flex items-center justify-center rounded-sm mb-6 text-white shadow-lg border border-white/20">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">Project Management</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        End-to-end supervision ensuring your project is delivered on time and within budget. We manage the teams, the timeline, and the quality.
                    </p>
<ul className="text-sm text-teal-400 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Timeline Management</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Quality Assurance</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Cost Control</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Our Portfolio</span>
<h2 className="text-3xl md:text-4xl text-brand-blue font-bold mt-2">Recent Projects</h2>
</div>
<div className="mt-4 md:mt-0">
<a className="text-sm font-semibold text-brand-blue border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors" href="#contact">
                        Start Your Project
                    </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#005F89]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-orange text-xs font-bold uppercase mb-1">Residential</span>
<h3 className="text-white text-xl font-bold">Modern Villa Design</h3>
<p className="text-slate-200 text-xs mt-2">Full construction and finishing.</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#005F89]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-orange text-xs font-bold uppercase mb-1">Architecture</span>
<h3 className="text-white text-xl font-bold">Contemporary Home</h3>
<p className="text-slate-200 text-xs mt-2">Design consultation and planning.</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#005F89]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-brand-orange text-xs font-bold uppercase mb-1">Managed Build</span>
<h3 className="text-white text-xl font-bold">Luxury Estate</h3>
<p className="text-slate-200 text-xs mt-2">End-to-end project management.</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lg bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-6">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-slate-400">
<iconify-icon icon="solar:camera-add-linear" width="32"></iconify-icon>
</div>
<h3 className="text-slate-500 font-semibold">More Projects Coming Soon</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 skew-x-12 translate-x-32 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Get In Touch</span>
<h2 className="text-4xl text-brand-blue font-bold mt-2 mb-6">Ready to Build Your Dream?</h2>
<p className="text-slate-600 mb-10 leading-relaxed">
                        Contact us today for a consultation or a quote. We are ready to serve you best in Oyoko Koforidua and beyond.
                    </p>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-brand-orange shadow-md rounded-sm flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-brand-blue mb-1">Call Us</h4>
<div className="flex flex-col gap-1">
<a className="text-slate-600 hover:text-brand-orange transition-colors font-medium" href="tel:+233269363193">+233 269 363 193</a>
<a className="text-slate-600 hover:text-brand-orange transition-colors font-medium" href="tel:+233245484233">+233 245 484 233</a>
</div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-brand-orange shadow-md rounded-sm flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-brand-blue mb-1">Visit Us</h4>
<p className="text-slate-600">Oyoko Koforidua, Eastern Region</p>
<p className="text-sm font-semibold text-teal-600 mt-1">GPS: EN-271-3640</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-brand-orange shadow-md rounded-sm flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-brand-blue mb-1">Email Us</h4>
<a className="text-slate-600 hover:text-brand-orange transition-colors" href="mailto:ibrahimgaribakenya@gmail.com">ibrahimgaribakenya@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl border-t-4 border-brand-orange">
<h3 className="text-2xl font-bold text-brand-blue mb-6">Send us a message</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Your Number" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Service Needed</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-slate-600">
<option>Construction Works</option>
<option>Building Consultation</option>
<option>Project Management</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-blue text-white font-bold text-sm uppercase py-4 rounded-sm hover:bg-[#004a6b] transition-colors shadow-lg shadow-blue-900/10">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#00283d] text-slate-400 pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm text-white">
<iconify-icon icon="solar:buildings-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-bold uppercase tracking-wide">Guild Me All The Way</span>
</div>
<p className="text-sm leading-relaxed max-w-sm">
                        "Looking Out, To Serve You Best." <br/>
                        Your premier partner for construction, consultation, and project management in the Eastern Region.
                    </p>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-brand-orange transition-colors" href="#">Residential Build</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Commercial Projects</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Consultation</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Renovations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3"><iconify-icon icon="solar:phone-linear"></iconify-icon> +233 269 363 193</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:letter-linear"></iconify-icon> ibrahimgaribakenya@gmail.com</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Oyoko Koforidua</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs">© 2024 Guild Me All The Way. All rights reserved.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:instagram"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
