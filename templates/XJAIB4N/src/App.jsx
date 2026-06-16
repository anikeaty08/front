import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Intersection observer reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.remove('opacity-0', 'translate-y-6');
          io.unobserve(el.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // CO₂ chart
    const ctx = document.getElementById('co2Chart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            label: 'CO₂ kg / 1000 units',
            data: [120, 104, 89, 70, 55],
            borderColor: '#14b8a6',
            backgroundColor: 'rgba(20,184,166,0.15)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#14b8a6'
          }]
        },
        options: {
          scales: {
            y: { grid: { color: '#1e293b' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          },
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Mobile menu
    const burger = document.querySelector('[data-lucide="menu"]');
    const nav = document.querySelector('nav');
    burger?.addEventListener('click', () => nav.classList.toggle('hidden'));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.15)_0%,transparent_60%)]"></div>

<header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white" href="#">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=200&amp;q=80"/>
        RIPAC Film
      </a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-teal-400 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-teal-400 transition-colors" href="#products">Products</a>
<a className="hover:text-teal-400 transition-colors" href="#sustainability">Sustainability</a>
<a className="hover:text-teal-400 transition-colors" href="#about">About</a>
</nav>
<svg className="lucide lucide-menu inline-flex md:hidden items-center text-slate-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</div>
<div className="border-t border-slate-800"></div>
</header>

<section className="relative overflow-hidden">
<div className="relative max-w-7xl text-center mr-auto ml-auto pt-28 pr-6 pb-28 pl-6">
<h1 className="md:text-6xl reveal transition duration-700 text-4xl font-semibold text-white tracking-tight"><br className="hidden md:block"/>Next-Gen Shrink Packaging Solutions</h1>
<p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-slate-400 reveal transition duration-700 delay-100">
        Empowering brands worldwide with high-performance, eco-smart shrink films engineered for speed, clarity &amp; protection.
      </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center reveal transition duration-700 delay-200">
<a className="px-6 py-3 rounded-md bg-teal-500 hover:bg-teal-600 ring-1 ring-teal-400/20 shadow-sm font-medium transition" href="#products">
          Explore Products
        </a>
<a className="px-6 py-3 rounded-md border border-slate-700 hover:border-teal-500 font-medium transition" href="#contact">
          Request a Quote
        </a>
</div>
</div><img alt="" className="absolute inset-0 w-full h-full opacity-10 object-cover" src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800&amp;q=80"/>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="solutions">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-white reveal transition">Designed for Every Application</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="reveal transition">
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-teal-500 transition group">
<svg className="lucide lucide-triangle h-12 w-12 mb-4 text-teal-400" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<h3 className="font-semibold mb-1 text-white">Food &amp; Beverage</h3>
<p className="text-slate-400">Crystal-clear films that preserve freshness and shelf appeal.</p>
</div>
</div>
<div className="reveal transition delay-75">
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-teal-500 transition group">
<svg className="lucide lucide-box h-12 w-12 mb-4 text-teal-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<h3 className="font-semibold mb-1 text-white">Retail Multipacks</h3>
<p className="text-slate-400">High-strength solutions for secure multi-unit bundles.</p>
</div>
</div>
<div className="reveal transition delay-150">
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-teal-500 transition group">
<svg className="lucide lucide-leaf h-12 w-12 mb-4 text-teal-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<h3 className="font-semibold mb-1 text-white">Sustainable Lines</h3>
<p className="text-slate-400">Recyclable &amp; PCR-ready materials that cut carbon footprint.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900/60" id="products">
<div className="pointer-events-none absolute inset-0 bg-[conic-gradient(at_bottom_left,var(--tw-gradient-stops))] from-transparent via-transparent to-teal-500/5"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-white reveal transition">Featured Products</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="group relative overflow-hidden rounded-xl border border-slate-800 reveal transition">
<img alt="" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="font-semibold text-white mb-1">Performance POF Film</h3>
<p className="text-sm text-slate-400">Ultra-clarity, cross-linked for demanding applications.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-slate-800 reveal transition delay-75">
<img alt="" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=800&amp;q=80"/>
<div className="absolute inset-0"></div>
<div className="absolute bottom-0 p-6">
<h3 className="font-semibold text-white mb-1">EcoLite Recycled</h3>
<p className="text-sm text-slate-400">Made with 35 % PCR for a closed-loop future.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-slate-800 reveal transition delay-150">
<img alt="" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="font-semibold text-white mb-1">Ultra-High Yield</h3>
<p className="text-sm text-slate-400">30 % thinner film with identical holding force.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="sustainability">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal transition">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Doing More with Less</h2>
<p className="text-slate-400 mb-4">
          Our commitment to a greener planet drives us to engineer films that not only outperform traditional materials but also significantly reduce environmental impact.
        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-teal-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Up to 50 % reduction in material usage
          </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-teal-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> 100 % recyclable mono-materials
          </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-teal-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> 35 % PCR integration target by 2025
          </li>
</ul>
</div>
<div className="reveal transition delay-150">
<div className="p-6 rounded-xl border border-slate-800 bg-slate-900 shadow-inner">
<h3 className="font-semibold text-center mb-4 text-white">CO₂ Emissions Saved</h3>
<div>
<canvas height="280" id="co2Chart" style={{display: 'block', boxSizing: 'border-box', height: '280px', width: '542px'}} width="542"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900/60" id="about">
<div className="pointer-events-none absolute inset-0 bg-[conic-gradient(at_top_right,var(--tw-gradient-stops))] from-transparent via-transparent to-teal-500/5"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
<img alt="" className="rounded-xl border border-slate-800 shadow-lg reveal opacity-0 translate-y-6 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=900&amp;q=80"/>
<div className="reveal opacity-0 translate-y-6 transition delay-100">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Driven by Engineering Excellence</h2>
<p className="text-slate-400 mb-6">
          For over two decades, RIPAC Film has partnered with market leaders to refine packaging performance. Our R&amp;D hub continuously explores new resin blends, sustainable additives, and cutting-edge processes to keep your production lines ahead of the curve.
        </p>
<a className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium" href="#contact">
          Get in touch
          <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1200&amp;q=80"/>
<div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4 reveal opacity-0 translate-y-6 transition">Ready to Elevate Your Packaging?</h2>
<p className="text-lg text-slate-400 mb-6 reveal opacity-0 translate-y-6 transition delay-75">
        Let’s collaborate to unlock new efficiencies, stand-out shelf presence, and a lighter environmental footprint.
      </p>
<a className="px-8 py-4 rounded-md bg-teal-500 hover:bg-teal-600 ring-1 ring-teal-400/20 shadow font-medium transition reveal opacity-0 translate-y-6 duration-700 delay-150" href="#contact">
        Contact Our Team
      </a>
</div>
</section>

<footer className="bg-slate-900 text-slate-400">
<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
<div>
<h3 className="font-semibold text-white mb-4">RIPAC Film</h3>
<p className="text-sm">Innovative shrink packaging engineered in Germany.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-3">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-teal-400" href="#about">About Us</a></li>
<li><a className="hover:text-teal-400" href="#">Careers</a></li>
<li><a className="hover:text-teal-400" href="#">Newsroom</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-3">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-teal-400" href="#">Documentation</a></li>
<li><a className="hover:text-teal-400" href="#">FAQs</a></li>
<li><a className="hover:text-teal-400" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-3">Newsletter</h4>
<form className="flex mt-2">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none" id="email" placeholder="you@example.com" type="email"/>
<button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-r-md text-white text-sm font-medium transition" type="submit">
            Join
          </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 text-center py-6 text-xs">© 2024 RIPAC Film. All rights reserved.</div>
</footer>



    </>
  );
}
