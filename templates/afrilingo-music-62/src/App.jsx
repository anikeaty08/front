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
      

<nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
<div className="flex gap-2 items-center">
<div className="w-10 h-10 bg-[#FFEA28] rounded-full flex items-center justify-center text-black border-2 border-black">
<svg aria-hidden="true" className="lucide lucide-music w-5 h-5 fill-current" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Afrilingo</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-[#FFEA28] transition text-sm font-semibold text-white drop-shadow-md" href="#">Method</a>
<a className="hover:text-[#FFEA28] transition text-sm font-semibold text-white drop-shadow-md" href="#">Languages</a>
<a className="text-sm font-semibold text-white hover:text-[#FFEA28] transition drop-shadow-md" href="#">Stories</a>
</div>
<div className="flex gap-4 items-center">
<a className="hidden md:block text-sm font-semibold text-white hover:text-[#FFEA28] transition drop-shadow-md" href="#">Log in</a>
<a className="hover:bg-[#222] transition transform hover:-translate-y-0.5 text-sm font-bold text-white bg-black border-white border-2 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[4px_4px_0px_0px_rgba(255,234,40,1)]" href="#register">
                Get Early Access
            </a>
</div>
</nav>

<header className="md:pt-40 md:pb-32 overflow-hidden bg-[#00A651] pt-40 pr-6 pb-32 pl-6 relative">

<div className="overflow-hidden pointer-events-none md:opacity-100 opacity-20 w-full h-full absolute top-0 left-0">

<img alt="User" className="md:w-48 md:h-48 bg-center w-32 h-32 object-cover border-[#FFEA28] border-4 rounded-full absolute top-20 left-[-30px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6a0f761-2ebc-48e4-959f-b1a739500fda_800w.png"/>

<img alt="User" className="md:right-20 md:w-56 md:h-56 w-40 h-40 object-cover border-black border-4 rounded-full absolute top-32 right-[-20px] shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[15deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ef5dad-52d9-4d63-bbd7-210d89123436_800w.png"/>

<div className="md:left-1/4 transform text-sm font-bold text-black bg-[#FFEA28] border-black border-2 rounded-full pt-2 pr-5 pb-2 pl-5 absolute bottom-10 left-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-6">Afrobeats 🎵</div>
<div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">

<div className="md:left-[10%] animate-bounce absolute top-[12%] left-[5%]" style={{animationDuration: '4s', animationDelay: '0s'}}>
<div className="transform md:text-sm hover:scale-110 transition cursor-pointer pointer-events-auto text-xs font-bold text-white bg-black border-white border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] -rotate-6">Ndeewo 👋</div>
</div>

<div className="md:right-[20%] animate-bounce absolute top-[20%] right-[5%]" style={{animationDuration: '5s', animationDelay: '1.5s'}}>
<div className="transform rotate-12 text-xs md:text-sm font-bold text-black bg-[#FFEA28] border-black border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition cursor-pointer pointer-events-auto">
            Bawo (Yoruba) 🇳🇬
        </div>
</div>

<div className="md:left-[8%] animate-bounce absolute bottom-[40%] left-[2%]" style={{animationDuration: '6s', animationDelay: '2.5s'}}>
<div className="transform md:text-sm hover:scale-110 transition cursor-pointer text-xs font-bold text-white bg-black pointer-events-auto border-white border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rotate-3">
            Sawubona (Zulu) 🇿🇦
        </div>
</div>

<div className="animate-bounce absolute right-[10%] bottom-[15%] md:right-[25%] md:bottom-[10%]" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
<div className="transform md:text-sm hover:scale-110 transition cursor-pointer pointer-events-auto text-xs font-bold text-white bg-[#00A651] border-white border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] -rotate-12">
            Jambo (Swahili) 🇰🇪
        </div>
</div>

<div className="animate-bounce md:top-[35%] md:left-[15%] absolute top-[55%] left-[12%]" style={{animationDuration: '5.5s', animationDelay: '3s'}}>
<div className="transform md:text-sm hover:scale-110 transition cursor-pointer pointer-events-auto text-xs font-bold text-black bg-white border-black border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3">Ete sen  🇬🇭</div>
</div>

<div className="animate-bounce absolute top-[15%] right-[30%] md:top-[55%] md:right-[15%]" style={{animationDuration: '7s', animationDelay: '1s'}}>
<div className="transform md:translate-x-32 md:translate-y-8 md:text-sm hover:scale-110 transition cursor-pointer pointer-events-auto text-xs font-bold text-white bg-black border-white border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rotate-6">
            Mbote (Congo) 🇨🇩
        </div>
</div>
</div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<h1 className="md:text-8xl leading-[0.9] text-5xl font-black text-white tracking-tight font-instrument-serif mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Você continua praticando.<br/> E cometendo os mesmos erros.</h1>
<p className="md:text-2xl leading-relaxed text-lg font-medium text-white font-manrope max-w-2xl mr-auto mb-10 ml-auto drop-shadow-md">Unlock the rhythm of Africa. Stop memorizing endless lists. Afrilingo proves that rhythm, repetition, and your favorite Afrobeats tracks are the fastest way to real fluency.</p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<a className="sm:w-auto hover:bg-[#ffe144] transition transform hover:-translate-y-1 text-lg font-bold text-black bg-[#FFEA28] w-full border-black border-2 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" href="#register">
                    Start Your Free Trial
                </a>
<button className="sm:w-auto hover:bg-neutral-100 transition flex gap-2 text-lg font-semibold text-black bg-white w-full border-black border-2 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch Demo
                </button>
</div>

<div className="flex gap-4 text-white mt-12 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="text-sm font-bold tracking-wide">
                    Trusted by 10,000+ learners
                </div>
</div>
</div>
</header>

<section className="overflow-hidden bg-[#FFEA28] border-black border-t-2 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">
<h2 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-8 leading-none">
                    Let the <br/>music teach you.
                </h2>
<div className="space-y-8">
<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black text-[#FFEA28] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
<svg aria-hidden="true" className="lucide lucide-headphones w-6 h-6" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-black mb-2">1. Listen &amp; Feel</h3>
<p className="text-black/80 font-medium leading-relaxed">
                                    Dive into our curated library of Afrobeats. The rhythm and melody embed words directly into your long-term memory.
                                </p>
</div>
</div>
</div>
<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black text-[#FFEA28] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
<svg aria-hidden="true" className="lucide lucide-mic-2 w-6 h-6" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-black mb-2">2. Tap to Learn</h3>
<p className="text-black/80 font-medium leading-relaxed">
                                    Follow synchronized lyrics. Tap any word to see its root and definition, turning passive listening into active learning.
                                </p>
</div>
</div>
</div>
<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black text-[#FFEA28] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
<svg aria-hidden="true" className="lucide lucide-trophy w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-black mb-2">3. Master &amp; Practice</h3>
<p className="text-black/80 font-medium leading-relaxed">
                                    Solidify your knowledge with drilling quizzes and pronunciation tools. Celebrate progress with our community.
                                </p>
</div>
</div>
</div>
</div>
<div className="mt-10">
<button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-[#333] transition shadow-[4px_4px_0px_0px_rgba(0,166,81,1)]">
                        Explore Features
                    </button>
</div>
</div>
<div className="order-1 md:order-2 relative flex justify-center">

<div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl border-8 border-black transform rotate-[-3deg]">
<div className="w-full h-full bg-neutral-800 rounded-[2.2rem] overflow-hidden relative">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&amp'}}>
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 p-6 flex flex-col h-full text-white">
<div className="flex justify-between items-center mb-8">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span className="text-xs font-bold tracking-widest uppercase">Now Playing</span>
<svg aria-hidden="true" className="lucide lucide-more-vertical w-6 h-6" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="mt-auto mb-12">
<h4 className="text-2xl font-bold">Essence</h4>
<p className="text-white/70 text-sm mb-6">Wizkid ft. Tems</p>
<div className="space-y-3">
<p className="text-xl font-medium text-[#FFEA28]">You no need no other body</p>
<p className="text-lg text-white/50">Iwọ ko nilo ara miiran</p>
</div>
<div className="mt-6 flex gap-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-skip-back w-6 h-6 hover:text-[#00A651]" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path><path d="M3 20V4"></path></svg>
<div className="w-14 h-14 bg-[#00A651] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
<svg aria-hidden="true" className="lucide lucide-pause w-6 h-6 fill-current" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</div>
<svg aria-hidden="true" className="lucide lucide-skip-forward w-6 h-6 hover:text-[#00A651]" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4v16"></path><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute top-20 -right-12 bg-white text-black px-4 py-3 rounded-xl rounded-bl-none shadow-[3px_3px_0px_0px_rgba(0,166,81,1)] transform rotate-6 z-20 max-w-[150px] border-2 border-black">
<p className="text-xs font-bold">"Wait, what does 'Omo' mean?"</p>
</div>
<div className="absolute bottom-40 -left-12 bg-[#00A651] text-white px-4 py-3 rounded-xl rounded-br-none shadow-[3px_3px_0px_0px_rgba(255,234,40,1)] transform -rotate-3 z-20 max-w-[150px] border-2 border-black">
<p className="text-xs font-bold">Tap to translate instantly! ⚡️</p>
</div>
</div>
</div>
</div>
</section>

<div className="text-[#FFEA28] bg-black border-black border-t-2 relative">

<svg className="absolute top-0 w-full h-16 md:h-32 -mt-1 transform rotate-180" preserveaspectratio="none" viewbox="0 0 1440 320">
<path className="" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#FFEA28" fillOpacity="1"></path>
</svg>
<div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#00A651] leading-none mb-6">
                        Anti-
                        anti-
                        boring.
                    </h2>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFEA28] text-black rounded-full font-bold hover:bg-white transition border-2 border-transparent hover:border-[#FFEA28]" href="#quiz">
                        Find your language
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="md:col-span-7 flex flex-col justify-center">
<p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                        Traditional learning methods are dry. Afrilingo is your social, video-first, rhythm-based learning app. Whether for travel, cultural connection, or personal growth, there's always a beat for you here.
                    </p>
</div>
</div>
</div>

<div className="pb-32 px-6">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-16">
<span className="bg-[#222] text-[#FFEA28] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-[#333]">Available Courses</span>
<h3 className="text-4xl md:text-5xl font-bold text-white mt-4">Languages &amp; Culture</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer hover:border-[#FFEA28] bg-[#1a1a1a] border-neutral-800 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
<svg aria-hidden="true" className="lucide lucide-music w-24 h-24 text-[#FFEA28]" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<h4 className="text-3xl font-bold text-white mb-2">Yoruba</h4>
<p className="text-neutral-400 text-sm mb-6">West Africa's tonal treasure, rich in proverbs and history.</p>
<span className="text-[#FFEA28] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Start Learning <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>

<div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#00A651]">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
<svg aria-hidden="true" className="lucide lucide-mic w-24 h-24 text-[#00A651]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h4 className="text-3xl font-bold text-white mb-2">Igbo</h4>
<p className="text-neutral-400 text-sm mb-6">The heartbeat of highlife and modern Afrobeats.</p>
<span className="text-[#00A651] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Start Learning <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>

<div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#FFEA28]">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
<svg aria-hidden="true" className="lucide lucide-globe w-24 h-24 text-[#FFEA28]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h4 className="text-3xl font-bold text-white mb-2">Swahili</h4>
<p className="text-neutral-400 text-sm mb-6">The lingua franca connecting East Africa.</p>
<span className="text-[#FFEA28] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Start Learning <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>

<div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#00A651]">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
<svg aria-hidden="true" className="lucide lucide-drum w-24 h-24 text-[#00A651]" data-lucide="drum" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 8 8"></path><path d="m22 2-8 8"></path><ellipse cx="12" cy="9" rx="10" ry="5"></ellipse><path d="M7 13.4v7.9"></path><path d="M12 14v8"></path><path d="M17 13.4v7.9"></path><path d="M2 9v8a10 5 0 0 0 20 0V9"></path></svg>
</div>
<h4 className="text-3xl font-bold text-white mb-2">Zulu</h4>
<p className="text-neutral-400 text-sm mb-6">Known for its distinct click consonants and rhythm.</p>
<span className="text-[#00A651] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Start Learning <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white py-24 px-6 border-t-2 border-black">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-none mb-6 md:mb-0 drop-shadow-[3px_3px_0px_rgba(0,166,81,1)]">
                    Afrilingo onthe brain.
                </h2>
<a className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-[#333] transition shadow-[4px_4px_0px_0px_rgba(0,166,81,1)]" href="#">
                    View user stories
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#00A651] rounded-[2rem] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<img alt="Happy User" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10">
<span className="bg-[#FFEA28] text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block border border-black">User Story</span>
<h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">"I finally connected with my heritage."</h3>
<p className="text-white font-medium text-lg">— Jane Doe, learning Yoruba</p>
</div>
</div>

<div className="bg-black rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
<div>
<span className="bg-[#00A651] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Awards</span>
<h3 className="text-2xl font-bold text-white mb-2">Best EdTech App 2023</h3>
<p className="text-neutral-400 text-sm">Recognized for innovation in cultural education.</p>
</div>
<div className="mt-8 flex justify-center">
<svg aria-hidden="true" className="lucide lucide-award w-20 h-20 text-[#FFEA28]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
</div>

<div className="bg-[#FFEA28] rounded-[2rem] p-8 text-black flex flex-col justify-between border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="">
<span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Quiz</span>
<h3 className="text-2xl font-bold text-black mb-2">Not sure where to start?</h3>
</div>
<div className="mt-4">
<p className="font-bold text-lg mb-4">Take our 30-second quiz to find your rhythm.</p>
<a className="inline-flex items-center justify-center w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition" href="#quiz">
                            Take Quiz
                        </a>
</div>
</div>

<div className="md:col-span-2 bg-[#f4f4f4] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="flex-1">
<h3 className="text-3xl font-bold text-black mb-4">Friends, not just followers.</h3>
<p className="text-black/70 text-lg mb-6">Join a community of 50,000+ learners. Practice speaking with real people who share your passion for African culture.</p>
<div className="flex -space-x-3 mb-6">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-[#00A651]" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-[#00A651]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-[#00A651]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="w-12 h-12 rounded-full border-2 border-[#00A651] bg-black text-white flex items-center justify-center text-xs font-bold">+5k</div>
</div>
</div>
<div className="w-full md:w-1/3">
<div className="bg-white p-6 rounded-2xl border-2 border-black text-black text-center shadow-md">
<svg aria-hidden="true" className="lucide lucide-message-circle w-10 h-10 mx-auto mb-2 text-[#00A651]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<p className="font-bold">"The community keeps me going!"</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-16 md:h-24 bg-white overflow-hidden">
<svg className="absolute bottom-0 w-full h-full text-[#00A651] fill-current" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fillOpacity="1"></path>
</svg>
</div>

<footer className="bg-[#00A651] pt-12 pb-12 px-6" id="register">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85]">
                Here for <br/>all of it.
            </h2>
<p className="text-xl font-medium text-white/90 mb-10 max-w-xl mx-auto">
                Ready to connect with a new language and culture? Join the waitlist and get 30 days of free premium access.
            </p>

<div className="bg-white rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black max-w-lg mx-auto transform -rotate-2 hover:rotate-0 transition duration-300">
<form className="space-y-4 text-left">
<div className="">
<label className="block text-sm font-bold text-black mb-1">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-neutral-200 focus:outline-none focus:ring-0 focus:border-black font-medium" placeholder="you@example.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-bold text-black mb-1">Interested Language</label>
<select className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-neutral-200 focus:outline-none focus:ring-0 focus:border-black font-medium">
<option>Yoruba</option>
<option>Igbo</option>
<option>Swahili</option>
<option>Zulu</option>
<option>Not sure yet</option>
</select>
</div>
<button className="w-full py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-[#333] transition shadow-md mt-4 flex items-center justify-center gap-2" type="button">
                        Start Learning Now <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="text-xs text-neutral-500 text-center mt-4">Free 14-day trial. No credit card required.</p>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-white font-medium text-sm">
<div>
<h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">About</h5>
<ul className="space-y-2">
<li><a className="hover:text-[#FFEA28]" href="#">Our Story</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Careers</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Press</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Community</h5>
<ul className="space-y-2">
<li><a className="hover:text-[#FFEA28]" href="#">Blog</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Guidelines</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Ambassadors</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Support</h5>
<ul className="space-y-2">
<li><a className="hover:text-[#FFEA28]" href="#">Help Center</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Safety</a></li>
<li><a className="hover:text-[#FFEA28]" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Social</h5>
<div className="flex gap-4">
<a className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-white/60">
<div className="flex gap-4 mb-4 md:mb-0">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
<div>
                    © 2023 Afrilingo. Made with rhythm in Lagos.
                </div>
</div>
</div>
</footer>


    </>
  );
}
