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
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb', // Royal Blue from logo wings
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a', // Dark Blue from logo center
950: '#172554',
}
},
boxShadow: {
'glow': '0 0 80px -20px rgba(37, 99, 235, 0.25)',
'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 relative">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">

<path d="M50 80C50 80 80 60 95 30C100 20 95 5 95 5L50 40L5 5C5 5 0 20 5 30C20 60 50 80 50 80Z" fill="#2563EB"></path>

<circle cx="50" cy="15" fill="#1e3a8a" r="12"></circle>
<path d="M50 80C50 80 65 60 65 45C65 45 50 55 50 55C50 55 35 45 35 45C35 60 50 80 50 80Z" fill="#1e3a8a"></path>
</svg>
</div>
<span className="font-bold tracking-tight text-xl text-slate-900 group-hover:text-brand-600 transition-colors">LEGACY SUITE</span>
</a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#">Platform</a>
<a className="hover:text-brand-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-brand-600 transition-colors" href="#">Resources</a>
<a className="hover:text-brand-600 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                    New: AI-Powered Document Analysis
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                    Estate planning for the <br/>
<span className="text-gradient">modern advisor.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    Simplify complex estate management. Visualize wealth, organize documents, and build intergenerational trust—all in one secure platform.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl">
                        Request a Demo
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-slate-600 border border-slate-200 font-medium hover:bg-slate-50 hover:text-slate-900 transition-all">
                        View Product Tour
                    </button>
</div>
</div>

<div className="relative max-w-6xl mx-auto mt-12">

<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-2xl overflow-hidden p-2 md:p-3">
<div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm">

<div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="mx-auto bg-white border border-slate-200 px-3 py-0.5 rounded text-[10px] text-slate-400 font-medium w-64 text-center">
                                app.legacysuite.com/dashboard
                            </div>
</div>

<div className="flex h-[600px]">

<div className="w-64 border-r border-slate-100 bg-slate-50/50 hidden md:flex flex-col p-4">
<div className="space-y-1">
<div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Overview</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-sm font-medium text-brand-700">
<span className="iconify text-brand-600" data-icon="lucide:layout-dashboard"></span>
                                        Dashboard
                                    </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 transition-colors text-sm font-medium">
<span className="iconify" data-icon="lucide:users"></span>
                                        Clients
                                    </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 transition-colors text-sm font-medium">
<span className="iconify" data-icon="lucide:file-text"></span>
                                        Documents
                                    </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 transition-colors text-sm font-medium">
<span className="iconify" data-icon="lucide:pie-chart"></span>
                                        Analytics
                                    </div>
</div>
</div>

<div className="flex-1 bg-white p-8 overflow-hidden">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900">Portfolio Overview</h2>
<p className="text-sm text-slate-500 mt-1">Total Assets Under Management</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
</button>
<button className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium">Add Client</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-16 h-16 text-brand-600" data-icon="lucide:trending-up"></span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Total Estate Value</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">$412.5M</h3>
<div className="mt-4 flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded w-fit">
                                            +12.5% vs last month
                                        </div>
</div>

<div className="p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white">
<p className="text-sm font-medium text-slate-500 mb-1">Active Trusts</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">142</h3>
<div className="mt-4 flex items-center text-xs font-medium text-slate-500">
                                            Across 58 Families
                                        </div>
</div>

<div className="p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white">
<p className="text-sm font-medium text-slate-500 mb-1">Pending Signatures</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">8</h3>
<div className="mt-4 flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit">
                                            Action Required
                                        </div>
</div>
</div>

<div className="border border-slate-100 rounded-xl overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex justify-between items-center">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Recent Documents</span>
</div>
<div className="divide-y divide-slate-50">
<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Revocable Living Trust</p>
<p className="text-xs text-slate-500">Updated by Sarah Jenkins • 2h ago</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">Signed</span>
</div>
<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:shield" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Power of Attorney</p>
<p className="text-xs text-slate-500">Updated by Michael Ross • 5h ago</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">Pending</span>
</div>
<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Asset Valuation Report</p>
<p className="text-xs text-slate-500">Uploaded via API • 1d ago</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">Draft</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8">TRUSTED BY INNOVATIVE WEALTH MANAGEMENT FIRMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-8 flex items-center gap-2 font-bold text-xl text-slate-800"><span className="iconify" data-icon="lucide:triangle"></span> VANGUARD</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-slate-800"><span className="iconify" data-icon="lucide:hexagon"></span> CITADEL</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-slate-800"><span className="iconify" data-icon="lucide:circle-dashed"></span> BLACKROCK</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-slate-800"><span className="iconify" data-icon="lucide:box"></span> FIDELITY</div>
<div className="h-8 flex items-center gap-2 font-bold text-xl text-slate-800"><span className="iconify" data-icon="lucide:layers"></span> SCHWAB</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
                        Visual Estate Mapping
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                        Visualize the entire <br/> <span className="text-brand-600">legacy landscape.</span>
</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Move beyond spreadsheets. Our dynamic visualization engine maps assets, beneficiaries, and legal structures into an intuitive, interactive diagram that clients actually understand.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-600">Real-time net worth calculation and projection</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-600">Drag-and-drop asset allocation simulation</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-600">Automated flowcharts for complex trusts</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors" href="#">
                        Learn about visualization tools <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="md:w-1/2 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-white rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
<div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-2xl relative">
<div className="bg-slate-50 rounded-[1.5rem] overflow-hidden border border-slate-100 p-8 min-h-[400px] flex items-center justify-center relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 w-full max-w-sm">
<div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 mb-12 mx-auto w-fit">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<div className="text-sm font-bold text-slate-900">The Thompson Estate</div>
<div className="text-xs text-slate-500">Grantor</div>
</div>
</div>
<svg className="absolute top-16 left-1/2 -translate-x-1/2 h-12 w-64 text-slate-300" fill="none" viewbox="0 0 200 40">
<path d="M100 0 V20 H20 V40" stroke="currentColor" strokeWidth="2"></path>
<path d="M100 0 V20 H180 V40" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="flex justify-between gap-4">
<div className="bg-white p-3 rounded-xl shadow-md border-l-4 border-brand-500 w-36">
<div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Entity</div>
<div className="text-sm font-bold text-slate-900">Family Trust A</div>
<div className="text-xs text-slate-500 mt-1">$2.4M Assets</div>
</div>
<div className="bg-white p-3 rounded-xl shadow-md border-l-4 border-emerald-500 w-36">
<div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Beneficiary</div>
<div className="text-sm font-bold text-slate-900">Sarah &amp; Tom</div>
<div className="text-xs text-slate-500 mt-1">Direct Transfer</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Everything you need to <br/>secure the future.</h2>
<p className="text-slate-500 text-lg">A comprehensive suite of tools designed for the nuances of high-net-worth estate planning.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-500/30">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Bank-Grade Vault Security</h3>
<p className="text-slate-500 leading-relaxed max-w-md">
                            All documents are encrypted with AES-256 and stored in compliant, redundant servers. We employ Zero-Knowledge architecture, ensuring client privacy is never compromised.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 md:opacity-100">
<div className="absolute inset-0 bg-gradient-to-l from-white to-transparent z-10"></div>

<svg className="absolute bottom-[-20px] right-[-20px] w-64 h-64 text-brand-50" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Instant Onboarding</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Import client data directly from CRM systems like Salesforce, Wealthbox, and Redtail.
                    </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Collaborative Access</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Granular permissions for attorneys, CPAs, and family members to access specific vaults.
                    </p>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden text-white">
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-3">White-Label Experience</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                                Your brand, front and center. Customize the portal with your firm's logo, colors, and domain to provide a seamless client experience.
                            </p>
<button className="text-sm font-bold text-brand-400 hover:text-white transition-colors flex items-center gap-2">
                                See customization options <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
<div className="w-full md:w-1/2 bg-slate-800 rounded-xl p-4 border border-slate-700">
<div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-3">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-16 w-full bg-slate-700/50 rounded-lg"></div>
<div className="h-16 w-full bg-slate-700/50 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center">
<div className="flex text-amber-400 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-10 leading-tight">
                "Legacy Suite has completely transformed how we handle intergenerational wealth transfer. The visualization tools alone have saved us hundreds of hours."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-lg">

<svg className="w-full h-full text-slate-300" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div className="text-left">
<div className="font-bold text-slate-900">Jonathan Davies</div>
<div className="text-sm text-slate-500">Managing Partner, Davies &amp; Co. Wealth</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto bg-brand-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-600/30 blur-[100px]"></div>
<div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                    Ready to modernize your practice?
                </h2>
<p className="text-brand-100 text-xl mb-10 font-light">
                    Join over 500+ forward-thinking firms using Legacy Suite to secure and organize over $4B in assets.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg shadow-white/10">
                        Start Your Free Trial
                    </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-700 text-white rounded-full font-bold hover:bg-brand-800 transition-colors">
                        Schedule Consultation
                    </button>
</div>
<p className="mt-8 text-sm text-brand-300 opacity-60">No credit card required for 14-day trial.</p>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 relative">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
<path d="M50 80C50 80 80 60 95 30C100 20 95 5 95 5L50 40L5 5C5 5 0 20 5 30C20 60 50 80 50 80Z" fill="#2563EB"></path>
<circle cx="50" cy="15" fill="#1e3a8a" r="12"></circle>
<path d="M50 80C50 80 65 60 65 45C65 45 50 55 50 55C50 55 35 45 35 45C35 60 50 80 50 80Z" fill="#1e3a8a"></path>
</svg>
</div>
<span className="font-bold text-lg text-slate-900">Legacy Suite</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                        The operating system for modern estate planning. Secure, collaborative, and designed for the future of wealth.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Legacy Suite Inc. All rights reserved.</p>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
