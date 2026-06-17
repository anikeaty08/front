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



        // Data for locations
        const locationsData = {
            'escario': {
                name: 'Escario Branch',
                address: '2nd floor Capitol Square, Escario St.<br>Cebu City, Philippines',
                hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
                phone: '+63 (992) 570-6585',
                image: 'https://images.unsplash.com/photo-1521590832169-7dad1a9b70e6?q=80&w=800&auto=format&fit=crop'
            },
            'talamban': {
                name: 'Talamban Branch',
                address: 'Nasipit Commercial Plaza,<br>Talamban, Cebu City',
                hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
                phone: '+63 (992) 570-XXXX',
                image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop'
            },
            'balamban': {
                name: 'Balamban Branch',
                address: '2/F Gennis Arcade, Aliwanay<br>Balamban',
                hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
                phone: '+63 (992) 570-XXXX',
                image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop'
            },
            'lapulapu': {
                name: 'Lapu-Lapu Branch',
                address: '2/F MsMe Arcade, Brgy. Gun-ob,<br>S. Osmeña',
                hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
                phone: '+63 (992) 570-XXXX',
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop'
            },
            'dumaguete': {
                name: 'Dumaguete Branch',
                address: '3/F Unit 202, Dona Milagros Bldg.<br>Sta. Rosa St.',
                hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
                phone: '+63 (992) 570-XXXX',
                image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=800&auto=format&fit=crop'
            }
        };

        function switchTab(locationId) {
            // Update Tab Styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'shadow-sm', 'text-pink-600');
                btn.classList.add('text-slate-500');
            });
            const activeBtn = document.getElementById(`tab-${locationId}`);
            activeBtn.classList.add('bg-white', 'shadow-sm', 'text-pink-600');
            activeBtn.classList.remove('text-slate-500');

            // Update Content with animation
            const container = document.getElementById('location-content');
            const data = locationsData[locationId];
            
            // Basic Fade Out/In simulation by replacing innerHTML
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.innerHTML = `
                    <div class="location-card animate-fade-in-up h-full">
                        <div class="bg-gradient-to-br from-slate-50 to-pink-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl flex flex-col lg:flex-row h-full min-h-[400px]">
                            <div class="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                                <h3 class="text-3xl font-serif text-slate-900 mb-6">${data.name}</h3>
                                <div class="space-y-6">
                                    <div class="flex items-start gap-4">
                                        <div class="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                                        <div>
                                            <p class="font-medium text-slate-900">Address</p>
                                            <p class="text-slate-500">${data.address}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><i data-lucide="clock" class="w-5 h-5"></i></div>
                                        <div>
                                            <p class="font-medium text-slate-900">Hours</p>
                                            <p class="text-slate-500">${data.hours}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><i data-lucide="phone" class="w-5 h-5"></i></div>
                                        <div>
                                            <p class="font-medium text-slate-900">Contact</p>
                                            <p class="text-slate-500">${data.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-10">
                                    <a href="#" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#E94E88] rounded-full hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                                        Book at ${locationId.charAt(0).toUpperCase() + locationId.slice(1)}
                                    </a>
                                </div>
                            </div>
                            <div class="lg:w-1/2 h-64 lg:h-auto bg-slate-200 relative overflow-hidden group">
                                <img src="${data.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${data.name}">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                `;
                lucide.createIcons();
                container.style.opacity = '1';
                container.style.transition = 'opacity 0.3s ease-in-out';
            }, 200);
        }

        // Initialize Icons
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
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-pink-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center normal w-[200px] h-[55px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98f6e796-5f3b-40d8-9d5a-f68e5e479966_800w.png)] bg-cover" href="/"></a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors" href="#about">About</a>
<a className="hover:text-pink-600 transition-colors text-sm font-medium text-slate-600" href="#locations">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-[#E94E88] border border-transparent rounded-full shadow-lg hover:bg-pink-600 hover:shadow-pink-300/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" href="#book">
                        Book Appointment
                    </a>

<button className="md:hidden p-2 text-slate-600 hover:text-pink-600 transition-colors">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFF5F8] pt-32 pb-20 relative">

<div className="-translate-y-1/4 bg-pink-200/30 w-[800px] h-[800px] rounded-full absolute top-0 right-0 blur-3xl translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="fade-in-up space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/50 border border-pink-200 text-pink-700 text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                        Top Rated Clinic in Visayas
                    </div>
<h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1]">
                        Reveal Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94E88] to-pink-400">Inner Radiance</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 max-w-lg leading-relaxed font-light">
                        Experience the art of transformation with expert beauty treatments in Cebu &amp; Visayas. From precision brows to advanced skincare, we craft confidence.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-[#E94E88] rounded-full shadow-xl hover:shadow-pink-500/30 hover:bg-pink-600 hover:-translate-y-1" href="#book">
                            Book Your Visit
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-pink-200 hover:text-pink-600" href="#services">
                            Explore Services
                        </a>
</div>

<div className="pt-8 border-t border-pink-200/50 flex gap-8 lg:gap-12">
<div>
<p className="text-3xl font-serif text-slate-900">98%</p>
<p className="text-sm text-slate-500 mt-1">Satisfaction</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">5</p>
<p className="text-sm text-slate-500 mt-1">Premium Locations</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">10k+</p>
<p className="text-sm text-slate-500 mt-1">Happy Clients</p>
</div>
</div>
</div>

<div className="relative lg:h-[700px] w-full flex items-center justify-center fade-in-up delay-200">

<div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-900/10">
<img alt="Beautiful woman in pink blazer" className="object-top hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfdaa158-defe-4f25-b1fe-95666d8590db_1600w.png"/>

<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-white/40 shadow-xl backdrop-blur-md">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-900">Maricel Perales - Founder</p>
<div className="flex text-yellow-400 mt-1 text-xs">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-[80px] opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-serif text-slate-900 mb-4 tracking-tight">Curated Treatments</h2>
<p className="text-slate-500 text-lg font-light">Comprehensive beauty treatments tailored to enhance your natural features.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-sparkles w-24 h-24 text-pink-500 transform rotate-12" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-sparkles w-7 h-7" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Brow Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Professional eyebrow shaping, tinting, and microblading for the perfect arch.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-eye w-24 h-24 text-pink-500 transform rotate-12" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-eye w-7 h-7" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Eyelash Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expert eyelash extensions, lifts, and tinting treatments to awaken your eyes.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-scissors w-24 h-24 text-pink-500 transform rotate-12" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-scissors w-7 h-7" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Hair Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Complete hair care including precision cuts, styling, and restorative treatments.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-zap w-24 h-24 text-pink-500 transform rotate-12" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Laser Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Advanced laser treatments for hair removal and skin rejuvenation.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-gem w-24 h-24 text-pink-500 transform rotate-12" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-gem w-7 h-7" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Nail Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Professional manicures, pedicures, and nail art in a sanitary environment.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-shield-check w-24 h-24 text-pink-500 transform rotate-12" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-shield-check w-7 h-7" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 font-serif">Skin Care &amp; Removal</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Safe and effective removal of warts, skintags, and specialized skin care.</p>
<a className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:underline decoration-pink-300 underline-offset-4" href="#">
                        View Details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF5F8] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 relative">

<div className="grid grid-cols-2 gap-4">
<img alt="Salon interior" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Treatment" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
<div className="w-24 h-24 rounded-full border border-dashed border-pink-400 flex items-center justify-center text-center p-2">
<span className="text-xs font-semibold uppercase tracking-wider text-pink-600">Est. <br/>2020</span>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-tight">Elegance in Every Detail</h2>
<div className="space-y-6 text-lg text-slate-600 font-light">
<p className="">
                            High-Gene Beauty Clinic &amp; Salon has been serving the Cebu City community with professional beauty services since our establishment. We pride ourselves on providing exceptional quality treatments in a serene, welcoming environment.
                        </p>
<p className="">
                            With 5 branches across Visayas, we make beauty services accessible and convenient. Our team of skilled professionals stays updated with the latest techniques to ensure you receive the best possible care.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="p-2 bg-pink-100 rounded-lg text-pink-600"><svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div>
<div>
<h4 className="font-medium text-slate-900">Certified Experts</h4>
<p className="text-sm text-slate-500 mt-1">Highly trained professionals</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-pink-100 rounded-lg text-pink-600"><svg className="lucide lucide-smile w-6 h-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<div>
<h4 className="font-medium text-slate-900">Client Centric</h4>
<p className="text-sm text-slate-500 mt-1">Personalized care plans</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="locations">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-4xl font-serif text-slate-900 mb-4 tracking-tight">Our Sanctuaries</h2>
<p className="text-slate-500 text-lg font-light">Visit us at any of our 5 premium locations across Visayas.</p>
</div>

<div className="flex space-x-2 bg-slate-100 p-1.5 rounded-xl overflow-x-auto no-scrollbar max-w-full">
<button className="tab-btn transition-all duration-200 text-sm font-medium text-pink-600 bg-white rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm" id="tab-escario" onclick="switchTab('escario')">Escario</button>
<button className="tab-btn hover:text-slate-900 transition-all duration-200 text-sm font-medium text-slate-500 rounded-lg pt-2 pr-4 pb-2 pl-4" id="tab-talamban" onclick="switchTab('talamban')">Talamban</button>
<button className="tab-btn px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" id="tab-balamban" onclick="switchTab('balamban')">Balamban</button>
<button className="tab-btn px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" id="tab-lapulapu" onclick="switchTab('lapulapu')">Lapu-Lapu</button>
<button className="tab-btn px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" id="tab-dumaguete" onclick="switchTab('dumaguete')">Dumaguete</button>
</div>
</div>

<div className="relative min-h-[400px]" id="location-content">

<div className="location-card absolute inset-0 transition-all duration-500 ease-in-out opacity-100 z-10 translate-y-0" id="content-escario">
<div className="bg-gradient-to-br from-slate-50 to-pink-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl flex flex-col lg:flex-row h-full">
<div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
<h3 className="text-3xl font-serif text-slate-900 mb-6">Escario Branch</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
<div className="">
<p className="font-medium text-slate-900">Address</p>
<p className="text-slate-500">2nd floor Capitol Square, Escario St.Cebu City, Philippines</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
<div>
<p className="font-medium text-slate-900">Hours</p>
<p className="text-slate-500">Mon - Sat: 9:30 AM - 6:30 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-pink-500 shadow-sm"><svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
<div>
<p className="font-medium text-slate-900">Contact</p>
<p className="text-slate-500">+63 (992) 570-6585</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#E94E88] rounded-full hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200" href="#">
                                    Book at Escario
                                </a>
</div>
</div>
<div className="lg:w-1/2 h-64 lg:h-auto bg-slate-200 relative overflow-hidden">
<img alt="Escario location" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633681138600-295fcd688876?w=1600&amp;q=80"/><div className="bg-gradient-to-t from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-4xl font-serif mb-4 tracking-tight">Real Results</h2>
<p className="text-gray-400 text-lg font-light max-w-md">Browse our gallery of transformations. Beauty that speaks for itself.</p>
</div>
<a className="mt-6 md:mt-0 text-white border-b border-pink-500 pb-1 hover:text-pink-400 transition-colors" href="#">View All Gallery</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900">
<img alt="Result 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Lashes</span>
<h3 className="text-xl font-serif">Volume Extension</h3>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900">
<img alt="Result 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1596704017254-9b1b2255e2d6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Brows</span>
<h3 className="text-xl font-serif">Microblading</h3>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900">
<img alt="Result 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Skin</span>
<h3 className="text-xl font-serif">Laser Rejuvenation</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-pink-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl font-serif text-slate-900 text-center mb-16 tracking-tight">Client Love</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex text-pink-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed italic">"The most professional clinic I've visited in Cebu. The staff at Escario branch are incredibly skilled. My brows have never looked better!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">AM</div>
<div>
<p className="font-medium text-slate-900 text-sm">Anna Marie</p>
<p className="text-slate-400 text-xs">Regular Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex text-pink-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed italic">"Elegant ambiance and top-tier service. I did the laser treatment and the results were visible after just one session. Highly recommend!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">JS</div>
<div>
<p className="font-medium text-slate-900 text-sm">Jennifer S.</p>
<p className="text-slate-400 text-xs">Laser Patient</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex text-pink-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed italic">"Visited the Talamban branch for nails and lashes. The attention to detail is unmatched. It truly feels like a luxury spa experience."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">KR</div>
<div>
<p className="font-medium text-slate-900 text-sm">Katrina R.</p>
<p className="text-slate-400 text-xs">Beauty Enthusiast</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#E94E88]" id="book">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Ready to Glow?</h2>
<p className="text-pink-100 text-lg mb-10 font-light max-w-2xl mx-auto">Experience our professional beauty services today. Book your appointment at any of our 5 convenient locations.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-[#E94E88] font-medium rounded-full hover:bg-pink-50 transition-all shadow-xl hover:-translate-y-1">
                    Book Appointment Now
                </button>
<button className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all">
                    Contact Us
                </button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-pink-100 text-sm">
<span className="flex items-center gap-2"><svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> Free Wi-Fi</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-battery-charging w-4 h-4" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg> Charging Stations</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Clean Environment</span>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-sparkles w-6 h-6 text-pink-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-serif text-2xl text-white">High-Gene</span>
</div>
<p className="text-sm leading-relaxed mb-6">Professional Beauty Services.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-pink-500 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#book">Book Now</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Our Branches</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Escario</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Talamban</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Balamban</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Lapu-Lapu</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Dumaguete</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Get in Touch</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-pink-500 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>hello@high-giene.com</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-pink-500 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+63 (992) 570-6585</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-message-circle w-5 h-5 text-pink-500 shrink-0" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span>Facebook Messenger</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs">
<p>© 2025 High-Gene Beauty Clinic &amp; Salon. All rights reserved.</p>
<p className="mt-2 text-slate-600">Open for Franchising</p>
</div>
</div>
</footer>



    </>
  );
}
