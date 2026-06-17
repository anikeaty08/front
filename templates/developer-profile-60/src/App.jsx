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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
dark: '#191A23',
lime: '#B9FF66',
gray: '#F3F4F6',
}
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
}
}
}
}



        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById('tab-' + tabId).classList.remove('hidden');
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-zinc-900', 'border-brand-dark');
                btn.classList.add('text-zinc-500', 'border-transparent');
            });
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.remove('text-zinc-500', 'border-transparent');
            activeBtn.classList.add('text-zinc-900', 'border-brand-dark');
        }

        function openModal() {
            document.getElementById('config-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            document.getElementById('config-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        document.addEventListener('DOMContentLoaded', () => {
            switchTab('profile'); // Default tab
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
      

<nav className="sticky top-0 z-40 w-full glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">

<div className="flex items-center gap-8">
<a className="flex items-center gap-1 group" href="/">
<span className="font-display font-semibold text-lg tracking-tighter text-brand-dark">devfound</span>
<div className="h-1 w-1 rounded-full bg-brand-lime group-hover:scale-125 transition-transform duration-300"></div>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#">Jobs</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#">Tools</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#">Internships</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#">Learn</a>
</div>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-brand-dark bg-brand-lime rounded-full hover:opacity-90 transition-opacity" href="#">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span>Post Job</span>
</a>
<div className="h-8 w-8 rounded-full bg-zinc-200 overflow-hidden ring-2 ring-white cursor-pointer">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="relative w-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm mb-6 group">
<div className="h-48 w-full bg-zinc-100 overflow-hidden relative">
<img alt="Cover" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="px-6 pb-6 relative">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12">
<div className="flex items-end gap-4">
<div className="relative">
<div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-lg">
<img className="w-full h-full rounded-xl object-cover bg-zinc-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-1 -right-1 bg-brand-lime text-brand-dark text-[10px] font-bold px-1.5 py-0.5 rounded border border-white">92%</div>
</div>
<div className="mb-1">
<h1 className="text-xl font-semibold text-white sm:text-zinc-900 tracking-tight flex items-center gap-2">
                                SELÇUK KUBUR
                                <iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="16"></iconify-icon>
</h1>
<p className="text-sm text-zinc-100 sm:text-zinc-500">@selcukkubur</p>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<a className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" href="#"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></a>
<a className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" href="#"><iconify-icon icon="solar:share-linear" width="18"></iconify-icon></a>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<div className="flex gap-1">
<a className="p-2 rounded-lg text-zinc-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="p-2 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon></a>
<a className="p-2 rounded-lg text-zinc-400 hover:text-[#0A66C2] hover:bg-blue-50 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
<p className="mt-4 text-sm text-zinc-600 max-w-2xl leading-relaxed">DevOps &amp; AI Infrastructure Leader @ Bondex | Microsoft Certified Professional.</p>
</div>
</div>

<div className="flex items-center gap-1 mb-6 border-b border-zinc-200">
<button className="tab-btn px-4 py-2.5 text-sm font-medium text-zinc-900 border-b-2 border-brand-dark transition-colors" id="btn-profile" onclick="switchTab('profile')">Profile</button>
<button className="tab-btn px-4 py-2.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 transition-colors flex items-center gap-1.5" id="btn-copilot" onclick="switchTab('copilot')">
<iconify-icon className="text-brand-dark" icon="solar:stars-linear"></iconify-icon>AI Copilot
            </button>
<button className="tab-btn px-4 py-2.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 transition-colors" id="btn-ats" onclick="switchTab('ats')">ATS Optimizer</button>
</div>

<div className="tab-content grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in" id="tab-profile">

<aside className="lg:col-span-4 space-y-6">
<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">About</h3>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</div>
<div className="space-y-4">
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all cursor-pointer">Born in Kadıköy, Istanbul. Always curious reading computer tech magazines. Today, I’m helping to develop innovative software to solve the problems of multinational companies.</p>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<div><p className="text-xs font-medium text-zinc-900">Istanbul, Türkiye</p><p className="text-[10px] text-zinc-400">Timezone: GMT+3</p></div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:link-linear" width="16"></iconify-icon>
<a className="text-xs font-medium text-zinc-900 hover:underline hover:text-brand-dark" href="#">selcukkubur.github.io</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm group hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Resume</h3>
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded border border-zinc-200">Private</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-100 mb-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-white border border-zinc-200 flex items-center justify-center text-red-500 shadow-sm"><iconify-icon icon="solar:file-text-linear"></iconify-icon></div>
<div><p className="text-xs font-medium text-zinc-900">SK_Resume.pdf</p><p className="text-[10px] text-zinc-400">Dec 05, 2025</p></div>
</div>
<button className="text-zinc-400 hover:text-red-500"><iconify-icon icon="solar:trash-bin-linear"></iconify-icon></button>
</div>
<button className="w-full py-2 rounded-lg border border-dashed border-zinc-300 text-xs font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors flex items-center justify-center gap-2"><iconify-icon icon="solar:upload-linear"></iconify-icon> Update Resume</button>
</div>

<div className="bg-brand-dark rounded-xl p-5 shadow-sm text-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><iconify-icon className="text-white text-6xl" icon="solar:crown-star-bold"></iconify-icon></div>
<h3 className="text-sm font-semibold text-white mb-1 relative z-10">Premium Subscription</h3>
<p className="text-xs text-zinc-400 mb-4 relative z-10">Unlimited alerts &amp; featured placement.</p>
<button className="w-full py-2 rounded-lg bg-brand-lime text-brand-dark text-xs font-bold hover:bg-white transition-colors relative z-10">Manage Billing</button>
</div>
</aside>

<div className="lg:col-span-8 space-y-6">

<section className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight">Experience</h2>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1"><iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add</button>
</div>
<div className="relative pl-4 border-l border-zinc-200 space-y-8">
<div className="relative">
<div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-lime border border-white ring-1 ring-zinc-200"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
<div><h3 className="text-sm font-semibold text-zinc-900">DevOps &amp; AI Infrastructure Leader</h3><p className="text-xs text-zinc-500">Bondex</p></div>
<div className="flex items-center gap-2"><span className="px-2 py-0.5 rounded text-[10px] font-medium bg-brand-lime/20 text-brand-dark border border-brand-lime/30">Current</span><span className="text-xs text-zinc-400">Jan 2023 - Present</span></div>
</div>
<p className="text-xs text-zinc-600 leading-relaxed">Led the DevOps team to manage and optimize Web3 and AI-driven infrastructure. Architected scalable cloud solutions on GCP, AWS, and Azure. Implemented AI-assisted observability.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border border-zinc-300"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
<div><h3 className="text-sm font-semibold text-zinc-900">Senior DevOps Consultant</h3><p className="text-xs text-zinc-500">AiFi Inc.</p></div>
<span className="text-xs text-zinc-400">Jan 2021 - Dec 2023</span>
</div>
<p className="text-xs text-zinc-600 leading-relaxed">Managed 100+ Kubernetes clusters distributed globally. Implemented GitOps with ArgoCD and standardized deployments using Kustomize and Helm.</p>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight">Skills &amp; Stack</h2>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</div>
<div className="flex flex-wrap gap-2">
<span className="skill-tag">Large Language Model Ops</span>
<span className="skill-tag">Azure DevOps</span>
<span className="skill-tag">Terraform</span>
<span className="skill-tag">Kubernetes</span>
<span className="skill-tag">AWS</span>
<span className="skill-tag">GCP</span>
<button className="px-3 py-1 text-xs font-medium text-zinc-400 border border-dashed border-zinc-300 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors">+ Add</button>
</div>
</section>
</div>
</div>

<div className="tab-content hidden animate-fade-in" id="tab-copilot">
<div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm relative overflow-hidden mb-6">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-lime/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 mb-8">
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Autobot Control</h2>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-dark text-brand-lime">Premium</span>
</div>
<p className="text-sm text-zinc-500">Automated application agent for LinkedIn, Greenhouse, and Lever.</p>
</div>

<div className="flex items-center gap-3">
<button className="px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium border border-zinc-200 shadow-sm transition-all flex items-center gap-2 group" onclick="openModal()">
<iconify-icon className="group-hover:rotate-45 transition-transform" icon="solar:settings-linear"></iconify-icon> 
                            Configure
                        </button>
<button className="px-4 py-2.5 rounded-lg bg-brand-dark text-white hover:bg-zinc-800 text-xs font-bold transition-all shadow-md flex items-center gap-2 hover:gap-3">
<iconify-icon className="text-brand-lime" icon="solar:play-bold"></iconify-icon>
<span>Run Autobot</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

<div className="col-span-1 bg-zinc-50/50 border border-zinc-200 rounded-xl p-6 hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-500">System Active</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" id="autobot-switch" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="autobot-switch"></label>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-center divide-x divide-zinc-200">
<div>
<div className="text-2xl font-semibold text-zinc-900">0</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">Applied</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-900">1</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">Pending</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-900">0</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">Failed</div>
</div>
</div>
</div>

<div className="col-span-1 bg-zinc-50/50 border border-zinc-200 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-dark" icon="solar:brain-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-zinc-900">Strategy Insight</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded bg-white border border-zinc-200 shadow-sm">
<span className="text-xs text-zinc-500">Profile Strength</span>
<span className="text-xs font-bold text-green-600">92%</span>
</div>
<div className="flex items-start gap-2 text-xs text-zinc-500">
<iconify-icon className="text-brand-dark mt-0.5" icon="solar:star-fall-linear"></iconify-icon>
<span>Apply between <strong>10 AM - 2 PM</strong> for 30% higher visibility on Lever.</span>
</div>
</div>
</div>

<div className="col-span-1 bg-white text-zinc-900 rounded-xl p-6 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold">Configuration</h3>
<button className="text-zinc-400 hover:text-zinc-900" onclick="openModal()"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-500">Target Roles</span>
<span className="font-medium">Software Engineer, DevOps</span>
</div>
<div className="flex justify-between items-center text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-500">Location</span>
<span className="font-medium">Remote Only</span>
</div>
<div className="flex justify-between items-center text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-500">Daily Limit</span>
<span className="font-medium">50 Applications</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Mode</span>
<span className="font-medium text-brand-dark bg-zinc-100 px-2 py-0.5 rounded">Auto-Submit</span>
</div>
</div>
</div>
</div>

<div className="mt-6 border-t border-zinc-100 pt-6">
<h3 className="text-sm font-semibold text-zinc-500 mb-4">Recent Session Logs</h3>
<div className="p-4 rounded-lg bg-zinc-50 border border-dashed border-zinc-300 text-center text-xs text-zinc-400">
                        Waiting for session start...
                     </div>
</div>
</div>
</div>

<div className="tab-content hidden animate-fade-in" id="tab-ats">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
<div className="lg:col-span-5 flex flex-col gap-4 h-full">
<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm flex-shrink-0">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-zinc-900">Job Description</h3>
<span className="text-[10px] text-zinc-400">Paste JD to optimize</span>
</div>
<textarea className="w-full h-32 p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-xs text-zinc-700 focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark resize-none" placeholder="Paste the job description here..."></textarea>
</div>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm flex-1 flex flex-col overflow-hidden">
<div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:document-text-linear"></iconify-icon><span className="text-sm font-semibold text-zinc-900">Resume Content</span></div>
<div className="flex gap-2"><button className="p-1.5 hover:bg-zinc-200 rounded text-zinc-500"><iconify-icon icon="solar:magic-stick-linear"></iconify-icon></button></div>
</div>
<div className="p-0 flex-1 overflow-y-auto">
<div className="p-4 space-y-4 text-sm text-zinc-800 font-mono">
<div className="p-2 hover:bg-zinc-50 rounded border border-transparent hover:border-zinc-200 cursor-text"><strong>Selçuk KUBUR</strong><br/>DevOps Professional</div>
<div className="p-2 hover:bg-zinc-50 rounded border border-transparent hover:border-zinc-200 cursor-text"><span className="text-zinc-400 text-xs uppercase tracking-wide">Summary</span><br/>Experienced DevOps professional specializing in managing and optimizing cloud infrastructures...</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 h-full bg-zinc-200/50 rounded-xl border border-zinc-200 flex flex-col overflow-hidden">
<div className="h-12 bg-white border-b border-zinc-200 flex items-center justify-between px-4">
<div className="flex items-center gap-2"><span className="text-xs font-medium text-zinc-500">Preview:</span><select className="text-xs font-semibold bg-transparent border-none focus:ring-0 cursor-pointer"><option>Classic Single Column</option><option>Modern Two Column</option></select></div>
<div className="flex gap-2"><button className="text-zinc-500 hover:text-brand-dark"><iconify-icon icon="solar:download-linear"></iconify-icon></button></div>
</div>
<div className="flex-1 overflow-y-auto p-8 flex justify-center">
<div className="w-[210mm] min-h-[297mm] bg-white shadow-lg p-10 text-[11px] leading-relaxed text-zinc-800">
<header className="border-b border-zinc-200 pb-4 mb-4"><h1 className="text-2xl font-bold uppercase tracking-wide text-zinc-900">Selçuk KUBUR</h1><p className="text-zinc-500 mt-1">DevOps Professional • Istanbul, Turkey</p></header>
<section className="mb-4"><h2 className="font-bold text-xs uppercase tracking-wider text-zinc-900 mb-2">Summary</h2><p>Experienced DevOps professional specializing in managing and optimizing cloud infrastructures.</p></section>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 hidden" id="config-modal">

<div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="modal-content relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh]">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white z-10">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-zinc-100 text-zinc-900"><iconify-icon icon="solar:settings-linear"></iconify-icon></div>
<h3 className="text-sm font-semibold text-zinc-900">Configure Autobot</h3>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1 rounded-full hover:bg-zinc-100" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto space-y-6">

<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700">Target Roles</label>
<div className="flex flex-wrap gap-2 p-2 border border-zinc-200 rounded-lg bg-zinc-50 focus-within:ring-2 focus-within:ring-brand-lime/50 focus-within:border-brand-dark transition-all">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-700">
                            DevOps Engineer <button className="hover:text-red-500"><iconify-icon icon="solar:close-linear" width="10"></iconify-icon></button>
</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-700">
                            SRE <button className="hover:text-red-500"><iconify-icon icon="solar:close-linear" width="10"></iconify-icon></button>
</span>
<input className="bg-transparent text-xs outline-none flex-1 min-w-[80px] p-1" placeholder="Add role..." type="text"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700">Location</label>
<select className="w-full px-3 py-2 text-xs border border-zinc-200 rounded-lg bg-white focus:outline-none focus:border-brand-dark transition-colors">
<option>United States</option>
<option>European Union</option>
<option>Worldwide</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700">Work Mode</label>
<div className="flex items-center gap-4 pt-2">
<label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
<input checked="" className="accent-brand-dark rounded" type="checkbox"/> Remote
                             </label>
<label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
<input className="accent-brand-dark rounded" type="checkbox"/> Hybrid
                             </label>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-semibold text-zinc-700">Minimum Salary</label>
<span className="text-xs font-mono text-zinc-500">$100k - $200k+</span>
</div>
<div className="relative h-1.5 w-full bg-zinc-100 rounded-full">
<div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-brand-dark rounded-full"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-brand-dark rounded-full shadow cursor-grab"></div>
<div className="absolute right-[30%] top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-brand-dark rounded-full shadow cursor-grab"></div>
</div>
</div>

<div className="space-y-3 pt-2 border-t border-zinc-100">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-semibold text-zinc-900">Auto-Apply</p>
<p className="text-[10px] text-zinc-500">Submit application without review</p>
</div>
<div className="relative inline-block w-8 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-300 cursor-pointer"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-semibold text-zinc-900">Cover Letter Generation</p>
<p className="text-[10px] text-zinc-500">Use AI to write custom letters</p>
</div>
<div className="relative inline-block w-8 align-middle select-none">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-300 cursor-pointer"></label>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 px-4 py-2" onclick="closeModal()">Reset</button>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm transition-colors" onclick="closeModal()">Cancel</button>
<button className="px-4 py-2 rounded-lg bg-brand-dark text-white text-xs font-bold hover:bg-zinc-800 shadow-sm transition-colors" onclick="closeModal()">Save Changes</button>
</div>
</div>
</div>
</div>


    </>
  );
}
