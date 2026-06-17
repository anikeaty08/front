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
      
<div className="max-w-6xl mx-auto">

<div className="grid grid-cols-1 gap-6">

<div className="feature-card">
<div className="feature-content shadow-lg p-6 md:p-8">
<span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block">PLATFORM FEATURES</span>
<h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Security</h2>
<p className="text-neutral-300 mb-6">Our platform provides industry-leading security features to protect your sensitive data and ensure compliance with global standards.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="text-center">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
<svg className="h-6 w-6 text-neutral-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-400">End-to-End Encryption</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
<svg className="h-6 w-6 text-neutral-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-400">GDPR Compliant</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
<svg className="h-6 w-6 text-neutral-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-400">Biometric Auth</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
<svg className="h-6 w-6 text-neutral-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-400">Audit Logs</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="feature-card">
<div className="feature-content shadow-lg">
<div className="p-6">
<span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block">AUTHENTICATION</span>
<h3 className="text-xl font-semibold text-neutral-200 mb-3">Multi-Factor Authentication</h3>
<p className="text-neutral-400 text-sm mb-4">Secure your account with multiple verification methods including SMS, email, and authenticator apps.</p>
<div className="space-y-3 mb-4">
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-300">SMS Verification</p>
</div>
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-300">Authenticator Apps</p>
</div>
<div className="flex items-center">
<div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-neutral-300">Hardware Security Keys</p>
</div>
</div>
<button className="w-full px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition text-sm font-medium">
                Configure MFA
              </button>
</div>
</div>
</div>

<div className="feature-card">
<div className="feature-content shadow-lg">
<div className="p-6">
<span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block">ACCESS CONTROL</span>
<h3 className="text-xl font-semibold text-neutral-200 mb-3">Role-Based Permissions</h3>
<p className="text-neutral-400 text-sm mb-4">Define granular access controls with customizable roles and permissions for your organization.</p>
<div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
<div className="flex justify-between items-center mb-3">
<p className="text-sm text-neutral-300">Admin Access</p>
<div className="w-10 h-5 bg-green-900/30 rounded-full relative">
<div className="absolute w-4 h-4 bg-green-500 rounded-full top-0.5 right-0.5"></div>
</div>
</div>
<div className="flex justify-between items-center mb-3">
<p className="text-sm text-neutral-300">User Management</p>
<div className="w-10 h-5 bg-green-900/30 rounded-full relative">
<div className="absolute w-4 h-4 bg-green-500 rounded-full top-0.5 right-0.5"></div>
</div>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-neutral-300">Report Access</p>
<div className="w-10 h-5 bg-neutral-700 rounded-full relative">
<div className="absolute w-4 h-4 bg-neutral-500 rounded-full top-0.5 left-0.5"></div>
</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition text-sm font-medium">
                Manage Roles
              </button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
