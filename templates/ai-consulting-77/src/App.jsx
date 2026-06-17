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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
zinc: { 850: '#1f1f22', 950: '#09090b' },
gold: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' } // Subtle gold accent
},
boxShadow: {
'glow': '0 0 40px -10px rgba(251, 191, 36, 0.15)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Performance: Fire once
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        function app() {
            return {
                mobileMenuOpen: false,
                scrolled: false,
                modalOpen: false,
                modalType: 'callback', // 'callback' | 'newsletter'
                
                handleScroll() {
                    this.scrolled = window.scrollY > 20;
                },
                
                openModal(type) {
                    this.modalType = type;
                    this.modalOpen = true;
                    this.$nextTick(() => document.getElementById('modal-first-focus')?.focus());
                },
                
                closeModal() {
                    this.modalOpen = false;
                },
                
                submitForm(e) {
                    const btn = e.target.querySelector('button[type="submit"]');
                    const originalText = btn.innerText;
                    btn.innerText = 'Processing...';
                    btn.disabled = true;
                    btn.classList.add('opacity-70', 'cursor-not-allowed');
                    
                    setTimeout(() => {
                        btn.innerText = 'Success';
                        setTimeout(() => {
                            this.closeModal();
                            btn.innerText = originalText;
                            btn.disabled = false;
                            btn.classList.remove('opacity-70', 'cursor-not-allowed');
                            e.target.reset();
                        }, 800);
                    }, 1200);
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
      



<nav :className="scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'" className="fixed top-0 w-full z-50 transition-all duration-500 border-b">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<a aria-label="Wisarc Home" className="text-white font-semibold tracking-tighter text-lg z-50 relative" href="#">
                WISARC
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#method">Method</a>
<a className="hover:text-white transition-colors" href="#proof">Proof</a>
<a className="text-gold-400/90 hover:text-gold-400 transition-colors flex items-center gap-1.5" href="#elenar">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                    Elenar
                </a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button @click="openModal('callback')" className="text-xs font-medium text-zinc-300 hover:text-white transition-colors">
                    Contact Support
                </button>
<button @click="openModal('callback')" className="bg-white text-zinc-950 px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Start a Conversation
                </button>
</div>

<button @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle Menu" className="md:hidden text-white z-50 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="absolute inset-x-0 top-0 bg-zinc-950 border-b border-white/10 p-6 pt-24 flex flex-col gap-6 md:hidden shadow-2xl h-screen" x-show="mobileMenuOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 -translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<a @click="mobileMenuOpen = false" className="text-2xl font-medium text-white tracking-tight" href="#method">Method</a>
<a @click="mobileMenuOpen = false" className="text-2xl font-medium text-white tracking-tight" href="#proof">Proof</a>
<a @click="mobileMenuOpen = false" className="text-2xl font-medium text-gold-400 tracking-tight flex items-center gap-2" href="#elenar">
                Elenar <iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</a>
<a @click="mobileMenuOpen = false" className="text-2xl font-medium text-white tracking-tight" href="#insights">Insights</a>
<div className="h-px bg-white/10 w-full my-2"></div>
<button @click="mobileMenuOpen = false; openModal('callback')" className="w-full bg-white text-zinc-950 py-4 rounded-xl font-semibold text-lg">Start Conversation</button>
</div>
</nav>

<main className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">

<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">

<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Strategy-First AI Transformation</span>
</div>

<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 max-w-4xl leading-[1.05]">
                Clarity in chaos.<br/>
<span className="text-zinc-600">Scale with certainty.</span>
</h1>

<p className="reveal delay-200 text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 mx-auto">
                We build the decision nervous system for your business. Moving you from reactive data reporting to predictive, agentic workflows.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
<button @click="openModal('callback')" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 rounded-lg font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
<span>Discover the Method</span>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 group" href="#elenar">
<span>See Elenar</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform text-zinc-500 group-hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal delay-300 border-t border-white/5 pt-8 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Enterprise Grade</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">4-Week Deployment</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Workshops Included</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:lock-password-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">GDPR Compliant</span>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">The Current Reality</h2>
<p className="text-zinc-400 leading-relaxed mb-8">Most organizations are drowning in tools but starving for insight. AI adoption often results in chaos rather than clarity.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500/80 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<div>
<strong className="text-zinc-200 text-sm block">Innovation Theater</strong>
<span className="text-zinc-500 text-sm">Pilots that look good in press releases but never reach production.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500/80 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<div>
<strong className="text-zinc-200 text-sm block">Data Silos</strong>
<span className="text-zinc-500 text-sm">Marketing data doesn't talk to Sales. Sales doesn't talk to Product.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500/80 mt-1" icon="solar:close-circle-linear"></iconify-icon>
<div>
<strong className="text-zinc-200 text-sm block">Undefined ROI</strong>
<span className="text-zinc-500 text-sm">Implementing AI without a clear path to revenue or efficiency.</span>
</div>
</li>
</ul>
</div>
<div className="reveal delay-200 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-950 rounded-2xl border border-white/5"></div>
<div className="relative h-full flex items-center justify-center p-8">
<div className="text-center">
<iconify-icon className="text-zinc-700 mb-4" icon="solar:danger-circle-linear" width="48"></iconify-icon>
<p className="text-zinc-500 font-mono text-xs">ERR_CONNECTION_REFUSED<br/>SYSTEM_OVERLOAD</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-gold-500 font-medium tracking-wide text-xs uppercase mb-3 block">The Wisarc Way</span>
<h2 className="reveal text-3xl md:text-4xl font-semibold text-white tracking-tight">Core Architecture</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal card-premium p-8 rounded-2xl group cursor-pointer h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">AI Transformation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We audit your workflows to identify high-friction points, then deploy custom LLM agents to handle the load.</p>
</div>

<div className="reveal delay-100 card-premium p-8 rounded-2xl group cursor-pointer h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Strategic Funnels</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Architecture that connects traffic to revenue. We build the systems that nurture leads while you sleep.</p>
</div>

<div className="reveal delay-200 card-premium p-8 rounded-2xl group cursor-pointer h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Unified Intelligence</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Single source of truth. We centralize your analytics (PostHog, CRM) so decisions are math-based, not gut-based.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Engineered for Trust</h2>
<p className="text-zinc-400 mb-8">We don't sell hours. We sell outcomes. Our engagement model is designed to reduce implementation risk to near zero.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-1 h-full min-h-[40px] bg-white/10 rounded-full"></div>
<div>
<h4 className="text-white font-medium text-sm">Fixed Scope, Fixed Price</h4>
<p className="text-zinc-500 text-sm mt-1">No surprise billings. We agree on the output before we start.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 h-full min-h-[40px] bg-white/10 rounded-full"></div>
<div>
<h4 className="text-white font-medium text-sm">Full Ownership</h4>
<p className="text-zinc-500 text-sm mt-1">You own the code, the models, and the data. No lock-in.</p>
</div>
</div>
</div>
</div>
<div className="reveal delay-200 grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 text-center">
<span className="block text-3xl font-semibold text-white mb-1">30%</span>
<span className="text-xs text-zinc-500">OpEx Reduction</span>
</div>
<div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 text-center">
<span className="block text-3xl font-semibold text-white mb-1">3x</span>
<span className="text-xs text-zinc-500">Lead Velocity</span>
</div>
<div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 text-center col-span-2">
<span className="block text-3xl font-semibold text-white mb-1">100%</span>
<span className="text-xs text-zinc-500">System Uptime</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="elenar">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="reveal inline-flex items-center gap-2 mb-6 text-gold-500">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Product Spotlight</span>
</div>
<h2 className="reveal delay-100 text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Meet Elenar.</h2>
<p className="reveal delay-200 text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
                Not a dashboard. A central nervous system. Elenar connects your disparate data sources into a single, queryable intelligence layer.
            </p>

<div className="reveal delay-300 relative max-w-5xl mx-auto aspect-[16/9] bg-zinc-950 rounded-xl border border-white/10 shadow-2xl shadow-gold-900/5 overflow-hidden group">

<div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="text-xs text-zinc-600 font-mono">elenar_v1.0.3_stable</div>
</div>

<div className="relative h-full w-full flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<div className="w-24 h-24 rounded-full border border-gold-500/30 bg-gold-500/5 flex items-center justify-center relative z-10 shadow-glow">
<iconify-icon className="text-gold-400" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-800" style={{strokeWidth: '1'}}>
<line x1="50%" x2="20%" y1="50%" y2="30%"></line>
<line x1="50%" x2="80%" y1="50%" y2="30%"></line>
<line x1="50%" x2="20%" y1="50%" y2="70%"></line>
<line x1="50%" x2="80%" y1="50%" y2="70%"></line>
</svg>

<div className="absolute top-[30%] left-[20%] p-3 bg-zinc-900 border border-white/10 rounded-lg">
<iconify-icon className="text-zinc-500" icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="absolute top-[30%] right-[20%] p-3 bg-zinc-900 border border-white/10 rounded-lg">
<iconify-icon className="text-zinc-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="absolute bottom-[30%] left-[20%] p-3 bg-zinc-900 border border-white/10 rounded-lg">
<iconify-icon className="text-zinc-500" icon="solar:chat-line-linear"></iconify-icon>
</div>
<div className="absolute bottom-[30%] right-[20%] p-3 bg-zinc-900 border border-white/10 rounded-lg">
<iconify-icon className="text-zinc-500" icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
<div className="reveal delay-400">
<h4 className="text-white font-medium mb-2">Unify</h4>
<p className="text-sm text-zinc-500">Connects via API to Salesforce, Hubspot, Stripe, and GA4 instantly.</p>
</div>
<div className="reveal delay-500">
<h4 className="text-white font-medium mb-2">Analyze</h4>
<p className="text-sm text-zinc-500">Detects anomalies and opportunities without human oversight.</p>
</div>
<div className="reveal delay-600">
<h4 className="text-white font-medium mb-2">Execute</h4>
<p className="text-sm text-zinc-500">Triggers agentic workflows to resolve issues or capture leads.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-16 leading-tight">
                Listen. Simplify. <span className="text-gold-500">Build.</span>
</h2>
<div className="reveal delay-100 space-y-12 text-left">
<div className="flex gap-6 md:gap-12">
<span className="text-zinc-600 font-mono text-sm pt-1">01</span>
<div>
<h3 className="text-xl text-white font-medium mb-2">Cut through the noise</h3>
<p className="text-zinc-400 leading-relaxed">The AI market is noisy. We act as a filter, discarding hype and implementing only what drives measurable business value.</p>
</div>
</div>
<div className="flex gap-6 md:gap-12">
<span className="text-zinc-600 font-mono text-sm pt-1">02</span>
<div>
<h3 className="text-xl text-white font-medium mb-2">Systems over Tasks</h3>
<p className="text-zinc-400 leading-relaxed">We don't automate tasks; we redesign systems. A bad process automated is still a bad process.</p>
</div>
</div>
<div className="flex gap-6 md:gap-12">
<span className="text-zinc-600 font-mono text-sm pt-1">03</span>
<div>
<h3 className="text-xl text-white font-medium mb-2">Partners, not Vendors</h3>
<p className="text-zinc-400 leading-relaxed">We embed deeply. We define success metrics together. When you scale, we scale.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="reveal text-3xl font-semibold text-white tracking-tight">Intelligence</h2>
<a className="reveal delay-100 text-sm text-zinc-400 hover:text-white transition-colors" href="#">View all -&gt;</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4">

<div className="reveal col-span-1 md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors aspect-[4/3] md:aspect-auto cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="flex gap-3 mb-4">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20">Analysis</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-500 py-1">5 min read</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">The Agency Model is Dead. Long Live Productized Service.</h3>
<p className="text-zinc-400 text-sm line-clamp-2">Why hourly billing incentives are misaligned with AI efficiency.</p>
</div>
</div>

<div className="reveal delay-100 col-span-1 md:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-600">Oct 24</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Building an AI Knowledge Base</h3>
<p className="text-zinc-500 text-sm">A tactical guide to vector databases.</p>
</div>

<div className="reveal delay-200 col-span-1 bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-white mb-2">RAG Architectures</h3>
<p className="text-zinc-500 text-xs">Technical Deep Dive</p>
</div>

<div className="reveal delay-300 col-span-1 bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-white mb-2">Prompt Engineering</h3>
<p className="text-zinc-500 text-xs">For Executives</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="reveal text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Clarity in 30 minutes.</h2>
<p className="text-zinc-400 text-sm max-w-md">No sales pitch. We'll map what's stuck in your process and what to do next.</p>
</div>
<div className="reveal delay-100">
<button @click="openModal('callback')" className="bg-white text-zinc-950 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 text-sm md:text-base whitespace-nowrap">
                    Request Strategy Call
                </button>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<span className="text-white font-semibold tracking-tighter text-lg block mb-6">WISARC</span>
<p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">Building the infrastructure for the next generation of digital businesses.</p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Method</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Transformation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Systems</a></li>
<li><a className="hover:text-white transition-colors" href="#">Elenar Product</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2024 Wisarc Inc.</p>
<div className="flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-zinc-500 text-xs font-mono">ALL SYSTEMS OPERATIONAL</span>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" style={{display: 'none'}} x-show="modalOpen">

<div @click="closeModal()" className="absolute inset-0 bg-black/60 backdrop-blur-sm" x-show="modalOpen" x-transition.opacity=""></div>

<div @keydown.escape.window="closeModal()" className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg p-8 shadow-2xl overflow-hidden" x-show="modalOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:enter-start="opacity-0 scale-95 translate-y-4" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 scale-95 translate-y-4" x-transition:leave-start="opacity-100 scale-100 translate-y-0">
<button @click="closeModal()" className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div x-show="modalType === 'callback'">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-white mb-1">Start a Conversation</h3>
<p className="text-zinc-400 text-sm">Tell us about your challenge. We'll respond in 24h.</p>
</div>
<form @submit.prevent="submitForm" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Name</label>
<input className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-2.5 text-white text-sm focus:border-gold-500/50 focus:ring-0 transition-colors placeholder:text-zinc-600" id="modal-first-focus" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Company</label>
<input className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-2.5 text-white text-sm focus:border-gold-500/50 focus:ring-0 transition-colors placeholder:text-zinc-600" placeholder="Acme Inc" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Work Email</label>
<input className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-2.5 text-white text-sm focus:border-gold-500/50 focus:ring-0 transition-colors placeholder:text-zinc-600" placeholder="jane@acme.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Primary Challenge</label>
<select className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-2.5 text-white text-sm focus:border-gold-500/50 focus:ring-0 transition-colors">
<option>Operational Inefficiency</option>
<option>Data Silos / Reporting</option>
<option>Lead Generation</option>
<option>Custom AI Implementation</option>
</select>
</div>
<div className="pt-2">
<button className="w-full bg-white text-zinc-950 font-semibold py-3 rounded-lg hover:bg-zinc-200 transition-colors text-sm" type="submit">Request Callback</button>
</div>
<p className="text-center text-[10px] text-zinc-600 mt-4">Protected by reCAPTCHA and subject to Privacy Policy.</p>
</form>
</div>
</div>
</div>

    </>
  );
}
