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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['Space Grotesk', 'monospace'],
},
colors: {
brand: {
deep: '#0A1628',
panel: '#0F172A',
teal: '#00C2FF',
orange: '#F97316',
muted: '#94A3B8'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 10s infinite',
'breathe': 'breathe 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
breathe: {
'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
'50%': { opacity: '0.7', transform: 'scale(1.1)' },
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
      

<div className="fixed inset-0 noise-bg pointer-events-none z-0"></div>

<div className="fixed top-[-20%] right-[-10%] w-[900px] h-[900px] bg-brand-teal/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>

<div className="fixed top-[10%] right-[30%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-blob mix-blend-screen"></div>

<div className="fixed bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A1628]/80 backdrop-blur-xl">
<div className="container mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<span className="font-serif text-xl font-bold tracking-tight text-white">Barrios <span className="text-brand-teal drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">A2I</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="bg-brand-orange hover:bg-orange-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all btn-glow-orange transform hover:-translate-y-0.5" href="#contact">Start Project</a>
</div>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<main className="container mx-auto px-6 pt-32 lg:pt-48 pb-20 relative z-10" id="home">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-xs font-semibold text-brand-teal mb-8 tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
</span>
                    Now Accepting Projects
                </div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] text-white tracking-tight font-serif font-semibold mb-6">
                    Build smarter. <br/>
<span className="bg-gradient-to-r from-[#2DD4BF] to-[#00C2FF] bg-clip-text text-transparent italic pr-2">Launch faster.</span>
</h1>
<p className="font-sans text-lg text-brand-muted leading-relaxed max-w-lg mb-10">
                    We design, develop, and deploy AI-powered solutions — from websites and apps to commercials and automation systems.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-orange hover:bg-orange-400 text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg shadow-brand-orange/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2" href="#contact">
                        Start Your Project
                    </a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-teal/50 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2" href="#services">
                        View Our Work
                    </a>
</div>
</div>

<div className="relative group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-teal/30 blur-[100px] rounded-full -z-10 animate-breathe pointer-events-none"></div>
<div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0F172A] aspect-video overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0A1628]"></div>
<div className="absolute inset-0 opacity-60">

<div className="h-full w-full" style={{backgroundImage: 'linear-gradient(rgba(0, 194, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 194, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<div className="absolute bottom-6 left-6 font-mono text-xs text-brand-teal leading-relaxed">
<div className="flex items-center gap-2 mb-1">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span> SYSTEM_READY
                        </div>
<div className="flex items-center gap-2 mb-1 opacity-70">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span> AGENTS_ACTIVE: 4
                        </div>
<div className="flex items-center gap-2 opacity-70">
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span> INTELLIGENCE_CORE: ONLINE
                        </div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-32 h-32 rounded-full border border-brand-teal/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-24 h-24 rounded-full border border-brand-teal/50 border-t-transparent animate-[spin_3s_linear_infinite_reverse]"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full blur-[8px] animate-pulse"></div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-[#0F172A]/30" id="services">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-teal text-xs font-bold tracking-widest uppercase block mb-4">What We Build</span>
<h2 className="text-4xl md:text-5xl font-serif text-white">One agency. Infinite possibilities.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 blur-[40px] rounded-full group-hover:bg-brand-teal/20 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:bot"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-brand-teal transition-colors relative z-10">AI Agent Systems</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Build intelligent automation that works 24/7. Lead capture, workflow orchestration, and active reasoning.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#">Configure System <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 blur-[40px] rounded-full group-hover:bg-brand-teal/20 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:globe"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-brand-teal transition-colors relative z-10">Websites &amp; Funnels</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Premium websites that convert. Next.js, React, stunning design — deployed fast with built-in SEO.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#">View Templates <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 blur-[40px] rounded-full group-hover:bg-brand-teal/20 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:smartphone"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-brand-teal transition-colors relative z-10">App Development</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Turn your idea into reality. iOS, Android, and web apps — from MVP to full product in weeks.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#">Start Build <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 blur-[40px] rounded-full group-hover:bg-brand-teal/20 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:clapperboard"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-brand-teal transition-colors relative z-10">AI Commercials</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Cinematic marketing videos generated by Veo &amp; Sora, engineered for high engagement.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#">Watch Samples <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 blur-[40px] rounded-full group-hover:bg-brand-teal/20 transition-all"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:wand-2"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-brand-teal transition-colors relative z-10">Prompt Systems</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Enterprise-grade prompt architectures for teams that need consistent AI output.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#">Get Packs <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-[#0F172A]/80 border-brand-teal/30 hover:border-brand-teal hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-teal/5"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 blur-[50px] rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center mb-6 text-xl relative z-10">
<span className="iconify" data-icon="lucide:zap"></span>
</div>
<h3 className="text-xl text-white font-medium mb-3 relative z-10">Custom Solutions</h3>
<p className="text-sm text-brand-muted mb-6 leading-relaxed relative z-10">Have a unique problem? Our automation architects are ready to design a custom solution.</p>
<a className="text-sm font-semibold text-brand-teal flex items-center gap-2 relative z-10" href="#contact">Book Call <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]" id="pricing">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-teal text-xs font-bold tracking-widest uppercase block mb-4">Step 02</span>
<h2 className="text-4xl md:text-5xl font-serif text-white">Choose Your Grid</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="glass-panel p-10 rounded-3xl bg-[#0D1B30] relative overflow-hidden">
<h3 className="text-2xl font-serif text-white mb-6">Core Grid</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold text-white">$1,500</span>
<span className="text-brand-muted text-sm">/setup</span>
</div>
<p className="font-mono text-sm text-brand-teal mb-8">$499/mo maintenance</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> 1 Orchestrator
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> 3 Specialist Agents
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> 1 Workflow
                        </li>
</ul>
<a className="block w-full py-3.5 rounded-full border border-white/10 hover:border-brand-teal text-white hover:text-brand-teal text-center text-sm font-semibold transition-all" href="#contact">Select Core</a>
</div>

<div className="glass-panel p-10 rounded-3xl bg-[#0F1F38] border-brand-teal/50 relative shadow-2xl shadow-brand-teal/10 overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/20 blur-[50px] rounded-full pointer-events-none"></div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-teal text-[#0A1628] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]">Most Popular</div>
<h3 className="text-2xl font-serif text-white mb-6">Growth Grid</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold text-white">$3,500</span>
<span className="text-brand-muted text-sm">/setup</span>
</div>
<p className="font-mono text-sm text-brand-teal mb-8">$1,200/mo maintenance</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> 2 Orchestrators
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> 7 Specialist Agents
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> CRM Integration
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> Analytics Dashboard
                        </li>
</ul>
<a className="block w-full py-3.5 rounded-full bg-brand-orange hover:bg-orange-400 text-white text-center text-sm font-semibold shadow-lg shadow-brand-orange/20 transition-all hover:-translate-y-0.5" href="#contact">Select Growth</a>
</div>

<div className="glass-panel p-10 rounded-3xl bg-[#0D1B30] relative overflow-hidden">
<h3 className="text-2xl font-serif text-white mb-6">Command</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<p className="font-mono text-sm text-brand-teal mb-8">Retainer Based</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> Multi-Department
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> Role-Based Routing
                        </li>
<li className="flex items-center gap-3 text-brand-muted text-sm">
<span className="iconify text-brand-teal" data-icon="lucide:check" data-width="16"></span> Custom Observability
                        </li>
</ul>
<a className="block w-full py-3.5 rounded-full border border-white/10 hover:border-brand-teal text-white hover:text-brand-teal text-center text-sm font-semibold transition-all" href="#contact">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-6" id="contact">
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 lg:p-20 text-center group">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-teal/20 transition-all duration-1000"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 relative z-10">
                Ready to build <span className="bg-gradient-to-r from-[#2DD4BF] to-[#00C2FF] bg-clip-text text-transparent italic">something intelligent?</span>
</h2>
<p className="text-lg text-brand-muted max-w-2xl mx-auto mb-12 font-light relative z-10">
                Our automation architects are ready to design a custom solution for your specific business needs.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">

<div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 text-left hover:bg-white/10 transition-colors cursor-pointer min-w-[280px]">
<div className="w-12 h-12 rounded-lg bg-brand-teal/20 text-brand-teal flex items-center justify-center text-xl shrink-0">
<span className="iconify" data-icon="lucide:calendar"></span>
</div>
<div>
<div className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Free Strategy</div>
<div className="text-white font-semibold">Book Your Session →</div>
</div>
</div>

<button className="bg-brand-orange hover:bg-orange-400 text-white px-10 py-4 rounded-full text-base font-bold shadow-lg shadow-brand-orange/20 transition-all hover:-translate-y-1 w-full md:w-auto">
                    Start Project
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 text-center text-sm text-brand-muted">
<div className="container mx-auto px-6">
<p>© 2025 Barrios A2I. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
