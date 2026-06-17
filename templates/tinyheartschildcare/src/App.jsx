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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-sky-100 bg-white/90 backdrop-blur-xl transition-all">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
<a className="flex items-center gap-3 group" href="#">

<img alt="Tiny Hearts Logo" className="group-hover:scale-105 transition-transform duration-300 w-auto h-12" src="https://i.ibb.co/C9H828d/tinyhearts.png"/>
<div className="flex flex-col">
<span className="self-center text-xl font-medium tracking-tight text-purple-500 brand-font leading-none">Tiny Hearts</span>
<span className="text-xs font-medium text-sky-500 tracking-wide uppercase">Childcare Center</span>
</div>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-6 items-center">
<a className="hidden md:flex items-center gap-2 text-sm font-normal text-slate-500 hover:text-purple-500 transition-colors" href="tel:2012468444">
<svg aria-hidden="true" className="iconify text-sky-400 iconify--lucide" data-height="18" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    (201) 246-8444
                </a>
<a className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center gap-2 transition-all shadow-lg shadow-purple-200 hover:shadow-purple-300 transform hover:-translate-y-0.5" href="#visit">
                    Schedule Visit
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sky-50/50">

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-purple-100/60 rounded-full blur-3xl mix-blend-multiply filter opacity-70 translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
<div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-3xl mix-blend-multiply filter opacity-70 -translate-x-1/3 translate-y-1/4"></div>
<div className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl mix-blend-multiply filter opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div className="flex flex-col items-start text-left relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 text-purple-600 text-sm font-medium mb-8 shadow-sm">
<span className="flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse"></span>
                    Enrollment Open for 2024
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-800 mb-8 leading-[1.1]">
                    Where Little Hearts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blossom</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Play</span>
</h1>
<p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
                    A safe, playful, and nurturing home-away-from-home. We guide your child's first steps in learning with love, laughter, and imagination.
                </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
<a className="px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-medium text-base transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 flex justify-center items-center gap-2 transform hover:-translate-y-1" href="#visit">
                        Book a Tour
                    </a>
<a className="px-8 py-4 rounded-full bg-white border border-slate-200 hover:border-sky-200 hover:bg-sky-50 text-slate-600 font-medium text-base transition-all flex justify-center items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1" href="#virtual-tour">
<svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-height="20" data-icon="lucide:video" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
                        Virtual Tour
                    </a>
</div>
<div className="mt-10 flex items-center gap-5 text-sm text-slate-400 font-medium">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-pink-100 border-[3px] border-white flex items-center justify-center text-sm text-pink-500 font-bold shadow-md">A</div>
<div className="w-10 h-10 rounded-full bg-sky-100 border-[3px] border-white flex items-center justify-center text-sm text-sky-500 font-bold shadow-md">B</div>
<div className="w-10 h-10 rounded-full bg-purple-100 border-[3px] border-white flex items-center justify-center text-sm text-purple-500 font-bold shadow-md">C</div>
</div>
<p>Trusted by Kearny families</p>
</div>
</div>
<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="absolute top-0 right-10 text-yellow-300 animate-bounce delay-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="64" data-icon="lucide:sun" data-width="64" height="64" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<div className="relative w-full aspect-square max-w-[500px]">

<div className="absolute inset-0 bg-sky-200 blob-shape rotate-6 opacity-20 scale-110"></div>
<div className="absolute inset-0 bg-purple-200 blob-shape -rotate-3 opacity-20 scale-105"></div>
<div className="w-full h-full blob-shape overflow-hidden shadow-2xl shadow-purple-100 border-8 border-white relative z-10">
<img alt="Happy child playing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white p-5 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-4 z-20 animate-[bounce_3s_infinite]">
<div className="p-3 bg-pink-100 rounded-2xl text-pink-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="28" data-icon="lucide:heart" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-800 text-base">Made with Love</h4>
<p className="text-sm text-slate-400">Safe &amp; Caring</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="absolute top-10 left-10 text-sky-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="120" data-icon="lucide:cloud" data-width="120" height="120" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-6 translate-y-12">
<img alt="Learning environment" className="rounded-[2rem] object-cover h-64 w-full shadow-lg hover:shadow-xl transition-shadow border-4 border-white bg-purple-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-6 bg-sky-50 rounded-[2rem] text-center">
<span className="text-4xl font-medium text-sky-500 brand-font block mb-2">15+</span>
<span className="text-sm text-sky-700">Years of Experience</span>
</div>
</div>
<div className="space-y-6">
<div className="p-6 bg-pink-50 rounded-[2rem] text-center">
<span className="text-4xl font-medium text-pink-400 brand-font block mb-2">100%</span>
<span className="text-sm text-pink-700">Safety Certified</span>
</div>
<img alt="Playing with toys" className="rounded-[2rem] object-cover h-64 w-full shadow-lg hover:shadow-xl transition-shadow border-4 border-white bg-pink-50" src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-purple-500 font-medium tracking-wide text-sm uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-800 mb-8 brand-font">
                        More Than Just Childcare,It's a <span className="text-purple-500 relative inline-block">Family<svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg></span>.
                    </h2>
<p className="text-slate-500 mb-6 leading-relaxed font-light text-xl">
                        At Tiny Hearts, we understand that choosing care for your little one is an act of trust. We create a magical, safe haven where warmth and nurturing are the foundation of every interaction.
                    </p>
<p className="text-slate-500 mb-10 leading-relaxed font-light text-lg">
                        Our gentle, play-based approach sparks curiosity and builds confidence, helping your child bloom in their own unique way.
                    </p>
<ul className="space-y-5">
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:shield-check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<span className="text-base font-medium text-slate-600">Secure, monitored, and spotless facility</span>
</li>
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:heart-handshake" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-base font-medium text-slate-600">Warm, compassionate, certified staff</span>
</li>
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<span className="text-base font-medium text-slate-600">Joyful, developmentally appropriate learning</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50/30" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-sky-500 font-medium tracking-wide text-sm uppercase bg-sky-100 px-4 py-1 rounded-full">Our Programs</span>
<h2 className="text-4xl font-medium tracking-tight text-slate-800 mt-6 mb-6 brand-font">Learning for Every Little Stage</h2>
<p className="text-slate-500 text-xl font-light">We offer tailored programs designed to meet the unique developmental needs of your child in a colorful, engaging world.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-sky-100 group">
<div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500 mb-8 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:baby" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5m1-4h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1m-3 5h.01"></path></g></svg>
</div>
<h3 className="text-2xl font-medium text-slate-800 mb-4 brand-font">Infants</h3>
<p className="text-slate-500 text-base leading-relaxed mb-8 font-light">
                        A tender, loving environment where your baby receives personal attention, cuddles, and sensory stimulation to support early growth.
                    </p>
<ul className="text-sm text-slate-600 space-y-3">
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-sky-400"></span> Individualized routines
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-sky-400"></span> Sensory play &amp; music
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-sky-400"></span> Safe motor skill practice
                        </li>
</ul>
</div>

<div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-pink-100 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[100px] -z-0 opacity-50"></div>
<div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:blocks" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></g></svg>
</div>
<h3 className="text-2xl font-medium text-slate-800 mb-4 brand-font relative z-10">Toddlers</h3>
<p className="text-slate-500 text-base leading-relaxed mb-8 font-light relative z-10">
                        Active exploration is the goal. We provide a safe space for toddlers to discover their independence through interactive play and social guidance.
                    </p>
<ul className="text-sm text-slate-600 space-y-3 relative z-10">
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-pink-400"></span> Social skill building
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-pink-400"></span> Arts, crafts &amp; messy play
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-pink-400"></span> Storytelling circles
                        </li>
</ul>
</div>

<div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-purple-100 group">
<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:book-open" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-medium text-slate-800 mb-4 brand-font">Preschool</h3>
<p className="text-slate-500 text-base leading-relaxed mb-8 font-light">
                        Preparing for the big steps ahead. Our preschool program focuses on cognitive development, literacy, and readiness in a fun way.
                    </p>
<ul className="text-sm text-slate-600 space-y-3">
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-purple-400"></span> Pre-literacy &amp; early math
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-purple-400"></span> Cooperative group play
                        </li>
<li className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-purple-400"></span> Structured learning time
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="virtual-tour">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-100"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-indigo-600 text-sm font-medium mb-8 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:eye" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                        Parent Peace of Mind
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-slate-800 brand-font">Peek Inside Our World, <span className="text-indigo-500">From Yours</span>.</h2>
<p 2000="" aria-hidden="true" className="text-slate-600 mb-10 leading-relaxed max-w-lg text-lg fontsvg xmlns=" data-heightwidth="2" data-icon="lucide:monitor-play" data-width="20" height="20" http:="" role="img" svg"="" viewbox="0 0 24 24" width="20" www.w3.org=""><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect>
                        Request Live Virtual Tour
                    
                </p></div>
<div className="relative w-full h-full min-h-[500px]">

<div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative z-10">
<div id="Jgu14cwxc"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white/40 w-32 h-32 rounded-full blur-xl -z-0"></div>
<div className="absolute -top-6 -left-6 bg-indigo-500/10 w-32 h-32 rounded-full blur-xl -z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-slate-800 brand-font">Moments of Joy</h2>
<p className="text-slate-500 mt-4 text-xl font-light">A glimpse into daily life at Tiny Hearts.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[500px] md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-md">
<img alt="Kids playing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="rounded-[2.5rem] overflow-hidden relative group bg-yellow-50 shadow-md transform md:translate-y-8">
<img alt="Toys" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="rounded-[2.5rem] overflow-hidden relative group bg-pink-50 shadow-md">
<img alt="Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="col-span-2 md:col-span-2 rounded-[2.5rem] overflow-hidden relative group bg-sky-50 shadow-md transform md:-translate-y-8">
<img alt="Outdoors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50" id="visit">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-[3rem] shadow-xl shadow-sky-100 overflow-hidden border border-white">
<div className="grid lg:grid-cols-2">

<div className="p-10 lg:p-16 bg-sky-100 text-sky-900 flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl font-medium tracking-tight mb-6 brand-font text-sky-600">Let's Connect</h2>
<p className="text-sky-700 mb-10 text-lg">We'd love to show you around our little world. Schedule a visit or ask us any questions.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="p-3 bg-white/60 rounded-2xl backdrop-blur-sm text-sky-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium text-lg text-sky-800">Location</h4>
<p className="text-sky-600/80 text-base leading-relaxed mt-1">198 Midland Ave,Kearny, NJ, United States</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-white/60 rounded-2xl backdrop-blur-sm text-sky-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:phone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg text-sky-800">Call Us</h4>
<a className="text-sky-600/80 text-base hover:text-sky-500 mt-1 block transition-colors" href="tel:2012468444">(201) 246-8444</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-white/60 rounded-2xl backdrop-blur-sm text-sky-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="font-medium text-lg text-sky-800">Email Us</h4>
<a className="text-sky-600/80 text-base hover:text-sky-500 mt-1 block transition-colors" href="mailto:tinyheartsk@gmail.com">tinyheartsk@gmail.com</a>
</div>
</div>
</div>
</div>
</div>

<div className="p-10 lg:p-16 bg-white">
<h3 className="text-2xl font-medium text-slate-800 mb-8 brand-font">Send us a message</h3>
<form className="space-y-6">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Parent's Name</label>
<input className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all text-base placeholder-slate-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Email Address</label>
<input className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all text-base placeholder-slate-400" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Message</label>
<textarea className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all text-base placeholder-slate-400 resize-none" placeholder="I'm interested in the toddler program..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-2xl transition-all shadow-lg shadow-slate-200 hover:shadow-slate-300 flex justify-center items-center gap-3 text-lg transform hover:-translate-y-0.5" type="button">
                                Send Message
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden">

<div className="absolute top-0 left-10 w-20 h-10 bg-pink-100 rounded-b-full opacity-50"></div>
<div className="absolute top-0 right-20 w-32 h-16 bg-sky-100 rounded-b-full opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-100 rounded-xl text-purple-500">

<img alt="Tiny Hearts Logo" className="h-8 w-auto" src="https://i.ibb.co/C9H828d/tinyhearts.png"/>
</div>
<span className="text-2xl font-medium tracking-tight text-slate-800 brand-font">Tiny Hearts</span>
</div>
<p className="text-slate-500 text-base leading-relaxed font-light">
                        Providing a safe, loving, and educational environment for the little hearts of Kearny, NJ. Where every child is family.
                    </p>
</div>
<div className="grid grid-cols-2 gap-12 sm:gap-20">
<div>
<h4 className="font-medium text-slate-900 mb-6 text-lg brand-font">Programs</h4>
<ul className="space-y-3 text-base text-slate-500 font-light">
<li><a className="hover:text-purple-500 transition-colors" href="#">Infants</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Toddlers</a></li>
<li><a className="hover:text-sky-500 transition-colors" href="#">Preschool</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-6 text-lg brand-font">Center</h4>
<ul className="space-y-3 text-base text-slate-500 font-light">
<li><a className="hover:text-purple-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Virtual Tour</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-400 font-light">© 2024 Tiny Hearts Childcare &amp; Learning Center. All rights reserved.</p>
<div className="flex gap-4">
<a className="p-2 text-slate-400 hover:text-pink-400 transition-colors bg-slate-50 rounded-full hover:bg-pink-50" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="p-2 text-slate-400 hover:text-blue-500 transition-colors bg-slate-50 rounded-full hover:bg-blue-50" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
