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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-blue-600 w-8 h-8" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-2xl font-medium tracking-tight text-zinc-900">WelfareVet</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Home</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">About Us</a>

<div className="relative group">
<button className="flex items-center gap-1.5 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-2">
                        Our Services
                        <i className="w-4 h-4 text-zinc-400 transition-transform duration-200 group-hover:-rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="bg-white rounded-2xl shadow-xl ring-1 ring-zinc-900/5 p-2 flex flex-col gap-1 relative">

<div className="absolute -top-4 left-0 right-0 h-4 bg-transparent"></div>
<a className="flex items-center justify-between w-full px-4 py-3 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">
                                Preventive Care
                                <i className="w-4 h-4 opacity-40" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>

<div className="relative group/sub">
<button className="flex items-center justify-between w-full px-4 py-3 text-base font-normal text-zinc-600 group-hover/sub:text-zinc-900 group-hover/sub:bg-zinc-50 rounded-xl transition-colors">
                                    Animal Hospital
                                    <i className="w-4 h-4 opacity-40" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<div className="absolute top-0 left-full w-64 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
<div className="bg-white rounded-2xl shadow-xl ring-1 ring-zinc-900/5 p-2 flex flex-col gap-1 relative">

<div className="absolute top-0 -left-2 bottom-0 w-2 bg-transparent"></div>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Pet Emergency</a>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Animal Clinic Visits</a>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Pet Ultrasound</a>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Pet Surgery</a>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Pain-Relief</a>
<a className="block px-4 py-2.5 text-base font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">Spay and Neuter</a>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Prices</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Contact Us</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-base text-zinc-500 font-medium mr-4 border-r border-zinc-200 pr-4">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
<span>EN</span>
</div>
<a className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-base font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all" href="#">
                    Book Visit
                </a>
<button aria-label="Menu" className="md:hidden p-2 -mr-2 text-zinc-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-base font-medium mb-6 border border-blue-100/50">
<span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6">
                    Advanced clinical care for your companions.
                </h1>
<p className="text-xl md:text-2xl text-zinc-500 mb-10 leading-relaxed font-normal">
                    Transforming veterinary medicine with modern diagnostics, compassionate expertise, and a stress-free environment for pets and professionals alike.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-14 items-center justify-center rounded-full bg-zinc-900 px-8 text-lg font-medium text-white shadow-sm hover:bg-zinc-800 transition-all" href="#">
                        Schedule Appointment
                    </a>
<a className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition-all" href="#services">
                        Explore Services
                    </a>
</div>
</div>
<div className="relative lg:ml-auto">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 bg-zinc-100">
<img alt="Veterinarian examining a dog" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl ring-1 ring-zinc-900/5 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<i className="w-6 h-6" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-zinc-500">Google Rating</p>
<p className="text-2xl font-medium tracking-tight text-zinc-900 flex items-center gap-1">
                                4.9 <i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200/50 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Comprehensive Clinical Services</h2>
<p className="text-xl text-zinc-500 font-normal">From routine preventive care to advanced surgical procedures, our facility is equipped with state-of-the-art technology to ensure precise diagnostics and effective treatments.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl ring-1 ring-zinc-200 hover:ring-zinc-300 transition-shadow hover:shadow-md group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Preventive Care</h3>
<p className="text-lg text-zinc-500 mb-6 font-normal">Vaccinations, parasite control, and wellness exams designed to identify health trends before they become critical issues.</p>
<a className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700" href="#">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>

<div className="bg-white p-8 rounded-3xl ring-1 ring-zinc-200 hover:ring-zinc-300 transition-shadow hover:shadow-md group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Advanced Diagnostics</h3>
<p className="text-lg text-zinc-500 mb-6 font-normal">In-house blood analysis, digital radiography, and ultrasound imaging for rapid, accurate clinical assessments.</p>
<a className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-700" href="#">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>

<div className="bg-white p-8 rounded-3xl ring-1 ring-zinc-200 hover:ring-zinc-300 transition-shadow hover:shadow-md group">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="heart-pulse" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Surgical Procedures</h3>
<p className="text-lg text-zinc-500 mb-6 font-normal">Routine spay/neuter and complex soft tissue surgeries performed with advanced anesthetic monitoring and pain management.</p>
<a className="inline-flex items-center text-base font-medium text-rose-600 hover:text-rose-700" href="#">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<i className="w-8 h-8 text-pink-600" data-lucide="instagram" strokeWidth="1.5"></i>
                        Life at the Clinic
                    </h2>
<p className="text-xl text-zinc-500 max-w-xl font-normal">Get a behind-the-scenes look at our daily operations, patient success stories, and expert veterinary tips.</p>
</div>
<a className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-100 px-6 text-base font-medium text-zinc-900 hover:bg-zinc-200 transition-all shrink-0" href="#">
                    Follow @WelfareVet
                </a>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">

<a className="relative w-[280px] shrink-0 snap-center aspect-[9/16] rounded-3xl overflow-hidden group bg-zinc-900 ring-1 ring-zinc-200 cursor-pointer block" href="#">
<img alt="Puppy checkup" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<p className="text-lg font-medium tracking-tight mb-2 line-clamp-2">First checkup for this little golden retriever! 🐾</p>
<div className="flex items-center gap-4 text-base opacity-80 font-normal">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i> 1.2k</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> 48</span>
</div>
</div>
</a>

<a className="relative w-[280px] shrink-0 snap-center aspect-[9/16] rounded-3xl overflow-hidden group bg-zinc-900 ring-1 ring-zinc-200 cursor-pointer block" href="#">
<img alt="Cat examination" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<p className="text-lg font-medium tracking-tight mb-2 line-clamp-2">Explaining feline dental health procedures.</p>
<div className="flex items-center gap-4 text-base opacity-80 font-normal">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i> 856</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> 24</span>
</div>
</div>
</a>

<a className="relative w-[280px] shrink-0 snap-center aspect-[9/16] rounded-3xl overflow-hidden group bg-zinc-900 ring-1 ring-zinc-200 cursor-pointer block" href="#">
<img alt="Microscope view" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<p className="text-lg font-medium tracking-tight mb-2 line-clamp-2">Behind the scenes in our diagnostics lab 🔬</p>
<div className="flex items-center gap-4 text-base opacity-80 font-normal">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i> 2.1k</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> 112</span>
</div>
</div>
</a>

<a className="relative w-[280px] shrink-0 snap-center aspect-[9/16] rounded-3xl overflow-hidden group bg-zinc-900 ring-1 ring-zinc-200 cursor-pointer block md:hidden lg:block" href="#">
<img alt="Happy dog leaving clinic" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<p className="text-lg font-medium tracking-tight mb-2 line-clamp-2">Post-surgery recovery and tail wags! ✨</p>
<div className="flex items-center gap-4 text-base opacity-80 font-normal">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i> 3.4k</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> 89</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-zinc-900 py-6 overflow-hidden relative border-t border-zinc-800">
<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
<div className="flex items-center space-x-12 animate-marquee whitespace-nowrap px-6 md:justify-center overflow-x-auto no-scrollbar">

<div className="inline-flex items-center gap-4">
<div className="flex gap-1 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 font-medium tracking-tight">"Exceptional care. The vets are incredibly knowledgeable and compassionate."</p>
<span className="text-base text-zinc-500 font-normal">— Sarah M.</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden md:block"></div>

<div className="inline-flex items-center gap-4">
<div className="flex gap-1 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 font-medium tracking-tight">"State-of-the-art facility. Solved a complex issue with my dog quickly."</p>
<span className="text-base text-zinc-500 font-normal">— James L.</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden lg:block"></div>

<div className="hidden lg:inline-flex items-center gap-4">
<div className="flex gap-1 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 font-medium tracking-tight">"Professional, clean, and highly efficient clinic."</p>
<span className="text-base text-zinc-500 font-normal">— Elena R.</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-6">
<i className="text-zinc-900 w-8 h-8" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-2xl font-medium tracking-tight text-zinc-900">WelfareVet</span>
</div>
<p className="text-lg text-zinc-500 mb-8 max-w-sm font-normal">
                        Setting the standard for modern veterinary medicine in Abu Dhabi. Expert care, advanced diagnostics, and compassionate service.
                    </p>
<div className="flex items-center gap-4">
<a aria-label="Facebook" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="lg:col-span-2 lg:col-start-6 text-base">
<h4 className="font-medium text-zinc-900 mb-6 tracking-tight">Clinic</h4>
<ul className="space-y-4 font-normal">
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Our Team</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div className="lg:col-span-2 text-base">
<h4 className="font-medium text-zinc-900 mb-6 tracking-tight">Services</h4>
<ul className="space-y-4 font-normal">
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Preventive Care</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Diagnostics</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Surgery</a></li>
<li><a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Emergency</a></li>
</ul>
</div>
<div className="lg:col-span-3 text-base">
<h4 className="font-medium text-zinc-900 mb-6 tracking-tight">Contact Information</h4>
<ul className="space-y-4 text-zinc-500 font-normal">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Muroor Rd, Al Nahyan, Zone 1, Abu Dhabi, UAE</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="hover:text-zinc-900 transition-colors" href="tel:+97126225506">+971 2 622 5506</a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-zinc-900 transition-colors" href="mailto:contact@wvetclinic.com">contact@wvetclinic.com</a>
</li>
<li className="flex items-start gap-3 pt-2">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="clock" strokeWidth="1.5"></i>
<span>Mon – Fri <br/> 9:00 AM – 10:00 PM</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100 gap-4">
<p className="text-base text-zinc-400 font-normal">
                    © 2024 Welfare Veterinary Clinic. All rights reserved.
                </p>
<div className="flex gap-6 text-base text-zinc-400 font-normal">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
<a aria-label="Scroll to top" className="w-12 h-12 bg-white rounded-full shadow-lg ring-1 ring-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all" href="#top">
<i className="w-5 h-5" data-lucide="arrow-up" strokeWidth="1.5"></i>
</a>
<a aria-label="Contact on WhatsApp" className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-all hover:scale-105" href="#">
<svg className="w-7 h-7 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
</a>
</div>


    </>
  );
}
