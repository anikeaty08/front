import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve after revealing to animate only once
                        // observer.unobserve(entry.target); 
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#080C14]/70 border-b border-[#1A3040]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-[#4FACF7] text-xl animate-shimmer" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-serif font-medium text-lg tracking-tighter text-white group-hover:text-white/90 transition-colors">Nova</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8EAFC2]">
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#social-proof">For Clinics</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<a className="px-5 py-2 rounded-full bg-[#4FACF7] text-white text-sm font-medium hover:bg-[#4FACF7]/90 shadow-[0_0_15px_rgba(79,172,247,0.3)] hover:shadow-[0_0_20px_rgba(79,172,247,0.5)] transition-all duration-300" href="#">
                Request Early Access
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

<div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4FACF7]/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>

<div className="particle w-1 h-1 left-[10%] top-[90%]" style={{animationDuration: '25s', animationDelay: '0s'}}></div>
<div className="particle w-1.5 h-1.5 left-[30%] top-[100%]" style={{animationDuration: '30s', animationDelay: '5s'}}></div>
<div className="particle w-0.5 h-0.5 left-[60%] top-[80%]" style={{animationDuration: '20s', animationDelay: '2s'}}></div>
<div className="particle w-1 h-1 left-[80%] top-[110%]" style={{animationDuration: '35s', animationDelay: '8s'}}></div>
<div className="particle w-1 h-1 left-[45%] top-[95%]" style={{animationDuration: '28s', animationDelay: '12s'}}></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

<div className="lg:col-span-7 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4FACF7]/30 bg-[#111E2E]/50 backdrop-blur-sm mb-8">
<iconify-icon className="text-[#4FACF7] text-xs" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-[#8EAFC2]">Clinical AI for the Modern Doctor</span>
</div>
<h1 className="font-serif text-6xl md:text-7xl lg:text-[5rem] leading-[0.95] tracking-tight text-white mb-4">
                    See the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Full Picture.</span>
</h1>
<h2 className="font-serif text-3xl md:text-4xl font-normal text-white/80 tracking-tight mb-6">
                    Every patient. Every visit. Every time.
                </h2>
<p className="text-base md:text-lg text-[#8EAFC2] leading-relaxed max-w-xl mb-10 font-normal">
                    Nova listens to your consultations, writes clinical notes in seconds, keeps your patients informed via WhatsApp, and never forgets a single detail — so you can focus entirely on care.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4FACF7] text-white text-sm font-medium hover:bg-[#4FACF7]/90 shadow-[0_0_20px_rgba(79,172,247,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2" href="#">
                        Get Early Access
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#1A3040] text-white text-sm font-medium hover:bg-[#111E2E] hover:border-[#8EAFC2]/30 transition-all duration-300 text-center flex items-center justify-center gap-2 group" href="#">
<iconify-icon className="text-lg group-hover:text-[#4FACF7] transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Watch how it works
                    </a>
</div>
<div className="flex items-center gap-3">
<div className="flex gap-1">
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-[#8EAFC2]">Trusted by doctors across Egypt, UAE and Saudi Arabia</p>
</div>
</div>

<div className="lg:col-span-5 relative reveal delay-100 hidden md:block">

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-6 shadow-[0_0_50px_rgba(79,172,247,0.1)] relative z-10 animate-float">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A3040]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0D1B2A] flex items-center justify-center text-[#8EAFC2] text-sm font-medium border border-[#1A3040]">
                                FA
                            </div>
<div>
<h3 className="text-sm font-medium text-white">Fatima Al-Hassan</h3>
<p className="text-xs text-[#8EAFC2]">ID: 9482 • 42y • Female</p>
</div>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-[#0A9396]/10 text-[#0A9396] border border-[#0A9396]/20">Active Visit</span>
</div>

<div className="space-y-4 mb-6">
<div className="grid grid-cols-[24px_1fr] gap-3">
<div className="text-xs font-medium text-[#4FACF7] pt-0.5">S</div>
<div className="bg-[#0D1B2A] rounded-lg p-3 border border-[#1A3040]/50">
<p className="text-xs text-[#8EAFC2] leading-relaxed">Patient reports increasing fatigue over the last 3 weeks, accompanied by increased thirst and frequent urination.</p>
</div>
</div>
<div className="grid grid-cols-[24px_1fr] gap-3">
<div className="text-xs font-medium text-[#4FACF7] pt-0.5">O</div>
<div className="bg-[#0D1B2A] rounded-lg p-3 border border-[#1A3040]/50">
<p className="text-xs text-[#8EAFC2] leading-relaxed">BP 130/85. Wt 78kg. Random blood glucose in clinic 210 mg/dL. No acute distress.</p>
</div>
</div>
<div className="grid grid-cols-[24px_1fr] gap-3">
<div className="text-xs font-medium text-[#4FACF7] pt-0.5">A</div>
<div className="bg-[#0D1B2A] rounded-lg p-3 border border-[#1A3040]/50">
<p className="text-xs text-[#8EAFC2] leading-relaxed">Suspected Type 2 Diabetes Mellitus. Hypertension, controlled.</p>
<div className="flex gap-2 mt-2">
<span className="px-1.5 py-0.5 rounded text-[10px] bg-[#1A3040] text-[#8EAFC2]">E11.9</span>
</div>
</div>
</div>
<div className="grid grid-cols-[24px_1fr] gap-3">
<div className="text-xs font-medium text-[#4FACF7] pt-0.5">P</div>
<div className="bg-[#0D1B2A] rounded-lg p-3 border border-[#1A3040]/50">
<p className="text-xs text-[#8EAFC2] leading-relaxed">Order HbA1c, fasting lipid panel. Start Metformin 500mg daily. Follow up in 2 weeks.</p>
</div>
</div>
</div>

<button className="w-full py-2.5 rounded-lg bg-[#4FACF7] text-white text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#4FACF7]/90 transition-colors">
                        Approve Note <iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="absolute -left-6 top-[20%] bg-[#080C14]/80 backdrop-blur-md border border-[#1A3040] rounded-full px-3 py-2 flex items-center gap-2 shadow-lg animate-float-slow z-20">
<span className="text-xs">📝</span>
<span className="text-xs font-medium text-white">Note ready in 9s</span>
</div>
<div className="absolute -right-8 top-[50%] bg-[#080C14]/80 backdrop-blur-md border border-[#1A3040] rounded-full px-3 py-2 flex items-center gap-2 shadow-lg animate-float-slow z-20" style={{animationDelay: '-2s'}}>
<span className="text-xs text-[#0A9396]">💬</span>
<span className="text-xs font-medium text-white">WhatsApp sent <span className="text-[#0A9396]">✓</span></span>
</div>
<div className="absolute -left-2 bottom-[15%] bg-[#080C14]/80 backdrop-blur-md border border-[#1A3040] rounded-full px-3 py-2 flex items-center gap-2 shadow-lg animate-float-slow z-20" style={{animationDelay: '-4s'}}>
<span className="text-xs">⚠️</span>
<span className="text-xs font-medium text-white">HbA1c flagged</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1B2A] border-y border-[#1A3040]/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<p className="text-[#4FACF7] text-xs font-medium tracking-widest uppercase mb-4">The Problem</p>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    Doctors are drowning in paperwork. <br className="hidden md:block"/>Patients are paying the price.
                </h2>
<p className="text-base text-[#8EAFC2] leading-relaxed">
                    The average physician spends 49% of their working hours on documentation and administration — not on patients. Burnout is at an all-time high. And critical details fall through the cracks every single day.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-8 relative overflow-hidden group hover:border-[#1A3040]/80 transition-colors reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-[#4FACF7] opacity-80"></div>
<div className="font-serif text-5xl md:text-6xl text-[#4FACF7] mb-4 tracking-tighter">49%</div>
<p className="text-sm text-[#8EAFC2] font-medium leading-relaxed">of a doctor's day lost to documentation and paperwork</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-8 relative overflow-hidden group hover:border-[#1A3040]/80 transition-colors reveal delay-100">
<div className="absolute top-0 left-0 w-full h-1 bg-[#F7C948] opacity-80"></div>
<div className="font-serif text-5xl md:text-6xl text-[#F7C948] mb-4 tracking-tighter">63%</div>
<p className="text-sm text-[#8EAFC2] font-medium leading-relaxed">of patients forget their doctor's instructions within an hour</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-8 relative overflow-hidden group hover:border-[#1A3040]/80 transition-colors reveal delay-200">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0A9396] opacity-80"></div>
<div className="font-serif text-5xl md:text-6xl text-[#0A9396] mb-4 tracking-tighter">3hrs</div>
<p className="text-sm text-[#8EAFC2] font-medium leading-relaxed">average daily time spent on clinical documentation</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080C14]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 reveal">
<p className="text-[#4FACF7] text-xs font-medium tracking-widest uppercase mb-4">How It Works</p>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">
                    From consultation to follow-up — <br className="hidden md:block"/>Nova handles everything.
                </h2>
</div>
<div className="space-y-32">

<div className="grid lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 lg:order-1">
<span className="font-serif text-6xl text-[#1A3040] font-medium tracking-tighter block mb-6">01</span>
<h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Nova listens. You talk.</h3>
<p className="text-base text-[#8EAFC2] leading-relaxed">
                            Place your phone on the desk and start talking. Nova captures the entire consultation in real time, understands medical terminology in Arabic and English, and begins structuring everything immediately.
                        </p>
</div>
<div className="order-1 lg:order-2">
<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-6 shadow-xl relative overflow-hidden h-64 flex flex-col items-center justify-center">

<div className="flex items-center gap-3 mb-8">
<div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
<span className="font-mono text-white text-sm">02:34</span>
</div>

<div className="flex items-end gap-1.5 h-12 mb-8">
<div className="w-1.5 bg-[#4FACF7] rounded-full wave-bar"></div>
<div className="w-1.5 bg-[#4FACF7] rounded-full wave-bar"></div>
<div className="w-1.5 bg-[#4FACF7] rounded-full wave-bar"></div>
<div className="w-1.5 bg-[#4FACF7] rounded-full wave-bar"></div>
<div className="w-1.5 bg-[#4FACF7] rounded-full wave-bar"></div>
</div>
<div className="w-full px-8 text-center mask-image: linear-gradient(to bottom, black, transparent)">
<p className="text-sm text-[#8EAFC2] mb-2 opacity-60">"So you mentioned the pain started last Tuesday..."</p>
<p className="text-sm text-white">"Yes doctor, mostly in the lower back, radiating down."</p>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2">
<span className="font-serif text-6xl text-[#1A3040] font-medium tracking-tighter block mb-6">02</span>
<h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">A perfect clinical note in seconds.</h3>
<p className="text-base text-[#8EAFC2] leading-relaxed">
                            The moment you finish, Nova generates a complete SOAP note structured exactly the way you think. Review it, edit anything, approve in one click. Documentation that used to take 20 minutes takes 45 seconds.
                        </p>
</div>
<div className="order-1">
<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-6 shadow-xl relative h-64 overflow-hidden">

<div className="h-4 w-1/3 bg-[#1A3040] rounded mb-6"></div>

<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded bg-[#1A3040] flex items-center justify-center text-[10px] text-[#8EAFC2]">S</div>
<div className="h-10 w-full bg-[#0D1B2A] rounded border border-[#1A3040]/50"></div>
</div>
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded bg-[#1A3040] flex items-center justify-center text-[10px] text-[#8EAFC2]">O</div>
<div className="h-8 w-5/6 bg-[#0D1B2A] rounded border border-[#1A3040]/50"></div>
</div>
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded bg-[#1A3040] flex items-center justify-center text-[10px] text-[#8EAFC2]">A</div>
<div className="w-full">
<div className="h-6 w-3/4 bg-[#0D1B2A] rounded border border-[#1A3040]/50 mb-2"></div>
<div className="flex gap-2"><div className="h-4 w-12 bg-[#4FACF7]/20 rounded border border-[#4FACF7]/30"></div></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111E2E] to-transparent flex items-end justify-center pb-4">
<div className="px-6 py-2 bg-[#4FACF7] text-white text-xs rounded shadow-lg flex items-center gap-2">Approve <iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 lg:order-1">
<span className="font-serif text-6xl text-[#1A3040] font-medium tracking-tighter block mb-6">03</span>
<h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Your patient is already informed.</h3>
<p className="text-base text-[#8EAFC2] leading-relaxed">
                            The moment you approve the note, Nova sends your patient a plain-language visit summary via WhatsApp — in their language. Medication instructions, next steps, lab requests. Clear. Automatic. Instant.
                        </p>
</div>
<div className="order-1 lg:order-2">
<div className="flex justify-center">

<div className="w-[280px] h-[400px] border-[6px] border-[#1A3040] rounded-[2rem] bg-[#080C14] relative overflow-hidden shadow-2xl flex flex-col">

<div className="h-14 bg-[#111E2E] border-b border-[#1A3040] flex items-center px-4 gap-3">
<div className="w-8 h-8 rounded-full bg-[#0D1B2A] flex items-center justify-center border border-[#1A3040]">
<iconify-icon className="text-[#4FACF7] text-sm" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Dr. Ahmed Clinic</div>
<div className="text-[9px] text-[#0A9396]">bot</div>
</div>
</div>

<div className="flex-1 p-4 space-y-4 flex flex-col bg-[#0b141a]"> 

<div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] border border-[#2a3942]">
<p className="text-[11px] text-[#e9edef] leading-snug">
                                            Hello Fatima 👋<br/><br/>
                                            Here is your summary from today's visit:<br/>
                                            • Start taking Metformin (500mg) once daily.<br/>
                                            • Please do the requested blood test (HbA1c).<br/><br/>
                                            You can reply with a photo of your results here.
                                        </p>
<p className="text-[9px] text-[#8696a0] text-right mt-1">10:42 AM</p>
</div>

<div className="bg-[#005c4b] p-1.5 rounded-xl rounded-tr-none self-end max-w-[70%] border border-[#005c4b]">
<div className="h-20 w-full bg-[#1A3040] rounded-lg mb-1 flex items-center justify-center">
<iconify-icon className="text-[#8EAFC2] text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<p className="text-[11px] text-[#e9edef] px-1">Here are my lab results doctor.</p>
<div className="flex justify-end items-center gap-1 px-1">
<p className="text-[9px] text-[#8696a0] mt-0.5">11:15 AM</p>
<iconify-icon className="text-[#53bdeb] text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2">
<span className="font-serif text-6xl text-[#1A3040] font-medium tracking-tighter block mb-6">04</span>
<h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Nothing ever falls through the cracks.</h3>
<p className="text-base text-[#8EAFC2] leading-relaxed">
                            Nova tracks every patient across every visit. Pending labs, overdue follow-ups, flagged results — all surfaced to you before they become problems. Your patients are always watched over.
                        </p>
</div>
<div className="order-1">
<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-6 shadow-xl h-64 flex flex-col">

<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium text-white">Attention Required</div>
<div className="text-[10px] text-[#8EAFC2]">3 items</div>
</div>
<div className="space-y-2 flex-1">

<div className="bg-[#0D1B2A] border border-[#1A3040] rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#F7C948]"></div>
<div>
<div className="text-xs font-medium text-white">Omar K.</div>
<div className="text-[10px] text-[#8EAFC2]">Lab results uploaded (Abnormal)</div>
</div>
</div>
<button className="px-2 py-1 bg-[#1A3040] hover:bg-[#1A3040]/80 rounded text-[10px] text-white transition-colors">Review</button>
</div>

<div className="bg-[#0D1B2A] border border-red-500/30 rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div>
<div className="text-xs font-medium text-white">Layla S.</div>
<div className="text-[10px] text-red-400">Overdue Follow-up (3 days)</div>
</div>
</div>
<button className="px-2 py-1 bg-[#4FACF7]/10 text-[#4FACF7] hover:bg-[#4FACF7]/20 rounded text-[10px] transition-colors">Send Reminder</button>
</div>

<div className="bg-[#0D1B2A] border border-[#1A3040] rounded-lg p-3 flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#8EAFC2]"></div>
<div>
<div className="text-xs font-medium text-white">Tarek M.</div>
<div className="text-[10px] text-[#8EAFC2]">Pending MRI results</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1B2A] border-t border-[#1A3040]/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Everything a modern clinic needs.
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-[#4FACF7]/30 transition-colors duration-300 group reveal">
<div className="w-10 h-10 rounded-full bg-[#4FACF7]/10 flex items-center justify-center mb-4">
<iconify-icon className="text-[#4FACF7] text-xl" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Ambient Listening</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">Records consultations without any manual input. Just talk naturally and Nova captures everything.</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-[#0A9396]/30 transition-colors duration-300 group reveal delay-100">
<div className="w-10 h-10 rounded-full bg-[#0A9396]/10 flex items-center justify-center mb-4">
<iconify-icon className="text-[#0A9396] text-xl" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Instant SOAP Notes</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">AI-generated clinical notes structured in the format you already think in. Edit, approve, done.</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-green-500/30 transition-colors duration-300 group reveal delay-200">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-green-500 text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">WhatsApp Integration</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">Automatic patient communication after every visit. Summaries, reminders, lab requests — all handled.</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-[#F7C948]/30 transition-colors duration-300 group reveal">
<div className="w-10 h-10 rounded-full bg-[#F7C948]/10 flex items-center justify-center mb-4">
<iconify-icon className="text-[#F7C948] text-xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Lab Result Ingestion</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">Patients send lab photos via WhatsApp. Nova reads them, extracts values, flags abnormals, and alerts you.</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-purple-400/30 transition-colors duration-300 group reveal delay-100">
<div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-purple-400 text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Longitudinal Patient Record</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">Every visit, medication, lab, and note stored in a living timeline. The full picture, always.</p>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] p-6 rounded-2xl hover:border-red-400/30 transition-colors duration-300 group reveal delay-200">
<div className="w-10 h-10 rounded-full bg-red-400/10 flex items-center justify-center mb-4">
<iconify-icon className="text-red-400 text-xl" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Follow-Up Orchestration</h4>
<p className="text-xs text-[#8EAFC2] leading-relaxed">Nova tracks every outstanding task across your entire patient list and ensures nothing is ever missed.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080C14] border-t border-[#1A3040]/50" id="social-proof">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Doctors who use Nova don't go back.
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-white mb-6 leading-relaxed">
                        "I used to stay an extra 2 hours after clinic just for notes. Nova gave me my evenings back. My patients notice that I'm less rushed."
                    </p>
<div>
<p className="text-sm font-medium text-white">Dr. Sarah K.</p>
<p className="text-xs text-[#8EAFC2]">Internal Medicine, Cairo</p>
</div>
</div>

<div className="reveal delay-100">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-white mb-6 leading-relaxed">
                        "The WhatsApp integration alone is worth everything. My patients actually follow up now because Nova reminds them. My outcomes have genuinely improved."
                    </p>
<div>
<p className="text-sm font-medium text-white">Dr. Mohammed A.</p>
<p className="text-xs text-[#8EAFC2]">Family Medicine, Dubai</p>
</div>
</div>

<div className="reveal delay-200">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#F7C948] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-white mb-6 leading-relaxed">
                        "I was skeptical about AI in the clinic. But Nova doesn't replace my judgment — it just makes sure I have everything I need to use it well."
                    </p>
<div>
<p className="text-sm font-medium text-white">Dr. Layla R.</p>
<p className="text-xs text-[#8EAFC2]">Endocrinology, Riyadh</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1B2A] border-t border-[#1A3040]/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Simple, honest pricing.
                </h2>
<p className="text-base text-[#8EAFC2]">Start free. Scale as you grow. No contracts, no surprises.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-8 reveal">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$99</span>
<span className="text-sm text-[#8EAFC2]">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#8EAFC2]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> 1 Doctor</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 200 patients</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Instant SOAP notes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> WhatsApp bridge</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Basic patient record</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-[#1A3040] text-white text-sm font-medium hover:bg-[#1A3040]/50 transition-colors">
                        Get Started
                    </button>
</div>

<div className="bg-[#111E2E] border border-[#4FACF7] rounded-2xl p-8 relative scale-100 lg:scale-105 shadow-[0_0_30px_rgba(79,172,247,0.15)] z-10 reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4FACF7] text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Popular
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">$249</span>
<span className="text-sm text-[#8EAFC2]">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-white/90">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 5 Doctors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 1,000 patients</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Full follow-up suite</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Lab result ingestion</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-[#4FACF7] text-white text-sm font-medium hover:bg-[#4FACF7]/90 shadow-[0_0_15px_rgba(79,172,247,0.4)] transition-all">
                        Start Free Trial
                    </button>
</div>

<div className="bg-[#111E2E] border border-[#1A3040] rounded-2xl p-8 reveal delay-200">
<h3 className="text-lg font-medium text-white mb-2">Clinic</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$599</span>
<span className="text-sm text-[#8EAFC2]">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#8EAFC2]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 15 Doctors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Unlimited patients</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Analytics dashboard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Custom integrations</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4FACF7] text-base" icon="solar:check-circle-linear"></iconify-icon> Dedicated support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-[#1A3040] text-white text-sm font-medium hover:bg-[#1A3040]/50 transition-colors">
                        Contact Us
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080C14] border-t border-[#1A3040]/50 relative overflow-hidden flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FACF7]/20 rounded-full blur-[100px] animate-pulse-glow z-0 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                Your patients deserve a doctor who sees everything.
            </h2>
<p className="text-base md:text-lg text-[#8EAFC2] mb-10 font-normal">
                Join the waitlist. Be among the first clinics to use Nova.
            </p>
<a className="inline-block px-10 py-4 rounded-full bg-[#4FACF7] text-white text-base font-medium hover:bg-[#4FACF7]/90 shadow-[0_0_30px_rgba(79,172,247,0.4)] hover:shadow-[0_0_40px_rgba(79,172,247,0.6)] transition-all duration-300 mb-6" href="#">
                Request Early Access
            </a>
<p className="text-xs text-[#8EAFC2]">
                No credit card required · Setup in under 10 minutes · Cancel anytime
            </p>
</div>
</section>

<footer className="bg-[#080C14] border-t border-[#1A3040] py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4FACF7] text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-serif font-medium text-xl tracking-tighter text-white">Nova</span>
</div>
<span className="text-xs text-[#8EAFC2]">See the Full Picture.</span>
</div>

<div className="flex gap-6 text-xs text-[#8EAFC2] font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>

<div className="text-xs text-[#8EAFC2] italic font-serif">
                    Made for doctors. Built with care.
                </div>
</div>
<div className="border-t border-[#1A3040]/50 pt-8 text-center text-[10px] text-[#8EAFC2]/60">
                © 2026 Nova Health Technologies. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
