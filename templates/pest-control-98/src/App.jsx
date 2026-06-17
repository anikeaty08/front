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
      

<nav className="glass-nav fixed w-full z-50 border-b border-gray-100 top-0 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-lg shrink-0 shadow-sm shadow-emerald-200">
<span className="font-medium text-lg tracking-tighter">C</span>
</div>
<span className="font-medium text-gray-900 tracking-tight text-lg group-hover:text-emerald-700 transition-colors">Creative Pest Control</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-600 transition-colors" href="#certifications">Certifications</a>
<a className="hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm shadow-emerald-200" href="https://wa.me/919988222605">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
<span>WhatsApp Us</span>
</a>

<button className="md:hidden text-gray-900 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#ecfdf5_100%)]"></div>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-emerald-800 uppercase tracking-wide">Pan India Service • 24/7 Support</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                Advanced defense for <br className="hidden md:block"/>
<span className="text-gray-400">your environment.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Professional integrated pest management solutions certified by ISO and IPSA. We protect homes and businesses with <span className="text-emerald-600 font-normal">eco-friendly precision</span>.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200 flex items-center justify-center gap-2" href="tel:+91998822605">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    Call Now
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors flex items-center justify-center gap-2" href="#services">
                    Explore Services
                </a>
</div>
</div>
</section>

<div className="border-y border-gray-100 bg-gray-50/50 py-12" id="certifications">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Accredited &amp; Certified by</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="font-semibold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">ISO Certified</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="font-semibold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">IPSA Member</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:buildings-linear" width="24"></iconify-icon>
<span className="font-semibold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">MSME Reg.</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:document-text-linear" width="24"></iconify-icon>
<span className="font-semibold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Govt Licensed</span>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Comprehensive Solutions</h2>
<p className="text-gray-500 font-light text-lg max-w-2xl">We utilize advanced techniques and eco-friendly products to manage a wide spectrum of pest issues.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Sanitization" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Sanitization Services</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Complete viral and bacterial disinfection for homes and commercial spaces using hospital-grade disinfectants.
                    </p>
</div>
<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Termite" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:home-smile-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Anti Termite Treatment</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Pre-construction and post-construction soil treatment to protect wooden structures and foundations.
                    </p>
</div>
<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Mosquito" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:bug-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Mosquito Management</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Vector control through fogging, misting, and larvicidal treatment to prevent Dengue, Malaria, and Chikungunya.
                    </p>
</div>
<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Bed Bugs" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:sleeping-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Bed Bugs Service</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Intensive treatment for mattresses and furniture to eliminate infestations and ensure a peaceful night's sleep.
                    </p>
</div>
<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Cockroach &amp; Ants" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Ants &amp; General Pest</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Targeted gel baiting and spraying solutions for ants, cockroaches, and general household crawling insects.
                    </p>
</div>
<div className="service-card group border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/40 bg-white">
<div className="h-48 w-full rounded-lg bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Birds" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="icon-wrapper w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">Bird Prevention</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Humane bird netting and spike installation to prevent roosting and fouling on building facades.
                    </p>
</div>
</div>

<div className="mt-16 border-t border-gray-100 pt-10">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Additional Specialized Services</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">

<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Fumigation Service</span>
<span className="text-xs text-gray-500">Gas treatment for export containers and silos.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Wood Borers Service</span>
<span className="text-xs text-gray-500">Specialized chemical injection for wood preservation.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Stored Product Insects</span>
<span className="text-xs text-gray-500">Protection for pantries, warehouses, and grain storage.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Spider Management</span>
<span className="text-xs text-gray-500">Web removal and repellent sprays for high corners.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Lizard Management</span>
<span className="text-xs text-gray-500">Repellents to keep interiors lizard-free.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Snake Pro Service</span>
<span className="text-xs text-gray-500">Perimeter defense for gardens and compounds.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Fly Killer Maintenance</span>
<span className="text-xs text-gray-500">Servicing of UV catcher machines and glue pads.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-800 block text-sm">Inspection Reports</span>
<span className="text-xs text-gray-500">Detailed pest audits for commercial compliance.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 text-gray-300 py-20 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Contact Us</h2>
<p className="mb-10 text-gray-400 font-light">Get in touch for a free inspection or consultation. We are available 24/7 to assist with your pest control needs across India.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium mb-1">Headquarters</span>
<address className="not-italic text-sm text-gray-400 leading-relaxed">
                                    B-31-1136/213/40, New Sunder Nagar,<br/>
                                    Bhamian Kalan, Ludhiana
                                </address>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium mb-1">Phone Support</span>
<a className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="tel:+91998822605">+91 99882 22605</a>
<a className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="tel:+919988222965">+91 99882 22965</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium mb-1">Email</span>
<a className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="mailto:creativepestcontrol.lud@gmail.com">creativepestcontrol.lud@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-900/50">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium mb-1">WhatsApp</span>
<a className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="https://wa.me/919988222605">9988222605</a>
</div>
</div>
</div>
</div>
<div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 ml-1">First Name</label>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all placeholder:text-gray-600" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 ml-1">Phone</label>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all placeholder:text-gray-600" placeholder="+91..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 ml-1">Service Required</label>
<div className="relative">
<select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all appearance-none">
<option>Select a service</option>
<option>Termite Control</option>
<option>General Pest Control</option>
<option>Sanitization</option>
<option>Others</option>
</select>
<div className="absolute right-4 top-3.5 pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 ml-1">Message</label>
<textarea className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all placeholder:text-gray-600" placeholder="Describe your pest problem..." rows="4"></textarea>
</div>
<button className="w-full bg-emerald-600 text-white font-medium text-sm py-3 rounded-lg hover:bg-emerald-700 transition-colors mt-2 shadow-lg shadow-emerald-900/20" type="button">Send Request</button>
</form>
</div>
</div>
<div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">© 2023 Creative Pest Control Services. All rights reserved.</p>
<div className="flex gap-6">
<span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded hover:border-emerald-700 hover:text-emerald-500 transition-colors cursor-default">GST Registered</span>
<span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded hover:border-emerald-700 hover:text-emerald-500 transition-colors cursor-default">ISO 9001:2015</span>
</div>
</div>
</div>
</section>

    </>
  );
}
