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
stone: {
850: '#1c1917', // Custom intermediate shade
}
},
boxShadow: {
'custom': 'rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px',
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
      

<nav className="hidden lg:flex flex-col items-center w-[72px] bg-stone-950 py-3 gap-2 border-r border-stone-800/50 z-20">

<button className="group relative flex items-center justify-center w-12 h-12 bg-stone-800 hover:bg-blue-500 rounded-[24px] hover:rounded-2xl transition-all duration-300 ease-out shadow-custom text-stone-100">
<i className="w-7 h-7" data-lucide="ghost"></i>

<div className="absolute -bottom-1 -right-1 bg-red-500 border-4 border-stone-950 w-5 h-5 rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-white">3</span>
</div>

<div className="absolute left-[-16px] w-2 h-2 bg-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-5 transition-all duration-200"></div>
</button>
<div className="w-8 h-[2px] bg-stone-800 rounded-full mx-auto my-1"></div>

<button className="group relative flex items-center justify-center w-12 h-12 bg-blue-500 rounded-2xl shadow-custom text-white">
<span className="text-sm font-medium tracking-tight">DS</span>
<div className="absolute left-[-16px] w-2 h-10 bg-white rounded-r-full transition-all duration-200"></div>
</button>

<button className="group relative flex items-center justify-center w-12 h-12 bg-stone-800 hover:bg-blue-500 rounded-[24px] hover:rounded-2xl transition-all duration-300 ease-out text-stone-100">
<span className="text-sm font-medium tracking-tight">PD</span>
<div className="absolute left-[-16px] w-2 h-2 bg-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-5 transition-all duration-200"></div>
</button>

<button className="group relative flex items-center justify-center w-12 h-12 bg-stone-800 hover:bg-green-600 rounded-[24px] hover:rounded-2xl transition-all duration-300 ease-out text-stone-100 overflow-hidden">
<img alt="Server" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Vercel&amp;background=random"/>
<div className="absolute left-[-16px] w-2 h-2 bg-white rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-5 transition-all duration-200"></div>
</button>

<button className="group flex items-center justify-center w-12 h-12 bg-stone-800/50 hover:bg-green-600 rounded-[24px] hover:rounded-2xl transition-all duration-300 text-green-500 hover:text-white mt-auto mb-2 border border-stone-800 border-dashed hover:border-transparent">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</nav>

<aside className="hidden md:flex flex-col w-60 bg-stone-900 border-r border-stone-800 flex-shrink-0">

<header className="h-12 px-4 flex items-center justify-between border-b border-stone-800 hover:bg-stone-800/40 transition-colors cursor-pointer shadow-sm z-10">
<h1 className="font-semibold text-sm tracking-tight text-stone-100">Design Systems</h1>
<i className="w-4 h-4 text-stone-400" data-lucide="chevron-down"></i>
</header>

<div className="flex-1 overflow-y-auto py-3 space-y-5 px-2">

<div>
<div className="flex items-center justify-between px-2 mb-1 group cursor-pointer text-stone-500 hover:text-stone-300">
<div className="flex items-center gap-0.5">
<i className="w-3 h-3" data-lucide="chevron-down"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">Information</span>
</div>
<i className="w-3 h-3 opacity-0 group-hover:opacity-100" data-lucide="plus"></i>
</div>
<div className="space-y-[2px]">
<a className="flex items-center gap-2 px-2 py-1.5 rounded bg-stone-800/60 text-stone-100 group" href="#">
<i className="w-4 h-4 text-stone-400" data-lucide="hash"></i>
<span className="text-sm font-medium">announcements</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/40 text-stone-400 hover:text-stone-200 group transition-colors" href="#">
<i className="w-4 h-4 text-stone-500 group-hover:text-stone-400" data-lucide="file-text"></i>
<span className="text-sm font-medium">rules</span>
</a>
</div>
</div>

<div>
<div className="flex items-center justify-between px-2 mb-1 group cursor-pointer text-stone-500 hover:text-stone-300">
<div className="flex items-center gap-0.5">
<i className="w-3 h-3" data-lucide="chevron-down"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">Projects</span>
</div>
<i className="w-3 h-3 opacity-0 group-hover:opacity-100" data-lucide="plus"></i>
</div>
<div className="space-y-[2px]">
<a className="flex items-center justify-between gap-2 px-2 py-1.5 rounded hover:bg-stone-800/40 text-stone-400 hover:text-stone-200 group transition-colors" href="#">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-stone-500 group-hover:text-stone-400" data-lucide="hash"></i>
<span className="text-sm font-medium">ui-kit-v2</span>
</div>
<div className="w-2 h-2 bg-stone-100 rounded-full"></div> 
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/40 text-stone-400 hover:text-stone-200 group transition-colors" href="#">
<i className="w-4 h-4 text-stone-500 group-hover:text-stone-400" data-lucide="hash"></i>
<span className="text-sm font-medium">website-redesign</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/40 text-stone-400 hover:text-stone-200 group transition-colors" href="#">
<i className="w-4 h-4 text-stone-500 group-hover:text-stone-400" data-lucide="volume-2"></i>
<span className="text-sm font-medium">standup</span>
</a>
</div>
</div>

<div>
<div className="flex items-center justify-between px-2 mb-1 group cursor-pointer text-stone-500 hover:text-stone-300">
<div className="flex items-center gap-0.5">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">Community</span>
</div>
</div>
</div>
</div>

<div className="bg-stone-900/50 p-2 flex items-center justify-between border-t border-stone-800">
<div className="flex items-center gap-2 hover:bg-stone-800/50 p-1 rounded cursor-pointer transition-colors">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">JD</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-stone-900"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-100 leading-none">John Doe</span>
<span className="text-[10px] text-stone-400 leading-none mt-1">#4921</span>
</div>
</div>
<div className="flex items-center">
<button className="p-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200"><i className="w-4 h-4" data-lucide="mic"></i></button>
<button className="p-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200"><i className="w-4 h-4" data-lucide="headphones"></i></button>
<button className="p-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200"><i className="w-4 h-4" data-lucide="settings"></i></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-stone-900 relative">

<header className="h-12 border-b border-stone-800 flex items-center justify-between px-4 bg-stone-900 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] z-10">
<div className="flex items-center gap-3 overflow-hidden">
<button className="md:hidden text-stone-400"><i className="w-5 h-5" data-lucide="menu"></i></button>
<div className="flex items-center gap-2 text-stone-100">
<i className="w-5 h-5 text-stone-400" data-lucide="hash"></i>
<h2 className="font-semibold text-sm tracking-tight whitespace-nowrap">ui-kit-v2</h2>
</div>
<div className="hidden sm:block h-4 w-[1px] bg-stone-700 mx-1"></div>
<p className="hidden sm:block text-xs text-stone-400 truncate font-medium">Discussion for the new component library update.</p>
</div>
<div className="flex items-center gap-3 text-stone-400">
<button className="hover:text-stone-200 hidden sm:block"><i className="w-5 h-5" data-lucide="hash"></i></button>
<button className="hover:text-stone-200 hidden sm:block"><i className="w-5 h-5" data-lucide="bell"></i></button>
<button className="hover:text-stone-200 hidden sm:block"><i className="w-5 h-5" data-lucide="pin"></i></button>
<button className="hover:text-stone-200"><i className="w-5 h-5" data-lucide="users"></i></button>
<div className="relative hidden sm:block">
<input className="bg-stone-950 text-stone-200 text-xs rounded px-2 py-1 pl-7 w-32 focus:w-48 transition-all border border-stone-800 focus:border-blue-500 outline-none placeholder-stone-600" placeholder="Search" type="text"/>
<i className="w-3 h-3 absolute left-2 top-1.5 text-stone-500" data-lucide="search"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 space-y-1 sm:px-6 custom-scrollbar flex flex-col">

<div className="mt-auto mb-8 pt-10">
<div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-4">
<i className="w-8 h-8 text-stone-400" data-lucide="hash"></i>
</div>
<h1 className="text-2xl font-bold text-stone-100 mb-1 tracking-tight">Welcome to #ui-kit-v2!</h1>
<p className="text-stone-400 text-sm">This is the start of the <span className="text-stone-200 font-medium">#ui-kit-v2</span> channel.</p>
</div>

<div className="relative flex items-center justify-center my-4">
<div className="absolute w-full border-t border-stone-800"></div>
<span className="relative bg-stone-900 px-2 text-[10px] font-semibold text-stone-500">October 24, 2023</span>
</div>

<div className="group message-group flex gap-4 hover:bg-stone-800/30 -mx-4 px-4 py-1 transition-colors relative">
<div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold mt-0.5 text-sm">
                    AS
                </div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="font-medium text-sm text-blue-400 hover:underline cursor-pointer">Alex Smith</span>
<span className="text-[10px] text-stone-500">10:42 AM</span>
</div>
<p className="text-sm text-stone-300 leading-relaxed">
                        Hey team! Just pushed the latest updates for the button component. <span className="text-blue-400 bg-blue-500/10 px-1 rounded cursor-pointer hover:bg-blue-500/20">@Sarah</span> can you take a look?
                    </p>
</div>

<div className="message-actions absolute -top-2 right-4 bg-stone-800 border border-stone-700 rounded shadow-sm p-0.5 flex items-center gap-0.5 opacity-0 transition-opacity">
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="smile-plus"></i></button>
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="reply"></i></button>
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>

<div className="group message-group flex gap-4 hover:bg-stone-800/30 -mx-4 px-4 py-1 transition-colors relative">
<img alt="Sarah" className="w-10 h-10 rounded-full mt-0.5 flex-shrink-0" src="https://ui-avatars.com/api/?name=Sarah+Lee&amp;background=f59e0b&amp;color=fff"/>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="font-medium text-sm text-amber-400 hover:underline cursor-pointer">Sarah Lee</span>
<span className="text-[10px] text-stone-500">10:45 AM</span>
</div>
<p className="text-sm text-stone-300 leading-relaxed mb-1">
                        Sure thing! Checking it now. Also, did we decide on the shadow values?
                    </p>

<div className="flex items-center gap-3 bg-stone-800/50 border border-stone-800 rounded p-3 w-fit max-w-sm mt-1 cursor-pointer hover:border-stone-700 transition-colors">
<i className="w-8 h-8 text-blue-500" data-lucide="file-code"></i>
<div className="flex flex-col overflow-hidden">
<span className="text-sm text-stone-200 truncate font-medium">button-config.ts</span>
<span className="text-[10px] text-stone-500">2KB • TypeScript</span>
</div>
<i className="w-4 h-4 text-stone-500 ml-2" data-lucide="download"></i>
</div>
</div>
<div className="message-actions absolute -top-2 right-4 bg-stone-800 border border-stone-700 rounded shadow-sm p-0.5 flex items-center gap-0.5 opacity-0 transition-opacity">
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="smile-plus"></i></button>
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="reply"></i></button>
</div>
</div>

<div className="group message-group flex gap-4 hover:bg-stone-800/30 -mx-4 px-4 py-0.5 transition-colors relative">
<div className="w-10 flex-shrink-0 text-[10px] text-stone-600 opacity-0 group-hover:opacity-100 text-right pr-2 select-none pt-1">
                    10:46 AM
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm text-stone-300 leading-relaxed">
                        I think we should stick to the design tokens.
                    </p>
</div>
</div>

<div className="group message-group flex gap-4 hover:bg-stone-800/30 -mx-4 px-4 py-1 transition-colors relative mt-2">
<div className="w-10 h-10 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white font-bold mt-0.5 text-sm">
                    MK
                </div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="font-medium text-sm text-emerald-400 hover:underline cursor-pointer">Mike K.</span>
<span className="text-[10px] text-stone-500">10:50 AM</span>
</div>
<p className="text-sm text-stone-300 leading-relaxed">
                        Here is the preview of the modal with the new shadows. It looks much cleaner on dark mode.
                    </p>
<div className="mt-2 rounded-lg overflow-hidden border border-stone-800 max-w-md shadow-custom">
<img alt="Preview" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="message-actions absolute -top-2 right-4 bg-stone-800 border border-stone-700 rounded shadow-sm p-0.5 flex items-center gap-0.5 opacity-0 transition-opacity">
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="smile-plus"></i></button>
<button className="p-1 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-100"><i className="w-4 h-4" data-lucide="reply"></i></button>
</div>
</div>
</div>

<div className="px-4 pb-4 bg-stone-900">
<div className="bg-stone-800/40 rounded-lg p-2 flex flex-col border border-stone-800 focus-within:border-stone-600 focus-within:bg-stone-800/60 transition-colors shadow-sm">

<div className="flex items-center gap-3">
<button className="p-1.5 rounded-full bg-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-600 transition-colors flex-shrink-0">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
<textarea className="bg-transparent text-stone-200 w-full outline-none text-sm placeholder-stone-500 resize-none py-2 max-h-40 overflow-y-auto" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="Message #ui-kit-v2" rows="1"></textarea>
<div className="flex items-center gap-1 pr-1 text-stone-400 flex-shrink-0">
<button className="p-1.5 hover:bg-stone-700 rounded hover:text-blue-400 transition-colors"><i className="w-5 h-5" data-lucide="gift"></i></button>
<button className="p-1.5 hover:bg-stone-700 rounded hover:text-yellow-400 transition-colors"><i className="w-5 h-5" data-lucide="sticky-note"></i></button>
<button className="p-1.5 hover:bg-stone-700 rounded hover:text-pink-400 transition-colors"><i className="w-5 h-5" data-lucide="smile"></i></button>
</div>
</div>
</div>

<div className="h-4 mt-1 flex items-center gap-1">
<div className="flex gap-1 animate-pulse">
<span className="w-1 h-1 bg-stone-500 rounded-full"></span>
<span className="w-1 h-1 bg-stone-500 rounded-full animation-delay-200"></span>
<span className="w-1 h-1 bg-stone-500 rounded-full animation-delay-400"></span>
</div>
<span className="text-[10px] font-bold text-stone-500 ml-1">Sarah Lee is typing...</span>
</div>
</div>
</main>

<aside className="hidden xl:flex flex-col w-60 bg-stone-900 border-l border-stone-800 flex-shrink-0 p-4 overflow-y-auto">

<div className="mb-6">
<h3 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 px-2">Online — 3</h3>
<div className="space-y-0.5">

<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/50 cursor-pointer group opacity-100">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">AS</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-stone-900"></div>
</div>
<div>
<div className="text-sm font-medium text-blue-400 group-hover:underline">Alex Smith</div>
<div className="text-[10px] text-stone-500">Playing VS Code</div>
</div>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/50 cursor-pointer group">
<div className="relative">
<img alt="Sarah" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Sarah+Lee&amp;background=f59e0b&amp;color=fff"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-stone-900"></div>
</div>
<div>
<div className="text-sm font-medium text-amber-400 group-hover:underline">Sarah Lee</div>
</div>
</div>

<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/50 cursor-pointer group">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">MK</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 rounded-full border-2 border-stone-900"></div>
</div>
<div>
<div className="text-sm font-medium text-emerald-400 group-hover:underline">Mike K.</div>
<div className="text-[10px] text-stone-500">Idle</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 px-2">Offline — 5</h3>
<div className="space-y-0.5 opacity-60 hover:opacity-100 transition-opacity">

<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/50 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-400">
                        BW
                    </div>
<div>
<div className="text-sm font-medium text-stone-400">Bruce W.</div>
</div>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-stone-800/50 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-400">
                        DK
                    </div>
<div>
<div className="text-sm font-medium text-stone-400">Diana K.</div>
</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
