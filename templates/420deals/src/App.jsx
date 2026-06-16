import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // -------------------------
        // GSAP ANIMATION LOGIC
        // -------------------------
        
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // 1. Helper function to split text for masked reveal
        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = ''; // Clear original text
            
            words.forEach(word => {
                // Create wrapper (mask)
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                
                // Create inner span (translating element)
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0'; // Add non-breaking space
                
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }

        // 2. Apply Split Logic to targeted elements
        const revealElements = document.querySelectorAll('.reveal-text');
        
        revealElements.forEach(element => {
            splitTextForReveal(element);
            
            // Get the inner words we just created
            const innerWords = element.querySelectorAll('.word-inner');
            
            // Create the animation
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation starts when top of text hits 85% of viewport height
                    toggleActions: "play none none reverse" // Re-plays if you scroll back up
                }
            });
        });

        // 3. Parallax Background Animation
        gsap.to("#hero-bg", {
            yPercent: 20, // Move the image down by 20% of its height
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true // Smoothly scrubs the animation based on scroll position
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white bg-gradient-to-b from-zinc-950/90 to-transparent pb-12">
<div className="flex items-center gap-2 drop-shadow-md">
<iconify-icon className="text-[#a3e635]" height="28" icon="solar:leaf-bold" width="28"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase" style={{}}>420Deals</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight bg-zinc-900/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
<a className="hover:text-[#a3e635] transition" href="#" style={{}}>Today's Deals</a>
<a className="hover:text-[#a3e635] transition" href="#" style={{}}>Flower</a>
<a className="hover:text-[#a3e635] transition" href="#" style={{}}>Edibles</a>
<a className="hover:text-[#a3e635] transition" href="#" style={{}}>Dispensaries</a>
</div>
<button className="bg-[#a3e635] text-zinc-950 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#bef264] transition shadow-[0_0_15px_rgba(163,230,53,0.3)]" style={{}}>
            Get Deal Alerts
        </button>
</nav>

<header className="relative w-full min-h-[85vh] overflow-hidden flex items-center pt-24" id="hero-section">

<div className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-950">
<img alt="Abstract botanical background" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter brightness-[0.25] saturate-[1.2] will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10 pointer-events-none"></div>
</div>
<div className="relative z-20 w-full px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<div className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-100 transition text-zinc-300 drop-shadow-md inline-flex bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5">
<div className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase flex items-center gap-2" style={{}}>
<iconify-icon className="text-[#a3e635]" icon="solar:verified-check-bold"></iconify-icon>
                            100% Legal Market Offers
                        </span>
</div>

<h1 className="reveal-text leading-[1.05] md:text-7xl text-5xl tracking-tighter mb-6 font-bold text-white drop-shadow-lg" style={{}}>Daily Cannabis Deals, All Year Long.</h1>
<p className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-zinc-300 drop-shadow-md mb-8" style={{}}>
                        Find the best legal discounts on premium flower, edibles, vapes, and accessories from state-licensed dispensaries near you.
                    </p>

<div className="flex flex-col sm:flex-row gap-2 bg-zinc-900/80 backdrop-blur-md p-2 rounded-3xl sm:rounded-full border border-zinc-700/50 max-w-2xl shadow-2xl relative z-30 focus-within:border-[#a3e635]/50 transition-colors">
<div className="flex-1 flex items-center gap-3 px-4 py-2 text-zinc-300">
<iconify-icon className="text-[#a3e635]" icon="solar:map-point-linear" width="24"></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-zinc-100 placeholder-zinc-500 font-medium" placeholder="Enter ZIP or City to find local deals..." type="text"/>
</div>
<button className="bg-[#a3e635] text-zinc-950 px-8 py-3.5 rounded-full font-bold hover:bg-[#bef264] transition flex items-center justify-center gap-2">
                            Find Deals
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="w-full overflow-hidden border-y border-zinc-900 bg-zinc-950 py-8 relative flex items-center justify-center" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<style>
            @keyframes scroll-loop {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll-infinite {
                animation: scroll-loop 40s linear infinite;
            }
            .animate-scroll-infinite:hover {
                animation-play-state: paused;
            }
        </style>
<div className="flex w-max animate-scroll-infinite items-center">

<div className="flex items-center gap-24 px-12 opacity-40 text-sm font-bold tracking-widest uppercase text-zinc-500">
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:shield-check-bold"></iconify-icon> State Licensed</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:test-tube-bold"></iconify-icon> Lab Tested</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:verified-check-bold"></iconify-icon> 100% Compliant</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:shop-bold"></iconify-icon> Verified Retailers</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:tag-price-bold"></iconify-icon> Real-Time Pricing</span>
</div>

<div className="flex items-center gap-24 px-12 opacity-40 text-sm font-bold tracking-widest uppercase text-zinc-500">
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:shield-check-bold"></iconify-icon> State Licensed</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:test-tube-bold"></iconify-icon> Lab Tested</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:verified-check-bold"></iconify-icon> 100% Compliant</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:shop-bold"></iconify-icon> Verified Retailers</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#a3e635]" icon="solar:tag-price-bold"></iconify-icon> Real-Time Pricing</span>
</div>
</div>
</div>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-zinc-800 pb-4 gap-4">
<div>
<span className="text-xs text-[#a3e635] uppercase tracking-widest font-bold block mb-2" style={{}}>/ 01 Curated Offers</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-bold" style={{}}>Today's Top Deals</h2>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition flex items-center gap-2" href="#">
                View All Deals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-[#a3e635]/50 transition duration-300 flex flex-col">
<div className="relative h-56 overflow-hidden bg-zinc-800">
<div className="absolute top-3 left-3 bg-[#a3e635] text-zinc-950 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-lg z-10">40% OFF</div>
<img alt="Premium Flower" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Licensed Retailer
                            </span>
<span className="text-[11px] text-zinc-500">1.2 mi</span>
</div>
<h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#a3e635] transition-colors">OG Kush Premium Indoor Flower (14g)</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Top-shelf half-ounce special from verified local growers. Limit 2 per customer.</p>
</div>
<div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl font-black text-white">$85</span>
<span className="text-sm text-zinc-600 font-medium line-through">$140</span>
</div>
<a className="block w-full text-center bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-zinc-950 transition duration-300" href="#">Get Deal</a>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-[#a3e635]/50 transition duration-300 flex flex-col">
<div className="relative h-56 overflow-hidden bg-zinc-800">
<div className="absolute top-3 left-3 bg-[#a3e635] text-zinc-950 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-lg z-10">BOGO 50%</div>
<img alt="Edibles" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Licensed Retailer
                            </span>
<span className="text-[11px] text-zinc-500">3.4 mi</span>
</div>
<h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#a3e635] transition-colors">100mg THC Sour Gummies (10-Pack)</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Mix and match flavors. Fast-acting legal edibles from top brands.</p>
</div>
<div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl font-black text-white">$15</span>
<span className="text-sm text-zinc-600 font-medium line-through">$30</span>
</div>
<a className="block w-full text-center bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-zinc-950 transition duration-300" href="#">Get Deal</a>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-[#a3e635]/50 transition duration-300 flex flex-col">
<div className="relative h-56 overflow-hidden bg-zinc-800">
<div className="absolute top-3 left-3 bg-[#a3e635] text-zinc-950 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-lg z-10">$10 DOORBUSTER</div>
<img alt="Extracts" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Licensed Retailer
                            </span>
<span className="text-[11px] text-zinc-500">0.5 mi</span>
</div>
<h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#a3e635] transition-colors">Live Resin 1g Vape Cartridge</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Full-spectrum extracts, verified clean. Fits standard 510 batteries.</p>
</div>
<div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl font-black text-white">$25</span>
<span className="text-sm text-zinc-600 font-medium line-through">$45</span>
</div>
<a className="block w-full text-center bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-zinc-950 transition duration-300" href="#">Get Deal</a>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-[#a3e635]/50 transition duration-300 flex flex-col">
<div className="relative h-56 overflow-hidden bg-zinc-800">
<div className="absolute top-3 left-3 bg-zinc-100 text-zinc-950 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-lg z-10 border border-zinc-300">SHIPS FREE</div>
<img alt="Accessories" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
<iconify-icon icon="solar:global-linear"></iconify-icon> Online Brand
                            </span>
<span className="text-[11px] text-[#a3e635]">In Stock</span>
</div>
<h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#a3e635] transition-colors">Premium Dry Herb Vaporizer</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Top-rated hardware brand. Use promo code 420SAVE at checkout.</p>
</div>
<div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl font-black text-white">$120</span>
<span className="text-sm text-zinc-600 font-medium line-through">$199</span>
</div>
<a className="block w-full text-center bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-zinc-950 transition duration-300" href="#">View Offer</a>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 max-w-[1600px] mx-auto mb-24">
<div className="bg-zinc-900 border border-zinc-800 md:rounded-[40px] p-8 md:p-16">
<div className="flex justify-between items-baseline mb-12">
<div className="">
<span className="text-xs text-[#a3e635] uppercase tracking-widest font-bold block mb-4" style={{}}>/ 02 Browse Offers</span>
<h2 className="text-3xl md:text-5xl tracking-tight text-white font-bold max-w-lg leading-tight" style={{}}>
                        Shop by category to find exactly what you need.
                    </h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-[#a3e635] transition duration-300 relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition text-[#a3e635]">
<iconify-icon icon="solar:leaf-bold" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#a3e635] mb-6 group-hover:scale-110 transition">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2" style={{}}>Flower</h3>
<p className="text-sm text-zinc-500 mb-6" style={{}}>Ounce specials, BOGO eighths, and pre-roll bundles.</p>
<span className="text-xs font-bold text-[#a3e635] flex items-center gap-1 uppercase tracking-wider">
                        Explore Deals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-[#a3e635] transition duration-300 relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition text-[#a3e635]">
<iconify-icon icon="solar:cookie-bold" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#a3e635] mb-6 group-hover:scale-110 transition">
<iconify-icon icon="solar:cookie-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2" style={{}}>Edibles</h3>
<p className="text-sm text-zinc-500 mb-6" style={{}}>Gummies, chocolates, drinks, and wellness tinctures.</p>
<span className="text-xs font-bold text-[#a3e635] flex items-center gap-1 uppercase tracking-wider">
                        Explore Deals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-[#a3e635] transition duration-300 relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition text-[#a3e635]">
<iconify-icon icon="solar:bottle-bold" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#a3e635] mb-6 group-hover:scale-110 transition">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2" style={{}}>Vapes &amp; Extracts</h3>
<p className="text-sm text-zinc-500 mb-6" style={{}}>Cartridges, disposables, rosin, resin, and shatter.</p>
<span className="text-xs font-bold text-[#a3e635] flex items-center gap-1 uppercase tracking-wider">
                        Explore Deals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-[#a3e635] transition duration-300 relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition text-[#a3e635]">
<iconify-icon icon="solar:box-bold" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#a3e635] mb-6 group-hover:scale-110 transition">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2" style={{}}>Accessories</h3>
<p className="text-sm text-zinc-500 mb-6" style={{}}>Hardware, glass, batteries, and storage solutions.</p>
<span className="text-xs font-bold text-[#a3e635] flex items-center gap-1 uppercase tracking-wider">
                        Explore Deals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-900">
<div className="flex justify-between items-baseline mb-16 border-b border-zinc-900 pb-4">
<span className="text-xs text-[#a3e635] uppercase tracking-widest font-bold" style={{}}>/ 03 Trust &amp; Transparency</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8">
<div>
<h2 className="reveal-text text-3xl md:text-5xl tracking-tight text-white leading-tight mb-6 font-bold" style={{}}>We connect you to legal savings, safely.</h2>
<p className="text-zinc-400 text-lg leading-relaxed max-w-lg" style={{}}>Our platform strictly partners with state-licensed dispensaries and verified brands. We never aggregate grey-market or untested products.</p>
</div>
<div className="space-y-8 mt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#a3e635] shrink-0 font-bold font-mono text-sm">01</div>
<div>
<h4 className="text-lg font-bold text-white mb-1">Find Deals Near You</h4>
<p className="text-sm text-zinc-500">Enter your location or browse online codes. We automatically filter offers available in your specific state or city.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#a3e635] shrink-0 font-bold font-mono text-sm">02</div>
<div>
<h4 className="text-lg font-bold text-white mb-1">Click to Claim</h4>
<p className="text-sm text-zinc-500">Click "Get Deal" to be securely redirected to the licensed retailer's official website or menu platform.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#a3e635] shrink-0 font-bold font-mono text-sm">03</div>
<div>
<h4 className="text-lg font-bold text-white mb-1">Shop &amp; Save</h4>
<p className="text-sm text-zinc-500">Complete your reservation or purchase directly with the dispensary, knowing you secured the best local price.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden text-white">

<div className="absolute top-0 right-0 p-8 opacity-5 text-[#a3e635]">
<iconify-icon height="160" icon="solar:shield-check-bold" width="160"></iconify-icon>
</div>
<div className="flex items-center gap-2 relative z-10">
<div className="w-2 h-2 bg-[#a3e635] rounded-full animate-pulse"></div>
<span className="text-xs font-bold uppercase tracking-widest text-[#a3e635]" style={{}}>Network Verification</span>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-7xl tracking-tighter text-white mb-2 font-black" style={{}}>100%</h3>
<p className="text-zinc-400 text-sm mb-10 max-w-sm" style={{}}>Of featured dispensaries are actively licensed and operate legally within their state guidelines.</p>
<div className="space-y-5">
<div className="flex items-center gap-4">
<div className="w-full bg-zinc-950 h-12 rounded-xl overflow-hidden flex items-center px-5 relative border border-zinc-800">
<span className="relative z-10 text-xs font-bold text-white uppercase tracking-wider" style={{}}>Average Daily Savings</span>
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#a3e635]/20 to-[#a3e635]/40 w-[65%] border-r border-[#a3e635]/50"></div>
</div>
<span className="text-lg font-black text-[#a3e635] w-12 text-right" style={{}}>35%</span>
</div>
<div className="flex items-center gap-4">
<div className="w-full bg-zinc-950 h-12 rounded-xl overflow-hidden flex items-center px-5 relative border border-zinc-800">
<span className="relative z-10 text-xs font-bold text-white uppercase tracking-wider" style={{}}>Lab-Tested Inventory</span>
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#a3e635]/20 to-[#a3e635]/40 w-full border-r border-[#a3e635]/50"></div>
</div>
<span className="text-lg font-black text-[#a3e635] w-12 text-right" style={{}}>100%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-900">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
<div className="absolute -top-40 -right-40 w-96 h-96 bg-[#a3e635] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 pointer-events-none"></div>
<div className="lg:col-span-5 pr-0 md:pr-12 relative z-10 flex flex-col justify-center">
<span className="text-xs text-[#a3e635] uppercase tracking-widest font-bold block mb-4" style={{}}>/ 04 Never Miss A Drop</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 font-bold" style={{}}>
                    Get local deal alerts sent straight to your phone.
                </h2>
<p className="text-zinc-400 mb-10 text-lg">The best local discounts and flash sales on top-shelf brands sell out fast. Sign up for alerts so you're always first in line.</p>
<div className="flex flex-col sm:flex-row w-full gap-3 mb-4">
<input className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-sm outline-none text-white placeholder-zinc-500 focus:border-[#a3e635] transition" placeholder="Mobile Number" type="tel"/>
<button className="bg-[#a3e635] text-zinc-950 px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#bef264] transition whitespace-nowrap font-bold">
<span>Get Alerts</span>
</button>
</div>
<p className="text-[11px] text-zinc-500 leading-relaxed">By signing up, you agree to receive automated promotional messages. Reply STOP to cancel. Message &amp; data rates may apply. <a className="underline hover:text-white" href="#">Terms</a> apply.</p>
</div>
<div className="lg:col-span-7 space-y-4 lg:pl-12 lg:border-l border-zinc-800 relative z-10">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-bold block mb-8" style={{}}>/ FAQ</span>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-lg text-white font-bold" style={{}}>Are these dispensaries legal?</h3>
<div className="text-zinc-500 group-hover:text-[#a3e635] transition">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed" style={{}}>
                        Yes. We strictly partner with state-licensed, compliant retailers and trusted hardware brands. You can shop confidently knowing every featured local dispensary operates entirely within the legal market framework.
                    </p>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-lg text-zinc-300 group-hover:text-white font-bold" style={{}}>How do I claim a deal?</h3>
<div className="text-zinc-500 group-hover:text-[#a3e635] transition">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-lg text-zinc-300 group-hover:text-white font-bold" style={{}}>Do you sell cannabis directly?</h3>
<div className="text-zinc-500 group-hover:text-[#a3e635] transition">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-300 px-6 py-24 md:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-[#a3e635]" height="28" icon="solar:leaf-bold" width="28"></iconify-icon>
<span className="text-xl font-bold tracking-tighter uppercase text-white" style={{}}>420Deals</span>
</div>
<h2 className="text-xl tracking-tight mb-8 font-medium text-zinc-400" style={{}}>Curated savings. Quality verified.</h2>
<button className="bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:border-[#a3e635] hover:text-[#a3e635] transition text-sm font-bold">
                    Partner With Us
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 lg:col-span-3 gap-8 text-xs uppercase tracking-widest text-zinc-500 font-bold">
<div className="space-y-10">
<div className="">
<span className="block mb-5 text-white" style={{}}>Categories</span>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="#">Flower</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="#">Edibles</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="#">Vapes &amp; Extracts</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block" href="#">Accessories</a>
</div>
<div>
<span className="block mb-5 text-white" style={{}}>Contact</span>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="mailto:hello@420deals.com">hello@420deals.com</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block" href="#">Press &amp; Media</a>
</div>
</div>
<div className="space-y-10">
<div>
<span className="block mb-5 text-white" style={{}}>Legal &amp; Trust</span>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="#">Verification Standards</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block mb-3" href="#">State Compliance</a>
<a className="normal-case text-sm font-medium text-zinc-400 hover:text-[#a3e635] transition block" href="#">Retailer Guidelines</a>
</div>
<div>
<span className="block mb-5 text-white" style={{}}>Connect</span>
<div className="flex gap-3">
<a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-[#a3e635] hover:text-[#a3e635] transition" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-[#a3e635] hover:text-[#a3e635] transition" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-[11px] text-zinc-500 tracking-wider">
<div className="flex gap-6 mb-4 md:mb-0">
<span className="max-w-2xl leading-relaxed">420Deals.com is a deals aggregator and affiliate platform. We do not sell cannabis directly. Must be 21+ to browse and claim offers in legalized regions. We strictly link to state-licensed dispensaries and verified brands. Terms and conditions apply to all third-party retailer discounts.</span>
</div>
<div className="flex flex-col sm:flex-row gap-6 shrink-0 mt-4 md:mt-0 font-medium">
<span style={{}}>© 2026 420Deals Hub</span>
<a className="hover:text-white transition uppercase" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-white transition uppercase" href="#" style={{}}>Terms of Use</a>
</div>
</div>
</footer>


    </>
  );
}
