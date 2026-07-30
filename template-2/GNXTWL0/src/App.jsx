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



    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#d4d4d8" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: false },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#a1a1aa",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 }
        }
      },
      retina_detect: true
    });

    function toggleDropdown(type) {
      const dropdown = document.getElementById(type + 'Dropdown').parentElement;
      const isActive = dropdown.classList.contains('active');
      
      // Close all dropdowns
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
      
      // Toggle current dropdown
      if (!isActive) {
        dropdown.classList.add('active');
      }
    }

    function selectOption(type, value) {
      document.getElementById(type + 'Selected').textContent = value;
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
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
      
<div className="max-w-5xl w-full bg-white backdrop-blur-lg rounded-2xl overflow-hidden beautiful-shadow border border-neutral-200 flex">

<div className="w-80 bg-gradient-to-b from-neutral-900 to-neutral-800 relative" id="particles-container">
<div id="particles-js"></div>

<div className="relative z-10 p-6 border-b border-neutral-700">
<span className="px-3 py-1 bg-neutral-700/80 rounded-full text-xs text-neutral-300 mb-3 inline-block">CONTROL PANEL</span>
<h2 className="heading-font text-2xl text-white">Settings</h2>
<div className="h-1 w-12 bg-neutral-400 mt-2 rounded-full"></div>
</div>

<nav className="relative z-10 p-6">
<div className="space-y-2">
<a className="flex items-center px-4 py-3 bg-neutral-700/50 text-white rounded-lg border border-neutral-600/50" href="#">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
</svg>
            Profile
          </a>
<a className="flex items-center px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700/30 rounded-lg transition" href="#">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
            Notifications
          </a>
<a className="flex items-center px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700/30 rounded-lg transition" href="#">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
<path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z" fillRule="evenodd"></path>
</svg>
            Security
          </a>
<a className="flex items-center px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700/30 rounded-lg transition" href="#">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
<path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fillRule="evenodd"></path>
</svg>
            Preferences
          </a>
</div>
</nav>

<div className="absolute bottom-6 left-6 bg-neutral-800/80 backdrop-blur-sm rounded-lg px-4 py-3 z-10 border border-neutral-700">
<div className="text-xs text-neutral-400 mb-1">Account Status</div>
<div className="heading-font text-sm text-green-400 flex items-center">
<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          Active
        </div>
</div>
</div>

<div className="flex-1 bg-white flex items-center">
<div className="w-full px-8 py-8">
<div className="max-w-2xl mx-auto">
<span className="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-500 mb-4 inline-block">PROFILE SETTINGS</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">Account Information</h3>
<p className="text-sm text-neutral-500 mb-8">Manage your profile details and account preferences</p>
<form className="space-y-6">

<div>
<label className="block text-xs font-medium text-neutral-600 tracking-wide mb-3">PROFILE PHOTO</label>
<div className="flex items-center space-x-4">
<div className="w-16 h-16 flex items-center justify-center bg-neutral-200 rounded-full">
<svg className="w-8 h-8 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
</svg>
</div>
<button className="hover:bg-neutral-200 transition text-sm text-neutral-700 bg-neutral-100 rounded-lg px-4 py-2" type="button">
                  Change Photo
                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">FIRST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-neutral-400 transition text-sm" type="text" value="John" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">LAST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-neutral-400 transition text-sm" type="text" value="Doe" />
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">EMAIL ADDRESS</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-neutral-400 transition text-sm" type="email" value="john@company.com" />
</div>

<div>
<label className="block text-xs font-medium text-neutral-600 tracking-wide mb-2">JOB TITLE</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="Senior Developer" type="text" />
</div>

<div className="dropdown">
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">LANGUAGE</label>
<button className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-neutral-400 transition text-sm flex items-center justify-between" onClick={(e) => { toggleDropdown('language') }} type="button">
<span id="languageSelected">English (US)</span>
<svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="dropdown-content" id="languageDropdown">
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('language', 'English (US)') }}>English (US)</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('language', 'English (UK)') }}>English (UK)</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('language', 'Spanish') }}>Spanish</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('language', 'French') }}>French</div>
</div>
</div>

<div className="dropdown">
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">TIMEZONE</label>
<button className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-neutral-400 transition text-sm flex items-center justify-between" onClick={(e) => { toggleDropdown('timezone') }} type="button">
<span id="timezoneSelected">UTC-8 (Pacific Time)</span>
<svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="dropdown-content" id="timezoneDropdown">
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('timezone', 'UTC-8 (Pacific Time)') }}>UTC-8 (Pacific Time)</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('timezone', 'UTC-5 (Eastern Time)') }}>UTC-5 (Eastern Time)</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('timezone', 'UTC+0 (GMT)') }}>UTC+0 (GMT)</div>
<div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer text-sm" onClick={(e) => { selectOption('timezone', 'UTC+1 (Central European Time)') }}>UTC+1 (Central European Time)</div>
</div>
</div>

<div className="flex space-x-3 pt-4">
<button className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition heading-font text-sm" type="submit">
                Save Changes
              </button>
<button className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition heading-font text-sm" type="button">
                Cancel
              </button>
</div>
</form>
</div>
</div>
</div>
</div>


    </>
  );
}
