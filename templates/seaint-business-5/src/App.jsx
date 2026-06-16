import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.async=!0,i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}})();
    


        const demoEl = document.querySelector('#typing-demo');
        if(demoEl) {
            const textStr = "Analyzing growth patterns...";
            let idx = 0;
            const typeLoop = () => {
                if (idx < textStr.length) {
                    demoEl.textContent += textStr.charAt(idx++);
                    setTimeout(typeLoop, 100);
                } else {
                    setTimeout(() => { demoEl.textContent = ''; idx = 0; typeLoop(); }, 2000);
                }
            };
            typeLoop();
        }
    


        (function () {
            const tabs = document.querySelectorAll('.pb-tab');
            const els = {
                title: document.getElementById('pb-title'),
                tagline: document.getElementById('pb-tagline'),
                p1: document.getElementById('pb-p1'),
                p2: document.getElementById('pb-p2'),
                code: document.getElementById('pb-code')
            };
            const data = {
                collab: {
                    title: 'Collaborative Planning',
                    tagline: 'EDIT MODELS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.',
                    p1: 'Edit business models together in real time with live cursors, inline comments and versioned saves.',
                    p2: 'Everyone on the board sees changes immediately so your team can author and run forecasts together.',
                    code: `// Live Business Logic\nconst forecast = Seaint.Model.open("q3-revenue");\n\nforecast.apply("calculate_growth()", { user: "cfo_office" });\nforecast.comment(2, "Adjust for seasonal dip");\nforecast.save("v2.1", "Board meeting prep");`
                },
                templates: {
                    title: 'Smart Templates',
                    tagline: 'REUSABLE MODELS WITH TYPED INPUTS AND SANE DEFAULTS.',
                    p1: 'Publish reusable models with typed inputs and sane defaults so teams can standardize reporting.',
                    p2: 'Validate inputs before execution and stamp every run with immutable parameters for auditing.',
                    code: `// template inputs\ntype Params = { dept: "sales" | "marketing", fy: string }\n\nconst m = Seaint.Template.use<Params>("budget-approval");\nm.run({ dept: "sales", fy: "2025" });`
                },
                safety: {
                    title: 'Compliance & Audit',
                    tagline: 'GUARDRAILS, AUDIT LOGS, AND MULTI-STEP APPROVALS.',
                    p1: 'Protect the organization with guardrails: audit logs, policy checks and multi-step approvals.',
                    p2: 'Require sign-off on sensitive changes and log every decision for compliance.',
                    code: `// compliance check\nconst p = Seaint.Policy("expense-approval");\np.requireApproval({ role: ["VP", "CFO"], min: 2 });\np.auditLog().assert("amount < budgetCap");\np.execute();`
                }
            };
            function setActive(key) {
                const cfg = data[key];
                if(!cfg) return;
                els.title.textContent = cfg.title;
                els.tagline.textContent = cfg.tagline;
                els.p1.textContent = cfg.p1;
                els.p2.textContent = cfg.p2;
                els.code.textContent = cfg.code;
                tabs.forEach(b => {
                    const active = b.getAttribute('data-key') === key;
                    b.classList.toggle('bg-white/[0.06]', active);
                    b.classList.toggle('text-white', active);
                    b.classList.toggle('ring-1', active);
                    b.classList.toggle('ring-white/20', active);
                    b.classList.toggle('text-zinc-300', !active);
                    b.classList.toggle('bg-white/[0.04]', !active);
                });
            }
            tabs.forEach(b => b.addEventListener('click', () => setActive(b.getAttribute('data-key'))));
        })();
    


        (function () {
            const state = { plan: 'business', billing: 'monthly' };
            const plans = {
                business: { name: 'Business', tagline: 'Great for teams launching their first workflows.', priceMonthly: 249, priceAnnual: 2490, cta: 'Get Started', features: ['UP TO 10 USERS', 'BASIC REPORTING', '30-DAY AUDIT LOG', 'EMAIL SUPPORT'] },
                enterprise: { name: 'Enterprise', tagline: 'Built for global teams and production workloads.', priceMonthly: 999, priceAnnual: 9990, cta: 'Contact Sales', features: ['UNLIMITED USERS', 'ADVANCED AI ANALYTICS', 'SSO & COMPLIANCE', 'PRIORITY SUPPORT'] }
            };
            const els = {
                tabs: document.querySelectorAll('.billing-tab'),
                btns: document.querySelectorAll('.plan-select-btn'),
                name: document.getElementById('planName'),
                price: document.getElementById('planPrice'),
                suffix: document.getElementById('planPriceSuffix'),
                tagline: document.getElementById('planTagline'),
                list: document.getElementById('featureList'),
                cta: document.getElementById('ctaBtn')
            };
            function render() {
                const cfg = plans[state.plan] || plans.business;
                els.name.textContent = cfg.name;
                els.tagline.textContent = cfg.tagline.toUpperCase();
                els.price.textContent = '$' + (state.billing === 'monthly' ? cfg.priceMonthly : cfg.priceAnnual);
                els.suffix.textContent = state.billing === 'monthly' ? '/month' : '/yr';
                els.cta.textContent = cfg.cta;
                els.list.innerHTML = cfg.features.map(f => `<li class="flex items-start gap-2"><i data-lucide="check" class="mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]"></i><span>${f}</span></li>`).join('');
                if(window.lucide) lucide.createIcons();
                els.btns.forEach(b => {
                    const active = b.getAttribute('data-plan-select') === state.plan;
                    b.classList.toggle('bg-white/[0.08]', active);
                    b.classList.toggle('ring-1', active);
                    b.classList.toggle('ring-white/20', active);
                });
                els.tabs.forEach(t => {
                    const active = t.getAttribute('data-billing') === state.billing;
                    t.classList.toggle('text-white', active);
                    t.classList.toggle('bg-white/[0.08]', active);
                    t.classList.toggle('ring-1', active);
                    t.classList.toggle('text-zinc-300', !active);
                });
            }
            els.btns.forEach(b => b.addEventListener('click', () => { state.plan = b.getAttribute('data-plan-select'); render(); }));
            els.tabs.forEach(t => t.addEventListener('click', () => { state.billing = t.getAttribute('data-billing'); render(); }));
            render();
        })();
    


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 bottom-0 unicorn-stack unicorn-mask pointer-events-none z-[-10]">
<div className="absolute inset-0 w-full h-full" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>


<header className="sticky top-4 z-30 animate-enter px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
<div className="flex items-center justify-between rounded-2xl border border-[#ffffff]/10 bg-[#000000] p-3">
<div className="flex items-center gap-3 pl-2">

<a className="flex items-center gap-2 text-white" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-sm">S</div>
<span className="font-bold tracking-widest text-sm uppercase">SEAINT</span>
</a>
</div>
<nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
<a className="transition-colors hover:text-white" href="#">Platform</a>
<a className="transition-colors hover:text-white" href="#features">Solutions</a>
<a className="transition-colors hover:text-white" href="#pricing">Enterprise</a>
<a className="transition-colors hover:text-white" href="#">Company</a>
</nav>
<div className="flex items-center justify-center gap-3">
<a className="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-5 py-3 text-sm font-medium text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-0 transition-all duration-300 hover:scale-105 hover:border-slate-400/40 hover:bg-gradient-to-br hover:from-slate-500/30 hover:to-slate-500/20 hover:text-white" href="#" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
                            Book Demo
                            <svg className="lucide lucide-calendar h-4 w-4 stroke-[1.5] text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="animate-enter-delay-2 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:pt-24 sm:pb-28 lg:pt-40 lg:pb-0 max-w-7xl mr-auto ml-auto pt-16 pb-20">

<div className="pointer-events-none relative select-none">
<span className="float-cursor float-chip-1 absolute left-[55%] -top-12 -translate-x-1/2 -translate-y-8 sm:-top-16">
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Revenue +24%</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
<span className="float-cursor float-chip-2 absolute right-[2%] top-12 hidden translate-x-8 translate-y-12 md:block">
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Team Efficiency</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
<span className="float-cursor float-chip-3 absolute left-[10%] bottom-6 hidden sm:block">
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Audit Passed</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
</div>

<div className="text-center">
<h1 className="mx-auto max-w-5xl text-4xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
<span className="text-white/95">Scale your</span>
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md bg-slate-500/20 blur-2xl"></span>
<span className="relative">
<span className="relative z-10">
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md ring-2 ring-slate-400/50 bg-gradient-to-br from-white/0 via-white/10 to-white/0"></span>
<span className="px-2">Business</span>
</span>
</span>
</span>
</span>
<span className="text-white/95">Logic.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                        The operating system for modern enterprises. Unify your data, automate complex workflows, and drive decision-making with SEAINT.
                    </p>

<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

<div className="btn-wrapper" style={{-DotSize: '8px', -LineWeight: '1px', -LineDistance: '0.8rem 1rem', -AnimationSpeed: '0.35s', -DotColor: '#fffa', -LineColor: '#fffa', -GridColor: '#fff3'}}>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn bg-[#ffffff]">
<span className="btn-text text-neutral-900">Start Integration</span>
<svg className="btn-svg text-neutral-900" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="m12 5 7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
<a className="relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-5 py-3 text-base font-medium text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-0 transition-all duration-300 hover:scale-105 hover:border-slate-400/40 hover:bg-gradient-to-br hover:from-slate-500/30 hover:to-slate-500/20 hover:text-white" href="#" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
                            Talk to Sales
                            <svg className="lucide lucide-message-square h-4 w-4 fill-current stroke-[1.5]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</a>
</div>
</div>

<div className="relative mt-24 mb-24 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-slate-500/50"></span>
<span className="h-3 w-3 rounded-full bg-slate-500/50"></span>
<span className="h-3 w-3 rounded-full bg-slate-500/50"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden border-r border-white/10 bg-black/30 p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-briefcase h-3.5 w-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Operations
                                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">
<div className="flex gap-1 mb-3">
<button className="rounded bg-white px-2 py-1 text-xs font-medium text-neutral-900">Business</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Finance</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">HR</button>
</div>
<div className="flex-1 rounded-lg bg-white/5 p-2">
<div className="mb-2 text-xs text-slate-400">Active Workflows</div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1">
<svg className="lucide lucide-pie-chart h-3.5 w-3.5 text-white" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> Q3 Revenue Forecast
                                            <div className="ml-auto text-[9px] text-white/70">Live</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-users h-3.5 w-3.5 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Payroll Approval
                                            <div className="ml-auto text-[9px] text-white/60">Pending</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-globe h-3.5 w-3.5 text-slate-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Global Compliance
                                            <div className="ml-auto text-[9px] text-white/60">Auto</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 opacity-60">
<svg className="lucide lucide-archive h-3.5 w-3.5 text-slate-500" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg> Legacy Audit
                                            <div className="ml-auto text-[9px] text-slate-500">Archived</div>
</li>
</ul>
</div>

<div className="mt-3 rounded-lg bg-white/5 p-2">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up h-4 w-4 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.5 8.5-5-5L2 17"></path><path d="M16 7h6v6"></path></svg>
<span className="text-xs font-medium">Business Health</span>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-white/5">
<div className="h-2 w-3 rounded-sm bg-white"></div>
<span className="text-[10px] text-slate-300">Margin</span>
<div className="ml-auto text-[10px] text-white/70">24.5%</div>
</div>
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-white/5">
<div className="h-2 w-5 rounded-sm bg-white/60"></div>
<span className="text-[10px] text-slate-300">Growth</span>
<div className="ml-auto text-[10px] text-white/60">+12%</div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative bg-black/20 md:col-span-6">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<span>quarterly_revenue.model</span>
<div className="text-slate-500">•</div>
<span className="text-slate-400">Finance Team</span>
<div className="ml-auto flex items-center gap-1">
<span className="text-xs text-slate-400">Synced 2m ago</span>
<div className="mx-2 h-4 w-px bg-white/10"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="lucide lucide-history h-3.5 w-3.5" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col items-center justify-between gap-2 border-b border-white/10 bg-black/10 px-3 py-2 sm:flex-row">
<div className="flex w-full items-center gap-2 sm:w-auto">
<button className="rounded border border-white/10 bg-white p-1 text-neutral-900 hover:bg-zinc-100">
<svg className="lucide lucide-file-spreadsheet h-3.5 w-3.5" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</button>
<button className="rounded border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex flex-1 items-center gap-1">
<span className="text-xs text-slate-400">Projection:</span>
<button className="inline-flex items-center justify-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-white/10">FY-2025</button>
</div>
</div>
</div>

<div className="p-4 sm:p-6">
<div className="grid min-h-[400px] grid-rows-[auto,1fr,auto,auto] gap-4">

<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-slate-400">Collaborators</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-blue-500 ring-2 ring-white/20"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-white/10 text-xs text-white/80 ring-2 ring-white/20">+3</div>
</div>
<div className="mt-2 text-xs text-white/70">CFO, VP Sales viewing</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-slate-400">Projected ARR</span>
</div>
<div className="text-2xl font-medium text-white">$4.2M</div>
<div className="mt-1 text-xs text-white/70">On Track • updated now</div>
</div>
</div>

<div className="min-h-0 rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Business Logic</h3>
<span className="text-xs text-slate-400">Python</span>
</div>
<div className="relative max-h-[250px] overflow-auto rounded-lg bg-black/60 p-4 font-mono text-sm text-white/90">
<pre className="whitespace-pre-wrap text-xs sm:text-sm"># Calculate Quarterly Projections
import seaint.business as biz

def forecast_q3(current_mrr, growth_rate):
    projection = biz.models.linear(current_mrr, growth_rate)
    
    if projection &gt; biz.targets.get("Q3"):
        biz.alerts.notify_exec("Targets Exceeded", priority="high")
    
    return projection.export_report()</pre>
</div>
</div>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
<button className="rounded-lg border border-white/10 bg-white/10 p-2 text-center backdrop-blur hover:bg-white/20 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Generate</div>
<div className="text-[10px] text-slate-400">Report</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Audit</div>
<div className="text-[10px] text-slate-400">Validate</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Approve</div>
<div className="text-[10px] text-slate-400">Sign-off</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Export</div>
<div className="text-[10px] text-slate-400">PDF/XLS</div>
</button>
</div>
</div>
</div>
</main>

<aside className="hidden border-l border-white/10 bg-black/30 p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sliders h-3.5 w-3.5" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="1" x2="7" y1="14" y2="14"></line><line x1="9" x2="15" y1="8" y2="8"></line><line x1="17" x2="23" y1="16" y2="16"></line></svg> Parameters
                                </div>
</div>

<div className="mb-3 flex gap-1">
<button className="rounded bg-white px-2 py-1 text-xs font-medium text-neutral-900">Inputs</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Access</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Audit</button>
</div>
<div className="h-[480px] overflow-y-auto space-y-3">
<div className="rounded-lg bg-white/5 p-3 space-y-3">
<div className="mb-2 text-xs text-slate-300">Variables</div>
<div className="space-y-2 text-[10px]">
<div>
<div className="mb-1 text-slate-400">Department</div>
<select className="w-full rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
<option>Sales (NA)</option>
<option>Marketing</option>
<option>Engineering</option>
</select>
</div>
<div>
<div className="mb-1 text-slate-400">Fiscal Year</div>
<input className="w-full rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-300" type="text" value="FY2025"/>
</div>
</div>
</div>
<div className="rounded-lg bg-white/5 p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Recent Approvals</span>
<span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/70">24h</span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300">Pending</span>
<span className="text-[10px] text-slate-400">4 items</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-white/10">
<div className="h-2 rounded-full bg-white" style={{width: '35%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-zinc-100">Run Model</button>
<button className="rounded border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10">Verify</button>
</div>
</aside>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 top-24 -z-0 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-slate-500/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8" id="features">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">

<div className="flex flex-col p-6 pt-6 sm:p-10">
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl">
                        Intelligence for<span className="block">every department</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-zinc-300/90 md:text-lg">
                        Unified tools designed to accelerate business workflows and unlock enterprise potential.
                    </p>
<div className="mt-10 space-y-6">

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6" id="card-ai">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-brain-circuit h-4 w-4" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.97-3.284"></path><path d="M17.97 14.716A4 4 0 0 1 16 18"></path></svg>
<span className="font-medium">Strategic AI</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="flex-1">
<p className="mb-2 text-sm text-white/90">Analyze market trends</p>
<div className="h-8 font-mono text-xs text-white/60" id="typing-demo">Forecasting demand...Optimizing supply...</div>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Executive Assistant</h3>
<p className="mt-1.5 text-sm text-white/70">Let AI handle the data crunching. Generate reports, refine strategy, and boost revenue.</p>
</section>

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium">KPI Tracking</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="mb-1 text-xs text-white/60">Revenue</p>
<p className="text-2xl font-semibold text-white">$4.2M</p>
<p className="mt-1 text-xs text-white/70">+12% YoY</p>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="mb-1 text-xs text-white/60">Efficiency</p>
<p className="text-2xl font-semibold text-white">98%</p>
<p className="mt-1 text-xs text-white/70">Operational</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Advanced Analytics</h3>
<p className="mt-1.5 text-sm text-white/70">Track your organization with detailed insights. Make data-driven decisions.</p>
</section>
</div>
</div>

<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-start-2">

<section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-building-2 h-4 w-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-medium">Enterprise Governance</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-zinc-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-neutral-500 ring-2 ring-white/20"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-white/10 text-xs text-white/80 ring-2 ring-white/20">+12</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full rounded-full bg-white/60" style={{width: '88%'}}></div>
</div>
<p className="text-xs text-white/60">Compliance checks passed</p>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Enterprise Governance</h3>
<p className="mt-1.5 text-sm text-white/70">Manage teams and permissions seamlessly. Audit logs and role-based access control built-in.</p>
</section>

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium">Workflow Automation</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/60"></div>
<span>Invoicing auto-pilot</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/50"></div>
<span>Contract generation sync</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Process Automation</h3>
<p className="mt-1.5 text-sm text-white/70">Automate repetitive business tasks and focus on strategy.</p>
</section>
</div>
</div>
</div>
</section>


<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"></div>
<div className="mb-10 p-6 pb-0 pt-6 sm:p-10">
<h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">Business Logic</h2>
<p className="mt-4 max-w-2xl text-lg text-white/70">Build, test and run safe workflows that turn data into decisions.</p>
</div>
<div className="relative mb-10 px-6 sm:px-10">
<div className="flex w-max gap-3 md:w-auto" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/20" data-key="collab">Collaborative Planning</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white" data-key="templates">Smart Templates</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white" data-key="safety">Compliance &amp; Audit</button>
</div>
</div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="p-6 pt-6 sm:p-10">
<div className="max-w-xl">
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-2xl" id="pb-title">Collaborative Planning</h3>
<p className="mb-4 text-[12px] uppercase tracking-tight text-zinc-200" id="pb-tagline">EDIT MODELS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.</p>
<p className="text-sm leading-relaxed text-white/80" id="pb-p1">Edit business models together in real time with live cursors, inline comments and versioned saves.</p>
<p className="mt-4 text-sm leading-relaxed text-white/80" id="pb-p2">Everyone on the board sees changes immediately so your team can author and run forecasts together.</p>
<a className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-neutral-900 shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)] ring-1 ring-white/20 transition hover:bg-zinc-100" href="#" id="pb-cta">
                            Learn more
                            <svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="p-6 pt-0 sm:p-10">
<div className="relative">
<div className="relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] px-4 py-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
</div>
<div className="flex items-center gap-2 text-[12px] text-zinc-300">
<svg className="lucide lucide-file-spreadsheet h-[15px] w-[15px]" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg> quarterly_forecast.model
                                </div>
</div>
<div className="relative">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 opacity-[0.10]"></div>
<pre className="whitespace-pre-wrap p-5 font-mono text-[12px] leading-relaxed text-white/80 md:text-[13px]" id="pb-code">// Live Business Logic
const forecast = Seaint.Model.open("q3-revenue");

forecast.apply("calculate_growth()", { user: "cfo_office" });
forecast.comment(2, "Adjust for seasonal dip");
forecast.save("v2.1", "Board meeting prep");</pre>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-2xl"></div>
</div>
</div>
</div>
</div>
</section>


<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>
<div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
<div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
<div className="relative z-20 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 text-center">

<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]">
<svg className="lucide lucide-mic h-6 w-6 text-white" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line><line x1="8" x2="16" y1="22" y2="22"></line></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Talk to your Data
                </h2>
<p className="mt-4 max-w-xl text-base text-zinc-300 md:text-lg">
                    Experience real-time enterprise intelligence. Ask questions, generate reports, and control workflows using natural voice commands.
                </p>

<div className="my-10 flex h-16 items-center justify-center gap-1.5">
<div className="audio-bar w-1.5 h-8 rounded-full bg-white/40"></div>
<div className="audio-bar w-1.5 h-12 rounded-full bg-white/60"></div>
<div className="audio-bar w-1.5 h-6 rounded-full bg-white/40"></div>
<div className="audio-bar w-1.5 h-10 rounded-full bg-white/80"></div>
<div className="audio-bar w-1.5 h-14 rounded-full bg-white"></div>
<div className="audio-bar w-1.5 h-9 rounded-full bg-white/80"></div>
<div className="audio-bar w-1.5 h-5 rounded-full bg-white/40"></div>
<div className="audio-bar w-1.5 h-11 rounded-full bg-white/60"></div>
<div className="audio-bar w-1.5 h-7 rounded-full bg-white/40"></div>
</div>
<a className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-medium text-neutral-900 shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-zinc-100 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black" href="https://seaint-voice-jlt3nm40e-seaints-projects.vercel.app" target="_blank">
                    Try Voice Agent
                    <svg className="lucide lucide-audio-lines h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="audio-lines" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>
</a>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8" id="pricing">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"></div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="flex flex-col p-6 pt-6 sm:p-10">
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl">
                        Simple pricing<span className="block">for every stage</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-zinc-300/90 md:text-lg">
                        Pick a plan today and switch anytime. Clear value across Business and Enterprise.
                    </p>
<div className="mt-6">
<div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-1 ring-1 ring-white/10">
<button className="billing-tab rounded-lg bg-white/[0.08] px-3 py-1.5 text-[11px] uppercase tracking-tight text-white ring-1 ring-white/20 transition" data-billing="monthly">Monthly</button>
<button className="billing-tab rounded-lg px-3 py-1.5 text-[11px] uppercase tracking-tight text-zinc-300 transition hover:text-white" data-billing="annual">Annually</button>
</div>
</div>
<div className="mt-10 space-y-3">
<button className="plan-select-btn group flex w-full items-center justify-between rounded-2xl bg-gradient-to-br from-white/10 to-white/0 bg-white/[0.08] p-5 text-left ring-1 ring-white/20 transition hover:bg-white/[0.07]" data-plan-select="business" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div>
<p className="text-lg font-semibold tracking-tight text-white">Business</p>
<p className="mt-1 text-[12px] uppercase tracking-tight text-zinc-300">Launch fast, scale faster.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-200 ring-1 ring-white/10 transition group-hover:bg-white/10">
<svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="plan-select-btn group flex w-full items-center justify-between rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-5 text-left ring-0 transition hover:bg-white/[0.07]" data-plan-select="enterprise" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div>
<p className="text-lg font-semibold tracking-tight text-white">Enterprise</p>
<p className="mt-1 text-[12px] uppercase tracking-tight text-zinc-300">Global compliance &amp; security.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 transition group-hover:bg-white/10 group-hover:text-zinc-100">
<svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
<div className="relative mt-8 mb-8 ml-8 mr-8 flex max-w-xl flex-col gap-6 rounded-2xl bg-gradient-to-br from-white/0 via-white/10 to-white/0 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{background: 'radial-gradient(900px 360px at 20% -10%, rgba(255,255,255,0.12) 15%, transparent 60%)'}}></div>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-left" id="planName">Business</h3>
</div>
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
<div className="flex items-end justify-center gap-2 sm:justify-start">
<span className="text-6xl tracking-tight text-white" id="planPrice">$249</span>
<span className="mb-2 text-sm text-zinc-300" id="planPriceSuffix">/month</span>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-center text-[12px] uppercase tracking-tight text-zinc-200 sm:text-left" id="planTagline">GREAT FOR TEAMS LAUNCHING THEIR FIRST WORKFLOWS.</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-6" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<ul className="space-y-3 text-sm text-zinc-100" id="featureList"><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>UP TO 10 USERS</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>BASIC REPORTING</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>30-DAY AUDIT LOG</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>EMAIL SUPPORT</span></li></ul>
<div className="mt-6">
<a className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-neutral-900 shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)] ring-1 ring-white/20 transition hover:bg-zinc-100" href="#" id="ctaBtn">Get Started</a>
</div>
</div>
</div>
</div>
</div>
</section>


<div className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8">
<div className="relative mt-6 overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
</div>
<div className="relative mx-auto flex flex-col items-center justify-center px-8 pt-16 pb-16 text-center sm:py-16 md:px-8">
<div className="w-full max-w-7xl">
<div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="flex flex-col items-start">
<a className="flex items-center gap-2 text-white mb-4" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-sm">S</div>
<span className="font-bold tracking-widest text-sm uppercase">SEAINT</span>
</a>
<p className="mb-6 text-left text-sm leading-relaxed text-zinc-400">The operating system for modern business. Scale faster and smarter with SEAINT.</p>
<div className="flex items-center gap-3">
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10" href="#"><svg className="lucide lucide-twitter h-[18px] w-[18px]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10" href="#"><svg className="lucide lucide-linkedin h-[18px] w-[18px]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Intelligence</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Workflows</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Enterprise</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Documentation</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">API Reference</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Status</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">About</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
<p className="text-sm text-zinc-500">© 2025 Seaint Business Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Privacy</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
