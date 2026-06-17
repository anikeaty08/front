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
colors: {
navy: {
950: '#05080f',
900: '#0a0f1c',
800: '#111827',
700: '#1f2937'
},
gold: {
500: '#c5a059',
600: '#a38142'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
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
      

<nav className="fixed top-0 w-full z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0 flex items-center gap-3 group" href="#home">
<img alt="Sterling Bridge LLC Logo" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" src="https://sterlingbridgellc.com/wp-content/uploads/2026/02/Gemini_Generated_Image_6n5hu56n5hu56n5h__1___1_-removebg-preview-1.png"/>
<span className="text-slate-100 font-normal text-sm tracking-widest uppercase hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity">Sterling Bridge</span>
</a>

<div className="hidden md:flex space-x-8">
<a className="text-xs tracking-widest uppercase text-slate-400 hover:text-gold-500 transition-colors py-2 font-normal" href="#home">Home</a>
<a className="text-xs tracking-widest uppercase text-slate-400 hover:text-gold-500 transition-colors py-2 font-normal" href="#about">About</a>
<a className="text-xs tracking-widest uppercase text-slate-400 hover:text-gold-500 transition-colors py-2 font-normal" href="#operations">Operations</a>
<a className="text-xs tracking-widest uppercase text-slate-400 hover:text-gold-500 transition-colors py-2 font-normal" href="#contact">Contact</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-400 hover:text-white p-2 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen border-b border-white/5" id="home">
<video autoplay="" className="absolute top-0" height="100%" loop="" muted="" src="https://sterlingbridgellc.com/wp-content/uploads/2026/02/2711276-uhd_3840_2160_24fps.mp4" width="100%"></video>

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-navy-950/70 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/80 to-navy-950 z-10"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gold-500/10 blur-[120px] rounded-full z-10"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
<p className="text-slate-300 text-xs tracking-widest uppercase font-normal">Corporate Entity</p>
</div>
<h1 className="text-slate-50 text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8 max-w-5xl mx-auto leading-tight font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Sterling Bridge LLC
                </h1>
<p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase mb-12 max-w-3xl mx-auto font-normal">
                    Global Trade <span className="text-white/20 px-3">•</span> Strategic Procurement <span className="text-white/20 px-3">•</span> Supply Chain
                </p>
<p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-24 font-light">
                    A U.S.-registered international trading and supply chain coordination company supporting cross-border procurement, logistics integration, and global distribution partnerships.
                </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-20">

<div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] transition-transform duration-500 hover:-translate-y-1 shadow-2xl shadow-black/50">
<div className="h-full bg-navy-900/90 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col relative">

<div className="h-40 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10"></div>
<img alt="Container Ship" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-0 relative z-20 flex-grow -mt-6">
<div className="w-12 h-12 bg-navy-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-gold-500" height="24" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-3 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Global Trade Coordination</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Facilitating international sourcing and structured trade flows across primary commercial corridors.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] transition-transform duration-500 hover:-translate-y-1 shadow-2xl shadow-black/50">
<div className="h-full bg-navy-900/90 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col relative">
<div className="h-40 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10"></div>
<img alt="Warehouse Operations" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-0 relative z-20 flex-grow -mt-6">
<div className="w-12 h-12 bg-navy-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-gold-500" height="24" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-3 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Supply Chain Integration</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Working alongside established logistics and fulfilment partners worldwide to ensure operational continuity.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] transition-transform duration-500 hover:-translate-y-1 shadow-2xl shadow-black/50">
<div className="h-full bg-navy-900/90 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col relative">
<div className="h-40 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10"></div>
<img alt="Global Trade Partnerships" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-0 relative z-20 flex-grow -mt-6">
<div className="w-12 h-12 bg-navy-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-gold-500" height="24" icon="lucide:handshake" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-3 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Strategic Partnerships</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Supporting manufacturers, distributors, and institutional buyers in executing cross-border strategies.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-4xl mx-auto">
<div className="px-8 py-6 rounded-2xl bg-navy-900/50 backdrop-blur-md">
<p className="text-slate-400 text-xs md:text-sm leading-relaxed text-center font-light">
                            Operating internationally through a verified network of logistics providers, suppliers, and commercial partners across multiple jurisdictions.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 relative bg-navy-950 overflow-hidden" id="about">

<div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<p className="text-gold-500 text-xs tracking-widest uppercase mb-4 font-normal">Corporate Overview</p>
<h2 className="text-slate-50 text-3xl md:text-4xl tracking-tight mb-8 leading-snug font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Structured Procurement &amp; Global Supply Coordination
                        </h2>

<div className="grid grid-cols-2 gap-4 mb-10">
<div className="rounded-2xl border border-white/10 bg-navy-800 overflow-hidden h-48 lg:h-56 relative group">
<div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Cargo Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl border border-white/10 bg-navy-800 overflow-hidden h-48 lg:h-56 relative group mt-8">
<div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

<img alt="Corporate Structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://sterlingbridgellc.com/wp-content/uploads/2026/02/img-2.jpg"/>
</div>
</div>
<p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                            Sterling Bridge LLC is a Wyoming-registered limited liability company established to support international trade operations, structured procurement, and global supply chain coordination.
                        </p>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                            Our structure allows us to interface seamlessly with institutional counterparties, providing a reliable node for the movement of commercial goods and the execution of transnational trade agreements.
                        </p>
</div>
<div className="space-y-12">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
<h3 className="text-slate-100 text-xl tracking-tight mb-6 pb-4 border-b border-white/10 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Primary Focus Areas</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
<iconify-icon className="text-gold-500" height="14" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="text-slate-300 text-sm font-light mt-0.5">International commodities</span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
<iconify-icon className="text-gold-500" height="14" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="text-slate-300 text-sm font-light mt-0.5">Industrial goods</span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
<iconify-icon className="text-gold-500" height="14" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="text-slate-300 text-sm font-light mt-0.5">Consumer distribution channels</span>
</li>
<li className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
<iconify-icon className="text-gold-500" height="14" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="text-slate-300 text-sm font-light mt-0.5">Cross-border logistics alignment</span>
</li>
</ul>
</div>

<div>
<h3 className="text-slate-100 text-xl tracking-tight mb-6 pb-4 border-b border-white/10 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Corporate Principles</h3>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-center hover:bg-white/[0.04] transition-colors">
<span className="text-slate-300 text-xs font-normal tracking-widest uppercase">Reliability</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-center hover:bg-white/[0.04] transition-colors">
<span className="text-slate-300 text-xs font-normal tracking-widest uppercase">Compliance</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-center hover:bg-white/[0.04] transition-colors">
<span className="text-slate-300 text-xs font-normal tracking-widest uppercase">Partnerships</span>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-center hover:bg-white/[0.04] transition-colors">
<span className="text-slate-300 text-xs font-normal tracking-widest uppercase">Transparency</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden bg-navy-950" id="operations">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800/20 via-navy-950 to-navy-950 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 max-w-3xl mx-auto">
<p className="text-gold-500 text-xs tracking-widest uppercase mb-4 font-normal">Capabilities</p>
<h2 className="text-slate-50 text-3xl md:text-4xl tracking-tight mb-6 leading-snug font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Operational Scope
                    </h2>
<p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                        Executing broad-scale logistical and commercial mandates through established networks and structured frameworks.
                    </p>
</div>

<div className="w-full h-64 md:h-80 mb-20 rounded-3xl border border-white/10 bg-navy-800 relative overflow-hidden group shadow-2xl shadow-black/50">
<div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent z-10"></div>
<img alt="Global Supply Chain Aerial Port" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h3 className="text-slate-100 text-2xl tracking-tight mb-2 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Integrated Logistics</h3>
<p className="text-slate-400 text-sm font-light max-w-md">Seamless coordination from origin points through complex international freight corridors.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-gold-500 text-xs tracking-widest uppercase font-normal">
                            Explore Network <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="relative pl-8 border-l border-white/10 hover:border-gold-500/50 transition-colors duration-500">
<div className="absolute w-2 h-2 bg-gold-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-300" height="20" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-4 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Trade Facilitation</h3>
<ul className="space-y-3 text-slate-400 text-sm font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Supplier coordination</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Contract execution support</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>International shipment alignment</li>
</ul>
</div>

<div className="relative pl-8 border-l border-white/10 hover:border-gold-500/50 transition-colors duration-500">
<div className="absolute w-2 h-2 bg-gold-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-300" height="20" icon="lucide:ship" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-4 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Logistics Collaboration</h3>
<ul className="space-y-3 text-slate-400 text-sm font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Work alongside freight forwarders</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Warehouse partner integration</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Multi-region distribution planning</li>
</ul>
</div>

<div className="relative pl-8 border-l border-white/10 hover:border-gold-500/50 transition-colors duration-500">
<div className="absolute w-2 h-2 bg-gold-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
<div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-300" height="20" icon="solar:documents-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-slate-100 text-xl tracking-tight mb-4 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Commercial Structuring</h3>
<ul className="space-y-3 text-slate-400 text-sm font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Support cross-border transactions</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Partner network coordination</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500/50"></span>Regulatory alignment support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<p className="text-gold-500 text-xs tracking-widest uppercase mb-4 font-normal">Corporate Registry</p>
<h2 className="text-slate-50 text-3xl md:text-4xl tracking-tight mb-10 leading-snug font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Contact &amp; Headquarters
                        </h2>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-gold-500" height="18" icon="solar:buildings-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-slate-100 text-xs tracking-widest uppercase mb-1.5 font-normal">Registered Entity</h4>
<p className="text-slate-400 text-sm font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Sterling Bridge LLC</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-gold-500" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-slate-100 text-xs tracking-widest uppercase mb-1.5 font-normal">Head Office</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                                        30 N Gould St, Ste N<br/>
                                        Sheridan, WY 82801<br/>
                                        United States
                                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-gold-500" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-slate-100 text-xs tracking-widest uppercase mb-1.5 font-normal">Corporate Inquiries</h4>
<a className="text-slate-400 text-sm font-light hover:text-gold-500 transition-colors" href="mailto:inquiries@sterlingbridge.llc">inquiries@sterlingbridge.llc</a>
</div>
</div>
</div>

<div className="w-full h-56 rounded-2xl bg-navy-800 border border-white/10 relative overflow-hidden hover:opacity-100 transition-all duration-700 shadow-lg">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.4251268758877!2d-106.95759148446862!3d44.79758717909874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a688b15%3A0x6b4fb4e068f3db47!2s30%20N%20Gould%20St%20%23n%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2suk!4v1698248492000!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-8 md:p-12 lg:mt-6 backdrop-blur-xl shadow-2xl">
<h3 className="text-slate-100 text-2xl tracking-tight mb-8 font-normal" style={{fontFamily: '\'Playfair Display\', serif'}}>Direct Inquiry</h3>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-500 font-normal tracking-wide" htmlFor="name">Full Name / Entity</label>
<input className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.02] transition-all font-light" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 font-normal tracking-wide" htmlFor="email">Corporate Email</label>
<input className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.02] transition-all font-light" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 font-normal tracking-wide" htmlFor="subject">Subject of Inquiry</label>
<input className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.02] transition-all font-light" id="subject" placeholder="Procurement Details" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 font-normal tracking-wide" htmlFor="message">Message</label>
<textarea className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.02] transition-all resize-none font-light" id="message" placeholder="How can we assist you?" rows="5"></textarea>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 font-normal hover:border-gold-500/50 mt-4 group flex items-center justify-center gap-3" type="submit">
                                Submit Communication
                                <iconify-icon className="text-gold-500 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-navy-950 border-t border-white/5 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<img alt="Sterling Bridge LLC Logo" className="h-8 w-auto mb-4 mx-auto md:mx-0 opacity-80 hover:opacity-100 transition-opacity" src="https://sterlingbridgellc.com/wp-content/uploads/2026/02/Gemini_Generated_Image_6n5hu56n5hu56n5h__1___1_-removebg-preview-1.png"/>
<p className="text-slate-500 text-xs font-light">
                        Sterling Bridge LLC <span className="mx-2 opacity-30">|</span> 30 N Gould St, Ste N, Sheridan, WY 82801, United States
                    </p>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-right">
<p className="text-slate-600 text-xs font-light">
                        ©  Sterling Bridge LLC — All Rights Reserved
                    </p>
<a className="text-slate-600 hover:text-slate-400 text-xs font-light transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
