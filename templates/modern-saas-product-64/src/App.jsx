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
      

<header className="fixed top-0 left-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-semibold">M</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">MOCKUP</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Product</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Resources</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-500 hover:text-slate-900" href="#">Log in</a>
<a className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors" href="#">Get Started</a>
</div>
</div>
</header>
<main className="w-full relative">

<section className="pt-32 pb-24 px-6 md:pt-48 md:pb-32 border-b border-slate-100">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-600">New feature released v2.0</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                    Build distinct web <br className="hidden md:block"/>
<span className="text-slate-400">experiences faster.</span>
</h1>

<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Orchestrate your content and creative workflows in one place. Designed for teams that ship fast and iterate often.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                        Start Building
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        View Demo
                    </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-slate-50 border border-slate-200 rounded-xl aspect-[16/9] md:aspect-[21/9] flex items-center justify-center overflow-hidden">
<div className="grid grid-cols-3 gap-8 opacity-10">
<div className="w-32 h-32 rounded-full border border-slate-900"></div>
<div className="w-32 h-32 rounded-lg border border-slate-900 rotate-45"></div>
<div className="w-32 h-32 rounded-full border border-slate-900"></div>
</div>
<span className="absolute text-slate-300 font-medium tracking-widest text-sm uppercase">Application Mockup Interface</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                            Data-driven insights <br/>
<span className="text-slate-400">without the complexity.</span>
</h2>
<div className="space-y-6 text-slate-500 font-light text-lg leading-relaxed">
<p>
                                We believe that understanding your audience shouldn't require a degree in data science. Our platform distills complex metrics into actionable signals.
                            </p>
<p>
                                Focus on creating, while we handle the parsing, processing, and presenting of what actually matters to your business growth.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 flex gap-8">
<div>
<span className="block text-2xl font-semibold text-slate-900 tracking-tight">99.9%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Uptime</span>
</div>
<div>
<span className="block text-2xl font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Support</span>
</div>
<div>
<span className="block text-2xl font-semibold text-slate-900 tracking-tight">5M+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Users</span>
</div>
</div>
</div>
<div className="relative">

<div className="aspect-square bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col justify-between">
<div className="flex justify-between items-center mb-4">
<div className="w-1/3 h-2 bg-slate-100 rounded-full"></div>
<div className="w-8 h-8 bg-slate-50 rounded-full border border-slate-100"></div>
</div>
<div className="space-y-3">
<div className="w-full h-24 bg-slate-50 rounded-lg border border-slate-100 border-dashed"></div>
<div className="w-full h-8 bg-slate-100 rounded-md"></div>
<div className="w-3/4 h-8 bg-slate-50 rounded-md"></div>
</div>
<div className="mt-auto flex gap-3">
<div className="flex-1 h-20 bg-slate-900/5 rounded-lg"></div>
<div className="flex-1 h-20 bg-slate-900/5 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100">
<div className="max-w-5xl mx-auto">
<div className="mb-12 text-center md:text-left">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Capabilities</h3>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Core Services</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors hover:shadow-sm">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Workflow Automation</h4>
<p className="text-slate-500 leading-relaxed mb-6">
                            Streamline repetitive tasks with our visual builder. Connect your favorite apps and let the system handle the heavy lifting automatically.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors hover:shadow-sm">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Secure Infrastructure</h4>
<p className="text-slate-500 leading-relaxed mb-6">
                            Enterprise-grade security built into every layer. We provide end-to-end encryption and compliance monitoring out of the box.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How it works</h2>
<p className="text-slate-400 text-lg">From zero to production in four simple steps.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-800 z-0"></div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-sm font-medium">01</div>
<h4 className="text-lg font-medium mb-2 tracking-tight">Connect</h4>
<p className="text-sm text-slate-400 leading-relaxed">Integrate your data sources securely with a single click API key.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-sm font-medium">02</div>
<h4 className="text-lg font-medium mb-2 tracking-tight">Configure</h4>
<p className="text-sm text-slate-400 leading-relaxed">Map your data fields and set custom validation rules for your pipeline.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-sm font-medium">03</div>
<h4 className="text-lg font-medium mb-2 tracking-tight">Test</h4>
<p className="text-sm text-slate-400 leading-relaxed">Run in a sandbox environment to ensure everything works perfectly.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white text-slate-900 border border-white flex items-center justify-center mb-6 text-sm font-medium">04</div>
<h4 className="text-lg font-medium mb-2 tracking-tight">Deploy</h4>
<p className="text-sm text-slate-400 leading-relaxed">Push to production instantly with global CDN propagation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Latest Insights</h2>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">View all posts →</a>
</div>
<div className="grid md:grid-cols-3 gap-10">

<article className="group cursor-pointer">
<div className="w-full h-48 bg-slate-100 rounded-lg mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
<span className="font-medium text-slate-900">Product</span>
<span>•</span>
<time>Oct 24, 2023</time>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">The future of headless CMS architecture</h3>
<p className="text-sm text-slate-500 line-clamp-2">Exploring the shift towards decoupled content management systems and what it means for developers.</p>
</article>

<article className="group cursor-pointer">
<div className="w-full h-48 bg-slate-100 rounded-lg mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
<span className="font-medium text-slate-900">Engineering</span>
<span>•</span>
<time>Oct 18, 2023</time>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">Optimizing database queries at scale</h3>
<p className="text-sm text-slate-500 line-clamp-2">How we reduced latency by 40% using advanced indexing strategies and caching layers.</p>
</article>

<article className="group cursor-pointer">
<div className="w-full h-48 bg-slate-100 rounded-lg mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
<span className="font-medium text-slate-900">Design</span>
<span>•</span>
<time>Oct 12, 2023</time>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">Principles of effective interface design</h3>
<p className="text-sm text-slate-500 line-clamp-2">Why subtle interactions and consistent spacing create better user trust and retention.</p>
</article>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-5 w-5 bg-slate-200 rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight text-slate-900">MOCKUP</span>
</div>
<p className="text-xs text-slate-400">© 2023 Mockup Inc. All rights reserved.</p>
</div>
</footer>
</main>

    </>
  );
}
