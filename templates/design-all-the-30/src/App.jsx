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
      

<div className="flex flex-wrap justify-center gap-10">

<div className="relative w-[360px] h-[800px] bg-[#0f0f12] rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col shadow-2xl">

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium text-gray-400">
<span>2:52</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<div className="w-4 h-2 bg-gray-400 rounded-[1px]"></div>
</div>
</div>

<div className="flex items-center px-4 py-3 relative">
<button className="p-2 rounded-full bg-white/5"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="absolute left-0 right-0 text-center text-lg font-medium">Choose Category</h1>
</div>

<div className="px-4 space-y-4 mt-2">

<div className="flex bg-white/5 rounded-full p-1 relative">
<button className="flex-1 py-2 text-sm font-medium text-gray-400 text-center">Male</button>
<button className="flex-1 py-2 text-sm font-medium bg-[#6366f1] text-white rounded-full text-center shadow-lg relative z-10 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="sparkles"></i> Female
                    </button>
</div>

<div className="flex gap-4">
<button className="flex-1 py-2 text-sm font-medium bg-white/10 rounded-xl flex items-center justify-center gap-2 border border-white/10">
<i className="w-4 h-4 text-gray-300" data-lucide="briefcase"></i> Professional
                    </button>
<button className="flex-1 py-2 text-sm font-medium text-gray-500 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="home"></i> Casual
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 grid grid-cols-2 gap-3 pb-24">

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Whiteboard" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Whiteboard</span>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-purple-500/50">
<img alt="Bold" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium text-purple-200">Bold</span>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Blue" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Blue</span>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Lawyer" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Lawyer</span>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Blue" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Urban</span>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Lawyer" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Park</span>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-[#0f0f12]/80 backdrop-blur-md pt-4 pb-2">
<button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3.5 rounded-full shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 text-base">
                    Upload your Photos <i className="w-4 h-4" data-lucide="sparkles"></i>
</button>
<div className="w-1/3 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-[#050505] rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col">

<div className="absolute top-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent pt-4 pb-12 px-6">
<div className="flex justify-between items-center text-xs font-medium text-white">
<span>2:52</span>
<div className="flex items-center gap-2">
<span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">EN</span>
<div className="flex gap-0.5"><i className="w-3 h-3" data-lucide="signal"></i><div className="w-4 h-2 bg-white rounded-[1px]"></div></div>
</div>
</div>
</div>

<div className="relative h-[45%] w-full overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium border border-white/10">After</div>

<div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-white/20 flex items-center gap-1">
                    Try now
                </div>
</div>

<div className="flex-1 bg-[#0a0a0c] -mt-6 rounded-t-[2rem] relative z-10 px-6 pt-8 pb-4 flex flex-col">
<div className="text-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">HeadShot AI - Pro</h2>
<p className="text-gray-400 text-xs">AI-powered studio portraits</p>
</div>
<div className="space-y-4 mb-auto">
<h3 className="text-sm font-medium text-gray-200">How It Works?</h3>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/50 text-purple-300 text-xs flex items-center justify-center font-bold mt-0.5">1</span>
<p className="text-xs text-gray-400 leading-relaxed">Upload 3-6 high-quality selfies</p>
</div>
<div className="flex gap-3 items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/50 text-purple-300 text-xs flex items-center justify-center font-bold mt-0.5">2</span>
<p className="text-xs text-gray-400 leading-relaxed">Hit "Order" and our AI gets to work on your pics</p>
</div>
<div className="flex gap-3 items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/50 text-purple-300 text-xs flex items-center justify-center font-bold mt-0.5">3</span>
<p className="text-xs text-gray-400 leading-relaxed">Chill for 10-12 minutes while the AI whips up some jaw-dropping headshots</p>
</div>
</div>
</div>
<div className="space-y-3 mt-4">
<button className="w-full bg-[#6366f1] hover:bg-[#5558e6] text-white font-medium py-3 rounded-full shadow-lg shadow-indigo-500/20 text-sm">
                        Let's Get Started
                    </button>
<button className="w-full border border-white/10 text-gray-400 text-xs py-2.5 rounded-full">
                        View My Orders
                    </button>
</div>
</div>

<div className="h-16 border-t border-white/5 bg-[#0a0a0c] flex items-center justify-around px-2 pb-2">
<div className="flex flex-col items-center gap-1 text-[#6366f1]">
<i className="w-5 h-5" data-lucide="camera"></i>
<span className="text-[10px] font-medium">AI Headshots</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-600">
<i className="w-5 h-5" data-lucide="layers"></i>
<span className="text-[10px] font-medium">AI Tools</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-600">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-[10px] font-medium">Settings</span>
</div>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-black rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col items-center justify-center relative">

<div className="absolute top-10 right-4">
<button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 border border-white/5">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="flex flex-col items-center gap-6 z-10">

<div className="w-12 h-12 relative">
<i className="w-full h-full text-gray-500 animate-spin" data-lucide="loader-2"></i>
</div>
<p className="text-sm text-gray-400 font-medium">Please wait, we're processing your payment</p>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-black/40 rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col justify-end backdrop-blur-sm">

<div className="absolute inset-0 bg-black/60 z-0"></div>

<div className="bg-[#eef1f5] w-full rounded-t-[2rem] z-10 pb-8 relative overflow-hidden">

<div className="flex justify-between items-center px-4 py-3 border-b border-gray-300/50">
<span className="text-blue-500 text-sm">App Store</span>
<button className="w-6 h-6 bg-gray-300/50 rounded-full flex items-center justify-center text-gray-500">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>

<div className="px-4 py-6 flex gap-4 border-b border-gray-300/50">
<div className="w-12 h-12 bg-black rounded-xl overflow-hidden">
<img alt="App Icon" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=100"/>
</div>
<div className="flex-1">
<h4 className="text-black text-sm font-semibold">Headshot AI- Basic Plan</h4>
<p className="text-gray-500 text-xs mt-0.5">Headshot Pro AI: Perfect Photo <span className="border border-gray-400 px-0.5 rounded text-[8px]">4+</span></p>
<p className="text-gray-400 text-[10px] mt-0.5">In-App Purchase</p>
</div>
</div>

<div className="px-4 py-6">
<div className="flex justify-between items-end border-b border-gray-300 pb-4 mb-4">
<div>
<span className="text-black text-xl font-bold block">$5.99</span>
<span className="text-gray-400 text-xs">One-time charge</span>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
<i className="w-6 h-6 text-white" data-lucide="scan-face"></i>
</div>
<p className="text-black text-xs font-medium">Double Click Side Button to Pay</p>
</div>
</div>

<div className="w-1/3 h-1 bg-black/20 mx-auto mt-2 rounded-full"></div>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-[#0f0f12] rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col">

<div className="flex items-center px-4 py-3 relative mt-6">
<button className="p-2 rounded-full bg-white/5"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="absolute left-0 right-0 text-center text-lg font-medium">Choose Category</h1>
</div>

<div className="px-4 space-y-4 mt-2 mb-4">
<div className="flex bg-white/5 rounded-full p-1 relative">
<button className="flex-1 py-2 text-sm font-medium bg-[#6366f1] text-white rounded-full text-center shadow-lg relative z-10 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="sparkles"></i> Male
                    </button>
<button className="flex-1 py-2 text-sm font-medium text-gray-400 text-center">Female</button>
</div>

<div className="flex gap-4">
<button className="flex-1 py-2 text-sm font-medium bg-white/10 rounded-xl flex items-center justify-center gap-2 border border-white/10">
<i className="w-4 h-4 text-gray-300" data-lucide="briefcase"></i> Professional
                    </button>
<button className="flex-1 py-2 text-sm font-medium text-gray-500 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="home"></i> Casual
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 grid grid-cols-2 gap-3 pb-24">
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Male 1" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Whiteboard</span>
</div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-purple-500/50">
<img alt="Male 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium text-purple-200">Bold</span>
</div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Male 1" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Blue</span>
</div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Male 2" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Lawyer</span>
</div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Male 1" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Urban</span>
</div>
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
<img alt="Male 2" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium">Park</span>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-[#0f0f12]/80 backdrop-blur-md pt-4 pb-2">
<button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3.5 rounded-full shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 text-base">
                    Upload your Photos <i className="w-4 h-4" data-lucide="sparkles"></i>
</button>
<div className="w-1/3 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-[#0a0a0c] rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col">

<div className="flex items-center px-4 py-3 relative mt-8 mb-4">
<button className="p-2 rounded-full bg-white/5"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="absolute left-0 right-0 text-center text-lg font-medium">Customize Your Look</h1>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 space-y-8 pb-32">

<div>
<h3 className="flex items-center gap-2 text-sm font-medium text-orange-300 mb-4">
<i className="w-4 h-4" data-lucide="user"></i> Your Hair Style
                    </h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-[#6366f1] text-white text-xs font-medium border border-transparent flex items-center gap-1">Default <i className="w-3 h-3" data-lucide="check"></i></button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Bald</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Bob cut</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Crew Cut</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Ponytail</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Braids</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Afro</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Wearing Cap</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Wearing Hijab</button>
</div>
</div>

<div>
<h3 className="flex items-center gap-2 text-sm font-medium text-white mb-4">
<i className="w-4 h-4" data-lucide="glasses"></i> Do you wear glasses?
                    </h3>
<div className="flex gap-2">
<button className="px-6 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Yes</button>
<button className="px-6 py-2 rounded-full bg-[#6366f1] text-white text-xs font-medium border border-transparent flex items-center gap-1">No <i className="w-3 h-3" data-lucide="check"></i></button>
</div>
</div>

<div>
<h3 className="flex items-center gap-2 text-sm font-medium text-white mb-4">
<i className="w-4 h-4" data-lucide="plus"></i> Are you plus-sized?
                    </h3>
<div className="flex gap-2">
<button className="px-6 py-2 rounded-full bg-[#6366f1] text-white text-xs font-medium border border-transparent flex items-center gap-1">No <i className="w-3 h-3" data-lucide="check"></i></button>
<button className="px-6 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Chubby</button>
<button className="px-6 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Plus Size</button>
</div>
</div>

<div>
<h3 className="flex items-center gap-2 text-sm font-medium text-white mb-4">
<i className="w-4 h-4" data-lucide="eye"></i> Select your eye color
                    </h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-[#6366f1] text-white text-xs font-medium border border-transparent flex items-center gap-1">Default <i className="w-3 h-3" data-lucide="check"></i></button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Brown</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Blue</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Green</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Hazel</button>
<button className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">Gray</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0c] pt-4 pb-8 px-6 border-t border-white/5">
<button className="w-full bg-[#6366f1] text-white font-medium py-3.5 rounded-full shadow-lg shadow-indigo-500/20 mb-3 text-sm">
                    Next
                </button>
<button className="w-full text-gray-400 text-sm font-medium py-2">
                    Skip
                </button>
<div className="w-1/3 h-1 bg-white/20 mx-auto mt-2 rounded-full"></div>
</div>
</div>

<div className="relative w-[360px] h-[800px] bg-[#0f0f12] rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden flex flex-col">

<div className="flex items-center px-4 py-3 relative mt-8">
<button className="p-2 rounded-full bg-white/5"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="absolute left-0 right-0 text-center text-lg font-medium">Upload Photos</h1>
</div>
<div className="flex-1 flex flex-col px-6 pt-10">

<div className="flex justify-center mb-8">
<div className="relative">
<div className="w-24 h-32 bg-gray-700 rounded-xl transform -rotate-6 absolute top-0 left-0 opacity-50"></div>
<div className="w-24 h-32 bg-gray-600 rounded-xl transform rotate-6 absolute top-0 right-0 opacity-70"></div>
<div className="w-24 h-32 bg-gray-500 rounded-xl relative z-10 flex items-center justify-center border-2 border-white/10">
<i className="w-8 h-8 text-white" data-lucide="image"></i>
</div>
</div>
</div>
<div className="text-center mb-8">
<h2 className="text-lg font-semibold text-white">Input Examples</h2>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-white mb-3">Good examples</h3>
<div className="flex gap-3">
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative">
<img alt="Good" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=150"/>
<div className="absolute bottom-1 right-1 bg-green-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
</div>
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative">
<img alt="Good" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150"/>
<div className="absolute bottom-1 right-1 bg-green-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
</div>
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative">
<img alt="Good" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150"/>
<div className="absolute bottom-1 right-1 bg-green-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
</div>
</div>
<div className="mt-2 space-y-1">
<div className="flex gap-2 items-center text-[10px] text-gray-300">
<div className="w-3 h-3 bg-green-500/20 rounded flex items-center justify-center"><i className="w-2 h-2 text-green-500" data-lucide="check"></i></div>
                            Use shoulders-up images
                        </div>
<div className="flex gap-2 items-center text-[10px] text-gray-300">
<div className="w-3 h-3 bg-green-500/20 rounded flex items-center justify-center"><i className="w-2 h-2 text-green-500" data-lucide="check"></i></div>
                            Waist-up images are also good
                        </div>
<div className="flex gap-2 items-center text-[10px] text-gray-300">
<div className="w-3 h-3 bg-green-500/20 rounded flex items-center justify-center"><i className="w-2 h-2 text-green-500" data-lucide="check"></i></div>
                            Looking at the camera
                        </div>
</div>
</div>

<div className="mb-4">
<h3 className="text-sm font-medium text-white mb-3">Bad examples</h3>
<div className="flex gap-3">
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative grayscale opacity-70">
<img alt="Bad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&amp;w=150"/>
<div className="absolute bottom-1 right-1 bg-red-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="x"></i></div>
</div>
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative grayscale opacity-70">
<img alt="Bad" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-1 right-1 bg-red-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="x"></i></div>
</div>
<div className="w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative grayscale opacity-70">
<img alt="Bad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=150"/>
<div className="absolute bottom-1 right-1 bg-red-500 rounded-full p-0.5"><i className="w-3 h-3 text-white" data-lucide="x"></i></div>
</div>
</div>
<div className="mt-2 flex gap-2 items-center text-[10px] text-gray-300">
<div className="w-3 h-3 bg-red-500/20 rounded flex items-center justify-center"><i className="w-2 h-2 text-red-500" data-lucide="x"></i></div>
                         Extra people, Face covered
                    </div>
</div>
</div>

<div className="p-6 bg-[#0f0f12]">
<button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 rounded-full text-sm">
                    Close
                </button>
<div className="w-1/3 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
</div>
</div>
</div>


    </>
  );
}
