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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleIcon = document.getElementById('password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.setAttribute('data-lucide', 'eye-off');
            } else {
                passwordInput.type = 'password';
                toggleIcon.setAttribute('data-lucide', 'eye');
            }
            lucide.createIcons();
        }
        
        // Biometric scan simulation
        function startBiometricScan() {
            const scanner = document.querySelector('.biometric-scanner');
            const status = document.getElementById('biometric-status');
            
            scanner.style.borderColor = 'rgba(245, 158, 11, 0.5)';
            scanner.style.background = 'rgba(245, 158, 11, 0.1)';
            status.textContent = 'SCANNING...';
            status.style.color = '#f59e0b';
            
            setTimeout(() => {
                scanner.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                scanner.style.background = 'rgba(16, 185, 129, 0.1)';
                status.textContent = 'VERIFIED';
                status.style.color = '#10b981';
                
                setTimeout(() => {
                    status.textContent = 'READY';
                    status.style.color = '#10b981';
                }, 2000);
            }, 2000);
        }
        
        // Handle login
        function handleLogin(event) {
            event.preventDefault();
            
            const loginContent = document.getElementById('login-content');
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                // Show error state
                loginContent.innerHTML = '<i data-lucide="x-circle" class="w-4 h-4"></i> Access Denied';
                loginContent.parentElement.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.8))';
                
                setTimeout(() => {
                    loginContent.innerHTML = '<i data-lucide="log-in" class="w-4 h-4"></i> Initiate Access';
                    loginContent.parentElement.style.background = 'linear-gradient(135deg, rgba(56, 189, 248, 0.8), rgba(59, 130, 246, 0.8))';
                    lucide.createIcons();
                }, 2000);
                return;
            }
            
            // Show loading state
            loginContent.innerHTML = '<div class="loading-spinner"></div> Authenticating...';
            loginContent.parentElement.style.background = 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8))';
            
            setTimeout(() => {
                // Show success state
                loginContent.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i> Access Granted';
                loginContent.parentElement.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))';
                lucide.createIcons();
                
                // Redirect after success
                setTimeout(() => {
                    window.location.href = '#dashboard';
                }, 1500);
            }, 2000);
        }
        
        // Add enter key support for login
        document.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleLogin(event);
            }
        });
        
        // Auto-focus username field
        document.getElementById('username').focus();
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/liquidring-PGc8zQXZyDUpVFvWNgohNZnv" width="100%"></iframe></div>

<div className="login-card glass-effect bg-gradient-to-br from-white/15 to-white/5 border border-white/20 overflow-hidden fade-in">

<div className="absolute inset-0 rounded-[1.2em] border border-white/40 [mask-image:linear-gradient(135deg,white,transparent_60%)]"></div>
<div className="p-8">

<div className="text-center mb-8 slide-up">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30">
<svg className="lucide lucide-rocket w-4 h-4 text-blue-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h1 className="text-xl font-medium tracking-tight font-geist">Mission Control</h1>
</div>
<p className="text-sm text-neutral-300 font-light font-geist">Access Control Terminal</p>
<div className="flex items-center justify-center gap-2 mt-2">
<div className="status-indicator"></div>
<span className="text-xs text-blue-300 font-mono font-geist">SYSTEM ONLINE</span>
</div>
</div>

<form className="space-y-6 slide-up" style={{animationDelay: `0.2s`}}>

<div className="space-y-2">
<label className="text-sm text-neutral-300 font-medium flex items-center gap-2 font-geist">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Agent ID
                    </label>
<input className="input-field w-full text-white placeholder-neutral-400" id="username" placeholder="Enter agent identifier" type="text" />
</div>

<div className="space-y-2">
<label className="text-sm text-neutral-300 font-medium flex items-center gap-2 font-geist">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        Access Code
                    </label>
<div className="relative">
<input className="input-field w-full text-white placeholder-neutral-400" id="password" placeholder="Enter access code" type="password" />
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white transition-colors" onClick={(e) => { togglePassword() }} type="button">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" id="password-toggle" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="card-divider w-full my-6"></div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="biometric-scanner" onClick={(e) => { startBiometricScan() }}>
<svg className="lucide lucide-fingerprint w-5 h-5 text-green-400" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<div>
<p className="text-sm text-neutral-300 font-geist">Biometric Scan</p>
<p className="text-xs text-neutral-500 font-geist">Optional verification</p>
</div>
</div>
<span className="text-xs text-blue-300 font-mono font-geist" id="biometric-status">READY</span>
</div>

<button className="login-button w-full text-white font-medium relative overflow-hidden" onClick={(e) => { handleLogin(event) }} type="submit">
<span className="relative z-10 flex items-center justify-center gap-2 font-geist" id="login-content">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                        Initiate Access
                    </span>
</button>

<div className="pt-4 border-t border-white/10">
<div className="flex items-center justify-between text-xs text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist">Secure Connection</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-geist">NASA-NET</span>
</div>
</div>
<div className="text-center mt-3">
<p className="text-xs text-neutral-500 font-mono font-geist">Houston Mission Control • Sector 7</p>
</div>
</div>
</form>
</div>
</div>


    </>
  );
}
