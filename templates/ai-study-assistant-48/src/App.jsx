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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
                    COGNOS
                </a>

<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-white hover:text-white transition-colors" href="#">Library</a>
<a className="hover:text-white transition-colors" href="#">Practice</a>
<a className="hover:text-white transition-colors" href="#">Progress</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors mr-2">
<iconify-icon icon="solar:globe-linear" width="16"></iconify-icon>
<span>EN</span>
</button>
<button className="flex items-center gap-2 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 border border-white/10 rounded-full px-3 py-1.5 text-neutral-300 transition-all">
<iconify-icon className="text-amber-300" icon="solar:star-linear"></iconify-icon>
<span>Upgrade</span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-white/10"></div>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center pt-20 px-6 pb-12">

<div className="w-full max-w-2xl text-center mb-12">
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                What do you want to master?
            </h1>
<p className="text-lg text-neutral-500 font-light mb-10 max-w-md mx-auto">
                Generate curriculums, quizzes, and flashcards instantly with AI context awareness.
            </p>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
<div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col gap-2 shadow-2xl">
<div className="flex items-start gap-3 p-2">
<iconify-icon className="text-white/40 mt-1" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<textarea className="w-full bg-transparent text-white text-base font-normal placeholder:text-neutral-600 focus:outline-none resize-none h-12 py-1" placeholder="e.g. Explain Quantum Entanglement like I'm 5..."></textarea>
</div>
<div className="flex items-center justify-between px-2 pb-1">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded-md transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
                                Upload PDF
                            </button>
<button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded-md transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="solar:global-linear"></iconify-icon>
                                Web Source
                            </button>
</div>
<button className="bg-white text-black hover:bg-neutral-200 p-2 rounded-lg transition-colors flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="group p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all text-left flex flex-col gap-3">
<div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:notes-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">Summarize</span>
</button>
<button className="group p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all text-left flex flex-col gap-3">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:card-reciept-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">Flashcards</span>
</button>
<button className="group p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all text-left flex flex-col gap-3">
<div className="h-8 w-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:text-rose-300 group-hover:bg-rose-500/20 transition-colors">
<iconify-icon icon="solar:question-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">Quiz Me</span>
</button>
<button className="group p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all text-left flex flex-col gap-3">
<div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon icon="solar:graph-new-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">Mind Map</span>
</button>
</div>

<div className="relative rounded-xl border border-white/10 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.08] via-purple-500/[0.05] to-transparent opacity-100"></div>
<div className="relative p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="relative">
<div className="h-14 w-14 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-white shadow-inner">
<iconify-icon className="text-indigo-300" icon="solar:user-speak-rounded-linear" width="28"></iconify-icon>
</div>
<div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-neutral-900 rounded-full flex items-center justify-center">
<div className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Professor Atlas</h3>
<p className="text-xs text-neutral-400 mt-0.5">Ready to continue "Advanced React"?</p>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:microphone-linear" width="18"></iconify-icon>
</button>
<button className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:keyboard-linear" width="18"></iconify-icon>
</button>
<button className="h-9 px-4 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors border border-transparent flex items-center gap-2 ml-1 flex-1 sm:flex-initial justify-center">
<span>Join Session</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-neutral-900/20 overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-white tracking-tight">Recent Sessions</h3>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">View all</a>
</div>
<div className="divide-y divide-white/5">

<div className="group px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:code-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-white">Advanced React Hooks</p>
<p className="text-xs text-neutral-500">Last studied 2h ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-3/4"></div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:history-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-white">European History 1900s</p>
<p className="text-xs text-neutral-500">Last studied 1d ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-1/3"></div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:test-tube-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-white">Organic Chemistry</p>
<p className="text-xs text-neutral-500">Last studied 3d ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-1/2"></div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="rounded-xl border border-white/5 bg-neutral-900/20 p-6 flex flex-col gap-6">
<h3 className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:settings-minimalistic-linear"></iconify-icon>
                        Session Config
                    </h3>

<div className="flex flex-col gap-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-400">Complexity</span>
<span className="text-white">Expert</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="80"/>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-neutral-300">Deep Focus</span>
<span className="text-xs text-neutral-500">Block distractions</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/20"></div>
</label>
</div>

<div className="space-y-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer appearance-none h-4 w-4 border border-neutral-600 rounded bg-transparent checked:bg-white checked:border-white transition-colors" type="checkbox"/>
<iconify-icon className="absolute left-0 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">Socratic Method</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none h-4 w-4 border border-neutral-600 rounded bg-transparent checked:bg-white checked:border-white transition-colors" type="checkbox"/>
<iconify-icon className="absolute left-0 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">Spaced Repetition</span>
</label>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="60"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-1">Streak</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">12</span>
<span className="text-sm text-neutral-400">days</span>
</div>
<div className="mt-4 flex gap-1">
<div className="h-8 w-1 flex-1 bg-white/20 rounded-sm"></div>
<div className="h-8 w-1 flex-1 bg-white/40 rounded-sm"></div>
<div className="h-8 w-1 flex-1 bg-white/60 rounded-sm"></div>
<div className="h-8 w-1 flex-1 bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
<div className="h-8 w-1 flex-1 bg-white/10 rounded-sm"></div>
<div className="h-8 w-1 flex-1 bg-white/10 rounded-sm"></div>
<div className="h-8 w-1 flex-1 bg-white/10 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-auto w-full border-t border-white/5 bg-black/60 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-8">

<div className="inline-flex items-center gap-6 px-4 py-2 rounded-full border border-white/5 bg-neutral-900/50 text-xs text-neutral-500">
<span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded border border-white/10 font-sans text-[10px] text-neutral-300">C</kbd> New Chat</span>
<span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded border border-white/10 font-sans text-[10px] text-neutral-300">/</kbd> Command</span>
<span className="flex items-center gap-1.5"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded border border-white/10 font-sans text-[10px] text-neutral-300">F</kbd> Find</span>
</div>

<div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2 text-neutral-600">
<iconify-icon icon="solar:earth-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Region &amp; Language</span>
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-500 font-medium">
<a className="text-white hover:text-white transition-colors flex items-center gap-1.5" href="#">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                        English (US)
                    </a>
<a className="hover:text-neutral-300 transition-colors" href="#">Español</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Français</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Deutsch</a>
<a className="hover:text-neutral-300 transition-colors" href="#">日本語</a>
<a className="hover:text-neutral-300 transition-colors" href="#">한국어</a>
<a className="hover:text-neutral-300 transition-colors" href="#">中文 (简体)</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Português</a>
</div>
<div className="text-xs text-neutral-600">
                    © 2024 Cognos Inc.
                </div>
</div>
</div>
</footer>

    </>
  );
}
