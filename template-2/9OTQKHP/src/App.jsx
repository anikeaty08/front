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



    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Split mobile nav
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileNav').classList.toggle('hidden');
    });

    // Chart.js donut
    const ctx = document.getElementById('goalChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [72, 28],
          backgroundColor: ['#a855f7', '#e0e7ff'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '75%',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
  
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="text-xl tracking-tight font-semibold text-purple-600" href="#">BB</a>
<nav className="hidden md:flex gap-8 text-sm font-medium items-center">
<a className="hover:text-purple-600 transition" href="#features">Features</a>
<a className="hover:text-purple-600 transition" href="#reviews">Reviews</a>
<a className="hover:text-purple-600 transition" href="#pricing">Pricing</a>
<a className="hover:text-purple-600 transition" href="#faq">FAQ</a>
</nav>
<div className="flex gap-3 items-center">
<a className="hidden sm:inline-block px-3 py-2 text-sm font-medium rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition" href="#">Sign in</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 text-white shadow hover:bg-purple-500 transition" href="#">Get the app</a>
<button className="md:hidden p-2 rounded hover:bg-gray-100" id="menuBtn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-gray-200" id="mobileNav">
<div className="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
<a className="hover:text-purple-600" href="#features">Features</a>
<a className="hover:text-purple-600" href="#reviews">Reviews</a>
<a className="hover:text-purple-600" href="#pricing">Pricing</a>
<a className="hover:text-purple-600" href="#faq">FAQ</a>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl"></div>
<div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-pink-300/30 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
<div className="flex flex-col justify-center animate-fadeUp" style={{'--delay': `0s`}}>
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-gray-900 mb-6">Split expenses & smash goals together.</h1>
<p className="text-lg text-gray-700 mb-8">BuddyBudget makes sharing rent, groceries, and adventures effortless—so you can focus on the fun, not the funds.</p>
<div className="flex gap-3">
<a className="px-5 py-3 rounded-lg bg-purple-600 text-white font-medium shadow hover:bg-purple-500 transition animate-fadeUp" href="#" style={{'--delay': `.1s`}}>Download free</a>
<a className="px-5 py-3 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition animate-fadeUp" href="#video" style={{'--delay': `.15s`}}>Watch demo</a>
</div>
</div>

<div className="relative animate-fadeUp" style={{'--delay': `.2s`}}>
<div className="mx-auto w-64 h-[540px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900">
<img alt="BuddyBudget App screenshot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="features">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 text-center mb-4 animate-fadeUp">Why you’ll love BuddyBudget</h2>
<p className="text-center text-gray-600 mb-16 animate-fadeUp" style={{'--delay': `.05s`}}>Simple tools, cheerful design, and powerful insights—perfect for besties, couples, and crews.</p>
<div className="grid md:grid-cols-3 gap-12">

<div className="animate-fadeUp" style={{'--delay': `.1s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-purple-100 text-purple-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="split"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Instant Splits</h3>
<p className="text-gray-600">Add an expense, choose buddies, and let the app calculate who owes what—no spreadsheets needed.</p>
</div>
<div className="animate-fadeUp" style={{'--delay': `.15s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-pink-100 text-pink-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="piggy-bank"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Shared Goals</h3>
<p className="text-gray-600">Set a trip fund or furniture budget and track progress together with motivational nudges.</p>
</div>
<div className="animate-fadeUp" style={{'--delay': `.2s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="bell-ring"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Gentle Reminders</h3>
<p className="text-gray-600">Friendly notifications keep everyone on track—no more awkward “you owe me” texts.</p>
</div>
<div className="animate-fadeUp" style={{'--delay': `.25s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Smart Insights</h3>
<p className="text-gray-600">See where money goes each month and get tips to save together.</p>
</div>
<div className="animate-fadeUp" style={{'--delay': `.3s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-teal-100 text-teal-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Bank-Level Security</h3>
<p className="text-gray-600">All data is encrypted so your finances stay private and protected.</p>
</div>
<div className="animate-fadeUp" style={{'--delay': `.35s`}}>
<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
<p className="text-gray-600">Designed for speed so you can log an expense in seconds, even offline.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-center animate-fadeUp">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 mb-4">Track goals visually</h2>
<p className="text-gray-700 mb-8">A colorful progress ring celebrates milestones so everyone stays pumped.</p>
</div>
<div className="animate-fadeUp">
<div className="relative bg-white border border-gray-200 shadow rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<p className="font-medium text-gray-900">Road-trip Fund</p>
<span className="text-sm text-gray-600">$720 / $1000</span>
</div>
<div>
<div className="relative">
<div>

<div className="mx-auto w-56 h-56">
<canvas id="goalChart"></canvas>
</div>
</div>
<p className="absolute inset-0 flex items-center justify-center font-semibold text-xl text-gray-900">72%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="reviews">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 text-center mb-16 animate-fadeUp">Roomies & couples love us</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm animate-fadeUp">
<div className="flex items-center gap-4 mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=72&q=80" />
<div>
<p className="font-medium">Taylor K.</p>
<p className="text-xs text-gray-500">Brooklyn, NY</p>
</div>
</div>
<p className="text-gray-600">“No more spreadsheets! We paid our rent, Wi-Fi, and Netflix in one tap. Life-changing.”</p>
</div>
<div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm animate-fadeUp" style={{'--delay': `.05s`}}>
<div className="flex items-center gap-4 mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=72&q=80" />
<div>
<p className="font-medium">Jin & Alex</p>
<p className="text-xs text-gray-500">Austin, TX</p>
</div>
</div>
<p className="text-gray-600">“We’re saving for a puppy together and the progress ring keeps us motivated!”</p>
</div>
<div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm animate-fadeUp" style={{'--delay': `.1s`}}>
<div className="flex items-center gap-4 mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=72&q=80" />
<div>
<p className="font-medium">Priya S.</p>
<p className="text-xs text-gray-500">San Francisco, CA</p>
</div>
</div>
<p className="text-gray-600">“The reminders are super polite. No more awkward Venmo requests.”</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="mx-auto max-w-7xl px-6 text-center">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 mb-4">Pick your plan</h2>
<p className="mb-16 text-gray-600">Start free, upgrade anytime.</p>
<div className="flex flex-col lg:flex-row gap-8 justify-center">

<div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm w-full max-w-sm animate-fadeUp">
<h3 className="text-lg font-semibold mb-2">Free</h3>
<p className="text-3xl font-semibold text-gray-900 mb-4">$0<span className="text-lg font-normal text-gray-600">/mo</span></p>
<ul className="mb-8 space-y-3 text-gray-600 text-sm">
<li>Unlimited splits</li>
<li>2 shared goals</li>
<li>Basic reminders</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition" href="#">Get started</a>
</div>

<div className="border-2 border-purple-600 rounded-xl p-8 bg-white shadow-lg w-full max-w-sm animate-fadeUp" style={{'--delay': `.05s`}}>
<h3 className="text-lg font-semibold mb-2">Plus</h3>
<p className="text-3xl font-semibold text-gray-900 mb-4">$4<span className="text-lg font-normal text-gray-600">/mo</span></p>
<ul className="mb-8 space-y-3 text-gray-600 text-sm">
<li>Unlimited splits & goals</li>
<li>Premium reminders & nudges</li>
<li>Priority support</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition" href="#">Start 14-day trial</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="faq">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 text-center mb-12">Frequently asked</h2>
<div className="divide-y divide-gray-200">

<details className="group py-6 animate-fadeUp">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-medium text-gray-900">Does everyone need the app to split?</span>
<i className="w-5 h-5 stroke-[1.5] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-gray-600">Nope! Share an invite link—buddies can settle up via PayPal or Venmo without downloading.</p>
</details>
<details className="group py-6 animate-fadeUp" style={{'--delay': `.05s`}}>
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-medium text-gray-900">Is my bank info secure?</span>
<i className="w-5 h-5 stroke-[1.5] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-gray-600">Yes. We use 256-bit encryption and never store your credentials.</p>
</details>
<details className="group py-6 animate-fadeUp" style={{'--delay': `.1s`}}>
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-medium text-gray-900">Can we export our data?</span>
<i className="w-5 h-5 stroke-[1.5] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-gray-600">Sure thing! Export to CSV anytime under Settings → Data.</p>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6 text-center">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 mb-6">Ready to buddy up?</h2>
<p className="text-lg text-gray-700 mb-8">Download BuddyBudget and make money matters a breeze.</p>
<a className="inline-block px-6 py-4 rounded-lg bg-purple-600 text-white font-medium shadow-lg hover:bg-purple-500 transition" href="#">Get the app</a>
</div>
</section>

<footer className="border-t border-gray-200 bg-gray-50">
<div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
<div>
<a className="text-lg tracking-tight font-semibold text-purple-600" href="#">BB</a>
<p className="mt-4 text-gray-600">© <span id="year"></span> BuddyBudget Inc.</p>
</div>
<div className="space-y-2">
<h4 className="font-medium text-gray-900">Product</h4>
<a className="block hover:text-purple-600" href="#features">Features</a>
<a className="block hover:text-purple-600" href="#pricing">Pricing</a>
<a className="block hover:text-purple-600" href="#reviews">Reviews</a>
</div>
<div className="space-y-2">
<h4 className="font-medium text-gray-900">Legal</h4>
<a className="block hover:text-purple-600" href="#">Privacy</a>
<a className="block hover:text-purple-600" href="#">Terms</a>
<a className="block hover:text-purple-600" href="#">Security</a>
</div>
</div>
</footer>


    </>
  );
}
