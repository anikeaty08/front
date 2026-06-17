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
      

<header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#">NM</a>
<nav className="hidden space-x-8 text-sm font-medium text-zinc-500 md:flex">
<a className="transition-colors hover:text-zinc-900" href="#services">Services</a>
<a className="transition-colors hover:text-zinc-900" href="#why-me">Why Me</a>
</nav>
<a className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800" href="#contact">
                Contact Me
            </a>
</div>
</header>

<section className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
<div className="max-w-3xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="mb-8 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl leading-tight">
                Go High Level Expert for CRM Automation &amp; Website Design.
            </h1>
<p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
                Hi, I'm Nabida. With over 3+ years of hands-on experience, I help businesses streamline operations, automate workflows, and build powerful online presences using Go High Level CRM and custom-coded websites. My mission is to make your business more efficient, scalable, and visually impressive.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-md" href="#contact">
                    Let's work together
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50" href="#services">
                    Explore my services
                </a>
</div>
</div>
</section>

<section className="border-y border-zinc-200/60 bg-white py-24" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 max-w-2xl">
<h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">What I Offer</h2>
<p className="text-base text-zinc-500">Professional-grade tools and a problem-solving mindset to elevate your business operations.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:bg-white hover:shadow-sm">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-900">CRM Setup &amp; Automation</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Complete setup: Funnels, Sales Funnels, Landing Pages, Lead Gen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Client onboarding, Forms, Surveys, Triggers, and Campaigns</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Smart workflow automation to save time and effort</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Custom pipeline stages &amp; CRM optimization for lead tracking</span>
</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:bg-white hover:shadow-sm">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-900">Website &amp; Funnel Design</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Beautiful, mobile-responsive layouts tailored to your brand</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Custom-coded enhancements using HTML, CSS, JavaScript</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>UX/UI-focused design for better conversions &amp; navigation</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Fast-loading, SEO-friendly pages with a professional feel</span>
</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:bg-white hover:shadow-sm">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-900">Advanced Customizations</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Customized form/survey designs &amp; calendar styling (CSS)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>GHL Membership site setup &amp; styling integration</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>CF Pro Tools &amp; advanced elements for high-performing funnels</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>SaaS rebranding, Snapshot creation &amp; data migration</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="why-me">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 text-center">
<h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">Why Work With Me?</h2>
<p className="mx-auto max-w-xl text-base text-zinc-500">I ensure everything aligns with your business goals and speaks directly to your audience.</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Responsive Communication</h4>
<p className="text-sm text-zinc-500">Clear and consistent updates. You’ll never feel left in the dark during our project.</p>
</div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Timely Delivery</h4>
<p className="text-sm text-zinc-500">I respect your timeline. Projects are completed on time, every single time.</p>
</div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Flexible &amp; Long-Term Support</h4>
<p className="text-sm text-zinc-500">I remain available for future updates, tweaks, and helping you scale your systems.</p>
</div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Problem-Solving Mindset</h4>
<p className="text-sm text-zinc-500">I navigate complex setups and find practical solutions, not excuses.</p>
</div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Focused on Results</h4>
<p className="text-sm text-zinc-500">My builds aren't just about design; they are optimized for conversions and growth.</p>
</div>
<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/50">
<iconify-icon className="mb-4 text-2xl text-zinc-900" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mb-2 text-base font-medium text-zinc-900">Friendly Professionalism</h4>
<p className="text-sm text-zinc-500">Easy to work with, approachable, and always reliable throughout our engagement.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-24 text-white" id="contact">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s take your brand to the next level — together.</h2>
<p className="mx-auto mb-10 max-w-2xl text-base text-zinc-400">From setting up powerful automations to designing standout websites, if you’re ready to simplify your systems and boost your results, I’d love to work with you.</p>
<a className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 hover:bg-zinc-100" href="mailto:hello@example.com">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                Start a Conversation
            </a>
</div>
</section>
<footer className="bg-zinc-950 py-10 text-center border-t border-zinc-800">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
<div className="text-left">
<p className="text-sm font-medium text-zinc-200">Nabida Mushahid</p>
<p className="text-xs text-zinc-500 mt-1">Go High Level CRM &amp; Web Design Expert</p>
</div>
<p className="text-xs text-zinc-600">© 2024 Nabida Mushahid. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
