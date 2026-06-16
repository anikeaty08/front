import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'sja-red': '#B33420',
'sja-dark': '#942121',
'sja-black': '#1a1a1a',
'sja-gray': '#f5f5f4',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Roboto Slab', 'serif'],
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
      

<div className="bg-sja-black text-white py-2 text-xs border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 hover:text-sja-red transition-colors" href="tel:8564674834">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="tracking-wide">856-467-4834</span>
</a>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-sja-red transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
<span>Login / Register</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="block w-48 shrink-0" href="#">
<img alt="South Jersey Auction" className="w-full h-auto object-contain" src="https://www.southjerseyauction.com/wp-content/uploads/2023/05/sja_logo2.png"/>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">Home</a>
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">Auctions</a>
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">Sell with Us</a>
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">Appointments</a>
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">About</a>
<a className="text-sm font-medium hover:text-sja-red transition-colors" href="#">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="px-5 py-2.5 bg-sja-red text-white text-sm font-medium rounded-lg hover:bg-sja-dark transition-colors shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:gavel-linear" width="18"></iconify-icon>
                    Online Bidding
                </a>
</div>

<button className="lg:hidden text-sja-black" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl p-6 flex flex-col gap-4 lg:hidden" id="mobile-menu">
<a className="text-lg font-serif" href="#">Home</a>
<a className="text-lg font-serif" href="#">Auctions</a>
<a className="text-lg font-serif" href="#">Sell with Us</a>
<a className="text-lg font-serif" href="#">Appointments</a>
<a className="text-lg font-serif" href="#">Contact</a>
</div>
</header>

<section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-stone-900">
<img alt="Auction Hero" className="w-full h-full object-cover opacity-60" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/auctionsImages/308_v2.jpg"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-6">
<span className="inline-block px-4 py-1.5 rounded-full bg-sja-red/20 border border-sja-red/30 text-red-100 backdrop-blur-sm text-xs uppercase tracking-widest font-medium">
                Upcoming Auction
            </span>
<h1 className="font-serif text-5xl md:text-7xl text-white font-medium tracking-tight leading-tight drop-shadow-lg">
                Fine Estate Furnishings<br/>Art &amp; Jewelry
            </h1>
<p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
                Sunday, February 1, 2026 at 12:00 PM EST. <br/>Join us for a curated selection of rare finds and timeless pieces.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
<a className="px-8 py-3 bg-sja-red text-white rounded-lg font-medium hover:bg-sja-dark transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2" href="#">
                    View Catalog
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-3 bg-white text-sja-black rounded-lg font-medium hover:bg-stone-100 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2" href="#">
                    Register to Bid
                </a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

<div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 md:p-12 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-10 items-center">
<div className="space-y-6 flex-1">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-sja-red">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h2 className="font-serif text-3xl text-sja-black tracking-tight font-medium">Do you have an item you would like to sell?</h2>
<p className="text-stone-600 leading-relaxed font-light">
                        Leave your details and our appraisal team will contact you shortly. We specialize in estate liquidations, probate, and single item consignments.
                    </p>
</div>

<form className="w-full md:w-80 space-y-4 bg-stone-50 p-6 rounded-xl border border-stone-100">
<div>
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Name</label>
<input className="w-full px-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:border-sja-red focus:ring-1 focus:ring-sja-red bg-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Email</label>
<input className="w-full px-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:border-sja-red focus:ring-1 focus:ring-sja-red bg-white" placeholder="john@example.com" type="email"/>
</div>
<button className="w-full py-2.5 bg-sja-black text-white rounded-md font-medium hover:bg-sja-red transition-colors" type="button">
                        Get Started
                    </button>
</form>
</div>

<div className="bg-sja-red text-white rounded-2xl p-8 md:p-12 shadow-md flex flex-col justify-center">
<h3 className="font-serif text-2xl mb-6 tracking-tight font-medium">Our Services</h3>
<ul className="space-y-4 text-white/90 font-light">
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Personal Property Auctions
                    </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Live Internet Bidding
                    </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Estate Liquidations
                    </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Farm Liquidations
                    </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Free Appraisals
                    </li>
</ul>
<a className="mt-8 inline-flex items-center gap-2 text-white border-b border-white/40 pb-1 hover:border-white transition-all w-max" href="#">
                    Learn more about us <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-10">
<div className="flex justify-between items-end">
<div>
<h2 className="font-serif text-4xl text-sja-black tracking-tight font-medium mb-2">Past Auction Highlights</h2>
<p className="text-stone-500 font-light">A selection of exceptional items sold at South Jersey Auction.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sja-red font-medium hover:text-sja-dark" href="#">
                    View Archive <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative bg-stone-100">
<img alt="Costantini Dining Set" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/34802/001/a_ignore_q_80_w_400_h_400_c_fit_001.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 100</div>
</div>
<div className="p-5">
<h3 className="font-serif text-lg font-medium text-sja-black mb-2 line-clamp-2 leading-tight">Costantini Pietro MCM Style 7pc Dining Set</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">Walnut, made in Italy, oval table with 6 chairs. Excellent condition.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Est. Price</span>
<span className="font-medium text-sja-black">$2,000 - $4,000</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300 sm:col-span-2">
<div className="aspect-[16/7] overflow-hidden relative bg-stone-100">
<img alt="1966 Ford Thunderbird" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/24802/001/a_ignore_q_80_w_400_h_400_c_fit_001.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 100</div>
</div>
<div className="p-5">
<h3 className="font-serif text-xl font-medium text-sja-black mb-2 leading-tight">1966 Ford Thunderbird Convertible</h3>
<p className="text-sm text-stone-500 mb-4">Car show winning condition, back seat Tonneau cover, 126K miles, 390 V-8.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Start Price</span>
<span className="font-medium text-sja-black text-lg">$10,000</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative bg-stone-100">
<img alt="John Deere Tractor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/26909/001/a_ignore_q_80_w_400_h_400_c_fit_001.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 100</div>
</div>
<div className="p-5">
<h3 className="font-serif text-lg font-medium text-sja-black mb-2 line-clamp-2 leading-tight">John Deere 3032 4x4 Compact Tractor</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">With 300E loader, bought new in 2020, very low hours.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Est. Price</span>
<span className="font-medium text-sja-black">$15,000+</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative bg-stone-100">
<img alt="Stickley Desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/33684/002/a_ignore_q_80_w_400_h_400_c_fit_002.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 102</div>
</div>
<div className="p-5">
<h3 className="font-serif text-lg font-medium text-sja-black mb-2 line-clamp-2 leading-tight">Stickley Mission Oak Paneled Desk</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">Original finish, executive desk with paneled sides and front.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Start Price</span>
<span className="font-medium text-sja-black">$500</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative bg-stone-100">
<img alt="Diamond Necklace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/23694/001/a_ignore_q_80_w_400_h_400_c_fit_001.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 389</div>
</div>
<div className="p-5">
<h3 className="font-serif text-lg font-medium text-sja-black mb-2 line-clamp-2 leading-tight">12.56 ctw Diamonds Tennis Necklace</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">14kt white gold with CGI certified paperwork and 30k appraisal.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Est. Price</span>
<span className="font-medium text-sja-black">$10k - $20k</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300 sm:col-span-2">
<div className="aspect-[16/7] overflow-hidden relative bg-stone-100">
<img alt="Stickley Chest" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/cloned-images/21467/001/a_ignore_q_80_w_400_h_400_c_fit_001.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-sja-red shadow-sm">Lot 502</div>
</div>
<div className="p-5">
<h3 className="font-serif text-xl font-medium text-sja-black mb-2 leading-tight">Stickley Colonial Williamsburg Chest on Chest</h3>
<p className="text-sm text-stone-500 mb-4">Solid mahogany on Bombay base with bracket feet, fluted columns. Retailed 26K.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-4">
<span className="text-xs text-stone-400 uppercase tracking-wide">Start Price</span>
<span className="font-medium text-sja-black text-lg">$1,500</span>
</div>
</div>
</div>
</div>
<div className="text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sja-red font-medium hover:text-sja-dark px-6 py-3 border border-sja-red/20 rounded-lg bg-white" href="#">
                    View Complete Archive <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white border-t border-stone-200 py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl text-sja-black tracking-tight font-medium mb-10 text-center">Recent Auctions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-100 group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/auctionsImages/306_v1.jpg"/>
<div className="absolute inset-0 bg-sja-black/50 flex items-center justify-center">
<span className="text-white font-medium bg-sja-red px-3 py-1 rounded text-sm">Ended</span>
</div>
</div>
<div className="p-6">
<div className="text-xs text-stone-500 mb-2 uppercase tracking-wide">Dec 7, 2025</div>
<h3 className="font-serif text-lg font-medium text-sja-black mb-3">Holiday Gift Ideas Auction</h3>
<a className="text-sm text-sja-red hover:underline decoration-sja-red/50" href="#">View Results</a>
</div>
</div>

<div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-100 group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/auctionsImages/304_v2.jpg"/>
<div className="absolute inset-0 bg-sja-black/50 flex items-center justify-center">
<span className="text-white font-medium bg-sja-red px-3 py-1 rounded text-sm">Ended</span>
</div>
</div>
<div className="p-6">
<div className="text-xs text-stone-500 mb-2 uppercase tracking-wide">Nov 30, 2025</div>
<h3 className="font-serif text-lg font-medium text-sja-black mb-3">Million Dollar Ocean City Home</h3>
<a className="text-sm text-sja-red hover:underline decoration-sja-red/50" href="#">View Results</a>
</div>
</div>

<div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-100 group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://bidspirit-images.global.ssl.fastly.net/southjerseyauction/auctionsImages/303_v2.jpg"/>
<div className="absolute inset-0 bg-sja-black/50 flex items-center justify-center">
<span className="text-white font-medium bg-sja-red px-3 py-1 rounded text-sm">Ended</span>
</div>
</div>
<div className="p-6">
<div className="text-xs text-stone-500 mb-2 uppercase tracking-wide">Oct 26, 2025</div>
<h3 className="font-serif text-lg font-medium text-sja-black mb-3">Fantastic Estate Fine Furniture</h3>
<a className="text-sm text-sja-red hover:underline decoration-sja-red/50" href="#">View Results</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-white py-16">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="font-serif text-3xl tracking-tight font-medium">Stay updated on upcoming treasures</h2>
<p className="text-stone-400 font-light">Sign up to receive notifications about our upcoming auctions. We respect your privacy.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-sja-red focus:ring-1 focus:ring-sja-red placeholder-stone-500" placeholder="Your email address" type="email"/>
<button className="px-6 py-3 bg-sja-red rounded-lg font-medium hover:bg-sja-dark transition-colors">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-sja-black text-stone-400 py-16 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-6">
<img alt="South Jersey Auction" className="w-40 brightness-0 invert opacity-80" src="https://www.southjerseyauction.com/wp-content/uploads/2023/05/sja_logo2.png"/>
<p className="text-sm font-light leading-relaxed">
                    Southern New Jersey's best kept secret, offering quality fine estate furnishings and furniture through online auctions globally.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Navigation</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Current Auctions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Past Archives</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sell With Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">My Profile</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping Options</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Download App</h4>
<div className="space-y-3">
<a className="block w-36 hover:opacity-80 transition-opacity" href="#">
<img alt="App Store" src="https://www.southjerseyauction.com/wp-content/uploads/2020/10/app-1.svg"/>
</a>
<a className="block w-36 hover:opacity-80 transition-opacity" href="#">
<img alt="Google Play" src="https://www.southjerseyauction.com/wp-content/uploads/2020/10/google-play.svg"/>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-center font-light">
<p>© 2025 South Jersey Auction. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
