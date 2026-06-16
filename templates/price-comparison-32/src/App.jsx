import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#020617', // Slate 950
surface: '#0f172a', // Slate 900
primary: '#6366f1', // Indigo 500
secondary: '#ec4899', // Pink 500
},
animation: {
'gradient-x': 'gradient-x 15s ease infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
'gradient-x': {
'0%, 100%': {
'background-size': '200% 200%',
'background-position': 'left center'
},
'50%': {
'background-size': '200% 200%',
'background-position': 'right center'
},
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-600/10 blur-[100px]"></div>
<div className="absolute bottom-0 left-[20%] w-[60%] h-[30%] rounded-full bg-cyan-600/5 blur-[120px]"></div>
</div>

<nav className="sticky top-0 z-50 border-b border-slate-800/60 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-white" icon="lucide:zap" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white">Price<span className="text-indigo-400">Match</span></span>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-full transition-all group" onclick="toggleDeployModal()">
<iconify-icon className="text-emerald-400 group-hover:rotate-12 transition-transform" icon="lucide:rocket"></iconify-icon>
                        Deploy This App
                    </button>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="lucide:user" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center pt-16 pb-12 px-4 sm:px-6">

<div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-medium tracking-wide uppercase mb-2 animate-float">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Real-time Comparison Engine
            </div>
<h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Don't overpay for <br/>
<span className="gradient-text">Food or Rides.</span>
</h1>
<p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Compare prices instantly across Swiggy, Zomato, Uber, Ola, and Blinkit. We find the lowest price so you can order smarter.
            </p>
</div>

<div className="w-full max-w-2xl relative group z-20">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
<div className="relative bg-slate-950 rounded-xl p-2 flex items-center shadow-2xl">
<div className="pl-4 text-slate-400">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 text-sm h-12 px-4" id="searchInput" onkeydown="if(event.key === 'Enter') handleSearch()" placeholder="Try 'Chicken Biryani', 'Airport to MG Road', or 'Milk 1L'..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20" onclick="handleSearch()">
                    Search
                </button>
</div>

<div className="flex justify-center gap-3 mt-6">
<button className="cat-btn active flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all text-xs font-medium text-slate-300" onclick="setCategory('food')">
</button></div></div></main>
    </>
  );
}
