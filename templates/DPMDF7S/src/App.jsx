import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      // FAQ Toggle
      document.addEventListener('DOMContentLoaded', function () {
        const toggles = document.querySelectorAll('.faq-toggle');
        toggles.forEach(toggle => {
          toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const iconWrap = this.querySelector('.faq-icon');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Close others
            toggles.forEach(t => {
              if (t !== this) {
                const c = t.nextElementSibling;
                const w = t.querySelector('.faq-icon');
                c.style.maxHeight = '0px';
                if (w) w.innerHTML = '<svg data-lucide="plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>';
              }
            });

            // Toggle current
            if (isOpen) {
              content.style.maxHeight = '0px';
              iconWrap.innerHTML = '<svg data-lucide="plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>';
            } else {
              content.style.maxHeight = content.scrollHeight + 'px';
              iconWrap.innerHTML = '<svg data-lucide="minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M5 12h14"></path></svg>';
            }
            if (window.lucide) lucide.createIcons();
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(60% 40% at 30% -10%, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 55%), radial-gradient(40% 30% at 80% 0%, rgba(59,130,246,0.14) 0%, rgba(0,0,0,0) 50%)'}}></div>
</div>
<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<nav className="mt-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur border-black/10 bg-black/5" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<span className="text-base font-medium tracking-tight font-geist">VIP Creative Studio</span>
</a>
<div className="hidden md:flex items-center gap-1 rounded-xl border p-1 backdrop-blur border-black/10 bg-black/5">
<a className="px-3 py-2 text-sm font-medium font-geist text-black/80 hover:text-black" href="#">About</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-black/80 hover:text-black" href="#">Services</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-black/80 hover:text-black" href="#">Case Studies</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-black/80 hover:text-black" href="#">Blog</a>
<a className="ml-2 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium font-geist text-white" href="#">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book a Call
            </a>
</div>
<button className="md:hidden inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium backdrop-blur font-geist border-black/10 bg-black/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
            Menu
          </button>
</nav>

<section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">

<div className="mb-6 flex flex-col items-center justify-center gap-3">
<div className="flex flex-wrap items-center justify-center gap-2">
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/80">[Community Credit Union]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/80">[First National Bank]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/80">[Fintech Advisors]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/80">[Regional Bank]</span>
</div>
<p className="text-xs font-medium text-black/70 font-geist">70+ trusted financial partners</p>
</div>
<h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter font-geist">
            Ready to grow your member base and assets?
          </h1>
<p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg font-normal font-geist text-black/70">
            We build comprehensive marketing systems for credit unions and financial brands. If sustainable, compliant growth is your goal, you’re in the right place.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-base font-medium font-geist text-white" href="#">Get Started</a>
<a className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-base font-medium backdrop-blur font-geist border-black/10 bg-black/5 text-black/90 hover:bg-black/10" href="#">Learn More</a>
</div>
</section>
</div>
</header>

<section className="relative z-10 mx-auto mt-6 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="rounded-2xl border p-6 sm:p-10 border-black/10 bg-black/5">
<div className="flex flex-wrap items-center justify-center gap-3">
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/70">[Community Credit Union]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/70">[First National Bank]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/70">[Fintech Advisors]</span>
<span className="rounded-full border px-3 py-1 text-xs font-medium font-geist border-black/10 bg-black/5 text-black/70">[Regional Bank]</span>
</div>
<div className="mx-auto mt-8 max-w-4xl text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">Strategy that connects, creative that converts.</h2>
<p className="mt-4 text-base font-geist text-black/70">
            Our work builds on a foundation of deep market insight. With transparent reporting, strategic foresight, and creative excellence — we deliver marketing that builds trust and drives results.
          </p>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium backdrop-blur font-geist border-black/10 bg-black/5 text-black/90 hover:bg-black/10" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              See Case Studies
            </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium font-geist text-white" href="#">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Schedule Intro
            </a>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8">
<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-sm font-medium font-geist text-black/50">What You Get</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">A Partnership Built for Financial Sector Growth</h2>
<p className="mt-3 text-base font-geist text-black/70">
            From holistic strategy to rapid execution, our entire process is designed to help you acquire new members and assets with confidence.
          </p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-2xl border p-6 border-black/10 bg-black/5">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
<svg className="lucide lucide-filter" data-lucide="filter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</span>
<div>
<h3 className="text-xl font-medium tracking-tight font-geist">A Full-Funnel Approach</h3>
<p className="mt-2 text-sm font-geist text-black/70">
                We go beyond single channels. We build your entire acquisition system, from establishing brand authority with AI-First SEO to converting prospects on a high-performance website and retaining them with targeted email campaigns.
              </p>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 border-black/10 bg-black/5">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<div>
<h3 className="text-xl font-medium tracking-tight font-geist">A True Extension of Your Team</h3>
<p className="mt-2 text-sm font-geist text-black/70">
                Get the power of a senior marketing department without the overhead. We provide direct access, collaborative strategy sessions, and proactive communication, acting as your dedicated growth partner.
              </p>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 border-black/10 bg-black/5">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
<svg className="lucide lucide-map" data-lucide="map" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</span>
<div>
<h3 className="text-xl font-medium tracking-tight font-geist">Transparent Roadmaps &amp; Pricing</h3>
<p className="mt-2 text-sm font-geist text-black/70">
                No surprises or hidden fees. Our project-based and retainer plans are clearly defined, so you know exactly what to expect. Every engagement starts with a strategic roadmap aligned to your goals.
              </p>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 border-black/10 bg-black/5">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
<svg className="lucide lucide-rocket" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</span>
<div>
<h3 className="text-xl font-medium tracking-tight font-geist">Agile, High-Quality Execution</h3>
<p className="mt-2 text-sm font-geist text-black/70">
                Our proprietary development and creative processes allow us to deliver high-quality work—from websites to campaigns—in weeks, not months, without sacrificing strategic rigor or quality.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
<div className="mx-auto max-w-4xl text-center">
<span className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur font-geist border-black/10 bg-black/5 text-black/70">Client Success</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">What our financial partners say about driving growth.</h2>
<p className="mt-4 text-base font-geist text-black/70">
            Real results from real brands. See how we've helped credit unions and financial institutions expand their reach and deepen member relationships.
          </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border p-5 sm:p-6 border-black/10 bg-black/5">
<div className="flex items-center gap-2 text-emerald-700">
<svg className="lucide lucide-quote opacity-80" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-xs font-medium font-geist text-black/60">Financial Services</span>
</div>
<p className="mt-3 text-sm sm:text-base font-geist text-black/85">
              "VIP Creative Studio increased our new member applications by 40% in the first quarter alone, all while navigating our compliance needs perfectly. They are true partners who understand our industry."
            </p>
<div className="mt-5 border-t pt-3 border-black/10">
<p className="text-sm font-semibold tracking-tight font-geist">[Name], Head of Marketing</p>
<p className="mt-1 text-xs font-geist text-black/60">[Community Credit Union]</p>
</div>
</div>

<div className="rounded-2xl border p-5 sm:p-6 border-black/10 bg-black/5">
<div className="flex items-center gap-2 text-emerald-700">
<svg className="lucide lucide-quote opacity-80" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-xs font-medium font-geist text-black/60">Banking</span>
</div>
<p className="mt-3 text-sm sm:text-base font-geist text-black/85">
              "The new website they built for us has become our number one lead source for mortgage applications. The AI-First SEO approach delivered qualified organic traffic faster than we ever thought possible."
            </p>
<div className="mt-5 border-t pt-3 border-black/10">
<p className="text-sm font-semibold tracking-tight font-geist">[Name], VP of Growth</p>
<p className="mt-1 text-xs font-geist text-black/60">[Regional Bank]</p>
</div>
</div>

<div className="rounded-2xl border p-5 sm:p-6 border-black/10 bg-black/5">
<div className="flex items-center gap-2 text-emerald-700">
<svg className="lucide lucide-quote opacity-80" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-xs font-medium font-geist text-black/60">Fintech</span>
</div>
<p className="mt-3 text-sm sm:text-base font-geist text-black/85">
              "Working with VIP is like having an entire senior marketing team on call. From strategy to execution, they are proactive, creative, and completely aligned with our financial goals."
            </p>
<div className="mt-5 border-t pt-3 border-black/10">
<p className="text-sm font-semibold tracking-tight font-geist">[Name], Founder</p>
<p className="mt-1 text-xs font-geist text-black/60">[Fintech Advisors]</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-6 px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur font-geist border-black/10 bg-black/5 text-black/80">
<span className="h-1.5 w-1.5 rounded-full bg-black"></span>
<span className="text-xs font-normal">Pricing</span>
</div>
<h2 className="mt-4 text-[40px] sm:text-6xl leading-[0.95] font-medium tracking-tighter font-geist">Plans Designed for Your Growth Stage</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-geist text-black/70">
          Our engagements are designed for clarity and impact. Whether you need a foundational asset or an ongoing growth partner, we have a solution.
        </p>
</div>
<div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">

<article className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl sm:p-6 border-black/10 bg-black/5">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(16,185,129,0.10) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative text-center">
<h3 className="text-xl font-medium tracking-tight font-geist">The Foundation</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl font-medium tracking-tighter font-geist">$3,000</p>
<span className="mb-1 text-sm font-geist text-black/70">Starting</span>
</div>
<p className="mt-3 text-sm font-geist text-black/70">
              A one-time project to build your core digital marketing asset—a high-performance, AI-ready website.
            </p>
</div>
<ul className="relative mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Full UI/UX &amp; Strategic Design</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Custom Website Development</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Headless CMS Integration</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">AI-First SEO Foundation</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Analytics &amp; Tracking Setup</span>
</li>
</ul>
<div className="relative mt-6">
<div className="mb-3 flex items-center justify-center gap-2 text-xs font-geist text-black/60">
<span className="rounded-full border px-2 py-0.5 border-black/10 bg-black/5">Per Project</span>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 h-11 rounded-xl bg-emerald-500 text-sm font-medium transition font-geist text-white hover:bg-emerald-600">
              Book a Project
              <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl sm:p-6 border-black/10 bg-black/5">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative text-center">
<h3 className="text-xl font-medium tracking-tight font-geist">The Growth Engine</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl font-medium tracking-tighter font-geist">$2,500</p>
<span className="mb-1 text-sm font-geist text-black/70">Starting / Month</span>
</div>
<p className="mt-3 text-sm font-geist text-black/70">
              An ongoing partnership for brands ready to scale aggressively. We become your full-service marketing engine.
            </p>
</div>
<ul className="relative mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Everything in "The Foundation" (if needed)</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Ongoing SEO &amp; Content Marketing</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Social Media Management</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Paid Ad Campaign Management</span>
</li>
<li className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-black/5">
<svg className="lucide lucide-check text-emerald-600" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist text-black/90">Monthly Performance Reporting</span>
</li>
</ul>
<div className="relative mt-6">
<div className="mb-3 flex items-center justify-center gap-2 text-xs font-geist text-black/60">
<span className="rounded-full border px-2 py-0.5 border-black/10 bg-black/5">Per Month</span>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 h-11 rounded-xl bg-emerald-500 text-sm font-medium transition font-geist text-white hover:bg-emerald-600">
              Book a Retainer
              <svg className="lucide lucide-calendar-clock" data-lucide="calendar-clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</button>
</div>
</article>
</div>
</section>

<section className="relative mt-16">
<div className="mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 lg:px-8">
<div className="mx-auto mb-12 max-w-4xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur font-geist border-black/10 bg-black/5 text-black/80">
<span className="h-1.5 w-1.5 rounded-full bg-black"></span>
<span className="text-xs font-normal">FAQ</span>
</div>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">Frequently Asked Questions</h2>
</div>
<div className="mx-auto max-w-4xl">
<div className="grid gap-4">

<div className="overflow-hidden rounded-2xl border backdrop-blur border-black/10 bg-black/5">
<button className="faq-toggle flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6 hover:bg-black/5" data-faq="0">
<h3 className="pr-4 text-lg font-medium tracking-tight font-geist">How do you measure and report on performance?</h3>
<span className="faq-icon h-5 w-5 flex-shrink-0 text-black/60">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="px-5 pt-0 pb-5 sm:px-6 sm:pb-6">
<p className="text-sm font-geist text-black/70">
                    We establish clear KPIs at the start of every engagement. You'll receive a concise monthly report detailing progress on key metrics like organic traffic, lead conversions, member applications, and cost-per-acquisition.
                  </p>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border backdrop-blur border-black/10 bg-black/5">
<button className="faq-toggle flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6 hover:bg-black/5" data-faq="1">
<h3 className="pr-4 text-lg font-medium tracking-tight font-geist">What makes you different from a generalist marketing agency?</h3>
<span className="faq-icon h-5 w-5 flex-shrink-0 text-black/60">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="px-5 pt-0 pb-5 sm:px-6 sm:pb-6">
<p className="text-sm font-geist text-black/70">
                    Our exclusive focus on the financial sector. We understand the nuances of marketing to members (not just customers), the importance of brand trust, and the need to work within a compliance-focused environment.
                  </p>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border backdrop-blur border-black/10 bg-black/5">
<button className="faq-toggle flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6 hover:bg-black/5" data-faq="2">
<h3 className="pr-4 text-lg font-medium tracking-tight font-geist">Do you provide the creative and content, or do we?</h3>
<span className="faq-icon h-5 w-5 flex-shrink-0 text-black/60">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="px-5 pt-0 pb-5 sm:px-6 sm:pb-6">
<p className="text-sm font-geist text-black/70">
                    We are a full-service agency. Our team handles everything from copywriting and design to video editing and ad creative, all developed through the strategic lens of what resonates with a financial audience.
                  </p>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border backdrop-blur border-black/10 bg-black/5">
<button className="faq-toggle flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6 hover:bg-black/5" data-faq="3">
<h3 className="pr-4 text-lg font-medium tracking-tight font-geist">How quickly can we get started?</h3>
<span className="faq-icon h-5 w-5 flex-shrink-0 text-black/60">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="px-5 pt-0 pb-5 sm:px-6 sm:pb-6">
<p className="text-sm font-geist text-black/70">
                    For project-based work like a new website, we can typically begin the discovery phase within one week of signing. For retainers, we aim to have our kick-off strategy session within 3–5 business days.
                  </p>
</div>
</div>
</div>
</div>

<div className="mx-auto mt-12 max-w-2xl text-center">
<p className="mb-6 text-base font-geist text-black/70">Still have questions? We'd love to chat about your specific needs.</p>
<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-base font-medium backdrop-blur font-geist border-black/10 bg-black/5 text-black/90 hover:bg-black/10" href="#">
<svg className="lucide lucide-message-circle" data-lucide="message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Start a Conversation
              </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-base font-medium transition font-geist text-white hover:bg-emerald-600" href="#">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a Call
              </a>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-black/10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
<p className="text-sm font-geist text-black/50">© <span className="font-geist" id="year">2025</span> VIP Creative Studio. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-black/60 hover:text-black" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-black/60 hover:text-black" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-black/60 hover:text-black" href="#">
<svg className="lucide lucide-github" data-lucide="github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</footer>




    </>
  );
}
