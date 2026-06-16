import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  


    const toggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    
    toggle.addEventListener('click', function() {
      const isAnnual = toggle.getAttribute('aria-checked') === 'true';
      toggle.setAttribute('aria-checked', !isAnnual);
      
      const toggleDot = toggle.querySelector('span');
      if (!isAnnual) {
        toggleDot.classList.remove('translate-x-0');
        toggleDot.classList.add('translate-x-5');
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        annualPrices.forEach(price => price.classList.remove('hidden'));
      } else {
        toggleDot.classList.remove('translate-x-5');
        toggleDot.classList.add('translate-x-0');
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        annualPrices.forEach(price => price.classList.add('hidden'));
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden pt-16 pb-12 min-h-screen flex flex-col justify-between">

<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-xl">
        Simple, <span className="text-white">Transparent</span> Pricing
      </h1>
<p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 font-inter font-normal">
        Choose the perfect plan for your needs. All plans include core features.<br/>
        No hidden fees. Cancel anytime.
      </p>

<div className="flex items-center justify-center mb-10 space-x-3">
<span className="text-sm font-medium text-gray-700 dark:text-gray-300" id="monthlyLabel">Monthly</span>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="billingToggle" role="switch">
<span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-900 shadow ring-0 transition duration-200 ease-in-out">
<span className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity opacity-0 duration-100 ease-out">
<svg className="h-3 w-3 text-gray-400" fill="none" viewbox="0 0 12 12">
<path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" fill="currentColor"></path>
</svg>
</span>
</span>
</button>
<span className="text-sm font-medium text-gray-700 dark:text-gray-300" id="annualLabel">Annual <span className="text-green-500 text-xs ml-1">Save 20%</span></span>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-5">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 transition-all duration-300">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Popular</span>
</div>
<h3 className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-xl">Starter</h3>
<div className="flex items-baseline">
<span className="monthly-price text-4xl font-bold text-gray-900 dark:text-white">$19</span>
<span className="annual-price text-4xl font-bold text-gray-900 dark:text-white hidden">$15</span>
<span className="ml-1 text-gray-600 dark:text-gray-400 font-inter">/month</span>
</div>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
              Perfect for individuals and small projects getting started.
            </p>
<ul className="space-y-3 font-inter">
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>5 projects</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>20GB storage</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Basic analytics</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>24/7 support</span>
</li>
</ul>
<a className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white dark:bg-neutral-900 text-blue-700 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-blue-200 dark:border-white/10 transition" href="#">
              Get Started
            </a>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-100/40 to-transparent dark:via-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-5">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 transition-all duration-300">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Recommended</span>
</div>
<h3 className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-xl">Pro</h3>
<div className="flex items-baseline">
<span className="monthly-price text-4xl font-bold text-gray-900 dark:text-white">$49</span>
<span className="annual-price text-4xl font-bold text-gray-900 dark:text-white hidden">$39</span>
<span className="ml-1 text-gray-600 dark:text-gray-400 font-inter">/month</span>
</div>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
              Advanced features for professionals and growing teams.
            </p>
<ul className="space-y-3 font-inter">
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>100GB storage</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Priority support</span>
</li>
</ul>
<a className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white dark:bg-neutral-900 text-blue-700 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-blue-200 dark:border-white/10 transition" href="#">
              Get Started
            </a>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-100/40 to-transparent dark:via-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-5">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 transition-all duration-300">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm5 1h6m-6 4h6m-6 4h3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Enterprise</span>
</div>
<h3 className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-xl">Enterprise</h3>
<div className="flex items-baseline">
<span className="monthly-price text-4xl font-bold text-gray-900 dark:text-white">$99</span>
<span className="annual-price text-4xl font-bold text-gray-900 dark:text-white hidden">$79</span>
<span className="ml-1 text-gray-600 dark:text-gray-400 font-inter">/month</span>
</div>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
              Advanced security and controls for large organizations.
            </p>
<ul className="space-y-3 font-inter">
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Everything in Pro</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Unlimited storage</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>SSO authentication</span>
</li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Dedicated support</span>
</li>
</ul>
<a className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white dark:bg-neutral-900 text-blue-700 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-blue-200 dark:border-white/10 transition" href="#">
              Contact Sales
            </a>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-100/40 to-transparent dark:via-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
