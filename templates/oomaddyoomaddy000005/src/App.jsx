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
      

<header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
<nav className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-black/5 bg-white/70 backdrop-blur-md px-6 py-3 shadow-sm">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter uppercase" href="#">
                    MADDY<span className="text-[#bc1c1c]">76</span>
</a>
<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-green-600">Open Now</span>
</div>
<a className="text-xs font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest" href="#menu">Menu</a>
<a className="text-xs font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium uppercase tracking-widest text-black/60 hover:text-black transition-colors" href="#book">
                    Table Booking
                </a>
<a className="rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition-all hover:bg-[#bc1c1c] hover:shadow-lg hover:shadow-[#bc1c1c]/20" href="#order">
                    Order 24/7
                </a>
</div>
</nav>
</header>
<footer className="md:px-8 bg-white border-black/5 border-t pt-24 pr-4 pb-12 pl-4">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<a className="uppercase block text-2xl font-medium tracking-tighter mb-6" href="#">MADDY<span className="text-[#bc1c1c]">76</span></a>
<p className="text-sm text-black/50 max-w-xs leading-relaxed mb-8">
                        The only authentic 24/7 Indian and Nepalese kitchen in Coventry. Experience tradition at any hour.
                    </p>
<div className="flex items-center gap-3">
<span className="text-[10px] font-medium uppercase tracking-widest px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">Live 24/7 Service</span>
</div>
</div>
<div className="">
<h5 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30 mb-6">Contact</h5>
<ul className="space-y-4 text-sm font-medium">
<li className="">+91 91236 48522</li>
<li className="">gomtinagar, Lucknow</li>
<li className="text-black/40">Open 24 Hours / 7 Days</li>
</ul>
</div>
<div className="">
<h5 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30 mb-6">Socials</h5>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#bc1c1c] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#bc1c1c] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5">
<p className="text-[10px] font-medium uppercase tracking-widest text-black/30">© 2024 MADDY 76 COVENTRY • ALWAYS OPEN</p>
<div className="flex gap-8 text-[10px] font-medium uppercase tracking-widest text-black/30">
<a className="hover:text-black" href="#">Privacy Policy</a>
<a className="hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer><main className="">


<div className="border-y overflow-hidden bg-white border-black/5 pt-12 pb-12">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex items-center gap-12 px-6">
<span className="text-3xl font-['Instrument_Serif'] italic">Open 24/7</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-3xl font-medium tracking-tighter uppercase">Indian Curry</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-3xl font-['Instrument_Serif'] italic">Always Fresh</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-3xl font-medium tracking-tighter uppercase">Nepalese Momos</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-3xl font-['Instrument_Serif'] italic">Available Now</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>

<span className="text-3xl font-['Instrument_Serif'] italic">Open 24/7</span>
<iconify-icon className="text-black/20" icon="solar:star-linear" width="12"></iconify-icon>
<span className="text-3xl font-medium tracking-tighter uppercase">Indian Curry</span>
</div>
</div>
</div><section className="min-h-screen flex flex-col overflow-hidden pt-24 pr-4 pb-12 pl-4 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_#f4f4f0_0%,_transparent_70%)] -z-10"></div>
<div className="max-w-5xl w-full text-center">
<span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/5 bg-white text-[10px] font-medium uppercase tracking-[0.2em] text-[#bc1c1c] animate-fade-in">
                    Earlsdon • Coventry • Open 24 Hours • 7 Days
                </span>
<h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.9] mb-8 animate-slide-up">
                    Flavours <br/>
<span className="font-normal italic text-[#bc1c1c] font-['Instrument_Serif']" style={{}}>Never Sleep. because Maddy never Sleeps !</span>
</h1>
<p className="mx-auto max-w-xl text-sm md:text-base text-black/50 leading-relaxed mb-10">
                    Authentic Indian and Nepalese dining reimagined for the modern schedule. From dawn to dusk and everything in between, your table is ready.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-medium text-white transition-all hover:bg-[#bc1c1c]" href="#menu">
                        Explore the Menu
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-4 text-xs font-medium text-black transition-all hover:bg-gray-50" href="#book">
                        Late Night Dining
                    </a>
</div>
</div>
<div className="mt-20 relative w-full max-w-6xl mx-auto px-4">
<div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Indian Thali" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fbd7a6c-3c9f-48f3-9405-e3bd7e4420b8_1600w.png"/>
</div>
<div className="absolute -bottom-6 right-10 hidden md:block rounded-2xl bg-white p-6 shadow-xl border border-black/5 max-w-[240px]">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#bc1c1c]" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-widest text-black/40">Open 24/7</span>
</div>
<p className="text-xs font-medium leading-relaxed italic">"Whether it's 3 AM or 3 PM, the quality remains unmatched. Truly Earlsdon's gem."</p>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8" id="about">
<div className="mx-auto max-w-7xl">
<div className="mb-16">
<h2 className="text-4xl font-medium tracking-tighter uppercase mb-4">Round the Clock</h2>
<p className="text-sm text-black/50 max-w-xl">From morning breakfast vibes to midnight cravings, we never stop cooking.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-8 rounded-3xl bg-black p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-4xl font-medium tracking-tighter uppercase mb-6 leading-tight">24 Hours. <br/>7 Days. <br/><span className="text-[#bc1c1c]">No Compromise.</span></h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
                                We believe authentic food shouldn't be limited by a clock. Our kitchen operates 24/7, providing the full Maddy 76 experience at any hour of the day or night.
                            </p>
</div>
<div className="mt-12 flex flex-wrap gap-2 relative z-10">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-widest">Late Night Pickup</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-widest">Early Morning Menu</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-widest">Always Live</span>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20">
<iconify-icon className="rotate-12" icon="solar:history-linear" width="400"></iconify-icon>
</div>
</div>

<div className="md:col-span-4 rounded-3xl bg-[#f4f4f0] p-8 md:p-10 flex flex-col justify-end border border-black/5">
<iconify-icon className="text-indigo-900 mb-6" icon="solar:moon-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tighter uppercase mb-2">After Hours</h3>
<p className="text-xs text-black/60 mb-6 leading-relaxed">The vibe shifts as the sun sets. Experience Earlsdon's most atmospheric late-night spot.</p>
<div className="h-1 w-full bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-[#bc1c1c] w-full animate-pulse"></div>
</div>
</div>

<div className="md:col-span-5 rounded-3xl border border-black/5 p-8 flex items-center gap-8 bg-white">
<div className="flex-1">
<iconify-icon className="text-orange-500 mb-4" icon="solar:sun-2-linear" width="24"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tighter uppercase mb-2">Daylight</h3>
<p className="text-sm text-black/50">Perfect for business lunches and family gatherings.</p>
</div>
<div className="w-1/3 aspect-square rounded-2xl overflow-hidden">
<img alt="Day Dining" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=400"/>
</div>
</div>

<div className="md:col-span-7 rounded-3xl bg-white border border-black/5 p-8 flex flex-col md:flex-row md:items-center justify-between">
<div className="">
<h3 className="uppercase text-2xl font-medium tracking-tighter mb-2">Home Delivery NAHI DUNGA</h3>
<p className="text-sm text-black/50 mb-4">Craving curries at 4 AM? We deliver whenever you're hungry.</p>
<a className="text-xs font-medium uppercase tracking-widest border-b border-black pb-1 hover:text-[#bc1c1c] transition-colors" href="#">Order Now</a>
</div>
<div className="mt-6 md:mt-0 flex gap-4">
<div className="flex flex-col items-center">
<span className="text-xl font-medium">00-24</span>
<span className="text-[8px] uppercase tracking-widest text-black/40">Hrs Delivery</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-4" id="menu">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="">
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#bc1c1c] mb-4 block">Always Available</span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase">Signature <br/><span className="font-['Instrument_Serif'] italic lowercase text-black/40">Selection</span></h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
<img alt="Chicken Curry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&amp;w=800"/>
<span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white text-[8px] font-medium uppercase tracking-widest backdrop-blur-sm">Full Menu</span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tighter uppercase">Signature Chicken Curry</h4>
<span className="text-sm font-medium text-black/40">£10.50</span>
</div>
<p className="text-xs text-black/50">Rich traditional tomato-based sauce, available all day.</p>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
<img alt="Momos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=800"/>
<span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white text-[8px] font-medium uppercase tracking-widest backdrop-blur-sm">Popular At Night</span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tighter uppercase">Steamed Veg Momos</h4>
<span className="text-sm font-medium text-black/40">£8.95</span>
</div>
<p className="text-xs text-black/50">Hand-made dumplings served with spicy chutney 24/7.</p>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
<img alt="Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=800"/>
<span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white text-[8px] font-medium uppercase tracking-widest backdrop-blur-sm">Always Ready</span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-medium tracking-tighter uppercase">Mutton Biryani</h4>
<span className="text-sm font-medium text-black/40">£12.95</span>
</div>
<p className="text-xs text-black/50">Slow-cooked and aromatic, prepared fresh around the clock.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#0a0a0a] text-white" id="book">
<div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
<div className="">
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#bc1c1c] mb-6 block">Availability</span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter uppercase mb-8">Open 24/7 <br/> For You.</h2>
<p className="text-sm text-white/40 mb-12 max-w-md">No matter what time it is, you're welcome at Maddy 76. Bookings are recommended for peak evening hours, but walk-ins are always welcome late night and early morning.</p>
<div className="flex items-center gap-6">
<div className="p-4 rounded-2xl border border-white/10 flex items-center gap-4">
<iconify-icon className="text-[#bc1c1c]" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<p className="text-[8px] uppercase tracking-[0.2em] text-white/40">Instant Booking</p>
<p className="text-sm">024 7667 2653</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm">
<h3 className="text-2xl font-medium tracking-tighter uppercase mb-6">Select Your Time</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-transparent border border-white/10 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-[#bc1c1c] transition-colors" placeholder="Full Name" type="text"/>
<input className="w-full bg-transparent border border-white/10 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-[#bc1c1c] transition-colors" placeholder="Guests" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<iconify-icon className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" icon="solar:calendar-date-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent border border-white/10 rounded-full pl-12 pr-6 py-4 text-xs focus:outline-none focus:border-[#bc1c1c] appearance-none" type="date"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent border border-white/10 rounded-full pl-12 pr-6 py-4 text-xs focus:outline-none focus:border-[#bc1c1c] appearance-none" type="time"/>
</div>
</div>
<button className="w-full rounded-full bg-[#bc1c1c] text-white py-5 text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Confirm Any-Time Table
                        </button>
</form>
</div>
</div>
</section>
</main>
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 25s linear infinite;
        }
        @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
            animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 1.5s ease-out forwards;
        }
        
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
        }
        
        .tracking-tighter { letter-spacing: -0.05em; }
    </style>

    </>
  );
}
