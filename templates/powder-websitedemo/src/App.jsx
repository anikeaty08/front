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



tailwind.config = {
theme: {
extend: {
colors: {
base: '#0B0D10',
surface: '#121418',
accent: '#22d3ee', // Cyan-400
'accent-dim': 'rgba(34, 211, 238, 0.1)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
'tightest': '-0.04em',
}
}
}
}



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
      

<div className="fixed inset-0 pointer-events-none opacity-40 z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>

<nav className="fixed w-full z-40 border-b border-white/5 bg-base/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-white"></div>
                Powder
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors duration-200" href="#products">Products</a>
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#technology">Technology</a>
<a className="hover:text-white transition-colors duration-200" href="#company">Company</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-base transition-all duration-300 rounded-none" href="#">
                Book a Demo
            </a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center pt-24 border-b border-white/10 bg-grid">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto px-6 w-full relative z-10">
<div className="max-w-5xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95] mb-8">
                    The Operating System for <span className="text-gray-500">Health Insurance</span> and Revenue Cycle Management.
                </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
                    We empower providers, TPAs, and HMOs through intelligent claims vetting — ensuring faster settlements, transparent payments, and renewed confidence.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-white text-base font-semibold text-sm tracking-tight hover:bg-gray-200 transition-colors rounded-none flex items-center gap-2 justify-center">
                        Book a Demo
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-tight hover:border-white transition-colors rounded-none flex items-center gap-2 justify-center">
                        Explore Products
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 border-t border-white/10 flex items-end justify-between px-6 pb-6 opacity-50">
<div className="flex gap-1 items-end h-full w-32">
<div className="w-1 bg-cyan-500/50 h-[40%]"></div>
<div className="w-1 bg-cyan-500/30 h-[70%]"></div>
<div className="w-1 bg-cyan-500/60 h-[50%]"></div>
<div className="w-1 bg-cyan-500/20 h-[30%]"></div>
<div className="w-1 bg-cyan-500/80 h-[80%]"></div>
</div>
<div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                System Status: Operational
            </div>
</div>
</header>

<section className="border-b border-white/10 bg-base">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
<h2 className="text-4xl md:text-6xl text-white tracking-tighter font-medium leading-tight">
                    Redefining Trust in African Health Insurance.
                </h2>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center">
<p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-8">
                    Africa’s health insurance ecosystem is slowed down by mistrust. Hospitals wait weeks for reimbursements. HMOs create complex vetting rules. Patients are left in limbo.
                </p>
<div className="h-px w-24 bg-cyan-500 mb-8"></div>
<p className="text-lg text-white font-medium">
                    Powder transforms this broken process into a fast, transparent, and reliable system.
                </p>
</div>
</div>
</section>

<section className="bg-surface">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10">

<div className="p-10 border-b md:border-b-0 border-white/10 lg:border-r group hover:bg-white/5 transition-colors duration-500">
<div className="text-6xl font-medium text-white tracking-tighter mb-4 group-hover:text-cyan-400 transition-colors">30%</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Reduction in Administrative Overhead</div>
</div>

<div className="p-10 border-b md:border-b-0 border-white/10 lg:border-r group hover:bg-white/5 transition-colors duration-500">
<div className="text-6xl font-medium text-white tracking-tighter mb-4 group-hover:text-cyan-400 transition-colors">50%</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Less Manual Workload</div>
</div>

<div className="p-10 border-b md:border-b-0 border-white/10 lg:border-r group hover:bg-white/5 transition-colors duration-500">
<div className="flex items-end gap-2 mb-4">
<span className="text-6xl font-medium text-white tracking-tighter group-hover:text-cyan-400 transition-colors">~0s</span>
</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Vet Claims Instantly</div>
</div>

<div className="p-10 group hover:bg-white/5 transition-colors duration-500">
<div className="text-6xl font-medium text-white tracking-tighter mb-4 group-hover:text-cyan-400 transition-colors">5ch</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Unified Intake Channels</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1600px] mx-auto px-6" id="products">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl text-white tracking-tight font-medium mb-4">One Unified Infrastructure</h2>
<p className="text-gray-400 text-lg max-w-xl">Centralized AI-powered claims, telemedicine, and financial operations.</p>
</div>
<div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">

<div className="bg-base p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:bg-surface transition-colors">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4 text-cyan-400">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wider">Powder Telemedicine</span>
</div>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Connected Care, Anywhere</h3>
<p className="text-gray-400 leading-relaxed mb-6">Secure video &amp; chat consultations with in-session HMO preauthorization and offline-to-online sync.</p>
<ul className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 font-mono">
<li>// Integrated Claims</li>
<li>// Secure Video</li>
<li>// Instant Auth</li>
</ul>
</div>
<a className="border-b border-white/30 pb-1 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2" href="#">
                    Experience Telemedicine <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-base p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:bg-surface transition-colors">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4 text-cyan-400">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wider">Powder AI</span>
</div>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">The Voice Behind Smarter Ops</h3>
<p className="text-gray-400 leading-relaxed mb-6">Automate preauthorization calls, verify eligibility in seconds, and utilize intelligent call scoring 24/7.</p>
</div>
<a className="border-b border-white/30 pb-1 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2" href="#">
                    Meet Powder AI <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-base p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:bg-surface transition-colors">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4 text-cyan-400">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wider">Powder RCM</span>
</div>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Revenue Simplified. Confidence Amplified.</h3>
<p className="text-gray-400 leading-relaxed mb-6">Unified billing-to-claims automation with real-time invoice tracking, fraud detection, and CFO-ready analytics.</p>
</div>
<a className="border-b border-white/30 pb-1 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2" href="#">
                    Explore Powder RCM <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-surface border-y border-white/10 py-24">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="relative">
<div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:inbox-in-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-2">Intake</h4>
<p className="text-gray-400 text-sm leading-relaxed">Claims enter seamlessly from multiple channels including WhatsApp, Email, and API.</p>

<div className="hidden md:block absolute top-6 left-16 right-0 h-px bg-white/10"></div>
</div>

<div className="relative">
<div className="w-12 h-12 border border-white/20 flex items-center justify-center text-cyan-400 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-2">AI Vetting</h4>
<p className="text-gray-400 text-sm leading-relaxed">Automated eligibility checks, tariff validation, and intelligent fraud detection algorithms.</p>

<div className="hidden md:block absolute top-6 left-16 right-0 h-px bg-white/10"></div>
</div>

<div>
<div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:card-transfer-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-2">Settlement</h4>
<p className="text-gray-400 text-sm leading-relaxed">Faster reimbursements and real-time insights delivered to dashboards.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-12 hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium text-lg mb-6">Startups</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Launch 5x faster with ready APIs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Cut engineering costs by 60%</span>
</li>
</ul>
</div>

<div className="p-12 hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium text-lg mb-6">Hospitals</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Faster reimbursements</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Total revenue clarity</span>
</li>
</ul>
</div>

<div className="p-12 hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium text-lg mb-6">HMOs</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Reduce fraud by up to 30%</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Handle 2–3x more claims</span>
</li>
</ul>
</div>

<div className="p-12 hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium text-lg mb-6">State Healthcare</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Cover 2–3x more citizens</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-gray-400 text-sm">Live financial reporting</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 max-w-[1600px] mx-auto px-6 relative">
<div className="mb-16 border-l-2 border-cyan-500 pl-6">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-4">Why Powder?</h2>
<p className="text-xl text-gray-400 max-w-2xl">This isn’t just another health-tech platform. It’s the operating system for modern health finance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-surface p-8 border border-white/5">
<iconify-icon className="text-gray-500 text-3xl mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">World-Class Advisors</h3>
<p className="text-sm text-gray-400">Experience from Harvard, Kennedy School, JP Morgan, TGI.</p>
</div>
<div className="bg-surface p-8 border border-white/5">
<iconify-icon className="text-gray-500 text-3xl mb-6" icon="solar:code-scan-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">API-First Architecture</h3>
<p className="text-sm text-gray-400">Open, modular, plug-and-play integration for any stack.</p>
</div>
<div className="bg-surface p-8 border border-white/5">
<iconify-icon className="text-gray-500 text-3xl mb-6" icon="solar:user-hand-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Operator Insight</h3>
<p className="text-sm text-gray-400">Built by leaders who deeply understand claims friction.</p>
</div>
<div className="bg-surface p-8 border border-white/5">
<iconify-icon className="text-gray-500 text-3xl mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Proven Results</h3>
<p className="text-sm text-gray-400">Up to 60% faster reimbursements across partner networks.</p>
</div>
</div>
</section>

<section className="py-24 border-y border-white/10 bg-base">
<div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-12">
<div>
<h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Efficiency</h3>
<div className="text-4xl md:text-5xl text-white font-medium tracking-tighter">FASTER</div>
<p className="text-gray-500 mt-2">30% less admin time.</p>
</div>
<div>
<h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Integration</h3>
<div className="text-4xl md:text-5xl text-white font-medium tracking-tighter">BUILT TO CONNECT</div>
<p className="text-gray-500 mt-2">Plug-and-play API system.</p>
</div>
</div>
<div className="space-y-12">
<div>
<h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Growth</h3>
<div className="text-4xl md:text-5xl text-white font-medium tracking-tighter">GROW ENROLLMENT</div>
<p className="text-gray-500 mt-2">Transparent claims build retention.</p>
</div>
<div>
<h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Visibility</h3>
<div className="text-4xl md:text-5xl text-white font-medium tracking-tighter">SMART REPORTING</div>
<p className="text-gray-500 mt-2">Live financial clarity dashboards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1600px] mx-auto px-6">
<h2 className="text-2xl text-white font-medium mb-12 pb-4 border-b border-white/10">Latest Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="text-xs text-gray-500 font-mono mb-4">OCT 12, 2023</div>
<h3 className="text-lg text-white font-medium leading-snug group-hover:text-cyan-400 transition-colors">
                    The Future of Claims Automation in West Africa
                </h3>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Read Report <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>
<article className="group cursor-pointer">
<div className="text-xs text-gray-500 font-mono mb-4">SEP 28, 2023</div>
<h3 className="text-lg text-white font-medium leading-snug group-hover:text-cyan-400 transition-colors">
                    Reducing Fraud: How AI Scoring Protects HMOs
                </h3>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Read Report <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>
<article className="group cursor-pointer">
<div className="text-xs text-gray-500 font-mono mb-4">SEP 10, 2023</div>
<h3 className="text-lg text-white font-medium leading-snug group-hover:text-cyan-400 transition-colors">
                    State Healthcare: Scaling Coverage with Digital Rails
                </h3>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Read Report <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>
</div>
</section>

<section className="py-32 border-t border-white/10 bg-surface relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-base to-base"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-7xl text-white font-medium tracking-tighter mb-8">
                Ready to Redefine Trust in Health Insurance?
            </h2>
<button className="px-10 py-5 bg-white text-base font-semibold text-black hover:bg-cyan-50 transition-colors rounded-none inline-flex items-center gap-2">
                Book a Demo
                <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-base border-t border-white/10 pt-20 pb-10">
<div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
<div className="col-span-2">
<a className="text-white font-semibold tracking-tighter text-lg uppercase flex items-center gap-2 mb-6" href="#">
<div className="w-3 h-3 bg-white"></div>
                    Powder
                </a>
<p className="text-gray-500 text-sm max-w-xs">
                    The operating system for Africa’s health insurance and revenue cycle management.
                </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Products</h4>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">Telemedicine</a>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">Powder AI</a>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">RCM Platform</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Company</h4>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">About</a>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Social</h4>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-gray-500 text-sm hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
<div className="max-w-[1600px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p>© 2023 Powder Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
