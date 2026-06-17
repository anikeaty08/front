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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-fade-up').forEach(el => {
                observer.observe(el);
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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a href="#">
<img alt="K Construction Logo" border="0" className="w-10 h-10 bg-black text-white flex items-center justify-center text-sm rounded-xl font-normal" src="https://iili.io/qQBE4Ox.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base text-gray-500 font-normal">
<a className="hover:text-black transition-colors" href="#projects">Projects</a>
<a className="hover:text-black transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-black transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-base font-normal bg-black text-white rounded-full hover:bg-gray-800 transition-colors" href="#contact">
                    Get a Quote
                </a>
<button className="md:hidden text-black flex items-center justify-center">
<iconify-icon className="w-6 h-6" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="pt-24 pb-12 md:pt-32 md:pb-24 px-4 md:px-6 w-full flex flex-col items-center">
<div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden bg-black min-h-[60vh] md:min-h-[80vh] flex items-center shadow-xl">

<img alt="Custom Barndominium Estate at Sunset" className="ambient-zoom absolute inset-0 w-full h-full object-cover" src="https://iili.io/qQqkiwF.jpg"/>

<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent"></div>

<div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-4xl">
<div className="scroll-fade-up" style={{transitionDelay: '100ms'}}>
<span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide mb-6 inline-block font-normal">
                        Featured Collection
                    </span>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '200ms'}}>
<div className="ambient-wave">
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-tight md:leading-[1.05] mt-6 break-words">
                            Custom Barndominiums. <br className="hidden sm:block"/>Engineered for Life.
                        </h1>
</div>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '300ms'}}>
<div className="ambient-wave-delayed">
<p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-gray-200 font-normal leading-relaxed max-w-2xl">
                            We design and construct premium steel-framed barndominiums, offering expansive open spaces, unmatched durability, and timeless rural aesthetics.
                        </p>
</div>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '400ms'}}>
<div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full text-base font-normal flex items-center justify-center gap-2 hover:bg-gray-100 transition-all" href="#projects">
                            Explore Floor Plans
                            <iconify-icon className="w-5 h-5 shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 rounded-full text-base font-normal flex items-center justify-center gap-2 hover:bg-white/10 transition-all" href="#contact">
                            Start Your Build
                        </a>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-gray-200/0 md:divide-gray-200">
<div className="scroll-fade-up flex flex-col items-center md:items-start text-center md:text-left md:pl-8 first:pl-0" style={{transitionDelay: '0ms'}}>
<span className="text-4xl font-normal tracking-tight">25+</span>
<span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-normal">Years Experience</span>
</div>
<div className="scroll-fade-up flex flex-col items-center md:items-start text-center md:text-left md:pl-8" style={{transitionDelay: '100ms'}}>
<span className="text-4xl font-normal tracking-tight">150+</span>
<span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-normal">Estates Delivered</span>
</div>
<div className="scroll-fade-up flex flex-col items-center md:items-start text-center md:text-left md:pl-8" style={{transitionDelay: '200ms'}}>
<span className="text-4xl font-normal tracking-tight">$2B+</span>
<span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-normal">Value Constructed</span>
</div>
<div className="scroll-fade-up flex flex-col items-center md:items-start text-center md:text-left md:pl-8" style={{transitionDelay: '300ms'}}>
<span className="text-4xl font-normal tracking-tight">4</span>
<span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-normal">Regional Offices</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full" id="projects">
<div className="scroll-fade-up flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight">Selected Works</h2>
<p className="text-gray-500 mt-3 text-base max-w-md font-normal">A curated look at our recent custom barndominiums and high-end rural estates.</p>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal hover:text-gray-500 transition-colors" href="#">
                All Projects <iconify-icon className="w-5 h-5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<a className="scroll-fade-up group flex flex-col gap-4" href="#" style={{transitionDelay: '0ms'}}>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative">
<img alt="The Horizon Barndominium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://iili.io/qQTsqYl.jpg"/>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight">The Horizon Barndominium</h3>
<p className="text-base text-gray-500 mt-1 font-normal">Luxury Rural Estate • 2023</p>
</div>
</a>

<a className="scroll-fade-up group flex flex-col gap-4 md:mt-16" href="#" style={{transitionDelay: '150ms'}}>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative">
<img alt="Residences at West End" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://iili.io/qQTszQe.jpg"/>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight">Residences at West End</h3>
<p className="text-base text-gray-500 mt-1 font-normal">Luxury Multi-Family • 2022</p>
</div>
</a>

<a className="scroll-fade-up group flex flex-col gap-4" href="#" style={{transitionDelay: '0ms'}}>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative">
<img alt="Lumina Tech Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://iili.io/qQTsoT7.jpg"/>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight">Lumina Tech Campus</h3>
<p className="text-base text-gray-500 mt-1 font-normal">Corporate Campus • 2024</p>
</div>
</a>

<a className="scroll-fade-up group flex flex-col gap-4 md:mt-16" href="#" style={{transitionDelay: '150ms'}}>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative">
<img alt="The Archive Museum" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://iili.io/qQTsBv2.jpg"/>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight">The Archive Museum</h3>
<p className="text-base text-gray-500 mt-1 font-normal">Cultural Institution • 2021</p>
</div>
</a>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-black text-white" id="expertise">
<div className="max-w-7xl mx-auto w-full">
<div className="scroll-fade-up max-w-2xl mb-16">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight">Engineering aesthetics.</h2>
<p className="text-gray-400 mt-6 text-lg md:text-xl font-normal leading-relaxed">We believe that a building should perform as flawlessly as it looks. Our approach combines rigorous technical standards with refined architectural execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-gray-800 pt-16">
<div className="scroll-fade-up flex flex-col gap-4" style={{transitionDelay: '0ms'}}>
<iconify-icon className="w-8 h-8 text-white mb-2" icon="solar:pen-linear"></iconify-icon>
<h3 className="text-xl font-normal tracking-tight">Precision Craftsmanship</h3>
<p className="text-base text-gray-400 leading-relaxed font-normal">Exact tolerances and premium materials ensure structural integrity and a flawless finish on every surface.</p>
</div>
<div className="scroll-fade-up flex flex-col gap-4" style={{transitionDelay: '100ms'}}>
<iconify-icon className="w-8 h-8 text-white mb-2" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-xl font-normal tracking-tight">Timeline Efficiency</h3>
<p className="text-base text-gray-400 leading-relaxed font-normal">Advanced scheduling algorithms and lean construction methods keep projects on time without sacrificing quality.</p>
</div>
<div className="scroll-fade-up flex flex-col gap-4" style={{transitionDelay: '200ms'}}>
<iconify-icon className="w-8 h-8 text-white mb-2" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-xl font-normal tracking-tight">Absolute Transparency</h3>
<p className="text-base text-gray-400 leading-relaxed font-normal">Real-time reporting dashboards give clients complete visibility into budgets, timelines, and daily progress.</p>
</div>
<div className="scroll-fade-up flex flex-col gap-4" style={{transitionDelay: '300ms'}}>
<iconify-icon className="w-8 h-8 text-white mb-2" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-xl font-normal tracking-tight">Sustainable Builds</h3>
<p className="text-base text-gray-400 leading-relaxed font-normal">Integrating certified practices and energy-efficient systems to minimize environmental impact.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
<div className="scroll-fade-up text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight">Our Footprint</h2>
<p className="text-gray-500 mt-4 text-base font-normal">Explore our completed structures across the region.</p>
</div>
<div className="scroll-fade-up relative w-full h-[500px] md:h-[700px] bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]">

<div className="absolute top-6 right-6 bg-white border border-gray-200 rounded-lg p-2 flex flex-col gap-2 shadow-sm z-10">
<button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded text-black transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="w-full h-px bg-gray-200"></div>
<button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded text-black transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:minus-circle-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-[30%] left-[40%] group z-20">
<div className="w-4 h-4 bg-black rounded-full shadow-[0_0_0_8px_rgba(0,0,0,0.1)] relative cursor-pointer">
<div className="absolute inset-0 bg-black rounded-full animate-ping opacity-20"></div>
</div>
<div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 p-3 rounded-xl shadow-2xl w-64 md:w-72 transition-all opacity-100 transform scale-100 pointer-events-auto">
<div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 mb-3">
<img alt="Project" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-base font-normal">The Horizon Barndominium</p>
<p className="text-sm text-gray-500 mt-0.5 font-normal">Rural District</p>
</div>
<a className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors" href="#">
<iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="absolute top-[60%] left-[25%] group cursor-pointer hover:z-20">
<div className="w-3 h-3 bg-gray-400 group-hover:bg-black group-hover:scale-125 transition-all rounded-full border-2 border-white shadow-sm"></div>
</div>
<div className="absolute top-[45%] left-[65%] group cursor-pointer hover:z-20">
<div className="w-3 h-3 bg-gray-400 group-hover:bg-black group-hover:scale-125 transition-all rounded-full border-2 border-white shadow-sm"></div>
</div>
<div className="absolute top-[70%] left-[55%] group cursor-pointer hover:z-20">
<div className="w-3 h-3 bg-gray-400 group-hover:bg-black group-hover:scale-125 transition-all rounded-full border-2 border-white shadow-sm"></div>
</div>
<svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveaspectratio="none">
<path d="M0,200 Q150,300 300,150 T600,400 T1000,200" fill="none" stroke="black" strokeWidth="2"></path>
<path d="M-100,500 Q200,400 400,600 T800,300 T1200,500" fill="none" stroke="black" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</section>

<section className="border-t border-gray-100 py-24 md:py-32 px-6" id="process">
<div className="max-w-7xl mx-auto w-full">
<h2 className="scroll-fade-up text-3xl md:text-4xl font-normal tracking-tight mb-16">How We Build</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="scroll-fade-up relative pt-8 md:pt-12 border-t-2 border-black" style={{transitionDelay: '0ms'}}>
<span className="absolute top-0 left-0 -mt-3.5 bg-white pr-4 text-sm font-normal tracking-widest uppercase">01</span>
<h3 className="text-xl font-normal tracking-tight mb-4">Pre-Construction</h3>
<p className="text-base text-gray-500 leading-relaxed font-normal">Comprehensive feasibility studies, value engineering, and detailed logistical planning before a single shovel hits the ground.</p>
</div>
<div className="scroll-fade-up relative pt-8 md:pt-12 border-t-2 border-gray-200" style={{transitionDelay: '150ms'}}>
<span className="absolute top-0 left-0 -mt-3.5 bg-white pr-4 text-sm font-normal tracking-widest text-gray-400 uppercase">02</span>
<h3 className="text-xl font-normal tracking-tight mb-4">Execution</h3>
<p className="text-base text-gray-500 leading-relaxed font-normal">Rigorous site management led by veteran superintendents, ensuring uncompromising quality control and adherence to critical paths.</p>
</div>
<div className="scroll-fade-up relative pt-8 md:pt-12 border-t-2 border-gray-200" style={{transitionDelay: '300ms'}}>
<span className="absolute top-0 left-0 -mt-3.5 bg-white pr-4 text-sm font-normal tracking-widest text-gray-400 uppercase">03</span>
<h3 className="text-xl font-normal tracking-tight mb-4">Delivery</h3>
<p className="text-base text-gray-500 leading-relaxed font-normal">Thorough commissioning, immaculate final detailing, and comprehensive handover protocols for a seamless transition.</p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 md:py-32 px-6">
<div className="scroll-fade-up max-w-4xl mx-auto text-center flex flex-col items-center">
<iconify-icon className="w-12 h-12 text-gray-300 mb-8" icon="solar:chat-square-quote-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-snug mb-10 text-black">
                "K Construction didn't just build our barndominium estate; they elevated the entire design concept through their technical expertise and relentless attention to detail. A rare standard of excellence."
            </h2>
<div className="flex flex-col items-center justify-center gap-2">
<p className="text-lg font-normal">Marcus Chen</p>
<p className="text-base text-gray-500 font-normal">Principal Architect, Architec.Studio</p>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-black text-white text-center" id="contact">
<div className="scroll-fade-up max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-6">Ready to break ground?</h2>
<p className="text-gray-400 text-xl mb-12 font-normal">Engage our team for your next landmark project.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full text-lg font-normal hover:bg-gray-200 transition-colors w-full sm:w-auto" href="#">
                Request a Consultation
            </a>
</div>
</section>

<footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
<div className="max-w-7xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="scroll-fade-up md:col-span-1" style={{transitionDelay: '0ms'}}>
<a className="text-2xl font-normal tracking-tight uppercase flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm rounded-xl font-normal">K</span>
                        CON.
                    </a>
<p className="text-base text-gray-500 leading-relaxed max-w-xs font-normal">Precision-built structures that define skylines and elevate communities.</p>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '100ms'}}>
<h4 className="text-sm font-normal uppercase tracking-widest text-gray-400 mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-base text-black font-normal">
<li><a className="hover:text-gray-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '200ms'}}>
<h4 className="text-sm font-normal uppercase tracking-widest text-gray-400 mb-6">Capabilities</h4>
<ul className="flex flex-col gap-4 text-base text-black font-normal">
<li><a className="hover:text-gray-500 transition-colors" href="#">Barndominiums</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Luxury Residential</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="#">Design-Build</a></li>
</ul>
</div>
<div className="scroll-fade-up" style={{transitionDelay: '300ms'}}>
<h4 className="text-sm font-normal uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
<ul className="flex flex-col gap-4 text-base text-black font-normal">
<li><a className="hover:text-gray-500 transition-colors" href="mailto:hello@kcon.build">hello@kcon.build</a></li>
<li><a className="hover:text-gray-500 transition-colors" href="tel:+15550123456">+1 (555) 012-3456</a></li>
<li className="text-gray-500 mt-2">100 Architecture Way<br/>Suite 400<br/>Metropolis, NY 10001</li>
</ul>
</div>
</div>
<div className="scroll-fade-up flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 text-sm text-gray-500 gap-4 font-normal" style={{transitionDelay: '400ms'}}>
<p>© 2024 K Construction. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
