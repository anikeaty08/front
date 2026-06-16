import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // Flashlight Effect Script
        const cards = document.querySelectorAll('.flashlight-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Intersection Observer for "Animate on View"
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 flex justify-between pointer-events-none opacity-20">
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.1s'}}></div>
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.2s'}}></div>
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.3s'}}></div>
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.4s'}}></div>
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.5s'}}></div>
<div className="w-full h-full border-r border-zinc-800 bg-column" style={{animationDelay: '0.6s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white" data-lucide="bot"></i>
<span className="font-medium text-sm tracking-tight text-white font-geist-mono">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#features">Solutions</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#portfolio">Case Studies</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-400 hover:text-white transition-colors hidden sm:block font-geist-mono" href="#">Client
                    Login</a>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1 group font-geist-mono">
                    Book Demo
                    <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="calendar"></i>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="max-w-3xl">

<div className="w-12 h-12 mb-8 reveal-on-scroll">
<div className="relative w-full h-full rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
<img alt="Logo" className="opacity-80 mix-blend-screen w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/170dd467-1ba6-48cf-be9f-5f23cf85512f_320w.jpg"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] char-reveal">
<span className="tracking-tight font-geist-mono font-semibold" style={{animationDelay: '0.1s'}}>Intelligent</span>
<span className="tracking-tight font-geist-mono font-semibold" style={{animationDelay: '0.2s'}}>automation</span>
<span className="tracking-tight font-geist-mono font-semibold" style={{animationDelay: '0.3s'}}>for</span>
<br className="hidden md:block"/>
<span className="text-zinc-500 tracking-tight font-geist-mono font-semibold" style={{animationDelay: '0.4s'}}>enterprise</span>
<span className="text-zinc-500 tracking-tight font-geist-mono font-semibold" style={{animationDelay: '0.5s'}}>growth.</span>
</h1>
<p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed reveal-on-scroll font-geist-mono">
                    We build and deploy custom AI agents that integrate seamlessly into your business operations. Reduce
                    overhead, eliminate errors, and scale your workforce instantly.
                </p>

<div className="reveal-on-scroll flex gap-4">
<button className="border-beam-btn relative group bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium border border-zinc-800">
<span className="relative z-10 flex items-center gap-2 font-geist-mono">
                            Talk to an Expert
                            <i className="w-4 h-4 text-zinc-500 group-hover:text-yellow-200 transition-colors" data-lucide="arrow-right"></i>
</span>
</button>
<button className="text-zinc-400 hover:text-white px-6 py-3 text-sm font-medium font-geist-mono transition-colors">
                        View Case Studies
                    </button>
</div>
</div>
</section>

<section className="mb-32 border-y border-white/5 bg-black/50 backdrop-blur-sm py-10 overflow-hidden reveal-on-scroll">
<p className="text-center text-xs text-zinc-500 mb-6 uppercase tracking-wider font-medium font-geist-mono">
                Trusted by industry leaders at</p>
<div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">

<div className="flex w-max">

<div className="marquee-track">
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="hexagon"></i> GlobalFin</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="triangle"></i> Apex Health</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="box"></i> Logistics.io</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="circle"></i> OmniRetail</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="cpu"></i> TechCorp</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="command"></i> CmdLegal</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="layers"></i> BuildStack</span>
</div>

<div aria-hidden="true" className="marquee-track">
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="hexagon"></i> GlobalFin</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="triangle"></i> Apex Health</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="box"></i> Logistics.io</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="circle"></i> OmniRetail</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="cpu"></i> TechCorp</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="command"></i> CmdLegal</span>
<span className="text-lg font-bold text-zinc-600 flex gap-2 items-center font-geist-mono"><i className="w-5 h-5" data-lucide="layers"></i> BuildStack</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll" id="problem">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative">
<div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent">
</div>
<h2 className="text-3xl font-medium text-white mb-6 font-geist-mono">The Operational Bottleneck</h2>
<p className="text-zinc-400 mb-8 leading-relaxed font-geist-mono">
                        Scaling your business shouldn't mean linear growth in headcount. Manual processes create
                        communication overhead, increase error rates, and slow down your execution speed.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-500 font-geist-mono">
<i className="w-5 h-5 text-red-900/50 shrink-0" data-lucide="x-circle"></i>
<span>Slow customer response times impacting retention</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-geist-mono">
<i className="w-5 h-5 text-red-900/50 shrink-0" data-lucide="x-circle"></i>
<span>Expensive operational costs for repetitive tasks</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-geist-mono">
<i className="w-5 h-5 text-red-900/50 shrink-0" data-lucide="x-circle"></i>
<span>Human error in critical data entry &amp; compliance</span>
</li>
</ul>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="relative bg-zinc-900/80 border border-white/10 rounded-xl p-8 backdrop-blur-sm grid-bg">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-emerald-500">SYSTEM OPTIMAL</span>
</div>
<span className="text-xs text-zinc-500 font-mono">Real-time Metrics</span>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500 font-geist-mono">Order Processing</span>
<span className="text-xs text-emerald-400 font-geist-mono">+142% Speed</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[85%] rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500 font-geist-mono">Cost Per Unit</span>
<span className="text-xs text-blue-400 font-geist-mono">-68% Reduction</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[32%] rounded-full"></div>
</div>
<div className="mt-8 p-4 bg-black/50 rounded border border-white/5 flex justify-between items-center">
<div className="text-center">
<div className="text-xl font-bold text-white">24/7</div>
<div className="text-[10px] text-zinc-500 uppercase">Availability</div>
</div>
<div className="w-[1px] h-8 bg-white/10"></div>
<div className="text-center">
<div className="text-xl font-bold text-white">ROI</div>
<div className="text-[10px] text-zinc-500 uppercase">Positive &lt; 3 Mo</div>
</div>
<div className="w-[1px] h-8 bg-white/10"></div>
<div className="text-center">
<div className="text-xl font-bold text-white">0%</div>
<div className="text-[10px] text-zinc-500 uppercase">Downtime</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-24" id="features">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div className="max-w-lg">
<h2 className="text-3xl font-medium text-white mb-4 font-geist-mono">Tailored for Business Impact</h2>
<p className="text-zinc-400 font-geist-mono">Enterprise-grade solutions that integrate with your
                        existing CRM, ERP, and data pipelines.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-emerald-400 transition-colors font-geist-mono mt-4 md:mt-0" href="#contact">
                    Consult with us <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flashlight-card group rounded-xl border border-white/10 bg-zinc-900/40 p-8 h-[360px] flex flex-col justify-between reveal-on-scroll">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5">
<i className="w-5 h-5 text-white" data-lucide="network"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist-mono">Seamless Integration</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist-mono">We connect directly to
                            Salesforce, HubSpot, SAP, and internal databases without disrupting your current workflow.
                        </p>
</div>
<div className="flex items-center gap-4 opacity-50 mt-8">
<div className="h-8 w-20 bg-zinc-800 rounded animate-pulse"></div>
<div className="h-8 w-20 bg-zinc-800 rounded"></div>
<div className="h-8 w-20 bg-zinc-800 rounded"></div>
</div>
</div>

<div className="flashlight-card group rounded-xl border border-white/10 bg-zinc-900/40 p-8 h-[360px] flex flex-col justify-between reveal-on-scroll">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-white/5">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist-mono">Real-time Intelligence</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist-mono">Turn raw data into actionable
                            business decisions. Our agents monitor KPIs 24/7 and alert you only when necessary.</p>
</div>
<div className="mt-8">
<div className="flex items-end justify-between gap-1 h-16">
<div className="w-1/5 bg-emerald-500/20 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-emerald-500/30 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-emerald-500/40 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-emerald-500/60 h-[80%] rounded-sm"></div>
<div className="w-1/5 bg-emerald-500 h-[90%] rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll" id="portfolio">
<div className="mb-12">
<span className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2 block">Proven Results</span>
<h2 className="text-3xl font-medium text-white font-geist-mono">Transforming Industries</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 flex flex-col justify-end">
<i className="w-8 h-8 text-white mb-4" data-lucide="landmark"></i>
<span className="text-xs font-mono text-zinc-400 mb-1">Fintech</span>
<h3 className="text-xl font-medium text-white">Global Payment Processing</h3>
</div>
<div className="p-6">
<p className="text-sm text-zinc-400 mb-4 font-geist-mono leading-relaxed">
                            Automated fraud detection and reconciliation for a leading payment processor.
                        </p>
<div className="flex gap-4 border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-emerald-400">99.9%</div>
<div className="text-[10px] text-zinc-500 uppercase">Accuracy</div>
</div>
<div>
<div className="text-lg font-bold text-white">$2.4M</div>
<div className="text-[10px] text-zinc-500 uppercase">Saved/Yr</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 flex flex-col justify-end">
<i className="w-8 h-8 text-white mb-4" data-lucide="shopping-cart"></i>
<span className="text-xs font-mono text-zinc-400 mb-1">E-Commerce</span>
<h3 className="text-xl font-medium text-white">Inventory Optimization</h3>
</div>
<div className="p-6">
<p className="text-sm text-zinc-400 mb-4 font-geist-mono leading-relaxed">
                            Dynamic pricing and stock management agents for a multi-national retailer.
                        </p>
<div className="flex gap-4 border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-emerald-400">35%</div>
<div className="text-[10px] text-zinc-500 uppercase">Margin Inc.</div>
</div>
<div>
<div className="text-lg font-bold text-white">12hrs</div>
<div className="text-[10px] text-zinc-500 uppercase">Saved/Day</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 flex flex-col justify-end">
<i className="w-8 h-8 text-white mb-4" data-lucide="stethoscope"></i>
<span className="text-xs font-mono text-zinc-400 mb-1">Healthcare</span>
<h3 className="text-xl font-medium text-white">Patient Triage System</h3>
</div>
<div className="p-6">
<p className="text-sm text-zinc-400 mb-4 font-geist-mono leading-relaxed">
                            AI-driven scheduling and preliminary diagnosis support for hospital networks.
                        </p>
<div className="flex gap-4 border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-emerald-400">40%</div>
<div className="text-[10px] text-zinc-500 uppercase">Wait Reduction</div>
</div>
<div>
<div className="text-lg font-bold text-white">50k+</div>
<div className="text-[10px] text-zinc-500 uppercase">Patients</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll" id="contact">
<div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 md:p-12 overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl">
</div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 font-geist-mono">Ready to modernize
                            your operations?</h2>
<p className="text-zinc-400 mb-8 font-geist-mono">
                            Schedule a consultation with our solutions architects. We'll analyze your current workflows
                            and propose a custom AI roadmap.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
<i className="w-4 h-4 text-white" data-lucide="mail"></i>
</div>
<div>
<div className="text-sm font-medium text-white font-geist-mono">Email Us</div>
<div className="text-sm text-zinc-500 font-geist-mono">enterprise@nexus.ai</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-medium text-white font-geist-mono">Headquarters</div>
<div className="text-sm text-zinc-500 font-geist-mono">101 AI Blvd, San Francisco, CA
                                    </div>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 font-geist-mono">First Name</label>
<input className="w-full px-4 py-3 rounded-md text-sm text-white form-input" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 font-geist-mono">Last Name</label>
<input className="w-full px-4 py-3 rounded-md text-sm text-white form-input" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 font-geist-mono">Work Email</label>
<input className="w-full px-4 py-3 rounded-md text-sm text-white form-input" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 font-geist-mono">Company Name</label>
<input className="w-full px-4 py-3 rounded-md text-sm text-white form-input" placeholder="Acme Inc." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 font-geist-mono">Message</label>
<textarea className="w-full px-4 py-3 rounded-md text-sm text-white form-input" placeholder="Tell us about your automation needs..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-md hover:bg-zinc-200 transition-colors font-geist-mono" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
</section>
<footer className="max-w-6xl mx-auto px-6 mt-24 py-12 border-t border-white/5 flex justify-between items-center text-zinc-600 text-sm">
<div className="font-geist-mono">
                © 2024 Nexus Enterprise Solutions.
            </div>
<div className="flex gap-4 items-center">
<button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md hover:text-white transition-colors">
<i className="w-3 h-3 text-emerald-500" data-lucide="shield-check"></i>
<span className="font-geist-mono">SOC2 Compliant</span>
</button>
</div>
</footer>
</main>


    </>
  );
}
