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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
<div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
<div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-50 blur-[1px]"></div>
</div>

<div className="flex gap-12 mx-auto relative z-10">

<div className="relative w-[340px] h-[680px] shrink-0 rounded-[2.5rem] overflow-hidden bg-gray-900/50 border border-white/5 flex flex-col items-center pt-12 pb-0 group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="text-center px-6 mb-10 z-10">
<h2 className="text-white text-3xl font-bold tracking-tight mb-2 leading-tight">Find Your<br/>Perfect Person</h2>
<p className="text-gray-400 text-sm font-medium tracking-wide">Real people. Real chemistry.</p>
</div>
<div className="w-[280px] h-[580px] bg-gray-950 rounded-t-[3rem] border-[6px] border-b-0 border-gray-800 relative overflow-hidden flex flex-col transform translate-y-4 shadow-2xl shadow-black">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50"></div>
<div className="h-full w-full bg-gray-900 flex flex-col relative">
<div className="h-[80%] w-full bg-cover bg-center relative" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold tracking-tight">Sarah, 24</h3>
<div className="flex items-center gap-1.5 text-xs font-medium text-gray-200 mt-1">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span>2 miles away</span>
</div>
</div>
</div>
<div className="flex-1 bg-black flex items-center justify-center gap-6 pb-6 pt-2">
<button className="w-14 h-14 rounded-full border border-gray-800 text-rose-500 flex items-center justify-center bg-gray-900">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
<button className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center shadow-lg transform -translate-y-4">
<iconify-icon className="fill-current" icon="lucide:heart" width="32"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border border-gray-800 text-purple-500 flex items-center justify-center bg-gray-900">
<iconify-icon icon="lucide:star" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="relative w-[360px] h-[720px] shrink-0 flex flex-col items-center justify-end -mt-5">

<iconify-icon className="absolute top-40 -left-6 text-white/30 text-2xl animate-pulse" icon="ph:sparkle-fill"></iconify-icon>
<iconify-icon className="absolute bottom-32 -right-8 text-emerald-400/40 text-3xl animate-bounce delay-700" icon="ph:star-four-fill"></iconify-icon>
<iconify-icon className="absolute top-24 right-0 text-white/20 text-sm" icon="ph:star-fill"></iconify-icon>

<div className="text-center mb-8 z-10 relative">
<h2 className="text-white text-4xl font-bold tracking-tight leading-none mb-1">AI-powered</h2>
<div className="script-underline">
<span className="text-white font-script text-5xl leading-none">matching</span>
</div>
</div>

<div className="w-[300px] h-[560px] bg-black rounded-[3rem] shadow-[0_20px_60px_-10px_rgba(16,185,129,0.3)] border-[6px] border-white relative overflow-hidden flex flex-col z-20">

<div className="absolute top-3 left-6 text-white text-[10px] font-semibold opacity-80 z-50">9:41</div>
<div className="absolute top-3 right-6 flex gap-1 z-50 text-white opacity-80">
<iconify-icon icon="lucide:signal" width="10"></iconify-icon>
<iconify-icon icon="lucide:wifi" width="10"></iconify-icon>
<iconify-icon icon="lucide:battery-full" width="10"></iconify-icon>
</div>

<div className="h-full w-full relative">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent"></div>

<button className="absolute top-12 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<button className="absolute top-12 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/30 transition">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>


<div className="absolute bottom-48 left-[-10px] bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -rotate-6 border-2 border-white z-20">
<span className="text-lg">✈️</span>
<span className="text-xs font-bold tracking-tight">Travelling</span>
</div>

<div className="absolute bottom-36 left-8 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform rotate-2 z-10">
<span className="text-lg">🎶</span>
<span className="text-xs font-bold tracking-tight">Pop music</span>
</div>

<div className="absolute top-[55%] right-[-10px] bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform rotate-6 z-10">
<span className="text-lg">🏃‍♀️</span>
<span className="text-xs font-bold tracking-tight">Jogging</span>
</div>

<div className="absolute top-[65%] right-2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -rotate-3 z-10">
<span className="text-lg">🍿</span>
<span className="text-xs font-bold tracking-tight">Netflix</span>
</div>

<div className="absolute bottom-32 right-4 w-14 h-14 bg-emerald-400/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl z-20 animate-pulse border border-emerald-200/50">
<iconify-icon className="text-white text-2xl" icon="ph:heart-fill"></iconify-icon>
</div>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 transform translate-y-1/2">
<div className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-100">
<span className="text-rose-500 font-bold text-xl tracking-tight">AI</span>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white h-28 rounded-t-[2.5rem] pt-10 px-6 relative">

<div className="absolute -top-6 right-8 bg-white p-2 rounded-full shadow-lg">
<div className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold relative">
                                12
                                <iconify-icon className="absolute -top-1 -right-1 text-yellow-400" icon="ph:sparkle-fill"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon className="text-black text-sm" icon="ph:crown-fill"></iconify-icon>
<h3 className="text-xl font-bold text-gray-900">Emily, 35</h3>
<iconify-icon className="text-blue-500 text-lg" icon="ph:seal-check-fill"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">Active now</span>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-gray-500">
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span>Austin</span>
</div>
<div className="flex items-center gap-1">
<span className="text-lg">☕</span>
<span>How about coffee?</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[340px] h-[680px] shrink-0 rounded-[2.5rem] overflow-hidden bg-gray-900/50 border border-white/5 flex flex-col items-center pt-12 pb-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="text-center px-6 mb-10 z-10">
<h2 className="text-white text-3xl font-bold tracking-tight mb-2 leading-tight">Spark Real<br/>Conversations</h2>
<p className="text-emerald-200/70 text-sm font-medium tracking-wide">Say goodbye to boring chats.</p>
</div>
<div className="w-[280px] h-[580px] bg-black rounded-t-[3rem] border-[6px] border-b-0 border-gray-800 relative overflow-hidden flex flex-col transform translate-y-4 shadow-2xl">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-full z-50"></div>
<div className="h-full w-full bg-gray-950 flex flex-col">
<div className="pt-14 pb-4 px-4 border-b border-gray-800 flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-black rounded-full"></div>
</div>
<div>
<div className="text-sm font-semibold text-white">James</div>
<div className="text-[10px] text-emerald-500 font-medium">Online now</div>
</div>
<div className="ml-auto text-gray-500">
<iconify-icon icon="lucide:more-vertical" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 bg-black/50 p-4 flex flex-col gap-4 overflow-hidden relative">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="self-start max-w-[85%] bg-gray-800 rounded-2xl rounded-tl-none p-3 border border-gray-700 relative z-10">
<p className="text-xs text-gray-200 leading-relaxed">Hey! I saw you're into hiking. Have you tried the trails at Ridge Park?</p>
</div>
<div className="self-end max-w-[85%] bg-emerald-600 text-white rounded-2xl rounded-tr-none p-3 shadow-lg shadow-emerald-900/20 relative z-10">
<p className="text-xs leading-relaxed">Yes! I was actually there last weekend. The view from the summit is insane 🏔️</p>
</div>
<div className="self-start max-w-[85%] bg-gray-800 rounded-2xl rounded-tl-none p-3 border border-gray-700 relative z-10">
<p className="text-xs text-gray-200 leading-relaxed">No way, me too! We might have crossed paths.</p>
</div>
<div className="self-end max-w-[85%] bg-emerald-600 text-white rounded-2xl rounded-tr-none p-3 flex items-center gap-2 relative z-10">
<div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
<iconify-icon className="fill-current" icon="lucide:play" width="10"></iconify-icon>
</div>
<div className="w-24 h-4 flex items-center gap-0.5 opacity-80">
<div className="w-0.5 h-2 bg-white rounded-full"></div>
<div className="w-0.5 h-3 bg-white rounded-full"></div>
<div className="w-0.5 h-2 bg-white rounded-full"></div>
<div className="w-0.5 h-4 bg-white rounded-full"></div>
<div className="w-0.5 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[340px] h-[680px] shrink-0 rounded-[2.5rem] overflow-hidden bg-gray-900/50 border border-white/5 flex flex-col items-center pt-12 pb-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="text-center px-6 mb-10 z-10">
<h2 className="text-white text-3xl font-bold tracking-tight mb-2 leading-tight">Who's Nearby?</h2>
<p className="text-gray-400 text-sm font-medium tracking-wide">Discover singles in your area.</p>
</div>
<div className="w-[280px] h-[580px] bg-black rounded-t-[3rem] border-[6px] border-b-0 border-gray-800 relative overflow-hidden flex flex-col transform translate-y-4 shadow-2xl">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-full z-50"></div>
<div className="h-full w-full bg-gray-900 relative">

<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter contrast-150"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-64 h-64 border border-emerald-500/20 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-44 h-44 border border-emerald-500/30 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
</div>
</div>

<div className="absolute top-[35%] left-[25%] flex flex-col items-center animate-bounce duration-[2000ms]">
<div className="w-10 h-10 rounded-full border-2 border-emerald-500 p-0.5 shadow-lg shadow-emerald-900/50 bg-black">
<img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<div className="absolute bottom-[40%] right-[20%] flex flex-col items-center animate-bounce duration-[2500ms]">
<div className="w-10 h-10 rounded-full border-2 border-purple-500 p-0.5 shadow-lg shadow-purple-900/50 bg-black">
<img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-700">
<div className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:radar" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">12 people nearby</div>
<div className="text-[10px] text-gray-400">Expand your search radius</div>
</div>
<button className="ml-auto w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
