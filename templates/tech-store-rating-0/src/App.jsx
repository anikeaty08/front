import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function navigateTo(viewName) {
            // Hide all views
            const views = ['home', 'category', 'subcategory', 'results'];
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if(el) {
                    el.classList.add('hidden-view');
                    el.classList.remove('fade-in');
                }
            });

            // Show selected view
            const target = document.getElementById(`view-${viewName}`);
            if(target) {
                target.classList.remove('hidden-view');
                // Trigger reflow to restart animation
                void target.offsetWidth; 
                target.classList.add('fade-in');
                // Scroll to top
                window.scrollTo(0,0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 border-slate-100">
<div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-[#1E3A8A]">STORERANK BD</span>
</div>

<button className="p-2 hover:text-[#1E3A8A] transition-colors text-slate-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow max-w-2xl mx-auto w-full px-6 py-8 pb-20">

<section className="fade-in" id="view-home">
<div className="text-center py-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium text-[#1E3A8A] mb-4 bg-blue-50 border-blue-100">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                    Trusted by 50k+ Shoppers
                </span>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4 text-slate-900">
                    Find Trusted Stores <br className="hidden sm:block"/>Before You Buy
                </h1>
<p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
                    Don't get confused by Google results. Compare verified online stores in Bangladesh in seconds.
                </p>
</div>
<div className="mt-8">
<h2 className="text-xs font-semibold uppercase tracking-wider mb-4 pl-1 text-slate-400">Browse Categories</h2>
<div className="grid grid-cols-2 gap-4">

<div className="group p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-3 bg-white border-slate-100 hover:border-blue-100" onclick="navigateTo('category')">
<div className="w-12 h-12 rounded-full text-[#1E3A8A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-blue-50">
<iconify-icon icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-800">Electronics</span>
</div>

<div className="group p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-3 opacity-60 hover:opacity-100 bg-white border-slate-100 hover:border-blue-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-50 text-purple-600">
<iconify-icon icon="solar:t-shirt-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-800">Fashion</span>
</div>
<div className="group p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-3 opacity-60 hover:opacity-100 bg-white border-slate-100 hover:border-blue-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-800">Home</span>
</div>
<div className="group p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-3 opacity-60 hover:opacity-100 bg-white border-slate-100 hover:border-blue-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-50 text-orange-600">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-800">Gadgets</span>
</div>
</div>
</div>
</section>

<section className="hidden-view" id="view-category">
<button className="group flex items-center gap-1 text-sm hover:text-[#1E3A8A] mb-6 transition-colors text-slate-400" onclick="navigateTo('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="16"></iconify-icon>
                Back to Home
            </button>
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Electronics</h1>
<p className="text-sm text-slate-500 mt-1">Select a subcategory to find stores.</p>
</div>
<div className="space-y-3">

<div className="group p-4 rounded-xl border shadow-sm hover:shadow-md hover:border-[#1E3A8A]/20 transition-all cursor-pointer flex items-center justify-between bg-white border-slate-100" onclick="navigateTo('subcategory')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg text-[#1E3A8A] flex items-center justify-center bg-blue-50">
<iconify-icon icon="solar:monitor-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Computer Accessories</h3>
<p className="text-xs text-slate-400">Mouse, Keyboard, Monitors</p>
</div>
</div>
<iconify-icon className="group-hover:text-[#1E3A8A] transition-colors text-slate-300" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>

<div className="group p-4 rounded-xl border shadow-sm flex items-center justify-between opacity-60 cursor-not-allowed bg-white border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg text-slate-500 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Mobile Accessories</h3>
<p className="text-xs text-slate-400">Chargers, Cases, Protectors</p>
</div>
</div>
</div>
<div className="group p-4 rounded-xl border shadow-sm flex items-center justify-between opacity-60 cursor-not-allowed bg-white border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg text-slate-500 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Audio Devices</h3>
<p className="text-xs text-slate-400">Speakers, Headphones</p>
</div>
</div>
</div>
<div className="group p-4 rounded-xl border shadow-sm flex items-center justify-between opacity-60 cursor-not-allowed bg-white border-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg text-slate-500 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:ssd-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Storage Devices</h3>
<p className="text-xs text-slate-400">SSD, HDD, Pen Drives</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden-view" id="view-subcategory">
<button className="group flex items-center gap-1 text-sm hover:text-[#1E3A8A] mb-6 transition-colors text-slate-400" onclick="navigateTo('category')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="16"></iconify-icon>
                Electronics
            </button>
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Computer Accessories</h1>
<p className="text-sm text-slate-500 mt-1">Which product are you looking for?</p>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="group p-5 rounded-xl border shadow-sm hover:border-[#1E3A8A] transition-all cursor-pointer text-center bg-white hover:bg-blue-50/50 border-slate-100" onclick="navigateTo('results')">
<div className="mx-auto w-12 h-12 rounded-full text-[#1E3A8A] mb-3 flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors bg-blue-50">
<iconify-icon icon="solar:mouse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Mouse</h3>
</div>

<div className="group p-5 rounded-xl border shadow-sm transition-all cursor-pointer text-center opacity-70 bg-white border-slate-100 hover:border-slate-300">
<div className="mx-auto w-12 h-12 rounded-full text-slate-500 mb-3 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:keyboard-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Keyboard</h3>
</div>
<div className="group p-5 rounded-xl border shadow-sm transition-all cursor-pointer text-center opacity-70 bg-white border-slate-100 hover:border-slate-300">
<div className="mx-auto w-12 h-12 rounded-full text-slate-500 mb-3 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:headphones-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Headphone</h3>
</div>
<div className="group p-5 rounded-xl border shadow-sm transition-all cursor-pointer text-center opacity-70 bg-white border-slate-100 hover:border-slate-300">
<div className="mx-auto w-12 h-12 rounded-full text-slate-500 mb-3 flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:videocamera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Webcam</h3>
</div>
</div>
</section>

<section className="hidden-view" id="view-results">
<button className="group flex items-center gap-1 text-sm hover:text-[#1E3A8A] mb-6 transition-colors text-slate-400" onclick="navigateTo('subcategory')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="16"></iconify-icon>
                Computer Accessories
            </button>
<div className="mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Best Stores for Mouse</h1>
<p className="text-sm text-slate-500 mt-1">Comparing 5 trusted stores based on service &amp; price.</p>
</div>

<div className="space-y-4">

<div className="rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-white border-slate-200">

<div className="p-4 border-b flex items-center justify-between bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-xs font-bold tracking-tighter text-white">
                                ST
                            </div>
<div>
<h3 className="text-base font-semibold leading-none text-slate-900">Star Tech</h3>
<span className="text-xs font-medium text-slate-400">Official Partner</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border bg-emerald-50 text-emerald-700 border-emerald-100">
<iconify-icon icon="solar:medal-star-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">9.4/10 Trust</span>
</div>
</div>

<div className="p-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
<div className="flex items-start gap-2">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:star-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Avg. Rating</span>
<span className="font-medium text-slate-700">4.8 Stars (2k+)</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:tag-price-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Price Range</span>
<span className="font-medium text-slate-700">৳800 – ৳15,000</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:box-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Delivery</span>
<span className="font-medium text-slate-700">1–3 Days</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Return Policy</span>
<span className="font-medium text-emerald-600">7 Days Easy Return</span>
</div>
</div>
</div>

<div className="p-4 pt-0 flex gap-3">
<button className="flex-1 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-white">
                            Explore Product
                            <iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</button>
<button className="px-4 py-2.5 border text-sm font-medium rounded-lg transition-colors border-slate-200 text-slate-700 hover:bg-slate-50">
                            Details
                        </button>
</div>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-white border-slate-200">
<div className="p-4 border-b flex items-center justify-between bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold tracking-tighter bg-slate-800 text-white">
                                RC
                            </div>
<div>
<h3 className="text-base font-semibold leading-none text-slate-900">Ryans Computers</h3>
<span className="text-xs font-medium text-slate-400">Verified Seller</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-100">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">8.9/10 Trust</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
<div className="flex items-start gap-2">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:star-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Avg. Rating</span>
<span className="font-medium text-slate-700">4.7 Stars (1.5k+)</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:tag-price-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Price Range</span>
<span className="font-medium text-slate-700">৳750 – ৳16,500</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:box-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Delivery</span>
<span className="font-medium text-slate-700">2–4 Days</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Return Policy</span>
<span className="font-medium text-slate-700">3 Days Return</span>
</div>
</div>
</div>
<div className="p-4 pt-0 flex gap-3">
<button className="flex-1 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-white">
                            Explore Product
                            <iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</button>
<button className="px-4 py-2.5 border text-sm font-medium rounded-lg transition-colors border-slate-200 text-slate-700 hover:bg-slate-50">
                            Details
                        </button>
</div>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-white border-slate-200">
<div className="p-4 border-b flex items-center justify-between bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold tracking-tighter bg-orange-600 text-white">
                                TL
                            </div>
<div>
<h3 className="text-base font-semibold leading-none text-slate-900">Tech Land</h3>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border bg-slate-100 text-slate-600 border-slate-200">
<span className="text-xs font-semibold">8.2/10 Trust</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
<div className="flex items-start gap-2">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:star-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Avg. Rating</span>
<span className="font-medium text-slate-700">4.5 Stars</span>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:tag-price-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-slate-400">Price Range</span>
<span className="font-medium text-slate-700">৳650 – ৳12,000</span>
</div>
</div>
</div>
<div className="p-4 pt-0 flex gap-3">
<button className="flex-1 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-white">
                            Explore Product
                            <iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</button>
<button className="px-4 py-2.5 border text-sm font-medium rounded-lg transition-colors border-slate-200 text-slate-700 hover:bg-slate-50">
                            Details
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t py-8 text-center text-sm bg-white border-slate-100 text-slate-400">
<p>© 2023 StoreRank BD. Helping you buy safe.</p>
</footer>



    </>
  );
}
