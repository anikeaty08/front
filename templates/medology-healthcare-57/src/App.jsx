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
      

<nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
<div className="text-sm font-semibold tracking-widest uppercase pointer-events-auto">MDLGY</div>
<div className="text-xs tracking-widest uppercase pointer-events-auto opacity-70">Case Study 2024</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-12 pt-32">
<div className="max-w-7xl mx-auto w-full">
<div className="mb-12">
<p className="text-sm md:text-base text-neutral-500 mb-4 max-w-md leading-relaxed">A comprehensive reimagining of the digital healthcare experience, focusing on seamless patient-provider interactions and intuitive data management.</p>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase leading-[0.9] text-neutral-900">
                    Medology<br/>
<span className="text-neutral-400">Platform</span>
</h1>
</div>

<div className="w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-200 rounded-3xl overflow-hidden relative shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10"></div>

<div className="absolute top-8 left-8 right-8 bottom-8 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 shadow-sm flex flex-col">
<div className="h-12 border-b border-black/5 flex items-center px-6 gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
</div>
<div className="flex-1 flex p-6 gap-6">
<div className="w-64 bg-black/5 rounded-lg hidden md:block"></div>
<div className="flex-1 flex flex-col gap-6">
<div className="h-32 bg-black/5 rounded-lg w-full"></div>
<div className="flex-1 flex gap-6">
<div className="flex-1 bg-black/5 rounded-lg"></div>
<div className="flex-1 bg-black/5 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 md:py-40 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-4">
<div className="sticky top-32">
<h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-2">01 — Overview</h2>
<div className="w-8 h-[1px] bg-neutral-300"></div>
</div>
</div>
<div className="md:col-span-8 flex flex-col gap-16">
<p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900">
                    Medology simplifies complex medical workflows, transforming overwhelming clinical data into clear, actionable insights for both patients and practitioners.
                </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-200">
<div>
<h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Client</h3>
<p className="text-sm font-medium">Medology Health</p>
</div>
<div>
<h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Role</h3>
<p className="text-sm font-medium">UX/UI Design<br/>Design System</p>
</div>
<div>
<h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Timeline</h3>
<p className="text-sm font-medium">12 Weeks</p>
</div>
<div>
<h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Platform</h3>
<p className="text-sm font-medium">Web App<br/>Mobile iOS</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white px-6 md:px-12 py-32 md:py-48">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-4">
<h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-2">02 — The Challenge</h2>
<div className="w-8 h-[1px] bg-neutral-700"></div>
</div>
<div className="md:col-span-8">
<h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12 leading-[1.1]">Fragmented care, cognitive overload.</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-400">
<div className="flex flex-col gap-4">
<iconify-icon className="text-3xl text-white" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base leading-relaxed">Legacy systems forced practitioners to navigate through endless nested menus, resulting in significant time loss during critical patient consultations.</p>
</div>
<div className="flex flex-col gap-4">
<iconify-icon className="text-3xl text-white" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base leading-relaxed">Patients felt disconnected from their own health data, receiving fragmented information across multiple portals with poor mobile optimization.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 md:py-40 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-12 mb-12">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-neutral-900">Strategic<br/>Objectives.</h2>
</div>
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-neutral-200">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col justify-between aspect-square hover:bg-neutral-50 transition-colors">
<span className="text-xs tracking-widest uppercase text-neutral-400">01</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4">Streamline Data Entry</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Reduce documentation time by 40% through predictive inputs and contextual macro systems.</p>
</div>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col justify-between aspect-square hover:bg-neutral-50 transition-colors">
<span className="text-xs tracking-widest uppercase text-neutral-400">02</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4">Enhance Clarity</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Establish a stringent visual hierarchy that surfaces critical patient alerts immediately.</p>
</div>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 border-neutral-200 flex flex-col justify-between aspect-square hover:bg-neutral-50 transition-colors">
<span className="text-xs tracking-widest uppercase text-neutral-400">03</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4">Unify Experience</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Create a cohesive design language that scales effortlessly across desktop and mobile environments.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 bg-[#F2F4F3]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">UX Analysis</h2>
<p className="text-sm text-neutral-500 max-w-xs">Deconstructing the legacy architecture to identify friction points and structural opportunities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 md:p-16 rounded-2xl">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-xl text-neutral-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm uppercase tracking-widest font-medium">Friction Points</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 border-b border-neutral-100 pb-6">
<span className="text-xs text-neutral-400 pt-1">01</span>
<p className="text-base text-neutral-700">Deep, hidden navigation requiring 5+ clicks to reach patient history.</p>
</li>
<li className="flex gap-4 border-b border-neutral-100 pb-6">
<span className="text-xs text-neutral-400 pt-1">02</span>
<p className="text-base text-neutral-700">Inconsistent typography leading to missed critical lab results.</p>
</li>
<li className="flex gap-4">
<span className="text-xs text-neutral-400 pt-1">03</span>
<p className="text-base text-neutral-700">No logical grouping of related medical data points on a single view.</p>
</li>
</ul>
</div>

<div className="bg-neutral-900 text-white p-10 md:p-16 rounded-2xl">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-xl text-neutral-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm uppercase tracking-widest font-medium text-neutral-300">Core Opportunities</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 border-b border-neutral-800 pb-6">
<span className="text-xs text-neutral-500 pt-1">01</span>
<p className="text-base text-neutral-300">Implement a persistent patient context header across all sub-views.</p>
</li>
<li className="flex gap-4 border-b border-neutral-800 pb-6">
<span className="text-xs text-neutral-500 pt-1">02</span>
<p className="text-base text-neutral-300">Introduce a robust timeline component for chronological health events.</p>
</li>
<li className="flex gap-4">
<span className="text-xs text-neutral-500 pt-1">03</span>
<p className="text-base text-neutral-300">Utilize progressive disclosure to keep initial dashboard uncluttered.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 md:py-48 max-w-[100rem] mx-auto overflow-hidden">
<div className="text-center mb-32">
<h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Interface Design</h2>
<p className="text-5xl md:text-7xl font-semibold tracking-tighter">Clarity in <br/>Every Pixel.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-40">
<div className="lg:col-span-4 lg:col-start-2 flex flex-col gap-6 order-2 lg:order-1">
<h3 className="text-3xl font-medium tracking-tight">The Practitioner Dashboard</h3>
<p className="text-sm text-neutral-500 leading-relaxed">A holistic view of the daily schedule, pending tasks, and critical patient alerts. Designed with a modular grid to allow customization based on the practitioner's specialty.</p>
<div className="flex items-center gap-2 mt-4 text-xs font-medium uppercase tracking-widest">
<span>View Module</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 relative">

<div className="w-full aspect-[4/3] bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 p-2 flex flex-col">
<div className="h-10 bg-neutral-50 rounded-t-lg border-b border-neutral-100 flex items-center justify-between px-4">
<div className="w-24 h-3 bg-neutral-200 rounded"></div>
<div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
</div>
<div className="flex-1 flex gap-2 p-2">
<div className="w-1/4 bg-neutral-50 rounded border border-neutral-100 p-4 flex flex-col gap-3">
<div className="w-full h-4 bg-neutral-200 rounded mb-4"></div>
<div className="w-full h-12 bg-white border border-neutral-100 rounded"></div>
<div className="w-full h-12 bg-white border border-neutral-100 rounded"></div>
</div>
<div className="w-3/4 flex flex-col gap-2">
<div className="h-1/3 bg-neutral-50 rounded border border-neutral-100 p-4">
<div className="w-1/3 h-4 bg-neutral-200 rounded mb-4"></div>
<div className="w-full h-2 bg-neutral-200 rounded mb-2"></div>
<div className="w-2/3 h-2 bg-neutral-200 rounded"></div>
</div>
<div className="flex-1 bg-white border border-neutral-100 rounded shadow-sm"></div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#EAEBEA] rounded-xl shadow-lg -z-10 rotate-[-6deg]"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6 relative">

<div className="flex justify-center gap-8 relative z-10">
<div className="w-64 aspect-[9/19] bg-white rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] border-8 border-neutral-100 p-4 flex flex-col mt-12">
<div className="h-8 w-1/2 bg-neutral-100 rounded-full mx-auto mb-6"></div>
<div className="w-full h-32 bg-neutral-50 rounded-xl mb-4"></div>
<div className="w-full h-16 bg-neutral-50 rounded-xl mb-2"></div>
<div className="w-full h-16 bg-neutral-50 rounded-xl"></div>
</div>
<div className="w-64 aspect-[9/19] bg-neutral-900 rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.2)] border-8 border-neutral-800 p-4 flex flex-col">
<div className="h-8 w-1/2 bg-neutral-800 rounded-full mx-auto mb-6"></div>
<div className="flex gap-2 mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-800"></div>
<div className="flex-1 flex flex-col justify-center gap-2">
<div className="w-2/3 h-2 bg-neutral-700 rounded"></div>
<div className="w-1/3 h-2 bg-neutral-800 rounded"></div>
</div>
</div>
<div className="flex-1 bg-neutral-800 rounded-xl p-4 flex flex-col gap-4">
<div className="w-full h-2 bg-neutral-700 rounded"></div>
<div className="w-5/6 h-2 bg-neutral-700 rounded"></div>
<div className="w-full h-2 bg-neutral-700 rounded mt-4"></div>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gradient-to-tr from-neutral-100 to-transparent rounded-full -z-10 blur-3xl opacity-50"></div>
</div>
<div className="lg:col-span-4 lg:col-start-8 flex flex-col gap-6">
<h3 className="text-3xl font-medium tracking-tight">Patient Portal Companion</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Empowering patients with a pocket-sized health hub. From secure messaging to test result breakdowns, the mobile app utilizes a card-based architecture for effortless scanning and a dark mode optimized for sensitive environments.</p>
<div className="mt-8 flex gap-4">
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest border border-neutral-200 px-4 py-2 rounded-full">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon> Responsive
                    </div>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest border border-neutral-200 px-4 py-2 rounded-full">
<iconify-icon icon="solar:moon-linear"></iconify-icon> Dark Mode
                    </div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-between min-h-[600px]">
<div>
<h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-2">Typography</h2>
<p className="text-3xl font-medium tracking-tight mb-16">Inter</p>
</div>
<div>
<div className="text-[8rem] md:text-[12rem] leading-none font-medium tracking-tighter mb-8">Aa</div>
<div className="space-y-4 border-t border-neutral-200 pt-8">
<div className="flex justify-between items-end border-b border-neutral-100 pb-4">
<span className="text-4xl font-semibold tracking-tight">Semibold</span>
<span className="text-xs text-neutral-400">Headings</span>
</div>
<div className="flex justify-between items-end border-b border-neutral-100 pb-4">
<span className="text-4xl font-medium tracking-tight">Medium</span>
<span className="text-xs text-neutral-400">Subtitles / Labels</span>
</div>
<div className="flex justify-between items-end pb-4">
<span className="text-4xl font-normal tracking-tight">Regular</span>
<span className="text-xs text-neutral-400">Body Copy</span>
</div>
</div>
</div>
</div>

<div className="p-12 md:p-24 bg-neutral-50 flex flex-col justify-between min-h-[600px]">
<div>
<h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">Color Palette &amp; Elements</h2>

<div className="flex gap-4 mb-16">
<div className="flex flex-col gap-2">
<div className="w-16 h-16 rounded-full bg-[#0A0A0A] shadow-sm"></div>
<span className="text-[10px] text-neutral-500 text-center uppercase tracking-wider">Onyx</span>
</div>
<div className="flex flex-col gap-2">
<div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-neutral-200 shadow-sm"></div>
<span className="text-[10px] text-neutral-500 text-center uppercase tracking-wider">Snow</span>
</div>
<div className="flex flex-col gap-2">
<div className="w-16 h-16 rounded-full bg-[#737373] shadow-sm"></div>
<span className="text-[10px] text-neutral-500 text-center uppercase tracking-wider">Slate</span>
</div>
<div className="flex flex-col gap-2">
<div className="w-16 h-16 rounded-full bg-[#E2E8F0] shadow-sm"></div>
<span className="text-[10px] text-neutral-500 text-center uppercase tracking-wider">Mist</span>
</div>
</div>
</div>

<div className="space-y-6">

<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
<span className="text-sm font-medium">Sync Vitals Data</span>
<div className="w-12 h-6 bg-neutral-900 rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear"></iconify-icon>
<div className="w-full h-4 bg-neutral-100 rounded"></div>
</div>

<div className="bg-neutral-900 text-white p-4 rounded-xl shadow-md flex justify-center items-center gap-2">
<span className="text-sm font-medium tracking-wide">Generate Report</span>
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Measured Impact.</h2>
<div className="w-16 h-[1px] bg-neutral-300"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<div className="text-6xl md:text-8xl font-light tracking-tighter mb-4 text-neutral-900">-40<span className="text-4xl">%</span></div>
<h3 className="text-sm uppercase tracking-widest font-medium text-neutral-500 mb-2">Time on Task</h3>
<p className="text-xs text-neutral-400">Reduction in average time to document a standard patient encounter.</p>
</div>
<div className="text-center">
<div className="text-6xl md:text-8xl font-light tracking-tighter mb-4 text-neutral-900">+85<span className="text-4xl">%</span></div>
<h3 className="text-sm uppercase tracking-widest font-medium text-neutral-500 mb-2">Patient Engagement</h3>
<p className="text-xs text-neutral-400">Increase in weekly active users on the patient companion portal.</p>
</div>
<div className="text-center">
<div className="text-6xl md:text-8xl font-light tracking-tighter mb-4 text-neutral-900">0<span className="text-4xl"></span></div>
<h3 className="text-sm uppercase tracking-widest font-medium text-neutral-500 mb-2">Learning Curve</h3>
<p className="text-xs text-neutral-400">Hours required for staff onboarding, down from the previous 2-week training.</p>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white px-6 md:px-12 py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
<span className="text-[20vw] font-semibold tracking-tighter leading-none select-none">MDLGY</span>
</div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to elevate your product?</h2>
<button className="px-8 py-4 bg-white text-neutral-900 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors">
                Let's Collaborate
            </button>
<div className="mt-32 pt-8 border-t border-neutral-800 w-full max-w-sm flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest">
<span>© 2024</span>
<span>Medology Case Study</span>
</div>
</div>
</footer>

    </>
  );
}
