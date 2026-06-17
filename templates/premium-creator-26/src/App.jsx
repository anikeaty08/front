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
      
<div className="min-h-screen bg-[#0B0B0C] bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_50%,_#000000_100%)] text-white">
<div className="max-w-[80rem] mx-auto lg:px-10 md:px-8 px-6 pt-10 pb-24 space-y-32">

<header className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC] flex items-center justify-center text-xs tracking-tight font-semibold">
              CA
            </div>
<span className="text-sm tracking-[0.16em] uppercase text-[#8B8B92]">Creator Ascension</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#A1A1AA]">
<a className="hover:text-white transition-colors" href="#offer">Template</a>
<a className="hover:text-white transition-colors" href="#value_stack">What's Inside</a>
<a className="hover:text-white transition-colors" href="#testimonials">Creators</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors" href="#buy">Login</a>
</nav>
</header>

<section className="relative flex flex-col items-center text-center pt-10" id="hero">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#5B7FFF]/30 blur-3xl opacity-60"></div>
<div className="absolute top-40 -right-10 h-64 w-64 rounded-full bg-[#A5B4FC]/20 blur-3xl opacity-60"></div>
</div>
<div className="max-w-3xl mx-auto space-y-6">
<p className="text-xs font-medium tracking-[0.32em] uppercase text-[#A1A1AA]">Premium Creator Funnel Template</p>
<h1 className="font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Build A Premium Creator Funnel<br className="hidden sm:block"/>
              That Sells Effortlessly.
            </h1>
<p className="text-base sm:text-lg text-[#8B8B92] max-w-2xl mx-auto">
              A refined, high-end one-page funnel template for creators, digital educators, and personal brands ready to elevate their presence.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC] text-sm font-medium tracking-[0.18em] uppercase text-white px-8 py-3 shadow-[0_0_40px_rgba(91,127,255,0.55)] hover:shadow-[0_0_60px_rgba(91,127,255,0.75)] transition-all duration-300" href="#buy">
                Get The Premium Template
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-[0.18em] uppercase text-white/80 px-8 py-3 hover:border-white/30 hover:bg-white/10 transition-all duration-300" href="#demo">
                Preview Live Demo
              </a>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#8B8B92] pt-4">
<div className="flex items-center gap-2">
<span className="inline-block h-[0.15rem] w-6 rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC]"></span>
<span>Optimized for high-ticket &amp; digital products</span>
</div>
<div className="hidden sm:block h-[0.05rem] w-6 bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="text-white/70">No-code friendly</span>
<span className="h-1 w-1 rounded-full bg-white/30"></span>
<span>Instant access</span>
</div>
</div>
</div>

<div className="w-full mt-14">
<div className="relative mx-auto max-w-4xl">

<div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-[#5B7FFF]/30 via-transparent to-[#A5B4FC]/40 opacity-80"></div>
<div className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.75)]">

<div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-red-500/80"></span>
<span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
<span className="h-2 w-2 rounded-full bg-green-500/80"></span>
</div>
<div className="h-6 flex items-center justify-center px-3 rounded-full bg-white/5 text-[0.65rem] text-white/60">
                    premium-creator-funnel.live
                  </div>
<div className="w-8"></div>
</div>

<div className="bg-gradient-to-br from-[#020617] via-[#020617] to-[#111827]">
<div className="grid md:grid-cols-2 gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 items-center">
<div className="space-y-4">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">Creator Ascension Blueprint</p>
<p className="text-lg sm:text-2xl font-semibold tracking-tight">
                        Turn your expertise into a cinematic, conversion-optimized funnel.
                      </p>
<p className="text-sm sm:text-base text-[#9CA3AF]">
                        Designed for Notion, course platforms, and no-code website builders. Plug in your copy, drop in your visuals, and launch.
                      </p>
<div className="flex flex-wrap gap-3 pt-1">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<span className="iconify text-xs text-[#A5B4FC]" data-height="16" data-icon="lucide:wand-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-[0.7rem] text-[#E5E7EB]">No-code ready</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<span className="iconify text-xs text-[#5B7FFF]" data-height="16" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-[0.7rem] text-[#E5E7EB]">Luxury visuals</span>
</div>
</div>
</div>

<div className="relative">

<div className="relative mx-auto w-full max-w-sm rotate-[-3deg]">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#5B7FFF]/30 via-transparent to-[#A5B4FC]/40 blur-2xl opacity-80"></div>
<div className="relative rounded-2xl border border-white/15 bg-[#020617] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
<div className="h-5 bg-[#020617] border-b border-white/10 flex items-center justify-center">
<div className="h-3 w-24 rounded-full bg-white/5"></div>
</div>
<div className="aspect-video bg-gradient-to-br from-white/5 via-white/[0.03] to-black">
<div className="h-full w-full flex items-center justify-center">
<div className="space-y-3 px-4">
<div className="h-3 w-32 rounded-full bg-white/20"></div>
<div className="h-3 w-40 rounded-full bg-white/10"></div>
<div className="h-24 w-full rounded-xl border border-dashed border-white/15 bg-black/40"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -bottom-4 -right-2 w-24 rotate-3">
<div className="relative rounded-2xl border border-white/20 bg-black overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.95)]">
<div className="h-4 bg-[#020617] border-b border-white/10"></div>
<div className="aspect-[9/16] bg-gradient-to-b from-white/10 via-black to-black/90"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl px-4 py-2 text-[0.7rem] text-white/80">
<span className="iconify text-xs text-[#A5B4FC]" data-height="16" data-icon="lucide:diamond" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Built for creators who demand excellence</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24" id="value_statement">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
<div className="max-w-xl space-y-4">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">For modern creators</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Crafted For Creators Who Demand Excellence.
              </h2>
<p className="text-base text-[#8B8B92]">
                Everything is designed with precision — from the typography to the spacing — so your brand feels expensive and intentional.
              </p>
</div>
<div className="text-sm text-[#A1A1AA] max-w-sm">
              Present your signature offer as if it were a cinematic product launch. This template handles the perception; you focus on the value.
            </div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
<div className="flex items-center justify-between">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC] flex items-center justify-center">
<span className="iconify text-sm text-white" data-height="18" data-icon="lucide:diamond" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.7rem] text-[#A1A1AA] uppercase tracking-[0.24em]">Visuals</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Luxury Visual Identity</h3>
<p className="text-base text-[#8B8B92]">
                Subtle gradients, cinematic shadows, and premium type styling crafted for authority.
              </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
<div className="flex items-center justify-between">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC] flex items-center justify-center">
<span className="iconify text-sm text-white" data-height="18" data-icon="lucide:wand-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.7rem] text-[#A1A1AA] uppercase tracking-[0.24em]">Flow</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">Effortless Customization</h3>
<p className="text-base text-[#8B8B92]">
                Drag, drop, replace. No coding or complex editing required — ready to publish.
              </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
<div className="flex items-center justify-between">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC] flex items-center justify-center">
<span className="iconify text-sm text-white" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.7rem] text-[#A1A1AA] uppercase tracking-[0.24em]">Conversion</span>
</div>
<h3 className="text-lg font-semibold tracking-tight">High-Converting Structure</h3>
<p className="text-base text-[#8B8B92]">
                Every section is built for growth, sales, and fast creator monetization.
              </p>
</div>
</div>
</section>

<section className="pt-10" id="offer">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="relative">
<div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(91,127,255,0.4),_transparent_60%)] opacity-80"></div>
<div className="relative max-w-md mx-auto">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5B7FFF]/40 via-transparent to-[#A5B4FC]/40 blur-3xl opacity-90"></div>

<div className="relative rotate-[-6deg] origin-bottom-left">
<div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111827] via-[#020617] to-black shadow-[0_32px_120px_rgba(0,0,0,1)] overflow-hidden">
<div className="h-10 bg-gradient-to-r from-[#5B7FFF]/40 to-[#A5B4FC]/20 flex items-center justify-between px-4 border-b border-white/10">
<span className="text-xs tracking-[0.22em] uppercase text-white/80">Creator Ascension Blueprint</span>
<span className="text-[0.7rem] text-[#E5E7EB]">v1.0</span>
</div>
<div className="p-7 space-y-6">
<div className="space-y-3">
<p className="text-sm text-[#A5B4FC] tracking-[0.26em] uppercase">Signature Offer</p>
<p className="text-2xl font-semibold tracking-tight text-white">
                          Creator Ascension<br/>Blueprint
                        </p>
<p className="text-sm text-[#D1D5DB]">
                          A premium guide to audience growth, content systems, and monetization.
                        </p>
</div>
<div className="rounded-2xl border border-dashed border-white/15 bg-black/40 p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs text-[#9CA3AF]">Perfect for:</span>
<span className="text-[0.7rem] text-white/80">Coaches · Creators · Educators</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-[0.65rem] rounded-full bg-white/5 px-2.5 py-1 text-[#E5E7EB]">Funnels</span>
<span className="text-[0.65rem] rounded-full bg-white/5 px-2.5 py-1 text-[#E5E7EB]">Audience Growth</span>
<span className="text-[0.65rem] rounded-full bg-white/5 px-2.5 py-1 text-[#E5E7EB]">Monetization</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-[#9CA3AF]">Launch-ready template</p>
<p className="text-sm text-white/80">Import, customize, publish.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">$59</span>
<span className="text-xs text-[#9CA3AF]">USD</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-10">
<div className="rounded-full border border-white/15 bg-black/80 backdrop-blur-2xl px-4 py-2 text-[0.7rem] flex items-center gap-2 text-white/80">
<span className="iconify text-xs text-[#5B7FFF]" data-height="16" data-icon="lucide:bolt" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Instant digital delivery</span>
</div>
</div>
</div>
</div>

<div className="space-y-7">
<div className="space-y-3">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">Offer</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Your Signature Offer</h2>
<p className="text-base text-[#8B8B92] max-w-xl">
                  A beautifully presented product section designed to elevate your digital offer — whether it's a cohort, course, or premium template.
                </p>
</div>

<div className="space-y-3">
<p className="text-sm text-[#E5E7EB]">Inside the Creator Ascension Blueprint, you'll unlock:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="mt-[0.15rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC]">
<span className="iconify text-[0.65rem] text-white" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-base text-[#D1D5DB]">Full Growth Framework</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[0.15rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC]">
<span className="iconify text-[0.65rem] text-white" data-height="14" data-icon="lucide:infinity" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-base text-[#D1D5DB]">Lifetime Access + Updates</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[0.15rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC]">
<span className="iconify text-[0.65rem] text-white" data-height="14" data-icon="lucide:layers" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-base text-[#D1D5DB]">Bonus Creator Systems</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[0.15rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC]">
<span className="iconify text-[0.65rem] text-white" data-height="14" data-icon="lucide:play-circle" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-base text-[#D1D5DB]">Exclusive Video Walkthroughs</span>
</li>
</ul>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2" id="buy">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight">$59</span>
<span className="text-xs text-[#9CA3AF]">One-time</span>
</div>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC] text-sm font-medium tracking-[0.18em] uppercase text-white px-7 py-3 shadow-[0_0_40px_rgba(91,127,255,0.7)] hover:shadow-[0_0_60px_rgba(91,127,255,0.9)] transition-all duration-300 w-full sm:w-auto" href="#">
                    Purchase Now
                  </a>
<p className="text-[0.75rem] text-[#9CA3AF]">
                    Secure checkout · Instant access · Lifetime updates included
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10" id="value_stack">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-10">
<div className="space-y-3">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">Included</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What's Included</h2>
</div>
<p className="text-base text-[#8B8B92] max-w-md">
              You're not just getting a page — you're getting a complete system to package, position, and present your expertise in a cinematic way.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-10">
<div className="space-y-6">
<div className="border-t border-white/10 pt-6 space-y-2">
<h3 className="text-lg font-semibold tracking-tight">Step-by-Step Blueprint</h3>
<p className="text-base text-[#9CA3AF]">
                  A clear and structured roadmap used by top creators.
                </p>
</div>
<div className="border-t border-white/10 pt-6 space-y-2">
<h3 className="text-lg font-semibold tracking-tight">Creator Toolkit</h3>
<p className="text-base text-[#9CA3AF]">
                  Includes Notion templates, content frameworks, and planning sheets.
                </p>
</div>
</div>
<div className="space-y-6">
<div className="border-t border-white/10 pt-6 space-y-2">
<h3 className="text-lg font-semibold tracking-tight">Audience Growth Systems</h3>
<p className="text-base text-[#9CA3AF]">
                  Learn how to convert viewers into followers, and followers into customers.
                </p>
</div>
<div className="border-t border-white/10 pt-6 space-y-2">
<h3 className="text-lg font-semibold tracking-tight">Personal Brand Styling</h3>
<p className="text-base text-[#9CA3AF]">
                  Aesthetic presets for consistent brand visuals.
                </p>
</div>
</div>
</div>
</section>

<section className="pt-10" id="testimonials">
<div className="space-y-4 mb-10">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">Proof</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Trusted By Modern Creators</h2>
<p className="text-base text-[#8B8B92] max-w-xl">
              Creators across coaching, tech, and design are using this funnel to present their work as a premium, cinematic experience.
            </p>
</div>
<div className="relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(91,127,255,0.3),_transparent_55%)] opacity-80"></div>
<div className="grid md:grid-cols-3 gap-6">

<article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC]"></div>
<div>
<p className="text-sm font-medium text-white">Lara V.</p>
<p className="text-xs text-[#A1A1AA]">Online Coach</p>
</div>
</div>
<p className="text-base text-[#E5E7EB]">
                  “This template feels insanely premium. My funnel conversions instantly improved.”
                </p>
</article>
<article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC]"></div>
<div>
<p className="text-sm font-medium text-white">Jason Cole</p>
<p className="text-xs text-[#A1A1AA]">Tech Creator</p>
</div>
</div>
<p className="text-base text-[#E5E7EB]">
                  “The animations, layout, and polish make my product feel 10x more valuable.”
                </p>
</article>
<article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#5B7FFF] to-[#A5B4FC]"></div>
<div>
<p className="text-sm font-medium text-white">Marissa T.</p>
<p className="text-xs text-[#A1A1AA]">Brand Designer</p>
</div>
</div>
<p className="text-base text-[#E5E7EB]">
                  “Probably the most beautiful creator funnel page I've ever used. Worth every dollar.”
                </p>
</article>
</div>
</div>
</section>

<section className="pt-10" id="about">
<div className="grid lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-12 items-center">
<div className="space-y-4">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">About</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Meet the Creator</h2>
<p className="text-base text-[#8B8B92]">
                I'm a designer building premium templates for creators who want to stand out. I crafted this funnel with a focus on conversion, aesthetics, and an elevated personal brand experience.
              </p>
<p className="text-base text-[#9CA3AF]">
                Every layout, interaction, and detail is engineered so your brand can feel like a meticulously produced launch campaign — even if you're building it solo.
              </p>
</div>

<div className="relative max-w-sm lg:ml-auto">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#5B7FFF]/40 via-transparent to-[#A5B4FC]/40 blur-3xl opacity-80 -z-10"></div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black to-black/95 shadow-[0_30px_100px_rgba(0,0,0,1)] overflow-hidden">
<div className="h-40 bg-[radial-gradient(circle_at_top,_rgba(165,180,252,0.9),_transparent_55%)]"></div>
<div className="-mt-16 flex justify-center">
<div className="h-24 w-24 rounded-full border border-white/40 bg-gradient-to-br from-slate-700 via-slate-900 to-black shadow-[0_10px_40px_rgba(0,0,0,0.9)]"></div>
</div>
<div className="px-6 pb-6 pt-4 space-y-3 text-center">
<p className="text-sm font-medium text-white">Template Designer</p>
<p className="text-xs text-[#A1A1AA]">
                    Funnels · Design Systems · Creator Products
                  </p>
<div className="flex items-center justify-center gap-3 text-[0.7rem] text-[#9CA3AF] pt-2">
<span className="flex items-center gap-1">
<span className="iconify text-xs text-[#A5B4FC]" data-height="16" data-icon="lucide:users" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>300+ creators</span>
</span>
<span className="h-1 w-1 rounded-full bg-white/20"></span>
<span>Funnel-first design</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10" id="newsletter">
<div className="relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(91,127,255,0.5),_transparent_60%)] opacity-90"></div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl px-6 sm:px-10 py-10 sm:py-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
<div className="space-y-3 max-w-xl">
<p className="text-xs tracking-[0.32em] uppercase text-white/80">Newsletter</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Join the Inner Circle</h2>
<p className="text-base text-white/80">
                  Premium insights on growth, design, and creator monetization.
                </p>
</div>
<form className="w-full max-w-md space-y-3">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1">
<input className="w-full rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/70" placeholder="Enter your email" type="email"/>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-black/90 text-sm font-medium tracking-[0.18em] uppercase text-white px-6 py-2.5 border border-white/20 hover:bg-black hover:border-white/60 transition-all duration-200" type="button">
                    Join Now
                  </button>
</div>
<p className="text-[0.75rem] text-white/70">
                  No spam. Just refined strategies and templates. You're in — welcome!
                </p>
</form>
</div>
</div>
</section>

<section className="pt-10" id="final_cta">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-black to-[#020617] px-6 sm:px-10 py-12 sm:py-14">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(91,127,255,0.5),_transparent_60%)] opacity-80"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
<div className="space-y-3 max-w-xl">
<p className="text-xs tracking-[0.32em] uppercase text-[#A1A1AA]">Final Step</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Elevate Your Creator Funnel Today.
                </h2>
<p className="text-base text-[#9CA3AF]">
                  Launch with a high-end design that speaks for your brand — before you say a single word.
                </p>
</div>
<div className="space-y-3">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] via-[#7C8CFF] to-[#A5B4FC] text-sm font-medium tracking-[0.18em] uppercase text-white px-8 py-3 shadow-[0_0_50px_rgba(91,127,255,0.8)] hover:shadow-[0_0_70px_rgba(91,127,255,1)] transition-all duration-300" href="#buy">
                  Get the Premium Template
                </a>
<p className="text-[0.75rem] text-[#9CA3AF]">
                  Your page can look like this in under an hour.
                </p>
</div>
</div>
</div>
</section>

<footer className="pt-6 border-t border-white/5 mt-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.75rem] text-[#6B7280]">
<p>© Creator Ascension. All rights reserved.</p>
<div className="flex items-center gap-5">
<a className="hover:text-white transition-colors" href="#hero">Back to top</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
