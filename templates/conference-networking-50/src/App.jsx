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
      

<header className="relative overflow-hidden pb-8 pt-12 rounded-b-[2.5rem]">

<div className="absolute top-0 left-0 w-full h-full bg-white z-0"></div>
<div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
<div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[80%] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

<div className="relative z-10 px-6">
<div className="flex justify-between items-start mb-8">

<div className="h-14 w-14 bg-black rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg">
<span className="text-white text-xs font-bold tracking-tighter">CONFIG</span>
</div>

<div className="h-12 w-12 rounded-full border-2 border-white shadow-md overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">Tech Summit 2025</h1>
<div className="flex items-center text-gray-700 text-base font-medium">
<i className="w-4 h-4 mr-1.5" data-lucide="map-pin"></i>
                Bengaluru, 17th Oct
            </div>
</div>
</header>

<main className="px-5 -mt-2 relative z-20 space-y-6">
<div className="flex items-center justify-between pt-2">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Recommended Attendees</h2>
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</button>
</div>

<article className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-200/75 flex flex-col">

<div className="relative h-72 w-full bg-gray-100">
<img alt="Sophia Marie" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="p-5 flex flex-col gap-4">
<div>
<div className="flex items-center justify-between mb-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Sophia Marie</h3>
</div>
<p className="text-base text-gray-500 font-medium">Product Designer @ Freshworks</p>
</div>

<div className="relative bg-amber-50 rounded-xl border border-amber-100 p-4">
<div className="flex gap-3">
<div className="shrink-0 mt-0.5">
<i className="w-4 h-4 text-amber-500 fill-amber-500/20" data-lucide="quote"></i>
</div>
<div className="relative h-[4.5rem] overflow-hidden">
<p className="text-sm text-gray-700 leading-snug">
                                I run the start-up that helps people file patent faster. Looking to connect with founders, who are dealing with IP protection. Also, building Product Hunt Kerala community - want to meet more Kerala based startups.
                            </p>

<div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-amber-50 via-amber-50/90 to-transparent"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-1">
<button className="flex items-center justify-center px-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-200 focus:outline-none">
                        View Profile
                    </button>
<button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#5848e8] text-white text-sm font-medium shadow-sm hover:bg-[#4638c2] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#5848e8] focus:outline-none">
<i className="w-4 h-4 fill-white/20" data-lucide="message-circle"></i>
<span>Ask to meet</span>
</button>
</div>
</div>
</article>

<article className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-200/75 flex flex-col">
<div className="relative h-72 w-full bg-gray-100">
<img alt="Elena Rodriguez" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5 flex flex-col gap-4">
<div>
<div className="flex items-center justify-between mb-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Elena Rodriguez</h3>
</div>
<p className="text-base text-gray-500 font-medium">Engineering Lead @ Stripe</p>
</div>
<div className="flex items-start gap-2 bg-purple-50/50 p-3 rounded-xl border border-purple-100/50">
<i className="w-4 h-4 text-purple-500 mt-0.5 fill-purple-500/20" data-lucide="sparkles"></i>
<span className="text-sm text-gray-700 leading-snug">Fellow <span className="font-medium text-gray-900">Google teammate</span> from 2019-2021.</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-1">
<button className="flex items-center justify-center px-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                        View Profile
                    </button>
<button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#5848e8] text-white text-sm font-medium shadow-sm hover:bg-[#4638c2] transition-colors">
<i className="w-4 h-4 fill-white/20" data-lucide="message-circle"></i>
<span>Ask to meet</span>
</button>
</div>
</div>
</article>

<div className="bg-[#FFF8E6] rounded-2xl p-4 flex items-center gap-4 border border-[#FBEAC6]">
<img alt="Missing" className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1">
<p className="text-base font-semibold text-gray-900 leading-tight">You're missing out on your best matches</p>
</div>
<i className="text-gray-400" data-lucide="chevron-right"></i>
</div>
</main>

<nav className="fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 px-6 py-4 z-50">
<div className="flex justify-between items-center max-w-md mx-auto">
<button className="flex flex-col items-center gap-1.5 group">
<i className="w-6 h-6 text-[#5848e8] group-hover:scale-110 transition-transform" data-lucide="globe"></i>
<span className="text-xs font-medium text-[#5848e8]">Explore</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<i className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="users"></i>
<span className="text-xs font-medium text-gray-400 group-hover:text-gray-600">Network</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<div className="relative">
<i className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="message-square"></i>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
</div>
<span className="text-xs font-medium text-gray-400 group-hover:text-gray-600">Chats</span>
</button>
</div>
</nav>


    </>
  );
}
