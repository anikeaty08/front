import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            geist: ['Geist', 'sans-serif']
          },
          animation: {
            glow: 'glow 8s ease-in-out infinite',
            'pulse-dot': 'pulseDot 2s ease-in-out infinite',
            wiggle: 'wiggle 1.2s ease-in-out infinite'
          },
          keyframes: {
            glow: {
              '0%, 100%': { opacity: 0.5 },
              '50%': { opacity: 0.8 }
            },
            pulseDot: {
              '0%,100%': { opacity: 0.7 },
              '50%': { opacity: 1 }
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-4deg)' },
              '50%': { transform: 'rotate(4deg)' }
            }
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full max-w-4xl mx-auto">

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-95 rounded-full blur-3xl opacity-40 animate-glow"></div>
<div className="relative z-10">

<div className="flex flex-col items-center text-center mb-10">
<span className="inline-block px-3 py-1 bg-indigo-900/60 text-indigo-300 rounded-full text-xs font-medium mb-3">Features</span>
<h2 className="text-3xl font-semibold text-white mb-2">Unlock Powerful Capabilities</h2>
<p className="text-gray-400 max-w-xl mx-auto text-base">Discover the core features designed to help you visualize, design, and optimize your database relationships with ease and clarity.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center group hover:border-indigo-600/70 transition">

<div className="mb-4">
<span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600/70 to-purple-700/70 shadow-lg">
<svg className="w-8 h-8 text-white animate-wiggle" fill="none" viewbox="0 0 32 32">
<rect className="text-indigo-500/60" fill="currentColor" height="20" rx="5" width="20" x="6" y="6"></rect>
<rect className="text-purple-500/60" fill="currentColor" height="10" rx="2" width="10" x="11" y="11"></rect>
</svg>
</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Visual Relationship Mapping</h3>
<p className="text-gray-400 text-sm text-center">Drag and drop entities to intuitively create and visualize relationships between tables in real time.</p>
</div>

<div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center group hover:border-indigo-600/70 transition">

<div className="mb-4">
<span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600/70 to-purple-700/70 shadow-lg">
<svg className="w-8 h-8 text-white animate-pulse-dot" fill="none" viewbox="0 0 32 32">
<circle className="text-purple-500/60" cx="16" cy="16" fill="currentColor" r="12"></circle>
<path d="M16 8v8l6 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Dependency Tracking</h3>
<p className="text-gray-400 text-sm text-center">Monitor and analyze how different tables depend on each other to prevent breaking changes and ensure data integrity.</p>
</div>

<div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center group hover:border-indigo-600/70 transition">

<div className="mb-4">
<span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600/70 to-purple-700/70 shadow-lg">
<svg className="w-8 h-8 text-white animate-glow" fill="none" viewbox="0 0 32 32">
<path d="M8 16h16M16 8v16" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="text-indigo-500/60" cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2"></circle>
</svg>
</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Database Optimization</h3>
<p className="text-gray-400 text-sm text-center">Get intelligent recommendations to optimize your schema and improve query performance with actionable insights.</p>
</div>
</div>

<div className="flex justify-center mt-10">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition rounded-full text-white font-medium shadow-lg" href="#">
          Get Started
          <svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>

    </>
  );
}
