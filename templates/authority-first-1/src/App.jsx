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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-xl text-slate-950 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-950 rounded flex items-center justify-center">
<span className="text-white text-xs tracking-tighter">AB</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-950 transition-colors" href="#problems">The Problem</a>
<a className="hover:text-slate-950 transition-colors" href="#work">Work</a>
<a className="hover:text-slate-950 transition-colors" href="#solution">System</a>
<a className="hover:text-slate-950 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-slate-950 text-white px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#book">
                Book a Call
            </a>
</div>
</nav>

<header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Accepting 2 new clients for Q3
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.1] mb-6">
            Stop losing ideal clients to a generic digital presence.
        </h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            We engineer authority-first acquisition systems. Transform your years of expertise into a premium digital asset that builds instant trust and drives frictionless client bookings.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-950 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]" href="#book">
                Book Your Strategy Call
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all active:scale-[0.98]" href="#work">
                View Our Work
            </a>
</div>
<div className="flex items-center justify-center gap-6 mt-12 grayscale opacity-60">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Trusted by elite practitioners</p>
</div>
</header>

<section className="py-24 px-6" id="problems">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950 mb-4">Why premium experts stay hidden.</h2>
<p className="text-sm text-slate-500 font-normal max-w-xl">You deliver elite results, but your digital footprint actively undermines your credibility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-slate-400 mb-6" icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">The Authority Gap</h4>
<p className="text-sm text-slate-500 leading-relaxed font-normal max-w-md">
                        Your website looks uninspired. It fails to communicate your true value to high-ticket buyers, causing them to choose competitors with a more polished presence.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-slate-400 mb-6" icon="solar:ghost-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">The Leaky Bucket</h4>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Hard-earned referrals vanish because your site lacks a clear, persuasive path to conversion.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-slate-400 mb-6" icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Tech Headaches</h4>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Juggling disjointed tools for scheduling and forms drains your energy and creates a clunky client experience.
                    </p>
</div>

<div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-end">
<iconify-icon className="text-slate-400 mb-6" icon="solar:eye-closed-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Invisible Status</h4>
<p className="text-sm text-slate-500 leading-relaxed font-normal max-w-md">
                        Poor underlying site structure means search engines completely miss the depth of your expertise. You remain hidden from clients actively searching for your solutions.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white px-6" id="work">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Engineered for authority.</h2>
<p className="text-sm text-slate-400 font-normal max-w-md">Recent acquisition systems we've built for industry-leading practitioners.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300 transition-colors" href="#book">
                    Start your project <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative block overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3]">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] flex items-end justify-center px-8 pt-8">

<div className="w-full h-full bg-slate-50 rounded-t-xl shadow-2xl overflow-hidden flex flex-col border border-slate-200/20">

<div className="h-8 bg-slate-200/50 flex items-center px-4 gap-2 border-b border-slate-200/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="p-6 flex-1 bg-white flex flex-col gap-4">
<div className="flex justify-between items-center mb-4">
<div className="w-16 h-4 bg-slate-100 rounded"></div>
<div className="flex gap-2">
<div className="w-8 h-2 bg-slate-100 rounded"></div>
<div className="w-8 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="w-3/4 h-8 bg-slate-100 rounded-sm"></div>
<div className="w-1/2 h-4 bg-slate-50 rounded-sm mb-4"></div>
<div className="w-24 h-8 bg-slate-900 rounded-md"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
<h4 className="text-lg font-semibold tracking-tight text-white">Dr. Sarah Jenkins</h4>
<p className="text-xs text-slate-400 mt-1">214% increase in consultation requests</p>
</div>
</div>

<div className="group relative block overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3]">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] flex items-end justify-center px-8 pt-8">

<div className="w-full h-full bg-slate-50 rounded-t-xl shadow-2xl overflow-hidden flex border border-slate-200/20">

<div className="w-1/4 h-full bg-slate-100 border-r border-slate-200/50 p-3 flex flex-col gap-3">
<div className="w-full h-3 bg-slate-200 rounded-sm mb-2"></div>
<div className="w-full h-2 bg-slate-200/70 rounded-sm"></div>
<div className="w-3/4 h-2 bg-slate-200/70 rounded-sm"></div>
<div className="w-full h-2 bg-slate-200/70 rounded-sm"></div>
</div>

<div className="p-6 flex-1 bg-white flex flex-col gap-4">
<div className="w-1/3 h-4 bg-slate-100 rounded-sm mb-2"></div>
<div className="grid grid-cols-2 gap-3">
<div className="h-16 bg-slate-50 border border-slate-100 rounded-lg p-3">
<div className="w-6 h-6 bg-slate-200 rounded-full mb-2"></div>
<div className="w-1/2 h-2 bg-slate-200 rounded-sm"></div>
</div>
<div className="h-16 bg-slate-50 border border-slate-100 rounded-lg p-3">
<div className="w-6 h-6 bg-slate-200 rounded-full mb-2"></div>
<div className="w-1/2 h-2 bg-slate-200 rounded-sm"></div>
</div>
</div>
<div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg mt-2"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
<h4 className="text-lg font-semibold tracking-tight text-white">Apex Performance Group</h4>
<p className="text-xs text-slate-400 mt-1">Automated onboarding ecosystem</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-slate-200" id="solution">
<div className="max-w-5xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950 mb-4">
                    The Acquisition Architecture.
                </h2>
<p className="text-sm text-slate-500 font-normal">
                    We partner with you to engineer a scalable asset that handles the heavy lifting of building trust and securing high-value bookings.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-12 gap-x-16">

<div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-950" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Magnetic Messaging</h3>
<p className="text-sm text-slate-500 mb-4 font-normal leading-relaxed">
                        We translate your nuanced expertise into clear, compelling copy that speaks directly to the desires of your most profitable clients.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Resonate instantly with premium buyers.
                        </li>
</ul>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-950" icon="solar:routing-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Frictionless Journeys</h3>
<p className="text-sm text-slate-500 mb-4 font-normal leading-relaxed">
                        We design intuitive pathways that guide visitors effortlessly from initial curiosity to scheduling a consultation.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Maximize conversion rates on critical pages.
                        </li>
</ul>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-950" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Connected Stack</h3>
<p className="text-sm text-slate-500 mb-4 font-normal leading-relaxed">
                        We unify your essential software into one seamless ecosystem, turning a chaotic backend into a streamlined engine.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Reclaim hours of administrative time.
                        </li>
</ul>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
<iconify-icon className="text-slate-950" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Revenue Optimization</h3>
<p className="text-sm text-slate-500 mb-4 font-normal leading-relaxed">
                        We build with performance at the core, ensuring your site is structurally sound, fast, and primed for discovery.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Lightning-fast load times across all devices.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-950">
<h3 className="font-medium text-sm">How long does the entire process take?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-slate-400" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-slate-950" icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-normal leading-relaxed">
                        Our standard timeline is 4-6 weeks from our kickoff call to launch. This ensures we have ample time for deep research, custom design, and rigorous testing without dragging out the process.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-950">
<h3 className="font-medium text-sm">Do I need to write my own website copy?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-slate-400" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-slate-950" icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-normal leading-relaxed">
                        No. We handle the strategic copywriting. During onboarding, we conduct a deep-dive interview to extract your voice, expertise, and unique value proposition, which we then translate into conversion-focused copy.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-950">
<h3 className="font-medium text-sm">What platforms do you build on?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-slate-400" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-slate-950" icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 font-normal leading-relaxed">
                        We primarily build on Webflow and Next.js, depending on your specific needs. Both offer enterprise-grade performance, robust SEO capabilities, and a seamless editing experience for you post-launch.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6" id="book">
<div className="max-w-4xl mx-auto bg-slate-950 text-white rounded-2xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-gradient-to-b from-white/10 to-transparent blur-3xl pointer-events-none rounded-full opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                    Ready to reflect your true expertise?
                </h2>
<p className="text-sm text-slate-400 mb-10 max-w-xl mx-auto font-normal">
                    Let's discuss your current bottlenecks and map out a strategy to elevate your digital presence. 
                </p>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center bg-white text-slate-950 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-100 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
                        Book Your Strategy Call
                    </a>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>30 minutes. No pitch. No commitment.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200/60 py-10 px-6 bg-white">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-semibold tracking-tighter text-xl text-slate-950 flex items-center gap-2">
<div className="w-6 h-6 bg-slate-950 rounded flex items-center justify-center">
<span className="text-white text-xs tracking-tighter">AB</span>
</div>
</div>
<p className="text-xs text-slate-500 font-normal">
                © 2024 AB Web Studio. All rights reserved.
            </p>
<div className="flex gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-950 transition-colors" href="#">Twitter / X</a>
<a className="hover:text-slate-950 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
