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
      

<nav className="fixed top-0 w-full z-50 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#3A2E2A]/10 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="uppercase text-2xl text-[#3A2E2A] tracking-tighter font-serif" href="#">
                Hotel Kosta’s
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A2E2A]/80">
<a className="hover:text-[#C8A878] transition-colors" href="#about">About</a>
<a className="hover:text-[#C8A878] transition-colors" href="#suites">Suites</a>
<a className="hover:text-[#C8A878] transition-colors" href="#atmosphere">Atmosphere</a>
<a className="hover:text-[#C8A878] transition-colors" href="#business">Business</a>
</div>
<button className="bg-[#3A2E2A] text-[#C8A878] px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[#C8A878] hover:text-[#3A2E2A] transition-colors duration-300">
                Book Your Stay
            </button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-[#1A1A1A]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>
<div className="relative z-10 text-center max-w-4xl px-6 fade-in" style={{animationDelay: '0.2s'}}>
<p className="text-[#C8A878] text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-medium">Podgorica, Montenegro</p>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-white tracking-tight mb-8">
                A Sanctuary of <br/><span className="italic text-[#F5F0E8]">Classical Elegance</span>
</h1>
<p className="text-[#F5F0E8]/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Where timeless European luxury meets modern VIP comfort in the heart of the city.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-[#C8A878] text-[#1A1A1A] px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#F5F0E8] transition-colors duration-300 min-w-[160px]">
                    View Suites
                </button>
<button className="border border-[#F5F0E8]/30 text-[#F5F0E8] px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#F5F0E8] hover:text-[#1A1A1A] transition-colors duration-300 min-w-[160px]">
                    Learn More
                </button>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#F5F0E8]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-8">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block">Our Heritage</span>
<h2 className="text-4xl md:text-5xl text-[#3A2E2A] leading-tight tracking-tight font-normal">
                        Redefining luxury through intimacy &amp; heritage.
                    </h2>
<div className="space-y-6 text-[#3A2E2A]/70 font-light leading-relaxed">
<p>
                            As Podgorica’s premier VIP boutique hotel, we blend classical European design with contemporary amenities, creating an atmosphere of quiet prestige for business travelers and discerning guests.
                        </p>
<p>
                            Located in the eastern part of the city center—just ten minutes from the airport and three minutes from the bus and railway stations—our hotel offers unmatched convenience without compromising on elegance.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-[#3A2E2A] text-sm font-medium border-b border-[#C8A878] pb-1 hover:text-[#C8A878] transition-colors" href="#">
                            Read Our Story
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-[#3A2E2A] overflow-hidden">
<img alt="Classical Interior" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-[#C8A878] p-8 hidden md:block">
<p className="font-serif text-3xl text-[#1A1A1A] leading-none">10+</p>
<p className="text-[#1A1A1A] text-xs uppercase tracking-widest mt-2">Years of Excellence</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#3A2E2A] text-[#F5F0E8]" id="suites">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">Accommodation</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-normal">Suites &amp; Apartments</h2>
</div>
<p className="max-w-md text-[#F5F0E8]/70 font-light leading-relaxed text-sm md:text-base">
                    Every room is furnished with handcrafted classical furniture, warm lighting, plush bedding, and modern comforts to ensure absolute relaxation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Luxury Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">The Royal Apartment</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">A private sanctuary with distinct separation of living and resting areas.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bath" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Jacuzzi Bathtub
                        </li>
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full Kitchen
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">Executive Suite</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">Designed for the business leader seeking quiet refinement.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> High-Speed WiFi
                        </li>
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg> Private Work Space
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-[#1A1A1A]">
<img alt="Wellness Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-normal mb-2 text-[#F5F0E8]">Wellness Suite</h3>
<p className="text-[#F5F0E8]/60 text-sm mb-4">Indulgence meets health with in-room therapeutic features.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg> Sauna Access
                        </li>
<li className="flex items-center gap-3 text-xs text-[#C8A878] uppercase tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:waves" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Hydro-massage
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F0E8]" id="atmosphere">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">Atmosphere &amp; Design</span>
<h2 className="text-4xl md:text-5xl text-[#3A2E2A] leading-tight tracking-tight font-normal mb-6">
                    Where vintage artistry meets refined comfort.
                </h2>
<p className="text-[#3A2E2A]/70 font-light leading-relaxed">
                    Marble surfaces, antique décor, crystal chandeliers, and rich fabrics create a unique aesthetic found nowhere else in Podgorica.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-8 h-[300px] md:h-full relative overflow-hidden group">
<img alt="Lobby Chandelier" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-[#3A2E2A]/90 to-transparent w-full">
<h4 className="text-white text-2xl font-serif italic">Grand Salon</h4>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 h-full">
<div className="flex-1 bg-white p-8 border border-[#3A2E2A]/5 flex flex-col justify-center items-start">
<svg aria-hidden="true" className="iconify text-[#C8A878] mb-4 iconify--lucide" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
<h4 className="text-xl text-[#3A2E2A] font-serif mb-2">Curated Interiors</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">Rooms feel curated rather than standardized, featuring heavy drapery and velvet textures.</p>
</div>
<div className="flex-1 relative overflow-hidden group">
<img alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#3A2E2A]/90 to-transparent w-full">
<h4 className="text-white text-xl font-serif italic">Artisan Details</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#3A2E2A]/5" id="business">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<span className="text-[#C8A878] text-xs uppercase tracking-widest font-medium block mb-4">For Business Travelers</span>
<h2 className="text-4xl text-[#3A2E2A] leading-tight tracking-tight font-normal mb-6">
                        The preferred choice for executives.
                    </h2>
<p className="text-[#3A2E2A]/70 font-light leading-relaxed mb-8">
                        Hotel Kosta’s is a leader among business hotels in Podgorica, offering privacy, quick access to transport hubs, and refined lounges ideal for meetings.
                    </p>
<a className="inline-flex items-center justify-center bg-[#3A2E2A] text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#C8A878] transition-colors duration-300" href="#">
                        Corporate Inquiries
                    </a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C8A878] border border-[#C8A878]/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-smartphone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></g></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#3A2E2A] mb-2">Private Working Spaces</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">Elegant desks and ergonomic setups in a quiet environment suited for deep work.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C8A878] border border-[#C8A878]/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:train-front" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m7 1l1-1"></path><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Zm-1 0l-2 3m10-3l2 3"></path></g></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#3A2E2A] mb-2">Prime Location</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">3 minutes to railway stations, 10 minutes to the airport. Maximum efficiency.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C8A878] border border-[#C8A878]/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#3A2E2A] mb-2">VIP Exclusivity</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">Discretion and tailored attention expected from a true VIP stay.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C8A878] border border-[#C8A878]/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:coffee" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#3A2E2A] mb-2">Refined Lounges</h4>
<p className="text-sm text-[#3A2E2A]/60 leading-relaxed">Quiet areas perfectly designed for confidential meetings and relaxation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F5F0E8] pt-20 pb-10 border-t border-[#C8A878]/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h3 className="font-serif text-3xl mb-6 tracking-tight text-[#C8A878]">Hotel Kosta’s</h3>
<p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-6">
                        Podgorica’s premier VIP boutique hotel. A place to be indulged, not just to sleep.
                    </p>
<div className="flex gap-4">
<a className="text-[#F5F0E8]/50 hover:text-[#C8A878] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-[#F5F0E8]/50 hover:text-[#C8A878] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-[#F5F0E8]/50 hover:text-[#C8A878] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Explore</h4>
<ul className="space-y-3 text-sm text-[#F5F0E8]/60">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Suites &amp; Apartments</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Contact</h4>
<ul className="space-y-3 text-sm text-[#F5F0E8]/60">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#C8A878] iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            Aerodromska, PodgoricaMontenegro
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#C8A878] iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            +382 20 656 588
                        </li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#C8A878]">Newsletter</h4>
<p className="text-[#F5F0E8]/50 text-xs mb-4">Subscribe for exclusive offers and updates.</p>
<form className="flex border-b border-[#F5F0E8]/20 pb-2">
<input className="bg-transparent w-full outline-none text-sm text-white placeholder-[#F5F0E8]/30" placeholder="Email Address" type="email"/>
<button className="text-[#C8A878] text-xs uppercase tracking-widest hover:text-white transition-colors" type="button">Join</button>
</form>
</div>
</div>
<div className="border-t border-[#F5F0E8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#F5F0E8]/30 text-xs">© 2024 Hotel Kosta’s. All rights reserved.</p>
<div className="flex gap-6 text-[#F5F0E8]/30 text-xs">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
