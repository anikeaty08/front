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



        // Animation and functionality logic to make the interface hyper-realistic
        const playhead = document.getElementById('playhead');
        const timeDisplay = document.getElementById('timeDisplay');
        const arrangementView = document.getElementById('arrangement-view');
        const trackHeaders = document.getElementById('track-headers');
        const meterL = document.getElementById('meter-l').firstElementChild;
        const meterR = document.getElementById('meter-r').firstElementChild;
        const timeCounter = document.getElementById('time-display');
        
        // Sync track list scroll with arrangement view scroll vertically
        arrangementView.addEventListener('scroll', () => {
            trackHeaders.scrollTop = arrangementView.scrollTop;
        });

        // Constants
        const TOTAL_MINUTES = 10;
        const TOTAL_SECONDS = TOTAL_MINUTES * 60;
        const PIXELS_PER_SECOND = 24; // Scale used in HTML
        const TOTAL_WIDTH = TOTAL_SECONDS * PIXELS_PER_SECOND;
        
        let currentTime = 0; // seconds
        let lastTimestamp = 0;
        let isPlaying = true; // Auto-play for animation effect

        function formatTime(seconds) {
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        function animate(timestamp) {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = (timestamp - lastTimestamp) / 1000; // in seconds
            lastTimestamp = timestamp;

            if (isPlaying) {
                currentTime += deltaTime;
                
                // Loop back if it reaches the end
                if (currentTime >= TOTAL_SECONDS) {
                    currentTime = 0;
                }

                // Update playhead position
                const currentPos = currentTime * PIXELS_PER_SECOND;
                playhead.style.left = `${currentPos}px`;

                // Update time display
                timeCounter.textContent = formatTime(currentTime);

                // Auto-scroll logic (keep playhead in middle of screen)
                const viewWidth = arrangementView.clientWidth;
                const scrollLeft = arrangementView.scrollLeft;
                
                if (currentPos > scrollLeft + viewWidth * 0.75) {
                    arrangementView.scrollLeft = currentPos - viewWidth * 0.25;
                } else if (currentPos < scrollLeft) {
                    arrangementView.scrollLeft = Math.max(0, currentPos - viewWidth * 0.25);
                }

                // Randomize volume meters slightly for realism
                if (Math.random() > 0.5) {
                    const volBase = 60 + Math.random() * 30; // 60% to 90%
                    meterL.style.width = `${volBase}%`;
                    meterR.style.width = `${volBase - 5 + Math.random() * 10}%`; // Slight stereo difference
                } else if (Math.random() > 0.9) {
                     // occasional drops
                    meterL.style.width = `20%`;
                    meterR.style.width = `20%`;
                }
            }

            requestAnimationFrame(animate);
        }

        // Start slightly past zero to show immediate action (e.g., just before the Hook drops)
        currentTime = 18; 
        arrangementView.scrollLeft = (currentTime * PIXELS_PER_SECOND) - 100;

        // Kick off animation
        requestAnimationFrame(animate);
    
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
      

<header className="h-14 bg-[#18181b] border-b border-white/5 flex items-center justify-between px-4 shrink-0 z-30 shadow-md">

<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/10 text-zinc-100 font-medium tracking-tighter">
                    NSB
                </div>
<div className="flex flex-col">
<span className="text-zinc-100 font-medium tracking-tight text-sm">NSB RECORDS – RYB</span>
<span className="text-zinc-500 opacity-80 text-[10px] uppercase tracking-widest">Session / Version 4</span>
</div>
</div>
<div className="h-6 w-px bg-white/5 mx-2"></div>
<div className="flex items-center gap-4 text-zinc-300">
<div className="flex flex-col items-center">
<span className="text-zinc-500 text-[10px] uppercase">BPM</span>
<span className="font-medium text-zinc-100">142</span>
</div>
<div className="flex flex-col items-center">
<span className="text-zinc-500 text-[10px] uppercase">Key</span>
<span className="font-medium text-zinc-100">F#m</span>
</div>
<div className="flex flex-col items-center">
<span className="text-zinc-500 text-[10px] uppercase">Sig</span>
<span className="font-medium text-zinc-100">4/4</span>
</div>
</div>
</div>

<div className="flex items-center gap-6 bg-[#121212] px-6 py-1.5 rounded-full border border-white/5 shadow-inner">
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:skip-previous-linear"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:stop-linear"></iconify-icon>
</button>
<button className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
<iconify-icon className="text-xl" icon="solar:play-linear"></iconify-icon>
</button>
<button className="text-rose-500 hover:text-rose-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:record-circle-linear"></iconify-icon>
</button>
</div>
<div className="w-px h-5 bg-white/10 mx-1"></div>
<div className="font-mono text-zinc-100 tracking-wider text-sm w-16 text-center" id="time-display">
                00:00
            </div>
</div>

<div className="flex items-center gap-5">
<div className="flex items-center gap-3">
<div className="flex flex-col gap-1 w-16">
<div className="flex justify-between text-[10px]">
<span>CPU</span>
<span className="text-zinc-200">18%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[18%]"></div>
</div>
</div>
<div className="flex flex-col gap-1 w-16">
<div className="flex justify-between text-[10px]">
<span>DSK</span>
<span className="text-zinc-200">4%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[4%]"></div>
</div>
</div>
</div>
<div className="h-6 w-px bg-white/5 mx-2"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:volume-loud-linear"></iconify-icon>
<div className="flex flex-col gap-1 w-20">
<div className="flex justify-between text-[10px]">
<span>Master</span>
<span className="text-zinc-100">-3.2 dB</span>
</div>

<div className="flex flex-col gap-[2px]">
<div className="h-1 w-full bg-zinc-800 rounded-sm overflow-hidden flex" id="meter-l">
<div className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-rose-500 w-[78%]"></div>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-sm overflow-hidden flex" id="meter-r">
<div className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-rose-500 w-[75%]"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex flex-1 overflow-hidden relative">

<aside className="w-64 bg-[#18181b] border-r border-white/5 flex flex-col flex-shrink-0 z-20 shadow-xl" id="track-headers">

<div className="h-8 border-b border-white/5 bg-[#18181b] flex items-center px-4 shrink-0 shadow-sm relative z-10">
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Tracks</span>
</div>

<div className="flex flex-col overflow-hidden pb-32">


<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group bg-[#1c1c1f] hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">1</span>
<span className="text-zinc-200 truncate font-medium">Kick (Punchy Trap)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 group-hover:border-white/10">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 group-hover:border-white/10">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">2</span>
<span className="text-zinc-200 truncate font-medium">808 Bass (Distorted Glide)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">3</span>
<span className="text-zinc-200 truncate font-medium">Snare (Clap Layered)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">4</span>
<span className="text-zinc-200 truncate font-medium">Hi Hats (Roll Pattern)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">5</span>
<span className="text-zinc-200 truncate font-medium">Open Hat</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">6</span>
<span className="text-zinc-200 truncate font-medium">Perc Loop</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">7</span>
<span className="text-zinc-200 truncate font-medium">Melody (Dark Piano)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">8</span>
<span className="text-zinc-200 truncate font-medium">Counter Melody (Bell)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">9</span>
<span className="text-zinc-200 truncate font-medium">Pad (Ambient Texture)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">10</span>
<span className="text-zinc-200 truncate font-medium">FX (Risers + Impacts)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">11</span>
<span className="text-zinc-200 truncate font-medium">Vox Hook (RYB Hook)</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">12</span>
<span className="text-zinc-200 truncate font-medium">Rap Verse 1</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">13</span>
<span className="text-zinc-200 truncate font-medium">Rap Verse 2</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">14</span>
<span className="text-zinc-200 truncate font-medium">Adlibs</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>

<div className="h-16 border-b border-white/5 flex flex-col justify-center px-3 relative group hover:bg-[#202024] transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 overflow-hidden">
<span className="text-[10px] text-zinc-600 w-3">15</span>
<span className="text-zinc-200 truncate font-medium">Outro Vox</span>
</div>
<div className="flex gap-1">
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">M</button>
<button className="w-5 h-5 rounded flex items-center justify-center text-[9px] bg-zinc-800 text-zinc-400 border border-white/5">S</button>
</div>
</div>
</div>
</div>
</aside>

<div className="flex-1 overflow-auto relative bg-[#121212] select-none" id="arrangement-view">

<div className="relative w-[14400px] h-[992px] pb-32" style={{backgroundSize: '40.5px 64px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)'}}>

<div className="h-8 sticky top-0 bg-[#18181b] border-b border-white/5 z-20 flex items-end pb-1 shadow-sm w-full">


<div className="absolute left-[0px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Intro</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[480px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Hook</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[1440px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Verse 1</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[2400px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Hook</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[3360px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Verse 2</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[4320px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Bridge</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[5040px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Hook</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[6000px] flex flex-col items-start px-1 -top-0 h-full justify-between">
<span className="text-[10px] text-zinc-300 font-medium">Outro</span>
<div className="w-px h-2 bg-white/20"></div>
</div>

<div className="absolute left-[480px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[1440px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[2400px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[3360px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[4320px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[5040px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
<div className="absolute left-[6000px] top-8 bottom-[-1000px] w-px bg-white/10 z-0"></div>
</div>

<div className="absolute top-0 bottom-0 w-[1.5px] bg-emerald-400 z-50 pointer-events-none drop-shadow-[0_0_4px_rgba(52,211,153,0.8)]" id="playhead" style={{left: '0px'}}>
<div className="absolute -top-1 -translate-x-1/2 border-[5px] border-transparent border-t-emerald-400"></div>
</div>

<div className="absolute top-8 left-0 right-0 h-[960px] pointer-events-none">

<div className="absolute top-2 h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '480px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Kick_Punchy_Trap</span>
<div className="mt-auto mb-1 h-3 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiB5PSIyIiBmaWxsPSJyZ2JhKDI0NCwgNjMsIDk0LCAwLjQpIi8+PC9zdmc+')]"></div>
</div>
<div className="absolute top-2 h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '1440px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Kick_Punchy_Trap</span>
<div className="mt-auto mb-1 h-3 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiB5PSIyIiBmaWxsPSJyZ2JhKDI0NCwgNjMsIDk0LCAwLjQpIi8+PC9zdmc+')]"></div>
</div>
<div className="absolute top-2 h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '2400px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Kick_Punchy_Trap</span>
<div className="mt-auto mb-1 h-3 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiB5PSIyIiBmaWxsPSJyZ2JhKDI0NCwgNjMsIDk0LCAwLjQpIi8+PC9zdmc+')]"></div>
</div>
<div className="absolute top-2 h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '3360px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Kick_Punchy_Trap</span>
<div className="mt-auto mb-1 h-3 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiB5PSIyIiBmaWxsPSJyZ2JhKDI0NCwgNjMsIDk0LCAwLjQpIi8+PC9zdmc+')]"></div>
</div>

<div className="absolute top-[74px] h-12 bg-purple-500/10 border border-purple-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '480px', width: '960px'}}>
<span className="text-purple-300/80 truncate text-[9px]">808_Glide_Main</span>
<div className="mt-auto h-6 w-full bg-purple-500/20 rounded-t-sm opacity-50" style={{clipPath: 'polygon(0 100%, 10% 20%, 20% 80%, 30% 10%, 40% 90%, 50% 30%, 60% 70%, 70% 20%, 80% 90%, 90% 40%, 100% 100%)'}}></div>
</div>
<div className="absolute top-[74px] h-12 bg-purple-500/10 border border-purple-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '1440px', width: '400px'}}>
<span className="text-purple-300/80 truncate text-[9px]">808_Glide_Sparse</span>
<div className="mt-auto h-6 w-full bg-purple-500/20 rounded-t-sm opacity-50" style={{clipPath: 'polygon(0 100%, 10% 20%, 20% 80%, 30% 10%, 40% 90%, 50% 30%, 60% 70%, 70% 20%, 80% 90%, 90% 40%, 100% 100%)'}}></div>
</div>
<div className="absolute top-[74px] h-12 bg-purple-500/10 border border-purple-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '1900px', width: '500px'}}>
<span className="text-purple-300/80 truncate text-[9px]">808_Glide_Sparse</span>
<div className="mt-auto h-6 w-full bg-purple-500/20 rounded-t-sm opacity-50" style={{clipPath: 'polygon(0 100%, 10% 20%, 20% 80%, 30% 10%, 40% 90%, 50% 30%, 60% 70%, 70% 20%, 80% 90%, 90% 40%, 100% 100%)'}}></div>
</div>
<div className="absolute top-[74px] h-12 bg-purple-500/10 border border-purple-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '2400px', width: '960px'}}>
<span className="text-purple-300/80 truncate text-[9px]">808_Glide_Main</span>
</div>

<div className="absolute top-[138px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '480px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Snare_Alt_Hit</span>
</div>
<div className="absolute top-[138px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '1440px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Snare_Alt_Hit</span>
</div>
<div className="absolute top-[138px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '2400px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Snare_Alt_Hit</span>
</div>

<div className="absolute top-[202px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '480px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Hat_Rolls_16th</span>
</div>
<div className="absolute top-[202px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '1440px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Hat_Rolls_16th</span>
</div>
<div className="absolute top-[202px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '2400px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Hat_Rolls_16th</span>
</div>
<div className="absolute top-[202px] h-12 bg-rose-500/10 border border-rose-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '3360px', width: '960px'}}>
<span className="text-rose-300/80 truncate text-[9px]">Hat_Rolls_16th</span>
</div>

<div className="absolute top-[394px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '0px', width: '480px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Piano_Dark_Chords</span>
<div className="mt-auto mb-1 h-6 w-full flex items-end gap-[1px]">

<div className="w-4 h-2 bg-blue-400/40 rounded-sm mb-1"></div>
<div className="w-4 h-4 bg-blue-400/40 rounded-sm mb-2"></div>
<div className="w-8 h-3 bg-blue-400/40 rounded-sm mb-1"></div>
<div className="w-4 h-2 bg-blue-400/40 rounded-sm mb-3"></div>
</div>
</div>
<div className="absolute top-[394px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '480px', width: '960px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Piano_Dark_Chords</span>
</div>
<div className="absolute top-[394px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '1440px', width: '960px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Piano_Dark_Chords</span>
</div>
<div className="absolute top-[394px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '2400px', width: '960px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Piano_Dark_Chords</span>
</div>

<div className="absolute top-[522px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-start px-1 pt-0.5 opacity-60" style={{left: '0px', width: '480px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Ambient_Pad_Swell</span>
</div>
<div className="absolute top-[522px] h-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-start px-1 pt-0.5 opacity-60" style={{left: '4320px', width: '720px'}}>
<span className="text-blue-300/80 truncate text-[9px]">Ambient_Pad_Swell</span>
</div>

<div className="absolute top-[586px] h-12 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '240px', width: '240px'}}>
<span className="text-orange-300/80 truncate text-[9px]">FX_Riser_Long</span>

<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-orange-500/20 pointer-events-none"></div>
</div>
<div className="absolute top-[586px] h-12 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-start px-1 pt-0.5" style={{left: '480px', width: '120px'}}>
<span className="text-orange-300/80 truncate text-[9px]">Impact_Sub</span>
</div>

<div className="absolute top-[650px] h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '480px', width: '960px'}}>
<span className="text-emerald-300/90 truncate text-[9px] z-10 font-medium drop-shadow-md">RYB_Hook_Main_Lead</span>

<svg className="absolute inset-x-0 bottom-0 w-full h-[80%] opacity-40 text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="0,100 2,60 4,80 6,30 8,70 10,20 12,90 14,40 16,80 18,10 20,95 22,50 24,80 26,20 28,70 30,10 32,90 34,40 36,80 38,20 40,90 42,50 44,80 46,10 48,90 50,30 52,70 54,20 56,80 58,10 60,95 62,40 64,80 66,20 68,70 70,10 72,90 74,30 76,80 78,20 80,95 82,50 84,80 86,10 88,90 90,40 92,80 94,20 96,70 98,40 100,100"></polygon>
</svg>
</div>
<div className="absolute top-[650px] h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '2400px', width: '960px'}}>
<span className="text-emerald-300/90 truncate text-[9px] z-10 font-medium drop-shadow-md">RYB_Hook_Main_Lead</span>
<svg className="absolute inset-x-0 bottom-0 w-full h-[80%] opacity-40 text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="0,100 2,60 4,80 6,30 8,70 10,20 12,90 14,40 16,80 18,10 20,95 22,50 24,80 26,20 28,70 30,10 32,90 34,40 36,80 38,20 40,90 42,50 44,80 46,10 48,90 50,30 52,70 54,20 56,80 58,10 60,95 62,40 64,80 66,20 68,70 70,10 72,90 74,30 76,80 78,20 80,95 82,50 84,80 86,10 88,90 90,40 92,80 94,20 96,70 98,40 100,100"></polygon>
</svg>
</div>

<div className="absolute top-[714px] h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '1440px', width: '960px'}}>
<span className="text-emerald-300/90 truncate text-[9px] z-10 font-medium drop-shadow-md">Verse1_Take2_Comp</span>
<svg className="absolute inset-x-0 bottom-0 w-full h-[70%] opacity-30 text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="0,100 3,70 6,85 9,40 12,90 15,30 18,80 21,50 24,95 27,20 30,85 33,60 36,90 39,20 42,80 45,40 48,95 51,30 54,80 57,60 60,90 63,20 66,85 69,50 72,95 75,30 78,80 81,40 84,90 87,20 90,85 93,60 96,95 100,100"></polygon>
</svg>
</div>

<div className="absolute top-[778px] h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '3360px', width: '960px'}}>
<span className="text-emerald-300/90 truncate text-[9px] z-10 font-medium drop-shadow-md">Verse2_Main_Raw</span>
<svg className="absolute inset-x-0 bottom-0 w-full h-[70%] opacity-30 text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="0,100 3,70 6,85 9,40 12,90 15,30 18,80 21,50 24,95 27,20 30,85 33,60 36,90 39,20 42,80 45,40 48,95 51,30 54,80 57,60 60,90 63,20 66,85 69,50 72,95 75,30 78,80 81,40 84,90 87,20 90,85 93,60 96,95 100,100"></polygon>
</svg>
</div>

<div className="absolute top-[842px] h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex flex-col justify-start px-1 pt-0.5 overflow-hidden" style={{left: '480px', width: '960px'}}>
<span className="text-emerald-300/90 truncate text-[9px] z-10 font-medium drop-shadow-md">Adlibs_Panned</span>
<svg className="absolute inset-x-0 bottom-0 w-full h-[40%] opacity-20 text-emerald-400" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="0,100 5,90 10,95 15,80 20,100 30,100 35,70 40,95 45,100 55,100 60,85 65,95 70,100 80,100 85,75 90,95 95,100 100,100"></polygon>
</svg>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
