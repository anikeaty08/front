import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
background: '#030305', // Extremely dark almost black
surface: '#0A0A0C',
surfaceHighlight: '#161618',
border: '#27272A',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black font-bold text-xs">D</div>
<span className="text-white font-semibold tracking-tight text-sm group-hover:opacity-80 transition-opacity">Devonce</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Changelog</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Devonce 2.0 is now available
                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="12" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h1 className="md:text-7xl lg:text-8xl bg-clip-text text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white to-white/40 mb-6 pb-2">Infrastructure <br/> for the ambitious.</h1>
<p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                The complete developer platform to build, scale, and deliver secure software. No config files, just pure code.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                    Start Building
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:chevron-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:terminal" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Documentation
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-surfaceHighlight/50 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-xs font-mono text-slate-500">deploy.config.ts</div>
</div>
<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-6"><span className="text-purple-400">import</span> { <span className="text-yellow-200">deploy</span>, <span className="text-yellow-200">Cluster</span> } <span className="text-purple-400">from</span> <span className="text-green-400">'@devonce/sdk'</span>;

<span className="text-slate-500">// Initialize instant edge cluster</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">app</span> = <span className="text-purple-400">new</span> <span className="text-yellow-200">Cluster</span>({
  <span className="text-blue-300">region</span>: <span className="text-green-400">'us-east-1'</span>,
  <span className="text-blue-300">scaling</span>: <span className="text-green-400">'auto'</span>,
  <span className="text-blue-300">security</span>: {
    <span className="text-blue-300">firewall</span>: <span className="text-purple-400">true</span>,
    <span className="text-blue-300">ddosProtection</span>: <span className="text-purple-400">true</span>
  }
});

<span className="text-purple-400">await</span> <span className="text-blue-400">app</span>.<span className="text-yellow-200">deploy</span>();
<span className="text-slate-500">➜  Deployed successfully in 42ms</span> <span className="text-green-400">✔</span>
</pre>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Powering next-gen engineering teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold text-lg tracking-tight text-white">Vercel</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<span className="font-semibold text-lg tracking-tight text-white">Linear</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="font-semibold text-lg tracking-tight text-white">Stripe</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:figma" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path></g></svg>
<span className="font-semibold text-lg tracking-tight text-white">Figma</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:slack" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></g></svg>
<span className="font-semibold text-lg tracking-tight text-white">Slack</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Everything you need  to ship faster.</h2>
<p className="text-slate-400 text-lg max-w-2xl">Devonce removes the friction between writing code and delivering value. Experience a workflow designed for flow state.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-white/10 bg-surfaceHighlight/30 p-8 hover:bg-white/5 transition-colors duration-300">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Instant Deployments</h3>
<p className="text-sm text-slate-400 leading-relaxed">Global edge network propagation in milliseconds. Your users are everywhere, your code should be too.</p>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-surfaceHighlight/30 p-8 hover:bg-white/5 transition-colors duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-md">SOC2 Type II compliant by default. Automated penetration testing, DDOS mitigation, and granular access controls built-in.</p>
</div>

<div className="flex-1 w-full rounded-lg border border-white/10 bg-black/50 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-mono text-slate-500">ACCESS LOG</span>
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-5/6 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-surfaceHighlight/30 p-8 hover:bg-white/5 transition-colors duration-300 md:col-span-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="order-2 md:order-1 relative h-32 md:h-auto rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-between px-4 pb-4 gap-1">
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[60%]"></div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">Gain deep insights into your application performance. Track latency, throughput, and error rates with zero configuration.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-surfaceHighlight/30 p-8 hover:bg-white/5 transition-colors duration-300">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">CI/CD Pipelines</h3>
<p className="text-sm text-slate-400 leading-relaxed">Integrated workflows that adapt to your team. Preview deployments for every pull request automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-surfaceHighlight/10">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Designed for keyboard power users.</h2>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-400">
<span className="flex items-center justify-center w-6 h-6 rounded border border-white/20 bg-white/5 text-[10px] font-mono text-white">C</span>
<span>Create new project</span>
</li>
<li className="flex items-center gap-3 text-slate-400">
<span className="flex items-center justify-center w-6 h-6 rounded border border-white/20 bg-white/5 text-[10px] font-mono text-white">/</span>
<span>Search documentation</span>
</li>
<li className="flex items-center gap-3 text-slate-400">
<span className="flex items-center justify-center w-6 h-6 rounded border border-white/20 bg-white/5 text-[10px] font-mono text-white">D</span>
<span>Deploy to production</span>
</li>
</ul>
</div>
<div className="flex-1 w-full">

<div className="w-full max-w-md mx-auto bg-[#1a1a1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:search" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<span className="text-sm text-slate-400">Search commands...</span>
</div>
<div className="p-2">
<div className="flex items-center justify-between px-3 py-2 rounded bg-indigo-500/20 text-indigo-200 text-sm">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
<span>Deploy Project</span>
</div>
<span className="text-xs opacity-70">Enter</span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded text-slate-400 text-sm hover:bg-white/5">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span>Manage Team</span>
</div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded text-slate-400 text-sm hover:bg-white/5">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<span>Settings</span>
</div>
</div>
</div>
<div className="px-4 py-2 border-t border-white/5 bg-white/5 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider">
<span>Devonce CLI</span>
<span>v2.1.0</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to deploy?</h2>
<p className="text-lg text-slate-400 mb-10">Start with our free tier. Scale as you grow. No credit card required.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors">
                    Start for free
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black font-bold text-[10px]">D</div>
<span className="text-white font-semibold tracking-tight text-sm">Devonce</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Designing the future of software infrastructure. <br/>
                        San Francisco, CA.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Preview Environments</a></li>
<li><a className="hover:text-white transition-colors" href="#">Edge Functions</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-slate-600">© 2024 Devonce Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
