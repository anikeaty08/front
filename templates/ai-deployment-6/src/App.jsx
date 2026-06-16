import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-white" href="#">NEXUS</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#features">Features</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#method">Method</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Changelog</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs md:text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get started</a>
</div>
</div>
</header>
<main className="flex-grow pt-24 md:pt-32">

<section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300 mb-8 hover:bg-zinc-800 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Nexus 2.0 is now live
                <iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 max-w-4xl mb-6">
                Ship code faster.<br/>Break nothing.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                Automate code reviews, detect vulnerabilities before they merge, and orchestrate zero-downtime deployments with context-aware AI. Built for elite engineering teams.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto text-sm font-medium bg-white text-zinc-950 px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                    Start building for free
                </a>
<a className="w-full sm:w-auto text-sm font-medium bg-transparent border border-zinc-800 text-white px-6 py-3 rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                    Book a demo
                </a>
</div>

<div className="mt-20 w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-950/50 backdrop-blur-xl overflow-hidden glow-effect relative">

<div className="h-10 border-b border-zinc-800/80 bg-zinc-900/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="ml-4 text-xs text-zinc-500 font-mono">user@nexus: ~/api-core</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs md:text-sm text-left text-zinc-400 relative">
<div className="col-span-1 md:col-span-2 space-y-2">
<div className="text-indigo-400">❯ nexus analyze pr-4092</div>
<div className="text-zinc-500">Analyzing dependencies and execution paths...</div>
<div>
<span className="text-emerald-400">✓</span> Type checks passed (42ms)<br/>
<span className="text-emerald-400">✓</span> Unit tests passing (1.2s)<br/>
<span className="text-rose-400">✗</span> Memory leak detected in <span className="text-zinc-200">worker.ts:142</span>
</div>
<div className="p-4 mt-2 border border-rose-900/50 bg-rose-950/20 rounded-lg text-zinc-300">
<span className="text-rose-400 font-semibold">AI Suggestion:</span> Unclosed database connection in try/catch block. Add <code className="bg-zinc-900 px-1 rounded text-rose-300">db.close()</code> to finally clause.
                        </div>
</div>
<div className="col-span-1 border-l border-zinc-800/50 pl-6 hidden md:block space-y-4">
<div className="text-xs tracking-tight text-zinc-500 uppercase">Deployment Status</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-zinc-200">US-East-1 (Active)</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-zinc-200">EU-Central (Active)</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
<span className="text-zinc-200">AP-South-1 (Deploying)</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-sm font-medium text-zinc-500 tracking-tight text-center md:text-left">
                    Trusted by innovative engineering teams worldwide
                </div>
<div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-50 grayscale">

<span className="text-xl font-semibold tracking-tighter">ACME</span>
<span className="text-xl font-semibold tracking-tighter">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter">INITRO</span>
<span className="text-xl font-semibold tracking-tighter">LUMINA</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Engineering velocity, uncompromised.</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto">Stop choosing between shipping fast and shipping securely. Nexus gives you the infrastructure to do both.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/40 to-transparent hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Ship 70% faster</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Automate tedious PR reviews. Our AI instantly catches logical errors and anti-patterns, reducing cycle time from days to minutes.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/40 to-transparent hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Zero-day prevention</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deep static analysis runs on every commit. Detect vulnerabilities, secrets, and compliance issues before they reach production.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/40 to-transparent hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Global orchestration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deploy across AWS, GCP, and Azure simultaneously. Automatic rollbacks trigger instantly if error rates spike post-deployment.</p>
</div>
</div>
</section>

<section className="border-t border-zinc-900/50 bg-zinc-950/30 py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-300 mb-6">
<iconify-icon icon="solar:brain-linear"></iconify-icon>
                            Context-Aware AI
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Code reviews that actually understand your architecture.</h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                            Unlike traditional linters that use dumb rules, Nexus indexes your entire codebase. When you open a PR, it understands how a change in a utility function impacts a microservice three layers deep.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Cross-repository dependency analysis.
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Automatic generation of unit tests for uncovered branches.
                            </li>
</ul>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl">
<div className="rounded-xl border border-zinc-800/80 bg-zinc-950 overflow-hidden">
<div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
<span>auth.controller.ts</span>
<span className="text-zinc-600">Review in progress</span>
</div>
<div className="p-4 font-mono text-xs md:text-sm text-zinc-300 overflow-x-auto">
<div className="opacity-50 line-through text-rose-300 bg-rose-950/20 px-2 -mx-2">- const user = await db.query('SELECT * FROM users WHERE id = ' + req.body.id);</div>
<div className="text-emerald-300 bg-emerald-950/20 px-2 -mx-2 py-1 my-1">+ const user = await db.query('SELECT * FROM users WHERE id = $1', [req.body.id]);</div>
<div className="mt-4 flex gap-3 border-t border-zinc-800 pt-3">
<iconify-icon className="text-indigo-400 text-base" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-zinc-400 text-xs font-sans"><strong>Nexus AI:</strong> Prevented SQL Injection vulnerability. Replaced string concatenation with parameterized query.</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl">
<div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-6 flex flex-col gap-4">
<div className="flex justify-between items-end mb-4">
<div>
<div className="text-xs text-zinc-500 mb-1 tracking-tight uppercase">Latency (p99)</div>
<div className="text-2xl font-medium tracking-tight text-white">42ms</div>
</div>
<div className="flex gap-1 items-end h-12">

<div className="w-3 bg-zinc-800 rounded-t h-4"></div>
<div className="w-3 bg-zinc-800 rounded-t h-5"></div>
<div className="w-3 bg-zinc-800 rounded-t h-4"></div>
<div className="w-3 bg-zinc-800 rounded-t h-6"></div>
<div className="w-3 bg-zinc-800 rounded-t h-5"></div>
<div className="w-3 bg-rose-500 rounded-t h-12 animate-pulse"></div>
</div>
</div>
<div className="p-3 rounded-lg border border-rose-900/50 bg-rose-950/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-rose-500" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Latency spike detected</span>
</div>
<span className="text-xs text-zinc-500">Just now</span>
</div>
<div className="p-3 rounded-lg border border-emerald-900/50 bg-emerald-950/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Auto-rollback initiated</span>
</div>
<span className="text-xs text-zinc-500">Success</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 lg:pl-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs text-emerald-300 mb-6">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                            Safety Net
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Deploy on Fridays.<br />Sleep soundly.</br></h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                            Nexus integrates with your observability stack. If a deployment causes error rates to spike or latency to degrade, we automatically halt the rollout and revert to the last stable version in milliseconds.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900/50" id="method">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Three steps to deployment zen.</h2>
<p className="text-base text-zinc-400">Get integrated in less than 5 minutes. No complex configuration required.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-semibold mb-6">1</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Connect Repository</h3>
<p className="text-sm text-zinc-400">Install our GitHub or GitLab app. We instantly index your codebase securely.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-indigo-500/50 text-indigo-400 flex items-center justify-center text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">2</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Configure Thresholds</h3>
<p className="text-sm text-zinc-400">Set acceptable risk levels and connect your monitoring tools like Datadog or Sentry.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-semibold mb-6">3</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Push to Main</h3>
<p className="text-sm text-zinc-400">Nexus takes over. We review, test, deploy, and monitor automatically.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Simple, transparent pricing.</h2>
<p className="text-base text-zinc-400">Start for free, scale when you need to.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl border border-zinc-800/80 bg-zinc-950 flex flex-col">
<h3 className="text-lg font-medium tracking-tight mb-2">Starter</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tighter">$0</span> <span className="text-sm text-zinc-500">/mo</span></div>
<p className="text-sm text-zinc-400 mb-8 flex-grow">Perfect for hobbyists and small open-source projects.</p>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Up to 3 team members</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 50 AI reviews per month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic CI/CD integration</li>
</ul>
<a className="w-full text-center text-sm font-medium border border-zinc-800 text-white px-4 py-2.5 rounded-full hover:bg-zinc-900 transition-colors" href="#">Get Started</a>
</div>

<div className="p-8 rounded-3xl border border-indigo-500/50 bg-zinc-900/30 relative flex flex-col shadow-2xl shadow-indigo-500/5">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full tracking-tight">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Pro</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tighter">$49</span> <span className="text-sm text-zinc-500">/user/mo</span></div>
<p className="text-sm text-zinc-400 mb-8 flex-grow">For fast-moving startups and professional teams.</p>
<ul className="space-y-4 mb-8 text-sm text-zinc-100">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI reviews</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Automated rollbacks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Datadog/Sentry integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
</ul>
<a className="w-full text-center text-sm font-medium bg-white text-zinc-950 px-4 py-2.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">Start Free Trial</a>
</div>

<div className="p-8 rounded-3xl border border-zinc-800/80 bg-zinc-950 flex flex-col">
<h3 className="text-lg font-medium tracking-tight mb-2">Enterprise</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tighter">Custom</span></div>
<p className="text-sm text-zinc-400 mb-8 flex-grow">For large organizations with complex compliance needs.</p>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> SOC2 / HIPAA compliance</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Self-hosted runners</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Custom AI model training</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Dedicated success manager</li>
</ul>
<a className="w-full text-center text-sm font-medium border border-zinc-800 text-white px-4 py-2.5 rounded-full hover:bg-zinc-900 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-zinc-900/50">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<div className="border border-zinc-800/60 rounded-xl p-6 bg-zinc-900/20">
<h4 className="text-base font-medium tracking-tight mb-2">Does Nexus store my source code?</h4>
<p className="text-sm text-zinc-400">No. We process your code in ephemeral containers that are immediately destroyed after analysis. We only store metadata and vulnerability signatures required for reporting.</p>
</div>
<div className="border border-zinc-800/60 rounded-xl p-6 bg-zinc-900/20">
<h4 className="text-base font-medium tracking-tight mb-2">How accurate is the AI reviewer?</h4>
<p className="text-sm text-zinc-400">Our models are trained specifically on high-quality open-source and enterprise repositories. It currently catches 87% of logic bugs missed by standard linters, with a false positive rate of under 4%.</p>
</div>
<div className="border border-zinc-800/60 rounded-xl p-6 bg-zinc-900/20">
<h4 className="text-base font-medium tracking-tight mb-2">Can I use it with my existing CI/CD pipeline?</h4>
<p className="text-sm text-zinc-400">Absolutely. Nexus integrates seamlessly with GitHub Actions, CircleCI, Jenkins, and others. You can use us just for AI reviews, or adopt our full deployment orchestration.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 mb-12">
<div className="rounded-3xl border border-zinc-800 bg-gradient-to-t from-zinc-900/80 to-zinc-950 p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 relative z-10">Ready to accelerate your workflow?</h2>
<p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto relative z-10">Join thousands of engineers shipping better code, faster. Setup takes less than 5 minutes.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<a className="text-sm font-medium bg-white text-zinc-950 px-8 py-3 rounded-full hover:bg-zinc-200 transition-colors" href="#">Start for free</a>
<a className="text-sm font-medium border border-zinc-700 bg-zinc-800/50 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-colors" href="#">Read the docs</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-white block mb-4" href="#">NEXUS</a>
<p className="text-xs text-zinc-500 max-w-xs">
                    Building the intelligent infrastructure for modern engineering teams. Ship faster, break nothing.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight text-white uppercase mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">AI Code Review</a></li>
<li><a className="hover:text-white transition-colors" href="#">Auto-Rollbacks</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight text-white uppercase mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight text-white uppercase mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 Nexus Systems Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<div className="flex items-center gap-4 ml-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
