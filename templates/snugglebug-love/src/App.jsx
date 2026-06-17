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

        // --- Testimonial Slider Logic ---
        const track = document.getElementById('testimonial-track');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.querySelectorAll('.rounded-full.w-2\\.5'); // Select all dots
        let currentIndex = 0;
        const totalSlides = 3;

        function updateSlide() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                if(index === currentIndex) {
                    dot.classList.remove('bg-slate-300', 'hover:bg-[#529E92]/50');
                    dot.classList.add('bg-[#529E92]');
                } else {
                    dot.classList.add('bg-slate-300', 'hover:bg-[#529E92]/50');
                    dot.classList.remove('bg-[#529E92]');
                }
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlide();
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        });

        // Auto slide every 8 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        }, 8000);

        // --- Join Logic ---
        function handleJoin(inputId) {
            const input = document.getElementById(inputId);
            const email = input ? input.value : '';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // Success State
                showToast("Welcome to the family! 💖 Your email has been added to our list.");
                input.value = ''; // Clear input
            } else {
                // Error State
                showToast("Please enter a valid email address.", true);
                if(input) {
                    input.focus();
                    input.classList.add('ring-4', 'ring-red-100', 'border-red-400');
                    setTimeout(() => {
                        input.classList.remove('ring-4', 'ring-red-100', 'border-red-400');
                    }, 2000);
                }
            }
        }

        function showToast(msg, isError = false) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            const toastIconDiv = toast.querySelector('div div'); // The icon container
            
            toastMsg.textContent = msg;
            
            if(isError) {
                toast.querySelector('.border-l-4').classList.replace('border-[#529E92]', 'border-red-500');
                toastIconDiv.classList.replace('bg-[#E0F2F1]', 'bg-red-50');
                toastIconDiv.classList.replace('text-[#529E92]', 'text-red-500');
                // Change icon to X
                toastIconDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>';
                toast.querySelector('h4').textContent = "Oops!";
            } else {
                // Reset to success style
                toast.querySelector('.border-l-4').classList.replace('border-red-500', 'border-[#529E92]');
                toastIconDiv.classList.replace('bg-red-50', 'bg-[#E0F2F1]');
                toastIconDiv.classList.replace('text-red-500', 'text-[#529E92]');
                toastIconDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>';
                toast.querySelector('h4').textContent = "Success!";
            }

            // Show Toast
            toast.classList.remove('translate-y-32', 'opacity-0');
            toast.classList.add('toast-enter');

            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('toast-enter');
                toast.classList.add('translate-y-32', 'opacity-0');
            }, 3500);
        }
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>

<div className="absolute top-20 left-[10%] opacity-10 text-[#529E92] animate-float-slow">
<svg fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="120"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="absolute top-1/3 right-[5%] opacity-10 text-[#ED9C71] animate-float-medium" style={{animationDelay: '2s'}}>
<svg fill="none" height="100" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="100"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<div className="absolute bottom-1/4 left-[-5%] opacity-10 text-[#907AD6] animate-float-slow" style={{animationDelay: '1s'}}>
<svg fill="none" height="150" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="150"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
</div>

<div className="absolute top-[15%] right-[20%] w-64 h-64 bg-[#B5EAD7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-[#D4C4FB] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{animationDelay: '4s'}}></div>
<div className="absolute top-[40%] left-[40%] w-56 h-56 bg-[#FDFD96] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{animationDelay: '2s'}}></div>
</div>

<div className="fixed bottom-6 right-6 z-[60] transform translate-y-32 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" id="toast">
<div className="bg-white border-l-4 border-[#529E92] shadow-2xl rounded-lg p-4 flex items-center gap-3 pr-8 min-w-[320px]">
<div className="bg-[#E0F2F1] text-[#529E92] p-2 rounded-full">
<svg className="lucide lucide-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm">Success!</h4>
<p className="text-sm text-slate-500" id="toast-message">Email added to our list.</p>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="flex h-20 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer z-10">
<div className="transition-transform duration-500 group-hover:rotate-12 w-8 h-12 relative flex items-center justify-center">
<svg className="lucide lucide-footprints drop-shadow-sm w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="footprints" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(51, 65, 85)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-[#529E92]">Snuggle<span className="text-[#ED9C71]">bug</span></span>
</div>
<div className="hidden md:flex gap-6 text-sm font-medium text-slate-500 z-10">
<a className="hover:text-[#529E92] transition-colors" href="#">Pregnancy</a>
<a className="hover:text-[#ED9C71] transition-colors" href="#">Newborn</a>
<a className="hover:text-[#D4C4FB] transition-colors" href="#">Support</a>
</div>

<button className="hidden md:block hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm font-medium text-white bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 z-10" onclick="document.getElementById('hero-email').focus()">
                Join the Family
            </button>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-visible pt-32 pr-6 pb-20 pl-6 relative z-10">
<div className="max-w-4xl mx-auto text-center relative">
<h1 className="animate-enter delay-100 md:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-8">For the bump, the birth,<br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#529E92] via-[#ED9C71] to-[#D4C4FB]">and everything after</span></h1>
<p className="animate-enter delay-200 md:text-xl leading-relaxed text-slate-500 max-w-xl mr-auto mb-12 ml-auto">
                The all-in-one companion for your journey. Track kicks and contractions now; sleep and feeding later. Prepared parents, calmer babies.
            </p>

<div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="relative w-full max-w-sm">
<input className="placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#ED9C71]/10 focus:border-[#ED9C71] transition-all hover:shadow-md text-slate-900 bg-white w-full border-slate-200 border rounded-full pt-4 pr-6 pb-4 pl-6 shadow-sm" id="hero-email" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2D2D2D] text-white font-medium hover:bg-[#000000] hover:scale-105 transition-all shadow-xl shadow-slate-200 active:scale-95 whitespace-nowrap" onclick="handleJoin('hero-email')">
                    Join the Family
                </button>
</div>
<p className="animate-enter delay-500 flex items-center justify-center gap-2 text-sm text-slate-400 mt-6">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Trusted by 2,000+ expecting &amp; new parents
            </p>
</div>
</section>
<div className="relative z-10">
<h1 className="animate-enter delay-100 leading-[1.1] md:text-4xl text-5xl font-semibold text-slate-900 tracking-tight text-center mb-8">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#529E92] via-[#ED9C71] to-[#D4C4FB]">Calm, Confident Parenting Begins Here</span>
</h1>
</div>

<section className="pt-20 pr-6 pb-20 pl-6 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
<div className="-mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 bg-[#B5EAD7] opacity-10 w-32 h-32 rounded-bl-full absolute top-0 right-0"></div>
<div className="flex group-hover:scale-110 transition-transform duration-300 animate-wiggle-hover text-[#529E92] bg-[#F0F9F8] w-14 h-14 rounded-2xl mb-6 items-center justify-center">
<svg className="lucide lucide-activity w-[28px] h-[28px]" data-lucide="activity" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Bump to Baby Tracking</h3>
<p className="leading-relaxed text-slate-500">Log kicks and symptoms during pregnancy. Switch modes instantly when baby arrives.</p>
</div>

<div className="group bg-white p-8 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FDFD96] opacity-20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
<div className="w-14 h-14 rounded-2xl bg-[#FFFDE7] flex items-center justify-center text-[#D69E2E] mb-6 group-hover:scale-110 transition-transform duration-300 animate-wiggle-hover">
<svg className="lucide lucide-sparkles w-[28px] h-[28px]" data-lucide="sparkles" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Preparation &amp; Lists</h3>
<p className="leading-relaxed text-slate-500">From hospital bag checklists to nursery setup, stay organized before the big day.</p>
</div>

<div className="group bg-white p-8 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C4FB] opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
<div className="w-14 h-14 rounded-2xl bg-[#F3EFFF] flex items-center justify-center text-[#907AD6] mb-6 group-hover:scale-110 transition-transform duration-300 animate-wiggle-hover">
<svg className="lucide lucide-heart-handshake w-7 h-7" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Snuggle AI</h3>
<p className="leading-relaxed text-slate-500">Answers for "Is this kick count normal?" to "Why won't they sleep?"</p>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden leading-[0] rotate-180 relative z-10">
<svg className="block fill-[#FDFCFB] w-[1233px] h-[60px] relative" data-icon-replaced="true" data-name="Layer 1" preserveaspectratio="none" strokeWidth="2" style={{width: '1233px', height: '60px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>

<section className="overflow-visible bg-[#FDFCFB] pt-24 pr-6 pb-24 pl-6 relative z-10">

<div className="absolute right-0 top-20 opacity-5 pointer-events-none">
<svg fill="none" height="400" stroke="#2D2D2D" strokeWidth="1" viewbox="0 0 200 200" width="400">
<circle className="animate-spin" cx="100" cy="100" r="80" stroke-dasharray="10 10" style={{animationDuration: '60s'}}></circle>
<circle className="animate-spin" cx="100" cy="100" r="60" stroke-dasharray="5 5" style={{animationDuration: '40s', animationDirection: 'reverse'}}></circle>
</svg>
</div>
<div className="flex flex-col md:flex-row gap-16 max-w-5xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="w-full md:w-1/2 relative">

<div className="relative bg-white border-4 border-slate-100 rounded-[3rem] p-6 shadow-2xl animate-float-medium">

<div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default">
<div className="w-10 h-10 rounded-full bg-[#B5EAD7] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-footprints w-5 h-5" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Kick Count Complete</h4>
<p className="text-xs text-slate-400">10 movements in 24 mins • Just now</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full bg-[#FDFD96] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-milk w-5 h-5" data-lucide="milk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2h8"></path><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Feeding Reminder</h4>
<p className="text-xs text-slate-400">Right breast • 15 min ago</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-[#D4C4FB] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Hospital Bag Ready</h4>
<p className="text-xs text-slate-400">All items checked off!</p>
</div>
</div>
</div>

<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ED9C71] rounded-full blur-3xl opacity-20 -z-10 animate-blob"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#529E92] rounded-full blur-3xl opacity-20 -z-10 animate-blob" style={{animationDelay: '2s'}}></div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">A helper that grows with you</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#529E92]">
<svg className="lucide lucide-calendar-heart w-5 h-5" data-lucide="calendar-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"></path><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Seamless Transition</h3>
<p className="text-slate-500 mt-1">Start by tracking your pregnancy. One tap on delivery day creates your baby's profile.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#ED9C71]">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Partner sync</h3>
<p className="text-slate-500 mt-1">Share contractions, diaper logs, and memories instantly. You're in this together.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#F3E5F5] flex items-center justify-center text-[#907AD6]">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Private by design</h3>
<p className="text-slate-500 mt-1">Your family's data is yours alone. We don't sell it, share it, or peek at it. Ever.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-visible bg-[#FDFCFB] pt-24 pr-6 pb-24 pl-6 relative z-10">

<div className="absolute left-[-2%] top-[30%] opacity-10 text-slate-400 rotate-12 animate-float-slow">
<svg fill="none" height="180" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="180"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</div>
<div className="flex flex-col md:flex-row gap-16 max-w-5xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="w-full md:w-1/2">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-6">Enjoy the journey, not just survive it</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#529E92]">
<svg className="lucide lucide-hand w-[20px] h-[20px]" data-lucide="hand" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Emotional check-ins</h3>
<p className="text-slate-500 mt-1">Whether it's trimester fatigue or newborn bliss, pause and track how you feel.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#ED9C71]">
<svg className="lucide lucide-book-heart w-[20px] h-[20px]" data-lucide="book-heart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Digital Baby Book</h3>
<p className="text-slate-500 mt-1">Save bump photos, ultrasound pics, and those precious first smiles in one place.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#F3E5F5] flex items-center justify-center text-[#907AD6]">
<svg className="lucide lucide-smile" data-lucide="smile" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Kind, judgment-free space</h3>
<p className="text-slate-500 mt-1">A safe place to reflect, without advice overload or comparison.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative">

<div className="relative bg-white border-4 border-slate-100 rounded-[3rem] p-6 shadow-2xl animate-float-medium">

<div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default">
<div className="w-10 h-10 rounded-full bg-[#B5EAD7] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Daily check-in</h4>
<p className="text-xs text-slate-400">“How are you feeling today?”</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full bg-[#FDFD96] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-bell w-[20px] h-[20px]" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Gentle reminder</h4>
<p className="text-xs text-slate-400">Take a deep breath 🌿</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-[#D4C4FB] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-image w-[20px] h-[20px]" data-lucide="image" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Photo added</h4>
<p className="text-xs text-slate-400">“Bump Update: Week 34”</p>
</div>
</div>
</div>

<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ED9C71] rounded-full blur-3xl opacity-20 -z-10 animate-blob"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#529E92] rounded-full blur-3xl opacity-20 -z-10 animate-blob" style={{animationDelay: '2s'}}></div>
</div>
</div>
</section>
<section className="overflow-visible bg-[#FDFCFB] pt-24 pr-6 pb-24 pl-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 max-w-5xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="w-full md:w-1/2 relative">

<div className="relative bg-white border-4 border-slate-100 rounded-[3rem] p-6 shadow-2xl animate-float-medium">

<div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default">
<div className="w-10 h-10 rounded-full bg-[#B5EAD7] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Ask any query</h4>
<p className="text-xs text-slate-400">"What should I pack for the hospital?"</p>
</div>
</div>

<div className="flex gap-4 hover:scale-105 transition-transform cursor-default bg-white border-slate-50 border rounded-2xl mb-4 pt-4 pr-4 pb-4 pl-4 shadow-sm gap-x-4 gap-y-4 items-center" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full bg-[#FDFD96] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-list-checks w-[20px] h-[20px]" data-lucide="list-checks" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Instant List</h4>
<p className="text-xs text-slate-400">"1. Onesies, 2. Swaddles, 3. Snacks..."</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:scale-105 transition-transform cursor-default" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-[#D4C4FB] flex items-center justify-center text-[#2D2D2D]">
<svg className="lucide lucide-clover" data-lucide="clover" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(45, 45, 45)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.17 7.83 2 22"></path><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"></path><path d="m7.83 7.83 8.34 8.34"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-slate-800">Support made easy</h4>
<p className="text-xs text-slate-400">“Pregnancy nutrition guide”</p>
</div>
</div>
</div>

<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ED9C71] rounded-full blur-3xl opacity-20 -z-10 animate-blob"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#529E92] rounded-full blur-3xl opacity-20 -z-10 animate-blob" style={{animationDelay: '2s'}}></div>
</div>

<div className="w-full md:w-1/2">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-6">The buddy you need, before and after</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#529E92]">
<svg className="lucide lucide-lightbulb w-[20px] h-[20px]" data-lucide="lightbulb" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Ask anything, anytime</h3>
<p className="text-slate-500 mt-1">From “Is this food safe?” to “How to swaddle?” - without any hesitation</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#ED9C71]">
<svg className="lucide lucide-message-circle-heart w-[20px] h-[20px]" data-lucide="message-circle-heart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Reassuring, human responses</h3>
<p className="text-slate-500 mt-1">Clear guidance delivered with empathy, covering pregnancy anxiety to newborn sleep.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[#F3E5F5] flex items-center justify-center text-[#907AD6]">
<svg className="lucide lucide-clover" data-lucide="clover" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.17 7.83 2 22"></path><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"></path><path d="m7.83 7.83 8.34 8.34"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Built for real moments</h3>
<p className="text-slate-500 mt-1">Designed for hospital visits, late nights, and everything in between.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<span className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-4">Loved by 
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#529E92] via-[#ED9C71] to-[#D4C4FB]" style={{}}>parents all over the world</span>
<p className="text-xl text-slate-500">Don't just take our word for it.</p>
</span></div>

<div className="group relative">

<div className="absolute inset-0 bg-gradient-to-r from-[#529E92]/5 to-[#ED9C71]/5 transform -rotate-1 rounded-[3rem] scale-105 blur-lg -z-10"></div>
<div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden relative">

<div className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="testimonial-track" style={{transform: 'translateX(-100%)'}}>

<div className="min-w-full p-8 md:p-14 flex flex-col items-center text-center">
<div className="text-[#529E92] mb-6">
<svg className="opacity-20" fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<blockquote className="md:text-2xl leading-relaxed text-xl font-medium text-slate-900 mb-8">"The newborn feeding tracker is what kept us sane those first few weeks. It's so intuitive."</blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="text-left">
<div className="font-bold text-slate-900">Sarah, UAE</div>
<div className="text-sm text-slate-400">Mom to Leo (3 months)</div>
</div>
</div>
</div>

<div className="min-w-full md:p-14 flex flex-col text-center pt-8 pr-8 pb-8 pl-8 items-center">
<div className="text-[#ED9C71] mb-6">
<svg className="opacity-20" fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<blockquote className="md:text-2xl leading-relaxed text-xl font-medium text-slate-900 mb-8">
                                "My partner and I are finally on the same page. No more texting 'did you change the diaper?' at 3 AM. The sync is instant."
                            </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
<img alt="Vishnu" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
</div>
<div className="text-left">
<div className="font-bold text-slate-900" style={{}}>Vishnu, India</div>
<div className="text-sm text-slate-400" style={{}}>Dad to Maya (2 months)</div>
</div>
</div>
</div>

<div className="min-w-full p-8 md:p-14 flex flex-col items-center text-center">
<div className="text-[#907AD6] mb-6">
<svg className="opacity-20" fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<blockquote className="md:text-2xl leading-relaxed text-xl font-medium text-slate-900 mb-8">"I was drowning in advice from everyone. SnuggleBug gave me a step by step solution without the noise."</blockquote>
<div className="flex items-center gap-4">
<div className="overflow-hidden bg-slate-100 w-12 h-12 rounded-full">
<img alt="Elena" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"/>
</div>
<div className="text-left">
<div className="font-bold text-slate-900">Ananya, Germany</div>
<div className="text-sm text-slate-400">Expecting (34 weeks)</div>
</div>
</div>
</div>
</div>

<button className="-translate-y-1/2 flex hover:text-[#529E92] hover:border-[#529E92] hover:scale-110 active:scale-90 transition-all disabled:opacity-50 text-slate-600 bg-white w-10 h-10 z-10 border-slate-200 border rounded-full absolute top-1/2 left-4 shadow-sm items-center justify-center" id="prevBtn">
<svg className="lucide lucide-chevron-left w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(82, 158, 146)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="-translate-y-1/2 flex hover:text-[#529E92] hover:border-[#529E92] hover:scale-110 active:scale-90 transition-all z-10 text-slate-600 bg-white w-10 h-10 border-slate-200 border rounded-full absolute top-1/2 right-4 shadow-sm items-center justify-center" id="nextBtn">
<svg className="lucide lucide-chevron-right w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(82, 158, 146)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="flex justify-center gap-2 mt-8">
<button className="w-2.5 h-2.5 rounded-full transition-colors" onclick="goToSlide(0)"></button>
<button className="w-2.5 h-2.5 rounded-full transition-colors" onclick="goToSlide(1)"></button>
<button className="w-2.5 h-2.5 rounded-full transition-colors" onclick="goToSlide(2)"></button>
</div>
</div>
</div>
</section>

<section className="pt-10 pr-6 pb-24 pl-6 relative z-10">
<div className="max-w-4xl mx-auto bg-[#2D2D2D] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-700">
<div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[#ED9C71] rounded-full blur-[100px] animate-float-slow"></div>
<div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-[#529E92] rounded-full blur-[100px] animate-float-medium" style={{animationDelay: '2s'}}></div>
</div>
<div className="z-10 relative">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Ready for the journey ahead?
                </h2>
<p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto">
                    From positive test to first steps, we're here. Join the waitlist today to get early access.
                </p>

<div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
<div className="relative w-full">
<input className="placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all text-slate-900 bg-white w-full border-transparent border rounded-full pt-4 pr-6 pb-4 pl-6 shadow-lg" id="bottom-email" placeholder="Enter your email" type="email"/>
</div>
<button className="px-8 py-4 rounded-full bg-white text-[#2D2D2D] font-bold hover:bg-slate-100 transition-colors shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap" onclick="handleJoin('bottom-email')">
                        Join the Family
                    </button>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-slate-100 bg-[#FAFAF9] relative z-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-9 flex items-center justify-center">
<svg className="lucide lucide-footprints text-slate-700" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
<span className="font-semibold text-slate-900">SnuggleBug</span>
</div>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Twitter</a>
</div>
<div className="text-sm text-slate-400">© 2025 SnuggleBug Inc.</div>
</div>
</footer>


    </>
  );
}
