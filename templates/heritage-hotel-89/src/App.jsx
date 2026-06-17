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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af284c4a-1504-4b03-96f3-3953f4c5cffd_3840w.jpg?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed w-full z-50 transition-all duration-300 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5DACE]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex flex-col items-start group" href="#">
<span className="font-serif text-xl tracking-widest text-[#2C241B] uppercase group-hover:text-[#D4AF37] transition-colors">Palace On Ganges</span>
<span className="text-[0.6rem] tracking-[0.2rem] text-[#8C7E6D] uppercase">Varanasi</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-light tracking-wide text-[#4A4036] hover:text-[#D4AF37] transition-colors" href="#about">Heritage</a>
<a className="text-sm font-light tracking-wide text-[#4A4036] hover:text-[#D4AF37] transition-colors" href="#rooms">Rooms</a>
<a className="text-sm font-light tracking-wide text-[#4A4036] hover:text-[#D4AF37] transition-colors" href="#dining">Dining</a>
<a className="text-sm font-light tracking-wide text-[#4A4036] hover:text-[#D4AF37] transition-colors" href="#location">Location</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-[#4A4036] hover:text-[#D4AF37] transition-colors" href="https://wa.me/911234567890">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Enquire</span>
</a>
<a className="px-6 py-2.5 bg-[#2C241B] text-[#FAF9F6] text-xs tracking-widest uppercase hover:bg-[#4A4036] transition-all duration-300 border border-[#2C241B]" href="#book">
                        Book Now
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Boats on Ganga River Varanasi at Sunrise" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#2C241B]/40 via-[#2C241B]/20 to-[#2C241B]/60"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
<div className="inline-flex items-center gap-2 border border-[#FAF9F6]/30 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6 bg-[#2C241B]/10">
<iconify-icon className="text-[#D4AF37]" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-[#FAF9F6] text-xs tracking-widest uppercase">4-Star Heritage Boutique</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-light mb-6 tracking-tight drop-shadow-sm">
                Wake Up to the <br/> <span className="italic text-[#F3E5AB]">Sacred Ganga</span>
</h1>
<p className="text-[#FAF9F6]/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the spiritual soul of Kashi at Assi Ghat. A sanctuary of heritage, luxury, and peace by the eternal riverfront.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#FAF9F6] text-[#2C241B] text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 min-w-[160px]" href="#rooms">
                    Check Availability
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-[#FAF9F6]/40 backdrop-blur-sm text-white text-sm tracking-widest uppercase hover:bg-[#FAF9F6]/10 transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px]" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                    WhatsApp
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-20 bg-[#FAF9F6] border-t border-[#D4AF37]/20 hidden md:block">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
<form className="flex items-end justify-between gap-6">
<div className="flex-1 space-y-2">
<label className="block text-xs uppercase tracking-wider text-[#8C7E6D]">Check In</label>
<div className="border-b border-[#D4AF37]/30 pb-2 flex items-center justify-between cursor-pointer hover:border-[#D4AF37] transition-colors">
<span className="text-[#2C241B] text-sm">Select Date</span>
<iconify-icon className="text-[#D4AF37]" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-2">
<label className="block text-xs uppercase tracking-wider text-[#8C7E6D]">Check Out</label>
<div className="border-b border-[#D4AF37]/30 pb-2 flex items-center justify-between cursor-pointer hover:border-[#D4AF37] transition-colors">
<span className="text-[#2C241B] text-sm">Select Date</span>
<iconify-icon className="text-[#D4AF37]" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-2">
<label className="block text-xs uppercase tracking-wider text-[#8C7E6D]">Guests</label>
<div className="border-b border-[#D4AF37]/30 pb-2 flex items-center justify-between cursor-pointer hover:border-[#D4AF37] transition-colors">
<span className="text-[#2C241B] text-sm">2 Adults, 0 Children</span>
<iconify-icon className="text-[#D4AF37]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<button className="px-8 py-3 bg-[#2C241B] text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#4A4036] transition-colors h-[46px] border border-[#2C241B]">
                        Search
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6]" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-[#E5DACE] overflow-hidden relative z-10 border border-[#E5DACE]">

<img alt="Varanasi Architecture Carvings" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FAF9F6] border border-[#D4AF37]/30 p-4 z-20 flex items-center justify-center text-center hidden md:flex shadow-lg shadow-[#2C241B]/5">
<div>
<span className="block text-3xl font-serif text-[#2C241B] mb-1">Assi Ghat</span>
<span className="text-xs uppercase tracking-widest text-[#D4AF37]">Prime Location</span>
</div>
</div>
</div>
<div>
<span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-4 block">Our Story</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#2C241B] mb-8 leading-tight">
                        A Sanctuary of <br/><span className="italic text-[#8C7E6D]">Banarasi Heritage</span>
</h2>
<div className="space-y-6 text-[#4A4036] font-light leading-relaxed text-lg">
<p>
                            Nestled in the spiritual heart of India, Palace on Ganges offers a seamless blend of traditional Banarasi stone architecture and modern luxury. Located just steps away from the iconic Assi Ghat, our boutique hotel serves as a gateway to the eternal city.
                        </p>
<p>
                            Each corner of our property whispers tales of the past, featuring intricate floral motifs, royal beige interiors, and the soothing ambience of the riverfront. Whether you seek spiritual awakening or a luxurious retreat, find your peace with us.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#E5DACE] pt-8">
<div>
<h4 className="font-serif text-2xl text-[#2C241B]">25 Years</h4>
<p className="text-xs uppercase tracking-wider text-[#8C7E6D] mt-1">Of Hospitality</p>
</div>
<div>
<h4 className="font-serif text-2xl text-[#2C241B]">4 Star</h4>
<p className="text-xs uppercase tracking-wider text-[#8C7E6D] mt-1">Luxury Rating</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#E5DACE]" id="rooms">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-3 block">Accommodation</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#2C241B]">Royal Quarters</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#FAF9F6] border border-[#E5DACE] hover:border-[#D4AF37] transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Standard Heritage Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-[#2C241B] mb-2">Standard Heritage</h3>
<p className="text-xs text-[#8C7E6D] mb-4 line-clamp-2">Cozy, elegantly furnished room with warm wood tones perfect for solo travelers.</p>
<div className="flex gap-3 mb-6 text-[#D4AF37]">
<iconify-icon icon="solar:snow-flake-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:wi-fi-square-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:cup-hot-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end justify-between border-t border-[#E5DACE] pt-4">
<div>
<span className="block text-xs text-[#8C7E6D]">From</span>
<span className="text-lg font-medium text-[#2C241B]">₹4,800</span>
</div>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#B4941F] font-medium" href="#">Book</a>
</div>
</div>
</div>

<div className="group bg-[#FAF9F6] border border-[#E5DACE] hover:border-[#D4AF37] transition-all duration-300 relative">
<div className="absolute top-3 right-3 bg-[#D4AF37] text-white text-[10px] uppercase tracking-widest px-2 py-1 z-10">Popular</div>
<div className="aspect-[4/3] overflow-hidden">

<img alt="Ganga View Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-[#2C241B] mb-2">Ganga View Room</h3>
<p className="text-xs text-[#8C7E6D] mb-4 line-clamp-2">Direct views of the holy river with a private seating area and traditional decor.</p>
<div className="flex gap-3 mb-6 text-[#D4AF37]">
<iconify-icon icon="solar:water-sun-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:tv-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end justify-between border-t border-[#E5DACE] pt-4">
<div>
<span className="block text-xs text-[#8C7E6D]">From</span>
<span className="text-lg font-medium text-[#2C241B]">₹6,500</span>
</div>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#B4941F] font-medium" href="#">Book</a>
</div>
</div>
</div>

<div className="group bg-[#FAF9F6] border border-[#E5DACE] hover:border-[#D4AF37] transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">

<img alt="Maharaja Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-[#2C241B] mb-2">Maharaja Suite</h3>
<p className="text-xs text-[#8C7E6D] mb-4 line-clamp-2">Spacious living area, premium toiletries, and royal Banarasi textile decor.</p>
<div className="flex gap-3 mb-6 text-[#D4AF37]">
<iconify-icon icon="solar:sofa-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:bottle-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:safe-square-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end justify-between border-t border-[#E5DACE] pt-4">
<div>
<span className="block text-xs text-[#8C7E6D]">From</span>
<span className="text-lg font-medium text-[#2C241B]">₹9,200</span>
</div>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#B4941F] font-medium" href="#">Book</a>
</div>
</div>
</div>

<div className="group bg-[#FAF9F6] border border-[#E5DACE] hover:border-[#D4AF37] transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Family Heritage Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-[#2C241B] mb-2">Heritage Family</h3>
<p className="text-xs text-[#8C7E6D] mb-4 line-clamp-2">Two interconnected spaces for families. Accommodates 2+1 comfortably.</p>
<div className="flex gap-3 mb-6 text-[#D4AF37]">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:armchair-2-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:tea-cup-linear" width="18"></iconify-icon>
</div>
<div className="flex items-end justify-between border-t border-[#E5DACE] pt-4">
<div>
<span className="block text-xs text-[#8C7E6D]">From</span>
<span className="text-lg font-medium text-[#2C241B]">₹8,000</span>
</div>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#B4941F] font-medium" href="#">Book</a>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-[#8C7E6D] font-light mb-4">All rooms feature AC, High-Speed Wi-Fi, LED TV, and 24/7 Room Service.</p>
<div className="flex justify-center gap-6 text-xs text-[#D4AF37] uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> 25% Advance Booking</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Free Cancellation (7 Days)</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2C241B] text-[#FAF9F6] relative overflow-hidden" id="dining">

<div className="absolute top-0 right-0 opacity-5 pointer-events-none text-[#D4AF37]">
<svg fill="none" height="400" stroke="currentColor" viewbox="0 0 100 100" width="400">
<circle cx="50" cy="50" r="40" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="30" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="20" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-4 block">Gastronomy</span>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ganges View <br/>Restaurant</h2>
<p className="text-[#E5DACE] font-light leading-relaxed mb-8 text-lg">
                        Savor the authentic flavors of Banaras on our rooftop. We serve exquisite vegetarian Indian, Continental, and local delicacies prepared with fresh, locally sourced ingredients.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4 border-b border-[#D4AF37]/20 pb-4">
<iconify-icon className="text-[#D4AF37] mt-1" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div>
<h5 className="text-white font-serif text-lg">Hours of Operation</h5>
<p className="text-[#8C7E6D] text-sm">Breakfast, Lunch &amp; Dinner: 07:00 AM - 10:30 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#D4AF37] mt-1" icon="solar:chef-hat-heart-linear" width="20"></iconify-icon>
<div>
<h5 className="text-white font-serif text-lg">Signature Cuisine</h5>
<p className="text-[#8C7E6D] text-sm">Satvik Thali, Banarasi Kachori, Continental Breakfast</p>
</div>
</div>
</div>
<a className="inline-block px-8 py-3 border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#2C241B] transition-all" href="#book">Reserve a Table</a>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-square relative z-10 border border-[#D4AF37]/20 p-2">

<img alt="Traditional Indian Dining" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<h3 className="font-serif text-3xl text-[#2C241B] mb-8">Premium Amenities</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:wi-fi-square-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">High-Speed Wifi</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:airbuds-case-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">Air Conditioned</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:smart-home-angle-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">Elevator Access</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:cup-hot-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">Tea/Coffee Maker</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:bath-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">Premium Toiletries</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:bell-bing-linear" width="24"></iconify-icon>
<span className="text-sm font-light text-[#4A4036]">24/7 Room Service</span>
</div>
</div>
</div>

<div className="bg-white border border-[#E5DACE] p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
<div className="flex text-[#D4AF37]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="14"></iconify-icon>
</div>
</div>
<h4 className="font-serif text-xl text-[#2C241B] mb-2">Guest Favorite</h4>
<p className="text-sm font-light text-[#8C7E6D] leading-relaxed mb-6">
                            "The location right on Assi Ghat is unbeatable. Waking up to the Ganga aarti sounds was magical. The rooms are spotless and staff very courteous."
                            <br/><span className="text-xs mt-2 block font-medium text-[#D4AF37]">- R. Malhotra, New Delhi</span>
</p>
</div>
<div className="bg-[#FAF9F6] p-4 border border-[#E5DACE]">
<span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium block mb-1">Direct Booking Offer</span>
<p className="text-[#2C241B] font-serif text-lg">Save 10% on your first stay</p>
<p className="text-[10px] text-[#8C7E6D] mt-1">Use Code: GANGES10 at checkout</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#E5DACE]" id="location">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-3 block">Discover</span>
<h2 className="text-4xl font-serif text-[#2C241B] mb-6">In the Heart of Kashi</h2>
<p className="text-[#4A4036] font-light leading-relaxed">
                            Palace on Ganges boasts an enviable location at Assi Ghat, the southernmost ghat in Varanasi, known for its peaceful morning aarti and cultural vibrancy.
                        </p>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-[#E5DACE] pb-2">
<span className="text-sm text-[#2C241B]">Assi Ghat</span>
<span className="text-sm text-[#8C7E6D] font-light">2 min walk</span>
</div>
<div className="flex items-center justify-between border-b border-[#E5DACE] pb-2">
<span className="text-sm text-[#2C241B]">Kashi Vishwanath Temple</span>
<span className="text-sm text-[#8C7E6D] font-light">2.5 km</span>
</div>
<div className="flex items-center justify-between border-b border-[#E5DACE] pb-2">
<span className="text-sm text-[#2C241B]">Varanasi Junction (BSB)</span>
<span className="text-sm text-[#8C7E6D] font-light">6 km</span>
</div>
<div className="flex items-center justify-between border-b border-[#E5DACE] pb-2">
<span className="text-sm text-[#2C241B]">LBS International Airport</span>
<span className="text-sm text-[#8C7E6D] font-light">25 km</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C241B] border-b border-[#2C241B] pb-1 hover:opacity-70 transition-opacity" href="https://maps.google.com" target="_blank">
                        Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="bg-[#E5DACE] h-[400px] w-full relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6976722839886!2d83.003!3d25.281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e322d7c2b5e7d%3A0x6c6e76d9f8e4b6c3!2sAssi%20Ghat%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1625561234567!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C241B] text-[#8C7E6D] pt-20 pb-8 border-t border-[#4A4036]/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex flex-col items-start">
<span className="font-serif text-2xl tracking-widest text-[#E5DACE] uppercase">Palace On Ganges</span>
<span className="text-[0.6rem] tracking-[0.2rem] text-[#8C7E6D] uppercase">Varanasi</span>
</div>
<p className="text-sm font-light leading-relaxed max-w-xs">
                        A tribute to the timeless spirit of Kashi. Experience luxury, heritage, and the holy river.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-white font-serif mb-6">Explore</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#about">Our Heritage</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#rooms">Rooms &amp; Suites</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#dining">Dining</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#location">Location</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-serif mb-6">Policies</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Refund Policy</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Cancellation Rules</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-serif mb-6">Contact Us</h5>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>B-1/158, Assi Ghat, Varanasi, Uttar Pradesh, 221005</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:stay@palaceonganges.com">stay@palaceonganges.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#4A4036]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#8C7E6D] font-light">© 2023 Palace on Ganges. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8C7E6D]" icon="solar:card-linear" width="24"></iconify-icon>
<span className="text-xs text-[#8C7E6D]">Secure Payments via Stripe/Razorpay</span>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 w-full z-40 flex">
<a className="flex-1 bg-[#FAF9F6] text-[#2C241B] py-4 text-xs uppercase tracking-widest text-center border-t border-[#E5DACE]" href="https://wa.me/">WhatsApp</a>
<a className="flex-1 bg-[#2C241B] text-[#FAF9F6] py-4 text-xs uppercase tracking-widest text-center" href="#book">Book Now</a>
</div>

    </>
  );
}
