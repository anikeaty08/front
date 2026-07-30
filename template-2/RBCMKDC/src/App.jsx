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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Add touch feedback for iOS-like interactions
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
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
      

<div className="flex items-center justify-center min-h-screen bg-gray-900 p-8">
<div className="relative">

<div className="w-[390px] h-[844px] bg-black rounded-[60px] p-2 shadow-2xl">

<div className="w-full h-full bg-gray-50 rounded-[50px] overflow-hidden relative">

<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50"></div>

<div className="pt-16 px-8 h-full flex flex-col">

<div className="flex-1 flex flex-col items-center justify-center space-y-8 animate-fade-in">

<div className="text-center space-y-4 opacity-0 animate-fade-in" style={{animationDelay: `0.2s`, animationFillMode: `forwards`}}>
<div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
<i className="w-12 h-12 text-white" data-lucide="receipt"></i>
</div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Pronto Invoice</h1>
</div>

<div className="w-80 h-64 relative opacity-0 animate-fade-in" style={{animationDelay: `0.4s`, animationFillMode: `forwards`}}>
<img alt="Professional tradesperson" className="w-full h-full object-cover rounded-3xl shadow-lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face" />
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center space-y-8">

<div className="text-center space-y-4 opacity-0 animate-fade-in" style={{animationDelay: `0.6s`, animationFillMode: `forwards`}}>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight leading-tight">
                                    Send Professional Invoices Quickly and Get Paid Faster
                                </h2>
<p className="text-lg text-gray-600 font-normal leading-relaxed">
                                    Perfect for contractors, electricians, plumbers, and small business owners
                                </p>
</div>

<div className="space-y-4 opacity-0 animate-fade-in" style={{animationDelay: `0.8s`, animationFillMode: `forwards`}}>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]">
                                    Create Account
                                </button>

<button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-4 px-6 rounded-2xl text-lg transition-all duration-200 hover:bg-gray-50 transform hover:scale-[1.02] active:scale-[0.98]">
                                    Log In
                                </button>
</div>
</div>

<div className="pb-8 opacity-0 animate-fade-in" style={{animationDelay: `1.0s`, animationFillMode: `forwards`}}>
<p className="text-sm text-gray-500 text-center font-normal">
                                No social login. No commitment. Cancel anytime.
                            </p>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full"></div>
</div>
</div>
</div>
</div>



    </>
  );
}
