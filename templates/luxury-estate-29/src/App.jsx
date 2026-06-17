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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed w-full z-50 top-0 glass-nav border-b border-white-faint">
<div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
<a className="text-white text-xl font-semibold tracking-tighter uppercase" href="#">
                AETHER
            </a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-normal uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-normal uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="text-xs font-normal uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="px-6 py-2.5 border border-white-faint text-white hover:bg-white hover:text-black transition-all duration-500 text-xs font-normal uppercase tracking-widest" href="#contact">
                    Inquire
                </a>
</div>
<button className="md:hidden text-white flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 hero-gradient z-0"></div>
<div className="absolute inset-0 z-0">
<img alt="Luxury Architecture" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center max-w-5xl px-8">
<div className="flex justify-center mb-8">
<span className="px-4 py-1 border border-white-faint rounded-full text-[10px] uppercase tracking-[0.3em] text-gold-subtle bg-white/5">
                    Defined by Excellence
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none mb-8">
                The New Standard <br/> of <span className="italic font-normal">Living.</span>
</h1>
<p className="text-neutral-400 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
                Institutional-grade management for high-net-worth portfolios. We bridge the gap between architectural masterpiece and high-performance asset.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto px-10 py-4 bg-white text-black text-xs font-normal uppercase tracking-widest hover:bg-neutral-200 transition-all" href="#portfolio">
                    View Residences
                </a>
<a className="w-full sm:w-auto px-10 py-4 border border-white-faint text-white text-xs font-normal uppercase tracking-widest hover:bg-white/5 transition-all" href="#contact">
                    Asset Management
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
<span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Discover</span>
<div className="h-12 w-px bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="py-16 border-y border-white-faint">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-2xl text-white font-normal tracking-tight mb-1">$1.4B+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-600">Assets Managed</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl text-white font-normal tracking-tight mb-1">24/7</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-600">Concierge Service</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl text-white font-normal tracking-tight mb-1">0.12%</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-600">Vacancy Rate</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl text-white font-normal tracking-tight mb-1">12</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-600">Global Markets</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-8">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4 sticky top-32">
<h2 className="text-xs font-normal text-gold-subtle uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl text-white font-light tracking-tight leading-tight mb-6">
                        Seamless Care <br/> For Complex Assets
                    </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">
                        Our management philosophy is rooted in the "white-glove" tradition, enhanced by modern proprietary technology to ensure your investment thrives while you focus elsewhere.
                    </p>
<a className="inline-flex items-center gap-3 text-xs text-white uppercase tracking-widest group" href="#">
                        Explore Methodology
                        <iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
<div className="p-10 border border-white-faint bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-white mb-8" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h4 className="text-lg text-white font-normal tracking-tight mb-4">Asset Protection</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Comprehensive risk mitigation strategies and preventative maintenance programs designed for bespoke architecture.</p>
</div>
<div className="p-10 border border-white-faint bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-white mb-8" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h4 className="text-lg text-white font-normal tracking-tight mb-4">Tenant Curation</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Rigorous vetting processes to ensure your property is occupied by individuals who value quality as much as you do.</p>
</div>
<div className="p-10 border border-white-faint bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-white mb-8" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h4 className="text-lg text-white font-normal tracking-tight mb-4">Financial Clarity</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Real-time reporting through our private owner portal, providing absolute transparency on ROI and expenses.</p>
</div>
<div className="p-10 border border-white-faint bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-white mb-8" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h4 className="text-lg text-white font-normal tracking-tight mb-4">Global Liaison</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Dedicated portfolio managers available across all time zones to facilitate international requirements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950" id="portfolio">
<div className="max-w-7xl mx-auto px-8 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-3xl text-white font-light tracking-tight mb-4">Managed Residences</h2>
<p className="text-sm text-neutral-500 leading-relaxed">A selection of the ultra-luxury estates currently under our care in prime global locations.</p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 flex items-center justify-center border border-white-faint text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center border border-white-faint text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-neutral-900">
<img alt="The Obsidian" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg text-white font-normal tracking-tight">The Obsidian</h4>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Saint-Tropez, FR</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-neutral-900">
<img alt="Azure Penthouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg text-white font-normal tracking-tight">Azure Penthouse</h4>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Miami Beach, US</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer hidden lg:block">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-neutral-900">
<img alt="Elysium Estate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg text-white font-normal tracking-tight">Elysium Estate</h4>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Aspen, US</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="max-w-4xl">
<blockquote className="text-3xl md:text-5xl text-white font-light tracking-tight leading-snug mb-12">
                    "Management is not about maintaining buildings; it is about sustaining an <span className="text-neutral-600">exacting lifestyle</span> through meticulous attention to detail."
                </blockquote>
<div className="flex items-center gap-6">
<div className="w-16 h-px bg-gold-subtle"></div>
<div>
<p className="text-white text-xs font-normal uppercase tracking-widest">Julian Thorne</p>
<p className="text-neutral-600 text-[10px] uppercase tracking-widest mt-1">Founder &amp; Managing Director</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white-faint" id="contact">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-neutral-900/40 border border-white-faint p-12 md:p-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<iconify-icon className="text-white translate-x-1/4 -translate-y-1/4" icon="solar:buildings-linear" width="400"></iconify-icon>
</div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl text-white font-light tracking-tight mb-8">Ready to Elevate <br/> Your Portfolio?</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-12">
                        We accept a limited number of new estates each year to ensure our standard of service remains uncompromised. Contact our private office for a confidential consultation.
                    </p>
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<input className="w-full bg-transparent border-b border-white-faint py-3 text-xs text-white focus:outline-none focus:border-white transition-colors uppercase tracking-widest" placeholder="Full Name" type="text"/>
<input className="w-full bg-transparent border-b border-white-faint py-3 text-xs text-white focus:outline-none focus:border-white transition-colors uppercase tracking-widest" placeholder="Email Address" type="email"/>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">By submitting, you agree to our privacy protocols.</p>
<button className="w-full sm:w-auto px-12 py-4 bg-white text-black text-xs font-normal uppercase tracking-widest hover:bg-neutral-200 transition-all">
                                Send Inquiry
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t border-white-faint">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2">
<a className="text-white text-xl font-semibold tracking-tighter uppercase block mb-6" href="#">AETHER</a>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        The world's most prestigious properties require a unique breed of management. Founded on the principles of discretion and excellence.
                    </p>
</div>
<div>
<h5 className="text-white text-[10px] uppercase tracking-widest mb-6">Navigation</h5>
<ul className="space-y-4 text-[10px] uppercase tracking-widest text-neutral-600">
<li><a className="hover:text-white transition-colors" href="#">Estates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Network</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-[10px] uppercase tracking-widest mb-6">Offices</h5>
<ul className="space-y-4 text-[10px] uppercase tracking-widest text-neutral-600">
<li>London</li>
<li>New York</li>
<li>Geneva</li>
<li>Dubai</li>
</ul>
</div>
<div>
<h5 className="text-white text-[10px] uppercase tracking-widest mb-6">Legal</h5>
<ul className="space-y-4 text-[10px] uppercase tracking-widest text-neutral-600">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white-faint">
<p className="text-[10px] uppercase tracking-[0.3em] text-neutral-700">© 2024 Aether Estate Management Group</p>
<div className="flex gap-8">
<a className="text-neutral-600 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">Instagram</a>
<a className="text-neutral-600 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
