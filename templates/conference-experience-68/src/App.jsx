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



    function setSpotlight(e, card) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }

    document.addEventListener('DOMContentLoaded', () => {
      const menuBtn = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
          const isOpen = menu.dataset.open === 'true';
          menu.dataset.open = String(!isOpen);
          menuBtn.setAttribute('aria-expanded', String(!isOpen));
        });
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
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
      
<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(224,122,95,0.10)_0%,transparent_70%)] blur-[110px]"></div>
<div className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.10)_0%,transparent_60%)] blur-[120px]"></div>
<div className="absolute inset-0 bg-grain opacity-[0.03] mix-blend-overlay"></div>
</div>
<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[rgba(224,122,95,0.55)] transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-[#E07A5F] transition-colors"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">EXCHANGE 2026</span>
</a>
<div className="hidden lg:flex items-center gap-1">
<a className="px-4 py-2 text-xs text-white font-medium rounded-full bg-white/5" href="/">Home</a>
<a className="px-4 py-2 text-xs text-white/70 hover:text-white font-medium transition-colors rounded-full hover:bg-white/5" href="/experience">Experience</a>
<a className="px-4 py-2 text-xs text-white/70 hover:text-white font-medium transition-colors rounded-full hover:bg-white/5" href="/agenda">Agenda &amp; Programming</a>
<a className="px-4 py-2 text-xs text-white/70 hover:text-white font-medium transition-colors rounded-full hover:bg-white/5" href="/brand">Brand Elements</a>
<a className="px-4 py-2 text-xs text-white/70 hover:text-white font-medium transition-colors rounded-full hover:bg-white/5" href="/sponsorship">Sponsorship</a>
</div>
<div className="flex items-center gap-4">
<button aria-expanded="false" aria-label="Toggle menu" className="lg:hidden text-white/70 hover:text-white" id="mobile-menu-toggle" type="button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
<div className="lg:hidden absolute left-0 top-16 w-full bg-[#020617]/95 border-b border-white/10 px-6 py-4 opacity-0 pointer-events-none -translate-y-2 transition-all duration-250" data-open="false" id="mobile-menu">
<div className="flex flex-col gap-1 text-sm">
<a className="px-3 py-2 rounded-lg text-white bg-white/5" href="/">Home</a>
<a className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="/experience">Experience</a>
<a className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="/agenda">Agenda &amp; Programming</a>
<a className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="/brand">Brand Elements</a>
<a className="px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="/sponsorship">Sponsorship</a>
</div>
</div>
</nav>
<main className="relative z-10">
<section className="pt-32 pb-14 md:pt-40 md:pb-20 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="hero-shell rounded-3xl p-7 md:p-10">
<div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<p className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/65 mb-7 md:mb-8">Creative Proposal Introduction · Circle City, Indianapolis</p>
<div className="mb-5">
<div className="w-full max-w-[760px] h-[128px] md:h-[152px] rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center">
<p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.22em] text-white/55 text-center px-4">Lockup Image Placeholder - upload final logo lockup asset here</p>
</div>
</div>
<p className="text-sm md:text-base text-slate-300/85 max-w-2xl leading-relaxed">A city-rooted experience designed for stronger relationships, clearer outcomes, and a more memorable Marriott moment in Indianapolis.</p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="premium-btn inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E07A5F]/40 bg-[#E07A5F]/15 text-white text-sm font-medium" href="/agenda">
<span>See Program Architecture</span><iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="premium-btn inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium" href="/brand">
<span>View Brand Language</span><iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-5">
<div className="glass-panel rounded-2xl p-5 md:p-6 spotlight-card" onmousemove="setSpotlight(event,this)">
<div className="aspect-square rounded-xl border border-white/10 bg-[#0b1226]/80 relative overflow-hidden flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 420 420">
<g className="ring-orbit">
<circle cx="210" cy="210" r="150" stroke="rgba(224,122,95,0.55)" stroke-dasharray="7 8" strokeWidth="1.4"></circle>
</g>
<g className="ring-orbit-slow">
<circle cx="210" cy="210" r="105" stroke="rgba(45,244,255,0.45)" stroke-dasharray="4 6" strokeWidth="1.2"></circle>
</g>
<circle cx="210" cy="210" r="60" stroke="rgba(124,58,237,0.45)" strokeWidth="1"></circle>
<circle cx="210" cy="210" fill="rgba(224,122,95,0.95)" r="8"></circle>
</svg>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/55">
<span>Theme Engine</span>
<span>The Inner Circle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-8 md:py-10 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel rounded-xl p-4 spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-2xl text-white font-semibold">1</p><p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Unified Creative Thesis</p></div>
<div className="glass-panel rounded-xl p-4 spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-2xl text-white font-semibold">3</p><p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Strategic Pillars</p></div>
<div className="glass-panel rounded-xl p-4 spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-2xl text-white font-semibold">5</p><p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Orbit Tracks + All-Track Layers</p></div>
<div className="glass-panel rounded-xl p-4 spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-2xl text-white font-semibold">Full</p><p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Scope Alignment Confidence</p></div>
</div>
</div>
</section>
<section className="py-14 md:py-16 border-t border-white/5 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="mb-10">
<p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(224,122,95,0.80)] mb-3">RFP Intelligence</p>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight">We heard the brief clearly, and built a response architecture around it.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<article className="signal-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 mb-2">Experience Profile</p>
<p className="text-2xl text-white font-semibold">1,300</p>
<p className="text-xs text-slate-400 mt-1">631 customers + 669 Marriott associates/hoteliers</p>
</article>
<article className="signal-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 mb-2">Business Need</p>
<p className="text-2xl text-white font-semibold">9</p>
<p className="text-xs text-slate-400 mt-1">Experience objectives mapped to concrete design/program responses</p>
</article>
<article className="signal-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 mb-2">Timeline Reality</p>
<p className="text-2xl text-white font-semibold">Tight</p>
<p className="text-xs text-slate-400 mt-1">Fast-turn structure built for Feb 2026 decision and kickoff cadence</p>
</article>
<article className="signal-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 mb-2">Value Envelope</p>
<p className="text-2xl text-white font-semibold">$300k+</p>
<p className="text-xs text-slate-400 mt-1">Core budget amplified with sponsor-funded activations + value engineering</p>
</article>
</div>
</div>
</section>
<section className="py-14 md:py-16 border-t border-white/5 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="mb-10">
<p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(224,122,95,0.80)] mb-3">Theme + Tone</p>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight">From Circle City to The Inner Circle</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<article className="pillar-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#E07A5F] mb-3">City Link</p>
<h3 className="text-xl text-white font-semibold mb-2">Host City DNA</h3>
<p className="text-sm text-slate-400 mb-4">Indianapolis is Circle City. We translate that local truth into a premium experience motif with rings, orbits, and structured connection moments.</p>
<span className="ui-tag inline-flex px-2 py-1 rounded border text-[10px] font-mono uppercase tracking-wider" style={{'--tag-color': '#E07A5F', borderColor: '#E07A5F55', color: '#E07A5F', background: '#E07A5F1A'}}>Authentic to Place</span>
</article>
<article className="pillar-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#2DF4FF] mb-3">Audience Signal</p>
<h3 className="text-xl text-white font-semibold mb-2">Premium but Human</h3>
<p className="text-sm text-slate-400 mb-4">The tone balances sophistication with warmth: cinematic visuals, clear logic, and interaction formats that create trust and utility fast.</p>
<span className="ui-tag inline-flex px-2 py-1 rounded border text-[10px] font-mono uppercase tracking-wider" style={{'--tag-color': '#2DF4FF', borderColor: '#2DF4FF55', color: '#2DF4FF', background: '#2DF4FF1A'}}>Executive-Friendly</span>
</article>
<article className="pillar-card spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#A78BFA] mb-3">Creative Intent</p>
<h3 className="text-xl text-white font-semibold mb-2">System, Not Decoration</h3>
<p className="text-sm text-slate-400 mb-4">Every visual choice supports strategy: wayfinding, program framing, content hierarchy, and post-experience follow-through artifacts.</p>
<span className="ui-tag inline-flex px-2 py-1 rounded border text-[10px] font-mono uppercase tracking-wider" style={{'--tag-color': '#A78BFA', borderColor: '#A78BFA55', color: '#A78BFA', background: '#A78BFA1A'}}>Design with Purpose</span>
</article>
</div>
</div>
</section>
<section className="py-14 md:py-16 border-t border-white/5 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="mb-10">
<p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(224,122,95,0.80)] mb-3">RFP Objective Mapping</p>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight">From Marriott goals to visible design and programming moves.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Strengthen Top Account Relationships</p><p className="text-xs text-slate-400">Pit Lane appointments + Afterglow salons + structured follow-up commitments.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Increase Product &amp; Brand Awareness</p><p className="text-xs text-slate-400">Core-ring general sessions, branded visuals, and clear narrative scaffolding.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Thought Leadership Positioning</p><p className="text-xs text-slate-400">Story-first scripting, high-signal formats, and keynote framing that teaches.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Senior Executive Access</p><p className="text-xs text-slate-400">Inner Ring programming architecture and curated access moments.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Local City Knowledge</p><p className="text-xs text-slate-400">Indianapolis integrations via Orbit Out sessions and place-based activations.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Business Growth / New Opportunities</p><p className="text-xs text-slate-400">Reverse Pitch, deal pathways, and marketplace action-card system.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Peer Networking &amp; Best Practices</p><p className="text-xs text-slate-400">Build-sprint breakouts and signal extraction workshops with output artifacts.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Promote Bonvoy + Bonvoy Events</p><p className="text-xs text-slate-400">All-track strategy moments focused on practical earning/use-case application.</p></article>
<article className="scope-row spotlight-card" onmousemove="setSpotlight(event,this)"><p className="text-sm text-white font-medium mb-1">Serve 360 Community Support</p><p className="text-xs text-slate-400">Orbit Out layer ties purpose programming to measurable local impact.</p></article>
</div>
</div>
</section>
<section className="py-14 md:py-16 border-t border-white/5 reveal">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[rgba(224,122,95,0.80)] mb-3">Strategic Pillars</p>
<h3 className="text-2xl text-white font-light tracking-tight mb-5">How we structure the experience to deliver measurable value.</h3>
<div className="space-y-3">
<div className="scope-row">
<p className="text-sm text-white font-medium mb-1">1) Shared Context Layer</p>
<p className="text-xs text-slate-400">All-track moments (keynotes, Bonvoy Events, Serve 360) align the room around the same strategic narrative.</p>
</div>
<div className="scope-row">
<p className="text-sm text-white font-medium mb-1">2) Structured Relationship Engine</p>
<p className="text-xs text-slate-400">Marketplaces, labs, and salons are designed for commitment exchange—not passive attendance.</p>
</div>
<div className="scope-row">
<p className="text-sm text-white font-medium mb-1">3) Monday-Ready Outcomes</p>
<p className="text-xs text-slate-400">Each major format outputs a practical artifact, intro pathway, or action brief to accelerate follow-up.</p>
</div>
</div>
</div>
<div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 spotlight-card" onmousemove="setSpotlight(event,this)">
<p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[rgba(224,122,95,0.80)] mb-3">Scope Confidence</p>
<h3 className="text-2xl text-white font-light tracking-tight mb-3">We understand the full delivery surface.</h3>
<div className="space-y-2 mb-6 text-sm text-slate-300">
<p>• Theme system + narrative framing</p>
<p>• Program architecture across tracks and all-track layers</p>
<p>• UX hierarchy for agenda, wayfinding, and session logic</p>
<p>• Brand expression across content, templates, and signage</p>
<p>• Scripting + motion + onsite environmental consultation</p>
<p>• Vendor ecosystem collaboration (Audie, Unbridled, Encore, CNTV, others)</p>
</div>
<div className="space-y-3">
<a className="premium-btn w-full inline-flex items-center justify-between px-4 py-3 rounded-xl border border-[#E07A5F]/45 bg-[#E07A5F]/16 text-white text-sm font-medium" href="/agenda">
<span>Continue to Agenda Framework</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="premium-btn w-full inline-flex items-center justify-between px-4 py-3 rounded-xl border border-white/18 bg-white/5 text-white text-sm font-medium" href="/brand">
<span>Continue to Brand System</span>
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative z-10 border-t border-white/5 bg-[#020617]/50 backdrop-blur-sm py-12">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#E07A5F] rounded-full"></div></div>
<span className="text-white font-semibold tracking-tight text-sm">EXCHANGE 2026 — THE INNER CIRCLE</span>
</div>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-white transition-colors" href="/">Home</a>
<a className="hover:text-white transition-colors" href="/experience">Experience</a>
<a className="hover:text-white transition-colors" href="/agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="/brand">Brand</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
