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
      

<nav className="absolute top-0 w-full z-50 text-white pt-6 px-6 md:px-12 flex justify-between items-center" style={{}}>

<a className="text-xl font-bold tracking-tighter uppercase flex flex-col leading-none" href="#">
<span className="font-work-sans" style={{}}>Chijan</span>
<span className="font-work-sans" style={{}}>Foundation</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<div className="flex items-center gap-1 cursor-pointer hover:opacity-80 font-work-sans" style={{}}>About <svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></div>
<div className="flex items-center gap-1 cursor-pointer hover:opacity-80 font-work-sans" style={{}}>Programs <svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></div>
<a className="hover:opacity-80 font-work-sans" href="#missions" style={{}}>Missions</a>
<a className="hover:opacity-80 font-work-sans" href="#news" style={{}}>News</a>
<svg className="lucide lucide-search cursor-pointer ml-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>

<a className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold hover:bg-sand-200 transition-colors font-work-sans" href="#donate" style={{}}>
            Donate Now <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</nav>

<header className="relative w-full min-h-[90vh] rounded-bl-[80px] md:rounded-bl-[150px] overflow-hidden bg-stone-900" style={{}}>

<img alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute top-24 right-6 md:right-12 bg-black text-white p-6 md:p-8 rounded-[30px] w-72 md:w-80 shadow-2xl z-20 hidden md:block" style={{}}>
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-bold leading-tight font-work-sans" style={{}}>Get Involved</h3>
<button className="hover:opacity-70"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="space-y-4 text-xs text-gray-300" style={{}}>
<div>
<span className="block text-white font-bold mb-1 font-work-sans" style={{}}>Upcoming Mission</span>
<p className="font-work-sans" style={{}}>Accra, Ghana — Nov 2025</p>
</div>
<div>
<span className="block text-white font-bold mb-1 font-work-sans" style={{}}>Volunteer Orientation</span>
<p className="font-work-sans" style={{}}>Every Wednesday, 6pm EST - Online</p>
</div>
<p className="pt-2 italic opacity-70 font-work-sans" style={{}}>
                    "Service to others is the rent you pay for your room here on earth."
                </p>
</div>
<div className="mt-6 flex justify-end">
<svg className="lucide lucide-arrow-up-right text-white w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="flex flex-col md:px-12 h-full max-w-7xl z-10 mr-auto ml-auto pt-48 pr-6 pb-24 pl-6 relative justify-end">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium tracking-tight max-w-4xl mb-8">
<span className="text-highlight box-decoration-clone font-google-sans-flex">Your gateway for</span>
<span className="text-highlight box-decoration-clone font-google-sans-flex" style={{}}>healthcare &amp; humanity</span>
<span className="text-highlight box-decoration-clone font-google-sans-flex" style={{}}>worldwide</span>
</h1>
</div>
</header>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="overflow-hidden rounded-[40px] md:rounded-[60px] rounded-tr-[120px] shadow-xl aspect-[4/5]">
<img alt="Smiling child" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-transparent"></div>
</div>

<div className="space-y-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-slate-900 font-google-sans-flex" style={{}}>
                    Transforming the world's approach to healthcare access
                </h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-md font-work-sans" style={{}}>
                    Serving as the hub for medical missions, education, and community empowerment. We connect healthcare professionals with underserved regions to inspire hope, advance health equity, and empower local communities to thrive.
                </p>
<a className="inline-flex items-center gap-3 border border-slate-300 rounded-full pl-6 pr-2 py-2 hover:bg-white hover:shadow-lg transition-all group" href="#about" style={{}}>
<span className="text-sm font-semibold font-work-sans" style={{}}>Learn More</span>
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
</div>
</div>
</section>

<section className="md:rounded-t-[100px] bg-white rounded-t-[60px] pt-24 pb-24" id="programs">
<div className="px-6 md:px-12 max-w-[1400px] mx-auto">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-6" style={{}}>
<div className="flex items-baseline gap-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-google-sans-flex" style={{}}>Programs</h2>
<span className="text-sm font-medium text-slate-400 font-work-sans" style={{}}>Impact Areas</span>
</div>
<a className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors font-work-sans" href="#" style={{}}>
                    View All <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-[30px] mb-6">
<div className="absolute top-0 left-0 bg-black text-white p-4 z-10 rounded-br-2xl" style={{}}>
<span className="text-2xl font-bold block leading-none font-google-sans-flex" style={{}}>12</span>
<span className="text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>MAR</span>
</div>
<img alt="Medical" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex gap-2 mb-4">
<span className="border border-slate-300 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>Medical</span>
<span className="bg-black text-white rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>In-Person</span>
</div>
<h3 className="text-xl font-bold leading-tight mb-4 pr-10 font-work-sans" style={{}}>
                        General Surgery &amp; Dental Outreach - Rural Clinic Initiative
                    </h3>
<div className="flex justify-between items-end">
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium font-work-sans" style={{}}>
<svg className="lucide lucide-clock" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2 Weeks Mission
                        </div>
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-[30px] mb-6">
<div className="absolute top-0 left-0 bg-black text-white p-4 z-10 rounded-br-2xl" style={{}}>
<span className="text-2xl font-bold block leading-none font-google-sans-flex" style={{}}>05</span>
<span className="text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>APR</span>
</div>
<img alt="Education" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex gap-2 mb-4">
<span className="border border-slate-300 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>Education</span>
<span className="bg-black text-white rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>Workshop</span>
</div>
<h3 className="text-xl font-bold leading-tight mb-4 pr-10 font-work-sans" style={{}}>
                        Community Health Literacy: Train the Trainer Program
                    </h3>
<div className="flex justify-between items-end">
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium font-work-sans" style={{}}>
<svg className="lucide lucide-clock" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 9:00AM - 4:00PM
                        </div>
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-[30px] mb-6">
<div className="absolute top-0 left-0 bg-black text-white p-4 z-10 rounded-br-2xl" style={{}}>
<span className="text-2xl font-bold block leading-none font-google-sans-flex" style={{}}>18</span>
<span className="text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>MAY</span>
</div>
<img alt="Outreach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex gap-2 mb-4">
<span className="border border-slate-300 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>Humanitarian</span>
<span className="bg-black text-white rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-work-sans" style={{}}>Virtual</span>
</div>
<h3 className="text-xl font-bold leading-tight mb-4 pr-10 font-work-sans" style={{}}>
                        Global Donors Symposium - Expanding Our Reach
                    </h3>
<div className="flex justify-between items-end">
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium font-work-sans" style={{}}>
<svg className="lucide lucide-clock" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 10:00AM EST
                        </div>
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 pb-24 bg-white">
<div className="bg-black rounded-[40px] md:rounded-[80px] overflow-hidden relative min-h-[500px] flex items-center">

<div className="relative z-10 p-12 md:p-20 max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium leading-none tracking-tight mb-8 text-white" style={{}}>
<span className="text-highlight-white box-decoration-clone font-google-sans-flex" style={{}}>Looking to join a</span>
<span className="text-highlight-white box-decoration-clone font-google-sans-flex" style={{}}>medical mission?</span>
</h2>
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors font-work-sans" href="#" style={{}}>
                    Apply to Volunteer <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="absolute top-0 right-0 w-full md:w-2/3 h-full">
<img alt="Volunteer" className="w-full h-full object-cover object-center md:object-top opacity-60 md:opacity-80" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
</div>
</div>
</section>

<section className="bg-sand-50 py-24 px-6 md:px-12" id="news">
<div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">

<div>
<div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-4" style={{}}>
<h2 className="text-3xl font-medium tracking-tight font-google-sans-flex" style={{}}>Perspectives</h2>
<a className="text-xs font-bold border border-slate-300 rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors flex items-center gap-2 font-work-sans" href="#" style={{}}>View All <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
<div className="bg-white p-6 rounded-[40px] shadow-sm group cursor-pointer hover:shadow-lg transition-shadow">
<div className="relative mb-6 rounded-[30px] overflow-hidden">
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg text-center shadow-sm" style={{}}>
<span className="block text-xl font-bold leading-none font-work-sans" style={{}}>17</span>
<span className="block text-[10px] uppercase font-bold text-slate-500 font-work-sans" style={{}}>NOV</span>
</div>
<img alt="Perspective" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="inline-block border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 text-slate-500 font-work-sans" style={{}}>Field Report</span>
<h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight font-google-sans-flex" style={{}}>
                        On Sustainable Healthcare: Interview with Dr. Adedeji Adeniran
                    </h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-3 font-work-sans" style={{}}>
                        Our conversation about shifting from short-term relief to long-term infrastructure building in rural Nigeria, and how community involvement is key.
                    </p>
<div className="flex justify-end">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-4" style={{}}>
<h2 className="text-3xl font-medium tracking-tight font-google-sans-flex" style={{}}>News</h2>
<a className="text-xs font-bold border border-slate-300 rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors flex items-center gap-2 font-work-sans" href="#" style={{}}>View All <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
<div className="space-y-8">

<article className="group">
<h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-slate-600 transition-colors font-work-sans" style={{}}>
                            Award recipients of The Chijan Foundation: Women's Healthcare Fund
                        </h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-work-sans" style={{}}>
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> December 12, 2025
                        </div>
<span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full font-work-sans" style={{}}>News</span>
<div className="border-b border-slate-200 mt-6" style={{}}></div>
</article>

<article className="group">
<h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-slate-600 transition-colors font-work-sans" style={{}}>
                            November at Chijan: Mobile Clinics Expansion
                        </h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-work-sans" style={{}}>
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> November 14, 2025
                        </div>
<span className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full font-work-sans" style={{}}>Update</span>
<div className="border-b border-slate-200 mt-6" style={{}}></div>
</article>

<article className="group">
<h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-slate-600 transition-colors font-work-sans" style={{}}>
                            Leaders and Visionaries Gather in New York for Future Health Forum 2025
                        </h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-work-sans" style={{}}>
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> September 25, 2025
                        </div>
<span className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full font-work-sans" style={{}}>Event</span>
<div className="border-b border-slate-200 mt-6" style={{}}></div>
</article>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto">
<div className="border border-slate-200 rounded-[30px] p-2 bg-white" style={{}}>
<div className="rounded-[25px] overflow-hidden bg-gradient-to-r from-brand-green to-teal-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 mb-2" style={{}}>
<div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
<svg className="lucide lucide-globe text-white" data-lucide="globe" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<h3 className="text-2xl font-bold text-yellow-400 mb-1 font-google-sans-flex" style={{}}>Global Health Gateway</h3>
<p className="text-sm text-white/90 font-work-sans" style={{}}>Connecting donors to direct impact.</p>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-bold mb-4 font-work-sans" style={{}}>Global Health Gateway</h4>
<p className="text-slate-600 mb-8 max-w-3xl text-sm leading-relaxed font-work-sans" style={{}}>
                    Click below to learn more about Chijan Center's partnership with international health organizations and how we are building a sustainable future for medical access globally.
                </p>
<button className="bg-black text-white px-6 py-3 rounded-lg text-xs font-bold hover:opacity-80 transition-opacity font-work-sans" style={{}}>
                    Access Gateway
                </button>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-8 px-6 md:px-12 rounded-t-[60px] md:rounded-t-[80px] mt-12 relative overflow-hidden" style={{}}>

<div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-20">

<div className="md:col-span-1">
<div className="text-4xl font-bold tracking-tighter uppercase leading-none mb-6 font-google-sans-flex" style={{}}>
                        Chijan<br/>Foundation
                    </div>
<address className="text-xs text-gray-400 not-italic leading-relaxed mb-6 font-work-sans" style={{}}>
                        1280 Fifth Avenue<br/>
                        New York, NY 10029<br/>
                        Phone: 212-444-9795<br/>
<a className="underline decoration-1 underline-offset-2 hover:text-white font-work-sans" href="mailto:info@chijanfoundation.org" style={{}}>info@chijanfoundation.org</a>
</address>
<div className="flex gap-4">
<a className="hover:text-gray-400" href="#" style={{}}><svg className="lucide lucide-facebook" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-gray-400" href="#" style={{}}><svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-gray-400" href="#" style={{}}><svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-gray-400" href="#" style={{}}><svg className="lucide lucide-youtube" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>

<div className="text-xs space-y-3 text-gray-400" style={{}}>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Archives</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Careers</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>FAQs</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Press Inquiries</a>
</div>

<div className="text-xs space-y-3 text-gray-400" style={{}}>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Partnership Proposals</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Event Rentals</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Guided Visits</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Contact Us</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Support</a>
<a className="block hover:text-white font-work-sans" href="#" style={{}}>Terms and Conditions</a>
</div>

<div className="md:col-span-1">
<h4 className="font-bold mb-4 font-work-sans" style={{}}>Stay Connected!</h4>
<p className="text-xs text-gray-400 mb-6 font-work-sans" style={{}}>
                        Sign up for our newsletter to receive updates about what's happening at The Chijan Foundation.
                    </p>
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors w-fit font-work-sans" style={{}}>
                        Stay in Touch <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8" style={{}}>

<div className="hidden md:flex gap-4">
<div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 cursor-pointer hover:border-gray-500 hover:text-white" style={{}}><svg className="lucide lucide-arrow-left" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></div>
</div>

<div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<svg className="lucide lucide-anchor" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-feather" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<svg className="lucide lucide-mountain" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<svg className="lucide lucide-droplet" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="hidden md:flex gap-4">
<div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 cursor-pointer hover:border-gray-500 hover:text-white" style={{}}><svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>
<div className="text-center text-[10px] text-gray-600 mt-12 font-work-sans" style={{}}>
                © Copyright 2025 The Chijan Foundation. Powered by charityweb.org
            </div>
</div>
</footer>

<button className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-accessibility" data-lucide="accessibility" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 3.5"></path><path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg>
</button>


    </>
  );
}
