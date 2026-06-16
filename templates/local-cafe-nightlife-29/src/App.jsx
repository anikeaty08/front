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
850: '#151b28',
900: '#0f172a',
950: '#020617',
},
amber: {
450: '#F59E0B',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tight font-medium text-white flex items-center gap-2" href="#">
<span className="bg-amber-500/10 text-amber-500 p-1 rounded">LO</span>CAL
            </a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#about">Vibe</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-slate-950 bg-white rounded hover:bg-slate-200 transition-all" href="#reserve">
                Book Table
            </a>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-amber-500/10 to-transparent opacity-50 blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-amber-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Open until 1 AM • Gardens Galleria
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Noida's Premier <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Nightlife Scene.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed">
                    Experience the perfect blend of electric ambience, curated cocktails, and culinary delights in Sector 38. From sundowners to late-night beats.
                </p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:star-bold"></iconify-icon>
<span className="text-white font-medium">3.8</span> (1,400+ Reviews)
                    </div>
<div className="w-px h-4 bg-white/10"></div>
<div>₹2,000+ for two</div>
</div>
<div className="flex flex-wrap gap-3 pt-2">
<span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-400">Live Music</span>
<span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-400">Outdoor Seating</span>
<span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-400">Cocktails</span>
</div>
</div>

<div className="relative" id="reserve">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm -z-10"></div>
<div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Reserve a Table</h3>
<p className="text-sm text-slate-400 mb-6">Secure your spot for the best vibe in Noida.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-500">Date</label>
<div className="relative">
<input className="w-full bg-slate-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder-slate-600 appearance-none" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500">Guests</label>
<div className="relative flex items-center bg-slate-950 border border-white/10 rounded px-3 py-2">
<iconify-icon className="text-slate-500 mr-2" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<select className="w-full bg-transparent text-sm text-white focus:outline-none appearance-none">
<option>2 Guests</option>
<option>4 Guests</option>
<option>6+ Guests</option>
</select>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500">Name</label>
<input className="w-full bg-slate-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500">Phone</label>
<input className="w-full bg-slate-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="+91 99104 25010" type="tel"/>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
<span className="ml-3 text-xs font-medium text-slate-400">Request outdoor seating</span>
</label>
</div>
<button className="w-full mt-4 bg-white text-slate-950 font-medium py-2.5 rounded hover:bg-slate-200 transition-all flex items-center justify-center gap-2 text-sm" type="button">
                            Confirm Request
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Why Local Noida?</h2>
<p className="text-slate-400 max-w-md">More than just a cafe. We are a destination for foodies, party lovers, and socialites in the heart of Noida.</p>
</div>
<div className="flex gap-4">
<button className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="h-12 w-12 rounded bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:music-note-slider-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Immersive Ambience</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Huge space with vibrant decor. Live music on weekends and a DJ that sets the perfect mood for parties.
                    </p>
</div>

<div className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="h-12 w-12 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:wineglass-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Curated Mixology</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Our signature cocktails and Happy Hour offers make us the go-to spot for drinks. Try our Mojitos.
                    </p>
</div>

<div className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="h-12 w-12 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Late Night Vibes</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        We keep the energy high until 1 AM. Whether it's a dinner date or a post-work party, we're open.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="menu">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-2 block">Taste the Experience</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Menu Highlights</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="grid grid-cols-2 gap-4">
<img alt="Cocktail" className="rounded-lg object-cover h-64 w-full opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Indian Food" className="rounded-lg object-cover h-64 w-full translate-y-8 opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="space-y-8 pl-0 lg:pl-10">

<div className="flex justify-between items-start border-b border-white/5 pb-6">
<div>
<h4 className="text-lg font-medium text-white">Mutton Kabab &amp; Paratha</h4>
<p className="text-sm text-slate-400 mt-1">Spicy, succulent kababs served with crisp paratha and whole mirch.</p>
</div>
<span className="text-amber-500 font-medium text-sm">Rec.</span>
</div>

<div className="flex justify-between items-start border-b border-white/5 pb-6">
<div>
<h4 className="text-lg font-medium text-white">Veg Platter</h4>
<p className="text-sm text-slate-400 mt-1">A curated assortment of our finest vegetarian starters. Perfect for sharing.</p>
</div>
<span className="text-slate-500 text-sm">Popular</span>
</div>

<div className="flex justify-between items-start border-b border-white/5 pb-6">
<div>
<h4 className="text-lg font-medium text-white">Signature Cocktails</h4>
<p className="text-sm text-slate-400 mt-1">Expertly crafted drinks. Check our happy hour specials.</p>
</div>
<iconify-icon className="text-slate-500" icon="solar:wineglass-linear"></iconify-icon>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-amber-500 transition-colors mt-4 group" href="#">
                        View Full Menu 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">The Vibe</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[500px]">
<div className="md:col-span-2 relative group overflow-hidden rounded-xl">
<img alt="Club Atmosphere" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
<p className="text-white font-medium">Electric Atmosphere</p>
</div>
</div>
<div className="grid grid-rows-2 gap-4">
<div className="relative group overflow-hidden rounded-xl">
<img alt="Dining" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden rounded-xl">
<img alt="Party" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-950 border border-white/5 rounded-lg open:border-amber-500/30 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>What are the opening hours?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        We are open daily until 1 AM. The perfect spot for late-night dining and parties in Gardens Galleria.
                    </div>
</details>

<details className="group bg-slate-950 border border-white/5 rounded-lg open:border-amber-500/30 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>Is there a cover charge?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        Entry policies may vary during special events or weekends. Generally, we operate on a reservation or walk-in basis with table service. Please call us for specific event details.
                    </div>
</details>

<details className="group bg-slate-950 border border-white/5 rounded-lg open:border-amber-500/30 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>What is the average cost for two?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        The average cost for two people is approximately ₹2,000+ excluding taxes, depending on your order of food and beverages.
                    </div>
</details>

<details className="group bg-slate-950 border border-white/5 rounded-lg open:border-amber-500/30 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-200">
<span>Do you have outdoor seating?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        Yes, we have a spacious outdoor area as well as a vibrant indoor section. You can request your preference when booking.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-amber-600/5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready for the night?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Join us at Local Cafe Noida for an unforgettable experience. Tables fill up fast on weekends.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-slate-950 bg-white rounded hover:bg-slate-200 transition-all" href="#reserve">
                    Reserve Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white/10 bg-white/5 rounded hover:bg-white/10 transition-all gap-2" href="tel:09910425010">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    099104 25010
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-medium text-white flex items-center gap-2 mb-6" href="#">
                        LOCAL
                    </a>
<p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                        A go-to spot for food, music &amp; vibes in the heart of Noida. 
                        Gardens Galleria Mall, Sector 38.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Events</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Gardens Galleria Mall, Sector 38, Noida, Uttar Pradesh 201303</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>099104 25010</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Local Cafe Noida. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
