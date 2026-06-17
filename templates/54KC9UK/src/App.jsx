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



document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  /* ---------- Screen Switcher ---------- */
  const switchTo = id => {
    document.querySelectorAll(".screen").forEach(el =>
      el.classList.toggle("hidden", el.id !== id)
    );
  };
  document.querySelectorAll("[data-target]").forEach(btn => {
    btn.addEventListener("click", () => switchTo(btn.dataset.target));
  });

  /* ---------- Recording Overlay ---------- */
  const overlay = document.getElementById("overlay");
  const showOverlay = () => {
    overlay.classList.remove("pointer-events-none");
    overlay.style.opacity = 1;
  };
  const hideOverlay = () => {
    overlay.style.opacity = 0;
    setTimeout(() => overlay.classList.add("pointer-events-none"), 500);
  };
  document.getElementById("recordBtn").onclick = showOverlay;
  document.getElementById("stopRecord").onclick = hideOverlay;

  /* ---------- Swipe / Key Navigation ---------- */
  let startX = 0, startY = 0;
  const handleMove = (endX, endY) => {
    const dx = endX - startX;
    const dy = endY - startY;
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0)       switchTo("ideasScreen");     // swipe left
      else if (dx > 0)  switchTo("settingsScreen");  // swipe right
    }
  };

  document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  document.addEventListener("touchend", e => {
    handleMove(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  });

  /* Keyboard arrows as fallback */
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft")  switchTo("ideasScreen");
    if (e.key === "ArrowRight") switchTo("settingsScreen");
  });
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
      

<main className="relative z-0">

<section className="screen min-h-screen flex flex-col items-center justify-center gap-14 px-6" id="recordScreen">

<div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40" id="radialNav">
<div className="relative">

<button aria-label="Start recording" className="relative z-10 pointer-events-auto bg-white/20 backdrop-blur-md border border-white/30 shadow-xl text-white p-14 sm:p-16 rounded-full focus:outline-none" id="recordBtn">
<span className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{animationDuration: '3.5s'}}></span>
<span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{animationDuration: '5s'}}></span>
<i className="relative w-10 h-10 stroke-[1.5]" data-lucide="mic"></i>
</button>

<div className="absolute inset-0 flex items-center justify-center animate-spin" style={{animationDuration: '22s'}}>

<button aria-label="Ideas" className="orbitBtn pointer-events-auto absolute -top-24 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md border border-white/40 shadow text-white p-4 rounded-full hover:bg-white/40 focus:outline-none" data-target="ideasScreen">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="list"></i>
</button>

<button aria-label="Settings" className="orbitBtn pointer-events-auto absolute top-24 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md border border-white/40 shadow text-white p-4 rounded-full hover:bg-white/40 focus:outline-none" data-target="settingsScreen">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
</button>
</div>
</div>
</div>

<div className="text-center space-y-2 animate-[fadeIn_.8s_ease-out_.4s_both] mt-64 sm:mt-72">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-800">Capture the moment</h1>
<p className="text-neutral-600 text-sm sm:text-base">Tap the glowing mic, speak, and let inspiration flow.</p>
</div>
</section>

<section className="screen min-h-screen hidden flex flex-col gap-6 px-4 py-6 animate-[fadeIn_.6s_ease-out_.2s_both]" id="ideasScreen">

<header className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Ideas</h2>
<button className="text-neutral-500 hover:text-neutral-800 transition focus:outline-none" data-target="recordScreen">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>
</header>

<div className="flex-1 overflow-y-auto space-y-4">

<article className="rounded-xl border border-neutral-200 bg-white/60 backdrop-blur p-4 flex items-start gap-3 hover:shadow-sm transition">
<div className="rounded-lg bg-indigo-500/10 p-3">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<h4 className="font-medium mb-1 leading-tight">AI-powered pitch deck generator</h4>
<p className="text-sm text-neutral-600 line-clamp-2">“What if founders could just speak their idea and instantly get a polished slide deck…”</p>
<div className="flex items-center gap-2 mt-2 text-xs text-neutral-500">
<span>2 min ago</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>1:14 audio</span>
</div>
</div>
</article>

</div>
</section>

<section className="screen min-h-screen hidden flex flex-col gap-6 px-4 py-6 animate-[fadeIn_.6s_ease-out_.2s_both]" id="settingsScreen">

<header className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Settings</h2>
<button className="text-neutral-500 hover:text-neutral-800 transition focus:outline-none" data-target="recordScreen">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>
</header>

<div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur divide-y divide-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-5 hover:bg-neutral-50/60 transition">
<span className="font-medium">Profile</span>
<i className="w-4 h-4 stroke-[1.5] text-neutral-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-5 hover:bg-neutral-50/60 transition">
<span className="font-medium">Billing</span>
<i className="w-4 h-4 stroke-[1.5] text-neutral-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-5 hover:bg-neutral-50/60 transition">
<span className="font-medium">Help &amp; Feedback</span>
<i className="w-4 h-4 stroke-[1.5] text-neutral-400" data-lucide="chevron-right"></i>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 bg-white/80 backdrop-blur-lg flex flex-col items-center justify-center gap-10 opacity-0 pointer-events-none transition-opacity duration-500 z-50" id="overlay">
<div className="flex flex-col items-center gap-6">
<div className="relative">
<span className="absolute inset-0 rounded-full animate-ping bg-neutral-900/30" style={{animationDuration: '2.5s'}}></span>
<span className="absolute inset-0 rounded-full animate-ping bg-neutral-900/20" style={{animationDuration: '4s'}}></span>
<div className="relative bg-neutral-900 text-white p-8 rounded-full">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="mic"></i>
</div>
</div>
<p className="text-lg font-medium">Listening…</p>
<button className="flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 rounded-full shadow hover:bg-neutral-800 transition focus:outline-none" id="stopRecord">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="square"></i>
      Stop
    </button>
</div>
</div>



    </>
  );
}
