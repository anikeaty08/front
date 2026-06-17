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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22', // Custom dark for better contrast
}
},
animation: {
'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // Elements
            const form = document.getElementById('onboarding-form');
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            const continueBtn = document.getElementById('continue-btn');
            const backBtn = document.getElementById('back-btn');
            const btnText = document.getElementById('btn-text');
            const progressBar = document.getElementById('progress-bar');
            
            const fullNameInput = document.getElementById('fullName');
            const prefNameInput = document.getElementById('prefName');
            const emailInput = document.getElementById('email');
            const welcomeHeader = document.getElementById('welcome-header');
            
            const dashboardView = document.getElementById('dashboard-view');
            const dashboardGreeting = document.getElementById('dashboard-greeting');
            const onboardingContainer = document.getElementById('onboarding-container');

            // State
            let currentStep = 1;
            let userData = {
                fullName: '',
                prefName: '',
                email: '',
                age: '25-34',
                goal: ''
            };

            // Dynamic Welcome Logic
            const originalTitle = "Welcome to Finvise";
            
            function updateTitle() {
                const nameToUse = prefNameInput.value.trim() || fullNameInput.value.trim().split(' ')[0];
                if (nameToUse) {
                    welcomeHeader.textContent = `Welcome to Finvise, ${nameToUse}`;
                } else {
                    welcomeHeader.textContent = originalTitle;
                }
            }

            fullNameInput.addEventListener('input', updateTitle);
            prefNameInput.addEventListener('input', updateTitle);

            // Validation Helper
            function validateStep1() {
                const isNameValid = fullNameInput.value.trim().length > 1;
                const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
                
                // Simple visual validation
                if(!isNameValid && fullNameInput.value.length > 0) fullNameInput.classList.add('border-red-300', 'focus:ring-red-200');
                else fullNameInput.classList.remove('border-red-300', 'focus:ring-red-200');

                return isNameValid && isEmailValid;
            }

            // Navigation Logic
            continueBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (currentStep === 1) {
                    if (validateStep1()) {
                        // Store Data
                        userData.fullName = fullNameInput.value;
                        userData.prefName = prefNameInput.value;
                        userData.email = emailInput.value;

                        // Transition to Step 2
                        step1.classList.add('hidden');
                        step2.classList.remove('hidden');
                        
                        // Small timeout to allow display:block to render before opacity transition
                        setTimeout(() => {
                            step2.classList.remove('opacity-0', 'translate-x-4');
                        }, 50);

                        // Update UI
                        currentStep = 2;
                        progressBar.style.width = '66%';
                        backBtn.classList.remove('hidden');
                        btnText.textContent = 'Finish Setup';
                    } else {
                        // Shake animation or error
                        form.classList.add('animate-[pulse_0.2s_ease-in-out_2]');
                        setTimeout(() => form.classList.remove('animate-[pulse_0.2s_ease-in-out_2]'), 500);
                        
                        // Focus first invalid
                        if (fullNameInput.value.length < 2) fullNameInput.focus();
                        else emailInput.focus();
                    }
                } else if (currentStep === 2) {
                    // Check radio
                    const selectedGoal = document.querySelector('input[name="goal"]:checked');
                    if (!selectedGoal) {
                         alert("Please select a financial goal.");
                         return;
                    }

                    // Save Step 2 Data
                    userData.goal = selectedGoal.value;
                    const ageGroup = document.querySelector('input[name="age"]:checked').value;
                    userData.age = ageGroup;

                    // Finalize & Show Dashboard
                    progressBar.style.width = '100%';
                    btnText.textContent = 'Creating Account...';
                    continueBtn.disabled = true;
                    continueBtn.classList.add('opacity-75', 'cursor-not-allowed');

                    // Simulate API call
                    setTimeout(() => {
                        showDashboard();
                    }, 1200);
                }
            });

            backBtn.addEventListener('click', () => {
                if (currentStep === 2) {
                    step2.classList.add('opacity-0', 'translate-x-4');
                    setTimeout(() => {
                        step2.classList.add('hidden');
                        step1.classList.remove('hidden');
                    }, 300); // Wait for transition
                    
                    currentStep = 1;
                    progressBar.style.width = '33%';
                    backBtn.classList.add('hidden');
                    btnText.textContent = 'Continue';
                }
            });

            function showDashboard() {
                // Set Dashboard Greeting
                const displayName = userData.prefName || userData.fullName.split(' ')[0];
                dashboardGreeting.textContent = `Hi ${displayName}, welcome to Finvise`;

                // Animate Transition
                onboardingContainer.style.opacity = '0';
                onboardingContainer.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    dashboardView.classList.remove('translate-y-full');
                }, 400);
            }
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
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-zinc-200/40 to-transparent rounded-full blur-3xl opacity-60"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-gradient-to-bl from-zinc-200/40 to-transparent rounded-full blur-3xl opacity-60"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
</div>

<main className="relative z-10 w-full max-w-lg mx-auto h-full flex flex-col justify-center p-6 transition-all duration-700 ease-in-out" id="onboarding-container">

<div className="mb-8 flex items-center gap-2 animate-fade-in">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg shadow-lg shadow-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tighter text-zinc-900 uppercase">FINVISE</span>
</div>

<div className="glass-panel border border-white/50 shadow-xl shadow-zinc-200/60 rounded-2xl p-8 w-full animate-slide-up relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
<div className="h-full bg-zinc-900 transition-all duration-500 ease-out w-1/3" id="progress-bar" style={{width: '66%'}}></div>
</div>

<div className="mt-2 mb-8 space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900 transition-all duration-300" id="welcome-header">Welcome to Finvise, dhdh</h1>
<p className="text-sm text-zinc-500 leading-relaxed">Let's set up your personalized financial workspace. It only takes a moment.</p>
</div>

<form className="space-y-6" id="onboarding-form" onsubmit="return false;">

<div className="space-y-5 transition-all duration-500" id="step-1">
<div className="grid grid-cols-1 gap-5">

<div className="group input-group space-y-1.5">
<label className="text-xs font-medium text-zinc-500 transition-colors uppercase tracking-wide" htmlFor="fullName">Full Name</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</span>
<input className="placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all text-sm text-zinc-900 bg-zinc-50 w-full border-zinc-200 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-9 shadow-sm" id="fullName" placeholder="e.g. Jordan Hayes" required="" type="text"/>
</div>
</div>

<div className="group input-group space-y-1.5">
<label className="text-xs font-medium text-zinc-500 transition-colors uppercase tracking-wide" htmlFor="prefName">Preferred Name</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</span>
<input className="placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all text-sm text-zinc-900 bg-zinc-50 w-full border-zinc-200 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-9 shadow-sm" id="prefName" placeholder="e.g. Jordan" type="text"/>
</div>
</div>

<div className="group input-group space-y-1.5">
<label className="text-xs font-medium text-zinc-500 transition-colors uppercase tracking-wide" htmlFor="email">Email Address</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</span>
<input className="placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all text-sm text-zinc-900 bg-zinc-50 w-full border-zinc-200 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-9 shadow-sm" id="email" placeholder="jordan@company.com" required="" type="email"/>
</div>
</div>
</div>
</div>

<div className="space-y-6 opacity-0 translate-x-4 transition-all duration-500" id="step-2">

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Age Range</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="18-24"/>
<div className="text-center py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
                                    18-24
                                </div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="age" type="radio" value="25-34"/>
<div className="text-center py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
                                    25-34
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="35+"/>
<div className="text-center py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
                                    35+
                                </div>
</label>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Primary Financial Goal</label>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group relative">
<input className="sr-only" name="goal" type="radio" value="investing"/>
<div className="flex items-center p-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-all group-hover:border-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center mr-3 group-hover:bg-white group-hover:shadow-sm transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900">Grow Wealth</div>
<div className="text-xs text-zinc-500">Invest stocks &amp; crypto</div>
</div>
<div className="w-4 h-4 rounded-full border border-zinc-300 radio-indicator flex items-center justify-center"></div>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="sr-only" name="goal" type="radio" value="saving"/>
<div className="flex items-center p-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-all group-hover:border-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center mr-3 group-hover:bg-white group-hover:shadow-sm transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:piggy-bank" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900">Smart Savings</div>
<div className="text-xs text-zinc-500">Automated rainy day fund</div>
</div>
<div className="w-4 h-4 rounded-full border border-zinc-300 radio-indicator flex items-center justify-center"></div>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="sr-only" name="goal" type="radio" value="budgeting"/>
<div className="flex items-center p-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-all group-hover:border-zinc-300">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center mr-3 group-hover:bg-white group-hover:shadow-sm transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900">Track Spending</div>
<div className="text-xs text-zinc-500">Analyze monthly expenses</div>
</div>
<div className="w-4 h-4 rounded-full border border-zinc-300 radio-indicator flex items-center justify-center"></div>
</div>
</label>
</div>
</div>
</div>

<div className="pt-4 flex items-center justify-between border-t border-zinc-100">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md transition-colors" id="back-btn" type="button">
                        Back
                    </button>
<button className="hover:bg-zinc-800 shadow-zinc-900/10 flex transition-all transform active:scale-95 text-sm font-medium text-white bg-zinc-900 rounded-lg ml-auto pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg gap-x-2 gap-y-2 items-center" id="continue-btn" type="submit">
<span className="" id="btn-text">Finish Setup</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>

<div className="mt-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
<p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                Bank-level encryption. Your data is secure.
            </p>
</div>
</main>

<div className="fixed inset-0 z-50 bg-zinc-50 transform translate-y-full transition-transform duration-700 ease-in-out flex" id="dashboard-view">

<aside className="w-64 border-r border-zinc-200 bg-white hidden md:flex flex-col p-6">
<div className="flex items-center gap-2 mb-10">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-semibold tracking-tighter text-zinc-900 uppercase">FINVISE</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-zinc-50 text-zinc-900 rounded-md text-sm font-medium" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
                    Wallet
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-md text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></g></svg>
                    Analytics
                </a>
</nav>
<div className="mt-auto">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 rounded-md text-sm font-medium transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                    Settings
                </a>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="h-16 border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6 md:px-10">
<div className="md:hidden flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">
                        US
                    </div>
</div>
</header>
<div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in" style={{animationDelay: '0.5s'}}>

<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900" id="dashboard-greeting">

</h2>
<p className="text-sm text-zinc-500 mt-1">Here is your financial overview for today.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Total Balance</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:dollar-sign" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">$0.00</div>
<div className="mt-2 flex items-center gap-1 text-xs text-emerald-600 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Ready to start</span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Goal Progress</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:target" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">0%</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-zinc-900 h-1.5 rounded-full w-[5%]"></div>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Next Action</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-sm font-medium text-zinc-900">Connect Bank Account</div>
<button className="mt-3 text-xs font-medium text-zinc-900 border border-zinc-200 rounded px-2 py-1 hover:bg-zinc-50 transition-colors">
                            Connect now
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6 h-64 flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-3">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-sm font-medium text-zinc-900">No activity yet</h3>
<p className="text-xs text-zinc-500 max-w-xs mt-1">Once you connect your accounts, your financial insights will appear here.</p>
</div>
</div>
</main>
</div>



    </>
  );
}
