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



        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fa-solid fa-bars text-xl';
            } else {
                icon.className = 'fa-solid fa-xmark text-xl';
            }
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars text-xl';
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{borderBottom: '1px solid #E0E0E0'}}>
<nav className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
<a className="font-heading font-bold text-lg md:text-xl tracking-tight shrink-0" href="#" style={{color: '#1B3A5C'}}>
                Austin Elevator Company
            </a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors" href="#services">Services</a>
<a className="text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors" href="#why-us">Why Choose Us</a>
<a className="text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center text-sm font-heading font-semibold text-white px-5 py-2.5 rounded-lg transition-all duration-200 hover:brightness-90" href="#contact" style={{backgroundColor: '#CC5500'}}>
                    Get a Free Quote
                </a>
<button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" id="mobile-menu-btn" style={{color: '#1B3A5C'}}>
<i className="fa-solid fa-bars text-xl"></i>
</button>
</div>
</nav>
<div className="lg:hidden hidden bg-white px-5 pb-5" id="mobile-menu" style={{borderTop: '1px solid #E0E0E0'}}>
<div className="flex flex-col gap-1 pt-2">
<a className="mobile-nav-link text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors" href="#services">Services</a>
<a className="mobile-nav-link text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors" href="#why-us">Why Choose Us</a>
<a className="mobile-nav-link text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors" href="#how-it-works">How It Works</a>
<a className="mobile-nav-link text-sm font-heading font-medium text-gray-600 hover:text-[#1B3A5C] hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors" href="#contact">Contact</a>
<a className="sm:hidden mt-2 text-center text-sm font-heading font-semibold text-white px-5 py-3 rounded-lg" href="#contact" style={{backgroundColor: '#CC5500'}}>Get a Free Quote</a>
</div>
</div>
</header>
<main>

<section className="relative pt-16 md:pt-[72px] min-h-[600px] md:min-h-[700px] flex items-center">
<div className="absolute inset-0">
<img alt="Modern commercial elevator lobby" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80&amp;w=1920"/>
<div className="absolute inset-0" style={{background: 'rgba(27, 58, 92, 0.78)'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-20 md:py-28 w-full">
<div className="max-w-3xl">
<h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] tracking-tight mb-5 md:mb-6">
                        Reliable Elevator Service for Your Commercial Property
                    </h1>
<p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-2xl">
                        Maintenance, repair, installations, and modernizations for commercial, industrial, and residential elevators across Texas. Family owned. Non-proprietary equipment. Competitive pricing.
                    </p>
<div className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12">
<a className="inline-flex items-center justify-center text-sm md:text-base font-heading font-semibold text-white px-8 py-4 rounded-lg transition-all duration-200 hover:brightness-90 min-h-[48px]" href="#contact" style={{backgroundColor: '#CC5500'}}>
                            Get a Free Quote
                        </a>
<a className="inline-flex items-center justify-center text-sm md:text-base font-heading font-semibold text-white px-8 py-4 rounded-lg border-2 border-white/40 hover:bg-white/10 transition-all duration-200 min-h-[48px]" href="tel:5123762107">
<i className="fa-solid fa-phone mr-2 text-sm"></i>
                            Call (512) 376-2107
                        </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
<div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-3">
<i className="fa-solid fa-shield-halved text-base" style={{color: '#CC5500'}}></i>
<span className="text-xs font-heading font-medium text-white leading-tight">22+ Years in Business</span>
</div>
<div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-3">
<i className="fa-solid fa-wrench text-base" style={{color: '#CC5500'}}></i>
<span className="text-xs font-heading font-medium text-white leading-tight">All Brands Serviced</span>
</div>
<div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-3">
<i className="fa-solid fa-map-pin text-base" style={{color: '#CC5500'}}></i>
<span className="text-xs font-heading font-medium text-white leading-tight">Statewide Coverage</span>
</div>
<div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-3">
<i className="fa-solid fa-lock-open text-base" style={{color: '#CC5500'}}></i>
<span className="text-xs font-heading font-medium text-white leading-tight">Non-Proprietary Equipment</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" style={{backgroundColor: '#F5F5F0'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">Common Problems</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: '#1B3A5C'}}>
                        Tired of These Elevator Headaches?
                    </h2>
<p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">If any of these sound familiar, you are not alone.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: 'rgba(204, 85, 0, 0.1)'}}>
<i className="fa-solid fa-lock text-lg" style={{color: '#CC5500'}}></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Locked Into Proprietary Contracts</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your current provider uses proprietary parts and equipment, locking you into their pricing. You have no leverage to negotiate and no alternative suppliers.</p>
</div>
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: 'rgba(204, 85, 0, 0.1)'}}>
<i className="fa-regular fa-clock text-lg" style={{color: '#CC5500'}}></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Slow Response Times</h3>
<p className="text-sm text-gray-500 leading-relaxed">When your elevator goes down, tenants complain and operations stall. Every hour of downtime costs you money and credibility.</p>
</div>
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: 'rgba(204, 85, 0, 0.1)'}}>
<i className="fa-solid fa-dollar-sign text-lg" style={{color: '#CC5500'}}></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Overpriced Maintenance Plans</h3>
<p className="text-sm text-gray-500 leading-relaxed">You are paying premium rates for basic maintenance because the big companies know you feel stuck. The same service should not cost 30–40% more than it needs to.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">Why Austin Elevator</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{color: '#1B3A5C'}}>
                        Why Property Managers Choose Austin Elevator
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">
<div className="text-center md:text-left">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0" style={{backgroundColor: '#1B3A5C'}}>
<i className="fa-solid fa-gears text-xl text-white"></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Non-Proprietary Equipment</h3>
<p className="text-sm text-gray-500 leading-relaxed">We install and service non-proprietary elevator equipment, so you are never locked into a single supplier. Source parts from multiple vendors and keep costs competitive.</p>
</div>
<div className="text-center md:text-left">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0" style={{backgroundColor: '#1B3A5C'}}>
<i className="fa-solid fa-clipboard-list text-xl text-white"></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Custom Maintenance Plans</h3>
<p className="text-sm text-gray-500 leading-relaxed">Every building is different. We build maintenance plans tailored specifically to your equipment and your needs, not a one-size-fits-all contract.</p>
</div>
<div className="text-center md:text-left">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0" style={{backgroundColor: '#1B3A5C'}}>
<i className="fa-solid fa-users text-xl text-white"></i>
</div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Family Owned, 22+ Years</h3>
<p className="text-sm text-gray-500 leading-relaxed">A family owned and operated company built on quality workmanship and affordable pricing. No corporate overhead, no middlemen, just direct access to the people doing the work.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="services" style={{backgroundColor: '#1B3A5C'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">What We Do</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Full-Service Elevator Solutions
                    </h2>
<p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">Everything your building needs, under one roof.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-wrench text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">Maintenance</h3>
<p className="text-sm text-white/50 leading-relaxed">Custom maintenance plans tailored to your equipment. Includes cleaning, lubrication, adjustments, and safety inspections.</p>
</div>
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-hammer text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">Repair</h3>
<p className="text-sm text-white/50 leading-relaxed">Fast response for breakdowns, malfunctions, and emergency service. All elevator brands serviced.</p>
</div>
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-building-circle-arrow-right text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">New Installations</h3>
<p className="text-sm text-white/50 leading-relaxed">Non-proprietary equipment installations for new construction. On schedule, on budget, fully compliant.</p>
</div>
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-arrows-rotate text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">Modernizations</h3>
<p className="text-sm text-white/50 leading-relaxed">Small upgrades to full system overhauls. Controls, door operators, cab interiors, and safety systems.</p>
</div>
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-clipboard-check text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">Inspections</h3>
<p className="text-sm text-white/50 leading-relaxed">Annual and periodic inspections to meet TDLR requirements.</p>
</div>
<div className="rounded-xl p-6 md:p-7 transition-all duration-300" style={{backgroundColor: '#243F6B', border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="fa-solid fa-comments text-xl text-white mb-4 block"></i>
<h3 className="font-heading text-base font-bold text-white mb-2">Consulting</h3>
<p className="text-sm text-white/50 leading-relaxed">Expert consulting on elevator code compliance, equipment selection, and project planning.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" style={{backgroundColor: '#F5F5F0'}}>
<div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8 text-center">
<i className="fa-solid fa-quote-left text-5xl mb-6 block" style={{color: '#CC5500', opacity: '0.35'}}></i>
<blockquote className="font-heading text-xl sm:text-2xl md:text-[1.75rem] font-medium leading-relaxed tracking-tight mb-6 italic" style={{color: '#1B3A5C'}}>
                    "At Austin Elevator, we have built our livelihoods on quality workmanship at affordable prices. No job is too big or too small."
                </blockquote>
<p className="text-sm font-heading font-semibold text-gray-500">— Austin Elevator Company</p>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">How It Works</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{color: '#1B3A5C'}}>
                        Getting Started Is Simple
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
<div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px" style={{backgroundColor: '#E0E0E0'}}></div>
<div className="flex flex-col items-center text-center relative">
<div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-5 relative z-10 shadow-lg" style={{backgroundColor: '#CC5500'}}>
                            1
                        </div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Request a Free Quote</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Tell us about your property and elevator equipment. We will provide a detailed, no-obligation quote within 48 hours.</p>
</div>
<div className="flex flex-col items-center text-center relative">
<div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-5 relative z-10 shadow-lg" style={{backgroundColor: '#CC5500'}}>
                            2
                        </div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>We Assess Your Equipment</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Our technicians visit your property, inspect your elevators, and build a custom service plan tailored to your specific equipment.</p>
</div>
<div className="flex flex-col items-center text-center relative">
<div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-5 relative z-10 shadow-lg" style={{backgroundColor: '#CC5500'}}>
                            3
                        </div>
<h3 className="font-heading text-lg font-bold mb-3" style={{color: '#1B3A5C'}}>Reliable Service Starts</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Enjoy consistent, affordable elevator maintenance, repairs, and support from a team that picks up the phone when you call.</p>
</div>
</div>
<div className="flex justify-center mt-10 md:mt-14">
<a className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-heading font-semibold text-white px-8 py-4 rounded-lg transition-all duration-200 hover:brightness-90 min-h-[48px]" href="#contact" style={{backgroundColor: '#CC5500'}}>
                        Get Started Today
                        <i className="fa-solid fa-arrow-right text-sm"></i>
</a>
</div>
</div>
</section>

<section className="py-14 md:py-20" style={{backgroundColor: '#1B3A5C'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
<div className="text-center">
<div className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-2" style={{color: '#CC5500'}}>22+</div>
<div className="text-sm text-white/60 font-heading font-medium">Years in Business</div>
</div>
<div className="text-center">
<div className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">All Brands</div>
<div className="text-sm text-white/60 font-heading font-medium">Serviced &amp; Supported</div>
</div>
<div className="text-center">
<div className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Statewide</div>
<div className="text-sm text-white/60 font-heading font-medium">Texas + New Mexico</div>
</div>
<div className="text-center">
<div className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-2" style={{color: '#CC5500'}}>100%</div>
<div className="text-sm text-white/60 font-heading font-medium">Non-Proprietary Equipment</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">What Our Clients Say</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{color: '#1B3A5C'}}>
                        What Our Clients Say
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="flex gap-1 mb-4">
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
</div>
<p className="text-sm text-gray-500 leading-relaxed italic mb-5">"Austin Elevator has always been reliable and responsive. They service our building's elevators and we have never had a complaint from tenants."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-user text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-sm font-heading font-semibold" style={{color: '#1B3A5C'}}>Client Review</div>
<div className="text-xs text-gray-400">Property Manager</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="flex gap-1 mb-4">
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
</div>
<p className="text-sm text-gray-500 leading-relaxed italic mb-5">"Switched from a national provider and immediately noticed better response times and lower costs. Should have done it years ago."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-user text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-sm font-heading font-semibold" style={{color: '#1B3A5C'}}>Client Review</div>
<div className="text-xs text-gray-400">Facilities Director</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<div className="flex gap-1 mb-4">
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
<i className="fa-solid fa-star text-sm" style={{color: '#CC5500'}}></i>
</div>
<p className="text-sm text-gray-500 leading-relaxed italic mb-5">"The team at Austin Elevator is honest, knowledgeable, and always on time. They treat our building like it is their own."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-user text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-sm font-heading font-semibold" style={{color: '#1B3A5C'}}>Client Review</div>
<div className="text-xs text-gray-400">Building Owner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" style={{backgroundColor: '#F5F5F0'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="relative rounded-xl overflow-hidden shadow-lg h-72 md:h-[480px]">
<img alt="Elevator technician at work" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<p className="eyebrow mb-3">About Us</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{color: '#1B3A5C'}}>
                            A Family Business Built on Trust
                        </h2>
<div className="space-y-4 text-sm md:text-base text-gray-500 leading-relaxed">
<p>Austin Elevator Company was originally established in 2002 and has been under the ownership of Joshua and Sara Fairchild since 2015. As a small, family owned and operated company, we have built our reputation on quality workmanship, competitive pricing, and honest service.</p>
<p>We service all brands of elevators and use non-proprietary equipment, giving you the freedom to choose your parts and keep costs down. From residential remodels to commercial installations and everything in between, no job is too big or too small.</p>
<p>We have been doing this for over 22 years and we are here to help every step of the way.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-heading font-semibold mt-6 transition-all duration-200 hover:gap-3" href="#contact" style={{color: '#CC5500'}}>
                            Get in Touch
                            <i className="fa-solid fa-arrow-right text-xs"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">Our Clients</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{color: '#1B3A5C'}}>
                        We Work With
                    </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
<div className="rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300" style={{border: '1px solid #E0E0E0'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: 'rgba(27, 58, 92, 0.06)'}}>
<i className="fa-solid fa-building text-xl" style={{color: '#1B3A5C'}}></i>
</div>
<h3 className="font-heading text-base font-bold mb-2" style={{color: '#1B3A5C'}}>Property Managers</h3>
<p className="text-xs text-gray-500 leading-relaxed">Commercial office buildings, retail centres, hotels, and multi-story residential complexes.</p>
</div>
<div className="rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300" style={{border: '1px solid #E0E0E0'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: 'rgba(27, 58, 92, 0.06)'}}>
<i className="fa-solid fa-hospital text-xl" style={{color: '#1B3A5C'}}></i>
</div>
<h3 className="font-heading text-base font-bold mb-2" style={{color: '#1B3A5C'}}>Facilities Directors</h3>
<p className="text-xs text-gray-500 leading-relaxed">Hospitals, universities, government buildings, and corporate campuses.</p>
</div>
<div className="rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300" style={{border: '1px solid #E0E0E0'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: 'rgba(27, 58, 92, 0.06)'}}>
<i className="fa-solid fa-hard-hat text-xl" style={{color: '#1B3A5C'}}></i>
</div>
<h3 className="font-heading text-base font-bold mb-2" style={{color: '#1B3A5C'}}>General Contractors</h3>
<p className="text-xs text-gray-500 leading-relaxed">New construction projects requiring elevator installation, modernization, or consulting.</p>
</div>
<div className="rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300" style={{border: '1px solid #E0E0E0'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: 'rgba(27, 58, 92, 0.06)'}}>
<i className="fa-solid fa-key text-xl" style={{color: '#1B3A5C'}}></i>
</div>
<h3 className="font-heading text-base font-bold mb-2" style={{color: '#1B3A5C'}}>Building Owners</h3>
<p className="text-xs text-gray-500 leading-relaxed">Multi-story property owners looking for reliable, affordable elevator maintenance.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" style={{backgroundColor: '#1B3A5C'}}>
<div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8 text-center">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight mb-5">
                    Ready to Switch to an Elevator Company That Actually Picks Up the Phone?
                </h2>
<p className="text-base md:text-lg text-white/70 mb-8 max-w-xl mx-auto">
                    Get a free, no-obligation quote for your property. We respond within 48 hours.
                </p>
<a className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-heading font-semibold text-white px-10 py-4 rounded-lg transition-all duration-200 hover:brightness-90 min-h-[52px]" href="#contact" style={{backgroundColor: '#CC5500'}}>
                    Get Your Free Quote
                </a>
<p className="mt-5 text-white/50 text-sm">
                    Or call us directly: <a className="text-white font-heading font-semibold hover:underline" href="tel:5123762107">(512) 376-2107</a>
</p>
</div>
</section>

<section className="py-16 md:py-24" style={{backgroundColor: '#F5F5F0'}}>
<div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
<p className="eyebrow mb-3">FAQ</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{color: '#1B3A5C'}}>
                        Frequently Asked Questions
                    </h2>
</div>
<div className="space-y-3">
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            Do you service all elevator brands?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            Yes. We service all brands of elevators and source parts from multiple vendors to keep costs competitive. You are never locked into a single supplier.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            What areas do you cover?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            We serve the entire state of Texas and parts of New Mexico.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            Do you use proprietary equipment?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            No. All our new installations use non-proprietary equipment, so you are never locked into a single supplier for parts or service.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            How fast can you respond to an emergency?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            We prioritise emergency calls and aim to have a technician on-site as quickly as possible. Call <a className="font-semibold underline" href="tel:5123762107" style={{color: '#CC5500'}}>(512) 376-2107</a> for immediate assistance.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            Can you take over an existing maintenance contract?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            Absolutely. We regularly transition buildings from other providers. We assess your equipment and build a custom maintenance plan that fits your needs and budget.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            What does a maintenance plan include?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            Every plan is tailored to your specific equipment. Typical plans include regular inspections, cleaning, lubrication, adjustments, safety testing, and priority response for repairs.
                        </div>
</details>
<details className="group bg-white rounded-xl overflow-hidden shadow-sm" style={{border: '1px solid #E0E0E0'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-heading font-semibold text-sm md:text-base select-none min-h-[52px]" style={{color: '#1B3A5C'}}>
                            Are you licensed and insured?
                            <i className="fa-solid fa-chevron-down text-xs text-gray-400 faq-chevron shrink-0 ml-4"></i>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-500 leading-relaxed" style={{borderTop: '1px solid #E0E0E0', paddingTop: '16px'}}>
                            Yes. Austin Elevator Company is fully licensed through the Texas Department of Licensing and Regulation (TDLR) and carries full insurance coverage.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 md:gap-16">

<div>
<p className="eyebrow mb-3">Contact Us</p>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: '#1B3A5C'}}>
                            Get Your Free Quote
                        </h2>
<p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8">
                            Fill in the form and we will get back to you within 48 hours with a no-obligation quote.
                        </p>
<form className="space-y-5" onsubmit="event.preventDefault(); document.getElementById('form-success').classList.remove('hidden'); this.classList.add('hidden');">
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Full Name *</label>
<input className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors placeholder-gray-400" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" placeholder="John Smith" required="" style={{border: '1px solid #E0E0E0'}} type="text"/>
</div>
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Email Address *</label>
<input className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors placeholder-gray-400" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" placeholder="john@company.com" required="" style={{border: '1px solid #E0E0E0'}} type="email"/>
</div>
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Phone Number</label>
<input className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors placeholder-gray-400" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" placeholder="(512) 555-0123" style={{border: '1px solid #E0E0E0'}} type="tel"/>
</div>
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Property Type</label>
<select className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors text-gray-600 appearance-none" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" style={{border: '1px solid #E0E0E0', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%239ca3af%27 strokeWidth=%271.5%27 strokeLinecap=%27round%27 strokeLinejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E\')', backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat'}}>
<option value="">Select property type</option>
<option>Commercial Office</option>
<option>Residential Complex</option>
<option>Hospital / Medical</option>
<option>Hotel / Hospitality</option>
<option>Industrial</option>
<option>Government / Institutional</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Number of Elevators</label>
<input className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors placeholder-gray-400" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" placeholder="e.g. 3" style={{border: '1px solid #E0E0E0'}} type="text"/>
</div>
<div>
<label className="block text-xs font-heading font-semibold text-gray-600 mb-1.5">Message</label>
<textarea className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none transition-colors placeholder-gray-400 resize-none" onblur="this.style.borderColor='#E0E0E0'; this.style.boxShadow='none'" onfocus="this.style.borderColor='#1B3A5C'; this.style.boxShadow='0 0 0 3px rgba(27,58,92,0.1)'" placeholder="Tell us about your elevator equipment, building type, or any issues you are experiencing..." rows="4" style={{border: '1px solid #E0E0E0'}}></textarea>
</div>
<button className="w-full text-sm md:text-base font-heading font-semibold text-white px-8 py-4 rounded-lg transition-all duration-200 hover:brightness-90 min-h-[52px]" style={{backgroundColor: '#CC5500'}} type="submit">
                                Submit Quote Request
                            </button>
</form>
<div className="hidden bg-green-50 border border-green-200 rounded-xl p-8 text-center" id="form-success">
<i className="fa-solid fa-circle-check text-4xl text-green-500 mb-4 block"></i>
<h3 className="font-heading text-lg font-bold mb-2" style={{color: '#1B3A5C'}}>Thank You!</h3>
<p className="text-sm text-gray-500">Your quote request has been submitted. We will get back to you within 48 hours.</p>
</div>
</div>

<div className="lg:pl-8">
<div className="rounded-xl p-6 md:p-8 h-full" style={{backgroundColor: '#F5F5F0', border: '1px solid #E0E0E0'}}>
<h3 className="font-heading text-lg font-bold mb-6" style={{color: '#1B3A5C'}}>Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-phone text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-xs text-gray-400 font-heading font-medium mb-1">Phone</div>
<a className="text-sm font-heading font-semibold hover:underline" href="tel:5123762107" style={{color: '#1B3A5C'}}>(512) 376-2107</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-envelope text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-xs text-gray-400 font-heading font-medium mb-1">Email</div>
<a className="text-sm font-heading font-semibold hover:underline" href="mailto:sara@austinelevator.com" style={{color: '#1B3A5C'}}>sara@austinelevator.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-solid fa-location-dot text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-xs text-gray-400 font-heading font-medium mb-1">Location</div>
<span className="text-sm font-heading font-semibold" style={{color: '#1B3A5C'}}>Kyle, Texas</span>
<span className="text-xs text-gray-400 block mt-0.5">Serving all of Texas and New Mexico</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27, 58, 92, 0.08)'}}>
<i className="fa-regular fa-clock text-sm" style={{color: '#1B3A5C'}}></i>
</div>
<div>
<div className="text-xs text-gray-400 font-heading font-medium mb-1">Hours</div>
<span className="text-sm font-heading font-semibold" style={{color: '#1B3A5C'}}>Mon–Fri 7am–5pm</span>
<span className="text-xs text-gray-400 block mt-0.5">Emergency service available 24/7</span>
</div>
</div>
</div>
<div className="mt-8 pt-6" style={{borderTop: '1px solid #E0E0E0'}}>
<div className="flex items-center gap-3 mb-4">
<i className="fa-solid fa-phone-volume text-lg" style={{color: '#CC5500'}}></i>
<span className="font-heading text-sm font-semibold" style={{color: '#1B3A5C'}}>Need immediate help?</span>
</div>
<a className="inline-flex items-center justify-center w-full gap-2 text-sm font-heading font-semibold text-white px-6 py-3.5 rounded-lg transition-all duration-200 hover:brightness-90 min-h-[48px]" href="tel:5123762107" style={{backgroundColor: '#1B3A5C'}}>
<i className="fa-solid fa-phone text-xs"></i>
                                    Call (512) 376-2107
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer style={{backgroundColor: '#1B3A5C'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-12 md:py-16">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
<div>
<span className="font-heading font-bold text-base text-white block mb-3">Austin Elevator Company, LLC</span>
<p className="text-xs text-white/50 leading-relaxed">Family owned elevator service, trusted for 22+ years.</p>
</div>
<div>
<h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70 mb-4">Quick Links</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#why-us">About</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#how-it-works">FAQ</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70 mb-4">Contact</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-white/50 hover:text-white transition-colors flex items-center gap-2" href="tel:5123762107"><i className="fa-solid fa-phone text-[10px]"></i>(512) 376-2107</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors flex items-center gap-2" href="mailto:sara@austinelevator.com"><i className="fa-solid fa-envelope text-[10px]"></i>sara@austinelevator.com</a></li>
<li><span className="text-xs text-white/50 flex items-center gap-2"><i className="fa-solid fa-location-dot text-[10px]"></i>Kyle, TX</span></li>
</ul>
</div>
</div>
</div>
<div style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-5 text-center">
<p className="text-xs text-white/40">© 2026 Austin Elevator Company, LLC. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
