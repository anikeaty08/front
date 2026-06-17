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
  


        (function () {
          const tabs = document.querySelectorAll('.pb-tab');
          const title = document.getElementById('pb-title');
          const tagline = document.getElementById('pb-tagline');
          const p1 = document.getElementById('pb-p1');
          const p2 = document.getElementById('pb-p2');
          const code = document.getElementById('pb-code');

          const data = {
            events: {
              title: 'Event Triggers',
              tagline: 'REACT TO WEBHOOKS, CRON JOBS, OR DATABASE CHANGES.',
              p1: 'Set up listeners for any external event. Whether it\'s a Stripe payment, a new row in Postgres, or a scheduled maintenance window.',
              p2: 'We handle the concurrency, retries, and dead-letter queues so you don\'t have to build your own worker infrastructure.',
              code: `// Trigger: Webhook (Stripe Payment Success)
export default async function onPayment(event: StripeEvent) {
  const { customer, amount } = event.data.object;

  if (amount > 10000) {
    await Runlyx.log("High value transaction detected");
    await notifySalesTeam(customer);
  }

  return { status: "processed", id: event.id };
}`
            },
            transform: {
              title: 'Data Transformation',
              tagline: 'ETL PIPELINES MADE SIMPLE WITH TYPESCRIPT.',
              p1: 'Clean, aggregate, and enrich data in flight. Use standard TypeScript libraries to manipulate JSON, XML, or CSV streams.',
              p2: 'Map fields visually or write code for complex transformations. All executed in a secure, ephemeral sandbox.',
              code: `// Transform user data before sinking to warehouse
import { maskPII } from "./utils";

export default function transform(batch: User[]) {
  return batch.map(user => ({
    id: user.id,
    email: maskPII(user.email),
    geo: {
      lat: user.latitude,
      lng: user.longitude
    },
    updated_at: new Date().toISOString()
  }));
}`
            },
            api: {
              title: 'API Integration',
              tagline: 'CONNECT ANY API WITH BUILT-IN AUTH MANAGEMENT.',
              p1: 'Securely store credentials and manage OAuth tokens automatically. Call 3rd party APIs as if they were local functions.',
              p2: 'Rate limiting and retries are built-in. Monitor usage and costs per integration from a single dashboard.',
              code: `// Connect to Salesforce and Slack
const sf = await Runlyx.connect("salesforce");
const slack = await Runlyx.connect("slack");

const leads = await sf.query("SELECT Id, Name FROM Lead WHERE Status='New'");

for (const lead of leads) {
  await slack.postMessage({
    channel: "#sales-leads",
    text: \`New lead: \${lead.Name}\`
  });
}`
            },
            human: {
              title: 'Human-in-the-loop',
              tagline: 'PAUSE AUTOMATION FOR MANUAL APPROVAL.',
              p1: 'Not everything can be fully automated. Insert approval steps that notify your team via Slack or Email.',
              p2: 'The workflow state is preserved until an action is taken, allowing for long-running processes that span days.',
              code: `// Request approval for deployment
const approval = await Runlyx.requestApproval({
  team: "devops",
  message: "Approve production deployment for v2.4.0?",
  timeout: "24h"
});

if (approval.status === "approved") {
  await deployToProduction();
} else {
  await rollback();
}`
            }
          };

          function setActive(key) {
            const cfg = data[key];
            title.textContent = cfg.title;
            tagline.textContent = cfg.tagline;
            p1.textContent = cfg.p1;
            p2.textContent = cfg.p2;
            code.textContent = cfg.code;

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
      });
    })();
  
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="58" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)'}}>
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>

</div>
<div className="unicorn-stack fixed unicorn-mask top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>


<header className="sticky z-30 top-0 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="supports-[backdrop-filter]:bg-black/30 border-white/10 border rounded-2xl mt-4 backdrop-blur">
<div className="flex sm:pl-3 sm:pr-3 bg-[#000000] border-[#ffffff]/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<div className="inline-block">
<svg className="w-[48px] h-[48px]" data-icon-replaced="true" fill="none" height="208" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 207 208" width="207" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M184.214 54.146C184.214 37.0059 170.37 23.1111 153.293 23.1111C136.215 23.1111 122.371 37.0059 122.371 54.146C122.371 71.2861 136.215 85.1809 153.293 85.1809C170.37 85.1809 184.214 71.2861 184.214 54.146ZM207.241 54.146C207.241 84.0501 183.088 108.292 153.293 108.292C123.498 108.292 99.3442 84.0501 99.3442 54.146C99.3442 24.242 123.498 0 153.293 0C183.088 0 207.241 24.242 207.241 54.146Z" fill="currentColor"></path>
<path className="" d="M103.621 0C105.791 0 107.946 0.0668813 110.084 0.198934C108.49 1.57713 106.96 3.02745 105.499 4.54484C97.8939 11.9278 91.9814 21.0558 88.4036 31.2867C54.8263 38.3294 29.6059 68.2082 29.6059 104C29.6059 145.027 62.7434 178.286 103.621 178.286C139.282 178.286 169.051 152.973 176.068 119.272C186.268 115.679 195.367 109.74 202.726 102.101C204.233 100.638 205.674 99.1078 207.042 97.5132C207.174 99.6585 207.241 101.821 207.241 104C207.241 161.438 160.849 208 103.621 208C46.3925 208 0 161.438 0 104C0 46.5624 46.3925 0 103.621 0Z" fill="currentColor"></path>
</svg>
</div>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="text-white font-medium transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</nav>
<div className="flex gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-sm font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-3 pr-5 pb-3 pl-5 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}>
              Get Access
              <iconify-icon className="stroke-[1.5]" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="sm:px-6 sm:pt-24 sm:pb-20 lg:pr-8 lg:pt-32 lg:pl-8 lg:pb-24 max-w-7xl mt-4 mr-auto ml-auto pt-16 pr-0 pb-10 pl-0">

<div className="pointer-events-none select-none relative">
<span className="float-cursor -top-12 sm:-top-16 float-chip-1 -translate-x-1/2 absolute left-[55%] -translate-y-8">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
              Workflow Sync
            </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
<span className="float-cursor hidden md:block float-chip-2 absolute top-12 right-[5%] translate-x-8 translate-y-12">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
              API Ready
            </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
<span className="float-cursor absolute left-[12%] bottom-6 hidden sm:block float-chip-3">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
              99.9% Uptime
            </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
</div>

<div className="text-center">
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight max-w-5xl mr-auto ml-auto"><span className="text-white/95">The operating system</span> <span className="inline-block relative">
<span className="absolute -inset-1 rounded-md blur-2xl bg-blue-500/30"></span>
<span className="relative">
<span className="z-10 relative">
<span className="inline-block relative">
<span className="-inset-1 [--fx-filter:blur(20px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-md ring-blue-400/70 ring-2 absolute"></span>
<span className="px-2">for scale</span>
</span>
</span>
</span>
</span></h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-2xl mt-6 mr-auto ml-auto">
            A comprehensive suite of tools to manage infrastructure, automate workflows, and secure your data plane.
          </p>

<div className="flex flex-wrap gap-8 hover:grayscale-0 transition-all duration-500 opacity-60 mt-12 grayscale gap-x-8 gap-y-8 items-center justify-center">
<iconify-icon height="30" icon="logos:google" width="80"></iconify-icon>
<svg className="" data-icon-set="logos" data-logos="openai" height="30" style={{}} viewbox="0 0 512 126" width="80" xmlns="http://www.w3.org/2000/svg"><path className="" d="M365.131 49.074c-7.537 0-12.917 2.575-15.557 7.45l-1.42 2.64v-8.819H335.89v53.61h12.901V72.06c0-7.62 4.142-11.991 11.356-11.991c6.88 0 10.825 4.256 10.825 11.674v32.211h12.907V69.442c0-12.764-7.007-20.368-18.747-20.368m-62.565 0c-15.224 0-24.652 9.5-24.652 24.789v7.527c0 14.703 9.538 23.835 24.893 23.835c10.271 0 17.47-3.763 22-11.504l-7.998-4.602c-3.347 4.465-8.694 7.231-13.997 7.231c-7.773 0-12.413-4.798-12.413-12.84v-2.131h36.008v-8.891c0-14.243-9.352-23.414-23.83-23.414zm12.1 23.638h-24.311v-1.287c0-8.825 4.333-13.695 12.2-13.695c7.576 0 12.101 4.798 12.101 12.84zM512 41.52V31.265h-44.625V41.52h15.646v52.157h-15.646v10.255H512V93.677h-15.651V41.52zM173.638 29.786c-19.93 0-32.32 12.419-32.32 32.42v10.813c0 19.995 12.385 32.42 32.32 32.42s32.321-12.425 32.321-32.42V62.205c-.005-20.022-12.408-32.42-32.321-32.42m18.987 43.973c0 13.279-6.919 20.893-18.987 20.893s-18.982-7.614-18.982-20.893V61.46c0-13.279 6.925-20.893 18.988-20.893S192.63 48.18 192.63 61.46zm53.856-24.685c-6.771 0-12.633 2.805-15.69 7.5l-1.386 2.136v-8.365h-12.27V122.4h12.906V96.3l1.38 2.049c2.904 4.306 8.574 6.875 15.17 6.875c11.125 0 22.35-7.27 22.35-23.518v-9.115c0-11.707-6.919-23.518-22.46-23.518m9.554 32.003c0 8.64-5.04 14.008-13.148 14.008c-7.56 0-12.835-5.675-12.835-13.794v-8.064c0-8.217 5.319-14.002 12.945-14.002c8.047 0 13.048 5.363 13.048 14.002zM419.54 31.27l-26.037 72.684h13.109l4.985-15.58h29.932l.05.154l4.93 15.426h13.104l-26.082-72.69zm-4.744 46.855l11.745-36.748l11.625 36.748zM116.085 51.561a31.37 31.37 0 0 0-2.695-25.774a31.77 31.77 0 0 0-34.184-15.224A31.4 31.4 0 0 0 55.536.001a31.74 31.74 0 0 0-30.278 21.99A31.4 31.4 0 0 0 4.282 37.213a31.77 31.77 0 0 0 3.906 37.218a31.4 31.4 0 0 0 2.695 25.748a31.77 31.77 0 0 0 34.21 15.256a31.4 31.4 0 0 0 23.644 10.562a31.74 31.74 0 0 0 30.278-21.99a31.4 31.4 0 0 0 20.97-15.223a31.73 31.73 0 0 0-3.9-37.224m-47.348 66.22a23.52 23.52 0 0 1-15.108-5.478c.186-.104.548-.285.756-.422l25.09-14.484a4.07 4.07 0 0 0 2.06-3.567V58.453l10.6 6.119a.37.37 0 0 1 .208.296v29.28c0 13.041-10.564 23.618-23.606 23.633M18.015 96.12a23.56 23.56 0 0 1-2.82-15.821c.185.115.514.312.744.443l25.096 14.49a4.08 4.08 0 0 0 4.12 0L75.77 77.528v12.238a.37.37 0 0 1-.148.328L50.26 104.732c-11.292 6.502-25.716 2.637-32.245-8.64zm-6.573-54.782a23.5 23.5 0 0 1 12.287-10.354v29.823a4.08 4.08 0 0 0 2.06 3.567l30.623 17.683l-10.639 6.141a.37.37 0 0 1-.356.033L20.059 73.589c-11.282-6.527-15.148-20.957-8.64-32.25zm87.102 20.27L67.92 43.924l10.59-6.125a.38.38 0 0 1 .355-.033l25.359 14.643a23.61 23.61 0 0 1-3.649 42.598V65.191a4.08 4.08 0 0 0-2.049-3.583zM109.1 45.721a30 30 0 0 0-.745-.444L83.26 30.788a4.08 4.08 0 0 0-4.12 0L48.517 48.466V36.233a.4.4 0 0 1 .154-.328l25.358-14.638a23.61 23.61 0 0 1 35.06 24.46zM42.738 67.546l-10.605-6.119a.4.4 0 0 1-.203-.295V31.85a23.605 23.605 0 0 1 38.714-18.155c-.186.105-.52.285-.756.422l-25.09 14.484a4.08 4.08 0 0 0-2.06 3.567zm5.758-12.418l13.64-7.878l13.635 7.878v15.744l-13.64 7.877l-13.64-7.877z"></path></svg>
<iconify-icon className="" height="30" icon="logos:microsoft" width="80"></iconify-icon>
<iconify-icon className="" height="30" icon="logos:stripe" width="80"></iconify-icon>
<iconify-icon className="" height="30" icon="logos:anthropic" width="96"></iconify-icon>
</div>
</div>

<div className="overflow-hidden w-full border-white/10 border rounded-2xl mt-16 mb-0 relative shadow-2xl backdrop-blur-xl">

<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="text-xs text-slate-400 font-mono">dashboard.runlyx.com</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 bg-black/40 min-h-[500px]">

<div className="hidden md:flex md:col-span-2 border-r border-white/10 flex-col p-4 gap-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
<iconify-icon className="text-blue-400" icon="solar:widget-2-linear"></iconify-icon>
                 Overview
               </div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs text-slate-300 bg-white/10 px-2 py-1.5 rounded-md">
<iconify-icon icon="solar:graph-new-linear"></iconify-icon> Metrics
                 </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5 hover:text-slate-200 cursor-pointer">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> Resources
                 </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5 hover:text-slate-200 cursor-pointer">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Security
                 </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5 hover:text-slate-200 cursor-pointer">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Settings
                 </div>
</div>
</div>

<div className="md:col-span-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-end mb-6">
<div className="">
<h2 className="text-xl font-semibold text-white">System Status</h2>
<p className="text-sm text-slate-400">Real-time infrastructure monitoring</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-md flex items-center gap-1">
<iconify-icon className="" icon="solar:refresh-circle-linear"></iconify-icon> Live
                    </button>
<button className="px-3 py-1.5 text-xs bg-white/5 text-slate-300 border border-white/10 rounded-md">Export</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-black/40 border border-white/10 rounded-xl p-4">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Healthy</span>
</div>
<div className="text-2xl font-semibold text-white mb-1">99.98%</div>
<div className="text-xs text-slate-400">API Gateway Uptime</div>
<div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[94%]"></div>
</div>
</div>

<div className="bg-black/40 border border-white/10 rounded-xl p-4">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
<iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-slate-400">+12%</span>
</div>
<div className="text-2xl font-semibold text-white mb-1">142ms</div>
<div className="text-xs text-slate-400">Global Latency Avg</div>
<div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[65%]"></div>
</div>
</div>

<div className="bg-black/40 border border-white/10 rounded-xl p-4">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
<iconify-icon className="" icon="solar:bug-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Low</span>
</div>
<div className="text-2xl font-semibold text-white mb-1">0.02%</div>
<div className="text-xs text-slate-400">Error Rate (5xx)</div>
<div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[5%]"></div>
</div>
</div>
</div>

<div className="overflow-hidden group bg-black/40 h-48 border-white/10 border rounded-xl mt-4 pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-slate-200">Request Volume</span>
<iconify-icon className="text-slate-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="flex items-end gap-1 h-28 w-full px-2">

<div className="w-1/12 bg-white/10 h-[40%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[60%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[55%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[75%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/20 h-[90%] rounded-t-sm hover:bg-blue-500/50 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[80%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[65%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[70%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[45%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[50%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[30%] rounded-t-sm hover:bg-white/20 transition-all"></div>
<div className="w-1/12 bg-white/10 h-[45%] rounded-t-sm hover:bg-white/20 transition-all"></div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 -z-0 top-24 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl z-10 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 relative" id="features">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="sm:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6">
<h2 className="sm:text-5xl md:text-5xl text-4xl font-semibold text-white tracking-tight mt-4">
            Built for<span className="block">modern dev teams</span>
</h2>
<p className="md:text-lg text-base text-zinc-300/90 max-w-2xl mt-4">
            Everything you need to ship, scale, and secure your applications in one unified platform.
          </p>
<div className="mt-10 space-y-6">

<section className="group overflow-hidden md:p-6 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<iconify-icon height="16" icon="solar:code-square-linear" width="16"></iconify-icon>
<span className="font-medium">Visual Workflow Builder</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="h-0.5 flex-1 bg-white/10 relative">
<div className="absolute inset-y-0 left-0 w-1/2 bg-blue-500/50"></div>
</div>
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Drag &amp; Drop Logic</h3>
<p className="mt-1.5 text-sm text-white/70">
                Design complex backend logic visually. Connect databases, APIs, and services without writing boilerplate.
              </p>
</section>

<section className="group overflow-hidden md:p-6 rounded-3xl ring-white/10 ring-1 pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<iconify-icon height="16" icon="solar:chart-2-linear" width="16"></iconify-icon>
<span className="font-medium">Live Observability</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">Requests/s</p>
<p className="text-xl font-semibold text-white">42.5k</p>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<p className="text-xs text-white/60 mb-1">P99 Latency</p>
<p className="text-xl font-semibold text-white">24ms</p>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Real-time Metrics</h3>
<p className="mt-1.5 text-sm text-white/70">
                Instant insights into every function execution. Debug faster with distributed tracing built-in.
              </p>
</section>
</div>
<div className="mt-auto"></div>
</div>

<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-start-2">

<section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="font-medium">Collaborative Cloud</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 ring-2 ring-black flex items-center justify-center text-xs font-bold text-white">JD</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 ring-2 ring-black -ml-3 flex items-center justify-center text-xs font-bold text-white">AS</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-teal-500 ring-2 ring-black -ml-3 flex items-center justify-center text-xs font-bold text-white">MK</div>
<div className="h-8 w-8 rounded-full bg-white/10 ring-2 ring-white/20 -ml-3 flex items-center justify-center text-xs text-white">+5</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-white/60" style={{width: '75%'}}></div>
</div>
<p className="text-xs text-white/60">Branch merge in progress...</p>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Multiplayer Editing</h3>
<p className="mt-1.5 text-sm text-white/70">Pair program with your team in real-time. Comments, cursors, and presence awareness.</p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<iconify-icon height="16" icon="solar:git-branch-linear" width="16"></iconify-icon>
<span className="font-medium">GitOps Native</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-white/70">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Sync with GitHub/GitLab</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Preview environments</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Auto-rollback on error</span>
</div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Git-based Workflow</h3>
<p className="mt-1.5 text-sm text-white/70">Deploy code with a `git push`. We handle the build pipeline, testing, and promotion.</p>
</section>

<section className="group overflow-hidden md:p-6 ring-1 ring-white/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="font-medium">Enterprise Security</span>
</div>
<ul className="space-y-2 text-sm text-white/80">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-white/70" icon="solar:check-read-linear"></iconify-icon>
<span className="">SOC2 Type II Certified</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-white/70" icon="solar:check-read-linear"></iconify-icon>
<span>SAML SSO / SCIM</span>
</li>
</ul>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Bank-grade Security</h3>
<p className="mt-1.5 text-sm text-white/70">Keep your data safe with our compliant, encrypted, and isolated infrastructure.</p>
</section>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"></div>
<div className="mb-10 sm:p-10 pt-6 pr-6 pb-0 pl-6">
<h2 className="md:text-6xl text-5xl font-semibold text-white tracking-tight">Intelligent Orchestration</h2>
<p className="mt-4 text-lg text-white/70 max-w-2xl">
          Build powerful event-driven applications that react to the world in real-time.
        </p>
</div>
<div className="relative mb-10 sm:px-10 px-6">
<div className="flex flex-wrap md:flex-nowrap gap-3" id="pb-tabs">
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" data-key="events">Event Triggers</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="transform">Data Transformation</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="api">API Integration</button>
<button className="pb-tab inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06]" data-key="human">Human-in-the-loop</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-xl">
<h3 className="md:text-2xl text-2xl font-semibold text-white tracking-tight mb-3" id="pb-title">Event Triggers</h3>
<p className="text-[12px] tracking-tight text-zinc-200 uppercase mb-4" id="pb-tagline">REACT TO WEBHOOKS, CRON JOBS, OR DATABASE CHANGES.</p>
<p className="text-white/80 text-sm leading-relaxed" id="pb-p1">Set up listeners for any external event. Whether it's a Stripe payment, a new row in Postgres, or a scheduled maintenance window.</p>
<p className="text-white/80 text-sm leading-relaxed mt-4" id="pb-p2">We handle the concurrency, retries, and dead-letter queues so you don't have to build your own worker infrastructure.</p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 hover:bg-zinc-100 h-11 px-5 ring-1 ring-white/20 text-sm font-medium transition shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)]" href="#" id="pb-cta">
              Explore Docs
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
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
<iconify-icon icon="solar:code-file-linear" width="14"></iconify-icon>
                  function.ts
                </div>
</div>
<div className="relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-gradient-to-b from-white/10 via-transparent to-white/5"></div>
<pre className="text-[12px] md:text-[13px] leading-relaxed whitespace-pre-wrap text-white/80 font-mono p-5" id="pb-code">// Trigger: Webhook (Stripe Payment Success)
export default async function onPayment(event: StripeEvent) {
  const { customer, amount } = event.data.object;

  if (amount &gt; 10000) {
    await Runlyx.log("High value transaction detected");
    await notifySalesTeam(customer);
  }

  return { status: "processed", id: event.id };
}</pre>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-2xl"></div>
</div>
</div>
</div>

</div>
</section>

<section className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 max-w-7xl mr-auto ml-auto pt-0 pr-4 pb-16 pl-4 relative">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="flex flex-col md:flex-row gap-10 pt-10 pr-10 pb-10 pl-10 gap-x-10 gap-y-10 items-center justify-between">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Connect your stack</h2>
<p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Runlyx integrates seamlessly with the tools you already use. 
            From cloud providers to communication platforms, we've got you covered.
          </p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
<iconify-icon icon="logos:aws" width="30"></iconify-icon>
<span className="text-sm text-slate-300">AWS</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
<iconify-icon className="" icon="logos:datadog" width="70"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
<iconify-icon className="invert" icon="logos:github-icon" width="24"></iconify-icon>
<span className="text-sm text-slate-300">GitHub</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
<iconify-icon icon="logos:slack-icon" width="24"></iconify-icon>
<span className="text-sm text-slate-300">Slack</span>
</div>
</div>
<div className="mt-6">
<a className="text-sm font-medium text-white hover:text-blue-400 flex items-center gap-1 transition-colors" href="#">
              View all 50+ integrations <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-xs text-slate-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon icon="solar:plug-circle-linear" width="60"></iconify-icon>
</div>
<div className="text-green-400 mb-2">// runlyx.config.ts</div>
<div className="space-y-1">
<div className=""><span className="text-purple-400">export</span> <span className="text-purple-400">const</span> config = {</div>
<div className="pl-4">integrations: {</div>
<div className="pl-8">aws: { region: <span className="text-yellow-300">"us-east-1"</span> },</div>
<div className="pl-8">datadog: { apiKey: process.env.DD_KEY },</div>
<div className="pl-8">slack: { channels: [<span className="text-yellow-300">"#alerts"</span>] }</div>
<div className="pl-4">},</div>
<div className="pl-4">webhooks: <span className="text-blue-400">true</span></div>
<div className="">};</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-16 pl-4 relative">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
</div>
<div className="flex flex-col sm:py-16 md:px-8 text-center mr-auto ml-auto pt-16 pr-8 pb-16 pl-8 relative items-center justify-center">
<div className="w-full max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
<div className="lg:col-span-2">
<div className="flex flex-col items-start">
<svg className="w-[48px] h-[48px]" data-icon-replaced="true" fill="none" height="208" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 207 208" width="207" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M184.214 54.146C184.214 37.0059 170.37 23.1111 153.293 23.1111C136.215 23.1111 122.371 37.0059 122.371 54.146C122.371 71.2861 136.215 85.1809 153.293 85.1809C170.37 85.1809 184.214 71.2861 184.214 54.146ZM207.241 54.146C207.241 84.0501 183.088 108.292 153.293 108.292C123.498 108.292 99.3442 84.0501 99.3442 54.146C99.3442 24.242 123.498 0 153.293 0C183.088 0 207.241 24.242 207.241 54.146Z" fill="currentColor"></path>
<path className="" d="M103.621 0C105.791 0 107.946 0.0668813 110.084 0.198934C108.49 1.57713 106.96 3.02745 105.499 4.54484C97.8939 11.9278 91.9814 21.0558 88.4036 31.2867C54.8263 38.3294 29.6059 68.2082 29.6059 104C29.6059 145.027 62.7434 178.286 103.621 178.286C139.282 178.286 169.051 152.973 176.068 119.272C186.268 115.679 195.367 109.74 202.726 102.101C204.233 100.638 205.674 99.1078 207.042 97.5132C207.174 99.6585 207.241 101.821 207.241 104C207.241 161.438 160.849 208 103.621 208C46.3925 208 0 161.438 0 104C0 46.5624 46.3925 0 103.621 0Z" fill="currentColor"></path>
</svg>
<p className="leading-relaxed text-sm text-zinc-400 text-left mt-4 mb-6">
                  Build faster and smarter with AI-powered tools designed for modern creators and teams.
                </p>
<div className="flex items-center gap-3">
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<iconify-icon icon="logos:twitter" width="16"></iconify-icon>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<iconify-icon className="invert" icon="logos:github-icon" width="16"></iconify-icon>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-zinc-300 transition hover:bg-white/10" href="#">
<iconify-icon icon="logos:discord-icon" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Product</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#features">Features</a></li>
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Integrations</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Resources</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Documentation</a></li>
<li className=""><a className="text-sm text-zinc-400 transition hover:text-white" href="#">API Reference</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">About</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
<p className="text-sm text-zinc-500" style={{}}>© 2026 Runlyx. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Privacy</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Terms</a>
<a className="text-sm text-zinc-500 transition hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
