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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
<div className="absolute top-0 inset-x-0 h-[600px] grid-bg z-0"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-[#050505] rounded-full"></div>
</div>
                    VELOCITY
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#">Products</a>
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                v2.0 is now available
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<h1 className="sm:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                Infrastructure for the <br/>
<span className="text-gradient">modern internet.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Global edge network, serverless compute, and instant deployments. 
                Everything you need to build and scale your next big idea.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group">
                    Deploy Project
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:rocket-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                    Read Documentation
                    <div className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400 font-mono">K</div>
</button>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-2xl blur-lg opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] text-slate-500 font-mono flex items-center gap-2">
<iconify-icon icon="solar:lock-linear" width="10"></iconify-icon>
                            velocity.dev/dashboard
                        </div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hidden md:flex flex-col gap-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-slate-200 text-sm font-medium">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Overview
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Deployments
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Settings
                            </div>
</div>

<div className="md:col-span-2 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-xs text-slate-500 mb-1">Total Requests</div>
<div className="text-xl font-medium text-white tracking-tight">2.4M</div>
<div className="flex items-center gap-1 text-[10px] text-emerald-500 mt-2">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
                                        +12.5%
                                    </div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-xs text-slate-500 mb-1">Avg. Latency</div>
<div className="text-xl font-medium text-white tracking-tight">24ms</div>
<div className="flex items-center gap-1 text-[10px] text-indigo-400 mt-2">
                                        Global Edge
                                    </div>
</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">DDoS Protection</div>
<div className="text-xs text-slate-500">Auto-mitigation enabled</div>
</div>
</div>

<div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-slate-700 appearance-none cursor-pointer top-1 left-1 transition-all duration-200 checked:translate-x-full checked:border-indigo-500" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-800 cursor-pointer border border-white/10 transition-colors duration-200 checked:bg-indigo-600" htmlFor="toggle"></label>
</div>
</div>

<div className="h-24 w-full flex items-end justify-between gap-1 px-1">
<div className="w-full bg-white/5 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[90%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[95%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-8 font-medium">POWERING THE NEXT GENERATION OF COMPANIES</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">

<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon> ACME
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon> KINETIC
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon> LOOP
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon> STACK
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:command-linear" width="24"></iconify-icon> CMD+
                </div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-white mb-4 tracking-tight">Built for speed. <br/>Designed for scale.</h2>
<p className="text-slate-400 text-lg max-w-xl">Our platform removes the complexity of cloud infrastructure, giving you the tools to ship instantly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-indigo-500" icon="solar:global-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Global Edge Network</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Deploy your functions to 35+ regions worldwide in seconds. 
                            Smart routing ensures your users always hit the nearest node for lowest latency.
                        </p>
</div>

<div className="mt-8 flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono">LHR</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono">SFO</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono">SIN</span>
<span className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-300 font-mono">TYO</span>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Instant Rollbacks</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Made a mistake? Revert to any previous deployment instantly with a single click.
                </p>

<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="font-mono opacity-50">v2.4.1</span>
<span className="ml-auto opacity-50">Just now</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-500">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<span className="font-mono opacity-50">v2.4.0</span>
<span className="ml-auto opacity-50">2h ago</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-500">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<span className="font-mono opacity-50">v2.3.9</span>
<span className="ml-auto opacity-50">1d ago</span>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-pink-500/20">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Framework Agnostic</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Bring your own framework. Next.js, Vue, Svelte, or vanilla HTML. We support it all out of the box.
                </p>
</div>
<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 overflow-hidden hover:border-white/20 transition-colors flex flex-col sm:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/20">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        SOC2 Type II certified. End-to-end encryption, automated pentesting, and granular access controls for your team.
                    </p>
</div>
<div className="w-full sm:w-1/2 bg-white/5 rounded-lg border border-white/5 p-4">

<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group/item">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-slate-600 rounded bg-transparent checked:bg-orange-500 checked:border-orange-500 transition-all" type="checkbox"/>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none left-[1px] top-[1px]" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium group-hover/item:text-white transition-colors">SSO Enforcement</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/item">
<div className="relative flex items-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-600 rounded bg-transparent checked:bg-orange-500 checked:border-orange-500 transition-all" type="checkbox"/>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none left-[1px] top-[1px]" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium group-hover/item:text-white transition-colors">Audit Logs</span>
</label>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10 blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl sm:text-5xl font-medium text-white mb-6 tracking-tight">Ready to ship?</h2>
<p className="text-slate-400 text-lg mb-10">Join 10,000+ developers building the future of the web.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" type="button">Get Started</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<a className="text-white text-sm font-semibold tracking-tighter flex items-center gap-2 mb-6" href="#">
                        VELOCITY
                    </a>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">PRODUCT</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">RESOURCES</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">COMPANY</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2024 Velocity Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
