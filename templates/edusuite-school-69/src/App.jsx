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



      // Initialize icons with consistent 1.5 stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Mobile menu toggle
        const open = document.getElementById('mobile-open');
        const menu = document.getElementById('mobile-menu');
        open?.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
        // Tab switcher
        const tabK12 = document.getElementById('tab-k12');
        const tabTer = document.getElementById('tab-tertiary');
        const panelK12 = document.getElementById('panel-k12');
        const panelTer = document.getElementById('panel-tertiary');

        function activate(tab) {
          const isK12 = tab === 'k12';
          tabK12.setAttribute('data-active', isK12 ? 'true' : 'false');
          tabTer.setAttribute('data-active', !isK12 ? 'true' : 'false');
          panelK12.classList.toggle('hidden', !isK12);
          panelTer.classList.toggle('hidden', isK12);
        }
        tabK12?.addEventListener('click', () => activate('k12'));
        tabTer?.addEventListener('click', () => activate('ter'));
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });
    
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
      

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-sm text-slate-700">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="sparkles"></i>
<span className="font-medium text-slate-900">New</span>
</span>
<span className="hidden sm:inline text-slate-600">Student wellness &amp; safeguarding module is now available.</span>
<a className="inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded px-1 -mx-1" href="#">
          Learn more
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center shadow-sm ring-1 ring-slate-900/10">
<span className="text-[11px] font-semibold tracking-[-0.04em]">EF</span>
</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">EduSuite</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-700 hover:text-slate-900" href="#features">Features</a>
<a className="text-slate-700 hover:text-slate-900" href="#solutions">Solutions</a>
<a className="text-slate-700 hover:text-slate-900" href="#integrations">Integrations</a>
<a className="text-slate-700 hover:text-slate-900" href="#pricing">Pricing</a>
<a className="text-slate-700 hover:text-slate-900" href="#resources">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-slate-700 hover:text-slate-900 text-sm px-3 py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2.5 rounded-md shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" href="#cta">
              Get started
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" id="mobile-open">
<i className="w-5 h-5" data-lucide="align-right"></i>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-200 bg-white" id="mobile-menu">
<div className="px-4 py-4 space-y-2">
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#features">Features</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#solutions">Solutions</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#integrations">Integrations</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#pricing">Pricing</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#resources">Resources</a>
<div className="pt-2 flex items-center gap-2">
<a className="flex-1 text-center text-slate-700 border border-slate-200 rounded-md px-3 py-2 hover:bg-slate-50" href="#">Sign in</a>
<a className="flex-1 text-center bg-slate-900 text-white rounded-md px-3 py-2 hover:bg-slate-800" href="#cta">Get started</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
<div className="absolute -top-40 -right-20 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20 bg-indigo-200"></div>
<div className="absolute -bottom-32 -left-10 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-20 bg-sky-200"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
<i className="w-4 h-4 text-emerald-600" data-lucide="shield-check"></i>
              SOC 2 Type II • GDPR ready • FERPA aligned
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              One platform to run your entire school
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600">
              From K–12 to higher education, streamline admissions, attendance, LMS, fees, communication, and accreditation. All in one place your teams love to use.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#cta">
                Start free
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#demo">
                Book a demo
                <i className="w-4 h-4" data-lucide="video"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span>No setup fees or long-term contracts</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span>Launch in days, not months</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span>24/7 support and onboarding</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span>Flexible for K–12 and tertiary</span>
</div>
</div>
<div className="mt-10">
<p className="text-xs uppercase tracking-wide text-slate-500 mb-3">Trusted by schools and universities worldwide</p>
<div className="flex items-center gap-6 sm:gap-10 opacity-80">
<div className="text-slate-700 text-sm font-medium tracking-tight">NOVA</div>
<div className="text-slate-700 text-sm font-medium tracking-tight">ALPHA</div>
<div className="text-slate-700 text-sm font-medium tracking-tight">ORBIT</div>
<div className="text-slate-700 text-sm font-medium tracking-tight">LYRA</div>
<div className="text-slate-700 text-sm font-medium tracking-tight">CIVIC</div>
</div>
</div>
</div>
<div className="lg:col-span-6">

<div className="relative">
<div className="relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-slate-600 text-sm">Dashboard — Spring Term</div>
<div className="w-16"></div>
</div>
<div className="p-4 sm:p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="calendar"></i>
<span className="font-medium text-slate-900">Timetable</span>
</div>
<span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">Live</span>
</div>
<img alt="Timetable mock" className="mt-3 rounded-md border border-slate-200 object-cover w-full h-28" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white hover:shadow-sm transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="graduation-cap"></i>
<span className="font-medium text-slate-900">Grades &amp; Transcripts</span>
</div>
<img alt="Grades mock" className="mt-3 rounded-md border border-slate-200 object-cover w-full h-28" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white hover:shadow-sm transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="notebook-text"></i>
<span className="font-medium text-slate-900">LMS &amp; Assignments</span>
</div>
<img alt="LMS mock" className="mt-3 rounded-md border border-slate-200 object-cover w-full h-28" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white hover:shadow-sm transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="credit-card"></i>
<span className="font-medium text-slate-900">Fees &amp; Billing</span>
</div>
<img alt="Fees mock" className="mt-3 rounded-md border border-slate-200 object-cover w-full h-28" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -bottom-8 -left-6 w-60 rounded-xl border border-slate-200 bg-white shadow-md p-4">
<div className="flex items-center gap-3">
<img alt="Student" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="text-sm font-medium text-slate-900">Attendance</div>
<div className="text-xs text-slate-600">Checked-in: 98.4%</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded border border-emerald-100 bg-emerald-50 text-emerald-700 px-2 py-1">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i> +2.1%
                  </span>
<span className="text-slate-600">vs last term</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything your campus runs on</h2>
<p className="mt-3 text-slate-600">Replace spreadsheets and scattered tools with a single system designed for academic, administrative, and finance teams.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<div className="font-medium text-slate-900">Admissions &amp; Enrolment</div>
</div>
<p className="mt-3 text-sm text-slate-600">Custom forms, workflows, and automated reviews—connect offers to enrolments and fee plans.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="clipboard-list"></i>
</div>
<div className="font-medium text-slate-900">Attendance &amp; Safeguarding</div>
</div>
<p className="mt-3 text-sm text-slate-600">Real‑time attendance, late slips, incident logs, and guardian notifications with full audit trail.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="book-open-check"></i>
</div>
<div className="font-medium text-slate-900">Curriculum &amp; LMS</div>
</div>
<p className="mt-3 text-sm text-slate-600">Syllabi, lessons, assignments, rubrics, and plagiarism checks—synced with your SIS.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<div className="font-medium text-slate-900">Fees, Billing &amp; Financial Aid</div>
</div>
<p className="mt-3 text-sm text-slate-600">Invoices, online payments, split billing, scholarships, and payment plans—export to your ledger.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<div className="font-medium text-slate-900">Messaging &amp; Portals</div>
</div>
<p className="mt-3 text-sm text-slate-600">Unified inbox for staff, students, and guardians with announcements and self‑service portals.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-50 border border-indigo-100 grid place-items-center text-indigo-700">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<div className="font-medium text-slate-900">Accreditation &amp; Compliance</div>
</div>
<p className="mt-3 text-sm text-slate-600">Evidence rooms, outcomes mapping, reports, and program review workflows built‑in.</p>
<a className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm hover:text-indigo-800" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Built for every stage of learning</h2>
<p className="mt-3 text-slate-600">Switch between K–12 and tertiary views to see how modules adapt to your workflows.</p>
</div>
<div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
<button className="px-3 sm:px-4 py-2 text-sm rounded-md data-[active='true']:bg-slate-900 data-[active='true']:text-white hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" data-active="true" id="tab-k12">K–12</button>
<button className="px-3 sm:px-4 py-2 text-sm rounded-md hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" id="tab-tertiary">Tertiary</button>
</div>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6" id="panel-k12">
<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="school"></i>
<div className="font-medium text-slate-900">Homerooms, guardians, and behavior tracking</div>
</div>
<img alt="K-12 classroom" className="mt-4 w-full h-64 object-cover rounded-lg border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Guardian consents &amp; sign‑outs</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Behavior &amp; merit/demerit points</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Health records &amp; medication logs</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Bus routes &amp; field trips</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="message-square"></i>
<div className="font-medium text-slate-900">Family communications</div>
</div>
<p className="mt-2 text-sm text-slate-600">Announcements, two‑way messages, and auto‑translations keep families informed.</p>
<div className="mt-4 space-y-3">
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">To: Grade 5 Guardians</div>
<div className="mt-1 text-sm text-slate-800">Reminder: Science Fair this Friday at 1pm. Please check the project rubric.</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">To: Homeroom 2B</div>
<div className="mt-1 text-sm text-slate-800">Field trip forms due tomorrow. Permission slips can be signed in the portal.</div>
</div>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 hidden" id="panel-tertiary">
<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="library"></i>
<div className="font-medium text-slate-900">Programs, credits, and accreditation outcomes</div>
</div>
<img alt="University lecture hall" className="mt-4 w-full h-64 object-cover rounded-lg border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Program structures &amp; prerequisites</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Credit audits &amp; degree progress</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Outcome mapping &amp; evidence rooms</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Advising &amp; early alerts</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="briefcase"></i>
<div className="font-medium text-slate-900">Registrar &amp; finance</div>
</div>
<p className="mt-2 text-sm text-slate-600">Cohorts, add/drop periods, tuition plans, grants, and compliance reporting.</p>
<div className="mt-4 space-y-3">
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Registrar action</div>
<div className="mt-1 text-sm text-slate-800">3 students below 12 credits. Send advising nudges?</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Finance alert</div>
<div className="mt-1 text-sm text-slate-800">$42,100 in pending tuition. Auto‑reminders scheduled.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900">30%</div>
<div className="mt-1 text-sm text-slate-600">Admin time saved</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900">98.9%</div>
<div className="mt-1 text-sm text-slate-600">System uptime</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900">2M+</div>
<div className="mt-1 text-sm text-slate-600">Assignments graded</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900">140+</div>
<div className="mt-1 text-sm text-slate-600">Countries supported</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Works with your tools</h2>
<p className="mt-3 text-slate-600">Connect identity, payments, video, content, and analytics with native integrations and open APIs.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-sky-600" data-lucide="mail"></i>
<span className="text-sm font-medium text-slate-800">Google</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-blue-700" data-lucide="scan-face"></i>
<span className="text-sm font-medium text-slate-800">Microsoft</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-sky-700" data-lucide="video"></i>
<span className="text-sm font-medium text-slate-800">Zoom</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-indigo-700" data-lucide="credit-card"></i>
<span className="text-sm font-medium text-slate-800">Payments</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-rose-600" data-lucide="file-text"></i>
<span className="text-sm font-medium text-slate-800">Docs</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex items-center justify-center gap-2 hover:shadow-sm">
<i className="w-5 h-5 text-emerald-700" data-lucide="sliders"></i>
<span className="text-sm font-medium text-slate-800">SIS API</span>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Loved by staff, students, and families</h2>
<p className="mt-3 text-slate-600">See how schools modernize operations and elevate learning experiences.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Person" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<div className="text-sm font-medium text-slate-900">Maya R.</div>
<div className="text-xs text-slate-600">Principal, International School</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">We cut admin time by a third. Teachers finally have a system that fits the school day instead of fighting it.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Person" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<div className="text-sm font-medium text-slate-900">Dr. Lewis A.</div>
<div className="text-xs text-slate-600">Registrar, City University</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Credit audits and accreditation reports that used to take weeks now run in minutes.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Person" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="text-sm font-medium text-slate-900">Priya N.</div>
<div className="text-xs text-slate-600">Head of Operations</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">The parent portal is a game‑changer. Fewer calls, faster payments, happier families.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="mt-3 text-slate-600">Choose a plan that scales with your institution. No hidden fees.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md">
<div className="flex items-center justify-between">
<div className="text-lg font-medium text-slate-900">Starter</div>
<span className="text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 rounded px-2 py-0.5">Most popular</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">$2</div>
<div className="text-sm text-slate-600">per student / month</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Admissions, SIS, attendance</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>LMS &amp; messaging</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Standard support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800" href="#cta">Get started</a>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md">
<div className="text-lg font-medium text-slate-900">Growth</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">$4</div>
<div className="text-sm text-slate-600">per student / month</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Everything in Starter</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Fees, billing &amp; financial aid</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Advanced analytics</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2.5 text-sm hover:bg-indigo-500" href="#cta">Try Growth</a>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md">
<div className="text-lg font-medium text-slate-900">Enterprise</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Custom</div>
<div className="text-sm text-slate-600">for K–12 networks &amp; universities</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>SLA &amp; SSO (SAML/OIDC)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Custom data residency</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Dedicated success manager</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-slate-900 px-4 py-2.5 text-sm hover:bg-slate-50" href="#cta">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Enterprise‑grade security</h3>
<p className="mt-3 text-slate-600">Your data is protected with encryption at rest and in transit, fine‑grained permissions, and continuous monitoring.</p>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="lock"></i>FERPA, GDPR, COPPA awareness</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="key-round"></i>SSO via Google, Microsoft, SAML</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="server"></i>Regional hosting options</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="file-check-2"></i>Audit logs &amp; role‑based access</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="shield-check"></i>
<div className="text-sm font-medium text-slate-900">SOC 2 Type II</div>
</div>
<p className="mt-2 text-sm text-slate-600">Controls independently audited annually.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="cloud-lock"></i>
<div className="text-sm font-medium text-slate-900">Encryption</div>
</div>
<p className="mt-2 text-sm text-slate-600">TLS 1.2+ in transit, AES‑256 at rest.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="badge-check"></i>
<div className="text-sm font-medium text-slate-900">Permissions</div>
</div>
<p className="mt-2 text-sm text-slate-600">Granular roles for staff, faculty, students, families.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="activity"></i>
<div className="text-sm font-medium text-slate-900">Monitoring</div>
</div>
<p className="mt-2 text-sm text-slate-600">Liveness, alerts, and anomaly detection.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Run your school on one platform</h3>
<p className="mt-2 text-slate-600">Launch in days with white‑glove onboarding.</p>
</div>
<form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<i className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="mail"></i>
<input className="w-full pl-10 pr-3 py-3 rounded-md border border-slate-200 focus:border-indigo-500 focus:ring-0 text-sm" placeholder="Work email" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
              Get started
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
<div className="col-span-2">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center shadow-sm ring-1 ring-slate-900/10">
<span className="text-[11px] font-semibold tracking-[-0.04em]">EF</span>
</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">EduSuite</span>
</a>
<p className="mt-4 text-slate-600">Unified management for K–12 and higher education.</p>
<div className="mt-4 flex items-center gap-3 text-slate-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Global offices • Remote‑first</span>
</div>
</div>
<div>
<div className="text-slate-900 font-medium">Product</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#features">Features</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#integrations">Integrations</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#pricing">Pricing</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<div className="text-slate-900 font-medium">Solutions</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#solutions">K–12</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#solutions">Tertiary</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Networks</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">International</a></li>
</ul>
</div>
<div>
<div className="text-slate-900 font-medium">Resources</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Docs</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Help center</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Templates</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Status</a></li>
</ul>
</div>
<div>
<div className="text-slate-900 font-medium">Company</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#">About</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Security</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
<div className="text-xs text-slate-500">© <span id="year"></span> EduSuite Inc. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs">
<a className="text-slate-500 hover:text-slate-700" href="#">Privacy</a>
<a className="text-slate-500 hover:text-slate-700" href="#">Terms</a>
<a className="text-slate-500 hover:text-slate-700" href="#">DPA</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
