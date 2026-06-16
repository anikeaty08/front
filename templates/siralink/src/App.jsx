import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Hero headline animation
        const headline = document.getElementById('hero-headline');
        const words = headline.innerText.split(' ');
        headline.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'hero-headline') {
                        entry.target.querySelectorAll('.word').forEach((word, i) => {
                            setTimeout(() => word.classList.add('active'), i * 80);
                        });
                    } else if (entry.target.classList.contains('counter')) {
                        animateCounter(entry.target);
                    } else if (entry.target.classList.contains('tilt-card')) {
                        entry.target.classList.add('active');
                    } else if (entry.target.id === 'dashboard') {
                        animateDashboard();
                    } else {
                        entry.target.classList.add('active');
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal, .counter, .tilt-card, #hero-headline, #dashboard, .gold-underline, #footer').forEach(el => revealObserver.observe(el));

        function animateCounter(el) {
            if (el.dataset.animated) return;
            el.dataset.animated = "true";
            const target = parseInt(el.dataset.target);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const hasSpring = el.dataset.spring === "true";
            
            let current = 0;
            const duration = 2000;
            const start = performance.now();

            function update(timestamp) {
                const progress = Math.min((timestamp - start) / duration, 1);
                current = Math.floor(progress * target);
                
                if (progress === 1 && hasSpring) {
                    el.innerText = prefix + Math.floor(target * 1.05) + suffix;
                    setTimeout(() => {
                        el.innerText = prefix + target.toLocaleString() + suffix;
                    }, 150);
                } else {
                    el.innerText = prefix + current.toLocaleString() + suffix;
                    requestAnimationFrame(update);
                }
            }
            requestAnimationFrame(update);
        }

        function animateDashboard() {
            const cards = document.querySelectorAll('.pipeline-card');
            const revenueCard = document.getElementById('revenue-card');
            
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                    const bar = card.querySelector('.progress-bar');
                    bar.style.width = bar.dataset.initial + "%";
                    
                    setTimeout(() => {
                        card.querySelector('.badge-flip').classList.add('flipped');
                        bar.style.backgroundColor = 'var(--brand-gold)';
                        bar.style.width = bar.dataset.target + "%";
                    }, 2500);
                }, i * 200);
            });

            setTimeout(() => {
                revenueCard.style.opacity = "1";
                revenueCard.style.transform = "scale(1)";
                animateCounter(document.getElementById('auditCounter'));
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-5 px-6" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="flex items-center gap-3">
<svg className="w-8 h-8 text-brand-dark shrink-0" fill="currentColor" viewbox="0 0 100 100">
<path d="M 25 10 L 50 35 L 75 10 L 90 25 L 65 50 L 90 75 L 75 90 L 50 65 L 25 90 L 10 75 L 35 50 L 10 25 Z"></path>
</svg>
<div className="w-[2px] h-8 bg-brand-dark"></div>
<span className="text-2xl font-semibold tracking-tight text-brand-dark">SiraLink.Ai</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base hover:text-brand-gold transition-colors" href="#how-it-works">How It Works</a>
<a className="text-base hover:text-brand-gold transition-colors" href="#audit">What We Audit</a>
<a className="text-base hover:text-brand-gold transition-colors" href="#results">Results</a>
<a className="text-base hover:text-brand-gold transition-colors" href="#case-studies">Case Studies</a>
</div>
<a className="bg-brand-gold text-brand-dark px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider shimmer-btn" href="https://calendly.com/dinalperera2004/30min" rel="noopener noreferrer" target="_blank">Book Free Audit</a>
</div>
</nav>

<section className="relative pt-40 pb-24 px-6 overflow-hidden">
<div className="absolute inset-0 dot-grid opacity-[0.03]"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/5 text-xs font-semibold tracking-widest text-brand-dark mb-6 gold-underline-label">
<i className="w-4 h-4 text-brand-gold" data-lucide="zap" strokeWidth="1.5"></i>
                    AI-POWERED SALES PIPELINE INTELLIGENCE
                </span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-brand-dark" id="hero-headline">
                    Your Sales Pipeline Is Leaking Revenue. We'll Find Exactly Where.
                </h1>
<p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                    We audit your entire B2B sales process in 14 days — identifying every bottleneck costing you $25K–$100K/month in lost deals, then implement the AI automations to fix them.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-brand-gold text-brand-dark px-8 py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-brand-gold/20 shimmer-btn" href="https://calendly.com/dinalperera2004/30min" rel="noopener noreferrer" target="_blank">
                        Book Your Free Audit <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="relative h-[400px] lg:h-[500px]">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-full max-w-md h-full" viewbox="0 0 400 300">
<path d="M50,150 L120,150 M170,150 L240,150 M290,150 L350,150" stroke="#003D33" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle className="node-pulse" cx="50" cy="150" fill="#003D33" r="10"></circle>
<circle className="node-pulse" cx="145" cy="150" fill="#003D33" r="25"></circle>
<circle className="node-pulse" cx="265" cy="150" fill="#003D33" r="25"></circle>
<circle className="node-pulse" cx="360" cy="150" fill="#C8A96E" r="10"></circle>
<circle fill="#C8A96E" r="3"><animatemotion dur="3s" path="M50,150 L360,150" repeatcount="indefinite"></animatemotion></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-dark mb-12">Most B2B Sales Teams Are Losing Deals They Should Be Winning.</h2>
<div className="grid gap-6">
<div className="reveal bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.6s'}}>
<div className="text-4xl font-semibold text-brand-dark font-manrope w-24 counter tracking-tight" data-spring="true" data-suffix="%" data-target="78">0%</div>
<p className="text-base text-gray-600">of leads go to the first vendor to respond. Most B2B companies take 24+ hours.</p>
</div>
<div className="reveal bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.6s', transitionDelay: '150ms'}}>
<div className="text-4xl font-semibold text-brand-gold font-manrope w-24 counter tracking-tight" data-spring="true" data-suffix="%" data-target="50">0%</div>
<p className="text-base text-gray-600">average no-show rate on booked sales calls — the single biggest revenue leak.</p>
</div>
<div className="reveal bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.6s', transitionDelay: '300ms'}}>
<div className="text-4xl font-semibold text-brand-dark font-manrope w-24 counter tracking-tight" data-spring="true" data-suffix="%" data-target="60">0%</div>
<p className="text-base text-gray-600">of CRM data is incomplete, meaning management is flying blind on every deal.</p>
</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
<img alt="Frustrated Manager" className="w-full h-full object-cover grayscale-[0.5]" src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-dark relative" id="how-it-works">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase gold-underline">THE PROCESS</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mt-4">From Intro Call to Revenue Results — In 14 Days</h2>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="tilt-card bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all">
<div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Step 1 — Intro Call</h3>
<p className="text-white/60 text-base leading-relaxed">60 minutes. We map your sales process end-to-end, understand your team structure, and current tools.</p>
</div>
<div className="tilt-card bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all" style={{transitionDelay: '250ms'}}>
<div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Step 2 — CRM Analysis</h3>
<p className="text-white/60 text-base leading-relaxed">We interview your sales reps, dig into your CRM pipeline data, and attach dollar values to every bottleneck.</p>
</div>
<div className="tilt-card bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all" style={{transitionDelay: '500ms'}}>
<div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-dark mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Step 3 — Revenue Audit</h3>
<p className="text-white/60 text-base leading-relaxed">A full presentation showing what you're losing, why, and a prioritised roadmap of AI automations to fix it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="audit">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase gold-underline">CORE AUDIT FRAMEWORK</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-dark mt-4">Three Systems. Every Leak Found.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="reveal p-8 rounded-3xl border border-gray-100 bg-gray-50 flex flex-col h-full hover:shadow-lg transition-all" style={{opacity: '0', transform: 'translateY(20px)'}}>
<div className="text-brand-gold mb-6">
<i className="w-8 h-8" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Lead Generation</h3>
<p className="text-gray-600 text-base leading-relaxed">Speed-to-lead response time, cold outreach quality, lead scoring, and qualification automation.</p>
</div>
<div className="reveal p-8 rounded-3xl border border-gray-100 bg-gray-50 flex flex-col h-full hover:shadow-lg transition-all" style={{opacity: '0', transform: 'translateY(20px)', transitionDelay: '150ms'}}>
<div className="text-brand-gold mb-6">
<i className="w-8 h-8" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Sales Process</h3>
<p className="text-gray-600 text-base leading-relaxed">CRM data completeness, proposal generation time, and pipeline visibility.</p>
</div>
<div className="reveal p-8 rounded-3xl border border-gray-100 bg-gray-50 flex flex-col h-full hover:shadow-lg transition-all" style={{opacity: '0', transform: 'translateY(20px)', transitionDelay: '300ms'}}>
<div className="text-brand-gold mb-6">
<i className="w-8 h-8" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Conversion Optimisation</h3>
<p className="text-gray-600 text-base leading-relaxed">No-show rates, post-proposal nurture, and lead response sequencing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
<div className="grid md:grid-cols-3 gap-6" id="dashboard">

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl pipeline-card opacity-0 translate-y-[30px] transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-white/40 uppercase font-semibold tracking-widest">PIPELINE STAGE</span>
<div className="badge-flip h-6 w-24">
<div className="badge-flip-inner w-full h-full">
<div className="badge-front absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-red-500/20 text-red-400 flex items-center justify-center">72hr Delay</div>
<div className="badge-back absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-brand-gold text-brand-dark flex items-center justify-center">Fixed ✓</div>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl mb-6 tracking-tight">Lead Capture</h4>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="progress-bar bg-red-500 h-full transition-all duration-[1s]" data-initial="30" data-target="100" style={{width: '0%'}}></div>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl pipeline-card opacity-0 translate-y-[30px] transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-white/40 uppercase font-semibold tracking-widest">SALES CALLS</span>
<div className="badge-flip h-6 w-28">
<div className="badge-flip-inner w-full h-full">
<div className="badge-front absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-red-500/20 text-red-400 flex items-center justify-center">42% No-Show</div>
<div className="badge-back absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-brand-gold text-brand-dark flex items-center justify-center">Fixed ✓</div>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl mb-6 tracking-tight">Booking Rate</h4>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="progress-bar bg-red-500 h-full transition-all duration-[1s]" data-initial="45" data-target="100" style={{width: '0%'}}></div>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl pipeline-card opacity-0 translate-y-[30px] transition-all duration-500" style={{transitionDelay: '400ms'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-white/40 uppercase font-semibold tracking-widest">PROPOSAL</span>
<div className="badge-flip h-6 w-24">
<div className="badge-flip-inner w-full h-full">
<div className="badge-front absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-red-500/20 text-red-400 flex items-center justify-center">0 Touches</div>
<div className="badge-back absolute inset-0 px-2 py-1 rounded text-xs font-semibold bg-brand-gold text-brand-dark flex items-center justify-center">Fixed ✓</div>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl mb-6 tracking-tight">Follow-up</h4>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="progress-bar bg-red-500 h-full transition-all duration-[1s]" data-initial="20" data-target="100" style={{width: '0%'}}></div>
</div>
</div>
</div>
<div className="mt-12 flex flex-col items-center opacity-0 scale-[0.8] transition-all duration-500" id="revenue-card">
<div className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">RECOVERED REVENUE</div>
<div className="text-5xl md:text-7xl font-semibold text-brand-gold font-manrope counter tracking-tight" data-prefix="$" data-target="63000" id="auditCounter">0</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-dark text-center overflow-hidden" id="results">
<div className="max-w-7xl mx-auto">
<span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase gold-underline">TOTAL IMPACT</span>
<div className="mt-8 mb-16">
<div className="text-6xl md:text-9xl font-semibold tracking-tight text-white font-manrope counter" data-prefix="$" data-suffix="/mo" data-target="65000">0</div>
<p className="text-white/60 text-xl mt-4 max-w-lg mx-auto">Average revenue discovered per client audit.</p>
</div>
<div className="w-full h-px bg-brand-gold/20 mb-16"></div>
<div className="grid md:grid-cols-3 gap-12">
<div>
<div className="text-4xl font-semibold tracking-tight text-white font-manrope mb-2 counter" data-suffix="%" data-target="35">+0%</div>
<div className="text-sm font-semibold text-brand-gold tracking-widest uppercase">CLOSE RATE INCREASE</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white font-manrope mb-2 counter" data-suffix="%" data-target="50">–0%</div>
<div className="text-sm font-semibold text-brand-gold tracking-widest uppercase">NO-SHOW REDUCTION</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white font-manrope mb-2">2×</div>
<div className="text-sm font-semibold text-brand-gold tracking-widest uppercase">FASTER SALES CYCLE</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="case-studies">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase gold-underline">REAL RESULTS</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-dark mt-4">Revenue Found. Deals Recovered.</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div className="reveal p-10 rounded-[2rem] border border-gray-100 bg-gray-50 flex flex-col justify-between transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(200,169,110,0.15)] group">
<div>
<div className="flex items-center gap-4 mb-8">
<div className="relative">
<img alt="VP" className="w-14 h-14 rounded-full object-cover transition-transform group-hover:scale-105 border-2 border-transparent group-hover:border-brand-gold" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<h4 className="text-base font-semibold text-brand-dark">VP Sales</h4>
<p className="text-sm text-gray-500">B2B SaaS Company</p>
</div>
</div>
<p className="text-gray-600 mb-8 text-lg leading-relaxed italic">"Found $78,000/month across 4 bottlenecks. Close rate increased from 18% to 42% in 60 days."</p>
</div>
<blockquote className="text-2xl font-medium tracking-tight text-brand-dark">"We had no idea how much revenue we were leaving on the table."</blockquote>
</div>
<div className="reveal p-10 rounded-[2rem] border border-gray-100 bg-gray-50 flex flex-col justify-between transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(200,169,110,0.15)] group" style={{transitionDelay: '200ms'}}>
<div>
<div className="flex items-center gap-4 mb-8">
<div className="relative">
<img alt="CEO" className="w-14 h-14 rounded-full object-cover transition-transform group-hover:scale-105 border-2 border-transparent group-hover:border-brand-gold" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<h4 className="text-base font-semibold text-brand-dark">CEO</h4>
<p className="text-sm text-gray-500">B2B Services Firm</p>
</div>
</div>
<p className="text-gray-600 mb-8 text-lg leading-relaxed italic">"Identified $47,000/month in lost revenue. Reps were spending 3 hours per proposal."</p>
</div>
<blockquote className="text-2xl font-medium tracking-tight text-brand-dark">"The audit paid for itself before we even started implementation."</blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-dark mb-4 gold-underline">Real People. Real Process. Real Results.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
<h4 className="text-xl font-semibold tracking-tight text-brand-dark mb-1">Dinal Perera</h4>
<p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">Lead Pipeline Analyst</p>
<p className="text-base text-gray-500 leading-relaxed">8 years in B2B sales operations. Has audited 40+ pipelines across SaaS and services.</p>
</div>
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
<h4 className="text-xl font-semibold tracking-tight text-brand-dark mb-1">Denu Aluwihare</h4>
<p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">AI Automation Specialist</p>
<p className="text-base text-gray-500 leading-relaxed">Expert in building AI-powered sales automations that reduce admin and increase close rates.</p>
</div>
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
<h4 className="text-xl font-semibold tracking-tight text-brand-dark mb-1">Lachlan Murrell</h4>
<p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">Revenue Strategist</p>
<p className="text-base text-gray-500 leading-relaxed">Specialises in identifying high-ticket revenue leaks and building the roadmap to fix them fast.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-dark relative overflow-hidden" id="book">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">Find Out How Much Revenue You're Leaving on the Table.</h2>
<a className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-10 py-5 rounded-full text-lg font-semibold shimmer-btn shadow-2xl shadow-brand-gold/30" href="https://calendly.com/dinalperera2004/30min" rel="noopener noreferrer" target="_blank">
                Book Your Free Audit <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<p className="text-white/40 text-sm font-semibold tracking-widest uppercase mt-8">Revenue results in 14 days.</p>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-gray-100 opacity-0 transition-all duration-700" id="footer">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div>

<div className="flex items-center gap-3 mb-4">
<svg className="w-6 h-6 text-brand-dark shrink-0" fill="currentColor" viewbox="0 0 100 100">
<path d="M 25 10 L 50 35 L 75 10 L 90 25 L 65 50 L 90 75 L 75 90 L 50 65 L 25 90 L 10 75 L 35 50 L 10 25 Z"></path>
</svg>
<div className="w-[2px] h-6 bg-brand-dark"></div>
<span className="text-xl font-semibold tracking-tight text-brand-dark">SiraLink.Ai</span>
</div>
<p className="text-gray-400 text-sm uppercase font-semibold tracking-[0.2em]">© 2025 SiraLink.Ai</p>
</div>
</div>
</footer>


    </>
  );
}
