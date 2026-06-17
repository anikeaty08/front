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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-black/95 border-white/10">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-20 items-center justify-between">

<a className="text-lg md:text-xl font-semibold tracking-tighter uppercase hover:text-[#D4AF37] transition-colors text-white font-manrope" href="#home" style={{}}>
                    Wego Holiday <span className="text-[#D4AF37] font-manrope" style={{}}>Homes</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/80">
<a className="hover:text-[#D4AF37] transition-colors font-manrope" href="#about" style={{}}>About</a>
<a className="hover:text-[#D4AF37] transition-colors font-manrope" href="#services" style={{}}>Services</a>
<a className="hover:text-[#D4AF37] transition-colors font-manrope" href="#landlords" style={{}}>Landlords</a>
<a className="hover:text-[#D4AF37] transition-colors font-manrope" href="#pricing" style={{}}>Pricing</a>
<a className="hover:text-[#D4AF37] transition-colors font-manrope" href="#guest-booking" style={{}}>Book a Stay</a>
<a className="px-6 py-3 bg-[#D4AF37] font-semibold transition-all duration-300 text-black hover:bg-white font-manrope" href="#contact" style={{}}>
                        Consultation
                    </a>
</div>

<div className="lg:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20" id="home">

<div className="absolute inset-0 z-0">
<img alt="Dubai Holiday Home Management Services for Landlords" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1673563932832-a0c9e0ed26f8?w=2560&amp;q=80"/>
<div className="bg-gradient-to-t to-transparent from-black via-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium tracking-tight font-montserrat mb-8">Dubai Holiday Home 
<br/> Co-Hosting 
&amp; 
<br/> Property Management</h1>
<p className="leading-relaxed text-lg font-light text-[#F5E9D3] font-manrope max-w-2xl mr-auto mb-12 ml-auto">Hands-off hosting for landlords and investors. High-ROI short-term rentals managed professionally. Experience the pinnacle of Airbnb management service Dubai for property owners.</p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
<a className="sm:w-auto uppercase transition-all duration-300 text-xs font-semibold tracking-widest bg-[#D4AF37] w-full pt-4 pr-8 pb-4 pl-8 hover:bg-white text-black font-manrope" href="#contact">
                    Get a Free ROI Estimate
                </a>
<a className="w-full sm:w-auto px-8 py-4 border font-medium text-xs uppercase tracking-widest transition-all duration-300 border-white text-white hover:bg-white hover:text-black font-manrope" href="#contact" style={{}}>
                    Book a Consultation
                </a>
</div>

<div className="mt-20 pt-8 border-t flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 border-white/10">
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-building-2 w-6 h-6 text-[#D4AF37]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="text-[10px] tracking-widest uppercase font-manrope" style={{}}>DTCM Licensed</span>
</div>
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-[#D4AF37]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-[10px] tracking-widest uppercase font-manrope" style={{}}>High Yield ROI</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#F5E9D3] text-black" id="about">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
<div className="">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>Our Story</h2>
<h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-montserrat font-medium" style={{}}>
                        A trusted holiday home management company in Dubai.
                    </h3>
<p className="leading-relaxed font-light text-gray-800 font-manrope mb-6">Wego Holiday Homes was founded on a simple premise: 
luxury properties deserve luxury management. We are experienced Dubai co-hosting experts who bridge the gap between premium hospitality and high-yield property investment.</p>
<p className="leading-relaxed font-light text-gray-800 font-manrope">We specialise in holiday home compliance and licensing support Dubai landlords and investors need to navigate the market safely. Our mission is to provide landlord-focused short-term rental services that are transparent, legal, and exceptionally profitable.</p>
</div>
<div className="relative h-[500px] w-full overflow-hidden bg-blue-200">
<img alt="Luxury Dubai Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="p-8 md:p-16 border border-[#D4AF37]/20 bg-white">
<div className="grid md:grid-cols-3 gap-12 items-center">
<div className="md:col-span-1">
<div className="aspect-[3/4] relative overflow-hidden bg-blue-100">

<img alt="Nwaego Muoma - Founder of Wego Holiday Homes" className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5be8a28e-48fd-4e85-8769-5c6c15a8141a_800w.jpg" style={{}}/>
</div>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 font-manrope" style={{}}>The Founder</h4>
<h2 className="text-3xl mb-6 font-montserrat font-medium" style={{}}>Nwaego Muoma</h2>
<p className="font-light leading-relaxed mb-6 text-gray-600 font-manrope" style={{}}>
                            With a distinguished background in property investment and creative entrepreneurship, Nwaego Muoma established Wego Holiday Homes to redefine the standards of short-term rentals in the UAE. Her approach combines rigorous data analytics with an artist's eye for interior styling, ensuring every property not only performs financially but captivates guests emotionally.
                        </p>
<blockquote className="text-xl italic font-light mb-6 border-l-2 border-[#D4AF37] pl-6 text-black font-manrope" style={{}}>
                            "Real estate in Dubai is world-class; the management behind it should be too. We don't just host; we curate experiences that drive revenue."
                        </blockquote>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>Our Expertise</h2>
<h3 className="text-3xl md:text-4xl tracking-tight mb-4 font-montserrat font-medium" style={{}}>
                    End-to-End Holiday Home Management Dubai
                </h3>
<p className="text-gray-500 font-light font-manrope" style={{}}>
                    Comprehensive solutions for the modern landlord.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-key w-5 h-5 text-black" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>Dubai Airbnb Co-Hosting Services</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        A complete hands-off approach. We manage the listing, the guests, and the operations while you enjoy the passive income through our revenue share model.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-file-check w-5 h-5 text-black" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>Licensing &amp; Onboarding</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        Seamless property onboarding and licensing for holiday homes in Dubai. We handle all DTCM permit applications to ensure full compliance.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-message-square w-5 h-5 text-black" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>24/7 Guest Communication</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        Professional guest communication service. From inquiry to check-out, our multilingual team handles every question instantly.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-sparkles w-5 h-5 text-black" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>Cleaning &amp; Linen</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        Premium holiday home cleaning and housekeeping service. Hotel-grade linens and toiletries provided for every stay.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-trending-up w-5 h-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>Dynamic Pricing</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        Advanced dynamic pricing and revenue management algorithms that adjust rates daily based on demand, events, and seasonality.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 border-gray-200">
<svg className="lucide lucide-armchair w-5 h-5 text-black" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<h4 className="text-lg font-medium mb-3 font-manrope" style={{}}>Short-Let Property Setup</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed font-manrope" style={{}}>
                        Expert short-let property setup service. We advise on interior styling to make your property irresistible to high-value guests.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black text-white" id="landlords">
<div className="absolute inset-0 bg-cover opacity-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9f6115f-db58-4bc7-8a82-9ebad48cab6f_1600w.jpg)] bg-center" style={{}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-20">
<div className="">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>For Property Owners</h2>
<h3 className="text-3xl md:text-4xl tracking-tight mb-8 font-montserrat font-medium" style={{}}>
                        Maximise Rental Income with <br/> Dubai Short-Term Rentals
                    </h3>
<p className="leading-relaxed font-light text-[#F5E9D3] font-manrope mb-8">Why lock your asset into a fixed annual contract?
Holiday home management for Dubai landlords and investors typically yields 20-40% higher returns than long-term leasing. We provide a hands-off hosting solution for Dubai landlords who value performance.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-1 h-12 bg-[#D4AF37]"></div>
<div>
<h4 className="text-lg font-medium text-white font-manrope" style={{}}>Higher Yields</h4>
<p className="text-sm font-light mt-1 default font-manrope" style={{}}>Capitalize on Dubai's peak tourism seasons with flexible pricing.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-1 h-12 bg-[#D4AF37]"></div>
<div className="">
<h4 className="text-lg font-medium text-white font-manrope" style={{}}>Property Care</h4>
<p className="text-sm font-light mt-1 default font-manrope" style={{}}>Frequent professional cleaning means your asset stays in showroom condition.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-1 h-12 bg-[#D4AF37]"></div>
<div className="">
<h4 className="text-lg font-medium text-white font-manrope" style={{}}>Owner Flexibility</h4>
<p className="text-sm font-light mt-1 default font-manrope" style={{}}>Block dates for your own personal use whenever you need.</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-block uppercase transition-all duration-300 hover:bg-white text-xs font-semibold text-black tracking-widest font-manrope bg-[#D4AF37] pt-4 pr-8 pb-4 pl-8" href="#contact">
                            Book a Consultation
                        </a>
</div>
</div>

<div className="bg-[#111] border p-10 flex flex-col justify-center border-white/10">
<h4 className="text-xl font-medium mb-8 text-white font-manrope" style={{}}>The Commercial Case</h4>
<div className="mb-8 pb-8 border-b border-white/10">
<div className="flex justify-between items-end mb-2">
<span className="text-sm default font-manrope" style={{}}>Average Long-Term Rent</span>
<span className="text-xl text-white font-manrope" style={{}}>100%</span>
</div>
<div className="w-full h-1 default">
<div className="h-1 w-full default"></div>
</div>
</div>
<div className="mb-4">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-[#D4AF37] font-manrope" style={{}}>Wego Holiday Homes Short-Term Projected</span>
<span className="text-xl text-[#D4AF37] font-bold font-manrope" style={{}}>135%</span>
</div>
<div className="w-full h-1 default">
<div className="bg-[#D4AF37] h-1 w-[80%]"></div>
</div>
<p className="text-xs mt-4 font-light default font-manrope" style={{}}>*Based on average performance of 1BR apartments in Dubai Marina vs standard yearly contracts.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="mb-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>The Process</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-montserrat font-medium" style={{}}>How We Work</h3>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<span className="text-6xl text-[#F5E9D3] absolute -top-8 -left-4 -z-10 font-montserrat font-medium" style={{}}>01</span>
<h4 className="text-lg font-medium mb-2 font-manrope" style={{}}>Consultation</h4>
<p className="text-sm text-gray-500 font-light font-manrope" style={{}}>We inspect your property and provide a detailed revenue projection.</p>
</div>
<div className="relative">
<span className="text-6xl text-[#F5E9D3] absolute -top-8 -left-4 -z-10 font-montserrat font-medium" style={{}}>02</span>
<h4 className="text-lg font-medium mb-2 font-manrope" style={{}}>Setup &amp; License</h4>
<p className="text-sm text-gray-500 font-light font-manrope" style={{}}>We handle DTCM licensing, photography, and interior staging.</p>
</div>
<div className="relative">
<span className="text-6xl text-[#F5E9D3] absolute -top-8 -left-4 -z-10 font-montserrat font-medium" style={{}}>03</span>
<h4 className="text-lg font-medium mb-2 font-manrope" style={{}}>Go Live</h4>
<p className="text-sm text-gray-500 font-light font-manrope" style={{}}>Your listing goes live on Airbnb, Booking.com, and our direct channels.</p>
</div>
<div className="relative">
<span className="text-6xl text-[#F5E9D3] absolute -top-8 -left-4 -z-10 font-montserrat font-medium" style={{}}>04</span>
<h4 className="text-lg font-medium mb-2 font-manrope" style={{}}>Monthly Income</h4>
<p className="text-sm text-gray-500 font-light font-manrope" style={{}}>Guests stay, you get paid. Receive detailed monthly performance reports.</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto">
<h3 className="text-2xl mb-8 text-center font-montserrat font-medium" style={{}}>Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group border-b pb-4 cursor-pointer border-gray-100" open="">
<summary className="flex justify-between items-center text-sm font-medium hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>
                            How do I license a holiday home in Dubai?
                            <span className="text-[#D4AF37] group-open:rotate-45 transition-transform font-manrope" style={{}}>+</span>
</summary>
<p className="text-sm text-gray-500 font-light mt-3 leading-relaxed font-manrope" style={{}}>
                            We handle the entire process. We register your unit with the DTCM (Department of Tourism and Commerce Marketing), arrange the permits, and ensure the property meets all safety and classification standards.
                        </p>
</details>
<details className="group border-b pb-4 cursor-pointer border-gray-100" open="">
<summary className="flex justify-between items-center text-sm font-medium hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>
                            What are your management fees?
                            <span className="text-[#D4AF37] group-open:rotate-45 transition-transform font-manrope" style={{}}>+</span>
</summary>
<p className="text-sm text-gray-500 font-light mt-3 leading-relaxed font-manrope" style={{}}>
                            We operate on a transparent percentage-based model, typically ranging between 15% and 20% of the booking revenue depending on the service level. This aligns our incentives with yours—we only earn when you earn.
                        </p>
</details>
<details className="group border-b pb-4 cursor-pointer border-gray-100" open="">
<summary className="flex justify-between items-center text-sm font-medium hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>
                            How do you screen guests?
                            <span className="text-[#D4AF37] group-open:rotate-45 transition-transform font-manrope" style={{}}>+</span>
</summary>
<p className="text-sm text-gray-500 font-light mt-3 leading-relaxed font-manrope" style={{}}>
                            We use strict vetting protocols, checking guest reviews, requiring verified ID upon booking, and collecting security deposits to protect your property.
                        </p>
</details>
<details className="group border-b pb-4 cursor-pointer border-gray-100" open="">
<summary className="flex justify-between items-center text-sm font-medium hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>
                            Can I use the property myself?
                            <span className="text-[#D4AF37] group-open:rotate-45 transition-transform font-manrope" style={{}}>+</span>
</summary>
<p className="text-sm text-gray-500 font-light mt-3 leading-relaxed font-manrope" style={{}}>
                            Absolutely. As the owner, you have access to the calendar and can block out dates for personal use whenever you wish.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="bg-[#F5E9D3]/30 pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>Investment</h2>
<h3 className="text-3xl md:text-4xl tracking-tight mb-4 font-montserrat font-medium" style={{}}>
                    Transparent Holiday Home Management Fees
                </h3>
<p className="text-gray-500 font-light font-manrope" style={{}}>
                    Affordable Airbnb management Dubai with a clear model.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 border hover:border-[#D4AF37] transition-all duration-300 bg-white border-gray-100">
<h4 className="text-lg font-semibold mb-2 font-manrope" style={{}}>Essential Co-Hosting</h4>
<div className="text-3xl mb-6 font-montserrat font-medium" style={{}}>15% <span className="text-sm text-gray-400 font-manrope" style={{}}>/booking</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Listing Optimization</li>
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Guest Communication</li>
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Calendar Sync</li>
</ul>
<a className="block w-full py-3 border text-center text-xs uppercase tracking-widest transition-colors border-black hover:bg-black hover:text-white font-manrope" href="#contact" style={{}}>Inquire</a>
</div>

<div className="p-8 border border-[#D4AF37] relative transform md:-translate-y-4 shadow-2xl bg-black text-white">
<div className="absolute top-0 right-0 bg-[#D4AF37] text-[10px] font-bold px-3 py-1 uppercase tracking-widest text-black font-manrope" style={{}}>Recommended</div>
<h4 className="text-lg font-semibold mb-2 text-[#D4AF37] font-manrope" style={{}}>Full Management</h4>
<div className="text-3xl mb-6 font-montserrat font-medium" style={{}}>20% <span className="text-sm default font-manrope" style={{}}>/booking</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-light text-blue-300 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Essential Features</li>
<li className="flex items-center gap-3 text-sm font-light text-blue-300 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Housekeeping &amp; Linen</li>
<li className="flex items-center gap-3 text-sm font-light text-blue-300 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Maintenance Coordination</li>
</ul>
<a className="block w-full py-3 bg-[#D4AF37] text-center text-xs font-bold uppercase tracking-widest transition-colors text-black hover:bg-white font-manrope" href="#contact" style={{}}>Get Started</a>
</div>

<div className="p-8 border hover:border-[#D4AF37] transition-all duration-300 bg-white border-gray-100">
<h4 className="text-lg font-semibold mb-2 font-manrope" style={{}}>Portfolio</h4>
<div className="text-3xl mb-6 font-montserrat font-medium" style={{}}>Custom</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Account Manager</li>
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Portfolio Strategy</li>
<li className="flex items-center gap-3 text-sm font-light text-gray-600 font-manrope" style={{}}><svg className="lucide lucide-check w-4 h-4 text-[#D4AF37]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Consolidated Reporting</li>
</ul>
<a className="block w-full py-3 border text-center text-xs uppercase tracking-widest transition-colors border-black hover:bg-black hover:text-white font-manrope" href="#contact" style={{}}>Contact Us</a>
</div>
</div>
<div className="text-center mt-12">
<a className="text-sm underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] font-manrope" href="#contact" style={{}}>Request a Free ROI Projection</a>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-gray-100" id="guest-booking">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-1">
<div className="bg-[#F5E9D3] p-8 sticky top-24">
<h3 className="text-xl font-medium mb-6 font-manrope" style={{}}>Book Your Stay</h3>
<form className="space-y-4">
<div className="">
<label className="block text-xs uppercase tracking-widest mb-2 font-semibold font-manrope" style={{}}>Check In</label>
<input className="w-full p-3 text-sm border-none focus:ring-1 focus:ring-[#D4AF37] bg-white" type="date"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-widest mb-2 font-semibold font-manrope" style={{}}>Check Out</label>
<input className="w-full p-3 text-sm border-none focus:ring-1 focus:ring-[#D4AF37] bg-white" type="date"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-widest mb-2 font-semibold font-manrope" style={{}}>Guests</label>
<select className="w-full p-3 text-sm border-none focus:ring-1 focus:ring-[#D4AF37] bg-white">
<option className="font-manrope" style={{}}>1 Guest</option>
<option className="font-manrope" style={{}}>2 Guests</option>
<option className="font-manrope" style={{}}>3 Guests</option>
<option className="font-manrope" style={{}}>4+ Guests</option>
</select>
</div>
<button className="w-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors bg-black text-white hover:text-black font-manrope" style={{}} type="button">
                                Search Availability
                            </button>
</form>
<div className="mt-8 border-t pt-6 border-black/10">
<h4 className="text-sm font-medium mb-4 font-manrope" style={{}}>Guest Services</h4>
<ul className="space-y-2 text-xs font-light text-gray-600">
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> High-Speed Wifi</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-coffee w-3 h-3" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg> Nespresso Machines</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-shirt w-3 h-3" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg> Hotel-grade Linen</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-2">
<h3 className="text-2xl mb-8 font-montserrat font-medium" style={{}}>Featured Collections</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img alt="Dubai Marina View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/369d88d8-45b3-45d0-8c59-a313093cf3bb_800w.jpg" style={{}}/>
<div className="absolute bottom-4 left-4 px-3 py-1 text-xs font-bold bg-white font-manrope" style={{}}>MARINA</div>
</div>
<h4 className="text-lg font-medium mb-1 font-manrope" style={{}}>Waterfront Luxury</h4>
<p className="text-xs text-gray-500 font-light font-manrope" style={{}}>Dubai holiday home booking in the heart of the Marina.</p>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img alt="Downtown Dubai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute bottom-4 left-4 px-3 py-1 text-xs font-bold bg-white font-manrope" style={{}}>DOWNTOWN</div>
</div>
<h4 className="text-lg font-medium mb-1 font-manrope" style={{}}>Burj Khalifa Views</h4>
<p className="text-xs text-gray-500 font-light font-manrope" style={{}}>Book short stay Dubai near the fountains and mall.</p>
</div>
</div>
<div className="mt-12 p-8 border bg-gray-50 border-gray-100">
<h4 className="text-sm font-bold uppercase tracking-widest mb-4 font-manrope" style={{}}>House Rules &amp; Check-in</h4>
<p className="text-sm text-gray-500 font-light mb-4 font-manrope" style={{}}>Standard check-in is from 3:00 PM and check-out is by 11:00 AM. All guests must provide valid ID prior to arrival in compliance with DTCM regulations.</p>
<a className="text-xs font-bold underline decoration-[#D4AF37] underline-offset-4 font-manrope" href="#" style={{}}>Read Full Guest Policy</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="insights">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl mb-12 font-montserrat font-medium" style={{}}>Landlord Insights</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video mb-4 overflow-hidden bg-blue-100">
<img alt="Dubai Documents" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fede5e-d294-4aa4-9166-a5b549a92c31_800w.jpg" style={{}}/>
</div>
<div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2 font-manrope" style={{}}>Licensing</div>
<h3 className="text-lg font-medium mb-2 group-hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>How to license a holiday home in Dubai</h3>
<p className="text-xs text-gray-500 font-light line-clamp-2 font-manrope" style={{}}>Dubai holiday home rules and penalties explained for new investors entering the market.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video mb-4 overflow-hidden bg-blue-100">
<img alt="Dubai Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47e7fab7-32b2-49ba-aa27-70207079bdf3_800w.jpg" style={{}}/>
</div>
<div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2 font-manrope" style={{}}>Locations</div>
<h3 className="text-lg font-medium mb-2 group-hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>Best areas in Dubai for short-term rentals</h3>
<p className="text-xs text-gray-500 font-light line-clamp-2 font-manrope" style={{}}>Dubai Airbnb profitability guide 2025: Analyzing yield across key districts.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video mb-4 overflow-hidden bg-blue-100">
<img alt="Revenue Chart" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2 font-manrope" style={{}}>Revenue</div>
<h3 className="text-lg font-medium mb-2 group-hover:text-[#D4AF37] transition-colors font-manrope" style={{}}>Transition from long let to short let</h3>
<p className="text-xs text-gray-500 font-light line-clamp-2 font-manrope" style={{}}>How landlords can transition from long let to short let in Dubai to maximize yield.</p>
</article>
</div>
</div>
</section>

<section className="text-white bg-[#0A0A0A] pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-20">
<div className="">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 font-manrope" style={{}}>Get in Touch</h2>
<h3 className="text-3xl md:text-4xl tracking-tight mb-8 font-montserrat font-medium" style={{}}>
                        Speak to a Dubai Holiday <br/> Home Expert
                    </h3>
<p className="mb-10 font-light leading-relaxed default font-manrope" style={{}}>
                        Ready to increase your yields? Contact holiday home management Dubai specialists today. We offer a complimentary Dubai short-term rental consultation to assess your property's potential.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin text-[#D4AF37] mt-1 w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<h4 className="text-sm font-medium text-white font-manrope" style={{}}>Office</h4>
<p className="text-sm font-light default font-manrope" style={{}}>Dubai, UAE</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-phone text-[#D4AF37] mt-1 w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>
<h4 className="text-sm font-medium text-white font-manrope" style={{}}>Phone</h4>
<p className="text-sm font-light default font-manrope" style={{}}>+971 52 639 0199</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-mail text-[#D4AF37] mt-1 w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<h4 className="text-sm font-medium text-white font-manrope" style={{}}>Email</h4>
<p className="text-sm font-light default font-manrope" style={{}}>info@wegoholidayhomes.com</p>
</div>
</div>
</div>

<div className="mt-12 w-full h-48 border flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity bg-blue-900 border-white/10">
<span className="text-xs tracking-widest uppercase flex items-center gap-2 default font-manrope" style={{}}>
<svg className="lucide lucide-map w-4 h-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> View on Map
                        </span>
</div>
</div>
<div className="lg:p-12 text-black bg-white pt-10 pr-10 pb-10 pl-10">
<h4 className="text-xl font-medium mb-8 font-manrope" style={{}}>Request Free ROI Estimate</h4>

<form action="https://wa.me/447404793369" className="space-y-6" method="GET" target="_blank">

<input id="waText" name="text" type="hidden"/>
<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-1 default font-manrope">Name</label>
<input className="w-full custom-input" id="name" placeholder="Full Name" required="" type="text"/>
</div>
<div className="">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-1 default font-manrope">Phone</label>
<input className="w-full custom-input" id="userPhone" placeholder="+971 ..." type="tel"/>
</div>
</div>
<div className="">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-1 default font-manrope">Email</label>
<input className="w-full custom-input" id="email" placeholder="email@address.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-1 default font-manrope">Property Location</label>
<input className="w-full custom-input" id="location" placeholder="Dubai Marina, Downtown, etc." type="text"/>
</div>
<div className="">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-1 default font-manrope">Message</label>
<textarea className="w-full custom-input resize-none" id="message" placeholder="Tell us about your property..." rows="3"></textarea>
</div>

<button className="uppercase transition-all duration-300 hover:bg-black cursor-pointer text-xs font-semibold text-white tracking-widest font-manrope bg-[#C7A349] w-full rounded mt-4 pt-4 pb-4" onclick="
                          document.getElementById('waText').value =
                          'Hi, I am requesting an ROI estimate.%0A%0A'
                          + 'Name: ' + document.getElementById('name').value + '%0A'
                          + 'Email: ' + document.getElementById('email').value + '%0A'
                          + 'Phone: ' + document.getElementById('userPhone').value + '%0A'
                          + 'Location: ' + document.getElementById('location').value + '%0A'
                          + 'Message: ' + document.getElementById('message').value;
                        " type="submit">
                            Submit Inquiry
                        </button>
<div className="text-center pt-2">
<p className="text-xs text-gray-500 font-manrope">
                                Note: This form will open WhatsApp to send the details directly to our team.
                            </p>
</div>
</form>

</div>
</div>
</div>
</section>

<footer className="py-12 border-t text-[10px] font-light uppercase tracking-widest bg-black text-white/40 border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-lg font-semibold tracking-tighter normal-case mb-2 text-white font-manrope" style={{}}>Wego Holiday <span className="text-[#D4AF37] font-manrope" style={{}}>Homes</span></span>
<p className="font-manrope" style={{}}>© 2025. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="transition-colors hover:text-white font-manrope" href="#" style={{}}>Privacy</a>
<a className="transition-colors hover:text-white font-manrope" href="#" style={{}}>Terms</a>
<a className="transition-colors hover:text-white font-manrope" href="#" style={{}}>Sitemap</a>
</div>
<div className="flex gap-4">
<svg className="lucide lucide-instagram w-4 h-4 cursor-pointer hover:text-[#D4AF37] transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-linkedin w-4 h-4 cursor-pointer hover:text-[#D4AF37] transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center bg-[#D4AF37] text-white" href="#">
<svg className="lucide lucide-message-circle fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>



    </>
  );
}
