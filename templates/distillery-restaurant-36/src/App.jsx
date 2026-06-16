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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter text-white font-medium flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
<span className="text-amber-500 font-serif italic text-lg pr-0.5">A</span>
</div>
                ALCHEMY &amp; OAK
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">Our Story</a>
<a className="hover:text-white transition-colors" href="#spirits">Spirits</a>
<a className="hover:text-white transition-colors" href="#menu">Dining</a>
<a className="hover:text-white transition-colors" href="#events">Private Events</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors" href="#reserve">
                    Reserve Table
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-zinc-950">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Now Pouring Batch No. 42
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1]">
                Distilled with patience.<br/>
<span className="italic text-zinc-400">Served with passion.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                An urban distillery and modern kitchen in the heart of the city. 
                Experience small-batch botanical spirits paired with wood-fired cuisine.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Book a Table
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors">
                    View Bottle Shop
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</header>

<section className="py-24 border-b border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 mb-4">
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight">On-Site Distillery</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Our copper pot stills, lovingly named Ada and Grace, work daily to produce our signature gin, vodka, and single malt whiskey right behind the bar.
                </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 mb-4">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight">Wood-Fired Kitchen</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    A menu driven by local seasons and the open flame. We utilize spent grains from our distilling process to create unique breads and marinades.
                </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-500 mb-4">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight">Award Winning</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Recognized by the Craft Spirits Association for our Botanical Gin and voted "Best Ambiance" three years running.
                </p>
</div>
</div>
</section>

<section className="relative py-24 bg-zinc-900/50" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-30"></div>
<img alt="Copper Still" className="relative rounded-xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[600px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 bg-zinc-950/90 backdrop-blur border border-white/10 p-6 rounded-lg">
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 shrink-0" icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-zinc-300 italic font-serif">
                            We believe that spirit making is an art form that sits somewhere between chemistry and magic.
                        </p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div className="space-y-2">
<span className="text-amber-500 font-medium text-xs tracking-wider uppercase">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Grain to Glass</h2>
</div>
<p className="text-zinc-400 font-light leading-relaxed">
                    At Alchemy &amp; Oak, we control every step of the process. From milling the organic grain to fermentation, distillation, and aging, everything happens within these four walls.
                </p>
<p className="text-zinc-400 font-light leading-relaxed">
                    Our restaurant isn't just an add-on; it's a partner. The kitchen team works in tandem with the distillers, creating a symbiotic menu where flavors from the still influence the plate, and botanicals from the kitchen find their way into the gin basket.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl text-white font-medium">12+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Botanicals</span>
</div>
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl text-white font-medium">45</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Days Aged</span>
</div>
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl text-white font-medium">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Organic Grain</span>
</div>
<div className="pl-4 border-l border-white/10">
<span className="block text-2xl text-white font-medium">Zero</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Additives</span>
</div>
</div>
<div className="pt-6">
<a className="text-white border-b border-amber-500/50 pb-0.5 hover:text-amber-500 transition-colors inline-flex items-center gap-2 text-sm" href="#">
                        Learn about our tours
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center space-y-4 mb-16">
<span className="text-amber-500 font-medium text-xs tracking-wider uppercase">Seasonal Menu</span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">The Dinner Edit</h2>
<p className="text-zinc-400 max-w-lg mx-auto font-light">
                    Designed to be shared. Subject to daily changes based on market availability.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="space-y-10">
<h3 className="text-lg text-white font-medium border-b border-white/10 pb-4 mb-6">Small Plates</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Charred Octopus</h4>
<span className="text-zinc-500 text-sm">24</span>
</div>
<p className="text-sm text-zinc-500 font-light">Romesco, fermented chili oil, crispy potatoes.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Distiller's Bread</h4>
<span className="text-zinc-500 text-sm">12</span>
</div>
<p className="text-sm text-zinc-500 font-light">Spent grain sourdough, smoked cultured butter, sea salt.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Beef Tartare</h4>
<span className="text-zinc-500 text-sm">22</span>
</div>
<p className="text-sm text-zinc-500 font-light">Gin-cured egg yolk, caperberry, rye cracker.</p>
</div>
</div>

<div className="space-y-10">
<h3 className="text-lg text-white font-medium border-b border-white/10 pb-4 mb-6">Large Plates</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Duck Breast</h4>
<span className="text-zinc-500 text-sm">38</span>
</div>
<p className="text-sm text-zinc-500 font-light">Juniper glaze, parsnip puree, roasted fig.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Wood-Fired Trout</h4>
<span className="text-zinc-500 text-sm">34</span>
</div>
<p className="text-sm text-zinc-500 font-light">Burnt lemon, almond, dill brown butter.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-zinc-200 group-hover:text-amber-500 transition-colors font-medium">Aged Ribeye (for two)</h4>
<span className="text-zinc-500 text-sm">95</span>
</div>
<p className="text-sm text-zinc-500 font-light">Bone-in, chimichurri, tallow fries.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 text-sm hover:bg-zinc-900 hover:text-white transition-colors" href="#">
                    View Full Menu
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden" id="spirits">

<div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="space-y-2">
<span className="text-amber-500 font-medium text-xs tracking-wider uppercase">Bottle Shop</span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">Our Signature Spirits</h2>
</div>
<a className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors" href="#">
                    Browse all bottles
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-zinc-950 border border-white/5 rounded-xl p-8 hover:border-amber-500/30 transition-all duration-300">
<div className="aspect-[3/4] mb-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-overlay"></div>
<div className="relative z-10 text-center p-4 border border-white/20 bg-black/20 backdrop-blur-sm px-6 py-8">
<span className="block font-serif text-2xl text-white tracking-widest">NO. 1</span>
<span className="block text-xs uppercase tracking-widest text-zinc-300 mt-2">Dry Gin</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium">Botanical Dry Gin</h3>
<p className="text-sm text-zinc-500 mt-1">Notes of citrus, juniper, cardamon.</p>
</div>
<span className="text-white font-medium">$45</span>
</div>
<button className="w-full mt-6 py-2 border border-white/10 rounded text-sm text-zinc-400 hover:text-white hover:border-white/30 transition-colors">Add to Cart</button>
</div>

<div className="group bg-zinc-950 border border-white/5 rounded-xl p-8 hover:border-amber-500/30 transition-all duration-300">
<div className="aspect-[3/4] mb-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-overlay"></div>
<div className="relative z-10 text-center p-4 border border-white/20 bg-black/20 backdrop-blur-sm px-6 py-8">
<span className="block font-serif text-2xl text-white tracking-widest">NO. 7</span>
<span className="block text-xs uppercase tracking-widest text-zinc-300 mt-2">Vodka</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium">Heirloom Wheat Vodka</h3>
<p className="text-sm text-zinc-500 mt-1">Clean, creamy finish, vanilla notes.</p>
</div>
<span className="text-white font-medium">$38</span>
</div>
<button className="w-full mt-6 py-2 border border-white/10 rounded text-sm text-zinc-400 hover:text-white hover:border-white/30 transition-colors">Add to Cart</button>
</div>

<div className="group bg-zinc-950 border border-white/5 rounded-xl p-8 hover:border-amber-500/30 transition-all duration-300">
<div className="aspect-[3/4] mb-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629249727407-a35924a42823?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-overlay"></div>
<div className="relative z-10 text-center p-4 border border-white/20 bg-black/20 backdrop-blur-sm px-6 py-8">
<span className="block font-serif text-2xl text-white tracking-widest">NO. 9</span>
<span className="block text-xs uppercase tracking-widest text-zinc-300 mt-2">Rye</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium">Straight Rye Whiskey</h3>
<p className="text-sm text-zinc-500 mt-1">Spicy, oak, caramel, 100 proof.</p>
</div>
<span className="text-white font-medium">$65</span>
</div>
<button className="w-full mt-6 py-2 border border-white/10 rounded text-sm text-zinc-400 hover:text-white hover:border-white/30 transition-colors">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/5" id="reserve">

<div className="p-12 lg:p-24 bg-zinc-950 flex items-center">
<div className="w-full max-w-md mx-auto space-y-8">
<div className="space-y-2">
<h2 className="text-3xl font-serif text-white tracking-tight">Make a Reservation</h2>
<p className="text-zinc-400 text-sm font-light">Join us for an evening of spirits and dining.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-zinc-500 font-medium">Date</label>
<div className="relative">
<input className="w-full bg-zinc-900 border border-white/10 rounded p-3 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 appearance-none" type="date"/>
<div className="absolute right-3 top-3 pointer-events-none text-zinc-500">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-zinc-500 font-medium">Guests</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-white/10 rounded p-3 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 appearance-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
<div className="absolute right-3 top-3 pointer-events-none text-zinc-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-zinc-500 font-medium">Time</label>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-4 py-2 rounded border border-white/10 text-zinc-400 text-sm peer-checked:bg-amber-500 peer-checked:text-white peer-checked:border-amber-500 hover:bg-zinc-900 transition-all">5:00 PM</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-4 py-2 rounded border border-white/10 text-zinc-400 text-sm peer-checked:bg-amber-500 peer-checked:text-white peer-checked:border-amber-500 hover:bg-zinc-900 transition-all">6:30 PM</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<div className="px-4 py-2 rounded border border-white/10 text-zinc-400 text-sm peer-checked:bg-amber-500 peer-checked:text-white peer-checked:border-amber-500 hover:bg-zinc-900 transition-all">7:30 PM</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="px-4 py-2 rounded border border-white/10 text-zinc-400 text-sm peer-checked:bg-amber-500 peer-checked:text-white peer-checked:border-amber-500 hover:bg-zinc-900 transition-all">8:30 PM</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-zinc-500 font-medium">Details</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded p-3 text-white text-sm focus:outline-none focus:border-amber-500/50 mb-3" placeholder="Full Name" type="text"/>
<input className="w-full bg-zinc-900 border border-white/10 rounded p-3 text-white text-sm focus:outline-none focus:border-amber-500/50" placeholder="Email Address" type="email"/>
</div>
<button className="w-full py-3 bg-white text-zinc-950 font-medium rounded hover:bg-zinc-200 transition-colors mt-4" type="submit">
                        Confirm Request
                    </button>
<p className="text-center text-xs text-zinc-600">
                        For groups larger than 8, please contact us directly.
                    </p>
</form>
</div>
</div>

<div className="bg-zinc-900 relative min-h-[500px] border-l border-white/5 flex flex-col justify-center p-12 lg:p-24">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-multiply"></div>
<div className="relative z-10 space-y-12">
<div className="space-y-4">
<h3 className="text-white text-xl font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:map-pin" width="20"></iconify-icon>
                        Location
                    </h3>
<p className="text-zinc-400 font-light leading-relaxed pl-7">
                        128 Distillery Lane,<br/>
                        Industrial District, City, 90210
                    </p>
<a className="text-amber-500 text-sm hover:text-amber-400 pl-7 inline-flex items-center gap-1" href="https://maps.app.goo.gl/PBg44mxJ3ef3uNAN6" target="_blank">
                        Get Directions
                        <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
</div>
<div className="space-y-4">
<h3 className="text-white text-xl font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:clock" width="20"></iconify-icon>
                        Hours
                    </h3>
<div className="pl-7 grid grid-cols-2 gap-8 text-sm">
<div>
<span className="block text-white font-medium mb-1">Dinner</span>
<ul className="text-zinc-400 space-y-1 font-light">
<li>Wed-Sun: 5pm - 10pm</li>
<li>Mon-Tue: Closed</li>
</ul>
</div>
<div>
<span className="block text-white font-medium mb-1">Tasting Room</span>
<ul className="text-zinc-400 space-y-1 font-light">
<li>Fri-Sun: 2pm - 10pm</li>
<li>Happy Hour: 4pm - 6pm</li>
</ul>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-white text-xl font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:phone" width="20"></iconify-icon>
                        Contact
                    </h3>
<p className="text-zinc-400 font-light pl-7">
                        (555) 123-4567<br/>
                        hello@alchemyandoak.com
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs space-y-4">
<a className="text-lg tracking-tighter text-white font-medium flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
<span className="text-amber-500 font-serif italic text-xs pr-0.5">A</span>
</div>
                    ALCHEMY &amp; OAK
                </a>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                    Crafting spirits and memories in the heart of the city. Drink responsibly.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">Distillery Tours</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Dinner Menu</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Cocktail Bar</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">Gin</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Vodka</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Whiskey</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Merch</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center sm:text-left text-xs text-zinc-600">
<p>© 2024 Alchemy &amp; Oak Distillery. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
