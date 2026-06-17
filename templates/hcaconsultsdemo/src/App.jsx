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



tailwind.config = { theme: { extend: { colors: { primary: '#001F66', secondary: '#009953', surface: '#F8FAFC' }, fontFamily: { sans: ['Manrope', 'sans-serif'] } } } }

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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-md font-semibold tracking-tighter text-sm font-manrope">
            HC
          </div>
<span className="text-primary font-medium tracking-tight text-lg group-hover:opacity-80 transition-opacity font-manrope">
            HCA CONSULTS
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-primary transition-colors font-manrope" href="#about" style={{}}>
            About
          </a>
<a className="hover:text-primary transition-colors font-manrope" href="#services" style={{}}>
            Services
          </a>
<a className="hover:text-primary transition-colors font-manrope" href="#events" style={{}}>
            Events
          </a>
<a className="hover:text-primary transition-colors font-manrope" href="#insights" style={{}}>
            Insights
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md font-manrope" href="#contact" style={{}}>
            Partner With Us
          </a>
<button className="md:hidden text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 bg-gradient-to-bl from-primary to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20 font-manrope" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
            Innovating Healthcare Systems
          </div>
<h1 className="text-5xl lg:text-6xl tracking-tighter text-primary leading-[1.1] mb-6 font-manrope font-medium" style={{}}>
            Transforming Healthcare Through
            <span className="text-secondary font-manrope font-medium" style={{}}>
              Collaboration
            </span>
            , Policy, and Innovation
          </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg font-manrope" style={{}}>
            HCA Consults builds platforms that bring healthcare leaders,
            innovators, policymakers, investors, and practitioners together to
            confront challenges and accelerate change across Africa’s healthcare
            ecosystem.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-primary rounded-md hover:bg-primary/90 shadow-sm group font-manrope" href="#events" style={{}}>
              Explore Our Events
              <svg aria-hidden="true" className="iconify ml-2 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary transition-all bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 shadow-sm font-manrope" href="#contact" style={{}}>
              Partner With Us
            </a>
</div>
</div>

<div className="relative grid grid-cols-2 gap-4 fade-up delay-200">
<div className="space-y-4 translate-y-8">
<div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/5] shadow-lg">
<img alt="Medical Technology" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 bg-white rounded-xl shadow border border-slate-100">
<div className="flex items-center gap-3 mb-2">
<div className="bg-secondary/10 p-2 rounded-full text-secondary">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
</div>
<span className="text-sm font-semibold text-primary font-manrope" style={{}}>
                  Networking
                </span>
</div>
<p className="text-xs text-slate-500 font-manrope" style={{}}>
                Connecting 2,500+ delegates
              </p>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-primary text-white rounded-xl shadow-lg border border-primary/20">
<div className="flex items-center gap-3 mb-2">
<div className="bg-white/20 p-2 rounded-full text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
</div>
<span className="text-sm font-semibold font-manrope" style={{}}>
                  Growth
                </span>
</div>
<p className="text-xs text-white/80 font-manrope" style={{}}>
                Accelerating capital deployment
              </p>
</div>
<div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/5] shadow-lg">
<img alt="Conference Panel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-surface border-y border-slate-200" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-primary mb-8 font-manrope font-medium" style={{}}>
          Who We Are
        </h2>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-manrope" style={{}}>
          HCA Consults is a healthcare marketing and communications company
          dedicated to
          <span className="text-primary font-medium font-manrope" style={{}}>
            strengthening healthcare systems in Africa
          </span>
          . We design bridges between public and private stakeholders, drive
          conversation, spark innovation, and catalyze investment into the
          health sector.
        </p>
<div className="mt-8 w-16 h-1 bg-secondary mx-auto rounded-full opacity-80"></div>
<p className="mt-8 text-base text-slate-500 font-manrope" style={{}}>
          Our mission is to create platforms where decision-makers align on
          solutions that improve access, delivery, and outcomes in healthcare.
        </p>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl tracking-tight text-primary font-manrope font-medium" style={{}}>
            What We Do
          </h2>
<p className="mt-4 text-slate-500 text-lg font-manrope" style={{}}>
            Comprehensive ecosystem development services.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-slate-200 hover:border-secondary/50 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mic-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m11 7.601l-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path>
<path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"></path>
<circle cx="16" cy="7" r="5"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold text-primary mb-3 font-manrope" style={{}}>
              Events &amp; Summits
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
              Hosting flagship events that bring leaders together to discuss
              policy, investment, workforce, and technology.
            </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-secondary/50 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-primary mb-3 font-manrope" style={{}}>
              Strategic Comms
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
              Crafting communication strategies that help healthcare brands
              deliver clarity and influence perception.
            </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-secondary/50 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:line-chart" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 3v18h18"></path>
<path d="m19 9l-5 5l-4-4l-3 3"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold text-primary mb-3 font-manrope" style={{}}>
              Market Facilitation
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
              Convening investors, innovators, and governments to accelerate
              capital deployment into health ventures.
            </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-secondary/50 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:network" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold text-primary mb-3 font-manrope" style={{}}>
              Partnerships
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
              Supporting governments and partners in fostering alignment across
              sectors of the healthcare value chain.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-slate-200" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl tracking-tight text-primary font-manrope font-medium" style={{}}>
              Our Flagship Platforms
            </h2>
<p className="mt-4 text-slate-500 text-lg font-manrope" style={{}}>
              Where the future of healthcare is debated and designed.
            </p>
</div>
<a className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1 font-manrope" href="#" style={{}}>
            View All Events
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Lagos Health Summit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-primary shadow-sm font-manrope" style={{}}>
                LAGOS
              </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-primary text-xl font-semibold mb-2 font-manrope tracking-tight" style={{}}>
                Lagos Health Summit
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-1 font-manrope" style={{}}>
                A premier healthcare event focused on innovation, policy reform,
                and system strengthening.
              </p>
<a className="inline-flex items-center text-sm font-medium text-secondary hover:underline decoration-secondary/30 underline-offset-4 font-manrope" href="#" style={{}}>
                Event Details
              </a>
</div>
</article>

<article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Nigeria Healthcare Investment Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-primary shadow-sm font-manrope" style={{}}>
                ABUJA
              </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-primary mb-2 font-manrope tracking-tight" style={{}}>
                Healthcare Investment Forum
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-1 font-manrope" style={{}}>
                Connecting investors and healthcare businesses shaping the
                future of health financing.
              </p>
<a className="inline-flex items-center text-sm font-medium text-secondary hover:underline decoration-secondary/30 underline-offset-4 font-manrope" href="#" style={{}}>
                Event Details
              </a>
</div>
</article>

<article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="UK-Nigeria Health-Tech Fest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-primary shadow-sm font-manrope" style={{}}>
                LONDON / LAGOS
              </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-primary mb-2 font-manrope tracking-tight" style={{}}>
                UK-Nigeria Health-Tech Fest
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-1 font-manrope" style={{}}>
                Cross-border platform advancing health-tech innovation, trade,
                and investment.
              </p>
<a className="inline-flex items-center text-sm font-medium text-secondary hover:underline decoration-secondary/30 underline-offset-4 font-manrope" href="#" style={{}}>
                Event Details
              </a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-primary font-manrope font-medium" style={{}}>
            2026 Event Calendar
          </h2>
<p className="mt-4 text-slate-500 font-manrope" style={{}}>
            Stay informed on upcoming summits, forums, and sector convenings.
          </p>
</div>
<div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 space-y-12 md:space-y-0">

<div className="md:grid md:grid-cols-12 md:gap-8 items-start group">
<div className="hidden md:block md:col-span-2 text-right pt-1">
<span className="text-sm text-slate-400 group-hover:text-secondary transition-colors font-manrope font-semibold" style={{}}>
                Q1 2026
              </span>
</div>
<div className="absolute -left-[9px] md:relative md:-left-auto md:col-span-1 flex justify-center pt-1">
<div className="w-4 h-4 rounded-full border-2 border-white bg-slate-300 ring-1 ring-slate-100 group-hover:bg-secondary transition-colors"></div>
</div>
<div className="pl-8 md:pl-0 md:col-span-9">
<h4 className="text-lg font-semibold text-primary font-manrope" style={{}}>
                Lagos Health Summit
              </h4>
<p className="text-sm text-secondary font-medium mb-1 font-manrope" style={{}}>
                Innovation &amp; Policy Dialogue
              </p>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
                Bringing together key stakeholders to set the agenda for the
                year.
              </p>
</div>
</div>

<div className="md:grid md:grid-cols-12 md:gap-8 items-start group pt-8 md:pt-12">
<div className="hidden md:block md:col-span-2 text-right pt-1">
<span className="text-sm text-slate-400 group-hover:text-secondary transition-colors font-manrope font-semibold" style={{}}>
                Q2 2026
              </span>
</div>
<div className="absolute -left-[9px] md:relative md:-left-auto md:col-span-1 flex justify-center pt-1">
<div className="w-4 h-4 rounded-full border-2 border-white bg-slate-300 ring-1 ring-slate-100 group-hover:bg-secondary transition-colors"></div>
</div>
<div className="pl-8 md:pl-0 md:col-span-9">
<h4 className="text-lg font-semibold text-primary font-manrope" style={{}}>
                Nigeria Healthcare Investment Forum
              </h4>
<p className="text-sm text-secondary font-medium mb-1 font-manrope" style={{}}>
                Investment &amp; Market Access
              </p>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
                Connecting capital with high-impact healthcare opportunities.
              </p>
</div>
</div>

<div className="md:grid md:grid-cols-12 md:gap-8 items-start group pt-8 md:pt-12">
<div className="hidden md:block md:col-span-2 text-right pt-1">
<span className="text-sm text-slate-400 group-hover:text-secondary transition-colors font-manrope font-semibold" style={{}}>
                Q3 2026
              </span>
</div>
<div className="absolute -left-[9px] md:relative md:-left-auto md:col-span-1 flex justify-center pt-1">
<div className="w-4 h-4 rounded-full border-2 border-white bg-slate-300 ring-1 ring-slate-100 group-hover:bg-secondary transition-colors"></div>
</div>
<div className="pl-8 md:pl-0 md:col-span-9">
<h4 className="text-lg font-semibold text-primary font-manrope" style={{}}>
                UK-Nigeria Health-Tech Fest
              </h4>
<p className="text-sm text-secondary font-medium mb-1 font-manrope" style={{}}>
                Cross-Border Health-Tech Showcase
              </p>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
                Showcasing the latest technologies bridging the gap between
                markets.
              </p>
</div>
</div>

<div className="md:grid md:grid-cols-12 md:gap-8 items-start group pt-8 md:pt-12">
<div className="hidden md:block md:col-span-2 text-right pt-1">
<span className="text-sm text-slate-400 group-hover:text-secondary transition-colors font-manrope font-semibold" style={{}}>
                Q4 2026
              </span>
</div>
<div className="absolute -left-[9px] md:relative md:-left-auto md:col-span-1 flex justify-center pt-1">
<div className="w-4 h-4 rounded-full border-2 border-white bg-slate-300 ring-1 ring-slate-100 group-hover:bg-secondary transition-colors"></div>
</div>
<div className="pl-8 md:pl-0 md:col-span-9">
<h4 className="text-lg font-semibold text-primary font-manrope" style={{}}>
                Special Convenings
              </h4>
<p className="text-sm text-secondary font-medium mb-1 font-manrope" style={{}}>
                Partner Events &amp; Roundtables
              </p>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
                Targeted discussions on emerging trends and year-end strategic
                reviews.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-primary rounded-md hover:bg-primary/90 shadow-sm font-manrope" style={{}}>
<svg aria-hidden="true" className="iconify mr-2 iconify--lucide" data-icon="lucide:bell" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Subscribe for Updates
          </button>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-manrope font-medium" style={{}}>
            Driving Real Change in Healthcare
          </h2>
<p className="text-blue-100 text-lg leading-relaxed mb-8 font-manrope" style={{}}>
            HCA Consults plays a catalytic role in building more resilient
            healthcare ecosystems. By convening stakeholders, structuring
            conversations, and enabling partnerships, we help accelerate
            progress in access, quality, equity, and investment.
          </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
<p className="text-sm text-blue-200 font-manrope" style={{}}>
              Accelerating progress in access, quality, and equity.
            </p>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
<p className="text-4xl tracking-tighter text-white mb-1 font-manrope font-medium" style={{}}>
              +3
            </p>
<p className="text-sm font-medium text-blue-200 font-manrope" style={{}}>
              Countries Engaged
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
<p className="text-4xl tracking-tighter text-secondary mb-1 font-manrope font-medium" style={{}}>
              2,500+
            </p>
<p className="text-sm font-medium text-blue-200 font-manrope" style={{}}>
              Delegates Hosted
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
<p className="text-4xl tracking-tighter text-white mb-1 font-manrope font-medium" style={{}}>
              120+
            </p>
<p className="text-sm font-medium text-blue-200 font-manrope" style={{}}>
              Speakers &amp; Leaders
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
<p className="text-4xl tracking-tighter text-secondary mb-1 font-manrope font-medium" style={{}}>
              40+
            </p>
<p className="text-sm font-medium text-blue-200 font-manrope" style={{}}>
              Organizations Partnered
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10 font-manrope" style={{}}>
          Organizations We Work With
        </h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-10 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 font-manrope" style={{}}>
            PARTNER LOGO
          </div>
<div className="h-10 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 font-manrope" style={{}}>
            HEALTH CORP
          </div>
<div className="h-10 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 font-manrope" style={{}}>
            INVEST GRP
          </div>
<div className="h-10 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 font-manrope" style={{}}>
            GOV AGENCY
          </div>
<div className="h-10 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 hidden lg:flex font-manrope" style={{}}>
            TECH INNOV
          </div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl tracking-tight text-primary font-manrope font-medium" style={{}}>
            Insights &amp; Updates
          </h2>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-primary transition-all font-manrope" href="#" style={{}}>
            Read More Insights
          </a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="bg-slate-200 rounded-lg h-48 mb-4 overflow-hidden relative">
<img alt="Health Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-secondary">
<span className="font-manrope" style={{}}>Analysis</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-slate-400 font-manrope" style={{}}>
                5 min read
              </span>
</div>
<h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2 font-manrope" style={{}}>
              Investment Outlook for Health-Tech in West Africa
            </h3>
<p className="text-sm text-slate-500 line-clamp-2 font-manrope" style={{}}>
              Analyzing the trends driving capital into digital health solutions
              across the region.
            </p>
</a>

<a className="group block" href="#">
<div className="bg-slate-200 rounded-lg h-48 mb-4 overflow-hidden relative">
<img alt="Workforce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-secondary">
<span className="font-manrope" style={{}}>Report</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-slate-400 font-manrope" style={{}}>
                4 min read
              </span>
</div>
<h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2 font-manrope" style={{}}>
              Workforce Innovation and the Future of Health Delivery
            </h3>
<p className="text-sm text-slate-500 line-clamp-2 font-manrope" style={{}}>
              Strategies to retain talent and upskill healthcare workers in
              emerging markets.
            </p>
</a>

<a className="group block" href="#">
<div className="bg-slate-200 rounded-lg h-48 mb-4 overflow-hidden relative">
<img alt="PPP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-secondary">
<span className="font-manrope" style={{}}>Policy</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-slate-400 font-manrope" style={{}}>
                6 min read
              </span>
</div>
<h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2 font-manrope" style={{}}>
              Public-Private Partnerships in the Nigerian Health Sector
            </h3>
<p className="text-sm text-slate-500 line-clamp-2 font-manrope" style={{}}>
              How collaborative models are bridging the infrastructure gap
              effectively.
            </p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-secondary mb-6 opacity-80 iconify--lucide" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<blockquote className="text-2xl md:text-3xl text-primary tracking-tight leading-normal mb-8 font-manrope font-medium" style={{}}>
          “Platforms like the Lagos Health Summit are essential for aligning
          perspectives and accelerating decision-making across the sector.”
        </blockquote>
<div className="text-slate-500 font-medium text-sm font-manrope" style={{}}>
          — Healthcare Policy Director, West Africa
        </div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-primary rounded-2xl p-8 md:p-16 text-center md:text-left relative overflow-hidden shadow-xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl text-white tracking-tight mb-4 font-manrope font-medium" style={{}}>
                Partner With Us
              </h2>
<p className="text-blue-100 text-lg mb-8 leading-relaxed font-manrope" style={{}}>
                Let’s explore opportunities to collaborate, co-host events,
                support projects, or sponsor initiatives shaping Africa’s
                healthcare future.
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-slate-100 transition shadow-sm font-manrope" style={{}}>
                  Collaborate with HCA
                </button>
<button className="px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/90 transition shadow-sm font-manrope" style={{}}>
                  Sponsor an Event
                </button>
<button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition shadow-sm font-manrope">
                  Join Mailing List
                </button>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-white">
<h4 className="font-semibold mb-6 border-b border-white/10 pb-4 font-manrope" style={{}}>
                Contact Information
              </h4>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-blue-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<a className="hover:text-white transition font-manrope" href="mailto:hello@hcaconsults.com">
                    info@hcaconsults.com
                  </a>
</div>
<div className="flex items-center gap-3 text-sm text-blue-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-manrope" style={{}}>
                    +234 (0) 123 456 7890
                  </span>
</div>
<div className="flex items-center gap-3 text-sm text-blue-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<span className="font-manrope" style={{}}>Lagos, Nigeria</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded tracking-tighter text-xs font-manrope font-semibold" style={{}}>
                HC
              </div>
<span className="text-primary font-bold tracking-tight text-sm font-manrope" style={{}}>
                HCA CONSULTS
              </span>
</a>
<p className="text-xs text-slate-500 leading-relaxed font-manrope" style={{}}>
              Strengthening healthcare systems through communication, policy
              alignment, and investment facilitation.
            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-primary mb-4 font-manrope" style={{}}>
              Company
            </h4>
<ul className="space-y-2 text-xs text-slate-500">
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  About Us
                </a>
</li>
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  Careers
                </a>
</li>
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-primary mb-4 font-manrope" style={{}}>
              Resources
            </h4>
<ul className="space-y-2 text-xs text-slate-500">
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  Blog
                </a>
</li>
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  Reports
                </a>
</li>
<li>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
                  Event Gallery
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-primary mb-4 font-manrope" style={{}}>
              Newsletter
            </h4>
<form className="flex flex-col gap-2">
<input className="px-3 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400" placeholder="Enter your email" type="email"/>
<button className="px-3 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition shadow-sm font-medium font-manrope" style={{}} type="submit">
                Subscribe
              </button>
</form>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p className="font-manrope" style={{}}>
            © 2026 HCA Consults. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
              Privacy Policy
            </a>
<a className="hover:text-primary transition font-manrope" href="#" style={{}}>
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
