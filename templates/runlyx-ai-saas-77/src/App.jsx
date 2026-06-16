import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.async=!0,i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}})();
    


        const demoEl = document.querySelector('#typing-demo');
        if(demoEl) {
            const textStr = "Building the future...";
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
                    title: 'Real-time collaboration',
                    tagline: 'EDIT SCRIPTS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.',
                    p1: 'Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.',
                    p2: 'Everyone on call sees changes immediately so your team can author and run fixes together during an incident.',
                    code: `// shared live script\nconst s = Runlyx.Script.open("recover-workers");\n\ns.apply("restartWorkers()", { user: "jordan" });\ns.comment(2, "Check CPU before restart");\ns.save("v1.2.1", "Add safety check");`
                },
                templates: {
                    title: 'Parameterized templates',
                    tagline: 'REUSABLE PLAYBOOKS WITH TYPED INPUTS AND SANE DEFAULTS.',
                    p1: 'Publish reusable playbooks with typed inputs and sane defaults so teams can standardize fixes.',
                    p2: 'Validate inputs before execution and stamp every run with immutable parameters for auditing.',
                    code: `// template inputs\ntype Params = { service: "api" | "worker", region: string }\n\nconst s = Runlyx.Template.use<Params>("scale-service");\ns.run({ service: "worker", region: "us-east-1" });`
                },
                safety: {
                    title: 'Safety and approvals',
                    tagline: 'GUARDRAILS, DRY RUNS, AND MULTI-STEP APPROVALS.',
                    p1: 'Protect production with guardrails: dry runs, blast-radius checks and multi-step approvals.',
                    p2: 'Require reviewers on sensitive playbooks and log every decision for compliance.',
                    code: `// safety first\nconst p = Runlyx.Playbook("db-failover");\np.requireApproval({ teams: ["SRE"], min: 2 });\np.dryRun().assert("replicasHealthy > 2");\np.execute();`
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
            const state = { plan: 'starter', billing: 'monthly' };
            const plans = {
                starter: { name: 'Starter', tagline: 'Great for small teams launching their first workflows.', priceMonthly: 19, priceAnnual: 190, cta: 'Get Started', features: ['UP TO 5 PROJECTS', 'BASIC AUTOMATIONS', '30-DAY RUN HISTORY', 'EMAIL SUPPORT'] },
                pro: { name: 'Pro', tagline: 'Built for growing teams and production workloads.', priceMonthly: 49, priceAnnual: 490, cta: 'Upgrade to Pro', features: ['UP TO 50 PROJECTS', 'ADVANCED AUTOMATIONS', 'PRIORITY QUEUING', 'PRIORITY SUPPORT'] }
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
                const cfg = plans[state.plan] || plans.starter;
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
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[50px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca6ac371-d12a-4d8e-ba2f-3d7f7af32834_320w.png)] bg-cover rounded invert" href="#"></a>
</div>
<nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
<a className="transition-colors hover:text-white" href="#">About</a>
<a className="transition-colors hover:text-white" href="#features">Features</a>
<a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-white" href="#">Blog</a>
<a className="transition-colors hover:text-white" href="#">Changelog</a>
</nav>
<div className="flex items-center justify-center gap-3">
<a className="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-5 py-3 text-sm font-medium text-white/90 shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-0 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]" href="#" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
                            Watch Demo
                            <svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5] text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">AI Suggestion</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
<span className="float-cursor float-chip-2 absolute right-[2%] top-12 hidden translate-x-8 translate-y-12 md:block">
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Smart Edit</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
<span className="float-cursor float-chip-3 absolute left-[10%] bottom-6 hidden sm:block">
<span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Auto Optimization</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
</span>
</div>

<div className="text-center">
<h1 className="mx-auto max-w-5xl text-4xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
<span className="text-white/95">Create faster.</span>
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md bg-blue-500/30 blur-2xl"></span>
<span className="relative">
<span className="relative z-10">
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md ring-2 ring-blue-400/70 bg-gradient-to-br from-white/0 via-white/10 to-white/0"></span>
<span className="px-2">Build</span>
</span>
</span>
</span>
</span>
<span className="text-white/95">smarter.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                        Boost your productivity with AI-powered tools that write, design, and organize — all in one app.
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
<span className="btn-text text-neutral-900">Start Creating</span>
<svg className="btn-svg text-neutral-900" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="m12 5 7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
<a className="relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-5 py-3 text-base font-medium text-white/90 shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-0 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]" href="#" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
                            Watch Demo
                            <svg className="lucide lucide-play h-4 w-4 fill-current stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>

<div className="relative mt-24 mb-24 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden border-r border-white/10 bg-black/30 p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-library h-3.5 w-3.5" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg> Playbooks
                                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">
<div className="flex gap-1 mb-3">
<button className="rounded bg-white px-2 py-1 text-xs font-medium text-neutral-900">Active</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Draft</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Archive</button>
</div>
<div className="flex-1 rounded-lg bg-white/5 p-2">
<div className="mb-2 text-xs text-slate-400">Active Playbooks</div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1">
<svg className="lucide lucide-circle-check h-3.5 w-3.5 text-white" data-lucide="circle-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> DB Failover Script
                                            <div className="ml-auto text-[9px] text-white/70">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-activity h-3.5 w-3.5 text-cyan-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Scale Workers
                                            <div className="ml-auto text-[9px] text-white/60">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-rotate-cw h-3.5 w-3.5 text-white/80" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg> Restart Service
                                            <div className="ml-auto text-[9px] text-white/60">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 opacity-60">
<svg className="lucide lucide-undo-2 h-3.5 w-3.5 text-slate-500" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg> Deploy Rollback
                                            <div className="ml-auto text-[9px] text-slate-500">Paused</div>
</li>
</ul>
</div>

<div className="mt-3 rounded-lg bg-white/5 p-2">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bar-chart-2 h-4 w-4 text-white" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-xs font-medium">Execution Stats</span>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-white/5">
<div className="h-2 w-3 rounded-sm bg-white"></div>
<span className="text-[10px] text-slate-300">Success Rate</span>
<div className="ml-auto text-[10px] text-white/70">98.5%</div>
</div>
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-white/5">
<div className="h-2 w-5 rounded-sm bg-white/60"></div>
<span className="text-[10px] text-slate-300">Avg Duration</span>
<div className="ml-auto text-[10px] text-white/60">2.3s</div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative bg-black/20 md:col-span-6">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<span>recover-workers.playbook</span>
<div className="text-slate-500">•</div>
<span className="text-slate-400">Live editing</span>
<div className="ml-auto flex items-center gap-1">
<span className="text-xs text-slate-400">Saved 1m ago</span>
<div className="mx-2 h-4 w-px bg-white/10"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-col items-center justify-between gap-2 border-b border-white/10 bg-black/10 px-3 py-2 sm:flex-row">
<div className="flex w-full items-center gap-2 sm:w-auto">
<button className="rounded border border-white/10 bg-white p-1 text-neutral-900 hover:bg-zinc-100">
<svg className="lucide lucide-code h-3.5 w-3.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</button>
<button className="rounded border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex flex-1 items-center gap-1">
<span className="text-xs text-slate-400">Version:</span>
<button className="inline-flex items-center justify-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-white/10">v1.2.1</button>
</div>
</div>
</div>

<div className="p-4 sm:p-6">
<div className="grid min-h-[400px] grid-rows-[auto,1fr,auto,auto] gap-4">

<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-slate-400">Active Editors</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-purple-500 ring-2 ring-white/20"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-white/10 text-xs text-white/80 ring-2 ring-white/20">+1</div>
</div>
<div className="mt-2 text-xs text-white/70">3 people editing</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-slate-400">Last Execution</span>
</div>
<div className="text-2xl font-medium text-white">2.4s</div>
<div className="mt-1 text-xs text-white/70">Success • 2m ago</div>
</div>
</div>

<div className="min-h-0 rounded-xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur xl:bg-black/10">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Playbook Script</h3>
<span className="text-xs text-slate-400">TypeScript</span>
</div>
<div className="relative max-h-[250px] overflow-auto rounded-lg bg-black/60 p-4 font-mono text-sm text-white/90">
<pre className="whitespace-pre-wrap text-xs sm:text-sm">// shared live script
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "jordan" });
s.comment(2, "Check CPU before restart");
s.save("v1.2.1", "Add safety check");</pre>
</div>
</div>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
<button className="rounded-lg border border-white/10 bg-white/10 p-2 text-center backdrop-blur hover:bg-white/20 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Run</div>
<div className="text-[10px] text-slate-400">Execute</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Test</div>
<div className="text-[10px] text-slate-400">Dry Run</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Share</div>
<div className="text-[10px] text-slate-400">Collaborate</div>
</button>
<button className="rounded-lg border border-white/10 bg-black/40 p-2 text-center backdrop-blur hover:bg-white/10 transition xl:bg-black/10">
<div className="text-sm font-medium text-white">Export</div>
<div className="text-[10px] text-slate-400">Download</div>
</button>
</div>
</div>
</div>
</main>

<aside className="hidden border-l border-white/10 bg-black/30 p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg> Execution
                                </div>
</div>

<div className="mb-3 flex gap-1">
<button className="rounded bg-white px-2 py-1 text-xs font-medium text-neutral-900">Params</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Safety</button>
<button className="rounded bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10">Triggers</button>
</div>
<div className="h-[480px] overflow-y-auto space-y-3">
<div className="rounded-lg bg-white/5 p-3 space-y-3">
<div className="mb-2 text-xs text-slate-300">Input Parameters</div>
<div className="space-y-2 text-[10px]">
<div>
<div className="mb-1 text-slate-400">Service Name</div>
<input className="w-full rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-300" type="text" value="worker"/>
</div>
<div>
<div className="mb-1 text-slate-400">Region</div>
<select className="w-full rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
<option>us-east-1</option>
<option>us-west-2</option>
</select>
</div>
</div>
</div>
<div className="rounded-lg bg-white/5 p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Recent Executions</span>
<span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/70">24h</span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300">Today</span>
<span className="text-[10px] text-slate-400">8 runs</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-white/10">
<div className="h-2 rounded-full bg-white" style={{width: '87%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-zinc-100">Run Script</button>
<button className="rounded border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10">Test</button>
</div>
</aside>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 top-24 -z-0 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl"></div>
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
                        Everything you need<span className="block">to build smarter</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-zinc-300/90 md:text-lg">
                        AI-powered tools designed to accelerate your workflow and unlock your creative potential.
                    </p>
<div className="mt-10 space-y-6">

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6" id="card-ai">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-medium">AI Writing Assistant</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="flex-1">
<p className="mb-2 text-sm text-white/90">Generate content instantly</p>
<div className="h-8 font-mono text-xs text-white/60" id="typing-demo">Building the future...Building the future...</div>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Smart AI Assistant</h3>
<p className="mt-1.5 text-sm text-white/70">Let AI handle the heavy lifting. Generate content, refine ideas, and boost productivity.</p>
</section>

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium">Performance Insights</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="mb-1 text-xs text-white/60">Projects</p>
<p className="text-2xl font-semibold text-white">142</p>
<p className="mt-1 text-xs text-white/70">+12% this week</p>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="mb-1 text-xs text-white/60">Efficiency</p>
<p className="text-2xl font-semibold text-white">94%</p>
<p className="mt-1 text-xs text-white/70">+8% improvement</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Advanced Analytics</h3>
<p className="mt-1.5 text-sm text-white/70">Track your progress with detailed insights. Make data-driven decisions.</p>
</section>
</div>
</div>

<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-start-2">

<section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Team Collaboration</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-pink-500 ring-2 ring-white/20"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-cyan-500 ring-2 ring-white/20"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-white/10 text-xs text-white/80 ring-2 ring-white/20">+5</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full rounded-full bg-white/60" style={{width: '68%'}}></div>
</div>
<p className="text-xs text-white/60">8 team members active</p>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Real-Time Collaboration</h3>
<p className="mt-1.5 text-sm text-white/70">Work together seamlessly with your team. Share, edit, and create in real-time.</p>
</section>

<section className="group relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-white/80">
<svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium">Smart Workflows</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/60"></div>
<span>Auto-save enabled</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/50"></div>
<span>Cloud sync active</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">Workflow Automation</h3>
<p className="mt-1.5 text-sm text-white/70">Automate repetitive tasks and focus on what matters.</p>
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
<h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">Automation playbooks</h2>
<p className="mt-4 max-w-2xl text-lg text-white/70">Build, test and run safe automations that turn alerts into fixes.</p>
</div>
<div className="relative mb-10 px-6 sm:px-10">
<div className="flex w-max gap-3 md:w-auto" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/20" data-key="collab">Real-time collaboration</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white" data-key="templates">Parameterized templates</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white" data-key="safety">Safety and approvals</button>
</div>
</div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="p-6 pt-6 sm:p-10">
<div className="max-w-xl">
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-2xl" id="pb-title">Real-time collaboration</h3>
<p className="mb-4 text-[12px] uppercase tracking-tight text-zinc-200" id="pb-tagline">Edit scripts together with live cursors and versioned saves.</p>
<p className="text-sm leading-relaxed text-white/80" id="pb-p1">Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.</p>
<p className="mt-4 text-sm leading-relaxed text-white/80" id="pb-p2">Everyone on call sees changes immediately so your team can author and run fixes together during an incident.</p>
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
<svg className="lucide lucide-file-code-2 h-[15px] w-[15px]" data-lucide="file-code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m5 16-3 3 3 3"></path><path d="m9 22 3-3-3-3"></path></svg> recover-workers.playbook
                                </div>
</div>
<div className="relative">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 opacity-[0.10]"></div>
<pre className="whitespace-pre-wrap p-5 font-mono text-[12px] leading-relaxed text-white/80 md:text-[13px]" id="pb-code">// shared live script
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "jordan" });
s.comment(2, "Check CPU before restart");
s.save("v1.2.1", "Add safety check");</pre>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-2xl"></div>
</div>
</div>
</div>
</div>
</section>


<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8" id="pricing">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"></div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="flex flex-col p-6 pt-6 sm:p-10">
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl">
                        Simple pricing<span className="block">that grows with you</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-zinc-300/90 md:text-lg">
                        Pick a plan today and switch anytime. Clear value across Starter, Pro, and Enterprise.
                    </p>
<div className="mt-6">
<div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-1 ring-1 ring-white/10">
<button className="billing-tab rounded-lg bg-white/[0.08] px-3 py-1.5 text-[11px] uppercase tracking-tight text-white ring-1 ring-white/20 transition" data-billing="monthly">Monthly</button>
<button className="billing-tab rounded-lg px-3 py-1.5 text-[11px] uppercase tracking-tight text-zinc-300 transition hover:text-white" data-billing="annual">Annually</button>
</div>
</div>
<div className="mt-10 space-y-3">
<button className="plan-select-btn group flex w-full items-center justify-between rounded-2xl bg-gradient-to-br from-white/10 to-white/0 bg-white/[0.08] p-5 text-left ring-1 ring-white/20 transition hover:bg-white/[0.07]" data-plan-select="starter" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div>
<p className="text-lg font-semibold tracking-tight text-white">Starter</p>
<p className="mt-1 text-[12px] uppercase tracking-tight text-zinc-300">Launch fast, learn faster.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-200 ring-1 ring-white/10 transition group-hover:bg-white/10">
<svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="plan-select-btn group flex w-full items-center justify-between rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-5 text-left ring-0 transition hover:bg-white/[0.07]" data-plan-select="pro" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div>
<p className="text-lg font-semibold tracking-tight text-white">Pro</p>
<p className="mt-1 text-[12px] uppercase tracking-tight text-zinc-300">Grow with confidence.</p>
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
<h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-left" id="planName">Starter</h3>
</div>
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
<div className="flex items-end justify-center gap-2 sm:justify-start">
<span className="text-6xl tracking-tight text-white" id="planPrice">$19</span>
<span className="mb-2 text-sm text-zinc-300" id="planPriceSuffix">/month</span>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-center text-[12px] uppercase tracking-tight text-zinc-200 sm:text-left" id="planTagline">GREAT FOR SMALL TEAMS LAUNCHING THEIR FIRST WORKFLOWS.</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-6" style={{-BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<ul className="space-y-3 text-sm text-zinc-100" id="featureList"><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>UP TO 5 PROJECTS</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>BASIC AUTOMATIONS</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>30-DAY RUN HISTORY</span></li><li className="flex items-start gap-2"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-blue-400 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>EMAIL SUPPORT</span></li></ul>
<div className="mt-6">
<a className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-neutral-900 shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)] ring-1 ring-white/20 transition hover:bg-zinc-100" href="#" id="ctaBtn">Get Started</a>
</div>
</div>
</div>
</div>
</div>
</section>


<div className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
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
<div className="mb-4 inline-flex h-[30px] w-[50px] rounded bg-[url(https://cdn.midjourney.com/ff6f82bf-d54f-4853-a2a4-321ec87a6422/0_0.png?w=800&amp;q=80)] bg-cover bg-center invert mix-blend-screen"></div>
<p className="mb-6 text-left text-sm leading-relaxed text-zinc-400">Build faster and smarter with AI-powered tools designed for modern creators.</p>
<div className="flex items-center gap-3">
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10" href="#"><svg className="lucide lucide-twitter h-[18px] w-[18px]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10" href="#"><svg className="lucide lucide-github h-[18px] w-[18px]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10" href="#"><svg className="lucide lucide-linkedin h-[18px] w-[18px]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Features</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Pricing</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Updates</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Documentation</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Guides</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">API Reference</a></li>
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
<p className="text-sm text-zinc-500">© 2025 Runlyx. All rights reserved.</p>
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
