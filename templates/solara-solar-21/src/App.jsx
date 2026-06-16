import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        const navToggle = document.getElementById('navToggle');
        const mobileNav = document.getElementById('mobileNav');
        let open = false;
        if (navToggle && mobileNav) {
          navToggle.addEventListener('click', () => {
            open = !open;
            mobileNav.classList.toggle('hidden', !open);
            navToggle.innerHTML = open
              ? '<svg data-lucide="x" class="h-5 w-5 text-zinc-200"></svg>'
              : '<svg data-lucide="menu" class="h-5 w-5 text-zinc-200"></svg>';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-32 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-emerald-400/5 blur-2xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_10%,rgba(250,204,21,0.06),transparent)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_12%,transparent_88%,rgba(255,255,255,0.04))]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-amber-300 text-sm tracking-tight font-semibold">S</span>
</div>
<span className="text-zinc-100 tracking-tight font-semibold">Solara</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-300 hover:text-zinc-100 hover:underline underline-offset-4" href="#products">Products</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 hover:underline underline-offset-4" href="#services">Services</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 hover:underline underline-offset-4" href="#process">How it Works</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 hover:underline underline-offset-4" href="#testimonials">Testimonials</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 hover:underline underline-offset-4" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition" href="#contact">
<i className="h-4 w-4 text-amber-300" data-lucide="phone"></i>
              Contact
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-amber-400/90 hover:bg-amber-300 text-neutral-900 px-4 py-2 text-sm font-semibold transition shadow-sm hover:shadow ring-1 ring-amber-200/60" href="#quote">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Get a Quote
            </a>
</div>
<button aria-label="Toggle navigation" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" id="navToggle">
<i className="h-5 w-5 text-zinc-200" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10" id="mobileNav">
<div className="py-3 space-y-1">
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100" href="#products">Products</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100" href="#services">Services</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100" href="#process">How it Works</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100" href="#testimonials">Testimonials</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100" href="#faq">FAQ</a>
<div className="px-3 pt-2 flex gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition" href="#contact">
<i className="h-4 w-4 text-amber-300" data-lucide="phone"></i>
                Contact
              </a>
<a className="inline-flex items-center gap-2 rounded-md bg-amber-400/90 hover:bg-amber-300 text-neutral-900 px-3 py-2 text-sm font-semibold transition shadow-sm ring-1 ring-amber-200/60" href="#quote">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Get a Quote
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="Solar panels under sun" className="h-full w-full object-cover opacity-[0.12]" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sun"></i>
              Clean power. Lower bills. Long-term reliability.
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-semibold text-zinc-50">
              Power your world with clean, reliable solar
            </h1>
<p className="mt-5 text-base sm:text-lg text-zinc-300">
              Premium panels, battery storage, and seamless installation—engineered for performance and protected by industry-leading warranties.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400/90 hover:bg-amber-300 text-neutral-900 px-5 py-3 text-sm font-semibold transition shadow-sm hover:shadow ring-1 ring-amber-200/60" href="#quote">
<i className="h-4 w-4" data-lucide="bolt"></i>
                Get a free quote
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition" href="#products">
<i className="h-4 w-4" data-lucide="boxes"></i>
                Explore products
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
<div>
<div className="text-2xl font-semibold text-zinc-50 tracking-tight">10k+</div>
<div className="text-xs text-zinc-400">Installations</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-50 tracking-tight">25-year</div>
<div className="text-xs text-zinc-400">Panel warranty</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-50 tracking-tight">4.9/5</div>
<div className="text-xs text-zinc-400">Customer rating</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl"></div>
<div className="rounded-xl ring-1 ring-white/15 bg-white/5 overflow-hidden">
<img alt="Modern home with rooftop solar" className="w-full h-64 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-emerald-300 text-sm">
<i className="h-4 w-4" data-lucide="leaf"></i>
                  Net-zero ready
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-100">Residential Rooftop System</h3>
<p className="mt-1 text-sm text-zinc-300">High-efficiency panels paired with smart monitoring and optional battery backup.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-zinc-400">Avg. savings year one</div>
<div className="text-sm font-medium text-amber-300">$1,200–$2,400</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-zinc-200 text-sm">
<i className="h-4 w-4 text-amber-300" data-lucide="battery-charging"></i>
                  Battery Storage
                </div>
<p className="mt-1 text-xs text-zinc-400">Keep essentials on during outages and maximize self-consumption.</p>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-zinc-200 text-sm">
<i className="h-4 w-4 text-amber-300" data-lucide="gauge"></i>
                  Smart Monitoring
                </div>
<p className="mt-1 text-xs text-zinc-400">Track production, usage, and savings in real time.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-6 sm:py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
<span className="text-xs tracking-widest text-zinc-400">TRUSTED BY</span>
<div className="flex items-center gap-8">
<div className="text-zinc-400 text-sm tracking-tight">NOVA</div>
<div className="text-zinc-400 text-sm tracking-tight">ARC</div>
<div className="text-zinc-400 text-sm tracking-tight">HELIO</div>
<div className="text-zinc-400 text-sm tracking-tight">VOLT</div>
<div className="text-zinc-400 text-sm tracking-tight">LUMEN</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">Solutions built for performance</h2>
<p className="mt-2 text-zinc-300 text-base">From panels to storage and EV charging, every component is designed to work together, installed by certified professionals.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="sun"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">High-efficiency panels</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Tier-1 modules with excellent low-light performance and durable anti-reflective coatings.</p>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="battery"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Battery storage</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Lithium-iron phosphate systems for safety, longevity, and seamless backup power.</p>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="car"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">EV charging</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Level 2 smart chargers integrated with your solar to optimize charging times.</p>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="wrench"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Professional install</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">In-house crews and NABCEP-certified designers ensure pristine, code-compliant work.</p>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="shield-check"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Best-in-class warranty</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Up to 25-year coverage on panels and 10+ years on inverters and batteries.</p>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="credit-card"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Flexible financing</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Purchase, loan, or lease options to fit your goals with transparent pricing.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="products">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">Products for every need</h2>
<p className="mt-2 text-zinc-300 text-base">Choose a system tailored to your home or business.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition" href="#quote">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
            Compare options
          </a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 overflow-hidden hover:ring-white/20 transition">
<div className="h-36">
<img alt="Residential solar panels" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<i className="h-4 w-4 text-amber-300" data-lucide="home"></i>
                Residential Solar
              </div>
<p className="mt-1 text-sm text-zinc-300">Custom rooftop arrays with premium aesthetics and maximum yield.</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-zinc-400">Typical size</span>
<span className="text-sm font-medium text-amber-300">6–12 kW</span>
</div>
</div>
</div>

<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 overflow-hidden hover:ring-white/20 transition">
<div className="h-36">
<img alt="Commercial solar array" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<i className="h-4 w-4 text-amber-300" data-lucide="building-2"></i>
                Commercial Solar
              </div>
<p className="mt-1 text-sm text-zinc-300">Rooftop and ground-mount systems engineered for ROI and reliability.</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-zinc-400">Typical size</span>
<span className="text-sm font-medium text-amber-300">50 kW–5 MW</span>
</div>
</div>
</div>

<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 overflow-hidden hover:ring-white/20 transition">
<div className="h-36">
<img alt="Battery storage unit" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<i className="h-4 w-4 text-amber-300" data-lucide="battery-charging"></i>
                Battery Systems
              </div>
<p className="mt-1 text-sm text-zinc-300">Backup power and peak shaving with safe, long-life chemistry.</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-zinc-400">Capacity</span>
<span className="text-sm font-medium text-amber-300">5–40 kWh+</span>
</div>
</div>
</div>

<div className="group rounded-xl ring-1 ring-white/10 bg-white/5 overflow-hidden hover:ring-white/20 transition">
<div className="h-36">
<img alt="EV charging" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<i className="h-4 w-4 text-amber-300" data-lucide="charging-pile"></i>
                EV Chargers
              </div>
<p className="mt-1 text-sm text-zinc-300">Smart home and commercial chargers with scheduling and load balancing.</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-zinc-400">Power</span>
<span className="text-sm font-medium text-amber-300">7–22 kW</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">From quote to switch-on</h2>
<p className="mt-2 text-zinc-300 text-base">A guided, transparent process with a dedicated project manager.</p>
</div>
<div className="mt-8 grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">01</span>
<i className="h-4 w-4 text-amber-300" data-lucide="clipboard-check"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Assessment</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">We analyze your roof, usage, and goals to size the ideal system.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">02</span>
<i className="h-4 w-4 text-amber-300" data-lucide="pencil-ruler"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Design</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Engineered drawings, permits, and utility approvals handled for you.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">03</span>
<i className="h-4 w-4 text-amber-300" data-lucide="hard-hat"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Install</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Certified crews complete most projects in 1–2 days with minimal disruption.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">04</span>
<i className="h-4 w-4 text-amber-300" data-lucide="power"></i>
<h3 className="font-semibold tracking-tight text-zinc-100">Activate</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">System go-live, app onboarding, and performance verification.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">What customers are saying</h2>
<p className="mt-2 text-zinc-300 text-base">Real results from homeowners and businesses.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Customer portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Ava R.</div>
<div className="text-xs text-zinc-400">Austin, TX</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">“Our bill dropped by 70% and the install was spotless. The monitoring app is addicting.”</p>
<div className="mt-3 flex items-center gap-1">
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Customer portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Marcus T.</div>
<div className="text-xs text-zinc-400">Denver, CO</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">“We added batteries for backup and now ride through outages without a hiccup.”</p>
<div className="mt-3 flex items-center gap-1">
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star-half"></i>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Customer portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Helena C.</div>
<div className="text-xs text-zinc-400">Sacramento, CA</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">“Clear pricing, quick install, and great communication. Highly recommend.”</p>
<div className="mt-3 flex items-center gap-1">
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
<i className="h-4 w-4 text-amber-300" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">Frequently asked questions</h2>
<p className="mt-2 text-zinc-300 text-base">Straight answers about going solar.</p>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-5">
<details className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 open:bg-white/10 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-zinc-100">How much can I save with solar?</span>
<i className="h-4 w-4 text-zinc-300 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-300">Savings vary by location, usage, and incentives. Most homeowners see 40–80% bill reductions and payback in 6–9 years.</p>
</details>
<details className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 open:bg-white/10 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-zinc-100">What incentives are available?</span>
<i className="h-4 w-4 text-zinc-300 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-300">Federal tax credits plus state and utility rebates may apply. We include available incentives in your custom proposal.</p>
</details>
<details className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 open:bg-white/10 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-zinc-100">Do I need a battery?</span>
<i className="h-4 w-4 text-zinc-300 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-300">Batteries provide backup and can increase self-consumption. They’re recommended for outage-prone areas or time-of-use rates.</p>
</details>
<details className="group rounded-xl ring-1 ring-white/10 bg-white/5 p-5 open:bg-white/10 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-zinc-100">How long is installation?</span>
<i className="h-4 w-4 text-zinc-300 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-300">Site assessment to activation typically takes 4–10 weeks. On-roof install is often 1–2 days.</p>
</details>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="quote">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-50">Get your custom solar proposal</h2>
<p className="mt-2 text-zinc-300 text-base">Share a few details and we’ll estimate savings, system size, and timeline.</p>
<div className="mt-6 flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="h-4 w-4 text-amber-300" data-lucide="clock"></i>
<span>Quick turnaround</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="h-4 w-4 text-amber-300" data-lucide="file-check-2"></i>
<span>No-obligation</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="h-4 w-4 text-amber-300" data-lucide="lock"></i>
<span>Private &amp; secure</span>
</div>
</div>
<div className="mt-8 rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-amber-300" data-lucide="map-pin"></i>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Service Areas</div>
<p className="text-xs text-zinc-400">CA, AZ, CO, TX, FL — and expanding.</p>
</div>
</div>
<div className="mt-3 flex items-center gap-6">
<div className="flex items-center gap-2 text-xs text-emerald-300">
<i className="h-4 w-4" data-lucide="leaf"></i>
                  Renewable certified
                </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="h-4 w-4" data-lucide="badge-check"></i>
                  Licensed &amp; insured
                </div>
</div>
</div>
</div>
<form className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8 space-y-4" id="contact">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-zinc-400">First name</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="Jordan" required="" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400">Last name</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="Lee" required="" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-zinc-400">Email</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="text-xs text-zinc-400">Phone</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="(555) 123‑4567" type="tel"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">Service address</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="123 Sunview Rd, Phoenix, AZ" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-zinc-400">Electric utility</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="APS, SRP, PG&amp;E..." type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400">Average monthly bill</label>
<input className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" inputmode="decimal" placeholder="160" type="number"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">I'm interested in</label>
<div className="mt-2 grid sm:grid-cols-2 gap-2">
<label className="flex items-center gap-2 rounded-md ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-zinc-200 hover:ring-white/20 hover:bg-white/5 transition cursor-pointer">
<input className="h-4 w-4 rounded border-white/20 bg-neutral-900/80 text-amber-300 focus:ring-0" type="checkbox"/>
                  Solar panels
                </label>
<label className="flex items-center gap-2 rounded-md ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-zinc-200 hover:ring-white/20 hover:bg-white/5 transition cursor-pointer">
<input className="h-4 w-4 rounded border-white/20 bg-neutral-900/80 text-amber-300 focus:ring-0" type="checkbox"/>
                  Battery storage
                </label>
<label className="flex items-center gap-2 rounded-md ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-zinc-200 hover:ring-white/20 hover:bg-white/5 transition cursor-pointer">
<input className="h-4 w-4 rounded border-white/20 bg-neutral-900/80 text-amber-300 focus:ring-0" type="checkbox"/>
                  EV charging
                </label>
<label className="flex items-center gap-2 rounded-md ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-zinc-200 hover:ring-white/20 hover:bg-white/5 transition cursor-pointer">
<input className="h-4 w-4 rounded border-white/20 bg-neutral-900/80 text-amber-300 focus:ring-0" type="checkbox"/>
                  Commercial solutions
                </label>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">Anything else?</label>
<textarea className="mt-1 w-full rounded-md bg-neutral-900/60 text-zinc-100 placeholder-zinc-500 px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50" placeholder="Roof type, shade, goals..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-xs text-zinc-400">By submitting, you agree to be contacted about your project.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-amber-400/90 hover:bg-amber-300 text-neutral-900 px-5 py-2.5 text-sm font-semibold transition shadow-sm hover:shadow ring-1 ring-amber-200/60" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                Request proposal
              </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-zinc-50">Ready to cut your energy costs?</h3>
<p className="mt-1 text-sm text-zinc-300">Talk to a solar expert today and see what your roof can do.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition" href="tel:+15551234567">
<i className="h-4 w-4 text-amber-300" data-lucide="phone"></i>
              (555) 123‑4567
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-amber-400/90 hover:bg-amber-300 text-neutral-900 px-4 py-2 text-sm font-semibold transition shadow-sm ring-1 ring-amber-200/60" href="#quote">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Start now
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-amber-300 text-sm tracking-tight font-semibold">S</span>
</div>
<span className="text-zinc-100 tracking-tight font-semibold">Solara</span>
</a>
<p className="mt-3 text-sm text-zinc-400 max-w-md">Clean energy systems that pay for themselves and protect your home or business from the unexpected.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5 text-zinc-300" data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5 text-zinc-300" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5 text-zinc-300" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Company</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li><a className="hover:text-zinc-100" href="#">About</a></li>
<li><a className="hover:text-zinc-100" href="#">Careers</a></li>
<li><a className="hover:text-zinc-100" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-100" href="#">Blog</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Support</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li><a className="hover:text-zinc-100" href="#faq">Help center</a></li>
<li><a className="hover:text-zinc-100" href="#">Warranty</a></li>
<li><a className="hover:text-zinc-100" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-100" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-zinc-500">© <span id="year"></span> Solara Energy, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<span className="text-white/15">•</span>
<a className="hover:text-zinc-300" href="#">Terms</a>
<span className="text-white/15">•</span>
<a className="hover:text-zinc-300" href="#">Do Not Sell My Info</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
