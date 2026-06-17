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



// Initialize Lucide icons
lucide.createIcons();

// Simple interactions
document.addEventListener('DOMContentLoaded', function() {
  // Auto-resize textarea
  const textarea = document.querySelector('textarea');
  if (textarea) {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 150) + 'px';
    });
  }
  
  // Example prompt button clicks
  const exampleButtons = document.querySelectorAll('button[class*="border-gray-200 hover:border-gray-300"]');
  exampleButtons.forEach(button => {
    if (button.textContent.includes('"')) {
      button.addEventListener('click', function() {
        if (textarea) {
          textarea.value = this.textContent.trim();
          textarea.focus();
        }
      });
    }
  });
});

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
      

<div className="max-w-[120rem] mx-auto desktop-frame overflow-hidden fade-in">

<div className="flex bg-white border-gray-200 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"></div>
</div>

<div className="flex items-center gap-3 ml-4">
<div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="">
<h1 className="text-gray-900 font-medium text-base tracking-tight">Neon Voice AI Studio</h1>
<p className="text-gray-500 text-sm">Advanced Design Assistant</p>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-green-700 text-sm font-medium">AI Online</span>
</div>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group">
<svg className="lucide lucide-minus w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group">
<svg className="lucide lucide-maximize-2 w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-red-50 transition-all duration-200 group">
<svg className="lucide lucide-x w-4 h-4 text-gray-500 group-hover:text-red-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="flex h-[calc(100vh-6rem)]">

<div className="w-80 slide-left overflow-y-auto scrollbar-hide bg-gray-50 border-gray-200 border-r" style={{animationDelay: '0.1s'}}>

<div className="flex border-gray-200 border-b">
<button className="flex-1 px-4 py-3 text-sm font-medium text-gray-900 bg-white border-b-2 border-gray-900 transition-all">
<svg className="lucide lucide-grid-3x3 w-4 h-4 inline mr-2" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="2" y="2"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><rect height="6" rx="1" width="6" x="16" y="2"></rect><rect height="6" rx="1" width="6" x="2" y="9"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><rect height="6" rx="1" width="6" x="16" y="9"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="16"></rect><rect height="6" rx="1" width="6" x="16" y="16"></rect></svg>
          Templates
        </button>
<button className="flex-1 px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
<svg className="lucide lucide-clock w-4 h-4 inline mr-2" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
          History
        </button>
</div>

<div className="pt-6 pr-4 pb-4 pl-4">
<h3 className="text-gray-900 font-medium text-sm tracking-tight mb-4">Art Styles</h3>
<div className="space-y-1">
<button className="w-full text-left p-3 rounded-lg bg-gray-900 text-white text-sm font-medium transition-all duration-200">
<div className="flex items-center justify-between">
<div className="">
<div className="">Cyberpunk / Futuristic</div>
<div className="text-sm text-gray-300 opacity-80">Neon, tech, dark</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-200">
<div className="flex items-center justify-between">
<div className="">
<div className="">Anime / Manga</div>
<div className="text-sm text-gray-500">Japanese style, vibrant</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-200">
<div className="flex items-center justify-between">
<div className="">
<div className="">Photorealistic</div>
<div className="text-sm text-gray-500">Ultra detailed, lifelike</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-200">
<div className="flex items-center justify-between">
<div className="">
<div className="">Digital Art</div>
<div className="text-sm text-gray-500">Modern, abstract</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</button>
</div>
</div>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-gray-900 font-medium text-sm tracking-tight">Recent Creations</h3>
<button className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-gray-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200 group">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0 relative overflow-hidden">
<img alt="Cyberpunk Warrior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba266bd-81e8-4c6b-b290-bdcb56dc9f72_320w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-gray-900 text-sm font-medium truncate">Cyberpunk Warrior</p>
<p className="text-gray-500 text-xs">2 minutes ago • 1024x1024</p>
<div className="flex items-center gap-1 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-600">Completed</span>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
<div className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200 group">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0 relative overflow-hidden">
<img alt="Ocean Sunset" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8f205ca-354f-415f-b03f-da07b1fda933_320w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-gray-900 text-sm font-medium truncate">Ocean Sunset Vista</p>
<p className="text-gray-500 text-xs">15 minutes ago • 1920x1080</p>
<div className="flex items-center gap-1 mt-1">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-xs text-orange-600">Processing</span>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col slide-up bg-white" style={{animationDelay: '0.2s'}}>

<div className="flex bg-white border-gray-200 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
<svg className="lucide lucide-brain w-5 h-5 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="">
<h2 className="text-gray-900 font-medium text-lg tracking-tight">ARIA - AI Design Assistant</h2>
<p className="text-gray-500 text-sm">Advanced Responsive Image AI • Ready to create</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-4 px-4 py-2 rounded-lg border border-gray-200">
<div className="text-center">
<div className="text-gray-900 text-sm font-medium">47</div>
<div className="text-gray-500 text-xs">Images</div>
</div>
<div className="w-px h-8 bg-gray-200"></div>
<div className="text-center">
<div className="text-gray-900 text-sm font-medium">2.3s</div>
<div className="text-gray-500 text-xs">Avg Time</div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group">
<svg className="lucide lucide-settings w-5 h-5 text-gray-500 group-hover:text-gray-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6" id="messagesArea">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles w-5 h-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="flex-1">
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-gray-900 font-medium text-lg tracking-tight">Welcome to ARIA Studio</h3>
<div className="px-2 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium">v3.2.1</div>
</div>
<p className="text-gray-700 text-base leading-relaxed mb-4">
                I'm your advanced AI design assistant, capable of creating stunning visuals through natural voice commands or detailed text prompts.
              </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div className="p-4 rounded-lg bg-white border border-gray-200">
<h4 className="text-gray-900 font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-mic w-4 h-4 text-gray-600" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                    Voice Commands
                  </h4>
<p className="text-gray-600 text-sm">Speak naturally to describe what you want to create</p>
</div>
<div className="p-4 rounded-lg bg-white border border-gray-200">
<h4 className="text-gray-900 font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-type w-4 h-4 text-gray-600" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                    Text Prompts
                  </h4>
<p className="text-gray-600 text-sm">Write detailed descriptions for precise control</p>
</div>
</div>
<div className="space-y-3">
<p className="text-gray-700 font-medium text-sm">Try these example prompts:</p>
<div className="space-y-2">
<button className="w-full text-left p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all text-sm text-gray-700 hover:text-gray-900">
                    "Create a futuristic cityscape with neon lights and flying cars"
                  </button>
<button className="w-full text-left p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all text-sm text-gray-700 hover:text-gray-900">
                    "Design an anime character with blue hair and magical powers"
                  </button>
<button className="w-full text-left p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all text-sm text-gray-700 hover:text-gray-900">
                    "Generate an abstract pattern with purple and gold gradients"
                  </button>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="text-gray-500 text-xs">ARIA</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-gray-500 text-xs">Just now</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 justify-end">
<div className="flex-1 max-w-2xl">
<div className="bg-gray-900 rounded-lg p-4 ml-auto text-white">
<p className="text-base">Create a cyberpunk warrior character with glowing purple armor and neon blue weapons in a futuristic city at night</p>
<div className="flex items-center gap-2 mt-2 text-gray-300">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs">You</span>
<span className="w-1 h-1 bg-gray-400 rounded-full"></span>
<span className="text-xs">30 seconds ago</span>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles w-5 h-5 text-white animate-pulse" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="flex-1">
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-gray-900 font-medium tracking-tight">Generating your cyberpunk warrior...</h3>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
<span className="text-blue-700 text-xs font-medium">Processing</span>
</div>
</div>
<div className="space-y-4">
<div className="bg-white rounded-lg p-4 border border-gray-200">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-cpu w-4 h-4 text-blue-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<span className="text-gray-900 font-medium text-sm">AI Model Analysis</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm">
<span className="text-gray-600">Style: Cyberpunk/Futuristic</span>
<span className="text-green-600">✓ Matched</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Colors: Purple, Blue, Neon</span>
<span className="text-green-600">✓ Processed</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Setting: Night City</span>
<span className="text-green-600">✓ Applied</span>
</div>
</div>
</div>
<div className="bg-white rounded-lg p-4 border border-gray-200">
<div className="flex items-center justify-between mb-2">
<span className="text-gray-900 font-medium text-sm">Generation Progress</span>
<span className="text-gray-600 text-sm">65%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full progress-bar"></div>
</div>
<p className="text-gray-500 text-xs mt-2">Estimated time remaining: 15 seconds</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="text-gray-500 text-xs">ARIA</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-gray-500 text-xs">Processing...</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-white">
<div className="flex items-end gap-3">
<div className="flex-1">
<div className="relative">
<textarea className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 placeholder-gray-500" placeholder="Describe what you want to create..." rows="3"></textarea>
<div className="absolute right-3 bottom-3 flex items-center gap-2">
<button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors group">
<svg className="lucide lucide-paperclip w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</button>
<button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors group">
<svg className="lucide lucide-mic w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>
</div>
<button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.112z"></path><path d="M21.854 2.147 10.61 13.39"></path></svg>
            Create
          </button>
</div>
<div className="flex items-center justify-between mt-3 text-xs text-gray-500">
<div className="flex items-center gap-4">
<span>⌘ + Enter to send</span>
<span>/help for commands</span>
</div>
<div className="flex items-center gap-2">
<span>GPU: RTX 4090</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Queue: 0</span>
</div>
</div>
</div>
</div>

<div className="w-96 slide-right overflow-y-auto scrollbar-hide bg-gray-50 border-gray-200 border-l" style={{animationDelay: '0.3s'}}>

<div className="p-4 border-b border-gray-200 bg-white">
<h3 className="text-gray-900 font-medium tracking-tight">Generation Settings</h3>
<p className="text-gray-500 text-sm mt-1">Fine-tune your creative output</p>
</div>

<div className="p-4 space-y-6">

<div className="">
<label className="text-gray-900 font-medium text-sm mb-3 block">Image Dimensions</label>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 rounded-lg border border-gray-900 bg-gray-900 text-white text-sm font-medium transition-all">
              1024x1024
              <div className="text-xs text-gray-300 mt-1">Square</div>
</button>
<button className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium transition-all">
              1920x1080
              <div className="text-xs text-gray-500 mt-1">Landscape</div>
</button>
<button className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium transition-all">
              1080x1920
              <div className="text-xs text-gray-500 mt-1">Portrait</div>
</button>
<button className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium transition-all">
              Custom
              <div className="text-xs text-gray-500 mt-1">Define</div>
</button>
</div>
</div>

<div className="">
<label className="text-gray-900 font-medium text-sm mb-3 block">Quality Level</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-900 bg-gray-900"></div>
<div className="">
<div className="text-gray-900 text-sm font-medium">Ultra HD</div>
<div className="text-gray-500 text-xs">Best quality • ~45s</div>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
<div className="">
<div className="text-gray-700 text-sm font-medium">High Quality</div>
<div className="text-gray-500 text-xs">Good balance • ~25s</div>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
<div className="">
<div className="text-gray-700 text-sm font-medium">Fast Draft</div>
<div className="text-gray-500 text-xs">Quick preview • ~10s</div>
</div>
</div>
</div>
</div>
</div>

<div className="">
<label className="text-gray-900 font-medium text-sm mb-3 block">Advanced Options</label>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="">
<div className="text-gray-900 text-sm font-medium">Creative Freedom</div>
<div className="text-gray-500 text-xs">How much AI can interpret</div>
</div>
<div className="w-16 h-8 bg-gray-900 rounded-full relative cursor-pointer">
<div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="">
<div className="text-gray-900 text-sm font-medium">Style Consistency</div>
<div className="text-gray-500 text-xs">Maintain visual coherence</div>
</div>
<div className="w-16 h-8 bg-gray-200 rounded-full relative cursor-pointer">
<div className="w-6 h-6 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="">
<div className="text-gray-900 text-sm font-medium">Safe Mode</div>
<div className="text-gray-500 text-xs">Filter inappropriate content</div>
</div>
<div className="w-16 h-8 bg-gray-900 rounded-full relative cursor-pointer">
<div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
</div>
</div>
</div>
</div>

<div className="">
<label className="text-gray-900 font-medium text-sm mb-3 block">Export Format</label>
<div className="grid grid-cols-3 gap-2">
<button className="p-2 rounded-lg border border-gray-900 bg-gray-900 text-white text-xs font-medium transition-all">PNG</button>
<button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-medium transition-all">JPG</button>
<button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-medium transition-all">WebP</button>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-white">
<h4 className="text-gray-900 font-medium text-sm mb-3">Quick Actions</h4>
<div className="space-y-2">
<button className="w-full p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            Export All Images
          </button>
<button className="w-full p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
<svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16,6 12,2 8,6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>
            Share Project
          </button>
<button className="w-full p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c-1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
            Clear History
          </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
