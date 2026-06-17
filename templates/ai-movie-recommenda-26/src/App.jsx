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
fontFamily: {
inter: ['Inter', 'sans-serif']
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



    async function getRecommendations() {
      const movieInput = document.getElementById("movieInput");
      const movie = movieInput.value.trim();
      const resultsContainer = document.getElementById("results-container");
      const results = document.getElementById("results");

      if (!movie) {
        movieInput.classList.add("placeholder-red-400", "animate-pulse");
        setTimeout(() => movieInput.classList.remove("placeholder-red-400", "animate-pulse"), 1000);
        return;
      }

      // Show container and loading state with animation
      resultsContainer.classList.remove("hidden");
      results.innerHTML = `
        <div class="col-span-2 flex flex-col items-center justify-center py-12 text-slate-400 animate-enter">
          <iconify-icon icon="solar:spinner-linear" class="text-3xl animate-spin text-indigo-500 mb-3"></iconify-icon>
          <p class="text-sm font-medium">Analyzing "${movie}"...</p>
        </div>
      `;
      
      // Simulate API call
      try {
        const response = await fetch("http://127.0.0.1:5000/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ movie_name: movie })
        });

        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        renderResults(data.recommendations);
        
      } catch (error) {
        // Fallback demo
        setTimeout(() => {
          renderResults([
            "Interstellar",
            "The Martian", 
            "Arrival", 
            "Blade Runner 2049",
            "Ex Machina",
            "Inception"
          ]);
        }, 1500);
      }
    }

    function renderResults(movies) {
      const results = document.getElementById("results");
      results.innerHTML = "";
      
      movies.forEach((m, index) => {
        const div = document.createElement("div");
        const delay = index * 100; // Stagger effect
        
        div.className = `
          group flex items-center gap-4 p-4 rounded-xl 
          bg-[#0e101b]/90 backdrop-blur-md border border-white/5 
          hover:border-indigo-500/30 hover:bg-[#131625] 
          transition-all duration-300 cursor-pointer
          animate-enter hover:scale-[1.02]
        `;
        div.style.animationDelay = `${delay}ms`;

        div.innerHTML = `
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors duration-300">
            <iconify-icon icon="solar:videocamera-linear" class="text-lg"></iconify-icon>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">${m}</p>
            <p class="text-xs text-slate-500 flex items-center gap-1">
              <span class="text-emerald-500">9${9-index}% Match</span>
            </p>
          </div>
          <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg text-slate-600 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1"></iconify-icon>
        `;
        results.appendChild(div);
      });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center opacity-40"></div>

<div className="absolute inset-0 bg-[#05060f]/50"></div>

<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#05060f] via-[#05060f]/80 to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#05060f] via-[#05060f] to-transparent"></div>

<div className="absolute -top-20 left-0 right-0 h-[500px] bg-indigo-900/10 blur-[120px] animate-pulse-slow mix-blend-screen"></div>
</div>

<nav className="relative z-50 flex items-center justify-between pt-6 px-6 md:px-12 max-w-7xl mx-auto animate-enter">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition duration-500 group-hover:scale-105">
<iconify-icon className="text-white text-lg" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<div className="text-lg font-medium tracking-tight text-white">
        CineSync
      </div>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-300/80">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#how">How it works</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
</div>
<button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 backdrop-blur-md hover:scale-105 active:scale-95">
<span>Star on GitHub</span>
<iconify-icon className="text-yellow-400" icon="solar:star-linear"></iconify-icon>
</button>
</nav>

<section className="z-10 text-center max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-40 pl-6 relative">

<div className="inline-flex animate-enter text-xs font-medium text-indigo-300 bg-indigo-500/10 border-indigo-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center" style={{animationDelay: '100ms'}}>Trusted by 50,000+ movie fans.<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span></div>
<h1 className="animate-enter sm:text-7xl text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-2xl" style={{animationDelay: '200ms'}}>
      Discover movies you'll <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 inline-block mt-2">actually watch.</span>
</h1>
<p className="animate-enter max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed font-light drop-shadow-md" style={{animationDelay: '300ms'}}>
      Stop scrolling, start watching. CineSync uses advanced machine learning to analyze your unique taste profile and curate hidden gems instantly.
    </p>

<div className="animate-enter mt-12 max-w-2xl mx-auto relative group" style={{animationDelay: '400ms'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-700 group-focus-within:opacity-50 group-focus-within:blur-xl"></div>
<div className="relative flex items-center bg-[#0a0b14]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl transition-all duration-300 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50">
<div className="pl-4 text-slate-500 flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input autocomplete="off" className="w-full bg-transparent text-white text-base font-light placeholder-slate-500 px-4 py-3 outline-none" id="movieInput" placeholder="Enter a movie you loved (e.g. Inception)..."/>
<button className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98] hover:shadow-indigo-500/40" onclick="getRecommendations()">
<span>Generate</span>
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>

<button className="sm:hidden mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition shadow-lg shadow-indigo-500/20 active:scale-95" onclick="getRecommendations()">
        Get Recommendations <iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
<div className="mt-5 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium opacity-90 drop-shadow-sm">
<div className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-default">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> No Login
        </div>
<div className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-default">
<iconify-icon className="text-amber-500 text-sm" icon="solar:bolt-linear"></iconify-icon> Instant Results
        </div>
<div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-default">
<iconify-icon className="text-blue-500 text-sm" icon="solar:shield-check-linear"></iconify-icon> Privacy First
        </div>
</div>
</div>

<div className="hidden mt-20 max-w-4xl mx-auto" id="results-container">
<div className="flex items-center justify-between mb-8 px-2 animate-enter">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:clapperboard-text-linear"></iconify-icon>
          Curated For You
        </h2>
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Top Matches</span>
</div>
<div className="grid sm:grid-cols-2 gap-4 text-left" id="results">

</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#05060f]" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 animate-enter" style={{animationDelay: '500ms'}}>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">How it works</h2>
<p className="text-slate-400 max-w-xl mx-auto">Three simple steps to find your next obsession without the endless scrolling paralysis.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500 group hover:-translate-y-2 animate-enter" style={{animationDelay: '600ms'}}>
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 group-hover:bg-indigo-500/20">
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:keyboard-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Input Your Taste</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Simply type in a movie title you enjoyed. No complex surveys or rating histories required.
          </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500 group hover:-translate-y-2 animate-enter" style={{animationDelay: '700ms'}}>
<div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 group-hover:bg-violet-500/20">
<iconify-icon className="text-violet-400 text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Deep Analysis</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Our algorithm scans thousands of data points including genre, director style, and mood.
          </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500 group hover:-translate-y-2 animate-enter" style={{animationDelay: '800ms'}}>
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 group-hover:bg-pink-500/20">
<iconify-icon className="text-pink-400 text-2xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Watchlist</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Get a curated list of recommendations that match the vibe of your input movie perfectly.
          </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5" id="about">
<div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-px rounded-3xl animate-enter" style={{animationDelay: '900ms'}}>
<div className="bg-[#080912] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
<div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent absolute top-0 animate-[float_4s_ease-in-out_infinite]"></div>
</div>
<iconify-icon className="text-4xl text-slate-500 mx-auto mb-6 group-hover:text-indigo-400 transition duration-300" icon="solar:code-2-linear"></iconify-icon>
<h2 className="text-2xl font-semibold text-white mb-4">Built with Modern Tech</h2>
<p className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
          CineSync leverages the power of Python's data science libraries. The backend processes vector similarity using Flask, while the frontend delivers a seamless experience.
        </p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono hover:bg-white/10 hover:border-indigo-500/30 transition cursor-default">Python</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono hover:bg-white/10 hover:border-indigo-500/30 transition cursor-default">Flask</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono hover:bg-white/10 hover:border-indigo-500/30 transition cursor-default">Tailwind</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono hover:bg-white/10 hover:border-indigo-500/30 transition cursor-default">Pandas</span>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-12 text-center border-t border-white/5 text-slate-500 text-sm">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50 hover:opacity-100 transition duration-300">
<iconify-icon className="text-lg" icon="solar:github-circle-linear"></iconify-icon>
<a className="hover:text-white transition" href="#">View Source</a>
</div>
<p>© 2026 CineSync Project. Designed for movie lovers.</p>
</footer>


    </>
  );
}
