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
</div>
</nav>

<section className="container mx-auto px-6 py-8 md:py-12 flex items-center justify-center min-h-[80vh] relative z-10">
<div className="max-w-4xl w-full fade-in delay-1">

<div className="text-center mb-10">
<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Personalize Your Experience</h1>
<p className="text-gray-600 max-w-xl mx-auto">Complete these steps to create a mindfulness practice that's unique to you.</p>

<div className="flex items-center justify-center space-x-2 mt-6">
<div className="step-indicator active w-3 h-3 rounded-full bg-[#A78BFA]"></div>
<div className="step-indicator w-3 h-3 rounded-full bg-gray-300"></div>
<div className="step-indicator w-3 h-3 rounded-full bg-gray-300"></div>
<div className="step-indicator w-3 h-3 rounded-full bg-gray-300"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="onboarding-card bg-white rounded-2xl shadow-md p-6 md:p-8 relative">
<div className="absolute top-6 right-6 bg-[#A78BFA]/10 text-[#A78BFA] text-sm font-medium rounded-full px-3 py-1">Step 1</div>
<h2 className="text-xl font-semibold text-gray-800 mb-4">Choose your focus</h2>
<p className="text-gray-600 mb-5">Select what you'd like to work on most:</p>
<div className="grid grid-cols-2 gap-3">
<button className="focus-option text-left p-3 rounded-lg border border-gray-200 flex items-center space-x-2">
<span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B]">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd"></path>
</svg>
</span>
<span>Stress</span>
</button>
<button className="focus-option selected text-left p-3 rounded-lg border border-[#A78BFA] bg-[#A78BFA]/10 flex items-center space-x-2">
<span className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#3B82F6]">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
</svg>
</span>
<span>Sleep</span>
</button>
<button className="focus-option text-left p-3 rounded-lg border border-gray-200 flex items-center space-x-2">
<span className="w-8 h-8 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#6366F1]">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" fillRule="evenodd"></path>
<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
</svg>
</span>
<span>Focus</span>
</button>
<button className="focus-option text-left p-3 rounded-lg border border-gray-200 flex items-center space-x-2">
<span className="w-8 h-8 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#EC4899]">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fillRule="evenodd"></path>
</svg>
</span>
<span>Anxiety</span>
</button>
<button className="focus-option text-left p-3 rounded-lg border border-gray-200 flex items-center space-x-2 col-span-2">
<span className="w-8 h-8 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#10B981]">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" fillRule="evenodd"></path>
</svg>
</span>
<span>Self-Love</span>
</button>
</div>
</div>

<div className="onboarding-card bg-white rounded-2xl shadow-md p-6 md:p-8 relative">
<div className="absolute top-6 right-6 bg-gray-100 text-gray-500 text-sm font-medium rounded-full px-3 py-1">Step 2</div>
<h2 className="text-xl font-semibold text-gray-800 mb-4">Set your daily check-in reminder</h2>
<p className="text-gray-600 mb-5">When would you like to be reminded?</p>
<div className="mb-5">
<label className="block text-sm font-medium text-gray-600 mb-2">Preferred time</label>
<div className="flex space-x-3">
<select className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50">
<option>8:00 AM</option>
<option>9:00 AM</option>
<option selected>7:30 PM</option>
<option>8:30 PM</option>
<option>9:00 PM</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-600 mb-2">Frequency</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5">Mon</button>
<button className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5">Tue</button>
<button className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5">Wed</button>
<button className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5">Thu</button>
<button className="px-3 py-2 rounded-lg border border-[#A78BFA] bg-[#A78BFA]/10 text-sm text-gray-700 font-medium">Fri</button>
<button className="px-3 py-2 rounded-lg border border-[#A78BFA] bg-[#A78BFA]/10 text-sm text-gray-700 font-medium">Sat</button>
<button className="px-3 py-2 rounded-lg border border-[#A78BFA] bg-[#A78BFA]/10 text-sm text-gray-700 font-medium">Sun</button>
</div>
</div>
</div>

<div className="onboarding-card bg-white rounded-2xl shadow-md p-6 md:p-8 relative">
<div className="absolute top-6 right-6 bg-gray-100 text-gray-500 text-sm font-medium rounded-full px-3 py-1">Step 3</div>
<h2 className="text-xl font-semibold text-gray-800 mb-4">Select a voice or guide</h2>
<p className="text-gray-600 mb-5">Choose a voice that resonates with you:</p>
<div className="space-y-3">
<div className="p-3 rounded-lg border border-gray-200 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5 cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center">
<svg className="h-5 w-5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path>
</svg>
</div>
<h3 className="font-medium text-gray-800">Sarah</h3>
</div>
<span className="text-sm text-gray-500">Calming</span>
</div>
<div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full opacity-25"></div>
<div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full"></div>
</div>
</div>
<div className="p-3 rounded-lg border border-[#A78BFA] bg-[#A78BFA]/10 cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center">
<svg className="h-5 w-5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path>
</svg>
</div>
<h3 className="font-medium text-gray-800">Michael</h3>
</div>
<span className="text-sm text-gray-500">Energizing</span>
</div>
<div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full opacity-25"></div>
<div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full"></div>
</div>
</div>
<div className="p-3 rounded-lg border border-gray-200 hover:border-[#A78BFA] hover:bg-[#A78BFA]/5 cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center">
<svg className="h-5 w-5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path>
</svg>
</div>
<h3 className="font-medium text-gray-800">Emma</h3>
</div>
<span className="text-sm text-gray-500">Gentle</span>
</div>
<div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full opacity-25"></div>
<div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="onboarding-card bg-white rounded-2xl shadow-md p-6 md:p-8 relative">
<div className="absolute top-6 right-6 bg-gray-100 text-gray-500 text-sm font-medium rounded-full px-3 py-1">Step 4</div>
<h2 className="text-xl font-semibold text-gray-800 mb-4">Your journey begins 🌿</h2>
<p className="text-gray-600 mb-8">Your personalized mindfulness plan is ready to help you find balance and peace.</p>
<div className="bg-[#F8F7FF] rounded-lg p-4 mb-6">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-[#A78BFA] flex items-center justify-center flex-shrink-0 mt-1">
<svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-800">All set!</h3>
<p className="text-sm text-gray-600 mt-1">We've created a personalized program based on your preferences.</p>
</div>
</div>
</div>
<button className="w-full py-3 px-6 bg-[#A78BFA] text-white font-medium rounded-lg shadow-md hover:bg-[#9061F9] transition-colors flex items-center justify-center">
              Begin Your Journey
              <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
