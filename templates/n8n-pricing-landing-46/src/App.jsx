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
},
colors: {
background: '#0a0910',
surface: '#141420',
surface_hover: '#1d1d2b',
primary: '#ff6d5a', // The orange accent
primary_hover: '#e55a48',
accent_blue: '#4d7ae5',
accent_purple: '#8d5ce8',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">

<svg fill="none" height="32" viewbox="0 0 50 50" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0L0 12.5V37.5L25 50L50 37.5V12.5L25 0Z" fill="#ff6d5a"></path>
<path d="M25 12L12 18V32L25 38L38 32V18L25 12Z" fill="#0a0910"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-white">n8n</span>
</a>
<div className="hidden lg:flex items-center gap-6 text-base font-medium text-gray-400">
<button className="flex items-center gap-1 hover:text-white">Product <i className="h-4 w-4" data-lucide="chevron-down"></i></button>
<button className="flex items-center gap-1 hover:text-white">Use cases <i className="h-4 w-4" data-lucide="chevron-down"></i></button>
<button className="flex items-center gap-1 hover:text-white">Docs <i className="h-4 w-4" data-lucide="chevron-down"></i></button>
<button className="flex items-center gap-1 hover:text-white">Community <i className="h-4 w-4" data-lucide="chevron-down"></i></button>
<a className="hover:text-white" href="#">Enterprise</a>
<a className="hover:text-white" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition">
<i className="h-4 w-4" data-lucide="github"></i>
<span>GitHub</span>
<span className="ml-1 text-gray-400">★ 159,158</span>
</div>
<a className="hidden md:block text-base font-medium hover:text-white" href="#">Sign in</a>
<a className="rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 text-base font-medium text-white shadow-lg shadow-orange-500/20 hover:brightness-110 transition" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-20 pb-12 glow-bg">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white">Pricing</h1>
<p className="mt-4 max-w-2xl text-lg text-gray-400">
                    All plans include unlimited users &amp; workflows and every integration.<br/>
                    Pricing based on monthly workflow executions, regardless of complexity.
                </p>
<div className="mt-8 flex items-center gap-4">
<span className="text-base text-gray-300">Monthly</span>
<div className="relative h-7 w-12 rounded-full bg-accent_blue cursor-pointer">
<div className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow"></div>
</div>
<span className="text-base text-gray-300">Annually <span className="text-green-400">[Save 17%]</span></span>
</div>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

<div className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-white/20">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">Starter</h3>
<p className="mt-2 text-sm text-gray-400 h-10">Great for getting started and seeing the power of n8n.</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">125R$</span>
<span className="text-sm text-gray-400">/mo, billed annually</span>
</div>
</div>
<div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<span className="font-medium text-white">2.5k</span>
<div className="text-right text-xs leading-tight text-gray-400">
                                workflow executions<br/>
<span className="text-[10px] opacity-70">with unlimited steps</span>
</div>
</div>
<div className="mt-2 h-1 w-full rounded-full bg-white/10">
<div className="h-1 w-1/4 rounded-full bg-accent_blue"></div>
</div>
</div>
<button className="mb-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-base font-medium text-white shadow-lg shadow-blue-500/20 hover:brightness-110">Start free trial</button>
<p className="mb-4 text-xs text-center text-gray-500">No credit card required</p>
<div className="mb-6 flex items-center gap-2 text-sm text-white">
<i className="h-4 w-4 text-gray-400" data-lucide="cloud"></i> Hosted by n8n
                    </div>
<div className="space-y-3 text-sm text-gray-400 border-t border-white/10 pt-6">
<p className="font-medium text-white mb-2">This plan includes:</p>
<div className="flex gap-3"><i className="h-4 w-4 text-gray-500" data-lucide="check"></i> 1 shared project</div>
<div className="flex gap-3"><i className="h-4 w-4 text-gray-500" data-lucide="check"></i> 5 concurrent executions</div>
<div className="flex gap-3"><i className="h-4 w-4 text-gray-500" data-lucide="check"></i> Unlimited users</div>
<div className="flex gap-3"><i className="h-4 w-4 text-gray-500" data-lucide="check"></i> 50 AI Workflow Builder credits</div>
<div className="flex gap-3"><i className="h-4 w-4 text-gray-500" data-lucide="check"></i> Forum support</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-accent_purple/40 bg-surface shadow-[0_0_30px_rgba(141,92,232,0.1)] p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
<div className="mb-6">
<h3 className="text-xl font-medium text-white">Pro</h3>
<p className="mt-2 text-sm text-gray-400 h-10">For solo builders and small teams running workflows in production.</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">313R$</span>
<span className="text-sm text-gray-400">/mo, billed annually</span>
</div>
</div>
<div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<span className="font-medium text-white">10k</span>
<div className="flex items-center gap-2">
<div className="text-right text-xs leading-tight text-gray-400">
                                    workflow executions<br/>
<span className="text-[10px] opacity-70">with unlimited steps</span>
</div>
<i className="h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="mb-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-base font-medium text-white shadow-lg shadow-purple-500/20 hover:brightness-110">Start free trial</button>
<p className="mb-4 text-xs text-center text-gray-500">No credit card required</p>
<div className="mb-6 flex items-center gap-2 text-sm text-white">
<i className="h-4 w-4 text-gray-400" data-lucide="cloud"></i> Hosted by n8n
                    </div>
<div className="space-y-3 text-sm text-gray-400 border-t border-white/10 pt-6">
<p className="font-medium text-white mb-2">Everything in Starter plan, plus:</p>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 3 shared projects</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 20 concurrent executions</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 7 days of insights</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 150 AI Workflow Builder credits</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Admin roles</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Global variables</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Workflow history</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Execution search</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-white/20">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">Business</h3>
<p className="mt-2 text-sm text-gray-400 h-10">For companies with &lt; 100 employees needing collaboration.</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">667€</span>
<span className="text-sm text-gray-400">/mo, billed annually</span>
</div>
</div>
<div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<span className="font-medium text-white">40k</span>
<div className="flex items-center gap-2">
<div className="text-right text-xs leading-tight text-gray-400">
                                    workflow executions<br/>
<span className="text-[10px] opacity-70">with unlimited steps</span>
</div>
<i className="h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="mb-10 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-base font-medium text-white shadow-lg shadow-blue-500/20 hover:brightness-110">Start free trial</button>
<div className="mb-6 flex items-center gap-2 text-sm text-white">
<i className="h-4 w-4 text-gray-400" data-lucide="server"></i> Self-hosted
                    </div>
<div className="space-y-3 text-sm text-gray-400 border-t border-white/10 pt-6">
<p className="font-medium text-white mb-2">Everything in Pro plan, plus:</p>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 6 shared projects</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> SSO, SAML and LDAP</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 30 days of insights</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> AI Workflow Builder coming soon</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Different environments</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Scaling options</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Version control using Git</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Forum support</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-white/20">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">Enterprise</h3>
<p className="mt-2 text-sm text-gray-400 h-10">For organisations with strict compliance and governance needs.</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">Contact us</span>
</div>
</div>
<div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-3 flex items-center gap-3">
<i className="h-5 w-5 text-gray-400" data-lucide="sliders-horizontal"></i>
<div className="text-xs leading-tight text-gray-400">
                            Custom number of<br/>
                            workflow executions
                        </div>
</div>
<button className="mb-10 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-blue-500 transition">Contact sales</button>
<div className="mb-6 flex items-center gap-2 text-sm text-white">
<i className="h-4 w-4 text-gray-400" data-lucide="cloud"></i> Hosted
                        <span className="text-gray-500 text-xs px-1">or</span>
<i className="h-4 w-4 text-gray-400" data-lucide="server"></i> Self-hosted
                    </div>
<div className="space-y-3 text-sm text-gray-400 border-t border-white/10 pt-6">
<p className="font-medium text-white mb-2">Everything in Business plan, plus:</p>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Unlimited shared projects</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 200+ concurrent executions</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 365 days of insights</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> 1000 AI Workflow credits</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> External secret store integration</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Log streaming</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Extended data retention</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Dedicated support with SLA</div>
<div className="flex gap-3"><i className="h-4 w-4 text-white" data-lucide="check"></i> Invoice billing</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-12">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-red-900/40 via-surface to-surface p-8 md:p-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold text-white">Pay for full executions, not for each step</h2>
<p className="mt-2 text-gray-400 text-base">Unlike other tools that charge per step or user, n8n lets you build freely and only pay when a workflow runs from start to finish.</p>
</div>
<a className="shrink-0 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-900/20 hover:brightness-110 flex items-center gap-2" href="#">
                    Read more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/3 pt-6">
<h2 className="text-4xl font-semibold tracking-tight text-white">Looking for<br/>something else?</h2>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-xl border border-white/10 bg-surface p-6">
<h3 className="text-lg font-medium text-gray-200">Start-up Plan</h3>
<p className="mt-2 text-sm text-gray-500">Under 20 employees? Check if you qualify for our Start-up Plan and get 50% off Business.</p>
<button className="mt-6 w-full rounded-md bg-white/5 py-2 text-sm font-medium text-white hover:bg-white/10 transition border border-white/5">Learn more</button>
</div>

<div className="rounded-xl border border-white/10 bg-surface p-6 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-4">
<i className="h-5 w-5 text-white" data-lucide="github"></i>
<span className="font-medium text-white">GitHub ★ 159,158</span>
</div>
<button className="w-full rounded-md bg-white/5 py-2 text-sm font-medium text-white hover:bg-white/10 transition border border-white/5">View docs</button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-16">
<div className="mx-auto max-w-7xl px-6 text-center">
<p className="mb-8 text-sm text-gray-500">The world's most popular workflow automation platform for technical teams including</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">

<h3 className="text-2xl font-bold font-serif italic text-white">wayfair</h3>
<h3 className="text-2xl font-bold tracking-widest text-white flex items-center gap-1"><span className="text-3xl">∞</span>onfleet</h3>
<h3 className="text-2xl font-bold font-sans text-white uppercase tracking-wider">Seat</h3>
<h3 className="text-2xl font-bold font-mono text-white">paddle</h3>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pt-12">
<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
<h2 className="text-4xl font-semibold tracking-tight text-white">What's included?</h2>
<div className="flex rounded-lg bg-surface p-1 border border-white/10">
<button className="flex items-center gap-2 rounded-md bg-accent_purple px-4 py-1.5 text-sm font-medium text-white shadow">
<i className="h-3 w-3" data-lucide="cloud"></i> Cloud
                </button>
<button className="flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white">
<i className="h-3 w-3" data-lucide="server"></i> Self-hosted
                </button>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="overflow-x-auto hide-scroll rounded-xl border border-white/10 bg-surface/50">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 border-b border-white/10 bg-surface/80 p-4 text-sm font-medium text-gray-400">
<div className="pl-4">Core features</div>
<div className="text-center text-white">Starter</div>
<div className="text-center text-white">Pro</div>
<div className="text-center text-white">Enterprise</div>
</div>

<div className="divide-y divide-white/5">

<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Leading editor UI</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>

<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300 underline decoration-dotted decoration-gray-600 underline-offset-4">All integrations (nodes)</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>

<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Streaming and bulk operations</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>

<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Workflow history - max days</div>
<div className="flex justify-center text-sm text-gray-400">1</div>
<div className="flex justify-center text-sm text-gray-400">5</div>
<div className="flex justify-center text-sm text-gray-400">365+</div>
</div>
</div>

<div className="grid grid-cols-4 border-y border-white/10 bg-surface/80 p-4 text-sm font-medium text-gray-400 mt-8">
<div className="pl-4 text-white">Developer tools</div>
<div className="text-center">Starter</div>
<div className="text-center">Pro</div>
<div className="text-center">Enterprise</div>
</div>

<div className="divide-y divide-white/5">
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Code steps in workflows (JS/Python)</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Control n8n via API</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Global variables</div>
<div className="flex justify-center"><div className="rounded-full bg-white/10 p-1"><i className="h-3 w-3 text-gray-400" data-lucide="x"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Environments (dev, staging, prod)</div>
<div className="flex justify-center"><div className="rounded-full bg-white/10 p-1"><i className="h-3 w-3 text-gray-400" data-lucide="x"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-white/10 p-1"><i className="h-3 w-3 text-gray-400" data-lucide="x"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
</div>

<div className="grid grid-cols-4 border-y border-white/10 bg-surface/80 p-4 text-sm font-medium text-gray-400 mt-8">
<div className="pl-4 text-white">Security</div>
<div className="text-center">Starter</div>
<div className="text-center">Pro</div>
<div className="text-center">Enterprise</div>
</div>
<div className="divide-y divide-white/5">
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">Encrypted secrets store</div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
<div className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition">
<div className="pl-4 text-sm text-gray-300">SSO SAML and LDAP</div>
<div className="flex justify-center"><div className="rounded-full bg-white/10 p-1"><i className="h-3 w-3 text-gray-400" data-lucide="x"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-white/10 p-1"><i className="h-3 w-3 text-gray-400" data-lucide="x"></i></div></div>
<div className="flex justify-center"><div className="rounded-full bg-green-500/20 p-1"><i className="h-3 w-3 text-green-500" data-lucide="check"></i></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 pb-24">
<div className="mb-12 flex items-center gap-3">
<div className="rounded-full border border-white/10 bg-surface px-3 py-1 text-sm font-medium text-gray-300">? FAQs</div>
</div>
<h2 className="mb-12 text-4xl lg:text-5xl font-semibold tracking-tight text-white/90">Frequently<br/><span className="text-gray-500">asked questions</span></h2>
<div className="divide-y divide-white/10 border-t border-white/10">

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">What's included in the n8n free trial?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">What are executions (and why are they more powerful than on other products)?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">How can I assess how many production executions I need?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">How will I see how many production executions I've used?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">Does the business plan include support?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>

<div className="group flex cursor-pointer items-center justify-between py-6 transition">
<span className="text-lg font-medium text-gray-200 group-hover:text-white">If I'm self-hosting, why would I pay based on execution usage?</span>
<i className="h-5 w-5 text-gray-500 group-hover:text-white" data-lucide="plus"></i>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center py-24">
<div className="absolute inset-0 bg-background/90"></div>
<div className="relative mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
<p className="mb-6 text-xl leading-relaxed text-gray-200">
<span className="font-semibold text-white">Thank you to the n8n community.</span> I did the beginners course and promptly took an automation WAY beyond my skill level.
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold">RT</div>
<div>
<div className="text-sm font-semibold text-white">Robin Tindall</div>
<div className="text-xs text-gray-400">@robtn</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
<p className="mb-6 text-xl leading-relaxed text-gray-200">
<span className="font-semibold text-white">n8n is a beast for automation,</span> self-hosting and low-code make it a dev's dream. If you're not automating yet, you're working too hard.
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">A</div>
<div>
<div className="text-sm font-semibold text-white">Anderoav</div>
<div className="text-xs text-gray-400">@Anderoav</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-background pt-24 pb-12 border-t border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-16">

<div className="col-span-2 lg:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<svg fill="none" height="24" viewbox="0 0 50 50" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0L0 12.5V37.5L25 50L50 37.5V12.5L25 0Z" fill="#ff6d5a"></path>
<path d="M25 12L12 18V32L25 38L38 32V18L25 12Z" fill="#0a0910"></path>
</svg>
<span className="text-lg font-semibold text-white">n8n</span>
</a>
<p className="text-xs text-gray-400 mb-6">Automate without limits</p>
<div className="flex gap-4 text-gray-400">
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="twitter"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="github"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="discord"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="linkedin"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="youtube"></i>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Popular integrations</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-primary" href="#">Google Sheets</a></li>
<li><a className="hover:text-primary" href="#">Telegram</a></li>
<li><a className="hover:text-primary" href="#">MySQL</a></li>
<li><a className="hover:text-primary" href="#">Slack</a></li>
<li><a className="hover:text-primary" href="#">Discord</a></li>
<li><a className="hover:text-primary underline" href="#">Show more</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Trending combinations</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-primary" href="#">HubSpot and Salesforce</a></li>
<li><a className="hover:text-primary" href="#">Twilio and WhatsApp</a></li>
<li><a className="hover:text-primary" href="#">GitHub and Jira</a></li>
<li><a className="hover:text-primary" href="#">Asana and Slack</a></li>
<li><a className="hover:text-primary" href="#">Asana and Salesforce</a></li>
<li><a className="hover:text-primary underline" href="#">Show more</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Top integration categories</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-primary" href="#">Communication</a></li>
<li><a className="hover:text-primary" href="#">Development</a></li>
<li><a className="hover:text-primary" href="#">Cybersecurity</a></li>
<li><a className="hover:text-primary" href="#">AI</a></li>
<li><a className="hover:text-primary" href="#">Data &amp; Storage</a></li>
<li><a className="hover:text-primary underline" href="#">Show more</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-primary flex items-center gap-2" href="#">Careers <span className="bg-white text-black text-[10px] font-bold px-1 rounded">Hiring</span></a></li>
<li><a className="hover:text-primary" href="#">Contact</a></li>
<li><a className="hover:text-primary" href="#">Merch</a></li>
<li><a className="hover:text-primary" href="#">Press</a></li>
<li><a className="hover:text-primary" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
<div className="flex gap-4">
<a className="hover:text-white" href="#">Imprint</a>
<span>|</span>
<a className="hover:text-white" href="#">Security</a>
<span>|</span>
<a className="hover:text-white" href="#">Privacy</a>
<span>|</span>
<a className="hover:text-white" href="#">Report a vulnerability</a>
</div>
<div className="mt-4 md:mt-0">
                    © 2025 n8n | All rights reserved.
                </div>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-6 z-50">
<button className="h-12 w-12 rounded-full bg-accent_purple flex items-center justify-center text-white shadow-lg hover:brightness-110">
<i className="h-6 w-6" data-lucide="message-circle"></i>
</button>
</div>


    </>
  );
}
