import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchPage(targetId) {
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            
            // Fade out current
            const current = targetId === 'page2' ? page1 : page2;
            const target = targetId === 'page2' ? page2 : page1;
            
            current.style.opacity = '0';
            current.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                current.classList.add('hidden-page');
                target.classList.remove('hidden-page');
                
                // Small delay to allow display:block to apply before animating opacity
                requestAnimationFrame(() => {
                    target.style.opacity = '1';
                    target.style.transform = 'scale(1)';
                });
            }, 300); // Matches CSS transition duration roughly half-way
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-mesh"></div>
<div className="floater text-rose-200"><iconify-icon icon="lucide:heart" width="32"></iconify-icon></div>
<div className="floater text-rose-100"><iconify-icon icon="lucide:sparkles" width="48"></iconify-icon></div>
<div className="floater text-purple-100"><iconify-icon icon="lucide:cloud" width="40"></iconify-icon></div>
<div className="floater text-pink-100"><iconify-icon icon="lucide:flower-2" width="36"></iconify-icon></div>

<main className="page flex flex-col items-center" id="page1">
<div className="glass rounded-[2rem] p-8 md:p-10 w-full text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 via-pink-200 to-rose-200 opacity-50"></div>

<div className="fade-in-up">
<div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-white shadow-sm text-rose-300 ring-4 ring-rose-50">
<iconify-icon height="20" icon="lucide:coffee" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-rose-950 mb-4">
                    hey, today can be slow.
                </h1>
<p className="text-sm md:text-[15px] leading-relaxed text-slate-500 font-medium mb-8 mx-auto max-w-[280px]">
                    I know the body feels heavy right now and things are a bit much. It’s perfectly okay to pause everything else while you catch your breath.
                </p>
</div>

<div className="grid grid-cols-2 gap-3 mb-8 fade-in-up delay-1">
<div className="bg-white/40 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white">
<iconify-icon className="text-sky-300" icon="lucide:droplets" width="18"></iconify-icon>
<span className="text-xs text-slate-400 font-semibold">hydrate</span>
</div>
<div className="bg-white/40 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white">
<iconify-icon className="text-orange-300" icon="lucide:thermometer-sun" width="18"></iconify-icon>
<span className="text-xs text-slate-400 font-semibold">warmth</span>
</div>
</div>

<div className="mb-10 fade-in-up delay-2">
<p className="text-sm text-rose-800/70 italic leading-loose">
                    "I wish I could be there to make things a little softer for you. Just imagine I'm sitting quietly nearby, keeping you company until the wave passes."
                </p>
</div>

<div className="fade-in-up delay-3">
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-200 to-pink-100 text-rose-900 rounded-full shadow-lg shadow-rose-100 hover:shadow-xl hover:shadow-rose-200/50 hover:-translate-y-0.5 transition-all duration-500 w-full" onclick="switchPage('page2')">
<span className="text-sm font-semibold tracking-wide">gentle reminders 🌷</span>
<iconify-icon className="opacity-60 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</main>

<main className="page hidden-page flex flex-col items-center" id="page2">
<div className="glass rounded-[2rem] p-8 md:p-10 w-full relative overflow-hidden">

<div className="text-center mb-8 fade-in-up">
<h2 className="handwriting text-4xl text-rose-300 mb-2">small reminders</h2>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">for right now</p>
</div>

<div className="space-y-4 mb-10">

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white shadow-sm fade-in-up delay-1 hover:bg-white/80 transition-colors duration-300">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 flex-shrink-0">
<iconify-icon icon="lucide:moon" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600 font-medium">it is okay to simply rest</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white shadow-sm fade-in-up delay-2 hover:bg-white/80 transition-colors duration-300">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 flex-shrink-0">
<iconify-icon icon="lucide:snail" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600 font-medium">your pace is enough</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white shadow-sm fade-in-up delay-3 hover:bg-white/80 transition-colors duration-300">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 flex-shrink-0">
<iconify-icon icon="lucide:wind" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600 font-medium">slow breaths matter most</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white shadow-sm fade-in-up delay-4 hover:bg-white/80 transition-colors duration-300">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 flex-shrink-0">
<iconify-icon icon="lucide:shield-check" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600 font-medium">you are safe here</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white shadow-sm fade-in-up delay-5 hover:bg-white/80 transition-colors duration-300">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 flex-shrink-0">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-600 font-medium">I am here with u my lady</span>
</div>
</div>

<div className="text-center fade-in-up delay-5">
<button className="group inline-flex items-center justify-center gap-2 px-6 py-2 text-rose-400 hover:text-rose-600 transition-colors" onclick="switchPage('page1')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">back to comfort</span>
</button>
</div>
</div>
</main>


    </>
  );
}
