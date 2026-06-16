import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f8fafc',
100: '#f1f5f9',
900: '#0f172a',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Reveal Animation on Scroll
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
            
            // Interaction for checkboxes to highlight parent div
            const checkboxes = document.querySelectorAll('.custom-checkbox');
            checkboxes.forEach(box => {
                box.addEventListener('change', function() {
                    const parent = this.closest('label').querySelector('div');
                    if(this.checked) {
                        parent.classList.add('border-neutral-900', 'bg-neutral-50');
                        parent.classList.remove('border-neutral-200');
                        parent.querySelector('iconify-icon').classList.remove('hidden');
                    } else {
                        parent.classList.remove('border-neutral-900', 'bg-neutral-50');
                        parent.classList.add('border-neutral-200');
                        parent.querySelector('iconify-icon').classList.add('hidden');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#home">
<div className="w-8 h-8 bg-neutral-900 text-white flex items-center justify-center rounded-lg group-hover:scale-95 transition-transform duration-300">
<span className="font-medium text-sm">8</span>
</div>
<span className="text-lg font-semibold tracking-tighter text-neutral-900">Eight Studios</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#portfolio">Work</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:-translate-y-0.5" href="#contact">
                    Get a Quote
                </a>
</div>

<button className="md:hidden p-2 text-neutral-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 shadow-xl md:hidden" id="mobile-menu">
<a className="text-base font-medium text-neutral-900" href="#services">Services</a>
<a className="text-base font-medium text-neutral-900" href="#portfolio">Work</a>
<a className="text-base font-medium text-neutral-900" href="#about">About</a>
<a className="text-base font-medium text-neutral-900" href="#contact">Get a Quote</a>
</div>
</nav>

<main className="">

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="max-w-xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Accepting new clients for Q4
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6 text-balance">
                        Visuals That <span className="text-neutral-400">Sell.</span>
</h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-md">
                        Premium e-commerce photography and video content designed to elevate your brand and drive Amazon listing performance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 group" href="#contact">
                            Start a Project
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-3.5 bg-white border border-neutral-200 text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all text-center" href="#portfolio">
                            View Portfolio
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-neutral-100">
<p className="text-xs font-medium text-neutral-400 mb-4 uppercase tracking-wider">Trusted by high-growth brands</p>
<div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 items-center">

<span className="text-xl font-bold tracking-tight">Tomorrowlab</span>
<span className="text-xl italic font-serif">Skinroller</span>
<span className="text-xl font-medium tracking-widest">NATIVE</span>
<span className="text-xl font-semibold">Oura</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-50 rounded-2xl overflow-hidden group reveal md:block hidden active">

<img alt="Premium skincare bottle photography" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1616406432452-9215e4e974f9?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20 shadow-lg animate-float">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500">Conversion Rate</span>
<span className="text-xs font-semibold text-green-600">+142%</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16 reveal active">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Crafted for Conversion</h2>
<p className="text-neutral-500 text-lg">We combine creative direction with e-commerce data to build assets that stop the scroll and drive sales.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 reveal active">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Amazon Photography</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                            White background hero shots, infographics, and comparison charts optimized strictly for Amazon's technical requirements.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> 7-image Listing Stack
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Infographics &amp; Lifestyle
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-0.5 hover:border-neutral-900 transition-colors" href="#contact">
                            View Packages
                        </a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 reveal delay-100 active">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Video Production</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                            High-retention product videos, unboxing experiences, and 360° spins that reduce return rates and explain features clearly.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> 360° Product Spins
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Stop Motion
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-0.5 hover:border-neutral-900 transition-colors" href="#contact">
                            View Packages
                        </a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 reveal delay-200 active">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon className="" icon="lucide:image" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Creative Styling</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                            On-location or studio lifestyle photography with professional models and custom set design to tell your brand story.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Prop Sourcing
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Model Casting
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-0.5 hover:border-neutral-900 transition-colors" href="#contact">
                            View Packages
                        </a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Selected Work</h2>
<p className="text-neutral-500">Explore how we help brands stand out in crowded marketplaces.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium">All</button>
<button className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 text-xs font-medium transition-colors">Tech</button>
<button className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 text-xs font-medium transition-colors">Beauty</button>
<button className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 text-xs font-medium transition-colors">Home</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[400px]">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-2 reveal">
<img alt="Headphones product photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-wider font-semibold rounded mb-2">Electronics</span>
<h3 className="text-white text-xl font-semibold tracking-tight">Sony Audio Series</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal delay-100">
<img alt="Minimalist Watch" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-wider font-semibold rounded mb-2">Fashion</span>
<h3 className="text-white text-lg font-semibold tracking-tight">Nordic Watch Co.</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal">
<img alt="Coffee Aesthetic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-wider font-semibold rounded mb-2">F&amp;B</span>
<h3 className="text-white text-lg font-semibold tracking-tight">Morning Roast</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-2 reveal delay-100">
<img alt="Cosmetics Branding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-wider font-semibold rounded mb-2">Beauty</span>
<h3 className="text-white text-xl font-semibold tracking-tight">Lura Skin</h3>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-70 transition-opacity" href="#">
                        View Full Archive <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="case-study">
<div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-800/30 blur-3xl rounded-full translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="flex items-center gap-2 mb-6 text-neutral-400">
<span className="w-8 h-[1px] bg-neutral-500"></span>
<span className="text-xs font-medium uppercase tracking-widest">Featured Case Study</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Reinventing Aura Home's Amazon Presence</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            We helped Aura Home achieve a 35% increase in conversion rate by overhauling their listing imagery with 3D-rendered lifestyle scenes and stop-motion video.
                        </p>
<div className="grid grid-cols-3 gap-8 mb-10 border-t border-neutral-800 pt-8">
<div>
<div className="text-3xl font-semibold text-white mb-1">35%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Conv. Rate</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">2.4x</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">ROAS</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">4d</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Turnaround</div>
</div>
</div>
<a className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-100 transition-colors" href="#contact">
                            Read Case Study
                        </a>
</div>
<div className="relative reveal delay-200">
<div className="aspect-[4/5] bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">

<img alt="Furniture Photography" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2158&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded text-xs font-medium text-white">After Optimization</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">About Eight Studios</h2>
<p className="text-neutral-500 leading-relaxed mb-6">
                            Founded in 2020, we are a collective of photographers, 3D artists, and e-commerce strategists. We don't just take pretty pictures; we engineer visuals to solve business problems.
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="lucide:zap" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Fast &amp; Reliable</h4>
<p className="text-xs text-neutral-500 mt-1">Standard 5-day turnaround for studio shots.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="lucide:award" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Platform Experts</h4>
<p className="text-xs text-neutral-500 mt-1">We know Amazon's ToS inside and out.</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-2 gap-4 reveal delay-100">
<img alt="Studio Team" className="rounded-2xl h-64 w-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Camera Gear" className="rounded-2xl h-64 w-full object-cover translate-y-8" src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-neutral-500">No hidden fees. Choose a package or get a custom quote for bulk SKUs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-neutral-200 reveal">
<h3 className="text-lg font-semibold text-neutral-900">Starter Pack</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold tracking-tight">$450</span>
<span className="text-neutral-400 text-sm">/ product</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> 5 White Background Photos
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Basic Retouching
                            </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-neutral-200 text-center text-sm font-medium text-neutral-900 hover:border-neutral-900 transition-colors" href="#contact">Select Starter</a>
</div>

<div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 shadow-xl reveal delay-100 relative">
<div className="absolute top-0 right-0 bg-white text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
<h3 className="text-lg font-semibold text-white">Amazon Launch</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">$850</span>
<span className="text-neutral-400 text-sm">/ product</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon> 7 Premium Photos
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" width="14"></iconify-icon> 2 Lifestyle Composites
                            </li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors" href="#contact">Select Launch</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 reveal delay-200">
<h3 className="text-lg font-semibold text-neutral-900">Full Brand</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold tracking-tight">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> Location Lifestyle Shoots
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900" icon="lucide:check" width="14"></iconify-icon> 360° &amp; Stop Motion
                            </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-neutral-200 text-center text-sm font-medium text-neutral-900 hover:border-neutral-900 transition-colors" href="#contact">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Start Your Project</h2>
<p className="text-neutral-500">Tell us about your product and goals. We usually reply within 2 hours.</p>
</div>
<form className="space-y-8 reveal delay-100">

<div>
<label className="block text-sm font-medium text-neutral-900 mb-4">I'm interested in...</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer">
<input className="custom-checkbox hidden" name="service" type="checkbox" value="photography"/>
<div className="border border-neutral-200 rounded-xl p-4 text-center hover:border-neutral-400 transition-all select-none h-full flex flex-col items-center justify-center gap-2">
<iconify-icon className="hidden text-neutral-900" icon="lucide:camera" width="20"></iconify-icon>
<span className="text-sm">Photography</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox hidden" name="service" type="checkbox" value="video"/>
<div className="border border-neutral-200 rounded-xl p-4 text-center hover:border-neutral-400 transition-all select-none h-full flex flex-col items-center justify-center gap-2">
<iconify-icon className="hidden text-neutral-900" icon="lucide:video" width="20"></iconify-icon>
<span className="text-sm">Video / 360</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox hidden" name="service" type="checkbox" value="infographics"/>
<div className="border border-neutral-200 rounded-xl p-4 text-center hover:border-neutral-400 transition-all select-none h-full flex flex-col items-center justify-center gap-2">
<iconify-icon className="hidden text-neutral-900" icon="lucide:bar-chart-2" width="20"></iconify-icon>
<span className="text-sm">Infographics</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox hidden" name="service" type="checkbox" value="full"/>
<div className="border border-neutral-200 rounded-xl p-4 text-center hover:border-neutral-400 transition-all select-none h-full flex flex-col items-center justify-center gap-2">
<iconify-icon className="hidden text-neutral-900" icon="lucide:package" width="20"></iconify-icon>
<span className="text-sm">Full Launch</span>
</div>
</label>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider" htmlFor="name">Name</label>
<input className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider" htmlFor="email">Work Email</label>
<input className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider" htmlFor="message">Project Details</label>
<textarea className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent resize-none" id="message" placeholder="Tell us about your products, timeline, and estimated SKU count..." rows="4"></textarea>
</div>
<div className="flex items-center justify-end pt-4">
<button className="px-10 py-4 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200/50 flex items-center gap-2 group" type="button">
                            Send Request
                             <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-neutral-900 text-neutral-400 py-16 text-sm">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-6 h-6 bg-white text-neutral-900 flex items-center justify-center rounded group-hover:scale-95 transition-transform duration-300">
<span className="font-bold text-xs">8</span>
</div>
<span className="font-semibold tracking-tight">Eight Studios</span>
</div>
<p className="mb-6">Helping e-commerce brands scale through high-impact visual content.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Amazon Photography</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lifestyle &amp; Editorial</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Get in touch</h4>
<p className="mb-2">hello@eightstudios.com</p>
<p>+1 (555) 123-4567</p>
<p className="mt-4">1024 Creative Blvd,Los Angeles, CA</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 Eight Studios. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
