import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav toggle
      const mobileBtn = document.getElementById('mobileBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Reveal on scroll with reduced motion respect
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const revealEls = document.querySelectorAll('.reveal');

      if (prefersReduced) {
        revealEls.forEach(el => el.classList.add('show'));
      } else {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => io.observe(el));
      }

      // Basic anchor smooth scroll focus management
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const href = a.getAttribute('href');
          const id = href && href.startsWith('#') ? href.slice(1) : null;
          if (!id) return;
          const target = document.getElementById(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Move focus for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-x-0 top-[-20%] z-0 h-[40vh] bg-gradient-to-b from-cyan-400/20 via-pink-500/10 to-transparent blur-3xl"></div>

<header className="relative z-20">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<a className="group inline-flex items-center gap-3" href="#">
<span className="relative grid h-9 w-9 place-items-center rounded-2xl gradient-ring bg-black">
<span className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400/25 to-pink-500/25"></span>
<span className="absolute text-xs font-semibold tracking-tight text-white">JHP</span>
</span>
<span className="text-lg font-semibold tracking-tight">JHP Creative</span>
</a>
<div className="hidden items-center gap-7 md:flex">
<a className="text-sm font-medium text-gray-300 hover:text-white" href="#about">About</a>
<a className="text-sm font-medium text-gray-300 hover:text-white" href="#process">Process</a>
<a className="text-sm font-medium text-gray-300 hover:text-white" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-300 hover:text-white" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-gray-300 hover:text-white" href="#faq">FAQ</a>
<a className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 focus-ring" href="#contact">Contact</a>
</div>
<button className="md:hidden rounded-xl bg-white/10 p-2 focus-ring" id="mobileBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
<div className="mx-4 hidden rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur md:hidden" id="mobileNav">
<div className="grid gap-3">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5" href="#process">Process</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5" href="#pricing">Pricing</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5" href="#gallery">Gallery</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5" href="#faq">FAQ</a>
<a className="rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15" href="#contact">Contact</a>
</div>
</div>
</header>

<section className="relative z-10 pattern-overlay">
<div className="absolute inset-0 -z-10">
<img alt="Moody workshop backdrop" className="h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
</div>
<div className="grid md:grid-cols-2 md:pb-28 md:pt-16 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-28 pl-6 gap-x-10 gap-y-10 items-center">
<div className="reveal show">
<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">“I'll Paint Anything That Stays Still Long Enough”</h1>
<p className="leading-relaxed text-base font-normal text-gray-300 max-w-xl mt-4">
            18+ years painting helmets for racers across karting, motorsport, motocross, and BMX. Now focused on delivering championship-quality work for every customer.
          </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 px-5 py-3 text-sm font-medium text-black focus-ring" href="#pricing">View Packages</a>
<a className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 focus-ring" href="#contact">Contact Jack</a>
</div>

<div className="mt-6 flex items-center gap-3">
<img alt="Jack portrait" className="h-10 w-10 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium tracking-tight">Jack — Founder &amp; Painter</div>
<div className="text-xs text-gray-400">[Location], UK • Est. 2007</div>
</div>
</div>

<div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
<div className="glass rounded-2xl p-4 text-center border border-white/10">
<div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white">
<svg className="h-5 w-5" data-lucide="brush" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">2000+</div>
<div className="mt-1 text-xs font-medium text-gray-400">Helmets Painted</div>
</div>
<div className="glass rounded-2xl p-4 text-center border border-white/10">
<div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white">
<svg className="h-5 w-5" data-lucide="calendar" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">18</div>
<div className="mt-1 text-xs font-medium text-gray-400">Years Painting</div>
</div>
<div className="glass rounded-2xl p-4 text-center border border-white/10">
<div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white">
<svg className="h-5 w-5" data-lucide="gauge" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">6–8</div>
<div className="mt-1 text-xs font-medium text-gray-400">Helmets / Month</div>
</div>
</div>
</div>
<div className="reveal show">
<div className="relative h-[440px] w-full overflow-hidden rounded-3xl gradient-ring">
<img alt="Painter at work with spray gun" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-pink-500/10"></div>
</div>
<p className="mt-3 text-xs text-gray-400">Swap with your hero shot for launch.</p>
</div>
</div>
</section>

<section className="z-10 md:py-24 pt-16 pb-16 relative" id="about">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-start gap-10 md:grid-cols-2">
<div className="reveal show">
<h2 className="text-3xl font-semibold tracking-tight">Why JHP Creators?</h2>
<p className="text-base text-gray-300 mt-5">After 18+ years painting helmets across multiple disciplines and for major brands, I've learned one thing: whether you're a world champion or just getting started, you deserve the same level of attention to detail.</p>
<p className="mt-4 text-base text-gray-300">
              I've painted helmets that have won championships, been kicked across warehouses after epic BMX tricks, and sat proudly on mantlepieces. Each one gets the same passion and precision.
            </p>
<p className="mt-4 text-base text-gray-300">
              Working from my purpose-built workshop in [location], I limit myself to 6–8 helmets per month. Not because I can't do more, but because I won't compromise on quality. Every helmet gets multiple lacquer stages, flatting, polishing, and that finish that makes people stop and stare.
            </p>
<p className="mt-4 text-base text-gray-300">
              I work with designer Sammy for custom artwork, but I also paint from your existing designs. I don't specialize in one discipline because frankly, I just love painting.
            </p>
</div>
<div className="reveal show">
<div className="grid gap-4 sm:grid-cols-2">
<div className="overflow-hidden rounded-2xl">
<img alt="Masking a helmet" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-2xl">
<img alt="Detailing work" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<a className="relative col-span-1 overflow-hidden rounded-2xl sm:col-span-2" href="#">
<img alt="Video thumbnail" className="h-56 w-full object-cover brightness-90" src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 grid place-items-center">
<span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Watch the process
                  </span>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24" id="process">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="reveal glass rounded-2xl p-6">
<div className="flex items-center gap-3">
<span className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
<svg className="lucide lucide-pen-tool h-5 w-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Step 1: Design</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Work with Sammy on custom designs (£250 design fee) OR</li>
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Provide your own design/inspiration</li>
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Design fee acts as your booking deposit (non-refundable)</li>
</ul>
</div>

<div className="reveal glass rounded-2xl p-6">
<div className="flex items-center gap-3">
<span className="rounded-xl bg-pink-500/15 p-2 text-pink-400">
<svg className="lucide lucide-brush h-5 w-5" data-lucide="brush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Step 2: Paint</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-pink-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Base layers, main design, first lacquer, flatting</li>
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-pink-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Details, final lacquer, polishing</li>
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-pink-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Regular progress updates</li>
<li className="flex gap-2"><svg className="lucide lucide-clock h-4 w-4 text-pink-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>Typical turnaround: 4–6 weeks</li>
</ul>
</div>

<div className="reveal glass rounded-2xl p-6">
<div className="flex items-center gap-3">
<span className="rounded-xl bg-white/10 p-2 text-white">
<svg className="lucide lucide-package h-5 w-5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Step 3: Delivery</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-gray-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Professional packaging</li>
<li className="flex gap-2"><svg className="lucide lucide-check h-4 w-4 text-gray-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>UK delivery (pricing varies by location)</li>
<li className="flex gap-2"><svg className="lucide lucide-globe h-4 w-4 text-gray-200" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>International shipping available</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight">Clear Pricing. No Surprises.</h2>
<p className="mt-2 text-sm text-gray-400">Pricing based on design complexity. Need it faster? Rush fee applies (25% on full price).</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="reveal flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
<div className="h-44 w-full overflow-hidden">
<img alt="Bronze package helmet" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight">Bronze</h3>
<p className="mt-1 text-sm text-gray-400">£550 – £700</p>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-cyan-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>2-color designs</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-cyan-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Full prep and paint process</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-cyan-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Professional lacquer finish</li>
</ul>
<p className="mt-4 text-xs italic text-gray-400">Perfect for clean, classic looks</p>
</div>
</div>

<div className="reveal flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
<div className="h-44 w-full overflow-hidden">
<img alt="Silver package helmet" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight">Silver</h3>
<p className="mt-1 text-sm text-gray-400">£700 – £900</p>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-pink-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>3–4 color designs</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-pink-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Multiple design elements</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-pink-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Full lacquer and polish</li>
</ul>
<p className="mt-4 text-xs italic text-gray-400">The sweet spot for most racers</p>
</div>
</div>

<div className="reveal flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
<div className="h-44 w-full overflow-hidden">
<img alt="Gold package helmet" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Gold</h3>
<span className="rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-500/20 px-2.5 py-1 text-[11px] font-medium text-white">Most Custom</span>
</div>
<p className="mt-1 text-sm text-gray-400">£900+</p>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>5+ colors</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Complex graphics and details</li>
<li className="flex gap-2"><svg className="lucide lucide-check-circle h-4 w-4 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Maximum customization</li>
</ul>
<p className="mt-4 text-xs italic text-gray-400">When you want to stand out</p>
</div>
</div>
</div>

<div className="reveal mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
<h4 className="text-lg font-semibold tracking-tight">Add-ons</h4>
<div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Holographic pin lines</span><span>+£[price]</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Glitter effects</span><span>+£[price]</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Spoiler painting to match</span><span>+£[price]</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Additional lacquer stages</span><span>+£[price]</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Used/scratched helmet prep</span><span>+£[price]</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm">
<span>Rush service</span><span>+25%</span>
</div>
</div>
<p className="mt-4 text-xs text-gray-400">Full pricing breakdown available on request.</p>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24" id="gallery">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight">Recent Work</h2>
<a className="text-sm font-medium text-cyan-300 hover:text-cyan-200" href="https://instagram.com/jhpcreators" target="_blank">@jhpcreators</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">

<figure className="reveal overflow-hidden rounded-2xl">
<img alt="3-color karting design" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">3-color karting design</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Custom motocross build" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1515191107209-c28698631303?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Custom motocross build</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Metallic finish" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Metallic finish</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Glitter effect" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Glitter effect</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Complex graphics" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Complex graphics</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Track-ready finish" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Track-ready finish</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="BMX lid" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">BMX lid</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Pin lines" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Pin lines</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Motorsport shell" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Motorsport shell</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Matte/gloss combo" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Matte/gloss combo</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Mountain biking" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Mountain biking</figcaption>
</figure>
<figure className="reveal overflow-hidden rounded-2xl">
<img alt="Clean 2-color" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<figcaption className="px-2 py-2 text-xs text-gray-400">Clean 2-color</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight">Not Just Helmets</h2>
<p className="mt-3 max-w-2xl text-base text-gray-300">
            While helmets are my specialty, I'll tackle anything that sits still long enough. I've painted bike frames, fairings, and other custom work. If you've got a project in mind, let's talk.
          </p>
</div>
<div className="reveal mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Karting</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Car racing</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Motocross</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">BMX</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Mountain biking</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Track days</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium">Custom projects</span>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24" id="faq">
<div className="mx-auto max-w-5xl px-6">
<h2 className="reveal text-3xl font-semibold tracking-tight">Common Questions</h2>
<div className="mt-8 space-y-3">

<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4 open:bg-white/7.5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Do I need to provide the helmet?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">You can provide your own helmet (saves £50) or I can source one for you. Helmet must be solid, gloss finish (no rubberized/rubatone finishes).</p>
</details>
<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">How long does it take?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">Standard turnaround is 4–6 weeks depending on complexity and my current schedule. Rush service available for 25% premium.</p>
</details>
<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">What about the design?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">I work with designer Sammy who charges £250 for custom designs (this also acts as your booking deposit). Or you can provide your own design/inspiration and we'll work from that.</p>
</details>
<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">What if I change my mind?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">The £250 design fee is non-refundable as it secures your slot in my schedule. Once painting begins, we're committed to finishing your helmet.</p>
</details>
<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Do you paint damaged/used helmets?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">Yes, but there's an additional prep fee for used, scratched, or chipped helmets to ensure a perfect finish.</p>
</details>
<details className="reveal group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">What areas do you cover?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">Based in [location], but I ship across the UK and internationally. Delivery cost depends on your location.</p>
</details>
</div>
</div>
</section>

<section className="relative z-10 py-16 md:py-24" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-start gap-10 md:grid-cols-2">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight">Let's Talk About Your Helmet</h2>
<p className="mt-3 text-base text-gray-300">
              Ready to start? Drop me a message with your ideas, timeline, and any questions. I'll get back to you within 24 hours.
            </p>
<div className="mt-6 space-y-3 text-sm text-gray-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail h-4 w-4 text-cyan-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-white" href="mailto:jack@jhpcreators.com">jack@jhpcreators.com</a>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone h-4 w-4 text-cyan-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:text-white" href="tel:+440000000000">[number]</a>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-instagram h-4 w-4 text-pink-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<a className="hover:text-white" href="https://instagram.com/jhpcreators" target="_blank">@jhpcreators</a>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin h-4 w-4 text-gray-200" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Workshop: [City/Area]</span>
</div>
</div>
</div>
<form className="reveal glass rounded-2xl p-6">
<div className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Name</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none" placeholder="Your name" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Email</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none" placeholder="you@email.com" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Phone (optional)</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none" placeholder="+44 ..." type="tel"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Discipline</label>
<select className="w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none">
<option>Karting</option>
<option>Motorsport</option>
<option>Motocross</option>
<option>BMX</option>
<option>Other</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Design complexity</label>
<select className="w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none">
<option>Simple 2-color</option>
<option>Medium 3–4 colors</option>
<option>Complex 5+ colors</option>
<option>Not sure yet</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs font-medium text-gray-300">Timeframe needed</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none" placeholder="e.g. 6 weeks" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs font-medium text-gray-300">Message / Description</label>
<textarea className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none" placeholder="Tell me about your project…" rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs font-medium text-gray-300">Reference images</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-sm file:text-white hover:file:bg-white/20 focus:border-cyan-400 focus:outline-none" multiple="" type="file"/>
</div>
</div>
<button className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 px-5 py-3 text-sm font-medium text-black" type="button">Send Message</button>
<p className="mt-3 text-[11px] text-gray-400">Design fee (£250) secures your slot and is non-refundable.</p>
</form>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 py-10">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
<div className="flex items-center gap-3">
<span className="relative grid h-8 w-8 place-items-center rounded-2xl gradient-ring bg-black">
<span className="h-8 w-8 rounded-2xl bg-gradient-to-br from-cyan-400/25 to-pink-500/25"></span>
<span className="absolute text-[10px] font-semibold tracking-tight text-white">JHP</span>
</span>
<span className="text-sm font-semibold tracking-tight">JHP Creative</span>
</div>
<div className="flex items-center gap-5 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="https://instagram.com/jhpcreators" target="_blank">Instagram</a>
<a className="rounded-lg bg-white/5 px-3 py-1.5 text-gray-200 hover:bg-white/10" href="#top">Back to top</a>
</div>
</div>
<div className="mx-auto mt-6 max-w-7xl px-6 text-center text-xs text-gray-500">
        © <span id="year"></span> JHP Creators. All rights reserved. • Crafted in the UK.
      </div>
</footer>



    </>
  );
}
