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
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  }



  lucide.createIcons();

  const aiPanel = document.getElementById('aiPanel');
  const closePanelBtn = document.getElementById('closePanelBtn');

  closePanelBtn.addEventListener('click', () => {
    aiPanel.classList.toggle('translate-x-full');
  });

  // Responsive panel behavior
  function initPanel() {
    if (window.innerWidth < 640) {
      aiPanel.classList.add('translate-x-full');
    }
  }
  
  window.addEventListener('resize', initPanel);
  initPanel();

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
      

<div className="relative w-full max-w-6xl h-screen max-h-[900px] bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">

<nav className="absolute top-0 left-0 right-0 flex items-center gap-4 px-6 py-4 backdrop-blur-md bg-gray-900/60 border-b border-white/10">
<div className="flex items-center gap-2 text-lg font-medium tracking-tight">
<svg className="lucide lucide-clapperboard w-5 h-5 text-blue-400" data-lucide="clapperboard" fill="none" height="24" id="logo" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
<span className="">MotionFlow</span>
</div>
<div className="hidden lg:flex items-center gap-2 ml-6">
<button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors">Timeline</button>
<button className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">Projects</button>
<button className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">Library</button>
<button className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">Templates</button>
<button className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">Export</button>
<button className="px-4 py-2 rounded-lg border border-white/20 text-sm hidden xl:inline hover:bg-white/10 transition-colors">Settings</button>
</div>
</nav>

<div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-6 flex flex-col items-center gap-3">
<button className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 transition-all hover:scale-105">
<svg className="lucide lucide-move w-5 h-5" data-lucide="move" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>
</button>
<button className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 transition-all hover:scale-105">
<svg className="lucide lucide-crop w-5 h-5" data-lucide="crop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v14a2 2 0 0 0 2 2h14"></path><path d="M18 22V8a2 2 0 0 0-2-2H2"></path></svg>
</button>
<button className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 transition-all hover:scale-105">
<svg className="lucide lucide-scissors w-5 h-5" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</button>
<button className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 transition-all hover:scale-105">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</button>
<div className="w-8 h-px bg-white/20 my-2"></div>
<button className="w-12 h-12 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20 transition-all hover:scale-105">
<svg className="lucide lucide-trash-2 w-5 h-5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>

<div className="flex h-full pt-20 pb-32">

<section className="flex-1 flex lg:px-20 pr-16 pl-16 items-center justify-center">
<div className="relative w-full max-w-lg bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10">
<img alt="current frame" className="w-full h-[480px] object-cover rounded-3xl" src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?w=1080&q=80" />

<div className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium bg-gray-900/40 backdrop-blur-sm px-3 py-2 rounded-lg">
<svg className="lucide lucide-play-circle w-4 h-4 text-green-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          Frame 1
        </div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
<button className="w-10 h-10 bg-gray-900/40 hover:bg-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
<svg className="lucide lucide-skip-back w-4 h-4" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
</button>
<button className="w-12 h-12 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center transition-colors">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
<button className="w-10 h-10 bg-gray-900/40 hover:bg-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
<svg className="lucide lucide-skip-forward w-4 h-4" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
</button>
</div>

<div className="absolute bottom-6 left-6 text-sm bg-gray-900/40 backdrop-blur-sm px-3 py-1 rounded-md">
          00:03
        </div>
<div className="absolute bottom-6 right-6 text-sm bg-gray-900/40 backdrop-blur-sm px-3 py-1 rounded-md">
          01:24
        </div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 h-40 flex flex-col justify-between">
<div className="w-1 flex-1 bg-white/20 rounded-full">
<div className="w-1 h-16 bg-blue-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<aside className="hidden xl:flex flex-col justify-center pr-8 w-72 text-sm leading-relaxed blur-md">
<h3 className="mb-4 text-lg font-medium flex items-center gap-2 tracking-tight">
<svg className="lucide lucide-file-text w-4 h-4 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
        Scene Notes
      </h3>
<div className="space-y-4 text-white/70">
<p>
          Dynamic camera movement captures the subject in motion with cinematic depth of field. Lighting emphasizes dramatic shadows and highlights.
        </p>
<div className="flex items-center gap-2 text-xs text-white/50">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Duration: 1m 24s</span>
</div>
</div>
</aside>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-900/90 backdrop-blur-md flex items-center gap-3 px-6 overflow-x-auto border-t border-white/10">

<div className="flex items-end gap-3 min-w-max">
<div className="relative w-28 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/10 ring-2 ring-blue-400">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?w=1080&q=80" />
<span className="absolute top-2 left-2 text-xs bg-gray-900/60 px-2 py-1 rounded">01</span>
</div>
<div className="relative w-28 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635771629306-788f8c965a21?w=1080&q=80" />
<span className="absolute top-2 left-2 text-xs bg-gray-900/60 px-2 py-1 rounded">02</span>
</div>
<div className="relative w-28 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 border-dashed">
<div className="text-center">
<svg className="lucide lucide-type w-4 h-4 mx-auto mb-1 text-white/40" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<span className="text-xs text-white/60">Text</span>
</div>
</div>
<div className="relative w-28 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1080&q=80" />
<span className="absolute top-2 left-2 text-xs bg-gray-900/60 px-2 py-1 rounded">03</span>
</div>
<div className="relative w-28 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635693206507-1d749cb30ecb?w=1080&q=80" />
<span className="absolute top-2 left-2 text-xs bg-gray-900/60 px-2 py-1 rounded">04</span>
</div>
<button className="w-12 h-12 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shrink-0 transition-colors">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="absolute top-0 right-0 h-full w-full sm:w-[480px] bg-white/5 backdrop-blur-2xl border-l border-white/20 shadow-2xl rounded-l-3xl flex flex-col overflow-hidden transform transition-transform duration-300" id="aiPanel">

<div className="flex items-center justify-between px-6 py-5 border-b border-white/20 bg-white/5">
<h2 className="text-xl font-medium tracking-tight flex items-center gap-2">
<svg className="lucide lucide-sparkles w-5 h-5 text-purple-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
        Creative AI
      </h2>
<button className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10" id="closePanelBtn">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pt-6 pr-6 pb-6 pl-6 space-y-6">

<div className="flex items-center justify-between px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-green-300">AI Assistant Ready</span>
</div>
<div className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-md">GPT-4</div>
</div>

<div className="bg-white/5 rounded-xl p-5 border border-white/10">
<h4 className="font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-wand-2 w-4 h-4 text-blue-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
          Creative Brief
        </h4>
<div className="h-px bg-white/10 mb-4"></div>
<p className="text-sm text-white/80 leading-relaxed mb-4">
          Create a cinematic sequence featuring urban architecture with dynamic lighting transitions. Focus on geometric patterns and atmospheric depth to convey modern elegance.
        </p>
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="">Generated by Sarah Chen</span>
<div className="w-1 h-1 bg-white/40 rounded-full"></div>
<span>2 minutes ago</span>
</div>
</div>

<div className="bg-white/5 rounded-xl p-5 border border-white/10">
<h4 className="font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-settings w-4 h-4 text-purple-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Style Configuration
        </h4>
<div className="h-px bg-white/10 mb-4"></div>
<div className="space-y-4">

<div className="flex items-center justify-between">
<span className="text-sm text-white/80">Quality</span>
<div className="flex items-center gap-2">
<span className="text-xs text-white/60">Ultra</span>
<div className="w-16 h-2 bg-white/20 rounded-full">
<div className="w-14 h-2 bg-blue-400 rounded-full"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-white/80">Style Intensity</span>
<div className="flex items-center gap-2">
<span className="text-xs text-white/60">85%</span>
<div className="w-16 h-2 bg-white/20 rounded-full">
<div className="w-12 h-2 bg-purple-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-xl p-5 border border-white/10">
<h4 className="font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-tags w-4 h-4 text-orange-400" data-lucide="tags" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="6.5" cy="9.5" fill="currentColor" r=".5"></circle></svg>
          Applied Styles
        </h4>
<div className="h-px bg-white/10 mb-4"></div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-2 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-medium flex items-center gap-2 border border-blue-500/20">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Dynamic
          </span>
<span className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-medium flex items-center gap-2 border border-purple-500/20">
<svg className="lucide lucide-monitor w-3 h-3" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> 4K
          </span>
<span className="px-3 py-2 rounded-lg bg-green-500/20 text-green-300 text-xs font-medium flex items-center gap-2 border border-green-500/20">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 90s
          </span>
<span className="px-3 py-2 rounded-lg bg-orange-500/20 text-orange-300 text-xs font-medium flex items-center gap-2 border border-orange-500/20">
<svg className="lucide lucide-camera w-3 h-3" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg> Cinematic
          </span>
</div>
</div>

<div className="bg-white/5 rounded-xl p-5 border border-white/10">
<div className="flex items-center justify-between mb-3">
<h4 className="font-medium flex items-center gap-2">
<svg className="lucide lucide-cpu w-4 h-4 text-yellow-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
            Processing
          </h4>
<span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-md">73%</span>
</div>
<div className="h-px bg-white/10 mb-4"></div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-white/80">Frame Analysis</span>
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/80">Style Transfer</span>
<div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Color Grading</span>
<svg className="lucide lucide-clock w-4 h-4 text-white/40" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
</div>
<div className="w-full h-2 bg-white/20 rounded-full mt-4">
<div className="w-3/4 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"></div>
</div>
</div>

<div className="flex items-center gap-3 pt-2">
<button className="flex-1 h-11 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center gap-2 transition-colors font-medium">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          Generate
        </button>
<button className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/10 transition-colors">
<svg className="lucide lucide-refresh-cw w-4 h-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
<button className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/10 transition-colors">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
<div className="h-px bg-white/10"></div>

<div className="bg-white/5 rounded-xl p-5 border border-white/10">
<div className="flex items-center justify-between mb-3">
<h4 className="font-medium flex items-center gap-2">
<svg className="lucide lucide-image w-4 h-4 text-yellow-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
            Reference Collection
          </h4>
<button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors border border-white/10">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="h-px bg-white/10 mb-4"></div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="relative group">
<img className="w-full h-24 object-cover rounded-xl shadow-lg border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=200&q=60" />
<div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
<svg className="lucide lucide-eye w-4 h-4 text-white" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="relative group">
<img className="w-full h-24 object-cover rounded-xl shadow-lg border border-white/10" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=200&q=60" />
<div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
<svg className="lucide lucide-eye w-4 h-4 text-white" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/20 rounded-md text-xs font-medium border border-white/10">Architecture</span>
<span className="px-2 py-1 bg-white/20 rounded-md text-xs font-medium border border-white/10">Minimal</span>
</div>
<span className="text-xs text-white/60">4 images</span>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
