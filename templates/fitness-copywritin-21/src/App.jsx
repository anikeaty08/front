import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // Scroll Progress Logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height);
            document.getElementById("scrollProgress").style.transform = `scaleX(${scrolled})`;
            
            // Navbar Blur Effect
            const nav = document.querySelector('nav');
            if(window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.classList.remove('bg-transparent');
            } else {
                // Keep minimal bg
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-transparent pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-sky-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 w-full z-[60] origin-left scale-x-0 transition-transform duration-100" id="scrollProgress"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
<i className="text-white w-4 h-4 stroke-[1.5]" data-lucide="pen-tool"></i>
</div>
<span className="text-white font-medium text-lg tracking-tight">coyex copy</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#method">The Method</a>
<a className="hover:text-white transition-colors" href="#deliverables">Deliverables</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="relative group px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative text-sm font-medium text-white flex items-center gap-2">
                        Book Strategy Call <i className="w-4 h-4 stroke-[1.5]" data-lucide="calendar"></i>
</span>
</button>
</div>

<button className="md:hidden text-slate-300"><i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i></button>
</div>
</nav>

<section className="relative pt-32 pb-20 min-h-screen flex items-center z-10" id="hero">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide">
<i className="w-3 h-3 fill-blue-500/20 text-blue-400 stroke-[1.5]" data-lucide="dumbbell"></i>
                    Specialized for Gyms &amp; Fitness Centers
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Fill your floor.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white text-glow">Retain members.</span>
</h1>
<p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                    We write high-converting landing pages and 3-part email loops that turn "I'll think about it" into signed memberships.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bar-chart-2"></i>
                        Get Your Audit
                    </button>
<button className="px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                        View Samples
                    </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/5">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Avg. Conversion</p>
<p className="text-white text-xl font-medium flex items-center gap-2">
                            18.4% <span className="text-green-400 text-xs bg-green-500/10 px-1.5 py-0.5 rounded flex items-center"><i className="w-3 h-3" data-lucide="arrow-up"></i> 4%</span>
</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Open Rates</p>
<p className="text-white text-xl font-medium">42%+</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Platform</p>
<div className="flex items-center gap-1 text-white text-xl font-medium">
<i className="w-4 h-4 text-sky-400 stroke-[1.5]" data-lucide="check-circle"></i> Agnostic
                        </div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-sky-400/10 rounded-[40px] blur-3xl -z-10"></div>
<div className="w-full max-w-md glass rounded-2xl p-6 relative border border-white/10 shadow-2xl shadow-blue-900/20">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
<i className="w-5 h-5 text-blue-400 stroke-[1.5]" data-lucide="users"></i>
</div>
<div>
<h3 className="text-white font-medium text-sm">New Lead Flow</h3>
<p className="text-xs text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Active Campaign
                                </p>
</div>
</div>
<div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">Live</div>
</div>

<div className="space-y-6">

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="glass bg-white/5 rounded-lg p-4 mb-2">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Landing Page Action</span>
<span className="text-xs text-white">09:42 AM</span>
</div>
<p className="text-slate-300 text-sm">Lead submitted "Free 7-Day Pass" form.</p>
</div>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-sky-400"></div>
<div className="glass bg-blue-900/20 border-blue-500/30 rounded-lg p-4 mb-2">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-sky-400 font-medium uppercase tracking-wide">Email 1 Sent (Instant)</span>
<i className="w-3 h-3 text-sky-400 stroke-[1.5]" data-lucide="mail-check"></i>
</div>
<p className="text-white text-sm font-medium mb-1">Subject: Your pass is inside (plus a bonus)...</p>
<p className="text-slate-400 text-xs leading-relaxed">"Hey [Name], you're one step away from the best shape of your life. Here is your QR code..."</p>
</div>
</div>

<div className="relative pl-6">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500"></div>
<div className="glass bg-green-900/10 border-green-500/20 rounded-lg p-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-green-500/20"><i className="w-3 h-3 text-green-400 stroke-[1.5]" data-lucide="check"></i></div>
<span className="text-slate-200 text-sm font-medium">Consultation Booked</span>
</div>
<span className="text-green-400 text-xs font-semibold">+ $149.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900/30 border-y border-white/5" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                        More than just words. <br/><span className="text-slate-500">Psychology-driven systems.</span>
</h2>
<div className="space-y-6 text-lg text-slate-400 font-light">
<p>Most gyms lose leads in the "gap" — the silence between signing up for a pass and actually walking through the door. Coyex Copy bridges that gap.</p>
<p>We build a focused narrative arc that validates their decision, overcomes intimidation, and creates urgent desire to visit your facility immediately.</p>
<div className="pt-6">
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-blue-500/10 text-blue-400"><i className="w-4 h-4 stroke-[1.5]" data-lucide="check"></i></div>
<span className="text-slate-300">High-Velocity Landing Pages</span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-blue-500/10 text-blue-400"><i className="w-4 h-4 stroke-[1.5]" data-lucide="check"></i></div>
<span className="text-slate-300">Automated "Show-Up" Sequences</span>
</li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-blue-500/10 text-blue-400"><i className="w-4 h-4 stroke-[1.5]" data-lucide="check"></i></div>
<span className="text-slate-300">Re-engagement for Cold Leads</span>
</li>
</ul>
</div>
</div>
</div>
<div className="grid gap-6">

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group border-l-4 border-l-blue-500">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="layout"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">The Landing Page</h3>
<p className="text-slate-400 leading-relaxed text-sm">A distraction-free zone designed for one outcome. We strip away the noise and focus on the offer, the facility, and the transformation.</p>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group border-l-4 border-l-sky-400">
<div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="send"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">The 3-Email Loop</h3>
<p className="text-slate-400 leading-relaxed text-sm">1. Instant Gratification (The Ticket). <br/>2. Social Proof (The Tribe). <br/>3. Urgency (The Fear of Missing Out).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="deliverables">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Fixing the Leaky Bucket</h2>
<p className="text-lg text-slate-400">Real scenarios we solve for fitness owners every day.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass rounded-2xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">The Ghost</span>
<i className="text-slate-500 w-5 h-5 stroke-[1.5]" data-lucide="ghost"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm italic">
                            "They claim the free pass but never walk in the door."
                        </div>
<div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3 text-white text-sm">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-blue-400 fill-blue-400" data-lucide="zap"></i>
<span className="text-xs text-blue-300">The Fix: Email #1</span>
</div>
                            Immediate delivery of a value-add guide (e.g., "3 Mistakes Beginners Make") + time-sensitive bonus for booking induction within 48h.
                        </div>
</div>
</div>

<div className="glass rounded-2xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">The Skeptic</span>
<i className="text-slate-500 w-5 h-5 stroke-[1.5]" data-lucide="shield-alert"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm italic">
                            "Is this gym too advanced for me? I'll be judged."
                        </div>
<div className="bg-sky-900/20 border border-sky-500/20 rounded-lg p-3 text-white text-sm">
<span className="text-sky-400 font-medium block mb-1 text-xs">The Fix: Landing Page</span>
                            Copy that specifically addresses "gymtimidation," highlights community inclusivity, and uses "you" focused language over feature lists.
                        </div>
</div>
</div>

<div className="glass rounded-2xl p-6 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">The Procrastinator</span>
<i className="text-slate-500 w-5 h-5 stroke-[1.5]" data-lucide="clock"></i>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-3 text-slate-300 text-sm italic">
                            "I'll start next month when work calms down."
                        </div>
<div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-3 text-white text-sm">
<span className="text-indigo-400 font-medium block mb-1 text-xs">The Fix: Email #3</span>
                            Hard urgency logic. "Your pass expires in 24 hours." Reminder that "next month" never comes. Re-frame the pain of staying the same.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-y border-white/5" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

<div className="relative w-80 h-80 rounded-full border-[20px] border-slate-800 flex items-center justify-center">
<div className="absolute inset-0 border-[20px] border-blue-600 rounded-full" style={{clipPath: 'polygon(50% 50%, 0 0, 50% 0)'}}></div>
<div className="absolute inset-0 border-[20px] border-sky-400 rounded-full rotate-45" style={{clipPath: 'polygon(50% 50%, 0 0, 100% 0)'}}></div>
<div className="absolute inset-0 border-[20px] border-slate-600 rounded-full rotate-[135deg]" style={{clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%)'}}></div>
<div className="text-center z-10">
<p className="text-slate-400 text-sm uppercase tracking-widest">Goal</p>
<p className="text-3xl font-bold text-white tracking-tight">100%</p>
<p className="text-blue-400 text-sm font-medium">Capacity</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-2">The Anatomy of a Lead</h2>
<p className="text-lg text-slate-400 mb-10">We engineer every word to move the prospect through three distinct psychological states.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-blue-600"></span>
<span className="text-slate-200 font-medium">Curiosity (The Hook)</span>
</div>
<span className="text-slate-400 text-sm">Landing Page Header</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-sky-400/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-sky-400"></span>
<span className="text-slate-200 font-medium">Trust (The Bridge)</span>
</div>
<span className="text-slate-400 text-sm">Email 1 &amp; 2</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-slate-600/30 transition-colors">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-slate-600"></span>
<span className="text-slate-200 font-medium">Action (The Close)</span>
</div>
<span className="text-slate-400 text-sm">Email 3 / Offer</span>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="info"></i>
                        Based on data from over <span className="font-medium text-slate-300">50,000+</span> gym leads.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="stats">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.2'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Live Client Results</h2>
<p className="text-slate-400">Aggregate performance across our fitness partner network.</p>
</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-900/20 px-3 py-1 rounded-full border border-green-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Updating Live
                </div>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Leads Generated</p>
<p className="text-2xl font-mono text-white">4,893</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Show-Up Rate</p>
<p className="text-2xl font-mono text-white">~68%</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Email Open Rate</p>
<p className="text-2xl font-mono text-white">42.1%</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<p className="text-sm text-slate-500 mb-2">Revenue Added</p>
<p className="text-2xl font-mono text-white">$420k+</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Onboarding Timeline</h2>
<p className="text-slate-400 mt-4">From audit to active campaign in 7 days.</p>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-blue-400 font-medium text-sm">Day 1-2</span>
<h3 className="text-xl text-white font-medium">The Deep Dive Audit</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-600/20"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-400 text-sm">We analyze your current offer, pricing, and local competitors to find the "hook" that stops the scroll.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-sky-400 font-medium text-sm">Day 3-5</span>
<h3 className="text-xl text-white font-medium">Copy &amp; Construction</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-sky-400 rounded-full ring-4 ring-sky-400/20 animate-pulse"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-400 text-sm">We write the landing page and the 3-email sequence. You review it, we refine it.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center">
<div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
<span className="text-slate-500 font-medium text-sm">Day 7</span>
<h3 className="text-xl text-slate-300 font-medium">Launch</h3>
</div>
<div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
<div className="w-3 h-3 bg-slate-700 rounded-full"></div>
</div>
<div className="md:col-span-2 md:pl-12">
<p className="text-slate-500 text-sm">We hand over the Google Docs or implement directly into your CRM/Website builder.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>Do you work with Crossfit and Boutique studios?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        Yes. Whether you are a big box gym, a CrossFit box, or a Pilates studio, the psychology of "Health &amp; Status" remains consistent. We adapt the tone to fit your specific tribe.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>Do I need to install new software?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        No. We write the copy. You can paste it into Mailchimp, GymLeadMachine, ClickFunnels, WordPress, or whatever system you currently use.
                    </div>
</details>
<details className="group glass rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>What is the "3 Email" rule?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                        Data shows attention spans drop after 3 days. Our sequence is designed to maximize conversion within that critical 72-hour window post-signup.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#01030b] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
<i className="text-slate-400 w-3 h-3 stroke-[1.5]" data-lucide="pen-tool"></i>
</div>
<span className="text-white font-medium">coyex copy</span>
</div>
<p className="text-slate-500 text-sm mb-6">
                        Turning local traffic into loyal members. <br/>The fitness industry's copy partner.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition" href="#">Landing Pages</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Email Sequences</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Meta Ad Copy</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Full Funnel Audits</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Pricing</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Coyex Copy Agency. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/40 flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-square"></i>
</button>
</div>


    </>
  );
}
