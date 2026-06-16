import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Suppress Tailwind CDN production warning BEFORE Tailwind loads
  (function() {
    if (window._tailwindWarningsSuppressed) return;
    window._tailwindWarningsSuppressed = true;
    
    const originalWarn = console.warn;
    console.warn = function(...args) {
      const message = args.join(' ');
      if (message.includes('cdn.tailwindcss.com should not be used in production')) {
        return; // Suppress this specific warning
      }
      originalWarn.apply(console, args);
    };
  })();



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { inter: ['Inter', 'sans-serif'] },
          colors: {
            brand: '#2563eb',
            'brand-dark': '#1d4ed8'
          },
          boxShadow: {
            'beautiful-lg': '0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)'
          }
        }
      }
    }
  


    lucide.createIcons();

    function togglePassword(btn, inputId) {
      const input = document.getElementById(inputId);
      const icon = btn.firstElementChild;
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('data-lucide', 'eye');
      } else {
        input.type = 'password';
        icon.setAttribute('data-lucide', 'eye-off');
      }
      lucide.createIcons();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 lg:gap-12">

<section className="relative w-full max-w-md mx-auto bg-white rounded-2xl lg:rounded-3xl shadow-beautiful-lg overflow-hidden flex flex-col border border-slate-100">
<header className="flex items-center justify-between px-6 pt-6">
<button className="p-2 rounded-xl hover:bg-slate-100 transition-colors duration-200">
<svg className="lucide lucide-arrow-left w-5 h-5 stroke-2 text-slate-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<a className="text-sm font-medium text-slate-500 hover:text-brand transition-colors duration-200" href="#">Reset Password?</a>
</header>
<div className="flex-1 flex flex-col px-6 pt-8 pb-8 gap-8">

<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center shadow-beautiful-lg">
<svg className="lucide lucide-zap w-[32px] h-[32px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '32px', height: '32px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="text-center">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Welcome back</h1>
<p className="text-sm text-slate-500 mt-1">Sign in to your Nexus account</p>
</div>
</div>
<form className="flex flex-col gap-5">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 flex items-center gap-2" htmlFor="login-email">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Email Address
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200" id="login-email" placeholder="sarah.wilson@company.com" type="email"/>
</div>
<div className="relative space-y-2">
<label className="text-sm font-semibold text-slate-700 flex items-center gap-2" htmlFor="login-password">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Password
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 pr-12 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200" id="login-password" placeholder="Enter your password" type="password"/>
<button className="absolute right-4 top-10 text-slate-400 hover:text-slate-600 transition-colors" onclick="togglePassword(this,'login-password')" type="button">
<svg className="lucide lucide-eye-off w-5 h-5" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</button>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center gap-3 text-sm select-none cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 rounded-full bg-slate-200 peer-checked:bg-brand relative transition-all duration-300 after:absolute after:content-[''] after:top-0.5 after:left-0.5 after:size-5 after:bg-white after:rounded-full after:shadow-sm after:transition-all after:duration-300 peer-checked:after:translate-x-5"></div>
<span className="text-slate-600">Keep me signed in</span>
</label>
</div>
<button className="w-full bg-gradient-to-r from-brand to-brand-dark text-white font-semibold py-3.5 rounded-xl hover:shadow-beautiful-lg hover:shadow-brand/25 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<svg className="lucide lucide-log-in w-5 h-5" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Sign In to Dashboard
          </button>
</form>
</div>
<footer className="text-center text-sm pb-6 px-6 border-t border-slate-100 pt-6">
<p className="text-slate-500">New to Nexus? <a className="font-semibold text-brand hover:text-brand-dark transition-colors" href="#">Create Account</a></p>
</footer>
</section>

<section className="relative w-full max-w-md mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl lg:rounded-3xl shadow-beautiful-lg overflow-hidden flex flex-col text-white">
<div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-purple-600/20"></div>
<div className="relative flex-1 flex flex-col items-center justify-center p-8 gap-8">
<div className="w-full aspect-square max-w-xs relative">
<img alt="Business Analytics Dashboard" className="w-full h-full object-cover rounded-2xl shadow-beautiful-lg" src="https://images.unsplash.com/photo-1633164442172-dc4147f21954?w=1080&amp;q=80"/>
</div>
<div className="text-center space-y-4 max-w-sm">
<h2 className="leading-tight text-3xl font-semibold tracking-tight">Transform Your Business Intelligence</h2>
<p className="text-slate-300 text-sm leading-relaxed">Unlock powerful analytics, automated reporting, and data-driven insights that drive real business growth.</p>
</div>
<div className="flex flex-col gap-3 w-full max-w-sm">
<button className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-beautiful-lg">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Start Free 14-Day Trial
          </button>
<div className="flex items-center justify-center gap-6 text-xs text-slate-400 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              No Credit Card
            </div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check w-4 h-4 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Enterprise Security
            </div>
</div>
</div>
</div>
</section>

<section className="relative w-full max-w-md mx-auto bg-white rounded-2xl lg:rounded-3xl shadow-beautiful-lg overflow-hidden flex flex-col border border-slate-100">
<div className="px-6 pt-8 pb-8 flex-1 flex flex-col gap-6">
<header className="text-center space-y-2">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto shadow-beautiful-lg">
<svg className="lucide lucide-user-plus w-[24px] h-[24px]" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Join Nexus Today</h2>
<p className="text-sm text-slate-500">Create your account and start exploring</p>
</header>
<form className="flex flex-col gap-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="first-name">First Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" id="first-name" placeholder="Sarah" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="last-name">Last Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" id="last-name" placeholder="Wilson" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 flex items-center gap-2" htmlFor="signup-email">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Work Email Address
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" id="signup-email" placeholder="sarah.wilson@company.com" type="email"/>
</div>
<div className="relative space-y-2">
<label className="text-sm font-semibold text-slate-700 flex items-center gap-2" htmlFor="signup-password">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Create Password
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 pr-12 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" id="signup-password" placeholder="Minimum 8 characters" type="password"/>
<button className="absolute right-4 top-10 text-slate-400 hover:text-slate-600 transition-colors" onclick="togglePassword(this,'signup-password')" type="button">
<svg className="lucide lucide-eye-off w-5 h-5" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</button>
</div>
<label className="flex items-start gap-3 text-sm select-none cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 relative transition-all duration-200 after:absolute after:content-[''] after:top-0.5 after:left-1.5 after:w-1.5 after:h-2.5 after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity"></div>
<span className="text-slate-600 leading-relaxed">I agree to Nexus <a className="text-emerald-600 hover:text-emerald-700 font-medium" href="#">Terms of Service</a> and <a className="text-emerald-600 hover:text-emerald-700 font-medium" href="#">Privacy Policy</a></span>
</label>
<button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-beautiful-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<svg className="lucide lucide-user-check w-5 h-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Create Your Account
          </button>
</form>
<div className="flex items-center gap-4 my-4">
<div className="flex-1 h-px bg-slate-200"></div>
<span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Or continue with</span>
<div className="flex-1 h-px bg-slate-200"></div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-3 rounded-xl transition-all duration-200 border border-slate-200">
<svg className="" height="20" viewbox="0 0 24 24" width="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path className="" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
            Google
          </button>
<button className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-3 rounded-xl transition-all duration-200 border border-slate-200">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            GitHub
          </button>
</div>
</div>
</section>
</main>



    </>
  );
}
