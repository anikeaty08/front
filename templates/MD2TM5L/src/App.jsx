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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter','ui-sans-serif','system-ui']
}
}
}



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add fade-in animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
      
      /* Add smooth scrolling */
      * {
        scrollbar-width: thin;
        scrollbar-color: #cbd5e1 #f8fafc;
      }
      
      *::-webkit-scrollbar {
        width: 6px;
      }
      
      *::-webkit-scrollbar-track {
        background: #f8fafc;
      }
      
      *::-webkit-scrollbar-thumb {
        background-color: #cbd5e1;
        border-radius: 3px;
      }
    `;
    document.head.appendChild(style);
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1663076130444-6d7f9f00d124?w=3840&amp'}}></div>
<div className="flex flex-col xl:flex-row gap-8 w-full max-w-7xl justify-center">

<div className="relative w-full max-w-sm mx-auto xl:mx-0 rounded-3xl shadow-2xl overflow-hidden opacity-0 animate-fade-in bg-black" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 pointer-events-none rounded-3xl border border-gray-900"></div>
<div className="px-6 py-5 flex items-center justify-between border-b border-gray-950">
<button className="p-2 -m-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-400" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center gap-1">
<div className="w-1 h-1 rounded-full bg-gray-100"></div>
<div className="w-1 h-1 rounded-full bg-gray-700"></div>
<div className="w-1 h-1 rounded-full bg-gray-700"></div>
</div>
<button className="p-2 -m-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex flex-col items-center px-6 pb-10 pt-8">
<div className="relative">
<img alt="Professional" className="w-24 h-24 rounded-2xl object-cover shadow-lg" src="https://images.unsplash.com/photo-1516913840875-366de3e463bd?w=320&amp;q=80" style={{}}/>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-check w-4 h-4 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<h2 className="mt-6 text-2xl tracking-tight text-gray-100 font-jakarta font-medium">Hire Marcus Rodriguez</h2>
<div className="mt-2 flex items-center gap-2">
<svg className="lucide lucide-wrench w-4 h-4 text-blue-400" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
<p className="text-sm font-medium uppercase tracking-wider text-purple-400 font-geist">Licensed Plumber</p>
</div>
<div className="mt-3 flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium text-gray-100 font-geist">4.9</span>
<span className="text-sm text-gray-500 font-geist">(247 reviews)</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-4 h-4 text-gray-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm text-gray-500 font-geist">0.8 mi away</span>
</div>
</div>
<p className="mt-6 text-center leading-relaxed px-2 text-gray-400 font-geist">Choose how you'd like to hire Marcus for your plumbing needs. Create a new task or assign him to an existing project.</p>
<div className="mt-8 w-full space-y-3">
<button className="w-full group flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r transition-all duration-300 border from-purple-950 to-gray-950 hover:from-purple-900 hover:to-gray-900 border-purple-900 hover:border-purple-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-900">
<svg className="lucide lucide-plus-circle w-5 h-5 text-blue-400" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<div className="text-left">
<p className="font-medium text-gray-100 font-geist">Create New Task</p>
<p className="text-sm text-gray-400 font-geist">Post a new job and assign Marcus directly</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 group-hover:text-blue-600 transition-colors text-gray-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full group flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r transition-all duration-300 border from-purple-950 to-purple-950 hover:from-purple-900 hover:to-purple-900 border-purple-900 hover:border-purple-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-900">
<svg className="lucide lucide-clipboard-list w-5 h-5 text-amber-400" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<div className="text-left">
<p className="font-medium text-gray-100 font-geist">Existing Projects</p>
<p className="text-sm text-gray-400 font-geist">You have 3 unassigned tasks waiting</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 group-hover:text-amber-600 transition-colors text-gray-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="mt-8 flex items-center justify-center gap-6">
<button className="p-3 rounded-full transition-colors bg-gray-900 hover:bg-gray-800">
<svg className="lucide lucide-message-circle w-5 h-5 text-gray-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</button>
<button className="p-3 rounded-full transition-colors bg-gray-900 hover:bg-gray-800">
<svg className="lucide lucide-phone w-5 h-5 text-gray-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
</div>
<a className="mt-8 text-sm text-gray-500 transition-colors flex items-center gap-1 hover:text-gray-300 font-geist" href="#">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Terms &amp; Insurance Coverage
        </a>
</div>
</div>

<div className="relative w-full max-w-sm mx-auto xl:mx-0 rounded-3xl shadow-2xl overflow-hidden opacity-0 animate-fade-in bg-black" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 pointer-events-none rounded-3xl border border-gray-900"></div>
<div className="px-6 py-5 flex items-center justify-between border-b border-gray-950">
<button className="p-2 -m-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-400" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center gap-2 text-sm text-gray-400">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
<span className="font-medium font-geist">2:41 PM</span>
</div>
</div>
<div className="px-6 pb-6 overflow-y-auto h-[680px]">
<div className="flex items-center justify-between py-4">
<h2 className="text-2xl tracking-tight text-gray-100 font-jakarta font-medium">TaskFlow Pros</h2>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 text-sm text-gray-500">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">2.5km radius</span>
</div>
<button className="text-sm font-medium transition-colors flex items-center gap-1 text-purple-400 hover:text-purple-300 font-geist">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
              Filter
            </button>
</div>
</div>

<div className="w-full h-32 bg-gradient-to-br rounded-xl flex items-center justify-center border relative overflow-hidden from-purple-950 to-gray-900 border-purple-900">
<div %3e%3c="" %3e%3ccircle="" %3e%3cg="" 60"="" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" cx="30" cy="30" fill="none" fillOpacity="0.4" fill-rule="evenodd" g%3e%3c="" height="60" opacity-30"="" r="2" svg%3e')]="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
<div className="text-center z-10">
<svg className="lucide lucide-map w-8 h-8 mx-auto mb-2 text-blue-400" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<p className="text-sm font-medium text-purple-300 font-geist">Interactive Service Map</p>
</div>
</div>

<div className="mt-8">
<h3 className="text-lg font-medium mb-4 text-gray-100 font-geist">Your Recent Professionals</h3>
<div className="flex gap-4 overflow-x-auto pb-2">
<div className="min-w-[140px] rounded-xl p-4 flex flex-col items-center transition-colors cursor-pointer bg-gray-950 hover:bg-gray-900">
<img alt="" className="w-16 h-16 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1508186658093-d192cb09cf14?w=320&amp;q=80" style={{}}/>
<p className="mt-3 text-sm font-medium text-gray-100 font-geist">@marcus_plumber</p>
<p className="text-xs text-gray-500 font-geist">Licensed Plumber</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-star w-3 h-3 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-400 font-geist">4.9</span>
</div>
<p className="text-xs font-medium mt-1 text-pink-400 font-geist">$75/hr</p>
</div>
<div className="min-w-[140px] rounded-xl p-4 flex flex-col items-center transition-colors cursor-pointer bg-gray-950 hover:bg-gray-900">
<img alt="" className="w-16 h-16 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=320&amp;q=80"/>
<p className="mt-3 text-sm font-medium text-gray-100 font-geist">@david_electric</p>
<p className="text-xs text-gray-500 font-geist">Master Electrician</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-star w-3 h-3 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-400 font-geist">4.8</span>
</div>
<p className="text-xs font-medium mt-1 text-pink-400 font-geist">$85/hr</p>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-lg font-medium mb-4 text-gray-100 font-geist">Featured Professionals</h3>
<div className="space-y-4">
<div className="flex justify-between items-start p-4 rounded-xl border hover:shadow-sm transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex gap-4">
<img alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1545254644-a60835b8d36e?w=320&amp;q=80"/>
<div>
<p className="font-medium text-gray-100 font-geist">Sarah Chen</p>
<p className="text-sm text-gray-400 font-geist">Master Electrician • $80/hr</p>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-zap w-3 h-3 text-gray-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-gray-500 font-geist">432 jobs completed</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-3 h-3 text-gray-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-gray-500 font-geist">Available today</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-gray-100 font-geist">4.9</span>
<svg className="lucide lucide-star w-4 h-4 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium text-pink-400 font-geist">Verified Pro</span>
</div>
</div>
</div>
<div className="flex justify-between items-start p-4 rounded-xl border hover:shadow-sm transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex gap-4">
<img alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1594930077027-f400df9b3fdd?w=320&amp;q=80"/>
<div>
<p className="font-medium text-gray-100 font-geist">James Wilson</p>
<p className="text-sm text-gray-400 font-geist">Professional Cleaner • $45/hr</p>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-sparkles w-3 h-3 text-gray-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-xs text-gray-500 font-geist">1.2k jobs completed</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-truck w-3 h-3 text-gray-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-xs text-gray-500 font-geist">Supplies included</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-gray-100 font-geist">4.7</span>
<svg className="lucide lucide-star w-4 h-4 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium mt-1 text-purple-400 font-geist">Top Rated</span>
</div>
</div>
<div className="flex justify-between items-start p-4 rounded-xl border hover:shadow-sm transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex gap-4">
<img alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=320&amp;q=80" style={{}}/>
<div>
<p className="font-medium text-gray-100 font-geist">Michael Torres</p>
<p className="text-sm text-gray-400 font-geist">HVAC Technician • $90/hr</p>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-thermometer w-3 h-3 text-gray-600" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="text-xs text-gray-500 font-geist">Emergency service</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-gray-500 font-geist">Next week</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-gray-100 font-geist">5.0</span>
<svg className="lucide lucide-star w-4 h-4 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-sm mx-auto xl:mx-0 rounded-3xl shadow-2xl overflow-hidden opacity-0 animate-fade-in bg-black" style={{animationDelay: '0.5s'}}>
<div className="absolute inset-0 pointer-events-none rounded-3xl border border-gray-900"></div>
<div className="px-6 py-5 flex items-center justify-between border-b border-gray-950">
<button className="p-2 -m-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-400" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 -m-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-search w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="px-6 pb-6 overflow-y-auto h-[680px]">
<div className="flex items-center justify-between py-4">
<h2 className="text-2xl tracking-tight text-gray-100 font-jakarta font-medium">Task Board</h2>
<button className="p-2 rounded-full transition-colors bg-purple-400 text-black hover:bg-purple-300">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors text-gray-300 bg-gray-900 hover:bg-gray-800 font-geist">
<svg className="lucide lucide-clock w-4 h-4 inline mr-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Urgent Tasks (4)
          </button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors text-purple-300 bg-purple-900 hover:bg-purple-800 font-geist">
<svg className="lucide lucide-gift w-4 h-4 inline mr-1" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
            Community Help (7)
          </button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors text-pink-300 bg-pink-900 hover:bg-pink-800 font-geist">
<svg className="lucide lucide-calendar w-4 h-4 inline mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Events (3)
          </button>
</div>

<div className="space-y-4">
<div className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
<span className="text-xs font-medium uppercase tracking-wide text-pink-400 font-geist">Urgent</span>
</div>
<button className="p-1 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-heart w-4 h-4 hover:text-red-500 text-gray-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<p className="leading-relaxed mb-4 text-gray-100 font-geist">Need an experienced house cleaner for deep cleaning this weekend. 3-bedroom house with pets. Must bring own supplies.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-100 font-geist">Emma Rodriguez</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check w-3 h-3 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-pink-400 font-geist">Verified</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-100 font-geist">$45/hr</p>
<p className="text-xs text-gray-500 font-geist">Est. 4-6 hrs</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-950">
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">2 hours ago</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">1.2 mi away</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist">3 interested</span>
</div>
</div>
</div>
<div className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
<span className="text-xs font-medium uppercase tracking-wide text-purple-400 font-geist">Flexible</span>
</div>
<button className="p-1 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-heart w-4 h-4 hover:text-red-500 text-gray-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<p className="leading-relaxed mb-4 text-gray-100 font-geist">Looking for a reliable handyman to fix my garage door. It's stuck and won't open properly. Available any day this week.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-100 font-geist">David Kim</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3 text-yellow-600 fill-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-400 font-geist">4.8 rating</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-100 font-geist">$65/hr</p>
<p className="text-xs text-gray-500 font-geist">Est. 2-3 hrs</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-950">
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">4 hours ago</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">0.8 mi away</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist">7 interested</span>
</div>
</div>
</div>
<div className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
<span className="text-xs font-medium uppercase tracking-wide text-pink-400 font-geist">Community</span>
</div>
<button className="p-1 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<p className="leading-relaxed mb-4 text-gray-100 font-geist">Free furniture giveaway! Moving out and have a beautiful dining set, couch, and coffee table. First come, first served.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-100 font-geist">Lisa Anderson</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart w-3 h-3 text-red-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs text-gray-400 font-geist">Community helper</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-pink-400 font-geist">FREE</p>
<p className="text-xs text-gray-500 font-geist">Must pickup</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-950">
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">1 day ago</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">2.1 mi away</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist">12 interested</span>
</div>
</div>
</div>
<div className="rounded-xl shadow-sm p-5 border hover:shadow-md transition-all cursor-pointer bg-black border-gray-900 hover:border-gray-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
<span className="text-xs font-medium uppercase tracking-wide text-pink-400 font-geist">Event</span>
</div>
<button className="p-1 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-heart w-4 h-4 hover:text-red-500 text-gray-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<p className="leading-relaxed mb-4 text-gray-100 font-geist">Need help setting up for a birthday party this Saturday. Tables, chairs, decorations. Fun weekend job!</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-100 font-geist">Maria Santos</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3 text-purple-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-gray-400 font-geist">Event host</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-100 font-geist">$30/hr</p>
<p className="text-xs text-gray-500 font-geist">Est. 3-4 hrs</p>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-950">
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">6 hours ago</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">1.5 mi away</span>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist">5 interested</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center mt-8 pt-4 border-t border-gray-950">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<div className="w-2 h-2 rounded-full bg-gray-700"></div>
<div className="w-2 h-2 rounded-full bg-gray-700"></div>
<div className="w-2 h-2 rounded-full bg-gray-700"></div>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
