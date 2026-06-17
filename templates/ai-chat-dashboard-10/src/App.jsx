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



        // Initialize Lucide Icons with requested stroke width
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="w-full h-full max-w-[1600px] flex rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/40 bg-white/30 backdrop-blur-xl">

<aside className="hidden md:flex w-72 flex-col flex-shrink-0 border-r border-gray-200/50 glass-panel z-20 h-full">

<div className="p-6 pb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-blue-600">
<svg aria-hidden="true" className="lucide lucide-network w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="active-campaign-icon" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(37, 99, 235)'}} viewbox="0 0 256 391" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m1.273 0l3.049 2.142c9.488 6.603 232.185 161.826 238.397 166.475c8.795 6.174 13.281 13.81 13.281 22.668v4.397c-.1 6.842-2.558 16.469-13.28 24.52l-.039.026c-5.166 3.692-57.747 40.12-113.415 78.701c-4.9 3.397-9.858 6.832-14.827 10.275l-3.314 2.297C61.96 345.572 12.62 379.777 5.947 384.498v6.136l-3.641-6.124c-.177-.315-.34-.58-.151-1.008H2.04v-32.03c0-10.924 1.21-16.178 13.37-24.28c5.179-3.33 49.529-33.955 94.578-65.128l5.3-3.668c41.513-28.73 82.338-57.033 92.364-63.974C186.484 179.718 27.796 69.554 16.923 61.59l-1.286-.932C7.598 54.836 1.273 50.25 1.273 38.128zM21.86 111.361c10.736 6.905 114.562 78.954 115.608 79.697l2.356 1.626l-2.394 1.6s-7.018 4.675-14.805 10.118c-6.666 4.889-12.903 7.333-19.102 7.333c-5.506 0-10.962-1.915-16.708-5.733c-6.12-4.086-23.363-15.98-40.816-28.064l-2.38-1.648A27213 27213 0 0 1 .832 146.592l-.832-.58v-24.47c0-5.62 2.42-10.067 6.666-12.222c4.548-2.318 10.231-1.562 15.195 2.041" fill="#004CFF"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-gray-900">CloudNine AI</span>
</div>
<button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="log-in"></i>
</button>
</div>

<div className="px-4 pb-6">
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200/60 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-gray-700 font-medium text-base">
<i className="w-4 h-4" data-lucide="plus"></i>
                    New Chat
                </button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pr-3 pb-4 pl-3 space-y-8">

<nav className="space-y-1">
<a className="flex items-center gap-3 transition-colors text-base font-normal text-gray-900 bg-gray-100/80 rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<i className="w-5 h-5 text-gray-700" data-lucide="home"></i>
                        Home
                    </a>
</nav>

<div className="space-y-2">
<nav className="space-y-1">
</nav>
</div>

<div className="space-y-2">
<h3 className="uppercase text-xs font-medium text-gray-400 tracking-widest mb-3 pr-4 pl-4">Recent Chats</h3>

<div className="border-gray-200/60 border-l-2 ml-5 pt-1 pb-1 pl-5 relative space-y-4">
</div>
</div>

<div className="space-y-2">
<nav className="space-y-1">
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 font-normal text-base transition-colors mb-4" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
                    Settings
                </a>
</div>
</aside>

<main className="flex-1 relative p-[1px] h-full overflow-hidden bg-white/40">

<div className="absolute -inset-[100%] z-0" style={{background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, rgba(59, 130, 246, 0.15) 85%, rgba(59, 130, 246, 0.4) 100%)', animation: 'rotate-beam 6s linear infinite'}}></div>

<div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-2xl md:rounded-l-none flex flex-col overflow-hidden">
<iframe allow="microphone; clipboard-read; clipboard-write" className="w-full h-[calc(100%+40px)] -mb-[40px] border-0" src="https://app.relevanceai.com/agents/f1db6c/eb23d01d-3499-4aa7-b87b-958de6a6f1f6/cc97618f-d77c-47d4-86e7-1f9c97f043e1/embed-chat?hide_tool_steps=false&amp;hide_file_uploads=false&amp;hide_conversation_list=false&amp;bubble_style=agent&amp;primary_color=%23685FFF&amp;bubble_icon=pd%2Fchat&amp;input_placeholder_text=Type+your+message...&amp;hide_logo=false&amp;hide_description=false" style={{clipPath: 'inset(0px 0px 40px 0px)'}}></iframe>
</div>
</main>
</div>


    </>
  );
}
