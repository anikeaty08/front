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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



document.addEventListener('DOMContentLoaded', () => {
  const ctx=document.getElementById('progressChart').getContext('2d');
  new Chart(ctx,{
    type:'doughnut',
    data:{
      labels:['Completed','Remaining','Missed'],
      datasets:[{
        data:[74,26,0],
        backgroundColor:[
          'rgba(37,99,235,.9)',   // blue-600
          'rgba(96,165,250,.9)',  // blue-400
          'rgba(147,197,253,.9)'  // blue-300
        ],
        borderWidth:0,
        cutout:'75%',
        hoverOffset:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}}
    }
  });
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
      
<div className="video-background-container fixed top-0 w-full h-screen -z-10">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/116b0a39-7876-4a6d-8bbc-bfea48ab134a/0.mp4"></video>
</div>

<nav className="sticky top-0 z-30 h-[64px] md:px-12 flex fade-in fade-in-delay-1 bg-white/5 border-slate-50/10 border-b pr-6 pl-6 backdrop-blur items-center">
<a aria-label="MusiLearn AI home" className="flex items-center space-x-3 mr-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">
<span className="md:text-lg text-base font-medium tracking-tight">MusiLearn</span>
</a>
<ul className="hidden md:flex gap-8 text-sm md:text-base font-normal text-[#656D7B]">
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">Dashboard</a></li>
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">Courses</a></li>
<li className=""><a className="hover:text-[#20232A] transition-colors focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg" href="#">AI Builder</a></li>
</ul>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<a className="text-[#656D7B] text-sm font-normal px-4 py-2 rounded-lg hover:bg-[#EEF2F8] transition focus-visible:ring-2 focus-visible:ring-[#3B82F6]" href="#">Log In</a>
<a className="hover:bg-[#3B82F6] transition focus-visible:ring-2 focus-visible:ring-[#3B82F6] text-sm font-medium text-white bg-gradient-to-tl from-slate-900 to-slate-700 rounded-lg pt-2 pr-5 pb-2 pl-5 shadow" href="#">Sign Up</a>
</div>
</nav>

<header className="max-w-2xl fade-in fade-in-delay-2 text-center mr-auto ml-auto pt-16 pr-4 pl-4">
<h1 className="text-4xl md:text-5xl tracking-tight leading-tight font-normal">
    Master Any Instrument.<br className="hidden md:inline"/>Powered by AI.
  </h1>
<p className="mt-6 text-lg text-[#656D7B]">
    Structured courses, curated YouTube lessons, and AI-generated<br className="hidden sm:inline"/>
    learning paths for your musical journey.
  </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
<a className="hover:bg-[#3B82F6] transition font-medium text-white bg-gradient-to-tl from-slate-900 to-slate-700 rounded-xl pt-3 pr-7 pb-3 pl-7 drop-shadow-xl" href="#">Browse Courses</a>
<a className="hover:bg-[#EEF2F8] hover:text-[#20232A] transition font-medium text-slate-950 bg-slate-50 border-slate-50 border rounded-xl pt-3 pr-7 pb-3 pl-7 drop-shadow-xl" href="#">Build AI Course</a>
</div>
</header>

<main className="w-full max-w-6xl mx-auto grid gap-8 px-4 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<section className="card flex flex-col gap-6 fade-in fade-in-delay-3 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex justify-between">
<div className="">
<h2 className="text-sm md:text-base font-medium tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-500 text-lg" icon="solar:play-circle-linear"></iconify-icon>
          Next: Your First 3 Notes
        </h2>
<p className="flex items-center gap-1 text-xs text-zinc-600 mt-2">
<iconify-icon className="text-sm" icon="solar:calendar-date-linear"></iconify-icon> Acoustic Guitar • Mod 1
        </p>
</div>
<button aria-label="More" className="p-2 rounded-lg transition focus-visible:ring-2 focus-visible:ring-blue-400 hover:bg-blue-50">
<iconify-icon className="text-base text-[#9CA3AF]" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</header>

<div aria-label="Chords Learned" className="flex items-center gap-2 flex-wrap">
<span className="w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center bg-blue-100 text-blue-700">C</span>
<span className="w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center bg-blue-100/80 text-blue-700/80">D</span>
<span className="w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center bg-blue-100/70 text-blue-700/70">G</span>
<span className="text-xs text-[#9CA3AF] font-normal">+Em</span>
</div>

<div className="flex flex-wrap gap-2 text-xs font-normal">
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100 text-blue-700">
<iconify-icon className="text-sm" icon="solar:pulse-linear"></iconify-icon> Ongoing
      </span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100/80 text-blue-800/80">
<iconify-icon className="text-sm" icon="solar:music-note-linear"></iconify-icon> Beginner
      </span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-100/60 text-blue-800/60">
<iconify-icon className="text-sm" icon="solar:stopwatch-linear"></iconify-icon> 15 Mins
      </span>
<span className="px-3 py-1 rounded-full flex items-center gap-1 bg-blue-200 text-blue-900">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon> 1⁄4 Done
      </span>
</div>

<div className="text-xs text-[#656D7B] border-t border-[#E5E7EB] pt-4 space-y-3">
<div>Objective: <span className="font-normal text-[#20232A]">Learn proper posture and basic finger placement</span></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-sm text-blue-400" icon="solar:danger-circle-linear"></iconify-icon> 
        Task: Practice C to D chord transition
      </div>
<div className="flex items-center justify-between">
<span>Action: <span className="font-normal text-[#20232A]">Start 10 Min Timer</span></span>
<button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition font-medium">Practice</button>
</div>
</div>
</section>

<section className="card flex flex-col gap-5 fade-in fade-in-delay-4 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex items-center gap-2">
<iconify-icon className="text-lg text-blue-500" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-sm md:text-base font-medium tracking-tight">AI Course: Jazz Piano</h3>
</header>
<p className="text-xs text-[#656D7B]">Generated by <span className="font-normal text-[#20232A]">Claude 3</span> • Custom Path</p>
<div className="flex gap-4 text-xs text-[#656D7B]">
<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:calendar-linear"></iconify-icon> 6 Modules
      </div>
<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:videocamera-linear"></iconify-icon> 24 Videos
      </div>
<div className="flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:chat-line-linear"></iconify-icon> 2 Notes
      </div>
</div>
<div className="border-t border-[#E5E7EB] pt-4 space-y-2 text-xs">
<div className="flex items-center gap-2">
<iconify-icon className="text-sm text-blue-400" icon="solar:text-square-linear"></iconify-icon> 
        "Smooth progression from triads to 7ths!" — Note
      </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm text-blue-400" icon="solar:text-square-linear"></iconify-icon> 
        "Great curated YouTube selection." — Note
      </div>
</div>
<div className="mt-6 border-t border-[#E5E7EB] pt-4">
<h4 className="text-sm font-medium tracking-tight mb-2 text-[#20232A]">Focus Areas</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Jazz</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100/80 text-blue-700/80">Piano</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100/60 text-blue-700/60">Intermediate</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-900">Improv</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100/50 text-blue-700/50">Theory</span>
</div>
</div>
</section>

<section className="card flex flex-col gap-6 fade-in fade-in-delay-5 bg-blue-50/50 border-blue-50 border drop-shadow-2xl backdrop-blur-sm">
<header className="flex justify-between items-center">
<h2 className="text-sm md:text-base font-medium tracking-tight flex items-center gap-2">
<iconify-icon className="text-lg text-blue-500" icon="solar:cup-star-linear"></iconify-icon>
        Weekly Progress
      </h2>
<span className="text-orange-500 text-xs font-normal flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:fire-linear"></iconify-icon> 4-Day Streak
      </span>
</header>
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="w-36 h-36 relative">
<canvas height="180" id="progressChart" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '134px'}} width="167"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-2xl text-blue-600 font-normal" id="donutMain">74%</span>
<span className="text-xs text-[#656D7B]">of Goal</span>
</div>
</div>
<div className="flex flex-col gap-3 w-full max-w-xs">
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-600"></span>Completed</div>
<span className="font-medium text-blue-600">3.5 hrs</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-400"></span>Remaining</div>
<span className="font-medium text-blue-400">1.2 hrs</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-300"></span>Missed</div>
<span className="font-medium text-blue-300">0 hrs</span>
</div>
</div>
</div>
<div className="border-t border-[#E5E7EB] pt-4 text-xs text-[#656D7B]">
<span className="font-normal text-[#20232A]">"You've practiced 4 days in a row! +50 XP"</span> — MusiLearn AI
    </div>
</section>
</main>





    </>
  );
}
