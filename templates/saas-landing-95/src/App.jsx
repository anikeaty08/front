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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm text-xs tracking-tighter">NX</div>
                    NEXUS
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#changelog">Changelog</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="hidden sm:block hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black hover:bg-zinc-200 transition-colors px-4 py-1.5 rounded-full font-medium" href="#">Sign up</a>
</div>
</div>
</header>
<main className="relative z-10 pt-32">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center pb-24 lg:pb-32">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-white mb-8 hover:bg-white/[0.05] transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Announcing Nexus v2.0
                <iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl leading-[1.1] mb-6">
                Build software at the speed of thought.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                A purpose-built tool for modern product teams. Streamline your workflow, align your organization, and ship faster with our intuitive platform.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2" href="#">
                    Start building for free
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/[0.03] text-white border border-white/[0.05] hover:bg-white/[0.08] transition-colors px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-zinc-400" icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch demo
                </a>
</div>

<div className="mt-20 w-full relative">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-2xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent rounded-2xl p-[1px]">
<div className="w-full h-full bg-black rounded-2xl"></div>
</div>
<div className="relative bg-zinc-950 border border-white/[0.05] rounded-2xl overflow-hidden shadow-2xl shadow-black h-[400px] md:h-[600px] flex flex-col">

<div className="h-10 border-b border-white/[0.05] bg-white/[0.01] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]"></div>
</div>
</div>

<div className="flex-1 flex p-4 gap-4">
<div className="w-48 hidden md:flex flex-col gap-2 border-r border-white/[0.05] pr-4">
<div className="h-6 w-full bg-white/[0.05] rounded-md mb-4"></div>
<div className="h-4 w-3/4 bg-white/[0.02] rounded-sm"></div>
<div className="h-4 w-1/2 bg-white/[0.02] rounded-sm"></div>
<div className="h-4 w-2/3 bg-white/[0.02] rounded-sm"></div>
</div>
<div className="flex-1 flex flex-col gap-4">
<div className="flex justify-between items-center pb-4 border-b border-white/[0.05]">
<div className="h-8 w-48 bg-white/[0.05] rounded-md"></div>
<div className="h-8 w-24 bg-white/[0.1] rounded-md"></div>
</div>
<div className="flex-1 flex gap-4">
<div className="flex-1 bg-white/[0.02] border border-white/[0.03] rounded-lg p-4 flex flex-col gap-3">
<div className="h-4 w-1/3 bg-white/[0.05] rounded-sm"></div>
<div className="h-20 w-full bg-white/[0.02] rounded-md"></div>
<div className="h-20 w-full bg-white/[0.02] rounded-md"></div>
</div>
<div className="flex-1 bg-white/[0.02] border border-white/[0.03] rounded-lg p-4 flex flex-col gap-3">
<div className="h-4 w-1/4 bg-white/[0.05] rounded-sm"></div>
<div className="h-32 w-full bg-white/[0.02] rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 border-y border-white/[0.02] flex flex-col items-center">
<p className="text-sm text-zinc-500 mb-8 font-medium">Powering next-generation companies</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:globus-linear" width="20"></iconify-icon> ACME CORP</div>
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:box-linear" width="20"></iconify-icon> GLOBEX</div>
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:layers-linear" width="20"></iconify-icon> SOYUZ</div>
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:ghost-linear" width="20"></iconify-icon> INITECH</div>
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:planet-linear" width="20"></iconify-icon> UMBRELLA</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Everything you need to scale</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto">We've thought of everything so you can focus on what matters: building a great product.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Lightning Fast</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Optimized for speed. Experience near-instant load times and interactions designed to keep you in the flow.</p>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Bank-grade encryption, SOC2 compliance, and granular role-based access control built in by default.</p>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Advanced Analytics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Gain deep insights into your team's performance with customizable dashboards and real-time reporting.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-24" id="methodology">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Engineered for precision</h2>
<p className="text-base text-zinc-400 max-w-xl">Discover a suite of tools designed to handle complex workflows without the clutter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4">

<div className="md:col-span-2 md:row-span-2 bg-zinc-950 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="mb-auto pb-12">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Automated Workflows</h3>
<p className="text-sm text-zinc-400">Set up triggers and actions to put your repetitive tasks on autopilot.</p>
</div>

<div className="w-full h-48 bg-black rounded-xl border border-white/[0.05] p-4 flex flex-col gap-3 relative">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center"><iconify-icon icon="solar:git-commit-linear" width="16"></iconify-icon></div>
<div className="h-px bg-white/[0.1] flex-1"></div>
<div className="w-8 h-8 rounded-full bg-white/[0.1] flex items-center justify-center text-white"><iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon></div>
</div>
<div className="flex items-center gap-3 pl-4">
<div className="w-px h-8 bg-white/[0.1] ml-3"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center"><iconify-icon icon="solar:server-square-linear" width="16"></iconify-icon></div>
<div className="h-px bg-white/[0.1] flex-1"></div>
<div className="h-8 px-3 rounded-md bg-white/[0.03] border border-white/[0.05] flex items-center text-xs">Deploy</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-zinc-950 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-2xl rounded-full"></div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Real-time Collaboration</h3>
<p className="text-sm text-zinc-400 mb-6">Work together in exactly the same context, instantly.</p>
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs text-white">A</div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center text-xs text-white">B</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-black flex items-center justify-center text-xs text-white">C</div>
<div className="w-8 h-8 rounded-full bg-white/[0.05] border-2 border-black flex items-center justify-center text-xs text-zinc-400">+5</div>
</div>
</div>

<div className="md:col-span-2 bg-zinc-950 border border-white/[0.05] rounded-3xl p-8">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Global Edge Network</h3>
<p className="text-sm text-zinc-400 mb-6">Deploy to 35+ regions worldwide with a single click.</p>
<div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden flex">
<div className="w-1/3 bg-white/[0.2]"></div>
<div className="w-1/4 bg-white/[0.1]"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-500">
<span>US-East</span>
<span>EU-West</span>
<span>AP-South</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 border-t border-white/[0.02]" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Simple, transparent pricing</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8">Start for free, then upgrade as you grow. No hidden fees.</p>

<div className="inline-flex items-center bg-white/[0.03] border border-white/[0.05] rounded-full p-1">
<button className="px-4 py-1.5 rounded-full bg-white/[0.1] text-white text-sm font-medium shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-zinc-400 text-sm font-medium hover:text-white transition-colors">Annually <span className="text-xs text-white/[0.4] ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-black border border-white/[0.05] rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Hobby</h3>
<p className="text-sm text-zinc-500 mb-6 h-10">Perfect for side projects and learning.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">$0</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<a className="w-full bg-white/[0.03] border border-white/[0.05] text-white hover:bg-white/[0.08] transition-colors py-2.5 rounded-lg font-medium text-sm flex items-center justify-center mb-8" href="#">Start for free</a>
<div className="flex flex-col gap-3 mt-auto">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Up to 3 projects
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Community support
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> 1GB storage
                        </div>
</div>
</div>

<div className="bg-zinc-950 border border-white/[0.15] rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(255,255,255,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-medium px-3 py-1 rounded-full tracking-tight">Most Popular</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Pro</h3>
<p className="text-sm text-zinc-500 mb-6 h-10">For professional developers and small teams.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">$29</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<a className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-2.5 rounded-lg font-medium text-sm flex items-center justify-center mb-8" href="#">Subscribe to Pro</a>
<div className="flex flex-col gap-3 mt-auto">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon> Unlimited projects
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon> Priority email support
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon> 50GB storage
                        </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon> Custom domains
                        </div>
</div>
</div>

<div className="bg-black border border-white/[0.05] rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Enterprise</h3>
<p className="text-sm text-zinc-500 mb-6 h-10">Custom solutions for scaling organizations.</p>
<div className="mb-6 flex items-end h-[44px]">
<span className="text-2xl font-medium tracking-tight text-white">Custom</span>
</div>
<a className="w-full bg-white/[0.03] border border-white/[0.05] text-white hover:bg-white/[0.08] transition-colors py-2.5 rounded-lg font-medium text-sm flex items-center justify-center mb-8" href="#">Contact sales</a>
<div className="flex flex-col gap-3 mt-auto">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Everything in Pro
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> SSO &amp; SAML
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Dedicated success manager
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear" width="16"></iconify-icon> 99.99% Uptime SLA
                        </div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/[0.02]">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8 text-center">Frequently asked questions</h2>
<div className="flex flex-col divide-y divide-white/[0.05]">
<details className="group py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white outline-none">
<span>How does the free trial work?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pr-8">You can try our Pro plan free for 14 days. No credit card is required to start. After 14 days, you will be automatically downgraded to the Hobby plan unless you choose to subscribe.</p>
</details>
<details className="group py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white outline-none">
<span>Can I change plans later?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pr-8">Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically to your next billing cycle.</p>
</details>
<details className="group py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white outline-none">
<span>What payment methods do you accept?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pr-8">We accept all major credit cards including Visa, Mastercard, and American Express. We use Stripe for secure payment processing. For Enterprise plans, we also support invoicing and wire transfers.</p>
</details>
<details className="group py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white outline-none">
<span>Do you offer discounts for non-profits?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pr-8">Yes, we offer a 50% discount for qualified non-profit organizations and open-source projects. Please contact our support team with details about your organization to apply.</p>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative">
<div className="absolute inset-0 bg-white/[0.02] border-y border-white/[0.05] -z-10"></div>
<div className="flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to transform your workflow?</h2>
<p className="text-base text-zinc-400 mb-8 max-w-xl">Join thousands of teams already building the future with Nexus.</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2" href="#">
                        Get started for free
                    </a>
<a className="w-full sm:w-auto bg-transparent text-white hover:text-zinc-300 transition-colors px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center" href="#">
                        Talk to sales
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 md:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm text-xs tracking-tighter">NX</div>
                        NEXUS
                    </a>
<p className="text-xs text-zinc-500 max-w-xs mb-6">
                        Designed for the builders. We create tools that help you craft exceptional digital experiences without the friction.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:figma-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] text-xs text-zinc-600">
<p>© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
