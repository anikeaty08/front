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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight">LAYOUT SYSTEM</span>
</div>
<div className="text-xs text-zinc-500 font-mono">v1.0.0</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 pt-24 space-y-32">

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4 flex justify-between items-end">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">01. Hero Variants</h2>
</div>

<div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
<div className="text-xs text-zinc-400 font-mono bg-zinc-50/50 border-zinc-100 border-b pt-2 pr-4 pb-2 pl-4">Hero A — Classic Conversion</div>
<div className="lg:p-16 grid lg:grid-cols-2 pt-8 pr-8 pb-8 pl-8 gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div className="space-y-4">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                                Automate your entire workflow instantly.
                            </h1>
<p className="text-lg text-zinc-500 font-light leading-relaxed max-w-md">
                                Stop wasting time on manual tasks. Build, scale, and deploy your projects with our all-in-one platform.
                            </p>
</div>
<div className="flex flex-wrap gap-3">
<button className="h-10 px-6 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition shadow-sm flex items-center gap-2">
                                Start Building
                            </button>
<button className="h-10 px-6 rounded-md border border-zinc-200 bg-white text-zinc-600 text-sm font-medium hover:bg-zinc-50 transition flex items-center gap-2">
                                View Demo
                            </button>
</div>
</div>
<div className="relative aspect-[4/3] bg-zinc-100 rounded-lg border border-zinc-200 shadow-sm overflow-hidden flex items-center justify-center grayscale">

<div className="border-x bg-white border-zinc-200 rounded-t-lg border-t absolute top-4 right-4 bottom-0 left-4 shadow-sm">
<div className="h-8 border-b border-zinc-100 flex items-center px-3 gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-200"></div>
<div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-200 bg-white overflow-hidden relative">
<div className="bg-zinc-50/50 border-b border-zinc-100 px-4 py-2 text-xs font-mono text-zinc-400">Hero B — Centered Statement</div>

<div className="absolute inset-0 z-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 p-12 lg:py-32 flex flex-col items-center text-center space-y-8">
<div className="space-y-6 max-w-2xl">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900">
                            Design the future.
                        </h1>
<p className="text-xl text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
                            The ultimate toolkit for modern engineering teams. Ship faster with less friction.
                        </p>
</div>
<button className="h-12 px-8 rounded-full bg-zinc-900 text-white text-base font-medium hover:bg-zinc-800 transition shadow-lg shadow-zinc-200 flex items-center gap-2 group">
                        Get Started <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
<div className="bg-zinc-50/50 border-b border-zinc-100 px-4 py-2 text-xs font-mono text-zinc-400">Hero C — Proof-led Hero</div>
<div className="p-8 lg:p-24 text-center space-y-10">
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 max-w-3xl mx-auto">
                        Trusted by the world's best teams.
                    </h1>
<div className="flex flex-col items-center gap-6">
<button className="h-12 px-8 rounded-md bg-zinc-900 text-white text-base font-medium hover:bg-zinc-800 transition shadow-sm">
                            Start Free Trial
                        </button>
<div className="flex items-center gap-1.5 text-sm text-zinc-500">
<div className="flex text-zinc-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span>Rated 4.9/5 by 5,000+ users</span>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 w-full max-w-2xl mx-auto">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">Powering next-gen companies</p>
<div className="flex justify-between items-center opacity-40 grayscale gap-4 flex-wrap">
<span className="font-bold tracking-tighter text-xl">ACME</span>
<span className="font-bold tracking-tighter text-xl">PLAID</span>
<span className="font-bold tracking-tighter text-xl">VERCEL</span>
<span className="font-bold tracking-tighter text-xl">STRIPE</span>
<span className="font-bold tracking-tighter text-xl">LINEAR</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">02. Social Proof Variants</h2>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-10 text-center space-y-8">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-60">
<div className="text-xl font-bold tracking-tighter text-zinc-900">AIRBNB</div>
<div className="text-xl font-bold tracking-tighter text-zinc-900">UBER</div>
<div className="text-xl font-bold tracking-tighter text-zinc-900">GOOGLE</div>
<div className="text-xl font-bold tracking-tighter text-zinc-900">AMAZON</div>
<div className="text-xl font-bold tracking-tighter text-zinc-900">META</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-8 overflow-hidden">
<div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
<div className="min-w-[320px] p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex gap-1 text-zinc-900 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">"This tool has completely transformed how we ship code. It's simply incredible."</p>
<div className="text-xs font-medium text-zinc-900">Sarah Jenks, CTO</div>
</div>
<div className="min-w-[320px] p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex gap-1 text-zinc-900 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">"The best investment we've made this year. Productivity is up 200%."</p>
<div className="text-xs font-medium text-zinc-900">Mark Doe, Founder</div>
</div>
<div className="min-w-[320px] p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex gap-1 text-zinc-900 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">"Clean, fast, and reliable. Exactly what our engineering team needed."</p>
<div className="text-xs font-medium text-zinc-900">James Lee, Engineer</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-12 text-white">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
<div className="space-y-2">
<div className="text-5xl font-semibold tracking-tight">10k+</div>
<div className="text-zinc-400 text-sm font-medium uppercase tracking-wide">Active Users</div>
</div>
<div className="space-y-2">
<div className="text-5xl font-semibold tracking-tight">$500M</div>
<div className="text-zinc-400 text-sm font-medium uppercase tracking-wide">Transactions Processed</div>
</div>
<div className="space-y-2">
<div className="text-5xl font-semibold tracking-tight">99.99%</div>
<div className="text-zinc-400 text-sm font-medium uppercase tracking-wide">Uptime SLA</div>
</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">03. Problem Variants</h2>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl font-semibold text-zinc-900 mb-6 tracking-tight">Stop letting manual tasks slow you down</h3>
<div className="space-y-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-500 bg-zinc-100 p-1 rounded-full"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Wasted Developer Hours</h4>
<p className="text-sm text-zinc-500 mt-1">Engineers spending 20% of time on maintenance instead of shipping.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-500 bg-zinc-100 p-1 rounded-full"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Data Silos</h4>
<p className="text-sm text-zinc-500 mt-1">Customer data scattered across 5 different tools.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-500 bg-zinc-100 p-1 rounded-full"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Missed Deadlines</h4>
<p className="text-sm text-zinc-500 mt-1">Lack of visibility causing project delays.</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-lg border border-zinc-100 aspect-square flex items-center justify-center order-1 lg:order-2">
<iconify-icon className="text-zinc-300" icon="solar:graph-down-linear" width="80"></iconify-icon>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-10">
<div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="p-8 space-y-4">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-zinc-400"></span>
<span className="text-xs font-mono font-medium text-zinc-500 uppercase">The Old Way</span>
</div>
<h3 className="text-xl font-medium text-zinc-400">Chaos &amp; Confusion</h3>
<p className="text-zinc-500 leading-relaxed">
                            "Before, we were drowning in spreadsheets. Tracking simple tasks required multiple meetings, and we constantly lost critical data in email threads."
                        </p>
</div>
<div className="p-8 space-y-4 bg-zinc-50/50">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
<span className="text-xs font-mono font-medium text-zinc-900 uppercase">The New Way</span>
</div>
<h3 className="text-xl font-medium text-zinc-900">Automated Clarity</h3>
<p className="text-zinc-900 font-medium leading-relaxed">
                            "Now, everything is centralized. We save 20+ hours a week per employee, and our deployment frequency has tripled since day one."
                        </p>
</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">05. Features Variants</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:bolt-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Instant Sync</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Changes propagate globally in milliseconds.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Enterprise Security</h4>
<p className="text-xs text-zinc-500 leading-relaxed">SOC2 Type II certified infrastructure.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Team Collaboration</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Built for multiplayer workflows.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Real-time Analytics</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Visualize growth with custom dashboards.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:cloud-upload-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Auto Backups</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Never lose a single byte of data.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">API Access</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Full programmatic control for devs.</p>
</div>
</div>

<div className="space-y-8">

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden grid md:grid-cols-2">
<div className="p-10 lg:p-14 flex flex-col justify-center space-y-4">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Integrated Command Center</h3>
<p className="text-base text-zinc-500 leading-relaxed">Manage your entire stack from a single interface. Toggle features, monitor uptime, and manage permissions without touching the CLI.</p>
<ul className="space-y-2 mt-2">
<li className="flex items-center gap-2 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> One-click deployment</li>
<li className="flex items-center gap-2 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Role-based access</li>
</ul>
</div>
<div className="bg-zinc-100 min-h-[300px] border-l border-zinc-200 flex items-center justify-center grayscale">
<iconify-icon className="text-zinc-300" icon="solar:laptop-minimalistic-linear" width="96"></iconify-icon>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden grid md:grid-cols-2">
<div className="bg-zinc-100 min-h-[300px] border-r border-zinc-200 order-last md:order-first flex items-center justify-center grayscale">
<iconify-icon className="text-zinc-300" icon="solar:graph-new-linear" width="96"></iconify-icon>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-center space-y-4 order-first md:order-last">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Predictive Analytics</h3>
<p className="text-base text-zinc-500 leading-relaxed">Our AI engine predicts traffic spikes before they happen, autoscaling your infrastructure to handle the load seamlessly.</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-zinc-200 pb-2">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Core Modules</h3>
</div>
<div className="bg-white border border-zinc-200 rounded-lg divide-y divide-zinc-100">
<div className="p-4 flex items-center gap-4 group hover:bg-zinc-50 transition">
<div className="p-2 bg-zinc-100 rounded text-zinc-900"><iconify-icon icon="solar:database-linear"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-zinc-900">Database Management</div>
<div className="text-xs text-zinc-500">Postgres, Redis, MySQL</div>
</div>
</div>
<div className="p-4 flex items-center gap-4 group hover:bg-zinc-50 transition">
<div className="p-2 bg-zinc-100 rounded text-zinc-900"><iconify-icon icon="solar:server-square-linear"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-zinc-900">Server Deployment</div>
<div className="text-xs text-zinc-500">AWS, DigitalOcean, Vultr</div>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-zinc-200 pb-2">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Integrations</h3>
</div>
<div className="bg-white border border-zinc-200 rounded-lg divide-y divide-zinc-100">
<div className="p-4 flex items-center gap-4 group hover:bg-zinc-50 transition">
<div className="p-2 bg-zinc-100 rounded text-zinc-900"><iconify-icon icon="solar:card-send-linear"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-zinc-900">Payments</div>
<div className="text-xs text-zinc-500">Stripe, LemonSqueezy</div>
</div>
</div>
<div className="p-4 flex items-center gap-4 group hover:bg-zinc-50 transition">
<div className="p-2 bg-zinc-100 rounded text-zinc-900"><iconify-icon icon="solar:mailbox-linear"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-zinc-900">Communication</div>
<div className="text-xs text-zinc-500">Slack, Discord, Email</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">06. How It Works</h2>
</div>

<div className="relative py-8">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-200 -z-10"></div>
<div className="grid md:grid-cols-3 gap-10 text-center">
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-zinc-200 mx-auto mb-6">
<span className="text-3xl font-bold text-zinc-900">1</span>
</div>
<h4 className="text-lg font-semibold text-zinc-900 mb-2">Connect Data</h4>
<p className="text-sm text-zinc-500">Link your existing databases in one click.</p>
</div>
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-zinc-200 mx-auto mb-6">
<span className="text-3xl font-bold text-zinc-900">2</span>
</div>
<h4 className="text-lg font-semibold text-zinc-900 mb-2">Configure Workflow</h4>
<p className="text-sm text-zinc-500">Drag and drop to build your automation logic.</p>
</div>
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-zinc-200 mx-auto mb-6">
<span className="text-3xl font-bold text-zinc-900">3</span>
</div>
<h4 className="text-lg font-semibold text-zinc-900 mb-2">Launch</h4>
<p className="text-sm text-zinc-500">Deploy globally and monitor results instantly.</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 items-stretch">
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-mono text-zinc-400 mb-3">STEP 01</div>
<div className="text-base font-medium text-zinc-900">Create Account</div>
</div>
<div className="hidden md:flex items-center justify-center text-zinc-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-mono text-zinc-400 mb-3">STEP 02</div>
<div className="text-base font-medium text-zinc-900">Install SDK</div>
</div>
<div className="hidden md:flex items-center justify-center text-zinc-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-mono text-zinc-400 mb-3">STEP 03</div>
<div className="text-base font-medium text-zinc-900">Push to Prod</div>
</div>
<div className="hidden md:flex items-center justify-center text-zinc-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="p-6 bg-zinc-900 rounded-xl border border-zinc-900 text-white flex flex-col items-center justify-center text-center cursor-pointer hover:bg-zinc-800 transition">
<div className="text-sm font-medium">Start Now</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">08. Use Cases</h2>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="group p-8 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-900 mb-6" icon="solar:rocket-linear" width="32"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-900">For Startups</h4>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed">Move fast and break nothing. Get your MVP to market in days, not months.</p>
</div>
<div className="group p-8 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-900 mb-6" icon="solar:briefcase-linear" width="32"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-900">For Agencies</h4>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed">Manage multiple clients from a single dashboard with unified billing.</p>
</div>
<div className="group p-8 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-900 mb-6" icon="solar:laptop-linear" width="32"></iconify-icon>
<h4 className="text-lg font-semibold text-zinc-900">For Freelancers</h4>
<p className="text-sm text-zinc-500 mt-3 leading-relaxed">Professional tools at an affordable price. Impress your clients.</p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-100">
<div className="p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-base text-zinc-900 font-medium">If you want to <span className="text-zinc-400">scale your database without downtime</span>...</div>
<div className="text-sm font-mono bg-zinc-100 px-3 py-1 rounded text-zinc-600">use Replica Feature</div>
</div>
<div className="p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-base text-zinc-900 font-medium">If you want to <span className="text-zinc-400">accept payments globally</span>...</div>
<div className="text-sm font-mono bg-zinc-100 px-3 py-1 rounded text-zinc-600">use Merchant API</div>
</div>
<div className="p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-base text-zinc-900 font-medium">If you want to <span className="text-zinc-400">automate customer emails</span>...</div>
<div className="text-sm font-mono bg-zinc-100 px-3 py-1 rounded text-zinc-600">use Flow Builder</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">09. Pricing Variants</h2>
</div>

<div className="grid md:grid-cols-3 gap-6 items-start">
<div className="p-8 bg-white border border-zinc-200 rounded-xl flex flex-col h-full">
<h3 className="font-semibold text-zinc-900">Starter</h3>
<p className="text-xs text-zinc-500 mt-1">For hobbyists</p>
<div className="mt-6 mb-6"><span className="text-4xl font-bold tracking-tight">$9</span><span className="text-zinc-500 text-sm">/mo</span></div>
<button className="w-full py-2 bg-zinc-50 border border-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-100 transition mt-auto">Get Started</button>
</div>
<div className="p-8 bg-zinc-900 border border-zinc-900 rounded-xl text-white relative shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-white text-zinc-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
<h3 className="font-semibold">Pro</h3>
<p className="text-xs text-zinc-400 mt-1">For serious growers</p>
<div className="mt-6 mb-6"><span className="text-4xl font-bold tracking-tight">$29</span><span className="text-zinc-400 text-sm">/mo</span></div>
<ul className="space-y-3 text-sm text-zinc-300 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Unlimited Projects</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
<button className="w-full py-2 bg-white text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-100 transition">Get Started</button>
</div>
<div className="p-8 bg-white border border-zinc-200 rounded-xl flex flex-col h-full">
<h3 className="font-semibold text-zinc-900">Enterprise</h3>
<p className="text-xs text-zinc-500 mt-1">For big teams</p>
<div className="mt-6 mb-6"><span className="text-4xl font-bold tracking-tight">$99</span><span className="text-zinc-500 text-sm">/mo</span></div>
<button className="w-full py-2 bg-zinc-50 border border-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-100 transition mt-auto">Contact Sales</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="border border-zinc-200 rounded-xl p-10 flex flex-col justify-between hover:border-zinc-300 transition">
<div>
<h3 className="text-xl font-semibold">Free</h3>
<div className="text-5xl font-bold tracking-tight mt-4">$0</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> 1 Project</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Community Support</li>
</ul>
</div>
<button className="mt-10 w-full py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-50 transition">Start Free</button>
</div>
<div className="border border-zinc-200 bg-zinc-50 rounded-xl p-10 flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold">Paid</h3>
<div className="text-5xl font-bold tracking-tight mt-4">$49<span className="text-base text-zinc-500 font-normal">/mo</span></div>
<ul className="mt-8 space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Projects</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Advanced Analytics</li>
</ul>
</div>
<button className="mt-10 w-full py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition">Upgrade</button>
</div>
</div>

<div className="overflow-hidden border border-zinc-200 rounded-xl bg-white">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 text-zinc-900 font-semibold border-b border-zinc-200">
<tr>
<th className="px-6 py-4">Features</th>
<th className="px-6 py-4 text-center">Free</th>
<th className="px-6 py-4 text-center">Pro</th>
<th className="px-6 py-4 text-center">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 text-zinc-600">Team Members</td>
<td className="px-6 py-4 text-center text-zinc-900">1</td>
<td className="px-6 py-4 text-center text-zinc-900">5</td>
<td className="px-6 py-4 text-center text-zinc-900">Unlimited</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-600">Storage</td>
<td className="px-6 py-4 text-center text-zinc-900">1 GB</td>
<td className="px-6 py-4 text-center text-zinc-900">100 GB</td>
<td className="px-6 py-4 text-center text-zinc-900">Unlimited</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-600">API Access</td>
<td className="px-6 py-4 text-center text-zinc-900">-</td>
<td className="px-6 py-4 text-center text-zinc-900"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></td>
<td className="px-6 py-4 text-center text-zinc-900"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Testimonials Variants</h2>
</div>

<div className="max-w-2xl mx-auto bg-white border border-zinc-200 p-10 rounded-xl text-center">
<div className="w-16 h-16 bg-zinc-200 rounded-full mx-auto mb-6 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale" src="https://placehold.co/100x100/e4e4e7/52525b"/>
</div>
<h3 className="text-xl font-medium text-zinc-900 leading-relaxed italic mb-6">
                    "This is the missing piece of the puzzle. We were able to launch our MVP in record time thanks to this system."
                </h3>
<div className="text-sm font-semibold text-zinc-900">Alex Morgan</div>
<div className="text-xs text-zinc-500">CEO, TechStart</div>
</div>

<div className="bg-zinc-900 text-white rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 space-y-2">
<div className="text-6xl font-bold tracking-tighter text-white">+240%</div>
<div className="text-sm text-zinc-400 uppercase tracking-widest">Increase in Revenue</div>
</div>
<div className="w-px h-24 bg-zinc-800 hidden md:block"></div>
<div className="flex-1">
<p className="text-lg text-zinc-300 leading-relaxed font-light">"The ROI was immediate. Within the first week, we saw our conversion rates skyrocket."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
<div className="text-sm font-medium">Jordan B.</div>
</div>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">11. FAQ Variants</h2>
</div>

<div className="max-w-3xl mx-auto space-y-4">
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-zinc-900/10">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-zinc-900 select-none hover:bg-zinc-50 transition">
                        What is the refund policy?
                        <span className="text-zinc-400 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed">
                        We offer a 30-day money-back guarantee. If you're not satisfied, contact support and we'll refund you, no questions asked.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-lg">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-zinc-900 select-none hover:bg-zinc-50 transition">
                        Can I cancel anytime?
                        <span className="text-zinc-400 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed">
                        Yes, you can cancel your subscription at any time from your dashboard settings.
                    </div>
</details>
</div>

<div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-zinc-200 pt-10">
<div>
<h4 className="font-semibold text-zinc-900 mb-2">Do you offer support?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Yes, all plans come with email support. Pro plans get priority response times.</p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-2">Is my data secure?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We use AES-256 encryption and follow strict security protocols to keep your data safe.</p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-2">Can I export my data?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Absolutely. You can export your entire project data as JSON or CSV at any time.</p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-2">Are there hidden fees?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">No. The price you see is the price you pay. Taxes may apply based on your location.</p>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">12. CTA Variants</h2>
</div>

<div className="bg-zinc-900 rounded-xl p-16 text-center text-white relative overflow-hidden">
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to transform your workflow?</h2>
<p className="text-zinc-400 mb-8 font-light">Join 10,000+ engineers building the future today.</p>
<button className="h-12 px-8 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition shadow-lg">Get Started Free</button>
</div>

<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-zinc-900"></div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-lg">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Start your 14-day free trial</h2>
<p className="text-zinc-500 mt-2 text-sm">No credit card required. Cancel anytime.</p>
</div>
<div className="flex gap-4">
<button className="h-11 px-6 rounded-md border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition whitespace-nowrap">Talk to Sales</button>
<button className="h-11 px-6 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition whitespace-nowrap">Sign Up Now</button>
</div>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">13. Blog Variants</h2>
</div>

<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden mb-4 border border-zinc-200">
<img className="group-hover:scale-105 transition duration-500 opacity-80 w-full h-full object-cover grayscale" src="https://placehold.co/600x400/e4e4e7/52525b?text=Image"/>
</div>
<div className="text-[10px] font-bold tracking-widest text-zinc-400 mb-2 uppercase">Engineering</div>
<h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 transition leading-snug">Scaling Redux for Enterprise Apps</h3>
</article>
<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden mb-4 border border-zinc-200">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition duration-500" src="https://placehold.co/600x400/e4e4e7/52525b?text=Image"/>
</div>
<div className="text-[10px] font-bold tracking-widest text-zinc-400 mb-2 uppercase">Design</div>
<h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 transition leading-snug">The Principles of Minimal UI</h3>
</article>
<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden mb-4 border border-zinc-200">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition duration-500" src="https://placehold.co/600x400/e4e4e7/52525b?text=Image"/>
</div>
<div className="text-[10px] font-bold tracking-widest text-zinc-400 mb-2 uppercase">Tutorial</div>
<h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 transition leading-snug">Building a CI/CD Pipeline</h3>
</article>
</div>

<div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-100">
<a className="block p-6 hover:bg-zinc-50 transition group flex justify-between items-center" href="#">
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600">State Management in 2024</span>
<span className="text-xs text-zinc-400 font-mono">Oct 24</span>
</a>
<a className="block p-6 hover:bg-zinc-50 transition group flex justify-between items-center" href="#">
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600">Why we switched to serverless</span>
<span className="text-xs text-zinc-400 font-mono">Oct 22</span>
</a>
<a className="block p-6 hover:bg-zinc-50 transition group flex justify-between items-center" href="#">
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600">Understanding Database Indexing</span>
<span className="text-xs text-zinc-400 font-mono">Oct 18</span>
</a>
</div>
</section>

<section className="space-y-12">
<div className="border-b border-zinc-200 pb-4">
<h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">14. Footer Variants</h2>
</div>

<footer className="bg-white border-t border-zinc-200 py-16 px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-zinc-900 rounded-sm"></div>
<span className="text-sm font-bold tracking-tight">ACME INC</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">© 2024 Company Inc.All rights reserved.</p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-zinc-900">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition" href="#">Features</a></li>
<li><a className="hover:text-zinc-900 transition" href="#">Pricing</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-zinc-900">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-900 transition" href="#">API Reference</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-zinc-900">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</footer>

<footer className="bg-zinc-50 border-t border-zinc-200 py-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Subscribe to our newsletter</h3>
<p className="text-zinc-500">Get the latest updates and resources sent to your inbox weekly.</p>
<div className="flex max-w-sm mx-auto gap-2">
<input className="flex-1 h-10 px-3 rounded-md border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10" placeholder="Enter your email" type="email"/>
<button className="h-10 px-4 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition">Subscribe</button>
</div>
</div>
<div className="grid md:grid-cols-4 gap-8 border-t border-zinc-200 pt-10">
<div className="col-span-full md:col-span-1">
<div className="w-6 h-6 bg-zinc-900 rounded-sm mb-4"></div>
</div>
<div className="text-sm text-zinc-500 space-y-2">
<a className="block hover:text-zinc-900" href="#">Twitter</a>
<a className="block hover:text-zinc-900" href="#">GitHub</a>
<a className="block hover:text-zinc-900" href="#">LinkedIn</a>
</div>
<div className="text-sm text-zinc-500 col-span-2 text-right">
                        Designed with precision in 2024.
                     </div>
</div>
</footer>
</section>
</main>

    </>
  );
}
