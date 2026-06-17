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
      
<div className="container mx-auto px-4 py-16">
<h2 className="text-3xl font-bold text-center mb-3">Latest Product Updates</h2>
<p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">Stay in the loop with our most recent improvements, new features, and important announcements.</p>
<div className="relative max-w-2xl mx-auto">

<div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 via-zinc-700 to-indigo-500"></div>
<div className="flex flex-col gap-8">

<div className="relative flex items-start group">

<div className="flex flex-col items-center z-10">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 group-hover:scale-110 transition-transform shadow-lg">
<i className="ti ti-sparkles text-lg"></i>
</span>
<span className="block w-px h-full bg-transparent"></span>
</div>

<div className="ml-8 flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group-hover:border-blue-500 transition">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs bg-blue-800/30 text-blue-300 font-mono px-2 py-0.5 rounded">2024-06-20</span>
<span className="text-sm text-blue-400 font-semibold">New Feature</span>
</div>
<div className="font-bold text-lg mb-1">AI-Powered Search Launched</div>
<p className="text-zinc-400 text-sm">Instantly find anything in your workspace with our blazing fast, intelligent search powered by next-gen AI models.</p>
</div>
</div>

<div className="relative flex items-start group">
<div className="flex flex-col items-center z-10">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-600 group-hover:scale-110 transition-transform shadow-lg">
<i className="ti ti-bug text-lg"></i>
</span>
<span className="block w-px h-full bg-transparent"></span>
</div>
<div className="ml-8 flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group-hover:border-purple-500 transition">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs bg-purple-800/30 text-purple-300 font-mono px-2 py-0.5 rounded">2024-06-13</span>
<span className="text-sm text-purple-400 font-semibold">Bug Fixes</span>
</div>
<div className="font-bold text-lg mb-1">Login Issues Resolved</div>
<p className="text-zinc-400 text-sm">Fixed an issue causing intermittent login failures for some users. Thanks for your patience!</p>
</div>
</div>

<div className="relative flex items-start group">
<div className="flex flex-col items-center z-10">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 group-hover:scale-110 transition-transform shadow-lg">
<i className="ti ti-rocket text-lg"></i>
</span>
<span className="block w-px h-full bg-transparent"></span>
</div>
<div className="ml-8 flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group-hover:border-green-500 transition">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs bg-green-800/30 text-green-300 font-mono px-2 py-0.5 rounded">2024-06-03</span>
<span className="text-sm text-green-400 font-semibold">Improvement</span>
</div>
<div className="font-bold text-lg mb-1">Performance Boost</div>
<p className="text-zinc-400 text-sm">Major backend optimization. Page loads are now 2x faster across all devices.</p>
</div>
</div>

<div className="relative flex items-start group">
<div className="flex flex-col items-center z-10">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-500 group-hover:scale-110 transition-transform shadow-lg">
<i className="ti ti-megaphone text-lg"></i>
</span>
<span className="block w-px h-full bg-transparent"></span>
</div>
<div className="ml-8 flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group-hover:border-amber-400 transition">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs bg-amber-800/30 text-amber-300 font-mono px-2 py-0.5 rounded">2024-05-19</span>
<span className="text-sm text-amber-400 font-semibold">Announcement</span>
</div>
<div className="font-bold text-lg mb-1">Introducing Team Spaces</div>
<p className="text-zinc-400 text-sm">Collaborate with your team in shared workspaces. Rollout starts next week!</p>
</div>
</div>

<div className="relative flex items-start group">
<div className="flex flex-col items-center z-10">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 group-hover:scale-110 transition-transform shadow-lg">
<i className="ti ti-alert-circle text-lg"></i>
</span>
<span className="block w-px h-full bg-transparent"></span>
</div>
<div className="ml-8 flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group-hover:border-red-400 transition">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs bg-red-800/30 text-red-300 font-mono px-2 py-0.5 rounded">2024-05-01</span>
<span className="text-sm text-red-400 font-semibold">Security</span>
</div>
<div className="font-bold text-lg mb-1">Critical Patch Deployed</div>
<p className="text-zinc-400 text-sm">Patched a vulnerability affecting account privacy. Please update your passwords.</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
