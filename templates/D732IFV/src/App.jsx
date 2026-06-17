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



    lucide.createIcons({attrs:{'stroke-width':1.5}});
  
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
      

<header className="w-full border-b border-gray-100 bg-white sticky top-0 z-30">
<div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 font-semibold text-lg tracking-tight" href="#">
<span className="font-geist" style={{}}>DriveShare</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm font-medium">
<a className="text-gray-600 hover:text-gray-900 transition font-geist" href="#" style={{}}>Browse</a>
<a className="text-gray-600 hover:text-gray-900 transition font-geist" href="#" style={{}}>List Car</a>
<a className="text-gray-600 hover:text-gray-900 transition font-geist" href="#" style={{}}>About</a>
<a className="text-gray-600 hover:text-gray-900 transition font-geist" href="#" style={{}}>Support</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center px-3.5 py-2 rounded-md bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition font-geist" style={{}}>
<svg className="lucide lucide-plus w-4 h-4 mr-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          List Car
        </button>
<button className="relative rounded-full hover:bg-gray-100 transition p-2 group">
<svg className="lucide lucide-message-square w-5 h-5 text-gray-600 group-hover:text-gray-900" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary-500 text-white text-xs flex items-center justify-center rounded-full font-semibold font-geist" style={{}}>2</span>
</button>
<div className="flex items-center gap-2">
<img alt="User avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c64ba98-a186-4b1c-a16d-b8d70c2fcb61_320w.jpg"/>
<button className="p-1 rounded hover:bg-gray-100 transition">
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<button className="md:hidden p-2 rounded hover:bg-gray-100 transition">
<svg className="lucide lucide-menu w-6 h-6 text-gray-600" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-4 sm:px-8 py-8">

<nav className="flex items-center gap-2 text-xs text-gray-400 mb-7">
<a className="hover:text-gray-700 font-geist" href="#" style={{}}>Home</a>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<a className="hover:text-gray-700 font-geist" href="#" style={{}}>Los Angeles</a>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-gray-700 font-medium font-geist" style={{}}>BMW X5 M Sport</span>
</nav>

<div className="grid lg:grid-cols-3 gap-x-12 gap-y-12">

<div className="lg:col-span-2 flex flex-col gap-10">

<section className="">
<div className="grid grid-cols-4 grid-rows-2 gap-3 aspect-[16/7] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="BMW X5 main view" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<img alt="BMW X5 interior" className="col-span-1 row-span-1 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="BMW X5 dashboard" className="col-span-1 row-span-1 w-full h-full object-cover" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<img alt="BMW X5 rear view" className="col-span-1 row-span-1 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="col-span-1 row-span-1 flex items-center justify-center bg-gray-100 relative">
<img alt="More photos" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="relative z-10 flex flex-col items-center">
<svg className="lucide lucide-images w-7 h-7 mb-1 text-neutral-800" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 22H4a2 2 0 0 1-2-2V6"></path><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"></path><circle cx="12" cy="8" r="2"></circle><rect height="16" rx="2" width="16" x="6" y="2"></rect></svg>
<span className="text-xs font-medium text-neutral-900 font-geist" style={{}}>24 Photos</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 mb-1 gap-4">
<div className="">
<h1 className="text-3xl tracking-tight text-neutral-900 mb-2 font-medium font-montserrat" style={{}}>2023 BMW X5 M Sport</h1>
<div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-1">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist" style={{}}>Beverly Hills, CA</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium text-gray-900 font-geist" style={{}}>4.9</span>
<span className="font-geist" style={{}}>(127)</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist" style={{}}>All-Star Host</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-geist" style={{}}>
<svg className="lucide lucide-heart w-4 h-4 mr-2" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              Save
            </button>
<button className="flex items-center px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-geist" style={{}}>
<svg className="lucide lucide-share-2 w-4 h-4 mr-2" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
              Share
            </button>
</div>
</section>

<div className="flex items-center gap-4 mb-2">
<div className="text-2xl text-neutral-900 font-medium font-montserrat" style={{}}>$189<span className="text-lg text-gray-400 font-medium font-geist" style={{}}>/day</span></div>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-700 border border-gray-200 font-geist" style={{}}>
<svg className="lucide lucide-zap w-3 h-3 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Instant Book
          </span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-700 border border-gray-200 font-geist" style={{}}>
<svg className="lucide lucide-clock w-3 h-3 mr-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Free cancellation
          </span>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col gap-5 bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<h2 className="text-lg font-semibold tracking-tight mb-2 font-geist" style={{}}>Vehicle Details</h2>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-1">
<svg className="lucide lucide-users w-5 h-5 text-neutral-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-sm font-medium text-neutral-900 font-geist" style={{}}>5 seats</div>
<div className="text-xs text-gray-400 font-geist" style={{}}>Passengers</div>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-1">
<svg className="lucide lucide-briefcase w-5 h-5 text-neutral-700" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="text-sm font-medium text-neutral-900 font-geist" style={{}}>4 bags</div>
<div className="text-xs text-gray-400 font-geist" style={{}}>Luggage</div>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-1">
<svg className="lucide lucide-settings w-5 h-5 text-neutral-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="text-sm font-medium text-neutral-900 font-geist" style={{}}>Automatic</div>
<div className="text-xs text-gray-400 font-geist" style={{}}>Transmission</div>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-1">
<svg className="lucide lucide-fuel w-5 h-5 text-neutral-700" data-lucide="fuel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="15" y1="22" y2="22"></line><line x1="4" x2="14" y1="9" y2="9"></line><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"></path></svg>
</div>
<div className="text-sm font-medium text-neutral-900 font-geist" style={{}}>Premium</div>
<div className="text-xs text-gray-400 font-geist" style={{}}>Fuel Type</div>
</div>
</div>
</div>

<div className="flex flex-col gap-5 bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<h2 className="text-lg font-semibold tracking-tight mb-2 font-geist" style={{}}>Features &amp; Amenities</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-smartphone w-4 h-4 text-neutral-700" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                Apple CarPlay &amp; Android Auto
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-bluetooth w-4 h-4 text-neutral-700" data-lucide="bluetooth" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10-5 5V2l5 5L7 17"></path></svg>
                Bluetooth
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-navigation w-4 h-4 text-neutral-700" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                GPS Navigation
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-camera w-4 h-4 text-neutral-700" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                Backup Camera
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-snowflake w-4 h-4 text-neutral-700" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
                Climate Control
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-sun w-4 h-4 text-neutral-700" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                Panoramic Sunroof
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-volume-2 w-4 h-4 text-neutral-700" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
                Premium Audio
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-key w-4 h-4 text-neutral-700" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                Keyless Entry
              </div>
</div>
</div>
</div>

<section className="bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<h2 className="text-lg font-semibold tracking-tight mb-3 font-geist" style={{}}>About This Car</h2>
<p className="text-gray-700 mb-2 font-geist" style={{}}>
            Experience luxury and performance with this 2023 BMW X5 M Sport. This premium SUV blends sophisticated design with cutting-edge technology for business trips or weekend getaways.
          </p>
<p className="text-gray-700 mb-3 font-geist" style={{}}>
            Features a turbo engine, adaptive suspension, and BMW's iDrive. The spacious interior offers premium leather with heated and ventilated seats for all-season comfort.
          </p>
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-yellow-400 mt-0.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div className="">
<div className="font-medium text-yellow-800 mb-1 font-geist" style={{}}>House Rules</div>
<ul className="text-yellow-700 text-sm space-y-1">
<li className="font-geist" style={{}}>• No smoking inside the car</li>
<li className="font-geist" style={{}}>• No pets without approval</li>
<li className="font-geist" style={{}}>• Return with same fuel</li>
<li className="font-geist" style={{}}>• Max speed enforced via GPS</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<div className="flex gap-4 items-start">
<img alt="Marcus Chen" className="w-14 h-14 rounded-full border border-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6653564f-d2bb-4c35-8fef-be58ac89ffe0_320w.jpg" style={{}}/>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="text-base font-semibold text-neutral-900 font-geist" style={{}}>Marcus Chen</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100 font-geist" style={{}}>
<svg className="lucide lucide-star w-3 h-3 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> All-Star Host
                </span>
</div>
<div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-2">
<span className="flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  4.9 (240 reviews)
                </span>
<span className="flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Joined Mar 2022
                </span>
<span className="flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                  98% response
                </span>
</div>
<p className="text-sm text-gray-700 mb-4 font-geist" style={{}}>
                Luxury car enthusiast with 15+ premium cars. Known for exceptional service and vehicles in pristine condition. 24/7 guest support.
              </p>
<div className="flex gap-2">
<button className="flex items-center px-3 py-2 rounded border border-gray-200 text-gray-700 text-sm bg-white hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-message-square w-4 h-4 mr-2" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  Contact Host
                </button>
<button className="flex items-center px-3 py-2 rounded border border-gray-200 text-gray-700 text-sm bg-white hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-user w-4 h-4 mr-2" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  View Profile
                </button>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<h2 className="text-lg font-semibold tracking-tight mb-3 font-geist" style={{}}>Pickup &amp; Return</h2>
<div className="flex gap-4 mb-4">
<div className="w-9 h-9 bg-emerald-50 rounded-full flex items-center justify-center">
<svg className="lucide lucide-map-pin w-4 h-4 text-emerald-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<div className="font-medium text-neutral-900 font-geist" style={{}}>Beverly Hills Luxury Garage</div>
<div className="text-sm text-gray-600 font-geist" style={{}}>9876 Rodeo Drive, Beverly Hills, CA</div>
<div className="text-xs text-gray-400 mt-1 font-geist" style={{}}>0.3 miles from center</div>
</div>
</div>
<div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
<img alt="Pickup location map" className="w-full h-full object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd358ba6-8fe1-427a-addd-3ba9abf64f43_800w.jpg" style={{}}/>
</div>
<div className="flex gap-6 text-sm">
<div className="flex items-center gap-2 text-gray-600 font-geist" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 24/7 Pickup
            </div>
<div className="flex items-center gap-2 text-gray-600 font-geist" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Free delivery within 5 mi
            </div>
</div>
</section><section className="bg-white border-gray-100 border rounded-xl mt-8 pt-6 pr-6 pb-6 pl-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<h2 className="text-lg font-semibold tracking-tight font-geist mb-5" style={{}}>Reviews</h2>
<div className="space-y-6">
<article className="flex gap-4">
<img alt="Reviewer avatar" className="w-12 h-12 rounded-full border border-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/947b46d4-cef2-4025-b312-3bad1df62fd7_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-semibold text-neutral-900 text-sm font-geist" style={{}}>Sophia Lee</span>
</div>
<div className="flex items-center mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-500 ml-2 font-geist" style={{}}>5.0</span>
</div>
<p className="text-sm text-gray-500 font-geist" style={{}}>The BMW X5 was immaculate and drove like a dream. Marcus was very responsive and helpful throughout the booking process.</p>
</div>
</article>
<article className="flex gap-4">
<img alt="Reviewer avatar" className="w-12 h-12 rounded-full border border-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0996e05f-0cb8-4e07-8c17-91befcf8b75c_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-semibold text-neutral-900 text-sm font-geist" style={{}}>James Carter</span>
</div>
<div className="flex items-center mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-gray-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-500 ml-2 font-geist" style={{}}>4.0</span>
</div>
<p className="text-sm text-gray-500 font-geist" style={{}}>Great experience overall. The car was clean and well-maintained. Would rent again for sure!</p>
</div>
</article>
<article className="flex gap-4">
<img alt="Reviewer avatar" className="w-12 h-12 rounded-full border border-gray-200 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41090330-fe39-452d-9deb-7474038a7941_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-semibold text-neutral-900 text-sm font-geist" style={{}}>Emily Nguyen</span>
</div>
<div className="flex items-center mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-500 ml-2 font-geist" style={{}}>5.0</span>
</div>
<p className="text-sm text-gray-500 font-geist" style={{}}>Marcus was an excellent host with quick communication. The car exceeded my expectations in every way.</p>
</div>
</article>
</div>
<button className="mt-6 w-full py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition text-sm font-geist" style={{}}>
<svg className="lucide lucide-chevron-down w-4 h-4 mr-2 inline" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
    Load More Reviews
  </button>
</section>
</div>

<aside className="lg:col-span-1">
<div className="sticky top-24 flex flex-col gap-6 bg-white border-gray-100 border rounded-2xl pt-7 pr-7 pb-7 pl-7 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px]">
<div className="">
<div className="text-2xl text-neutral-900 font-medium font-montserrat" style={{}}>$189<span className="text-lg text-gray-400 font-medium font-geist" style={{}}>/day</span></div>
<div className="text-xs text-gray-400 font-geist" style={{}}>+ fees and taxes</div>
</div>

<div className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-gray-500 mb-1 font-geist" style={{}}>Trip Start</label>
<input className="w-full focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-sm bg-gray-50 border-gray-200 border rounded-lg pt-2 pr-3 pb-2 pl-3" type="datetime-local" value="2024-03-15T10:00"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-500 mb-1 font-geist" style={{}}>Trip End</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-sm bg-gray-50" type="datetime-local" value="2024-03-18T10:00"/>
</div>
</div>

<div className="divide-y divide-gray-100 border-y border-gray-100 py-2 text-sm">
<div className="flex justify-between py-2">
<span className="text-gray-500 font-geist" style={{}}>$189 × 3 days</span>
<span className="text-neutral-900 font-medium font-geist" style={{}}>$567.00</span>
</div>
<div className="flex justify-between py-2">
<span className="text-gray-500 font-geist" style={{}}>Trip fee</span>
<span className="text-neutral-900 font-medium font-geist" style={{}}>$15.00</span>
</div>
<div className="flex justify-between py-2">
<span className="text-gray-500 font-geist" style={{}}>Protection plan</span>
<span className="text-neutral-900 font-medium font-geist" style={{}}>$45.00</span>
</div>
<div className="flex justify-between py-2 font-semibold">
<span className="text-neutral-900 font-geist" style={{}}>Total</span>
<span className="text-neutral-900 font-geist" style={{}}>$627.00</span>
</div>
</div>
<button className="w-full bg-neutral-900 text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition text-base font-geist" style={{}}>
<svg className="lucide lucide-lock w-4 h-4 mr-2 inline" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Book Now
          </button>
<div className="text-center text-xs text-gray-400 font-geist" style={{}}>
            You won’t be charged until your trip is confirmed
          </div>
<button className="w-full flex items-center justify-center py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-flag w-4 h-4 mr-2" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
            Report this listing
          </button>
</div>
</aside>
</div>
</main>
<footer className="w-full border-t border-gray-100 bg-white py-12 mt-24">
<div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
<div className="flex gap-6">
<a className="hover:text-gray-900 font-geist" href="#" style={{}}>Privacy</a>
<a className="hover:text-gray-900 font-geist" href="#" style={{}}>Terms</a>
<a className="hover:text-gray-900 font-geist" href="#" style={{}}>Support</a>
</div>
<span className="font-geist" style={{}}>© 2024 DriveShare, Inc.</span>
</div>
</footer>



    </>
  );
}
