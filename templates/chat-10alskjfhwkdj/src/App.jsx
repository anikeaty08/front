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
      
<div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-20">

<header className="pb-10 border-b border-zinc-800">
<div className="flex justify-between items-start">
<div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-100">Divya Mehta</h1>
<p className="text-zinc-400 text-lg mt-1.5 font-medium">Accounting Professional</p>
</div>
<div className="tracking-tighter font-medium text-lg text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 rounded-lg">DM</div>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-sm text-zinc-400">
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors duration-200" href="mailto:divya.mehta@xyz.com">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
                    divya.mehta@xyz.com
                </a>
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors duration-200" href="tel:+919234512345">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
                    +91-92345-12345
                </a>
</div>
<p className="mt-8 text-zinc-400 leading-relaxed text-sm sm:text-base max-w-3xl">
                A trained accounting professional with five years of experience in managing day-to-day finances for clients in the manufacturing, insurance and real estate industries. Knowledgeable in GST compliances, risk management, reconciliations, budgeting and financial planning.
            </p>
</header>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12">

<div className="lg:col-span-8 space-y-16">

<section>
<h2 className="text-xl tracking-tight font-medium flex items-center gap-2.5 mb-8 text-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:case-linear"></iconify-icon>
                        Work Experience
                    </h2>
<div className="space-y-10">

<div className="relative pl-5 border-l border-zinc-800">
<div className="absolute w-2.5 h-2.5 bg-zinc-700 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#09090b]"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1.5">
<h3 className="text-base font-medium text-zinc-100">Senior Accountant</h3>
<span className="text-xs text-zinc-400 mt-1 sm:mt-0 flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Jan. 2019 – July 2021
                                </span>
</div>
<p className="text-sm text-zinc-400 mb-4 flex items-center gap-1.5">
                                KCL Consulting <span className="w-1 h-1 bg-zinc-600 rounded-full mx-1"></span> Mumbai
                            </p>
<ul className="text-sm text-zinc-400 space-y-2.5 list-none">
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Analyse client transactions and tax records</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Identify tax reporting discrepancies and rectify them</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Overlook yearly profit-and-loss statements and balance sheets</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Maintain financial records for bank transactions, invoices and expenses</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Work with management to understand financial goals and chart budgets and financial plans for the succeeding financial year</li>
</ul>
</div>

<div className="relative pl-5 border-l border-zinc-800">
<div className="absolute w-2.5 h-2.5 bg-zinc-700 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#09090b]"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1.5">
<h3 className="text-base font-medium text-zinc-100">Junior Accountant</h3>
<span className="text-xs text-zinc-400 mt-1 sm:mt-0 flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> July 2018 – May 2019
                                </span>
</div>
<p className="text-sm text-zinc-400 mb-4">RMD Construction</p>
<ul className="text-sm text-zinc-400 space-y-2.5 list-none">
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Generated invoices and follow-up with clients for payments</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Maintained all financial records and ensure it is GST compliant using Tally ERP9</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Created a quarterly profit-and-loss statement</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Developed a handbook for maintaining financial records</li>
<li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-full">Generated yearly balance sheets for filing income tax returns</li>
</ul>
</div>
</div>
</section>

<section>
<h2 className="text-xl tracking-tight font-medium flex items-center gap-2.5 mb-8 text-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:diploma-linear"></iconify-icon>
                        Education
                    </h2>
<div className="space-y-6">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-100">Bachelor of Commerce (B.Com)</h3>
<span className="text-xs text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-md">2018</span>
</div>
<p className="text-sm text-zinc-400">MJ College of Commerce and Arts</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-100">High School (Commerce)</h3>
<span className="text-xs text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded-md">2015</span>
</div>
<p className="text-sm text-zinc-400">R D T School of Excellence</p>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-12">

<section>
<h2 className="text-xl tracking-tight font-medium flex items-center gap-2.5 mb-6 text-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:cpu-linear"></iconify-icon>
                        Skills
                    </h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Tally ERP 9</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Microsoft Office</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Financial Reporting</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">GST Norms</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Risk Management</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Budgeting &amp; Planning</span>
<span className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">Crisis Management</span>
</div>
</section>

<section>
<h2 className="text-xl tracking-tight font-medium flex items-center gap-2.5 mb-6 text-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:global-linear"></iconify-icon>
                        Languages
                    </h2>
<ul className="space-y-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
<li className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-2.5 last:border-0 last:pb-0">
<span className="text-zinc-100">English</span>
<span className="text-xs text-zinc-400">Full professional</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-2.5 last:border-0 last:pb-0">
<span className="text-zinc-100">Hindi</span>
<span className="text-xs text-zinc-400">Full professional</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-2.5 last:border-0 last:pb-0">
<span className="text-zinc-100">Marathi</span>
<span className="text-xs text-zinc-400">Full professional</span>
</li>
</ul>
</section>
</div>
</main>

<div className="mt-24 pt-16 border-t border-zinc-800">
<div className="max-w-3xl">
<h2 className="text-2xl tracking-tight font-medium mb-2 text-zinc-100">Accounting Career Guide</h2>
<p className="text-sm text-zinc-400 mb-8">Resources and templates for building a successful career in accounting.</p>
<div className="space-y-4">

<details className="group bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="text-sm font-medium text-zinc-100 cursor-pointer list-none flex justify-between items-center p-5 hover:bg-zinc-800/50 transition-colors">
                            The Role of an Accountant
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800">
<p className="mb-4">An accountant plays a crucial part in financial management of businesses and individuals. They ensure businesses comply with government laws to generate invoices, maintain financial reports or manage risk.</p>
<p className="mb-2 font-medium text-zinc-100">What Does An Accountant Do?</p>
<ul className="list-disc pl-5 space-y-1.5">
<li>Manage transactions and prepare financial reports</li>
<li>Issue, review and process invoices</li>
<li>Develop strategies to reduce costs and increase profits</li>
<li>Ensure compliance with government norms and regulations</li>
<li>Conduct risk assessments and compute tax returns</li>
<li>Reconcile accounts payable and receivable</li>
</ul>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="text-sm font-medium text-zinc-100 cursor-pointer list-none flex justify-between items-center p-5 hover:bg-zinc-800/50 transition-colors">
                            How to Write an Accountant Resume
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800">
<p className="mb-4">Using an accountant resume template demonstrates what to include for a hiring manager. It follows a set hierarchy and focuses on information that may increase your chances of getting a response.</p>
<div className="space-y-4">
<div>
<h4 className="font-medium text-zinc-100 text-xs uppercase tracking-wider mb-1">1. Collate Information</h4>
<p>Collect all relevant information including personal details, professional statement, work experience (in reverse chronological order), education, skills (hard and soft), and language proficiency.</p>
</div>
<div>
<h4 className="font-medium text-zinc-100 text-xs uppercase tracking-wider mb-1">2. Pick a Layout</h4>
<p>Choose a layout with minimal design that is easy to read. Select a legible font and use neutral colours. Highlighting competencies is more essential than adding a photograph.</p>
</div>
</div>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="text-sm font-medium text-zinc-100 cursor-pointer list-none flex justify-between items-center p-5 hover:bg-zinc-800/50 transition-colors">
                            How to Become an Accountant
                            <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800">
<ol className="list-decimal pl-5 space-y-3">
<li><strong>Complete your bachelor's degree:</strong> A foundation in commerce, accounting, and finance.</li>
<li><strong>Get an internship:</strong> Gain practical work experience and expand your professional network.</li>
<li><strong>Become a chartered accountant:</strong> An optional but highly valued additional certification requiring practical training.</li>
<li><strong>Apply for jobs:</strong> Prepare a customised resume and apply to accounting and auditing firms.</li>
</ol>
</div>
</details>
</div>
</div>
</div>
</div>

    </>
  );
}
