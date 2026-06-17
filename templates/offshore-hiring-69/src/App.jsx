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
sage: '#7C9A82',
brand: { lime: '#7C9A82' },
neutral: {
50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4',
400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040',
800: '#262626', 900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }
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
      

<header className="fixed top-0 left-0 right-0 z-50" style={{background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255, 255, 255, 0.5)'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
<a className="text-xl lg:text-2xl font-semibold tracking-tight" href="#">
                Enlighten<span className="text-sage">Schola</span>
</a>
<nav className="hidden lg:flex gap-x-8 items-center">
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600" href="#">Home</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600" href="#">Talent</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600" href="#">About</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600" href="#">Resources</a>
</nav>
<button className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                Book a Call
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</header>
<div className="fixed w-full h-screen top-0 pointer-events-none z-0" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)'}}></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
<main className="flex-1 w-full">

<section className="px-6 lg:px-12 pt-8 lg:pt-16 pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-7xl mx-auto items-center">
<div className="lg:col-span-7 space-y-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium text-neutral-900 tracking-tight leading-tight">
                        Build offshore teams that feel local.<br/>
<span className="text-neutral-400">Without the chaos.</span>
</h1>
<p className="text-lg lg:text-xl font-normal text-neutral-500 max-w-2xl leading-relaxed">
                        Enlighten Schola gives you the cost advantage of offshore hiring — with a proven system that removes the risk, handles the complexity, and delivers the talent you'd actually hire in-house.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all font-medium px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 group">
                            Book a 30-Minute Strategy Call
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up h-full relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sage opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="p-5 rounded-xl shadow-lg animate-float max-w-sm mx-auto lg:mx-0 w-full" style={{animationDelay: '0s'}}>
<span className="text-xs font-medium text-sage uppercase tracking-wide">Case Study</span>
<h3 className="text-base font-semibold text-neutral-900 mt-1 tracking-tight">$105k saved. 6 months to scale.</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">A SaaS founder built and scaled their platform using three Enlighten Schola engineers — from MVP to 23k+ daily transactions. Total cost: $35k vs $140k for local hires. Zero downtime, zero regret.</p>
<a className="text-xs font-medium text-sage mt-3 inline-flex items-center gap-1 hover:underline" href="#">Read the full story →</a>
</div>

<div className="p-5 rounded-xl shadow-lg animate-float max-w-sm mx-auto lg:ml-8 w-full" style={{animationDelay: '1.5s'}}>
<span className="text-xs font-medium text-sage uppercase tracking-wide">How We Work</span>
<h3 className="text-base font-semibold text-neutral-900 mt-1 tracking-tight">Embedded in your team. Managed by us.</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">Your engineers work full-time in your Slack, your standups, your timezone. We handle hiring, payroll, compliance, and infrastructure. You get output, not overhead.</p>
<a className="text-xs font-medium text-sage mt-3 inline-flex items-center gap-1 hover:underline" href="#">See how it works →</a>
</div>

<div className="p-5 rounded-xl shadow-lg animate-float max-w-sm mx-auto lg:-ml-4 w-full" style={{animationDelay: '2.5s'}}>
<span className="text-xs font-medium text-sage uppercase tracking-wide">Talent Quality</span>
<h3 className="text-base font-semibold text-neutral-900 mt-1 tracking-tight">300 applications. 1 hire.</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">Every engineer passes technical evaluation, background checks, and culture fit assessment. If they don't meet your expectations, we replace them — free, no questions asked.</p>
<a className="text-xs font-medium text-sage mt-3 inline-flex items-center gap-1 hover:underline" href="#">See the vetting process →</a>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-7xl mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">Trusted by</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r from-white to-transparent w-12 lg:w-40 h-full absolute top-0 left-0"></div>
<div className="bg-gradient-to-l from-white to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0"></div>
<div className="flex w-max animate-marquee">
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale">
<div className="text-xl lg:text-2xl font-semibold">Huly</div>
<div className="text-xl lg:text-2xl font-semibold">OptiWise</div>
<div className="text-xl lg:text-2xl font-semibold">Cerulean</div>
<div className="text-xl lg:text-2xl font-semibold">WashIQ</div>
</div>
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale ml-12 lg:ml-24">
<div className="text-xl lg:text-2xl font-semibold">Huly</div>
<div className="text-xl lg:text-2xl font-semibold">OptiWise</div>
<div className="text-xl lg:text-2xl font-semibold">Cerulean</div>
<div className="text-xl lg:text-2xl font-semibold">WashIQ</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">The Runway Math</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                        Same budget. 4× the runway.
                    </h2>
<p className="text-lg text-neutral-500 max-w-2xl mb-10">
                        Hiring offshore isn't just about saving money — it's about buying time. Time to iterate, find product-market fit, and grow without the pressure of a shrinking bank account.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="p-8 bg-neutral-50 border border-neutral-200 rounded-2xl">
<h3 className="text-xl font-semibold text-neutral-900 mb-6">Local Hire</h3>
<div className="space-y-4 text-sm">
<div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">Talent</span><span className="font-medium">1 Senior Engineer</span></div>
<div className="flex justify-between border-b border-neutral-100 pb-3"><span className="text-neutral-500">Annual Cost</span><span className="font-medium">$150,000</span></div>
<div className="flex justify-between"><span className="text-neutral-500">Runway (at $300k budget)</span><span className="font-medium">12 months</span></div>
</div>
</div>
<div className="p-8 bg-sage/10 border border-sage/30 rounded-2xl">
<h3 className="text-xl font-semibold text-neutral-900 mb-6">Offshore — Embedded Talent</h3>
<div className="space-y-4 text-sm">
<div className="flex justify-between border-b border-sage/20 pb-3"><span className="text-neutral-500">Talent</span><span className="font-medium">1 Elite Senior Engineer</span></div>
<div className="flex justify-between border-b border-sage/20 pb-3"><span className="text-neutral-500">Annual Cost</span><span className="font-medium">$36,000</span></div>
<div className="flex justify-between"><span className="text-neutral-500">Runway (same budget)</span><span className="font-semibold text-sage">50 months</span></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">Risk Reversal</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                        We know why offshore hiring fails.<br/><span className="text-neutral-400">That's exactly what we fixed.</span>
</h2>
<p className="text-lg text-neutral-500 max-w-3xl mb-10">
                        Communication gaps. Bad hires. Compliance nightmares. We've seen founders get burned by all of it. So we built a system that removes every single risk — not through promises, but through process.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Trust &amp; Transparency</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Weekly timesheets and direct daily communication. No black boxes. No guessing.</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Hiring Quality</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Top 5% vetted talent — 1 hire per 300 applications. We filter for technical depth, cultural fit, and communication clarity before you ever see a resume.</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Reliability Guarantee</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Background verified. References checked. If performance doesn't meet expectations, we replace your engineer — free, no questions, no waiting.</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:user-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Dedicated Management</h3>
<p className="text-neutral-500 text-sm leading-relaxed">A dedicated Client Success Manager monitors delivery and alignment. No chasing updates. No wondering what's happening.</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:lock-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Compliance &amp; IP Safety</h3>
<p className="text-neutral-500 text-sm leading-relaxed">NDA, IP ownership, and legal protections — locked in from day one. Plus: payroll, local compliance, and infrastructure headaches? All handled by us, not you.</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<div className="w-10 h-10 bg-sage/20 text-sage rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Culture &amp; Professionalism</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Ongoing training on communication and workplace etiquette. Your offshore team acts like your in-house team.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">The Process</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                        You stay in control.<br/><span className="text-neutral-400">We handle everything else.</span>
</h2>
<p className="text-lg text-neutral-500 max-w-3xl mb-10">
                        From sourcing to onboarding to ongoing management — here's exactly what happens, step by step. Most placements happen in 2–3 weeks.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="relative p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<span className="text-3xl font-semibold text-sage/30">01</span>
<h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">Share your requirement</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Tell us the role, the skills, and what you're building. No formal job description needed — a 15-minute conversation works.</p>
</div>
<div className="relative p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<span className="text-3xl font-semibold text-sage/30">02</span>
<h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">We source &amp; screen</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Job advertising, screening, and shortlisting — all handled by us. Shortlisted candidates ready in 0–1 week.</p>
</div>
<div className="relative p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<span className="text-3xl font-semibold text-sage/30">03</span>
<h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">You interview, we vet</h3>
<p className="text-neutral-500 text-sm leading-relaxed">We run technical assessments and background checks in parallel. You only interview candidates who've already cleared our bar — the top 1%.</p>
</div>
<div className="relative p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<span className="text-3xl font-semibold text-sage/30">04</span>
<h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">Onboarding &amp; compliance</h3>
<p className="text-neutral-500 text-sm leading-relaxed">NDA, payroll, infrastructure, compliance — we handle it all. You just add them to Slack and your tools.</p>
</div>
<div className="relative p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<span className="text-3xl font-semibold text-sage/30">05</span>
<h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">They're on your team</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Daily standups, direct communication, overlapping hours. They work like an internal hire — with ongoing support from us, indefinitely.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-neutral-900/30 bg-neutral-900 border-neutral-800">
<div className="opacity-20 absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 p-8 lg:p-16 flex flex-col z-10 relative justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
<span className="text-sage font-mono text-xs uppercase tracking-wider">Proof, Not Promises</span>
</div>
<h2 className="text-3xl lg:text-5xl leading-tight font-medium text-white tracking-tight mb-4">
                                    How an AI-enabled SaaS startup<br/>went from MVP to scale in 6 months
                                </h2>
<p className="text-lg text-sage font-medium mb-4">$105k saved. Zero downtime. 23k+ daily transactions.</p>
<p className="text-base text-neutral-400 max-w-lg mb-8 leading-relaxed">
                                    A founder needed to validate a product, build it, and scale it — fast. Instead of burning through runway on Bay Area salaries, they embedded three Enlighten Schola engineers. In six months, they shipped, scaled, and hit profitability milestones no one expected.
                                </p>
<div className="flex flex-wrap gap-4 text-sm text-neutral-300">
<span className="px-3 py-1 bg-neutral-800 rounded-full">Step 1 — MVP Validation (1.5 mo)</span>
<span className="px-3 py-1 bg-neutral-800 rounded-full">Step 2 — Product Expansion (3.5 mo)</span>
<span className="px-3 py-1 bg-neutral-800 rounded-full">Step 3 — Scale &amp; Stability (1 mo)</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">Our Vetting</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-4">
                        300 applications.<br/><span className="text-neutral-400">1 placed on your team.</span>
</h2>
<p className="text-lg text-neutral-500 max-w-3xl mb-10">
                        Every engineer we place passes a four-layer vetting funnel. You only see candidates who've already cleared technical depth, background checks, and culture fit. No wasted interviews.
                    </p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Initial Screening</span>
<iconify-icon className="text-neutral-300 self-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Technical Assessment</span>
<iconify-icon className="text-neutral-300 self-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Interview (Technical + Culture)</span>
<iconify-icon className="text-neutral-300 self-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Background Verification</span>
<iconify-icon className="text-neutral-300 self-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="px-4 py-2 bg-sage text-white rounded-full text-sm font-medium">Placed on Your Team</span>
</div>
<p className="text-sm text-sage font-medium">Free replacement within 90 days — no questions, no cost.</p>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">Talent Roster</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-10">
                        Every role your startup needs.<br/><span className="text-neutral-400">One partner to fill them.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-4">Engineering &amp; Tech</h3>
<ul className="space-y-2 text-neutral-600 text-sm">
<li>AI Engineer</li>
<li>Senior Full-Stack</li>
<li>Associate Full-Stack</li>
<li>Mobile App Dev</li>
<li>DevOps Engineer</li>
<li>AI Consultant</li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-4">Sales &amp; Marketing</h3>
<ul className="space-y-2 text-neutral-600 text-sm">
<li>SDR</li>
<li>Digital Marketer</li>
<li>Lead Gen Specialist</li>
<li>Social Media Manager</li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-4">Operations &amp; Support</h3>
<ul className="space-y-2 text-neutral-600 text-sm">
<li>Video Editor</li>
<li>Operations Assistant</li>
<li>Graphic Designer</li>
<li>Support Executive</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">Use Cases</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-10">
                        What you can actually build<br/><span className="text-neutral-400">with the right team.</span>
</h2>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">AI Engineer</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Senior Full-Stack Engineer</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">DevOps Engineer</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Mobile App Developer</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">SDR</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Digital Marketer</span>
<span className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium">Operations Assistant</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<p className="text-sm font-medium text-sage uppercase tracking-widest mb-4">What Founders Say</p>
<h2 className="text-3xl lg:text-5xl font-medium text-neutral-900 tracking-tight mb-10">
                        What founders say after<br/><span className="text-neutral-400">hiring offshore</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<p className="text-neutral-700 text-base leading-relaxed mb-4">"They felt like part of our office from day one."</p>
<p className="text-sm font-medium text-neutral-900">— Sajit R., CTO</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<p className="text-neutral-700 text-base leading-relaxed mb-4">"We saved $100k in the first quarter."</p>
<p className="text-sm font-medium text-neutral-900">— Rahul M., Founder</p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
<p className="text-neutral-700 text-base leading-relaxed mb-4">"The vetting process was real."</p>
<p className="text-sm font-medium text-neutral-900">— Deepak N., VP Engineering</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
<h2 className="text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-4">
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">Are the engineers full-time and dedicated only to us?</p>
</div>
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">Who handles sourcing, interviews, and vetting?</p>
</div>
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">Will they feel like part of our internal team?</p>
</div>
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">What are the contract terms?</p>
</div>
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">What do you need from us to get started?</p>
</div>
<div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
<p className="font-medium text-neutral-900">How do you handle timezone differences?</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="p-8 lg:p-20 overflow-hidden text-center bg-sage rounded-[32px] relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-6">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">Let's talk about your team.</h2>
<p className="text-base lg:text-lg text-white/80 max-w-xl mx-auto">Book 30 minutes. We'll walk through your hiring needs, show you how the process works, and give you honest advice on whether offshore hiring makes sense for you right now.</p>
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-neutral-900 text-white hover:bg-neutral-800">
                                Book a Call
                            </button>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-neutral-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<span className="text-xl font-semibold tracking-tight">Enlighten<span className="text-sage">Schola</span></span>
<p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                                    Helping tech startups and software companies build and manage high-performing offshore teams — without the agency overhead.
                                </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400">Company</h3>
<ul className="space-y-3 text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Culture</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400">Resources</h3>
<ul className="space-y-3 text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400">Connect</h3>
<ul className="space-y-3 text-neutral-600">
<li><a className="flex items-center gap-2 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> LinkedIn</a></li>
<li><a className="flex items-center gap-2 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Twitter</a></li>
<li><a className="flex items-center gap-2 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Book a Call</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-neutral-200 text-neutral-400">
<p>© 2026 Enlighten Schola. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-600" href="#">Privacy</a>
<a className="hover:text-neutral-600" href="#">Terms</a>
<a className="hover:text-neutral-600" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>
</main>
</div>

    </>
  );
}
