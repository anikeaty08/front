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
                strokeWidth: 1.5
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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">

<div className="absolute w-full h-full border-t-4 border-r-2 border-[#8B0000] rounded-full rotate-45 transform group-hover:rotate-180 transition-transform duration-700 ease-out"></div>

<div className="w-6 h-4 bg-black rounded-full overflow-hidden flex items-center justify-center relative border border-white/20">
<div className="w-3 h-3 bg-[#0B2C9A] rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-[#FF0000] rounded-full"></div>
</div>
</div>
</div>
<span className="text-xl font-medium tracking-tight text-white">JGC</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex">
<a className="bg-[#8B0000] hover:bg-[#9B0F0F] text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all flex items-center gap-2" href="#contact">
                    Get a Quote <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path className="" d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative bg-black min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="CCTV Monitoring Room" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0B2C9A] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white mb-6 fade-in-up">
<span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse"></span>
                    Now serving the greater South Africa region
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] fade-in-up delay-100">
                    Professional CCTV <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Installation Services.</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-xl font-light leading-relaxed fade-in-up delay-200">
                    Reliable surveillance solutions for homes, businesses, and industrial properties. Clarity you can trust.
                </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
<a className="bg-[#8B0000] hover:bg-[#9B0F0F] text-white text-base font-medium py-3 px-8 rounded-md transition-all text-center flex items-center justify-center gap-2" href="#contact">
                        Request Free Quote <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="bg-transparent border border-white/20 hover:border-white text-white text-base font-medium py-3 px-8 rounded-md transition-all text-center flex items-center justify-center gap-2" href="https://wa.me/">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call / WhatsApp Now
                    </a>
</div>
</div>
</div>
</header>

<section className="bg-[#050505] border-b border-white/5 py-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start gap-3">
<div className="p-3 rounded-full bg-white/5 text-[#8B0000]">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-white font-medium text-lg">Professional Install</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Certified technicians ensuring perfect setup.</p>
</div>
<div className="flex flex-col items-center md:items-start gap-3">
<div className="p-3 rounded-full bg-white/5 text-[#0B2C9A]">
<svg className="lucide lucide-camera w-6 h-6" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-white font-medium text-lg">High-Quality Gear</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Top-tier cameras for crystal clear footage.</p>
</div>
<div className="flex flex-col items-center md:items-start gap-3">
<div className="p-3 rounded-full bg-white/5 text-[#8B0000]">
<svg className="lucide lucide-smartphone w-6 h-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-white font-medium text-lg">Remote Monitoring</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">View your property from anywhere, anytime.</p>
</div>
<div className="flex flex-col items-center md:items-start gap-3">
<div className="p-3 rounded-full bg-white/5 text-[#0B2C9A]">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-white font-medium text-lg">Local Service</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Proudly serving clients across South Africa.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">

<div className="absolute -right-20 top-20 w-[600px] h-[600px] border-[40px] border-neutral-50 rounded-full opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<span className="text-[#8B0000] font-medium tracking-wide uppercase text-xs mb-2 block">Who We Are</span>
<h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
                    Securing your world with <br/>precision and reliability.
                </h2>
<div className="space-y-6 text-xl text-neutral-600 font-light leading-relaxed">
<p className="">
                        Juru Group of Companies (JGC) is a South Africa–based security services provider specializing in professional CCTV installation and surveillance systems.
                    </p>
<p className="">
                        We focus on reliable system design, clean installation, and long-term performance to ensure peace of mind for our clients. Whether for a private residence or a large industrial complex, our eye is always on your safety.
                    </p>
</div>
<div className="mt-8 p-6 bg-neutral-50 border-l-4 border-[#8B0000] rounded-r-lg">
<p className="text-neutral-800 font-medium italic text-lg">
                        "To deliver dependable, high-performance CCTV systems that protect people, property, and businesses."
                    </p>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Technician installing CCTV" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
<div className="flex items-center gap-4 text-white">
<div className="bg-[#0B2C9A] p-2 rounded-full">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium text-lg">Certified Installers</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<span className="text-[#0B2C9A] font-medium tracking-wide uppercase text-xs mb-2 block">Our Expertise</span>
<h2 className="text-4xl font-medium tracking-tight text-neutral-900">Comprehensive Security Services</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-[#8B0000] font-medium hover:text-[#9B0F0F] transition-colors mt-4 md:mt-0" href="#contact">
                    View full catalog <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-[#8B0000]/30 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 text-[#8B0000] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">CCTV Installation</h3>
<p className="text-lg text-neutral-500 mb-6 font-light">
                        We install analogue and IP CCTV systems designed for clear footage, optimal coverage, and reliable recording.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> HD &amp; 4K Options
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Night Vision
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-[#0B2C9A]/30 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-[#0B2C9A] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone-charging w-6 h-6" data-lucide="smartphone-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12.667 8 10 12h4l-2.667 4"></path></svg>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Remote Viewing</h3>
<p className="text-lg text-neutral-500 mb-6 font-light">
                        Access your security feed from anywhere in the world via smartphone, tablet, or PC with zero latency.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> iOS &amp; Android App
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Motion Alerts
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-[#8B0000]/30 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 text-[#8B0000] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-wrench w-6 h-6" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Maintenance &amp; Repairs</h3>
<p className="text-lg text-neutral-500 mb-6 font-light">
                        Fault finding, system upgrades, and routine maintenance to ensure your security never sleeps.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> System Health Check
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Cable Repairs
                        </li>
</ul>
</div>

<div className="md:col-span-3 group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-[#0B2C9A]/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-blue-50 text-[#0B2C9A] rounded-lg flex items-center justify-center">
<svg className="lucide lucide-file-search w-5 h-5" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3 15 18"></path></svg>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight">Security Site Assessments</h3>
</div>
<p className="text-lg text-neutral-500 font-light">
                            Not sure what you need? We conduct thorough on-site assessments to identify blind spots and recommend the most cost-effective security layout for your specific property.
                        </p>
</div>
<div>
<a className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" href="#contact">Book Assessment</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight mb-4">Secured by JGC</h2>
<p className="text-xl text-neutral-400 font-light">Recent installations across residential and commercial sectors.</p>
</div>
<div className="grid md:grid-cols-3 gap-4">

<div className="group relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden cursor-pointer">
<img alt="Residential" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-70 w-full h-full object-cover" src="https://images.unsplash.com/photo-1604163377535-963447eb8d71?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<p className="text-[#8B0000] text-xs font-bold uppercase mb-1">Residential</p>
<h3 className="text-lg font-medium">Home Perimeter Security</h3>
</div>
</div>

<div className="group relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden cursor-pointer">
<img alt="Office" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-70 w-full h-full object-cover" src="https://images.unsplash.com/photo-1728971975421-50f3dc9663a4?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<p className="text-[#0B2C9A] text-xs font-bold uppercase mb-1">Commercial</p>
<h3 className="text-lg font-medium">Corporate Office Monitoring</h3>
</div>
</div>

<div className="group relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden cursor-pointer">
<img alt="Warehouse" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-70 w-full h-full object-cover" src="https://images.unsplash.com/photo-1748605532321-ac24a0ebc667?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<p className="text-white text-xs font-bold uppercase mb-1">Industrial</p>
<h3 className="text-lg font-medium">Warehouse Access Control</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<span className="text-[#8B0000] font-medium tracking-wide uppercase text-xs mb-2 block">Get In Touch</span>
<h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">Ready to secure your property?</h2>
<p className="text-xl text-neutral-500 font-light mb-12">
                        Fill out the form for a free quote, or contact us directly via phone or email. We respond to all inquiries within 24 hours.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-neutral-900" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-medium text-neutral-900">Phone / WhatsApp</h4>
<a className="text-lg text-neutral-600 hover:text-[#8B0000] transition-colors" href="tel:+27123456789">+27 12 345 6789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-neutral-900" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-medium text-neutral-900">Email</h4>
<a className="text-lg text-neutral-600 hover:text-[#8B0000] transition-colors" href="mailto:info@juru.co.za">info@jgc.co.za</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-neutral-900" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-medium text-neutral-900">Service Area</h4>
<p className="text-lg text-neutral-600">Gauteng &amp; Wider South Africa</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all" placeholder="+27..." type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Project Type</label>
<div className="relative">
<select className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all">
<option>New Installation</option>
<option>System Upgrade</option>
<option>Maintenance/Repair</option>
<option>Assessment</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
<textarea className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all" placeholder="Tell us about your security needs..." rows="4"></textarea>
</div>
<button className="w-full bg-[#8B0000] hover:bg-[#9B0F0F] text-white font-medium py-3 rounded-lg transition-all shadow-md shadow-red-900/10" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="text-2xl font-medium tracking-tight text-white">JGC</span>
</a>
<p className="text-neutral-500 text-lg max-w-sm mb-6">
                        Trusted CCTV &amp; Security Solutions. Delivering clarity, vigilance, and authority through technology.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-[#8B0000] transition-colors" href="#">CCTV Installation</a></li>
<li><a className="text-neutral-500 hover:text-[#8B0000] transition-colors" href="#">Remote Access</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-[#8B0000] transition-colors" href="#">About Us</a></li>
<li><a className="text-neutral-500 hover:text-[#8B0000] transition-colors" href="#">Our Projects</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-sm">© 2025 Juru Group of Companies. All rights reserved.</p>
<div className="flex items-center gap-2 text-neutral-600 text-sm">
<span className="w-2 h-2 rounded-full bg-[#0B2C9A]"></span>
                    Operating in South Africa
                </div>
</div>
</div>
</footer>


    </>
  );
}
