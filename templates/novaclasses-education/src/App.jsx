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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="block hover:opacity-90 transition-opacity" href="#">
<img alt="Nova Classes Logo" className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Library</a>
<a className="hover:text-white transition-colors" href="#">Mentors</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="group relative px-4 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-all overflow-hidden" href="#">
<span className="relative z-10">Start Coaching</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-indigo-300 mb-4 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Lecture Hosting Live
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                Unleash potential with <br/>
<span className="bg-gradient-to-r from-indigo-300 via-white to-zinc-400 bg-clip-text text-transparent">precision coaching.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Nova Classes provides the infrastructure for digital mentorship. Upload lectures, share notes, and grow with a platform designed for high-performance learning.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="h-10 px-6 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Learning
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Browse Library
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
<div className="relative rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-zinc-900 flex items-center px-4 gap-2 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono">/courses/system-design/lecture-01</div>
</div>

<div className="grid grid-cols-12 h-[450px]">

<div className="col-span-3 border-r border-white/5 bg-zinc-950/50 hidden md:flex flex-col">
<div className="p-4 border-b border-white/5">
<div className="text-xs font-medium text-white">Course Content</div>
<div className="text-[10px] text-zinc-500 mt-1">12 Lectures • 4h 30m</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="p-2 rounded bg-indigo-500/10 border border-indigo-500/20 flex gap-3 items-start">
<iconify-icon className="text-indigo-400 mt-0.5" icon="lucide:play-circle" width="14"></iconify-icon>
<div>
<div className="text-xs text-indigo-100 font-medium">Intro to Systems</div>
<div className="text-[10px] text-indigo-400/70">12:04</div>
</div>
</div>

<div className="p-2 rounded hover:bg-white/5 flex gap-3 items-start transition-colors cursor-pointer group/item">
<iconify-icon className="text-zinc-600 group-hover/item:text-zinc-400" icon="lucide:lock" width="14"></iconify-icon>
<div>
<div className="text-xs text-zinc-400 group-hover/item:text-zinc-300">Scalability Patterns</div>
<div className="text-[10px] text-zinc-600">18:45</div>
</div>
</div>
<div className="p-2 rounded hover:bg-white/5 flex gap-3 items-start transition-colors cursor-pointer group/item">
<iconify-icon className="text-zinc-600 group-hover/item:text-zinc-400" icon="lucide:file-text" width="14"></iconify-icon>
<div>
<div className="text-xs text-zinc-400 group-hover/item:text-zinc-300">Reading Material</div>
<div className="text-[10px] text-zinc-600">PDF • 2.4 MB</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 bg-zinc-900 relative">

<div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-50"></div>

<div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group/play">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="2" width="24"></iconify-icon>
</div>

<div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-zinc-950 to-transparent">
<div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden cursor-pointer">
<div className="w-1/3 h-full bg-indigo-500"></div>
</div>
<div className="flex justify-between items-center text-white">
<div className="text-sm font-medium">01. Introduction to Systems</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-400 hover:text-white cursor-pointer" icon="lucide:download" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white cursor-pointer" icon="lucide:settings" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white cursor-pointer" icon="lucide:maximize" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 sticky top-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] uppercase tracking-wider font-medium text-indigo-300 mb-6">
<iconify-icon icon="lucide:upload-cloud" width="12"></iconify-icon>
                    Upload &amp; Manage
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Your knowledge base.<br/>Organized.</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                    Build your digital curriculum with ease. Upload high-res video lectures, attach PDF notes, and organize resources in one central hub.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Bulk video uploading</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">PDF &amp; Resource attachments</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Student access controls</span>
</li>
</ul>
</div>

<div className="md:w-2/3 w-full">
<div className="rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/60">
<h3 className="text-sm font-medium text-white">Content Library</h3>
<button className="bg-white text-zinc-950 px-3 py-1.5 rounded text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
                            Upload New
                        </button>
</div>

<div className="grid grid-cols-12 px-4 py-2 border-b border-white/5 bg-zinc-900/20 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
<div className="col-span-6">File Name</div>
<div className="col-span-3">Type</div>
<div className="col-span-3 text-right">Size</div>
</div>

<div className="divide-y divide-white/5">

<div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors group">
<div className="col-span-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
<iconify-icon icon="lucide:video" width="14"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">Lecture_01_Basics.mp4</div>
<div className="text-[10px] text-zinc-500">Updated 2 mins ago</div>
</div>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-[10px] text-zinc-400">Video Lesson</span>
</div>
<div className="col-span-3 text-right text-xs text-zinc-400 font-mono">245 MB</div>
</div>

<div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors group">
<div className="col-span-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">Course_Syllabus.pdf</div>
<div className="text-[10px] text-zinc-500">Updated 1 hour ago</div>
</div>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-[10px] text-zinc-400">Document</span>
</div>
<div className="col-span-3 text-right text-xs text-zinc-400 font-mono">1.2 MB</div>
</div>

<div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors group">
<div className="col-span-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
<iconify-icon icon="lucide:code" width="14"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">starter_code.zip</div>
<div className="text-[10px] text-zinc-500">Updated 3 hours ago</div>
</div>
</div>
<div className="col-span-3">
<span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-[10px] text-zinc-400">Resource</span>
</div>
<div className="col-span-3 text-right text-xs text-zinc-400 font-mono">45 KB</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 bg-zinc-900/20">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for growth.</h2>
<p className="text-zinc-400 max-w-xl">Every tool you need to manage your coaching business, built into one seamless interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:monitor-play" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">High-fidelity Playback</h3>
<p className="text-sm text-zinc-400 max-w-sm">4k streaming support for your lectures. Students can watch, pause, and take notes directly in the browser.</p>
</div>

<div className="mt-8 w-full bg-zinc-950 border border-white/10 rounded-lg p-3 flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-24 h-16 bg-zinc-800 rounded overflow-hidden relative group/video">
<div className="absolute inset-0 bg-zinc-700/50 flex items-center justify-center group-hover/video:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:play" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-2">
<div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
</div>
<div className="flex gap-2 text-zinc-500">
<div className="px-2 py-1 rounded bg-zinc-800 text-[10px]">1080p</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-700 transition-colors">
<iconify-icon icon="lucide:calendar-check" strokeWidth="1" width="80"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Smart Scheduling</h3>
<p className="text-sm text-zinc-400">Automated timezone detection for live mentorship sessions.</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-8 right-8 flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group/toggle">
<div className="relative w-10 h-6 bg-zinc-800 rounded-full border border-white/10 transition-colors group-hover/toggle:border-indigo-500/50">
<div className="absolute top-1 left-1 w-4 h-4 bg-indigo-500 rounded-full shadow-lg"></div>
</div>
</label>
<div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500"></div>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Student Analytics</h3>
<p className="text-sm text-zinc-400">Track video completion rates and resource downloads.</p>
</div>
</div>

<div className="md:col-span-2 bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:folder-open" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Instant Resources</h3>
<p className="text-sm text-zinc-400 mb-6">Attach downloadable files to every lecture. PDFs, code snippets, or whiteboard exports.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
                            Unlimited file storage
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
                            Organized by module
                        </li>
</ul>
</div>

<div className="w-full md:w-1/2 bg-zinc-950 border border-white/5 rounded-xl p-4 space-y-3">
<div className="flex items-center gap-3 p-2 bg-zinc-900 rounded border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group/file">
<div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center">
<iconify-icon icon="lucide:file-code" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-white truncate group-hover/file:text-blue-300">algorithm_practice.js</div>
<div className="text-[10px] text-zinc-500">24KB • JavaScript</div>
</div>
<iconify-icon className="text-zinc-600 group-hover/file:text-white" icon="lucide:download-cloud" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2 bg-zinc-900 rounded border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group/file">
<div className="w-8 h-8 bg-red-500/20 text-red-400 rounded flex items-center justify-center">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-white truncate group-hover/file:text-red-300">system_design.pdf</div>
<div className="text-[10px] text-zinc-500">1.2MB • PDF Document</div>
</div>
<iconify-icon className="text-zinc-600 group-hover/file:text-white" icon="lucide:download-cloud" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-24">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Tailor your experience</h2>
<p className="text-zinc-400">Select your preferences to calculate your estimated growth.</p>
</div>
<div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl">

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-white">Weekly Study Hours</label>
<span className="text-sm text-indigo-400 font-mono">15h / week</span>
</div>
<div className="relative h-2 bg-zinc-800 rounded-full w-full">
<div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full" style={{width: '40%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-6 h-6 bg-white rounded-full shadow-lg border-2 border-indigo-500 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
<span>5h</span>
<span>40h</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<label className="relative flex items-start gap-3 p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center text-zinc-950 transition-all">
<iconify-icon className="opacity-0 peer-checked:opacity-100" icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-white">Full Video Library Access</span>
<span className="text-xs text-zinc-500">All lectures &amp; workshops</span>
</div>
</label>
<label className="relative flex items-start gap-3 p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center text-zinc-950 transition-all">
<iconify-icon className="opacity-0 peer-checked:opacity-100" icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-white">Resource Downloads</span>
<span className="text-xs text-zinc-500">PDFs, Code, Slides</span>
</div>
</label>
</div>
<div className="pt-6 border-t border-white/5 flex justify-between items-center">
<div>
<div className="text-xs text-zinc-500">Estimated Monthly Cost</div>
<div className="text-2xl font-medium text-white tracking-tight">$249<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
</div>
<button className="bg-white text-zinc-950 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors">
                        Proceed
                    </button>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-white/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="block mb-6 hover:opacity-90 transition-opacity" href="#">
<img alt="Nova Classes Logo" className="h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Designed for the future of learning.<br/>
                    San Francisco, CA.
                </p>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Video Library</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Resources</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-zinc-600">© 2024 Nova Classes Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
