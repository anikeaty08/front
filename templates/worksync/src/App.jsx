import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
geist: ['Geist', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(0,0,0) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) scale(var(--tw-scale-x, 1))`
};
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(0,0,0) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z, 0)) scale(var(--tw-scale-x, 1))`
};
});
rotateValues.forEach((value) => {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(0,0,0) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z)) scale(var(--tw-scale-x, 1))`
};
});
addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ...rotateZUtilities,
".perspective-none": { perspective: "none" },
".perspective-distant": { perspective: "1200px" },
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edbb92b9-a754-473a-b59c-f6a394cfec29_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-white/10 bg-zinc-900 rounded-lg shadow-inner">
<iconify-icon className="text-indigo-400" height="20" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</span>
<span className="text-lg font-semibold tracking-tight font-geist">WorkSync</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Log in
        </button>
<button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-white px-3 font-medium text-zinc-900 transition-all hover:bg-zinc-200">
<span className="mr-2 text-xs">Get Started</span>
<iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" style={{pointerEvents: 'none'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>v2.0 is now live</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-7xl font-geist mb-6">
      Where chat meets <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white/90 to-indigo-300">actual work.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
      Stop switching between Slack and Trello. WorkSync brings your team's conversations and tasks into a single, high-performance interface.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
        Start for free
        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-lg border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-900 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
        Watch demo
      </button>
</div>
</div>

<div className="mt-20 relative perspective-distant max-w-6xl mx-auto px-4">
<div className="relative rotate-x-30 transition-transform duration-700 ease-out hover:scale-[1.02] transform-style-preserve-3d">

<div className="glass-panel rounded-xl shadow-2xl overflow-hidden bg-[#0F0F11]/90">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-zinc-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="flex items-center gap-2 text-[10px] font-medium text-zinc-500 bg-black/20 px-2 py-0.5 rounded border border-white/5">
<iconify-icon icon="solar:shield-keyhole-linear" width="10"></iconify-icon>
            Encrypted End-to-End
          </div>
</div>
<div className="flex h-[600px]">

<aside className="w-[240px] border-r border-white/5 flex flex-col bg-zinc-900/20">

<div className="p-3 border-b border-white/5">
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">A</div>
<span className="text-sm font-medium text-zinc-200">Acme Corp</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto py-4 px-2 space-y-6 scrollbar-hide">

<div>
<div className="px-2 mb-1 flex items-center justify-between group">
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Channels</span>
<iconify-icon className="text-zinc-600 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-zinc-300" icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md bg-indigo-500/10 text-indigo-300 text-sm group">
<iconify-icon className="text-indigo-400" icon="solar:hashtag-linear" width="16"></iconify-icon>
<span className="font-medium">engineering</span>
<span className="ml-auto text-[10px] bg-indigo-500 text-white px-1.5 rounded-full">3</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 text-sm transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:hashtag-linear" width="16"></iconify-icon>
<span>design-system</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 text-sm transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:hashtag-linear" width="16"></iconify-icon>
<span>marketing</span>
</button>
</div>
</div>

<div>
<div className="px-2 mb-1 flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Direct Messages</span>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 text-sm transition-colors">
<div className="relative">
<img className="w-4 h-4 rounded-full grayscale opacity-70" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 border border-black rounded-full"></span>
</div>
<span>Sarah Chen</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 text-sm transition-colors">
<div className="relative">
<img className="w-4 h-4 rounded-full grayscale opacity-70" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-zinc-500 border border-black rounded-full"></span>
</div>
<span>Alex Morgan</span>
</button>
</div>
</div>

<div>
<div className="px-2 mb-1 flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Saved Boards</span>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 text-sm transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:kanban-linear" width="16"></iconify-icon>
<span>Q1 Roadmap</span>
</button>
</div>
</div>
</div>

<div className="p-3 border-t border-white/5">
<div className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=8"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">Jordan Lee</p>
<p className="text-[10px] text-zinc-500 truncate">Online</p>
</div>
<iconify-icon className="text-zinc-500 hover:text-white cursor-pointer" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-zinc-950/40 relative">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-900/30 backdrop-blur-sm z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:hashtag-linear" width="20"></iconify-icon>
<h2 className="text-sm font-semibold text-white">engineering</h2>
<span className="text-xs text-zinc-500 ml-2 border-l border-white/10 pl-3">Frontend architecture discussions</span>
</div>
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-[#0F0F11] bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 z-10">+4</div>
<img className="w-7 h-7 rounded-full border-2 border-[#0F0F11] z-20" src="https://i.pravatar.cc/150?u=1"/>
<img className="w-7 h-7 rounded-full border-2 border-[#0F0F11] z-30" src="https://i.pravatar.cc/150?u=2"/>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-white/5"></div>
<span className="flex-shrink-0 mx-4 text-[10px] text-zinc-600 font-medium">Today</span>
<div className="flex-grow border-t border-white/5"></div>
</div>

<div className="flex gap-4 group">
<img className="w-9 h-9 rounded-lg mt-1 bg-zinc-800" src="https://i.pravatar.cc/150?u=1"/>
<div className="flex-1">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white hover:underline cursor-pointer">David Kim</span>
<span className="text-[10px] text-zinc-500">10:23 AM</span>
</div>
<div className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    Hey team, just pushed the new navigation component. It supports the nested routing we discussed yesterday.
                  </div>
</div>
</div>

<div className="flex gap-4 group">
<img className="w-9 h-9 rounded-lg mt-1 bg-zinc-800" src="https://i.pravatar.cc/150?u=5"/>
<div className="flex-1">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white hover:underline cursor-pointer">Elena Rodriguez</span>
<span className="text-[10px] text-zinc-500">10:45 AM</span>
</div>
<div className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    Looks great! Can we make sure the mobile menu animation is smoother? I noticed some jank on older iOS devices.
                  </div>

<div className="mt-3 inline-block max-w-md w-full bg-zinc-900/80 border border-white/10 rounded-lg p-3 hover:border-zinc-700 transition-colors cursor-pointer group/card shadow-lg">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">BUG-128</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
<iconify-icon className="text-zinc-500 hover:text-white" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-200 mb-2 group-hover/card:text-white">Optimize mobile menu animation frame rate</p>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Tomorrow</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-line-linear" width="12"></iconify-icon> 2</span>
</div>
<div className="flex -space-x-1.5">
<img className="w-5 h-5 rounded-full border border-black" src="https://i.pravatar.cc/150?u=1"/>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group animate-pulse">
<img className="w-9 h-9 rounded-lg mt-1 bg-zinc-800" src="https://i.pravatar.cc/150?u=8"/>
<div className="flex-1">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white hover:underline cursor-pointer">Jordan Lee</span>
<span className="text-[10px] text-zinc-500">Just now</span>
</div>
<div className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    On it. Converting to task...
                  </div>
</div>
</div>
</div>

<div className="p-4 bg-zinc-900/30 backdrop-blur-md border-t border-white/5">
<div className="relative rounded-xl bg-zinc-800/50 border border-white/10 focus-within:border-zinc-600 focus-within:ring-1 focus-within:ring-zinc-600 transition-all">
<div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
<button className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5"><iconify-icon icon="solar:text-bold-linear" width="16"></iconify-icon></button>
<button className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5"><iconify-icon icon="solar:text-italic-linear" width="16"></iconify-icon></button>
<button className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5"><iconify-icon icon="solar:link-linear" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5"><iconify-icon icon="solar:clipboard-list-linear" width="16"></iconify-icon></button>
<button className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5"><iconify-icon icon="solar:code-linear" width="16"></iconify-icon></button>
</div>
<input className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-500 px-4 py-3 focus:outline-none" placeholder="Message #engineering..." type="text"/>
<div className="absolute right-2 bottom-2">
<button className="p-1.5 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:arrow-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-2 text-[10px] text-zinc-500 text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
<span>Press  for commands</span>
</div>
</div>
</main>
</div>
</div>

<div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>
<div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-geist font-medium text-white mb-6">Built for flow state.</h2>
<p className="text-zinc-400 text-lg max-w-2xl">Remove the friction between talking about work and actually doing it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 rounded-2xl border border-white/10 bg-zinc-900/30 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Unified Context</h3>
<p className="text-zinc-400">Turn any message into a task with one click. Comments on tasks sync back to the chat thread. No more copy-pasting link context.</p>
</div>
<div className="absolute right-0 bottom-0 w-2/3 h-48 bg-zinc-950 border-t border-l border-white/10 rounded-tl-2xl p-4 translate-y-4 translate-x-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
<div className="flex flex-col gap-3">
<div className="flex gap-3 items-start opacity-50">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="h-2 w-32 bg-zinc-800 rounded"></div>
</div>
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px]">AI</div>
<div className="flex-1 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
<iconify-icon className="mr-1" icon="solar:magic-stick-linear" width="12"></iconify-icon>
                 I created task <span className="underline">ENG-392</span> from this conversation.
               </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/30 overflow-hidden relative group">
<div className="p-8 h-full flex flex-col">
<iconify-icon className="text-emerald-400 mb-6" icon="solar:kanban-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2">Native Boards</h3>
<p className="text-zinc-400 text-sm flex-1">Visualize work your way. Switch between List, Board, and Calendar views instantly.</p>
<div className="mt-6 flex gap-2">
<div className="w-1/3 h-20 bg-zinc-800/50 rounded border border-white/5"></div>
<div className="w-1/3 h-20 bg-zinc-800/50 rounded border border-white/5"></div>
<div className="w-1/3 h-20 bg-zinc-800/50 rounded border border-white/5"></div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/30 overflow-hidden relative group">
<div className="p-8">
<iconify-icon className="text-orange-400 mb-6" icon="solar:plain-stack-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2">2-Way Sync</h3>
<p className="text-zinc-400 text-sm">GitHub PRs, Figma comments, and Sentry errors flow directly into your channels.</p>
</div>
<div className="px-8 pb-8 flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center"><iconify-icon icon="solar:github-circle-linear" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center"><iconify-icon icon="solar:figma-circle-linear" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center"><iconify-icon icon="solar:cloud-upload-linear" width="20"></iconify-icon></div>
</div>
</div>

<div className="md:col-span-4 rounded-2xl border border-white/10 bg-zinc-900/30 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">No-Code Automations</h3>
<p className="text-zinc-400">"If message contains 'urgent', create task in #high-priority". Build powerful workflows in plain English.</p>
</div>
<div className="w-full md:w-1/2 bg-zinc-950 border border-white/10 rounded-lg p-4 font-mono text-xs text-zinc-400">
<div className="flex items-center gap-2 mb-2">
<span className="text-purple-400">WHEN</span>
<span>New Issue Created</span>
</div>
<div className="flex justify-center my-1"><iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon></div>
<div className="flex items-center gap-2 mb-2">
<span className="text-purple-400">IF</span>
<span>Label is "Bug"</span>
</div>
<div className="flex justify-center my-1"><iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon></div>
<div className="flex items-center gap-2">
<span className="text-purple-400">THEN</span>
<span>Post to #engineering-alerts</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-bold text-white mb-1">2.5h</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Saved Daily Per User</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">10k+</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Active Teams</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">0ms</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Local-First Latency</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">99.9%</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Uptime SLA</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-geist font-medium text-white mb-6">Ready to sync your team?</h2>
<p className="text-zinc-400 text-lg mb-10">Join thousands of high-velocity teams who have ditched the context switching.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
        Get Started for Free
        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white font-semibold text-sm hover:bg-zinc-900 transition-colors">
        Read the Manifesto
      </button>
</div>
<p className="mt-6 text-xs text-zinc-600">No credit card required • Unlimited history on free plan</p>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Features</a></li>
<li><a className="hover:text-zinc-300" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-300" href="#">Changelog</a></li>
<li><a className="hover:text-zinc-300" href="#">Docs</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">About</a></li>
<li><a className="hover:text-zinc-300" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300" href="#">Terms</a></li>
<li><a className="hover:text-zinc-300" href="#">Security</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Social</h3>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:symbol-x-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon className="text-zinc-600" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-600">© 2025 WorkSync Inc.</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-600">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
        All systems operational
      </div>
</div>
</div>
</footer>

    </>
  );
}
