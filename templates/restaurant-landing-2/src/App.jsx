import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal');
            scrollElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white flex flex-col">

<div className="relative w-full h-[92vh] bg-stone-900 overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="Restaurant Interior" className="w-full h-full object-cover object-center opacity-90 scale-105" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 py-8 flex justify-between items-start animate-enter delay-500">
<div className="flex items-center gap-3">
<span className="px-5 py-2.5 rounded-full border border-white/20 text-white bg-black/20 backdrop-blur-md text-sm font-medium tracking-wide font-geist flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Montréal, QC
                    </span>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="px-5 py-2.5 rounded-full border border-white/20 text-white bg-black/20 backdrop-blur-md text-sm font-medium tracking-wide font-geist">
                       Opens at 11:00 AM (Fri)
                    </span>
</div>
</nav>

<div className="relative w-full h-full flex flex-col justify-end pb-12 md:pb-20 px-8 md:px-16 pointer-events-none">
<div className="pointer-events-auto">

<div className="flex flex-wrap items-center gap-3 mb-6 animate-enter delay-100">
<div className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold font-geist shadow-lg hover:scale-105 transition-transform duration-300">
<svg className="w-4 h-4 text-orange-500" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            4.8 <span className="text-stone-500 font-medium font-geist">(622 reviews)</span>
</div>
<div className="flex items-center gap-2 glass-panel text-white px-4 py-1.5 rounded-full text-sm font-medium font-geist">
<svg className="lucide lucide-wallet w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                            $10–20 per person
                        </div>
</div>
<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tight font-jakarta mb-6 leading-[1.05] drop-shadow-xl max-w-4xl animate-enter delay-200">
                        Restaurant <br/> Tangub City
                    </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed font-geist mb-10 animate-enter delay-300">
                        The ultimate destination for lunch &amp; dinner. Authentic flavors, high ratings, and affordable luxury.
                    </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 animate-enter delay-500">
<a className="flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-stone-200 transition font-geist group" href="https://business.google.com/u/2/menu/l/13977133328937596693" target="_blank">
                            View Menu
                            <span className="bg-black text-white p-2 rounded-full transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
<a className="flex items-center gap-3 glass-panel text-white pl-8 pr-2 py-2.5 rounded-full font-medium text-sm hover:bg-white/20 transition font-geist group" href="https://wa.me/15144957664">
                            Contact via WhatsApp
                            <span className="bg-green-600 text-white p-2 rounded-full border border-white/10">
<svg className="lucide lucide-message-circle w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</span>
</a>
</div>
</div>
</div>
</div>

<section className="bg-white w-full px-8 md:px-16 py-20 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-8 reveal">
<div>
<span className="inline-block px-4 py-1.5 rounded-full border border-stone-200 text-xs font-semibold text-stone-600 font-geist tracking-wide uppercase mb-6">
                            About Us
                        </span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-[1.2] text-black font-jakarta mb-6">
                            A culinary staple on <br/> Av. Ogilvy.
                        </h2>
<p className="text-stone-500 font-geist leading-relaxed text-lg mb-4">
                            Whether you're dining solo, gathering with a group, or visiting as a tourist, Restaurant Tangub City offers a welcoming atmosphere for everyone.
                        </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><svg className="text-green-700" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Healthy Options
                            </li>
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><svg className="text-green-700" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Vegetarian Friendly
                            </li>
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><svg className="text-green-700" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Vegan Choices
                            </li>
</ul>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 h-full reveal reveal-delay-200">
<div className="flex justify-between items-end mb-8">
<h3 className="text-2xl font-medium font-jakarta tracking-tight">Our Menu</h3>
<a className="text-sm font-semibold border-b border-black pb-0.5 hover:text-stone-600 hover:border-stone-600 transition font-geist" href="https://business.google.com/u/2/menu/l/13977133328937596693">See full menu →</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-100">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
<svg className="lucide lucide-sun" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Lunch</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-100">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center">
<svg className="lucide lucide-utensils" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Dinner</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-200">
<div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
<svg className="lucide lucide-cake-slice" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="7" r="2"></circle><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"></path><path d="M16 13h5"></path><path d="M6 13h5"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Dessert</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-200">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
<svg className="lucide lucide-cookie" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Small Plates</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-300">
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
<svg className="lucide lucide-coffee" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1"></path><path d="M6 2v2"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Coffee</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-300">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
<svg className="lucide lucide-wine" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
</div>
<span className="font-medium font-geist text-sm">Alcohol</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 w-full px-8 md:px-16 py-20 lg:py-28 text-white">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
<div className="max-w-3xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-jakarta leading-[1.1] mb-6">
                        More than just food. <span className="text-stone-500">A complete experience.</span>
</h2>
<p className="text-stone-400 text-lg font-light max-w-xl font-geist">
                        Casual, cozy, and trendy. Perfect for birthday parties, family dinners, or student gatherings.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

<div className="md:col-span-1 relative bg-stone-900 rounded-[2.5rem] p-8 border border-white/5 transition-all hover:border-white/10 flex flex-col justify-between min-h-[400px] reveal">
<div className="w-12 h-12 glass-panel-dark rounded-full flex items-center justify-center text-white mb-6">
<svg className="lucide lucide-chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" x2="18" y1="17" y2="17"></line></svg>
</div>
<div>
<h3 className="text-2xl font-medium font-jakarta tracking-tight mb-6">Services</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Dine-in &amp; Table Service
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Takeaway &amp; Delivery
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Professional Catering
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Private Dining Room
                            </li>
</ul>
</div>
</div>

<div className="md:col-span-2 relative bg-stone-900 rounded-[2.5rem] overflow-hidden p-8 lg:p-12 group border border-white/5 min-h-[400px] reveal reveal-delay-200">
<img alt="Cosy Atmosphere" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-end">
<span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-md border border-white/10">Good for Groups &amp; Kids</span>
</div>
<div>
<h3 className="text-3xl font-medium font-jakarta tracking-tight mb-2">Atmosphere</h3>
<p className="text-white/70 font-geist text-sm max-w-sm">Casual, trendy, and quiet. The perfect spot for university students to study or families to celebrate.</p>
</div>
</div>
</div>

<div className="md:col-span-3 bg-stone-800/50 rounded-[2.5rem] p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 reveal reveal-delay-300">
<div className="flex items-center gap-6">
<div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white">
<svg className="lucide lucide-accessibility" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 4.68"></path><path d="M8 14h12"></path><path d="M16 9v2.5"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium font-jakarta tracking-tight text-white">Accessibility &amp; Amenities</h3>
<p className="text-stone-400 font-geist text-sm mt-1">Inclusive for everyone.</p>
</div>
</div>
<div className="flex flex-wrap gap-3 justify-center md:justify-end">
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Wheelchair Entrance</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Accessible Toilet</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">High Chairs</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Kids Menu</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 w-full px-8 md:px-16 py-20 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

<div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full min-h-[300px] reveal">
<div>
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-6">
<svg className="lucide lucide-map-pin text-stone-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-stone-900 font-jakarta mb-2">Visit Us</h3>
<p className="text-stone-500 font-geist text-lg leading-relaxed max-w-sm">
                            997 Av. Ogilvy<br/>Montréal, QC H3N 2T3<br/>Canada
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-stone-100">
<div className="flex items-center gap-2 text-sm font-medium text-stone-600 font-geist">
<svg className="lucide lucide-car" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h20"></path></svg>
                            Free street parking &amp; free parking lot available.
                        </div>
</div>
</div>

<div className="bg-black text-white rounded-[2rem] p-8 border border-black shadow-xl flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden reveal reveal-delay-200">

<div className="absolute top-0 right-0 w-32 h-32 bg-stone-800 rounded-bl-full opacity-50"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="text-2xl font-medium font-jakarta mb-2">Opening Hours</h3>
<p className="text-white/60 font-geist text-sm mb-6">*Christmas Day hours may vary</p>
<div className="space-y-3">
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-white/80 font-geist">Status</span>
<span className="text-red-400 font-bold font-geist px-2 py-0.5 bg-red-400/10 rounded">Closed</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-white/80 font-geist">Friday</span>
<span className="text-white font-medium font-geist">Opens at 11:00 AM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-8 md:px-16 py-20 border-t border-stone-100">
<div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden reveal">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium font-jakarta text-white mb-6">Reservations Recommended</h2>
<p className="text-stone-400 text-lg font-geist mb-10">
                        We usually have a wait time. Book ahead or order catering for your next event.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-bold font-geist hover:bg-stone-200 transition flex items-center justify-center gap-2" href="tel:+15144957664">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +1 514-495-7664
                        </a>
<a className="w-full md:w-auto bg-green-600 text-white px-8 py-4 rounded-full font-bold font-geist hover:bg-green-700 transition flex items-center justify-center gap-2 border border-green-500 shadow-lg shadow-green-900/20" href="https://wa.me/15144957664">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                            WhatsApp Us
                        </a>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-stone-500 text-sm font-geist">
<span>We accept:</span>
<div className="flex gap-4 text-stone-300">
<span className="flex items-center gap-1"><svg className="lucide lucide-credit-card" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Credit Cards</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-credit-card" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Debit Cards</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-nfc" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></path><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"></path><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"></path></svg> NFC Mobile</span>
</div>
</div>
</div>
</section>

<div className="bg-white px-8 py-6 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-left">
<p className="text-black font-semibold font-jakarta text-sm">Restaurant Tangub City</p>
<p className="text-stone-400 text-xs font-geist mt-0.5">Experience authentic dining today.</p>
</div>
<div className="flex gap-6">
<span className="text-stone-400 text-xs font-geist">© 2024</span>
</div>
</div>
</div>


    </>
  );
}
