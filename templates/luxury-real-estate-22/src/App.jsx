import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Multi-State Search Bar Logic
        function switchSearchTab(tab) {
            const buyRentForm = document.getElementById('form-buy-rent');
            const sellForm = document.getElementById('form-sell');
            
            const tabBuy = document.getElementById('tab-buy');
            const tabRent = document.getElementById('tab-rent');
            const tabSell = document.getElementById('tab-sell');
            
            // Reset all tabs to inactive state
            [tabBuy, tabRent, tabSell].forEach(t => {
                t.classList.remove('bg-white/20', 'text-white');
                t.classList.add('bg-transparent', 'text-white/70', 'hover:bg-white/10');
            });
            
            // Set active tab
            const activeTab = document.getElementById(`tab-${tab}`);
            activeTab.classList.remove('bg-transparent', 'text-white/70', 'hover:bg-white/10');
            activeTab.classList.add('bg-white/20', 'text-white');
            
            // Toggle dynamic forms based on selection
            if (tab === 'sell') {
                buyRentForm.classList.add('hidden');
                buyRentForm.classList.remove('flex');
                sellForm.classList.remove('hidden');
                sellForm.classList.add('flex');
            } else {
                sellForm.classList.add('hidden');
                sellForm.classList.remove('flex');
                buyRentForm.classList.remove('hidden');
                buyRentForm.classList.add('flex');
            }
        }

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Navbar Glassmorphism effect on scroll
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-sm', 'bg-white/95');
                    nav.classList.remove('bg-white/90');
                } else {
                    nav.classList.remove('shadow-sm', 'bg-white/95');
                    nav.classList.add('bg-white/90');
                }
            });

            // Hero Entrance Animation Timeline
            const heroTl = gsap.timeline({delay: 0.2});
            heroTl.to(".hero-search-bar", {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            });

            // ScrollTrigger Animations for sections
            gsap.utils.toArray('.gsap-section').forEach(section => {
                gsap.fromTo(section, 
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-md border-b border-zinc-300" id="navbar">
<div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-auto md:h-20 flex flex-col md:flex-row items-center justify-between py-4 md:py-0 gap-4 md:gap-0">

<div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-wrap w-full gap-x-6 gap-y-6 items-center justify-center">
<a className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#">Buy</a>
<a className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#">Sell</a>
<a className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#">Manage</a>
</div>

<div className="flex justify-center w-full md:w-1/3 order-1 md:order-2">
<a className="font-sans text-xl md:text-2xl font-medium tracking-tight text-black" href="#">
                    FLEET &amp; CO.
                </a>
</div>

<div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3 md:order-3">
<a className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#">Our Team</a>
<a className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#">Our Listings</a>
<a className="bg-transparent border border-black px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-black hover:bg-black hover:text-white transition-all duration-300" href="#">
                    Contact Us
                </a>
</div>
</div>
</nav>

<header className="min-h-[750px] flex flex-col md:pb-32 md:px-12 overflow-hidden bg-zinc-900 w-full h-screen pr-6 pb-24 pl-6 relative justify-end">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Luxury Property" className="w-full h-full object-cover hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9070952-37a3-41e4-bed6-847746be5b06_3840w.png?w=800&amp;q=80" style={{transform: 'scale(1.05)'}}/>
<div className="absolute inset-0 bg-zinc-900/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
</div>

<div className="absolute top-32 left-6 md:left-12 z-10 w-full max-w-[1400px] mx-auto">
<span className="block uppercase text-xs font-medium text-white tracking-widest drop-shadow-md">
                North Shore, NZ
            </span>
</div>

<div className="z-10 w-full max-w-[1400px] mr-auto ml-auto relative">
<div className="max-w-4xl">

<div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 hero-search-bar opacity-0 shadow-2xl overflow-hidden" style={{transform: 'translateY(40px) scale(0.95)'}}>

<div className="flex border-b border-white/20">
<button className="flex-1 md:text-sm uppercase transition-colors text-xs font-semibold text-white tracking-widest bg-white/20 border-r border-white/20 pt-4 pb-4" id="tab-buy" onclick="switchSearchTab('buy')">
                            Buy
                        </button>
<button className="flex-1 py-4 text-xs md:text-sm uppercase tracking-widest font-semibold bg-transparent text-white/70 hover:bg-white/10 border-r border-white/20 transition-colors" id="tab-rent" onclick="switchSearchTab('rent')">
                            Rent
                        </button>
<button className="flex-1 md:text-sm uppercase hover:bg-white/10 transition-colors text-xs font-semibold text-white/70 tracking-widest bg-transparent pt-4 pb-4" id="tab-sell" onclick="switchSearchTab('sell')">
<span className="hidden sm:inline">Sell My Property</span>
<span className="sm:hidden">Sell</span>
</button>
</div>

<div className="md:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-end" id="form-buy-rent">
<div className="flex-1 w-full">
<label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Location</label>
<input className="w-full bg-transparent border-b border-white/40 py-2 text-white placeholder:text-white/60 font-medium focus:outline-none focus:border-white transition-colors" placeholder="Search North Shore..." type="text"/>
</div>
<div className="w-full md:w-32 relative">
<label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Bedrooms</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/40 py-2 text-white font-medium focus:outline-none appearance-none cursor-pointer pr-8 [&amp;&gt;option]:text-black">
<option value="">Any</option>
<option value="1">1+</option>
<option value="2">2+</option>
<option value="3">3+</option>
<option value="4">4+</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-32 relative">
<label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Bathrooms</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/40 py-2 text-white font-medium focus:outline-none appearance-none cursor-pointer pr-8 [&amp;&gt;option]:text-black">
<option value="">Any</option>
<option value="1">1+</option>
<option value="2">2+</option>
<option value="3">3+</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto mt-4 md:mt-0">
<button className="w-full bg-white text-black border border-white px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-white/20 hover:text-white hover:border-transparent backdrop-blur-md transition-all duration-300">
                                    Search
                                </button>
</div>
</div>

<div className="hidden flex-col md:flex-row gap-6 md:gap-8 items-end" id="form-sell">
<div className="flex-1 w-full">
<label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Property Address</label>
<input className="w-full bg-transparent border-b border-white/40 py-2 text-white placeholder:text-white/60 font-medium focus:outline-none focus:border-white transition-colors" placeholder="Enter your full property address..." type="text"/>
</div>
<div className="w-full md:w-auto mt-4 md:mt-0">
<button className="w-full bg-white text-black border border-white px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-white/20 hover:text-white hover:border-transparent backdrop-blur-md transition-all duration-300 whitespace-nowrap">
                                    Get Appraisal
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto gsap-section bg-zinc-50">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-zinc-300">
<span className="block text-xs uppercase tracking-widest mt-4 text-zinc-600 font-medium">
                    01 The Advantage
                </span>
</div>
<div className="w-full md:w-3/4">
<h2 className="text-3xl md:text-5xl font-sans leading-tight mb-10 font-normal tracking-tight text-zinc-900 max-w-3xl">
                    End-to-end expertise. Unmatched market knowledge across the region.
                </h2>
<div className="border-t border-zinc-300 py-6 mb-10 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
<span className="text-xs uppercase tracking-widest text-zinc-600 font-medium flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Specialist Team
                    </span>
<span className="text-xs uppercase tracking-widest text-zinc-600 font-medium flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:home-linear"></iconify-icon> Extensive Listings
                    </span>
<span className="text-xs uppercase tracking-widest text-zinc-600 font-medium flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:star-linear"></iconify-icon> 5-Star Service
                    </span>
</div>
<div className="w-full aspect-[21/9] overflow-hidden border border-zinc-300 mb-10 group bg-zinc-100">
<img alt="Team at work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="max-w-2xl">
<p className="text-zinc-600 font-light leading-relaxed mb-8 text-base">
                        Our specialist team delivers an end-to-end service. We manage diverse property types with precision, ensuring your investment thrives.
                    </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors font-medium" href="#">
                        Meet the Directors <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
<div className="w-full border-t border-zinc-300 relative flex justify-center">
<span className="absolute top-0 -translate-y-1/2 bg-zinc-50 px-4 text-xs uppercase tracking-widest text-zinc-500 bg-white">
                Next Focus
            </span>
</div>
</div>

<section className="w-full relative pt-20 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 max-w-[1400px] mx-auto gsap-section bg-white">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7">
<div className="aspect-[16/9] w-full overflow-hidden relative border border-zinc-300 group shadow-sm">
<img alt="North Shore Coast" className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-zinc-300 px-4 py-2 shadow-sm">
<span className="text-xs uppercase tracking-widest text-zinc-900 font-medium">
                            Takapuna North Shore
                        </span>
</div>
</div>
</div>
<div className="md:col-span-5 md:pl-16 md:-translate-y-4 max-w-md">
<span className="block text-xs uppercase tracking-widest mb-6 text-zinc-600 font-medium">
                    02 Local Specialists
                </span>
<h3 className="font-sans text-3xl md:text-4xl mb-6 font-normal leading-tight tracking-tight text-zinc-900">
                    Deep roots in our communities.
                </h3>
<p className="text-zinc-600 font-light leading-relaxed mb-8">
                    We possess deep local knowledge. From beachfront estates to modern apartments, we connect clients with the North Shore's best.
                </p>

<div className="border-t border-zinc-300 pt-6 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
<div className="flex items-baseline gap-4 justify-between border-b border-zinc-200 pb-2">
<span className="text-xs uppercase tracking-widest text-zinc-900 font-medium shrink-0">Area</span>
<span className="text-sm text-zinc-600 font-light text-right">Takapuna &amp; Milford</span>
</div>
<div className="flex items-baseline gap-4 justify-between border-b border-zinc-200 pb-2">
<span className="text-xs uppercase tracking-widest text-zinc-900 font-medium shrink-0">Area</span>
<span className="text-sm text-zinc-600 font-light text-right">Devonport Heritage</span>
</div>
<div className="flex items-baseline gap-4 justify-between border-b border-zinc-200 pb-2">
<span className="text-xs uppercase tracking-widest text-zinc-900 font-medium shrink-0">Area</span>
<span className="text-sm text-zinc-600 font-light text-right">Albany Lifestyle</span>
</div>
<div className="flex items-baseline gap-4 justify-between border-b border-zinc-200 pb-2">
<span className="text-xs uppercase tracking-widest text-zinc-900 font-medium shrink-0">Area</span>
<span className="text-sm text-zinc-600 font-light text-right">East Coast Bays</span>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<a className="text-xs uppercase tracking-widest border border-zinc-900 px-8 py-3.5 font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300" href="#">
                        Explore Neighbourhoods
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-900 text-white overflow-hidden gsap-section">
<div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<span className="block text-xs uppercase tracking-widest mb-4 text-zinc-400 font-medium">
                    03 Featured Properties
                </span>
<h2 className="text-3xl md:text-5xl font-sans font-normal tracking-tight">
                    Curated collection.
                </h2>
</div>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors font-medium" href="#">
                View All Listings <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex gap-6 px-6 md:px-12 pb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[400px] max-w-[500px] shrink-0 snap-center group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-zinc-800">
<img alt="Luxury Property" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white text-zinc-900 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold z-10 shadow-lg">
                        For Sale
                    </div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-lg font-medium mb-1 tracking-tight">142 Seaview Road</h4>
<p className="text-zinc-400 text-sm font-light">Castor Bay, North Shore</p>
</div>
<div className="text-right">
<p className="text-lg font-medium tracking-tight">Offers</p>
</div>
</div>
<div className="flex items-center gap-6 mt-5 text-sm text-zinc-300 border-t border-zinc-800 pt-5 font-light">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 4</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> 280 sqm</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] max-w-[500px] shrink-0 snap-center group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-zinc-800">
<img alt="Modern Home" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white text-zinc-900 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold z-10 shadow-lg">
                        Auction
                    </div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-lg font-medium mb-1 tracking-tight">88 Hurstmere Road</h4>
<p className="text-zinc-400 text-sm font-light">Takapuna, North Shore</p>
</div>
<div className="text-right">
<p className="text-lg font-medium tracking-tight">To Be Auctioned</p>
</div>
</div>
<div className="flex items-center gap-6 mt-5 text-sm text-zinc-300 border-t border-zinc-800 pt-5 font-light">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> 195 sqm</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] max-w-[500px] shrink-0 snap-center group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-zinc-800">
<img alt="Minimalist Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 right-4 bg-zinc-900 text-white border border-zinc-700 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold z-10 shadow-lg">
                        For Rent
                    </div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-lg font-medium mb-1 tracking-tight">21a Victoria Road</h4>
<p className="text-zinc-400 text-sm font-light">Devonport, North Shore</p>
</div>
<div className="text-right">
<p className="text-lg font-medium tracking-tight">$1,200 / wk</p>
</div>
</div>
<div className="flex items-center gap-6 mt-5 text-sm text-zinc-300 border-t border-zinc-800 pt-5 font-light">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> --</span>
</div>
</div>

<div className="min-w-[20px] md:min-w-[48px] shrink-0"></div>
</div>
</section>

<div className="bg-zinc-200 py-5 overflow-hidden marquee-container flex items-center border-y border-zinc-300">
<div className="marquee-track flex gap-12 md:gap-20 items-center text-xs uppercase tracking-widest font-medium text-zinc-600">
<span>Award Winning Agency 2023</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>$500M+ Property Managed</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>98% Auction Success Rate</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>Over 2,000 Happy Clients</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>

<span>Award Winning Agency 2023</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>$500M+ Property Managed</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>98% Auction Success Rate</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
<span>Over 2,000 Happy Clients</span>
<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
</div>
</div>

<footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-300">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
<div className="md:col-span-2 pr-0 md:pr-12">
<a className="font-sans text-2xl font-medium tracking-tight text-zinc-900 block mb-6" href="#">
                    FLEET &amp; CO.
                </a>
<p className="text-zinc-600 font-light leading-relaxed max-w-sm mb-10 text-sm">
                    Premier real estate and property management services across Auckland's North Shore. We define modern luxury real estate through expert knowledge and unmatched service.
                </p>

<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-zinc-300 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="ri:instagram-line"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-300 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="ri:linkedin-fill"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-300 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="ri:facebook-fill"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-8">Services</h4>
<ul className="space-y-4">
<li><a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="#">Buy Property</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="#">Sell Property</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="#">Property Management</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="#">Free Appraisal</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="#">Project Marketing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-8">Contact Us</h4>
<ul className="space-y-5">
<li className="text-zinc-600 text-sm font-light leading-relaxed">
                        123 Hurstmere Road,<br/>Takapuna, Auckland 0622
                    </li>
<li>
<a className="text-zinc-900 hover:text-zinc-500 text-sm font-medium transition-colors border-b border-zinc-900 hover:border-zinc-500 pb-0.5 inline-block" href="mailto:hello@fleetandco.co.nz">
                            hello@fleetandco.co.nz
                        </a>
</li>
<li>
<a className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors" href="tel:+6491234567">
                            +64 9 123 4567
                        </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-zinc-500 font-light uppercase tracking-widest">© 2024 Fleet Management &amp; Co.</p>
<div className="flex gap-8">
<a className="text-xs text-zinc-500 hover:text-zinc-900 font-light uppercase tracking-widest transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 font-light uppercase tracking-widest transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
