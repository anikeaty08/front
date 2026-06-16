import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
blue: '#00A1E0', // Adjusted slightly for Salesforce-adjacent blue
yellow: '#FCBC32',
dark: '#0a0a0a',
light: '#ffffff',
grey: '#f5f5f5'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
slab: ['Roboto Slab', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-brand-light/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="text-2xl font-bold tracking-tight flex items-center gap-1 group" href="#">
<iconify-icon className="text-brand-blue text-3xl" icon="solar:cloud-bolt-linear"></iconify-icon>
<span className="text-black dark:text-white transition-colors">Kompetenza</span>
</a>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-brand-blue transition-colors" href="#problem">The Problem</a>
<a className="hover:text-brand-blue transition-colors" href="#engine">The Engine</a>
<a className="hover:text-brand-blue transition-colors" href="#strategy">Strategy</a>
<a className="hover:text-brand-blue transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none" id="theme-toggle">
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-2-linear"></iconify-icon>
<iconify-icon className="text-xl block dark:hidden" icon="solar:moon-stars-linear"></iconify-icon>
</button>

<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-600 transition-all shadow-sm hover:shadow-md ring-1 ring-brand-blue ring-offset-2 dark:ring-offset-slate-950" href="#cta">
                        Download AE Overview
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-5xl">
<span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 font-semibold text-xs tracking-wide uppercase mb-6">
                    World’s 1st Business-Ready Salesforce
                </span>
<h1 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] dark:text-white font-extrabold text-slate-900 tracking-tighter mb-8">
                    Win More SMB Deals <br className="hidden lg:block"/> Without Upfront <br className="hidden lg:block"/> Implementation Costs
                </h1>
<div className="max-w-3xl border-l-4 border-brand-yellow pl-6 mb-8">
<p className="font-slab text-lg md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        The AI-Powered Revenue Engine That Turns Salesforce Hesitation Into Signed Contracts.
                    </p>
</div>
<div className="flex flex-col gap-2 mb-10">
<p className="font-medium text-slate-500 dark:text-slate-400">Starting at <span className="text-brand-blue font-bold text-xl">$599 per month</span></p>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
                        Instead of selling software plus uncertainty, you present a fully built, AI-powered revenue engine that goes live in 2 to 5 days.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20">
                        Activate Business-Ready Salesforce
                        <iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 dark:bg-transparent dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-all">
                        Download AE Overview
                        <iconify-icon className="text-xl" icon="solar:file-download-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
</section>

<section className="py-12 border-y border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="text-3xl font-bold text-brand-blue tracking-tight mb-1">AI-Powered</div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Included Day One</p>
</div>

<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="text-3xl font-bold text-brand-blue tracking-tight mb-1">2-5 Days</div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Full Deployment</p>
</div>

<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="text-3xl font-bold text-brand-blue tracking-tight mb-1">$599/mo</div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Zero Upfront Cost</p>
</div>

<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="text-3xl font-bold text-brand-blue tracking-tight mb-1">100%</div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Money-Back Guarantee</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white dark:bg-slate-950" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-3xl">
<span className="text-brand-blue font-semibold tracking-wide uppercase text-xs mb-3 block">The Problem</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">Why Salesforce Deals Stall in SMB</h2>
<p className="font-slab text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    The product is not the problem. <strong className="text-slate-900 dark:text-white font-medium">The delivery model is.</strong>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-4xl text-brand-yellow mb-4" icon="solar:bill-list-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Upfront Costs</h3>
<p className="text-slate-500 text-sm">Fear of large upfront implementation invoices ($10k-$50k) before seeing any value.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-4xl text-brand-yellow mb-4" icon="solar:hourglass-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Long Timelines</h3>
<p className="text-slate-500 text-sm">3 to 6 week onboarding timelines mean ROI is delayed and momentum is lost.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-4xl text-brand-yellow mb-4" icon="solar:user-hand-up-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Consultant Dependency</h3>
<p className="text-slate-500 text-sm">Fear of scope creep, hourly billing, and reliance on external consultants.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-4xl text-brand-yellow mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Separated</h3>
<p className="text-slate-500 text-sm">AI often quoted separately as an add-on, making the total deal size intimidating.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 lg:col-span-2">
<iconify-icon className="text-4xl text-brand-yellow mb-4" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Uncertainty Gap</h3>
<p className="text-slate-500 text-sm">They are not rejecting Salesforce. <strong className="text-slate-900 dark:text-white">They are rejecting uncertainty.</strong> When perceived risk drops, deal velocity increases. Business-Ready Salesforce removes the friction that slows momentum.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Replace Phase 1 With Business-Ready Logic</h2>
<p className="text-slate-600 dark:text-slate-400">Instead of asking customers to invest before they see value, let them experience value immediately.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center max-w-5xl mx-auto">

<div className="relative p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:history-linear"></iconify-icon>
                        Traditional Path
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<iconify-icon className="text-red-500 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>$10,000 to $50,000 upfront project</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<iconify-icon className="text-red-500 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>Weeks of discovery &amp; configuration</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<iconify-icon className="text-red-500 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>AI scoped as an add-on</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<iconify-icon className="text-red-500 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>Heavy admin build, ROI delayed</span>
</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl bg-white dark:bg-slate-950 border-2 border-brand-blue shadow-2xl scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        The Shift
                    </div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-blue" icon="solar:rocket-2-linear"></iconify-icon>
                        Business-Ready Salesforce
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
<iconify-icon className="text-brand-blue text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Starting at $599 per month</span>
</li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
<iconify-icon className="text-brand-blue text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>2 to 5 day deployment</span>
</li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
<iconify-icon className="text-brand-blue text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>AI included from Day One</span>
</li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
<iconify-icon className="text-brand-blue text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Fully built revenue workflows</span>
</li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
<iconify-icon className="text-brand-blue text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Ongoing expert execution included</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="engine">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-brand-blue font-semibold tracking-wide uppercase text-xs mb-3 block">Fully Built</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Revenue &amp; Operations Engine</h2>
<p className="mt-4 font-slab text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                    Everything included from Day One. No code. No custom projects. No friction.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="p-8 flex-grow">
<div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 text-slate-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:structure-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core CRM &amp; Sales</h3>
<ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Lead capture and routing</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Pipeline automation</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Proposal workflows</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Automated follow-ups</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Executive dashboards</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="p-8 flex-grow">
<div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center mb-6 text-brand-yellow">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Automation Engine</h3>
<ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div> Smart task automation</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div> Lifecycle workflows</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div> Lead scoring</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div> Renewal automation</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div> Performance tracking</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col h-full bg-brand-blue text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
<div className="p-8 flex-grow">
<div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-2xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">AI Revenue Stack</h3>
<p className="text-xs text-blue-100 mb-6 uppercase tracking-wider font-semibold">Valued at €4,000/mo - Included</p>
<ul className="space-y-2 text-sm text-blue-50 font-medium">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> AI Document Builder</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> AI Proposal Generator</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> AI E-Signature</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Smart Messaging (WhatsApp)</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Intelligent Invoicing</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Predictive analytics</li>
</ul>
</div>
<div className="px-8 py-4 bg-white/10 text-xs font-semibold uppercase tracking-wider text-center">
                        Included in $599 subscription
                    </div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-lg font-bold text-slate-900 dark:text-white">This is not configuration. This is a ready-to-run revenue machine.</p>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950" id="strategy">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-16 text-center">Strategic Advantage</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-8">
<h3 className="text-2xl font-bold text-brand-blue">For the Salesforce AE</h3>
<p className="font-slab text-slate-600 dark:text-slate-400">
                        This is not a service. It is a deal acceleration system. Instead of defending license pricing, you anchor the conversation around a complete AI-powered revenue engine. You move from product seller to growth advisor.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500"><iconify-icon icon="solar:graph-up-linear"></iconify-icon></div>
                            Implementation objection disappears
                        </li>
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon></div>
                            Sales cycles shorten dramatically
                        </li>
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500"><iconify-icon icon="solar:medal-star-linear"></iconify-icon></div>
                            Win rates increase &amp; discount pressure reduces
                        </li>
</ul>
</div>

<div className="space-y-8 lg:pl-12 lg:border-l border-slate-200 dark:border-slate-800">
<h3 className="text-2xl font-bold text-brand-blue">For Salesforce Leadership</h3>
<p className="font-slab text-slate-600 dark:text-slate-400">
                        When time-to-value improves, churn drops. When churn drops, ecosystem value increases.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-blue"><iconify-icon icon="solar:rocket-linear"></iconify-icon></div>
                            Faster SMB deal velocity
                        </li>
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-blue"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
                            Reduced implementation failure risk
                        </li>
<li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-blue"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
                            Stronger positioning vs HubSpot &amp; Zoho
                        </li>
</ul>
</div>
</div>

<div className="mt-20 relative bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-brand-yellow"></div>
<div className="relative z-10">
<span className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-4 block">Real SMB Scenario</span>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Decision Moment</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div>
<h4 className="font-bold text-slate-500 mb-2 text-sm uppercase">Traditional Model</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">$15,000+ upfront, 3-6 week wait, AI quoted separately. ROI is delayed.</p>
</div>
<div>
<h4 className="font-bold text-brand-blue mb-2 text-sm uppercase">Business-Ready Model</h4>
<p className="text-sm text-slate-900 dark:text-white font-medium">$599/mo, AI live in days, No large upfront cost. Revenue automation active immediately.</p>
</div>
</div>
<p className="font-slab italic text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-6">
                        "The customer approves faster because downside risk is minimal and upside impact is immediate. That is how deals close."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">The Difference is Clear</h2>
<div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<th className="p-4 sm:p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Feature</th>
<th className="p-4 sm:p-6 text-sm font-bold text-brand-blue uppercase tracking-wider bg-brand-blue/5">Business-Ready</th>
<th className="p-4 sm:p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Traditional Consulting</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950">
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">Cost Model</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">$599 Subscription</td>
<td className="p-4 sm:p-6 text-slate-500">Large Upfront Project</td>
</tr>
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">Time to Value</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">2 to 5 Days</td>
<td className="p-4 sm:p-6 text-slate-500">3 to 6 Weeks</td>
</tr>
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">AI Capabilities</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">Included Day One</td>
<td className="p-4 sm:p-6 text-slate-500">Add-On Scope</td>
</tr>
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">Guarantee</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">100% Money-Back</td>
<td className="p-4 sm:p-6 text-slate-500">No Guarantee</td>
</tr>
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">Integrations</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">WhatsApp Built-In</td>
<td className="p-4 sm:p-6 text-slate-500">Custom Scope</td>
</tr>
<tr>
<td className="p-4 sm:p-6 font-medium text-slate-900 dark:text-white">Post-Launch</td>
<td className="p-4 sm:p-6 font-bold text-brand-blue bg-brand-blue/5">Ongoing Revenue Support</td>
<td className="p-4 sm:p-6 text-slate-500">Project Ends</td>
</tr>
</tbody>
</table>
</div>
<p className="text-center mt-8 text-slate-500 font-slab">This is no longer software plus uncertainty. It is revenue certainty.</p>
</div>
</section>

<section className="py-24 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-white dark:bg-slate-950 p-10 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark px-4 py-1 text-xs font-bold uppercase">Best Value</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Business-Ready Salesforce</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm text-slate-500">Starting at</span>
<span className="text-5xl font-extrabold text-brand-blue">$599</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                        Predictable. Powerful. Frictionless. The downside is protected, the upside is leveraged.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-blue text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            €4,000/mo AI stack included
                        </li>
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-blue text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Fully automated revenue workflows
                        </li>
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-blue text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Certified Salesforce experts
                        </li>
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-blue text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Deployment in 2-5 days
                        </li>
</ul>
<a className="block w-full text-center py-4 bg-brand-blue text-white rounded-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25" href="#cta">
                        Activate Now
                    </a>
</div>

<div>
<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Risk Reversal Stack</h2>
<div className="space-y-6">

<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-brand-yellow flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Price-Beat Guarantee</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">Bring any official Salesforce partner proposal. We will beat it.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">100% Money-Back Guarantee</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">If value is not clear, there is no financial risk.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Fast Deployment Guarantee</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">Live in 2 to 5 days. Speed approaches immediate.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-16 text-center">Simple. Fast. Powerful.</h2>
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
<div className="space-y-12">

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">01</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Activate Partnership</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed">
                                Align with Kompetenza to start the process.
                            </p>
</div>
</div>

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">02</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Deploy Business-Ready Salesforce</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed">
                                System goes live in 2 to 5 days.
                            </p>
</div>
</div>

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">03</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI &amp; Automation Go Live</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed">
                                Revenue workflows activate instantly.
                            </p>
</div>
</div>

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">04</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Accelerate Growth</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed">
                                Shorter sales cycles. Higher conversions. Stronger retention.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center bg-slate-50 dark:bg-slate-900/50" id="cta">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">Ready to Win More SMB Deals?</h2>
<p className="font-slab text-lg text-slate-600 dark:text-slate-400 mb-6 font-light">
                Stop letting implementation cost stall momentum. Start presenting a complete AI-powered revenue engine with risk removed and value delivered immediately.
            </p>
<p className="text-slate-900 dark:text-white font-semibold mb-10">
                Salesforce is the most powerful CRM platform in the world. <br/>
                Business-Ready Salesforce makes it the easiest one to approve.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25">
                    Activate Business-Ready Salesforce
                </button>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-900 bg-brand-yellow rounded-lg hover:bg-yellow-400 transition-all shadow-md">
                    Book My AE Strategy Session
                </button>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="text-xl font-bold tracking-tight flex items-center gap-1">
<iconify-icon className="text-brand-blue text-2xl" icon="solar:cloud-bolt-linear"></iconify-icon>
<span className="text-black dark:text-white">Kompetenza</span>
</div>
<div className="text-xs text-slate-500">
                        The AI-Powered Revenue Engine for Salesforce.
                    </div>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#engine">The Engine</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">AI Stack</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#">For AEs</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Documentation</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
<p>© 2024 Kompetenza. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-brand-blue" href="#"><iconify-icon className="text-lg" icon="solar:brands-linkedin-linear"></iconify-icon></a>
<a className="hover:text-brand-blue" href="#"><iconify-icon className="text-lg" icon="solar:brands-twitter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
