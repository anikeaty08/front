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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-50 fixed"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/orbit-XDLATgFZPQX6SO6dgJGqPwHD/" width="100%"></iframe></div></div>

<header className="border-b border-neutral-800" style={{}}>
<nav className="max-w-6xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 md:text-slate-50">
<div className="flex rounded-md items-center justify-between">
<div className="md:text-xl md:tracking-wide md:font-semibold text-xl font-semibold text-slate-800 tracking-tight text-justify">AN</div>
<div className="flex gap-8 text-slate-950 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-neutral-100 md:text-base md:text-slate-50 text-base text-zinc-50" href="#experience" style={{}}>Experience</a>
<a className="transition-colors hover:text-neutral-100 md:text-base md:text-slate-50 text-base text-neutral-50" href="#skills" style={{}}>Skills</a>
<a className="transition-colors hover:text-neutral-100 md:text-base md:text-slate-50 text-base text-zinc-50" href="#projects" style={{}}>Projects</a>
<a className="transition-colors hover:text-neutral-100 md:text-base md:text-gray-50 text-base text-neutral-50" href="#contact">Contact</a>
</div>
</div>
</nav>
</header>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="max-w-3xl">
<h1 className="text-6xl font-semibold tracking-tight mb-6 xl:text-6xl">Aditya Nidniker</h1>
<p className="leading-relaxed md:text-neutral-950 text-xl text-slate-950 mb-8">Operations-driven analyst with 1.5+ years in data operations and reporting for AI products. Experienced in executing daily tasks under SOPs, and issue escalation while maintaining quality, production under given SLA, and confidentiality.</p>
<div className="flex items-center gap-6">
<a className="inline-flex items-center gap-2 transition-colors hover:bg-neutral-200 text-sm font-medium text-black bg-neutral-100 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" href="mailto:nidnikeraditya@gmail.com">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    Get in Touch
                </a>
<a className="inline-flex items-center gap-2 transition-colors hover:border-neutral-600 hover:bg-neutral-950 text-sm font-medium border-neutral-700 border rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" href="https://linkedin.com/in/adityanidniker" target="_blank">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                </a>
</div>
</div>
</section>

<section className="max-w-6xl border-neutral-800 border-t mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 gap-x-12 gap-y-12">
<div className="">
<h2 className="uppercase md:text-slate-50 md:text-lg text-lg font-medium text-slate-950 tracking-widest mb-6">Expertise</h2>
</div>
<div className="lg:col-span-2">
<p className="text-base leading-relaxed md:text-neutral-950 text-neutral-300" style={{}}>
                    Possesses a strong interest in mitigating financial crime through KYC, AML, and due diligence processes. Demonstrates a keen eye for detail and the ability to identify potential risks and suspicious activity while ensuring adherence to internal and external compliance standards. Strong stakeholder communication and process improvement &amp; Research mindset.
                </p>
</div>
</div>
</section>

<section className="max-w-6xl border-neutral-800 border-t mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="experience" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-slate-50 md:text-lg text-xl font-medium text-slate-950 tracking-wider mb-6" style={{}}>Experience</h2>
</div>
<div className="lg:col-span-2 space-y-12">
<div className="group">
<div className="flex items-start justify-between mb-3">
<div className="">
<h3 className="text-xl font-semibold tracking-tight mb-1 md:text-slate-900">Senior Analyst</h3>
<p className="md:text-slate-950 text-base text-zinc-950">Teleperformance - AI Data Operations (Client: Google)</p>
</div>
<div className="text-sm text-right text-neutral-500" style={{}}>
<div>Oct 2023 – Apr 2025</div>
<div>Hyderabad</div>
</div>
</div>
<ul className="mt-6 space-y-3">
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-zinc-950">Executed daily data-operations tasks in strict SOP adherence; aligned with product/model teams to clarify requirements, improving data accuracy by 25%</span>
</li>
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Monitored risks/issues and escalated blockers to the team manager to protect scope, schedule, and quality.</span>
</li>
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Produced executive-ready status reports and presentations that accelerated decisions and improved stakeholder alignment.</span>
</li>
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Reported tool defects/operational issues to development teams with clear evidence and steps to reproduce, reducing downtime.</span>
</li>
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Implemented process improvements including updated templates and SOP clarifications, decreasing errors by 15% and improving overall team efficiency as measured by quarterly performance reviews.</span>
</li>
<li className="flex gap-3 text-neutral-300" style={{}}>
<span className="mt-1.5 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Worked cross-functionally to identify trends and opportunities for improvement, utilizing data to drive performance results aligned with contractual SLA agreements</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800" id="projects" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-slate-50 md:text-lg text-lg font-medium text-zinc-950 tracking-wider mb-6" style={{}}>Projects</h2>
</div>
<div className="lg:col-span-2 space-y-10">
<div className="group border rounded-xl p-6 transition-colors border-neutral-800 hover:border-neutral-700" style={{}}>
<h3 className="text-lg font-semibold tracking-tight mb-2">Pixel AI Personalization — Prompt Testing &amp; Configuration</h3>
<p className="md:text-blue-950 text-sm text-zinc-950 mb-4"><span className="font-medium">Objective:</span> Support AI tool development by testing and optimizing personalization modules for facial and eye detection.</p>
<ul className="space-y-2">
<li className="flex gap-3 text-sm text-neutral-300" style={{}}>
<span className="mt-1 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Partnered with AI product teams to test outputs vs. UX/business expectations, document results, and standardize validation SOPs. Dashboard Creation, Analytical Thinking</span>
</li>
</ul>
</div>
<div className="group transition-colors border rounded-xl pt-6 pr-6 pb-6 pl-6 hover:border-neutral-700 border-neutral-800" style={{}}>
<h3 className="text-lg font-semibold tracking-tight mb-2">NLP Prompt Tuning &amp; Model Optimization</h3>
<p className="md:text-blue-950 text-sm text-zinc-950 mb-4" style={{}}><span className="font-medium text-zinc-950">Objective:</span> Enhance NLP model precision and stability through advanced prompt engineering and pre-processing improvements. <span className="font-medium">Tools:</span> AI Studios</p>
<ul className="space-y-2">
<li className="flex gap-3 text-sm text-neutral-300" style={{}}>
<span className="mt-1 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Optimized pre-processing and procedures; increased model precision by 22% and reduced training time by 18%; tracked/reporting of metrics to stakeholders.</span>
</li>
</ul>
</div>
<div className="group border rounded-xl p-6 transition-colors border-neutral-800 hover:border-neutral-700" style={{}}>
<h3 className="text-lg font-semibold tracking-tight mb-2">Sales &amp; Customer Data Analysis — Tata Group (Forage Virtual Internship)</h3>
<p className="md:text-blue-950 text-sm text-zinc-950 mb-4" style={{}}><span className="font-medium">Objective:</span> Analyze simulated sales and customer datasets to identify performance gaps and provide actionable insights.</p>
<ul className="space-y-2">
<li className="flex gap-3 text-sm text-neutral-300" style={{}}>
<span className="mt-1 text-neutral-600" style={{minWidth: '6px'}}>•</span>
<span className="leading-relaxed md:text-neutral-950">Analyzed simulated sales/customer data to surface trends and KPIs; authored BRDs and process flows, improving review turnaround by 25%</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-6xl border-neutral-800 border-t mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="skills" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-sky-50 md:text-lg text-lg font-medium text-zinc-950 tracking-wider mb-6" style={{}}>Skills</h2>
</div>
<div className="lg:col-span-2 space-y-8">
<div className="">
<h3 className="text-base font-semibold mb-4">Operations &amp; Compliance</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>SOP adherence</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Data collection</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Task execution</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Confidentiality &amp; data privacy</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Monitoring</span>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold mb-4">Quality &amp; Process Management</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Quality control</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Accuracy &amp; efficiency</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Process improvement</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Risk &amp; issue management</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Status reporting</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Adaptability</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Ownership</span>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold mb-4">Technical Tools &amp; Reporting</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Microsoft Excel</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Google Sheets</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Microsoft PowerPoint</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Microsoft Word</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Defect reporting</span>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold mb-4 md:text-blue-50">Documentation &amp; Collaboration</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Documentation (BRDs)</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Cross-Functional Collaboration</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Stakeholder Communication</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Data operations</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Attention to Detail</span>
<span className="px-3 py-1.5 text-sm rounded-md bg-neutral-900 text-neutral-300" style={{}}>Critical Thinking &amp; Decision-Making</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl border-neutral-800 border-t mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-indigo-900 md:text-lg text-lg font-medium text-zinc-950 tracking-wide mb-6" style={{}}>Education</h2>
</div>
<div className="lg:col-span-2 space-y-8">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold mb-1 md:text-lg">MBA - Data Science &amp; Analytics</h3>
<p className="md:text-blue-950 text-zinc-950" style={{}}>Manipal University Jaipur</p>
<p className="md:text-indigo-800 text-sm text-zinc-950 mt-1" style={{}}>Rajasthan, India</p>
</div>
<div className="text-sm text-neutral-500" style={{}}>Aug 2023 - 2025</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold mb-1 md:text-xl">Bachelor's degree - Computer Science</h3>
<p className="md:text-blue-950 text-zinc-950" style={{}}>Aurora's degree &amp; PG College</p>
<p className="md:text-indigo-800 text-sm text-zinc-950 mt-1">Hyderabad, India</p>
</div>
<div className="text-sm text-neutral-500" style={{}}>July 2023</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-blue-950 md:text-lg text-lg font-medium text-zinc-950 tracking-wider mb-6">Certifications</h2>
</div>
<div className="lg:col-span-2 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-award mt-0.5 text-neutral-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div className="">
<h3 className="text-base font-medium mb-1">Office Automation</h3>
<p className="md:text-indigo-950 text-sm text-gray-950" style={{}}>Microsoft Excel, Microsoft word, MS Office suite</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-award mt-0.5 text-neutral-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div className="">
<h3 className="text-base font-medium mb-1">Data Visualisation - Empowering Business with effective insights</h3>
<p className="md:text-blue-950 text-sm text-gray-950" style={{}}>Tata Forage</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800" id="contact" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="">
<h2 className="uppercase md:text-indigo-900 text-xl font-medium text-zinc-950 tracking-wider mb-6">Contact</h2>
</div>
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900" style={{}}>
<svg className="lucide lucide-mail w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', strokeWidth: '1.5', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<p className="md:text-gray-950 text-sm text-zinc-950 mb-0.5">Email</p>
<a className="text-base font-medium transition-colors hover:text-neutral-400" href="mailto:nidnikeraditya@gmail.com" style={{}}>nidnikeraditya@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900" style={{}}>
<svg className="lucide lucide-phone text-neutral-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<p className="md:text-gray-950 text-sm text-zinc-950 mb-0.5" style={{}}>Mobile</p>
<a className="text-base font-medium transition-colors hover:text-neutral-400" href="tel:+919177494923" style={{}}>+91-9177494923</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900" style={{}}>
<svg className="lucide lucide-linkedin text-neutral-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<div className="">
<p className="md:text-gray-950 text-sm text-neutral-950 mb-0.5">LinkedIn</p>
<a className="text-base font-medium transition-colors hover:text-neutral-400" href="https://linkedin.com/in/adityanidniker" style={{}} target="_blank">linkedin.com/in/adityanidniker</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t mt-16 border-neutral-800" style={{}}>
<div className="max-w-6xl mx-auto px-6 py-8">
<p className="md:text-neutral-50 text-base text-stone-950 mix-blend-overlay" style={{}}>© 2025 Aditya Nidniker. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
