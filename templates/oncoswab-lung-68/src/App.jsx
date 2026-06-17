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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
50: '#F8FAFC',
100: '#F1F5F9',
200: '#E2E8F0',
300: '#CBD5E1',
400: '#94A3B8',
500: '#64748B',
600: '#475569',
700: '#334155',
800: '#1E293B',
900: '#0F172A',
950: '#020617',
},
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:dna-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-medium tracking-tight group-hover:opacity-80 transition-opacity">OncoSwab</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">Science</a>
<a className="hover:text-slate-900 transition-colors" href="#researchers">For Researchers</a>
<a className="hover:text-slate-900 transition-colors" href="#team">About</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-xs font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all" href="#waitlist">
                Join Waitlist
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100/50 via-white to-white"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-8 hover:border-slate-300 transition-colors cursor-default shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
                Research Use Only (RUO) Available
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                The easiest way to detect lung cancer was right under our nose
            </h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                A nasal swab. That's all it takes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5" href="#waitlist">
                    Join the Waitlist
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-600 font-medium flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all" href="#how-it-works">
                    How it works
                </a>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Trusted by leading research institutions</p>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 font-medium text-sm md:text-base tracking-tight opacity-70">
<span>MAYO CLINIC VENTURES</span>
<span>INNOSUISSE</span>
<span>STANFORD MEDICINE</span>
<span>ETH ZÜRICH</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<span className="text-brand-600 font-medium text-xs tracking-widest uppercase mb-3 block">Current Challenges</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Traditional Methods Fall Short</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    Lung cancer is often detected too late. Current diagnostic methods are complex, invasive, and expensive — creating barriers for both patients and researchers.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Late-Stage Detection</h3>
<p className="text-sm text-slate-500 leading-relaxed">When treatment options are most limited, significantly reducing survival rates.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:syringe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Invasive Procedures</h3>
<p className="text-sm text-slate-500 leading-relaxed">Causing patient discomfort and anxiety, leading to hesitation in screening participation.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">High False Positives</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leading to unnecessary follow-up CT scans and invasive biopsies.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Limited Accessibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Especially in remote or underserved areas where advanced imaging is scarce.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">High Costs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expensive screening programs with historically low participation rates.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Research Barriers</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complex sample collection limiting study scope and participant retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-brand-600 font-medium text-xs tracking-widest uppercase mb-3 block">Our Innovation</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                    A test as simple as a COVID swab — but to detect cancer.
                </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    By analyzing cancer biomarkers in the nose, we make detection easier, faster, and scalable for clinical research and early screening.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="flex flex-col md:items-start items-center">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:emoji-funny-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Non-invasive</h3>
<p className="text-slate-500 leading-relaxed">Simple nasal swab test — no complex procedures required. Patients can self-collect at home or in a clinic.</p>
</div>
<div className="flex flex-col md:items-start items-center">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Early Detection</h3>
<p className="text-slate-500 leading-relaxed">Catch cancer at treatable stages with molecular precision, analyzing specific genomic signatures.</p>
</div>
<div className="flex flex-col md:items-start items-center">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Research-Ready</h3>
<p className="text-slate-500 leading-relaxed">Scalable, cost-effective infrastructure designed specifically for large-scale longitudinal studies.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-white border border-slate-200 px-6 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all" href="#waitlist">
                    Join the Waitlist for Researchers
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-brand-400 font-medium text-xs tracking-widest uppercase mb-3 block">How It Works</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Powered by Molecular Biology</h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                        Our team of molecular biologists and clinicians is developing breakthrough diagnostics for respiratory diseases. We're leveraging biomarker discovery and clinical partnerships to redefine how we detect lung cancer — starting in the nose.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-brand-400 font-mono text-sm">01</div>
<div>
<h4 className="text-lg font-medium mb-2">Biomarker Discovery</h4>
<p className="text-slate-400 text-sm leading-relaxed">Advanced molecular analysis of nasal biomarkers for early cancer detection, utilizing next-generation sequencing.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-brand-400 font-mono text-sm">02</div>
<div>
<h4 className="text-lg font-medium mb-2">Clinical Partnerships</h4>
<p className="text-slate-400 text-sm leading-relaxed">Collaborating with leading medical institutions to validate our approach across diverse patient populations.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-brand-400 font-mono text-sm">03</div>
<div>
<h4 className="text-lg font-medium mb-2">Innovative Diagnostics</h4>
<p className="text-slate-400 text-sm leading-relaxed">Pioneering non-invasive testing methods for respiratory diseases that integrate seamlessly into existing workflows.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-slate-800 rounded-2xl p-1 border border-slate-700 shadow-2xl">
<div className="bg-slate-900 rounded-xl p-8 h-full flex items-center justify-center aspect-square lg:aspect-auto min-h-[400px]">

<div className="relative w-64 h-64">
<div className="absolute inset-0 border border-slate-700 rounded-full opacity-30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-brand-500/30 rounded-full opacity-50 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-8 border border-slate-600 rounded-full opacity-30 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:dna-linear" width="48"></iconify-icon>
<span className="text-xs font-mono text-brand-400 tracking-widest">ANALYZING</span>
</div>
</div>

<div className="absolute top-0 right-0 p-2 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-green-400">Match: 99.8%</div>
<div className="absolute bottom-10 left-0 p-2 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-blue-400">RNA Seq</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Why Researchers Choose OncoSwab</h2>
</div>
<div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
<div className="p-6 text-center font-medium text-slate-500 text-sm tracking-wide uppercase">Traditional Diagnostics</div>
<div className="p-6 text-center font-medium text-brand-600 text-sm tracking-wide uppercase bg-brand-50/50">OncoSwab™</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 divide-x divide-slate-100 group hover:bg-slate-50/50 transition-colors">
<div className="p-6 flex items-center gap-3 text-slate-500">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Multiple doctor visits required</span>
</div>
<div className="p-6 flex items-center gap-3 text-slate-900 bg-brand-50/10">
<iconify-icon className="text-brand-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Simple at-home or clinic swab</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 divide-x divide-slate-100 group hover:bg-slate-50/50 transition-colors">
<div className="p-6 flex items-center gap-3 text-slate-500">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Invasive biopsy procedures</span>
</div>
<div className="p-6 flex items-center gap-3 text-slate-900 bg-brand-50/10">
<iconify-icon className="text-brand-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Completely non-invasive</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 divide-x divide-slate-100 group hover:bg-slate-50/50 transition-colors">
<div className="p-6 flex items-center gap-3 text-slate-500">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Weeks to get results</span>
</div>
<div className="p-6 flex items-center gap-3 text-slate-900 bg-brand-50/10">
<iconify-icon className="text-brand-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Fast, accurate results</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 divide-x divide-slate-100 group hover:bg-slate-50/50 transition-colors">
<div className="p-6 flex items-center gap-3 text-slate-500">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>High cost barriers</span>
</div>
<div className="p-6 flex items-center gap-3 text-slate-900 bg-brand-50/10">
<iconify-icon className="text-brand-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Accessible and scalable</span>
</div>
</div>

<div className="grid grid-cols-2 divide-x divide-slate-100 group hover:bg-slate-50/50 transition-colors">
<div className="p-6 flex items-center gap-3 text-slate-500">
<iconify-icon className="text-red-400 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Limited sample availability</span>
</div>
<div className="p-6 flex items-center gap-3 text-slate-900 bg-brand-50/10">
<iconify-icon className="text-brand-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Research Use Only (RUO) available</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all" href="#waitlist">
                    Join the Waitlist for Researchers
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Built on Rigorous Science</h2>
<p className="text-lg text-slate-500 font-light">Validated by leading institutions and backed by cutting-edge molecular research</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-2">10M+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Patient Journeys</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-2">500+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Papers Referenced</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-2">15+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clinical Sites</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-2">1</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Simple Test</div>
</div>
</div>
<div className="border-t border-slate-200 pt-16 text-center">
<p className="text-sm font-medium text-slate-400 mb-8">BACKED BY LEADING INSTITUTIONS</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold tracking-tighter text-slate-800">Mayo Clinic Ventures</h3>
<h3 className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="text-red-600 font-black text-2xl">+</span> Innosuisse</h3>
<h3 className="text-xl font-serif font-bold text-slate-800">Stanford</h3>
<h3 className="text-xl font-bold tracking-widest text-slate-800">UCSF</h3>
</div>
</div>
</div>
</section>

<section className="py-24" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">World-Class Scientific Team</h2>
<p className="text-lg text-slate-500 font-light max-w-2xl">Led by molecular biologists and clinicians from top research institutions dedicated to solving the early detection crisis.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-slate-900">Dr. Sarah Chen, PhD</h3>
<p className="text-sm text-slate-500">Chief Scientific Officer</p>
<p className="text-xs text-slate-400 mt-1">Stanford University</p>
</div>

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-slate-900">Dr. James Wilson, MD</h3>
<p className="text-sm text-slate-500">Chief Medical Officer</p>
<p className="text-xs text-slate-400 mt-1">Mayo Clinic</p>
</div>

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-slate-900">Elena Rodriguez, PhD</h3>
<p className="text-sm text-slate-500">Head of Genomics</p>
<p className="text-xs text-slate-400 mt-1">ETH Zürich</p>
</div>

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-slate-900">Dr. Michael Chang</h3>
<p className="text-sm text-slate-500">Lead Researcher</p>
<p className="text-xs text-slate-400 mt-1">UCSF Medical Center</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-t-[3rem] relative z-10 -mt-10" id="researchers">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-brand-400 font-medium text-xs tracking-widest uppercase mb-3 block">For Research Teams</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Accelerate Your Cancer Research</h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                        We're opening early access for Research Use Only (RUO) — allowing investigators to use our test as a complement to liquid biopsy in oncology, pulmonology, or molecular diagnostics studies.
                    </p>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
<h4 className="text-lg font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:hand-shake-linear"></iconify-icon>
                            Collaborate with us
                        </h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Explore nasal biomarkers, validate complementary diagnostic workflows, and advance early detection science together.
                        </p>
<a className="inline-flex h-10 items-center justify-center rounded-lg bg-white text-slate-900 px-6 text-sm font-medium hover:bg-slate-100 transition-colors" href="#waitlist">
                            Join the Waitlist for Researchers
                        </a>
</div>
</div>
<div className="flex flex-col gap-6 justify-center">
<div className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-slate-700 rounded-lg text-brand-400">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Oncology Studies</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed ml-[52px]">Complement tissue and liquid biopsy with nasal biomarker analysis.</p>
</div>
<div className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-slate-700 rounded-lg text-brand-400">
<iconify-icon icon="solar:lungs-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Pulmonology Research</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed ml-[52px]">Study respiratory disease progression through non-invasive longitudinal sampling.</p>
</div>
<div className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-slate-700 rounded-lg text-brand-400">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Diagnostics Validation</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed ml-[52px]">Validate novel biomarkers and test protocols in controlled studies.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-600 font-medium text-xs tracking-widest uppercase mb-3 block">Early Research Partners</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Pioneering institutions already exploring nasal biomarkers</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-300 absolute top-6 left-6" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 italic relative z-10 mb-6 pt-6">"OncoSwab's non-invasive approach opens new possibilities for longitudinal cancer studies that were previously logistically impossible."</p>
<div>
<p className="font-medium text-slate-900 text-sm">Dr. Sarah M.</p>
<p className="text-xs text-slate-500">Principal Investigator, Oncology</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-300 absolute top-6 left-6" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 italic relative z-10 mb-6 pt-6">"The ability to collect samples remotely and repeatedly without patient burden is transforming how we design clinical trials."</p>
<div>
<p className="font-medium text-slate-900 text-sm">Dr. James W.</p>
<p className="text-xs text-slate-500">Oncology Researcher</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<iconify-icon className="text-slate-300 absolute top-6 left-6" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 italic relative z-10 mb-6 pt-6">"We're seeing promising correlations between nasal biomarkers and systemic disease presence — this could revolutionize screening protocols."</p>
<div>
<p className="font-medium text-slate-900 text-sm">Dr. Elena R.</p>
<p className="text-xs text-slate-500">Molecular Biologist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-100 transition-colors select-none">
                        How does OncoSwab work for research purposes?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        Our system analyzes cancer biomarkers present in nasal samples using advanced molecular biology techniques. For RUO, we provide validated collection kits and analysis protocols that complement your existing research workflows.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-100 transition-colors select-none">
                        What types of studies is OncoSwab suitable for?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        OncoSwab is ideal for oncology research, pulmonology studies, biomarker discovery, longitudinal cohort studies, and diagnostics validation. It works as a complement to liquid biopsy and tissue analysis.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-100 transition-colors select-none">
                        How is OncoSwab different from traditional biopsy methods?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        OncoSwab is completely non-invasive, can be self-administered, enables repeated sampling without patient burden, and provides molecular-level insights from nasal biomarkers that correlate with systemic disease.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-100 transition-colors select-none">
                        What documentation and validation do you provide?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        We provide comprehensive RUO documentation including collection protocols, analytical methods, validation data, and regulatory compliance information for research applications.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-100 transition-colors select-none">
                        How do I get started with OncoSwab for my research?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        Join our researcher waitlist to receive early access. We'll work with you to understand your study requirements and provide customized support for integration into your research protocol.
                    </div>
</details>
</div>
<div className="mt-12 text-center">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-white border border-slate-200 px-6 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all" href="#waitlist">
                    Join the Waitlist for Researchers
                </a>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 text-white relative overflow-hidden" id="waitlist">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<span className="text-brand-400 font-medium text-xs tracking-widest uppercase mb-4 block">Join the Research Revolution</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Be part of the next breakthrough in cancer detection</h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Join the waitlist to get early access and updates as we move toward clinical validation. Priority access for research institutions.
            </p>
<form className="max-w-md mx-auto mb-10 flex flex-col gap-4" onsubmit="event.preventDefault();">
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 rounded-lg bg-white/10 border border-white/20 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Enter your institutional email" type="email"/>
<button className="h-12 px-8 rounded-lg bg-white text-slate-900 font-medium hover:bg-brand-50 transition-colors shadow-lg shadow-black/20" type="submit">
                        Join Waitlist
                    </button>
</div>
</form>
<div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium tracking-wide">
<span className="flex items-center gap-1.5"><iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> HIPAA Compliant</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> SOC 2 Certified</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Research Use Only</span>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<a className="flex items-center gap-2 mb-4 text-white" href="#">
<iconify-icon height="20" icon="solar:dna-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium tracking-tight">OncoSwab</span>
</a>
<p className="text-sm leading-relaxed mb-6">The easiest way to detect lung cancer was right under our nose.</p>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Sections</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#how-it-works">Science</a></li>
<li><a className="hover:text-white transition-colors" href="#researchers">For Researchers</a></li>
<li><a className="hover:text-white transition-colors" href="#team">About</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Research Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Clinical Validation</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>

<div id="contact">
<h4 className="text-white font-medium mb-4 text-sm">Get in Touch</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:research@oncoswab.com">research@oncoswab.com</a>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>San Francisco, CA</span>
</li>
</ul>
<p className="text-xs mt-6 text-slate-500">Questions about RUO access? Contact our research team.</p>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>© 2024 OncoSwab. All rights reserved.</div>
<div className="flex gap-4">
<span>Backed by Mayo Clinic Ventures &amp; Innosuisse</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
