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



        let currentStep = 1;
        const totalSteps = 4;

        const stepData = {
            1: { title: "Welcome to", subtitle: "Our Community", progress: "Getting Started" },
            2: { title: "Tell Us", subtitle: "About You", progress: "Personal Info" },
            3: { title: "Secure Your", subtitle: "Account", progress: "Account Setup" },
            4: { title: "You're All", subtitle: "Set!", progress: "Complete" }
        };

        function updateStep() {
            // Update progress
            const progressPercent = (currentStep / totalSteps) * 100;
            document.getElementById('progress').style.width = progressPercent + '%';
            document.getElementById('step-counter').textContent = currentStep;

            // Update titles
            const data = stepData[currentStep];
            document.getElementById('step-title').textContent = data.title;
            document.getElementById('step-subtitle').textContent = data.subtitle;
            document.getElementById('progress-text').textContent = data.progress;

            // Update step visibility
            for (let i = 1; i <= totalSteps; i++) {
                const step = document.getElementById(`step-${i}`);
                step.classList.remove('active', 'prev', 'next');
                
                if (i === currentStep) {
                    step.classList.add('active');
                } else if (i < currentStep) {
                    step.classList.add('prev');
                } else {
                    step.classList.add('next');
                }
            }
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStep();
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateStep();
            }
        }

        // Initialize particles
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#d4d4d8" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: false },
                size: { value: 2, random: true },
                line_linked: { enable: true, distance: 150, color: "#a1a1aa", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
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
      
<div className="max-w-4xl w-full bg-white backdrop-blur-lg rounded-2xl overflow-hidden beautiful-shadow border border-neutral-200 flex flex-col md:flex-row">

<div className="md:w-1/2 h-72 md:h-auto relative bg-gradient-to-br from-neutral-900 to-neutral-800" id="particles-container">
<div id="particles-js"></div>

<div className="absolute top-6 left-6 right-6 z-10">
<div className="bg-neutral-700 rounded-full h-1 mb-4">
<div className="bg-neutral-300 h-1 rounded-full progress-bar" id="progress" style={{width: `25%`}}></div>
</div>
<span className="px-3 py-1 bg-neutral-700/80 rounded-full text-xs text-neutral-300 mb-3 inline-block">STEP <span id="step-counter">1</span> OF 4</span>
</div>
<div className="absolute top-20 left-6 z-10">
<h2 className="heading-font text-3xl text-white fade-in" id="step-title">Welcome to</h2>
<h2 className="heading-font text-3xl text-white fade-in" id="step-subtitle">Our Community</h2>
<div className="h-1 w-16 bg-neutral-400 mt-3 rounded-full fade-in"></div>
</div>
<div className="absolute bottom-6 left-6 bg-neutral-800/80 backdrop-blur-sm rounded-lg px-4 py-3 z-10 border border-neutral-700">
<div className="text-xs text-neutral-400 mb-1">Progress</div>
<div className="heading-font text-lg text-neutral-200" id="progress-text">Getting Started</div>
</div>
</div>

<div className="md:w-1/2 p-8 bg-white relative overflow-hidden">

<div className="step active" id="step-1">
<span className="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-500 mb-4 inline-block">WELCOME</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">Let's Get Started</h3>
<p className="text-neutral-500 text-sm mb-8">We'll help you set up your account in just a few simple steps.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
<span className="text-xs font-medium text-neutral-600">1</span>
</div>
<span className="text-sm text-neutral-600">Personal Information</span>
</div>
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
<span className="text-xs font-medium text-neutral-600">2</span>
</div>
<span className="text-sm text-neutral-600">Account Setup</span>
</div>
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
<span className="text-xs font-medium text-neutral-600">3</span>
</div>
<span className="text-sm text-neutral-600">Preferences</span>
</div>
</div>
<button className="w-full px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition heading-font text-sm flex items-center justify-center" onClick={(e) => { nextStep() }}>
                    Get Started
                    <svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>

<div className="step next absolute top-8 left-8 right-8" id="step-2">
<span className="px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-600 mb-4 inline-block">PERSONAL INFO</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">Tell Us About You</h3>
<p className="text-neutral-500 text-sm mb-6">Basic information to personalize your experience.</p>
<div className="space-y-4 mb-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">FIRST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="John" type="text" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">LAST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="Doe" type="text" />
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">EMAIL ADDRESS</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="john@company.com" type="email" />
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition heading-font text-sm" onClick={(e) => { prevStep() }}>Back</button>
<button className="flex-1 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition heading-font text-sm" onClick={(e) => { nextStep() }}>Continue</button>
</div>
</div>

<div className="step next absolute top-8 left-8 right-8" id="step-3">
<span className="px-3 py-1 bg-green-100 rounded-full text-xs text-green-600 mb-4 inline-block">ACCOUNT SETUP</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">Secure Your Account</h3>
<p className="text-neutral-500 text-sm mb-6">Choose a strong password and username.</p>
<div className="space-y-4 mb-6">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">USERNAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="johndoe" type="text" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">PASSWORD</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="••••••••" type="password" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">CONFIRM PASSWORD</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="••••••••" type="password" />
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition heading-font text-sm" onClick={(e) => { prevStep() }}>Back</button>
<button className="flex-1 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition heading-font text-sm" onClick={(e) => { nextStep() }}>Continue</button>
</div>
</div>

<div className="step next absolute top-8 left-8 right-8" id="step-4">
<span className="px-3 py-1 bg-purple-100 rounded-full text-xs text-purple-600 mb-4 inline-block">COMPLETE</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">You're All Set!</h3>
<p className="text-neutral-500 text-sm mb-8">Welcome to our community. Let's start your journey.</p>
<div className="bg-neutral-50 rounded-lg p-6 mb-6">
<div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
<svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-center text-sm text-neutral-600">Your account has been created successfully!</p>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition heading-font text-sm" onClick={(e) => { prevStep() }}>Back</button>
<button className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition heading-font text-sm">Enter Dashboard</button>
</div>
</div>
</div>
</div>


    </>
  );
}
