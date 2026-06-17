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
colors: {
brand: {
500: '#2563eb', /* Royal Blue */
600: '#1d4ed8',
50: '#eff6ff',
},
dark: {
900: '#0f172a',
}
},
boxShadow: {
'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)',
}
}
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
      

<div className="bg-brand-600 text-white text-xs font-medium py-2.5">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<a className="hover:text-white/80 transition-colors flex items-center gap-2" href="tel:0223988088">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                    022-398-8088
                </a>
<span className="hidden sm:inline text-brand-400">|</span>
<a className="hover:text-white/80 transition-colors hidden sm:flex items-center gap-2" href="mailto:service@fixplus.co.nz">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                    service@fixplus.co.nz
                </a>
</div>
<div className="flex items-center gap-2 opacity-90">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
<span>Rosedale, Auckland</span>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 glass-nav h-20 flex items-center transition-all">
<div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="text-2xl font-bold tracking-tighter text-slate-900">FixPlus</span>
<span className="text-2xl font-bold text-brand-600">+</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="text-brand-600 font-semibold" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#prices">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full transition-all" href="tel:096006506">
<span className="iconify" data-icon="lucide:phone-call" data-width="16"></span>
                    09 600 6506
                </a>
<button className="md:hidden text-slate-900 p-2">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-12 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white to-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-brand-600 text-xs font-semibold mb-6 border border-blue-100">
<span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
                        Open for bookings: Mon - Sat
                    </div>
<h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Reliable Computer &amp; <br/>
<span className="text-brand-600">Laptop Repairs.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
                        Expert diagnostics and repairs for all brands. From cracked screens to motherboard soldering, FixPlus Rosedale gets you back online fast.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white h-12 px-8 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20" href="#contact">
                            Book a Repair
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm" href="#services">
                            View Services
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Free Quote
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:check-circle-2" data-width="18"></span>
                            3-Month Warranty
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Quick Turnaround
                        </div>
</div>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<img alt="Technician repairing mobile device" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/811ba41a-b0a6-4003-9103-0212155d47ba_800w.png"/>
<img alt="Soldering circuit board" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-12 hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d2a1a1f-fe4c-4c22-9b7f-979a3778ec2f_800w.png"/>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:badge-check" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900">Expert Technicians</h3>
<p className="text-sm text-slate-500">Qualified specialists</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900">Fast Repair</h3>
<p className="text-sm text-slate-500">Same day service available</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:shield" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900">Warranty</h3>
<p className="text-sm text-slate-500">90-day service guarantee</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:wallet" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900">Affordable</h3>
<p className="text-sm text-slate-500">Competitive pricing</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Our Repair Services</h2>
<p className="text-slate-500 max-w-2xl mx-auto">We repair all major brands including Apple MacBook, HP, Dell, Lenovo, Acer, ASUS, and Microsoft Surface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:laptop" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Laptop Screen Repair</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Cracked, smashed, or flickering screens replaced. We stock screens for most common laptop models for quick turnaround.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:battery-medium" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Battery Replacement</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Laptop not holding charge? Battery swelling? We replace worn-out batteries to restore your device's portability.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:droplets" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Liquid Damage Repair</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Spilled coffee or water? Turn it off immediately and bring it in. We perform ultrasonic cleaning and board-level repairs.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:hard-drive" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Data Recovery &amp; SSD</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Slow computer? Upgrade to a fast SSD. Lost files? We offer data recovery services for failing hard drives.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:keyboard" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Keyboard &amp; Trackpad</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Stuck keys or unresponsive trackpad? We can replace the entire top case or individual keyboard modules.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>

<div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plug" data-width="24"></span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3">Charging Port Repair</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Fixing loose DC jacks and USB-C charging ports. If your laptop only charges at a specific angle, we can fix it.</p>
<a className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Get Quote <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>
</div>
</div>
</section>

<div className="py-12 border-y border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-wider">We Service All Major Brands</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:apple" data-width="24"></span> Apple</span>
<span className="text-2xl font-bold text-slate-800">DELL</span>
<span className="text-2xl font-bold text-slate-800">HP</span>
<span className="text-2xl font-bold text-slate-800">Lenovo</span>
<span className="text-2xl font-bold text-slate-800">ASUS</span>
<span className="text-2xl font-bold text-slate-800">Acer</span>
<span className="text-2xl font-bold text-slate-800">Microsoft</span>
</div>
</div>
</div>

<section className="py-24 px-6 bg-white" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Visit Our Shop</h2>
<p className="text-slate-500 mb-10 text-lg">
                        Located in Rosedale, Auckland. Walk-ins are welcome for drop-offs.
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-lg">Address</h4>
<p className="text-slate-500 mt-1">4E Antares Place, Rosedale,Auckland 0632</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-lg">Phone</h4>
<p className="text-slate-500 mt-1">Mobile: <a className="text-brand-600 hover:underline" href="tel:0223988088">022 398 8088</a></p>
<p className="text-slate-500">Landline: <a className="text-brand-600 hover:underline" href="tel:096006506">09 600 6506</a></p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-lg">Opening Hours</h4>
<div className="grid grid-cols-2 gap-x-8 mt-1 text-slate-500">
<span>Monday - Friday</span> <span>9:30 AM - 6:00 PM</span>
<span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
<span>Sunday</span> <span>Closed</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<h3 className="text-xl font-bold text-slate-900 mb-6">Quick Enquiry</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Phone</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="021 123 456" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Device Model (Optional)</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="e.g. MacBook Pro 2019" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Issue Description</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400" placeholder="Please describe the problem..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium h-12 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2" type="button">
                            Send Message
                        </button>
<p className="text-xs text-center text-slate-400 mt-4">We usually respond within 2 hours during business hours.</p>
</form>
</div>
</div>

<div className="mt-16 w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<iframe allowfullscreen="" aria-hidden="false" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.8837775924765!2d174.7269337158933!3d-36.74307737996024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3bd25adb928d%3A0x5fdc698cdea6c5b3!2sFixPlus!5e0!3m2!1sen!2snz!4v1609554348823!5m2!1sen!2snz" style={{border: '0'}} tabindex="0" width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-bold text-white block mb-4">FixPlus<span className="text-brand-600">+</span></span>
<p className="mb-6 leading-relaxed">
                        Auckland's trusted repair center for laptops, MacBooks, and desktop computers. Fast, reliable, and affordable.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Laptop Screen Repair</a></li>
<li><a className="hover:text-white transition-colors" href="#">MacBook Logic Board</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Recovery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom PC Build</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Trade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2">
<li>4E Antares Place, Rosedale</li>
<li>Auckland, New Zealand</li>
<li className="pt-2"><a className="text-brand-500 hover:text-brand-400" href="mailto:service@fixplus.co.nz">service@fixplus.co.nz</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 FixPlus Ltd. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
