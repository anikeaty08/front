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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
<iconify-icon className="" height="18" icon="lucide:scan-eye" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Project Vision</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-zinc-900 transition-colors" href="#solution">How it works</a>
<a className="hover:text-zinc-900 transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-zinc-500 hover:text-zinc-900 sm:block" href="#">Log in</a>
<a className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20" href="#demo">
                    Get Started
                </a>
</div>
</div>
</header>
<main className="pt-24">

<section className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-32">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                v2.0 Now Available
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-zinc-900 tracking-tight max-w-4xl mr-auto ml-auto">
                AI-powered <br className="hidden md:block"/> document checking
            </h1>
<p className="leading-relaxed text-lg text-zinc-500 max-w-2xl mt-6 mr-auto ml-auto">
                Automate your documentation review with AI. Deep analysis of technical documents specifically designed for engineering teams and compliance.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/10" href="#demo">
<span className="">Test for free</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-2 transition-all hover:border-zinc-300 hover:bg-zinc-50 text-sm font-medium text-zinc-700 bg-white border-zinc-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#">
<iconify-icon icon="lucide:file-down" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Download PDF presentation</span>
</a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/50">
<div className="aspect-[16/9] overflow-hidden rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f5_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f5_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="relative z-10 text-center">
<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg border border-zinc-100">
<iconify-icon className="text-blue-600" icon="lucide:file-check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-400">Processing Document Layer...</p>
</div>

<div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite]" style={{top: '30%'}}></div>
</div>
</div>
</section>

<section className="border-t border-zinc-100 bg-zinc-50/50 py-24" id="benefits">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Results confirmed by real testing</h2>
<p className="mt-4 text-base text-zinc-500 leading-relaxed">
                        Project Vision is designed based on the needs of engineering departments and internal quality control workflows in one of the largest design institutes. Pilot tests showed the following results:
                    </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

<div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">10 min</h3>
<p className="mt-2 text-sm text-zinc-500">Saved per document on average</p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">90%</h3>
<p className="mt-2 text-sm text-zinc-500">Of checking tasks automated</p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">40%</h3>
<p className="mt-2 text-sm text-zinc-500">Reduced workload on reviewers</p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<iconify-icon icon="lucide:undo-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">80%</h3>
<p className="mt-2 text-sm text-zinc-500">Fewer returns and corrections</p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
<iconify-icon icon="lucide:timer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">&lt; 60s</h3>
<p className="mt-2 text-sm text-zinc-500">Time to fully check a document</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Reduce workload and minimize human error</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500">
                        Created specifically for design institutes, state engineering departments, contractors with internal supervision, and technical clients.
                    </p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col items-start">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
<iconify-icon className="text-zinc-900" icon="lucide:building-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900">Design Institutes</h3>
<p className="mt-2 text-sm text-zinc-500">Automate high-volume output checks and ensure standard compliance.</p>
</div>

<div className="flex flex-col items-start">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
<iconify-icon className="text-zinc-900" icon="lucide:landmark" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900">State Departments</h3>
<p className="mt-2 text-sm text-zinc-500">Streamline bureaucratic review processes and reduce backlog.</p>
</div>

<div className="flex flex-col items-start">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
<iconify-icon className="text-zinc-900" icon="lucide:hard-hat" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900">Contractors</h3>
<p className="mt-2 text-sm text-zinc-500">Internal technical supervision before submitting to clients.</p>
</div>

<div className="flex flex-col items-start">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
<iconify-icon className="text-zinc-900" icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900">Technical Clients</h3>
<p className="mt-2 text-sm text-zinc-500">Verify incoming documentation quality instantly.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-24 text-white" id="solution">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Document check in just a few minutes</h2>
<p className="mt-4 max-w-lg text-zinc-400">
                            The system reads the text layer of the PDF, detects formatting issues, and generates a report compliant with GOST R 21.101-2020 and internal standards.
                        </p>
</div>
<div className="lg:text-right">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 transition-hover hover:bg-zinc-100" href="#demo">
                            Test with your own document
                            <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative grid gap-8 md:grid-cols-5">

<div className="absolute top-8 left-0 hidden h-px w-full bg-zinc-800 md:block"></div>

<div className="relative z-10 flex flex-col gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 shadow-xl">
<iconify-icon className="text-blue-400" icon="lucide:upload-cloud" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Upload PDF</h3>
<p className="text-xs text-zinc-400">Secure drag &amp; drop upload to local or cloud server.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 shadow-xl">
<iconify-icon className="text-indigo-400" icon="lucide:scan-text" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Recognition</h3>
<p className="text-xs text-zinc-400">Text layer parsing and structural analysis.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 shadow-xl">
<iconify-icon className="text-violet-400" icon="lucide:cpu" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Automated Check</h3>
<p className="text-xs text-zinc-400">Algorithms verify 100+ points of compliance.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 shadow-xl">
<iconify-icon className="text-fuchsia-400" icon="lucide:file-bar-chart-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Report Generation</h3>
<p className="text-xs text-zinc-400">Detailed list of errors with page references.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 shadow-xl">
<iconify-icon className="text-pink-400" icon="lucide:share-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Export &amp; Analysis</h3>
<p className="text-xs text-zinc-400">Download report and integrate into analytics.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="capabilities">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">What Project Vision checks</h2>
<p className="mt-4 text-zinc-500 mb-8">Current version capabilities include robust structural and formatting validation.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">A4 sheet count &amp; automated paging</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Title block fields verification</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Page-by-page formatting consistency</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Main title block layout validation</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Code formatting by document section (TЧ, TХ, C, CO)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Object and stage naming correctness</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-900" icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
<span className="text-sm text-zinc-700">Text structure and bookmark validation</span>
</li>
</ul>
</div>
<div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-2 shadow-lg">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-white border border-zinc-100 relative group">

<div className="absolute inset-0 flex flex-col p-6">
<div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
<div className="h-4 w-32 bg-zinc-100 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-20 bg-zinc-100 rounded"></div>
<div className="h-8 w-8 bg-zinc-900 rounded"></div>
</div>
</div>
<div className="flex-1 flex gap-4">
<div className="w-1/3 bg-zinc-50 rounded border border-zinc-100 p-3 space-y-2">
<div className="h-3 w-full bg-zinc-200 rounded animate-pulse"></div>
<div className="h-3 w-2/3 bg-zinc-200 rounded animate-pulse"></div>
<div className="h-3 w-4/5 bg-zinc-200 rounded animate-pulse"></div>
</div>
<div className="w-2/3 bg-zinc-50 rounded border border-zinc-100 p-3 flex items-center justify-center">
<div className="text-center">
<div className="mx-auto mb-2 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
<iconify-icon icon="lucide:alert-circle" width="20"></iconify-icon>
</div>
<div className="h-3 w-24 bg-zinc-200 rounded mx-auto"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-12 w-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-zinc-900">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50 py-24">
<div className="mx-auto max-w-7xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Tailored to internal corporate standards</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500">
                    Project Vision can be adapted to GOST requirements, company-specific rules, and custom formatting logic to ensure your brand's technical integrity.
                </p>
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-lg border border-zinc-200 bg-white p-6 text-left">
<iconify-icon className="text-blue-600 mb-4" icon="lucide:settings-2" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900">Additional GOST modules</h3>
</div>
<div className="rounded-lg border border-zinc-200 bg-white p-6 text-left">
<iconify-icon className="text-indigo-600 mb-4" icon="lucide:briefcase" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900">Corporate standard support</h3>
</div>
<div className="rounded-lg border border-zinc-200 bg-white p-6 text-left">
<iconify-icon className="text-violet-600 mb-4" icon="lucide:git-branch" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900">Advanced algorithms logic</h3>
</div>
<div className="rounded-lg border border-zinc-200 bg-white p-6 text-left">
<iconify-icon className="text-emerald-600 mb-4" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900">Role-based access setup</h3>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1 relative">

<div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-4 py-3 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Report_v2.1.pdf</span>
<span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">12 Issues Found</span>
</div>
<div className="p-0">
<div className="grid grid-cols-12 gap-4 border-b border-zinc-50 px-4 py-3 text-xs text-zinc-400 font-medium">
<div className="col-span-2">Page</div>
<div className="col-span-3">Type</div>
<div className="col-span-7">Description</div>
</div>

<div className="grid grid-cols-12 gap-4 border-b border-zinc-50 px-4 py-3 text-sm hover:bg-zinc-50 transition-colors">
<div className="col-span-2 text-zinc-500">03</div>
<div className="col-span-3"><span className="text-red-600 font-medium">Critical</span></div>
<div className="col-span-7 text-zinc-700">Title block dimensions incorrect (GOST 21.1101)</div>
</div>

<div className="grid grid-cols-12 gap-4 border-b border-zinc-50 px-4 py-3 text-sm hover:bg-zinc-50 transition-colors">
<div className="col-span-2 text-zinc-500">12</div>
<div className="col-span-3"><span className="text-orange-600 font-medium">Warning</span></div>
<div className="col-span-7 text-zinc-700">Missing signature in main layout block</div>
</div>

<div className="grid grid-cols-12 gap-4 border-b border-zinc-50 px-4 py-3 text-sm hover:bg-zinc-50 transition-colors">
<div className="col-span-2 text-zinc-500">45</div>
<div className="col-span-3"><span className="text-orange-600 font-medium">Warning</span></div>
<div className="col-span-7 text-zinc-700">Font family mismatch in Section 4.2</div>
</div>
</div>
<div className="bg-zinc-50 px-4 py-3 text-center">
<button className="text-xs font-medium text-blue-600 hover:underline">View full report</button>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Detailed report for every rule violation</h2>
<p className="mt-4 text-base text-zinc-500 leading-relaxed">
                            After analysis, the user receives a file listing all issues grouped by type, severity, and location. Data is available in visual (PDF annotations) and tabular (Excel/CSV) formats for easy correction.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-24 text-white" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Personal and corporate licenses</h2>
<p className="mt-4 text-zinc-400">Choose the deployment model that fits your security and scaling needs.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col rounded-2xl bg-zinc-800 p-6">
<h3 className="text-lg font-medium text-white">Personal</h3>
<p className="mt-2 text-sm text-zinc-400">For individual freelancers</p>
<div className="mt-6 flex-1">
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Single User</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Cloud access</li>
</ul>
</div>
<button className="mt-8 w-full rounded-lg bg-zinc-700 py-2 text-sm font-medium text-white hover:bg-zinc-600">Contact Sales</button>
</div>

<div className="flex flex-col rounded-2xl border border-blue-500/30 bg-zinc-800 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-[10px] px-2 py-1 text-white font-medium rounded-bl-lg">POPULAR</div>
<h3 className="text-lg font-medium text-white">Network</h3>
<p className="mt-2 text-sm text-zinc-400">For small teams</p>
<div className="mt-6 flex-1">
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Up to 100 users</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Priority Support</li>
</ul>
</div>
<button className="mt-8 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-500">Contact Sales</button>
</div>

<div className="flex flex-col rounded-2xl bg-zinc-800 p-6">
<h3 className="text-lg font-medium text-white">API Integration</h3>
<p className="mt-2 text-sm text-zinc-400">For platform builders</p>
<div className="mt-6 flex-1">
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Full API Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Custom Endpoints</li>
</ul>
</div>
<button className="mt-8 w-full rounded-lg bg-zinc-700 py-2 text-sm font-medium text-white hover:bg-zinc-600">Contact Sales</button>
</div>

<div className="flex flex-col rounded-2xl bg-zinc-800 p-6">
<h3 className="text-lg font-medium text-white">On-Premise</h3>
<p className="mt-2 text-sm text-zinc-400">For strict security</p>
<div className="mt-6 flex-1">
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Offline Deployment</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="lucide:check"></iconify-icon> Custom Config</li>
</ul>
</div>
<button className="mt-8 w-full rounded-lg bg-zinc-700 py-2 text-sm font-medium text-white hover:bg-zinc-600">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24" id="demo">
<div className="mx-auto max-w-xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Request demo access</h2>
<p className="mt-4 text-zinc-500">Try the system on your own documents and explore the full functionality.</p>
<form className="mt-8 space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900" id="name" placeholder="Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Work Email</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900" id="email" placeholder="Work Email" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="company">Company</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900" id="company" placeholder="Company Name" type="text"/>
</div>
<button className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800" type="submit">
                        Get Demo Access
                    </button>
<p className="text-center text-xs text-zinc-400 mt-4">By clicking submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 bg-white py-12">
<div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 text-white">
<iconify-icon height="14" icon="lucide:scan-eye" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-900">Project Vision</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Twitter</a>
<a className="hover:text-zinc-900" href="#">LinkedIn</a>
</div>
<p className="text-xs text-zinc-400">© 2023 Project Vision Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
