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
      
  // Lucide Icons
  lucide.createIcons();

  // Mobile menu
  const mobileBtn = document.getElementById('mobile-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileBtn.querySelector('svg').setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
    lucide.createIcons();
  });

  // Sticky nav background
  const header = document.querySelector('header');
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('bg-white/90', e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer.observe(header);

  // Current year
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
      

<header className="fixed inset-x-0 top-0 z-50 transition backdrop-blur-lg/40" id="top">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<a className="flex items-center gap-2" href="#top">
<img alt="T&amp;T Bin Blasters logo" className="h-9 w-auto" src="https://tandtbinblasters.com.d10.amst.rocks/template/images/logo.png"/>
<span className="sr-only">T&amp;T Bin Blasters</span>
</a>
<ul className="hidden items-center gap-8 text-sm font-medium md:flex">
<li><a className="hover:text-teal-600" href="#how">How It Works</a></li>
<li><a className="hover:text-teal-600" href="#pricing">Pricing</a></li>
<li><a className="hover:text-teal-600" href="#testimonials">Reviews</a></li>
<li><a className="hover:text-teal-600" href="#contact">Contact</a></li>
</ul>
<a className="hidden rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 md:block" href="#contact">Schedule a Clean</a>
<button aria-label="Open menu" className="md:hidden" id="mobile-btn">
<i className="w-6 h-6 stroke-2" data-lucide="menu"></i>
</button>
</nav>

<div className="hidden bg-white/80 px-6 pb-6 pt-4 backdrop-blur-md md:hidden" id="mobile-menu">
<ul className="space-y-4 text-sm font-medium">
<li><a className="block hover:text-teal-600" href="#how">How It Works</a></li>
<li><a className="block hover:text-teal-600" href="#pricing">Pricing</a></li>
<li><a className="block hover:text-teal-600" href="#testimonials">Reviews</a></li>
<li><a className="block hover:text-teal-600" href="#contact">Contact</a></li>
<li><a className="mt-4 inline-block w-full rounded-lg bg-teal-600 px-4 py-2 text-center text-white hover:bg-teal-700" href="#contact">Schedule a Clean</a></li>
</ul>
</div>
</header>

<section className="relative isolate overflow-hidden pt-32">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" src="https://images.unsplash.com/photo-1581574203170-76f16d470644?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Bin Cleaning That <span className="text-teal-600">Blasts</span> Away the Grime</h1>
<p className="mt-6 text-lg leading-8 text-slate-600">Eco-friendly, curbside trash-bin sanitizing that leaves your bins looking—and smelling—brand new.</p>
<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/30 ring-1 ring-inset ring-teal-600/30 hover:bg-teal-700 hover:shadow-teal-700/30" href="#contact">
<i className="h-5 w-5" data-lucide="calendar-days"></i> Book Now
        </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:underline" href="#how">
<i className="h-5 w-5" data-lucide="play-circle"></i> See How It Works
        </a>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</div>

<section className="mx-auto max-w-7xl scroll-mt-20 space-y-16 px-6 py-24 lg:px-8" id="how">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">A Sparkling Clean in 3 Simple Steps</h2>
<p className="mt-4 text-base text-slate-600">We come to you on trash day—no mess, no hassle.</p>
</div>
<ol className="grid gap-12 sm:grid-cols-3">
<li className="group relative flex flex-col items-start gap-6">
<span className="rounded-full bg-teal-50 p-3 ring-1 ring-inset ring-teal-100">
<i className="h-6 w-6 stroke-teal-600" data-lucide="map-pin"></i>
</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600">We Arrive</h3>
<p className="text-sm text-slate-600">Our truck tracks your pickup schedule—no need to drag bins anywhere special.</p>
</li>
<li className="group relative flex flex-col items-start gap-6">
<span className="rounded-full bg-teal-50 p-3 ring-1 ring-inset ring-teal-100">
<i className="h-6 w-6 stroke-teal-600" data-lucide="spray-can"></i>
</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600">We Blast</h3>
<p className="text-sm text-slate-600">High-pressure 200°F water &amp; biodegradable cleansers eliminate 99.9 % of germs.</p>
</li>
<li className="group relative flex flex-col items-start gap-6">
<span className="rounded-full bg-teal-50 p-3 ring-1 ring-inset ring-teal-100">
<i className="h-6 w-6 stroke-teal-600" data-lucide="smile"></i>
</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600">You Relax</h3>
<p className="text-sm text-slate-600">Bins are dried, deodorized, and placed neatly back at the curb—job done.</p>
</li>
</ol>
</section>

<section className="bg-slate-50">
<div className="mx-auto max-w-7xl space-y-16 px-6 py-24 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Why Choose T&amp;T?</h2>
</div>
<div className="grid gap-12 md:grid-cols-2">
<div className="flex flex-col gap-6">
<i className="h-8 w-8 stroke-teal-600" data-lucide="leaf"></i>
<h3 className="text-xl font-semibold text-slate-900">Eco-Friendly Process</h3>
<p className="text-sm text-slate-600">All runoff is captured and disposed of in accordance with EPA standards. 100 % biodegradable cleansers.</p>
</div>
<div className="flex flex-col gap-6">
<i className="h-8 w-8 stroke-teal-600" data-lucide="zap"></i>
<h3 className="text-xl font-semibold text-slate-900">200°F Sanitization</h3>
<p className="text-sm text-slate-600">Scald-hot water kills harmful bacteria like Salmonella, E. coli, and Listeria on contact.</p>
</div>
<div className="flex flex-col gap-6">
<i className="h-8 w-8 stroke-teal-600" data-lucide="shield-check"></i>
<h3 className="text-xl font-semibold text-slate-900">Pet- &amp; Kid-Safe</h3>
<p className="text-sm text-slate-600">No harsh chemicals, no lingering residue—just fresh, clean bins you can open with confidence.</p>
</div>
<div className="flex flex-col gap-6">
<i className="h-8 w-8 stroke-teal-600" data-lucide="clock"></i>
<h3 className="text-xl font-semibold text-slate-900">Flexible Scheduling</h3>
<p className="text-sm text-slate-600">Monthly, quarterly, or one-time cleans—pause or cancel any time, no questions asked.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-8" id="pricing">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Simple, Transparent Pricing</h2>
<p className="mt-4 text-base text-slate-600">No hidden fees, ever.</p>
</div>
<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<h3 className="text-lg font-semibold text-slate-900">One-Time</h3>
<p className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$45</span>
<span className="text-sm text-slate-600">per bin</span>
</p>
<ul className="mt-6 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Deep clean &amp; sanitize</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Deodorize &amp; dry</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700" href="#contact">Get Started</a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-teal-600 p-8 shadow-lg ring-1 ring-teal-600">
<span className="absolute right-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
<h3 className="text-lg font-semibold text-slate-900">Monthly</h3>
<p className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$20</span>
<span className="text-sm text-slate-600">per bin</span>
</p>
<ul className="mt-6 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Clean every 4 weeks</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Priority scheduling</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Free re-clean if unsatisfied</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700" href="#contact">Subscribe</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<h3 className="text-lg font-semibold text-slate-900">Quarterly</h3>
<p className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$30</span>
<span className="text-sm text-slate-600">per bin</span>
</p>
<ul className="mt-6 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Clean every 3 months</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 stroke-teal-600" data-lucide="check"></i> Skip any time</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700" href="#contact">Choose Plan</a>
</div>
</div>
</section>

<section className="bg-slate-50" id="testimonials">
<div className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">People Love Their Fresh Bins</h2>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-2">
<blockquote className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<p className="text-base leading-relaxed text-slate-900">“T&amp;T made our bins look brand new. No more foul smells drifting into the garage. Absolutely worth it!”</p>
<footer className="mt-6 flex items-center gap-4">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1603415526960-f7e0328b8795?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<span className="block text-sm font-semibold text-slate-900">Samantha B.</span>
<span className="block text-xs text-slate-500">Lakewood, CO</span>
</div>
</footer>
</blockquote>
<blockquote className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<p className="text-base leading-relaxed text-slate-900">“Super easy to book, they showed up on trash day, and the bins smelled like citrus afterward. Five stars!”</p>
<footer className="mt-6 flex items-center gap-4">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<span className="block text-sm font-semibold text-slate-900">Marcus L.</span>
<span className="block text-xs text-slate-500">Golden, CO</span>
</div>
</footer>
</blockquote>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-8" id="contact">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Ready for Odor-Free Bins?</h2>
<p className="mt-4 text-base text-slate-600">Fill out the form and we’ll confirm your cleaning date within 24 hours.</p>
<div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
<i className="h-5 w-5 stroke-teal-600" data-lucide="phone"></i> (555) 123-4567
      </div>
<div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
<i className="h-5 w-5 stroke-teal-600" data-lucide="mail"></i> hello@tandtbinblasters.com
      </div>
</div>
<form action="#" className="space-y-6 rounded-2xl border border-slate-200 p-8 shadow-sm">
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="name">Full name</label>
<input className="mt-2 w-full rounded-lg border-slate-300 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="email">Email</label>
<input className="mt-2 w-full rounded-lg border-slate-300 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="address">Street address</label>
<input className="mt-2 w-full rounded-lg border-slate-300 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500" id="address" name="address" placeholder="1234 Elm St." required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="message">Additional notes</label>
<textarea className="mt-2 w-full rounded-lg border-slate-300 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500" id="message" name="message" placeholder="Bin count, gate code…" rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700" type="submit">Request Service</button>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
<div className="flex items-center gap-2">
<img alt="" className="h-8 w-auto" src="https://tandtbinblasters.com.d10.amst.rocks/template/images/logo.png"/>
<span className="text-sm font-medium text-white">T&amp;T Bin Blasters</span>
</div>
<p className="text-xs">© <span id="year"></span> T&amp;T Bin Blasters. All rights reserved.</p>
<div className="flex gap-6">
<a aria-label="Facebook" className="hover:text-white" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
<a aria-label="Instagram" className="hover:text-white" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a aria-label="twitter" className="hover:text-white" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
