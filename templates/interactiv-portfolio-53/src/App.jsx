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



        // --- 1. Spotlight Effect Logic ---
        const gridContainer = document.getElementById('gridContainer');
        const cards = document.querySelectorAll('.spotlight-card');

        gridContainer.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- 2. Custom Cursor Logic ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');
        const hoverables = document.querySelectorAll('.hoverable');

        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows instantly
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Smooth follow for circle
        function animateCursor() {
            const dx = mouseX - circleX;
            const dy = mouseY - circleY;
            
            circleX += dx * 0.15;
            circleY += dy * 0.15;
            
            cursorCircle.style.left = circleX + 'px';
            cursorCircle.style.top = circleY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects for cursor
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // --- 3. Music Player Logic ---
        const playBtn = document.getElementById('playBtn');
        const playIcon = document.getElementById('playIcon');
        const visualizer = document.getElementById('visualizer');
        const progressBar = document.getElementById('progressBar');
        
        let isPlaying = false;
        let progressInterval;
        let width = 0;

        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                // Play State
                playIcon.setAttribute('icon', 'solar:pause-linear');
                playIcon.classList.remove('ml-1'); // center alignment adjustment
                visualizer.classList.remove('paused');
                
                // Simulate progress bar
                progressInterval = setInterval(() => {
                    if (width >= 100) width = 0;
                    width += 1;
                    progressBar.style.width = width + '%';
                }, 100);
                
            } else {
                // Pause State
                playIcon.setAttribute('icon', 'solar:play-linear');
                playIcon.classList.add('ml-1');
                visualizer.classList.add('paused');
                clearInterval(progressInterval);
            }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-200 hue-rotate-15" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block" style={{left: '39.3924px', top: '1.54109px'}}></div>

<div className="fixed inset-0 bg-grid pointer-events-none -z-10"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
<main className="z-10 card-grid grid-cols-1 md:grid-cols-12 auto-rows-min w-full max-w-5xl" id="gridContainer">

<header className="spotlight-card col-span-1 md:col-span-12 rounded-3xl p-6 flex justify-between items-center mb-4 reveal" style={{animationDelay: '0.1s', '--mouse-x': '2.5px', '--mouse-y': '118.25px'}}>
<div className="relative z-10 flex items-center gap-4">
<div className="flex overflow-hidden group hoverable bg-center text-white w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a73a7df-fe87-40e4-b8ed-204ccdcba468_320w.jpg)] bg-cover border-white/10 border rounded-full relative items-center justify-center">
<span className="group-hover:opacity-0 transition-opacity duration-300 text-xs font-bold tracking-tighter bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f10afa8-518d-4b67-a08d-c1badd1418c0_320w.jpg)] bg-cover bg-center"></span>
</div>
<div className="">
<h1 className="text-sm font-medium text-white tracking-tight">ɴᴏɪʀ</h1>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-widest">Digital Creator</p>
</div>
</div>
<div className="relative z-10 hidden md:flex gap-6">
</div>
<button className="relative z-10 md:hidden text-white hoverable">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="spotlight-card col-span-1 md:col-span-8 row-span-2 md:p-10 flex flex-col group hoverable reveal rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between" style={{animationDelay: '0.2s', '--mouse-x': '2.5px', '--mouse-y': '-3.75px'}}>
<div className="relative z-10">
<div className="inline-flex gap-1.5 bg-red-600/5 border-red-600/20 border rounded-full mb-6 pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1.5 h-1.5 animate-pulse text-red-600 bg-red-600 rounded-full"></span>
<span className="text-[10px] uppercase font-medium text-red-600 tracking-wide">Live</span>
</div>
<h2 className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight font-serif">Visionary &amp;
<br className=""/> <span className="group-hover:text-white transition-colors duration-500 text-neutral-500 font-serif shadow-2xl">Dark aesthetic version</span></h2>
</div>
<div className="relative z-10 flex items-end justify-between mt-12">
<div className="flex gap-4">
<button className="hover:bg-neutral-200 transition-transform hover:scale-105 active:scale-95 hoverable cursor-pointer text-xs font-semibold text-black bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6" onclick="window.location.href='https://www.instagram.com/_____kennedy.86/'" role="button">Instagram</button>
</div>
<iconify-icon className="text-neutral-700 group-hover:text-white/20 transition-colors duration-500 rotate-0 group-hover:rotate-45" icon="solar:planet-linear" width="64"></iconify-icon>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-4 flex hoverable group reveal cursor-pointer rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="window.location.href='https://youtube.com/@nexafyrez1011?si=_rCiA_xQAorAgg3l'" role="button" style={{animationDelay: '0.3s', '--mouse-x': '-690.828125px', '--mouse-y': '-3.75px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1 text-red-400">
<iconify-icon className="" icon="solar:play-circle-linear" width="18"></iconify-icon>
<span className="text-[10px] uppercase cursor-pointer font-semibold tracking-widest" onclick="window.location.href='https://youtube.com/@nexafyrez1011?si=2KbpQOGHntqWmeK1'" role="button">NexafyreZ</span>
</div>
<div className="text-2xl text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform">Youtube</div>
</div>
<div className="flex group-hover:bg-white group-hover:text-black transition-all cursor-pointer z-10 text-white w-8 h-8 border-white/10 border rounded-full relative items-center justify-center" onclick="window.location.href='https://discord.gg/nxontop'" role="button">
<iconify-icon className="" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-4 flex hoverable group reveal rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center justify-between" style={{animationDelay: '0.4s', '--mouse-x': '-690.828125px', '--mouse-y': '-182.5px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1 text-indigo-400">
<iconify-icon className="" icon="solar:server-square-linear" width="18"></iconify-icon>
<span className="text-[10px] uppercase font-semibold tracking-widest">NexafyreZ</span>
</div>
<div className="text-2xl text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform">Discord</div>
</div>
<div className="flex group-hover:bg-white group-hover:text-black transition-all cursor-pointer text-white w-8 h-8 z-10 border-white/10 border rounded-full relative items-center justify-center" onclick="window.location.href='https://discord.gg/nxontop'" role="button">
<iconify-icon className="" height="14" icon="solar:arrow-right-up-linear" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-6 overflow-hidden group reveal cursor-pointer rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" onclick="window.location.href='https://open.spotify.com/playlist/1u6n1OX31XuQ4qs1Sx2jTM?si=c6bd559cdf9d4a15'" role="button" style={{animationDelay: '0.5s', '--mouse-x': '2.5px', '--mouse-y': '-361.25px'}}>
<div className="relative z-10 flex items-center gap-5">

<div className="flex-1 min-w-0">
<div className="flex mb-1 items-start justify-between">
<div className="">
<h3 className="text-sm font-medium text-white tracking-wide">My Spotify</h3>
<p className="text-xs text-neutral-500">Focus Session</p>
</div>

<div className="visualizer-container flex items-end gap-1 h-6" id="visualizer">
<div className="visualizer-bar"></div>
<div className="visualizer-bar"></div>
<div className="visualizer-bar"></div>
<div className="visualizer-bar"></div>
<div className="visualizer-bar"></div>
</div>
</div>

</div>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-6 rounded-3xl p-6 relative z-10 reveal" style={{animationDelay: '0.6s', '--mouse-x': '-517.484375px', '--mouse-y': '-361.25px'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="uppercase text-xs font-medium text-neutral-300 tracking-widest">My Fav Games</h3>
<iconify-icon className="text-neutral-500" icon="solar:gamepad-linear"></iconify-icon>
</div>
<div className="space-y-2">

<div className="flex hover:bg-white/5 transition-colors group hoverable rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<span className="group-hover:text-white transition-colors cursor-pointer text-sm text-neutral-400" onclick="window.location.href='https://www.rockstargames.com/videos?type=game&amp;gameId=r8ogrer8'" role="button">Red Dead Redemption 2</span>
</div>
</div>

<div className="flex hover:bg-white/5 transition-colors group hoverable rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-between">
<div className="flex items-center gap-3">
<span className="group-hover:text-white transition-colors text-sm text-neutral-400 cursor-pointer" onclick="window.location.href='https://www.rockstargames.com/videos?type=game&amp;gameId=so7sc0r9'" role="button">Grand Theft Auto V</span>
</div>
</div>

<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group hoverable">
<div className="flex items-center gap-3">
<span className="group-hover:text-white transition-colors cursor-pointer text-sm text-neutral-400" onclick="window.location.href='https://www.minecraft.net/en-us/about-minecraft'" role="button">Minecraft</span>
</div>
</div>
</div>
</div>
<div className="spotlight-card col-span-1 md:col-span-4 flex hoverable group reveal rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center justify-between cursor-pointer" onclick="window.location.href='https://www.reddit.com/u/_kennedy86/s/iYBtr8XKjm'" role="button" style={{animationDelay: '0.4s', '--mouse-x': '2.5px', '--mouse-y': '-583.25px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1 text-indigo-400">
</div>
<div className="group-hover:translate-x-1 transition-transform cursor-pointer text-2xl font-medium text-orange-600 tracking-tight" onclick="window.location.href='https://www.reddit.com/u/_kennedy86/s/iYBtr8XKjm'" role="button">Reddit</div>
</div>
<div className="flex group-hover:bg-white group-hover:text-black transition-all cursor-pointer z-10 text-white w-8 h-8 border-white/10 border rounded-full relative items-center justify-center" onclick="window.location.href='https://www.reddit.com/u/_kennedy86/s/iYBtr8XKjm'" role="button">
<iconify-icon className="" height="14" icon="solar:arrow-right-up-linear" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
</div>
</div><div className="spotlight-card col-span-1 md:col-span-4 flex hoverable group reveal rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center justify-between cursor-pointer" onclick="window.location.href='https://steamcommunity.com/profiles/76561199576311919/'" role="button" style={{animationDelay: '0.4s', '--mouse-x': '-344.15625px', '--mouse-y': '-583.25px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1 text-indigo-400">
</div>
<div className="group-hover:translate-x-1 transition-transform text-2xl font-medium text-blue-700 tracking-tight">Steam</div>
</div>
<div className="flex group-hover:bg-white group-hover:text-black transition-all cursor-pointer z-10 text-white w-8 h-8 border-white/10 border rounded-full relative items-center justify-center" onclick="window.location.href='https://steamcommunity.com/profiles/76561199576311919/'" role="button">
<iconify-icon className="" height="14" icon="solar:arrow-right-up-linear" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
</div>
</div><div className="spotlight-card col-span-1 md:col-span-4 flex hoverable group reveal rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center justify-between cursor-pointer" onclick="window.location.href='https://socialclub.rockstargames.com/member/NexafyreZ1011/games'" role="button" style={{animationDelay: '0.4s', '--mouse-x': '-690.828125px', '--mouse-y': '-583.25px'}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1 text-indigo-400">
</div>
<div className="group-hover:translate-x-1 transition-transform text-2xl font-medium text-amber-300 tracking-tight">Rockstar</div>
</div>
<div className="flex group-hover:bg-white group-hover:text-black transition-all cursor-pointer z-10 text-white w-8 h-8 border-white/10 border rounded-full relative items-center justify-center" onclick="window.location.href='https://socialclub.rockstargames.com/member/NexafyreZ1011/games'" role="button">
<iconify-icon className="" height="14" icon="solar:arrow-right-up-linear" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
</div>
</div></main>
<footer className="text-[10px] uppercase animate-pulse text-neutral-600 tracking-widest mt-12">TMKC</footer>


    </>
  );
}
