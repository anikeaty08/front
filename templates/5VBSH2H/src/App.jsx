import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Lucide icons init
    lucide.createIcons();

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-observe]').forEach(el => {
      el.classList.add('opacity-0', 'transition-opacity', 'duration-700');
      observer.observe(el);
    });

    // Satisfaction chart
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Hydration', 'Brightness', 'Elasticity', 'Smoothness'],
        datasets: [{
          label: '% Improved',
          data: [97, 91, 89, 85],
          backgroundColor: '#15803d'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Libre Baskerville' } } },
          y: { grid: { borderDash: [4,4] }, ticks: { stepSize: 20, font: { family: 'Libre Baskerville' } } }
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="flex items-center justify-between px-6 py-4 md:px-10">
<span className="text-xl font-semibold tracking-tight">Aurelia Botanica</span>
<button className="hidden md:block border border-neutral-200 hover:border-neutral-300 transition rounded-full px-5 py-2 text-sm">Shop Now</button>
</nav>

<header className="px-6 md:px-10 pt-10 pb-20 md:pt-20 grid md:grid-cols-2 gap-8 md:gap-16">
<div className="flex flex-col justify-center">
<h1 className="text-4xl md:text-6xl font-semibold leading-tight animate-fade-up">Serenity, bottled.</h1>
<p className="mt-6 max-w-md text-lg leading-relaxed animate-fade-up animate-delay-1">
        A plant-powered facial serum formulated to revive and illuminate your skin with the quiet confidence of nature.
      </p>
<div className="mt-8 flex gap-4 animate-fade-up animate-delay-2">
<button className="px-6 py-3 rounded-full bg-green-700 text-white hover:bg-800 transition">Add to Cart</button>
<button className="px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-400 transition">Learn More</button>
</div>
<div className="mt-8 flex gap-6 animate-fade-up animate-delay-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="leaf"></i>
<span className="text-sm">100% Botanical</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="droplet"></i>
<span className="text-sm">Dermatologist Tested</span>
</div>
</div>
</div>
<div className="relative animate-fade-up animate-delay-4">
<img alt="Serum bottle" className="rounded-xl shadow-lg object-cover w-full h-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
</div>
</header>

<div className="border-t border-neutral-200"></div>

<section className="px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h2 className="text-3xl font-semibold mb-4 tracking-tight">Inside every drop</h2>
<p className="text-lg leading-relaxed">
        Crafted with potent botanicals ethically sourced from sustainable farms.
      </p>
</div>
<div className="md:col-span-2 grid sm:grid-cols-2 gap-10">
<div className="flex flex-col gap-4">
<i className="w-6 h-6 text-green-700" data-lucide="flower"></i>
<h3 className="font-semibold">Edelweiss Stem Cells</h3>
<p className="text-sm leading-relaxed">Boosts collagen and fights oxidative stress.</p>
</div>
<div className="flex flex-col gap-4">
<i className="w-6 h-6 text-green-700" data-lucide="leaf"></i>
<h3 className="font-semibold">Green Tea Phytosomes</h3>
<p className="text-sm leading-relaxed">Rich in antioxidants, calms irritation.</p>
</div>
<div className="flex flex-col gap-4">
<i className="w-6 h-6 text-green-700" data-lucide="droplets"></i>
<h3 className="font-semibold">Hyaluronic Complex</h3>
<p className="text-sm leading-relaxed">Deeply hydrates and plumps the skin.</p>
</div>
<div className="flex flex-col gap-4">
<i className="w-6 h-6 text-green-700" data-lucide="sun"></i>
<h3 className="font-semibold">Vitamin C Ester</h3>
<p className="text-sm leading-relaxed">Brightens complexion and fades spots.</p>
</div>
</div>
</section>

<div className="border-t border-neutral-200"></div>

<section className="px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold mb-4 tracking-tight">Visible benefits</h2>
<p className="max-w-md text-lg leading-relaxed">
        Clinical results after four weeks of daily use.
      </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 mt-1" data-lucide="check"></i>
<span>97% reported increased hydration</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 mt-1" data-lucide="check"></i>
<span>91% saw brighter skin tone</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-700 mt-1" data-lucide="check"></i>
<span>89% noticed reduced fine lines</span>
</li>
</ul>
</div>
<div className="relative flex items-center">
<div className="w-full">
<div>
<canvas height="300" id="statsChart"></canvas>
</div>
</div>
</div>
</section>

<div className="border-t border-neutral-200"></div>

<section className="px-6 md:px-10 py-16 md:py-24">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Voices of radiance</h2>
<div className="grid md:grid-cols-3 gap-10">
<article className="border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
<p className="text-lg leading-relaxed flex-1">
          “My skin has never felt this nourished yet light. The serum absorbs instantly and leaves a natural glow.”
        </p>
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<h4 className="font-semibold leading-tight">Isabella R.</h4>
<span className="text-sm text-neutral-500">Editorial Stylist</span>
</div>
</div>
</article>
<article className="border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
<p className="text-lg leading-relaxed flex-1">
          “Aurelia Botanica is everything I wanted in a clean beauty product—sophisticated, effective, and gentle.”
        </p>
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div>
<h4 className="font-semibold leading-tight">Céline M.</h4>
<span className="text-sm text-neutral-500">Makeup Artist</span>
</div>
</div>
</article>
<article className="border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
<p className="text-lg leading-relaxed flex-1">
          “I’ve tried countless serums; this is the first that feels truly luxurious with zero residue.”
        </p>
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
<div>
<h4 className="font-semibold leading-tight">Alex S.</h4>
<span className="text-sm text-neutral-500">Skincare Enthusiast</span>
</div>
</div>
</article>
</div>
</section>

<div className="border-t border-neutral-200"></div>

<footer className="px-6 md:px-10 py-12 text-sm">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div>
<p className="font-semibold">Aurelia Botanica</p>
<p className="text-neutral-500 mt-2">© <span id="year"></span> All rights reserved.</p>
</div>
<nav className="flex gap-6">
<a className="hover:text-neutral-900 transition" href="#">Privacy</a>
<a className="hover:text-neutral-900 transition" href="#">Terms</a>
<a className="hover:text-neutral-900 transition" href="#">Contact</a>
</nav>
</div>
</footer>



    </>
  );
}
