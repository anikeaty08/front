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
      

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] mix-blend-plus-lighter blur-[1px]">
<iconify-icon className="text-slate-400" height="800" icon="solar:scale-linear" width="800"></iconify-icon>
</div>

<svg className="fixed -top-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-[0.03] rotate-[15deg] mix-blend-screen z-0" preserveaspectratio="none" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="4" id="fabric" patternunits="userSpaceOnUse" width="4">
<path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" opacity="0.5" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<g fill="white">
<rect height="20" width="400" x="0" y="0"></rect>
<rect height="20" width="400" x="0" y="40"></rect>
<rect height="20" width="400" x="0" y="80"></rect>
<rect height="20" width="400" x="0" y="120"></rect>
<rect height="20" width="400" x="0" y="160"></rect>
<rect height="20" width="400" x="0" y="200"></rect>
<rect height="20" width="400" x="0" y="240"></rect>
<rect height="20" width="400" x="0" y="280"></rect>
</g>
<rect fill="white" height="140" opacity="0.9" width="160" x="0" y="0"></rect>
<rect fill="url(#fabric)" height="300" width="400" x="0" y="0"></rect>
</svg>

<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-10 h-10 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 shadow-sm group-hover:border-slate-500 transition-colors">
<span className="text-xs font-medium tracking-tight">MR</span>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-200 tracking-tight">Attorney Marcus Reed</span>
<iconify-icon className="text-slate-500 group-hover:text-slate-300 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="text-xs text-slate-500 font-light tracking-wide">Senior Legal Counsel</div>
</div>
</div>

<div className="flex items-center gap-6 bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-full px-5 py-2">
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">System Active</span>
</div>
<div className="w-px h-4 bg-slate-800"></div>
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-light">U.S. Jurisdiction Encrypted</span>
</div>
</div>
</header>

<section className="mb-8">
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-800/50 flex items-center justify-center shadow-inner">
<span className="text-xs font-medium text-blue-200 tracking-tighter">LDRS</span>
</div>
                Legal Document Request System
            </h1>
<p className="text-sm text-slate-400 mt-2 font-light">Secure Judicial Access <span className="mx-2 text-slate-700">•</span> Verified Legal Processing <span className="mx-2 text-slate-700">•</span> U.S. Jurisdiction</p>
<div className="w-full h-px bg-gradient-to-r from-slate-800 via-slate-700/30 to-transparent mt-8 mb-8"></div>
</section>

<section className="mb-10 flex flex-col lg:flex-row gap-4">

<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-900/40 border border-slate-800 text-slate-200 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:bg-slate-900/80 transition-all shadow-sm placeholder:text-slate-600 font-light" placeholder="Search legal files, forms, or case references..." type="text"/>
</div>

<div className="flex gap-4">
<div className="relative min-w-[160px]">
<select className="w-full appearance-none bg-slate-900/40 border border-slate-800 text-slate-300 text-sm font-light rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-slate-600 transition-all cursor-pointer">
<option>All Case Types</option>
<option>Civil Litigation</option>
<option>Criminal Defense</option>
<option>Corporate Law</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative min-w-[140px]">
<select className="w-full appearance-none bg-slate-900/40 border border-slate-800 text-slate-300 text-sm font-light rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-slate-600 transition-all cursor-pointer">
<option>Any Status</option>
<option>Available</option>
<option>Restricted</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-amber-500/80 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:scale-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Civil Litigation Case File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Court Approved</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,400</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-blue-400/80 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:home-angle-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Property Ownership Transfer Form</h3>
<p className="text-xs text-slate-500 font-light mb-6">Verified Document</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,850</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:passport-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Immigration Appeal Request</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Processing</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,200</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-red-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-red-400/80 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-red-500/10 text-red-400/90 border border-red-500/20 font-light tracking-wide">Restricted</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Criminal Defense Case File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Clearance Required</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$3,500</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:briefcase-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Business Contract Registration</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Form</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$980</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer overflow-hidden ring-1 ring-transparent hover:ring-blue-500/20" onclick="document.getElementById('success-modal').classList.remove('opacity-0', 'pointer-events-none'); document.getElementById('success-modal-card').classList.remove('scale-95', 'translate-y-4'); document.getElementById('success-modal-card').classList.add('scale-100', 'translate-y-0');" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-pink-400/80 group-hover:text-pink-400 group-hover:border-pink-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:hearts-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug relative z-10">Marriage Registration Form</h3>
<p className="text-xs text-slate-500 font-light mb-6 relative z-10">Verified Document</p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,050</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:document-broken-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Divorce Settlement Documentation</h3>
<p className="text-xs text-slate-500 font-light mb-6">Court Approved</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,200</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-indigo-400/80 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400/90 border border-amber-500/20 font-light tracking-wide">Priority Filing</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Child Custody Application</h3>
<p className="text-xs text-slate-500 font-light mb-6">Judicial Review Required</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,750</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-emerald-400/80 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
<iconify-icon className="text-lg" icon="solar:banknotes-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Estate Probate File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Verified Document</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,600</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:calculator-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Tax Compliance Filing</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Form</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,300</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-blue-400/80 group-hover:text-blue-400 transition-all">
<iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Corporate Incorporation File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Verified Document</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,150</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-yellow-400/80 group-hover:text-yellow-400 transition-all">
<iconify-icon className="text-lg" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Intellectual Property Claim</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Processing</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,800</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:user-cross-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Employment Dispute Case</h3>
<p className="text-xs text-slate-500 font-light mb-6">Court Approved</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,650</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Insurance Claim Request</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Form</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,400</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-cyan-400/80 group-hover:text-cyan-400 transition-all">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400/90 border border-blue-500/20 font-light tracking-wide">Immediate Access</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Notarization Document Request</h3>
<p className="text-xs text-slate-500 font-light mb-6">Auto-Approved</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$450</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-red-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-red-500/10 text-red-400/90 border border-red-500/20 font-light tracking-wide">Restricted</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Land Dispute Resolution File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Clearance Required</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,300</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Visa Sponsorship Form</h3>
<p className="text-xs text-slate-500 font-light mb-6">Standard Form</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$1,100</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-amber-500/80 group-hover:text-amber-400 transition-all">
<iconify-icon className="text-lg" icon="solar:gavel-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Arbitration Case File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Court Approved</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,750</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:chart-square-down-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400/90 border border-amber-500/20 font-light tracking-wide">Priority Filing</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Bankruptcy Filing Request</h3>
<p className="text-xs text-slate-500 font-light mb-6">Judicial Review Required</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$2,900</span>
</div>
</div>

<div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden" title="Click to request file">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-all">
<iconify-icon className="text-lg" icon="solar:file-text-linear"></iconify-icon>
</div>
<span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 font-light tracking-wide">Available</span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-1 leading-snug">Court Hearing Submission File</h3>
<p className="text-xs text-slate-500 font-light mb-6">Verified Document</p>
<div className="mt-auto flex justify-between items-end">
<span className="text-xs text-slate-600 font-light">Processing Fee</span>
<span className="text-base font-medium text-slate-100 tracking-tight">$950</span>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300" id="success-modal">

<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer" onclick="document.getElementById('success-modal').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('success-modal-card').classList.add('scale-95', 'translate-y-4'); document.getElementById('success-modal-card').classList.remove('scale-100', 'translate-y-0');"></div>

<div className="relative w-full max-w-md bg-[#0f172a] border border-slate-700/60 rounded-2xl shadow-2xl p-6 sm:p-8 transform scale-95 translate-y-4 transition-all duration-300 overflow-hidden" id="success-modal-card">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex items-start gap-4 mb-6">
<div className="shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-2xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="pt-1">
<h2 className="text-lg font-medium text-slate-100 tracking-tight mb-1">Request Successfully Submitted</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Marriage Registration File for <span className="text-slate-200 font-medium">Kristi Mea Williams</span> has been successfully requested and forwarded for judicial processing.
                    </p>
</div>
</div>

<div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 mb-6 relative">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '12px 12px'}}></div>
<ul className="space-y-3 relative z-10">
<li className="flex justify-between items-center text-xs">
<span className="text-slate-500 font-light">Requested By</span>
<span className="text-slate-200 font-medium tracking-tight">Attorney Marcus Reed</span>
</li>
<li className="flex justify-between items-center text-xs">
<span className="text-slate-500 font-light">Client Name</span>
<span className="text-slate-200 font-medium tracking-tight">Kristi Mea Williams</span>
</li>
<li className="flex justify-between items-center text-xs">
<span className="text-slate-500 font-light">Request ID</span>
<span className="text-slate-200 font-medium font-mono tracking-tight">#LDRS-902184</span>
</li>
<li className="flex justify-between items-center text-xs">
<span className="text-slate-500 font-light">Processing Status</span>
<span className="text-amber-400 font-medium tracking-tight flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Pending Authorization
                        </span>
</li>
<li className="flex justify-between items-center text-xs pt-3 mt-3 border-t border-slate-800">
<span className="text-slate-500 font-light">Timestamp</span>
<span className="text-slate-400 font-light tracking-wide">Mar 19, 2026 • 14:32 PM</span>
</li>
</ul>
</div>

<button className="w-full bg-slate-100 hover:bg-white text-slate-900 font-medium text-sm py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]" onclick="document.getElementById('success-modal').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('success-modal-card').classList.add('scale-95', 'translate-y-4'); document.getElementById('success-modal-card').classList.remove('scale-100', 'translate-y-0');">
                Acknowledge &amp; Close
            </button>
</div>
</div>

    </>
  );
}
