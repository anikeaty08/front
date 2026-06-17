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



    // Initialize animations on page load
    document.addEventListener('DOMContentLoaded', function() {
      // Animate elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all animated elements
      document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .blur-in, .fade-in, .scale-in').forEach(el => {
        observer.observe(el);
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu');
      if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
          // Add mobile menu functionality here
          console.log('Mobile menu clicked');
        });
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
      

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-black/80 border-gray-900 slide-in-up animate-in">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight font-geist">Prism Studio</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors font-geist text-gray-300 hover:text-teal-400" href="#home">Home</a>
<a className="text-sm font-medium transition-colors font-geist text-gray-300 hover:text-teal-400" href="#about">About</a>
<a className="text-sm font-medium transition-colors font-geist text-gray-300 hover:text-teal-400" href="#services">Services</a>
<a className="text-sm font-medium transition-colors font-geist text-gray-300 hover:text-teal-400" href="#work">Work</a>
<a className="text-sm font-medium transition-colors font-geist text-gray-300 hover:text-teal-400" href="#testimonials">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 font-geist bg-gray-100 text-black hover:bg-gray-200" href="#contact">
            Let's Talk <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900" id="mobile-menu">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden bg-[url(https://cdn.midjourney.com/d5ecaf44-94b7-47f5-9bb8-5d1967358128/0_0.png?w=800&amp;q=80)] bg-cover pt-24 pb-16" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div className="">
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-medium tracking-tight font-jakarta text-gray-100 slide-in-left animate-in">
              Design That 
              <span className="bg-clip-text slide-in-left delay-200 animate-in font-medium text-transparent font-jakarta bg-gradient-to-r from-[#3c4f56] to-[#e7edf1]">Converts</span>
</h1>
<p className="mt-6 text-lg max-w-xl font-geist text-gray-400 slide-in-left delay-300 animate-in">
              We create sophisticated digital experiences that drive results. From concept to conversion, we design with purpose and precision.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 slide-in-left delay-400 animate-in">
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 font-geist text-black bg-teal-400 hover:bg-teal-300" href="#work">
              View Our Work <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 font-geist bg-gray-900 text-gray-100 hover:bg-gray-800" href="#about">
              Learn More <svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</a>
</div>
<div className="flex items-center gap-6 slide-in-left delay-500 animate-in">
<div className="flex -space-x-2">
<img className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=320&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1630926906914-f98970d8894c?w=320&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80"/>
<div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black bg-teal-400">
<span className="text-sm font-medium font-geist text-black">50+</span>
</div>
</div>
<div>
<p className="text-sm font-medium font-geist text-gray-100">Trusted by 50+ companies</p>
<p className="text-sm text-gray-500 font-geist">From startups to enterprises</p>
</div>
</div>
</div>
<div className="relative blur-in delay-600 animate-in">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Design workspace" className="w-full h-[500px] object-cover" src="https://cdn.midjourney.com/c3289185-0786-422e-b449-32ef8428f66e/0_0.png?w=800&amp;q=80"/>
<div className="absolute top-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-right delay-800 animate-in">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-[#2a3333] rounded-full items-center justify-center">
<svg className="lucide lucide-trending-up w-[20px] h-[20px] text-neutral-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-geist text-gray-100">Conversion Rate</p>
<p className="text-lg font-bold text-neutral-100 font-geist">+147%</p>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-left delay-900 animate-in">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-[#262b2b] rounded-full items-center justify-center">
<svg className="lucide lucide-users w-[20px] h-[20px] text-neutral-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium font-geist text-gray-100">User Engagement</p>
<p className="text-lg font-bold text-neutral-100 font-geist">+89%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-gray-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-gray-500 mb-8 font-geist fade-in animate-in">Trusted by leading brands</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
<div className="flex items-center justify-center gap-3 transition-colors text-gray-400 slide-in-up delay-100 hover:text-teal-400">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-medium font-geist">Nexus Labs</span>
</div>
<div className="flex items-center justify-center gap-3 transition-colors text-gray-400 slide-in-up delay-200 hover:text-teal-400">
<svg className="lucide lucide-rocket w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-medium font-geist">Velocity</span>
</div>
<div className="flex items-center justify-center gap-3 transition-colors text-gray-400 slide-in-up delay-300 hover:text-teal-400">
<svg className="lucide lucide-shield w-6 h-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-medium font-geist">Fortress</span>
</div>
<div className="flex items-center justify-center gap-3 transition-colors text-gray-400 slide-in-up delay-400 hover:text-teal-400">
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-medium font-geist">Orbit</span>
</div>
<div className="flex items-center justify-center gap-3 transition-colors text-gray-400 slide-in-up delay-500 hover:text-teal-400">
<svg className="lucide lucide-diamond w-6 h-6" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
<span className="font-medium font-geist">Prism</span>
</div>
</div>
</div>
</section>

<section className="py-20" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<p className="text-sm font-medium uppercase tracking-wider font-geist slide-in-left text-teal-400">About Prism Studio</p>
<h2 className="mt-4 text-3xl lg:text-4xl tracking-tight font-jakarta font-medium text-gray-100 slide-in-left delay-200">
              We Don't Just Design—<br/>We Engineer Success
            </h2>
<p className="mt-6 text-lg font-geist text-gray-400 slide-in-left delay-300">
              Founded in 2019, Prism Studio has been at the forefront of digital transformation, helping ambitious companies create experiences that resonate with their audience and drive measurable results.
            </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-black border-gray-800 scale-in delay-400">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-900 rounded-lg items-center justify-center">
<svg className="lucide lucide-award w-[20px] h-[20px] text-neutral-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="text-2xl font-jakarta font-medium text-gray-100">150+</p>
<p className="text-sm font-geist text-gray-400">Projects Delivered</p>
</div>
</div>
</div>
<div className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-black border-gray-800 scale-in delay-500">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 flex bg-neutral-900 rounded-lg items-center justify-center">
<svg className="lucide lucide-heart w-[20px] h-[20px] text-neutral-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div>
<p className="text-2xl font-jakarta font-medium text-gray-100">98%</p>
<p className="text-sm font-geist text-gray-400">Client Satisfaction</p>
</div>
</div>
</div>
</div>
<div className="slide-in-left delay-600">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 font-geist bg-gray-100 text-black hover:bg-gray-200" href="#services">
              Discover Our Process <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Team collaboration" className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-200" src="https://images.unsplash.com/photo-1675981004381-6305f7dd07fe?w=800&amp;q=80"/>
<img alt="Design process" className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-400" src="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?w=800&amp;q=80"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Creative workspace" className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-300" src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=800&amp;q=80"/>
<img alt="Strategy session" className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-500" src="https://images.unsplash.com/photo-1644251966613-170a26996adb?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-950" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-sm font-medium uppercase tracking-wider font-geist slide-in-up text-teal-400">Our Services</p>
<h2 className="mt-4 text-3xl lg:text-4xl tracking-tight font-jakarta font-medium text-gray-100 slide-in-up delay-200">
          Everything You Need to Scale
        </h2>
<p className="mt-6 text-lg font-geist text-gray-400 slide-in-up delay-300">
          From strategy to execution, we provide end-to-end solutions that transform your vision into reality.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-400">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-teal-900">
<svg className="lucide lucide-palette w-6 h-6 text-indigo-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">Brand Identity</h3>
<p className="mb-4 font-geist text-gray-400">Crafting memorable brand experiences that resonate with your audience and differentiate you from competitors.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Logo &amp; Visual Identity
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Brand Guidelines
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Marketing Materials
            </li>
</ul>
</div>
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-500">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-purple-900">
<svg className="lucide lucide-layout w-6 h-6 text-purple-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">UI/UX Design</h3>
<p className="mb-4 font-geist text-gray-400">Creating intuitive, beautiful interfaces that users love and that drive engagement and conversion.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              User Research &amp; Testing
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Wireframing &amp; Prototyping
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Responsive Design
            </li>
</ul>
</div>
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-600">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-green-900">
<svg className="lucide lucide-code w-6 h-6 text-green-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">Development</h3>
<p className="mb-4 font-geist text-gray-400">Building fast, secure, and scalable applications using modern technologies and best practices.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Frontend Development
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Backend Solutions
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Performance Optimization
            </li>
</ul>
</div>
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-700">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-orange-900">
<svg className="lucide lucide-megaphone w-6 h-6 text-orange-400" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">Digital Marketing</h3>
<p className="mb-4 font-geist text-gray-400">Strategically promoting your brand across digital channels to maximize reach and engagement.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SEO Optimization
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Social Media Strategy
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Content Strategy
            </li>
</ul>
</div>
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-800">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-red-900">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-red-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">E-commerce</h3>
<p className="mb-4 font-geist text-gray-400">Building powerful online stores that drive sales and provide exceptional shopping experiences.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Store Development
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Payment Integration
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Inventory Management
            </li>
</ul>
</div>
<div className="p-8 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-black border-gray-800 scale-in delay-900">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-teal-900">
<svg className="lucide lucide-headphones w-6 h-6 text-teal-400" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 font-geist text-gray-100">Support &amp; Maintenance</h3>
<p className="mb-4 font-geist text-gray-400">Ongoing support and maintenance to ensure your digital presence stays secure and up-to-date.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              24/7 Monitoring
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Security Updates
            </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Performance Optimization
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-sm font-medium uppercase tracking-wider font-geist slide-in-up text-teal-400">Let's Work Together</p>
<h2 className="mt-4 text-3xl lg:text-4xl tracking-tight font-jakarta font-medium text-gray-100 slide-in-up delay-200">
          Ready to Transform Your Business?
        </h2>
<p className="mt-6 text-lg font-geist text-gray-400 slide-in-up delay-300">
          Get in touch today and let's discuss how we can help you achieve your goals.
        </p>
</div>
<div className="max-w-2xl mx-auto">
<div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 scale-in delay-400">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-300 mb-2 font-geist">First Name</label>
<input className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 text-gray-100 font-geist focus:ring-teal-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2 font-geist">Last Name</label>
<input className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 text-gray-100 font-geist focus:ring-teal-500" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2 font-geist">Email</label>
<input className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 text-gray-100 font-geist focus:ring-teal-500" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2 font-geist">Project Type</label>
<select className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 text-gray-100 font-geist focus:ring-teal-500">
<option>Brand Identity</option>
<option>UI/UX Design</option>
<option>Web Development</option>
<option>E-commerce</option>
<option>Digital Marketing</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2 font-geist">Message</label>
<textarea className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 text-gray-100 font-geist focus:ring-teal-500" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-8 text-black font-medium rounded-lg transition-colors duration-200 font-geist bg-teal-400 hover:bg-teal-300" type="submit">
              Send Message
            </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 border-t border-gray-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="fade-in">
<h3 className="text-lg font-semibold mb-4 font-geist text-gray-100">Prism Studio</h3>
<p className="text-gray-400 font-geist">Design that converts. We create sophisticated digital experiences that drive results.</p>
</div>
<div className="fade-in delay-200">
<h4 className="text-sm font-medium uppercase tracking-wider mb-4 font-geist text-gray-300">Services</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Brand Identity</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">UI/UX Design</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Development</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Digital Marketing</a></li>
</ul>
</div>
<div className="fade-in delay-400">
<h4 className="text-sm font-medium uppercase tracking-wider mb-4 font-geist text-gray-300">Company</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">About</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Work</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Careers</a></li>
<li><a className="transition-colors font-geist hover:text-teal-400" href="#">Contact</a></li>
</ul>
</div>
<div className="fade-in delay-600">
<h4 className="text-sm font-medium uppercase tracking-wider mb-4 font-geist text-gray-300">Connect</h4>
<div className="flex space-x-4">
<a className="text-gray-400 transition-colors hover:text-teal-400" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
</a>
<a className="text-gray-400 transition-colors hover:text-teal-400" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 transition-colors hover:text-teal-400" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
<p className="font-geist">© 2024 Prism Studio. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
