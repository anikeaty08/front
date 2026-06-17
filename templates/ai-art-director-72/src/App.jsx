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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-600/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px]"></div>
<div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60vw] h-[30vw] rounded-full bg-purple-600/5 blur-[100px]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#landing">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-fuchsia-400 to-cyan-400 p-[1px]">
<div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300 group-hover:opacity-80 transition-opacity">SE</span>
</div>
</div>
<span className="text-base font-semibold tracking-tight text-slate-100">Second Eyes</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors" href="#history">History</a>
<a className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors" href="#generate">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors">
<iconify-icon icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-white transition-colors" href="#generate">
                    Generate
                </a>
<a className="w-8 h-8 rounded-full bg-white/10 border border-white/10 overflow-hidden ml-2 hover:ring-2 ring-fuchsia-400 transition-all" href="#account">
<img alt="Account" className="w-full h-full object-cover opacity-90" src="https://i.pravatar.cc/100?img=32"/>
</a>
</div>
</div>
</header>
<main className="relative z-10 space-y-48 pb-48 pt-32">

<section className="max-w-7xl mx-auto px-6 relative" id="landing">

<div className="text-center max-w-4xl mx-auto pt-20 pb-32">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-fuchsia-300 mb-8 backdrop-blur-md">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                    Your AI Art Director is here
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-100 mb-8 leading-[1.1]">
                    Elevate your artwork with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300">expert AI feedback.</span>
</h1>
<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Upload your digital art, photography, or designs. Receive targeted improvement suggestions and instantly visualize them with real-time generated variations.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-base font-medium shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all hover:-translate-y-0.5" href="#auth">
                        Try for free
                    </a>
<a className="inline-flex items-center justify-center hover:bg-white/10 transition-colors text-base font-medium text-slate-200 bg-white/5 h-12 border-white/10 border rounded-full pr-8 pl-8" href="#demo">
                        See it in action
                    </a>
</div>
</div>

<div className="grid lg:grid-cols-2 pt-20 pb-20 gap-x-16 gap-y-16 items-center" id="demo">
<div className="relative aspect-square rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl p-4 overflow-hidden shadow-2xl">

<div className="absolute inset-4 rounded-3xl overflow-hidden shadow-inner">
<img alt="Original Art" className="opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-4 rounded-3xl overflow-hidden border-r-2 border-fuchsia-400 shadow-[20px_0_30px_rgba(0,0,0,0.5)] w-[60%]">
<img alt="Enhanced Art" className="w-[166.66%] max-w-none h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop&amp;sat=100&amp;con=150"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-fuchsia-500/20 mix-blend-overlay"></div>
</div>

<div className="absolute top-8 left-8 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Generating composition fix...
                    </div>
</div>
<div className="space-y-12">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-100 mb-4">The core loop</h2>
<p className="text-base text-slate-400 leading-relaxed">Second Eyes doesn't just critique; it shows you the potential. Get detailed rationale for every suggestion, backed by visual proof.</p>
</div>
<ul className="space-y-8">
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-fuchsia-400">
<iconify-icon className="text-xl" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-200 mb-1">Expert Analysis</h3>
<p className="text-sm text-slate-400">Analyzes composition, color theory, lighting, and mood instantly.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:pen-new-round-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-200 mb-1">Targeted Suggestions</h3>
<p className="text-sm text-slate-400">Receive 3 to 7 specific, actionable improvements with detailed rationale.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-purple-400">
<iconify-icon className="text-xl" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-200 mb-1">Real-time Variations</h3>
<p className="text-sm text-slate-400">Watch progressive rendering of new images applying the suggested fixes.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="py-32">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-100 mb-4">Simple pricing</h2>
<p className="text-base text-slate-400">One credit = One generated variation. Analysis is free.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col backdrop-blur-sm">
<h3 className="text-lg font-medium text-slate-300 mb-2">Free</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight">$0</span><span className="text-sm text-slate-500">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> 5 credits/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Standard resolution</li>
</ul>
<button className="w-full h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-colors">Current Plan</button>
</div>

<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col backdrop-blur-sm">
<h3 className="text-lg font-medium text-slate-300 mb-2">Starter</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight">$7.99</span><span className="text-sm text-slate-500">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> 50 credits/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> High resolution</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> Commercial rights</li>
</ul>
<button className="w-full h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-colors">Upgrade</button>
</div>

<div className="relative bg-gradient-to-b from-fuchsia-500/10 to-purple-500/5 border border-fuchsia-500/30 rounded-[2rem] p-8 flex flex-col backdrop-blur-md shadow-[0_0_40px_rgba(217,70,239,0.1)] scale-105 z-10">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full tracking-wide">MOST POPULAR</span>
</div>
<h3 className="text-lg font-medium text-fuchsia-100 mb-2">Creator</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-white">$14.99</span><span className="text-sm text-fuchsia-200/50">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> 120 credits/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> Priority generation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-400" icon="solar:check-circle-linear"></iconify-icon> Style control</li>
</ul>
<button className="w-full h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all">Upgrade</button>
</div>

<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col backdrop-blur-sm">
<h3 className="text-lg font-medium text-slate-300 mb-2">Pro</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight">$29.99</span><span className="text-sm text-slate-500">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> 300 credits/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Maximum resolution</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
</ul>
<button className="w-full h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-colors">Upgrade</button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 flex items-center justify-center opacity-30">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
</div>

<section className="max-w-7xl mx-auto px-6 relative flex flex-col items-center justify-center py-20" id="auth">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Welcome to Second Eyes</h2>
<p className="text-sm text-slate-400 mt-2">Sign in or create an account to start generating.</p>
</div>
<div className="w-full max-w-md bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-40 h-40 bg-fuchsia-500/20 blur-[50px] rounded-full pointer-events-none"></div>

<div className="flex p-1 bg-black/20 rounded-xl border border-white/5 mb-8">
<button className="flex-1 py-2 text-sm font-medium bg-white/10 text-white rounded-lg shadow-sm border border-white/5">Register</button>
<button className="flex-1 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Login</button>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Full name</label>
<input autocomplete="given-name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email address</label>
<input autocomplete="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Password</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all" placeholder="••••••••" type="password"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Art type</label>
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all cursor-pointer">
<option>Digital illustration</option>
<option>Photography</option>
<option>Concept art</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Status</label>
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all cursor-pointer">
<option>Professional artist</option>
<option>Student</option>
<option>Hobbyist</option>
</select>
</div>
</div>
<button className="w-full h-11 mt-4 rounded-xl bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-white transition-colors flex items-center justify-center" type="button">
                        Create account
                    </button>
<p className="text-center text-xs text-slate-500 mt-4">No credit card required</p>
<div className="relative my-6 flex items-center justify-center">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
<span className="relative bg-slate-900/50 backdrop-blur-md px-3 text-xs text-slate-500 uppercase tracking-wider">Or continue with</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="h-10 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:global-linear"></iconify-icon> Google
                        </button>
<button className="h-10 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:apple-linear"></iconify-icon> Apple
                        </button>
</div>
</form>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 flex items-center justify-center opacity-30">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
</div>

<section className="max-w-7xl mx-auto px-6" id="generate">
<div className="mb-10 flex items-center justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-100">Generate</h2>
<p className="text-sm text-slate-400 mt-1">Upload your artwork for AI-powered direction.</p>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 mb-1">Credits remaining</div>
<div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-fuchsia-400"></span> 42
                    </div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">

<div className="group relative w-full aspect-[4/3] rounded-[2rem] border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center justify-center p-6 text-center cursor-pointer overflow-hidden backdrop-blur-sm">

<img alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity mix-blend-luminosity" src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:upload-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Drag &amp; drop or click to browse</span>
<span className="text-xs text-slate-400 mt-1 sm:hidden">Tap to upload your artwork</span>
<span className="text-xs text-slate-500 mt-2">PNG, JPG, WEBP (Max 10MB)</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
<label className="block text-sm font-medium text-slate-300 mb-3">Creativity Control</label>

<div className="flex p-1 bg-black/20 rounded-xl border border-white/5 relative">

<div className="absolute left-1 top-1 bottom-1 w-[calc(33.33%-4px)] bg-white/10 border border-white/10 rounded-lg shadow-sm transition-transform translate-x-[100%]"></div>
<label className="flex-1 text-center py-2 relative z-10 cursor-pointer custom-toggle">
<input className="hidden" name="creativity" type="radio" value="normal"/>
<div className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">Normal</div>
</label>
<label className="flex-1 text-center py-2 relative z-10 cursor-pointer custom-toggle">
<input checked="" className="hidden" name="creativity" type="radio" value="creative"/>
<div className="text-xs font-medium text-white transition-colors">Creative</div>
</label>
<label className="flex-1 text-center py-2 relative z-10 cursor-pointer custom-toggle">
<input className="hidden" name="creativity" type="radio" value="crazy"/>
<div className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">Crazy</div>
</label>
</div>
<p className="text-xs text-slate-500 mt-3 leading-relaxed">
                            Controls how bold the AI's suggestions are. Higher settings may alter the fundamental style.
                        </p>
</div>
<button className="w-full h-12 rounded-2xl bg-slate-800 text-slate-300 border border-white/5 cursor-not-allowed text-sm font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:check-circle-bold-duotone"></iconify-icon> Analysis Complete
                    </button>
<button className="w-full text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium">
                        Upload new artwork
                    </button>
</div>

<div className="lg:col-span-8">

<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
<img alt="Original Upload" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium bg-white/10 px-2 py-0.5 rounded text-slate-300">Original Upload</span>
<span className="flex items-center gap-1 text-xs text-green-400 font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Analysis Complete
                                    </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Review Suggested Improvements</h3>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4 mb-8">

<label className="group relative flex flex-col p-6 rounded-[2rem] cursor-pointer overflow-hidden shadow-xl min-h-[12rem]">
<input checked="" className="peer hidden" type="checkbox"/>

<div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent border-2 border-white/10 rounded-[2rem] transition-colors peer-checked:border-fuchsia-500/50 peer-checked:bg-fuchsia-500/5 group-hover:bg-fuchsia-500/10"></div>

<div className="relative z-10 flex flex-col h-full">
<div className="absolute top-0 right-0 w-6 h-6 rounded-md border-2 border-white/20 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all" icon="solar:check-bold"></iconify-icon>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-bold uppercase tracking-wider w-max mb-3 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
<iconify-icon icon="solar:star-fall-minimalistic-bold"></iconify-icon> Highest Impact
                                </div>
<h4 className="text-base font-semibold text-white mb-2 pr-8">Enhanced contrast &amp; warmth</h4>
<p className="text-xs text-slate-400 leading-relaxed mt-auto">The original felt slightly flat. Pushing the contrast and warming up the highlights gives it a more cinematic feel.</p>
</div>
</label>

<label className="group relative flex flex-col p-6 rounded-[2rem] cursor-pointer overflow-hidden shadow-lg min-h-[12rem]">
<input checked="" className="peer hidden" type="checkbox"/>
<div className="absolute inset-0 bg-white/5 border-2 border-white/10 rounded-[2rem] transition-colors peer-checked:border-fuchsia-500/40 peer-checked:bg-fuchsia-500/5 group-hover:bg-white/10"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="absolute top-0 right-0 w-6 h-6 rounded-md border-2 border-white/20 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all" icon="solar:check-bold"></iconify-icon>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-wider w-max mb-3">
                                    Color Grading
                                </div>
<h4 className="text-base font-semibold text-white mb-2 pr-8">Shift to cyberpunk tones</h4>
<p className="text-xs text-slate-400 leading-relaxed mt-auto">Adjusting the color palette towards cyans and purples fits the sci-fi theme better and unifies the lighting.</p>
</div>
</label>

<label className="group relative flex flex-col p-6 rounded-[2rem] cursor-pointer overflow-hidden shadow-lg min-h-[12rem]">
<input className="peer hidden" type="checkbox"/>
<div className="absolute inset-0 bg-white/5 border-2 border-white/10 rounded-[2rem] transition-colors peer-checked:border-fuchsia-500/40 peer-checked:bg-fuchsia-500/5 group-hover:bg-white/10"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="absolute top-0 right-0 w-6 h-6 rounded-md border-2 border-white/20 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all" icon="solar:check-bold"></iconify-icon>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-wider w-max mb-3">
                                    Composition
                                </div>
<h4 className="text-base font-semibold text-white mb-2 pr-8">Rule of thirds crop</h4>
<p className="text-xs text-slate-400 leading-relaxed mt-auto">Cropping in on the left side to place the main subject on the right third, removing dead space.</p>
</div>
</label>

<label className="group relative flex flex-col p-6 rounded-[2rem] cursor-pointer overflow-hidden shadow-lg min-h-[12rem]">
<input className="peer hidden" type="checkbox"/>
<div className="absolute inset-0 bg-white/5 border-2 border-white/10 rounded-[2rem] transition-colors peer-checked:border-fuchsia-500/40 peer-checked:bg-fuchsia-500/5 group-hover:bg-white/10"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="absolute top-0 right-0 w-6 h-6 rounded-md border-2 border-white/20 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all" icon="solar:check-bold"></iconify-icon>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-wider w-max mb-3">
                                    Atmosphere
                                </div>
<h4 className="text-base font-semibold text-white mb-2 pr-8">Add atmospheric haze</h4>
<p className="text-xs text-slate-400 leading-relaxed mt-auto">Introducing some volumetric fog in the background to increase depth and beautifully separate the subject.</p>
</div>
</label>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
<div className="mb-4 sm:mb-0 text-center sm:text-left">
<div className="text-sm font-semibold text-slate-200">2 suggestions selected</div>
<div className="text-xs text-slate-400 mt-0.5">Will cost 2 credits to generate</div>
</div>
<button className="w-full sm:w-auto px-8 h-12 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:gallery-bold-duotone"></iconify-icon> Generate Variations
                        </button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 flex items-center justify-center opacity-30">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
</div>

<section className="max-w-4xl mx-auto px-6" id="history">
<div className="mb-10 flex items-center justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-100">History</h2>
<p className="text-sm text-slate-400 mt-1">Review your past analyses and generations.</p>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<input className="w-48 bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-fuchsia-400 transition-colors" placeholder="Search..." type="text"/>
</div>
</div>
<div className="space-y-4">

<div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium text-slate-200 truncate">Abstract Landscape #4</h4>
<span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Creative</span>
</div>
<p className="text-xs text-slate-500">Oct 24, 2023 • 4 suggestions generated</p>
</div>
<div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-slate-300 tooltip" title="Re-generate">
<iconify-icon icon="solar:restart-linear"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center tooltip" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white/[0.08] border border-white/15 rounded-[2rem] overflow-hidden shadow-2xl">

<div className="p-4 flex items-center gap-6 border-b border-white/10 bg-black/20">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 ring-2 ring-fuchsia-400/50 ring-offset-2 ring-offset-slate-900">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium text-slate-200 truncate">Character Concept - SciFi</h4>
<span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Normal</span>
</div>
<p className="text-xs text-slate-500">Oct 22, 2023 • 3 suggestions generated</p>
</div>
<div className="flex items-center gap-2">
<button className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon> Close
                            </button>
</div>
</div>

<div className="p-6">
<h5 className="text-sm font-medium text-slate-300 mb-4">Generated Variations</h5>
<div className="grid grid-cols-3 gap-4">

<div className="space-y-3 group cursor-zoom-in">
<div className="aspect-square rounded-2xl overflow-hidden relative">
<img alt="Var" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;sat=120"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
<div>
<h6 className="text-xs font-semibold text-slate-200 line-clamp-1">1. Lighting Focus</h6>
<p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">Added rim lighting to separate character from background.</p>
</div>
</div>

<div className="space-y-3 group cursor-zoom-in">
<div className="aspect-square rounded-2xl overflow-hidden relative">
<img alt="Var" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;hue=40"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
<div>
<h6 className="text-xs font-semibold text-slate-200 line-clamp-1">2. Color Balance</h6>
<p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">Shifted midtones to complement the glowing elements.</p>
</div>
</div>

<div className="space-y-3 group cursor-zoom-in">
<div className="aspect-square rounded-2xl overflow-hidden relative">
<img alt="Var" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;con=130"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
<div>
<h6 className="text-xs font-semibold text-slate-200 line-clamp-1">3. Contrast Pop</h6>
<p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">Deepened shadows to increase overall drama.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium text-slate-200 truncate">Logo Design V2</h4>
<span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Crazy</span>
</div>
<p className="text-xs text-slate-500">Oct 20, 2023 • 5 suggestions generated</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors">Load More</button>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 flex items-center justify-center opacity-30">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
</div>

<section className="max-w-5xl mx-auto px-6" id="account">
<div className="mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-100">Account Settings</h2>
<p className="text-sm text-slate-400 mt-1">Manage your profile and subscription.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-6">
<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm">
<h3 className="text-lg font-medium text-slate-200 mb-6">Profile Information</h3>
<div className="flex items-center gap-6 mb-8">
<div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden relative group">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=32"/>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
</div>
<div>
<button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white transition-colors">Change avatar</button>
</div>
</div>
<form className="space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Full name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all" type="text" value="Alex Rivera"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all" type="email" value="alex@example.com"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Primary art type</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all cursor-pointer">
<option selected="">Concept art</option>
<option>Digital illustration</option>
<option>3D / CGI</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Professional status</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition-all cursor-pointer">
<option selected="">Freelancer</option>
<option>Professional artist</option>
<option>Hobbyist</option>
</select>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all hover:-translate-y-0.5" type="button">
                                    Save changes
                                </button>
</div>
</form>
</div>
</div>

<div className="space-y-6">
<div className="bg-gradient-to-b from-fuchsia-500/10 to-transparent border border-fuchsia-500/20 rounded-[2rem] p-6 backdrop-blur-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 blur-[40px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-fuchsia-200">Current Plan</h3>
<span className="px-2.5 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 tracking-wide uppercase">Creator</span>
</div>
<div className="mt-8 mb-2 flex items-end justify-between text-sm">
<span className="text-white font-medium">Credits Used</span>
<span className="text-slate-400"><span className="text-white font-medium">78</span> / 120</span>
</div>

<div className="w-full h-2 bg-black/40 rounded-full overflow-hidden mb-3">
<div className="h-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(232,121,249,0.5)]" style={{width: '65%'}}></div>
</div>
<p className="text-xs text-slate-400 mb-6">Quota resets on Nov 15, 2023</p>
<button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white transition-colors">
                                Manage Subscription
                            </button>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
<button className="w-full py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Log out
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur-xl relative z-10">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 opacity-50">
<div className="w-5 h-5 rounded-md bg-gradient-to-br from-fuchsia-400 to-cyan-400 p-[1px]">
<div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center">
<span className="text-[8px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">SE</span>
</div>
</div>
<span className="text-xs font-medium text-slate-300">© 2023 Second Eyes Inc.</span>
</div>
<div className="flex gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
