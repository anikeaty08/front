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



    // Mobile menu toggle
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden')
    });

    // On-scroll element reveal
    const revealEls = document.querySelectorAll('[data-animate]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('transition', 'duration-700');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealEls.forEach(el => io.observe(el));

    // Chart.js
    const ctx = document.getElementById('expChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
        datasets: [{
          label: 'Experiments',
          data: [4, 9, 13, 18, 25, 32],
          borderColor: '#6366f1',
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          x: { grid: { display: false }, ticks: { color: '#9ca3af' } }
        }
      }
    });

    // Lucide icon render
    lucide.createIcons();
  
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
<a className="flex items-center gap-2" href="#">
<svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-semibold tracking-tight text-lg">NovaShift</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#work">Work</a>
<a className="hover:text-white transition" href="#insights">Insights</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
<a className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-4 py-2 rounded-md shadow" href="#cta">Book Call</a>
</nav>
<button className="md:hidden flex items-center" id="menuBtn">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden flex-col gap-4 px-6 pb-6" id="mobileMenu">
<a className="py-2" href="#services">Services</a>
<a className="py-2" href="#work">Work</a>
<a className="py-2" href="#insights">Insights</a>
<a className="py-2" href="#contact">Contact</a>
<a className="bg-indigo-600 hover:bg-indigo-500 transition text-center text-white px-4 py-2 rounded-md shadow" href="#cta">Book Call</a>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-28 pb-36 flex flex-col items-center text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight opacity-0 translate-y-4 transition" data-animate="">
        Transform Tomorrow.<br className="hidden md:block" />Today.
      </h1>
<p className="max-w-2xl text-gray-400 md:text-lg opacity-0 translate-y-4 transition delay-100" data-animate="">
        We engineer digital experiences that elevate conversions, streamline operations, and unlock revenue—crafted for forward-thinking mid-market leaders.
      </p>
<a className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white px-8 py-3 rounded-md shadow-lg opacity-0 translate-y-4 delay-200" data-animate="" href="#contact" id="cta">
        Schedule a Strategy Call
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</a>
<div className="flex flex-wrap justify-center gap-6 pt-10 opacity-0 translate-y-4 delay-300" data-animate="">
<img alt="Partner logo" className="w-16 h-16 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Partner logo" className="w-16 h-16 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="Partner logo" className="w-16 h-16 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="Partner logo" className="w-16 h-16 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28 space-y-16" id="services">
<div className="text-center space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Outcome-Driven Services</h2>
<p className="max-w-2xl mx-auto text-gray-400">From ideation to scale, we architect solutions that convert visitors into lifelong customers.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">
<div className="border border-gray-800 rounded-lg p-8 hover:border-indigo-600 transition group">
<div className="w-10 h-10 flex items-center justify-center bg-indigo-600/10 rounded text-indigo-400 mb-6">
<svg className="w-5 h-5" data-lucide="code"></svg>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-white transition">Full-Stack Engineering</h3>
<p className="text-gray-400 text-sm mb-6">Modern, performant applications tailored to your business model.</p>
<span className="text-indigo-500 text-sm flex items-center gap-1">Learn more
          <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</span>
</div>
<div className="border border-gray-800 rounded-lg p-8 hover:border-indigo-600 transition group">
<div className="w-10 h-10 flex items-center justify-center bg-indigo-600/10 rounded text-indigo-400 mb-6">
<svg className="w-5 h-5" data-lucide="activity"></svg>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-white transition">Growth & CRO</h3>
<p className="text-gray-400 text-sm mb-6">Data-powered experiments that elevate engagement and maximize ROI.</p>
<span className="text-indigo-500 text-sm flex items-center gap-1">Learn more
          <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</span>
</div>
<div className="border border-gray-800 rounded-lg p-8 hover:border-indigo-600 transition group">
<div className="w-10 h-10 flex items-center justify-center bg-indigo-600/10 rounded text-indigo-400 mb-6">
<svg className="w-5 h-5" data-lucide="shield"></svg>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-white transition">Cloud & Security</h3>
<p className="text-gray-400 text-sm mb-6">Scalable infrastructures hardened against tomorrow’s threats.</p>
<span className="text-indigo-500 text-sm flex items-center gap-1">Learn more
          <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</span>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-gray-950 to-gray-900 py-28" id="work">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<span className="uppercase text-xs tracking-widest text-indigo-500">Case Study</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">70% Lift in Demo Requests for SaaS FinTech</h2>
<p className="text-gray-400 leading-relaxed">
          By aligning user journeys with deep funnel analytics, we overhauled messaging, rebuilt the component library,
          and executed 40+ CRO experiments that compounded into outsized gains.
        </p>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2"><svg className="w-5 h-5 text-green-400" data-lucide="check-circle"></svg>Average session duration +62%</li>
<li className="flex items-start gap-2"><svg className="w-5 h-5 text-green-400" data-lucide="check-circle"></svg>Paying customer growth +48%</li>
<li className="flex items-start gap-2"><svg className="w-5 h-5 text-green-400" data-lucide="check-circle"></svg>Infrastructure cost ‑30%</li>
</ul>
<a className="inline-flex items-center gap-2 text-indigo-500 hover:underline decoration-indigo-500 decoration-2 underline-offset-4" href="#">
          Read full story
          <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
<div className="relative">
<img alt="Case study mockup" className="rounded-lg shadow-lg ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="insights">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Impact in Numbers</h2>
<p className="text-gray-400">We benchmark performance across every engagement and iterate relentlessly to outpace market expectations.</p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<p className="text-4xl font-semibold text-white">+128%</p>
<p className="text-gray-400 text-sm">Average conversion lift</p>
</div>
<div>
<p className="text-4xl font-semibold text-white">4.9/5</p>
<p className="text-gray-400 text-sm">Client satisfaction</p>
</div>
<div>
<p className="text-4xl font-semibold text-white">20m</p>
<p className="text-gray-400 text-sm">Monthly events captured</p>
</div>
<div>
<p className="text-4xl font-semibold text-white">9yr</p>
<p className="text-gray-400 text-sm">Average partnership</p>
</div>
</div>
</div>
<div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
<h3 className="font-medium mb-4">CRO Experiment Velocity</h3>
<div>
<canvas height="220" id="expChart"></canvas>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center space-y-4 mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Proven Process</h2>
<p className="max-w-2xl mx-auto text-gray-400">A collaborative, data-driven framework that drives tangible business outcomes.</p>
</div>
<div className="grid md:grid-cols-4 gap-10">
<div className="space-y-3">
<div className="text-5xl font-semibold text-indigo-500">01</div>
<h4 className="font-medium text-lg">Discovery</h4>
<p className="text-sm text-gray-400">Stakeholder interviews, analytics audit, opportunity mapping.</p>
</div>
<div className="space-y-3">
<div className="text-5xl font-semibold text-indigo-500">02</div>
<h4 className="font-medium text-lg">Strategy</h4>
<p className="text-sm text-gray-400">Roadmap, KPIs, growth hypotheses informed by deep research.</p>
</div>
<div className="space-y-3">
<div className="text-5xl font-semibold text-indigo-500">03</div>
<h4 className="font-medium text-lg">Execution</h4>
<p className="text-sm text-gray-400">Design sprints, engineering, testing, rapid iteration.</p>
</div>
<div className="space-y-3">
<div className="text-5xl font-semibold text-indigo-500">04</div>
<h4 className="font-medium text-lg">Scale</h4>
<p className="text-sm text-gray-400">Performance optimization, automation, new market entry.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28">
<div className="text-center space-y-4 mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Leaders Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-10">
<div className="border border-gray-800 rounded-lg p-8 space-y-6">
<p className="text-gray-300 leading-relaxed">“NovaShift re-imagined our digital funnel end-to-end. Pipeline doubled in less than six months.”</p>
<div className="flex items-center gap-4">
<img alt="" className="w-12 h-12 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div>
<h5 className="font-medium">Alex Rivera</h5>
<p className="text-gray-400 text-sm">CEO, FinTechPro</p>
</div>
</div>
</div>
<div className="border border-gray-800 rounded-lg p-8 space-y-6">
<p className="text-gray-300 leading-relaxed">“Their growth playbook delivered consistent, compounding gains. An invaluable partner.”</p>
<div className="flex items-center gap-4">
<img alt="" className="w-12 h-12 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<h5 className="font-medium">Jasmine Patel</h5>
<p className="text-gray-400 text-sm">VP Growth, CloudSys</p>
</div>
</div>
</div>
<div className="border border-gray-800 rounded-lg p-8 space-y-6">
<p className="text-gray-300 leading-relaxed">“From codebase refactor to AWS migration, they executed flawlessly. Zero downtime.”</p>
<div className="flex items-center gap-4">
<img alt="" className="w-12 h-12 rounded-full object-cover ring-1 ring-gray-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div>
<h5 className="font-medium">Michael Lee</h5>
<p className="text-gray-400 text-sm">CTO, MarketScale</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10">
<div className="w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-10 blur-2xl"></div>
</div>
<div className="max-w-3xl mx-auto px-6 py-24 text-center space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Ready to Accelerate Growth?</h2>
<p className="text-gray-300">Unlock your next revenue milestone with a free, no-obligation strategy session.</p>
<a className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-200 transition px-8 py-3 rounded-md shadow-lg font-medium" href="#contact">
        Claim Your Session
        <svg className="w-5 h-5" data-lucide="calendar"></svg>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="contact">
<div className="grid md:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s Talk</h2>
<p className="text-gray-400">Fill out the form and our team will reach out within one business day.</p>
<div className="space-y-4 text-sm">
<div className="flex items-center gap-3"><svg className="w-5 h-5 text-indigo-500" data-lucide="phone"></svg> (415) 555-0174</div>
<div className="flex items-center gap-3"><svg className="w-5 h-5 text-indigo-500" data-lucide="mail"></svg> hello@novashift.io</div>
<div className="flex items-center gap-3"><svg className="w-5 h-5 text-indigo-500" data-lucide="map-pin"></svg> San Francisco, CA</div>
</div>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<input className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500" placeholder="First name" required type="text" />
<input className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500" placeholder="Last name" required type="text" />
</div>
<input className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500" placeholder="Work email" required type="email" />
<input className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500" placeholder="Company" required type="text" />
<textarea className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500" placeholder="Project goals / challenges" rows="4"></textarea>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-3 rounded-md shadow-lg">
          Submit
        </button>
</form>
</div>
</section>

<footer className="border-t border-gray-800 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 text-sm">
<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">NovaShift</span>
</a>
<p className="text-gray-400 max-w-xs">© 2024 NovaShift. All rights reserved.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-3">
<h6 className="text-gray-300 font-medium">Company</h6>
<a className="block hover:text-white transition" href="#">About</a>
<a className="block hover:text-white transition" href="#">Careers</a>
<a className="block hover:text-white transition" href="#">Blog</a>
</div>
<div className="space-y-3">
<h6 className="text-gray-300 font-medium">Services</h6>
<a className="block hover:text-white transition" href="#">Engineering</a>
<a className="block hover:text-white transition" href="#">Growth</a>
<a className="block hover:text-white transition" href="#">Cloud</a>
</div>
<div className="space-y-3">
<h6 className="text-gray-300 font-medium">Resources</h6>
<a className="block hover:text-white transition" href="#">Guides</a>
<a className="block hover:text-white transition" href="#">Case Studies</a>
<a className="block hover:text-white transition" href="#">Press</a>
</div>
<div className="space-y-3">
<h6 className="text-gray-300 font-medium">Legal</h6>
<a className="block hover:text-white transition" href="#">Privacy</a>
<a className="block hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
