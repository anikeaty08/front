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



        (function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.async=!0,i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}})();
    


        const demoEl = document.querySelector('#typing-demo');
        if(demoEl) {
            const textStr = "Optimizing query performance...";
            let idx = 0;
            const typeLoop = () => {
                if (idx < textStr.length) {
                    demoEl.textContent += textStr.charAt(idx++);
                    setTimeout(typeLoop, 80);
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
                    code: `// shared live script\nconst s = Runlyx.Script.open("recover-workers");\n\ns.apply("restartWorkers()", { user: "sys_admin" });\ns.comment(2, "Checking memory thresholds");\ns.save("v1.2.1", "Added safety verification");`
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
                    b.classList.toggle('bg-[#1B4D3E]/30', active);
                    b.classList.toggle('text-[#D4A574]', active);
                    b.classList.toggle('border-[#D4A574]/30', active);
                    b.classList.toggle('text-[#a8b3af]', !active);
                    b.classList.toggle('bg-[#02120e]/50', !active);
                    b.classList.toggle('border-[#D4A574]/10', !active);
                });
            }
            tabs.forEach(b => b.addEventListener('click', () => setActive(b.getAttribute('data-key'))));
        })();
    


        (function () {
            const state = { plan: 'starter', billing: 'monthly' };
            const plans = {
                starter: { name: 'Starter', tagline: 'Great for small teams launching their first workflows.', priceMonthly: 19, priceAnnual: 190, cta: 'Request Demo', features: ['UP TO 5 PROJECTS', 'BASIC AUTOMATIONS', '30-DAY RUN HISTORY', 'EMAIL SUPPORT'] },
                pro: { name: 'Pro', tagline: 'Built for growing teams and production workloads.', priceMonthly: 49, priceAnnual: 490, cta: 'Choose Plan', features: ['UP TO 50 PROJECTS', 'ADVANCED AUTOMATIONS', 'PRIORITY QUEUING', 'PRIORITY SUPPORT'] }
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
                els.list.innerHTML = cfg.features.map(f => `<li class="flex items-start gap-3"><i data-lucide="check" class="mt-0.5 h-4 w-4 text-[#D4A574] stroke-[2]"></i><span>${f}</span></li>`).join('');
                if(window.lucide) lucide.createIcons();
                els.btns.forEach(b => {
                    const active = b.getAttribute('data-plan-select') === state.plan;
                    b.classList.toggle('bg-[#1B4D3E]/20', active);
                    b.classList.toggle('border-[#D4A574]/20', active);
                    b.classList.toggle('border-transparent', !active);
                });
                els.tabs.forEach(t => {
                    const active = t.getAttribute('data-billing') === state.billing;
                    t.classList.toggle('bg-[#D4A574]', active);
                    t.classList.toggle('text-[#02120e]', active);
                    t.classList.toggle('text-[#a8b3af]', !active);
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 bottom-0 unicorn-stack unicorn-mask pointer-events-none z-[-10]">

<div className="absolute inset-0 bg-[#02120e]/80 mix-blend-multiply z-10"></div>
<div className="absolute inset-0 w-full h-full grayscale opacity-60" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>


<header className="sticky top-4 z-30 animate-enter px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="rounded-2xl border border-[#D4A574]/20 bg-[#02120e]/60 backdrop-blur supports-[backdrop-filter]:bg-[#02120e]/60 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
<div className="flex items-center justify-between p-3 pl-4 pr-3">
<div className="flex items-center gap-3">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[50px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca6ac371-d12a-4d8e-ba2f-3d7f7af32834_320w.png)] bg-cover rounded invert sepia brightness-90 saturate-150 hue-rotate-15" href="#"></a>
</div>
<nav className="hidden items-center gap-8 text-sm font-medium text-[#D4A574]/80 md:flex">
<a className="transition-colors hover:text-[#D4A574]" href="#">Product</a>
<a className="transition-colors hover:text-[#D4A574]" href="#features">Solutions</a>
<a className="transition-colors hover:text-[#D4A574]" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-[#D4A574]" href="#">Resources</a>
<a className="transition-colors hover:text-[#D4A574]" href="#">Enterprise</a>
</nav>
<div className="flex items-center justify-center gap-3">
<a className="group relative inline-flex items-center gap-2 rounded-md border border-[#D4A574]/30 bg-[#1B4D3E]/30 px-5 py-2.5 text-sm font-semibold text-[#D4A574] transition-all duration-300 hover:bg-[#1B4D3E]/50 hover:text-white hover:border-[#D4A574]/60" href="#" style={{'--border-gradient': 'linear-gradient(135deg, rgba(212, 165, 116, 0), rgba(212, 165, 116, 0.4), rgba(212, 165, 116, 0))', '--border-radius-before': '6px'}}>
                            See It In Action
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
<span className="block whitespace-nowrap rounded-lg bg-[#D4A574] px-3 py-1.5 text-xs font-bold text-[#02120e] shadow-[0_4px_20px_rgba(212,165,116,0.2)] ring-1 ring-[#D4A574]/50">Automated</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-[#D4A574]"></span>
</span>
<span className="float-cursor float-chip-2 absolute right-[2%] top-12 hidden translate-x-8 translate-y-12 md:block">
<span className="block whitespace-nowrap rounded-lg bg-[#1B4D3E] px-3 py-1.5 text-xs font-medium text-[#D4A574] shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-1 ring-[#D4A574]/30">Compliance Check</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-[#1B4D3E]"></span>
</span>
<span className="float-cursor float-chip-3 absolute left-[10%] bottom-6 hidden sm:block">
<span className="block whitespace-nowrap rounded-lg bg-[#02120e] px-3 py-1.5 text-xs font-medium text-[#D4A574] shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-1 ring-[#D4A574]/30">Zero Latency</span>
<span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-[#02120e]"></span>
</span>
</div>

<div className="text-center">
<h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
<span className="text-[#f5f5f0]">Solve faster.</span>
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md bg-[#1B4D3E]/50 blur-2xl"></span>
<span className="relative">
<span className="relative z-10">
<span className="relative inline-block">
<span className="absolute -inset-1 rounded-md ring-1 ring-[#D4A574]/40 bg-gradient-to-br from-[#1B4D3E]/20 via-[#D4A574]/10 to-[#1B4D3E]/20"></span>
<span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-[#D4A574] to-[#C85A3A]">Ship</span>
</span>
</span>
</span>
</span>
<span className="text-[#f5f5f0]">smarter.</span>
</h1>
<p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#a8b3af] font-light">
                        Enterprise automation that handles your critical workflows—so your team focuses on strategy, not firefighting.
                    </p>

<div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

<div className="btn-wrapper" style={{'--dot-size': '8px', '--line-weight': '1px', '--line-distance': '0.8rem 1rem', '--animation-speed': '0.35s', '--dot-color': '#D4A574', '--line-color': '#D4A574', '--grid-color': 'rgba(212, 165, 116, 0.2)'}}>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn">
<span className="btn-text">Start Free Trial</span>
<svg className="btn-svg" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="m12 5 7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
<a className="group relative inline-flex items-center gap-2 rounded-md bg-[#1B4D3E]/20 px-6 py-3.5 text-base font-medium text-[#D4A574] shadow-[0_0_15px_rgba(27,77,62,0.15)] ring-1 ring-[#D4A574]/20 transition-all duration-300 hover:scale-105 hover:bg-[#1B4D3E]/40 hover:text-white hover:shadow-[0_0_25px_rgba(212,165,116,0.25)]" href="#">
                            See It In Action
                            <svg className="lucide lucide-play h-4 w-4 fill-current stroke-[1.5] transition-transform group-hover:translate-x-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>

<div className="relative mt-24 mb-24 w-full overflow-hidden rounded-2xl border border-[#D4A574]/20 shadow-2xl backdrop-blur-xl bg-[#010b09]">

<div className="flex items-center justify-between border-b border-[#D4A574]/10 bg-[#02120e] px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-[#C85A3A]/80"></span>
<span className="h-3 w-3 rounded-full bg-[#D4A574]/80"></span>
<span className="h-3 w-3 rounded-full bg-[#1B4D3E]/80"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden border-r border-[#D4A574]/10 bg-[#051d16] p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-[#D4A574]/20 bg-[#1B4D3E]/20 px-2 py-1 text-xs font-medium text-[#D4A574]">
<svg className="lucide lucide-library h-3.5 w-3.5" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg> Playbooks
                                </div>
<button className="rounded-md border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-1 text-[#D4A574] hover:bg-[#1B4D3E]/30">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex flex-col text-[#a8b3af] h-[520px] space-y-4">
<div className="flex gap-1 mb-3">
<button className="rounded bg-[#D4A574] px-2 py-1 text-xs font-bold text-[#02120e]">Active</button>
<button className="rounded bg-[#1B4D3E]/20 px-2 py-1 text-xs text-[#a8b3af] hover:bg-[#1B4D3E]/40 hover:text-[#D4A574]">Draft</button>
<button className="rounded bg-[#1B4D3E]/20 px-2 py-1 text-xs text-[#a8b3af] hover:bg-[#1B4D3E]/40 hover:text-[#D4A574]">Archive</button>
</div>
<div className="flex-1 rounded-lg bg-[#02120e]/40 p-2">
<div className="mb-2 text-xs text-[#6e7d78] uppercase tracking-wider font-semibold">Active Playbooks</div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-[#1B4D3E]/30 border border-[#D4A574]/10 px-2 py-1.5 text-[#e5e7eb]">
<svg className="lucide lucide-circle-check h-3.5 w-3.5 text-[#D4A574]" data-lucide="circle-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> DB Failover Script
                                            <div className="ml-auto text-[9px] text-[#D4A574]/70">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-[#1B4D3E]/20 hover:text-white transition-colors">
<svg className="lucide lucide-activity h-3.5 w-3.5 text-[#C85A3A]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Scale Workers
                                            <div className="ml-auto text-[9px] text-[#6e7d78]">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-[#1B4D3E]/20 hover:text-white transition-colors">
<svg className="lucide lucide-rotate-cw h-3.5 w-3.5 text-[#D4A574]" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg> Restart Service
                                            <div className="ml-auto text-[9px] text-[#6e7d78]">Ready</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-[#1B4D3E]/20 opacity-60">
<svg className="lucide lucide-undo-2 h-3.5 w-3.5 text-[#a8b3af]" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg> Deploy Rollback
                                            <div className="ml-auto text-[9px] text-[#a8b3af]">Paused</div>
</li>
</ul>
</div>

<div className="mt-3 rounded-lg bg-[#02120e]/40 p-2 border border-[#D4A574]/5">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bar-chart-2 h-4 w-4 text-[#D4A574]" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-xs font-medium text-[#D4A574]">Execution Stats</span>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-[#1B4D3E]/20">
<div className="h-2 w-3 rounded-sm bg-[#D4A574]"></div>
<span className="text-[10px] text-[#a8b3af]">Success Rate</span>
<div className="ml-auto text-[10px] text-[#e5e7eb]">99.9%</div>
</div>
<div className="flex items-center gap-2 rounded p-1 text-xs hover:bg-[#1B4D3E]/20">
<div className="h-2 w-5 rounded-sm bg-[#C85A3A]"></div>
<span className="text-[10px] text-[#a8b3af]">Avg Duration</span>
<div className="ml-auto text-[10px] text-[#e5e7eb]">1.8s</div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative bg-[#010b09] md:col-span-6">
<div className="flex items-center gap-2 border-b border-[#D4A574]/10 px-3 py-2 text-xs text-[#a8b3af]">
<span className="text-[#D4A574]">recover-workers.playbook</span>
<div className="text-[#6e7d78]">•</div>
<span className="text-[#6e7d78]">Live editing</span>
<div className="ml-auto flex items-center gap-1">
<span className="text-xs text-[#6e7d78]">Saved 1m ago</span>
<div className="mx-2 h-4 w-px bg-[#D4A574]/10"></div>
<button className="rounded-md border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-1 hover:bg-[#1B4D3E]/30 text-[#D4A574]">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-col items-center justify-between gap-2 border-b border-[#D4A574]/10 bg-[#02120e] px-3 py-2 sm:flex-row">
<div className="flex w-full items-center gap-2 sm:w-auto">
<button className="rounded border border-[#D4A574]/20 bg-[#D4A574] p-1 text-[#02120e] hover:bg-[#C85A3A] transition-colors">
<svg className="lucide lucide-code h-3.5 w-3.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</button>
<button className="rounded border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-1 text-[#a8b3af] hover:bg-[#1B4D3E]/30 hover:text-[#D4A574]">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="h-4 w-px bg-[#D4A574]/10"></div>
<div className="flex flex-1 items-center gap-1">
<span className="text-xs text-[#6e7d78]">Version:</span>
<button className="inline-flex items-center justify-center rounded border border-[#D4A574]/10 bg-[#1B4D3E]/10 px-2 py-1 text-xs text-[#D4A574] hover:bg-[#1B4D3E]/30">v1.2.1</button>
</div>
</div>
</div>

<div className="p-4 sm:p-6 bg-[#010b09]">
<div className="grid min-h-[400px] grid-rows-[auto,1fr,auto,auto] gap-4">

<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border border-[#D4A574]/10 bg-[#1B4D3E]/10 px-4 py-4 backdrop-blur">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-[#6e7d78]">Active Editors</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#D4A574] ring-2 ring-[#02120e]"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-[#C85A3A] ring-2 ring-[#02120e]"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-[#1B4D3E] text-xs text-[#D4A574] ring-2 ring-[#02120e] border border-[#D4A574]/20">+1</div>
</div>
<div className="mt-2 text-xs text-[#a8b3af]">3 engineers online</div>
</div>
<div className="rounded-xl border border-[#D4A574]/10 bg-[#1B4D3E]/10 px-4 py-4 backdrop-blur">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-[#6e7d78]">Last Execution</span>
</div>
<div className="text-2xl font-medium text-[#D4A574]">1.8s</div>
<div className="mt-1 text-xs text-[#a8b3af]">Verified • 2m ago</div>
</div>
</div>

<div className="min-h-0 rounded-xl border border-[#D4A574]/10 bg-[#02120e] px-4 py-4">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-sm font-medium text-[#D4A574]">Playbook Script</h3>
<span className="text-xs text-[#6e7d78]">TypeScript</span>
</div>
<div className="relative max-h-[250px] overflow-auto rounded-lg bg-[#000000]/40 p-4 font-mono text-sm text-[#e5e7eb]">
<pre className="whitespace-pre-wrap text-xs sm:text-sm">// enterprise automation logic
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "sys_admin" });
s.comment(2, "Optimizing resource allocation");
s.save("v1.2.1", "Automated scaling adjustment");</pre>
</div>
</div>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
<button className="rounded-lg border border-[#D4A574]/20 bg-[#D4A574]/10 p-2 text-center backdrop-blur hover:bg-[#D4A574]/20 transition">
<div className="text-sm font-medium text-[#D4A574]">Deploy</div>
<div className="text-[10px] text-[#a8b3af]">Production</div>
</button>
<button className="rounded-lg border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-2 text-center backdrop-blur hover:bg-[#1B4D3E]/30 transition">
<div className="text-sm font-medium text-[#e5e7eb]">Test</div>
<div className="text-[10px] text-[#6e7d78]">Sandbox</div>
</button>
<button className="rounded-lg border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-2 text-center backdrop-blur hover:bg-[#1B4D3E]/30 transition">
<div className="text-sm font-medium text-[#e5e7eb]">Share</div>
<div className="text-[10px] text-[#6e7d78]">Team</div>
</button>
<button className="rounded-lg border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-2 text-center backdrop-blur hover:bg-[#1B4D3E]/30 transition">
<div className="text-sm font-medium text-[#e5e7eb]">Log</div>
<div className="text-[10px] text-[#6e7d78]">Audit Trail</div>
</button>
</div>
</div>
</div>
</main>

<aside className="hidden border-l border-[#D4A574]/10 bg-[#051d16] p-3 md:block md:col-span-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-[#D4A574]/20 bg-[#1B4D3E]/20 px-2 py-1 text-xs font-medium text-[#D4A574]">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg> Configuration
                                </div>
</div>

<div className="mb-3 flex gap-1">
<button className="rounded bg-[#D4A574] px-2 py-1 text-xs font-bold text-[#02120e]">Params</button>
<button className="rounded bg-[#1B4D3E]/20 px-2 py-1 text-xs text-[#a8b3af] hover:bg-[#1B4D3E]/40 hover:text-[#D4A574]">Safety</button>
<button className="rounded bg-[#1B4D3E]/20 px-2 py-1 text-xs text-[#a8b3af] hover:bg-[#1B4D3E]/40 hover:text-[#D4A574]">Triggers</button>
</div>
<div className="h-[480px] overflow-y-auto space-y-3">
<div className="rounded-lg bg-[#02120e]/40 p-3 space-y-3 border border-[#D4A574]/5">
<div className="mb-2 text-xs text-[#D4A574]">Input Parameters</div>
<div className="space-y-2 text-[10px]">
<div>
<div className="mb-1 text-[#6e7d78]">Service Name</div>
<input className="w-full rounded border border-[#D4A574]/20 bg-[#02120e] px-2 py-1 text-[#e5e7eb] focus:border-[#D4A574] focus:outline-none" type="text" value="worker_process"/>
</div>
<div>
<div className="mb-1 text-[#6e7d78]">Region</div>
<select className="w-full rounded border border-[#D4A574]/20 bg-[#02120e] px-2 py-1 text-[#e5e7eb] focus:border-[#D4A574] focus:outline-none">
<option>us-east-1</option>
<option>eu-west-1</option>
</select>
</div>
</div>
</div>
<div className="rounded-lg bg-[#02120e]/40 p-3 space-y-3 border border-[#D4A574]/5">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-[#D4A574]">Recent Executions</span>
<span className="rounded-md bg-[#1B4D3E]/30 px-2 py-0.5 text-[10px] text-[#e5e7eb]">24h</span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-[#a8b3af]">Today</span>
<span className="text-[10px] text-[#6e7d78]">142 runs</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-[#1B4D3E]/30">
<div className="h-2 rounded-full bg-[#D4A574]" style={{width: '96%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded bg-[#D4A574] px-3 py-2 text-xs font-bold text-[#02120e] hover:bg-[#C85A3A] transition-colors">Run Script</button>
<button className="rounded border border-[#D4A574]/20 bg-[#1B4D3E]/10 px-3 py-2 text-xs font-medium text-[#D4A574] hover:bg-[#1B4D3E]/30">Test</button>
</div>
</aside>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 top-24 -z-0 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-[#1B4D3E]/30 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8" id="features">
<div className="relative overflow-hidden rounded-3xl bg-[#02120e] ring-1 ring-[#D4A574]/20 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1B4D3E]/20 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4A574]/10 blur-3xl"></div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-8 lg:gap-0">

<div className="flex flex-col p-8 pt-8 sm:p-12">
<h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Built for teams that<span className="block text-[#D4A574]">demand reliability</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-[#a8b3af] md:text-lg">
                        Robust infrastructure designed to accelerate your workflow and eliminate operational bottlenecks.
                    </p>
<div className="mt-12 space-y-6">

<section className="group relative overflow-hidden rounded-xl p-5 ring-1 ring-[#D4A574]/20 transition-all hover:ring-[#D4A574]/40 md:p-6 bg-[#051d16]" id="card-ai">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent"></div>
<div className="rounded-lg bg-[#02120e]/60 p-4 ring-1 ring-[#D4A574]/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-[#D4A574]">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="font-bold tracking-wide uppercase text-xs">Intelligent Automation Engine</span>
</div>
<div className="space-y-3">
<div className="rounded border-l-2 border-[#D4A574] bg-[#D4A574]/5 p-3">
<div className="flex items-start gap-3">
<div className="flex-1">
<p className="mb-2 text-sm text-[#e5e7eb]">Analyzing system logs...</p>
<div className="h-8 font-mono text-xs text-[#D4A574]" id="typing-demo">Optimizing query performance...</div>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl text-white">Intelligent Automation Engine</h3>
<p className="mt-1.5 text-sm text-[#a8b3af]">Let AI handle mission-critical tasks. Reduce manual work, eliminate errors, boost team velocity.</p>
</section>

<section className="group relative overflow-hidden rounded-xl p-5 ring-1 ring-[#D4A574]/20 transition-all hover:ring-[#D4A574]/40 md:p-6 bg-[#051d16]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent"></div>
<div className="rounded-lg bg-[#02120e]/60 p-4 ring-1 ring-[#D4A574]/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-[#D4A574]">
<svg className="lucide lucide-activity h-4 w-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="font-bold tracking-wide uppercase text-xs">Real-Time Performance Metrics</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded bg-[#D4A574]/5 p-3 border border-[#D4A574]/10">
<p className="mb-1 text-xs text-[#6e7d78] uppercase">Uptime</p>
<p className="text-2xl font-bold text-[#e5e7eb]">99.99%</p>
<p className="mt-1 text-xs text-[#D4A574]">+0.01% MoM</p>
</div>
<div className="rounded bg-[#D4A574]/5 p-3 border border-[#D4A574]/10">
<p className="mb-1 text-xs text-[#6e7d78] uppercase">Latency</p>
<p className="text-2xl font-bold text-[#e5e7eb]">12ms</p>
<p className="mt-1 text-xs text-[#D4A574]">-4ms improved</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl text-white">Real-Time Performance Metrics</h3>
<p className="mt-1.5 text-sm text-[#a8b3af]">Track operational efficiency with detailed insights. Make data-driven decisions instantly.</p>
</section>
</div>
</div>

<div className="flex flex-col gap-6 p-8 sm:p-12 lg:col-start-2 bg-[#051d16]/30 border-l border-[#D4A574]/10">

<section className="group relative overflow-hidden rounded-xl bg-[#02120e]/40 p-5 ring-1 ring-[#D4A574]/20 transition-all hover:ring-[#D4A574]/40 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent"></div>
<div className="rounded-lg bg-[#02120e]/60 p-4 ring-1 ring-[#D4A574]/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-[#D4A574]">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-bold tracking-wide uppercase text-xs">Team Collaboration</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#D4A574] ring-2 ring-[#02120e]"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-[#C85A3A] ring-2 ring-[#02120e]"></div>
<div className="h-8 w-8 -ml-3 rounded-full bg-[#1B4D3E] ring-2 ring-[#02120e]"></div>
<div className="flex h-8 w-8 -ml-3 items-center justify-center rounded-full bg-[#02120e] border border-[#D4A574]/30 text-xs text-[#D4A574] ring-2 ring-[#02120e]">+12</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1B4D3E]/30">
<div className="h-full rounded-full bg-[#D4A574]" style={{width: '85%'}}></div>
</div>
<p className="text-xs text-[#6e7d78]">Incident Response Team Active</p>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl text-white">Enterprise Collaboration</h3>
<p className="mt-1.5 text-sm text-[#a8b3af]">Enterprise-grade collaboration for incident response and critical operations. Sync instantly.</p>
</section>

<section className="group relative overflow-hidden rounded-xl bg-[#02120e]/40 p-5 ring-1 ring-[#D4A574]/20 transition-all hover:ring-[#D4A574]/40 md:p-6">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent"></div>
<div className="rounded-lg bg-[#02120e]/60 p-4 ring-1 ring-[#D4A574]/10 backdrop-blur">
<div className="mb-3 flex items-center gap-2 text-sm text-[#D4A574]">
<svg className="lucide lucide-server h-4 w-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="font-bold tracking-wide uppercase text-xs">Automation at Scale</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-[#a8b3af]">
<div className="h-2 w-2 rounded-full bg-[#D4A574]"></div>
<span>Audit logging enabled</span>
</div>
<div className="flex items-center gap-2 text-xs text-[#a8b3af]">
<div className="h-2 w-2 rounded-full bg-[#1B4D3E]"></div>
<span>SOC2 Compliant storage</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl text-white">Automation at Scale</h3>
<p className="mt-1.5 text-sm text-[#a8b3af]">Automate with confidence. Full compliance and audit trails for every action taken.</p>
</section>
</div>
</div>
</div>
</section>


<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-[#02120e] ring-1 ring-[#D4A574]/20 backdrop-blur">
<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#D4A574]/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#1B4D3E]/20 blur-3xl"></div>
<div className="mb-10 p-6 pb-0 pt-6 sm:p-12">
<h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Automation playbooks</h2>
<p className="mt-4 max-w-2xl text-lg text-[#a8b3af]">Build, test and run safe automations that turn alerts into fixes.</p>
</div>
<div className="relative mb-10 px-6 sm:px-12">
<div className="flex w-max gap-3 md:w-auto" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-[#D4A574]/30 bg-[#1B4D3E]/30 px-4 py-2.5 text-sm font-medium text-[#D4A574] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-[#D4A574]/20" data-key="collab">Real-time collaboration</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-[#D4A574]/10 bg-[#02120e]/50 px-4 py-2.5 text-sm font-medium text-[#a8b3af] hover:bg-[#1B4D3E]/20 hover:text-[#D4A574] hover:border-[#D4A574]/20" data-key="templates">Parameterized templates</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-[#D4A574]/10 bg-[#02120e]/50 px-4 py-2.5 text-sm font-medium text-[#a8b3af] hover:bg-[#1B4D3E]/20 hover:text-[#D4A574] hover:border-[#D4A574]/20" data-key="safety">Safety and approvals</button>
</div>
</div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="p-6 pt-6 sm:p-12">
<div className="max-w-xl">
<h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl" id="pb-title">Real-time collaboration</h3>
<p className="mb-4 text-[12px] uppercase tracking-wide text-[#D4A574] font-bold" id="pb-tagline">Edit scripts together with live cursors and versioned saves.</p>
<p className="text-sm leading-relaxed text-[#a8b3af]" id="pb-p1">Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.</p>
<p className="mt-4 text-sm leading-relaxed text-[#a8b3af]" id="pb-p2">Everyone on call sees changes immediately so your team can author and run fixes together during an incident.</p>
<a className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#D4A574] px-6 text-sm font-bold text-[#02120e] shadow-[0_4px_12px_rgba(212,165,116,0.2)] transition hover:bg-[#C85A3A]" href="#" id="pb-cta">
                            Learn more
                            <svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="p-6 pt-0 sm:p-12">
<div className="relative">
<div className="relative overflow-hidden rounded-xl bg-[#010b09] ring-1 ring-[#D4A574]/20 backdrop-blur shadow-2xl">
<div className="flex items-center justify-between border-b border-[#D4A574]/10 bg-[#051d16] px-4 py-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-[#C85A3A]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#D4A574]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#1B4D3E]"></span>
</div>
<div className="flex items-center gap-2 text-[12px] text-[#a8b3af]">
<svg className="lucide lucide-file-code-2 h-[15px] w-[15px] text-[#D4A574]" data-lucide="file-code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m5 16-3 3 3 3"></path><path d="m9 22 3-3-3-3"></path></svg> recover-workers.playbook
                                </div>
</div>
<div className="relative">
<pre className="whitespace-pre-wrap p-5 font-mono text-[12px] leading-relaxed text-[#e5e7eb] md:text-[13px] bg-[#02120e]" id="pb-code">// shared live script
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "sys_admin" });
s.comment(2, "Checking memory thresholds");
s.save("v1.2.1", "Added safety verification");</pre>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-gradient-to-b from-[#D4A574]/10 via-transparent to-transparent blur-2xl"></div>
</div>
</div>
</div>
</div>
</section>


<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8" id="pricing">
<div className="relative overflow-hidden rounded-3xl bg-[#02120e] ring-1 ring-[#D4A574]/20 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1B4D3E]/20 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4A574]/10 blur-3xl"></div>
<div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
<div className="flex flex-col p-8 pt-8 sm:p-12">
<h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl">
                        Transparent pricing,<span className="block text-[#D4A574]">built for scale</span>
</h2>
<p className="mt-4 max-w-2xl text-base text-[#a8b3af] md:text-lg">
                        Pick a plan today and switch anytime. Clear value across Starter, Pro, and Enterprise.
                    </p>
<div className="mt-8">
<div className="inline-flex items-center gap-1 rounded-lg border border-[#D4A574]/10 bg-[#1B4D3E]/10 p-1">
<button className="billing-tab rounded bg-[#D4A574] px-4 py-2 text-[11px] font-bold uppercase tracking-tight text-[#02120e] shadow-sm transition" data-billing="monthly">Monthly</button>
<button className="billing-tab rounded px-4 py-2 text-[11px] font-bold uppercase tracking-tight text-[#a8b3af] transition hover:text-[#D4A574]" data-billing="annual">Annually</button>
</div>
</div>
<div className="mt-12 space-y-4">
<button className="plan-select-btn group flex w-full items-center justify-between rounded-xl bg-gradient-to-br from-[#1B4D3E]/20 to-transparent p-5 text-left border border-[#D4A574]/20 transition hover:bg-[#1B4D3E]/30 hover:border-[#D4A574]/40" data-plan-select="starter" style={{'--border-gradient': 'linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(212, 165, 116, 0))', '--border-radius-before': '12px'}}>
<div>
<p className="text-xl font-semibold tracking-tight text-white">Starter</p>
<p className="mt-1 text-[12px] uppercase tracking-wide text-[#a8b3af]">Launch fast, learn faster.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A574]/10 text-[#D4A574] transition group-hover:bg-[#D4A574] group-hover:text-[#02120e]">
<svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="plan-select-btn group flex w-full items-center justify-between rounded-xl p-5 text-left border border-transparent transition hover:bg-[#1B4D3E]/20 hover:border-[#D4A574]/20" data-plan-select="pro">
<div>
<p className="text-xl font-semibold tracking-tight text-white">Pro</p>
<p className="mt-1 text-[12px] uppercase tracking-wide text-[#a8b3af]">Grow with confidence.</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1B4D3E]/20 text-[#a8b3af] transition group-hover:bg-[#D4A574]/10 group-hover:text-[#D4A574]">
<svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
<div className="relative mt-8 mb-8 ml-8 mr-8 flex max-w-xl flex-col gap-6 rounded-2xl bg-gradient-to-br from-[#1B4D3E]/10 to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-10 border border-[#D4A574]/10">
<div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{background: 'radial-gradient(900px 360px at 20% -10%, rgba(212,165,116,0.2) 15%, transparent 60%)'}}></div>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<h3 className="text-center text-3xl font-bold tracking-tight text-white sm:text-left" id="planName">Starter</h3>
</div>
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
<div className="flex items-end justify-center gap-2 sm:justify-start">
<span className="text-6xl font-bold tracking-tight text-[#D4A574]" id="planPrice">$19</span>
<span className="mb-2 text-sm text-[#a8b3af]" id="planPriceSuffix">/month</span>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-center text-[12px] font-bold uppercase tracking-wide text-[#C85A3A] sm:text-left" id="planTagline">GREAT FOR SMALL TEAMS LAUNCHING THEIR FIRST WORKFLOWS.</p>
</div>
<div className="rounded-xl bg-[#02120e]/50 border border-[#D4A574]/10 p-6">
<ul className="space-y-4 text-sm text-[#e5e7eb]" id="featureList"><li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-[#D4A574] stroke-[2]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>UP TO 5 PROJECTS</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-[#D4A574] stroke-[2]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>BASIC AUTOMATIONS</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-[#D4A574] stroke-[2]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>30-DAY RUN HISTORY</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 h-4 w-4 text-[#D4A574] stroke-[2]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>EMAIL SUPPORT</span></li></ul>
<div className="mt-8">
<a className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#D4A574] px-5 text-sm font-bold text-[#02120e] shadow-lg transition hover:bg-[#C85A3A]" href="#" id="ctaBtn">Request Demo</a>
</div>
</div>
</div>
</div>
</div>
</section>


<div className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
<div className="relative mt-6 overflow-hidden rounded-3xl bg-[#02120e] ring-1 ring-[#D4A574]/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1B4D3E]/10 blur-3xl"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4A574]/5 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#02120e] via-transparent to-[#051d16]/80"></div>
</div>
<div className="relative mx-auto flex flex-col items-center justify-center px-8 pt-16 pb-16 text-center sm:py-16 md:px-8">
<div className="w-full max-w-7xl">
<div className="grid grid-cols-1 gap-12 border-b border-[#D4A574]/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="flex flex-col items-start">
<div className="mb-4 inline-flex h-[30px] w-[50px] rounded bg-[url(https://cdn.midjourney.com/ff6f82bf-d54f-4853-a2a4-321ec87a6422/0_0.png?w=800&amp;q=80)] bg-cover bg-center invert sepia brightness-90 saturate-150 hue-rotate-15 mix-blend-screen"></div>
<p className="mb-6 text-left text-sm leading-relaxed text-[#6e7d78]">Enterprise automation that handles your critical workflows—so your team focuses on strategy, not firefighting.</p>
<div className="flex items-center gap-3">
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B4D3E]/10 text-[#a8b3af] ring-1 ring-[#D4A574]/10 transition hover:bg-[#1B4D3E]/30 hover:text-[#D4A574]" href="#"><svg className="lucide lucide-twitter h-[18px] w-[18px]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B4D3E]/10 text-[#a8b3af] ring-1 ring-[#D4A574]/10 transition hover:bg-[#1B4D3E]/30 hover:text-[#D4A574]" href="#"><svg className="lucide lucide-github h-[18px] w-[18px]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B4D3E]/10 text-[#a8b3af] ring-1 ring-[#D4A574]/10 transition hover:bg-[#1B4D3E]/30 hover:text-[#D4A574]" href="#"><svg className="lucide lucide-linkedin h-[18px] w-[18px]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-bold tracking-tight text-white">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Features</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Pricing</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Updates</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-bold tracking-tight text-white">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Documentation</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Guides</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">API Reference</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-bold tracking-tight text-white">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">About</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Blog</a></li>
<li><a className="text-sm text-[#a8b3af] transition hover:text-[#D4A574]" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
<p className="text-sm text-[#6e7d78]">© 2025 Runlyx. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-[#6e7d78] transition hover:text-[#D4A574]" href="#">Privacy</a>
<a className="text-sm text-[#6e7d78] transition hover:text-[#D4A574]" href="#">Terms</a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
