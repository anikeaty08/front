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
      

<div className="fixed inset-0 grid-pattern opacity-50"></div>
<div className="fixed inset-0 font-quicksand bg-gradient-to-tl from-violet-600 to-indigo-600 grayscale-0 invert-0"></div>

<header className="relative z-50 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4">
<nav className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
<span className="text-lg font-semibold">Neural</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-white transition-colors text-sm text-slate-50" href="#">Product</a>
<a className="hover:text-white transition-colors text-sm text-slate-50" href="#">Solutions</a>
<a className="hover:text-white transition-colors text-sm text-slate-50" href="#">Pricing</a>
<a className="hover:text-white transition-colors text-sm text-slate-50" href="#">Company</a>
</div>
<div className="flex items-center space-x-3">
<button className="hover:text-white transition-colors text-sm text-slate-50">Sign in</button>
<button className="bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded-lg px-4 py-2 border border-white/10">
                        Get started
                    </button>
</div>
</nav>
</div>
</header>

<main className="relative z-10">
<div className="max-w-7xl pt-20 pb-32 mx-auto px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center bg-white/5 text-sm border-white/10 border rounded-full px-3 py-1">
<span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Now in public beta
                    </div>
<h1 className="lg:text-6xl leading-tight text-5xl font-bold tracking-tighter">
                        The future of
                        <span className="block text-cyan-400 py-3">
                            intelligent automation
                        </span>
                        is here
                    </h1>
<p className="leading-relaxed max-w-lg text-lg text-slate-50">
                        Build, deploy, and scale AI-powered workflows that adapt to your business needs. 
                        Streamline operations with precision and intelligence.
                    </p>
<div className="flex items-center space-x-4">
<button className="btn-primary relative overflow-hidden transition-all hover:scale-[1.02] font-medium rounded-lg px-6 py-3 border border-white/10">
                            Start building
                        </button>
<button className="hover:bg-white/5 transition-colors font-medium border-white/20 border rounded-lg px-6 py-3">
                            View demo
                        </button>
</div>
<div className="flex items-center space-x-6 pt-4">
<div className="text-sm text-slate-50">
                            Trusted by teams at
                        </div>
<div className="flex items-center space-x-4 opacity-60">
<div className="w-16 h-6 bg-gray-100 rounded"></div>
<div className="w-12 h-6 bg-gray-100 rounded hidden sm:flex"></div>
<div className="w-20 h-6 bg-gray-100 rounded hidden sm:flex"></div>
</div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="floating">
<div className="gradient-outline glow">
<div className="card-content px-6 py-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium">AI Dashboard</h3>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Tasks processed</span>
<span className="text-sm">2,847</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Efficiency gain</span>
<span className="text-sm text-green-400">+34%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Time saved</span>
<span className="text-sm">127h</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<div className="flex items-center space-x-2">
<div className="w-6 h-1 bg-violet-500 rounded-full"></div>
<div className="w-8 h-1 bg-blue-500 rounded-full"></div>
<div className="w-4 h-1 bg-gray-600 rounded-full"></div>
<div className="w-6 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="floating absolute -top-4 -right-8 w-64">
<div className="gradient-outline">
<div className="card-content p-4">
<div className="flex items-center space-x-2 mb-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-sm font-medium">Workflow active</span>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
<span className="text-xs text-gray-400">Data ingestion</span>
<div className="text-xs text-green-400">✓</div>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-blue-400 rounded-full"></div>
<span className="text-xs text-gray-400">Processing</span>
<div className="w-3 h-1 bg-blue-400 rounded-full animate-pulse"></div>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<span className="text-xs text-gray-500">Output generation</span>
</div>
</div>
</div>
</div>
</div>

<div className="floating absolute bottom-8 -left-8 w-48">
<div className="gradient-outline">
<div className="card-content px-4 py-4">
<div className="text-sm font-medium mb-3">Performance</div>
<div className="flex items-end space-x-1 h-8">
<div className="w-2 bg-gray-600 rounded-t h-3"></div>
<div className="w-2 bg-gray-600 rounded-t h-4"></div>
<div className="w-2 bg-violet-500 rounded-t h-6"></div>
<div className="w-2 bg-blue-500 rounded-t h-8"></div>
<div className="w-2 bg-blue-400 rounded-t h-5"></div>
<div className="w-2 bg-gray-600 rounded-t h-3"></div>
</div>
<div className="text-xs text-gray-400 mt-2">Last 7 days</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
