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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tighter" href="#">
                    OVSN
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-sm hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm bg-white text-neutral-950 px-4 py-2 rounded-md font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Start deploying
                </a>
</div>
</div>
</nav>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[31.25rem] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10"></div>
<main className="pt-32 pb-24 relative">
<div className="absolute inset-0 bg-grid pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent_80%)] -z-10"></div>

<section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 hover:bg-white/10 transition-colors mb-8 backdrop-blur-sm" href="#">
<iconify-icon className="text-base text-neutral-400" icon="solar:stars-linear"></iconify-icon>
                Introducing OVSN Engine v2.0
                <iconify-icon className="text-base text-neutral-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 max-w-4xl">
                Infrastructure built for a global scale.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal">
                Deploy your applications globally with sub-millisecond latency. A platform engineered for modern development teams focusing on velocity and reliability.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-neutral-950 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Start deploying
                    <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 border border-white/10 bg-white/5 text-white rounded-md font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg text-neutral-400" icon="solar:document-text-linear"></iconify-icon>
                    Read the docs
                </button>
</div>
</section>

<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-200 bg-neutral-900/60 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee9b32bb-e72d-47cb-a983-ddf26a66cef2_1600w.jpg)] max-w-7xl bg-cover border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{height: '37.5rem'}}>

<div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-slate-900 to-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_1600w.jpg)] bg-cover invisible">
<div data-us-project="OMO2zbNkRGUqAVYhB4jD" style={{width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', zIndex: '-1'}}></div>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '500', fontSize: 'min(20vw, 17.5rem)', lineHeight: '0.8', color: 'rgba(125, 211, 252, 0.5)'}}>BRIND</span>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6 animate-fadeIn animation-delay-600" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '500', fontSize: 'min(20vw, 17.5rem)', lineHeight: '0.8', color: 'rgba(125, 211, 252, 0.5)'}}>BRIND</span>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

<div className="lg:col-span-7">
<h2 className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-extralight text-zinc-100 tracking-tight animate-fadeInLeft animation-delay-300">
                Building Digital Experiences That Captivate</h2>
</div>

<div className="lg:col-span-5">
<p className="sm:text-base text-sm text-neutral-300 max-w-[42ch] animate-fadeInRight animation-delay-400">Our team
                blends strategy, design, and technology to craft memorable digital experiences that drive results.</p>
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="text-sm" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '3.125rem', marginTop: '1rem', transform: 'scale(0.9)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '1rem 1.5rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Book a call</span>
</a>
<a className="text-sm" href="#pricing" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '3.125rem', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '1rem 1.5rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                    View pricing
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-20 relative">
<div className="rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden shadow-2xl relative">

<div className="h-12 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-neutral-500 font-medium flex items-center gap-2">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                            ovsn.dev/dashboard
                        </div>
</div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 md:col-span-2 space-y-4">
<div className="h-8 w-1/3 bg-white/5 rounded-md border border-white/5"></div>
<div className="space-y-2">
<div className="h-4 w-full bg-white/5 rounded border border-white/5"></div>
<div className="h-4 w-5/6 bg-white/5 rounded border border-white/5"></div>
<div className="h-4 w-4/6 bg-white/5 rounded border border-white/5"></div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="h-24 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-end">
<div className="h-3 w-1/2 bg-white/10 rounded mb-2"></div>
<div className="h-6 w-1/3 bg-white/20 rounded"></div>
</div>
<div className="h-24 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-end">
<div className="h-3 w-1/2 bg-white/10 rounded mb-2"></div>
<div className="h-6 w-1/3 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="col-span-1 h-full bg-white/5 rounded-lg border border-white/5 p-6 flex flex-col gap-4">
<div className="h-6 w-1/2 bg-white/10 rounded mb-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-3 w-2/3 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-3 w-1/2 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-3 w-3/4 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Everything you need to ship.</h2>
<p className="text-lg text-neutral-400 max-w-2xl">A complete toolset engineered to reduce complexity and increase your team's velocity without compromising security.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Global Edge Network</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deploy your code to edge locations worldwide automatically. Deliver content from the node closest to your users.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Zero Trust Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Enterprise-grade security built-in by default. Automated DDoS protection, WAF, and seamless SSL certificate management.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Monitor your application's performance with granular insights. Track core web vitals and custom metrics instantly.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:git-branch-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Preview Deployments</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Generate live URLs for every pull request. Collaborate easily with your team before merging to production.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Serverless Functions</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Run backend code without managing servers. Auto-scaling computing power that executes only when needed.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Extensive APIs</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Integrate our infrastructure deeply into your custom workflows using our fully documented REST and GraphQL APIs.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">Powering infrastructure for innovative teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
<span className="text-xl font-medium tracking-tighter text-white">ACME</span>
<span className="text-xl font-medium tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-medium tracking-tighter text-white">VERTEX</span>
<span className="text-xl font-medium tracking-tighter text-white">SYNTH</span>
<span className="text-xl font-medium tracking-tighter text-white">AURA</span>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
<div className="absolute inset-0 bg-white/[0.02] rounded-3xl blur-3xl -z-10"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale your stack?</h2>
<p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">Join thousands of developers building fast, secure, and reliable applications on our network.</p>
<button className="px-8 py-4 bg-white text-neutral-950 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors">
                Start building for free
            </button>
</section>
</main>

<footer className="border-t border-white/10 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-white text-base font-medium tracking-tighter">OVSN</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Status</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1" href="#">
<iconify-icon className="text-lg" icon="solar:brand-github-linear"></iconify-icon>
                    GitHub
                </a>
</div>
<p className="text-xs text-neutral-600">
                © 2024 OVSN Inc. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
