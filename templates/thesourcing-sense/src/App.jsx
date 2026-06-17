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



        // Simple slide-up for cookie banner after 2s
        setTimeout(() => {
            document.getElementById('cookie-banner').classList.remove('translate-y-full');
        }, 2000);
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 column-grid w-full h-full opacity-50"></div>

<nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="font-serif tracking-widest text-lg text-[#d4af37] uppercase z-10">
                Sourcing Sense
            </div>
<div className="hidden md:flex gap-8 text-sm tracking-wide text-gray-300">
<a className="hover:text-[#d4af37] transition-colors" href="#services">Services</a>
<a className="hover:text-[#d4af37] transition-colors" href="#process">Process</a>
<a className="hover:text-[#d4af37] transition-colors" href="#about">About</a>
<a className="hover:text-[#d4af37] transition-colors" href="#contact">Contact</a>
</div>
<a className="bg-transparent border border-[#d4af37] text-[#d4af37] px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300 font-medium" href="https://calendly.com/soursingsense" target="_blank">
                Book Consultation
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border border-white/5 rounded-full z-0 opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] border border-[#d4af37]/10 rounded-full z-0 animate-[spin_60s_linear_infinite]"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="mb-6 flex justify-center">
<div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-[#d4af37]"></div>
</div>
<h2 className="text-[#d4af37] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium">AI Procurement Consultant</h2>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-[#f5f5f5]">
                Procurement<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5] via-[#d4af37] to-[#f5f5f5]">We make it DONE!</span>
</h1>
<p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                AI consulting that delivers ROI, not corporate BS. 8 years of procurement expertise meets Lean Six Sigma precision.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<a className="group relative px-8 py-4 bg-[#d4af37] text-[#1a1a1a] font-serif font-medium tracking-tight overflow-hidden transition-all hover:bg-white" href="https://calendly.com/soursingsense">
<span className="relative z-10 flex items-center gap-2">
                        Book Free 15-Min AI Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</a>
<a className="text-gray-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all text-sm tracking-wide flex items-center gap-2" href="#process">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    See How It Works
                </a>
</div>
</div>
</header>

<section className="relative py-24 md:py-32 px-6 border-t border-white/5 bg-[#1a1a1a]/50" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<div>
<span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase block mb-2">My Offer</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">What I Do</h2>
</div>
<div className="text-right hidden md:block">
<iconify-icon className="text-[#2c3e50]" height="48" icon="solar:round-graph-linear" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover-card group relative p-8 bg-[#2c3e50]/20 border border-white/5 hover:border-[#d4af37]/50 backdrop-blur-sm">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 text-[#d4af37]">
<iconify-icon icon="solar:columns-linear" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 tracking-tight">AI Strategy Sessions</h3>
<p className="text-[#d4af37] text-sm mb-4 font-mono">€200/hour</p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        ROI-focused AI roadmap for procurement integration. We strip away the hype and focus on pure Lean methodology integration.
                    </p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Strategic Audit</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Tool Selection</li>
</ul>
</div>

<div className="hover-card group relative p-8 bg-[#2c3e50]/20 border border-white/5 hover:border-[#d4af37]/50 backdrop-blur-sm">
<div className="mb-6 text-[#d4af37]">
<iconify-icon icon="solar:sitemap-linear" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 tracking-tight">AI Implementation</h3>
<p className="text-[#d4af37] text-sm mb-4 font-mono">€2,000 / project</p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        From assessment to execution. We identify quick wins using Lean Six Sigma approaches to automate workflows.
                    </p>
<ul className="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Full Execution</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Staff Training</li>
</ul>
</div>

<div className="hover-card group relative p-8 bg-gradient-to-b from-[#2c3e50]/40 to-[#1a1a1a] border border-[#d4af37]/30 hover:border-[#d4af37]">
<div className="absolute top-4 right-4">
<span className="text-[10px] uppercase tracking-wider bg-[#d4af37] text-[#1a1a1a] px-2 py-1 font-bold">Limited</span>
</div>
<div className="mb-6 text-[#d4af37]">
<iconify-icon icon="solar:medal-ribbon-linear" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2 tracking-tight">First 2 Projects FREE</h3>
<p className="text-[#d4af37] text-sm mb-4 font-mono">€0.00 (Launch Offer)</p>
<p className="text-gray-300 text-sm leading-relaxed mb-6">
                        Complete implementation at no cost. In exchange for a detailed testimonial and a LinkedIn case study.
                    </p>
<a className="block text-center w-full py-3 bg-[#f5f5f5] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-colors" href="#contact">
                        Claim Spot
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#1a1a1a]" id="process">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase">Kaizen Flow</span>
<h2 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">The Process</h2>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group">
<div className="md:w-[45%] mb-6 md:mb-0 text-left md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
<h3 className="font-serif text-xl text-white mb-2">Free 15-Min Discovery</h3>
<p className="text-sm text-gray-400">Book via Calendly. We discuss your biggest procurement challenge. No sales pitch, just assessment.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border border-[#d4af37] bg-[#1a1a1a] flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:bg-[#d4af37] transition-colors duration-500">
<span className="text-[10px] text-white group-hover:text-black">01</span>
</div>
<div className="md:w-[45%] pl-12 md:pl-12 opacity-30 md:opacity-100">
<iconify-icon className="text-gray-600 md:text-gray-700" icon="solar:calendar-linear" width="32"></iconify-icon>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-24 group">
<div className="md:w-[45%] mb-6 md:mb-0 text-left pl-12 md:pl-12">
<h3 className="font-serif text-xl text-white mb-2">Structured Questionnaire</h3>
<p className="text-sm text-gray-400">You receive a detailed assessment form to identify quick wins &amp; ROI opportunities using Lean framework.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border border-[#d4af37] bg-[#1a1a1a] flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:bg-[#d4af37] transition-colors duration-500">
<span className="text-[10px] text-white group-hover:text-black">02</span>
</div>
<div className="md:w-[45%] text-right pr-12 opacity-30 md:opacity-100">
<iconify-icon className="text-gray-600 md:text-gray-700" icon="solar:clipboard-list-linear" width="32"></iconify-icon>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-[45%] mb-6 md:mb-0 text-left md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
<h3 className="font-serif text-xl text-white mb-2">Execution &amp; Results</h3>
<p className="text-sm text-gray-400">Strategic session with action plan OR full implementation project. Clear deliverables, measurable outcomes.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border border-[#d4af37] bg-[#1a1a1a] flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:bg-[#d4af37] transition-colors duration-500">
<span className="text-[10px] text-white group-hover:text-black">03</span>
</div>
<div className="md:w-[45%] pl-12 md:pl-12 opacity-30 md:opacity-100">
<iconify-icon className="text-gray-600 md:text-gray-700" icon="solar:rocket-2-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#2c3e50]/10" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-[#d4af37]/30"></div>
<div className="absolute -bottom-10 -right-10 w-20 h-20 border-b border-r border-[#d4af37]/30"></div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">
                    "If it doesn't make sense, <span className="text-[#d4af37]">I walk away.</span>"
                </h2>
<div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
<p>
                        I'm David Račak. I've spent 8 years in procurement learning what works and what's just expensive noise.
                    </p>
<p>
                        I don't do fluffy presentations or buzzword bingo. If AI can't show ROI in your procurement within 90 days, I'll tell you to wait. If it can, I'll build it with you.
                    </p>
<p>
                        My approach: Ancient Roman engineering discipline meets Japanese Lean efficiency. Strong foundations, zero waste, measurable results.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-[#f5f5f5]">
<iconify-icon className="text-[#d4af37]" icon="solar:medal-star-linear"></iconify-icon>
<span>Lean Six Sigma Green Belt</span>
</div>
<div className="flex items-center gap-3 text-sm text-[#f5f5f5]">
<iconify-icon className="text-[#d4af37]" icon="solar:case-minimalistic-linear"></iconify-icon>
<span>8+ Years Procurement</span>
</div>
<div className="flex items-center gap-3 text-sm text-[#f5f5f5]">
<iconify-icon className="text-[#d4af37]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span>20 Years Leadership (Scouting)</span>
</div>
<div className="flex items-center gap-3 text-sm text-[#f5f5f5]">
<iconify-icon className="text-[#d4af37]" icon="solar:cpu-bolt-linear"></iconify-icon>
<span>AI &amp; Automation Specialist</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] flex items-center justify-center bg-[#1a1a1a] border border-white/5 group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#2c3e50]/20 to-transparent"></div>
<div className="text-center z-10 p-8">
<iconify-icon className="text-[#d4af37] mb-4 text-6xl opacity-80 group-hover:scale-110 transition-transform duration-700" icon="solar:user-circle-linear"></iconify-icon>
<h3 className="font-serif text-2xl text-white tracking-tight">David Račak</h3>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Founder, Sourcing Sense</p>
</div>

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">Insights &amp; Blueprints</h2>
<a className="text-xs uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="bg-[#1a1a1a] border border-white/5 p-6 hover:border-[#d4af37]/30 transition-colors group">
<div className="text-[10px] text-[#d4af37] uppercase tracking-wider mb-3">Case Study</div>
<h3 className="font-serif text-lg mb-3 group-hover:text-[#d4af37] transition-colors">Reducing Supplier Onboarding Time by 60% with AI</h3>
<div className="h-px w-8 bg-gray-700 mt-4 mb-4"></div>
<p className="text-sm text-gray-500">Coming soon</p>
</article>

<article className="bg-[#1a1a1a] border border-white/5 p-6 hover:border-[#d4af37]/30 transition-colors group">
<div className="text-[10px] text-[#d4af37] uppercase tracking-wider mb-3">Lean Tips</div>
<h3 className="font-serif text-lg mb-3 group-hover:text-[#d4af37] transition-colors">The 5 "Whys" of Procurement Waste</h3>
<div className="h-px w-8 bg-gray-700 mt-4 mb-4"></div>
<p className="text-sm text-gray-500">Coming soon</p>
</article>

<article className="bg-[#1a1a1a] border border-white/5 p-6 hover:border-[#d4af37]/30 transition-colors group flex items-center justify-center">
<div className="text-center text-gray-600">
<iconify-icon className="mb-2 text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
<p className="text-xs uppercase tracking-widest">More insights dropping weekly</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[#2c3e50]/10"></div>
<div className="relative max-w-4xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6 text-white">Ready to Make Procurement DONE?</h2>
<p className="text-gray-400 mb-10 text-lg">
                No corporate fluff. Just results. First 2 implementation projects are <span className="text-[#d4af37]">FREE</span> in exchange for a testimonial.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
<a className="bg-[#d4af37] text-[#1a1a1a] px-10 py-4 font-serif font-medium hover:bg-white transition-colors flex items-center gap-2" href="https://calendly.com/soursingsense">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                    Book Free Consultation
                </a>
<a className="px-10 py-4 border border-white/10 hover:border-[#d4af37] text-gray-300 hover:text-[#d4af37] transition-colors flex items-center gap-2" href="mailto:hello@sourcing-sense.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    hello@sourcing-sense.com
                </a>
</div>
<div className="inline-block p-4 border border-[#d4af37]/20 rounded-sm bg-[#1a1a1a]">
<a className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
                    Connect with David on LinkedIn
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#151515] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12">
<div>
<h4 className="font-serif text-[#d4af37] tracking-widest uppercase mb-4 text-sm">Sourcing Sense</h4>
<p className="text-gray-500 text-sm max-w-xs">Procurement We make it DONE!</p>
</div>
<div className="flex gap-8 text-xs tracking-widest uppercase text-gray-500">
<a className="hover:text-[#d4af37]" href="#">Privacy Policy</a>
<a className="hover:text-[#d4af37]" href="#">Terms</a>
<a className="hover:text-[#d4af37]" href="#">LinkedIn</a>
</div>
</div>
<div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-[10px] text-gray-600 uppercase tracking-wider">
            © 2026 Sourcing Sense | David Račak
        </div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] border-t border-[#d4af37] p-4 transform translate-y-full transition-transform duration-500 z-50 flex flex-col md:flex-row justify-between items-center gap-4" id="cookie-banner">
<p className="text-xs text-gray-400 text-center md:text-left">We use cookies to ensure you get the best experience. No tracking without consent.</p>
<div className="flex gap-4">
<button className="text-xs uppercase tracking-wider text-gray-400 hover:text-white" onclick="document.getElementById('cookie-banner').style.transform='translateY(100%)'">Decline</button>
<button className="text-xs uppercase tracking-wider text-[#1a1a1a] bg-[#d4af37] px-4 py-1 hover:bg-white" onclick="document.getElementById('cookie-banner').style.transform='translateY(100%)'">Accept</button>
</div>
</div>


    </>
  );
}
