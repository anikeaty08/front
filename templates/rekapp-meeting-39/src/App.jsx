import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#131315', // Deep dark background
surface: '#1C1C1E', // Card background
surfaceHighlight: '#232326',
border: '#2A2B30',
primary: '#FFFFFF',
secondary: '#A1A1AA',
tertiary: '#52525B',
accentOrange: '#E0894E',
accentPurple: '#6E649F',
accentRed: '#E24B4B',
linkBlue: '#3B82F6'
},
boxShadow: {
'soft': '0 8px 30px rgba(0,0,0,0.5)',
'glow': '0 0 20px rgba(224, 137, 78, 0.15)',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[240px] flex-shrink-0 border-r border-border flex flex-col justify-between p-4 z-20 bg-bg">
<div className="flex flex-col gap-8">

<div className="flex items-center justify-between px-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-gradient-to-br from-accentPurple to-accentOrange flex items-center justify-center">
<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="font-semibold tracking-tight text-[15px]">Rekapp</span>
</div>
<button className="text-tertiary hover:text-secondary"><i className="w-4 h-4" data-lucide="chevrons-left"></i></button>
</div>

<div className="bg-surface border border-border rounded-xl p-2.5 flex items-center justify-between cursor-pointer hover:border-white/20 group">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-lg object-cover ring-1 ring-white/10" src="https://i.pravatar.cc/150?u=sebastian"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium leading-none mb-1">Sebastian L.</span>
<span className="text-[11px] text-secondary leading-none">Personal Workspaces</span>
</div>
</div>
<i className="w-4 h-4 text-secondary group-hover:text-white" data-lucide="chevron-down"></i>
</div>

<div>
<div className="px-2 mb-2 text-[11px] font-medium text-tertiary tracking-wider uppercase">Main Menu</div>
<nav className="flex flex-col gap-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface border border-border/50 text-white relative group" href="#">
<i className="w-4 h-4 text-accentPurple" data-lucide="layout-grid"></i>
<span className="text-[14px] font-medium">Home</span>

<div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-gradient-to-b from-accentPurple to-accentOrange shadow-[0_0_8px_rgba(224,137,78,0.5)]"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 group-hover:text-white/80" data-lucide="calendar"></i>
<span className="text-[14px] font-medium">All Meetings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 group-hover:text-white/80" data-lucide="list-todo"></i>
<span className="text-[14px] font-medium">Tasks</span>
</a>
</nav>
</div>

<div>
<div className="px-2 mb-2 flex items-center justify-between text-[11px] font-medium text-tertiary tracking-wider uppercase">
<span>Folder</span>
<button className="hover:text-white"><i className="w-3.5 h-3.5" data-lucide="plus-circle"></i></button>
</div>
<nav className="flex flex-col gap-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 text-blue-500 fill-blue-500/20" data-lucide="folder"></i>
<span className="text-[14px] font-medium">UI/UX Design</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 text-pink-500 fill-pink-500/20" data-lucide="folder"></i>
<span className="text-[14px] font-medium">Marketing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 text-orange-500 fill-orange-500/20" data-lucide="folder"></i>
<span className="text-[14px] font-medium">Mentoring</span>
</a>
</nav>
</div>
</div>

<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 group-hover:text-white/80" data-lucide="settings"></i>
<span className="text-[14px] font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-white/5 hover:text-white group" href="#">
<i className="w-4 h-4 text-accentRed group-hover:text-red-400" data-lucide="log-out"></i>
<span className="text-[14px] font-medium">Log Out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col relative z-10 h-screen">

<header className="h-[72px] flex items-center justify-between px-8 border-b border-border bg-bg/95 backdrop-blur-sm z-30">
<h1 className="text-[15px] font-medium">Home</h1>
<div className="flex items-center gap-4">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-accentOrange transition-colors" data-lucide="search"></i>
<input className="bg-surface border border-border rounded-xl pl-10 pr-4 py-2 w-64 text-sm text-white placeholder-secondary focus:outline-none focus:border-accentOrange/50 focus:ring-1 focus:ring-accentOrange/50 transition-all" placeholder="Search anything here" type="text"/>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface text-secondary hover:text-white hover:border-white/20 transition-all relative">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-accentOrange border border-surface"></span>
</button>
</div>
</header>

<div className="flex-1 grid grid-cols-[1fr_320px] overflow-hidden">

<div className="relative overflow-y-auto no-scrollbar flex flex-col items-center pt-8 px-8 pb-32">

<div className="fixed bottom-0 left-[240px] right-[320px] h-[500px] pointer-events-none opacity-40 z-0">
<div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-accentPurple/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-accentOrange/20 rounded-full blur-[100px]"></div>
</div>

<div className="w-full max-w-4xl z-10">
<h2 className="text-[36px] font-bold text-center mb-12 tracking-tight">Good Evening, Sebastian!</h2>
<div className="mb-4">
<span className="text-[13px] font-medium text-secondary">Recent Meetings</span>
</div>

<div className="grid grid-cols-3 gap-5">

<div className="group relative bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">

<div className="relative aspect-video rounded-xl bg-black overflow-hidden mb-3 border border-white/5">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
<i className="w-4 h-4 fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="absolute top-2 left-2">
<input className="w-4 h-4 rounded border-white/30 bg-black/40 accent-accentOrange cursor-pointer" type="checkbox"/>
</div>
<button className="absolute top-2 right-2 p-1 rounded-lg bg-black/40 text-white hover:bg-white/20 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Friday Meeting</h3>
<i className="w-3.5 h-3.5 text-accentPurple fill-accentPurple/20" data-lucide="video"></i>
</div>
<p className="text-[12px] text-secondary">July 8, 2025 • 10:00 AM–11:00 AM</p>
</div>

<div className="absolute top-[50px] right-[-140px] w-48 bg-surfaceHighlight border border-border rounded-xl shadow-2xl p-1 z-50">
<div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/5 text-[13px] font-medium text-white mb-1 cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-secondary" data-lucide="folder-input"></i>
<span>Move to folder</span>
</div>
<i className="w-3.5 h-3.5 text-secondary" data-lucide="chevron-right"></i>
</div>

<div className="pl-2 flex flex-col gap-0.5 mb-1">
<div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" data-lucide="folder"></i>
<span className="text-[12px] text-secondary">UI/UX Design</span>
</div>
<i className="w-3 h-3 text-accentOrange" data-lucide="check"></i>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
<i className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" data-lucide="folder"></i>
<span className="text-[12px] text-secondary">Marketing</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
<i className="w-3.5 h-3.5 text-orange-500 fill-orange-500/20" data-lucide="folder"></i>
<span className="text-[12px] text-secondary">Mentoring</span>
</div>
</div>
<div className="h-px bg-white/5 my-1"></div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-red-500/10 cursor-pointer text-accentRed">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
<span className="text-[12px] font-medium">Delete Recording</span>
</div>
</div>
</div>

<div className="group bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video rounded-xl bg-black overflow-hidden mb-3 border border-white/5">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
<i className="w-4 h-4 fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
<input className="w-4 h-4 rounded border-white/30 bg-black/40 accent-accentOrange cursor-pointer" type="checkbox"/>
</div>
<button className="absolute top-2 right-2 p-1 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Team Standup</h3>
<i className="w-3.5 h-3.5 text-accentPurple fill-accentPurple/20" data-lucide="video"></i>
</div>
<p className="text-[12px] text-secondary">July 9, 2025 • 9:00 AM–9:30 AM</p>
</div>
</div>

<div className="group bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video rounded-xl bg-black overflow-hidden mb-3 border border-white/5">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
<i className="w-4 h-4 fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Client Presentation</h3>
<i className="w-3.5 h-3.5 text-accentPurple fill-accentPurple/20" data-lucide="video"></i>
</div>
<p className="text-[12px] text-secondary">July 10, 2025 • 2:00 PM–3:00 PM</p>
</div>
</div>


<div className="group bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video rounded-xl bg-[#151517] flex items-center justify-center mb-3 border border-white/5">
<div className="flex items-center gap-1 h-8">
<div className="w-1 bg-white/40 h-3 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/40 h-6 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white h-8 rounded-full"></div>
<div className="w-1 bg-white/40 h-5 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/40 h-3 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Project Review</h3>
<i className="w-3.5 h-3.5 text-accentPurple" data-lucide="mic"></i>
</div>
<p className="text-[12px] text-secondary">July 12, 2025 • 1:00 PM–2:00 PM</p>
</div>
</div>

<div className="group bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video rounded-xl bg-[#151517] flex items-center justify-center mb-3 border border-white/5">
<div className="flex items-center gap-1 h-8">
<div className="w-1 bg-white/40 h-4 rounded-full"></div>
<div className="w-1 bg-white/40 h-2 rounded-full"></div>
<div className="w-1 bg-white h-5 rounded-full"></div>
<div className="w-1 bg-white/40 h-8 rounded-full"></div>
<div className="w-1 bg-white/40 h-4 rounded-full"></div>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Project Review</h3>
<i className="w-3.5 h-3.5 text-accentPurple" data-lucide="mic"></i>
</div>
<p className="text-[12px] text-secondary">July 12, 2025 • 1:00 PM–2:00 PM</p>
</div>
</div>

<div className="group bg-surface border border-border rounded-2xl p-3 hover:-translate-y-1 hover:shadow-soft hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video rounded-xl bg-black overflow-hidden mb-3 border border-white/5">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-[15px] text-white">Project Review</h3>
<i className="w-3.5 h-3.5 text-accentPurple fill-accentPurple/20" data-lucide="video"></i>
</div>
<p className="text-[12px] text-secondary">July 12, 2025 • 1:00 PM–2:00 PM</p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 z-50 w-full max-w-2xl px-6">
<div className="relative w-full">
<input className="w-full h-[60px] bg-[#181719] border border-[#2A2B30] rounded-2xl pl-6 pr-32 text-[15px] text-white placeholder-secondary shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] focus:outline-none focus:border-white/20 transition-all" placeholder="What would you like to do next?" type="text"/>
<button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#6A629B] to-[#D87956] hover:brightness-110 text-white text-[13px] font-medium px-4 rounded-xl flex items-center gap-2 shadow-lg transition-all">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                            Ask AI
                        </button>
</div>
</div>
</div>

<aside className="border-l border-border bg-bg/50 backdrop-blur-sm z-20 flex flex-col p-5">

<div className="flex items-center gap-6 border-b border-border pb-3 mb-6">
<button className="relative text-[13px] font-medium text-white pb-1">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
                            Upcoming Meetings
                        </div>
<div className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-accentOrange"></div>
</button>
<button className="text-[13px] font-medium text-secondary hover:text-white pb-1 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
                            Calendar
                        </div>
</button>
</div>

<div className="flex flex-col gap-4">

<div className="p-3 rounded-xl bg-surface border border-border hover:border-white/10 group transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-[14px]">Project Kickoff</span>
<span className="text-[12px] text-linkBlue">zoom</span>
</div>
<div className="text-[11px] text-secondary">July 10, 2025 • 1:00 PM–2:30 PM</div>
</div>
<div className="flex gap-1">
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="video"></i>
</div>
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="mic"></i>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<button className="text-[11px] font-medium text-white border border-border rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors">Join Meeting</button>
<button className="text-tertiary hover:text-white"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>

<div className="relative p-3 rounded-xl bg-surface border border-border group transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-[14px]">Design Review</span>
<span className="text-[12px] text-linkBlue">zoom</span>
</div>
<div className="text-[11px] text-secondary">July 12, 2025 • 9:00 AM–10:00 AM</div>
</div>
<div className="flex gap-1">
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<div className="w-3 h-3 rounded-[1px] border border-accentRed/50 bg-accentRed/20"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<button className="text-[11px] font-medium text-white border border-border rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors">Join Meeting</button>
<button className="text-white"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>

<div className="absolute top-[40px] right-[40px] w-40 bg-surfaceHighlight border border-border rounded-xl shadow-2xl p-1 z-50">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-tertiary cursor-not-allowed">
<i className="w-3.5 h-3.5" data-lucide="mic-off"></i>
<span className="text-[12px] font-medium">No Record</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-red-500/10 cursor-pointer text-accentRed">
<i className="w-3.5 h-3.5" data-lucide="ban"></i>
<span className="text-[12px] font-medium">Cancel Meeting</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface border border-border hover:border-white/10 group transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-[14px]">Client Feedback...</span>
<span className="text-[12px] text-linkBlue">zoom</span>
</div>
<div className="text-[11px] text-secondary">July 15, 2025 • 3:00 PM–4:00 PM</div>
</div>
<div className="flex gap-1">
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="video"></i>
</div>
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="mic"></i>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<button className="text-[11px] font-medium text-white border border-border rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors">Join Meeting</button>
<button className="text-tertiary hover:text-white"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface border border-border hover:border-white/10 group transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-[14px]">Sprint Planning</span>
<span className="text-[12px] text-linkBlue">zoom</span>
</div>
<div className="text-[11px] text-secondary">July 18, 2025 • 11:00 AM–12:00 PM</div>
</div>
<div className="flex gap-1">
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="video"></i>
</div>
<div className="w-7 h-7 rounded-lg bg-[#242426] flex items-center justify-center border border-white/5">
<i className="w-3 h-3 text-secondary" data-lucide="mic"></i>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<button className="text-[11px] font-medium text-white border border-border rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors">Join Meeting</button>
<button className="text-tertiary hover:text-white"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>
</div>
</aside>
</div>
</main>


    </>
  );
}
