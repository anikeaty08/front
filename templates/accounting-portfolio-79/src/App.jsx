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
      

<main className="bg-white border border-gray-200 shadow-lg w-full max-w-6xl h-[90vh] md:h-[85vh] rounded-2xl animate-slide flex flex-col md:flex-row overflow-hidden relative">

<aside className="md:w-1/3 bg-white border-b md:border-b-0 md:border-r border-gray-200 p-8 md:p-12 flex flex-col justify-between shrink-0 z-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] md:shadow-none">
<div>

<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-8 border border-gray-200">
<span className="font-serif-plex text-lg font-medium text-gray-900 tracking-tight">PC</span>
</div>
<h1 className="font-serif-plex text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                    Parth<br/>Chikhale
                </h1>
<h2 className="font-serif-plex text-xl text-blue-500 font-light mb-8">
                    CPA-Track Tax Professional
                </h2>
<p className="text-sm md:text-base leading-relaxed text-gray-500 mb-8">
                    Recently passed the REG and BEC sections of the CPA Exam, with 5+ years of work experience in tax compliance, audit and financial reporting.
                </p>
</div>

<ul className="space-y-4 text-sm text-gray-600">
<li>
<a className="flex items-center gap-3 hover:text-blue-500 transition-colors group" href="mailto:parthchikhale008@gmail.com">
<span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</span>
                        parthchikhale008@gmail.com
                    </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-blue-500 transition-colors group" href="tel:+14122143537">
<span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</span>
                        +1 (412) 214 3537
                    </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-blue-500 transition-colors group" href="https://www.linkedin.com/in/parthchikhale-katz" target="_blank">
<span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</span>
                        LinkedIn Profile
                    </a>
</li>
</ul>
</aside>

<div className="md:w-2/3 overflow-y-auto custom-scroll bg-neutral-50/30">
<div className="p-8 md:p-12 lg:p-16 space-y-16">

<section>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-blue-500" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif-plex text-2xl font-light text-gray-900">Work Experience</h3>
</div>
<div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

<div className="relative flex items-start gap-6">
<div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-white border-2 border-blue-500 mt-1.5 z-10 shadow-sm"></div>
<div className="flex-1 ml-8 md:ml-0">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h4 className="text-base font-medium text-gray-900">Tax Associate</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">July 2025 - Present</span>
</div>
<p className="text-sm text-blue-500 mb-4 flex items-center gap-1.5">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                                    Baker Tilly | Walnut Creek, CA
                                </p>
<ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-2.5 leading-relaxed">
<li>Managed over 55 chargeable hours weekly across more than 80 tax projects, including preparation and review of individual, corporate, partnership, estate, trust, S corporation, LLP returns and international tax reporting projects.</li>
<li>Performed technical tax research on federal, state, and international tax issues, and resolved complex client tax matters in collaboration with IRS, state revenue agencies, and departments of finance.</li>
<li>Delivered accurate tax filings and reporting under tight deadlines, while demonstrating a continuous improvement mindset to enhance client service in a Big 10 public accounting environment.</li>
</ul>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-neutral-100 border-2 border-gray-300 mt-1.5 z-10"></div>
<div className="flex-1 ml-8 md:ml-0">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h4 className="text-base font-medium text-gray-900">Tax Intern</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">Jun 2024 - Aug 2024</span>
</div>
<p className="text-sm text-gray-500 mb-4 flex items-center gap-1.5">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                                    Baker Tilly US, LLP | California, USA
                                </p>
<ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-2.5 leading-relaxed">
<li>Filed Federal and State tax returns for entities including Forms 1065, 1120, and 1120-S, demonstrating a deep understanding of tax laws and regulations.</li>
<li>Facilitated communication with the Internal Revenue Service (IRS), Montana Department of Revenue, California State Administration, and Finance Departments on critical client matters including penalty reduction and waiver, refund claims, moratorium over employee retention credit claims, certificate status, amended returns and more.</li>
<li>Successfully negotiated the waiver of a $100,000 IRS penalty by engaging directly with IRS agents, identifying the documentation required for a waiver, and ensuring timely submission. The effort resulted in the issuance of Form CP215 with a revised $0 IRS penalty.</li>
<li>Assisted on payroll tax matters, employee benefit related reporting, and ensured tax agency compliance.</li>
</ul>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-neutral-100 border-2 border-gray-300 mt-1.5 z-10"></div>
<div className="flex-1 ml-8 md:ml-0">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h4 className="text-base font-medium text-gray-900">Senior Accounts &amp; Audit Officer</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">Jan 2021 - Dec 2022</span>
</div>
<p className="text-sm text-gray-500 mb-4 flex items-center gap-1.5">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                                    S.M. SHAH &amp; Associates | Mumbai, India
                                </p>
<ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-2.5 leading-relaxed">
<li>Conducted meticulous audits of financial records for clients with annual sales exceeding $100 million.</li>
<li>Devised and filed Income Tax Returns for a diverse clientele, ensuring compliance with Tax Laws for over 300 clients.</li>
</ul>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-neutral-100 border-2 border-gray-300 mt-1.5 z-10"></div>
<div className="flex-1 ml-8 md:ml-0">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h4 className="text-base font-medium text-gray-900">Tax Consultant</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">Aug 2017 - Aug 2020</span>
</div>
<p className="text-sm text-gray-500 mb-4 flex items-center gap-1.5">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                                    Jai Prakash Upadhyay &amp; Co | Mumbai, India
                                </p>
<ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-2.5 leading-relaxed">
<li>Managed Tax Planning services in strict compliance with the Income Tax Laws, meeting financial needs of 100+ clients.</li>
</ul>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-blue-500" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif-plex text-2xl font-light text-gray-900">Academic Leadership &amp; Roles</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-1">Graduate Global Ties Mentor &amp; President</h4>
<p className="text-xs text-blue-500 mb-3">Accounting Club</p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-1">Multivariate Data Analysis</h4>
<p className="text-xs text-blue-500 mb-3">Grader</p>
<ul className="text-xs text-gray-500 space-y-1.5 ml-3 list-disc">
<li>Evaluated student assignments on statistical methods.</li>
<li>Provided feedback on data interpretation.</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm sm:col-span-2">
<h4 className="text-sm font-medium text-gray-900 mb-1">Business Management</h4>
<p className="text-xs text-blue-500 mb-3">Proctor</p>
<ul className="text-xs text-gray-500 space-y-1.5 ml-3 list-disc">
<li>Supervised exams and ensured adherence to academic integrity policies.</li>
<li>Managed exam procedures and monitored the testing environment.</li>
</ul>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-blue-500" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif-plex text-2xl font-light text-gray-900">Education</h3>
</div>
<div className="space-y-8">
<div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
<h4 className="text-base font-medium text-gray-900">University of Pittsburgh, Joseph M. Katz Graduate School of Business</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">Aug 2023 - Apr 2025</span>
</div>
<p className="text-sm text-gray-600 mt-2">Master of Science Accounting &amp; Business Analytics</p>
<div className="flex gap-4 mt-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">GPA: 3.35</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 text-gray-600 text-xs font-medium">User Research &amp; Strategy (Aug 2024 - Dec 2024)</span>
</div>
</div>
<div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
<h4 className="text-base font-medium text-gray-900">RTM Nagpur University</h4>
<span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 tracking-wide uppercase">June 2014 - June 2017</span>
</div>
<p className="text-sm text-gray-600 mt-2">Bachelors of Commerce</p>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section>
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-blue-500" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif-plex text-2xl font-light text-gray-900">Technical Skills</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Accounting Software</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Tally ERP 9</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">QuickBooks</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Sage</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">GST Filing</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Data Analysis</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Excel</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Tableau</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Data Viz</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Pivot Tables</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Database &amp; Web</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">MySQL</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">HTML</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">SQL Basics</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Business Systems</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Go-System</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">CCH-Access</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 shadow-sm">Financial Reporting</span>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section className="pb-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-blue-500" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif-plex text-2xl font-light text-gray-900">Awards</h3>
</div>
<div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
<div>
<h4 className="text-sm font-medium text-gray-900">Business Alumni Association Scholarship</h4>
<p className="text-xs text-gray-500 mt-1">University of Pittsburgh</p>
</div>
<span className="text-xs text-blue-600 font-medium mt-2 sm:mt-0 px-3 py-1 bg-white rounded-full border border-blue-100 shadow-sm">May 2025</span>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
