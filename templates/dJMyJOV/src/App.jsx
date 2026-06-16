import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-x-0 bottom-0 h-64 z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'linear-gradient(to top, rgba(36,36,43,0.90) 80%, rgba(36,36,43,0) 100%)'}}></div>
</div>
<main className="relative z-10 w-full max-w-xl">
<section className="bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl border border-neutral-200/80 dark:border-neutral-700/80 backdrop-blur-md p-0 overflow-hidden">
<div className="p-8 md:p-12">
<header className="mb-4 flex flex-col items-start gap-1">
<div className="flex items-center gap-3">
<svg className="w-8 h-8 text-emerald-400 dark:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                Homework Overview
              </h1>
</div>
<p className="text-base text-neutral-500 dark:text-neutral-400 font-medium ml-11">Stay ahead with clear goals</p>
</header>
<ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
<li className="py-5 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">Math</span>
<span className="text-base tabular-nums font-bold text-emerald-400">
                  8<span className="text-neutral-400 font-medium">/10</span>
</span>
</div>
<div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700/60 rounded-full overflow-hidden flex items-center">
<div className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-300" style={{width: '80%'}}></div>
</div>
</li>
<li className="py-5 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">English</span>
<span className="text-base tabular-nums font-bold text-sky-400">
                  5<span className="text-neutral-400 font-medium">/8</span>
</span>
</div>
<div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700/60 rounded-full overflow-hidden flex items-center">
<div className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" style={{width: '62.5%'}}></div>
</div>
</li>
<li className="py-5 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">Science</span>
<span className="text-base tabular-nums font-bold text-violet-400">
                  3<span className="text-neutral-400 font-medium">/6</span>
</span>
</div>
<div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700/60 rounded-full overflow-hidden flex items-center">
<div className="h-3 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300" style={{width: '50%'}}></div>
</div>
</li>
<li className="py-5 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">History</span>
<span className="text-base tabular-nums font-bold text-pink-400">
                  9<span className="text-neutral-400 font-medium">/12</span>
</span>
</div>
<div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700/60 rounded-full overflow-hidden flex items-center">
<div className="h-3 rounded-full bg-gradient-to-r from-pink-400 to-red-300" style={{width: '75%'}}></div>
</div>
</li>
<li className="py-5 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">Art</span>
<span className="text-base tabular-nums font-bold text-yellow-300">
                  2<span className="text-neutral-400 font-medium">/4</span>
</span>
</div>
<div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700/60 rounded-full overflow-hidden flex items-center">
<div className="h-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-200" style={{width: '50%'}}></div>
</div>
</li>
</ul>
</div>
</section>
</main>

    </>
  );
}
