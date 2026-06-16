import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="font-serif text-xl tracking-tighter text-stone-900 uppercase hover:opacity-70 transition-opacity" href="#">
                The Stone Barn
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#location">Location</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors shadow-sm ring-1 ring-stone-900/5" href="#reserve">
                    Book a Table
                </a>
</div>

<button className="md:hidden text-stone-900 p-1">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-stone-200 bg-white shadow-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-600"></span>
<span className="text-xs font-medium text-stone-600">Open today until 11pm</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl text-stone-900 tracking-tight leading-[1.1]">
                    Seasonal dining in the Cotswolds.
                </h1>
<p className="text-lg text-stone-500 max-w-md font-light">
                    Honest food, local produce, and a warm fire. Experience the taste of rural England in a restored 18th-century barn.
                </p>
<div className="flex items-center gap-4 pt-2">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-all shadow-sm" href="#reserve">
                        Reserve a Table
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm" href="#menu">
                        View Menu
                    </a>
</div>
</div>

<div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="Restaurant Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-serif italic text-lg opacity-90">"A hidden gem."</p>
<p className="text-xs uppercase tracking-widest mt-1 opacity-75">— The Guardian</p>
</div>
</div>
</div>
</header>

<section className="py-20 border-y border-stone-200 bg-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-3 group cursor-default">
<div className="w-10 h-10 flex items-center justify-center rounded border border-stone-200 bg-stone-50 text-stone-800 mb-4 group-hover:border-stone-400 transition-colors">
<iconify-icon height="20" icon="lucide:sprout" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900">Farm to Fork</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        We work directly with local farmers within a 15-mile radius to source organic vegetables and heritage breed meats.
                    </p>
</div>
<div className="space-y-3 group cursor-default">
<div className="w-10 h-10 flex items-center justify-center rounded border border-stone-200 bg-stone-50 text-stone-800 mb-4 group-hover:border-stone-400 transition-colors">
<iconify-icon height="20" icon="lucide:flame" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900">Open Fire Cooking</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Central to our kitchen is the wood-fired grill, imparting a distinct smoky flavor to our signature dishes.
                    </p>
</div>
<div className="space-y-3 group cursor-default">
<div className="w-10 h-10 flex items-center justify-center rounded border border-stone-200 bg-stone-50 text-stone-800 mb-4 group-hover:border-stone-400 transition-colors">
<iconify-icon height="20" icon="lucide:wine" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900">Curated Cellar</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        An evolving wine list focusing on small-batch producers, biodynamic vineyards, and English sparkling wines.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="menu">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 space-y-2">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-500">October Menu</span>
<h2 className="font-serif text-4xl text-stone-900 tracking-tight">The Sunday Lunch</h2>
</div>
<div className="space-y-12">

<div>
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">Starters</h3>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Cured ChalkStream Trout</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£12</span>
</div>
<p className="text-sm text-stone-500">Pickled cucumber, dill emulsion, sourdough crisp.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Heritage Beetroot Tart</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£10</span>
</div>
<p className="text-sm text-stone-500">Goat's curd, candied walnuts, watercress.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Wild Mushroom Soup</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£9</span>
</div>
<p className="text-sm text-stone-500">Truffle oil, roasted chestnuts, homemade focaccia.</p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">Mains</h3>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Slow Roasted Lamb Shoulder</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£26</span>
</div>
<p className="text-sm text-stone-500">Rosemary roast potatoes, seasonal greens, mint jelly, red wine jus.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Pan-Seared Halibut</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£28</span>
</div>
<p className="text-sm text-stone-500">Samphire, brown shrimp butter, crushed new potatoes.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Roasted Squash Risotto</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£22</span>
</div>
<p className="text-sm text-stone-500">Sage crisps, parmesan shavings, pumpkin seeds.</p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">Desserts</h3>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Sticky Toffee Pudding</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£9</span>
</div>
<p className="text-sm text-stone-500">Miso caramel sauce, clotted cream ice cream.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-serif text-lg text-stone-900">Local Cheese Board</h4>
<span className="text-sm font-medium text-stone-500 group-hover:text-stone-900 transition-colors">£14</span>
</div>
<p className="text-sm text-stone-500">Selection of three British cheeses, oatcakes, quince jelly.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors group" href="#">
                    Download Full Menu 
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="reserve">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
<div className="space-y-6">
<h2 className="font-serif text-4xl text-stone-900 tracking-tight">Reserve your table</h2>
<p className="text-stone-500 text-sm leading-relaxed">
                    For parties larger than 8, please contact us directly. We require a credit card to secure bookings for Friday and Saturday evenings.
                </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400"><iconify-icon icon="lucide:map-pin" width="18"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-stone-900">Location</h4>
<p className="text-sm text-stone-500">The Old Barn, Church Lane<br/>Bourton-on-the-Water, GL54 2AB</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400"><iconify-icon icon="lucide:clock" width="18"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-stone-900">Hours</h4>
<p className="text-sm text-stone-500">Wed - Sun: 12pm - 11pm<br/>Mon - Tue: Closed</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400"><iconify-icon icon="lucide:phone" width="18"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-stone-900">Contact</h4>
<p className="text-sm text-stone-500">01451 123456<br/>hello@thestonebarn.co.uk</p>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-xl border border-stone-200 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600">Date</label>
<div className="relative">
<input className="w-full bg-white border border-stone-200 rounded text-sm px-3 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all appearance-none" style={{minHeight: '42px'}} type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600">Guests</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded text-sm px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all appearance-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5 People</option>
<option>6 People</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600">Time</label>
<div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-3 py-1.5 rounded border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">17:30</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-3 py-1.5 rounded border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">18:00</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<div className="px-3 py-1.5 rounded border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">18:30</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-3 py-1.5 rounded border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">19:00</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-3 py-1.5 rounded border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">19:30</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600">Contact Details</label>
<input className="w-full bg-white border border-stone-200 rounded text-sm px-3 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all mb-3" placeholder="Full Name" type="text"/>
<input className="w-full bg-white border border-stone-200 rounded text-sm px-3 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all" placeholder="Email Address" type="email"/>
</div>
<div className="flex items-start gap-2 pt-2">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-stone-300 bg-white checked:bg-stone-900 checked:border-stone-900 transition-all" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
<p className="text-xs text-stone-500 leading-tight">I agree to the cancellation policy (24 hours notice required).</p>
</div>
<button className="w-full bg-stone-900 text-white font-medium text-sm py-2.5 rounded hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2" type="button">
<span>Confirm Booking</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8" id="location">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<h3 className="font-serif text-xl tracking-tighter text-stone-900 uppercase mb-4">The Stone Barn</h3>
<p className="text-sm text-stone-500 max-w-xs">
                        A modern British restaurant in the heart of the Cotswolds, celebrating the best of local produce.
                    </p>
</div>
<div className="flex gap-16">
<div className="space-y-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">Explore</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Menus</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Private Dining</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Vouchers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">Social</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Facebook</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-100 pt-8 gap-4">
<p className="text-xs text-stone-400">© 2023 The Stone Barn Restaurant. All rights reserved.</p>
<div className="flex items-center gap-6">
<iconify-icon className="text-stone-300" icon="lucide:credit-card" width="20"></iconify-icon>
<iconify-icon className="text-stone-300" icon="lucide:wifi" width="20"></iconify-icon>
<div className="h-4 w-px bg-stone-200"></div>
<span className="text-xs text-stone-400">Designed with care</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
