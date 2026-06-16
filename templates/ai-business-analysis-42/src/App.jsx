import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FFFFFF',
surface: '#FAFAFA',
primary: '#2563eb', // Blueprint Blue
primaryDark: '#1d4ed8',
obsidian: '#0f172a', // Slate 900
charcoal: '#334155', // Slate 700
subtle: '#64748b',   // Slate 500
border: '#e2e8f0',   // Slate 200
accent: '#3b82f6',
},
animation: {
'scan': 'scan 3s linear infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
}
}
}
}
}



      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
      
      document.addEventListener('DOMContentLoaded', () => {
         // Add hover effects to cards
         const cards = document.querySelectorAll('.group');
         cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
               const rect = card.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               card.style.setProperty('--x', `${x}px`);
               card.style.setProperty('--y', `${y}px`);
            });
         });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 blueprint-grid pointer-events-none opacity-60"></div>
<div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-lg shadow-sm shadow-primary/20">
<iconify-icon icon="solar:ruler-pen-bold-duotone" width="18"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-slate-900">
          BLUEPRINT AI
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Sample Report</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-md transition-all shadow-sm shadow-slate-900/10 hover:shadow-md flex items-center gap-2" href="#analyze">
<span>Get Started</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</header>

<main className="relative z-10 flex flex-col w-full">

<section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden" id="analyze">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-semibold tracking-wide uppercase">System v1.0 Live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Reverse-engineer <br/>
<span className="shimmer-text">any business.</span>
</h1>
<p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Enter a URL. We’ll analyze the business model and generate a comprehensive <strong>48-hour launch playbook</strong>, budget alternatives, and customer acquisition strategy.
            </p>

<div className="w-full max-w-md bg-white p-2 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/40 ring-4 ring-slate-50 transition-all focus-within:ring-blue-50 focus-within:border-primary/50">
<form className="flex items-center gap-2" onsubmit="event.preventDefault(); window.location.href='#processing'">
<div className="pl-3 text-slate-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="link"></i>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400 h-10 font-mono" placeholder="e.g. blush.com" required="" type="text"/>
<button className="bg-primary hover:bg-primaryDark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group" type="submit">
<span>Analyze</span>
<i className="w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="wand-2"></i>
</button>
</form>
</div>

<div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
<span>Try analyzing:</span>
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 transition-colors font-mono">stripe.com</button>
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 transition-colors font-mono">linear.app</button>
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 transition-colors font-mono">airbnb.com</button>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-slate-100">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">JP</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-500">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">MR</div>
</div>
<div className="text-xs font-medium text-slate-500">
<span className="text-slate-900 font-bold">1,200+</span> businesses analyzed this week
              </div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px] hidden lg:flex">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50 animate-pulse"></div>

<div className="relative w-[380px] h-auto min-h-[580px] bg-white rounded-xl shadow-2xl border border-slate-100 rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-all duration-700 ease-out z-10 flex flex-col overflow-hidden group">

<div className="h-24 bg-gradient-to-br from-primary to-blue-600 p-6 flex flex-col justify-between text-white relative overflow-hidden shrink-0">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="flex justify-between items-start z-10">
<div className="text-[10px] font-mono opacity-80 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm">REPORT #9102</div>
<iconify-icon className="opacity-80" icon="solar:document-text-bold" width="20"></iconify-icon>
</div>
<div className="z-10">
<div className="text-xs font-medium opacity-90">Analysis for</div>
<div className="text-lg font-bold tracking-tight">blush.com</div>
</div>
</div>

<div className="p-6 space-y-5 bg-white relative flex-1">

<div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Business Model Detected</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                     DTC E-commerce model. High-margin beauty products sourced from private label labs and sold via Shopify.
                   </p>
</div>

<div className="grid grid-cols-2 gap-3">

<div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
<div className="flex items-center gap-1.5 text-slate-400 mb-1">
<i className="w-3 h-3" data-lucide="dollar-sign"></i>
<span className="text-[9px] font-bold uppercase tracking-wider">Est. Revenue</span>
</div>
<div className="text-sm font-bold text-slate-900">$2.4M <span className="text-slate-400 font-medium text-[10px]">/yr</span></div>
</div>

<div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
<div className="flex items-center gap-1.5 text-slate-400 mb-1">
<i className="w-3 h-3" data-lucide="box"></i>
<span className="text-[9px] font-bold uppercase tracking-wider">Fulfillment</span>
</div>
<div className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                            3PL Network
                        </div>
</div>

<div className="col-span-2 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5 hover:bg-amber-50 transition-colors group/supplier">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-amber-700/90">
<i className="w-3.5 h-3.5" data-lucide="database"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">Supplier Intelligence</span>
</div>
<span className="bg-white text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-100 shadow-sm">
                                4 Found
                            </span>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between group/item cursor-pointer p-1.5 rounded-md hover:bg-amber-100/50 transition-colors">
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50"></div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900 group-hover/item:text-primary transition-colors">Guangzhou Cosmetic Co.</span>
<span className="text-[9px] text-slate-400 font-medium">Primary Source • Direct</span>
</div>
</div>
<i className="w-3 h-3 text-slate-300 group-hover/item:text-amber-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>

<div className="flex items-center justify-between group/item cursor-pointer p-1.5 rounded-md hover:bg-amber-100/50 transition-colors">
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-600 group-hover/item:text-primary transition-colors">BioLabs Korea</span>
<span className="text-[9px] text-slate-400">Alternative • Premium</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-3 pt-2 border-t border-slate-100">
<div className="flex items-center justify-between">
<div className="h-5 bg-blue-50 text-blue-600 text-[9px] font-bold px-2 rounded flex items-center border border-blue-100">48-HOUR LAUNCH</div>
</div>

<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-md shadow-slate-900/20">1</div>
<div className="text-[11px] text-slate-600 leading-snug">
<span className="font-bold text-slate-900 block">Clone site structure.</span> 
                       Use Shopify Theme "Dawn" modified for high-AOV bundles.
                     </div>
</div>

<div className="flex gap-3 items-start opacity-70">
<div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
<div className="text-[11px] text-slate-600 leading-snug">
<span className="font-bold text-slate-900 block">Order Samples.</span> 
                       Contact suppliers via Alibaba RFQ template provided.
                     </div>
</div>
</div>
</div>

<div className="mt-auto p-3 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center shrink-0">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
<div className="text-[9px] font-mono text-slate-400">GENERATED BY BLUEPRINT AI</div>
</div>
</div>

<div className="absolute right-6 top-16 bg-white p-3 rounded-lg shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce z-20" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center border border-green-200">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Net Margin</div>
<div className="text-sm font-bold text-slate-900">~65%</div>
</div>
</div>
</div>
<div className="absolute left-4 bottom-28 bg-white p-3 rounded-lg shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce z-20" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200">
<i className="w-4 h-4" data-lucide="timer"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Launch Time</div>
<div className="text-sm font-bold text-slate-900">7 Days</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center md:text-left">Analyzes businesses built on</span>
<div className="flex flex-wrap justify-center gap-8 items-center">
<iconify-icon className="opacity-60" icon="logos:shopify" width="80"></iconify-icon>
<iconify-icon className="opacity-60" icon="logos:stripe" width="60"></iconify-icon>
<iconify-icon className="opacity-60" icon="logos:wordpress" width="90"></iconify-icon>
<iconify-icon className="opacity-60" icon="logos:webflow" width="70"></iconify-icon>

<iconify-icon className="opacity-60" icon="logos:amazon" width="80"></iconify-icon>
<iconify-icon className="opacity-60" icon="logos:woocommerce" width="100"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="how-it-works">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">From URL to Revenue Strategy</h2>
<p className="text-slate-500 text-lg">Our AI crawler dissects the website, identifies the business model, and creates a tailored replication plan.</p>
</div>
<div className="max-w-5xl mx-auto relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="font-mono font-bold">01</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Deep Crawl</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                   We extract value propositions, pricing tiers, service offerings, and customer testimonials to understand exactly how they make money.
                 </p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="font-mono font-bold">02</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">AI Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                   Our model identifies low-cost alternatives for their tech stack and drafts a specific marketing plan to acquire the first customer.
                 </p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="font-mono font-bold">03</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Playbook Generation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                   You receive a downloadable PDF with a 48-hour checklist: setup, outreach scripts, and objection handling tailored to this niche.
                 </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Inside Every Report</h2>
<p className="text-slate-500">Not generic advice. Specific, actionable data for the URL you enter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">The "No-BS" TL;DR</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                 A plain English explanation of what the business actually is, who pays them, and why it's simpler than it looks.
               </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="tag"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Lifehack Budget Guide</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                 Three startup tiers: The $0-50 Start (Bare Minimum), The $200 Recommended Start, and the Pro Setup.
               </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 relative z-10 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2 relative z-10">48-Hour Launch Playbook</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                 Hour-by-hour action plan. Day 1: Setup &amp; Offer. Day 2: Specific marketing channels to get your first dollar.
               </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Full Business Breakdown</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                 How they find customers, how they price, how they deliver, and estimated key metrics (Customer Value, Expenses).
               </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Scale-Up Roadmap</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                 What to do when you hit $500/mo, $2k/mo, and $10k/mo. When to hire, what to automate, and red flags to watch for.
               </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="message-square-dashed"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Copy-Paste Scripts</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                 Exact outreach templates, pricing responses, and objection handling scripts tailored to the specific business type.
               </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="space-y-4 max-w-xs">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded">
<iconify-icon icon="solar:ruler-pen-bold-duotone" width="14"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-slate-900">BLUEPRINT AI</span>
</div>
<p className="text-sm text-slate-500">
               The fastest way to deconstruct business success and build your own.
             </p>
</div>
<div className="flex gap-16 text-sm">
<div>
<h4 className="font-bold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Features</a></li>
<li><a className="hover:text-primary" href="#">Sample Report</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Terms</a></li>
<li><a className="hover:text-primary" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 Blueprint AI. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#"><iconify-icon className="opacity-50 hover:opacity-100" icon="logos:twitter" width="16"></iconify-icon></a>
<a className="hover:text-slate-600" href="#"><iconify-icon className="opacity-50 hover:opacity-100" icon="logos:linkedin-icon" width="16"></iconify-icon></a>
</div>
</div>
</footer>
</main>



    </>
  );
}
