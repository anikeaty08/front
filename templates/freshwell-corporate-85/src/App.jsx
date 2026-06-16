import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      const toggle = document.getElementById('mobileToggle');
      const menu = document.getElementById('mobileMenu');
      toggle?.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        toggle.querySelector('i')?.replaceWith(lucide.createElement(menu.classList.contains('hidden') ? 'menu' : 'x', { 'stroke-width': 1.5, width: 20, height: 20 }));
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden sm:block border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm py-2">
<p className="text-slate-600">Free delivery over $200 • Order by 3pm for next-day service</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-slate-600">
<i className="w-4 h-4" data-lucide="phone"></i>
<a className="hover:text-slate-900 transition-colors" href="tel:+611300123456">1300 123 456</a>
</div>
<div className="hidden md:flex items-center gap-1 text-slate-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Sydney • Melbourne</span>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-emerald-600 text-white grid place-items-center font-semibold tracking-tight">FW</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-90">Freshwell</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#menus">Menus</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#corporate">Corporate</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#how">How it works</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#dietaries">Dietaries</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#about">About</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 text-sm rounded-md bg-emerald-600 text-white px-3.5 py-2 hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-600/20" href="#quote">
<i className="w-4 h-4" data-lucide="send"></i>
              Get a quote
            </a>
</div>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 hover:bg-slate-50" id="mobileToggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="md:hidden hidden border-t border-slate-200" id="mobileMenu">
<div className="px-4 py-3 space-y-1">
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#menus">Menus</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#corporate">Corporate</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#how">How it works</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#dietaries">Dietaries</a>
<a className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" href="#about">About</a>
<div className="pt-2 border-t border-slate-200 mt-2">
<a className="block w-full text-center rounded-md bg-emerald-600 text-white px-3 py-2 hover:bg-emerald-700" href="#quote">Get a quote</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 mb-4">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
            New seasonal menu
          </div>
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">Fresh, vibrant catering for teams and events</h1>
<p className="mt-4 text-base md:text-lg text-slate-600">From morning meetings to full-day workshops, we craft balanced, dietary-friendly food that arrives on time and looks incredible.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-600/20" href="#menus">
<i className="w-4 h-4" data-lucide="utensils"></i>
              Explore menus
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-800 px-4 py-2.5 text-sm hover:bg-slate-50" href="#quote">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Get a quote
            </a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<div className="h-9 w-9 rounded-md border border-slate-200 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="truck"></i>
</div>
              On-time delivery windows
            </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<div className="h-9 w-9 rounded-md border border-slate-200 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="leaf"></i>
</div>
              Seasonal, made fresh daily
            </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<div className="h-9 w-9 rounded-md border border-slate-200 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="heart"></i>
</div>
              Dietary-friendly options
            </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<div className="h-9 w-9 rounded-md border border-slate-200 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="recycle"></i>
</div>
              Eco-conscious packaging
            </div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200">
<img alt="Vibrant catering spread" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block w-40 rounded-lg bg-white border border-slate-200 shadow-sm p-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-600/10 grid place-items-center text-emerald-700">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<div>
<p className="text-xs text-slate-500">Avg. delivery</p>
<p className="text-sm font-medium text-slate-800">On-time 98.7%</p>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-b border-slate-200 bg-slate-50/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<p className="text-xs text-slate-500 mb-3">Trusted by teams at</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">ALPHA</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">NOVA</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">KITE</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">ONYX</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">PLAIN</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-slate-700 text-sm tracking-tight">LUMA</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="menus">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Popular menus</h2>
<p className="text-slate-600 mt-2">Curated sets designed for productivity, crafted fresh every morning.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#">
            View all
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Sandwich platters" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-medium text-slate-900">Sandwich &amp; Wrap Platter</h3>
<span className="text-sm text-slate-700">$12–$16 pp</span>
</div>
<p className="mt-1 text-sm text-slate-600">Assorted signature fillings on artisan loaves and wholemeal wraps.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
                  VG/GF options
                </div>
<button className="text-sm inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-50">Details <i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Salad bowls" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-medium text-slate-900">Power Salad Bowls</h3>
<span className="text-sm text-slate-700">$14–$18 pp</span>
</div>
<p className="mt-1 text-sm text-slate-600">Protein-packed greens, grains, and dressings on the side.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="heart"></i>
                  DF/VG friendly
                </div>
<button className="text-sm inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-50">Details <i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Breakfast pastries" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-medium text-slate-900">Morning Fuel</h3>
<span className="text-sm text-slate-700">$9–$13 pp</span>
</div>
<p className="mt-1 text-sm text-slate-600">Croissants, fruit pots, yoghurts, and specialty coffee add-ons.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="sunrise"></i>
                  Perfect for 8–10am
                </div>
<button className="text-sm inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-50">Details <i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-10" id="corporate">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 p-6 md:p-8 bg-slate-50">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">Corporate catering, simplified</h3>
<p className="text-slate-600 mt-2">Dedicated support for recurring orders, consolidated invoicing, and dietary tracking for your team.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 transition-colors ring-1 ring-emerald-600/20" href="#quote">
<i className="w-4 h-4" data-lucide="briefcase"></i>
                  Talk to sales
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-100" href="#about">
                  Learn more
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-items-center">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Recurring schedules</p>
<p className="text-xs text-slate-600">Automated weekly/fortnightly.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-items-center">
<i className="w-5 h-5" data-lucide="receipt"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Consolidated invoicing</p>
<p className="text-xs text-slate-600">Cost centers and POs supported.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-items-center">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Dietary profiles</p>
<p className="text-xs text-slate-600">Keep everyone included.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="how">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">How it works</h2>
<p className="text-slate-600 mt-2">Three easy steps to feed your team well.</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-5">
<div className="h-10 w-10 rounded-md bg-emerald-600/10 text-emerald-700 grid place-items-center mb-3">
<i className="w-5 h-5" data-lucide="list-checks"></i>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900">1. Choose</h3>
<p className="text-sm text-slate-600 mt-1">Pick from curated sets and mix-and-match items for your headcount and dietaries.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="h-10 w-10 rounded-md bg-emerald-600/10 text-emerald-700 grid place-items-center mb-3">
<i className="w-5 h-5" data-lucide="chef-hat"></i>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900">2. We prepare</h3>
<p className="text-sm text-slate-600 mt-1">Made fresh at dawn, labelled clearly, and packed with recyclable materials.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="h-10 w-10 rounded-md bg-emerald-600/10 text-emerald-700 grid place-items-center mb-3">
<i className="w-5 h-5" data-lucide="navigation"></i>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900">3. Delivered</h3>
<p className="text-sm text-slate-600 mt-1">Right to your office with live tracking and reliable delivery windows.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50" id="dietaries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Dietaries made easy</h2>
<p className="text-slate-600 mt-2">We design menus that make everyone feel included—clearly labelled and balanced for energy.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 bg-white">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Vegetarian &amp; Vegan</p>
<p className="text-xs text-slate-600">Dedicated prep zones</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 bg-white">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Gluten-Friendly</p>
<p className="text-xs text-slate-600">Clearly separated</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 bg-white">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Dairy-Free</p>
<p className="text-xs text-slate-600">Smart substitutions</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 bg-white">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Nut-Aware</p>
<p className="text-xs text-slate-600">Label-first approach</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 transition-colors" href="#quote">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                Ask about dietaries
              </a>
<a className="text-sm text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5" href="#">
                View labelling
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="Vegan bowl" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="Gluten friendly options" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="Fruit &amp; yoghurt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="Fresh wraps" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Teams love Freshwell</h2>
<p className="text-slate-600 mt-2">Consistently rated 4.9/5 across hundreds of orders.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-amber-600">
<i className="w-5 h-5 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-500 text-amber-500" data-lucide="star"></i>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-800">Amelia R.</p>
<p className="text-xs text-slate-600">Operations, ALPHA</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">Everything arrived labelled and still fresh—zero stress for our offsite.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-800">Daniel K.</p>
<p className="text-xs text-slate-600">People, NOVA</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">Tasty, balanced options that don’t slow the team down in the afternoon.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-800">Sofia T.</p>
<p className="text-xs text-slate-600">Office Lead, LUMA</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-3">We order weekly—communication is excellent and delivery windows are reliable.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">FAQs</h2>
<div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
<details className="group px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-800">What areas do you deliver to?</span>
<i className="w-4 h-4 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">We currently deliver across metro Sydney and Melbourne, with regional service upon request.</p>
</details>
<details className="group px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-800">When should I order?</span>
<i className="w-4 h-4 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Place orders by 3pm for next-day delivery. For large events, 48 hours is recommended.</p>
</details>
<details className="group px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-800">Can you cater for allergies?</span>
<i className="w-4 h-4 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Yes. Share dietary needs at checkout or when requesting a quote and we’ll tailor your order.</p>
</details>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="quote">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Request a quote</h3>
<p className="text-slate-600 mt-2">Tell us about your event and we’ll reply within one business day.</p>
<form className="mt-6 space-y-4" onsubmit="event.preventDefault(); alert('Thanks! We will be in touch shortly.');">
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-slate-700">Full name</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="Alex Morgan" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-slate-700">Email</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="alex@company.com" required="" type="email"/>
</label>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-slate-700">Phone</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="+61 400 000 000" required="" type="tel"/>
</label>
<label className="block">
<span className="text-sm text-slate-700">Company</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="Company name" type="text"/>
</label>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-slate-700">Event date</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" required="" type="date"/>
</label>
<label className="block">
<span className="text-sm text-slate-700">Headcount</span>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" min="1" placeholder="30" required="" type="number"/>
</label>
</div>
<label className="block">
<span className="text-sm text-slate-700">Notes</span>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="Dietaries, delivery window, venue details..." rows="4"></textarea>
</label>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">By submitting, you agree to our Terms and Privacy Policy.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Submit
                </button>
</div>
</form>
</div>
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<img alt="Team enjoying lunch" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<h4 className="text-xl tracking-tight font-medium text-slate-900">Why teams choose us</h4>
<ul className="mt-3 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="badge-check"></i>
                  Consistent quality across offices and dates.
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="badge-check"></i>
                  Clear labelling and dedicated dietary care.
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="badge-check"></i>
                  Friendly support that answers fast.
                </li>
</ul>
<div className="mt-6 rounded-lg border border-slate-200 p-4 bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-items-center">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Prefer to chat?</p>
<p className="text-xs text-slate-600">Call us at 1300 123 456 (Mon–Fri, 8am–5pm)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Built by food lovers</h2>
<p className="text-slate-600 mt-2">We’re a local team passionate about fresh produce and dependable service. Our kitchens operate with a label-first approach to dietaries and a commitment to sustainability.</p>
<div className="mt-6 flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-5 h-5" data-lucide="recycle"></i>
                80% recyclable packaging
              </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-5 h-5" data-lucide="leaf"></i>
                Seasonal sourcing
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Fresh ingredients" className="rounded-xl border border-slate-200 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Kitchen prep" className="rounded-xl border border-slate-200 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Healthy bowl" className="rounded-xl border border-slate-200 object-cover h-48 w-full col-span-2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-600 text-white grid place-items-center font-semibold tracking-tight">FW</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Freshwell</span>
</div>
<p className="text-sm text-slate-600 mt-3">Corporate catering made fresh daily. Sydney &amp; Melbourne.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="mail"></i>
              hello@freshwell.co
            </div>
<div className="mt-2 flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="phone"></i>
              1300 123 456
            </div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Company</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#about">About</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Menus</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#menus">Breakfast</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#menus">Lunch</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#menus">Platters</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Stay in the loop</p>
<form className="mt-3 flex gap-2" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" placeholder="Work email" required="" type="email"/>
<button className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm hover:bg-emerald-700">Join</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-200 pt-6">
<p>© <span id="year"></span> Freshwell Co. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Privacy</a>
<a className="hover:text-slate-700" href="#">Terms</a>
<a className="hover:text-slate-700" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
