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
            pastel: {
              bg: '#fdf6f0',
              primary: '#ff8c69',
              primaryHover: '#ff7043',
              accent: '#ffd8cc',
              text: '#6d5d52',
              textSecondary: '#938278',
              textMuted: '#b5a9a2',
              textHeading: '#5c4d44',
              border: '#ffe8d9',
              inputBorder: '#ffe0c2',
              input: '#fffefc'
            }
          },
          fontFamily: {
            sans: ['Nunito Sans', 'sans-serif'],
            serif: ['Lora', 'serif']
          },
          boxShadow: {
            'pastel-sm': '0 3px 6px rgba(180, 160, 150, 0.08)',
            'pastel-md': '0 6px 12px rgba(180, 160, 150, 0.1)',
            'pastel-lg': '0 10px 20px rgba(180, 160, 150, 0.12)'
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
      
<div className="flex rounded-2xl overflow-hidden shadow-pastel-lg bg-white border border-pastel-border w-full max-w-5xl">

<div className="relative flex-1 hidden md:flex flex-col items-center justify-center p-10 text-center bg-pastel-accent text-pastel-textHeading">
<img alt="Soft pastel background" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="relative z-10">
<h3 className="text-2xl font-serif font-semibold mb-4">Welcome to Your Space</h3>
<p className="text-base opacity-90">A peaceful place to connect, create, and collaborate.</p>
</div>
</div>

<div className="flex-1 p-6 md:p-10 bg-white">
<h3 className="text-2xl font-serif font-semibold text-pastel-textHeading text-center mb-6">Access Your Portal</h3>
<form>
<div className="mb-5">
<label className="block font-medium text-pastel-textSecondary text-sm mb-2" htmlFor="email">Operator ID</label>
<input className="w-full p-3 rounded-xl border border-pastel-inputBorder bg-pastel-input text-pastel-text shadow-pastel-sm focus:outline-none focus:ring-2 focus:ring-pastel-primary/30 focus:border-pastel-primary transition-all" id="email" placeholder="Enter your Operator ID" required="" type="email"/>
</div>
<div className="mb-5">
<label className="block font-medium text-pastel-textSecondary text-sm mb-2" htmlFor="password">Auth Key</label>
<input className="w-full p-3 rounded-xl border border-pastel-inputBorder bg-pastel-input text-pastel-text shadow-pastel-sm focus:outline-none focus:ring-2 focus:ring-pastel-primary/30 focus:border-pastel-primary transition-all" id="password" placeholder="Enter your Auth Key" required="" type="password"/>
</div>
<div className="flex justify-between items-center mb-5 text-sm">
<label className="flex items-center text-pastel-textSecondary cursor-pointer">
<input className="w-4 h-4 rounded mr-2 border-pastel-inputBorder text-pastel-primary focus:ring-pastel-primary/30" type="checkbox"/>
            Secure session
          </label>
<a className="text-pastel-primary font-medium hover:underline" href="#">Auth Issues?</a>
</div>
<button className="w-full py-3 px-4 bg-pastel-primary text-white font-medium rounded-xl shadow-pastel-sm hover:bg-pastel-primaryHover hover:shadow-pastel-md transform hover:-translate-y-0.5 transition-all" type="submit">
          Connect
        </button>
<p className="text-center mt-6 text-sm text-pastel-textSecondary">
          Need clearance? <a className="text-pastel-primary font-medium hover:underline" href="#">Request Access</a>
</p>
</form>
</div>
</div>

    </>
  );
}
