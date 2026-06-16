import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Spotlight Effect Logic
        function updateSpotlight(e) {
            const cards = document.getElementsByClassName('spotlight-group');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
                card.querySelector('.spotlight').style.setProperty('--x', `${x}px`);
                card.querySelector('.spotlight').style.setProperty('--y', `${y}px`);
            }
        }

        // Scroll Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: document.getElementById('scroller'),
                threshold: 0.4
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Trigger animations for children
                        const animatedElements = entry.target.querySelectorAll('.animate-enter');
                        animatedElements.forEach(el => {
                            el.style.animationPlayState = 'running';
                        });
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // Smooth Scroll Navigation
        function scrollToSlide(index) {
            const scroller = document.getElementById('scroller');
            const sections = document.querySelectorAll('section');
            if(sections[index]) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 pointer-events-none mix-blend-difference">
<div className="pointer-events-auto flex items-center gap-3">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">FB</div>
<span className="text-xs font-mono uppercase tracking-widest text-white/80">Proposal v2.4</span>
</div>
<div className="pointer-events-auto flex gap-1 bg-neutral-900/50 backdrop-blur-md p-1 rounded-lg border border-white/10">
<button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-white/60 hover:text-white" onclick="scrollToSlide(0)"><iconify-icon icon="lucide:layout-dashboard" width="16"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-white/60 hover:text-white" onclick="scrollToSlide(2)"><iconify-icon icon="lucide:bar-chart-3" width="16"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-white/60 hover:text-white" onclick="scrollToSlide(6)"><iconify-icon icon="lucide:credit-card" width="16"></iconify-icon></button>
</div>
</nav>

<main className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar" id="scroller">

<section className="h-screen w-full snap-start relative flex overflow-hidden">

<div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24 z-10 bg-neutral-950 border-r border-white/5">
<div className="animate-enter" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">Status: Active Opportunity</span>
</div>
<h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[0.95]">
                        Fly Boskies<br/>
<span className="text-neutral-600">Motion Edition.</span>
</h1>
<p className="text-lg font-light leading-relaxed max-w-md text-neutral-400 mb-10 border-l border-white/20 pl-6">
                        We are proposing a comprehensive digital acquisition engine designed to bypass intermediaries and connect directly with High-Net-Worth Individuals (HNWI) for charter services.
                    </p>
<div className="flex items-center gap-6">
<button className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 group">
                            Explore Strategy
                            <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down"></iconify-icon>
</button>
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">N</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-700 flex items-center justify-center text-[10px] text-white">V</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-600 flex items-center justify-center text-[10px] text-white">+4</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 lg:static lg:w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&amp;w=2400&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-neutral-950/60 lg:bg-neutral-950/20 backdrop-grayscale lg:backdrop-blur-none"></div>
<div className="lg:bg-gradient-to-l lg:from-neutral-950 lg:via-transparent bg-gradient-to-t from-neutral-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-xl border border-white/10 p-6 max-w-xs animate-enter delay-500 hidden lg:block" style={{animationPlayState: 'running'}}>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-white" icon="lucide:plane"></iconify-icon>
<span className="text-xs font-mono text-green-400">+24% YoY</span>
</div>
<div className="h-16 flex items-end gap-1 mb-2">
<div className="w-1/6 bg-white/10 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-white/10 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-white/10 h-[30%] rounded-sm"></div>
<div className="w-1/6 bg-white/10 h-[50%] rounded-sm"></div>
<div className="w-1/6 bg-white/10 h-[70%] rounded-sm"></div>
<div className="w-1/6 bg-white h-[90%] rounded-sm"></div>
</div>
<p className="text-xs text-neutral-400 mt-2">Projected inbound query volume based on Q1 search trends.</p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start relative flex flex-col justify-center items-center bg-neutral-950" id="slide-engine">
<div className="w-full max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 animate-enter" style={{animationPlayState: 'running'}}>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">01 — The Objective</span>
<h2 className="text-4xl lg:text-5xl text-white font-medium mb-8 tracking-tight">Constructing a <br/><span className="text-neutral-500">Growth Engine.</span></h2>
<div className="space-y-8">
<div className="group">
<h3 className="text-white text-lg font-medium mb-2 flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:circle-slash-2"></iconify-icon> Current State
                            </h3>
<p className="text-sm leading-relaxed text-neutral-400 pl-8 border-l border-white/10">
                                Reliance on third-party brokers dilutes brand equity and reduces margins. Traffic is sporadic and unmeasured, leading to unpredictable revenue streams.
                            </p>
</div>
<div className="group">
<h3 className="text-white text-lg font-medium mb-2 flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:circle-dot"></iconify-icon> Future State
                            </h3>
<p className="text-sm leading-relaxed text-neutral-400 pl-8 border-l border-white/40">
                                A proprietary data-led ecosystem. We own the audience, retarget intent, and automate qualification via WhatsApp before a human ever touches the lead.
                            </p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[500px] border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden animate-enter delay-200" style={{animationPlayState: 'running'}}>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.3'}}></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-full max-w-[800px] aspect-[1.6] flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveaspectratio="xMidYMid meet" viewbox="0 0 800 500">
<defs>
</defs>


<path d="M 160 110 Q 280 110 400 250" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>

<path d="M 640 110 Q 520 110 400 250" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>

<path d="M 640 390 Q 520 390 400 250" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>

<circle fill="#60a5fa" filter="drop-shadow(0 0 4px #60a5fa)" r="3">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle fill="#fb923c" filter="drop-shadow(0 0 4px #fb923c)" r="3">
<animate attributename="opacity" dur="4s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle fill="#4ade80" filter="drop-shadow(0 0 4px #4ade80)" r="3">
<animate attributename="opacity" dur="3.5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
</svg>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="relative w-32 h-32 bg-black rounded-full border border-white/20 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.08)]">
<iconify-icon className="text-3xl text-white mb-2" icon="lucide:database"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-white font-medium">CRM Core</span>

<div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>

<div className="absolute left-[20%] top-[22%] -translate-x-1/2 -translate-y-1/2 z-30">
<div className="glass-card p-4 rounded-lg flex gap-3 items-center animate-[float_6s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300">
<div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center"><iconify-icon className="text-blue-400" icon="lucide:facebook"></iconify-icon></div>
<div className="text-xs">
<div className="text-white font-medium">Meta Ads</div>
<div className="text-neutral-500">Awareness</div>
</div>
</div>
</div>

<div className="absolute left-[80%] top-[22%] -translate-x-1/2 -translate-y-1/2 z-30">
<div className="glass-card p-4 rounded-lg flex gap-3 items-center animate-[float_8s_ease-in-out_infinite] delay-200 hover:scale-105 transition-transform duration-300">
<div className="w-8 h-8 bg-orange-500/10 rounded flex items-center justify-center"><iconify-icon className="text-orange-400" icon="lucide:search"></iconify-icon></div>
<div className="text-xs">
<div className="text-white font-medium">Google</div>
<div className="text-neutral-500">Intent</div>
</div>
</div>
</div>

<div className="absolute left-[80%] top-[78%] -translate-x-1/2 -translate-y-1/2 z-30">
<div className="glass-card p-4 rounded-lg flex gap-3 items-center animate-[float_7s_ease-in-out_infinite] delay-100 hover:scale-105 transition-transform duration-300">
<div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center"><iconify-icon className="text-green-400" icon="lucide:message-circle"></iconify-icon></div>
<div className="text-xs">
<div className="text-white font-medium">WhatsApp</div>
<div className="text-neutral-500">Closing</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start bg-neutral-950 flex flex-col justify-center px-8 lg:px-24">
<div className="max-w-7xl w-full mx-auto">
<div className="flex justify-between items-end mb-16 animate-enter" style={{animationPlayState: 'running'}}>
<div>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">02 — The Funnel</span>
<h2 className="text-4xl text-white font-medium">Acquisition Architecture</h2>
</div>
<div className="text-right hidden lg:block">
<div className="text-xs text-neutral-500 font-mono mb-1">TARGET CONVERSION RATE</div>
<div className="text-2xl text-white font-mono">3.85%</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 -z-10 hidden md:block"></div>

<div className="glass-card p-6 h-64 flex flex-col justify-between group animate-enter delay-100 spotlight-group overflow-hidden relative" onmousemove="updateSpotlight(event)" style={{animationPlayState: 'running'}}>
<div className="spotlight" style={{-X: '0', -Y: '0'}}></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500">STEP 01</span>
<iconify-icon className="text-white opacity-50" icon="lucide:eye"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Awareness</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6">
                                High-gloss video content deployed across Instagram &amp; LinkedIn targeting luxury interest groups (Watches, Yachting, First Class travel).
                            </p>
</div>
<div className="relative z-10 w-full bg-white/10 h-1 mt-auto">
<div className="h-full bg-white/40 progress-bar-fill" style={{-TargetWidth: '100%'}}></div>
</div>
<div className="absolute bottom-2 right-2 text-[10px] text-white/30 font-mono">100k IMPRESSIONS</div>
</div>

<div className="glass-card p-6 h-64 flex flex-col justify-between group animate-enter delay-200 spotlight-group overflow-hidden relative" onmousemove="updateSpotlight(event)" style={{animationPlayState: 'running'}}>
<div className="spotlight" style={{-X: '0', -Y: '0'}}></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500">STEP 02</span>
<iconify-icon className="text-white opacity-50" icon="lucide:filter"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Consideration</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6">
                                Retargeting users who watched &gt;50% of video with specific route offers (e.g., "London to Nice"). Capturing Google Search intent.
                            </p>
</div>
<div className="relative z-10 w-full bg-white/10 h-1 mt-auto">
<div className="h-full bg-white/60 progress-bar-fill" style={{-TargetWidth: '45%'}}></div>
</div>
<div className="absolute bottom-2 right-2 text-[10px] text-white/30 font-mono">45k ENGAGED</div>
</div>

<div className="glass-card p-6 h-64 flex flex-col justify-between group animate-enter delay-300 spotlight-group overflow-hidden relative" onmousemove="updateSpotlight(event)" style={{animationPlayState: 'running'}}>
<div className="spotlight" style={{-X: '0', -Y: '0'}}></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500">STEP 03</span>
<iconify-icon className="text-white opacity-50" icon="lucide:messages-square"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Qualification</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6">
                                Automated WhatsApp flow to gather trip details: Origin, Destination, Pax, Date. Filters out window shoppers.
                            </p>
</div>
<div className="relative z-10 w-full bg-white/10 h-1 mt-auto">
<div className="h-full bg-white/80 progress-bar-fill" style={{-TargetWidth: '15%'}}></div>
</div>
<div className="absolute bottom-2 right-2 text-[10px] text-white/30 font-mono">15k LEADS</div>
</div>

<div className="glass-card bg-white text-black p-6 h-64 flex flex-col justify-between group animate-enter delay-500 overflow-hidden relative border-none" style={{animationPlayState: 'running'}}>
<div className="absolute top-0 right-0 p-12 bg-gradient-to-br from-transparent to-neutral-200 opacity-50 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500 font-bold">STEP 04</span>
<iconify-icon className="text-black opacity-100" icon="lucide:check-circle-2"></iconify-icon>
</div>
<h3 className="text-xl text-black font-bold mb-2">Conversion</h3>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 font-medium">
                                Sales team receives enriched lead data. High-touch service closes the charter. Payment link sent.
                            </p>
</div>
<div className="relative z-10 w-full bg-neutral-200 h-1 mt-auto">
<div className="h-full bg-black progress-bar-fill" style={{-TargetWidth: '5%'}}></div>
</div>
<div className="absolute bottom-2 right-2 text-[10px] text-black/50 font-mono">SALES</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start bg-neutral-950 flex items-center justify-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
<div className="absolute bottom-0 left-10 w-[1px] h-full bg-gradient-to-t from-white to-transparent"></div>
<div className="absolute bottom-0 left-20 w-[1px] h-[80%] bg-gradient-to-t from-white to-transparent"></div>
<div className="absolute bottom-0 left-32 w-[1px] h-[40%] bg-gradient-to-t from-white to-transparent"></div>
</div>
<div className="max-w-7xl w-full px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="h-[400px] w-full border-b border-l border-white/10 relative flex items-end justify-around px-8 pb-0 animate-enter">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/50"></div>
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/50"></div>
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/50"></div>
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/50"></div>
</div>

<div className="w-12 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-t-sm relative group stat-bar" style={{-TargetHeight: '30%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white">$120k</div>
<div className="absolute bottom-0 w-full h-[1px] bg-white/50"></div>
<div className="absolute top-full mt-4 text-xs font-mono text-neutral-500 text-center w-full">Q1</div>
</div>
<div className="w-12 bg-neutral-700 hover:bg-neutral-600 transition-colors rounded-t-sm relative group stat-bar" style={{-TargetHeight: '45%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white">$240k</div>
<div className="absolute bottom-0 w-full h-[1px] bg-white/50"></div>
<div className="absolute top-full mt-4 text-xs font-mono text-neutral-500 text-center w-full">Q2</div>
</div>
<div className="w-12 bg-neutral-600 hover:bg-neutral-500 transition-colors rounded-t-sm relative group stat-bar" style={{-TargetHeight: '60%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white">$450k</div>
<div className="absolute bottom-0 w-full h-[1px] bg-white/50"></div>
<div className="absolute top-full mt-4 text-xs font-mono text-neutral-500 text-center w-full">Q3</div>
</div>
<div className="w-12 bg-white text-black hover:bg-neutral-200 transition-colors rounded-t-sm relative group stat-bar shadow-[0_0_30px_rgba(255,255,255,0.2)]" style={{-TargetHeight: '85%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-100 transition-opacity text-xs font-bold font-mono text-white bg-black px-2 py-1 rounded">$890k</div>
<div className="absolute bottom-0 w-full h-[1px] bg-white/50"></div>
<div className="absolute top-full mt-4 text-xs font-mono text-white text-center w-full">Q4</div>
</div>
</div>

<div className="animate-enter delay-200">
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">03 — Impact</span>
<h2 className="text-4xl text-white font-medium mb-6">Compounding Results</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Unlike one-off advertising, this engine builds a database of qualified leads. The Cost Per Acquisition (CPA) decreases over time as our lookalike audiences mature and the retargeting pool grows.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-3xl text-white font-light tracking-tighter mb-1">26x</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">ROI (Year 1)</div>
</div>
<div>
<div className="text-3xl text-white font-light tracking-tighter mb-1">-40%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Ad Spend / Lead</div>
</div>
<div>
<div className="text-3xl text-white font-light tracking-tighter mb-1">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Data Ownership</div>
</div>
<div>
<div className="text-3xl text-white font-light tracking-tighter mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Auto-Response</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start bg-neutral-950 flex flex-col justify-center items-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950"></div>
<div className="max-w-7xl w-full px-8 z-10">
<div className="text-center mb-16 animate-enter">
<h2 className="text-4xl text-white font-medium mb-4">Investment Options</h2>
<p className="text-neutral-500">Select the velocity of your growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl flex flex-col animate-enter delay-100 hover:translate-y-[-5px] transition-transform duration-300">
<div className="mb-6">
<h3 className="text-lg text-white font-medium mb-1">Pilot</h3>
<p className="text-sm text-neutral-500">Proof of concept.</p>
</div>
<div className="mb-8">
<span className="text-3xl text-white font-light tracking-tight">$2,500</span>
<span className="text-sm text-neutral-600">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Meta Ads Setup</li>
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Basic Lead Form</li>
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Weekly Reporting</li>
</ul>
<button className="w-full py-3 border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Select Pilot</button>
</div>

<div className="bg-white text-black p-8 rounded-xl flex flex-col transform scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative animate-enter delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full">Recommended</div>
<div className="mb-6">
<h3 className="text-lg font-bold mb-1">Growth Engine</h3>
<p className="text-sm text-neutral-500">Full ecosystem deployment.</p>
</div>
<div className="mb-8">
<span className="text-3xl font-bold tracking-tight">$3,500</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-black" icon="lucide:check-circle-2"></iconify-icon> Meta &amp; Google Ads</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-black" icon="lucide:check-circle-2"></iconify-icon> WhatsApp Automation</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-black" icon="lucide:check-circle-2"></iconify-icon> CRM Integration</li>
</ul>
<button className="w-full py-3 bg-black text-white text-sm hover:bg-neutral-800 transition-colors font-medium">Start Growth</button>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col animate-enter delay-300 hover:translate-y-[-5px] transition-transform duration-300">
<div className="mb-6">
<h3 className="text-lg text-white font-medium mb-1">Dominance</h3>
<p className="text-sm text-neutral-500">Aggressive scale.</p>
</div>
<div className="mb-8">
<span className="text-3xl text-white font-light tracking-tight">$5,000</span>
<span className="text-sm text-neutral-600">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> All Growth Features</li>
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Dedicated Account Mgr</li>
<li className="flex items-center gap-3 text-sm text-neutral-400"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Content Production Day</li>
</ul>
<button className="w-full py-3 border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Select Dominance</button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 py-4 overflow-hidden bg-black">
<div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite]">
<div className="flex gap-16 px-8 text-neutral-600 font-mono text-xs uppercase tracking-widest">
<span>Ready to launch</span>
<span>Next onboarding slot: Oct 14</span>
<span>Secure your territory</span>
<span>Fly Boskies</span>
<span>Ready to launch</span>
<span>Next onboarding slot: Oct 14</span>
<span>Secure your territory</span>
<span>Fly Boskies</span>
<span>Ready to launch</span>
<span>Next onboarding slot: Oct 14</span>
<span>Secure your territory</span>
<span>Fly Boskies</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
