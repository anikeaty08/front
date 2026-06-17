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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
snow: '#F5F5F5',
himalayan: '#2F4F4F',
sand: '#D9C7A2',
saffron: '#E89C24',
},
animation: {
'float': 'float 20s ease-in-out infinite',
'float-delayed': 'float 25s ease-in-out 5s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) translateX(0)' },
'50%': { transform: 'translateY(-20px) translateX(10px)' },
}
}
}
}
}



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
      

<nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-white/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-himalayan flex items-center justify-center text-white">
<iconify-icon icon="solar:mountains-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-serif tracking-tighter text-lg font-medium group-hover:text-himalayan transition-colors text-stone-900">TLOH.</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#rooms">Rooms</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#food">Dining</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#location">Location</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="tel:09917896135">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        099178 96135
                    </a>
<a className="inline-flex items-center justify-center rounded-full bg-himalayan px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-himalayan/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-himalayan transition-all active:scale-95" href="#book">
                        Book Now
                    </a>
</div>
</div>
</div>
</nav>

<section className="min-h-[95vh] flex overflow-hidden z-0 pt-16 relative items-center justify-center">

<div className="absolute inset-0 z-0 parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1626014903706-5380ee587526?q=80&amp'}}></div>
<div className="z-0 backdrop-blur-[2px] bg-gradient-to-b from-snow/40 via-snow/20 to-snow absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/4 left-10 w-64 h-32 bg-white/20 blur-3xl rounded-full animate-float z-0 mix-blend-overlay"></div>
<div className="absolute bottom-1/3 right-20 w-96 h-48 bg-white/20 blur-3xl rounded-full animate-float-delayed z-0 mix-blend-overlay"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/40 shadow-sm backdrop-blur-md mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-saffron"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-stone-700">9 km from Kartik Swami Temple</span>
</div>
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-5xl tracking-tighter font-serif mb-6 drop-shadow-sm text-stone-900">
                Stay in the true lap <br className="hidden sm:block"/>
<span className="text-himalayan italic pr-2">of the Himalayas.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-medium max-w-2xl mt-4 mr-auto ml-auto drop-shadow-sm text-stone-700">
                Mountain-facing rooms, authentic home-cooked Garhwali meals, and pure peace. Your perfect base camp for the Kartik Swami trek.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="sm:w-auto inline-flex items-center justify-center transition-all active:scale-95 gap-2 text-sm font-medium text-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-md shadow-stone-900/20 hover:bg-stone-800 bg-stone-900" href="#book">
                    Check Availability
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border px-8 py-3.5 text-sm font-medium shadow-sm hover:bg-white transition-all active:scale-95 border-stone-200 text-stone-900" href="#rooms">
                    View Rooms
                </a>
</div>
</div>
</section>

<div className="relative z-20 border-y bg-white/80 backdrop-blur-md border-stone-200/60">
</div>

<section className="relative z-30 -mt-8 max-w-5xl mx-auto px-4 sm:px-6 w-full" id="book">
<div className="bg-white rounded-3xl shadow-xl border p-2 sm:p-4 shadow-stone-200/40 border-stone-100">
<form className="flex flex-col md:flex-row gap-2 md:gap-4 items-end">
<div className="flex-1 w-full relative">
<label className="block text-xs font-medium uppercase tracking-wide mb-1 px-3 text-stone-500">Check-in</label>
<div className="relative flex items-center transition-colors rounded-2xl border focus-within:border-himalayan focus-within:ring-1 focus-within:ring-himalayan px-4 py-3 bg-stone-50 hover:bg-stone-100 border-stone-200">
<iconify-icon className="mr-2 text-stone-400" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 outline-none cursor-pointer text-stone-900" type="date"/>
</div>
</div>
<div className="flex-1 w-full relative">
<label className="block text-xs font-medium uppercase tracking-wide mb-1 px-3 text-stone-500">Check-out</label>
<div className="relative flex items-center transition-colors rounded-2xl border focus-within:border-himalayan focus-within:ring-1 focus-within:ring-himalayan px-4 py-3 bg-stone-50 hover:bg-stone-100 border-stone-200">
<iconify-icon className="mr-2 text-stone-400" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 outline-none cursor-pointer text-stone-900" type="date"/>
</div>
</div>
<div className="flex-1 w-full relative">
<label className="block text-xs font-medium uppercase tracking-wide mb-1 px-3 text-stone-500">Guests</label>
<div className="relative flex items-center transition-colors rounded-2xl border focus-within:border-himalayan focus-within:ring-1 focus-within:ring-himalayan px-4 py-3 bg-stone-50 hover:bg-stone-100 border-stone-200">
<iconify-icon className="mr-2 text-stone-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
<select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 outline-none appearance-none cursor-pointer text-stone-900">
<option>1 Guest</option>
<option selected="">2 Guests</option>
<option>3 Guests</option>
<option>4+ Guests</option>
</select>
<iconify-icon className="absolute right-4 pointer-events-none text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<button className="w-full md:w-auto md:min-w-[140px] h-[50px] inline-flex items-center justify-center rounded-2xl bg-himalayan px-6 text-sm font-medium text-white shadow-sm hover:bg-himalayan/90 focus:outline-none focus:ring-2 focus:ring-himalayan focus:ring-offset-2 transition-all active:scale-95" type="button">
                    Search Rooms
                </button>
</form>
<div className="mt-4 px-3 flex items-center justify-between border-t pt-3 border-stone-100">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-stone-500">Rooms available for this weekend</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-stone-500">Free Cancellation</span>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 z-10 top-0.5 left-0.5 shadow-sm" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-himalayan cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 pt-24 pb-24 relative" id="rooms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-himalayan font-medium tracking-wide text-xs uppercase mb-3">Accommodation</h2>
<h3 className="sm:text-4xl text-3xl tracking-tight font-serif mb-4 text-stone-900">Sanctuary in the clouds.</h3>
<p className="text-base text-stone-600">Wake up to panoramic views of the Garhwal Himalayas. Every room is designed for comfort, peace, and deep rest after your treks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-[2rem] p-2 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-stone-100 hover:shadow-stone-200/40">
<div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-stone-100">
<img alt="Deluxe Mountain View Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm text-stone-800">
<iconify-icon icon="solar:panorama-linear" width="14"></iconify-icon> Full View
                        </div>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h4 className="font-serif text-xl font-medium tracking-tight text-stone-900">Deluxe Mountain View</h4>
</div>
<p className="text-sm mb-6 line-clamp-2 text-stone-500">Spacious room with a private balcony overlooking the valley and snow-capped peaks.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 text-xs font-medium text-stone-600">
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:bed-linear" width="16"></iconify-icon> 2 Adults</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:bath-linear" width="16"></iconify-icon> Attached Bath</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:sun-linear" width="16"></iconify-icon> Balcony</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:drop-linear" width="16"></iconify-icon> 24/7 Hot Water</div>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
<div className="flex flex-col">
<span className="text-xs line-through text-stone-400">₹3,000</span>
<span className="text-lg font-medium text-stone-900">₹2,000<span className="text-xs font-normal text-stone-500"> / night</span></span>
</div>
<button className="px-5 py-2.5 rounded-full text-sm font-medium hover:text-white transition-colors border bg-stone-50 text-stone-900 hover:bg-stone-900 border-stone-200 hover:border-stone-900">
                                Book Now
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-[2rem] p-2 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-stone-100 hover:shadow-stone-200/40">
<div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-stone-100">
<img alt="Family Suite" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h4 className="font-serif text-xl font-medium tracking-tight text-stone-900">Family Standard Room</h4>
</div>
<p className="text-sm mb-6 line-clamp-2 text-stone-500">Cozy setup ideal for small families or trekking groups wanting a comfortable base.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 text-xs font-medium text-stone-600">
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> 3-4 Persons</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:bath-linear" width="16"></iconify-icon> Attached Bath</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:window-frame-linear" width="16"></iconify-icon> Valley View</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:tea-cup-linear" width="16"></iconify-icon> Room Service</div>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
<div className="flex flex-col">
<span className="text-lg font-medium text-stone-900">₹2,500<span className="text-xs font-normal text-stone-500"> / night</span></span>
</div>
<button className="px-5 py-2.5 rounded-full text-sm font-medium hover:text-white transition-colors border bg-stone-50 text-stone-900 hover:bg-stone-900 border-stone-200 hover:border-stone-900">
                                Book Now
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-[2rem] p-2 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hidden lg:flex border-stone-100 hover:shadow-stone-200/40">
<div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-stone-100">
<img alt="Cozy Trekker Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h4 className="font-serif text-xl font-medium tracking-tight text-stone-900">Cozy Trekker Room</h4>
</div>
<p className="text-sm mb-6 line-clamp-2 text-stone-500">Minimalist, clean, and warm. Perfect for solo travelers or budget-conscious couples.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 text-xs font-medium text-stone-600">
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:user-linear" width="16"></iconify-icon> 1-2 Adults</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:bath-linear" width="16"></iconify-icon> Shared Bath Option</div>
<div className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:plug-circle-linear" width="16"></iconify-icon> Power Backup</div>
</div>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
<div className="flex flex-col">
<span className="text-lg font-medium text-stone-900">₹1,200<span className="text-xs font-normal text-stone-500"> / night</span></span>
</div>
<button className="px-5 py-2.5 rounded-full text-sm font-medium hover:text-white transition-colors border bg-stone-50 text-stone-900 hover:bg-stone-900 border-stone-200 hover:border-stone-900">
                                Book Now
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-sand/10 border-y border-sand/20 overflow-hidden relative" id="food">

<div className="-right-32 w-96 h-96 rounded-full absolute top-10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-saffron font-medium tracking-wide text-xs uppercase mb-3">Hospitality Standard</h2>
<h3 className="sm:text-4xl lg:text-5xl leading-tight text-3xl tracking-tight font-serif mb-6 text-stone-900">Taste of home.<br/>Comfort of a hotel.</h3>
<p className="text-base mb-8 leading-relaxed text-stone-600">
                        We believe that a true homestay experience requires two things above all: soul-warming food and immaculate cleanliness. We've listened to our guests and completely revamped our standards.
                    </p>
<div className="space-y-6">

<div className="flex gap-4 items-start bg-white p-5 rounded-2xl border shadow-sm border-stone-100">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-himalayan/10 flex items-center justify-center text-himalayan">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight mb-1 text-stone-900">The Fresh Linen Guarantee</h4>
<p className="text-sm leading-relaxed text-stone-500">Every room is deep-cleaned between stays. We guarantee crisp, professionally laundered white linens and spotless bathrooms, monitored daily by management.</p>
</div>
</div>

<div className="flex gap-4 items-start bg-white p-5 rounded-2xl border shadow-sm border-stone-100">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight mb-1 text-stone-900">Authentic Garhwali Kitchen</h4>
<p className="text-sm leading-relaxed text-stone-500">Meals prepared by our family using locally sourced organic ingredients. Open kitchen policy—you are welcome to see how we maintain hygiene while preparing your Mandua ki Roti.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-10">
<img alt="Clean pristine bed" className="w-full h-64 object-cover rounded-2xl shadow-md border border-white/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Fresh ingredients" className="w-full h-48 object-cover rounded-2xl shadow-md border border-white/50" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Local food" className="w-full h-56 object-cover rounded-2xl shadow-md border border-white/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="w-full h-64 rounded-2xl bg-himalayan p-6 text-white flex flex-col justify-center items-center text-center shadow-md">
<iconify-icon className="mb-4 opacity-80" icon="solar:cup-star-linear" strokeWidth="1.5" width="40"></iconify-icon>
<span className="font-serif text-2xl tracking-tight mb-2">"Best food on the trek route."</span>
<span className="text-xs text-white/70 uppercase tracking-widest font-medium">— Recent Guest</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="font-medium tracking-wide text-xs uppercase mb-3 text-stone-400">Location</h2>
<h3 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6 text-stone-900">Your Basecamp.</h3>
<p className="text-base mb-8 text-stone-600">
                        Located perfectly at Kharpatiya, we are the ideal stop before heading up to the temple. Escape the crowded town centers and breathe mountain air.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-4 rounded-xl border bg-stone-50 border-stone-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:routing-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Kartik Swami Temple</span>
</div>
<span className="text-sm font-medium text-stone-500">~ 9 km away</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border bg-stone-50 border-stone-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:city-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Rudraprayag Town</span>
</div>
<span className="text-sm font-medium text-stone-500">26 km away</span>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white shadow-sm transition-all w-fit gap-2 bg-stone-900 hover:bg-stone-800" href="https://maps.google.com" target="_blank">
<iconify-icon icon="solar:map-linear" width="18"></iconify-icon>
                        Get Directions
                    </a>
</div>

<div className="lg:col-span-7 relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden border bg-stone-100 border-stone-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="relative flex flex-col items-center">
<div className="bg-white px-4 py-2 rounded-xl shadow-lg border mb-2 flex flex-col items-center animate-pulse-slow border-stone-100">
<span className="text-xs font-medium tracking-tight text-stone-900">The Laps of Himalayas</span>
<span className="text-[10px] text-stone-500">Home Stay</span>
</div>
<div className="w-4 h-4 rounded-full bg-himalayan border-4 border-white shadow-md relative z-10"></div>
<div className="w-1 h-8 bg-gradient-to-b from-himalayan to-transparent -mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h3 className="font-serif text-3xl tracking-tight mb-2 text-stone-900">Guest Stories.</h3>
<p className="text-sm text-stone-500">Real feedback from travelers, pilgrims, and trekkers.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-stone-200 text-stone-400 hover:text-stone-900 hover:border-stone-300">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-stone-200 text-stone-400 hover:text-stone-900 hover:border-stone-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-saffron">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-stone-700">"Perfect stay before the trek. The rooms were spotless, and the host family served the most amazing fresh food. Waking up to the mountain view was a bonus."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-stone-200 text-stone-600">A</div>
<div>
<p className="text-xs font-medium text-stone-900">Amit S.</p>
<p className="text-[10px] text-stone-500">Google Review</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-saffron">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-line-duotone" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-stone-700">"Very peaceful location away from city noise. They really take the 'Fresh Linen' seriously—everything was clean. Highly recommend trying their local thali."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-stone-200 text-stone-600">R</div>
<div>
<p className="text-xs font-medium text-stone-900">Rahul M.</p>
<p className="text-[10px] text-stone-500">MakeMyTrip</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-saffron">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-stone-700">"Unmatched hospitality. We arrived late after a long drive, and they kept dinner warm for us. The morning view from the balcony is breathtaking."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-stone-200 text-stone-600">S</div>
<div>
<p className="text-xs font-medium text-stone-900">Sarah J.</p>
<p className="text-[10px] text-stone-500">Direct Booking</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-himalayan pt-20 pb-10 border-t border-himalayan/80 mt-auto text-stone-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:mountains-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-serif tracking-tighter text-lg font-medium text-white">TLOH.</span>
</div>
<p className="text-xs leading-relaxed mb-6 text-stone-400">
                        The Laps of Himalayas Home Stay.<br/>
                        Kharpatiya, near Kartik Swami Temple,<br/>
                        Rudraprayag, Uttarakhand.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors text-stone-400" href="#"><iconify-icon icon="solar:bomb-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors text-stone-400" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-sm font-medium text-white tracking-tight mb-4">Stay</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#rooms">Mountain View Rooms</a></li>
<li><a className="hover:text-white transition-colors" href="#rooms">Family Suites</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#food">Dining</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Special Offers</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white tracking-tight mb-4">Explore</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Kartik Swami Trek Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Local Temples</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Weather &amp; Best Time</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#location">How to Reach</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white tracking-tight mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:09917896135">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                                099178 96135
                            </a>
</li>
<li>
<a className="flex items-center gap-2 text-[#25D366] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                                WhatsApp Us
                            </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:booking@tloh.in">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                                booking@tloh.in
                            </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500">© 2023 The Laps of Himalayas Home Stay. All rights reserved.</p>
<div className="flex gap-4 text-xs text-stone-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cancellation Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
<div className="backdrop-blur-md border rounded-full p-2 flex justify-between items-center shadow-2xl bg-stone-900/90 border-stone-700">
<div className="px-4 flex flex-col">
<span className="text-[10px] uppercase tracking-wide text-stone-400">Direct Booking</span>
<span className="text-sm font-medium text-white">Save 10%</span>
</div>
<a className="bg-white px-6 py-2.5 rounded-full text-sm font-medium shadow-sm active:scale-95 transition-transform flex items-center gap-2 text-stone-900" href="tel:09917896135">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                Call Now
            </a>
</div>
</div>

    </>
  );
}
