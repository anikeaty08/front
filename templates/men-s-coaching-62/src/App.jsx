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
      <div className="absolute top-0 w-full -z-10 bg-cover bg-center h-3/4" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03ec481d-fdda-41fa-a20c-98d33ca91edf_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] to-transparent from-slate-800/20 via-slate-950/0" style={{}}></div>
</div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/5 bg-slate-950/80" style={{}}>
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg tracking-tighter font-medium flex items-center gap-2 text-white">
<span className="w-8 h-8 flex items-center justify-center rounded-md text-sm font-semibold tracking-tighter bg-slate-100 text-black" style={{}}>SK</span>
<span className="opacity-80">SonToKing</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#">Guide</a>
<a className="transition-colors hover:text-white" href="#">Manifesto</a>
<a className="px-4 py-2 rounded-full border transition-all text-white bg-slate-800 hover:bg-slate-700 border-white/10" href="#" style={{}}>Start Journey</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col z-10 pt-24 pr-6 pb-20 pl-6 relative items-center">
<div className="text-center max-w-3xl mr-auto ml-auto space-y-8">
<div className="inline-flex text-xs font-medium tracking-wide border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center text-slate-300 bg-white/5 border-white/10" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{}}></span>
                THE PATH TO MANHOOD
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium tracking-tighter text-white">
                8-Step Guide: <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">From Son to King</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light max-w-2xl mr-auto ml-auto text-slate-400" style={{}}>
                Welcome to this practical 8-step guide designed to walk you through the journey of discovering your true identity and leadership. Each part will bring you one step closer to becoming the man you are meant to be.
            </p>
</div>

<div className="w-full max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group transition-all duration-500 hover:border-white/10 hover:bg-slate-900/60 bg-slate-900/40 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:fingerprint" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 01</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Roots of the King: Embracing Your Origins</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    In this step, you will explore the foundations of your identity by understanding your origins and family heritage. This is about recognizing how your past shapes you, while also embracing the unique strengths God has given you.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:compass" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 02</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>The Call to Responsibility: Owning Your Path</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    Here, you will learn how to take full responsibility for your life, moving from a place of passivity to actively shaping your destiny. This step emphasizes personal accountability in the light of faith.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:sword" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11 19l-6-6m0 8l-2-2m5-3l-4 4m5.5-2.5L21 6V3h-3L6.5 14.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 03</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Heart of the Warrior: Finding Inner Strength</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    This step focuses on cultivating inner strength and emotional resilience. Drawing on the wisdom of your faith, you'll learn to master your emotions and act with courage.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:telescope" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 04</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Visionary Leadership: Seeing the Bigger Picture</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    In this step, you'll develop a clear vision for your life’s purpose. Rooted in your faith, you'll learn to lead with foresight and inspire others by having a God-centered vision.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 05</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Discipline and Honor: Building Your Kingdom Daily</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    This step is about establishing daily discipline and living with honor. Through consistent habits and faith-driven actions, you'll build a life that reflects your values.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 06</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Brotherhood and Mentorship: Walking with Allies</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    Learn the importance of surrounding yourself with like-minded men and seeking mentors. This step highlights the strength found in brotherhood and spiritual fellowship.
                </p>
</div>

<div className="group relative p-8 rounded-2xl border transition-all duration-500 bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60" style={{}}>
<div className="absolute top-8 right-8 group-hover:text-white transition-colors duration-500 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:hand-heart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path><path d="m14.45 13.39l5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837a.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95M2 15l6 6"></path><path d="m7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"></path></g></svg>
</div>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-6 uppercase" style={{}}>Step 07</div>
<h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-white text-slate-100" style={{}}>Servant Leadership: Leading by Serving</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    This step teaches you the power of servant leadership, following Christ’s example. You'll learn to lead by serving others and focusing on what you can give, rather than what you can get.
                </p>
</div>

<div className="group relative p-8 rounded-2xl bg-gradient-to-br border transition-all duration-500 from-slate-900/40 to-slate-800/20 border-white/10 hover:border-white/20" style={{}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" style={{}}></div>
<div className="absolute top-8 right-8 group-hover:text-cyan-200 transition-colors duration-500 text-slate-400" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:crown" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-xs font-medium tracking-widest text-cyan-500/80 mb-6 uppercase" style={{}}>Step 08</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-white">Legacy of the King: Leaving a Lasting Impact</h3>
<p className="text-sm font-normal leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400" style={{}}>
                    In the final step, you'll focus on the legacy you leave behind. This is about building a life that leaves a lasting, positive impact on your family and community.
                </p>
</div>
</div>

<div className="mt-24 mb-12 text-center">
<h4 className="text-2xl font-medium tracking-tight mb-6 text-white">Ready to begin the ascent?</h4>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-3 rounded-full text-sm font-medium transition-colors w-full sm:w-auto bg-white text-black hover:bg-slate-200" style={{}}>
                    Download Full Guide
                </button>
<button className="px-8 py-3 text-sm font-medium transition-colors flex items-center gap-2 text-slate-400 hover:text-white" style={{}}>
                    Read Introduction
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</main>

<footer className="border-t py-12 border-white/5 bg-slate-950" style={{}}>
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-500 text-sm" style={{}}>
                © 2024 SonToKing. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
