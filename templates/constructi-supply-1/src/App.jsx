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
purple: '#433E79',
gold: '#F4A936',
goldLight: '#FBBF24',
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-xl tracking-tight font-semibold text-slate-900">SUPPLY<span className="text-brand-gold">CO</span>.</span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-base font-medium text-slate-600 hover:text-brand-purple transition-colors" href="#">Products</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-purple transition-colors" href="#">Services</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-purple transition-colors" href="#">Projects</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-purple transition-colors" href="#">About Us</a>
</div>

<div className="flex items-center gap-6">
<button className="text-slate-500 hover:text-brand-purple transition-transform hover:scale-105">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="text-slate-500 hover:text-brand-purple transition-transform hover:scale-105">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
</button>
<button className="hidden md:flex bg-brand-purple text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-brand-purple/20 items-center gap-2">
                    Get Quote <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden text-slate-800">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center bg-no-repeat">
<div className="absolute inset-0 bg-slate-900/10"></div>
</div>

<div className="absolute inset-y-0 left-0 w-[70%] bg-white transform skew-x-[-12deg] origin-bottom-left translate-x-[15%] hidden lg:block border-r-4 border-white"></div>

<div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-brand-purple transform skew-x-0 lg:skew-x-[-12deg] origin-bottom-left lg:-translate-x-[10%] shadow-2xl z-10"></div>
</div>

<div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 h-full flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 pt-16 lg:pt-0 text-white lg:pr-12">
<div className="relative animate-slide-in">

<div className="hidden lg:flex absolute -top-8 -right-4 w-36 h-36 bg-white rounded-full items-center justify-center text-center p-2 shadow-xl z-20 transform translate-x-full">
<div className="flex flex-col items-center justify-center text-slate-800 leading-tight">
<span className="text-[0.65rem] uppercase tracking-wide text-slate-500 mb-1">NO MIDDLEMAN</span>
<span className="text-sm font-bold uppercase text-brand-purple block mb-1">FACTORY<br/>PRICE</span>
<span className="text-[0.65rem] text-slate-500 uppercase">DIRECT SUPPLY</span>
</div>
</div>

<h1 className="font-condensed text-5xl lg:text-7xl font-semibold uppercase leading-[0.9] tracking-tighter mb-8 opacity-0 animate-slide-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                        Trade + Production<br/>
<span className="text-white/90">Integrated Supply</span>
</h1>

<h2 className="text-2xl lg:text-3xl font-medium text-brand-gold mb-6 tracking-tight opacity-0 animate-slide-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                        4000+ TYPES OF BUILDING MATERIALS
                    </h2>

<p className="text-lg lg:text-xl font-light text-white/80 max-w-xl leading-relaxed mb-10 opacity-0 animate-slide-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                        From basic building materials to special purpose, luxury products supplied directly to your site.
                    </p>

<div className="flex flex-wrap gap-4 opacity-0 animate-slide-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
<button className="bg-brand-gold hover:bg-brand-goldLight text-slate-900 px-8 py-3.5 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-brand-gold/20 flex items-center gap-2 group">
                            Explore Catalog
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg text-base font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                            Watch Video
                        </button>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative mt-12 lg:mt-0 pointer-events-none">

<div className="absolute top-0 lg:top-10 left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-1/3 z-30 animate-float">
<div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-[6px] border-brand-gold overflow-hidden shadow-2xl relative group">
<img alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>

<div className="absolute bottom-10 lg:bottom-20 left-1/2 lg:left-20 transform -translate-x-1/2 lg:translate-x-0 z-40 animate-float-delayed">
<div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full border-[6px] border-brand-gold overflow-hidden shadow-2xl relative group">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>

<div className="absolute right-0 bottom-10 hidden lg:flex items-center gap-4 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 pointer-events-auto cursor-pointer hover:bg-white/30 transition-colors">
<div className="text-right text-white">
<p className="text-sm font-semibold">Luxury Collection</p>
<p className="text-xs opacity-80">View Gallery</p>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
<button className="w-3 h-3 rounded-full bg-brand-gold transition-all"></button>
<button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all"></button>
<button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all"></button>
</div>
</main>

<section className="py-20 bg-white">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group cursor-pointer">
<div className="w-12 h-12 bg-indigo-50 text-brand-purple rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="truck"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Direct Logistics</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    We handle the entire supply chain from factory to your construction site without delays.
                </p>
</div>

<div className="group cursor-pointer">
<div className="w-12 h-12 bg-indigo-50 text-brand-purple rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Quality Guarantee</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    All materials are certified and meet international quality standards for safety.
                </p>
</div>

<div className="group cursor-pointer">
<div className="w-12 h-12 bg-indigo-50 text-brand-purple rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="box"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Wholesale Pricing</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    Access factory prices with our integrated supply network, saving you up to 30%.
                </p>
</div>
</div>
</section>


    </>
  );
}
