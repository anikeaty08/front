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
      

<nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
<div className="flex items-center">
<a className="text-xl font-medium tracking-tight" href="#">Horizon Courts</a>
</div>
<div className="hidden md:flex items-center gap-1 bg-white">
<a className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors" href="#">About Us</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Coaches</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Events</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Contacts</a>
</div>
<div>
<a className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                Book now
                <i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<div className="max-w-[98%] mx-auto px-2">
<div className="relative w-full h-[600px] md:h-[750px] rounded-[2rem] overflow-hidden">

<img alt="Tennis Players" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-transparent to-black/40"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-sm">
                    Unleash Your Inner Champion Today.<br/>
                    All In One Place.
                </h1>
<p className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-sm font-light">
                    Join the ultimate tennis experience — where passion meets performance, and every swing brings you closer to victory.
                </p>
<a className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                    Start your own journey
                </a>
</div>

<div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 pr-6 rounded-full border border-white/10">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-xs font-medium leading-tight">Train with real professionals</span>
<span className="text-white/70 text-xs leading-tight">Get the real results.</span>
</div>
</div>

<div className="absolute bottom-8 right-8 hidden md:flex items-center gap-6 text-white text-xs font-medium">
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">Instagram <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a>
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">Facebook <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a>
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">Tik Tok <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a>
</div>
</div>
</div>

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-3">
<span className="inline-block border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-slate-600">
                    About Horizon
                </span>
</div>
<div className="lg:col-span-9">
<h2 className="text-2xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900">
                    At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.
                </h2>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0f172a] rounded-[2rem] p-8 h-[480px] flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm mb-6">
<i className="text-white w-6 h-6" data-lucide="layout-grid"></i>
</div>
<h3 className="text-white text-xl md:text-2xl font-normal leading-snug tracking-tight mb-4">
                        Professional hard courts with tournament-grade lighting &amp; climate control — play in <span className="text-slate-400">perfect conditions,</span> in any season.
                    </h3>
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-12 h-7 bg-blue-500 rounded-full p-1 cursor-pointer flex items-center transition-colors">
<div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-5 transition-transform"></div>
</div>
<span className="text-slate-400 text-sm font-medium">Game Mode</span>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
</div>

<div className="relative rounded-[2rem] overflow-hidden h-[480px] group">
<img alt="Lessons" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="backdrop-blur-md bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium">
                        Private &amp; Group Lessons
                    </div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] p-8 h-[480px] flex flex-col justify-between border border-slate-100">
<div>
<h3 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-2">100+</h3>
<p className="text-slate-900 font-medium mb-4">Pro Coaches</p>
<p className="text-slate-500 text-sm leading-relaxed mb-10">
                        Certified professionals ready to boost your game from first serve to tournament level.
                    </p>
</div>
<div className="space-y-5">

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24">Beginner</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">55</span>
</div>

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24">Intermediate</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">40</span>
</div>

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24">Advanced</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">35</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-12 text-center">
<h3 className="text-lg md:text-xl font-normal text-slate-900 mb-16 tracking-tight">A few more facts about us in numbers</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">12 000+</span>
<span className="text-sm text-slate-500">Hours of play annually</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">89%</span>
<span className="text-sm text-slate-500">Player Retention Rate</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">1,200+</span>
<span className="text-sm text-slate-500">Active Members</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">125+</span>
<span className="text-sm text-slate-500">Annual Tournaments</span>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col justify-between">
<div>
<span className="inline-block border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-slate-600 mb-8">
                        Services
                    </span>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-900 leading-snug mb-8">
                        Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.
                    </h2>
</div>
<div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                        Explore More
                        <i className="w-4 h-4 text-slate-400" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative h-[420px] rounded-[2rem] overflow-hidden group">
<img alt="Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute top-6 left-6">
<span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium">Training Programs</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white text-lg font-medium leading-tight mb-2">Programs designed for all ages and abilities.</p>
</div>
<div className="absolute bottom-6 right-6">
<div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="relative h-[340px] rounded-[2rem] overflow-hidden group">
<img alt="Courts" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute top-6 left-6">
<span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium">Court Access</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white font-medium mb-2">Hourly Court Rental</p>
</div>
</div>
<div className="flex flex-col">
<p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                Step into a space built for players — to grow, compete, and thrive.
                            </p>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
