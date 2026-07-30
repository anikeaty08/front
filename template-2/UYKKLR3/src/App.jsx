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
      
    document.addEventListener("DOMContentLoaded", function () {
      let mainTab = 0; // 0: Free, 1: Paid

      function updateTabs() {
        document.getElementById('tab-free').classList.toggle('border-blue-600', mainTab === 0);
        document.getElementById('tab-paid').classList.toggle('border-blue-600', mainTab === 1);

        document.getElementById('free-tiers').classList.toggle('hidden', mainTab !== 0);
        document.getElementById('paid-tiers').classList.toggle('hidden', mainTab !== 1);
      }

      document.getElementById('tab-free').onclick = () => { mainTab = 0; updateTabs(); };
      document.getElementById('tab-paid').onclick = () => { mainTab = 1; updateTabs(); };

      document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const dir = this.dataset.dir;
          const carousel = document.getElementById('paid-carousel');
          const scrollAmount = carousel.offsetWidth * 0.6;
          carousel.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        });
      });

      updateTabs();
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
      
<div className="w-full max-w-5xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>

<div className="flex justify-center space-x-8 mb-6 border-b border-gray-200">
<button className="pb-2 border-b-4 border-transparent font-medium focus:outline-none text-gray-700 transition" id="tab-free">Free tiers</button>
<button className="pb-2 border-b-4 border-transparent font-medium focus:outline-none text-gray-700 transition" id="tab-paid">Paid tiers</button>
</div>

<div id="free-tiers">
<div className="flex flex-col md:flex-row justify-center gap-8">

<div className="max-w-md w-full bg-white rounded-xl shadow p-8 text-center transition">
<div className="text-2xl font-semibold mb-2">Everyone</div>
<div className="text-4xl font-extrabold text-blue-600 mb-4">Free</div>
<ul className="space-y-2 mb-6 text-gray-700">
<li>🌍 Localisation news</li>
<li>🎧 Expert podcasts</li>
</ul>
<button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition">Get started</button>
</div>

<div className="max-w-md w-full bg-white rounded-xl shadow p-8 text-center transition">
<div className="text-2xl font-semibold mb-2">Lemmings</div>
<div className="text-4xl font-extrabold text-blue-600 mb-4">Free</div>
<ul className="space-y-2 mb-6 text-gray-700">
<li>📰 Unlimited news articles</li>
<li>📬 Slator Weekly</li>
<li>🧰 Linguistic Toolbox Monthly</li>
</ul>
<button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition">Subscribe Free</button>
</div>
</div>
</div>

<div className="hidden" id="paid-tiers">
<div className="relative">
<button aria-label="Scroll left" className="carousel-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 md:hidden" data-dir="left">
<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button aria-label="Scroll right" className="carousel-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 md:hidden" data-dir="right">
<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex overflow-x-auto space-x-6 py-2 px-1 scrollbar-hide md:justify-center md:overflow-visible" id="paid-carousel">

<div className="min-w-[18rem] w-full max-w-xs flex-shrink-0 bg-white rounded-xl shadow p-8 text-center">
<div className="text-xl font-semibold mb-1">Starter</div>
<div className="text-sm text-gray-500 mb-1">Essential localization insights</div>
<div className="text-3xl font-extrabold text-blue-600 mb-4">$750<span className="text-base font-normal text-gray-500">/yr</span></div>
<ul className="space-y-2 mb-6 text-gray-700 text-left">
<li>✅ Subscriber Content</li>
<li>✅ Slator Daily</li>
<li>✅ Real-Time Ticker of Listed LSPs</li>
</ul>
<button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition">Choose Starter</button>
</div>

<div className="min-w-[18rem] w-full max-w-xs flex-shrink-0 bg-white rounded-xl shadow p-8 text-center border-2 border-blue-600 scale-105">
<div className="text-xl font-semibold mb-1">Growth</div>
<div className="text-sm text-gray-500 mb-1">Enhanced industry coverage</div>
<div className="text-3xl font-extrabold text-blue-600 mb-4">$2,200<span className="text-base font-normal text-gray-500">/yr</span></div>
<ul className="space-y-2 mb-6 text-gray-700 text-left">
<li>✅ Everything in Starter</li>
<li>✅ RFP Center</li>
<li>✅ Investor Database</li>
<li>✅ Annual Market Report</li>
</ul>
<button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition">Choose Growth</button>
</div>

<div className="min-w-[18rem] w-full max-w-xs flex-shrink-0 bg-white rounded-xl shadow p-8 text-center">
<div className="text-xl font-semibold mb-1">Pro</div>
<div className="text-sm text-gray-500 mb-1">Complete industry coverage</div>
<div className="text-3xl font-extrabold text-blue-600 mb-4">$3,900<span className="text-base font-normal text-gray-500">/yr</span></div>
<ul className="space-y-2 mb-6 text-gray-700 text-left">
<li>✅ Everything in Growth</li>
<li>✅ Access New & Past 2 Years of Research</li>
<li>✅ Access Past 2 Years of Briefings</li>
<li>✅ SlatorCon In-Person and Remote Videos</li>
<li>✅ LSP Master List as File Download</li>
</ul>
<button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition">Choose Pro</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
