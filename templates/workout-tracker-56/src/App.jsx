import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex items-center justify-between px-6 pt-8 pb-2 z-10">
<button className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center hover:bg-[#3f3f46] transition-colors group">
<i className="text-white w-6 h-6 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center hover:bg-[#3f3f46] transition-colors">
<i className="text-white w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
</button>
</header>

<div className="px-6 mt-4 mb-2 z-10">
<h1 className="text-[32px] font-semibold tracking-tight leading-none mb-3">Record Workout</h1>
<p className="text-lg text-neutral-500 font-medium">Choose a workout to begin.</p>
</div>

<main className="flex-1 flex flex-col justify-center px-6 pb-28 w-full max-w-md mx-auto z-10">
<h2 className="text-[19px] font-semibold text-center mb-6 tracking-tight text-white">You don't have an active split yet</h2>

<button className="w-full bg-[#bef264] hover:bg-[#a3e635] text-black text-[17px] font-semibold py-[18px] rounded-full transition-all active:scale-[0.98] duration-200 shadow-lg shadow-[#bef264]/10 mb-8">
            Build Your First Split
        </button>

<p className="text-neutral-500 text-center font-medium text-[15px] mb-6">Or start with a single workout</p>

<button className="w-full bg-[#1c1c1e] hover:bg-[#27272a] border border-white/5 text-white font-semibold py-[18px] rounded-full transition-all active:scale-[0.98] duration-200 flex items-center justify-center gap-3 mb-6 group">
<div className="bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<i className="text-black w-3.5 h-3.5 stroke-[3]" data-lucide="plus"></i>
</div>
<span className="text-[17px]">Build Workout</span>
</button>

<div className="h-px bg-white/10 w-full mb-6"></div>

<button className="w-full bg-[#1c1c1e] hover:bg-[#27272a] border border-white/5 text-white font-semibold py-[18px] rounded-full transition-all active:scale-[0.98] duration-200 flex items-center justify-center gap-3 group">
<i className="text-[#bef264] w-5 h-5 stroke-[1.5] fill-[#bef264] group-hover:scale-110 transition-transform" data-lucide="sparkles"></i>
<span className="text-[17px]">AI Build</span>
</button>
</main>

<div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto">
<nav className="bg-[#1c1c1e] rounded-[36px] px-2 h-[72px] flex items-center justify-between shadow-2xl shadow-black/80 border border-white/5 relative backdrop-blur-md">

<div className="flex items-center gap-2 pl-3">
<a className="p-3 text-neutral-500 hover:text-white transition-colors group" href="#">
<i className="w-[26px] h-[26px] stroke-[1.5] group-hover:scale-105 transition-transform" data-lucide="house"></i>
</a>
<a className="p-3 text-neutral-500 hover:text-white transition-colors group" href="#">
<i className="w-[26px] h-[26px] stroke-[1.5] group-hover:scale-105 transition-transform" data-lucide="compass"></i>
</a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<button className="w-[58px] h-[58px] bg-[#bef264] rounded-full flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 transition-transform active:scale-95 group">
<i className="text-black w-7 h-7 stroke-[2] group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</button>
</div>

<div className="flex items-center gap-2 pr-3">
<a className="p-3 text-neutral-500 hover:text-white transition-colors group" href="#">
<i className="w-[26px] h-[26px] stroke-[1.5] group-hover:scale-105 transition-transform" data-lucide="wrench"></i>
</a>
<a className="p-3 text-neutral-500 hover:text-white transition-colors group" href="#">
<i className="w-[26px] h-[26px] stroke-[1.5] group-hover:scale-105 transition-transform" data-lucide="user"></i>
</a>
</div>
</nav>
</div>


    </>
  );
}
