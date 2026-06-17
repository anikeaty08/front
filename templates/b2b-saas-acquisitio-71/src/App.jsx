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
serif: ['Instrument Serif', 'serif'],
},
colors: {
brand: {
// Updated to Airr Digital Blue/Sky palette while keeping dark theme
primary: '#38bdf8', // Sky 400
glow: '#0ea5e9',    // Sky 500
dark: '#020204',
panel: '#0A0B10',
border: 'rgba(255,255,255,0.08)'
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'dash': 'dash 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
dash: {
'to': { strokeDashoffset: '24' }
}
}
}
}
}



        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-grid"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-5xl z-50 transition-all duration-300">
<div className="glass-panel rounded-full p-2 pl-4 md:pl-6 flex items-center justify-between shadow-2xl shadow-brand-primary/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"></div>
<span className="text-sm font-medium tracking-wide font-sans text-white/90">Airr Digital</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#offer">What We Offer</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#process">How It Works</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="bg-white text-brand-dark px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-medium hover:bg-brand-primary hover:text-brand-dark transition-all duration-300" onclick="window.location.href='#book'">
                    Book A Meeting
                </button>
</div>
</div>
</nav>
<main className="pt-32 md:pt-40 pb-20">

<section className="container mx-auto px-6 max-w-6xl text-center mb-20 md:mb-24 relative">
<div className="reveal active flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 backdrop-blur-sm mb-6 md:mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-primary"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
</span>
<span className="text-[10px] md:text-[11px] font-medium text-brand-primary tracking-wide uppercase">For B2B SaaS Founders</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.05] mb-6 md:mb-8 max-w-5xl">
                    We Help B2B SaaS Companies Acquire Customers Profitably On Ads, <span className="text-gradient">Halve Their CAC</span> And Add $1M+ In ARR Within 12 Weeks
                </h1>
<p className="text-base md:text-lg font-light text-white/50 max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto">
                    By implementing a full-funnel paid acquisition system that generates leads, books qualified demos, and acquires customers at a 3x ROAS or better.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark" onclick="window.location.href='#book'">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#38bdf8_50%,#020402_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-panel px-8 py-3.5 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-[#0f1016]">
                            Let's Talk About Your Ads
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
</div>
</div>
</section>

<section className="container mx-auto px-4 max-w-4xl mb-24 reveal">
<div className="relative group rounded-2xl bg-[#0A0B10] border border-brand-border p-2 shadow-2xl overflow-hidden">

<div className="aspect-video w-full bg-brand-panel relative rounded-xl overflow-hidden flex items-center justify-center group-hover:border-brand-primary/20 transition-colors border border-transparent">
<div className="absolute inset-0 bg-gradient-to-br from-brand-panel to-[#050508] opacity-50"></div>

<div className="w-20 h-20 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center backdrop-blur-sm z-10 group-hover:scale-110 transition-transform cursor-pointer">
<span className="iconify text-brand-primary ml-1" data-icon="lucide:play" data-width="32"></span>
</div>
<div className="absolute bottom-6 left-6 z-10 text-xs font-mono text-white/50 bg-black/50 px-2 py-1 rounded border border-white/10">Video Placeholder - Wistia</div>
</div>

<div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10"></div>
</div>
</section>

<section className="container mx-auto px-6 text-center mb-24 reveal" id="book-cta">
<button className="bg-white text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all shadow-lg shadow-white/5 mb-3" onclick="window.location.href='#book'">
                Book A Meeting
            </button>
<p className="text-xs text-white/40 font-light">Free 30-minute strategy call. No obligation.</p>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.01] py-12 mb-32 overflow-hidden">
<div className="text-center mb-8">
<p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] px-4">Trusted by 50+ B2B SaaS Companies</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex gap-16 whitespace-nowrap opacity-40 group-hover:opacity-80 transition-all duration-500 pl-4 items-center">
<span className="text-lg font-bold font-sans">Instantly.ai</span>
<span className="text-lg font-bold">ListKit</span>
<span className="text-lg font-light tracking-widest font-sans">TXTCART</span>
<span className="text-lg font-medium font-serif">Trustworthy</span>
<span className="text-lg font-semibold tracking-tight">Buddy Punch</span>
<span className="text-lg font-medium tracking-tight">Float</span>
<span className="text-lg font-bold tracking-tight text-white">Simplesat</span>
<span className="text-lg font-light tracking-widest">GROWTHSPACE</span>
<span className="text-lg font-bold italic">Submagic</span>
<span className="text-lg font-medium">Inframail</span>
<span className="text-lg font-bold">Promotix</span>
<span className="text-lg font-light tracking-wider">BookYourData</span>

<span className="text-lg font-bold font-sans">Instantly.ai</span>
<span className="text-lg font-bold">ListKit</span>
<span className="text-lg font-light tracking-widest font-sans">TXTCART</span>
<span className="text-lg font-medium font-serif">Trustworthy</span>
<span className="text-lg font-semibold tracking-tight">Buddy Punch</span>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32" id="offer">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Why Airr Digital</h2>
<p className="text-white/50 font-light leading-relaxed">
                    Paid ads. Paid ads. Paid ads... We only focus on paid ads for B2B SaaS companies.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-colors duration-300 reveal">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">B2B SaaS Specialists</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                        We only work with B2B SaaS. No ecom, no agencies, no local businesses. This focus means we know exactly what works for your market, your buyers, and your sales cycle.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-colors duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Full-Funnel Ownership</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                        We don't just run ads. We build the landing pages, write the VSL scripts, set up tracking, build the email flows, and optimize the entire funnel. You get one team handling everything.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-colors duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Speed To Results</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                        Most agencies take 4-8 weeks to launch. We get campaigns live in 14 days with new creative testing every 72 hours. You see data faster, we optimize faster, you get results faster.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-colors duration-300 reveal delay-200">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Guaranteed Results</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                        We've refined our process across 50+ B2B SaaS clients. The same frameworks that have worked for 1000s of ads get applied to your business from day one. We guarantee profitable results.
                    </p>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32" id="case-studies">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Get Real Results And ROI</h2>
</div>
<div className="grid grid-cols-1 gap-8">

<div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 reveal relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="grid md:grid-cols-2 gap-8 relative z-10">
<div>
<div className="text-xs font-mono text-brand-primary mb-2">PRODUCTHQ</div>
<h3 className="text-2xl font-medium text-white mb-4">Product Management Platform</h3>
<div className="space-y-4 text-sm text-white/60 font-light">
<p><strong className="text-white/80">Problem:</strong> Competing in a crowded market with no clear positioning. Struggling to cut through noise and reach decision-makers.</p>
<p><strong className="text-white/80">What We Did:</strong> Conducted deep market research. Built ad creatives and campaigns with messaging that resonated with their specific ICP. Launched targeted campaigns across Meta.</p>
</div>
</div>
<div className="flex flex-col justify-center bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-3xl font-medium text-white tracking-tight">438</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Qualified Meetings</div>
</div>
<div>
<div className="text-3xl font-medium text-brand-primary tracking-tight">-411%</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Cost Per Call</div>
</div>
<div className="col-span-2 pt-4 border-t border-white/10 mt-2">
<div className="text-4xl font-serif text-white tracking-tight">$1.3M ARR</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Added in 90 Days</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 reveal relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="grid md:grid-cols-2 gap-8 relative z-10">
<div>
<div className="text-xs font-mono text-brand-primary mb-2">UPNOTIFY</div>
<h3 className="text-2xl font-medium text-white mb-4">Notification Infrastructure</h3>
<div className="space-y-4 text-sm text-white/60 font-light">
<p><strong className="text-white/80">Problem:</strong> High CAC making paid acquisition unprofitable. Existing funnel wasn't converting cold traffic into demos.</p>
<p><strong className="text-white/80">What We Did:</strong> Overhauled their entire paid advertising funnel. Scripted 40+ ad creatives. Built custom landing pages and backend nurture systems.</p>
</div>
</div>
<div className="flex flex-col justify-center bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-3xl font-medium text-white tracking-tight">7.5x</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Conversions</div>
</div>
<div>
<div className="text-3xl font-medium text-brand-primary tracking-tight">-245%</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Lower CAC</div>
</div>
<div className="col-span-2 pt-4 border-t border-white/10 mt-2">
<div className="text-4xl font-serif text-white tracking-tight">9x Demos</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Booked in 60 Days</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="glass-panel p-8 rounded-3xl reveal">
<div className="text-xs font-mono text-brand-primary mb-2">INSTANTLY AI</div>
<h3 className="text-xl font-medium text-white mb-2">Cold Email Infrastructure</h3>
<p className="text-sm text-white/50 mb-6 font-light">Identified high-intent audience segments and crafted pain-point specific messaging.</p>
<div className="text-3xl font-serif text-white tracking-tight">+$140K MRR</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Revenue Added</div>
</div>
<div className="glass-panel p-8 rounded-3xl reveal">
<div className="text-xs font-mono text-brand-primary mb-2">BOOKYOURDATA</div>
<h3 className="text-xl font-medium text-white mb-2">B2B Contact Database</h3>
<p className="text-sm text-white/50 mb-6 font-light">Developed targeted messaging for specific personas and personalized funnel journeys.</p>
<div className="text-3xl font-serif text-white tracking-tight">+$60K MRR</div>
<div className="text-xs text-white/40 uppercase tracking-wide mt-1">Revenue Added</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl mb-32" id="process">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">How It Works</h2>
</div>
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-mono text-sm font-bold">1</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2">Research &amp; Strategy</h3>
<p className="text-sm text-white/50 font-light">We gather your sales call transcripts, analyze your ICP, and craft messaging that resonates with in-market prospects.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-mono text-sm font-bold">2</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2">Offer &amp; Funnel Build</h3>
<p className="text-sm text-white/50 font-light">We craft a compelling offer and build the entire funnel - landing page, VSL, thank you page, and booking flows.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-mono text-sm font-bold">3</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2">Ad Creative Production</h3>
<p className="text-sm text-white/50 font-light">We script, design, and edit your ad creatives. New variations are produced and tested every 72 hours.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-mono text-sm font-bold">4</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2">Campaign Launch &amp; Testing</h3>
<p className="text-sm text-white/50 font-light">We launch campaigns and test 60+ creatives simultaneously. We typically find a profitable angle within 5-14 days.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-mono text-sm font-bold">5</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2">Optimization &amp; Scale</h3>
<p className="text-sm text-white/50 font-light">We analyze performance, cut what's not working, and scale the winners to maximise ROAS and POAS.</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">What Our Clients Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl reveal">
<div className="mb-4 text-brand-primary">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-white/70 text-sm font-light leading-relaxed mb-6 min-h-[80px]">
                        [Testimonial placeholder text would go here describing the amazing results and service]
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Andre</div>
<div className="text-xs text-white/40">Founder, ListKit</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl reveal delay-100">
<div className="mb-4 text-brand-primary">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-white/70 text-sm font-light leading-relaxed mb-6 min-h-[80px]">
                        [Testimonial placeholder text would go here describing the amazing results and service]
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Carson Szeder</div>
<div className="text-xs text-white/40">CEO, AI Edtech SaaS</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl reveal delay-200">
<div className="mb-4 text-brand-primary">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-white/70 text-sm font-light leading-relaxed mb-6 min-h-[80px]">
                        [Testimonial placeholder text would go here describing the amazing results and service]
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Andrew Osborne</div>
<div className="text-xs text-white/40">Founder, Upnotify</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32">
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 reveal">
<h2 className="text-3xl font-serif text-white tracking-tight mb-10 text-center">Everything You Get</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">

<div className="space-y-8">
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:search" data-width="16"></span> Strategy &amp; Research
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Sales call analysis &amp; winning angles</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> ICP research &amp; persona development</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Competitor audit &amp; differentiation</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Messaging development</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Offer structuring</li>
</ul>
</div>
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:filter" data-width="16"></span> Funnel Build
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Landing page copy &amp; design</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> VSL scripting, editing &amp; production</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Booking system setup</li>
</ul>
</div>
</div>

<div className="space-y-8">
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:image" data-width="16"></span> Ad Creatives
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Ad scripting &amp; copywriting</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Static, Video &amp; Carousel ads</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> 50+ total ad angles</li>
</ul>
</div>
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="16"></span> Tracking &amp; Attribution
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Meta Pixel &amp; Server-side setup</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Conversion event tracking</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Performance dashboards</li>
</ul>
</div>
</div>

<div className="space-y-8">
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span> Email &amp; Sales
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Nurture &amp; Follow-up flows</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Lead reactivation campaigns</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> CRM workflow optimization</li>
</ul>
</div>
<div>
<h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span> Ongoing
                            </h4>
<ul className="space-y-2 text-sm text-white/60 font-light">
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Creative testing &amp; iteration</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> A/B testing across funnel</li>
<li className="flex gap-2 items-start"><span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14"></span> Weekly performance reporting</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">More Client Results</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal">
<div className="aspect-video bg-white/5 rounded-lg mb-4 border border-white/5 flex items-center justify-center text-white/20">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<div className="text-sm font-medium text-white mb-4">B2B Martech Startup</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div className="text-white/50">Cost Per Demo</div>
<div className="text-right text-white">$127</div>
<div className="text-white/50">CAC</div>
<div className="text-right text-white">$890</div>
<div className="text-white/50">MRR Added</div>
<div className="text-right text-brand-primary font-bold">+$52k</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal delay-100">
<div className="aspect-video bg-white/5 rounded-lg mb-4 border border-white/5 flex items-center justify-center text-white/20">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<div className="text-sm font-medium text-white mb-4">AI Software Development</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div className="text-white/50">Cost Per Demo</div>
<div className="text-right text-white">$89</div>
<div className="text-white/50">ROAS</div>
<div className="text-right text-white">4.2x</div>
<div className="text-white/50">MRR Added</div>
<div className="text-right text-brand-primary font-bold">+$215k</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal delay-200">
<div className="aspect-video bg-white/5 rounded-lg mb-4 border border-white/5 flex items-center justify-center text-white/20">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<div className="text-sm font-medium text-white mb-4">B2B Data Enrichment</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div className="text-white/50">Cost Per Demo</div>
<div className="text-right text-white">$156</div>
<div className="text-white/50">Payback</div>
<div className="text-right text-white">28 days</div>
<div className="text-white/50">MRR Added</div>
<div className="text-right text-brand-primary font-bold">+$180k</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal">
<div className="aspect-video bg-white/5 rounded-lg mb-4 border border-white/5 flex items-center justify-center text-white/20">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<div className="text-sm font-medium text-white mb-4">B2B Sales Automation</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div className="text-white/50">Cost Per Demo</div>
<div className="text-right text-white">$73</div>
<div className="text-white/50">ROAS</div>
<div className="text-right text-white">3.8x</div>
<div className="text-white/50">MRR Added</div>
<div className="text-right text-brand-primary font-bold">+$410k</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal delay-100">
<div className="aspect-video bg-white/5 rounded-lg mb-4 border border-white/5 flex items-center justify-center text-white/20">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<div className="text-sm font-medium text-white mb-4">B2B AI GTM Platform</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div className="text-white/50">Cost Per Demo</div>
<div className="text-right text-white">$112</div>
<div className="text-white/50">CAC</div>
<div className="text-right text-white">$1,200</div>
<div className="text-white/50">MRR Added</div>
<div className="text-right text-brand-primary font-bold">+$95k</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl mb-32 text-center reveal">
<h2 className="text-3xl font-serif text-white tracking-tight mb-8">Who We Work With</h2>
<div className="flex flex-wrap justify-center gap-4 mb-16">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">B2B SaaS Companies</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">Sales-led GTM Motion</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">$500k+ ARR</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">Product-market Fit</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">$200+/day Ad Budget</span>
</div>
<div className="border-t border-white/5 pt-16">
<p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] mb-8">Join 50+ B2B SaaS Companies</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-50 grayscale">
<div className="flex items-center justify-center text-sm font-bold">Instantly.ai</div>
<div className="flex items-center justify-center text-sm font-bold">ListKit</div>
<div className="flex items-center justify-center text-sm font-light">TXTCART</div>
<div className="flex items-center justify-center text-sm font-medium font-serif">Trustworthy</div>
<div className="flex items-center justify-center text-sm font-medium">Growthspace</div>
<div className="flex items-center justify-center text-sm font-semibold">Buddy Punch</div>
<div className="flex items-center justify-center text-sm font-medium">Float</div>
<div className="flex items-center justify-center text-sm font-bold">Simplesat</div>
<div className="flex items-center justify-center text-sm font-bold italic">Submagic</div>
<div className="flex items-center justify-center text-sm font-bold">Promotix</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-3xl mb-32" id="faq">
<h2 className="text-3xl font-serif text-white tracking-tight mb-10 text-center reveal">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="glass-panel rounded-2xl group reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">What makes you different from other agencies?</span>
<span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
                        We only work with B2B SaaS companies. That's it. This means every framework and optimization we've learned comes from companies like yours. We also own the entire funnel - ads, landing pages, VSL, email flows - so you're not coordinating between five different vendors.
                    </div>
</details>

<details className="glass-panel rounded-2xl group reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">How long until I see results?</span>
<span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
                        We launch campaigns within 14 days of kickoff. Most clients see their first booked demos within the first 7 days. Meaningful data usually comes by week 2-3. Full optimization and scaling typically happens over 6-8 weeks.
                    </div>
</details>

<details className="glass-panel rounded-2xl group reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">What's the minimum ad spend required?</span>
<span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
                        We recommend a minimum of $200/day in ad spend. This gives us enough data to test creative angles, optimize campaigns, and scale what's working.
                    </div>
</details>

<details className="glass-panel rounded-2xl group reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">Do you handle creative production?</span>
<span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
                        We handle everything - scripting, design, editing. For video ads and VSLs, we'll need you or your team to film the talking head portions. We provide the scripts and shot lists.
                    </div>
</details>

<details className="glass-panel rounded-2xl group reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">What if it doesn't work?</span>
<span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
                        Our goal is to make you profitable within 90 days. We guarantee results, and offer a full refund if results are not met. If we've done our job and you've held up your end, you will see results.
                    </div>
</details>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl text-center mb-24 mt-24" id="book">
<div className="glass-panel p-10 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6 relative z-10">Let's Talk About Your Ad Funnel</h2>
<p className="text-base md:text-lg text-white/50 font-light mb-10 max-w-lg mx-auto relative z-10">
                    Book a free 30-minute strategy call. We'll analyze your current funnel, identify the biggest opportunities, and show you exactly how you can improve your ads.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-white text-brand-dark px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-xl shadow-white/5">
                        Book A Meeting
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020402] pt-20 pb-10">
<div className="container mx-auto px-6 max-w-6xl text-center">
<div className="flex flex-col items-center gap-6 mb-8">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-brand-primary rounded-full"></div>
<span className="text-lg font-medium tracking-wide text-white">Airr Digital</span>
</div>
<p className="text-white/40 text-sm font-light">
                    © 2026 Airr Digital. All rights reserved.
                </p>
</div>
</div>
</footer>


    </>
  );
}
