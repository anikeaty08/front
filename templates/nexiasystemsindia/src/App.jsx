import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
red: '#DC2626', // Standard crisp red
black: '#0a0a0a',
gray: '#f5f5f5'
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold tracking-tighter text-sm">
                    N
                </div>
<span className="text-black font-bold tracking-tight text-lg">NEXIA</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#materials">Materials</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#projects">Projects</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex group px-5 py-2.5 rounded-none bg-black hover:bg-red-600 text-white text-xs font-semibold uppercase tracking-wide transition-all duration-300" href="#contact">
<span className="flex items-center gap-2">
                        Get Quote
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Architectural Facade" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                Premium Manufacturing
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                ENGINEERED <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">PERFECTION.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-10 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                High-performance Aluminium &amp; uPVC systems designed for modern architecture. 
                Durability meets aesthetics.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="h-14 px-8 bg-red-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors w-full sm:w-auto">
                    View Catalog
                </button>
<button className="h-14 px-8 bg-white text-black text-sm font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon className="text-red-600" icon="lucide:play-circle" width="18"></iconify-icon>
                    Watch Video
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon>
</div>
</section>

<section className="bg-black text-white py-12 relative z-20 -mt-2">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-800">
<div className="px-6 text-center md:text-left">
<div className="text-3xl font-bold text-red-600 mb-1">15+</div>
<div className="text-xs text-neutral-400 uppercase tracking-wider">Years Experience</div>
</div>
<div className="px-6 text-center md:text-left">
<div className="text-3xl font-bold text-red-600 mb-1">10k+</div>
<div className="text-xs text-neutral-400 uppercase tracking-wider">Installations</div>
</div>
<div className="px-6 text-center md:text-left">
<div className="text-3xl font-bold text-red-600 mb-1">100%</div>
<div className="text-xs text-neutral-400 uppercase tracking-wider">Quality Checked</div>
</div>
<div className="px-6 text-center md:text-left">
<div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
<div className="text-xs text-neutral-400 uppercase tracking-wider">Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">Our Systems</h2>
<div className="w-20 h-1 bg-red-600"></div>
</div>
<p className="text-neutral-600 max-w-md text-sm leading-relaxed">
                    We manufacture precision-engineered profiles tailored to your specific architectural needs, ensuring perfect insulation and style.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white border border-neutral-200 hover:border-red-600/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[500px] flex flex-col">
<div className="h-1/2 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-red-600" icon="lucide:layers" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Series A-100</span>
</div>
<h3 className="text-2xl font-bold text-black mb-3">Aluminium Systems</h3>
<p className="text-neutral-600 text-sm leading-relaxed">
                                Slim profiles with maximum glass area. Powder-coated finishes available in matte black, grey, and wood textures.
                            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-red-600 transition-colors mt-6" href="#">
                            Explore Specs
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white border border-neutral-200 hover:border-red-600/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[500px] flex flex-col">
<div className="h-1/2 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-red-600" icon="lucide:shield-check" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Series U-500</span>
</div>
<h3 className="text-2xl font-bold text-black mb-3">uPVC Excellence</h3>
<p className="text-neutral-600 text-sm leading-relaxed">
                                Multi-chambered designs for superior thermal insulation and soundproofing. The energy-efficient choice.
                            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-red-600 transition-colors mt-6" href="#">
                            Explore Specs
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-black text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[500px] flex flex-col justify-center p-10">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon icon="lucide:ruler" width="150"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-bold mb-6">Custom Solutions</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                            Have a unique architectural vision? We fabricate custom shapes, corners, and large-span systems.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
<span className="text-sm font-medium">Curved Windows</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
<span className="text-sm font-medium">Corner Sliders</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
<span className="text-sm font-medium">Skylights</span>
</li>
</ul>
<button className="w-full h-12 bg-white text-black font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors">
                            Consult Now
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-neutral-200">
                    The Nexia Standard
                </div>
<h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">
                    Redefining the Installation <br/> Experience.
                </h2>
<p className="text-neutral-600 mb-8 leading-relaxed">
                    Most window companies outsource installation. We don't. Our in-house team ensures the gap between manufacturing precision and on-site reality is zero.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:award" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-black">Certified Materials</h4>
<p className="text-sm text-neutral-500 mt-1">We use only virgin uPVC and 6063-T6 grade Aluminium alloy.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:clock" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-black">On-Time Delivery</h4>
<p className="text-sm text-neutral-500 mt-1">Automated production lines ensure strict adherence to timelines.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:headphones" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-black">Post-Sales Service</h4>
<p className="text-sm text-neutral-500 mt-1">5-year warranty on hardware and 10-year on color fastness.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative rounded-sm overflow-hidden shadow-2xl">
<div className="absolute inset-0 border-[12px] border-white z-10 pointer-events-none"></div>
<img className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 text-xs font-bold z-20">
                        PROJECT: VILLA 22
                    </div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neutral-100 -z-10 grid grid-cols-5 gap-1 p-2">
<div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div>
<div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div>
<div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div>
<div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div>
<div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div><div className="bg-neutral-300 w-full h-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-black mb-16">Trusted by Professionals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 border-b-4 border-red-600 shadow-sm text-left">
<div className="text-red-600 mb-4">
<iconify-icon icon="lucide:quote" width="30"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        "Nexia's uPVC windows have significantly reduced the noise levels in my apartment. The finish is impeccable."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-sm">AK</div>
<div>
<div className="text-black text-sm font-bold">Amit Kumar</div>
<div className="text-neutral-500 text-xs">Homeowner</div>
</div>
</div>
</div>
<div className="bg-white p-8 border-b-4 border-black shadow-sm text-left">
<div className="text-black mb-4">
<iconify-icon icon="lucide:quote" width="30"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        "As an architect, I need reliability. Nexia delivers exactly what is drawn, on time, every time."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold text-sm">SJ</div>
<div>
<div className="text-black text-sm font-bold">Sarah Jenkins</div>
<div className="text-neutral-500 text-xs">Architect</div>
</div>
</div>
</div>
<div className="bg-white p-8 border-b-4 border-red-600 shadow-sm text-left">
<div className="text-red-600 mb-4">
<iconify-icon icon="lucide:quote" width="30"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        "The black powder-coated aluminium sliders completely transformed the look of our villa. Highly recommended."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-sm">RM</div>
<div>
<div className="text-black text-sm font-bold">Rajesh M.</div>
<div className="text-neutral-500 text-xs">Developer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white relative overflow-hidden" id="contact">
<div className="absolute right-0 top-0 h-full w-1/3 bg-red-600 clip-diagonal hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to upgrade?</h2>
<p className="text-neutral-400 text-lg mb-8">
                    Get a free consultation and quote for your property. 
                    <span className="text-white block mt-2">No hidden costs. Just quality.</span>
</p>
<form className="space-y-4 max-w-md">
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-12 bg-white/10 border border-white/20 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-600 transition-colors" placeholder="Name" type="text"/>
<input className="w-full h-12 bg-white/10 border border-white/20 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-600 transition-colors" placeholder="Phone" type="text"/>
</div>
<input className="w-full h-12 bg-white/10 border border-white/20 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-600 transition-colors" placeholder="Email Address" type="email"/>
<button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2" type="button">
                        Request Callback
                        <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
<div className="hidden md:block text-right">
<div className="text-9xl font-bold text-white/10 leading-none">NX</div>
<div className="text-xl font-bold mt-4">SYSTEMS</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-red-600 flex items-center justify-center text-white font-bold text-xs">N</div>
<span className="text-white font-bold tracking-tight">NEXIA</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        Precision manufacturing for modern living. Aluminium and uPVC systems built to last.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 bg-neutral-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="w-8 h-8 bg-neutral-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 bg-neutral-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Products</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-white text-sm transition-colors" href="#">Aluminium Windows</a></li>
<li><a className="text-neutral-400 hover:text-white text-sm transition-colors" href="#">uPVC Systems</a></li>
<li><a className="text-neutral-400 hover:text-white text-sm transition-colors" href="#">Sliding Doors</a></li>
<li><a className="text-neutral-400 hover:text-white text-sm transition-colors" href="#">Facades</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400 text-sm">
<iconify-icon className="mt-1 text-red-600" icon="lucide:map-pin"></iconify-icon>
<span>12, Industrial Estate,<br/>Sector 4, Mumbai</span>
</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-red-600" icon="lucide:phone"></iconify-icon>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-red-600" icon="lucide:mail"></iconify-icon>
<span>sales@nexiasystems.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Newsletter</h4>
<div className="flex">
<input className="bg-neutral-800 text-white text-sm px-4 py-2 w-full focus:outline-none" placeholder="Your email" type="email"/>
<button className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors"><iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-neutral-600 text-xs">
                    © 2024 Nexia Systems. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
