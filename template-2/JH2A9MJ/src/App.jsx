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
      
      // Icons
      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Year
        var y = document.getElementById('year');
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
      
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 text-white flex items-center justify-center font-semibold tracking-tight">EC</div>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Settings</h1>
<p className="text-sm text-neutral-500">Manage your account, preferences, help, and contact</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition">
<i className="h-4 w-4" data-lucide="save"></i>
            Save
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition">
<i className="h-4 w-4" data-lucide="log-out"></i>
            Sign out
          </button>
</div>
</header>

<div className="mt-6">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="Search settings, e.g., notifications, reminders, FAQ…" type="text" />
</div>
</div>

<main className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<div className="flex items-center justify-between">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Account</h2>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="h-12 w-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-medium">EC</div>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<p className="text-sm sm:text-base font-medium">Your Name</p>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-0.5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="check-circle"></i>
                      Email verified
                    </span>
</div>
<p className="text-sm text-neutral-500">you@example.com</p>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition">
<i className="h-4 w-4" data-lucide="user"></i>
                    Edit profile
                  </button>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition sm:hidden">
<i className="h-4 w-4" data-lucide="log-out"></i>
                    Sign out
                  </button>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium">Account type</p>
<p className="text-sm text-neutral-500">Patient or Health Provider</p>
</div>
<span className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-2 py-0.5">Patient</span>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium">2-step verification</p>
<p className="text-sm text-neutral-500">Protect your account</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Appointments & Preferences</h2>
</div>
<div className="p-4 sm:p-6 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Appointment reminders</p>
<p className="text-sm text-neutral-500">Receive alerts before your visit</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
<div className="mt-3">
<div className="relative">
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
<select className="w-full appearance-none rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition">
<option>30 minutes before</option>
<option>1 hour before</option>
<option>6 hours before</option>
<option>1 day before</option>
</select>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">WhatsApp reminders</p>
<p className="text-sm text-neutral-500">Get non-emergency updates</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
<p className="mt-3 text-xs text-neutral-500">Only used for scheduled notifications, not emergencies.</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Email notifications</p>
<p className="text-sm text-neutral-500">Confirmations, updates, and records</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Data sharing consent</p>
<p className="text-sm text-neutral-500">Allow sharing records with your provider</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium">Time zone</label>
<div className="mt-2 relative">
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
<select className="w-full appearance-none rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition">
<option>(GMT+05:00) Pakistan Standard Time</option>
<option>(GMT+04:00) Gulf Standard Time</option>
<option>(GMT+01:00) Central European Time</option>
<option>(GMT+00:00) UTC</option>
</select>
</div>
</div>
<div>
<label className="text-sm font-medium">Default appointment length</label>
<div className="mt-2 relative">
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
<select className="w-full appearance-none rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition">
<option>15 minutes</option>
<option>20 minutes</option>
<option>30 minutes</option>
<option>45 minutes</option>
</select>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Privacy & Security</h2>
</div>
<div className="p-4 sm:p-6 space-y-4">
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
<div>
<p className="text-sm font-medium">New device login alerts</p>
<p className="text-sm text-neutral-500">Email you when your account is used on a new device</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
<div>
<p className="text-sm font-medium">Share anonymized usage data</p>
<p className="text-sm text-neutral-500">Improve services while protecting your identity</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<span className="w-10 h-6 rounded-full bg-neutral-200 peer-checked:bg-neutral-900 transition-colors relative">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
<div>
<p className="text-sm font-medium">Session management</p>
<p className="text-sm text-neutral-500">Sign out from all other devices</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition">
<i className="h-4 w-4" data-lucide="shield"></i>
                  Sign out others
                </button>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<div className="flex items-center justify-between">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">FAQs</h2>
<span className="text-xs text-neutral-500">Tap to expand</span>
</div>
<div className="mt-4">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-md border border-neutral-200 bg-white pl-10 pr-3 py-2 text-sm outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="Search FAQ…" type="text" />
</div>
</div>
</div>
<div className="p-2 sm:p-4">

<details className="group rounded-lg border border-neutral-200 bg-white p-4 open:shadow-sm transition-all">
<summary className="flex w-full list-none items-start justify-between gap-4 cursor-pointer">
<div className="pr-6">
<h3 className="text-sm font-medium">Who can use this application?</h3>
<p className="text-xs text-neutral-500 mt-0.5">Eligibility and verification</p>
</div>
<i className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-neutral-700">
                  Only registered and verified health providers and users can use this app with email verification.
                </div>
</details>
<div className="h-px bg-neutral-200 my-2"></div>
<details className="group rounded-lg border border-neutral-200 bg-white p-4 open:shadow-sm transition-all">
<summary className="flex w-full list-none items-start justify-between gap-4 cursor-pointer">
<div className="pr-6">
<h3 className="text-sm font-medium">How is it beneficial to patients?</h3>
<p className="text-xs text-neutral-500 mt-0.5">Scheduling and records</p>
</div>
<i className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-neutral-700">
                  It’s beneficial in scheduling only health-related services and appointments. User record keeping related to appointments and medical records that the user wants to store or share.
                </div>
</details>
<div className="h-px bg-neutral-200 my-2"></div>
<details className="group rounded-lg border border-neutral-200 bg-white p-4 open:shadow-sm transition-all">
<summary className="flex w-full list-none items-start justify-between gap-4 cursor-pointer">
<div className="pr-6">
<h3 className="text-sm font-medium">How can I seek help in the form of query, question, or guidance?</h3>
<p className="text-xs text-neutral-500 mt-0.5">Support and scope</p>
</div>
<i className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-neutral-700">
                  You can contact us by email. We do not provide any kind of emergency services or SOS-based calls, communication, or guidance. We operate in a scheduled and non-emergency environment.
                </div>
</details>
<div className="h-px bg-neutral-200 my-2"></div>
<details className="group rounded-lg border border-neutral-200 bg-white p-4 open:shadow-sm transition-all">
<summary className="flex w-full list-none items-start justify-between gap-4 cursor-pointer">
<div className="pr-6">
<h3 className="text-sm font-medium">Who can register as a health provider?</h3>
<p className="text-xs text-neutral-500 mt-0.5">Provider eligibility</p>
</div>
<i className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-neutral-700">
                  Any medical doctor who is licensed by the Government of Pakistan to practice as per law can register and provide health-related services inside Pakistan only.
                </div>
</details>
<div className="h-px bg-neutral-200 my-2"></div>
<details className="group rounded-lg border border-neutral-200 bg-white p-4 open:shadow-sm transition-all">
<summary className="flex w-full list-none items-start justify-between gap-4 cursor-pointer">
<div className="pr-6">
<h3 className="text-sm font-medium">Does eclinicx charge any fee from patients?</h3>
<p className="text-xs text-neutral-500 mt-0.5">Fees and payments</p>
</div>
<i className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-neutral-700">
                  No. eclinicx does not charge anything from patients. We or our employees do not claim any money and we don’t deal in any online, telephonic, or in-person financial services or clearance.
                </div>
</details>
</div>
</div>

<div className="rounded-xl border border-amber-200 bg-amber-50">
<div className="p-4 sm:p-6">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-amber-600 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<p className="text-sm font-medium text-amber-900">Important</p>
<p className="text-sm text-amber-800">
                    This app does not provide emergency services or SOS-based calls or guidance. It operates only in a scheduled, non-emergency environment.
                  </p>
</div>
</div>
</div>
</div>
</section>

<aside className="space-y-6">

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<h2 className="text-lg font-semibold tracking-tight">Contact & Support</h2>
</div>
<div className="p-4 sm:p-6 space-y-4">
<div className="space-y-3">
<a className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 hover:border-neutral-300 transition" href="https://www.eclinicx.com" target="_blank">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="globe"></i>
<div>
<p className="text-sm font-medium">Website</p>
<p className="text-xs text-neutral-500">www.eclinicx.com</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 hover:border-neutral-300 transition" href="mailto:contact@eclinicx.com">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="mail"></i>
<div>
<p className="text-sm font-medium">Email</p>
<p className="text-xs text-neutral-500">contact@eclinicx.com</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 hover:border-neutral-300 transition" href="https://wa.me/923074442024" target="_blank">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="message-circle"></i>
<div>
<p className="text-sm font-medium">WhatsApp</p>
<p className="text-xs text-neutral-500">+92 307 4442024</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="arrow-right"></i>
</a>
</div>
<div className="h-px bg-neutral-200"></div>

<form className="space-y-3" onSubmit={(e) => { return false; }}>
<div>
<label className="text-xs font-medium text-neutral-700">Your email</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="you@example.com" type="email" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs font-medium text-neutral-700">Mobile number</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="+92 XXX XXXXXXX" type="tel" />
</div>
<div>
<label className="text-xs font-medium text-neutral-700">WhatsApp</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="+92 307 4442024" type="tel" />
</div>
</div>
<div>
<label className="text-xs font-medium text-neutral-700">Message</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300 transition" placeholder="How can we help?" rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 hover:border-neutral-800 transition">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send
                </button>
</form>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 sm:p-6 border-b border-neutral-200">
<h2 className="text-lg font-semibold tracking-tight">About</h2>
</div>
<div className="p-4 sm:p-6 space-y-4">
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<div>
<p className="text-sm font-medium">App version</p>
<p className="text-xs text-neutral-500">v1.0.0</p>
</div>
</div>
<span className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-2 py-0.5">Up to date</span>
</div>
<a className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 hover:border-neutral-300 transition" href="#">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="file-text"></i>
<div>
<p className="text-sm font-medium">Terms of Service</p>
<p className="text-xs text-neutral-500">Read our terms</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 hover:border-neutral-300 transition" href="#">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-600" data-lucide="lock"></i>
<div>
<p className="text-sm font-medium">Privacy Policy</p>
<p className="text-xs text-neutral-500">How we handle your data</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="rounded-xl border border-red-200 bg-red-50">
<div className="p-4 sm:p-6">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-red-600 mt-0.5" data-lucide="trash-2"></i>
<div>
<p className="text-sm font-medium text-red-900">Delete account</p>
<p className="text-sm text-red-800">This action cannot be undone.</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-red-300 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100 hover:border-red-400 transition">
<i className="h-4 w-4" data-lucide="x-circle"></i>
                  Delete
                </button>
</div>
</div>
</div>
</aside>
</main>

<footer className="mt-10 border-t border-neutral-200 pt-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
<p>© <span id="year"></span> eclinicx. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-800 transition" href="#">Help Center</a>
<a className="hover:text-neutral-800 transition" href="#">Status</a>
<a className="hover:text-neutral-800 transition" href="#">Security</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
