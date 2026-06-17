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
colors: {
lime: {
400: '#a3e635',
500: '#84cc16',
600: '#65a30d',
},
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'hero-pattern': "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
'gym-texture': "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop')",
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="absolute w-full z-50 top-0 left-0 border-b border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="bg-lime-500 p-1.5 rounded-lg">
<i className="w-6 h-6 text-black stroke-[2]" data-lucide="dumbbell"></i>
</div>
<span className="text-2xl font-bold text-white tracking-tight">FitFlex</span>
</a>
<div className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-white/80">
<a className="text-white hover:text-lime-500 transition-colors" href="#">Home</a>
<a className="hover:text-lime-500 transition-colors" href="#about">About Us</a>
<a className="hover:text-lime-500 transition-colors" href="#classes">Classes</a>
<a className="hover:text-lime-500 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-lime-500 transition-colors" href="#schedule">Timetable</a>
</div>
<div className="hidden md:block">
<a className="border border-white/20 hover:bg-lime-500 hover:text-black hover:border-lime-500 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all" href="#">
                    Join Now
                </a>
</div>
<button className="lg:hidden text-white"><i className="w-8 h-8" data-lucide="menu"></i></button>
</div>
</nav>

<section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1920&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl space-y-6">
<h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter uppercase">
<span className="text-outline block mb-2">Achieve</span>
<span className="text-white">More</span> <br/>
<span className="text-lime-500">Than Just Fitness</span>
</h1>
<p className="text-lg text-neutral-300 max-w-xl border-l-4 border-lime-500 pl-6 py-2">
                    Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth.
                </p>
<div className="flex items-center gap-4 pt-8">
<button className="bg-lime-500 text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-lime-400 transition-all">
                        Start Now
                    </button>
<button className="border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Join Free Trial
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-black" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div>
<span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-2 block">About Us</span>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Welcome To Our <br/> Fitness Gym</h2>
</div>
<p className="text-neutral-600 leading-relaxed">
                    Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet color feugiat. 
                    <br/><br/>
                    Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.
                </p>
<div className="flex items-center gap-8 pt-4">
<div className="flex items-center gap-4">
<img alt="Trainer" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="font-bold text-lg leading-none">Denis Robinson</h4>
<span className="text-neutral-500 text-sm">Dur Dasch</span>
</div>
</div>
<button className="bg-lime-500 text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all">
                        Explore More
                    </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-[500px]">
<div className="h-full bg-neutral-100 rounded-none overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-full bg-neutral-100 rounded-none overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-2 h-[240px] bg-neutral-100 rounded-none overflow-hidden relative group -mt-20 z-10 mx-8 border-4 border-white shadow-xl">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-lime-500/90 rounded-full flex items-center justify-center">
<i className="w-6 h-6 fill-black text-black ml-1" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="classes">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Our Class</span>
<h2 className="text-4xl font-bold text-white tracking-tight">Fitness Classes For Every Goal</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="mb-4">
<i className="w-10 h-10 text-lime-500 mb-3" data-lucide="dumbbell"></i>
<h3 className="text-2xl font-bold text-white mb-2">Weight Lifting <br/> Classes</h3>
<p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
</div>

<div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
<span>Class Full</span>
<span>65%</span>
</div>
<div className="w-full h-1 bg-neutral-700">
<div className="h-full bg-lime-500 w-[65%]"></div>
</div>
</div>
</div>

<div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="mb-4">
<i className="w-10 h-10 text-lime-500 mb-3" data-lucide="heart-pulse"></i>
<h3 className="text-2xl font-bold text-white mb-2">Cardio Strength <br/> Classes</h3>
<p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
</div>
<div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
<span>Class Full</span>
<span>70%</span>
</div>
<div className="w-full h-1 bg-neutral-700">
<div className="h-full bg-lime-500 w-[70%]"></div>
</div>
</div>
</div>

<div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="mb-4">
<i className="w-10 h-10 text-lime-500 mb-3" data-lucide="zap"></i>
<h3 className="text-2xl font-bold text-white mb-2">Power Yoga <br/> Classes</h3>
<p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
</div>
<div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
<span>Class Full</span>
<span>90%</span>
</div>
<div className="w-full h-1 bg-neutral-700">
<div className="h-full bg-lime-500 w-[90%]"></div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-12">
<div className="w-8 h-1 bg-lime-500"></div>
<div className="w-4 h-1 bg-neutral-700"></div>
<div className="w-4 h-1 bg-neutral-700"></div>
</div>
</div>
</section>

<section className="py-24 bg-white text-black" id="schedule">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Our Schedule</span>
<h2 className="text-4xl font-bold text-black tracking-tight">Check Our Classes Schedule</h2>
</div>
<div className="overflow-x-auto">
<div className="min-w-[800px] grid grid-cols-7 gap-1 bg-black p-1 border border-black">

<div className="bg-black text-lime-500 p-4 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Monday</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Tuesday</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Wednesday</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Thursday</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Friday</div>
<div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Saturday</div>

<div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">8:00 AM</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Manny Sulliles</span>
</div>
<div className="bg-neutral-900 p-4"></div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Kate Johnson</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Boxing</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">John Hard</span>
</div>

<div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">10:00 AM</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Kata Jimon</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
</div>
<div className="bg-neutral-900 p-4"></div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Hanny Johnes</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
</div>

<div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">12:00 PM</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Boxing</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">John Hard</span>
</div>
<div className="bg-neutral-900 p-4"></div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Katie Johnson</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Mancy Jahiles</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
</div>
<div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
<span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
<span className="text-neutral-500 group-hover:text-black/70 text-xs">Katie Johnson</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Best Trainer</span>
<h2 className="text-4xl font-bold text-white tracking-tight">Our Professional Trainer</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="text-center group">
<div className="relative overflow-hidden mb-6 h-[350px]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&amp;q=80"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
<h3 className="text-xl font-bold text-white">Desert Antony</h3>
<p className="text-lime-500 text-sm">Fitness Trainer</p>
</div>

<div className="text-center group">
<div className="relative overflow-hidden mb-6 h-[350px]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
<h3 className="text-xl font-bold text-white">Kate Johnson</h3>
<p className="text-lime-500 text-sm">Fitness Trainer</p>
</div>

<div className="text-center group">
<div className="relative overflow-hidden mb-6 h-[350px]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&amp;q=80"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
<h3 className="text-xl font-bold text-white">John Hard</h3>
<p className="text-lime-500 text-sm">Main Trainer</p>
</div>

<div className="text-center group">
<div className="relative overflow-hidden mb-6 h-[350px]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
<a className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<h3 className="text-xl font-bold text-white">Zahra Sharif</h3>
<p className="text-lime-500 text-sm">Yoga Trainer</p>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-8 h-1 bg-lime-500"></div>
<div className="w-4 h-1 bg-neutral-700"></div>
<div className="w-4 h-1 bg-neutral-700"></div>
</div>
</div>
</section>

<section className="py-24 bg-white text-black" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Pricing Table</span>
<h2 className="text-4xl font-bold text-black tracking-tight">Choose Your Pricing Plan</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-neutral-900 h-[500px] relative group overflow-hidden border border-neutral-800">
<img className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
<div className="text-center w-full">
<h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Standard Plan</h3>
<div className="text-lime-500 text-5xl font-bold mb-1">$35<span className="text-base text-neutral-400 font-normal">/Month</span></div>
</div>
<ul className="space-y-4 text-neutral-400 text-sm text-center">
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Unlimited club access</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Group attendance</li>
<li className="flex items-center justify-center gap-2 text-neutral-600"><i className="w-4 h-4" data-lucide="check"></i> Gym Visits</li>
<li className="flex items-center justify-center gap-2 text-neutral-600"><i className="w-4 h-4" data-lucide="check"></i> Visits to the bath complex</li>
<li className="flex items-center justify-center gap-2 text-neutral-600"><i className="w-4 h-4" data-lucide="check"></i> Gym, fight club</li>
</ul>
<button className="w-full border border-neutral-700 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all">Join Now</button>
</div>
</div>

<div className="bg-lime-500 h-[500px] relative group overflow-hidden shadow-2xl scale-105 z-10">
<img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
<div className="text-center w-full">
<h3 className="text-black text-lg font-bold uppercase tracking-wider mb-6">Premium Plan</h3>
<div className="text-black text-5xl font-bold mb-1">$45<span className="text-base text-black/60 font-normal">/Month</span></div>
</div>
<ul className="space-y-4 text-black text-sm text-center font-medium">
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-black" data-lucide="check"></i> Unlimited club access</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-black" data-lucide="check"></i> Group attendance</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-black" data-lucide="check"></i> Gym Visits</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-black" data-lucide="check"></i> Visits to the bath complex</li>
<li className="flex items-center justify-center gap-2 text-black/40"><i className="w-4 h-4" data-lucide="check"></i> Gym, fight club</li>
</ul>
<button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Join Now</button>
</div>
</div>

<div className="bg-neutral-900 h-[500px] relative group overflow-hidden border border-neutral-800">
<img className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
<div className="text-center w-full">
<h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Platinum Plan</h3>
<div className="text-lime-500 text-5xl font-bold mb-1">$55<span className="text-base text-neutral-400 font-normal">/Month</span></div>
</div>
<ul className="space-y-4 text-neutral-400 text-sm text-center">
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Unlimited club access</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Group attendance</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Gym Visits</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Visits to the bath complex</li>
<li className="flex items-center justify-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check"></i> Gym, fight club</li>
</ul>
<button className="w-full border border-neutral-700 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all">Join Now</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pb-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="h-64 relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
<div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Couple Fitness Workout</div>
</div>
<div className="h-64 relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
<div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Cardio Workout</div>
</div>
<div className="h-64 relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
<div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Fitness Workout</div>
</div>
</div>
</section>

<section className="bg-black py-24 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Our Statics</span>
<h2 className="text-4xl font-bold text-white tracking-tight">We Are Best In <br/> Our Class</h2>
</div>
<p className="text-neutral-400">Suspendisse blandit smare sros veciula Vestibulum ante ipsum perenis in faucibus orci luctus et ultra pocusro cublia curan Sadulanetnporas lastus viverra efficitur.</p>
<div className="space-y-6 pt-4">
<div>
<div className="flex justify-between text-white font-bold mb-2">
<span>Client Satisfaction</span>
<span>90%</span>
</div>
<div className="w-full h-2 bg-neutral-800 rounded-full">
<div className="h-full bg-lime-500 rounded-full w-[90%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-white font-bold mb-2">
<span>Support Customer</span>
<span>80%</span>
</div>
<div className="w-full h-2 bg-neutral-800 rounded-full">
<div className="h-full bg-lime-500 rounded-full w-[80%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-lime-500 text-3xl font-bold mb-8">Get Appointment</div>
<form className="space-y-4">
<input className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" placeholder="Full Name" type="text"/>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" placeholder="Phone No." type="tel"/>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" placeholder="Message" rows="4"></textarea>
<button className="w-full bg-lime-500 text-black font-bold uppercase tracking-widest py-4 text-sm hover:bg-lime-400 transition-colors">Submit Now</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white text-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Testimonial</span>
<h2 className="text-4xl font-bold text-black tracking-tight">What Our Clients Says</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-black p-8 relative">
<div className="flex items-center gap-4 mb-6">
<img className="w-14 h-14 rounded-full border-2 border-lime-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h4 className="text-white font-bold">Scott Swanson</h4>
<span className="text-lime-500 text-xs">Our Client</span>
</div>
</div>
<p className="text-neutral-400 text-sm mb-6">"Phasellus accumsan pretium gsasew sdaerop sadof wrea fafe fast! thoucus. afaer asdr Aliquare porttitor, congue Ultricies stertentum tortor ipsum"</p>
<div className="flex text-yellow-500 text-xs gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="bg-black p-8 relative">
<div className="flex items-center gap-4 mb-6">
<img className="w-14 h-14 rounded-full border-2 border-lime-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-white font-bold">Scott Swanson</h4>
<span className="text-lime-500 text-xs">Our Client</span>
</div>
</div>
<p className="text-neutral-400 text-sm mb-6">"Phasellus accumsan pretium gsasew sdaerop sadof wrea fafe fast! thoucus. afaer asdr Aliquare porttitor, congue Ultricies stertentum tortor ipsum"</p>
<div className="flex text-yellow-500 text-xs gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="bg-black p-8 relative">
<div className="flex items-center gap-4 mb-6">
<img className="w-14 h-14 rounded-full border-2 border-lime-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-white font-bold">Scott Swanson</h4>
<span className="text-lime-500 text-xs">Our Client</span>
</div>
</div>
<p className="text-neutral-400 text-sm mb-6">"Phasellus accumsan pretium gsasew sdaerop sadof wrea fafe fast! thoucus. afaer asdr Aliquare porttitor, congue Ultricies stertentum tortor ipsum"</p>
<div className="flex text-yellow-500 text-xs gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-8 h-1 bg-lime-500"></div>
<div className="w-4 h-1 bg-black"></div>
<div className="w-4 h-1 bg-black"></div>
</div>
</div>
</section>

<section className="relative py-24 bg-black overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1920')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img className="rounded-lg shadow-2xl border-4 border-white/10 opacity-80 rotate-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="absolute -bottom-10 -right-10 w-2/3 rounded-lg shadow-2xl border-4 border-lime-500 -rotate-6" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&amp;q=80"/>
</div>
<div className="space-y-6">
<span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-2 block">Download App</span>
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">Get Advice On <br/> Gym &amp; Fitness App</h2>
<p className="text-neutral-400 max-w-lg">Mauris vitae quam tincidunt, sollicitudin sapien nas, tincidunt urna integer commodo, lorem vel fringilla tincidunt.</p>
<div className="flex gap-4 pt-4">
<button className="flex items-center gap-3 bg-black border border-white/20 px-6 py-3 rounded-lg hover:border-lime-500 transition-colors">
<i className="w-8 h-8 text-white" data-lucide="apple"></i>
<div className="text-left">
<div className="text-[10px] text-neutral-400 uppercase">Available on</div>
<div className="text-white font-bold leading-none">App Store</div>
</div>
</button>
<button className="flex items-center gap-3 bg-lime-500 px-6 py-3 rounded-lg hover:bg-lime-400 transition-colors">
<i className="w-8 h-8 text-black fill-current" data-lucide="play-circle"></i>
<div className="text-left text-black">
<div className="text-[10px] uppercase font-medium">Available on</div>
<div className="font-bold leading-none">Google Play</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Our News</span>
<h2 className="text-4xl font-bold text-black tracking-tight">Latest Blog Feed</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="relative overflow-hidden mb-6 h-64 bg-black">
<div className="absolute top-4 left-4 bg-lime-500 text-black px-4 py-1 text-xs font-bold uppercase z-10">7 March 2021</div>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h3 className="text-xl font-bold text-black leading-tight mb-3 group-hover:text-lime-600 transition-colors">Going to the gym for the first time</h3>
<p className="text-neutral-500 text-sm mb-4 line-clamp-3">Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.</p>
<a className="text-xs font-bold uppercase tracking-widest text-black hover:text-lime-600 transition-colors" href="#">Read More</a>
</div>

<div className="group">
<div className="relative overflow-hidden mb-6 h-64 bg-black">
<div className="absolute top-4 left-4 bg-lime-500 text-black px-4 py-1 text-xs font-bold uppercase z-10">7 March 2021</div>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-xl font-bold text-black leading-tight mb-3 group-hover:text-lime-600 transition-colors">Going to the gym for the first time</h3>
<p className="text-neutral-500 text-sm mb-4 line-clamp-3">Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.</p>
<a className="text-xs font-bold uppercase tracking-widest text-black hover:text-lime-600 transition-colors" href="#">Read More</a>
</div>

<div className="group">
<div className="relative overflow-hidden mb-6 h-64 bg-black">
<div className="absolute top-4 left-4 bg-lime-500 text-black px-4 py-1 text-xs font-bold uppercase z-10">7 March 2021</div>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold text-black leading-tight mb-3 group-hover:text-lime-600 transition-colors">Going to the gym for the first time</h3>
<p className="text-neutral-500 text-sm mb-4 line-clamp-3">Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.</p>
<a className="text-xs font-bold uppercase tracking-widest text-black hover:text-lime-600 transition-colors" href="#">Read More</a>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-neutral-900 text-neutral-400">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-lime-500 p-1.5 rounded-lg">
<i className="w-5 h-5 text-black" data-lucide="dumbbell"></i>
</div>
<span className="text-2xl font-bold text-white tracking-tight">FitFlex</span>
</a>
<p className="text-sm mb-6 leading-relaxed">Etiam suscipit fringilla scelerisque malesuada urna nec edis.</p>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-lime-500"><i className="w-4 h-4" data-lucide="clock"></i></div>
<div>
<div className="text-white font-medium">Monday - Friday</div>
<div className="text-xs">7:00am - 10:00pm</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-lime-500"><i className="w-4 h-4" data-lucide="clock"></i></div>
<div>
<div className="text-white font-medium">Saturday - Sunday</div>
<div className="text-xs">7:00am - 2:00pm</div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6">Our Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-lime-500 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Classes</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-lime-500 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>1247/Plot No. 39, 15th Phase, Colony Kularpaly, Hyderabad</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-500 shrink-0" data-lucide="phone"></i>
<span>+1800-121-3637 <br/> +91-55234-10765</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-500 shrink-0" data-lucide="mail"></i>
<span>info@gmail.com <br/> services@gmail.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Our Newsletter</h4>
<form className="flex mb-6">
<input className="bg-white px-4 py-2 w-full text-black text-sm focus:outline-none rounded-l" placeholder="Email Address" type="email"/>
<button className="bg-lime-500 px-3 py-2 rounded-r hover:bg-lime-400 transition-colors"><i className="w-4 h-4 text-black" data-lucide="send"></i></button>
</form>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>Copyright © 2022 <span className="text-lime-500">FitFlex Themes</span>. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms &amp; Condition</a>
</div>
</div>
</footer>


    </>
  );
}
