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
      

<nav className="sticky top-0 z-50 bg-[#FCFBF9]/80 backdrop-blur-xl border-b border-rose-100/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-stone-900 uppercase" href="#" style={{fontFamily: '\'Playfair Display\', serif', letterSpacing: '-0.05em'}}>
                (Lash Business)
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-rose-400 transition-colors" href="#services">Services</a>
<a className="hover:text-rose-400 transition-colors" href="#about">About</a>
<a className="hover:text-rose-400 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-rose-400 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm" href="#booking">
                    Book Appointment
                </a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-rose-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Now accepting new clients
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Enhancing Your <span className="italic text-rose-400">Natural Beauty</span>,<br className="hidden md:block"/> One Lash at a Time
            </h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-2xl font-light">
                Experience luxury lash extensions tailored to your unique eye shape. Wake up feeling confident, beautiful, and ready to take on the day.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-md shadow-rose-200 flex items-center justify-center gap-2" href="#booking">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2" href="#contact">
<iconify-icon className="text-green-500" icon="solar:whatsapp-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Our Signature Services</h2>
<p className="text-stone-500 font-light max-w-xl mx-auto">Meticulously applied extensions customized to achieve your desired look, from everyday natural to full glamour.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FCFBF9] p-8 rounded-3xl border border-stone-100 hover:border-rose-200 transition-colors group">
<div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Classic Lashes</h3>
<span className="text-sm font-medium text-stone-900 bg-white px-3 py-1 rounded-full border border-stone-100">$120</span>
</div>
<p className="text-sm text-stone-500 mb-6 font-light leading-relaxed">A 1:1 application for a natural, mascara-like effect. Perfect for adding length and subtle curl.</p>
<div className="flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        120 mins
                    </div>
</div>

<div className="bg-[#FCFBF9] p-8 rounded-3xl border border-stone-100 hover:border-rose-200 transition-colors group">
<div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Hybrid Lashes</h3>
<span className="text-sm font-medium text-stone-900 bg-white px-3 py-1 rounded-full border border-stone-100">$150</span>
</div>
<p className="text-sm text-stone-500 mb-6 font-light leading-relaxed">A beautiful blend of classic and volume lashes. Ideal for a textured, wispy, and slightly fuller look.</p>
<div className="flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        150 mins
                    </div>
</div>

<div className="bg-[#FCFBF9] p-8 rounded-3xl border border-stone-100 hover:border-rose-200 transition-colors group">
<div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Volume Lashes</h3>
<span className="text-sm font-medium text-stone-900 bg-white px-3 py-1 rounded-full border border-stone-100">$180</span>
</div>
<p className="text-sm text-stone-500 mb-6 font-light leading-relaxed">Handmade fans of multiple fine lashes applied to a single natural lash for dramatic, fluffy density.</p>
<div className="flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        180 mins
                    </div>
</div>
</div>

<div className="mt-12 max-w-3xl mx-auto bg-stone-50 rounded-2xl p-6 border border-stone-100">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200">
<div className="flex items-center justify-between w-full md:w-1/2 px-4 pt-4 md:pt-0">
<div>
<h4 className="text-sm font-medium text-stone-900">Lash Fills (2-3 Weeks)</h4>
<p className="text-xs text-stone-500 mt-1">Maintain your set</p>
</div>
<span className="text-sm font-medium text-stone-900">From $60</span>
</div>
<div className="flex items-center justify-between w-full md:w-1/2 px-4 pt-4 md:pt-0">
<div>
<h4 className="text-sm font-medium text-stone-900">Gentle Removal</h4>
<p className="text-xs text-stone-500 mt-1">Safe and damage-free</p>
</div>
<span className="text-sm font-medium text-stone-900">$30</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="booking">
<div className="absolute inset-0 bg-[#FCFBF9] -z-10"></div>
<div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Reserve Your Time</h2>
<p className="text-stone-500 font-light mb-8 leading-relaxed">
                    Ready for a confidence boost? Select your desired service and choose a time that works best for you. Please note that a small deposit is required to secure your appointment.
                </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-rose-400 shrink-0 shadow-sm">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Flexible Scheduling</h4>
<p className="text-sm text-stone-500 font-light mt-1">Evening and weekend appointments available upon request.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-rose-400 shrink-0 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Secure Booking</h4>
<p className="text-sm text-stone-500 font-light mt-1">Your data is safe and deposits are processed securely.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-stone-200/50 border border-stone-100">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100">
<h3 className="text-lg font-medium text-stone-900">New Appointment</h3>
<div className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-1 rounded-md">Step 1 of 3</div>
</div>
<div className="space-y-6">

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Select Service</label>
<div className="relative">
<select className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-700 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-shadow cursor-pointer">
<option>Classic Lash Extensions - $120</option>
<option>Hybrid Lash Extensions - $150</option>
<option>Volume Lash Extensions - $180</option>
<option>Lash Fill (2 Weeks) - $60</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Choose Date</label>
<div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 snap-x hide-scrollbar" style={{scrollbarWidth: 'none'}}>
<button className="snap-start shrink-0 w-16 py-3 rounded-xl border border-rose-400 bg-rose-50 flex flex-col items-center justify-center">
<span className="text-xs text-rose-500 font-medium">Mon</span>
<span className="text-lg font-medium text-rose-700">12</span>
</button>
<button className="snap-start shrink-0 w-16 py-3 rounded-xl border border-stone-200 bg-white hover:border-stone-300 flex flex-col items-center justify-center transition-colors">
<span className="text-xs text-stone-400 font-medium">Tue</span>
<span className="text-lg font-medium text-stone-700">13</span>
</button>
<button className="snap-start shrink-0 w-16 py-3 rounded-xl border border-stone-200 bg-white hover:border-stone-300 flex flex-col items-center justify-center transition-colors">
<span className="text-xs text-stone-400 font-medium">Wed</span>
<span className="text-lg font-medium text-stone-700">14</span>
</button>
<button className="snap-start shrink-0 w-16 py-3 rounded-xl border border-stone-200 bg-white hover:border-stone-300 flex flex-col items-center justify-center transition-colors">
<span className="text-xs text-stone-400 font-medium">Thu</span>
<span className="text-lg font-medium text-stone-700">15</span>
</button>
</div>
</div>

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Available Times</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-2.5 rounded-lg border border-stone-200 text-sm font-medium text-stone-400 bg-stone-50 cursor-not-allowed">09:00 AM</button>
<button className="py-2.5 rounded-lg border border-rose-400 text-sm font-medium text-rose-700 bg-rose-50">11:30 AM</button>
<button className="py-2.5 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 bg-white hover:border-stone-300 transition-colors">02:00 PM</button>
<button className="py-2.5 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 bg-white hover:border-stone-300 transition-colors">04:30 PM</button>
</div>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-xl text-sm font-medium transition-colors mt-4 shadow-sm flex items-center justify-center gap-2">
                        Continue to Details
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-t border-stone-100" id="about">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="aspect-[4/5] rounded-[2rem] bg-stone-100 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-stone-50 flex items-center justify-center">
<iconify-icon className="text-stone-300" icon="solar:gallery-wide-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="absolute bottom-6 left-6 text-sm font-medium text-stone-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">(Insert Photo Here)</span>
</div>
</div>

<div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-50 max-w-[200px]">
<div className="flex text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xs font-medium text-stone-900">"The best lash tech in the city! So gentle and precise."</p>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Meet Your Lash Artist</h2>
<p className="text-stone-500 font-light mb-6 leading-relaxed">
                    Hi, I'm [Name]. I'm a certified and multi-trained lash technician with a passion for helping women feel effortlessly beautiful. What started as an obsession with the perfect mascara turned into a dedicated career in artistry.
                </p>
<p className="text-stone-500 font-light mb-10 leading-relaxed">
                    My studio is a safe, relaxing space where you can take a nap, vent about your day, or just enjoy some quiet time while I work magic on your lashes. I prioritize lash health above all, ensuring your natural lashes remain strong and undamaged.
                </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-900">Fully Certified</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
<iconify-icon icon="solar:shield-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-900">Premium Products</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-900">Cruelty-Free</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-900">Long-lasting Retention</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FCFBF9] px-6" id="gallery">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Before &amp; After</h2>
<p className="text-stone-500 font-light">Real clients, real results. Follow us on Instagram.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors" href="#">
                    @insert_instagram_handle
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-stone-200/50"></div>
<div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-stone-200/50"></div>
<div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-stone-200/50"></div>
<div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-stone-200/50"></div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-t border-stone-100" id="contact">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Get in Touch</h2>
<p className="text-stone-500 font-light mb-10">Have questions about which style suits you best? Drop a message or chat with me directly on WhatsApp.</p>
<div className="space-y-6 mb-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-stone-100 flex items-center justify-center text-stone-600">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Studio Location</p>
<p className="text-sm text-stone-500 font-light mt-0.5">123 Beauty Avenue, Suite 4A<br/>City, State 12345</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-stone-100 flex items-center justify-center text-stone-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Business Hours</p>
<p className="text-sm text-stone-500 font-light mt-0.5">Tue - Fri: 9:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 3:00 PM</p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-sm font-medium transition-colors shadow-md shadow-[#25D366]/20 gap-2" href="#">
<iconify-icon icon="solar:whatsapp-bold" width="20"></iconify-icon>
                    Message on WhatsApp
                </a>
</div>

<div className="bg-[#FCFBF9] rounded-[2rem] p-8 border border-stone-100">
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Name</label>
<input className="w-full bg-white border border-stone-200 text-stone-700 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-shadow" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Email</label>
<input className="w-full bg-white border border-stone-200 text-stone-700 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-shadow" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Message</label>
<textarea className="w-full bg-white border border-stone-200 text-stone-700 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-shadow resize-none" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-xl text-sm font-medium transition-colors mt-2" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-8 bg-white border-t border-stone-100 text-center px-6">
<p className="text-xs text-stone-400 font-light">© 2024 (Insert Lash Business Name). All rights reserved.</p>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform" href="#">
<iconify-icon icon="solar:whatsapp-outline" strokeWidth="1.5" width="32"></iconify-icon>
</a>

    </>
  );
}
