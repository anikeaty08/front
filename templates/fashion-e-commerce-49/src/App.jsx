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
      

<div className="w-full max-w-[390px] h-[844px] bg-[#F8F4EF] relative overflow-hidden shadow-2xl md:rounded-[40px] md:border-8 border-black">

<div className="absolute inset-0 noise-bg pointer-events-none z-0"></div>

<div className="h-full overflow-y-auto overflow-x-hidden relative z-10 hide-scrollbar">

<header className="flex justify-between items-center px-4 py-5 sticky top-0 bg-[#F8F4EF]/90 backdrop-blur-md z-30">
<button className="text-[#1A1A1A] hover:opacity-70 transition-opacity">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<h1 className="font-['Playfair_Display'] text-xl font-medium tracking-tight text-[#C9A96E] uppercase">Jalabiya</h1>
<span className="text-[10px] text-[#1A1A1A] font-medium tracking-widest mt-0.5">جلابية</span>
</div>
<div className="flex items-center gap-4 text-[#1A1A1A]">
<button className="hover:opacity-70 transition-opacity">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="relative hover:opacity-70 transition-opacity">
<iconify-icon height="24" icon="solar:cart-large-2-linear" width="24"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#1A1A1A] text-white text-[9px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium shadow-sm">2</span>
</button>
</div>
</header>

<section className="px-4 mb-8 mt-2">
<div className="h-[220px] w-full rounded-2xl relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] group">
<img alt="New Season Jalabiya" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
<div className="text-white">
<h2 className="font-['Playfair_Display'] text-2xl font-medium tracking-tight mb-1">New Season</h2>
<p className="text-white/80 text-sm font-medium">موسم جديد</p>
</div>
<button className="bg-[#C9A96E] text-white px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg hover:bg-[#b5955a] transition-colors">
                            Shop Now
                        </button>
</div>
</div>
</section>

<section className="mb-8">
<div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
<button className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium bg-[#1A1A1A] text-white shadow-sm flex items-center gap-2">
<span>All</span>
<span className="text-xs text-white/70">الكل</span>
</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium bg-white text-[#1A1A1A] border border-black/5 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
<span>Formal</span>
<span className="text-xs text-gray-400">رسمي</span>
</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium bg-white text-[#1A1A1A] border border-black/5 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
<span>Casual</span>
<span className="text-xs text-gray-400">يومي</span>
</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium bg-white text-[#1A1A1A] border border-black/5 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
<span>Wedding</span>
<span className="text-xs text-gray-400">زفاف</span>
</button>
</div>
</section>

<div className="px-4 flex justify-between items-end mb-5">
<div>
<h3 className="font-['Playfair_Display'] text-xl font-medium tracking-tight text-[#1A1A1A]">Featured</h3>
<p className="text-sm text-gray-500 mt-0.5">المميزة</p>
</div>
<button className="text-[#C9A96E] text-sm font-medium flex items-center gap-1 hover:text-[#1A1A1A] transition-colors pb-1">
                    See All <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 gap-4 px-4 pb-32">

<div className="bg-white rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.02] group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F8F4EF]">
<img alt="Khartoum Classic" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1A1A1A] shadow-sm hover:text-[#C9A96E] transition-colors z-10">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-3.5 px-1 pb-1">
<div className="flex items-center gap-1 mb-1.5">
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]/30" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-[10px] text-gray-500 ml-1">4.2</span>
</div>
<h4 className="text-sm font-medium text-[#1A1A1A] leading-tight">Khartoum Classic</h4>
<p className="text-xs text-gray-400 mt-1 mb-2.5">جلابية الخرطوم الكلاسيكية</p>
<p className="text-sm font-medium text-[#8B4513]">45,000 SDG</p>
</div>
</div>

<div className="bg-white rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.02] group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F8F4EF]">
<img alt="Omdurman Premium" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#C9A96E] shadow-sm z-10">
<iconify-icon icon="solar:heart-bold" width="18"></iconify-icon>
</button>
</div>
<div className="mt-3.5 px-1 pb-1">
<div className="flex items-center gap-1 mb-1.5">
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-[10px] text-gray-500 ml-1">5.0</span>
</div>
<h4 className="text-sm font-medium text-[#1A1A1A] leading-tight">Omdurman Premium</h4>
<p className="text-xs text-gray-400 mt-1 mb-2.5">جلابية أمدرمان الفاخرة</p>
<p className="text-sm font-medium text-[#8B4513]">68,000 SDG</p>
</div>
</div>

<div className="bg-white rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.02] group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F8F4EF]">
<img alt="Nile Linen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1A1A1A] shadow-sm hover:text-[#C9A96E] transition-colors z-10">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-3.5 px-1 pb-1">
<div className="flex items-center gap-1 mb-1.5">
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]/30" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-[10px] text-gray-500 ml-1">4.5</span>
</div>
<h4 className="text-sm font-medium text-[#1A1A1A] leading-tight">Nile Linen</h4>
<p className="text-xs text-gray-400 mt-1 mb-2.5">كتان النيل الخفيف</p>
<p className="text-sm font-medium text-[#8B4513]">35,000 SDG</p>
</div>
</div>

<div className="bg-white rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.02] group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F8F4EF]">
<img alt="Royal Desert" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1A1A1A] shadow-sm hover:text-[#C9A96E] transition-colors z-10">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-3.5 px-1 pb-1">
<div className="flex items-center gap-1 mb-1.5">
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-[#C9A96E]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-[10px] text-gray-500 ml-1">4.9</span>
</div>
<h4 className="text-sm font-medium text-[#1A1A1A] leading-tight">Royal Desert</h4>
<p className="text-xs text-gray-400 mt-1 mb-2.5"> الصحراء الملكية</p>
<p className="text-sm font-medium text-[#8B4513]">85,000 SDG</p>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-black/5 pb-8 pt-4 px-6 z-40 md:rounded-b-[32px]">
<div className="flex justify-between items-center">

<button className="flex flex-col items-center gap-1.5 text-[#1A1A1A]">
<iconify-icon height="24" icon="solar:home-2-bold" width="24"></iconify-icon>
<span className="w-1 h-1 rounded-full bg-[#C9A96E]"></span>
</button>

<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#1A1A1A] transition-colors pb-2.5">
<iconify-icon height="24" icon="solar:minimalistic-magnifer-linear" width="24"></iconify-icon>
</button>

<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#1A1A1A] transition-colors pb-2.5">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>

<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#1A1A1A] transition-colors pb-2.5 relative">
<iconify-icon height="24" icon="solar:bag-linear" width="24"></iconify-icon>
</button>

<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#1A1A1A] transition-colors pb-2.5">
<iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
</div>

    </>
  );
}
