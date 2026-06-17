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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
50: '#F8F9FB',
100: '#F1F3F6',
200: '#E2E6EB',
300: '#CED4DE',
400: '#9AA5B6',
500: '#64748B',
600: '#475569',
700: '#334155',
800: '#1E293B',
900: '#0F172A',
950: '#020617',
},
brand: {
500: '#7c5cff', // Adapted purple/blue from source 2
600: '#6440ff',
}
},
letterSpacing: {
tightest: '-0.04em',
tighter: '-0.02em',
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'appear': 'appear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
appear: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-blue-500 rounded-md flex items-center justify-center text-white font-mono text-xs font-semibold tracking-tighter shadow-lg shadow-brand-500/20">
                    RI
                </div>
<div className="flex flex-col leading-none">
<span className="font-semibold text-sm tracking-tight text-slate-900">Revenue Infrastructure</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#what">What is this</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how">How it works</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#included">Included</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pilot">Pilot</a>
</div>
<div className="flex items-center gap-4">
<a className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all hover:shadow-lg shadow-slate-200" href="#apply">
                    Apply Now
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute top-0 -left-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 -right-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 relative z-10 flex flex-col gap-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Built to convert</span>
</div>
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                    Your Remote Call Center,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">Built &amp; Ready to Sell.</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We build the infrastructure so you can focus on closing deals — not duct-taping tools together. Dialer-ready. Lead flow structured. Agent-ready.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mt-2">
<a className="h-10 px-6 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-200" href="#apply">
                        Book Infrastructure Review
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-10 px-6 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2" href="#pilot">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        See Pilot Structure
                    </a>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center lg:text-left">
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-900">Turnkey Build</span>
<span className="text-[10px] text-slate-500">Built once, used repeatedly</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-900">Operational Clarity</span>
<span className="text-[10px] text-slate-500">Workflows that don't break</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-900">Performance-First</span>
<span className="text-[10px] text-slate-500">Paid pilot, real data</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000">
<div className="relative mx-auto w-[320px] h-[640px] bg-slate-900 rounded-[3rem] shadow-2xl border-[6px] border-slate-800 animate-float overflow-hidden z-10 ring-1 ring-slate-900/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-30 flex justify-center items-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-800/50 mr-2"></div>
<div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
</div>

<div className="w-full h-full bg-slate-50 flex flex-col relative overflow-hidden">

<div className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-end pb-3 px-5 justify-between z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center border border-white shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Power Dialer</div>
<div className="text-[10px] text-green-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Active Session
                                    </div>
</div>
</div>
<div className="px-2 py-1 bg-slate-100 rounded text-[10px] font-mono text-slate-500">00:45</div>
</div>

<div className="flex-1 p-5 space-y-6 overflow-y-auto bg-grid relative flex flex-col">

<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden animate-appear delay-1">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
<div className="flex justify-between items-start mb-2">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-lg font-semibold">
                                        SJ
                                    </div>
<span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium border border-blue-100">
                                        Lead
                                    </span>
</div>
<h3 className="font-semibold text-slate-900">Sarah Jenkins</h3>
<p className="text-xs text-slate-500 mb-4">Agency Owner • San Francisco, CA</p>
<div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
<div className="text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-1 text-slate-400">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-slate-500">Email</span>
</div>
<div className="text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-1 text-blue-500 ring-2 ring-blue-100">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-blue-600 font-medium">Call</span>
</div>
<div className="text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-1 text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-slate-500">Book</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm animate-appear delay-2">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-900">Opening Script</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                                    "Hi Sarah, this is <span className="bg-yellow-50 text-yellow-700 px-1 rounded">[Name]</span>. I saw you're scaling your outbound team and wanted to see if..."
                                </p>
</div>

<div className="animate-appear delay-3">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block pl-2">Next Up</span>
<div className="bg-white/50 p-3 rounded-xl border border-slate-200/50 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500">
                                        MK
                                    </div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-700">Mike K.</div>
<div className="text-[10px] text-slate-400">Consultant</div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 pb-8 flex gap-3">
<button className="flex-1 h-10 bg-red-50 text-red-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
<iconify-icon icon="solar:phone-hang-up-linear" width="16"></iconify-icon>
                                End
                            </button>
<button className="flex-1 h-10 bg-slate-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Qualified
                            </button>
</div>
</div>
</div>

<div className="absolute -right-8 top-40 bg-white/90 backdrop-blur px-4 py-3 rounded-xl border border-slate-100 shadow-xl flex items-center gap-3 animate-bounce z-20 max-w-[180px]" style={{animationDuration: '4s'}}>
<div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CRM Sync</div>
<div className="text-xs font-medium text-slate-800 leading-tight">Lead Saved Automatically</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-white border-t border-slate-100" id="what">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Stop selling from chaos.</h2>
<p className="text-slate-500">If you want "tools", this isn't it. If you want infrastructure that produces revenue, you're in the right place.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200">
<div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-600 mb-6 shadow-sm">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">What this is</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        A turnkey remote call center build-out. You get a structured sales operation: dialer configuration, organized database, lead intake, and SMS/calling workflows.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> JustCall-Ready Dialer
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Clean Database Structure
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Automated Workflows
                        </li>
</ul>
</div>

<div className="relative p-8 rounded-2xl bg-white border border-brand-100 shadow-xl shadow-brand-900/5 overflow-hidden ring-1 ring-brand-500/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-50 to-transparent -z-0"></div>
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-md shadow-brand-200">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Who it's for</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Business owners scaling outbound sales, teams testing a phone-based revenue channel, and operators who want a repeatable engine without the tech headache.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Agencies</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Consultants</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Service Biz</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Outbound Teams</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="how">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-brand-600 font-mono text-xs font-medium tracking-wide uppercase">Process</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mt-2">How we build your engine</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 -z-10 group-hover:text-slate-50 transition-colors">01</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 font-bold">1</div>
<h3 className="font-semibold text-slate-900 mb-2">Build</h3>
<p className="leading-relaxed text-sm text-slate-500">We set up the call center infrastructure (Call workflow + database) designed for speed.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 -z-10 group-hover:text-slate-50 transition-colors">02</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 font-bold">2</div>
<h3 className="font-semibold text-slate-900 mb-2">Load</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leads are formatted, uploaded, and organized correctly so nothing breaks during operations.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 -z-10 group-hover:text-slate-50 transition-colors">03</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 font-bold">3</div>
<h3 className="font-semibold text-slate-900 mb-2">Activate</h3>
<p className="text-sm text-slate-500 leading-relaxed">SMS &amp; calling sequences go live to create contact and momentum immediately.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 -z-10 group-hover:text-brand-50 transition-colors">04</div>
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4 font-bold">4</div>
<h3 className="font-semibold text-slate-900 mb-2">Pilot</h3>
<p className="text-sm text-slate-500 leading-relaxed">We run a controlled paid pilot to validate results with real data before you scale.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="included">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-brand-600 font-mono text-xs font-medium tracking-wide uppercase">Deliverables</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mt-2">What's included in the build</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Infrastructure</h3>
<p className="text-sm text-slate-500 leading-relaxed">Remote call center architecture designed for stability and consistency.</p>
</div>

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">JustCall Dialer</h3>
<p className="text-sm text-slate-500 leading-relaxed">Configured calling flow designed for execution. No tech overwhelm.</p>
</div>

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Database Org</h3>
<p className="text-sm text-slate-500 leading-relaxed">Intake structure so leads don't get lost, duplicated, or mismanaged.</p>
</div>

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">SMS + Call Flow</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sequencing that creates contact and movement without guessing.</p>
</div>

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:user-check-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Agent-Ready</h3>
<p className="text-sm text-slate-500 leading-relaxed">Organized so a remote agent can plug in and follow the system cleanly.</p>
</div>

<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Documentation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Repeatability notes so your operation stays stable as you grow.</p>
</div>
</div>
<div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3 text-sm text-yellow-800">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:info-circle-linear" width="18"></iconify-icon>
<span className=""> This is infrastructure, not staffing. If you need staffing, we can discuss it separately.</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="pilot">
<div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-brand-400 mb-6">
                        The Pilot Model
                    </div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Testing is normal.<br/>But testing is never free.</h2>
<p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                        We use a paid pilot so you can validate performance with real data, while protecting proprietary systems.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Protected Process</h4>
<p className="text-sm text-slate-500 mt-1">Paid pilot = commitment + clarity + protection for both sides.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-400" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Investment Range</h4>
<p className="text-sm text-slate-500 mt-1">Build-outs typically range from mid-four to low-five figures.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-950 rounded-xl border border-slate-800 p-1 shadow-2xl relative">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="bg-slate-900/50 rounded-lg p-6 overflow-hidden relative z-10">
<div className="flex gap-1.5 mb-6">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-sm font-mono text-slate-300">01_setup_infra.sh</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-sm font-mono text-slate-300">02_load_data.json</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-sm font-mono text-slate-300">03_activate_dialer.exe</span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-brand-400 font-mono animate-pulse">RUNNING</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-800">
<div className="text-xs font-mono text-slate-500 mb-2">// Pilot Outcomes</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-800 p-2 rounded text-center">
<div className="text-xs text-slate-400">Connect Rate</div>
<div className="text-white font-semibold">Validated</div>
</div>
<div className="bg-slate-800 p-2 rounded text-center">
<div className="text-xs text-slate-400">Lead Quality</div>
<div className="text-white font-semibold">Confirmed</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="apply">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Apply to Build Your Call Center</h2>
<p className="text-slate-500 mt-4">Fill this out and we'll schedule a 15-minute infrastructure review.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Full Name</label>
<input className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
<input className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Phone</label>
<input className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Role</label>
<select className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all">
<option>Select one...</option>
<option>Agency Owner</option>
<option>Business Owner</option>
<option>Sales Leader</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">What are you selling?</label>
<textarea className="w-full h-24 px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" placeholder="We sell marketing services to real estate agents..."></textarea>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Timeline</label>
<select className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all">
<option>Immediately (0-2 weeks)</option>
<option>Soon (2-6 weeks)</option>
<option>Planning (6+ weeks)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Budget Range</label>
<select className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all">
<option>Mid-four figures</option>
<option>Low-five figures</option>
<option>Not sure</option>
</select>
</div>
</div>
<button className="w-full h-12 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 mt-4">
                        Submit Application
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400">
                        Paid pilot required for testing. By submitting, you agree to be contacted.
                    </p>
</form>
</div>

<div className="mt-16 text-center">
<p className="text-sm font-medium text-slate-900 mb-6">Who this is NOT for:</p>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-4 py-2 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-100 flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Free access seekers
                    </div>
<div className="px-4 py-2 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-100 flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> System-copy mentality
                    </div>
<div className="px-4 py-2 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-100 flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> No budget for infrastructure
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-mono text-xs font-bold">
                    RI
                </div>
<span className="font-semibold text-sm text-slate-900">Revenue Infrastructure</span>
</div>
<div className="text-xs text-slate-500">
                © 2024 Revenue Infrastructure. Turnkey Remote Call Center Build-Out.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
