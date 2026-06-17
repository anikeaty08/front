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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
aura: {
base: '#09040f',
pink: '#f472b6',
purple: '#c084fc',
light: '#fdf4ff'
}
}
}
}
}



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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-aura-purple/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-aura-pink/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-aura-base/60 backdrop-blur-xl border-b border-white/5 transition-all">
<div className="text-sm font-medium text-white/90 tracking-[0.3em]">its_Sakshi</div>
<div className="flex gap-6 text-sm font-light text-white/70 gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors hidden sm:block" href="#about">Aesthetic</a>
<a className="hover:text-white transition-colors hidden sm:block" href="#education">Background</a>
<a className="hover:text-white transition-colors hidden sm:block" href="#social">Connect</a>
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aura-purple/50 transition-all" style={{boxShadow: '0 0 15px rgba(192, 132, 252, 0.1)'}}>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</nav>
<main className="flex flex-col w-full pt-24 pb-32 items-center">

<section className="relative w-full max-w-6xl mx-auto min-h-[85vh] flex items-center justify-center px-6 mt-8 mb-32">
<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-aura-purple/30 to-aura-pink/20 blur-[80px] rounded-full -z-10"></div>
<div className="relative w-full h-full max-h-[700px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm" style={{boxShadow: '0 20px 80px -20px rgba(192, 132, 252, 0.3)'}}>
<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
<img alt="Hero Portrait" className="object-top filter contrast-[1.05] saturate-[1.1] img-hover bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87783727-eefd-42bc-85d0-e5c66136b3c7_320w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-aura-base via-aura-base/20 to-transparent"></div>
<div className="mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>

<div className="z-10 flex flex-col sm:mt-80 text-center border-white/10 border rounded-3xl mt-64 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl items-center" style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-3 drop-shadow-sm">
                    Sakshi
                </h1>
<p className="text-base sm:text-lg font-light tracking-wide text-aura-purple/90 mb-6 uppercase">
                    Digital Creator • Influencer
                </p>
<div className="flex gap-4">
<button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-sm font-medium transition-all flex items-center gap-2">
<span className="">Explore</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row gap-16 w-full max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center" id="about">
<div className="w-full md:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-aura-pink/20 to-transparent blur-2xl -z-10 rounded-full"></div>
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-white/5" style={{boxShadow: '20px 20px 60px rgba(0,0,0,0.4)'}}>
<img alt="Lifestyle" className="filter contrast-125 img-hover w-full h-full object-cover saturate-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87783727-eefd-42bc-85d0-e5c66136b3c7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-aura-purple/20 to-transparent mix-blend-soft-light pointer-events-none"></div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
<div className="flex items-center gap-2 text-aura-pink/80 text-xs font-medium tracking-[0.1em] uppercase">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>The Aesthetic</span>
</div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-snug">
                    Curating moments<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-purple to-aura-pink">in soft focus.</span>
</h2>
<p className="text-sm font-light text-white/60 leading-relaxed max-w-md">
                    Bringing a dreamy, high-end cinematic feel to everyday life. My content blends modern streetwear with soft feminine energy, capturing the beauty of subtle lighting and curated spaces.
                </p>
<div className="pt-4 flex gap-4">
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-xl font-medium tracking-tight text-white">0+</span>
<span className="text-xs font-light text-white/50 uppercase tracking-widest">Community</span>
</div>
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-xl font-medium tracking-tight text-white">0+</span>
<span className="text-xs font-light text-white/50 uppercase tracking-widest">Brand Collabs</span>
</div>
</div>
</div>
</section>

<section className="w-full py-32 relative flex justify-center">

<div className="absolute inset-y-0 w-full bg-white/[0.02] border-y border-white/5 backdrop-blur-md"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-2">Style &amp; Stance</h2>
<p className="text-sm font-light text-white/50">Modern fashion meets ethereal presence</p>
</div>
<div className="relative group mx-auto max-w-2xl perspective-1000">

<div className="absolute -inset-8 bg-gradient-to-b from-aura-purple/30 via-transparent to-aura-pink/20 blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-[3rem]"></div>

<div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 transform transition-transform duration-700 hover:-translate-y-2" style={{boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<img alt="Fashion Pose" className="object-center filter contrast-110 w-full h-full object-cover saturate-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/878e3873-3b2e-4109-9151-8c0f3e636a8f_1600w.jpg"/>

<div className="absolute bottom-8 left-8 flex flex-col gap-3">
<div className="flex text-xs font-light text-white bg-black/40 w-fit border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-aura-pink shadow-[0_0_8px_#f472b6]"></div>
                                Streetwear Mix
                            </div>
<div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-light text-white flex items-center gap-2 w-fit ml-6">
<div className="w-1.5 h-1.5 rounded-full bg-aura-purple shadow-[0_0_8px_#c084fc]"></div>
                                Confident Aura
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">
<div className="flex flex-col items-start space-y-6 md:order-2">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
                    Digital Persona
                </h2>
<p className="text-sm font-light text-white/60 leading-relaxed">
                    Connecting intimately with the audience through a carefully curated lens. Minimalistic UI aesthetics paired with glowing, candid selfie angles that feel both approachable and high-fashion.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-aura-purple hover:text-aura-pink transition-colors group" href="#">
                    View Feed 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="relative w-full max-w-sm mx-auto md:order-1">

<div className="absolute top-10 -left-10 w-32 h-32 bg-aura-purple/30 blur-[40px] rounded-full -z-10"></div>
<div className="absolute bottom-10 -right-10 w-40 h-40 bg-aura-pink/20 blur-[50px] rounded-full -z-10"></div>

<div className="w-full rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 p-0.5">
<img alt="Avatar" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-white/90">lina.aesthetic</span>
<span className="text-[10px] font-light text-white/40">Tokyo, Japan</span>
</div>
</div>
<iconify-icon className="text-white/50" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>

<div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 relative">
<img alt="Selfie" className="filter w-full h-full object-cover saturate-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/596eda60-2831-4dbd-992b-a6887d982876_800w.jpg"/>
<div className="bg-gradient-to-b from-transparent via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="flex items-center justify-between px-2 mb-3">
<div className="flex items-center gap-4 text-white/80">
<iconify-icon className="hover:text-aura-pink cursor-pointer transition-colors" icon="solar:heart-linear" width="24"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:chat-round-linear" width="22"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:plain-linear" width="22"></iconify-icon>
</div>
<iconify-icon className="text-white/80 hover:text-white cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>

<div className="px-2 pb-2">
<span className="text-xs font-medium text-white/90"> likes</span>
<p className="text-xs font-light text-white/70 mt-1 line-clamp-2">
<span className="font-medium text-white/90 mr-1">lina.aesthetic</span>
                            Lost in neon lights and soft melodies tonight. 💜✨ City vibes hitting differently. #neon #aesthetic
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row-reverse items-center gap-16 relative" id="education">
<div className="w-full md:w-1/2 relative">

<div className="absolute -inset-4 bg-gradient-to-l from-aura-purple/20 to-transparent blur-3xl -z-10 rounded-full"></div>

<div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm" style={{boxShadow: '-20px 20px 60px rgba(0,0,0,0.4)'}}>
<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
<img alt="Creative Workspace" className="w-full h-full object-cover filter contrast-[1.1] saturate-[1.15] img-hover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-aura-pink/10 to-transparent mix-blend-soft-light pointer-events-none"></div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
<div>
<div className="flex items-center gap-2 text-aura-purple text-xs font-medium tracking-[0.1em] uppercase mb-3">
<iconify-icon icon="solar:diploma-linear" width="16"></iconify-icon>
<span>Background</span>
</div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-snug">
                        Cultivating the<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-pink to-aura-purple">creative mind.</span>
</h2>
</div>
<div className="flex flex-col gap-4 w-full">

<div className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
<div className="w-12 h-12 rounded-full bg-aura-purple/10 flex items-center justify-center border border-aura-purple/30 shrink-0 shadow-[0_0_15px_rgba(192,132,252,0.2)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-aura-purple/40 to-transparent opacity-50"></div>
<iconify-icon className="text-aura-purple relative z-10" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white/90 tracking-tight">Digital Marketing &amp; Branding</span>
<span className="text-xs font-light text-white/50 mt-0.5">Tokyo Creative Arts Institute</span>
</div>
<div className="ml-auto text-xs font-medium text-aura-pink/80 bg-aura-pink/10 px-3 py-1.5 rounded-full border border-aura-pink/20 whitespace-nowrap">
                            2020—2022
                        </div>
</div>

<div className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
<div className="w-12 h-12 rounded-full bg-aura-pink/10 flex items-center justify-center border border-aura-pink/30 shrink-0 shadow-[0_0_15px_rgba(244,114,182,0.2)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-aura-pink/40 to-transparent opacity-50"></div>
<iconify-icon className="text-aura-pink relative z-10" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white/90 tracking-tight">Fashion Design &amp; Styling</span>
<span className="text-xs font-light text-white/50 mt-0.5">Seoul Institute of Design</span>
</div>
<div className="ml-auto text-xs font-medium text-aura-purple/80 bg-aura-purple/10 px-3 py-1.5 rounded-full border border-aura-purple/20 whitespace-nowrap">
                            2018—2020
                        </div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative gap-x-12 gap-y-12 items-center" id="social">

<div className="w-full lg:w-1/2 flex flex-col space-y-10">
<div className="">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">The Ecosystem</h2>
<p className="text-sm font-light text-white/60 max-w-md leading-relaxed">Join the community across different dimensions. Discover behind-the-scenes life, long-form cinematic content, and real-time thoughts.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-1000">

<div className="overflow-hidden group hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(244,114,182,0.15)] hover:border-aura-pink/30 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl" onclick="window.location.href='https://www.instagram.com/sakshirajput024_?igsh=MTIxeWdkbW5pZmUzNg=='" role="button">
<div className="-top-10 -right-10 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-aura-pink to-orange-400 opacity-20 w-32 h-32 absolute blur-2xl cursor-pointer" onclick="window.location.href='https://www.instagram.com/sakshirajput024_?igsh=MTIxeWdkbW5pZmUzNg=='" role="button"></div>
<iconify-icon className="text-white/90 mb-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" icon="solar:camera-minimalistic-linear" width="32"></iconify-icon>
<div className="text-sm font-medium text-white tracking-tight mb-1">Instagram</div>
<div className="text-xs font-light text-white/50 mb-6">@sakshirajput024_</div>
<div className="flex mt-auto items-center justify-between">
<span className="text-xl font-medium text-white drop-shadow-sm">3.6 K</span>
<button className="text-aura-base hover:bg-white/90 transition-colors text-xs font-medium bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(255,255,255,0.3)]">Follow</button>
</div>
</div>

<div className="overflow-hidden group hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(239,68,68,0.1)] hover:border-red-500/30 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
<iconify-icon className="text-white/90 mb-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" icon="solar:play-circle-linear" width="32"></iconify-icon>
<div className="text-sm font-medium text-white mb-1 tracking-tight">YouTube</div>
<div className="text-xs font-light text-white/50 mb-6">Lina Diaries</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white drop-shadow-sm">850K</span>
<button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors">Subscribe</button>
</div>
</div>

<div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:border-white/30">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-[0.05] blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
<iconify-icon className="text-white/90 mb-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" icon="solar:hashtag-linear" width="32"></iconify-icon>
<div className="text-sm font-medium text-white mb-1 tracking-tight">Threads</div>
<div className="text-xs font-light text-white/50 mb-6">@lina.aesthetic</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white drop-shadow-sm">420K</span>
<button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors">Follow</button>
</div>
</div>

<div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
<iconify-icon className="text-white/90 mb-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<div className="text-sm font-medium text-white mb-1 tracking-tight">Facebook</div>
<div className="text-xs font-light text-white/50 mb-6">Lina Official</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white drop-shadow-sm">2.1M</span>
<button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors">Follow</button>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex lg:justify-end lg:mt-0 w-full mt-10 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-aura-purple/20 blur-[100px] rounded-full -z-10 mix-blend-screen pointer-events-none"></div>
<div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-md" style={{boxShadow: '0 30px 80px -20px rgba(192, 132, 252, 0.4)'}}>
<div className="relative w-full h-full rounded-[2rem] overflow-hidden">
<img alt="Neon Glow Influencer Phone" className="object-center filter contrast-[1.1] saturate-[1.2] img-hover w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50126e2d-f99a-4695-8f79-288ea0ee3ec1_800w.jpg"/>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] p-3.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-transform">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-aura-pink to-aura-purple flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(244,114,182,0.5)]">
<iconify-icon className="text-white drop-shadow-md" icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight">New milestone reached!</span>
<span className="text-xs font-light text-white/70">Thank you for 1.2M ❤️</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full min-h-[70vh] mt-24 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Aura Background" className="filter blur-[4px] contrast-125 w-full h-full object-cover saturate-150 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9a47d06-e753-4635-944e-9dcafa1ec118_3840w.jpg"/>
<div className="absolute inset-0 bg-aura-base/80 mix-blend-multiply"></div>

<div className="bg-gradient-to-t from-aura-base via-aura-purple/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-aura-pink/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
<div className="mb-6 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md inline-block">
<iconify-icon className="text-aura-purple block m-2" icon="solar:sparkles-linear" width="24"></iconify-icon>
</div>
<h2 className="text-4xl sm:text-6xl font-medium tracking-tight mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                    Capture the Aura
                </h2>
<p className="text-sm sm:text-base font-light text-white/70 mb-10 max-w-md mx-auto">
                    Open for high-end collaborations, styling partnerships, and digital campaigns. Let's create visual poetry together.
                </p>
<a className="px-8 py-3.5 rounded-full bg-white text-aura-base text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2" href="mailto:hello@example.com" style={{boxShadow: '0 0 30px rgba(255,255,255,0.2)'}}>
<span className="">Let's Collaborate</span>
</a>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-aura-base to-transparent z-10"></div>
</section>
</main>
<footer className="w-full py-8 text-center border-t border-white/5 bg-aura-base relative z-20">
<p className="uppercase text-xs font-light text-white/40 tracking-wide">© 2024 sukku Digital. All rights reserved.</p>
</footer>

    </>
  );
}
