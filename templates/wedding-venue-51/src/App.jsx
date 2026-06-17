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
emerald: {
850: '#064e3b',
900: '#022c22',
950: '#011c16',
},
gold: {
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
}
}
}
}
}



        // Set Current Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', toggleMenu);

        function toggleMenu() {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');
            // Optional: Change icon or animate button here
        }

        // Handle Form Submission
        function handleBooking(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const eventType = document.getElementById('eventType').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;

            // Format message for WhatsApp
            let whatsappMsg = `Hello Sai Leela Lawns, I would like to enquire about booking for ${eventType} on ${date}. My name is ${name}.`;
            
            if(message) {
                whatsappMsg += ` Details: ${message}`;
            }

            const encodedMsg = encodeURIComponent(whatsappMsg);
            const whatsappNumber = '917083837779';
            
            // Redirect
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-serif italic font-bold group-hover:bg-emerald-800 transition-colors">S</div>
<span className="font-serif font-medium text-xl tracking-tight text-emerald-950">Sai Leela Lawns</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-emerald-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-900 transition-colors" href="#facilities">Facilities</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-900 transition-colors" href="#gallery">Gallery</a>
<a className="px-4 py-2 bg-emerald-900 text-white text-sm font-medium rounded-full hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20" href="#contact">
                        Book Now
                    </a>
</div>

<button className="md:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 focus:outline-none" id="menu-btn">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden bg-white border-t border-slate-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg" href="#about" onclick="toggleMenu()">About</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg" href="#facilities" onclick="toggleMenu()">Facilities</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg" href="#gallery" onclick="toggleMenu()">Gallery</a>
<a className="block px-3 py-3 text-base font-medium text-emerald-900 bg-emerald-50 rounded-lg mt-2" href="#contact" onclick="toggleMenu()">Book Now</a>
</div>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Sai Leela Lawns Event Setup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-emerald-900/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white mt-16">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-amber-300 mb-6 fade-in-up">
<iconify-icon className="text-amber-400 fill-amber-400" icon="lucide:star" width="14"></iconify-icon>
<span>4.1 Stars (687 Reviews)</span>
</div>

<h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1] fade-in-up delay-100 text-white">
                Perfect Lawn for <br className="hidden sm:block"/>
<span className="italic text-emerald-200">Weddings &amp; Celebrations</span>
</h1>
<p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light fade-in-up delay-200">
                Experience the grandeur of Nashik's premier event venue. Spacious, elegant, and ready to host your most memorable moments.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-950 font-medium rounded-full hover:bg-emerald-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl text-sm" href="#contact">
                    Book Your Date
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600/30 backdrop-blur-sm border border-emerald-400/30 text-white font-medium rounded-full hover:bg-emerald-600/40 transition-all flex items-center justify-center gap-2 text-sm" href="tel:07083837779">
<iconify-icon icon="lucide:phone-call" width="18"></iconify-icon>
                    Call Now
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-50 rounded-full -z-10"></div>
<img alt="Wedding decoration" className="rounded-3xl shadow-2xl shadow-emerald-900/10 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
<p className="font-serif text-3xl font-medium text-emerald-900 tracking-tight">687+</p>
<p className="text-xs text-slate-500 mt-1">Happy families have celebrated with us.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="font-serif text-3xl sm:text-4xl font-medium text-emerald-950 tracking-tight mb-6">About Sai Leela Lawns</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        Located in the serene Panchavati area of Nashik, Sai Leela Lawns offers a magnificent open-air setting for your special occasions. Whether you are planning a grand wedding reception, an intimate engagement, a birthday bash, or a corporate family event, our venue provides the perfect canvas.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 text-sm">Expansive manicured green lawns</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 text-sm">Suitable for both day and night events</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 text-sm">Trusted venue with premium hospitality</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="facilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-emerald-700 font-medium text-xs tracking-wider uppercase mb-2 block">Our Services</span>
<h2 className="font-serif text-3xl sm:text-4xl font-medium text-emerald-950 tracking-tight">Premium Facilities</h2>
<p className="text-slate-500 mt-4 text-sm sm:text-base">Everything you need for a seamless and comfortable event experience.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
<iconify-icon icon="lucide:accessibility" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-1">Wheelchair Access</h3>
<p className="text-xs text-slate-500">Accessible parking &amp; entrance</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-1">Easy Payments</h3>
<p className="text-xs text-slate-500">Debit cards &amp; NFC accepted</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
<iconify-icon icon="lucide:party-popper" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-1">Kids Friendly</h3>
<p className="text-xs text-slate-500">Great for birthday parties</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
<iconify-icon icon="lucide:moon" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-1">Flexible Timings</h3>
<p className="text-xs text-slate-500">Open 24 hours all days</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-serif text-3xl sm:text-4xl font-medium text-emerald-950 tracking-tight mb-10 text-center">Moments Captured</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Wedding Stage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Grand Wedding Stage</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Decoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative group overflow-hidden rounded-2xl">
<img alt="Night Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="lg:col-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Reception" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-serif text-3xl font-medium tracking-tight mb-2">Trusted by Nashik</h2>
<div className="flex justify-center items-center gap-2 mb-8 text-amber-400">
<iconify-icon className="fill-current" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star-half" width="24"></iconify-icon>
<span className="text-white ml-2 font-medium text-lg">4.1/5 (687 Reviews)</span>
</div>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<p className="text-emerald-100 text-sm mb-4">"Absolutely stunning venue. We had our reception here and the lawn was perfectly maintained. The staff was very cooperative."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">R</div>
<span className="text-sm font-medium">Rahul Patil</span>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<p className="text-emerald-100 text-sm mb-4">"Best place for family functions in Panchavati. Ample parking and great lighting at night. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">P</div>
<span className="text-sm font-medium">Priya Deshmukh</span>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<p className="text-emerald-100 text-sm mb-4">"Spacious and elegant. The management helped us with every detail. A truly royal experience."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">A</div>
<span className="text-sm font-medium">Amit Sharma</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">

<div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
<h2 className="font-serif text-3xl font-medium text-emerald-950 tracking-tight mb-2">Check Availability</h2>
<p className="text-slate-500 mb-8 text-sm">Fill out the form below to enquire via WhatsApp instantly.</p>
<form className="space-y-5" id="bookingForm" onsubmit="handleBooking(event)">
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1" htmlFor="name">Your Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1" htmlFor="phone">Mobile Number</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm" id="phone" placeholder="+91 99999 99999" required="" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1" htmlFor="eventType">Event Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none text-sm" id="eventType">
<option value="Wedding">Wedding</option>
<option value="Reception">Reception</option>
<option value="Birthday">Birthday</option>
<option value="Other">Other</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1" htmlFor="date">Event Date</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm" id="date" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm" id="message" placeholder="Any specific requirements..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group" type="submit">
<span>Enquire on WhatsApp</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-col justify-between h-full">
<div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-100 flex-grow mb-6 overflow-hidden relative min-h-[300px]">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.123456789012!2d73.816667!3d20.011667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb62a5555555%3A0x1234567890abcdef!2sSai%20Leela%20Lawns!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0', borderRadius: '1rem', minHeight: '100%'}} width="100%">
</iframe>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100">
<h3 className="font-serif text-lg font-medium text-emerald-950 mb-4">Contact Details</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 text-emerald-600">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600">
                                    Chatrapati Sambhaji Nagar Rd,<br/>
                                    Panchavati, Nandur Village,<br/>
                                    Nashik, Maharashtra 422003
                                </p>
</div>
<div className="flex items-center gap-3">
<div className="text-emerald-600">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<a className="text-sm text-slate-900 font-medium hover:text-emerald-700 transition-colors" href="tel:07083837779">07083837779</a>
</div>
<div className="flex items-center gap-3">
<div className="text-emerald-600">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600">Open 24 Hours (All Days)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-emerald-950 text-emerald-100/60 py-12 border-t border-emerald-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h4 className="font-serif text-xl text-white font-medium mb-1">Sai Leela Lawns</h4>
<p className="text-xs">Premium Event Venue in Nashik</p>
</div>
<div className="flex gap-6">
<a className="text-sm hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm hover:text-white transition-colors" href="#facilities">Facilities</a>
<a className="text-sm hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<p className="text-xs text-center md:text-right">
                © <span id="year"></span> Sai Leela Lawns. All rights reserved.
            </p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
<a className="w-12 h-12 bg-white text-emerald-900 rounded-full shadow-lg shadow-emerald-900/20 flex items-center justify-center border border-emerald-100" href="tel:07083837779">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-emerald-900/20 flex items-center justify-center" href="https://wa.me/917083837779">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</a>
</div>



    </>
  );
}
