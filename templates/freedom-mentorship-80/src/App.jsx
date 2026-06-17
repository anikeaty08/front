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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Flashlight Effect Logic
            document.querySelectorAll('.flashlight-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>
</div>

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -z-10 pointer-events-none"></div>

<nav className="fixed z-50 flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex gap-8 shadow-black/50 bg-black/60 w-full max-w-2xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between">

<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="flex bg-center font-bold tracking-tighter w-20 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e78a823a-b2ba-4af7-934c-a1a9a39c0fca_320w.png)] bg-cover rounded-none scale-105 items-center justify-center"></div>
</a>

<div className="hidden md:flex gap-6 text-xs font-medium text-zinc-400 rounded-sm gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors" href="#mentorship">1-1 Mentorship</a>
<a className="hover:text-white transition-colors" href="#circle">Inner Circle</a>
<a className="hover:text-white transition-colors border-0 ring-1 rounded-none" href="#testimonials" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>Success Stories</a>
</div>

<a className="hover:bg-zinc-200 transition-colors flex items-center gap-2 text-xs font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#bot">
<span className="" style={{}}>Luma Coming Soon...</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>
<main className="z-10 pt-40 pb-24 relative">

<section className="container flex flex-col text-center max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6 items-center">


<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600 mb-8 leading-[1]" style={{animationPlayState: 'running', opacity: '1'}}>
                Escape the 9-5.<br/>
                Build Your Empire.
            </h1>

<p className="reveal delay-200 md:text-lg leading-relaxed text-base font-normal text-zinc-400 max-w-xl mr-auto mb-12 ml-auto" style={{animationPlayState: 'running', opacity: '1'}}>
                We escaped the rat race. Now we help you do the same. Join the mentorship, enter the circle, and automate your freedom.
            </p>

</section>

<section className="container max-w-6xl mr-auto mb-32 ml-auto pr-6 pl-6" id="mentorship">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-7 md:p-12 flashlight-card group flex flex-col min-h-[500px] -multi bg-black/40 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm justify-between" style={{'--mouse-x': '437px', '--mouse-y': '27px'}}>
<div className="relative z-10">
<div className="flex group-hover:bg-white group-hover:text-black transition-colors duration-500 bg-slate-50 w-12 h-12 border-white/10 border rounded-xl mb-8 items-center justify-center">
<iconify-icon className="" height="24" icon="solar:notebook-minimalistic-outline" style={{color: 'rgb(0, 0, 0)'}} width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">1-1 Mentorship</h2>
<p className="leading-relaxed text-sm text-zinc-400 max-w-md">We've built the income, the freedom, and the lifestyle. Now we help you do the same. Direct mentorship, weekly strategy calls, and accountability until you get there.</p>
</div>

<div className="z-10 mt-12 relative flex flex-col items-start gap-8">

<div className="space-y-4 w-full">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" style={{}}>Private Weekly Calls</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" style={{}}>Your Custom Playbook</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Sourcing Secrets We Don't Post</span>
</div>
</div>

<a className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-6 py-2.5 transition-all group/btn" href="mentorship.html">
                            Learn More
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6" id="circle">

<div className="flex-1 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 flashlight-card relative overflow-hidden group" style={{'--mouse-x': '87px', '--mouse-y': '154px'}}>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-widest">Exclusive</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">The Inner Circle</h3>
<p className="text-sm text-zinc-400">Get in the room with people who think bigger. A private network of driven individuals all building toward the same thing.</p>
</div>
</div>

<div className="flex flex-col flashlight-card text-center bg-zinc-900/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 items-center justify-center" style={{'--mouse-x': '117px', '--mouse-y': '168.75px'}}>
<h3 className="text-xl font-medium tracking-tight mb-2">Ready to start?</h3>
<p className="text-zinc-500 text-xs mb-6">Slots are limited each month.</p>
<a className="hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm font-semibold text-black bg-white w-full rounded-lg pt-3 pb-3" href="#">
                            Book a Call
                            <iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32">
<div className="flex mb-16 items-end justify-between">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[0.95]">
                    Real Results.
                    No Fluff.
                </h2>
<div className="hidden md:block text-right">
<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Verified Outcomes</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-3 relative p-8 bg-black border border-white/10 rounded-2xl flashlight-card overflow-hidden flex flex-col justify-between min-h-[300px]" style={{'--mouse-x': '842px', '--mouse-y': '282.75px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Live Updates</span>
</div>
<p className="text-sm text-zinc-500 mb-1">Total Mentee Profit Generated (30d)</p>
<h3 className="md:text-6xl tabular-nums text-5xl font-semibold text-white tracking-tighter" style={{}}>£223,912</h3>
</div>

<div className="absolute bottom-0 left-0 right-0 h-48 opacity-50 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 500 150">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(16, 185, 129, 0.2)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(16, 185, 129, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,150 L0,120 Q50,110 100,115 T200,90 T300,60 T400,40 T500,10 L500,150 Z" fill="url(#gradient)"></path>
<path className="animate-path" d="M0,120 Q50,110 100,115 T200,90 T300,60 T400,40 T500,10" fill="none" stroke="#10b981" strokeWidth="3"></path>
</svg>
</div>
</div>

<div className="flashlight-card flex flex-col bg-black border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" onclick="window.location.href='https://x.com/GainzFBA/status/1999228856579068295?s=20'" role="button" style={{'--mouse-x': '348px', '--mouse-y': '250.75px'}}>
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="flex text-xs text-zinc-500 bg-zinc-800 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b27fc434-cb3f-4691-9ce4-91eb18e71de3_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center">JP</div>
<div className="flex flex-col">
<span className="leading-tight text-sm font-bold text-white" style={{}}>Gainz</span>
<span className="text-xs text-zinc-500" style={{}}>@GainzFBA</span>
</div>
</div>
<iconify-icon className="text-white" icon="ri:twitter-x-fill" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-300">Yeah December is ramping up. Last 7 days print. @TheFreeTwo</p>

<div className="bg-center bg-zinc-900 w-full h-48 bg-cover border-white/10 border rounded-xl mt-2" style={{backgroundImage: 'url(\'https://i.ibb.co/mFH16j01/image.png\')'}}></div>
<div className="text-[10px] text-zinc-600 font-mono mt-auto pt-2">9:41 AM · Oct 24, 2024</div>
</div>

<div className="flashlight-card flex flex-col bg-black border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" onclick="window.location.href='https://x.com/LB_FBA/status/2002324058306711847?s=20'" role="button" style={{'--mouse-x': '321px', '--mouse-y': '131.75px'}}>
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="flex text-xs text-zinc-500 bg-zinc-800 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/461f358e-1651-4648-92a6-86d508985d28_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center">JP</div>
<div className="flex flex-col">
<span className="leading-tight text-sm font-bold text-white">LB📈</span>
<span className="text-xs text-zinc-500">@LB_FBA</span>
</div>
</div>
<iconify-icon className="text-white" icon="ri:twitter-x-fill" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-300">Not only hit my best last 30 days but also reached 100k for the year with 10 days to go! 
Can’t wait to see what 2026 brings. 
Big shoutout to 
@TheFreeTwo
 🫡</p>

<div className="bg-center bg-zinc-900 w-full h-48 bg-cover border-white/10 border rounded-xl mt-2" style={{backgroundImage: 'url(\'https://i.ibb.co/C51w7Jf1/image.png\')'}}></div>
<div className="text-[10px] text-zinc-600 font-mono mt-auto pt-2">9:41 AM · Oct 24, 2024</div>
</div>

<div className="flashlight-card flex flex-col bg-black border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" onclick="window.location.href='https://x.com/Renz_FBA/status/1999259654678048977?s=20'" role="button" style={{'--mouse-x': '330px', '--mouse-y': '190.75px'}}>
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="flex text-xs text-zinc-500 bg-zinc-800 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/969b6afb-3f13-4ce9-99a0-d99f50e4e1f7_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center">JP</div>
<div className="flex flex-col">
<span className="leading-tight text-sm font-bold text-white">Renz</span>
<span className="text-xs text-zinc-500">@Renz_FBA</span>
</div>
</div>
<iconify-icon className="text-white" icon="ri:twitter-x-fill" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-300">Time to kick off my first post with some results from today. @TheFreeTwo</p>

<div className="bg-center bg-zinc-900 w-full h-48 bg-cover border-white/10 border rounded-xl mt-2" style={{backgroundImage: 'url(\'https://i.ibb.co/Mxpnwr9v/image.png\')'}}></div>
<div className="text-[10px] text-zinc-600 font-mono mt-auto pt-2">9:41 AM · Oct 24, 2024</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden border-white/10 mb-32 pt-16 pb-16 relative">
<div className="container flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium tracking-tight mb-2" style={{}}>Learn The Formula Now.</h2>
<p className="text-sm text-zinc-400" style={{}}>Our battle-tested system that took us from 0 to £3m+ in sales.</p>
</div>
<button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full overflow-hidden hover:border-white transition-colors">
<span className="relative z-10 flex items-center gap-2">
                        Apply Now
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="z-10 flex items-center justify-center gap-2 group-hover:opacity-100 transition-opacity duration-300 text-black bg-slate-50 opacity-0 absolute top-0 right-0 bottom-0 left-0">
                        Apply Now
                        <iconify-icon className="" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</section>

<section className="container mx-auto px-6 max-w-lg mb-32">
<h2 className="text-center text-sm font-semibold tracking-tight uppercase text-zinc-500 mb-8">Meet the Team</h2>

<div className="flashlight-card flex flex-col bg-black border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-center" style={{'--mouse-x': '82px', '--mouse-y': '108.75px'}}>

<div className="flex group items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex group-hover:ring-white/30 transition-all bg-center text-sm font-medium text-white bg-zinc-800 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e5069d4-7a7f-4871-bc17-7a111372de77_320w.jpg)] bg-cover ring-white/10 ring-2 rounded-full items-center justify-center"></div>
<span className="text-sm font-semibold text-white tracking-tight">Aiden</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-white transition-colors hover:bg-white/10 text-zinc-500 bg-white/5 rounded-full pt-2 pr-2 pb-1 pl-2" href="https://www.instagram.com/aiden_tft?igsh=MXdveWFvam5hamtkbA%3D%3D&amp;utm_source=qr">
<iconify-icon className="" height="24" icon="ri:instagram-line" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
<a className="hover:text-white transition-colors hover:bg-white/10 text-zinc-500 bg-white/5 rounded-full pt-2 pr-2 pb-1 pl-2" href="https://www.tiktok.com/@aiden_tft?_r=1&amp;_t=ZN-93TvSkT8NtO">
<iconify-icon className="" height="24" icon="ri:tiktok-fill" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
</div>
</div>

<div className="h-px bg-white/10 w-full"></div>

<div className="flex group items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex group-hover:ring-white/30 transition-all bg-center text-sm font-medium text-white bg-zinc-800 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a1fbada-7e5e-4bba-95ba-8ce03a009e34_320w.jpg)] bg-cover ring-white/10 ring-2 rounded-full items-center justify-center"></div>
<span className="text-sm font-semibold text-white tracking-tight">Harrison</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-white transition-colors hover:bg-white/10 text-zinc-500 bg-white/5 rounded-full pt-2 pr-2 pb-1 pl-2" href="https://www.instagram.com/harrison_tft?igsh=MXRwdTVpbnRqMm1naA%3D%3D&amp;utm_source=qr">
<iconify-icon className="" height="24" icon="ri:instagram-line" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
<a className="hover:text-white transition-colors hover:bg-white/10 text-zinc-500 bg-white/5 rounded-full pt-2 pr-2 pb-1 pl-2" href="https://www.tiktok.com/@harrisontft?_r=1&amp;_t=ZN-93TvRx2OSgw">
<iconify-icon className="" height="24" icon="ri:tiktok-fill" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl mb-32 relative" id="testimonials">
<div className="text-center mb-16">
</div>
<div className="relative">
<div className="absolute -top-8 -left-8 text-white/5 transform -scale-x-100">
<iconify-icon icon="solar:quote-up-square-linear" width="80"></iconify-icon>
</div>
</div>
</section>

<section className="overflow-hidden bg-gradient-to-b from-black to-zinc-900/40 border-white/10 border-t pt-32 pb-32 relative" id="bot">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container z-10 text-center max-w-xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex bg-center w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b129bfa-31b7-43ab-a168-70270552cd38_320w.png)] max-w-full bg-cover border-gray-950 border rounded-2xl mb-8 items-center justify-center">
</div>
<h2 className="md:text-5xl text-4xl font-medium tracking-tight mb-6">Luma Coming Soon...</h2>
<p className="leading-relaxed text-sm text-zinc-400 mb-10">Institutional-grade arbitrage detection built for serious sellers. Better leads. Faster alerts. Higher margins.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all font-mono uppercase" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Join Waitlist
                    </button>
</form>
<p className="text-zinc-600 text-[10px] mt-4 uppercase tracking-widest">Limited spots for Beta V1</p>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black py-12">
<div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">TheFreeTwo</span>
<span className="text-zinc-600 text-xs">© 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:twitter-x-fill" width="16"></iconify-icon>
</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
