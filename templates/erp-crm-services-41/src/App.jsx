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
}
}
}



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
      

<header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-lg tracking-tighter text-slate-900">BuyD</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
</nav>
<div>
<a className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:outline-none" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 px-6">

<div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-slate-600">AI-powered development workflow</span>
</div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-slate-900 tracking-tighter">
                    ERP &amp; CRM systems <br className="hidden md:block"/>
<span className="text-slate-400">built fast with experts and AI.</span>
</h1>
<p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    We deliver enterprise-grade software tailored to your specific workflows. By combining top-tier developers with modern AI tools, we ship reliable systems in weeks, not months.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all" href="#contact">
                        Contact us
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all" href="#services">
                        Explore services
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-y border-slate-100" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Expertise meets automation</h2>
<p className="mt-4 text-base text-slate-500">We don't just write code; we architect solutions. Our dual approach ensures high-quality architecture with unparalleled delivery speed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-slate-700" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Custom ERP Systems</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Unify your operations with a central source of truth. We build scalable enterprise resource planning tools tailored exactly to how your business runs.
                        </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-slate-700" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Intelligent CRM</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Manage relationships, track pipelines, and automate outreach. Our CRM builds focus on user adoption and actionable data insights.
                        </p>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-slate-700" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">AI-Powered Delivery</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We leverage generative AI for boilerplate code, testing, and optimization, allowing our senior engineers to focus on complex business logic.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="why-us">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 lg:sticky lg:top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Why partner <br/>with BuyD?</h2>
<p className="mt-4 text-base text-slate-500 mb-8">We eliminate the typical frustrations of software development: blown budgets, endless timelines, and systems that don't fit.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#contact">
                        Start your project
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:rocket-linear"></iconify-icon>
<h4 className="text-base font-semibold text-slate-900">Rapid Delivery</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Our AI-augmented workflows cut development cycles in half, getting your system to market or internal use significantly faster.</p>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:diploma-linear"></iconify-icon>
<h4 className="text-base font-semibold text-slate-900">Senior Expertise</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Your project is handled by seasoned architects and developers who understand business constraints, not junior resources.</p>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:code-square-linear"></iconify-icon>
<h4 className="text-base font-semibold text-slate-900">Modern Stack</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">We build on secure, scalable, and modern frameworks ensuring your software remains maintainable for years to come.</p>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-base font-semibold text-slate-900">Reliable Support</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Post-launch, we provide continuous monitoring, updates, and direct support to ensure maximum uptime and smooth operations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="contact">
<div className="max-w-5xl mx-auto">
<div className="rounded-3xl bg-slate-900 p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ready to upgrade your systems?</h2>
<p className="text-base text-slate-300 mb-10">Let's discuss your requirements. We'll provide a clear technical roadmap and timeline within 48 hours.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition-colors" href="mailto:hello@buyd.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                                Email our team
                            </a>
</div>
<p className="mt-6 text-xs text-slate-400">Or reach out directly at <span className="text-slate-200">hello@buyd.com</span></p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-10 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="font-semibold text-base tracking-tighter text-slate-900">BuyD</span>
<span className="text-sm text-slate-400">© 2024. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-400 hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="text-sm text-slate-400 hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
