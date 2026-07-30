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
            manrope: ['Manrope', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
            satoshi: ['Satoshi', 'sans-serif'],
          }
        }
      }
    }
  
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
      
<header className="max-w-2xl mx-auto text-center pt-24 pb-12 px-4">
<h1 className="font-satoshi text-3xl md:text-5xl text-white font-normal tracking-tight mb-3">Pricing for every team</h1>
<p className="text-white/60 text-base md:text-lg">Simple plans. No hidden fees. Start free, scale as you grow.</p>
</header>
<main className="max-w-5xl mx-auto px-4">
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass border border-white/10 rounded-xl p-8 flex flex-col items-start">
<div className="text-white font-manrope font-semibold mb-2">Starter</div>
<div className="flex items-end mb-4">
<span className="text-3xl font-satoshi text-white font-semibold">$0</span>
<span className="ml-1 text-base text-white/40">/mo</span>
</div>
<ul className="mb-7 space-y-2 text-sm text-white/80">
<li>1 workspace</li>
<li>Up to 2 collaborators</li>
<li>Schema visualization</li>
</ul>
<a className="mt-auto inline-block w-full text-center py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition" href="#">Get Started</a>
</div>

<div className="glass border border-indigo-500/30 rounded-xl p-8 flex flex-col items-start md:scale-105">
<div className="text-white font-manrope font-semibold mb-2">Pro</div>
<div className="flex items-end mb-4">
<span className="text-3xl font-satoshi text-white font-semibold">$29</span>
<span className="ml-1 text-base text-white/40">/mo</span>
</div>
<ul className="mb-7 space-y-2 text-sm text-white/80">
<li>Unlimited workspaces</li>
<li>Up to 20 collaborators</li>
<li>AI migration suggestions</li>
</ul>
<a className="mt-auto inline-block w-full text-center py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition" href="#">Start Free Trial</a>
</div>

<div className="glass border border-white/10 rounded-xl p-8 flex flex-col items-start">
<div className="text-white font-manrope font-semibold mb-2">Enterprise</div>
<div className="flex items-end mb-4">
<span className="text-3xl font-satoshi text-white font-semibold">Custom</span>
</div>
<ul className="mb-7 space-y-2 text-sm text-white/80">
<li>Unlimited workspaces</li>
<li>Unlimited collaborators</li>
<li>Priority support</li>
</ul>
<a className="mt-auto inline-block w-full text-center py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition" href="#">Contact Sales</a>
</div>
</section>

<section className="mt-16">
<table className="w-full text-sm glass rounded-xl border border-white/10 overflow-hidden">
<thead>
<tr>
<th className="text-left py-3 px-3 font-manrope text-white/80 font-normal">Features</th>
<th className="py-3 px-3 font-manrope text-white/50 font-normal">Starter</th>
<th className="py-3 px-3 font-manrope text-white/50 font-normal">Pro</th>
<th className="py-3 px-3 font-manrope text-white/50 font-normal">Enterprise</th>
</tr>
</thead>
<tbody className="text-white/70">
<tr className="border-t border-white/10">
<td className="py-3 px-3">Workspaces</td>
<td className="text-center">1</td>
<td className="text-center">Unlimited</td>
<td className="text-center">Unlimited</td>
</tr>
<tr className="border-t border-white/10">
<td className="py-3 px-3">Collaborators</td>
<td className="text-center">2</td>
<td className="text-center">20</td>
<td className="text-center">Unlimited</td>
</tr>
<tr className="border-t border-white/10">
<td className="py-3 px-3">Schema Visualization</td>
<td className="text-center">✓</td>
<td className="text-center">✓</td>
<td className="text-center">✓</td>
</tr>
<tr className="border-t border-white/10">
<td className="py-3 px-3">AI Migration Suggestions</td>
<td className="text-center text-white/30">–</td>
<td className="text-center">✓</td>
<td className="text-center">✓</td>
</tr>
<tr className="border-t border-white/10">
<td className="py-3 px-3">Priority Support</td>
<td className="text-center text-white/30">–</td>
<td className="text-center text-white/50">Business hours</td>
<td className="text-center">24/7</td>
</tr>
</tbody>
</table>
</section>

<section className="mt-16 text-center pb-24">
<h2 className="text-white font-manrope text-2xl mb-3">Ready to get started?</h2>
<a className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-7 py-2 rounded-lg text-base" href="#">Start for Free</a>
</section>
</main>

    </>
  );
}
