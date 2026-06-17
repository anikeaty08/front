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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon height="20" icon="solar:settings-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">Speed Plumbing</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Service Areas</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Gallery</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Contact</a>
</div>
<a className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2" href="tel:3232952245">
                (323) 295-2245
                <iconify-icon height="16" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/80 to-sky-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-medium tracking-wide uppercase text-sm">#The Best Plumbing Company in California</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    When In Need, Call Speed.
                </h1>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900 object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-medium text-white">4.9</span>
<div className="flex text-orange-500">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<p className="text-slate-300 text-sm">Top-rated plumbers in Los Angeles</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Get a Pricing Quote</h3>
<p className="text-slate-300 text-sm mb-8">Schedule your complimentary, on-site consultation with our plumbing experts.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">First name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Last name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-slate-300">Choice Service</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">General Plumbing Services</option>
<option className="text-slate-900">Repair and Replacement</option>
<option className="text-slate-900">Plumbing Installation</option>
<option className="text-slate-900">Drain &amp; Sewer</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-slate-300 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-slate-300">How can we help?</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="1"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full mt-4 transition-colors" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Residential Plumbing</span>
<span className="text-orange-500">•</span>
<span>Commercial Plumbing</span>
<span className="text-orange-500">•</span>
<span>Repair &amp; Replacement</span>
<span className="text-orange-500">•</span>
<span>Drain &amp; Sewer</span>
<span className="text-orange-500">•</span>
<span>Specialty Services</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">24<span className="text-orange-500 text-2xl align-top">/7</span></p>
<p className="text-slate-500 text-sm font-medium">Emergency Services</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">2000<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Projects Completed</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Customer Satisfaction</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-medium text-sky-900 mb-2">3<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Decades of Experience</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-6">WHY SPEED PLUMBING</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sky-950 tracking-tight leading-tight mb-6">
                    Welcome to Speed Plumbing 2000, Inc.
                </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                    When you need a plumber and you need them fast, be sure to contact us! Homeowners all over the city entrust all their repair, replacement, and installation needs to our prompt, knowledgeable, and courteous plumbing technicians.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-sky-900 font-medium">Residential Plumbing Services</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-sky-900 font-medium">Commercial Plumbing Systems</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-sky-900 font-medium">Specialty Plumbing Coverage</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Plumbing Materials and Pipes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607472586893-edb57cb5b2e1?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    What We Do
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    Being a full-service plumbing provider for several decades has established Speed Plumbing 2000, Inc. as the local authority in Los Angeles County.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">01.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Maintenance</h3>
<p className="text-slate-500 leading-relaxed text-sm">Maintaining a plumbing system, regardless of its size, scale, or service-capacity, is always best left to trained professionals.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">02.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Installations</h3>
<p className="text-slate-500 leading-relaxed text-sm">Be it installing a new water heater or completely revamping the property's main water lines; it's always a safe bet with us.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">03.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">(Re)Piping Services</h3>
<p className="text-slate-500 leading-relaxed text-sm">Many older pipes will start to leak water or sediment, debris, and contaminants will be present if they need replacing.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">04.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:settings-minimalistic-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Repairs</h3>
<p className="text-slate-500 leading-relaxed text-sm">Our in-house plumbing specialists combine speed with precision when affecting our world-class plumbing repairs.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">05.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Specialty Plumbing</h3>
<p className="text-slate-500 leading-relaxed text-sm">For those "one-off" plumbing projects that clearly fall outside standard repair or installation, we offer specialty coverage.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">06.</span>
<div className="mb-6 text-sky-700">
<iconify-icon height="40" icon="solar:bath-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Designs</h3>
<p className="text-slate-500 leading-relaxed text-sm">An optimized plumbing system can boost property value overall but it also reduces consumption and utility bills each month.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center md:text-left">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">PROJECTS</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    Our Recent Work
                </h2>
<p className="text-lg text-slate-500 max-w-2xl">
                    Take a look at some of the high-quality plumbing installations and repairs we've completed across Los Angeles County.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Project 1 - Plumbing Materials" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight">Commercial Pipe Installation</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Gallery</span>
</div>
</div>
<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Project 2 - Pipe Fittings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight">Residential Water Heater Upgrade</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Gallery</span>
</div>
</div>
<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Project 3 - Industrial Valves" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-2 leading-tight">Main Line Repair in Inglewood</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Gallery</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Proudly serving local businesses and communities across California</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
<div className="flex items-center gap-2 font-medium text-xl"><iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon> Commercial</div>
<div className="flex items-center gap-2 font-medium text-xl"><iconify-icon height="24" icon="solar:record-circle-linear" width="24"></iconify-icon> Residential</div>
<div className="flex items-center gap-2 font-medium text-xl"><iconify-icon height="24" icon="solar:triangle-linear" width="24"></iconify-icon> Industrial</div>
<div className="flex items-center gap-2 font-medium text-xl"><iconify-icon height="24" icon="solar:danger-triangle-linear" width="24"></iconify-icon> Emergency</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" height="20" icon="solar:settings-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">Speed Plumbing 2000</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        We handle repairs, replacements, and maintenance for all plumbing systems with expertise and efficiency across Los Angeles County.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Home</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> About Us</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Services</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Service Areas</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Gallery</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:3232952245">(323) 295-2245</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@speedplumbing2000.com">info@speedplumbing2000.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Office Location</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        7411 Crenshaw Blvd.<br/>
                        Los Angeles, CA 90043<br/><br/>
                        Mon-Fri: 8:00am - 12:00pm<br/>
                        24/7 Emergency Services
                    </p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2025 Speed Plumbing 2000, Inc. All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="16" icon="solar:link-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
