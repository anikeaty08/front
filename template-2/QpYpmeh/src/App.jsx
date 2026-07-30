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



    document.addEventListener('DOMContentLoaded', () => {
      // Activate orbital elements with a delay
      setTimeout(() => {
        const orbitals = document.querySelectorAll('.orbital-element');
        orbitals.forEach((orbital) => {
          orbital.style.opacity = '1';
        });
      }, 1500);
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
      
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden opacity-0 animate-scale" style={{animationDelay: `0.2s`}}>
<div className="p-8">

<div className="text-center mb-8">
<h1 className="heading text-4xl md:text-5xl font-semibold text-gray-900 mb-2 opacity-0 animate-scale" style={{animationDelay: `0.4s`}}>SIGN IN</h1>
<p className="text-gray-600 text-lg opacity-0 animate-scale" style={{animationDelay: `0.6s`}}>Access your workspace</p>
</div>

<div className="flex justify-center mb-10">
<div className="orbit">
<div className="orbit-circle orbit-1 opacity-0 animate-scale" style={{animationDelay: `0.8s`}}></div>
<div className="orbit-circle orbit-2 opacity-0 animate-scale" style={{animationDelay: `0.9s`}}></div>
<div className="orbit-circle orbit-3 opacity-0 animate-scale" style={{animationDelay: `1s`}}></div>

<div className="main-btn opacity-0 animate-scale pulse" style={{animationDelay: `1.1s`}}>
<svg fill="none" height="32" stroke="currentColor" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>

<div className="orbital-element" id="orbital-1" style={{animation: `orbit 20s linear infinite`, animationDelay: `-0s`}}>
<div className="orbital-item">
<svg fill="#3b82f6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-2" style={{animation: `orbit 20s linear infinite`, animationDelay: `-4s`}}>
<div className="orbital-item">
<svg fill="#3b82f6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-3" style={{animation: `orbit 20s linear infinite`, animationDelay: `-8s`}}>
<div className="orbital-item">
<svg fill="#3b82f6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-4" style={{animation: `orbit 20s linear infinite`, animationDelay: `-12s`}}>
<div className="orbital-item">
<svg fill="#3b82f6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-5" style={{animation: `orbit 20s linear infinite`, animationDelay: `-16s`}}>
<div className="orbital-item">
<svg fill="#3b82f6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
</svg>
</div>
</div>
</div>
</div>

<form className="space-y-6">
<div className="opacity-0 animate-scale" style={{animationDelay: `1.2s`}}>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" id="email" placeholder="your@email.com" type="email" />
</div>
<div className="opacity-0 animate-scale" style={{animationDelay: `1.3s`}}>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" id="password" placeholder="••••••••" type="password" />
</div>
<div className="flex items-center justify-between opacity-0 animate-scale" style={{animationDelay: `1.4s`}}>
<div className="flex items-center">
<input className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" id="remember" type="checkbox" />
<label className="ml-2 block text-sm text-gray-700" htmlFor="remember">Remember me</label>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-500" href="#">Forgot password?</a>
</div>
<div className="opacity-0 animate-scale" style={{animationDelay: `1.5s`}}>
<button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" type="submit">
            Sign in
          </button>
</div>
</form>

<div className="mt-8 text-center opacity-0 animate-scale" style={{animationDelay: `1.6s`}}>
<p className="text-sm text-gray-600">
          Don't have an account? <a className="font-medium text-blue-600 hover:text-blue-500" href="#">Sign up</a>
</p>
</div>
</div>
</div>


    </>
  );
}
