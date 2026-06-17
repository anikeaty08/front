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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-zinc-900 font-sans" href="#" style={{}}>
                Malvin's Taxi
            </a>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:+1234567890">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans" style={{}}>+1 (555) 012-3456</span>
</a>
<a className="bg-zinc-900 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors font-sans" href="#contact" style={{}}>
                    Book a Ride
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 sm:pt-40 sm:pb-32 px-6 max-w-screen-xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Available in Oakhaven &amp; Surrounding Counties
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tighter text-zinc-900 mb-8 leading-[1.1] font-sans font-semibold">
                Your personal driver in a digital world.
            </h1>
<p className="text-lg sm:text-xl text-zinc-500 font-light max-w-xl leading-relaxed mb-10 font-sans" style={{}}>
                Experience the comfort of a private chauffeur with the convenience of a local taxi. Punctual, discreet, and reliable transport for the discerning passenger.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all hover:translate-y-[-1px] font-sans" href="tel:+15550123456" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:phone-call" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Call Malvin
                </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all font-sans" href="#contact" style={{}}>
                    Request Booking
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</header>

<section className="px-6 pb-24 max-w-screen-xl mx-auto">
<div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-zinc-100">

<img alt="Luxury sedan parked on a quiet street" className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-zinc-900 mb-4 font-sans font-semibold">
                    The only number you need.
                </h2>
<p className="text-zinc-500 font-light leading-relaxed font-sans" style={{}}>
                    As an independent operator, I take personal pride in every journey. Unlike app-based services, you know exactly who is behind the wheel. My vehicle is meticulously maintained, and I prioritize safety and punctuality above all else. Whether it's an early morning airport run or a late-night return, I am at your service.
                </p>
<div className="mt-8 flex items-center gap-3">
<div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-serif font-bold italic font-sans" style={{}}>M</div>
<div>
<p className="text-sm font-medium text-zinc-900 font-sans" style={{}}>Malvin J.</p>
<p className="text-xs text-zinc-500 font-sans" style={{}}>Owner &amp; Driver</p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
<div className="p-2 bg-zinc-100 rounded-lg text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:plane" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 font-sans" style={{}}>Airport Transfers</h3>
<p className="text-sm text-zinc-500 font-light font-sans" style={{}}>Reliable drop-offs and pickups. Flight tracking included to ensure I'm there when you land.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
<div className="p-2 bg-zinc-100 rounded-lg text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 font-sans" style={{}}>Corporate Travel</h3>
<p className="text-sm text-zinc-500 font-light font-sans" style={{}}>Quiet, comfortable environment suitable for working on the go. Monthly invoicing available.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
<div className="p-2 bg-zinc-100 rounded-lg text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 font-sans" style={{}}>Local &amp; Long Distance</h3>
<p className="text-sm text-zinc-500 font-light font-sans" style={{}}>From grocery runs to inter-city travel. Fixed rates available for long-distance trips.</p>
</div>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-zinc-100"></div>

<section className="py-24 px-6 max-w-screen-xl mx-auto" id="contact">
<div className="max-w-lg mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl tracking-tight text-zinc-900 mb-3 font-sans font-semibold">Schedule a Ride</h2>
<p className="text-zinc-500 font-light font-sans" style={{}}>For immediate service, please call. For future bookings, fill out the form below.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you. Malvin will contact you shortly.');">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1 font-sans" htmlFor="name" style={{}}>Full Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-sm" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1 font-sans" htmlFor="email" style={{}}>Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-sm" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1 font-sans" htmlFor="phone" style={{}}>Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-sm" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1 font-sans" htmlFor="message" style={{}}>Trip Details</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-sm resize-none" id="message" placeholder="Pickup location, destination, date and time..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-zinc-900 text-white font-medium text-sm px-6 py-3.5 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-200 transition-all shadow-md font-sans" style={{}} type="submit">
                        Send Request
                    </button>
<p className="text-center text-xs text-zinc-400 mt-4 font-sans" style={{}}>
                        By submitting this form, you agree to be contacted regarding your booking request.
                    </p>
</div>
</form>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-zinc-900 uppercase font-sans" style={{}}>Malvin's Taxi Service</span>
</div>
<div className="flex items-center gap-6 text-xs text-zinc-500 font-medium">
<span className="font-sans" style={{}}>© 2023 Malvin's Taxi Service. All rights reserved.</span>
<a className="hover:text-zinc-900 transition-colors font-sans" href="#" style={{}}>Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
