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



    // Handle option selection
    const optionButtons = document.querySelectorAll('.option-btn');
    const selectedOptionInput = document.getElementById('selectedOption');
    const continueBtn = document.getElementById('continueBtn');
    const userName = document.getElementById('userName');
    
    function checkFormValidity() {
      if (userName.value.trim() !== '' && selectedOptionInput.value !== '') {
        continueBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      } else {
        continueBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }
    
    optionButtons.forEach(button => {
      button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedOptionInput.value = button.dataset.value;
        checkFormValidity();
      });
    });
    
    userName.addEventListener('input', checkFormValidity);
    
    continueBtn.addEventListener('click', () => {
      if (userName.value.trim() !== '' && selectedOptionInput.value !== '') {
        alert(`Thanks, ${userName.value}! You selected: ${selectedOptionInput.value}`);
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
      
<div className="w-full max-w-4xl bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
<div className="p-6 md:p-8">

<div className="flex justify-between items-center mb-8">
<div className="text-xl font-medium text-gray-800">Material</div>
<button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-medium">Skip</button>
</div>

<div className="grid md:grid-cols-2 gap-8 items-center">

<div className="order-2 md:order-1 flex justify-center">
<div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-indigo-50 flex items-center justify-center">
<img alt="Onboarding visual" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
</div>
</div>

<div className="order-1 md:order-2">
<div className="flex space-x-2 mb-6">
<div className="h-1 w-8 rounded-full bg-indigo-600"></div>
<div className="h-1 w-6 rounded-full bg-gray-200"></div>
<div className="h-1 w-6 rounded-full bg-gray-200"></div>
<div className="h-1 w-6 rounded-full bg-gray-200"></div>
</div>
<h1 className="text-2xl md:text-3xl font-light mb-4 text-gray-800">Discover your creative <span className="font-medium">potential</span></h1>
<p className="text-gray-600 mb-6 text-base">
            Welcome to a new way of bringing your ideas to life. Our platform helps you transform concepts into reality.
          </p>

<div className="space-y-5 mb-6">
<div>
<label className="block text-gray-700 text-sm font-medium mb-2">What should we call you?</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500" id="userName" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-gray-700 text-sm font-medium mb-2">What brings you here today?</label>
<div className="grid grid-cols-2 gap-2" id="options-container">
<button className="option-btn text-left px-4 py-3 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors" data-value="personal">
<span className="text-sm font-medium text-gray-800">Personal projects</span>
</button>
<button className="option-btn text-left px-4 py-3 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors" data-value="work">
<span className="text-sm font-medium text-gray-800">Work & business</span>
</button>
<button className="option-btn text-left px-4 py-3 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors" data-value="education">
<span className="text-sm font-medium text-gray-800">Education</span>
</button>
<button className="option-btn text-left px-4 py-3 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors" data-value="exploring">
<span className="text-sm font-medium text-gray-800">Just exploring</span>
</button>
</div>
<input id="selectedOption" type="hidden" value="" />
</div>
</div>

<div className="flex space-x-3">
<button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2.5 font-medium transition-colors opacity-50 cursor-not-allowed" id="continueBtn">
              Continue
            </button>
<button className="w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="mt-6 text-gray-500 text-xs">
<p>By continuing, you agree to our <a className="text-indigo-600 hover:underline" href="#">Terms of Service</a> and <a className="text-indigo-600 hover:underline" href="#">Privacy Policy</a></p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
