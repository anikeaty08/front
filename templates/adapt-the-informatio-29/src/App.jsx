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
      

<header className="bg-amber-400 border-b-2 border-slate-900">
<div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-slate-900 text-amber-400 flex items-center justify-center rounded-sm">
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
</div>
<span className="text-2xl font-semibold tracking-tight uppercase">Bright Star</span>
</div>

<nav className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:underline underline-offset-4" href="#">Home</a>
<a className="hover:underline underline-offset-4" href="#">Services</a>
<a className="hover:underline underline-offset-4" href="#">About Us</a>
<a className="hover:underline underline-offset-4" href="#">Contact</a>
</nav>

<div className="border-2 border-slate-900 px-6 py-2 bg-amber-100 flex items-center gap-3 shadow-sm">
<i className="w-5 h-5" data-lucide="phone"></i>
<div className="text-xs leading-tight">
<div className="font-semibold uppercase">Call Us Now</div>
<div className="text-base font-semibold">0333 335 6113</div>
</div>
</div>
</div>
</header>

<section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900 overflow-hidden border-b-2 border-slate-900">

<img alt="London Skyline" className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-amber-400 border-2 border-slate-900 px-10 py-6 flex flex-col items-center gap-2 sharp-shadow transform -rotate-2">
<div className="flex items-center gap-3">
<i className="w-10 h-10 text-slate-900" data-lucide="sparkles"></i>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase text-slate-900">Bright Star</h1>
</div>
<div className="text-xs font-bold uppercase tracking-widest text-slate-900 border-t-2 border-slate-900 pt-2 w-full text-center">
                    Property Maintenance &amp; Renovations
                </div>
</div>
</div>
</section>

<section className="py-20 md:py-28">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Reliable Solutions<br/>Across Greater London
                    </h2>
<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Maintenance | Repairs | Renovations
                    </p>
<p className="text-lg text-slate-600 leading-relaxed">
                        Bright Star Solutions specializes in holistic property care. From emergency repairs to full-scale renovations, we provide dedicated service across Greater London. Whether you need a locksmith, a roofer, or a complete heating system installation, we are your trusted partner.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 text-base font-medium flex items-center justify-between gap-4 transition-all hover:bg-slate-50">
                            Our Services <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-2 px-4 py-4">
<span className="text-lg font-semibold">Call: 0333 335 6113</span>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-end">
<div className="relative w-full max-w-md h-80 border-2 border-slate-900 bg-slate-50 rounded-lg p-8 flex items-center justify-center sharp-shadow">
<i className="absolute top-4 right-4 w-24 h-24 text-slate-200 rotate-45" data-lucide="wrench" strokeWidth="1"></i>
<i className="absolute bottom-4 left-4 w-32 h-32 text-slate-200" data-lucide="home" strokeWidth="1"></i>
<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-amber-500" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-semibold">Greater London</h3>
<p className="text-slate-500 mt-2">Local &amp; Trusted</p>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-slate-200 flex flex-wrap justify-center md:justify-start items-center gap-12 opacity-80">

<div className="flex items-center gap-3">
<div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center bg-yellow-400">
<i className="w-6 h-6 text-slate-900" data-lucide="zap"></i>
</div>
<div>
<span className="block font-bold text-lg leading-none">NICEIC</span>
<span className="text-xs uppercase font-semibold tracking-wider">Approved Contractor</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center bg-slate-200">
<i className="w-6 h-6 text-slate-900" data-lucide="shield-check"></i>
</div>
<div>
<span className="block font-bold text-lg leading-none">SafeContractor</span>
<span className="text-xs uppercase font-semibold tracking-wider">Approved</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center bg-yellow-400">
<i className="w-6 h-6 text-slate-900" data-lucide="flame"></i>
</div>
<div>
<span className="block font-bold text-lg leading-none">Gas Safe</span>
<span className="text-xs uppercase font-semibold tracking-wider">Registered</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">What We Do</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">Our Services</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Comprehensive property solutions for homes and businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-orange-400 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-orange-400 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="thermometer"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Boiler &amp; Heating</h3>
</div>
<p className="text-sm font-medium opacity-90">Installations, repairs, and servicing for all heating systems.</p>
</div>

<div className="bg-amber-300 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-amber-300 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Plumbing</h3>
</div>
<p className="text-sm font-medium opacity-90">Emergency leaks, bathrooms, blockages, and general pipework.</p>
</div>

<div className="bg-lime-400 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-lime-400 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Electrical</h3>
</div>
<p className="text-sm font-medium opacity-90">Rewiring, testing, lighting, and certification (NICEIC).</p>
</div>

<div className="bg-white border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="paint-bucket"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Decorating</h3>
</div>
<p className="text-sm font-medium opacity-90 text-slate-600">Interior and exterior painting, wallpapering, and finishing.</p>
</div>

<div className="bg-white border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="triangle"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Roofing</h3>
</div>
<p className="text-sm font-medium opacity-90 text-slate-600">Repairs, new roofs, guttering, and weather-proofing.</p>
</div>

<div className="bg-lime-400 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-lime-400 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Flooring</h3>
</div>
<p className="text-sm font-medium opacity-90">Hardwood, laminate, tiling, and carpet installation.</p>
</div>

<div className="bg-amber-300 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-amber-300 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Lock Smiths</h3>
</div>
<p className="text-sm font-medium opacity-90">Emergency entry, lock changes, and security upgrades.</p>
</div>

<div className="bg-orange-400 border-2 border-slate-900 p-6 flex flex-col justify-between h-full min-h-[250px] sharp-shadow transition-transform hover:-translate-y-1">
<div className="mb-4">
<div className="w-10 h-10 bg-slate-900 text-orange-400 flex items-center justify-center rounded-sm mb-4">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-bold leading-tight">Contract Cleaning</h3>
</div>
<p className="text-sm font-medium opacity-90">Regular commercial cleaning, end of tenancy, and deep cleans.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Renovations &amp; Maintenance</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 leading-tight">
                    Complete Property Care Under One Roof
                </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    At Bright Star Solutions, we streamline property management by offering every trade you need. From the roof to the floor, our certified experts handle it all. Whether you require a Gas Safe registered engineer for your boiler, an NICEIC approved electrician for rewiring, or skilled decorators to freshen up your space, we deliver high-quality results.
                </p>
<ul className="space-y-3 mb-8 text-slate-700 font-medium">
<li className="flex items-center gap-3"><i className="text-amber-500 w-5 h-5" data-lucide="check-circle"></i> Fully insured and certified professionals</li>
<li className="flex items-center gap-3"><i className="text-amber-500 w-5 h-5" data-lucide="check-circle"></i> Coverage across all of Greater London</li>
<li className="flex items-center gap-3"><i className="text-amber-500 w-5 h-5" data-lucide="check-circle"></i> Competitive pricing for all trades</li>
</ul>
<button className="bg-white border-2 border-slate-900 px-8 py-3 font-semibold flex items-center gap-3 hover:bg-slate-50 transition-colors btn-hover">
                    Get A Quote <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="order-1 lg:order-2 flex justify-center">
<div className="relative w-full max-w-lg aspect-square">
<i className="absolute inset-0 w-full h-full text-slate-100" data-lucide="home" strokeWidth="0.5"></i>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-32 h-32 text-slate-800" data-lucide="hammer" strokeWidth="1"></i>
</div>

<i className="absolute top-10 right-10 w-16 h-16 text-slate-300" data-lucide="key"></i>
<i className="absolute bottom-10 left-10 w-16 h-16 text-slate-300" data-lucide="paint-brush"></i>
</div>
</div>
</div>
</section>

<section className="py-32 bg-lime-400 border-y-2 border-slate-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<i className="w-[500px] h-[500px] text-slate-900 stroke-[0.5]" data-lucide="megaphone"></i>
</div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="max-w-2xl mx-auto">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-800 opacity-60">Contact Us</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-4 mb-4 text-slate-900">
                    Get In Touch
                </h2>
<p className="text-lg font-medium mb-6">For service inquiries or assistance, don't hesitate to contact us.</p>
<div className="text-3xl md:text-4xl font-bold mb-8">0333 335 6113</div>
<button className="bg-transparent border-2 border-slate-900 px-10 py-3 font-semibold text-lg flex items-center gap-3 mx-auto hover:bg-slate-900 hover:text-white transition-colors">
                    Contact Form <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="bg-white py-16">
<div className="container mx-auto px-6 flex flex-col items-center gap-8">

<div className="bg-amber-400 border-2 border-slate-900 px-8 py-3 flex items-center gap-3 sharp-shadow-sm">
<i className="w-6 h-6 text-slate-900 fill-slate-900" data-lucide="star"></i>
<span className="text-xl font-bold uppercase tracking-tight">Bright Star Solutions</span>
</div>

<div className="flex gap-4">
<a className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="phone"></i>
</a>
<a className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail"></i>
</a>
</div>
<div className="text-center text-sm font-medium text-slate-600 max-w-lg">
                Property Maintenance and Renovations Across Greater London.<br/>
                Boiler &amp; Heating • Plumbing • Electrical • Decorating • Roofing • Flooring • Lock Smiths • Contract Cleaning
            </div>

<div className="border-2 border-slate-900 px-8 py-4 w-full max-w-sm text-center">
<div className="flex items-center justify-center gap-2 font-bold text-sm">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                    Call Us Today:
                </div>
<div className="font-bold text-lg mt-1">0333 335 6113</div>
</div>
</div>
</footer>


    </>
  );
}
