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
      

<div className="w-full max-w-[1400px] overflow-x-auto snap-x snap-mandatory flex gap-6 px-6 pb-10 no-scrollbar">

<article className="snap-center shrink-0 w-[320px] h-[600px] bg-[#9F8EFF] rounded-[32px] relative overflow-hidden flex flex-col items-center pt-10 shadow-lg">
<h2 className="text-3xl font-semibold text-black text-center leading-tight tracking-tight mb-6">
                Feel secure<br/>Be you
            </h2>

<div className="w-[240px] h-[480px] bg-white rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">

<div className="h-6 w-full flex justify-between items-center px-4 mt-1">
<span className="text-[10px] font-medium text-black">9:41</span>
<div className="flex gap-1">
<div className="w-3 h-3 bg-black rounded-full opacity-20"></div>
<div className="w-3 h-3 bg-black rounded-full opacity-20"></div>
</div>
</div>

<div className="px-4 py-2 flex justify-between items-center">
<h3 className="text-xl font-bold tracking-tight">Chats</h3>
<div className="flex gap-3 text-gray-400">
<i className="w-5 h-5" data-lucide="ghost"></i>
<i className="w-5 h-5 text-orange-500" data-lucide="sliders-horizontal"></i>
</div>
</div>

<div className="px-4 mb-4">
<p className="text-xs font-semibold text-gray-500 mb-2">Matches</p>
<div className="flex -space-x-2">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">+3</div>
</div>
</div>

<div className="flex-1 px-4 space-y-4 overflow-hidden">
<p className="text-xs font-semibold text-gray-500 mb-1">DMs</p>

<div className="flex items-center gap-3">
<div className="relative">
<img alt="Oliver" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&amp;h=100&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h4 className="text-sm font-semibold truncate">Oliver</h4>
<i className="w-3 h-3 text-blue-500 fill-blue-100" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs text-gray-500 truncate">Hi, how are you?</p>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative">
<img alt="Joshua" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 bg-red-100 p-0.5 rounded-full">
<i className="w-3 h-3 text-red-500 fill-red-500" data-lucide="heart"></i>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h4 className="text-sm font-semibold truncate">Joshua</h4>
<i className="w-3 h-3 text-blue-500 fill-blue-100" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs text-pink-500 font-medium truncate">Liked you</p>
</div>
</div>

<div className="flex items-center gap-3 opacity-60">
<img alt="David" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h4 className="text-sm font-semibold truncate">David</h4>
<i className="w-3 h-3 text-blue-500 fill-blue-100" data-lucide="check-circle-2"></i>
</div>
<p className="text-xs text-gray-500 truncate">Your fav...</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-[-30px] w-[260px] h-[340px] pointer-events-none">
<img alt="Happy woman" className="w-full h-full object-cover mask-image-b" src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=600&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', borderTopLeftRadius: '100px'}}/>
</div>
</article>

<article className="snap-center shrink-0 w-[320px] h-[600px] bg-[#9F8EFF] rounded-[32px] relative overflow-hidden flex flex-col items-center pt-10 shadow-lg">
<h2 className="text-3xl font-semibold text-black text-center leading-tight tracking-tight mb-8 z-10">
                Meet<br/>like-minded<br/>people
            </h2>
<div className="relative w-full h-full flex justify-center items-start mt-4">

<div className="absolute left-4 top-0 w-[160px] h-[240px] rounded-2xl overflow-hidden shadow-xl transform -rotate-6 border-2 border-white/20 z-0">
<img alt="Jaiden" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
<p className="text-sm font-bold">Jaiden, 26</p>
<div className="flex gap-1 mt-1">
<span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm">Zodiac match</span>
</div>
</div>
</div>

<div className="absolute right-4 top-8 w-[160px] h-[240px] rounded-2xl overflow-hidden shadow-xl transform rotate-6 border-2 border-white/20 z-10">
<img alt="Alice" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
<p className="text-sm font-bold">Alice, 23</p>
<div className="flex gap-1 mt-1">
<span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm">Popular</span>
<span className="text-[8px] bg-red-500/80 px-1.5 py-0.5 rounded-full backdrop-blur-sm">Nearby</span>
</div>
</div>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl p-4 shadow-2xl z-20 border border-gray-100">
<h4 className="text-sm font-bold mb-3 flex items-center gap-2">Common interests</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-md flex items-center gap-1"><i className="w-3 h-3" data-lucide="plane"></i> Travel</span>
<span className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-md flex items-center gap-1"><i className="w-3 h-3" data-lucide="camera"></i> Photography</span>
<span className="px-2 py-1 bg-gray-100 text-gray-800 text-[10px] font-medium rounded-md">🎨 Art</span>
<span className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-md flex items-center gap-1">🛹 Skateboarding</span>
<span className="px-2 py-1 bg-gray-100 text-gray-800 text-[10px] font-medium rounded-md">🎮 Video games</span>
<span className="px-2 py-1 bg-gray-100 text-gray-800 text-[10px] font-medium rounded-md">💃 Dancing</span>
<span className="px-2 py-1 bg-gray-100 text-gray-800 text-[10px] font-medium rounded-md">🏀 Basketball</span>
</div>

<i className="absolute -top-3 -right-2 w-6 h-6 text-yellow-400 fill-yellow-400 rotate-12" data-lucide="sparkles"></i>
<i className="absolute -bottom-2 -left-2 w-4 h-4 text-yellow-400 fill-yellow-400 -rotate-12" data-lucide="sparkles"></i>
</div>
</div>
</article>

<article className="snap-center shrink-0 w-[320px] h-[600px] bg-[#9F8EFF] rounded-[32px] relative overflow-hidden flex flex-col items-center shadow-lg">
<h2 className="text-[40px] font-bold text-black text-center leading-[0.9] tracking-tight mt-12 mb-4 z-10">
                Date as<br/>you are
            </h2>

<div className="absolute bottom-0 w-[120%] h-[60%] bg-[#B5A8FF] rounded-t-[100%] z-0 translate-y-10"></div>

<div className="relative w-full h-full flex items-end justify-center z-10 pb-16">
<img alt="Couple" className="w-[300px] h-[380px] object-cover rounded-t-[40px] mask-radial" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&amp;fit=crop" style={{maskImage: 'radial-gradient(circle at center bottom, black 60%, transparent 100%)'}}/>
</div>

<div className="absolute bottom-8 flex items-center gap-2 z-20">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
<div className="w-4 h-2 border-b-2 border-white rounded-full"></div>
</div>
<span className="text-2xl font-black tracking-tighter">Hily</span>
</div>
</article>

<article className="snap-center shrink-0 w-[320px] h-[600px] bg-[#9F8EFF] rounded-[32px] relative overflow-hidden flex flex-col items-center pt-10 shadow-lg">
<h2 className="text-3xl font-semibold text-black text-center leading-tight tracking-tight mb-6">
                Find your type<br/>Take a quiz
            </h2>

<div className="w-[240px] h-[480px] bg-sky-300 rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">

<div className="px-4 pt-4 pb-2 flex justify-between items-center text-black">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-bold text-sm">Quiz</span>
<div className="w-5"></div>
</div>

<div className="bg-white flex-1 rounded-t-3xl mt-2 p-4 flex flex-col relative">

<div className="flex justify-between items-center text-[10px] text-gray-500 font-medium mb-2">
<span>Connection &amp; Conflict</span>
<span>5 of 7</span>
</div>
<div className="w-full bg-gray-200 h-1 rounded-full mb-4">
<div className="w-3/4 bg-black h-1 rounded-full"></div>
</div>

<h3 className="text-lg font-bold leading-tight mb-4">How about keeping secrets from your partner?</h3>

<div className="w-full h-24 rounded-xl overflow-hidden mb-4">
<img alt="Secret" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="space-y-2">
<div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">🗣️</div>
<span className="text-[10px] font-medium text-gray-700">Ick, only open books</span>
</div>
<div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
<div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-[10px]">😬</div>
<span className="text-[10px] font-medium text-gray-700">Click! Better protect yourself</span>
</div>
<div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">🤫</div>
<span className="text-[10px] font-medium text-gray-700">Only small ones</span>
</div>
<div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
<div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px]">🤔</div>
<span className="text-[10px] font-medium text-gray-700">Depends on the secret</span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-2 right-2 bg-white rounded-xl p-3 shadow-2xl border border-gray-100 rotate-[-2deg]">
<h4 className="text-sm font-bold mb-1">See where you sync</h4>
<p className="text-[10px] text-gray-500 leading-tight mb-2">Set your Icks &amp; Clicks and compare them with others. Take quick 5-minute quiz</p>
<button className="w-full bg-black text-white text-[10px] font-bold py-2 rounded-lg">Take Quiz</button>
</div>
</div>
</article>

<article className="snap-center shrink-0 w-[320px] h-[600px] bg-[#9F8EFF] rounded-[32px] relative overflow-hidden flex flex-col items-center pt-10 shadow-lg">
<h2 className="text-3xl font-semibold text-black text-center leading-tight tracking-tight mb-6">
                Let your true<br/>self shine
            </h2>

<div className="w-[240px] h-[480px] bg-white rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">

<div className="px-3 pt-3 flex justify-between items-center mb-2">
<div className="w-6 h-6 bg-black rounded-full text-white flex items-center justify-center">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="sliders-horizontal"></i>
</div>

<div className="px-2 mb-2 relative z-10">
<p className="text-[10px] font-bold text-black mb-1">Profile answer</p>
<div className="bg-gray-100 rounded-xl rounded-tl-sm p-3 shadow-sm border border-gray-200">
<p className="text-[10px] text-gray-600 mb-2">There's nothing I hate more than</p>
<span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full inline-block">Washing dishes</span>
</div>
</div>

<div className="px-2 mb-3 flex justify-end relative z-10">
<div className="bg-white border border-gray-200 shadow-lg rounded-xl rounded-br-sm p-2 flex items-center gap-2 max-w-[90%]">
<span className="text-[10px] text-gray-800 font-medium">I have a dishwasher 😉</span>
<div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="arrow-up"></i>
</div>
</div>
</div>

<div className="flex-1 relative mx-2 mb-14 rounded-xl overflow-hidden">
<img alt="Selfie" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&amp;fit=crop"/>

<div className="absolute top-10 left-2 transform -rotate-12 drop-shadow-lg text-2xl">🥰</div>
<div className="absolute top-4 right-2 transform rotate-12 drop-shadow-lg text-2xl">✨</div>
<div className="absolute bottom-10 right-0 transform rotate-6 drop-shadow-lg text-3xl">🤩</div>
</div>

<div className="absolute bottom-4 left-0 right-0 px-6 flex justify-between items-center">
<button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600">
<i className="w-5 h-5 stroke-[3]" data-lucide="x"></i>
</button>
<button className="w-12 h-12 bg-purple-600 rounded-full shadow-lg flex items-center justify-center text-white transform -translate-y-2">
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
</button>
<button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 hover:text-red-600">
<i className="w-5 h-5 fill-current" data-lucide="heart"></i>
</button>
</div>
</div>

<i className="absolute top-32 right-6 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" data-lucide="sparkles"></i>
</article>
</div>


    </>
  );
}
