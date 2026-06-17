import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="w-16 border-r border-neutral-800 flex flex-col items-center py-6 bg-neutral-950/50 backdrop-blur-xl z-20 flex-shrink-0">
<div className="mb-8">
<div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-950 font-bold tracking-tighter">
                B
            </div>
</div>
<div className="flex flex-col gap-6 w-full items-center">
<button className="text-neutral-100 p-2 rounded-md bg-neutral-800/50 ring-1 ring-white/10 shadow-sm transition hover:text-white">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-500 p-2 rounded-md hover:text-neutral-200 transition">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-500 p-2 rounded-md hover:text-neutral-200 transition">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-500 p-2 rounded-md hover:text-neutral-200 transition">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-neutral-500 hover:text-neutral-200 transition">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-neutral-900"></div>
</div>
</nav>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 flex-shrink-0 bg-neutral-950/80 backdrop-blur-sm z-10">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-neutral-500">Analytics</span>
<span className="text-neutral-700">/</span>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Real-time Biometrics</span>
<span className="ml-3 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    ACTIVE
                </span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
<iconify-icon icon="lucide:cpu" width="14"></iconify-icon>
<span>LATENCY: 12ms</span>
</div>
<div className="h-4 w-px bg-neutral-800"></div>
<div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
<iconify-icon icon="lucide:wifi" width="14"></iconify-icon>
<span>FPS: 58</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[800px]">

<div className="lg:col-span-8 flex flex-col gap-6 h-full">

<div className="relative w-full aspect-video bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden group shadow-sm flex-shrink-0">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<div className="relative w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>
<iconify-icon className="text-neutral-700 absolute opacity-20" icon="lucide:camera-off" strokeWidth="1" width="64"></iconify-icon>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-80 border border-indigo-500/30 rounded-[3rem] relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-black/50 backdrop-blur text-[10px] text-indigo-400 border border-indigo-500/30 rounded">ID: 8842-A</div>
<div className="absolute w-full h-px bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] scanner-line"></div>
<div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white/60 rounded-full"></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full"></div>
<div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="bg-black/40 backdrop-blur border border-white/5 rounded px-2 py-1 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-medium text-white tracking-wider">REC 00:04:22</span>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="text-xs font-mono text-neutral-400 bg-black/40 backdrop-blur px-2 py-1 rounded border border-white/5">
                                SOURCE: CAM_01_RAW
                            </div>
<div className="flex gap-2">
<button className="p-1.5 rounded bg-black/40 backdrop-blur border border-white/5 text-white hover:bg-white/10 transition">
<iconify-icon icon="lucide:maximize" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex-1 bg-neutral-900/30 border border-neutral-800 rounded-lg p-0 overflow-hidden flex flex-col h-full min-h-[200px]">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:mic" width="16"></iconify-icon>
<h3 className="text-sm font-medium text-neutral-200">Real-time Transcript</h3>
</div>
<div className="flex items-end gap-0.5 h-4">
<div className="w-1 bg-indigo-500/80 rounded-sm audio-bar" style={{animationDuration: '0.8s'}}></div>
<div className="w-1 bg-indigo-500/60 rounded-sm audio-bar" style={{animationDuration: '1.2s'}}></div>
<div className="w-1 bg-indigo-500/90 rounded-sm audio-bar" style={{animationDuration: '0.5s'}}></div>
<div className="w-1 bg-indigo-500/70 rounded-sm audio-bar" style={{animationDuration: '0.9s'}}></div>
<div className="w-1 bg-indigo-500/50 rounded-sm audio-bar" style={{animationDuration: '1.1s'}}></div>
</div>
</div>
<div className="p-4 overflow-y-auto font-mono text-sm space-y-4 flex-1">
<div className="flex gap-3 opacity-50">
<div className="text-[10px] text-neutral-500 pt-1 w-12 text-right">10:42:01</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-neutral-300 text-xs font-semibold">User</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50">Neutral</span>
</div>
<p className="text-neutral-400 leading-relaxed">System initialization sequence started.</p>
</div>
</div>
<div className="flex gap-3">
<div className="text-[10px] text-neutral-500 pt-1 w-12 text-right">10:42:15</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-indigo-300 text-xs font-semibold">Target</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Calm</span>
</div>
<p className="text-neutral-300 leading-relaxed">I am currently verifying the identity parameters. Please look directly at the sensor.</p>
</div>
</div>
<div className="flex gap-3">
<div className="text-[10px] text-neutral-500 pt-1 w-12 text-right">10:42:22</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-indigo-300 text-xs font-semibold">Target</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Analyzing...</span>
</div>
<p className="text-neutral-200 leading-relaxed flex items-center gap-1">
                                        Processing biometric request
                                        <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse"></span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 h-full overflow-hidden">

<div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-5 flex-shrink-0">
<div className="flex items-start justify-between mb-4">
<h3 className="text-sm font-medium text-neutral-200">Subject Profile</h3>
<button className="text-neutral-500 hover:text-white transition">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center text-xl text-neutral-400 relative">
<iconify-icon icon="lucide:user" width="24"></iconify-icon>
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-neutral-900 rounded-full"></div>
</div>
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Zhang Wei</h2>
<p className="text-xs text-neutral-500 font-mono">ID: 99420-XCV</p>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5">Gender</p>
<p className="text-sm text-neutral-300">Male</p>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5">Age</p>
<p className="text-sm text-neutral-300">32 <span className="text-xs text-neutral-500">(Est. 31-34)</span></p>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800 rounded-lg flex-shrink-0 flex flex-col overflow-hidden">
<div className="px-5 py-3 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:smile-plus" width="16"></iconify-icon>
<h3 className="text-sm font-medium text-neutral-200">Emotion Analysis</h3>
</div>
<span className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded">V2.1 Model</span>
</div>
<div className="p-5">

<div className="flex items-center gap-4 mb-6">
<div className="relative w-16 h-16 rounded-full border border-neutral-700 bg-neutral-800/50 flex items-center justify-center">

<div className="absolute inset-2 border border-neutral-700/50 rounded-full opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-neutral-700/50"></div>
<div className="h-full w-px bg-neutral-700/50 absolute"></div>
</div>

<div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-indigo-500 rounded-full emotion-dot z-10"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Dominant State</span>
<span className="text-xs font-mono text-indigo-400">94.2%</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
                                        Neutral
                                        <span className="text-sm font-normal text-neutral-500 bg-neutral-800/80 px-2 py-0.5 rounded-full border border-neutral-700/50">Calm</span>
</div>
</div>
</div>

<div className="space-y-3">

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Neutral</span>
<span className="font-mono text-neutral-300">0.94</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '94%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
<span>Happy</span>
<span className="font-mono text-neutral-500">0.03</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="h-full bg-emerald-500/70 rounded-full" style={{width: '3%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
<span>Surprise</span>
<span className="font-mono text-neutral-500">0.02</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="h-full bg-amber-500/70 rounded-full" style={{width: '2%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
<span>Neg/Other</span>
<span className="font-mono text-neutral-500">0.01</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="h-full bg-red-500/50 rounded-full" style={{width: '1%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-neutral-900/30 border border-neutral-800 rounded-lg flex flex-col overflow-hidden min-h-0">
<div className="px-5 py-3 border-b border-neutral-800 bg-neutral-900/50 flex justify-between items-center flex-shrink-0">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:scan-face" width="16"></iconify-icon>
<h3 className="text-sm font-medium text-neutral-200">Blendshapes (52)</h3>
</div>
<div className="flex gap-2">
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500 transition">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
</button>
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500 transition">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="px-5 py-2 grid grid-cols-[100px_1fr_40px] gap-3 border-b border-neutral-800/50 bg-neutral-900/20 text-[10px] font-medium text-neutral-500 uppercase tracking-wider flex-shrink-0">
<span>Parameter</span>
<span>Coefficient</span>
<span className="text-right">Val</span>
</div>

<div className="overflow-y-auto p-2 space-y-0.5 flex-1">

<div className="px-3 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-1">Eyes</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeBlink_L">eyeBlink_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full live-bar" style={{width: '8%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-indigo-300">0.08</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeBlink_R">eyeBlink_R</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full live-bar" style={{width: '7%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-indigo-300">0.07</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeLookDown_L">eyeLookDown_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 rounded-full" style={{width: '12%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-500">0.12</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeLookIn_L">eyeLookIn_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 rounded-full" style={{width: '4%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-500">0.04</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeLookOut_L">eyeLookOut_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 rounded-full" style={{width: '0%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-500">0.00</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeLookUp_L">eyeLookUp_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 rounded-full" style={{width: '1%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-500">0.01</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="eyeSquint_L">eyeSquint_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/70 rounded-full" style={{width: '42%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-300">0.42</span>
</div>

<div className="px-3 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-2">Brows</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="browDown_L">browDown_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '65%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-amber-400">0.65</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="browDown_R">browDown_R</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '62%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-amber-400">0.62</span>
</div>

<div className="px-3 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-2">Jaw</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="jawOpen">jawOpen</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full live-bar" style={{width: '5%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-emerald-400">0.05</span>
</div>

<div className="px-3 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-2">Mouth</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="mouthClose">mouthClose</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 rounded-full" style={{width: '92%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-emerald-300">0.92</span>
</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="mouthSmile_L">mouthSmile_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '15%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-purple-300">0.15</span>
</div>

<div className="px-3 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-2">Cheek</div>

<div className="group flex items-center gap-3 px-3 py-1.5 hover:bg-neutral-800/50 rounded transition-colors">
<span className="w-[100px] truncate text-xs font-mono text-neutral-400" title="cheekSquint_L">cheekSquint_L</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 rounded-full" style={{width: '25%'}}></div>
</div>
<span className="w-[40px] text-right font-mono text-xs text-neutral-400">0.25</span>
</div>
<div className="px-3 py-4 text-center">
<span className="text-[10px] text-neutral-600 font-mono">+33 more parameters hidden</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute bottom-6 right-8 z-50 pointer-events-none">
<div className="bg-neutral-900 border border-neutral-800 shadow-lg text-neutral-300 px-4 py-3 rounded-lg flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-xs font-medium">System fully operational</span>
</div>
</div>

    </>
  );
}
