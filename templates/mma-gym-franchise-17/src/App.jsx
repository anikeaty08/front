import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6 fill-current" data-lucide="biceps-flexed"></i>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight uppercase leading-none">Ground Control</span>
<span className="text-[10px] text-zinc-400 tracking-widest uppercase">Est. 2008</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#hero">Home</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1" href="#shop">
                    Shop <i className="w-3 h-3 text-zinc-500" data-lucide="external-link"></i>
</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#partner">
                    Partner Program
                </a>
<a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Member Login</span>
</a>

<button className="lg:hidden p-2 text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
</div>
<div className="relative z-10 container mx-auto px-6 text-center max-w-5xl mt-10">
<span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                New Locations Opening Soon
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-8 leading-[0.95]">
                FIND A <span className="text-red-600">GROUND CONTROL</span> <br className="hidden md:block"/> GYM NEAR YOU.
            </h1>
<p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                World-class Jiu Jitsu, Muay Thai, and MMA training. Join a community that pushes you to be your best self.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]" href="#locations">
                    Find My Gym
                </a>
<a className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2" href="#shop">
<span>Shop Gear</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="relative z-20 -mt-20 lg:-mt-32 px-4 pb-24" id="locations">
<div className="max-w-7xl mx-auto">
<div className="rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[800px]">

<div className="w-full lg:w-[400px] flex flex-col border-r border-white/5 bg-zinc-900/95 backdrop-blur z-10 shrink-0">
<div className="p-6 border-b border-white/5">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Select Location</h2>
<p className="text-base text-zinc-400 mb-4">Auto-detecting nearest gym...</p>
<div className="relative">
<i className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-600" placeholder="Zip, City, or State" type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto locator-scroll p-4 space-y-3">

<div className="group p-4 rounded-xl bg-zinc-800/50 border border-red-600/50 cursor-pointer hover:bg-zinc-800 transition-all">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">Baltimore (HQ)</h3>
<span className="bg-red-600/20 text-red-400 text-xs px-2 py-0.5 rounded-full">Nearest</span>
</div>
<p className="text-zinc-400 text-sm mb-1">8303 Pulaski Hwy, Rosedale, MD</p>
<p className="text-zinc-500 text-xs mb-3">Open Today: 6:00 AM - 9:00 PM</p>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-white text-black text-xs font-semibold py-2 rounded-lg hover:bg-zinc-200">View Site</button>
<button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-zinc-300"><i className="w-4 h-4" data-lucide="phone"></i></button>
<button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-zinc-300"><i className="w-4 h-4" data-lucide="map-pin"></i></button>
</div>
</div>

<div className="group p-4 rounded-xl border border-white/5 hover:bg-zinc-800 hover:border-white/10 cursor-pointer transition-all">
<h3 className="text-lg font-semibold text-white mb-1">Columbia</h3>
<p className="text-zinc-400 text-sm mb-1">9130 Red Branch Rd, Columbia, MD</p>
<p className="text-zinc-500 text-xs mb-3">Open Today: 7:00 AM - 8:30 PM</p>
<div className="flex gap-2 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="flex-1 border border-white/20 text-white text-xs font-semibold py-2 rounded-lg hover:bg-white/10">View Site</button>
</div>
</div>

<div className="group p-4 rounded-xl border border-white/5 hover:bg-zinc-800 hover:border-white/10 cursor-pointer transition-all">
<h3 className="text-lg font-semibold text-white mb-1">Hunt Valley</h3>
<p className="text-zinc-400 text-sm mb-1">47 Loveton Cir, Sparks Glencoe, MD</p>
<p className="text-zinc-500 text-xs mb-3">Open Today: 6:30 AM - 9:00 PM</p>
<div className="flex gap-2 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="flex-1 border border-white/20 text-white text-xs font-semibold py-2 rounded-lg hover:bg-white/10">View Site</button>
</div>
</div>

<div className="group p-4 rounded-xl border border-white/5 hover:bg-zinc-800 hover:border-white/10 cursor-pointer transition-all">
<h3 className="text-lg font-semibold text-white mb-1">Owings Mills</h3>
<p className="text-zinc-400 text-sm mb-1">12400 Owings Mills Blvd, Reisterstown</p>
<p className="text-zinc-500 text-xs mb-3">Open Today: 10:00 AM - 8:00 PM</p>
<div className="flex gap-2 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="flex-1 border border-white/20 text-white text-xs font-semibold py-2 rounded-lg hover:bg-white/10">View Site</button>
</div>
</div>
</div>
</div>

<div className="relative flex-1 bg-zinc-800">

<img alt="Map" className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative flex flex-col items-center">
<div className="bg-zinc-950 text-white px-3 py-1 rounded-lg text-xs font-medium mb-1 whitespace-nowrap border border-white/10 shadow-xl">
                                Ground Control Baltimore
                            </div>
<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
</div>
</div>
<div className="absolute top-[40%] left-[60%]">
<div className="w-3 h-3 bg-zinc-500 rounded-full border-2 border-white hover:bg-red-600 cursor-pointer transition-colors"></div>
</div>
<div className="absolute top-[60%] left-[45%]">
<div className="w-3 h-3 bg-zinc-500 rounded-full border-2 border-white hover:bg-red-600 cursor-pointer transition-colors"></div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<button className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-zinc-800"><i className="w-5 h-5" data-lucide="plus"></i></button>
<button className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-zinc-800"><i className="w-5 h-5" data-lucide="minus"></i></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Training Programs</h2>
<p className="text-xl text-zinc-400 max-w-xl">Comprehensive martial arts instruction for all skill levels. From beginners to professional fighters.</p>
</div>
<a className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors" href="#">View All Disciplines</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
<img alt="Muay Thai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="sword"></i>
<h3 className="text-3xl font-bold italic tracking-tighter text-white mb-2 uppercase">Muay Thai</h3>
<p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            The art of 8 limbs. Striking techniques using fists, elbows, knees, and shins.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
<img alt="Jiu Jitsu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="waves"></i>
<h3 className="text-3xl font-bold italic tracking-tighter text-white mb-2 uppercase">Jiu Jitsu</h3>
<p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Grappling based on leverage and ground control. Gi and No-Gi classes available.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
<img alt="Wrestling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="users"></i>
<h3 className="text-3xl font-bold italic tracking-tighter text-white mb-2 uppercase">Wrestling</h3>
<p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Takedowns, positioning, and explosive power essential for MMA integration.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
<img alt="MMA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="zap"></i>
<h3 className="text-3xl font-bold italic tracking-tighter text-white mb-2 uppercase">MMA</h3>
<p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            The complete blend of striking and grappling. Test your skills in the cage.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-2xl shadow-red-900/50">
<i className="w-8 h-8 text-white fill-current" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-mono text-zinc-400 bg-black/50 px-2 py-1 rounded">LIBRARY PREVIEW</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ground Control Online Academy</h2>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        Access our national-level curriculum from anywhere. Breakdown videos, technique drills, and theory from our black belt instructors. Perfect for supplementing your in-gym training.
                    </p>
<button className="flex items-center gap-2 text-white font-medium hover:text-red-500 transition-colors group">
                        Explore Library <i className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<h2 className="text-4xl font-semibold tracking-tight text-white">Latest Gear</h2>
<a className="hidden md:inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" href="#">
                    Shop All Gear <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-zinc-900 rounded-2xl p-8 mb-4 border border-white/5 relative overflow-hidden">
<div className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 cursor-pointer">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<img alt="Gloves" className="w-full h-64 object-contain mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Pro Sparring Gloves</h3>
<p className="text-zinc-500 text-sm">16oz - Leather</p>
</div>
<span className="text-lg font-semibold text-white">$89.00</span>
</div>
</div>

<div className="group">
<div className="bg-zinc-900 rounded-2xl p-8 mb-4 border border-white/5 relative overflow-hidden">
<div className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 cursor-pointer">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<img alt="Dumbbells" className="w-full h-64 object-contain mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">GC Competition Gi</h3>
<p className="text-zinc-500 text-sm">White/Black - Pearl Weave</p>
</div>
<span className="text-lg font-semibold text-white">$149.00</span>
</div>
</div>

<div className="group">
<div className="bg-zinc-900 rounded-2xl p-8 mb-4 border border-white/5 relative overflow-hidden">
<div className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 cursor-pointer">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<img alt="Shirt" className="w-full h-64 object-contain mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Performance Rashguard</h3>
<p className="text-zinc-500 text-sm">Ranked Colors</p>
</div>
<span className="text-lg font-semibold text-white">$55.00</span>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block px-6 py-3 border border-white/20 rounded-full text-white font-medium" href="#">Shop All Gear</a>
</div>
</div>
</section>

<section className="relative py-32 bg-zinc-950 overflow-hidden" id="partner">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-zinc-950 to-zinc-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<i className="text-red-500 w-5 h-5" data-lucide="briefcase"></i>
<span className="text-red-500 font-medium tracking-wide text-sm uppercase">Franchise Opportunity</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Own a Ground Control.</h2>
<p className="text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed">
                        Join one of the fastest-growing martial arts brands in the country. We provide the blueprint, training systems, and marketing support to help you build a thriving community in your city.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-zinc-300">Proven business model with recurring revenue streams.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-zinc-300">National brand authority and centralized marketing.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-zinc-300">Comprehensive instructor training certification.</span>
</li>
</ul>
<a className="inline-flex items-center justify-center w-fit rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-zinc-200 transition-colors" href="#">
                        Apply to Partner Program
                    </a>
</div>
<div className="lg:col-span-5 relative h-full min-h-[400px]">
<img alt="Gym Owner" className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-2xl border border-white/10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-zinc-800 mx-auto mb-8 fill-current" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                More Than Just A Gym.
            </h2>
<p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12">
                "Ground Control was founded on the belief that martial arts is for everyone. Whether you want to compete in the cage, learn self-defense, or just get in the best shape of your life, our mats are open to you. We build confidence, discipline, and a family-like environment."
            </p>
<div className="flex items-center justify-center gap-4">
<img alt="Founder" className="w-12 h-12 rounded-full grayscale border border-white/20" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="text-white font-medium">John Doe</div>
<div className="text-zinc-500 text-sm">Founder, Ground Control USA</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-red-600/30 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-zinc-950 rounded-lg text-red-500 border border-white/5">
<i className="w-6 h-6" data-lucide="users-2"></i>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Refer a Friend</h3>
<p className="text-zinc-400 text-base">Earn rewards when friends join any Ground Control location nationwide.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-red-600/30 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-zinc-950 rounded-lg text-white border border-white/5">
<i className="w-6 h-6" data-lucide="layout-dashboard"></i>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Member Portal</h3>
<p className="text-zinc-400 text-base">Manage your membership, book classes, and track your belt progress.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
<i className="w-5 h-5 fill-current" data-lucide="biceps-flexed"></i>
</div>
<span className="text-lg font-bold text-white uppercase tracking-tight">Ground Control</span>
</a>
<p className="text-zinc-500 text-sm mb-6">
                        Premier Mixed Martial Arts training centers across the USA.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-zinc-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Programs</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-red-500 transition-colors" href="#">Jiu Jitsu</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Muay Thai</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Boxing</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">MMA</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Kids Programs</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#locations">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#partner">Partner Program</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Waiver</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-sm">© 2024 Ground Control USA. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-zinc-500 text-xs font-mono">SYSTEMS OPERATIONAL</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
