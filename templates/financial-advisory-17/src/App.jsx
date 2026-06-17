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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
blob: "blob 15s infinite",
},
keyframes: {
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(20px, -40px) scale(1.05)" },
"66%": { transform: "translate(-15px, 15px) scale(0.95)" },
"100%": { transform: "translate(0px, 0px) scale(1)" },
},
},
colors: {
brand: {
900: '#0B0F19',
800: '#111827',
accent: '#3B82F6'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center">
<span className="text-white text-xl md:text-2xl font-serif font-semibold tracking-tight leading-none">Anzar Capital</span>
</div>
<div className="hidden md:flex gap-10 text-sm text-slate-400 font-normal tracking-wide">
<a className="hover:text-white transition-colors duration-300" href="#mission">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#mandates">Mandates</a>
<a className="hover:text-white transition-colors duration-300" href="#founder">Founder's Note</a>
</div>
<button className="btn-slide text-white text-xs font-medium uppercase tracking-widest border border-white/20 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-sm">
                Inquire
            </button>
</div>
</nav>

<header className="min-h-screen relative flex items-center pt-20 overflow-hidden text-white bg-[#0B0F19]">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-950/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-slate-900/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end pb-24">
<div className="lg:col-span-9 space-y-10">
<div className="flex items-center gap-3 text-blue-200/60 text-[10px] font-bold tracking-[0.25em] uppercase border border-white/10 w-fit px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    Institutional Advisory &amp; Strategy
                </div>
<h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tighter leading-[0.95] text-white">
                    Capital. Stewarded for<br/>
<span className="italic font-light text-slate-400 relative inline-block pr-2">generational growth.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                    We partner with founders, families, and institutions to build enduring value through disciplined capital allocation.
                </p>
<div className="pt-4">
<a className="btn-slide inline-flex items-center gap-4 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20" href="#mission">
                        Our Philosophy
                        <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 relative overflow-hidden bg-[#0B0F19] border-t border-b border-white/5" id="mission">
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<p className="text-3xl md:text-5xl font-serif font-light leading-snug text-white tracking-tight">
                "We believe true value is built through patience. Our mission is to honor the work invested, providing the strategic nourishment required to turn momentum into <span className="italic text-blue-500">inevitable</span> growth."
            </p>
</div>
</section>

<section className="pt-32 pb-16 bg-[#0B0F19] text-white relative" id="vision">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/5">
<div>
<h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-2">Investment Architecture</h2>
<p className="text-slate-500 text-lg font-light">Built for scale. Designed for longevity.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 glass-panel rounded-lg p-10 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10 gap-8">
<div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-slate-300 border border-white/10">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 text-white">Disciplined Growth</h3>
<p className="text-slate-400 text-sm font-light max-w-sm leading-relaxed">Moving beyond high-level advisory to institutional-grade execution and management.</p>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-white/10 pt-6">
<span className="block text-xs text-blue-400 uppercase tracking-widest font-semibold mb-2">Capacity</span>
<p className="text-lg text-white font-light">Architecture capable of managing <span className="font-serif italic text-slate-400">multi-billion dollar mandates.</span></p>
</div>
</div>

<div className="glass-panel rounded-lg p-10 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-slate-300 border border-white/10">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight mb-3 text-white">Capital Preservation First</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                             Utilizing a "fortress balance sheet" approach. We prioritize the safety of principal above the pursuit of yield.
                        </p>
</div>
<div className="mt-8 relative z-10">

<div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent mb-4"></div>
<p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Risk Adjusted Returns</p>
</div>
</div>

<div className="glass-panel rounded-lg p-10 flex flex-col justify-between hover:bg-white/[0.04] transition-colors border-white/10">
<div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-slate-300 border border-white/10">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 text-white">Operational Excellence</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                            Establishing a new standard where capital supports proven operational rigor rather than short-term extraction.
                        </p>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="relative z-10 max-w-lg">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-slate-300 border border-white/10">
<iconify-icon icon="solar:earth-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium text-white">Global Mandate</h3>
</div>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                            Operating across emerging and established markets. A decentralized investment network empowering partners across diverse sectors and geographies.
                        </p>
</div>

<div className="relative z-10 shrink-0 opacity-50">
<svg className="text-slate-600" fill="none" height="100" stroke="currentColor" viewbox="0 0 100 100" width="100">
<circle cx="50" cy="50" r="40" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="30" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="white" r="2"></circle>
<line strokeWidth="0.5" x1="50" x2="50" y1="10" y2="30"></line>
<line strokeWidth="0.5" x1="90" x2="70" y1="50" y2="50"></line>
<line strokeWidth="0.5" x1="50" x2="50" y1="90" y2="70"></line>
<line strokeWidth="0.5" x1="10" x2="30" y1="50" y2="50"></line>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0F19] text-white border-t border-white/5" id="mandates">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-3xl font-serif font-medium text-white mb-6">Our Mandates</h2>
<p className="text-slate-400 font-light text-sm leading-relaxed max-w-xs">
                        We engage with a select group of partners where our philosophy of patience and precision aligns with the asset's potential.
                    </p>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="border-t border-white/10 pt-6">
<span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">01</span>
<h3 className="text-xl font-medium text-white mb-3">Founders &amp; Operators</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed">
                            Supporting visionary leaders who require capital structures that prioritize long-term product dominance over quarterly liquidity.
                        </p>
</div>

<div className="border-t border-white/10 pt-6">
<span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">02</span>
<h3 className="text-xl font-medium text-white mb-3">Family Offices</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed">
                            Acting as an outsourced direct investment arm, identifying generational assets and ensuring stewardship continuity.
                        </p>
</div>

<div className="border-t border-white/10 pt-6">
<span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">03</span>
<h3 className="text-xl font-medium text-white mb-3">Institutional Capital</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed">
                            Deployment strategies for large-scale funds seeking uncorrelated, resilient growth in fragmented markets.
                        </p>
</div>

<div className="border-t border-white/10 pt-6">
<span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">04</span>
<h3 className="text-xl font-medium text-white mb-3">Sovereign Strategy</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed">
                            Advisory for national-scale economic diversification and infrastructure resilience projects.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 text-slate-900" id="founder">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
<div className="space-y-10 order-2 lg:order-1 pt-8">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-slate-900">
                        The Origin of <br/><span className="italic text-slate-400">Our Doctrine</span>
</h2>
<div className="space-y-6 text-lg md:text-xl text-slate-600 font-light leading-relaxed">
<p>
                            Growing up in Tamazight, I saw how land—when respected—created abundance across generations. Rain, or <span className="font-medium text-slate-900">Anzar</span>, was not just a resource; it was a responsibility.
                        </p>
<p>
                            That lesson shaped Anzar Capital. We operate on the belief that capital must be deployed with the same responsibility, patience, and alignment.
                        </p>
<p>
                            We exist to compound trust before returns. Whether we are providing guidance today or deploying institutional-scale capital tomorrow, our philosophy remains absolute: <span className="text-slate-900 font-medium">Investment must be a catalyst for resilience, never a tool for extraction.</span>
</p>
</div>
<div className="pt-8 border-t border-slate-200">
<p className="text-slate-900 font-serif text-lg font-medium">Founder Name</p>
<p className="text-slate-500 text-sm uppercase tracking-wider mt-1">Managing Partner</p>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] bg-slate-200 rounded-sm overflow-hidden relative grayscale contrast-125">
<img alt="Structural Architecture" className="w-full h-full object-cover opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 max-w-xs shadow-xl hidden md:block border border-slate-100">
<p className="font-serif italic text-slate-800 text-lg">"Endurance is the only metric that matters."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-slate-100" id="values">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Operating Doctrine</span>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-slate-900">Principles of Stewardship</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-200 pt-12">

<div className="space-y-4">
<iconify-icon className="text-slate-900" icon="solar:verified-check-linear" width="24"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Integrity</h3>
<p className="text-sm text-slate-500 leading-loose font-light">
                        We operate with absolute transparency. Our reputation is built on delivering honest assessments and honoring every commitment.
                    </p>
</div>

<div className="space-y-4">
<iconify-icon className="text-slate-900" icon="solar:hand-shake-linear" width="24"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Service</h3>
<p className="text-sm text-slate-500 leading-loose font-light">
                        We prioritize our partners' objectives and long-term success above our own short-term interests.
                    </p>
</div>

<div className="space-y-4">
<iconify-icon className="text-slate-900" icon="solar:telescope-linear" width="24"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Vision</h3>
<p className="text-sm text-slate-500 leading-loose font-light">
                        We focus on sustainable growth over decades, not quarters, identifying opportunities that offer enduring value.
                    </p>
</div>

<div className="space-y-4">
<iconify-icon className="text-slate-900" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Capital Prudence</h3>
<p className="text-sm text-slate-500 leading-loose font-light">
                        We maintain a disciplined approach to risk management, ensuring security remains the foundation of growth.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B0F19] text-white pt-32 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-16 border-b border-white/5 gap-12">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 text-white">Partner with<br/>Anzar Capital.</h2>
<p className="text-slate-400 text-lg font-light">Strategic advisory for founders, families, and institutions.</p>
</div>
<button className="btn-slide bg-white text-slate-900 px-10 py-5 rounded-full font-medium shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-slate-100 transition-colors shrink-0">
                    Request a Conversation
                </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<span className="text-white text-xl font-serif font-medium tracking-tight leading-none block mb-6">Anzar Capital</span>
<p className="text-slate-500 text-xs font-light leading-relaxed max-w-[200px]">
                         New York • London • Dubai<br/><br/>
                         Inquiries only.<br/>
                         contact@anzarcapital.com
                     </p>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Firm</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-white transition-colors" href="#mission">Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#founder">Founder</a></li>
<li><a className="hover:text-white transition-colors" href="#mandates">Mandates</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Disclosures</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 pt-8 border-t border-white/5 uppercase tracking-wider">
<p>© 2024 Anzar Capital Inc. All rights reserved.</p>
<p className="mt-4 md:mt-0">Enduring Value</p>
</div>
</div>
</footer>

    </>
  );
}
