import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons (set uniform stroke width 1.5)
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Schedule button demo action
    const schedBtn = document.getElementById('scheduleBtn');
    if (schedBtn) {
      schedBtn.addEventListener('click', () => {
        const name = (document.getElementById('fullName')?.value || 'Guest').trim() || 'Guest';
        alert(`Thanks, ${name}! We’ll confirm your tour shortly.`);
      });
    }

    // Gallery slider
    const track = document.getElementById('sliderTrack');
    const slides = track ? track.children.length : 0;
    let index = 0;
    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
      if (!track) return;
      const offset = index * -100;
      track.style.transform = `translateX(${offset}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle('bg-white', i === index);
        d.classList.toggle('bg-white/40', i !== index);
      });
    }
    const prev = document.getElementById('prevSlide');
    const next = document.getElementById('nextSlide');
    prev && prev.addEventListener('click', () => { index = (index - 1 + slides) % slides; updateSlider(); });
    next && next.addEventListener('click', () => { index = (index + 1) % slides; updateSlider(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { index = i; updateSlider(); }));
    updateSlider();
    let auto;
    if (track) {
      auto = setInterval(() => { index = (index + 1) % slides; updateSlider(); }, 6000);
      track.addEventListener('mouseenter', () => clearInterval(auto));
      track.addEventListener('mouseleave', () => auto = setInterval(() => { index = (index + 1) % slides; updateSlider(); }, 6000));
    }

    // Chart.js (dark glass)
    const ctx = document.getElementById('priceChart');
    if (ctx) {
      const g = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
      g.addColorStop(0, 'rgba(255,255,255,0.20)');
      g.addColorStop(1, 'rgba(255,255,255,0.04)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
          datasets: [{
            label: 'Median Price ($M)',
            data: [6.8, 6.7, 6.9, 7.1, 7.0, 7.3, 7.4, 7.5, 7.6, 7.7, 7.9, 8.1],
            borderColor: 'rgba(255,255,255,0.85)',
            backgroundColor: g,
            tension: 0.35,
            fill: true,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.85)',
              titleColor: '#fff',
              bodyColor: '#fff',
              displayColors: false,
              callbacks: {
                label: (p) => `$${p.parsed.y.toFixed(1)}M`
              }
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full backdrop-blur bg-white/5 border-b border-white/10 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-neutral-200">
<p className="opacity-80">We’re available 24/7 for your service.</p>
<a className="inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition" href="tel:+14248424802">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>(424) 842-4802</span>
</a>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="home"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">Frontgate Real Estate</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white" href="#overview">Overview</a>
<a className="text-neutral-300 hover:text-white" href="#book">Book a Tour</a>
<a className="text-neutral-300 hover:text-white" href="#gallery">Gallery</a>
<a className="text-neutral-300 hover:text-white" href="#agents">Agents</a>
<a className="text-neutral-300 hover:text-white" href="#neighborhood">Neighborhood</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm ring-1 ring-white/15 bg-white/5 text-white hover:bg-white/10 transition">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
        </button>
<a className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm bg-white text-neutral-900 hover:bg-neutral-100 transition" href="#book">
<i className="w-4 h-4" data-lucide="calendar"></i> Schedule Tour
        </a>
</div>
</div>
</header>

<section className="relative">
<img alt="Clover Hill property aerial" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

<div className="flex items-center gap-3 mb-4">
<div className="flex -space-x-2">
<img alt="reviewer 1" className="w-8 h-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="reviewer 2" className="w-8 h-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="reviewer 3" className="w-8 h-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="reviewer 4" className="w-8 h-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="flex items-center gap-1 text-white/90 text-sm">
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<span className="font-medium">5.0</span>
<span className="opacity-75">• 128 reviews</span>
</div>
</div>

<div className="backdrop-blur-xl bg-white/10 ring-1 ring-white/15 rounded-2xl p-6 md:p-8 max-w-3xl">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">Clover Hill</h1>
<p className="mt-2 text-white/80 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
          Hidden Hills, CA
        </p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white backdrop-blur-xl">
<div className="text-sm text-white/80">Listing Price</div>
<div className="text-2xl font-semibold tracking-tight">$7,995,999</div>
</div>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white backdrop-blur-xl">
<div className="text-sm text-white/80">Est. Payment</div>
<div className="text-2xl font-semibold tracking-tight">$100,060/mo</div>
</div>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white backdrop-blur-xl">
<div className="text-sm text-white/80">Status</div>
<div className="text-2xl font-semibold tracking-tight">Active</div>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3 text-white">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="bed"></i> 4 Beds
          </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="bath"></i> 3.5 Baths
          </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="ruler"></i> 3,200 sq ft
          </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="car"></i> 2-Car Garage
          </span>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-neutral-900 hover:bg-neutral-100 transition" href="#book">
<i className="w-5 h-5" data-lucide="calendar-check"></i> Schedule a Tour
          </a>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition">
<i className="w-5 h-5" data-lucide="download"></i> Brochure
          </button>
</div>
</div>
</div>
</section>

<main className="relative -mt-12 md:-mt-16" id="overview">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<section className="rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 p-6 md:p-8" id="book">
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Book a Tour</h3>
<p className="text-sm text-neutral-300 mt-1">4261 Tonima Court, Hidden Hills, CA</p>
</div>
<span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="shield-check"></i> Private &amp; Secure
          </span>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3">
<div className="md:col-span-1">
<label className="text-sm text-neutral-200" htmlFor="date">Date</label>
<div className="mt-2 relative">
<i className="w-4 h-4 absolute left-3 top-3 text-neutral-400" data-lucide="calendar"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/5 text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm" id="date" type="date"/>
</div>
</div>
<div className="md:col-span-1">
<label className="text-sm text-neutral-200" htmlFor="fullName">Full Name</label>
<input className="mt-2 w-full px-3 py-2.5 rounded-lg bg-white/5 text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm" id="fullName" placeholder="Alex Johnson" type="text"/>
</div>
<div className="md:col-span-1">
<label className="text-sm text-neutral-200" htmlFor="email">Email</label>
<input className="mt-2 w-full px-3 py-2.5 rounded-lg bg-white/5 text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm" id="email" placeholder="you@example.com" type="email"/>
</div>
<div className="md:col-span-1">
<label className="text-sm text-neutral-200" htmlFor="phone">Phone</label>
<input className="mt-2 w-full px-3 py-2.5 rounded-lg bg-white/5 text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3">
<p className="text-xs text-neutral-400">By submitting, you agree to be contacted about this property.</p>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-4 py-2.5 hover:bg-neutral-100 transition" id="scheduleBtn">
<i className="w-5 h-5" data-lucide="calendar-check"></i> Request Tour
          </button>
</div>
</section>

<section className="mt-8 rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 p-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Property Overview</h2>
<p className="mt-3 text-neutral-300 leading-relaxed">
          A modern sanctuary set on a quiet cul-de-sac, Clover Hill blends warm natural finishes with clean lines and panoramic garden views. Expansive glass opens to a resort-style yard with pool and outdoor kitchen—perfect for daily living and effortless entertaining.
        </p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Lot Size</div>
<div className="mt-1 text-lg font-medium text-white">0.45 acres</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Year Built</div>
<div className="mt-1 text-lg font-medium text-white">2021</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Type</div>
<div className="mt-1 text-lg font-medium text-white">Single Family</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">HOA</div>
<div className="mt-1 text-lg font-medium text-white">$0/mo</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Cooling</div>
<div className="mt-1 text-lg font-medium text-white">Dual-Zone</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Heating</div>
<div className="mt-1 text-lg font-medium text-white">Radiant + HVAC</div>
</div>
</div>
<div className="mt-6">
<h3 className="text-xl font-semibold tracking-tight">Amenities</h3>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Smart Home</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Chef’s Kitchen</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Wine Room</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Home Theater</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Outdoor Kitchen</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10">Solar</span>
</div>
</div>
</section>

<section className="mt-8 rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight">Local Price Trend</h3>
<p className="text-sm text-neutral-400">Hidden Hills, last 12 months</p>
</div>
<div className="flex items-center gap-2 text-sm text-emerald-400">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+7.2%</span>
</div>
</div>
<div className="mt-4">
<div className="w-full h-48"><div className="w-full h-full"><canvas id="priceChart"></canvas></div></div>
</div>
</section>

<section className="mt-8 rounded-2xl backdrop-blur-xl bg-white/5 ring-1 ring-white/10" id="gallery">
<div className="px-6 pt-6 flex items-center justify-between">
<h3 className="text-white text-xl font-semibold tracking-tight">Gallery</h3>
<div className="flex items-center gap-2">
<button className="rounded-full p-2 bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/10" id="prevSlide">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="rounded-full p-2 bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/10" id="nextSlide">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="p-6 pt-4">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
<div className="flex transition-transform duration-500 ease-out" id="sliderTrack">

<img alt="living room" className="w-full basis-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<img alt="kitchen" className="w-full basis-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<img alt="exterior pool" className="w-full basis-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<img alt="bedroom" className="w-full basis-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="backyard" className="w-full basis-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
<button className="dot w-2.5 h-2.5 rounded-full bg-white/40"></button>
<button className="dot w-2.5 h-2.5 rounded-full bg-white/40"></button>
<button className="dot w-2.5 h-2.5 rounded-full bg-white/40"></button>
<button className="dot w-2.5 h-2.5 rounded-full bg-white/40"></button>
<button className="dot w-2.5 h-2.5 rounded-full bg-white/40"></button>
</div>
</div>
</div>
</section>

<section className="mt-8 rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 p-6" id="neighborhood">
<h3 className="text-xl font-semibold tracking-tight">Neighborhood</h3>
<p className="mt-2 text-neutral-300">Quiet, gated streets with top-ranked schools, equestrian trails, and quick access to Malibu and Calabasas amenities.</p>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4 flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="school"></i>
<div>
<div className="font-medium">Round Meadow Elementary</div>
<div className="text-sm text-neutral-400">1.2 mi</div>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4 flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="train"></i>
<div>
<div className="font-medium">Calabasas Commons</div>
<div className="text-sm text-neutral-400">3.8 mi</div>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4 flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="mountain"></i>
<div>
<div className="font-medium">Santa Monica Mtn Trails</div>
<div className="text-sm text-neutral-400">2.1 mi</div>
</div>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-xl ring-1 ring-white/10">
<iframe className="w-full h-64 border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Hidden%20Hills%2C%20CA&amp;output=embed" title="map"></iframe>
</div>
</section>
</div>
</main>

<section className="mt-16" id="agents">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight">Meet Our Agents</h2>
<p className="mt-2 text-neutral-300">Guidance from top‑rated local professionals.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 overflow-hidden">
<img alt="Agent portrait 1" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
<span className="text-neutral-300 ml-1">5.0</span>
</div>
<h3 className="mt-2 text-lg font-medium text-white">Avery Chen</h3>
<div className="mt-1 text-sm text-neutral-400">DRE 01984567</div>
<div className="mt-3 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="tel:+14248424802">
<i className="w-4 h-4" data-lucide="phone"></i> (424) 842‑4802
              </a>
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="mailto:avery@example.com">
<i className="w-4 h-4" data-lucide="mail"></i> Email
              </a>
</div>
</div>
</article>
<article className="rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 overflow-hidden">
<img alt="Agent portrait 2" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
<span className="text-neutral-300 ml-1">5.0</span>
</div>
<h3 className="mt-2 text-lg font-medium text-white">Jordan Lee</h3>
<div className="mt-1 text-sm text-neutral-400">DRE 01890231</div>
<div className="mt-3 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="tel:+14248424802">
<i className="w-4 h-4" data-lucide="phone"></i> (424) 842‑4802
              </a>
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="mailto:jordan@example.com">
<i className="w-4 h-4" data-lucide="mail"></i> Email
              </a>
</div>
</div>
</article>
<article className="rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 overflow-hidden">
<img alt="Agent portrait 3" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
<span className="text-neutral-300 ml-1">5.0</span>
</div>
<h3 className="mt-2 text-lg font-medium text-white">Marco Diaz</h3>
<div className="mt-1 text-sm text-neutral-400">DRE 01938102</div>
<div className="mt-3 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="tel:+14248424802">
<i className="w-4 h-4" data-lucide="phone"></i> (424) 842‑4802
              </a>
<a className="inline-flex items-center gap-1 text-neutral-200 hover:text-white" href="mailto:marco@example.com">
<i className="w-4 h-4" data-lucide="mail"></i> Email
              </a>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="mt-16 backdrop-blur bg-white/5 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<h4 className="text-lg font-semibold tracking-tight">Visit Us</h4>
<p className="mt-2 text-sm text-neutral-300">23500 Long Valley Rd, Hidden Hills, CA 91302, USA</p>
<div className="mt-4 overflow-hidden rounded-lg ring-1 ring-white/10">
<iframe className="w-full h-40 border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Hidden%20Hills%20City%20Hall&amp;output=embed" title="office map"></iframe>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<h4 className="text-lg font-semibold tracking-tight">Frontgate</h4>
<ul className="mt-2 text-sm text-neutral-300 space-y-1">
<li>Premier Real Estate Agents in Greater Los Angeles</li>
<li>CalDRE 02094678</li>
<li>Compass DRE 01991628</li>
</ul>
<div className="mt-4 flex items-center gap-3 text-neutral-200">
<i className="w-4 h-4" data-lucide="instagram"></i>
<i className="w-4 h-4" data-lucide="facebook"></i>
<i className="w-4 h-4" data-lucide="twitter"></i>
<i className="w-4 h-4" data-lucide="linkedin"></i>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<h4 className="text-lg font-semibold tracking-tight">Contact</h4>
<ul className="mt-2 text-sm text-neutral-300 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> (747) 888‑0508</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> info@example.com</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="clock"></i> Mon–Sun, 8:00–20:00</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-400">
<p>© 2025 Frontgate. All rights reserved.</p>
<div className="flex items-center gap-4 mt-2 sm:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 md:hidden">
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full backdrop-blur bg-white/10 text-white py-3 ring-1 ring-white/15 hover:bg-white/15 transition shadow-lg" href="#book">
<i className="w-5 h-5" data-lucide="calendar"></i> Book a Tour
    </a>
</div>





    </>
  );
}
