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



        function routePage() {
            // Get hash and default to home
            let hash = window.location.hash || '#home';
            let pageId = 'page-' + hash.substring(1);
            
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(function(page) {
                page.classList.add('hidden');
            });
            
            // Show requested page, fallback to home if it doesn't exist
            let targetPage = document.getElementById(pageId);
            if(targetPage) {
                targetPage.classList.remove('hidden');
            } else {
                document.getElementById('page-home').classList.remove('hidden');
            }
            
            // Update active state on Navigation Links
            document.querySelectorAll('nav .nav-link').forEach(function(link) {
                if(link.getAttribute('href') === hash) {
                    link.classList.add('text-[#C9952A]');
                    link.classList.remove('text-[#1C1C1C]/70');
                } else {
                    link.classList.remove('text-[#C9952A]');
                    link.classList.add('text-[#1C1C1C]/70');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        // Listen for navigation changes
        window.addEventListener('hashchange', routePage);
        
        // Initial load
        window.addEventListener('DOMContentLoaded', routePage);
    
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-[#4A3728]/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 cursor-pointer" href="#home">
<iconify-icon className="text-[#C9952A] text-2xl" icon="solar:paw-linear"></iconify-icon>
<span className="tracking-tighter font-medium text-xl text-[#4A3728]" style={{fontFamily: '\'Playfair Display\', serif'}}>WILDPATH</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="nav-link hover:text-[#C9952A] transition-colors text-[#C9952A]" href="#home">Home</a>
<a className="nav-link text-[#1C1C1C]/70 hover:text-[#C9952A] transition-colors" href="#destinations">Destinations</a>
<a className="nav-link text-[#1C1C1C]/70 hover:text-[#C9952A] transition-colors" href="#tours">Tours</a>
<a className="nav-link text-[#1C1C1C]/70 hover:text-[#C9952A] transition-colors" href="#about">About</a>
<a className="nav-link text-[#1C1C1C]/70 hover:text-[#C9952A] transition-colors" href="#impact">Responsibility</a>
<a className="nav-link text-[#1C1C1C]/70 hover:text-[#C9952A] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#4A3728]/5 transition-colors text-[#1C1C1C]/70">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<a className="hidden md:block bg-[#C9952A] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#b08020] transition-colors shadow-sm" href="#tours">
                    Book a Safari
                </a>
<button className="md:hidden flex items-center justify-center w-10 h-10 text-[#1C1C1C]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="min-h-screen" id="app-root">

<div className="page-view" id="page-home">

<header className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Savannah sunrise with wildlife" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-gradient-to-b from-black/30 via-black/20 to-[#4A3728]/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mt-16">
<h1 className="text-5xl md:text-7xl tracking-tight text-white mb-6 font-medium drop-shadow-sm" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Where the Wild Calls You Home
                    </h1>
<p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        Handcrafted safari experiences across Africa's most extraordinary wilderness — ethical, unforgettable, yours.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#C9952A] text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-[#b08020] transition-colors shadow-lg shadow-black/10 text-center" href="#tours">
                            Explore Our Safaris
                        </a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-white/20 transition-colors text-center" href="#about">
                            Our Story
                        </a>
</div>
</div>
</header>

<div className="relative z-20 max-w-5xl mx-auto px-6 -mt-16 md:-mt-12">
<div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#4A3728]/5 p-2 flex flex-col md:flex-row items-center gap-2 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9952A]"></div>
<div className="w-full md:w-1/4 flex items-center gap-3 px-4 py-3 hover:bg-[#F5F0E8]/50 rounded-md cursor-pointer transition-colors border-b md:border-b-0 md:border-r border-[#4A3728]/10">
<iconify-icon className="text-[#C9952A] text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-[#1C1C1C]/50" style={{fontFamily: '\'Montserrat\', sans-serif'}}>DESTINATION</span>
<span className="text-sm font-medium text-[#4A3728]">Anywhere</span>
</div>
</div>
<div className="w-full md:w-1/4 flex items-center gap-3 px-4 py-3 hover:bg-[#F5F0E8]/50 rounded-md cursor-pointer transition-colors border-b md:border-b-0 md:border-r border-[#4A3728]/10">
<iconify-icon className="text-[#C9952A] text-xl" icon="solar:camera-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-[#1C1C1C]/50" style={{fontFamily: '\'Montserrat\', sans-serif'}}>ACTIVITY</span>
<span className="text-sm font-medium text-[#4A3728]">All Experiences</span>
</div>
</div>
<div className="w-full md:w-1/4 flex items-center gap-3 px-4 py-3 hover:bg-[#F5F0E8]/50 rounded-md cursor-pointer transition-colors border-b md:border-b-0 border-[#4A3728]/10">
<iconify-icon className="text-[#C9952A] text-xl" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-[#1C1C1C]/50" style={{fontFamily: '\'Montserrat\', sans-serif'}}>TRAVEL MONTH</span>
<span className="text-sm font-medium text-[#4A3728]">Select Dates</span>
</div>
</div>
<div className="w-full md:w-1/4 p-2">
<a className="w-full bg-[#4A3728] text-white h-12 rounded-md text-sm font-medium hover:bg-[#36271c] transition-colors flex items-center justify-center gap-2" href="#tours">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
                            Search Safaris
                        </a>
</div>
</div>
</div>

<section className="py-24 bg-[#F5F0E8]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-2 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Iconic Regions</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-[#4A3728] font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>Explore the Wilderness</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-[#4A3728] hover:text-[#C9952A] transition-colors" href="#destinations">
                            View All Destinations <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar" style={{scrollbarWidth: 'none'}}>
<a className="snap-start shrink-0 w-[280px] md:w-[320px] h-[400px] relative rounded-lg overflow-hidden group border border-[#4A3728]/5 shadow-sm block" href="#destinations">
<img alt="Kenya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Kenya</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>14 Tours Available</p>
</div>
</a>
<a className="snap-start shrink-0 w-[280px] md:w-[320px] h-[400px] relative rounded-lg overflow-hidden group border border-[#4A3728]/5 shadow-sm block" href="#destinations">
<img alt="Tanzania" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Tanzania</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>22 Tours Available</p>
</div>
</a>
<a className="snap-start shrink-0 w-[280px] md:w-[320px] h-[400px] relative rounded-lg overflow-hidden group border border-[#4A3728]/5 shadow-sm block" href="#destinations">
<img alt="Botswana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Botswana</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>8 Tours Available</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#4A3728]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div>
<div className="w-12 h-12 bg-[#F5F0E8] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-[#C9952A] text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#4A3728] mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Expert Local Guides</h3>
<p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">Born from these lands, our guides carry generational knowledge and intuition no guidebook can match.</p>
</div>
<div>
<div className="w-12 h-12 bg-[#F5F0E8] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-[#C9952A] text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#4A3728] mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Ethical &amp; Sustainable</h3>
<p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">Every journey is meticulously designed to protect and enrich the fragile ecosystems you come to witness.</p>
</div>
<div>
<div className="w-12 h-12 bg-[#F5F0E8] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-[#C9952A] text-2xl" icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#4A3728] mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Fully Tailored</h3>
<p className="text-sm text-[#1C1C1C]/70 leading-relaxed font-light">No two safaris are the same. We craft your itinerary intimately around your pace, passions, and people.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden pt-28 pb-24 bg-[#F5F0E8]" id="page-destinations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-2 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Our Regions</span>
<h1 className="text-4xl md:text-5xl tracking-tight text-[#4A3728] font-medium mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Destinations</h1>
<p className="text-sm text-[#1C1C1C]/70 font-light leading-relaxed">From the sweeping plains of the Serengeti to the mist-shrouded mountains of Rwanda, discover the landscapes that shape our profound connection to the wild.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="Kenya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Kenya</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>14 Tours Available</p>
</div>
</div>
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="Tanzania" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Tanzania</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>22 Tours Available</p>
</div>
</div>
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="Botswana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Botswana</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>8 Tours Available</p>
</div>
</div>
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="Rwanda" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Rwanda</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>5 Tours Available</p>
</div>
</div>
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="Namibia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577971132997-c10be9372519?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Namibia</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>6 Tours Available</p>
</div>
</div>
<div className="h-[400px] relative rounded-lg overflow-hidden group cursor-pointer border border-[#4A3728]/5 shadow-sm">
<img alt="South Africa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl text-white font-medium mb-1 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>South Africa</h3>
<p className="text-xs text-white/80" style={{fontFamily: '\'Montserrat\', sans-serif'}}>11 Tours Available</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden pt-28 pb-24 bg-[#F5F0E8]" id="page-tours">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-2 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Featured Journey</span>
<h1 className="text-3xl md:text-5xl tracking-tight text-[#4A3728] font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>The Great Migration Expedition</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-8 space-y-8">

<div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
<div className="col-span-2 aspect-[21/9]">
<img alt="Wildebeest migration" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="aspect-[4/3]">
<img alt="Safari camp" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-[4/3] relative">
<img alt="Cheetah" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
<span className="text-white text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear"></iconify-icon> View All 12 Photos
                                    </span>
</div>
</div>
</div>

<div className="border-b border-[#4A3728]/10 flex gap-8">
<button className="pb-3 border-b-2 border-[#C9952A] text-sm font-medium text-[#4A3728]">Overview</button>
<button className="pb-3 border-b-2 border-transparent text-sm text-[#1C1C1C]/50 hover:text-[#4A3728] transition-colors">Itinerary</button>
<button className="pb-3 border-b-2 border-transparent text-sm text-[#1C1C1C]/50 hover:text-[#4A3728] transition-colors">Inclusions</button>
</div>

<div className="prose prose-sm max-w-none text-[#1C1C1C]/80 font-light leading-relaxed">
<p>Witness one of nature's most spectacular events. This 9-day journey places you in the heart of the Serengeti and Maasai Mara as millions of wildebeest and zebras cross the plains in search of fresh rain. Accompanied by top-tier naturalist guides, you'll stay in exclusive mobile tented camps that move with the herds.</p>
<h4 className="text-lg text-[#4A3728] font-medium mt-6 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Journey Highlights</h4>
<ul className="space-y-2 list-none p-0">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9952A] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Front-row seats to river crossings at the Mara River.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9952A] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Exclusive, low-impact private mobile camps.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9952A] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Hot air balloon safari at dawn over the Serengeti plains.</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-4">
<div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#4A3728]/5 p-6 sticky top-28">
<div className="flex justify-between items-start border-b border-[#4A3728]/10 pb-4 mb-6">
<div>
<span className="text-xs text-[#1C1C1C]/50 block mb-1" style={{fontFamily: '\'Montserrat\', sans-serif'}}>PRICE FROM</span>
<span className="text-3xl text-[#4A3728] font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>$8,450</span>
<span className="text-xs text-[#1C1C1C]/50">/ person</span>
</div>
<div className="flex flex-col items-end text-xs text-[#1C1C1C]/60 space-y-1">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 9 Days</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Max 6 Guests</span>
</div>
</div>
<form className="space-y-4">
<div>
<label className="text-xs font-medium text-[#1C1C1C]/70 block mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>SELECT DATES</label>
<div className="relative">
<select className="w-full appearance-none bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-3 py-2.5 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] text-[#1C1C1C] cursor-pointer">
<option>July 14 - July 22, 2024</option>
<option>August 02 - August 10, 2024</option>
<option>August 18 - August 26, 2024</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C1C1C]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex gap-4">
<div className="w-1/2">
<label className="text-xs font-medium text-[#1C1C1C]/70 block mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>GUESTS</label>
<div className="relative">
<select className="w-full appearance-none bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-3 py-2.5 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] text-[#1C1C1C] cursor-pointer">
<option>2 Adults</option>
<option>1 Adult</option>
<option>Custom</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C1C1C]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-1/2">
<label className="text-xs font-medium text-[#1C1C1C]/70 block mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>ROOMS</label>
<div className="relative">
<select className="w-full appearance-none bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-3 py-2.5 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] text-[#1C1C1C] cursor-pointer">
<option>1 Double</option>
<option>2 Singles</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C1C1C]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-[#4A3728] text-white py-3 rounded-md text-sm font-medium hover:bg-[#36271c] transition-colors mt-2" type="button">
                                    Request a Quote
                                </button>
</form>
<div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#1C1C1C]/50">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure Booking</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Expert Support</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden pt-28 pb-24 bg-white" id="page-about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
<div>
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-2 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Our Story</span>
<h1 className="text-4xl md:text-5xl tracking-tight text-[#4A3728] font-medium mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Born in the Bush</h1>
<p className="text-sm text-[#1C1C1C]/70 font-light leading-relaxed mb-4">WildPath was born from a simple realization around a campfire in the Maasai Mara: travel had become too disconnected from the land itself.</p>
<p className="text-sm text-[#1C1C1C]/70 font-light leading-relaxed mb-8">For over 18 years, our founders, former naturalists and conservationists, have been quietly curating safaris that strip away the artificial and return to the authentic rhythm of the wild. We don't just know the trails; we know the people, the hidden valleys, and the delicate balance required to exist in these spaces sustainably.</p>
<div className="flex items-center gap-4 border-l-2 border-[#C9952A] pl-4 py-2">
<p className="text-sm italic font-medium text-[#4A3728] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>"We don't bring you to observe the wild, we bring you to become a part of it again."</p>
</div>
</div>
<div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg border border-[#4A3728]/5">
<img alt="Safari Guide" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547471080-7cb2cb6a5615?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="pt-10 border-t border-[#4A3728]/10 flex flex-wrap justify-between gap-8 text-center bg-[#F5F0E8] p-12 rounded-lg">
<div className="flex-1 min-w-[120px]">
<span className="block text-4xl text-[#4A3728] font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>2,400+</span>
<span className="text-xs text-[#1C1C1C]/60 tracking-wider" style={{fontFamily: '\'Montserrat\', sans-serif'}}>GUESTS GUIDED</span>
</div>
<div className="flex-1 min-w-[120px]">
<span className="block text-4xl text-[#4A3728] font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>18</span>
<span className="text-xs text-[#1C1C1C]/60 tracking-wider" style={{fontFamily: '\'Montserrat\', sans-serif'}}>YEARS EXPERIENCE</span>
</div>
<div className="flex-1 min-w-[120px]">
<span className="block text-4xl text-[#4A3728] font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>97%</span>
<span className="text-xs text-[#1C1C1C]/60 tracking-wider" style={{fontFamily: '\'Montserrat\', sans-serif'}}>5-STAR REVIEWS</span>
</div>
<div className="flex-1 min-w-[120px]">
<span className="block text-4xl text-[#4A3728] font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>12</span>
<span className="text-xs text-[#1C1C1C]/60 tracking-wider" style={{fontFamily: '\'Montserrat\', sans-serif'}}>COUNTRIES</span>
</div>
</div>
</div>
</div>

<div className="page-view hidden bg-[#2D5016] min-h-screen text-white pt-28 pb-32 relative overflow-hidden" id="page-impact">
<div className="absolute inset-0 opacity-20">
<img alt="Jungle canopy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-4 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Our Commitment</span>
<h1 className="text-4xl md:text-6xl tracking-tight font-medium mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Conservation is Not a Checkbox.<br/>It's Our Core.</h1>
<p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                    We believe that travel must leave a place better than it found it. A portion of every journey funds anti-poaching units, protects wildlife corridors, and empowers local communities.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-lg transition-transform hover:-translate-y-1">
<iconify-icon className="text-[#C9952A] text-4xl mb-6" icon="solar:shield-leaf-linear"></iconify-icon>
<h3 className="text-xl font-medium mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Wildlife Protection</h3>
<p className="text-sm text-white/70 leading-relaxed font-light">Funding 12 active anti-poaching units across East and Southern Africa, successfully reducing poaching in our operational regions by 42% since 2018.</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-lg transition-transform hover:-translate-y-1">
<iconify-icon className="text-[#C9952A] text-4xl mb-6" icon="solar:hand-heart-linear"></iconify-icon>
<h3 className="text-xl font-medium mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Community Rooted</h3>
<p className="text-sm text-white/70 leading-relaxed font-light">Maintaining 70% local employment within our camps, and providing direct, transparent funding to 3 regional schools in the Maasai Mara ecosystem.</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-lg transition-transform hover:-translate-y-1">
<iconify-icon className="text-[#C9952A] text-4xl mb-6" icon="solar:earth-linear"></iconify-icon>
<h3 className="text-xl font-medium mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Carbon Neutral</h3>
<p className="text-sm text-white/70 leading-relaxed font-light">100% offset operations since 2020 through certified Gold Standard reforestation programs in central Kenya.</p>
</div>
</div>
<button className="mt-16 bg-transparent border border-[#C9952A] text-[#C9952A] px-8 py-3.5 rounded-md text-sm font-medium hover:bg-[#C9952A] hover:text-white transition-colors">
                    Download 2023 Impact Report
                </button>
</div>
</div>

<div className="page-view hidden pt-28 pb-24 bg-white" id="page-contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-8">
<div>
<span className="text-xs text-[#C9952A] tracking-widest uppercase mb-2 block" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Start the Conversation</span>
<h1 className="text-4xl md:text-5xl tracking-tight text-[#4A3728] font-medium mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Talk to an Expert</h1>
<p className="text-sm text-[#1C1C1C]/70 mb-10 font-light leading-relaxed">Our team of field experts responds within 4 hours. Most questions are answered in a single call to help shape your perfect journey.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-[#1C1C1C]/70 mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>FIRST NAME</label>
<input className="w-full bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-4 py-3 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#1C1C1C]/70 mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>LAST NAME</label>
<input className="w-full bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-4 py-3 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#1C1C1C]/70 mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>EMAIL ADDRESS</label>
<input className="w-full bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-4 py-3 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#1C1C1C]/70 mb-1.5" style={{fontFamily: '\'Montserrat\', sans-serif'}}>TELL US ABOUT YOUR DREAM SAFARI</label>
<textarea className="w-full bg-[#F5F0E8]/50 border border-[#4A3728]/10 text-sm rounded-md px-4 py-3 outline-none focus:border-[#C9952A] focus:ring-1 focus:ring-[#C9952A] transition-all resize-none" rows="5"></textarea>
</div>
<button className="bg-[#4A3728] text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-[#36271c] transition-colors w-full md:w-auto" type="button">
                            Send Enquiry
                        </button>
</form>
</div>

<div className="relative h-[700px] rounded-lg overflow-hidden flex flex-col justify-end p-8 border border-[#4A3728]/5 shadow-sm">
<img alt="Elephant close up" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-3xl text-white font-medium mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Join the Newsletter</h3>
<p className="text-sm text-white/80 mb-6 font-light leading-relaxed">Get exclusive safari guides, conservation stories, and early access to bespoke journeys straight to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-3">
<input className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm rounded-md px-4 py-3 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="Your email address" type="email"/>
<button className="bg-[#C9952A] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#b08020] transition-colors shrink-0">
                                Subscribe
                            </button>
</div>
<p className="text-[10px] text-white/50 mt-3 tracking-wider">NO SPAM. JUST WILD STORIES.</p>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#4A3728] text-[#F5F0E8] pt-20 pb-8 border-t-[6px] border-[#C9952A]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#C9952A] text-2xl" icon="solar:paw-linear"></iconify-icon>
<span className="tracking-tighter font-medium text-xl" style={{fontFamily: '\'Playfair Display\', serif'}}>WILDPATH</span>
</div>
<p className="text-xs text-[#F5F0E8]/70 leading-relaxed font-light mb-6">
                        Crafting exceptional, low-impact safari experiences across Africa. We believe in transformative travel that protects the wild.
                    </p>
<div className="flex gap-4">
<a className="text-[#F5F0E8]/50 hover:text-[#C9952A] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-[#F5F0E8]/50 hover:text-[#C9952A] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase mb-4 text-[#C9952A]" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Company</h4>
<ul className="space-y-3 text-sm font-light text-[#F5F0E8]/70">
<li><a className="hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Meet the Team</a></li>
<li><a className="hover:text-white transition-colors" href="#impact">Conservation Impact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase mb-4 text-[#C9952A]" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Destinations</h4>
<ul className="space-y-3 text-sm font-light text-[#F5F0E8]/70">
<li><a className="hover:text-white transition-colors" href="#destinations">Kenya</a></li>
<li><a className="hover:text-white transition-colors" href="#destinations">Tanzania</a></li>
<li><a className="hover:text-white transition-colors" href="#destinations">Botswana</a></li>
</ul>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase mb-4 text-[#C9952A]" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Contact</h4>
<ul className="space-y-3 text-sm font-light text-[#F5F0E8]/70">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-lg shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Nairobi Headquarters<br/>Karen, P.O Box 12345</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>+254 700 000 000</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>discover@wildpath.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E8]/50 font-light">
<p>© 2024 WildPath Journeys. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
