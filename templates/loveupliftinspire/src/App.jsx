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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#FCFBFA]/80 border-b border-stone-200/50 transition-all">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-[0.2em] text-stone-900" href="#">LUI</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#inspiration">Daily Uplift</a>
<a className="hover:text-stone-900 transition-colors" href="#blog">Journal</a>
<a className="hover:text-stone-900 transition-colors" href="#community">Community</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#newsletter">
                Subscribe
            </a>
<button className="md:hidden text-stone-500 hover:text-stone-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-24 pb-32 overflow-hidden flex items-center justify-center text-center min-h-[85vh]">

<div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
<div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-orange-50/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-medium tracking-widest text-rose-600 uppercase mb-8">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
                Welcome to a safe space
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                You Are Loved. <br className="hidden sm:block"/>
<span className="italic text-stone-500 font-normal">You Are Seen. You Matter.</span>
</h1>
<p className="text-base md:text-lg text-stone-500 mb-10 max-w-2xl leading-relaxed font-light">
                A space created to uplift your spirit, strengthen your faith, and remind you of your worth — every single day.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 group hover:-translate-y-0.5" href="#inspiration">
                    Read Daily Inspiration
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-stone-600 bg-white border border-stone-200 rounded-full hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5" href="#community">
                    Join the Community
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-stone-100/50" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-rose-50 mb-8">
<iconify-icon className="text-xl text-rose-400" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-10" style={{fontFamily: '\'Playfair Display\', serif'}}>Our Story</h2>
<div className="space-y-6 text-base md:text-lg text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
<p>
<span className="font-medium text-stone-900">LOVE, Uplift, Inspire</span> is not just a page — it’s a safe space. It was built from a place of understanding pain, healing, and growth. We know what it feels like to struggle silently, to question your worth, and to search for meaning.
                </p>
<p>
                    Our mission is simple — to remind you that no matter where you are in life, you are never alone. Through words, faith, and encouragement, we aim to bring light into your darkest days.
                </p>
<p className="italic text-stone-500 pt-4">
                    "Whether you’re here for a moment or a lifetime, we hope you leave feeling lighter than you came."
                </p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
<div className="text-center p-6 rounded-2xl bg-[#FCFBFA] border border-stone-100 transition-colors hover:bg-stone-50">
<span className="block text-sm font-semibold text-stone-900 mb-2">You are enough</span>
<p className="text-xs text-stone-500 leading-relaxed">Exactly as you are in this very moment, without needing to change a thing.</p>
</div>
<div className="text-center p-6 rounded-2xl bg-[#FCFBFA] border border-stone-100 transition-colors hover:bg-stone-50">
<span className="block text-sm font-semibold text-stone-900 mb-2">You are loved</span>
<p className="text-xs text-stone-500 leading-relaxed">Deeply and unconditionally, by a Creator who sees your true heart.</p>
</div>
<div className="text-center p-6 rounded-2xl bg-[#FCFBFA] border border-stone-100 transition-colors hover:bg-stone-50">
<span className="block text-sm font-semibold text-stone-900 mb-2">Your story matters</span>
<p className="text-xs text-stone-500 leading-relaxed">Every single chapter, even the painful ones that brought you here.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#FCFBFA]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors bg-white shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon> Faith &amp; God
                </a>
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors bg-white shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:user-heart-linear" strokeWidth="1.5"></iconify-icon> Self Love
                </a>
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors bg-white shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon> Healing
                </a>
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors bg-white shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon> Motivation
                </a>
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors bg-white shadow-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Life Lessons
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="inspiration">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Featured Words</h2>
<p className="text-sm text-stone-500 mt-2">Gentle reminders to carry you through the day.</p>
</div>
<a className="hidden sm:flex text-sm font-medium text-stone-500 hover:text-stone-900 items-center gap-1 group transition-colors" href="#">
                    View all <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FCFBFA] p-8 rounded-3xl border border-stone-100 hover:border-stone-200 transition-colors group flex flex-col h-full relative">
<iconify-icon className="absolute top-6 right-6 text-3xl text-stone-200" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-stone-800 leading-relaxed mb-8 flex-grow z-10 pt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "Sometimes God removes people from your life because He heard conversations you didn’t."
                    </p>
<div className="flex items-center justify-between mt-auto z-10 pt-4 border-t border-stone-100/50">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Faith</span>
<button className="text-stone-300 hover:text-rose-400 transition-colors"><iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>

<div className="bg-[#FCFBFA] p-8 rounded-3xl border border-stone-100 hover:border-stone-200 transition-colors group flex flex-col h-full relative">
<iconify-icon className="absolute top-6 right-6 text-3xl text-stone-200" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-stone-800 leading-relaxed mb-8 flex-grow z-10 pt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "You are not behind in life. You are exactly where you need to be. Trust the timing of your journey."
                    </p>
<div className="flex items-center justify-between mt-auto z-10 pt-4 border-t border-stone-100/50">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Self Worth</span>
<button className="text-stone-300 hover:text-rose-400 transition-colors"><iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>

<div className="bg-[#FCFBFA] p-8 rounded-3xl border border-stone-100 hover:border-stone-200 transition-colors group flex flex-col h-full relative">
<iconify-icon className="absolute top-6 right-6 text-3xl text-stone-200" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-stone-800 leading-relaxed mb-8 flex-grow z-10 pt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "Healing takes time. Be patient with yourself. Some days are for stepping forward, others are just for standing still."
                    </p>
<div className="flex items-center justify-between mt-auto z-10 pt-4 border-t border-stone-100/50">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Healing</span>
<button className="text-stone-300 hover:text-rose-400 transition-colors"><iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>

<div className="bg-gradient-to-br from-stone-50 to-rose-50/30 p-8 md:p-12 rounded-3xl border border-stone-100 flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-50 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
<div className="relative z-10 max-w-2xl">
<iconify-icon className="text-3xl text-rose-300 mb-6 mx-auto block" icon="solar:sun-fog-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl text-stone-800 leading-relaxed font-light italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            "You didn’t come this far just to break now. Keep going. Your breakthrough is closer than you think, and your strength is greater than you know."
                        </p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-widest mt-8">Daily Affirmation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FCFBFA] border-y border-stone-100/50" id="blog">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>From the Journal</h2>
<p className="text-sm text-stone-500">Longer reflections on emotional healing and spiritual growth.</p>
</div>
<article className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-stone-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center justify-center gap-3 mb-8">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Faith &amp; Spiritual Growth</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="text-xs text-stone-400">3 min read</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 text-center mb-10 leading-snug" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    When God Removes Someone From Your Life
                </h3>
<div className="space-y-6 text-base text-stone-600 leading-relaxed font-light mx-auto">
<p>Sometimes we hold on to people because we see the good in them, not the truth in them. We invest our energy, our love, and our hopes, blinding ourselves to the reality of how they might be affecting our peace.</p>
<p>But what if the distance you’re experiencing isn’t a loss — what if it is protection?</p>
<p>God sees what you don’t. He hears what you didn’t hear. He knows the underlying currents of relationships that might eventually pull you under.</p>
<p>And sometimes, the pain of losing someone is actually the beginning of your peace. It creates an empty space that can finally be filled with self-love, boundaries, and the right people who are meant for your next chapter.</p>
<p className="font-medium text-stone-800 italic pt-4 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>Trust the process. Even when it hurts.</p>
</div>
<div className="mt-12 pt-8 border-t border-stone-100 flex justify-center">
<a className="text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors flex items-center gap-2 border border-stone-200 px-6 py-2.5 rounded-full hover:bg-stone-50" href="#">
                        Read full journal <iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</article>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="community">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 block">Connect</span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Share Your Story</h2>
<p className="text-base text-stone-600 mb-10 leading-relaxed font-light">
                    This is a safe space. Whether you're navigating a difficult season, celebrating a breakthrough, or just need to be heard—we are here for you. Your story has the power to heal not just you, but someone else who reads it.
                </p>
<div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] border border-stone-100 relative">
<div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-rose-500" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-stone-600 italic mb-5 leading-relaxed" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "Reading these words every morning has been my anchor. It reminds me that my healing is a journey, not a race. Thank you for creating this haven."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-500">S</div>
<span className="text-xs font-medium text-stone-900">Sarah M.</span>
<span className="text-xs text-stone-400 px-2">•</span>
<span className="text-xs text-stone-400">Community Member</span>
</div>
</div>
</div>

<div className="bg-[#FCFBFA] p-8 md:p-10 rounded-[2rem] border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-stone-700" htmlFor="name">First Name</label>
<input className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:outline-none transition-all placeholder-stone-400" id="name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-stone-700" htmlFor="email">Email (Optional)</label>
<input className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:outline-none transition-all placeholder-stone-400" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-stone-700" htmlFor="message">Your Journey</label>
<textarea className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:outline-none transition-all resize-none placeholder-stone-400" id="message" placeholder="What's on your heart today?" rows="4"></textarea>
</div>

<div className="flex items-start gap-3 pt-1">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-stone-300 rounded bg-white checked:bg-stone-900 checked:border-stone-900 cursor-pointer transition-colors" id="anonymous" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<label className="text-xs text-stone-500 cursor-pointer select-none leading-snug" htmlFor="anonymous">
                            Keep my story anonymous. I only want to share it with the team.
                        </label>
</div>
<button className="w-full px-6 py-3.5 text-sm font-medium text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-all shadow-sm flex items-center justify-center gap-2 group mt-4" type="button">
                        Send Message
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1.5 pt-2">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                        Your privacy is protected. We will never share your email.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-16 bg-[#FCFBFA] border-t border-stone-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-8">Growing Together — Coming Soon</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:notebook-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-stone-500">Healing Journals</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-stone-500">Guided Courses</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-2xl text-stone-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-stone-500">1:1 Coaching</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200/50 pt-20 pb-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="bg-stone-900 rounded-[2.5rem] p-10 md:p-16 mb-20 relative overflow-hidden text-center" id="newsletter">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/10 rounded-full filter blur-[80px]"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Get Daily Uplift in Your Inbox</h2>
<p className="text-sm md:text-base text-stone-400 mb-10 font-light">Start your day with peace, positivity, and purpose. Receive gentle reminders of your worth.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-grow px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-stone-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="Email address" type="email"/>
<button className="px-8 py-3.5 text-sm font-medium text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-colors whitespace-nowrap" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
<div className="md:col-span-5">
<a className="text-xl font-semibold tracking-[0.2em] text-stone-900 block mb-4" href="#">LUI</a>
<p className="text-sm text-stone-500 leading-relaxed max-w-sm font-light">
                        A safe space dedicated to emotional healing, strengthening faith, and nurturing personal growth. You are never alone.
                    </p>
</div>
<div className="md:col-span-3">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-5">Explore</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#about">Our Story</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#inspiration">Daily Inspiration</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#blog">Journal &amp; Blog</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#community">Community</a></li>
</ul>
</div>
<div className="md:col-span-4 flex flex-col md:items-end">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-5 md:text-right">Let's Connect</h4>
<p className="text-sm text-stone-500 mb-4 md:text-right font-light">Want to collaborate or simply say hello? We'd love to hear from you.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-all bg-[#FCFBFA]" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-all bg-[#FCFBFA]" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400 font-light">© 2024 LOVE, Uplift, Inspire. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-800 transition-colors font-light" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-stone-800 transition-colors font-light" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
