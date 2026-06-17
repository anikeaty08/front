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



    // Initialize lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    // Step toggling
    const steps = [
      { id: 1, container: document.getElementById('step-1'), panel: document.getElementById('step-1-panel') },
      { id: 2, container: document.getElementById('step-2'), panel: document.getElementById('step-2-panel') },
      { id: 3, container: document.getElementById('step-3'), panel: document.getElementById('step-3-panel') },
    ];

    function openStep(id) {
      steps.forEach(({ id: stepId, container, panel }) => {
        const icon = container.querySelector('[data-lucide^="chevron"]');
        if (stepId === id) {
          panel.classList.remove('hidden');
          if (icon) icon.replaceWith(lucide.createElement('chevron-up', { class: 'h-5 w-5 text-stone-500' }));
          // Highlight marker
          const badge = container.parentElement.querySelector('.h-10.w-10');
          if (badge) { badge.classList.add('bg-black','text-white'); }
        } else {
          panel.classList.add('hidden');
          if (icon) icon.replaceWith(lucide.createElement('chevron-down', { class: 'h-5 w-5 text-stone-500' }));
          const badge = container.parentElement.querySelector('.h-10.w-10');
          if (badge && stepId !== 1) { badge.classList.remove('bg-black','text-white'); badge.classList.add('bg-white'); }
        }
      });
    }

    document.querySelectorAll('[data-step]').forEach(btn => {
      btn.addEventListener('click', () => openStep(Number(btn.dataset.step)));
    });

    // Default: step 1 open
    openStep(1);

    // Auth tab toggle
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const groupName = document.getElementById('group-name');
    const groupPassword = document.getElementById('group-password');
    const continueAuth = document.getElementById('continue-auth');

    function setMode(mode) {
      const isSignup = mode === 'signup';
      groupName.classList.toggle('hidden', !isSignup);
      groupPassword.classList.toggle('hidden', !isSignup);

      // Toggle button styles
      if (isSignup) {
        tabSignup.className = "px-3 py-1.5 rounded-full text-sm font-medium bg-black text-white";
        tabSignin.className = "px-3 py-1.5 rounded-full text-sm font-medium border border-stone-200 bg-white text-stone-900";
        continueAuth.textContent = "Create account";
      } else {
        tabSignin.className = "px-3 py-1.5 rounded-full text-sm font-medium bg-black text-white";
        tabSignup.className = "px-3 py-1.5 rounded-full text-sm font-medium border border-stone-200 bg-white text-stone-900";
        continueAuth.textContent = "Continue to Sign In";
      }
    }

    tabSignin.addEventListener('click', () => setMode('signin'));
    tabSignup.addEventListener('click', () => setMode('signup'));
    setMode('signin');

    // Password visibility
    const togglePass = document.getElementById('toggle-pass');
    const passInput = document.getElementById('password');
    if (togglePass) {
      togglePass.addEventListener('click', () => {
        const showing = passInput.getAttribute('type') === 'text';
        passInput.setAttribute('type', showing ? 'password' : 'text');
        togglePass.innerHTML = '';
        togglePass.appendChild(lucide.createElement(showing ? 'eye' : 'eye-off', { class: 'h-4 w-4' }));
      });
    }

    // Validation and progression
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    function validEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    continueAuth.addEventListener('click', () => {
      const value = emailInput.value.trim();
      if (!value || !validEmail(value)) {
        emailError.classList.remove('hidden');
        emailInput.classList.add('border-red-500','focus:ring-red-500','focus:border-red-500');
        return;
      }
      emailError.classList.add('hidden');
      emailInput.classList.remove('border-red-500','focus:ring-red-500','focus:border-red-500');
      openStep(2);
    });

    document.getElementById('save-location').addEventListener('click', () => {
      openStep(3);
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
      
<header className="border-b border-stone-200 bg-white">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-sm bg-black"></div>
<span className="text-[20px] tracking-tight font-['Inter'] font-semibold">chez</span>
</div>
<div className="hidden sm:flex items-center gap-6">
<a className="text-sm text-stone-600 hover:text-stone-900" href="#">Help</a>
<a className="text-sm text-stone-600 hover:text-stone-900" href="#">Support</a>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid lg:grid-cols-2 gap-8">

<section aria-label="Onboarding steps" className="relative">

<div className="hidden sm:block absolute left-[20px] top-0 bottom-0 w-px bg-stone-200"></div>

<div className="relative mb-4">

<div className="absolute -left-[2px] sm:left-0 top-5">
<div className="flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 bg-black text-white text-sm font-medium">1</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl shadow-sm" id="step-1">
<button className="w-full flex items-center justify-between px-6 py-5" data-step="1" type="button">
<div className="flex flex-col text-left">
<h2 className="text-[24px] tracking-tight font-['Inter'] font-semibold">Account creation</h2>
<p className="text-sm text-stone-600">Sign in or create an account to get started.</p>
</div>
<svg className="lucide lucide-chevron-up h-5 w-5 text-stone-500" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="px-6 pb-6 -mt-1" id="step-1-panel">

<div className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 mb-5 flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4 text-stone-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-sm text-stone-700">Sign in to access your credits and discounts.</p>
</div>

<div className="flex items-center gap-2 mb-5">
<button className="px-3 py-1.5 rounded-full text-sm font-medium bg-black text-white" id="tab-signin">Sign In</button>
<button className="px-3 py-1.5 rounded-full text-sm font-medium border border-stone-200 bg-white text-stone-900" id="tab-signup">Sign Up</button>
</div>

<div className="space-y-3 mb-6">
<button className="w-full h-11 rounded-full bg-stone-900 text-white flex items-center justify-center gap-2">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm font-medium">Continue with Email Link</span>
</button>
<button className="w-full h-11 rounded-full bg-stone-800 text-white/90 flex items-center justify-center gap-2">
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Continue with Account ID</span>
</button>
</div>

<div className="relative my-5">
<div className="h-px w-full bg-stone-200"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white px-3 text-xs text-stone-500">or continue with email</span>
</div>
</div>

<form className="space-y-4" id="form-auth">
<div className="hidden" id="group-name">
<label className="block text-sm font-medium text-stone-700 mb-1">Full name</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="email" placeholder="you@company.com" required="" type="email"/>
<p className="mt-1 text-xs text-red-600 hidden" id="email-error">Email is required</p>
</div>
<div className="hidden" id="group-password">
<label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
<div className="relative">
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 pr-10 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="password" placeholder="Min. 8 characters" type="password"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-500 hover:text-stone-900" id="toggle-pass" type="button">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<button className="w-full h-12 rounded-full bg-black text-white text-sm font-medium" id="continue-auth" type="button">
                  Continue to Sign In
                </button>
<p className="text-xs text-stone-500">
                  By tapping “Continue”, you agree to our Terms and Privacy Policy. We may send a verification code. Msg &amp; data rates may apply.
                </p>
</form>
</div>
</div>
</div>

<div className="relative mb-4">
<div className="absolute -left-[2px] sm:left-0 top-5">
<div className="flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 bg-white text-stone-900 text-sm font-medium">2</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl shadow-sm" id="step-2">
<button className="flex w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" data-step="2" type="button">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin h-5 w-5 text-stone-600 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="text-left">
<h2 className="text-[22px] tracking-tight font-['Inter'] font-semibold">Add your location</h2>
<p className="text-sm text-stone-600">Where should we set your default address?</p>
</div>
</div>
<svg className="lucide lucide-chevron-down h-5 w-5 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="step-2-panel">
<form className="space-y-4" id="form-location">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Address</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="address" placeholder="123 Market St" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">City</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="city" placeholder="San Francisco" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">State</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="state" placeholder="CA" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">ZIP</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" id="zip" placeholder="94103" type="text"/>
</div>
</div>
<button className="w-full h-12 rounded-full bg-black text-white text-sm font-medium" id="save-location" type="button">Save location</button>
</form>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[2px] sm:left-0 top-5">
<div className="flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 bg-white text-stone-900 text-sm font-medium">3</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl shadow-sm" id="step-3">
<button className="w-full flex items-center justify-between px-6 py-5" data-step="3" type="button">
<div className="flex items-start gap-3">
<svg className="lucide lucide-credit-card h-5 w-5 text-stone-600 mt-1" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<div className="text-left">
<h2 className="text-[22px] tracking-tight font-['Inter'] font-semibold">Confirm and pay</h2>
<p className="text-sm text-stone-600">Review your details and complete payment.</p>
</div>
</div>
<svg className="lucide lucide-chevron-down h-5 w-5 text-stone-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="step-3-panel">
<form className="space-y-4" id="form-payment">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Cardholder name</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Card number</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" inputmode="numeric" placeholder="4242 4242 4242 4242" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">Exp.</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" placeholder="MM/YY" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">CVC</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" placeholder="123" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1">ZIP</label>
<input className="w-full h-12 rounded-lg border border-stone-300 bg-white px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black" placeholder="94103" type="text"/>
</div>
</div>
<button className="w-full h-12 rounded-full bg-black text-white text-sm font-medium" type="button">Confirm and pay</button>
<p className="text-xs text-stone-500">Your payment information is encrypted and secure.</p>
</form>
</div>
</div>
</div>
</section>

</div>
</main>


    </>
  );
}
