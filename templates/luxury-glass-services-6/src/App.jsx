import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)' }
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');

        // Toggle dark class on the HTML tag
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });

        // Pricing Calculator Logic
        const slider = document.getElementById('pricingSlider');
        const sqftDisplay = document.getElementById('sqftDisplay');
        const priceDisplay = document.getElementById('priceDisplay');

        // Base $250 + $45 per sqft
        function calculatePrice(sqft) {
            const base = 250;
            const rate = 45;
            let total = base + (sqft * rate);
            return Math.round(total);
        }

        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            sqftDisplay.textContent = parseInt(val).toLocaleString();
            priceDisplay.textContent = calculatePrice(parseInt(val)).toLocaleString();
        });

        // Scroll Animation Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
            observer.observe(elem);
        });

        // Trigger first animations immediately on load
        setTimeout(() => {
            document.querySelectorAll('section:first-of-type .animate-on-scroll').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
            });
        }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative transition-colors duration-500" id="app-wrapper">

<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-stone-300/20 dark:bg-stone-800/40 blur-[120px] pointer-events-none z-0"></div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-stone-200/50 dark:border-stone-800/50 bg-white/60 dark:bg-stone-950/60 backdrop-blur-xl transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-stone-900 dark:text-white" href="#">GLSS</a>
<nav className="hidden md:flex gap-6 text-sm font-medium text-stone-500 dark:text-stone-400">
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#estimate">Estimate</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button aria-label="Toggle Theme" className="hover:bg-stone-100 dark:hover:bg-stone-900 dark:text-stone-400 transition-colors flex text-stone-500 rounded-full pt-2 pr-2 pb-2 pl-2 items-center justify-center" id="theme-toggle">
<iconify-icon className="text-lg dark:hidden block" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" height="18" icon="solar:sun-linear" strokeWidth="1.5" style={{color: 'rgb(168, 162, 158)'}} width="18"></iconify-icon>
</button>
<a className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 hover:scale-105 transition-transform duration-300" href="#">
                        Request Quote
                    </a>
</div>
</div>
</header>
<main className="md:pt-32 z-10 pt-24 pb-20 relative">

<section className="flex flex-col md:py-20 animate-on-scroll transition-all duration-1000 ease-out-expo text-center max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md mb-8">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-stone-600 dark:text-stone-300">Premium Installations</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-stone-900 dark:text-white max-w-4xl leading-[1.1]">
                    Bespoke Glass Solutions.<br/>
<span className="text-stone-400 dark:text-stone-500">Crafted with Precision.</span>
</h1>
<p className="md:text-lg dark:text-stone-400 text-base font-medium text-stone-600 max-w-2xl mt-6">
                    Elevate your architectural spaces with custom frameless glass, architectural walls, and premium shower enclosures. Designed flawlessly for modern interiors.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-6 py-3 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-medium text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                        Get an Estimate
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm text-stone-900 dark:text-white font-medium text-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-all duration-300">
                        View Portfolio
                    </button>
</div>

<div className="w-full max-w-4xl mt-20 relative animate-on-scroll transition-all duration-1000 delay-200 ease-out-expo">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50 to-stone-50 dark:via-stone-950 dark:to-stone-950 z-10 h-full w-full pointer-events-none mt-32"></div>
<div className="relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl p-2 shadow-2xl overflow-hidden">
<div className="rounded-xl border border-stone-200/50 dark:border-stone-700/50 bg-white dark:bg-stone-950 p-6 flex flex-col md:flex-row items-center gap-8 relative">

<div className="flex-1 w-full space-y-3 opacity-70">
<div className="h-4 w-1/3 bg-stone-200 dark:bg-stone-800 rounded"></div>
<div className="h-2 w-full bg-stone-100 dark:bg-stone-900 rounded"></div>
<div className="h-2 w-5/6 bg-stone-100 dark:bg-stone-900 rounded"></div>
<div className="h-12 w-full border border-dashed border-stone-300 dark:border-stone-700 rounded-lg flex items-center justify-center text-stone-400">
                                    Architectural Plans
                                </div>
<div className="h-2 w-full bg-stone-100 dark:bg-stone-900 rounded"></div>
</div>

<div className="flex flex-col items-center justify-center shrink-0 text-orange-500 relative z-20">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-2 border border-orange-500/20">
<iconify-icon className="text-xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="h-px w-12 bg-orange-500/50 hidden md:block absolute top-1/2 left-[-3rem]"></div>
<div className="h-px w-12 bg-orange-500/50 hidden md:block absolute top-1/2 right-[-3rem]"></div>
</div>

<div className="flex-1 w-full relative h-32 rounded-lg border border-orange-500/30 bg-gradient-to-tr from-orange-500/5 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-white/40 dark:bg-stone-900/40 backdrop-blur-md"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-white/80 dark:bg-stone-800/80 rotate-45 blur-2xl"></div>
<span className="relative z-10 text-xs font-medium text-orange-600 dark:text-orange-400 tracking-widest uppercase">Precision Cut Panel</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll transition-all duration-700">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 dark:text-white mb-4">Process designed for perfection</h2>
<p className="text-sm md:text-base text-stone-600 dark:text-stone-400">From the initial consultation to the final polish, our end-to-end service guarantees flawless integration into your space.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t border-dashed border-stone-300 dark:border-stone-700 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll transition-all duration-700 delay-100">
<div className="w-16 h-16 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-stone-900 dark:text-white" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">1. Consultation &amp; Measure</h3>
<p className="text-sm text-stone-600 dark:text-stone-400">Our technicians visit your site for laser-precise measurements and design collaboration.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll transition-all duration-700 delay-200">
<div className="w-16 h-16 rounded-2xl bg-stone-900 dark:bg-white border border-stone-900 dark:border-white shadow-md flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white dark:text-stone-900" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">2. Precision Fabrication</h3>
<p className="text-sm text-stone-600 dark:text-stone-400">Your glass is custom-cut, tempered, and polished to exact structural specifications.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center animate-on-scroll transition-all duration-700 delay-300">
<div className="w-16 h-16 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-stone-900 dark:text-white" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">3. Flawless Installation</h3>
<p className="text-sm text-stone-600 dark:text-stone-400">Our expert team handles the installation with minimal disruption and perfect alignment.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50 dark:bg-stone-900/20 border-y border-stone-200/50 dark:border-stone-800/50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 dark:text-white mb-10 animate-on-scroll transition-all duration-700">Crafted for luxury spaces</h2>
<div className="grid md:grid-cols-3 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 flex flex-col justify-between overflow-hidden relative group animate-on-scroll transition-all duration-700">
<div className="relative z-10">
<iconify-icon className="text-3xl text-stone-400 mb-4" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">Frameless Showers</h3>
<p className="text-sm text-stone-600 dark:text-stone-400 max-w-sm">Custom-cut enclosures that seamlessly blend into your bathroom architecture. Designed without bulky frames to maximize light and space.</p>
</div>
<div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-stone-100 dark:bg-stone-900 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>
</div>

<div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 flex flex-col justify-between group animate-on-scroll transition-all duration-700 delay-100">
<div>
<iconify-icon className="text-3xl text-stone-400 mb-4" icon="solar:wall-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">Glass Partitions</h3>
<p className="text-sm text-stone-600 dark:text-stone-400">Modern architectural dividers for homes and commercial offices.</p>
</div>
</div>

<div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 flex flex-col justify-between group animate-on-scroll transition-all duration-700 delay-200">
<div>
<iconify-icon className="text-3xl text-stone-400 mb-4" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">Custom Mirrors</h3>
<p className="text-sm text-stone-600 dark:text-stone-400">Oversized, backlit, and precision-cut mirrors for any wall space.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 flex flex-col justify-between overflow-hidden relative group animate-on-scroll transition-all duration-700 delay-300">
<div className="relative z-10 flex items-center justify-between w-full h-full">
<div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">Premium Hardware Finishes</h3>
<p className="text-sm text-stone-600 dark:text-stone-400 max-w-sm">Select from matte black, brushed brass, or polished chrome to perfectly match your interior hardware and aesthetic preferences.</p>
</div>

<div className="hidden sm:block">
<div className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
<span className="text-xs font-medium text-stone-500">View Matte Finish</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-stone-200 dark:bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-stone-600 peer-checked:bg-stone-800 dark:peer-checked:bg-orange-500"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-20 pb-20" id="estimate">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12 animate-on-scroll transition-all duration-700">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 dark:text-white mb-4">Estimate your project</h2>
<p className="text-sm md:text-base text-stone-600 dark:text-stone-400">Adjust the square footage below for a rough installation baseline.</p>
</div>
<div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-xl p-8 md:p-12 shadow-xl animate-on-scroll transition-all duration-700 delay-100">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1 w-full">
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-stone-900 dark:text-white">Square Footage (sq. ft)</label>
<span className="text-2xl font-semibold text-stone-900 dark:text-white tracking-tight" id="sqftDisplay">35</span>
</div>

<div className="relative w-full h-6 flex items-center">
<input className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer relative z-10" id="pricingSlider" max="250" min="10" step="5" style={{accentColor: 'rgb(16, 185, 129)'}} type="range" value="35"/>
</div>
<div className="flex justify-between text-xs text-stone-500 mt-2">
<span>10 sqft</span>
<span>250+ sqft</span>
</div>
</div>

<div className="w-full md:w-64 shrink-0 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 p-6 flex flex-col items-center justify-center text-center">
<span className="text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Estimated Baseline</span>
<div className="flex items-baseline gap-1">
<span className="text-stone-400 text-xl">$</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-stone-900 dark:text-white" id="priceDisplay">1,825</span>
</div>
<span className="text-xs text-stone-500 mt-1">materials &amp; labor</span>
<button className="w-full mt-6 py-2 rounded-lg bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-medium text-sm hover:opacity-90 transition-opacity">
                                    Get Exact Quote
                                </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-stone-200/50 dark:border-stone-800/50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 dark:text-white mb-8 animate-on-scroll transition-all duration-700">Frequently Asked Questions</h2>
<div className="space-y-4 animate-on-scroll transition-all duration-700 delay-100">
<details className="group border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-950 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm text-stone-900 dark:text-white">
                                What is the lead time for custom glass?
                                <iconify-icon className="transition-transform group-open:-rotate-180 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-900 mt-2">
                                Typically 2-3 weeks from final measurement to installation, depending on the complexity of the hardware and material availability. Expedited fabrication is available upon request.
                            </div>
</details>
<details className="group border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-950 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm text-stone-900 dark:text-white">
                                Do you offer warranties on hardware and glass?
                                <iconify-icon className="transition-transform group-open:-rotate-180 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-900 mt-2">
                                Yes, we provide a 3-year warranty on all installation labor and seamlessly pass through manufacturer's warranties on all premium hardware finishes and structural hinges.
                            </div>
</details>
<details className="group border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-950 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm text-stone-900 dark:text-white">
                                Can you match existing architectural glass?
                                <iconify-icon className="transition-transform group-open:-rotate-180 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-900 mt-2">
                                Our fabrication team can closely match most commercial and residential glass tints, thicknesses, and edge profiles. We'll bring samples during the consultation to ensure a perfect fit.
                            </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50 dark:bg-stone-900/20 border-t border-stone-200/50 dark:border-stone-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 dark:text-white">Featured Insights</h2>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 transition-colors" href="#">
                            View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<a className="group block animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100" href="#">
<div className="h-48 rounded-xl bg-stone-200 dark:bg-stone-800 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-300 to-stone-100 dark:from-stone-800 dark:to-stone-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-medium text-orange-500 mb-2 block">Guides</span>
<h3 className="text-base font-medium text-stone-900 dark:text-white group-hover:underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 mb-2">Frameless vs. Framed Enclosures</h3>
<p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">Learn the structural and aesthetic differences before starting your next bathroom renovation.</p>
</a>
<a className="group block animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200" href="#">
<div className="h-48 rounded-xl bg-stone-200 dark:bg-stone-800 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-300 to-stone-100 dark:from-stone-800 dark:to-stone-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-medium text-orange-500 mb-2 block">Design</span>
<h3 className="text-base font-medium text-stone-900 dark:text-white group-hover:underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 mb-2">The impact of glass partitions</h3>
<p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">How modern offices use architectural glass to maintain natural light while providing sound insulation.</p>
</a>
<a className="group block animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300" href="#">
<div className="h-48 rounded-xl bg-stone-200 dark:bg-stone-800 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-300 to-stone-100 dark:from-stone-800 dark:to-stone-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-medium text-orange-500 mb-2 block">Portfolio</span>
<h3 className="text-base font-medium text-stone-900 dark:text-white group-hover:underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 mb-2">Project Spotlight: Penthouse Renovation</h3>
<p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">A closer look at the custom blackened-steel and ribbed glass dividers installed in a recent high-end residential project.</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto rounded-3xl bg-stone-900 dark:bg-stone-100 p-10 md:p-16 text-center relative overflow-hidden animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white dark:text-stone-900 mb-6">Elevate your space today.</h2>
<p className="text-stone-400 dark:text-stone-600 text-sm md:text-base max-w-xl mx-auto mb-10">Join homeowners and architects who trust our craftsmanship to deliver stunning, precision-cut glass fixtures.</p>
<button className="px-8 py-4 rounded-full bg-white text-stone-900 dark:bg-stone-900 dark:text-white font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.1)]">
                            Schedule a Free Consultation
                        </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-stone-200 dark:border-stone-900 bg-white dark:bg-stone-950 py-12 relative z-10 transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-stone-900 dark:text-white">GLSS</span>
</div>
<div className="flex gap-6 text-sm text-stone-500 dark:text-stone-400">
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Warranties</a>
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-900 dark:hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-stone-400 dark:text-stone-600">© 2024 Luxury Glass Services. All rights reserved.</p>
</div>
</footer>
</div>



    </>
  );
}
