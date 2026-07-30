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

<header className="relative z-10 px-6 py-4 flex items-center border-b border-subtle">
<a className="mr-4" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<h1 className="text-lg font-medium">New Chat</h1>
<div className="ml-auto flex items-center space-x-4">
<button className="p-2 rounded-full hover:bg-subtle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</header>

<main className="relative z-10 p-6">

<div className="text-center mb-12">
<svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h1 className="text-2xl font-bold mb-2">How can I help you today?</h1>
<p className="text-gray-400 max-w-md mx-auto">Ask me anything or choose from the suggested prompts below to get started.</p>
</div>

<div className="mb-12">
<h2 className="text-sm font-medium text-gray-400 uppercase mb-4">Suggested Prompts</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-[#1E1E26] border border-subtle rounded-xl p-4 hover:border-accent cursor-pointer transition-colors">
<div className="flex items-start">
<div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-4">
<h3 className="font-medium mb-1">Draft a business proposal</h3>
<p className="text-sm text-gray-400">I'll help you create a compelling business proposal with all the necessary sections.</p>
</div>
</div>
</div>
<div className="bg-[#1E1E26] border border-subtle rounded-xl p-4 hover:border-accent cursor-pointer transition-colors">
<div className="flex items-start">
<div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-4">
<h3 className="font-medium mb-1">Analyze market trends</h3>
<p className="text-sm text-gray-400">I can help identify current market trends and opportunities for your business.</p>
</div>
</div>
</div>
<div className="bg-[#1E1E26] border border-subtle rounded-xl p-4 hover:border-accent cursor-pointer transition-colors">
<div className="flex items-start">
<div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-4">
<h3 className="font-medium mb-1">Debug code</h3>
<p className="text-sm text-gray-400">Share your code and I'll help identify and fix issues in your implementation.</p>
</div>
</div>
</div>
<div className="bg-[#1E1E26] border border-subtle rounded-xl p-4 hover:border-accent cursor-pointer transition-colors">
<div className="flex items-start">
<div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-4">
<h3 className="font-medium mb-1">Create a content calendar</h3>
<p className="text-sm text-gray-400">I'll help you plan your content strategy with a detailed publishing schedule.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-sm font-medium text-gray-400 uppercase mb-4">Recent Topics</h2>
<div className="flex flex-wrap gap-3">
<button className="bg-[#1E1E26] border border-subtle rounded-full px-4 py-2 text-sm hover:border-accent transition-colors">
            Marketing strategy
          </button>
<button className="bg-[#1E1E26] border border-subtle rounded-full px-4 py-2 text-sm hover:border-accent transition-colors">
            React component architecture
          </button>
<button className="bg-[#1E1E26] border border-subtle rounded-full px-4 py-2 text-sm hover:border-accent transition-colors">
            SEO optimization
          </button>
<button className="bg-[#1E1E26] border border-subtle rounded-full px-4 py-2 text-sm hover:border-accent transition-colors">
            Product roadmap
          </button>
</div>
</div>

<div className="mb-12">
<h2 className="text-sm font-medium text-gray-400 uppercase mb-4">Upload Files</h2>
<div className="border-2 border-dashed border-subtle rounded-xl p-8 text-center">
<svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-gray-400 mb-2">Drag and drop files here or</p>
<button className="bg-accent hover:bg-opacity-90 text-white py-2 px-4 rounded-md inline-flex items-center transition-colors">
<span>Browse files</span>
</button>
<p className="text-xs text-gray-500 mt-2">Supports PDF, DOCX, TXT, CSV (max 10MB)</p>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-dark border-t border-subtle">
<div className="max-w-5xl mx-auto">
<div className="bg-[#1E1E26] border border-subtle rounded-lg p-3">
<textarea className="w-full bg-transparent outline-none resize-none text-gray-300 placeholder-gray-500" placeholder="Type your message or '/command'..." rows="2"></textarea>
<div className="flex justify-between items-center mt-2">
<div className="flex space-x-2">
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 rounded hover:bg-subtle">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<button className="bg-accent hover:bg-opacity-90 text-white py-2 px-4 rounded-md flex items-center transition-colors">
<span>Start Chat</span>
<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
