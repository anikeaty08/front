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
      

<header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100">
<div className="max-w-[1440px] mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tight uppercase" href="#">Sean Butler Fitness</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="text-neutral-900" href="#">Home</a>
<a className="hover:text-neutral-900 transition-colors" href="#">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Contact</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Blog</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors flex items-center justify-center">
<iconify-icon className="text-neutral-600 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-neutral-900 text-white pl-5 pr-2 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
                    Log In
                    <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</header>
<main className="pt-32 pb-20">

<section className="max-w-[1440px] mx-auto px-6 mb-24">

<div className="grid grid-cols-12 gap-8 mb-12">

<div className="col-span-12 lg:col-span-10">
<div className="flex flex-col gap-4">
<div className="flex flex-wrap items-center gap-4">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">Today's Workout</h1>
<div className="h-16 w-32 md:h-20 md:w-48 rounded-full overflow-hidden bg-neutral-100">
<img alt="Gym" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<div className="flex flex-wrap items-center gap-4">
<div className="h-16 w-32 md:h-20 md:w-48 rounded-full overflow-hidden bg-neutral-100">
<img alt="Gym" className="opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7eebcb9f-781c-44bd-8914-5caaf550da10_800w.png"/>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">Personal Training</h1>
</div>
<div className="flex flex-wrap items-center gap-4">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none text-neutral-400">Your Fitness Is Ready!</h1>
</div>
<p className="text-lg text-neutral-500 max-w-2xl mt-4 leading-relaxed">
                            Qualified personal training focused on strength, confidence, and sustainable results through personalised coaching.
                        </p>
</div>
</div>

<div className="hidden lg:flex col-span-2 flex-col items-end justify-center text-sm font-medium text-neutral-400 gap-3">
<div className="flex justify-between w-full max-w-[180px] text-neutral-900"><span>Nutrition Coaching</span> <span>01</span></div>
<div className="flex justify-between w-full max-w-[180px]"><span>1:1 Coaching</span> <span>02</span></div>
<div className="flex justify-between w-full max-w-[180px]"><span>Online Coaching</span> <span>03</span></div>
<div className="flex justify-between w-full max-w-[180px]"><span>Hybrid Coaching</span> <span>04</span></div>
<div className="flex justify-between w-full max-w-[180px]"><span>Strength Training</span> <span>05</span></div>
<div className="flex justify-between w-full max-w-[180px]"><span>Lifestyle Fitness</span> <span>06</span></div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 items-end">

<div className="col-span-12 lg:col-span-2 flex flex-col gap-10">
<div>
<h3 className="font-semibold text-lg leading-tight mb-4">Monitor Your<br/>Performance</h3>
<div className="border border-neutral-200 rounded-3xl p-5 bg-white shadow-sm relative overflow-hidden">
<ul className="space-y-3 text-sm text-neutral-400">
<li className="text-neutral-900 font-medium">Exercises</li>
<li>Nutrition</li>
<li>Daily Activity</li>
<li>Hydration</li>
<li>Recovery</li>
<li>Sleep</li>
</ul>
<div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-500 leading-tight">
                                Track your progress, stay consistent, and achieve real results.
                            </div>
</div>
</div>
<div className="space-y-6">
<div>
<span className="inline-block bg-neutral-900 text-white text-xs px-2 py-0.5 rounded-full mb-1">01</span>
<div className="text-4xl font-medium tracking-tight">100+</div>
<div className="text-sm font-medium text-neutral-500 mt-1">Client Reviews</div>
</div>
<div>
<span className="inline-block bg-neutral-900 text-white text-xs px-2 py-0.5 rounded-full mb-1">02</span>
<div className="text-4xl font-medium tracking-tight">8+</div>
<div className="text-sm font-medium text-neutral-500 mt-1">Years Experience</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-10 relative">
<div className="w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative bg-neutral-100">
<img alt="Man working out" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0566cf96-424b-41d9-882e-d247c3ffd02d_3840w.png"/>

<div className="absolute bottom-8 right-8">
<button className="group flex items-center gap-3 bg-neutral-900 text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 transition-all">
                                Start Now
                                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors flex items-center justify-center">
<iconify-icon className="text-white text-base" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
<div>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2">Meet Your</h2>
<div className="flex items-center gap-4">
<iconify-icon className="text-5xl text-neutral-900 rotate-12" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none">Trainer</h2>
</div>
</div>
<div className="pt-4">
<p className="text-lg text-neutral-600 leading-relaxed max-w-lg ml-auto text-right">
                        Welcome to my fitness coaching community. I’m Sean Butler, a qualified personal trainer dedicated to helping individuals improve their health, fitness, and confidence through structured training and personalised nutrition. My coaching is built around consistency, accountability, and results — whether you prefer 1:1, online, or hybrid coaching.
                    </p>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center">

<div className="bg-neutral-950 text-white p-8 rounded-[2rem] w-full lg:w-[400px] shrink-0 z-10 relative shadow-2xl">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full border-2 border-white/20 p-1 mb-4">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-xl font-medium mb-1">Sean Butler</h3>
<p className="text-neutral-400 text-sm mb-8">Qualified Personal Trainer</p>
<div className="flex items-center gap-4 mt-auto">
<button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex-1 w-full lg:-ml-6 bg-neutral-900 text-white py-12 px-12 lg:pl-16 rounded-[2rem] lg:rounded-l-none lg:rounded-r-[2rem] flex flex-col md:flex-row justify-between items-center gap-8 mt-[-20px] lg:mt-0 pt-16 lg:pt-12">
<div className="text-center md:text-left">
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Experience</p>
<p className="text-xl font-medium">8+ Years</p>
</div>
<div className="text-center md:text-left">
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Location</p>
<p className="text-xl font-medium">USA, California</p>
</div>
<div className="text-center md:text-left">
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Email Address</p>
<p className="text-xl font-medium">seanyb.pt@gmail.com</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none">Coaching</h2>
<div className="flex items-center gap-4 mt-2">
<p className="text-sm md:text-base text-neutral-500 max-w-sm">
                            Whether your goal is fat loss, muscle building, or overall fitness, I offer coaching solutions that fit your lifestyle.
                        </p>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none whitespace-nowrap">Services</h2>
</div>
</div>
<div className="flex flex-col items-end gap-4">
<p className="text-sm text-neutral-500 text-right max-w-xs">
                        Explore personalised coaching options designed to help you reach your fitness goals efficiently and safely.
                    </p>
<button className="group flex items-center gap-3 bg-neutral-900 text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 transition-all">
                        See All
                        <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-6 flex flex-col">
<div className="relative group rounded-[2rem] overflow-hidden h-[400px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<span className="text-lg font-semibold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">Nutrition Coaching</span>
<button className="bg-black text-white p-3 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col md:translate-y-12">
<div className="relative group rounded-[2rem] overflow-hidden h-[300px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<span className="text-lg font-semibold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">1:1 Coaching</span>
<button className="bg-black text-white p-3 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
<div className="relative group rounded-[2rem] overflow-hidden h-[450px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<span className="text-lg font-semibold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">Online &amp; Hybrid</span>
<button className="bg-black text-white p-3 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col">
<div className="relative group rounded-[2rem] overflow-hidden h-[500px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<span className="text-lg font-semibold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">Qualified Trainer</span>
<button className="bg-black text-white p-3 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
<div>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2">Online</h2>
<div className="flex items-center gap-6">
<iconify-icon className="text-5xl text-neutral-900" icon="solar:earth-linear"></iconify-icon>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none">Coaching</h2>
</div>
</div>
<div className="max-w-md text-sm md:text-base text-neutral-500 text-right lg:text-right">
<p className="">Train from anywhere with professional guidance, personalised plans, and ongoing support — ideal for busy schedules and international clients.</p>
</div>
</div>
<div className="text-center mb-16">
<div className="inline-flex items-center border border-neutral-300 rounded-full pl-8 pr-2 py-2 bg-white max-w-2xl w-full justify-between relative shadow-sm">
<div className="text-lg font-medium text-neutral-900">
                        Get Started With Online Coaching Today
                    </div>
<div>
<button className="h-12 flex items-center gap-2 bg-neutral-900 text-white pl-6 pr-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
                            View Plans
                            <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="w-full h-[500px] rounded-[2rem] overflow-hidden relative group">
<img alt="Online Coaching" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-white text-3xl font-semibold mb-2">Remote Freedom</h3>
<p className="text-white/80 max-w-md">Access your workout plans, track nutrition, and check in with me directly from your phone, wherever you are in the world.</p>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="grid grid-cols-12 gap-8 mb-16 items-center">
<div className="col-span-12 md:col-span-6">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2">We Are</h2>
<div className="flex flex-col md:flex-row gap-4 md:items-end">
<p className="text-sm text-neutral-500 max-w-xs md:mb-4">Whether you’re a beginner starting your fitness journey or someone looking to level up performance.</p>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-right md:text-left w-full">Focused On</h2>
</div>
</div>
<div className="col-span-12 md:col-span-6 flex justify-end">
<p className="text-sm text-neutral-500 max-w-sm text-right">
                        I’m committed to helping you achieve your goals with proven training methods and sustainable nutrition strategies.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-neutral-200 rounded-[2rem] p-6 h-[240px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-neutral-900" icon="solar:dumbbell-linear"></iconify-icon>
<div className="bg-black text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold mb-2">Muscle Building</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Build lean muscle with structured strength programs.</p>
</div>
</div>

<div className="border border-neutral-200 rounded-[2rem] p-6 h-[240px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-neutral-900" icon="solar:heart-pulse-linear"></iconify-icon>
<div className="bg-black text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold mb-2">Cardio Strength</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Improve endurance, stamina, and overall conditioning.</p>
</div>
</div>

<div className="border border-neutral-200 rounded-[2rem] p-6 h-[240px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-neutral-900" icon="solar:body-linear"></iconify-icon>
<div className="bg-black text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-2">Mobility &amp; Flex</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Move better, reduce injury risk, and feel stronger daily.</p>
</div>
</div>

<div className="border border-neutral-200 rounded-[2rem] p-6 h-[240px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-neutral-900" icon="solar:check-circle-linear"></iconify-icon>
<div className="bg-black text-white p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold mb-2">Beginner Friendly</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Perfect for those new to fitness or returning after a break.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 text-white pt-24 pb-8">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between mb-24">
<div className="mb-12 lg:mb-0">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight mb-4">Your Body Is</h2>
<div className="flex items-center gap-6">
<iconify-icon className="text-5xl text-white" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight">Your Temple</h2>
</div>
<p className="text-neutral-400 text-sm mt-8 max-w-lg leading-relaxed">
                        Take control of your fitness journey with expert coaching and a plan built around you.
                    </p>
<button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">
                        Start Your Coaching Journey
                    </button>
</div>
<div className="flex gap-16 lg:gap-24 text-sm text-neutral-400">
<ul className="space-y-6">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
<div className="flex flex-col justify-between">
<ul className="space-y-6">
<li><a className="hover:text-white transition-colors" href="#">Customer Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Training Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">My Account</a></li>
</ul>
<button className="bg-white text-black p-4 rounded-full mt-8 hover:bg-neutral-200 transition-colors self-end lg:self-start flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
<p>© 2026 Sean Butler Fitness. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
