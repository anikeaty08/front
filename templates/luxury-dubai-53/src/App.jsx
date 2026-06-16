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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="font-serif text-2xl tracking-tighter text-stone-900 hover:text-emerald-900 transition-colors" href="#">
                        AURA.
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#properties">Residences</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#amenities">Experience</a>
<a className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-emerald-900 transition-colors duration-300 shadow-lg shadow-stone-900/10" href="#contact">
                        Book Your Stay
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-900 focus:outline-none">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden grainy">

<div className="absolute inset-0 z-0">
<img alt="Dubai Downtown" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-[#FDFCF8]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div className="space-y-6 mb-12 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white w-fit">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Superhost Status</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]">
                        Elevated <br/>
<span className="italic font-light">Living</span> in <br/>
                        Dubai.
                    </h1>
<p className="text-stone-100 max-w-md text-lg font-light leading-relaxed">
                        Curated collection of premium apartments in Downtown, Palm Jumeirah, and Dubai Marina. Experience home, redefined.
                    </p>
<div className="flex items-center gap-4 pt-4">
<button className="h-12 w-12 rounded-full bg-white text-stone-900 flex items-center justify-center hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="text-white text-sm font-medium tracking-wide">Explore Collection</span>
</div>
</div>

<div className="lg:justify-self-end w-full max-w-sm">
<div className="bg-white p-6 rounded-3xl shadow-2xl shadow-stone-900/20 border border-stone-100">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Location</label>
<div className="relative group">
<div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-100 group-hover:border-stone-300 transition-colors cursor-pointer">
<span className="text-sm text-stone-800">Downtown Dubai</span>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Check In</label>
<div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-sm text-stone-800">
                                        Select Date
                                    </div>
</div>
<div>
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Check Out</label>
<div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-sm text-stone-800">
                                        Select Date
                                    </div>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-emerald-950 text-white font-medium text-sm hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Find Residences
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="amenities">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-4">Why Aura Stays?</h2>
<p className="text-stone-500 max-w-md">We bridge the gap between 5-star hotel luxury and the warmth of a private home.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 hover:text-emerald-900 hover:border-emerald-900 transition-colors mt-6 md:mt-0" href="#">
<span className="text-sm font-medium">Read our story</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[180px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&amp;w=2835&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
<h3 className="font-serif text-2xl text-white tracking-tight">Interiors by Designers</h3>
<p className="text-stone-200 text-sm mt-1">Every corner curated for comfort and style.</p>
</div>
</div>

<div className="bg-stone-100 rounded-3xl p-6 flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-colors">
<div className="h-10 w-10 rounded-full bg-emerald-900/10 flex items-center justify-center text-emerald-900">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<span className="block text-3xl font-serif text-stone-900">500+</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Happy Guests</span>
</div>
</div>

<div className="bg-[#F5F2EB] rounded-3xl p-6 flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-colors">
<div className="h-10 w-10 rounded-full bg-amber-900/10 flex items-center justify-center text-amber-900">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<span className="block font-medium text-stone-900 mb-1">Self Check-in</span>
<p className="text-xs text-stone-500 leading-relaxed">Seamless arrival experience, 24/7 access.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 bg-stone-900 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 opacity-20">

<svg height="100%" width="100%">
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10">
<iconify-icon className="text-white mb-4" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-serif text-xl text-white tracking-tight leading-snug">Prime Locations <br/> Only</h3>
</div>
<div className="relative z-10 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded-md bg-white/10 text-white backdrop-blur-sm border border-white/10">Marina</span>
<span className="text-[10px] px-2 py-1 rounded-md bg-white/10 text-white backdrop-blur-sm border border-white/10">Palm</span>
<span className="text-[10px] px-2 py-1 rounded-md bg-white/10 text-white backdrop-blur-sm border border-white/10">Downtown</span>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-3xl p-6 border border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900">
<iconify-icon icon="solar:swimming-pool-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h4 className="font-medium text-stone-900">Pool &amp; Gym Access</h4>
</div>

<div className="md:col-span-1 bg-white rounded-3xl p-6 border border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-900">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h4 className="font-medium text-stone-900">24/7 Concierge</h4>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-stone-100" id="properties">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-semibold text-emerald-900 uppercase tracking-widest mb-2 block">Our Portfolio</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Curated Residences</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
<img alt="The Palm Villa" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-stone-900 border border-stone-200">The Palm Jumeirah</span>
</div>
<button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 group-hover:text-emerald-900 transition-colors">Shoreline Sanctuary</h3>
<p className="text-sm text-stone-500 mt-1">2 Beds • Sea View • Beach Access</p>
</div>
<div className="text-right">
<span className="block text-lg font-medium text-stone-900">$450</span>
<span className="text-xs text-stone-400">/ night</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
<img alt="Downtown Loft" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&amp;w=2666&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-stone-900 border border-stone-200">Downtown Dubai</span>
</div>
<button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 group-hover:text-emerald-900 transition-colors">Burj Khalifa View Loft</h3>
<p className="text-sm text-stone-500 mt-1">1 Bed • City View • High Floor</p>
</div>
<div className="text-right">
<span className="block text-lg font-medium text-stone-900">$320</span>
<span className="text-xs text-stone-400">/ night</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
<img alt="Marina Apartment" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-stone-900 border border-stone-200">Dubai Marina</span>
</div>
<button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 group-hover:text-emerald-900 transition-colors">Marina Promenade Suite</h3>
<p className="text-sm text-stone-500 mt-1">3 Beds • Marina View • Large Terrace</p>
</div>
<div className="text-right">
<span className="block text-lg font-medium text-stone-900">$580</span>
<span className="text-xs text-stone-400">/ night</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stone-300 text-stone-900 font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
                    View All Properties
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#1A3C34] text-white overflow-hidden relative">
<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon height="200" icon="solar:quote-up-linear" width="200"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="mb-8 flex justify-center space-x-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
                "The most stunning apartment we've stayed in. The view of the Burj Khalifa was unreal, and the interior design was straight out of a magazine. Aura Stays made everything effortless."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden">
<img alt="User" className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<span className="block text-lg font-medium text-emerald-50">Sarah Jenkins</span>
<span className="text-xs text-emerald-200/60 uppercase tracking-widest">London, UK</span>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
<div className="bg-stone-100 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="space-y-8">
<div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 block">Get in Touch</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Ready for your Dubai getaway?</h2>
<p className="text-stone-500 mt-4 text-lg">Whether you are looking to book a stay or list your property with us, we are here to help.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-stone-200 text-stone-900 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm text-stone-500">Call Us</span>
<span className="text-lg font-medium text-stone-900">+971 50 123 4567</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-stone-200 text-stone-900 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm text-stone-500">Email</span>
<span className="text-lg font-medium text-stone-900">hello@aurastays.ae</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200/60">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase">First Name</label>
<input className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 rounded-t-lg focus:outline-none focus:border-emerald-900 focus:bg-emerald-50/10 transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase">Last Name</label>
<input className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 rounded-t-lg focus:outline-none focus:border-emerald-900 focus:bg-emerald-50/10 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase">Email Address</label>
<input className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 rounded-t-lg focus:outline-none focus:border-emerald-900 focus:bg-emerald-50/10 transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase">Message</label>
<textarea className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 rounded-t-lg focus:outline-none focus:border-emerald-900 focus:bg-emerald-50/10 transition-colors resize-none" placeholder="I'm interested in booking..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-stone-900 text-white font-medium hover:bg-emerald-900 transition-colors shadow-lg shadow-stone-900/20 flex justify-center items-center gap-2" type="button">
                            Send Message
                            <iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="mt-20 pt-8 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
<div className="text-2xl font-serif tracking-tighter text-stone-900">AURA.</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-900 transition-colors" href="#">Airbnb Profile</a>
<a className="hover:text-stone-900 transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-stone-400">© 2026 Aura Stays Dubai. All rights reserved.</p>
</div>

<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none"></div>
</div>
</section>

    </>
  );
}
