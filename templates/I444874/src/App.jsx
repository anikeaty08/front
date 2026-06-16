import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Initialize Lucide icons
lucide.createIcons();

// Download this page as HTML
document.getElementById('downloadBtn').addEventListener('click', () => {
    fetch(window.location.href)
        .then(res => res.text())
        .then(html => {
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'luxe-beauty-studio.html';
            a.click();
            URL.revokeObjectURL(url);
        });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col lg:flex-row gap-10">

<div className="relative w-80 h-[640px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

<div className="bg-gradient-to-br from-rose-500 to-pink-500 h-24 rounded-b-3xl px-5 pt-6 flex items-start justify-between">
<button className="text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="text-center">
<span className="text-xl font-bold text-white tracking-wide">Beauty Shop</span>
<p className="-mt-1 text-xs text-pink-100 mt-1">luxe</p>
</div>
<div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white">
<img alt="avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=45"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 pt-5 pb-4 space-y-6">

<div className="relative">
<input className="w-full rounded-full border border-gray-200 pl-12 pr-16 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-rose-400 focus:outline-none" placeholder="Find your beauty essentials..." type="text"/>
<svg className="lucide lucide-search absolute left-4 top-3.5 w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<button className="absolute right-4 top-3.5 text-rose-500">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>

<div className="">
<h2 className="font-semibold text-lg mb-1">Trending Now</h2>
<p className="text-xs text-gray-400 mb-3">Bestsellers this week</p>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl overflow-hidden">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1635011340527-f7aeac346b01?w=1080&amp;q=80"/>
<div className="p-3 bg-white">
<h3 className="font-medium text-sm">Glow Collection</h3>
<p className="text-xs text-gray-500">Radiant skin essentials</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden flex flex-col gap-3">
<div className="relative">
<img alt="" className="w-full h-19 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1470072508653-1be229b63562?w=1080&amp;q=80"/>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur rounded-lg px-2 py-1">
<p className="text-xs font-medium">Vitamin C</p>
</div>
</div>
<div className="relative">
<img alt="" className="w-full h-19 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1639738415512-1f122497ef9c?w=1080&amp;q=80"/>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur rounded-lg px-2 py-1">
<p className="text-xs font-medium">Lip Gloss</p>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="font-semibold">Beauty Tips</span>
<span className="bg-rose-100 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">67 new</span>
</div>
<div className="bg-gradient-to-r from-rose-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        89
                    </div>
</div>
<div className="flex gap-3">
<div className="text-center">
<img alt="" className="w-12 h-12 rounded-full ring-2 ring-rose-300 mb-1" src="https://i.pravatar.cc/60?img=25"/>
<p className="text-xs text-gray-500">Emma</p>
</div>
<div className="text-center">
<img alt="" className="w-12 h-12 rounded-full ring-2 ring-pink-300 mb-1" src="https://i.pravatar.cc/60?img=47"/>
<p className="text-xs text-gray-500">Zoe</p>
</div>
<div className="text-center">
<img alt="" className="w-12 h-12 rounded-full ring-2 ring-violet-300 mb-1" src="https://i.pravatar.cc/60?img=29"/>
<p className="text-xs text-gray-500">Mia</p>
</div>
</div>
</div>
</div>

<nav className="h-16 border-t border-gray-100 flex justify-around items-center bg-white/80 backdrop-blur">
<button className="flex flex-col items-center gap-1 text-rose-500">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs">Wishlist</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs">Discover</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 relative">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="text-xs">Alerts</span>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
</button>
</nav>
</div>

<div className="relative w-80 h-[640px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

<div className="h-16 px-5 pt-5 flex items-center justify-between">
<button className="text-gray-700">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="font-semibold text-lg">Browse Collections</h1>
<div className="flex gap-1">
<button className="text-gray-400">
<svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>

<div className="px-6 pb-4">
<div className="flex gap-2 bg-gray-100 p-1 rounded-2xl">
<button className="flex-1 px-4 py-2 rounded-xl text-sm font-medium bg-white text-rose-600 shadow-sm" id="tab-new">Latest Drops</button>
<button className="flex-1 px-4 py-2 rounded-xl text-sm font-medium text-gray-500" id="tab-sale">Flash Sale</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<div className="grid grid-cols-3 gap-4 text-center">

<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-rose-100 to-pink-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1564141696939-9eb6e957ccfc?w=1080&amp;q=80"/>
</div>
<p className="text-xs font-medium text-rose-600">Hair Studio</p>
<p className="text-xs text-gray-400">38 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-purple-100 to-violet-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Nail Artistry</p>
<p className="text-xs text-gray-400">22 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-emerald-100 to-teal-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1605040011513-b32585c718a7?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Body Luxe</p>
<p className="text-xs text-gray-400">45 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-amber-100 to-orange-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Face Glow</p>
<p className="text-xs text-gray-400">63 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-blue-100 to-cyan-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1566814534947-46a09bcbb88c?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Skin Therapy</p>
<p className="text-xs text-gray-400">51 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-pink-100 to-rose-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1730226995154-efe9e13db300?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Eye Magic</p>
<p className="text-xs text-gray-400">29 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-yellow-100 to-amber-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Hand Care</p>
<p className="text-xs text-gray-400">17 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-teal-100 to-emerald-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Foot Spa</p>
<p className="text-xs text-gray-400">12 items</p>
</div>
<div className="space-y-2">
<div className="rounded-2xl p-4 bg-gradient-to-br from-violet-100 to-purple-100">
<img className="w-16 h-16 object-cover rounded-xl mr-auto ml-auto" src="https://images.unsplash.com/photo-1581273154768-0a9a16887d2a?w=1080&amp;q=80"/>
</div>
<p className="text-xs text-gray-500">Color Lab</p>
<p className="text-xs text-gray-400">84 items</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-t-3xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="">
<h3 className="text-white font-semibold">Hair Studio Collection</h3>
<p className="text-rose-100 text-xs">38 Premium Products</p>
</div>
<button className="text-rose-100">
<svg className="lucide lucide-sliders-horizontal w-5 h-5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/90 backdrop-blur rounded-2xl p-3">
<img className="w-full h-32 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1546060432-b90a6441048f?w=1080&amp;q=80"/>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-700">Silk Shampoo</p>
<p className="text-xs text-gray-500">$28.99</p>
</div>
<button className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="bg-white/90 backdrop-blur rounded-2xl p-3">
<img className="w-full h-32 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1728949202477-bad2935775cb?w=1080&amp;q=80"/>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-700">Repair Mask</p>
<p className="text-xs text-gray-500">$34.99</p>
</div>
<button className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 bg-rose-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-rose-700 transition-colors" id="downloadBtn">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
    Export Design
</button>


    </>
  );
}
