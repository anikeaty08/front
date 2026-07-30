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
      

<div className="lines absolute top-0 left-0 right-0 h-full m-auto pointer-events-none z-0" style={{width: `90vw`}}>
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2" style={{marginLeft: `-22.5vw`, background: `rgba(255,255,255,0.1)`}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2" style={{background: `rgba(255,255,255,0.1)`}}></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2" style={{marginLeft: `22.5vw`, background: `rgba(255,255,255,0.1)`}}></div>
</div>

<div className="relative z-10 flex flex-col items-center max-w-3xl text-center mr-auto ml-auto pt-16 pb-4">
<h1 className="md:text-5xl bg-clip-text text-5xl font-light text-slate-50 tracking-tight font-geist bg-gradient-to-r from-white via-gray-200 to-white mb-3 drop-shadow-lg">Our Team, Your Advantage</h1>
<p className="md:text-xl max-w-2xl text-xs font-light text-zinc-400">We've passionate team of creatives, builders, and thinkers working together to make great things happen.</p>
</div>

<div className="relative z-10 overflow-hidden py-10">
<div className="scroll-mask-left"></div>
<div className="scroll-mask-right"></div>
<div className="flex flex-col gap-10">

<div className="whitespace-nowrap flex items-stretch relative">
<div className="flex gap-10 infinite-scroll">

<div className="flex gap-10">
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Leslie Alexander" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Leslie Alexander</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Co-Founder / CEO</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Visionary leader with a passion for innovation and growth. Leslie brings over 15 years of executive experience to the team, guiding strategy and culture.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Michael Foster" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Michael Foster</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Co-Founder / CTO</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Tech innovator focused on building scalable, robust solutions. Michael leads all engineering and product architecture initiatives.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Sarah Williams" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Sarah Williams</h3>
<p className="text-gray-400 text-sm font-medium mt-1">VP of Marketing</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Creative strategist driving brand engagement and growth. Sarah is responsible for all creative, digital, and social strategies.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Alex Johnson" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Alex Johnson</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Lead Designer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Designing memorable experiences with creativity and precision. Alex leads our UI/UX and visual branding efforts.
                </p>
</div>
</div>
</div>

<div className="flex gap-10">
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Leslie Alexander" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Leslie Alexander</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Co-Founder / CEO</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Visionary leader with a passion for innovation and growth. Leslie brings over 15 years of executive experience to the team, guiding strategy and culture.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Michael Foster" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Michael Foster</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Co-Founder / CTO</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Tech innovator focused on building scalable, robust solutions. Michael leads all engineering and product architecture initiatives.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Sarah Williams" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Sarah Williams</h3>
<p className="text-gray-400 text-sm font-medium mt-1">VP of Marketing</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Creative strategist driving brand engagement and growth. Sarah is responsible for all creative, digital, and social strategies.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Alex Johnson" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
<h3 className="mt-2 text-xl font-semibold">Alex Johnson</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Lead Designer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Designing memorable experiences with creativity and precision. Alex leads our UI/UX and visual branding efforts.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="whitespace-nowrap flex items-stretch relative">
<div className="flex gap-10 infinite-scroll-reverse">
<div className="flex gap-10">
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Ethan Brown" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/men/41.jpg" />
<h3 className="mt-2 text-xl font-semibold">Ethan Brown</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Chief Operations Officer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Ensuring operational excellence company-wide. Ethan oversees logistics, HR, and day-to-day operations.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Jessica Lee" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/women/44.jpg" />
<h3 className="mt-2 text-xl font-semibold">Jessica Lee</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Head of Customer Success</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Jessica builds strong client relationships and ensures satisfaction at every touchpoint.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="David Kim" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/men/42.jpg" />
<h3 className="mt-2 text-xl font-semibold">David Kim</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Head of Data Science</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  David turns data into actionable insights for growth and product innovation.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Maria Garcia" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/women/47.jpg" />
<h3 className="mt-2 text-xl font-semibold">Maria Garcia</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Lead Software Engineer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Maria architects robust applications and leads our talented developer team.
                </p>
</div>
</div>
</div>
<div className="flex gap-10">
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Ethan Brown" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/men/41.jpg" />
<h3 className="mt-2 text-xl font-semibold">Ethan Brown</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Chief Operations Officer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Ensuring operational excellence company-wide. Ethan oversees logistics, HR, and day-to-day operations.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Jessica Lee" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/women/44.jpg" />
<h3 className="mt-2 text-xl font-semibold">Jessica Lee</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Head of Customer Success</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Jessica builds strong client relationships and ensures satisfaction at every touchpoint.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="David Kim" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/men/42.jpg" />
<h3 className="mt-2 text-xl font-semibold">David Kim</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Head of Data Science</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  David turns data into actionable insights for growth and product innovation.
                </p>
</div>
</div>
<div className="relative w-96 shrink-0 overflow-hidden rounded-lg flex flex-col items-center text-center border border-gray-700 bg-white/10 backdrop-blur-md">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative px-8 pt-8 pb-4 w-full flex flex-col items-center z-10">
<img alt="Maria Garcia" className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4" src="https://randomuser.me/api/portraits/women/47.jpg" />
<h3 className="mt-2 text-xl font-semibold">Maria Garcia</h3>
<p className="text-gray-400 text-sm font-medium mt-1">Lead Software Engineer</p>
</div>
<div className="relative px-6 pb-8 w-full flex flex-col items-center z-10">
<p className="w-full block text-gray-400 text-sm font-light text-center leading-[1.2]">
                  Maria architects robust applications and leads our talented developer team.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
