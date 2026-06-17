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
      

<div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1200px] gap-x-12 gap-y-12">

<div className="overflow-hidden flex flex-col select-none shrink-0 group bg-[#9C89FF] opacity-0 w-full h-[720px] max-w-[360px] mr-auto ml-auto pt-16 relative shadow-2xl items-center">

<h1 className="text-4xl font-semibold text-center leading-[1.1] tracking-tight text-black z-10 mb-8">
                Feel secure<br/>Be you
            </h1>

<div className="border-[6px] overflow-hidden z-0 bg-white w-[280px] h-[550px] border-slate-900 rounded-[2.5rem] relative shadow-2xl translate-x-[-10px] -rotate-6">

<div className="px-5 pt-6 pb-2 flex items-center justify-between">
<span className="text-2xl font-bold tracking-tight">Chats</span>
<div className="flex items-center gap-3 text-slate-900">
<i className="w-5 h-5 fill-black" data-lucide="pin"></i>
<i className="w-5 h-5" data-lucide="search"></i>
<div className="w-6 h-6 rounded-full border-2 border-slate-300 border-t-slate-900 animate-spin opacity-50"></div>
</div>
</div>

<div className="pl-5 pb-4 border-b border-gray-100">
<p className="text-sm font-semibold mb-3">Matches</p>
<div className="flex gap-4 overflow-x-auto hide-scrollbar pr-5">
<div className="relative shrink-0">
<img alt="User" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&amp;h=150&amp;fit=crop"/>
</div>
<div className="relative shrink-0">
<img alt="User" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&amp;h=150&amp;fit=crop"/>
<span className="absolute top-0 right-0 bg-red-500 w-3.5 h-3.5 rounded-full border-2 border-white"></span>
</div>
<div className="relative shrink-0">
<img alt="User" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&amp;h=150&amp;fit=crop"/>
</div>
<div className="relative shrink-0">
<img alt="User" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&amp;h=150&amp;fit=crop"/>
</div>
</div>
</div>

<div className="pt-4 pr-5 pb-4 pl-5 space-y-5">
<p className="text-sm font-semibold">DMs</p>

<div className="flex items-center gap-3">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&amp;h=150&amp;fit=crop"/>
<div className="flex-1">
<div className="flex gap-x-1 gap-y-1">
<span className="font-semibold text-base">Oliver</span>
<i className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" data-lucide="badge-check"></i>
</div>
<p className="text-sm text-gray-500 truncate">Hi, how are you?</p>
</div>
</div>

<div className="flex items-center gap-3">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&amp;h=150&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="font-semibold text-base">Joshua</span>
<i className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" data-lucide="badge-check"></i>
</div>
<div className="flex items-center gap-1">
<div className="bg-red-50 p-[2px] rounded">
<i className="w-3 h-3 text-red-500 fill-red-500" data-lucide="heart"></i>
</div>
<p className="text-sm text-gray-400 font-medium">Liked you</p>
</div>
<p className="text-sm text-indigo-500 font-medium mt-0.5">Start a conversation</p>
</div>
</div>

<div className="flex items-center gap-3">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&amp;h=150&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="font-semibold text-base">David</span>
<i className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" data-lucide="badge-check"></i>
</div>
<p className="text-sm text-gray-500">Your fav movie?</p>
</div>
</div>

<div className="flex items-center gap-3">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&amp;h=150&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="font-semibold text-base">Simon</span>
</div>
<p className="text-sm text-gray-500">What are the plans?</p>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-16 bg-white border-t flex justify-around items-center px-6">
<i className="w-6 h-6 text-black fill-black" data-lucide="message-circle"></i>
<i className="w-6 h-6 text-gray-300" data-lucide="layers"></i>
<i className="w-6 h-6 text-gray-300" data-lucide="user"></i>
</div>
</div>

<div className="absolute bottom-[-20px] right-[-60px] w-[380px] h-[400px] z-20 pointer-events-none">
<img alt="Woman" className="w-full h-full object-cover object-top mask-image-b" src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'}}/>
</div>
</div>

<div className="relative w-full max-w-[360px] h-[720px] bg-[#9C89FF] mx-auto overflow-hidden shadow-2xl flex flex-col items-center pt-16 select-none shrink-0">
<h1 className="text-4xl font-semibold text-center leading-[1.1] tracking-tight text-black z-10 mb-10">
                Meet<br/>like-minded<br/>people
            </h1>
<div className="relative w-full h-full mt-4">

<div className="absolute left-[-30px] top-8 w-[240px] h-[340px] bg-slate-800 rounded-3xl overflow-hidden shadow-xl -rotate-[8deg] z-0">
<img alt="" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full">Zodiac match</span>
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full">Nearby</span>
</div>
<div className="absolute bottom-5 left-5 text-white">
<h3 className="text-xl font-bold">Jaiden, 26</h3>
</div>
</div>

<div className="absolute right-[-30px] top-8 w-[240px] h-[340px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl rotate-[8deg] z-10 border border-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full">Popular</span>
<span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full">Nearby</span>
</div>
<div className="absolute bottom-5 left-5 text-white">
<h3 className="text-xl font-bold">Alice, 23</h3>
</div>
</div>

<div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 z-30">

<div className="absolute -top-6 -left-4 text-yellow-200"><i className="w-8 h-8 fill-current" data-lucide="sparkles"></i></div>
<div className="absolute -bottom-4 -right-2 text-yellow-200"><i className="w-6 h-6 fill-current" data-lucide="sparkle"></i></div>
<h3 className="text-lg font-bold mb-3 tracking-tight">Common interests</h3>
<div className="flex flex-wrap gap-2">

<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium">
<i className="w-3 h-3" data-lucide="plane"></i> Travel
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-medium shadow-sm">
<i className="w-3 h-3" data-lucide="camera"></i> Photography
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-medium shadow-sm">
<i className="w-3 h-3" data-lucide="palette"></i> Art
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium">
<i className="w-3 h-3" data-lucide="gamepad-2"></i> Video games
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium">
<span className="text-[10px]">🛹</span> Skateboarding
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-medium shadow-sm">
<span className="text-[10px]">💃</span> Dancing
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-medium shadow-sm">
<span className="text-[10px]">🏀</span> Basketball
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-medium shadow-sm">
<i className="w-3 h-3" data-lucide="utensils"></i> Cooking
                        </span>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[360px] h-[720px] bg-[#9C89FF] mx-auto overflow-hidden shadow-2xl flex flex-col items-center pt-16 select-none shrink-0">
<h1 className="text-5xl font-semibold text-center leading-[1] tracking-tight text-black z-10 mb-8">
                Date as<br/>you are
            </h1>

<div className="relative w-full h-full flex items-end justify-center pb-24">

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[#B3A4FF] blob-shape-2 z-0"></div>

<div className="relative w-[340px] h-[450px] z-10 translate-y-6">

<div className="w-full h-full overflow-hidden blob-shape">
<img alt="Couple" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="absolute bottom-8 flex items-center gap-2 z-20">

<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute w-5 h-7 bg-black rounded-full rotate-[-15deg] left-0"></div>
<div className="absolute w-5 h-7 bg-black rounded-full rotate-[15deg] right-0"></div>
</div>
<span className="text-2xl font-black tracking-tight">Hily</span>
</div>
</div>
</div>


    </>
  );
}
