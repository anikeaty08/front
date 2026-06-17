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



/* Intersection Observer for Animations */
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>

</div>

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 mx-auto max-w-7xl grid-lines border-r border-l border-white/[0.02]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-40 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both]">
<nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black">
<iconify-icon height="14" icon="lucide:shield-check" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">
            Vault
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Compliance</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden text-xs font-medium text-neutral-400 hover:text-white sm:block px-2" href="#">
            Sign in
          </a>
<button className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800" style={{'--border-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', '--border-radius-before': '9999px'}}>
<span>Book Audit</span>
<iconify-icon className="opacity-50 transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</nav>
</div>

<main className="max-w-7xl z-10 mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">

<div className="mx-auto mb-24 max-w-4xl text-center">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
          Zero-Trust Environment Live
        </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-6xl font-medium leading-[0.95] tracking-tight text-white md:text-8xl">
          Infrastructure
          <br/>
<span className="text-neutral-500">Identity Plane.</span>
</h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight">
          Orchestrate secrets, manage access, and enforce least-privilege
          policies across your entire cloud stack instantly.
        </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-center justify-center gap-4 sm:flex-row">
<div className="relative w-full max-w-xs group">
<input className="h-12 w-full rounded-full bg-[#0F0F0F] border border-white/10 px-5 text-sm text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all shadow-inner" placeholder="security@company.com" type="email"/>
<div className="absolute right-1 top-1 bottom-1">
<button className="h-full rounded-full bg-white px-4 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors">
                Get Access
              </button>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-600" icon="lucide:check-circle"></iconify-icon>
<span>SOC2 Type II Ready</span>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

<div className="absolute -left-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          01
        </div>
<div className="absolute -right-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
          02
        </div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] flex flex-col gap-6 md:col-span-4">
<div className="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-6 shadow-2xl transition-colors hover:border-white/10 group">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none z-10"></div>
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<span className="flex h-2 w-2 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
<span className="h-1 w-1 rounded-full bg-green-500"></span>
</span>
                Active Session
              </div>
<iconify-icon className="text-neutral-600" icon="lucide:more-horizontal"></iconify-icon>
</div>
<div className="space-y-4">

<div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400">
<iconify-icon icon="lucide:terminal" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-neutral-200">
                      Production DB
                    </div>
<div className="text-[10px] text-neutral-600">2s ago</div>
</div>
<div className="text-[10px] text-neutral-500">
                    Injecting env vars...
                  </div>
</div>
</div>

<div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-60">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400">
<iconify-icon icon="lucide:key" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-neutral-200">
                      API Key Rotation
                    </div>
<div className="text-[10px] text-neutral-600">1m ago</div>
</div>
<div className="text-[10px] text-neutral-500">
                    Automated by policy
                  </div>
</div>
</div>

<div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-40">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400">
<iconify-icon icon="lucide:user" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-neutral-200">
                      Admin Login
                    </div>
<div className="text-[10px] text-neutral-600">5m ago</div>
</div>
<div className="text-[10px] text-neutral-500">Via SAML SSO</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] relative md:col-span-4">
<div className="flex flex-col h-full justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
<div className="">
<div className="mb-2 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="lucide:lock" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Encryption
                </span>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white">
                AES-256
              </h3>
<p className="mt-2 text-sm text-neutral-400">
                GCM Mode. Keys never leave the secure enclave.
              </p>
</div>
<div className="mt-8 flex items-end justify-between gap-1 h-16 opacity-80 px-2">
<style>
                @keyframes entropy {
                    0% { height: 25%; opacity: 0.4; }
                    33% { height: 60%; opacity: 0.8; }
                    66% { height: 35%; opacity: 0.5; }
                    100% { height: 90%; opacity: 0.9; }
                }
              </style>

<div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{animation: 'entropy 1.8s ease-in-out infinite alternate', animationDelay: '0.1s', height: '40%'}}></div>
<div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{animation: 'entropy 2.2s ease-in-out infinite alternate', animationDelay: '0.3s', height: '70%'}}></div>
<div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{animation: 'entropy 1.5s ease-in-out infinite alternate', animationDelay: '0.5s', height: '30%'}}></div>
<div className="w-1.5 bg-white rounded-t-sm shadow-[0_0_10px_white]" style={{animation: 'entropy 2.5s ease-in-out infinite alternate', animationDelay: '0.2s', height: '90%'}}></div>
<div className="w-1.5 bg-neutral-600 rounded-t-sm" style={{animation: 'entropy 1.9s ease-in-out infinite alternate', animationDelay: '0.7s', height: '50%'}}></div>
<div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{animation: 'entropy 1.6s ease-in-out infinite alternate', animationDelay: '0.4s', height: '30%'}}></div>
<div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{animation: 'entropy 2.1s ease-in-out infinite alternate', animationDelay: '0.6s', height: '60%'}}></div>
<div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{animation: 'entropy 2.3s ease-in-out infinite alternate', animationDelay: '0.8s', height: '40%'}}></div>
<div className="w-1.5 bg-neutral-600 rounded-t-sm" style={{animation: 'entropy 1.7s ease-in-out infinite alternate', animationDelay: '0.1s', height: '20%'}}></div>
<div className="w-1.5 bg-neutral-500 rounded-t-sm" style={{animation: 'entropy 2.0s ease-in-out infinite alternate', animationDelay: '0.5s', height: '55%'}}></div>
<div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{animation: 'entropy 1.4s ease-in-out infinite alternate', animationDelay: '0.2s', height: '35%'}}></div>
<div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{animation: 'entropy 1.8s ease-in-out infinite alternate', animationDelay: '0.9s', height: '45%'}}></div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] relative md:col-span-4">
<div className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 hover:border-white/10 transition-colors">
<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-6 rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-md">
<iconify-icon className="text-white" icon="lucide:network" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Universal Mesh</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Inject secrets into Kubernetes, Vercel, AWS, and local envs
                without code changes.
              </p>
</div>

<div className="absolute inset-0 z-0 opacity-20">
<svg height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<circle className="text-neutral-500" cx="2" cy="2" fill="currentColor" r="1"></circle>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
</div>
</div>
</div>
</main>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.8s_both] border-y border-white/5 bg-[#030303]">
<div className="mx-auto max-w-7xl px-6 py-16 text-center">
<p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
          Security for high-growth teams
        </p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-20">
<iconify-icon className="text-white" icon="simple-icons:github" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:cloudflare" width="30"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="26"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:datadog" width="28"></iconify-icon>
</div>
</div>
</div>

<section className="relative overflow-hidden bg-[#050505] py-32">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,20,20,1),_rgba(5,5,5,0))]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
              Designed for the
              <br/>
              paranoid &amp; productive.
            </h2>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both]">
<p className="text-lg font-light leading-relaxed text-neutral-400">
              Traditional secret managers are clunky and slow. Vault removes the
              friction between security compliance and developer velocity.
            </p>
<div className="mt-8 flex gap-6">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white">99.9%</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                  Uptime SLA
                </span>
</div>
<div className="h-auto w-px bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white">&lt;5ms</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                  Injection Latency
                </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
<iconify-icon icon="lucide:fingerprint" width="20"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white">
              Identity-First Access
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Replace long-lived static keys with short-lived dynamic
              credentials tied to machine identity.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
<iconify-icon icon="lucide:refresh-cw" width="20"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white">
              Automated Rotation
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Automatically rotate database credentials, API keys, and
              certificates on a set schedule.
            </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
<div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
<iconify-icon icon="lucide:file-search" width="20"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white">
              Immutable Audit Logs
            </h3>
<p className="text-sm leading-relaxed text-neutral-400">
              Every access request, decryption, and config change is
              cryptographically signed and logged.
            </p>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/5 bg-[#030303] py-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.03),_transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
            Security Schema
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light">
            Visualizing the request lifecycle in a zero-trust environment.
          </p>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] relative rounded-3xl border border-white/5 bg-[#0A0A0A] p-8 md:p-12 shadow-2xl">

<div className="absolute top-[36%] md:top-1/2 left-0 w-full -translate-y-1/2 px-12 md:px-24 hidden md:block pointer-events-none z-0">
<div className="relative h-px w-full bg-white/5">
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" style={{animation: 'schemaFlow 3s linear infinite'}}></div>
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" style={{animation: 'schemaFlow 3s linear infinite 1.5s'}}></div>
</div>
</div>
<div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative z-10">

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500/30">
<div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<iconify-icon className="text-neutral-400 transition-colors group-hover:text-cyan-400" icon="lucide:fingerprint" width="28"></iconify-icon>
<div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#111] bg-green-500/20 text-green-400 backdrop-blur-md">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Identity Verification
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Request originates from authenticated workload (K8s Pod /
                Lambda) signed via OIDC.
              </p>
</div>

<div className="group flex flex-col items-center text-center relative">
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/20 bg-[#0F0F0F] shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-transform duration-500 group-hover:scale-110 z-10">
<iconify-icon className="text-cyan-400" icon="lucide:shield-check" width="32"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Policy Enforcement
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Vault intercepts request, validates RBAC policies, and retrieves
                encrypted secrets.
              </p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30">
<div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<iconify-icon className="text-neutral-400 transition-colors group-hover:text-purple-400" icon="lucide:database" width="28"></iconify-icon>
<div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#111] bg-purple-500/20 text-purple-400 backdrop-blur-md">
<iconify-icon icon="lucide:unlock" width="10"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                Just-in-Time Injection
              </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                Ephemeral credentials injected directly into process memory.
                Nothing written to disk.
              </p>
</div>
</div>
<div className="mt-12 overflow-hidden rounded-xl border border-white/5 bg-black/40 p-3 font-mono text-[10px] text-neutral-500 backdrop-blur-sm mx-auto max-w-2xl">
<div className="flex items-center gap-4 md:gap-8 justify-center overflow-x-auto whitespace-nowrap px-2 no-scrollbar">
<div className="shrink-0 text-cyan-500/50">LOG: AUDIT-9392</div>
<div>
<span className="text-purple-400">auth.method</span>
                ="k8s-service-account"
                <span className="text-purple-400">policy</span>
                ="read-prod-db"
              </div>
<div className="ml-auto text-green-500/50">ALLOWED</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#020202] py-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<style>
          @keyframes scroll-y {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
          }
          .animate-scroll-y {
              animation: scroll-y 20s linear infinite;
          }
          .group:hover .animate-scroll-y {
              animation-play-state: paused;
          }
        </style>
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] order-2 lg:order-1">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0C0C0C] shadow-2xl">

<div className="relative z-20 flex items-center gap-2 border-b border-white/5 bg-[#0C0C0C] px-4 py-3">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="ml-4 text-[10px] font-mono text-neutral-600">
                  vault-cli — zsh
                </div>
</div>

<div className="relative h-[320px] overflow-hidden bg-[#0C0C0C] px-6 font-mono text-xs leading-relaxed">

<div className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0C0C0C] to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none"></div>
<div className="animate-scroll-y py-4">

<div className="space-y-2 pb-2">
<div className="text-neutral-500">
                      [system] Initializing secure enclave...
                    </div>
<div className="text-neutral-500">
                      [auth] Identity verified:
                      <span className="text-neutral-300">service-worker-01</span>
</div>
<div className="text-neutral-500">
                      $ vault run --env production -- npm start
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Injecting 24 secrets...
                      <span className="text-green-500">Done (45ms)</span>
</div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Verifying signatures...
                      <span className="text-green-500">Verified</span>
</div>
<div className="text-neutral-500">
                      [net] Establishing mTLS connection...
                    </div>
<div className="text-white">&gt; server ready on port 3000</div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                      Incoming request GET /api/v1/user
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                      Token rotation check:
                      <span className="text-green-500">Valid</span>
</div>
<div className="text-neutral-500">
                      $ vault audit export --format=json
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Exporting logs to S3...
                      <span className="text-green-500">Success</span>
</div>
</div>

<div className="space-y-2 pb-2">
<div className="text-neutral-500">
                      [system] Initializing secure enclave...
                    </div>
<div className="text-neutral-500">
                      [auth] Identity verified:
                      <span className="text-neutral-300">service-worker-01</span>
</div>
<div className="text-neutral-500">
                      $ vault run --env production -- npm start
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Injecting 24 secrets...
                      <span className="text-green-500">Done (45ms)</span>
</div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Verifying signatures...
                      <span className="text-green-500">Verified</span>
</div>
<div className="text-neutral-500">
                      [net] Establishing mTLS connection...
                    </div>
<div className="text-white">&gt; server ready on port 3000</div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                      Incoming request GET /api/v1/user
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                      Token rotation check:
                      <span className="text-green-500">Valid</span>
</div>
<div className="text-neutral-500">
                      $ vault audit export --format=json
                    </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                      Exporting logs to S3...
                      <span className="text-green-500">Success</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] order-1 lg:order-2">
<h2 className="mb-6 text-3xl font-medium tracking-tight text-white md:text-4xl">
              Works where you work.
            </h2>
<p className="mb-8 text-neutral-400 font-light leading-relaxed">
              Whether you are deploying to bare metal, serverless, or edge
              workers, Vault injects variables at runtime. No more .env files
              committed to git.
            </p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                Compatible with Docker &amp; Kubernetes
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                CI/CD Integration (GitHub Actions, GitLab)
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                Language Agnostic (Node, Go, Python, Rust)
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#050505] py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-4 text-3xl font-medium text-white">
            Simple Protection
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-neutral-400">
            Secure your first project for free.
          </p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col rounded-2xl border border-white/5 bg-transparent p-6 hover:border-white/10">
<div className="mb-1 text-sm font-medium text-neutral-300">
              Developer
            </div>
<div className="mb-6 text-2xl font-semibold text-white">
              $0
              <span className="text-sm font-normal text-neutral-500">/mo</span>
</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                Up to 3 users
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                Encrypted Storage
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                CLI Access
              </li>
</ul>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/5">
              Start Free
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative flex flex-col rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 shadow-2xl">
<div className="absolute -top-3 left-6 inline-block rounded-full border border-white/10 bg-[#0F0F0F] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
              Recommended
            </div>
<div className="mb-1 text-sm font-medium text-neutral-300">Team</div>
<div className="mb-6 text-2xl font-semibold text-white">
              $12
              <span className="text-sm font-normal text-neutral-500">/user</span>
</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                Unlimited users
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                Key Rotation
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                Audit Logs
              </li>
</ul>
<button className="w-full rounded-full bg-white py-2.5 text-xs font-semibold text-black transition-transform hover:scale-[1.02]">
              Get Started
            </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex flex-col rounded-2xl border border-white/5 bg-transparent p-6 hover:border-white/10">
<div className="mb-1 text-sm font-medium text-neutral-300">
              Organization
            </div>
<div className="mb-6 text-2xl font-semibold text-white">Custom</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                SSO (SAML/OIDC)
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                Self-Hosted Option
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon>
                Dedicated Support
              </li>
</ul>
<button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/5">
              Contact Sales
            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pb-12 pt-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="lucide:shield-check" width="18"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white">
                Vault
              </span>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              The operating system for modern infrastructure security. Built for
              developers who care about data.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Product</span>
<a className="hover:text-white" href="#">Secrets</a>
<a className="hover:text-white" href="#">Access</a>
<a className="hover:text-white" href="#">Integrations</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Company</span>
<a className="hover:text-white" href="#">About</a>
<a className="hover:text-white" href="#">Security</a>
<a className="hover:text-white" href="#">Legal</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Social</span>
<a className="hover:text-white" href="#">GitHub</a>
<a className="hover:text-white" href="#">Twitter</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-neutral-600">
            © 2024 Vault Security Inc.
          </p>
<div className="flex gap-4">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">
              All Systems Operational
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
