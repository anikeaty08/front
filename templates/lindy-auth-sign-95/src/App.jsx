import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5,
            }
        });

        // Tab Switching Logic
        function switchTab(tab) {
            const signinForm = document.getElementById('signin-form');
            const signupForm = document.getElementById('signup-form');
            const signinTabBtn = document.getElementById('tab-signin');
            const signupTabBtn = document.getElementById('tab-signup');

            if (tab === 'signin') {
                // Show Sign In
                signinForm.classList.remove('hidden');
                signupForm.classList.add('hidden');
                
                // Active Styling Sign In
                signinTabBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                signinTabBtn.classList.remove('text-gray-500');
                
                // Inactive Styling Sign Up
                signupTabBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                signupTabBtn.classList.add('text-gray-500');
            } else {
                // Show Sign Up
                signinForm.classList.add('hidden');
                signupForm.classList.remove('hidden');

                // Active Styling Sign Up
                signupTabBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                signupTabBtn.classList.remove('text-gray-500');

                // Inactive Styling Sign In
                signinTabBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                signinTabBtn.classList.add('text-gray-500');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex w-full h-full">

<div className="lg:w-1/2 flex flex-col sm:p-12 lg:p-20 overflow-y-auto bg-white w-full h-full pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex flex-col w-full max-w-md mr-auto ml-auto space-y-4">
<div className="flex gap-2 text-gray-900 gap-x-2 gap-y-2 items-center">

<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute w-4 h-4 border-2 border-gray-900 transform rotate-45"></div>
</div>
<span className="text-xl font-semibold tracking-tight font-sans" style={{}}>Lindy</span>
</div>

<div className="bg-gray-100 p-1 rounded-lg grid grid-cols-2 gap-1 mb-4">
<button className="transition-all text-sm font-medium rounded-md pt-2 pb-2 bg-white text-gray-900 shadow-sm font-sans" id="tab-signin" onclick="switchTab('signin')" style={{}}>Sign In</button>
<button className="transition-all hover:text-gray-900 text-sm font-medium text-gray-500 font-sans rounded-md pt-2 pb-2" id="tab-signup" onclick="switchTab('signup')">Sign Up</button>
</div>
</div>

<div className="flex-grow flex flex-col w-full max-w-md mr-auto ml-auto pt-0 pb-0 justify-center">

<div className="fade-in block" id="signin-form">
<h1 className="text-3xl tracking-tight text-gray-900 mb-8 font-manrope font-medium" style={{}}>Sign into your account</h1>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 font-sans" htmlFor="email-signin" style={{}}>Email Address</label>
<input className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all shadow-sm bg-white" id="email-signin" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 font-sans" htmlFor="password-signin" style={{}}>Password</label>
<div className="relative">
<input className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all shadow-sm bg-white" id="password-signin" placeholder="••••••••" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" type="button">
<svg aria-hidden="true" className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all shadow-sm font-sans" style={{}} type="submit">
                            Sign in
                        </button>
</form>
<div className="relative my-8">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-200"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-sm text-gray-500 font-sans" style={{}}>or</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
<svg className="h-5 w-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="text-sm font-sans" style={{}}>Google</span>
</button>
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
<svg className="h-5 w-5 text-gray-900" fill="currentColor" viewbox="0 0 24 24">
<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.05 3.97-.68 1.95.49 2.92 1.65 3.33 2.53-2.92 1.76-2.42 6.09.55 7.55-.45 1.29-1.02 2.65-2.93 2.83zM13.68 4.79c1.02-.92 1.54-2.24 1.34-3.67-1.28.1-2.88.94-3.66 2.02-.79 1.07-1.37 2.27-1.09 3.65 1.37.1 2.52-.92 3.41-2z"></path>
</svg>
<span className="text-sm font-sans" style={{}}>Apple</span>
</button>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>Reset your password</a>
</div>
</div>

<div className="fade-in hidden" id="signup-form">
<h1 className="text-3xl tracking-tight text-gray-900 mb-8 font-manrope font-medium" style={{}}>Let's get you signed up</h1>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 font-sans" htmlFor="fullname" style={{}}>Full Name</label>
<input className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all shadow-sm bg-white" id="fullname" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 font-sans" htmlFor="email-signup" style={{}}>Email Address</label>
<input className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all shadow-sm bg-white" id="email-signup" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 font-sans" htmlFor="password-signup" style={{}}>Password</label>
<div className="relative">
<input className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all shadow-sm bg-white" id="password-signup" placeholder="••••••••" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" type="button">
<svg aria-hidden="true" className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all shadow-sm font-sans" style={{}} type="submit">
                            Sign up
                        </button>
</form>
<p className="mt-8 text-center text-xs text-gray-500 leading-relaxed font-sans" style={{}}>
                        By signing up, you agree to Lindy's 
                        <a className="font-medium text-blue-600 hover:text-blue-500 underline decoration-blue-200 hover:decoration-blue-500 transition-all font-sans" href="#" style={{}}>Privacy Policy</a> and 
                        <a className="font-medium text-blue-600 hover:text-blue-500 underline decoration-blue-200 hover:decoration-blue-500 transition-all font-sans" href="#" style={{}}>Terms of Service</a>.
                    </p>
</div>
</div>

<div className="hidden lg:block h-8"></div>
</div>

<div className="hidden lg:flex w-1/2 bg-gray-50 items-center justify-center relative overflow-hidden border-l border-gray-100">

<div className="bg-gradient-to-tr from-blue-50 via-white to-gray-50 opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>

</div>
</div>


    </>
  );
}
