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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="block -m-1.5 p-1.5 hover:opacity-80 transition-opacity" href="#">
<span className="sr-only">NerdTec Solutions</span>

<img alt="NerdTec Solutions" className="h-20 max-w-none object-contain pt-2 pb-2 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3d2a515-374b-40fb-9695-9082908cbe1e_800w.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">How It Works</a>
<a className="hover:text-white transition-colors" href="#why-us">Why NerdTec</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-950" href="#contact">
                    Consultation
                </a>

<label className="md:hidden cursor-pointer text-white p-1" htmlFor="mobile-menu-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</label>
</div>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 p-6 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm font-medium">
<a className="text-slate-300 hover:text-white" href="#services">Services</a>
<a className="text-slate-300 hover:text-white" href="#process">How It Works</a>
<a className="text-slate-300 hover:text-white" href="#why-us">Why NerdTec</a>
<a className="text-blue-400" href="#contact">Schedule Consultation</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
<div className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
<div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-cyan-500 rounded-full blur-[96px]"></div>
</div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Your Long-Term Technology Partner
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
                One Advisor.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400">Every Solution.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We help businesses source, implement, and support connectivity, voice, cloud, and security solutions from leading providers while acting as your single point of accountability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="h-12 px-8 rounded-lg bg-white text-slate-950 font-medium text-sm flex items-center justify-center hover:bg-slate-200 transition-colors w-full sm:w-auto" href="#contact">
                    Schedule a Consultation
                </a>
<a className="h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm flex items-center justify-center hover:bg-white/10 transition-colors w-full sm:w-auto" href="#services">
                    Review My Services
                </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-400 font-normal">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500 stroke-[1.5]" data-lucide="check-circle"></i>
<span>Unbiased Advisory</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500 stroke-[1.5]" data-lucide="check-circle"></i>
<span>Access to Top Carriers</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500 stroke-[1.5]" data-lucide="check-circle"></i>
<span className="">Ongoing Lifecycle Support</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-medium mb-4">Core Capabilities</h2>
<p className="text-slate-400 max-w-xl font-light">Comprehensive technology guidance tailored to your operational needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="router"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Internet &amp; Connectivity</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Robust WAN, fiber, and broadband solutions ensuring high availability and cost control across all locations.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="phone"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Voice &amp; Collaboration</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Unified Communications (UCaaS) and Contact Center (CCaaS) platforms that modernize how your team connects.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="cloud"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Cloud &amp; Data Center</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Scalable infrastructure solutions including public, private, and hybrid cloud, plus colocation advisory.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Network &amp; Security</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        SD-WAN, SASE, and managed security services to protect critical assets and ensure reliable performance.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Mobility &amp; Wireless</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Fleet management, IoT connectivity, and wireless expense management optimization.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Vendor Management</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        We handle contract negotiations, renewals, and escalations so your team can focus on strategy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="why-us">
<div className="absolute inset-0 bg-slate-900/30 skew-y-3 origin-top-left scale-110 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white font-medium mb-6">
                        Strategic Guidance,<br/>
<span className="text-slate-500">Not Transactions.</span>
</h2>
<p className="text-slate-400 text-lg mb-8 font-light">
                        Carriers want to sell you their specific product. We want to solve your specific problem. We sit on your side of the table, offering the clarity needed to make complex decisions.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<div className="">
<h4 className="text-white font-medium text-sm tracking-tight mb-1">Client Advocacy First</h4>
<p className="text-sm text-slate-400 font-light">We work for you, not the provider. Our unbiased approach ensures the solution fits the requirement, not a quota.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="link"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm tracking-tight mb-1">One Relationship</h4>
<p className="text-sm text-slate-400 font-light">Manage multiple vendors through a single point of accountability. We simplify the chaos of telecom.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm tracking-tight mb-1">Beyond Installation</h4>
<p className="text-sm text-slate-400 font-light">We don't disappear after the contract is signed. We stay involved for implementation, billing issues, and renewals.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/5 p-8 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="relative z-10 mt-auto">
<div className="bg-slate-900/90 backdrop-blur border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-300 font-medium tracking-wide uppercase">System Optimization</span>
</div>
<div className="space-y-3">
<div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
</div>
<div className="mt-6 flex justify-between items-end">
<div>
<div className="text-2xl text-white font-medium tracking-tight">30%</div>
<div className="text-xs text-slate-500">Cost Reduction Avg</div>
</div>
<div className="text-blue-400">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="process">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-medium mb-4">The NerdTec Process</h2>
<p className="text-slate-400 font-light">Telecom and IT guidance without the guesswork.</p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clipboard-check"></i>
</div>
<h3 className="text-white font-medium text-lg tracking-tight mb-2">1. Assess</h3>
<p className="text-sm text-slate-400 font-light">We audit your current infrastructure, contracts, and future requirements.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="search"></i>
</div>
<h3 className="text-white font-medium text-lg tracking-tight mb-2">2. Compare</h3>
<p className="text-sm text-slate-400 font-light">We source quotes from multiple top-tier providers and present a clear comparison.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="rocket"></i>
</div>
<h3 className="text-white font-medium text-lg tracking-tight mb-2">3. Implement</h3>
<p className="text-sm text-slate-400 font-light">We project manage the installation to ensure timelines are met.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="headphones"></i>
</div>
<h3 className="text-white font-medium text-lg tracking-tight mb-2">4. Support</h3>
<p className="text-sm text-slate-400 font-light">Ongoing optimization, renewal management, and advocacy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white font-medium mb-6">Built for the Long Run</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                Technology changes fast, but your advisor shouldn't. Our goal is to become your trusted resource for every technology decision, renewal, upgrade, or issue—today and ten years from now.
            </p>
<div className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm tracking-wide uppercase">
<span>Relationship First</span>
<div className="h-px w-8 bg-blue-400"></div>
<span className="">Technology Second</span>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-blue-900/20 to-slate-900 border border-blue-500/20 p-12 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
<h2 className="relative z-10 text-3xl md:text-5xl tracking-tighter text-white font-medium mb-6">Ready for a better technology experience?</h2>
<p className="relative z-10 text-slate-400 mb-10 font-light max-w-xl mx-auto">Stop managing vendors and start managing your business. Let NerdTec handle the complexity.</p>
<a className="relative z-10 inline-flex h-12 px-8 rounded-lg bg-white text-slate-950 font-medium text-sm items-center justify-center hover:bg-slate-200 transition-colors" href="#contact">
                Schedule a Consultation
            </a>
</div>
</section>

<footer className="bg-slate-950 border-white/5 border-t pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="inline-block mb-6 -m-1.5 p-1.5 hover:opacity-80 transition-opacity" href="#">
<span className="sr-only">NerdTec Solutions</span>

<img alt="NerdTec Solutions" className="w-auto h-24 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3d2a515-374b-40fb-9695-9082908cbe1e_3840w.png"/>
</a>
<p className="text-slate-400 font-light max-w-sm mb-6">
                        Trusted advisors across telecom and IT. We simplify buying, manage vendors, and stay involved after the sale.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li className=""><a className="hover:text-blue-400 transition-colors" href="#">Connectivity</a></li>
<li className=""><a className="hover:text-blue-400 transition-colors" href="#">Cloud &amp; Data Center</a></li>
<li className=""><a className="hover:text-blue-400 transition-colors" href="#">Unified Comms</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cybersecurity</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li>hello@nerdtec.com</li>
<li>+1 (555) 123-4567</li>
<li>
<a className="text-blue-400 hover:underline" href="#">Book a meeting</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
<p>© 2023 NerdTec Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
