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
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-950 text-white flex items-center justify-center serif italic group-hover:bg-[#C5A059] transition-colors duration-500">
            D
          </div>
<span className="serif text-xl tracking-tighter text-zinc-900">
            Door
            <span className="text-zinc-400">Holdings</span>
</span>
</a>
<div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
<a className="hover:text-[#C5A059] transition-colors" href="#vision">
            Vision
          </a>
<a className="hover:text-[#C5A059] transition-colors" href="#expertise">
            Expertise
          </a>
<a className="hover:text-[#C5A059] transition-colors" href="#journal">
            Journal
          </a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] border border-zinc-200 px-6 py-3 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-500" href="#inquire">
<span>Private Access</span>
</a>
<button className="md:hidden text-2xl text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-90 brightness-[0.85]" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-3 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
<span className="text-[11px] uppercase tracking-[0.2em] text-white font-medium">
            Celebrating 15 Years of Excellence
          </span>
</div>
<h1 className="serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.9] mb-8 font-light">
          The Art of
          <br/>
<span className="italic font-normal">Invisible</span>
          Management.
        </h1>
<p className="text-zinc-200 text-sm md:text-base font-light leading-relaxed mb-12 max-w-lg mx-auto tracking-wide">
          We bridge the gap between investment strategy and white-glove
          hospitality, ensuring your portfolio appreciates while you live
          effortlessly.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-white text-zinc-950 px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-white transition-colors duration-500 min-w-[200px]" href="#expertise">
            Our Approach
          </a>
<a className="text-white border border-white/30 px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-zinc-950 transition-all duration-500 min-w-[200px]" href="#inquire">
            Inquire Now
          </a>
</div>
</div>
<div className="absolute bottom-12 left-0 w-full flex justify-center animate-pulse">
<iconify-icon className="text-white/50 text-2xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<div className="bg-zinc-950 text-white border-b border-zinc-900">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-zinc-800/50">
<div className="px-6 first:pl-0 text-center md:text-left">
<p className="serif text-3xl md:text-4xl text-[#C5A059] mb-1">$1.2B</p>
<p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Assets Under Management
            </p>
</div>
<div className="px-6 text-center md:text-left">
<p className="serif text-3xl md:text-4xl text-[#C5A059] mb-1">98%</p>
<p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Occupancy Rate
            </p>
</div>
<div className="px-6 text-center md:text-left">
<p className="serif text-3xl md:text-4xl text-[#C5A059] mb-1">24/7</p>
<p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Concierge Availability
            </p>
</div>
<div className="px-6 text-center md:text-left">
<p className="serif text-3xl md:text-4xl text-[#C5A059] mb-1">NYC</p>
<p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Primary Headquarters
            </p>
</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-zinc-50" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3">
<span className="text-[#C5A059] text-[10px] uppercase tracking-[0.25em] font-medium block mb-6">
              Our Philosophy
            </span>
<h2 className="serif text-4xl md:text-5xl tracking-tighter text-zinc-900 leading-[1.1] mb-8">
              Preservation
              <br/>
<span className="text-zinc-400 italic font-light">&amp;</span>
              Progress
            </h2>
<div className="w-12 h-[1px] bg-[#C5A059] mb-8"></div>
<p className="text-zinc-500 font-light leading-7 text-sm mb-6">
              We believe that true luxury lies in the details that go unnoticed.
              It is the silent efficiency of a well-run home and the strategic
              foresight of a well-managed asset.
            </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-900 hover:text-[#C5A059] transition-colors mt-4" href="#">
              Read the Founder's Letter
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
<div className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors duration-500 group">
<iconify-icon className="text-3xl text-zinc-300 group-hover:text-[#C5A059] transition-colors mb-6" icon="solar:key-square-linear"></iconify-icon>
<h3 className="serif text-xl tracking-tight mb-3">
                Owner-First Mindset
              </h3>
<p className="text-zinc-500 text-xs leading-relaxed font-light">
                We manage every property with the fiscal discipline and
                protective instinct of an owner, focusing on long-term equity
                preservation.
              </p>
</div>
<div className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors duration-500 group">
<iconify-icon className="text-3xl text-zinc-300 group-hover:text-[#C5A059] transition-colors mb-6" icon="solar:wineglass-linear"></iconify-icon>
<h3 className="serif text-xl tracking-tight mb-3">
                Lifestyle curation
              </h3>
<p className="text-zinc-500 text-xs leading-relaxed font-light">
                Beyond maintenance, we offer lifestyle management, ensuring the
                resident experience is nothing short of extraordinary.
              </p>
</div>
<div className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors duration-500 group">
<iconify-icon className="text-3xl text-zinc-300 group-hover:text-[#C5A059] transition-colors mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="serif text-xl tracking-tight mb-3">
                Transparent Reporting
              </h3>
<p className="text-zinc-500 text-xs leading-relaxed font-light">
                Real-time financial dashboards and detailed operational reports
                provide you with absolute clarity and control.
              </p>
</div>
<div className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors duration-500 group">
<iconify-icon className="text-3xl text-zinc-300 group-hover:text-[#C5A059] transition-colors mb-6" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="serif text-xl tracking-tight mb-3">Risk Mitigation</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-light">
                Proactive compliance management and preventative maintenance
                strategies to forestall issues before they arise.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[60vh] overflow-hidden">
<img alt="Architecture Detail" className="w-full h-full object-cover grayscale contrast-[1.1]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-zinc-900/30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-md p-12 md:p-16 border border-white/20 text-center max-w-2xl mx-6">
<iconify-icon className="text-4xl text-white/80 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<p className="serif text-2xl md:text-3xl text-white leading-relaxed italic mb-8 font-light">
            "They don't just maintain the building; they elevate the entire
            experience of ownership."
          </p>
<div className="flex justify-center items-center gap-4">
<span className="h-px w-8 bg-[#C5A059]"></span>
<p className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">
              Jonathan Sterling, Manhattan
            </p>
<span className="h-px w-8 bg-[#C5A059]"></span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="inquire">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="serif text-4xl tracking-tighter mb-4 text-zinc-900">
            Request a Consultation
          </h2>
<p className="text-zinc-500 font-light text-sm max-w-lg mx-auto">
            We invite you to discuss your portfolio's specific needs with our
            principal team.
          </p>
</div>
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium group-focus-within:text-[#C5A059] transition-colors">
                Full Name
              </label>
<input className="w-full border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent placeholder-zinc-300 font-light" placeholder="e.g. Alexander Pierce" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium group-focus-within:text-[#C5A059] transition-colors">
                Email Address
              </label>
<input className="w-full border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent placeholder-zinc-300 font-light" placeholder="e.g. alexander@company.com" type="email"/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium group-focus-within:text-[#C5A059] transition-colors">
              Interest Area
            </label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="border border-zinc-200 px-6 py-4 text-center text-xs text-zinc-500 uppercase tracking-wider hover:border-zinc-400 peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] transition-all">
                  Property Management
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="border border-zinc-200 px-6 py-4 text-center text-xs text-zinc-500 uppercase tracking-wider hover:border-zinc-400 peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] transition-all">
                  Asset Strategy
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="border border-zinc-200 px-6 py-4 text-center text-xs text-zinc-500 uppercase tracking-wider hover:border-zinc-400 peer-checked:border-[#C5A059] peer-checked:text-[#C5A059] transition-all">
                  Partnership
                </div>
</label>
</div>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium group-focus-within:text-[#C5A059] transition-colors">
              Message
            </label>
<textarea className="w-full border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent placeholder-zinc-300 font-light resize-none" placeholder="Tell us about your portfolio..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-4">
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 mr-3 flex items-center justify-center transition-colors group-hover:border-[#C5A059]">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                I agree to the privacy policy
              </span>
</label>
<button className="bg-zinc-950 text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] transition-colors duration-300 flex items-center gap-3" type="submit">
              Submit Inquiry
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5">
<a className="flex items-center gap-2 mb-8" href="#">
<div className="w-8 h-8 bg-white text-zinc-950 flex items-center justify-center serif italic">
                D
              </div>
<span className="serif text-xl tracking-tighter text-white">
                Door
                <span className="text-zinc-600">Holdings</span>
</span>
</a>
<p className="text-sm font-light leading-relaxed max-w-sm mb-8 text-zinc-500">
              Defining the standard for luxury property management since 2009.
              We serve a global clientele with offices in New York, Miami, and
              London.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#C5A059] hover:border-[#C5A059] transition-all rounded-full" href="#">
<iconify-icon className="text-lg" icon="solar:brand-linkedin-linear"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#C5A059] hover:border-[#C5A059] transition-all rounded-full" href="#">
<iconify-icon className="text-lg" icon="solar:brand-instagram-linear"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">
              Company
            </h4>
<ul className="space-y-4 text-xs tracking-wide">
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Services
                </a>
</li>
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Press
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">
              Legal
            </h4>
<ul className="space-y-4 text-xs tracking-wide">
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Terms of Use
                </a>
</li>
<li>
<a className="hover:text-[#C5A059] transition-colors" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">
              Contact
            </h4>
<ul className="space-y-4 text-xs tracking-wide font-light">
<li>+1 (212) 555-0199</li>
<li>hello@doorholdings.com</li>
<li className="pt-4 text-zinc-600">
                15 Hudson Yards
                <br/>
                New York, NY 10001
              </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-10">
<p className="text-[10px] uppercase tracking-[0.1em] text-zinc-600">
            © 2024 Door Holdings &amp; Management
          </p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-1.5 h-1.5 rounded-full bg-green-900 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              System Operational
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
