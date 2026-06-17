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
sans: ['Manrope', 'sans-serif'],
},
colors: {
gold: {
100: '#FDEebb',
300: '#F2C94C',
400: '#FFD369',
500: '#E6B800',
600: '#B38F00',
},
charcoal: {
800: '#1A1A1A',
900: '#0F0F0F',
950: '#050505',
}
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #F2C94C 0%, #E6B800 100%)',
'dark-gradient': 'linear-gradient(to bottom, #111111, #050505)',
'cinematic-fade': 'radial-gradient(circle at center, rgba(242, 201, 76, 0.08) 0%, transparent 70%)',
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
      

<div className="noise-bg"></div>

<div className="fixed top-0 w-full h-8 z-[60] bg-charcoal-900 border-b border-white/5 flex items-center justify-center">
<p className="text-xs font-semibold tracking-widest text-gold-400 uppercase flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gold-400"></span>
            CFO &amp; Finance Director Search
            <span className="w-1 h-1 rounded-full bg-gold-400"></span>
</p>
</div>

<nav className="fixed top-8 w-full z-40 backdrop-blur-md border-b border-white/5 bg-charcoal-950/80">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-white uppercase group hover:text-gold-300 transition-colors duration-300" href="#">
                Accsensia<span className="text-gold-300">.</span>
</a>
<a className="hidden md:flex items-center gap-2 text-sm font-normal text-white border border-white/20 px-5 py-2 rounded-full hover:border-gold-300 hover:text-gold-300 transition-all duration-300 group" href="https://calendly.com/abbas-accsensia/30min?month=2026-02" target="_blank">
<span>Book Technical Consultation</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 overflow-hidden">

<div className="absolute inset-0 bg-dark-gradient z-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 h-full">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center h-full">

<div className="flex flex-col justify-center space-y-6 order-1 pb-12 lg:pb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 w-fit">
<span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-xs font-normal text-gold-300 tracking-wide uppercase">Specialist Executive Search</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-tight">
                        Finance Leadership,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">Recruited by</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 drop-shadow-sm">Finance Leaders.</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                        We don't just find CVs; we vet technical excellence. Specializing in CFO and senior finance search for PE-backed scale-ups, high-growth SaaS, and complex M&amp;A environments.
                    </p>
<div className="border-l-2 border-gold-500/50 pl-4 py-1">
<p className="text-sm font-normal text-white uppercase tracking-wider">EBITDA. ARR. PMI.</p>
<p className="text-xs text-neutral-500 mt-1">Practitioner-Led Search &amp; Technical Vetting.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-4 bg-gold-gradient text-charcoal-900 font-medium rounded-lg hover:shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2" href="https://calendly.com/abbas-accsensia/30min?month=2026-02" target="_blank">
                            Book Consultation
                            <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 border border-white/20 text-white font-normal rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-center" href="#services">
                            Our Mandates
                        </a>
</div>
</div>

<div className="relative order-2 h-[50vh] lg:h-[85vh] w-full flex items-end justify-center lg:justify-end">
<div className="relative w-full h-full max-w-xl">
<div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-l from-charcoal-950/40 via-transparent to-transparent z-10"></div>
<img alt="Financial Calculator and Analysis" className="w-full h-full object-cover object-center rounded-t-2xl opacity-90 grayscale-[20%] sepia-[30%] contrast-110 shadow-2xl shadow-black" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-12 -left-6 z-20 backdrop-blur-xl bg-charcoal-900/80 border border-white/10 p-4 rounded-lg shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="bg-gold-500/20 p-2 rounded-md text-gold-400">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Candidate Quality</p>
<p className="text-lg font-semibold text-white tracking-tight">Technical Audit Passed</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-900 relative border-t border-white/5">
<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-gold-500/20 to-transparent"></div>
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                        Beyond Sales.<br/> <span className="text-neutral-500 italic font-serif">We speak EBITDA.</span>
</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-gold-500/60 group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Practitioner-Led Search</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">Founded by a Strategic Finance Leader with a decade of experience bridging the gap between operations and C-suite leadership.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-gold-500/60 group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Deep Private Equity Expertise</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">Our team brings extensive experience within the Private Equity ecosystem, having operated directly as finance business partners and strategic leaders. We leverage this firsthand background to identify senior finance professionals capable of navigating complex capital structures and driving enterprise value.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-gold-500/60 group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Rigorous Technical Vetting</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">We conduct deep audits of AI fluency, strategic capital allocation, and risk resilience. By vetting for data storytelling and adaptive leadership, we ensure candidates move beyond reporting to drive future enterprise value.</p>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<p className="text-2xl font-medium text-gold-400 tracking-tight">Most recruiters speak sales. We speak finance.</p>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 group">
<img alt="Financial Modelling and Due Diligence" className="w-full h-auto opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white font-mono text-sm opacity-70">Mandate: LBO Structure Validated</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-950 relative overflow-hidden" id="services">
<div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-gold-500/40 to-transparent -translate-x-1/2"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">Our Services</h2>
<div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-2 tracking-tight">Permanent CFO Search</h3>
<p className="text-neutral-400 text-sm leading-relaxed">High-growth businesses need a "Profit Architect." We place CFOs for PE Portfolio Companies and M&amp;A-driven scale-ups capable of handling rapid divestments and end-to-end transactions.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="solar:hourglass-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-2 tracking-tight">Interim &amp; Fractional Finance</h3>
<p className="text-neutral-400 text-sm leading-relaxed">For businesses facing strategic mergers or liquidity crunches. We provide rapid-response leaders to optimize liquidity, manage covenants, and spearhead offshore transitions.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-2 tracking-tight">Post-Acquisition Integration</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Unique to our practice, we provide specialist teams to help new CFOs align financial operations post-merger, ensuring synergy identification is met from day one.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-900 border-y border-white/5">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="flex justify-center gap-1 text-gold-400 mb-4">
<iconify-icon icon="solar:shield-keyhole-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Experience Anchors</h2>
<p className="text-neutral-400 mt-4">We understand the pressure of a mandate, because we've delivered them.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-white/5 relative">
<iconify-icon className="absolute top-8 right-8 text-gold-500/20 text-4xl" icon="solar:buildings-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-semibold">01</div>
<div>
<p className="text-white font-normal text-sm">Direct Experience</p>
<p className="text-neutral-500 text-xs">Origination &amp; Execution</p>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">Extensive experience managing end-to-end mandates under intense pressure, ensuring rigorous due diligence, rapid execution, and seamless capital structure transitions.</p>
</div>

<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-gold-500/20 shadow-[0_0_30px_-10px_rgba(242,201,76,0.1)] transform md:-translate-y-4 relative">
<iconify-icon className="absolute top-8 right-8 text-gold-500/20 text-4xl" icon="solar:graph-up-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-semibold">02</div>
<div>
<p className="text-white font-normal text-sm">EBITDA Uplift</p>
<p className="text-neutral-500 text-xs">Synergy Identification</p>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">Part of teams that consistently drove material EBITDA uplifts through advanced technical reclassifications, stringent cost management, and operational synergy execution.</p>
</div>

<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-white/5 relative">
<iconify-icon className="absolute top-8 right-8 text-gold-500/20 text-4xl" icon="solar:global-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-semibold">03</div>
<div>
<p className="text-white font-normal text-sm">Sector Breadth</p>
<p className="text-neutral-500 text-xs">Cross-Industry Insight</p>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">Deep operational and financial expertise across Mining &amp; Metals, Enterprise SaaS, Renewable Energy, and Mission-Critical Data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-950">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-6 flex flex-col justify-center">
<h2 className="text-4xl font-medium text-white tracking-tight mb-8">Technical Competency <br/><span className="text-neutral-500">Areas.</span></h2>
<p className="text-sm text-neutral-400 mb-8">The "language" of our vetting process. We audit candidates specifically against these critical value-creation metrics.</p>
<div className="space-y-6">
<div className="group cursor-default">
<h3 className="text-xl text-white font-normal group-hover:text-gold-400 transition-colors tracking-tight">Revenue Operations</h3>
<p className="text-neutral-500 text-sm mt-1">ARR Reporting, SaaS KPI tracking, and advanced Churn Management strategies.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="group cursor-default">
<h3 className="text-xl text-white font-normal group-hover:text-gold-400 transition-colors tracking-tight">Corporate Finance</h3>
<p className="text-neutral-500 text-sm mt-1">Capital raising initiatives, Due Diligence oversight, and Deal Lifecycle Management.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="group cursor-default">
<h3 className="text-xl text-white font-normal group-hover:text-gold-400 transition-colors tracking-tight">Complex Transitions</h3>
<p className="text-neutral-500 text-sm mt-1">UK GAAP to IFRS accounting conversions, and offshore team migrations.</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<img alt="Consultation" className="rounded-xl w-full h-64 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Executive Leadership" className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Data and Analytics" className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Corporate Building" className="rounded-xl w-full h-64 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-900 relative overflow-hidden">
<div className="absolute inset-0 bg-cinematic-fade"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="w-full h-[400px] bg-neutral-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<iframe allowfullscreen="" className="map-filter hover:filter-none transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sth!4v1600000000000!5m2!1sen!2sth" style={{border: '0'}} width="100%"></iframe>
</div>

<div className="space-y-8">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">Global Search HQ</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="bg-white/5 p-3 rounded-lg h-fit text-gold-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Address</h3>
<p className="text-neutral-400 text-sm mt-1">1 Canada Square, Canary Wharf,<br/>London E14 5AB, United Kingdom</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-white/5 p-3 rounded-lg h-fit text-gold-400">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Office Hours</h3>
<p className="text-neutral-400 text-sm mt-1">Mon - Fri: 08:30 - 18:00<br/>Sat - Sun: Closed</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-white/5 p-3 rounded-lg h-fit text-gold-400">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-normal text-white">Contact</h3>
<p className="text-neutral-400 text-sm mt-1">mandates@accsensia.com</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 to-charcoal-900"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gold-500/5 blur-[100px]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center bg-charcoal-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 lg:p-16 shadow-2xl">
<h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tighter mb-2">
                    Don't hire a recruiter.
                </h2>
<h2 className="text-4xl lg:text-6xl font-semibold text-neutral-600 tracking-tighter mb-8">
                    Partner with a Practitioner.
                </h2>
<p className="text-xl text-gold-300 font-normal mb-10 leading-relaxed max-w-2xl mx-auto">
                    If you are a CEO or Board member looking for a finance leader who can truly move the needle on Enterprise Value, let's have a technical conversation.
                </p>
<a className="inline-block group relative px-10 py-5 bg-gold-gradient rounded-lg font-medium text-charcoal-900 text-lg shadow-[0_0_40px_-10px_rgba(242,201,76,0.5)] hover:shadow-[0_0_60px_-10px_rgba(242,201,76,0.7)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto" href="https://calendly.com/abbas-accsensia/30min?month=2026-02" target="_blank">
<span className="relative z-10 flex items-center justify-center gap-3">
                        Book a Technical Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
</div>
</section>

<footer className="py-12 bg-charcoal-950 border-t border-white/5 text-center md:text-left">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="text-xl font-semibold text-white tracking-tighter uppercase">Accsensia<span className="text-gold-300">.</span></span>
<p className="text-neutral-500 text-sm mt-1">CFO &amp; Finance Director Executive Search</p>
</div>
<div className="flex gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Mandates</a>
<a className="hover:text-white transition-colors" href="https://calendly.com/abbas-accsensia/30min?month=2026-02" target="_blank">Consultation</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-gold-300 transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-gold-300 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
