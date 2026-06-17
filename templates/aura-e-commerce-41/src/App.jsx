import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-gray-100 py-2 text-center">
<p className="text-xs font-medium text-gray-900">New Styles Added: Up to 40% Off. <a className="underline decoration-1 underline-offset-2" href="#">Shop All Our New Markdowns</a></p>
</div>

<header className="sticky z-50 bg-white w-full top-0">
<div className="flex lg:px-12 pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<div className="lg:hidden">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<a className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:mr-8" href="#">
<span className="text-2xl font-bold tracking-tighter uppercase">AURA</span>
</a>

<nav className="hidden lg:flex space-x-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">New &amp; Featured</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Men</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Women</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Kids</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Sale</a>
</nav>

<div className="flex items-center space-x-4 lg:space-x-6">
<div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 group hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-search w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-24 lg:w-32 placeholder:text-gray-500 group-hover:placeholder:text-gray-700" placeholder="Search" type="text"/>
</div>
<button className="hover:opacity-70">
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button className="hover:opacity-70">
<svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</header>

<section className="md:px-6 lg:px-12 w-full mb-12 pr-0 pl-0">
<div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden md:rounded-lg bg-gray-100">
<img alt="Hero Image" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a458ab78-289b-475b-8c50-d1f49661ba57_3840w.webp"/>

<div className="flex flex-col md:p-12 bg-gradient-to-t from-black/40 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-start justify-end">
<h1 className="uppercase leading-none md:text-7xl lg:text-7xl text-5xl font-bold text-white tracking-tighter mb-4">Wear Your <br/>Attitude</h1>
<p className="leading-relaxed md:text-sm text-base font-normal text-zinc-200 max-w-sm mb-6">Bold designs. Limitless expression. The street is your canvas—own your style.</p>
<div className="flex space-x-4">
<button className="hover:bg-gray-200 transition-colors text-sm font-medium text-slate-50 bg-slate-950 rounded-full pt-2 pr-6 pb-2 pl-6">Shop Men</button>
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Shop Women</button>
</div>
</div>
</div>
</section>

<div className="px-6 lg:px-12 mb-6 flex justify-between items-end">
<h2 className="text-2xl font-medium tracking-tight">Trending Now</h2>
<div className="flex space-x-2">
<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<section className="pl-6 lg:pl-12 mb-20 overflow-hidden">
<div className="flex space-x-4 overflow-x-auto no-scrollbar pb-8 pr-6 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
<div className="bg-gray-50 aspect-[4/5] w-full mb-4 overflow-hidden relative">
<img alt="Shoe" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23e5a38e-f375-43eb-808b-ef2bba035ce7_1600w.webp"/>
<span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium text-gray-900">Best Seller</span>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Aura Air Max</h3>
<p className="text-sm text-gray-500">Women's Apprel</p>
</div>
<span className="text-sm font-medium">$180</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
<div className="bg-gray-50 aspect-[4/5] w-full mb-4 overflow-hidden relative">
<img alt="Apparel" className="object-top group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1020&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Tech Fleece Hoodie</h3>
<p className="text-gray-500 text-sm">Women's Apparel</p>
</div>
<span className="text-sm font-medium">$110</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
<div className="bg-gray-50 aspect-[4/5] w-full mb-4 overflow-hidden relative">
<img alt="Shoe" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d8b5785-f305-4e90-a65e-f7bfcdd2a286_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">White Fleece Hoodie</h3>
<p className="text-sm text-gray-500">Unisex Apparel</p>
</div>
<span className="text-sm font-medium">$130</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
<div className="bg-gray-50 aspect-[4/5] w-full mb-4 overflow-hidden relative">
<img alt="Apparel" className="object-top group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d8d103a-35f4-4e23-acfb-1bca154ea9fd_1600w.webp"/>
<span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium text-gray-900">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Essential Crew</h3>
<p className="text-gray-500 text-sm">Women's Lifestyle</p>
</div>
<span className="text-sm font-medium">$75</span>
</div>
</div>
</div>
</section>

<section className="w-full px-0 md:px-6 lg:px-12 mb-24">
<div className="flex flex-col md:flex-row w-full gap-6">
<div className="flex-1 relative h-[70vh] md:h-[85vh] bg-gray-100 md:rounded-lg overflow-hidden group">
<img alt="Featured 1" className="object-center group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"/>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1">Latest Drops</h3>
<p className="text-white text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">Iconic Looks</p>
<div className="">
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Shop Looks</button>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 mb-24">
<h2 className="text-2xl font-medium tracking-tight mb-8">The Essentials</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="relative aspect-[3/4] md:aspect-[4/5] bg-gray-100 overflow-hidden group cursor-pointer">
<img className="object-center group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/247e381f-e69f-4c75-8047-670f08cf08e1_1600w.webp"/>
<div className="absolute bottom-8 left-8">
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Men's</button>
</div>
</div>

<div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden group cursor-pointer bg-gray-100 relative">
<img className="object-center group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cae43a1a-81a8-4a41-a92e-675c99bd3542_1600w.webp"/>
<div className="absolute bottom-8 left-8">
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Women's</button>
</div>
</div>

<div className="relative aspect-[3/4] md:aspect-[4/5] bg-gray-100 overflow-hidden group cursor-pointer">
<img className="object-top group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1695262620870-ee68192264e3?w=1600&amp;q=80"/>
<div className="absolute bottom-8 left-8">
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Kids'</button>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 mb-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4 mx-auto text-center md:text-left">
<div>
<h4 className="font-medium mb-4 text-sm">Icons</h4>
<ul className="space-y-3 text-gray-500 text-sm">
<li className="hover:text-gray-900 cursor-pointer">Air Force 1</li>
<li className="hover:text-gray-900 cursor-pointer">Huarache</li>
<li className="hover:text-gray-900 cursor-pointer">Air Max 90</li>
<li className="hover:text-gray-900 cursor-pointer">Air Max 95</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm">Shoes</h4>
<ul className="space-y-3 text-gray-500 text-sm">
<li className="hover:text-gray-900 cursor-pointer">All Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Custom Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Jordan Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Running Shoes</li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm">Clothing</h4>
<ul className="space-y-3 text-gray-500 text-sm">
<li className="hover:text-gray-900 cursor-pointer">All Clothing</li>
<li className="hover:text-gray-900 cursor-pointer">Modest Wear</li>
<li className="hover:text-gray-900 cursor-pointer">Hoodies &amp; Pullovers</li>
<li className="hover:text-gray-900 cursor-pointer">Shirts &amp; Tops</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm">Kids'</h4>
<ul className="space-y-3 text-gray-500 text-sm">
<li className="hover:text-gray-900 cursor-pointer">Infant &amp; Toddler Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Kids' Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Kids' Jordan Shoes</li>
<li className="hover:text-gray-900 cursor-pointer">Kids' Basketball Shoes</li>
</ul>
</div>
</div>
</section>

<footer className="bg-black text-white pt-16 pb-8">
<div className="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

<div className="col-span-1 md:col-span-2">
<ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
<li className="cursor-pointer hover:text-gray-400">Find A Store</li>
<li className="cursor-pointer hover:text-gray-400">Become A Member</li>
<li className="cursor-pointer hover:text-gray-400">Send Us Feedback</li>
<li className="cursor-pointer hover:text-gray-400">Student Discounts</li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-wide mb-4 text-gray-400">Get Help</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li className="cursor-pointer hover:text-white">Order Status</li>
<li className="cursor-pointer hover:text-white">Delivery</li>
<li className="cursor-pointer hover:text-white">Returns</li>
<li className="cursor-pointer hover:text-white">Payment Options</li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-wide mb-4 text-gray-400">About Aura</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li className="cursor-pointer hover:text-white">News</li>
<li className="cursor-pointer hover:text-white">Careers</li>
<li className="cursor-pointer hover:text-white">Investors</li>
<li className="cursor-pointer hover:text-white">Sustainability</li>
</ul>
</div>

<div className="md:col-span-2 lg:col-span-2 lg:flex lg:justify-end items-start gap-4">
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</button>
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</button>
<button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
</div>
</div>

<div className="px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
<div className="flex items-center gap-2 text-xs text-white cursor-pointer">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>India</span>
</div>
<span className="text-xs text-gray-500">© 2023 AURA, Inc. All Rights Reserved</span>
</div>
<div className="flex flex-wrap gap-4 md:gap-6 text-xs text-gray-500">
<a className="hover:text-white" href="#">Guides</a>
<a className="hover:text-white" href="#">Terms of Sale</a>
<a className="hover:text-white" href="#">Terms of Use</a>
<a className="hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
