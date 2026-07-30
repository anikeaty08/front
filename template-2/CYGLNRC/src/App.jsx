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



  // Lucide with thinner stroke
  lucide.createIcons({attrs: { 'stroke-width': '1.5' }});

  /* Mobile menu */
  const mobileBtn  = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileBtn.querySelector('i').dataset.lucide =
      mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
    lucide.createIcons({attrs:{'stroke-width':'1.5'}});
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('hidden');
      btn.querySelector('i').classList.toggle('rotate-180');
    });
  });

  /* Intersection reveal animation */
  const revealEls = document.querySelectorAll('.reveal');
  const observer  = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});

  revealEls.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
    observer.observe(el);
  });

  /* Chart */
  const ctx = document.getElementById('liquidityChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [{
        label: 'USD Liquidity (M)',
        data: [12, 19, 14, 22, 20, 25, 28],
        borderColor: '#1e293b',
        backgroundColor: 'rgba(30,41,59,0.05)',
        tension: 0.4,
        fill: true,
        borderWidth: 2
      }]
    },
    options: {
      plugins: {legend: {display: false}},
      scales: {
        y: {beginAtZero: true, grid:{display:false}, ticks:{color:'#64748b'}},
        x: {grid:{display:false}, ticks:{color:'#64748b'}}
      },
      responsive: true,
      maintainAspectRatio: false
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper9copy-d98969f84b43360bb0c164413b743e10" width="100%"></iframe></div>

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b bg-black/90 border-stone-900" style={{}}>
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<a className="flex items-center gap-2 font-medium text-lg tracking-tight text-stone-100 font-geist" href="#" style={{}}>
<i className="w-5 h-5" data-lucide="rocket"></i>
      OrbitEdge
    </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-400" style={{}}>
<a className="transition-colors hover:text-stone-100 font-geist" href="#features" style={{}}>Features</a>
<a className="transition-colors hover:text-stone-100 font-geist" href="#insights" style={{}}>Insights</a>
<a className="transition-colors hover:text-stone-100 font-geist" href="#integrate" style={{}}>Integrations</a>
<a className="transition-colors hover:text-stone-100 font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="transition-colors hover:text-stone-100 font-geist" href="#faq" style={{}}>FAQ</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100 font-geist" href="#" style={{}}>Sign in</a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-all bg-stone-100 text-black hover:bg-stone-200 font-geist" href="#" style={{}}>
        Request demo
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="lg:hidden p-2 rounded-md transition-colors hover:bg-stone-950" id="mobileBtn" style={{}}>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="lg:hidden hidden px-6 pb-4 border-t border-stone-900" id="mobileMenu" style={{}}>
<nav className="flex flex-col gap-4 pt-4 text-sm font-medium text-stone-400" style={{}}>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#features" style={{}}>Features</a>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#insights" style={{}}>Insights</a>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#integrate" style={{}}>Integrations</a>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#faq" style={{}}>FAQ</a>
<a className="py-1 transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Sign in</a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-all w-max mt-2 bg-stone-100 text-black hover:bg-stone-200 font-geist" href="#" style={{}}>
        Request demo
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</nav>
</div>
</header>

<section className="reveal pt-32 pb-12">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-stone-500 font-medium mb-6 tracking-wide text-sm uppercase font-geist" style={{}}>Unified Treasury & Payment Workspace</p>
<h1 className="text-4xl md:text-6xl tracking-tight mb-8 leading-tight font-space-grotesk font-light" style={{}}>
      Power every finance team with a <span className="text-stone-400 font-space-grotesk font-light" style={{}}>real-time</span> command center
    </h1>
<p className="max-w-2xl mx-auto text-xl mb-12 leading-relaxed text-stone-400 font-geist" style={{}}>
      OrbitEdge brings forecasting, reconciliation and risk analytics together—so you can
      orchestrate funds across banks, entities and currencies without switching tabs.
    </p>

<div className="flex flex-wrap justify-center gap-2 mb-16">
<span className="px-4 py-2 rounded-full border text-sm font-medium border-stone-800 text-stone-300 font-geist" style={{}}>Predictive Cashflow</span>
<span className="px-4 py-2 rounded-full border text-sm font-medium border-stone-800 text-stone-300 font-geist" style={{}}>Multi-Entity Ledger</span>
<span className="px-4 py-2 rounded-full border text-sm font-medium border-stone-800 text-stone-300 font-geist" style={{}}>Automated FX Hedges</span>
<span className="px-4 py-2 rounded-full border text-sm font-medium border-stone-800 text-stone-300 font-geist" style={{}}>Audit-Ready Trails</span>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 font-medium px-8 py-3 rounded-md transition-all bg-stone-100 text-black hover:bg-stone-200 font-geist" href="#" style={{}}>
        Get started
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 font-medium transition-colors text-stone-400 hover:text-stone-100 font-geist" href="#" style={{}}>
        Watch overview
        <i className="w-4 h-4" data-lucide="play-circle"></i>
</a>
</div>
</div>

<div className="relative mt-24 max-w-6xl mx-auto px-6">
</div>
</section>

<section className="py-32 reveal bg-stone-950" id="features" style={{}}>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tight mb-12 leading-tight font-space-grotesk font-light" style={{}}>
        Savings, security & speed—re-imagined for finance leads
      </h2>
<div className="space-y-8">

<div className="flex gap-6 items-start">
<div className="p-3 rounded-md border bg-black border-stone-800" style={{}}>
<i className="w-5 h-5 text-stone-300" data-lucide="trending-down" style={{}}></i>
</div>
<div>
<p className="text-2xl mb-1 font-space-grotesk font-light" style={{}}>-37%</p>
<p className="text-stone-400 font-geist" style={{}}>lower transaction fees in month one</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="p-3 rounded-md border bg-black border-stone-800" style={{}}>
<i className="w-5 h-5 text-stone-300" data-lucide="lock-keyhole" style={{}}></i>
</div>
<div>
<p className="text-2xl mb-1 font-space-grotesk font-light" style={{}}>SOC 2 & ISO-27001</p>
<p className="text-stone-400 font-geist" style={{}}>end-to-end certified security</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="p-3 rounded-md border bg-black border-stone-800" style={{}}>
<i className="w-5 h-5 text-stone-300" data-lucide="zap" style={{}}></i>
</div>
<div className="">
<p className="text-2xl mb-1 font-space-grotesk font-light" style={{}}>{"<"}99 ms</p>
<p className="text-stone-400 font-geist" style={{}}>average API response time</p>
</div>
</div>
<a className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-md transition-all mt-8 bg-stone-100 text-black hover:bg-stone-200 font-geist" href="#" style={{}}>
          Explore docs
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="aspect-w-4 aspect-h-5">
<img alt="Collaboration" className="w-full h-full object-cover rounded-lg border grayscale border-stone-800" src="/assets/ba5bef8c-60fe-4cb0-bfdc-74522c90caf1_800w.jpg" style={{}} />
</div>
</div>
</section>

<section className="py-32 reveal" id="insights">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl tracking-tight text-center mb-6 leading-tight font-space-grotesk font-light" style={{}}>
      Portfolio liquidity—visualized in real-time
    </h2>
<p className="max-w-2xl mx-auto text-center text-xl mb-16 leading-relaxed text-stone-400 font-geist" style={{}}>
      Monitor cash positions across regions, currencies and counterparties with live data streaming into OrbitEdge.
    </p>
</div>
</section>

<section className="py-32 reveal bg-stone-950" id="integrate" style={{}}>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-5xl tracking-tight mb-8 leading-tight font-space-grotesk font-light" style={{}}>
        Plug-and-play with your existing stack
      </h2>
<p className="text-xl mb-12 leading-relaxed text-stone-400 font-geist" style={{}}>
        Whether you run SAP, Oracle or a home-grown ledger, OrbitEdge provides secure REST & WebSocket
        endpoints along with no-code connectors—so IT can integrate in hours, not quarters.
      </p>
<div className="flex gap-6">
<a className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-md transition-all bg-stone-100 text-black hover:bg-stone-200 font-geist" href="#" style={{}}>
          Book workshop
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 font-medium transition-colors text-stone-400 hover:text-stone-100 font-geist" href="#" style={{}}>
          View connectors
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="order-1 md:order-2 aspect-w-4 aspect-h-3">
<img alt="Integration meeting" className="w-full h-full object-cover rounded-lg border grayscale border-stone-800" src="/assets/f3e5d245-3b72-4242-889c-2b145578d0c3_1600w.jpg" style={{}} />
</div>
</div>
</section>

<section className="py-32 reveal" id="reviews">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl tracking-tight mb-20 leading-tight font-space-grotesk font-light" style={{}}>
      Teams scaling faster with OrbitEdge
    </h2>
<div className="grid md:grid-cols-2 gap-12">

<div className="p-10 rounded-lg text-left border bg-black border-stone-800" style={{}}>
<p className="mb-8 text-lg leading-relaxed text-stone-300 font-geist" style={{}}>
          "We consolidated five banking portals into one unified dashboard.
          Month-end close fell from nine days to <strong className="font-geist">two</strong>."
        </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale" src="https://randomuser.me/api/portraits/men/23.jpg" />
<div>
<p className="font-medium font-geist">Luis Morán</p>
<p className="text-sm text-stone-500 font-geist" style={{}}>Finance Director, Helix Robotics</p>
</div>
</div>
</div>

<div className="p-10 rounded-lg text-left border bg-black border-stone-800" style={{}}>
<p className="mb-8 text-lg leading-relaxed text-stone-300 font-geist" style={{}}>
          "API-first architecture let us automate supplier payouts in 30+ currencies.
          Engineering wrote less than 200 lines of code."
        </p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale" src="https://randomuser.me/api/portraits/women/56.jpg" />
<div>
<p className="font-medium font-geist">Amélie Chen</p>
<p className="text-sm text-stone-500 font-geist" style={{}}>VP Engineering, Nova Commerce</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 reveal bg-stone-950" id="faq" style={{}}>
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl tracking-tight text-center mb-16 leading-tight font-space-grotesk font-light" style={{}}>
      Frequently asked questions
    </h2>
<div className="divide-y divide-stone-800" style={{}}>

<div className="py-8">
<button className="w-full flex justify-between items-center text-left faq-toggle">
<span className="text-xl font-medium font-geist">Which regions does OrbitEdge support?</span>
<i className="w-5 h-5 transition-transform text-stone-600" data-lucide="chevron-down" style={{}}></i>
</button>
<div className="faq-content mt-4 hidden text-lg leading-relaxed text-stone-400 font-geist" style={{}}>
          We currently operate in 42 countries across North America, EMEA and APAC,
          with instant payouts in 18 local clearing systems.
        </div>
</div>

<div className="py-8">
<button className="w-full flex justify-between items-center text-left faq-toggle">
<span className="text-xl font-medium font-geist">Do you provide on-prem or private cloud options?</span>
<i className="w-5 h-5 transition-transform text-stone-600" data-lucide="chevron-down" style={{}}></i>
</button>
<div className="faq-content mt-4 hidden text-lg leading-relaxed text-stone-400 font-geist" style={{}}>
          Yes—enterprise customers can deploy OrbitEdge on dedicated AWS, GCP, Azure
          or on-prem Kubernetes clusters with full parity.
        </div>
</div>

<div className="py-8">
<button className="w-full flex justify-between items-center text-left faq-toggle">
<span className="text-xl font-medium font-geist">Is pricing seat-based or usage-based?</span>
<i className="w-5 h-5 transition-transform text-stone-600" data-lucide="chevron-down" style={{}}></i>
</button>
<div className="faq-content mt-4 hidden text-lg leading-relaxed text-stone-400 font-geist" style={{}}>
          Seat licensing is free. You only pay for payment volume processed
          and optional premium modules such as FX hedging.
        </div>
</div>
</div>
</div>
</section>

<section className="py-24 reveal bg-stone-100 text-black" style={{}}>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<h2 className="text-3xl md:text-5xl tracking-tight leading-tight font-space-grotesk font-light" style={{}}>
      Ready to elevate your treasury operations?
    </h2>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="inline-flex items-center gap-2 font-medium px-8 py-3 rounded-md transition-all bg-black text-stone-100 hover:bg-stone-900 font-geist" href="#" style={{}}>
        Start free trial
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 font-medium transition-colors text-stone-700 hover:text-black font-geist" href="#" style={{}}>
        Chat with sales
        <i className="w-4 h-4" data-lucide="phone"></i>
</a>
</div>
</div>
</section>

<footer className="py-20 border-t bg-black border-stone-900" style={{}}>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

<div>
<a className="flex items-center gap-2 font-medium text-lg tracking-tight mb-6 text-stone-100 font-geist" href="#" style={{}}>
<i className="w-5 h-5" data-lucide="rocket"></i>
        OrbitEdge
      </a>
<p className="text-sm text-stone-500 font-geist" style={{}}>© 2024 OrbitEdge Inc. All rights reserved.</p>
</div>

<div>
<h3 className="text-sm font-medium mb-4 text-stone-100 font-geist" style={{}}>Company</h3>
<ul className="space-y-3 text-sm text-stone-400" style={{}}>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>About</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Blog</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Careers</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Press</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4 text-stone-100 font-geist" style={{}}>Product</h3>
<ul className="space-y-3 text-sm text-stone-400" style={{}}>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Platform</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>API</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Security</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Status</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4 text-stone-100 font-geist" style={{}}>Legal</h3>
<ul className="space-y-3 text-sm text-stone-400" style={{}}>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Privacy</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Terms</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Compliance</a></li>
<li><a className="transition-colors hover:text-stone-100 font-geist" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
