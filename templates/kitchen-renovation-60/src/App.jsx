import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Calculator
        window.addEventListener('load', () => {
            calculatePrice();
        });

        // Portfolio Filtering Logic
        function filterPortfolio(category) {
            const items = document.querySelectorAll('.portfolio-item');
            const buttons = document.querySelectorAll('.filter-btn');

            // Update button styles
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes(category)) {
                    btn.classList.remove('bg-stone-200/50', 'text-stone-600');
                    btn.classList.add('bg-stone-900', 'text-white');
                } else {
                    btn.classList.add('bg-stone-200/50', 'text-stone-600');
                    btn.classList.remove('bg-stone-900', 'text-white');
                }
            });

            // Filter grid items
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    // Trigger reflow for fade animation
                    item.classList.remove('fade-in');
                    void item.offsetWidth; 
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Calculator Logic
        function calculatePrice() {
            // Get selected material price
            const materialRadio = document.querySelector('input[name="material"]:checked');
            const materialPrice = parseInt(materialRadio.value);
            
            // Get Material Name label
            const materialCard = materialRadio.nextElementSibling;
            const materialName = materialCard.querySelector('.material-name').innerText;
            document.getElementById('summaryMaterial').innerText = materialName;

            // Get dimensions
            const width = parseInt(document.getElementById('width').value);
            const depth = parseInt(document.getElementById('depth').value);

            // Update range labels
            document.getElementById('widthVal').innerText = width + ' ft';
            document.getElementById('depthVal').innerText = depth + ' ft';

            // Calculate Sq Ft
            const area = width * depth;
            document.getElementById('summaryVolume').innerText = area + ' sq ft';

            // Base Calculations (Area * Tier Price)
            let basePrice = area * materialPrice;
            
            // Addons
            let addonCost = 0;
            if(document.getElementById('demo').checked) addonCost += 2500;
            if(document.getElementById('stone').checked) addonCost += 4200;
            if(document.getElementById('appliances').checked) addonCost += 12000;

            document.getElementById('addonCost').innerText = '$' + addonCost.toLocaleString();

            // Fixed Labor
            const labor = 15000; 
            
            // Total
            const total = Math.floor(basePrice + labor + addonCost);
            document.getElementById('totalPrice').innerText = '$' + total.toLocaleString();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-[#F5F2EF]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-stone-900 text-white flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900 tracking-tight">RENOVATEYOURKITCHEN</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#styles">Styles</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#process">Our Process</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#guide">Integration Guide</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="/estimate">Estimate Tool</a>
</div>
<a className="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-stone-900 hover:bg-stone-800 text-white inline-block" href="/estimate">
                Instant Estimate
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Kitchen" className="w-full h-full object-cover object-center lg:object-right" src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EF] via-[#F5F2EF]/95 to-transparent/10 md:bg-gradient-to-r md:from-[#F5F2EF] md:via-[#F5F2EF] md:to-transparent"></div>
</div>
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<div className="max-w-2xl">
<span className="inline-block uppercase text-xs font-semibold text-stone-600 tracking-[0.2em] bg-white/50 border-stone-300 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Tri-State Signature Kitchens</span>
<h1 className="leading-[0.95] uppercase md:text-7xl lg:text-7xl text-4xl font-semibold text-stone-950 tracking-tighter mb-8">Elevated Living <br className=""/> Begins in the Kitchen.</h1>
<p className="leading-relaxed text-lg md:text-xl text-stone-700 mb-10 max-w-xl">
                    The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-stone-800 font-medium text-white bg-stone-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/estimate">Browse Style Collections</a>
<a className="inline-flex items-center justify-center transition-all hover:bg-stone-50 font-medium text-stone-900 bg-white border-stone-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="/contact">Book an In-Home Consultation</a>
</div>
<div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-stone-300/60">
<div className="">
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon className="w-5 h-5 text-xl text-stone-900 fill-stone-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl font-bold tracking-tight text-stone-900">4.9</span>
</div>
<p className="leading-tight text-sm font-medium text-stone-600">Verified Client Reviews</p>
</div>
<div className="w-px h-12 bg-stone-300/60"></div>
<div className="">
<div className="flex items-center gap-1 mb-1">
<span className="text-2xl font-bold tracking-tight text-stone-900">15+</span>
</div>
<p className="leading-tight text-sm font-medium text-stone-600">Years Experience</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#F5F2EF] pt-24 pb-24 border-t border-stone-200" id="styles">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-4">Productized Services</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6 leading-tight text-stone-900">SIGNATURE STYLE COLLECTIONS.</h2>
<p className="leading-relaxed text-lg text-stone-600 mb-8">
                        We have reimagined the luxury renovation experience. By combining artisanal design with a "productized" approach, we eliminate the ambiguity of custom building. Select from our signature style palettes—tailored for Tri-State architecture.
                    </p>
<a className="inline-flex items-center text-base font-medium border-b pb-1 text-stone-900 hover:text-stone-600 border-stone-900" href="/estimate">
                        View Integration Guide <iconify-icon className="w-4 h-4 text-lg ml-2" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#EBE8E4] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
<div className="mb-8 text-stone-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:city-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-stone-900">Modern Minimalist</h3>
<p className="text-sm font-medium text-stone-500 mb-3 tracking-wide">Manhattan / Jersey City</p>
<p className="text-lg text-stone-600">Handle-less cabinetry, integrated smart appliances, and slab backsplashes. Optimized for high-rise living.</p>
</div>
<div className="p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-white">
<div className="mb-8 text-stone-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-stone-900">Coastal Hamptons</h3>
<p className="text-sm font-medium text-stone-500 mb-3 tracking-wide">Long Island / Fairfield</p>
<p className="text-lg text-stone-600">Shaker-style millwork, oversized marble islands, and nautical-inspired brass accents. Airy and timeless.</p>
</div>
<div className="p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-stone-50 md:col-span-2 lg:col-span-1">
<div className="mb-8 text-stone-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-stone-900">Industrial Loft</h3>
<p className="text-sm font-medium text-stone-500 mb-3 tracking-wide">Brooklyn / Hoboken</p>
<p className="text-lg text-stone-600">Exposed brick integration, matte black hardware, reclaimed wood accents, and professional-grade ranges.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-stone-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-12 gap-8 border-stone-100">
<div className="max-w-2xl">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Our Process</span>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-stone-900">How It Works</h2>
<p className="text-lg text-stone-600">A streamlined, predictable approach to high-end transformations.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100 relative overflow-hidden group">
<div className="text-6xl font-bold text-stone-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">1</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-stone-900 mb-4 mt-4">Style Selection</h3>
<p className="leading-relaxed text-stone-700">Choose from our three signature aesthetic palettes or customize a hybrid look tailored to your preferences.</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100 relative overflow-hidden group">
<div className="text-6xl font-bold text-stone-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">2</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-stone-900 mb-4 mt-4">Precision Measurement</h3>
<p className="leading-relaxed text-stone-700">Our team conducts a technical site survey in your Westchester, Bergen, or Fairfield home.</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100 relative overflow-hidden group">
<div className="text-6xl font-bold text-stone-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">3</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-stone-900 mb-4 mt-4">Fixed-Quote Proposal</h3>
<p className="leading-relaxed text-stone-700">Receive a comprehensive bid covering labor and material allowances—no "estimate creep."</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100 relative overflow-hidden group">
<div className="text-6xl font-bold text-stone-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">4</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-stone-900 mb-4 mt-4">White-Glove Build</h3>
<p className="leading-relaxed text-stone-700">We manage all local permits and construction, delivering a chef-ready kitchen in 8–12 weeks.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-t pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row mb-12 items-start md:items-end justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Curated Work</span>
<h2 className="text-4xl font-semibold text-stone-900 text-left">Our Transformations</h2>
</div>
<div className="mt-6 md:mt-0 relative w-full md:w-auto">
<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none md:hidden z-10"></div>
<div className="flex gap-2 overflow-x-auto hide-scroll pb-2 md:pb-0 w-full md:w-auto pr-4 md:pr-0">
<button className="filter-btn active whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-900 text-white flex-shrink-0" onclick="filterPortfolio('all')">All</button>
<button className="filter-btn whitespace-nowrap transition-all hover:bg-stone-200 flex-shrink-0 text-sm font-medium text-stone-600 bg-stone-200/50 rounded-full px-4 py-2" onclick="filterPortfolio('modern')">Modern Minimalist</button>
<button className="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-200/50 text-stone-600 hover:bg-stone-200 flex-shrink-0" onclick="filterPortfolio('coastal')">Coastal Hamptons</button>
<button className="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-200/50 text-stone-600 hover:bg-stone-200 flex-shrink-0" onclick="filterPortfolio('industrial')">Industrial Loft</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6" id="portfolio-grid">

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="modern">
<img alt="Modern Minimalist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Manhattan</span>
<h3 className="text-lg font-medium text-white">Sleek Urban Aesthetic</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="coastal">
<img alt="Coastal Hamptons" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Fairfield</span>
<h3 className="text-lg font-medium text-white">Light-Filled &amp; Timeless</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="industrial">
<img alt="Industrial Loft" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Brooklyn</span>
<h3 className="text-lg font-medium text-white">Exposed Brick Integration</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="modern">
<img alt="Modern Minimalist 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Jersey City</span>
<h3 className="text-lg font-medium text-white">Integrated Smart Appliances</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="coastal">
<img alt="Coastal Hamptons 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Long Island</span>
<h3 className="text-lg font-medium text-white">Oversized Marble Island</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="industrial">
<img alt="Industrial Loft 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556909196-414df8b35588?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Hoboken</span>
<h3 className="text-lg font-medium text-white">Professional-Grade Setup</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="calculator">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 gap-x-16 gap-y-16 items-start">

<div className="w-full md:w-2/3">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Instant Pricing Tool</span>
<h2 className="text-4xl font-semibold text-stone-900 tracking-tight mb-8">Start Your Instant Estimate</h2>
<form className="space-y-10" id="cabinetForm" onsubmit="return false;">
<div className="">
<label className="block text-sm font-semibold mb-4 text-stone-900">Select Transformation Tier</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="250"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-stone-50 hover:bg-stone-100">
<div className="w-8 h-8 rounded bg-stone-300 flex items-center justify-center"><iconify-icon className="text-stone-600" icon="solar:star-linear"></iconify-icon></div>
<span className="font-medium text-stone-900 material-name">Standard Tier</span>
<span className="text-sm text-stone-500">Full demolition &amp; professional installation.</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="400"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-stone-50 hover:bg-stone-100">
<div className="w-8 h-8 rounded bg-stone-400 flex items-center justify-center"><iconify-icon className="text-white" icon="solar:crown-linear"></iconify-icon></div>
<span className="font-medium text-stone-900 material-name">Premium Tier</span>
<span className="text-sm text-stone-500">Bespoke cabinetry &amp; upgraded materials.</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="650"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-stone-50 hover:bg-stone-100">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center"><iconify-icon className="text-white" icon="solar:diamond-linear"></iconify-icon></div>
<span className="font-medium text-stone-900 material-name">Luxury Tier</span>
<span className="text-sm text-stone-500">Premium stone imports &amp; integrated tech.</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<div className="flex justify-between mb-2">
<label className="text-sm font-semibold text-stone-900">Kitchen Width (ft)</label>
<span className="text-sm text-stone-500 font-mono" id="widthVal">12 ft</span>
</div>
<input className="w-full" id="width" max="30" min="8" oninput="calculatePrice()" type="range" value="12"/>
</div>
<div className="">
<div className="flex justify-between mb-2">
<label className="text-sm font-semibold text-stone-900">Kitchen Length (ft)</label>
<span className="text-sm font-mono text-stone-500" id="depthVal">14 ft</span>
</div>
<input className="w-full" id="depth" max="30" min="8" oninput="calculatePrice()" type="range" value="14"/>
</div>

<input id="height" type="hidden" value="9"/>
</div>
<div className="">
<label className="block text-sm font-semibold mb-4 text-stone-900">Options &amp; Add-ons</label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="demo" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<iconify-icon className="w-3 h-3 opacity-0 peer-checked:opacity-100 text-white text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">Full Demolition &amp; Haul-away (+$2,500)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="stone" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<iconify-icon className="w-3 h-3 opacity-0 peer-checked:opacity-100 text-white text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">Premium Stone Imports e.g. Calacatta (+$4,200)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="appliances" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<iconify-icon className="w-3 h-3 opacity-0 peer-checked:opacity-100 text-white text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">High-End Appliance Suite (+$12,000)</span>
</label>
</div>
</div>
</form>
</div>

<div className="w-full md:w-1/3 sticky top-24">
<div className="p-8 rounded-2xl shadow-2xl relative overflow-hidden bg-stone-900 text-white">
<div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 bg-stone-800"></div>
<h3 className="text-xl font-semibold tracking-tight mb-6 relative z-10">Estimated Investment</h3>
<div className="space-y-4 mb-8 border-b pb-8 text-sm relative z-10 border-stone-700 text-stone-300">
<div className="flex justify-between">
<span>Selected Tier</span>
<span className="font-medium text-white" id="summaryMaterial">Standard Tier</span>
</div>
<div className="flex justify-between">
<span className="">Square Footage</span>
<span className="font-medium text-white" id="summaryVolume">168 sq ft</span>
</div>
<div className="flex justify-between">
<span className="">Fixed Labor Allowance</span>
<span className="font-medium text-white">$15,000</span>
</div>
<div className="flex justify-between" id="summaryAddons"><span>Add-ons</span><span className="text-white font-medium" id="addonCost">$0</span></div>
</div>
<div className="flex items-end justify-between mb-8 relative z-10">
<span className="text-sm text-stone-400">Total Estimate</span>
<span className="text-4xl font-semibold tracking-tighter" id="totalPrice">$57,000</span>
</div>
<a className="transition-colors hover:bg-stone-100 font-semibold text-stone-900 bg-white w-full z-10 rounded-lg pt-3 pb-3 relative inline-flex items-center justify-center" href="/contact">Schedule Site Survey</a>
<p className="text-xs text-stone-500 mt-4 text-center relative z-10">
                            *Final fixed-price is provided after a formal home survey.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] border-t border-stone-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Common Questions</span>
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">FAQ</h2>
</div>
<div className="space-y-4">
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        How long does a typical Tri-State kitchen renovation take?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        Most of our signature transformations are completed within 8 to 12 weeks once materials arrive on-site. We prioritize aggressive scheduling to minimize downtime in your home.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        Do you handle DOB permits in NYC or local board approvals in CT?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        Yes. Our team specializes in the specific bureaucratic requirements of Tri-State municipalities, from Manhattan Department of Buildings filings to Westchester local board variances.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        What is included in the "Standard, Premium, and Luxury" tiers?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        All tiers include full demolition and professional installation. "Luxury" adds bespoke cabinetry, premium stone imports (e.g., Calacatta Borghini), and integrated high-end appliance suites.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        Can I keep my current appliances?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        While we recommend a full integration for the best aesthetic result, our "Modern Minimalist" and "Industrial Loft" packages can be adapted to fit your existing high-end appliances.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        What areas do you serve specifically?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="flex flex-col justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Take The First Step</span>
<h2 className="text-4xl font-semibold text-stone-900 tracking-tight mb-6">Book an In-Home Consultation</h2>
<p className="text-stone-600 mb-8">Tell us about your home and your vision for the transformation.</p>
<form action="/contact" className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-stone-50" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Phone Number</label>
<input className="focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50 w-full border-stone-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Style Interest</label>
<select className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-stone-50">
<option>Modern Minimalist</option>
<option>Coastal Hamptons</option>
<option>Industrial Loft</option>
<option>Not Sure Yet</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-stone-50" placeholder="Tell us about your current kitchen..." rows="4"></textarea>
</div>
<button className="w-full font-semibold py-4 rounded-lg transition-all shadow-md bg-stone-900 text-white hover:bg-stone-800" type="submit">
                                Request Consultation
                            </button>
</form>
</div>
<div className="mt-16 pt-12 border-t border-stone-200">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="w-5 h-5 text-xl text-stone-700" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-semibold text-stone-900">Tri-State Design &amp; Build Authority</h4>
</div>
<p className="text-sm text-stone-600 mb-6 leading-relaxed">
                            We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.
                        </p>
<div className="space-y-4">
<div className="flex flex-col gap-1">
<h5 className="text-sm font-semibold text-stone-900"><iconify-icon className="mr-1" icon="solar:check-circle-linear"></iconify-icon> Fixed Labor Pricing</h5>
<p className="text-xs text-stone-500 ml-5">We eliminate the uncertainty of hourly billing, providing a clear financial roadmap.</p>
</div>
<div className="flex flex-col gap-1">
<h5 className="text-sm font-semibold text-stone-900"><iconify-icon className="mr-1" icon="solar:check-circle-linear"></iconify-icon> Local Permit Expertise</h5>
<p className="text-xs text-stone-500 ml-5">We navigate the complex building codes of NYC, Westchester, and Greenwich so you don’t have to.</p>
</div>
<div className="flex flex-col gap-1">
<h5 className="text-sm font-semibold text-stone-900"><iconify-icon className="mr-1" icon="solar:check-circle-linear"></iconify-icon> Curated Material Accounts</h5>
<p className="text-xs text-stone-500 ml-5">Access trade-only discounts on Sub-Zero, Wolf, and Miele through our procurement team.</p>
</div>
<div className="flex flex-col gap-1">
<h5 className="text-sm font-semibold text-stone-900"><iconify-icon className="mr-1" icon="solar:check-circle-linear"></iconify-icon> Design-Build Synergy</h5>
<p className="text-xs text-stone-500 ml-5">One point of contact from the first sketch to the final backsplash tile.</p>
</div>
</div>
</div>
</div>
<div className="p-8 md:p-12 rounded-2xl border shadow-sm flex flex-col justify-center h-full bg-[#F5F2EF] border-stone-200">
<div className="mb-10">
<div className="inline-flex items-center justify-center p-3 rounded-xl mb-6 bg-white shadow-sm">
<iconify-icon className="w-6 h-6 text-2xl text-stone-900" icon="solar:point-on-map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-stone-900 tracking-tight mb-2">Corporate Office</h3>
<p className="text-lg text-stone-600">100 Park Avenue, Suite 1500<br/>New York, NY 10017</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-white shadow-sm">
<iconify-icon className="w-5 h-5 text-xl text-stone-700" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-sm mb-1 text-stone-900">Office Hours</h4>
<ul className="text-sm space-y-1 text-stone-600">
<li className="flex justify-between w-48"><span className="">Mon - Fri:</span> <span className="">08:00 AM - 6:00 PM</span></li>
<li className="flex justify-between w-48"><span>Saturday:</span> <span className="">09:00 AM - 2:00 PM</span></li>
<li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-white shadow-sm">
<iconify-icon className="w-5 h-5 text-xl text-stone-700" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-sm mb-1 text-stone-900">Direct Line</h4>
<a className="text-sm transition-colors text-stone-600 hover:text-stone-900" href="tel:+12125550198">+1 (212) 555-0198</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 py-16 text-center border-b border-stone-800">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Your Signature Kitchen Awaits.</h2>
<p className="text-stone-300 mb-8 text-lg">Take the first step toward a kitchen designed for your lifestyle and engineered for your home’s value.</p>
<a className="inline-flex items-center justify-center transition-all hover:bg-stone-100 font-medium text-stone-900 bg-white rounded-full pt-4 pr-8 pb-4 pl-8" href="/estimate">Start Your Instant Estimate</a>
</div>
</section>

<footer className="bg-stone-950 border-stone-800 border-t pt-16 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="p-1 rounded bg-white text-stone-900 flex items-center justify-center">
<iconify-icon className="w-4 h-4" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight">RENOVATEYOURKITCHEN</span>
</div>
<p className="text-sm text-stone-400">Tri-State Signature Kitchens is a licensed and insured design-build firm. All kitchen designs are proprietary.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div className="">
<h4 className="font-semibold mb-4 text-sm text-white">Collections</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li className=""><a className="transition-colors hover:text-white" href="#styles">Modern Minimalist</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#styles">Coastal Hamptons</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#styles">Industrial Loft</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-white">Company</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li className=""><a className="transition-colors hover:text-white" href="#process">Our Process</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#portfolio">Portfolio</a></li>
<li className=""><a className="transition-colors hover:text-white" href="/estimate">Estimate Tool</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-white">Contact</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li>100 Park Ave, Suite 1500<br/>New York, NY 10017</li>
<li><a className="transition-colors hover:text-white" href="tel:+12125550198">+1 (212) 555-0198</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-800 pt-8 gap-4">
<div className="flex flex-col gap-2">
<span className="text-sm text-stone-500">© 2026 RenovateYourKitchen.com. All rights reserved.</span>
<span className="text-xs text-stone-600">CT HIC #000000 | NJ HIC #000000 | NYC DCA #000000</span>
</div>
<div className="flex gap-6">
<a className="text-stone-500 hover:text-white" href="#"><iconify-icon className="w-5 h-5 text-xl" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="text-stone-500 hover:text-white" href="#"><iconify-icon className="w-5 h-5 text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="text-stone-500 hover:text-white" href="#"><iconify-icon className="w-5 h-5 text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed group flex flex-col z-50 right-6 bottom-6 gap-x-3 gap-y-6 items-end">
<div className="flex flex-col gap-3 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 translate-y-4 items-end">
<a className="flex items-center gap-3 transition-colors hover:bg-stone-50 text-stone-800 bg-white border-stone-100 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg" href="/contact">
<span className="text-sm font-medium">Message Us</span>
<div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
<iconify-icon className="w-4 h-4" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
<a className="flex items-center gap-3 transition-colors hover:bg-stone-50 text-stone-800 bg-white border-stone-100 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg" href="tel:+12125550198">
<span className="text-sm font-medium">Call Now</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-900 text-white">
<iconify-icon className="w-4 h-4" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
<button className="flex transition-transform duration-300 group-hover:scale-110 text-white bg-stone-900 w-14 h-14 rounded-full relative shadow-xl items-center justify-center ring-1 ring-stone-900/5">
<span className="absolute inline-flex h-full w-full rounded-full bg-stone-500 opacity-20 animate-ping"></span>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:rotate-90">
<iconify-icon className="w-6 h-6 text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 opacity-0 rotate-90">
<iconify-icon className="w-6 h-6 text-2xl" icon="solar:alt-arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</button>
</div>


    </>
  );
}
