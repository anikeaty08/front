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
display: ['Manrope', 'sans-serif'],
},
colors: {
background: '#030303',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#1F1F1F',
borderHighlight: '#333333',
primary: '#E2E2E2',
secondary: '#888888',
accent: '#3B82F6', // Subtle blue hint
},
animation: {
'blob': 'blob 10s infinite',
'scroll': 'scroll 40s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
<div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[50%] w-[600px] h-[600px] bg-slate-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-grid opacity-[0.07]"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-4">
<div className="max-w-7xl mx-auto">
<div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
<span className="font-display font-semibold text-lg text-white tracking-tight">O</span>
</div>
<span className="font-display font-medium text-sm tracking-wide text-primary">OPTINEX</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#services">Intelligence</a>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#results">Results</a>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#faq">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="/ar">العربية</a>
<a className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors" href="#audit">
<span>Get Audit</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-reveal" style={{animationDelay: '0.1s'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] uppercase tracking-widest font-medium text-emerald-400">System Active • MENA Region</span>
</div>
<h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-gradient animate-reveal" style={{animationDelay: '0.2s'}}>
                    Search is an<br/>
<span className="italic font-light opacity-80 font-serif">engineering</span><br/>
                    problem.
                </h1>
<p className="text-secondary text-base sm:text-lg font-light max-w-xl leading-relaxed animate-reveal" style={{animationDelay: '0.3s'}}>
                    We don't "guess" rankings. We architect digital dominance for enterprise brands in Dubai &amp; MENA using programmatic SEO, forensic technical audits, and data-led content infrastructure.
                </p>
<div className="flex flex-wrap items-center gap-4 animate-reveal" style={{animationDelay: '0.4s'}}>
<a className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm overflow-hidden" href="#audit">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                            Initialize Growth
                            <iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-8 py-3.5 rounded-full border border-white/10 text-primary font-medium text-sm hover:bg-white/5 transition-all flex items-center gap-2" href="#work">
                        View Case Studies
                    </a>
</div>
</div>

<div className="lg:col-span-5 relative animate-reveal" style={{animationDelay: '0.5s'}}>
<div className="glass-card rounded-2xl p-6 relative z-10 w-full">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-secondary font-mono">optinex_core_v2.4.1</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] uppercase tracking-wider text-secondary mb-1">Organic Rev</div>
<div className="text-2xl font-display font-medium text-white">$2.4B+</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +124% YoY
                            </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] uppercase tracking-wider text-secondary mb-1">KW Ranked #1</div>
<div className="text-2xl font-display font-medium text-white">45,201</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Verified
                            </div>
</div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-1">
<div className="w-full bg-gradient-to-t from-white/5 to-white/0 rounded-t-sm h-[20%]"></div>
<div className="w-full bg-gradient-to-t from-white/10 to-white/0 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-gradient-to-t from-white/5 to-white/0 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-gradient-to-t from-white/20 to-white/0 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-gradient-to-t from-white/10 to-white/0 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-gradient-to-t from-white/30 to-white/0 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-gradient-to-t from-white/40 to-white/0 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-gradient-to-t from-white/60 to-white/0 rounded-t-sm h-[100%]"></div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-8 overflow-hidden bg-black/20">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
<div className="flex animate-scroll whitespace-nowrap gap-16 items-center">

<span className="text-lg font-display font-semibold tracking-widest text-white/30">EMAAR</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">NOON</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">DAMAC</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">JUMEIRAH</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">ETIHAD</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">TECOM</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">DUPROPERTIES</span>

<span className="text-lg font-display font-semibold tracking-widest text-white/30">EMAAR</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">NOON</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">DAMAC</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">JUMEIRAH</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">ETIHAD</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">TECOM</span>
<span className="text-lg font-display font-semibold tracking-widest text-white/30">DUPROPERTIES</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Intelligence Stack</h2>
<p className="text-secondary font-light max-w-xl text-lg">Our systematic approach to organic acquisition. Modular, scalable, and engineered for the MENA algorithm.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">

<div className="glass-card p-8 rounded-2xl md:col-span-2 md:row-span-2 flex flex-col justify-between group cursor-default">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:code-scan-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Technical Architecture</h3>
<p className="text-secondary font-light leading-relaxed">
                            Deep-dive forensic audits resolving JavaScript rendering issues, crawl budget waste, and Core Web Vitals. We optimize the code that powers your rankings.
                        </p>
</div>
<div className="flex items-center gap-2 mt-8">
<span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">CWV: Pass</span>
<span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">SSR: Active</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl md:col-span-1 md:row-span-2 flex flex-col group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Native Arabic</h3>
<p className="text-sm text-secondary font-light flex-grow">
                        We don't translate. We transcreate. Targeting Neolocal dialects across GCC to capture high-intent Arabic queries.
                    </p>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="flex justify-between text-xs text-secondary">
<span>Saudi Arabia</span>
<span className="text-white">92% Reach</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl md:col-span-1 flex flex-col justify-center group">
<iconify-icon className="text-white mb-3" icon="solar:document-add-linear" width="24"></iconify-icon>
<h3 className="text-lg font-display font-medium text-white">Semantic Content</h3>
<p className="text-xs text-secondary mt-2">Topical authority clusters that dominate SERP features.</p>
</div>

<div className="glass-card p-6 rounded-2xl md:col-span-1 flex flex-col justify-center group">
<iconify-icon className="text-white mb-3" icon="solar:link-round-angle-linear" width="24"></iconify-icon>
<h3 className="text-lg font-display font-medium text-white">Digital PR</h3>
<p className="text-xs text-secondary mt-2">High-tier placements in Forbes ME, Gulf News &amp; more.</p>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 flex items-center justify-between group">
<div>
<h3 className="text-xl font-display font-medium text-white mb-2">Hyper-Local Dominance</h3>
<p className="text-sm text-secondary font-light">Winning the 'Map Pack' in every Emirate and Governorate.</p>
</div>
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
<iconify-icon className="text-white" icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
</div>

<div className="glass-card p-6 rounded-2xl md:col-span-2 flex flex-col justify-center group">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-white" icon="solar:cart-large-linear" width="24"></iconify-icon>
<h3 className="text-lg font-display font-medium text-white">Programmatic E-Com</h3>
</div>
<p className="text-sm text-secondary font-light">Automated schema injection and faceted navigation optimization for 100k+ SKU stores.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-surfaceHighlight/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:divide-x md:divide-white/5">
<div className="px-4">
<div className="text-5xl font-display font-light text-white mb-2 tracking-tighter">250<span className="text-blue-500 text-3xl">+</span></div>
<div className="text-xs font-medium uppercase tracking-widest text-secondary">Clients Ranked #1</div>
</div>
<div className="px-4">
<div className="text-5xl font-display font-light text-white mb-2 tracking-tighter">$2B<span className="text-blue-500 text-3xl">+</span></div>
<div className="text-xs font-medium uppercase tracking-widest text-secondary">Revenue Generated</div>
</div>
<div className="px-4">
<div className="text-5xl font-display font-light text-white mb-2 tracking-tighter">15</div>
<div className="text-xs font-medium uppercase tracking-widest text-secondary">MENA Markets</div>
</div>
<div className="px-4">
<div className="text-5xl font-display font-light text-white mb-2 tracking-tighter">98<span className="text-sm align-top">%</span></div>
<div className="text-xs font-medium uppercase tracking-widest text-secondary">Retention Rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="font-display text-3xl font-medium text-white mb-12">Sector Expertise</h2>
<div className="flex flex-col">

<div className="group border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-secondary">01</span>
<h3 className="text-2xl font-display font-light text-white">Real Estate &amp; Development</h3>
</div>
<p className="text-sm text-secondary md:max-w-sm mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        Optimizing off-plan projects and luxury listings for high-net-worth investor intent.
                    </p>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity md:block hidden" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>

<div className="group border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-secondary">02</span>
<h3 className="text-2xl font-display font-light text-white">Fintech &amp; Banking</h3>
</div>
<p className="text-sm text-secondary md:max-w-sm mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        YMYL-compliant strategies for trading platforms, neo-banks, and wealth management.
                    </p>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity md:block hidden" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>

<div className="group border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-secondary">03</span>
<h3 className="text-2xl font-display font-light text-white">Enterprise E-Commerce</h3>
</div>
<p className="text-sm text-secondary md:max-w-sm mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        Scaling organic revenue for multi-national retailers across the GCC.
                    </p>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity md:block hidden" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>

<div className="group border-t border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-secondary">04</span>
<h3 className="text-2xl font-display font-light text-white">Healthcare Groups</h3>
</div>
<p className="text-sm text-secondary md:max-w-sm mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        Patient acquisition pipelines for hospitals and specialized clinics.
                    </p>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity md:block hidden" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex mb-8 text-yellow-400 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-4xl font-display font-light leading-snug text-white mb-10">
                "We stopped paying for ads and started investing in assets. Optinex didn't just improve our rankings; they fundamentally re-architected our digital revenue model."
            </blockquote>
<div className="flex flex-col items-center">
<div className="font-medium text-white">Mohammed Al-Rashid</div>
<div className="text-sm text-secondary">CMO, Emirates Property Group</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="audit">

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-lg mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-display font-medium text-white mb-3">Request Strategic Audit</h2>
<p className="text-secondary font-light text-sm">Complimentary engineering analysis for qualifying brands.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="group">
<label className="block text-xs text-secondary mb-1.5 ml-1">First Name</label>
<input className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" placeholder="Ali" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-secondary mb-1.5 ml-1">Last Name</label>
<input className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" placeholder="Khan" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-secondary mb-1.5 ml-1">Work Email</label>
<input className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs text-secondary mb-1.5 ml-1">Website URL</label>
<input className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" placeholder="https://" type="url"/>
</div>
<div className="pt-2">
<label className="block text-xs text-secondary mb-3 ml-1">Monthly Budget Range (USD)</label>
<div className="grid grid-cols-2 gap-3">
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="budget" type="radio"/>
<div className="border border-border rounded-lg px-4 py-3 text-xs text-white text-center hover:bg-white/5 transition-colors select-none flex items-center justify-center gap-2">
                                $5k - $10k
                            </div>
</label>
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="budget" type="radio"/>
<div className="border border-border rounded-lg px-4 py-3 text-xs text-white text-center hover:bg-white/5 transition-colors select-none flex items-center justify-center gap-2">
                                $10k - $25k
                            </div>
</label>
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="budget" type="radio"/>
<div className="border border-border rounded-lg px-4 py-3 text-xs text-white text-center hover:bg-white/5 transition-colors select-none flex items-center justify-center gap-2">
                                $25k - $50k
                            </div>
</label>
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="budget" type="radio"/>
<div className="border border-border rounded-lg px-4 py-3 text-xs text-white text-center hover:bg-white/5 transition-colors select-none flex items-center justify-center gap-2">
                                Enterprise ($50k+)
                            </div>
</label>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-lg py-3.5 mt-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Start Analysis
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-secondary mt-4">Protected by NDA. Zero spam policy.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center border border-white/5">
<span className="font-display font-semibold text-xs text-white">O</span>
</div>
<span className="font-display font-medium text-sm text-primary">OPTINEX</span>
</div>
<p className="text-xs text-secondary leading-relaxed mb-6">
                        DIFC, Gate Building, Level 15<br/>
                        Dubai, United Arab Emirates<br/>
                        +971 4 555 0123
                    </p>
<div className="flex gap-4">
<a className="text-secondary hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-secondary hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-secondary hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Platform</h4>
<ul className="space-y-3 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">Technical SEO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Content Architecture</a></li>
<li><a className="hover:text-white transition-colors" href="#">Link Velocity</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-3 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-secondary">© 2026 Optinex Agency. All rights reserved.</p>
<div className="flex items-center gap-6 opacity-50">
<iconify-icon className="grayscale" icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-[10px] text-secondary">Certified Partner</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
