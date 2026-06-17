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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Scroll Reveal Animation ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
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
      

<div className="fixed inset-0 z-0 pointer-events-none cyber-grid"></div>
<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#b026ff] opacity-[0.03] blur-[100px] pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00f0ff] opacity-[0.04] blur-[120px] pointer-events-none"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

<nav className="py-8 flex justify-between items-center reveal">
<div className="tracking-tighter font-semibold text-xl uppercase border border-white/10 px-4 py-1.5 bg-[#0a0a0c] rounded-sm text-glow-cyan">P R O X Y</div>
<a className="text-xs font-medium tracking-widest text-zinc-400 hover:text-[#00f0ff] transition-colors uppercase" href="#contact">Get Started</a>
</nav>

<section className="pt-24 pb-32 flex flex-col items-center text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#ff003c]/30 bg-[#ff003c]/5 text-[#ff003c] text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(255,0,60,0.15)]">
                WordPress Web Design Agency
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 max-w-4xl leading-[1.1]">
                A website that converts visitors.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#b026ff] to-[#ff003c]">Built in 4–6 weeks. Flat price.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-12 font-normal leading-relaxed">
                No templates, no surprise invoices, no chasing your designer for updates. Track every step of your build in a private dashboard — like a shipping tracker for your website.
            </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16">
<a className="btn-glitch flex items-center justify-center px-8 py-4 bg-[#00f0ff] text-black font-semibold tracking-wide rounded-sm hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 uppercase text-xs" href="#contact">
                    Book a free strategy call
                </a>
<a className="flex items-center justify-center px-8 py-4 bg-[#0a0a0c] border border-zinc-800 text-white font-semibold tracking-wide rounded-sm hover:border-[#ff003c] hover:text-[#ff003c] transition-all duration-300 uppercase text-xs" href="#work">
                    See our work
                </a>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-500 text-xs font-medium tracking-widest uppercase">
<span className="flex items-center gap-2"><iconify-icon className="text-[#00f0ff] text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Unlimited revisions</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#00f0ff] text-sm" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> Free brand identity</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#00f0ff] text-sm" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon> 100/100 PageSpeed</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#00f0ff] text-sm" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon> Flat fee: $12,000</span>
</div>
</section>

<section className="py-12 border-y border-white/5 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="flex flex-col items-center text-center px-4">
<span className="text-5xl font-semibold tracking-tight text-[#00f0ff] mb-2 text-glow-cyan">100</span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">PageSpeed score — mobile &amp; desktop</span>
</div>
<div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
<span className="text-5xl font-semibold tracking-tight text-white mb-2">4–6 <span className="text-3xl">wks</span></span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Average delivery from kickoff</span>
</div>
<div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
<span className="text-5xl font-semibold tracking-tight text-[#ff003c] mb-2 text-glow-magenta">$0</span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Surprise fees — ever.</span>
</div>
</div>
</section>

<section className="py-32">
<div className="mb-16 reveal">
<span className="text-[#b026ff] text-xs font-medium tracking-widest uppercase block mb-4">What you get</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-2xl mb-4">Everything a growing business needs to look and convert like a market leader</h2>
<p className="text-base text-zinc-400 max-w-xl">One flat fee covers everything below. No hourly billing. No add-on charges.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-1 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#00f0ff]/10 flex items-center justify-center mb-6 border border-[#00f0ff]/20 text-[#00f0ff]">
<iconify-icon className="text-xl" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Fully custom design</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Every pixel built for your brand. No Themeforest templates, no shortcuts.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-2 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#ff003c]/10 flex items-center justify-center mb-6 border border-[#ff003c]/20 text-[#ff003c]">
<iconify-icon className="text-xl" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Free brand identity</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Logo, color palette, typography, image style, brand voice — all included.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-3 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#b026ff]/10 flex items-center justify-center mb-6 border border-[#b026ff]/20 text-[#b026ff]">
<iconify-icon className="text-xl" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Private project dashboard</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Track progress and message your designer directly. No more chasing email.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#00f0ff]/10 flex items-center justify-center mb-6 border border-[#00f0ff]/20 text-[#00f0ff]">
<iconify-icon className="text-xl" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Unlimited revisions</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">We iterate until you love it. No revision caps, no hourly billing for changes.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-1 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#ff003c]/10 flex items-center justify-center mb-6 border border-[#ff003c]/20 text-[#ff003c]">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">CRO-optimized</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Pages built to turn visitors into buyers, not just to look good in a portfolio.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-2 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#b026ff]/10 flex items-center justify-center mb-6 border border-[#b026ff]/20 text-[#b026ff]">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">SEO copywriting</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Every page written and structured to rank. 50% off your first month of ongoing SEO.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal reveal-delay-3 flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#00f0ff]/10 flex items-center justify-center mb-6 border border-[#00f0ff]/20 text-[#00f0ff]">
<iconify-icon className="text-xl" icon="solar:server-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Truly managed hosting</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">We handle all plugin and core updates. Plans include 5 hrs/month of design time.</p>
</div>

<div className="cyber-card p-8 rounded-sm reveal flex flex-col h-full">
<div className="w-10 h-10 rounded-sm bg-[#ff003c]/10 flex items-center justify-center mb-6 border border-[#ff003c]/20 text-[#ff003c]">
<iconify-icon className="text-xl" icon="solar:mouse-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-3">Easy to edit</h3>
<p className="text-sm text-zinc-400 leading-relaxed mt-auto">Built on Elementor — update text, images, and layouts yourself. No IT required.</p>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal">
<span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase block mb-4">How it works</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">From brief to launch in four steps</h2>
<p className="text-base text-zinc-400">Most clients see a first design concept within the first week.</p>
</div>
<div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00f0ff] before:via-[#ff003c] before:to-transparent">

<div className="relative flex items-start gap-6 reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#050505] border border-[#00f0ff] text-[#00f0ff] text-xs font-semibold shrink-0 z-10 shadow-[0_0_15px_rgba(0,240,255,0.3)]">01</div>
<div className="cyber-card p-6 md:p-8 rounded-sm w-full">
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Free strategy call</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We learn your business, goals, and who you're trying to reach. No sales pressure — just a real conversation about what you need.</p>
</div>
</div>

<div className="relative flex items-start gap-6 reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#050505] border border-[#b026ff] text-[#b026ff] text-xs font-semibold shrink-0 z-10 shadow-[0_0_15px_rgba(176,38,255,0.3)]">02</div>
<div className="cyber-card p-6 md:p-8 rounded-sm w-full">
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Brand and design kickoff</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We develop your brand identity first (if needed), then move into custom page designs. You review everything in your private dashboard.</p>
</div>
</div>

<div className="relative flex items-start gap-6 reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#050505] border border-[#ff003c] text-[#ff003c] text-xs font-semibold shrink-0 z-10 shadow-[0_0_15px_rgba(255,0,60,0.3)]">03</div>
<div className="cyber-card p-6 md:p-8 rounded-sm w-full">
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Build and revise</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We build on WordPress and Elementor, then refine based on your feedback. Unlimited rounds — we don't stop until it's right.</p>
</div>
</div>

<div className="relative flex items-start gap-6 reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#050505] border border-zinc-700 text-zinc-400 text-xs font-semibold shrink-0 z-10 bg-[#0a0a0c]">04</div>
<div className="cyber-card p-6 md:p-8 rounded-sm w-full">
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Launch and hand-off</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We handle the technical launch, set up SEO, and make sure you can manage the site yourself — or stay on with a hosting plan.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="text-center mb-16 reveal">
<span className="text-[#fcee0a] text-xs font-medium tracking-widest uppercase block mb-4">What clients say</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Real results, not retouched portfolios</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="cyber-card cyber-card-magenta p-10 rounded-sm relative overflow-hidden reveal reveal-delay-1">
<iconify-icon className="absolute -top-4 -left-2 text-[120px] text-white/5" icon="solar:quote-right-bold"></iconify-icon>
<div className="relative z-10 flex flex-col h-full">
<p className="text-base text-zinc-300 leading-relaxed font-medium mb-8">"We came to Proxy with nothing — no logo, no brand, no website. Six weeks later we had all three, and our conversion rate is higher than we thought possible for a new brand."</p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10"></div>
<div className="text-xs">
<p className="text-white font-semibold tracking-wide">Founder</p>
<p className="text-zinc-500 uppercase tracking-widest mt-0.5">Early-stage SaaS company</p>
</div>
</div>
</div>
</div>
<div className="cyber-card p-10 rounded-sm relative overflow-hidden reveal reveal-delay-2">
<iconify-icon className="absolute -top-4 -left-2 text-[120px] text-white/5" icon="solar:quote-right-bold"></iconify-icon>
<div className="relative z-10 flex flex-col h-full">
<p className="text-base text-zinc-300 leading-relaxed font-medium mb-8">"I've worked with three agencies before. The dashboard alone was worth it — I always knew exactly where we were and could message the designer directly. No more 3-day email threads."</p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10"></div>
<div className="text-xs">
<p className="text-white font-semibold tracking-wide">Marketing Director</p>
<p className="text-zinc-500 uppercase tracking-widest mt-0.5">Professional services firm</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 flex justify-center reveal">
<div className="w-full max-w-4xl cyber-card p-1 md:p-1 rounded-sm relative">

<div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff] via-[#050505] to-[#ff003c] rounded-sm opacity-20 pointer-events-none"></div>
<div className="bg-[#050505] p-8 md:p-16 rounded-sm relative z-10 h-full flex flex-col md:flex-row gap-12 border border-white/5">
<div className="flex-1">
<span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase block mb-4">Pricing</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">One price. Everyone pays the same.</h2>
<p className="text-sm text-zinc-400 mb-10 leading-relaxed">No tiers, no upsells, no "it depends". We charge every client $12,000 and deliver everything below.</p>
<div className="mb-2">
<span className="text-6xl font-semibold tracking-tight text-white text-glow-cyan">$12,000</span>
</div>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Flat fee — billed on agreed milestones, not upfront</p>
</div>
<div className="flex-1 bg-[#0a0a0c] p-8 rounded-sm border border-white/5">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Fully custom WordPress + Elementor website</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Complete brand identity (logo, palette, typography, voice)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Private project dashboard and direct designer access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Unlimited revisions until you're satisfied</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">SEO copywriting for all pages</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00f0ff] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">50% off first month of SEO / AI search marketing</span>
</li>
<li className="flex items-start gap-3 pt-2 border-t border-white/5">
<iconify-icon className="text-[#ff003c] text-xl shrink-0 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300 font-semibold">4–6 week delivery</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 reveal" id="contact">
<div className="max-w-2xl mx-auto text-center mb-12">
<span className="text-[#ff003c] text-xs font-medium tracking-widest uppercase block mb-4">Book a call</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Talk to a designer this week</h2>
<p className="text-base text-zinc-400">No pitch decks. Just a 30-minute conversation about your project. Free, with no obligation.</p>
</div>
<div className="max-w-xl mx-auto cyber-card p-8 md:p-10 rounded-sm">
<form className="space-y-6">
<div>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00f0ff] transition-all text-sm font-medium" placeholder="Your name" type="text"/>
</div>
<div>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00f0ff] transition-all text-sm font-medium" placeholder="Work email" type="email"/>
</div>
<div>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00f0ff] transition-all text-sm font-medium" placeholder="Company / website (if you have one)" type="text"/>
</div>
<div>
<select className="custom-select w-full bg-[#050505] border border-zinc-800 rounded-sm px-4 py-4 text-zinc-400 focus:text-white focus:outline-none focus:border-[#00f0ff] transition-all text-sm font-medium">
<option disabled="" selected="" value="">What best describes you?</option>
<option value="startup">Startup / early-stage</option>
<option value="small-biz">Small business</option>
<option value="scale-up">Scale-up</option>
<option value="enterprise">Enterprise team</option>
</select>
</div>
<button className="btn-glitch w-full py-4 mt-4 bg-[#ff003c] text-white font-semibold tracking-widest rounded-sm hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] transition-all duration-300 uppercase text-xs" type="button">
                        Book my free strategy call
                    </button>
</form>
<div className="mt-8 pt-8 border-t border-white/10 text-center">
<p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">or</p>
<a className="text-sm font-medium text-white hover:text-[#00f0ff] transition-colors underline decoration-white/20 underline-offset-4" href="mailto:hello@madebyproxy.com">Email us directly at hello@madebyproxy.com</a>
<p className="text-xs text-zinc-500 mt-6 leading-relaxed max-w-sm mx-auto">We respond to every enquiry within 1 business day. We take on a limited number of projects per month.</p>
</div>
</div>
</section>

<footer className="py-10 text-center border-t border-white/5 reveal">
<div className="tracking-tighter font-semibold text-base uppercase text-zinc-600 mb-2">P R O X Y</div>
<p className="text-xs text-zinc-700 uppercase tracking-widest">© Proxy Web Design. All rights reserved.</p>
</footer>
</div>


    </>
  );
}
