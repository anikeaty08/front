import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151e2e',
}
},
boxShadow: {
'glow': '0 0 20px -5px rgba(249, 115, 22, 0.3)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:shadow-orange-200 transition-all duration-300">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Pickly.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Tech</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Outdoors</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Wellness</a>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300" href="#top-picks">
                        Top Deals
                    </a>
</div>
</div>
</div>
</nav>
<main className="pt-24 pb-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Independent Research &amp; Testing</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 text-balance max-w-4xl mx-auto">
                Don't guess. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Choose the best.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
                Pickly analyzes thousands of reviews and tests products rigorously to help you find the perfect gear, instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-slate-200 hover:translate-y-[-2px]" href="#featured-guide">
<span>See Top Picks</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors" href="#">
                    Browse Categories
                </a>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="shield-check"></i>
<span className="text-sm font-semibold text-slate-900">Unbiased Reviews</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="users"></i>
<span className="text-sm font-semibold text-slate-900">2M+ Monthly Readers</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle"></i>
<span className="text-sm font-semibold text-slate-900">Data-Backed</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24" id="featured-guide">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<span className="text-orange-600 font-semibold tracking-wide text-sm uppercase mb-2 block">Latest Guide</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Best Noise-Canceling Headphones</h2>
<p className="text-slate-500 mt-2 max-w-xl">We tested 24 pairs of headphones in subways, open offices, and airplanes. These are the top 3 worth your money.</p>
</div>
<div className="text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    Last updated: October 2023
                </div>
</div>
<div className="space-y-6">

<article className="bg-white rounded-[2rem] p-6 md:p-8 border border-orange-100 shadow-lg shadow-orange-500/5 relative overflow-hidden group">

<div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-br-2xl uppercase tracking-wider z-10">
                        #1 Overall Pick
                    </div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="md:col-span-4 relative h-64 md:h-auto flex items-center justify-center bg-slate-50 rounded-2xl p-6">
<img alt="Sony Headphones" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="md:col-span-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
<div>
<h3 className="text-2xl font-bold text-slate-900 tracking-tight">Sony WH-1000XM5</h3>
<div className="flex items-center gap-1 mt-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-slate-600 ml-1">4.9/5</span>
</div>
</div>
<div className="hidden md:block text-right">
<span className="block text-2xl font-bold text-slate-900">$348</span>
<span className="text-sm text-green-600 font-medium">In Stock</span>
</div>
</div>
<p className="text-slate-500 mb-6 leading-relaxed">
                                The undisputed king of active noise cancellation. The XM5s offer industry-leading silence, exceptional comfort for long flights, and a sound profile that pleases both audiophiles and casual listeners.
                            </p>

<div className="grid grid-cols-2 gap-y-2 gap-x-8 mb-8 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span>30-hour battery life</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span>Market-leading ANC</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span>Multipoint connection</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span>Lightweight chassis</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-xl font-semibold shadow-glow transition-all duration-300 transform hover:-translate-y-0.5" href="#">
<span>Check Price on Amazon</span>
<i className="w-4 h-4 opacity-90" data-lucide="external-link" strokeWidth="2"></i>
</a>
<a className="px-6 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors text-center" href="#">
                                    Read Full Review
                                </a>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-4 relative h-56 md:h-auto flex items-center justify-center bg-slate-50 rounded-2xl p-6">
<div className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide">
                                Best Value
                            </div>
<img alt="Bose" className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="md:col-span-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Bose QuietComfort 45</h3>
<span className="text-lg font-bold text-slate-900">$279</span>
</div>
<p className="text-slate-500 text-sm mb-4">
                                The classic choice. If comfort is your absolute priority, the QC45s are unbeatable. The noise cancellation is nearly on par with Sony, but they fold up smaller for travel.
                            </p>
<div className="flex items-center gap-4 mb-6 text-sm">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i>
<span className="font-medium">Supreme Comfort</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
<i className="w-3.5 h-3.5" data-lucide="maximize"></i>
<span className="font-medium">Foldable Design</span>
</div>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 hover:border-orange-200 text-slate-900 rounded-xl font-medium transition-all duration-200 group" href="#">
<span className="group-hover:text-orange-600 transition-colors">View on Amazon</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-colors" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>
</article>

<article className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-4 relative h-56 md:h-auto flex items-center justify-center bg-slate-50 rounded-2xl p-6">
<div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide">
                                Budget Pick
                            </div>
<img alt="Anker" className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="md:col-span-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Anker Soundcore Q45</h3>
<span className="text-lg font-bold text-slate-900">$149</span>
</div>
<p className="text-slate-500 text-sm mb-4">
                                You don't need to spend $300+ for great silence. Anker delivers 90% of the performance for half the price. Includes LDAC support for high-res audio.
                            </p>
<div className="flex items-center gap-4 mb-6 text-sm">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">
<i className="w-3.5 h-3.5" data-lucide="dollar-sign"></i>
<span className="font-medium">Best Value</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
<i className="w-3.5 h-3.5" data-lucide="battery-charging"></i>
<span className="font-medium">50h Battery</span>
</div>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 hover:border-orange-200 text-slate-900 rounded-xl font-medium transition-all duration-200 group" href="#">
<span className="group-hover:text-orange-600 transition-colors">View on Amazon</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-colors" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<a className="text-slate-500 hover:text-orange-600 font-medium text-sm inline-flex items-center gap-1 transition-colors" href="#">
                    See all 24 headphones tested
                    <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
<h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Browse by Category</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<a className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-blue-500" data-lucide="laptop" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-slate-900 block">Laptops &amp; PC</span>
<span className="text-xs text-slate-500">240+ Reviews</span>
</a>
<a className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-orange-500" data-lucide="home" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-slate-900 block">Smart Home</span>
<span className="text-xs text-slate-500">180+ Reviews</span>
</a>
<a className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-green-500" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-slate-900 block">Fitness Gear</span>
<span className="text-xs text-slate-500">120+ Reviews</span>
</a>
<a className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-purple-500" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-slate-900 block">Photography</span>
<span className="text-xs text-slate-500">95+ Reviews</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 border-t border-slate-100 pt-16">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 mb-4">How we choose products</h2>
<p className="text-slate-500">We believe in objective testing. Our recommendations are based on real-world usage, technical analysis, and comparative benchmarking.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="search-check" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Deep Research</h3>
<p className="text-sm text-slate-500 leading-relaxed">We scour forums, verified user reviews, and spec sheets to narrow down the contenders.</p>
</div>
<div className="p-6">
<div className="mx-auto w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
<i className="w-6 h-6 text-orange-600" data-lucide="flask-conical" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Hands-on Testing</h3>
<p className="text-sm text-slate-500 leading-relaxed">We buy the top products and use them daily to find flaws that specs don't show.</p>
</div>
<div className="p-6">
<div className="mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Unbiased Comparison</h3>
<p className="text-sm text-slate-500 leading-relaxed">We accept no payments for rankings. We only earn if you like our pick and buy it.</p>
</div>
</div>
</section>
</main>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Pickly.</span>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
                        Our mission is to help you find the best products for your life. We cut through the marketing noise to give you clear, honest recommendations.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Discover</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Tech Reviews</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Home &amp; Kitchen</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Health &amp; Fitness</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Best Deals</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Editorial Policy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-8 mt-8">
<div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 mb-8">
<p className="text-xs text-slate-500 leading-relaxed text-center md:text-left">
<strong>Affiliate Disclosure:</strong> Pickly is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. Prices and availability are accurate as of the date/time indicated and are subject to change.
                    </p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Pickly Media Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
