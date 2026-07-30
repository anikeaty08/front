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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("https://cdn.midjourney.com/a55c302e-35a2-40d2-8ae8-1f2bc7f74192/0_0.png?w=800&q=80")`}}></div>
<header className="py-6 animate-fade-in">
<div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 bg-gradient-to-br rounded-full flex items-center justify-center from-black to-gray-700">
<svg className="lucide lucide-trending-up w-4 h-4 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="font-semibold text-lg tracking-tight font-sans">CryptoLearn</span>
</a>
<nav className="hidden md:flex items-center gap-10 text-sm font-medium">
<a className="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700" href="#">
          
          About
        </a>
<a className="transition-colors flex items-center gap-2 hover:text-black text-gray-700" href="#" id="aura-emczd1r5y">
          
          Pricing
        </a>
<a className="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700" href="#">
          
          Curriculum
        </a>
<a className="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700" href="#">
          
          Reviews
        </a>
</nav>
<button className="hidden sm:inline-flex transition-all hover:shadow-md hover:bg-gray-100 text-sm font-medium text-black bg-white rounded-full pt-2 pr-6 pb-2 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center">
        
        CONTACT US
      </button>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/20">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>
<main className="">
<section className="mx-auto max-w-7xl px-6 pb-20">
<div className="md:rounded-3xl md:p-16 lg:p-24 overflow-hidden bg-white/50 rounded-b-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] backdrop-blur-md">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="flex items-center bg-[#f1f2f3] rounded-full pl-4 pr-6 py-2 w-max mb-8 animate-slide-up">
<div className="flex -space-x-3">
<img alt="Student" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&q=80" style={{}} />
<img alt="Student" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?w=320&q=80" style={{}} />
<img alt="Student" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=320&q=80" style={{}} />
<img alt="Student" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" style={{}} />
<img alt="Student" className="w-8 h-8 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&q=80" style={{}} />
</div>
<span className="ml-4 text-sm font-medium font-sans">
<span className="font-semibold font-sans">12.5k</span> students mastered crypto
              </span>
</div>
<h1 className="sm:text-5xl lg:text-7xl leading-tight animate-slide-up animate-delay-200 text-4xl font-medium tracking-tight font-manrope mt-2 mr-2 mb-2 ml-2">Master Crypto Trading Academy<br className="hidden sm:block" /></h1>
<p className="sm:text-lg max-w-xl animate-slide-up animate-delay-400 text-base mt-6 font-sans text-gray-600">
              From Bitcoin basics to DeFi strategies, unlock the secrets of digital finance with our comprehensive learning platform. Join thousands who've transformed their crypto knowledge.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-600">
<a className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-900 font-medium text-white bg-black rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                Start Learning Free
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-full border transition-all hover:shadow-md font-sans bg-white hover:bg-gray-100 text-black border-gray-200" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Meet Our Team
              </a>
</div>
<div className="mt-12 flex items-center gap-8 animate-slide-up animate-delay-800">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-medium font-sans">4.9/5 Rating</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-blue-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-medium font-sans">Industry Certified</span>
</div>
</div>
</div>
<div className="relative animate-slide-up animate-delay-400">
<div className="relative rounded-3xl overflow-hidden h-80 sm:h-[28rem] shadow-2xl">
<img alt="Crypto trading dashboard" className="absolute inset-0 w-full h-full object-cover" src="https://cdn.midjourney.com/bb972d04-5615-480a-bdd9-75cf76f6bec5/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/60"></div>
<div className="absolute top-4 left-4 text-white">
<div className="flex items-center gap-2 mb-2">
<img alt="Instructor" className="w-6 h-6 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=320&q=80" style={{}} />
<span className="text-xs font-medium font-sans">Sarah Chen, Lead Instructor</span>
</div>
<p className="text-xs leading-4 max-w-[200px] backdrop-blur-sm rounded-lg p-2 font-sans bg-black/20">
                  "From zero to crypto hero in 8 weeks. I'll guide you through every step of your blockchain journey!"
                </p>
</div>
<div className="absolute top-4 right-4 flex gap-2">
<button className="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
<svg className="lucide lucide-play w-4 h-4 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
<button className="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
<svg className="lucide lucide-bookmark w-4 h-4 text-white" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="backdrop-blur-sm rounded-lg p-3 bg-white/10">
<div className="flex items-center justify-between text-sm text-white">
<span className="font-sans">Current Module: DeFi Fundamentals</span>
<span className="flex items-center gap-1 font-sans">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      24 min
                    </span>
</div>
<div className="mt-2 rounded-full h-1 bg-white/20">
<div className="rounded-full h-1 w-2/3 bg-white"></div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 bg-white border-gray-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold font-sans">Portfolio Growth</p>
<p className="text-xs font-sans text-gray-600">+247% avg student gain</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-200 from-blue-50 to-white border-blue-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-blue-100">
<svg className="lucide lucide-calendar w-6 h-6 text-blue-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="text-sm mb-1 font-sans text-gray-600">Duration</span>
<span className="font-semibold text-lg font-sans">8 Weeks</span>
<span className="text-xs text-gray-500 mt-1 font-sans">Self-paced</span>
</div>
<div className="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-400 from-purple-50 to-white border-purple-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-purple-100">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-purple-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="text-sm mb-1 font-sans text-gray-600">Level</span>
<span className="font-semibold text-lg font-sans">Beginner+</span>
<span className="text-xs text-gray-500 mt-1 font-sans">No prior experience</span>
</div>
<div className="flex flex-col hover:shadow-lg transition-all animate-slide-up animate-delay-600 bg-gradient-to-br from-orange-50 to-white border-orange-100 border rounded-2xl pt-8 pr-6 pb-8 pl-6 items-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-orange-100">
<svg className="lucide lucide-monitor w-6 h-6 text-orange-600" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<span className="text-sm mb-1 font-sans text-gray-600">Format</span>
<span className="font-semibold text-lg font-sans">Online</span>
<span className="text-xs text-gray-500 mt-1 font-sans">Live + recorded</span>
</div>
<div className="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-800 from-green-50 to-white border-green-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-green-100">
<svg className="lucide lucide-shield-check w-6 h-6 text-green-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm mb-1 font-sans text-gray-600">Certification</span>
<span className="font-semibold text-lg font-sans">Verified</span>
<span className="text-xs text-gray-500 mt-1 font-sans">Industry recognized</span>
</div>
</div>
<div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-200 bg-gray-50 hover:bg-gray-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
<svg className="lucide lucide-bitcoin w-5 h-5 text-blue-600" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<h3 className="font-semibold font-sans">Bitcoin & Blockchain</h3>
</div>
<p className="text-sm font-sans text-gray-600">Master the fundamentals of Bitcoin, blockchain technology, and decentralized systems.</p>
</div>
<div className="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-400 bg-gray-50 hover:bg-gray-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
<svg className="lucide lucide-coins w-5 h-5 text-purple-600" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="font-semibold font-sans">Altcoins & Tokens</h3>
</div>
<p className="text-sm font-sans text-gray-600">Explore Ethereum, smart contracts, and the diverse world of alternative cryptocurrencies.</p>
</div>
<div className="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-600 bg-gray-50 hover:bg-gray-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="font-semibold font-sans">Trading Strategies</h3>
</div>
<p className="text-sm font-sans text-gray-600">Learn technical analysis, risk management, and proven trading strategies for crypto markets.</p>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
