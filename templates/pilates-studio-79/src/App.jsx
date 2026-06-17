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
      

<div className="bg-white w-full max-w-[1400px] min-h-[90vh] rounded-[2.5rem] shadow-sm relative overflow-hidden flex flex-col">

<nav className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-8 md:px-16">

<a className="flex flex-col items-center gap-2 group" href="#">

<div className="flex items-end gap-2 text-gray-400">
<svg className="text-amber-400 w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<svg className="text-orange-500 w-6 h-6 mb-1 transition-transform duration-300 group-hover:-translate-y-1 delay-75" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="M9 20l-1-6 2-4 2 4-1 6"></path><path d="M6 9l3-2 3 2"></path></svg>
<svg className="text-red-500 w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 delay-100" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
<svg className="text-teal-500 w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 delay-150" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle className="" cx="5.5" cy="17.5" r="3.5"></circle><circle className="" cx="15" cy="5" r="1"></circle><path className="" d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>

<svg className="text-[#2EC4B6] w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 delay-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2v3.5h-5V2"></path><path d="M15 5H9"></path><path d="M12 5v7"></path><path d="M8 8h8"></path><path d="M7 17l2.5-5 2.5 5"></path><path d="M12 12v5"></path></svg>
<svg className="text-purple-500 w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 delay-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 5.3 3.3Z"></path></svg>
</div>

<div className="flex flex-col items-center leading-none">
<span className="text-2xl font-bold uppercase tracking-tight text-gray-900">Fechers Fitness</span>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1.5 text-center">Bewegung &amp; Entspannung für die ganze Familie</span>
</div>
</a>

<div className="flex items-center gap-8 mt-4 md:mt-0">
<a className="text-lg text-gray-500 hover:text-[#2EC4B6] transition-colors" href="#">Instructors</a>
<a className="text-lg text-gray-500 hover:text-[#2EC4B6] transition-colors" href="#">Classes</a>
<a className="text-lg text-gray-500 hover:text-[#2EC4B6] transition-colors" href="#">Pricing</a>
<a className="text-lg text-gray-500 hover:text-[#2EC4B6] transition-colors" href="#">Reviews</a>
<a className="text-lg text-gray-500 hover:text-[#2EC4B6] transition-colors" href="#">FAQs</a>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-8 pb-16 text-center w-full max-w-6xl mx-auto">

<div className="flex flex-col items-center gap-2 mb-8">
<div className="flex gap-1">
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-[#2EC4B6] text-[#2EC4B6]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-[#2EC4B6] text-[#2EC4B6]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-[#2EC4B6] text-[#2EC4B6]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-[#2EC4B6] text-[#2EC4B6]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-[#2EC4B6] text-[#2EC4B6]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-500 font-medium">4.9/5 with 300 Reviews</p>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-gray-900 tracking-tight max-w-4xl mb-6">Fitness &amp; Wellness<br className="hidden md:block"/> Training, Prevention, <span className="font-serif italic text-[#2EC4B6] font-normal px-1">&amp;</span> Regeneration</h1>

<p className="md:text-2xl leading-relaxed text-xl font-normal text-gray-500 max-w-2xl mb-10">
                Build strength, move with freedom, and restore harmony at Body and Mind Pilates.
            </p>

<button className="hover:bg-[#25a094] shadow-[#2EC4B6]/20 transition-all hover:shadow-[#2EC4B6]/30 hover:-translate-y-0.5 text-lg font-medium text-white bg-[#2EC4B6] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg">Start Your Free Trial</button>
</main>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 pb-16 w-full">

<div className="relative group overflow-hidden rounded-3xl h-64 md:h-80 lg:h-96">
<img alt="Man on pilates reformer" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15943ce7-36ba-4e6f-b3d9-d29763a288d6_1600w.jpg"/>
</div>

<div className="relative group overflow-hidden rounded-3xl h-64 md:h-80 lg:h-96">
<img alt="Woman stretching on pilates machine" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfa06799-c895-485b-8e2f-3c04ef71a911_1600w.jpg"/>
</div>

<div className="relative group overflow-hidden rounded-3xl h-64 md:h-80 lg:h-96">
<img alt="Instructor helping student" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604480133080-602261a680df?w=1600&amp;q=80"/>
</div>
</div>
</div>


    </>
  );
}
