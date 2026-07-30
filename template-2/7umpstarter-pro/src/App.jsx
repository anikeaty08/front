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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100/50">
<div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="h-10 w-auto" fill="none" height="60" viewBox="0 0 300 100" width="180" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="sunGradient" x1="150" x2="150" y1="0" y2="100">
<stop offset="0" stop-color="#FCD34D"></stop>
<stop offset="0.5" stop-color="#F97316"></stop>
<stop offset="1" stop-color="#EF4444"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="waveGradient" x1="150" x2="150" y1="50" y2="100">
<stop offset="0" stop-color="#0EA5E9"></stop>
<stop offset="1" stop-color="#1E3A8A"></stop>
</lineargradient>
</defs>

<circle cx="160" cy="50" fill="url(#sunGradient)" opacity="0.9" r="45"></circle>

<rect fill="white" height="4" opacity="0.3" width="90" x="115" y="35"></rect>
<rect fill="white" height="4" opacity="0.3" width="90" x="115" y="50"></rect>

<path d="M190 30 Q 195 25, 200 30 Q 205 25, 210 30" fill="none" opacity="0.8" stroke="#0F172A" strokeWidth="2"></path>
<path d="M170 20 Q 175 15, 180 20 Q 185 15, 190 20" fill="none" opacity="0.8" stroke="#0F172A" strokeWidth="2"></path>

<path d="M 100 70 Q 130 60 160 70 T 220 70 V 100 H 100 Z" fill="url(#waveGradient)"></path>
<path d="M 80 80 Q 140 65 200 80 T 240 80 V 100 H 80 Z" fill="#0c4a6e" opacity="0.4"></path>

<path d="M 10 10 H 90 V 25 H 70 L 10 90 H 30 L 80 35 H 90" fill="none" stroke="#9A3412" strokeLinecap="butt" strokeWidth="12"></path>
<path d="M 10 10 H 90 L 30 90" fill="none" stroke="#0F172A" strokeWidth="0"></path> 

<path d="M 20 15 H 85 L 25 95" stroke="#1e293b" strokeLinecap="round" strokeWidth="8"></path>
<path d="M 15 15 H 90" stroke="#c2410c" strokeLinecap="round" strokeWidth="8"></path>
<path d="M 25 20 V 35" stroke="#c2410c" strokeLinecap="round" strokeWidth="6"></path>

<text fill="#0F172A" fontFamily="'Space Grotesk', sans-serif" fontSize="28" font-weight="700" letter-spacing="-0.5" x="85" y="65">UMPSTARTER</text>
</svg>
</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider" href="#inquire">
                Inquire
            </a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-50 via-white to-white -z-10"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-50/30 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center">

<h1 className="md:text-8xl lg:text-9xl animate-fade-up leading-[0.9] text-6xl font-semibold text-slate-900 tracking-tighter font-display mb-8">7umpstarter</h1>
<p className="md:text-xl leading-relaxed animate-fade-up delay-100 text-lg font-light text-slate-500 max-w-xl mr-auto ml-auto">Eine mobile Starthilfe, die im flachen Wasser platziert wird und einen sicheren, kontrollierten Einstieg ins Pumpfoilen ermöglicht.</p>
<div className="mt-12 animate-fade-up delay-200">
<svg aria-hidden="true" className="iconify text-slate-300 animate-bounce" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-2xl mx-auto">
<span className="uppercase block text-xs font-semibold text-cyan-900/60 tracking-widest mb-4">Die Experience</span>
<h2 className="md:text-4xl leading-tight text-3xl font-medium text-slate-900 tracking-tight mb-8">Der perfekte Einstieg ins Pumpfoil</h2>
<div className="space-y-6 text-slate-500 font-light text-lg leading-relaxed">
<p className="">Die Experience beginnt mit einem stabilen, ruhigen Start, der Sicherheit und Vertrauen vermittelt. Ohne Hektik und ohne komplizierte Manöver gelangt man kontrolliert ins Gleiten, findet sofort Rhythmus und Flow und kann sich ganz auf das Gefühl von Leichtigkeit, Balance und Bewegung über dem Wasser konzentrieren.</p>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3">
<h3 className="leading-tight text-3xl font-medium text-slate-900 tracking-tight">Produktion</h3>
</div>
<div className="md:w-2/3 space-y-6">
<p className="leading-relaxed text-lg font-light text-slate-500 border-slate-200 border-l pl-6">Der 7umpstarter wird in sorgfältiger Schweizer Qualität gefertigt. Mit einer Kombination aus modernsten Maschinen und präziser Handarbeit entsteht eine stabile und zuverlässige Startplattform. Vom Zuschnitt der Materialien bis zur Endmontage wird jeder Schritt kontrolliert, um maximale Sicherheit, Komfort und Präzision zu gewährleisten. Der 7umpstarter sorgt für einen sicheren und entspannten Einstieg ins Pumpfoilen.</p>
</div>
</div>
</section>

<section className="bg-stone-50 pt-32 pr-6 pb-32 pl-6" id="inquire">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Request Allocation</h2>
<p className="text-slate-500 font-light">
                    Due to the hand-finished nature of the 7umpstarter, production is limited. Register your interest to secure a board from the next batch.
                </p>
</div>
<form className="space-y-6 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-stone-100">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-900/50 focus:ring-1 focus:ring-cyan-900/50 transition-all text-sm" id="email" placeholder="you@example.com" required type="email" />
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-900/50 focus:ring-1 focus:ring-cyan-900/50 transition-all text-sm resize-none" id="message" placeholder="Tell us about your height, weight, and typical surf conditions..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-md transition-colors text-sm tracking-wide flex items-center justify-center gap-2 group" type="button">
                    Register Interest
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
<p className="text-center text-xs text-slate-400 mt-6 font-light">
                We respect your privacy. No spam, just surf.
            </p>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-sm font-semibold tracking-widest text-slate-900 uppercase">7umpstarter.</span>
<span className="text-xs text-slate-400 font-light">The Purest Form of Hydrodynamics.</span>
</div>
<a className="text-sm text-slate-500 hover:text-cyan-900 transition-colors" href="mailto:hello@7umpstarter.com">
                hello@7umpstarter.com
            </a>
</div>
</footer>

    </>
  );
}
