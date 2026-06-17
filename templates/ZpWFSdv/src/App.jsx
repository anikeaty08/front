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
      
<div className="min-h-screen flex flex-col relative overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-600/20 blur-[100px]"></div>
<div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] rounded-full bg-cyan-600/20 blur-[100px]"></div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

<header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
<div className="w-4 h-4 bg-black rounded-sm"></div>
</div>
<div className="font-medium tracking-tight">HextaAI</div>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Method</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Company</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm text-gray-400 hover:text-white transition-colors hidden md:block" href="#">Sign in</a>
<button className="bg-white text-black hover:bg-gray-200 rounded-md px-4 py-2 text-sm font-medium transition-colors">
          Get started
        </button>
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 mt-12 md:mt-0">
<div className="max-w-4xl mx-auto space-y-6 text-center">

<div className="inline-block mx-auto border border-gray-800 rounded-full px-3 py-1 text-xs text-gray-400 mb-6">
<span className="flex items-center gap-2">
<span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
            Introducing Magic Components
          </span>
</div>

<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Build stunning websites<br className="hidden md:block"/> with precision
        </h1>

<p className="text-lg text-gray-400 max-w-2xl mx-auto">
          HextaAI combines intelligence with design, enabling you to create exceptional digital experiences with minimal effort.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
<button className="bg-white text-black hover:bg-gray-200 rounded-md px-6 py-3 text-sm font-medium transition-colors">
            Start building for free
          </button>
<button className="bg-transparent border border-gray-800 hover:border-gray-700 rounded-md px-6 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="ri-play-circle-line text-lg"></i>
            See how it works
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-16 text-left">
<div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-700 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-blue-500/10 group">
<div className="w-10 h-10 bg-blue-500/20 rounded-md flex items-center justify-center mb-4 transition-all group-hover:bg-blue-500/30">
<i className="ri-flashlight-line text-blue-400 group-hover:text-blue-300"></i>
</div>
<h3 className="text-lg font-medium mb-2">Lightning fast</h3>
<p className="text-sm text-gray-400 group-hover:text-gray-300">Generate complete UI components in seconds with simple text prompts.</p>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-700 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10 group">
<div className="w-10 h-10 bg-purple-500/20 rounded-md flex items-center justify-center mb-4 transition-all group-hover:bg-purple-500/30">
<i className="ri-code-box-line text-purple-400 group-hover:text-purple-300"></i>
</div>
<h3 className="text-lg font-medium mb-2">Production ready</h3>
<p className="text-sm text-gray-400 group-hover:text-gray-300">Clean, maintainable code that follows best practices and modern standards.</p>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-700 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-cyan-500/10 group">
<div className="w-10 h-10 bg-cyan-500/20 rounded-md flex items-center justify-center mb-4 transition-all group-hover:bg-cyan-500/30">
<i className="ri-tools-line text-cyan-400 group-hover:text-cyan-300"></i>
</div>
<h3 className="text-lg font-medium mb-2">Fully customizable</h3>
<p className="text-sm text-gray-400 group-hover:text-gray-300">Easily modify any aspect of your components to match your brand identity.</p>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
