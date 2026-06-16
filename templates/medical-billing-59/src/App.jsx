import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Sticky Navigation Shadow & Border
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-[0_4px_16px_rgba(15,27,45,0.05)]', 'border-b', 'border-[#D9E2EC]');
            } else {
                nav.classList.remove('shadow-[0_4px_16px_rgba(15,27,45,0.05)]', 'border-b', 'border-[#D9E2EC]');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        function toggleMenu() {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Scroll Reveal Animation using Intersection Observer
        document.addEventListener("DOMContentLoaded", () => {
            const reveals = document.querySelectorAll(".reveal");
            
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => {
                revealObserver.observe(reveal);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-200 bg-[#F7F5F0]" id="main-nav">
<div className="max-w-[1240px] mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
<a aria-label="Pono Home" className="font-semibold text-xl tracking-tight text-[#0062B8]" href="#">pono</a>
<nav className="hidden md:flex gap-8 items-center">
<a className="font-semibold text-sm text-[#0F1B2D] hover:text-[#0062B8] transition-colors" href="#services">Services</a>
<a className="font-semibold text-sm text-[#0F1B2D] hover:text-[#0062B8] transition-colors" href="#who-we-serve">Who We Serve</a>
<a className="font-semibold text-sm text-[#0F1B2D] hover:text-[#0062B8] transition-colors" href="#how-it-works">How It Works</a>
<a className="font-semibold text-sm text-[#0F1B2D] hover:text-[#0062B8] transition-colors" href="#about">About</a>
<a className="font-semibold text-sm text-[#0F1B2D] hover:text-[#0062B8] transition-colors" href="#resources">Resources</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#0062B8] hover:bg-[#0052A0] text-white font-semibold text-sm md:text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em]" href="#cta">
                    Book a Discovery Call
                </a>
<button aria-label="Toggle menu" className="md:hidden text-[#1A2E4A] p-2" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 bg-[#F7F5F0] z-40 transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-5" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center mb-8">
<a className="font-semibold text-lg text-[#0F1B2D] mobile-link" href="#services">Services</a>
<a className="font-semibold text-lg text-[#0F1B2D] mobile-link" href="#who-we-serve">Who We Serve</a>
<a className="font-semibold text-lg text-[#0F1B2D] mobile-link" href="#how-it-works">How It Works</a>
<a className="font-semibold text-lg text-[#0F1B2D] mobile-link" href="#about">About</a>
<a className="font-semibold text-lg text-[#0F1B2D] mobile-link" href="#resources">Resources</a>
</nav>
<a className="inline-flex w-full items-center justify-center bg-[#0062B8] text-white font-semibold text-base px-7 py-4 rounded-xl mobile-link" href="#cta">
            Book a Discovery Call
        </a>
</div>
<main className="pt-16 md:pt-20">

<section className="bg-[#F7F5F0] py-16 md:pt-32 md:pb-24 px-5 md:px-8 max-w-[1240px] mx-auto overflow-hidden" id="hero">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-[60%] flex flex-col items-start z-10">
<span className="font-semibold text-xs text-[#0062B8] tracking-[0.08em] uppercase mb-4 md:mb-6">AI-Powered Medical Billing</span>
<h1 className="font-semibold text-4xl md:text-6xl text-[#1A2E4A] tracking-tight leading-[1.1] mb-6">
                        Billing made simple.<br/>Revenue made right.
                    </h1>
<p className="font-light text-lg md:text-xl text-[#4A5A72] max-w-[560px] leading-relaxed mb-8 md:mb-10">
                        Pono finds the errors slowing down your cash flow, fixes them faster than legacy billing companies, and shows you exactly what changed. So you can stop chasing claims and get back to your patients.
                    </p>
<div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
<a className="inline-flex items-center justify-center bg-[#0062B8] hover:bg-[#0052A0] text-white font-semibold text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em] text-center w-full sm:w-auto shadow-sm" href="#cta">
                            Book a Discovery Call
                        </a>
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#0062B8] text-[#0062B8] hover:bg-[#E8F0F9] font-semibold text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em] text-center w-full sm:w-auto" href="#how-it-works">
                            See How It Works
                        </a>
</div>
</div>
<div className="w-full md:w-[40%] relative mt-8 md:mt-0">

<div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_4px_16px_rgba(15,27,45,0.08)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.10)] transition-shadow duration-300 bg-[#E8F0F9]">
<div className="absolute inset-0 bg-[#0062B8]/[0.08] z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Smiling clinical staff member at front desk" className="w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-[#E8F0F9] py-12 px-5 md:px-8 border-y border-[#D9E2EC]">
<div className="max-w-[1240px] mx-auto text-center flex flex-col items-center">
<span className="font-semibold text-xs text-[#0062B8] tracking-[0.08em] uppercase mb-8">Trusted by growth-stage clinics nationally</span>

<div className="flex flex-col md:flex-row w-full max-w-4xl justify-between items-center gap-8 md:gap-0">
<div className="flex flex-col items-center reveal">
<span className="font-semibold text-2xl tracking-tight text-[#0062B8] mb-1">Faster</span>
<span className="font-light text-sm text-[#4A5A72]">clean-claim turnaround</span>
</div>
<div className="hidden md:block w-px h-12 bg-[#D9E2EC]"></div>
<div className="flex flex-col items-center reveal" style={{transitionDelay: '100ms'}}>
<span className="font-semibold text-2xl tracking-tight text-[#0062B8] mb-1">More</span>
<span className="font-light text-sm text-[#4A5A72]">denials recovered</span>
</div>
<div className="hidden md:block w-px h-12 bg-[#D9E2EC]"></div>
<div className="flex flex-col items-center reveal" style={{transitionDelay: '200ms'}}>
<span className="font-semibold text-2xl tracking-tight text-[#0062B8] mb-1">Clearer</span>
<span className="font-light text-sm text-[#4A5A72]">visibility into every dollar</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F5F0] py-20 md:py-32 px-5 md:px-8" id="problem">
<div className="max-w-[1240px] mx-auto">
<div className="text-center mb-16 flex flex-col items-center reveal">
<span className="font-semibold text-xs text-[#0062B8] tracking-[0.08em] uppercase mb-4">What keeps clinic owners up at night</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight mb-6 max-w-[720px]">
                        You didn't go to medical school to fight insurance companies.
                    </h2>
<p className="font-light text-lg md:text-xl text-[#4A5A72] max-w-[720px] leading-relaxed">
                        Most clinics lose thousands every month to billing errors they don't even see. Wrong codes turn into denied claims. Denied claims turn into rework. Rework turns into receivables that age out quietly while your team is buried in paperwork.<br/><br/>It's not your fault. The system is built to be confusing.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">

<div className="bg-[#F0EDE8] border border-[#D9E2EC] p-8 rounded-[20px] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:code-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Coding Accuracy</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Wrong codes mean denied claims, audits, and liability you didn't sign up for.</p>
</div>

<div className="bg-[#F0EDE8] border border-[#D9E2EC] p-8 rounded-[20px] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:document-text-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Clean Claims</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Errors at submission delay revenue by weeks — sometimes months.</p>
</div>

<div className="bg-[#F0EDE8] border border-[#D9E2EC] p-8 rounded-[20px] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Denials &amp; Rework</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Every cycle of rework drains staff energy you'd rather spend on patients.</p>
</div>

<div className="bg-[#F0EDE8] border border-[#D9E2EC] p-8 rounded-[20px] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:graph-down-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">AR &amp; Collections</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Aging receivables quietly eat into the cash flow that funds your practice.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1A2E4A] py-24 md:py-32 px-5 md:px-8" id="about">
<div className="max-w-[820px] mx-auto text-center flex flex-col items-center reveal">
<span className="font-semibold text-xs text-[#0062B8] tracking-[0.08em] uppercase mb-6">A smarter way, built in 2026</span>
<h2 className="font-semibold text-3xl md:text-5xl text-white tracking-tight mb-8">
                    We asked a simple question: is there a better way?
                </h2>
<div className="font-light text-lg md:text-xl text-[#C8DCF0] leading-relaxed space-y-6 mb-12">
<p>The answer was yes — and it involved AI.</p>
<p>Legacy billing companies are large, slow, and built for hospital networks. Pono was built from the ground up for growth-stage clinics that need a billing partner who actually picks up the phone.</p>
<p>We use AI to find errors faster, fix them more accurately, and explain exactly what changed and why — all while you focus on patients.</p>
</div>
<a className="font-semibold text-base text-white link-underline pb-1 flex items-center gap-2" href="#how-it-works">
                    See how the process works <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="bg-[#F7F5F0] py-20 md:py-32 px-5 md:px-8" id="services">
<div className="max-w-[1240px] mx-auto">
<div className="text-center mb-16 reveal">
<span className="font-semibold text-xs text-[#4A5A72] tracking-[0.08em] uppercase mb-4 block">What we do</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight">
                        Four pillars. One peace of mind.
                    </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">

<div className="bg-[#F0EDE8] p-8 rounded-[20px] border-t-4 border-[#0062B8] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<h3 className="font-semibold text-2xl tracking-tight text-[#1A2E4A] mb-1">Accuracy</h3>
<p className="font-semibold text-base text-[#0062B8] mb-4">Catch what others miss.</p>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Our coding work combines certified human reviewers with AI pattern detection. The result: fewer denials, fewer audits, and a paper trail you can defend.</p>
</div>

<div className="bg-[#F0EDE8] p-8 rounded-[20px] border-t-4 border-[#0062B8] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<h3 className="font-semibold text-2xl tracking-tight text-[#1A2E4A] mb-1">Speed</h3>
<p className="font-semibold text-base text-[#0062B8] mb-4">Cash arrives sooner.</p>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">From submission to collection, every stage is faster. Cleaner claims go out quicker. Denials get reworked the same week they're flagged.</p>
</div>

<div className="bg-[#F0EDE8] p-8 rounded-[20px] border-t-4 border-[#0062B8] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<h3 className="font-semibold text-2xl tracking-tight text-[#1A2E4A] mb-1">Transparency</h3>
<p className="font-semibold text-base text-[#0062B8] mb-4">You see what we see.</p>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Real-time dashboards. Monthly reports written in plain English. Quarterly reviews where we explain trends, not just numbers.</p>
</div>

<div className="bg-[#F0EDE8] p-8 rounded-[20px] border-t-4 border-[#0062B8] shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<h3 className="font-semibold text-2xl tracking-tight text-[#1A2E4A] mb-1">Growth</h3>
<p className="font-semibold text-base text-[#0062B8] mb-4">Billing efficiency compounds.</p>
<p className="font-light text-base text-[#4A5A72] leading-relaxed">Our clients don't just recover lost revenue — they grow into it. Faster cash flow funds more patients, better staff, and a calmer practice.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#0062B8] text-[#0062B8] hover:bg-[#E8F0F9] font-semibold text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em]" href="#services">
                        Explore Services
                    </a>
</div>
</div>
</section>

<section className="bg-[#E8F0F9] py-20 md:py-32 px-5 md:px-8" id="how-it-works">
<div className="max-w-[1240px] mx-auto">
<div className="text-center mb-16 md:mb-24 reveal">
<span className="font-semibold text-xs text-[#4A5A72] tracking-[0.08em] uppercase mb-4 block">How it works</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight">
                        Your first win, inside one billing cycle.
                    </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 reveal">

<div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-px bg-[#0062B8]/30"></div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center z-10">
<span className="font-semibold text-5xl md:text-6xl text-[#0062B8] mb-4 md:mb-6 bg-[#E8F0F9] md:px-4">01</span>
<h3 className="font-semibold text-xl md:text-2xl tracking-tight text-[#1A2E4A] mb-3">Discovery Call</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed max-w-[320px]">A 15-minute conversation. We listen first. No pitch.</p>
</div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center z-10">
<span className="font-semibold text-5xl md:text-6xl text-[#0062B8] mb-4 md:mb-6 bg-[#E8F0F9] md:px-4">02</span>
<h3 className="font-semibold text-xl md:text-2xl tracking-tight text-[#1A2E4A] mb-3">The 90-Day Plan</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed max-w-[320px]">A clear proposal showing exactly what we'll fix, how, and what to expect.</p>
</div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center z-10">
<span className="font-semibold text-5xl md:text-6xl text-[#0062B8] mb-4 md:mb-6 bg-[#E8F0F9] md:px-4">03</span>
<h3 className="font-semibold text-xl md:text-2xl tracking-tight text-[#1A2E4A] mb-3">Onboarding &amp; First Win</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed max-w-[320px]">Clean handoff. System connected. Measurable results in your first billing cycle.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#0062B8] text-[#0062B8] hover:bg-white font-semibold text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em]" href="#how-it-works">
                        See the Full Process
                    </a>
</div>
</div>
</section>

<section className="bg-[#F7F5F0] py-20 md:py-32 px-5 md:px-8" id="proof">
<div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 reveal">
<span className="font-semibold text-xs text-[#4A5A72] tracking-[0.08em] uppercase mb-4 block">Outcomes</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight mb-6">
                        Results clinic owners actually feel.
                    </h2>
<p className="font-light text-lg text-[#4A5A72] leading-relaxed mb-8">
                        Our clients describe the change in three words: easier, faster, calmer. Cash flow improves. Denials drop. Staff stops drowning in rework. And most importantly, the practice owner stops thinking about billing.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0062B8] mt-1 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-light text-base text-[#0F1B2D]">Cleaner claims from week one.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0062B8] mt-1 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-light text-base text-[#0F1B2D]">Denials resolved before they age out.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0062B8] mt-1 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-light text-base text-[#0F1B2D]">A billing report I can actually understand.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0062B8] mt-1 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-light text-base text-[#0F1B2D]">I stopped dreading payroll week.</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 reveal" style={{transitionDelay: '150ms'}}>

<div className="bg-[#C8DCF0] p-10 md:p-12 rounded-[20px] shadow-[0_4px_16px_rgba(15,27,45,0.05)]">
<iconify-icon className="text-[#0062B8] mb-6 block" height="48" icon="solar:quote-left-linear" strokeWidth="1.5" width="48"></iconify-icon>
<blockquote className="font-light text-lg md:text-xl text-[#1A2E4A] leading-relaxed mb-8">
                            "It was easier than I thought. We had Pono's process running in under two weeks, and our denial backlog was clear inside the first month. I haven't worried about billing since."
                        </blockquote>
<div className="font-light text-sm text-[#4A5A72]">
<span className="font-semibold text-[#1A2E4A]">Sarah J.</span>, Clinical Director<br/>
                            Midwest Behavioral Health
                        </div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F5F0] py-20 md:py-32 px-5 md:px-8 border-t border-[#D9E2EC]/50" id="who-we-serve">
<div className="max-w-[1240px] mx-auto">
<div className="text-center mb-16 flex flex-col items-center reveal">
<span className="font-semibold text-xs text-[#4A5A72] tracking-[0.08em] uppercase mb-4">Who we serve</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight mb-6">
                        Built for growth-stage clinics.
                    </h2>
<p className="font-light text-lg md:text-xl text-[#4A5A72] max-w-[720px] leading-relaxed">
                        If you're billing $2M–$10M annually and your in-house team is spending more time fixing claims than working with patients, we're built for you.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 reveal">

<div className="bg-[#F0EDE8] p-8 rounded-[20px] flex flex-col h-full shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:heart-angle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Mental Health</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed mb-8 flex-grow">High-volume claims, complex coding, and growing demand. We handle the volume so you can scale.</p>
<a className="font-semibold text-sm text-[#0062B8] link-underline self-start" href="#who-we-serve">Learn more →</a>
</div>

<div className="bg-[#F0EDE8] p-8 rounded-[20px] flex flex-col h-full shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:stethoscope-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Primary Care</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed mb-8 flex-grow">Small teams, big patient loads. We absorb the billing burden your front desk can't.</p>
<a className="font-semibold text-sm text-[#0062B8] link-underline self-start" href="#who-we-serve">Learn more →</a>
</div>

<div className="bg-[#F0EDE8] p-8 rounded-[20px] flex flex-col h-full shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200">
<iconify-icon className="text-[#0062B8] mb-6" height="32" icon="solar:test-tube-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-semibold text-xl tracking-tight text-[#1A2E4A] mb-3">Specialty Practices</h3>
<p className="font-light text-base text-[#4A5A72] leading-relaxed mb-8 flex-grow">Specialty-specific codes, modifiers, and payer rules. We know yours.</p>
<a className="font-semibold text-sm text-[#0062B8] link-underline self-start" href="#who-we-serve">Learn more →</a>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#0062B8] text-[#0062B8] hover:bg-[#E8F0F9] font-semibold text-base px-7 py-4 rounded-xl transition-colors tracking-[0.02em]" href="#who-we-serve">
                        See If We're a Fit
                    </a>
</div>
</div>
</section>

<section className="bg-[#E8F0F9] py-20 md:py-32 px-5 md:px-8" id="resources">
<div className="max-w-[1240px] mx-auto">
<div className="text-center mb-16 reveal">
<span className="font-semibold text-xs text-[#4A5A72] tracking-[0.08em] uppercase mb-4 block">Resources</span>
<h2 className="font-semibold text-3xl md:text-5xl text-[#1A2E4A] tracking-tight">
                        Plain-English answers to billing's hardest questions.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">

<a className="group bg-[#F0EDE8] rounded-[20px] overflow-hidden flex flex-col shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200" href="#resources">
<div className="w-full aspect-[16/9] bg-[#C8DCF0] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0062B8]/20 to-[#0062B8]/0 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="inline-block bg-[#0062B8]/10 text-[#0062B8] font-semibold text-[10px] tracking-[0.08em] uppercase px-2 py-1 rounded mb-4 self-start">Coding</span>
<h3 className="font-semibold text-lg tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">The Five Coding Errors That Drain More Revenue Than You Realize</h3>
<div className="mt-auto pt-4 flex items-center justify-between text-xs font-light text-[#7A8699]">
<span>6 min read</span>
</div>
</div>
</a>

<a className="group bg-[#F0EDE8] rounded-[20px] overflow-hidden flex flex-col shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200" href="#resources">
<div className="w-full aspect-[16/9] bg-[#C8DCF0] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#3A6FA5]/20 to-[#0062B8]/0 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="inline-block bg-[#0062B8]/10 text-[#0062B8] font-semibold text-[10px] tracking-[0.08em] uppercase px-2 py-1 rounded mb-4 self-start">Denials</span>
<h3 className="font-semibold text-lg tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">Why Your Denial Rate Hit a Wall — and How to Break Through It</h3>
<div className="mt-auto pt-4 flex items-center justify-between text-xs font-light text-[#7A8699]">
<span>5 min read</span>
</div>
</div>
</a>

<a className="group bg-[#F0EDE8] rounded-[20px] overflow-hidden flex flex-col shadow-[0_4px_16px_rgba(15,27,45,0.03)] hover:shadow-[0_12px_32px_rgba(15,27,45,0.08)] hover:-translate-y-1 transition-all duration-200" href="#resources">
<div className="w-full aspect-[16/9] bg-[#C8DCF0] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#1A2E4A]/10 to-[#0062B8]/10 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="inline-block bg-[#0062B8]/10 text-[#0062B8] font-semibold text-[10px] tracking-[0.08em] uppercase px-2 py-1 rounded mb-4 self-start">AR</span>
<h3 className="font-semibold text-lg tracking-tight text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">Reading Your AR Aging Report (and Knowing What to Do About It)</h3>
<div className="mt-auto pt-4 flex items-center justify-between text-xs font-light text-[#7A8699]">
<span>7 min read</span>
</div>
</div>
</a>
</div>
<div className="text-center reveal">
<a className="font-semibold text-base text-[#1A2E4A] hover:text-[#0062B8] link-underline pb-1 inline-flex items-center gap-2 transition-colors" href="#resources">
                        Read more from Pono <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#0062B8] py-24 md:py-32 px-5 md:px-8" id="cta">
<div className="max-w-[820px] mx-auto text-center flex flex-col items-center reveal">
<h2 className="font-semibold text-3xl md:text-5xl text-white tracking-tight mb-6">
                    Stop fighting your billing.<br/>Start growing your practice.
                </h2>
<p className="font-light text-lg md:text-xl text-white/90 max-w-[600px] leading-relaxed mb-10">
                    A 15-minute discovery call. No pitch, no pressure. We listen first.
                </p>
<a className="inline-flex items-center justify-center bg-white hover:bg-[#F0EDE8] text-[#1A2E4A] font-semibold text-base px-8 py-5 rounded-xl transition-colors tracking-[0.02em] mb-4 shadow-lg" href="#cta">
                    Book a Discovery Call
                </a>
<p className="font-light text-sm text-white/70">
                    Free · 15 minutes · No obligation
                </p>
</div>
</section>
</main>

<footer className="bg-[#1A2E4A] text-white pt-20 pb-8 px-5 md:px-8">
<div className="max-w-[1240px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="flex flex-col items-start">
<a className="font-semibold text-2xl tracking-tight text-white mb-4" href="#">pono</a>
<p className="font-light text-base text-[#C8DCF0] mb-4 leading-relaxed">Billing made simple. Revenue made right.</p>
<p className="font-light text-sm text-[#C8DCF0]/80">Built in 2026. Serving clinics nationally.</p>
</div>

<div className="flex flex-col">
<h4 className="font-semibold text-sm text-[#0062B8] uppercase tracking-[0.08em] mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#services">Coding Accuracy</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#services">Clean Claims</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#services">Denial Management</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#services">AR &amp; Collections</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="font-semibold text-sm text-[#0062B8] uppercase tracking-[0.08em] mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#resources">Resources</a></li>
<li><a className="font-light text-base text-[#C8DCF0] hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="flex flex-col items-start">
<h4 className="font-semibold text-sm text-[#0062B8] uppercase tracking-[0.08em] mb-6">Get Started</h4>
<a className="inline-flex items-center justify-center bg-white hover:bg-[#F0EDE8] text-[#1A2E4A] font-semibold text-base px-6 py-3 rounded-xl transition-colors tracking-[0.02em] mb-6 w-full sm:w-auto text-center" href="#cta">
                        Book a Discovery Call
                    </a>
<div className="flex items-center gap-4">
<a aria-label="LinkedIn" className="text-[#C8DCF0] hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="font-light text-sm text-[#C8DCF0] hover:text-white transition-colors" href="mailto:hello@pono.com">hello@pono.com</a>
</div>
</div>
</div>

<div className="border-t border-[#3A6FA5] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-light text-sm text-[#C8DCF0]">
                    © 2026 Pono Medical Billing Solutions
                </div>
<div className="flex items-center gap-6 font-light text-sm text-[#C8DCF0]">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">HIPAA Notice</a>
</div>
</div>
<div className="mt-8 text-center md:text-left font-light text-xs text-[#C8DCF0]/60 max-w-3xl">
                Pono MBS does not guarantee specific financial outcomes. All engagements include a HIPAA-compliant Business Associate Agreement.
            </div>
</div>
</footer>


    </>
  );
}
