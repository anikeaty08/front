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
      
!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-[#00D4E8] flex items-center justify-center text-[#0D1B3E]">
<iconify-icon className="text-xl" icon="solar:qr-code-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg text-white uppercase">ORDER<span className="text-[#00D4E8]">QR</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div>
<a className="px-4 py-2 rounded-full bg-[#00D4E8] text-[#0D1B3E] text-sm font-semibold hover:bg-white transition-colors" href="#contact">
                    Book Demo
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[100vh] flex items-center pt-20 pb-12 overflow-hidden bg-[#0D1B3E]">

<div className="absolute top-0 left-0 -z-10 w-full h-full opacity-80 mix-blend-screen" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1628] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
<div className="flex flex-col items-start gap-6 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D4E8]/30 bg-[#00D4E8]/10 text-[#00D4E8] text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4E8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4E8]"></span>
</span>
                    Next-Gen Ordering System
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Scan. Order. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4E8] to-blue-400">Serve Faster.</span>
</h1>
<p className="text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
                    Transform your restaurant's dining experience. A lightning-fast, secure QR ordering system built for the modern hospitality industry.
                </p>
<div className="flex flex-wrap items-center gap-4 mt-4">
<a className="px-6 py-3 rounded-full bg-[#00D4E8] text-[#0D1B3E] text-base font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,212,232,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" href="#pricing">
                        Get Started
                    </a>
<a className="px-6 py-3 rounded-full border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-all flex items-center gap-2" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        See how it works
                    </a>
</div>
</div>

<div className="flex lg:justify-end w-full h-[600px] relative items-center justify-center">

<div className="absolute z-20 w-[280px] h-[580px] rounded-[3rem] border-[8px] border-slate-800 bg-[#0A1628] shadow-2xl animate-float group cursor-pointer transition-transform duration-700 ease-out hover:-translate-y-8 hover:rotate-[-2deg] overflow-hidden right-[10%]">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30"></div>

<div className="w-full h-full bg-white relative flex flex-col">
<div className="h-48 bg-[#0D1B3E] w-full p-6 pt-12 flex flex-col justify-between rounded-b-3xl">
<div className="flex justify-between items-center text-white">
<span className="text-xs font-semibold">Table 12</span>
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Our Menu</h3>
</div>
<div className="flex-1 flex flex-col gap-3 overflow-hidden bg-slate-50 pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3">

<div className="flex gap-3 group-hover:border-[#00D4E8]/40 transition-colors bg-white w-full h-20 border-slate-100 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-sm gap-x-3 gap-y-3 items-center">
<div className="bg-slate-200 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a0c2a55-cbd6-4719-be2e-d8b24be959fe_320w.webp)] bg-cover bg-center rounded-lg"></div>
<div className="flex-1">
<div className="bg-slate-200 w-20 h-3 rounded mb-2"></div>
<div className="h-2 w-12 bg-slate-100 rounded"></div>
</div>
<div className="w-6 h-6 rounded-full border border-[#00D4E8] text-[#00D4E8] flex items-center justify-center text-xs">+</div>
</div>
<div className="w-full h-20 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex gap-3 items-center">
<div className="bg-slate-200 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72255559-39d4-4350-82fe-e8b63a147706_320w.webp)] bg-cover bg-center rounded-lg"></div>
<div className="flex-1">
<div className="h-3 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="w-6 h-6 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center text-xs">+</div>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-12 bg-[#00D4E8] rounded-2xl flex items-center justify-between px-4 text-[#0D1B3E] shadow-lg group-hover:scale-105 transition-transform">
<span className="text-sm font-semibold">View Cart</span>
<span className="text-sm font-semibold">RM 45.00</span>
</div>
</div>
</div>

<div className="absolute z-10 w-48 h-48 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-delayed group cursor-pointer transition-transform duration-700 ease-out hover:scale-110 hover:rotate-3 left-[5%] bottom-[15%] flex flex-col items-center justify-center border border-slate-200">
<div className="text-[#0D1B3E] font-semibold tracking-tight text-sm mb-2">Scan to Order</div>
<div className="relative w-full aspect-square border-4 border-[#0D1B3E] rounded-xl p-2 scan-animation overflow-hidden group-hover:border-[#00D4E8] transition-colors">
<iconify-icon className="group-hover:text-[#00D4E8] transition-colors text-6xl text-[#0D1B3E] w-full h-full" height="106" icon="solar:qr-code-line-duotone" style={{color: 'rgb(0, 212, 232)'}} width="134"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-animated-gradient relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Seamless Ordering Flow</h2>
<p className="text-slate-400 text-base max-w-2xl mx-auto">From sitting down to eating up, the process is frictionless. Integrate directly with your kitchen and payment gateways.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4E8]/50 to-transparent -translate-y-1/2 z-0"></div>

<div className="glass-card p-6 rounded-2xl text-center relative z-10 group hover:-translate-y-2">
<div className="w-16 h-16 mx-auto bg-[#0A1628] rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00D4E8] transition-colors shadow-lg">
<iconify-icon className="text-2xl text-[#00D4E8]" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">1. Scan QR</h3>
<p className="text-sm text-slate-400">Customer scans the table code without downloading any app.</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center relative z-10 group hover:-translate-y-2">
<div className="w-16 h-16 mx-auto bg-[#0A1628] rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00D4E8] transition-colors shadow-lg">
<iconify-icon className="text-2xl text-[#00D4E8]" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">2. Customer Orders</h3>
<p className="text-sm text-slate-400">Browse visual menu, customize items, and pay seamlessly.</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center relative z-10 group hover:-translate-y-2">
<div className="w-16 h-16 mx-auto bg-[#0A1628] rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00D4E8] transition-colors shadow-lg">
<iconify-icon className="text-2xl text-[#00D4E8]" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">3. Kitchen Receives</h3>
<p className="text-sm text-slate-400">Order fires instantly to the kitchen display or printer.</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center relative z-10 group hover:-translate-y-2">
<div className="w-16 h-16 mx-auto bg-[#00D4E8] rounded-2xl border border-[#00D4E8] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,212,232,0.4)]">
<iconify-icon className="text-2xl text-[#0D1B3E]" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">4. Done</h3>
<p className="text-sm text-slate-400">Food is served. Table turns faster. Revenue increases.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden group text-[#0D1B3E] bg-[#F4F6FA] pt-24 pb-24 relative">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#0D1B3E 1px, transparent 1px)', backgroundSize: '24px 24px', transition: 'transform 0.5s ease', transform: 'scale(1.05)'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative flex justify-center order-2 md:order-1">

<div className="w-64 h-64 bg-white rounded-3xl shadow-xl p-6 relative border border-slate-200 cursor-pointer hover:shadow-2xl transition-all duration-500">
<div className="w-full h-full border-4 border-dashed border-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:border-[#00D4E8] transition-colors">

<div className="grid grid-cols-3 gap-2 group-hover:opacity-100 transition-opacity duration-700 opacity-20 w-24 h-24 absolute gap-x-2 gap-y-2">
<div className="bg-[#0D1B3E] rounded-sm transition-all duration-300 delay-75 group-hover:scale-75"></div>
<div className="bg-[#00D4E8] rounded-sm transition-all duration-300 delay-100 group-hover:scale-110"></div>
<div className="bg-[#0D1B3E] rounded-sm transition-all duration-300 delay-150 group-hover:scale-50"></div>
<div className="bg-[#00D4E8] rounded-sm transition-all duration-300 delay-200 group-hover:scale-125"></div>
<div className="bg-[#0D1B3E] rounded-sm transition-all duration-300 delay-300"></div>
</div>
<iconify-icon className="text-6xl text-[#00D4E8] relative z-10 scale-0 group-hover:scale-100 transition-transform duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-6xl text-slate-300 absolute z-0 group-hover:scale-0 transition-transform duration-300" icon="solar:qr-code-linear"></iconify-icon>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0D1B3E] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Freshly Generated
                    </div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#0D1B3E]" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Fraud-Proof Ordering.</h2>
<p className="text-slate-600 text-base mb-6 leading-relaxed">
                    Say goodbye to fake orders from outside the restaurant. Our system freshly generates a unique, encrypted QR code for every dining session. Once scanned and secured, it locks to that specific table until checkout.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#00D4E8] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Dynamic URL generation
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#00D4E8] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Session auto-expiry
                    </li>
</ul>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0A1628] pt-24 pb-24 relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4E8] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float-delayed"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Fair Pricing. Pay As You Grow.</h2>
<p className="text-slate-400 text-base mb-12 max-w-2xl mx-auto">
                No hidden fees. No massive upfront costs. Our tiered system is designed to scale with your actual revenue, ensuring you only pay for what you need when you succeed.
            </p>
<div className="glass-card rounded-3xl p-8 max-w-lg mx-auto flex flex-col items-center group cursor-default">
<div className="w-full flex items-center justify-between mb-8 text-sm text-slate-300">
<span>Revenue scales up</span>
<iconify-icon className="text-[#00D4E8]" icon="solar:arrow-right-linear"></iconify-icon>
<span className="">Plan adjusts automatically</span>
</div>

<div className="w-full h-2 bg-white/10 rounded-full relative mb-6 overflow-hidden">
<div className="group-hover:w-3/4 transition-all duration-1000 ease-in-out bg-[#00D4E8] w-1/2 h-full absolute top-0 left-0"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 group-hover:left-3/4 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(0,212,232,0.8)] transition-all duration-1000 ease-in-out -ml-2"></div>
</div>
<div className="flex justify-between w-full text-xs font-semibold text-slate-500">
<span>Startup</span>
<span className="text-[#00D4E8]">Pro</span>
<span>Elite</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1B3E] relative overflow-hidden group">
<div className="bg-animated-gradient absolute inset-0 opacity-50 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-medium mb-6">
                    White-label Ready
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Your Brand, Not Ours.</h2>
<p className="text-slate-400 text-base mb-8 leading-relaxed">
                    Stop sending your customers to third-party POS provider domains. Customize the ordering system to live on your own domain, with your logo, and your brand colors. Own the entire customer journey.
                </p>

<div className="bg-[#0A1628] rounded-xl border border-white/10 p-4 mb-4">
<label className="text-xs text-slate-500 font-semibold mb-2 block uppercase tracking-wider">Custom Domain</label>
<div className="flex items-center gap-2 text-sm">
<span className="text-slate-400">order.</span>
<span className="text-white border-b border-[#00D4E8]">yourrestaurant.com</span>
</div>
</div>
</div>

<div className="relative h-80 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00D4E8]/10 to-transparent rounded-full filter blur-3xl group-hover:via-purple-500/10 transition-colors duration-1000"></div>
<div className="w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-1000 group-hover:bg-[#0A1628] group-hover:border-white/10 relative z-10">
<div className="h-12 bg-slate-100 flex items-center px-4 gap-3 transition-colors duration-1000 group-hover:bg-[#0D1B3E]">
<div className="w-6 h-6 rounded-full bg-slate-300 group-hover:bg-[#00D4E8] transition-colors duration-1000"></div>
<div className="h-3 w-20 bg-slate-300 rounded group-hover:bg-white/20 transition-colors duration-1000"></div>
</div>
<div className="p-4 space-y-3">
<div className="h-24 bg-slate-100 rounded-xl transition-colors duration-1000 group-hover:bg-white/5"></div>
<div className="h-8 w-full bg-blue-500 rounded-lg transition-colors duration-1000 group-hover:bg-[#00D4E8]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="text-[#0D1B3E] bg-[#F4F6FA] border-slate-200/50 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ultra-Low Latency. No Shared Delays.</h2>
<p className="text-slate-600 text-base max-w-2xl mx-auto mb-16">
                Unlike traditional shared POS systems, we provide dedicated server infrastructure. Orders fly from customer to kitchen in milliseconds, increasing satisfaction and table turnover.
            </p>
<div className="relative w-full max-w-3xl mx-auto h-32 flex items-center justify-between px-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex flex-col items-center gap-2 z-10">
<iconify-icon className="text-3xl text-slate-400" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-xs font-semibold">Customer</span>
</div>

<div className="flex-1 px-8 relative z-0">
<svg className="overflow-visible" height="20" width="100%">
<line stroke="#E2E8F0" stroke-dasharray="4 4" strokeWidth="2" x1="0" x2="100%" y1="10" y2="10"></line>
<line stroke="#00D4E8" stroke-dasharray="24" strokeLinecap="round" strokeWidth="3" style={{animation: 'data-flow 0.8s linear infinite'}} x1="0" x2="100%" y1="10" y2="10"></line>
</svg>
<div className="-translate-x-1/2 -translate-y-1/2 text-[10px] whitespace-nowrap font-bold text-[#00D4E8] bg-white border-[#00D4E8]/20 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-1/2 left-1/2 shadow-sm">
                        &lt; 50ms Response
                    </div>
</div>
<div className="flex flex-col items-center gap-2 z-10">
<iconify-icon className="text-3xl text-[#0D1B3E]" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-semibold">Dedicated Server</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628] relative" id="features">
<div className="bg-animated-gradient absolute inset-0 opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">Enterprise-Grade Architecture</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:-translate-y-1">
<iconify-icon className="text-3xl text-[#00D4E8] mb-4 group-hover:scale-110 transition-transform" icon="solar:cloud-storage-linear"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Cloud Database</h3>
<p className="text-sm text-slate-400">Instantly synced across all your devices, accessible anywhere.</p>
</div>

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:-translate-y-1">
<iconify-icon className="text-3xl text-[#00D4E8] mb-4 group-hover:-rotate-12 transition-transform" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Secured Data</h3>
<p className="text-sm text-slate-400">End-to-end encryption for customer data and payments.</p>
</div>

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:-translate-y-1">
<div className="relative inline-block mb-4">
<iconify-icon className="text-3xl text-[#00D4E8] relative z-10" icon="solar:graph-up-linear"></iconify-icon>
<span className="absolute inset-0 bg-[#00D4E8] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></span>
</div>
<h3 className="text-base font-semibold text-white mb-2">99.9% Uptime</h3>
<p className="text-sm text-slate-400">Reliable infrastructure that stays online during rush hours.</p>
</div>

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:-translate-y-1">
<iconify-icon className="text-3xl text-[#00D4E8] mb-4 group-hover:scale-110 transition-transform" icon="solar:devices-linear"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Any Device Access</h3>
<p className="text-sm text-slate-400">Browser-based. No bulky POS System. No apps to download for staff or customers.</p>
</div>
</div>
<div className="mt-8 text-center">
<span className="text-sm text-slate-500 font-medium cursor-pointer hover:text-white transition-colors flex items-center justify-center gap-1">
                    And much more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</section>

<section className="py-24 bg-animated-light text-[#0D1B3E] relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Transparent Pricing Tiers</h2>
<p className="text-slate-600 text-base">Select a plan based on your monthly revenue.</p>
</div>

<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 items-end">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Starter</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold tracking-tight">RM99</span><span className="text-xs text-slate-500">/mo</span>
</div>
<div className="text-xs text-slate-400 mb-6 border-b border-slate-100 pb-4">Up to 5k Revenue</div>
<ul className="space-y-3 mb-8 text-xs font-medium text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-slate-300 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Watermark QR Ordering</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-300 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Cashier Module</li>
</ul>
<button className="w-full py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Select</button>
</div>

<div className="bg-[#0D1B3E] text-white rounded-2xl p-6 border border-[#0D1B3E] shadow-xl relative transform lg:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00D4E8] text-[#0D1B3E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
<div className="text-sm font-semibold text-[#00D4E8] mb-2 uppercase tracking-wider">Popular</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-3xl font-semibold tracking-tight">RM258</span><span className="text-xs text-slate-400">/mo</span>
</div>
<div className="text-xs text-slate-400 mb-6 border-b border-white/10 pb-4">5k - 10k Revenue</div>
<ul className="space-y-3 mb-8 text-xs font-medium text-slate-300">
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon><span className="text-white">NO Watermark</span> QR</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon>Cashier &amp; Kitchen</li>
</ul>
<button className="w-full py-2 rounded-xl bg-[#00D4E8] text-[#0D1B3E] text-sm font-semibold hover:bg-white transition-colors">Get Started</button>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Growth</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold tracking-tight">RM388</span><span className="text-xs text-slate-500">/mo</span>
</div>
<div className="text-xs text-slate-400 mb-6 border-b border-slate-100 pb-4">10k - 20k Revenue</div>
<ul className="space-y-3 mb-8 text-xs font-medium text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Everything in Popular</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="font-semibold text-[#0D1B3E]">NO Watermark Landing</span></li>
</ul>
<button className="w-full py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Select</button>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Pro</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold tracking-tight">RM558</span><span className="text-xs text-slate-500">/mo</span>
</div>
<div className="text-xs text-slate-400 mb-6 border-b border-slate-100 pb-4">20k - 30k Revenue</div>
<ul className="space-y-3 mb-8 text-xs font-medium text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Everything in Growth</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Free 1-time website modification</li>
</ul>
<button className="w-full py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Select</button>
</div>

<div className="bg-white rounded-2xl p-6 border border-[#00D4E8]/30 shadow-sm hover:shadow-md transition-shadow">
<div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Elite</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold tracking-tight">RM788</span><span className="text-[10px] text-slate-500 leading-tight">+RM85<br/>/5k rev</span>
</div>
<div className="text-xs text-slate-400 mb-6 border-b border-slate-100 pb-4">30k+ Revenue</div>
<ul className="space-y-3 mb-8 text-xs font-medium text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Everything in Pro</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#00D4E8] text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>Free 3-time website modification</li>
</ul>
<button className="w-full py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Select</button>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 bg-[#0D1B3E] relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to upgrade your restaurant?</h2>
<p className="text-slate-300 text-lg mb-10">Stop losing time and money on outdated systems. Let's build your modern ordering experience today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00D4E8] text-[#0D1B3E] text-base font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,212,232,0.3)]" href="#">
                    Ask for a Demo
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-all" href="#">
                    Talk to an Expert
                </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 relative z-10 gap-4">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-sm text-white uppercase">ORDER<span className="text-[#00D4E8]">QR</span></span>
<span>© 2023. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</section>

    </>
  );
}
