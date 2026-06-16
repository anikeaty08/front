import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const excuses = [
            "Saturn is judging you.",
            "Venus is in Gatorade.",
            "Your aura is buffering.",
            "It's not the stars, it's your WiFi.",
            "Cosmic vibe check: Failed.",
            "Align your chakras, not your div tags.",
            "The moon thinks you're dramatic."
        ];

        function triggerChaos() {
            const btn = document.getElementById('chaosBtn');
            const h1 = document.querySelector('h1');
            const subtext = document.querySelector('p.italic');
            const body = document.body;

            // Visual chaos
            btn.classList.add('animate-pulse');
            h1.style.textShadow = '4px 0 #ff00c1, -4px 0 #00fff9';
            h1.classList.add('scale-110');
            
            // Random excuse
            const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
            
            // Glitch effect on body
            body.style.filter = "invert(1) hue-rotate(180deg)";
            setTimeout(() => {
                body.style.filter = "invert(0) hue-rotate(0deg)";
            }, 100);
            
            setTimeout(() => {
                body.style.filter = "invert(1) hue-rotate(90deg)";
            }, 150);

            setTimeout(() => {
                body.style.filter = "none";
                h1.style.textShadow = 'none';
                h1.classList.remove('scale-110');
                btn.classList.remove('animate-pulse');
                
                // Update text with a fade effect
                subtext.style.opacity = '0';
                setTimeout(() => {
                    subtext.innerText = `"${randomExcuse}"`;
                    subtext.style.opacity = '1';
                }, 200);
            }, 250);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(24,24,27,1)_0%,_rgba(0,0,0,1)_100%)]"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-900/10 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-900/10 rounded-full blur-[140px] mix-blend-screen animate-float-reverse"></div>

<div className="absolute inset-0 bg-grain opacity-20 pointer-events-none grain-overlay z-10"></div>
</div>

<div className="relative z-20 h-full w-full flex flex-col justify-between p-6 md:p-12">

<header className="flex justify-between items-start">
<div className="flex items-center gap-2 group cursor-default">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex items-center justify-center group-hover:border-zinc-700 transition-colors duration-500">
<iconify-icon className="text-zinc-400 group-hover:text-fuchsia-400 transition-colors duration-300" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-zinc-500">Status</span>
<span className="text-xs font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">Cosmic Alignment v2.0</span>
</div>
</div>

<button className="text-zinc-600 hover:text-zinc-300 transition-colors">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<main className="flex-grow flex flex-col items-center justify-center text-center relative">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-zinc-800 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-zinc-800/50 rounded-full animate-[spin_40s_linear_infinite_reverse] border-dashed"></div>
</div>
<div className="relative z-10 space-y-8 max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase font-['Space_Grotesk']">Live Readings</span>
</div>
<div className="group cursor-default">
<h1 className="glitch-text text-8xl md:text-[10rem] font-medium tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 select-none font-['Space_Grotesk'] group-hover:opacity-90 transition-opacity" data-text="NO">
                        NO
                    </h1>
</div>
<div className="space-y-4">
<p className="text-lg md:text-xl text-zinc-400 font-light tracking-tight max-w-md mx-auto leading-relaxed">
                        The planets are behaving. <span className="text-zinc-200 font-normal">You are the problem.</span>
</p>
<div className="h-px w-16 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"></div>
<p className="text-sm text-zinc-500 italic font-['Space_Grotesk']">
                        "Stop texting your ex and drinking oat milk lattes past 4PM."
                    </p>
</div>

<div className="pt-8">
<button className="group relative px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(192,38,211,0.15)] active:scale-95" id="chaosBtn" onclick="triggerChaos()">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative flex items-center gap-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="lucide:shuffle" width="16"></iconify-icon>
                            Blame the Universe Anyway
                        </span>
</button>
</div>
</div>
</main>

<footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-['Space_Grotesk']">
<div className="flex items-center gap-4">
<span className="hover:text-zinc-400 transition-colors cursor-help" title="Coordinates: 404-NOT-FOUND">Lat: 00°00'00" N</span>
<span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
<span className="hover:text-zinc-400 transition-colors cursor-help" title="Entropy Level: High">Ent: 99.9%</span>
</div>
<div className="flex items-center gap-2">
<span>© 2024 Void Corp.</span>
<span className="text-zinc-800">|</span>
<a className="hover:text-fuchsia-500 transition-colors" href="#">No Refunds</a>
</div>
</footer>
</div>



    </>
  );
}
