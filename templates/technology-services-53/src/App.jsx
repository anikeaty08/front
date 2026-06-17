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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">

<span className="text-xl font-bold tracking-tighter text-neutral-900 group-hover:text-[#00b23b] transition-colors">XORIANT</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-[#00b23b] transition-colors" href="#">Services</a>
<a className="hover:text-[#00b23b] transition-colors" href="#">Industries</a>
<a className="hover:text-[#00b23b] transition-colors" href="#">Partners</a>
<a className="hover:text-[#00b23b] transition-colors" href="#">Insights</a>
<a className="hover:text-[#00b23b] transition-colors" href="#">Careers</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-[#00b23b] transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</button>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-[#00b23b] transition-all" href="#">
                    Contact Us
                </a>
<button className="md:hidden p-2 text-neutral-600">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#00b23b]"></span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">Digital Engineering Excellence</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                    Engineering Future-Ready <br/>
<span className="gradient-text">Software</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    A Silicon Valley headquartered product engineering, software development, and technology services firm. We empower enterprises to build, modernize, and scale.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-neutral-900 rounded-lg hover:bg-[#00b23b] transition-all shadow-lg shadow-neutral-900/10 hover:shadow-[#00b23b]/20" href="#">
                        Our Capabilities
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-[#00b23b]/30 transition-all" href="#">
                        Success Stories
                    </a>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100">
<div className="p-2">
<p className="text-3xl font-semibold tracking-tight text-neutral-900">30+</p>
<p className="text-sm text-neutral-500 mt-1">Years of Innovation</p>
</div>
<div className="p-2">
<p className="text-3xl font-semibold tracking-tight text-neutral-900">5000+</p>
<p className="text-sm text-neutral-500 mt-1">Global Engineers</p>
</div>
<div className="p-2">
<p className="text-3xl font-semibold tracking-tight text-neutral-900">Silicon Valley</p>
<p className="text-sm text-neutral-500 mt-1">Headquarters</p>
</div>
<div className="p-2">
<p className="text-3xl font-semibold tracking-tight text-neutral-900">Global</p>
<p className="text-sm text-neutral-500 mt-1">Delivery Centers</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-500/20 blur-[100px] pointer-events-none rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
                    New: Intelligent Insights
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ask Xoriant AI</h2>
<p className="text-neutral-400 text-lg">Use our Generative AI engine to explore case studies, services, and technology trends.</p>
</div>

<div className="ai-gradient-border rounded-2xl p-[1px] shadow-2xl shadow-violet-900/20">
<div className="bg-neutral-900 rounded-2xl p-2 md:p-3">

<div className="relative flex items-center bg-neutral-800/50 rounded-xl border border-neutral-700/50 px-4 h-14 transition-all focus-within:border-violet-500/50 focus-within:bg-neutral-800">
<span className="iconify text-violet-400 animate-pulse" data-icon="lucide:stars" data-width="20"></span>
<input className="w-full bg-transparent border-none outline-none text-white ml-3 placeholder-neutral-500 text-sm md:text-base h-full" placeholder="How can Xoriant help migrate legacy apps to the cloud?" type="text"/>
<div className="hidden md:flex items-center gap-2">
<span className="text-[10px] text-neutral-500 border border-neutral-700 rounded px-1.5 py-0.5">⌘ K</span>
<button className="bg-white text-neutral-900 hover:bg-neutral-200 p-2 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2 px-1">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 hover:bg-neutral-700 hover:border-neutral-600 transition-all group">
<span className="iconify text-[#00b23b] group-hover:scale-110 transition-transform" data-icon="lucide:cloud-lightning" data-width="14"></span>
<span className="text-xs text-neutral-300">Cloud Modernization</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 hover:bg-neutral-700 hover:border-neutral-600 transition-all group">
<span className="iconify text-emerald-400 group-hover:scale-110 transition-transform" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-xs text-neutral-300">Security Frameworks</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 hover:bg-neutral-700 hover:border-neutral-600 transition-all group">
<span className="iconify text-blue-400 group-hover:scale-110 transition-transform" data-icon="lucide:database" data-width="14"></span>
<span className="text-xs text-neutral-300">Data Engineering</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 hover:bg-neutral-700 hover:border-neutral-600 transition-all group">
<span className="iconify text-pink-400 group-hover:scale-110 transition-transform" data-icon="lucide:cpu" data-width="14"></span>
<span className="text-xs text-neutral-300">Generative AI Solutions</span>
</button>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs text-neutral-500">
                Powered by Xoriant ORIAN™ Intelligence Engine. <a className="text-neutral-400 hover:text-white underline decoration-neutral-700" href="#">Learn more</a>
</p>
</div>
</section>

<section className="py-24 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Core Offerings</h2>
<p className="text-base text-neutral-500">Comprehensive digital engineering solutions tailored to accelerate your business transformation.</p>
</div>
<a className="text-sm font-medium text-[#00b23b] hover:text-[#008a2d] flex items-center gap-1 group" href="#">
                    View all capabilities 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-[#00b23b]/30 hover:shadow-xl hover:shadow-[#00b23b]/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-[#00b23b]/10 flex items-center justify-center mb-6 text-[#00b23b] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Digital Product Engineering</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Accelerate product development lifecycles with next-gen engineering, from MVP to enterprise scale.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-[#00b23b]" data-icon="lucide:check" data-width="12"></span> Application Modernization
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-[#00b23b]" data-icon="lucide:check" data-width="12"></span> QE &amp; Automation
                        </li>
</ul>
</div>

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:cloud" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Cloud, Infrastructure &amp; Security</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Secure, scalable cloud foundations (AWS, Azure, GCP) ensuring high availability and resilience.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="12"></span> Cloud Migration
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="12"></span> Cybersecurity &amp; GRC
                        </li>
</ul>
</div>

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center mb-6 text-violet-600 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Data &amp; AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Transforming raw data into strategic assets with advanced Analytics, Machine Learning, and GenAI.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-violet-500" data-icon="lucide:check" data-width="12"></span> Data Engineering
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<span className="iconify text-violet-500" data-icon="lucide:check" data-width="12"></span> AI/ML Models
                        </li>
</ul>
</div>

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Enterprise Applications</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Seamless implementation and support for SAP, Salesforce, Oracle, and Microsoft ecosystems.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:laptop-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Digital Experience</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Crafting intuitive, engaging user experiences (UI/UX) across mobile and web platforms.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:network" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">IoT &amp; Edge Computing</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Connecting devices and processing data at the edge for real-time operational insights.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
                        Client Success
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Modernizing a Global <br/> <span className="text-neutral-400">FinTech Platform</span>
</h2>
<p className="text-base text-neutral-500 mb-8 leading-relaxed">
                        Xoriant partnered with a leading financial institution to rebuild their core trading platform using microservices architecture, resulting in 50% reduced latency and seamless scalability.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px]">
<span className="iconify text-blue-600" data-icon="lucide:timer" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">50% Latency Reduction</h4>
<p className="text-sm text-neutral-500">Optimized data flow and cloud-native integration.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px]">
<span className="iconify text-blue-600" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Enhanced Scalability</h4>
<p className="text-sm text-neutral-500">Kubernetes-based deployment handling peak loads.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-blue-600 hover:text-blue-600 transition-colors" href="#">
                            Read full case study
                            <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 aspect-square md:aspect-[4/3] group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-neutral-100 p-6 flex flex-col gap-4">
<div className="flex justify-between items-center pb-4 border-b border-neutral-50">
<div className="w-20 h-2 bg-neutral-100 rounded"></div>
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
<span className="iconify text-green-500" data-icon="lucide:activity" data-width="16"></span>
</div>
</div>
<div className="flex-1 flex items-end gap-2">
<div className="w-1/5 bg-blue-100 h-1/3 rounded-t-md"></div>
<div className="w-1/5 bg-blue-200 h-1/2 rounded-t-md"></div>
<div className="w-1/5 bg-blue-300 h-2/3 rounded-t-md"></div>
<div className="w-1/5 bg-blue-400 h-4/5 rounded-t-md"></div>
<div className="w-1/5 bg-blue-500 h-full rounded-t-md relative group-hover:scale-y-105 transition-transform origin-bottom">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                         +120%
                                     </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#404040 1px, transparent 1px), linear-gradient(90deg, #404040 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Industries We Serve</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Deep domain expertise across key vertical markets to drive digital innovation.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:landmark" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">BFSI</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:stethoscope" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">Healthcare &amp; Pharma</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:chip" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">High Tech</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">Retail &amp; CPG</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:factory" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">Manufacturing</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:radio-tower" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">Telecom</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:car" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">Automotive</span>
</a>
<a className="group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 transition-all text-center" href="#">
<div className="mx-auto w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3 group-hover:bg-[#00b23b] group-hover:text-white transition-colors text-neutral-300">
<span className="iconify" data-icon="lucide:arrow-right-circle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-sm font-medium text-neutral-200">All Industries</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00b23b]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Start Your Digital Journey</h2>
<p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">Partner with Xoriant to accelerate innovation with a team that becomes a natural extension of yours.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-neutral-900 bg-white rounded-lg hover:bg-neutral-100 transition-all shadow-lg" href="#">
                            Connect with us
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all" href="#">
                            Join Our Team
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<span className="text-xl font-bold tracking-tighter text-neutral-900 mb-6 block">XORIANT</span>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Xoriant is a Silicon Valley headquartered digital engineering firm with offices in the USA, Europe, and Asia.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-[#00b23b] transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-[#00b23b] transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-[#00b23b] transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-[#00b23b] transition-colors" href="#">
<span className="iconify" data-icon="lucide:youtube" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Awards</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Digital Engineering</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Cloud &amp; Infrastructure</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Data &amp; AI</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blogs</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">News &amp; Events</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 Xoriant Corporation. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#00b23b] animate-pulse"></span>
                    Global Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
