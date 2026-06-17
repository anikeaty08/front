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
primary: '#10aeec',
secondary: '#ccff00',
dark: '#1a1a1a',
light: '#f4f4f5'
},
letterSpacing: {
tightest: '-0.05em',
}
}
}
}



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
      

<div className="bg-white border-b border-gray-100 hidden lg:block">
<div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs text-gray-500 font-medium">
<div className="flex items-center space-x-6">
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="phone"></i> (410) 432-6140</span>
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="mail"></i> info@rwfitness.com</span>
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="clock"></i> M-F 5am-8pm | Sat 7am-7pm | Sun 8am-6pm</span>
</div>
<div className="flex items-center space-x-4">
<a className="hover:text-primary transition-colors" href="#">Gym Memberships</a>
<a className="hover:text-primary transition-colors" href="#">Classes</a>
<a className="hover:text-primary transition-colors" href="#">Picture Gallery</a>
<i className="w-3 h-3 cursor-pointer hover:text-primary" data-lucide="search"></i>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="text-2xl font-bold tracking-tighter text-gray-900 font-sans italic" href="#">
                RW<span className="text-primary">FITNESS</span>
</a>

<div className="hidden xl:flex items-center space-x-8 text-sm font-medium tracking-tight text-gray-700">
<a className="hover:text-primary transition-colors" href="#">HOME</a>
<div className="group relative cursor-pointer">
<span className="flex items-center gap-1 hover:text-primary transition-colors">
                        GYM MEMBERSHIPS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</span>
</div>
<div className="group relative cursor-pointer">
<span className="flex items-center gap-1 hover:text-primary transition-colors">
                        CLASSES <i className="w-3 h-3" data-lucide="chevron-down"></i>
</span>
</div>
<div className="group relative cursor-pointer">
<span className="flex items-center gap-1 hover:text-primary transition-colors">
                        PERSONAL TRAINERS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</span>
</div>
<a className="hover:text-primary transition-colors" href="#">RED LIGHT THERAPY</a>
<a className="hover:text-primary transition-colors" href="#">ABOUT OUR GYM</a>
</div>

<div className="hidden md:flex items-center space-x-3">
<a className="px-5 py-2.5 bg-secondary text-gray-900 text-xs font-bold tracking-wide rounded-lg hover:brightness-95 transition-all shadow-sm" href="#">
                    FREE CLASS
                </a>
<a className="px-5 py-2.5 bg-primary text-white text-xs font-bold tracking-wide rounded-lg hover:bg-sky-600 transition-all shadow-sm" href="#">
                    FREE TRIAL
                </a>
</div>

<button className="xl:hidden p-2 text-gray-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Couple High Five" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>
</div>

<div className="relative z-10 container max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
<div className="max-w-3xl space-y-6">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-secondary/20 shadow-lg animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
<span className="text-sm font-bold text-gray-900 tracking-wide uppercase">Starting at $39 per month</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95] font-weight-heading drop-shadow-sm">
                    Build Your Own <br/>
<span className="text-primary italic">Membership</span>
</h1>

<p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide border-l-4 border-primary pl-4">
                    Your Gym • Your Plan • Your Way
                </p>

<div className="pt-8">
<a className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-sky-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30" href="#build">
                        Start Building
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden" id="build">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 z-0 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
<div className="space-y-4">
<h2 className="text-4xl md:text-5xl text-gray-900 tracking-tighter font-weight-heading">
                    BYOM - BUILD YOUR OWN <span className="text-primary">MEMBERSHIP</span>
</h2>
<h3 className="text-xl md:text-2xl text-gray-500 font-light">
                    A Custom Gym Membership Designed By YOU
                </h3>
</div>
<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-weight-body">
                Sometimes, YOU know what you need from a gym better than anybody. That's why we are offering BYOM – Build Your Own Membership! Simply pick a base membership, select add-ons and voila! Your custom membership is ready to go. If you have any questions on pricing, add ons, etc. please call us or send us a message on our live chat.
            </p>
</div>
</section>

<section className="pb-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">

<div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10"></div>

<div className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative bg-gradient-to-b from-white to-gray-50/30">
<div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
<i className="w-8 h-8" data-lucide="dumbbell"></i>
</div>
<div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 select-none -z-10 font-sans">1</div>
<h3 className="text-xl text-gray-900 font-weight-heading text-center mb-3 tracking-tight">Choose Your Base Membership</h3>
<p className="text-base text-gray-500 text-center leading-relaxed">
                        Choose individual, 2 person or family membership as your base.
                    </p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative bg-gradient-to-b from-white to-gray-50/30">
<div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6 mx-auto group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
<i className="w-8 h-8" data-lucide="waves"></i>
</div>
<div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 select-none -z-10 font-sans">2</div>
<h3 className="text-xl text-gray-900 font-weight-heading text-center mb-3 tracking-tight">Select Your Wellness Add On's</h3>
<p className="text-base text-gray-500 text-center leading-relaxed">
                        Add infrared sauna sessions to improve heart health, relieve muscle soreness, enhance relaxation, etc.
                    </p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative bg-gradient-to-b from-white to-gray-50/30">
<div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shadow-sm">
<i className="w-8 h-8" data-lucide="person-standing"></i>
</div>
<div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 select-none -z-10 font-sans">3</div>
<h3 className="text-xl text-gray-900 font-weight-heading text-center mb-3 tracking-tight">Select Your Dedicated Trainer</h3>
<p className="text-base text-gray-500 text-center leading-relaxed">
                        Choose from 1 or 2 private training sessions with any of our certified personal trainers.
                    </p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative bg-gradient-to-b from-white to-gray-50/30">
<div className="w-16 h-16 rounded-2xl bg-secondary/20 text-lime-700 flex items-center justify-center mb-6 mx-auto group-hover:bg-secondary group-hover:text-black transition-colors duration-300 shadow-sm">
<i className="w-8 h-8" data-lucide="check-circle-2"></i>
</div>
<div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 select-none -z-10 font-sans">4</div>
<h3 className="text-xl text-gray-900 font-weight-heading text-center mb-3 tracking-tight">That's It!</h3>
<p className="text-base text-gray-500 text-center leading-relaxed">
                        Now that you've created your own custom gym membership, you're ready to start enjoy the benefits immediately. Welcome!
                    </p>
</div>
</div>

<div className="flex justify-center">
<a className="group relative px-10 py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase rounded-full overflow-hidden shadow-lg shadow-primary/40 hover:shadow-xl hover:scale-105 transition-all duration-300" href="#">
<div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    GET STARTED
                </a>
</div>
</div>
</section>

<section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center">

<div className="absolute inset-0 bg-primary z-0">

<img alt="Blue Running Shoe" className="w-full h-full object-cover object-right md:object-[70%_center] opacity-40 md:opacity-100 mix-blend-overlay md:mix-blend-normal" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#10aeec] via-[#10aeec]/90 to-transparent md:w-3/4"></div>
</div>
<div className="relative z-10 container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 space-y-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-none font-weight-heading">
                    READY TO BUILD <br/>
                    YOUR MEMBERSHIP <br/>
<span className="text-secondary">PACKAGE?</span>
</h2>
<p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg font-weight-body">
                    Get started to see various pricing, add on's, etc. No payment or commitment required today. Simply build your membership to see what the monthly cost would be.
                </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-gray-900 text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl" href="#">
                        LET'S BUILD IT!
                    </a>
</div>
</div>

<div className="w-full md:w-1/2"></div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>© 2024 RW Fitness. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
