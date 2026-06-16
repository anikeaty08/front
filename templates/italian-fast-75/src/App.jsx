import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
<i className="text-white h-5 w-5" data-lucide="utensils-crossed" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">Italian Soda</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-normal text-neutral-400 hover:text-orange-400 transition-colors" href="#food">Fast Food</a>
<a className="text-sm font-normal text-neutral-400 hover:text-orange-400 transition-colors" href="#drinks">Drinks</a>
<a className="text-sm font-normal text-neutral-400 hover:text-orange-400 transition-colors" href="#contact">Contact</a>
</div>
<button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                Order Now
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 text-center relative z-10">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Open for Delivery
            </div>
<h1 className="mb-6 text-5xl font-medium tracking-tight text-white md:text-7xl">
                Enjoy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Meals</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-neutral-400">
                Premium Fast Food &amp; Handi based in Ghulamullah Road. Experience the taste of Italian specials, crispy rolls, and refreshing classic sodas.
            </p>
<div className="mt-10 flex justify-center gap-4">
<a className="rounded-lg bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all" href="#menu">
                    View Menu
                </a>
<a className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2" href="tel:03123832490">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> Call to Order
                </a>
</div>
</div>
</header>

<section className="py-20" id="menu">
<div className="mx-auto max-w-7xl px-6">

<div className="mb-16">
<div className="mb-8 flex items-center gap-4">
<span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></span>
<h2 className="text-2xl font-medium tracking-tight text-white uppercase">Italian Fast Food</h2>
<span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></span>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Italian Special Zinger</h3>
<p className="mt-1 text-sm text-neutral-500">Signature crispy burger</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 400</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Cheese Zinger Burger</h3>
<p className="mt-1 text-sm text-neutral-500">Loaded with extra cheese</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 450</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Pizza Burger</h3>
<p className="mt-1 text-sm text-neutral-500">The best of both worlds</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 350</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Crispy Breast Quarter</h3>
<p className="mt-1 text-sm text-neutral-500">Fried chicken piece</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 450</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Hot Shots (10pcs)</h3>
<p className="mt-1 text-sm text-neutral-500">Spicy bites</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 450</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-orange-500/50 hover:bg-neutral-900">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">Nuggets (6pcs)</h3>
<p className="mt-1 text-sm text-neutral-500">Classic chicken nuggets</p>
</div>
<span className="text-lg font-medium text-orange-500">Rs. 300</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<div className="mb-6 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-orange-500"></div>
<h2 className="text-xl font-medium tracking-tight text-white uppercase">Fast Food Rolls</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Italian Special Roll</span>
<span className="text-base font-medium text-orange-500">Rs. 250</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Zinger Mayo Roll</span>
<span className="text-base font-medium text-orange-500">Rs. 200</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Twister Roll</span>
<span className="text-base font-medium text-orange-500">Rs. 250</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Bihari Roll</span>
<span className="text-base font-medium text-orange-500">Rs. 300</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Cheese Twister Roll</span>
<span className="text-base font-medium text-orange-500">Rs. 350</span>
</div>
</div>
</div>

<div>
<div className="mb-6 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-orange-500"></div>
<h2 className="text-xl font-medium tracking-tight text-white uppercase">Sandwiches</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Italian Special Sandwich</span>
<span className="text-base font-medium text-orange-500">Rs. 400</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Cheese Club Sandwich</span>
<span className="text-base font-medium text-orange-500">Rs. 450</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Club Sandwich</span>
<span className="text-base font-medium text-orange-500">Rs. 300</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-3">
<span className="text-base text-neutral-300">Mexican Sandwich (L)</span>
<span className="text-base font-medium text-orange-500">Rs. 800</span>
</div>
</div>
</div>
</div>

<div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-900/20 to-neutral-900 border border-white/10 p-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<h2 className="text-2xl font-medium tracking-tight text-white uppercase flex items-center gap-3">
<i className="text-orange-500 w-6 h-6" data-lucide="utensils" strokeWidth="1.5"></i>
                        French Fries
                    </h2>
<span className="text-sm text-neutral-500">Crispy &amp; Fresh</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-black/40 rounded-lg p-4 text-center">
<h4 className="text-white font-medium mb-1">Plain Fries</h4>
<p className="text-orange-500 font-medium">Rs. 100</p>
</div>
<div className="bg-black/40 rounded-lg p-4 text-center">
<h4 className="text-white font-medium mb-1">Masala Fries</h4>
<p className="text-orange-500 font-medium">Rs. 120</p>
</div>
<div className="bg-black/40 rounded-lg p-4 text-center">
<h4 className="text-white font-medium mb-1">Mayo Garlic</h4>
<p className="text-orange-500 font-medium">Rs. 200</p>
</div>
<div className="bg-black/40 rounded-lg p-4 text-center">
<h4 className="text-white font-medium mb-1">Pizza Fries F2</h4>
<p className="text-orange-500 font-medium">Rs. 600</p>
</div>
</div>
</div>

<div className="mt-20" id="drinks">
<div className="text-center mb-12">
<span className="text-orange-500 text-sm font-medium tracking-widest uppercase">Refreshment</span>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-white">Classic Drinks &amp; Soda</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-neutral-900/30 rounded-2xl p-6 border border-white/5">
<h3 className="text-orange-400 font-medium mb-6 uppercase tracking-wider text-sm border-b border-orange-500/20 pb-2">Classic Drinks</h3>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Blue Berry</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Black Berry</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Limca</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Apple</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Orange</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
</ul>
</div>

<div className="bg-neutral-900/30 rounded-2xl p-6 border border-white/5">
<h3 className="text-orange-400 font-medium mb-6 uppercase tracking-wider text-sm border-b border-orange-500/20 pb-2">Special Flavour</h3>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Red Bull</span>
<span className="text-neutral-500">Rs. 100 / 120</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Lemon Mint</span>
<span className="text-neutral-500">Rs. 90 / 100</span>
</li>
<li className="flex justify-between items-center text-sm pt-4 font-medium text-white">
<span>Mocktails</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Blue Lagoon</span>
<span className="text-neutral-500">Rs. 90 / 110</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Apple Mocktail</span>
<span className="text-neutral-500">Rs. 90 / 110</span>
</li>
</ul>
</div>

<div className="bg-neutral-900/30 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
<h3 className="text-orange-400 font-medium mb-6 uppercase tracking-wider text-sm border-b border-orange-500/20 pb-2">More Drinks</h3>
<ul className="space-y-4 relative z-10">
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Lychee</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Pineapple</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Strawberry</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Pakola</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Green Apple</span>
<span className="text-neutral-500">Rs. 80 / 100</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-12" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-6">Information Details</h3>
<div className="flex items-start gap-4 mb-6">
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
<i className="h-5 w-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base text-neutral-300">Shop No M16 Main Ghulamullah Road</p>
<p className="text-sm text-neutral-500">Opposite: Soneri Bank Makli</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
<i className="h-5 w-5" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-lg text-white font-medium">0312-3832490</p>
<p className="text-sm text-neutral-500">0312-2777235 / 0301-3587426</p>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-neutral-900 border border-white/10 p-8 overflow-hidden">
<div className="absolute -right-6 -bottom-6 text-neutral-800">
<i className="h-48 w-48 opacity-20" data-lucide="bike" strokeWidth="1"></i>
</div>
<div className="relative z-10">
<h4 className="text-xl font-medium text-white mb-2">Fast Home Delivery</h4>
<p className="text-neutral-400 mb-6 max-w-xs">We deliver piping hot food straight to your doorstep.</p>
<button className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-medium">
                            Call Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-600">© 2023 Italian Soda. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
