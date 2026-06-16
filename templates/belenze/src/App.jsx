import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Mobile menu
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
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>
</div>

<header className="sticky z-40 bg-white/80 border-neutral-200 border-b top-0 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 lg:hidden" id="openMenu">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="flex-1 lg:flex-none text-center lg:text-left" href="#">
<span className="text-xl sm:text-2xl tracking-tight font-semibold font-geist">BELENZE</span>
</a>

<div className="flex flex-1 items-center justify-end gap-3">
<button aria-label="Search" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Account" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
<iconify-icon height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Notifications" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
<iconify-icon height="20" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Deploy" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors">
<span>Deploy</span>
<iconify-icon height="16" icon="solar:rocket-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<nav className="border-neutral-200 border-t bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<ul className="flex gap-8 overflow-x-auto py-3 text-sm text-neutral-600 no-scrollbar font-medium">
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Overview</a></li>
<li><a className="text-black whitespace-nowrap" href="#">Features</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Security</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-black whitespace-nowrap transition-colors" href="#">Pricing</a></li>
</ul>
</div>
</nav>
</header>

<div className="fixed z-50 hidden top-0 right-0 bottom-0 left-0" id="mobileMenu">
<div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm" id="backdrop"></div>
<div className="ml-auto h-full w-80 max-w-[85%] bg-white shadow-2xl p-6 flex flex-col border-l border-neutral-200">
<div className="flex items-center justify-between">
<span className="text-lg tracking-tight font-semibold">Menu</span>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-600" id="closeMenu">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<ul className="mt-8 space-y-4 text-neutral-600 font-medium">
<li><a className="block hover:text-black" href="#">Products</a></li>
<li><a className="block hover:text-black" href="#">Solutions</a></li>
<li><a className="block hover:text-black" href="#">Developers</a></li>
<li><a className="block hover:text-black" href="#">Resources</a></li>
<li><a className="block hover:text-black" href="#">Company</a></li>
<li><a className="block hover:text-black" href="#">Pricing</a></li>
</ul>
<div className="mt-auto flex gap-3 pt-6 border-t border-neutral-200">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all">
             Sign In
          </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition-all">
             Contact
          </button>
</div>
</div>
</div>

<section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-gray-50 to-neutral-100 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur-sm mb-6 hover:border-neutral-300 transition-colors cursor-pointer">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          Belenze v2.0 is now available
          <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl font-geist">
          Infrastructure for the 
          <span className="text-neutral-400">intelligent era.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
          Deploy automated reasoning agents in seconds. Built on a global edge network designed for low-latency inference and real-time data processing.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-all shadow-sm" href="#">
            Start Building
            <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-black transition-all" href="#">
<iconify-icon height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
            Read Documentation
          </a>
</div>
</div>
</section>

<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon height="24" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon height="22" icon="logos:vercel" width="96"></iconify-icon>
<iconify-icon height="36" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon height="24" icon="logos:anthropic" width="110"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl font-geist">Platform Capabilities</h2>
<p className="mt-4 text-base text-neutral-600">Everything you need to build, deploy, and scale production-grade AI applications without managing infrastructure.</p>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Real-time Inference</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Sub-millisecond latency for model inference. Deployed on edge nodes across 35 regions globally.
            </p>
</div>

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Enterprise Security</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              SOC2 Type II certified. End-to-end encryption, private VPC peering, and granular RBAC controls.
            </p>
</div>

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:code-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Unified API</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              A single, typed API to access over 100+ state-of-the-art models from OpenAI, Anthropic, and Meta.
            </p>
</div>

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Observability</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Deep tracing and analytics. Monitor costs, latency, and token usage in real-time dashboards.
            </p>
</div>

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Vector Storage</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Managed vector database with built-in embeddings. Scale to billions of vectors with zero setup.
            </p>
</div>

<div className="group relative rounded-xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Collaboration</h3>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Built for teams. Shared workspaces, version control for prompts, and CI/CD integration.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
<iconify-icon height="18" icon="solar:tuning-square-2-linear" width="18"></iconify-icon>
<span>Fine-tuning Engine</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl font-geist">Customize models for your specific domain data.</h2>
<p className="text-lg text-neutral-600">
               Upload your dataset and let our automated pipeline handle the rest. We manage the GPU clusters, hyperparameter optimization, and evaluation.
             </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">Automatic dataset validation and cleaning</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">LoRA and QLoRA efficient training techniques</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-700">One-click deployment to dedicated endpoints</span>
</li>
</ul>
<div className="pt-6">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors" href="#">
                 Learn more about fine-tuning
                 <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden aspect-[4/3] group">
<div className="absolute inset-0 bg-neutral-100/50"></div>

<div className="absolute inset-4 bg-white rounded-lg border border-neutral-100 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-100"></div>
<div className="w-3 h-3 rounded-full bg-yellow-100"></div>
<div className="w-3 h-3 rounded-full bg-green-100"></div>
</div>
<div className="h-2 w-20 bg-neutral-100 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="flex gap-4">
<div className="w-1/3 h-24 rounded bg-neutral-50 border border-neutral-100 animate-pulse"></div>
<div className="w-2/3 space-y-2">
<div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
<div className="h-4 w-1/2 bg-neutral-100 rounded"></div>
<div className="h-10 w-full bg-blue-50 rounded mt-4 border border-blue-100 flex items-center px-3">
<div className="h-2 w-1/3 bg-blue-200 rounded"></div>
</div>
</div>
</div>
<div className="h-px bg-neutral-100 w-full my-4"></div>
<div className="grid grid-cols-3 gap-3">
<div className="h-16 bg-neutral-50 rounded border border-neutral-100"></div>
<div className="h-16 bg-neutral-50 rounded border border-neutral-100"></div>
<div className="h-16 bg-neutral-50 rounded border border-neutral-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl font-geist">Ready to ship?</h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">Join 10,000+ developers building the future of intelligence with Belenze.</p>
<div className="mt-10 flex items-center justify-center gap-4">
<button className="rounded-lg bg-black px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-all shadow-xl shadow-black/5">
                Get Started for Free
             </button>
<button className="rounded-lg px-8 py-3.5 text-sm font-medium text-neutral-600 hover:text-black transition-colors">
                Contact Sales
             </button>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<h5 className="text-sm tracking-tight font-semibold font-geist">BELENZE</h5>
<p className="mt-3 text-sm text-neutral-600 max-w-xs leading-relaxed">
              The intelligent infrastructure platform for next-generation applications. San Francisco, CA.
            </p>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold text-neutral-900">Platform</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-black transition-colors" href="#">Inference</a></li>
<li><a className="hover:text-black transition-colors" href="#">Fine-tuning</a></li>
<li><a className="hover:text-black transition-colors" href="#">Vector Database</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold text-neutral-900">Company</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Customers</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold text-neutral-900">Subscribe</h6>
<p className="mt-3 text-sm text-neutral-600">Latest product updates and changelog.</p>
<form className="mt-4 flex gap-2">
<input className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:bg-white transition-all" placeholder="Email address" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors" type="submit">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-100 pt-8">
<p className="text-xs text-neutral-500">© <span id="year">2026</span> Belenze Inc. All rights reserved.</p>
<div className="flex gap-6 text-neutral-500">
<a className="text-xs hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="text-xs hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="text-xs hover:text-black transition-colors" href="#">Status</a>
</div>
</div>
</div>
</footer>

<div className="bg-neutral-50 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6">
<p className="text-sm text-neutral-600 font-medium">Connect</p>
<div className="flex gap-5">
<a aria-label="GitHub" className="text-neutral-400 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" height="20" icon="logos:github-icon" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="text-neutral-400 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" height="20" icon="logos:twitter" width="20"></iconify-icon>
</a>
<a aria-label="Discord" className="text-neutral-400 hover:text-black transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" height="20" icon="logos:discord-icon" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
               All systems operational
            </span>
</div>
</div>
</div>
</div>


    </>
  );
}
