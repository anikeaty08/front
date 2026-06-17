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



      // Initialize year and icons
      document.getElementById('year').textContent = new Date().getFullYear();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile nav toggle
      const navToggle = document.getElementById('navToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      if (navToggle) {
        navToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Hero slides
      const slides = [
        {
          title: 'Amazing Home For Family',
          address: '501 Brickell Key Dr STE 400, Miami, FL 33131, USA',
          price: '$890,000',
          pricePer: '$3,690 / sq ft',
          beds: '3',
          baths: '2',
          area: '1450',
          type: 'Single Family Home',
          image: 'https://eztgdyvwislnqxeqylwu.supabase.co/storage/v1/object/public/blog_thumbnails/369f32bb-0a9f-4a4c-8c3a-fb448480626a.jpg'
        },
        {
          title: 'Scandinavian Minimal Loft',
          address: '120 NE 27th St, Miami, FL 33137, USA',
          price: '$4,500/mo',
          pricePer: '—',
          beds: '2',
          baths: '2',
          area: '1180',
          type: 'Loft',
          image: 'https://images1.loopnet.com/i2/iAqf5RQZGG3PRSAJl6Zf4zwyrDIhRy239HTq5cIJm-4/116/6358-6360-Van-Nuys-Blvd-Van-Nuys-CA-Building-Photo-10-LargeHighDefinition.jpg'
        },
        {
          title: 'Sunlit Corner Townhome',
          address: '780 NW 65th Ave, Miami, FL 33126, USA',
          price: '$725,000',
          pricePer: '$2,980 / sq ft',
          beds: '3',
          baths: '2',
          area: '1520',
          type: 'Townhome',
          image: 'https://images1.loopnet.com/i2/gXwYyAGra8TywEOioWaZRkeWM9SjNEe3SXseaKufcoY/110/4914-Lankershim-Blvd-North-Hollywood-CA-Building-Photo-1-Large.jpg'
        },
        {
          title: 'Amazing Home For Family',
          address: '501 Brickell Key Dr STE 400, Miami, FL 33131, USA',
          price: '$890,000',
          pricePer: '$3,690 / sq ft',
          beds: '3',
          baths: '2',
          area: '1450',
          type: 'Single Family Home',
          image: 'https://images1.loopnet.com/i2/UdHG3mOFx1BOtZJtdAGCmdh1B_hbHC6hn-g3J7dFtNg/110/image.jpg'
        },
        {
          title: 'Amazing Home For Family',
          address: '501 Brickell Key Dr STE 400, Miami, FL 33131, USA',
          price: '$890,000',
          pricePer: '$3,690 / sq ft',
          beds: '3',
          baths: '2',
          area: '1450',
          type: 'Single Family Home',
          image: 'https://ahronzilbersteinllc.com/wp-content/uploads/2024/08/830-S-MainStreet4-1024x768.jpg'
        }
      ];

      let current = 0;
      const heroImage = document.getElementById('heroImage');
      const propTitle = document.getElementById('propTitle');
      const propAddress = document.getElementById('propAddress');
      const propPrice = document.getElementById('propPrice');
      const propPricePer = document.getElementById('propPricePer');
      const propBeds = document.getElementById('propBeds');
      const propBaths = document.getElementById('propBaths');
      const propArea = document.getElementById('propArea');
      const propType = document.getElementById('propType');

      function renderSlide() {
        const s = slides[current];
        heroImage.src = s.image;
        propTitle.textContent = s.title;
        propAddress.textContent = s.address;
        propPrice.textContent = s.price;
        propPricePer.textContent = s.pricePer;
        propBeds.textContent = s.b
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
      

<div className="bg-white/80 border-stone-200 border-b backdrop-blur" data-element-id="aura-emg1647aj">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center">
<img alt="Total Capital Inc logo" className="h-8 w-auto object-contain" src="https://emerald-quickest-swallow-922.mypinata.cloud/ipfs/bafybeieyeuzegrxa5uwlkhmyyn4aaqj5v2mjlbqg4bqq54xov3xsvc6xra?w=800&amp;q=80"/>
</span>
<span className="text-lg sm:text-xl tracking-tight font-sans font-light" style={{}}>Total Capital Inc</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm text-stone-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-orange-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-stone-800 font-sans font-light" style={{}}>1 (800) 987-6543</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4 text-orange-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-sans font-light" style={{}}>hello@haven.example</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-orange-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans font-light" style={{}}>Van Nuys</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-orange-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans font-light" style={{}}>9am–6pm, Mon–Fri</span>
</div>
</div>
<div className="flex w-full md:w-auto flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4">
<button className="hidden sm:inline-flex w-full md:w-auto justify-center items-center gap-2 text-sm text-stone-700 hover:text-stone-900">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="font-sans font-light" style={{}}>Login</span>
</button>
<button className="hidden sm:inline-flex w-full md:w-auto justify-center items-center gap-2 text-sm text-stone-700 hover:text-stone-900">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span className="font-sans font-light" style={{}}>Register</span>
</button>
<button className="inline-flex w-full md:w-auto justify-center items-center gap-1 text-sm text-stone-700 hover:text-stone-900">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans font-light" style={{}}>Favorites</span>
<span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full text-xs px-1 bg-stone-900 text-white font-sans font-light" style={{}}>0</span>
</button>
<button className="inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-md px-3 sm:px-4 py-2 text-sm font-medium transition bg-orange-600 text-white hover:bg-orange-700">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-sans font-light" style={{}}>Create a Listing</span>
</button>
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-200 hover:bg-stone-100" id="navToggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</div>

<nav className="bg-stone-900 text-stone-100" id="mainNav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<ul className="hidden lg:flex items-center gap-6 text-sm">
<li className=""><a className="inline-flex items-center gap-1 py-4 hover:text-white/90 font-sans font-light" href="#" style={{}}><svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Home</a></li>
<li className="group relative">
<button className="inline-flex hover:text-white/90 pt-4 pb-4 gap-x-1 gap-y-1 items-center font-sans font-light" style={{}}>Properties <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 mt-2 w-56 rounded-lg border backdrop-blur p-2 shadow-xl border-stone-800 bg-stone-900/95">
<a className="block rounded-md px-3 py-2 text-sm hover:bg-stone-800 font-sans font-light" href="#" style={{}}>For Sale</a>
<a className="block rounded-md px-3 py-2 text-sm hover:bg-stone-800 font-sans font-light" href="#" style={{}}>For Rent</a>
<a className="block rounded-md px-3 py-2 text-sm hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Luxury</a>
</div>
</li>
<li className="group relative">
<button className="inline-flex items-center gap-1 py-4 hover:text-white/90 font-sans font-light" style={{}}>Agents <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 mt-2 w-56 rounded-lg border backdrop-blur p-2 shadow-xl border-stone-800 bg-stone-900/95">
<a className="block rounded-md px-3 py-2 text-sm hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Top Rated</a>
<a className="block rounded-md px-3 py-2 text-sm hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Near You</a>
</div>
</li>
<li className=""><a className="inline-flex items-center gap-1 py-4 hover:text-white/90 font-sans font-light" href="#" style={{}}>Resources</a></li>
<li className=""><a className="inline-flex items-center gap-1 py-4 hover:text-white/90 font-sans font-light" href="#" style={{}}>Contact</a></li>
</ul>
<div className="lg:hidden py-3 text-sm text-white/80 font-sans font-light" style={{}}>Menu</div>
</div>
</div>

<div className="lg:hidden hidden border-t border-stone-800" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2 text-sm">
<a className="block rounded-md px-3 py-2 hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Home</a>
<a className="block rounded-md px-3 py-2 hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Properties</a>
<a className="block rounded-md px-3 py-2 hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Agents</a>
<a className="block rounded-md px-3 py-2 hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Resources</a>
<a className="block rounded-md px-3 py-2 hover:bg-stone-800 font-sans font-light" href="#" style={{}}>Contact</a>
</div>
</div>
</div>
</nav>

<section className="relative">
<div className="relative h-[64vh] md:h-[78vh] w-full overflow-hidden" id="heroBg">
<img alt="Bright modern living room" className="h-full w-full object-cover" id="heroImage" src="https://eztgdyvwislnqxeqylwu.supabase.co/storage/v1/object/public/blog_thumbnails/369f32bb-0a9f-4a4c-8c3a-fb448480626a.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-stone-900/70 via-stone-900/20"></div>
</div>

<button className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full shadow-lg bg-white text-stone-900 hover:bg-stone-100" id="prevSlide">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full shadow-lg bg-white text-stone-900 hover:bg-stone-100" id="nextSlide">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute inset-x-0 top-10 md:top-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="w-full md:max-w-2xl lg:max-w-3xl rounded-2xl shadow-2xl ring-1 bg-white ring-black/5">
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="">
<h1 className="text-2xl sm:text-3xl tracking-tight text-stone-900 font-bricolage font-light" id="propTitle" style={{}}>Amazing Home For Family</h1>
<div className="mt-2 flex items-center gap-2 text-sm text-stone-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-orange-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans font-light" id="propAddress" style={{}}>501 Brickell Key Dr STE 400, Miami, FL 33131, USA</span>
</div>
</div>
<button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium transition bg-orange-600 text-white hover:bg-orange-700">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="font-sans font-light" style={{}}>Details</span>
</button>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="">
<div className="text-xl tracking-tight text-stone-900 font-sans font-light" id="propPrice" style={{}}>$890,000</div>
<div className="text-sm text-stone-600 font-sans font-light" id="propPricePer" style={{}}>$3,690 / sq ft</div>
</div>
<div className="sm:col-span-2">
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
<div className="inline-flex items-center gap-2 text-stone-800">
<svg className="lucide lucide-bed-double w-4 h-4 text-orange-600" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
<span className="font-sans font-light" id="propBeds" style={{}}>3</span><span className="text-stone-500 font-sans font-light" style={{}}>Beds</span>
</div>
<div className="inline-flex items-center gap-2 text-stone-800">
<svg className="lucide lucide-shower-head w-4 h-4 text-orange-600" data-lucide="shower-head" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 2.5 2.5"></path><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path><path d="M15 5 5 15"></path><path d="M14 17v.01"></path><path d="M10 16v.01"></path><path d="M13 13v.01"></path><path d="M16 10v.01"></path><path d="M11 20v.01"></path><path d="M17 14v.01"></path><path d="M20 11v.01"></path></svg>
<span className="font-sans font-light" id="propBaths" style={{}}>2</span><span className="text-stone-500 font-sans font-light" style={{}}>Baths</span>
</div>
<div className="inline-flex items-center gap-2 text-stone-800">
<svg className="lucide lucide-ruler w-4 h-4 text-orange-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
<span className="font-sans font-light" id="propArea" style={{}}>1450</span><span className="text-stone-500 font-sans font-light" style={{}}>Sq Ft</span>
</div>
<div className="inline-flex items-center gap-2 text-stone-800">
<svg className="lucide lucide-home w-4 h-4 text-orange-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-sans font-light" id="propType" style={{}}>Single Family Home</span>
</div>
</div>
</div>
</div>
<div className="mt-5 sm:hidden">
<button className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition bg-orange-600 text-white hover:bg-orange-700">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="font-sans font-light" style={{}}>Details</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="-mt-8 md:-mt-10">
<div className="rounded-xl shadow-xl ring-1 bg-white ring-black/5">
<div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-stone-200">
<div className="flex-1 p-4 sm:p-5">
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1 font-sans font-light" style={{}}>Keyword</label>
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-md border pl-9 pr-3 py-2.5 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600/30 focus:border-orange-600 border-stone-200 bg-white" id="kw" placeholder="Enter keyword..."/>
</div>
</div>

<div className="w-full md:w-44 p-4 sm:p-5 relative">
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1 font-sans font-light" style={{}}>Status</label>
<button className="w-full inline-flex items-center justify-between rounded-md border px-3 py-2.5 text-sm border-stone-200 bg-white hover:bg-stone-50" data-dd="status">
<span className="font-sans font-light" id="statusValue" style={{}}>Any</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-48 rounded-md border shadow-lg border-stone-200 bg-white" id="dd-status">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Any" style={{}}>Any</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="For Sale" style={{}}>For Sale</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="For Rent" style={{}}>For Rent</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Open House" style={{}}>Open House</button></li>
</ul>
</div>
</div>
<div className="w-full md:w-44 p-4 sm:p-5 relative">
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1 font-sans font-light" style={{}}>Type</label>
<button className="w-full inline-flex items-center justify-between rounded-md border px-3 py-2.5 text-sm border-stone-200 bg-white hover:bg-stone-50" data-dd="type">
<span className="font-sans font-light" id="typeValue" style={{}}>Any</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-48 rounded-md border shadow-lg border-stone-200 bg-white" id="dd-type">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Any" style={{}}>Any</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="House" style={{}}>House</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Condo" style={{}}>Condo</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Townhome" style={{}}>Townhome</button></li>
</ul>
</div>
</div>
<div className="w-full md:w-44 p-4 sm:p-5 relative">
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1 font-sans font-light" style={{}}>Bedrooms</label>
<button className="w-full inline-flex items-center justify-between rounded-md border px-3 py-2.5 text-sm border-stone-200 bg-white hover:bg-stone-50" data-dd="beds">
<span className="font-sans font-light" id="bedsValue" style={{}}>Any</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-48 rounded-md border shadow-lg border-stone-200 bg-white" id="dd-beds">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Any" style={{}}>Any</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="1+" style={{}}>1+</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="2+" style={{}}>2+</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="3+" style={{}}>3+</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="4+" style={{}}>4+</button></li>
</ul>
</div>
</div>
<div className="w-full md:w-44 p-4 sm:p-5 relative">
<label className="block text-xs uppercase tracking-wide text-stone-500 mb-1 font-sans font-light" style={{}}>Bathrooms</label>
<button className="w-full inline-flex items-center justify-between rounded-md border px-3 py-2.5 text-sm border-stone-200 bg-white hover:bg-stone-50" data-dd="baths">
<span className="font-sans font-light" id="bathsValue" style={{}}>Any</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-48 rounded-md border shadow-lg border-stone-200 bg-white" id="dd-baths">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="Any" style={{}}>Any</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="1+" style={{}}>1+</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="2+" style={{}}>2+</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-stone-50 font-sans font-light" data-opt="3+" style={{}}>3+</button></li>
</ul>
</div>
</div>
<div className="p-4 sm:p-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-2.5 text-sm border-stone-200 hover:bg-stone-50" id="clearFilters">
<svg className="lucide lucide-undo-2 w-4 h-4" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg>
<span className="font-sans font-light" style={{}}>Clear</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2.5 text-sm font-medium transition text-white hover:bg-red-600" id="goSearch">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="font-sans font-light" style={{}}>Go</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-bricolage font-light" style={{}}>Featured Properties</h2>
<p className="mt-2 text-stone-600 font-sans font-light" style={{}}>Handpicked homes that blend design, comfort, and location.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800" href="#">
<span className="font-sans font-light" style={{}}>Browse all</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group overflow-hidden rounded-xl ring-1 shadow-sm hover:shadow-md transition bg-white ring-stone-200">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Property exterior" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images1.loopnet.com/i2/gXwYyAGra8TywEOioWaZRkeWM9SjNEe3SXseaKufcoY/110/4914-Lankershim-Blvd-North-Hollywood-CA-Building-Photo-1-Large.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex rounded-full backdrop-blur px-3 py-1 text-xs bg-white/90 font-sans font-light" style={{}}>For Sale</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 hover:bg-white">
<svg className="lucide lucide-heart w-4 h-4 text-stone-900" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans font-light" style={{}}>Palm Grove Estate</h3>
<div className="text-base tracking-tight text-stone-900 font-sans font-light" style={{}}>$1,250,000</div>
</div>
<p className="mt-1 text-sm text-stone-600 font-sans font-light" style={{}}>Coral Gables, FL</p>
<div className="mt-4 flex items-center gap-5 text-sm text-stone-800">
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-bed-double w-4 h-4 text-orange-600" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>4</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-shower-head w-4 h-4 text-orange-600" data-lucide="shower-head" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 2.5 2.5"></path><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path><path d="M15 5 5 15"></path><path d="M14 17v.01"></path><path d="M10 16v.01"></path><path d="M13 13v.01"></path><path d="M16 10v.01"></path><path d="M11 20v.01"></path><path d="M17 14v.01"></path><path d="M20 11v.01"></path></svg>3</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-ruler w-4 h-4 text-orange-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>2,100 sf</span>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-xl ring-1 shadow-sm hover:shadow-md transition bg-white ring-stone-200">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Modern living room" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images1.loopnet.com/i2/UdHG3mOFx1BOtZJtdAGCmdh1B_hbHC6hn-g3J7dFtNg/110/image.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex rounded-full backdrop-blur px-3 py-1 text-xs bg-white/90 font-sans font-light" style={{}}>For Rent</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 hover:bg-white">
<svg className="lucide lucide-heart w-4 h-4 text-stone-900" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans font-light" style={{}}>Seaside Loft</h3>
<div className="text-base tracking-tight text-stone-900 font-sans font-light" style={{}}>$4,200/mo</div>
</div>
<p className="mt-1 text-sm text-stone-600 font-sans font-light" style={{}}>Miami Beach, FL</p>
<div className="mt-4 flex items-center gap-5 text-sm text-stone-800">
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-bed-double w-4 h-4 text-orange-600" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>2</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-shower-head w-4 h-4 text-orange-600" data-lucide="shower-head" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 2.5 2.5"></path><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path><path d="M15 5 5 15"></path><path d="M14 17v.01"></path><path d="M10 16v.01"></path><path d="M13 13v.01"></path><path d="M16 10v.01"></path><path d="M11 20v.01"></path><path d="M17 14v.01"></path><path d="M20 11v.01"></path></svg>2</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-ruler w-4 h-4 text-orange-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/0svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>1,150 sf</span>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-xl ring-1 shadow-sm hover:shadow-md transition bg-white ring-stone-200">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Minimal kitchen" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://ahronzilbersteinllc.com/wp-content/uploads/2024/08/830-S-MainStreet4-1024x768.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex rounded-full backdrop-blur px-3 py-1 text-xs bg-white/90 font-sans font-light" style={{}}>New</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 hover:bg-white">
<svg className="lucide lucide-heart w-4 h-4 text-stone-900" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans font-light" style={{}}>Sunset Villa</h3>
<div className="text-base tracking-tight text-stone-900 font-sans font-light" style={{}}>$980,000</div>
</div>
<p className="mt-1 text-sm text-stone-600 font-sans font-light" style={{}}>Key Biscayne, FL</p>
<div className="mt-4 flex items-center gap-5 text-sm text-stone-800">
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-bed-double w-4 h-4 text-orange-600" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>3</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-shower-head w-4 h-4 text-orange-600" data-lucide="shower-head" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 2.5 2.5"></path><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path><path d="M15 5 5 15"></path><path d="M14 17v.01"></path><path d="M10 16v.01"></path><path d="M13 13v.01"></path><path d="M16 10v.01"></path><path d="M11 20v.01"></path><path d="M17 14v.01"></path><path d="M20 11v.01"></path></svg>2</span>
<span className="inline-flex items-center gap-2 font-sans font-light" style={{}}><svg className="lucide lucide-ruler w-4 h-4 text-orange-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>1,620 sf</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-14 bg-stone-900 text-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-2xl p-6 ring-1 bg-stone-800/60 ring-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
<svg className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-sans font-light" style={{}}>Trusted Agents</h3>
<p className="mt-2 text-sm text-stone-300 font-sans font-light" style={{}}>Verified local experts guiding you from search to close.</p>
</div>
<div className="rounded-2xl p-6 ring-1 bg-stone-800/60 ring-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-sans font-light" style={{}}>Smart Search</h3>
<p className="mt-2 text-sm text-stone-300 font-sans font-light" style={{}}>Filter by what matters—neighborhoods, schools, and more.</p>
</div>
<div className="rounded-2xl p-6 ring-1 bg-stone-800/60 ring-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-sans font-light" style={{}}>Design-Forward</h3>
<p className="mt-2 text-sm text-stone-300 font-sans font-light" style={{}}>Curated properties that meet high standards of design.</p>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-gradient-to-br px-6 py-12 sm:px-10 from-orange-600 to-pink-600 text-white">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="">
<h3 className="text-2xl md:text-3xl tracking-tight font-bricolage font-light" style={{}}>List your property with Total Capital Inc</h3>
<p className="mt-2 text-white/90 font-sans font-light" style={{}}>Reach qualified buyers and renters with professional marketing.</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium bg-white text-stone-900 hover:bg-stone-100">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-sans font-light" style={{}}>Create a Listing</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="font-sans font-light" style={{}}>Talk to an Agent</span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-auto items-center justify-center">
<img alt="Total Capital Inc logo" className="h-9 w-auto object-contain" src="https://emerald-quickest-swallow-922.mypinata.cloud/ipfs/bafybeieyeuzegrxa5uwlkhmyyn4aaqj5v2mjlbqg4bqq54xov3xsvc6xra?w=800&amp;q=80"/>
</span>
<span className="text-xl tracking-tight font-sans font-light" style={{}}>Total Capital Inc</span>
</div>
<p className="mt-3 text-sm text-stone-600 font-sans font-light" style={{}}>Residential and Commercial Rentals in San Fernando Valley.</p>
</div>
<div>
<h4 className="text-sm tracking-tight font-sans font-light" style={{}}>Company</h4>
<ul className="mt-3 space-y-2 text-sm text-stone-600">
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>About</a></li>
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm tracking-tight font-sans font-light" style={{}}>Support</h4>
<ul className="mt-3 space-y-2 text-sm text-stone-600">
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>Help Center</a></li>
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>Terms</a></li>
<li><a className="hover:text-stone-900 font-sans font-light" href="#" style={{}}>Privacy</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t pt-6 text-sm border-stone-200 text-stone-600">
<span className="font-sans font-light" style={{}}>© <span className="font-sans font-light" id="year" style={{}}>2025</span> Total Capital Inc. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-stone-900" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-stone-900" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-stone-900" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>




    </>
  );
}
