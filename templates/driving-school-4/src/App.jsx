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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6', // Bright Blue
600: '#2563eb',
900: '#1e3a8a', // Deep Blue
},
accent: {
400: '#fbbf24', // Amber/Yellow
500: '#f59e0b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Dark Mode Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const darkIcon = document.getElementById('theme-icon-dark');
        const lightIcon = document.getElementById('theme-icon-light');

        // Check local storage or system preference
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        }

        themeToggleBtn.addEventListener('click', function() {
            // Toggle icons
            darkIcon.classList.toggle('hidden');
            lightIcon.classList.toggle('hidden');

            // If is set in local storage
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });

        // Booking Wizard Logic
        let currentStep = 1;
        const totalSteps = 3;

        function nextStep(step) {
            // Hide current step
            document.getElementById(`step-${currentStep}`).classList.add('hidden');
            
            // Show next step
            document.getElementById(`step-${step}`).classList.remove('hidden');
            
            // Update Progress Bar
            const progressBar = document.getElementById('progress-bar');
            const progress = (step / totalSteps) * 100;
            progressBar.style.width = `${progress}%`;
            
            currentStep = step;
        }

        function selectPackage(pkg) {
            // Scroll to booking
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            // Logic to pre-select radio button would go here
            console.log("Selected: " + pkg);
        }

        // Mobile Menu Toggle
        const menuBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const menu = document.getElementById('navbar-sticky');
        
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-brand-600 text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform">
<span className="iconify" data-height="24" data-icon="lucide:car-front" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="self-center text-xl font-semibold tracking-tight whitespace-nowrap text-slate-900 dark:text-white">LA Driving School</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4 items-center">

<button className="p-2 text-slate-500 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors" id="theme-toggle">
<span className="iconify hidden" data-icon="lucide:sun" data-width="20" id="theme-icon-light"></span>
<span className="iconify" data-icon="lucide:moon" data-width="20" id="theme-icon-dark"></span>
</button>
<a className="hidden md:flex text-white bg-brand-600 hover:bg-brand-700 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all hover:shadow-lg shadow-brand-500/20" href="#booking">
                    Book Lesson
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-slate-800 md:dark:bg-transparent dark:border-slate-700">
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 dark:text-white dark:hover:text-brand-500" href="#home">Home</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 dark:text-white dark:hover:text-brand-500" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 dark:text-white dark:hover:text-brand-500" href="#areas">Areas</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 dark:text-white dark:hover:text-brand-500" href="#about">Instructor</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 dark:text-white dark:hover:text-brand-500" href="#contact">Contact</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="home">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent dark:from-brand-900/20"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-medium uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Accepting New Students
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    Master the Road with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Confidence.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                    Safe, professional, and friendly driving lessons in Northern Melbourne. Join over 250 students who passed their test with Arshveer Singh.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1" href="#booking">
                        Book Your Lesson
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 rounded-lg transition-all" href="https://wa.me/61420412264">
<span className="iconify mr-2 text-green-500" data-icon="lucide:message-circle" data-width="20"></span>
                        Chat on WhatsApp
                    </a>
</div>

<div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-950 flex items-center justify-center text-xs font-bold text-slate-600">AS</div>
<div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white dark:border-slate-950 flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
<div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white dark:border-slate-950 flex items-center justify-center text-xs font-bold text-slate-600">+</div>
</div>
<div className="flex flex-col">
<div className="flex text-accent-500">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<span className="text-sm font-medium text-slate-900 dark:text-white">Rated 5.0 by Students</span>
</div>
</div>
</div>
<div className="relative hidden lg:block animate-fade-in delay-200">

<div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-brand-100 to-slate-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-90 grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"></div>

<div className="absolute top-10 right-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg max-w-[200px] animate-slide-up" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-100 text-green-600 rounded-lg">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<span className="text-sm font-semibold text-slate-900 dark:text-white">Pass Guaranteed</span>
</div>
<p className="text-xs text-slate-500">High success rate with structured learning.</p>
</div>

<div className="absolute bottom-10 left-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg max-w-[220px] animate-slide-up" style={{animationDelay: '0.6s'}}>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-semibold uppercase text-brand-600">Special Offer</span>
<span className="text-xs font-bold bg-accent-400/20 text-accent-600 px-2 py-0.5 rounded-full">$1500</span>
</div>
<div className="font-semibold text-slate-900 dark:text-white text-sm">Unlimited Classes + Test</div>
<p className="text-xs text-slate-500 mt-1">Get your license worry-free.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group">
<div className="mb-2 flex justify-center text-brand-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:award" data-width="32"></span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">250+</h3>
<p className="text-sm font-medium text-slate-500">Students Passed</p>
</div>
<div className="text-center group">
<div className="mb-2 flex justify-center text-brand-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-width="32"></span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">100%</h3>
<p className="text-sm font-medium text-slate-500">VTD Accredited</p>
</div>
<div className="text-center group">
<div className="mb-2 flex justify-center text-brand-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="32"></span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">7 Days</h3>
<p className="text-sm font-medium text-slate-500">Availability</p>
</div>
<div className="text-center group">
<div className="mb-2 flex justify-center text-brand-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:map-pin" data-width="32"></span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">15+</h3>
<p className="text-sm font-medium text-slate-500">Suburbs Covered</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Pricing Packages</h2>
<p className="text-slate-600 dark:text-slate-400">Transparent pricing with no hidden fees. Choose the package that suits your experience level.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-brand-500 dark:hover:border-brand-500 transition-all hover:shadow-xl hover:-translate-y-1 group relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white">Express Lesson</h3>
<p className="text-sm text-slate-500">Perfect for assessment</p>
</div>
<div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
<span className="iconify" data-icon="lucide:timer" data-width="24"></span>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-slate-900 dark:text-white">$60</span>
<span className="text-slate-500 ml-2">/ 45 mins</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Pickup &amp; Drop-off
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Skill Assessment
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Mock Test Feedback
                        </li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-colors" href="#booking" onclick="selectPackage('express')">Select Package</a>
</div>

<div className="bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 rounded-2xl p-8 transform md:scale-105 shadow-2xl relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl"></div>
<div className="inline-block px-3 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full mb-6">Most Popular</div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Lesson + Test</h3>
<p className="text-sm text-slate-400">Complete test day solution</p>
</div>
<div className="p-2 bg-slate-800 dark:bg-slate-700 rounded-lg text-white">
<span className="iconify" data-icon="lucide:car" data-width="24"></span>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">$250</span>
<span className="text-slate-400 ml-2">/ Package</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span> 60 Min Warm-up Lesson
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span> Use of Instructor Car
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span> Test Centre Meetup
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span> Support until finish
                        </li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-colors" href="#booking" onclick="selectPackage('test')">Book Now</a>
</div>

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-brand-500 dark:hover:border-brand-500 transition-all hover:shadow-xl hover:-translate-y-1 group relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white">Unlimited Pass</h3>
<p className="text-sm text-slate-500">Guaranteed until you pass</p>
</div>
<div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
<span className="iconify" data-icon="lucide:crown" data-width="24"></span>
</div>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-slate-900 dark:text-white">$1500</span>
<span className="text-slate-500 ml-2">/ Fixed</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Unlimited Lessons
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Includes Test Fees
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" data-width="16"></span> Priority Booking
                        </li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-colors" href="#booking" onclick="selectPackage('unlimited')">Contact for Details</a>
</div>
</div>

<div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Other Driving Services</h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 hover:border-brand-500 hover:text-brand-500 cursor-default transition-colors">Refresher Courses</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 hover:border-brand-500 hover:text-brand-500 cursor-default transition-colors">Night Driving</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 hover:border-brand-500 hover:text-brand-500 cursor-default transition-colors">Freeway Lessons</span>
<span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 hover:border-brand-500 hover:text-brand-500 cursor-default transition-colors">Overseas License Conversion</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800" id="booking">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-10 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Book Your Lesson</h2>
<p className="text-slate-600 dark:text-slate-400">Follow the steps to schedule your drive.</p>
</div>

<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">

<div className="h-1 w-full bg-slate-100 dark:bg-slate-800">
<div className="h-full bg-brand-600 w-1/3 transition-all duration-500" id="progress-bar"></div>
</div>
<form className="p-8" id="booking-form">

<div className="space-y-6" id="step-1">
<h3 className="text-xl font-medium text-slate-900 dark:text-white">Select Service Type</h3>
<div className="grid md:grid-cols-2 gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="service" type="radio" value="lesson-45"/>
<div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-brand-500 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-900/20 transition-all">
<div className="font-semibold text-slate-900 dark:text-white">Express Lesson (45m)</div>
<div className="text-sm text-slate-500 mt-1">$60 - Quick refresh</div>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio" value="lesson-60"/>
<div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-brand-500 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-900/20 transition-all">
<div className="font-semibold text-slate-900 dark:text-white">Standard Lesson (60m)</div>
<div className="text-sm text-slate-500 mt-1">$70 - Recommended</div>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio" value="lesson-90"/>
<div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-brand-500 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-900/20 transition-all">
<div className="font-semibold text-slate-900 dark:text-white">Premium Lesson (90m)</div>
<div className="text-sm text-slate-500 mt-1">$100 - Extended Practice</div>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio" value="test-package"/>
<div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-brand-500 peer-checked:bg-brand-50 dark:peer-checked:bg-brand-900/20 transition-all">
<div className="font-semibold text-slate-900 dark:text-white">Test Package</div>
<div className="text-sm text-slate-500 mt-1">$250 - Lesson + Test</div>
</div>
</label>
</div>
<div className="flex justify-end pt-4">
<button className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors" onclick="nextStep(2)" type="button">Next</button>
</div>
</div>

<div className="hidden space-y-6" id="step-2">
<h3 className="text-xl font-medium text-slate-900 dark:text-white">Preferred Availability</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
<input className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" type="date"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Time Block</label>
<select className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white">
<option>Morning (8AM - 12PM)</option>
<option>Afternoon (12PM - 4PM)</option>
<option>Evening (4PM - 8PM)</option>
</select>
</div>
</div>
<p className="text-xs text-slate-500 italic">We will confirm exact timing via phone/email after booking.</p>
<div className="flex justify-between pt-4">
<button className="text-slate-500 hover:text-slate-800 font-medium" onclick="nextStep(1)" type="button">Back</button>
<button className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors" onclick="nextStep(3)" type="button">Next</button>
</div>
</div>

<div className="hidden space-y-6" id="step-3">
<h3 className="text-xl font-medium text-slate-900 dark:text-white">Your Details</h3>
<div className="grid gap-4">
<input className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" placeholder="Full Name" type="text"/>
<div className="grid md:grid-cols-2 gap-4">
<input className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" placeholder="Email Address" type="email"/>
<input className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" placeholder="Phone Number" type="tel"/>
</div>
<input className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" placeholder="Pickup Suburb" type="text"/>
<textarea className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white" placeholder="Any specific requirements or questions?" rows="3"></textarea>
</div>
<div className="flex justify-between pt-4 items-center">
<button className="text-slate-500 hover:text-slate-800 font-medium" onclick="nextStep(2)" type="button">Back</button>
<button className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center gap-2" type="submit">
                                Confirm Booking
                                <span className="iconify" data-icon="lucide:check" data-width="16"></span>
</button>
</div>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-900" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="relative w-full max-w-md mx-auto md:ml-0 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Arshveer Singh - Instructor" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white font-semibold text-lg">Arshveer Singh</p>
<p className="text-slate-300 text-sm">Lead Instructor</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Safety First. Always.</h2>
<p className="text-lg text-slate-600 dark:text-slate-400">
                    At LA Driving School, our mission is to build confident, defensive drivers who are ready for any road condition. I tailor every lesson to your specific needs, ensuring you not only pass your test but become a safe driver for life.
                </p>
<div className="grid grid-cols-2 gap-6 pt-6">
<div>
<h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:languages" data-width="18"></span>
                            Languages
                        </h4>
<p className="text-sm text-slate-500 mt-2">English, Punjabi, Hindi, Urdu</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:clock" data-width="18"></span>
                            Hours
                        </h4>
<p className="text-sm text-slate-500 mt-2">8:00 AM – 10:00 PM <br/>(7 Days a Week)</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800" id="areas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Areas We Serve</h2>
<p className="text-slate-600 dark:text-slate-400">Covering Northern Melbourne suburbs.</p>
</div>

<div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Donnybrook
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Craigieburn
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Mickleham
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Kalkallo
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Roxburgh Park
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Broadmeadows
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Epping
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Thomastown
                </div>
<div className="px-5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2 hover:border-brand-500 hover:text-brand-600 transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 map-point"></div> Wollert
                </div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
<div className="grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-brand-600 text-white p-1 rounded-lg">
<span className="iconify" data-icon="lucide:car-front" data-width="20"></span>
</div>
<span className="text-lg font-semibold text-slate-900 dark:text-white">LA Driving School</span>
</div>
<p className="text-sm text-slate-500 mb-6">Empowering new drivers with skills, confidence, and safety since 2018.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div className="col-span-1">
<h4 className="font-medium text-slate-900 dark:text-white mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
<a className="hover:text-brand-600 transition-colors" href="tel:0420412264">0420 412 264</a>
</li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-brand-600 transition-colors" href="mailto:arshmomi02@gmail.com">arshmomi02@gmail.com</a>
</li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                             Melbourne, VIC
                        </li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-medium text-slate-900 dark:text-white mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#booking">Book a Lesson</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-1">
<h4 className="font-medium text-slate-900 dark:text-white mb-4">Stay Updated</h4>
<form className="flex gap-2">
<input className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-brand-500" placeholder="Enter email" type="email"/>
<button className="px-3 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"><span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></button>
</form>
</div>
</div>
<div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
                © 2024 LA Driving School. All rights reserved.
            </div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-bounce" href="https://wa.me/61420412264">
<span className="iconify" data-height="32" data-icon="lucide:message-circle" data-width="32"></span>
</a>



    </>
  );
}
