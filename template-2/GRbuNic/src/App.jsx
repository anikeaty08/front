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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'linear-dark': '#101014',
            'linear-card': '#1b1b1f',
            'linear-border': '#26262b',
            'linear-text': '#9b9ba3',
            'linear-title': '#e5e5e5',
            'priority-high': '#f25353',
            'priority-medium': '#ffac33',
            'priority-low': '#3f8cff',
          }
        }
      }
    }
  


    function toggleDetails() {
      const details = document.getElementById('details');
      const chevron = document.getElementById('chevron');
      
      if (details.classList.contains('max-h-0')) {
        details.classList.remove('max-h-0');
        details.classList.add('max-h-96');
        chevron.classList.add('rotate-180');
      } else {
        details.classList.remove('max-h-96');
        details.classList.add('max-h-0');
        chevron.classList.remove('rotate-180');
      }
    }
  
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
      
<div className="max-w-md w-full">

<div className="bg-linear-card border border-linear-border rounded-lg p-4 hover:border-gray-600 transition-all duration-200">

<div className="flex items-center mb-3">

<div className="w-2 h-2 rounded-full bg-priority-high mr-2" title="High Priority"></div>

<span className="text-linear-text text-xs font-medium mr-2">TASK-42</span>

<div className="ml-auto flex items-center">
<div className="w-6 h-6 rounded-full overflow-hidden bg-linear-border flex items-center justify-center" title="Alex Johnson">
<img alt="Alex Johnson" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=12" />
</div>
</div>
</div>

<h3 className="text-linear-title text-sm font-medium mb-2">Implement user authentication flow with OAuth integration</h3>

<p className="text-linear-text text-xs mb-3">Create a seamless authentication experience with support for multiple providers and proper error handling.</p>

<div className="flex items-center text-xs text-linear-text">

<span className="flex items-center">
<svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" fillRule="evenodd"></path>
</svg>
          May 24
        </span>

<span className="flex items-center ml-3">
<svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" fillRule="evenodd"></path>
</svg>
          3
        </span>

<div className="ml-auto flex space-x-1">
<span className="px-2 py-0.5 rounded-full bg-opacity-20 bg-priority-low text-priority-low text-xs">Frontend</span>
<span className="px-2 py-0.5 rounded-full bg-opacity-20 bg-priority-medium text-priority-medium text-xs">API</span>
</div>
</div>

<button className="w-full flex justify-center items-center mt-3 text-linear-text hover:text-linear-title transition-colors duration-200 text-xs" onClick={(e) => { toggleDetails() }}>
<svg className="w-4 h-4 transform transition-transform duration-300" fill="none" id="chevron" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out" id="details">
<div className="pt-3 border-t border-linear-border mt-3">

<div className="mb-4">
<h4 className="text-linear-title text-xs font-medium mb-2">Activity</h4>
<div className="text-linear-text text-xs space-y-2">
<div className="flex items-start">
<div className="w-5 h-5 rounded-full overflow-hidden mr-2 flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=24" />
</div>
<div>
<p><span className="text-linear-title">Sarah Chen</span> changed priority to High</p>
<p className="text-xs opacity-60">Yesterday at 2:34 PM</p>
</div>
</div>
<div className="flex items-start">
<div className="w-5 h-5 rounded-full overflow-hidden mr-2 flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=12" />
</div>
<div>
<p><span className="text-linear-title">Alex Johnson</span> added API label</p>
<p className="text-xs opacity-60">May 22 at 10:15 AM</p>
</div>
</div>
</div>
</div>

<div className="mb-3">
<h4 className="text-linear-title text-xs font-medium mb-2">Calendar</h4>
<div className="bg-linear-dark rounded-md p-3 grid grid-cols-7 gap-1 text-center text-xs">
<div className="text-linear-text">Mo</div>
<div className="text-linear-text">Tu</div>
<div className="text-linear-text">We</div>
<div className="text-linear-text">Th</div>
<div className="text-linear-text">Fr</div>
<div className="text-linear-text">Sa</div>
<div className="text-linear-text">Su</div>
<div className="text-linear-text opacity-40">29</div>
<div className="text-linear-text opacity-40">30</div>
<div className="text-linear-text">1</div>
<div className="text-linear-text">2</div>
<div className="text-linear-text">3</div>
<div className="text-linear-text">4</div>
<div className="text-linear-text">5</div>
<div className="text-linear-text">6</div>
<div className="text-linear-text">7</div>
<div className="text-linear-text">8</div>
<div className="text-linear-text">9</div>
<div className="text-linear-text">10</div>
<div className="text-linear-text">11</div>
<div className="text-linear-text">12</div>
<div className="text-linear-text">13</div>
<div className="text-linear-text">14</div>
<div className="text-linear-text">15</div>
<div className="text-linear-text">16</div>
<div className="text-linear-text">17</div>
<div className="text-linear-text">18</div>
<div className="text-linear-text">19</div>
<div className="text-linear-text">20</div>
<div className="text-linear-text">21</div>
<div className="text-linear-text">22</div>
<div className="text-linear-text">23</div>
<div className="py-1 px-1 bg-priority-high bg-opacity-20 text-priority-high rounded-sm">24</div>
<div className="text-linear-text">25</div>
<div className="text-linear-text">26</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
