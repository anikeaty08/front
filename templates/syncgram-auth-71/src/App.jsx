import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        function toggleView(view) {
            const signin = document.getElementById('signin-view');
            const signup = document.getElementById('signup-view');

            if (view === 'signup') {
                signin.classList.add('hidden');
                signup.classList.remove('hidden');
            } else {
                signup.classList.add('hidden');
                signin.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="lg:w-1/2 flex flex-col overflow-y-auto shadow-indigo-100 bg-white w-full h-full z-10 relative shadow-2xl justify-between">

<div className="px-8 pt-8 lg:px-16 lg:pt-12">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#4937ff] flex items-center justify-center text-white">
<svg className="lucide lucide-zap fill-current w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-semibold text-[#100047] tracking-tight">Syncgram</span>
</a>
</div>

<div className="flex-1 flex flex-col justify-center px-8 lg:px-16 max-w-lg mx-auto w-full py-12">

<div className="fade-in w-full" id="signin-view">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-[#100047] mb-3">Welcome back</h1>
<p className="text-base text-slate-500">Enter your details to access your community.</p>
</div>

<button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-[#100047] font-medium py-3 px-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:ring-4 focus:ring-slate-100 outline-none text-base">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.7662 15.9274 23.766 12.2764Z" fill="#4285F4"></path><path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1904 21.1039L16.3234 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path><path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path><path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path></svg>
                    Sign in with Google
                </button>
<div className="relative my-8">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="bg-white px-4 text-slate-400 font-medium">Or sign in with email</span>
</div>
</div>
<form action="#" className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-2">
<label className="text-sm font-medium text-[#100047] block" htmlFor="email">Email address</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-[#100047] outline-none placeholder:text-slate-400 focus:border-[#4937ff] focus:ring-4 focus:ring-[#4937ff]/10 transition-all shadow-sm" id="email" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-[#100047] block" htmlFor="password">Password</label>
<a className="text-sm font-medium text-[#4937ff] hover:text-[#0b016c] transition-colors" href="#">Forgot password?</a>
</div>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-[#100047] outline-none placeholder:text-slate-400 focus:border-[#4937ff] focus:ring-4 focus:ring-[#4937ff]/10 transition-all shadow-sm" id="password" placeholder="••••••••" type="password"/>
</div>
<button className="w-full rounded-xl bg-[#4937ff] py-3.5 text-base font-medium text-white shadow-lg shadow-[#4937ff]/20 hover:bg-[#3d2cdb] hover:shadow-[#4937ff]/30 hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-[#4937ff]/20 outline-none flex items-center justify-center gap-2 group">
                        Sign In
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<div className="mt-8 text-center">
<p className="text-base text-slate-600">
                        Don't have an account? 
                        <button className="font-medium text-[#4937ff] hover:text-[#0b016c] hover:underline underline-offset-4 transition-colors" onclick="toggleView('signup')">Sign up</button>
</p>
</div>
</div>

<div className="hidden fade-in w-full" id="signup-view">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-[#100047] mb-3">Create account</h1>
<p className="text-base text-slate-500">Start monetizing your community today.</p>
</div>

<button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-[#100047] font-medium py-3 px-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:ring-4 focus:ring-slate-100 outline-none text-base">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.7662 15.9274 23.766 12.2764Z" fill="#4285F4"></path><path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1904 21.1039L16.3234 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path><path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path><path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path></svg>
                    Sign up with Google
                </button>
<div className="relative my-8">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="bg-white px-4 text-slate-400 font-medium">Or continue with</span>
</div>
</div>
<form action="#" className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-2">
<label className="text-sm font-medium text-[#100047] block" htmlFor="su-email">Email address</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-[#100047] outline-none placeholder:text-slate-400 focus:border-[#4937ff] focus:ring-4 focus:ring-[#4937ff]/10 transition-all shadow-sm" id="su-email" placeholder="name@company.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-[#100047] block" htmlFor="su-password">Password</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-[#100047] outline-none placeholder:text-slate-400 focus:border-[#4937ff] focus:ring-4 focus:ring-[#4937ff]/10 transition-all shadow-sm" id="su-password" placeholder="At least 8 chars" type="password"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#100047] block" htmlFor="su-password-confirm">Confirm Password</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-[#100047] outline-none placeholder:text-slate-400 focus:border-[#4937ff] focus:ring-4 focus:ring-[#4937ff]/10 transition-all shadow-sm" id="su-password-confirm" placeholder="Confirm password" type="password"/>
</div>
</div>
<div className="pt-2">
<button className="w-full rounded-xl bg-[#4937ff] py-3.5 text-base font-medium text-white shadow-lg shadow-[#4937ff]/20 hover:bg-[#3d2cdb] hover:shadow-[#4937ff]/30 hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-[#4937ff]/20 outline-none flex items-center justify-center gap-2 group">
                            Create Account
                            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-xs text-slate-400 text-center leading-relaxed">
                        By clicking "Create Account", you agree to our <a className="text-[#4937ff] hover:underline" href="#">Terms of Service</a> and <a className="text-[#4937ff] hover:underline" href="#">Privacy Policy</a>.
                    </p>
</form>
<div className="mt-8 text-center">
<p className="text-base text-slate-600">
                        Already have an account? 
                        <button className="font-medium text-[#4937ff] hover:text-[#0b016c] hover:underline underline-offset-4 transition-colors" onclick="toggleView('signin')">Sign in</button>
</p>
</div>
</div>
</div>

<div className="px-8 pb-8 text-center lg:text-left lg:px-16 lg:pb-12">
<p className="text-sm text-slate-400">© 2024 Syncgram. All rights reserved.</p>
</div>
</div>

<div className="hidden lg:block lg:w-1/2 relative bg-[#100047] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-[#100047] via-[#100047]/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[#4937ff]/10 mix-blend-overlay z-10"></div>

<img alt="Syncgram Community Dashboard" className="absolute inset-0 h-full w-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 p-16 z-20">
<div className="max-w-xl space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-[#4937ff]"></span>
                    Trusted by 2,000+ creators
                </div>
<h2 className="text-4xl font-semibold tracking-tight text-white leading-tight">
                    Build, Grow &amp; Monetize Your Community.
                </h2>
<p className="text-lg text-slate-300">
                    Syncgram gives creators everything they need to launch paid groups, automate memberships, and deliver value effortlessly.
                </p>
</div>
</div>
</div>


    </>
  );
}
