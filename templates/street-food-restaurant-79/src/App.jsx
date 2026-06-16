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
      

<div className="fixed top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-50/80 to-transparent pointer-events-none -z-10"></div>
<div className="fixed top-0 inset-x-0 flex justify-center pointer-events-none -z-10 overflow-hidden">
<div className="w-[800px] h-[400px] bg-orange-400/5 rounded-full blur-3xl translate-y-[-50%]"></div>
</div>

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 transition-all">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-gray-900" href="#home">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
<iconify-icon className="text-lg" icon="solar:flame-linear"></iconify-icon>
</div>
                    StreetSpice
                </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#gallery">Gallery</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden md:flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm" href="#contact">
<span>Order now</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-24 md:pt-40 md:pb-32 relative" id="home">
<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-medium mb-8 fade-in">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                Voted best street food 2024
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 fade-in delay-1 max-w-4xl mx-auto leading-tight">
                Authentic flavors, <br className="hidden md:block"/>
<span className="text-gray-400">served fresh daily.</span>
</h1>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto fade-in delay-2">
                Experience the vibrant taste of the streets with a modern touch. Carefully sourced ingredients, bold spices, and recipes crafted with passion.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in delay-3">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-sm shadow-gray-900/10" href="#menu">
                    View full menu
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-all" href="#contact">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    Call for pickup
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20 pt-10 border-t border-gray-200/60 fade-in delay-3">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tighter text-gray-900">500+</span>
<span className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-widest">Daily Orders</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tighter text-gray-900">24</span>
<span className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-widest">Spices Used</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tighter text-gray-900">4.9</span>
<span className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-widest">User Rating</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tighter text-gray-900">100%</span>
<span className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-widest">Fresh Prep</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-200/50" id="menu">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-3">Our Menu</h2>
<p className="text-base text-gray-500 max-w-xl">Curated street classics, elevated for the modern palate.</p>
</div>

<div className="flex items-center p-1 bg-gray-100 rounded-xl mt-6 md:mt-0 w-full md:w-auto overflow-x-auto">
<button className="px-4 py-2 text-sm font-medium bg-white text-gray-900 rounded-lg shadow-sm whitespace-nowrap transition-all">All Items</button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap transition-all">Starters</button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap transition-all">Mains</button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap transition-all">Drinks</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in delay-1">

<div className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
<div>
<div className="flex justify-between items-start mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-md">
<iconify-icon icon="solar:leaf-linear"></iconify-icon> Veg
                            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Pani Puri</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Crispy hollow shells filled with spiced potato, tamarind chutney, and fiery mint water.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</span>
<span className="text-lg font-semibold text-gray-900">₹50</span>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
<div>
<div className="flex justify-between items-start mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-100 bg-yellow-50 text-yellow-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-linear"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-medium px-2 py-1 rounded-md">
<iconify-icon icon="solar:flame-linear"></iconify-icon> Spicy
                            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Bombay Vada Pav</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Deep-fried potato dumpling placed inside a bread bun sliced almost in half through the middle.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</span>
<span className="text-lg font-semibold text-gray-900">₹40</span>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
<div>
<div className="flex justify-between items-start mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600">
<iconify-icon className="text-2xl" icon="solar:fire-linear"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 bg-red-50 text-red-700 text-xs font-medium px-2 py-1 rounded-md">
                                Non-Veg
                            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Chicken Tikka Roll</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Juicy, charcoal-smoked chicken chunks wrapped in a flaky paratha with mint yogurt.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</span>
<span className="text-lg font-semibold text-gray-900">₹120</span>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors" href="#">
                    Download full PDF menu <iconify-icon icon="solar:document-download-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-6">The story behind the spice.</h2>
<div className="space-y-4 text-base text-gray-500 leading-relaxed">
<p>
                            What started as a small cart on the corner of 5th Avenue has evolved into a culinary destination. We believe that street food is the truest reflection of a culture's soul.
                        </p>
<p>
                            Our recipes have been passed down through generations, tweaked slightly for the modern palate, but never losing their authentic essence. We source our spices directly from local markets to ensure every bite delivers a punch of genuine flavor.
                        </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#fafafa] bg-gray-200 flex items-center justify-center text-gray-500 text-xs"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="w-10 h-10 rounded-full border-2 border-[#fafafa] bg-gray-300 flex items-center justify-center text-gray-500 text-xs"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="w-10 h-10 rounded-full border-2 border-[#fafafa] bg-gray-400 flex items-center justify-center text-white text-xs"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
</div>
<div className="text-sm">
<span className="font-medium text-gray-900 block">Loved by locals</span>
<span className="text-gray-500 block">Join our community</span>
</div>
</div>
</div>
<div className="relative h-[400px] rounded-3xl bg-gray-100 border border-gray-200/60 overflow-hidden fade-in delay-1 flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-transparent"></div>
<iconify-icon className="text-9xl text-gray-300" icon="solar:shop-linear"></iconify-icon>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-200 p-4 rounded-xl shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Find us downtown</p>
<p className="text-xs text-gray-500">123 Market Street, NY</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-20 pb-10" id="contact">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<a className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-gray-900 mb-4" href="#home">
<div className="w-6 h-6 rounded bg-gray-900 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:flame-linear"></iconify-icon>
</div>
                        StreetSpice
                    </a>
<p className="text-sm text-gray-500 mb-6">
                        Bringing authentic, bold, and fresh street food directly to you. Open daily for your cravings.
                    </p>

<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Hours</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex justify-between gap-4"><span>Mon-Fri</span> <span className="font-medium text-gray-900">11am - 10pm</span></li>
<li className="flex justify-between gap-4"><span>Saturday</span> <span className="font-medium text-gray-900">12pm - 11pm</span></li>
<li className="flex justify-between gap-4"><span>Sunday</span> <span className="font-medium text-gray-900">Closed</span></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">hello@streetspice.com</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">+1 (555) 123-4567</a></li>
<li className="pt-2"><a className="inline-flex items-center gap-1 font-medium text-gray-900 hover:text-orange-600 transition-colors" href="#">Get directions <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 StreetSpice. All rights reserved.</p>
<div className="flex gap-4 text-xs text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
