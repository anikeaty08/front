import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B08D22',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 font-serif italic">D</span>
<span className="tracking-[0.2em] uppercase text-sm">Doré</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest hover:text-gold-400 transition-colors" href="#menu">Menu</a>
<a className="text-xs font-medium uppercase tracking-widest hover:text-gold-400 transition-colors" href="#experience">Experience</a>
<a className="text-xs font-medium uppercase tracking-widest hover:text-gold-400 transition-colors" href="#private">Private</a>
</nav>

<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-950 text-xs font-medium uppercase tracking-widest hover:bg-gold-400 transition-all duration-300" href="#reservations">
                Reserve Table
            </a>

<button className="md:hidden text-white">
<img alt="Menu" className="w-6 h-6" src="https://api.iconify.design/lucide/menu.svg?color=white&amp;strokeWidth=1.5"/>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-950/0 via-neutral-950/40 to-neutral-950"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-gold-400/5 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-widest text-gold-400">Michelin Star Experience</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-tight">
                Taste the <br/>
<span className="font-serif italic text-gold-400/90">Ethereal</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                An orchestration of flavors, texture, and aroma. Experience modern gastronomy in a setting of timeless elegance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-gold-400 text-neutral-950 text-sm font-medium uppercase tracking-widest hover:bg-white transition-colors duration-300 min-w-[160px]" href="#menu">
                    View Menu
                </a>
<a className="px-8 py-3 border border-white/20 text-white text-sm font-medium uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 min-w-[160px] flex items-center justify-center gap-2 group" href="#video">
<img alt="Play" className="w-4 h-4 group-hover:scale-110 transition-transform" src="https://api.iconify.design/lucide/play.svg?color=white&amp;strokeWidth=1.5"/>
                    Watch Film
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
<img alt="Scroll" className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-down.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950 relative" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Curated Excellence</h2>
<p className="text-neutral-400 max-w-sm">Signature dishes crafted with precision and passion by Executive Chef Antoine.</p>
</div>
<a className="text-gold-400 hover:text-white transition-colors text-xs uppercase tracking-widest flex items-center gap-2 pb-1 border-b border-gold-400/30 hover:border-white" href="#">
                    View Full Gallery <img alt="Arrow" className="w-4 h-4" src="https://api.iconify.design/lucide/arrow-right.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[500px] overflow-hidden bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors duration-500">
<img alt="Dish 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-2 block">Starter</span>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Smoked Wagyu Tartare</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            Oscietra caviar, cured egg yolk, toasted brioche, and hickory smoke infusion.
                        </p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-white text-lg font-serif italic">$45</span>
<button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-neutral-950 transition-all">
<img alt="Add" className="w-4 h-4" src="https://api.iconify.design/lucide/plus.svg?color=currentColor&amp;strokeWidth=1.5"/>
</button>
</div>
</div>
</div>

<div className="group relative h-[500px] overflow-hidden bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors duration-500">
<img alt="Dish 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-2 block">Main Course</span>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Black Cod Miso</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            Sustainably sourced cod, marinated in saikyo miso for 72 hours, wrapped in hoba leaf.
                        </p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-white text-lg font-serif italic">$68</span>
<button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-neutral-950 transition-all">
<img alt="Add" className="w-4 h-4" src="https://api.iconify.design/lucide/plus.svg?color=currentColor&amp;strokeWidth=1.5"/>
</button>
</div>
</div>
</div>

<div className="group relative h-[500px] overflow-hidden bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors duration-500">
<img alt="Dish 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-2 block">Dessert</span>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The Gold Sphere</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            Dark chocolate sphere, gold leaf, warm caramel pour, vanilla bean gelato core.
                        </p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-white text-lg font-serif italic">$32</span>
<button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-neutral-950 transition-all">
<img alt="Add" className="w-4 h-4" src="https://api.iconify.design/lucide/plus.svg?color=currentColor&amp;strokeWidth=1.5"/>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="menu">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-gold-400 text-xs font-medium uppercase tracking-widest">Gastronomy</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mt-3 mb-6">Dining Journeys</h2>
<div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 border border-white/5 hover:border-white/10 bg-neutral-950/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-medium text-white tracking-tight">A La Carte</h3>
<img alt="Icon" className="w-5 h-5 opacity-50" src="https://api.iconify.design/lucide/utensils.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[48px]">
                        Select from our seasonally changing menu of individual masterpieces.
                    </p>
<ul className="space-y-4 mb-8 border-t border-white/5 pt-8">
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Starters</span>
<span className="text-neutral-500">from $28</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Mains</span>
<span className="text-neutral-500">from $45</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Desserts</span>
<span className="text-neutral-500">from $22</span>
</li>
</ul>
<button className="w-full py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-950 transition-colors">
                        View Full Menu
                    </button>
</div>

<div className="relative p-8 border border-gold-400/30 bg-neutral-950 transition-all duration-300 transform md:-translate-y-4 shadow-[0_0_50px_-12px_rgba(212,175,55,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold-400 text-neutral-950 text-[10px] uppercase tracking-widest font-medium">
                        Chef's Selection
                    </div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-medium text-white tracking-tight gold-gradient-text">The Tasting Menu</h3>
<img alt="Icon" className="w-5 h-5 text-gold-400" src="https://api.iconify.design/lucide/star.svg?color=%23D4AF37&amp;strokeWidth=1.5"/>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[48px]">
                        A 9-course immersive experience curated by Chef Antoine, featuring seasonal rarities.
                    </p>
<ul className="space-y-4 mb-8 border-t border-white/10 pt-8">
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">9 Courses</span>
<span className="text-gold-400">$185 pp</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Wine Pairing</span>
<span className="text-neutral-500">+$95 pp</span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Duration</span>
<span className="text-neutral-500">~3 Hours</span>
</li>
</ul>
<button className="w-full py-3 bg-gold-400 text-neutral-950 text-xs uppercase tracking-widest hover:bg-white transition-colors font-medium">
                        Book Experience
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="reservations">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">
<div className="md:w-1/2">
<span className="text-gold-400 text-xs font-medium uppercase tracking-widest">Reservations</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mt-3 mb-6">Secure Your Table</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                    We release tables 60 days in advance. For parties larger than 8, please contact our events team directly.
                </p>
<div className="flex flex-col gap-6 text-sm text-neutral-400">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
<img alt="Time" className="w-4 h-4" src="https://api.iconify.design/lucide/clock.svg?color=white&amp;strokeWidth=1.5"/>
</div>
<div>
<p className="text-white mb-1">Dinner Service</p>
<p>Tue - Sun: 18:00 - 23:00</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
<img alt="Location" className="w-4 h-4" src="https://api.iconify.design/lucide/map-pin.svg?color=white&amp;strokeWidth=1.5"/>
</div>
<div>
<p className="text-white mb-1">Location</p>
<p>128 Fifth Avenue, New York, NY</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 bg-neutral-900/50 p-8 md:p-10 border border-white/5 backdrop-blur-sm">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="block w-full bg-transparent border-b border-neutral-700 text-white px-0 py-2 focus:outline-none focus:border-gold-400 transition-colors peer" id="date" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-400 pointer-events-none" htmlFor="date">Date</label>
<div className="absolute right-0 top-2 pointer-events-none">
<img alt="Icon" className="w-4 h-4" src="https://api.iconify.design/lucide/calendar.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
</div>
<div className="relative group">
<input className="block w-full bg-transparent border-b border-neutral-700 text-white px-0 py-2 focus:outline-none focus:border-gold-400 transition-colors peer" id="time" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-400 pointer-events-none" htmlFor="time">Time</label>
</div>
</div>
<div className="relative group">
<select className="block w-full bg-transparent border-b border-neutral-700 text-white px-0 py-2 focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer" id="guests">
<option className="bg-neutral-900" disabled="" selected="" value="">Select Guests</option>
<option className="bg-neutral-900 text-white" value="2">2 Guests</option>
<option className="bg-neutral-900 text-white" value="4">4 Guests</option>
<option className="bg-neutral-900 text-white" value="6">6 Guests</option>
</select>
<div className="absolute right-0 top-2 pointer-events-none">
<img alt="Icon" className="w-4 h-4" src="https://api.iconify.design/lucide/chevron-down.svg?color=gray&amp;strokeWidth=1.5"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="block w-full bg-transparent border-b border-neutral-700 text-white px-0 py-2 focus:outline-none focus:border-gold-400 transition-colors peer" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-400 pointer-events-none" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="block w-full bg-transparent border-b border-neutral-700 text-white px-0 py-2 focus:outline-none focus:border-gold-400 transition-colors peer" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-400 pointer-events-none" htmlFor="email">Email Address</label>
</div>
</div>
<button className="w-full py-4 bg-white text-neutral-950 text-xs font-semibold uppercase tracking-widest hover:bg-gold-400 transition-colors mt-4" type="button">
                        Confirm Request
                    </button>
</form>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 flex flex-col items-center justify-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path d="M0 100 Q 50 0 100 100" fill="none" stroke="#D4AF37" vector-effect="non-scaling-stroke"></path>
<path d="M0 50 Q 50 100 100 50" fill="none" stroke="#D4AF37" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">
                An Unforgettable <br/>
<span className="font-serif italic text-gold-400">Atmosphere</span>
</h2>
<p className="text-neutral-400 mb-10 font-light">Join our exclusive mailing list for priority access to seasonal menu launches and private events.</p>
<div className="flex w-full max-w-md mx-auto border-b border-white/20 pb-2 focus-within:border-gold-400 transition-colors">
<input className="bg-transparent w-full text-white placeholder-neutral-600 focus:outline-none" placeholder="Enter your email" type="email"/>
<button className="text-xs font-medium uppercase tracking-widest text-gold-400 hover:text-white transition-colors whitespace-nowrap ml-4">
                    Subscribe
                </button>
</div>
</div>
</section>

<footer className="bg-neutral-900 border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<span className="w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 font-serif italic">D</span>
<span className="tracking-[0.2em] uppercase text-sm">Doré</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Redefining fine dining through culinary innovation and timeless tradition.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-gold-400 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">The Menu</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Private Dining</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>+1 (212) 555-0123</li>
<li>reservations@dore-nyc.com</li>
<li>128 Fifth Avenue, NY</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all" href="#">
<img alt="Instagram" className="w-4 h-4" src="https://api.iconify.design/lucide/instagram.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all" href="#">
<img alt="Facebook" className="w-4 h-4" src="https://api.iconify.design/lucide/facebook.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-gold-400 hover:bg-gold-400/10 transition-all" href="#">
<img alt="Twitter" className="w-4 h-4" src="https://api.iconify.design/lucide/twitter.svg?color=currentColor&amp;strokeWidth=1.5"/>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 DORÉ Restaurant. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group" href="#">
<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-neutral-900 text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Chat with Concierge
        </span>
<div className="w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300">
<img alt="WhatsApp" className="w-7 h-7" src="https://api.iconify.design/lucide/message-circle.svg?color=black&amp;strokeWidth=1.5"/>
</div>
</a>

    </>
  );
}
