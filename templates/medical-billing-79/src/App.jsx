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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-[#1A2E4A]/10 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-full bg-[#0062B8] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-[0.96]">
<iconify-icon height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter uppercase text-[#1A2E4A]">PONO</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-[#1A2E4A] transition-colors" href="/services">Services</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/who-we-serve">Who We Serve</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/how-it-works">How It Works</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/about">About</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/resources">Resources</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1A2E4A] rounded-full hover:bg-[#1A2E4A]/90 transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_4px_14px_0_rgba(26,46,74,0.1)] hover:shadow-[0_6px_20px_rgba(26,46,74,0.15)]" href="/book">
            Book a Discovery Call
          </a>
<button className="md:hidden p-2 text-zinc-600 hover:text-[#1A2E4A]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-[#F7F5F0]">

<div className="absolute top-0 right-0 -z-10 w-[60vw] h-[100dvh] bg-gradient-to-bl from-[#E8F0F9]/80 to-transparent rounded-bl-[100px] opacity-70 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start pt-12 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0F9] border border-[#C8DCF0] text-[#0062B8] text-xs font-medium tracking-wide mb-8 uppercase">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
            AI-POWERED MEDICAL BILLING
          </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-[#1A2E4A] mb-6 text-balance">
            Billing made simple. <br/><span className="text-[#0062B8]">Revenue made right.</span>
</h1>
<p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[55ch] mb-10">
            Pono finds the errors slowing down your cash flow, fixes them faster than legacy billing companies, and shows you exactly what changed. So you can stop chasing claims and get back to your patients.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0062B8] rounded-full hover:bg-[#0062B8]/90 transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_8px_20px_-6px_rgba(0,98,184,0.4)]" href="/book">
              Book a Discovery Call
            </a>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#1A2E4A] hover:text-[#0062B8] transition-colors" href="/how-it-works">
              See How It Works
              <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 relative h-full min-h-[400px] w-full lg:block hidden">
<div className="absolute inset-0 bg-white rounded-[2.5rem] border border-[#1A2E4A]/5 p-8 shadow-[0_20px_40px_-15px_rgba(26,46,74,0.05)] animate-float flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-zinc-100 pb-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Revenue Recovered</span>
<span className="text-3xl font-semibold tracking-tighter text-[#1A2E4A]">+47.2%</span>
</div>
<div className="w-10 h-10 rounded-full bg-[#E8F0F9] text-[#3A6FA5] flex items-center justify-center">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="w-full flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#0062B8]"></div>
<div className="h-2 bg-zinc-100 rounded-full flex-1 overflow-hidden">
<div className="h-full bg-[#0062B8] w-[92%] rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-500 w-12 text-right">92%</span>
</div>
<div className="w-full flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#3A6FA5]"></div>
<div className="h-2 bg-zinc-100 rounded-full flex-1 overflow-hidden">
<div className="h-full bg-[#3A6FA5] w-[84%] rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-500 w-12 text-right">84%</span>
</div>
<div className="w-full flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#C8DCF0]"></div>
<div className="h-2 bg-zinc-100 rounded-full flex-1 overflow-hidden">
<div className="h-full bg-[#C8DCF0] w-[28%] rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-500 w-12 text-right">28%</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Clinician Placeholder" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://picsum.photos/seed/doc1/100/100"/>
<img alt="Admin Placeholder" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://picsum.photos/seed/doc2/100/100"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-[#E8F0F9] flex items-center justify-center text-[10px] font-medium text-[#3A6FA5]">+8</div>
</div>
<span className="text-xs text-zinc-500 font-medium">Active Monitors</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-[#1A2E4A]/5 bg-white">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest text-center md:text-left w-full md:w-auto shrink-0">
          Trusted by growth-stage clinics nationally
        </h3>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-x-12 gap-y-6 w-full">
<div className="flex items-center gap-3 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon className="text-[#0062B8]" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-[#1A2E4A]"><span className="text-[#0062B8]">Faster</span> clean-claim turnaround</span>
</div>
<div className="flex items-center gap-3 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon className="text-[#0062B8]" height="24" icon="solar:shield-up-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-[#1A2E4A]"><span className="text-[#0062B8]">More</span> denials recovered</span>
</div>
<div className="flex items-center gap-3 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon className="text-[#0062B8]" height="24" icon="solar:eye-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-[#1A2E4A]"><span className="text-[#0062B8]">Clearer</span> visibility into every dollar</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F0EDE8] relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
<span className="text-xs font-medium text-[#0062B8] uppercase tracking-widest mb-4 block">What keeps clinic owners up at night</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#1A2E4A] mb-6 text-balance">
            You didn't go to medical school to fight insurance companies.
          </h2>
<p className="text-base text-zinc-600 leading-relaxed max-w-[50ch]">
            Most clinics lose thousands every month to billing errors they don't even see. Wrong codes turn into denied claims. Denied claims turn into rework. Rework turns into receivables that age out quietly while your team is buried in paperwork. It's not your fault. The system is built to be confusing.
          </p>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="p-8 rounded-[2rem] bg-white border border-[#1A2E4A]/5 shadow-[0_10px_30px_-15px_rgba(26,46,74,0.03)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-6 border border-[#E8F0F9]">
<iconify-icon className="text-[#1A2E4A]" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1A2E4A] mb-3">Coding Accuracy</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Wrong codes mean denied claims, audits, and liability you didn't sign up for.
            </p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-[#1A2E4A]/5 shadow-[0_10px_30px_-15px_rgba(26,46,74,0.03)] hover:-translate-y-1 transition-transform duration-300 sm:translate-y-8">
<div className="w-12 h-12 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-6 border border-[#E8F0F9]">
<iconify-icon className="text-[#1A2E4A]" height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1A2E4A] mb-3">Clean Claims</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Errors at submission delay revenue by weeks — sometimes months.
            </p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-[#1A2E4A]/5 shadow-[0_10px_30px_-15px_rgba(26,46,74,0.03)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-6 border border-[#E8F0F9]">
<iconify-icon className="text-[#1A2E4A]" height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1A2E4A] mb-3">Denials &amp; Rework</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Every cycle of rework drains staff energy you'd rather spend on patients.
            </p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-[#1A2E4A]/5 shadow-[0_10px_30px_-15px_rgba(26,46,74,0.03)] hover:-translate-y-1 transition-transform duration-300 sm:translate-y-8">
<div className="w-12 h-12 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-6 border border-[#E8F0F9]">
<iconify-icon className="text-[#1A2E4A]" height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1A2E4A] mb-3">AR &amp; Collections</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Aging receivables quietly eat into the cash flow that funds your practice.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#1A2E4A] rounded-[3rem] p-10 md:p-16 lg:p-24 relative overflow-hidden text-white">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3A6FA5]/30 to-transparent pointer-events-none blur-3xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">
<div>
<span className="text-xs font-medium text-[#C8DCF0] uppercase tracking-widest mb-4 block">A smarter way, built in 2026</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-white text-balance">
              We asked a simple question: is there a better way?
            </h2>
</div>
<div className="flex flex-col items-start gap-8">
<p className="text-base text-zinc-300 leading-relaxed">
              The answer was yes — and it involved AI. Legacy billing companies are large, slow, and built for hospital networks. Pono was built from the ground up for growth-stage clinics that need a billing partner who actually picks up the phone. We use AI to find errors faster, fix them more accurately, and explain exactly what changed and why — all while you focus on patients.
            </p>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#C8DCF0] transition-colors" href="/how-it-works">
              See how the process works
              <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F7F5F0] border-t border-[#1A2E4A]/5">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
<div>
<span className="text-xs font-medium text-[#0062B8] uppercase tracking-widest mb-4 block">What we do</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#1A2E4A]">
            Four pillars. One peace of mind.
          </h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#1A2E4A] hover:text-[#0062B8] transition-colors mb-2" href="/services">
          Explore Services
          <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 border border-[#1A2E4A]/5 shadow-[0_20px_40px_-15px_rgba(26,46,74,0.02)] flex flex-col justify-between group">
<div className="w-12 h-12 rounded-full bg-[#E8F0F9] text-[#0062B8] flex items-center justify-center mb-8 border border-[#C8DCF0]">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A2E4A] mb-2">Accuracy</h3>
<p className="text-sm font-medium text-[#0062B8] mb-4">Catch what others miss.</p>
<p className="text-sm text-zinc-600 leading-relaxed max-w-[60ch]">
              Our coding work combines certified human reviewers with AI pattern detection. The result: fewer denials, fewer audits, and a paper trail you can defend.
            </p>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 border border-[#1A2E4A]/5 shadow-[0_20px_40px_-15px_rgba(26,46,74,0.02)] flex flex-col justify-between group">
<div className="w-12 h-12 rounded-full bg-[#E8F0F9] text-[#0062B8] flex items-center justify-center mb-8 border border-[#C8DCF0]">
<iconify-icon height="24" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A2E4A] mb-2">Speed</h3>
<p className="text-sm font-medium text-[#0062B8] mb-4">Cash arrives sooner.</p>
<p className="text-sm text-zinc-600 leading-relaxed">
              From submission to collection, every stage is faster. Cleaner claims go out quicker. Denials get reworked the same week they're flagged.
            </p>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 border border-[#1A2E4A]/5 shadow-[0_20px_40px_-15px_rgba(26,46,74,0.02)] flex flex-col justify-between group">
<div className="w-12 h-12 rounded-full bg-[#E8F0F9] text-[#0062B8] flex items-center justify-center mb-8 border border-[#C8DCF0]">
<iconify-icon height="24" icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A2E4A] mb-2">Transparency</h3>
<p className="text-sm font-medium text-[#0062B8] mb-4">You see what we see.</p>
<p className="text-sm text-zinc-600 leading-relaxed">
              Real-time dashboards. Monthly reports written in plain English. Quarterly reviews where we explain trends, not just numbers.
            </p>
</div>
</div>

<div className="lg:col-span-2 bg-[#1A2E4A] rounded-[2.5rem] p-10 border border-[#3A6FA5]/30 shadow-[0_20px_40px_-15px_rgba(26,46,74,0.2)] flex flex-col justify-between group relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
<iconify-icon className="text-white" height="160" icon="solar:graph-new-linear" width="160"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-[#3A6FA5]/20 text-white flex items-center justify-center mb-8 border border-[#3A6FA5]/30 relative z-10">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Growth</h3>
<p className="text-sm font-medium text-[#C8DCF0] mb-4">Billing efficiency compounds.</p>
<p className="text-sm text-zinc-300 leading-relaxed max-w-[60ch]">
              Our clients don't just recover lost revenue — they grow into it. Faster cash flow funds more patients, better staff, and a calmer practice.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-medium text-[#0062B8] uppercase tracking-widest mb-4 block">How it works</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#1A2E4A] mb-6 text-balance">
          Your first win, inside one billing cycle.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative before:hidden md:before:block before:absolute before:top-12 before:left-12 before:right-12 before:h-[1px] before:bg-zinc-100">

<div className="relative pt-8 md:pt-0">
<div className="md:mx-auto w-24 h-24 rounded-full bg-[#F7F5F0] border-8 border-white flex items-center justify-center text-[#1A2E4A] shadow-sm relative z-10 mb-8">
<span className="text-2xl font-semibold tracking-tighter">01</span>
</div>
<div className="md:text-center">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">Discovery Call</h3>
<p className="text-sm text-zinc-600 leading-relaxed max-w-[30ch] md:mx-auto">
              A 15-minute conversation. We listen first. No pitch.
            </p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="md:mx-auto w-24 h-24 rounded-full bg-[#F7F5F0] border-8 border-white flex items-center justify-center text-[#1A2E4A] shadow-sm relative z-10 mb-8">
<span className="text-2xl font-semibold tracking-tighter">02</span>
</div>
<div className="md:text-center">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">The 90-Day Plan</h3>
<p className="text-sm text-zinc-600 leading-relaxed max-w-[30ch] md:mx-auto">
              A clear proposal showing exactly what we'll fix, how, and what to expect.
            </p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="md:mx-auto w-24 h-24 rounded-full bg-[#0062B8] border-8 border-white flex items-center justify-center text-white shadow-sm relative z-10 mb-8">
<span className="text-2xl font-semibold tracking-tighter">03</span>
</div>
<div className="md:text-center">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">Onboarding &amp; First Win</h3>
<p className="text-sm text-zinc-600 leading-relaxed max-w-[30ch] md:mx-auto">
              Clean handoff. System connected. Measurable results in your first billing cycle.
            </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#1A2E4A] hover:text-[#0062B8] transition-colors" href="/how-it-works">
          See the Full Process
          <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A2E4A] text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3A6FA5]/20 via-[#1A2E4A] to-[#1A2E4A] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<span className="text-xs font-medium text-[#C8DCF0] uppercase tracking-widest mb-4 block">Outcomes</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-white mb-6 text-balance">
            Results clinic owners actually feel.
          </h2>
<p className="text-base text-zinc-300 leading-relaxed mb-12 max-w-[50ch]">
            Our clients describe the change in three words: easier, faster, calmer. Cash flow improves. Denials drop. Staff stops drowning in rework. And most importantly, the practice owner stops thinking about billing.
          </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#3A6FA5]/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C8DCF0]" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-zinc-200">"Cleaner claims from week one."</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#3A6FA5]/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C8DCF0]" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-zinc-200">"Denials resolved before they age out."</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#3A6FA5]/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C8DCF0]" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-zinc-200">"A billing report I can actually understand."</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#3A6FA5]/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C8DCF0]" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-lg text-zinc-200">"I stopped dreading payroll week."</span>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute -top-6 -left-6 text-[#3A6FA5]/40">
<iconify-icon height="80" icon="solar:quote-left-bold" width="80"></iconify-icon>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-[#3A6FA5]/30 rounded-[2.5rem] p-10 md:p-12 relative z-10">
<p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-medium mb-10 tracking-tight">
              "It was easier than I thought. We had Pono's process running in under two weeks, and our denial backlog was clear inside the first month. I haven't worried about billing since."
            </p>
<div className="flex items-center gap-4">
<img alt="Client Placeholder" className="w-14 h-14 rounded-full border-2 border-[#3A6FA5]" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=0062B8&amp;color=fff&amp;size=128"/>
<div>
<div className="text-base font-semibold text-white tracking-tight">[Name]</div>
<div className="text-sm text-[#C8DCF0]">[Title], [Clinic Name]</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F0EDE8] border-b border-[#1A2E4A]/5">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-4 flex flex-col items-start">
<span className="text-xs font-medium text-[#0062B8] uppercase tracking-widest mb-4 block">Who we serve</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#1A2E4A] mb-6">
            Built for growth-stage clinics.
          </h2>
<p className="text-base text-zinc-600 leading-relaxed mb-8">
            If you're billing $2M–$10M annually and your in-house team is spending more time fixing claims than working with patients, we're built for you.
          </p>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#1A2E4A] hover:text-[#0062B8] transition-colors" href="/who-we-serve">
            See If We're a Fit
            <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="p-8 border-l-2 border-[#0062B8] pl-8 md:pl-12 bg-white rounded-r-3xl shadow-[0_4px_20px_-10px_rgba(26,46,74,0.03)]">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">Mental Health Walk-In Clinics</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              High-volume claims, complex coding, and growing demand. We handle the volume so you can scale.
            </p>
</div>
<div className="p-8 border-l-2 border-[#1A2E4A]/10 pl-8 md:pl-12 hover:border-[#0062B8] hover:bg-white hover:rounded-r-3xl hover:shadow-[0_4px_20px_-10px_rgba(26,46,74,0.03)] transition-all duration-300">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">Primary Care</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Small teams, big patient loads. We absorb the billing burden your front desk can't.
            </p>
</div>
<div className="p-8 border-l-2 border-[#1A2E4A]/10 pl-8 md:pl-12 hover:border-[#0062B8] hover:bg-white hover:rounded-r-3xl hover:shadow-[0_4px_20px_-10px_rgba(26,46,74,0.03)] transition-all duration-300">
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3">Specialty Practices</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
              Specialty-specific codes, modifiers, and payer rules. We know yours.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
<div className="max-w-2xl">
<span className="text-xs font-medium text-[#0062B8] uppercase tracking-widest mb-4 block">Resources</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#1A2E4A] text-balance">
            Plain-English answers to billing's hardest questions.
          </h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#1A2E4A] hover:text-[#0062B8] transition-colors mb-2 shrink-0" href="/resources">
          Read more from Pono
          <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<a className="group flex flex-col border-t border-[#1A2E4A]/10 pt-6" href="/resources/coding-errors">
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-semibold text-[#0062B8] uppercase tracking-widest">Coding</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500 font-medium">6 min read</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors leading-snug">
            The Five Coding Errors That Drain More Revenue Than You Realize
          </h3>
</a>

<a className="group flex flex-col border-t border-[#1A2E4A]/10 pt-6" href="/resources/denial-rate">
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-semibold text-[#0062B8] uppercase tracking-widest">Denials</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500 font-medium">5 min read</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors leading-snug">
            Why Your Denial Rate Hit a Wall — and How to Break Through It
          </h3>
</a>

<a className="group flex flex-col border-t border-[#1A2E4A]/10 pt-6" href="/resources/ar-aging">
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-semibold text-[#0062B8] uppercase tracking-widest">AR</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500 font-medium">7 min read</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors leading-snug">
            Reading Your AR Aging Report (and Knowing What to Do About It)
          </h3>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#0062B8] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6FA5] to-transparent opacity-50 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-white mb-6 text-balance">
            Stop fighting your billing. <br/>Start growing your practice.
          </h2>
<p className="text-base text-[#E8F0F9] leading-relaxed mb-10">
            A 15-minute discovery call. No pitch, no pressure. We listen first.
          </p>
<div className="flex flex-col items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#1A2E4A] bg-white rounded-full hover:bg-[#F7F5F0] transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_8px_20px_-6px_rgba(26,46,74,0.2)]" href="/book">
              Book a Discovery Call
            </a>
<span className="text-xs font-medium text-[#C8DCF0] tracking-wide flex items-center gap-2">
              Free <span className="w-1 h-1 rounded-full bg-[#C8DCF0]"></span> 15 minutes <span className="w-1 h-1 rounded-full bg-[#C8DCF0]"></span> No obligation
            </span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#F7F5F0] pt-20 pb-8 border-t border-[#1A2E4A]/10 text-zinc-600">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4 flex flex-col items-start pr-8">
<a className="flex items-center gap-2 mb-6 group" href="/">
<div className="w-8 h-8 rounded-full bg-[#0062B8] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-[0.96]">
<iconify-icon height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter uppercase text-[#1A2E4A]">PONO</span>
</a>
<p className="text-sm font-medium text-[#1A2E4A] mb-2">Billing made simple. Revenue made right.</p>
<p className="text-xs text-zinc-500">Built in 2026. Serving clinics nationally.</p>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold text-[#1A2E4A] uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-[#0062B8] transition-colors" href="/services#coding">Coding Accuracy</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/services#claims">Clean Claims</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/services#denials">Denial Management</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/services#ar">AR &amp; Collections</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold text-[#1A2E4A] uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-[#0062B8] transition-colors" href="/about">About</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/how-it-works">How It Works</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/resources">Resources</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="/contact">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end">
<h4 className="text-xs font-semibold text-[#1A2E4A] uppercase tracking-widest mb-6">Get Started</h4>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#1A2E4A] rounded-full hover:bg-[#1A2E4A]/90 transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-sm mb-6 w-fit" href="/book">
            Book a Discovery Call
          </a>
<div className="flex items-center gap-4">
<a className="text-sm hover:text-[#0062B8] transition-colors" href="mailto:hello@pono.com">hello@pono.com</a>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<a aria-label="LinkedIn" className="text-zinc-400 hover:text-[#0062B8] transition-colors" href="#">
<iconify-icon height="24" icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1A2E4A]/10 text-xs text-zinc-500">
<div>© 2026 Pono Medical Billing Solutions</div>
<div className="flex items-center gap-6">
<a className="hover:text-[#1A2E4A] transition-colors" href="/privacy">Privacy</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/terms">Terms</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="/hipaa">HIPAA Notice</a>
</div>
</div>

<div className="mt-8 pt-8 border-t border-[#1A2E4A]/10 text-center">
<p className="text-[10px] leading-relaxed text-zinc-400 max-w-4xl mx-auto">
          Pono MBS does not guarantee specific financial outcomes. All engagements include a HIPAA-compliant Business Associate Agreement.
        </p>
</div>
</div>
</footer>

    </>
  );
}
