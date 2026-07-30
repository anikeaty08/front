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
      
<div className="relative overflow-hidden min-h-screen" id="bg-animation">

<div className="absolute inset-x-0 bottom-0 h-64 wave-bg -z-10 opacity-70"></div>
<div className="absolute inset-x-0 top-0 h-64 wave-bg-top -z-10 opacity-70"></div>

<nav className="container mx-auto px-6 py-6 relative z-10">
<div className="flex items-center justify-between fade-in">
<div className="text-2xl font-semibold text-gray-800">mindful<span className="text-[#A78BFA]">.</span></div>

<div className="md:hidden">
<button className="text-gray-600 focus:outline-none" id="menu-toggle">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

<section className="container mx-auto px-6 py-12 relative z-10">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-16 fade-in delay-1">
<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Your Safe Space for <span className="text-[#A78BFA]">Reflection</span>
</h1>
<div className="w-24 h-1 bg-gradient-to-r from-[#A78BFA] to-purple-400 mx-auto rounded-full"></div>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in delay-2">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-[#A78BFA]/20 rounded-xl flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-800">Digital Journal Entries</h3>
</div>
<p className="text-gray-600 mb-4">Capture your thoughts and feelings with guided daily prompts designed to encourage self-reflection and emotional awareness.</p>
<div className="text-sm text-[#A78BFA] font-medium">Daily prompts available</div>
</div>

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in delay-3">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-[#A78BFA]/20 rounded-xl flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-800">Thought Logs</h3>
</div>
<p className="text-gray-600 mb-4">Practice CBT-style thought reframing exercises to identify patterns and develop healthier thinking habits.</p>
<div className="text-sm text-[#A78BFA] font-medium">CBT-based approach</div>
</div>

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in delay-4">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-[#A78BFA]/20 rounded-xl flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-800">Meditation History</h3>
</div>
<p className="text-gray-600 mb-4">Track your mindfulness journey with detailed logs of past meditation sessions and progress insights.</p>
<div className="text-sm text-[#A78BFA] font-medium">Progress tracking included</div>
</div>

<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in delay-4">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-[#A78BFA]/20 rounded-xl flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-800">PDF Export Option</h3>
</div>
<p className="text-gray-600 mb-4">Share your progress with healthcare providers through secure PDF exports for comprehensive therapist review.</p>
<div className="text-sm text-[#A78BFA] font-medium">Therapist collaboration ready</div>
</div>
</div>

<div className="text-center mt-16 fade-in delay-4">
<a className="inline-block px-8 py-4 text-white font-medium bg-[#A78BFA] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" href="#">
                        Start Your Reflection Journey
                    </a>
</div>
</div>
</section>
</div>


    </>
  );
}
