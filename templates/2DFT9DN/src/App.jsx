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



  lucide.createIcons({
    strokeWidth: 1.5
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-indigo-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-1.5s'}}></div>
</div>
<div className="relative z-10">

<nav className="glass fixed top-6 left-1/2 transform -translate-x-1/2 rounded-2xl px-8 py-4 shadow-xl z-50 animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-center gap-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<span className="text-xl font-bold font-display text-gray-900">Edulite</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group" href="#">
          Home
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></div>
</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group" href="#">
          Features
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></div>
</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group" href="#">
          About
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></div>
</a>
</div>
<div className="flex items-center gap-3">
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50" href="#">Login</a>
<a className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" href="#">
          Get Started
        </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 animate-slide-left" style={{animationDelay: '0.2s'}}>

<div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 rounded-full px-4 py-2 backdrop-blur-sm">
<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-indigo-700">#1 Educational Platform for Kids</span>
</div>

<div className="space-y-4">
<h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-gray-900">
              Make Learning 
              <span className="relative">
<span className="gradient-text">Magical</span>
<div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-indigo-300/60 to-purple-300/60 rounded-full -z-10"></div>
</span>
</h1>
<p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Transform your child's education with interactive lessons, gamified learning, and personalized progress tracking.
            </p>
</div>

<div className="flex flex-wrap gap-4">
<button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-3">
              Start Learning Today
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="group glass border border-gray-200 text-gray-700 font-medium px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="play"></i>
</div>
              Watch Demo
            </button>
</div>

<div className="flex items-center gap-8 pt-8">
<div className="text-center">
<div className="text-3xl font-bold font-display gradient-text">500K+</div>
<div className="text-sm text-gray-600 font-medium">Happy Students</div>
</div>
<div className="w-px h-12 bg-gray-300"></div>
<div className="text-center">
<div className="text-3xl font-bold font-display gradient-text">50+</div>
<div className="text-sm text-gray-600 font-medium">Expert Teachers</div>
</div>
<div className="w-px h-12 bg-gray-300"></div>
<div className="text-center">
<div className="text-3xl font-bold font-display gradient-text">4.9★</div>
<div className="text-sm text-gray-600 font-medium">App Rating</div>
</div>
</div>
</div>

<div className="relative animate-slide-right" style={{animationDelay: '0.4s'}}>

<div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl shadow-xl animate-float flex items-center justify-center" style={{animationDelay: '-2s'}}>
<i className="w-8 h-8 text-white" data-lucide="heart"></i>
</div>
<div className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-xl animate-float flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="star"></i>
</div>
<div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-xl animate-float flex items-center justify-center" style={{animationDelay: '-1s'}}>
<i className="w-10 h-10 text-white" data-lucide="trophy"></i>
</div>

<div className="relative max-w-sm mx-auto">

<div className="glass rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
<div className="bg-gray-900 rounded-[2.5rem] overflow-hidden">

<div className="bg-gray-900 px-6 py-3 flex justify-between items-center text-white text-sm">
<span className="font-medium">9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-3 bg-white rounded-full"></div>
<div className="w-1 h-3 bg-white rounded-full"></div>
<div className="w-1 h-3 bg-white/50 rounded-full"></div>
</div>
<i className="w-4 h-4 ml-2" data-lucide="battery"></i>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-[600px] relative">

<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-gray-600 text-sm">Good morning</p>
<p className="text-gray-900 text-lg font-semibold">Emma! 👋</p>
</div>
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="user"></i>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold text-gray-900">Today's Progress</h3>
<span className="text-2xl">🎯</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-1">
<div className="bg-gray-200 rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<span className="text-sm font-medium text-gray-600">75%</span>
</div>
<p className="text-sm text-gray-500 mt-2">3 of 4 lessons completed</p>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-2xl border border-pink-200/50">
<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="palette"></i>
</div>
<p className="font-semibold text-gray-900 text-sm">Art &amp; Craft</p>
<p className="text-xs text-gray-600">12 lessons</p>
</div>
<div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-2xl border border-emerald-200/50">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="calculator"></i>
</div>
<p className="font-semibold text-gray-900 text-sm">Mathematics</p>
<p className="text-xs text-gray-600">8 lessons</p>
</div>
<div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl border border-amber-200/50">
<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="book"></i>
</div>
<p className="font-semibold text-gray-900 text-sm">Reading</p>
<p className="text-xs text-gray-600">15 lessons</p>
</div>
<div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-2xl border border-indigo-200/50">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="music"></i>
</div>
<p className="font-semibold text-gray-900 text-sm">Music</p>
<p className="text-xs text-gray-600">6 lessons</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 glass border-t border-gray-200/50 p-4">
<div className="flex justify-around">
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="home"></i>
</div>
<div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
</div>
<div className="w-8 h-8 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="search"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="bookmark"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>



    </>
  );
}
