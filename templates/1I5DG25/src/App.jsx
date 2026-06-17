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



        lucide.createIcons();
        
        // Custom checkbox functionality
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkIcon = this.parentElement.querySelector('[data-lucide="check"]');
                const checkBox = this.parentElement.querySelector('div');
                
                if (this.checked) {
                    checkIcon.classList.remove('hidden');
                    checkBox.classList.add('bg-blue-500', 'border-blue-500');
                    checkBox.classList.remove('bg-white/20', 'border-white/30');
                } else {
                    checkIcon.classList.add('hidden');
                    checkBox.classList.remove('bg-blue-500', 'border-blue-500');
                    checkBox.classList.add('bg-white/20', 'border-white/30');
                }
            });
        });

        // Password visibility toggle
        document.querySelector('button[type="button"]').addEventListener('click', function() {
            const passwordInput = this.parentElement.querySelector('input');
            const eyeIcon = this.querySelector('[data-lucide="eye"]');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.setAttribute('data-lucide', 'eye-off');
            } else {
                passwordInput.type = 'password';
                eyeIcon.setAttribute('data-lucide', 'eye');
            }
            lucide.createIcons();
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
      

<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/svg%3E')] opacity-50 bg-[url(https://images.unsplash.com/photo-1678581231067-644dddeca6dc?w=2160&amp;q=80)] bg-cover"></div>

<div className="relative w-full max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">

<div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

<div className="flex flex-col lg:flex-row min-h-[600px]">

<div className="flex-1 p-8 space-y-6">

<div className="text-center space-y-2 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
<div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl mx-auto shadow-lg flex items-center justify-center">
<svg className="lucide lucide-lock w-8 h-8 text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h1 className="text-4xl font-light text-white tracking-tight uppercase">Welcome back</h1>
<p className="text-white/70 text-sm">Sign in to your account</p>
</div>

<form className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">

<div className="space-y-2">
<label className="text-sm font-medium text-white/90 block">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-mail w-5 h-5 text-white/50" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300" placeholder="Enter your email" required="" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-white/90 block">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-lock w-5 h-5 text-white/50" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<input className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300" placeholder="Enter your password" required="" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/80 transition-colors" type="button">
<svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<label className="flex items-center space-x-2 text-white/80 cursor-pointer">
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 bg-white/20 border border-white/30 rounded flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-white hidden" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<span>Remember me</span>
</label>
<a className="text-blue-400 hover:text-blue-300 transition-colors" href="#">Forgot password?</a>
</div>

<button className="w-full hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex font-medium text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl py-3 px-4 shadow-lg space-x-2 items-center justify-center" type="submit">
<span>Sign in</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>

<div className="relative flex items-center animate-in fade-in duration-700 delay-700">
<div className="flex-1 border-t border-white/20"></div>
<span className="px-3 text-white/60 text-sm">or</span>
<div className="flex-1 border-t border-white/20"></div>
</div>

<div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
<button className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
</svg>
<span>Continue with Google</span>
</button>
<button className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span>Continue with GitHub</span>
</button>
</div>

<div className="text-center text-sm text-white/70 animate-in fade-in duration-700 delay-1100">
                        Don't have an account? 
                        <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium" href="#">Sign up</a>
</div>
</div>

<div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

<div className="flex-1 p-8 flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 bg-neutral-950/10">

<div className="space-y-4">
<div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
<svg className="lucide lucide-droplets lucide-sparkles w-[40px] h-[40px] text-slate-200" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '40px', height: '40px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h2 className="text-4xl font-light text-white tracking-tight">Join thousands of users</h2>
<p className="text-white/70 text-lg leading-relaxed">Experience the next generation of productivity tools designed to streamline your workflow and boost your team's performance.</p>
</div>

<div className="space-y-4">
<div className="flex items-start space-x-3 animate-in fade-in slide-in-from-right-4 duration-700 delay-500">
<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium">Advanced Analytics</h3>
<p className="text-white/60 text-sm">Get detailed insights into your performance metrics</p>
</div>
</div>
<div className="flex items-start space-x-3 animate-in fade-in slide-in-from-right-4 duration-700 delay-700">
<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium">Team Collaboration</h3>
<p className="text-white/60 text-sm">Work seamlessly with your team in real-time</p>
</div>
</div>
<div className="flex items-start space-x-3 animate-in fade-in slide-in-from-right-4 duration-700 delay-900">
<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium">Enterprise Security</h3>
<p className="text-white/60 text-sm">Bank-level security to protect your sensitive data</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1100">
<div className="flex items-center space-x-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="">
<h4 className="text-white font-medium text-sm">Sarah Chen</h4>
<p className="text-white/60 text-xs">Product Manager at TechFlow</p>
</div>
</div>
<p className="text-sm font-light text-white/80">"This platform has completely transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily operations."</p>
</div>

<div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1300">
<div className="text-center">
<div className="text-2xl font-semibold text-white">10K+</div>
<div className="text-white/60 text-xs">Active Users</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white">99.9%</div>
<div className="text-white/60 text-xs">Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white">24/7</div>
<div className="text-white/60 text-xs">Support</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
</div>


    </>
  );
}
