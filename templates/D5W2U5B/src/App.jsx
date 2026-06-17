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
                        'orbitron': ['Orbitron', 'monospace'],
                        'exo': ['Exo', 'sans-serif']
                    },
                    colors: {
                        'plasma': '#00FFFF',
                        'power-red': '#FF004D',
                        'charcoal': '#1A1A1A',
                        'silver': '#C0C0C0'
                    }
                }
            }
        }
    


        // Typing effect for ready prompt
        function typeEffect() {
            const element = document.querySelector('.ready-prompt');
            if (element) {
                const text = element.textContent;
                element.textContent = '';
                let i = 0;
                const timer = setInterval(() => {
                    element.textContent += text[i];
                    i++;
                    if (i >= text.length) clearInterval(timer);
                }, 100);
            }
        }

        // Random glitch effect on hover
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.animation = 'glitch 0.1s ease-in-out 3';
                setTimeout(() => {
                    btn.style.animation = '';
                }, 300);
            });
        });

        // Initialize effects
        window.addEventListener('load', () => {
            setTimeout(typeEffect, 2000);
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
      

<div className="scan-line" style={{animationDelay: '0s'}}></div>
<div className="scan-line" style={{animationDelay: '1.5s'}}></div>

<div className="data-flow" style={{top: '20%', animationDelay: '0s'}}></div>
<div className="data-flow" style={{top: '40%', animationDelay: '2s'}}></div>
<div className="data-flow" style={{top: '60%', animationDelay: '4s'}}></div>
<div className="data-flow" style={{top: '80%', animationDelay: '1s'}}></div>

<div className="absolute inset-4 border border-plasma/30 pointer-events-none">

<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-plasma"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-plasma"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-plasma"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-plasma"></div>
</div>

<div className="fixed top-0 left-0 right-0 h-16 bg-charcoal/90 border-b border-plasma/50 z-50 flex items-center justify-between px-8">
<div className="flex items-center space-x-4">
<div className="status-indicator"></div>
<span className="text-sm font-exo">NEXUS.OS v3.7.2</span>
</div>
<div className="text-xl font-bold tracking-wider glitch-text">NEXUS GAMING CONSOLE</div>
<div className="flex items-center space-x-4 text-sm font-exo">
<span>PWR: 98%</span>
<span className="text-power-red">CPU: 67°C</span>
<div className="status-indicator bg-power-red"></div>
</div>
</div>

<nav className="fixed left-0 top-16 bottom-0 w-64 hud-panel z-40 p-6" style={{animationDelay: '0.5s'}}>
<div className="mb-8">
<h2 className="text-lg font-bold mb-2 text-silver">[MAIN_MENU]</h2>
<div className="w-full h-px bg-plasma/50"></div>
</div>
<ul className="space-y-4">
<li><a className="block py-2 px-4 border border-plasma/30 hover:bg-plasma/10 transition-all duration-300 text-sm font-exo hover:border-plasma" href="#">&gt; DASHBOARD</a></li>
<li><a className="block py-2 px-4 border border-plasma/30 hover:bg-plasma/10 transition-all duration-300 text-sm font-exo hover:border-plasma" href="#">&gt; GAME_STUDIO</a></li>
<li><a className="block py-2 px-4 border border-plasma/30 hover:bg-plasma/10 transition-all duration-300 text-sm font-exo hover:border-plasma" href="#">&gt; MOD_TOOLS</a></li>
<li><a className="block py-2 px-4 border border-plasma/30 hover:bg-plasma/10 transition-all duration-300 text-sm font-exo hover:border-plasma" href="#">&gt; ESPORTS_HUB</a></li>
<li><a className="block py-2 px-4 border border-plasma/30 hover:bg-plasma/10 transition-all duration-300 text-sm font-exo hover:border-plasma" href="#">&gt; SETTINGS</a></li>
</ul>
<div className="absolute bottom-6 left-6 right-6">
<div className="hud-panel p-4" style={{animationDelay: '2s'}}>
<div className="text-xs font-exo text-silver mb-2">[SYSTEM_STATUS]</div>
<div className="space-y-1 text-xs">
<div className="flex justify-between"><span>MEMORY:</span><span className="text-plasma">8.2GB/16GB</span></div>
<div className="flex justify-between"><span>NETWORK:</span><span className="text-power-red">ONLINE</span></div>
<div className="flex justify-between"><span>PING:</span><span className="text-plasma">12ms</span></div>
</div>
</div>
</div>
</nav>

<div className="ml-64 mt-16 min-h-screen flex items-center justify-center p-8">
<div className="max-w-4xl mx-auto text-center">

<div className="hud-panel p-12 mb-8 energy-border" style={{animationDelay: '1s'}}>
<div className="mb-6">
<div className="text-sm font-exo text-silver uppercase tracking-wider mb-2">[INITIATE_SEQUENCE]</div>
<div className="w-16 h-px bg-plasma mx-auto"></div>
</div>
<h1 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
<div className="mb-4 text-plasma">GAME</div>
<div className="mb-4 text-silver">MODE</div>
<div className="text-3xl lg:text-4xl text-power-red font-exo">ACTIVATED</div>
</h1>
<p className="text-lg font-exo text-silver/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Next-generation gaming platform delivering cutting-edge tools for game development, 
                    modding capabilities, and competitive esports infrastructure.
                </p>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
<button className="px-8 py-4 bg-plasma text-charcoal font-bold text-lg hover:bg-plasma/80 transition-all duration-300 transform hover:scale-105 energy-border">
                        [LAUNCH_GAME]
                    </button>
<button className="px-8 py-4 border border-power-red text-power-red font-bold text-lg hover:bg-power-red hover:text-charcoal transition-all duration-300 transform hover:scale-105">
                        [ACCESS_TOOLS]
                    </button>
</div>

<div className="grid grid-cols-3 gap-6 text-center">
<div className="hud-panel p-4" style={{animationDelay: '2.5s'}}>
<div className="text-2xl font-bold text-plasma">127</div>
<div className="text-xs font-exo text-silver">ACTIVE_USERS</div>
</div>
<div className="hud-panel p-4" style={{animationDelay: '3s'}}>
<div className="text-2xl font-bold text-power-red">99.8%</div>
<div className="text-xs font-exo text-silver">UPTIME</div>
</div>
<div className="hud-panel p-4" style={{animationDelay: '3.5s'}}>
<div className="text-2xl font-bold text-plasma">45ms</div>
<div className="text-xs font-exo text-silver">RESPONSE</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-64 right-0 h-12 bg-charcoal/90 border-t border-plasma/50 z-50 flex items-center justify-between px-8 text-xs font-exo">
<div className="flex space-x-6">
<span className="text-silver">COORD: [127.0.0.1]</span>
<span className="text-plasma">FPS: 144</span>
<span className="text-power-red">TEMP: 67°C</span>
</div>
<div className="text-silver">
            READY_TO_DEPLOY &gt;&gt; _
        </div>
</div>


    </>
  );
}
