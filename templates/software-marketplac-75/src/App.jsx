import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // View Switcher
        function switchView(viewId) {
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => view.classList.add('hidden'));
            
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.remove('hidden');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });

            const globalNav = document.getElementById('global-nav');
            const globalFooter = document.getElementById('global-footer');
            if(viewId === 'checkout') {
                globalNav.classList.add('hidden');
                globalFooter.classList.add('hidden');
            } else {
                globalNav.classList.remove('hidden');
                globalFooter.classList.remove('hidden');
            }
        }

        // Hero Slider Logic
        let currentHeroSlide = 0;
        const totalHeroSlides = 3;
        let heroSliderInterval;

        function updateHeroSlider() {
            const track = document.getElementById('hero-slider-track');
            const dots = document.querySelectorAll('.hero-dot');
            
            if(!track) return;

            track.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                if (index === currentHeroSlide) {
                    dot.classList.remove('bg-zinc-300', 'w-1.5', 'hover:bg-zinc-400');
                    dot.classList.add('bg-zinc-900', 'w-6');
                } else {
                    dot.classList.remove('bg-zinc-900', 'w-6');
                    dot.classList.add('bg-zinc-300', 'w-1.5', 'hover:bg-zinc-400');
                }
            });
        }

        function nextHeroSlide() {
            currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
            updateHeroSlider();
            resetHeroInterval();
        }

        function prevHeroSlide() {
            currentHeroSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
            updateHeroSlider();
            resetHeroInterval();
        }

        function goToHeroSlide(index) {
            currentHeroSlide = index;
            updateHeroSlider();
            resetHeroInterval();
        }

        function startHeroInterval() {
            heroSliderInterval = setInterval(nextHeroSlide, 6000);
        }

        function resetHeroInterval() {
            clearInterval(heroSliderInterval);
            startHeroInterval();
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateHeroSlider();
            startHeroInterval();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/50" id="global-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="font-medium text-xl tracking-tighter hover:opacity-70 transition-opacity" onclick="switchView('home')">
                SFTWR
            </button>
<nav className="hidden md:flex items-center gap-10 text-sm font-normal text-zinc-500">
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('category')">Operating Systems</button>
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('category')">Office</button>
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('category')">Security</button>
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('category')">Creative</button>
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('support')">Support</button>
</nav>
<div className="flex items-center gap-6 text-zinc-900">
<button aria-label="Search" className="hover:text-blue-600 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifier-linear"></iconify-icon>
</button>
<button aria-label="Cart" className="hover:text-blue-600 transition-colors flex items-center relative" onclick="switchView('cart')">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-blue-600 text-white text-[0.65rem] font-medium h-4 w-4 rounded-full flex items-center justify-center">2</span>
</button>
<button aria-label="Menu" className="md:hidden hover:text-blue-600 transition-colors flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<div className="view-section" id="view-home">

<section className="relative overflow-hidden group bg-zinc-50/30 border-b border-zinc-100">
<div className="flex w-full slider-track" id="hero-slider-track">

<div className="w-full flex-shrink-0 relative py-20 md:py-32">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full h-full">
<div className="flex-1 flex flex-col items-start w-full">
<span className="text-xs font-medium text-blue-600 tracking-widest uppercase mb-6 block bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Genuine Licenses</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight text-zinc-900 mb-8 max-w-2xl">
                                    Professional Software.<br/> Instantly Delivered.
                                </h1>
<p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed font-light">
                                    Upgrade your digital workspace with original licenses for top-tier operating systems, office suites, and creative tools. Secure, legal, and ready to activate.
                                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
<button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors inline-flex justify-center items-center gap-2 group shadow-sm shadow-blue-600/20" onclick="switchView('category')">
                                        Explore Catalog
                                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto justify-center px-6 py-4 text-sm font-normal text-zinc-600 bg-white border border-zinc-200 rounded-full hover:text-zinc-900 hover:border-zinc-300 transition-colors inline-flex items-center gap-2" onclick="switchView('category')">
                                        View Bundles
                                    </button>
</div>
</div>
<div className="flex-1 w-full hidden lg:flex justify-end relative">
<div className="w-full max-w-[500px] aspect-square bg-white rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white"></div>
<iconify-icon className="text-[10rem] text-zinc-300 relative z-10" icon="solar:monitor-smartphone-linear"></iconify-icon>
<div className="absolute bottom-1/4 right-1/4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg transform rotate-6 z-20 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100 rounded-full blur-[100px] -z-0 opacity-40"></div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 relative py-20 md:py-32">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full h-full">
<div className="flex-1 flex flex-col items-start w-full">
<span className="text-xs font-medium text-emerald-600 tracking-widest uppercase mb-6 block bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Enterprise Security</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight text-zinc-900 mb-8 max-w-2xl">
                                    Uncompromised.<br/> Endpoint Protection.
                                </h1>
<p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed font-light">
                                    Safeguard your business with top-tier antivirus, robust firewalls, and anti-ransomware solutions. Protect your data across all devices seamlessly.
                                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
<button className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex justify-center items-center gap-2 group shadow-sm" onclick="switchView('category')">
                                        Shop Security
                                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 w-full hidden lg:flex justify-end relative">
<div className="w-full max-w-[500px] aspect-square bg-white rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white"></div>
<iconify-icon className="text-[10rem] text-zinc-300 relative z-10" icon="solar:shield-warning-linear"></iconify-icon>
<div className="absolute top-1/4 left-1/4 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg transform -rotate-6 z-20 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:lock-password-bold"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-100 rounded-full blur-[100px] -z-0 opacity-30"></div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 relative py-20 md:py-32">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full h-full">
<div className="flex-1 flex flex-col items-start w-full">
<span className="text-xs font-medium text-purple-600 tracking-widest uppercase mb-6 block bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">Creative Suites</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight text-zinc-900 mb-8 max-w-2xl">
                                    Design Without.<br/> Boundaries.
                                </h1>
<p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed font-light">
                                    Unlock your full creative potential with industry-standard design, video editing, and illustration software. Secure a perpetual license today.
                                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
<button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors inline-flex justify-center items-center gap-2 group shadow-sm shadow-purple-600/20" onclick="switchView('category')">
                                        View Creative Tools
                                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 w-full hidden lg:flex justify-end relative">
<div className="w-full max-w-[500px] aspect-square bg-white rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white"></div>
<iconify-icon className="text-[10rem] text-zinc-300 relative z-10" icon="solar:pen-new-square-linear"></iconify-icon>
<div className="absolute bottom-1/4 left-1/4 bg-purple-600 text-white p-4 rounded-2xl shadow-lg transform rotate-12 z-20 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:gallery-bold"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-100 rounded-full blur-[100px] -z-0 opacity-40"></div>
</div>
</div>
</div>
</div>
</div>
<button aria-label="Previous slide" className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur border border-zinc-200 text-zinc-600 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm outline-none" onclick="prevHeroSlide()">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Next slide" className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur border border-zinc-200 text-zinc-600 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm outline-none" onclick="nextHeroSlide()">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-white/50 backdrop-blur px-3 py-2 rounded-full border border-zinc-200/50">
<button aria-label="Go to slide 1" className="hero-dot w-6 h-1.5 rounded-full transition-all duration-300 bg-zinc-900" onclick="goToHeroSlide(0)"></button>
<button aria-label="Go to slide 2" className="hero-dot w-1.5 h-1.5 rounded-full transition-all duration-300 bg-zinc-300 hover:bg-zinc-400" onclick="goToHeroSlide(1)"></button>
<button aria-label="Go to slide 3" className="hero-dot w-1.5 h-1.5 rounded-full transition-all duration-300 bg-zinc-300 hover:bg-zinc-400" onclick="goToHeroSlide(2)"></button>
</div>
</section>

<section className="border-b border-zinc-100 py-10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by leading organizations</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale">
<span className="text-2xl font-medium tracking-tighter text-zinc-800">SysCorp</span>
<span className="text-2xl font-medium tracking-tighter text-zinc-800">Nexus</span>
<span className="text-2xl font-medium tracking-tighter text-zinc-800">AuraDigital</span>
<span className="text-2xl font-medium tracking-tighter text-zinc-800">Vertex</span>
<span className="text-2xl font-medium tracking-tighter text-zinc-800 hidden md:block">Horizon</span>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900">Most Popular</h2>
<p className="text-zinc-500 mt-3 text-base font-light">Essential tools trusted by professionals worldwide.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors pb-1" onclick="switchView('category')">
                            View all bestsellers <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:monitor-smartphone-linear"></iconify-icon>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-zinc-200/50 text-xs font-medium text-zinc-900 px-3 py-1.5 rounded-full shadow-sm">Bestseller</div>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Operating System</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">OS Pro 11 - 64 Bit</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light leading-relaxed">The ultimate operating system designed for hybrid work. Includes advanced security and management tools.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$139.00</span>
</div>
</div>
</button>
<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Office Suite</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Workspace Pro 2024</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light leading-relaxed">Everything you need to create, present, and calculate. Lifetime license for 1 PC.</p>
<div className="mt-auto flex items-center gap-3">
<span className="text-sm font-normal text-zinc-400 line-through">$249.00</span>
<span className="text-lg font-medium text-blue-600">$189.00</span>
</div>
</div>
</button>
<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Security</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Total Security Suite</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light leading-relaxed">Award-winning antivirus protection against malware, ransomware, and phishing attacks.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$45.00</span>
</div>
</div>
</button>
<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Creative Tools</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Design Studio Max</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light leading-relaxed">Industry-standard vector graphics, photo editing, and layout design software bundle.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$299.00</span>
</div>
</div>
</button>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden relative flex flex-col lg:flex-row items-center border border-zinc-800">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="p-12 md:p-20 lg:p-24 flex-1 relative z-10 flex flex-col items-start">
<span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm mb-8">Featured Bundle</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight">
                                Complete Designer Collection.
                            </h2>
<p className="text-zinc-400 text-lg font-light mb-10 max-w-md leading-relaxed">
                                Transform your creative workflow with the ultimate suite of design, illustration, and video editing tools. Secure a perpetual license today.
                            </p>
<button className="bg-white text-zinc-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors inline-flex items-center gap-2" onclick="switchView('product')">
                                Discover the Suite
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 w-full lg:h-[600px] flex items-center justify-center p-12 relative z-10">
<div className="w-full max-w-md aspect-square bg-zinc-800/50 rounded-full blur-3xl absolute opacity-50"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 w-32 h-32 rounded-2xl flex items-center justify-center transform -translate-y-4">
<iconify-icon className="text-4xl text-blue-400" icon="solar:pen-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 w-32 h-32 rounded-2xl flex items-center justify-center transform translate-y-8">
<iconify-icon className="text-4xl text-purple-400" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 w-32 h-32 rounded-2xl flex items-center justify-center transform translate-x-4">
<iconify-icon className="text-4xl text-emerald-400" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 w-32 h-32 rounded-2xl flex items-center justify-center transform translate-y-4 -translate-x-4">
<iconify-icon className="text-4xl text-amber-400" icon="solar:layers-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24 pt-12">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-zinc-50 border border-zinc-200/60 rounded-[2rem] p-12 md:p-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900 mb-4">Ready to upgrade your workflow?</h2>
<p className="text-base text-zinc-500 font-light mb-8 max-w-lg mx-auto">Join thousands of professionals who trust SFTWR for their software needs.</p>
<button className="bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2" onclick="switchView('category')">
                            Start Shopping
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="view-category">
<div className="bg-zinc-50 border-b border-zinc-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl font-medium tracking-tighter text-zinc-900 mb-4">Software Catalog</h1>
<p className="text-zinc-500 font-light max-w-2xl">Browse our extensive collection of genuine software licenses. Filter by category, price, or compatibility to find exactly what you need.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="space-y-8">
<div>
<h3 className="font-medium text-zinc-900 mb-4">Categories</h3>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input checked="" className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> All Software</label></li>
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> Operating Systems</label></li>
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> Office Suites</label></li>
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> Security</label></li>
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> Creative Tools</label></li>
</ul>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-4">Price Range</h3>
<div className="mb-4">
<input max="1000" min="0" type="range" value="500"/>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>$0</span>
<span>$500+</span>
</div>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-4">License Type</h3>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> Lifetime / Perpetual</label></li>
<li><label className="flex items-center gap-3 cursor-pointer hover:text-zinc-900"><input className="accent-blue-600 w-4 h-4 rounded border-zinc-300" type="checkbox"/> 1-Year Subscription</label></li>
</ul>
</div>
</div>
</aside>

<div className="flex-grow">
<div className="flex justify-between items-center mb-8 text-sm">
<span className="text-zinc-500 font-light">Showing 1-12 of 48 products</span>
<select className="border border-zinc-200 rounded-lg px-3 py-2 bg-white text-zinc-700 outline-none focus:border-blue-600 cursor-pointer">
<option>Sort by: Popularity</option>
<option>Sort by: Price (Low to High)</option>
<option>Sort by: Price (High to Low)</option>
<option>Sort by: Newest</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Operating System</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">OS Pro 11 - 64 Bit</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light">The ultimate operating system designed for hybrid work.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$139.00</span>
</div>
</div>
</button>
<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Office Suite</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Workspace Pro 2024</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light">Everything you need to create, present, and calculate.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$189.00</span>
</div>
</div>
</button>
<button className="group flex flex-col h-full text-left" onclick="switchView('product')">
<div className="bg-zinc-50/50 w-full aspect-[4/3] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-zinc-100 border border-zinc-100/50">
<iconify-icon className="text-6xl text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-900" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-grow">
<div className="text-xs font-normal text-zinc-400 mb-2">Security</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Total Security Suite</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-light">Award-winning antivirus protection against malware.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-medium text-blue-600">$45.00</span>
</div>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-product">
<div className="max-w-7xl mx-auto px-6 py-12">

<nav className="flex text-sm text-zinc-400 font-light mb-12">
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('home')">Home</button>
<span className="mx-3">/</span>
<button className="hover:text-zinc-900 transition-colors" onclick="switchView('category')">Operating Systems</button>
<span className="mx-3">/</span>
<span className="text-zinc-900 font-normal">OS Pro 11 - 64 Bit</span>
</nav>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div className="bg-zinc-50 w-full aspect-square rounded-[2.5rem] flex items-center justify-center relative border border-zinc-100">
<iconify-icon className="text-[12rem] text-zinc-300" icon="solar:monitor-smartphone-linear"></iconify-icon>
<div className="absolute top-8 left-8 bg-white border border-zinc-200 text-xs font-medium text-zinc-900 px-4 py-2 rounded-full shadow-sm">Instant Delivery</div>
</div>

<div className="flex flex-col justify-center">
<h1 className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-900 mb-4">OS Pro 11 - 64 Bit</h1>
<p className="text-xl font-light text-zinc-500 mb-8">The ultimate operating system designed for hybrid work. Powerful for employees, consistent for IT, and secure for all.</p>
<div className="text-4xl font-medium text-zinc-900 mb-8 flex items-baseline gap-3">
                            $139.00 <span className="text-sm text-zinc-400 font-normal line-through">$199.00</span>
</div>
<ul className="space-y-4 text-zinc-600 font-light mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Lifetime License for 1 PC</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Official Download Link Included</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Multi-language Support</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>24/7 Technical Support</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex-1 flex justify-center items-center gap-2 shadow-sm shadow-blue-600/20" onclick="switchView('cart')">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
                                Add to Cart
                            </button>
<button className="bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors flex-1 flex justify-center items-center" onclick="switchView('checkout')">
                                Buy Now
                            </button>
</div>

<div className="mt-12 border-t border-zinc-100">
<details className="group py-6 border-b border-zinc-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-zinc-900">
                                    System Requirements
                                    <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-zinc-500 font-light leading-relaxed">
<p><strong>Processor:</strong> 1 GHz or faster with 2 or more cores on a compatible 64-bit processor.</p>
<p className="mt-2"><strong>RAM:</strong> 4 GB or more.</p>
<p className="mt-2"><strong>Storage:</strong> 64 GB or larger storage device.</p>
<p className="mt-2"><strong>Firmware:</strong> UEFI, Secure Boot capable.</p>
</div>
</details>
<details className="group py-6 border-b border-zinc-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-zinc-900">
                                    Delivery &amp; Activation
                                    <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-zinc-500 font-light leading-relaxed">
                                    Your product key will be displayed immediately after payment and sent to your email along with official download links and step-by-step activation instructions.
                                </div>
</details>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-about">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
<span className="text-xs font-medium text-blue-600 tracking-widest uppercase mb-6 block bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 w-max mx-auto">About Us</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 mb-8 leading-tight">Empowering digital workflows with authentic software.</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-16">
                    SFTWR was founded on a simple premise: acquiring essential professional software shouldn't be complicated, risky, or overpriced. We partner directly with leading distributors to provide you with 100% genuine licenses delivered instantly to your inbox.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem]">
<div className="text-3xl font-medium tracking-tighter text-zinc-900 mb-2">50K+</div>
<div className="text-sm text-zinc-500 font-light">Happy Customers</div>
</div>
<div className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem]">
<div className="text-3xl font-medium tracking-tighter text-zinc-900 mb-2">99.9%</div>
<div className="text-sm text-zinc-500 font-light">Activation Rate</div>
</div>
<div className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem]">
<div className="text-3xl font-medium tracking-tighter text-zinc-900 mb-2">24/7</div>
<div className="text-sm text-zinc-500 font-light">Expert Support</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-contact">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-900 mb-6">Get in touch</h1>
<p className="text-lg text-zinc-500 font-light mb-12 max-w-md">Whether you have a question about bulk licensing, need technical support, or just want to say hello, our team is ready to help.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-zinc-600">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-1">Email</h3>
<p className="text-zinc-500 font-light text-sm">support@sftwr.com</p>
<p className="text-zinc-500 font-light text-sm">sales@sftwr.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-zinc-600">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-1">Phone</h3>
<p className="text-zinc-500 font-light text-sm">+1 (555) 123-4567</p>
<p className="text-zinc-500 font-light text-sm">Mon-Fri, 9am - 6pm EST</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-8 md:p-12">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-900">First Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-900">Last Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-900">Email Address</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-900">Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-support">
<div className="max-w-3xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-900 mb-6">Help Center</h1>
<p className="text-lg text-zinc-500 font-light">Find answers to common questions about licenses, activation, and billing.</p>
</div>
<div className="space-y-4">
<details className="group bg-zinc-50 border border-zinc-100 rounded-2xl cursor-pointer" open="">
<summary className="flex items-center justify-between font-medium text-zinc-900 p-6">
                            How fast will I receive my license key?
                            <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                            Delivery is fully automated and instant. As soon as your payment is successfully processed, the license key and download instructions will appear on your screen and will be emailed to you concurrently.
                        </div>
</details>
<details className="group bg-zinc-50 border border-zinc-100 rounded-2xl cursor-pointer">
<summary className="flex items-center justify-between font-medium text-zinc-900 p-6">
                            Are the software licenses permanent?
                            <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                            Most of our licenses are lifetime/perpetual, meaning you pay once and own it forever. Subscriptions (like 1-year antivirus plans) are clearly marked in the product title and description.
                        </div>
</details>
<details className="group bg-zinc-50 border border-zinc-100 rounded-2xl cursor-pointer">
<summary className="flex items-center justify-between font-medium text-zinc-900 p-6">
                            What if my key doesn't work?
                            <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                            We guarantee 100% working keys. In the rare event of an activation issue, our technical support team is available 24/7 to resolve the issue or provide a replacement key immediately.
                        </div>
</details>
<details className="group bg-zinc-50 border border-zinc-100 rounded-2xl cursor-pointer">
<summary className="flex items-center justify-between font-medium text-zinc-900 p-6">
                            Do you offer refunds?
                            <iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 rotate-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                            Due to the digital nature of our products, we offer refunds only if the license key has not been viewed or if it is proven to be defective and our support team cannot fix the issue.
                        </div>
</details>
</div>
<div className="mt-16 text-center border-t border-zinc-100 pt-12">
<p className="text-zinc-500 font-light mb-6">Can't find what you're looking for?</p>
<button className="bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:border-zinc-300 transition-colors inline-flex items-center gap-2" onclick="switchView('contact')">
                        Contact Support
                    </button>
</div>
</div>
</div>

<div className="view-section hidden" id="view-cart">
<div className="max-w-4xl mx-auto px-6 py-24">
<h1 className="text-4xl font-medium tracking-tighter text-zinc-900 mb-12">Your Cart</h1>
<div className="space-y-6 mb-12 border-t border-zinc-100 pt-6">

<div className="flex items-center gap-6">
<div className="w-24 h-24 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<div className="flex-grow">
<h3 className="font-medium text-zinc-900">OS Pro 11 - 64 Bit</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Digital License Key</p>
</div>
<div className="text-right">
<div className="font-medium text-zinc-900">$139.00</div>
<button className="text-sm text-red-500 font-light mt-1 hover:text-red-600">Remove</button>
</div>
</div>
</div>
<div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<div className="text-sm text-zinc-500 font-light mb-1">Total</div>
<div className="text-3xl font-medium tracking-tighter text-zinc-900">$139.00</div>
</div>
<button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-sm shadow-blue-600/20" onclick="switchView('checkout')">
                        Proceed to Checkout
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="view-section hidden" id="view-checkout">
<div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center py-12 px-6">
<div className="w-full max-w-md bg-white border border-zinc-200 shadow-xl shadow-zinc-200/20 rounded-[2rem] p-8 md:p-12">
<button className="text-sm text-zinc-500 hover:text-zinc-900 mb-8 flex items-center gap-2 transition-colors" onclick="switchView('cart')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to cart
                    </button>
<h1 className="text-2xl font-medium tracking-tighter text-zinc-900 mb-8">Checkout</h1>
<form onsubmit="event.preventDefault(); switchView('home'); alert('Payment Successful! Check your email for the license key.');">
<div className="space-y-4 mb-8">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-900">Email for Delivery</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-900">Card Information</label>
<div className="border border-zinc-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600 transition-colors">
<input className="w-full bg-zinc-50 px-4 py-3 text-sm focus:outline-none border-b border-zinc-200" placeholder="Card number" required="" type="text"/>
<div className="flex">
<input className="w-1/2 bg-zinc-50 px-4 py-3 text-sm focus:outline-none border-r border-zinc-200" placeholder="MM / YY" required="" type="text"/>
<input className="w-1/2 bg-zinc-50 px-4 py-3 text-sm focus:outline-none" placeholder="CVC" required="" type="text"/>
</div>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2" type="submit">
<iconify-icon className="text-lg" icon="solar:lock-password-linear"></iconify-icon>
                            Pay $139.00
                        </button>
</form>
</div>
</div>
</div>
</main>

<footer className="bg-white pt-24 pb-12 border-t border-zinc-100" id="global-footer">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 text-sm">
<div className="col-span-2 lg:col-span-2">
<button className="font-medium text-xl tracking-tighter text-zinc-900 block mb-8" onclick="switchView('home')">
                    SFTWR
                </button>
<p className="text-zinc-500 font-light max-w-sm mb-8 leading-relaxed text-base">
                    The premium destination for genuine digital software licenses. Empowering professionals with secure, instantly delivered tools.
                </p>
<div className="flex items-center gap-5 text-zinc-400">
<iconify-icon className="text-2xl hover:text-zinc-600 transition-colors cursor-pointer" icon="solar:card-linear"></iconify-icon>
<iconify-icon className="text-2xl hover:text-zinc-600 transition-colors cursor-pointer" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-2xl hover:text-zinc-600 transition-colors cursor-pointer" icon="solar:lock-password-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-6">Store</h4>
<ul className="flex flex-col gap-4 text-zinc-500 font-light">
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('category')">Operating Systems</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('category')">Office Software</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('category')">Antivirus &amp; Security</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('category')">Server Solutions</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-6">Support</h4>
<ul className="flex flex-col gap-4 text-zinc-500 font-light">
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('support')">Help Center</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('support')">Activation Guides</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('support')">Track Order</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('support')">Refund Policy</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-zinc-500 font-light">
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('about')">About Us</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('contact')">Corporate Sales</button></li>
<li><button className="hover:text-zinc-900 transition-colors text-left" onclick="switchView('contact')">Contact</button></li>
<li><a className="hover:text-zinc-900 transition-colors text-left" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors text-left" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 font-light">
<p>© 2024 SFTWR. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<span>EN / USD</span>
</div>
</div>
</footer>



    </>
  );
}
