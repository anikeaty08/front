import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-wait').forEach((el) => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-[#050505]/95 to-[#050505] pointer-events-none"></div>

<div className="border-b border-white/5 bg-[#050505] text-[10px] md:text-xs tracking-wider uppercase font-medium text-zinc-500 py-2.5 px-6 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span>Charleston, SC &amp; Surrounding Lowcountry</span>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline">Design-Build Firm</span>
<span className="opacity-30">|</span>
<span className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="lucide:phone" width="12"></iconify-icon>
                843.555.0192
            </span>
</div>
</div>

<header className="sticky top-0 w-full z-40 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5 transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">

<a className="text-2xl font-newsreader font-normal tracking-tight text-white group" href="#">
                BOONE
                <span className="text-lime-600/90 group-hover:text-lime-500 transition-colors">.</span>
</a>

<nav className="hidden lg:block h-full">
<ul className="flex items-center gap-10 h-full text-xs font-medium tracking-[0.15em] uppercase text-zinc-400">
<li className="nav-item h-full flex items-center relative cursor-pointer group">
<span className="nav-link flex items-center gap-1 py-6 transition-colors duration-300">
                            Services
                            <iconify-icon className="opacity-50 group-hover:rotate-180 transition-transform duration-300" icon="lucide:chevron-down" width="12"></iconify-icon>
</span>
<div className="dropdown-menu absolute top-[calc(100%-1rem)] -left-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-lg p-2 shadow-2xl shadow-black/50">
<a className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
                                Landscape Architecture
                            </a>
<a className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
                                Hardscape Construction
                            </a>
<a className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all" href="#">
                                Garden Curation
                            </a>
</div>
</li>
<li className="nav-item h-full flex items-center relative cursor-pointer">
<a className="nav-link transition-colors duration-300" href="#portfolio">Portfolio</a>
</li>
<li className="nav-item h-full flex items-center relative cursor-pointer">
<a className="nav-link transition-colors duration-300" href="#process">Our Process</a>
</li>
<li className="nav-item h-full flex items-center relative cursor-pointer">
<a className="nav-link transition-colors duration-300" href="#journal">Journal</a>
</li>
</ul>
</nav>

<div className="flex items-center gap-6">
<button className="btn-beam hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase font-medium text-white hover:scale-105 transition-transform duration-300">
<span>Consultation</span>
</button>
<button className="lg:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621685656965-0985a53589b2?q=80&amp;w=3270&amp;auto=format&amp;fit=crop')] bg-cover bg-center" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)', opacity: '0.6'}}>
</div>
</div>
<div className="relative z-10 max-w-5xl mx-auto mt-20">
<div className="reveal-wait mb-8 flex justify-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/20 border border-lime-500/20 backdrop-blur-md text-[10px] tracking-[0.2em] font-semibold text-lime-500 uppercase">
<iconify-icon icon="lucide:sprout" width="12"></iconify-icon>
                        Established 2012
                    </span>
</div>
<h1 className="reveal-wait delay-100 text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-newsreader font-light tracking-tighter text-white mb-8">
                    Living
                    <span className="block text-zinc-500 italic font-light">Architecture.</span>
</h1>
<p className="reveal-wait delay-200 text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                    We bridge the discipline of structural design with the organic nature of the Lowcountry, creating outdoor sanctuaries that endure.
                </p>
<div className="reveal-wait delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-[1.02]">
<span className="relative z-10 text-sm font-medium tracking-widest uppercase">View Projects</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all text-sm font-medium tracking-widest uppercase">
                        Our Philosophy
                    </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0a] py-16 reveal-wait">
<div className="max-w-[1600px] mx-auto px-6">
<p className="text-center text-xs tracking-[0.2em] text-zinc-600 uppercase mb-8">Featured In</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:architecturaldigest" width="100"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:houzz" width="100"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:dwell" width="80"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:thespruce" width="100"></iconify-icon>
</div>
</div>
</section>

<section className="py-[140px] max-w-[1600px] mx-auto px-6" id="services">
<div className="grid lg:grid-cols-2 gap-20 items-start">
<div className="reveal-wait sticky top-32">
<span className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-lime-600"></span> Expertise
                    </span>
<h2 className="text-5xl md:text-7xl font-newsreader font-light tracking-tight text-white leading-[1.1] mb-8">
                        Crafting <br/>
<span className="text-zinc-600 italic">Environment.</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md mb-12">
                        Our integrated approach combines landscape architecture, horticulture, and construction management into a seamless delivery method.
                    </p>
<div className="inline-flex flex-col gap-4">
<div className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] rounded-xl backdrop-blur-sm">
<iconify-icon className="text-lime-500 mt-1" icon="lucide:shield-check" width="24"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium tracking-wide uppercase mb-2">Build Warranty</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Every hardscape installation is backed by our comprehensive 5-year structural integrity guarantee.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col reveal-wait delay-200">

<div className="service-item py-10 border-b border-white/10 flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-6">
<span className="text-xs text-zinc-600 font-mono">01</span>
<h3 className="text-3xl font-newsreader font-light tracking-tight text-white group-hover:translate-x-2 transition-transform">Landscape Architecture</h3>
</div>
<iconify-icon className="service-icon text-zinc-600 transition-all duration-300" icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>

<div className="service-item py-10 border-b border-white/10 flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-6">
<span className="text-xs text-zinc-600 font-mono">02</span>
<h3 className="text-3xl font-newsreader font-light tracking-tight text-white group-hover:translate-x-2 transition-transform">Hardscape Construction</h3>
</div>
<iconify-icon className="service-icon text-zinc-600 transition-all duration-300" icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>

<div className="service-item py-10 border-b border-white/10 flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-6">
<span className="text-xs text-zinc-600 font-mono">03</span>
<h3 className="text-3xl font-newsreader font-light tracking-tight text-white group-hover:translate-x-2 transition-transform">Fine Gardening</h3>
</div>
<iconify-icon className="service-icon text-zinc-600 transition-all duration-300" icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>

<div className="service-item py-10 border-b border-white/10 flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-6">
<span className="text-xs text-zinc-600 font-mono">04</span>
<h3 className="text-3xl font-newsreader font-light tracking-tight text-white group-hover:translate-x-2 transition-transform">Pool &amp; Spa Design</h3>
</div>
<iconify-icon className="service-icon text-zinc-600 transition-all duration-300" icon="lucide:arrow-up-right" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] py-[140px]" id="portfolio">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex justify-between items-end mb-16 reveal-wait">
<div>
<span className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Selected Works</span>
<h2 className="text-4xl md:text-6xl font-newsreader font-light tracking-tight text-white">
                            Curated Spaces.
                        </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">
                        View Full Archive
                        <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm reveal-wait delay-100">
<img alt="Estate Garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white font-newsreader text-2xl italic">The Sullivan Estate</span>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm reveal-wait delay-200">
<img alt="Modern Patio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white font-newsreader text-2xl italic">Kiawah Modern</span>
</div>
</div>

<div className="md:col-span-2 group relative aspect-[21/9] overflow-hidden rounded-sm reveal-wait delay-300">
<img alt="Detailed Stonework" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white font-newsreader text-2xl italic">Daniel Island Courtyard</span>
</div>
</div>
</div>
<div className="mt-8 md:hidden text-center">
<a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white border-b border-white/30 pb-1" href="#">
                        View Full Archive
                    </a>
</div>
</div>
</section>

<section className="py-[160px] border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-lime-900/5 -z-10"></div>
<div className="max-w-xl mx-auto px-6 text-center">
<iconify-icon className="text-lime-600 mb-6 reveal-wait" icon="lucide:leaf" width="32"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-newsreader font-light tracking-tight text-white mb-6 reveal-wait delay-100">
                    Begin the conversation.
                </h2>
<p className="text-lg text-zinc-400 font-light mb-10 reveal-wait delay-200">
                    Schedule a site consultation to discuss the potential of your property.
                </p>
<div className="reveal-wait delay-300">
<button className="btn-beam px-12 py-5 rounded-full border border-white/10 bg-zinc-900 text-white text-sm font-semibold tracking-widest uppercase hover:scale-105 transition-transform duration-300">
                        Request Consultation
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 text-sm">
<div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="flex flex-col items-start">
<a className="text-2xl font-newsreader font-normal tracking-tight text-white mb-6" href="#">
                    BOONE
                </a>
<p className="text-zinc-500 leading-relaxed mb-8 max-w-xs">
                    Creating enduring outdoor environments through thoughtful design and master craftsmanship in the Lowcountry.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Services</h4>
<ul className="flex flex-col gap-3 text-zinc-500">
<li><a className="hover:text-lime-500 transition-colors" href="#">Master Planning</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Hardscapes &amp; Masonry</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Water Features</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Outdoor Lighting</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Company</h4>
<ul className="flex flex-col gap-3 text-zinc-500">
<li><a className="hover:text-lime-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Our Process</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Client Portal</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Contact</h4>
<ul className="flex flex-col gap-4 text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="lucide:map-pin"></iconify-icon>
<span>123 King Street, Suite 4<br/>Charleston, SC 29401</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:phone"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:8435550192">843.555.0192</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:mail"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:hello@boonelandscape.com">hello@boonelandscape.com</a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1600px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Boone Landscape Design. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
