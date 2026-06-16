import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
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
950: '#030712',
}
}
}
}
}
function toggleTheme() {
document.documentElement.classList.toggle('dark');
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-16 flex-none border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-5 bg-gray-50/50 dark:bg-[#080808]">

<div className="mb-8">
<div className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center font-semibold tracking-tighter text-base">
                OC
            </div>
</div>

<div className="flex flex-col gap-2 w-full px-3">
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-200/50 dark:bg-gray-800 transition-colors group relative">
<iconify-icon icon="lucide:inbox" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute left-12 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">Inbox</span>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors relative group">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors relative group">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="mt-auto flex flex-col gap-4 items-center w-full px-3">
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="lucide:sun" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-400 to-gray-600 overflow-hidden ring-2 ring-transparent hover:ring-gray-200 dark:hover:ring-gray-700 transition-all cursor-pointer">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</nav>

<aside className="w-80 flex-none border-r border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-[#050505]">

<div className="h-16 flex items-center justify-between px-5 border-b border-gray-200 dark:border-gray-800 flex-none">
<h1 className="font-medium tracking-tight text-base">Inbox</h1>
<div className="flex gap-2">
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:filter" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="p-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-gray-600 dark:group-focus-within:text-gray-300 transition-colors" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-gray-200 dark:border-gray-800 rounded-lg py-2 pl-9 pr-3 text-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all" placeholder="Search messages..." type="text"/>
</div>
</div>

<div className="flex px-5 gap-4 border-b border-gray-200 dark:border-gray-800 pb-0">
<button className="pb-3 border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium text-xs">Open</button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-xs">Snoozed</button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-xs">Closed</button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="p-4 border-b border-gray-100 dark:border-gray-800/50 bg-gray-50 dark:bg-white/[0.03] cursor-pointer relative group">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900 dark:text-white">Alex Morgan</span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-[10px] text-gray-400 font-medium">10:42 AM</span>
</div>
<div className="flex gap-3">
<div className="relative flex-none">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
<div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#0F0F0F] rounded-full p-0.5">
<div className="bg-green-500 w-2.5 h-2.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white w-1.5 h-1.5" icon="lucide:message-circle"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">I'm having trouble with the API key generation on the new dashboard...</p>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Support</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">High Priority</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900 dark:text-white">Sarah Chen</span>
</div>
<span className="text-[10px] text-gray-400 font-medium">Yesterday</span>
</div>
<div className="flex gap-3">
<div className="relative flex-none">
<div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-medium">SC</div>
<div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#0F0F0F] rounded-full p-0.5">
<div className="bg-gray-900 dark:bg-white w-2.5 h-2.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white dark:text-black w-1.5 h-1.5" icon="lucide:mail"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">Re: Enterprise Plan Pricing Inquiry. Could you please send over the PDF?</p>
</div>
</div>
</div>

<div className="p-4 border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors opacity-60">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900 dark:text-white">Marcus Ray</span>
</div>
<span className="text-[10px] text-gray-400 font-medium">2d ago</span>
</div>
<div className="flex gap-3">
<div className="relative flex-none">
<img className="w-9 h-9 rounded-full object-cover grayscale" src="https://i.pravatar.cc/150?u=3"/>
<div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#0F0F0F] rounded-full p-0.5">
<div className="bg-blue-400 w-2.5 h-2.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white w-1.5 h-1.5" icon="lucide:twitter"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">Just wanted to say thanks for the quick help earlier! Works great.</p>
</div>
</div>
</div>

<div className="p-4 border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900 dark:text-white">Linear Support</span>
</div>
<span className="text-[10px] text-gray-400 font-medium">3d ago</span>
</div>
<div className="flex gap-3">
<div className="relative flex-none">
<div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-medium">LS</div>
<div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#0F0F0F] rounded-full p-0.5">
<div className="bg-green-600 w-2.5 h-2.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-white w-1.5 h-1.5" icon="lucide:phone"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">Missed call from +1 (555) 012-3456</p>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#050505]">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 flex-none bg-white/80 dark:bg-[#050505]/80 backdrop-blur-sm z-10">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800" src="https://i.pravatar.cc/150?u=1"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#050505] rounded-full"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-medium text-gray-900 dark:text-white text-sm">Alex Morgan</h2>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">#TR-8832</span>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">via WhatsApp Business • <span className="text-green-600 dark:text-green-500">Online</span></p>
</div>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-gray-200 dark:bg-gray-800 mx-2"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
<iconify-icon icon="lucide:more-horizontal" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="ml-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black text-xs font-medium px-3 py-1.5 rounded-md transition-colors shadow-sm">
                    Resolve
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="flex items-center justify-center">
<span className="text-[10px] font-medium text-gray-400 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800">Today, Oct 24</span>
</div>

<div className="flex gap-4 max-w-2xl">
<img className="w-8 h-8 rounded-full object-cover mt-1 flex-none" src="https://i.pravatar.cc/150?u=1"/>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-medium text-xs text-gray-900 dark:text-white">Alex Morgan</span>
<span className="text-[10px] text-gray-400">10:41 AM</span>
</div>
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                        Hi team, I'm trying to generate a new API key for the staging environment but I keep getting a 403 Forbidden error.
                    </div>
</div>
</div>

<div className="flex gap-4 max-w-2xl">

<div className="w-8 flex-none"></div>
<div className="space-y-1">
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                        I've checked my permissions and I should have admin access. Here is the screenshot of the error.
                    </div>

<div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-3 flex items-center gap-3 w-64 mt-2 cursor-pointer hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 flex-none">
<iconify-icon icon="lucide:image" width="20"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-gray-900 dark:text-white truncate">screenshot_error_403.png</p>
<p className="text-[10px] text-gray-500">245 KB • PNG</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-end gap-1 max-w-2xl ml-auto">
<div className="flex items-baseline gap-2 flex-row-reverse">
<span className="font-medium text-xs text-gray-900 dark:text-white">You</span>
<span className="text-[10px] text-gray-400">10:43 AM</span>
</div>
<div className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm text-sm leading-relaxed">
                    Hello Alex, thanks for reaching out. Let me check the logs for your account ID quickly.
                </div>
</div>

<div className="flex items-center justify-center gap-2 my-4">
<div className="h-px w-8 bg-gray-200 dark:bg-gray-800"></div>
<span className="text-[10px] text-gray-400">Ticket status changed to <span className="font-medium text-gray-600 dark:text-gray-300">In Progress</span> by You</span>
<div className="h-px w-8 bg-gray-200 dark:bg-gray-800"></div>
</div>

<div className="flex gap-4 max-w-2xl">
<img className="w-8 h-8 rounded-full object-cover flex-none opacity-50" src="https://i.pravatar.cc/150?u=1"/>
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="p-6 pt-2 flex-none">
<div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm focus-within:ring-1 focus-within:ring-gray-300 dark:focus-within:ring-gray-700 transition-all overflow-hidden">

<div className="flex items-center gap-1 p-2 border-b border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/30">
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 transition-colors">
<iconify-icon icon="lucide:bold" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 transition-colors">
<iconify-icon icon="lucide:italic" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 transition-colors">
<iconify-icon icon="lucide:list" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1"></div>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 transition-colors flex items-center gap-1.5">
<iconify-icon className="text-purple-500" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-xs font-medium">AI Assist</span>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 transition-colors flex items-center gap-1.5 ml-auto">
<iconify-icon className="text-yellow-500" icon="lucide:zap" width="14"></iconify-icon>
<span className="text-xs font-medium">Macros</span>
</button>
</div>

<div className="p-3">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none h-20 text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="Type your message... (Press / for commands)"></textarea>
</div>

<div className="flex justify-between items-center p-2 px-3">
<div className="flex gap-2">
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
<iconify-icon icon="lucide:paperclip" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
<iconify-icon icon="lucide:smile" width="18"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-gray-400 hidden sm:inline">Press ⌘ + Enter to send</span>
<button className="bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                            Send <iconify-icon icon="lucide:send" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 flex-none border-l border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#080808] hidden xl:flex flex-col overflow-y-auto">

<div className="p-6 pb-4 flex flex-col items-center text-center border-b border-gray-200 dark:border-gray-800">
<div className="w-20 h-20 rounded-full p-1 border border-gray-200 dark:border-gray-700 mb-3 bg-white dark:bg-black">
<img className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">Alex Morgan</h3>
<p className="text-xs text-gray-500 mt-1">Product Manager @ Acme Corp</p>
<div className="flex gap-3 mt-4 w-full justify-center">
<button className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 space-y-6">

<div>
<h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3 px-2">Customer Details</h4>
<div className="bg-white dark:bg-[#0F0F0F] border border-gray-200 dark:border-gray-800 rounded-lg p-1 overflow-hidden">
<div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded transition-colors group">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:mail" width="14"></iconify-icon>
<span className="text-xs text-gray-600 dark:text-gray-300">alex@acme.co</span>
</div>
<iconify-icon className="text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer" icon="lucide:copy" width="12"></iconify-icon>
</div>
<div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded transition-colors group">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:globe" width="14"></iconify-icon>
<span className="text-xs text-gray-600 dark:text-gray-300">San Francisco, CA</span>
</div>
</div>
<div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded transition-colors group">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:clock" width="14"></iconify-icon>
<span className="text-xs text-gray-600 dark:text-gray-300">10:42 AM (Local)</span>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3 px-2">Tags</h4>
<div className="flex flex-wrap gap-2 px-1">
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/50">
                        Enterprise
                    </span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                        SaaS
                    </span>
<button className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<iconify-icon className="mr-1" icon="lucide:plus" width="10"></iconify-icon> Add
                    </button>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3 px-2">History</h4>
<div className="space-y-2">
<div className="p-3 bg-white dark:bg-[#0F0F0F] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-gray-400">#TR-8821</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800">Closed</span>
</div>
<p className="text-xs text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Billing cycle update</p>
<p className="text-[10px] text-gray-400 mt-1">Updated 2 days ago</p>
</div>
<div className="p-3 bg-white dark:bg-[#0F0F0F] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-gray-400">#TR-8100</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700">Archived</span>
</div>
<p className="text-xs text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Feature request: Dark mode</p>
<p className="text-[10px] text-gray-400 mt-1">Updated 1 month ago</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3 px-2">Private Notes</h4>
<div className="relative">
<textarea className="w-full bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-3 text-xs text-gray-800 dark:text-yellow-100 placeholder-yellow-800/50 dark:placeholder-yellow-100/30 min-h-[80px] focus:ring-1 focus:ring-yellow-400 focus:outline-none resize-none" placeholder="Add a note..."></textarea>
<div className="absolute bottom-2 right-2">
<button className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200 p-1 rounded hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors">
<iconify-icon icon="lucide:save" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</aside>

    </>
  );
}
