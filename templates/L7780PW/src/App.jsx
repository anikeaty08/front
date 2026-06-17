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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card-animate').forEach(card => {
      observer.observe(card);
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
      
<main className="flex-1 w-full sm:px-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5004108-7288-45ac-9ace-ba190a3cd6f2_3840w.jpg)] bg-cover pr-4 pb-12 pl-4">
<div className="mx-auto max-w-7xl">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-12">

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38367144-d0a1-4363-84fa-a3c129fdd6bf_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(16, 185, 129, 0.1) 0px 0px 0px 1px'}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-sunrise w-8 h-8 text-emerald-200 group-hover:scale-110 transition-transform" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
<span className="text-xs px-3 py-1.5 bg-emerald-400/20 text-emerald-200 rounded-full font-medium font-sans">Today</span>
</div>
<div>
<p className="text-3xl sm:text-4xl tracking-tight font-instrument-serif font-normal">7 Day Streak</p>
<p className="text-emerald-200 text-lg mt-2 font-normal font-sans">Morning Meditation</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-emerald-200 text-2xl font-instrument-serif font-normal">12 min</p>
<p className="text-emerald-300 text-sm font-light font-sans">completed</p>
</div>
</div>
</div>
<div className="space-y-4 border-t border-emerald-700 pt-6">
<p className="text-emerald-100 text-sm leading-relaxed font-light font-sans">
              "Breathe deeply and find your center. Today's session focused on gratitude and presence."
            </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-xs tracking-wider font-sans">MINDFUL</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-emerald-200 text-sm hover:underline transition-colors font-medium font-sans" href="#">Continue journey</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-zinc-100 bg-zinc-900 border-zinc-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between" style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px'}}>
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c348a351-d823-4782-aca8-fba2670caab9_800w.jpg)] bg-cover border-zinc-800/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center" style={{}}>
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-medium font-sans" style={{}}>Sleep Stories</span>
<div className="flex gap-1">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
<div className="w-2 h-2 bg-indigo-700 rounded-full"></div>
<div className="w-2 h-2 bg-indigo-700 rounded-full"></div>
</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-instrument-serif font-normal">Peaceful narratives for restful sleep</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-400 space-y-1 font-light" style={{}}>
<p className="font-sans">Ocean waves &amp; gentle rain</p>
<p className="font-sans">Guided body scan relaxation</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3f1cd61-1f82-44be-b97d-dc1fa1132370_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(34, 211, 238, 0.1) 0px 0px 0px 1px'}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-wind w-8 h-8 text-blue-200 group-hover:scale-110 transition-transform" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-xs px-3 py-1.5 bg-blue-400/20 text-blue-200 rounded-full font-medium font-sans">Active</span>
</div>
<div className="">
<p className="text-2xl sm:text-3xl tracking-tight font-instrument-serif font-normal">4-7-8 Breathing</p>
<p className="text-blue-200 text-base mt-2 font-normal font-sans">Calming Technique</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-blue-200 text-2xl font-instrument-serif font-normal">5 min</p>
<p className="text-blue-300 text-sm font-light font-sans">session</p>
</div>
</div>
</div>
<div className="space-y-4 border-t border-blue-600 pt-6">
<p className="text-blue-100 text-sm leading-relaxed font-light font-sans">
              Master the ancient breathing pattern that naturally reduces stress and promotes deep relaxation.
            </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-xs tracking-wider font-sans">MINDFUL</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-blue-200 text-sm hover:underline transition-colors font-medium font-sans" href="#">Start session</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group text-zinc-100 bg-zinc-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between border border-zinc-800 animate-in" style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px'}}>
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d96dfc9-1c52-4ce1-a1ec-90b64d26cde8_800w.jpg)] bg-cover border-zinc-800/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center" style={{}}>
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-medium font-sans" style={{}}>Progress Insights</span>
<div className="text-xs bg-amber-500 text-black px-3 py-1.5 rounded-full font-semibold font-sans">+28%</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-instrument-serif font-normal">Track your mindfulness journey</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-400 space-y-1 font-light" style={{}}>
<p className="font-sans">• 47 hours meditated this month</p>
<p className="font-sans">• 15% improvement in focus</p>
<p className="font-sans">• 89% reduction in stress levels</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/088b775e-f259-464f-8b1e-c4a769c3f7ca_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(139, 92, 246, 0.1) 0px 0px 0px 1px'}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-xs px-3 py-1.5 bg-purple-400/20 text-purple-200 rounded-full font-medium font-sans">Library</span>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tighter font-instrument-serif font-normal">Sessions</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center hover:bg-purple-700 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="font-normal font-sans">Focus</span>
</div>
<span className="text-emerald-400 font-medium font-sans">12 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-purple-700 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="font-normal font-sans">Anxiety Relief</span>
</div>
<span className="text-blue-400 font-medium font-sans">8 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-purple-700 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="font-normal font-sans">Self Compassion</span>
</div>
<span className="text-yellow-400 font-medium font-sans">15 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-purple-700 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-rose-400 rounded-full"></div>
<span className="font-normal font-sans">Body Scan</span>
</div>
<span className="text-rose-400 font-medium font-sans">6 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-purple-700 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
<span className="font-normal font-sans">Loving Kindness</span>
</div>
<span className="text-cyan-400 font-medium font-sans">10 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
</div>
</div>
<div className="space-y-4 border-t border-purple-700 pt-6">
<p className="text-purple-100 text-sm leading-relaxed font-light font-sans">
              Curated meditation library with expert-guided sessions for every mood and moment.
            </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-xs tracking-wider font-sans">MINDFUL</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-purple-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-purple-200 text-sm hover:underline transition-colors font-medium font-sans" href="#">Explore all</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col justify-between rounded-3xl bg-zinc-900 text-zinc-100 p-8 sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group border border-zinc-800 animate-in" style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px'}}>
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/233c2f7e-1bb9-4ce6-82bc-c3d8e0b8af36_800w.jpg)] bg-cover border-zinc-800/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center" style={{}}>
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-medium font-sans" style={{}}>Mindful Community</span>
<div className="text-xs bg-rose-500 text-white px-3 py-1.5 rounded-full font-semibold font-sans">Live</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-instrument-serif font-normal">Connect with fellow meditators</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-400 space-y-1 font-light" style={{}}>
<p className="font-sans">• Join group meditation sessions</p>
<p className="font-sans">• Share insights and progress</p>
<p className="font-sans">• Daily mindfulness challenges</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
