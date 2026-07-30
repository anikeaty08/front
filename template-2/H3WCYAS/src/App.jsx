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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sf-pro': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                        'sf-text': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'fade-in': 'fadeIn 0.6s ease-out',
                        'slide-up': 'slideUp 0.4s ease-out',
                        'bounce-subtle': 'bounceSubtle 2s infinite',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: 0 },
                            '100%': { opacity: 1 }
                        },
                        slideUp: {
                            '0%': { opacity: 0, transform: 'translateY(10px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        },
                        bounceSubtle: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-2px)' }
                        }
                    }
                }
            }
        }
    
}

{

        // Simplified Aurora Background
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('aurora-canvas') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const material = new THREE.ShaderMaterial({
            uniforms: {}})
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
      

<canvas id="aurora-canvas"></canvas>

<div className="relative z-10 h-screen w-screen flex items-center justify-center p-4">
<div className="w-full h-full max-w-none macos-window rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="macos-titlebar h-12 flex items-center justify-between px-4 flex-shrink-0">
<div className="flex items-center space-x-2">
<div className="traffic-light close"></div>
<div className="traffic-light minimize"></div>
<div className="traffic-light maximize"></div>
</div>
<div className="text-white/80 text-sm font-medium font-sf-text">ZORA Schema Manager</div>
<div className="w-12"></div>
</div>

<div className="flex flex-1 min-h-0">

<aside className="w-64 sidebar-glass p-6 flex flex-col flex-shrink-0">

<div className="mb-8">
<h1 className="text-2xl font-bold text-white font-sf-pro">ZORA</h1>
<p className="text-white/60 text-sm font-sf-text">Schema Dashboard</p>
</div>

<nav className="space-y-1 flex-1">
<a className="flex items-center space-x-3 p-3 rounded-lg sidebar-item active text-white transition-all font-sf-text" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
<span>Overview</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg sidebar-item text-white/70 hover:text-white transition-all font-sf-text" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path></path><path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
<span>Schemas</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg sidebar-item text-white/70 hover:text-white transition-all font-sf-text" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
<span>Monitoring</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg sidebar-item text-white/70 hover:text-white transition-all font-sf-text" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
<span>Team</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg sidebar-item text-white/70 hover:text-white transition-all font-sf-text" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
<span>Settings</span>
</a>
</nav>

<div className="profile-container rounded-xl p-4 mt-auto">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold font-sf-text">
                                JD
                            </div>
<div>
<p className="text-white text-sm font-medium font-sf-text">John Doe</p>
<p className="text-white/60 text-xs font-sf-text">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 min-w-0 flex flex-col">
<div className="p-6 flex-1 overflow-y-auto">

<header className="mb-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-3xl font-bold text-white font-sf-pro">Dashboard Overview</h2>
<p className="text-white/60 font-sf-text">Monitor your database schemas and performance</p>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 macos-button rounded-lg text-white transition-all">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</button>
<button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all font-sf-text shadow-lg">
                                        + New Schema
                                    </button>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass rounded-xl p-6 card-glow animate-slide-up">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
<path></path><path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
</div>
<div className="w-3 h-3 bg-green-400 rounded-full status-dot"></div>
</div>
<h3 className="text-2xl font-bold text-white font-sf-pro">47</h3>
<p className="text-white/60 text-sm font-sf-text">Active Schemas</p>
<div className="mt-3 flex items-center text-green-400 text-sm font-sf-text">
<span>+12% from last month</span>
</div>
</div>
<div className="glass rounded-xl p-6 card-glow animate-slide-up" style={{animationDelay: `0.1s`}}>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</div>
<div className="w-3 h-3 bg-blue-400 rounded-full status-dot"></div>
</div>
<h3 className="text-2xl font-bold text-white font-sf-pro">99.9%</h3>
<p className="text-white/60 text-sm font-sf-text">Uptime</p>
<div className="mt-3 flex items-center text-blue-400 text-sm font-sf-text">
<span>24/7 monitoring</span>
</div>
</div>
<div className="glass rounded-xl p-6 card-glow animate-slide-up" style={{animationDelay: `0.2s`}}>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</div>
<div className="w-3 h-3 bg-purple-400 rounded-full status-dot"></div>
</div>
<h3 className="text-2xl font-bold text-white font-sf-pro">2.3M</h3>
<p className="text-white/60 text-sm font-sf-text">Queries Today</p>
<div className="mt-3 flex items-center text-purple-400 text-sm font-sf-text">
<span>+8% from yesterday</span>
</div>
</div>
<div className="glass rounded-xl p-6 card-glow animate-slide-up" style={{animationDelay: `0.3s`}}>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</div>
<div className="w-3 h-3 bg-orange-400 rounded-full status-dot"></div>
</div>
<h3 className="text-2xl font-bold text-white font-sf-pro">15</h3>
<p className="text-white/60 text-sm font-sf-text">Team Members</p>
<div className="mt-3 flex items-center text-orange-400 text-sm font-sf-text">
<span>3 active now</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="lg:col-span-2 glass rounded-xl p-6 card-glow animate-fade-in">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-white font-sf-pro">Live Schema View</h3>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-green-400 text-sm font-sf-text">Live</span>
</div>
</div>
<div className="h-80 rounded-xl gradient-border overflow-hidden relative">

<div className="absolute inset-4 grid grid-cols-3 gap-4 w-full h-full">
<div className="glass rounded-lg p-3 border border-indigo-400/30 animate-bounce-subtle h-fit">
<div className="bg-gradient-to-r from-indigo-500/30 to-blue-500/30 text-white text-xs px-2 py-1 rounded mb-2 font-sf-text">users</div>
<div className="space-y-1">
<div className="h-1 w-8 bg-white/40 rounded"></div>
<div className="h-1 w-6 bg-white/30 rounded"></div>
<div className="h-1 w-10 bg-white/30 rounded"></div>
</div>
</div>
<div className="glass rounded-lg p-3 border border-blue-400/30 animate-bounce-subtle h-fit" style={{animationDelay: `0.5s`}}>
<div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white text-xs px-2 py-1 rounded mb-2 font-sf-text">orders</div>
<div className="space-y-1">
<div className="h-1 w-8 bg-white/40 rounded"></div>
<div className="h-1 w-5 bg-white/30 rounded"></div>
<div className="h-1 w-7 bg-white/30 rounded"></div>
</div>
</div>
<div className="glass rounded-lg p-3 border border-purple-400/30 animate-bounce-subtle h-fit" style={{animationDelay: `1s`}}>
<div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white text-xs px-2 py-1 rounded mb-2 font-sf-text">products</div>
<div className="space-y-1">
<div className="h-1 w-8 bg-white/40 rounded"></div>
<div className="h-1 w-8 bg-white/30 rounded"></div>
<div className="h-1 w-6 bg-white/30 rounded"></div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
<defs>
<lineargradient id="lineGradient">
<stop offset="0%" style={{stopColor: `#4f46e5`, stopOpacity: `0.8`}}></stop>
<stop offset="100%" style={{stopColor: `#3b82f6`, stopOpacity: `0.8`}}></stop>
</lineargradient>
</defs>
<path fill="none" stroke="url(#lineGradient)" strokeDasharray="5,5" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="1s" repeatcount="indefinite" values="0;10"></animate>
</path>
</svg>
</div>
</div>

<div className="glass rounded-xl p-6 card-glow animate-fade-in" style={{animationDelay: `0.2s`}}>
<h3 className="text-xl font-semibold text-white mb-6 font-sf-pro">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-green-400 rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-white text-sm font-sf-text">Schema updated</p>
<p className="text-white/60 text-xs font-sf-text">users table modified</p>
<p className="text-white/40 text-xs font-sf-text">2 minutes ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-white text-sm font-sf-text">New query executed</p>
<p className="text-white/60 text-xs font-sf-text">Complex join operation</p>
<p className="text-white/40 text-xs font-sf-text">5 minutes ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-purple-400 rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-white text-sm font-sf-text">Team member joined</p>
<p className="text-white/60 text-xs font-sf-text">Sarah Connor added</p>
<p className="text-white/40 text-xs font-sf-text">1 hour ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-xl p-6 card-glow animate-fade-in" style={{animationDelay: `0.4s`}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-white font-sf-pro">Query Performance</h3>
<select className="macos-button text-white text-sm rounded-lg px-3 py-2 font-sf-text">
<option>Last 24 hours</option>
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
</div>
<div className="h-32 flex items-end space-x-2">
<div className="flex-1 h-16 metric-bar rounded-t opacity-70"></div>
<div className="flex-1 h-24 metric-bar rounded-t opacity-80"></div>
<div className="flex-1 h-20 metric-bar rounded-t opacity-75"></div>
<div className="flex-1 h-28 metric-bar rounded-t opacity-90"></div>
<div className="flex-1 h-32 metric-bar rounded-t opacity-100"></div>
<div className="flex-1 h-26 metric-bar rounded-t opacity-85"></div>
<div className="flex-1 h-22 metric-bar rounded-t opacity-80"></div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

    </>
  );
}
