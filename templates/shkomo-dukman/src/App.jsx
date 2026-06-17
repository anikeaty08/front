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
      

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B38F4B]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

<div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 bg-[#B38F4B] rounded-full opacity-60 pointer-events-none"></div>
<div className="absolute top-[40%] right-[85%] w-1 h-1 bg-[#B38F4B] rounded-full opacity-40 pointer-events-none"></div>
<div className="absolute top-[70%] right-[25%] w-1.5 h-1.5 bg-[#B38F4B] rounded-full opacity-50 pointer-events-none"></div>
<div className="absolute top-[75%] right-[75%] w-1 h-1 bg-[#B38F4B] rounded-full opacity-30 pointer-events-none"></div>

<header className="z-50 flex flex-col md:flex-row md:px-12 gap-8 md:gap-6 w-full max-w-[1400px] mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 relative gap-x-8 gap-y-8 items-center justify-between">

<div className="flex flex-col items-center">
<iconify-icon className="" height="48" icon="solar:buildings-2-linear" style={{color: '#B38F4B', marginBottom: '0.75rem', strokeWidth: '1.5'}} width="48"></iconify-icon>
<div className="text-[#B38F4B] text-xl font-medium tracking-[0.2em] leading-none mb-1 text-center" dir="ltr">SHLOMO DUKMAN</div>
<div className="text-gray-400 text-sm font-normal text-center">שלמה דוקמן - ייעוץ משכנתאות והשקעות</div>
</div>

<nav className="hidden lg:flex gap-x-3 gap-y-3 items-center">
<a className="flex items-center justify-center bg-[#B38F4B] text-black rounded-full text-base font-medium shadow-[0_0_15px_rgba(179,143,75,0.2)] w-[144px] h-[44px]" href="/home">ראשי</a>
<a className="flex items-center justify-center w-[144px] h-[44px] transition-all hover:bg-[#B38F4B] hover:text-black hover:border-[#B38F4B] text-base font-medium text-white bg-black/50 border-white/10 border rounded-full" href="/about">אודות</a>
<a className="flex items-center justify-center transition-all hover:bg-[#B38F4B] hover:text-black hover:border-[#B38F4B] text-base font-medium text-white bg-black/50 w-[144px] h-[44px] border-white/10 border rounded-full" href="/proces">המסלול שלכם</a>
<a className="flex items-center justify-center transition-all hover:bg-[#B38F4B] hover:text-black hover:border-[#B38F4B] text-base font-medium text-white bg-black/50 w-[144px] h-[44px] border-white/10 border rounded-full" href="/services">שירותים</a>
</nav>

<div className="flex items-center gap-3">
<a className="flex items-center justify-center gap-2 hover:bg-[#B38F4B]/10 transition-all text-base font-medium text-[#B38F4B] border-[#B38F4B] border rounded-full" dir="ltr" href="tel:054-903-1980" style={{height: '44px', minWidth: '180px', padding: '0px'}}>
<span className="tracking-wider">054-903-1980</span>
<iconify-icon className="" height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 hover:bg-[#d4b96a] transition-all text-base font-medium text-black bg-[#B38F4B] rounded-full shadow-[0_0_15px_rgba(179,143,75,0.2)]" dir="ltr" href="https://wa.me/972549031980" style={{height: '44px', minWidth: '180px', padding: '0 24px'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="">WhatsApp</span>
</a>
</div>
</header>

<main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="flex-1 flex flex-col items-start w-full">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
<iconify-icon height="16" icon="solar:home-smile-linear" style={{color: '#B38F4B'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-300">ייעוץ משכנתאות פיננסי</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                המשכנתא הנכונה<br/><span className="shimmer-text">מתחילה כאן</span>
</h1>
<p className="text-gray-400 text-lg font-normal leading-relaxed mb-10 max-w-xl">
                הדרך לבית משלכם או להשקעה חכמה מתחילה בתכנון פיננסי מדויק. אני כאן כדי ללוות אתכם יד ביד, לחסוך לכם כסף ולהעניק לכם שקט נפשי לאורך כל התהליך.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 h-14 px-10 bg-[#B38F4B] text-black rounded-full text-lg font-medium shadow-[0_0_20px_rgba(179,143,75,0.2)] hover:bg-[#d4b96a] transition-all" href="#contact">
<span className="">לתיאום שיחת ייעוץ</span>
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-white/10 border-t mt-16 pt-12 gap-x-4 gap-y-8">
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-2 mb-1.5">
<iconify-icon height="26" icon="solar:shield-check-linear" style={{color: '#B38F4B'}} width="26"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">100%</div>
</div>
<div className="text-sm text-gray-400">שקיפות ואובייקטיביות</div>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-2 mb-1.5">
<iconify-icon height="26" icon="solar:users-group-two-rounded-linear" style={{color: '#B38F4B'}} width="26"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">אישי</div>
</div>
<div className="text-sm text-gray-400">ליווי צמוד יד ביד</div>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-2 mb-1.5">
<iconify-icon height="26" icon="solar:wad-of-money-linear" style={{color: '#B38F4B'}} width="26"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">חיסכון</div>
</div>
<div className="text-sm text-gray-400">מקסימלי בתשלומי המשכנתא</div>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-2 mb-1.5">
<iconify-icon height="26" icon="solar:chart-square-linear" style={{color: '#B38F4B'}} width="26"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">תכנון</div>
</div>
<div className="text-sm text-gray-400">תמהיל מותאם למידותיכם</div>
</div>
</div>
</div>

<div className="flex-1 w-full relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-[#B38F4B]/20 to-transparent rounded-3xl blur-2xl z-0 pointer-events-none"></div>

<div className="relative z-10 w-full max-w-[500px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] group">

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

<img alt="שלמה דוקמן - יועץ משכנתאות" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ead47b6-3f9e-4027-aba6-9ce63923786a_1600w.png"/>

<div className="absolute bottom-6 right-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 transition-transform duration-500 hover:-translate-y-1 cursor-default">
<div className="w-12 h-12 shrink-0 rounded-full bg-[#B38F4B]/20 flex items-center justify-center border border-[#B38F4B]/50">
<iconify-icon height="24" icon="solar:hand-stars-linear" style={{color: '#B38F4B', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<div className="text-white font-medium text-base">הצלחה פיננסית</div>
<div className="text-gray-400 text-sm">בניית עתיד כלכלי בטוח ביחד</div>
</div>
</div>
</div>

<div className="absolute top-12 -left-6 z-20 w-24 h-24 bg-gradient-to-br from-[#B38F4B] to-transparent rounded-full blur-xl opacity-30 mix-blend-screen pointer-events-none"></div>
</div>
</main>

    </>
  );
}
