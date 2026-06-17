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
      
    document.addEventListener('DOMContentLoaded', () => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(el => {
          if (el.isIntersecting) el.target.classList.remove('opacity-0', 'translate-y-6', 'blur-sm');
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('[data-fade]').forEach(e => obs.observe(e));
      lucide.createIcons();
    });
  


    const ctx = document.getElementById('roiChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
        datasets: [
          {
            label: 'Traditional Ads',
            data: [0, -500, -900, -1300, -1700, -2100],
            borderColor: '#ef4444',
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: 'Marketing Operator',
            data: [0, 800, 1600, 2600, 3800, 5200],
            borderColor: '#6366f1',
            borderWidth: 2,
            tension: 0.4
          }
        ]
      },
      options: {
        plugins:{legend:{labels:{color:'#a1a1aa'}}},
        scales:{
          x:{ticks:{color:'#a1a1aa'}, grid:{color:'#27272a'}},
          y:{ticks:{color:'#a1a1aa'}, grid:{color:'#27272a'}}
        }
      }
    });
  

document.getElementById('year').textContent = new Date().getFullYear();
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
      



<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-gray-950/70 border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<span className="text-lg font-semibold tracking-tight text-white">Marketing Operator</span>
<a className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition" href="https://saites.lions.lv/widget/bookings/ai-str-call">
        Unlock Access
      </a>
</div>
</header>

<section className="relative isolate pt-32 lg:pt-40 pb-28">
<img alt="" className="absolute inset-0 -z-10 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/80 to-gray-950"></div>
<div className="max-w-4xl mx-auto px-6 text-center space-y-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white opacity-0 translate-y-6 blur-sm" data-fade="">
        What if every Euro you spent on ads came back with friends?
      </h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl opacity-0 translate-y-6 blur-sm" data-fade="">
        Our automated system builds and optimizes performance-based campaigns. We handle the complexity—you only pay after you profit.
      </p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium text-sm transition opacity-0 translate-y-6 blur-sm" data-fade="" href="https://saites.lions.lv/widget/bookings/ai-str-call">
<i className="w-4 h-4" data-lucide="rocket"></i> Unlock Access
      </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="opacity-0 translate-y-6 blur-sm" data-fade="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Does This Sound Familiar?</h2>
<p className="text-gray-300">
          Your ad budget feels more like a “donation” than an investment. You pour €3,000+ into Facebook &amp; Instagram every month, yet can’t trace it back to real revenue.
        </p>
<p className="mt-6 text-gray-400">
          Over a year, that’s €36,000 down a black hole. Meanwhile, a competitor with a sharper system snatches the market share that should be yours.
        </p>
</div>
<img alt="" className="rounded-xl shadow-lg opacity-0 translate-y-6 blur-sm" data-fade="" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<hr className="border-gray-800"/>
<div className="grid md:grid-cols-2 gap-12 items-center">
<img alt="" className="rounded-xl shadow-lg order-2 md:order-1 opacity-0 translate-y-6 blur-sm" data-fade="" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="order-1 md:order-2 opacity-0 translate-y-6 blur-sm" data-fade="">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">The Biggest Risk is Doing Nothing</h3>
<p className="text-gray-300">
          Sticking with the status-quo isn’t cautious—it’s guaranteeing the same losses. Every month you delay, competitors grow smarter and ads grow pricier.
        </p>
</div>
</div>
</section>

<section className="bg-gray-900/40 py-24">
<div className="max-w-6xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white opacity-0 translate-y-6 blur-sm" data-fade="">
        Introducing: Marketing Operator
      </h2>
<p className="max-w-3xl mx-auto text-gray-300 opacity-0 translate-y-6 blur-sm" data-fade="">
        A unified, automated system that builds <em>and</em> manages high-conversion campaigns—profit first.
      </p>
</div>
<div className="mt-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<i className="w-6 h-6 text-indigo-500 mb-4" data-lucide="zap"></i>
<h4 className="font-medium text-xl text-white mb-2">Automated Campaign Creation</h4>
<p className="text-gray-400 text-sm">Launch multi-touchpoint funnels without lifting a finger. Focus on your product; we’ll handle the rest.</p>
</div>

<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<i className="w-6 h-6 text-indigo-500 mb-4" data-lucide="activity"></i>
<h4 className="font-medium text-xl text-white mb-2">Continuous Optimization</h4>
<p className="text-gray-400 text-sm">Your campaigns evolve 24/7, reallocating budget to what drives profit—automatically.</p>
</div>

<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<i className="w-6 h-6 text-indigo-500 mb-4" data-lucide="layout"></i>
<h4 className="font-medium text-xl text-white mb-2">Integrated Copy &amp; Landing Pages</h4>
<p className="text-gray-400 text-sm">Ads, copy, and pages crafted as a single unit—turning cold clicks into warm customers.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="opacity-0 translate-y-6 blur-sm" data-fade="">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">From Leaky Bucket to Profit Engine</h3>
<p className="text-gray-300 mb-6">
          Watch what happens when wasted spend is re-channeled into a precisely targeted funnel.
        </p>
<ul className="space-y-4 text-gray-400 text-sm">
<li className="flex gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>Automatic ad creation</li>
<li className="flex gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>Real-time budget reallocation</li>
<li className="flex gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>Contextual landing experiences</li>
</ul>
</div>
<div className="opacity-0 translate-y-6 blur-sm" data-fade="">
<div className="relative h-64 w-full">
<canvas id="roiChart"></canvas>
</div>
</div>
</div>
</section>



<section className="bg-gray-900/50 py-24">
<div className="max-w-6xl mx-auto px-6 space-y-16">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-white opacity-0 translate-y-6 blur-sm" data-fade="">
        Why This Will Work for You — Even If Others Failed
      </h2>

<div className="overflow-x-auto border border-gray-800 rounded-lg opacity-0 translate-y-6 blur-sm" data-fade="">
<table className="min-w-full text-sm">
<thead className="bg-gray-800 text-gray-300">
<tr>
<th className="py-3 px-4 text-left font-medium">Factor</th>
<th className="py-3 px-4 text-left font-medium">Old Way</th>
<th className="py-3 px-4 text-left font-medium">Marketing Operator</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-gray-800">
<td className="py-3 px-4">Risk</td>
<td className="py-3 px-4 text-gray-400">You pay €3k-€10k/mo up-front</td>
<td className="py-3 px-4 text-gray-400">You pay only after profit</td>
</tr>
<tr className="border-t border-gray-800">
<td className="py-3 px-4">Speed</td>
<td className="py-3 px-4 text-gray-400">Months of hiring &amp; testing</td>
<td className="py-3 px-4 text-gray-400">Campaigns ready in days</td>
</tr>
<tr className="border-t border-gray-800">
<td className="py-3 px-4">Integration</td>
<td className="py-3 px-4 text-gray-400">Disconnected contractors</td>
<td className="py-3 px-4 text-gray-400">Unified, automated system</td>
</tr>
<tr className="border-t border-gray-800">
<td className="py-3 px-4">Optimization</td>
<td className="py-3 px-4 text-gray-400">Manual &amp; slow</td>
<td className="py-3 px-4 text-gray-400">24/7 AI-powered</td>
</tr>
</tbody>
</table>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<img alt="" className="rounded-md mb-4" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h4 className="font-medium text-lg text-white mb-2">SaaS Platform</h4>
<p className="text-gray-400 text-sm mb-4">From €300 CPA to €85 in 45 days.</p>
<div className="flex items-center gap-2 text-indigo-500 text-xs"><i className="w-4 h-4" data-lucide="arrow-up-right"></i> View Details</div>
</div>
<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<img alt="" className="rounded-md mb-4" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<h4 className="font-medium text-lg text-white mb-2">E-commerce Brand</h4>
<p className="text-gray-400 text-sm mb-4">Doubled ROAS and scaled to 6-figure months.</p>
<div className="flex items-center gap-2 text-indigo-500 text-xs"><i className="w-4 h-4" data-lucide="arrow-up-right"></i> View Details</div>
</div>
<div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<img alt="" className="rounded-md mb-4" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<h4 className="font-medium text-lg text-white mb-2">B2B Services</h4>
<p className="text-gray-400 text-sm mb-4">Reduced CPL by 68% while tripling qualified leads.</p>
<div className="flex items-center gap-2 text-indigo-500 text-xs"><i className="w-4 h-4" data-lucide="arrow-up-right"></i> View Details</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6 space-y-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center opacity-0 translate-y-6 blur-sm" data-fade="">
      Your Complete, Performance-Based Growth Package
    </h2>
<div className="border border-indigo-500/40 rounded-xl p-10 bg-gray-950/60 backdrop-blur-md opacity-0 translate-y-6 blur-sm" data-fade="">
<div className="grid md:grid-cols-2 gap-10">
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Automated Campaign Creation – <span className="text-gray-400">€5,000/mo</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Continuous Optimization – <span className="text-gray-400">€4,000/mo</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Integrated Copy &amp; Landing Page – <span className="text-gray-400">€3,500</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Profit-Based Billing – <span className="text-gray-400">Priceless</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Bonus Reports &amp; Strategy – <span className="text-gray-400">€2,000+</span></li>
</ul>
<div className="space-y-6">
<p className="text-gray-300 text-sm">Total Value: <span className="line-through">€24,499</span></p>
<h3 className="text-2xl font-semibold tracking-tight text-white">You Pay €0 Until We Deliver Profit</h3>
<p className="text-gray-400 text-sm">Only 5 spots in this pilot. Secure yours before a competitor does.</p>
<a className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium text-sm transition" href="https://saites.lions.lv/widget/bookings/ai-str-call">
<i className="w-4 h-4" data-lucide="lock-open"></i> Unlock Access &amp; Apply Now
          </a>
</div>
</div>
</div>
</section>

<section className="bg-gray-900/50 py-24">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">

<details className="group border border-gray-800 rounded-lg p-6">
<summary className="flex items-center justify-between cursor-pointer text-gray-200 font-medium">
            What's the catch with the “pay for profit” model?
            <i className="w-4 h-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-gray-400 text-sm">There is none. We succeed only when you do, aligning incentives perfectly.</p>
</details>
<details className="group border border-gray-800 rounded-lg p-6">
<summary className="flex items-center justify-between cursor-pointer text-gray-200 font-medium">
            How do you define and track “profit”?
            <i className="w-4 h-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-gray-400 text-sm">In our strategy session we agree on revenue minus ad spend &amp; COGS, tracked transparently.</p>
</details>
<details className="group border border-gray-800 rounded-lg p-6">
<summary className="flex items-center justify-between cursor-pointer text-gray-200 font-medium">
            Who is this program NOT for?
            <i className="w-4 h-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-gray-400 text-sm">Startups without product-market fit, low-margin offers, or businesses unable to scale operations.</p>
</details>
<details className="group border border-gray-800 rounded-lg p-6">
<summary className="flex items-center justify-between cursor-pointer text-gray-200 font-medium">
            What exactly do you need from me?
            <i className="w-4 h-4 transition group-open:rotate-45" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-gray-400 text-sm">Your product knowledge, audience insights, and timely feedback—nothing more.</p>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Stop Wasting Ad Spend</h2>
<p className="text-gray-300">Choose clarity, predictability, and profit-driven growth. Apply for your spot in the pilot now.</p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium text-sm transition" href="https://saites.lions.lv/widget/bookings/ai-str-call">
<i className="w-4 h-4" data-lucide="handshake"></i> Unlock Access &amp; Stop Wasting Ad Spend
      </a>
</div>
</section>

<footer className="border-t border-gray-800 py-8 text-center text-xs text-gray-500">
    © <span id="year"></span> Marketing Operator. All rights reserved.
    
</footer>

    </>
  );
}
