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



        // Custom Dropdown Functionality
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        const dropdownMenu = document.getElementById('roleDropdown');
        const dropdownDisplay = document.getElementById('roleDisplay');
        const dropdownChevron = document.getElementById('dropdownChevron');
        const dropdownOptions = document.querySelectorAll('.dropdown-option');
        
        let selectedValue = '';
        let isOpen = false;

        function toggleDropdown() {
            isOpen = !isOpen;
            dropdownMenu.classList.toggle('open', isOpen);
            dropdownChevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        function closeDropdown() {
            isOpen = false;
            dropdownMenu.classList.remove('open');
            dropdownChevron.style.transform = 'rotate(0deg)';
        }

        dropdownTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });

        document.addEventListener('click', (e) => {
            if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
                closeDropdown();
            }
        });

        dropdownOptions.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                const text = option.textContent.trim();
                
                selectedValue = value;
                dropdownDisplay.querySelector('span').textContent = text;
                dropdownDisplay.querySelector('span').classList.remove('text-gray-300');
                dropdownDisplay.querySelector('span').classList.add('text-white');
                
                closeDropdown();
            });
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
      

<div className="relative flex flex-col overflow-hidden cursor-default beautiful-shadow transition-custom max-w-2xl w-full font-semibold text-white rounded-3xl mx-4">
<div className="absolute z-0 inset-0 backdrop-blur-md glass-filter overflow-hidden isolate"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-15"></div>
<div className="absolute inset-0 z-20 overflow-hidden shadow-inner" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)`, borderRadius: `24px`}}></div>

<div className="z-30 h-2/4 flex flex-col relative text-center bg-black/10 pt-8 pr-8 pb-8 pl-8 items-center justify-center">

<div className="mb-4">
<div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-3 overflow-hidden">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-gradient-to-br from-white/30 to-white/10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 3px 3px 2px 0 rgba(255, 255, 255, 0.6), inset -2px -2px 2px 2px rgba(255, 255, 255, 0.4)`, borderRadius: `16px`}}></div>
<svg className="z-30 text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<h1 className="leading-tight text-5xl font-normal text-white tracking-tighter mb-2">Welcome to Glass</h1>
<p className="leading-relaxed text-sm font-light text-white/80">Let's get you set up with your new account in just a few simple steps.</p>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="step-indicator active w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold backdrop-blur-sm">1</div>
<span className="text-xs font-medium text-white/90 hidden sm:block">Personal</span>
</div>
<div className="w-6 h-px bg-white/30"></div>
<div className="flex items-center gap-2">
<div className="step-indicator w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold backdrop-blur-sm bg-white/10">2</div>
<span className="text-xs font-medium text-white/60 hidden sm:block">Preferences</span>
</div>
<div className="w-6 h-px bg-white/30"></div>
<div className="flex items-center gap-2">
<div className="step-indicator w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold backdrop-blur-sm bg-white/10">3</div>
<span className="text-xs font-medium text-white/60 hidden sm:block">Complete</span>
</div>
</div>
</div>

<div className="z-30 h-full flex flex-col p-8 justify-start overflow-y-auto">

<div className="mb-6">
<h2 className="text-2xl font-medium text-white mb-2">Tell us about yourself</h2>
<p className="text-sm font-normal text-white/70">Step 1 of 3 • This helps us personalize your experience</p>
</div>

<form className="flex-1 mb-6 space-y-4">

<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-white mb-2" htmlFor="firstName">First name</label>
<div className="relative overflow-hidden rounded-xl">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)`, borderRadius: `12px`}}></div>
<input className="z-30 relative bg-transparent w-full px-4 py-3 text-sm placeholder-gray-300 text-white border-none focus:outline-none" id="firstName" placeholder="John" required type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2" htmlFor="lastName">Last name</label>
<div className="relative overflow-hidden rounded-xl">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)`, borderRadius: `12px`}}></div>
<input className="z-30 relative bg-transparent w-full px-4 py-3 text-sm placeholder-gray-300 text-white border-none focus:outline-none" id="lastName" placeholder="Doe" required type="text" />
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-white mb-2" htmlFor="company">Company</label>
<div className="relative overflow-hidden rounded-xl">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)`, borderRadius: `12px`}}></div>
<input className="z-30 relative bg-transparent w-full px-4 py-3 text-sm placeholder-gray-300 text-white border-none focus:outline-none" id="company" placeholder="Acme Corp" required type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-white mb-2" htmlFor="role">Your role</label>
<div className="dropdown-container">
<div className="relative overflow-hidden rounded-xl dropdown-trigger">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)`, borderRadius: `12px`}}></div>
<div className="z-30 relative w-full px-4 py-3 text-sm text-white flex items-center justify-between" id="roleDisplay">
<span className="text-gray-300">Select your role</span>
<svg className="text-white/50 transition-transform duration-200" fill="none" height="16" id="dropdownChevron" stroke="currentColor" viewBox="0 0 24 24" width="16">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="dropdown-menu" id="roleDropdown">
<div className="relative overflow-hidden rounded-xl">
<div className="absolute z-0 inset-0 backdrop-blur-lg glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-15"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)`, borderRadius: `12px`}}></div>
<div className="z-30 relative py-2">
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="designer">Designer</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="developer">Developer</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="manager">Manager</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="founder">Founder</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="marketing">Marketing</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="sales">Sales</div>
<div className="dropdown-option px-4 py-2 text-sm text-white bg-white/5" data-value="other">Other</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-white mb-2" htmlFor="password">Create password</label>
<div className="relative overflow-hidden rounded-xl">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-white bg-opacity-10"></div>
<div className="absolute inset-0 z-20" style={{boxShadow: `inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)`, borderRadius: `12px`}}></div>
<input className="z-30 relative bg-transparent w-full px-4 py-3 text-sm placeholder-gray-300 text-white border-none focus:outline-none" id="password" placeholder="Minimum 8 characters" required type="password" />
</div>
</div>

<div className="flex gap-3 pt-2 items-center">
<input className="w-4 h-4 bg-opacity-20 border-opacity-30 focus:ring-0 focus:ring-offset-0 bg-white border-white rounded" required type="checkbox" />
<p className="leading-relaxed text-sm font-normal text-white/70">
                        I agree to the <a className="text-white hover:opacity-80 transition-opacity font-medium underline" href="#">Terms of Service</a> and <a className="text-white hover:opacity-80 transition-opacity font-medium underline" href="#">Privacy Policy</a>
</p>
</div>

<div className="relative overflow-hidden rounded-xl cursor-pointer transition-custom hover:shadow-lg pt-4">
<div className="absolute z-0 inset-0 backdrop-blur-sm glass-filter"></div>
<div className="z-10 absolute inset-0 bg-gradient-to-r from-white/30 to-white/20"></div>
<div className="absolute inset-0 z-20 items-center" style={{boxShadow: `inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3)`, borderRadius: `12px`}}></div>
<button className="z-30 relative w-full border-none flex gap-2 text-sm font-semibold text-white bg-transparent pt-0 pr-4 pb-3 pl-4 items-center justify-center" type="submit">
<span>Continue to Step 2</span>
<svg fill="none" height="16" stroke="currentColor" viewBox="0 0 24 24" width="16">
<path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</form>

<div className="text-center mt-auto">
<p className="text-sm font-normal text-white/70 mb-3">
                    Already have an account? 
                    <a className="text-white hover:opacity-80 transition-opacity font-semibold ml-1" href="#">Sign in here</a>
</p>
<div className="flex gap-4 text-xs font-normal text-white/50 items-center justify-center">
<a className="hover:text-white/70 transition-colors" href="#">Help Center</a>
<span>•</span>
<a className="hover:text-white/70 transition-colors" href="#">Contact Support</a>
</div>
</div>
</div>
</div>


    </>
  );
}
