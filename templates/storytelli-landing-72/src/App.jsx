import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#FF5700] opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="relative z-10 w-full max-w-md h-full flex flex-col justify-between p-6 sm:p-8">

<div className="flex flex-col items-center pt-8 sm:pt-12 fade-in">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
                Who's watching?
            </h1>
<p className="text-zinc-400 text-sm font-light mt-2 tracking-wide">Choose your profile</p>
</div>

<div className="flex-1 flex flex-col justify-center items-center w-full">
<div className="flex gap-6 sm:gap-10 w-full justify-center">

<button className="group flex flex-col items-center gap-4 focus:outline-none">
<div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#2a2a2a] border-2 border-[#FF8D00] shadow-[0_0_30px_-10px_rgba(255,141,0,0.3)] flex items-center justify-center relative transition-all duration-300 transform group-hover:scale-105">
<iconify-icon className="text-[#FF8D00] text-5xl sm:text-6xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>

<div className="absolute -top-2 -right-2 bg-[#FF8D00] text-black rounded-full p-1 shadow-lg">
<iconify-icon className="text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-[#FF8D00] transition-colors">Standard</span>
</button>

<button className="group flex flex-col items-center gap-4 focus:outline-none">
<div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#2a2a2a] border-2 border-transparent group-hover:border-[#FF8D00]/50 group-hover:bg-[#303030] flex items-center justify-center relative transition-all duration-300 transform group-hover:scale-105">
<iconify-icon className="text-zinc-400 group-hover:text-white text-5xl sm:text-6xl transition-colors" icon="solar:emoji-funny-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">Kids</span>
</button>
</div>

<div className="w-full mt-12 max-w-xs mx-auto space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Content Language</label>
<div className="relative group cursor-pointer">
<div className="w-full bg-[#121212] rounded-xl px-4 py-3.5 flex items-center justify-between border border-white/5 group-hover:border-[#FF8D00]/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:global-linear"></iconify-icon>
<span className="text-sm font-medium text-white">English (EN)</span>
</div>
<iconify-icon className="text-zinc-400 text-lg group-hover:text-[#FF8D00] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full pb-6 sm:pb-8 flex flex-col gap-4">
<button className="relative w-full h-14 rounded-full overflow-hidden group shadow-lg shadow-[#FF5700]/10 hover:shadow-[#FF5700]/20 transition-all active:scale-[0.98]">

<div className="absolute inset-0 bg-gradient-to-r from-[#FFC400] to-[#FF5700] transition-transform duration-500 group-hover:scale-105"></div>

<div className="relative flex items-center justify-center gap-2 h-full">
<span className="text-black font-semibold text-lg tracking-tight">Continue to App</span>
<iconify-icon className="text-black text-xl translate-y-[1px]" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</button>
<button className="text-xs text-zinc-500 hover:text-white transition-colors font-light tracking-wide mx-auto">
                Manage Profiles
            </button>
</div>
</div>

    </>
  );
}
