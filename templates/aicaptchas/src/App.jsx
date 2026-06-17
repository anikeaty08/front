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
  


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-item');
            revealElements.forEach(el => observer.observe(el));

            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                if (!heroBg) return;
                const scrollPosition = window.scrollY;
                if (scrollPosition < window.innerHeight) {
                    heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                }
            });
        });
    
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
      

<div className="aura-background-component top-0 w-full h-screen mix-blend-screen saturate-0 z-10 pointer-events-none absolute" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>

</div></div>

<section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Abstract Intelligence" className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c55b9091-b0ca-4842-92d7-7be239f76440_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<nav className="flex md:px-12 w-full z-10 pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2.5 reveal-item delay-100">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" style={{color: 'rgb(242, 240, 235)'}}></iconify-icon>
</div>
<span className="text-xl text-white font-mono-geist font-normal tracking-tight">aiCAPTCHAs</span>
</div>
<div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
<a className="hover:text-white transition-colors tracking-tight font-sans reveal-item delay-200" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors tracking-tight font-sans reveal-item delay-300" href="#integration">Integration</a>
<a className="hover:text-white transition-colors tracking-tight font-sans reveal-item delay-400" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors tracking-tight font-sans reveal-item delay-500" href="#">Docs</a>
</div>
<div className="hidden items-center gap-6 text-sm md:flex reveal-item delay-500">
<a className="text-white/70 hover:text-white transition-colors tracking-tight font-sans" href="#">Log In</a>
<a className="group flex items-center gap-1.5 rounded-full bg-[#F2F0EB] px-5 py-2 text-sm text-stone-900 transition-all hover:bg-white hover:scale-105 tracking-tight font-sans font-medium" href="#">
                    Get API Key
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<button className="md:hidden text-white reveal-item">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<div className="z-10 flex h-[calc(100vh-100px)] flex-col md:px-12 md:pb-20 pr-6 pb-12 pl-6 relative justify-end">

<div className="mb-auto flex w-full justify-between pt-12 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300">
<span className="uppercase tracking-tight font-mono-geist">// Not "are you human?" — "Are you smart enough?"</span>
<span className="tracking-tight font-mono-geist">v1.0</span>
</div>
<div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">

<h1 className="leading-[1.1] md:max-w-4xl md:text-7xl lg:text-8xl text-5xl font-light text-white tracking-tighter font-dm-sans reveal-item delay-100">
                    The CAPTCHA That Lets <span className="text-white/90 font-dm-sans font-light tracking-tighter">Smart Agents Through.</span>
</h1>

<div className="flex max-w-sm flex-col gap-8 reveal-item delay-300">
<p className="text-lg leading-relaxed text-white/80 tracking-tight font-sans">
                        CAPTCHAs block bots. But they also block AI agents doing real work. aiCAPTCHAs is a reverse CAPTCHA — it gates on intelligence, not humanity.
                    </p>
<div className="flex gap-3">
<a className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm text-stone-900 transition-all hover:bg-white hover:shadow-lg hover:scale-105 tracking-tight font-sans font-medium" href="#">
                            Start Free
                            <iconify-icon className="text-lg transition-transform group-hover:rotate-45" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="group flex w-fit items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white tracking-tight font-sans" href="#">
                            Read Docs
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 md:py-32 text-stone-800 bg-[#EAE8E2] w-full pt-20 pr-6 pb-20 pl-6 relative">

<div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-24 reveal-item">
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tight font-mono-geist">// The problem with traditional CAPTCHAs</span>
<span className="tracking-tight font-mono-geist">01</span>
</div>
</div>

<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">

<div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-800 flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"></div>
<div className="relative flex flex-col items-center gap-6 p-8">
<div className="text-stone-500 font-mono-geist text-xs uppercase tracking-widest">Traditional CAPTCHA</div>
<div className="flex gap-3 items-center">
<div className="h-12 w-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
<iconify-icon className="text-red-400 text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<iconify-icon className="text-stone-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<div className="h-12 w-12 rounded-lg bg-stone-700 border border-stone-600 flex items-center justify-center">
<iconify-icon className="text-stone-400 text-xl" icon="solar:lock-linear"></iconify-icon>
</div>
</div>
<div className="text-stone-400 text-sm text-center font-sans leading-relaxed max-w-[200px]">Blocks everything non-human — including legitimate AI agents</div>
<div className="w-full h-px bg-stone-700 my-2"></div>
<div className="text-[#F2F0EB]/80 font-mono-geist text-xs uppercase tracking-widest">aiCAPTCHAs</div>
<div className="flex gap-3 items-center">
<div className="h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<iconify-icon className="text-stone-400 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-stone-300 text-sm text-center font-sans leading-relaxed max-w-[200px]">Smart agents pass. Dumb bots fail.</div>
</div>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tight font-mono-geist">[01] Intelligence Gating</span>
<span className="tracking-tight font-mono-geist">©2025</span>
</div>
</div>

<div className="flex flex-col gap-20 lg:col-span-8">

<p className="leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15] text-3xl font-light text-stone-900 tracking-tighter font-dm-sans reveal-item delay-200">
                    CAPTCHAs were built to block bots. They work — but they block everything non-human <span className="text-stone-400 font-dm-sans font-light tracking-tighter">indiscriminately.</span> AI agents are legitimate callers. aiCAPTCHAs lets the smart ones through.
                </p>

<div className="grid grid-cols-1 gap-12 md:grid-cols-2">

<div className="flex flex-col gap-4 reveal-item delay-300">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-900 flex items-center justify-center p-8">

<div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>
<div className="relative w-full font-mono-geist text-xs space-y-3">
<div className="text-stone-500">// Challenge request</div>
<div className="bg-stone-800/50 rounded-lg p-4 border border-stone-700/50 space-y-1.5">
<div><span className="text-emerald-400">POST</span> <span className="text-stone-300">/v1/challenge</span></div>
<div className="text-stone-500">→ 20 cryptographic operations</div>
<div className="text-stone-500">→ type: modular_arithmetic</div>
</div>
<div className="text-stone-500 mt-4">// Agent solves in ~12ms</div>
<div className="bg-stone-800/50 rounded-lg p-4 border border-stone-700/50 space-y-1.5">
<div><span className="text-blue-400">POST</span> <span className="text-stone-300">/v1/verify</span></div>
<div className="text-emerald-400">✓ score: 94</div>
<div className="text-emerald-400">✓ token: eyJhbG…</div>
</div>
<div className="text-stone-500 mt-4">// Dumb bot fails</div>
<div className="bg-red-950/30 rounded-lg p-4 border border-red-900/30 space-y-1.5">
<div className="text-red-400">✗ score: 12</div>
<div className="text-red-400">✗ verification_failed</div>
</div>
</div>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tight font-mono-geist">[02] Challenge Flow</span>
<span className="tracking-tight font-mono-geist">©2025</span>
</div>
</div>

<div className="flex flex-col justify-between py-4">
<div className="space-y-8 reveal-item delay-400">
<p className="leading-relaxed text-lg text-stone-600 tracking-tight font-sans">
                                Challenges are cryptographic math operations drawn from 20 types. An LLM-backed agent solves them in milliseconds. A dumb scraper or spam bot fails every time.
                            </p>
<div className="flex gap-1 text-stone-400">
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<div className="mt-12 flex items-end justify-between border-t border-stone-300/50 pt-12 reveal-item delay-500">
<div className="flex gap-12">
<div>
<span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">20</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tight font-mono-geist">Operation Types</p>
</div>
<div>
<span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">&lt;50ms</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tight font-mono-geist">Solve Time</p>
</div>
</div>
<button className="rounded-full border border-stone-400/30 p-3 hover:bg-stone-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-item delay-200 border-stone-300/50 border-t mt-24 pt-12">
<p className="uppercase text-xs text-stone-400 tracking-tight font-mono-geist mb-8">Built for teams building with AI agents</p>
<div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
<div className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
<iconify-icon height="30" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:anthropic" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:linear" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:microsoft" width="96"></iconify-icon>
</div>
<div aria-hidden="true" className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
<iconify-icon height="30" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:anthropic" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:linear" width="96"></iconify-icon>
<iconify-icon height="30" icon="logos:microsoft" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]" id="how-it-works">
<div className="mx-auto max-w-7xl">

<div className="mb-24 max-w-2xl reveal-item">
<h2 className="mb-8 text-4xl font-light tracking-tighter text-white md:text-6xl font-dm-sans">
                    How It Works
                </h2>
<p className="text-lg leading-relaxed text-stone-400 font-sans tracking-tight">
                    Three steps. Your agent requests a challenge, solves the cryptographic operations, and your backend validates the token. Capable agents pass. Everything else doesn't.
                </p>
</div>

<div className="flex flex-col w-full">

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-100">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono-geist text-stone-600">01</span>
<span className="font-medium tracking-tight text-white font-sans">Request a Challenge</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                            Your agent or widget calls the API and receives a set of cryptographic math operations drawn from 20 distinct types. Each challenge is unique and time-bound.
                        </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-200">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono-geist text-stone-600">02</span>
<span className="font-medium tracking-tight text-white font-sans">Agent Solves</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                            The agent computes the operations and submits answers. An LLM-backed agent solves them in milliseconds. A dumb bot, scraper, or automated junk fails.
                        </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-300">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono-geist text-stone-600">03</span>
<span className="font-medium tracking-tight text-white font-sans">Validate Server-Side</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                            Your backend validates the resulting token server-side. You get a verification score from 0–100, weighted by accuracy, speed, and complexity. Use it for tiered access or quality gating.
                        </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-400">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono-geist text-stone-600">04</span>
<span className="font-medium tracking-tight text-white font-sans">Intelligence Scoring</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                            Every verification produces a score from 0–100. A 95 and a 60 both pass, but they say different things about the caller. Use scores for tiered access, capability gating, or quality filtering.
                        </p>
</div>
</div>

<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-500">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono-geist text-stone-600">05</span>
<span className="font-medium tracking-tight text-white font-sans">Difficulty Levels</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                            Each API key has a configurable difficulty: <span className="font-mono-geist text-stone-300 text-sm">EASY</span>, <span className="font-mono-geist text-stone-300 text-sm">STANDARD</span>, <span className="font-mono-geist text-stone-300 text-sm">HARD</span>, or <span className="font-mono-geist text-stone-300 text-sm">EXTREME</span>. Higher levels require faster solves across more operation types.
                        </p>
</div>
</div>

<div className="group flex flex-col gap-4 rounded-lg bg-stone-800/50 px-4 py-6 transition-all hover:bg-stone-800 md:flex-row md:items-center md:gap-12 md:-mx-4 mt-8 reveal-item delay-500">
<div className="flex basis-1/3 items-center gap-8 text-sm md:text-base">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-300">
<iconify-icon className="text-sm" icon="solar:code-linear"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white font-sans">Two Integration Paths</span>
</div>
<div className="basis-2/3">
<p className="text-stone-400 font-sans leading-relaxed text-base">
                            REST API for full control, or a drop-in JavaScript widget that handles everything client-side with a single <span className="font-mono-geist text-stone-300 text-sm">&lt;script&gt;</span> tag. Your call.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 md:py-32 text-stone-900 bg-[#EAE8E2] w-full pt-24 pr-6 pb-24 pl-6 relative overflow-hidden" id="integration">

<div className="absolute inset-0 w-full h-full pointer-events-none select-none">
<div className="mx-auto max-w-7xl h-full border-x border-stone-300/40 relative">
<div className="absolute inset-y-0 left-1/2 w-px bg-stone-300/40 hidden md:block lg:hidden -ml-px"></div>
<div className="absolute inset-y-0 left-1/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
<div className="absolute inset-y-0 left-2/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
</div>
</div>
<div className="z-10 w-full relative">

<div className="mb-20 flex flex-col items-center text-center max-w-7xl mx-auto reveal-item">
<span className="rounded-full border border-stone-300/60 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-500 font-mono-geist backdrop-blur-sm mb-8">
                    Use Cases
                </span>
<h2 className="max-w-4xl text-4xl font-light tracking-tighter text-stone-900 md:text-6xl font-dm-sans">
                    Where intelligence gating <span className="text-stone-400">actually matters.</span>
</h2>
</div>

<div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-6 md:-mx-12 px-6 md:px-12 reveal-item delay-200">
<div className="flex w-max animate-scroll-cards gap-6 py-4">

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">API Gateways</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                Gate access behind an intelligence check. Only agents that can prove computational capability get through to your endpoints.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">middleware</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">REST API</span>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Agent Marketplaces</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                Verify that listed agents can actually perform before granting access. Score-based ranking means quality rises to the top.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">verification</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">scoring</span>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:link-round-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Agent-to-Agent Auth</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                When one agent calls another, prove capability first. Cryptographic challenge-response means no impersonation, no dumb proxies.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">auth</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">inter-agent</span>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:tuning-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Capability Gating</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                Tier service levels based on agent scores. A score of 95 gets premium access. A 60 gets basic. Both pass, but they say different things.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">tiering</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">score-based</span>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Spam Prevention</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                Replace traditional CAPTCHAs on endpoints where AI agents are welcome but bots aren't. Intelligence over image recognition.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">anti-spam</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">widget</span>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:routing-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Workflow Automation</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">
                                Agents booking flights, managing CRM, processing invoices — let them prove they're capable before accessing your systems.
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">automation</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">enterprise</span>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">API Gateways</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">Gate access behind an intelligence check. Only agents that can prove computational capability get through to your endpoints.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">middleware</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">REST API</span>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Agent Marketplaces</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">Verify that listed agents can actually perform before granting access. Score-based ranking means quality rises to the top.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">verification</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">scoring</span>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:link-round-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Agent-to-Agent Auth</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">When one agent calls another, prove capability first. Cryptographic challenge-response means no impersonation, no dumb proxies.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">auth</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">inter-agent</span>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:tuning-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Capability Gating</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">Tier service levels based on agent scores. A score of 95 gets premium access. A 60 gets basic. Both pass, but they say different things.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">tiering</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">score-based</span>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Spam Prevention</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">Replace traditional CAPTCHAs on endpoints where AI agents are welcome but bots aren't. Intelligence over image recognition.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">anti-spam</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">widget</span>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:routing-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="font-sans text-base font-medium text-stone-900 mb-3 tracking-tight">Workflow Automation</h3>
<p className="font-sans text-base leading-relaxed text-stone-500 mb-8">Agents booking flights, managing CRM, processing invoices — let them prove they're capable before accessing your systems.</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-100">
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">automation</span>
<span className="font-mono-geist text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">enterprise</span>
</div>
</div>
</div>
</div>

<div className="mt-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] reveal-item delay-500 max-w-7xl mx-auto">
<div className="flex w-max animate-scroll items-center gap-12 py-2">
<div className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono-geist">
<span>Cryptographic Challenges</span>
<span className="text-stone-300/40">•</span>
<span>Intelligence Scoring</span>
<span className="text-stone-300/40">•</span>
<span>Agent Verification</span>
<span className="text-stone-300/40">•</span>
<span>Capability Gating</span>
<span className="text-stone-300/40">•</span>
<span>REST API</span>
<span className="text-stone-300/40">•</span>
<span>JS Widget</span>
<span className="text-stone-300/40">•</span>
<span>Server-Side Validation</span>
<span className="text-stone-300/40">•</span>
<span>Tiered Access</span>
<span className="text-stone-300/40">•</span>
<span>Bot Filtering</span>
<span className="text-stone-300/40">•</span>
</div>
<div aria-hidden="true" className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono-geist">
<span>Cryptographic Challenges</span>
<span className="text-stone-300/40">•</span>
<span>Intelligence Scoring</span>
<span className="text-stone-300/40">•</span>
<span>Agent Verification</span>
<span className="text-stone-300/40">•</span>
<span>Capability Gating</span>
<span className="text-stone-300/40">•</span>
<span>REST API</span>
<span className="text-stone-300/40">•</span>
<span>JS Widget</span>
<span className="text-stone-300/40">•</span>
<span>Server-Side Validation</span>
<span className="text-stone-300/40">•</span>
<span>Tiered Access</span>
<span className="text-stone-300/40">•</span>
<span>Bot Filtering</span>
<span className="text-stone-300/40">•</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]" id="pricing">
<div className="mx-auto max-w-7xl">
<div className="mb-16 text-center reveal-item">
<span className="rounded-full border border-stone-700/60 bg-stone-800/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-400 font-mono-geist backdrop-blur-sm mb-8 inline-block">
                    Pricing
                </span>
<h2 className="mt-6 text-4xl font-light tracking-tighter text-white md:text-6xl font-dm-sans">
                    Start free. Scale as you grow.
                </h2>
<p className="mt-6 text-lg text-stone-400 font-sans tracking-tight max-w-lg mx-auto">
                    1,000 free verifications per month. No credit card required.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="rounded-xl border border-stone-800 bg-stone-900/50 p-8 flex flex-col reveal-item delay-100">
<div className="mb-8">
<span className="font-mono-geist text-xs text-stone-500 uppercase tracking-widest">Explorer</span>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light tracking-tighter text-white font-dm-sans">Free</span>
</div>
<p className="mt-3 text-sm text-stone-500 font-sans">For testing and prototyping</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            1,000 verifications/mo
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            100 req/min rate limit
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            REST API + JS widget
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            All difficulty levels
                        </li>
</ul>
<a className="w-full text-center rounded-full border border-stone-700 py-3 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white font-sans" href="#">
                        Get API Key
                    </a>
</div>

<div className="rounded-xl border border-stone-600 bg-stone-800/80 p-8 flex flex-col relative reveal-item delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-900 font-sans">Most Popular</span>
</div>
<div className="mb-8">
<span className="font-mono-geist text-xs text-stone-400 uppercase tracking-widest">Pro</span>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light tracking-tighter text-white font-dm-sans">$49</span>
<span className="text-sm text-stone-500 font-sans">/mo</span>
</div>
<p className="mt-3 text-sm text-stone-400 font-sans">+ $0.80 per 1K extra verifications</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-300 font-sans">
<iconify-icon className="text-emerald-400 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            50,000 verifications included
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-sans">
<iconify-icon className="text-emerald-400 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            1,000 req/min rate limit
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-sans">
<iconify-icon className="text-emerald-400 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Score-based analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-sans">
<iconify-icon className="text-emerald-400 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-sans">
<iconify-icon className="text-emerald-400 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Custom difficulty config
                        </li>
</ul>
<a className="w-full text-center rounded-full bg-[#F2F0EB] py-3 text-sm font-medium text-stone-900 transition-all hover:bg-white hover:scale-[1.02] font-sans" href="#">
                        Start Pro Trial
                    </a>
</div>

<div className="rounded-xl border border-stone-800 bg-stone-900/50 p-8 flex flex-col reveal-item delay-300">
<div className="mb-8">
<span className="font-mono-geist text-xs text-stone-500 uppercase tracking-widest">Enterprise</span>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light tracking-tighter text-white font-dm-sans">Custom</span>
</div>
<p className="mt-3 text-sm text-stone-500 font-sans">Volume pricing for scale</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited verifications
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            10,000 req/min rate limit
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            SLA &amp; dedicated support
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Custom challenge types
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-400 font-sans">
<iconify-icon className="text-emerald-500 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            On-prem deployment option
                        </li>
</ul>
<a className="w-full text-center rounded-full border border-stone-700 py-3 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white font-sans" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#050505] pt-32 pb-12 overflow-hidden text-[#F2F0EB]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-stone-800/20 blur-[100px] rounded-full pointer-events-none select-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px] rounded-full pointer-events-none select-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

<div className="mb-32 flex flex-col items-center text-center reveal-item">

<div className="mb-10 relative group">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-stone-700 to-stone-900 opacity-40 blur transition duration-500 group-hover:opacity-100"></div>
<div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-800 bg-[#0A0A0A] shadow-2xl">
<iconify-icon className="text-white text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
</div>

<h2 className="mb-6 max-w-3xl font-dm-sans text-5xl font-light tracking-tighter text-white md:text-6xl">
                    Start Gating on Intelligence.
                </h2>
<p className="mb-10 max-w-lg font-sans text-lg text-stone-400 font-light leading-relaxed">
                    1,000 free verifications. One API key. Let smart agents through and keep the junk out.
                </p>

<div className="flex flex-col items-center gap-4 sm:flex-row">
<a className="group relative flex items-center gap-2 rounded-full bg-[#F2F0EB] px-8 py-3 text-sm font-medium text-stone-950 transition-all hover:bg-white hover:scale-105" href="#">
<span>Get Your API Key</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/30 px-8 py-3 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:border-stone-700 hover:bg-stone-800 hover:text-white" href="#">
<span>Read the Docs</span>
</a>
</div>
</div>

<div className="border-t border-stone-800/60 pt-16 reveal-item delay-200">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

<div className="flex flex-col justify-between lg:col-span-5">
<div className="space-y-6">
<div className="flex items-center gap-2.5">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" style={{color: 'rgb(242, 240, 235)'}}></iconify-icon>
</div>
<span className="font-mono-geist text-xl font-normal tracking-tight text-white">aiCAPTCHAs</span>
</div>
<p className="max-w-xs font-sans text-sm font-normal leading-relaxed text-stone-500">
                                The reverse CAPTCHA for the agentic web. Gate on intelligence, not humanity.
                            </p>
</div>

<div className="mt-8 flex gap-5 md:mt-12">
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" width="18"></iconify-icon>
</a>
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<iconify-icon height="18" icon="solar:book-linear" width="18"></iconify-icon>
</a>
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="hidden lg:col-span-2 lg:block"></div>

<div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-12">
<div>
<h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Product</h3>
<ul className="space-y-4 font-sans text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="#">How It Works</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Pricing</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Use Cases</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Developers</h3>
<ul className="space-y-4 font-sans text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">API Reference</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">JS Widget</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#">Status</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
