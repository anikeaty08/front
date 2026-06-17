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
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-blue-950 flex items-center justify-center rounded-sm">
<span className="text-white font-bold text-xs tracking-tighter">TMB</span>
</div>
<span className="font-semibold text-blue-950 tracking-tight text-lg">TECHNICAL MB</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-blue-950 transition-colors" href="#expertise">Global Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-950 transition-colors" href="#method">The Method</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-950 transition-colors" href="#reports">Technical Reports</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-950 transition-colors" href="#company">Company</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-blue-950" href="#">Client Login</a>
<a className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-medium tracking-wide rounded transition-colors shadow-sm" href="#contact">
                    REQUEST AUDIT
                </a>
</div>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-950">

<div className="absolute inset-0 z-0">

<img alt="Vessel at sea" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-blue-100 uppercase tracking-wide">Operability Restitution Experts</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm">
                        Engineering of <br/>
<span className="text-blue-200">Continuity.</span>
</h1>
<p className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-lg">
                        We transform complex maritime repairs into standardized, certified procedures. Reducing dry dock dependency by 40% while ensuring ISO compliance and fleet continuity.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-950 text-sm font-semibold rounded hover:bg-slate-100 transition-colors shadow-lg" href="#contact">
                            Start Tender Process
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-blue-400/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
<i className="w-4 h-4 mr-2" data-lucide="download"></i>
                            Corporate Dossier
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-blue-800/50 grid grid-cols-3 gap-8 text-white">
<div>
<p className="text-3xl font-medium tracking-tight">0</p>
<p className="text-xs text-blue-300 font-medium uppercase mt-1">Accidents (LTI)</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight">24<span className="text-lg">h</span></p>
<p className="text-xs text-blue-300 font-medium uppercase mt-1">Global Deploy</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight">ISO</p>
<p className="text-xs text-blue-300 font-medium uppercase mt-1">Certified</p>
</div>
</div>
</div>

<div className="relative hidden lg:block h-[600px] w-full bg-white/95 backdrop-blur rounded-lg overflow-hidden shadow-2xl animate-fade-up" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white flex items-center justify-center">
<div className="w-full h-full p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs font-mono text-slate-400">TMB_LASER_SCAN_V2.0</div>
</div>

<div className="flex-1 border border-dashed border-slate-300 rounded flex items-center justify-center relative bg-white">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">

<div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-b border-slate-900"></div>
<div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-b border-slate-900"></div>
<div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-b border-slate-900"></div>
<div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-r border-b border-slate-900"></div><div className="border-b border-slate-900"></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<i className="w-16 h-16 text-blue-950 stroke-[1]" data-lucide="scan-line"></i>
<p className="mt-4 font-mono text-xs text-blue-950">ANALYZING GEOMETRY</p>
<p className="font-mono text-xs text-slate-400">TOLERANCE: 0.01mm</p>
</div>

<div className="absolute top-10 left-10 bg-white shadow-lg p-3 rounded border border-slate-100">
<p className="text-[10px] uppercase text-slate-400 font-semibold mb-1">Structural Integrity</p>
<div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[98%] bg-emerald-500"></div>
</div>
</div>
<div className="absolute bottom-10 right-10 bg-white shadow-lg p-3 rounded border border-slate-100">
<p className="text-[10px] uppercase text-slate-400 font-semibold mb-1">ROI Calculation</p>
<p className="text-sm font-semibold text-blue-950">+ 42.5%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by Global Fleets &amp; Classification Societies</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="shield-check"></i>
<span className="font-bold text-lg tracking-tight">Lloy's Register</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="anchor"></i>
<span className="font-bold text-lg tracking-tight">Bureau Veritas</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="award"></i>
<span className="font-bold text-lg tracking-tight">DNV GL</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
<span className="font-bold text-lg tracking-tight">ISO 9001:2015</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-blue-950 tracking-tight mb-4">Engineering Certainty in High Seas</h2>
<p className="text-slate-500 text-lg leading-relaxed">
                    We don't offer temporary fixes. We offer engineering solutions that restore class certification and operational capability without the logistical nightmare of dry docking.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-950/20 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-blue-950 mb-3">ROI-First Approach</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Our afloat repairs save an average of 40% compared to dry docking costs, minimizing off-hire time and logistical overheads.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-950/20 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="crosshair"></i>
</div>
<h3 className="text-lg font-semibold text-blue-950 mb-3">Precision Engineering</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Laser scanning, 3D modeling, and in-situ machining with tolerances of 0.01mm. We bring laboratory precision to the engine room.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-950/20 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="file-check-2"></i>
</div>
<h3 className="text-lg font-semibold text-blue-950 mb-3">Class Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Every procedure is documented, analyzed, and executed to meet the strictest standards of Lloyds, DNV, and Bureau Veritas.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-blue-950 tracking-tight mb-2">Technical Capabilities</h2>
<p className="text-slate-500">Complex interventions executed with surgical precision.</p>
</div>
<a className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center gap-1" href="#">
                    Download Capability Statement <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-white p-8 lg:p-12 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-center">
<div className="mb-6">
<span className="px-2 py-1 bg-blue-50 text-blue-900 text-[10px] font-bold uppercase tracking-wider rounded">Core Competency</span>
</div>
<h3 className="text-2xl font-semibold text-blue-950 mb-4">In-Situ Machining &amp; Crankshaft Rectification</h3>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Restoring crankshaft geometry without dismantling the engine. Our portable equipment handles diameters up to 600mm with OEM-level finish standards.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-emerald-500 mr-3" data-lucide="check"></i> Annealing (Heat Treatment)
                        </li>
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-emerald-500 mr-3" data-lucide="check"></i> Hardness Testing &amp; NDT
                        </li>
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-emerald-500 mr-3" data-lucide="check"></i> Line Boring
                        </li>
</ul>
<div>
<a className="text-sm font-medium text-blue-950 hover:underline" href="#">View Technical Spec Sheet →</a>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-400 mb-4" data-lucide="scan"></i>
<h4 className="text-base font-semibold text-blue-950 mb-2">3D Laser Scanning</h4>
<p className="text-xs text-slate-500 leading-relaxed">Reverse engineering for obsolete parts and damage assessment.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-400 mb-4" data-lucide="zap"></i>
<h4 className="text-base font-semibold text-blue-950 mb-2">Laser Cladding</h4>
<p className="text-xs text-slate-500 leading-relaxed">Robotic material deposition for shaft restoration. Minimal heat input.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-400 mb-4" data-lucide="settings"></i>
<h4 className="text-base font-semibold text-blue-950 mb-2">Engine Overhaul</h4>
<p className="text-xs text-slate-500 leading-relaxed">Complete 2-stroke and 4-stroke maintenance teams globally available.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-400 mb-4" data-lucide="anchor"></i>
<h4 className="text-base font-semibold text-blue-950 mb-2">Stern Tube Seals</h4>
<p className="text-xs text-slate-500 leading-relaxed">Underwater bonding and seal replacement compliant with makers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reports">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-blue-950 tracking-tight mb-12">Technical Reports</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200">
<th className="py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">Project / Vessel Type</th>
<th className="py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">Challenge</th>
<th className="py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">Solution</th>
<th className="py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Economic Impact</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-6 pr-4 align-top">
<p className="font-medium text-blue-950">VLCC "Prometheus"</p>
<p className="text-xs text-slate-500 mt-1">Singapore Anchorage</p>
</td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                Main Engine Crankpin damage (Ø580mm). Logistics for removal impossible within schedule.
                            </td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                In-situ grinding (-2.0mm) + annealing. 24/7 rotation shifts.
                            </td>
<td className="py-6 align-top text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                    Saved $450k
                                </span>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-6 pr-4 align-top">
<p className="font-medium text-blue-950">FPSO Brasil</p>
<p className="text-xs text-slate-500 mt-1">Offshore Rio</p>
</td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                Generator bedplate cracking. Hot work restrictions.
                            </td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                3D Laser analysis + Metal stitching (Cold repair). No gas freeing required.
                            </td>
<td className="py-6 align-top text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                    Averted Shutdown
                                </span>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-6 pr-4 align-top">
<p className="font-medium text-blue-950">Container Feeder</p>
<p className="text-xs text-slate-500 mt-1">Rotterdam</p>
</td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                Rudder stock misalignment post-grounding.
                            </td>
<td className="py-6 pr-4 align-top text-sm text-slate-600">
                                Optical alignment + Portable boring of pintle housing.
                            </td>
<td className="py-6 align-top text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                    -12 Days Off-hire
                                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-blue-950 py-24 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Secure Your Fleet's Continuity</h2>
<p className="text-blue-200 text-lg leading-relaxed mb-10">
                    We invite Technical Directors and Superintendents to request a preliminary technical audit. Let us analyze the feasibility of afloat repairs for your specific case.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-blue-900/50 rounded border border-blue-800">
<i className="w-5 h-5 text-blue-200" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs font-medium text-blue-300 uppercase tracking-wide">24/7 Technical Desk</p>
<p className="text-lg font-medium">+34 900 000 000</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-blue-900/50 rounded border border-blue-800">
<i className="w-5 h-5 text-blue-200" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs font-medium text-blue-300 uppercase tracking-wide">Project Tenders</p>
<p className="text-lg font-medium">engineering@technicalmb.net</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-8 text-slate-900 shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700">Name</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-shadow" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700">Company</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-shadow" placeholder="Global Shipping Ltd" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700">Business Email</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-shadow" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700">Requirement Type</label>
<select className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-white">
<option>Emergency Repair (Afloat)</option>
<option>Planned Maintenance</option>
<option>Feasibility Study</option>
<option>Partnership Inquiry</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700">Vessel Details / Technical Scope</label>
<textarea className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-shadow h-24" placeholder="Brief description of the machinery and issue..."></textarea>
</div>
<button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded text-sm transition-colors shadow-md" type="button">
                        Request Proposal
                    </button>
<p className="text-xs text-slate-400 text-center mt-3">Protected by NDA. GDPR Compliant.</p>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 bg-blue-950 flex items-center justify-center rounded-sm">
<span className="text-white font-bold text-[10px] tracking-tighter">TMB</span>
</div>
<span className="font-bold text-blue-950 tracking-tight">TECHNICAL MB</span>
</div>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                        Global partners in maritime engineering continuity. We deliver certified, high-precision repairs afloat, ensuring the operational readiness of the world's most demanding fleets.
                    </p>
</div>
<div>
<h4 className="font-semibold text-blue-950 text-sm mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-950" href="#">In-Situ Machining</a></li>
<li><a className="hover:text-blue-950" href="#">Laser Cladding</a></li>
<li><a className="hover:text-blue-950" href="#">3D Scanning</a></li>
<li><a className="hover:text-blue-950" href="#">Engine Overhaul</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-blue-950 text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-950" href="#">About TMB</a></li>
<li><a className="hover:text-blue-950" href="#">Certifications (ISO)</a></li>
<li><a className="hover:text-blue-950" href="#">Global Locations</a></li>
<li><a className="hover:text-blue-950" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Technical Maritime Bureau. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-blue-950" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-blue-950" href="#">Terms of Service</a>
<a className="text-xs text-slate-400 hover:text-blue-950" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
