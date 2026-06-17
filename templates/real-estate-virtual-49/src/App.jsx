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



        // Initialize Lucide icons
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
      

<nav className="border-b border-white/5 bg-[#0A0A0A] py-5 px-6 lg:px-12 sticky top-0 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="bg-[#FF6600] text-white p-1.5 rounded-sm text-sm font-semibold leading-none">
                    360
                </div>
<div className="flex flex-col">
<span className="text-white font-semibold text-lg leading-tight tracking-tight">EstateCapture</span>
<span className="text-[#FF6600] text-[0.65rem] font-semibold tracking-widest uppercase leading-tight">Virtual Tours</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">HOME</a>
<a className="hover:text-white transition-colors" href="#">ABOUT</a>
<a className="text-[#FF6600] border-b-2 border-[#FF6600] pb-1" href="#">SERVICES</a>
<a className="hover:text-white transition-colors" href="#">CONTACT</a>
</div>

<a className="hidden md:inline-block bg-[#FF6600] hover:bg-[#e65c00] text-white text-sm font-semibold px-6 py-2.5 rounded-sm transition-colors uppercase tracking-wide" href="#">
                Get Quote
            </a>

<button className="md:hidden text-white">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative pt-24 pb-32 px-6 lg:px-12 bg-[#0A0A0A] overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 80% 50%, #FF6600 0%, transparent 40%)', mixBlendMode: 'screen'}}></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-0.5 bg-[#FF6600]"></div>
<span className="text-[#FF6600] text-sm font-semibold tracking-widest uppercase">What We Offer</span>
</div>
<h1 className="text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Our <span className="text-[#FF6600]">Services</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed">
                    From full 3D walkthroughs to floor plans and documentation — everything you need to show your property online.
                </p>
</div>
<div className="md:w-1/2 hidden md:block">

</div>
</div>
</header>

<section className="bg-[#0f0f11] py-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="House" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">01</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">3D Virtual Tours</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Full 360° interactive walkthroughs of your entire property. Clients can explore every room, hallway, and corner as if they're physically there.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Full property scan</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Interactive navigation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">HD image quality</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Mobile &amp; desktop ready</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="City" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">02</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="home" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Real Estate Photography</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Professional 360° photography for listings that convert browsers into serious buyers. Stand out in any market with immersive visuals.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">HDR photography</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Virtual staging option</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Fast delivery</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">MLS-ready formats</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="Plans" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">03</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Digital Floor Plans</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Accurate 2D and 3D floor plans generated from our scan data. Perfect for listings, permits, insurance, and space planning.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Millimeter accuracy</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">2D &amp; 3D formats</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Measurement tools</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">CAD export available</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="Sharing" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">04</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="share-2" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Shareable Tour Links</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Every tour gets a simple link you can share anywhere — email, social media, WhatsApp, your website, or any listing platform.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Instant sharing</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Embed on websites</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">No app required</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Works on all devices</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="Construction" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">05</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="hard-hat" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Construction Progress Docs</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Track your build stage by stage with 3D documentation. Compare scans over time and keep visual records for every stakeholder.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Before &amp; after comparisons</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Timeline documentation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Investor reporting</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Dispute prevention</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-md overflow-hidden relative group">
<div className="h-56 relative overflow-hidden">
<img alt="Insurance" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 text-7xl font-semibold text-[#FF6600]/20 tracking-tighter">06</div>
</div>
<div className="absolute top-56 -translate-y-1/2 left-8 bg-[#FF6600] w-12 h-12 flex items-center justify-center rounded-sm z-10">
<i className="w-6 h-6 text-white" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div className="p-8 pt-12 border border-white/5 border-t-0 rounded-b-md">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Insurance Documentation</h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Detailed property scans for insurance purposes. Clear, timestamped records that protect you and streamline any claims process.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Legal-grade documentation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Timestamped records</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Before-loss capture</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#FF6600]"></div>
<span className="text-sm text-neutral-300">Claims support</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-0.5 bg-[#FF6600]"></div>
<span className="text-[#FF6600] text-sm font-semibold tracking-widest uppercase">How It Works</span>
<div className="w-10 h-0.5 bg-[#FF6600]"></div>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-20 text-center">
                Simple. Fast. <span className="text-[#FF6600]">Done.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#FF6600] text-white flex items-center justify-center text-2xl font-semibold mb-6">
                        01
                    </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Book a Scan</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-[240px]">
                        Contact us and schedule a time that works for you. We'll confirm within hours.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 border-2 border-[#FF6600] text-[#FF6600] flex items-center justify-center text-2xl font-semibold mb-6">
                        02
                    </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">We Visit &amp; Scan</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-[240px]">
                        Our team arrives on time, sets up our equipment, and completes the full scan in a few hours.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#FF6600] text-white flex items-center justify-center text-2xl font-semibold mb-6">
                        03
                    </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">We Process It</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-[240px]">
                        Our specialists process the raw scan data into a beautiful, interactive virtual tour.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 border-2 border-[#FF6600] text-[#FF6600] flex items-center justify-center text-2xl font-semibold mb-6">
                        04
                    </div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">You Share It</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-[240px]">
                        You receive a ready-to-share link. Embed it on your site or send it directly to clients.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FF6600] py-20 px-6 lg:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Ready to Get Started?
                </h2>
<p className="text-lg text-white/90">
                    Book a scan and we'll get back to you within one business day.
                </p>
</div>
<a className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white text-sm font-semibold px-8 py-4 rounded-sm transition-colors uppercase tracking-wide shrink-0" href="#">
                Book a Scan
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>

<div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20rem] font-semibold text-black/10 leading-none pointer-events-none tracking-tighter hidden lg:block">
            3D
        </div>
</section>

<footer className="bg-[#0A0A0A] pt-24 pb-8 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="lg:pr-8">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="bg-[#FF6600] text-white p-1.5 rounded-sm text-sm font-semibold leading-none">
                            360
                        </div>
<div className="flex flex-col">
<span className="text-white font-semibold text-lg leading-tight tracking-tight">EstateCapture</span>
<span className="text-[#FF6600] text-[0.65rem] font-semibold tracking-widest uppercase leading-tight">Virtual Tours</span>
</div>
</a>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We turn real spaces into immersive 3D virtual experiences. See it. Share it. Sell it.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">About</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Services</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Industries</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Real Estate</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Construction</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Commercial</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Retail Spaces</a></li>
<li><a className="text-sm text-neutral-400 hover:text-[#FF6600] transition-colors" href="#">Insurance</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#FF6600] mt-0.5 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="tel:+15551234567">+1 (555) 123-4567</a>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#FF6600] mt-0.5 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="mailto:hello@360estatecapture.com">hello@360estatecapture.com</a>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#FF6600] mt-0.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-400">Available Nationwide</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">
                    © 2026 360EstateCapture. All rights reserved.
                </p>
<div className="text-xs text-neutral-500">
                    3D Virtual Tours • 360° Walkthroughs • Property Scanning
                </div>
</div>
</div>
</footer>


    </>
  );
}
