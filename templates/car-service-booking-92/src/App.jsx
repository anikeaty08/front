import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Navigation
        function nextScreen(id) {
            const current = document.querySelector('.screen.active');
            if(current) {
                current.classList.remove('active');
                current.style.transform = 'scale(0.95)';
                setTimeout(() => current.style.display = 'none', 400);
            }

            const next = document.getElementById(id);
            next.style.display = 'flex';
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    next.classList.add('active');
                    next.style.transform = 'scale(1)';
                });
            });

            // Focus management for UX
            const input = next.querySelector('input');
            if (input) setTimeout(() => input.focus(), 400);
        }

        // Auto-advance Splash
        setTimeout(() => {
            nextScreen('screen-phone');
        }, 1800);

        // OTP Auto-advance logic
        const otpInputs = document.querySelectorAll('.otp-digit');
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden">

<div className="absolute top-0 w-full h-12 flex justify-between items-center px-6 pt-3 z-50 mix-blend-difference text-white">
<span className="text-[13px] font-medium tracking-wide">9:41</span>
<div className="flex gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="signal"></i>
<i className="w-3.5 h-3.5" data-lucide="wifi"></i>
<i className="w-3.5 h-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="screen active items-center justify-center bg-white z-50" id="screen-splash">
<div className="flex flex-col items-center animate-pulse">
<div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-100">
<i className="w-8 h-8 text-white" data-lucide="wrench"></i>
</div>
<span className="text-xl font-bold tracking-tighter text-slate-900">GoMechanic</span>
</div>
</div>

<div className="screen px-6 pb-6" id="screen-phone">
<div className="flex-1 flex flex-col pt-12">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Enter your number</h1>
<p className="text-slate-500 text-base mb-10 leading-relaxed">We'll send a code to verify your phone.</p>
<div className="group flex items-center gap-3 pb-3 border-b-2 border-slate-100 focus-within:border-slate-900 transition-colors duration-300">
<div className="flex items-center gap-1">
<span className="text-xl font-medium text-slate-400">IN +91</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
<input autocomplete="off" autofocus="" className="flex-1 bg-transparent text-2xl font-medium outline-none placeholder:text-slate-300 tracking-wide text-slate-900 caret-red-500" id="phone-input" placeholder="000 000 0000" type="tel"/>
</div>
<div className="flex-grow"></div>
<div className="space-y-4 mb-4">
<div className="flex items-center gap-4 py-2">
<div className="h-[1px] flex-1 bg-slate-100"></div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Or continue with</span>
<div className="h-[1px] flex-1 bg-slate-100"></div>
</div>
<button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
<span className="text-sm font-semibold text-slate-700">Google</span>
</button>
<button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
<svg className="w-5 h-5 text-slate-900" fill="currentColor" viewbox="0 0 24 24"><path d="M13.073 2.585a4.706 4.706 0 0 0-.26 2.45c1.173.125 2.508-.85 3.033-1.944a4.34 4.34 0 0 0-2.773-.506zm-4.328 2.54c-2.455 0-4.37 1.545-4.37 4.505 0 3.655 2.43 8.435 5.86 8.435 1.52 0 2.075-.89 3.865-.89 1.765 0 2.225.89 3.83.89 2.595 0 4.28-4.23 4.28-4.23s-2.315-1.12-2.315-4.18c0-2.71 2.285-3.83 2.43-3.92-1.36-2.03-3.485-2.225-4.165-2.25-1.63-.125-3.235.975-4.07.975-.86 0-2.505-.92-3.975-.92z"></path></svg>
<span className="text-sm font-semibold text-slate-700">Apple</span>
</button>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2" onclick="nextScreen('screen-otp')">
                Get OTP
                <i className="w-5 h-5 opacity-50" data-lucide="arrow-right"></i>
</button>
</div>

<div className="screen px-6 pb-6" id="screen-otp">
<div className="flex items-center pt-2 pb-6">
<button className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors" onclick="nextScreen('screen-phone')">
<i className="w-6 h-6 text-slate-900" data-lucide="chevron-left"></i>
</button>
</div>
<div className="flex-1 flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Verify phone</h1>
<p className="text-slate-500 text-base mb-10">Code sent to <span className="text-slate-900 font-medium">+91 98765 43210</span></p>
<div className="flex justify-between gap-3 mb-8">
<input autofocus="" className="otp-digit w-14 h-16 rounded-xl border border-slate-200 bg-slate-50 text-center text-2xl font-bold text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all" maxlength="1" type="number"/>
<input className="otp-digit w-14 h-16 rounded-xl border border-slate-200 bg-slate-50 text-center text-2xl font-bold text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all" maxlength="1" type="number"/>
<input className="otp-digit w-14 h-16 rounded-xl border border-slate-200 bg-slate-50 text-center text-2xl font-bold text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all" maxlength="1" type="number"/>
<input className="otp-digit w-14 h-16 rounded-xl border border-slate-200 bg-slate-50 text-center text-2xl font-bold text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all" maxlength="1" type="number"/>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-400">Didn't receive code?</span>
<button className="text-sm font-semibold text-slate-900 hover:underline">Resend in 23s</button>
</div>
<div className="flex-grow"></div>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-transform" onclick="nextScreen('screen-name')">
                Verify
            </button>
</div>

<div className="screen px-6 pb-6" id="screen-name">
<div className="flex items-center justify-between pt-2 pb-6">
<button className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors" onclick="nextScreen('screen-otp')">
<i className="w-6 h-6 text-slate-900" data-lucide="chevron-left"></i>
</button>
</div>
<div className="flex-1 flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">What's your name?</h1>
<p className="text-slate-500 text-base mb-10">This helps drivers identify you easily.</p>
<div className="pb-3 border-b-2 border-slate-100 focus-within:border-slate-900 transition-colors duration-300">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
<input autofocus="" className="w-full bg-transparent text-xl font-medium outline-none placeholder:text-slate-300 text-slate-900 caret-red-500" placeholder="e.g. Rahul Sharma" type="text"/>
</div>
<div className="flex-grow"></div>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-transform" onclick="nextScreen('screen-location')">
                Complete Signup
            </button>
</div>

<div className="screen px-6 pb-6" id="screen-location">
<div className="flex items-center pt-2 pb-2">
<button className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors" onclick="nextScreen('screen-name')">
<i className="w-6 h-6 text-slate-900" data-lucide="chevron-left"></i>
</button>
</div>
<div className="flex-1 flex flex-col min-h-0">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Enable location</h1>
<p className="text-slate-500 text-base mb-8">To show nearby service availability.</p>

<div className="flex-1 overflow-y-auto no-scrollbar -mx-2 px-2">
<div className="mb-4">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Popular Locations</span>
</div>
<div className="space-y-1">
<button className="w-full group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left" onclick="nextScreen('screen-home')">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">New Delhi</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="w-full group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left" onclick="nextScreen('screen-home')">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Gurgaon</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="w-full group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left" onclick="nextScreen('screen-home')">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Noida</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="w-full group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left" onclick="nextScreen('screen-home')">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Bengaluru</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="w-full group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left" onclick="nextScreen('screen-home')">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Mumbai</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>

<div className="mt-4 pt-4 border-t border-slate-100">
<button className="w-full flex items-center gap-3 p-3 text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50 group" onclick="nextScreen('screen-home')">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-900" data-lucide="search"></i>
<span className="font-medium">Search for another location</span>
</button>
</div>
</div>
</div>

<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 mt-4" onclick="nextScreen('screen-home')">
<i className="w-5 h-5 opacity-90" data-lucide="map-pin"></i>
                Use current location
            </button>
</div>

<div className="screen px-6 pt-12" id="screen-home">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-red-600" data-lucide="map-pin"></i>
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</div>
<div className="text-sm font-bold text-slate-900">Home, Bangalore</div>
</div>
</div>
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 font-semibold">
                    RS
                </div>
</div>
<div className="space-y-2 mb-8">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Hello, Rahul.</h2>
<p className="text-lg text-slate-500">What does your car need today?</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 aspect-square flex flex-col justify-between hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-900" data-lucide="wrench"></i>
<span className="font-semibold text-slate-900">Service</span>
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 aspect-square flex flex-col justify-between hover:border-slate-300 transition-colors">
<i className="w-8 h-8 text-slate-900" data-lucide="disc"></i>
<span className="font-semibold text-slate-900">Tyres</span>
</div>
</div>
<button className="mt-auto mb-6 w-full text-sm font-medium text-slate-400" onclick="location.reload()">Restart Prototype</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/10 rounded-full z-50"></div>
</div>


    </>
  );
}
