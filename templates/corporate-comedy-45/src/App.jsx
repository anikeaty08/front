import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Smooth reveal on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="crt-screen w-full border-b-2 border-[#003b46]">
<div className="crt-scanline"></div>
<div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center text-[9px] uppercase tracking-[0.25em] font-mono relative z-20">
<span className="hidden sm:inline">Server: CA-West-1 (Vancouver)</span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-glow"></span>
                Rec. Active
            </span>
<span className="hidden md:inline">Compliance: 98.4%</span>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 nav-blur border-b border-slate-200/80">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-3 group" href="#">
<div className="h-11 w-11 bg-gradient-to-br from-[#003b46] to-[#005a6a] flex items-center justify-center rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500">
<div className="w-3.5 h-3.5 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-[#003b46] leading-none">Prang Industries</span>
<span className="text-[8px] uppercase tracking-[0.35em] text-slate-400 mt-0.5 font-medium">Canadian Division</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-10">
<a className="text-slate-500 hover:text-[#003b46] text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group" href="#data">
                    Macrodata
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#003b46] group-hover:w-full transition-all duration-300"></span>
</a>
<a className="text-slate-500 hover:text-[#003b46] text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group" href="#wellness">
                    Wellness
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#003b46] group-hover:w-full transition-all duration-300"></span>
</a>
<a className="text-slate-500 hover:text-[#003b46] text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group" href="#perks">
                    Perks
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#003b46] group-hover:w-full transition-all duration-300"></span>
</a>
</div>
<a className="bg-[#003b46] hover:bg-[#004e5c] text-white font-medium text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group" href="#request">
<span>File Request</span>
<i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#003b46]/10 to-transparent"></div>
<div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#003b46]/10 to-transparent"></div>
<div className="absolute right-12 top-32 w-64 h-64 bg-[#fbbf24]/5 rounded-full blur-3xl float-animation"></div>
<div className="absolute left-12 bottom-32 w-48 h-48 bg-[#003b46]/5 rounded-full blur-3xl float-animation" style={{animationDelay: '-3s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">

<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 border border-[#003b46]/20 px-4 py-2 mb-8 bg-white/60 backdrop-blur rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#fbbf24]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#003b46]">Department of Humour Refinement</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#003b46] mb-8 leading-[1.08]">
                    Please try to enjoy<br/>
<span className="text-gradient">each joke equally.</span>
</h1>
<p className="text-base lg:text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
<span className="inline-block w-8 h-px bg-[#fbbf24] mr-3 align-middle"></span>
                    A handshake is available upon request. Cliff Prang facilitates the refinement of corporate atmosphere through sanctioned comedic inputs.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-[#003b46] hover:bg-[#004e5c] text-white px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group" href="#request">
                        Begin Session
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-white hover:bg-slate-50 border border-slate-200 text-[#003b46] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3" href="#wellness">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
                        Watch Demo
                    </a>
</div>
</div>

<div className="lg:col-span-5 flex justify-center lg:justify-end">
<div className="relative">
<div className="w-72 h-80 lg:w-80 lg:h-96 bg-white p-3 shadow-2xl rounded-lg border border-slate-100 card-hover">
<div className="w-full h-full bg-slate-100 relative overflow-hidden rounded grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Cliff Prang" className="object-cover w-full h-full" src="https://www.cliffprang.com/files/cache/bcaa79e84c58bb63441e8a9a94584b72_f320.jpeg"/>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#003b46] to-[#005a6a] text-white p-5 shadow-xl rounded-lg w-52">
<div className="flex justify-between items-center border-b border-white/20 pb-2 mb-3">
<span className="text-[8px] uppercase tracking-[0.2em] text-slate-300">Refiner ID</span>
<span className="font-mono text-[10px] text-[#4ade80]">07-499-CP</span>
</div>
<div className="text-sm font-medium tracking-wide">Cliff Prang</div>
<div className="text-[9px] uppercase tracking-[0.15em] text-slate-300 mt-1">Level 4 Clearance</div>
</div>

<div className="absolute -top-4 -right-4 bg-[#fbbf24] text-[#003b46] px-3 py-1.5 rounded-full shadow-lg text-[9px] font-bold uppercase tracking-wider float-animation">
                        Active
                    </div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46]">12+</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Years Active</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46]">500+</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Shows Performed</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46]">100%</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Canadian Polite</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46]">∞</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Apologies Given</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="data">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 lg:mb-20">
<span className="text-[10px] uppercase tracking-[0.3em] text-[#fbbf24] font-medium">What We Refine</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46] mt-3">Refinement Categories</h2>
<p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">Four distinct protocols for optimal corporate atmosphere adjustment.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003b46] to-[#005a6a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
<div className="mb-6 text-[#003b46] opacity-60 group-hover:opacity-100 transition-opacity">
<i className="w-10 h-10" data-lucide="smile" strokeWidth="1"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-3">Frolic</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Stand-Up Comedy. Pure, unadulterated morale boosting for the severed floor.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
<div className="mb-6 text-[#003b46] opacity-60 group-hover:opacity-100 transition-opacity">
<i className="w-10 h-10" data-lucide="mic-2" strokeWidth="1"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-3">Woe</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Speaking. Turning failure into actionable data points through authentic vulnerability.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003b46] to-[#005a6a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
<div className="mb-6 text-[#003b46] opacity-60 group-hover:opacity-100 transition-opacity">
<i className="w-10 h-10" data-lucide="shuffle" strokeWidth="1"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-3">Dread</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Improv. Navigating the unknown without a script. Advanced fear management.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
<div className="mb-6 text-[#003b46] opacity-60 group-hover:opacity-100 transition-opacity">
<i className="w-10 h-10" data-lucide="crown" strokeWidth="1"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-3">Malice</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Emcee/Hosting. Controlling the crowd with benevolent Canadian authority.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gradient-to-br from-[#003b46] via-[#004555] to-[#002830] text-white overflow-hidden relative" id="wellness">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 border-b border-white/10 pb-8">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-[#fbbf24] font-medium">Archive Access</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-3">Wellness Session</h2>
<p className="text-slate-400 mt-2 text-sm">Mandatory viewing material for all departments.</p>
</div>
<div className="mt-4 lg:mt-0 font-mono text-xs text-[#4ade80] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#4ade80] pulse-glow"></span>
                    ACCESSING ARCHIVE...
                </div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="crt-screen rounded-xl shadow-2xl overflow-hidden border border-white/10">
<div className="crt-scanline"></div>
<div className="aspect-video bg-[#0a1628] relative flex items-center justify-center">
<div className="absolute top-4 left-4 flex items-center gap-2 text-[9px] font-mono text-[#4ade80] uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 pulse-glow"></span>
                            Cam_01 [REC]
                        </div>
<div className="w-20 h-20 rounded-full border-2 border-[#4ade80]/50 flex items-center justify-center cursor-pointer hover:scale-110 hover:border-[#4ade80] transition-all duration-300 group">
<i className="w-8 h-8 text-[#4ade80] ml-1 group-hover:scale-110 transition-transform" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-[#4ade80]/70">
<span>SUBJ: C. PRANG</span>
<span>LOC: VANCOUVER</span>
<span>BPM: 110</span>
</div>
</div>
</div>

<div className="space-y-8">
<div className="space-y-5">
<h3 className="text-xl lg:text-2xl font-medium tracking-tight text-white">Observation Log: 874-B</h3>
<p className="text-slate-300 leading-relaxed">
                            Subject demonstrates exceptional ability to dissipate corporate tension. During the "Comedy" protocol, employee endorphin levels rose by 400%.
                        </p>
<p className="text-slate-300 leading-relaxed">
<span className="text-[#fbbf24] font-medium">Note from the Board:</span> While laughter is encouraged, please ensure it does not exceed 85 decibels. We are Canadian, after all.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/20 hover:border-[#fbbf24]/50 p-5 rounded-lg text-center transition-colors duration-300 bg-white/5">
<span className="block text-3xl font-semibold tracking-tight text-white mb-1">12+</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">Years Active</span>
</div>
<div className="border border-white/20 hover:border-[#fbbf24]/50 p-5 rounded-lg text-center transition-colors duration-300 bg-white/5">
<span className="block text-3xl font-semibold tracking-tight text-white mb-1">100%</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">Politeness</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="perks">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[10px] uppercase tracking-[0.3em] text-[#fbbf24] font-medium">Incentives</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46] mt-3">Departmental Perks</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center card-hover group">
<div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:scale-110 transition-all duration-500">
<i className="w-7 h-7 text-[#003b46]" data-lucide="cake" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#003b46] mb-3">Waffle Party</h3>
<p className="text-xs text-slate-500 leading-relaxed">Awarded to refined audiences. Syrup provided by management.</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center card-hover group">
<div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:scale-110 transition-all duration-500">
<i className="w-7 h-7 text-[#003b46]" data-lucide="music" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#003b46] mb-3">Music Experience</h3>
<p className="text-xs text-slate-500 leading-relaxed">Defiant Jazz available upon request during improv sets.</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center card-hover group">
<div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:scale-110 transition-all duration-500">
<i className="w-7 h-7 text-[#003b46]" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#003b46] mb-3">Finger Trap</h3>
<p className="text-xs text-slate-500 leading-relaxed">Standard corporate gift for successful booking completion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="request">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[10px] uppercase tracking-[0.3em] text-[#fbbf24] font-medium">Get Started</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003b46] mt-3">Requisition Form</h2>
<p className="text-slate-500 mt-3 text-sm">Form 08-B // External Contractor Request</p>
</div>
<div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-lg">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-2">Requestor Identity</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3.5 text-sm rounded-lg outline-none input-focus focus:border-[#003b46] transition-all placeholder:text-slate-400" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-2">Digital Contact</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3.5 text-sm rounded-lg outline-none input-focus focus:border-[#003b46] transition-all placeholder:text-slate-400" placeholder="email@domain.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-2">Desired Protocol</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 px-4 py-3.5 text-sm rounded-lg outline-none input-focus focus:border-[#003b46] appearance-none text-slate-600 cursor-pointer transition-all">
<option>Standard Stand-Up Routine (Safe)</option>
<option>Keynote: "The Power of Failure" (Educational)</option>
<option>Improv Workshop (Interactive)</option>
<option>Event Hosting (Authoritative)</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003b46] mb-2">Objective / Context</label>
<textarea className="w-full bg-white border border-slate-200 px-4 py-3.5 text-sm rounded-lg outline-none input-focus focus:border-[#003b46] transition-all placeholder:text-slate-400 resize-none" placeholder="Describe the event parameters..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
<div className="relative mt-0.5">
<input className="peer sr-only" id="consent" type="checkbox"/>
<label className="w-5 h-5 border-2 border-slate-300 rounded flex items-center justify-center cursor-pointer peer-checked:bg-[#003b46] peer-checked:border-[#003b46] transition-all" htmlFor="consent">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2.5"></i>
</label>
</div>
<label className="text-[11px] text-slate-500 leading-relaxed cursor-pointer" htmlFor="consent">
                            I acknowledge that requesting Cliff Prang implies a desire for fun. I accept all liability for laughter-induced soreness.
                        </label>
</div>
<button className="w-full bg-[#003b46] hover:bg-[#004e5c] text-white py-4 font-medium text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.99]" type="button">
                        Submit to The Board
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-block mb-8">
<span className="text-2xl font-light italic text-[#003b46]">"Praise Kier."</span>
</div>
<div className="flex justify-center gap-6 mb-8">
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#003b46] hover:border-[#003b46] transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#003b46] hover:border-[#003b46] transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#003b46] hover:border-[#003b46] transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#003b46] hover:border-[#003b46] transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                © 2025 Prang Industries. A wholly owned subsidiary of [REDACTED].
            </p>
</div>
</footer>


    </>
  );
}
