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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Auto-resize textarea
        const chatInput = document.getElementById('chat-input');
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if(this.value === '') {
                this.style.height = 'auto';
            }
        });

        // Mobile Sidebar Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-sidebar');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');

        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                // Small delay to allow display:block to apply before changing opacity
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        mobileBtn.addEventListener('click', toggleSidebar);
        closeBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
    
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
      

<div className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 hidden md:hidden transition-opacity opacity-0" id="mobile-overlay"></div>

<aside className="w-64 border-r border-zinc-200 bg-zinc-50/95 md:bg-zinc-50/50 backdrop-blur-xl md:backdrop-blur-none fixed md:relative inset-y-0 left-0 z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col shrink-0 h-full" id="sidebar">

<div className="h-14 flex items-center justify-between px-4 border-b border-transparent shrink-0">
<span className="text-xl font-medium tracking-tighter text-zinc-900">C H A T</span>
<button className="md:hidden p-1.5 -mr-1.5 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-200/50 transition-colors" id="close-sidebar">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="px-3 py-3 shrink-0">
<button className="w-full flex items-center justify-between gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-2 rounded-lg transition-colors group shadow-sm">
<span className="text-sm font-medium">New chat</span>
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
<div>
<div className="px-2 py-1">
<span className="text-xs font-medium text-zinc-400">Today</span>
</div>
<div className="space-y-0.5 mt-1">
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md bg-zinc-200/60 text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-base text-zinc-500 shrink-0" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium truncate">Responsive Grid Layouts</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-200/40 text-zinc-600 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-500 shrink-0" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm truncate">API Integration Logic</span>
</a>
</div>
</div>
<div>
<div className="px-2 py-1">
<span className="text-xs font-medium text-zinc-400">Previous 7 Days</span>
</div>
<div className="space-y-0.5 mt-1">
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-200/40 text-zinc-600 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-500 shrink-0" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm truncate">Color Palette Generation</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-200/40 text-zinc-600 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-500 shrink-0" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm truncate">Authentication Flow Docs</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-200/40 text-zinc-600 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-500 shrink-0" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm truncate">User Onboarding Emails</span>
</a>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-200 shrink-0">
<button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-200/50 transition-colors text-left group">
<div className="w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 border border-zinc-300/50">
<iconify-icon className="text-zinc-600" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 truncate">
<div className="text-sm font-medium text-zinc-900">Personal Account</div>
<div className="text-xs text-zinc-500">Free Tier</div>
</div>
<iconify-icon className="text-zinc-400 text-lg group-hover:text-zinc-600 transition-colors" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-14 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 shrink-0 z-10 absolute top-0 w-full left-0">
<div className="flex items-center gap-3">
<button className="md:hidden p-1.5 -ml-1.5 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="relative group cursor-pointer">
<div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-zinc-100/80 transition-colors">
<span className="text-sm font-medium text-zinc-800">Model v4.0</span>
<iconify-icon className="text-zinc-400 text-sm" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute left-0 top-full mt-1 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="p-1">
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-50 text-sm cursor-pointer">
<span className="font-medium text-zinc-900">Model v4.0</span>
<iconify-icon className="text-zinc-900" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-50 text-sm text-zinc-600 transition-colors mt-0.5 cursor-pointer">
<span className="font-medium">Model v3.5</span>
<span className="text-xs text-zinc-500 border border-zinc-200 rounded bg-white px-1.5 py-0.5">Fast</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Share" className="p-2 text-zinc-400 hover:text-zinc-800 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:upload-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="More" className="p-2 text-zinc-400 hover:text-zinc-800 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-14 pb-32 md:pb-36">
<div className="py-6 md:py-10 space-y-8 md:space-y-10">

<div className="w-full max-w-3xl mx-auto flex gap-4 px-4 md:px-6">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600 text-sm" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 pt-1.5">
<p className="text-sm md:text-base text-zinc-800 leading-relaxed">Could you show me a modern approach to creating a responsive card grid? I want it to look sleek and minimalist.</p>
</div>
</div>

<div className="w-full max-w-3xl mx-auto flex gap-4 px-4 md:px-6">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 pt-1.5 space-y-5">
<p className="text-sm md:text-base text-zinc-800 leading-relaxed">Certainly. The most modern approach leverages CSS Grid combined with utility classes. This configuration provides a clean, responsive layout without relying on complex media queries.</p>
<p className="text-sm md:text-base text-zinc-800 leading-relaxed">Here is a minimalist example:</p>

<div className="rounded-xl border border-zinc-200/80 bg-zinc-50 overflow-hidden my-4 shadow-sm">
<div className="flex items-center justify-between px-4 py-2 bg-zinc-100/50 border-b border-zinc-200/80 text-zinc-500">
<span className="text-xs font-medium">HTML</span>
<button className="hover:text-zinc-800 flex items-center gap-1.5 transition-colors text-xs font-medium">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon> Copy
                                </button>
</div>
<div className="p-4 overflow-x-auto text-sm text-zinc-600 whitespace-pre font-mono leading-relaxed">
<span className="text-zinc-400">&lt;</span><span className="text-rose-600">div</span> <span className="text-purple-600">class</span><span className="text-zinc-400">="</span><span className="text-amber-600">grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6</span><span className="text-zinc-400">"&gt;</span>
<span className="text-zinc-400">&lt;!--</span> Card Component <span className="text-zinc-400">--&gt;</span>
<span className="text-zinc-400">&lt;</span><span className="text-rose-600">div</span> <span className="text-purple-600">class</span><span className="text-zinc-400">="</span><span className="text-amber-600">p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all</span><span className="text-zinc-400">"&gt;</span>
<span className="text-zinc-400">&lt;</span><span className="text-rose-600">h3</span> <span className="text-purple-600">class</span><span className="text-zinc-400">="</span><span className="text-amber-600">text-base font-medium text-zinc-900</span><span className="text-zinc-400">"&gt;</span>Project Title<span className="text-zinc-400">&lt;/</span><span className="text-rose-600">h3</span><span className="text-zinc-400">&gt;</span>
<span className="text-zinc-400">&lt;</span><span className="text-rose-600">p</span> <span className="text-purple-600">class</span><span className="text-zinc-400">="</span><span className="text-amber-600">mt-2 text-sm text-zinc-500 leading-relaxed</span><span className="text-zinc-400">"&gt;</span>A brief description goes here.<span className="text-zinc-400">&lt;/</span><span className="text-rose-600">p</span><span className="text-zinc-400">&gt;</span>
<span className="text-zinc-400">&lt;/</span><span className="text-rose-600">div</span><span className="text-zinc-400">&gt;</span>
<span className="text-zinc-400">&lt;/</span><span className="text-rose-600">div</span><span className="text-zinc-400">&gt;</span></div>
</div>
<p className="text-sm md:text-base text-zinc-800 leading-relaxed">This setup will automatically adjust from a single column on mobile, to two columns on tablets, and three columns on desktop displays while maintaining consistent spacing.</p>

<div className="flex items-center gap-2 pt-2">
<button aria-label="Copy response" className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Good response" className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:like-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Bad response" className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:dislike-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full left-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4 md:pb-6 px-4 md:px-6">
<div className="max-w-3xl mx-auto">
<div className="relative flex items-end rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-zinc-400 focus-within:border-zinc-400 transition-all">

<button className="p-3.5 text-zinc-400 hover:text-zinc-700 transition-colors shrink-0 outline-none">
<iconify-icon className="text-xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</button>

<textarea className="w-full max-h-32 py-3.5 px-1 text-sm md:text-base text-zinc-900 placeholder-zinc-400 bg-transparent border-0 focus:ring-0 resize-none outline-none" id="chat-input" placeholder="Send a message..." rows="1"></textarea>

<div className="flex items-center pr-2 pb-2 shrink-0">
<button className="p-2 text-zinc-400 hover:text-zinc-700 transition-colors outline-none hidden sm:block">
<iconify-icon className="text-xl" icon="solar:microphone-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-2 ml-1 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-colors outline-none flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="text-center mt-3">
<span className="text-xs text-zinc-400">AI models can make mistakes. Consider verifying important information.</span>
</div>
</div>
</div>
</main>


    </>
  );
}
