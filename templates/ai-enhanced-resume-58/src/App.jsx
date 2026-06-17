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
      

<div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-200/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed top-[10%] right-[-10%] w-[30%] h-[30%] bg-zinc-200/30 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

<section className="relative mb-8 fade-in">

<div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden relative group border border-zinc-200/60 shadow-sm bg-zinc-100">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="http://localhost:3000/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlF5QXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a01ef36ee5a38f3cc66afb473b76e2fbacfea516/Gemini%20Generated%20Image%20(3).png" style={{objectPosition: '59% 32%'}}/>

<button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md hover:bg-white text-zinc-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200/50 transition-all flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
                    Change Cover
                </button>
</div>

<div className="flex flex-col md:flex-row items-start md:items-end -mt-12 px-4 md:px-8 relative">

<div className="relative">
<div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-[6px] border-[#FAFAFA] bg-white overflow-hidden shadow-lg group relative">
<img alt="Profile" className="w-full h-full object-cover" src="/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNjFXQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cabd832cd17ed707f9b51617a167a1a4de734984/Gemini%20Generated%20Image%20(5).png"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
<iconify-icon className="text-white" icon="solar:camera-add-linear" width="24"></iconify-icon>
</div>
</div>

<div className="absolute bottom-2 right-2 bg-zinc-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
                        92%
                    </div>
</div>

<div className="flex-1 md:ml-6 mt-4 md:mt-0 md:pb-2">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight leading-none">SELÇUK KUBUR</h1>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-zinc-500 font-medium">@selcukkubur</span>
<span className="text-zinc-300 text-xs">•</span>
<span className="text-sm text-zinc-500">Istanbul, Turkey</span>
</div>
<p className="text-sm text-zinc-600 mt-2 max-w-2xl leading-relaxed">
                                DevOps &amp; AI Infrastructure Leader @ Bondex | Microsoft Certified Professional
                            </p>
</div>

<div className="flex items-center gap-2">

<div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg p-1 shadow-sm mr-2">
<a className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-50" href="https://twitter.com/Codeless33">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon> 
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-50" href="https://github.com/selcukkubur">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors rounded-md hover:bg-zinc-50" href="https://linkedin.com/in/selcukkubur">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
</a>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors shadow-sm flex items-center gap-2">
<span>Actions</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="sticky top-0 z-20 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-zinc-200 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
<div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
<button className="py-4 text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 transition-colors whitespace-nowrap">
                    Profile
                </button>
<button className="py-4 text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap flex items-center gap-2">
                    AI Copilot
                    <span className="bg-lime-100 text-lime-700 text-[10px] px-1.5 py-0.5 rounded-full font-semibold border border-lime-200">NEW</span>
</button>
<button className="py-4 text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap">
                    ATS-Optimizer
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">

<aside className="col-span-12 lg:col-span-4 space-y-6 fade-in" style={{animationDelay: '0.1s'}}>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900 tracking-tight">Resume</h2>
<span className="text-[10px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full border border-zinc-100 font-medium">Private</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 group hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 overflow-hidden">
<div className="h-10 w-10 flex-shrink-0 bg-white rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-zinc-900 truncate">SK_Resume.pdf</p>
<p className="text-[10px] text-zinc-500">Dec 05, 2025</p>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900 p-1"><iconify-icon icon="solar:eye-linear" width="16"></iconify-icon></button>
<button className="text-zinc-400 hover:text-red-600 p-1"><iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon></button>
</div>
</div>
<button className="mt-4 w-full py-2 rounded-lg border border-dashed border-zinc-300 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:upload-linear" width="14"></iconify-icon>
                        Upload New Version
                    </button>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900 tracking-tight">About</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-4">
                            Born in Kadıköy, Istanbul... As a teenager at school, I was always curious reading computer tech magazines... Today, I’m helping to develop innovative software to solve the problems of multinational companies.
                        </p>
<div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:case-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-700">DevOps &amp; AI Infrastructure Leader @ Bondex</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-700">İstanbul, Türkiye</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:globe-linear" width="16"></iconify-icon>
<a className="text-xs text-zinc-700 hover:text-zinc-900 hover:underline" href="#">selcukkubur.github.io</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900 tracking-tight">Availability</h2>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-medium text-emerald-700">Open to work</span>
</div>
</div>
<div className="space-y-4">

<div className="space-y-2">
<label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Start Date</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="custom-radio" name="start_date" type="radio"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Immediately</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-radio" name="start_date" type="radio"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Notice Period</span>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Preferences</label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Full-time</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Contract</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Remote</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900">Relocate</span>
</label>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<h2 className="text-sm font-semibold text-zinc-900 tracking-tight mb-4">Salary Expectation</h2>
<div className="flex items-center gap-3">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">$</span>
<input className="w-full pl-6 pr-3 py-2 text-xs border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-400 focus:ring-0 text-zinc-700 font-medium" readonly="" type="text" value="100,000"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[10px]">MIN</span>
</div>
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">$</span>
<input className="w-full pl-6 pr-3 py-2 text-xs border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-400 focus:ring-0 text-zinc-700 font-medium" readonly="" type="text" value="120,000"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[10px]">TARGET</span>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-5 shadow-md relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/20 blur-[40px] rounded-full pointer-events-none transition-opacity group-hover:opacity-75"></div>
<h2 className="text-sm font-semibold text-white tracking-tight mb-1 relative z-10">Billing &amp; Subscription</h2>
<p className="text-xs text-zinc-400 mb-4 relative z-10">Unlimited alerts and featured placement.</p>
<a className="inline-block text-xs font-semibold bg-lime-400 hover:bg-lime-300 text-zinc-900 px-4 py-2 rounded-lg transition-colors relative z-10" href="#">
                        Manage Billing
                    </a>
</div>
</aside>

<main className="col-span-12 lg:col-span-8 space-y-8 fade-in" style={{animationDelay: '0.2s'}}>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
                            Experience
                            <span className="bg-zinc-100 text-zinc-500 text-[10px] px-2 py-0.5 rounded-full">6</span>
</h2>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                            Add Role
                        </button>
</div>
<div className="relative border-l border-zinc-200 ml-3 space-y-8 pb-2">

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-lime-500 shadow-[0_0_0_4px_rgba(132,204,22,0.1)]"></div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-zinc-900">DevOps &amp; AI Infrastructure Leader</h3>
<p className="text-xs text-zinc-500 font-medium">Bondex</p>
</div>
<span className="bg-lime-50 text-lime-700 border border-lime-100 text-[10px] font-semibold px-2 py-0.5 rounded-md">Current</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-zinc-400 mb-4 font-mono">
<iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon>
                                    JAN 2023 - PRESENT
                                </div>
<ul className="text-xs text-zinc-600 space-y-2 list-disc list-inside marker:text-zinc-300">
<li>Led DevOps team optimizing Web3 and AI infrastructure with CI/CD &amp; automation.</li>
<li>Architected scalable solutions on GCP, AWS, Azure focusing on AI-acceleration.</li>
<li>Cost-optimization reducing cloud spend by 15%.</li>
</ul>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-300"></div>
<div className="group">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-lime-700 transition-colors">Senior DevOps/TechOps Consultant</h3>
<p className="text-xs text-zinc-500">AiFi Inc.</p>
</div>
<span className="text-[10px] text-zinc-400 font-mono">2021 - 2023</span>
</div>
<p className="text-xs text-zinc-500 mt-2">Managed 100+ Kubernetes clusters worldwide, GitOps ArgoCD, Kustomize, Helm, Terraform.</p>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-300"></div>
<div className="group">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-lime-700 transition-colors">DevOps Tech Lead</h3>
<p className="text-xs text-zinc-500">COFE App</p>
</div>
<span className="text-[10px] text-zinc-400 font-mono">2021</span>
</div>
<p className="text-xs text-zinc-500 mt-2 line-clamp-2">Key leader on DevOps practices. CI/CD pipelines, Security compliance, environment monitoring.</p>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-300"></div>
<div className="group">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-lime-700 transition-colors">Senior DevOps Engineer / SRE</h3>
<p className="text-xs text-zinc-500">Emlakjet</p>
</div>
<span className="text-[10px] text-zinc-400 font-mono">2020 - 2021</span>
</div>
</div>
</div>
</div>
<button className="w-full text-center text-xs text-zinc-400 hover:text-zinc-600 mt-4 py-2 border-t border-zinc-100 transition-colors">View 4 more roles</button>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight">Education</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm flex items-center gap-4">
<div className="h-10 w-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center text-zinc-400 font-bold text-xs tracking-widest">
                            AYU
                        </div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-zinc-900">Ahmet Yesevi Üniversitesi</h3>
<p className="text-xs text-zinc-500">Bachelor's degree, Computer Software Engineering</p>
</div>
<button className="text-zinc-300 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
</button>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight">Skills</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex flex-wrap gap-2">

<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-white border border-zinc-900 shadow-sm">
<iconify-icon className="text-lime-400" icon="solar:star-bold" width="10"></iconify-icon>
                            DevOps
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-white border border-zinc-900 shadow-sm">
<iconify-icon className="text-lime-400" icon="solar:star-bold" width="10"></iconify-icon>
                            LLMOps
                        </span>

<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Engineering</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Cloud Computing</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Azure DevOps</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Infrastructure</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Ansible</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Terraform</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Docker</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Microservices</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">AWS</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">GCP</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 transition-colors">Kubernetes</span>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
                            Job Alerts
                             <span className="bg-zinc-100 text-zinc-500 text-[10px] px-2 py-0.5 rounded-full">3</span>
</h2>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                            New Alert
                        </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:border-zinc-300 transition-colors relative group">
<div className="flex justify-between items-start mb-2">
<span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-100">Daily</span>
<button className="text-zinc-300 hover:text-zinc-900"><iconify-icon icon="solar:pen-linear" width="14"></iconify-icon></button>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">DevOps Jobs</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                Remote
                            </div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:border-zinc-300 transition-colors relative group">
<div className="flex justify-between items-start mb-2">
<span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-100">Daily</span>
<button className="text-zinc-300 hover:text-zinc-900"><iconify-icon icon="solar:pen-linear" width="14"></iconify-icon></button>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">DevOps Manager</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                Remote
                            </div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:border-zinc-300 transition-colors relative group">
<div className="flex justify-between items-start mb-2">
<span className="bg-lime-50 text-lime-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-lime-100">Instant</span>
<button className="text-zinc-300 hover:text-zinc-900"><iconify-icon icon="solar:pen-linear" width="14"></iconify-icon></button>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1">AI Jobs</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                Remote
                            </div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight">Projects</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="bg-zinc-50 border border-dashed border-zinc-300 rounded-xl p-8 flex flex-col items-center justify-center text-center">
<div className="h-12 w-12 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-3 shadow-sm">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 max-w-xs">Showcase live products, open-source repos or talks you're proud of.</p>
<button className="mt-4 text-xs font-semibold text-zinc-900 hover:underline">Add first project</button>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
