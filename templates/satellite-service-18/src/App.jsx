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



        // Scroll Reveal Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Navbar Blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.remove('shadow-sm');
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b border-slate-200/50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:satellite-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg tracking-tighter text-slate-900 font-semibold uppercase">DASM</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-slate-900 hover:text-orange-600 flex items-center gap-1.5 transition-colors" href="tel:+923214289434">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        +92 321 4289434
                    </a>
<a className="bg-slate-900 text-white text-sm px-4 py-2 rounded-full hover:bg-slate-800 transition-all" href="#contact">
                        Book Service
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden gradient-mesh text-white min-h-[90vh] flex items-center">

<div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark-glass-card text-xs text-slate-300 mb-6 border border-slate-700">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Open Now until 10 PM in Halloki
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
                        Expert Dish Antenna &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Satellite Services</span> in Halloki
                    </h1>
<p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl font-light">
                        Professional dish installation, satellite alignment, signal fixing, and receiver setup for homes and businesses with fast local service.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition-all glow-button-orange group" href="tel:+923214289434">
<iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            Call Now
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white px-6 py-3 rounded-full text-sm font-medium border border-slate-700 backdrop-blur-sm transition-all group" href="https://wa.me/923214289434" target="_blank">
<iconify-icon className="text-lg text-green-400 group-hover:scale-110 transition-transform" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp Us
                        </a>
<a className="inline-flex justify-center items-center gap-2 text-slate-300 hover:text-white px-4 py-3 text-sm font-medium transition-colors" href="#contact">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Get Directions
                        </a>
</div>

<div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs text-slate-300">A</div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900 flex items-center justify-center text-xs text-slate-300">M</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-slate-300">S</div>
</div>
<div>
<div className="flex items-center gap-1 text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-slate-400 mt-0.5">4.0/5 Google Rating from local customers</p>
</div>
</div>
</div>

<div className="hidden lg:block relative h-[500px] w-full reveal delay-200">
<div className="absolute inset-0 dark-glass-card rounded-3xl overflow-hidden flex items-center justify-center">

<div className="relative w-64 h-64">
<div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-slate-600/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-8 border border-slate-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)]">
<iconify-icon className="text-3xl text-white" icon="solar:satellite-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[1px]"></div>
<div className="absolute bottom-1/4 right-0 w-2 h-2 bg-orange-400 rounded-full blur-[1px]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200 py-4 shadow-sm relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:user-check-linear"></iconify-icon>
                    Experienced Technician
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:routing-2-linear"></iconify-icon>
                    Fast Local Service
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                    Affordable Rates
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:screencast-2-linear"></iconify-icon>
                    Reliable Signal Solutions
                </div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 overflow-hidden relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
<div className="glass-card rounded-2xl p-8 shadow-sm">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4">Trusted Local Experts in Halloki</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            Dish Antenna and Satellite Master is a specialized communication service provider based in Main Bazzar, Halloki. We pride ourselves on delivering crystal-clear TV signals and robust satellite setups.
                        </p>
<div className="flex items-center gap-4 text-sm font-medium text-slate-900 border-t border-slate-100 pt-6">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-orange-500">10+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</span>
</div>
<div className="w-px h-8 bg-slate-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-orange-500">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Local Focus</span>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<h2 className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">About Our Service</h2>
<h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">Your clear connection is our top priority.</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed font-light">
                        We understand the frustration of a weak signal or a misaligned dish. Our focus is on providing honest, high-quality technical work that ensures your home entertainment or business communication runs without interruption. 
                    </p>
<ul className="space-y-4 text-sm text-slate-700">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Specialized in complex receiver setups and fine tuning.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced diagnostic tools for quick signal troubleshooting.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Commitment to clean wiring and professional installation.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Our Capabilities</h2>
<h3 className="text-3xl md:text-4xl text-slate-900 mb-4">Complete Satellite Solutions</h3>
<p className="text-sm text-slate-500 font-light">From new installations to complex signal repairs, we handle all aspects of satellite communication for homes and businesses in Halloki.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:satellite-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Dish Installation</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Complete setup of new dish antennas on rooftops or walls with secure mounting.</p>
</div>

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:radar-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Dish Alignment</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Precision adjustment of existing dishes to maximize signal strength and picture quality.</p>
</div>

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal delay-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:screencast-2-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Signal Troubleshooting</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Diagnosing and fixing weak, freezing, or lost signals efficiently.</p>
</div>

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:tv-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Receiver Setup &amp; Tuning</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Programming, scanning channels, and configuring satellite receivers.</p>
</div>

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">LNB Replacement</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Testing and replacing faulty LNBs to restore communication link.</p>
</div>

<div className="group border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-slate-50/50 reveal delay-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-orange-500 transition-colors" icon="solar:link-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Cable Repair &amp; Rewiring</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-4">Fixing damaged cables and performing clean rewiring for better aesthetics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 skew-x-12 translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2">The DASM Advantage</h2>
<h3 className="text-3xl md:text-4xl mb-8">Why locals trust our technical expertise.</h3>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<iconify-icon className="text-2xl text-orange-400 shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Fast Response</h4>
<p className="text-xs text-slate-400 font-light">Quick local dispatch in Halloki area.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-2xl text-orange-400 shrink-0" icon="solar:tag-price-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Fair Pricing</h4>
<p className="text-xs text-slate-400 font-light">Affordable rates with no hidden fees.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-2xl text-orange-400 shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Clean Work</h4>
<p className="text-xs text-slate-400 font-light">Professional routing and secure mounting.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-2xl text-orange-400 shrink-0" icon="solar:cpu-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Deep Knowledge</h4>
<p className="text-xs text-slate-400 font-light">Expertise in various satellite systems.</p>
</div>
</div>
</div>
</div>

<div className="reveal delay-200">
<div className="dark-glass-card rounded-2xl p-8">
<h3 className="text-xl font-semibold mb-6">Simple 3-Step Process</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-orange-400 shrink-0">1</div>
<div className="w-px h-full bg-slate-700 my-2"></div>
</div>
<div className="pb-2">
<h4 className="text-sm font-semibold mb-1">Contact &amp; Explain</h4>
<p className="text-xs text-slate-400 font-light">Call or WhatsApp us detailing your signal issue or installation requirement.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-orange-400 shrink-0">2</div>
<div className="w-px h-full bg-slate-700 my-2"></div>
</div>
<div className="pb-2">
<h4 className="text-sm font-semibold mb-1">Technician Visit</h4>
<p className="text-xs text-slate-400 font-light">Our expert arrives at your location in Halloki fully equipped.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-semibold text-white shrink-0">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Fix &amp; Final Check</h4>
<p className="text-xs text-slate-400 font-light">We complete the work and verify signal strength and picture quality with you.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Results</h2>
<h3 className="text-3xl text-slate-900 mb-4">We solve common satellite issues.</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row reveal">
<div className="p-6 sm:w-1/2 border-b sm:border-b-0 sm:border-r border-slate-100 bg-red-50/30">
<div className="flex items-center gap-2 mb-2 text-red-500">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Problem</span>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">"No Signal" Error</h4>
<p className="text-xs text-slate-500 font-light">Dish shifted due to wind or weather, causing complete loss of picture.</p>
</div>
<div className="p-6 sm:w-1/2 bg-green-50/30">
<div className="flex items-center gap-2 mb-2 text-green-600">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Solution</span>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Re-alignment &amp; Locking</h4>
<p className="text-xs text-slate-500 font-light">We realign the dish using meters and tighten fixtures securely.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row reveal delay-100">
<div className="p-6 sm:w-1/2 border-b sm:border-b-0 sm:border-r border-slate-100 bg-red-50/30">
<div className="flex items-center gap-2 mb-2 text-red-500">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Problem</span>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Scrambled Channels</h4>
<p className="text-xs text-slate-500 font-light">Receiver settings altered or outdated frequencies preventing viewing.</p>
</div>
<div className="p-6 sm:w-1/2 bg-green-50/30">
<div className="flex items-center gap-2 mb-2 text-green-600">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Solution</span>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Receiver Tuning</h4>
<p className="text-xs text-slate-500 font-light">Full blind scan and manual programming of correct satellite transponders.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-t border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
<div>
<h2 className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Testimonials</h2>
<h3 className="text-3xl text-slate-900">What Halloki says about us</h3>
</div>
<div className="flex items-center gap-3 bg-slate-50 border border-slate-200 py-2 px-4 rounded-full">
<span className="text-xl font-semibold text-slate-900">4.0</span>
<div className="flex text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 border-l border-slate-300 pl-3">Based on Google Reviews</span>
</div>
</div>
</div>
<div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 gap-6 reveal delay-100">

<div className="snap-center shrink-0 w-80 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex text-orange-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 font-light leading-relaxed">"Great service and very experienced in satellite dish TV antenna settings. Fixed my signal issue quickly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">C</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">Local Customer</p>
<p className="text-slate-500">Halloki Area</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-80 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex text-orange-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 font-light leading-relaxed">"Best dish setup and reliable service. The technician was polite and knew exactly what he was doing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-semibold">M</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">M. Ali</p>
<p className="text-slate-500">Verified Review</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-80 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex text-orange-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 font-light leading-relaxed">"Professional work with strong technical knowledge. Replaced my LNB and rewired neatly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-semibold">S</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">S. Ahmed</p>
<p className="text-slate-500">Halloki Resident</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-80 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex text-orange-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6 font-light leading-relaxed">"Helpful and fast local service. Called them in the evening and they accommodated my request."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-semibold">U</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">User Review</p>
<p className="text-slate-500">Google</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 reveal">
<h2 className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">Support</h2>
<h3 className="text-3xl text-slate-900">Frequently Asked Questions</h3>
</div>
<div className="space-y-4 reveal delay-100">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                        Do you install new dish antennas?
                        <iconify-icon className="text-slate-400 text-lg transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2">
                        Yes, we provide complete installation services for new dish setups, including wall or roof mounting, cabling, and initial receiver configuration for homes and businesses.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                        Can you fix weak or lost signals?
                        <iconify-icon className="text-slate-400 text-lg transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2">
                        Absolutely. Signal issues are common due to weather or hardware aging. We use precise meters to realign the dish, test the LNB, and check cable integrity to restore your signal.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                        Do you provide same-day service in Halloki?
                        <iconify-icon className="text-slate-400 text-lg transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2">
                        In most cases, yes. Being locally based in Main Bazzar, Halloki, we strive to respond and resolve issues quickly, often on the same day you contact us.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                        Do you replace LNB and cables?
                        <iconify-icon className="text-slate-400 text-lg transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2">
                        Yes, if diagnostics show a faulty LNB or degraded cable, we can supply and install high-quality replacements to ensure long-term stability.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-5 gap-12 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden reveal shadow-sm">

<div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between">
<div>
<h2 className="text-3xl text-slate-900 mb-2">Need immediate service?</h2>
<p className="text-sm text-slate-500 font-light mb-8">Call or WhatsApp now for fast local support in Halloki and nearby areas.</p>
<div className="space-y-6 mb-10">
<a className="flex items-start gap-4 group" href="tel:+923214289434">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
<p className="text-lg font-semibold text-slate-900">+92 321 4289434</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</h4>
<p className="text-sm text-slate-900 font-medium">Main Bazzar, Halloki, 55151, Pakistan</p>
<p className="text-xs text-slate-500 mt-1">Google Plus Code: 97CP+G7 Halloki</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Business Hours</h4>
<p className="text-sm text-slate-900 font-medium">Open Now – Closes at 10:00 PM</p>
</div>
</div>
</div>
</div>

<div className="h-48 bg-slate-200 rounded-xl relative overflow-hidden border border-slate-300">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGVsbGlwc2UgY3g9IjIwIiBjeT0iMjAiIHJ4PSIxIiByeT0iMSIgZmlsbD0iI2NiZDVlMSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<iconify-icon className="text-4xl text-orange-500 drop-shadow-md mb-2" icon="solar:map-point-bold"></iconify-icon>
<a className="bg-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm hover:bg-slate-50 transition-colors" href="https://maps.google.com/?q=97CP+G7+Halloki,+Pakistan" target="_blank">View on Google Maps</a>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
<h3 className="text-xl font-semibold mb-6 relative z-10">Request a Callback</h3>
<form className="space-y-4 relative z-10" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs text-slate-400 mb-1.5 ml-1">Name</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5 ml-1">Phone Number</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="03xx xxxxxxx" type="tel"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5 ml-1">Service Required</label>
<div className="relative">
<select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer">
<option>Dish Installation</option>
<option>Signal Repair / Alignment</option>
<option>Receiver Setup</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl text-sm transition-all mt-4 glow-button-orange" type="button">
                            Send Request
                        </button>
</form>
<p className="text-[10px] text-slate-500 text-center mt-4 relative z-10">We respect your privacy. No spam.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:satellite-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base tracking-tighter text-white font-semibold uppercase">DASM</span>
</div>
<p className="text-xs font-light leading-relaxed mb-4 max-w-xs">
                        Dish Antenna and Satellite Master.<br/>
                        Local Trusted Satellite Service in Halloki, providing professional installation and repair.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-xs font-light">
<li><a className="hover:text-orange-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#reviews">Customer Reviews</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Service Area</h4>
<ul className="space-y-2 text-xs font-light">
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Main Bazzar, Halloki</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Local Surroundings</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<p>© 2023 Dish Antenna and Satellite Master. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="tel:+923214289434">Call Us</a>
<a className="hover:text-white transition-colors" href="https://wa.me/923214289434">WhatsApp</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 transition-all z-40 floating-wa" href="https://wa.me/923214289434" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
</a>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 px-2 py-3 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<a className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-600 active:text-orange-500" href="tel:+923214289434">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
</a>
<div className="w-px h-8 bg-slate-200"></div>
<a className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 active:text-green-700" href="https://wa.me/923214289434" target="_blank">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-bold"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
</a>
<div className="w-px h-8 bg-slate-200"></div>
<a className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-600 active:text-orange-500" href="https://maps.google.com/?q=97CP+G7+Halloki,+Pakistan" target="_blank">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wider">Map</span>
</a>
</div>



    </>
  );
}
