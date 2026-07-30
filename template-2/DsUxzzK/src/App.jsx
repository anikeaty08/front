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
      
<div className="max-w-4xl w-full bg-[#18181b] rounded-lg card-border flex overflow-hidden">

<div className="flex-auto w-1/2 p-8 flex flex-col justify-center items-center border-r border-[#27272a]">
<div className="relative w-48 h-48 mb-4">
<div className="absolute inset-0 rounded-full bg-[#27272a]"></div>
<div className="radial-bar text-blue-500" style={{'--progress': `70`, width: `100%`, height: `100%`}}></div>
<div className="radial-bar text-purple-500 absolute" style={{'--progress': `50`, width: `85%`, height: `85%`, top: `7.5%`, left: `7.5%`}}></div>
<div className="radial-bar text-green-500 absolute" style={{'--progress': `40`, width: `70%`, height: `70%`, top: `15%`, left: `15%`}}></div>
<div className="absolute inset-0 m-auto w-24 h-24 bg-[#18181b] rounded-full flex items-center justify-center card-border">
<div className="text-center">
<span className="block text-lg font-medium">$2,625</span>
<span className="text-xs text-[#a1a1aa]">Projected</span>
</div>
</div>
</div>

<div className="w-full mt-6 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
<span className="text-sm text-[#e4e4e7]">Entertainment</span>
</div>
<span className="text-sm text-[#a1a1aa]">70%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
<span className="text-sm text-[#e4e4e7]">Groceries</span>
</div>
<span className="text-sm text-[#a1a1aa]">50%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
<span className="text-sm text-[#e4e4e7]">Utilities</span>
</div>
<span className="text-sm text-[#a1a1aa]">40%</span>
</div>
</div>
</div>

<div className="flex-auto w-1/2 p-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-[#f4f4f5]">Spending Analytics</h2>
<div className="px-2 py-1 bg-[#27272a] rounded text-xs font-medium">Current Month</div>
</div>
<div className="divider mb-6"></div>

<div className="space-y-6 mb-8">
<div>
<p className="text-xs text-[#a1a1aa] mb-1">Total Spending</p>
<div className="flex items-end">
<p className="text-2xl font-medium text-[#f4f4f5]">$3,750</p>
<p className="text-xs text-red-400 ml-2 mb-1 flex items-center">
<svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5L12 19M12 5L6 11M12 5L18 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            5.4%
                        </p>
</div>
</div>
<div>
<p className="text-xs text-[#a1a1aa] mb-1">Average Daily Spend</p>
<div className="flex items-end">
<p className="text-2xl font-medium text-[#f4f4f5]">$125</p>
<p className="text-xs text-green-400 ml-2 mb-1 flex items-center">
<svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19L12 5M12 19L6 13M12 19L18 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            2.3%
                        </p>
</div>
</div>
</div>
<div className="divider mb-6"></div>

<div>
<p className="text-sm font-medium text-[#f4f4f5] mb-4">Breakdown by Category</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-[#e4e4e7]">Entertainment</span>
<span className="text-[#a1a1aa]">$2,625</span>
</div>
<div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: `70%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-[#e4e4e7]">Groceries</span>
<span className="text-[#a1a1aa]">$1,875</span>
</div>
<div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: `50%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-[#e4e4e7]">Utilities</span>
<span className="text-[#a1a1aa]">$1,500</span>
</div>
<div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: `40%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
