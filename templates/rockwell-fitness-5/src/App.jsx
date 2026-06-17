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
      

<div className="bg-slate-950 text-white py-2 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
<div className="flex items-center gap-6 mb-2 md:mb-0">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#10aeec]" data-lucide="phone"></i> (410) 432-6140</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#10aeec]" data-lucide="mail"></i> info@rwfitness.com</span>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> M-F 5am-8pm | Sat 7am-7pm | Sun 8am-6pm</span>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-white transition-colors" href="#">Gym Memberships</a>
<a className="hover:text-white transition-colors" href="#">Classes</a>
<a className="hover:text-white transition-colors" href="#">Picture Gallery</a>
<i className="w-4 h-4" data-lucide="search"></i>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
<div className="text-2xl font-heading font-semibold tracking-tighter uppercase">
                Rockwell <span className="text-[#10aeec]">Fitness</span>
</div>
<ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 tracking-wide">
<li><a className="text-[#10aeec]" href="#">HOME</a></li>
<li><a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">GYM MEMBERSHIPS <i className="w-3 h-3" data-lucide="chevron-down"></i></a></li>
<li><a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">CLASSES <i className="w-3 h-3" data-lucide="chevron-down"></i></a></li>
<li><a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">PERSONAL TRAINERS <i className="w-3 h-3" data-lucide="chevron-down"></i></a></li>
<li><a className="hover:text-[#10aeec] transition-colors" href="#">RED LIGHT THERAPY</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="bg-[#ccff00] text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#bbee00] transition-colors shadow-sm">FREE CLASS</button>
<button className="bg-[#10aeec] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0e9bd1] transition-colors shadow-sm shadow-[#10aeec]/30">FREE TRIAL</button>
</div>
</div>
</nav>

<header className="relative h-[85vh] hero-bg flex items-center justify-center text-center px-6">
<div className="relative z-10 max-w-4xl mx-auto">
<p className="text-[#ccff00] font-medium tracking-widest text-sm mb-4 uppercase">About Our Gym</p>
<h1 className="text-6xl md:text-8xl font-heading font-semibold text-white tracking-tight leading-[0.95] mb-8">
                GET IN THE BEST <br/> SHAPE EVER
            </h1>
<div className="flex items-center justify-center gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="bg-[#10aeec] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#0e9bd1] hover:scale-105 transition-all shadow-lg shadow-[#10aeec]/40 uppercase tracking-wide">
                    Sign Up Online
                </button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>

<section className="flex flex-col md:flex-row min-h-[600px]">
<div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-slate-50">
<h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-900 mb-8 tracking-tight leading-tight">
                YOU DON'T NEED AN EXPENSIVE GYM. <br/>
                YOU NEED A PLACE THAT MAKES YOU WANT TO WORK OUT.
            </h2>
<p className="text-xl text-slate-500 mb-2">Introducing BYOM:</p>
<p className="text-xl text-slate-500 mb-10">Build Your Own Membership</p>
<div>
<button className="bg-[#10aeec]/10 text-[#10aeec] border border-[#10aeec] px-8 py-3 rounded-full text-base font-semibold hover:bg-[#10aeec] hover:text-white transition-all">
                    Learn More
                </button>
</div>
</div>
<div className="w-full md:w-1/2">
<img alt="Group workout" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

<div>
<h2 className="text-4xl font-heading font-semibold text-slate-900 mb-6 tracking-tight">WHY CHOOSE US?</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    We provide all the bells and whistles that the big gyms provide, but in the comfort of a friendly atmosphere where every member feels at home and at a fraction of the cost.
                </p>
<ul className="space-y-3 text-lg text-slate-600">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Friendly atmosphere</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> <span className="text-[#10aeec]">Certified Personal Trainers</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> <span className="text-[#10aeec]">Affordable memberships</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> <span className="text-[#10aeec]">Infrared Sauna</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Red Light Therapy</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Physical therapy on-site</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Smoothie Bar</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> <span className="text-[#10aeec]">Variety of classes</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Yoga</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#10aeec]" data-lucide="check"></i> Spinning</li>
</ul>
<button className="mt-10 bg-[#10aeec] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#0e9bd1] transition-colors shadow-md shadow-[#10aeec]/20 uppercase tracking-wide">
                    GET STARTED
                </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div className="p-8 rounded-3xl bg-slate-50 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
<i className="w-10 h-10 text-[#10aeec] mb-6 group-hover:scale-110 transition-transform" data-lucide="users"></i>
<h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Classes For Everyone</h3>
<p className="text-slate-500">From Yoga and Spinning to HIIT and Powerpump, we offer something for everyone.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
<i className="w-10 h-10 text-[#10aeec] mb-6 group-hover:scale-110 transition-transform" data-lucide="dumbbell"></i>
<h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Certified Trainers</h3>
<p className="text-slate-500">Our CPT's offer comprehensive training. Functional Fitness Training, Weight Loss, Nutrition and more.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 hover:shadow-xl transition-all duration-300 border border-slate-100 group sm:col-span-2 sm:w-2/3 mx-auto">
<i className="w-10 h-10 text-[#10aeec] mb-6 group-hover:scale-110 transition-transform" data-lucide="heart"></i>
<h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Amenities</h3>
<p className="text-slate-500">Featuring a smoothie bar, spray tanning services, infrared sauna, locker rooms and more!</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-4xl font-heading font-semibold text-slate-900 mb-2 tracking-tight">CLASSES AND TRAINING</h2>
<h3 className="text-4xl font-heading font-semibold text-slate-900 mb-8 tracking-tight">EXERCISE</h3>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-16">
                Our classes are cutting-edge workouts designed through proven exercise science. The classes feature high-intensity workouts, fun music, and energetic coaches.
            </p>
<div className="relative flex items-center">
<button className="absolute -left-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:text-[#10aeec] transition-colors border border-slate-100 hidden md:flex">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
<div className="h-64 overflow-hidden">
<img alt="Spinning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 text-left">
<h4 className="text-xl font-heading font-semibold text-slate-900">Spinning</h4>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
<div className="h-64 overflow-hidden">
<img alt="Free weights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 text-left">
<h4 className="text-xl font-heading font-semibold text-slate-900">Free weights</h4>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
<div className="h-64 overflow-hidden">
<img alt="Personal training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 text-left">
<h4 className="text-xl font-heading font-semibold text-slate-900">Personal training</h4>
</div>
</div>
</div>
<button className="absolute -right-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:text-[#10aeec] transition-colors border border-slate-100 hidden md:flex">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-heading font-semibold text-center text-slate-900 mb-12 tracking-tight">TAKE A VIRTUAL TOUR OF OUR GYM</h2>
<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group cursor-pointer">

<div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-8">
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<span className="font-medium">Rockwell Fitness Virtual Gym Tour</span>
</div>
<div className="flex gap-4">
<i className="w-5 h-5" data-lucide="share-2"></i>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white fill-current ml-1" data-lucide="play"></i>
</div>
</div>
<div className="text-white text-sm bg-black/60 inline-block self-start px-2 py-1 rounded">Watch on YouTube</div>
</div>
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-heading font-semibold text-slate-900 mb-8 tracking-tight">
                GIVE YOURSELF THE GIFT OF <br/> HEALTH AND WELLNESS.
            </h2>
<button className="bg-[#10aeec] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#0e9bd1] hover:shadow-lg transition-all uppercase tracking-wide mb-6">
                START TODAY
            </button>
<p className="text-sm text-slate-400">
                It takes 30 days to make a habit.<br/>
                What are you waiting for?
            </p>
</div>
</section>

<section className="relative py-24 px-6 video-bg">
<div className="max-w-5xl mx-auto relative z-10 text-center">
<h2 className="text-5xl font-heading font-semibold text-white mb-2 tracking-tight">CLASS SCHEDULE.</h2>
<h3 className="text-5xl font-heading font-semibold text-white mb-8 tracking-tight">TRAIN WITH US.</h3>
<p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Here's a sneak peek of the classes we offer.<br/>
                This is an example of our recent scheduled classes.<br/>
                Please click the button below to view most up to date schedule.
            </p>
<button className="bg-[#10aeec] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#0e9bd1] hover:scale-105 transition-all uppercase tracking-wide mb-16 shadow-[0_0_20px_rgba(16,174,236,0.5)]">
                VIEW FULL SCHEDULE
            </button>

<div className="bg-white rounded-t-3xl overflow-hidden shadow-2xl">

<div className="flex overflow-x-auto border-b border-slate-100">
<button className="flex-1 py-5 px-6 bg-[#ccff00] text-slate-900 font-bold text-sm tracking-wide uppercase">MONDAY</button>
<button className="flex-1 py-5 px-6 bg-white text-slate-500 font-semibold text-sm tracking-wide uppercase hover:bg-slate-50">TUESDAY</button>
<button className="flex-1 py-5 px-6 bg-white text-slate-500 font-semibold text-sm tracking-wide uppercase hover:bg-slate-50">WEDNESDAY</button>
<button className="flex-1 py-5 px-6 bg-white text-slate-500 font-semibold text-sm tracking-wide uppercase hover:bg-slate-50">THURSDAY</button>
<button className="flex-1 py-5 px-6 bg-white text-slate-500 font-semibold text-sm tracking-wide uppercase hover:bg-slate-50">FRIDAY</button>
</div>

<div className="text-left divide-y divide-slate-100">
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-8 w-full">
<div className="flex items-center gap-2 text-slate-500 w-32 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i> 9:00 - 10:30
                            </div>
<div className="font-heading font-semibold text-slate-900 text-lg group-hover:text-[#10aeec] transition-colors">Boxing Fitness Class</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-8 w-full">
<div className="flex items-center gap-2 text-slate-500 w-32 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i> 9:15 - 10:30
                            </div>
<div className="font-heading font-semibold text-slate-900 text-lg group-hover:text-[#10aeec] transition-colors">Spin and More</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-8 w-full">
<div className="flex items-center gap-2 text-slate-500 w-32 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i> 9:30 - 10:30
                            </div>
<div className="font-heading font-semibold text-slate-900 text-lg group-hover:text-[#10aeec] transition-colors">Muscle Pump-Lite</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-8 w-full">
<div className="flex items-center gap-2 text-slate-500 w-32 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i> 6:00 - 7:30
                            </div>
<div className="font-heading font-semibold text-slate-900 text-lg group-hover:text-[#10aeec] transition-colors">Introduction to Brazilian Jiu-Jitsu</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-8 w-full">
<div className="flex items-center gap-2 text-slate-500 w-32 font-medium">
<i className="w-4 h-4" data-lucide="clock"></i> 7:45 - 9:30
                            </div>
<div className="font-heading font-semibold text-slate-900 text-lg group-hover:text-[#10aeec] transition-colors">Brazilian Jiu-Jitsu with Carlos and Aaror</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</section>

<section className="motivational-bg py-32 text-center px-6 relative">
<div className="relative z-10">
<h2 className="text-6xl font-heading font-semibold text-white tracking-tight leading-tight mb-2">
                YOU CAN DO IT.
            </h2>
<h2 className="text-6xl font-heading font-semibold text-white tracking-tight leading-tight mb-6">
                START TODAY.
            </h2>
<p className="text-white/90 text-lg font-medium">Push your personal limits and build new skills.</p>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-center">
<h2 className="text-4xl font-heading font-semibold text-white mb-2 tracking-tight">TAKE A LOOK INSIDE.</h2>
<h3 className="text-4xl font-heading font-semibold text-white mb-16 tracking-tight">COME JOIN US!</h3>
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<button className="bg-[#10aeec] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#0e9bd1] hover:scale-105 transition-all uppercase tracking-wide mb-6">
            LEARN MORE
        </button>
<p className="text-slate-400 text-sm">Push your personal limits and build new skills.</p>
</section>

<div className="bg-slate-50">

<div className="h-[600px] w-full boxing-bg"></div>

<div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-64 mb-8">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-heading font-semibold text-slate-900 mb-4 uppercase tracking-wide">Location and Contact Info</h3>
<p className="text-lg text-slate-600 mb-2">Phone: 410-432-6140</p>
<a className="text-[#10aeec] text-lg hover:underline decoration-2 underline-offset-4" href="#">Click For Directions</a>
</div>

<div>
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Hours of Operation</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 5am - 8pm
                        </div>
<div className="font-semibold text-slate-900">Monday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 5am - 8pm
                        </div>
<div className="font-semibold text-slate-900">Tuesday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 5am - 8pm
                        </div>
<div className="font-semibold text-slate-900">Wednesday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 5am - 8pm
                        </div>
<div className="font-semibold text-slate-900">Thursday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 5am - 8pm
                        </div>
<div className="font-semibold text-slate-900">Friday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 7am - 7pm
                        </div>
<div className="font-semibold text-slate-900">Saturday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-4 text-slate-600">
<i className="w-4 h-4 text-[#10aeec]" data-lucide="clock"></i> 8am - 6pm
                        </div>
<div className="font-semibold text-slate-900">Sunday</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
