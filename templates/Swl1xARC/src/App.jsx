import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-xl w-full rounded-3xl px-9 pt-9 pb-8 bg-white/70 border border-[#ececf0] shadow-2xl backdrop-blur-md flex flex-col gap-7 relative overflow-visible">
<header className="flex flex-col gap-2 items-center pb-2">
<div className="text-base uppercase tracking-widest font-medium text-gray-400 mb-1">Employee Skill Assessment</div>
<div className="text-3xl font-semibold text-gray-800 tracking-tight">2024 Overview</div>
</header>
<div className="flex flex-col gap-5 pt-2">
<div className="text-center text-sm text-gray-400 mb-4">Skill scores based on recent performance review</div>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Communication</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#d1ecfd] via-[#aee9fc] to-[#62c6fa]" style={{width: '78%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">78</div>
</div>
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Technical Skills</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#d1eaff] via-[#bac5fc] to-[#828ffe]" style={{width: '85%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">85</div>
</div>
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Leadership</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#edd7f7] via-[#bcb6ec] to-[#9e8dfc]" style={{width: '67%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">67</div>
</div>
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Creativity</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#fef6e6] via-[#fdecc5] to-[#fed697]" style={{width: '72%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">72</div>
</div>
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Teamwork</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#eafde1] via-[#a1edb6] to-[#36e17c]" style={{width: '89%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">89</div>
</div>
<div className="flex items-center gap-3">
<div className="w-40 text-right pr-3 text-gray-500 font-medium">Time Management</div>
<div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
<div className="h-3 rounded-full bg-gradient-to-r from-[#fdedec] via-[#fccec7] to-[#f98181]" style={{width: '77%'}}></div>
</div>
<div className="ml-3 text-gray-800 font-semibold tabular-nums">77</div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col items-center space-y-1">
<div className="text-2xl font-semibold text-gray-700 tracking-tight">
        Average Score:
        <span className="ml-2 bg-gradient-to-bl from-[#aee9fc] via-[#a1edb6] to-[#bcb6ec] bg-clip-text text-transparent font-bold">78</span>
</div>
<div className="text-xs text-gray-400 font-medium">All scores out of 100</div>
</div>
</div>

    </>
  );
}
