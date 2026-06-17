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
      

<nav className="sticky top-0 z-50 bg-[#F7F5F0]/80 backdrop-blur-md border-b border-[#E8F0F9]">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-2xl font-semibold tracking-tighter text-[#1A2E4A]" href="/">
                    PONO
                </a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#1A2E4A]/80 hover:text-[#0062B8] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[#1A2E4A]/80 hover:text-[#0062B8] transition-colors" href="#who-we-serve">Who We Serve</a>
<a className="text-sm font-medium text-[#1A2E4A]/80 hover:text-[#0062B8] transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-[#1A2E4A]/80 hover:text-[#0062B8] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-[#1A2E4A]/80 hover:text-[#0062B8] transition-colors" href="#resources">Resources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#0062B8] text-[#F7F5F0] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1A2E4A] transition-all duration-300" href="/book">
                    Book a Discovery Call
                </a>
<button className="lg:hidden p-2 text-[#1A2E4A]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8F0F9] via-[#F7F5F0] to-[#F7F5F0] -z-10 opacity-70 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-6">
                AI-Powered Medical Billing
            </span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1A2E4A] leading-tight mb-8">
                Billing made simple.<br/>Revenue made right.
            </h1>
<p className="text-lg md:text-xl text-[#1A2E4A]/70 leading-relaxed max-w-2xl mx-auto mb-12">
                Pono finds the errors slowing down your cash flow, fixes them faster than legacy billing companies, and shows you exactly what changed. So you can stop chasing claims and get back to your patients.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0062B8] text-[#F7F5F0] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#1A2E4A] transition-all duration-300 shadow-sm shadow-[#0062B8]/20" href="/book">
                    Book a Discovery Call
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#0062B8] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#E8F0F9] transition-colors group" href="/how-it-works">
                    See How It Works
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-[#E8F0F9] bg-[#F7F5F0]/50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<p className="text-center text-xs font-medium tracking-widest text-[#1A2E4A]/50 uppercase mb-8">
                Trusted by growth-stage clinics nationally
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 text-center">

<div className="flex items-center gap-3 text-[#1A2E4A]">
<iconify-icon className="text-2xl text-[#3A6FA5]" icon="solar:bolt-circle-linear"></iconify-icon>
<span className="text-sm"><span className="font-medium text-[#0062B8]">Faster</span> clean-claim turnaround</span>
</div>
<div className="hidden md:block w-px h-8 bg-[#E8F0F9]"></div>
<div className="flex items-center gap-3 text-[#1A2E4A]">
<iconify-icon className="text-2xl text-[#3A6FA5]" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-sm"><span className="font-medium text-[#0062B8]">More</span> denials recovered</span>
</div>
<div className="hidden md:block w-px h-8 bg-[#E8F0F9]"></div>
<div className="flex items-center gap-3 text-[#1A2E4A]">
<iconify-icon className="text-2xl text-[#3A6FA5]" icon="solar:eye-linear"></iconify-icon>
<span className="text-sm"><span className="font-medium text-[#0062B8]">Clearer</span> visibility into every dollar</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="lg:sticky lg:top-32 self-start">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                    What Keeps Clinic Owners Up at Night
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A2E4A] mb-6 leading-tight">
                    You didn't go to medical school to fight insurance companies.
                </h2>
<p className="text-base text-[#1A2E4A]/70 leading-relaxed mb-6">
                    Most clinics lose thousands every month to billing errors they don't even see. Wrong codes turn into denied claims. Denied claims turn into rework. Rework turns into receivables that age out quietly while your team is buried in paperwork.
                </p>
<p className="text-base font-medium text-[#1A2E4A] leading-relaxed">
                    It's not your fault. The system is built to be confusing.
                </p>
</div>
<div className="grid gap-6">
<div className="bg-[#F0EDE8] p-8 rounded-2xl border border-[#E8F0F9]/50 hover:border-[#C8DCF0] transition-colors">
<div className="w-10 h-10 bg-[#E8F0F9] rounded-full flex items-center justify-center mb-4 text-[#0062B8]">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2">Coding Accuracy</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Wrong codes mean denied claims, audits, and liability you didn't sign up for.</p>
</div>
<div className="bg-[#F0EDE8] p-8 rounded-2xl border border-[#E8F0F9]/50 hover:border-[#C8DCF0] transition-colors">
<div className="w-10 h-10 bg-[#E8F0F9] rounded-full flex items-center justify-center mb-4 text-[#0062B8]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2">Clean Claims</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Errors at submission delay revenue by weeks — sometimes months.</p>
</div>
<div className="bg-[#F0EDE8] p-8 rounded-2xl border border-[#E8F0F9]/50 hover:border-[#C8DCF0] transition-colors">
<div className="w-10 h-10 bg-[#E8F0F9] rounded-full flex items-center justify-center mb-4 text-[#0062B8]">
<iconify-icon className="text-xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2">Denials &amp; Rework</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Every cycle of rework drains staff energy you'd rather spend on patients.</p>
</div>
<div className="bg-[#F0EDE8] p-8 rounded-2xl border border-[#E8F0F9]/50 hover:border-[#C8DCF0] transition-colors">
<div className="w-10 h-10 bg-[#E8F0F9] rounded-full flex items-center justify-center mb-4 text-[#0062B8]">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2">AR &amp; Collections</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Aging receivables quietly eat into the cash flow that funds your practice.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#E8F0F9] rounded-[2.5rem] mx-4 md:mx-12 my-12">
<div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                A Smarter Way, Built in 2026
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A2E4A] mb-8 leading-tight">
                We asked a simple question:<br/>is there a better way?
            </h2>
<div className="space-y-6 text-base text-[#1A2E4A]/80 leading-relaxed max-w-2xl mx-auto mb-10">
<p className="font-medium text-[#1A2E4A]">The answer was yes — and it involved AI.</p>
<p>Legacy billing companies are large, slow, and built for hospital networks. Pono was built from the ground up for growth-stage clinics that need a billing partner who actually picks up the phone.</p>
<p>We use AI to find errors faster, fix them more accurately, and explain exactly what changed and why — all while you focus on patients.</p>
</div>
<a className="inline-flex items-center gap-2 text-[#0062B8] font-medium hover:text-[#1A2E4A] transition-colors group" href="/how-it-works">
                See how the process works
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                    What We Do
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A2E4A]">
                    Four pillars. One peace of mind.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="group border border-[#E8F0F9] bg-[#F7F5F0] hover:bg-[#F0EDE8] p-10 rounded-3xl transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#E8F0F9] text-[#0062B8] rounded-full flex items-center justify-center group-hover:bg-[#0062B8] group-hover:text-[#F7F5F0] transition-colors">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A]">Accuracy</h3>
</div>
<p className="text-[#0062B8] font-medium text-sm mb-3">Catch what others miss.</p>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                        Our coding work combines certified human reviewers with AI pattern detection. The result: fewer denials, fewer audits, and a paper trail you can defend.
                    </p>
</div>

<div className="group border border-[#E8F0F9] bg-[#F7F5F0] hover:bg-[#F0EDE8] p-10 rounded-3xl transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#E8F0F9] text-[#0062B8] rounded-full flex items-center justify-center group-hover:bg-[#0062B8] group-hover:text-[#F7F5F0] transition-colors">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A]">Speed</h3>
</div>
<p className="text-[#0062B8] font-medium text-sm mb-3">Cash arrives sooner.</p>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                        From submission to collection, every stage is faster. Cleaner claims go out quicker. Denials get reworked the same week they're flagged.
                    </p>
</div>

<div className="group border border-[#E8F0F9] bg-[#F7F5F0] hover:bg-[#F0EDE8] p-10 rounded-3xl transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#E8F0F9] text-[#0062B8] rounded-full flex items-center justify-center group-hover:bg-[#0062B8] group-hover:text-[#F7F5F0] transition-colors">
<iconify-icon className="text-2xl" icon="solar:display-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A]">Transparency</h3>
</div>
<p className="text-[#0062B8] font-medium text-sm mb-3">You see what we see.</p>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                        Real-time dashboards. Monthly reports written in plain English. Quarterly reviews where we explain trends, not just numbers.
                    </p>
</div>

<div className="group border border-[#E8F0F9] bg-[#F7F5F0] hover:bg-[#F0EDE8] p-10 rounded-3xl transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#E8F0F9] text-[#0062B8] rounded-full flex items-center justify-center group-hover:bg-[#0062B8] group-hover:text-[#F7F5F0] transition-colors">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A]">Growth</h3>
</div>
<p className="text-[#0062B8] font-medium text-sm mb-3">Billing efficiency compounds.</p>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                        Our clients don't just recover lost revenue — they grow into it. Faster cash flow funds more patients, better staff, and a calmer practice.
                    </p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-[#1A2E4A] bg-[#F0EDE8] hover:bg-[#E8F0F9] border border-[#E8F0F9] transition-colors" href="/services">
                    Explore Services
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#E8F0F9]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-16">
<div className="lg:col-span-2">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                    How It Works
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A2E4A] mb-8 leading-tight">
                    Your first win, inside one billing cycle.
                </h2>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-[#1A2E4A] bg-[#F0EDE8] hover:bg-[#E8F0F9] border border-[#E8F0F9] transition-colors" href="/how-it-works">
                    See the Full Process
                </a>
</div>
<div className="lg:col-span-3 relative">
<div className="absolute left-6 top-6 bottom-6 w-px bg-[#E8F0F9]"></div>
<div className="space-y-12">

<div className="relative pl-16">
<div className="absolute left-0 top-0 w-12 h-12 bg-[#F7F5F0] border-2 border-[#0062B8] rounded-full flex items-center justify-center text-[#0062B8] font-medium text-sm z-10">
                            1
                        </div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2 pt-2">Discovery Call</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                            A 15-minute conversation. We listen first. No pitch.
                        </p>
</div>

<div className="relative pl-16">
<div className="absolute left-0 top-0 w-12 h-12 bg-[#F7F5F0] border-2 border-[#E8F0F9] rounded-full flex items-center justify-center text-[#1A2E4A]/50 font-medium text-sm z-10">
                            2
                        </div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2 pt-2">The 90-Day Plan</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                            A clear proposal showing exactly what we'll fix, how, and what to expect.
                        </p>
</div>

<div className="relative pl-16">
<div className="absolute left-0 top-0 w-12 h-12 bg-[#F7F5F0] border-2 border-[#E8F0F9] rounded-full flex items-center justify-center text-[#1A2E4A]/50 font-medium text-sm z-10">
                            3
                        </div>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-2 pt-2">Onboarding &amp; First Win</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">
                            Clean handoff. System connected. Measurable results in your first billing cycle.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#1A2E4A] text-[#F7F5F0]">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<span className="inline-block text-xs font-medium tracking-widest text-[#C8DCF0] uppercase mb-4">
                    Outcomes
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F7F5F0] mb-6 leading-tight">
                    Results clinic owners actually feel.
                </h2>
<p className="text-base text-[#F7F5F0]/80 leading-relaxed mb-10">
                    Our clients describe the change in three words: easier, faster, calmer. Cash flow improves. Denials drop. Staff stops drowning in rework. And most importantly, the practice owner stops thinking about billing.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-[#F7F5F0]/90">
<iconify-icon className="text-xl text-[#0062B8]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm">"Cleaner claims from week one."</span>
</li>
<li className="flex items-center gap-3 text-[#F7F5F0]/90">
<iconify-icon className="text-xl text-[#0062B8]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm">"Denials resolved before they age out."</span>
</li>
<li className="flex items-center gap-3 text-[#F7F5F0]/90">
<iconify-icon className="text-xl text-[#0062B8]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm">"A billing report I can actually understand."</span>
</li>
<li className="flex items-center gap-3 text-[#F7F5F0]/90">
<iconify-icon className="text-xl text-[#0062B8]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm">"I stopped dreading payroll week."</span>
</li>
</ul>
</div>
<div className="bg-[#0062B8]/10 border border-[#0062B8]/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative">
<iconify-icon className="absolute top-8 left-8 text-4xl text-[#3A6FA5]/30" icon="solar:quote-left-linear"></iconify-icon>

<p className="text-lg md:text-xl text-[#F7F5F0] leading-relaxed relative z-10 mb-8 pt-4">
                    "It was easier than I thought. We had Pono's process running in under two weeks, and our denial backlog was clear inside the first month. I haven't worried about billing since."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#C8DCF0] rounded-full"></div>
<div>
<p className="text-sm font-medium text-[#F7F5F0]">[Name]</p>
<p className="text-xs text-[#C8DCF0]">[Title], [Clinic Name]</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="who-we-serve">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="max-w-2xl mb-16">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                    Who We Serve
                </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A2E4A] mb-6">
                    Built for growth-stage clinics.
                </h2>
<p className="text-base text-[#1A2E4A]/70 leading-relaxed">
                    If you're billing $2M–$10M annually and your in-house team is spending more time fixing claims than working with patients, we're built for you.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="p-8 bg-[#F0EDE8] rounded-2xl">
<iconify-icon className="text-3xl text-[#0062B8] mb-6" icon="solar:heart-pulse-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-3">Mental Health Walk-In Clinics</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">High-volume claims, complex coding, and growing demand. We handle the volume so you can scale.</p>
</div>
<div className="p-8 bg-[#F0EDE8] rounded-2xl">
<iconify-icon className="text-3xl text-[#0062B8] mb-6" icon="solar:stethoscope-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-3">Primary Care</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Small teams, big patient loads. We absorb the billing burden your front desk can't.</p>
</div>
<div className="p-8 bg-[#F0EDE8] rounded-2xl">
<iconify-icon className="text-3xl text-[#0062B8] mb-6" icon="solar:dna-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A2E4A] mb-3">Specialty Practices</h3>
<p className="text-sm text-[#1A2E4A]/70 leading-relaxed">Specialty-specific codes, modifiers, and payer rules. We know yours.</p>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-[#1A2E4A] bg-[#F7F5F0] hover:bg-[#E8F0F9] border border-[#E8F0F9] transition-colors shadow-sm" href="/who-we-serve">
                See If We're a Fit
            </a>
</div>
</section>

<section className="py-24 border-t border-[#E8F0F9]" id="resources">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-xl">
<span className="inline-block text-xs font-medium tracking-widest text-[#3A6FA5] uppercase mb-4">
                        Resources
                    </span>
<h2 className="text-3xl font-semibold tracking-tight text-[#1A2E4A]">
                        Plain-English answers to billing's hardest questions.
                    </h2>
</div>
<a className="inline-flex items-center gap-2 text-[#0062B8] font-medium hover:text-[#1A2E4A] transition-colors group shrink-0" href="/resources">
                    Read more from Pono
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<a className="group block border-b md:border-b-0 md:border-r border-[#E8F0F9] pb-8 md:pb-0 md:pr-8 last:border-0" href="#">
<span className="text-xs font-medium text-[#3A6FA5] mb-3 block">CODING</span>
<h3 className="text-lg font-medium text-[#1A2E4A] leading-tight mb-4 group-hover:text-[#0062B8] transition-colors">
                        The Five Coding Errors That Drain More Revenue Than You Realize
                    </h3>
<span className="text-xs text-[#1A2E4A]/50 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        6 min read
                    </span>
</a>

<a className="group block border-b md:border-b-0 md:border-r border-[#E8F0F9] pb-8 md:pb-0 md:pr-8 last:border-0" href="#">
<span className="text-xs font-medium text-[#3A6FA5] mb-3 block">DENIALS</span>
<h3 className="text-lg font-medium text-[#1A2E4A] leading-tight mb-4 group-hover:text-[#0062B8] transition-colors">
                        Why Your Denial Rate Hit a Wall — and How to Break Through It
                    </h3>
<span className="text-xs text-[#1A2E4A]/50 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        5 min read
                    </span>
</a>

<a className="group block pb-8 md:pb-0" href="#">
<span className="text-xs font-medium text-[#3A6FA5] mb-3 block">AR</span>
<h3 className="text-lg font-medium text-[#1A2E4A] leading-tight mb-4 group-hover:text-[#0062B8] transition-colors">
                        Reading Your AR Aging Report (and Knowing What to Do About It)
                    </h3>
<span className="text-xs text-[#1A2E4A]/50 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        7 min read
                    </span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-5xl mx-auto px-6 md:px-12">
<div className="bg-[#1A2E4A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#0062B8] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8DCF0] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F7F5F0] mb-6 leading-tight">
                        Stop fighting your billing.<br/>Start growing your practice.
                    </h2>
<p className="text-base md:text-lg text-[#C8DCF0] mb-10 max-w-xl mx-auto">
                        A 15-minute discovery call. No pitch, no pressure. We listen first.
                    </p>
<a className="inline-flex items-center justify-center bg-[#0062B8] text-[#F7F5F0] px-8 py-4 rounded-full text-base font-medium hover:bg-[#F7F5F0] hover:text-[#1A2E4A] transition-all duration-300 mb-6" href="/book">
                        Book a Discovery Call
                    </a>
<p className="text-xs text-[#F7F5F0]/60 flex items-center justify-center gap-3">
<span>Free</span>
<span className="w-1 h-1 bg-[#F7F5F0]/30 rounded-full"></span>
<span>15 minutes</span>
<span className="w-1 h-1 bg-[#F7F5F0]/30 rounded-full"></span>
<span>No obligation</span>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#F7F5F0] pt-16 pb-8 border-t border-[#E8F0F9]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-[#1A2E4A] block mb-6" href="/">
                        PONO
                    </a>
<p className="text-sm text-[#1A2E4A]/80 mb-4 font-medium">
                        Billing made simple. Revenue made right.
                    </p>
<p className="text-xs text-[#1A2E4A]/60">
                        Built in 2026.<br/>Serving clinics nationally.
                    </p>
</div>

<div>
<h4 className="text-xs font-medium text-[#1A2E4A] uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">Coding Accuracy</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">Clean Claims</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">Denial Management</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">AR &amp; Collections</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-[#1A2E4A] uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">About</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">How It Works</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">Resources</a></li>
<li><a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-[#1A2E4A] uppercase tracking-widest mb-6">Get Started</h4>
<a className="inline-flex items-center justify-center bg-[#0062B8] text-[#F7F5F0] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1A2E4A] transition-all duration-300 mb-6 block w-fit" href="/book">
                        Book a Discovery Call
                    </a>
<div className="flex items-center gap-4">
<a aria-label="LinkedIn" className="text-[#1A2E4A]/50 hover:text-[#0062B8] transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="text-sm text-[#1A2E4A]/70 hover:text-[#0062B8] transition-colors" href="mailto:hello@pono.com">
                            hello@pono.com
                        </a>
</div>
</div>
</div>

<div className="border-t border-[#E8F0F9] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#1A2E4A]/50">
                    © 2026 Pono Medical Billing Solutions
                </p>
<div className="flex items-center gap-6">
<a className="text-xs text-[#1A2E4A]/50 hover:text-[#1A2E4A] transition-colors" href="#">Privacy</a>
<a className="text-xs text-[#1A2E4A]/50 hover:text-[#1A2E4A] transition-colors" href="#">Terms</a>
<a className="text-xs text-[#1A2E4A]/50 hover:text-[#1A2E4A] transition-colors" href="#">HIPAA Notice</a>
</div>
</div>

<div className="mt-8 text-center">
<p className="text-[10px] text-[#1A2E4A]/40 leading-relaxed max-w-4xl mx-auto">
                    Pono MBS does not guarantee specific financial outcomes. All engagements include a HIPAA-compliant Business Associate Agreement.
                </p>
</div>
</div>
</footer>

    </>
  );
}
