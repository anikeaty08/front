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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl text-white" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">Marbella Plumber</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                +34 951 12 70 41
                <iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Background" className="w-full h-full object-cover" src="https://marbellaplumber.com/wp-content/uploads/2021/07/3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/80 to-sky-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-medium tracking-wide uppercase text-sm">#Local English Speaking Plumbers</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    The plumbing service you can trust on Costa del Sol.
                </h1>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-medium text-white tracking-tight">5.0</span>
<div className="flex text-orange-500 gap-0.5">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-slate-300 text-sm">5.0 rating from verified reviews</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Request a Quote!</h3>
<p className="text-slate-300 text-sm mb-8">Book a free appointment with our plumbing experts. No fees, no pressure, just honest advice.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">First name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Last name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Location</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="e.g. San Pedro" type="text"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-slate-300">Choice Service</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Emergency Plumbing</option>
<option className="text-slate-900">Boiler Installation</option>
<option className="text-slate-900">Drain Cleaning</option>
</select>
<iconify-icon className="text-base absolute right-0 bottom-3 text-slate-300 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-slate-300">Write your message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="1"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full mt-4 transition-colors" type="button">
                        Get A Quote
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Emergency Plumbing</span>
<span className="text-orange-500">•</span>
<span>Boiler Installation</span>
<span className="text-orange-500">•</span>
<span>Water Filters &amp; Softeners</span>
<span className="text-orange-500">•</span>
<span>Toilet Repair</span>
<span className="text-orange-500">•</span>
<span>Drain Cleaning</span>
<span className="text-orange-500">•</span>
<span>Bathroom Renovation</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 tracking-tight mb-2">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Quality Work</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 tracking-tight mb-2">800<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Projects Done</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-medium text-sky-900 tracking-tight mb-2">10<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Years Experience</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-medium text-sky-900 tracking-tight mb-2">500<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Bathrooms Fitted</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-6">ABOUT OUR WORK</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sky-950 tracking-tight leading-tight mb-8">
                    Plumbing Actually is What we Do
                </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                    Marbella quality plumbing services at your doorstep. We cover the whole Andalusia. It can be difficult to find a reliable plumbing company that offers quality service and competitive prices. Luckily for you, we have all of this and more!
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-medium tracking-tight">Qualified team</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-medium tracking-tight">100% Quality Work</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-medium tracking-tight">Quick and Fast</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-medium tracking-tight">English Speaking</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-200/50 flex items-center justify-center p-8">
<img alt="Marbella Plumbing Pipes" className="w-full h-full object-contain mix-blend-multiply opacity-90" src="https://marbellaplumber.com/wp-content/uploads/2021/07/home-img-top.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    We take pride in providing the best customer service
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    We have built our reputation on solid workmanship, excellent customer service and competitive prices. Our plumbers always go above and beyond to provide you with top level service for your hard earned money!
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">01.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:fire-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Boiler Repair &amp; Installation</h3>
<p className="text-slate-500 leading-relaxed">Whether you need your water heater to be repaired or planning to get a new one, ask for expert advice.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">02.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Water Filters &amp; Softeners</h3>
<p className="text-slate-500 leading-relaxed">We are your local water softener and water filter installation company with years of experience serving Marbella.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">03.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Emergency Plumber</h3>
<p className="text-slate-500 leading-relaxed">We offer emergency plumbing services 24/365. Whether it's a burst pipe in the middle of your night or an overflowing toilet.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">04.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Toilet Repair &amp; Installation</h3>
<p className="text-slate-500 leading-relaxed">We offer a wide range of toilet repair services from changing the seat to fixing an overflowing or blocked tank.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">05.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:pipes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Drain Repair &amp; Installation</h3>
<p className="text-slate-500 leading-relaxed">Our trained and experienced staff can quickly and efficiently solve your drainage issues with a 100% satisfaction guarantee.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">06.</span>
<div className="mb-6 text-sky-700">
<iconify-icon className="text-4xl" icon="solar:water-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-sky-950 tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Bathroom &amp; Kitchen Plumbing</h3>
<p className="text-slate-500 leading-relaxed">Whether you need a complete bathroom renovated or just fix a small leak we are here to provide you with a solution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">TESTIMONIALS</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight">
                    Why trust us?
                </h2>
<p className="text-slate-500 mt-4 text-lg">See what our customers in the Costa del Sol are saying about our top-rated plumbing services.</p>
</div>
<div className="space-y-4">

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer mb-3">
<h3 className="font-medium text-sky-950 text-lg tracking-tight">Mark Jones</h3>
<div className="flex text-orange-500 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-slate-500 leading-relaxed">
                        We have had an awkwardly situated water heater replaced. The job was competitively priced, started and completed on time, Greg was efficient, clean, knowledgeable, polite and friendly. I would highly recommend this company.
                    </p>
</div>

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer mb-3">
<h3 className="font-medium text-sky-950 text-lg tracking-tight">Robert Brown</h3>
<div className="flex text-orange-500 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-slate-500 leading-relaxed">
                        The service Greg provides is first class. We had a gas leak in the apartment. Greg came out and quickly identified the source of the leak and rectified the problem. A fantastic service and one that I will continue to use.
                    </p>
</div>

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer mb-3">
<h3 className="font-medium text-sky-950 text-lg tracking-tight">Bjorn Ursin-Holm</h3>
<div className="flex text-orange-500 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-slate-500 leading-relaxed">
                        Made arrangement last night at 9pm, and they/Mr. Greg came 10:30 this morning and fixed ALL within 1 hour!! He was very efficient and pleasant. We would not at all hesitate to use his great service in the future.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center md:text-left">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">GALLERY</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    Our Latest Projects
                </h2>
<p className="text-lg text-slate-500 max-w-2xl">
                    Take a look at some of the recent plumbing, heating, and renovation projects we've successfully completed across Andalusia.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Bathroom Renovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://marbellaplumber.com/wp-content/uploads/2021/07/3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Marbella Area</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 leading-tight">Bathroom Renovation</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Details</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Drainage Repair" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://marbellaplumber.com/wp-content/uploads/2021/07/9.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Costa del Sol</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 leading-tight">Drainage Repair</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Details</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Water Heater Install" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://marbellaplumber.com/wp-content/uploads/2021/07/10.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Andalusia</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 leading-tight">Water Heater Installed</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">View Details</span>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="w-2.5 h-2.5 rounded-full bg-sky-900"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Serving the entire Costa del Sol region with reliable plumbing expertise</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale text-sky-950">
<div className="font-medium text-xl tracking-tight">San Pedro</div>
<div className="font-medium text-xl tracking-tight">Estepona</div>
<div className="font-medium text-xl tracking-tight">Fuengirola</div>
<div className="font-medium text-xl tracking-tight">Benalmadena</div>
<div className="font-medium text-xl tracking-tight">La Cala de Mijas</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-orange-500 p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl text-white" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">Marbella Plumber</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        The plumbing service you can trust on Costa del Sol. We speak English and have years of experience in water heater repair, bathroom installation, leaks, showers, taps and drains.
                    </p>
</div>

<div>
<h4 className="font-medium tracking-tight text-white mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Home</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> About Us</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Services</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Contact</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-medium tracking-tight text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            +34 951 12 70 41
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            info@marbellaplumber.com
                        </li>
</ul>
</div>

<div>
<h4 className="font-medium tracking-tight text-white mb-6">Service Areas</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Marbella<br/>
                        San Pedro<br/>
                        Estepona<br/>
                        Fuengirola
                    </p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2026 Marbella Plumber. All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-base" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
