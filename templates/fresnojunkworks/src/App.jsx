import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with specified stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Simple Testimonial Slider Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.testimonial-slide');
            if(slides.length < 2) return;

            let currentSlide = 0;

            setInterval(() => {
                // Fade out current
                slides[currentSlide].classList.remove('opacity-100', 'z-10', 'translate-y-0');
                slides[currentSlide].classList.add('opacity-0', 'z-0', 'translate-y-8', 'pointer-events-none');

                // Move to next
                currentSlide = (currentSlide + 1) % slides.length;

                // Fade in next
                slides[currentSlide].classList.remove('opacity-0', 'z-0', 'translate-y-8', 'pointer-events-none');
                slides[currentSlide].classList.add('opacity-100', 'z-10', 'translate-y-0');
            }, 6000); // Change slide every 6 seconds
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>

<i className="relative z-10 w-7 h-7 text-zinc-950 fill-white translate-y-1" data-lucide="mountain"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-semibold tracking-tight text-white">Fresno</span>
<span className="text-xl font-semibold tracking-tight text-white">Junk Works</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 group" href="tel:5597087224">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors">
<i className="w-4 h-4 text-orange-500" data-lucide="phone"></i>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-1">24/7 Service</div>
<div className="text-lg font-medium text-white tracking-tight">(559) 708-7224</div>
</div>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium tracking-tight text-zinc-950 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-0.5" href="#quote">
                    Get Free Estimate
                </a>
</div>

<button className="md:hidden p-2 text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-8 animate-[fade-in_1s_ease-out]">
<div className="flex text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-base font-medium text-white">5.0 Star Rated locally</span>
</div>
<h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Reclaim Your Space.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">We Handle the Heavy Lifting.</span>
</h1>
<p className="max-w-2xl text-xl text-zinc-400 mb-12 leading-relaxed">
                Fast, professional junk removal and hauling for the Fresno area. From everyday household clutter and yard debris to heavy boulders and overgrown bushes—if you need it gone, we make it disappear.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-tight text-zinc-950 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300 hover:-translate-y-1" href="#quote">
                    Get Your Free Estimate
                    <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-tight text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors duration-300" href="tel:5597087224">
<i className="mr-2 w-5 h-5 text-zinc-400" data-lucide="phone-call"></i>
                    Call (559) 708-7224
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-20 pt-10 border-t border-white/5 w-full max-w-4xl mx-auto">
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-orange-500 mb-1" data-lucide="clock"></i>
<span className="text-lg font-medium text-white">Open 24 Hours</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-orange-500 mb-1" data-lucide="map-pin"></i>
<span className="text-lg font-medium text-white">Fresno Area</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-orange-500 mb-1" data-lucide="banknote"></i>
<span className="text-lg font-medium text-white">Fair Pricing</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-orange-500 mb-1" data-lucide="thumbs-up"></i>
<span className="text-lg font-medium text-white">Professional Team</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-20">
<span className="text-orange-500 font-medium tracking-wider uppercase text-base mb-4">What We Do</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Comprehensive Removal Services</h2>
<p className="text-xl text-zinc-400 max-w-2xl">No job is too big, too small, or too messy. We provide specialized hauling for nearly every type of non-hazardous material.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all">
<i className="w-6 h-6 text-orange-400" data-lucide="package"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Full-Service Junk Removal</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Point to what needs to go, and we'll handle the rest. Appliances, furniture, hot tubs, and general household clutter removed safely and efficiently.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all">
<i className="w-6 h-6 text-amber-400" data-lucide="leaf"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Yard Debris Hauling</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Reclaim your backyard. We haul away branches, clippings, dirt, old fencing, and general landscaping waste fast.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all">
<i className="w-6 h-6 text-orange-400" data-lucide="tree-pine"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Bush &amp; Tree Cleanup</h3>
<p className="text-lg text-zinc-400 leading-relaxed">We don't just haul; we clear. Let us tackle overgrown bushes, felled trees, and heavy vegetation that's taking up your property.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all">
<i className="w-6 h-6 text-amber-400" data-lucide="mountain"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Boulder &amp; Heavy Removal</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Got rocks? We have the equipment and the muscle to break down and haul away heavy boulders, concrete, and construction debris.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all">
<i className="w-6 h-6 text-orange-400" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Property Cleanouts</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Complete cleanout services for garages, estates, foreclosures, and evictions. We sweep up afterwards, leaving the space ready for what's next.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all">
<i className="w-6 h-6 text-amber-400" data-lucide="recycle"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Eco-Friendly Disposal</h3>
<p className="text-lg text-zinc-400 leading-relaxed">We care about Fresno. We actively sort your items to donate salvageable goods and recycle materials whenever possible, keeping items out of the landfill.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">How It Works</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">Three simple steps to a clutter-free space. We make the entire process effortless for you.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-12 lg:gap-8">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center mb-8 group-hover:border-orange-500 transition-colors duration-300 relative">
<div className="absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center">
<span className="text-3xl font-medium tracking-tight text-white">1</span>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Reach Out</h3>
<p className="text-lg text-zinc-400">Call us 24/7 at (559) 708-7224 or submit a quote request online. Let us know what you need removed.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group md:mt-12">
<div className="w-24 h-24 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center mb-8 group-hover:border-amber-400 transition-colors duration-300 relative shadow-[0_0_30px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
<div className="absolute inset-2 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center">
<span className="text-3xl font-medium tracking-tight text-zinc-950">2</span>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Get a Fair Quote</h3>
<p className="text-lg text-zinc-400">We provide a transparent, upfront estimate based on volume or specific items. No hidden fees, ever.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center mb-8 group-hover:border-orange-500 transition-colors duration-300 relative">
<div className="absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center">
<span className="text-3xl font-medium tracking-tight text-white">3</span>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">We Haul It Away</h3>
<p className="text-lg text-zinc-400">Our professional team arrives on time, loads everything up, and sweeps the area clean before leaving.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/3">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Local Trust. Proven Results.</h2>
<p className="text-xl text-zinc-400 mb-8">Don't just take our word for it. See why Fresno residents consistently rate us 5 stars for our hard work and professionalism.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-zinc-400 text-xs font-medium">JD</div>
<div className="w-12 h-12 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-zinc-300 text-xs font-medium">MS</div>
<div className="w-12 h-12 rounded-full bg-zinc-600 border-2 border-zinc-950 flex items-center justify-center text-zinc-200 text-xs font-medium">AL</div>
</div>
<div className="flex flex-col">
<div className="flex text-amber-400 w-4 h-4 mb-1">
<i className="fill-current" data-lucide="star"></i><i className="fill-current" data-lucide="star"></i><i className="fill-current" data-lucide="star"></i><i className="fill-current" data-lucide="star"></i><i className="fill-current" data-lucide="star"></i>
</div>
<span className="text-base text-zinc-400 font-medium">10+ Verified Reviews</span>
</div>
</div>
</div>
<div className="md:w-2/3 relative h-[350px] sm:h-[280px] w-full">

<div className="absolute inset-0">

<div className="testimonial-slide absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10 translate-y-0">
<div className="p-10 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-md h-full flex flex-col justify-center relative group">
<i className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-orange-500/10 transition-colors duration-500" data-lucide="quote"></i>
<div className="flex text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl text-white font-medium tracking-tight mb-8 leading-snug">"The company was very good, nice and friendly and took everything and more that I had. I would recommend this company to anybody that needs service."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-zinc-950 font-medium">R</div>
<div>
<div className="text-lg text-white font-medium">Recent Customer</div>
<div className="text-base text-zinc-500">Fresno, CA</div>
</div>
</div>
</div>
</div>

<div className="testimonial-slide absolute inset-0 transition-all duration-1000 ease-in-out opacity-0 z-0 translate-y-8 pointer-events-none">
<div className="p-10 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-md h-full flex flex-col justify-center relative group">
<i className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-amber-500/10 transition-colors duration-500" data-lucide="quote"></i>
<div className="flex text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl text-white font-medium tracking-tight mb-8 leading-snug">"Brennan did an awesome job getting all my boulders and bushes hauled away... On time, hard worker, fair prices, and very professional."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-zinc-950 font-medium">M</div>
<div>
<div className="text-lg text-white font-medium">Satisfied Client</div>
<div className="text-base text-zinc-500">Fresno Area</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Why Fresno Chooses Us</h2>
<p className="text-xl text-zinc-400 mb-10">We aren't just a hauling company; we are your local partners in reclaiming your property. We show up ready to work hard.</p>
<div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<i className="w-4 h-4 text-orange-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Fast Response</h4>
<p className="text-base text-zinc-400">When you need it gone, we act fast. Often available for same or next-day service.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<i className="w-4 h-4 text-orange-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Hard-Working Team</h4>
<p className="text-base text-zinc-400">We don't shy away from heavy boulders, dense bushes, or dirty jobs.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<i className="w-4 h-4 text-orange-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Friendly &amp; Professional</h4>
<p className="text-base text-zinc-400">Courteous service from the first call to the final sweep-up of your property.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<i className="w-4 h-4 text-orange-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Reliable Service</h4>
<p className="text-base text-zinc-400">We show up when we say we will. Dependability is our core value.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 w-48 h-48">
<div className="absolute inset-0 border border-orange-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border-2 border-dashed border-amber-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500" data-lucide="truck"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="quote">
<div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 relative overflow-hidden bg-zinc-900 border border-white/10">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/10 pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<i className="w-10 h-10 text-orange-400" data-lucide="phone-outgoing"></i>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Ready to Clear Out the Clutter?</h2>
<p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl font-medium">
                    Call now or text us for an immediate, free, no-obligation estimate. We are ready 24/7.
                </p>
<div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-10 py-5 text-2xl font-medium tracking-tight text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors duration-300 shadow-xl w-full sm:w-auto" href="tel:5597087224">
                        (559) 708-7224
                    </a>
<a className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium tracking-tight text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-full hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300 w-full sm:w-auto" href="sms:5597087224">
<i className="mr-3 w-6 h-6" data-lucide="message-square"></i>
                        Text for Quote
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-6 inline-flex" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full"></div>
<i className="relative z-10 w-5 h-5 text-zinc-950 fill-white translate-y-0.5" data-lucide="mountain"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-white">Fresno</span>
<span className="text-lg font-semibold tracking-tight text-white">Junk Works</span>
</div>
</a>
<p className="text-lg text-zinc-400 max-w-sm mb-6">
                        Premium junk removal, property cleanouts, and heavy debris hauling services. Serving the entire Fresno area.
                    </p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-6 tracking-tight">Contact</h4>
<ul className="space-y-4 text-lg text-zinc-400">
<li>
<a className="hover:text-orange-400 transition-colors flex items-center gap-2" href="tel:5597087224">
<i className="w-4 h-4" data-lucide="phone"></i> (559) 708-7224
                            </a>
</li></ul></div>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i> Open 24 Hours
                        </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i> Fresno Area
                        </li>

</div>
<div>
<h4 className="text-lg font-medium text-white mb-6 tracking-tight">Services</h4>
<ul className="space-y-4 text-lg text-zinc-400">
<li><a className="hover:text-orange-400 transition-colors" href="#services">Junk Removal</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#services">Yard Debris Hauling</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#services">Bush &amp; Boulder Cleanup</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#services">Property Cleanouts</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-base text-zinc-500">
<p>© <span id="year"></span> Fresno Junk Works. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>

</footer>



    </>
  );
}
