import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#111e1d] text-slate-400 py-2 px-6 text-xs flex justify-between items-center hidden md:flex border-b border-white/5">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Sun to Friday: 8:00 am - 7:00 pm</span>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#cda036]" data-lucide="map-pin" strokeWidth="1.5"></i> Kathmandu: 01:15 PM</span>
<a className="hover:text-[#cda036] transition-colors" href="#">FAQ</a>
<a className="flex items-center gap-1.5 hover:text-[#cda036] transition-colors" href="#"><i className="w-3.5 h-3.5" data-lucide="headphones" strokeWidth="1.5"></i> Support</a>
<div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
<span>EN</span> <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<nav className="bg-[#152524]/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group">
<i className="w-5 h-5 group-hover:text-[#cda036]" data-lucide="menu" strokeWidth="1.5"></i> MENU
                </button>
<div className="hidden md:flex items-center gap-1 cursor-pointer text-sm text-slate-300 hover:text-white transition-colors">
                    TREKS <i className="w-3.5 h-3.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
<div className="w-10 h-10 border border-[#cda036] rounded-full flex items-center justify-center mb-1">
<i className="w-5 h-5 text-[#cda036]" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
<div className="text-white font-medium tracking-widest text-xs uppercase text-center leading-none">
                    Himalayan<br/><span className="text-[10px] text-slate-400">Peaks Co.</span>
</div>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-1 cursor-pointer text-sm text-slate-300 hover:text-white transition-colors">
                    COMPANY <i className="w-3.5 h-3.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="flex items-center gap-2 text-sm text-white hover:text-[#cda036] transition-colors" href="#">
                    BOOKING <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</nav>

<header className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<img alt="Himalayas" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[-10vh]">
<div className="flex items-center justify-center mb-8">
<button className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm group">
<i className="w-6 h-6 text-white group-hover:text-[#cda036] ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Exclusive &amp; Authentic<br/>Himalayan Expeditions
            </h1>
<p className="text-base md:text-lg text-slate-200 font-light max-w-2xl mx-auto">
                Himalayan Peaks is a premium trekking agency designed to help you discover the majestic mountains and recover your spirit with great adventures.
            </p>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
<span className="text-xs text-white [writing-mode:vertical-lr] rotate-180 tracking-widest uppercase">Scroll Down</span>
<div className="w-[1px] h-12 bg-white/30 relative">
<div className="absolute top-0 left-0 w-full h-1/2 bg-[#cda036]"></div>
</div>
</div>

<div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cda036] transition-colors" href="#"><i className="w-4 h-4 text-white" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cda036] transition-colors" href="#"><i className="w-4 h-4 text-white" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cda036] transition-colors" href="#"><i className="w-4 h-4 text-white" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</header>

<div className="relative z-30 max-w-[1200px] mx-auto px-4 -mt-16 sm:-mt-12">
<div className="bg-[#12201e] border border-white/5 p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-end relative">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#cda036] rounded-t-sm flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="w-full lg:w-1/5">
<label className="block text-xs text-[#cda036] mb-2 uppercase tracking-wider">Region</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">Everest Region</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full lg:w-1/5">
<label className="block text-xs text-[#cda036] mb-2 uppercase tracking-wider">Start Date</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">15 Oct 2024</span>
<i className="w-4 h-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full lg:w-1/5">
<label className="block text-xs text-[#cda036] mb-2 uppercase tracking-wider">Trekkers</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">02 Adults</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full lg:w-1/5">
<label className="block text-xs text-[#cda036] mb-2 uppercase tracking-wider">Duration</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">10 - 15 Days</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full lg:w-1/5 h-[46px]">
<button className="w-full h-full bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase transition-colors">
                    Find Treks
                </button>
</div>
</div>
</div>

<section className="py-24 max-w-[1400px] mx-auto px-6 relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> PREMIUM ADVENTURES
                </span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Popular Trails &amp; Routes</h2>
</div>
<div className="text-[#243c3a] text-6xl md:text-8xl font-medium tracking-tighter opacity-30 select-none absolute right-6 top-12 pointer-events-none">
                Popular routes &amp; trails
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-[#162524] relative overflow-hidden">
<div className="relative h-[300px] overflow-hidden">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 text-center border-t-2 border-[#1a2c2b]">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Everest Base Camp</h3>
<p className="text-sm text-slate-400">Price Starts at $1,290</p>
</div>
</div>

<div className="group bg-[#162524] relative overflow-hidden">
<div className="relative h-[300px] overflow-hidden">
<img alt="Annapurna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-6 text-center border-t-2 border-[#1a2c2b]">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Annapurna Circuit</h3>
<p className="text-sm text-slate-400">Price Starts at $990</p>
</div>
</div>

<div className="group bg-[#162524] relative overflow-hidden">
<div className="relative h-[300px] overflow-hidden">
<img alt="Langtang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 text-center border-t-2 border-[#1a2c2b]">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Langtang Valley</h3>
<p className="text-sm text-slate-400">Price Starts at $750</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#142221]">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[500px] w-full">
<div className="absolute top-0 left-0 w-4/5 h-[400px] overflow-hidden border border-white/5">
<img alt="Trekking Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-[55%] h-[280px] border-8 border-[#142221] overflow-hidden bg-[#162524] z-10 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
<div className="w-12 h-12 border border-[#cda036] rounded-full flex items-center justify-center mb-3">
<i className="w-6 h-6 text-[#cda036]" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-medium text-lg tracking-tight leading-tight">Award Winning<br/>Agency Since 1999</h4>
</div>

<div className="absolute -left-4 top-20 w-8 h-20 bg-[#cda036] opacity-80"></div>
</div>

<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-[#cda036]"></span> ABOUT HIMALAYAN PEAKS
                </span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                    Welcome To The Heart<br/>Of The Himalayas
                </h2>
<p className="text-base text-slate-400 leading-relaxed mb-6">
                    Based in Kathmandu, Himalayan Peaks is a premier trekking and expedition company. We offer an exclusive and authentic experience in the world's most dramatic landscapes, where the focus is on safety, culture, and profound personal achievement.
                </p>
<p className="text-base text-slate-400 leading-relaxed mb-10">
                    You can expect expert guidance, premium logistics, and a commitment to sustainable tourism when you journey with us. Our approach combines traditional Sherpa hospitality with modern expedition standards.
                </p>

<div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/5">
<div>
<div className="text-3xl md:text-4xl text-[#cda036] font-medium tracking-tight mb-1">250+</div>
<div className="text-sm text-slate-400">Routes Explored</div>
</div>
<div>
<div className="text-3xl md:text-4xl text-[#cda036] font-medium tracking-tight mb-1">4.9+</div>
<div className="text-sm text-slate-400">Guest Rating</div>
</div>
<div>
<div className="text-3xl md:text-4xl text-[#cda036] font-medium tracking-tight mb-1">15k+</div>
<div className="text-sm text-slate-400">Happy Trekkers</div>
</div>
</div>
<div className="flex items-center gap-6">
<a className="bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase px-8 py-3.5 transition-colors flex items-center gap-2" href="#">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-white text-xs font-medium tracking-wider uppercase flex items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-8 py-3.5" href="#">
                        Explore Team <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> DISCOVER PACKAGES
                </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Stay Packages At<br/>Base Camps</h2>
</div>
<a className="hidden md:flex text-white text-xs font-medium tracking-wider uppercase items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-6 py-2.5" href="#">
                Explore All <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-8">

<div className="min-w-[80px] md:min-w-[100px] h-[400px] bg-[#162524] flex items-center justify-center border border-white/5 relative group cursor-pointer snap-start shrink-0">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="text-white text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 z-10 whitespace-nowrap">A Seamless Experience</span>
<span className="absolute top-6 text-[#cda036] text-[10px] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 z-10">Special Offers</span>
</div>

<div className="min-w-[300px] md:min-w-[600px] h-[400px] relative group overflow-hidden snap-start shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111e1d] via-[#111e1d]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-2">
<span className="w-4 h-[1px] bg-[#cda036]"></span> Special Offers
                        </span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Helicopter Tour &amp; Spa Day</h3>
<div className="text-sm text-slate-300 flex items-center gap-3">
<span>From $1,200</span> <span className="w-1 h-1 rounded-full bg-slate-500"></span> <span>2 Persons</span> <span className="w-1 h-1 rounded-full bg-slate-500"></span> <span>Full Day</span>
</div>
</div>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
<i className="w-5 h-5 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="min-w-[80px] md:min-w-[100px] h-[400px] bg-[#162524] flex items-center justify-center border border-white/5 relative group cursor-pointer snap-start shrink-0">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
<span className="text-white text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 z-10 whitespace-nowrap">Events &amp; Activities</span>
<span className="absolute top-6 text-[#cda036] text-[10px] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 z-10">Special Offers</span>
</div>
<div className="min-w-[300px] h-[400px] relative group overflow-hidden snap-start shrink-0 border border-white/5">
<img className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#cda036] transition-colors">
<i className="w-5 h-5 text-white" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-6 border-t border-white/10 pt-6">
<div className="w-8 h-8 rounded-full bg-[#cda036] flex items-center justify-center cursor-pointer">
<i className="w-4 h-4 text-white" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
<div className="flex-1 mx-6 bg-white/10 h-[1px]">
<div className="w-1/4 h-[1px] bg-[#cda036]"></div>
</div>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="py-24 bg-[#142221] relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
<span className="text-[150px] font-medium tracking-tighter">CELEBRATIONS EVENTS CELEBRATIONS</span>
</div>
<div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 mb-16">
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center justify-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> TREK AMENITIES <span className="w-8 h-[1px] bg-[#cda036]"></span>
</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">All Included Services</h2>
<p className="text-base text-slate-400 max-w-2xl mx-auto">
                A lavish experience is our priority. We provide our clients with several first-rate services to ensure the ideal vacation in the mountains.
            </p>
</div>
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
<div className="flex flex-col gap-8 mt-12">
<div className="flex items-center gap-4 justify-end text-right group cursor-pointer">
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#cda036] transition-colors">Expert Guides</h4>
<p className="text-xs text-slate-500">Certified local professionals</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1a2c2b] group-hover:border-[#cda036] transition-colors shrink-0">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#cda036]" data-lucide="users" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-center gap-4 justify-end text-right group cursor-pointer">
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#cda036] transition-colors">Premium Gear</h4>
<p className="text-xs text-slate-500">High-altitude equipment</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1a2c2b] group-hover:border-[#cda036] transition-colors shrink-0">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#cda036]" data-lucide="backpack" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative border border-white/10 p-2 bg-[#1a2c2b]">
<img className="w-full h-[300px] object-cover" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-[#111e1d]/90 backdrop-blur-sm p-4 text-center border-t border-white/10">
<h4 className="text-white font-medium text-sm">Full Board Meals</h4>
<p className="text-xs text-slate-400 mt-1">Nutritious mountain diet</p>
</div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#cda036] rounded-full border-4 border-[#142221] flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col gap-8 mt-12">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1a2c2b] group-hover:border-[#cda036] transition-colors shrink-0">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#cda036]" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#cda036] transition-colors">Permits Sorted</h4>
<p className="text-xs text-slate-500">All TIMS &amp; National Park fees</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#1a2c2b] group-hover:border-[#cda036] transition-colors shrink-0">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#cda036]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-[#cda036] transition-colors">Safety First</h4>
<p className="text-xs text-slate-500">Oximeters &amp; First Aid kits</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative h-[400px] border border-white/10 group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-[12px] border-transparent group-hover:border-white/10 transition-all duration-500">
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Corporate Retreats<br/>In The Mountains</h3>
<p className="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">Experience formal business meetings with a completely different atmosphere. Beautiful spaces and quality food.</p>
<a className="text-white text-xs font-medium tracking-wider uppercase border border-white/30 hover:border-white px-6 py-2.5 transition-colors" href="#">See More</a>
</div>
</div>

<div className="relative h-[400px] border border-white/10 group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-[12px] border-transparent group-hover:border-white/10 transition-all duration-500">
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Organize Private<br/>Group Treks</h3>
<p className="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">We know how important your event is for you, whether it is a jubilee, anniversary or reunion.</p>
<a className="bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase px-6 py-2.5 transition-colors" href="#">See More</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#142221]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> TESTIMONIALS
                    </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">Explore More, Worry Less<br/>Book A Trek Now</h2>
</div>
<a className="hidden md:flex text-white text-xs font-medium tracking-wider uppercase items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-6 py-2.5 mt-6 md:mt-0" href="#">
                    View All <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1a2c2b] border border-white/5 p-8 flex flex-col justify-between opacity-50 hover:opacity-100 transition-opacity">
<div>
<i className="w-10 h-10 text-[#cda036] mb-6 fill-[#cda036]/20" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-slate-400 leading-relaxed italic mb-8">
                            "Ready to book your vacation? Our trekking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful experience."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-12 h-12 rounded-full border-2 border-white/10" src="https://i.pravatar.cc/150?img=11"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#cda036] rounded-full flex items-center justify-center text-[8px] font-medium text-white border-2 border-[#1a2c2b]">4.8</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Jonathan Smith</h4>
<p className="text-xs text-slate-500">Trekker</p>
</div>
</div>
</div>

<div className="bg-[#1a2c2b] border border-white/10 p-8 flex flex-col justify-between shadow-lg relative transform md:-translate-y-4">
<div className="absolute top-0 left-0 w-full h-1 bg-[#cda036]"></div>
<div>
<i className="w-10 h-10 text-[#cda036] mb-6 fill-[#cda036]/20" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-white leading-relaxed italic mb-8">
                            "Perfect place for a business trip! The location was convenient, and the guides were reliable. I had everything I needed, from a quiet workspace to a great breakfast in the morning."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-12 h-12 rounded-full border-2 border-[#cda036]" src="https://i.pravatar.cc/150?img=33"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#cda036] rounded-full flex items-center justify-center text-[8px] font-medium text-white border-2 border-[#1a2c2b]">4.8</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Marshell Jack</h4>
<p className="text-xs text-slate-400">Expedition Leader</p>
</div>
</div>
</div>

<div className="bg-[#1a2c2b] border border-white/5 p-8 flex flex-col justify-between opacity-50 hover:opacity-100 transition-opacity">
<div>
<i className="w-10 h-10 text-[#cda036] mb-6 fill-[#cda036]/20" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-slate-400 leading-relaxed italic mb-8">
                            "Ready to book your vacation? Our trekking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful experience."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-12 h-12 rounded-full border-2 border-white/10" src="https://i.pravatar.cc/150?img=44"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#cda036] rounded-full flex items-center justify-center text-[8px] font-medium text-white border-2 border-[#1a2c2b]">4.8</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">William Jenny</h4>
<p className="text-xs text-slate-500">Hiker</p>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-8">
<div className="w-8 h-8 rounded-full bg-[#cda036] flex items-center justify-center cursor-pointer">
<i className="w-4 h-4 text-white" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12">

<div className="w-full md:w-1/3 flex flex-col justify-end pb-8">
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> INSTAGRAM
                </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Awesome Gallery</h2>
<p className="text-sm text-slate-400 mb-8 max-w-sm">We provide you with the best quality of services and facilities for all your travel and place needs.</p>
<div className="mt-auto hidden md:block">
<h3 className="text-xl font-medium text-white mb-4">@HimalayanPeaks</h3>
<a className="inline-flex text-white text-xs font-medium tracking-wider uppercase items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-6 py-2.5" href="#">
                        Explore More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="w-full md:w-2/3 grid grid-cols-2 gap-4 auto-rows-[200px]">

<div className="row-span-2 relative group overflow-hidden bg-[#162524]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden bg-[#162524] flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="z-10 w-12 h-12 bg-black/40 rounded flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-6 h-6 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>

<div className="relative group overflow-hidden bg-[#162524]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
</div>

<div className="row-span-2 relative group overflow-hidden bg-[#162524]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden bg-[#162524]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="mt-6 md:hidden">
<h3 className="text-xl font-medium text-white mb-4">@HimalayanPeaks</h3>
<a className="inline-flex text-white text-xs font-medium tracking-wider uppercase items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-6 py-2.5" href="#">
                    Explore More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#142221]">
<div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-medium tracking-widest uppercase text-sm"><i className="w-5 h-5 text-[#cda036]" data-lucide="mountain-snow" strokeWidth="1.5"></i> North Face</div>
<div className="flex items-center gap-2 text-white font-medium tracking-widest uppercase text-sm"><i className="w-5 h-5 text-[#cda036]" data-lucide="compass" strokeWidth="1.5"></i> Osprey</div>
<div className="flex items-center gap-2 text-white font-medium tracking-widest uppercase text-sm"><i className="w-5 h-5 text-[#cda036]" data-lucide="map" strokeWidth="1.5"></i> Garmin</div>
<div className="flex items-center gap-2 text-white font-medium tracking-widest uppercase text-sm"><i className="w-5 h-5 text-[#cda036]" data-lucide="sun" strokeWidth="1.5"></i> Patagonia</div>
<div className="flex items-center gap-2 text-white font-medium tracking-widest uppercase text-sm"><i className="w-5 h-5 text-[#cda036]" data-lucide="tent" strokeWidth="1.5"></i> MSR</div>
</div>
</div>

<section className="py-24 bg-[#111e1d] relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-30 pointer-events-none">
<img className="w-full h-full object-cover [mask-image:linear-gradient(to_left,white,transparent)]" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="bg-[#162524] border border-white/5 p-8 md:p-10 shadow-2xl relative">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#cda036] rounded-t-sm flex items-center justify-center"></div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center justify-center gap-2 mb-6">
                    TREK RESERVATION
                </span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-8 text-center border-b border-white/5 pb-6">Check Availability</h3>
<form className="space-y-5">
<div>
<label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">Arrival Date</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3.5 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">19 Dec 2024</span>
<i className="w-4 h-4 text-slate-500" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">Departure Date</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3.5 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">21 Dec 2024</span>
<i className="w-4 h-4 text-slate-500" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">Trekkers</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3.5 flex items-center justify-between cursor-pointer">
<span className="text-sm text-white">Adult 01</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">Guide Level</label>
<div className="relative bg-[#192b2a] border border-white/5 p-3.5 flex items-center justify-between cursor-pointer mb-8">
<span className="text-sm text-white">Senior Guide</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<button className="w-full bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase py-4 transition-colors" type="submit">
                        Check Availability
                    </button>
</form>
</div>

<div className="flex flex-col justify-center">
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-[#cda036]"></span> BOOKING ROOM
                </span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                    Excellence In Every<br/>Moment Of Your Trek
                </h2>
<div className="flex items-center gap-6 mt-4">
<div className="w-14 h-14 rounded-full border border-[#cda036] flex items-center justify-center bg-[#1a2c2b]">
<i className="w-6 h-6 text-[#cda036]" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Booking Now</p>
<p className="text-xl text-white font-medium tracking-wide">+00123 456 789</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-[#cda036] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
<span className="w-8 h-[1px] bg-[#cda036]"></span> BLOG &amp; NEWS
                </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">Room Refresh Service Morning<br/>Wake-Up Call Tour</h2>
</div>
<a className="hidden md:flex text-white text-xs font-medium tracking-wider uppercase items-center gap-2 hover:text-[#cda036] transition-colors border border-white/20 px-6 py-2.5" href="#">
                View All <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group">
<div className="relative h-[300px] overflow-hidden mb-6 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-[10px] text-[#cda036] uppercase tracking-widest mb-3">
<span>22 Dec, 2024</span> <span className="w-8 h-[1px] bg-slate-700"></span> <span>Trekking Guide</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 group-hover:text-[#cda036] transition-colors leading-snug">Luxury twin bed room of rotal sign throughout the hotel</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.</p>
<a className="inline-block text-white text-xs font-medium tracking-wider uppercase border border-white/20 hover:border-[#cda036] hover:text-[#cda036] px-6 py-2.5 transition-colors" href="#">
                    Read More
                </a>
</div>

<div className="group">
<div className="relative h-[300px] overflow-hidden mb-6 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-[10px] text-[#cda036] uppercase tracking-widest mb-3">
<span>22 Dec, 2024</span> <span className="w-8 h-[1px] bg-slate-700"></span> <span>Preparation</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 group-hover:text-[#cda036] transition-colors leading-snug">Gastronomy of Rotal throughout the luxury hotel</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.</p>
<a className="inline-block bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase px-6 py-2.5 transition-colors" href="#">
                    Read More
                </a>
</div>
</div>
</section>

<footer className="bg-[#111e1d] border-t border-white/5 pt-16">

<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 border-b border-white/5 pb-12">
<a className="flex flex-col items-center justify-center gap-3 p-6 border-r border-b md:border-b-0 border-white/5 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#cda036] transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-white" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">Facebook</span>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#cda036] transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-white" data-lucide="twitter" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">Twitter X</span>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 border-r border-white/5 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#cda036] transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-white" data-lucide="linkedin" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">Linkedin</span>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#cda036] transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">Instagram</span>
</a>
</div>

<div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="flex flex-col items-center md:items-start justify-center mb-6">
<div className="w-12 h-12 border border-[#cda036] rounded-full flex items-center justify-center mb-2">
<i className="w-6 h-6 text-[#cda036]" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
<div className="text-white font-medium tracking-widest text-sm uppercase leading-none">
                        Himalayan<br/><span className="text-[10px] text-slate-400">Peaks Co.</span>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Himalayan Peaks is a premium trekking agency designed to help you discover the majestic mountains and recover your spirit with great adventures.</p>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Useful Links</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> About Us</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Featured Routes</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Our Best Services</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Request a Booking</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Explore</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> All Offers</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Our Team</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Our Gallery</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Client Reviews</a></li>
<li><a className="text-slate-400 hover:text-[#cda036] text-sm flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i> Community</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Get In Touch</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-400 text-sm">
<i className="w-5 h-5 text-[#cda036] shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Thamel Marg, Kathmandu<br/>Bagmati Province, Nepal</span>
</li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<i className="w-5 h-5 text-[#cda036] shrink-0 mt-0.5" data-lucide="phone" strokeWidth="1.5"></i>
<span>+977 1 4412345<br/>+977 9801234567</span>
</li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<i className="w-5 h-5 text-[#cda036] shrink-0 mt-0.5" data-lucide="mail" strokeWidth="1.5"></i>
<span>info@himalayanpeaks.com<br/>support@himalayanpeaks.com</span>
</li>
</ul>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="h-24 bg-[#162524] border border-white/5 relative group overflow-hidden flex items-center justify-between px-6">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<span className="relative z-10 text-white font-medium tracking-wide">Popular Treks</span>
<button className="relative z-10 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="h-24 bg-[#162524] border border-white/5 relative group overflow-hidden flex items-center justify-between px-6">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="relative z-10 text-white font-medium tracking-wide">Make Reservation</span>
<button className="relative z-10 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="h-24 bg-[#162524] border border-white/5 relative group overflow-hidden flex items-center justify-between px-6">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2003&amp;auto=format&amp;fit=crop"/>
<span className="relative z-10 text-white font-medium tracking-wide">Contact Us</span>
<button className="relative z-10 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="border-t border-white/5 py-6 text-center md:flex md:justify-between md:items-center max-w-[1400px] mx-auto px-6">
<p className="text-xs text-slate-500 mb-4 md:mb-0">Copyright © 2024 Himalayan Peaks. All rights reserved.</p>
<div className="flex items-center justify-center gap-6 text-xs text-slate-500">
<a className="hover:text-[#cda036] transition-colors" href="#">Terms of service</a>
<a className="hover:text-[#cda036] transition-colors" href="#">Privacy policy</a>
<a className="hover:text-[#cda036] transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
