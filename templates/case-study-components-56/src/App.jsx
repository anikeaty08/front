import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Simple fade in for elements
            const elements = document.querySelectorAll('.fade-enter');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-zinc-900" href="#">
                AGENCY
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Expertise</a>
<a className="text-zinc-900 transition-colors" href="#">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Agency</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Insights</a>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-32 pb-12 md:pt-48 px-6 relative">
<div className="max-w-screen-2xl mx-auto space-y-12 fade-enter">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-zinc-200 pt-6">
<div>
<span className="block text-zinc-400 mb-1 font-medium">Client</span>
<span className="font-semibold text-zinc-900">Velvet Airways</span>
</div>
<div>
<span className="block text-zinc-400 mb-1 font-medium">Industry</span>
<span className="font-semibold text-zinc-900">Travel &amp; Logistics</span>
</div>
<div>
<span className="block text-zinc-400 mb-1 font-medium">Timeline</span>
<span className="font-semibold text-zinc-900">2023 — 2024</span>
</div>
<div>
<span className="block text-zinc-400 mb-1 font-medium">Core KPI</span>
<span className="font-semibold text-zinc-900 text-emerald-600">+210% Conversion</span>
</div>
</div>

<div className="max-w-5xl space-y-8">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-900 leading-[0.95]">
                    Integrated booking engine &amp; global growth system.
                </h1>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">Website Architecture</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">Paid Media</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">AI Automation</span>
</div>
</div>

<div className="w-full aspect-video md:aspect-[21/9] bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 relative shadow-sm">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="relative z-10 text-center space-y-4">
<iconify-icon className="text-white/80" icon="solar:plane-linear" strokeWidth="1" width="64"></iconify-icon>
<div className="text-white text-2xl font-light tracking-widest uppercase">Velvet Airways</div>
</div>
</div>
</div>
</div>
</header>

<div className="sticky top-16 z-40 bg-zinc-50/90 backdrop-blur-md border-y border-zinc-200">
<div className="max-w-screen-2xl mx-auto px-6 overflow-x-auto hide-scroll">
<div className="flex items-center gap-8 h-14 min-w-max text-sm font-medium">
<a className="text-zinc-900 hover:text-zinc-600 transition-colors" href="#challenge">01 The Challenge</a>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#system">02 System View</a>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#platform">03 Platform</a>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#growth">04 Growth</a>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#automation">05 Automation</a>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#results">06 Results</a>
</div>
</div>
</div>
<main className="max-w-screen-2xl mx-auto px-6 py-24 space-y-32">

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start fade-enter" id="challenge">
<div className="space-y-6">
<span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">The Challenge</span>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight leading-tight">
                    Fragmented user journeys resulting in high abandonment rates.
                </h2>
<p className="text-lg text-zinc-500 leading-relaxed">
                    Velvet Airways faced a critical disconnect between their ad spend and booking completion. Users were landing on legacy infrastructure that wasn't optimized for mobile, leading to a 75% drop-off at the seat selection phase.
                </p>
<ul className="space-y-3 text-sm text-zinc-600 pt-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:close-circle-linear"></iconify-icon>
                        Slow load times on mobile devices
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:close-circle-linear"></iconify-icon>
                        Disconnected customer support data
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:close-circle-linear"></iconify-icon>
                        Generic, un-targeted ad creative
                    </li>
</ul>
</div>
<div className="bg-zinc-100 rounded-xl p-8 md:p-12 flex items-center justify-center border border-zinc-200 h-full min-h-[400px]">

<div className="w-full max-w-sm space-y-4">
<div className="flex justify-between text-xs font-medium text-zinc-400 uppercase">
<span>Funnel Leakage</span>
<span>-75%</span>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-full bg-zinc-300"></div>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-zinc-300"></div>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[25%] bg-red-400"></div>
</div>
<div className="text-center pt-8">
<p className="text-sm text-zinc-500">Legacy Architecture</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 py-16 fade-enter" id="system">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
<div className="flex flex-col gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-2 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Awareness</h3>
<p className="text-xs text-zinc-500 max-w-[140px]">Programmatic &amp; Social Targeting</p>
</div>
<div className="hidden md:block h-px flex-1 bg-zinc-200 mx-4"></div>
<div className="flex flex-col gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-2 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Platform</h3>
<p className="text-xs text-zinc-500 max-w-[140px]">Headless Booking Engine</p>
</div>
<div className="hidden md:block h-px flex-1 bg-zinc-200 mx-4"></div>
<div className="flex flex-col gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-2 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Automation</h3>
<p className="text-xs text-zinc-500 max-w-[140px]">AI WhatsApp Agent</p>
</div>
<div className="hidden md:block h-px flex-1 bg-zinc-200 mx-4"></div>
<div className="flex flex-col gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-2 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Optimisation</h3>
<p className="text-xs text-zinc-500 max-w-[140px]">Real-time Data Loop</p>
</div>
</div>
</section>

<div className="space-y-24">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-enter" id="platform">
<div className="lg:col-span-7 bg-zinc-100 rounded-2xl border border-zinc-200 p-6 md:p-10 relative overflow-hidden group">

<div className="bg-white rounded-t-lg border-b border-zinc-100 p-3 flex items-center gap-2 shadow-sm relative z-10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
</div>
<div className="bg-zinc-50 rounded text-xs text-zinc-400 px-3 py-1 flex-1 text-center mx-4">velvet-airways.com</div>
</div>

<div className="bg-white aspect-[4/3] relative overflow-hidden shadow-lg transform group-hover:translate-y-[-5px] transition-transform duration-500">

<div className="p-8 space-y-6">
<div className="flex justify-between items-center">
<div className="w-24 h-4 bg-zinc-900 rounded"></div>
<div className="w-8 h-8 rounded-full bg-zinc-100"></div>
</div>
<div className="space-y-2">
<div className="w-2/3 h-8 bg-zinc-200 rounded"></div>
<div className="w-1/2 h-8 bg-zinc-200 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4 pt-4">
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
</div>
</div>
</div>

<div className="absolute bottom-[-20px] right-8 w-32 md:w-48 bg-black rounded-2xl border-4 border-zinc-800 shadow-2xl z-20 aspect-[9/18] transform rotate-[-5deg] group-hover:rotate-0 group-hover:bottom-0 transition-all duration-500">
<div className="w-full h-full bg-white rounded-xl overflow-hidden p-3 space-y-3">
<div className="w-full h-24 bg-zinc-100 rounded"></div>
<div className="w-full h-8 bg-zinc-900 rounded"></div>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-6">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">Component-Driven Architecture</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        We migrated the monolithic legacy stack to a headless Next.js frontend. This allowed for sub-second page loads and a modular design system that marketing teams could update without developer intervention.
                    </p>
<div className="border-t border-zinc-200 pt-6 mt-2">
<div className="flex gap-8">
<div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">0.8s</div>
<div className="text-xs text-zinc-500 mt-1">LCP Score</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">99%</div>
<div className="text-xs text-zinc-500 mt-1">Uptime</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-enter" id="growth">
<div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">Dynamic Creative Optimization</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        Moving away from generic brand awareness to intent-based retargeting. We utilized feed-based ads that dynamically displayed flight routes users had previously searched for, coupled with real-time pricing.
                    </p>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Route-specific retargeting
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Lookalike audiences based on LTV
                        </li>
</ul>
</div>
<div className="lg:col-span-7 bg-zinc-900 rounded-2xl p-6 md:p-10 flex items-center justify-center gap-6 overflow-hidden order-1 lg:order-2 relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="w-40 md:w-48 bg-zinc-800 rounded-2xl border-4 border-zinc-700 aspect-[9/18] shadow-2xl transform translate-y-8 opacity-80">
<div className="w-full h-full bg-zinc-900 p-2 space-y-2">
<div className="w-full h-32 bg-zinc-800 rounded"></div>
<div className="w-3/4 h-2 bg-zinc-700 rounded"></div>
<div className="w-1/2 h-2 bg-zinc-700 rounded"></div>
</div>
</div>

<div className="w-44 md:w-56 bg-zinc-800 rounded-2xl border-4 border-zinc-600 aspect-[9/18] shadow-2xl relative z-10">
<div className="w-full h-full bg-white rounded-xl overflow-hidden relative">

<div className="w-full h-full bg-zinc-50 flex flex-col">
<div className="h-40 bg-zinc-200 relative">
<div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-1 rounded">Sponsored</div>
</div>
<div className="p-3 space-y-2">
<div className="flex justify-between items-center">
<div className="text-xs font-bold text-zinc-900">London <span className="text-zinc-400">→</span> Tokyo</div>
<div className="text-xs font-bold text-emerald-600">$850</div>
</div>
<div className="w-full h-8 bg-zinc-900 rounded text-white text-[10px] flex items-center justify-center font-medium">Book Now</div>
</div>
</div>
</div>
</div>

<div className="w-40 md:w-48 bg-zinc-800 rounded-2xl border-4 border-zinc-700 aspect-[9/18] shadow-2xl transform translate-y-8 opacity-80">
<div className="w-full h-full bg-zinc-900 p-2 space-y-2">
<div className="w-full h-32 bg-zinc-800 rounded"></div>
<div className="w-3/4 h-2 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-enter" id="automation">
<div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200 p-6 md:p-12 relative shadow-sm">
<div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-zinc-100 overflow-hidden">

<div className="bg-zinc-50 border-b border-zinc-100 p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:robot-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900">Velvet Assistant</div>
<div className="text-[10px] text-zinc-400">Typically replies instantly</div>
</div>
</div>

<div className="p-4 space-y-4 bg-white h-64 flex flex-col justify-end">
<div className="flex gap-2">
<div className="bg-zinc-100 text-zinc-600 text-xs p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                                    Hi there! I see your flight to Tokyo is tomorrow. Would you like to check in now?
                                </div>
</div>
<div className="flex gap-2 justify-end">
<div className="bg-zinc-900 text-white text-xs p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                                    Yes, please. Can I get a window seat?
                                </div>
</div>
<div className="flex gap-2">
<div className="bg-zinc-100 text-zinc-600 text-xs p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                                    Checking... 
                                    <div className="h-2"></div>
                                    I found Seat 12A (Window). Confirmed?
                                </div>
</div>
</div>

<div className="p-3 border-t border-zinc-100 flex gap-2">
<div className="flex-1 bg-zinc-50 rounded-full h-8"></div>
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:plain-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-6">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">Zero-Touch Support</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        We deployed an LLM-powered agent on WhatsApp Business API. It handles 85% of tier-1 queries (check-in, baggage limits, gate changes) autonomously, freeing up human agents for complex issues.
                    </p>
<div className="flex items-center gap-4 pt-2">
<div className="px-3 py-1 bg-zinc-100 rounded text-xs font-medium text-zinc-600">WhatsApp API</div>
<div className="px-3 py-1 bg-zinc-100 rounded text-xs font-medium text-zinc-600">OpenAI</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-enter">
<div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon icon="solar:pie-chart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">Predictive Audience Models</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        By integrating first-party booking data with external signals, we built a scoring model that predicts when a past customer is likely to book their next holiday, triggering timely email flows.
                    </p>
</div>
<div className="lg:col-span-7 bg-zinc-900 text-white rounded-2xl p-6 md:p-12 relative overflow-hidden order-1 lg:order-2 shadow-lg">
<div className="flex justify-between items-end gap-2 h-48 w-full max-w-md mx-auto">
<div className="w-full bg-zinc-800 rounded-t-sm h-[30%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
</div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[45%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
</div>
<div className="w-full bg-zinc-700 rounded-t-sm h-[40%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">Q3</div>
</div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[75%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-400">+210%</div>
</div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[90%] relative group shadow-[0_0_15px_rgba(16,185,129,0.4)]">
</div>
</div>
<div className="border-t border-zinc-700 mt-0 w-full max-w-md mx-auto"></div>
<div className="flex justify-between text-xs text-zinc-500 mt-2 max-w-md mx-auto font-mono">
<span>JAN</span>
<span>MAY</span>
<span>SEP</span>
<span>DEC</span>
</div>
</div>
</section>
</div>

<section className="py-12 border-t border-zinc-200 fade-enter" id="results">
<h2 className="text-xl font-semibold text-zinc-900 mb-12">Performance Impact</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-2">210%</div>
<div className="text-sm text-zinc-500">Increase in mobile conversion</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-2">14x</div>
<div className="text-sm text-zinc-500">ROAS on Dynamic Ads</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-2">-40%</div>
<div className="text-sm text-zinc-500">Reduction in support costs</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-2">0.8s</div>
<div className="text-sm text-zinc-500">Average page load time</div>
</div>
</div>
</section>

<section className="bg-zinc-900 rounded-2xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden fade-enter">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-900 opacity-50"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Ready to build your growth system?</h2>
<p className="text-zinc-400 text-lg">We help ambitious brands scale through engineered growth systems and intelligent platforms.</p>
<div className="flex justify-center">
<a className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">
                        Start a Project
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50 py-12">
<div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
<p>© 2024 Growth Systems Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">Twitter</a>
<a className="hover:text-zinc-900" href="#">LinkedIn</a>
<a className="hover:text-zinc-900" href="#">Email</a>
</div>
</div>
</footer>


    </>
  );
}
