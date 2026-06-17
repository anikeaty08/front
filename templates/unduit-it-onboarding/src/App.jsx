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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C4DEF3]/20 rounded-full blur-[100px] mix-blend-multiply"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ffa005]/5 rounded-full blur-[100px] mix-blend-multiply"></div>
</div>

<main className="relative z-10 max-w-3xl mx-auto mt-8 md:mt-12 bg-white/95 backdrop-blur-sm shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-900/5">

<header className="bg-[#0C1C2C] text-white p-8 md:p-10 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#194B73] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffa005] rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">

<div className="mb-8">
<img alt="unduit" className="h-8 w-auto object-contain" onerror="this.style.display='none'; document.getElementById('logo-fallback').style.display='block'" src="logo.png"/>
<div className="hidden font-semibold text-2xl tracking-tight text-white select-none" id="logo-fallback">
                        undu<span className="text-[#ffa005]">it</span>
</div>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-3 text-white">
                    The Only New Employee <br/>
<span className="text-[#ffa005]">IT Onboarding Checklist</span>
</h1>
<p className="text-[#C4DEF3] text-base font-light max-w-xl leading-relaxed opacity-90">
                    A practical playbook for IT and HR teams in distributed enterprises to ensure zero downtime on day one.
                </p>
</div>
</header>

<section className="bg-[#F8FAFC] border-b border-slate-100 px-8 py-6">
<div className="flex flex-col sm:flex-row gap-4 items-start">
<div className="shrink-0 mt-0.5 text-[#194B73]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="info"></i>
</div>
<div>
<h3 className="text-[#0C1C2C] font-medium text-sm uppercase tracking-wider mb-2">How to use this guide</h3>
<ul className="space-y-1.5 text-base text-slate-500 font-normal">
<li className="flex items-start gap-2.5">
<span className="mt-2 w-1 h-1 bg-[#ffa005] rounded-full"></span>
<span>Designed for <strong className="font-medium text-slate-700">IT, HR, and Managers</strong> to synchronize efforts.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-2 w-1 h-1 bg-[#ffa005] rounded-full"></span>
<span>Run this workflow specifically for each new hire.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-2 w-1 h-1 bg-[#ffa005] rounded-full"></span>
<span><span className="text-[#194B73] underline decoration-[#ffa005]/30 underline-offset-2 cursor-pointer hover:text-[#ffa005] transition-colors">Save a copy</span> in your ITSM or HRIS for compliance records.</span>
</li>
</ul>
</div>
</div>
</section>

<div className="p-8 md:p-10 space-y-12">

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">1. Preparation &amp; Logistics</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#C4DEF3]/20 text-[#194B73] border border-[#C4DEF3]/30">
<i className="w-3 h-3 mr-1.5 opacity-70 stroke-[1.5]" data-lucide="clock"></i> 7–14 days before start
                    </span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
<div className="group/input relative">
<input className="block w-full px-0 py-2 text-base text-[#0C1C2C] bg-transparent border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffa005] peer transition-colors" id="owner" placeholder=" " type="text"/>
<label className="absolute text-xs text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa005] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="owner">Owner</label>
</div>
<div className="group/input relative">
<input className="block w-full px-0 py-2 text-base text-[#0C1C2C] bg-transparent border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffa005] peer transition-colors" id="date" type="date"/>
<label className="absolute text-xs text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa005] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="date">Due Date</label>
</div>
<div className="group/input relative">
<input className="block w-full px-0 py-2 text-base text-[#0C1C2C] bg-transparent border-b border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffa005] peer transition-colors" id="notes" placeholder=" " type="text"/>
<label className="absolute text-xs text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa005] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="notes">Notes</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Verify the signed offer letter and confirm the calendar start date.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Record the new teammate's physical address for hardware shipping.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Determine the job role to identify required hardware specifications and software licenses.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Select appropriate laptop and peripherals from inventory or initiate procurement.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Provision the device in your MDM (Mobile Device Management) system.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Create the primary user account and generate temporary credentials.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Assign user to correct groups (Slack channels, Email distribution lists, File access).</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Draft a welcome email containing first-day login instructions.</span>
</label>
</div>
</section>

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">2. Shipping &amp; Asset Management</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#C4DEF3]/20 text-[#194B73] border border-[#C4DEF3]/30">
<i className="w-3 h-3 mr-1.5 opacity-70 stroke-[1.5]" data-lucide="truck"></i> 5–7 days before start
                    </span>
</div>
<div className="space-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Validate shipping address accuracy.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Affix asset tag and record details (Serial Number, Model, User) in the Asset Register.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Securely pack hardware with return labels and instructions.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Ship via tracked service and email the tracking number to the user.</span>
</label>
</div>
</section>

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">3. Access Smoke Test</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#C4DEF3]/20 text-[#194B73] border border-[#C4DEF3]/30">
<i className="w-3 h-3 mr-1.5 opacity-70 stroke-[1.5]" data-lucide="shield-check"></i> 3–5 days before start
                    </span>
</div>
<div className="space-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Verify shipment delivery status.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Test account credentials (SSO, Email, VPN) to ensure access is active.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Pre-configure MFA (Multi-Factor Authentication) enrollment policy.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Send the welcome guide including "Unboxing &amp; First Login" steps.</span>
</label>
</div>
</section>

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">4. Day One (First Login)</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#ffa005] text-white shadow-sm shadow-orange-500/30">
<i className="w-3 h-3 mr-1.5 stroke-[1.5]" data-lucide="calendar"></i> Today
                    </span>
</div>
<div className="space-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Confirm successful hardware unboxing and boot-up.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Assist with Wi-Fi connection and initial user authentication.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Verify the device has enrolled in MDM policies automatically.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Guide the user through MFA setup and initial password reset.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Test core communications: Email, Slack, and Calendar access.</span>
</label>
</div>
</section>

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">5. First Week Stabilization</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#C4DEF3]/20 text-[#194B73] border border-[#C4DEF3]/30">
<i className="w-3 h-3 mr-1.5 opacity-70 stroke-[1.5]" data-lucide="activity"></i> Week 1
                    </span>
</div>
<div className="space-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Confirm functionality of all role-specific software tools.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Validate security posture: Encryption active, Antivirus running, Firewall on.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Audit asset and user records to ensure synchronization across HRIS and IT systems.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Collect qualitative feedback on the onboarding experience.</span>
</label>
</div>
</section>

<section className="group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-slate-100/80">
<h2 className="text-lg font-medium text-[#0C1C2C] tracking-tight">6. 30–90 Day Review</h2>
<span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#C4DEF3]/20 text-[#194B73] border border-[#C4DEF3]/30">
<i className="w-3 h-3 mr-1.5 opacity-70 stroke-[1.5]" data-lucide="trending-up"></i> Post-Onboarding
                    </span>
</div>
<div className="space-y-4">
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Schedule check-ins (Day 30/60/90) to adjust permissions or tools as needed.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Verify completion of mandatory compliance and security training.</span>
</label>
<label className="flex items-start gap-3.5 cursor-pointer group/item select-none relative pl-1">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-transition shrink-0 mt-1 h-4 w-4 rounded border border-slate-300 bg-white peer-checked:bg-[#ffa005] peer-checked:border-[#ffa005] flex items-center justify-center shadow-sm">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all stroke-[2]" data-lucide="check"></i>
</div>
<span className="text-base text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors duration-300">Update the onboarding playbook based on lessons learned.</span>
</label>
</div>
</section>
</div>

<footer className="bg-slate-50 border-t border-slate-200 p-6 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide">
                © <span id="year"></span> Unduit. All rights reserved.
            </p>
</footer>
</main>


    </>
  );
}
