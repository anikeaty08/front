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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-lg shadow-sm">
<span className="font-medium text-xs tracking-tighter">CHTC</span>
</div>
<span className="font-medium text-zinc-900 tracking-tight text-sm group-hover:text-zinc-600 transition-colors">Chicago HTC</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#procedures">Procedures</a>
<a className="hover:text-zinc-900 transition-colors" href="#results">Results</a>
<a className="hover:text-zinc-900 transition-colors" href="#financing">Financing</a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all tracking-wide shadow-sm hover:shadow-md" href="#contact">
<span className="">Book Consultation</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white opacity-70"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 mb-8 animate-fade-in-up shadow-sm">
<iconify-icon className="text-zinc-900" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">Premier Hair Restoration in Chicago</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6">
                Restore your hair.<br/>
<span className="text-zinc-400">Restore your confidence.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-2xl mr-auto mb-10 ml-auto">Specialized Micro-FUE &amp; FUT hair transplant solutions tailored to your unique hairline. Experience natural-looking results with one of the top 5 hair surgeons in the nation.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50" href="#contact">
                    Get Free Consultation
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-full font-medium text-sm hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#results">
                    View Gallery
                    <iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
</a>
</div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">6,000 successful procedures</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Board Certified</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Minimally Invasive</span>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-200 group cursor-pointer">

<img alt="Chicago HTC Clinic Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/20 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/30 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-sm pl-1">
<iconify-icon icon="solar:play-linear" strokeWidth="2.5" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col items-start gap-2">
<div className="bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
<span className="text-white text-[10px] font-semibold tracking-wider uppercase">Facility Tour</span>
</div>
<p className="md:text-2xl text-xl font-medium text-white tracking-tight drop-shadow-sm">See why patients fly from all over the world to work with us</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100" id="procedures">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-4">World-Class Procedures</h2>
<p className="text-zinc-500 font-light max-w-xl">We utilize the latest technology to ensure maximum density and natural direction of growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-900" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">FUE Hair Transplant</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Follicular Unit Extraction allows for individual follicle harvesting without a linear scar. Ideal for shorter hairstyles and faster recovery.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-900" icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">FUT Strip Method</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Follicular Unit Transplantation maximizes graft yield in a single session. Perfect for patients requiring extensive coverage.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-900" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">PRP Therapy</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Non-surgical Platelet Rich Plasma therapy stimulates hair growth and thickens existing hair using your body's own growth factors.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-900" icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Beard Restoration</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Fill in patchy areas or create a full beard from scratch using the same advanced FUE techniques used for the scalp.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-900" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Eyebrow Transplant</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Permanently restore thinning eyebrows due to over-plucking or genetics with precise, natural-looking placement.
                    </p>
</div>

<div className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 transition-all flex flex-col justify-center">
<h3 className="text-lg font-medium text-white mb-2">Not sure which is right?</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Schedule a free consultation to discuss your goals and get a personalized plan.
                    </p>
<a className="inline-flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="results">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-4">Real Patient Results</h2>
<p className="text-zinc-500 font-light max-w-xl">See the transformative power of our hair restoration procedures.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Swipe to see more</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="space-y-4">
<div className="relative grid grid-cols-2 gap-2 h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-zinc-100">
<div className="relative h-full bg-zinc-100 group overflow-hidden">

<img alt="Before Hairline" className="filter group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3d6f044-18cf-4748-bac0-2a2c67090cc3_800w.png"/>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-zinc-900 shadow-sm">Before</div>
</div>
<div className="relative h-full bg-zinc-100 group overflow-hidden">

<img alt="After Result" className="group-hover:scale-105 transition-transform duration-700 object-top w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7974f62b-91ae-4c7b-84bf-f348efabbf64_800w.png"/>
<div className="absolute bottom-3 left-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-white shadow-sm">After</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="relative grid grid-cols-2 gap-2 h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-zinc-100">
<div className="relative h-full bg-zinc-100 group overflow-hidden">
<img alt="Before" className="filter group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3abf2477-857b-45e7-b750-dcd619d699ee_800w.png"/>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-zinc-900 shadow-sm">Before</div>
</div>
<div className="relative h-full bg-zinc-100 group overflow-hidden">
<img alt="After" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f719c5a-edf8-4744-afb7-ecdd5c17c3c6_800w.png"/>
<div className="absolute bottom-3 left-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-white shadow-sm">After</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-zinc-900 tracking-tight mb-16">Stories from our patients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col justify-between hover:border-zinc-200 transition-colors">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-600 mb-6">I went to a consultation with another Chicago hair transplant doctor.. I was quoted triple the price of Dr. Panine. I am so glad I decided to go with Dr. Panine. The staff is super friendly and personable.. Dr. Panine loves what he does.. My results are amazing and I am a female patient, so is a bit more complex. Highly recommend.</p>
</div>
<div className="flex gap-3 border-zinc-200 border-t pt-6 gap-x-3 gap-y-3 items-center">
<div className="">
<p className="text-sm font-medium text-zinc-900">Nicole Krueger</p>
</div>
</div>
</div>

<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col justify-between hover:border-zinc-200 transition-colors">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-600 mb-6">Had a hair transplant for my crown and I’m very happy with the results. The coverage looks natural and has filled in well. I’m definitely wearing hats a lot less now. Would recommend.</p>
</div>
<div className="flex items-center gap-3 border-t border-zinc-200 pt-6">
<div className="">
<p className="text-sm font-medium text-zinc-900">Daniel S</p>
</div>
</div>
</div>

<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col justify-between hover:border-zinc-200 transition-colors">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-600 mb-6">Dr. Panine did an outstanding job with my surgery, and I couldn’t be happier with the experience. His keen attention to detail during the surgery was evident throughout the entire process and gave me a lot of confidence. I’m only four weeks out and I’m already very pleased with how things are progressing so early on. The results so far look clean, natural, and exactly what I was hoping for. Communication with the front office was also excellent—Stuart was awesome and incredibly responsive every step of the way. I highly recommend Dr. Panine and his team to anyone considering this surgery.</p>
</div>
<div className="flex gap-3 border-zinc-200 border-t pt-6 gap-x-3 gap-y-3 items-center">
<div className="">
<p className="text-sm font-medium text-zinc-900">John Randa</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-900 pt-24 pb-24 relative" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Start Your Journey Today</h2>
<p className="text-zinc-400 font-light text-lg">Schedule your complimentary consultation.</p>
</div>
<form className="bg-zinc-800/50 backdrop-blur border border-zinc-700 p-8 md:p-10 rounded-3xl shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">First Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Last Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Phone</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">How can we help?</label>
<textarea className="focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600 resize-none text-sm bg-zinc-900/50 w-full h-32 border-zinc-700 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="Tell us about your hair loss concerns..."></textarea>
</div>
<button className="w-full bg-white text-zinc-900 font-medium py-3.5 rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/10" type="button">
                    Request Consultation
                    <iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
<div className="mt-12 text-center">
<p className="text-zinc-500 text-sm">Or call us directly at</p>
<a className="hover:text-zinc-300 transition-colors text-xl font-medium text-white" href="tel:+13128888888">312-888-2385</a>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-zinc-900 text-white w-6 h-6 flex items-center justify-center rounded-md">
<span className="font-medium text-[10px] tracking-tighter">CHTC</span>
</div>
<span className="text-sm font-medium text-zinc-900">Chicago Hair Transplant Clinic</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
<div className="text-xs text-zinc-400">
                © 2024 Chicago HTC. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
