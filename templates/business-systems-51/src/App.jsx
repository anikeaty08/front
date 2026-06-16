import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Simple intersection observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Play animation only once
            }
          });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-100 backdrop-blur-xl bg-white/90">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-sm">SOURANY</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">
            Services
          </a>
<a className="hover:text-gray-900 transition-colors" href="#">
            Process
          </a>
<a className="hover:text-gray-900 transition-colors" href="#">
            Case Studies
          </a>
<a className="hover:text-gray-900 transition-colors" href="#">
            About
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hidden sm:block" href="#">
            Client Login
          </a>
<a className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-sm" href="#">
            Contact Us
          </a>
</div>
</div>
</nav>

<section className="overflow-hidden md:pt-48 md:pb-40 pt-32 pb-24 relative">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none h-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-gray-600 tracking-wide uppercase">
                Now accepting new clients
              </span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-6 font-semibold tracking-tighter">
              Most businesses don't know where they're losing revenue.
              <span className="text-gray-400">We do.</span>
</h1>
<p className="reveal delay-200 text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              We diagnose where you're bleeding time and money — in operations, admin, customer handling, or compliance — then build intelligent systems that stop it. No templates. No off-the-shelf workflows. Architecture built for how your business actually operates.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gray-900 text-white px-8 py-3.5 font-medium text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-full">
                Book a Discovery Call
              </button>
<a className="w-full sm:w-auto flex justify-center items-center gap-2 text-gray-900 px-4 py-3.5 font-medium text-sm hover:text-gray-600 transition-colors group" href="#">
                See how it works 
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
</a>
</div>
<div className="reveal delay-300 mt-10 flex items-center gap-4 text-sm text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white ring-1 ring-gray-100"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white ring-1 ring-gray-100"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white ring-1 ring-gray-100"></div>
</div>
<p className="">
                Optimizing
                <span className="text-gray-900 font-medium">$50M+</span>
                in client revenue
              </p>
</div>
</div>

<div className="relative reveal delay-200">

<div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl opacity-50"></div>

<div className="relative bg-white rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden aspect-[4/3]">
<div className="absolute inset-0 bg-white"></div>
<div className="h-12 bg-white border-b border-gray-100 flex items-center px-6 gap-2 absolute top-0 w-full z-10">
<div className="w-3 h-3 rounded-full bg-gray-100"></div>
<div className="w-3 h-3 rounded-full bg-gray-100"></div>
</div>
<div className="flex h-full pt-12">
<div className="w-20 border-r border-gray-50 flex flex-col items-center py-6 gap-6">
<div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-lg shadow-gray-200/50">
<svg aria-hidden="true" className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="flex-1 bg-gray-50/30 p-8 relative">
<div className="w-full h-full bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col p-6">
<div className="flex items-center justify-between mb-8">
<div className="h-4 w-32 bg-gray-100 rounded-full"></div>
<div className="h-8 w-8 bg-gray-100 rounded-full"></div>
</div>
<div className="flex gap-4 mb-6">
<div className="h-32 flex-1 bg-gray-50 rounded-lg"></div>
<div className="h-32 flex-1 bg-gray-50 rounded-lg"></div>
<div className="h-32 flex-1 bg-gray-50 rounded-lg"></div>
</div>
<div className="h-4 w-2/3 bg-gray-50 rounded-full mb-3"></div>
<div className="h-4 w-1/2 bg-gray-50 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 mt-4 ml-4 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow-xl z-20 transform -translate-x-1/2 ring-4 ring-white">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium">
                        System Optimized
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50 py-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="reveal text-sm font-medium text-gray-400 mb-6">
          OPTIMIZING OPERATIONS FOR
        </p>
<div className="reveal delay-100 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tighter text-gray-800">
            ACME
            <span className="font-light">CORP</span>
</span>
<span className="text-lg font-semibold tracking-widest text-gray-700">
            STRATOS
          </span>
<div className="flex items-center gap-1 font-bold text-lg text-gray-800">
<div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
            BOXAL
          </div>
<span className="text-xl font-serif italic text-gray-800">Venture</span>
<span className="text-lg font-mono font-medium text-gray-700">
            stack_overflow
          </span>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4 tracking-tighter">
            Operational clarity at scale.
          </h2>
<p className="text-gray-500 max-w-2xl text-lg">
            We move beyond basic consulting to provide architectural blueprints
            for your entire business logic and workflow.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal group rounded-2xl border border-gray-200 bg-white transition-all duration-300 p-10 hover:shadow-md transition-shadow duration-500">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-layout-template text-gray-900" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">
              Process Architecture
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We map every input and output in your organization to eliminate
              redundancies and bottlenecks.
            </p>
</div>

<div className="reveal delay-100 group p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-zap text-gray-900" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">
              Automated Workflows
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Implement intelligent automation that handles compliance, admin,
              and routine customer interactions.
            </p>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-trending-up text-gray-900" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">
              Revenue Recovery
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Identify and plug leaks in your billing and operational cycles to
              instantly improve margins.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-100 py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4 tracking-tighter">
            Transparent engagement models
          </h2>
<p className="text-gray-500">
            Choose the level of operational restructuring your business needs.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="reveal bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
<div className="mb-4">
<span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                Systems Audit
              </span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-gray-900">$2,500</span>
<span className="text-gray-400">/one-time</span>
</div>
<p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              Deep dive diagnosis of your current operational bottlenecks with a
              comprehensive roadmap for improvement.
            </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-gray-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Full Operational Audit
              </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-gray-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Efficiency Report Card
              </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-gray-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Implementation Roadmap
              </li>
</ul>
<button className="w-full py-3 border border-gray-200 text-sm font-medium text-gray-900 hover:border-gray-900 transition-colors rounded-full">
              Book Audit
            </button>
</div>

<div className="reveal delay-100 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-gradient-to-bl from-gray-800 to-transparent w-24 h-24 rounded-bl-full opacity-50"></div>
<div className="mb-4">
<span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full ring-1 ring-white/20">
                Full Implementation
              </span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">$8,000</span>
<span className="text-gray-400">/month</span>
</div>
<p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
              We become your fractional COO team, building and managing your
              systems infrastructure.
            </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-white shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom System Development
              </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-white shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Team Training &amp; Handover
              </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-white shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Ongoing Optimization
              </li>
</ul>
<button className="w-full py-3 bg-white rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
              Partner with Us
            </button>
</div>
</div>
</div>
</section>

<section className="bg-white py-32">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-10 text-center">
          Common questions
        </h2>
<div className="space-y-4">
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
                How long does an audit take?
              </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Our initial discovery and audit phase typically takes 2 weeks. We
              analyze your current software stack, team workflows, and financial
              leaks.
            </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">Do you work with specific industries?</h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
              We specialize in service-based businesses, agencies, and SaaS
              companies scaling from $1M to $10M ARR where operational complexity
              starts to hurt margins.
            </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">Is this new software?</h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
              No. We architect solutions using the tools you likely already use
              or should be using (CRMs, Automation Platforms, Databases),
              connecting them into a unified system.
            </p>
</details>
</div>
</div>
</section>

<footer className="border-t border-gray-100 bg-white pb-12 pt-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-black rounded-full"></div>
<span className="font-semibold tracking-tight text-sm">SOURANY</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed pr-4">
              Building the operational backbone for high-growth companies.
            </p>
</div>
<div>
<h4 className="font-medium text-sm text-gray-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-gray-900" href="#">Audits</a></li>
<li><a className="hover:text-gray-900" href="#">Automation</a></li>
<li><a className="hover:text-gray-900" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-gray-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-gray-900" href="#">About</a></li>
<li><a className="hover:text-gray-900" href="#">Case Studies</a></li>
<li><a className="hover:text-gray-900" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-gray-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-gray-900" href="#">Terms</a></li>
<li><a className="hover:text-gray-900" href="#">Privacy</a></li>
<li><a className="hover:text-gray-900" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100">
<p className="text-xs text-gray-400">
            © 2023 Sourany Systems. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-900" href="#">
<svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-gray-900" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
