import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md" x-data="{ mobileMenuOpen: false }">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" width="16"></iconify-icon>
</div>
                NEXUS
            </a>

<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#blog">Insights</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-8 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-black hover:bg-zinc-200 transition-colors" href="#contact">
                    Start Project
                </a>
<button @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div @click.away="mobileMenuOpen = false" className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4" x-show="mobileMenuOpen" x-transition="">
<a className="text-sm font-medium hover:text-white" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white" href="#about">About</a>
<a className="text-sm font-medium hover:text-white" href="#blog">Insights</a>
<a className="text-sm font-medium text-white pt-2" href="#contact">Start Project →</a>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Accepting new clients for Q4
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-white mb-6">
                    Scalable growth <br/>
<span className="text-zinc-500">for modern brands.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                    We combine data-driven SEO, bespoke graphic design, and robust e-commerce strategies to transform how the world sees your business.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
                        View Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all">
                        Our Philosophy
                    </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-zinc-900/50 h-64 md:h-[500px] overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<img alt="Abstract Data Visualization" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20">
<div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<p className="text-xs text-white font-mono tracking-wide">SYSTEM_ACTIVE</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-50">

<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBIT</span>
<span className="text-xl font-semibold tracking-tighter text-white">LAYER</span>
<span className="text-xl font-semibold tracking-tighter text-white">QUARTZ</span>
<span className="text-xl font-semibold tracking-tighter text-white">ECHELON</span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Integrated capabilities.</h2>
<p className="text-lg text-zinc-400 font-light">Everything you need to launch, scale, and sustain your digital presence under one roof.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">SEO &amp; Analytics</h3>
<p className="text-sm leading-relaxed text-zinc-500 mb-6">
                            Technical audits, keyword strategy, and content optimization to drive organic traffic that converts.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Technical SEO
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Link Building
                            </li>
</ul>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Graphic Design</h3>
<p className="text-sm leading-relaxed text-zinc-500 mb-6">
                            Visual identity, UI/UX, and marketing assets designed to tell your brand's unique story with precision.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Brand Identity
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Social Assets
                            </li>
</ul>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:bag-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">E-commerce</h3>
<p className="text-sm leading-relaxed text-zinc-500 mb-6">
                            End-to-end storefront management, conversion rate optimization, and funnel architecture.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Shopify &amp; Webflow
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> CRO
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">
<span className="w-8 h-[1px] bg-zinc-700"></span>
                            The Approach
                        </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                            We don't just execute.<br/>
<span className="text-zinc-600">We engineer growth.</span>
</h2>
<p className="text-zinc-400 mb-6 font-light">
                            Traditional agencies focus on deliverables. We focus on outcomes. By aligning creative vision with rigorous data analysis, we uncover opportunities others miss.
                        </p>
<p className="text-zinc-400 mb-8 font-light">
                            Our team operates as an extension of yours, providing the transparency of an in-house department with the firepower of a global agency.
                        </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-medium text-white mb-1">98%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Client Retention</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">10x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Avg ROI</div>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
<div className="glass-panel rounded-2xl p-1 relative overflow-hidden">
<div className="bg-black/80 rounded-xl overflow-hidden h-full relative group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10"></div>
<img alt="Team collaborating" className="w-full h-[400px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="text-xs text-zinc-300 font-medium">Strategic Planning Phase</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Latest insights</h2>
<p className="text-zinc-500 font-light">Thoughts on marketing, design, and technology.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors" href="#">
                        Read all articles
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="aspect-[16/9] bg-zinc-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10"></div>
<img alt="SEO Data" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 items-center mb-3">
<span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">SEO</span>
<span className="text-xs text-zinc-500">Oct 12, 2023</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 group-hover:text-zinc-300 transition-colors">The death of keywords? Semantic search explained.</h3>
</a>

<a className="group block" href="#">
<div className="aspect-[16/9] bg-zinc-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10"></div>
<img alt="Minimal Design" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 items-center mb-3">
<span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded">Design</span>
<span className="text-xs text-zinc-500">Sep 28, 2023</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 group-hover:text-zinc-300 transition-colors">Minimalism in E-commerce: Less is more revenue.</h3>
</a>

<a className="group block" href="#">
<div className="aspect-[16/9] bg-zinc-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10"></div>
<img alt="Checkout Flow" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex gap-3 items-center mb-3">
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Growth</span>
<span className="text-xs text-zinc-500">Sep 15, 2023</span>
</div>
<h3 className="text-lg text-white font-medium mb-2 group-hover:text-zinc-300 transition-colors">Optimizing checkout flows for mobile users.</h3>
</a>
</div>
<div className="mt-8 md:hidden">
<a className="flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors" href="#">
                        Read all articles
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">Ready to scale?</h2>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-xl mx-auto">
                    Transform your digital presence with a team that cares about your bottom line as much as you do.
                </p>
<form className="max-w-sm mx-auto space-y-4 text-left">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full h-10 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all" type="button">
                        Get Started
                    </button>
<p className="text-xs text-center text-zinc-600">No spam. Unsubscribe anytime.</p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-base font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" width="10"></iconify-icon>
</div>
                        NEXUS
                    </a>
<p className="text-xs text-zinc-500">
                        Designing the future of digital marketing services.
                    </p>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">SEO Audit</a></li>
<li><a className="hover:text-white transition-colors" href="#">Visual Identity</a></li>
<li><a className="hover:text-white transition-colors" href="#">E-commerce Dev</a></li>
<li><a className="hover:text-white transition-colors" href="#">Content Strategy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Social</h4>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2023 Nexus Marketing. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
