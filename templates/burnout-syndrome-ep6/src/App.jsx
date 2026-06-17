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



        // Simple interactive hover effect for the background gradient (subtle)
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Just subtly shifting the body selection color or similar if we had JS animation
            // Kept simple for HTML/Tailwind focus
        });
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>

<main className="w-full max-w-md px-6 py-12 flex flex-col gap-8">

<header className="flex flex-col animate-fade-in text-center items-center">
<div className="relative mb-6 group cursor-pointer">
<div className="absolute -inset-0.5 bg-gradient-to-tr from-orange-500/50 to-neutral-700/50 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
<div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="Series Poster" className="hover:grayscale-0 transition duration-500 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/664fe64f-d978-4e21-9a63-b79a3c8fbfa5_320w.jpg?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-[10px] font-medium px-2 py-0.5 rounded-full ring-4 ring-neutral-950 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>EP.6</span>
</div>
</div>
<h1 className="text-xl font-medium text-white tracking-tight mb-1">~✨(ดู+ซีรีส์)=&gt;''ภาวะรักคนหมดไฟ ''EP.6 ซับไทย+พากย์ไทย ดูฟรี Burnout Syndrome ตอนที่6 UNCUT ดูฟรี ย้อนหลังเต็มเรื่อง </h1>
<p className="text-sm font-light text-neutral-500 tracking-wide mb-3">ซีรีส์“Burnout Syndrome ภาวะรักคนหมดไฟ” EP.6 ออกอากาศวันพุธที่ 7 มกราคม 2569 เวลา 20.30 น. ทางช่อง GMM25 ดูออนไลน์ เวลา 21.30 น. ได้ทางแอปพลิเคชั่น iQIYI และดูฟรีเต็มอิ่มครบทุกตอน</p>
<div className="inline-flex gap-2 text-xs text-neutral-400 bg-white/5 border-white/5 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">ตอนใหม่พร้อมให้รับชมแล้ววันนี้</div>
</header>

<div className="w-full animate-fade-in delay-100">
</div>

<nav className="flex flex-col gap-3 w-full animate-fade-in delay-200">

<a className="group flex items-center justify-between hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 bg-neutral-900 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative" href="https://t.co/2BLf1J7YKn">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-red-600/10 text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</div>
<div className="flex flex-col text-left">
<span className="group-hover:text-red-400 transition-colors text-sm font-medium text-white">สตรีมเลย ==&gt; "ภาวะรักคนหมดไฟ”EP.6 UNCUT on YouTube</span>
<span className="text-xs text-neutral-500">4K Ultra HD • Subtitles</span>
</div>
</div>
<svg aria-hidden="true" className="iconify text-neutral-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<a className="group flex items-center justify-between hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 bg-transparent border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative" href="https://t.co/2BLf1J7YKn">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-yellow-600/10 text-yellow-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:tv-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 21h10"></path><rect className="" height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-neutral-200">สตรีมเลย ==&gt; "ภาวะรักคนหมดไฟ”EP.6 UNCUT on Viu</span>
<span className="text-xs text-neutral-500">Uncut Version</span>
</div>
</div>
<svg aria-hidden="true" className="iconify text-neutral-600 group-hover:text-neutral-300 transition-colors iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</nav>

<footer className="mt-4 flex flex-col items-center gap-6 animate-fade-in delay-300">
<div className="flex items-center gap-4">
<a className="p-2 text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="p-2 text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="p-2 text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="text-center space-y-2">
<p className="text-xs text-neutral-600 font-light">
                    © 2024 Production Co. All rights reserved.
                </p>
<div className="flex items-center justify-center gap-2 text-xs text-neutral-700">
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Designed for Burnout Syndrome</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
</div>
</div>
</footer>
</main>


    </>
  );
}
