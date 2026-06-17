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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d4bd2fc-2ce8-4a3f-9a83-a09824b23ced_3840w.jpg")'}}></div>
<main className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 flex items-center justify-center min-h-screen" id="aura-emeso9k17">
<header className="mb-8 text-center">
</header>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center items-center">

<article className="relative rounded-[60px] p-2 bg-black" style={{width: '393px', height: '854px', boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0,0,0,0.4)'}}>
<div className="relative h-full w-full rounded-[52px] overflow-hidden bg-white">


<div className="relative z-40 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<span className="sf-display text-lg font-semibold text-black font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-black" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-black" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="relative">
<div className="w-6 h-3 border rounded-sm border-black"></div>
<div className="absolute top-0.5 left-0.5 w-4 h-2 bg-gray-950 rounded-[1px]"></div>
</div>
</div>
</div>

<div className="px-6 pb-4">
<div className="flex items-center justify-between">
<div className="">
<h1 className="sf-display text-3xl tracking-tight text-black font-sans font-semibold">Discover</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<svg className="lucide lucide-search w-5 h-5 text-gray-700" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center relative bg-gray-100">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-gray-700" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-white font-sans">2</span>
</div>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-auto">
<div className="px-6 pb-32 space-y-6">

<div className="flex gap-4 pb-2">
<div className="relative overflow-hidden lg:rounded-3xl hover:border-neutral-400/50 transition-all min-h-[280px] lg:min-h-[320px] flex flex-col bg-neutral-800/60 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg w-72 h-64 flex-shrink-0">
<style>
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&display=swap');
      </style>
<div className="relative z-10 lg:p-8 flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2160&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-orange-200/90 ring-1 ring-orange-400/30 bg-orange-500/20 backdrop-blur-sm font-sans">Design</span>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-amber-200/90 ring-1 ring-amber-400/30 bg-amber-500/20 backdrop-blur-sm font-sans">Premium</span>
</div>
</div>
<div className="mt-auto">
<h3 className="lg:text-5xl text-4xl text-white tracking-tight mb-2 font-semibold" style={{fontFamily: '\'Bricolage Grotesque\', \'Arial Black\', sans-serif'}}>Sculptural Furniture</h3>
<p className="text-sm leading-relaxed text-neutral-200/85 mb-4 font-sans">"Discover artisanal chairs that blend form and function. Each piece crafted to transform your space."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center backdrop-blur-sm">
<svg className="w-4 h-4 text-orange-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<circle cx="17.5" cy="17.5" r="3.5"></circle>
</svg>
</div>
<div className="text-xs">
<div className="text-orange-200/90 font-medium font-sans">Design Studio</div>
<div className="text-amber-200/60 font-sans">Modern Seating</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative overflow-hidden lg:rounded-3xl hover:border-neutral-400/50 transition-all min-h-[280px] lg:min-h-[320px] flex flex-col bg-neutral-800/60 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg w-72 h-64 flex-shrink-0">
<div className="relative z-10 lg:p-8 flex flex-col h-full bg-cover pt-6 pr-6 pb-6 pl-6 justify-between bg-center bg-[url(https://cdn.midjourney.com/5f3f9e8e-e7c3-4c1c-8b34-9c969da13c9c/0_2.png?w=800&amp;q=80)]">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-blue-200/90 ring-1 ring-blue-400/30 bg-blue-500/20 backdrop-blur-sm font-sans">Tech</span>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-purple-200/90 ring-1 ring-purple-400/30 bg-purple-500/20 backdrop-blur-sm font-sans">Innovation</span>
</div>
</div>
<div className="mt-auto">
<h3 className="lg:text-5xl text-4xl text-white tracking-tight mb-2 font-semibold" style={{fontFamily: '\'Bricolage Grotesque\', \'Arial Black\', sans-serif'}}>Smart Workspace</h3>
<p className="text-sm leading-relaxed text-neutral-200/85 mb-4 font-sans">"Revolutionary workspace solutions with integrated technology. Elevate your productivity with intelligent design."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center backdrop-blur-sm">
<svg className="w-4 h-4 text-blue-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" ry="2" width="16" x="2" y="3"></rect>
<path d="m7 21 5-5 5 5"></path>
</svg>
</div>
<div className="text-xs">
<div className="text-blue-200/90 font-medium font-sans">Tech Lab</div>
<div className="text-purple-200/60 font-sans">Smart Office</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-4">
<h3 className="sf-display text-xl font-semibold text-black font-sans">Categories</h3>
<button className="font-medium text-blue-600 font-sans">See All</button>
</div>
<div className="flex gap-4 overflow-x-auto">
<div className="flex-shrink-0 w-20 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 mx-auto bg-blue-100">
<svg className="lucide lucide-armchair w-7 h-7 text-blue-600" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700 font-sans">Seating</span>
</div>
<div className="flex-shrink-0 w-20 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 mx-auto bg-pink-100">
<svg className="lucide lucide-table w-7 h-7 text-purple-600" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700 font-sans">Tables</span>
</div>
<div className="flex-shrink-0 w-20 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 mx-auto bg-blue-100">
<svg className="lucide lucide-lamp-desk w-7 h-7 text-green-600" data-lucide="lamp-desk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"></path><path d="m14.207 4.793-3.414 3.414"></path><path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path><path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700 font-sans">Lighting</span>
</div>
<div className="flex-shrink-0 w-20 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 mx-auto bg-pink-100">
<svg className="lucide lucide-bed-double w-7 h-7 text-orange-600" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700 font-sans">Bedroom</span>
</div>
<div className="flex-shrink-0 w-20 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 mx-auto bg-blue-100">
<svg className="lucide lucide-cabinet w-7 h-7 text-purple-600" data-lucide="cabinet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="18" x="3" y="2"></rect><path d="M3 8h18"></path><path d="M3 16h18"></path><path d="M8 12h.01"></path><path d="M16 12h.01"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700 font-sans">Storage</span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-4">
<h3 className="sf-display text-xl font-semibold text-black font-sans">Featured</h3>
<button className="font-medium text-blue-600 font-sans">View All</button>
</div>
<div className="space-y-4">
<div className="flex gap-4 bg-gray-100 border-gray-200 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="w-16 h-16 bg-gradient-mesh rounded-2xl overflow-hidden">
<img alt="Sculptural Lounge Chair" className="w-full h-full object-cover" src="https://cdn.midjourney.com/33396f65-fa4a-4904-93c5-45b662a445c8/0_1.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-black font-sans">Sculptural Lounge Chair</h4>
<p className="text-sm text-gray-500 font-sans">Organic fluid design</p>
<p className="font-bold mt-1 text-blue-600 font-sans">$299.00</p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-4 h-4 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex gap-4 p-4 rounded-3xl bg-gray-50">
<div className="w-16 h-16 bg-gradient-mesh rounded-2xl overflow-hidden">
<img alt="Minimalist Side Table" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
<div className="flex-1">
<h4 className="font-semibold text-black font-sans">Minimalist Side Table</h4>
<p className="text-sm text-gray-500 font-sans">Contemporary wood finish</p>
<p className="font-bold mt-1 text-blue-600 font-sans">$189.00</p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-4 h-4 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 ios-blur border-t bg-white/95 border-gray-200">
<div className="flex items-center justify-around py-2">
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-home w-6 h-6 text-blue-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-medium text-blue-600 font-sans">Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-grid-3x3 w-6 h-6 text-gray-500" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Shop</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-search w-6 h-6 text-gray-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Search</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-gray-500" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Cart</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-user w-6 h-6 text-gray-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Profile</span>
</button>
</div>

<div className="flex justify-center pb-2">
<div className="home-indicator"></div>
</div>
</div>
</div>
</article>

<article className="relative rounded-[60px] p-2 bg-black" style={{width: '393px', height: '854px', boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0,0,0,0.4)'}}>
<div className="relative h-full w-full rounded-[52px] overflow-hidden bg-white">


<div className="relative z-40 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<span className="sf-display text-lg font-semibold text-black font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-black" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-black" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="relative">
<div className="w-6 h-3 border rounded-sm border-black"></div>
<div className="absolute top-0.5 left-0.5 w-4 h-2 bg-gray-950 rounded-[1px]"></div>
</div>
</div>
</div>

<div className="px-6 pb-4">
<div className="flex items-center justify-between mb-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h1 className="sf-display text-lg font-semibold text-black font-sans">Furniture Collection</h1>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<svg className="lucide lucide-sliders-horizontal w-5 h-5 text-gray-700" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>

<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-search w-4 h-4 text-gray-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full placeholder-gray-500 text-black bg-gray-100 border-gray-200 border rounded-xl pt-3 pr-4 pb-3 pl-10" placeholder="Search furniture" type="text"/>
</div>
</div>

<div className="flex-1 overflow-auto">
<div className="pr-6 pb-32 pl-6">

<div className="flex gap-2 overflow-x-auto mb-6">
<button className="flex-shrink-0 px-4 py-2 rounded-full font-medium bg-blue-600 text-white font-sans">All</button>
<button className="flex-shrink-0 font-medium text-gray-700 bg-gray-100 rounded-full pt-2 pr-4 pb-2 pl-4">Seating</button>
<button className="flex-shrink-0 px-4 py-2 rounded-full font-medium bg-gray-100 text-gray-700 font-sans">Tables</button>
<button className="flex-shrink-0 px-4 py-2 rounded-full font-medium bg-gray-100 text-gray-700 font-sans">Lighting</button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-100 border-gray-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2">
<div className="h-32 bg-gradient-mesh rounded-2xl mb-3 overflow-hidden">
<img alt="Sculptural Chair" className="w-full h-full object-cover" src="https://cdn.midjourney.com/4ee350d7-3402-4e36-88e9-4badc6a08409/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<h4 className="font-semibold text-sm text-black font-sans">Sculptural Chair</h4>
<p className="text-xs text-gray-500 font-sans">Organic design</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="font-bold text-black font-sans">$299</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-3 h-3 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="bg-gray-100 border-gray-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2">
<div className="h-32 bg-gradient-mesh rounded-2xl mb-3 overflow-hidden">
<img alt="Modern Side Table" className="w-full h-full object-cover" src="https://cdn.midjourney.com/a50f9d26-47aa-4a33-a9b7-db9192d42744/0_2.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<h4 className="font-semibold text-sm text-black font-sans">Modern Side Table</h4>
<p className="text-xs text-gray-500 font-sans">Minimalist wood</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="font-bold text-black font-sans">$189</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-3 h-3 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="bg-gray-100 border-gray-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2">
<div className="h-32 bg-gradient-mesh rounded-2xl mb-3 overflow-hidden">
<img alt="Designer Floor Lamp" className="w-full h-full object-cover" src="https://cdn.midjourney.com/3f024edd-4c1b-433c-b4a3-46bd832f2a4f/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<h4 className="text-sm font-semibold text-black">Japanese Chair</h4>
<p className="text-xs text-gray-500 font-sans">Brass &amp; marble</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="font-bold text-black font-sans">$425</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-3 h-3 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="bg-gray-100 border-gray-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2">
<div className="h-32 bg-gradient-mesh rounded-2xl mb-3 overflow-hidden">
<img alt="Dining Table" className="w-full h-full object-cover" src="https://cdn.midjourney.com/f152fe09-de1e-41a0-8b75-4ddb8e040e99/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<h4 className="font-semibold text-sm text-black font-sans">Walnut Dining Table</h4>
<p className="text-xs text-gray-500 font-sans">Solid wood</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="font-bold text-black font-sans">$1,250</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-plus w-3 h-3 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 ios-blur border-t bg-white/95 border-gray-200">
<div className="flex items-center justify-around py-2">
<button className="flex flex-col gap-1 pt-2 pb-2 items-center">
<svg className="lucide lucide-home w-6 h-6 text-gray-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-grid-3x3 w-6 h-6 text-blue-600" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-xs font-medium text-blue-600 font-sans">Shop</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-search w-6 h-6 text-gray-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Search</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-gray-500" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Cart</span>
</button>
<button className="flex flex-col items-center gap-1 py-2">
<svg className="lucide lucide-user w-6 h-6 text-gray-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-gray-500 font-sans">Profile</span>
</button>
</div>

<div className="flex justify-center pb-2">
<div className="home-indicator"></div>
</div>
</div>
</div>
</article>

<article className="relative bg-black rounded-[60px] pt-2 pr-2 pb-2 pl-2" style={{width: '393px', height: '854px', boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0,0,0,0.4)'}}>
<div className="relative h-full w-full rounded-[52px] overflow-hidden bg-white">


<div className="relative z-40 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<span className="sf-display text-lg font-semibold text-black font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-black" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-black" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="relative">
<div className="w-6 h-3 border rounded-sm border-black"></div>
<div className="absolute top-0.5 left-0.5 w-4 h-2 bg-gray-950 rounded-[1px]"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-6 pb-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<svg className="lucide lucide-share w-5 h-5 text-gray-700" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>

<div className="flex-1 overflow-auto">
<div className="pr-6 pb-32 pl-6">

<div className="relative h-80 bg-gradient-mesh rounded-3xl mb-6 overflow-hidden">
<img alt="Ultra-Modern Sculptural Lounge Chair" className="w-full h-full object-cover" src="https://cdn.midjourney.com/4e7d710b-46c9-4e37-85f3-2d87d4bf51f4/0_1.png?w=800&amp;q=80"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ios-blur bg-white/90">
<svg className="lucide lucide-heart w-5 h-5 text-red-500 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>

<div className="absolute bottom-4 left-4 flex gap-2">
<button className="w-6 h-6 rounded-full ring-2 bg-black ring-white"></button>
<button className="w-6 h-6 rounded-full bg-gray-600"></button>
<button className="w-6 h-6 rounded-full ring-2 bg-white ring-gray-300"></button>
</div>
</div>

<div className="space-y-6">
<div className="">
<div className="flex mb-2 items-start justify-between">
<div className="">
<h1 className="sf-display text-2xl text-black tracking-tight font-sans font-semibold">Sculptural Lounge Chair</h1>
<p className="font-medium text-blue-600 font-sans">ModernForm</p>
</div>
<div className="text-right">
<span className="sf-display text-2xl text-black font-sans font-semibold">$299</span>
<p className="line-through text-sm text-gray-500 font-sans">$345</p>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="font-medium text-black font-sans">4.9</span>
<span className="text-gray-500 font-sans">(147)</span>
</div>
<p className="leading-relaxed text-gray-700 font-sans">Ultra-modern sculptural lounge chair with organic fluid design. Features smooth matte black upholstery, ergonomic flowing curves, and minimalistic wooden base with carved abstract geometry for a futuristic yet natural aesthetic.</p>
</div>

<div>
<h3 className="font-medium mb-3 text-black font-sans">Key Features</h3>
<div className="grid grid-cols-3 gap-3">
<div className="text-center p-3">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 bg-blue-100">
<svg className="lucide lucide-shapes w-6 h-6 text-purple-600" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<p className="text-xs font-medium text-gray-700 font-sans">Organic Design</p>
</div>
<div className="text-center p-3">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 bg-blue-100">
<svg className="lucide lucide-user-check w-6 h-6 text-green-600" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-xs font-medium text-gray-700 font-sans">Ergonomic</p>
</div>
<div className="text-center p-3">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 bg-blue-100">
<svg className="lucide lucide-tree-pine w-6 h-6 text-orange-600" data-lucide="tree-pine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>
</div>
<p className="text-xs font-medium text-gray-700 font-sans">Wood Base</p>
</div>
</div>
</div>

<div>
<h3 className="font-medium mb-3 text-black font-sans">Specifications</h3>
<div className="space-y-2">
<div className="flex justify-between py-2">
<span className="text-gray-600 font-sans">Material</span>
<span className="font-medium text-black font-sans">Matte Black Fabric</span>
</div>
<div className="flex justify-between py-2">
<span className="text-gray-600 font-sans">Base</span>
<span className="font-medium text-black font-sans">Carved Wood</span>
</div>
<div className="flex justify-between py-2">
<span className="text-gray-600 font-sans">Dimensions</span>
<span className="font-medium text-black font-sans">85×90×75cm</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 ios-blur border-t p-4 bg-white/95 border-gray-200">
<div className="flex items-center gap-4 mb-2">
<div className="flex items-center rounded-2xl bg-gray-100">
<button className="w-10 h-10 flex items-center justify-center">
<svg className="lucide lucide-minus w-4 h-4 text-gray-600" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="w-10 text-center font-semibold text-black font-sans">1</span>
<button className="w-10 h-10 flex items-center justify-center">
<svg className="lucide lucide-plus w-4 h-4 text-gray-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<button className="flex-1 font-semibold py-4 rounded-2xl bg-blue-600 text-white font-sans">
                Add to Cart • $299
              </button>
</div>

<div className="flex justify-center">
<div className="home-indicator"></div>
</div>
</div>
</div>
</article>
</section>
</main>


    </>
  );
}
