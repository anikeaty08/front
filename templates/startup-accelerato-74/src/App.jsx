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
      
<main className="py-12 px-6">
<div className="max-w-5xl mx-auto">

<div className="mb-16 text-center max-w-2xl mx-auto">
<h1 className="text-4xl font-semibold tracking-tight mb-4">You're One Step Away From Fixing Your Revenue Problem.</h1>
<p className="text-slate-600 text-lg">Complete your enrolment below and you'll have immediate, full access to the 90-Day Revenue Revolution in minutes.</p>
</div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-12">
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-lg mb-6">A Quick Reminder of Everything You're Getting:</h3>
<ul className="space-y-4 text-sm text-slate-700">
<li className="flex gap-3"><iconify-icon className="text-[#129CCE] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> <b>Module 1: Rapid Revenue Acceleration</b> — the system for generating $5K–$20K in your first 30 days</li>
<li className="flex gap-3"><iconify-icon className="text-[#129CCE] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> <b>Module 2: CEO Sanity System</b> — reclaim 20+ hours/week while increasing your output</li>
<li className="flex gap-3"><iconify-icon className="text-[#129CCE] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> <b>Module 3: The Lean Scaling Blueprint</b> — build a revenue engine that runs without you grinding 24/7</li>
<li className="flex gap-3"><iconify-icon className="text-[#129CCE] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> <b>Complete Worksheet Library</b> — practical implementation tools for every single lesson</li>
</ul>
<div className="mt-8 pt-6 border-t border-slate-100">
<p className="text-slate-500">Total value: <span className="line-through">$1,688</span></p>
<p className="text-xl font-semibold">Your investment today: $197 <span className="text-sm font-normal text-[#EA5F63]">(limited launch price)</span></p>
</div>
</div>

<div className="space-y-6">
<h4 className="font-semibold text-slate-900">Founders Who've Made This Decision Are Already Seeing Results:</h4>
<div className="bg-white p-6 rounded-2xl border border-slate-200">
<p className="italic text-slate-600 mb-3">"I went from $4K to $14K a month in six weeks. The Zero-to-Revenue Sprint Plan alone was worth ten times what I paid."</p>
<p className="text-sm font-semibold">— Startup Founder, B2B SaaS</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200">
<p className="italic text-slate-600 mb-3">"The CEO Sanity System cut my hours in half and my revenue doubled. I finally feel like I'm running a business instead of drowning in one."</p>
<p className="text-sm font-semibold">— E-commerce Founder</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="sticky top-8 space-y-6">
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<h2 className="text-lg font-semibold mb-6">Complete My Enrolment</h2>
<div className="space-y-4">
<input className="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Full Name" type="text"/>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Email Address" type="email"/>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Card Details" type="text"/>
<button className="w-full bg-[#EA5F63] text-white py-4 rounded-xl font-semibold hover:bg-[#d45458] transition-colors">Pay $197 USD →</button>
<p className="text-[10px] text-center text-slate-400">Instant access. Limited launch price. No subscriptions. No hidden fees.</p>
</div>
</div>
<div className="bg-slate-900 text-slate-300 p-6 rounded-3xl text-xs space-y-4">
<p className="text-white font-semibold">Before You Complete Your Enrolment:</p>
<ul className="space-y-3">
<li>• Secure payment - your card details are fully encrypted</li>
<li>• Instant access - login credentials arrive in your inbox</li>
<li>• No subscription - one-time payment. Nothing recurring.</li>
<li>• No hidden fees - $197 is the complete total cost</li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-20 max-w-3xl mx-auto bg-white p-10 rounded-3xl border border-slate-200">
<h3 className="text-2xl font-semibold tracking-tight mb-6">Still Thinking About It?</h3>
<div className="space-y-4 text-slate-600 leading-relaxed">
<p>The cost of this programme is $197. The cost of staying exactly where you are for another 90 days — in cash burn, missed revenue, wasted hours, and lost momentum — is almost certainly several multiples of that.</p>
<p>One of those costs you $197. The other costs you a lot more than money.</p>
<p>You have a product that can generate revenue. The missing piece is a system. This is the system. You're the founder. Let's build something that lasts.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
