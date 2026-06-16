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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter uppercase" href="#">LUMIÈRE</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#location">Location</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="bg-stone-900 text-stone-50 text-sm px-5 py-2 rounded-full font-medium hover:bg-stone-800 transition-all" href="#reserve">
                    Book a Table
                </a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full border border-stone-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Now taking summer reservations</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight">
                        Cuisine that <br/>
<span className="italic text-stone-400">speaks the language</span> <br/>
                        of the seasons.
                    </h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed">
                        An intimate culinary journey guided by heritage techniques and sustainable ingredients sourced from local artisans.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="group flex items-center gap-2 text-sm font-medium">
                            View Current Menu
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-4">
<h2 className="text-3xl font-medium tracking-tight">The Tasting Menu</h2>
<p className="text-stone-500 max-w-sm">A curated selection of five courses reflecting the peak of the harvest.</p>
</div>
<div className="flex gap-2 p-1 bg-stone-100 rounded-lg">
<button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-medium">Dinner</button>
<button className="px-4 py-1.5 text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors">Lunch</button>
<button className="px-4 py-1.5 text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors">Wine</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Heirloom Radish</h3>
<span className="text-sm font-medium text-stone-400">$18</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Cultured butter, smoked sea salt, toasted sourdough crumbs.</p>
</div>

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Atlantic Scallops</h3>
<span className="text-sm font-medium text-stone-400">$26</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Burned cauliflower silk, green apple, hazelnut vinaigrette.</p>
</div>

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Wild Mushroom Risotto</h3>
<span className="text-sm font-medium text-stone-400">$34</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Black truffle shavings, 24-month aged parmesan, thyme oil.</p>
</div>

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Dry-Aged Beef Fillet</h3>
<span className="text-sm font-medium text-stone-400">$48</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Bone marrow crust, shallot confit, red wine reduction.</p>
</div>

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Market Fish</h3>
<span className="text-sm font-medium text-stone-400">$38</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Line-caught daily, seasonal greens, lemon butter emulsion.</p>
</div>

<div className="group cursor-default">
<div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
<h3 className="text-lg font-medium group-hover:text-stone-500 transition-colors">Burnt Honey Parfait</h3>
<span className="text-sm font-medium text-stone-400">$14</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Bee pollen, chamomile infusion, almond lace cookie.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="reserve">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-stone-900 rounded-3xl overflow-hidden grid lg:grid-cols-5 shadow-2xl">
<div className="lg:col-span-2 p-12 flex flex-col justify-between text-stone-50">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Reservations</h2>
<p className="text-stone-400 text-sm leading-relaxed mb-8">
                            Join us for an evening of exceptional dining. For groups larger than six, please contact us directly via telephone.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-stone-500" icon="solar:calendar-date-linear"></iconify-icon>
<span>Tuesday — Saturday</span>
</div>
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-stone-500" icon="solar:clock-circle-linear"></iconify-icon>
<span>18:00 — 22:30</span>
</div>
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-stone-500" icon="solar:map-point-linear"></iconify-icon>
<span>124 Artisan Ave, Lower Manhattan</span>
</div>
</div>
</div>
<div className="pt-12">
<p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Inquiries</p>
<a className="text-sm font-medium border-b border-stone-700 pb-1" href="mailto:hello@lumiere.com">hello@lumiere.com</a>
</div>
</div>
<div className="lg:col-span-3 bg-white p-12">
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Date</label>
<div className="relative">
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-100 transition-all" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Guests</label>
<div className="relative">
<select className="custom-select w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-100 transition-all">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5 Guests</option>
<option>6 Guests</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-100 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Special Requests</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-100 transition-all resize-none" placeholder="Allergies, celebrations..." rows="3"></textarea>
</div>
<div className="md:col-span-2 pt-4">
<button className="w-full bg-stone-900 text-stone-50 py-3 rounded-lg font-medium text-sm hover:bg-stone-800 transition-all flex items-center justify-center gap-2" type="button">
                                Confirm Availability
                                <iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200 pt-24 pb-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="space-y-6">
<a className="text-xl font-semibold tracking-tighter uppercase" href="#">LUMIÈRE</a>
<p className="text-sm text-stone-500 leading-relaxed">Modernity meets tradition in the heart of the city.</p>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li>124 Artisan Ave, NYC</li>
<li>+1 (212) 555-0128</li>
<li>hello@lumiere.com</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-6">Newsletter</h4>
<div className="relative">
<input className="w-full border-b border-stone-200 py-2 text-sm focus:outline-none focus:border-stone-900 transition-colors" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t border-stone-100">
<p className="text-xs text-stone-400">© 2024 LUMIÈRE Gastronomy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
