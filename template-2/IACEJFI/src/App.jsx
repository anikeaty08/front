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

        // Password toggle functionality
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleIcon = document.getElementById('toggleIcon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.setAttribute('data-lucide', 'eye-off');
            } else {
                passwordInput.type = 'password';
                toggleIcon.setAttribute('data-lucide', 'eye');
            }
            lucide.createIcons();
        }

        // Form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span class="ml-2">Signing in...</span>';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                lucide.createIcons();
                alert('Login successful! (This is a demo)');
            }, 2000);
        });

        // Input animations
        document.querySelectorAll('.custom-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.add('transform', 'scale-105');
            });
            
            input.addEventListener('blur', function() {
                this.classList.remove('transform', 'scale-105');
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
      

<div className="min-h-screen flex relative z-10 bg-stone-200 pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="max-w-6xl w-full">

<div className="rounded-[40px] overflow-hidden beautiful-shadow bg-white">
<div className="grid lg:grid-cols-2 min-h-[700px]">

<div className="brand-side relative flex flex-col text-white bg-[url(https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.png?w=800&q=80)] bg-cover pt-12 pr-12 pb-12 pl-12 justify-between m-4 rounded-3xl">
<div className="relative z-10">

<div className="flex text-sm mb-12 items-center uppercase">
<div className="text-lg font-semibold tracking-tight font-geist">PixelForge Studio</div>
</div>

<div className="mb-12">
<h1 className="text-6xl font-medium tracking-tight font-geist mb-4">
                                    Create, Design, and Innovate
                                </h1>
<p className="text-xl leading-relaxed text-white/80 font-geist">
                                    Join thousands of creators who trust PixelForge Studio to bring their vision to life
                                </p>
</div>

<div className="space-y-6">
<div className="feature-item flex items-center">
<div className="w-8 h-8 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 bg-white/20">
<svg className="lucide lucide-palette w-4 h-4 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<div className="font-semibold font-geist">Advanced Design Tools</div>
<div className="text-sm text-white/70 font-geist">Professional-grade tools for every project</div>
</div>
</div>
<div className="feature-item flex items-center">
<div className="w-8 h-8 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 bg-white/20">
<svg className="lucide lucide-users w-4 h-4 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<div className="font-semibold font-geist">Team Collaboration</div>
<div className="text-sm text-white/70 font-geist">Work together seamlessly in real-time</div>
</div>
</div>
<div className="feature-item flex items-center">
<div className="w-8 h-8 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 bg-white/20">
<svg className="lucide lucide-cloud w-4 h-4 text-white" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div>
<div className="font-semibold font-geist">Cloud Storage</div>
<div className="text-sm text-white/70 font-geist">Access your projects from anywhere</div>
</div>
</div>
<div className="feature-item flex items-center">
<div className="w-8 h-8 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 bg-white/20">
<svg className="lucide lucide-shield-check w-4 h-4 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="font-semibold font-geist">Enterprise Security</div>
<div className="text-sm text-white/70 font-geist">Bank-level security for your data</div>
</div>
</div>
</div>
</div>

</div>

<div className="flex flex-col pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="max-w-md mx-auto w-full">

<div className="text-center mb-8">
<h2 className="text-3xl font-light text-stone-900 tracking-tight font-geist uppercase">Welcome back</h2>
<p className="mt-2 text-sm text-stone-600 font-geist">Sign in to continue your creative journey</p>
</div>

<form className="space-y-6" id="loginForm">
<div className="space-y-5">

<div className="">
<label className="block text-sm font-medium mb-2 text-stone-700 font-geist uppercase" htmlFor="email">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-mail w-5 h-5 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input autocomplete="email" className="custom-input block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm font-geist border-stone-300" id="email" name="email" placeholder="Enter your email" required type="email" />
</div>
</div>

<div className="">
<label className="block text-sm font-medium mb-2 text-stone-700 font-geist uppercase" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-lock w-5 h-5 text-gray-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<input autocomplete="current-password" className="custom-input block w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm font-geist border-stone-300" id="password" name="password" placeholder="Enter your password" required type="password" />
<button className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={(e) => { togglePassword() }} type="button">
<svg className="lucide lucide-eye w-5 h-5 transition-colors text-gray-400 hover:text-gray-600" data-lucide="eye" fill="none" height="24" id="toggleIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center">
<input className="h-4 w-4 focus:ring-orange-500 rounded text-orange-600 border-stone-300" id="remember-me" name="remember-me" type="checkbox" />
<label className="ml-2 block text-sm text-stone-700 font-geist" htmlFor="remember-me">Remember me</label>
</div>
<div className="text-sm">
<a className="font-medium hover:text-orange-500 transition-colors text-orange-600 font-geist" href="#">
                                            Forgot password?
                                        </a>
</div>
</div>

<div className="">
<button className="login-btn group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 text-white font-geist" type="submit">
<span className="absolute left-0 inset-y-0 flex items-center pl-3">
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:text-indigo-200 transition-colors text-indigo-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
                                        Sign in to your account
                                    </button>
</div>

<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-stone-300"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="px-2 text-stone-500 bg-white font-geist">Or continue with</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="w-full inline-flex justify-center py-2.5 px-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 font-geist border-stone-300 text-stone-700 bg-white hover:bg-stone-50" type="button">
<svg className="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="ml-2 font-geist">Google</span>
</button>
<button className="w-full inline-flex justify-center py-2.5 px-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 font-geist border-stone-300 text-stone-700 bg-white hover:bg-stone-50" type="button">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="ml-2 font-geist">GitHub</span>
</button>
</div>
</form>

<div className="text-center mt-8">
<p className="text-sm text-stone-600 font-geist">
                                    Don't have an account? 
                                    <a className="font-medium hover:text-orange-500 transition-colors text-orange-600 font-geist" href="#">
                                        Sign up for free
                                    </a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
