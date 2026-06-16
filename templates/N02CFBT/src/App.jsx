import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Interactive background gradient
    const bg = document.getElementById('interactiveBg');
    document.addEventListener('mousemove', function(e) {
      const card = document.querySelector('.max-w-md');
      const rect = card.getBoundingClientRect();
      if (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        bg.style.background = 'linear-gradient(120deg, #18181b 60%, #27272a 100%)';
        return;
      }
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const color1 = `rgb(${24 + Math.floor(32 * x)}, 24, 27)`;
      const color2 = `rgb(39, ${39 + Math.floor(64 * y)}, 42)`;
      const angle = 100 + Math.floor(80 * x);
      bg.style.background = `linear-gradient(${angle}deg, ${color1} 60%, ${color2} 100%)`;
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="interactive-bg" id="interactiveBg"></div>
<div className="overlay"></div>
<div className="relative z-10 w-full max-w-md mx-auto bg-zinc-800/90 rounded-2xl shadow-2xl border border-zinc-800 px-8 py-10 backdrop-blur-xl overflow-hidden geist-font">
<div className="noise"></div>
<div className="flex flex-col items-center mb-7 relative z-10">
<div className="flat-avatar mb-4 w-24 h-24 rounded-full bg-zinc-900 border-4 border-indigo-600 shadow-lg"></div>
<h1 className="text-3xl font-extrabold text-indigo-400 tracking-wide drop-shadow geist-font">Cosmic Quest</h1>
<h2 className="text-zinc-300 text-base mt-1 italic text-center geist-font">Explore the stars, survive the unknown, conquer the cosmos!</h2>
</div>
<hr className="border-zinc-700 my-7"/>
<div className="flex justify-center mb-8">
<div>
<div className="flex justify-center mb-1">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-300 font-bold text-lg mr-1 geist-font">W</div>
</div>
<div className="flex justify-center mb-1">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-300 font-bold text-lg mr-1 geist-font">A</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-300 font-bold text-lg mr-1 geist-font">S</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-300 font-bold text-lg geist-font">D</div>
</div>
<div className="flex justify-center mt-1">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-28 h-10 flex items-center justify-center text-indigo-300 font-semibold text-base tracking-wide geist-font">Space</div>
</div>
</div>
<div className="ml-8 flex flex-col items-center justify-center">
<div className="flex justify-center mb-1">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-400 font-bold text-lg geist-font">↑</div>
</div>
<div className="flex">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-400 font-bold text-lg mr-1 geist-font">←</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-400 font-bold text-lg mr-1 geist-font">↓</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg w-10 h-10 flex items-center justify-center text-indigo-400 font-bold text-lg geist-font">→</div>
</div>
</div>
</div>
<hr className="border-zinc-700 my-7"/>
<div className="relative z-10 mb-6">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center geist-font">
<svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-3-3v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        How to Play
      </h3>
<ul className="list-disc list-inside text-zinc-300 text-sm ml-2 space-y-1 geist-font">
<li>Use <span className="font-semibold text-indigo-300">Arrow Keys</span> or <span className="font-semibold text-indigo-300">WASD</span> to navigate your spaceship.</li>
<li>Avoid asteroids and enemy ships as you travel deeper into space.</li>
<li>Collect <span className="font-semibold text-indigo-300">stars</span> for points and <span className="font-semibold text-indigo-300">power-ups</span> to upgrade your ship.</li>
<li>Reach new galaxies to unlock special achievements.</li>
<li>Your mission: <span className="text-indigo-300 font-semibold">Survive as long as possible!</span></li>
</ul>
</div>
<hr className="border-zinc-700 my-7"/>
<div className="relative z-10 mb-8">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center geist-font">
<svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Controls
      </h3>
<div className="flex flex-wrap gap-3 geist-font">
<span className="bg-indigo-700/80 text-white px-3 py-1 rounded-full text-xs font-semibold">← ↑ → ↓ / WASD</span>
<span className="bg-indigo-700/80 text-white px-3 py-1 rounded-full text-xs font-semibold">Space: Shoot</span>
<span className="bg-indigo-700/80 text-white px-3 py-1 rounded-full text-xs font-semibold">P: Pause</span>
</div>
</div>
<hr className="border-zinc-700 my-7"/>
<div className="mt-8 flex justify-center relative z-10">
<button className="px-8 py-3 border-2 border-indigo-500 text-indigo-300 bg-transparent hover:bg-indigo-600/10 hover:text-indigo-200 transition-colors rounded-lg text-lg font-bold shadow-lg shadow-indigo-900/30 tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400 geist-font">
        Start Game
      </button>
</div>
</div>


    </>
  );
}
