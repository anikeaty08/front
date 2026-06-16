import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="flex items-center gap-2 text-lg font-medium text-neutral-900 tracking-tighter" href="#">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
                    CBL FARM
                </a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#about">Our Story</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#values">Practices</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors" href="#shop">
                    Visit Shop
                </a>
<button className="md:hidden text-neutral-600 hover:text-neutral-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
<iconify-icon className="text-neutral-400" icon="solar:sun-linear"></iconify-icon>
                    Pasture-raised &amp; naturally grown
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 max-w-4xl leading-tight">
                    Wholesome goods from our family to yours.
                </h1>
<p className="mt-6 text-lg md:text-xl text-neutral-500 max-w-2xl font-normal leading-relaxed">
                    Crowder-Brown-Lopez Farm brings together generations of dedication to provide your table with the highest quality pasture-raised chickens, farm-fresh eggs, and natural pantry essentials.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto" href="#products">
                        Explore Our Harvest
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors w-full sm:w-auto" href="#about">
                        Learn Our Story
                    </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-stone-100 to-transparent rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
</section>

<section className="py-24 bg-white border-y border-neutral-100" id="values">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Naturally Grown</h3>
<p className="text-sm text-neutral-500 leading-relaxed">We believe in working with nature, not against it. Our land is free from harsh chemicals, ensuring pure, clean products.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon className="text-2xl" icon="solar:heart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Animal Welfare First</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Our chickens roam freely on open pastures. Ethical treatment is at the core of everything we do on the farm.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Family Operated</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Three families united by a single vision: to build a sustainable local food system for our community.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Farm Offerings</h2>
<p className="mt-2 text-base text-neutral-500 max-w-lg">Sourced directly from our pastures to your pantry. Quality you can taste.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#shop">
                        View complete catalog <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-sm transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
<img alt="Pasture Raised Chicken" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Pasture-Raised Chicken</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 flex-grow">Moved daily to fresh grass. Plump, flavorful, and raised without antibiotics or hormones.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="text-sm font-medium text-neutral-900">From $18.00</span>
<button className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-sm transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
<img alt="Farm Fresh Eggs" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Farm Fresh Eggs</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 flex-grow">Collected daily from our free-foraging hens. Rich, vibrant yolks and unmatched freshness.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="text-sm font-medium text-neutral-900">$7.00 / Dozen</span>
<button className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-sm transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
<img alt="Natural Pantry Goods" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Natural Pantry Goods</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 flex-grow">Seasonal preserves, raw honey, and handcrafted natural goods made from our farm's bounty.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="text-sm font-medium text-neutral-900">Varies seasonally</span>
<button className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white overflow-hidden rounded-t-[3rem] lg:rounded-t-[4rem]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 mb-8">
                            Our Heritage
                        </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                            Three names, one shared commitment to the land.
                        </h2>
<div className="space-y-6 text-neutral-400 text-base font-normal leading-relaxed">
<p>
                                The Crowder, Brown, and Lopez families came together with a shared frustration over the modern food system. We wanted to know exactly where our food came from, how the animals were treated, and what went into the soil.
                            </p>
<p>
                                What started as a collective effort to feed our own families has grown into CBL Farm. Today, we manage our pastures using regenerative practices, ensuring that while we harvest pure, nutrient-dense food, we are also leaving the earth better than we found it.
                            </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                                Get in touch
                            </a>
</div>
</div>
<div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10">
<img alt="Farm Landscape" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/20"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-900 pt-16 pb-8 border-t border-white/10 text-neutral-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2">
<span className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 mb-4">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
                        CBL FARM
                    </span>
<p className="text-sm max-w-xs leading-relaxed">
                        Sustainable farming, pasture-raised poultry, and natural goods from our families to your table.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#products">Shop</a></li>
<li><a className="hover:text-white transition-colors" href="#values">Practices</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li>hello@cblfarm.com</li>
<li>(555) 123-4567</li>
<li className="pt-2">
                            Visit us at the local farmers market every Saturday.
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs">
<p>© 2024 Crowder-Brown-Lopez Farm. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
