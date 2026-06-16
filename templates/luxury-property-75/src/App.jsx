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
gold: {
400: '#D4AF37',
500: '#C5A059',
600: '#B08D55',
},
neutral: {
850: '#1A1A1A',
900: '#121212',
950: '#080808',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center rotate-45 group-hover:border-gold-400 transition-colors duration-500">
<div className="w-5 h-5 bg-gold-500/10 -rotate-45"></div>
</div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-widest text-sm uppercase">Door Holdings</span>
<span className="text-[10px] tracking-[0.2em] text-gold-500 uppercase">&amp; Management</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Experience</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Services</a>
<a className="px-5 py-2 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 text-xs font-medium uppercase tracking-widest" href="#">
                    Inquire
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite] transform transition-transform duration-[20s]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]"></div>
</div>

<div className="relative z-10 text-center max-w-4xl px-6">
<div className="mb-6 flex justify-center">
<div className="h-px w-16 bg-gold-500/50"></div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6">
                Where Investment <br/> Meets <span className="italic font-normal text-gold-gradient">Elegance.</span>
</h1>
<p className="text-neutral-300 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
                Fifteen years of ownership perspective applied to your portfolio. We treat every property with the exacting standards we apply to our own.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors min-w-[160px]" href="#portfolio">
                    View Portfolio
                </a>
<a className="px-8 py-3 border border-white/20 text-white text-xs font-medium uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[160px]" href="#contact">
                    Management
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
<span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
<iconify-icon className="text-gold-400" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</header>

<section className="py-24 bg-[#050505] relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">15<span className="text-gold-500">+</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Years Combined Experience</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">$250<span className="text-gold-500">M</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Assets Under Management</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">100<span className="text-gold-500">%</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Client Retention Rate</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 space-y-8">
<div className="flex items-center gap-3 text-gold-500">
<iconify-icon icon="solar:crown-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Our Philosophy</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                        The Owner's <br/> <span className="text-neutral-500">Perspective</span>
</h2>
<div className="space-y-6 text-sm text-neutral-400 leading-relaxed font-light">
<p>
                            Most management companies operate as third-party observers. At Door Holdings, we operate with the mindset of ownership. We understand that a property is not just a building; it is a high-performance asset requiring meticulous attention to detail.
                        </p>
<p>
                            From preventative maintenance to white-glove tenant relations, we curate an experience that preserves value and enhances yield. Your investment deserves the same level of care we give our own portfolios.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-gold-400 transition-colors group" href="#">
                            Read Our Story
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-4 border border-gold-500/20 rounded-sm translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative overflow-hidden aspect-[4/5] bg-neutral-900">
<img alt="Marble Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-gold-500 text-xs font-medium uppercase tracking-widest mb-3 block">Expertise</span>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Comprehensive Management</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:key-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Acquisition &amp; Leasing</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Strategic tenant placement and vigorous screening processes to ensure high-caliber occupancy for your luxury assets.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:buildings-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Asset Preservation</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Proactive maintenance schedules and vendor management to maintain the pristine condition of interiors and exteriors.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Financial Reporting</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Transparent, institutional-grade financial reporting providing you with clear insights into your portfolio's performance.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative" id="portfolio">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
<div>
<span className="text-gold-500 text-xs font-medium uppercase tracking-widest mb-2 block">Portfolio</span>
<h2 className="text-3xl font-light text-white tracking-tight">Managed Residences</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest" href="#">
                View All
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-2 gap-1">

<div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
<img alt="Estate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8">
<p className="text-gold-400 text-[10px] uppercase tracking-widest mb-1">Beverly Hills</p>
<h3 className="text-xl text-white font-light tracking-tight">The Hillside Estate</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
<img alt="Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8">
<p className="text-gold-400 text-[10px] uppercase tracking-widest mb-1">Manhattan</p>
<h3 className="text-xl text-white font-light tracking-tight">5th Avenue Penthouse</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900">
<img className="w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=1992&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Elevate Your Investment</h2>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Partner with a management team that values your property as much as you do. Experience the difference of owner-centric management.
                </p>
</div>
<div>
<button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-gold-500/50 text-gold-400 hover:text-black transition-colors duration-300">
<div className="absolute inset-0 w-full h-full bg-gold-500/10 group-hover:bg-gold-500 transition-all duration-300"></div>
<span className="relative text-xs font-medium uppercase tracking-widest flex items-center gap-3">
                        Schedule Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex flex-col gap-1 mb-6" href="#">
<span className="text-white font-medium tracking-widest text-sm uppercase">Door Holdings</span>
<span className="text-[10px] tracking-[0.2em] text-gold-500 uppercase">&amp; Management</span>
</a>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Setting the standard for luxury property management through fifteen years of ownership experience.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Our Properties</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Tenant Portal</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Owner Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:letter-linear"></iconify-icon>
                            inquire@doorholdings.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:phone-linear"></iconify-icon>
                            +1 (800) 555-0199
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear"></iconify-icon>
                            Beverly Hills, CA
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 Door Holdings &amp; Management. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="14"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="14"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
