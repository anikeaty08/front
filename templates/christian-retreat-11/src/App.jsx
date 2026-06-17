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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
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
      
<main className="relative z-10 space-y-12">

<div className="px-4 md:px-6 lg:px-8 pt-4 md:pt-6">
<section className="max-w-[1400px] mx-auto relative w-full rounded-[2.5rem] overflow-hidden bg-[#0f1115] text-white min-h-[600px] flex flex-col justify-between p-8 lg:p-12 shadow-2xl shadow-gray-200/50">
<div className="absolute inset-0 z-0">
<img alt="America's Keswick Campus" className="opacity-60 w-full h-full object-cover grayscale-[10%]" src="https://americaskeswick.org/wp-content/uploads/2018/01/20160413-DJI_0033-2.jpg"/>
<div className="bg-gradient-to-t from-[#0f1115] via-[#0f1115]/40 to-[#0f1115]/30 absolute inset-0"></div>
</div>
<div className="relative z-10 w-full flex justify-center reveal">
<nav className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 flex items-center gap-6 text-sm">
<img alt="America's Keswick Logo" className="h-8 w-auto px-3 object-contain" src="https://americaskeswick.org/wp-content/smush-webp/2018/01/logo-e1612289438954.png.webp"/>
<div className="hidden md:flex items-center gap-6">
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Events</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Host a Retreat</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Our Campus</a>
</div>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-orange-50 transition-colors font-sans">
                            Give Now
                        </button>
</nav>
</div>
<div className="relative z-10 mt-auto max-w-4xl reveal delay-100">
<h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 text-white font-manrope font-medium tracking-tighter drop-shadow-lg">
                        Where God speaks to <br/>
<span className="text-gray-300 font-manrope font-medium tracking-tighter">hearts and transforms</span> <br/>
                        lives daily.
                    </h1>
</div>
<div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-2 pr-5 rounded-2xl reveal delay-200">
<div className="overflow-hidden w-12 h-16 bg-gray-800 rounded-xl relative shadow-lg flex items-center justify-center">
<iconify-icon className="text-2xl text-white/70" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-gray-300 uppercase tracking-widest font-sans">Location</p>
<p className="text-sm text-white font-sans font-medium">Whiting, New Jersey</p>
</div>
<div className="flex gap-2 ml-4">
<button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
<iconify-icon className="text-white text-base" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
<iconify-icon className="text-black text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative flex flex-col lg:flex-row gap-6 reveal delay-100">

<div className="w-full lg:w-1/3 shrink-0 flex flex-col justify-between py-4">
<div className="flex justify-between border-b border-gray-200 pb-4">
<span className="text-sm text-black font-sans">01</span>
<div className="flex gap-2 text-gray-400 text-xs font-mono">
<span className="font-sans">02</span>
<span className="font-sans">03</span>
<span className="font-sans">04</span>
</div>
</div>
<div className="mt-12">
<h3 className="text-3xl lg:text-4xl text-gray-900 leading-tight mb-6 font-manrope font-medium tracking-tighter">
                        Serving through <br/>
<span className="text-gray-400 font-manrope font-medium tracking-tighter">conferences and</span> <br/>
                        group retreats.
                    </h3>
<p className="text-lg text-gray-500 leading-relaxed mb-8 font-sans">
                        Are you looking for a place to host your next group retreat, family reunion, or youth event? Come experience our amazing facilities.
                    </p>
<button className="group flex items-center gap-3 bg-gray-900 text-white pl-5 pr-2 py-2 rounded-full text-base font-medium hover:bg-gray-800 transition-all">
<span className="font-sans">Explore Campus</span>
<span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
</div>

<div className="flex mt-12 lg:mt-auto gap-3">
<button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition text-gray-500 hover:text-gray-900" onclick="document.getElementById('service-carousel').scrollBy({left: -350, behavior: 'smooth'})">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition" onclick="document.getElementById('service-carousel').scrollBy({left: 350, behavior: 'smooth'})">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-full lg:w-2/3 overflow-hidden">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4 scroll-smooth h-full" id="service-carousel">
<div className="w-[85vw] sm:w-[calc(50%-12px)] shrink-0 snap-start relative group cursor-pointer h-full">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-900">
<img alt="Host a Retreat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/608656616_1286925236809247_1036039454985434952_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=13d280&amp;_nc_ohc=rW2uUExy_aoQ7kNvwH-_icY&amp;_nc_oc=AdnBwjWPNQ0TlHGe1a5DU2TC8sCCBb9ZIF2crfru-SdmNrHCo6L0kxrC-jhQxcsZtmPcyXK1PNAzPs4y4pZP1Z0b&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-1.xx&amp;_nc_gid=lBK5bc1x1aWttbPYAsThHQ&amp;_nc_ss=8&amp;oh=00_AfyQIqK5xuNstCwzwTZ31c0uzkO93-n0H1iarwIronhKjg&amp;oe=69B03929"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90"></div>
<div className="absolute top-6 left-6 text-white z-10">
<p className="text-lg tracking-tight font-sans drop-shadow-md">Group Retreats</p>
<p className="text-sm text-gray-200 font-sans drop-shadow-md">Men, Women &amp; Youth</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white z-10">
<div>
<p className="text-xl font-manrope font-medium tracking-tighter drop-shadow-md">Host a Retreat</p>
<button className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition font-sans">
                                            Learn More <iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<span className="text-5xl opacity-50 font-manrope font-medium tracking-tighter">02</span>
</div>
</div>
</div>
<div className="w-[85vw] sm:w-[calc(50%-12px)] shrink-0 snap-start relative group cursor-pointer h-full">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-[#1a1a1a]">
<img alt="Christian Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/641290557_1331427379025699_4021465285131701802_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=13d280&amp;_nc_ohc=ZzIPamqgaAAQ7kNvwHjMQms&amp;_nc_oc=AdnWdosCxeqItR3_qfIFD-TthImBKCdy-Wu2ACvQ2TLSLy86fT5xn09-zwEBkX-GXlG4mppyQx-OnFPDpcdpbzA5&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-2.xx&amp;_nc_gid=U-a-ZZor-BhAK0-looVVCA&amp;_nc_ss=8&amp;oh=00_AfzVyrkJBZp0RHrUD46CpAIEKK6skk0Mp4zJ39ZbO21p-Q&amp;oe=69B026F1"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80"></div>
<div className="absolute top-6 left-6 text-white z-10">
<p className="text-lg tracking-tight font-sans drop-shadow-md">Christian Events</p>
<p className="text-sm text-gray-300 font-sans drop-shadow-md">Concerts &amp; Conferences</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white z-10">
<div className="max-w-[70%]">
<p className="text-xl mb-2 font-manrope font-medium tracking-tighter drop-shadow-md">Attend an Event</p>
<p className="text-sm text-gray-300 line-clamp-2 font-sans drop-shadow-md">Day-long and overnight programmed Christian events for everyone.</p>
<button className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition font-sans">
                                            View Calendar <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<span className="absolute bottom-6 right-6 text-5xl opacity-50 font-manrope font-medium tracking-tighter">03</span>
</div>
</div>
</div>
<div className="w-[85vw] sm:w-[calc(50%-12px)] shrink-0 snap-start relative group cursor-pointer h-full">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-900">
<img alt="Family Retreats" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/641262194_1330548889113548_3436267724187809964_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=13d280&amp;_nc_ohc=XQqD2XAuQ4UQ7kNvwG0Vt1X&amp;_nc_oc=AdktR8uwcEipwLSMdNtFLEsFPPUZVAut62F_OVoF8b_ika-YqRpN5C4gqPo8ZYaIkYMP9iDzqzIhn0xok6XuahGa&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-2.xx&amp;_nc_gid=bOuMnF1A8AbXq3vUcb3Bfg&amp;_nc_ss=8&amp;oh=00_Afyp1JPuXRfmOJiCflm6h0n0CZsXh0rXocvT78vMA4hkXw&amp;oe=69B03EE7"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80"></div>
<div className="absolute top-6 left-6 text-white z-10">
<p className="text-lg tracking-tight font-sans drop-shadow-md">Family Events</p>
<p className="text-sm text-gray-300 font-sans drop-shadow-md">Connect &amp; Grow</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white z-10">
<div>
<p className="text-xl font-manrope font-medium tracking-tighter drop-shadow-md">Family Retreats</p>
<button className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition font-sans">
                                            Explore <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<span className="text-5xl opacity-50 font-manrope font-medium tracking-tighter">04</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-b border-gray-100 bg-gray-50/50">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-500 mb-6 shadow-sm font-sans">
                        Why America's Keswick?
                    </div>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-[1.1] font-manrope font-medium tracking-tighter">
                        A multi-generational, <br className="hidden md:block"/> cross-cultural ministry
                    </h2>
<p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-sans">
                        Biblical teaching and worship lead to a deeper relationship with Jesus Christ, resulting in a transformed life.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="group flex flex-col items-center text-center reveal delay-100">
<div className="relative h-48 w-full flex items-center justify-center mb-8">
<div className="w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-5 relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]">
<div className="flex items-center gap-3 mb-5">
<div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
<iconify-icon className="text-orange-600 text-sm" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="text-left space-y-1.5">
<div className="h-2 w-24 bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-16 bg-gray-50 rounded-full"></div>
</div>
</div>
<div className="space-y-2.5 mb-5">
<div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-orange-500/20 rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
</div>
<div className="h-1.5 w-5/6 bg-gray-50 rounded-full"></div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-3">
<div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
<span className="flex items-center gap-1.5 text-[10px] text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100/50 font-sans">
<iconify-icon className="text-xs" icon="solar:check-circle-linear"></iconify-icon> Booking Confirmed
                                    </span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 to-transparent rounded-full blur-3xl -z-10 transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Comfortable Lodging</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                            Relax in our peaceful accommodations designed for rest, fellowship, and quiet reflection during your stay.
                        </p>
</div>
<div className="group flex flex-col items-center text-center reveal delay-200">
<div className="relative h-48 w-full flex items-center justify-center mb-8">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="38" stroke="#f3f4f6" strokeWidth="3"></circle>
<circle className="transition-all duration-[1.5s] ease-out group-hover:stroke-dashoffset-0" cx="50" cy="50" fill="none" r="38" stroke="#1b558f" stroke-dasharray="238" stroke-dashoffset="238" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="w-16 h-16 bg-white shadow-[0_10px_30px_-5px_rgba(27,85,143,0.15)] rounded-2xl flex items-center justify-center border border-gray-100 z-10 relative transform transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="text-2xl text-[#1b558f]" icon="solar:map-linear"></iconify-icon>
</div>
<div className="absolute w-2 h-2 bg-blue-400 rounded-full top-0 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-500"></div>
<div className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full bottom-2 left-1/3 opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500"></div>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Beautiful Campus</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                            Enjoy our private lakes, nature trails, recreation center, dining, and spacious meeting rooms in nature.
                        </p>
</div>
<div className="group flex flex-col items-center text-center reveal delay-300">
<div className="relative h-48 w-full flex items-center justify-center mb-8">
<div className="relative w-64 h-32 pl-4">
<div className="absolute -top-4 right-2 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-3 py-2 rounded-lg text-center z-20 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
<span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 font-sans">Since</span>
<span className="block text-sm text-gray-900 flex items-center justify-center gap-1 font-sans">
                                        1897
                                    </span>
</div>
<svg className="w-full h-full overflow-visible" viewbox="0 0 240 100">
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="25" y2="25"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="55" y2="55"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="85" y2="85"></line>
<path className="drop-shadow-sm" d="M0,85 C50,80 80,60 120,50 S180,30 240,15" fill="none" stroke="#ee5a14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" d="M0,85 C50,80 80,60 120,50 S180,30 240,15 V110 H0 Z" fill="url(#chartGradient)"></path>
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ee5a14" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#ee5a14" stop-opacity="0"></stop>
</lineargradient>
</defs>
<circle className="group-hover:scale-125 transition-transform duration-300" cx="240" cy="15" fill="#ffffff" r="4" stroke="#ee5a14" strokeWidth="2"></circle>
</svg>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Addiction Recovery</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                            The heart of our ministry. Supporting men and women through the Colony of Mercy and Barbara's Place.
                        </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pb-12 pt-12 relative">
<div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 reveal">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl leading-[1.05] font-manrope font-medium tracking-tighter">
                        Helping groups and individuals <span className="text-gray-400 font-manrope font-medium tracking-tighter">craft retreat experiences that empower lives.</span>
</h2>
<a className="group inline-flex items-center text-sm text-gray-900 hover:text-blue-700 transition-colors border-b border-gray-900 hover:border-blue-700 pb-0.5 whitespace-nowrap font-sans" href="#">
                        View Testimonials
                        <iconify-icon className="ml-1 text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-gray-50 p-8 min-h-[520px] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500 group rounded-3xl reveal delay-100">
<div className="">
<h3 className="text-xl text-gray-900 mb-6 leading-snug font-manrope font-medium tracking-tighter">
                                Such a beautiful <br/>God-filled facility.
                            </h3>
<p className="text-gray-500 leading-relaxed text-[15px] font-sans">
                                "Our women’s group has been going to America’s Keswick for over 20 years. We are so grateful to be able to Worship and hear the Word in such a lovely place."
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-gray-200 mt-auto">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-sm">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-900 font-sans">Eloina D.</p>
<p className="text-xs text-gray-500 font-sans">Guest</p>
</div>
</div>
</div>
<div className="relative min-h-[520px] bg-gray-900 overflow-hidden group rounded-3xl reveal delay-200">
<img alt="Worship Event" className="group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://americaskeswick.org/wp-content/uploads/2025/10/DSC08884-scaled-e1759782165544-1920x540.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60 pointer-events-none"></div>
<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
<span className="text-white text-lg tracking-tight font-sans drop-shadow-md">America's Keswick</span>
</div>
<div className="absolute bottom-8 right-8 z-10">
<span className="text-white/80 text-xs uppercase tracking-widest font-sans drop-shadow-md">Since 1897</span>
</div>
</div>
<div className="min-h-[520px] flex flex-col overflow-hidden group text-center bg-gray-50 pt-8 pr-8 pb-8 pl-8 relative items-center justify-between rounded-3xl reveal delay-300">
<p className="text-gray-500 text-lg mt-8 font-sans">Years of <br/> faithful ministry</p>
<div className="relative flex items-center justify-center w-56 h-56 my-8">
<svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="90" stroke="#e5e7eb" strokeWidth="1.5"></circle>
<circle className="transition-all duration-1000 ease-out group-hover:stroke-[3]" cx="100" cy="100" fill="none" r="90" stroke="#1b558f" stroke-dasharray="565" stroke-dashoffset="0" strokeWidth="1.5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-5xl text-gray-900 font-manrope font-medium tracking-tighter">120+</span>
</div>
</div>
</div>
<div className="min-h-[520px] flex flex-col group overflow-hidden text-white bg-[#0f1115] pt-8 pr-8 pb-8 pl-8 relative justify-between rounded-3xl reveal delay-400">
<div className="flex justify-between items-start z-10">
<span className="text-xl font-manrope font-medium tracking-tighter">Contact Us</span>
<iconify-icon className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="z-10 relative">
<p className="text-gray-400 leading-relaxed mb-12 max-w-[260px] text-[15px] font-sans">
                                Plan your next group retreat, family reunion, or personal getaway with our dedicated team today.
                            </p>
<div className="space-y-2 text-sm text-gray-400">
<a className="block hover:text-orange-400 transition-colors font-sans" href="#">info@americaskeswick.org</a>
<a className="block hover:text-orange-400 transition-colors font-sans" href="#">(732) 226-1809</a>
<a className="block hover:text-orange-400 transition-colors font-sans" href="#">Whiting, NJ 08759</a>
</div>
</div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all duration-700 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<div className="px-4 md:px-6 lg:px-8 py-12">
<section className="max-w-[1400px] mx-auto relative bg-[#0f1115] rounded-[2.5rem] p-8 lg:p-16 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
<span className="text-[12rem] lg:text-[18rem] text-white/[0.02] leading-none font-manrope font-medium tracking-tighter">RETREAT</span>
</div>
<div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mb-16 reveal">
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-400 mb-6 font-sans">
                        Retreat Packages
                    </span>
<h2 className="text-4xl md:text-5xl text-white mb-4 font-manrope font-medium tracking-tighter">
                        Upcoming Events <br/> &amp; Retreats.
                    </h2>
<p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed font-sans">
                        Whether you are planning a day trip or an overnight stay, we have facilities to accommodate your group's unique needs.
                    </p>
</div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300 reveal delay-100">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:sun-linear"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">Day Events</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Concerts &amp; Gatherings</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">Join us for a day just for the ladies or special seasonal concerts.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            View Calendar <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Highlights</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Day-long conferences
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Christian concerts
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Buffet-style meals
                                </li>
</ul>
</div>
</div>
<div className="group relative flex flex-col p-8 bg-white/[0.08] border border-white/20 rounded-3xl overflow-hidden shadow-2xl reveal delay-200">
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
<div className="mb-6 flex items-start justify-between relative z-10">
<div className="h-10 w-10 rounded-xl bg-blue-400/20 flex items-center justify-center border border-blue-400/30">
<iconify-icon className="text-blue-400 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="bg-blue-400 text-black text-[10px] px-2 py-1 rounded uppercase tracking-wider font-sans font-bold">Most Popular</span>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">Overnight</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Group Retreats</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">For church groups, men's, women's, and youth retreats.</p>
</div>
<button className="relative z-10 w-full bg-[#1b558f] text-white py-3 rounded-xl text-sm mb-8 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(27,85,143,0.3)] font-sans">
                            Plan a Retreat <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto relative z-10">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Includes</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Comfortable lodging
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Private meeting spaces
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Full recreation access
                                </li>
</ul>
</div>
</div>
<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300 reveal delay-300">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">Personal</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Getaways</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">Take time away to reflect and pray by the lake.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            Book Stay <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Features</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Quiet reflection
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Nature trails
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Dining options
                                </li>
</ul>
</div>
</div>
</div>
</section>
</div>

<section className="py-16 px-4">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12 reveal">
<span className="text-sm text-gray-500 mb-2 block font-sans">/ Support</span>
<h2 className="text-3xl text-gray-900 font-manrope font-medium tracking-tighter">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="group reveal delay-100">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:info-circle-linear"></iconify-icon>
</span>
                            Where is Keswick located?
                        </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                            Our Retreat and Conference Center is conveniently located in Central New Jersey near the shore. ~1 hour east of Philadelphia and ~1.5 hours south of New York City.
                        </p>
</div>
<div className="group reveal delay-200">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:info-circle-linear"></iconify-icon>
</span>
                            What does Keswick offer?
                        </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                            Schedule your own retreat or take part in one of ours. We offer Church Group Retreats, Family Retreats, and programmed Christian Events.
                        </p>
</div>
<div className="group reveal delay-300">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:info-circle-linear"></iconify-icon>
</span>
                            Do you only allow Christian groups?
                        </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                            Everyone is welcome at our events. Businesses and non-Christian groups can also utilize our retreat facilities respecting our mission and statement of faith.
                        </p>
</div>
<div className="group reveal delay-400">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:info-circle-linear"></iconify-icon>
</span>
                            What does "Keswick" mean?
                        </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                            Named after our founder's favorite painting location in Cumbria, Northern England. He decided to name the ministry “Keswick Colony of Mercy.”
                        </p>
</div>
</div>
</div>
</section>

<div className="px-4 md:px-6 lg:px-8 pb-8">
<footer className="max-w-[1400px] mx-auto w-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/5">
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="pt-24 pb-16 px-8 text-center relative z-10 reveal">
<div className="mx-auto w-20 h-20 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_40px_rgba(27,85,143,0.15)] backdrop-blur-sm">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/30">
<iconify-icon className="text-blue-400 text-2xl drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-manrope font-medium tracking-tighter">Ready to plan your retreat?</h2>
<p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed font-sans">Join thousands of guests experiencing spiritual transformation at America's Keswick.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 rounded-full bg-gradient-to-b from-[#1b558f] to-blue-800 text-white hover:brightness-110 transition-all shadow-[0_0_25px_rgba(27,85,143,0.2)] flex items-center gap-2 border border-blue-400/20 font-sans">
                            Book Your Stay <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-sans">
                            Contact Us
                        </button>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-8 opacity-50"></div>
<div className="px-8 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 reveal delay-200">
<div className="lg:col-span-5 space-y-6">
<img alt="America's Keswick Logo" className="h-10 w-auto object-contain" src="https://americaskeswick.org/wp-content/smush-webp/2018/01/logo-e1612289438954.png.webp"/>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">
                            Christian Retreat and Conference Center. Where God speaks to hearts and transforms lives. <br/><br/>
                            601 Route 530, Whiting, New Jersey, 08759
                        </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
<div className="space-y-6">
<h4 className="text-white font-sans">Retreats</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Men's Retreats</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Women's Retreats</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Youth Retreats</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Couples Retreats</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-white font-sans">Campus</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Lodging</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Meeting Rooms</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Recreation</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Dining</a></li>
</ul>
</div>
<div className="space-y-6 hidden sm:block">
<h4 className="text-white font-sans">About Us</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Our History</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Core Values</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Support Us</a></li>
<li><a className="hover:text-blue-400 transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
