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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#7A5AF8',
'primary-dark': '#6044CB',
secondary: '#FFC83D',
lavender: '#E9E4FF',
cream: '#F7F6F9',
charcoal: '#2D2D3A',
'soft-blue': '#D6E4FF',
'soft-pink': '#FFE4E8',
'soft-green': '#D4F5E9',
},
fontFamily: {
sans: ['Nunito', 'sans-serif'],
hand: ['Patrick Hand', 'cursive'],
},
borderRadius: {
'xl': '20px',
'2xl': '28px',
'3xl': '40px',
}
}
}
}
window.FontAwesomeConfig = { autoReplaceSvg: 'nest' };



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
      
<nav className="fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-lavender/50" id="header">
<div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl">
<i className="fa-solid fa-shapes"></i>
</div>
<span className="text-2xl font-black text-primary tracking-tight">Wonder<span className="text-secondary">Kids</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-bold text-charcoal hover:text-primary transition-colors" href="#">Home</a>
<a className="font-bold text-gray-500 hover:text-primary transition-colors" href="#">Shop</a>
<a className="font-bold text-gray-500 hover:text-primary transition-colors" href="#">About Us</a>
<a className="font-bold text-gray-500 hover:text-primary transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="font-bold text-charcoal hover:text-primary hidden sm:block" href="#">Sign In</a>
<a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105 flex items-center gap-2" href="#">
                    Start Free
                    <i className="fa-solid fa-arrow-right text-sm"></i>
</a>
</div>
</div>
</nav>
<section className="pt-28 pb-16 relative overflow-hidden h-[680px]" id="hero">
<div className="absolute top-20 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
<div className="relative z-10">
<div className="inline-block px-4 py-1.5 bg-lavender rounded-full text-primary font-bold text-sm mb-4 rotate-[-2deg]">
                    ✨ #1 Learning Platform for Kids
                </div>
<h1 className="text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-charcoal">
                    The best place to <span className="text-primary relative inline-block">learn
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="6"></path>
</svg>
</span> and <span className="text-secondary font-hand text-6xl lg:text-7xl relative top-2">play</span> <br/> for kids
                </h1>
<p className="text-base text-gray-600 mb-6 max-w-md leading-relaxed">
                    Discover thousands of fun and interactive learning activities to support your child's growth. Safe, ad-free, and loved by parents.
                </p>
<div className="flex flex-wrap gap-3 items-center mb-6">
<a className="bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-bold text-base shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center gap-2" href="#">
                        Get Started
                        <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">
<i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
</div>
</a>
<a className="bg-white hover:bg-gray-50 text-charcoal px-7 py-3.5 rounded-full font-bold text-base shadow-lg border border-gray-200 transition-all flex items-center gap-2" href="#">
<i className="fa-solid fa-play-circle text-primary"></i>
                        Watch Demo
                    </a>
</div>
<div className="flex items-center gap-6 flex-wrap">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"/>
</div>
<div>
<p className="font-bold text-sm text-charcoal">10k+ Parents</p>
<div className="flex text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
<i className="fa-solid fa-shield-halved text-green-500"></i>
<span className="font-bold text-sm text-gray-700">100% Safe</span>
</div>
</div>
</div>
<div className="relative h-[520px] w-full flex items-center justify-center">
<div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse"></div>
<div className="absolute bottom-20 left-10 w-24 h-24 bg-primary rounded-full opacity-20"></div>
<div className="relative w-full h-full">
<div className="absolute top-0 right-10 w-64 h-64 bg-lavender rounded-3xl rotate-6 overflow-hidden shadow-lg border-4 border-white transform transition hover:scale-105 duration-300">
<img alt="happy asian boy 6 years old wearing colorful striped shirt laughing holding a tablet, bright studio lighting, solid color background" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6fa2e9017a-45f0e516cf94d7d3f154.png"/>
</div>
<div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary/20 rounded-full overflow-hidden shadow-lg border-4 border-white transform transition hover:scale-105 duration-300 z-20">
<img alt="cute little girl 5 years old painting on canvas, messy paint on hands, smiling, bright studio lighting" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7b27954f19-9f94838d448e0bb1c803.png"/>
</div>
<div className="absolute top-40 left-0 bg-white p-3 rounded-2xl shadow-xl z-30 rotate-[-6deg] max-w-[160px]">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<i className="fa-solid fa-check text-sm"></i>
</div>
<span className="font-bold text-xs">Task Done!</span>
</div>
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
<div className="bg-green-500 w-3/4 h-full rounded-full"></div>
</div>
</div>
<div className="absolute top-10 left-1/2 transform -translate-x-1/2">
<div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center border-4 border-white shadow-lg rotate-12">
<span className="font-hand font-bold text-lg text-charcoal text-center leading-none">Fun<br/>&amp; Safe</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-12 bg-white rounded-t-[60px] relative z-20" id="values">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-soft-pink/30 p-6 rounded-2xl hover:bg-soft-pink/50 transition-colors duration-300 border border-soft-pink">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-pink-500 shadow-sm mb-4 rotate-[-3deg]">
<i className="fa-solid fa-brain"></i>
</div>
<h3 className="text-xl font-black text-charcoal mb-2">Critical Thinking</h3>
<p className="text-gray-600 leading-relaxed text-sm">Activities designed to challenge young minds and foster problem-solving skills from an early age.</p>
</div>
<div className="bg-lavender/40 p-6 rounded-2xl hover:bg-lavender/60 transition-colors duration-300 border border-lavender">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-primary shadow-sm mb-4 rotate-[2deg]">
<i className="fa-solid fa-palette"></i>
</div>
<h3 className="text-xl font-black text-charcoal mb-2">Creative Arts</h3>
<p className="text-gray-600 leading-relaxed text-sm">Let your child express themselves through drawing, music, and storytelling adventures.</p>
</div>
<div className="bg-soft-green/40 p-6 rounded-2xl hover:bg-soft-green/60 transition-colors duration-300 border border-soft-green">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-green-500 shadow-sm mb-4 rotate-[-1deg]">
<i className="fa-solid fa-rocket"></i>
</div>
<h3 className="text-xl font-black text-charcoal mb-2">Future Skills</h3>
<p className="text-gray-600 leading-relaxed text-sm">Introduction to coding, logic, and science in a fun, gamified environment tailored for kids.</p>
</div>
</div>
</div>
</section>
<section className="py-16 bg-cream relative" id="features">
<div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-30 pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What's Inside</span>
<h2 className="text-4xl md:text-5xl font-black text-charcoal">Our interactive <span className="text-primary font-hand italic">features</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
<div className="bg-lavender rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-6 -mt-6"></div>
<div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl mb-4 shadow-sm">
<i className="fa-solid fa-puzzle-piece"></i>
</div>
<h3 className="text-2xl font-black text-charcoal mb-2 group-hover:text-primary transition-colors">Fun Quiz</h3>
<p className="text-charcoal/80 text-sm mb-4">Test understanding with short, fun quizzes that feel like games!</p>
</div>
<div className="h-32 w-full rounded-2xl overflow-hidden relative mt-auto">
<img alt="colorful cartoon style quiz interface on tablet screen, bright colors, vector art style" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/44366c0b26-c7989cf8c544dfd687c6.png"/>
</div>
</div>
<div className="bg-primary rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-white">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-6 -mt-6"></div>
<div>
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl mb-4 shadow-sm">
<i className="fa-solid fa-lightbulb"></i>
</div>
<h3 className="text-2xl font-black mb-2">Creative Activities</h3>
<p className="text-white/80 text-sm mb-4">Enjoyable activities like coloring, crafting, and experiments.</p>
</div>
<div className="h-32 w-full rounded-2xl overflow-hidden relative mt-auto border-4 border-white/20">
<img alt="child hands painting on paper top view, colorful paints, creative mess" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67a3501620-d3b6372f7b9c4b2b4af6.png"/>
</div>
</div>
<div className="bg-secondary rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-bl-full -mr-6 -mt-6"></div>
<div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-600 text-xl mb-4 shadow-sm">
<i className="fa-solid fa-gamepad"></i>
</div>
<h3 className="text-2xl font-black text-charcoal mb-2 group-hover:text-white transition-colors">Learn with Games</h3>
<p className="text-charcoal/80 text-sm mb-4">Learn something new while playing educational games!</p>
</div>
<div className="h-32 w-full rounded-2xl overflow-hidden relative mt-auto">
<img alt="3d cartoon game interface with characters collecting stars, bright cheerful colors" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bd8184f8c8-7b1cf1a8dbf7b9f12fc4.png"/>
</div>
</div>
<div className="bg-soft-blue/50 rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-soft-blue">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-6 -mt-6"></div>
<div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-xl mb-4 shadow-sm">
<i className="fa-solid fa-book-open"></i>
</div>
<h3 className="text-2xl font-black text-charcoal mb-2 group-hover:text-blue-600 transition-colors">Story Time</h3>
<p className="text-charcoal/80 text-sm mb-4">Interactive stories that bring reading to life with animation.</p>
</div>
<div className="h-32 w-full rounded-2xl overflow-hidden relative mt-auto bg-white">
<img alt="asian girl reading a colorful book, library background" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f92e155ed1-451941012bc59858a071.png"/>
</div>
</div>
</div>
<div className="flex justify-center gap-3 flex-wrap">
<span className="px-5 py-2 bg-lavender rounded-full text-primary font-bold transform rotate-[-3deg] shadow-sm text-sm">#funny</span>
<span className="px-5 py-2 bg-secondary rounded-full text-charcoal font-bold transform rotate-[2deg] shadow-sm text-sm">#enjoy</span>
<span className="px-5 py-2 bg-primary text-white rounded-full font-bold transform rotate-[-1deg] shadow-sm text-sm">#happy</span>
<span className="px-5 py-2 bg-soft-green rounded-full text-green-700 font-bold transform rotate-[1deg] shadow-sm text-sm">#learning</span>
</div>
</div>
</section>
<section className="py-16 bg-white" id="how-it-works">
<div className="max-w-[1280px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-4xl font-black text-charcoal mb-3">Learning made <span className="text-secondary font-hand text-5xl">easy</span></h2>
<p className="text-gray-600 text-base">Just three simple steps to start your child's journey into a world of fun and education.</p>
</div>
<div className="relative flex items-center justify-between">
<div className="absolute top-1/4 left-[16%] right-[16%] h-1 bg-gradient-to-r from-soft-blue via-soft-pink to-soft-green -z-10 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="bg-white p-5 text-center relative">
<div className="w-20 h-20 mx-auto bg-soft-blue rounded-full flex items-center justify-center text-3xl text-blue-600 mb-4 border-8 border-white shadow-lg relative">
<i className="fa-solid fa-user-plus"></i>
<div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">1</div>
</div>
<h3 className="text-xl font-bold text-charcoal mb-2">Create Account</h3>
<p className="text-gray-500 text-sm">Sign up for free and set up your child's profile in seconds.</p>
<div className="absolute -right-4 top-1/3 text-primary text-2xl hidden md:block">
<i className="fa-solid fa-arrow-right"></i>
</div>
</div>
<div className="bg-white p-5 text-center relative">
<div className="w-20 h-20 mx-auto bg-soft-pink rounded-full flex items-center justify-center text-3xl text-pink-500 mb-4 border-8 border-white shadow-lg relative">
<i className="fa-solid fa-layer-group"></i>
<div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">2</div>
</div>
<h3 className="text-xl font-bold text-charcoal mb-2">Choose Level</h3>
<p className="text-gray-500 text-sm">Select the appropriate age group and learning interests.</p>
<div className="absolute -right-4 top-1/3 text-primary text-2xl hidden md:block">
<i className="fa-solid fa-arrow-right"></i>
</div>
</div>
<div className="bg-white p-5 text-center">
<div className="w-20 h-20 mx-auto bg-soft-green rounded-full flex items-center justify-center text-3xl text-green-600 mb-4 border-8 border-white shadow-lg relative">
<i className="fa-solid fa-star"></i>
<div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">3</div>
</div>
<h3 className="text-xl font-bold text-charcoal mb-2">Start Playing</h3>
<p className="text-gray-500 text-sm">Let your child explore, play, and learn at their own pace.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-primary text-white relative overflow-hidden" id="teachers">
<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-secondary font-bold text-sm mb-4 border border-white/20">
                        👨‍🏫 Expert Instructors
                    </div>
<h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                        We aim to help children discover the joy of <span className="text-secondary font-hand">creative</span> learning.
                    </h2>
<p className="text-base text-white/80 mb-6 max-w-lg">
                        Our teachers are certified professionals who specialize in early childhood education. They make learning engaging, fun, and effective.
                    </p>
<div className="flex gap-3">
<button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
<i className="fa-solid fa-arrow-left"></i>
</button>
<button className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center transition-colors shadow-lg">
<i className="fa-solid fa-arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-3 gap-5">
<div className="bg-white rounded-3xl p-5 text-center text-charcoal transform translate-y-6 shadow-xl">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-lavender mb-3">
<img alt="Teacher" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"/>
</div>
<h4 className="font-black text-base">Kristin Watson</h4>
<p className="text-primary font-bold text-xs mb-2">Science</p>
<div className="flex justify-center text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-5 text-center text-charcoal shadow-xl">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-lavender mb-3">
<img alt="Teacher" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"/>
</div>
<h4 className="font-black text-base">Jacob Jones</h4>
<p className="text-primary font-bold text-xs mb-2">Math</p>
<div className="flex justify-center text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-5 text-center text-charcoal transform translate-y-6 shadow-xl">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-lavender mb-3">
<img alt="Teacher" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"/>
</div>
<h4 className="font-black text-base">Jenny Wilson</h4>
<p className="text-primary font-bold text-xs mb-2">Art</p>
<div className="flex justify-center text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-5 text-center text-charcoal shadow-xl col-start-2">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-lavender mb-3">
<img alt="Teacher" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"/>
</div>
<h4 className="font-black text-base">Savannah Nguyen</h4>
<p className="text-primary font-bold text-xs mb-2">Reading</p>
<div className="flex justify-center text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-5 text-center text-charcoal shadow-xl">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-lavender mb-3">
<img alt="Teacher" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"/>
</div>
<h4 className="font-black text-base">Robert Fox</h4>
<p className="text-primary font-bold text-xs mb-2">Music</p>
<div className="flex justify-center text-yellow-400 text-xs">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-14 bg-lavender/30" id="safety">
<div className="max-w-[1280px] mx-auto px-6">
<div className="bg-white rounded-[40px] p-10 shadow-sm border border-lavender flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2">
<div className="relative h-72 rounded-3xl overflow-hidden bg-cream">
<img alt="mother and child looking at tablet together smiling, safe internet concept, bright cozy living room" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b99fe0640a-d6049ac47e5ec0b29834.png"/>
<div className="absolute bottom-5 left-5 bg-white py-2 px-4 rounded-xl shadow-lg flex items-center gap-2">
<div className="text-green-500 text-xl"><i className="fa-solid fa-shield-halved"></i></div>
<div>
<p className="font-bold text-charcoal text-xs">100% Safe</p>
<p className="text-xs text-gray-500">Ad-free Zone</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-black text-charcoal mb-5">A safe space for your little explorer</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
<i className="fa-solid fa-ban text-sm"></i>
</div>
<div>
<h4 className="font-bold text-base text-charcoal">No Ads, No Distractions</h4>
<p className="text-gray-600 text-sm">Completely ad-free environment so your child can focus on learning.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
<i className="fa-solid fa-chart-pie text-sm"></i>
</div>
<div>
<h4 className="font-bold text-base text-charcoal">Parent Dashboard</h4>
<p className="text-gray-600 text-sm">Track progress, set limits, and see what your child is learning.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
<i className="fa-solid fa-lock text-sm"></i>
</div>
<div>
<h4 className="font-bold text-base text-charcoal">Kid-Safe Content</h4>
<p className="text-gray-600 text-sm">All content is curated and reviewed by child education experts.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-16 bg-cream" id="blog">
<div className="max-w-[1280px] mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-4xl font-black text-charcoal mb-2">Read our <span className="text-primary font-hand italic">blog</span></h2>
<p className="text-gray-600 text-sm">Tips and tricks for parents and educators.</p>
</div>
<a className="text-primary font-bold hover:text-primary-dark transition-colors text-sm" href="#">View All Articles <i className="fa-solid fa-arrow-right ml-2"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white rounded-3xl p-3 hover:shadow-xl transition-all duration-300 group">
<div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
<img alt="child playing with educational toys wooden blocks, bright warm light" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/730a54b9a3-19cbf0edae0e34aa28fa.png"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-primary">Tips</span>
</div>
<div className="px-2 pb-3">
<h3 className="text-base font-black text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">Learning with Games? Why not!</h3>
<p className="text-gray-500 text-xs mb-3 line-clamp-2">Embrace the joy of games to enhance your child's learning experience.</p>
<a className="inline-flex items-center text-primary font-bold text-xs" href="#">Read More <i className="fa-solid fa-circle-arrow-right ml-1 text-sm"></i></a>
</div>
</div>
<div className="bg-white rounded-3xl p-3 hover:shadow-xl transition-all duration-300 group">
<div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
<img alt="asian girl reading a colorful book, library background" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f92e155ed1-451941012bc59858a071.png"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-secondary text-charcoal">Activity</span>
</div>
<div className="px-2 pb-3">
<h3 className="text-base font-black text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">10 Learning Game Ideas</h3>
<p className="text-gray-500 text-xs mb-3 line-clamp-2">Simple and fun ideas for learning activities you can do at home.</p>
<a className="inline-flex items-center text-primary font-bold text-xs" href="#">Read More <i className="fa-solid fa-circle-arrow-right ml-1 text-sm"></i></a>
</div>
</div>
<div className="bg-white rounded-3xl p-3 hover:shadow-xl transition-all duration-300 group">
<div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
<img alt="boy using laptop for learning, focused expression, bright room" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/75ec5ab6f3-27e9ddc513168bd5a3ea.png"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-green-600">Tech</span>
</div>
<div className="px-2 pb-3">
<h3 className="text-base font-black text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">Screen Time Balance</h3>
<p className="text-gray-500 text-xs mb-3 line-clamp-2">How to manage screen time effectively while ensuring best education.</p>
<a className="inline-flex items-center text-primary font-bold text-xs" href="#">Read More <i className="fa-solid fa-circle-arrow-right ml-1 text-sm"></i></a>
</div>
</div>
<div className="bg-white rounded-3xl p-3 hover:shadow-xl transition-all duration-300 group">
<div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
<img alt="happy asian boy 6 years old wearing colorful striped shirt laughing holding a tablet" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6fa2e9017a-45f0e516cf94d7d3f154.png"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-pink-600">Guide</span>
</div>
<div className="px-2 pb-3">
<h3 className="text-base font-black text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">Age-Appropriate Learning</h3>
<p className="text-gray-500 text-xs mb-3 line-clamp-2">Choosing the right content for your child's developmental stage.</p>
<a className="inline-flex items-center text-primary font-bold text-xs" href="#">Read More <i className="fa-solid fa-circle-arrow-right ml-1 text-sm"></i></a>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-white" id="pricing">
<div className="max-w-[1280px] mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-black text-charcoal mb-3">Simple, transparent <span className="text-secondary font-hand">pricing</span></h2>
<p className="text-gray-600 text-sm">Start for free, upgrade when you're ready.</p>
<div className="flex items-center justify-center gap-3 mt-6">
<span className="text-gray-500 font-bold text-sm">Monthly</span>
<div className="w-14 h-8 bg-primary rounded-full p-1 cursor-pointer flex items-center transition-all justify-end">
<div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
</div>
<span className="text-charcoal font-bold text-sm">Yearly <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start mb-8">
<div className="bg-cream rounded-3xl p-7 border border-gray-100">
<h3 className="text-lg font-bold text-charcoal mb-2">Explorer</h3>
<div className="text-4xl font-black text-charcoal mb-5">$0<span className="text-base text-gray-400 font-normal">/mo</span></div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Limited access to games
                        </li>
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> 1 Child profile
                        </li>
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Basic progress tracking
                        </li>
<li className="flex items-center gap-2 text-gray-400 text-sm">
<i className="fa-solid fa-xmark text-xs"></i> Offline mode
                        </li>
</ul>
<a className="block w-full py-3 rounded-xl border-2 border-charcoal text-charcoal font-bold text-center hover:bg-charcoal hover:text-white transition-colors text-sm" href="#">Get Started</a>
</div>
<div className="bg-primary text-white rounded-3xl p-7 transform scale-105 shadow-2xl relative z-10">
<div className="absolute top-0 right-0 bg-secondary text-charcoal text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
<h3 className="text-lg font-bold mb-2">Genius</h3>
<div className="text-5xl font-black mb-5">$12<span className="text-base text-white/60 font-normal">/mo</span></div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-white/90 text-sm">
<div className="w-4 h-4 bg-white text-primary rounded-full flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div> Unlimited access
                        </li>
<li className="flex items-center gap-2 text-white/90 text-sm">
<div className="w-4 h-4 bg-white text-primary rounded-full flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div> Up to 3 Child profiles
                        </li>
<li className="flex items-center gap-2 text-white/90 text-sm">
<div className="w-4 h-4 bg-white text-primary rounded-full flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div> Offline mode
                        </li>
<li className="flex items-center gap-2 text-white/90 text-sm">
<div className="w-4 h-4 bg-white text-primary rounded-full flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div> Advanced analytics
                        </li>
<li className="flex items-center gap-2 text-white/90 text-sm">
<div className="w-4 h-4 bg-white text-primary rounded-full flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div> Priority support
                        </li>
</ul>
<a className="block w-full py-3 rounded-xl bg-secondary text-charcoal font-bold text-center hover:bg-white transition-colors shadow-lg text-sm" href="#">Start Free Trial</a>
</div>
<div className="bg-cream rounded-3xl p-7 border border-gray-100">
<h3 className="text-lg font-bold text-charcoal mb-2">Family</h3>
<div className="text-4xl font-black text-charcoal mb-5">$29<span className="text-base text-gray-400 font-normal">/mo</span></div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Everything in Genius
                        </li>
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Up to 6 Child profiles
                        </li>
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Dedicated account manager
                        </li>
<li className="flex items-center gap-2 text-gray-600 text-sm">
<i className="fa-solid fa-check text-green-500 text-xs"></i> Custom learning paths
                        </li>
</ul>
<a className="block w-full py-3 rounded-xl border-2 border-charcoal text-charcoal font-bold text-center hover:bg-charcoal hover:text-white transition-colors text-sm" href="#">Choose Family</a>
</div>
</div>
<div className="bg-lavender/30 rounded-2xl p-6 flex items-center justify-between max-w-5xl mx-auto">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
<i className="fa-solid fa-building"></i>
</div>
<div>
<h4 className="font-bold text-charcoal text-base">Looking for a School Plan?</h4>
<p className="text-gray-600 text-sm">Get special pricing for educational institutions</p>
</div>
</div>
<a className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dark transition-colors" href="#">Contact Sales</a>
</div>
</div>
</section>
<section className="py-14 bg-lavender/20" id="faq">
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
<div className="lg:col-span-2">
<span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Support</span>
<h2 className="text-3xl font-black text-charcoal mb-4">Frequently Asked Questions</h2>
<p className="text-gray-600 mb-6 text-sm">Can't find the answer you're looking for? Reach out to our customer support team.</p>
<div className="relative h-56 rounded-3xl overflow-hidden shadow-lg rotate-2">
<img alt="friendly customer support agent cartoon style, wearing headset, smiling, purple background" className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d25f1163fc-956d70356cfb6452947c.png"/>
</div>
</div>
<div className="space-y-3 lg:col-span-3">
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">What age group is this for?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
<p className="text-gray-500 mt-3 hidden text-sm">WonderKids is designed for children ages 2-8. We have specific content tailored for toddlers, preschoolers, and early elementary students.</p>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">Is the platform safe for kids?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">Can I use it on multiple devices?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">How do I cancel my subscription?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">Do you offer a free trial?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-charcoal text-base">What payment methods do you accept?</h4>
<div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
<i className="fa-solid fa-plus text-sm"></i>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 relative overflow-hidden" id="cta">
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="bg-secondary rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
<div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
<h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 relative z-10">Ready to start the <br/> <span className="text-white font-hand" style={{textShadow: '2px 2px 0px #000'}}>adventure?</span></h2>
<p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto relative z-10">Join over 10,000 parents who trust WonderKids for their children's education.</p>
<div className="flex flex-col sm:flex-row justify-center gap-3 relative z-10">
<a className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105" href="#">
                        Get Started for Free
                    </a>
<a className="bg-white hover:bg-gray-50 text-charcoal px-8 py-3.5 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105" href="#">
                        View Demo
                    </a>
</div>
<div className="absolute top-10 right-20 animate-bounce hidden lg:block">
<i className="fa-solid fa-star text-3xl text-white drop-shadow-md"></i>
</div>
<div className="absolute bottom-20 left-20 animate-bounce hidden lg:block" style={{animationDelay: '0.5s'}}>
<i className="fa-solid fa-heart text-3xl text-pink-500 drop-shadow-md"></i>
</div>
</div>
</div>
</section>
<footer className="bg-charcoal text-white pt-16 pb-8 rounded-t-[40px]" id="footer">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-5">
<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl">
<i className="fa-solid fa-shapes"></i>
</div>
<span className="text-2xl font-black text-white tracking-tight">Wonder<span className="text-secondary">Kids</span></span>
</div>
<p className="text-gray-400 mb-5 text-sm">Making learning fun, safe, and accessible for kids everywhere.</p>
<div className="flex gap-3">
<a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm" href="#"><i className="fa-brands fa-facebook-f"></i></a>
<a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm" href="#"><i className="fa-brands fa-instagram"></i></a>
<a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm" href="#"><i className="fa-brands fa-twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-bold text-base mb-5 text-secondary">Company</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-base mb-5 text-secondary">Resources</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">For Parents</a></li>
<li><a className="hover:text-white transition-colors" href="#">For Teachers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Safety Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help &amp; Support</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-base mb-5 text-secondary">Stay Updated</h4>
<p className="text-gray-400 mb-3 text-xs">Subscribe to get the latest fun activities.</p>
<form className="flex flex-col gap-2">
<input className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm" placeholder="Enter your email" type="email"/>
<button className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-xl transition-colors text-sm">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
<p className="text-gray-500 text-xs">© 2024 WonderKids Learning. All rights reserved.</p>
<div className="flex gap-5 text-xs text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
