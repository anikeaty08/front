import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-stone-900 flex items-center gap-2" href="#">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:sun-2-linear"></iconify-icon>
                AURA FARMS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-amber-600 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-amber-600 transition-colors" href="#products">Products</a>
<a className="hover:text-amber-600 transition-colors" href="#story">Our Story</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/20 transition-all" href="#products">
                Order Now
            </a>
<button className="md:hidden text-stone-600 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-300/10 rounded-full blur-[120px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-100/30 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/50 border border-amber-200/50 text-amber-700 text-xs font-medium mb-6">
<iconify-icon className="text-sm" icon="solar:leaf-linear"></iconify-icon>
                    100% Pasture Raised
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Fresh Farm Eggs <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Delivered to Your Door</span>
</h1>
<p className="text-lg text-stone-600 mb-10 max-w-xl font-light leading-relaxed">
                    Experience the rich, golden yolks and unmatched nutrition of our ethically raised hens. From our sunlit pastures straight to your kitchen table.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 transition-all duration-300" href="#products">
                        Order Now
                        <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 hover:shadow-sm transition-all duration-300" href="#story">
                        Our Farming Process
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] lg:h-[600px]">

<div className="absolute w-2 h-2 bg-amber-300 rounded-full blur-[1px] top-1/4 left-1/4 animate-particle-1 z-20"></div>
<div className="absolute w-3 h-3 bg-orange-300 rounded-full blur-[2px] bottom-1/3 right-1/4 animate-particle-2 z-20"></div>
<div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full top-1/2 right-1/3 animate-particle-3 z-20"></div>
<div className="relative animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-300 blur-[60px] rounded-full scale-125 animate-aura z-0"></div>

<div className="relative z-10 w-48 h-64 md:w-64 md:h-80" style="border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                                background: radial-gradient(circle at 35% 25%, #ffffff 0%, #fef3c7 20%, #f5b041 85%, #d68910 100%);
                                box-shadow: inset -15px -25px 40px rgba(160, 64, 0, 0.4), 
                                            inset 10px 10px 20px rgba(255, 255, 255, 0.8),
                                            0 25px 50px -12px rgba(245, 158, 11, 0.5);">
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-y border-stone-100" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Nature's Perfect Protein</h2>
<p className="text-stone-500 max-w-2xl mx-auto font-light">Raised with care, delivered with freshness. Discover what makes our eggs different.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-8 rounded-2xl bg-[#faf9f6] border border-stone-100 hover:border-amber-200 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-amber-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-amber-600" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">100% Organic Diet</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Our hens feed on locally sourced, organic grains free from pesticides and GMOs.</p>
</div>

<div className="p-8 rounded-2xl bg-[#faf9f6] border border-stone-100 hover:border-amber-200 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-orange-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-orange-600" icon="solar:sun-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Farm Fresh Daily</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Collected every morning and shipped within 24 hours to ensure maximum freshness.</p>
</div>

<div className="p-8 rounded-2xl bg-[#faf9f6] border border-stone-100 hover:border-amber-200 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-amber-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-amber-600" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">High Protein Yield</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Rich, golden yolks packed with essential vitamins, Omega-3s, and clean protein.</p>
</div>

<div className="p-8 rounded-2xl bg-[#faf9f6] border border-stone-100 hover:border-amber-200 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-green-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Pasture Raised</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Hens roam freely in open pastures, soaking up the sun and foraging naturally.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="products">
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-200/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Our Farm Offerings</h2>
<p className="text-stone-500 max-w-xl font-light">From daily essentials to starting your own flock, choose premium quality.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-amber-600">
<iconify-icon className="text-lg" icon="solar:delivery-linear"></iconify-icon>
                    Free local delivery over $30
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)] transition-all duration-300 flex flex-col relative group">
<div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
<div className="relative z-10 flex-1">
<div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-500 border border-amber-100">
<iconify-icon className="text-3xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight mb-2">Morning Sun Tray</h3>
<p className="text-sm text-stone-500 font-light mb-6">12 Large Pasture-Raised Eggs. Perfect for weekly breakfasts.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-stone-900 tracking-tight">$8</span>
<span className="text-xs text-stone-400">/ tray</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Grade A Large
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Rich Amber Yolks
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Recyclable Carton
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3.5 rounded-full border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> Add to Order
                    </button>
</div>

<div className="bg-stone-900 rounded-3xl p-8 border border-stone-800 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col relative group overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] group-hover:bg-amber-400/30 transition-colors"></div>
<div className="relative z-10 flex-1">
<div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-stone-900 text-[10px] uppercase tracking-wider font-semibold rounded-full">
                            Best Value
                        </div>
<div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center mb-6 text-amber-400 border border-stone-700">
<iconify-icon className="text-3xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Family Harvest</h3>
<p className="text-sm text-stone-400 font-light mb-6">30 Large Pasture-Raised Eggs. For families and avid bakers.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white tracking-tight">$18</span>
<span className="text-xs text-stone-500">/ flat</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Premium Selection
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Sturdy Pulp Flat
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Lasts up to 4 weeks
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-medium text-white hover:shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all flex justify-center items-center gap-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> Add to Order
                    </button>
</div>

<div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)] transition-all duration-300 flex flex-col relative group">
<div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
<div className="relative z-10 flex-1">
<div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-orange-500 border border-orange-100">
<iconify-icon className="text-3xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight mb-2">Heritage Layer Hen</h3>
<p className="text-sm text-stone-500 font-light mb-6">Start your own backyard flock with our healthy, vaccinated pullets.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-stone-900 tracking-tight">$25</span>
<span className="text-xs text-stone-400">/ bird</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Point of Lay (16 weeks)
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Fully Vaccinated
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> High Yield Breeds
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3.5 rounded-full border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Inquire Availability
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-stone-100 flex items-center justify-center group">

<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #e0f2fe 0%, #fef3c7 40%, #dcfce7 70%, #bbf7d0 100%)'}}>
</div>

<div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-[40px] opacity-80 group-hover:scale-110 transition-transform duration-700"></div>

<div className="relative z-10 w-24 h-24 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl flex items-center justify-center">
<iconify-icon className="text-5xl text-stone-800" icon="solar:home-smile-linear"></iconify-icon>
</div>

<div className="absolute bottom-10 left-10 right-10 p-6 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl">
<p className="text-sm font-medium text-stone-800 mb-1">Ethical Farming Practice</p>
<div className="w-full bg-stone-200/50 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-amber-400 h-1.5 rounded-full w-[85%]"></div>
</div>
<p className="text-xs text-stone-500 font-light">85% more space per bird than industry standard.</p>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">More than just a farm. <br/> It's a natural ecosystem.</h2>
<p className="text-base text-stone-600 font-light leading-relaxed mb-6">
                        At Aura Farms, we believe that healthy, happy hens produce the best eggs. We don't use cages, and we don't crowd our barns. Instead, we rely on the natural cycles of the sun and the earth.
                    </p>
<p className="text-base text-stone-600 font-light leading-relaxed mb-10">
                        Our rotational grazing system ensures our hens always have access to fresh bugs, clover, and grass, resulting in eggs with deep golden yolks and superior nutritional value. When you choose us, you're choosing ethical agriculture.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-semibold text-stone-900 tracking-tight mb-1">10k+</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Acres of Pasture</div>
</div>
<div>
<div className="text-3xl font-semibold text-stone-900 tracking-tight mb-1">0%</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Antibiotics Used</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#faf9f6]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Trusted by Local Families</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-6">"The difference in quality is unbelievable. The yolks are so vibrant and stand up perfectly in the pan. I can never go back to store-bought eggs after trying Aura Farms."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-medium text-sm">SM</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Sarah Mitchell</h4>
<p className="text-xs text-stone-400">Weekly Subscriber</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-6">"We bought 4 heritage hens last spring. They arrived healthy, started laying right on time, and have been a joy. The farm team was so helpful answering our beginner questions."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-medium text-sm">JD</div>
<div>
<h4 className="text-sm font-medium text-stone-900">James Davies</h4>
<p className="text-xs text-stone-400">Backyard Farmer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-6">"Our bakery relies on these eggs. The protein structure makes our cakes rise better, and the flavor adds a richness we couldn't achieve before. Worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-medium text-sm">EC</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Elena Costa</h4>
<p className="text-xs text-stone-400">Local Bakery Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center bg-stone-900">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/30 via-stone-900 to-stone-900 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Bring the Farm to Your Table</h2>
<p className="text-stone-300 font-light text-lg mb-10 max-w-2xl mx-auto">Join hundreds of families enjoying the freshest, ethically raised eggs delivered straight to their doors. Taste the difference today.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 text-base font-medium text-stone-900 bg-white rounded-full hover:bg-stone-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" href="#products">
                        Start Your Order
                    </a>
<a className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white border border-stone-700 rounded-full hover:bg-stone-800 transition-all duration-300" href="mailto:hello@aurafarms.com">
                        Contact Farm
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-medium tracking-tighter text-stone-900 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:sun-2-linear"></iconify-icon>
                AURA FARMS
            </div>
<div className="flex gap-6 text-sm text-stone-500 font-light">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-900 transition-colors" href="#">Shipping Info</a>
</div>
<p className="text-xs text-stone-400 font-light">© 2023 Aura Farms. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
