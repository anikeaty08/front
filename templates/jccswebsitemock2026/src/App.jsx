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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<a className="font-semibold text-xl tracking-tight text-slate-900 flex items-center gap-1" href="#home">
                        JCSS
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1"></span>
</a>
</div>

<div className="hidden lg:flex space-x-6 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#courses">Courses</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#parties">Parties</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#franchising">Franchising</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
<a className="ml-4 px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all shadow-sm shadow-red-200" href="#courses">
                        Book Now
                    </a>
</div>

<div className="flex items-center lg:hidden">
<label className="p-2 text-slate-600 hover:text-slate-900 cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</label>
</div>
</div>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden flex-col absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-4 space-y-4 shadow-lg lg:hidden opacity-0 -translate-y-2 transition-all duration-300" id="mobile-menu">
<a className="text-sm font-medium text-slate-600 hover:text-red-600" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600" href="#courses">Courses</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600" href="#parties">Parties</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600" href="#franchising">Franchising</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600" href="#contact">Contact</a>
<a className="w-full text-center px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg" href="#courses">Book Now</a>
</div>
</nav>

<section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="JCSS Football Coaching in Action" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6337d40-c6a6-4108-bfa6-f799a88efda8_1600w.jpg"/>
</div>

<div className="bg-slate-900/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6396d3de-4245-4000-9da9-e9a196dc8c4e_3840w.jpg)] bg-auto z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="z-10 bg-gradient-to-t from-white/10 to-transparent h-24 absolute right-0 bottom-0 left-0"></div>

<div className="z-20 container sm:px-6 lg:px-8 text-center mr-auto ml-auto pt-20 pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">New Term Enrolling Now</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
                Developing Players,<br/>
                Building People.
            </h1>
<p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
                Jack Collison Soccer School provides elite coaching for boys and girls aged 5–16. 
                We focus on technical skills, confidence, and the joy of the game.
            </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2" href="#courses">
                    Book a Course
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center" href="#contact">
                    Contact Us
                </a>
</div>
</div>
</section>

<section className="py-16 border-y border-slate-200 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Why parents choose JCSS</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Founded by former professional Jack Collison, we bring Premier League standards to grassroots football. Our environment is safe, inclusive, and designed to unlock every child's potential.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600">UEFA Qualified Professional Coaches</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600">A Supportive and Positive Coaching Environment</span>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Professional, engaging football sessions for all abilities.</span>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm group hover:border-red-100 transition-colors">
<iconify-icon className="text-red-600 mb-3" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">300+</div>
<div className="uppercase text-xs font-medium text-slate-400 tracking-wide mt-1">Players Monthly</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm group hover:border-red-100 transition-colors">
<iconify-icon className="text-red-600 mb-3" icon="solar:cup-star-linear" width="32"></iconify-icon>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Development Focused</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm group hover:border-red-100 transition-colors">
<iconify-icon className="text-red-600 mb-3" icon="solar:map-point-linear" width="32"></iconify-icon>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">4+</div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Locations</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm group hover:border-red-100 transition-colors">
<iconify-icon className="text-red-600 mb-3" icon="solar:smile-circle-linear" width="32"></iconify-icon>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">4.9/5</div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Parent Rating</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">More Than Just Football</h2>
<p className="text-slate-500 text-lg">
                At JCSS, our philosophy is simple: good people make good players. We use football as a vehicle to teach resilience, teamwork, and discipline.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8 text-center">
<div className="p-6 group">
<div className="w-12 h-12 mx-auto bg-slate-50 group-hover:bg-red-50 transition-colors rounded-full flex items-center justify-center mb-4 border border-slate-200 group-hover:border-red-100">
<iconify-icon className="text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:football-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Technical Excellence</h3>
<p className="text-sm text-slate-500">Mastery of the ball is the foundation. We focus on touch, control, and creativity in possession.</p>
</div>
<div className="p-6 group">
<div className="w-12 h-12 mx-auto bg-slate-50 group-hover:bg-red-50 transition-colors rounded-full flex items-center justify-center mb-4 border border-slate-200 group-hover:border-red-100">
<iconify-icon className="text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Player Confidence</h3>
<p className="text-sm text-slate-500">We create a pressure-free environment where mistakes are seen as learning opportunities.</p>
</div>
<div className="p-6 group">
<div className="w-12 h-12 mx-auto bg-slate-50 group-hover:bg-red-50 transition-colors rounded-full flex items-center justify-center mb-4 border border-slate-200 group-hover:border-red-100">
<iconify-icon className="text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Elite Pathways</h3>
<p className="text-sm text-slate-500">For those with exceptional potential, we provide guidance and pathways to professional academies.</p>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="courses">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Available Courses</h2>
<p className="text-slate-500 mt-2">Find the perfect session for your child and book online.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Boys</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Girls</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Ages 5-16</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<iconify-icon icon="solar:user-heart-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wide bg-slate-100 rounded pt-1 pr-2 pb-1 pl-2">Development</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Girls Development Centre - Friday</h3>
<p className="text-xs text-slate-400 mb-4">All Abilities • Ages 5-14</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Fun, inclusive sessions dedicated to developing players in a supportive space.</p>
<div className="border-slate-100 border-t mt-auto pt-4">
<div className="flex text-xs text-slate-500 mb-4 gap-x-2 gap-y-2 items-center">Fridays, 6:00 PM - 7:00 PM</div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col">
<div className="flex mb-4 items-start justify-between">
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<iconify-icon className="" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-semibold uppercase tracking-wide text-slate-500">Development</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Boys Development Centre - Friday</h3>
<p className="text-xs text-slate-400 mb-4">Intermediate • Ages 6-12</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Fun, inclusive sessions dedicated to developing players in a supportive space.</p>
<div className="border-slate-100 border-t mt-auto pt-4">
<div className="flex gap-2 text-xs text-slate-500 mb-4 gap-x-2 gap-y-2 items-center">Fridays, 5:15 PM - 6:15 PM @ RBA
Fridays, 6:30 PM - 7:30 PM @ Raynsford</div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-600">
<iconify-icon icon="solar:backpack-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wide bg-slate-100 rounded pt-1 pr-2 pb-1 pl-2">After School</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Shefford Lower - After School Session</h3>
<p className="text-xs text-slate-400 mb-4">After School • Years 1-4</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Convenient after-school sessions focusing on fundamentals and fun games.</p>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="flex gap-2 text-xs text-slate-500 mb-4 gap-x-2 gap-y-2 items-center">Weekdays, 3:20 PM - 4:32 PM</div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-semibold uppercase tracking-wide text-slate-500">Advanced</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Boys Advanced Centre - Monday </h3>
<p className="text-xs text-slate-400 mb-4">Advanced • Ages 9-13</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Intensive technical work and tactical understanding for serious young players.</p>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="flex gap-2 text-xs text-slate-500 mb-4 gap-x-2 gap-y-2 items-center">Mondays, 6:00 PM - 7:00 PM</div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<iconify-icon className="" icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-semibold uppercase tracking-wide text-slate-500">Advanced</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Girls Advanced Centre - Tuesday </h3>
<p className="text-xs text-slate-400 mb-4">Advanced • Ages 10-14</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Intensive technical work and tactical understanding for serious young players.</p>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Tuesdays, 6:00 PM - 7:30 PM
                        </div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group hover:shadow-lg hover:shadow-red-50 hover:border-red-100 transition-all duration-300 flex flex-col bg-white border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-600">
<iconify-icon className="" icon="solar:book-2-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wide bg-slate-100 rounded pt-1 pr-2 pb-1 pl-2">After School</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Wilstead Primary - After School Session</h3>
<p className="text-xs text-slate-400 mb-4">After School • Years 1-6</p>
<p className="flex-grow text-sm text-slate-500 mb-6">Convenient after-school sessions focusing on fundamentals and fun games.</p>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
<iconify-icon className="" icon="solar:clock-circle-linear"></iconify-icon> Wednesdays, 3:30 PM - 4:30 PM
                        </div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-100">Book Now</button>
</div>
</div>

<div className="group bg-slate-900 rounded-xl border border-slate-800 p-6 hover:shadow-lg hover:shadow-slate-800/20 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white/10 rounded-lg text-white">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 bg-red-600 text-white rounded text-[10px] font-semibold uppercase tracking-wide">Camp</span>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Feb Half-Term Camp</h3>
<p className="text-xs text-slate-400 mb-4">Boys &amp; Girls • Ages 5-15</p>
<p className="flex-grow text-sm text-slate-300 mb-6">5 days of football fun, tournaments, and skills challenges during the school break.</p>
<div className="border-t border-slate-700 pt-4 mt-auto">
<div className="flex gap-2 text-xs text-slate-400 mb-4 gap-x-2 gap-y-2 items-center">February 16 - 21, 10:00 AM - 3:00 PM</div>
<button className="w-full py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-500 transition-colors shadow-sm">Book Camp</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="parties">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-12 flex flex-col justify-center">
<div className="inline-block p-3 bg-red-100 rounded-xl text-red-600 w-fit mb-6">
<iconify-icon className="" icon="solar:confetti-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Football Birthday Parties</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                            Make their day unforgettable with a JCSS football party. We handle the entertainment so you can relax. Suitable for all abilities, boys and girls aged 5-14.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> 90 minutes of structured fun &amp; games
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Led by qualified JCSS coaches
                            </li>
<li className="flex gap-3 text-sm text-slate-700 gap-x-3 gap-y-3 items-center">"Birthday Player" trophy for birthday child</li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors w-fit shadow-md shadow-red-100" href="#contact">
                            Enquire About Parties
                        </a>
</div>
<div className="bg-slate-200 h-64 md:h-auto flex items-center justify-center text-slate-400 relative overflow-hidden">

<div className="opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/605b4d77-f771-4fad-ae3f-99123f6e3dd2_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="opacity-20 text-slate-500" icon="solar:gallery-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-200 border-t pt-20 pb-20" id="franchising">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Partner with JCSS</h2>
<p className="text-slate-500 max-w-2xl mx-auto mb-12">
                Join our growing network. JCSS Franchising offers a unique opportunity to build a successful coaching business with our proven methodology and brand support.
            </p>
<div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
<div className="p-6 border border-slate-200 rounded-xl hover:border-red-500 transition-colors cursor-default bg-white group">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">Proven Model</h3>
<p className="text-sm text-slate-500">Access to our syllabus, booking systems, and business roadmap.</p>
</div>
<div className="p-6 border border-slate-200 rounded-xl hover:border-red-500 transition-colors cursor-default bg-white group">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">Brand Power</h3>
<p className="text-sm text-slate-500">Leverage the reputation of Jack Collison and our established presence.</p>
</div>
<div className="p-6 border border-slate-200 rounded-xl hover:border-red-500 transition-colors cursor-default bg-white group">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">Ongoing Support</h3>
<p className="text-sm text-slate-500">Continuous mentoring, marketing assets, and coaching education.</p>
</div>
</div>
<button className="px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-red-600 hover:text-red-600 transition-all bg-white hover:shadow-md hover:shadow-red-50">
                Register Franchising Interest
            </button>
</div>
</section>

<section className="bg-slate-50 pt-20 pb-20" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">JCSS in Action</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
<div className="col-span-2 row-span-2 bg-center bg-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6337d40-c6a6-4108-bfa6-f799a88efda8_1600w.jpg)] bg-cover border-slate-300/50 border rounded-xl"></div>
<div className="bg-center bg-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65312c3d-4901-480b-9aa5-3503a9aeff77_800w.jpg)] bg-cover border-slate-300/50 border rounded-xl"></div>
<div className="bg-center bg-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af78bab2-3bd4-4532-b28c-5849dd83378b_800w.jpg)] bg-cover border-slate-300/50 rounded-md"></div>
<div className="bg-center bg-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7f81090-c54c-41c9-bbd1-db34d2fdf21d_800w.jpg)] bg-cover border-slate-300/50 border rounded-xl"></div>
<div className="bg-center bg-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a08eff9-343c-480b-a956-95ab5ac2e4de_800w.jpg)] bg-cover border-slate-300/50 border rounded-xl"></div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-12 text-center">What Parents Say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
<div className="flex text-red-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-4">"My son's confidence has grown massively since joining JCSS. The coaches are fantastic at encouraging the kids."</p>
<p className="text-xs font-semibold text-slate-900">Sarah J.</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
<div className="flex text-red-500 mb-4">
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-4">"Great organization and professional training. The Friday Elite sessions are top class."</p>
<p className="text-xs font-semibold text-slate-900">Mark T.</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
<div className="flex text-red-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-4">"My daughter loves the girls-only sessions. It's great to see her so happy playing football."</p>
<p className="text-xs font-semibold text-slate-900">Emma R.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Get in Touch</h2>
<p className="text-slate-400 mb-8">
                        Have a question about a course, party, or franchise opportunity? Fill out the form and we'll get back to you.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-slate-300">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span className="">info@jackcollisonsoccerschool.com</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<span className="">+44 7000 000000</span>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Subject</label>
<select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors">
<option>Course Enquiry</option>
<option>Birthday Party</option>
<option>Franchising</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
<textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" rows="4"></textarea>
</div>
<button className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-red-900/20" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-400 text-sm">
                © 2023 Jack Collison Soccer School. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
