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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-white/5">
<div className="flex h-20 max-w-screen-xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="flex transform group-hover:rotate-3 transition-transform duration-300 bg-center bg-red-600 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e39db8df-5739-49db-a0bc-4ee09457d662_320w.jpg)] bg-cover rounded-lg relative items-center justify-center">
</div>
<span className="text-lg font-medium text-white tracking-tight font-sans">Blazin Chooks</span>
</a>
<div className="hidden md:flex items-center gap-10 text-base font-normal text-stone-400">
<a className="hover:text-white transition-colors font-sans" href="#menu">Menu</a>
<a className="hover:text-white transition-colors font-sans" href="#find-us">Locations</a>
<a className="hover:text-white transition-colors font-sans" href="#story">Our Story</a>
<a className="hover:text-white transition-colors font-sans" href="#catering">Catering</a>
</div>
<a className="flex items-center gap-2 bg-stone-100 text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-white transition-colors" href="https://instagram.com/blazinchooks" target="_blank">
<span className="font-sans">Follow</span>
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</nav>

<section className="md:pt-52 md:pb-40 overflow-hidden pt-36 pr-6 pb-24 pl-6 relative">
<div className="z-10 bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2e1759c-9d98-4d99-8a97-b3b899a0b97a_800w.png)] max-w-screen-xl bg-cover mr-auto ml-auto relative">
<div className="flex w-full mb-10 justify-center">

<img alt="Blazin Chooks: Filipino Charcoal Chicken" className="w-35 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2a6743c-db27-4eab-9c22-ece2b23d3ccb_800w.png"/>
</div>
<p className="leading-relaxed md:text-2xl text-base font-extrabold text-yellow-200 max-w-xl mr-auto mb-12 ml-auto">Sydney's authentic Filipino Charcoal Chicken. Family run, Cebu inspired, and always cooked over open fire.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto px-9 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium text-base transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-red-900/20 font-sans" href="https://instagram.com/blazinchooks" target="_blank">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Find Next Location
                </a>
<a className="w-full sm:w-auto px-9 py-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-white rounded-xl font-medium text-base transition-all font-sans" href="#menu">
                    View Menu
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[140px] -z-10 rounded-full"></div>
</section>

<section className="bg-stone-950 border-white/5 border-t pt-10 pr-6 pb-32 pl-6" id="menu">
<div className="max-w-screen-xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="">
<h2 className="text-4xl font-semibold text-white tracking-tight font-sans mb-5">The Menu</h2>
<p className="leading-relaxed text-base font-light text-stone-400 max-w-lg">Authentic Filipino flavours. Long marination. Cooked strictly over charcoal for that signature smoky taste.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-x-8 gap-y-8">

<div className="group overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-stone-900/50 bg-stone-900/30 border-white/5 border rounded-2xl">
<div className="aspect-[4/5] overflow-hidden bg-stone-800 relative">
<img alt="Filipino Charcoal Chicken" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98d48204-ae98-42aa-9005-2fbf6d9474d3_320w.png"/><span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-sans">Best Seller</span>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-sans">Filipino Charcoal Chicken</h3>
</div>
<p className="leading-snug text-base font-light text-stone-400 mb-5">Juicy, smoky, Cebu-style whole chicken.</p>
</div>
</div>

<div className="group bg-stone-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-stone-900/50">
<div className="aspect-[4/5] bg-stone-800 relative overflow-hidden">
<img alt="Chicken Wings" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7292a1ef-c56c-4a81-aacd-22d995db338b_800w.png"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-sans">Best Seller</span>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-sans">Chicken Wings</h3>
</div>
<p className="leading-snug text-base font-light text-stone-400 mb-5 font-sans">Char-grilled wings glazed in our marinade.</p>
</div>
</div>

<div className="group bg-stone-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-stone-900/50">
<div className="aspect-[4/5] bg-stone-800 relative overflow-hidden">
<img alt="Pork BBQ Ribs" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a73a1106-0317-4841-8a4e-3337cc6f522a_800w.png"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-sans">Best Seller</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-sans">Pork BBQ Ribs</h3>
</div>
<p className="leading-snug text-base font-light text-stone-400 mb-5 font-sans">Tender ribs with sweet Filipino glaze.</p>
</div>
</div>

<div className="group bg-stone-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-stone-900/50">
<div className="aspect-[4/5] bg-stone-800 relative overflow-hidden">
<img alt="Cheeseburger Lumpia" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ccecf6c-9da4-4c2e-a7a7-14426f858226_800w.png"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-sans">Best Seller</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-sans">Cheeseburger Lumpia</h3>
</div>
<p className="text-base text-stone-400 mb-5 font-light leading-snug font-sans">Fusion spring rolls. Beef, cheese, crispy pastry.</p>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="text-4xl font-normal text-white tracking-tight font-sans mb-8">Sides &amp; Extras</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-stone-900/30 border border-white/5 p-5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
<div className="">
<span className="text-lg font-normal text-stone-200 font-sans">Rice</span>
</div>
</div>
<div className="bg-stone-900/30 border border-white/5 p-5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
<div className="">
<span className="text-lg font-normal text-stone-200 font-sans">Chips</span>
<span className="ml-2 text-base text-stone-500 font-light pl-2 font-sans">Chicken Salt</span>
</div>
</div>
<div className="bg-stone-900/30 border border-white/5 p-5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
<div className="">
<span className="text-lg font-normal text-stone-200 font-sans">Blazin Sauce</span>
<span className="ml-2 text-base text-stone-500 font-light pl-2 font-sans">Signature · Not spicy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-950 border-t border-white/5" id="find-us">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="bg-stone-950 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-5">
<svg className="lucide lucide-map w-40 h-40 text-white" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h2 className="text-4xl tracking-tight text-white mb-8 font-sans font-semibold">Catch us on the streets</h2>
<p className="text-lg text-stone-400 mb-10 leading-relaxed font-light font-sans">
                        We don't have a permanent spot yet. We bring the heat to markets, festivals, and pop-up events across Western Sydney. Locations change weekly.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-center gap-5 text-stone-300">
<div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-tent w-5 h-5 text-red-500" data-lucide="tent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3"></path><path d="M20.5 21 10 3"></path><path d="M15.5 21 12 15l-3.5 6"></path><path d="M2 21h20"></path></svg>
</div>
<span className="text-lg font-light font-sans">Night Markets &amp; Festivals</span>
</div>
<div className="flex items-center gap-5 text-stone-300">
<div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-map-pin w-5 h-5 text-red-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-lg font-light font-sans">Rotating across Western Sydney</span>
</div>
</div>
<a className="inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-200 transition-colors font-sans" href="https://instagram.com/blazinchooks" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        Check Instagram for Updates
                    </a>
</div>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
<div className="aspect-[4/5] bg-stone-800 rounded-2xl overflow-hidden">
<img alt="Grilling" className="hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a09e9ee-a6e4-47d8-9698-6f55c5150dcd_320w.jpg"/>
</div>
<div className="aspect-[4/5] bg-stone-800 rounded-2xl overflow-hidden translate-y-10">
<img alt="Market Crowd" className="hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12ffd8b7-dddd-4c58-b154-c7f78d59f3f5_320w.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 border-white/5 border-t pt-10 pr-6 pb-32 pl-6" id="story">
<div className="max-w-2xl mx-auto">
<div className="flex mb-12 justify-center">
<div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-stone-800 overflow-hidden bg-stone-900">
<img alt="Anthony" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f4221f1-7ae5-412c-8acb-1c12165ace4a_800w.png" style={{}}/>
</div>
</div>
<div className="leading-relaxed text-sm font-light text-stone-300 space-y-8">
<h2 className="text-4xl font-semibold text-white tracking-tight font-sans text-center">Our Story</h2>
<p className="font-sans">Blazin Chooks started with Anthony and a grill.</p>
<p className="font-sans">Anthony built Blazin Chooks without a hospitality background. Markets became the classroom. Early mornings. Long days. Quiet events. Sold out events. Every pop up sharpened the craft.</p>
<p className="font-sans">The food is rooted in Filipino culture and inspired by Cebu. Lechon manok style cooking. Sweet and savoury marinades. Long marination. Everything cooked over charcoal. No gas. No shortcuts.</p>
<p className="font-sans">The menu stays focused. Charcoal chicken. Chicken wings. Pork BBQ ribs. Cheeseburger lumpia. Rice and Blazin Sauce. Quality always comes first.</p>
<p className="font-sans">Blazin Chooks is family run. Anthony leads the grill. Family supports prep, service, and pack down. The goal stays simple. Show up. Cook properly. Feed people well.</p>
<p className="font-normal text-white font-sans">Once tasted, always wanted.</p>
</div>
</div>
</section>

<section className="bg-stone-900/20 border-white/5 border-t pt-10 pr-6 pb-32 pl-6" id="catering">
<div className="max-w-screen-xl mx-auto">
<div className="grid md:grid-cols-2 gap-x-20 gap-y-0 items-start">
<div className="">
<h2 className="text-4xl tracking-tight text-white mb-6 font-sans font-semibold">Catering &amp; Events</h2>
<p className="text-xl text-stone-400 mb-10 font-light font-sans">Want the smoke at your event? We cater for markets, festivals, and pop-up events. Hit us up.</p>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-stone-300 text-lg font-light">
<div className="p-1 rounded-full bg-red-900/20 border border-red-900/50">
<svg className="lucide lucide-check w-4 h-4 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-sans">Private Parties</span>
</li>
<li className="flex items-center gap-4 text-stone-300 text-lg font-light">
<div className="p-1 rounded-full bg-red-900/20 border border-red-900/50">
<svg className="lucide lucide-check w-4 h-4 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-sans">Markets &amp; Festivals</span>
</li>
<li className="flex items-center gap-4 text-stone-300 text-lg font-light">
<div className="p-1 rounded-full bg-red-900/20 border border-red-900/50">
<svg className="lucide lucide-check w-4 h-4 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-sans">Corporate Pop-ups</span>
</li>
</ul>
</div>
<div className="shadow-black/50 bg-stone-950 border-white/5 border rounded-2xl pt-10 pr-10 pb-10 pl-10 shadow-2xl">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider font-sans">Name</label>
<input className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all placeholder:text-stone-600" placeholder="Anthony" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider font-sans">Email</label>
<input className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all placeholder:text-stone-600" placeholder="hello@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider font-sans">Event Type</label>
<select className="custom-select w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all">
<option className="font-sans">Festival / Market</option>
<option className="font-sans">Private Function</option>
<option className="font-sans">Corporate Event</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wider font-sans">Details</label>
<textarea className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all placeholder:text-stone-600 resize-none" placeholder="Tell us about your event..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium rounded-lg py-4 text-sm hover:bg-stone-200 transition-colors mt-2 font-sans">Send Enquiry</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5 bg-stone-950">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="relative w-7 h-7 flex items-center justify-center bg-red-600 rounded-md transform rotate-3">
<svg className="lucide lucide-flame text-white w-4 h-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<span className="text-base font-medium text-white font-sans">Blazin Chooks</span>
</div>
<div className="flex gap-8 text-base text-stone-500 font-light">
<span className="font-sans">Sydney, NSW</span>
<span className="text-stone-700 font-sans">•</span>
<span className="font-sans">@blazinchooks</span>
</div>
<div className="flex gap-5">
<a className="text-stone-400 hover:text-white transition-colors" href="https://instagram.com/blazinchooks">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="text-center mt-10 text-xs text-stone-700 font-normal font-sans">
            © 2024 Blazin Chooks. All rights reserved.
        </div>
</footer>


    </>
  );
}
