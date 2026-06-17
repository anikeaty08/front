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
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-zinc-900 tracking-tighter" href="#">SARTAJ<span className="flex items-center justify-center cursor-pointer text-sm font-medium text-white bg-zinc-900 w-8 h-8 rounded-lg" onclick="window.location.href='https://media.discordapp.net/attachments/1081259827122143243/1463400097684389995/86504-removebg-preview.png?ex=6971b10b&amp;is=69705f8b&amp;hm=c4caf41299f723672e05a4e3d8cb88f1a4eb32376fbbac25d80278d7174df4fd&amp;=&amp;format=webp&amp;quality=lossless'" role="button">G</span></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors shadow-sm ring-1 ring-zinc-900/10" href="#book">
                Book Session
            </a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="z-10 text-center max-w-6xl mr-auto ml-auto relative">
<div className="inline-flex gap-2 animate-fade-in-up text-xs font-medium text-zinc-600 bg-zinc-50 border-zinc-100 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Accepting bookings for All Season 2026<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span></div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Intricate designs,timeless memories.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Specializing in bespoke bridal mehndi and intricate henna artistry. Combining traditional patterns with modern elegance.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-200" href="#book">
                    Book an Appointment
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors" href="#work">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-orange-50 via-rose-50 to-zinc-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
</section>

<section className="py-20 border-t border-zinc-100 bg-white" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured Artistry</h2>
<p className="text-sm text-zinc-500 mt-2">A curated selection of recent bridal and party commissions.</p>
</div>
<a className="hidden md:flex items-center hover:text-zinc-600 transition-colors text-sm font-medium text-zinc-900" href="/#https://www.instagram.com/sartaj_mehendi_26?igsh=MTZkaDB6bXBweXMw">View Instagram<iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" width="16"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100">
<img alt="Bridal Hands" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 group-hover:grayscale-0 opacity-90 w-full h-full object-cover grayscale" onclick="window.location.href='https://media.discordapp.net/attachments/1081259827122143243/1463402889153089642/Mehndi_vairalpost_vairal2025_vairal_sartaj_instagood_instadaily_fyp_fyppppppppppp.heic_1.jpg?ex=6971b3a5&amp;is=69706225&amp;hm=e9f40456ef0ee5319d427361c0571cd5e9051442fe576b41b5cd101d5f52eb0f&amp;=&amp;format=webp&amp;width=856&amp;height=856'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-sm font-medium block">Bridal Collection</span>
<span className="text-zinc-300 text-xs">Full hands &amp; arms</span>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 md:-mt-8">
<img alt="Intricate Design" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-sm font-medium block">Minimalist</span>
<span className="text-zinc-300 text-xs">Contemporary patterns</span>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100">
<img alt="Party Henna" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-sm font-medium block">Guest Party</span>
<span className="text-zinc-300 text-xs">Quick &amp; elegant</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-start space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Bridal Packages</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Complete bridal henna for hands and feet. Includes consultation and trial design.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Group Events</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Sangeet nights, bridal showers, and parties. Hourly rates available for large groups.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Organic Henna</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">100% natural, homemade henna paste. Safe for all skin types, ensuring a rich dark stain.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-base font-semibold text-zinc-900">Travel</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Available for destination weddings and travel bookings across the region.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-b border-zinc-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Transparent Pricing</h2>
<p className="text-sm text-zinc-500 mb-8">Packages start from <span className="text-zinc-900 font-medium">$250</span> for bridal simple designs. Group bookings are charged at <span className="text-zinc-900 font-medium">$85/hour</span> per artist. A deposit is required to secure your date.</p>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 underline underline-offset-4 decoration-zinc-300" href="#book">
                Download Full Price List
            </a>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="book">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-between h-full">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Get in touch</h2>
<p className="text-zinc-500 mb-8 max-w-sm">Tell me about your event. I'll get back to you within 24 hours with a
            custom quote.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-100">
<iconify-icon className="" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-zinc-400 uppercase tracking-wide font-medium">Email</p>
<p className="text-sm font-medium text-zinc-900" style={{}}>sartajhennaartist@gmail.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-100">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-zinc-400 uppercase tracking-wide font-medium">Phone</p>
<p className="text-sm font-medium text-zinc-900">+91 9023708885</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-100">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-zinc-400 uppercase tracking-wide font-medium">Location</p>
<p className="text-sm font-medium text-zinc-900">Vadodara, (Available for travel)</p>
</div>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-1" icon="solar:chat-round-quote-linear" width="24"></iconify-icon>
<div className="">
<p className="leading-relaxed text-sm italic text-zinc-600" style={{}}>"Sartaj's work is simply breathtaking.
                The stain was dark and lasted for weeks. She was professional, punctual, and a joy to have at my
                wedding."</p>
<p className="text-xs font-semibold text-zinc-900 mt-3">— Sarah &amp; Ahmed</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">First Name</label>
<input className="w-full h-10 px-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Last Name</label>
<input className="w-full h-10 px-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Email Address</label>
<input className="w-full h-10 px-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Event Date</label>
<input className="w-full h-10 px-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all font-sans text-gray-400" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Guests (Approx)</label>
<input className="w-full h-10 px-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="1" type="number"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-medium text-zinc-700">Service Type</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="service" type="radio"/>
<div className="flex transition-all group-hover:border-zinc-300 h-10 border-zinc-200 border rounded-lg pr-4 pl-4 items-center justify-between">
<span className="text-sm text-zinc-600 peer-checked:text-white">Bridal</span>
<iconify-icon className="hidden text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="service" type="radio"/>
<div className="h-10 px-4 rounded-lg border border-zinc-200 flex items-center justify-between transition-all group-hover:border-zinc-300">
<span className="text-sm text-zinc-600">Guest / Party</span>
<iconify-icon className="hidden text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="service" type="radio"/>
<div className="h-10 px-4 rounded-lg border border-zinc-200 flex items-center justify-between transition-all group-hover:border-zinc-300">
<span className="text-sm text-zinc-600">Private Appt</span>
<iconify-icon className="hidden text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="service" type="radio"/>
<div className="h-10 px-4 rounded-lg border border-zinc-200 flex items-center justify-between transition-all group-hover:border-zinc-300">
<span className="text-sm text-zinc-600">Other</span>
<iconify-icon className="hidden text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Additional Details</label>
<textarea className="w-full h-24 p-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all resize-none" placeholder="Describe the style you are looking for..."></textarea>
</div>
<button className="w-full h-10 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" type="button">
                            Send Request
                            <iconify-icon className="" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 text-base font-semibold text-zinc-900 tracking-tighter mb-4" href="#" style={{}}>SARTAJ HENNA ARTIST<span className="flex items-center justify-center text-xs font-medium text-white bg-zinc-900 w-6 h-6 rounded">S</span></a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Exquisite henna artistry for the modern bride. Based in Toronto, delivering worldwide.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Sitemap</h4>
<ul className="space-y-2">
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Home</a></li>
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Portfolio</a></li>
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Socials</h4>
<ul className="space-y-2">
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="/#"><iconify-icon className="" icon="solar:instagram-linear"></iconify-icon> Instagram</a></li>
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="brandico:facebook" width="12"></iconify-icon> Facebook</a></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Legal</h4>
<ul className="space-y-2">
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400" style={{}}>© 2026 Sartaj Henna Artist. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    System Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
