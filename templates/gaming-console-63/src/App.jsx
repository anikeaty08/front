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



        // System Clock
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Game Selection Logic
        let selectedIndex = 0;
        const totalGames = 4;
        
        function updateSelection() {
            for (let i = 0; i < totalGames; i++) {
                const game = document.getElementById(`game-${i}`);
                const inner = game.querySelector('.game-card-inner');
                
                if (i === selectedIndex) {
                    game.classList.add('game-focus');
                    // Resize effect for active game
                    inner.classList.add('w-48', 'h-48');
                    inner.classList.remove('w-44', 'h-44', 'border-white/5');
                    inner.classList.add('border-4', 'border-transparent'); 
                } else {
                    game.classList.remove('game-focus');
                    // Reset size for inactive
                    inner.classList.remove('w-48', 'h-48', 'border-4', 'border-transparent');
                    inner.classList.add('w-44', 'h-44', 'border-white/5');
                }
            }
        }

        function selectGame(index) {
            selectedIndex = index;
            updateSelection();
        }

        function navigate(direction) {
            if (direction === 'right') {
                selectedIndex = (selectedIndex + 1) % totalGames;
            } else if (direction === 'left') {
                selectedIndex = (selectedIndex - 1 + totalGames) % totalGames;
            }
            updateSelection();
        }

        // Button Logic
        function pressButton(btn) {
            if (btn === 'A') {
                // Visual feedback for A press on the screen hint
                const hint = document.getElementById('btn-a-hint');
                hint.classList.add('bg-zinc-300', 'text-black', 'scale-125');
                setTimeout(() => {
                    hint.classList.remove('bg-zinc-300', 'text-black', 'scale-125');
                }, 150);
                
                // Simulate "Launch" feedback
                const activeGame = document.querySelector('.game-focus .game-card-inner');
                activeGame.style.transform = "scale(0.95)";
                setTimeout(() => activeGame.style.transform = "", 100);
            }
        }

        function resetSelection() {
            selectedIndex = 0;
            updateSelection();
        }

        // Keyboard Support
        function handleKeyDown(e) {
            if (e.key === 'ArrowRight') navigate('right');
            if (e.key === 'ArrowLeft') navigate('left');
            if (e.key === 'Enter' || e.key === 'a') pressButton('A');
            if (e.key === 'Escape') resetSelection();
        }
    
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
      

<div className="relative transform transition-transform duration-500 scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-90 xl:scale-100">

<div className="flex items-center drop-shadow-2xl">

<div className="relative w-28 h-[22rem] bg-[#00C3E3] rounded-l-[3.5rem] flex flex-col items-center pt-12 pb-12 shadow-inner border-r border-black/20 z-10 matte-texture group">
<div className="absolute -top-1 left-8 w-12 h-4 bg-[#00A0BA] rounded-t-lg shadow-sm"></div>

<div className="absolute top-8 right-5 w-5 h-1.5 bg-zinc-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] rounded-sm cursor-pointer hover:bg-zinc-700 tap-effect transition-all" onclick="toggleMenu()"></div>

<div className="mt-4 w-14 h-14 bg-zinc-800 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer transition-transform tap-effect z-20">
<div className="w-12 h-12 bg-zinc-900 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] border border-zinc-950"></div>
</div>

<div className="mt-8 grid grid-cols-3 gap-1.5 p-1 w-20 h-20 place-items-center">
<div className="col-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center group/btn hover:bg-zinc-700" onclick="navigate('up')">
<span className="iconify text-zinc-600 group-hover/btn:text-zinc-400 w-3 h-3" data-icon="lucide:chevron-up"></span>
</div>
<div className="col-start-1 row-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center group/btn hover:bg-zinc-700" onclick="navigate('left')">
<span className="iconify text-zinc-600 group-hover/btn:text-zinc-400 w-3 h-3" data-icon="lucide:chevron-left"></span>
</div>
<div className="col-start-3 row-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center group/btn hover:bg-zinc-700" onclick="navigate('right')">
<span className="iconify text-zinc-600 group-hover/btn:text-zinc-400 w-3 h-3" data-icon="lucide:chevron-right"></span>
</div>
<div className="col-start-2 row-start-3 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center group/btn hover:bg-zinc-700" onclick="navigate('down')">
<span className="iconify text-zinc-600 group-hover/btn:text-zinc-400 w-3 h-3" data-icon="lucide:chevron-down"></span>
</div>
</div>

<div className="mt-auto mb-2 w-7 h-7 bg-zinc-800 rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:bg-zinc-700 tap-effect transition-all">
<div className="w-4 h-4 rounded-full border border-[#444]"></div>
</div>
</div>

<div className="relative w-[38rem] h-[22rem] bg-zinc-900 rounded-sm shadow-2xl flex items-center justify-center z-20 border-y-4 border-zinc-800">
<div className="absolute -top-1 left-12 w-8 h-1 bg-zinc-800 rounded-full"></div>
<div className="absolute -top-1 left-24 w-16 h-1 bg-zinc-800 rounded-full"></div>
<div className="absolute -top-1 right-24 w-24 h-1 bg-zinc-800/50 rounded-full grid grid-cols-6 gap-0.5 overflow-hidden p-[1px]">
<div className="bg-zinc-950 h-full"></div><div className="bg-zinc-950 h-full"></div><div className="bg-zinc-950 h-full"></div>
<div className="bg-zinc-950 h-full"></div><div className="bg-zinc-950 h-full"></div><div className="bg-zinc-950 h-full"></div>
</div>

<div className="w-full h-full bg-black rounded-sm p-5 relative overflow-hidden ring-1 ring-white/5">

<div className="w-full h-full screen-bg relative flex flex-col overflow-hidden shadow-inner">
<div className="screen-gloss absolute inset-0 z-30 pointer-events-none"></div>

<div className="flex items-center justify-between px-6 pt-5 pb-2 text-zinc-300 z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-0.5 shadow-lg border border-white/10 relative">
<img alt="User" className="rounded-full bg-zinc-800 w-full h-full" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></div>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium tracking-tight">
<span className="text-xs text-zinc-400" id="clock">12:00 PM</span>
<span className="iconify animate-pulse" data-icon="lucide:wifi" data-width="16"></span>
<div className="flex items-center gap-1">
<span className="text-[10px] font-semibold">86%</span>
<span className="iconify text-green-400" data-icon="lucide:battery-medium" data-width="20"></span>
</div>
</div>
</div>

<div className="w-full h-[1px] bg-white/5 mx-auto w-[92%]"></div>

<div className="flex-1 flex items-center px-10 gap-6 overflow-hidden z-10" id="game-container">

<div className="game-card flex-shrink-0 group game-focus" id="game-0" onclick="selectGame(0)">
<div className="game-card-inner w-48 h-48 bg-gradient-to-b from-red-600 to-red-800 rounded-lg shadow-lg relative border-4 border-transparent transition-all duration-300 cursor-pointer">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<div className="bg-white/20 p-3 rounded-full mb-2 backdrop-blur-sm">
<span className="iconify w-12 h-12" data-icon="lucide:gamepad-2"></span>
</div>
<span className="font-bold tracking-tighter text-lg uppercase italic drop-shadow-md">Odyssey</span>
</div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/40 backdrop-blur-md rounded text-[10px] text-white font-medium">Cartridge</div>
</div>
<div className="game-title mt-4 text-center transition-all duration-300 opacity-0 transform translate-y-2">
<span className="text-cyan-400 font-semibold text-sm tracking-wide">Super Adventure</span>
</div>
</div>

<div className="game-card flex-shrink-0 group" id="game-1" onclick="selectGame(1)">
<div className="game-card-inner w-44 h-44 bg-gradient-to-b from-green-600 to-emerald-800 rounded-lg shadow-md relative border border-white/5 transition-all duration-300 cursor-pointer">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
<div className="bg-black/20 p-3 rounded-full mb-2">
<span className="iconify w-10 h-10" data-icon="lucide:sword"></span>
</div>
<span className="font-semibold tracking-tighter text-sm uppercase">Kingdom</span>
</div>
</div>
<div className="game-title mt-3 text-center transition-all duration-300 opacity-0 transform translate-y-2">
<span className="text-cyan-400 font-semibold text-sm tracking-wide">Legend Quest</span>
</div>
</div>

<div className="game-card flex-shrink-0 group" id="game-2" onclick="selectGame(2)">
<div className="game-card-inner w-44 h-44 bg-gradient-to-b from-blue-600 to-indigo-800 rounded-lg shadow-md relative border border-white/5 transition-all duration-300 cursor-pointer">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
<div className="bg-black/20 p-3 rounded-full mb-2">
<span className="iconify w-10 h-10" data-icon="lucide:car"></span>
</div>
<span className="font-semibold tracking-tighter text-sm uppercase">Kart 8</span>
</div>
</div>
<div className="game-title mt-3 text-center transition-all duration-300 opacity-0 transform translate-y-2">
<span className="text-cyan-400 font-semibold text-sm tracking-wide">Racing Pro</span>
</div>
</div>

<div className="game-card flex-shrink-0 group" id="game-3" onclick="selectGame(3)">
<div className="game-card-inner w-44 h-44 bg-gradient-to-b from-pink-500 to-rose-700 rounded-lg shadow-md relative border border-white/5 transition-all duration-300 cursor-pointer">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
<div className="bg-black/20 p-3 rounded-full mb-2">
<span className="iconify w-10 h-10" data-icon="lucide:scissors"></span>
</div>
<span className="font-semibold tracking-tighter text-sm uppercase">Snipper</span>
</div>
</div>
<div className="game-title mt-3 text-center transition-all duration-300 opacity-0 transform translate-y-2">
<span className="text-cyan-400 font-semibold text-sm tracking-wide">Cut It Out</span>
</div>
</div>
</div>

<div className="w-full h-[1px] bg-white/5 mx-auto w-[92%] mb-3"></div>

<div className="flex items-center justify-center gap-5 pb-6 z-10 px-8">
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-red-500/50 text-red-500 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">Online</span>
</div>
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-orange-500/50 text-orange-400 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">eShop</span>
</div>
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">Album</span>
</div>
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-white/10 text-zinc-400 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:gamepad" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">Joy-Con</span>
</div>
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-white/10 text-zinc-400 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:settings-2" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">Settings</span>
</div>
<div className="group flex flex-col items-center gap-1 cursor-pointer transition-transform hover:-translate-y-1">
<div className="w-11 h-11 rounded-full bg-zinc-800 border border-white/10 text-zinc-400 flex items-center justify-center group-hover:bg-zinc-700 group-hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:power" data-width="20"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-300">Sleep</span>
</div>
</div>

<div className="absolute bottom-3 left-0 right-0 px-6 flex justify-between items-center z-20 pointer-events-none">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 opacity-60">
<div className="w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center text-[8px] text-zinc-400 transition-transform" id="btn-a-hint">A</div>
<span className="text-[10px] text-zinc-500">Start</span>
</div>
</div>
<div className="w-10 h-0.5 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="relative w-28 h-[22rem] bg-[#FF4554] rounded-r-[3.5rem] flex flex-col items-center pt-12 pb-12 shadow-inner border-l border-black/20 z-10 matte-texture group">
<div className="absolute -top-1 right-8 w-12 h-4 bg-[#D62F3D] rounded-t-lg shadow-sm"></div>

<div className="absolute top-8 left-5 w-5 h-5 flex items-center justify-center cursor-pointer hover:scale-110 tap-effect transition-all" onclick="toggleMenu()">
<div className="absolute w-5 h-1.5 bg-zinc-800 shadow-sm rounded-sm"></div>
<div className="absolute h-5 w-1.5 bg-zinc-800 shadow-sm rounded-sm"></div>
</div>

<div className="mt-4 grid grid-cols-3 gap-1.5 p-1 w-20 h-20 place-items-center font-bold text-[9px] text-zinc-400">
<div className="col-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center hover:text-white hover:bg-zinc-700" onclick="pressButton('X')">X</div>
<div className="col-start-1 row-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center hover:text-white hover:bg-zinc-700" onclick="pressButton('Y')">Y</div>
<div className="col-start-3 row-start-2 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center hover:text-white hover:bg-zinc-700" onclick="pressButton('A')">A</div>
<div className="col-start-2 row-start-3 w-7 h-7 bg-zinc-800 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)] cursor-pointer tap-effect transition-all flex items-center justify-center hover:text-white hover:bg-zinc-700" onclick="pressButton('B')">B</div>
</div>

<div className="mt-8 w-14 h-14 bg-zinc-800 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer transition-transform tap-effect z-20">
<div className="w-12 h-12 bg-zinc-900 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] border border-zinc-950"></div>
</div>

<div className="mt-auto mb-2 w-8 h-8 rounded-full bg-transparent border-[3px] border-zinc-800/40 flex items-center justify-center cursor-pointer hover:bg-zinc-800/10 tap-effect transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] home-led" onclick="resetSelection()">
<div className="w-3.5 h-3.5 bg-zinc-800 rounded-full flex items-center justify-center shadow-sm">
<span className="iconify text-zinc-500" data-icon="lucide:home" data-width="8"></span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/40 blur-3xl rounded-full pointer-events-none"></div>
</div>



    </>
  );
}
