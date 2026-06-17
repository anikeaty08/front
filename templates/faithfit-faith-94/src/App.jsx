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
      

<nav className="flex items-center justify-between py-8 px-6 lg:px-16 w-full max-w-[1920px] mx-auto">
<div className="font-semibold text-2xl tracking-tighter uppercase flex items-center gap-1">
            FaithFit<span className="w-2 h-2 rounded-full bg-[#0297fd] block mt-1"></span>
</div>
<div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-medium text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#">Mission</a>
<a className="hover:text-black transition-colors duration-300" href="#">Coaching</a>
<a className="hover:text-black transition-colors duration-300" href="#">About</a>
</div>
<div className="flex items-center space-x-6">
<span className="text-sm font-medium uppercase tracking-widest text-gray-500">EN</span>
<button className="w-12 h-6 flex flex-col justify-between items-end group">
<span className="w-full h-[2px] bg-black group-hover:bg-[#0297fd] transition-colors"></span>
<span className="w-3/4 h-[2px] bg-black group-hover:bg-[#0297fd] transition-colors"></span>
</button>
</div>
</nav>

<section className="lg:px-16 w-full max-w-[1920px] mr-auto ml-auto pt-12 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

<div className="lg:col-span-8">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] leading-[0.85] font-semibold tracking-tighter uppercase break-words">
                    Transform<br/>
                    Your Body,<br/>
                    Renew Mind.
                </h1>
</div>

<div className="lg:col-span-3 lg:col-start-10 flex flex-col space-y-16 mt-4 lg:mt-6">
<p className="text-lg leading-relaxed text-gray-500 font-medium">
                    We believe true transformation starts from within. Build physical strength and spiritual resilience through guided, faith-driven coaching.
                </p>
<div className="flex items-center space-x-6">
<div className="flex -space-x-4">
<img alt="Client" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="w-14 h-14 rounded-full border-[3px] border-white bg-black flex items-center justify-center text-white text-xs font-semibold tracking-tighter shadow-sm z-10">
                            10K+
                        </div>
</div>
<p className="text-sm text-gray-500 font-medium leading-tight max-w-[130px]">
                        Join believers on the same path.
                    </p>
</div>
<a className="flex items-center space-x-8 group cursor-pointer w-max" href="#apply">
<span className="text-sm font-semibold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors duration-300">Apply for Coaching</span>
<div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>

<div className="mt-20 w-full h-[60vh] md:h-[85vh] rounded-[2.5rem] overflow-hidden relative group">
<div className="group-hover:bg-transparent transition-colors duration-700 bg-black/10 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Man lifting weights" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/148a9d60-f2e4-4f08-af57-b37d35ff209c_3840w.png"/>
</div>
</section>

<section className="py-32 px-6 lg:px-32 max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-semibold uppercase tracking-tighter">
            Fitness is more than physical. It's about stewarding the body you were given to fulfill your purpose with unshakeable energy and clarity.
        </h2>
</section>

<section className="py-16 px-6 lg:px-16 w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">

<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] group cursor-pointer">
<img alt="Workout Guidance" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-40 h-40 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-dashed border-white/60 animate-[spin_10s_linear_infinite]"></div>

<div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center pl-1.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 fill-current stroke-current" data-lucide="play"></i>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-10 lg:pr-12">
<h3 className="text-4xl md:text-5xl lg:text-[64px] font-semibold uppercase tracking-tighter leading-[0.9]">
                Train anywhere<br/>with purpose
            </h3>
<div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
<p>
                    Access custom-built workout plans, daily spiritual devotionals, and direct communication with your coach from anywhere in the world.
                </p>
<p>
                    We eliminate the guesswork. Experience a structured program designed to build discipline in both the physical and spiritual realms, creating comfortable conditions for growth.
                </p>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] text-white py-32 px-6 lg:px-16 w-full">
<div className="max-w-[1920px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
<h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-none lg:col-span-4">
                    Find the<br/>Best Path
                </h2>
<p className="text-gray-400 font-medium text-lg lg:col-span-4 max-w-sm">
                    Choose a program tailored to align your physical capabilities with your spiritual goals. No stress, just results.
                </p>
<div className="lg:col-span-4 flex justify-start lg:justify-end">
<a className="text-sm font-medium uppercase tracking-widest text-gray-400 underline underline-offset-8 hover:text-white transition-colors duration-300" href="#">View all categories</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[650px]">

<div className="relative rounded-[2rem] overflow-hidden group cursor-pointer h-[400px] md:h-full">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-10 left-10">
<h4 className="text-3xl font-semibold uppercase tracking-tighter">Strength</h4>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden group cursor-pointer h-[400px] md:h-full">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
<div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-md">
<i className="w-10 h-10 stroke-[1.5] text-white" data-lucide="arrow-down-right"></i>
</div>
</div>
<div className="absolute bottom-10 left-10">
<h4 className="text-3xl font-semibold uppercase tracking-tighter">Endurance</h4>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden group cursor-pointer h-[400px] md:h-full">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-10 left-10">
<h4 className="text-3xl font-semibold uppercase tracking-tighter">Mobility</h4>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] text-white py-32 px-6 lg:px-16 w-full border-t border-white/10" id="apply">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center max-w-[1920px] mx-auto">

<div className="flex flex-col items-start space-y-12">
<h2 className="text-5xl md:text-7xl lg:text-[90px] font-semibold uppercase tracking-tighter leading-[0.9]">
                    Start Your<br/>Transformation
                </h2>

<button className="bg-transparent border border-white rounded-full py-5 px-10 flex items-center space-x-4 hover:bg-[#0297fd] hover:border-[#0297fd] transition-all duration-300 group">
<span className="text-sm font-semibold uppercase tracking-widest">Apply For Coaching</span>
<i className="w-5 h-5 stroke-[2] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="flex justify-center lg:justify-end">
<div className="w-[320px] h-[650px] border-[12px] border-[#1a1a1a] rounded-[3rem] p-1 relative bg-black shadow-2xl">

<div className="w-full h-full rounded-[2.2rem] overflow-hidden relative flex flex-col">

<div className="h-1/2 w-full relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 left-0 w-full flex justify-center">
<span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">FaithFit</span>
</div>
</div>

<div className="h-1/2 w-full bg-black flex flex-col items-center justify-center p-8 text-center space-y-10">
<h3 className="text-[32px] font-semibold uppercase tracking-tighter leading-[0.9]">Transform<br/>Body &amp; Mind</h3>
<div className="flex items-center space-x-6 w-full justify-between border-b border-white/20 pb-4">
<span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Get Started</span>
<div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5] text-gray-400" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-24 px-6 lg:px-16 w-full max-w-[1920px] mx-auto">
<div className="font-semibold text-3xl tracking-tighter uppercase mb-20 flex items-center gap-1">
            FaithFit<span className="w-2.5 h-2.5 rounded-full bg-[#0297fd] block mt-1"></span>
</div>
<div className="space-y-4">
<p className="text-lg font-medium text-gray-500">Ready for the journey? Contact us at:</p>
<a className="text-5xl sm:text-7xl md:text-[90px] lg:text-[130px] font-semibold tracking-tighter uppercase leading-[0.85] hover:text-[#0297fd] transition-colors duration-300 inline-block break-all w-full" href="mailto:apply@faithfit.com">
                APPLY@<br className="md:hidden"/>FAITHFIT.COM
            </a>
</div>

<div className="mt-32 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 text-sm font-medium text-gray-400 uppercase tracking-widest">
<p>© FaithFit All Rights Reserved</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12">
<a className="hover:text-black transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors duration-300" href="#">Terms and Condition</a>
</div>
</div>
</footer>




    </>
  );
}
