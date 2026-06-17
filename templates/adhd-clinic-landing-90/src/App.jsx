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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
heading: ['"Public Sans"', 'sans-serif'],
},
colors: {
brand: {
dark: '#0e4a4d',    /* Deep Teal */
primary: '#1fae9b', /* Medical Teal */
light: '#eefcf9',
blue: '#0EA5E9',    /* Sky Blue for cards */
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<div className="fixed inset-0 pointer-events-none z-0 bg-grid h-[80vh]"></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group relative z-10" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0e4a4d] to-[#1fae9b] text-white flex items-center justify-center shadow-lg shadow-[#1fae9b]/20">
<iconify-icon icon="lucide:activity" width="18"></iconify-icon>
</div>
<span className="text-xl font-heading font-semibold text-[#0e4a4d] tracking-tight">MyPsych</span>
</a>

<nav className="hidden lg:flex items-center gap-x-8">
<div className="relative group cursor-pointer py-2">
<span className="text-sm font-medium text-slate-600 hover:text-[#0e4a4d] transition-colors flex items-center gap-1">
                        ADHD Services <iconify-icon className="opacity-50" icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</div>
<a className="text-sm font-medium text-slate-600 hover:text-[#0e4a4d] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0e4a4d] transition-colors" href="#">Screening</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0e4a4d] transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden md:flex px-5 py-2 rounded-full border border-slate-200 bg-white/50 text-slate-700 text-xs font-semibold hover:border-[#1fae9b] hover:text-[#1fae9b] transition-colors">
                    Discovery Call
                </button>
<button className="px-5 py-2 rounded-full bg-[#0e4a4d] text-white text-xs font-semibold hover:bg-[#1fae9b] transition-all shadow-lg shadow-[#0e4a4d]/10">
                    Book Assessment
                </button>
</div>
</div>
</header>
<main className="relative z-10 pt-20">

<section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fae9b]/10 border border-[#1fae9b]/20 text-[#0e4a4d] text-[11px] font-semibold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-[#1fae9b]"></span>
                        Specialist UK Private Clinic
                    </div>
<h1 className="text-6xl lg:text-7xl font-heading font-bold text-[#0e4a4d] leading-[1.05] tracking-tight">
                        Empowering <br/>
<span className="text-[#1fae9b]">minds</span> to thrive.
                    </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-normal">
                        GMC-registered ADHD diagnosis and medication support. We provide the NICE-compliant care you need to navigate life with clarity.
                    </p>
<div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1fae9b]" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="font-medium">CQC Registered</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1fae9b]" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="font-medium">GMC Specialists</span>
</div>
</div>
<div className="pt-4 flex gap-4">
<button className="px-8 py-3.5 rounded-full bg-[#0e4a4d] text-white text-sm font-semibold hover:bg-[#093538] transition-all shadow-xl shadow-[#0e4a4d]/20 flex items-center gap-2">
                            Start Assessment <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 lg:translate-x-8 animate-fade-up" style={{animationDelay: '0.2s'}}>

<div className="flex-1 glass-panel bg-white/60 rounded-[32px] p-8 text-[#0e4a4d] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-white shadow-xl shadow-slate-200/50">
<div className="flex gap-2 mb-10">
<span className="px-3 py-1 bg-[#0e4a4d]/5 border border-[#0e4a4d]/10 rounded-full text-[10px] font-bold uppercase tracking-wider">Adult</span>
<span className="px-3 py-1 bg-transparent border border-slate-200 text-slate-400 rounded-full text-[10px] font-bold uppercase tracking-wider">Child</span>
</div>
<h3 className="text-2xl font-heading font-semibold mb-2 tracking-tight">Psychiatrist Diagnosis</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-10">Expert clinical evaluation focusing on efficient diagnosis and comprehensive reporting.</p>
<div className="flex items-baseline gap-1 mb-8 border-t border-slate-100 pt-6">
<span className="text-lg font-heading font-medium">£</span>
<span className="text-5xl font-heading font-semibold tracking-tight">600</span>
</div>
<button className="w-full bg-[#0e4a4d] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-between px-6 hover:bg-[#1fae9b] transition-colors">
                            Book Now
                            <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 bg-[#0e4a4d] rounded-[32px] p-8 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 mt-0 md:mt-12 shadow-2xl shadow-[#0e4a4d]/30">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute bottom-0 right-0 p-32 bg-[#1fae9b] rounded-full blur-[80px] opacity-40 translate-y-1/3 translate-x-1/3"></div>
<div className="flex gap-2 mb-10 relative z-10">
<span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">Complex</span>
</div>
<h3 className="text-2xl font-heading font-semibold mb-2 tracking-tight relative z-10">MDT Assessment</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-10 relative z-10">Gold standard assessment involving multiple specialists for complex cases.</p>
<div className="flex items-baseline gap-1 mb-8 border-t border-white/10 pt-6 relative z-10">
<span className="text-lg font-heading font-medium text-slate-300">£</span>
<span className="text-5xl font-heading font-semibold tracking-tight">1200</span>
</div>
<button className="w-full bg-white text-[#0e4a4d] py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-between px-6 hover:bg-slate-100 transition-colors relative z-10">
                            Book Now
                            <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="space-y-4 max-w-2xl">
<span className="text-[#1fae9b] font-semibold text-xs tracking-widest uppercase pl-1">Clinical Services</span>
<h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#0e4a4d] leading-none tracking-tight">Pathways to <span className="text-[#1fae9b]">better</span> living.</h2>
</div>
<div className="pb-2">
<a className="text-sm font-semibold text-slate-500 hover:text-[#0e4a4d] flex items-center gap-2 transition-colors" href="#">
                            View all services <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:zap" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">Adults</span>
</div>
<h3 className="text-lg font-heading font-semibold text-slate-900 mb-3 tracking-tight">Adult ADHD Diagnosis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive private adult ADHD assessments using DIVA-5 protocols. Valid for GP shared care and workplace support.</p>
</div>

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:smile" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">Children</span>
</div>
<h3 className="text-lg font-heading font-semibold text-slate-900 mb-3 tracking-tight">Children ADHD Diagnosis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert children's ADHD evaluation involving school reports and observation. Early intervention for better academic outcomes.</p>
</div>

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:flask-conical" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">All Ages</span>
</div>
<h3 className="text-lg font-heading font-semibold text-slate-900 mb-3 tracking-tight">ADHD Medication Titration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialist-led titration service to optimize stimulant or non-stimulant medications for maximum symptom control.</p>
</div>

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:clipboard-list" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">Adults</span>
</div>
<h3 className="text-lg font-heading font-semibold text-slate-900 mb-3 tracking-tight">ADHD Coaching</h3>
<p className="text-sm text-slate-500 leading-relaxed">Practical ADHD coaching for time management, goal setting, and organization habits that actually stick.</p>
</div>

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:user" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">All Ages</span>
</div>
<h3 className="text-lg font-heading font-semibold text-slate-900 mb-3 tracking-tight">Mental Well-Being Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Professional support for co-occurring conditions including Anxiety, PTSD, and Depression, provided by our specialist clinical psychologists.</p>
</div>

<div className="group p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:heart" width="22"></iconify-icon>
</div>
<div className="mb-4">
<span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">All Ages</span>
</div>
<h3 className="text-lg font-heading font-semibold text-[#1fae9b] mb-3 tracking-tight">ADHD-Focused Counselling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Neuro-affirming counselling designed specifically for the emotional challenges of ADHD.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0e4a4d] text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1fae9b] rounded-full blur-[120px] opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-6 leading-tight tracking-tight">The <span className="text-[#1fae9b]">Journey</span> to Clarity</h2>
<p className="text-slate-300 text-sm leading-relaxed mb-8">A seamless, supportive process designed specifically for the neurodivergent brain. No hurdles, just help.</p>
<button className="px-6 py-3 rounded-full bg-[#1fae9b] text-white text-xs font-semibold hover:bg-white hover:text-[#0e4a4d] transition-colors">
                            View Process Guide
                        </button>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-[#1fae9b] flex items-center justify-center text-[#1fae9b] text-xs font-heading font-bold">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-xl font-heading font-semibold mb-2">Initial Screening</h4>
<p className="text-sm text-slate-400 leading-relaxed">Complete an initial screening checklist to identify ADHD traits and determine if a full diagnosis pathway is right for you.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 text-xs font-heading font-bold">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-xl font-heading font-semibold mb-2">Clinical Assessment</h4>
<p className="text-sm text-slate-400 leading-relaxed">Comprehensive 90-minute clinical interview (DIVA-5) exploring history from childhood to now, plus objective cognitive data.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 text-xs font-heading font-bold">3</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-xl font-heading font-semibold mb-2">Titration Phase</h4>
<p className="text-sm text-slate-400 leading-relaxed">Specialist titration to find the optimal medication and dosage, with monthly safety and efficacy reviews.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 text-xs font-heading font-bold">4</div>
<div className="w-px h-full bg-transparent my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-xl font-heading font-semibold mb-2">Shared Care</h4>
<p className="text-sm text-slate-400 leading-relaxed">Transition to Shared Care with your NHS GP, plus ongoing coaching and annual specialist ADHD reviews.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 lg:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#1fae9b]/10 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Clinical Director" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-xs">
<p className="text-2xl font-heading font-semibold text-[#0e4a4d] tracking-tight">"We treat the person, not just the symptoms."</p>
</div>
</div>
<div className="lg:pl-8 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full">
<span className="w-2 h-2 rounded-full bg-[#1fae9b]"></span>
<span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Clinical Director</span>
</div>
<h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#0e4a4d] leading-tight tracking-tight">Expert Specialist Care, <br/> <span className="text-[#1fae9b]">Led by Experience.</span></h2>
<p className="text-slate-500 leading-relaxed font-normal">
                                MyPsych is clinically led by a Consultant Psychiatrist with 20 years of specialized expertise. We bridge the gap between rigorous NICE-compliant medicine and a deeply empathetic, neuro-affirming patient journey.
                            </p>
<div className="grid grid-cols-2 gap-6 pt-6">
<div className="space-y-1">
<h4 className="text-2xl font-heading font-bold text-[#0e4a4d]">20+</h4>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Experience</p>
</div>
<div className="space-y-1">
<h4 className="text-2xl font-heading font-bold text-[#0e4a4d]">100%</h4>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">CQC Compliant</p>
</div>
<div className="space-y-1">
<h4 className="text-2xl font-heading font-bold text-[#0e4a4d]">4.9/5</h4>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Patient Rating</p>
</div>
<div className="space-y-1">
<h4 className="text-2xl font-heading font-bold text-[#0e4a4d]">GMC</h4>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Specialist Register</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-20 lg:pb-32">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
<h2 className="text-3xl lg:text-4xl font-heading font-semibold text-[#0e4a4d] mb-12 tracking-tight">The Specialist Team</h2>
<div className="flex flex-wrap justify-center gap-8">
<div className="bg-white px-6 py-4 rounded-full border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#1fae9b] transition-colors cursor-pointer group">
<img className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-[#0e4a4d]">Dr. Arinze Okafor</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">Clinical Psychologist</p>
</div>
</div>
<div className="bg-white px-6 py-4 rounded-full border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#1fae9b] transition-colors cursor-pointer group">
<img className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-[#0e4a4d]">Elena Rodriguez</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">Lead Nurse</p>
</div>
</div>
<div className="bg-white px-6 py-4 rounded-full border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#1fae9b] transition-colors cursor-pointer group">
<img className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-[#0e4a4d]">James Chen</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">CBT Therapist</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-[#0e4a4d] flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" width="14"></iconify-icon>
</div>
<span className="text-lg font-heading font-semibold italic text-[#0e4a4d]">MyPsych</span>
</a>
<p className="text-sm text-slate-500 max-w-sm font-normal">
                        Providing UK-wide expert ADHD diagnosis, specialist medication titration, and evidence-based executive function coaching.
                    </p>
</div>
<div>
<h4 className="text-xs font-bold text-[#0e4a4d] uppercase tracking-widest mb-6">Clinic</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#1fae9b]" href="#">Our Team</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">Fees &amp; Pricing</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">Shared Care</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-[#0e4a4d] uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#1fae9b]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">CQC Registration</a></li>
<li><a className="hover:text-[#1fae9b]" href="#">Complaints</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 MyPsych Clinic Ltd. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 hover:text-[#0e4a4d] cursor-pointer" icon="lucide:instagram" width="18"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-[#0e4a4d] cursor-pointer" icon="lucide:linkedin" width="18"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-[#0e4a4d] cursor-pointer" icon="lucide:twitter" width="18"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
