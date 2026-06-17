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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Letter-by-letter animation script
        document.addEventListener('DOMContentLoaded', () => {
            const title = document.getElementById('hero-title');
            const text = title.textContent.trim();
            title.innerHTML = '';
            
            // Create word wrappers to handle spacing correctly
            const words = text.split(' ');
            
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.style.display = 'inline-block';
                wordSpan.style.whiteSpace = 'nowrap';
                
                // Add space after word unless it's the last one
                const letters = word.split('');
                letters.forEach((char, charIndex) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    // Calculate delay based on global index
                    const globalIndex = text.indexOf(word) + charIndex;
                    span.style.animationDelay = `${globalIndex * 0.04}s`;
                    wordSpan.appendChild(span);
                });

                title.appendChild(wordSpan);
                
                // Add a space after the word
                if (wordIndex < words.length - 1) {
                    const space = document.createElement('span');
                    space.innerHTML = '&nbsp;';
                    space.style.display = 'inline-block';
                    title.appendChild(space);
                }
            });
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
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-infinity w-5 h-5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">RentFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-blue-500 transition-colors" href="#">Explore</a>
<a className="hover:text-blue-500 transition-colors" href="#">How it works</a>
<a className="hover:text-blue-500 transition-colors" href="#">Safety</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#">List Item</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                The safest way to rent peer-to-peer
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6 letter-animate" id="hero-title"><span style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span style={{animationDelay: '0s'}}>R</span><span style={{animationDelay: '0.04s'}}>e</span><span style={{animationDelay: '0.08s'}}>n</span><span style={{animationDelay: '0.12s'}}>t</span></span><span style={{display: 'inline-block'}}> </span><span style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span style={{animationDelay: '0.2s'}}>A</span><span style={{animationDelay: '0.24s'}}>n</span><span style={{animationDelay: '0.28s'}}>y</span><span style={{animationDelay: '0.32s'}}>t</span><span style={{animationDelay: '0.36s'}}>h</span><span style={{animationDelay: '0.4s'}}>i</span><span style={{animationDelay: '0.44s'}}>n</span><span style={{animationDelay: '0.48s'}}>g</span><span style={{animationDelay: '0.52s'}}>,</span></span><span style={{display: 'inline-block'}}> </span><span style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span style={{animationDelay: '0.6s'}}>A</span><span style={{animationDelay: '0.64s'}}>n</span><span style={{animationDelay: '0.68s'}}>y</span><span style={{animationDelay: '0.72s'}}>t</span><span style={{animationDelay: '0.76s'}}>i</span><span style={{animationDelay: '0.8s'}}>m</span><span style={{animationDelay: '0.84s'}}>e</span><span style={{animationDelay: '0.88s'}}>.</span></span></h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light">
                Access millions of items locally. Find what you need for your next project or adventure, or earn money renting out what you own.
            </p>

<div className="bg-white p-2 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-3xl mx-auto relative z-10">
<form className="flex flex-col md:flex-row md:items-center gap-2">

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full h-14 pl-12 pr-4 bg-transparent rounded-2xl focus:bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 text-sm font-medium transition-colors hover:bg-slate-50/50" placeholder="What do you need?" type="text"/>
</div>
<div className="hidden md:block w-px h-8 bg-slate-200"></div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-map-pin w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input className="w-full h-14 pl-12 pr-4 bg-transparent rounded-2xl focus:bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 text-sm font-medium transition-colors hover:bg-slate-50/50" placeholder="Location" type="text"/>
</div>
<div className="hidden md:block w-px h-8 bg-slate-200"></div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-calendar w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<input className="w-full h-14 pl-12 pr-4 bg-transparent rounded-2xl focus:bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 text-sm font-medium transition-colors hover:bg-slate-50/50" placeholder="Dates" type="text"/>
</div>

<button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 active:scale-95 w-full md:w-auto flex items-center justify-center gap-2" type="button">
                        Search
                    </button>
</form>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="flex items-center gap-4 overflow-x-auto hide-scrollbar py-2 mask-linear-fade">

<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-camera w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-sm font-medium">Cameras</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-wrench w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-sm font-medium">Tools</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-zap w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium">Electronics</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-tent w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="tent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3"></path><path d="M20.5 21 10 3"></path><path d="M15.5 21 12 15l-3.5 6"></path><path d="M2 21h20"></path></svg>
<span className="text-sm font-medium">Camping</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-bike w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
<span className="text-sm font-medium">Sports</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-music w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-sm font-medium">Party &amp; Event</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm whitespace-nowrap hover:border-blue-300 hover:text-blue-600 transition-colors group">
<svg className="lucide lucide-car w-5 h-5 text-slate-400 group-hover:text-blue-500" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
<span className="text-sm font-medium">Vehicles</span>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Trending near you</h2>
<p className="text-slate-500 text-sm">Handpicked items ready for rent in San Francisco</p>
</div>
<a className="text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1" href="#">
                View all <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-bold tracking-wider uppercase text-slate-800 z-10 shadow-sm">Popular</span>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-red-500 transition-colors z-10 backdrop-blur-md">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<img alt="Camera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900 mb-1">Canon EOS R5 Kit</h3>
<p className="text-xs text-slate-500 flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Downtown, SF
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$85</p>
<p className="text-[10px] text-slate-500">/ day</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
</div>
<span className="text-xs text-slate-500">Listed by Sarah</span>
<div className="ml-auto flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
<svg className="lucide lucide-star w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
                        </div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 px-2 py-1 bg-blue-500 text-white rounded-md text-[10px] font-bold tracking-wider uppercase z-10 shadow-sm">New</span>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-red-500 transition-colors z-10 backdrop-blur-md">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<img alt="DJI Drone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900 mb-1">DJI Mavic 3 Pro</h3>
<p className="text-xs text-slate-500 flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Mission District
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$45</p>
<p className="text-[10px] text-slate-500">/ day</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span className="text-xs text-slate-500">Listed by Alex</span>
<div className="ml-auto flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
<svg className="lucide lucide-star w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 5.0
                        </div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-red-500 transition-colors z-10 backdrop-blur-md">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<img alt="Drill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900 mb-1">Makita Cordless Drill</h3>
<p className="text-xs text-slate-500 flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Soma, SF
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$15</p>
<p className="text-[10px] text-slate-500">/ day</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="text-xs text-slate-500">Listed by Mike</span>
<div className="ml-auto flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
<svg className="lucide lucide-star w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Why choose RentFlow</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Built for trust, designed for ease. Experience the new standard in peer-to-peer rentals.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">Fully Insured Rentals</h3>
<p className="text-slate-500 leading-relaxed">Every rental is backed by our comprehensive insurance policy covering up to $25,000. Rent with peace of mind knowing you're protected against damage and theft.</p>
</div>
<div className="mt-8 w-full h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 relative">
<img alt="Insurance" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-slate-600 shadow-sm">
<span className="text-green-500">●</span> Active Protection
                        </div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-colors">
<svg className="lucide lucide-user-check w-8 h-8 text-blue-500 mb-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Verified Users</h4>
<p className="text-sm text-slate-500">ID verification required for all members.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-colors">
<svg className="lucide lucide-clock w-8 h-8 text-blue-500 mb-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Instant Booking</h4>
<p className="text-sm text-slate-500">No waiting. Book available items instantly.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-colors">
<svg className="lucide lucide-message-square w-8 h-8 text-blue-500 mb-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Secure Chat</h4>
<p className="text-sm text-slate-500">Coordinate pickup safely in-app.</p>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-colors">
<svg className="lucide lucide-wallet w-8 h-8 text-blue-500 mb-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Fast Payouts</h4>
<p className="text-sm text-slate-500">Get paid directly to your bank in 24h.</p>
</div>
</div>

<div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl border border-blue-400 shadow-sm flex flex-col justify-center items-center text-center text-white md:col-span-1 lg:col-span-1">
<h4 className="text-3xl font-semibold mb-1">0%</h4>
<p className="text-sm text-blue-100">Listing Fees</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>
<div className="relative z-10">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-500">
<svg className="lucide lucide-search w-8 h-8" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">1. Find it</h3>
<p className="text-slate-500 text-sm leading-relaxed">Search for the items you need nearby. Filter by price, dates, and location.</p>
</div>
<div className="relative z-10">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-500">
<svg className="lucide lucide-message-circle w-8 h-8" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">2. Book it</h3>
<p className="text-slate-500 text-sm leading-relaxed">Chat with the owner, confirm details, and pay securely through the platform.</p>
</div>
<div className="relative z-10">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-500">
<svg className="lucide lucide-package-check w-8 h-8" data-lucide="package-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">3. Use it</h3>
<p className="text-slate-500 text-sm leading-relaxed">Pick up the item or get it delivered. Enjoy your rental and return it when done.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwTDQwIDBIMHY0MHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10">
<div className="flex justify-center mb-8">
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 rounded-full border-4 border-slate-900" src="https://i.pravatar.cc/100?img=32"/>
<img alt="" className="w-12 h-12 rounded-full border-4 border-slate-900" src="https://i.pravatar.cc/100?img=12"/>
<img alt="" className="w-12 h-12 rounded-full border-4 border-slate-900" src="https://i.pravatar.cc/100?img=5"/>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight">"I made $400 renting out my camping gear last month. The process was incredibly simple and safe."</h2>
<div className="flex flex-col items-center gap-1">
<span className="font-medium text-blue-400">Marcus Chen</span>
<span className="text-sm text-slate-400">Super Renter since 2022</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white">
<svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<span className="font-semibold text-slate-900">RentFlow</span>
</div>
<p className="text-sm text-slate-500 mb-4">The modern marketplace for renting anything, anywhere.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Browse Items</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">List an Item</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">How it Works</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Trust &amp; Safety</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 RentFlow Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
