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



        // Splash Screen Logic
        window.addEventListener('DOMContentLoaded', () => {
            const splash = document.getElementById('splash-screen');
            setTimeout(() => {
                splash.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 1000);
            }, 2000);
        });

        // Dashboard Toggle Logic
        function toggleDashboard(show) {
            const landingPage = document.getElementById('landing-page');
            const dashboard = document.getElementById('dashboard-view');
            
            if (show) {
                // Hide Landing, Show Dashboard
                landingPage.style.display = 'none';
                dashboard.classList.remove('hidden');
                dashboard.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent body scroll on dashboard
            } else {
                // Show Landing, Hide Dashboard
                dashboard.classList.add('hidden');
                dashboard.classList.remove('flex');
                landingPage.style.display = 'block';
                document.body.style.overflow = 'auto'; // Restore scroll
            }
        }
    
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
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out" id="splash-screen">
<div className="relative p-8 text-center animate-fade-in-up">
<img alt="Palace on Ganges Logo" className="mx-auto w-80 h-auto object-contain md:w-96 drop-shadow-2xl" src="https://placehold.co/600x400/000000/D4AF37?text=PALACE+on+GANGES%0AHERITAGE+HOTEL&amp;font=playfair-display"/>
<div className="mt-8 flex justify-center">
<div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-50"></div>
</div>
<p className="mt-4 font-serif text-sm italic text-stone-400 tracking-wider">Welcome to Varanasi</p>
</div>
</div>

<main className="transition-opacity duration-500 ease-in-out" id="landing-page">

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
<a className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-stone-400/40 transition-transform hover:scale-110" href="https://wa.me/919450712345" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<span className="absolute right-16 rounded-md bg-stone-900 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">Chat on WhatsApp</span>
</a>
<button className="group flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg shadow-stone-400/40 transition-transform hover:scale-110">
<iconify-icon icon="solar:dialog-2-linear" width="28"></iconify-icon>
<span className="absolute right-16 rounded-md bg-stone-900 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">Need Assistance?</span>
</button>
</div>

<nav className="fixed z-40 bg-white/90 border-stone-200/50 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

<a className="group flex items-center gap-2" href="#">
<span className="serif text-xl font-semibold text-stone-900 tracking-tight">PALACE <span className="text-amber-600 font-serif italic">on</span> GANGES</span>
</a>

<div className="hidden items-center gap-6 xl:flex">
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#">Home</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#about">About Us</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#rooms">Rooms</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#amenities">Amenities</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#gallery">Gallery</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#reviews">Reviews</a>

<button className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide flex items-center gap-1" onclick="toggleDashboard(true)">
                        Dashboard
                    </button>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#offers">Offers</a>
<a className="text-xs font-medium text-stone-500 hover:text-amber-700 transition-colors uppercase tracking-wide" href="#contact">Contact</a>
<a className="bg-amber-700 text-stone-50 hover:bg-amber-800 px-5 py-2.5 text-xs font-medium transition-all rounded-sm uppercase tracking-wide" href="#booking">Book Now</a>
</div>

<button className="xl:hidden text-stone-900" onclick="toggleDashboard(true)">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Varanasi Ganges River at Sunrise" className="animate-ken-burns h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06967c47-bb7d-405a-94e5-1b35b8285aa8_3840w.jpg"/>
<div className="bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
<h1 className="serif mb-4 text-5xl font-medium leading-tight tracking-tight md:text-7xl drop-shadow-lg">
                    Wake Up to the <br/> <span className="italic text-amber-200">Sacred Ganga</span>
</h1>
<p className="mx-auto mb-10 text-lg font-light tracking-wide text-stone-100 md:text-xl drop-shadow-md">
                    Your Heritage Retreat Awaits
                </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex w-full items-center justify-center gap-2 rounded-sm bg-amber-700 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-amber-800 sm:w-auto uppercase tracking-wide shadow-xl shadow-amber-900/20 backdrop-blur-sm" href="#booking">
                        Book Your Stay Now
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="md:py-32 bg-[#fafaf9] pt-24 pr-6 pb-24 pl-6" id="about">
<div className="mx-auto max-w-7xl">
<div className="grid gap-16 md:grid-cols-2 md:items-center gap-x-16 gap-y-16">
<div className="relative order-2 md:order-1">
<div className="overflow-hidden rounded-sm border border-stone-200 shadow-xl shadow-stone-200/50">
<img alt="Heritage Architecture" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09e59f15-a9fe-4fd2-8907-e9527a656539_1600w.jpg"/>
</div>
<div className="-bottom-6 -right-6 hidden leading-tight md:flex text-xs font-medium text-white text-center bg-stone-900 w-32 h-32 border-[#fafaf9] border-4 rounded-full pt-4 pr-4 pb-4 pl-4 absolute items-center justify-center">HeritageSince1995</div>
</div>
<div className="order-1 md:order-2 space-y-6 gap-x-16 gap-y-16">
<span className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Our Story</span>
<h2 className="serif md:text-4xl text-3xl font-medium text-stone-900 tracking-tight">About Palace on Ganges</h2>
<p className="text-base leading-relaxed text-stone-500 font-light">
                            Steeped in the ancient soul of Varanasi, Palace on Ganges is a tribute to the architectural splendor of a bygone era. Located at the serene Assi Ghat, our property stands as a silent witness to the flowing divinity of the Ganga.
                        </p>
<p className="text-base leading-relaxed text-stone-500 font-light">
                            More than just a hotel, we are a custodian of Banarasi culture. From our heritage-inspired architecture featuring intricate jali work to our commitment to guest satisfaction, every detail is curated to offer a spiritual yet luxurious sanctuary. Experience the timeless charm of India's spiritual capital with us.
                        </p>
<div className="pt-4">
<div className="h-px w-24 bg-amber-600"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#eae2dc] via-[#d5b190] to-[#b8a594] border-stone-200 pt-24 pr-6 pb-24 pl-6" id="rooms">
<div className="mx-auto max-w-7xl">
<div className="mb-16 text-center">
<span className="block uppercase text-xs font-semibold text-amber-800 tracking-widest mb-3">Luxury Living</span>
<h2 className="serif text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">Our Accommodations</h2>
<p className="font-light text-yellow-950 mt-4">Sanctuaries of comfort blending heritage charm with modern amenities.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#fafaf9] transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-stone-200/50">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Standard Room" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-6">
<h3 className="serif text-lg font-medium text-stone-900">Standard Room</h3>
<p className="mt-2 text-xs leading-relaxed text-stone-500">Perfect for solo travelers and couples. Features modern facilities in a cozy, heritage setting.</p>
<div className="mt-auto pt-6 border-t border-stone-200/60 mt-4">
<p className="text-[10px] uppercase tracking-wide text-stone-400">Starting from</p>
<div className="flex items-end justify-between mt-1">
<span className="serif text-lg font-medium text-stone-900">₹4,800<span className="text-xs font-normal text-stone-500 font-sans">/night</span></span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#fafaf9] transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-stone-200/50">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Ganga View Room" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] px-2 py-1 uppercase tracking-wider font-semibold rounded-sm">Popular</div>
</div>
<div className="flex flex-1 flex-col p-6">
<h3 className="serif text-lg font-medium text-stone-900">Ganga View Room</h3>
<p className="mt-2 text-xs leading-relaxed text-stone-500">Wake up to the rising sun over the Ganges. Offers breathtaking river views and a peaceful ambiance.</p>
<div className="mt-auto pt-6 border-t border-stone-200/60 mt-4">
<p className="text-[10px] uppercase tracking-wide text-stone-400">Starting from</p>
<div className="flex items-end justify-between mt-1">
<span className="serif text-lg font-medium text-stone-900">₹6,500<span className="text-xs font-normal text-stone-500 font-sans">/night</span></span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#fafaf9] transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-stone-200/50">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Suite Room" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-6">
<h3 className="serif text-lg font-medium text-stone-900">Suite Room</h3>
<p className="mt-2 text-xs leading-relaxed text-stone-500">Expansive luxury interiors with separate living areas. Ideal for long stays and indulgence.</p>
<div className="mt-auto pt-6 border-t border-stone-200/60 mt-4">
<p className="text-[10px] uppercase tracking-wide text-stone-400">Starting from</p>
<div className="flex items-end justify-between mt-1">
<span className="serif text-lg font-medium text-stone-900">₹9,200<span className="text-xs font-normal text-stone-500 font-sans">/night</span></span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#fafaf9] transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-stone-200/50">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Family Room" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-6">
<h3 className="serif text-lg font-medium text-stone-900">Family Room</h3>
<p className="mt-2 text-xs leading-relaxed text-stone-500">Spacious accommodation designed for families, offering extra beds and ample room for everyone.</p>
<div className="mt-auto pt-6 border-t border-stone-200/60 mt-4">
<p className="text-[10px] uppercase tracking-wide text-stone-400">Starting from</p>
<div className="flex items-end justify-between mt-1">
<span className="serif text-lg font-medium text-stone-900">₹10,500<span className="text-xs font-normal text-stone-500 font-sans">/night</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafaf9] border-b border-stone-200" id="amenities">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 text-center">
<span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-amber-700">Services</span>
<h2 className="serif text-3xl font-medium tracking-tight text-stone-900">Unmatched Facilities</h2>
</div>
<div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon className="" icon="solar:snowflake-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">Air Conditioning</h4>
<p className="text-xs text-stone-500 mt-1">In all rooms</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-amber-700 bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0a3a923-675f-4747-ae5f-b71bf59c77da_320w.webp)] bg-cover bg-center border-stone-100 border rounded-full pt-3 pr-3 pb-3 pl-3 shadow-sm">
<iconify-icon className="" icon="solar:wi-fi-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">High-Speed Wi-Fi</h4>
<p className="text-xs text-stone-500 mt-1">Complimentary access</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon className="" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">Ganges View Dining</h4>
<p className="text-xs text-stone-500 mt-1">Rooftop restaurant</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">Room Service</h4>
<p className="text-xs text-stone-500 mt-1">Available 24/7</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">24-Hour Security</h4>
<p className="text-xs text-stone-500 mt-1">CCTV &amp; Guards</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">Premium Toiletries</h4>
<p className="text-xs text-stone-500 mt-1">Ayurvedic selection</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon icon="solar:tea-cup-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900 text-sm">Tea/Coffee Maker</h4>
<p className="text-xs text-stone-500 mt-1">In-room refreshment</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-white p-3 shadow-sm border border-stone-100 text-amber-700">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 text-sm">Travel Desk</h4>
<p className="text-xs text-stone-500 mt-1">Boat rides &amp; tours</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-50 pt-24 pr-6 pb-24 pl-6" id="gallery">
<div className="max-w-full mr-auto ml-auto">
<div className="mb-12 text-center">
<span className="block uppercase text-xs font-semibold text-amber-700 tracking-widest mb-3">Gallery</span>
<h2 className="serif text-3xl font-medium tracking-tight text-stone-900">Visual Journey</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[600px] md:h-[500px]">

<div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group">
<img alt="Ganga Aarti" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c95e087-49a6-4cf0-9b43-7af8f79cc291_1600w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-wider">Evening Aarti</span>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
<img alt="Boat Ride" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68c313db-9802-44ff-b896-d33bdc3480cf_800w.jpg"/>
<span className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-wider drop-shadow-md">Boat Rides</span>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
<img alt="Ghats" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09e59f15-a9fe-4fd2-8907-e9527a656539_800w.jpg"/>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
<img alt="Hotel Interior" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0320c64b-f135-4410-92e5-1a60206a543c_800w.jpg" style={{maskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(250deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
<img alt="Dining" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53da0bfb-d02d-432f-bc1d-4f41caee98a5_800w.jpg"/>
<span className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-wider drop-shadow-md">Rooftop Dining</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-200" id="reviews">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-amber-700">Guest Experiences</span>
<h2 className="serif text-3xl font-medium tracking-tight text-stone-900">Words from the Heart</h2>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="relative flex flex-col justify-between rounded-sm border border-stone-100 bg-[#fafaf9] p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-100">
<div className="">
<div className="mb-6 flex gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-6 text-sm italic leading-relaxed text-stone-600">"The location at Assi Ghat is unbeatable. Waking up to the bells of the morning Aarti was a spiritual awakening I didn't know I needed. The heritage architecture makes you feel like royalty."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600">SJ</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Sarah Jenkins</h4>
<p className="text-[10px] uppercase tracking-wide text-stone-400">United Kingdom</p>
</div>
</div>
</div>

<div className="relative flex flex-col justify-between rounded-sm border border-stone-100 bg-[#fafaf9] p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-100">
<div>
<div className="mb-6 flex gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-6 text-sm italic leading-relaxed text-stone-600">"An oasis of calm in the chaotic beauty of Varanasi. The rooftop dining overlooking the Ganges is an experience I will cherish forever. The staff treated us like family."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600">RM</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Rahul Malhotra</h4>
<p className="text-[10px] uppercase tracking-wide text-stone-400">Mumbai, India</p>
</div>
</div>
</div>

<div className="relative flex flex-col justify-between rounded-sm border border-stone-100 bg-[#fafaf9] p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-100">
<div>
<div className="mb-6 flex gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="mb-6 text-sm italic leading-relaxed text-stone-600">"Excellent service and beautiful rooms. The boat ride arranged by the hotel at sunrise was the highlight of our trip. Highly recommended for anyone seeking an authentic stay."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600">ED</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Elena Dubois</h4>
<p className="text-[10px] uppercase tracking-wide text-stone-400">France</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-stone-200 border-b pt-16 pr-6 pb-16 pl-6" id="booking">
<div className="flex flex-col md:flex-row bg-stone-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06967c47-bb7d-405a-94e5-1b35b8285aa8_1600w.jpg)] max-w-7xl bg-cover bg-center mr-auto ml-auto gap-x-0 gap-y-12 items-center">
<div className="md:w-1/2 bg-orange-50/95 backdrop-blur-sm p-8 h-full">
<h2 className="serif text-2xl font-semibold text-stone-900 tracking-tight mb-6 border-b border-amber-200 pb-2 inline-block">Nearby Places &amp; Connectivity</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-6">

<div className="space-y-6">
<h3 className="uppercase text-xs font-semibold text-amber-700 tracking-widest mb-4">Arrival</h3>
<div className="flex gap-4 items-start group">
<div className="flex shrink-0 group-hover:border-amber-200 group-hover:text-amber-700 transition-colors text-stone-600 bg-white w-8 h-8 border-stone-200 border rounded-full shadow-sm items-center justify-center">
<iconify-icon icon="solar:plane-linear" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-xs font-bold text-stone-900">Nearest Airport</h4>
<p className="text-xs text-stone-500 mt-0.5">LBS International Airport (25 km)</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="flex shrink-0 group-hover:border-amber-200 group-hover:text-amber-700 transition-colors text-stone-600 bg-white w-8 h-8 border-stone-200 border rounded-full shadow-sm items-center justify-center">
<iconify-icon icon="solar:train-linear" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-xs font-bold text-stone-900">Railway Station</h4>
<p className="text-xs text-stone-500 mt-0.5">Varanasi Junction (6 km)</p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="">
<h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-4">
                                    Attractions
                                </h3>
<ul className="text-xs text-stone-600 space-y-2 font-medium">
<li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-amber-400"></span>Assi Ghat (Walking distance)</li>
<li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-stone-400"></span>Kashi Vishwanath Temple</li>
<li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-stone-400"></span>Sankat Mochan Temple</li>
</ul>
</div>
<div className="">
<h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-4">
                                    Key Areas
                                </h3>
<ul className="text-xs text-stone-600 space-y-2 font-medium">
<li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-stone-400"></span>Banaras Hindu University</li>
<li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-stone-400"></span>Godowlia Market</li>
</ul>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 w-full p-8 md:p-12 bg-white/95 backdrop-blur-md h-full flex flex-col justify-center">
<div className="mb-8">
<span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-amber-700">Book Direct</span>
<h2 className="serif text-3xl font-medium tracking-tight text-stone-900">Reserve Your Stay</h2>
<p className="text-xs text-stone-500 mt-2">Best Rate Guarantee • Instant Confirmation</p>
</div>
<form className="space-y-5">
<div className="grid gap-5 md:grid-cols-2">
<div className="space-y-1">
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-400">Check-in</label>
<input className="w-full rounded-sm border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:outline-none" type="date"/>
</div>
<div className="space-y-1">
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-400">Check-out</label>
<input className="w-full rounded-sm border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:outline-none" type="date"/>
</div>
</div>
<div className="grid gap-5 md:grid-cols-2">
<div className="space-y-1">
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-400">Room</label>
<div className="relative">
<select className="w-full appearance-none rounded-sm border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:outline-none">
<option>Standard Room</option>
<option>Ganga View Room</option>
<option>Suite Room</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-400">Guests</label>
<div className="relative">
<select className="w-full appearance-none rounded-sm border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:outline-none">
<option>2 Adults</option>
<option>2 Adults, 1 Child</option>
<option>3 Adults</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full rounded-sm bg-stone-900 py-3.5 text-sm font-medium text-white transition-all hover:bg-amber-700 shadow-lg shadow-stone-900/10 mt-2" type="button">
                            Check Availability
                        </button>
</form>
</div>
</div>
</section>

<section className="bg-stone-900 px-6 py-20 text-stone-50" id="offers">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-stone-800 pb-6">
<div className="">
<span className="block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Specials</span>
<h2 className="serif text-3xl font-medium tracking-tight text-white">Exclusive Packages</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-amber-200 hover:text-white transition-colors" href="#contact">
                        View All Offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-sm border border-stone-800 bg-stone-800/50 p-6 backdrop-blur-sm hover:border-amber-900/50 transition-colors">
<iconify-icon className="text-amber-500 mb-4" icon="solar:temple-linear" width="32"></iconify-icon>
<h3 className="serif text-xl text-white mb-2">Spiritual Tour Package</h3>
<p className="text-stone-400 text-sm mb-4">Includes guided temple visits, boat ride for morning Aarti, and breakfast.</p>
<span className="text-xs font-medium text-amber-500 border border-amber-500/30 px-2 py-1 rounded-sm">Popular</span>
</div>
<div className="rounded-sm border border-stone-800 bg-stone-800/50 p-6 backdrop-blur-sm hover:border-amber-900/50 transition-colors">
<iconify-icon className="text-amber-500 mb-4" icon="solar:calendar-date-linear" width="32"></iconify-icon>
<h3 className="serif text-xl text-white mb-2">Long Stay Offer</h3>
<p className="text-stone-400 text-sm mb-4">Stay for 3 nights or more and receive a 15% discount on your total booking.</p>
<span className="text-xs font-medium text-white border border-stone-600 px-2 py-1 rounded-sm">Save 15%</span>
</div>
<div className="rounded-sm border border-stone-800 bg-stone-800/50 p-6 backdrop-blur-sm hover:border-amber-900/50 transition-colors">
<iconify-icon className="text-amber-500 mb-4" icon="solar:snowflake-linear" width="32"></iconify-icon>
<h3 className="serif text-xl text-white mb-2">Seasonal Retreat</h3>
<p className="text-stone-400 text-sm mb-4">Enjoy the winter mist of Varanasi with complimentary hot beverages and dinner.</p>
<span className="text-xs font-medium text-white border border-stone-600 px-2 py-1 rounded-sm">Limited Time</span>
</div>
</div>
</div>
</section>

<section className="bg-[#fafaf9] pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="mx-auto max-w-7xl">
<div className="grid gap-12 md:grid-cols-2">
<div className="">
<span className="block text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Location</span>
<h2 className="serif text-4xl font-medium tracking-tight text-stone-900 mb-8">Get in Touch</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="h-10 w-10 flex items-center justify-center bg-white border border-stone-200 rounded-sm text-stone-900 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-stone-900">Address</h4>
<p className="text-sm text-stone-500 leading-relaxed mt-1">
                                        Palace on Ganges, Assi Ghat Road,<br/>
                                        Near Assi Ghat, Varanasi,<br/>
                                        Uttar Pradesh – 221005, India
                                    </p>
<a className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:underline" href="https://maps.google.com/?q=Palace+on+Ganges+Assi+Ghat+Varanasi" target="_blank">
                                        View on Google Maps <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 flex items-center justify-center bg-white border border-stone-200 rounded-sm text-stone-900 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Phone &amp; WhatsApp</h4>
<p className="text-sm text-stone-500 mt-1">
<a className="hover:text-stone-900 transition-colors" href="tel:+915422450061">+91 542 2450061</a>
</p>
<p className="text-sm text-stone-500 mt-1">
<a className="hover:text-[#25D366] transition-colors flex items-center gap-1" href="https://wa.me/919450712345">
                                            +91 94507 12345 <iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
</a>
</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 flex items-center justify-center bg-white border border-stone-200 rounded-sm text-stone-900 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Email</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 mt-1 block" href="mailto:reservations@palaceonganges.com">reservations@palaceonganges.com</a>
</div>
</div>
</div>
</div>

<div className="h-[400px] w-full bg-stone-200 rounded-sm overflow-hidden border border-stone-200 shadow-lg">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.669866847123!2d83.0041!3d25.2818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33d4b6d4d6d1%3A0x6d4d6d1!2sAssi%20Ghat%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(0.2) sepia(0.2) contrast(1.1)'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 border-t border-stone-800">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid gap-12 md:grid-cols-4">
<div className="md:col-span-1">
<h2 className="serif mb-4 text-2xl font-medium text-stone-100">PALACE <span className="text-base font-light italic text-amber-600">on</span> GANGES</h2>
<p className="mb-6 text-sm leading-relaxed text-stone-500">
                            Heritage Living in Varanasi.
                        </p>
<div className="flex gap-4">
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:shop-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="mb-4 text-sm font-medium text-stone-100 uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#rooms">Our Rooms</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-4 text-sm font-medium text-stone-100 uppercase tracking-wider">Policies</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-4 text-sm font-medium text-stone-100 uppercase tracking-wider">Reviews</h4>

<div className="bg-white/5 p-4 rounded-sm border border-white/10">
<div className="flex items-center gap-2 mb-2">
<span className="text-white font-bold text-lg">4.8</span>
<div className="flex text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-xs text-stone-400">Based on 500+ reviews on Google</p>
<a className="text-xs text-stone-300 mt-2 block underline" href="#">Read Reviews</a>
</div>
</div>
</div>
<div className="mt-16 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2023 Palace on Ganges. All rights reserved.</p>
<p>Designed with heritage and soul.</p>
</div>
</div>
</footer>
</main>

<div className="hidden fixed inset-0 z-[60] bg-stone-50 overflow-auto flex-col h-screen w-full" id="dashboard-view">

<div className="flex flex-col lg:flex-row min-h-screen">

<aside className="w-full lg:w-72 bg-white border-b lg:border-r border-stone-200 flex-shrink-0 relative">
<div className="p-6 border-b border-stone-100 flex items-center justify-between lg:block">
<a className="group flex items-center gap-2" href="#" onclick="toggleDashboard(false)">
<span className="serif text-xl font-semibold text-stone-900 tracking-tight">PALACE <span className="text-amber-600 font-serif italic">on</span> GANGES</span>
</a>
<button className="lg:hidden text-stone-500 hover:text-stone-900" onclick="toggleDashboard(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-4 space-y-1">
<div className="px-4 py-2 mb-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Diksha Gaurav</p>
<p className="text-[10px] uppercase tracking-wide text-amber-600 font-bold">Gold Member</p>
</div>
</div>
</div>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium bg-stone-50 text-amber-700 rounded-sm border-l-[3px] border-amber-600" href="#">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
                        Dashboard Overview
                    </a>
<a className="flex items-center justify-between px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors rounded-sm group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="group-hover:text-amber-600 transition-colors" icon="solar:suitcase-linear" width="20"></iconify-icon>
                            My Bookings
                        </div>
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-[10px] font-bold border border-stone-200">1</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors rounded-sm group" href="#">
<iconify-icon className="group-hover:text-amber-600 transition-colors" icon="solar:user-linear" width="20"></iconify-icon>
                        Profile &amp; Settings
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors rounded-sm group" href="#">
<iconify-icon className="group-hover:text-amber-600 transition-colors" icon="solar:card-linear" width="20"></iconify-icon>
                        Payment Methods
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors rounded-sm group" href="#">
<iconify-icon className="group-hover:text-amber-600 transition-colors" icon="solar:crown-linear" width="20"></iconify-icon>
                        Loyalty Rewards
                    </a>
</div>
<div className="p-4 mt-auto border-t border-stone-100 absolute bottom-0 w-full hidden lg:block">
<button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors w-full" onclick="toggleDashboard(false)">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
                        Back to Home
                    </button>
</div>
</aside>

<main className="flex-1 bg-stone-50/50">

<header className="bg-white border-b border-stone-200 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
<div>
<h1 className="serif text-2xl font-medium text-stone-900">Welcome back, Diksha</h1>
<p className="text-xs text-stone-500 mt-1">Here's what's happening with your account.</p>
</div>
<div className="flex items-center gap-4">
<button className="relative text-stone-400 hover:text-stone-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
</button>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Loyalty Points</p>
<h3 className="serif text-3xl font-medium text-stone-900 mt-1">450</h3>
</div>
<div className="h-10 w-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="w-full bg-stone-100 rounded-full h-1.5">
<div className="bg-amber-600 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<p className="text-[10px] text-stone-400 mt-2">50 points to Platinum Tier</p>
</div>
<div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Upcoming Stays</p>
<h3 className="serif text-3xl font-medium text-stone-900 mt-1">01</h3>
</div>
<div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
</div>
<p className="text-xs text-stone-500">Next check-in: Oct 24, 2023</p>
</div>
<div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Total Nights</p>
<h3 className="serif text-3xl font-medium text-stone-900 mt-1">12</h3>
</div>
<div className="h-10 w-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:moon-linear" width="24"></iconify-icon>
</div>
</div>
<p className="text-xs text-stone-500">Since Jan 2023</p>
</div>
</div>

<div>
<h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">Active Reservation</h2>
<div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/3 relative h-64 md:h-auto">
<img alt="Room" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
<div>
<span className="bg-amber-600 text-white text-[10px] px-2 py-1 uppercase font-bold rounded-sm mb-2 inline-block">Confirmed</span>
<p className="text-white text-lg font-serif font-medium">Ganga View Room</p>
</div>
</div>
</div>
<div className="p-8 md:w-2/3 flex flex-col justify-between">
<div className="grid grid-cols-2 gap-y-6 gap-x-12">
<div>
<p className="text-[10px] uppercase text-stone-400 tracking-wide font-bold mb-1">Check-in</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="solar:calendar-add-linear"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Thu, Oct 24, 2023</p>
</div>
<p className="text-xs text-stone-500 ml-6">From 14:00</p>
</div>
<div>
<p className="text-[10px] uppercase text-stone-400 tracking-wide font-bold mb-1">Check-out</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="solar:calendar-check-linear"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Sat, Oct 26, 2023</p>
</div>
<p className="text-xs text-stone-500 ml-6">Until 11:00</p>
</div>
<div>
<p className="text-[10px] uppercase text-stone-400 tracking-wide font-bold mb-1">Booking Reference</p>
<p className="text-sm font-medium text-stone-900 font-mono tracking-wider">#POG-8823</p>
</div>
<div>
<p className="text-[10px] uppercase text-stone-400 tracking-wide font-bold mb-1">Total Amount</p>
<p className="text-sm font-medium text-stone-900">₹13,000 <span className="text-xs font-normal text-stone-500">(Paid)</span></p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4">
<button className="flex items-center gap-2 rounded-sm bg-stone-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-amber-700 transition-colors shadow-lg shadow-stone-900/10">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Manage Booking
                                    </button>
<button className="flex items-center gap-2 rounded-sm border border-stone-200 bg-white px-5 py-2.5 text-xs font-medium text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-colors">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon> Get Directions
                                    </button>
<button className="flex items-center gap-2 rounded-sm border border-stone-200 bg-white px-5 py-2.5 text-xs font-medium text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-colors">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon> Invoice
                                    </button>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6">
<h3 className="serif text-lg font-medium text-stone-900 mb-1">Stay Preferences</h3>
<p className="text-xs text-stone-500 mb-6">Customize your upcoming experience.</p>
<div className="space-y-4">
<div className="flex items-center justify-between pb-4 border-b border-stone-50">
<div>
<p className="text-sm font-medium text-stone-900">Paperless Check-in</p>
<p className="text-[10px] text-stone-500">Skip the front desk queue</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
</label>
</div>
<div className="flex items-center justify-between pb-4 border-b border-stone-50">
<div>
<p className="text-sm font-medium text-stone-900">WhatsApp Updates</p>
<p className="text-[10px] text-stone-500">Receive room readiness alerts</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-stone-900">Turndown Service</p>
<p className="text-[10px] text-stone-500">Daily evening room refresh</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
</label>
</div>
</div>
</div>
<div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6">
<h3 className="serif text-lg font-medium text-stone-900 mb-1">Quick Actions</h3>
<p className="text-xs text-stone-500 mb-6">Common requests for your stay.</p>
<div className="grid grid-cols-2 gap-3">
<button className="p-3 text-left border border-stone-100 rounded-sm hover:border-amber-200 hover:bg-amber-50/30 transition-all group">
<iconify-icon className="text-stone-400 group-hover:text-amber-600 mb-2" icon="solar:taxi-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-stone-900">Airport Pickup</p>
</button>
<button className="p-3 text-left border border-stone-100 rounded-sm hover:border-amber-200 hover:bg-amber-50/30 transition-all group">
<iconify-icon className="text-stone-400 group-hover:text-amber-600 mb-2" icon="solar:chef-hat-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-stone-900">Dining Reservation</p>
</button>
<button className="p-3 text-left border border-stone-100 rounded-sm hover:border-amber-200 hover:bg-amber-50/30 transition-all group">
<iconify-icon className="text-stone-400 group-hover:text-amber-600 mb-2" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-stone-900">Late Checkout</p>
</button>
<button className="p-3 text-left border border-stone-100 rounded-sm hover:border-amber-200 hover:bg-amber-50/30 transition-all group">
<iconify-icon className="text-stone-400 group-hover:text-amber-600 mb-2" icon="solar:bath-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-stone-900">Spa Booking</p>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
