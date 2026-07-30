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
          colors: {
            'app-dark': '#101014',
            'app-gray': '#1D1D21',
            'app-light': '#27272B',
            'app-highlight': '#5E6AD2',
            'app-text': '#EBEBEC',
            'app-text-dim': '#A1A1A9',
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
      
<div className="flex h-screen overflow-hidden">

<div className="w-14 bg-app-dark border-r border-app-light flex flex-col items-center py-4">
<div className="w-8 h-8 bg-app-highlight rounded-md mb-8 flex items-center justify-center">
<i className="fas fa-code text-white text-sm"></i>
</div>
<div className="flex flex-col space-y-6">
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-app-light text-app-text">
<i className="fas fa-file-code"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-app-text-dim hover:bg-app-light">
<i className="fas fa-search"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-app-text-dim hover:bg-app-light">
<i className="fas fa-cog"></i>
</button>
</div>
<div className="mt-auto">
<button className="w-8 h-8 flex items-center justify-center rounded-md text-app-text-dim hover:bg-app-light">
<i className="fas fa-user-circle"></i>
</button>
</div>
</div>

<div className="w-64 bg-app-gray flex flex-col">
<div className="p-4 border-b border-app-light">
<div className="flex items-center justify-between">
<h2 className="font-medium">Project Files</h2>
<button className="text-app-text-dim hover:text-app-text">
<i className="fas fa-plus text-xs"></i>
</button>
</div>
</div>
<div className="overflow-y-auto flex-1">
<div className="px-3 py-2 text-xs font-medium text-app-text-dim">
          WORKSPACE
        </div>
<div className="px-4 py-2 bg-app-light text-app-text flex items-center">
<i className="fas fa-file-code mr-2 text-app-text-dim"></i>
<span>index.html</span>
</div>
<div className="px-4 py-2 text-app-text-dim hover:bg-app-light flex items-center">
<i className="fas fa-file-code mr-2 text-app-text-dim"></i>
<span>styles.css</span>
</div>
<div className="px-4 py-2 text-app-text-dim hover:bg-app-light flex items-center">
<i className="fas fa-file-code mr-2 text-app-text-dim"></i>
<span>app.js</span>
</div>
<div className="px-3 py-2 mt-4 text-xs font-medium text-app-text-dim">
          COMPONENTS
        </div>
<div className="px-4 py-2 text-app-text-dim hover:bg-app-light flex items-center">
<i className="fas fa-puzzle-piece mr-2 text-app-text-dim"></i>
<span>Button.jsx</span>
</div>
<div className="px-4 py-2 text-app-text-dim hover:bg-app-light flex items-center">
<i className="fas fa-puzzle-piece mr-2 text-app-text-dim"></i>
<span>Card.jsx</span>
</div>
<div className="px-4 py-2 text-app-text-dim hover:bg-app-light flex items-center">
<i className="fas fa-puzzle-piece mr-2 text-app-text-dim"></i>
<span>Modal.jsx</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-app-dark">

<div className="bg-app-gray border-b border-app-light flex">
<div className="px-4 py-2 bg-app-dark border-r border-app-light flex items-center">
<span>index.html</span>
<button className="ml-2 text-app-text-dim hover:text-app-text">
<i className="fas fa-times text-xs"></i>
</button>
</div>
<div className="px-4 py-2 border-r border-app-light flex items-center text-app-text-dim">
<span>styles.css</span>
<button className="ml-2 text-app-text-dim hover:text-app-text">
<i className="fas fa-times text-xs"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-auto">
<div className="p-4 font-mono text-sm">
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">1</div>
<div><span className="text-purple-400">{"<"}!DOCTYPE</span> <span className="text-yellow-400">html</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">2</div>
<div><span className="text-purple-400">{"<"}html</span> <span className="text-yellow-400">lang</span>=<span className="text-green-400">"en"</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">3</div>
<div><span className="text-purple-400">{"<"}head{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">4</div>
<div className="pl-4"><span className="text-purple-400">{"<"}meta</span> <span className="text-yellow-400">charset</span>=<span className="text-green-400">"UTF-8"</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">5</div>
<div className="pl-4"><span className="text-purple-400">{"<"}meta</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">"viewport"</span> <span className="text-yellow-400">content</span>=<span className="text-green-400">"width=device-width, initial-scale=1.0"</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">6</div>
<div className="pl-4"><span className="text-purple-400">{"<"}title{">"}</span>My App<span className="text-purple-400">{"<"}/title{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">7</div>
<div className="pl-4"><span className="text-purple-400">{"<"}link</span> <span className="text-yellow-400">rel</span>=<span className="text-green-400">"stylesheet"</span> <span className="text-yellow-400">href</span>=<span className="text-green-400">"styles.css"</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">8</div>
<div><span className="text-purple-400">{"<"}/head{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">9</div>
<div><span className="text-purple-400">{"<"}body{">"}</span></div>
</div>
<div className="flex bg-app-light">
<div className="text-app-text-dim w-10 text-right pr-4">10</div>
<div className="pl-4"><span className="text-purple-400">{"<"}div</span> <span className="text-yellow-400">class</span>=<span className="text-green-400">"container"</span><span className="text-purple-400">{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">11</div>
<div className="pl-8"><span className="text-purple-400">{"<"}h1{">"}</span>Hello World<span className="text-purple-400">{"<"}/h1{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">12</div>
<div className="pl-8"><span className="text-purple-400">{"<"}p{">"}</span>Welcome to my application<span className="text-purple-400">{"<"}/p{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">13</div>
<div className="pl-4"><span className="text-purple-400">{"<"}/div{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">14</div>
<div><span className="text-purple-400">{"<"}/body{">"}</span></div>
</div>
<div className="flex">
<div className="text-app-text-dim w-10 text-right pr-4">15</div>
<div><span className="text-purple-400">{"<"}/html{">"}</span></div>
</div>
</div>
</div>

<div className="bg-app-gray border-t border-app-light px-4 py-1 text-xs text-app-text-dim flex items-center justify-between">
<div className="flex items-center space-x-4">
<span>HTML</span>
<span>UTF-8</span>
<span>Line 10, Col 32</span>
</div>
<div className="flex items-center space-x-4">
<span><i className="fas fa-code-branch mr-1"></i> main</span>
<span><i className="fas fa-check-circle mr-1 text-green-500"></i> Ready</span>
</div>
</div>
</div>
</div>

    </>
  );
}
