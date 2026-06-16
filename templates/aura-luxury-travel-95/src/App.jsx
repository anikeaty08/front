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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-white/20">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-xl font-medium tracking-widest uppercase text-[#1A1A1A]" href="#">
                Aura
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-black/60 hover:text-[#1A1A1A] transition-colors" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-black/60 hover:text-[#1A1A1A] transition-colors" href="#experiences">Experiences</a>
<a className="text-sm font-medium text-black/60 hover:text-[#1A1A1A] transition-colors" href="#packages">Packages</a>
<a className="text-sm font-medium text-black/60 hover:text-[#1A1A1A] transition-colors" href="#lifestyle">Lifestyle</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0F3D3E] text-white text-xs font-medium tracking-wide hover:bg-[#0F3D3E]/90 transition-all shadow-sm" href="#">
                    Plan Your Trip
                </a>
<button className="md:hidden text-[#1A1A1A] p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-full max-w-3xl aspect-square bg-gradient-to-tr from-[#0F3D3E]/5 to-[#D4AF37]/10 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
<div className="flex flex-col lg:flex-row gap-16 z-10 w-full max-w-7xl mr-auto ml-auto relative gap-x-16 gap-y-16 items-center">

<div className="flex-1 flex flex-col lg:pr-8 w-full items-start">

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-black/5 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
</span>
<span className="text-xs font-medium text-black/60 tracking-wide uppercase">Award-Winning Journeys</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-6xl font-medium text-[#1A1A1A] tracking-tight font-serif mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Escape the <br className="hidden lg:block"/> ordinary.
                </h1>

<p className="text-[#1A1A1A]/60 text-base md:text-lg font-light max-w-lg mb-12 leading-relaxed">
                    Access the world's most exclusive destinations with our meticulously curated itineraries and uncompromising personal concierge.
                </p>

<div className="w-full max-w-xl bg-white/80 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center relative z-20">

<div className="flex-1 w-full flex items-center gap-3 px-5 py-3 md:py-2 border-b md:border-b-0 md:border-r border-black/5 group cursor-pointer transition-colors hover:bg-black/[0.01] rounded-t-xl md:rounded-l-full md:rounded-tr-none">
<iconify-icon className="text-xl text-[#0F3D3E] group-hover:scale-110 transition-transform duration-300" icon="solar:map-point-linear"></iconify-icon>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-xs font-medium text-black/40 uppercase tracking-widest mb-0.5">Where to</span>
<input className="bg-transparent border-none outline-none text-sm font-medium text-[#1A1A1A] placeholder:text-black/30 w-full truncate focus:ring-0" placeholder="Select destination" type="text"/>
</div>
</div>

<div className="flex-1 w-full flex items-center gap-3 px-5 py-3 md:py-2 group cursor-pointer transition-colors hover:bg-black/[0.01]">
<iconify-icon className="text-xl text-[#0F3D3E] group-hover:scale-110 transition-transform duration-300" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-xs font-medium text-black/40 uppercase tracking-widest mb-0.5">When</span>
<input className="bg-transparent border-none outline-none text-sm font-medium text-[#1A1A1A] placeholder:text-black/30 w-full truncate focus:ring-0" placeholder="Add dates" type="text"/>
</div>
</div>

<button className="w-full md:w-auto mt-2 md:mt-0 px-8 py-4 md:py-3.5 rounded-xl md:rounded-full bg-[#0F3D3E] text-white text-sm font-medium hover:bg-[#0F3D3E]/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0">
                        Search <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8F8F6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8F8F6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F8F8F6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-black/60 font-medium mt-1">Trusted by 2,000+ travelers</span>
</div>
</div>
</div>

<div className="flex-1 w-full relative h-[500px] lg:h-[700px] hidden md:block mt-12 lg:mt-0">

<div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 group z-10">
<img alt="Beach Resort" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 mix-blend-multiply"></div>
</div>

<div className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[8px] border-[#F8F8F6] z-20 group">
<img alt="Luxury Interior" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/4 -left-6 z-30 bg-white/70 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-[#0F3D3E] flex items-center justify-center text-white shrink-0 shadow-inner">
<iconify-icon className="text-xl" icon="solar:sun-fog-linear"></iconify-icon>
</div>
<div className="flex flex-col pr-6">
<span className="text-xs font-medium text-black/50 uppercase tracking-wider mb-0.5">Featured</span>
<span className="text-sm font-semibold text-[#1A1A1A]">Santorini Villa</span>
</div>
</div>

<div className="absolute -bottom-4 right-1/4 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white" id="experiences">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group cursor-pointer flex flex-col items-center text-center p-8 rounded-3xl hover:bg-[#F8F8F6] border border-transparent hover:border-black/5 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-[#F8F8F6] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
<iconify-icon className="text-3xl text-[#0F3D3E] group-hover:scale-110 transition-transform duration-500" icon="solar:mountains-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Adventure</h3>
<p className="text-xs text-black/50 font-light">Thrilling expeditions</p>
</div>

<div className="group cursor-pointer flex flex-col items-center text-center p-8 rounded-3xl hover:bg-[#F8F8F6] border border-transparent hover:border-black/5 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-[#F8F8F6] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
<iconify-icon className="text-3xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Luxury</h3>
<p className="text-xs text-black/50 font-light">Premium stays</p>
</div>

<div className="group cursor-pointer flex flex-col items-center text-center p-8 rounded-3xl hover:bg-[#F8F8F6] border border-transparent hover:border-black/5 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-[#F8F8F6] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
<iconify-icon className="text-3xl text-[#0F3D3E] group-hover:scale-110 transition-transform duration-500" icon="solar:masks-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Cultural</h3>
<p className="text-xs text-black/50 font-light">Local heritage</p>
</div>

<div className="group cursor-pointer flex flex-col items-center text-center p-8 rounded-3xl hover:bg-[#F8F8F6] border border-transparent hover:border-black/5 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-[#F8F8F6] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
<iconify-icon className="text-3xl text-[#0F3D3E] group-hover:scale-110 transition-transform duration-500" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Honeymoon</h3>
<p className="text-xs text-black/50 font-light">Romantic getaways</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="lifestyle">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-4 block">The Experience</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Curated Lifestyle</h2>
</div>
<p className="text-sm text-black/50 font-light max-w-sm leading-relaxed">
                    Beyond travel, we curate moments of pure perfection. Discover the elements that define the Aura signature experience.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm">
<img alt="Luxury Villa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Private Estates</h3>
<p className="text-white/80 text-sm font-light">Unlisted properties across the globe</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-black/5 flex flex-col justify-between hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-shadow group">
<iconify-icon className="text-4xl text-[#D4AF37] transition-transform duration-500 group-hover:-translate-y-1" icon="solar:star-fall-linear"></iconify-icon>
<div>
<h3 className="text-xl text-[#1A1A1A] font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Michelin Dining</h3>
<p className="text-black/50 text-xs font-light leading-relaxed">Guaranteed reservations at the world's most sought-after and exclusive tables.</p>
</div>
</div>

<div className="rounded-[2rem] overflow-hidden relative group hidden md:block shadow-sm">
<img alt="Spa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<h3 className="absolute bottom-6 left-6 text-lg text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Wellness</h3>
</div>

<div className="md:col-span-2 bg-[#0F3D3E] rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden group shadow-sm cursor-pointer">
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Yacht Charters</h3>
<p className="text-white/70 text-sm font-light mb-6">Sail the Mediterranean in absolute privacy.</p>
<span className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] group-hover:text-white transition-colors">
                            Explore Fleet <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<iconify-icon className="absolute -right-6 -bottom-6 text-9xl text-white/5 group-hover:scale-110 transition-transform duration-700" icon="solar:waterdrop-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-4 block">Traveler Stories</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Words from our guests</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#1A1A1A] hover:bg-black/5 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-[#0F3D3E] flex items-center justify-center text-white hover:bg-[#0F3D3E]/90 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&amp;::-webkit-scrollbar]:hidden">

<div className="snap-start min-w-[300px] md:min-w-[400px] bg-[#F8F8F6] p-10 rounded-3xl shrink-0 hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.03)] border border-transparent hover:border-black/5 transition-all duration-300">
<iconify-icon className="text-4xl text-[#D4AF37]/30 mb-8" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-lg md:text-xl font-light text-[#1A1A1A] leading-relaxed mb-10 italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "The level of detail Aura put into our Amalfi trip was astounding. Everything from the private transfers to the secluded dining experiences felt effortlessly luxurious."
                    </p>
<div className="flex items-center gap-4">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="text-sm font-medium text-[#1A1A1A]">Sarah Jenkins</h5>
<span className="text-xs text-black/50 font-light">New York, USA</span>
</div>
</div>
</div>

<div className="snap-start min-w-[300px] md:min-w-[400px] bg-[#F8F8F6] p-10 rounded-3xl shrink-0 hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.03)] border border-transparent hover:border-black/5 transition-all duration-300">
<iconify-icon className="text-4xl text-[#D4AF37]/30 mb-8" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-lg md:text-xl font-light text-[#1A1A1A] leading-relaxed mb-10 italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "I've used luxury concierges before, but the curated Kyoto itinerary was on another level. Authentic, quiet, and deeply moving. Highly recommended."
                    </p>
<div className="flex items-center gap-4">
<img alt="David M." className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="text-sm font-medium text-[#1A1A1A]">David Miller</h5>
<span className="text-xs text-black/50 font-light">London, UK</span>
</div>
</div>
</div>

<div className="snap-start min-w-[300px] md:min-w-[400px] bg-[#F8F8F6] p-10 rounded-3xl shrink-0 hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.03)] border border-transparent hover:border-black/5 transition-all duration-300">
<iconify-icon className="text-4xl text-[#D4AF37]/30 mb-8" icon="solar:quote-left-bold-duotone"></iconify-icon>
<p className="text-lg md:text-xl font-light text-[#1A1A1A] leading-relaxed mb-10 italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "From the moment we landed in the Maldives to our departure, the service was flawless. They anticipate your needs before you even realize you have them."
                    </p>
<div className="flex items-center gap-4">
<img alt="Elena V." className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="text-sm font-medium text-[#1A1A1A]">Elena Volkova</h5>
<span className="text-xs text-black/50 font-light">Dubai, UAE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-white pt-24 pb-8 px-6 mt-auto overflow-hidden relative selection:bg-white selection:text-[#1A1A1A]">
<div className="max-w-7xl mx-auto relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-20">

<div className="lg:col-span-8 bg-white/5 rounded-[2rem] p-10 md:p-14 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="relative z-10 max-w-xl">
<span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-4 block">Newsletter</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Join the inner circle.</h3>
<p className="text-white/60 text-sm font-light mb-8">Gain exclusive access to unlisted properties, private charter fleets, and early invitations to curated group journeys.</p>
<div className="flex flex-col sm:flex-row gap-2 max-w-md">
<input className="bg-white/10 border border-white/10 outline-none text-sm text-white placeholder:text-white/40 px-6 py-4 rounded-full flex-1 focus:border-[#D4AF37]/50 transition-colors" placeholder="Email address" type="email"/>
<button className="px-8 py-4 rounded-full bg-white text-[#1A1A1A] text-sm font-medium hover:bg-[#D4AF37] hover:text-white transition-colors shrink-0">
                                Subscribe
                            </button>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-[#0F3D3E] rounded-[2rem] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group">
<iconify-icon className="absolute -right-8 -top-8 text-9xl text-white/10 group-hover:rotate-12 transition-transform duration-1000" icon="solar:globus-linear"></iconify-icon>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-12">
<iconify-icon className="text-xl text-white" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="mt-auto">
<span className="text-white/60 text-xs font-medium tracking-widest uppercase mb-2 block">24/7 Global Concierge</span>
<a className="text-2xl md:text-3xl font-medium tracking-tight hover:text-[#D4AF37] transition-colors block" href="tel:+18001234567" style={{fontFamily: '\'Playfair Display\', serif'}}>
                                +1 (800) 123-4567
                            </a>
<a className="text-sm text-white/60 font-light mt-2 hover:text-white transition-colors block" href="mailto:hello@auratravel.com">
                                hello@auratravel.com
                            </a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-20 border-t border-white/10 pt-16">

<div>
<a className="text-xl font-medium tracking-widest uppercase text-white block mb-8" href="#">Aura</a>
<p className="text-sm text-white/50 font-light leading-relaxed mb-6 max-w-xs">
                        Redefining luxury travel through meticulously curated experiences and uncompromising personal service.
                    </p>
</div>

<div>
<h5 className="text-xs font-medium tracking-widest uppercase text-white/80 mb-6">Company</h5>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">About Us</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Travel Journal</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-medium tracking-widest uppercase text-white/80 mb-6">Destinations</h5>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Europe</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Asia Pacific</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Americas</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors font-light" href="#">Africa &amp; Middle East</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-medium tracking-widest uppercase text-white/80 mb-6">Social</h5>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-20">
<p className="text-xs text-white/30 font-light">© 2024 Aura Travel. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-white/30 hover:text-white transition-colors font-light" href="#">Privacy Policy</a>
<a className="text-xs text-white/30 hover:text-white transition-colors font-light" href="#">Terms of Service</a>
</div>
</div>
</div>

<div className="absolute bottom-[-5%] left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03]">
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter whitespace-nowrap" style={{fontSize: 'clamp(6rem, 20vw, 25rem)'}}>AURA</h1>
</div>
</footer>

    </>
  );
}
