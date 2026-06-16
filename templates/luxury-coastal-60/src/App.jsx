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
luxury: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
800: '#1F2937',
900: '#111827',
}
},
letterSpacing: {
tightest: '-0.05em',
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-luxury-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 border border-luxury-900 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
<span className="font-serif italic text-lg leading-none pt-1">E</span>
</div>
<span className="text-sm font-medium tracking-widest uppercase">The Estuary</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-luxury-800">
<a className="hover:text-black transition-colors" href="#">Suites</a>
<a className="hover:text-black transition-colors" href="#">The Course</a>
<a className="hover:text-black transition-colors" href="#">Concours</a>
<a className="hover:text-black transition-colors" href="#">Dining</a>
</div>

<button className="hidden md:flex items-center gap-2 bg-luxury-900 text-white px-5 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wide hover:bg-black transition-colors shadow-sm">
<span>Reserve Stay</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>

<button className="md:hidden text-luxury-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Coastal View" className="w-full h-full object-cover opacity-90 image-fade-in brightness-75" src="https://images.unsplash.com/photo-1563720223523-491ff04651de?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-luxury-50"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
<iconify-icon className="text-yellow-200" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-medium">Five Star Coastal Retreat</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6 italic">
                Timeless <span className="not-italic font-light tracking-tightest">Horizons</span>
</h1>
<p className="text-luxury-100 text-sm md:text-base font-light tracking-wide max-w-lg mx-auto leading-relaxed opacity-90">
                Where the roar of the ocean meets the purr of a vintage engine. An exclusive sanctuary tailored for those who master the fairway and the road.
            </p>

<div className="mt-12 hidden md:inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-lg gap-px">
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[140px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Check In</span>
<span className="text-sm font-medium">Oct 24</span>
</div>
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[140px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Check Out</span>
<span className="text-sm font-medium">Oct 28</span>
</div>
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[140px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Guests</span>
<span className="text-sm font-medium">2 Adults</span>
</div>
<button className="bg-white text-luxury-900 h-full px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-luxury-100 transition-colors ml-2">
                    Search
                </button>
</div>
</div>
</header>

<section className="py-24 md:py-32 border-b border-luxury-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-luxury-900 mb-4">Curated for the Connoisseur</h2>
<p className="text-luxury-500 font-light leading-relaxed">
                        We understand that true luxury lies in the details of your passions. Our estate is designed to accommodate your lifestyle, from the temperature-controlled garage to the private links.
                    </p>
</div>
<a className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest border-b border-luxury-900 pb-1" href="#">
                    Explore Amenities
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative overflow-hidden bg-white border border-luxury-200 h-[500px] flex flex-col justify-end p-8 md:p-12 hover:border-luxury-300 transition-all duration-500">
<img alt="Golf Course" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-700"></div>
<div className="relative z-10 group-hover:text-white transition-colors duration-500">
<div className="w-12 h-12 rounded-full border border-luxury-300 flex items-center justify-center mb-6 group-hover:border-white/30 backdrop-blur-sm bg-white/50 group-hover:bg-white/10">
<iconify-icon icon="solar:cup-first-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif italic mb-2">The Coastal Links</h3>
<p className="text-sm font-light opacity-80 leading-relaxed max-w-sm">
                            An 18-hole championship course sculpted into the cliffs. Private tee times tailored to the ocean breeze.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-luxury-200 h-[500px] flex flex-col justify-end p-8 md:p-12 hover:border-luxury-300 transition-all duration-500">
<img alt="Classic Car" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-700"></div>
<div className="relative z-10 group-hover:text-white transition-colors duration-500">
<div className="w-12 h-12 rounded-full border border-luxury-300 flex items-center justify-center mb-6 group-hover:border-white/30 backdrop-blur-sm bg-white/50 group-hover:bg-white/10">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif italic mb-2">The Concours Garage</h3>
<p className="text-sm font-light opacity-80 leading-relaxed max-w-sm">
                            Secure, climate-controlled storage for your vintage machines. Detailing services and coastal driving maps provided.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-luxury-900 text-white py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<div className="inline-flex items-center gap-2 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<span className="text-luxury-400 text-xs font-medium uppercase tracking-widest ml-2">Michelin Guide 2024</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
<span className="font-serif italic text-luxury-200">L'Océan</span><br/>
                        Gastronomy
                    </h2>
<p className="text-luxury-300 font-light leading-relaxed">
                        Helmed by Chef Julian Vauchere, our two-star establishment sources ingredients from the local tides and the inland farms. A wine cellar boasting 3,000 vintage labels awaits your selection.
                    </p>
<div className="space-y-4 pt-4 border-t border-white/10">
<div className="flex items-center justify-between group cursor-pointer">
<span className="font-medium text-sm">Tasting Menu</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors">12 Courses / $450</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<span className="font-medium text-sm">A la Carte</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors">Seasonal Selection</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<span className="font-medium text-sm">Private Dining</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors">Captain's Table</span>
</div>
</div>
<button className="mt-4 border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                        Request a Table
                    </button>
</div>
<div className="lg:col-span-7 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Plating" className="w-full h-80 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<img alt="Restaurant Interior" className="w-full h-80 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-500 translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
<div>
<span className="text-xs font-bold text-luxury-400 uppercase tracking-widest mb-2 block">Accommodations</span>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-luxury-900">Bespoke Sanctuaries</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-luxury-200 flex items-center justify-center hover:bg-luxury-50 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-luxury-200 flex items-center justify-center hover:bg-luxury-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 overflow-x-auto pb-8 hide-scrollbar">
<div className="flex gap-6 w-max">

<div className="w-[340px] md:w-[400px] group cursor-pointer">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Ocean Front
                        </div>
<img alt="Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">The Mariner's Suite</h3>
<p className="text-xs text-luxury-400 font-light">85 sq m • Wrap-around terrace</p>
</div>
<span className="text-sm font-medium">$1,200<span className="text-xs font-light text-luxury-400">/night</span></span>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1" title="King Bed">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon>
<span className="text-[10px]">1 King</span>
</div>
<div className="flex items-center gap-1" title="Bath">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon>
<span className="text-[10px]">Spa Bath</span>
</div>
</div>
</div>

<div className="w-[340px] md:w-[400px] group cursor-pointer">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Garden View
                        </div>
<img alt="Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">The Driver's Loft</h3>
<p className="text-xs text-luxury-400 font-light">110 sq m • Private Garage Access</p>
</div>
<span className="text-sm font-medium">$1,850<span className="text-xs font-light text-luxury-400">/night</span></span>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:sofa-linear" width="16"></iconify-icon>
<span className="text-[10px]">Lounge</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:key-linear" width="16"></iconify-icon>
<span className="text-[10px]">Private Entry</span>
</div>
</div>
</div>

<div className="w-[340px] md:w-[400px] group cursor-pointer">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-luxury-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Penthouse
                        </div>
<img alt="Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">The Estuary Residence</h3>
<p className="text-xs text-luxury-400 font-light">240 sq m • Panoramic Views</p>
</div>
<span className="text-sm font-medium">$4,500<span className="text-xs font-light text-luxury-400">/night</span></span>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:wine-trash-linear" width="16"></iconify-icon>
<span className="text-[10px]">Bar</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
<span className="text-[10px]">Sleeps 6</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-luxury-200 bg-luxury-50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-luxury-200 border border-luxury-200">

<div className="bg-white p-10 flex flex-col items-center text-center group hover:bg-luxury-50 transition-colors">
<iconify-icon className="mb-4 text-luxury-400 group-hover:text-luxury-900 transition-colors" icon="solar:shield-keyhole-linear" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-widest mb-2">Private Security</h4>
<p className="text-xs text-luxury-500 font-light leading-relaxed max-w-xs">Discreet, 24/7 protection for you and your assets. Escort services available for transit.</p>
</div>

<div className="bg-white p-10 flex flex-col items-center text-center group hover:bg-luxury-50 transition-colors">
<iconify-icon className="mb-4 text-luxury-400 group-hover:text-luxury-900 transition-colors" icon="solar:hanger-2-linear" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-widest mb-2">Bespoke Tailoring</h4>
<p className="text-xs text-luxury-500 font-light leading-relaxed max-w-xs">In-house fittings for golf attire and evening wear. Next-day delivery available.</p>
</div>

<div className="bg-white p-10 flex flex-col items-center text-center group hover:bg-luxury-50 transition-colors">
<iconify-icon className="mb-4 text-luxury-400 group-hover:text-luxury-900 transition-colors" icon="solar:plain-linear" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-widest mb-2">Charter Access</h4>
<p className="text-xs text-luxury-500 font-light leading-relaxed max-w-xs">Direct helipad access and private marina docking for yachts up to 150ft.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-luxury-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 border border-luxury-900 flex items-center justify-center">
<span className="font-serif italic text-xs leading-none pt-0.5">E</span>
</div>
<span className="text-xs font-medium tracking-widest uppercase">The Estuary</span>
</div>
<p className="text-xs text-luxury-400 font-light leading-relaxed">
                        1200 Ocean Drive<br/>
                        Monterey Peninsula, CA 93940<br/>
                        United States
                    </p>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Experience</h5>
<ul className="space-y-3">
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">The Golf Course</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Concours d'Elegance</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Michelin Dining</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Spa &amp; Wellness</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Legal</h5>
<ul className="space-y-3">
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Newsletter</h5>
<p className="text-xs text-luxury-400 mb-4 font-light">Exclusive invitations to automotive events and tournaments.</p>
<div className="flex gap-2 border-b border-luxury-200 pb-2">
<input className="w-full bg-transparent text-xs outline-none text-luxury-900 placeholder:text-luxury-300" placeholder="Email Address" type="email"/>
<button className="text-luxury-900 hover:text-luxury-500 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-luxury-100">
<p className="text-[10px] text-luxury-300 uppercase tracking-wider">© 2024 The Estuary Hotel. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-luxury-300 hover:text-luxury-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram-text" width="16"></iconify-icon></a>
<a className="text-luxury-300 hover:text-luxury-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
