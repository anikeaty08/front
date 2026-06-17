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



        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.remove('hidden');
            
            // Update nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('bg-violet-500/10', 'text-violet-400', 'border', 'border-violet-500/20');
                item.classList.add('text-zinc-400');
            });
            
            // Close mobile sidebar
            if (window.innerWidth < 1024) {
                toggleSidebar();
            }
        }

        function setInputType(type) {
            const topicBtn = document.getElementById('topicBtn');
            const urlBtn = document.getElementById('urlBtn');
            const topicInput = document.getElementById('topicInput');
            const urlInput = document.getElementById('urlInput');
            
            if (type === 'topic') {
                topicBtn.classList.add('bg-violet-500/10', 'border-violet-500/30', 'text-violet-400');
                topicBtn.classList.remove('bg-zinc-800', 'border-zinc-700', 'text-zinc-400');
                urlBtn.classList.remove('bg-violet-500/10', 'border-violet-500/30', 'text-violet-400');
                urlBtn.classList.add('bg-zinc-800', 'border-zinc-700', 'text-zinc-400');
                topicInput.classList.remove('hidden');
                urlInput.classList.add('hidden');
            } else {
                urlBtn.classList.add('bg-violet-500/10', 'border-violet-500/30', 'text-violet-400');
                urlBtn.classList.remove('bg-zinc-800', 'border-zinc-700', 'text-zinc-400');
                topicBtn.classList.remove('bg-violet-500/10', 'border-violet-500/30', 'text-violet-400');
                topicBtn.classList.add('bg-zinc-800', 'border-zinc-700', 'text-zinc-400');
                urlInput.classList.remove('hidden');
                topicInput.classList.add('hidden');
            }
        }

        function generateScript() {
            const output = document.getElementById('scriptOutput');
            output.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center gap-2 text-violet-400 mb-4">
                        <span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16" data-height="16" style="stroke-width: 1.5;"></span>
                        <span class="text-sm">Generating script...</span>
                    </div>
                </div>
            `;
            
            setTimeout(() => {
                output.innerHTML = `
                    <div class="space-y-4 text-sm text-zinc-300 leading-relaxed">
                        <p class="font-semibold text-white">[HOOK - 0:00-0:03]</p>
                        <p>"Stop scrolling! These 5 AI tools will literally change your life..."</p>
                        
                        <p class="font-semibold text-white mt-4">[INTRO - 0:03-0:10]</p>
                        <p>What's up everyone! Today I'm revealing the top 5 AI tools that are absolutely game-changing for productivity in 2024.</p>
                        
                        <p class="font-semibold text-white mt-4">[TOOL #1 - 0:10-0:25]</p>
                        <p>First up, we have ChatGPT. Now I know you've probably heard of this one, but are you using it to its FULL potential?</p>
                        
                        <p class="font-semibold text-white mt-4">[TOOL #2 - 0:25-0:40]</p>
                        <p>Tool number two is Midjourney. If you're creating any kind of visual content, this AI image generator is absolutely insane...</p>
                        
                        <p class="text-zinc-500 mt-4 italic">[Script continues...]</p>
                    </div>
                `;
            }, 2000);
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
      

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden lg:hidden" id="mobileOverlay" onclick="toggleSidebar()"></div>

<aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900/95 border-r border-zinc-800 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" id="sidebar">
<div className="flex flex-col h-full">

<div className="p-6 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:play" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-lg font-semibold tracking-tight">ViralAI</span>
</div>
</div>

<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider px-3 mb-3">Main</p>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20" href="#" onclick="showSection('dashboard')">
<span className="iconify" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Dashboard
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('projects')">
<span className="iconify" data-height="18" data-icon="lucide:folder" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Project Gallery
                </a>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider px-3 mb-3 mt-6">AI Tools</p>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('scriptwriter')">
<span className="iconify" data-height="18" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    AI Scriptwriter
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('voiceover')">
<span className="iconify" data-height="18" data-icon="lucide:mic" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    AI Voiceover
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('remover')">
<span className="iconify" data-height="18" data-icon="lucide:eraser" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Watermark Remover
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('generator')">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    AI Video Generator
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('clipeditor')">
<span className="iconify" data-height="18" data-icon="lucide:scissors" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Viral Clip Editor
                </a>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider px-3 mb-3 mt-6">Account</p>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#" onclick="showSection('pricing')">
<span className="iconify" data-height="18" data-icon="lucide:credit-card" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Pricing
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Settings
                </a>
</nav>

<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-sm font-semibold text-zinc-900">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">John Doe</p>
<p className="text-xs text-zinc-500">Pro Plan</p>
</div>
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</aside>

<main className="lg:ml-64 min-h-screen">

<header className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
<div className="flex items-center justify-between px-4 lg:px-8 py-4">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors" onclick="toggleSidebar()">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 w-64">
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="bg-transparent text-sm text-white placeholder-zinc-500 outline-none flex-1" placeholder="Search projects..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5">
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:zap" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium">2,450 credits</span>
</div>
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors relative">
<span className="iconify text-zinc-400" data-height="18" data-icon="lucide:bell" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="18" data-icon="lucide:help-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</header>

<section className="section-content p-4 lg:p-8" id="dashboard">
<div className="mb-8">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">Welcome back, John</h1>
<p className="text-zinc-400">Create viral content with AI-powered tools</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
<span className="iconify text-violet-400" data-height="18" data-icon="lucide:video" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<p className="text-2xl font-semibold tracking-tight">47</p>
<p className="text-xs text-zinc-500 mt-1">Videos Created</p>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
<span className="iconify text-emerald-400" data-height="18" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<p className="text-2xl font-semibold tracking-tight">128</p>
<p className="text-xs text-zinc-500 mt-1">Scripts Generated</p>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
<span className="iconify text-blue-400" data-height="18" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<p className="text-2xl font-semibold tracking-tight">12.4h</p>
<p className="text-xs text-zinc-500 mt-1">Processing Time Saved</p>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-fuchsia-500/10 rounded-lg flex items-center justify-center">
<span className="iconify text-fuchsia-400" data-height="18" data-icon="lucide:trending-up" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<p className="text-2xl font-semibold tracking-tight">2.1M</p>
<p className="text-xs text-zinc-500 mt-1">Total Views</p>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-medium mb-4">Quick Actions</h2>
<div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all group text-left" onclick="showSection('scriptwriter')">
<div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-height="18" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium">Write Script</p>
<p className="text-xs text-zinc-500 mt-1">AI-powered scripts</p>
</button>
<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group text-left" onclick="showSection('voiceover')">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-height="18" data-icon="lucide:mic" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium">Create Voiceover</p>
<p className="text-xs text-zinc-500 mt-1">Natural AI voices</p>
</button>
<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group text-left" onclick="showSection('remover')">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-height="18" data-icon="lucide:eraser" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium">Remove Watermark</p>
<p className="text-xs text-zinc-500 mt-1">Clean your videos</p>
</button>
<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-left" onclick="showSection('generator')">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium">Generate Video</p>
<p className="text-xs text-zinc-500 mt-1">Text to video AI</p>
</button>
<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 lg:p-5 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 transition-all group text-left" onclick="showSection('clipeditor')">
<div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-height="18" data-icon="lucide:scissors" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium">Edit Clips</p>
<p className="text-xs text-zinc-500 mt-1">Viral short clips</p>
</button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium">Recent Projects</h2>
<button className="text-sm text-violet-400 hover:text-violet-300 transition-colors" onclick="showSection('projects')">View all</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
<span className="iconify text-white/50" data-height="48" data-icon="lucide:play-circle" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">2:34</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">AI Tools Explained</h3>
<p className="text-xs text-zinc-500">Created 2 hours ago</p>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
<span className="iconify text-white/50" data-height="48" data-icon="lucide:play-circle" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">0:58</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">Product Launch Teaser</h3>
<p className="text-xs text-zinc-500">Created yesterday</p>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
<span className="iconify text-white/50" data-height="48" data-icon="lucide:play-circle" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">1:15</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">TikTok Viral Clip</h3>
<p className="text-xs text-zinc-500">Created 3 days ago</p>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="scriptwriter">
<div className="mb-8">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">AI Scriptwriter</h1>
<p className="text-zinc-400">Generate high-engagement video scripts from topics or YouTube URLs</p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="mb-6">
<label className="text-sm font-medium mb-3 block">Input Type</label>
<div className="flex gap-2">
<button className="flex-1 px-4 py-2.5 bg-violet-500/10 border border-violet-500/30 text-violet-400 rounded-lg text-sm font-medium transition-colors" id="topicBtn" onclick="setInputType('topic')">Topic / Idea</button>
<button className="flex-1 px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors" id="urlBtn" onclick="setInputType('url')">YouTube URL</button>
</div>
</div>
<div className="mb-6" id="topicInput">
<label className="text-sm font-medium mb-3 block">Topic or Idea</label>
<textarea className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors resize-none" placeholder="E.g., 5 AI tools that will change your workflow in 2024..."></textarea>
</div>
<div className="mb-6 hidden" id="urlInput">
<label className="text-sm font-medium mb-3 block">YouTube URL</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors" placeholder="https://youtube.com/watch?v=..." type="text"/>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<label className="text-sm font-medium mb-3 block">Script Length</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>Short (30-60s)</option>
<option>Medium (1-3 min)</option>
<option>Long (3-10 min)</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-sm font-medium mb-3 block">Tone</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>Energetic</option>
<option>Professional</option>
<option>Casual</option>
<option>Educational</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="mb-6">
<label className="text-sm font-medium mb-3 block">Platform</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 rounded-lg text-sm font-medium">TikTok</button>
<button className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">YouTube Shorts</button>
<button className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">Instagram Reels</button>
<button className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">YouTube Long</button>
</div>
</div>
<button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2" onclick="generateScript()">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Generate Script
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium">Generated Script</h3>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors" title="Copy">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:copy" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors" title="Download">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:download" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="bg-zinc-800/50 rounded-lg p-4 h-96 overflow-y-auto" id="scriptOutput">
<p className="text-zinc-500 text-sm">Your generated script will appear here...</p>
</div>
<div className="flex items-center gap-3 mt-4">
<button className="flex-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2" onclick="showSection('voiceover')">
<span className="iconify" data-height="16" data-icon="lucide:mic" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Create Voiceover
                        </button>
<button className="flex-1 bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:save" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Save to Project
                        </button>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="voiceover">
<div className="mb-8">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">AI Voiceover</h1>
<p className="text-zinc-400">Convert text to natural-sounding speech with multiple voice profiles</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<label className="text-sm font-medium">Script Text</label>
<span className="text-xs text-zinc-500">0 / 5000 characters</span>
</div>
<textarea className="w-full h-64 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors resize-none mb-6" placeholder="Paste or type your script here..."></textarea>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div>
<label className="text-xs text-zinc-500 mb-2 block">Speed</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>0.75x</option>
<option selected="">1.0x</option>
<option>1.25x</option>
<option>1.5x</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Pitch</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>Low</option>
<option selected="">Normal</option>
<option>High</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Emphasis</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>None</option>
<option selected="">Moderate</option>
<option>Strong</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Format</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>MP3</option>
<option>WAV</option>
<option>M4A</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:volume-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Generate Voiceover
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Voice Profiles</h3>
<div className="space-y-3 max-h-96 overflow-y-auto pr-2">
<div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-3 cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Alex</p>
<p className="text-xs text-zinc-500">Male • American</p>
</div>
<button className="p-1.5 hover:bg-violet-500/20 rounded-lg transition-colors">
<span className="iconify text-violet-400" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Sarah</p>
<p className="text-xs text-zinc-500">Female • British</p>
</div>
<button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Marcus</p>
<p className="text-xs text-zinc-500">Male • Deep</p>
</div>
<button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Emma</p>
<p className="text-xs text-zinc-500">Female • Australian</p>
</div>
<button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-height="18" data-icon="lucide:user" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">James</p>
<p className="text-xs text-zinc-500">Male • Narrator</p>
</div>
<button className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="14" data-icon="lucide:play" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="remover">
<div className="mb-8">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">Watermark &amp; Caption Remover</h1>
<p className="text-zinc-400">AI-powered tool to detect and remove logos, watermarks, and hardcoded captions</p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Upload Video</h3>
<div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-violet-500/50 hover:bg-violet-500/5 transition-all cursor-pointer" id="uploadZone" onclick="document.getElementById('videoUpload').click()">
<input accept="video/*" className="hidden" id="videoUpload" type="file"/>
<div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-zinc-500" data-height="32" data-icon="lucide:upload-cloud" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-medium mb-1">Drop your video here</p>
<p className="text-xs text-zinc-500 mb-4">or click to browse</p>
<p className="text-xs text-zinc-600">Supports MP4, MOV, AVI up to 500MB</p>
</div>
<div className="mt-6">
<h4 className="text-sm font-medium mb-3">Removal Options</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors">
<div className="w-5 h-5 bg-violet-500 rounded flex items-center justify-center">
<span className="iconify text-white" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '2'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Watermarks &amp; Logos</p>
<p className="text-xs text-zinc-500">Remove visible watermarks and brand logos</p>
</div>
</label>
<label className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors">
<div className="w-5 h-5 bg-violet-500 rounded flex items-center justify-center">
<span className="iconify text-white" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '2'}}></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Hardcoded Captions</p>
<p className="text-xs text-zinc-500">Remove burned-in subtitles and text</p>
</div>
</label>
<label className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors">
<div className="w-5 h-5 bg-zinc-700 rounded"></div>
<div className="flex-1">
<p className="text-sm font-medium">TikTok Username</p>
<p className="text-xs text-zinc-500">Remove @username overlays</p>
</div>
</label>
</div>
</div>
<button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:wand-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Start Processing
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium">Preview</h3>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-1 bg-zinc-800 rounded">Before</span>
<span className="px-2 py-1 bg-violet-500/20 text-violet-400 rounded">After</span>
</div>
</div>
<div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
<div className="text-center">
<span className="iconify text-zinc-600 mb-2" data-height="48" data-icon="lucide:video-off" data-width="48" style={{strokeWidth: '1.5'}}></span>
<p className="text-sm text-zinc-500">Upload a video to preview</p>
</div>
</div>
<div className="bg-zinc-800/50 rounded-lg p-4">
<h4 className="text-xs font-medium text-zinc-400 mb-3">AI Detection Results</h4>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Watermarks detected</span>
<span className="text-zinc-300">-</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Captions detected</span>
<span className="text-zinc-300">-</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Processing time</span>
<span className="text-zinc-300">-</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="generator">
<div className="mb-8">
<div className="flex items-center gap-3 mb-2">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">AI Video Generator</h1>
<span className="px-2 py-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded text-xs font-medium">Sora 2</span>
</div>
<p className="text-zinc-400">Generate high-quality video clips from text prompts</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<label className="text-sm font-medium mb-3 block">Video Prompt</label>
<textarea className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors resize-none" placeholder="Describe the video you want to create in detail. E.g., A serene mountain landscape at sunset, with golden light casting long shadows across snow-capped peaks, cinematic drone shot moving slowly forward..."></textarea>
<div className="flex flex-wrap gap-2 mt-3">
<span className="text-xs text-zinc-500">Try:</span>
<button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs text-zinc-400 transition-colors">"Neon city at night"</button>
<button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs text-zinc-400 transition-colors">"Ocean waves on beach"</button>
<button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs text-zinc-400 transition-colors">"Abstract flowing particles"</button>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Generation Settings</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<label className="text-xs text-zinc-500 mb-2 block">Resolution</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>720p</option>
<option selected="">1080p</option>
<option>4K</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Duration</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>5 seconds</option>
<option selected="">10 seconds</option>
<option>20 seconds</option>
<option>60 seconds</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Aspect Ratio</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>16:9</option>
<option>9:16</option>
<option>1:1</option>
<option>4:5</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-2 block">Style</label>
<div className="relative">
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer">
<option>Cinematic</option>
<option>Realistic</option>
<option>Anime</option>
<option>Abstract</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Generate Video (50 credits)
                        </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Generated Videos</h3>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
<p className="text-xs text-zinc-500">No videos generated yet</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit">
<h3 className="text-sm font-medium mb-4">Style Presets</h3>
<div className="space-y-3">
<button className="w-full text-left p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
<div>
<p className="text-sm font-medium">Cinematic</p>
<p className="text-xs text-zinc-500">Film-like quality</p>
</div>
</div>
</button>
<button className="w-full text-left p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg"></div>
<div>
<p className="text-sm font-medium">Vibrant</p>
<p className="text-xs text-zinc-500">Bold colors</p>
</div>
</div>
</button>
<button className="w-full text-left p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
<div>
<p className="text-sm font-medium">Noir</p>
<p className="text-xs text-zinc-500">Dark &amp; moody</p>
</div>
</div>
</button>
<button className="w-full text-left p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
<div>
<p className="text-sm font-medium">Futuristic</p>
<p className="text-xs text-zinc-500">Sci-fi aesthetic</p>
</div>
</div>
</button>
<button className="w-full text-left p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg"></div>
<div>
<p className="text-sm font-medium">Nature</p>
<p className="text-xs text-zinc-500">Organic feel</p>
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="clipeditor">
<div className="mb-8">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">Viral Clip Editor</h1>
<p className="text-zinc-400">Transform long-form videos into viral short-form clips with auto-captions</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<label className="text-sm font-medium mb-3 block">Video Source</label>
<div className="flex gap-3">
<input className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors" placeholder="Paste YouTube, TikTok, or Instagram URL..." type="text"/>
<button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm font-medium transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:link" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-xs text-zinc-500 mt-2">Or upload directly:</p>
<div className="mt-3 border-2 border-dashed border-zinc-700 rounded-lg p-4 text-center hover:border-violet-500/50 cursor-pointer transition-colors">
<span className="iconify text-zinc-500 mx-auto" data-height="24" data-icon="lucide:upload" data-width="24" style={{strokeWidth: '1.5'}}></span>
<p className="text-xs text-zinc-500 mt-2">Click to upload video file</p>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium">Video Preview</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-medium transition-colors">16:9</button>
<button className="px-3 py-1.5 bg-fuchsia-500/20 text-fuchsia-400 rounded-lg text-xs font-medium">9:16</button>
<button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-medium transition-colors">1:1</button>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1 aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
<p className="text-sm text-zinc-500">Original video</p>
</div>
<div className="w-32 md:w-40 bg-zinc-800 rounded-lg flex items-center justify-center" style={{aspectRatio: '9/16'}}>
<p className="text-xs text-zinc-500 text-center px-2">Vertical preview</p>
</div>
</div>

<div className="mt-4">
<div className="flex items-center gap-2 mb-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:skip-back" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors">
<span className="iconify text-white" data-height="16" data-icon="lucide:play" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:skip-forward" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<span className="text-xs text-zinc-500 ml-2">00:00 / 00:00</span>
</div>
<div className="h-12 bg-zinc-800 rounded-lg relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/3 bg-violet-500/30 border-l-2 border-r-2 border-violet-500"></div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium">AI-Detected Viral Moments</h3>
<button className="px-3 py-1.5 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 rounded-lg text-xs font-medium hover:bg-fuchsia-500/20 transition-colors flex items-center gap-1">
<span className="iconify" data-height="12" data-icon="lucide:sparkles" data-width="12" style={{strokeWidth: '1.5'}}></span>
                                Detect Clips
                            </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center">
<p className="text-xs text-zinc-500">Clip 1</p>
</div>
<div className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center">
<p className="text-xs text-zinc-500">Clip 2</p>
</div>
<div className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center">
<p className="text-xs text-zinc-500">Clip 3</p>
</div>
<div className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
<span className="iconify text-zinc-600" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Caption Style</h3>
<div className="space-y-3">
<button className="w-full p-3 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-lg text-left">
<p className="text-sm font-bold text-center" style={{textShadow: '2px 2px 0 #000'}}>BOLD IMPACT</p>
</button>
<button className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-colors">
<p className="text-sm font-medium text-center text-yellow-400">Highlight Style</p>
</button>
<button className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-colors">
<p className="text-sm text-center bg-black/80 px-2 py-0.5 rounded inline-block">Subtitle Box</p>
</button>
<button className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-colors">
<p className="text-sm text-center italic">Minimal Clean</p>
</button>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h3 className="text-sm font-medium mb-4">Trending Presets</h3>
<div className="space-y-2">
<button className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-left hover:border-zinc-600 transition-colors flex items-center gap-2">
<span className="iconify text-pink-400" data-height="14" data-icon="lucide:flame" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                TikTok Viral
                            </button>
<button className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-left hover:border-zinc-600 transition-colors flex items-center gap-2">
<span className="iconify text-red-400" data-height="14" data-icon="lucide:youtube" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                YouTube Shorts
                            </button>
<button className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-left hover:border-zinc-600 transition-colors flex items-center gap-2">
<span className="iconify text-purple-400" data-height="14" data-icon="lucide:instagram" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                Instagram Reels
                            </button>
</div>
</div>
<button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-height="18" data-icon="lucide:download" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Export Clips
                    </button>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="projects">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">Project Gallery</h1>
<p className="text-zinc-400">Manage and organize your saved videos</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="bg-transparent text-sm text-white placeholder-zinc-500 outline-none w-40" placeholder="Search projects..." type="text"/>
</div>
<button className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
<span className="iconify text-zinc-400" data-height="18" data-icon="lucide:filter" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        New Project
                    </button>
</div>
</div>

<div className="mb-8">
<h2 className="text-sm font-medium text-zinc-400 mb-4">Folders</h2>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<span className="iconify text-amber-400" data-height="16" data-icon="lucide:folder" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">All Projects</span>
<span className="text-xs text-zinc-500 ml-1">47</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<span className="iconify text-pink-400" data-height="16" data-icon="lucide:folder" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">TikTok</span>
<span className="text-xs text-zinc-500 ml-1">18</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<span className="iconify text-red-400" data-height="16" data-icon="lucide:folder" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">YouTube</span>
<span className="text-xs text-zinc-500 ml-1">12</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
<span className="iconify text-purple-400" data-height="16" data-icon="lucide:folder" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Instagram</span>
<span className="text-xs text-zinc-500 ml-1">17</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 border border-dashed border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-zinc-500">New Folder</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
<button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">2:34</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 bg-black/50 backdrop-blur rounded-lg hover:bg-black/70 transition-colors">
<span className="iconify text-white" data-height="14" data-icon="lucide:more-vertical" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">AI Tools Explained</h3>
<p className="text-xs text-zinc-500">Created 2 hours ago</p>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 bg-pink-500/10 text-pink-400 rounded text-xs">TikTok</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-xs">Published</span>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
<button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">0:58</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">Product Launch Teaser</h3>
<p className="text-xs text-zinc-500">Created yesterday</p>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded text-xs">Instagram</span>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-xs">Draft</span>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
<button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">1:15</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">Viral Clip #12</h3>
<p className="text-xs text-zinc-500">Created 3 days ago</p>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 bg-red-500/10 text-red-400 rounded text-xs">YouTube</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-xs">Published</span>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
<div className="aspect-video bg-zinc-800 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
<button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">3:22</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium mb-1">Tutorial Series Ep.1</h3>
<p className="text-xs text-zinc-500">Created 5 days ago</p>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 bg-red-500/10 text-red-400 rounded text-xs">YouTube</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-xs">Published</span>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden p-4 lg:p-8" id="pricing">
<div className="text-center mb-12">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">Choose Your Plan</h1>
<p className="text-zinc-400">Scale your content creation with the right plan for you</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Basic</h3>
<p className="text-sm text-zinc-500">For individual creators</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$19</span>
<span className="text-zinc-500">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">500 AI credits/month</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">10 video exports</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">720p export quality</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">AI Scriptwriter</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">3 AI voice profiles</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-zinc-600" data-height="16" data-icon="lucide:x" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-500">Watermark remover</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-zinc-600" data-height="16" data-icon="lucide:x" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-500">AI Video Generator</span>
</li>
</ul>
<button className="w-full border border-zinc-700 hover:bg-zinc-800 rounded-lg py-3 text-sm font-medium transition-colors">Get Started</button>
</div>

<div className="bg-zinc-900 border-2 border-violet-500/50 rounded-2xl p-6 lg:p-8 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-medium px-4 py-1 rounded-full">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Professional</h3>
<p className="text-sm text-zinc-500">For serious creators</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$49</span>
<span className="text-zinc-500">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">2,500 AI credits/month</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">50 video exports</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">1080p export quality</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">All AI tools included</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">15 AI voice profiles</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">Watermark remover</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">10 AI video generations</span>
</li>
</ul>
<button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-lg py-3 text-sm font-medium transition-colors">Get Started</button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Creator</h3>
<p className="text-sm text-zinc-500">For teams &amp; agencies</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$149</span>
<span className="text-zinc-500">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">Unlimited AI credits</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">Unlimited exports</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">4K export quality</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">All AI tools included</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">All voice profiles + custom</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">Priority processing</span>
</li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-zinc-300">API access &amp; team seats</span>
</li>
</ul>
<button className="w-full border border-zinc-700 hover:bg-zinc-800 rounded-lg py-3 text-sm font-medium transition-colors">Contact Sales</button>
</div>
</div>

<div className="max-w-2xl mx-auto mt-16">
<h2 className="text-xl font-semibold tracking-tight text-center mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
<button className="w-full flex items-center justify-between text-left">
<span className="text-sm font-medium">What are AI credits?</span>
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
<button className="w-full flex items-center justify-between text-left">
<span className="text-sm font-medium">Can I cancel my subscription anytime?</span>
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
<button className="w-full flex items-center justify-between text-left">
<span className="text-sm font-medium">How fast is the video processing?</span>
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
