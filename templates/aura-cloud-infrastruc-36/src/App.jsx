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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': 'lucide'
            }
        });
    
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
      

<nav className="fixed top-0 z-50 w-full border-b backdrop-blur-xl border-black/5 bg-gray-50/70">
<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<a className="flex items-center gap-2 transition-opacity hover:opacity-80 text-black" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-black text-gray-50">
<i className="h-4 w-4" data-lucide="command"></i>
</div>
<span className="text-sm font-semibold tracking-tight">AURA</span>
</a>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-medium transition-colors text-gray-600 hover:text-black" href="#features">Platform</a>
<a className="text-xs font-medium transition-colors text-gray-600 hover:text-black" href="#integration">Integration</a>
<a className="text-xs font-medium transition-colors text-gray-600 hover:text-black" href="#customers">Customers</a>
<a className="text-xs font-medium transition-colors text-gray-600 hover:text-black" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-xs font-medium transition-colors sm:block text-gray-600 hover:text-black" href="#">Log in</a>
<a className="group relative flex h-8 items-center justify-center rounded-full px-4 text-xs font-medium transition-all bg-black text-gray-50 hover:bg-gray-800" href="#">
<span>Start Building</span>
<i className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden border-b pt-32 pb-24 md:pt-48 md:pb-32 border-black/5">
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="glow-point -top-24 left-1/2 -translate-x-1/2"></div>
<div className="relative mx-auto max-w-6xl px-6 text-center">

<div className="mb-8 flex justify-center fade-in">
<a className="group flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur-sm transition-colors border-black/10 bg-black/5 text-gray-700 hover:border-black/20 hover:bg-black/10" href="#">
<span className="rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-700">New</span>
<span className="font-light">Aura Edge Functions 2.0 released</span>
<i className="h-3 w-3 text-neutral-500 transition-transform group-hover:translate-x-0.5" data-lucide="chevron-right"></i>
</a>
</div>
<h1 className="bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-medium tracking-tight bg-gradient-to-b from-red-400 to-red-600 pb-2">
    Deploy instantly. <br className=""/>
                Scale infinitely.
</h1>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group flex h-10 w-full items-center justify-center gap-2 rounded-full border px-6 text-sm font-medium transition-colors sm:w-auto border-gray-200 bg-gray-100 text-black hover:border-gray-300 hover:bg-gray-200">
<i className="h-4 w-4 text-neutral-400" data-lucide="terminal"></i>
<span>Read Documentation</span>
</button><button className="flex transition-all sm:w-auto hover:bg-gray-800 text-sm font-medium text-gray-50 bg-black w-full h-10 rounded-full pr-6 pl-6 items-center justify-center">
                    Start Deploying
                </button>
</div><p className="leading-relaxed sm:text-lg text-base font-light text-gray-600 max-w-xl mt-6 mr-auto ml-auto">
                The global infrastructure platform designed for the next generation of high-performance applications. Zero config, edge-first, reliable.
            </p>

<div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-xl border shadow-2xl backdrop-blur-sm border-black/10 bg-gray-100/50">
<div className="flex items-center gap-2 border-b px-4 py-3 border-black/5 bg-black/5">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="h-3 w-3 rounded-full bg-pink-500/20 border border-pink-500/30"></div>
<div className="h-3 w-3 rounded-full bg-purple-500/20 border border-purple-500/30"></div>
</div>
<div className="mx-auto text-xs font-medium text-gray-500">deploy.sh</div>
</div>
<div className="p-6 text-left font-mono text-xs sm:text-sm">
<div className="flex gap-2">
<span className="text-blue-600">➜</span>
<span className="text-gray-600">~/project</span>
<span className="text-black">npx aura deploy --prod</span>
</div>
<div className="mt-2 text-gray-500">Initializing build environment...</div>
<div className="text-gray-500">Analyzing project structure...</div>
<div className="text-gray-500">Optimizing assets...</div>
<div className="mt-2 flex gap-2">
<span className="text-purple-600">✓</span>
<span className="text-black">Build completed in 420ms</span>
</div>
<div className="flex gap-2">
<span className="text-purple-600">✓</span>
<span className="text-black">Deployed to <a className="underline underline-offset-4 decoration-gray-300 hover:text-blue-600" href="#">aura.app/prod/v2</a></span>
</div>
<div className="mt-2 flex gap-2 animate-pulse">
<span className="text-blue-600">➜</span>
<span className="text-gray-600">~/project</span>
<span className="h-5 w-2 bg-gray-400"></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b py-12 border-black/5">
<div className="mx-auto max-w-6xl px-6">
<p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-gray-500">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">

<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-black">
<i className="h-5 w-5 fill-white" data-lucide="triangle"></i> ACME
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-black">
<i className="h-5 w-5 fill-white" data-lucide="box"></i> BLOCKS
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-black">
<i className="h-5 w-5 fill-white" data-lucide="hexagon"></i> ORBIT
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-black">
<i className="h-5 w-5 fill-white" data-lucide="circle"></i> SPHERE
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-black">
<i className="h-5 w-5 fill-white" data-lucide="zap"></i> VOLT
                </div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight md:text-5xl text-black">Engineered for speed.</h2>
<p className="mt-4 max-w-2xl text-lg text-gray-600">Aura provides the primitives you need to build scalable applications without the operational overhead.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border p-8 transition-colors border-black/10 bg-gray-100/30 hover:border-black/20 hover:bg-gray-100/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60"></div>
<div className="relative z-10 flex h-full flex-col justify-between">
<div className="mb-8">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border p-2.5 border-black/10 bg-black/5">
<i className="h-5 w-5 text-cyan-400" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-black">Global Edge Network</h3>
<p className="mt-2 text-sm leading-relaxed text-gray-600">Deploy your code to 35+ regions worldwide in seconds. Low latency by default, automatic failover included.</p>
</div>
<div className="relative h-48 w-full overflow-hidden rounded-lg border border-black/10 bg-white/50">

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="grid grid-cols-6 gap-2">
<div className="h-1 w-1 rounded-full animate-pulse bg-black"></div>
<div className="h-1 w-1 rounded-full bg-black"></div>
<div className="h-1 w-1 rounded-full animate-pulse delay-75 bg-black"></div>
<div className="h-1 w-1 rounded-full bg-black"></div>
<div className="h-1 w-1 rounded-full animate-pulse delay-150 bg-black"></div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/30 bg-blue-500/10 blur-xl"></div>
</div>
</div>
</div>

<div className="col-span-1 rounded-2xl border p-8 transition-colors border-black/10 bg-gray-100/30 hover:border-black/20 hover:bg-gray-100/50">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border p-2.5 border-black/10 bg-black/5">
<i className="h-5 w-5 text-purple-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-black">Enterprise Security</h3>
<p className="mt-2 text-sm leading-relaxed text-gray-600">DDoS protection, SOC2 compliance, and automated SSL for every domain.</p>
</div>

<div className="col-span-1 rounded-2xl border p-8 transition-colors border-black/10 bg-gray-100/30 hover:border-black/20 hover:bg-gray-100/50">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border p-2.5 border-black/10 bg-black/5">
<i className="h-5 w-5 text-emerald-400" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-black">Serverless Compute</h3>
<p className="mt-2 text-sm leading-relaxed text-gray-600">Spin up isolated V8 environments for each request. No cold starts, ever.</p>
</div>

<div className="col-span-1 md:col-span-2 rounded-2xl border p-8 transition-colors border-black/10 bg-gray-100/30 hover:border-black/20 hover:bg-gray-100/50">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="max-w-sm">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border p-2.5 border-black/10 bg-black/5">
<i className="h-5 w-5 text-orange-400" data-lucide="git-branch"></i>
</div>
<h3 className="text-lg font-medium text-black">Preview Deployments</h3>
<p className="mt-2 text-sm leading-relaxed text-gray-600">Every pull request gets its own live URL. Collaborate with your team and get feedback faster than ever before.</p>
</div>
<div className="flex-1 rounded-lg border p-4 font-mono text-xs border-black/10 bg-white/40 text-gray-600">
<div className="flex items-center gap-2 border-b pb-2 mb-2 border-black/5">
<i className="h-3 w-3" data-lucide="github"></i>
<span>aura/frontend</span>
<span className="ml-auto text-gray-400">Now</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-black">PR #342: Update dashboard</span>
<span className="text-pink-500">Building</span>
</div>
<div className="flex items-center justify-between">
<span className="text-black">PR #341: Fix mobile nav</span>
<span className="text-purple-500">Ready</span>
</div>
<div className="flex items-center justify-between opacity-50">
<span className="text-black">PR #340: Analytics integ...</span>
<span className="text-purple-500">Ready</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y py-24 border-black/5 bg-gray-100/20">
<div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight md:text-4xl text-black">
                    Real-time observability. <br/>
<span className="text-gray-500">Built into the core.</span>
</h2>
<p className="mt-4 text-lg text-gray-600">
                    Gain deep insights into your application's performance. Monitor requests, latency, and errors with granular precision.
                </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-cyan-500" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-700">Millisecond-level logs retention</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-cyan-500" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-700">Custom alert policies and webhooks</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-cyan-500" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-700">Distributed tracing across microservices</span>
</li>
</ul>
<div className="mt-8">
<a className="text-sm font-medium flex items-center gap-1 group text-black hover:text-blue-600" href="#">
                        Explore Analytics
                        <i className="h-3 w-3 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative">

<div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50 blur-lg"></div>
<div className="relative overflow-hidden rounded-xl border p-6 shadow-2xl border-black/10 bg-gray-50">
<div className="mb-6 flex items-center justify-between">
<h4 className="text-sm font-medium text-black">Requests / Second</h4>
<div className="flex gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
</div>
</div>

<div className="flex h-48 items-end gap-1.5 sm:gap-2">

<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '30%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '45%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '35%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '60%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '55%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '75%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '65%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]" style={{height: '90%'}}></div> 
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '80%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '70%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '60%'}}></div>
<div className="w-full rounded-t-sm hover:bg-blue-500/50 transition-all duration-500 bg-gray-200/50" style={{height: '40%'}}></div>
</div>
<div className="mt-4 flex items-center justify-between border-t pt-4 text-xs text-gray-500 border-black/5">
<span>10:00 AM</span>
<span>11:00 AM</span>
<span>12:00 PM</span>
<span>1:00 PM</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="flex flex-col justify-between rounded-xl p-6 text-sm bg-gray-100/20">
<p className="leading-relaxed text-gray-700">"Aura changed how we deploy. The speed is incomparable, and the developer experience is second to none. It just works."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-300 to-gray-400"></div>
<div>
<div className="font-medium text-black">Sarah Chen</div>
<div className="text-xs text-gray-500">CTO at TechFlow</div>
</div>
</div>
</div>
<div className="flex flex-col justify-between rounded-xl p-6 text-sm bg-gray-100/20">
<p className="leading-relaxed text-gray-700">"We migrated from AWS and reduced our bill by 40% while improving latency for our Asian market by 200ms."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-300 to-gray-400"></div>
<div>
<div className="font-medium text-black">Mark Davis</div>
<div className="text-xs text-gray-500">Lead Engineer at Base</div>
</div>
</div>
</div>
<div className="flex flex-col justify-between rounded-xl p-6 text-sm bg-gray-100/20">
<p className="leading-relaxed text-gray-700">"The edge functions are incredibly fast. We moved our entire personalization logic to the edge with zero friction."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-300 to-gray-400"></div>
<div>
<div className="font-medium text-black">Elena Rodriguez</div>
<div className="text-xs text-gray-500">VP Eng at Streamline</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-t py-24 border-black/5">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200/30 via-gray-50 to-gray-50"></div>
<div className="relative mx-auto max-w-2xl px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl text-black">
                Ready to build the future?
            </h2>
<p className="mt-4 text-gray-600">Join 10,000+ developers deploying on Aura today.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="h-10 w-full rounded-full px-8 text-sm font-medium transition-all sm:w-auto bg-black text-gray-50 hover:bg-gray-800">
                    Get Started for Free
                </button>
<button className="h-10 w-full rounded-full text-sm font-medium transition-colors sm:w-auto text-gray-600 hover:text-black">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t py-12 border-black/5 bg-gray-50">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-5">
<div className="col-span-2 md:col-span-2">
<a className="mb-4 flex items-center gap-2" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 text-black">
<i className="h-4 w-4" data-lucide="command"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-black">AURA</span>
</a>
<p className="mb-6 max-w-xs text-sm text-gray-500">
                        The modern infrastructure platform for the modern web. Built for speed, scale, and reliability.
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-black" href="#"><i className="h-4 w-4" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-black" href="#"><i className="h-4 w-4" data-lucide="github"></i></a>
<a className="text-gray-500 hover:text-black" href="#"><i className="h-4 w-4" data-lucide="slack"></i></a>
</div>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="transition-colors hover:text-black" href="#">Infrastructure</a></li>
<li><a className="transition-colors hover:text-black" href="#">Edge Functions</a></li>
<li><a className="transition-colors hover:text-black" href="#">Storage</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Resources</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="transition-colors hover:text-black" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-black" href="#">API Reference</a></li>
<li><a className="transition-colors hover:text-black" href="#">Guides</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="transition-colors hover:text-black" href="#">About</a></li>
<li><a className="transition-colors hover:text-black" href="#">Blog</a></li>
<li><a className="transition-colors hover:text-black" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 md:flex-row border-black/5">
<div className="text-xs text-gray-400">
                    © 2023 Aura Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<span className="flex items-center gap-2 text-xs text-gray-500">
<span className="h-2 w-2 rounded-full bg-purple-500"></span>
                        All systems normal
                    </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
