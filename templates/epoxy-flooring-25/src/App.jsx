import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Calculator Logic ---
        const slider = document.getElementById('sqft-slider');
        const sqftDisplay = document.getElementById('sqft-display');
        const priceDisplay = document.getElementById('total-price');
        const sliderFill = document.getElementById('slider-fill');
        const sliderThumb = document.getElementById('slider-thumb');
        
        // Prices per sqft
        const PRICES = {
            solid: 4.50,
            flake: 5.50,
            metallic: 8.00
        };

        function updatePrice() {
            const sqft = parseInt(slider.value);
            const selectedType = document.querySelector('input[name="finish"]:checked').value;
            const rate = PRICES[selectedType];
            const total = Math.round(sqft * rate);
            
            // Format numbers with commas
            sqftDisplay.innerText = sqft.toLocaleString();
            
            // Animate number count up slightly if change is large, otherwise just set
            priceDisplay.innerText = total.toLocaleString();

            // Update custom slider UI
            const min = parseInt(slider.min);
            const max = parseInt(slider.max);
            const percent = ((sqft - min) / (max - min)) * 100;
            
            sliderFill.style.width = percent + '%';
            sliderThumb.style.left = percent + '%';
        }

        // Initialize and Listen
        slider.addEventListener('input', updatePrice);
        
        // Trigger once on load
        updatePrice();


        // --- Scroll Animations (Intersection Observer) ---
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-50/80 border-b border-slate-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors duration-300">
<span className="font-semibold tracking-tighter text-sm">VR</span>
</div>
<span className="font-semibold tracking-tight text-slate-900 text-sm md:text-base">VALLEY RESIN</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-indigo-600 transition-colors" href="#services">Surfaces</a>
<a className="hover:text-indigo-600 transition-colors" href="#process">Process</a>
<a className="hover:text-indigo-600 transition-colors" href="#estimate">Pricing</a>
<a className="hover:text-indigo-600 transition-colors" href="#gallery">Work</a>
</div>
<a className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-full transition-all flex items-center gap-2" href="#estimate">
<span>Get Estimate</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 left-0 w-[400px] h-[400px] bg-slate-300/30 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 reveal">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Serving California</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                Floor perfection <br/>
<span className="text-slate-400">down to the micron.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Valley Resin transforms residential and commercial concrete into durable, museum-grade surfaces. Based in the heart of California.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm font-medium transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2" href="#estimate">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="18"></iconify-icon>
                    Calculate Cost
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded text-sm font-medium transition-all flex items-center justify-center gap-2" href="#gallery">
                    View Gallery
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto h-64 md:h-96 rounded-xl overflow-hidden relative shadow-2xl reveal border border-slate-200" style={{transitionDelay: '400ms'}}>

<div className="absolute inset-0 bg-slate-900">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs font-medium tracking-widest uppercase opacity-70 mb-1">Project</p>
<p className="text-xl font-medium tracking-tight">Santa Monica Showroom</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group reveal">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Industrial Durability</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Engineered to withstand heavy traffic, chemical spills, and abrasion. Our multi-layer epoxy systems bond molecularly with concrete.
                    </p>
</div>

<div className="group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Bespoke Aesthetics</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        From metallic marble effects to terrazzo-style flakes. We color-match to your brand or interior design palette perfectly.
                    </p>
</div>

<div className="group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Rapid Application</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Our polyaspartic topcoats allow for 1-day installations on specific projects, minimizing downtime for your business or home.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300 relative overflow-hidden" id="estimate">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="reveal">
<span className="text-indigo-400 font-medium tracking-widest text-xs uppercase mb-2 block">Pricing</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Instant Estimate</h2>
<p className="text-slate-400 font-light mb-8 max-w-md">
                    Get a ballpark figure for your project instantly. Adjust the square footage and finish type to see real-time pricing updates.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Includes surface preparation (diamond grinding)</span>
</li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Commercial grade materials</span>
</li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>5-Year delamination warranty</span>
</li>
</ul>
<a className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors inline-flex items-center gap-2 text-sm" href="#contact">
                    Book an on-site consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 reveal shadow-2xl">

<div className="mb-10">
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-slate-200">Area Size</label>
<div className="text-right">
<span className="text-2xl font-semibold text-white tracking-tight" id="sqft-display">400</span>
<span className="text-xs text-slate-500 ml-1">SQ FT</span>
</div>
</div>
<div className="relative w-full h-2 bg-slate-700 rounded-full">
<div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full" id="slider-fill" style={{width: '20%'}}></div>
<input className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20" id="sqft-slider" max="2000" min="200" step="50" type="range" value="400"/>

<div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-slate-900 rounded-full shadow cursor-grab z-10 pointer-events-none" id="slider-thumb" style={{left: '20%'}}></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-wider">
<span>200 sqft</span>
<span>2000 sqft</span>
</div>
</div>

<div className="mb-10">
<label className="text-sm font-medium text-slate-200 mb-4 block">System Type</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="finish" onchange="updatePrice()" type="radio" value="solid"/>
<div className="p-4 rounded-xl border border-slate-600 bg-slate-800/50 hover:bg-slate-700 transition-all peer-checked:border-indigo-500 peer-checked:bg-slate-700">
<div className="w-8 h-8 rounded-full bg-slate-400 mb-3 opacity-80"></div>
<h4 className="text-sm font-medium text-white">Solid</h4>
<p className="text-xs text-slate-400 mt-1">Minimalist, uniform color.</p>
</div>
</label>

<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="finish" onchange="updatePrice()" type="radio" value="flake"/>
<div className="p-4 rounded-xl border border-slate-600 bg-slate-800/50 hover:bg-slate-700 transition-all peer-checked:border-indigo-500 peer-checked:bg-slate-700">
<div className="w-8 h-8 rounded-full bg-slate-500 mb-3 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
</div>
<h4 className="text-sm font-medium text-white">Flake</h4>
<p className="text-xs text-slate-400 mt-1">Texture, grip, granite look.</p>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="finish" onchange="updatePrice()" type="radio" value="metallic"/>
<div className="p-4 rounded-xl border border-slate-600 bg-slate-800/50 hover:bg-slate-700 transition-all peer-checked:border-indigo-500 peer-checked:bg-slate-700">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-300 to-indigo-700 mb-3"></div>
<h4 className="text-sm font-medium text-white">Metallic</h4>
<p className="text-xs text-slate-400 mt-1">High-gloss, marble flow.</p>
</div>
</label>
</div>
</div>

<div className="pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-center sm:text-left">
<p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Estimated Total</p>
<div className="flex items-baseline gap-1">
<span className="text-lg text-indigo-400 font-medium">$</span>
<span className="text-4xl font-semibold text-white tracking-tighter shimmer" id="total-price">2,200</span>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 rounded font-medium text-sm hover:bg-slate-200 transition-colors">
                        Lock in Quote
                    </button>
</div>
<p className="text-[10px] text-slate-500 mt-4 text-center sm:text-left">
                    *Estimates are for demonstration. Final price subject to on-site concrete condition assessment.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Selected Works</h2>
<p className="text-slate-500 text-sm">Transformations across the Valley.</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all projects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative group overflow-hidden rounded-lg aspect-video md:aspect-auto md:h-96 reveal">
<img alt="Garage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-xs uppercase tracking-widest mb-1">Palo Alto</p>
<p className="text-lg font-medium">Residential Garage — Full Flake</p>
</div>
</div>
<div className="grid grid-rows-2 gap-4">

<div className="relative group overflow-hidden rounded-lg aspect-video md:aspect-auto reveal" style={{transitionDelay: '100ms'}}>
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-sm font-medium">San Jose Office — Metallic</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-lg aspect-video md:aspect-auto reveal" style={{transitionDelay: '200ms'}}>
<img alt="Patio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-sm font-medium">Fremont Patio — Quartz Grind</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs">VR</div>
<span className="font-semibold tracking-tight text-slate-900">VALLEY RESIN</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Premium epoxy coating services for California's discerning homeowners and businesses. Quality that sets in stone.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Garage Floors</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Commercial Spaces</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Industrial Coats</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Polished Concrete</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                            hello@valleyresin.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                            Sacramento, CA
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-xs text-slate-400">
<p>© 2023 Valley Resin LLC. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
