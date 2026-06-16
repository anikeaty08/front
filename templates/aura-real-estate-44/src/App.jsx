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
},
colors: {
zinc: {
850: '#1f1f22',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity">AURA.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Buy</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Rent</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sell</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Agents</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">Sign in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm shadow-zinc-200" href="#">
                    List Property
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Market up by 4.2% this month</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6">
                    Discover a place <br/>
<span className="text-zinc-400">you'll love to live.</span>
</h1>
<p className="text-lg text-zinc-500 font-light mb-10 max-w-lg leading-relaxed">
                    Explore our curated list of aesthetic homes, penthouses, and modern apartments designed for the way you live today.
                </p>

<div className="bg-white p-2 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 max-w-md w-full">
<div className="flex items-center border-b border-zinc-100 pb-2 mb-2 px-2 gap-4">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-1 -mb-3.5 z-10">Buy</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 pb-1 -mb-3.5">Rent</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 pb-1 -mb-3.5">Sold</button>
</div>
<div className="flex items-center gap-2 p-1">
<iconify-icon className="text-zinc-400 ml-2" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full text-sm outline-none text-zinc-900 placeholder:text-zinc-400 bg-transparent py-2" placeholder="City, neighborhood, or address" type="text"/>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white p-2.5 rounded-xl transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 bg-zinc-100 group">
<img alt="Modern Architecture" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-zinc-900">Modernist Villa</p>
<p className="text-xs text-zinc-500">Beverly Hills, CA</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-zinc-900">$4.2M</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-xs text-zinc-500">4.98</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-zinc-100 py-10 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-zinc-900">acme.</span>
<span className="text-xl font-bold tracking-tight text-zinc-900">focal.</span>
<span className="text-xl font-bold tracking-tight text-zinc-900">vertex</span>
<span className="text-xl font-bold tracking-tight text-zinc-900">capsule</span>
<span className="text-xl font-bold tracking-tight text-zinc-900">orb.</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3">Trending Properties</h2>
<p className="text-zinc-500 font-light max-w-md">Our most exclusive listings, handpicked for their unique character and exceptional value.</p>
</div>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors self-start md:self-end" href="#">View all listings</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded-md z-10">New</span>
<img alt="House 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm hover:bg-zinc-50 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-zinc-900">The Glass House</h3>
<p className="text-sm text-zinc-500 font-light">Hollywood Hills, CA</p>
</div>
<p className="text-base font-medium text-zinc-900">$2,450,000</p>
</div>
<div className="flex items-center gap-4 text-zinc-500 pt-2 border-t border-zinc-100 mt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon>
<span className="text-xs">3 Beds</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon>
<span className="text-xs">2 Baths</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon>
<span className="text-xs">2,100 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="House 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm hover:bg-zinc-50 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-zinc-900">Palm Desert Oasis</h3>
<p className="text-sm text-zinc-500 font-light">Palm Springs, CA</p>
</div>
<p className="text-base font-medium text-zinc-900">$1,850,000</p>
</div>
<div className="flex items-center gap-4 text-zinc-500 pt-2 border-t border-zinc-100 mt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon>
<span className="text-xs">4 Beds</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon>
<span className="text-xs">3 Baths</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon>
<span className="text-xs">2,800 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<span className="absolute top-4 left-4 bg-zinc-900 text-white text-xs font-medium px-2 py-1 rounded-md z-10">Featured</span>
<img alt="House 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm hover:bg-zinc-50 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-zinc-900">Urban Loft</h3>
<p className="text-sm text-zinc-500 font-light">Tribeca, NY</p>
</div>
<p className="text-base font-medium text-zinc-900">$3,100,000</p>
</div>
<div className="flex items-center gap-4 text-zinc-500 pt-2 border-t border-zinc-100 mt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon>
<span className="text-xs">2 Beds</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon>
<span className="text-xs">2 Baths</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon>
<span className="text-xs">1,600 sqft</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">Real estate is<br/>more than just structure.</h2>
<p className="text-zinc-500 font-light mb-8 leading-relaxed max-w-sm">We believe your home should be an extension of your personality. Our agents work tirelessly to find properties that resonate with your lifestyle.</p>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-2xl font-semibold text-zinc-900 mb-1 tracking-tight">2.5k+</p>
<p className="text-xs text-zinc-500">Properties Sold</p>
</div>
<div>
<p className="text-2xl font-semibold text-zinc-900 mb-1 tracking-tight">98%</p>
<p className="text-xs text-zinc-500">Client Satisfaction</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-100 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Secure Transactions</h3>
<p className="text-xs text-zinc-500 leading-relaxed">End-to-end encryption for all documentation and financial transfers.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Market Insights</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Real-time data analysis to help you make informed investment decisions.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Expert Agents</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Access to the top 1% of real estate professionals in your region.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Virtual Tours</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Immersive 3D walkthroughs available for every listed property.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex mb-8">
<iconify-icon className="text-zinc-200" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 leading-snug mb-8">
                "We were looking for a home that felt like a sanctuary. The Aura team didn't just show us houses; they understood our vision and found us a masterpiece that we now call home."
            </h3>
<div className="flex items-center justify-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-zinc-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="text-left">
<p className="text-sm font-medium text-zinc-900">Elena Richardson</p>
<p className="text-xs text-zinc-500">Architectural Designer</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto bg-zinc-900 rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 px-6 py-20 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Ready to find your place?</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto font-light">Join thousands of homeowners who found their dream property through our platform.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 rounded-xl text-sm font-medium transition-colors">Browse Homes</button>
<button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 px-6 py-3 rounded-xl text-sm font-medium transition-colors">Contact Agent</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:city-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-base text-zinc-900">AURA.</span>
</a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        Redefining modern living with a curated selection of exceptional properties. Minimalist design for maximum comfort.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Browse</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sell</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Agents</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
<p className="text-xs text-zinc-400 mb-4 md:mb-0">© 2023 Aura Real Estate. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
