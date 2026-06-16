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
purina: {
red: '#D71920',
dark: '#1A1A1A',
gray: '#F4F4F4',
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
      

<div className="bg-purina-red text-white py-2 px-4 text-xs font-medium tracking-wide">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="hidden md:flex gap-6">
<a className="hover:underline opacity-90" href="#">Contact Us</a>
<a className="hover:underline opacity-90" href="#">Newsletter</a>
</div>
<div className="flex items-center gap-2 ml-auto">
<span>Sign In / Join</span>
<iconify-icon height="16" icon="solar:user-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">

<div className="w-8 h-8 pattern-checkered rounded-sm flex-shrink-0"></div>
<a className="text-3xl font-bold tracking-tight text-purina-red uppercase" href="#" style={{letterSpacing: '-1px'}}>
                    PURINA
                </a>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
<div className="group relative cursor-pointer h-20 flex items-center border-b-2 border-transparent hover:border-purina-red transition-colors">
<span>Dogs</span>
<iconify-icon className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="group relative cursor-pointer h-20 flex items-center border-b-2 border-transparent hover:border-purina-red transition-colors">
<span>Cats</span>
<iconify-icon className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="group relative cursor-pointer h-20 flex items-center border-b-2 border-transparent hover:border-purina-red transition-colors">
<span>Brands</span>
<iconify-icon className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="hover:text-purina-red transition-colors" href="#">Articles</a>
<a className="hover:text-purina-red transition-colors" href="#">Ingredients</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-600 hover:text-purina-red transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="lg:hidden p-2 text-slate-800">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full overflow-hidden bg-slate-100">
<div className="absolute inset-0 z-0">
<img alt="Dog running" className="w-full h-full object-cover object-center brightness-95" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=2969&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-24 lg:py-40 flex flex-col justify-center h-full">
<div className="max-w-2xl text-white space-y-6">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                    Nutrition that performs. <br/>
<span className="text-white/90">Love that inspires.</span>
</h1>
<p className="text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-lg">
                    See how our advanced nutrition helps pets live longer, happier, and healthier lives.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-purina-red hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                        Find the Right Food
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purina-red text-white border border-white/30 px-8 py-3.5 rounded-full font-medium transition-all">
                        Learn About Us
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-12 bg-white" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'}}></div>
</header>

<section className="py-16 lg:py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-purina-red font-medium tracking-widest text-xs uppercase mb-2 block">Product Selector</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Find the perfect match for your pet</h2>
<p className="text-slate-500">Tailored nutrition suggestions based on age, lifestyle, and dietary needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative overflow-hidden rounded-2xl bg-purina-gray aspect-[4/3] cursor-pointer">
<img alt="Dog" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-semibold text-white mb-2">For Dogs</h3>
<p className="text-white/80 text-sm">Dry food, wet food, treats &amp; supplements</p>
</div>
<span className="bg-white text-purina-red p-3 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-purina-gray aspect-[4/3] cursor-pointer">
<img alt="Cat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-semibold text-white mb-2">For Cats</h3>
<p className="text-white/80 text-sm">Dry food, wet food, litter &amp; supplements</p>
</div>
<span className="bg-white text-purina-red p-3 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-purina-gray border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">Our Brands</h2>
<a className="text-purina-red font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View All Brands
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">PRO PLAN</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">ONE</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">FRISKIES</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">FANCY FEAST</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">BENEFUL</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
<span className="font-bold text-slate-800 tracking-tighter text-lg">TIDY CATS</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-12">Latest from the experts</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 aspect-[16/9] relative bg-slate-100">
<img alt="Puppy training" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-2 mb-3">
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Puppy</span>
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Training</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purina-red transition-colors">5 Essential Tips for Puppy Socialization</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-2">Start your puppy off on the right paw with these expert-approved socialization techniques tailored for young dogs.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 aspect-[16/9] relative bg-slate-100">
<img alt="Cat food" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex gap-2 mb-3">
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Cat</span>
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Nutrition</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purina-red transition-colors">Understanding Wet vs. Dry Cat Food</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-2">Is one better than the other? We break down the nutritional benefits of both to help you decide.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 aspect-[16/9] relative bg-slate-100">
<img alt="Senior dog" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-2 mb-3">
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Senior</span>
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">Health</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purina-red transition-colors">Caring for Your Senior Pet's Joints</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-2">As pets age, mobility can become an issue. Learn about supplements and exercises that can help.</p>
</article>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 opacity-5 pattern-checkered rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-medium mb-6 text-white/80">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                    Rewards Program
                </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Join myPurina Perks</h2>
<p className="text-slate-300 text-lg mb-8 max-w-md">Earn points on every purchase, get personalized recommendations, and exclusive access to new products.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-purina-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                        Join for Free
                    </button>
<button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-colors">
                        Sign In
                    </button>
</div>
</div>
<div className="relative">
<div className="bg-slate-800 rounded-2xl p-8 border border-white/10 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purina-red flex items-center justify-center">
<iconify-icon icon="solar:paw-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Balance</div>
<div className="font-bold text-xl">0 Points</div>
</div>
</div>
<div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="p-2 bg-slate-700 rounded-lg">
<iconify-icon className="text-slate-300" icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-sm">Scan Receipt</div>
<div className="text-xs text-slate-400">Earn 10pts per $1 spent</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-2 bg-slate-700 rounded-lg">
<iconify-icon className="text-slate-300" icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-sm">Redeem Rewards</div>
<div className="text-xs text-slate-400">Food, toys, and more</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-1">
<div className="w-8 h-8 pattern-checkered rounded-sm mb-4"></div>
<a className="text-2xl font-bold tracking-tight text-purina-red uppercase block mb-6" href="#" style={{letterSpacing: '-1px'}}>
                        PURINA
                    </a>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-purina-red transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-purina-red transition-colors" href="#"><iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon></a>
<a className="hover:text-purina-red transition-colors" href="#"><iconify-icon icon="solar:scooter-linear" width="20"></iconify-icon></a> 
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Dogs</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purina-red" href="#">Dry Food</a></li>
<li><a className="hover:text-purina-red" href="#">Wet Food</a></li>
<li><a className="hover:text-purina-red" href="#">Treats</a></li>
<li><a className="hover:text-purina-red" href="#">Puppy Food</a></li>
<li><a className="hover:text-purina-red" href="#">Senior Food</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Cats</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purina-red" href="#">Dry Food</a></li>
<li><a className="hover:text-purina-red" href="#">Wet Food</a></li>
<li><a className="hover:text-purina-red" href="#">Litter</a></li>
<li><a className="hover:text-purina-red" href="#">Kitten Food</a></li>
<li><a className="hover:text-purina-red" href="#">Senior Food</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">About</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purina-red" href="#">Careers</a></li>
<li><a className="hover:text-purina-red" href="#">Sustainability</a></li>
<li><a className="hover:text-purina-red" href="#">Our History</a></li>
<li><a className="hover:text-purina-red" href="#">Quality &amp; Safety</a></li>
<li><a className="hover:text-purina-red" href="#">News</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purina-red" href="#">Contact Us</a></li>
<li><a className="hover:text-purina-red" href="#">Satisfaction Guarantee</a></li>
<li><a className="hover:text-purina-red" href="#">Where to Buy</a></li>
<li><a className="hover:text-purina-red" href="#">Coupons</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<div className="flex flex-wrap gap-6 justify-center md:justify-start">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Use</a>
<a className="hover:text-slate-600" href="#">Accessibility</a>
<a className="hover:text-slate-600" href="#">Do Not Sell My Info</a>
</div>
<div>
                    © 2023 Nestlé Purina PetCare. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
