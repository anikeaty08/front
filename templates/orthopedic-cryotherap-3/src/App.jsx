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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tighter text-lg font-medium flex items-center gap-2" href="#">
<span className="iconify text-cyan-400" data-icon="lucide:snowflake" data-width="20"></span>
                ORTHO CRYO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#treatment">Treatments</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-slate-900 bg-white rounded-full hover:bg-cyan-50 transition-colors" href="#book">
                Book Session
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950 text-white">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-cyan-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                New: Advanced Recovery Technology
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">
                Targeted Orthopedic <br/> Cryotherapy for <span className="text-cyan-200">Recovery &amp; Relief</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Advanced cold therapy designed to support joint and muscle recovery using controlled subzero temperatures. Non-invasive, precise, and drug-free.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-cyan-50 transition-all flex items-center justify-center gap-2" href="#book">
                    Book Treatment
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center" href="#intro">
                    Learn More
                </a>
</div>

<div className="mt-16 mx-auto max-w-4xl relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
<img alt="Cryotherapy Device" className="w-full h-64 md:h-96 object-cover rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 flex items-center gap-4">
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
<span className="iconify text-cyan-400" data-icon="lucide:thermometer" data-width="20"></span>
<div>
<div className="text-[10px] uppercase tracking-widest text-slate-400">Target Temp</div>
<div className="text-lg font-medium text-white">-110°F</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="intro">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Precision Cooling Technology</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                Orthopedic Cryotherapy is a targeted treatment that applies controlled cold temperatures to specific joints and muscle areas. This non-invasive therapy helps reduce inflammation, support recovery, and improve mobility—without medication or downtime.
            </p>
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-1">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<span className="text-sm font-medium text-slate-900">Pain Relief</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-1">
<span className="iconify" data-icon="lucide:activity" data-width="24"></span>
</div>
<span className="text-sm font-medium text-slate-900">Recovery</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-1">
<span className="iconify" data-icon="lucide:move" data-width="24"></span>
</div>
<span className="text-sm font-medium text-slate-900">Mobility</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-1">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<span className="text-sm font-medium text-slate-900">Safe</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="treatment">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Targeted Treatment Areas</h2>
<p className="text-slate-500">Customized localized cooling for specific needs.</p>
</div>
<div className="h-px flex-1 bg-slate-200 mx-8 hidden md:block mb-4"></div>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
<span className="iconify" data-icon="lucide:crosshair" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900">Small Areas</h3>
<p className="text-sm text-slate-500">Focused joint therapy</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-cyan-500 mb-3" data-icon="lucide:hand" data-width="24"></span>
<div className="font-medium text-slate-900">Wrist</div>
<div className="text-xs text-slate-500 mt-1">Carpal support</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-cyan-500 mb-3" data-icon="lucide:circle-dot-dashed" data-width="24"></span>
<div className="font-medium text-slate-900">Elbow</div>
<div className="text-xs text-slate-500 mt-1">Tendon relief</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
<span className="iconify" data-icon="lucide:scan-line" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900">Large Areas</h3>
<p className="text-sm text-slate-500">Major muscle groups &amp; joints</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-indigo-500 mb-3" data-icon="lucide:accessibility" data-width="24"></span>
<div className="font-medium text-slate-900">Knee</div>
<div className="text-xs text-slate-500 mt-1">ACL/MCL support</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-indigo-500 mb-3" data-icon="lucide:footprints" data-width="24"></span>
<div className="font-medium text-slate-900">Ankle</div>
<div className="text-xs text-slate-500 mt-1">Sprain recovery</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-indigo-500 mb-3" data-icon="lucide:user" data-width="24"></span>
<div className="font-medium text-slate-900">Neck</div>
<div className="text-xs text-slate-500 mt-1">Tension relief</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default">
<span className="iconify text-slate-400 group-hover:text-indigo-500 mb-3" data-icon="lucide:dumbbell" data-width="24"></span>
<div className="font-medium text-slate-900">Shoulder</div>
<div className="text-xs text-slate-500 mt-1">Rotator cuff</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Transparent Pricing</h2>
<p className="text-slate-500">Choose single sessions or save with recovery packages.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10">
<span className="iconify w-32 h-32" data-icon="lucide:snowflake"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1">Small Area</h3>
<p className="text-sm text-slate-500 mb-6">Wrist, Elbow</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$60</span>
<span className="text-slate-500"> / session</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm">
<span className="text-sm text-slate-700">Package of 5</span>
<span className="text-sm font-semibold text-slate-900">$225 <span className="text-xs font-normal text-slate-400">($45/ea)</span></span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
<span className="text-sm text-slate-700">Package of 10</span>
<span className="text-sm font-semibold text-slate-900">$399 <span className="text-xs font-normal text-slate-400">($40/ea)</span></span>
</div>
</div>
<a className="w-full py-3 bg-white border border-slate-200 text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors text-center text-sm" href="#book">
                        Select Small Area
                    </a>
</div>

<div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-col relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 p-6 opacity-10 text-cyan-500">
<span className="iconify w-32 h-32" data-icon="lucide:scan-line"></span>
</div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-medium text-white">Large Area</h3>
<span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold tracking-wide uppercase border border-cyan-500/30">Popular</span>
</div>
<p className="text-sm text-slate-400 mb-6">Knee, Ankle, Neck, Shoulder</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">$80</span>
<span className="text-slate-400"> / session</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<span className="text-sm text-slate-200">Package of 5</span>
<span className="text-sm font-semibold text-white">$325 <span className="text-xs font-normal text-slate-500">($65/ea)</span></span>
</div>
<div className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-xl border border-cyan-500/30">
<span className="text-sm text-white">Package of 10</span>
<span className="text-sm font-semibold text-white">$599 <span className="text-xs font-normal text-slate-300">($60/ea)</span></span>
</div>
</div>
<a className="w-full py-3 bg-cyan-500 text-white font-medium rounded-xl hover:bg-cyan-400 transition-colors text-center text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]" href="#book">
                        Select Large Area
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Therapeutic Benefits</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:thermometer-snowflake" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Reduces Inflammation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Targeted cold constricts blood vessels to significantly reduce swelling and inflammatory markers in the tissue.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Supports Recovery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Accelerates the healing process for muscle strains and joint fatigue by flushing metabolic waste.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:move-diagonal" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Improves Mobility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Decreases stiffness in joints allowing for a greater range of motion and flexibility post-treatment.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:shield" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Non-Invasive</h3>
<p className="text-sm text-slate-500 leading-relaxed">A completely drug-free approach to pain management with zero needles or surgical intervention.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:timer" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Quick Sessions</h3>
<p className="text-sm text-slate-500 leading-relaxed">Treatments are fast, usually lasting 10-15 minutes, allowing you to return to your day immediately.</p>
</div>

<div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-slate-800 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-1">Get Started</h3>
<p className="text-sm text-slate-400">Book your appointment</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8 text-center">Real Recovery Results</h2>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">

<div className="absolute inset-0 bg-slate-100">

<img alt="After Treatment - Recovered" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-6 right-6 px-3 py-1 bg-emerald-500/90 backdrop-blur text-white text-xs font-medium rounded-full">AFTER (3 Sessions)</div>
</div>

<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50 bg-slate-200" id="before-image">

<img alt="Before Treatment" className="w-full h-full object-cover object-left filter brightness-90 sepia-[.2]" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{width: '200%', maxWidth: 'none'}}/>
<div className="absolute top-6 left-6 px-3 py-1 bg-slate-900/80 backdrop-blur text-white text-xs font-medium rounded-full">BEFORE</div>
</div>

<div className="absolute inset-y-0 left-1/2 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-cyan-400 transition-colors" id="slider-line">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
<span className="iconify text-slate-900" data-icon="lucide:chevrons-left-right" data-width="16"></span>
</div>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="
                    document.getElementById('before-image').style.width = this.value + '%';
                    document.getElementById('slider-line').style.left = this.value + '%';
                " type="range" value="50"/>
</div>
<p className="text-center text-sm text-slate-400 mt-6 italic">Drag slider to see reduction in swelling and tissue recovery.</p>
</div>
</section>

<footer className="bg-slate-950 text-white py-24 relative overflow-hidden" id="book">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
<div className="max-w-xl mx-auto px-6 text-center relative z-10">
<span className="iconify text-cyan-500 mx-auto mb-6" data-icon="lucide:snowflake" data-width="48"></span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready for Relief?</h2>
<p className="text-lg text-slate-400 mb-10">Book your orthopedic cryotherapy session today and experience the future of recovery.</p>
<form className="space-y-4 text-left bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
<input className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
<input className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
<input className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Area of Interest</label>
<div className="relative">
<select className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white appearance-none">
<option>Small Area (Wrist/Elbow)</option>
<option>Large Area (Knee/Ankle/Neck)</option>
<option>Consultation</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<button className="w-full py-3.5 bg-white text-slate-950 font-medium rounded-xl hover:bg-cyan-50 transition-colors mt-2" type="button">
                    Confirm Booking
                </button>
</form>
<div className="mt-12 text-xs text-slate-600 flex justify-center gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
<span>© 2023 Ortho Cryo</span>
</div>
</div>
</footer>

    </>
  );
}
