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
      

<main className="w-full max-w-[420px] bg-[#FFF8F0] min-h-screen sm:min-h-[850px] sm:h-[90vh] sm:rounded-[40px] sm:shadow-[0_20px_60px_-10px_rgba(123,107,141,0.2)] sm:border-[8px] sm:border-[#FAF6F1] relative overflow-hidden flex flex-col">

<header className="px-6 pt-12 pb-4 flex justify-between items-start z-20">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Zaina" className="w-12 h-12 rounded-full border-2 border-[#E8A946] object-cover" src="https://i.pravatar.cc/150?u=zaina"/>

<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#4A9B94] border-2 border-[#FFF8F0] rounded-full"></div>
</div>
<div>
<h1 className="text-2xl font-bold tracking-tight text-[#3D3D3D]">Hi, Zaina</h1>
<p className="text-xs text-[#7B6B8D] font-semibold mt-0.5">Your family is active</p>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-[#FAF6F1] flex items-center justify-center text-[#7B6B8D] hover:bg-[#FDF2E9] transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto hide-scroll px-5 pb-32 space-y-8">

<section>
<div className="flex justify-between items-end mb-4 px-1">
<h2 className="text-[#7B6B8D] text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
<iconify-icon className="text-[#E85D5D]" icon="solar:heart-angle-linear"></iconify-icon>
                        New from Home
                    </h2>
<span className="text-[#7B6B8D] text-xs opacity-70">2h ago</span>
</div>

<div className="bg-[#FAF6F1] p-1.5 rounded-[28px] shadow-[0_8px_24px_-6px_rgba(123,107,141,0.08)] border border-[#E6DDD0] group cursor-pointer hover:shadow-lg transition-all duration-300">

<div className="relative h-64 w-full rounded-[24px] overflow-hidden">
<img alt="Congo Landscape" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/90 via-[#3D3D3D]/20 to-transparent"></div>

<div className="absolute top-4 left-4">
<span className="px-3 py-1.5 bg-[#FFF8F0]/90 backdrop-blur-md rounded-full text-xs font-bold text-[#7B6B8D] flex items-center gap-1 shadow-sm">
<iconify-icon className="text-[#E8A946]" icon="solar:map-point-linear"></iconify-icon>
                                Congo
                            </span>
</div>

<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 mb-3">
<img alt="Mom" className="w-6 h-6 rounded-full border border-white/50" src="https://i.pravatar.cc/150?u=mom"/>
<p className="text-[#FFF8F0] font-semibold text-xs tracking-wide">Mom's Story</p>
</div>
<div className="flex items-center gap-3">

<button className="w-10 h-10 rounded-full bg-[#E8A946] text-[#FFF8F0] flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#E8A946]/30">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>

<div className="flex-1 h-8 flex items-center gap-[3px]">
<div className="w-1 bg-[#E8A946] rounded-full wave-bar h-3"></div>
<div className="w-1 bg-[#E8A946] rounded-full wave-bar h-5"></div>
<div className="w-1 bg-[#E8A946] rounded-full wave-bar h-8"></div>
<div className="w-1 bg-[#E8A946] rounded-full wave-bar h-4"></div>
<div className="w-1 bg-[#FFF8F0]/40 rounded-full h-2"></div>
<div className="w-1 bg-[#FFF8F0]/40 rounded-full h-3"></div>
<div className="w-1 bg-[#FFF8F0]/40 rounded-full h-2"></div>
<div className="w-1 bg-[#FFF8F0]/40 rounded-full h-2"></div>
</div>
<span className="text-[#FFF8F0]/90 text-xs font-mono tracking-wider">1:24</span>
</div>
</div>
</div>

<div className="px-4 py-4 flex items-start justify-between gap-4">
<p className="text-sm text-[#7B6B8D] italic leading-relaxed">"This is where your grandmother used to..."</p>
<div className="flex gap-2 shrink-0">
<button className="w-10 h-10 rounded-full hover:bg-[#FDF2E9] flex items-center justify-center text-[#7B6B8D] transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full hover:bg-[#FDF2E9] flex items-center justify-center text-[#4A9B94] transition-colors">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<div className="h-px w-full bg-[#E6DDD0]"></div>

<section>
<div className="flex justify-between items-center mb-5 px-1">
<h2 className="text-lg font-bold text-[#3D3D3D] tracking-tight">Your Memory Boxes</h2>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-[#FAF6F1] p-5 rounded-[24px] shadow-sm border border-[#E6DDD0] active:scale-95 transition-transform cursor-pointer group hover:bg-[#FDF2E9]">
<div className="w-10 h-10 bg-[#FFF8F0] rounded-xl flex items-center justify-center mb-3 text-2xl shadow-sm border border-[#E6DDD0]">
                            🇨🇩
                        </div>
<h3 className="font-bold text-[#3D3D3D] text-base leading-tight">Congo</h3>
<p className="text-xs text-[#7B6B8D] mt-1">12 stories</p>

<div className="mt-4 flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-[#FAF6F1]" src="https://i.pravatar.cc/150?u=dad"/>
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-[#FAF6F1]" src="https://i.pravatar.cc/150?u=mom"/>
</div>
</div>

<div className="bg-[#FAF6F1] p-5 rounded-[24px] shadow-sm border border-[#E6DDD0] active:scale-95 transition-transform cursor-pointer group hover:bg-[#FDF2E9]">
<div className="w-10 h-10 bg-[#FFF8F0] rounded-xl flex items-center justify-center mb-3 text-2xl shadow-sm border border-[#E6DDD0]">
                            👵🏾
                        </div>
<h3 className="font-bold text-[#3D3D3D] text-base leading-tight">Mema</h3>
<p className="text-xs text-[#7B6B8D] mt-1">8 stories</p>
<div className="mt-4 flex items-center gap-1 text-[#4A9B94]">
<iconify-icon icon="solar:microphone-linear" width="14"></iconify-icon>
<span className="text-[10px] font-bold">Active</span>
</div>
</div>

<div className="bg-[#FAF6F1] p-5 rounded-[24px] shadow-sm border border-[#E6DDD0] active:scale-95 transition-transform cursor-pointer group hover:bg-[#FDF2E9]">
<div className="w-10 h-10 bg-[#FFF8F0] rounded-xl flex items-center justify-center mb-3 text-2xl shadow-sm border border-[#E6DDD0]">
                            🎓
                        </div>
<h3 className="font-bold text-[#3D3D3D] text-base leading-tight">School</h3>
<p className="text-xs text-[#7B6B8D] mt-1">24 photos</p>
<div className="mt-4">
<span className="text-[10px] font-bold text-[#E8A946] bg-[#E8A946]/10 px-2 py-1 rounded-md">+ Add Voice</span>
</div>
</div>

<div className="border-2 border-dashed border-[#E6DDD0] p-5 rounded-[24px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#FDF2E9] hover:border-[#E8A946]/50 transition-colors bg-[#FAF6F1]/50">
<div className="w-10 h-10 rounded-full bg-[#FFF8F0] text-[#7B6B8D] flex items-center justify-center border border-[#E6DDD0]">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-bold text-[#7B6B8D]">New Box</span>
</div>
</div>
</section>

<section className="pb-6">
<h3 className="text-xs font-bold text-[#7B6B8D] mb-4 uppercase tracking-wider px-1">Family Active Now</h3>
<div className="flex items-center gap-4 overflow-x-auto hide-scroll pb-2">

<div className="flex flex-col items-center gap-2 min-w-[60px]">
<div className="relative">
<img alt="Mema" className="w-14 h-14 rounded-full object-cover ring-2 ring-[#E8A946] p-0.5" src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 bg-[#4A9B94] text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold shadow-sm border border-[#FFF8F0]">LIVE</div>
</div>
<span className="text-xs font-semibold text-[#3D3D3D]">Mema</span>
</div>

<div className="flex flex-col items-center gap-2 min-w-[60px]">
<img alt="Mom" className="w-14 h-14 rounded-full object-cover grayscale opacity-70 border border-[#E6DDD0]" src="https://i.pravatar.cc/150?u=mom"/>
<span className="text-xs font-medium text-[#7B6B8D]">Mom</span>
</div>

<div className="flex flex-col items-center gap-2 min-w-[60px]">
<img alt="Marcus" className="w-14 h-14 rounded-full object-cover grayscale opacity-70 border border-[#E6DDD0]" src="https://i.pravatar.cc/150?u=marcus"/>
<span className="text-xs font-medium text-[#7B6B8D]">Marcus</span>
</div>
</div>
</section>
</div>

<div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
<button className="group relative flex items-center justify-center w-20 h-20">

<div className="absolute inset-0 rounded-full bg-[#E8A946] opacity-20 pulse-ring"></div>
<div className="absolute inset-2 rounded-full bg-[#E8A946] opacity-30 animate-ping"></div>

<div className="w-16 h-16 bg-[#E8A946] rounded-full shadow-[0_8px_30px_rgba(232,169,70,0.5)] flex items-center justify-center text-white relative z-10 transition-transform group-hover:scale-110 active:scale-95 border-4 border-[#FFF8F0]">
<iconify-icon icon="solar:microphone-3-bold" width="28"></iconify-icon>
</div>
</button>
</div>


<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF8F0] via-[#FFF8F0]/90 to-transparent pointer-events-none z-10"></div>
<nav className="absolute bottom-0 w-full bg-[#FAF6F1]/90 backdrop-blur-xl border-t border-[#E6DDD0] px-6 py-4 pb-8 z-20 rounded-t-[32px]">
<ul className="flex items-center justify-between">
<li>
<a className="flex flex-col items-center gap-1.5 text-[#3D3D3D]" href="#">
<iconify-icon icon="solar:home-smile-bold" width="26"></iconify-icon>
<span className="text-[10px] font-bold">Home</span>
</a>
</li>
<li>
<a className="flex flex-col items-center gap-1.5 text-[#7B6B8D] hover:text-[#4A9B94] transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="26"></iconify-icon>
<span className="text-[10px] font-medium">Boxes</span>
</a>
</li>

<li className="w-12"></li>
<li>
<a className="flex flex-col items-center gap-1.5 text-[#7B6B8D] hover:text-[#4A9B94] transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="26"></iconify-icon>
<span className="text-[10px] font-medium">Family</span>
</a>
</li>
<li>
<a className="flex flex-col items-center gap-1.5 text-[#7B6B8D] hover:text-[#4A9B94] transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:settings-linear" strokeWidth="1.5" width="26"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</a>
</li>
</ul>
</nav>
</main>

    </>
  );
}
