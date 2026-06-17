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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="absolute top-0 inset-x-0 h-[40rem] bg-gradient-to-b from-emerald-100/40 via-slate-50/20 to-transparent pointer-events-none -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[20rem] bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="mx-auto max-w-2xl w-full px-4 sm:px-6 pt-8 sm:pt-12 space-y-8 sm:space-y-12 relative z-10">

<div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-white/80 overflow-hidden relative group">

<div className="py-7 flex flex-col items-center justify-center border-b border-slate-200/50 bg-white z-20 relative">
<div className="flex items-center justify-center pt-2">
<img alt="my Ave Maria" className="h-24 w-auto object-contain" src="https://ik.imagekit.io/jnwpkntpm/my-ave-logo.png"/>
</div>
<p className="text-xs font-light text-slate-400 uppercase tracking-[0.25em] mt-4">Daily Bulletin</p>
</div>

<div className="h-56 sm:h-72 w-full relative group-hover:scale-[1.01] transition-transform duration-1000 ease-out z-10">
<div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 z-10"></div>
<img alt="Students together" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="p-8 sm:p-10 space-y-8 bg-gradient-to-b from-white to-slate-50/50 relative z-20">
<div className="text-center flex justify-center">
<div className="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden rounded-full">
<div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-md"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-emerald-500/20 rounded-full"></div>
<span className="relative text-sm font-normal text-emerald-700 uppercase tracking-widest">
                            March 23, 2026
                        </span>
</div>
</div>
<div className="space-y-6">
<p className="text-2xl font-light tracking-tight text-slate-800 text-center">Welcome Back, Gyrenes!</p>
<p className="text-xl leading-loose font-light text-slate-500">
                        We're in the home stretch of the spring semester! Make the most of it with some of the best events of the semester coming up, including the annual Mr. Gyrene Competition, Theology on Tap featuring Michael Kane, and Annunciation Fest.
                    </p>
<div className="relative rounded-2xl p-6 mt-8 overflow-hidden group/alert border border-amber-200/40">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-amber-100/30"></div>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-500"></div>
<div className="relative flex gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1 drop-shadow-sm" data-lucide="info"></i>
<p className="text-lg font-light text-amber-900/70 italic leading-relaxed font-['Playfair_Display',serif]">
<span className="font-normal text-amber-900/90 not-italic mr-1">Please Note:</span> In light of the current campus health advisory on the confirmed cases of measles on campus, those lacking immunity, who are pregnant, or are immunocompromised should be aware that the Florida Department of Health considers them at high risk, and that they should consider not attending events. Those exhibiting symptoms or who have been exposed, please do not attend. Always check with your personal physician before making any healthcare decisions.
                            </p>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 pt-8 pb-2">
<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-[6rem]"></div>
<h3 className="text-sm font-normal tracking-[0.2em] uppercase text-emerald-700/80 bg-emerald-50/50 px-4 py-1.5 rounded-full border border-emerald-100/50">Coming Up This Week</h3>
<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-[6rem]"></div>
</div>

<div className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border border-white/60 p-8 sm:p-10">
<div className="space-y-10">

<div className="group/day relative">
<h4 className="text-lg font-normal tracking-tight text-slate-800 mb-5 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/60 text-slate-400 shadow-sm">
<i className="w-4 h-4" data-lucide="calendar"></i>
</span>
                        Monday, March 23
                    </h4>
<ul className="space-y-4 pl-[3.25rem] relative">

<div className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-200/50 via-emerald-200/20 to-transparent"></div>
<li className="relative text-xl font-light text-slate-500 leading-relaxed group/item transition-transform duration-300 hover:translate-x-1">
<span className="absolute -left-[2.35rem] top-3 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-emerald-100"></span>
<a className="font-light text-slate-700 hover:text-emerald-600 transition-colors underline decoration-slate-200 hover:decoration-emerald-300 underline-offset-4" href="#">The Catholic Vision of Marriage, Family, and Sexuality</a>
<span className="block sm:inline text-lg font-light mt-1 sm:mt-0 text-slate-400">
<span className="hidden sm:inline px-2">·</span> Canizaro Library, The Daily Grind <span className="px-2">·</span> 6:30 p.m.
                            </span>
</li>
<li className="relative text-xl font-light text-slate-500 leading-relaxed group/item transition-transform duration-300 hover:translate-x-1">
<span className="absolute -left-[2.35rem] top-3 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-emerald-100"></span>
<a className="font-light text-slate-700 hover:text-emerald-600 transition-colors underline decoration-slate-200 hover:decoration-emerald-300 underline-offset-4" href="#">On-Campus Retreat</a>
<span className="block sm:inline text-lg font-light mt-1 sm:mt-0 text-slate-400">
<span className="hidden sm:inline px-2">·</span> Bob Thomas Student Union, Ballroom <span className="px-2">·</span> 8:00 p.m.
                            </span>
</li>
<li className="relative text-xl font-light text-slate-500 leading-relaxed group/item transition-transform duration-300 hover:translate-x-1">
<span className="absolute -left-[2.35rem] top-3 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-emerald-100"></span>
<a className="font-light text-slate-700 hover:text-emerald-600 transition-colors underline decoration-slate-200 hover:decoration-emerald-300 underline-offset-4" href="#">Marian Monday</a>
<span className="block sm:inline text-lg font-light mt-1 sm:mt-0 text-slate-400">
<span className="hidden sm:inline px-2">·</span> Saint Sebastian Hall, Lobby <span className="px-2">·</span> 8:15 p.m.
                            </span>
</li>
</ul>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/60 to-transparent"></div>

<div className="group/day relative">
<h4 className="text-lg font-normal tracking-tight text-slate-800 mb-5 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/60 text-slate-400 shadow-sm">
<i className="w-4 h-4" data-lucide="calendar"></i>
</span>
                        Tuesday, March 24
                    </h4>
<ul className="space-y-4 pl-[3.25rem] relative">
<div className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-200/50 via-emerald-200/20 to-transparent"></div>
<li className="relative text-xl font-light text-slate-500 leading-relaxed group/item transition-transform duration-300 hover:translate-x-1">
<span className="absolute -left-[2.35rem] top-3 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-emerald-100"></span>
<a className="font-light text-slate-700 hover:text-emerald-600 transition-colors underline decoration-slate-200 hover:decoration-emerald-300 underline-offset-4" href="#">Planned Parenthood Prayer Trip</a>
<span className="block sm:inline text-lg font-light mt-1 sm:mt-0 text-slate-400">
<span className="hidden sm:inline px-2">·</span> Off Campus <span className="px-2">·</span> 12:50 p.m.
                            </span>
</li>
<li className="relative text-xl font-light text-slate-500 leading-relaxed group/item transition-transform duration-300 hover:translate-x-1">
<span className="absolute -left-[2.35rem] top-3 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-emerald-100"></span>
<a className="font-light text-slate-700 hover:text-emerald-600 transition-colors underline decoration-slate-200 hover:decoration-emerald-300 underline-offset-4" href="#">Creative Writing Workshop</a>
<span className="block sm:inline text-lg font-light mt-1 sm:mt-0 text-slate-400">
<span className="hidden sm:inline px-2">·</span> Bob Thomas Student Union <span className="px-2">·</span> 5:30 p.m.
                            </span>
</li>
</ul>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/60 to-transparent"></div>

<div className="group/day relative opacity-70">
<h4 className="text-lg font-normal tracking-tight text-slate-800 mb-3 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-300 shadow-sm">
<i className="w-4 h-4" data-lucide="calendar"></i>
</span>
                        Wednesday, March 25
                    </h4>
<p className="text-lg font-light text-slate-400 italic pl-[3.25rem]">No scheduled events.</p>
</div>
</div>

<div className="mt-12 text-center pt-6 border-t border-slate-100">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] active:scale-95" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative text-base font-normal text-white tracking-wide">Visit my.ave for full schedule</span>
<i className="w-5 h-5 relative text-white ml-2.5 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="flex items-center justify-center gap-6 pt-10 pb-2">
<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-[6rem]"></div>
<h3 className="text-sm font-normal tracking-[0.2em] uppercase text-emerald-700/80 bg-emerald-50/50 px-4 py-1.5 rounded-full border border-emerald-100/50">Important Announcements</h3>
<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-[6rem]"></div>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] border border-white overflow-hidden group hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500">
<div className="h-60 sm:h-80 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10 mix-blend-multiply"></div>
<img alt="Library entrance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 sm:left-10 z-20">
<span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-sm font-normal text-white ring-1 ring-inset ring-white/30 mb-3 shadow-lg">Campus Update</span>
<h4 className="text-2xl sm:text-3xl font-normal tracking-tight text-white drop-shadow-md">Updated Visitor Hours</h4>
</div>
</div>
<div className="p-6 sm:p-10 space-y-6 bg-gradient-to-b from-white to-slate-50/30">
<div className="space-y-5 text-xl font-light leading-loose text-slate-500">
<p>
                        Beginning <span className="font-normal text-slate-800">Tuesday, April 7</span>, the Canizaro Library will implement updated check-in procedures for all visitors. Visitors will be asked to check in at the Security Desk during open hours.
                    </p>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner">
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="clock"></i>
<span className="text-lg font-light text-slate-600">Monday–Friday: <span className="font-normal text-slate-800">7:30 a.m. – 5:00 p.m.</span></span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="clock"></i>
<span className="text-lg font-light text-slate-600">Saturday–Sunday: <span className="font-normal text-slate-800">10:00 a.m. – 5:00 p.m.</span></span>
</li>
</ul>
</div>
<p>
<span className="font-normal text-slate-800">After 5:00 p.m., main doors will be locked.</span> Students, faculty, and staff may continue to access the library by using their key card. Questions? Contact <a className="text-emerald-600 hover:text-emerald-700 underline decoration-emerald-200 underline-offset-4 transition-colors" href="#">Security</a>.
                    </p>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] border border-white overflow-hidden group hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500">
<div className="h-60 sm:h-80 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10 mix-blend-multiply"></div>
<img alt="Healthy eating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 sm:left-10 z-20">
<span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-sm font-normal text-white ring-1 ring-inset ring-white/30 mb-3 shadow-lg">Wellness</span>
<h4 className="text-2xl sm:text-3xl font-normal tracking-tight text-white drop-shadow-md">Meet Our New Dietitian</h4>
</div>
</div>
<div className="p-6 sm:p-10 space-y-6 bg-gradient-to-b from-white to-slate-50/30">
<div className="space-y-5 text-xl font-light leading-loose text-slate-500">
<p>
                        Metz has hired a registered dietitian, Whitney, to support its Florida campuses—and she's visiting AMU this month! <span className="font-normal text-slate-800">Whitney will be tabling in the Student Union Building this Tuesday, March 17</span>, to meet students.
                    </p>
<p>
                        Whether you're looking for nutrition guidance, want to fuel your athletic performance, or learn more about dining options, Whitney is here to help. <span className="font-normal text-slate-800">One-on-one appointments and wellness programming</span> will be available soon.
                    </p>
</div>
</div>
</div>

<div className="rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-800 overflow-hidden flex flex-col mt-12">

<div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 flex flex-col sm:flex-row items-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22%20opacity=%220.04%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full"></div>
<div className="p-10 sm:p-14 flex-1 z-20 w-full relative">
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white font-['Playfair_Display',serif] italic leading-tight drop-shadow-lg">
                        Discover more events<br/>
<span className="text-emerald-300/90">&amp; stay connected</span>
</h3>
</div>
<div className="w-full sm:w-5/12 h-48 sm:h-full relative opacity-80 sm:opacity-100 z-10 group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-900/80 to-transparent hidden sm:block z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent sm:hidden z-10"></div>
<img alt="Students talking" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="bg-[#0A0F17] relative text-slate-400 p-10 sm:p-14 text-center flex flex-col items-center space-y-10 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-900/30 blur-[60px] pointer-events-none"></div>

<div className="flex items-center justify-center pt-2 z-10">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<img alt="my Ave Maria" className="h-20 w-auto object-contain" src="https://ik.imagekit.io/jnwpkntpm/my-ave-logo.png"/>
</div>
</div>

<div className="space-y-1.5 text-base font-thin tracking-wide z-10">
<p className="font-light text-slate-300">Ave Maria University</p>
<p className="text-slate-500">5050 Ave Maria Boulevard</p>
<p className="text-slate-500">Ave Maria, FL 34142</p>
<div className="mt-4 pt-4 flex items-center justify-center gap-4 text-slate-400">
<span>(239) 280-2500</span>
<div className="w-1 h-1 rounded-full bg-slate-700"></div>
<a className="hover:text-white transition-colors" href="mailto:avemaria.edu">avemaria.edu</a>
</div>
</div>

<div className="flex items-center justify-center gap-4 z-10">
<a aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="X" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>

<div className="text-xs font-light tracking-wider flex items-center justify-center gap-4 z-10 pt-4 border-t border-slate-800/50 w-full max-w-xs">
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Unsubscribe</a>
<div className="w-1 h-1 rounded-full bg-slate-700"></div>
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Manage Preferences</a>
</div>
</div>
</div>
</div>


    </>
  );
}
