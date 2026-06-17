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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="bg-black/90 backdrop-blur-md fixed top-0 w-full z-50 text-xs text-gray-300">
<div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">

<a aria-label="Apple" className="text-gray-100 font-semibold tracking-tighter text-base hover:text-white transition-colors" href="#">APPLE</a>

<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-white transition-colors" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Mac</a>
<a className="hover:text-white transition-colors" href="#">iPad</a>
<a className="hover:text-white transition-colors" href="#">iPhone</a>
<a className="hover:text-white transition-colors" href="#">Watch</a>
<a className="hover:text-white transition-colors" href="#">Vision</a>
<a className="hover:text-white transition-colors" href="#">AirPods</a>
<a className="hover:text-white transition-colors" href="#">TV &amp; Home</a>
<a className="hover:text-white transition-colors" href="#">Entertainment</a>
<a className="hover:text-white transition-colors" href="#">Accessories</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>

<div className="flex gap-5 items-center text-gray-300">
<button aria-label="Search" className="hover:text-white transition-colors flex items-center">
<iconify-icon className="text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Shopping Bag" className="hover:text-white transition-colors flex items-center">
<iconify-icon className="text-base" icon="solar:bag-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Menu" className="md:hidden hover:text-white transition-colors flex items-center">
<iconify-icon className="text-base" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="mt-12 bg-gray-50 text-center py-3 px-4 text-xs md:text-sm text-gray-700">
        Get up to $800 in credit toward a new device when you trade in an eligible smartphone. 
        <a className="text-blue-600 hover:underline inline-flex items-center group ml-1" href="#">
            Shop online 
            <iconify-icon className="text-xs ml-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<main>

<section className="bg-black text-white flex flex-col items-center text-center pt-16 md:pt-24 pb-0 overflow-hidden relative min-h-[600px] md:min-h-[750px] w-full">
<div className="relative z-20 px-4">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter">iPhone 15 Pro</h1>
<h2 className="text-xl md:text-2xl mt-2 font-normal text-gray-300 tracking-tight">Titanium. So strong. So light. So Pro.</h2>
<div className="flex flex-wrap justify-center gap-6 mt-6 text-lg">
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                        Learn more <iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                        Buy <iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 w-full max-w-3xl h-[400px] md:h-[550px] flex justify-center items-end">
<div className="w-[85%] h-[90%] border-t-4 border-l-4 border-r-4 border-gray-800 rounded-t-[3rem] bg-gradient-to-b from-gray-900 to-black relative shadow-[0_-30px_60px_rgba(255,255,255,0.03)] flex justify-center pt-8">
<div className="w-1/3 h-6 rounded-full bg-black/50 blur-md absolute top-4"></div>
<div className="w-[96%] h-[98%] border-t border-l border-r border-gray-700/50 rounded-t-[2.5rem] bg-black"></div>
</div>
</div>
</section>

<section className="bg-gray-50 text-gray-900 flex flex-col items-center text-center pt-16 md:pt-24 pb-0 overflow-hidden relative min-h-[600px] md:min-h-[750px] mt-3 w-full border-t border-white">
<div className="relative z-20 px-4">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter">iPhone 15</h1>
<h2 className="text-xl md:text-2xl mt-2 font-normal text-gray-700 tracking-tight">New camera. New design. Newphoria.</h2>
<div className="flex flex-wrap justify-center gap-6 mt-6 text-lg">
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                        Learn more <iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                        Buy <iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 w-full max-w-2xl h-[350px] md:h-[500px] flex justify-center items-end">
<div className="w-[80%] h-[90%] border border-gray-200 rounded-t-[3rem] bg-gradient-to-br from-pink-50 via-white to-blue-50 relative shadow-2xl flex justify-center pt-4">
<div className="w-1/2 h-4 rounded-full bg-gray-200/50 absolute top-2 blur-sm"></div>
<div className="w-[96%] h-[98%] border border-gray-100 rounded-t-[2.5rem] bg-white shadow-inner"></div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 max-w-[2560px] mx-auto w-full">

<div className="bg-black text-white relative h-[550px] flex flex-col items-center pt-14 text-center overflow-hidden w-full">
<div className="relative z-20 px-4 flex flex-col items-center">
<div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold tracking-tighter">
<iconify-icon className="text-3xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
                        WATCH
                    </div>
<p className="text-xs tracking-[0.2em] text-red-500 font-medium mt-2">SERIES 9</p>
<p className="text-lg mt-2 text-gray-300 tracking-tight">Smarter. Brighter. Mightier.</p>
<div className="flex gap-4 mt-5 text-base">
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                            Learn more <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                            Buy <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute -bottom-16 w-56 h-72 rounded-[3.5rem] bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl flex items-center justify-center p-2">
<div className="w-full h-full rounded-[3rem] bg-black border border-gray-600 flex items-center justify-center overflow-hidden relative">
<div className="w-32 h-32 rounded-full border-8 border-red-500/20 border-t-red-500 animate-spin" style={{animationDuration: '4s'}}></div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>

<div className="bg-gray-50 text-gray-900 relative h-[550px] flex flex-col items-center pt-14 text-center overflow-hidden w-full">
<div className="relative z-20 px-4 flex flex-col items-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter">iPad</h3>
<p className="text-lg mt-2 text-gray-700 tracking-tight">Lovable. Drawable. Magical.</p>
<div className="flex gap-4 mt-5 text-base">
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                            Learn more <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                            Buy <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute -bottom-12 w-[80%] max-w-sm aspect-[3/4] border border-gray-200 rounded-3xl bg-white shadow-xl flex flex-col items-center pt-2 rotate-6 hover:rotate-2 transition-transform duration-700 ease-out">
<div className="w-[96%] h-[96%] border border-gray-100 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">

<div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-400 rounded-full opacity-50"></div>
<div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-40"></div>
</div>
</div>
</div>

<div className="bg-[#f5f5f7] text-gray-900 relative h-[550px] flex flex-col items-center pt-14 text-center overflow-hidden w-full">
<div className="relative z-20 px-4 flex flex-col items-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter">MacBook Pro</h3>
<p className="text-lg mt-2 text-gray-700 tracking-tight">Mind-blowing. Head-turning.</p>
<div className="flex gap-4 mt-5 text-base">
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                            Learn more <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-600 hover:underline flex items-center gap-1 group" href="#">
                            Buy <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-8 w-[90%] max-w-lg flex flex-col items-center">

<div className="w-full h-48 md:h-56 bg-gray-900 rounded-t-2xl border-t border-l border-r border-gray-400 p-1 relative shadow-lg z-10">
<div className="w-full h-full bg-black rounded-t-xl overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg z-20 border-b border-gray-800"></div>

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"></div>
</div>
</div>

<div className="w-[105%] h-6 bg-gray-300 rounded-b-xl rounded-t-sm shadow-md border-b border-gray-400 flex justify-center relative z-20">
<div className="w-1/4 h-1 bg-gray-400 rounded-b-md absolute top-0"></div>
</div>
</div>
</div>

<div className="bg-black text-white relative h-[550px] flex flex-col items-center pt-14 text-center overflow-hidden w-full">
<div className="relative z-20 px-4 flex flex-col items-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter">AirPods Pro</h3>
<p className="text-lg mt-2 text-gray-300 tracking-tight">Adaptive Audio. Now playing.</p>
<div className="flex gap-4 mt-5 text-base">
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                            Learn more <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-blue-500 hover:underline flex items-center gap-1 group" href="#">
                            Buy <iconify-icon className="text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 w-48 h-36 bg-white rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] flex flex-col items-center justify-start pt-2 border border-gray-200">
<div className="w-full h-[1px] bg-gray-200 mt-8 mb-2"></div>
<div className="w-3 h-1 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
</div>
</div>
</section>

<section className="py-4 overflow-hidden w-full">
<div className="flex overflow-x-auto gap-4 px-4 snap-x snap-mandatory pb-8 w-full" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<a className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video max-h-[500px] bg-gray-900 relative rounded-2xl overflow-hidden flex items-end p-8 text-white group block" href="#">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-end">
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon> Apple TV+
                            </p>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight">Masters of the Air</h4>
<p className="text-sm mt-1 text-gray-300 font-medium">Drama</p>
</div>
<div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                            Stream now
                        </div>
</div>
</a>

<a className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video max-h-[500px] bg-emerald-900 relative rounded-2xl overflow-hidden flex items-end p-8 text-white group block" href="#">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-teal-900 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-end">
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon> Apple Arcade
                            </p>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight">Sonic Dream Team</h4>
<p className="text-sm mt-1 text-gray-300 font-medium">Action</p>
</div>
<div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                            Play now
                        </div>
</div>
</a>

<a className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video max-h-[500px] bg-rose-900 relative rounded-2xl overflow-hidden flex items-end p-8 text-white group block" href="#">

<div className="absolute inset-0 bg-gradient-to-br from-rose-800 to-pink-900 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-end">
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon> Apple Music
                            </p>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight">Usher</h4>
<p className="text-sm mt-1 text-gray-300 font-medium">Super Bowl LVIII Halftime Show</p>
</div>
<div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                            Listen now
                        </div>
</div>
</a>
</div>
</section>
</main>

<footer className="bg-[#f5f5f7] text-gray-500 text-xs px-4 py-8 md:px-8 w-full border-t border-gray-200 mt-8">
<div className="max-w-5xl mx-auto">

<div className="border-b border-gray-300 pb-4 mb-5 text-[11px] leading-relaxed">
<p className="mb-2"><span className="mr-1">1.</span> Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
<p>Available in the U.S. on <a className="text-gray-700 hover:underline inline-flex items-center" href="#">apple.com <iconify-icon className="ml-0.5 text-[10px]" icon="solar:arrow-right-up-linear"></iconify-icon></a>, in the Apple Store app, and at Apple Stores.</p>
<p className="mt-2">To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</p>
</div>

<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 hidden md:flex">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">

<div>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">Shop and Learn</h5>
<ul className="space-y-2">
<li><a className="hover:text-gray-800 hover:underline" href="#">Store</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Mac</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">iPad</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">iPhone</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Watch</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Vision</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">AirPods</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">TV &amp; Home</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">AirTag</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Accessories</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">Apple Wallet</h5>
<ul className="space-y-2 mb-6">
<li><a className="hover:text-gray-800 hover:underline" href="#">Wallet</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Card</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Pay</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Cash</a></li>
</ul>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">Account</h5>
<ul className="space-y-2">
<li><a className="hover:text-gray-800 hover:underline" href="#">Manage Your Apple ID</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Store Account</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">iCloud.com</a></li>
</ul>
</div>

<div>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">Entertainment</h5>
<ul className="space-y-2 mb-6">
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple One</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple TV+</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Music</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Arcade</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Fitness+</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple News+</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Podcasts</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Books</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">App Store</a></li>
</ul>
</div>

<div>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">Apple Store</h5>
<ul className="space-y-2">
<li><a className="hover:text-gray-800 hover:underline" href="#">Find a Store</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Genius Bar</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Today at Apple</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Group Reservations</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Camp</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Store App</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Certified Refurbished</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Trade In</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Financing</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Carrier Deals at Apple</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Order Status</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Shopping Help</a></li>
</ul>
</div>

<div>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">For Business</h5>
<ul className="space-y-2 mb-6">
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple and Business</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Shop for Business</a></li>
</ul>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">For Education</h5>
<ul className="space-y-2 mb-6">
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple and Education</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Shop for K-12</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Shop for College</a></li>
</ul>
<h5 className="font-semibold text-gray-800 mb-2 tracking-tight">About Apple</h5>
<ul className="space-y-2">
<li><a className="hover:text-gray-800 hover:underline" href="#">Newsroom</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Apple Leadership</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Career Opportunities</a></li>
<li><a className="hover:text-gray-800 hover:underline" href="#">Investors</a></li>
</ul>
</div>
</div>
</div>

<div className="md:hidden border-b border-gray-300 pb-2 mb-4">
<div className="py-2 border-b border-gray-300 flex justify-between items-center cursor-pointer hover:text-gray-800">
<span>Shop and Learn</span> <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-2 border-b border-gray-300 flex justify-between items-center cursor-pointer hover:text-gray-800">
<span>Apple Wallet</span> <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-2 border-b border-gray-300 flex justify-between items-center cursor-pointer hover:text-gray-800">
<span>Entertainment</span> <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-2 border-b border-gray-300 flex justify-between items-center cursor-pointer hover:text-gray-800">
<span>Apple Store</span> <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-2 flex justify-between items-center cursor-pointer hover:text-gray-800">
<span>About Apple</span> <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="text-[11px]">
<p className="mb-2 border-b border-gray-300 pb-2 md:border-none md:pb-0">More ways to shop: <a className="text-blue-600 hover:underline" href="#">Find an Apple Store</a> or <a className="text-blue-600 hover:underline" href="#">other retailer</a> near you. <span className="hidden md:inline">Or call 1-800-MY-APPLE.</span></p>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-2">
<p>Copyright © 2024 Apple Inc. All rights reserved.</p>
<div className="flex flex-wrap gap-x-4 gap-y-1">
<a className="hover:text-gray-800 hover:underline md:border-r border-gray-300 md:pr-4" href="#">Privacy Policy</a>
<a className="hover:text-gray-800 hover:underline md:border-r border-gray-300 md:pr-4" href="#">Terms of Use</a>
<a className="hover:text-gray-800 hover:underline md:border-r border-gray-300 md:pr-4" href="#">Sales and Refunds</a>
<a className="hover:text-gray-800 hover:underline md:border-r border-gray-300 md:pr-4" href="#">Legal</a>
<a className="hover:text-gray-800 hover:underline" href="#">Site Map</a>
</div>
<div className="mt-2 md:mt-0">
<a className="hover:text-gray-800 hover:underline" href="#">United States</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
