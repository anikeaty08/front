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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
<a className="flex items-center gap-2" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900">Pixels Crab Agency</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Scope</a>
<a className="hover:text-slate-900 transition-colors" href="https://alaminmun.com/newbrand/about-us/" target="_blank">About Us</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#">
                Hire on Upwork
            </a>
</div>
</nav>

<header className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-70"></div>
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Available for new projects on Upwork
            </div>
<h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Hire Pixels Crab Agency <br className="hidden md:block"/> on Upwork
            </h1>
<p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                High-quality Web Design, WordPress, and Ecommerce solutions—delivered with clear communication, structured milestones, and reliable post-delivery support.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-8 text-sm font-medium text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 w-full sm:w-auto" href="#">
                    Visit Our Upwork Profile
                    <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 w-full sm:w-auto" href="#">
                    Message Us on Upwork
                </a>
</div>

<div className="mt-12 flex flex-col items-center justify-center gap-y-4 gap-x-8 text-sm text-slate-500 md:flex-row">
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:check-circle"></span>
<span>Upwork-ready milestones</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:file-text"></span>
<span>Fixed timelines</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:shield-check"></span>
<span>Long-term support</span>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50 py-12">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="flex flex-col gap-2">
<span className="iconify h-6 w-6 text-slate-900 mb-1" data-icon="lucide:globe"></span>
<h3 className="text-sm font-semibold text-slate-900">Global Clients</h3>
<p className="text-xs text-slate-500 leading-relaxed">Trusted by clients across USA, UK, Canada, and Australia.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify h-6 w-6 text-slate-900 mb-1" data-icon="lucide:star"></span>
<h3 className="text-sm font-semibold text-slate-900">Quality Focused</h3>
<p className="text-xs text-slate-500 leading-relaxed">Top-tier delivery &amp; complete client satisfaction.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify h-6 w-6 text-slate-900 mb-1" data-icon="lucide:clock"></span>
<h3 className="text-sm font-semibold text-slate-900">Fast Response</h3>
<p className="text-xs text-slate-500 leading-relaxed">Quick communication within business hours.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify h-6 w-6 text-slate-900 mb-1" data-icon="lucide:lock"></span>
<h3 className="text-sm font-semibold text-slate-900">NDA Friendly</h3>
<p className="text-xs text-slate-500 leading-relaxed">Secure, Upwork-compliant workflow.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 md:text-center md:max-w-2xl md:mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why Clients Choose <br/> Pixels Crab Agency</h2>
<p className="text-slate-500 text-base">We don’t just complete tasks—we partner with clients for clarity, performance, and long-term growth.</p>
<div className="mt-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-700 hover:underline" href="https://alaminmun.com/newbrand/about-us/" target="_blank">
                        Learn more about our approach →
                    </a>
</div>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<span className="iconify" data-icon="lucide:briefcase"></span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">Upwork-First Mindset</h3>
<p className="text-sm leading-relaxed text-slate-500">We understand how Upwork works—milestones, timelines, revisions, and communication—all handled professionally inside the platform.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<span className="iconify" data-icon="lucide:search"></span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">Clarity Before Development</h3>
<p className="text-sm leading-relaxed text-slate-500">Every project starts with scope confirmation. No assumptions, no surprises. We plan before we build.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<span className="iconify" data-icon="lucide:message-square"></span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">Fast &amp; Reliable Communication</h3>
<p className="text-sm leading-relaxed text-slate-500">Clear updates, quick responses within business hours, and structured progress reporting throughout the project.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<span className="iconify" data-icon="lucide:heart-handshake"></span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">Delivery You Can Rely On</h3>
<p className="text-sm leading-relaxed text-slate-500">We stay available even after delivery to ensure everything works as expected. We build for the long term.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 md:py-32" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">What You Can Hire Us For</h2>
<p className="mt-2 text-slate-500">Specialized technical and design services.</p>
</div>
<a className="flex items-center text-sm font-medium text-slate-900 hover:text-slate-700" href="https://alaminmun.com/newbrand/services/" target="_blank">
                    Explore all services <span className="iconify ml-1" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:layout-template"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">WordPress Design &amp; Dev</h3>
<p className="mb-4 text-xs text-slate-500">Custom WordPress websites built for performance, scalability, and brand consistency.</p>
<a className="text-xs font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href="https://alaminmun.com/newbrand/wordpresswebsite/">View Details</a>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:layers"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">Elementor Pro Build</h3>
<p className="mb-4 text-xs text-slate-500">Pixel-perfect layouts using Elementor Pro with clean structure and reusable components.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:wrench"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">Theme Customization</h3>
<p className="mb-4 text-xs text-slate-500">Theme customization, bug fixing, layout improvements, and feature enhancements.</p>
<a className="text-xs font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href="https://alaminmun.com/newbrand/theme-customization/">View Details</a>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:shopping-bag"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">Shopify Optimization</h3>
<p className="mb-4 text-xs text-slate-500">Speed, UX, and conversion improvements for Shopify stores.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:zap"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">Speed &amp; Core Web Vitals</h3>
<p className="mb-4 text-xs text-slate-500">Performance optimization focused on real-world loading speed and SEO impact.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:shield-check"></span>
</div>
<h3 className="mb-2 text-base font-semibold text-slate-900">Maintenance &amp; Security</h3>
<p className="mb-4 text-xs text-slate-500">Ongoing website care, updates, backups, security monitoring, and SEO setup.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="pricing">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Engagement Options</h2>
<p className="mt-4 text-slate-500">All projects are scope-based and finalized on Upwork before starting.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 p-8">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="mt-2 text-sm text-slate-500">Best for small tasks, fixes, or single-page updates.</p>
<div className="my-6 border-t border-slate-100"></div>
<ul className="flex-1 space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Bug fixes &amp; improvements
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Small layout changes
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Short turnaround
                        </li>
</ul>
<div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
<span className="text-xs font-medium text-slate-500"><span className="iconify inline mr-1" data-icon="lucide:clock"></span> 1–3 days</span>
<a className="text-sm font-medium text-slate-900 hover:underline" href="#">Hire on Upwork</a>
</div>
</div>

<div className="relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900 p-8 text-white shadow-xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-slate-800 bg-slate-800 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                        Most Popular
                    </div>
<h3 className="text-lg font-semibold">Growth</h3>
<p className="mt-2 text-sm text-slate-400">Ideal for full website builds or redesigns.</p>
<div className="my-6 border-t border-slate-800"></div>
<ul className="flex-1 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-white" data-icon="lucide:check"></span> Custom WP/Elementor site
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-white" data-icon="lucide:check"></span> Reusable sections
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-white" data-icon="lucide:check"></span> Performance setup
                        </li>
</ul>
<div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
<span className="text-xs font-medium text-slate-400"><span className="iconify inline mr-1" data-icon="lucide:clock"></span> 1–3 weeks</span>
<a className="rounded bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100" href="#">Hire on Upwork</a>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 p-8">
<h3 className="text-lg font-semibold text-slate-900">Scale</h3>
<p className="mt-2 text-sm text-slate-500">For ecommerce brands or long-term support.</p>
<div className="my-6 border-t border-slate-100"></div>
<ul className="flex-1 space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Ecommerce setup
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Ongoing development
                        </li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-slate-900" data-icon="lucide:check"></span> Growth improvements
                        </li>
</ul>
<div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
<span className="text-xs font-medium text-slate-500"><span className="iconify inline mr-1" data-icon="lucide:clock"></span> Ongoing</span>
<a className="text-sm font-medium text-slate-900 hover:underline" href="#">Hire on Upwork</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-20">
<div className="mx-auto max-w-6xl px-6">
<div className="grid items-center gap-12 md:grid-cols-2">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Recent Work Delivered</h2>
<p className="mt-4 text-base text-slate-500">
                        A selection of projects delivered for clients across different industries, including custom WordPress websites, Elementor Pro redesigns, and Speed Optimization.
                    </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800" href="https://alaminmun.com/newbrand/projects/">
                            View Case Studies
                        </a>
<a className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50" href="#">
                            Explore Upwork Portfolio
                        </a>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-8">
<ul className="space-y-4">
<li className="flex items-center gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:layout"></span>
</div>
<span className="text-sm font-medium text-slate-700">Custom WordPress Websites</span>
</li>
<li className="flex items-center gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:pen-tool"></span>
</div>
<span className="text-sm font-medium text-slate-700">Elementor Pro Redesigns</span>
</li>
<li className="flex items-center gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:shopping-cart"></span>
</div>
<span className="text-sm font-medium text-slate-700">Ecommerce Optimization</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="process">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-slate-900">How Our Upwork Process Works</h2>
<div className="relative grid gap-8 md:grid-cols-4">

<div className="absolute top-8 left-0 hidden h-0.5 w-full bg-slate-100 md:block z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-900 shadow-sm">1</div>
<h3 className="text-lg font-semibold text-slate-900">Brief</h3>
<p className="mt-2 text-sm text-slate-500">Send your goals, website link, and expectations on Upwork.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-900 shadow-sm">2</div>
<h3 className="text-lg font-semibold text-slate-900">Scope</h3>
<p className="mt-2 text-sm text-slate-500">We review and ask focused questions to clarify deliverables.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-900 shadow-sm">3</div>
<h3 className="text-lg font-semibold text-slate-900">Milestones</h3>
<p className="mt-2 text-sm text-slate-500">Timeline and milestones are set. Work begins securely.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold text-slate-900 shadow-sm">4</div>
<h3 className="text-lg font-semibold text-slate-900">Delivery</h3>
<p className="mt-2 text-sm text-slate-500">Final handover with revisions and optional ongoing support.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-20">
<div className="mx-auto max-w-5xl px-6">
<h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-slate-900">Who We Work Best With</h2>
<div className="grid gap-8 md:grid-cols-2">

<div className="rounded-2xl border border-slate-200 bg-white p-8">
<div className="mb-4 flex items-center gap-2 text-green-600">
<span className="iconify" data-icon="lucide:thumbs-up"></span>
<span className="font-semibold text-sm uppercase tracking-wide">Best Fit</span>
</div>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex items-start gap-2"><span className="iconify mt-0.5 text-green-600" data-icon="lucide:check"></span> Business owners &amp; agencies</li>
<li className="flex items-start gap-2"><span className="iconify mt-0.5 text-green-600" data-icon="lucide:check"></span> Ecommerce brands &amp; coaches</li>
<li className="flex items-start gap-2"><span className="iconify mt-0.5 text-green-600" data-icon="lucide:check"></span> Clients who value clarity and long-term results</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 opacity-75">
<div className="mb-4 flex items-center gap-2 text-slate-500">
<span className="iconify" data-icon="lucide:thumbs-down"></span>
<span className="font-semibold text-sm uppercase tracking-wide">Not Ideal For</span>
</div>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2"><span className="iconify mt-0.5" data-icon="lucide:x"></span> Undefined scope or unrealistic timelines</li>
<li className="flex items-start gap-2"><span className="iconify mt-0.5" data-icon="lucide:x"></span> Price-only decision makers</li>
<li className="flex items-start gap-2"><span className="iconify mt-0.5" data-icon="lucide:x"></span> Projects outside Upwork’s workflow</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32">
<div className="mx-auto max-w-3xl px-6">
<h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                        What information do you need to start?
                        <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-slate-600">Project goals, website URL (if any), timeline, and reference examples.</p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                        Do you work with milestones?
                        <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-slate-600">Yes. All projects are milestone-based on Upwork for your security and transparency.</p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                        What’s included in revisions?
                        <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-slate-600">Revisions are handled as defined in the scope before starting. We ensure you are happy with the output.</p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                        Do you provide ongoing support?
                        <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-slate-600">Yes. Maintenance and long-term support are available as separate milestones or contracts.</p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                        What tools do you use?
                        <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-slate-600">WordPress, Elementor Pro, ACF, CPT UI, Shopify, Rank Math, and various performance tools.</p>
</details>
</div>
</div>
</section>

<section className="pb-20">
<div className="mx-auto max-w-5xl px-6">
<div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-2xl md:px-12 md:py-20">

<div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800 opacity-50 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-900 opacity-20 blur-3xl"></div>
<h2 className="relative z-10 mb-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    Ready to Hire Us on Upwork?
                </h2>
<p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg text-slate-300">
                    Let’s discuss your project and define the right solution—clearly, professionally, and securely through Upwork.
                </p>
<div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100" href="#">
                        Visit Our Upwork Profile
                    </a>
<a className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:border-slate-600 hover:bg-slate-800" href="#">
                        Message Us on Upwork
                    </a>
</div>
<div className="relative z-10 mt-10 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:grid-cols-2 lg:w-1/2 lg:mx-auto">
<div>
<span className="block font-semibold text-white">Response Time</span>
                        12–24 business hours
                    </div>
<div>
<span className="block font-semibold text-white">Clients Served</span>
                        USA, UK, Canada, Australia
                    </div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<p className="text-sm font-medium text-slate-900">Pixels Crab Agency</p>
<div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
<span className="iconify text-slate-400" data-icon="lucide:lock"></span>
<span>All payments &amp; milestones handled securely via Upwork.</span>
</div>
<p className="text-xs text-slate-400">© 2024. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
