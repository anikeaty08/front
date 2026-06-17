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
stone: {
50: '#FAFAF9',
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
800: '#292524',
900: '#1C1917',
950: '#0C0A09',
},
accent: {
DEFAULT: '#B45309', // Muted Clay/Bronze
light: '#D97706'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<div className="bg-stone-900 text-white text-[10px] sm:text-xs py-2 text-center tracking-widest uppercase font-medium">
        Premium Dental &amp; Aesthetic Care • Borivali West, Mumbai
    </div>

<nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex flex-col group" href="#">
<span className="font-serif text-xl tracking-tight text-stone-900 italic">The Bombay</span>
<span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors">Aesthetics</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wide text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Treatments</a>
<a className="hover:text-stone-900 transition-colors" href="#cases">Cases</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Visit</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-stone-900 hover:text-stone-500 transition-colors" href="tel:08879309273">
                    +91 88793 09273
                </a>
<a className="bg-stone-200 hover:bg-stone-900 hover:text-white text-stone-900 text-xs px-5 py-2.5 rounded-sm transition-all duration-300 font-medium tracking-wide uppercase" href="#book">
                    Book Visit
                </a>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20 overflow-hidden border-b border-stone-200">

<div className="absolute inset-0 opacity-30 grid-bg pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 pt-8 lg:pt-16">
<div className="inline-flex items-center gap-2 border border-stone-200 bg-white/50 px-3 py-1 rounded-full mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Accepting New Patients</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-light text-stone-900 tracking-tighter mb-8">
                        The intersection of <br/>
<span className="font-serif italic pr-2">art</span> &amp; dentistry.
                    </h1>
<p className="text-stone-500 text-lg font-light max-w-md leading-relaxed mb-10 border-l border-stone-300 pl-6">
                        Experience world-class dental and aesthetic care in a sanctuary of calm. Led by Dr. Anuj Gandhi, serving Borivali West for over a decade.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="btn-hover bg-stone-900 text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide uppercase inline-flex items-center gap-3" href="#book">
                            Start your journey
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="px-8 py-4 border border-stone-200 bg-white text-stone-900 hover:bg-stone-50 rounded-sm text-sm font-medium tracking-wide uppercase transition-colors" href="#services">
                            Explore Services
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0">
<div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
<img alt="Minimalist Dental Clinic" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 bg-stone-50 p-6 border-t border-r border-stone-200 max-w-[200px]">
<p className="font-serif text-3xl text-stone-900 italic">10+</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Years of Excellence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 md:order-1 relative">
<img alt="Dr Anuj Gandhi" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-stone-100 -z-10"></div>
<div className="absolute -top-6 -left-6 w-24 h-24 border border-stone-200 -z-10"></div>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="flex items-center gap-4">
<span className="h-px w-8 bg-stone-300"></span>
<span className="text-xs uppercase tracking-widest text-stone-500">The Doctor</span>
</div>
<h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight leading-tight">
                        "We don't just fix teeth.<br/>We curate <span className="font-serif italic">confidence</span>."
                    </h2>
<div className="space-y-4 text-stone-600 font-light leading-relaxed">
<p>
                            At <strong className="text-stone-900 font-medium">The Bombay Aesthetics</strong>, we believe dentistry should be indistinguishable from art. Every veneer, every implant, and every treatment is planned with mathematical precision and an artist's eye.
                        </p>
<p>
                            Dr. Anuj Gandhi brings a unique approach to Borivali West: strictly ethical, 100% sterile, and unapologetically premium. We are not a volume clinic; we are a destination for those who value quality.
                        </p>
</div>
<div className="pt-4 grid grid-cols-2 gap-8">
<div>
<span className="block text-2xl font-serif text-stone-900">2k+</span>
<span className="text-[10px] uppercase tracking-wider text-stone-400">Smiles Crafted</span>
</div>
<div>
<span className="block text-2xl font-serif text-stone-900">5.0</span>
<span className="text-[10px] uppercase tracking-wider text-stone-400">Google Rating</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-xs uppercase tracking-widest text-stone-500 border border-stone-200 px-3 py-1 rounded-full">Our Expertise</span>
<h2 className="mt-6 text-3xl md:text-4xl font-light text-stone-900 tracking-tight">Holistic Aesthetic Solutions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-white p-8 md:p-12 border border-stone-100 rounded-sm hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-stone-900 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="lucide:sparkles" data-strokeWidth="1"></span>
</div>
<h3 className="text-2xl font-serif italic text-stone-900 mb-2">Smile Makeovers</h3>
<p className="text-stone-500 font-light max-w-sm">Digital Smile Design (DSD), Ceramic Veneers, and full mouth rehabilitation. Visualize your smile before we touch a tooth.</p>
</div>
<div className="absolute top-0 right-0 w-64 h-full bg-stone-50/50 -skew-x-12 translate-x-32 group-hover:translate-x-20 transition-transform duration-700"></div>
</div>

<div className="md:row-span-2 bg-stone-900 text-white p-8 md:p-12 rounded-sm flex flex-col justify-between group">
<div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform">
<span className="iconify text-xl" data-icon="lucide:scan-face" data-strokeWidth="1"></span>
</div>
<h3 className="text-2xl font-serif italic mb-2">Face &amp; Skin</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed">Beyond teeth. We offer anti-aging treatments, fillers, and skin rejuvenation to frame your new smile perfectly.</p>
</div>
<ul className="space-y-3 mt-8 text-sm text-stone-300 font-light">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-white rounded-full"></span> Botox &amp; Fillers
                        </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-white rounded-full"></span> Chemical Peels
                        </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-white rounded-full"></span> Laser Toning
                        </li>
</ul>
</div>

<div className="bg-white p-8 border border-stone-100 rounded-sm hover:border-stone-300 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-2xl text-stone-400 group-hover:text-stone-900 transition-colors" data-icon="lucide:align-vertical-space-around" data-strokeWidth="1"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Orthodontics</h3>
<p className="text-sm text-stone-500 font-light">Invisalign &amp; Self-ligating braces.</p>
</div>

<div className="bg-white p-8 border border-stone-100 rounded-sm hover:border-stone-300 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-2xl text-stone-400 group-hover:text-stone-900 transition-colors" data-icon="lucide:anchor" data-strokeWidth="1"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Implants</h3>
<p className="text-sm text-stone-500 font-light">Titanium implants tailored for longevity.</p>
</div>

<div className="bg-white p-8 border border-stone-100 rounded-sm hover:border-stone-300 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-2xl text-stone-400 group-hover:text-stone-900 transition-colors" data-icon="lucide:scissors" data-strokeWidth="1"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hair Restoration</h3>
<p className="text-sm text-stone-500 font-light">PRP &amp; GFC therapies for growth.</p>
</div>

<div className="bg-white p-8 border border-stone-100 rounded-sm hover:border-stone-300 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-2xl text-stone-400 group-hover:text-stone-900 transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">General Care</h3>
<p className="text-sm text-stone-500 font-light">Root canals &amp; pain-free hygiene.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-light text-stone-900 tracking-tight">Patient Voices</h2>
<div className="flex gap-2">
<button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1"></span>
</button>
<button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1"></span>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto hide-scrollbar snap-x">

<div className="min-w-[350px] md:min-w-[450px] p-8 bg-stone-50 rounded-sm snap-center border border-transparent hover:border-stone-200 transition-all">
<div className="flex text-stone-400 mb-6 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-lg font-serif italic text-stone-800 mb-6 leading-relaxed">
                        "The most luxurious dental experience I've ever had. Dr. Anuj is an artist. My veneers look so natural, people can't tell I had work done."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-600">JS</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-900">Jhanvi Shah</p>
<p className="text-[10px] text-stone-500">Smile Makeover</p>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[450px] p-8 bg-stone-50 rounded-sm snap-center border border-transparent hover:border-stone-200 transition-all">
<div className="flex text-stone-400 mb-6 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-lg font-serif italic text-stone-800 mb-6 leading-relaxed">
                        "Hygienic, professional, and zero waiting time. They respect your time. I went for a root canal and didn't feel a thing."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-600">RP</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-900">Rohan Patil</p>
<p className="text-[10px] text-stone-500">General Dentistry</p>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[450px] p-8 bg-stone-50 rounded-sm snap-center border border-transparent hover:border-stone-200 transition-all">
<div className="flex text-stone-400 mb-6 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-lg font-serif italic text-stone-800 mb-6 leading-relaxed">
                        "I was skeptical about hair PRP, but the results after 3 sessions are visible. The clinic feels more like a spa than a hospital."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-600">AK</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-900">Amit Kapoor</p>
<p className="text-[10px] text-stone-500">Hair Aesthetics</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200" id="book">
<div className="grid lg:grid-cols-2">

<div className="bg-stone-900 text-stone-50 p-12 lg:p-24 flex flex-col justify-center">
<span className="text-xs uppercase tracking-widest text-stone-400 mb-4">Appointments</span>
<h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Let's design your <br/><span className="font-serif italic text-white">best self.</span></h2>
<p className="text-stone-400 font-light mb-12 max-w-md">
                    Schedule a consultation to discuss your dental or aesthetic goals. We provide honest, transparent advice.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1"></span>
</div>
<div>
<p className="font-medium text-white mb-1">Borivali West, Mumbai</p>
<p className="text-sm text-stone-400">1st Floor, Icon, Bellevue, Ramdas Sutrale Marg.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1"></span>
</div>
<div>
<p className="font-medium text-white mb-1">WhatsApp Us</p>
<a className="text-sm text-stone-400 hover:text-white underline decoration-stone-700 underline-offset-4" href="https://wa.me/918879309273">+91 88793 09273</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
<form className="space-y-8" onsubmit="event.preventDefault(); alert('Request sent!');">
<div className="space-y-6">

<div className="border-b border-stone-200 focus-within:border-stone-900 transition-colors pb-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Name</label>
<input className="w-full text-lg outline-none bg-transparent placeholder-stone-300 text-stone-900" placeholder="Enter your full name" required="" type="text"/>
</div>

<div className="border-b border-stone-200 focus-within:border-stone-900 transition-colors pb-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Phone Number</label>
<input className="w-full text-lg outline-none bg-transparent placeholder-stone-300 text-stone-900" placeholder="+91" required="" type="tel"/>
</div>

<div className="border-b border-stone-200 focus-within:border-stone-900 transition-colors pb-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Email</label>
<input className="w-full text-lg outline-none bg-transparent placeholder-stone-300 text-stone-900" placeholder="email@address.com" required="" type="email"/>
</div>

<div className="border-b border-stone-200 focus-within:border-stone-900 transition-colors pb-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Preferred Date &amp; Time</label>
<input className="w-full text-lg outline-none bg-transparent text-stone-900 placeholder-stone-300" required="" type="datetime-local"/>
</div>

<div className="border-b border-stone-200 focus-within:border-stone-900 transition-colors pb-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Service Required</label>
<select className="w-full text-lg outline-none bg-transparent text-stone-900 appearance-none cursor-pointer">
<option className="text-stone-300" disabled="" selected="" value="">Select a treatment</option>
<option>Dental Consultation</option>
<option>Smile Makeover</option>
<option>Implants</option>
<option>Orthodontics/Braces</option>
<option>Skin &amp; Aesthetics</option>
<option>Hair Restoration</option>
</select>
</div>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-sm hover:bg-stone-800 transition-all flex justify-center items-center gap-2 group" type="submit">
<span className="text-sm uppercase tracking-widest font-medium">Request Appointment</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="font-serif text-2xl text-stone-900 italic block mb-6" href="#">The Bombay<br/>Aesthetics</a>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors text-stone-500" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5"></span>
</a>
<a className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors text-stone-500" href="#">
<span className="iconify" data-icon="lucide:facebook" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
<div className="md:col-span-1">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Sitemap</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#services">Treatments</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#cases">Case Studies</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Visit Us</h4>
<div className="grid sm:grid-cols-2 gap-8">
<address className="not-italic text-sm text-stone-500 font-light leading-relaxed">
                            1st Floor, Icon, Bellevue,<br/>
                            Ramdas Sutrale Marg, Off Chandavarkar Road,<br/>
                            Opp. NM Medical, Borivali West,<br/>
                            Mumbai – 400092
                        </address>
<div className="text-sm text-stone-500 font-light leading-relaxed">
<p className="mb-2"><span className="font-medium text-stone-900">Mon - Sat:</span><br/>10:00 AM - 2:00 PM<br/>5:00 PM - 9:00 PM</p>
<p><span className="font-medium text-stone-900">Sun:</span> By Appointment</p>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase tracking-widest text-stone-400">© 2024 The Bombay Aesthetics.</p>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-stone-400">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group" href="https://wa.me/918879309273" target="_blank">
<span className="iconify text-2xl" data-icon="lucide:message-circle" data-strokeWidth="1.5"></span>
<span className="absolute right-14 bg-white text-stone-900 text-xs px-3 py-1.5 rounded-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mr-2 font-medium">Chat with us</span>
</a>

<div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
<div className="bg-stone-900/95 backdrop-blur-sm text-white p-2 rounded-full shadow-2xl flex items-center justify-between pl-6 pr-2">
<span className="text-xs font-medium">Book your visit</span>
<div className="flex gap-2">
<a className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center" href="tel:08879309273">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
</a>
<a className="h-10 px-4 bg-white text-stone-900 rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-wide" href="#book">
                    Book
                </a>
</div>
</div>
</div>

    </>
  );
}
