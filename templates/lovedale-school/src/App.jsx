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
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="bg-stone-100 py-4 px-6 lg:px-12 sticky top-0 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-lg">L</span>
</div>
<span className="text-xl font-semibold text-stone-800 tracking-tight">Lovedale.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1" href="#">
                    Programs <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Admissions</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Contact</a>
</div>
<button className="hidden md:block bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition">
                Enroll Now
            </button>
<button className="md:hidden">
<i className="w-6 h-6 text-stone-700" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="px-6 lg:px-12 py-12 lg:py-16">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 mb-6">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=40&amp;h=40&amp;fit=crop"/>
<span className="text-red-500 text-2xl">🎈</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-800 tracking-tight leading-tight">
                    Nurturing your child's <span className="text-amber-600 italic font-serif">Future</span><br/>
                    with holistic education
                </h1>
<div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-sm text-stone-600">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> CBSE Affiliated
                    </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Since 2005
                    </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i> Nursery to Grade 10
                    </span>
</div>
<button className="mt-8 bg-orange-500 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition inline-flex items-center gap-2">
                    Start Learning <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
<p className="mt-4 text-sm text-stone-500">We don't just educate minds,<br/>we nurture complete individuals.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
<div className="relative">
<img alt="Student" className="rounded-3xl w-full h-64 md:h-80 object-cover" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
<span className="text-orange-500">🎯</span>
<span className="text-xs font-medium">Goal Oriented</span>
</div>
</div>
<div className="relative md:mt-12">
<img alt="Learning" className="rounded-3xl w-full h-64 md:h-80 object-cover" src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute top-4 right-4">
<svg className="w-16 h-16 text-amber-400" viewbox="0 0 100 100">
<path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="relative col-span-2 md:col-span-1">
<img alt="Happy Student" className="rounded-3xl w-full h-64 md:h-80 object-cover" src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="text-3xl">🌿</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-8">
<div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-orange-500" data-lucide="users"></i>
</div>
<div className="text-3xl font-semibold text-stone-800 tracking-tight">18+</div>
<p className="text-sm text-stone-500 mt-1">Years of Excellence<br/>since 2005</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-green-600" data-lucide="graduation-cap"></i>
</div>
<div className="text-3xl font-semibold text-stone-800 tracking-tight">500+</div>
<p className="text-sm text-stone-500 mt-1">Happy students<br/>and counting</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-purple-600" data-lucide="book-open"></i>
</div>
<div className="text-3xl font-semibold text-stone-800 tracking-tight">10</div>
<p className="text-sm text-stone-500 mt-1">Grade levels<br/>Nursery to X</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-amber-600" data-lucide="award"></i>
</div>
<div className="text-3xl font-semibold text-stone-800 tracking-tight">50+</div>
<p className="text-sm text-stone-500 mt-1">Experienced<br/>educators</p>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-16">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight">
                        Smart and curious kids<br/>ready to <span className="text-amber-600 italic font-serif">fly high!</span>
</h2>
</div>
<div className="mt-4 md:mt-0">
<p className="text-base text-stone-600 max-w-sm">Learn holistically with us. We teach 'One Complete Lesson' at a time!</p>
<button className="mt-4 text-sm font-medium text-stone-800 flex items-center gap-2 hover:text-amber-600 transition">
                        Enroll Now <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-green-200 rounded-3xl p-6 relative overflow-hidden">
<img alt="Life Skills" className="rounded-2xl w-full h-48 object-cover mb-4" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&amp;h=400&amp;fit=crop"/>
<h3 className="text-xl font-semibold text-stone-800 tracking-tight">Life Skills<br/>for Kids</h3>
<div className="absolute top-4 right-4">
<span className="text-2xl">🏀</span>
</div>
</div>
<div className="bg-amber-400 rounded-3xl p-6 relative overflow-hidden">
<img alt="Imagination" className="rounded-2xl w-full h-48 object-cover mb-4" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&amp;h=400&amp;fit=crop"/>
<h3 className="text-xl font-semibold text-white tracking-tight">Imagination<br/>is power</h3>
</div>
<div className="bg-stone-200 rounded-3xl p-6 relative overflow-hidden">
<img alt="Grow" className="rounded-2xl w-full h-48 object-cover mb-4" src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&amp;h=400&amp;fit=crop"/>
<h3 className="text-xl font-semibold text-stone-800 tracking-tight">Grow<br/>your own<br/>wings</h3>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-16 bg-stone-50">
<div className="max-w-7xl mx-auto text-center">
<p className="text-sm text-stone-500 mb-4">We focus on one impactful lesson at a time</p>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight mb-12">
                Shaping the <span className="text-green-600 italic font-serif">future</span> of kids
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<div className="bg-amber-100 rounded-3xl p-4 mb-4 relative">
<img alt="Letter" className="rounded-2xl w-full h-32 object-cover" src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=200&amp;h=200&amp;fit=crop"/>
<span className="absolute top-2 left-2 text-xl">☀️</span>
</div>
<h4 className="font-semibold text-stone-800 text-sm">Letter Identification</h4>
<p className="text-xs text-stone-500">Pre School</p>
</div>
<div className="text-center">
<div className="bg-rose-100 rounded-3xl p-4 mb-4">
<img alt="Knowledge" className="rounded-2xl w-full h-32 object-cover" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&amp;h=200&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-stone-800 text-sm">General Knowledge</h4>
<p className="text-xs text-stone-500">Primary School</p>
</div>
<div className="text-center">
<div className="bg-blue-100 rounded-3xl p-4 mb-4 relative">
<img alt="Science" className="rounded-2xl w-full h-32 object-cover" src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&amp;h=200&amp;fit=crop"/>
<span className="absolute bottom-2 right-2 text-xl">📢</span>
</div>
<h4 className="font-semibold text-stone-800 text-sm">Science &amp; Math</h4>
<p className="text-xs text-stone-500">Middle School</p>
</div>
<div className="text-center">
<div className="bg-green-100 rounded-3xl p-4 mb-4">
<img alt="Arts" className="rounded-2xl w-full h-32 object-cover" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&amp;h=200&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-stone-800 text-sm">CBSE Curriculum</h4>
<p className="text-xs text-stone-500">High School</p>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-16">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
<div className="bg-stone-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="max-w-xs">
<h3 className="text-2xl md:text-3xl font-semibold text-stone-800 tracking-tight mb-4">
                        Confidence that builds a brighter future.
                    </h3>
<p className="text-base text-stone-600 mb-6">Empowering kids with confidence to create a successful future.</p>
<button className="bg-white text-stone-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition inline-flex items-center gap-2">
                        Book Now <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<img alt="Student" className="absolute bottom-0 right-0 w-40 h-48 object-cover rounded-tl-3xl hidden md:block" src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&amp;h=400&amp;fit=crop"/>
</div>
<div className="bg-amber-400 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="max-w-xs">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                        Helping kids to achieve their dreams.
                    </h3>
<p className="text-base text-amber-100 mb-6">Inspiring kids to aim <span className="underline">higher</span>.</p>
<button className="bg-white text-amber-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-50 transition inline-flex items-center gap-2">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<span className="absolute top-4 right-4 text-4xl">⭐</span>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-16">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="inline-block border border-stone-300 rounded-full px-4 py-1.5 text-xs font-medium text-stone-600 mb-6">Admission Open</span>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight mb-6">
                        Empower your kids<br/>to think be <span className="text-green-600 italic font-serif">smarter and sharper</span>
</h2>
<p className="text-base text-stone-600 mb-8">Encourage kids to think critically, be creative, and solve problems for a better future at Lovedale International School.</p>
<button className="bg-orange-500 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition inline-flex items-center gap-2">
                        Get Enrolled <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="relative">
<img alt="Happy Student" className="rounded-3xl w-full h-96 object-cover" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&amp;h=600&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 flex gap-4">
<div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="check"></i>
</div>
<div>
<div className="text-xl font-semibold text-stone-800">500+</div>
<p className="text-xs text-stone-500">Happy students</p>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="star"></i>
</div>
<div>
<div className="text-xl font-semibold text-stone-800">18+</div>
<p className="text-xs text-stone-500">Years serving</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-16">
<div className="max-w-5xl mx-auto bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<span className="inline-block bg-amber-400 text-amber-900 rounded-full px-4 py-1.5 text-xs font-semibold mb-4">Upcoming Event</span>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                Building children<br/>one at a time
            </h3>
<p className="text-base text-green-100 mb-6 max-w-sm">Excellence Flows from the Fountains of Knowledge at Lovedale International School.</p>
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<span className="text-sm font-medium">Admissions Open 2025</span>
</div>
<div className="absolute right-8 top-8 hidden md:block">
<span className="text-6xl">📚</span>
</div>
<div className="absolute right-4 bottom-4">
<span className="text-4xl">🌍</span>
</div>
</div>
</section>

<footer className="bg-stone-100 border-t border-stone-200 px-6 lg:px-12 py-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div>
<h5 className="text-sm font-semibold text-stone-800 mb-4">For Pre School</h5>
<h5 className="text-sm font-semibold text-stone-800 mb-4">For Primary</h5>
<h5 className="text-sm font-semibold text-stone-800">For High School</h5>
</div>
<div>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">About Us</a>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">Careers</a>
<a className="block text-sm text-stone-600 hover:text-stone-900" href="#">Press &amp; Media</a>
</div>
<div>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">Programs</a>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">Admissions</a>
<a className="block text-sm text-stone-600 hover:text-stone-900" href="#">Curriculum</a>
</div>
<div>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">FAQ's</a>
<a className="block text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">Contact Us</a>
<a className="block text-sm text-stone-600 hover:text-stone-900" href="#">Help</a>
</div>
<div>
<a className="flex items-center gap-2 text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">
<span className="font-medium">in</span> LinkedIn
                    </a>
<a className="flex items-center gap-2 text-sm text-stone-600 mb-3 hover:text-stone-900" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i> Instagram
                    </a>
<a className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i> Facebook
                    </a>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-lg">L</span>
</div>
<span className="text-xl font-semibold text-stone-800 tracking-tight">Lovedale.</span>
</div>
<div className="flex flex-wrap gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-stone-600" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Find Us</p>
<p className="text-xs text-stone-500">Road No. 10, Banjara Hills</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-stone-600" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Call Us</p>
<p className="text-xs text-stone-500">+91 98492 67605</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-stone-600" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Email Us</p>
<p className="text-xs text-stone-500">info@lovedaleschool.com</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 pt-6 border-t border-stone-200 gap-4">
<div className="flex gap-4 text-xs text-stone-500">
<a className="hover:text-stone-700" href="#">Privacy Policy</a>
<a className="hover:text-stone-700" href="#">Terms of Use</a>
</div>
<p className="text-xs text-stone-500">©Lovedale International School. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
