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
sans: ['Outfit', 'sans-serif'],
},
colors: {
background: '#FCFBF8', // Subtle warm whitish background
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-6 inset-x-0 z-50 px-6 max-w-7xl mx-auto flex justify-center">
<div className="flex items-center justify-between w-full bg-background/80 backdrop-blur-md rounded-full px-4 py-3 border shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border-neutral-200">
<div className="flex items-center gap-2 pl-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-neutral-900">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-xl font-semibold tracking-tight">Mira</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-600">
<a className="transition-colors hover:text-neutral-900" href="#features">Features</a>
<a className="transition-colors hover:text-neutral-900" href="#workflow">Workflow</a>
<a className="transition-colors hover:text-neutral-900" href="#advantages">Advantages</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center justify-center transition-colors hover:bg-neutral-50 text-base font-medium border-neutral-200 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">Log in</a>
<a className="flex items-center justify-center transition-colors hover:bg-neutral-800 text-base font-medium text-white bg-neutral-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
<style>a:has(+ a[data-element-id="aura-emm2m6t486t9bj7b"]) { display: none !important; }</style>
    Get Mira
</a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-48 pr-6 pb-20 pl-6 relative">
<div className="max-w-5xl mx-auto text-center relative z-10">
<h1 className="text-6xl sm:text-7xl md:text-[5.5rem] leading-[1.05] font-semibold tracking-tight mb-6 text-neutral-900">
                You talk. <br className="hidden sm:block"/>
<span className="text-neutral-400">Mira handles the rest.</span>
</h1>
<p className="text-xl sm:text-2xl font-normal text-neutral-500 max-w-2xl mx-auto mb-12">
                End-to-end schedule coordination. Reclaim your focus and let your voice manage the administrative chaos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center gap-2 px-6 py-3.5 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-lg font-medium rounded-full transition-colors border border-[#d8b4fe] text-neutral-900" href="#">
<i className="w-5 h-5" data-lucide="apple"></i>
                    Download for iPhone
                </a>
<a className="flex items-center gap-2 px-6 py-3.5 text-lg font-medium rounded-full transition-colors border bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200" href="#">
<i className="w-5 h-5" data-lucide="smartphone"></i>
                    Download for Android
                </a>
</div>
</div>

<div className="mt-24 flex justify-center items-center h-32 relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-48 h-48 border rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] border-neutral-200"></div>
<div className="absolute w-64 h-64 border rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s] border-neutral-100"></div>
</div>

<div className="relative z-10 flex items-center gap-4 px-8 py-5 rounded-full shadow-lg border bg-white border-neutral-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900">
<i className="w-5 h-5 text-white" data-lucide="mic"></i>
</div>
<div className="flex items-center gap-1.5 h-6">
<div className="w-1.5 rounded-full h-3 animate-[pulse_1s_ease-in-out_infinite] bg-neutral-300"></div>
<div className="w-1.5 rounded-full h-6 animate-[pulse_1.2s_ease-in-out_infinite_0.2s] bg-neutral-800"></div>
<div className="w-1.5 rounded-full h-4 animate-[pulse_0.9s_ease-in-out_infinite_0.4s] bg-neutral-400"></div>
<div className="w-1.5 rounded-full h-5 animate-[pulse_1.1s_ease-in-out_infinite_0.1s] bg-neutral-900"></div>
<div className="w-1.5 rounded-full h-2 animate-[pulse_1s_ease-in-out_infinite_0.3s] bg-neutral-300"></div>
</div>
<span className="text-lg font-medium ml-2 text-neutral-400">"Reschedule my 2pm to tomorrow..."</span>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-100/50">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-400">
                Stop wasting time on low-value administrative coordination rather than <span className="text-neutral-900">deep, meaningful work.</span>
</h2>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">Designed for flow.</h2>
<p className="text-xl font-normal text-neutral-500 max-w-2xl">Features built to handle the entire workflow without requiring your screen attention.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-10 rounded-3xl border shadow-sm flex flex-col justify-between group bg-white border-neutral-200">
<div>
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 bg-neutral-50 border-neutral-100 text-neutral-900">
<i className="w-6 h-6" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Smart Scheduling</h3>
<p className="text-lg text-neutral-500 font-normal leading-relaxed">Mira analyzes your calendar, preferences, and travel time to find the perfect slot. Just tell her who you need to meet.</p>
</div>
</div>

<div className="p-10 rounded-3xl border shadow-sm flex flex-col justify-between bg-white border-neutral-200">
<div>
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 bg-neutral-50 border-neutral-100 text-neutral-900">
<i className="w-6 h-6" data-lucide="sunrise"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Morning Briefs</h3>
<p className="text-lg text-neutral-500 font-normal leading-relaxed">Start your day hands-free. While you commute or have coffee, Mira narrates your agenda and outstanding actions.</p>
</div>
</div>

<div className="p-10 rounded-3xl border shadow-sm flex flex-col justify-between bg-white border-neutral-200">
<div>
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 bg-neutral-50 border-neutral-100 text-neutral-900">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Meeting Prep</h3>
<p className="text-lg text-neutral-500 font-normal leading-relaxed">Ask Mira for context before you enter a room. She surfaces past notes, emails, and relevant documents instantly via voice.</p>
</div>
</div>

<div className="p-10 rounded-3xl border shadow-sm flex flex-col justify-between bg-white border-neutral-200">
<div>
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 bg-neutral-50 border-neutral-100 text-neutral-900">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">Group Scheduling</h3>
<p className="text-lg text-neutral-500 font-normal leading-relaxed">Complex coordinations are handled quietly in the background. Mira emails participants, negotiates times, and sends the invites.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 rounded-[3rem] mx-4 sm:mx-6 max-w-[90rem] xl:mx-auto relative overflow-hidden bg-neutral-900 text-white" id="workflow">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
<div className="lg:w-1/3">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">How it works</h2>
<p className="text-xl font-normal text-neutral-400">A seamless workflow that completes tasks from start to finish, requiring zero screen time.</p>
</div>
<div className="lg:w-2/3 flex flex-col gap-12">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg font-medium z-10 bg-neutral-800 border-neutral-700">1</div>
<div className="w-px h-full my-2 bg-neutral-800"></div>
</div>
<div className="pb-8">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Speak to Mira</h3>
<p className="text-lg font-normal text-neutral-400">Engage in micro-interactions. Just press the widget or use the wake word without breaking your current focus.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg font-medium z-10 bg-neutral-800 border-neutral-700">2</div>
<div className="w-px h-full my-2 bg-neutral-800"></div>
</div>
<div className="pb-8">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Mira Processes &amp; Acts</h3>
<p className="text-lg font-normal text-neutral-400">Natural language understanding deciphers intent. Mira connects to your tools and executes the necessary steps automatically.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg font-medium z-10 bg-neutral-800 border-neutral-700">3</div>
<div className="w-px h-full my-2 bg-neutral-800"></div>
</div>
<div className="pb-8">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Proactive Suggestions</h3>
<p className="text-lg font-normal text-neutral-400">If there are conflicts or better options, Mira chimes in with smart alternatives before finalizing.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-lg font-medium z-10 bg-neutral-100 text-neutral-900 border-neutral-100">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Stay hands-free</h3>
<p className="text-lg font-normal text-neutral-400">Your day is organized, invites are sent, and your calendar is optimized. All while your phone stayed in your pocket.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none bg-white"></div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="advantages">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">Why Mira is different</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-background border-t border-b sm:border sm:rounded-3xl p-12 text-center border-neutral-200">
<div className="w-16 h-16 border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm bg-white border-neutral-200">
<i className="w-8 h-8 text-stone-900" data-lucide="mic"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">Voice First</h3>
<p className="text-xl text-neutral-500 font-normal">Built entirely around spoken interactions. No forms, no complex menus. Talk to it like a human assistant.</p>
</div>
<div className="bg-background border-t border-b sm:border sm:rounded-3xl p-12 text-center border-neutral-200">
<div className="w-16 h-16 border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm bg-white border-neutral-200">
<i className="w-8 h-8 text-stone-900" data-lucide="workflow"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">End-to-End</h3>
<p className="text-xl text-neutral-500 font-normal">Unlike basic dictation, Mira actually executes workflows. From finding slots to sending the final calendar invites.</p>
</div>
</div>
</section>

<section className="py-32 px-6 text-center border-t border-neutral-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-neutral-900">Ready to clear your schedule?</h2>
<p className="text-xl text-neutral-500 font-normal mb-12">Download Mira today and reclaim hours of administrative work.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-lg font-medium rounded-full transition-colors bg-neutral-900 hover:bg-neutral-800 text-white" href="#">
<i className="w-5 h-5" data-lucide="apple"></i>
                    Download for iPhone
                </a>
<a className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-lg font-medium rounded-full transition-colors border bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200" href="#">
<i className="w-5 h-5" data-lucide="smartphone"></i>
                    Download for Android
                </a>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-neutral-900">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<span className="text-lg font-semibold tracking-tight">Mira</span>
</div>
<div className="flex gap-8 text-base font-normal text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Contact</a>
</div>
<p className="text-base font-normal text-neutral-400">© 2024 Mira Technologies. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
