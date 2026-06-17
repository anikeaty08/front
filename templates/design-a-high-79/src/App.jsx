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

<nav className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/5 bg-charcoal-950/80">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-bold tracking-tighter text-white uppercase group hover:text-gold-300 transition-colors duration-300" href="#">
                DUGIC<span className="text-gold-300">.</span>
</a>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-5 py-2 rounded-full hover:border-gold-300 hover:text-gold-300 transition-all duration-300 group">
<span>Book Strategy</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-dark-gradient z-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 h-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

<div className="flex flex-col justify-center space-y-8 lg:order-1 order-2 pb-12 lg:pb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 w-fit">
<span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-xs font-medium text-gold-300 tracking-wide uppercase">Accepting New Clients</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                        No Theory.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">No Bullshit.</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 drop-shadow-sm">Real Results.</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                        For entrepreneurs who are done listening to coaches who have never built a company — and are ready to execute.
                    </p>
<div className="border-l-2 border-gold-500/50 pl-4 py-1">
<p className="text-sm font-medium text-white uppercase tracking-wider">Built. Scaled. Operated.</p>
<p className="text-xs text-neutral-500 mt-1">Across multiple industries. In Austria and beyond.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-4 bg-gold-gradient text-charcoal-900 font-semibold rounded-lg hover:shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2" href="#contact">
                            Book a Strategic Call
                            <iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-center" href="#proof">
                            See Proof of Work
                        </a>
</div>
</div>

<div className="relative lg:order-2 order-1 h-[60vh] lg:h-[85vh] w-full flex items-end justify-center lg:justify-end">
<div className="relative w-full h-full max-w-lg">

<div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-l from-charcoal-950/20 via-transparent to-transparent z-10"></div>

<img alt="Entrepreneur Portrait" className="w-full h-full object-cover object-top rounded-t-2xl opacity-90 grayscale-[20%] contrast-110 shadow-2xl shadow-black" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-12 -left-6 z-20 backdrop-blur-xl bg-charcoal-900/80 border border-white/10 p-4 rounded-lg shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="bg-gold-500/20 p-2 rounded-md text-gold-400">
<iconify-icon height="24" icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Revenue Generated</p>
<p className="text-lg font-bold text-white tracking-tight">8-Figure Exits</p>
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
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                        Still Listening to People Who’ve <span className="text-neutral-500 italic font-serif">Never</span> Built Anything?
                    </h2>
<div className="space-y-6">
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-red-500/60 group-hover:text-red-500 transition-colors">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Most coaches have never run a real company.</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">They sell courses on scaling, but have never hired an employee or managed payroll.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-red-500/60 group-hover:text-red-500 transition-colors">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">They have never led real teams.</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">Leadership isn't a theory in a book. It's dealing with human conflict, ambition, and failure.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 min-w-[24px] text-red-500/60 group-hover:text-red-500 transition-colors">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">They have never carried real responsibility.</h3>
<p className="text-neutral-400 text-sm mt-1 leading-relaxed">If their advice fails, you lose money. They just move to the next client.</p>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<p className="text-2xl font-semibold text-gold-400 tracking-tight">That’s the problem.</p>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 group">
<img alt="Late night office" className="w-full h-auto opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white font-mono text-sm opacity-70">Error: Theory != Practice</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-950 relative overflow-hidden" id="proof">

<div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-gold-500/40 to-transparent -translate-x-1/2"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">Why DUGIC Is Different</h2>
<div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">10+ Years Leadership</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Managing real teams, making hiring/firing decisions, and building culture.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Serial Entrepreneur</h3>
<p className="text-neutral-400 text-sm leading-relaxed">5+ years purely entrepreneurial. Sales, systems, tax audits, and scaling pain.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="lucide:hammer" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Self-Built</h3>
<p className="text-neutral-400 text-sm leading-relaxed">No VC money. No safety net. Built from the ground up with personal risk.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:text-gold-300">
<iconify-icon icon="lucide:target" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Reality Strategy</h3>
<p className="text-neutral-400 text-sm leading-relaxed">I don't teach what "should" work. I implement what actually works in the DACH market.</p>
</div>
</div>
<div className="text-center mt-16">
<p className="text-lg text-white font-medium">
                    I don’t guess. <span className="text-gold-400 border-b border-gold-500/50">I know</span> — because I’ve been there.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-900 border-y border-white/5">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Who This Is For</h2>
<p className="text-neutral-400 mt-4">This isn't a mass-market program. It's a strategic partnership.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-white/5 text-center">
<h3 className="text-white text-xl font-semibold mb-2">Entrepreneurs</h3>
<p className="text-neutral-500 text-sm">Who are scaling beyond their first successes.</p>
</div>
<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-gold-500/20 text-center shadow-[0_0_30px_-10px_rgba(242,201,76,0.1)] transform md:-translate-y-4">
<h3 className="text-white text-xl font-semibold mb-2">Business Owners</h3>
<p className="text-neutral-500 text-sm">Who need to remove themselves from operations.</p>
</div>
<div className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 p-8 rounded-2xl border border-white/5 text-center">
<h3 className="text-white text-xl font-semibold mb-2">Self-Employed</h3>
<p className="text-neutral-500 text-sm">Who want to transition into being a CEO.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-red-400/90 font-medium tracking-wide text-sm uppercase bg-red-500/10 inline-block px-4 py-2 rounded">
                    If you’re looking for excuses, this isn’t for you.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-charcoal-950">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-8">What I’ve Built — <br/><span className="text-neutral-500">Not Just Talked About.</span></h2>
<div className="space-y-6">
<div className="group cursor-default">
<h3 className="text-xl text-white font-medium group-hover:text-gold-400 transition-colors">KranWien GmbH</h3>
<p className="text-neutral-500 text-sm">Heavy lifting, logistics organization.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="group cursor-default">
<h3 className="text-xl text-white font-medium group-hover:text-gold-400 transition-colors">SolarWien GmbH</h3>
<p className="text-neutral-500 text-sm">Energy sector, high-ticket sales, growth.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="group cursor-default">
<h3 className="text-xl text-white font-medium group-hover:text-gold-400 transition-colors">WienHeizung</h3>
<p className="text-neutral-500 text-sm">Systems &amp; automated processes.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="group cursor-default">
<h3 className="text-xl text-white font-medium group-hover:text-gold-400 transition-colors">JaPergola</h3>
<p className="text-neutral-500 text-sm">Product development, brand, direct sales.</p>
</div>
<div className="pt-6">
<div className="inline-block bg-white/5 rounded-lg p-4 border border-white/10 w-full">
<span className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-2 block">Digital Ecosystems</span>
<div className="flex flex-wrap gap-2 text-sm text-neutral-300">
<span className="bg-black/40 px-3 py-1 rounded">WienerInfo</span>
<span className="bg-black/40 px-3 py-1 rounded">Konzessionsuche</span>
<span className="bg-black/40 px-3 py-1 rounded">Bestbieter</span>
<span className="bg-black/40 px-3 py-1 rounded">GoAustria</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<img alt="Construction" className="rounded-xl w-full h-64 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Solar" className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Modern Architecture" className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Digital Analytics" className="rounded-xl w-full h-64 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-charcoal-900 relative overflow-hidden">

<div className="absolute inset-0 bg-cinematic-fade"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-12">An Honest Question</h2>
<div className="max-w-2xl mx-auto space-y-8">
<p className="text-2xl text-neutral-300 font-light leading-relaxed">
                    Who else in the DACH region has done this?
                </p>
<div className="flex flex-col gap-2 text-xl text-neutral-500">
<span>Which agency?</span>
<span>Which coach?</span>
<span>Which consultant?</span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent my-8"></div>
<p className="text-2xl lg:text-3xl text-white font-medium">
                    Most explain how it <span className="text-neutral-500 decoration-1 underline decoration-neutral-700">should</span> be done.<br/>
<span className="text-gold-400">I show how it actually works</span> — because I’ve done it.
                </p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 to-charcoal-900"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gold-500/5 blur-[100px]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center bg-charcoal-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 lg:p-16 shadow-2xl">
<h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter mb-2">
                    No Theory.
                </h2>
<h2 className="text-4xl lg:text-6xl font-bold text-neutral-600 tracking-tighter mb-8">
                    No Motivation Quotes.
                </h2>
<p className="text-xl text-gold-300 font-medium mb-10">Just Real Entrepreneurial Experience.</p>
<button className="group relative px-10 py-5 bg-gold-gradient rounded-lg font-bold text-charcoal-900 text-lg shadow-[0_0_40px_-10px_rgba(242,201,76,0.5)] hover:shadow-[0_0_60px_-10px_rgba(242,201,76,0.7)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
<span className="relative z-10 flex items-center justify-center gap-3">
                        Book a Strategic Call
                        <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<p className="mt-6 text-sm text-neutral-500 uppercase tracking-widest">If this hits, we should talk.</p>
</div>
</div>
</section>

<footer className="py-12 bg-charcoal-950 border-t border-white/5 text-center md:text-left">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="text-xl font-bold text-white tracking-tighter uppercase">DUGIC<span className="text-gold-300">.</span></span>
<p className="text-neutral-500 text-sm mt-1">Real experience. Real results.</p>
</div>
<div className="flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Imprint</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-gold-300 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-gold-300 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
