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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">LINGO</a>
<div className="hidden gap-8 text-sm font-medium text-slate-500 md:flex">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#audience">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hidden text-slate-500 hover:text-slate-900 sm:block transition-colors" href="#">Log in</a>
<a className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 shadow-sm transition-all" href="#">Start free trial</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">

<div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-slate-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                    The operating system for <span className="text-indigo-600">language teachers</span>
</h1>
<p className="mt-6 text-lg leading-8 text-slate-600">
                    Manage your students, schedule classes, process payments, and track learning progress all in one unified platform designed specifically for language education.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" href="#">Get started for free</a>
<a className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-indigo-600 transition-colors" href="#">
                        View demo <iconify-icon icon="heroicons:arrow-right-20-solid"></iconify-icon>
</a>
</div>
</div>

<div className="mt-16 flow-root sm:mt-24">
<div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
<div className="overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10">

<div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/50 px-4 py-3">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-rose-400"></div>
<div className="h-3 w-3 rounded-full bg-emerald-400"></div>
</div>
<div className="ml-4 flex-1 text-center text-xs font-medium text-slate-400">app.lingo.com</div>
</div>

<div className="flex h-[400px] sm:h-[600px]">

<div className="hidden w-64 flex-col border-r border-slate-100 bg-slate-50/30 p-4 sm:flex">
<div className="space-y-1">
<div className="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 cursor-pointer">
<iconify-icon className="text-lg" icon="lucide:layout-dashboard"></iconify-icon> Dashboard
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="lucide:calendar"></iconify-icon> Calendar
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="lucide:users"></iconify-icon> Students
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="lucide:credit-card"></iconify-icon> Billing
                                    </div>
</div>
</div>

<div className="flex-1 p-6 sm:p-8 overflow-hidden bg-white">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-semibold text-slate-900">Today's Schedule</h2>
<p className="text-sm text-slate-500">Tuesday, October 24</p>
</div>
<button className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-500 transition-colors">Add Class</button>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 shadow-sm hover:border-indigo-100 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<img alt="Student" className="h-10 w-10 rounded-full bg-slate-100 object-cover" src="https://i.pravatar.cc/150?u=1"/>
<div>
<p className="text-sm font-medium text-slate-900">Advanced Spanish Conversation</p>
<p className="text-xs text-slate-500">Elena Rodriguez • 10:00 AM - 11:00 AM</p>
</div>
</div>
<span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600 border border-emerald-100">Paid</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 shadow-sm hover:border-indigo-100 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Student" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=2"/>
<img alt="Student" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=3"/>
<img alt="Student" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">French A2 Group</p>
<p className="text-xs text-slate-500">3 Students • 1:00 PM - 2:30 PM</p>
</div>
</div>
<span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600 border border-amber-100">Pending</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-12 bg-slate-50/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-500">Trusted by over 4,000 independent teachers and language schools</p>
<div className="mx-auto mt-8 flex max-w-lg items-center justify-around gap-x-8 sm:max-w-xl lg:max-w-none lg:justify-center lg:gap-x-20">

<div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<iconify-icon className="text-2xl text-indigo-600" icon="ph:globe-hemisphere-west-fill"></iconify-icon>
<span className="font-semibold text-slate-800 text-lg">LinguaGlobal</span>
</div>
<div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<iconify-icon className="text-2xl text-rose-500" icon="ph:chats-teardrop-fill"></iconify-icon>
<span className="font-semibold text-slate-800 text-lg">Polyglot</span>
</div>
<div className="hidden sm:flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<iconify-icon className="text-2xl text-emerald-500" icon="ph:student-fill"></iconify-icon>
<span className="font-semibold text-slate-800 text-lg">FluentAcademy</span>
</div>
<div className="hidden md:flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<iconify-icon className="text-2xl text-amber-500" icon="ph:translate-fill"></iconify-icon>
<span className="font-semibold text-slate-800 text-lg">WordSmith</span>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="features">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Replace 5 different tools with one platform</p>
<p className="mt-6 text-lg leading-8 text-slate-600">Stop juggling spreadsheets, generic calendars, and separate payment links. Lingo brings your entire teaching business into focus.</p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
<div className="flex flex-col">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100">
<iconify-icon className="text-xl text-indigo-600" icon="lucide:calendar-clock"></iconify-icon>
</div>
                            Smart Scheduling
                        </dt>
<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
<p className="flex-auto">Allow students to book times in their local timezone. Automatically syncs with Google Calendar and Outlook to prevent double bookings.</p>
</dd>
</div>
<div className="flex flex-col">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
<iconify-icon className="text-xl text-emerald-600" icon="lucide:badge-dollar-sign"></iconify-icon>
</div>
                            Integrated Payments
                        </dt>
<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
<p className="flex-auto">Sell single classes, packages, or monthly subscriptions. We handle the currency conversion, invoicing, and follow-ups automatically.</p>
</dd>
</div>
<div className="flex flex-col">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 border border-rose-100">
<iconify-icon className="text-xl text-rose-600" icon="lucide:line-chart"></iconify-icon>
</div>
                            Progress Tracking
                        </dt>
<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
<p className="flex-auto">Keep a detailed log of vocabulary, grammar points, and homework for every student. Share beautiful progress reports with one click.</p>
</dd>
</div>
</dl>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 py-24 sm:py-32" id="audience">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
<div className="lg:pr-8 lg:pt-4">
<div className="lg:max-w-lg">
<h2 className="text-base font-semibold leading-7 text-indigo-600">Built for you</h2>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Scale your teaching business</p>
<p className="mt-6 text-lg leading-8 text-slate-600">Whether you're just starting out as a freelancer or running a boutique language academy, our tools adapt to your workflow.</p>
<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
<div className="relative pl-9">
<dt className="inline font-semibold text-slate-900">
<iconify-icon className="absolute left-0 top-1 text-xl text-indigo-600" icon="lucide:check-circle-2"></iconify-icon>
                                    For Independent Tutors.
                                </dt>
<dd className="inline"> Look professional from day one. Reduce admin time by 70% and focus purely on teaching.</dd>
</div>
<div className="relative pl-9">
<dt className="inline font-semibold text-slate-900">
<iconify-icon className="absolute left-0 top-1 text-xl text-indigo-600" icon="lucide:check-circle-2"></iconify-icon>
                                    For Language Schools.
                                </dt>
<dd className="inline"> Manage multiple teachers, allocate rooms (virtual or physical), and get high-level financial reporting.</dd>
</div>
<div className="relative pl-9">
<dt className="inline font-semibold text-slate-900">
<iconify-icon className="absolute left-0 top-1 text-xl text-indigo-600" icon="lucide:check-circle-2"></iconify-icon>
                                    For Corporate Trainers.
                                </dt>
<dd className="inline"> Easily send compliant invoices to HR departments and generate attendance reports automatically.</dd>
</div>
</dl>
</div>
</div>
<div className="relative">
<img alt="Teacher smiling" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" height="1442" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" width="2432"/>

<div className="absolute -bottom-8 -left-8 rounded-xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:bottom-12 sm:left-12">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
<iconify-icon className="text-xl text-emerald-600" icon="lucide:trending-up"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-500">Monthly Revenue</p>
<p className="text-2xl font-bold text-slate-900">$4,250</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-slate-900">
<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to modernize your classes?
                </h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    Join thousands of teachers who have upgraded their workflow. Start your 14-day free trial today. No credit card required.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all" href="#">Get started for free</a>
<a className="text-sm font-semibold leading-6 text-white hover:text-slate-300 transition-colors" href="#">Contact sales <span aria-hidden="true">→</span></a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8 text-slate-600">
<a className="text-2xl font-semibold tracking-tighter text-slate-900" href="#">LINGO</a>
<p className="text-sm leading-6">
                        Making language teaching easier, more professional, and more profitable for educators everywhere.
                    </p>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-slate-500 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-2xl" icon="mdi:twitter"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-500 transition-colors" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon className="text-2xl" icon="mdi:github"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-500 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-2xl" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-slate-900">Product</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-semibold leading-6 text-slate-900">Support</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Community</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Guides</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-semibold leading-6 text-slate-900">Legal</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm leading-6 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24">
<p className="text-xs leading-5 text-slate-500">© 2024 Lingo, Inc. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
