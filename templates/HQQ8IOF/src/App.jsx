import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  lucide.createIcons();

  /* Micro-interaction for mic button */
  let recording = false;
  const micBtn   = document.getElementById('micBtn');
  const micPulse = document.getElementById('micPulse');

  micBtn?.addEventListener('click', () => {
    recording = !recording;
    micPulse.classList.toggle('hidden', !recording);
    micBtn.classList.toggle('bg-red-600', recording);
    micBtn.classList.toggle('hover:bg-red-500', recording);
    micBtn.setAttribute('aria-pressed', recording);
  });

  /* Simple prompt flows for link buttons */
  document.getElementById('ytBtn')?.addEventListener('click', () => {
    const link = prompt('Paste YouTube URL');
    if (link) alert('Received: ' + link);
  });

  document.getElementById('blogBtn')?.addEventListener('click', () => {
    const link = prompt('Paste article URL');
    if (link) alert('Received: ' + link);
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[380px] h-[820px] bg-[#E5E5E5] bg-neutral-950 rounded-[48px] pt-2 pr-2 pb-2 pl-2 shadow-xl">
<div className="w-full h-full flex flex-col overflow-hidden bg-neutral-200 rounded-[44px]">

<div className="h-8"></div>

<header className="flex gap-3 mt-2 mr-6 mb-4 ml-6 items-center">
<div className="flex gap-0.5">
<svg className="lucide lucide-skip-back lucide-step-back lucide-chevron-left cursor-pointer w-[26px] h-[26px]" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '26px', height: '26px', color: 'rgb(82, 82, 82)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
</div>
<h1 className="text-[22px] text-2xl font-extrabold text-neutral-900 tracking-tighter">New Topic</h1>
</header>

<div className="border-t border-dashed border-neutral-200"></div>

<main className="flex-1 overflow-y-auto bg-[#E5E5E5] pr-2 pb-6 pl-2 space-y-4">

<section className="bg-[#262626] rounded-2xl pt-3 pr-2 pb-3 pl-2 shadow-sm space-y-4">
<div className="">
<div className="flex gap-3 mb-4 items-center">
<div className="w-10 h-10 flex bg-neutral-700 rounded-full items-center justify-center">
<svg className="lucide lucide-mic w-[20px] h-[20px]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<label aria-label="Upload document" className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition bg-neutral-50 border-neutral-200 border rounded-full" htmlFor="docInput">
<svg className="lucide lucide-plus lucide-file-plus w-[20px] h-[20px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '20px', height: '20px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<input accept=".pdf,.doc,.docx" className="hidden" id="docInput" type="file"/>
</label>
<div className="">
<h3 className="text-lg font-extrabold text-white tracking-tighter">Your learning goal</h3>
<p className="text-xs font-semibold text-neutral-300">Share what you want to learn</p>
</div>
</div>
<textarea className="w-full focus:ring-2 focus:ring-neutral-800 focus:border-transparent resize-none text-sm bg-white border-neutral-200 border rounded-xl pt-3 pr-3 pb-8 pl-3" placeholder="e.g. “How to design a responsive icon set”" rows="3"></textarea>
</div>
<button className="w-full flex gap-2 hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-opacity-50 text-xl font-extrabold text-neutral-800 tracking-tighter bg-white rounded-xl pt-3 pr-3 pb-3 pl-3 items-center justify-center">
<div className="w-10 h-10 flex bg-[#34F8BB] text-neutral-700 rounded-full items-center justify-center">
<svg className="w-[32px] h-[32px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" style={{width: '32px', height: '32px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</div>
          Generate Outline
        </button>
</section>

<div className="bg-[#ffffff] border-0 rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="flex mb-2 items-center justify-between">
<h3 className="text-lg font-bold text-neutral-800 tracking-tighter pl-2">Based on your past topics</h3>
<button className="hover:bg-neutral-100 transition-colors duration-150 bg-neutral-700 rounded-full pt-2 pr-2 pb-2 pl-2" onclick="toggleFilter()">
<svg className="lucide lucide-refresh-ccw w-[20px] h-[20px]" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>
<div className="bg-[#C7C2BE] border-neutral-300 border rounded-xl px-1 py-1">
<button className="hover:bg-neutral-800 transition text-sm font-bold text-white tracking-tight bg-[#262626] rounded-full mr-1 mb-2 pt-2 pr-4 pb-2 pl-4">UI Typography</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold text-[#262626] tracking-tight bg-neutral-50 border-neutral-200 border rounded-full mb-2 pt-2 pr-4 pb-2 pl-4">Color Theory</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full mr-1 mb-2 pt-2 pr-4 pb-2 pl-4">Accessibility</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full pt-2 pr-4 pb-2 pl-4">Design Systems</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full pt-2 pr-4 pb-2 pl-4">Motion Principles</button>
</div>
</div>
<div className="bg-[#ffffff] border-0 rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="flex mb-2 items-center justify-between">
<h3 className="text-lg font-bold text-neutral-800 tracking-tighter pl-2">Designers in your field learn</h3>
<button className="hover:bg-neutral-100 transition-colors duration-150 bg-neutral-700 rounded-full pt-2 pr-2 pb-2 pl-2" onclick="toggleFilter()">
<svg className="lucide lucide-refresh-ccw w-[20px] h-[20px]" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>
<div className="bg-[#C7C2BE] border-neutral-300 border rounded-xl px-1 py-1">
<button className="hover:bg-neutral-800 transition text-sm font-bold text-white tracking-tight bg-[#262626] rounded-full mr-1 mb-2 pt-2 pr-4 pb-2 pl-4">UI Typography</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold text-[#262626] tracking-tight bg-neutral-50 border-neutral-200 border rounded-full mb-2 pt-2 pr-4 pb-2 pl-4">Color Theory</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full mr-1 mb-2 pt-2 pr-4 pb-2 pl-4">Accessibility</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full pt-2 pr-4 pb-2 pl-4">Design Systems</button>
<button className="hover:bg-neutral-100 transition text-sm font-bold tracking-tight bg-neutral-50 border-neutral-200 border rounded-full pt-2 pr-4 pb-2 pl-4">Motion Principles</button>
</div>
</div>
</main>

<div className="sticky bottom-0 left-0 right-0 shadow-[0_-2px_10px_-3px_rgba(0,0,0,0.05)] bg-neutral-200 border-0 border-t pt-2 pr-2 pb-2 pl-2 backdrop-blur-md">
<nav className="flex items-center justify-around">
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-800 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline className="" points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="text-xs font-medium text-neutral-950">Home</span>
</a>
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-500 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path><path d="M6 8h2"></path><path d="M6 12h2"></path><path d="M16 8h2"></path><path d="M16 12h2"></path></svg>
<span className="text-xs font-bold text-neutral-400">Topics</span>
</a>
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-500 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-bold text-neutral-400">Profile</span>
</a>
</nav>
</div>

<div className="h-6 bg-[#E5E5E5]"></div>
</div>
</div>


    </>
  );
}
