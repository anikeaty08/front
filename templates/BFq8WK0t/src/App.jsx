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
      
<div className="w-full max-w-5xl animate-in">
<div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<div className="p-8 md:p-12 border-r border-zinc-800">
<div className="max-w-md mx-auto space-y-8">

<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5V9h7v8zm7 0h-5v-2h5v2zm0-6h-5V9h5v2z"></path>
</svg>
</div>
<span className="text-xl font-semibold">Prototype</span>
</div>
<div className="space-y-2">
<h1 className="text-2xl md:text-3xl font-bold">Sign in to your workspace</h1>
<p className="text-zinc-400">Access your projects and start prototyping faster.</p>
</div>
<form className="space-y-5">
<div className="space-y-1">
<label className="block text-sm font-medium text-zinc-400" htmlFor="email">Email address</label>
<input className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50" id="email" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center">
<label className="block text-sm font-medium text-zinc-400" htmlFor="password">Password</label>
<a className="text-xs text-zinc-400 hover:text-white" href="#">Forgot password?</a>
</div>
<input className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50" id="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded bg-zinc-800 border-zinc-700 text-blue-500 focus:ring-0" id="remember" type="checkbox"/>
<label className="ml-2 block text-sm text-zinc-400" htmlFor="remember">Remember for 30 days</label>
</div>
<button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity" type="submit">
                Sign in
              </button>
</form>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-800"></div>
</div>
<div className="relative flex justify-center">
<span className="px-2 bg-zinc-900 text-zinc-500 text-sm">Or continue with</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="flex justify-center py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</button>
<button className="flex justify-center py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</button>
<button className="flex justify-center py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
</svg>
</button>
</div>
<div className="text-center text-zinc-500 text-sm">
              Don't have an account? 
              <a className="text-blue-400 hover:underline" href="#">Sign up for free</a>
</div>
</div>
</div>

<div className="hidden md:block bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.15),transparent_40%)]"></div>

<div className="relative h-full flex items-center justify-center p-8">
<div className="w-[280px] h-[560px] bg-black rounded-[40px] border border-zinc-800 overflow-hidden shadow-2xl relative">

<div className="phone-notch"></div>

<div className="h-full overflow-hidden pt-6 pb-4 px-4 relative">

<div className="flex justify-between items-center mb-6 px-2">
<span className="text-white text-xs">9:41</span>
<div className="flex space-x-1">
<svg className="w-4 h-4 text-white opacity-80" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
</svg>
<svg className="w-4 h-4 text-white opacity-80" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path>
</svg>
<svg className="w-4 h-4 text-white opacity-80" fill="currentColor" viewbox="0 0 24 24">
<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path>
</svg>
</div>
</div>

<div className="space-y-5 slide-up" style={{animationDelay: '0.3s'}}>

<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5V9h7v8zm7 0h-5v-2h5v2zm0-6h-5V9h5v2z"></path>
</svg>
</div>
<span className="text-white text-sm font-medium">Prototype</span>
</div>
<div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</div>
</div>

<div className="pt-2 pb-2">
<h2 className="text-xl font-semibold text-white">Welcome back</h2>
<p className="text-zinc-400 text-xs">Your prototypes are ready</p>
</div>

<div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-4 border border-zinc-700/50">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-white">Recent Project</span>
<div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">Active</div>
</div>
<div className="flex space-x-3 items-center">
<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5V9h7v8zm7 0h-5v-2h5v2zm0-6h-5V9h5v2z"></path>
</svg>
</div>
<div>
<div className="text-white text-sm font-medium">Mobile App Redesign</div>
<div className="text-zinc-400 text-xs">Last edited 2 hours ago</div>
</div>
</div>
</div>

<div className="space-y-2">
<h3 className="text-xs font-medium text-white">Quick Actions</h3>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700/50">
<div className="flex flex-col items-center space-y-1">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-1">
<svg className="w-4 h-4 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
</svg>
</div>
<span className="text-white text-xs">New Project</span>
</div>
</div>
<div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700/50">
<div className="flex flex-col items-center space-y-1">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-1">
<svg className="w-4 h-4 text-purple-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z"></path>
</svg>
</div>
<span className="text-white text-xs">Templates</span>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<h3 className="text-xs font-medium text-white">Your Projects</h3>
<span className="text-xs text-blue-400">View all</span>
</div>
<div className="space-y-2">
<div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700/50">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-white text-xs">Mobile App</span>
</div>
<span className="text-zinc-500 text-xs">Updated 2h ago</span>
</div>
</div>
<div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700/50">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-white text-xs">Website Redesign</span>
</div>
<span className="text-zinc-500 text-xs">Updated 1d ago</span>
</div>
</div>
<div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700/50">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-white text-xs">Design System</span>
</div>
<span className="text-zinc-500 text-xs">Updated 3d ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
