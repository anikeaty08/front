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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight uppercase flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">J</span>
                Vance.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-zinc-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-zinc-900 transition-colors" href="#experiences">Experiences</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200" href="#reserve">
<span>Reserve Table</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden p-2 text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Michelin Star 2024
                </div>
<h1 className="serif text-5xl lg:text-7xl font-light italic leading-[1.1] mb-6 text-zinc-900">
                    The art of <br/>
<span className="not-italic font-medium font-sans tracking-tighter">mindful gastronomy.</span>
</h1>
<p className="text-lg text-zinc-500 font-light leading-relaxed max-w-md mb-10">
                    Experience a culinary journey where seasonal simplicity meets technical precision. Curated by Chef Julian Vance in the heart of Copenhagen.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                        Book a Table
                        <iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                        View Seasonal Menu
                    </button>
</div>
<div className="mt-16 flex items-center gap-8 border-t border-zinc-200 pt-8">
<div>
<p className="text-2xl font-semibold tracking-tight">4.9</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Zagats Rating</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">12</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Tasting Courses</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">100%</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Sustainable</p>
</div>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

<img alt="Fine Dining Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20 text-white">
<p className="text-sm font-medium tracking-wide mb-1">Featured Dish</p>
<p className="serif text-2xl italic">Nordic Scallop &amp; Dill</p>
</div>

<div className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-xl max-w-[160px]">
<iconify-icon className="mb-2 text-orange-200" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-xs font-light leading-snug">Locally sourced ingredients from within 50km radius.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">As Featured In</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-serif font-bold tracking-tighter text-zinc-800">VOGUE</span>
<span className="text-xl font-sans font-black tracking-tight text-zinc-800">Eater.</span>
<span className="text-xl font-serif italic font-medium text-zinc-800">Bon Appétit</span>
<span className="text-xl font-sans font-bold tracking-tight text-zinc-800">Michelin Guide</span>
<span className="text-xl font-sans font-light tracking-widest text-zinc-800 uppercase">Wallpaper*</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 space-y-8 sticky top-24">
<h2 className="serif text-4xl font-light italic text-zinc-900">
                        "Simplicity is the ultimate sophistication."
                    </h2>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-800">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Expert Craftsmanship</h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Over 15 years refining techniques in Paris and Tokyo.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-800">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Rooted in Nature</h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Menus dictated by the rhythm of the seasons.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="md:col-span-2 mb-8">
<p className="text-xl text-zinc-600 font-light leading-relaxed">
                            Food is more than sustenance; it is a language. At Vance, we speak in textures, aromas, and flavors that evoke memory and spark curiosity. We strip away the unnecessary to reveal the essence of each ingredient.
                        </p>
</div>

<div className="relative h-80 rounded-2xl overflow-hidden bg-zinc-200 group">
<img alt="Plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-white/20">The Process</div>
</div>
<div className="relative h-80 rounded-2xl overflow-hidden bg-zinc-200 group mt-12">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-white/20">The Atmosphere</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-xs font-medium text-orange-600 uppercase tracking-widest mb-2">The Kitchen Brigade</h2>
<h3 className="serif text-3xl font-light italic text-zinc-900">Craftsmen behind the curtain.</h3>
</div>
<div className="text-right hidden md:block">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1 justify-end" href="#">
                        View Careers
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-zinc-100 mb-5">
<img alt="Sous Chef" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Elena Rostova</h4>
<p className="text-sm text-zinc-400 font-light mb-2">Head Sommelier</p>
<p className="text-xs text-zinc-500 leading-relaxed border-l border-zinc-200 pl-3">"Wine is the silent narrator of the meal."</p>
</div>

<div className="group md:-mt-8">
<div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-zinc-100 mb-5">
<img alt="Head Chef" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Marcus Thorn</h4>
<p className="text-sm text-zinc-400 font-light mb-2">Chef de Cuisine</p>
<p className="text-xs text-zinc-500 leading-relaxed border-l border-zinc-200 pl-3">Former sous-chef at Noma, focusing on fermentation.</p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-zinc-100 mb-5">
<img alt="Pastry Chef" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&amp;w=1987&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Sarah Chen</h4>
<p className="text-sm text-zinc-400 font-light mb-2">Pastry Architect</p>
<p className="text-xs text-zinc-500 leading-relaxed border-l border-zinc-200 pl-3">Blending structural design with delicate sweetness.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Autumn Menu</h2>
<p className="text-zinc-500 font-light">Eleven courses. $295 per person.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700" href="#">
                    Full Menu PDF
                    <iconify-icon icon="solar:export-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-zinc-100 mb-6">
<img alt="Appetizer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Langoustine &amp; Pine</h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Fermented gooseberry, pine oil emulsion.</p>
</div>
<span className="text-sm font-medium text-zinc-400">01</span>
</div>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-zinc-100 mb-6">
<img alt="Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Venison &amp; Beetroot</h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Smoked marrow, preserved blackberry.</p>
</div>
<span className="text-sm font-medium text-zinc-400">05</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-zinc-100 mb-6">
<img alt="Dessert" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Birch &amp; Milk</h3>
<p className="text-sm text-zinc-500 mt-1 font-light">Frozen milk crisp, birch sap syrup.</p>
</div>
<span className="text-sm font-medium text-zinc-400">09</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:quote-up-linear"></iconify-icon>
<h2 className="serif text-4xl font-light italic text-zinc-900">The Critics' Verdict</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-zinc-100 rounded-2xl bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="flex text-orange-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="serif text-xl italic text-zinc-800 leading-relaxed mb-6">"Vance is not just a dinner; it is a masterclass in restraint. Every element on the plate has a purpose, every flavor a reason to exist."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold font-serif">NYT</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wide text-zinc-900">The New York Times</p>
<p className="text-[10px] text-zinc-400">September 2023</p>
</div>
</div>
</div>

<div className="p-8 border border-zinc-100 rounded-2xl bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="flex text-orange-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="serif text-xl italic text-zinc-800 leading-relaxed mb-6">"Chef Julian has finally found his home. The Nordic Scallop dish alone is worth the flight to Copenhagen. Simply transcendent."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold font-serif">MG</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wide text-zinc-900">Michelin Guide</p>
<p className="text-[10px] text-zinc-400">Awarded 1 Star</p>
</div>
</div>
</div>

<div className="p-8 border border-zinc-100 rounded-2xl bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="flex text-orange-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="14"></iconify-icon>
</div>
<p className="serif text-xl italic text-zinc-800 leading-relaxed mb-6">"A daring exploration of local terroir. The atmosphere is as carefully curated as the wine list. A triumph for modern dining."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold font-serif">FT</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wide text-zinc-900">Financial Times</p>
<p className="text-[10px] text-zinc-400">Luxury Weekend</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-300" id="experiences">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Beyond Dining</h2>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                        Extend your culinary horizons with our curated experiences designed for enthusiasts and connoisseurs alike.
                    </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all text-sm" href="#contact">
                        Inquire for availability
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:wine-glass-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Private Dining Room</h3>
<p className="text-sm text-zinc-400 font-light mb-6">An intimate space for up to 14 guests with a dedicated sommelier and bespoke menu.</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Available this weekend
                        </div>
</div>

<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:notebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Masterclass Series</h3>
<p className="text-sm text-zinc-400 font-light mb-6">Join Chef Vance on Sunday mornings for hands-on technique workshops.</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            Limited spots
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10 text-center">Guest Information</h2>
<div className="space-y-4">

<details className="group border-b border-zinc-100 pb-4">
<summary className="flex items-center justify-between cursor-pointer py-2">
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Dietary Requirements</span>
<div className="w-6 h-6 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</summary>
<div className="pt-4 pb-2 text-sm font-light text-zinc-500 leading-relaxed">
                        We can accommodate most allergies and dietary restrictions with 48 hours advance notice. Please note that due to the nature of our kitchen, we cannot guarantee zero cross-contamination for severe allergies.
                    </div>
</details>

<details className="group border-b border-zinc-100 pb-4">
<summary className="flex items-center justify-between cursor-pointer py-2">
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Dress Code</span>
<div className="w-6 h-6 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</summary>
<div className="pt-4 pb-2 text-sm font-light text-zinc-500 leading-relaxed">
                        Our dress code is smart casual. We invite you to dress comfortably but elegantly. Jackets are preferred for gentlemen, but ties are not required.
                    </div>
</details>

<details className="group border-b border-zinc-100 pb-4">
<summary className="flex items-center justify-between cursor-pointer py-2">
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Corkage Policy</span>
<div className="w-6 h-6 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</summary>
<div className="pt-4 pb-2 text-sm font-light text-zinc-500 leading-relaxed">
                        We allow up to two bottles of wine per table (750ml) that are not currently represented on our wine list. The corkage fee is $75 per bottle.
                    </div>
</details>

<details className="group border-b border-zinc-100 pb-4">
<summary className="flex items-center justify-between cursor-pointer py-2">
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Children</span>
<div className="w-6 h-6 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</summary>
<div className="pt-4 pb-2 text-sm font-light text-zinc-500 leading-relaxed">
                        We welcome children over the age of 10 who can enjoy the full tasting menu. We do not offer a separate children's menu or high chairs.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50 border-t border-orange-100" id="reserve">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-orange-900 mb-6" icon="solar:letter-linear" strokeWidth="1.2" width="32"></iconify-icon>
<h2 className="serif text-4xl lg:text-5xl italic text-zinc-900 mb-6">Join the table.</h2>
<p className="text-zinc-600 font-light mb-10">Sign up for priority reservations, seasonal menu updates, and invitations to special events.</p>
<form className="max-w-md mx-auto relative group">
<div className="relative flex items-center">
<iconify-icon className="absolute left-4 text-zinc-400" icon="solar:user-linear" width="20"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 pl-12 pr-32 py-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all shadow-sm" placeholder="email@address.com" type="email"/>
<button className="absolute right-2 top-2 bottom-2 bg-zinc-900 text-white px-4 rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors" type="button">
                        Subscribe
                    </button>
</div>
<div className="mt-4 flex items-center justify-center gap-2">
<label className="flex items-center gap-2 cursor-pointer select-none group">
<div className="relative w-4 h-4 border border-zinc-300 rounded bg-white transition-colors">
<input className="peer appearance-none w-full h-full opacity-0 absolute" type="checkbox"/>
<iconify-icon className="text-orange-600 opacity-0 peer-checked:opacity-100 absolute inset-0 -top-0.5 -left-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500">I agree to the privacy policy</span>
</label>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tight uppercase flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-zinc-900 text-white rounded-full flex items-center justify-center text-[10px] font-semibold">J</span>
                        Vance.
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        1050 Copenhagen K,<br/>
                        Kongens Nytorv 14<br/>
                        Denmark
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Story</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Reservations</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Opening Hours</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li className="flex justify-between"><span>Wed - Sat</span> <span>18:00 - 23:00</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>12:00 - 16:00</span></li>
<li className="flex justify-between text-zinc-300"><span>Mon - Tue</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2024 Julian Vance Culinary Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Privacy</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
