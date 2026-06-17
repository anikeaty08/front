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



      // Mobile menu script
      const openBtn = document.getElementById('openMenu');
      const closeBtn = document.getElementById('closeMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      const backdrop = document.getElementById('backdrop');

      function toggleMenu(show) {
        if (show) {
          mobileMenu.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        } else {
          mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }
      }
      openBtn?.addEventListener('click', () => toggleMenu(true));
      closeBtn?.addEventListener('click', () => toggleMenu(false));
      backdrop?.addEventListener('click', () => toggleMenu(false));

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<header className="sticky bg-white/80 z-40 border-neutral-200 border-b top-0 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 lg:hidden" id="openMenu">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="flex-1 lg:flex-none text-center" href="#">
<span className="text-2xl sm:text-3xl tracking-tight font-semibold">Vessle</span>
</a>

<div className="flex flex-1 items-center justify-end gap-4">
<button aria-label="Search" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-600">
<iconify-icon height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button aria-label="Account" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 text-neutral-600">
<iconify-icon height="24" icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button aria-label="Favorites" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 text-neutral-600">
<iconify-icon height="24" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button aria-label="Cart" className="inline-flex p-2 rounded-md hover:bg-neutral-100 text-neutral-600">
<iconify-icon height="24" icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<nav className="border-neutral-200 border-t">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<ul className="flex gap-6 overflow-x-auto py-3 text-sm text-neutral-600 font-medium">
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Platform</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Solutions</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Integration</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Developers</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Enterprise</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Security</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Changelog</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Documentation</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Pricing</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Contact</a></li>
</ul>
</div>
</nav>
</header>

<div className="fixed z-50 hidden top-0 right-0 bottom-0 left-0" id="mobileMenu">
<div className="absolute inset-0 bg-black/30" id="backdrop"></div>
<div className="ml-auto h-full w-80 max-w-[85%] bg-white shadow-xl p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xl tracking-tight font-semibold">Menu</span>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-neutral-100" id="closeMenu">
<iconify-icon height="24" icon="solar:close-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<ul className="mt-6 space-y-4 text-neutral-800">
<li><a className="block hover:text-black" href="#">Platform</a></li>
<li><a className="block hover:text-black" href="#">Solutions</a></li>
<li><a className="block hover:text-black" href="#">Integration</a></li>
<li><a className="block hover:text-black" href="#">Developers</a></li>
<li><a className="block hover:text-black" href="#">Enterprise</a></li>
<li><a className="block hover:text-black" href="#">Security</a></li>
<li><a className="block hover:text-black" href="#">Changelog</a></li>
<li><a className="block hover:text-black" href="#">Documentation</a></li>
<li><a className="block hover:text-black" href="#">Pricing</a></li>
<li><a className="block hover:text-black" href="#">Contact</a></li>
</ul>
<div className="mt-auto flex gap-4 pt-6 border-t border-neutral-200">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800">
<iconify-icon height="20" icon="solar:user-circle-linear" width="20"></iconify-icon> Sign In
          </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-50">
<iconify-icon height="20" icon="solar:rocket-linear" width="20"></iconify-icon> Get Started
          </button>
</div>
</div>
</div>

<section className="relative top-0 right-0 bottom-0 left-0">
<div className="sm:h-[78vh] lg:h-[86vh] h-[68vh] relative top-0 right-0 bottom-0 left-0 group" id="heroMediaContainer">
<img alt="Abstract network connection background" className="absolute w-full h-full object-cover top-0 right-0 bottom-0 left-0 filter brightness-50" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex sm:px-6 lg:px-8 h-full max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4 relative items-center justify-center">
<div className="text-center max-w-3xl">
<div className="inline-flex gap-2 text-xs font-medium text-white/90 bg-white/10 border-white/20 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Nexus V3.0 is now available
                </div>
<h1 className="sm:text-5xl lg:text-7xl text-4xl font-semibold text-white tracking-tight">
                Intelligent Edge Infrastructure
                </h1>
<p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                Deploy serverless functions, manage global databases, and scale your application instantly. The complete toolkit for the modern engineering team.
                </p>
<div className="mt-8 flex gap-3 justify-center">
<a className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-100 transition-colors" href="#">
                    Start Building
                </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/30 bg-black/20 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">
                    Read Documentation
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100 bg-white py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-neutral-500 mb-8">Trusted by innovative teams at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon height="28" icon="logos:google"></iconify-icon>
<iconify-icon height="24" icon="logos:openai"></iconify-icon>
<iconify-icon height="28" icon="logos:microsoft"></iconify-icon>
<iconify-icon height="28" icon="logos:stripe"></iconify-icon>
<iconify-icon height="24" icon="logos:anthropic"></iconify-icon>
<iconify-icon height="22" icon="logos:vercel"></iconify-icon>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 w-full pt-20 pr-4 pb-20 pl-4 bg-neutral-50">
<div className="max-w-7xl mx-auto mb-12">
<div className="text-center max-w-2xl mx-auto">
<p className="text-xs sm:text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">Platform Capabilities</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">Everything you need to ship</h2>
<p className="mt-4 text-sm sm:text-base text-neutral-600">A unified environment to build, test, and deploy software. Focus on code, not infrastructure.</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-2 w-full h-auto lg:h-[600px] rounded top-0 right-0 bottom-0 left-0">

<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[2] group bg-black h-[300px] lg:h-full rounded-2xl relative items-center justify-center border border-neutral-800">
<img alt="Serverless" className="card-image w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 mb-4 backdrop-blur-md border border-blue-500/30">
<iconify-icon height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Serverless Compute</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Instant cold starts and global replication for your functions.</p>
</div>
</div>

<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[2] group bg-black h-[300px] lg:h-full rounded-2xl relative items-center justify-center border border-neutral-800">
<img alt="Database" className="card-image w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-500 mb-4 backdrop-blur-md border border-purple-500/30">
<iconify-icon height="20" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Edge Database</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Sub-millisecond latency with automatic sharding and replication.</p>
</div>
</div>

<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[2] group bg-black h-[300px] lg:h-full rounded-2xl relative items-center justify-center border border-neutral-800">
<img alt="Security" className="card-image w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af41b39e-a91f-41f7-8159-cde2e3e732ac_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500 mb-4 backdrop-blur-md border border-emerald-500/30">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Zero Trust Security</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Enterprise-grade protection with DDOS mitigation built-in.</p>
</div>
</div>

<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-[2] group bg-black h-[300px] lg:h-full rounded-2xl relative items-center justify-center border border-neutral-800">
<img alt="AI" className="card-image w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-rose-600/20 flex items-center justify-center text-rose-500 mb-4 backdrop-blur-md border border-rose-500/30">
<iconify-icon height="20" icon="solar:magic-stick-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">AI Inference</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Run LLMs at the edge with optimized hardware acceleration.</p>
</div>
</div>
</div>
<style>
      .card-panel {
        transition: flex 0.5s ease;
      }
      .card-panel:hover {
        flex: 2;
      }
      @media (max-width: 1024px) {
        .card-panel {
            flex: none !important;
        }
      }
    </style>
</section>

<section className="relative py-24 bg-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
<img alt="Analytics Dashboard" className="w-full h-auto" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
<iconify-icon height="18" icon="solar:chart-2-linear" width="18"></iconify-icon>
                    Real-time Analytics
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Insights that drive growth
                </h2>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Monitor your application performance with granular precision. Our analytics engine processes billions of events per second to give you real-time visibility into your infrastructure.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">Customizable dashboards with drag-and-drop widgets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">Automated anomaly detection and alerting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">Retention policies compliant with GDPR &amp; SOC2</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800" href="#">
                    Explore Analytics <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-4">
<iconify-icon height="18" icon="solar:globe-linear" width="18"></iconify-icon>
                    Global Network
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                    Deploy to the edge in seconds
                </h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    Our distributed edge network spans 35 regions worldwide. Your code runs closer to your users, reducing latency and improving reliability automatically.
                </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-3xl font-bold text-white mb-1">35+</div>
<div className="text-sm text-neutral-400">Global Regions</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-3xl font-bold text-white mb-1">99.99%</div>
<div className="text-sm text-neutral-400">Uptime SLA</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition-colors" href="#">
                    View Network Map
                </a>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img alt="Global Network" className="w-full h-auto opacity-80" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-50 p-8">

<div className="flex gap-1.5 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<pre className="font-mono text-xs sm:text-sm text-neutral-600 overflow-x-auto"><code>import { Nexus } from '@nexus/sdk';

const client = new Nexus({
  apiKey: process.env.NEXUS_KEY
});

// Deploy function instantly
await client.functions.deploy({
  name: 'process-payment',
  runtime: 'nodejs18.x',
  region: 'us-east-1',
  handler: async (event) =&gt; {
    return { status: 'processed' };
  }
});

console.log('Deployed successfully!');</code></pre>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4">
<iconify-icon height="18" icon="solar:code-square-linear" width="18"></iconify-icon>
                    Developer Experience
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Built for developers, by developers
                </h2>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    We've obsessed over every detail of the developer experience. From our typed SDKs to our CLI, everything is designed to keep you in flow.
                </p>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors" href="#">
                        Read the Docs
                    </a>
<a className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors" href="#">
                        View API Reference
                    </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<h5 className="text-sm tracking-tight font-semibold">NEXUS</h5>
<p className="mt-3 text-sm text-neutral-600 max-w-xs">
              The intelligent platform for modern engineering teams. Build, deploy, and scale with confidence.
            </p>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Product</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className=""><a className="hover:text-black" href="#">Infrastructure</a></li>
<li className=""><a className="hover:text-black" href="#">Edge Functions</a></li>
<li><a className="hover:text-black" href="#">Storage</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Company</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-black" href="#">About</a></li>
<li><a className="hover:text-black" href="#">Careers</a></li>
<li className=""><a className="hover:text-black" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Subscribe</h6>
<p className="mt-3 text-sm text-neutral-600">Get the latest changelog and updates.</p>
<form className="mt-4 flex gap-2">
<input className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Email address" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800" type="submit">
                Join <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year">2026</span> Nexus Inc. All rights reserved.</p>
<div className="flex gap-4 text-neutral-600">
<a className="text-xs hover:text-black" href="#">Privacy</a>
<a className="text-xs hover:text-black" href="#">Terms</a>
<a className="text-xs hover:text-black" href="#">Security</a>
</div>
</div>
</div>
<div className="bg-neutral-50 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6">
<p className="text-sm text-neutral-600">Follow us</p>
<div className="flex gap-4">
<a aria-label="Github" className="text-neutral-500 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale opacity-60 hover:opacity-100" height="20" icon="logos:github-icon" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="text-neutral-500 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale opacity-60 hover:opacity-100" height="20" icon="logos:twitter" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale opacity-60 hover:opacity-100" height="20" icon="logos:linkedin-icon" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span>© 2025 Nexus Inc</span>
<span className="hidden sm:inline">•</span>
<a className="hover:text-black" href="#">System Status</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
