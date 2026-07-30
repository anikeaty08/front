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
      
    /* icons & animations */
    lucide.createIcons();
    AOS.init({duration:800,once:true});

    /* particles hero bg */
    particlesJS.load('particles-js','https://gistcdn.githack.com/akzhy/29558af1b9d2a176db8532b8de0da167/raw/particles.json');

    /* stats count-up + ring draw */
    const stats = [
      { id:'stat1', end:500, ring:'ring1' },
      { id:'stat2', end:1200, ring:'ring2' },
      { id:'stat3', end:340, ring:'ring3' },
      { id:'stat4', end:28, ring:'ring4' }
    ];
    stats.forEach(s=>{
      const el=document.getElementById(s.id);
      const ring=document.getElementById(s.ring);
      const circumference=175;
      const observer=new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
          new countUp.CountUp(s.id,s.end,{duration:2}).start();
          let progress=0;
          const draw=()=>{
            progress+=2;
            ring.style.strokeDashoffset=circumference*(1-progress/100);
            if(progress<100)requestAnimationFrame(draw);
          };
          draw();
          observer.disconnect();
        }
      },{threshold:0.6});
      observer.observe(el);
    });

    /* testimonial carousel */
    const slides=document.getElementById('slides');
    let idx=0;
    const move=i=>slides.style.transform=`translateX(-${i*100}%)`;
    document.getElementById('next').onclick=()=>{idx=(idx+1)%3;move(idx);};
    document.getElementById('prev').onclick=()=>{idx=(idx+2)%3;move(idx);};
  
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
      

<section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-white via-[#F9FAFB] to-[#F3F4F6] items-center">

<div className="absolute inset-0 -z-10" id="particles-js"></div>

<div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12">

<div className="flex flex-col justify-center space-y-8 aos-init aos-animate" data-aos="fade-right">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Reimagining <span className="text-[var(--blue)]">Governance</span><br className="hidden sm:block" />Through Innovation
        </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-lg">
          At Strategrity, we transform governance into your strategic advantage using technology, insight, and fearless integrity.
        </p>
<div className="flex gap-6">
<a className="px-8 py-4 bg-[var(--blue)] text-white rounded-md hover:bg-blue-600 transition transform hover:scale-105" data-ripple="" href="#cta">
            Start a Strategy Session
          </a>
<a className="px-8 py-4 ring-1 ring-[var(--blue)] text-[var(--blue)] rounded-md hover:bg-blue-50 transition" data-ripple="" href="#services">
            Explore Services
          </a>
</div>
</div>

<div className="relative aos-init aos-animate" data-aos="fade-left">
<img alt="abstract governance" className="rounded-lg object-cover w-full h-[450px] lg:h-[550px]" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=1200&q=80" />

<div className="absolute inset-0 rounded-lg" style={{background: `radial-gradient(rgba(37,99,235,0.15),rgba(37,99,235,0))`}}></div>
</div>
</div>

<svg className="divider-bottom" preserveaspectratio="none" viewBox="0 0 1440 80">
<path d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" fill="white"></path>
</svg>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col items-center gap-3 p-6 ring-1 ring-gray-200 rounded-lg aos-init" data-aos="flip-up">
<svg height="64" width="64">
<circle cx="32" cy="32" fill="none" id="ring1" r="28" stroke="var(--blue)" strokeDasharray="175" strokeDashoffset="175" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="text-4xl font-semibold tracking-tight" id="stat1">0</span>
<p className="text-sm text-gray-600 text-center">Boards Transformed</p>
</div>
<div className="flex flex-col items-center gap-3 p-6 ring-1 ring-gray-200 rounded-lg aos-init" data-aos="flip-up" data-aos-delay="150">
<svg height="64" width="64">
<circle cx="32" cy="32" fill="none" id="ring2" r="28" stroke="var(--blue)" strokeDasharray="175" strokeDashoffset="175" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="text-4xl font-semibold tracking-tight" id="stat2">0</span>
<p className="text-sm text-gray-600 text-center">Risk Controls Implemented</p>
</div>
<div className="flex flex-col items-center gap-3 p-6 ring-1 ring-gray-200 rounded-lg aos-init" data-aos="flip-up" data-aos-delay="300">
<svg height="64" width="64">
<circle cx="32" cy="32" fill="none" id="ring3" r="28" stroke="var(--blue)" strokeDasharray="175" strokeDashoffset="175" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="text-4xl font-semibold tracking-tight" id="stat3">0</span>
<p className="text-sm text-gray-600 text-center">AI Insights Delivered</p>
</div>
<div className="flex flex-col items-center gap-3 p-6 ring-1 ring-gray-200 rounded-lg aos-init" data-aos="flip-up" data-aos-delay="450">
<svg height="64" width="64">
<circle cx="32" cy="32" fill="none" id="ring4" r="28" stroke="var(--blue)" strokeDasharray="175" strokeDashoffset="175" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="text-4xl font-semibold tracking-tight" id="stat4">0</span>
<p className="text-sm text-gray-600 text-center">Countries Reached</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 relative">
<svg className="absolute top-0 left-0 w-full -translate-y-1/2" preserveaspectratio="none" viewBox="0 0 1440 80"><path d="M0,64 C480,0 960,160 1440,64 L1440,0 L0,0 Z" fill="#F9FAFB"></path></svg>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div className="relative aos-init" data-aos="fade-right">
<img alt="boardroom" className="rounded-lg object-cover w-full h-[450px]" src="https://images.unsplash.com/photo-1665686305756-317e2eb06fa1?auto=format&fit=crop&w=1200&q=80" />
<div className="absolute inset-0 rounded-lg" style={{background: `linear-gradient(120deg,rgba(37,99,235,0.25),transparent)`}}></div>
</div>

<div className="flex flex-col justify-center space-y-6 aos-init" data-aos="fade-left">
<h2 className="text-4xl font-semibold tracking-tight">Who We Are</h2>
<p className="text-gray-600">
          Strategrity Partners is a boutique advisory firm redefining governance through technology, data, and an unwavering commitment to integrity.
        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-shield-check w-6 h-6 text-[var(--blue)] mt-1" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-gray-700">Integrity at every decision point</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-cpu w-6 h-6 text-[var(--blue)] mt-1" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-gray-700">Innovation powered by data & AI</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-globe-2 w-6 h-6 text-[var(--blue)] mt-1" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-gray-700">Global reach with local insight</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<h2 className="text-4xl font-semibold tracking-tight">Our Services</h2>
<p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Advisory at the intersection of governance, risk, and frontier technology.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition group aos-init" data-aos="fade-up">
<svg className="lucide lucide-layout-dashboard w-9 h-9 text-[var(--blue)] mb-6" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">Governance Advisory</h3>
<p className="text-gray-600">Elevate board performance & oversight.</p>
<a className="inline-block mt-4 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition" href="#">Learn more →</a>
</div>
<div className="p-8 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition group aos-init" data-aos="fade-up" data-aos-delay="150">
<svg className="lucide lucide-activity w-9 h-9 text-[var(--blue)] mb-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">Risk Intelligence</h3>
<p className="text-gray-600">Convert uncertainty into competitive edge.</p>
<a className="inline-block mt-4 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition" href="#">Learn more →</a>
</div>
<div className="p-8 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition group aos-init" data-aos="fade-up" data-aos-delay="300">
<svg className="lucide lucide-brain-circuit w-9 h-9 text-[var(--blue)] mb-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">Digital GRC & AI</h3>
<p className="text-gray-600">Future-proof governance at scale.</p>
<a className="inline-block mt-4 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition" href="#">Learn more →</a>
</div>
<div className="p-8 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition group aos-init" data-aos="fade-up">
<svg className="lucide lucide-leaf w-9 h-9 text-[var(--blue)] mb-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">ESG Strategy</h3>
<p className="text-gray-600">Balance profitability with purpose.</p>
<a className="inline-block mt-4 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition" href="#">Learn more →</a>
</div>
<div className="p-8 rounded-lg ring-1 ring-gray-200 hover:bg-blue-50 transition group aos-init" data-aos="fade-up" data-aos-delay="150">
<svg className="lucide lucide-bar-chart w-9 h-9 text-[var(--blue)] mb-6" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">Analytics & Insights</h3>
<p className="text-gray-600">Real-time dashboards for better decisions.</p>
<a className="inline-block mt-4 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition" href="#">Learn more →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-r from-white to-[#F9FAFB]">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">

<div className="relative flex-1 aos-init" data-aos="zoom-in">
<svg className="w-full h-auto" viewBox="0 0 400 400">
<defs>
</defs>
<path d="M20,60 C100,10 300,10 380,60 S300,110 200,160 100,210 20,260" fill="none" stroke="url(#pathgrad)" strokeDasharray="10 14" strokeDashoffset="10" strokeLinecap="round" strokeWidth="4">
<animate attributename="stroke-dashoffset" dur="4s" from="10" repeatcount="indefinite" to="0"></animate>
</path>
<g fill="var(--blue)">
<circle cx="20" cy="60" r="6"></circle>
<circle cx="380" cy="60" r="6"></circle>
<circle cx="200" cy="160" r="6"></circle>
<circle cx="20" cy="260" r="6"></circle>
</g>
</svg>
</div>

<div className="flex-1 space-y-6 aos-init" data-aos="fade-left">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From Insight → to Structure → to Strategy → to Transformation</h2>
<p className="text-gray-600">
            Our proprietary framework guides you from data-driven insight through structured governance, strategic alignment, and ultimately transformative growth.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12 aos-init" data-aos="fade-up">
        Client Voices
      </h2>
<div className="relative overflow-hidden" id="carousel">
<div className="flex transition-transform duration-700" id="slides" style={{'--index': `0`}}>

<div className="min-w-full px-8 aos-init" data-aos="fade-left">
<div className="flex flex-col items-center text-center gap-4">
<img alt="client" className="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f8?auto=format&fit=crop&w=240&q=60" />
<p className="font-medium">— COO, Financial Services</p>
</div>
</div>

<div className="min-w-full px-8">
<div className="flex flex-col items-center text-center gap-4">
<img alt="client" className="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=240&q=60" />
<p className="font-medium">— VP Risk, Manufacturing</p>
</div>
</div>

<div className="min-w-full px-8">
<div className="flex flex-col items-center text-center gap-4">
<img alt="client" className="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=60" />
<p className="font-medium">— Founder, Tech Startup</p>
</div>
</div>
</div>

<button aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 p-4" id="prev">
<svg className="lucide lucide-chevron-left w-6 h-6 text-gray-500" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 p-4" id="next">
<svg className="lucide lucide-chevron-right w-6 h-6 text-gray-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="cta">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#dbeafe] via-white to-[#e0f2fe]"></div>
<canvas className="absolute inset-0 -z-20 opacity-40" id="globe"></canvas>
<div className="max-w-3xl mx-auto px-6 text-center space-y-8 aos-init" data-aos="zoom-in">
<h2 className="text-4xl font-semibold tracking-tight">Let’s Redefine What Governance Can Be.</h2>
<a className="inline-flex items-center gap-2 px-10 py-4 rounded-md bg-[var(--blue)] text-white hover:bg-blue-600 transition transform hover:scale-105" data-ripple="" href="mailto:hello@strategrity.com">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Book Your Free Consultation
      </a>
</div>
</section>

<footer className="py-16 bg-white border-t">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-7 h-7 text-[var(--blue)]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xl font-semibold tracking-tight">Strategrity</span>
</div>
<p className="text-gray-600 max-w-sm">
          Boutique advisory transforming governance into a catalyst for innovation.
        </p>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Navigate</h4>
<ul className="flex flex-col gap-3 text-gray-600">
<li><a className="hover:text-gray-900" href="#services">Services</a></li>
<li><a className="hover:text-gray-900" href="#cta">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-gray-600 hover:text-[var(--blue)]" href="#">
<svg className="lucide lucide-linkedin w-6 h-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-600 hover:text-[var(--blue)]" href="#">
<svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
<div className="text-center text-sm text-gray-500 mt-12">
      © 2025 Strategrity Partners
    </div>
</footer>



    </>
  );
}
