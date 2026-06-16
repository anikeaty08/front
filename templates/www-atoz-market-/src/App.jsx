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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
},
brand: {
blue: '#2874f0', // Reference color, adapted to style
yellow: '#ffe500'
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
      

<nav className="sticky z-50 bg-white border-gray-200 border-b top-0">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center justify-between h-16 gap-4 sm:gap-8">

<div className="flex-shrink-0 flex items-center gap-1 cursor-pointer min-w-fit">
<span className="text-xl font-bold tracking-tighter italic text-gray-900">AtoZ</span>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-gray-400 leading-none">Explore</span>
<span className="text-[10px] font-semibold text-yellow-500 flex items-center leading-none">Plus <iconify-icon className="ml-0.5" height="10" icon="lucide:plus" width="10"></iconify-icon></span>
</div>
</div>

<div className="flex-1 max-w-3xl">
<div className="relative">
<input __gchrome_uniqueid="1" className="block placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-sm text-gray-900 bg-gray-50 w-full border-gray-200 border rounded-lg pt-2.5 pr-10 pb-2.5 pl-4 shadow-sm" placeholder="Search for products, brands and more" type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon height="18" icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center gap-6 flex-shrink-0">
<button className="hidden sm:flex items-center px-4 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 text-sm font-medium rounded-md transition-colors">
                        Login
                    </button>
<button className="hidden md:flex items-center gap-1 text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors">
<span>Become a Seller</span>
</button>
<button className="relative flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors group">
<div className="relative">
<iconify-icon height="20" icon="lucide:shopping-cart" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">2</span>
</div>
<span className="hidden sm:inline text-sm">Cart</span>
</button>
</div>
</div>
</div>
</nav>

<div className="bg-white border-b border-gray-200 shadow-sm mb-3">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center justify-between py-3 overflow-x-auto no-scrollbar gap-8">
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:percent" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Top Offers</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Mobiles</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Electronics</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:shirt" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Fashion</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:armchair" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Home</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:washing-machine" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Appliances</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:plane" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Travel</span>
</a>
<a className="flex flex-col items-center gap-1.5 group min-w-[64px] cursor-pointer" href="#">
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700" height="20" icon="lucide:baby" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 text-center whitespace-nowrap">Toys</span>
</a>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-4">

<div className="relative w-full h-48 md:h-72 bg-gray-900 rounded-lg overflow-hidden shadow-sm">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=2101&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
<div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
<span className="text-yellow-400 font-semibold tracking-wide text-xs md:text-sm uppercase mb-2">Big Savings Day</span>
<h1 className="text-2xl md:text-5xl font-semibold text-white tracking-tight mb-4">Latest Electronics <br/> Up to 40% Off</h1>
<div className="flex gap-4">
<button className="hover:bg-gray-100 transition-colors text-sm font-medium text-gray-900 bg-white rounded-md pt-2.5 pr-6 pb-2.5 pl-6">
                        Shop Now
                    </button>
<button className="text-white px-6 py-2.5 rounded-md font-medium text-sm border border-white/30 hover:bg-white/10 transition-colors">
                        View Offers
                    </button>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
</div>
<button className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-16 bg-white/20 backdrop-blur-sm rounded-r flex items-center justify-center text-white hover:bg-white/30 transition-colors">
<iconify-icon height="24" icon="lucide:chevron-left" width="24"></iconify-icon>
</button>
<button className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-16 bg-white/20 backdrop-blur-sm rounded-l flex items-center justify-center text-white hover:bg-white/30 transition-colors">
<iconify-icon height="24" icon="lucide:chevron-right" width="24"></iconify-icon>
</button>
</div>

<div className="flex flex-col sm:flex-row bg-white border-gray-200 border rounded-md pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon height="20" icon="lucide:credit-card" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Partner Bank Offer</p>
<p className="text-xs text-gray-500">10% Instant Discount on HDFC Bank Cards</p>
</div>
</div>
<div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon height="20" icon="lucide:banknote" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Pay Later</p>
<p className="text-xs text-gray-500">Get ₹500 Gift Card on sign up</p>
</div>
</div>
<button className="text-xs font-medium text-gray-900 underline ml-auto">View T&amp;C</button>
</div>

<div className="flex flex-col md:flex-row bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">

<div className="w-full md:w-64 bg-no-repeat bg-bottom bg-cover p-6 flex flex-col items-center text-center justify-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] relative group">
<div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors"></div>
<div className="relative z-10">
<h2 className="text-2xl font-light text-gray-900 mb-2">Best of<span className="font-semibold">Electronics</span></h2>
<button className="bg-gray-900 text-white px-5 py-2 rounded shadow-sm text-sm font-medium hover:bg-gray-800 transition-colors">View All</button>
</div>
</div>

<div className="flex-1 p-4 overflow-x-auto no-scrollbar">
<div className="flex gap-6 min-w-max">

<div className="w-48 flex flex-col gap-2 p-2 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
<div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-gray-900 truncate">Smart Watches</p>
<p className="text-xs text-green-600 font-medium">From $29</p>
<p className="text-xs text-gray-400">Apple, Samsung...</p>
</div>
</div>

<div className="w-48 flex flex-col gap-2 p-2 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
<div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-gray-900 truncate">Headphones</p>
<p className="text-xs text-green-600 font-medium">Up to 60% Off</p>
<p className="text-xs text-gray-400">Sony, Bose &amp; More</p>
</div>
</div>

<div className="w-48 flex flex-col gap-2 p-2 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
<div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-gray-900 truncate">Cameras</p>
<p className="text-xs text-green-600 font-medium">Shop Now</p>
<p className="text-xs text-gray-400">Canon, Nikon</p>
</div>
</div>

<div className="w-48 flex flex-col gap-2 p-2 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
<div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-gray-900 truncate">Power Banks</p>
<p className="text-xs text-green-600 font-medium">From $15</p>
<p className="text-xs text-gray-400">Ambrane, Mi</p>
</div>
</div>

<div className="w-48 flex flex-col gap-2 p-2 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
<div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4">
<img className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-gray-900 truncate">Monitors</p>
<p className="text-xs text-green-600 font-medium">Min 30% Off</p>
<p className="text-xs text-gray-400">Dell, LG</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
<div className="flex items-center justify-between mb-4 px-2">
<h2 className="text-lg font-semibold text-gray-900">Beauty, Food, Toys &amp; More</h2>
<button className="bg-gray-900 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">View All</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-md mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>
</div>
<p className="text-sm font-medium text-gray-900 mb-1 truncate">Premium Cosmetics</p>
<p className="text-xs text-green-600 font-semibold mb-2">Min 50% Off</p>
<p className="text-xs text-gray-400">Lakme, Maybelline</p>
</div>

<div className="group border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-md mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm font-medium text-gray-900 mb-1 truncate">Sport Shoes</p>
<p className="text-xs text-green-600 font-semibold mb-2">40-60% Off</p>
<p className="text-xs text-gray-400">Nike, Adidas, Puma</p>
</div>

<div className="group border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-md mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm font-medium text-gray-900 mb-1 truncate">Kids Toys</p>
<p className="text-xs text-green-600 font-semibold mb-2">From $19</p>
<p className="text-xs text-gray-400">Lego, Hotwheels</p>
</div>

<div className="group border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-md mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm font-medium text-gray-900 mb-1 truncate">Fashion Watches</p>
<p className="text-xs text-green-600 font-semibold mb-2">Up to 80% Off</p>
<p className="text-xs text-gray-400">Fossil, Titan</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-gray-900 rounded-md overflow-hidden relative h-64 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<h3 className="text-2xl font-bold text-white mb-2">Zara</h3>
<p className="text-gray-200 text-sm mb-4">New Season Collection</p>
<button className="bg-white text-gray-900 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider">Explore</button>
</div>
</div>
<div className="bg-gray-900 rounded-md overflow-hidden relative h-64 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<h3 className="text-2xl font-bold text-white mb-2">Modern Home</h3>
<p className="text-gray-200 text-sm mb-4">Furniture &amp; Decor</p>
<button className="bg-white text-gray-900 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider">Explore</button>
</div>
</div>
<div className="bg-gray-900 rounded-md overflow-hidden relative h-64 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<h3 className="text-2xl font-bold text-white mb-2">Nike Air</h3>
<p className="text-gray-200 text-sm mb-4">Running Essentials</p>
<button className="bg-white text-gray-900 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider">Explore</button>
</div>
</div>
</div>
</main>

<footer className="bg-gray-900 text-gray-400 mt-12 py-12 border-t border-gray-800 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h5 className="text-gray-200 font-medium mb-4 uppercase tracking-wider text-xs">About</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Corporate Information</a></li>
</ul>
</div>
<div>
<h5 className="text-gray-200 font-medium mb-4 uppercase tracking-wider text-xs">Help</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cancellation &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Report Infringement</a></li>
</ul>
</div>
<div>
<h5 className="text-gray-200 font-medium mb-4 uppercase tracking-wider text-xs">Policy</h5>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Return Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1 border-l border-gray-800 pl-0 md:pl-8">
<h5 className="text-gray-200 font-medium mb-4 uppercase tracking-wider text-xs">Mail Us:</h5>
<p className="text-xs leading-relaxed mb-4">
                        AtoZ Market Private Limited,<br/>
                        Buildings Alyssa, Begonia &amp;<br/>
                        Clove Embassy Tech Village,<br/>
                        Outer Ring Road, Devarabeesanahalli Village,<br/>
                        Bengaluru, 560103,<br/>
                        Karnataka, India
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="lucide:facebook" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="lucide:youtube" strokeWidth="1.5" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xs">
<iconify-icon height="14" icon="lucide:briefcase" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-wide">Become a Seller</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xs">
<iconify-icon height="14" icon="lucide:star" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-wide">Advertise</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xs">
<iconify-icon height="14" icon="lucide:gift" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-wide">Gift Cards</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center text-gray-900 font-bold text-xs">
<iconify-icon height="14" icon="lucide:help-circle" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-wide">Help Center</span>
</div>
<div className="md:ml-auto flex items-center gap-2">
<span className="text-xs">© 2023 A to Z Market.</span>
<img alt="Payment" className="h-4 opacity-50 bg-white px-1 rounded" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"/>
<img alt="Payment" className="h-4 opacity-50 bg-white px-1 rounded" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"/>
</div>
</div>
</div>
</footer>

    </>
  );
}
