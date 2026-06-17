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
      

<div className="hidden fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6" id="login-modal">
<div className="absolute inset-0 bg-teal-950/60 backdrop-blur-md" onclick="document.getElementById('login-modal').classList.add('hidden')"></div>
<div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-teal-900/40 overflow-hidden p-8 relative z-10">
<button className="absolute top-6 right-6 p-2 rounded-full hover:bg-teal-50 text-teal-900 transition-colors" onclick="document.getElementById('login-modal').classList.add('hidden')">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="mb-8">
<h2 className="text-3xl font-bold text-teal-950 tracking-tight">Login</h2>
<p className="text-teal-800/60 mt-1 font-normal">Access your account with just your email.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('login-modal').classList.add('hidden');">
<div>
<label className="block text-xs font-semibold text-teal-900 uppercase tracking-widest mb-2">Email Address</label>
<input className="w-full bg-teal-50/50 border border-teal-100 rounded-2xl px-5 py-4 text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium" placeholder="you@example.com" required="" type="email"/>
</div>
<button className="w-full h-14 rounded-full bg-teal-950 text-white flex items-center justify-center gap-2 text-base font-semibold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all mt-4" type="submit">
                    Continue with Email
                </button>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" id="booking-modal">
<div className="absolute inset-0 bg-teal-950/60 backdrop-blur-md" onclick="document.getElementById('booking-modal').classList.add('hidden')"></div>
<div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl shadow-teal-900/40 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-70 pointer-events-none"></div>
<div className="p-8 md:p-12 relative z-10">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-3xl font-bold text-teal-950 tracking-tight">Book Your Event</h2>
<p className="text-teal-800/60 mt-1 font-normal">Tell us about your event and we'll get in touch.</p>
</div>
<button className="p-2 rounded-full hover:bg-teal-50 text-teal-900 transition-colors" onclick="document.getElementById('booking-modal').classList.add('hidden')">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); document.getElementById('booking-modal').classList.add('hidden'); alert('Booking request submitted!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-teal-900 uppercase tracking-widest mb-2">Full Name</label>
<input className="w-full bg-teal-50/50 border border-teal-100 rounded-2xl px-5 py-4 text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-teal-900 uppercase tracking-widest mb-2">Email Address</label>
<input className="w-full bg-teal-50/50 border border-teal-100 rounded-2xl px-5 py-4 text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-teal-900 uppercase tracking-widest mb-2">Phone Number</label>
<input className="w-full bg-teal-50/50 border border-teal-100 rounded-2xl px-5 py-4 text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium" placeholder="+91" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-teal-900 uppercase tracking-widest mb-2">Occasion</label>
<div className="relative">
<select className="w-full bg-teal-50/50 border border-teal-100 rounded-2xl px-5 py-4 text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium appearance-none cursor-pointer" required="">
<option disabled="" selected="" value="">Select Event Type</option>
<option value="wedding">Wedding</option>
<option value="destination">Destination Wedding</option>
<option value="birthday">Birthday Party</option>
<option value="anniversary">Anniversary</option>
<option value="corporate">Corporate Event</option>
<option value="fest">College Fest</option>
<option value="other">Other Celebration</option>
</select>
<div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-teal-600">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<button className="w-full h-14 rounded-full bg-teal-950 text-white flex items-center justify-center gap-2 text-base font-semibold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all mt-4" type="submit">
                        Submit Request
                        <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl bg-[#f2fcfb]/85 border-b border-teal-100/50 py-4 shadow-sm shadow-teal-900/5">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-bold tracking-tight text-teal-950 group-hover:text-teal-700 transition-colors">EVENTSATHI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-teal-800/80">
<a className="hover:text-teal-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-900 after:transition-all" href="#about">About Us</a>
<a className="hover:text-teal-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-900 after:transition-all" href="#services">Services</a>
<a className="hover:text-teal-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-900 after:transition-all" href="#gallery">Gallery</a>
<a className="hover:text-teal-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-900 after:transition-all" href="#videos">Videos</a>
<a className="hover:text-teal-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-900 after:transition-all" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex h-11 items-center justify-center rounded-full bg-teal-950 px-6 text-sm font-semibold text-white shadow-xl shadow-teal-900/10 hover:bg-teal-800 transition-all active:scale-95 gap-2" onclick="document.getElementById('login-modal').classList.remove('hidden')">
<iconify-icon className="text-teal-200" height="16" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Login
                </button>
<button className="md:hidden w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-950">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
<div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-200/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10 w-full">
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 shadow-sm text-xs font-semibold text-teal-800 mb-10 w-fit mx-auto">
                    Now accepting bookings for 2026-2027
                    <span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
</span>
</div>
<h1 className="text-5xl md:text-8xl font-extrabold text-teal-950 tracking-tight leading-[1.05] mb-6">
                    We plan your party.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Let's make it unforgettable.</span>
</h1>
<p className="text-lg md:text-2xl font-normal tracking-tight text-teal-800/80 max-w-2xl mx-auto mb-12">
                    From intimate engagements to grand destination weddings and corporate fests. Event Sathi is your trusted partner for elegance and flawless execution.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 w-full sm:w-auto px-8 rounded-full bg-teal-950 text-white flex items-center justify-center gap-2 text-base font-semibold shadow-2xl shadow-teal-900/20 hover:scale-105 hover:bg-teal-800 transition-all" onclick="document.getElementById('booking-modal').classList.remove('hidden')">
                        Book an Event
                        <iconify-icon className="ml-1" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<a className="h-14 w-full sm:w-auto px-8 rounded-full bg-white border-2 border-teal-100 text-teal-950 flex items-center justify-center gap-2 text-base font-semibold hover:bg-teal-50 hover:border-teal-200 transition-all" href="#expert">
                        Talk to an Expert
                        <iconify-icon className="ml-1 text-teal-600" height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white" id="about">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-950 mb-12 text-center">About Us</h2>
<div className="space-y-12">
<div className="p-8 md:p-10 rounded-[2rem] bg-[#f2fcfb] border border-teal-50 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-teal-950">Who We Are</h3>
</div>
<p className="text-lg text-teal-900/80 leading-relaxed font-normal">
                        At <span className="font-bold text-teal-950">EVENT SATHI</span>, we don’t just plan events; we create experiences that keep you in memory long after the lights go down. Based in the heart of Kanpur, we are a premier event management and hosting company dedicated to transforming ordinary gatherings into extraordinary milestones. Whether it’s a high-stakes corporate summit, a lavish lifestyle wedding, or an intimate cultural celebration, we bring a blend of modern innovation and traditional hospitality to every project we touch.
                    </p>
</div>
<div className="p-8 md:p-10 rounded-[2rem] bg-white border border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon height="24" icon="solar:star-fall-minimalistic-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-teal-950">What Sets Us Apart?</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-teal-500" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-teal-950 mb-1">Local Expertise</h4>
<p className="text-teal-900/80 leading-relaxed font-normal">We understand the local vendors, venues, and logistics better than anyone and execute in best ways.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-teal-500" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-teal-950 mb-1">End-to-End Execution</h4>
<p className="text-teal-900/80 leading-relaxed font-normal">From the first conceptual mood board to the final guest farewell, we handle the heavy lifting so you can be a guest at your own event.</p>
</div>
</div>
</div>
</div>
<div className="p-8 md:p-10 rounded-[2rem] bg-teal-950 text-white shadow-xl hover:shadow-2xl hover:shadow-teal-900/20 transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-70 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-teal-800 flex items-center justify-center text-teal-300">
<iconify-icon height="24" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-white">Our Mission</h3>
</div>
<p className="text-lg text-teal-100/90 leading-relaxed font-normal">
                            To become the most trusted event partner in Uttar Pradesh by bridging the gap between imaginative concepts and logistical reality. We make every Event seamless, stress-free, and spectacular success.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-950 mb-4">Our Expertise</h2>
<p className="text-teal-800/70 text-lg">Comprehensive event management services tailored to your specific needs and vision.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/80 backdrop-blur-sm border border-teal-100 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 group cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
<iconify-icon height="24" icon="solar:confetti-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-teal-950 group-hover:text-teal-700 transition-colors">Engagement &amp; Wedding</h3>
<p className="text-sm text-teal-800/70 leading-relaxed font-normal">
                        From pre-wedding rituals to the grand reception, we handle every detail flawlessly.
                    </p>
</div>
<div className="bg-white/80 backdrop-blur-sm border border-teal-100 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 group cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
<iconify-icon height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-teal-950 group-hover:text-teal-700 transition-colors">Destination Wedding</h3>
<p className="text-sm text-teal-800/70 leading-relaxed font-normal">
                        Curated experiences at exotic locations, managing travel, stay, and ceremonies.
                    </p>
</div>
<div className="bg-white/80 backdrop-blur-sm border border-teal-100 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 group cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
<iconify-icon height="24" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-teal-950 group-hover:text-teal-700 transition-colors">Anniversary &amp; Birthday</h3>
<p className="text-sm text-teal-800/70 leading-relaxed font-normal">
                        Milestone celebrations designed to reflect your journey and joy.
                    </p>
</div>
<div className="bg-white/80 backdrop-blur-sm border border-teal-100 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 group cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
<iconify-icon height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-teal-950 group-hover:text-teal-700 transition-colors">Corporate &amp; Fest</h3>
<p className="text-sm text-teal-800/70 leading-relaxed font-normal">
                        Professional corporate parties, school/college fests, and festive events managed end-to-end.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative z-10" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-950 mb-6">Event Gallery</h2>
<p className="text-teal-800/70 text-lg mb-8 max-w-xl mx-auto">A glimpse into the unforgettable moments we've crafted for our clients.</p>
<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-teal-950 text-white shadow-lg shadow-teal-900/20 scale-105">All</button>
<button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-teal-50 text-teal-800 hover:bg-teal-100">Weddings</button>
<button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-teal-50 text-teal-800 hover:bg-teal-100">Corporate</button>
<button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-teal-50 text-teal-800 hover:bg-teal-100">Parties</button>
<button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-teal-50 text-teal-800 hover:bg-teal-100">Fests</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group cursor-pointer bg-teal-100">
<img alt="Elegant Wedding Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38dcca78-f67d-47fb-b6c1-7ada73870d20_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-xl tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Elegant Wedding Setup</p>
<p className="text-teal-300 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Weddings</p>
</div>
</div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group cursor-pointer bg-teal-100">
<img alt="Corporate Gala Night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-xl tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Corporate Gala Night</p>
<p className="text-teal-300 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Corporate</p>
</div>
</div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group cursor-pointer bg-teal-100">
<img alt="Milestone Birthday" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-xl tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Milestone Birthday</p>
<p className="text-teal-300 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Parties</p>
</div>
</div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group cursor-pointer bg-teal-100">
<img alt="Grand Reception" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-xl tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Grand Reception</p>
<p className="text-teal-300 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Weddings</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-teal-950 text-white overflow-hidden relative z-10" id="videos">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Video Highlights</h2>
<p className="text-teal-200/70 text-xl tracking-tight">Experience the magic of our events through these cinematic highlights.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative aspect-video rounded-[2.5rem] overflow-hidden bg-teal-900 border border-teal-800 shadow-2xl">
<video className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-the-forest-41445-large.mp4"></video>
<div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-8 bg-gradient-to-t from-teal-950 via-transparent to-transparent">
<div className="flex items-center gap-3 mb-3">
<span className="px-3 py-1 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-xs font-semibold uppercase tracking-widest text-teal-200">Weddings</span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-white">Wedding Highlights</h3>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-100 group-hover:scale-110 group-hover:bg-white group-hover:text-teal-950 transition-all duration-300 pointer-events-none shadow-2xl">
<iconify-icon height="32" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>
<div className="group aspect-video overflow-hidden bg-teal-900 border-teal-800 border rounded-[2.5rem] relative shadow-2xl">
<video className="group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform opacity-70 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-with-lights-4440-large.mp4"></video>
<div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-8 bg-gradient-to-t from-teal-950 via-transparent to-transparent">
<div className="flex items-center gap-3 mb-3">
<span className="px-3 py-1 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-xs font-semibold uppercase tracking-widest text-teal-200">Corporate</span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-white">Corporate Gala</h3>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-100 group-hover:scale-110 group-hover:bg-white group-hover:text-teal-950 transition-all duration-300 pointer-events-none shadow-2xl">
<iconify-icon height="32" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white relative z-10" id="reviews">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f2fcfb] rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-950 mb-4">Loved by Clients</h2>
<p className="text-teal-800/70 text-lg">Don't just take our word for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-[2rem] bg-[#f2fcfb] border border-teal-50 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all group">
<div className="flex gap-1 text-teal-500 mb-6 group-hover:scale-105 transform origin-left transition-transform">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-teal-900 leading-relaxed mb-8 font-normal italic text-lg">
                        "Event sathi made our destination wedding an absolute breeze. The team handled everything from flights to decor. Highly recommend!"
                    </p>
<div className="flex items-center gap-4 border-t border-teal-100 pt-6">
<div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center text-lg font-extrabold text-teal-800">A</div>
<div>
<div className="text-base font-semibold tracking-tight text-teal-950">Anjali &amp; Rahul</div>
<div className="text-xs text-teal-600 font-medium uppercase tracking-wider">Verified Client</div>
</div>
</div>
</div>
<div className="p-8 rounded-[2rem] bg-[#f2fcfb] border border-teal-50 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all group">
<div className="flex gap-1 text-teal-500 mb-6 group-hover:scale-105 transform origin-left transition-transform">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-teal-900 leading-relaxed mb-8 font-normal italic text-lg">
                        "Our college fest was a massive success thanks to their meticulous planning and artist management. Best event company in town."
                    </p>
<div className="flex items-center gap-4 border-t border-teal-100 pt-6">
<div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center text-lg font-extrabold text-teal-800">S</div>
<div>
<div className="text-base font-semibold tracking-tight text-teal-950">Student Council</div>
<div className="text-xs text-teal-600 font-medium uppercase tracking-wider">Verified Client</div>
</div>
</div>
</div>
<div className="p-8 rounded-[2rem] bg-[#f2fcfb] border border-teal-50 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all group">
<div className="flex gap-1 text-teal-500 mb-6 group-hover:scale-105 transform origin-left transition-transform">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-teal-900 leading-relaxed mb-8 font-normal italic text-lg">
                        "Booked them for my parents' 25th anniversary. They created a magical evening within our budget. Very professional team."
                    </p>
<div className="flex items-center gap-4 border-t border-teal-100 pt-6">
<div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center text-lg font-extrabold text-teal-800">V</div>
<div>
<div className="text-base font-semibold tracking-tight text-teal-950">Vikram Singh</div>
<div className="text-xs text-teal-600 font-medium uppercase tracking-wider">Verified Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white" id="contact">
<div className="max-w-6xl mx-auto bg-teal-950 rounded-[3rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
<div id="expert">
<h2 className="md:text-7xl leading-[1.1] text-5xl font-extrabold tracking-tight mb-8">Talk to an expert.</h2>
<p className="text-teal-200/80 text-xl font-normal tracking-tight mb-12 max-w-sm">
                        Ready to start planning? Reach out directly via call or WhatsApp. We're here to answer all your questions.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-5 p-6 rounded-[2rem] bg-teal-900/50 border border-teal-800/50 backdrop-blur-md hover:bg-teal-900 transition-colors cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-teal-300" height="24" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-teal-400 font-semibold uppercase tracking-widest mb-1">Primary Contact</p>
<a className="text-2xl font-extrabold tracking-tight text-white hover:text-teal-200 transition-colors" href="tel:+919720507177">+91 9720507177</a>
</div>
</div>
<div className="flex items-center gap-5 p-6 rounded-[2rem] bg-teal-900/50 border border-teal-800/50 backdrop-blur-md hover:bg-teal-900 transition-colors cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-teal-300" height="24" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-teal-400 font-semibold uppercase tracking-widest mb-1">Secondary Contact</p>
<a className="text-2xl font-extrabold tracking-tight text-white hover:text-teal-200 transition-colors" href="tel:+917394069509">+91 7394069509</a>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-6 justify-center items-center md:items-start">
<div className="p-8 rounded-[2rem] border border-teal-800/50 bg-teal-900/30 backdrop-blur-md flex flex-col gap-4 w-full">
<div className="flex items-center gap-3 mb-2">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-teal-100">Experts Online Now</span>
</div>
<p className="text-teal-300/80 font-normal leading-relaxed">
                            Usually responds within 15 minutes. Our team is available to discuss your requirements and provide an immediate consultation.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10 bg-teal-50/30 border-t border-teal-100/60" id="admin-bookings">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-teal-600" height="28" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h2 className="text-3xl font-bold tracking-tight text-teal-950">Admin Dashboard</h2>
</div>
<p className="text-sm font-medium text-teal-800/60">Manage recent booking inquiries and user data.</p>
</div>
<span className="px-4 py-2 bg-teal-900 text-teal-50 text-xs font-bold uppercase tracking-widest rounded-full shadow-md shadow-teal-900/10">Admin Access Only</span>
</div>
<div className="bg-white rounded-3xl shadow-sm border border-teal-100 overflow-hidden overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-teal-50/80 border-b border-teal-100 text-xs text-teal-800 font-bold uppercase tracking-widest">
<th className="p-5">Name</th>
<th className="p-5">Email Address</th>
<th className="p-5">Phone Number</th>
<th className="p-5">Occasion</th>
<th className="p-5 text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm text-teal-950 font-medium divide-y divide-teal-50/80">
<tr className="hover:bg-teal-50/40 transition-colors">
<td className="p-5">Rahul Sharma</td>
<td className="p-5 text-teal-800/70">rahul.s@example.com</td>
<td className="p-5">+91 9876543210</td>
<td className="p-5">Destination Wedding</td>
<td className="p-5 text-right">
<span className="text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full text-xs font-bold tracking-wide">New Lead</span>
</td>
</tr>
<tr className="hover:bg-teal-50/40 transition-colors">
<td className="p-5">Priya Patel</td>
<td className="p-5 text-teal-800/70">priya.p@example.com</td>
<td className="p-5">+91 8765432109</td>
<td className="p-5">Corporate Event</td>
<td className="p-5 text-right">
<span className="text-teal-700 bg-teal-100 border border-teal-200 px-3 py-1 rounded-full text-xs font-bold tracking-wide">Reviewed</span>
</td>
</tr>
<tr className="hover:bg-teal-50/40 transition-colors">
<td className="p-5">Aman Verma</td>
<td className="p-5 text-teal-800/70">aman.v@example.com</td>
<td className="p-5">+91 9123456780</td>
<td className="p-5">Birthday Party</td>
<td className="p-5 text-right">
<span className="text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold tracking-wide">Pending</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="bg-[#0a1e1d] text-teal-50 py-20 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-2">
<span className="text-3xl font-extrabold tracking-tight text-white mb-6 block">EVENTSATHI</span>
<p className="text-lg text-teal-200/60 max-w-sm mb-8 font-normal leading-relaxed">
                        Premium event management and conceptualization. Crafting unforgettable memories since 2026.
                    </p>
<div className="flex items-center gap-4">
<a className="w-12 h-12 rounded-2xl bg-teal-900 flex items-center justify-center text-teal-300 hover:bg-teal-700 hover:text-white transition-all hover:-translate-y-1" href="https://wa.me/919720507177" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="mdi:whatsapp" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-2xl bg-teal-900 flex items-center justify-center text-teal-300 hover:bg-teal-700 hover:text-white transition-all hover:-translate-y-1" href="https://www.instagram.com/event.sathi_?igsh=MWZmZjFiOGMxMzN4Zw==" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="mdi:instagram" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-2xl bg-teal-900 flex items-center justify-center text-teal-300 hover:bg-teal-700 hover:text-white transition-all hover:-translate-y-1" href="#">
<iconify-icon height="24" icon="mdi:facebook" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-teal-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm font-medium text-teal-500 bg-teal-900/30 px-4 py-2 rounded-full">
                    © 2026 EventSathi. All rights reserved.
                </p>
<div className="flex gap-8 text-sm font-semibold text-teal-300/60">
<a className="hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
