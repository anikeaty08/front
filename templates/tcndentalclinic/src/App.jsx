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
      

<nav className="absolute w-full z-50 pt-6">
<div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="TCN Dental Care Logo" className="transition-transform duration-300 group-hover:scale-105 w-10 h-10 object-contain" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23000'/%3E%3Cpath d='M50 60C45 60 42 84 35 84C24 84 18 63 18 43C18 30 24 26 30 26C38 26 44 30 48 30C43 28 36 24 33 20C44 16 56 14 66 18C76 22 82 32 82 43C82 63 76 84 65 84C58 84 55 60 50 60Z' fill='%23fff'/%3E%3C/svg%3E"/>
<div className="flex flex-col justify-center">
<span className="font-normal tracking-tight text-xl leading-none text-[#1E293B]">TCN Dental</span>
</div>
</a>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hidden md:inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full border text-[#1E293B] text-lg font-light hover:bg-[#1E293B] transition-all border-gray-300 hover:text-white" href="tel:7185238400">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                    +1 718 523 8400
                </a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full border text-[#1E293B] text-lg font-light hover:bg-[#1E293B] transition-all border-gray-300 hover:text-white" href="#location">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="min-h-[90vh] flex overflow-hidden pt-24 pb-20 relative items-center">

<div className="absolute top-40 left-32 opacity-50 text-gray-400"><iconify-icon icon="solar:add-linear" width="20"></iconify-icon></div>
<div className="absolute bottom-40 left-1/4 opacity-50 text-gray-400"><iconify-icon icon="solar:add-linear" width="24"></iconify-icon></div>
<div className="absolute top-1/2 right-[45%] opacity-50 z-20 text-gray-400"><iconify-icon icon="solar:add-linear" width="20"></iconify-icon></div>

<div className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2 z-0 opacity-20 md:opacity-100">
<div className="md:via-transparent z-10 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Smiling Patient" className="w-full h-full object-cover object-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90a08c51-6e16-4a8a-9d3d-4ec529d48f71_1600w.png" style={{maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)'}}/>
</div>
<div className="z-10 w-full max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-[#2B7A5C]"></div>
<span className="text-sm font-normal text-[#2B7A5C] tracking-widest uppercase">Dental Care</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-[#1E293B] leading-[1.05] mb-6">
                    Modern <iconify-icon className="inline-block w-12 h-12 md:w-16 md:h-16 text-[#2B7A5C] -mb-2 md:-mb-4" icon="lucide:tooth"></iconify-icon><br/>
                    Dental Care
                </h1>
<p className="text-xl max-w-md mb-10 font-light leading-relaxed text-gray-600">
                    A smooth and hassle-free dental care experience for a healthy and confident smile in Queens, NY.
                </p>
<a className="inline-flex items-center justify-center gap-3 hover:bg-[#1a252a] transition-colors text-lg font-light bg-[#24333B] w-fit h-14 rounded-full pr-8 pl-8 text-white" href="#booking">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#FDFBF7] pt-24 pb-24">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
<div>
<p className="text-base text-gray-500 mb-4 font-light">001 — Patient Benefits</p>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#1E293B] max-w-md leading-tight mb-4">
                        Accessible Dental Care for Your Family
                    </h2>
<p className="text-lg font-light max-w-md text-gray-600">
                        Unlock optimal dental wellness with our comprehensive services and flexible options.
                    </p>
</div>
<div className="flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] overflow-hidden bg-gray-200"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] overflow-hidden bg-gray-200"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] overflow-hidden bg-gray-200"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] flex items-center justify-center bg-white text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#24333B] text-base font-light hover:bg-[#1a252a] transition-colors text-white" href="tel:7185238400">
                        Call Us <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#EEF7F4] rounded-[2rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
<iconify-icon className="absolute top-10 right-10 text-[#1E293B]" icon="solar:stars-linear" width="32"></iconify-icon>
<div className="text-[5rem] font-normal tracking-tight text-[#1E293B] leading-none mb-8">All</div>
<p className="text-lg text-[#1E293B]/80 font-light max-w-sm">
<span className="font-normal text-[#1E293B]">Most Insurances Accepted:</span> We work with a wide range of providers to ensure you get the oral exams, cleanings, and x-rays you need.
                    </p>
</div>

<div className="bg-[#24333B] rounded-[2rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
<iconify-icon className="absolute top-10 right-10 text-white" icon="solar:stars-linear" width="32"></iconify-icon>
<div className="text-[4rem] font-normal tracking-tight leading-none mb-8 text-white">Implants</div>
<p className="text-lg font-light max-w-sm text-white/80">
<span className="font-normal text-white">On-Staff Specialist:</span> Benefit from highly competitive pricing on dental implants and oral surgery directly in our Queens office.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F2F7F5] pt-24 pb-24">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between mb-16 gap-8">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#1E293B] leading-tight mb-4">
                        A Healthy Smile Starts Here
                    </h2>
<p className="text-lg font-light text-gray-600">
                        Comprehensive treatments designed to enhance your smile and function.
                    </p>
</div>
<div className="lg:w-1/2 flex items-end">
<div className="flex items-center gap-4 backdrop-blur-sm p-4 rounded-2xl border bg-white/50 border-white/60">
<div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 border-gray-300 bg-white">
<iconify-icon className="text-gray-500" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<p className="text-base font-light text-gray-600">Expert Dental Care and Cleaning Procedures for a Brighter, Healthier Smile and Lasting Confidence.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
<img alt="Teeth Whitening" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-[#1E293B] mb-2">Cosmetic Dentistry</h3>
<p className="text-lg text-gray-500 font-light">Enhance your smile with professional whitening and aesthetics.</p>
</div>

<div className="">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
<img alt="Dental cleaning and oral health" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-[#1E293B] mb-2">Revitalized Cleaning</h3>
<p className="text-lg font-light text-gray-500">A simple way to maintain oral health and enhance your smile.</p>
</div>

<div className="">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
<img alt="Implants" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-[#1E293B] mb-2">Dental Implants</h3>
<p className="text-lg text-gray-500 font-light">To replace and complete the function seamlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-32 rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-8px_30px_rgba(0,0,0,0.02)] bg-white">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-8 mb-16 gap-x-8 gap-y-8 justify-between">
<div className="">
<p className="text-base text-gray-500 mb-4 font-light">Professional Dentist</p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#1E293B] max-w-md leading-tight">
                        Professional And Reliable Care
                    </h2>
</div>
<div className="lg:text-right flex flex-col justify-end">
<p className="text-lg text-gray-500 font-light max-w-xs ml-auto mb-6">
                        Led by Dr. Edward Shalomov, NYU Honors Grad, ensuring a comfortable visit every time.
                    </p>
<a className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#24333B] text-base font-light hover:bg-[#1a252a] transition-colors ml-auto shadow-sm text-white" href="#booking">
                        Book your appointment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-wrap justify-center gap-6 md:gap-8 py-10">
<div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border shadow-sm ring-4 border-black/5 bg-gray-50 ring-white">
<img alt="Doctor" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9b62e44-fd61-44f1-bfba-4acd9d9a9303_800w.png"/>
</div>
<div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border shadow-sm ring-4 border-black/5 bg-gray-50 ring-white">
<img alt="Dental Professional in Scrubs" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48731f84-8326-49de-9065-1c6135923102_320w.png"/>
</div>
<div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border shadow-sm ring-4 border-black/5 bg-gray-50 ring-white">
<img alt="Doctor" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf413581-4b41-42ad-a0f1-ba4429468b81_320w.png"/>
</div>
<div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border shadow-sm ring-4 border-black/5 bg-gray-50 ring-white">
<img alt="Dental Professional" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdb3b6d1-64e9-49e9-99ec-897cef60e82d_800w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7] border-t border-gray-100" id="booking">
<div className="max-w-[90rem] mx-auto px-6">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#1E293B] mb-4">
                        Request an Appointment
                    </h2>
<p className="text-lg text-gray-500 font-light">
                        Fill out the form below and our team will get back to you to confirm your visit.
                    </p>
</div>
<form className="p-8 md:p-12 rounded-[2rem] border shadow-sm space-y-6 bg-white border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Full Name</label>
<input className="w-full border rounded-xl px-4 py-3 text-base text-[#1E293B] font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all border-gray-200 bg-white" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Phone Number</label>
<input className="w-full border rounded-xl px-4 py-3 text-base text-[#1E293B] font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all border-gray-200 bg-white" placeholder="(718) 523-8400" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Email Address</label>
<input className="w-full border rounded-xl px-4 py-3 text-base text-[#1E293B] font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all border-gray-200 bg-white" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Preferred Date</label>
<input className="w-full border rounded-xl px-4 py-3 text-base text-[#1E293B] font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all border-gray-200 bg-white text-gray-600" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none border rounded-xl px-4 py-3 text-base font-light focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all cursor-pointer border-gray-200 text-gray-600 bg-white">
<option disabled="" selected="" value="">Select a service</option>
<option value="cleaning">General Cleaning &amp; Exam</option>
<option value="implants">Dental Implants</option>
<option value="cosmetic">Cosmetic Dentistry</option>
<option value="other">Other / Not Sure</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-normal text-gray-700">Additional Notes</label>
<textarea className="w-full border rounded-xl px-4 py-3 text-base text-[#1E293B] font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7A5C]/20 focus:border-[#2B7A5C] transition-all resize-none border-gray-200 bg-white" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-[#24333B] text-lg font-light hover:bg-[#1a252a] transition-colors mt-4 text-white" type="button">
                        Request Appointment
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#FDFBF7] to-white pt-24 pb-24" id="location">
<div className="max-w-[90rem] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 py-12 px-6 rounded-[2rem] shadow-sm border bg-white border-gray-100">
<div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#24333B] hover:bg-[#1a252a] transition-colors text-sm font-normal mb-6 shadow-sm cursor-pointer text-white">
                    Get In Touch
                </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#1E293B] mb-4">
                    Visit Us Today
                </h2>
<p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
                    We'd love to see you. Walk-ins welcome or book ahead.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

<div className="flex flex-col gap-6">

<div className="flex flex-row cursor-pointer hover:shadow-lg transition-all duration-300 group border rounded-[2rem] p-6 sm:p-8 shadow-sm items-center gap-6 flex-1 hover:border-gray-200 bg-white border-gray-100">
<div className="w-14 h-14 rounded-full bg-[#24333B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-normal text-[#24333B]/70 tracking-widest uppercase mb-1">Phone</h3>
<p className="text-lg text-[#1E293B] font-normal leading-relaxed">
                                (718) 523-8400
                            </p>
</div>
</div>

<div className="flex flex-row cursor-pointer hover:shadow-lg transition-all duration-300 group border rounded-[2rem] p-6 sm:p-8 shadow-sm items-center gap-6 flex-1 hover:border-gray-200 bg-white border-gray-100">
<div className="w-14 h-14 rounded-full bg-[#24333B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-normal text-[#24333B]/70 tracking-widest uppercase mb-1">Email</h3>
<p className="text-lg text-[#1E293B] font-normal leading-relaxed">
                                info@tcndentalcare.com
                            </p>
</div>
</div>

<div className="flex flex-row cursor-pointer hover:shadow-lg transition-all duration-300 group border rounded-[2rem] p-6 sm:p-8 shadow-sm items-center gap-6 flex-1 hover:border-gray-200 bg-white border-gray-100">
<div className="w-14 h-14 rounded-full bg-[#24333B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-normal text-[#24333B]/70 tracking-widest uppercase mb-1">Hours</h3>
<p className="text-lg text-[#1E293B] font-normal leading-relaxed">
                                Mon-Fri: 9AM – 6PM<br/>Sat: 9AM – 2PM
                            </p>
</div>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden min-h-[400px] h-full shadow-[0_0_40px_rgba(0,0,0,0.03)] border bg-gray-100 border-gray-50/50">
<a className="absolute top-6 left-6 px-4 py-2.5 rounded-xl text-[#0057FF] text-sm font-normal shadow-sm flex items-center gap-2 transition-colors z-20 bg-white hover:bg-gray-50" href="https://maps.google.com/?q=196-55+Hillside+Ave,+Hollis,+NY+11423" target="_blank">
                        Open in Maps <iconify-icon icon="solar:map-arrow-square-linear" width="18"></iconify-icon>
</a>
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7042898725835!2d-73.766795!3d40.713506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261a8c9fb609b%3A0xc68297b5e4c6c06a!2s196-55%20Hillside%20Ave.%2C%20Hollis%2C%20NY%2011423!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-white border-gray-100 border-t pt-8 pb-6">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col md:flex-row mb-8 gap-x-6 gap-y-6 items-start justify-between">

<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4" href="#">
<img alt="TCN Dental Care Logo" className="w-6 h-6 object-contain" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23000'/%3E%3Cpath d='M50 60C45 60 42 84 35 84C24 84 18 63 18 43C18 30 24 26 30 26C38 26 44 30 48 30C43 28 36 24 33 20C44 16 56 14 66 18C76 22 82 32 82 43C82 63 76 84 65 84C58 84 55 60 50 60Z' fill='%23fff'/%3E%3C/svg%3E"/>
<span className="font-normal tracking-tight text-lg text-[#1E293B]">TCN Dental</span>
</a>
<p className="leading-relaxed text-xs font-light text-gray-500 whitespace-nowrap">We provide comprehensive dental care for the whole family in a welcoming and professional environment</p>
</div>

<div className="flex gap-16">
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-4">
<p className="text-xs text-gray-400 font-light">© 2023 TCN Dental Care. All rights reserved.</p>
<div className="flex items-center gap-4 text-gray-400">
<a aria-label="Website" className="hover:text-[#1E293B] transition-colors" href="#"></a>
<a aria-label="Instagram" className="hover:text-[#1E293B] transition-colors" href="#"></a>
<a aria-label="Email" className="hover:text-[#1E293B] transition-colors" href="#"></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
