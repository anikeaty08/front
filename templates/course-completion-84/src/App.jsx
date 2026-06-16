import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize lucide icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Utilities
    const openModal = (id) => {
      const m = document.getElementById(id);
      if (!m) return;
      m.classList.remove('hidden');
      m.setAttribute('aria-hidden', 'false');
      const focusable = m.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus();
    };

    const closeModal = (id) => {
      const m = document.getElementById(id);
      if (!m) return;
      m.classList.add('hidden');
      m.setAttribute('aria-hidden', 'true');
    };

    const showToast = (message, variant = 'default') => {
      const root = document.getElementById('toastRoot');
      const colors = {
        default: 'bg-white/[0.04] ring-white/10',
        success: 'bg-emerald-500/10 ring-emerald-400/30',
        info: 'bg-cyan-500/10 ring-cyan-400/30',
        warning: 'bg-amber-500/10 ring-amber-400/30',
      };
      const icons = {
        default: 'info',
        success: 'check',
        info: 'sparkles',
        warning: 'alert-triangle',
      };
      const el = document.createElement('div');
      el.className = `pointer-events-auto flex items-center gap-3 rounded-xl px-3.5 py-2.5 ring-1 ${colors[variant] || colors.default} shadow`;
      el.innerHTML = `
        <i data-lucide="${icons[variant] || icons.default}" class="w-4 h-4 ${variant==='success'?'text-emerald-300': variant==='info'?'text-cyan-300': variant==='warning'?'text-amber-300':'text-slate-300'}"></i>
        <span class="text-sm text-slate-200">${message}</span>
      `;
      root.appendChild(el);
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      setTimeout(() => {
        el.classList.add('opacity-0', 'translate-y-1', 'transition');
        setTimeout(() => root.removeChild(el), 200);
      }, 2600);
    };

    // Actions
    const btnDownload = document.getElementById('btnDownload');
    const btnSupport = document.getElementById('btnSupport');
    const btnRequest = document.getElementById('btnRequest');
    const hiddenDownloader = document.getElementById('hiddenDownloader');

    btnDownload?.addEventListener('click', () => {
      const content = `Certificate of Completion\nCourse: Advanced Data Fundamentals\nUser: John Doe\nScore: 92%\nDate: ${new Date().toLocaleDateString()}\n\nCongratulations!`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      hiddenDownloader.href = url;
      hiddenDownloader.download = 'certificate.txt';
      hiddenDownloader.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast('Your download has started.', 'success');
    });

    btnSupport?.addEventListener('click', () => openModal('supportModal'));
    btnRequest?.addEventListener('click', () => openModal('requestModal'));

    // Close modals via buttons
    document.querySelectorAll('[data-close]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-close');
        closeModal(id);
      });
    });

    // Dismiss on backdrop click
    ['supportModal', 'requestModal'].forEach((id) => {
      const m = document.getElementById(id);
      if (!m) return;
      m.addEventListener('click', (e) => {
        if (e.target === m) closeModal(id);
      });
    });

    // Escape to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['supportModal', 'requestModal'].forEach(closeModal);
      }
    });

    // Support quick send
    document.getElementById('supportSend')?.addEventListener('click', () => {
      showToast('Message sent to support. We’ll be in touch soon!', 'info');
      closeModal('supportModal');
    });

    // Request customization form submit
    document.getElementById('requestForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your customization request has been submitted.', 'success');
      closeModal('requestModal');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen">

<header className="border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/10">
<span className="text-white text-sm tracking-tight font-semibold">LX</span>
</div>
<div className="h-6 w-px bg-white/10"></div>
<h1 className="text-[20px] md:text-[22px] text-white tracking-tight font-semibold">Members Area</h1>
</div>
<div className="flex items-center gap-4">

<button aria-label="Go to dashboard" className="group hidden md:flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 ring-1 ring-inset ring-white/10 bg-white/[0.02] hover:text-white hover:bg-white/[0.04] hover:ring-emerald-300/40 transition-colors">
<i className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</button>
<div className="flex items-center gap-3">

<button aria-label="Notifications" className="group relative rounded-xl p-2 ring-1 ring-inset ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:ring-cyan-300/40 transition-colors">
<i className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 ring-2 ring-slate-950"></span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-inset ring-white/10">
<img alt="User avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="lg:col-span-8 space-y-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6">
<div className="flex items-center justify-between gap-4">
<div className="space-y-1">
<h2 className="text-[26px] md:text-[30px] tracking-tight font-semibold text-white">Course Completed</h2>
<p className="text-slate-400 text-sm md:text-base">You’ve successfully finished “Advanced Data Fundamentals”.</p>
</div>
<div className="hidden md:flex items-center gap-3 rounded-xl px-3 py-2 ring-1 ring-inset ring-white/10 bg-white/5">
<i className="w-5 h-5 text-amber-300" data-lucide="trophy"></i>
<span className="text-slate-200 text-sm font-medium">Great job!</span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl p-4 ring-1 ring-inset ring-white/10 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-400 text-xs uppercase tracking-wide">Score</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="circle-check"></i>
</div>
<div className="text-white text-[22px] tracking-tight font-semibold">92%</div>
<p className="text-slate-400 text-xs mt-1">Passed threshold 80%</p>
</div>
<div className="rounded-xl p-4 ring-1 ring-inset ring-white/10 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-400 text-xs uppercase tracking-wide">Time Spent</span>
<i className="w-4 h-4 text-cyan-400" data-lucide="timer"></i>
</div>
<div className="text-white text-[22px] tracking-tight font-semibold">1h 27m</div>
<p className="text-slate-400 text-xs mt-1">Focused learning</p>
</div>
<div className="rounded-xl p-4 ring-1 ring-inset ring-white/10 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-400 text-xs uppercase tracking-wide">Modules</span>
<i className="w-4 h-4 text-violet-400" data-lucide="layers"></i>
</div>
<div className="text-white text-[22px] tracking-tight font-semibold">8 / 8</div>
<p className="text-slate-400 text-xs mt-1">All complete</p>
</div>
</div>
<div className="mt-6">
<div className="flex items-center justify-between">
<span className="text-slate-300 text-sm">Overall Progress</span>
<span className="text-slate-400 text-sm">100%</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/[0.06] overflow-hidden ring-1 ring-inset ring-white/10">
<div className="h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button aria-label="Review answers" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="list-checks"></i>
<span className="font-medium">Review Answers</span>
</button>
<button aria-label="Retake quiz" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
<span className="font-medium">Retake Quiz</span>
</button>
<span className="ml-auto hidden md:inline-flex items-center gap-2 text-slate-400 text-xs">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Your data is secure</span>
</span>
</div>
</div>

<div className="rounded-2xl border border-white/10 p-6">
<div className="flex items-center justify-between">
<h3 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-white">What you’ve covered</h3>
<span className="text-xs text-slate-400">8 modules</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-inset ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="database"></i>
<span className="text-slate-200 text-sm font-medium">Relational Modeling</span>
</div>
<p className="text-slate-400 text-sm">Keys, normalization, indexing patterns.</p>
</div>
<div className="rounded-xl ring-1 ring-inset ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="line-chart"></i>
<span className="text-slate-200 text-sm font-medium">Analytics Pipelines</span>
</div>
<p className="text-slate-400 text-sm">Batch vs streaming, orchestration, metrics.</p>
</div>
<div className="rounded-xl ring-1 ring-inset ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-blue-400" data-lucide="server"></i>
<span className="text-slate-200 text-sm font-medium">Warehousing</span>
</div>
<p className="text-slate-400 text-sm">Schemas, partitions, cost optimization.</p>
</div>
<div className="rounded-xl ring-1 ring-inset ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-violet-400" data-lucide="shield-check"></i>
<span className="text-slate-200 text-sm font-medium">Governance</span>
</div>
<p className="text-slate-400 text-sm">Access controls, lineage, compliance.</p>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-4 space-y-6">

<div className="sticky top-6">
<div className="space-y-4">

<button aria-label="Download certificate or course materials" className="group w-full inline-flex items-center justify-between gap-3 rounded-xl px-6 py-3 text-base text-white/80 ring-1 ring-cyan-500/30 hover:text-cyan-200 hover:ring-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 focus:outline-none" data-action="download" id="btnDownload">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="download"></i>
<span className="text-[14px] font-semibold tracking-tight">Download</span>
</span>
<i className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>

<button aria-controls="supportModal" aria-haspopup="dialog" aria-label="Open support options" className="group w-full inline-flex items-center justify-between gap-3 rounded-xl px-6 py-3 text-base text-white/80 ring-1 ring-cyan-500/30 hover:text-cyan-200 hover:ring-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 focus:outline-none" data-action="support" id="btnSupport">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="messages-square"></i>
<span className="text-[14px] font-semibold tracking-tight">Support</span>
</span>
<i className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>

<button aria-controls="requestModal" aria-haspopup="dialog" aria-label="Request a customization" className="group w-full inline-flex items-center justify-between gap-3 rounded-xl px-6 py-3 text-base text-white/80 ring-1 ring-cyan-500/30 hover:text-cyan-200 hover:ring-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 focus:outline-none" data-action="request" id="btnRequest">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-[14px] font-semibold tracking-tight">Request Customization</span>
</span>
<i className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
</div>

<div className="mt-6 rounded-2xl border border-white/10 p-5">
<div className="flex items-center justify-between mb-3">
<h4 className="text-[16px] tracking-tight font-semibold text-white">Course Progress</h4>
<span className="text-xs text-slate-400">100%</span>
</div>
<div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden ring-1 ring-inset ring-white/10">
<div className="h-full w-full bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
</div>
<ul className="mt-4 divide-y divide-white/5">
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-300">Intro &amp; Setup</span>
</div>
<span className="text-xs text-slate-400">100%</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-300">Relational Modeling</span>
</div>
<span className="text-xs text-slate-400">100%</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-300">Analytics Pipelines</span>
</div>
<span className="text-xs text-slate-400">100%</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-300">Warehousing</span>
</div>
<span className="text-xs text-slate-400">100%</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-300">Governance</span>
</div>
<span className="text-xs text-slate-400">100%</span>
</li>
</ul>
</div>
</div>
</aside>
</div>
</main>
</div>

<div aria-hidden="true" aria-labelledby="supportTitle" aria-modal="true" className="hidden fixed inset-0 z-40" id="supportModal" role="dialog">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto w-full max-w-lg px-6">
<div className="mt-24 rounded-2xl border border-white/10 bg-slate-950/95 shadow-xl">
<div className="flex items-center justify-between p-5 border-b border-white/10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="life-buoy"></i>
<h5 className="text-[20px] tracking-tight font-semibold text-white" id="supportTitle">Get Support</h5>
</div>
<button aria-label="Close support modal" className="rounded-md p-2 hover:bg-white/5 text-slate-300 hover:text-white ring-1 ring-inset ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60" data-close="supportModal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<p className="text-slate-400 text-sm">Choose a support option below. Our team typically replies within 24 hours.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="group rounded-xl p-4 ring-1 ring-inset ring-white/10 hover:ring-emerald-300/40 bg-white/[0.02] hover:bg-white/[0.04] transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-300" data-lucide="book-open"></i>
<div>
<div className="text-slate-200 text-sm font-medium">Help Center</div>
<div className="text-slate-400 text-xs">Guides and FAQs</div>
</div>
</div>
</a>
<a className="group rounded-xl p-4 ring-1 ring-inset ring-white/10 hover:ring-emerald-300/40 bg-white/[0.02] hover:bg-white/[0.04] transition-colors" href="mailto:support@example.com">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-300" data-lucide="mail"></i>
<div>
<div className="text-slate-200 text-sm font-medium">Email Support</div>
<div className="text-slate-400 text-xs">support@example.com</div>
</div>
</div>
</a>
</div>
<div className="rounded-xl ring-1 ring-inset ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-300" data-lucide="message-square"></i>
<div className="w-full">
<label className="block text-sm text-slate-300 mb-1" htmlFor="supportMessage">Quick message</label>
<textarea className="w-full rounded-lg bg-slate-900/80 text-slate-200 text-sm p-3 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/60" id="supportMessage" placeholder="Describe your issue..." rows="3"></textarea>
<div className="mt-3 flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-white bg-[#00D1A0] hover:bg-[#24dbb1] ring-1 ring-inset ring-white/10 transition-colors" id="supportSend">
<i className="w-4 h-4" data-lucide="send"></i>
<span className="font-medium">Send</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="px-5 py-4 border-t border-white/10 flex items-center justify-between">
<div className="text-xs text-slate-400">Response time: under 24h</div>
<button aria-label="Close" className="text-sm text-slate-300 hover:text-white rounded-md px-3 py-2 hover:bg-white/5 ring-1 ring-inset ring-white/10" data-close="supportModal">
            Close
          </button>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="requestTitle" aria-modal="true" className="hidden fixed inset-0 z-40" id="requestModal" role="dialog">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto w-full max-w-2xl px-6">
<div className="mt-20 rounded-2xl border border-white/10 bg-slate-950/95 shadow-xl">
<div className="flex items-center justify-between p-5 border-b border-white/10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-400" data-lucide="wand-2"></i>
<h5 className="text-[20px] tracking-tight font-semibold text-white" id="requestTitle">Request Customization</h5>
</div>
<button aria-label="Close customization modal" className="rounded-md p-2 hover:bg-white/5 text-slate-300 hover:text-white ring-1 ring-inset ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60" data-close="requestModal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-4" id="requestForm" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-300 mb-1" htmlFor="reqName">Name</label>
<input className="w-full rounded-lg bg-slate-900/80 text-slate-200 text-sm p-3 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60" id="reqName" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-300 mb-1" htmlFor="reqEmail">Email</label>
<input className="w-full rounded-lg bg-slate-900/80 text-slate-200 text-sm p-3 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60" id="reqEmail" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-300 mb-1" htmlFor="reqType">Customization Type</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="sliders-horizontal"></i>
<select className="w-full appearance-none rounded-lg bg-slate-900/80 text-slate-200 text-sm pl-10 pr-10 py-3 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60" id="reqType">
<option>Curriculum customization</option>
<option>Hands-on project tailoring</option>
<option>Team workshop</option>
<option>Tooling integration</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm text-slate-300 mb-1" htmlFor="reqDetails">Details</label>
<textarea className="w-full rounded-lg bg-slate-900/80 text-slate-200 text-sm p-3 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60" id="reqDetails" placeholder="Tell us about your goals, team size, timeline..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-xs text-slate-400">We’ll reply within 2–3 business days.</div>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-white bg-gradient-to-r from-[#00B4FF] to-[#7C3AED] hover:from-[#2cc6ff] hover:to-[#8b5cf6] ring-1 ring-inset ring-white/10 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
<span className="font-medium">Submit Request</span>
</button>
</div>
</form>
<div className="px-5 py-4 border-t border-white/10 flex items-center justify-end">
<button aria-label="Close" className="text-sm text-slate-300 hover:text-white rounded-md px-3 py-2 hover:bg-white/5 ring-1 ring-inset ring-white/10" data-close="requestModal">
            Close
          </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed top-4 right-4 z-50 space-y-3" id="toastRoot"></div>

<a className="hidden" download="" id="hiddenDownloader"></a>


    </>
  );
}
