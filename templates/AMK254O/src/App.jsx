import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Simple dark mode toggle
    const html = document.documentElement;
    document.getElementById('dark-toggle').onclick = () => {
      html.classList.toggle('dark');
    };
    // Glow on drop zone when shape is hovered or dragged
    document.querySelectorAll('[draggable=true]').forEach((shape, idx) => {
      shape.addEventListener('dragstart', (e) => {
        document.querySelectorAll('.drop-glow').forEach(dz => dz.classList.add('drop-glow-active'));
        setTimeout(()=>shape.classList.add('scale-90'), 1);
      });
      shape.addEventListener('dragend', (e) => {
        document.querySelectorAll('.drop-glow').forEach(dz => dz.classList.remove('drop-glow-active'));
        shape.classList.remove('scale-90');
      });
    });
    document.querySelectorAll('.drop-glow').forEach(drop => {
      drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('drop-glow-active'); });
      drop.addEventListener('dragleave', e => { drop.classList.remove('drop-glow-active'); });
      drop.addEventListener('drop', e => {
        drop.classList.remove('drop-glow-active');
        // feedback: show confetti, fake animal pop, etc
        document.getElementById('confetti').classList.remove('hidden');
        setTimeout(()=>document.getElementById('confetti').classList.add('hidden'),700);
        setTimeout(()=>document.getElementById('animal-reward').classList.remove('hidden'),1100);
        setTimeout(()=>{
          document.getElementById('animal-reward').classList.add('hidden');
          document.getElementById('next-btns').classList.remove('hidden');
        }, 2500);
      });
    });
    // Start Game button
    document.querySelector('button[onclick]').onclick = function(){
      this.classList.add('hidden');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative mx-auto w-[390px] h-[844px] rounded-3xl shadow-xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-900 flex flex-col bg-white dark:bg-slate-900 transition-colors duration-500">

<div className="flex items-center justify-between px-5 pt-7 pb-2 w-full">
<span className="block text-2xl md:text-3xl text-indigo-500 dark:text-yellow-200 font-fun font-bold pop-in drop-shadow-sm select-none" style={{textShadow: '0 3px 8px #e0e7ff77'}}>Shape Match!</span>
<div className="flex items-center space-x-5">
<div className="flex items-center gap-1 text-lg font-bold text-yellow-400 dark:text-yellow-200 drop-shadow">
<span>🌟</span><span className="font-fun" id="score">3</span>
</div>
<div className="flex items-center gap-1 text-lg text-indigo-400 dark:text-indigo-200">
<span>⏰</span><span className="font-mono font-bold" id="timer">00:45</span>
</div>
<button aria-label="Toggle dark mode" className="ml-3 p-1 rounded-full shadow hover:bg-indigo-100 dark:hover:bg-indigo-800 transition" id="dark-toggle">
<svg className="w-6 h-6 text-indigo-300 dark:text-indigo-200" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 3v1m0 16v1m8.66-4.66-.7.7m-13.66 0-.7-.7m16.97-6.36h-1m-16 0h-1m13.66 13.66-.7-.7m-13.66 0-.7-.7"></path>
</svg>
</button>
</div>
</div>

<div className="relative px-5 pb-1 pt-1 flex items-center gap-2">
<span className="text-sm font-fun text-indigo-400 dark:text-indigo-200 animate-pulse">🔈 Can you find the triangle?</span>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative z-10">

<div className="relative flex flex-wrap justify-center items-end gap-7 mt-8 mb-4 w-full z-10">

<div className="relative flex flex-col items-center group">
<div className="glow-mesh left-1/2 top-1/2 w-24 h-24 bg-blue-400 rounded-full -z-10" style={{left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="w-20 h-20 rounded-full bg-blue-100/60 dark:bg-blue-800/40 border-4 border-dashed border-blue-200 dark:border-blue-500 flex items-center justify-center drop-glow transition-all" id="drop-circle">
<svg className="w-14 h-14 opacity-40" fill="none" stroke="#3b82f6" strokeWidth="3"><circle cx="28" cy="28" r="25"></circle></svg>
</div>
</div>

<div className="relative flex flex-col items-center group">
<div className="glow-mesh left-1/2 top-1/2 w-24 h-24 bg-red-400 rounded-xl -z-10" style={{left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="w-20 h-20 rounded-xl bg-red-100/60 dark:bg-red-800/40 border-4 border-dashed border-red-200 dark:border-red-400 flex items-center justify-center drop-glow transition-all" id="drop-square">
<svg className="w-14 h-14 opacity-40" fill="none" stroke="#ef4444" strokeWidth="3"><rect height="38" rx="8" width="38" x="5" y="5"></rect></svg>
</div>
</div>

<div className="relative flex flex-col items-center group">
<div className="glow-mesh left-1/2 top-1/2 w-24 h-24 bg-yellow-300 rounded-full -z-10" style={{left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="w-20 h-20 rounded-2xl bg-yellow-100/60 dark:bg-yellow-700/50 border-4 border-dashed border-yellow-200 dark:border-yellow-300 flex items-center justify-center drop-glow transition-all" id="drop-triangle">
<svg className="w-14 h-14 opacity-40" fill="none" stroke="#fbbf24" strokeWidth="3" viewbox="0 0 48 48">
<polygon points="24,8 44,40 4,40"></polygon>
</svg>
</div>
</div>

<div className="relative flex flex-col items-center group">
<div className="glow-mesh left-1/2 top-1/2 w-28 h-16 bg-purple-400 rounded-2xl -z-10" style={{left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="w-24 h-14 rounded-xl bg-purple-100/60 dark:bg-purple-900/50 border-4 border-dashed border-purple-200 dark:border-purple-400 flex items-center justify-center drop-glow transition-all" id="drop-rect">
<svg className="w-16 h-9 opacity-40" fill="none" stroke="#a78bfa" strokeWidth="3">
<rect height="20" rx="7" width="56" x="4" y="4"></rect>
</svg>
</div>
</div>
</div>

<div className="relative flex flex-wrap justify-center gap-7 mt-7 mb-3 z-20">

<div className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95" draggable="true" onmouseenter="this.classList.add('animate-bounce')" onmouseleave="this.classList.remove('animate-bounce')">
<div className="glow-mesh w-16 h-16 rounded-full bg-blue-300 left-1/2 -top-3" style={{left: '50%', top: '-14px', transform: 'translate(-50%,0)'}}></div>
<div className="w-16 h-16 rounded-full bg-blue-500 shadow-lg border-4 border-blue-300 flex items-center justify-center transition-all duration-200"></div>
</div>

<div className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95" draggable="true" onmouseenter="this.classList.add('animate-bounce')" onmouseleave="this.classList.remove('animate-bounce')">
<div className="glow-mesh w-16 h-16 rounded-xl bg-red-300 left-1/2 -top-3" style={{left: '50%', top: '-14px', transform: 'translate(-50%,0)'}}></div>
<div className="w-16 h-16 rounded-xl bg-red-500 shadow-lg border-4 border-red-300 flex items-center justify-center transition-all duration-200"></div>
</div>

<div className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95" draggable="true" onmouseenter="this.classList.add('animate-bounce')" onmouseleave="this.classList.remove('animate-bounce')">
<div className="glow-mesh w-16 h-16 rounded-full bg-yellow-200 left-1/2 -top-3" style={{left: '50%', top: '-14px', transform: 'translate(-50%,0)'}}></div>
<svg className="w-16 h-16" viewbox="0 0 48 48">
<polygon className="fill-yellow-400 stroke-yellow-300 stroke-4 drop-shadow-lg" points="24,8 44,40 4,40"></polygon>
</svg>
</div>

<div className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95" draggable="true" onmouseenter="this.classList.add('animate-bounce')" onmouseleave="this.classList.remove('animate-bounce')">
<div className="glow-mesh w-20 h-12 rounded-xl bg-purple-300 left-1/2 -top-3" style={{left: '50%', top: '-12px', transform: 'translate(-50%,0)'}}></div>
<div className="w-20 h-12 rounded-xl bg-purple-500 shadow-lg border-4 border-purple-300 flex items-center justify-center transition-all duration-200"></div>
</div>
</div>

<div className="absolute left-0 right-0 mx-auto mt-3 flex justify-center">
<button className="px-8 py-3 bg-gradient-to-tr from-fuchsia-400 via-indigo-400 to-purple-500 text-white font-fun text-lg rounded-full shadow-xl hover:scale-[1.07] transition-all duration-150 blur-[1.5px] hover:blur-0 hover:wiggle focus:outline-none" onclick="this.blur();">
          Start Game
        </button>
</div>
</div>

<div className="pointer-events-none absolute inset-0 flex justify-center items-center z-40 hidden" id="confetti">
<svg className="confetti w-40 h-40" viewbox="0 0 160 160">
<g>
<circle cx="20" cy="60" fill="#fbbf24" r="7"></circle>
<circle cx="80" cy="30" fill="#3b82f6" r="10"></circle>
<circle cx="120" cy="90" fill="#ef4444" r="7"></circle>
<circle cx="60" cy="120" fill="#a78bfa" r="8"></circle>
<circle cx="110" cy="60" fill="#f472b6" r="6"></circle>
</g>
</svg>
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center z-50 hidden" id="animal-reward">
<div className="animal-pop bg-white/80 dark:bg-slate-800/90 border-4 border-indigo-200 dark:border-indigo-600 rounded-2xl shadow-2xl px-8 py-7 flex flex-col items-center">
<span className="text-7xl mb-2 animate-pulse">🦊</span>
<span className="font-fun text-xl text-indigo-500 dark:text-yellow-200">Great job!</span>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-5 z-30 hidden" id="next-btns">
<button className="px-7 py-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-fuchsia-400 text-white font-fun text-lg rounded-full shadow hover:scale-105 hover:wiggle transition-all duration-150">Replay</button>
<button className="px-7 py-2 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 text-white font-fun text-lg rounded-full shadow hover:scale-105 hover:wiggle transition-all duration-150">Next Level</button>
</div>
</div>


    </>
  );
}
