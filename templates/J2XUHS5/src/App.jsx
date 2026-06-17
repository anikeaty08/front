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
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#fdba74" },
        shape: { type: "circle" },
        opacity: { value: 0.14, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#fdba74",
          opacity: 0.09,
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
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
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
      
<div className="max-w-4xl w-full bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden orange-pastel-shadow border border-orange-200 flex flex-col md:flex-row">

<div className="md:w-1/2 flex flex-col gap-8 relative z-10 justify-start body-font bg-white px-8 py-8">
<div className="flex flex-col gap-2">
<span className="px-3 py-1 bg-orange-100 rounded-full text-xs text-orange-500 w-fit">SITE OVERVIEW</span>
<h2 className="title-font text-3xl text-orange-900">Welcome</h2>
<h3 className="heading-font text-lg text-orange-700">Here's how your community is doing today:</h3>
</div>
<div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100 flex flex-col items-start">
<span className="text-xs text-orange-400 mb-1 body-font">Members</span>
<span className="heading-font text-lg text-orange-900">12,847</span>
</div>
<div className="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100 flex flex-col items-start">
<span className="text-xs text-orange-400 mb-1 body-font">Posts</span>
<span className="heading-font text-lg text-orange-900">45,320</span>
</div>
<div className="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100 flex flex-col items-start">
<span className="text-xs text-orange-400 mb-1 body-font">Active Today</span>
<span className="heading-font text-lg text-orange-900">1,290</span>
</div>
</div>
</div>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 bg-orange-100 rounded-lg">
<svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 10h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<span className="heading-font text-sm text-orange-900">Community Feed</span>
<p className="text-xs text-orange-400 body-font">Live discussions and trending topics.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 bg-orange-100 rounded-lg">
<svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a8 8 0 10-7.9 5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<span className="heading-font text-sm text-orange-900">Members Directory</span>
<p className="text-xs text-orange-400 body-font">Find and connect with peers.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5 p-2 bg-orange-100 rounded-lg">
<svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<span className="heading-font text-sm text-orange-900">Resource Center</span>
<p className="text-xs text-orange-400 body-font">Guides, tutorials &amp; more.</p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-3 mt-auto">
<a className="w-full sm:w-auto px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition heading-font text-sm flex items-center justify-center shadow-md shadow-orange-200 border border-orange-300" href="#">
          Go to Dashboard
          <svg className="h-4 w-4 ml-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-orange-50 hover:bg-orange-100 text-orange-900 rounded-lg transition heading-font text-sm flex items-center justify-center border border-orange-200" href="#">
          View Analytics
        </a>
</div>
</div>

<div className="md:w-1/2 relative overflow-hidden flex flex-col justify-between min-h-[32rem] body-font" style={{background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)'}}>
<div id="particles-js"></div>
<div className="absolute inset-0 z-0" style={{background: 'linear-gradient(135deg, rgba(255,237,213,0.95) 0%, rgba(255,247,237,0.9) 100%)'}}></div>
<div className="relative z-10 flex flex-col gap-8 h-full px-8 py-8">
<div className="">
<span className="px-3 py-1 bg-orange-100/80 rounded-full text-xs text-orange-400 mb-3 inline-block body-font">DETAILED INSIGHTS</span>
<h2 className="title-font text-2xl text-orange-900 mb-2">Recent Activity</h2>
<ul className="divide-y divide-orange-100">
<li className="py-2 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
<span className="text-sm body-font"><span className="font-medium text-orange-900">Jane Smith</span> posted a new topic: <span className="italic text-orange-700">"How to grow your network"</span></span>
<span className="ml-auto text-xs text-orange-400 body-font">2m ago</span>
</li>
<li className="py-2 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
<span className="text-sm body-font"><span className="font-medium text-orange-900">Alex Kim</span> joined the community.</span>
<span className="ml-auto text-xs text-orange-400 body-font">6m ago</span>
</li>
<li className="py-2 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="text-sm body-font"><span className="font-medium text-orange-900">Olivia Tran</span> commented on <span className="italic text-orange-700">"Tips for new members"</span></span>
<span className="ml-auto text-xs text-orange-400 body-font">12m ago</span>
</li>
</ul>
</div>
<div className="">
<h3 className="heading-font text-xl text-orange-900 mb-2">Quick Links</h3>
<div className="flex flex-wrap gap-3">
<a className="px-4 py-2 bg-orange-100 rounded-lg text-sm hover:bg-orange-200 transition border border-orange-200 heading-font text-orange-800" href="#">Notifications</a>
<a className="px-4 py-2 bg-orange-100 rounded-lg text-sm hover:bg-orange-200 transition border border-orange-200 heading-font text-orange-800" href="#">My Profile</a>
<a className="px-4 py-2 bg-orange-100 rounded-lg text-sm hover:bg-orange-200 transition border border-orange-200 heading-font text-orange-800" href="#">Settings</a>
<a className="px-4 py-2 bg-orange-100 rounded-lg text-sm hover:bg-orange-200 transition border border-orange-200 heading-font text-orange-800" href="#">Support</a>
</div>
</div>
<div className="">
<h3 className="heading-font text-xl text-orange-900 mb-2">Site Stats</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-orange-100/70 px-4 py-3 rounded-lg border border-orange-200 flex flex-col">
<span className="text-xs text-orange-400 mb-1 body-font">New Signups</span>
<span className="heading-font text-lg text-orange-900">56</span>
</div>
<div className="bg-orange-100/70 px-4 py-3 rounded-lg border border-orange-200 flex flex-col">
<span className="text-xs text-orange-400 mb-1 body-font">Unread Messages</span>
<span className="heading-font text-lg text-orange-900">8</span>
</div>
<div className="bg-orange-100/70 px-4 py-3 rounded-lg border border-orange-200 flex flex-col">
<span className="text-xs text-orange-400 mb-1 body-font">Pending Invites</span>
<span className="heading-font text-lg text-orange-900">3</span>
</div>
<div className="bg-orange-100/70 px-4 py-3 rounded-lg border border-orange-200 flex flex-col">
<span className="text-xs text-orange-400 mb-1 body-font">Tasks Due</span>
<span className="heading-font text-lg text-orange-900">2</span>
</div>
</div>
</div>
<div className="">
<h3 className="heading-font text-xl text-orange-900 mb-2">Notifications</h3>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm body-font">
<span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
<span className="text-orange-800">You have <span className="font-semibold">2</span> new messages.</span>
</li>
<li className="flex items-center gap-2 body-font text-sm">
<span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
<span className="text-orange-800">Reminder: Complete your profile setup.</span>
</li>
</ul>
</div>
</div>
</div>
</div>


    </>
  );
}
