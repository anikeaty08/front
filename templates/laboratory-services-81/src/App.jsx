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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">QRS</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sectors</a>
<a className="hover:text-slate-900 transition-colors" href="#">Compliance</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">Log in</button>
<button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-sm">Contact Support</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Operational Excellence</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6 max-w-4xl leading-[1.1]">
            Uncompromising reliability for<br className="hidden md:block"/> critical research environments.
        </h1>
<p className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed font-light">
            From university core labs to regulated manufacturing, we provide the technical backbone that keeps high-demand research running smoothly.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
                View Service Plans
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all">
                Request Audit
            </button>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">University-Affiliated Research</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Supporting large institutional systems with fast response, clear communication, and structured documentation for shared facilities.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Support for shared and core facilities</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Fast response for high-impact failures</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Audit-ready calibration &amp; inspection records</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Partnership through lab transitions</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Clinical &amp; Healthcare Labs</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Prioritizing reliability and compliance for fast-moving facilities where equipment downtime directly affects patient care.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Priority response for diagnostic instruments</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>CAP, CLIA, and QA compliant documentation</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Preventative maintenance programs</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Clear technical communication</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="microscope"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Independent Research</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Acting as the technical backbone for independent labs and startups operating without internal service teams.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Unified partner for repair and calibration</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Scalable support for rapid growth</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Predictable service planning &amp; cost control</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Practical, hands-on technical guidance</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="factory"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Regulated Manufacturing</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Aligning with the strict documentation, validated workflows, and zero-downtime tolerance of production environments.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Audit-focused PM and calibration</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>IQ/OQ support for validated processes</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Rapid repair to protect production schedules</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>QA-aligned technical reporting</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="landmark"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Government &amp; Public Research</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Ensuring dependable performance and clear documentation for federal compliance in public-sector labs.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Support for mission-critical timelines</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Compliance-friendly docs for federal audits</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Fast troubleshooting for high-impact failures</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Long-term continuity partnership</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="flask-conical"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Biotech &amp; Pharmaceutical R&amp;D</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Responsive support for commercial R&amp;D teams that move quickly and require reliable accuracy during rapid growth.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>High-uptime support for core equipment</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Assay validation and experimental repeatability</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Scalable models for new program launches</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Adaptive technical guidance</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Core Facilities</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Essential reliability for shared resources with high daily throughput where downtime affects multiple groups.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Fast response for broad impact equipment</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Maintenance timed around core schedules</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Clear risk and timeline communication</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Proactive reliability monitoring</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Startups &amp; Incubators</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Providing stability and technical support for early-stage companies lacking internal maintenance staff.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Single partner for all equipment needs</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Flexible options scaling with team size</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Transition guidance for growing labs</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Preventative oversight for critical stages</span>
</li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)]">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-slate-700" data-lucide="paw-print"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Veterinary, Forensic &amp; Env.</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Accuracy and compliance for adjacent industries requiring sample integrity and workflow continuity.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Calibration for temp control &amp; storage</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Accreditation-aligned compliance docs</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Fast repair to protect sample integrity</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-600">
<i className="w-3.5 h-3.5 mt-0.5 text-blue-600 shrink-0" data-lucide="check"></i>
<span>Consistency via preventative maintenance</span>
</li>
</ul>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<span className="text-lg font-semibold tracking-tighter text-slate-900">QRS</span>
<span className="text-xs text-slate-400">© 2024 QRS Laboratory Services. All rights reserved.</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Client Portal</a>
</div>
</div>
</footer>


    </>
  );
}
