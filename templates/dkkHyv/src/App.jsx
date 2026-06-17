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
                    fontFamily: {
                        'geist': ['Geist', 'sans-serif'],
                    },
                    animation: {
                        'typing-1': 'fadeInOut 1.5s ease-in-out infinite',
                        'typing-2': 'fadeInOut 1.5s ease-in-out infinite 0.3s',
                        'typing-3': 'fadeInOut 1.5s ease-in-out infinite 0.6s',
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                    },
                    keyframes: {
                        fadeInOut: {
                            '0%, 100%': { opacity: 0.3 },
                            '50%': { opacity: 1 }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        pulseGlow: {
                            '0%, 100%': { opacity: 0.4 },
                            '50%': { opacity: 0.7 }
                        }
                    }
                }
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
      
<div className="w-full relative max-w-md">

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white to-blue-500 transform scale-[0.80] rounded-full blur-3xl opacity-40 animate-pulse-glow"></div>

<div className="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden rounded-2xl flex flex-col hover:shadow-2xl transition-shadow duration-300">

<div className="p-6 flex justify-center bg-gradient-to-b from-gray-800 to-gray-900">

<div className="w-full max-w-xs bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg animate-float">

<div className="bg-gray-800 border-b border-gray-700 p-3 flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold avatar-pulse">M</div>
<div>
<div className="text-white text-sm font-medium">Meng</div>
<div className="text-green-400 text-xs flex items-center">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                                    Online
                                </div>
</div>
</div>
<div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
</div>
</div>

<div className="p-3 bg-gray-900 h-48 overflow-hidden">

<div className="flex flex-col space-y-3">

<div className="flex items-start message-bubble-in">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs mr-2">C</div>
<div className="bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%] shadow-md">
<p className="text-gray-300 text-xs">How can I help you today?</p>
<p className="text-gray-500 text-[10px] mt-1">11:42 AM</p>
</div>
</div>

<div className="flex items-start justify-end message-bubble-out">
<div className="bg-blue-700 rounded-lg rounded-tr-none p-2 max-w-[80%] shadow-md">
<p className="text-white text-xs">I need help with the new AI features</p>
<p className="text-blue-300 text-[10px] mt-1">11:43 AM</p>
</div>
</div>

<div className="flex items-start message-bubble-new">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs mr-2">C</div>
<div className="bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%] shadow-md">
<p className="text-gray-300 text-xs">Sure! I can explain the new smart reply feature. Would you like a demo?</p>
<p className="text-gray-500 text-[10px] mt-1">11:43 AM</p>
</div>
</div>

<div className="flex items-start mt-2 opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs mr-2">M</div>
<div className="bg-gray-800 rounded-lg p-3 inline-flex space-x-1">
<div className="w-2 h-2 rounded-full bg-gray-500 animate-typing-1"></div>
<div className="w-2 h-2 rounded-full bg-gray-500 animate-typing-2"></div>
<div className="w-2 h-2 rounded-full bg-gray-500 animate-typing-3"></div>
</div>
</div>
</div>
</div>

<div className="p-2 bg-gray-800 border-t border-gray-700 flex items-center">
<div className="flex-1 bg-gray-700 rounded-full px-3 py-2 text-xs text-gray-400 hover:bg-gray-600 transition-colors cursor-text">Type a message...</div>
<button className="ml-2 p-2 rounded-full bg-blue-600 text-white send-btn-hover">
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

<div className="p-6">

<span className="inline-block px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-xs font-medium mb-3">AI Assistant</span>

<h3 className="text-xl font-medium text-white mb-2">Smart Conversations</h3>

<p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    Experience natural conversations with our AI assistant that learns your preferences and provides personalized responses in real-time.
                </p>

<div className="flex justify-between items-center">
<a className="text-blue-400 hover:text-blue-300 transition flex items-center text-sm font-medium group" href="#">
                        Try it now
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<span className="text-gray-500 text-xs">Premium feature</span>
</div>
</div>
</div>
</div>

    </>
  );
}
