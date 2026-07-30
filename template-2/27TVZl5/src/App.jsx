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
          colors: {
            background: '#181B20',
            border: '#3b4252',
            muted: '#20232a',
            'muted-foreground': '#AAB0B9',
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
      
<div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-fade-in duration-700 relative h-[300px]">

<div className="[grid-area:stack] absolute left-0 top-0 translate-x-32 translate-y-20 relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 overflow-hidden shadow-lg">
<div>
<span className="relative inline-block rounded-full bg-blue-800 p-1">
<svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m6.11-12.11l1.42-1.42M4.47 19.53l1.42-1.42M20 12h2M2 12H4m14.11 6.11l1.42 1.42M4.47 4.47l1.42 1.42"></path><path d="M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>
</span>
<p className="text-lg font-medium text-blue-500">Featured</p>
</div>
<p className="whitespace-nowrap text-lg text-white">Discover amazing content</p>
<p className="text-muted-foreground text-sm">Just now</p>
</div>

<div className="[grid-area:stack] absolute left-0 top-0 translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 overflow-hidden shadow-lg z-10">
<div>
<span className="relative inline-block rounded-full bg-blue-800 p-1">
<svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m6.11-12.11l1.42-1.42M4.47 19.53l1.42-1.42M20 12h2M2 12H4m14.11 6.11l1.42 1.42M4.47 4.47l1.42 1.42"></path><path d="M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>
</span>
<p className="text-lg font-medium text-blue-500">Featured</p>
</div>
<p className="whitespace-nowrap text-lg text-white">Discover amazing content</p>
<p className="text-muted-foreground text-sm">Just now</p>
</div>

<div className="[grid-area:stack] absolute left-0 top-0 hover:-translate-y-10 before:absolute before:w-full before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 overflow-hidden shadow-xl z-20">
<div>
<span className="relative inline-block rounded-full bg-blue-800 p-1">
<svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m6.11-12.11l1.42-1.42M4.47 19.53l1.42-1.42M20 12h2M2 12H4m14.11 6.11l1.42 1.42M4.47 4.47l1.42 1.42"></path><path d="M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>
</span>
<p className="text-lg font-medium text-blue-500">Featured</p>
</div>
<p className="whitespace-nowrap text-lg text-white">Discover amazing content</p>
<p className="text-muted-foreground text-sm">Just now</p>
</div>
</div>


    </>
  );
}
