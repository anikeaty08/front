import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
void: '#050505',
electric: '#7C3AED',
muted: '#A3A3A3',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
}
}
}
}



        // 1. Spotlight Mouse Tracking
        const handleMouseMove = (e) => {
            const cards = document.getElementsByClassName("spotlight-card");
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        }

        // 2. Navbar Frosted Logic
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-void/80', 'backdrop-blur-md', 'border-white/5');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-void/80', 'backdrop-blur-md', 'border-white/5');
                navbar.classList.add('border-transparent');
            }
        });

        // 3. Calculator Logic
        const hourlyInput = document.getElementById('hourly-input');
        const hourlyDisplay = document.getElementById('hourly-display');
        const totalCostDisplay = document.getElementById('total-cost');
        const fixedHours = 40;
        const weeks = 52;

        const updateCalculator = () => {
            const value = parseInt(hourlyInput.value);
            const total = value * fixedHours * weeks;
            
            hourlyDisplay.textContent = '$' + value;
            totalCostDisplay.textContent = new Intl.NumberFormat('en-US').format(total);
        }

        hourlyInput.addEventListener('input', updateCalculator);

        // 4. Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="void-grid"></div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_#7C3AED]"></div>
                AWARE
            </a>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted">
<a className="hover:text-white transition-colors" href="#trap">The Trap</a>
<a className="hover:text-white transition-colors" href="#calculator">ROI</a>
<a className="hover:text-white transition-colors" href="#framework">Framework</a>
<a className="px-4 py-2 text-white bg-white/5 border border-white/10 rounded-sm hover:bg-electric/20 hover:border-electric/50 transition-all" href="#cta">Book Discovery</a>
</nav>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="reveal">
<h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tight-custom">
                    From Operator <br/>
                    To Executive.
                </h1>
<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
                    Digital infrastructure engineered around your operation. We build the systems that allow you to stop working <span className="text-white font-medium">IN</span> your business and start working <span className="text-white font-medium">ON</span> it.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="btn-shimmer px-8 py-4 bg-electric text-white text-sm font-semibold rounded-sm tracking-wide shadow-[0_0_30px_-10px_rgba(124,58,237,0.6)] border border-electric hover:scale-105 transition-transform duration-300" href="#calculator">
                        Start The Transformation
                    </a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-muted text-sm font-medium rounded-sm hover:bg-white/5 hover:text-white hover:border-white/20 transition-all" href="#framework">
                        View The Framework
                    </a>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-black/20 py-10 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-void to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-void to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-scroll">
<div className="flex items-center gap-20 mx-10 text-muted opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="20"></span> HUBSPOT</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:cloud" data-width="20"></span> SALESFORCE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:credit-card" data-width="20"></span> STRIPE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu" data-width="20"></span> OPENAI</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:zap" data-width="20"></span> LINEAR</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:database" data-width="20"></span> AIRTABLE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:webhook" data-width="20"></span> ZAPIER</span>
</div>

<div className="flex items-center gap-20 mx-10 text-muted opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="20"></span> HUBSPOT</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:cloud" data-width="20"></span> SALESFORCE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:credit-card" data-width="20"></span> STRIPE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu" data-width="20"></span> OPENAI</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:zap" data-width="20"></span> LINEAR</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:database" data-width="20"></span> AIRTABLE</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><span className="iconify" data-icon="lucide:webhook" data-width="20"></span> ZAPIER</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative spotlight-group" id="trap" onmousemove="handleMouseMove(event)">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-semibold tracking-widest text-red-400 uppercase">The Key Man Paradox</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white tracking-tight-custom leading-tight">
                    The Overpaid <br/> Employee.
                </h2>
<p className="text-muted text-lg leading-relaxed max-w-md font-light">
                    If your business stops when you stop, you don't have a company. You have a job. A high-stress, unscalable job that demands 100% of your bandwidth.
                </p>
</div>

<div className="grid gap-6 reveal delay-200">

<div className="glass-panel p-8 rounded-xl border-l-2 border-l-red-500/50 relative overflow-hidden group spotlight-card">
<div className="flex items-start gap-4 relative z-20">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Manual Grind</h3>
<p className="text-sm text-muted">Chasing leads, manual invoicing, putting out fires. Reactive decision making based on gut feeling rather than data.</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl border-l-2 border-l-electric relative overflow-hidden group spotlight-card">

<div className="absolute right-0 top-0 w-32 h-32 bg-electric/10 blur-[50px]"></div>
<div className="flex items-start gap-4 relative z-20">
<div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0 border border-electric/30 shadow-[0_0_15px_-5px_#7C3AED]">
<span className="iconify text-electric" data-icon="lucide:check" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Systemized Scale</h3>
<p className="text-sm text-muted">Automated intake, self-managing workflows, data-driven decisions. Revenue is decoupled from your time input.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="calculator">
<div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-16 border-t border-white/10 shadow-[0_0_100px_-40px_rgba(124,58,237,0.15)] reveal">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold mb-3 tracking-tight-custom">Opportunity Cost Calculator</h2>
<p className="text-muted text-sm">Calculate the true cost of remaining an Operator.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-10">
<div>
<div className="flex justify-between text-sm mb-4">
<label className="text-gray-300 font-medium">Weekly Admin Hours</label>
<span className="text-muted font-mono">40h <span className="text-[10px] opacity-50">(Capped)</span></span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-red-500 w-full opacity-50"></div>
</div>
<p className="text-[10px] text-red-400 mt-2 font-mono uppercase tracking-wider">* Assuming full-time manual grind</p>
</div>
<div>
<div className="flex justify-between text-sm mb-4">
<label className="text-gray-300 font-medium">Your Hourly Value</label>
<span className="text-electric font-mono font-bold" id="hourly-display">$500</span>
</div>
<input id="hourly-input" max="2000" min="50" step="50" type="range" value="500"/>
<div className="flex justify-between text-[10px] text-gray-600 mt-2 font-mono uppercase tracking-wider">
<span>$50</span>
<span>$2,000</span>
</div>
</div>
</div>

<div className="bg-black/40 rounded-2xl p-8 border border-white/5 text-center flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none"></div>
<span className="relative z-10 block text-xs text-red-400 uppercase tracking-widest mb-3 font-semibold">Annual Opportunity Cost</span>
<div className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-600 tracking-tight font-display mb-2">
                        $<span id="total-cost">1,040,000</span>
</div>
<p className="relative z-10 text-[10px] text-muted opacity-60 mt-2">Revenue potential lost to admin work</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 spotlight-group" id="framework" onmousemove="handleMouseMove(event)">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center reveal">
<span className="text-electric text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Architecture</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight-custom">3-Phase Transformation</h2>
</div>
<div className="space-y-24">

<div className="grid md:grid-cols-12 gap-8 items-start reveal">
<div className="md:col-span-4 sticky top-32">
<span className="text-8xl font-bold text-white/5 absolute -top-10 -left-6 -z-10 font-display">01</span>
<h3 className="text-2xl font-semibold text-white mb-4">Digital Revamp</h3>
<p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                            Establish the foundation. We audit, restructure, and unify your fragmented tech stack into a cohesive single source of truth.
                        </p>
<div className="h-px w-20 bg-electric/50"></div>
</div>
<div className="md:col-span-8 grid sm:grid-cols-2 gap-4">

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[180px] flex flex-col justify-between">
<span className="iconify text-gray-400" data-icon="lucide:layout-grid" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Brand Infrastructure</h4>
<p className="text-xs text-muted">Enterprise-grade digital presence.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[180px] flex flex-col justify-between">
<span className="iconify text-gray-400" data-icon="lucide:database" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Omni-Channel Sync</h4>
<p className="text-xs text-muted">Unified data across all touchpoints.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-12 gap-8 items-start reveal">
<div className="md:col-span-4 sticky top-32">
<span className="text-8xl font-bold text-white/5 absolute -top-10 -left-6 -z-10 font-display">02</span>
<h3 className="text-2xl font-semibold text-white mb-4">The Engine</h3>
<p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                            Removing manual friction. We deploy logic layers that handle logistics, onboarding, and fulfillment automatically.
                        </p>
<div className="h-px w-20 bg-electric/50"></div>
</div>
<div className="md:col-span-8 grid sm:grid-cols-3 gap-4">

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-electric" data-icon="lucide:magnet" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Lead Capture</h4>
<p className="text-xs text-muted">No-leak funnel architecture.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-electric" data-icon="lucide:git-merge" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Ops Logic</h4>
<p className="text-xs text-muted">Conditional workflow automation.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-electric" data-icon="lucide:bot" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">AI Agents</h4>
<p className="text-xs text-muted">24/7 Support &amp; Scheduling.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-12 gap-8 items-start reveal">
<div className="md:col-span-4 sticky top-32">
<span className="text-8xl font-bold text-white/5 absolute -top-10 -left-6 -z-10 font-display">03</span>
<h3 className="text-2xl font-semibold text-white mb-4">Executive Scale</h3>
<p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                            Focus on Data &amp; Strategy. With the machine running, you step into the control room. Dashboards, KPIs, and expansion.
                        </p>
<div className="h-px w-20 bg-electric/50"></div>
</div>
<div className="md:col-span-8 grid sm:grid-cols-3 gap-4">

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-gray-400" data-icon="lucide:bar-chart-2" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Intelligence</h4>
<p className="text-xs text-muted">Executive Dashboards.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-gray-400" data-icon="lucide:trending-up" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Predictable Revenue</h4>
<p className="text-xs text-muted">Forecast accuracy &gt;90%.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-lg spotlight-card min-h-[200px] flex flex-col justify-between">
<span className="iconify text-gray-400" data-icon="lucide:globe" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Expansion</h4>
<p className="text-xs text-muted">New market deployment.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex items-center justify-center relative overflow-hidden">

<div className="absolute w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="text-center relative z-10 reveal">
<h2 className="text-[12rem] md:text-[16rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-display tracking-tighter">
                10x
            </h2>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
<span className="bg-electric px-4 py-1 text-white text-sm font-bold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(124,58,237,0.5)]">Efficiency Gain</span>
</div>
<p className="text-xl text-muted max-w-xl mx-auto mt-8 font-light">
                "The business grows because of the system, not your sweat."
            </p>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden border-t border-white/5" id="cta">
<div className="max-w-3xl mx-auto relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight-custom mb-10 leading-tight">
                Ready to resign as the <br/> <span className="text-electric">Office Manager?</span>
</h2>
<button className="group relative px-10 py-5 bg-white text-black text-sm font-bold tracking-wide rounded-sm hover:scale-105 transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                    Book Discovery Call 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
<div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</button>
</div>
</section>

<footer className="py-10 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-electric rounded-full"></div>
<span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Aware Systems © 2024</span>
</div>
<div className="flex gap-8 text-xs text-gray-600 font-mono">
<a className="hover:text-electric transition-colors" href="#">X / TWITTER</a>
<a className="hover:text-electric transition-colors" href="#">LINKEDIN</a>
<a className="hover:text-electric transition-colors" href="#">LEGAL</a>
</div>
</div>
</footer>



    </>
  );
}
