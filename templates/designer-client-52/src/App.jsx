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
      

<nav className="fixed w-full top-0 z-50 bg-[#FDF9F1]/90 backdrop-blur-md border-b-2 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-sans-body font-medium tracking-tighter text-xl flex items-center gap-2" href="#">
<span className="bg-neutral-900 text-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-brutal-sm">BC</span>
                BASTIDORES
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#FF90E8] transition-colors" href="#features">Features</a>
<a className="hover:text-[#FF90E8] transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-[#FF90E8] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:underline underline-offset-4" href="#">Log in</a>
<a className="bg-[#FFC900] border-2 border-neutral-900 text-sm font-medium px-4 py-2 rounded-xl shadow-brutal" href="#">
                    Get Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b-2 border-neutral-900">

<div className="absolute top-20 right-10 opacity-20 rotate-12">
<iconify-icon className="text-9xl stroke-1-5" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 opacity-20 -rotate-12">
<iconify-icon className="text-9xl stroke-1-5" icon="solar:face-scan-circle-linear"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-neutral-900 bg-white text-xs font-medium uppercase tracking-widest mb-6 shadow-brutal-sm">
<span className="w-2 h-2 rounded-full bg-[#00E5FF] border border-neutral-900 animate-pulse"></span>
                    Client Portal for Designers
                </div>
<h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
                    Give your clients a <span className="relative inline-block px-2 bg-[#FF90E8] border-2 border-neutral-900 shadow-brutal-sm -rotate-2">backstage pass</span> to their brand project.
                </h1>
<p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-lg leading-relaxed">
                    Bastidores Criativos is a client portal for designers that centralizes briefings, approvals, files, and project progress in one beautiful space.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="bg-neutral-900 text-white border-2 border-neutral-900 px-8 py-4 rounded-2xl font-medium shadow-brutal flex items-center gap-2 group w-full sm:w-auto justify-center text-base" href="#">
                        Start using Bastidores
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-4 font-medium text-neutral-900 hover:text-[#FF90E8] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-base" href="#">
<iconify-icon className="text-2xl" icon="solar:play-circle-linear"></iconify-icon>
                        See how it works
                    </a>
</div>
</div>

<div className="relative w-full h-[500px] flex items-center justify-center">

<div className="absolute z-20 w-[90%] h-[80%] bg-white border-2 border-neutral-900 rounded-3xl shadow-brutal-lg overflow-hidden flex flex-col right-0 bottom-0 rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="h-10 border-b-2 border-neutral-900 bg-[#FDF9F1] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full border border-neutral-900 bg-[#FF90E8]"></div>
<div className="w-3 h-3 rounded-full border border-neutral-900 bg-[#FFC900]"></div>
<div className="w-3 h-3 rounded-full border border-neutral-900 bg-[#00E5FF]"></div>
</div>

<div className="flex-1 flex p-4 gap-4 bg-[#f8f9fa]">
<div className="w-1/4 h-full border-2 border-neutral-900 rounded-xl bg-white p-3 flex flex-col gap-3">
<div className="h-8 bg-neutral-200 rounded-lg"></div>
<div className="h-4 w-2/3 bg-neutral-100 rounded"></div>
<div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
<div className="mt-auto h-12 bg-[#FFC900] border-2 border-neutral-900 rounded-lg"></div>
</div>
<div className="flex-1 h-full flex flex-col gap-4">
<div className="h-1/3 border-2 border-neutral-900 rounded-xl bg-[#C6D5A8] p-4 flex items-end">
<span className="font-serif-display text-2xl tracking-tight">Studio Identity</span>
</div>
<div className="flex-1 border-2 border-neutral-900 rounded-xl bg-white p-4 grid grid-cols-2 gap-4">
<div className="bg-[#FDF9F1] border-2 border-neutral-900 border-dashed rounded-lg"></div>
<div className="bg-[#FDF9F1] border-2 border-neutral-900 border-dashed rounded-lg"></div>
</div>
</div>
</div>
</div>

<div className="absolute z-30 -top-4 right-10 bg-[#FFC900] border-2 border-neutral-900 w-16 h-16 rounded-full flex items-center justify-center shadow-brutal rotate-12 animate-[bounce_4s_infinite]">
<iconify-icon className="text-3xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<div className="absolute z-10 top-10 left-0 bg-[#00E5FF] border-2 border-neutral-900 p-4 rounded-2xl shadow-brutal -rotate-6">
<iconify-icon className="text-4xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="absolute z-30 bottom-10 -left-6 bg-white border-2 border-neutral-900 px-4 py-2 rounded-xl shadow-brutal rotate-3 flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#B2E426] border border-neutral-900"></span>
<span className="text-xs font-medium tracking-tight">Client Approved</span>
</div>
<div className="absolute z-0 w-full h-full bg-grid opacity-40 top-4 -left-4"></div>
</div>
</div>
</section>

<div className="py-8 border-b-2 border-neutral-900 bg-white overflow-hidden flex">
<div className="flex gap-16 items-center animate-[scroll_20s_linear_infinite] whitespace-nowrap px-8 text-neutral-400 font-sans-body font-medium text-sm tracking-widest uppercase">
<span>For Designers</span> • <span>For Studios</span> • <span>For Agencies</span> • <span>For Freelancers</span> • <span>For Creatives</span> • <span>For Designers</span> • <span>For Studios</span> • <span>For Agencies</span> • <span>For Freelancers</span> • <span>For Creatives</span>
</div>
</div>

<section className="py-24 lg:py-32 bg-[#FDF9F1] relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-serif-display text-4xl md:text-5xl tracking-tight mb-6">Everything your design process needs in one place</h2>
<p className="text-lg text-neutral-600">Ditch the messy email threads and scattered drives. Give your clients a centralized hub for their entire project.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FFC900] border-2 border-neutral-900 rounded-3xl p-8 shadow-brutal hover:-translate-y-1 transition-transform flex flex-col h-full">
<div className="w-14 h-14 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center mb-8 shadow-brutal-sm -rotate-3">
<iconify-icon className="text-2xl" icon="solar:widget-5-linear"></iconify-icon>
</div>
<h3 className="font-serif-display text-2xl tracking-tight mb-3">Client Project Dashboard</h3>
<p className="text-neutral-800 text-sm leading-relaxed mt-auto">Clients follow the project stage, next steps, and overall progress at a glance.</p>
</div>

<div className="bg-[#FF90E8] border-2 border-neutral-900 rounded-3xl p-8 shadow-brutal hover:-translate-y-1 transition-transform flex flex-col h-full">
<div className="w-14 h-14 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center mb-8 shadow-brutal-sm rotate-3">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="font-serif-display text-2xl tracking-tight mb-3">Briefing &amp; References</h3>
<p className="text-neutral-900 text-sm leading-relaxed mt-auto">Collect strategic information, moodboards, and visual references effortlessly.</p>
</div>

<div className="bg-[#00E5FF] border-2 border-neutral-900 rounded-3xl p-8 shadow-brutal hover:-translate-y-1 transition-transform flex flex-col h-full">
<div className="w-14 h-14 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center mb-8 shadow-brutal-sm -rotate-6">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif-display text-2xl tracking-tight mb-3">Approvals</h3>
<p className="text-neutral-900 text-sm leading-relaxed mt-auto">Clients approve creative directions and deliverables with one simple click.</p>
</div>

<div className="bg-white border-2 border-neutral-900 rounded-3xl p-8 shadow-brutal md:col-span-2 flex flex-col md:flex-row items-center gap-8 hover:-translate-y-1 transition-transform">
<div className="flex-1">
<div className="w-14 h-14 bg-[#B2E426] border-2 border-neutral-900 rounded-2xl flex items-center justify-center mb-6 shadow-brutal-sm rotate-6">
<iconify-icon className="text-2xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="font-serif-display text-2xl tracking-tight mb-3">Files &amp; Deliverables</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Organize all project files, presentations, and final assets. No more expired WeTransfer links.</p>
</div>
<div className="w-full md:w-1/2 h-40 bg-[#FDF9F1] border-2 border-neutral-900 border-dashed rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute flex gap-2 rotate-12">
<div className="w-16 h-20 bg-white border-2 border-neutral-900 rounded shadow-brutal-sm flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:file-text-linear"></iconify-icon></div>
<div className="w-16 h-20 bg-white border-2 border-neutral-900 rounded shadow-brutal-sm flex items-center justify-center -mt-4"><iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon></div>
<div className="w-16 h-20 bg-white border-2 border-neutral-900 rounded shadow-brutal-sm flex items-center justify-center mt-2"><iconify-icon className="text-xl" icon="solar:zip-file-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="bg-[#C6D5A8] border-2 border-neutral-900 rounded-3xl p-8 shadow-brutal hover:-translate-y-1 transition-transform flex flex-col h-full">
<div className="w-14 h-14 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center mb-8 shadow-brutal-sm -rotate-2">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="font-serif-display text-2xl tracking-tight mb-3">Creative Direction</h3>
<p className="text-neutral-900 text-sm leading-relaxed mt-auto">Present concepts in a structured and beautiful way that respects your design.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-y-2 border-neutral-900 relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="mb-20">
<h2 className="font-serif-display text-4xl md:text-5xl tracking-tight mb-4">The backstage process</h2>
<p className="text-lg text-neutral-600">Set up in seconds. Collaborate for months.</p>
</div>
<div className="space-y-24 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-neutral-900 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-neutral-900 bg-[#FF90E8] shadow-brutal text-2xl font-serif-display shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                        1
                        
<div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 bg-[#FDF9F1] border-2 border-neutral-900 rounded-2xl shadow-brutal-sm">
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Create a project</h3>
<p className="text-sm text-neutral-600">Set up the client space, add milestones, and customize the look in seconds.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-neutral-900 bg-[#FFC900] shadow-brutal text-2xl font-serif-display shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        2
                    </div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 bg-[#FDF9F1] border-2 border-neutral-900 rounded-2xl shadow-brutal-sm">
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Share the portal</h3>
<p className="text-sm text-neutral-600">Send a magic link. Your client gets secure access to their personalized dashboard immediately.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-neutral-900 bg-[#00E5FF] shadow-brutal text-2xl font-serif-display shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        3
                    </div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 bg-[#FDF9F1] border-2 border-neutral-900 rounded-2xl shadow-brutal-sm">
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Collaborate clearly</h3>
<p className="text-sm text-neutral-600">Collect feedback, get sign-offs, and deliver final files without the back-and-forth chaos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FDF9F1] overflow-hidden border-b-2 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="font-serif-display text-4xl md:text-5xl tracking-tight">A space that respects your work</h2>
</div>
<div className="relative max-w-5xl mx-auto h-[600px] flex justify-center items-center">

<div className="absolute z-20 w-[80%] md:w-[60%] h-[350px] bg-white border-2 border-neutral-900 rounded-2xl shadow-brutal-lg -rotate-2 hover:rotate-0 hover:z-40 transition-all duration-300 p-2">
<div className="w-full h-full bg-neutral-100 rounded-xl border border-neutral-200 overflow-hidden flex flex-col">
<div className="h-8 bg-white border-b border-neutral-200 flex items-center px-4 justify-between">
<span className="text-xs font-medium">Concept 01 - Approval</span>
<div className="w-16 h-4 bg-[#B2E426] rounded-full"></div>
</div>
<div className="flex-1 p-4 grid grid-cols-2 gap-4">
<div className="bg-white rounded-lg border border-neutral-200"></div>
<div className="flex flex-col gap-2">
<div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
<div className="h-4 w-1/2 bg-neutral-200 rounded"></div>
<div className="mt-auto h-8 bg-neutral-900 rounded-lg w-1/2"></div>
</div>
</div>
</div>
</div>

<div className="absolute z-10 w-[70%] md:w-[50%] h-[300px] bg-white border-2 border-neutral-900 rounded-2xl shadow-brutal-lg left-4 md:left-10 bottom-20 -rotate-6 hover:rotate-0 hover:z-40 transition-all duration-300 p-2">
<div className="w-full h-full bg-[#f0f4f8] rounded-xl border border-neutral-200 flex flex-col p-4">
<div className="h-6 w-1/3 bg-neutral-300 rounded mb-4"></div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square bg-white border border-neutral-200 rounded-lg"></div>
<div className="aspect-square bg-white border border-neutral-200 rounded-lg"></div>
<div className="aspect-square bg-white border border-neutral-200 rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute z-30 w-[75%] md:w-[55%] h-[320px] bg-white border-2 border-neutral-900 rounded-2xl shadow-brutal-lg right-4 md:right-10 top-10 rotate-6 hover:rotate-0 hover:z-40 transition-all duration-300 p-2">
<div className="w-full h-full bg-[#fffbeb] rounded-xl border border-neutral-200 flex flex-col p-4">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-[#FFC900] rounded-full border border-neutral-900"></div>
<div className="h-6 w-1/2 bg-neutral-300 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-12 w-full bg-white border border-neutral-200 rounded-lg flex items-center px-4 justify-between">
<div className="h-3 w-1/3 bg-neutral-200 rounded"></div>
<div className="w-4 h-4 rounded-full bg-[#B2E426]"></div>
</div>
<div className="h-12 w-full bg-white border border-neutral-200 rounded-lg flex items-center px-4 justify-between">
<div className="h-3 w-1/2 bg-neutral-200 rounded"></div>
<div className="w-4 h-4 rounded-full border-2 border-neutral-300"></div>
</div>
</div>
</div>
</div>

<div className="absolute z-50 bottom-10 right-1/4 bg-[#FF90E8] border-2 border-neutral-900 px-4 py-2 rounded-full shadow-brutal rotate-12 flex items-center gap-2 font-serif-display text-xl">
<iconify-icon icon="solar:stars-linear"></iconify-icon> Beautiful UI
            </div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">Turn your process into a premium experience.</h2>
<p className="text-lg text-neutral-600 mb-8">Your work is high value. The way you present it and manage your clients should be too.</p>
<div className="hidden lg:block w-32 h-32 bg-[#C6D5A8] border-2 border-neutral-900 rounded-full flex items-center justify-center shadow-brutal rotate-12">
<iconify-icon className="text-5xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-8">

<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-[#FFC900] border-2 border-neutral-900 flex items-center justify-center shrink-0 shadow-brutal-sm mt-1">
<iconify-icon className="text-lg" icon="solar:chat-round-unread-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Reduce WhatsApp chaos</h3>
<p className="text-neutral-600">Keep all project communication, feedback, and approvals out of your personal inbox and in a dedicated space.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-[#00E5FF] border-2 border-neutral-900 flex items-center justify-center shrink-0 shadow-brutal-sm mt-1">
<iconify-icon className="text-lg" icon="solar:eye-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Give clients absolute clarity</h3>
<p className="text-neutral-600">Clients always know what stage the project is in, what you are working on, and what is needed from them.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-[#FF90E8] border-2 border-neutral-900 flex items-center justify-center shrink-0 shadow-brutal-sm mt-1">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Organize everything securely</h3>
<p className="text-neutral-600">From the initial brief to the final logo files, everything lives in one organized, easy-to-find portal.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-[#B2E426] border-2 border-neutral-900 flex items-center justify-center shrink-0 shadow-brutal-sm mt-1">
<iconify-icon className="text-lg" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif-display text-2xl tracking-tight mb-2">Deliver a professional image</h3>
<p className="text-neutral-600">Stand out from other designers by providing a seamless, branded digital experience that justifies premium pricing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFC900] border-y-2 border-neutral-900 relative overflow-hidden">
<div className="absolute -top-10 -left-10 opacity-20">
<iconify-icon className="text-9xl" icon="solar:quote-left-linear"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif-display text-3xl md:text-5xl leading-tight md:leading-tight tracking-tight mb-10">
                “This completely changed how my clients experience the branding process. It feels less like a transaction and more like a premium guided tour.”
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-white border-2 border-neutral-900 rounded-full overflow-hidden shadow-brutal-sm">
<img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=f8f9fa"/>
</div>
<div className="text-left">
<div className="font-medium text-base">Studio Formato</div>
<div className="text-sm font-medium opacity-75">Brand Identity Studio</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-paper">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#FF90E8] border-2 border-neutral-900 rounded-[2rem] p-12 md:p-20 text-center shadow-brutal-lg relative overflow-hidden">

<div className="absolute top-10 left-10 w-20 h-20 bg-white border-2 border-neutral-900 rounded-full mix-blend-overlay opacity-50"></div>
<div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FFC900] border-2 border-neutral-900 rounded-full mix-blend-overlay opacity-50"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-serif-display text-4xl md:text-6xl tracking-tight mb-6 leading-tight">Transform how clients experience your design process.</h2>
<p className="text-neutral-900 text-lg mb-10 font-medium">Join the waitlist for early access to Bastidores Criativos.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 bg-white border-2 border-neutral-900 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-white/50 text-base shadow-brutal-sm font-medium placeholder:text-neutral-400" placeholder="Enter your email" type="email"/>
<button className="bg-neutral-900 text-white border-2 border-neutral-900 rounded-2xl px-8 py-4 font-medium shadow-brutal hover:bg-neutral-800 transition-colors whitespace-nowrap text-base" type="submit">
                            Get early access
                        </button>
</form>
<p className="text-xs font-medium mt-4 text-neutral-800">No spam, just creative updates.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t-2 border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
<a className="font-sans-body font-medium tracking-tighter text-2xl flex items-center gap-2" href="#">
<span className="bg-neutral-900 text-[#FFC900] rounded-full w-10 h-10 flex items-center justify-center text-sm shadow-brutal-sm">BC</span>
                    BASTIDORES
                </a>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
<a className="hover:text-[#FF90E8] transition-colors" href="#">Product</a>
<a className="hover:text-[#FF90E8] transition-colors" href="#">Features</a>
<a className="hover:text-[#FF90E8] transition-colors" href="#">Pricing</a>
<a className="hover:text-[#FF90E8] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500 border-t-2 border-neutral-100 pt-8">
<p>© 2024 Bastidores Criativos. Built for designers.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
