import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Initialize VANTA.FOG
    VANTA.FOG({
      el: "#bg-animation",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xd4a7f0,
      midtoneColor: 0x63c5b7,
      lowlightColor: 0x568bfa,
      blurFactor: 0.73,
      speed: 2.10,
      zoom: 0.50
    });

    // Animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden min-h-screen" id="bg-animation">

<div className="absolute inset-x-0 bottom-0 h-64 wave-bg -z-10 opacity-70"></div>
<div className="absolute inset-x-0 top-0 h-64 wave-bg-top -z-10 opacity-70"></div>

<nav className="container mx-auto px-6 py-6 relative z-10">
<div className="flex items-center justify-between fade-in">
<div className="text-2xl font-semibold text-gray-800">mindful<span className="text-[#A78BFA]">.</span></div>

<div className="md:hidden">
<button className="text-gray-600 focus:outline-none" id="menu-toggle">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Features</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Pricing</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Resources</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">About</a>
</div>
<div className="hidden md:flex items-center space-x-4">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Login</a>
<a className="px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors" href="#">Sign Up</a>
</div>
</div>

<div className="md:hidden hidden pt-4 pb-2 fade-in" id="mobile-menu">
<div className="flex flex-col space-y-3 px-2 bg-white/80 backdrop-blur-sm rounded-lg p-4">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Features</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Pricing</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Resources</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">About</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Login</a>
<a className="text-center px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="container mx-auto px-6 py-16 md:py-20 relative z-10 overflow-hidden">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 slide-in-up">Features Designed for <span className="text-[#A78BFA]">Inner Peace</span></h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto slide-in-up delay-1">Our science-backed tools help you build a regular mindfulness practice that sticks and transforms your daily life.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-left delay-1">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Guided Meditations</h3>
<p className="text-gray-600 mb-4">Over 500+ guided sessions with expert teachers to help you sleep better, reduce stress, and improve focus.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-up delay-2">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Mood Tracking</h3>
<p className="text-gray-600 mb-4">Track your emotional patterns with our intuitive daily check-ins and discover what affects your mental wellbeing.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-right delay-3">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Timer &amp; Reminders</h3>
<p className="text-gray-600 mb-4">Customize mindfulness reminders and use our gentle timer with ambient sounds to maintain a consistent practice.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-left delay-4">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Community Support</h3>
<p className="text-gray-600 mb-4">Connect with like-minded individuals on their mindfulness journey and share experiences in a supportive environment.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-up delay-5">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Breathing Exercises</h3>
<p className="text-gray-600 mb-4">Interactive breathing techniques with visual guides to help manage anxiety, improve sleep, and boost energy when needed.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative overflow-hidden slide-in-right delay-6">
<div className="absolute -right-10 -top-10 w-24 h-24 bg-[#A78BFA]/10 rounded-full"></div>
<div className="w-14 h-14 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-[#A78BFA]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Programs</h3>
<p className="text-gray-600 mb-4">Custom meditation programs tailored to your specific needs, whether it's better sleep, stress reduction, or improved focus.</p>
<a className="inline-flex items-center text-[#A78BFA] hover:underline" href="#">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>
</div>


    </>
  );
}
