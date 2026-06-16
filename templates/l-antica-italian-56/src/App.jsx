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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#FDFBF7]/80 border-b border-[#E5E5E5]/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#story">Story</a>
<a className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
</div>
<a className="text-xl font-medium tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2" href="#">
                L'Antica
            </a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#visit">Visit</a>
<a className="bg-[#1C1917] text-[#FDFBF7] px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#C25234] transition-colors duration-300" href="#reserve">
                    Book Table
                </a>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full">
<img alt="Authentic Neapolitan Pizza" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;q=80&amp;w=2500"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 mt-20 max-w-4xl mx-auto flex flex-col items-center">
<span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 mb-6 animate-fade-up">Amsterdam, NL</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 leading-[1.1] animate-fade-up delay-100">
                A slice of Naples, <br/> crafted with soul.
            </h1>
<p className="text-base md:text-lg text-white/80 font-light max-w-lg mx-auto mb-10 animate-fade-up delay-200">
                Naturally leavened dough, San Marzano tomatoes, and authentic Italian craftsmanship in a contemporary setting.
            </p>
<div className="animate-fade-up delay-300">
<a className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-[#1C1917] transition-all duration-300" href="#menu">
                    View Menu
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-300 text-white/50">
<span className="text-xs tracking-widest uppercase">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</header>

<section className="py-24 bg-white border-b border-[#E5E5E5]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#C25234] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:wheat-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">72-Hour Dough</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">Our signature sourdough is fermented for three days, creating a light, digestible, and beautifully blistered crust.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#C25234] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:fire-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Wood-Fired Oven</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">Baked at 450°C in our custom-built Stefano Ferrara oven, imported directly from Naples for the perfect bake.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#C25234] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">D.O.P. Ingredients</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">We source only the finest ingredients: San Marzano tomatoes, fresh Fior di Latte, and cold-pressed olive oil.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-200">
<img alt="Making Pizza Dough" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-2xl overflow-hidden border-8 border-[#FDFBF7] hidden md:block">
<img alt="Restaurant Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C25234] mb-4">La Nostra Storia</span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8 leading-[1.1]">Tradition meets the modern palate.</h2>
<div className="space-y-6 text-base text-stone-600 font-light leading-relaxed">
<p>
                            Born from a deep love for authentic Italian culinary heritage, L'Antica was established to bring the uncompromising quality of Neapolitan pizza to the heart of the Netherlands.
                        </p>
<p>
                            We believe that simplicity is the ultimate sophistication. Our menu is intentionally focused, allowing us to obsess over every detail—from the hydration level of our dough to the exact acidity of our tomato sauce. It's not just fast food; it's an experience meant to be savored.
                        </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex -space-x-4">
<img alt="Chef" className="w-12 h-12 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Chef" className="w-12 h-12 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="text-sm">
<p className="font-medium">Founding Chefs</p>
<p className="text-stone-500 font-light">Marco &amp; Elena</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F4F0]" id="menu">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5C6B50] mb-4 block">Il Menu</span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight">Le Pizze</h2>
</div>

<div className="mb-16">
<h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-8 pb-4 border-b border-stone-300/50">Classiche</h3>
<div className="space-y-8">

<div className="group">
<div className="flex items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-[#C25234] transition-colors">Margherita</h4>
<div className="flex-grow mx-4 dot-leader h-[18px]"></div>
<span className="text-base font-medium">€14.00</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-[85%] leading-relaxed">San Marzano tomatoes DOP, Fior di Latte from Agerola, fresh basil, extra virgin olive oil</p>
</div>

<div className="group">
<div className="flex items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-[#C25234] transition-colors">Marinara <span className="text-xs text-[#5C6B50] ml-2 font-normal">(vg)</span></h4>
<div className="flex-grow mx-4 dot-leader h-[18px]"></div>
<span className="text-base font-medium">€12.50</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-[85%] leading-relaxed">San Marzano tomatoes DOP, wild oregano, fresh garlic, extra virgin olive oil</p>
</div>

<div className="group">
<div className="flex items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-[#C25234] transition-colors">Diavola</h4>
<div className="flex-grow mx-4 dot-leader h-[18px]"></div>
<span className="text-base font-medium">€16.50</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-[85%] leading-relaxed">San Marzano tomatoes DOP, Fior di Latte, spicy Spianata salami, fresh chili, basil</p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-8 pb-4 border-b border-stone-300/50">Speciali</h3>
<div className="space-y-8">

<div className="group">
<div className="flex items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-[#5C6B50] transition-colors">Tartufo</h4>
<div className="flex-grow mx-4 dot-leader h-[18px]"></div>
<span className="text-base font-medium">€19.00</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-[85%] leading-relaxed">Truffle cream base, Fior di Latte, roasted mixed mushrooms, fresh black truffle shavings</p>
</div>

<div className="group">
<div className="flex items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-[#5C6B50] transition-colors">Burrata &amp; Prosciutto</h4>
<div className="flex-grow mx-4 dot-leader h-[18px]"></div>
<span className="text-base font-medium">€21.00</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-[85%] leading-relaxed">Fior di Latte, cherry tomatoes, whole fresh burrata, Prosciutto di Parma 24-month, rocket</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-stone-900 pb-1 hover:text-[#C25234] hover:border-[#C25234] transition-colors" href="#">
                    Download Full Menu (PDF)
                    <iconify-icon icon="solar:download-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-[#1C1917] text-[#FDFBF7] overflow-hidden">
<div className="absolute inset-0 opacity-20 mix-blend-overlay">
<img alt="Texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;q=80&amp;w=2000" />
</img></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-[#C25234] mb-8" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.2] mb-10">
                "Easily the best Neapolitan pizza I've had outside of Italy. The dough is impossibly light, and the atmosphere is effortlessly chic yet incredibly warm."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-[1px] bg-white/30"></div>
<span className="text-sm font-medium tracking-widest uppercase text-white/80">The Culinary Review</span>
<div className="w-10 h-[1px] bg-white/30"></div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#E5E5E5]" id="visit">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-[#F5F4F0] p-10 md:p-16 rounded-2xl">
<h2 className="text-3xl font-serif tracking-tight mb-10">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<iconify-icon className="text-xl text-[#C25234] shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Location</h4>
<p className="text-sm text-stone-600 font-light">Eerste van der Helststraat 45,<br/> 1073 AD Amsterdam,<br/> Netherlands</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-xl text-[#C25234] shrink-0 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Opening Hours</h4>
<ul className="text-sm text-stone-600 font-light space-y-1">
<li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>17:00 - 22:30</span></li>
<li className="flex justify-between w-48"><span>Fri - Sat:</span> <span>12:00 - 23:30</span></li>
<li className="flex justify-between w-48"><span>Sunday:</span> <span>12:00 - 22:00</span></li>
</ul>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-xl text-[#C25234] shrink-0 mt-1" icon="solar:phone-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Contact</h4>
<p className="text-sm text-stone-600 font-light">+31 20 123 4567<br/> ciao@lantica.nl</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center" id="reserve">
<h2 className="text-3xl font-serif tracking-tight mb-2">Book a Table</h2>
<p className="text-sm text-stone-500 font-light mb-10">Walk-ins are welcome, but reservations are highly recommended for dinner service.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-stone-500">Date</label>
<div className="relative">
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-sm text-stone-900 focus:outline-none focus:border-[#C25234] transition-colors appearance-none" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-stone-500">Time</label>
<select className="w-full bg-transparent border-b border-stone-300 py-2 text-sm text-stone-900 focus:outline-none focus:border-[#C25234] transition-colors appearance-none">
<option>18:00</option>
<option>18:30</option>
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-stone-500">Guests</label>
<select className="w-full bg-transparent border-b border-stone-300 py-2 text-sm text-stone-900 focus:outline-none focus:border-[#C25234] transition-colors appearance-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-stone-500">Name</label>
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25234] transition-colors" placeholder="John Doe" type="text"/>
</div>
<button className="w-full bg-[#1C1917] text-white py-4 text-sm font-medium rounded-lg hover:bg-[#C25234] transition-colors duration-300 mt-4" type="button">
                            Request Reservation
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<span className="text-2xl font-medium tracking-[0.2em] uppercase mb-6 block">L'Antica</span>
<p className="text-sm text-stone-500 font-light max-w-sm mb-8">
                        Elevating the art of Neapolitan pizza in Amsterdam. Join us for a slice of tradition.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#1C1917] hover:text-[#C25234] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#1C1917] hover:text-[#C25234] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#story">Our Story</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#reserve">Reservations</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Private Events</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">La Famiglia</h4>
<p className="text-sm text-stone-500 font-light mb-4">Subscribe for seasonal menu updates and special events.</p>
<form className="flex items-center border-b border-stone-300 pb-2 group focus-within:border-stone-900 transition-colors">
<input className="w-full bg-transparent focus:outline-none text-sm placeholder:text-stone-400 text-stone-900" placeholder="Email address" type="email"/>
<button className="text-stone-400 group-hover:text-stone-900 transition-colors" type="button">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#E5E5E5] text-xs text-stone-400 font-light">
<p>© 2024 L'Antica Pizzeria. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
