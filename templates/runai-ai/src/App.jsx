import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function () {
      if (!window.UnicornStudio) {
        var s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        s.async = true;
        s.onload = function () {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(s);
      } else if (!window.UnicornStudio.isInitialized) {
        UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    })();
  


              const rootAI = document.querySelector('#card-ai');
              const demoEl = rootAI.querySelector('#typing-demo');
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
            


      (function () {
        const root = document.getElementById('pricing');
        if (!root) return;

        const state = { plan: 'starter', billing: 'monthly' };

        const plans = {
          starter: {
            name: 'Starter',
            tagline: 'Perfect for solo/small teams validating a first pilot.',
            priceMonthly: 499,
            priceAnnual: 5490,
            cta: { label: 'Get Started', href: '#join' },
            features: [
              'ONE PILOT (AUTO/CHAT/VOICE)',
              'LIGHT WORKFLOW REVIEW',
              'UP TO 2 INTEGRATIONS',
              'KB PREP (BASIC)',
              'CORE GUARDRAILS & PROMPTS',
              'ANALYTICS LITE (USAGE/KPIS)',
              'EMAIL SUPPORT (48H) + 1 TRAINING'
            ]
          },
          pro: {
            name: 'Pro',
            tagline: 'For teams scaling pilots into production systems.',
            priceMonthly: 2499,
            priceAnnual: 26990,
            cta: { label: 'Start Pro', href: '#join' },
            features: [
              'UP TO 5 PILOTS',
              'FULL WORKFLOW REVIEW',
              'UP TO 10 INTEGRATIONS',
              'KB PREP (ADVANCED)',
              'CUSTOM GUARDRAILS & PROMPTS',
              'ANALYTICS PRO + DASHBOARDS',
              'PRIORITY SUPPORT (24H) + 2 TRAININGS'
            ]
          },
          enterprise: {
            name: 'Enterprise',
            tagline: 'Custom, secure, enterprise-grade with SLAs.',
            priceMonthly: null,
            priceAnnual: null,
            cta: { label: 'Contact Sales', href: '#contact' },
            features: [
              'UNLIMITED PILOTS',
              'DEDICATED SOLUTIONS ENGINEER',
              'UNLIMITED INTEGRATIONS',
              'SSO / SOC2 / DPA / SLAS',
              'ADVANCED ANALYTICS + CUSTOM KPIS',
              '24/7 SUPPORT & ONBOARDING',
              'CUSTOM TRAINING PROGRAMS'
            ]
          }
        };

        const els = {
          tabs: root.querySelectorAll('.billing-tab'),
          planButtons: root.querySelectorAll('[data-plan-select]'),
          planName: root.querySelector('#planName'),
          planPrice: root.querySelector('#planPrice'),
          planPriceSuffix: root.querySelector('#planPriceSuffix'),
          planTagline: root.querySelector('#planTagline'),
          featureList: root.querySelector('#featureList'),
          ctaBtn: root.querySelector('#ctaBtn')
        };

        const checkSVG =
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-white/70 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg>';

        function formatPrice(v) {
          return (typeof v === 'number') ? `$${v.toLocaleString()}` : 'Custom';
        }

        function setSelectedPlanButton() {
          els.planButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-plan-select') === state.plan;
            btn.classList.toggle('bg-white/[0.05]', isActive);
            btn.classList.toggle('ring-white/10', true);
          });
        }

        function setBillingTabs() {
          els.tabs.forEach(tab => {
            const active = tab.getAttribute('data-billing') === state.billing;
            tab.classList.toggle('text-white', active);
            tab.classList.toggle('text-zinc-300', !active);
            tab.classList.toggle('bg-white/[0.08]', active);
            tab.classList.toggle('ring-1', active);
            tab.classList.toggle('ring-white/20', active);
          });
        }

        function render() {
          const cfg = plans[state.plan];

          els.planName.textContent = cfg.name;
          els.planTagline.textContent = cfg.tagline.toUpperCase();

          const price = (state.billing === 'monthly') ? cfg.priceMonthly : cfg.priceAnnual;
          els.planPrice.textContent = formatPrice(price);
          els.planPriceSuffix.textContent =
            (typeof price === 'number')
              ? (state.billing === 'monthly' ? '/month' : '/yr')
              : '';

          els.ctaBtn.textContent = cfg.cta.label;
          els.ctaBtn.setAttribute('href', cfg.cta.href);

          els.featureList.innerHTML = cfg.features
            .map(f => `<li class="flex items-start gap-2">${checkSVG}<span>${f}</span></li>`)
            .join('');

          setSelectedPlanButton();
          setBillingTabs();
        }

        els.planButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            state.plan = btn.getAttribute('data-plan-select');
            render();
          });
        });

        els.tabs.forEach(tab => {
          btn => {};
          tab.addEventListener('click', () => {
            state.billing = tab.getAttribute('data-billing');
            render();
          });
        });

        render();
      })();
    


      (function () {
        const tabs = document.querySelectorAll('.pb-tab');
        const title = document.getElementById('pb-title');
        const tagline = document.getElementById('pb-tagline');
        const p1 = document.getElementById('pb-p1');
        const p2 = document.getElementById('pb-p2');
        const code = document.getElementById('pb-code');
        const cta = document.getElementById('pb-cta');

        const data = {
          collab: {
            title: 'Real-time collaboration',
            tagline: 'EDIT SCRIPTS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.',
            p1: 'Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.',
            p2: 'Everyone on call sees changes immediately so your team can author and run fixes together during an incident.',
            code: `// shared live script
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "jordan" });
s.comment(2, "Check CPU before restart");
s.save("v1.2.1", "Add safety check");`,
            href: '#learn-collab'
          },
          templates: {
            title: 'Parameterized templates',
            tagline: 'REUSABLE PLAYBOOKS WITH TYPED INPUTS AND SANE DEFAULTS.',
            p1: 'Publish reusable playbooks with typed inputs and sane defaults so teams can standardize fixes.',
            p2: 'Validate inputs before execution and stamp every run with immutable parameters for auditing.',
            code: `// template inputs
type Params = { service: "api" | "worker", region: string, scale: number }

const s = Runlyx.Template.use<Params>("scale-service");
s.run({ service: "worker", region: "us-east-1", scale: 3 });`,
            href: '#learn-templates'
          },
          safety: {
            title: 'Safety and approvals',
            tagline: 'GUARDRAILS, DRY RUNS, AND MULTI-STEP APPROVALS.',
            p1: 'Protect production with guardrails: dry runs, blast-radius checks and multi-step approvals.',
            p2: 'Require reviewers on sensitive playbooks and log every decision for compliance.',
            code: `// safety first
const p = Runlyx.Playbook("db-failover");
p.requireApproval({ teams: ["SRE"], min: 2 });
p.dryRun().assert("replicasHealthy > 2");
p.execute();`,
            href: '#learn-safety'
          },
          hooks: {
            title: 'Observability hooks',
            tagline: 'METRICS, LOGS AND TRACES TO INFORM EVERY STEP.',
            p1: 'Connect metrics, logs and traces to inform each step and auto-halt when signals degrade.',
            p2: 'Enrich runs with incident context and stream annotated events back to your dashboards.',
            code: `// observability-aware run
const g = Grafana.query("cpu_usage{service='api'}");
if (g.max() > 0.85) alert("CPU high: pausing rollout");

Runlyx.emit("playbook.step", { name: "scaleUp", value: 2 });`,
            href: '#learn-hooks'
          },
          triggers: {
            title: 'Triggers and scheduling',
            tagline: 'KICK OFF PLAYBOOKS FROM ALERTS, WEBHOOKS OR A CRON.',
            p1: 'Kick off playbooks from alerts, webhooks or a cron — with idempotency and concurrency limits.',
            p2: 'Throttle noisy signals and ensure only one remediation runs per target at a time.',
            code: `// triggers
Runlyx.onAlert("PagerDuty:CPUHigh", (e) => remediate(e.target));
Runlyx.schedule("0 */2 * * *", "db-maintenance");
Runlyx.lock("service:api").run("restart-workers");`,
            href: '#learn-triggers'
          }
        };

        function setActive(key) {
          const cfg = data[key];
          title.textContent = cfg.title;
          tagline.textContent = cfg.tagline;
          p1.textContent = cfg.p1;
          p2.textContent = cfg.p2;
          code.textContent = cfg.code;
          cta.setAttribute('href', cfg.href);

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
        setActive('collab');
        if (window.lucide && window.lucide.createIcons) lucide.createIcons();
      })();
    


      (function () {
        const root = document.getElementById('pricing');
        if (!root) return;

        const state = { plan: 'starter', billing: 'monthly' };

        const plans = {
          starter: {
            name: 'Starter',
            tagline: 'Great for small teams launching their first workflows.',
            priceMonthly: 299,
            priceAnnual: 3190,
            cta: { label: 'Get Started', href: '#join' },
            features: [
              'UP TO 5 PROJECTS',
              'BASIC AUTOMATIONS',
              '30-DAY RUN HISTORY',
              'EMAIL SUPPORT'
            ]
          },
          pro: {
            name: 'Pro',
            tagline: 'Built for growing teams and production workloads.',
            priceMonthly: 1499,
            priceAnnual: 15990,
            cta: { label: 'Upgrade to Pro', href: '#join' },
            features: [
              'UP TO 50 PROJECTS',
              'ADVANCED AUTOMATIONS',
              'PRIORITY QUEUING',
              'ANALYTICS DASHBOARD',
              'ROLES & PERMISSIONS',
              'PRIORITY SUPPORT (24H)',
              'POPULAR INTEGRATIONS'
            ]
          },
          enterprise: {
            name: 'Enterprise',
            tagline: 'Custom, secure, and ready for scale.',
            priceMonthly: null,
            priceAnnual: null,
            cta: { label: 'Contact Sales', href: '#contact' },
            features: [
              'UNLIMITED PROJECTS & RUNS',
              'DEDICATED SUCCESS MANAGER',
              'SSO • RBAC • AUDIT LOGS',
              'CUSTOM SECURITY & DATA RESIDENCY',
              'PRIVATE CLOUD OR ON-PREM',
              '24/7 PREMIUM SUPPORT',
              'TAILORED SLAS & ONBOARDING'
            ]
          }
        };

        const els = {
          tabs: root.querySelectorAll('.billing-tab'),
          planButtons: root.querySelectorAll('.plan-select-btn'),
          planName: root.querySelector('#planName'),
          planPrice: root.querySelector('#planPrice'),
          planPriceSuffix: root.querySelector('#planPriceSuffix'),
          planTagline: root.querySelector('#planTagline'),
          featureList: root.querySelector('#featureList'),
          ctaBtn: root.querySelector('#ctaBtn')
        };

        const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-blue-400 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg>';

        function formatPrice(v) {
          return (typeof v === 'number') ? `$${v.toLocaleString()}` : 'Custom';
        }

        function setSelectedPlanButton() {
          els.planButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-plan-select') === state.plan;
            btn.classList.toggle('bg-white/[0.08]', isActive);
            btn.classList.toggle('ring-1', isActive);
            btn.classList.toggle('ring-white/20', isActive);
          });
        }

        function setBillingTabs() {
          els.tabs.forEach(tab => {
            const active = tab.getAttribute('data-billing') === state.billing;
            tab.classList.toggle('text-white', active);
            tab.classList.toggle('text-zinc-300', !active);
            tab.classList.toggle('bg-white/[0.08]', active);
            tab.classList.toggle('ring-1', active);
            tab.classList.toggle('ring-white/20', active);
          });
        }

        function render() {
          const cfg = plans[state.plan];

          els.planName.textContent = cfg.name;
          els.planTagline.textContent = cfg.tagline.toUpperCase();

          const price = (state.billing === 'monthly') ? cfg.priceMonthly : cfg.priceAnnual;
          els.planPrice.textContent = formatPrice(price);
          els.planPriceSuffix.textContent = (typeof price === 'number') ? (state.billing === 'monthly' ? '/month' : '/yr') : '';

          els.ctaBtn.textContent = cfg.cta.label;
          els.ctaBtn.setAttribute('href', cfg.cta.href);

          els.featureList.innerHTML = cfg.features.map(f => `<li class="flex items-start gap-2">${checkSVG}<span>${f}</span></li>`).join('');

          setSelectedPlanButton();
          setBillingTabs();
        }

        els.planButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            state.plan = btn.getAttribute('data-plan-select');
            render();
          });
        });

        els.tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            state.billing = tab.getAttribute('data-billing');
            render();
          });
        });

        render();
      })();
    


    (function () {
      const style = document.createElement("style");
      style.textContent = `
        .animate-on-scroll { animation-play-state: paused !important; }
        .animate-on-scroll.animate { animation-play-state: running !important; }
      `;
      document.head.appendChild(style);

      const once = true;

      if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              if (once) window.__inViewIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
      }

      window.initInViewAnimations = function (selector = ".animate-on-scroll") {
        document.querySelectorAll(selector).forEach((el) => {
          window.__inViewIO.observe(el);
        });
      };

      document.addEventListener("DOMContentLoaded", () => {
        initInViewAnimations();
        lucide.createIcons();
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="58" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)'}}><div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>


<div className="unicorn-stack fixed unicorn-mask top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF">
</div>
</div>



<header className="sticky z-30 top-0 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="supports-[backdrop-filter]:bg-black/30 border-white/10 border rounded-2xl mt-4 backdrop-blur">
<div className="flex sm:pl-3 sm:pr-3 bg-[#000000] border-[#ffffff]/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[50px] h-[30px] bg-[url(https://cdn.midjourney.com/ff6f82bf-d54f-4853-a2a4-321ec87a6422/0_0.png?w=800&amp;q=80)] bg-cover rounded invert" href="#"></a>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300" style={{}}>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</nav>
<div className="flex gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-sm font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-3 pr-5 pb-3 pl-5 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
  Watch Demo
  <svg className="lucide lucide-arrow-right stroke-[1.5]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="sm:px-6 sm:pt-24 sm:pb-28 lg:pr-8 lg:pt-40 lg:pl-8 lg:pb-0 max-w-7xl mt-4 mr-auto ml-auto pt-16 pr-8 pb-20 pl-8">

<div className="pointer-events-none select-none relative">

<span className="float-cursor -top-12 sm:-top-16 float-chip-1 -translate-x-1/2 absolute left-[55%] -translate-y-8">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
        AI Suggestion
      </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>

<span className="float-cursor hidden md:block float-chip-2 absolute top-12 right-[2%] translate-x-8 translate-y-12">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
        Smart Edit
      </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>

<span className="float-cursor absolute left-[10%] bottom-6 hidden sm:block float-chip-3">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
        Auto Optimization
      </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
</div>

<div className="text-center">
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight max-w-5xl mr-auto ml-auto">
<span className="text-white/95">Create faster.</span>
<span className="inline-block relative">
<span className="absolute -inset-1 rounded-md blur-2xl bg-blue-500/30"></span>
<span className="relative">
<span className="z-10 relative">
<span className="inline-block relative">
<span className="-inset-1 [--fx-filter:blur(20px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-md ring-blue-400/70 ring-2 absolute">
</span>
<span className="px-2">Build</span>
</span>
</span>
</span>
</span>
<span className="text-white/95">smarter.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-2xl mt-6 mx-auto">
      Boost your productivity with AI-powered tools that write, design, and organize — all in one app.
    </p>

<div className="flex flex-col sm:flex-row gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="btn-wrapper" href="#" style={{-DotSize: '8px', -LineWeight: '1px', -LineDistance: '0.8rem 1rem', -AnimationSpeed: '0.35s', -DotColor: '#fffa', -LineColor: '#fffa', -GridColor: '#fff3', position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: 'auto', height: 'auto', padding: 'var(--line-distance)', backgroundColor: 'rgba(0, 0, 0, 0)', userSelect: 'none'}}>
<style>
      .btn-wrapper::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        pointer-events: none;
        background-color: #0000;
        background-image: repeating-linear-gradient(45deg, var(--grid-color) 0 1px, transparent 2px 5px);
        opacity: 0;
        z-index: -1;
      }

      .btn-wrapper:has(.btn:hover)::after {
        animation: opacity-anim calc(var(--animation-speed) * 4) ease-in-out forwards;
      }

      @keyframes opacity-anim {
        80% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      .btn-wrapper .btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem 1.25rem;
        background-color: #fff0;
        border: 1px solid var(--grid-color);
        color: #fffd;
        font-family: "Inter", sans-serif;
        letter-spacing: -0.01em;
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        border-radius: 6px;
        cursor: pointer;
        transition: transform .2s ease-in-out, letter-spacing .2s ease-in-out;
      }

      .btn-wrapper .btn:hover {
        background-color: #25358b;
        color: #fff;
        transform: scale(1.05);
        letter-spacing: .06em;
      }

      .btn-wrapper .btn:active {
        background-color: #25358b;
        transform: scale(.98);
        letter-spacing: .02em;
      }

      .btn-wrapper .btn-svg {
        margin-left: .5rem;
        height: 24px;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: #fff4;
        fill: #fff2;
        transition: all .2s ease-in-out;
      }

      .btn-wrapper .btn:hover .btn-svg {
        stroke: #fffa;
        fill: #fff3;
      }

      .btn-wrapper .dot {
        position: absolute;
        width: var(--dot-size);
        aspect-ratio: 1;
        border-radius: 2px;
        background-color: var(--dot-color);
        transition: all .3s ease-in-out;
        opacity: 0;
      }

      .btn-wrapper:has(.btn:hover) .dot.top.left {
        top: 50%;
        left: 20%;
        animation: move-top-left var(--animation-speed) ease-in-out forwards;
      }

      @keyframes move-top-left {
        90% {
          opacity: .6;
        }

        100% {
          top: calc(var(--dot-size) * -0.5);
          left: calc(var(--dot-size) * -0.5);
          opacity: 1;
        }
      }

      .btn-wrapper:has(.btn:hover) .dot.top.right {
        top: 50%;
        right: 20%;
        animation: move-top-right var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*.6);
      }

      @keyframes move-top-right {
        80% {
          opacity: .6;
        }

        100% {
          top: calc(var(--dot-size) * -0.5);
          right: calc(var(--dot-size) * -0.5);
          opacity: 1;
        }
      }

      .btn-wrapper:has(.btn:hover) .dot.bottom.right {
        bottom: 50%;
        right: 20%;
        animation: move-bottom-right var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*1.2);
      }

      @keyframes move-bottom-right {
        80% {
          opacity: .6;
        }

        100% {
          bottom: calc(var(--dot-size) * -0.5);
          right: calc(var(--dot-size) * -0.5);
          opacity: 1;
        }
      }

      .btn-wrapper:has(.btn:hover) .dot.bottom.left {
        bottom: 50%;
        left: 20%;
        animation: move-bottom-left var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*1.8);
      }

      @keyframes move-bottom-left {
        80% {
          opacity: .6;
        }

        100% {
          bottom: calc(var(--dot-size) * -0.5);
          left: calc(var(--dot-size) * -0.5);
          opacity: 1;
        }
      }

      .btn-wrapper .line {
        position: absolute;
        transition: all .3s ease-in-out;
      }

      .btn-wrapper .line.horizontal {
        height: var(--line-weight);
        width: 100%;
        background-image: repeating-linear-gradient(90deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
      }

      .btn-wrapper .line.top {
        top: calc(var(--line-weight)*-0.5);
        transform-origin: top left;
        transform: rotate(5deg) scaleX(0);
      }

      .btn-wrapper:has(.btn:hover) .line.top {
        animation: draw-top var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*.8);
      }

      @keyframes draw-top {
        100% {
          transform: rotate(0deg) scaleX(1);
        }
      }

      .btn-wrapper .line.bottom {
        bottom: calc(var(--line-weight)*-0.5);
        transform-origin: bottom right;
        transform: rotate(5deg) scaleX(0);
      }

      .btn-wrapper:has(.btn:hover) .line.bottom {
        animation: draw-bottom var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*2);
      }

      @keyframes draw-bottom {
        100% {
          transform: rotate(0deg) scaleX(1);
        }
      }

      .btn-wrapper .line.vertical {
        width: var(--line-weight);
        height: 100%;
        background-image: repeating-linear-gradient(0deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
      }

      .btn-wrapper .line.left {
        left: calc(var(--line-weight)*-0.5);
        transform-origin: bottom left;
        transform: rotate(0deg) scaleY(0);
      }

      .btn-wrapper:has(.btn:hover) .line.left {
        animation: draw-left var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*2.4);
      }

      @keyframes draw-left {
        100% {
          transform: rotate(0deg) scaleY(1);
        }
      }

      .btn-wrapper .line.right {
        right: calc(var(--line-weight)*-0.5);
        transform-origin: top right;
        transform: rotate(5deg) scaleY(0);
      }

      .btn-wrapper:has(.btn:hover) .line.right {
        animation: draw-right var(--animation-speed) ease-in-out forwards;
        animation-delay: calc(var(--animation-speed)*1.4);
      }

      @keyframes draw-right {
        100% {
          transform: rotate(0deg) scaleY(1);
        }
      }
    </style>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn bg-[#ffffff]">
<span className="btn-text">Start Creating</span>
<svg className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z"></path>
<path d="M3.2959 20.6016L9.65986 14.2376"></path>
<path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592"></path>
<path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z"></path>
</svg>
</button>
</a>
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-base font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-3 pr-5 pb-3 pl-5 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
  Watch Demo
  <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3" strokeLinecap="round" strokeLinejoin="round"></polygon>
</svg>
</a>
</div><div className="overflow-hidden w-full border-white/10 border rounded-2xl mt-24 mb-24 relative shadow-2xl backdrop-blur-xl">

<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="flex items-center gap-2"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
          Playbooks
        </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-white text-neutral-900 rounded font-sans font-medium">
            Active
          </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
            Draft
          </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
            Archive
          </button>
</div>

<div className="bg-white/5 rounded-lg p-2 flex-1">
<div className="text-xs text-slate-400 mb-2 font-sans">
            Active Playbooks
          </div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1 font-sans">
<svg className="h-3.5 w-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
              DB Failover Script
              <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/70">
                  Ready
                </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
              Scale Workers
              <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">
                  Ready
                </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
              Restart Service
              <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">
                  Ready
                </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
              Cache Warmup
              <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">Ready</span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans opacity-60">
<svg className="h-3.5 w-3.5 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
              Deploy Rollback
              <div className="ml-auto">
<span className="text-xs text-slate-500 font-sans">
                  Paused
                </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
              CPU Alert Fix
              <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-orange-400">
                  Ready
                </span>
</div>
</li>
</ul>
</div>

<div className="bg-white/5 rounded-lg p-2 mt-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
<span className="text-xs font-medium font-sans">
                Execution Stats
              </span>
</div>
<div className="flex gap-1">
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 rounded-sm bg-white"></div>
<span className="text-slate-300 font-sans text-[10px]">
                Success Rate
              </span>
<div className="ml-auto text-[10px] text-white/70">
                98.5%
              </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-white/80 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                Total Runs
              </span>
<div className="ml-auto text-[10px] text-white/70">
                1,247
              </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-5 h-2 bg-white/60 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                Avg Duration
              </span>
<div className="ml-auto text-[10px] text-white/60">
                2.3s
              </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-cyan-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                Active Users
              </span>
<div className="ml-auto text-[10px] text-cyan-400">
                12
              </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-orange-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                Last Run
              </span>
<div className="ml-auto text-[10px] text-slate-400">
                2m ago
              </div>
</div>
</div>
</div>
</div>
</aside>

<main className="md:col-span-6 bg-black/20 relative">
<div className="flex gap-2 text-xs text-slate-300 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
<span className="font-sans">recover-workers.playbook</span>
<div className="text-slate-500">•</div>
<span className="font-sans text-slate-400">Live editing</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-slate-400 font-sans">
            Saved 1m ago
          </div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-2 bg-black/10 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="p-1 rounded border border-white/10 bg-white text-neutral-900 hover:bg-zinc-100">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 11 12 14 22 4"></polyline>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1 flex-1">
<span className="text-xs text-slate-400 font-sans">Version:</span>
<button className="inline-flex items-center justify-center px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans whitespace-nowrap">
              v1.2.1
            </button>
<button className="sm:hidden p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 ml-auto">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans">
            Script
          </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
            Params
          </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
            History
          </button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden min-h-[400px] grid grid-rows-[auto,1fr,auto,auto] sm:min-h-[450px] sm:pt-0 sm:pb-0 sm:pl-0 sm:pr-0 border-0 rounded-none ring-0 pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4">

<div className="grid grid-cols-2 gap-3">
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                  Active Editors
                </span>
</div>
<div className="flex items-center gap-2">
<img alt="user" className="w-8 h-8 rounded-full ring-white/20 ring-2 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp"/>
<img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white/20 -ml-3 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp"/>
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-2 ring-white/20 -ml-3">
<span className="text-xs text-white/80">+1</span>
</div>
</div>
<div className="text-xs mt-2 font-sans text-white/70">
                3 people editing now
              </div>
</div>
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                  Last Execution
                </span>
</div>
<div className="text-2xl font-medium text-white font-sans">
                2.4s
              </div>
<div className="text-xs mt-1 font-sans text-white/70">
                Success • 2 minutes ago
              </div>
</div>
</div>

<div className="min-h-0 xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white font-sans">
                Playbook Script
              </h3>
<span className="text-xs text-slate-400 font-sans">
                TypeScript
              </span>
</div>
<div className="relative bg-black/60 rounded-lg p-4 font-mono text-sm text-white/90 overflow-auto" style={{maxHeight: '250px'}}>
<pre className="whitespace-pre-wrap">// shared live script
const s = Runlyx.Script.open("recover-workers");

s.apply("restartWorkers()", { user: "jordan" });
s.comment(2, "Check CPU before restart");
s.save("v1.2.1", "Add safety check");</pre>
</div>
<div className="flex justify-between mt-3 text-[10px] text-slate-500 font-sans">
<span>Line 1-5</span>
<span className="text-white/60">5 lines • No errors</span>
</div>
</div>

<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white font-sans flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                AI Assistant Chat
              </h3>
<span className="text-xs text-slate-400 font-sans">
                Ask questions
              </span>
</div>
<div className="relative">
<textarea className="w-full bg-black/60 border border-white/10 rounded-lg p-3 font-sans text-sm text-white/90 placeholder-slate-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 resize-none" placeholder="Ask AI to help with your script, explain code, or suggest improvements..." rows="3"></textarea>
<button className="absolute bottom-3 right-3 p-2 rounded-lg bg-white text-neutral-900 hover:bg-zinc-100 transition">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
<div className="flex items-center gap-2 mt-3 text-xs text-slate-500 font-sans">
<svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-white/60">AI-powered suggestions</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="xl:bg-black/10 text-center bg-white/10 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/20 transition">
<div className="text-sm font-medium text-white font-sans">
                Run
              </div>
<div className="text-[10px] text-slate-400 font-sans">
                Execute
              </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                Test
              </div>
<div className="text-[10px] text-slate-400 font-sans">
                Dry Run
              </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                Share
              </div>
<div className="text-[10px] text-slate-400 font-sans">
                Collaborate
              </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                Export
              </div>
<div className="text-[10px] text-slate-400 font-sans">
                Download
              </div>
</button>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
          Execution
        </div>
<div className="flex gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-white text-neutral-900 rounded font-sans font-medium">
          Parameters
        </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
          Safety
        </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
          Triggers
        </button>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-sans">
              Active Script
            </span>
<span className="text-xs text-white font-sans">
              recover-workers
            </span>
</div>
<div className="text-[10px] text-slate-500 space-y-1 font-sans">
<div className="flex justify-between">
<span>Status:</span>
<span className="text-white/70">Ready</span>
</div>
<div className="flex justify-between">
<span>Version:</span>
<span className="text-white/70">v1.2.1</span>
</div>
<div className="flex justify-between">
<span>Last Run:</span>
<span className="text-white/70">2m ago</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
              Input Parameters
            </span>
</div>
<div className="space-y-2 text-[10px]">
<div>
<div className="text-slate-400 mb-1 font-sans">
                Service Name
              </div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans" type="text" value="worker"/>
</div>
<div className="">
<div className="text-slate-400 mb-1 font-sans">
                Region
              </div>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans">
<option>us-east-1</option>
<option>us-west-2</option>
<option>eu-west-1</option>
<option>ap-south-1</option>
</select>
</div>
<div className="">
<div className="text-slate-400 mb-1 font-sans">
                Scale Factor
              </div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans" type="number" value="3"/>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">Safety Checks</span>
<button className="text-[10px] text-white/70 hover:text-white font-sans">
              Configure
            </button>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                Dry Run:
              </span>
<span className="text-white/70 font-sans">
                Enabled
              </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                Approvals:
              </span>
<span className="text-white/70 font-sans">
                Required (2)
              </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                Blast Radius:
              </span>
<span className="text-white/70 font-sans">
                Limited
              </span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
              Recent Executions
            </span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-sans bg-white/10 text-white/70">
              24h
            </span>
</div>
<div className="space-y-2">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                  Today
                </span>
<span className="text-slate-400 font-sans text-[10px]">
                  8 runs
                </span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-white rounded-full" style={{width: '87%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                  This Week
                </span>
<span className="text-slate-400 font-sans text-[10px]">
                  42 runs
                </span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-2 bg-gradient-to-r from-white to-white/60 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">Connected Alerts</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400 font-sans">
              2
            </span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center gap-2 p-2 rounded border bg-white/10 border-white/20">
<svg className="w-3 h-3 flex-shrink-0 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                PagerDuty: CPU High trigger
              </span>
</div>
<div className="flex items-center gap-2 p-2 bg-white/10 rounded border border-white/20">
<svg className="w-3 h-3 text-white flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                Grafana: Workers degraded
              </span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
              Quick Actions
            </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                Auto-approve
              </span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                Slack
              </span>
<button className="w-8 h-4 bg-white rounded-full relative">
<div className="w-3 h-3 bg-neutral-900 rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                Halt on error
              </span>
<button className="w-8 h-4 bg-white rounded-full relative">
<div className="w-3 h-3 bg-neutral-900 rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 hover:bg-zinc-100 text-xs font-medium text-neutral-900 bg-white rounded pt-2 pr-3 pb-2 pl-3">
          Run Script
        </button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10 font-sans">
          Test
        </button>
</div>
</aside>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 -z-0 top-24 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>


<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="pricing">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">

<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6">


<h2 className="sm:text-5xl md:text-5xl text-4xl font-semibold text-white tracking-tight mt-4">
          Everything you need<span className="block">to build smarter</span>
</h2>
<p className="md:text-lg text-base text-zinc-300/90 max-w-2xl mt-4">
          AI-powered tools designed to accelerate your workflow and unlock your creative potential.
        </p>

<div className="mt-10 space-y-6">

<section className="group overflow-hidden md:p-6 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" id="card-ai">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-sparkles text-white/80 w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="star-outline" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.292 3.308c-.394.514-.838 1.308-1.484 2.466l-.327.587l-.059.106c-.3.54-.555.998-.964 1.308c-.413.314-.917.427-1.503.559l-.114.026l-.636.144c-1.255.284-2.11.479-2.694.71c-.571.224-.691.409-.737.556c-.049.156-.05.395.29.937c.347.55.932 1.236 1.786 2.236l.434.507l.075.087c.403.47.739.862.893 1.358c.153.493.102 1.01.04 1.638l-.01.117l-.066.677c-.13 1.332-.216 2.25-.187 2.91c.03.66.169.842.28.926c.098.075.28.157.873-.013c.603-.172 1.405-.539 2.58-1.08l.596-.274l.109-.05c.545-.253 1.017-.471 1.533-.471s.988.218 1.533.47q.053.026.11.05l.595.275c1.175.541 1.977.908 2.58 1.08c.593.17.775.088.873.013c.111-.084.25-.267.28-.926c.03-.66-.058-1.578-.187-2.91l-.066-.677l-.01-.117c-.062-.628-.113-1.145.04-1.638c.154-.496.49-.888.893-1.358l.075-.087l.434-.507c.854-1 1.439-1.686 1.785-2.236c.341-.542.34-.78.291-.937c-.046-.147-.166-.332-.737-.556c-.585-.231-1.439-.426-2.694-.71l-.636-.144l-.114-.026c-.586-.132-1.09-.245-1.503-.559c-.41-.31-.663-.767-.964-1.308l-.058-.106l-.328-.587c-.646-1.158-1.09-1.952-1.484-2.466S12.114 2.75 12 2.75s-.315.044-.708.558m-1.19-.912C10.577 1.774 11.166 1.25 12 1.25s1.422.524 1.899 1.146c.468.612.965 1.503 1.572 2.592l.359.643c.392.704.493.854.619.95c.12.091.277.143 1.04.316l.7.158c1.176.266 2.145.485 2.85.763c.732.289 1.373.714 1.62 1.507c.244.785-.03 1.507-.454 2.18c-.412.655-1.07 1.425-1.874 2.365l-.475.555c-.517.604-.625.752-.676.915c-.051.167-.047.36.032 1.165l.071.738c.122 1.256.221 2.28.186 3.06c-.035.795-.215 1.557-.87 2.055c-.668.506-1.445.45-2.195.234c-.727-.208-1.633-.625-2.733-1.132l-.656-.302c-.718-.33-.871-.383-1.015-.383s-.297.053-1.015.383l-.655.302c-1.101.507-2.007.924-2.734 1.132c-.75.215-1.527.272-2.194-.234c-.656-.498-.836-1.26-.871-2.054c-.035-.78.064-1.805.186-3.06l.072-.739c.078-.806.082-.998.03-1.165c-.05-.163-.158-.31-.675-.915l-.475-.555c-.803-.94-1.461-1.71-1.873-2.364c-.425-.674-.699-1.396-.455-2.181c.247-.793.888-1.218 1.62-1.507c.705-.278 1.674-.497 2.85-.763l.063-.014l.636-.144c.764-.173.92-.225 1.041-.317c.126-.095.227-.245.62-.949l.358-.643c.607-1.09 1.104-1.98 1.572-2.592" fill="#ffffff" fill-rule="evenodd"></path></svg>
<span className="font-medium">AI Writing Assistant</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="flex-1">
<p className="text-sm text-white/90 mb-2">Generate content instantly</p>
<div className="text-xs text-white/60 font-mono h-8" id="typing-demo">Building</div>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Smart AI Assistant</h3>
<p className="mt-1.5 text-sm text-white/70">
              Let AI handle the heavy lifting. Generate content, refine ideas, and boost productivity in seconds.
            </p>

</section>

<section className="group overflow-hidden md:p-6 rounded-3xl ring-white/10 ring-1 pt-5 pr-5 pb-5 pl-5 relative" id="card-analytics">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-trending-up h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="font-medium">Performance Insights</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">Projects</p>
<p className="text-2xl font-semibold text-white">142</p>
<p className="text-xs mt-1 text-white/70">+12% this week</p>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">Efficiency</p>
<p className="text-2xl font-semibold text-white">94%</p>
<p className="text-xs mt-1 text-white/70">+8% improvement</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Advanced Analytics</h3>
<p className="mt-1.5 text-sm text-white/70">
              Track your progress with detailed insights. Make data-driven decisions to optimize your workflow.
            </p>
</section>
</div>
<div className="mt-auto"></div>
</div>

<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-start-2">

<section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" id="card-collab">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-users h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
<span className="font-medium">Team Collaboration</span>
</div>
<div className="flex items-center gap-2">
<img alt="user" className="w-8 h-8 rounded-full ring-white/20 ring-2 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp"/>
<img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white/20 -ml-3 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp"/>
<img alt="user" className="h-8 w-8 rounded-full ring-2 ring-white/20 -ml-3 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-2 ring-white/20 -ml-3">
<span className="text-xs text-white/80">+5</span>
</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-white/60" style={{width: '68%'}}></div>
</div>
<p className="text-xs text-white/60">8 team members active</p>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Real-Time Collaboration</h3>
<p className="mt-1.5 text-sm text-white/70">Work together seamlessly with your team. Share, edit, and create in real-time from anywhere.</p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" id="card-automation">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-workflow h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
<span className="font-medium">Smart Workflows</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/60"></div>
<span className="">Auto-save enabled</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/50"></div>
<span className="">Cloud sync active</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<div className="h-2 w-2 rounded-full bg-white/40"></div>
<span className="">AI backup running</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Workflow Automation</h3>
<p className="mt-1.5 text-sm text-white/70">Automate repetitive tasks and focus on what matters. Set it once and let Runlyx handle the rest.</p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" id="card-security">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-medium">Security &amp; Compliance</span>
</div>
<ul className="space-y-2 text-sm text-white/80">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-white/70" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Role-based access controls</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-white/70" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Data encryption at rest &amp; in transit</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-white/70" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Audit logs &amp; export</span>
</li>
</ul>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Enterprise-grade Protection</h3>
<p className="mt-1.5 text-sm text-white/70">Keep your data safe with built-in controls and transparent auditing.</p>
</section>
</div>
</div>


</div>
</section><section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative">

<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">

<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"></div>

<div className="mb-10 sm:p-10 pt-6 pr-6 pb-0 pl-6">
<div className="flex items-center gap-2 mb-5">
</div>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">Automation playbooks</h2>
<p className="mt-4 text-lg text-white/70 max-w-2xl">
        Build, test and run safe automations that turn alerts into fixes, not frantic rewrites.
      </p>
</div>

<div className="relative mb-10 sm:px-10 px-6">
<div className="flex md:w-auto gap-3 w-max" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" data-key="collab">Real-time collaboration</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="templates">Parameterized templates</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="safety">Safety and approvals</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="hooks">Observability hooks</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="triggers">Triggers and scheduling</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-xl">
<h3 className="md:text-2xl text-2xl font-semibold text-white tracking-tight mb-3" id="pb-title">Real-time collaboration</h3>
<p className="text-[12px] tracking-tight text-zinc-200 uppercase mb-4" id="pb-tagline">EDIT SCRIPTS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.</p>
<p className="text-white/80 text-sm leading-relaxed" id="pb-p1">Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.</p>
<p className="text-white/80 text-sm leading-relaxed mt-4" id="pb-p2">Everyone on call sees changes immediately so your team can author and run fixes together during an incident.</p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 hover:bg-zinc-100 h-11 px-5 ring-1 ring-white/20 text-sm font-medium transition shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)]" href="#learn-collab" id="pb-cta">
            Learn more
            <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="sm:p-10 pt-0 pr-6 pb-6 pl-6">
<div className="relative">
<div className="overflow-hidden ring-white/10 ring-1 rounded-3xl relative bg-white/[0.04] backdrop-blur">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
</div>
<div className="flex items-center gap-2 text-[12px] text-zinc-300">
<svg className="lucide lucide-file-code-2" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="m5 16-3 3 3 3"></path>
<path d="m9 22 3-3-3-3"></path>
</svg>
                recover-workers.playbook
              </div>
</div>

<div className="relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-gradient-to-b from-white/10 via-transparent to-white/5"></div>
<pre className="text-[12px] md:text-[13px] leading-relaxed whitespace-pre-wrap text-white/80 font-mono p-5" id="pb-code">// shared live script
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
</section><section className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl z-10 mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="pricing">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">

<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6">


<h2 className="sm:text-5xl md:text-5xl text-4xl font-semibold text-white tracking-tight mt-4">
          Simple pricing
          <span className="block">that grows with you</span>
</h2>
<p className="mt-4 text-base md:text-lg text-zinc-300/90 max-w-2xl">
          Pick a plan today and switch anytime. Clear value across Starter, Pro, and Enterprise.
        </p>

<div className="mt-6">
<div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-1 ring-1 ring-white/10">
<button className="billing-tab px-3 py-1.5 text-[11px] rounded-lg uppercase tracking-tight text-white ring-1 ring-white/20 bg-white/[0.08] transition" data-billing="monthly">
              MONTHLY
            </button>
<button className="billing-tab px-3 py-1.5 text-[11px] rounded-lg uppercase tracking-tight text-zinc-300 hover:text-white transition" data-billing="annual">
              ANNUALLY
            </button>
</div>
</div>

<div className="mt-10 space-y-3">

<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-2xl ring-0 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-plan-select="starter" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="">
<p className="text-white text-lg tracking-tight font-semibold">Starter</p>
<p className="text-[12px] tracking-tight text-zinc-300 mt-1 uppercase">Launch fast, learn faster.</p>
</div>
<span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 text-zinc-200 group-hover:bg-white/10 transition">
<svg className="lucide lucide-arrow-right w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-2xl ring-0 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-plan-select="pro" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="">
<p className="text-white text-lg tracking-tight font-semibold">Pro</p>
<p className="text-[12px] tracking-tight text-zinc-300 mt-1 uppercase">Grow with confidence.</p>
</div>
<span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 text-zinc-300 group-hover:text-zinc-100 group-hover:bg-white/10 transition">
<svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-2xl ring-0 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-plan-select="enterprise" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div>
<p className="text-white text-lg tracking-tight font-semibold">Enterprise</p>
<p className="text-[12px] tracking-tight text-zinc-300 mt-1 uppercase">Tailored for scale &amp; security.</p>
</div>
<span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 text-zinc-300 group-hover:text-zinc-100 group-hover:bg-white/10 transition">
<svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<div className="mt-auto"></div>
</div>

<div className="flex flex-col sm:p-8 bg-gradient-to-br from-white/0 via-white/10 to-white/0 max-w-xl rounded-2xl mt-8 mr-8 mb-8 ml-8 pt-6 pr-6 pb-6 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{background: 'radial-gradient(900px 360px at 20% -10%, rgba(255,255,255,0.12) 15%, transparent 60%)'}}>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<h3 className="text-2xl text-white font-semibold tracking-tight text-center sm:text-left" id="planName">Starter
          </h3>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
<div className="flex items-end gap-2 justify-center sm:justify-start">
<span className="text-6xl text-white tracking-tight" id="planPrice">$19</span>
<span className="text-zinc-300 mb-2 text-sm" id="planPriceSuffix">/month</span>
</div>

</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[12px] tracking-tight text-zinc-200 uppercase text-center sm:text-left" id="planTagline">
            GREAT FOR SMALL TEAMS LAUNCHING THEIR FIRST WORKFLOWS.
          </p>
<span className="hidden md:inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[11px] tracking-tight text-zinc-200" id="savePill">
            Save 20%
          </span>
</div>

<div className="bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<ul className="space-y-3 text-sm text-zinc-100" id="featureList">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>UP TO 5 PROJECTS</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">BASIC AUTOMATIONS</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">30-DAY RUN HISTORY</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>EMAIL SUPPORT</span>
</li>

</ul>
<div className="mt-6 pt-4 border-t border-white/10 text-[12px] text-zinc-300/90 text-center sm:text-left">
    Have special requirements? <a className="underline decoration-white/30 hover:decoration-white" href="#contact">Talk to
      sales</a>.
  </div>

<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 hover:bg-zinc-100 h-11 px-5 ring-1 ring-white/20 text-sm font-medium transition shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)]" href="#join" id="ctaBtn">
      Get Started
    </a>
</div>
</div>
</div>
</div>


</div>
</section>


<div className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative">

<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur mt-6">

<div className="pointer-events-none absolute inset-0">

<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
</div>

<div className="relative mx-auto flex flex-col items-center justify-center text-center pt-16 pb-16 px-8 sm:py-16 md:px-8">
<div className="w-full max-w-7xl">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">

<div className="lg:col-span-2">
<div className="flex flex-col items-start">
<div className="inline-flex bg-center mix-blend-screen w-[50px] h-[30px] bg-[url(https://cdn.midjourney.com/ff6f82bf-d54f-4853-a2a4-321ec87a6422/0_0.png?w=800&amp;q=80)] bg-cover rounded invert mb-4">
</div>
<p className="mb-6 text-left text-sm leading-relaxed text-zinc-400">
                Build faster and smarter with AI-powered tools designed for modern creators and teams.
              </p>
<div className="flex items-center gap-3">
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
</path>
</svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
</path>
</svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
</path>
</svg>
</a>
</div>
</div>
</div>

<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Product</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#features">Features</a></li>
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#pricing">Pricing</a></li>
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
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Careers</a></li>
</ul>
</div>
</div>

<div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
<p className="text-sm text-zinc-500">© 2025 Runai. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Privacy</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Terms</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Security</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Status</a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
