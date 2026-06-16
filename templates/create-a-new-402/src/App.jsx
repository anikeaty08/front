import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 h-full bg-white border-r border-zinc-200 flex flex-col shrink-0 hidden md:flex">

<div className="h-14 flex items-center px-4 mt-1">
<div className="flex items-center gap-2.5 cursor-pointer w-full py-1.5 px-2 -ml-2 rounded-lg hover:bg-zinc-50 transition-colors">
<div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center font-medium text-xs tracking-tighter">
                    IN
                </div>
<span className="font-medium text-base tracking-tight text-zinc-900 uppercase">Inflara</span>
<i className="ml-auto w-4 h-4 text-zinc-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-8">

<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500" data-lucide="inbox"></i>
<span className="text-sm">Inbox</span>
<span className="ml-auto text-xs text-zinc-400">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-100/80 text-zinc-900 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
<span className="text-sm">Planning</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500" data-lucide="layers"></i>
<span className="text-sm">Capacity</span>
</a>
</nav>

<div className="flex flex-col gap-1">
<div className="px-3 py-2 mb-1">
<span className="text-xs tracking-wider text-zinc-400 uppercase">Projects</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<div className="w-2 h-2 rounded-full border-[1.5px] border-orange-400"></div>
<span className="truncate text-sm">Q4 Website Redesign</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<div className="w-2 h-2 rounded-full border-[1.5px] border-blue-400"></div>
<span className="truncate text-sm">Mobile App V2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<div className="w-2 h-2 rounded-full border-[1.5px] border-purple-400"></div>
<span className="truncate text-sm">Marketing Campaign</span>
</a>
</div>

<div className="flex flex-col gap-1">
<div className="px-3 py-2 mb-1">
<span className="text-xs tracking-wider text-zinc-400 uppercase">Areas</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="hash"></i>
<span className="text-sm">Work</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="hash"></i>
<span className="text-sm">Personal</span>
</a>
</div>
</div>

<div className="p-4 flex flex-col gap-2 mt-auto border-t border-zinc-100">
<button className="w-full flex items-center justify-center gap-2 bg-[#18181B] hover:bg-[#27272A] text-white rounded-md py-2 px-3 text-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
                Create Task
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 mt-2 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4 text-zinc-500" data-lucide="settings"></i>
<span className="text-sm">Settings</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] relative h-full">

<header className="h-16 shrink-0 flex flex-col justify-center border-b border-zinc-200 bg-white px-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<h1 className="text-2xl tracking-tight text-zinc-900">Today's Plan</h1>

<div className="flex items-center bg-zinc-100 rounded-md p-1">
<button className="px-4 py-1 text-sm bg-white shadow-sm rounded border border-zinc-200/50 text-zinc-900 transition-colors">Day</button>
<button className="px-4 py-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Week</button>
</div>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-sm text-zinc-600">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        5h 30m / 8h
                    </div>

<button className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>
</div>
</header>

<div className="flex flex-col h-[55%] min-h-[350px] bg-white">

<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 shrink-0">
<h2 className="text-base text-zinc-900">Unscheduled Tasks &amp; Pipeline</h2>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-zinc-200 rounded-md text-zinc-600 hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i> New Column
                </button>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-6 flex gap-6 items-start">

<div className="w-80 shrink-0 flex flex-col gap-3">
<div className="flex items-center gap-2 px-1 text-zinc-500">
<i className="w-4 h-4 opacity-50 cursor-grab" data-lucide="grip-horizontal"></i>
<span className="text-xs uppercase tracking-wider text-zinc-600">To Do</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-100 text-xs text-zinc-500 ml-1">4</span>
<button className="ml-auto opacity-50 hover:opacity-100"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border-l-2 border-l-orange-400 group cursor-pointer hover:border-zinc-300 transition-colors">
<div className="flex items-start justify-between gap-2 mb-3">
<h3 className="text-sm text-zinc-900 leading-snug">Draft initial copy for landing page</h3>
<i className="w-4 h-4 text-orange-400 shrink-0" data-lucide="circle-alert"></i>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 text-xs text-zinc-600">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                Website
                            </div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="clock"></i>
                                45m
                            </div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border-l-2 border-l-purple-400 group cursor-pointer hover:border-zinc-300 transition-colors">
<div className="flex items-start justify-between gap-2 mb-3">
<h3 className="text-sm text-zinc-900 leading-snug">Review latest design mockups</h3>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 text-xs text-zinc-600">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                App V2
                            </div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="clock"></i>
                                30m
                            </div>
</div>
</div>
<button className="text-sm text-zinc-500 hover:text-zinc-900 text-left px-2 py-1 mt-1">Add Task</button>
</div>

<div className="w-80 shrink-0 flex flex-col gap-3">
<div className="flex items-center gap-2 px-1 text-blue-500">
<i className="w-4 h-4 opacity-50 cursor-grab" data-lucide="grip-horizontal"></i>
<span className="text-xs uppercase tracking-wider text-blue-600">In Progress</span>
<span className="px-1.5 py-0.5 rounded bg-blue-100 text-xs text-blue-600 ml-1">1</span>
<button className="ml-auto opacity-50 hover:opacity-100 text-zinc-500"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>

<div className="bg-white border border-dashed border-blue-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group cursor-pointer hover:border-blue-300 transition-colors relative overflow-hidden">
<div className="flex items-start justify-between gap-2 mb-4">
<h3 className="text-sm text-zinc-900 leading-snug">Compile competitor analysis report</h3>
</div>

<div className="w-full bg-zinc-100 rounded-full h-1.5 mb-2">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '50%'}}></div>
</div>
<div className="flex justify-end mb-3">
<span className="text-xs text-zinc-400">3/6</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 text-xs text-zinc-600">
                                Research
                            </div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="clock"></i>
                                2h
                            </div>
</div>
</div>
<button className="text-sm text-zinc-500 hover:text-zinc-900 text-left px-2 py-1 mt-1">Add Task</button>
</div>

<div className="w-80 shrink-0 flex flex-col gap-3">
<div className="flex items-center gap-2 px-1 text-purple-500">
<i className="w-4 h-4 opacity-50 cursor-grab" data-lucide="grip-horizontal"></i>
<span className="text-xs uppercase tracking-wider text-purple-600">Review</span>
<span className="px-1.5 py-0.5 rounded bg-purple-100 text-xs text-purple-600 ml-1">1</span>
<button className="ml-auto opacity-50 hover:opacity-100 text-zinc-500"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border-l-2 border-l-blue-500 group cursor-pointer hover:border-zinc-300 transition-colors">
<div className="flex items-start justify-between gap-2 mb-3">
<h3 className="text-sm text-zinc-900 leading-snug">Update user schema migrations</h3>
<i className="w-4 h-4 text-red-500 shrink-0" data-lucide="circle-alert"></i>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 text-xs text-zinc-600">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                Backend
                            </div>
</div>
</div>
<button className="text-sm text-zinc-500 hover:text-zinc-900 text-left px-2 py-1 mt-1">Add Task</button>
</div>

<div className="w-80 shrink-0 flex flex-col gap-3">
<div className="flex items-center gap-2 px-1 text-zinc-500">
<i className="w-4 h-4 opacity-50 cursor-grab" data-lucide="grip-horizontal"></i>
<span className="text-xs uppercase tracking-wider text-zinc-600">Done</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-100 text-xs text-zinc-500 ml-1">2</span>
</div>

<div className="bg-zinc-50/50 border border-zinc-200/60 rounded-lg p-4 group cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-300 shrink-0" data-lucide="circle-check"></i>
<h3 className="text-sm text-zinc-400 line-through decoration-zinc-300 leading-snug">Weekly sync prep</h3>
</div>
</div>
</div>
</div>
</div>

<div className="h-1.5 bg-zinc-100 border-y border-zinc-200 cursor-row-resize flex items-center justify-center shrink-0 z-10">

</div>

<div className="flex-1 bg-white overflow-hidden flex flex-col">

<div className="flex items-center gap-3 px-6 py-3 border-b border-zinc-100 shrink-0 bg-white z-10">
<i className="w-4 h-4 text-zinc-500" data-lucide="calendar"></i>
<h2 className="text-base text-zinc-900">Schedule</h2>
<span className="text-sm text-zinc-400 ml-2">Drag tasks from pipeline to schedule</span>
</div>

<div className="flex-1 overflow-y-auto relative bg-white pb-20">

<div className="absolute inset-0 pointer-events-none w-full">
<div className="h-[80px] border-b border-zinc-100 w-full ml-[60px]"></div>
<div className="h-[80px] border-b border-zinc-100 w-full ml-[60px]"></div>
<div className="h-[80px] border-b border-zinc-100 w-full ml-[60px]"></div>
<div className="h-[80px] border-b border-zinc-100 w-full ml-[60px]"></div>
<div className="h-[80px] border-b border-zinc-100 w-full ml-[60px]"></div>
</div>

<div className="absolute top-0 left-0 w-[60px] h-full flex flex-col pt-2 bg-white z-10">
<div className="h-[80px] text-xs text-zinc-400 text-right pr-4">8 AM</div>
<div className="h-[80px] text-xs text-zinc-400 text-right pr-4">9 AM</div>
<div className="h-[80px] text-xs text-zinc-400 text-right pr-4">10 AM</div>
<div className="h-[80px] text-xs text-zinc-400 text-right pr-4">11 AM</div>
</div>

<div className="absolute top-0 left-[60px] right-6 h-full pt-4">

<div className="absolute w-full h-[70px] top-[76px] bg-[#F9FAFB] border border-zinc-200 rounded-md border-l-4 border-l-zinc-300 p-2.5 flex flex-col justify-center cursor-pointer hover:bg-zinc-100 transition-colors">
<div className="flex items-center justify-between">
<h4 className="text-sm text-zinc-900">Team Standup</h4>
<span className="text-xs text-zinc-500">Event</span>
</div>
<span className="text-xs text-zinc-500 mt-1">9:00 - 10:00 AM • Zoom</span>
</div>

<div className="absolute w-[calc(100%+60px)] -ml-[60px] top-[196px] h-px bg-red-400 z-20 flex items-center">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 ml-[55px] z-30"></div>
</div>

<div className="absolute w-full h-[60px] top-[196px] bg-white border border-zinc-200 border-t-0 rounded-md rounded-t-none border-l-[3px] border-l-orange-400 p-2.5 shadow-sm cursor-pointer hover:bg-zinc-50 transition-colors z-10">
<h4 className="text-sm text-zinc-900 leading-none mb-1">Write Landing Page Copy</h4>
<span className="text-xs text-zinc-400">Website Redesign</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-50">
<button className="flex items-center gap-2 bg-[#18181B] text-white px-3 py-2 rounded-full text-xs shadow-lg hover:bg-black transition-colors">
<div className="w-3.5 h-3.5 rounded bg-zinc-800 flex items-center justify-center font-bold text-[8px]">A</div>
                Made in Aura
            </button>
</div>
</main>


    </>
  );
}
