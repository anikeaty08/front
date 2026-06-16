import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-up-element').forEach(el => {
        observer.observe(el);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 border-b border-slate-200/50 top-0 bg-white/90 backdrop-blur-xl transition-all duration-300" id="site-nav">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="flex items-center shrink-0 z-20">
<a className="flex items-center gap-3 group transition-transform duration-300" href="#">
<div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-2xl font-normal tracking-tight text-slate-800">Shashi Care</span>
</a>
</div>

<div className="flex gap-6 items-center ml-auto z-20">
<a className="hidden md:block text-lg font-normal text-slate-600 hover:text-sage transition-colors" href="#">
            For Families
          </a>
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#6b8c72] hover:-translate-y-0.5 px-6 lg:px-8 py-3.5 text-lg font-normal text-white bg-sage rounded-full shadow-sm" href="#">
            Schedule a Free Demo
          </a>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-warm-white">

<div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-beige rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12 lg:py-0">

<div className="max-w-2xl fade-up-element is-visible">
<h1 className="text-5xl lg:text-7xl font-light text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Gentle care, right on the TV they <span className="italic text-sage">already love.</span>
</h1>
<p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
          Simple smart living for seniors. Independence with warmth. Connection with family and nurses — no complicated new devices needed.
        </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-sage text-white text-xl font-normal transition-all hover:bg-[#6b8c72] shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#">
            Schedule a Free Demo
          </a>
<a className="inline-flex justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 text-xl font-normal transition-all hover:bg-slate-50 hover:border-slate-300" href="#how-it-works">
            See How It Works
          </a>
</div>
<div className="mt-8 flex items-center gap-3 text-base text-slate-500 font-light">
<iconify-icon className="text-sage" height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Built with care for Indian seniors, trusted by families.
        </div>
</div>

<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden fade-up-element is-visible" style={{transitionDelay: '200ms'}}>
<img alt="Happy senior Indian couple smiling together" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 fade-up-element">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
          A familiar screen, transformed into a hub of care.
        </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed">
          We bring essential services, daily schedules, and family connections directly to their television screen. Meanwhile, families manage it all simply from their phones.
        </p>
</div>
<div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center fade-up-element">

<div className="relative w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-slate-800">

<img alt="Peaceful living room background" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex flex-col justify-between p-8 bg-black/20">

<div className="flex justify-between items-center text-white drop-shadow-md">
<span className="text-3xl font-light">10:30 AM</span>
<span className="text-2xl font-light">24°C • Sunny</span>
</div>

<div className="flex flex-col items-start gap-4">
<h3 className="text-5xl font-normal text-white drop-shadow-lg tracking-tight">Namaste, Mrs. Sharma.</h3>
<div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 flex items-center gap-6 shadow-lg max-w-md">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
<iconify-icon height="32" icon="solar:pill-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-lg mb-1">Up Next</p>
<p className="text-2xl font-normal text-slate-900 tracking-tight">Morning Medication</p>
</div>
</div>
</div>

<div className="flex gap-4 justify-center bg-black/40 backdrop-blur-xl p-4 rounded-3xl mx-auto">
<div className="px-8 py-4 rounded-2xl bg-white/20 text-white flex flex-col items-center gap-2">
<iconify-icon height="32" icon="solar:calendar-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xl font-normal">Schedule</span>
</div>
<div className="px-8 py-4 rounded-2xl hover:bg-white/10 text-white flex flex-col items-center gap-2 transition-colors">
<iconify-icon height="32" icon="solar:bell-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xl font-normal">Services</span>
</div>
<div className="px-8 py-4 rounded-2xl hover:bg-white/10 text-white flex flex-col items-center gap-2 transition-colors">
<iconify-icon height="32" icon="solar:gallery-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xl font-normal">Photos</span>
</div>
<div className="px-8 py-4 rounded-2xl bg-sage/90 text-white flex flex-col items-center gap-2 shadow-lg">
<iconify-icon height="32" icon="solar:phone-calling-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xl font-normal">Call Family</span>
</div>
</div>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-slate-100 mx-auto hidden lg:block overflow-hidden">
<div className="p-6 h-full flex flex-col bg-slate-50">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-normal">Ma's Home</span>
</div>
</div>
<p className="text-slate-500 mb-2">Today's Updates</p>
<div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-slate-100">
<div className="flex items-center gap-3 text-sage mb-2">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-normal">Breakfast completed</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<iconify-icon height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="font-normal">Nurse visit at 2 PM</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-auto">
<button className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center gap-2 text-slate-700">
<iconify-icon className="text-sage" height="24" icon="solar:camera-linear" width="24"></iconify-icon>
                Send Photo
              </button>
<button className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center gap-2 text-slate-700">
<iconify-icon className="text-sage" height="24" icon="solar:videocamera-linear" width="24"></iconify-icon>
                Video Call
              </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-beige relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up-element">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Peaceful days, clearly planned.
        </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
          A gentle daily rhythm displayed right on the TV. No confusion, no missed medications. Just a calm overview of what to look forward to today.
        </p>

<div className="border-l-2 border-[#D5C9B8] ml-4 pl-8 space-y-6">

<div className="schedule-card bg-white p-6 rounded-2xl shadow-sm border border-white hover:border-sage/30 transition-colors relative cursor-pointer outline-none focus:ring-2 focus:ring-sage focus:border-sage" tabindex="0">
<div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-sage ring-4 ring-beige"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-slate-500 text-lg mb-1">09:00 AM</p>
<h4 className="text-2xl font-normal tracking-tight text-slate-800">Morning Tea &amp; Yoga</h4>
</div>
<iconify-icon className="text-sage" height="28" icon="solar:cup-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="schedule-detail">
<p className="text-slate-600 text-lg border-t border-slate-100 pt-4">Gentle chair yoga session guided through the TV, followed by herbal tea.</p>
</div>
</div>

<div className="schedule-card bg-white p-6 rounded-2xl shadow-sm border border-white hover:border-sage/30 transition-colors relative cursor-pointer outline-none focus:ring-2 focus:ring-sage focus:border-sage" tabindex="0">
<div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-white border-2 border-slate-300 ring-4 ring-beige"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-slate-500 text-lg mb-1">01:00 PM</p>
<h4 className="text-2xl font-normal tracking-tight text-slate-800">Warm Lunch Delivery</h4>
</div>
<iconify-icon className="text-sage" height="28" icon="solar:plate-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="schedule-detail">
<p className="text-slate-600 text-lg border-t border-slate-100 pt-4">Nutritious, home-style vegetarian meal delivered to the door.</p>
</div>
</div>

<div className="schedule-card bg-white p-6 rounded-2xl shadow-sm border border-white hover:border-sage/30 transition-colors relative cursor-pointer outline-none focus:ring-2 focus:ring-sage focus:border-sage" tabindex="0">
<div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-white border-2 border-slate-300 ring-4 ring-beige"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-slate-500 text-lg mb-1">05:30 PM</p>
<h4 className="text-2xl font-normal tracking-tight text-slate-800">Video Call with Rahul</h4>
</div>
<iconify-icon className="text-sage" height="28" icon="solar:videocamera-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="schedule-detail">
<p className="text-slate-600 text-lg border-t border-slate-100 pt-4">Evening catch-up with family. The TV will ring automatically.</p>
</div>
</div>
</div>
</div>
<div className="relative w-full aspect-square rounded-[2rem] overflow-hidden fade-up-element hidden lg:block">
<img alt="Senior pouring tea" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 fade-up-element">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Everything you need, requested with one click.
        </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed">
          Large, clear icons on the TV allow easy booking of trusted, vetted home services. Independence is just a button press away.
        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 fade-up-element">
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:scissors-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Haircut at Home</h3>
</div>
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:health-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Nurse Visit</h3>
</div>
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:broom-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Room Cleaning</h3>
</div>
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:washing-machine-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Laundry Service</h3>
</div>
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:plate-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Warm Meals</h3>
</div>
<div className="service-card bg-warm-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
<div className="w-20 h-20 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-2">
<iconify-icon height="36" icon="solar:hand-heart-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-slate-800">Massage Therapy</h3>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-warm-white relative border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full aspect-square rounded-[2rem] overflow-hidden fade-up-element order-2 lg:order-1">
<img alt="Indian family smiling on a video call" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 inset-x-6 flex justify-between items-center bg-black/40 backdrop-blur-md rounded-2xl p-6">
<span className="text-white text-xl font-light">Family Group Call</span>
<div className="flex gap-4">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white">
<iconify-icon height="28" icon="solar:microphone-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white">
<iconify-icon height="28" icon="solar:end-call-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="fade-up-element order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Love and support, always close.
        </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
          The television becomes a life-sized window to loved ones. Large, simple video calls make conversations feel natural and intimate.
        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-sage/20 text-sage flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:videocamera-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-slate-800 mb-1">One-Touch Video Calls</h4>
<p className="text-lg text-slate-500 font-light">No tiny buttons. Answer calls from family or nurses directly with the TV remote.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-sage/20 text-sage flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:smartphone-update-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-normal text-slate-800 mb-1">Family Companion App</h4>
<p className="text-lg text-slate-500 font-light">Add new photos, update the daily schedule, and request specific meals remotely from your phone.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 fade-up-element">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6 text-center">
        Entertainment and cherished moments.
      </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto">
        When not showing the schedule or a call, the TV acts as a beautiful digital photo frame, quietly cycling through family memories, alongside easy access to favorite shows.
      </p>
</div>

<div className="relative w-full overflow-hidden fade-up-element">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="animate-marquee flex gap-6 px-3">

<img alt="Family photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1542044801-44fb66e6eb6c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Senior photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Grandkids photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Vacation photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<img alt="Family photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1542044801-44fb66e6eb6c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Senior photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Grandkids photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Vacation photo" className="w-80 h-64 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 mt-16 flex flex-wrap justify-center gap-8 fade-up-element">
<div className="px-8 py-4 rounded-full border border-slate-200 text-xl font-normal text-slate-600 flex items-center gap-3">
<iconify-icon className="text-sage" height="28" icon="solar:tv-linear" width="28"></iconify-icon> Live TV
      </div>
<div className="px-8 py-4 rounded-full border border-slate-200 text-xl font-normal text-slate-600 flex items-center gap-3">
<iconify-icon className="text-sage" height="28" icon="solar:play-circle-linear" width="28"></iconify-icon> Netflix &amp; Prime
      </div>
<div className="px-8 py-4 rounded-full border border-slate-200 text-xl font-normal text-slate-600 flex items-center gap-3">
<iconify-icon className="text-sage" height="28" icon="solar:music-note-linear" width="28"></iconify-icon> Devotional Music
      </div>
</div>
</section>

<section className="py-24 lg:py-32 bg-beige relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 fade-up-element">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Independence without complexity.
        </h2>
<p className="text-xl text-slate-600 font-light leading-relaxed">
          Every detail is designed with empathy. We removed the confusing menus, tiny text, and unfamiliar gestures of modern tablets.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-12 fade-up-element">
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-sage mb-6 shadow-sm">
<iconify-icon height="32" icon="solar:text-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-800 mb-4 tracking-tight">Highly Legible</h3>
<p className="text-lg text-slate-600 font-light">Large, high-contrast text and icons designed specifically for aging eyes. No squinting required.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-sage mb-6 shadow-sm">
<iconify-icon height="32" icon="solar:remote-controller-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-800 mb-4 tracking-tight">Familiar Controls</h3>
<p className="text-lg text-slate-600 font-light">Operates entirely with the standard TV remote they already know how to use, or via simple voice commands.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-sage mb-6 shadow-sm">
<iconify-icon height="32" icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-800 mb-4 tracking-tight">Zero Clutter</h3>
<p className="text-lg text-slate-600 font-light">No new cables, no charging tablets. It integrates cleanly into their existing living room setup.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white text-center relative overflow-hidden">

<div className="absolute inset-0 bg-sage/5 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 fade-up-element">
<div className="w-20 h-20 mx-auto rounded-full bg-sage flex items-center justify-center text-white mb-8">
<iconify-icon height="40" icon="solar:heart-angle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-8">
        Bring gentle care into their home.
      </h2>
<p className="text-xl text-slate-600 font-light mb-12 max-w-2xl mx-auto">
        Let us show you how Shashi Care can provide peace of mind for you, and dignified independence for the ones you love.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex justify-center w-full sm:w-auto px-10 py-5 rounded-full bg-sage text-white text-xl font-normal transition-all hover:bg-[#6b8c72] shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#">
          Schedule a Personalized Demo
        </a>
<a className="inline-flex justify-center items-center gap-3 w-full sm:w-auto px-10 py-5 rounded-full bg-transparent text-sage text-xl font-normal transition-all hover:bg-sage/10" href="#">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon> Talk to Our Caring Team
        </a>
</div>
</div>
</section>

<footer className="bg-warm-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex items-center gap-2 text-slate-800">
<iconify-icon className="text-sage" height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="text-xl font-normal">Shashi Care</span>
</div>
<div className="flex items-center gap-6 text-base text-slate-500 font-light flex-wrap justify-center">
<span>Made with love for Indian seniors</span>
<span className="hidden md:inline">•</span>
<a className="hover:text-sage transition-colors" href="#">Privacy First</a>
<span className="hidden md:inline">•</span>
<a className="hover:text-sage transition-colors" href="#">Simple for Everyone</a>
</div>
</div>
</footer>



    </>
  );
}
