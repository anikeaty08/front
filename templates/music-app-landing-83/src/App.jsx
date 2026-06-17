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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/435d613f-d4c2-403a-8de6-2807eaadddcb_3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="flex flex-col xl:flex-row xl:scale-100 transition-transform duration-500 scale-[0.85] gap-x-[40px] gap-y-[40px] items-center justify-center">

<div className="bg-neutral-100 w-[393px] h-[852px] ring-black/10 ring-1 rounded-[56px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#121212] ring-1 ring-black/70 flex flex-col">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black ring-1 ring-white/10 z-50"></div>

<div className="flex-1 overflow-y-auto hide-scrollbar pt-16 pr-5 pb-24 pl-5 space-y-5">

<div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden group shadow-lg ring-1 ring-white/10">
<img alt="Cover" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9def2f55-8f64-4ea9-a4b1-3937e7c2ecfc_800w.webp"/>
<div className="bg-gradient-to-b from-transparent via-[#121212]/20 to-[#121212] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-5 left-5 right-5 flex justify-between items-start">
<span className="uppercase text-xs font-medium text-neutral-300 tracking-wider">Personal Wave</span>
<div className="flex items-center gap-1 text-neutral-300 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-full">
<svg aria-hidden="true" className="" data-icon="solar:headphones-round-sound-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13 13 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711s-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487c.455-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58z" fill="currentColor"></path><path clip-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" fill="currentColor" fill-rule="evenodd" opacity=".5"></path></svg>
<span className="text-xs font-semibold">14k</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h2 className="leading-none text-4xl font-semibold text-[#D0FF71] tracking-tight font-manrope mb-4">SonicPulse</h2>
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="text-sm text-white/90 font-medium">Neon Hearts</p>
<p className="text-xs text-white/60">Velvet Bloom</p>
</div>
<button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-colors border border-white/10">
<svg aria-hidden="true" className="" data-icon="solar:play-bold" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg>
</button>
</div>
</div>
</div>

<div className="aspect-square overflow-hidden group bg-[#8B1A1A] w-full ring-white/10 ring-1 rounded-[32px] relative shadow-lg">
<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
<h2 className="text-3xl font-semibold tracking-tight text-[#FFD1D1] font-manrope">VelvetBloom</h2>
<div className="flex items-center gap-1 text-[#FFD1D1]/80 bg-black/10 backdrop-blur-md px-2.5 py-1.5 rounded-full">
<svg aria-hidden="true" className="" data-icon="solar:music-library-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.892c.447-3.049.67-4.573-.278-5.56s-2.636-.987-6.01-.987m-.74 2.623c-1.231-.526-2.645.265-2.727 1.527q-.005.083-.004.207v3.623a2.7 2.7 0 0 0-1.286-.321C9.151 15.2 8 16.275 8 17.6S9.151 20 10.571 20s2.572-1.074 2.572-2.4v-3.919l.928.462q.118.06.198.095c1.231.526 2.645-.266 2.728-1.528q.004-.082.003-.207v-.026l-.001-.093c-.021-.623-.387-1.192-.966-1.503l-.087-.044l-1.16-.578a4 4 0 0 0-.197-.094" fill="currentColor" fill-rule="evenodd"></path><path d="M14.053 11.256c-.41-.175-.882.089-.909.51a4 4 0 0 0 0 .214a.6.6 0 0 0 .321.501l.058.03l1.135.564c.107.054.133.066.146.072c.41.175.882-.089.91-.51a4 4 0 0 0 0-.215a.6.6 0 0 0-.322-.5zM10.571 16.4c.71 0 1.286.538 1.286 1.2c0 .663-.575 1.2-1.286 1.2c-.71 0-1.285-.537-1.285-1.2s.575-1.2 1.285-1.2" fill="currentColor"></path><path d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" fill="currentColor" opacity=".4"></path><path d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" fill="currentColor" opacity=".7"></path></svg>
<span className="text-xs font-semibold">842</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-2/3 flex items-end">
<img alt="Artist 1" className="group-hover:scale-105 transition-transform duration-700 ease-out w-1/2 h-full object-cover rounded-tr-[40px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Artist 2" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_320w.webp"/>
</div>
<div className="z-20 absolute right-5 bottom-5 left-5">
<h3 className="uppercase leading-tight text-xl font-semibold tracking-tight mb-1">Best Tracks</h3><div className="absolute right-0 bottom-0">
<button className="w-10 h-10 rounded-full bg-[#FFD1D1] flex items-center justify-center text-[#8B1A1A] hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="" data-icon="solar:play-bold" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg>
</button>
</div>
</div>
</div>
</div><div className="absolute top-0 w-full px-7 py-5 flex justify-between items-center z-40 text-xs font-medium text-white mix-blend-difference">
<span className="pl-2">9:41</span>
<div className="flex gap-1.5 items-center pr-2">
<span className="iconify" data-icon="solar:signal-bold" data-width="14"></span>
<span className="iconify" data-icon="solar:wi-fi-bold" data-width="14"></span>
<svg aria-hidden="true" className="" data-icon="solar:battery-full-bold" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</div>

<div className="flex bg-[#121212]/90 w-full h-[88px] border-white/5 border-t pr-4 pb-4 pl-4 absolute bottom-0 backdrop-blur-xl items-center justify-around">
<div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<img alt="Album" className="w-8 h-8 rounded-full border border-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<button className="flex text-black bg-white w-12 h-12 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:home-smile-bold" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" fill="currentColor" fill-rule="evenodd"></path></svg>
</button>
<button className="w-10 h-10 rounded-full text-neutral-400 flex items-center justify-center hover:text-white">
<svg aria-hidden="true" data-icon="solar:magnifer-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path d="M18.5 18.5L22 22" strokeLinecap="round"></path></g></svg>
</button>
<button className="w-10 h-10 rounded-full text-neutral-400 flex items-center justify-center hover:text-white">
<svg aria-hidden="true" className="" data-icon="solar:library-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></path><path d="M15 18H9" strokeLinecap="round"></path><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></path></g></svg>
</button>
</div>

</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-neutral-100 ring-1 ring-black/10 p-[10px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#EEDDFF] ring-1 ring-black/70 flex flex-col">

<div className="absolute inset-0 bg-gradient-to-br from-[#F3E6FF] via-[#EEDDFF] to-[#FDF2F8]"></div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black ring-1 ring-white/10 z-50"></div>

<div className="absolute top-0 w-full px-7 py-5 flex justify-between items-center z-40 text-xs font-medium text-neutral-800">
<span className="pl-2">9:41</span>
<div className="flex gap-1.5 items-center pr-2">
<span className="iconify" data-icon="solar:signal-bold" data-width="14"></span>
<span className="iconify" data-icon="solar:wi-fi-bold" data-width="14"></span>
<svg aria-hidden="true" data-icon="solar:battery-full-bold" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</div>

<div className="relative z-10 pt-16 px-6 flex justify-between items-center mb-6">
<button className="w-10 h-10 rounded-full bg-white/60 shadow-sm border border-white/50 flex items-center justify-center text-neutral-800 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="solar:magnifer-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path d="M18.5 18.5L22 22" strokeLinecap="round"></path></g></svg>
</button>
<button className="px-5 py-2.5 rounded-full bg-white/60 shadow-sm border border-white/50 flex items-center gap-2 text-neutral-800 backdrop-blur-sm">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="solar:vinyl-record-bold-duotone" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(38, 38, 38)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142" fill="currentColor" opacity=".5"></path><path className="" d="M17.127 6.873a.75.75 0 1 0-1.061 1.06a5.75 5.75 0 0 1 0 8.132a.75.75 0 1 0 1.06 1.061a7.25 7.25 0 0 0 0-10.253M7.934 7.934a.75.75 0 0 0-1.06-1.061a7.25 7.25 0 0 0 0 10.253a.75.75 0 0 0 1.06-1.06a5.75 5.75 0 0 1 0-8.132" fill="currentColor"></path><path clip-rule="evenodd" d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.303a3.75 3.75 0 0 1-5.304-5.303m1.061 1.06a2.25 2.25 0 1 1 3.182 3.183a2.25 2.25 0 0 1-3.182-3.182" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-sm font-semibold">Flow</span>
</button>
<button className="w-10 h-10 rounded-full bg-white/60 shadow-sm border border-white/50 flex items-center justify-center text-neutral-800 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="solar:hamburger-menu-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>

<div className="flex-1 overflow-hidden w-full relative">

<div className="absolute top-8 -left-4 w-40 h-40 bg-yellow-300 rounded-[2rem] overflow-hidden transform rotate-[-6deg] shadow-lg border-4 border-white">
<img alt="Art" className="opacity-80 mix-blend-overlay w-full h-full object-cover [--fx-filter:blur(10px)_liquid-glass(2.4,10)_saturate(1.25)_noise(0.5,1,0)]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-4 right-2 w-40 h-52 bg-black rounded-[2rem] overflow-hidden transform rotate-[4deg] shadow-xl border-4 border-white z-10">
<img alt="Art" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute top-44 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#00C2FF] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-20">
<div className="[--fx-filter:blur(10px)_liquid-glass(2.4,10)_saturate(1.3)_noise(0.5,1,0)] bg-gradient-to-t from-[#006080] to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0" style={{maskSize: '200% 100%', WebkitMaskSize: '200% 100%', animation: 'aura-slide 3s linear infinite', maskImage: 'linear-gradient(120deg, transparent, black 40%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(120deg, transparent, black 40%, black 60%, transparent)'}}>
<style>
        @keyframes aura-slide {
            0% { mask-position: 200% 0; -webkit-mask-position: 200% 0; }
            100% { mask-position: -200% 0; -webkit-mask-position: -200% 0; }
        }
    </style>
</div>
<img alt="Hero" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute top-72 -left-2 w-36 h-48 bg-[#9F2A2A] rounded-[2rem] overflow-hidden transform rotate-[-3deg] shadow-lg border-4 border-white z-10">
<img alt="Art" className="w-full h-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="absolute bottom-32 right-[-10px] w-48 h-48 bg-orange-500 rounded-[2rem] overflow-hidden transform rotate-[-6deg] shadow-lg border-4 border-white">
<img alt="Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="absolute bottom-24 left-4 w-32 h-32 bg-green-500 rounded-[2rem] overflow-hidden transform rotate-[8deg] shadow-lg border-4 border-white/80">
<img alt="Art" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="absolute bottom-8 left-5 right-5 bg-[#1A1A1A] rounded-[2.5rem] p-2 pl-3 flex items-center justify-between shadow-2xl z-50 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
<svg aria-hidden="true" data-icon="solar:star-bold-duotone" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</button>
<div className="flex flex-col justify-center">
<span className="text-white text-sm font-medium leading-tight">Lonely Orbit</span>
<span className="text-white/50 text-xs">Neon Hearts</span>
</div>
</div>
<div className="flex items-center gap-3 pr-3">
<button className="text-white/70 hover:text-white">
<svg aria-hidden="true" data-icon="solar:skip-previous-bold" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648zM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" fill="currentColor"></path></svg>
</button>
<button className="w-10 h-10 flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="solar:pause-bold" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" fill="currentColor"></path></svg>
</button>
<button className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10">
<svg aria-hidden="true" data-icon="solar:add-circle-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</button>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-neutral-100 ring-1 ring-black/10 p-[10px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#F2F2F7] ring-1 ring-black/70 flex flex-col">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black ring-1 ring-white/10 z-50"></div>

<div className="absolute top-0 w-full px-7 py-5 flex justify-between items-center z-40 text-xs font-medium text-neutral-800">
<span className="pl-2">9:41</span>
<div className="flex gap-1.5 items-center pr-2">
<span className="iconify" data-icon="solar:signal-bold" data-width="14"></span>
<span className="iconify" data-icon="solar:wi-fi-bold" data-width="14"></span>
<svg aria-hidden="true" data-icon="solar:battery-full-bold" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</div>

<div className="flex mb-6 pt-16 pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover border border-neutral-200 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="bg-white rounded-full px-5 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider shadow-sm border border-neutral-100">
                        Hifi Mode
                    </div>
<button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-400 border border-neutral-100">
<svg aria-hidden="true" data-icon="solar:add-square-linear" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar pr-5 pb-36 pl-5 space-y-4">

<div className="overflow-hidden flex flex-col group transition-transform hover:scale-[1.02] bg-[#00E054] w-full h-52 rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative shadow-sm justify-between">
<div className="relative z-10">
<span className="text-xs font-medium text-green-900/60 uppercase tracking-wider">Personal Mix</span>
<h3 className="text-2xl font-semibold text-green-900 mt-1 tracking-tight">SonicWaves</h3>
</div>

<div className="absolute top-5 right-5 w-28 h-28 rounded-full overflow-hidden border-2 border-green-400/50 bg-black/10">
<img alt="Friends" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="relative z-10 flex justify-between items-end">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-orange-400 border border-[#00E054]"></div>
<div className="w-7 h-7 rounded-full bg-pink-400 border border-[#00E054]"></div>
</div>
<span className="text-xs font-semibold text-green-900/80">14k</span>
<button className="w-7 h-7 rounded-full border border-green-800/20 flex items-center justify-center text-green-900/60">
<span className="iconify" data-icon="solar:add-linear" data-width="16"></span>
</button>
</div>
<button className="w-12 h-12 rounded-full bg-[#0055FF] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<svg aria-hidden="true" data-icon="solar:pause-bold" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" fill="currentColor"></path></svg>
</button>
</div>
</div>

<div className="overflow-hidden flex flex-col group transition-transform hover:scale-[1.02] bg-[#E84BE8] w-full h-60 rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative shadow-sm justify-between">
<div className="relative z-10">
<span className="text-xs font-medium text-white/70 uppercase tracking-wider">Artist Top Tracks</span>
<h3 className="leading-tight text-2xl font-semibold text-white tracking-tight mt-1">MidnightEchoes</h3>
</div>

<div className="absolute top-5 right-5 w-24 h-24 rounded-[24px] overflow-hidden border border-white/20 shadow-lg rotate-3 bg-black/20">
<img alt="Abstract" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative z-10 flex justify-between items-end mt-2">
<div className="space-y-1">
<p className="text-xs text-white/80">Hiding In My Room</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-yellow-400 border border-[#E84BE8]"></div>
</div>
<button className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white/80">
<span className="iconify" data-icon="solar:add-linear" data-width="16"></span>
</button>
</div>
</div>
<button className="w-12 h-12 rounded-full bg-[#D9F026] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<svg aria-hidden="true" data-icon="solar:play-bold" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg>
</button>
</div>
</div>

<div className="bg-[#FF5533] w-full h-40 rounded-t-[32px] pt-6 pr-6 pb-6 pl-6 relative">
<span className="text-xs font-medium text-white/70 uppercase tracking-wider">New Horizons</span>
<div className="w-32 h-32 absolute top-0 right-0">
<img alt="Artist" className="-right-4 z-20 w-24 h-24 object-cover border-[#FF5533] border-4 rounded-full relative top-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div><h3 className="text-2xl font-semibold text-white tracking-tight mt-1">Black Rebel</h3>
</div>
</div>

<div className="z-40 bg-white/95 w-full border-white/40 rounded-t-[40px] border-t pt-3 pb-6 absolute bottom-0 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl">

<div className="flex mb-3 pt-3 pr-8 pb-3 pl-8 items-center justify-between">
<button className="text-neutral-800">
<svg aria-hidden="true" className="w-[24px] h-[24px]" data-icon="solar:pause-bold" data-icon-replaced="true" data-width="24" height="24" role="img" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(38, 38, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" fill="currentColor"></path></svg>
</button>
<div className="flex flex-col items-center">
<span className="text-sm font-semibold text-neutral-900">Indifference</span>
<span className="text-xs text-neutral-400">Malbec, Suzanne</span>
</div>
<button className="w-8 h-8 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-800">
<span className="iconify" data-icon="solar:add-linear" data-width="20"></span>
</button>
</div>

<div className="flex justify-around items-center px-4 pt-2 border-t border-neutral-100">
<button className="flex flex-col items-center gap-1.5 p-2 text-neutral-900">
<svg aria-hidden="true" data-icon="solar:magnifer-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path d="M18.5 18.5L22 22" strokeLinecap="round"></path></g></svg>
<span className="text-[10px] font-medium">Explore</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-2 text-neutral-900">
<svg aria-hidden="true" data-icon="solar:vinyl-record-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142Z" strokeLinecap="round"></path><path d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.5 6.5 0 0 1 0 9.193" strokeLinecap="round"></path></g></svg>
<span className="text-[10px] font-medium">Flow</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-2 text-neutral-400 hover:text-neutral-900">
<svg aria-hidden="true" className="" data-icon="solar:library-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></path><path d="M15 18H9" strokeLinecap="round"></path><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></path></g></svg>
<span className="text-[10px] font-medium">Collection</span>
</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
