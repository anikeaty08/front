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



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Observer
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        
                        // Handle counters inside revealed sections
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if (counter.innerText === '0') {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000; // ms
                                const frames = 60;
                                const step = target / (duration / (1000 / frames));
                                let current = 0;
                                
                                const updateCounter = () => {
                                    current += step;
                                    if (current < target) {
                                        counter.innerText = Math.ceil(current);
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.innerText = target;
                                    }
                                };
                                updateCounter();
                            }
                        });
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
            
            // Navbar Scroll Effect
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-md');
                } else {
                    nav.classList.remove('shadow-md');
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#003560]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-white font-['Playfair_Display',_serif] text-xl font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
                IAG <span className="text-white/60 font-['Barlow',_sans-serif] text-sm tracking-widest font-medium mt-1">Capital Markets</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#services">Services</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#transactions">Transactions</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#process">Strategy</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen bg-[#003560] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-20">
<svg className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" preserveaspectratio="none" viewbox="0 0 1000 1000">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#008CD0', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#008CD0', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#008CD0', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="transform origin-center rotate-45" d="M0,500 L1000,500" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
<path className="transform origin-center -rotate-45" d="M0,500 L1000,500" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
<circle cx="500" cy="500" fill="none" r="300" stroke="url(#grad1)" strokeWidth="1"></circle>
<circle cx="500" cy="500" fill="none" r="450" stroke="url(#grad1)" strokeWidth="1"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h1 className="font-['Playfair_Display',_serif] text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] max-w-4xl">
                Middle Market M&amp;A Advisory Built for Institutional Clients
            </h1>
<p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
                End-to-end M&amp;A solutions for businesses with $10M–$150M in transaction value.
            </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#008CD0] text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-[#008CD0]/90 transition-all shadow-[0_4px_14px_0_rgba(0,140,208,0.39)] hover:shadow-[0_6px_20px_rgba(0,140,208,0.23)]" href="#transactions">
                    View Our Track Record
                </a>
<a className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-white hover:text-[#003560] transition-colors" href="#contact">
                    Get in Touch
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="track-record">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<span className="text-xs font-semibold tracking-[0.2em] text-[#0066BA] uppercase">Track Record</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center border-t border-b border-[#F5F4F9] py-16 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div>
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl font-semibold text-[#0066BA] tracking-tight mb-3">
                        $<span className="counter" data-target="7">0</span>B+
                    </div>
<div className="text-sm font-medium text-[#1B1B1B]/80 uppercase tracking-wide">Total Transaction Value</div>
</div>

<div className="lg:border-l border-[#F5F4F9]">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl font-semibold text-[#0066BA] tracking-tight mb-3">
<span className="counter" data-target="500">0</span>+
                    </div>
<div className="text-sm font-medium text-[#1B1B1B]/80 uppercase tracking-wide">Transactions Closed</div>
</div>

<div className="lg:border-l border-[#F5F4F9]">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl font-semibold text-[#0066BA] tracking-tight mb-3">
                        $10M+
                    </div>
<div className="text-sm font-medium text-[#1B1B1B]/80 uppercase tracking-wide">Target Value Range</div>
</div>

<div className="lg:border-l border-[#F5F4F9]">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl font-semibold text-[#0066BA] tracking-tight mb-3">
<span className="counter" data-target="16">0</span>
</div>
<div className="text-sm font-medium text-[#1B1B1B]/80 uppercase tracking-wide">Years Of Proven Results</div>
</div>
</div>
<div className="mt-16 text-center max-w-3xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
<p className="text-base text-[#1B1B1B]/70 leading-loose">
                    IAG has over 200 years of collective experience navigating the complexities of middle-market ownership, designing full-service exit strategies to maximize value and protect clients' legacies.
                </p>
<a className="inline-flex items-center gap-2 mt-8 text-[#008CD0] text-sm font-semibold tracking-wide hover:text-[#0066BA] transition-colors group" href="#transactions">
                    Explore Our Transactions 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F4F9]" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<span className="text-xs font-semibold tracking-[0.2em] text-[#0066BA] uppercase block mb-4">Our Process</span>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-semibold text-[#1B1B1B] tracking-tight">
                    A Structured Path to Maximum Value
                </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-black/10 z-0"></div>

<div className="relative z-10 bg-[#F5F4F9]">
<div className="text-4xl font-['Playfair_Display',_serif] text-[#008CD0] mb-6 bg-[#F5F4F9] inline-block pr-4">01</div>
<h3 className="text-lg font-semibold text-[#1B1B1B] mb-3 pr-4">Assessment &amp; Valuation</h3>
<p className="text-sm text-[#1B1B1B]/70 leading-relaxed pr-4">Proprietary evaluation tools for precise estimates and market positioning.</p>
</div>

<div className="relative z-10 bg-[#F5F4F9]">
<div className="text-4xl font-['Playfair_Display',_serif] text-[#008CD0] mb-6 bg-[#F5F4F9] inline-block pr-4">02</div>
<h3 className="text-lg font-semibold text-[#1B1B1B] mb-3 pr-4">Preparation &amp; Positioning</h3>
<p className="text-sm text-[#1B1B1B]/70 leading-relaxed pr-4">Streamlining financials and enhancing buyer appeal before market entry.</p>
</div>

<div className="relative z-10 bg-[#F5F4F9]">
<div className="text-4xl font-['Playfair_Display',_serif] text-[#008CD0] mb-6 bg-[#F5F4F9] inline-block pr-4">03</div>
<h3 className="text-lg font-semibold text-[#1B1B1B] mb-3 pr-4">Buyer Engagement</h3>
<p className="text-sm text-[#1B1B1B]/70 leading-relaxed pr-4">Creating competitive bidding environments within highly confidential networks.</p>
</div>

<div className="relative z-10 bg-[#F5F4F9]">
<div className="text-4xl font-['Playfair_Display',_serif] text-[#008CD0] mb-6 bg-[#F5F4F9] inline-block pr-4">04</div>
<h3 className="text-lg font-semibold text-[#1B1B1B] mb-3 pr-4">Transaction Execution</h3>
<p className="text-sm text-[#1B1B1B]/70 leading-relaxed pr-4">Managing every legal, tax, and structural detail meticulously through closing.</p>
</div>
</div>
<div className="mt-16 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
<a className="inline-flex items-center gap-2 text-[#008CD0] text-sm font-semibold tracking-wide hover:text-[#0066BA] transition-colors group" href="#services">
                    Learn About Our Strategy 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#003560] text-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<span className="text-xs font-semibold tracking-[0.2em] text-[#008CD0] uppercase block mb-4">Market Reach</span>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-semibold text-white tracking-tight">
                    We Work Across All Business Sectors
                </h2>
<p className="mt-6 text-base text-white/70 max-w-2xl font-medium">
                    Major national presence with deep industry expertise across every major business sector, ensuring targeted approaches for niche markets.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="border border-white/10 p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start gap-4">
<iconify-icon icon="solar:buildings-linear" style={{fontSize: '2rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-wide">Manufacturing</span>
</div>

<div className="border border-white/10 p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start gap-4">
<iconify-icon icon="solar:case-linear" style={{fontSize: '2rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-wide">Business Services</span>
</div>

<div className="border border-white/10 p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start gap-4">
<iconify-icon icon="solar:heart-pulse-linear" style={{fontSize: '2rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-wide">Healthcare</span>
</div>

<div className="border border-white/10 p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start gap-4">
<iconify-icon icon="solar:box-linear" style={{fontSize: '2rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-wide leading-tight">Distribution &amp; Logistics</span>
</div>

<div className="border border-white/10 p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start gap-4">
<iconify-icon icon="solar:monitor-linear" style={{fontSize: '2rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-wide">Technology</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<span className="text-xs font-semibold tracking-[0.2em] text-[#0066BA] uppercase block mb-4">Services</span>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-semibold text-[#1B1B1B] tracking-tight">
                    Full-Service Mergers &amp; Acquisitions
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="bg-[#F5F4F9] p-10 md:p-14 rounded-sm border border-black/5">
<h3 className="font-['Playfair_Display',_serif] text-2xl font-semibold text-[#0066BA] tracking-tight mb-8">Advisory &amp; Planning</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:document-text-linear" style={{fontSize: '1.25rem', color: '#1B1B1B', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#1B1B1B]">Legal Consultation &amp; Structuring</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:calculator-linear" style={{fontSize: '1.25rem', color: '#1B1B1B', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#1B1B1B]">Tax Guidance &amp; Optimization</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:chart-square-linear" style={{fontSize: '1.25rem', color: '#1B1B1B', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#1B1B1B]">Comprehensive Financial Planning</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:wallet-money-linear" style={{fontSize: '1.25rem', color: '#1B1B1B', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#1B1B1B]">Post-Transaction Wealth Management</span>
</li>
</ul>
</div>

<div className="bg-[#003560] p-10 md:p-14 rounded-sm text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#008CD0] opacity-10 rounded-bl-full blur-2xl"></div>
<h3 className="font-['Playfair_Display',_serif] text-2xl font-semibold text-white tracking-tight mb-8 relative z-10">Execution &amp; Value Creation</h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:door-open-linear" style={{fontSize: '1.25rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-white/90">Strategic Exit Preparation</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:graph-up-linear" style={{fontSize: '1.25rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-white/90">Valuation &amp; Business Improvements</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:global-linear" style={{fontSize: '1.25rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-white/90">Aggressive Market Preparation</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5" icon="solar:users-group-rounded-linear" style={{fontSize: '1.25rem', color: '#008CD0', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-white/90">Highly Confidential Buyer Networks</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
<a className="inline-flex items-center gap-2 text-[#0066BA] text-sm font-semibold tracking-wide hover:text-[#003560] transition-colors group" href="#services">
                    View All Services 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F4F9]" id="transactions">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div>
<span className="text-xs font-semibold tracking-[0.2em] text-[#0066BA] uppercase block mb-4">Transactions</span>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-semibold text-[#1B1B1B] tracking-tight">
                        A Proven Track Record
                    </h2>
</div>
<a className="inline-flex items-center gap-2 text-[#008CD0] text-sm font-semibold tracking-wide hover:text-[#0066BA] transition-colors group pb-2" href="#transactions">
                    View All Transactions 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="bg-white border border-black/5 border-t-2 border-t-[#0066BA] p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
<span className="text-xs font-semibold tracking-widest text-[#1B1B1B]/50 uppercase mb-6">Manufacturing</span>
<h4 className="font-['Playfair_Display',_serif] text-2xl font-semibold text-[#1B1B1B] tracking-tight mb-6">M&amp;A Advisory</h4>
<div className="w-12 h-px bg-[#0066BA]/30 mb-6"></div>
<p className="text-sm font-medium text-[#1B1B1B]/70">Exclusive Sell-Side Advisor to<br/>Mid-Western Components Corp.</p>
</div>

<div className="bg-white border border-black/5 border-t-2 border-t-[#0066BA] p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
<span className="text-xs font-semibold tracking-widest text-[#1B1B1B]/50 uppercase mb-6">Business Services</span>
<h4 className="font-['Playfair_Display',_serif] text-2xl font-semibold text-[#1B1B1B] tracking-tight mb-6">M&amp;A Advisory</h4>
<div className="w-12 h-px bg-[#0066BA]/30 mb-6"></div>
<p className="text-sm font-medium text-[#1B1B1B]/70">Exclusive Sell-Side Advisor to<br/>National Facilities Group</p>
</div>

<div className="bg-white border border-black/5 border-t-2 border-t-[#0066BA] p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
<span className="text-xs font-semibold tracking-widest text-[#1B1B1B]/50 uppercase mb-6">Healthcare</span>
<h4 className="font-['Playfair_Display',_serif] text-2xl font-semibold text-[#1B1B1B] tracking-tight mb-6">M&amp;A Advisory</h4>
<div className="w-12 h-px bg-[#0066BA]/30 mb-6"></div>
<p className="text-sm font-medium text-[#1B1B1B]/70">Exclusive Sell-Side Advisor to<br/>Regional Medical Supply Co.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0066BA] pt-24 pb-8 text-white" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-20 border-b border-white/20 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-xl leading-tight">
                    Ready to Explore Your Options?
                </h2>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
<a className="inline-flex items-center justify-center bg-white text-[#0066BA] px-8 py-4 rounded-sm text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors" href="#">
                        Schedule a Consultation
                    </a>
<a className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-wide hover:bg-white hover:text-[#0066BA] transition-colors" href="#">
                        Learn More
                    </a>
</div>
</div>

<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
<div className="flex items-center gap-2">
<span className="font-['Playfair_Display',_serif] text-lg font-semibold tracking-tighter uppercase">IAG</span>
</div>
<div className="text-center md:text-left text-xs text-white/70 font-medium tracking-wide">
                    4004 Beltline Rd., Suite 112 Addison, TX 75001 <span className="mx-2 opacity-50">·</span> (800) 788-7377 <span className="mx-2 opacity-50">·</span> iagmerger.com/capitalmarkets
                </div>
<div className="flex gap-6">
<a className="text-xs text-white/70 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-white/70 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
