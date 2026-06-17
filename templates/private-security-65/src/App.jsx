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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-white text-xl font-medium tracking-tighter hover:opacity-80 transition-opacity" href="#">
                ELARIS
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#services">Expertise</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#locations">London Coverage</a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors duration-200" href="#contact">
                    Secure Inquiry
                </a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-neutral-900/30 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-neutral-900/20 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-fade-in-up">
<span className="inline-block py-1 px-3 border border-white/10 rounded-full bg-white/5 text-xs text-neutral-300 tracking-wide">
                London · International · 24/7
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.1]">
                Invisible protection.<br/>
<span className="text-neutral-500">Absolute peace of mind.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                Elite close protection services for ultra-high-net-worth individuals, diplomats, and corporate executives in London and beyond.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 group" href="#contact">
                    Start Consultation
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-neutral-800 text-white rounded-full font-medium text-sm hover:bg-neutral-900 transition-all duration-300" href="#services">
                    View Services
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-neutral-600" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-32 bg-neutral-950 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Operational Capabilities</h2>
<p className="text-neutral-500 max-w-md">Comprehensive security solutions tailored to the unique lifestyle and risk profile of our clientele.</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">View all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 border border-white/5">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Close Protection</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Discreet, shadow-profile accompaniment for daily movements, social engagements, and business operations.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 border border-white/5">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Residential Security</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        24/7 estate protection integrating advanced surveillance technology with physical presence in London's prime boroughs.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 border border-white/5">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Secure Transit</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Armoured and non-armoured luxury logistical support. Route reconnaissance and counter-surveillance driving.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                        Precision born from <br className="hidden md:block"/>experience.
                    </h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed">
<p>
                            At Elaris, we understand that true security is not about intimidation, but facilitation. Our operatives are drawn exclusively from elite military units and specialist police backgrounds.
                        </p>
<p>
                            Based in Mayfair, we operate with a deep understanding of London's cultural and social landscape. We ensure your safety without compromising your lifestyle, blending seamlessly into any environment from corporate boardrooms to private galas.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<p className="text-3xl text-white font-medium tracking-tight">100%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">SIA Licensed</p>
</div>
<div>
<p className="text-3xl text-white font-medium tracking-tight">24/7</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Command Centre</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-96 lg:h-[32rem] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center space-y-2">
<i className="w-8 h-8 text-neutral-700 mx-auto" data-lucide="map-pin"></i>
<p className="text-xs font-mono text-neutral-700 uppercase tracking-widest">London HQ</p>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950 overflow-hidden" id="locations">
<div className="flex whitespace-nowrap gap-16 animate-marquee text-neutral-600 text-sm font-medium uppercase tracking-widest opacity-60 select-none">
<span>Mayfair</span>
<span>•</span>
<span>Kensington</span>
<span>•</span>
<span>Knightsbridge</span>
<span>•</span>
<span>Chelsea</span>
<span>•</span>
<span>Belgravia</span>
<span>•</span>
<span>The City</span>
<span>•</span>
<span>Canary Wharf</span>
<span>•</span>
<span>Heathrow Private</span>
<span>•</span>
<span>Farnborough</span>
<span>•</span>
<span>Mayfair</span> 
<span>•</span>
<span>Kensington</span>
</div>
</section>

<section className="py-32 bg-neutral-950 relative" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Secure Consultation</h2>
<p className="text-neutral-500">All communications are encrypted and handled with strict confidentiality.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-400 ml-1">Full Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-colors" placeholder="e.g. John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 ml-1">Email Address</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 ml-1">Service Type</label>
<div className="relative">
<select className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-neutral-900 appearance-none transition-colors">
<option>Close Protection</option>
<option>Residential Security</option>
<option>Event Security</option>
<option>Secure Transport</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 ml-1">Message</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-colors resize-none" placeholder="Brief outline of requirements..." rows="4"></textarea>
</div>

<div className="flex items-center gap-3 py-2">
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-400 border-4 border-neutral-900 appearance-none cursor-pointer transition-all duration-300" id="urgent" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700" htmlFor="urgent"></label>
</input></div>
<label className="text-sm text-neutral-400 cursor-pointer select-none" htmlFor="urgent">Mark as urgent inquiry</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-4 rounded-lg hover:bg-neutral-200 transition-colors mt-4" type="submit">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="space-y-4">
<a className="text-white text-lg font-medium tracking-tighter" href="#">ELARIS</a>
<p className="text-neutral-500 text-xs max-w-xs">
                    Registered in England &amp; Wales.<br/>
                    Providing elite security solutions since 2018.
                </p>
</div>
<div className="flex gap-8">
<div className="flex flex-col gap-3">
<h4 className="text-white text-xs font-medium uppercase tracking-wide">Contact</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">info@elaris.co.uk</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">+44 (0) 20 7123 4567</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white text-xs font-medium uppercase tracking-wide">Legal</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-neutral-600 text-xs">© 2023 Elaris Private Protection.</p>
<div className="flex gap-4">
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
</div>
</div>
</footer>


    </>
  );
}
