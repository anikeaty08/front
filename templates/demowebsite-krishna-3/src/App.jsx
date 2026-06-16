import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const textReveals = document.querySelectorAll('.text-reveal');
            textReveals.forEach(el => observer.observe(el));

            const imageReveals = document.querySelectorAll('.image-reveal-wrapper');
            imageReveals.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl text-white font-medium tracking-tighter uppercase z-50 flex items-center gap-1" href="#">
                AVV<span className="text-amber-200">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-slate-400 hover:text-amber-200 transition-colors" href="#services">Treatments</a>
<a className="text-sm font-light text-slate-400 hover:text-amber-200 transition-colors" href="#experience">The Experience</a>
<a className="text-sm font-light text-slate-400 hover:text-amber-200 transition-colors" href="#stylists">Artisans</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-950 bg-amber-200 px-5 py-2 rounded-full hover:bg-white transition-colors">
<span>Book Appointment</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-white pt-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/30 bg-amber-950/10 mb-6 text-reveal">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-amber-200/80">Exclusive Fall Collection</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8 text-reveal delay-100">
                    Timeless <br/>
<span className="text-slate-500">Beauty.</span> <br/>
                    Redefined.
                </h1>
<p className="text-lg md:text-xl font-light text-slate-400 max-w-lg leading-relaxed mb-10 text-reveal delay-200">
                    Immerse yourself in a sanctuary of style. Bespoke color, precision cutting, and restorative treatments crafted for the modern muse.
                </p>
<div className="flex flex-wrap gap-4 text-reveal delay-300">
<button className="flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3.5 rounded text-sm font-semibold hover:bg-amber-100 transition-all">
                        View Treatment Menu
                    </button>
<button className="flex items-center justify-center gap-2 border border-slate-700 text-white px-8 py-3.5 rounded text-sm font-medium hover:border-amber-200/50 hover:text-amber-100 transition-all group">
                        Our Gallery
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-200" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] w-full">
<div className="absolute inset-0 image-reveal-wrapper rounded-lg border border-white/5">
<img alt="Salon Interior" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-slate-800 p-4 rounded backdrop-blur-md shadow-2xl text-reveal delay-300">
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Elite Stylists</span>
<span className="text-[10px] text-amber-200">Vogue Recommended</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="text-reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Signature Treatments</h2>
<p className="text-slate-400 font-light max-w-sm">Curated beauty rituals tailored to your unique essence.</p>
</div>
<a className="text-sm text-amber-200/80 border-b border-amber-900/50 pb-0.5 hover:text-amber-100 hover:border-amber-200 transition-colors text-reveal delay-100" href="#">View Full Menu</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors text-reveal delay-100 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-amber-200 rotate-[-15deg]" icon="solar:scissors-linear" width="48"></iconify-icon>
</div>
<div className="mb-8">
<iconify-icon className="text-slate-400 group-hover:text-amber-200 transition-colors" icon="solar:scissors-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Couture Cut &amp; Style</h3>
<p className="text-sm font-light text-slate-400 mb-6 line-clamp-2">Precision artistry designed to frame your face, including a luxury wash and blowout.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-amber-100">$85+</span>
<span className="text-xs text-slate-500 group-hover:text-white transition-colors flex items-center gap-1">
                            Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative p-8 rounded border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors text-reveal delay-200 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-amber-200 rotate-[-15deg]" icon="solar:palette-linear" width="48"></iconify-icon>
</div>
<div className="mb-8">
<iconify-icon className="text-slate-400 group-hover:text-amber-200 transition-colors" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Balayage &amp; Color</h3>
<p className="text-sm font-light text-slate-400 mb-6 line-clamp-2">Hand-painted highlights and rich custom tones to enhance your natural radiance.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-amber-100">$160+</span>
<span className="text-xs text-slate-500 group-hover:text-white transition-colors flex items-center gap-1">
                            Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative p-8 rounded border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors text-reveal delay-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-amber-200 rotate-[-15deg]" icon="solar:star-shine-linear" width="48"></iconify-icon>
</div>
<div className="mb-8">
<iconify-icon className="text-slate-400 group-hover:text-amber-200 transition-colors" icon="solar:flower-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Rejuvenation Spa</h3>
<p className="text-sm font-light text-slate-400 mb-6 line-clamp-2">Deep conditioning masks and scalp therapies to restore health and shine.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-amber-100">$65+</span>
<span className="text-xs text-slate-500 group-hover:text-white transition-colors flex items-center gap-1">
                            Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative h-[600px] w-full image-reveal-wrapper rounded-lg">
<img alt="Styling Process" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1595476103518-3c8ad0460395?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="pl-0 md:pl-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 text-reveal">
                        The Science of <br/> <span className="text-amber-200">Radiance.</span>
</h2>
<div className="space-y-8 text-reveal delay-100">
<p className="text-slate-400 font-light leading-relaxed">
                            We believe that hair is your most versatile accessory. Our artisans combine technical mastery with an artist's eye, using only the finest premium products to ensure you leave feeling empowered and beautiful.
                        </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<h4 className="text-2xl font-medium text-white mb-1">15+</h4>
<span className="text-xs text-slate-500 uppercase tracking-widest">Years of Excellence</span>
</div>
<div>
<h4 className="text-2xl font-medium text-white mb-1">8k+</h4>
<span className="text-xs text-slate-500 uppercase tracking-widest">Transformations</span>
</div>
</div>
<button className="text-amber-100 border-b border-amber-200/30 pb-1 hover:text-white hover:border-white transition-colors">
                            Meet the Stylists
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950">
<div className="max-w-7xl mx-auto mb-12 text-center text-reveal">
<h2 className="text-3xl font-medium text-white tracking-tight">The Lookbook</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
<div className="col-span-1 h-full image-reveal-wrapper rounded-lg">
<img alt="Gallery 1" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full image-reveal-wrapper rounded-lg mt-12 md:mt-0">
<img alt="Gallery 2" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full image-reveal-wrapper rounded-lg">
<img alt="Gallery 3" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full image-reveal-wrapper rounded-lg mt-12 md:mt-0">
<img alt="Gallery 4" className="image-reveal-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-slate-950">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.05] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<iconify-icon className="text-amber-200 mb-6" icon="solar:calendar-linear" width="40"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6 text-reveal">
                Ready to <br/> <span className="text-slate-500">glow?</span>
</h2>
<p className="text-slate-400 font-light mb-10 text-reveal delay-100">
                Secure your appointment today and let us unveil your most beautiful self.
            </p>
<form className="w-full max-w-md mx-auto space-y-4 text-left text-reveal delay-200">
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-200/50 transition-colors" placeholder="Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-200/50 transition-colors" placeholder="Phone" type="tel"/>
</div>
</div>
<div className="relative">
<select className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200/50 transition-colors appearance-none cursor-pointer">
<option>Select Treatment</option>
<option>Couture Cut</option>
<option>Balayage &amp; Color</option>
<option>Rejuvenation Spa</option>
</select>
<div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-amber-200 text-slate-950 font-semibold py-3 rounded hover:bg-white transition-colors" type="button">
                    Confirm Booking
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-xl font-medium tracking-tighter text-white uppercase">AVV<span className="text-amber-200">.</span></span>
<p className="text-xs text-slate-500 mt-2 font-light">© 2024 AVV Ladies Salon. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-amber-200 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-amber-200 transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-amber-200 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
