import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gray: {
25: '#FCFCFD',
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
},
blue: {
50: '#EFF6FF',
100: '#DBEAFE',
600: '#2563EB',
700: '#1D4ED8',
}
},
fontSize: {
'xxs': '11px',
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.05)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[260px] flex flex-col border-r border-gray-200 bg-white flex-shrink-0">

<div className="h-14 flex items-center px-4 justify-between flex-shrink-0">
<div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded-md transition-colors">
<div className="w-6 h-6 bg-indigo-800 rounded-md flex items-center justify-center text-white font-bold text-xs">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
</svg>
</div>
<span className="font-semibold text-sm tracking-tight">Emura's...</span>
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="m8 9 4-4 4 4M16 15l-4 4-4-4"></path>
</svg>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</button>
</div>

<div className="px-4 mb-4">
<div className="relative group">
<svg className="absolute left-2.5 top-1.5 text-gray-400 group-hover:text-gray-500 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="text-[13px] focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-100 transition-all placeholder:text-gray-400 text-gray-600 bg-white w-full border-gray-200 border rounded-md pt-1.5 pr-8 pb-1.5 pl-8" placeholder="Search" type="text"/>
<div className="flex select-none text-[10px] pointer-events-none font-medium text-gray-500 font-sans bg-gray-50 h-5 border-gray-200 border rounded pr-1.5 pl-1.5 absolute top-1.5 right-2 items-center justify-center">
<span className="leading-none scale-125">⌘ K</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 space-y-6 scrollbar-hide">

<div className="space-y-0.5">
<div className="px-2 py-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">Main</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md group transition-colors" href="#">
<svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span>Home</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md group transition-colors" href="#">
<svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span>Inbox</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md group transition-colors" href="#">
<svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span>Team</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md group transition-colors" href="#">
<svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<span>Docs</span>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md group transition-colors" href="#">
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<span>More</span>
</div>
<svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>

<div className="space-y-0.5">
<div className="px-2 py-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1 flex justify-between items-center group">
                    Spaces
                </div>

<div className="flex items-center gap-2 px-2 py-1.5 text-gray-700 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
<div className="w-4 h-4 bg-emerald-500 rounded text-white flex items-center justify-center text-[10px] font-bold">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="truncate">Agency Management</span>
<span className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600">+</span>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 pl-8 text-gray-700 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="truncate">Small Client Project</span>
<span className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600">+</span>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 pl-[3.25rem] bg-gray-100 text-gray-900 rounded-md font-medium cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
<span className="truncate">Project 1</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 pl-[3.25rem] text-gray-500 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
<span className="truncate">Project 2</span>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="truncate">Scope of Work</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="truncate">PostSale</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="truncate">CRM</span>
</div>
<div className="px-2 py-1 text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Space</span>
</div>
</div>
<div className="pt-2 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
<div className="w-4 h-4 bg-indigo-600 rounded-sm text-white flex items-center justify-center text-[9px] font-bold">C</div>
<span>Odie Banking</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
<div className="w-4 h-4 bg-purple-600 rounded-sm text-white flex items-center justify-center text-[9px] font-bold">D</div>
<span className="">Dalton Management</span>
</div>
<div className="px-2 py-1 text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Space</span>
</div>
</div>
</div>

<div className="p-2 space-y-0.5 mt-auto border-t border-gray-100">
<div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-600 cursor-pointer uppercase text-[11px] font-medium tracking-wider">
                Favorites
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>Help</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<div className="h-14 border-b border-gray-100 flex items-center justify-between px-5 flex-shrink-0">

<div className="flex items-center gap-2 text-gray-600 text-[13px] whitespace-nowrap overflow-hidden">
<div className="flex items-center gap-1.5 bg-blue-500 text-white rounded-sm px-1 py-0.5">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
<span className="text-gray-600">Agency Management</span>
<span className="text-gray-300">/</span>
<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span>Large Client Project</span>
<span className="text-gray-300">/</span>
<svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
<span className="font-semibold text-gray-900">Phase 3 : Review &amp; Launch</span>
<svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
<div className="px-1 text-gray-400">•••</div>
</div>

<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span>Agents</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
<svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" stroke="none" viewbox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
<span>Automate</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
<span>Share</span>
</button>
</div>
</div>

<div className="flex items-center px-5 border-b border-gray-200 gap-6 text-[13px] pt-1">
<button className="pb-2.5 px-2 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 mr-2 mb-2 self-center text-xs">Add Channel</button>
<button className="flex items-center gap-2 pb-2.5 border-b-2 border-purple-600 text-purple-700 font-medium">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
                Tasks
            </button>
<button className="flex items-center gap-2 pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors">
<svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" stroke="none" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18" stroke="white" strokeWidth="2"></path></svg>
                Board
            </button>
<button className="flex items-center gap-2 pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors">
<svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" stroke="none" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2"></path></svg>
                Timeline
            </button>
<button className="flex items-center gap-1 pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                View
            </button>
</div>

<div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-100 bg-white">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 border-dashed rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    Group: Status
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 border-dashed rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M6 3v18"></path><path d="M18 9h-8"></path><path d="M18 15h-8"></path></svg>
                    Subtasks
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 border-dashed rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
                    Columns
                </button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="1" x2="7" y1="14" y2="14"></line><line x1="9" x2="15" y1="8" y2="8"></line><line x1="17" x2="23" y1="16" y2="16"></line></svg>
                    Filter
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Closed
                </button>
<button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Assignee
                </button>
<div className="w-px h-4 bg-gray-200 mx-1"></div>
<button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
<button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 ml-1 flex items-center gap-1">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    New Project
                </button>
</div>
</div>

<div className="flex-1 overflow-auto bg-white pb-20">

<div className="mt-4">
<div className="flex items-center gap-2 px-5 mb-2 group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
<span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">TO DO</span>
<span className="text-gray-400 text-xs font-medium">1</span>
<span className="text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">•••</span>
<div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2 text-[12px] font-medium text-gray-500 border-b border-transparent">
<div className="pl-2">Name</div>
<div>Assignee</div>
<div>Start date</div>
<div>Due date</div>
<div>Priority</div>
<div>Project</div>
<div className="flex justify-center"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>
</div>

<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<div className="flex-shrink-0 w-4 h-4 border-2 border-dashed border-gray-400 rounded-full hover:border-gray-600 cursor-pointer"></div>
<span className="truncate">Gather Feedback from Internal Stakeholders</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span>April 23, 2025</span>
</div>
<div className="flex items-center gap-2 text-red-600 text-xs">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span>April 23, 2025</span>
</div>
<div className="flex items-center gap-1.5 text-gray-600">
<svg className="w-3.5 h-3.5 text-red-500 fill-red-500" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg>
<span className="text-xs">High</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div>
<span className="text-xs text-gray-600">Odie</span>
</div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
<svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>

<div className="px-8 py-2 pl-10 flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer border-t border-gray-100 border-opacity-50">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="mt-4">
<div className="flex items-center gap-2 px-5 mb-2 group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
<span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">IN PROGRESS</span>
<span className="text-gray-400 text-xs font-medium">1</span>
<span className="text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">•••</span>
<div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="hidden grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2 text-xs font-medium text-gray-500">

</div>

<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-amber-500 fill-amber-500/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Gather Feedback from Internal Stakeholders</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">Low</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-blue-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">D</div><span className="text-xs text-gray-600">Dalton</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-amber-500 fill-amber-500/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Iterate on feedback</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">Low</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div><span className="text-xs text-gray-600">Odie</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-amber-500 fill-amber-500/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Hold launch meeting with client</span>
</div>
<div className="">
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span className="">April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">Medium</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div><span className="text-xs text-gray-600">Odie</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-amber-500 fill-amber-500/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Handoff deliverables and documentation to client</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span className="">April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-red-500 fill-red-500" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">High</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div><span className="text-xs text-gray-600">Odie</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="px-8 py-2 pl-10 flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer border-t border-gray-100 border-opacity-50">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="mt-4">
<div className="flex items-center gap-2 px-5 mb-2 group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
<span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">IN REVIEW</span>
<span className="text-gray-400 text-xs font-medium">2</span>
<span className="text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">•••</span>
<div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2 text-[12px] font-medium text-gray-500 border-b border-transparent">
<div className="pl-2">Name</div>
<div>Assignee</div>
<div>Start date</div>
<div>Due date</div>
<div>Priority</div>
<div>Project</div>
<div className="flex justify-center"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-blue-600 fill-blue-600/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Iterate on feedback</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-red-500 fill-red-500" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">High</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-blue-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">D</div><span className="text-xs text-gray-600">Dalton</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-blue-600 fill-blue-600/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Handoff deliverables and documentation to client</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">Medium</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div><span className="text-xs text-gray-600">Odie</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="px-8 py-2 pl-10 flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer border-t border-gray-100 border-opacity-50">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>

<div className="mt-4">
<div className="flex items-center gap-2 px-5 mb-2 group cursor-pointer">
<svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">ON TRACK</span>
<span className="text-gray-400 text-xs font-medium">1</span>
<span className="text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">•••</span>
<div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 ml-1 cursor-pointer">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>
<div className="grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2 text-[12px] font-medium text-gray-500 border-b border-transparent">
<div className="pl-2">Name</div>
<div>Assignee</div>
<div>Start date</div>
<div>Due date</div>
<div>Priority</div>
<div>Project</div>
<div className="flex justify-center"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>
</div>
<div className="group grid grid-cols-[1fr_100px_130px_130px_100px_130px_30px] gap-4 px-8 py-2.5 items-center hover:bg-gray-50 border-t border-gray-100 text-[13px] text-gray-800">
<div className="flex items-center gap-3 pl-2 overflow-hidden">
<svg className="flex-shrink-0 w-4 h-4 text-green-600 fill-green-600/20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="truncate">Hold launch meeting with client</span>
</div>
<div>
<div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-center gap-2 text-gray-500 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-2 text-red-600 text-xs"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>April 23, 2025</span></div>
<div className="flex items-center gap-1.5 text-gray-600"><svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg><span className="text-xs">Low</span></div>
<div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">C</div><span className="text-xs text-gray-600">Odie</span></div>
<div className="flex justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
</div>
<div className="px-8 py-2 pl-10 flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer border-t border-gray-100 border-opacity-50">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs">Add Task</span>
</div>
</div>
</div>

<div className="absolute top-[35%] right-[12%] bg-white rounded-lg shadow-floating border border-gray-100 w-52 z-50 p-1.5">
<div className="flex items-center justify-between p-1 bg-gray-50 border border-gray-100 rounded mb-2">
<button className="flex-1 text-center py-1 text-[11px] font-medium text-gray-600 hover:bg-white rounded hover:shadow-sm transition-all">Copy Link</button>
<div className="w-px h-3 bg-gray-200"></div>
<button className="flex-1 text-center py-1 text-[11px] font-medium text-gray-600 hover:bg-white rounded hover:shadow-sm transition-all">Copy ID</button>
<div className="w-px h-3 bg-gray-200"></div>
<button className="flex-1 text-center py-1 text-[11px] font-medium text-gray-600 hover:bg-white rounded hover:shadow-sm transition-all">New Tab</button>
</div>
<div className="space-y-0.5">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
                    Add a column
                </button>
<div className="h-px bg-gray-100 my-1 mx-2"></div>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Add to my...
                </button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                    Rename
                </button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    Duplicated
                </button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    Send email to task
                </button>
<div className="h-px bg-gray-100 my-1 mx-2"></div>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-xs">
<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path></svg>
                    Archive
                </button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-red-50 flex items-center gap-2 text-red-600 text-xs">
<svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    Delete
                </button>
</div>
<div className="mt-2 pt-2 border-t border-gray-100">
<button className="w-full bg-gray-900 text-white rounded-md py-1.5 text-xs font-medium hover:bg-gray-800 transition-colors">
                    Sharing &amp; Permissions
                </button>
</div>
</div>
</main>

    </>
  );
}
