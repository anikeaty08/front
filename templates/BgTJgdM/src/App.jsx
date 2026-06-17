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
            dark: '#101014',
            accent: '#5E6AD2',
            subtle: 'rgba(255,255,255,0.1)'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        }
      }
    }
  


    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x5E6AD2,
        backgroundColor: 0x101014,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 20.00
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 z-0" id="vanta-bg"></div>
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="fixed top-0 left-0 h-full w-64 bg-[#15151B] border-r border-subtle z-20 overflow-auto">
<div className="p-5 flex items-center border-b border-subtle">
<svg className="w-7 h-7" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-3 text-lg font-medium">Quantum AI</span>
</div>
<div className="p-5">
<button className="w-full bg-accent hover:bg-opacity-90 text-white py-2 px-4 rounded-md flex items-center justify-center">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          New Chat
        </button>
</div>
<div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">Recent Chats</div>
<div className="space-y-1 px-3">
<a className="flex items-center py-2 px-3 rounded-md bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Marketing strategy ideas</span>
</a>
<a className="flex items-center py-2 px-3 rounded-md hover:bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Product feature analysis</span>
</a>
<a className="flex items-center py-2 px-3 rounded-md hover:bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Code review assistance</span>
</a>
</div>
<div className="px-3 py-2 mt-6 text-xs font-medium text-gray-400 uppercase">Tools</div>
<div className="space-y-1 px-3">
<a className="flex items-center py-2 px-3 rounded-md hover:bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Image Generator</span>
</a>
<a className="flex items-center py-2 px-3 rounded-md hover:bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Voice Assistant</span>
</a>
<a className="flex items-center py-2 px-3 rounded-md hover:bg-subtle" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Document Analysis</span>
</a>
</div>
</div>

<div className="ml-64 relative z-10">

<div className="h-16 border-b border-subtle flex items-center justify-between px-6">
<div className="flex items-center space-x-4">
<button className="p-2 rounded-md hover:bg-subtle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<span className="text-sm">Marketing strategy ideas</span>
</div>
<div className="flex items-center space-x-3">
<button className="p-2 rounded-md hover:bg-subtle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded-md hover:bg-subtle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
<span className="text-sm font-medium">JD</span>
</div>
</div>
</div>

<div className="h-[calc(100vh-16rem)] overflow-y-auto px-6 py-8">

<div className="flex mb-6">
<div className="w-8 h-8 rounded-full bg-[#5E6AD2] flex items-center justify-center mr-4 flex-shrink-0">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-[#1E1E26] rounded-lg p-4 max-w-3xl">
<p className="text-gray-300">Hi there! I'm your Quantum AI assistant. I can help you brainstorm marketing strategies for your business. What kind of product or service are you looking to market?</p>
</div>
</div>

<div className="flex mb-6 justify-end">
<div className="bg-accent bg-opacity-20 rounded-lg p-4 max-w-3xl">
<p className="text-gray-100">I'm launching a new SaaS product that helps small businesses manage their social media accounts. I need some creative marketing ideas that won't break the bank.</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#2A2A35] flex items-center justify-center ml-4 flex-shrink-0">
<span className="text-sm font-medium">JD</span>
</div>
</div>

<div className="flex mb-6">
<div className="w-8 h-8 rounded-full bg-[#5E6AD2] flex items-center justify-center mr-4 flex-shrink-0">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-[#1E1E26] rounded-lg p-4 max-w-3xl">
<p className="text-gray-300">Great! Here are some cost-effective marketing strategies for your social media management SaaS:</p>
<ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
<li>Create a referral program that gives existing customers a discount for each new business they bring in</li>
<li>Develop free educational content about social media best practices to establish authority</li>
<li>Offer a limited free tier to showcase your product's value</li>
<li>Partner with complementary SaaS tools for cross-promotion</li>
<li>Run targeted social media ads with A/B testing to optimize ROI</li>
</ol>
<p className="mt-3 text-gray-300">Would you like me to elaborate on any of these strategies?</p>
</div>
</div>
</div>

<div className="h-32 border-t border-subtle px-6 py-4">
<div className="bg-[#1E1E26] border border-subtle rounded-lg p-3">
<textarea className="w-full bg-transparent outline-none resize-none text-gray-300 placeholder-gray-500" placeholder="Type your message..." rows="2"></textarea>
<div className="flex justify-between items-center mt-2">
<div className="flex space-x-2">
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<button className="bg-accent hover:bg-opacity-90 text-white py-2 px-4 rounded-md flex items-center">
<span>Send</span>
<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
