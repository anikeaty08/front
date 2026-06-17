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



        document.addEventListener("DOMContentLoaded", () => {
            const reveals = document.querySelectorAll(".reveal");
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = "running";
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            reveals.forEach(reveal => {
                reveal.style.animationPlayState = "paused";
                observer.observe(reveal);
            });
        });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F0]/85 backdrop-blur-md border-b border-[#D9E2EC]/60 transition-all duration-300">
<div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="text-[#0062B8] font-bold text-2xl tracking-tight">pono</span>
<iconify-icon className="text-[#0062B8] text-xl group-hover:animate-float" icon="solar:wave-linear"></iconify-icon>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm text-[#4A5A72] hover:text-[#0062B8] transition-colors duration-300" href="#">Services</a>
<a className="text-sm text-[#4A5A72] hover:text-[#0062B8] transition-colors duration-300" href="#">Who We Serve</a>
<a className="text-sm text-[#4A5A72] hover:text-[#0062B8] transition-colors duration-300" href="#">How It Works</a>
<a className="text-sm text-[#4A5A72] hover:text-[#0062B8] transition-colors duration-300" href="#">About</a>
<a className="text-sm text-[#4A5A72] hover:text-[#0062B8] transition-colors duration-300" href="#">Resources</a>
</nav>

<div className="flex items-center gap-4">
<a className="bg-[#0062B8] text-white font-bold text-sm tracking-[0.02em] rounded-[14px] py-3 px-6 transition duration-300 ease-out hover:bg-[#0052A0]" href="/book">
                    Book a Discovery Call
                </a>
</div>
</div>
</header>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F7F5F0] relative overflow-hidden">

<div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C8DCF0]/20 rounded-full blur-3xl -z-10 animate-float pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

<div className="w-full lg:w-[55%] pt-10">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">
                        AI-Powered Medical Billing
                    </span>
<h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1] mb-6">
                        Billing made simple.<br/>Revenue made right.
                    </h1>
<p className="text-lg md:text-xl font-light text-[#4A5A72] max-w-[50ch] leading-relaxed mb-10">
                        Pono finds the errors slowing down your cash flow, fixes them faster than legacy billing companies, and shows you exactly what changed. So you can stop chasing claims and get back to your patients.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="bg-[#0062B8] text-white font-bold tracking-[0.02em] text-base rounded-[14px] py-4 px-8 transition duration-300 ease-out hover:bg-[#0052A0] shadow-[0_4px_24px_rgba(15,27,45,0.04)]" href="/book">
                            Book a Discovery Call
                        </a>
<a className="group flex items-center gap-2 text-[#0062B8] font-bold tracking-[0.02em] link-underline pb-1" href="/how-it-works">
                            See how it works
                            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="w-full lg:w-[45%] h-[500px] md:h-[650px] relative">
<img alt="Calm clinician smiling warmly in a well-lit medical environment" className="w-full h-full object-cover rounded-[32px] shadow-[0_4px_24px_rgba(15,27,45,0.06)]" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-[#F7F5F0]/[0.04] rounded-[32px] mix-blend-overlay"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#E8F0F9] py-10 border-y border-[#D9E2EC]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col items-center">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-8 text-center block">
                Trusted by growth-stage clinics nationally
            </span>
<div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-12">
<p className="text-base text-[#1A2E4A] whitespace-nowrap"><span className="font-bold">Faster</span> clean-claim turnaround</p>
<div className="hidden md:block w-px h-6 bg-[#3A6FA5]/20"></div>
<p className="text-base text-[#1A2E4A] whitespace-nowrap"><span className="font-bold">More</span> denials recovered</p>
<div className="hidden md:block w-px h-6 bg-[#3A6FA5]/20"></div>
<p className="text-base text-[#1A2E4A] whitespace-nowrap"><span className="font-bold">Clearer</span> visibility into every dollar</p>
</div>

</div>
</section>

<section className="py-24 md:py-32 bg-[#F7F5F0]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="max-w-[800px] mb-20 reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">
                    What keeps clinic owners up at night
                </span>
<h2 className="text-3xl md:text-[56px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1] mb-6">
                    You didn't go to medical school to fight insurance companies.
                </h2>
<p className="text-lg md:text-xl font-light text-[#4A5A72] max-w-[65ch] leading-relaxed">
                    Most clinics lose thousands every month to billing errors they don't even see. Wrong codes turn into denied claims. Denied claims turn into rework. Rework turns into receivables that age out quietly while your team is buried in paperwork.<br/><br/>
                    It's not your fault. The system is built to be confusing.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-x-16 gap-y-16 lg:gap-y-24 reveal" style={{animationDelay: '0.2s'}}>

<div className="flex flex-col items-start pt-6 border-t border-[#D9E2EC]">
<iconify-icon className="text-2xl text-[#0062B8] mb-6" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-xl md:text-[28px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Coding Accuracy</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">Wrong codes mean denied claims, audits, and liability you didn't sign up for.</p>
</div>

<div className="flex flex-col items-start pt-6 border-t border-[#D9E2EC] md:mt-12">
<iconify-icon className="text-2xl text-[#0062B8] mb-6" icon="solar:check-circle-linear"></iconify-icon>
<h3 className="text-xl md:text-[28px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Clean Claims</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">Errors at submission delay revenue by weeks — sometimes months.</p>
</div>

<div className="flex flex-col items-start pt-6 border-t border-[#D9E2EC]">
<iconify-icon className="text-2xl text-[#0062B8] mb-6" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="text-xl md:text-[28px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Denials &amp; Rework</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">Every cycle of rework drains staff energy you'd rather spend on patients.</p>
</div>

<div className="flex flex-col items-start pt-6 border-t border-[#D9E2EC] md:mt-12">
<iconify-icon className="text-2xl text-[#0062B8] mb-6" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-xl md:text-[28px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">AR &amp; Collections</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">Aging receivables quietly eat into the cash flow that funds your practice.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#1A2E4A] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0062B8]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[720px] mx-auto px-6 text-center relative z-10 reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#C8DCF0] mb-6 block">
                A Smarter Way, Built in 2026
            </span>
<h2 className="text-3xl md:text-[56px] font-bold tracking-[-0.01em] text-white leading-[1.1] mb-8">
                We asked a simple question:<br/>is there a better way?
            </h2>
<p className="text-lg md:text-xl font-light text-[#C8DCF0] leading-relaxed mb-10">
                The answer was yes — and it involved AI. Legacy billing companies are large, slow, and built for hospital networks. Pono was built from the ground up for growth-stage clinics that need a billing partner who actually picks up the phone.<br/><br/>
                We use AI to find errors faster, fix them more accurately, and explain exactly what changed and why — all while you focus on patients.
            </p>
<a className="group inline-flex items-center gap-2 text-white font-bold tracking-[0.02em] link-underline pb-1" href="/how-it-works">
                See how the process works
                <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F7F5F0]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="mb-20 text-center reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">What We Do</span>
<h2 className="text-3xl md:text-[56px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1]">
                    Four pillars. One peace of mind.
                </h2>
</div>
<div className="flex flex-col gap-20 md:gap-32">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2">
<div className="w-full h-[400px] bg-[#E8F0F9] rounded-[24px] flex items-center justify-center p-12">
<iconify-icon className="text-[#3A6FA5] text-[80px] opacity-80" icon="solar:target-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/2">
<h3 className="text-2xl md:text-[32px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Accuracy</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
<span className="font-bold text-[#1A2E4A]">Catch what others miss.</span> Our coding work combines certified human reviewers with AI pattern detection. The result: fewer denials, fewer audits, and a paper trail you can defend.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2">
<div className="w-full h-[400px] bg-[#F0EDE8] rounded-[24px] flex items-center justify-center p-12">
<iconify-icon className="text-[#3A6FA5] text-[80px] opacity-80" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/2">
<h3 className="text-2xl md:text-[32px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Speed</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
<span className="font-bold text-[#1A2E4A]">Cash arrives sooner.</span> From submission to collection, every stage is faster. Cleaner claims go out quicker. Denials get reworked the same week they're flagged.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2">
<div className="w-full h-[400px] bg-[#E8F0F9] rounded-[24px] flex items-center justify-center p-12">
<iconify-icon className="text-[#3A6FA5] text-[80px] opacity-80" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/2">
<h3 className="text-2xl md:text-[32px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Transparency</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
<span className="font-bold text-[#1A2E4A]">You see what we see.</span> Real-time dashboards. Monthly reports written in plain English. Quarterly reviews where we explain trends, not just numbers.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2">
<div className="w-full h-[400px] bg-[#F0EDE8] rounded-[24px] flex items-center justify-center p-12">
<iconify-icon className="text-[#3A6FA5] text-[80px] opacity-80" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/2">
<h3 className="text-2xl md:text-[32px] font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Growth</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
<span className="font-bold text-[#1A2E4A]">Billing efficiency compounds.</span> Our clients don't just recover lost revenue — they grow into it. Faster cash flow funds more patients, better staff, and a calmer practice.
                        </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 border-[1.5px] border-[#0062B8] text-[#0062B8] font-bold tracking-[0.02em] rounded-[14px] py-4 px-8 transition duration-300 ease-out hover:bg-[#E8F0F9]" href="/services">
                    Explore Services
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#E8F0F9]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="mb-20 reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">How It Works</span>
<h2 className="text-3xl md:text-[56px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1]">
                    Your first win, inside one billing cycle.
                </h2>
</div>
<div className="relative reveal">

<div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#3A6FA5]/30 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

<div className="relative bg-[#E8F0F9]">
<span className="text-[#0062B8] font-bold text-sm tracking-widest mb-6 block bg-[#E8F0F9] inline-block pr-4">01</span>
<h3 className="text-xl md:text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Discovery Call</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">
                            A 15-minute conversation. We listen first. No pitch.
                        </p>
</div>

<div className="relative bg-[#E8F0F9]">
<span className="text-[#0062B8] font-bold text-sm tracking-widest mb-6 block bg-[#E8F0F9] inline-block pr-4">02</span>
<h3 className="text-xl md:text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">The 90-Day Plan</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">
                            A clear proposal showing exactly what we'll fix, how, and what to expect.
                        </p>
</div>

<div className="relative bg-[#E8F0F9]">
<span className="text-[#0062B8] font-bold text-sm tracking-widest mb-6 block bg-[#E8F0F9] inline-block pr-4">03</span>
<h3 className="text-xl md:text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-4">Onboarding &amp; First Win</h3>
<p className="text-base text-[#4A5A72] font-light leading-relaxed">
                            Clean handoff. System connected. Measurable results in your first billing cycle.
                        </p>
</div>
</div>
</div>
<div className="mt-16 reveal">
<a className="group inline-flex items-center gap-2 text-[#0062B8] font-bold tracking-[0.02em] link-underline pb-1" href="/how-it-works">
                    See the Full Process
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F7F5F0]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-[45%] reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">Outcomes</span>
<h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1] mb-6">
                        Results clinic owners actually feel.
                    </h2>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed mb-10 max-w-[50ch]">
                        Our clients describe the change in three words: easier, faster, calmer. Cash flow improves. Denials drop. Staff stops drowning in rework. And most importantly, the practice owner stops thinking about billing.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#0062B8] text-xl mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#0F1B2D] font-light">Cleaner claims from week one.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#0062B8] text-xl mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#0F1B2D] font-light">Denials resolved before they age out.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#0062B8] text-xl mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#0F1B2D] font-light">A billing report I can actually understand.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#0062B8] text-xl mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-[#0F1B2D] font-light">I stopped dreading payroll week.</span>
</li>
</ul>
</div>

<div className="w-full lg:w-[55%] reveal" style={{animationDelay: '0.2s'}}>
<div className="bg-[#C8DCF0] rounded-[24px] p-10 md:p-14 relative shadow-[0_4px_24px_rgba(15,27,45,0.02)] h-full flex flex-col justify-between">
<span className="font-serif-quote text-[#0062B8] text-[80px] md:text-[100px] leading-none absolute -top-2 left-6 md:left-10 opacity-30 select-none">"</span>
<p className="text-xl md:text-[22px] text-[#1A2E4A] font-light leading-relaxed relative z-10 italic mb-10">
                            "It was easier than I thought. We had Pono's process running in under two weeks, and our denial backlog was clear inside the first month. I haven't worried about billing since."
                        </p>
<div className="flex items-center gap-4 relative z-10">

<div className="w-12 h-12 rounded-full bg-[#F0EDE8] flex items-center justify-center text-[#1A2E4A] font-bold text-sm tracking-tight">
                                MR
                            </div>
<div>
<p className="text-base text-[#1A2E4A] font-bold">Dr. Michael Reed</p>
<p className="text-sm text-[#4A5A72] font-light">Clinic Director, Primary Care</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#E8F0F9]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

<div className="lg:sticky lg:top-32 reveal">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">Who We Serve</span>
<h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1] mb-6">
                        Built for growth-stage clinics.
                    </h2>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed mb-10">
                        If you're billing $2M–$10M annually and your in-house team is spending more time fixing claims than working with patients, we're built for you.
                    </p>
<a className="group inline-flex items-center gap-2 border-[1.5px] border-[#0062B8] text-[#0062B8] font-bold tracking-[0.02em] rounded-[14px] py-4 px-8 transition duration-300 ease-out hover:bg-[#F7F5F0]" href="/who-we-serve">
                        See If We're a Fit
                    </a>
</div>

<div className="flex flex-col reveal" style={{animationDelay: '0.2s'}}>

<div className="pb-10 border-b border-[#D9E2EC]">
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Mental Health Walk-In Clinics</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
                            High-volume claims, complex coding, and growing demand. We handle the volume so you can scale.
                        </p>
</div>

<div className="py-10 border-b border-[#D9E2EC]">
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Primary Care</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
                            Small teams, big patient loads. We absorb the billing burden your front desk can't.
                        </p>
</div>

<div className="pt-10">
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-3">Specialty Practices</h3>
<p className="text-lg text-[#4A5A72] font-light leading-relaxed">
                            Specialty-specific codes, modifiers, and payer rules. We know yours.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F7F5F0]">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
<div className="max-w-[600px]">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6 block">Resources</span>
<h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.01em] text-[#1A2E4A] leading-[1.1]">
                        Plain-English answers to billing's hardest questions.
                    </h2>
</div>
<a className="group hidden md:inline-flex items-center gap-2 text-[#0062B8] font-bold tracking-[0.02em] link-underline pb-1 whitespace-nowrap" href="/resources">
                    Read more from Pono
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 reveal" style={{animationDelay: '0.1s'}}>

<a className="group block border-t border-[#D9E2EC] pt-6" href="#">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-4 block">Coding</span>
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-6 group-hover:text-[#0062B8] transition-colors duration-300">
                        The Five Coding Errors That Drain More Revenue Than You Realize
                    </h3>
<p className="text-sm text-[#4A5A72] font-light">6 min read</p>
</a>

<a className="group block border-t border-[#D9E2EC] pt-6 md:mt-0" href="#">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-4 block">Denials</span>
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-6 group-hover:text-[#0062B8] transition-colors duration-300">
                        Why Your Denial Rate Hit a Wall — and How to Break Through It
                    </h3>
<p className="text-sm text-[#4A5A72] font-light">5 min read</p>
</a>

<a className="group block border-t border-[#D9E2EC] pt-6 md:mt-0" href="#">
<span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-4 block">AR</span>
<h3 className="text-2xl font-bold tracking-[-0.01em] text-[#1A2E4A] mb-6 group-hover:text-[#0062B8] transition-colors duration-300">
                        Reading Your AR Aging Report (and Knowing What to Do About It)
                    </h3>
<p className="text-sm text-[#4A5A72] font-light">7 min read</p>
</a>
</div>
<div className="mt-10 md:hidden reveal">
<a className="group inline-flex items-center gap-2 text-[#0062B8] font-bold tracking-[0.02em] link-underline pb-1" href="/resources">
                    Read more from Pono
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0062B8] text-center">
<div className="max-w-[800px] mx-auto px-6 md:px-10 reveal">
<h2 className="text-4xl md:text-6xl font-bold tracking-[-0.01em] text-white leading-[1.1] mb-6">
                Stop fighting your billing.<br/>Start growing your practice.
            </h2>
<p className="text-lg md:text-xl font-light text-white/80 max-w-[50ch] mx-auto mb-10 leading-relaxed">
                A 15-minute discovery call. No pitch, no pressure. We listen first.
            </p>
<a className="inline-block bg-white text-[#1A2E4A] font-bold tracking-[0.02em] rounded-[14px] py-4 px-8 transition duration-300 ease-out hover:bg-[#F0EDE8] shadow-[0_4px_24px_rgba(15,27,45,0.08)] mb-6" href="/book">
                Book a Discovery Call
            </a>
<p className="text-sm text-white/60 font-light flex items-center justify-center gap-2">
                Free <span className="w-1 h-1 rounded-full bg-white/40"></span> 15 minutes <span className="w-1 h-1 rounded-full bg-white/40"></span> No obligation
            </p>
</div>
</section>

<footer className="bg-[#1A2E4A] text-[#C8DCF0] pt-20 pb-10">
<div className="max-w-[1280px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="lg:pr-8">
<a className="flex items-center gap-1 mb-6 group inline-flex" href="#">
<span className="text-white font-bold text-2xl tracking-tight">pono</span>
<iconify-icon className="text-white text-xl" icon="solar:wave-linear"></iconify-icon>
</a>
<p className="text-lg text-white font-light mb-4">
                        Billing made simple. Revenue made right.
                    </p>
<p className="text-sm font-light opacity-80">
                        Built in 2026. Serving clinics nationally.
                    </p>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Coding Accuracy</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Clean Claims</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Denial Management</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">AR &amp; Collections</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">About</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">How It Works</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Resources</a></li>
<li><a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-[0.08em] text-[#0062B8] mb-6">Connect</h4>
<div className="flex flex-col items-start gap-4">
<a className="bg-[#0062B8] text-white font-bold tracking-[0.02em] text-sm rounded-[14px] py-3 px-6 transition duration-300 ease-out hover:bg-[#0052A0]" href="/book">
                            Book a Discovery Call
                        </a>
<div className="flex items-center gap-4 mt-2">
<a className="text-[#C8DCF0] hover:text-white transition-colors duration-300" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
<a className="text-sm font-light hover:text-white transition-colors duration-300 mt-2" href="mailto:hello@pono.com">hello@pono.com</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-[#3A6FA5]/40 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-light opacity-80">
                    © 2026 Pono Medical Billing Solutions
                </p>
<div className="flex items-center gap-6">
<a className="text-xs font-light opacity-80 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs font-light opacity-80 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs font-light opacity-80 hover:text-white transition-colors" href="#">HIPAA Notice</a>
</div>
</div>

<div className="mt-8 text-center md:text-left">
<p className="text-[11px] font-light opacity-60 max-w-[800px]">
                    Pono MBS does not guarantee specific financial outcomes. All engagements include a HIPAA-compliant Business Associate Agreement.
                </p>
</div>
</div>
</footer>



    </>
  );
}
