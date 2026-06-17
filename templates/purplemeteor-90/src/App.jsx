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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
</div>

<header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl sm:px-6 lg:px-8 border-slate-50/5 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset]">
<iconify-icon height="20" icon="solar:atom-linear" style={{color: 'white', fontSize: '20px'}} width="20"></iconify-icon>
</span>
<span className="text-lg font-semibold tracking-tight">Purple Meteor</span>
</a>
<nav className="hidden md:flex gap-1 border-slate-50/5 border rounded-full px-4 items-center">
<a className="hover:text-white text-sm font-medium text-zinc-100 pt-2 pr-3 pb-2 pl-3" href="#">Features</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Pricing</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Changelog</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Blog</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Company</a>
</nav>
<div className="flex gap-2 items-center">
<button aria-label="Login" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4">
<iconify-icon height="16" icon="solar:login-2-linear" width="16"></iconify-icon>
<span>Login</span>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="z-10 pt-20 pb-16 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="mb-8 flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200 backdrop-blur">
<iconify-icon className="text-violet-400" height="14" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
              Purple Meteor 2.0 is now available
            </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
          Everything you need <br/>
<span className="text-gray-400">to think faster.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10">
          From local-first storage to neural graph linking, explore the features that make Purple Meteor the preferred choice for 10,000+ engineers and designers.
        </p>
</div>
</section>

<section className="relative z-10 pb-20 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by builders at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale mix-blend-screen">
<iconify-icon height="36" icon="logos:google" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:anthropic" width="96"></iconify-icon>
<iconify-icon className="" height="36" icon="logos:vercel" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">Core Capabilities</h2>
<p className="text-zinc-400 mt-2">Designed for flow state.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 ring-1 ring-white/20">
<iconify-icon className="text-violet-300" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Semantic Search</h3>
<p className="text-sm text-zinc-400 mt-2 max-w-sm">Find what you mean, not just what you type. Our local LLM indexes your thoughts instantly.</p>
</div>

<div className="mt-8 relative w-full h-48 rounded-lg border border-white/10 bg-[#0F0F16] p-4 shadow-2xl overflow-hidden">
<div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
<iconify-icon className="text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Project Beta launch strategy...</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-default">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs text-zinc-300">Q3 Marketing Plan</span>
</div>
<span className="text-[10px] text-zinc-500">Aug 12</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-default bg-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="solar:notes-linear"></iconify-icon>
<span className="text-xs text-white">Launch Checklist v2</span>
</div>
<span className="text-[10px] text-zinc-400">Match 98%</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-default">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:user-linear"></iconify-icon>
<span className="text-xs text-zinc-300">Meeting Notes: Alex</span>
</div>
<span className="text-[10px] text-zinc-500">Jul 28</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 ring-1 ring-white/20">
<iconify-icon className="text-yellow-300" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Instant Sync</h3>
<p className="text-sm text-zinc-400 mt-2">Changes propagate in sub-12ms latency via CRDTs.</p>
<div className="mt-10 flex items-center justify-center">
<div className="relative h-32 w-32">
<div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<span className="text-2xl font-bold font-mono text-white">12<span className="text-sm text-zinc-500 font-sans font-normal ml-1">ms</span></span>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="absolute bottom-4 right-2 h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
<div className="relative z-10">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 ring-1 ring-white/20">
<iconify-icon className="text-pink-300" height="24" icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Visual Graph</h3>
<p className="text-sm text-zinc-400 mt-2">See how your ideas connect.</p>
<div className="mt-8 relative h-32 w-full">
<svg className="absolute inset-0 w-full h-full" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" viewbox="0 0 200 100">
<circle cx="100" cy="50" fill="white" r="3"></circle>
<circle cx="140" cy="30" fill="#a78bfa" r="2"></circle>
<circle cx="60" cy="70" fill="#a78bfa" r="2"></circle>
<circle cx="40" cy="30" fill="#60a5fa" r="2"></circle>
<circle cx="160" cy="80" fill="#60a5fa" r="2"></circle>

<path d="M100 50 L140 30"></path>
<path d="M100 50 L60 70"></path>
<path d="M60 70 L40 30"></path>
<path d="M140 30 L160 80"></path>
<path d="M100 50 L160 80"></path>
</svg>
</div>
</div>
</div>

<div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F0F16] to-[#0A0A11] p-8 group">
<div className="flex flex-col sm:flex-row items-center gap-8">
<div className="flex-1">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 ring-1 ring-white/20">
<iconify-icon className="text-indigo-300" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Multiplayer Standard</h3>
<p className="text-sm text-zinc-400 mt-2">Work together on the same document without conflict. Cursors, comments, and threads live in harmony.</p>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-[#0F0F16] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3818cdcc-13ca-4e05-83b1-f59664bbbc8a_320w.webp"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-[#0F0F16] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8808ade-0ffa-4730-9007-30454d276594_320w.webp"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-[#0F0F16] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc257d3b-7bba-4257-9a9c-d6a27743b7e7_320w.webp" style={{}}/>
<div className="h-8 w-8 rounded-full bg-white/10 ring-2 ring-[#0F0F16] flex items-center justify-center text-[10px] text-white font-medium">+4</div>
</div>
<div className="h-px w-8 bg-white/10"></div>
<span className="text-xs text-zinc-500">Active now</span>
</div>
</div>

<div className="w-full sm:w-1/2 bg-white/5 rounded-xl border border-white/10 p-4 relative">
<div className="absolute -top-3 -right-3 bg-violet-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg shadow-violet-900/50 flex items-center gap-1">
<iconify-icon height="10" icon="solar:cursor-linear" width="10"></iconify-icon> Sarah
                </div>
<div className="space-y-3">
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-5/6 bg-white/10 rounded"></div>
<div className="flex gap-2 mt-4">
<div className="h-8 w-full bg-indigo-500/20 rounded border border-indigo-500/30"></div>
<div className="h-8 w-full bg-white/5 rounded border border-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 bg-black/40 border-y border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl rounded-full opacity-30"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A11] p-6 shadow-2xl">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-sm font-mono text-emerald-400">ENCRYPTION_ACTIVE</span>
</div>
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/10"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/10"></div>
</div>
</div>
<div className="space-y-3 font-mono text-xs text-zinc-400">
<p><span className="text-emerald-500">➜</span> Initiating handshake...</p>
<p><span className="text-emerald-500">➜</span> Generaring 256-bit AES key...</p>
<p><span className="text-emerald-500">➜</span> Verifying identity signatures...</p>
<div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded text-emerald-200 mt-2">
                     Status: Zero-Knowledge Architecture Verified.
                     No server-side key access detected.
                   </div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Privacy First
               </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Your data, mathematically guaranteed.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-6">
                 We don't sell ads. We don't train models on your private notes. Purple Meteor uses client-side encryption, meaning your data looks like random noise to our servers.
               </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-zinc-300 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                   Local-first architecture keeps data on your device
                 </li>
<li className="flex items-start gap-3 text-zinc-300 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                   Open source encryption protocols
                 </li>
<li className="flex items-start gap-3 text-zinc-300 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                   GDPR &amp; SOC2 Compliant
                 </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-white text-center mb-16">And so much more</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-300" height="24" icon="solar:keyboard-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium">Keyboard First</h4>
<p className="text-xs text-zinc-500">Navigate without a mouse.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-300" height="24" icon="solar:cloud-file-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium">Unlimited Storage</h4>
<p className="text-xs text-zinc-500">Never hit a quota limit.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-300" height="24" icon="solar:history-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium">Version History</h4>
<p className="text-xs text-zinc-500">Rewind to any second.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition">
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-300" height="24" icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium">API Access</h4>
<p className="text-xs text-zinc-500">Build your own workflows.</p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-[#0a0a12]">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
<iconify-icon className="text-white" height="16" icon="solar:atom-linear" width="16"></iconify-icon>
</span>
<span className="text-sm font-medium text-zinc-300">© 2025 Purple Meteor Labs</span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-400">
<a className="hover:text-zinc-200" href="#">Privacy</a>
<a className="hover:text-zinc-200" href="#">Terms</a>
<a className="hover:text-zinc-200" href="#">Status</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
