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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<span className="iconify text-zinc-900" data-icon="lucide:layers" data-inline="false" data-width="20"></span>
                FRAMEWORK
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#problems">The Problem</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">The Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors" href="#consultation">
                Book Consultation
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-zinc-50 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                Practical Strategy, Not Theory
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                Build a landing page that sells your services.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                A practical consultation to master the landing page framework on your own business first—so you can confidently sell the same system to your clients.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group" href="#consultation">
                    Book Strategy Session
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-md hover:bg-zinc-50 transition-colors" href="#process">
                    How it works
                </a>
</div>
<p className="mt-6 text-xs text-zinc-400 font-medium">
                No long-term commitment. One-time deep dive.
            </p>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="problems">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Great creative work.<br/>Invisible value.</h2>
<p className="text-zinc-500 leading-relaxed mb-8">
                        Most designers are stuck on the "referral roller coaster." You do excellent work, but you struggle to articulate *why* it matters to new prospects without a warm introduction.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-400 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="18"></span>
<span><strong>No clear offer:</strong> "I do everything" usually means you sell nothing.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-400 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="18"></span>
<span><strong>Inconsistent inquiries:</strong> Feast or famine months with no control.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-400 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="18"></span>
<span><strong>The portfolio trap:</strong> Hoping pretty images will close high-ticket deals.</span>
</li>
</ul>
</div>
<div className="grid gap-6">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<span className="iconify text-zinc-900 mb-4" data-icon="lucide:monitor-x" data-width="24"></span>
<h3 className="font-medium text-zinc-900 mb-2">The Website Problem</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Your current portfolio shows <em>what</em> you can make, but it fails to explain <em>how</em> you solve business problems. It's a gallery, not a sales tool.
                        </p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<span className="iconify text-zinc-900 mb-4" data-icon="lucide:message-square-off" data-width="24"></span>
<h3 className="font-medium text-zinc-900 mb-2">The Positioning Gap</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            You know you're worth more, but you haven't built the argument to prove it before the sales call happens.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-100">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                The skill isn't the problem.<br/>
<span className="text-zinc-400">The structure is.</span>
</h2>
<p className="text-zinc-600 text-lg leading-relaxed font-light">
                To command higher rates and control your lead flow, you don't need to learn a new design tool. You need to treat your own business like your most important client project. You need a landing page framework that sells <strong>you</strong>.
            </p>
</div>
</section>

<section className="py-24 px-6" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">The Consultation</span>
<h2 className="text-3xl font-semibold tracking-tight mt-2">How we build your system</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-zinc-100 -z-10"></div>

<div className="bg-white pt-4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<span className="iconify" data-icon="lucide:focus" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">1. Clarify &amp; Position</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We strip away the noise. We identify exactly who you serve, the specific problem you solve, and articulate your unique mechanism. No more "I do everything."
                    </p>
</div>

<div className="bg-white pt-4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<span className="iconify" data-icon="lucide:layout-template" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">2. The Framework</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We map out the copy and structure of your high-converting landing page together. You learn the psychology behind every section, headline, and CTA.
                    </p>
</div>

<div className="bg-white pt-4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<span className="iconify" data-icon="lucide:repeat" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">3. Rinse &amp; Repeat</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        This isn't just for you. You walk away with a scalable system. You can now sell "Landing Page Strategy" as a high-value deliverable to your own clients.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Why this is different</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 bg-zinc-800 p-2 rounded-md">
<span className="iconify text-zinc-100" data-icon="lucide:hammer" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-zinc-100">Applied, not abstract</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                                We don't talk about theory. We work directly on <em>your</em> business offering. You leave with a blueprint you can implement immediately.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-zinc-800 p-2 rounded-md">
<span className="iconify text-zinc-100" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-zinc-100">A transferable asset</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                                By fixing your own marketing, you unlock a new service tier for your clients. Move from selling "design" to selling "commercial outcomes."
                            </p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-800/50 border border-white/10 p-8 rounded-2xl">
<blockquote className="text-lg font-light text-zinc-300 italic mb-6">
                    "I finally understood how to sell my value. Then I used the exact same structure for a client project the next week and doubled my fee."
                </blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-semibold">JD</div>
<div className="text-sm text-zinc-400">Freelance Brand Designer</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="consultation">
<div className="max-w-3xl mx-auto">
<div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="p-8 md:p-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">The Strategy Session</h2>
<p className="text-zinc-500 mt-2">One intensive session to fix your positioning.</p>
</div>
<div className="px-3 py-1 bg-zinc-100 rounded text-xs font-medium text-zinc-600 uppercase tracking-wide">
                            90 Minutes
                        </div>
</div>
<div className="h-px bg-zinc-100 mb-8"></div>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-900" data-icon="lucide:check" data-width="18"></span>
<span>Deep dive into your target audience and offer</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-900" data-icon="lucide:check" data-width="18"></span>
<span>Complete structural outline of your new landing page</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-900" data-icon="lucide:check" data-width="18"></span>
<span>Copywriting hooks and headline formulas</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-900" data-icon="lucide:check" data-width="18"></span>
<span>The "Client Resell" playbook (PDF guide)</span>
</div>
</div>
<a className="block w-full bg-zinc-900 text-white text-center py-4 rounded-lg font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10" href="#">
                        Book Your Slot - $350
                    </a>
<p className="text-center text-xs text-zinc-400 mt-4">
                        100% money-back guarantee if you don't feel equipped to build.
                    </p>
</div>
<div className="bg-zinc-50 px-8 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
<span>Limited spots per month</span>
<span>Secure Stripe Payment</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Common Questions</h2>
<div className="space-y-4">
<details className="group border border-zinc-200 rounded-lg bg-white open:ring-1 open:ring-zinc-900/5 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-zinc-900 select-none">
                    Is this a sales call for a bigger service?
                    <span className="iconify transform transition-transform duration-200 group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                    No. This is a paid consulting session. My goal is to teach you the system so you can do it yourself, not to upsell you on a "done-for-you" web design package.
                </div>
</details>
<details className="group border border-zinc-200 rounded-lg bg-white open:ring-1 open:ring-zinc-900/5 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-zinc-900 select-none">
                    Do I need to be a web designer?
                    <span className="iconify transform transition-transform duration-200 group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                    Not necessarily. This is perfect for UX designers, brand strategists, and copywriters. If you offer a creative service, this framework applies to you.
                </div>
</details>
<details className="group border border-zinc-200 rounded-lg bg-white open:ring-1 open:ring-zinc-900/5 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-zinc-900 select-none">
                    What happens after the call?
                    <span className="iconify transform transition-transform duration-200 group-open:rotate-180 text-zinc-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                    You will receive a recording of our session, the completed landing page structure document, and a checklist for implementing this system for your future clients.
                </div>
</details>
</div>
</section>

<footer className="py-12 border-t border-zinc-100 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight text-zinc-900 flex items-center gap-2">
<span className="iconify" data-icon="lucide:layers" data-width="16"></span>
                FRAMEWORK
            </div>
<div className="text-sm text-zinc-400">
                © 2024 Framework Consulting. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
