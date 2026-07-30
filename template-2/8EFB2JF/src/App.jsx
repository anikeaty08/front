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
            theme: {
                extend: {
                    fontFamily: {
                        'retro': ['Orbitron', 'monospace']
                    },
                    colors: {
                        'neon-pink': '#ff0080',
                        'neon-cyan': '#00ffff',
                        'neon-purple': '#8000ff',
                        'neon-orange': '#ff4000'
                    }
                }
            }
        }
    


        // Add some interactive glitch effects
        setInterval(() => {
            const elements = document.querySelectorAll('.neon-text');
            elements.forEach(el => {
                if (Math.random() < 0.1) {
                    el.style.animation = 'vhs-glitch 0.1s ease-in-out';
                    setTimeout(() => {
                        el.style.animation = 'neon-pulse 2s ease-in-out infinite';
                    }, 100);
                }
            });
        }, 1000);
        
        // Mouse trail effect
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.3) {
                const trail = document.createElement('div');
                trail.className = 'fixed w-1 h-1 bg-neon-cyan rounded-full pointer-events-none z-50';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                trail.style.opacity = '0.6';
                document.body.appendChild(trail);
                
                setTimeout(() => {
                    trail.style.opacity = '0';
                    trail.style.transform = 'scale(0)';
                    trail.style.transition = 'all 0.5s ease-out';
                }, 50);
                
                setTimeout(() => {
                    document.body.removeChild(trail);
                }, 600);
            }
        });
    
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
      

<div className="vhs-effect absolute inset-0"></div>

<div className="grid-overlay absolute inset-0 opacity-30"></div>

<div className="data-stream top-1/4 left-0 w-full" style={{animationDelay: `0s`}}></div>
<div className="data-stream top-3/4 left-0 w-full" style={{animationDelay: `2s`}}></div>

<nav className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-pink-900/20 backdrop-blur-sm border-r border-neon-pink/30 z-20 p-6">
<div className="mb-8">
<h2 className="text-2xl font-black text-neon-pink neon-text">SYNTH_DASH</h2>
<div className="w-full h-px bg-gradient-to-r from-neon-pink to-neon-cyan mt-2"></div>
<p className="text-xs text-neon-cyan/60 mt-1">[v8.5.2024]</p>
</div>
<ul className="space-y-4">
<li><a className="block text-sm font-bold text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:translate-x-1 transform" href="#">» OVERVIEW</a></li>
<li><a className="block text-sm font-bold text-white/70 hover:text-neon-orange transition-colors duration-300 hover:translate-x-1 transform" href="#">» PROJECTS</a></li>
<li><a className="block text-sm font-bold text-white/70 hover:text-neon-purple transition-colors duration-300 hover:translate-x-1 transform" href="#">» ANALYTICS</a></li>
<li><a className="block text-sm font-bold text-white/70 hover:text-neon-cyan transition-colors duration-300 hover:translate-x-1 transform" href="#">» GAMES</a></li>
<li><a className="block text-sm font-bold text-white/70 hover:text-neon-pink transition-colors duration-300 hover:translate-x-1 transform" href="#">» PORTFOLIO</a></li>
</ul>
<div className="absolute bottom-6 left-6">
<div className="retro-card p-3 rounded">
<p className="text-xs text-neon-cyan">STATUS:</p>
<p className="text-sm font-bold text-neon-pink neon-text">ONLINE</p>
<div className="flex items-center mt-2">
<div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse mr-2"></div>
<span className="text-xs">CONNECTED</span>
</div>
</div>
</div>
</nav>

<div className="ml-64 p-8 relative z-10">

<header className="mb-8">
<h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan mb-2">
                NEON DASHBOARD
            </h1>
<p className="text-neon-cyan/80">Welcome back, Cyber Artist</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="retro-card p-6 rounded-lg hover:shadow-2xl hover:shadow-neon-pink/20 transition-all duration-300 transform hover:scale-105">
<h3 className="text-neon-pink font-bold text-sm mb-2">TOTAL PROJECTS</h3>
<p className="text-3xl font-black text-white neon-text">42</p>
<div className="w-full bg-black/50 h-2 rounded mt-3">
<div className="bg-gradient-to-r from-neon-pink to-neon-orange h-full rounded" style={{width: `75%`}}></div>
</div>
</div>
<div className="retro-card p-6 rounded-lg hover:shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-300 transform hover:scale-105">
<h3 className="text-neon-cyan font-bold text-sm mb-2">GAMES SHIPPED</h3>
<p className="text-3xl font-black text-white neon-text">13</p>
<div className="w-full bg-black/50 h-2 rounded mt-3">
<div className="bg-gradient-to-r from-neon-cyan to-neon-purple h-full rounded" style={{width: `60%`}}></div>
</div>
</div>
<div className="retro-card p-6 rounded-lg hover:shadow-2xl hover:shadow-neon-purple/20 transition-all duration-300 transform hover:scale-105">
<h3 className="text-neon-purple font-bold text-sm mb-2">DOWNLOADS</h3>
<p className="text-3xl font-black text-white neon-text">1.2M</p>
<div className="w-full bg-black/50 h-2 rounded mt-3">
<div className="bg-gradient-to-r from-neon-purple to-neon-pink h-full rounded" style={{width: `90%`}}></div>
</div>
</div>
<div className="retro-card p-6 rounded-lg hover:shadow-2xl hover:shadow-neon-orange/20 transition-all duration-300 transform hover:scale-105">
<h3 className="text-neon-orange font-bold text-sm mb-2">SCORE</h3>
<p className="text-3xl font-black text-white neon-text">9.8K</p>
<div className="w-full bg-black/50 h-2 rounded mt-3">
<div className="bg-gradient-to-r from-neon-orange to-neon-cyan h-full rounded" style={{width: `85%`}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 retro-card p-6 rounded-lg">
<h2 className="text-xl font-bold text-neon-cyan mb-4">RECENT_PROJECTS.exe</h2>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-black/30 rounded border border-neon-pink/20 hover:border-neon-pink/50 transition-colors">
<div>
<h3 className="font-bold text-neon-pink">NEON_RUNNER_2024</h3>
<p className="text-sm text-white/60">Cyberpunk endless runner</p>
</div>
<span className="text-neon-cyan font-bold">94%</span>
</div>
<div className="flex items-center justify-between p-4 bg-black/30 rounded border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors">
<div>
<h3 className="font-bold text-neon-cyan">SYNTHWAVE_PORTFOLIO</h3>
<p className="text-sm text-white/60">Personal website redesign</p>
</div>
<span className="text-neon-purple font-bold">87%</span>
</div>
<div className="flex items-center justify-between p-4 bg-black/30 rounded border border-neon-purple/20 hover:border-neon-purple/50 transition-colors">
<div>
<h3 className="font-bold text-neon-purple">RETRO_BEATS_APP</h3>
<p className="text-sm text-white/60">Music visualization tool</p>
</div>
<span className="text-neon-orange font-bold">72%</span>
</div>
</div>
</div>

<div className="retro-card p-6 rounded-lg">
<h2 className="text-xl font-bold text-neon-pink mb-4">QUICK_ACCESS</h2>
<div className="space-y-3">
<button className="w-full p-3 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded border border-neon-pink/30 hover:border-neon-pink text-left hover:bg-neon-pink/10 transition-all duration-300 transform hover:scale-105">
<span className="font-bold text-neon-pink">+ NEW PROJECT</span>
</button>
<button className="w-full p-3 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded border border-neon-cyan/30 hover:border-neon-cyan text-left hover:bg-neon-cyan/10 transition-all duration-300 transform hover:scale-105">
<span className="font-bold text-neon-cyan">⚡ DEPLOY BUILD</span>
</button>
<button className="w-full p-3 bg-gradient-to-r from-neon-purple/20 to-neon-orange/20 rounded border border-neon-purple/30 hover:border-neon-purple text-left hover:bg-neon-purple/10 transition-all duration-300 transform hover:scale-105">
<span className="font-bold text-neon-purple">📊 VIEW STATS</span>
</button>
<button className="w-full p-3 bg-gradient-to-r from-neon-orange/20 to-neon-pink/20 rounded border border-neon-orange/30 hover:border-neon-orange text-left hover:bg-neon-orange/10 transition-all duration-300 transform hover:scale-105">
<span className="font-bold text-neon-orange">🎮 PLAY TEST</span>
</button>
</div>

<div className="mt-8 p-4 bg-black/50 rounded border border-white/10">
<h3 className="text-sm font-bold text-neon-cyan mb-2">SYSTEM_STATUS:</h3>
<div className="text-xs space-y-1">
<div className="flex justify-between">
<span>CPU:</span>
<span className="text-neon-pink">45%</span>
</div>
<div className="flex justify-between">
<span>RAM:</span>
<span className="text-neon-cyan">67%</span>
</div>
<div className="flex justify-between">
<span>GPU:</span>
<span className="text-neon-purple">23%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-20 right-20 w-4 h-4 bg-neon-pink rounded-sm opacity-60" style={{animation: `pixel-float 3s ease-in-out infinite`}}></div>
<div className="fixed bottom-32 right-32 w-3 h-3 bg-neon-cyan rounded-sm opacity-40" style={{animation: `pixel-float 4s ease-in-out infinite`, animationDelay: `1s`}}></div>
<div className="fixed top-1/2 right-16 w-2 h-2 bg-neon-purple rounded-sm opacity-50" style={{animation: `pixel-float 3.5s ease-in-out infinite`, animationDelay: `2s`}}></div>


    </>
  );
}
