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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-2/3 h-2/3 bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
</div>

<main className="relative z-10 max-w-5xl mx-auto my-0 md:my-16 glass md:rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 border border-white/60 overflow-hidden ring-1 ring-slate-900/5">

<header className="relative p-8 md:p-14 border-b border-indigo-50/50 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
<div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 relative">

<div className="flex-1 space-y-8 text-center md:text-left w-full">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold tracking-wide uppercase shadow-sm">
<iconify-icon height="14" icon="solar:star-linear" width="14"></iconify-icon>
                        Executive Portfolio
                    </div>
<div className="space-y-3">
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-slate-800 leading-[1.1]">
                            Claire <span className="gradient-text font-medium">Mok</span>
</h1>
<h2 className="text-xl md:text-2xl font-light text-slate-500 tracking-tight">Executive Assistant | Administration &amp; Finance</h2>
</div>
<div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors group bg-white/60 px-4 py-2.5 rounded-xl border border-slate-200/60 hover:border-indigo-200 hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200" href="mailto:Clairemokk@gmail.com">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                            Clairemokk@gmail.com
                        </a>
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/60 px-4 py-2.5 rounded-xl border border-slate-200/60 shadow-sm">
<iconify-icon className="text-slate-400" height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                            +852 6340 0444
                        </div>
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/60 px-4 py-2.5 rounded-xl border border-slate-200/60 shadow-sm">
<iconify-icon className="text-slate-400" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
                            Hong Kong
                        </div>
</div>
</div>

<div className="relative shrink-0 group">

<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 via-purple-100 to-pink-100 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-700"></div>

<div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-[6px] border-white/40 ring-1 ring-white/50 rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out transform-gpu">

<img alt="Claire Mok" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><img alt="Claire Mok" className="group-hover:scale-100 transition-transform duration-700 w-full h-full object-cover scale-105 cursor-pointer" onclick="window.location.href='/file:///Users/mokszeman/Desktop/profile.JPG'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df06dd01-6965-4bff-a418-f35ed84ad743_1600w.png"/>

</div>

<div className="absolute -bottom-6 -left-8 bg-white/90 backdrop-blur-xl pl-4 pr-5 py-3 rounded-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-bounce duration-[3000ms] hidden md:flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
<iconify-icon height="20" icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</span>
<span className="text-sm font-semibold text-slate-700">Open to Work</span>
</div>
</div>
</div>
</div>
</header>
<div className="p-8 md:p-14 space-y-20 bg-gradient-to-b from-white/40 to-white/90">

<section className="">
<div className="flex items-center gap-4 mb-8 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-indigo-500 group-hover:scale-105 transition-transform duration-300 border border-indigo-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">About Me</h3>
</div>
<p className="text-lg leading-relaxed text-slate-500 font-light pl-4 md:pl-6 border-l-2 border-indigo-100 max-w-3xl">
                    I’m a dedicated and detail-oriented administrative professional with extensive experience supporting executive teams and managing complex operational, financial, and administrative functions. My background includes over six years in administration, executive coordination, and financial management across corporate environments, supported by a Bachelor of Arts in Economics from Simon Fraser University, Canada.
                </p>
</section>

<section className="">
<div className="flex items-center gap-4 mb-12 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-50 to-pink-50 flex items-center justify-center text-fuchsia-500 group-hover:scale-105 transition-transform duration-300 border border-fuchsia-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:case-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Work Experience</h3>
</div>
<div className="space-y-12 relative">

<div className="absolute left-[23px] top-4 bottom-10 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent"></div>

<div className="relative pl-14 group">
<div className="absolute left-[14px] top-2.5 w-5 h-5 bg-indigo-50 border-[3px] border-indigo-500 rounded-full z-10 ring-4 ring-white shadow-sm"></div>
<div className="bg-white/60 p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-lg transition-all hover:bg-white/80 duration-300 hover:border-indigo-100/50">
<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-3">
<h4 className="font-medium text-slate-800 text-xl tracking-tight">Executive Assistant</h4>
<span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100/50 w-fit">Dec 2023 – Present</span>
</div>
<div className="text-base font-medium text-slate-400 mb-6 flex items-center gap-2">
<iconify-icon height="18" icon="solar:buildings-2-linear" width="18"></iconify-icon>
                                Tpiz Resources Limited
                            </div>
<ul className="space-y-3.5 text-base font-light text-slate-600/90">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Organized and coordinated shareholder and executive meetings, ensuring compliance with corporate governance.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Managed senior management’s travel arrangements, accommodations, and logistics.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Assisted with processing tax forms, banking transactions, and monthly reimbursements.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Maintained company structure charts and statutory documents.</span>
</li>
</ul>
</div>
</div>

<div className="relative pl-14 group">
<div className="absolute left-[14px] top-2.5 w-5 h-5 bg-purple-50 border-[3px] border-purple-500 rounded-full z-10 ring-4 ring-white shadow-sm"></div>
<div className="bg-white/60 p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-lg transition-all hover:bg-white/80 duration-300 hover:border-purple-100/50">
<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-3">
<h4 className="font-medium text-slate-800 text-xl tracking-tight">Administration Assistant</h4>
<span className="text-xs font-semibold uppercase tracking-wide text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100/50 w-fit">Oct 2017 – Dec 2023</span>
</div>
<div className="text-base font-medium text-slate-400 mb-6 flex items-center gap-2">
<iconify-icon height="18" icon="solar:buildings-2-linear" width="18"></iconify-icon>
                                Penny Auto Body &amp; Glass
                            </div>
<ul className="space-y-3.5 text-base font-light text-slate-600/90">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Handled daily administrative and reception duties.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Coordinated meetings and prepared documentation for over 100 organizational events.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Processed payroll, bookkeeping, and contract renewals.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Supervised vehicle maintenance scheduling and managed budgets.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center text-violet-600 group-hover:scale-105 transition-transform duration-300 border border-violet-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Key Achievements</h3>
</div>
<div className="space-y-6">

<div className="bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 p-8 md:p-10 relative group hover:border-violet-200/50">

<div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 text-xs font-bold text-violet-500 mb-4 uppercase tracking-widest">
<iconify-icon height="14" icon="solar:calendar-bold" width="14"></iconify-icon>
                                Annual Milestone
                            </div>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-3">
<h4 className="text-2xl font-medium text-slate-800 tracking-tight">Penney 40th Annual Dinner</h4>
<div className="inline-flex items-center gap-2 text-slate-500 font-normal text-sm bg-white/50 px-3 py-1 rounded-full border border-slate-100">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                                    Vancouver Aquarium
                                </div>
</div>
<div className="mt-5 mb-8 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative group">
<img alt="Penney 40th Annual Dinner at Vancouver Aquarium" className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70e1044e-d65f-4abd-98ce-ac03d160a5c9_1600w.png"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
</div>
<p className="text-lg font-light text-slate-600 leading-relaxed mb-8 border-l-2 border-violet-200 pl-5 mt-4">
                                Successfully hosted and orchestrated the milestone 40th-anniversary celebration for Penney Auto Body &amp; Glass. Responsible for full-cycle event management including venue coordination at the Vancouver Aquarium, entertainment logistics (DJ &amp; A/V setup), and ensuring an unforgettable experience for guests.
                            </p>
<div className="flex flex-wrap gap-2.5">
<span className="px-3.5 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium border border-violet-100/50">Event Hosting</span>
<span className="px-3.5 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium border border-violet-100/50">Vendor Management</span>
<span className="px-3.5 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium border border-violet-100/50">Logistics</span>
</div>
</div>
</div>

<div className="bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 p-8 md:p-10 relative group hover:border-red-200/50">

<div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center gap-2 text-xs font-bold text-red-500 mb-4 uppercase tracking-widest">
<iconify-icon height="14" icon="solar:medal-star-bold" width="14"></iconify-icon>
                                    Strategic Milestone
                                </div>
<h4 className="text-2xl font-medium text-slate-800 tracking-tight mb-2">Tesla Certification Acquisition</h4>
<div className="text-sm font-normal text-slate-500 mb-6">Penney Auto Body &amp; Glass</div>
<p className="text-lg font-light text-slate-600 leading-relaxed mb-6 border-l-2 border-red-200 pl-5">
                                    Led the comprehensive application and compliance process to secure the prestigious <strong>Tesla Approved Body Shop</strong> certification. This strategic initiative directly opened a high-value market segment, resulting in a significant boost in monthly sales volume and establishing the company as a premium service provider in the EV sector.
                                </p>
<div className="flex flex-wrap gap-2.5">
<span className="px-3.5 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100/50">Business Development</span>
<span className="px-3.5 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100/50">Sales Growth</span>
<span className="px-3.5 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100/50">Compliance</span>
</div>
</div>

<div className="md:w-1/3 shrink-0">
<div className="h-full min-h-[200px] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group-hover:from-red-50 group-hover:to-slate-100 transition-colors duration-500">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon height="120" icon="solar:bolt-circle-bold" width="120"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-red-600 mb-4 relative z-10">
<iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h5 className="font-bold text-slate-800 text-lg mb-1 relative z-10">Tesla Approved</h5>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide relative z-10">Body Shop Certification</p>
</div>
</div>
</div>
</div>

<div className="bg-white/60 rounded-3xl overflow-hidden border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 p-8 md:p-10 relative group hover:border-blue-200/50">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center gap-2 text-xs font-bold text-blue-500 mb-4 uppercase tracking-widest">
<iconify-icon height="14" icon="solar:chart-square-bold" width="14"></iconify-icon>
                                    Process Optimization
                                </div>
<h4 className="text-2xl font-medium text-slate-800 tracking-tight mb-2">ICBC Claims Management</h4>
<div className="text-sm font-normal text-slate-500 mb-6">Financial Operations</div>
<p className="text-lg font-light text-slate-600 leading-relaxed mb-6 border-l-2 border-blue-200 pl-5">
                                    Improved claims management to minimize processing delays and prevent payment omissions from ICBC. Implemented streamlined documentation workflows to ensure accuracy and faster turnaround times for receivables.
                                </p>
<div className="flex flex-wrap gap-2.5">
<span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100/50">Risk Mitigation</span>
<span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100/50">Workflow Efficiency</span>
<span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100/50">Revenue Assurance</span>
</div>
</div>

<div className="md:w-1/3 shrink-0">
<div className="h-full min-h-[200px] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/60 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group-hover:from-blue-50 group-hover:to-white transition-colors duration-500">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon height="120" icon="solar:bill-list-bold" width="120"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 mb-4 relative z-10">
<iconify-icon height="32" icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<h5 className="font-bold text-slate-800 text-lg mb-1 relative z-10">Zero Omissions</h5>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide relative z-10">Processing Target</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="grid md:grid-cols-2 gap-8 md:gap-10">

<section className="flex flex-col h-full">
<div className="flex items-center gap-4 mb-8 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-105 transition-transform duration-300 border border-teal-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:mortarboard-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Education</h3>
</div>
<div className="bg-white/60 rounded-3xl p-8 border border-white/60 hover:border-teal-100/50 transition-all shadow-sm flex-1 hover:shadow-lg duration-300">
<h4 className="font-medium text-slate-800 text-lg tracking-tight">Bachelor of Arts in Economics</h4>
<div className="text-base text-teal-600 mb-5 font-normal">Simon Fraser University, Canada</div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-6 bg-slate-50 inline-block px-3 py-1.5 rounded-lg border border-slate-200/50">Jun 2013 – Jun 2017</div>
<p className="text-base leading-relaxed text-slate-500 font-light">
<span className="font-semibold text-slate-700">Relevant Courses:</span> Microeconomics, Macroeconomics, Game Theory, Labor Economics, Data Visualization, Environmental Economics, and Economic Analysis.
                        </p>
</div>
</section>

<section className="flex flex-col h-full">
<div className="flex items-center gap-4 mb-8 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform duration-300 border border-orange-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Skills</h3>
</div>
<div className="bg-white/60 rounded-3xl p-8 border border-white/60 hover:border-orange-100/50 transition-all shadow-sm flex-1 space-y-8 hover:shadow-lg duration-300">
<div className="">
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
<iconify-icon height="14" icon="solar:globe-linear" width="14"></iconify-icon> Languages
                            </h5>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 rounded-xl border border-slate-200/60 text-sm font-medium text-slate-600 bg-white/80 shadow-sm hover:border-orange-200 transition-colors hover:-translate-y-0.5 transform duration-200 cursor-default">Mandarin <span className="text-slate-400 font-light ml-1.5">Native</span></span>
<span className="px-4 py-2 rounded-xl border border-slate-200/60 text-sm font-medium text-slate-600 bg-white/80 shadow-sm hover:border-orange-200 transition-colors hover:-translate-y-0.5 transform duration-200 cursor-default">Cantonese <span className="text-slate-400 font-light ml-1.5">Native</span></span>
<span className="px-4 py-2 rounded-xl border border-slate-200/60 text-sm font-medium text-slate-600 bg-white/80 shadow-sm hover:border-orange-200 transition-colors hover:-translate-y-0.5 transform duration-200 cursor-default">English <span className="text-slate-400 font-light ml-1.5">Advanced</span></span>
</div>
</div>
<div className="">
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
<iconify-icon height="14" icon="solar:laptop-linear" width="14"></iconify-icon> Software
                            </h5>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 rounded-xl border border-slate-200/60 text-sm text-slate-600 bg-white/80 shadow-sm hover:border-orange-200 transition-colors flex items-center gap-2 hover:-translate-y-0.5 transform duration-200 cursor-default">
<iconify-icon className="text-blue-500" height="16" icon="solar:file-text-linear" width="16"></iconify-icon> MS Office
                                </span>
<span className="px-4 py-2 rounded-xl border border-slate-200/60 text-sm text-slate-600 bg-white/80 shadow-sm hover:border-orange-200 transition-colors hover:-translate-y-0.5 transform duration-200 cursor-default">QuickBooks</span>
</div>
</div>
</div>
</section>
</div>
</div>

<footer className="bg-slate-50/50 border-t border-indigo-100/50 py-12 text-center backdrop-blur-sm">
<div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white border border-indigo-50 shadow-sm mb-6">
<span className="text-2xl font-bold tracking-tight text-slate-800">CM</span>
</div>
<p className="text-sm font-light text-slate-400">© 2024 Claire Mok — All Rights Reserved</p>
</footer>
</main>

    </>
  );
}
