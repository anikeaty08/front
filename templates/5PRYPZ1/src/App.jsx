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



        // Initialize Lucide icons
        lucide.createIcons();

        // Keyboard interaction effects
        document.addEventListener('DOMContentLoaded', function() {
            const keys = document.querySelectorAll('[class*="key-"]');
            const actionIndicator = document.getElementById('actionIndicator');
            
            keys.forEach(key => {
                key.addEventListener('click', function() {
                    // Add press animation
                    this.classList.add('animate-key-press');
                    
                    // Show action indicator
                    if (actionIndicator) {
                        actionIndicator.style.opacity = '1';
                        actionIndicator.style.transform = 'translateX(-50%) translateY(-10px)';
                        
                        setTimeout(() => {
                            actionIndicator.style.opacity = '0';
                            actionIndicator.style.transform = 'translateX(-50%) translateY(0)';
                        }, 1500);
                    }
                    
                    // Remove animation class after completion
                    setTimeout(() => {
                        this.classList.remove('animate-key-press');
                    }, 300);
                });
                
                // Add hover effects for shortcut keys
                key.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-1px)';
                    this.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
                });
                
                key.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                });
            });

            // Shortcut key interactions
            const shortcutKeys = document.querySelectorAll('.shortcut-key');
            shortcutKeys.forEach(key => {
                key.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });

            // Performance metrics hover effects
            const metrics = document.querySelectorAll('.group\\/metric');
            metrics.forEach((metric, index) => {
                metric.addEventListener('mouseenter', function() {
                    // Add subtle bounce effect
                    this.style.transform = 'translateY(-2px) scale(1.02)';
                });
                
                metric.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add typing effect simulation
            let typingInterval;
            const simulateTyping = () => {
                const keys = ['key-q', 'key-w', 'key-e', 'key-r', 'key-t'];
                let currentIndex = 0;

                typingInterval = setInterval(() => {
                    const keyElement = document.querySelector(`.${keys[currentIndex]}`);
                    if (keyElement) {
                        keyElement.click();
                    }
                    currentIndex = (currentIndex + 1) % keys.length;
                }, 800);
            };

            // Start typing simulation after a delay
            setTimeout(simulateTyping, 3000);

            // Clear interval when user interacts
            document.addEventListener('click', () => {
                if (typingInterval) {
                    clearInterval(typingInterval);
                    typingInterval = null;
                }
            });
        });

        // Smooth scroll observer for enhanced animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('[class*="animate-"]').forEach(el => {
            observer.observe(el);
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
      
<main className="w-full max-w-7xl mx-auto px-4 py-12 lg:py-20">
<section className="grid lg:grid-cols-2 gap-8 lg:gap-12">

<div className="opacity-0 animate-fade-in-scale animate-delay-100 group relative p-8 lg:p-12 bg-white/[0.03] hover:bg-white/[0.06] rounded-3xl border border-white/[0.08] hover:border-white/[0.12] shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:shadow-black/60" style={{animationPlayState: 'running'}}>

<div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="opacity-0 animate-fade-in-up animate-delay-200 relative mx-auto mb-8 w-full max-w-lg" style={{animationPlayState: 'running'}}>
<div className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-6 backdrop-blur-sm">

<div className="space-y-2" id="keyboard">

<div className="flex gap-1">
<div className="w-8 h-6 bg-slate-700/60 hover:bg-slate-600/80 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer"></div>
<div className="flex-1 grid grid-cols-12 gap-1">
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-f1"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
<div className="h-6 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer"></div>
</div>
</div>

<div className="flex gap-1">
<div className="w-12 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">tab</div>
<div className="flex-1 grid grid-cols-10 gap-1">
<div className="h-8 hover:bg-violet-500/30 transition-all duration-200 cursor-pointer key-q flex animate-key-press text-xs text-slate-300 bg-slate-700/40 border-slate-600/30 border rounded-md items-center justify-center">q</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">w</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">e</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">r</div>
<div className="h-8 hover:bg-violet-500/30 transition-all duration-200 cursor-pointer key-t flex text-xs text-slate-300 bg-slate-700/40 border-slate-600/30 border rounded-md items-center justify-center">t</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">y</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">u</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">i</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">o</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-p flex items-center justify-center text-xs text-slate-300">p</div>
</div>
<div className="w-12 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer"></div>
</div>

<div className="flex gap-1">
<div className="w-16 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">caps</div>
<div className="flex-1 grid grid-cols-9 gap-1">
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">a</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">s</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">d</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">f</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">g</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">h</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">j</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-k flex items-center justify-center text-xs text-slate-300">k</div>
<div className="h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">l</div>
</div>
<div className="w-16 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">enter</div>
</div>

<div className="flex gap-1">
<div className="w-16 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer key-cmd flex items-center justify-center text-xs text-slate-300">⌘</div>
<div className="w-12 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer key-alt flex items-center justify-center text-xs text-slate-300">⌥</div>
<div className="flex-1 h-8 bg-slate-700/40 hover:bg-violet-500/30 rounded-md border border-slate-600/30 transition-all duration-200 cursor-pointer key-space"></div>
<div className="w-12 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">⌥</div>
<div className="w-16 h-8 bg-slate-700/60 hover:bg-violet-500/30 rounded-md border border-slate-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center text-xs text-slate-300">⌘</div>
</div>
</div>

<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-violet-500/90 text-white text-xs px-3 py-1 rounded-full opacity-0 transition-all duration-300 backdrop-blur-sm border border-violet-400/30" id="actionIndicator" style={{opacity: '0', transform: 'translateX(-50%) translateY(0px)'}}>
                            Quick action triggered!
                        </div>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animate-delay-300 space-y-4 mb-8" style={{animationPlayState: 'running'}}>

<div className="group/category bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-4 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
<svg className="lucide lucide-navigation w-4 h-4 text-blue-400" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
<h4 className="text-lg font-medium text-white/90">Navigation</h4>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Go to inbox</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Search</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Quick switcher</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Command palette</span>
</div>
</div>
</div>

<div className="group/category bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-4 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-green-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-lg font-medium text-white/90">Quick Actions</h4>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Create issue</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">From template</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Move to project</span>
</div>
<div className="flex items-center justify-between group/shortcut hover:bg-white/[0.03] rounded-lg px-3 py-2 transition-all duration-200">
<span className="text-slate-300 group-hover/shortcut:text-white">Assign to me</span>
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animate-delay-400 text-center lg:text-left" style={{animationPlayState: 'running'}}>
<h3 className="text-3xl font-medium mb-4 tracking-tight text-white/95">Built for your keyboard</h3>
<p className="text-lg text-slate-300/90 leading-relaxed max-w-md mx-auto lg:mx-0 mb-4">
                        Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.
                    </p>
<div className="flex items-center gap-2 text-sm text-slate-400">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Try clicking the keyboard keys above to see shortcuts in action</span>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in-scale animate-delay-300 group relative p-8 lg:p-12 bg-white/[0.03] hover:bg-white/[0.06] rounded-3xl border border-white/[0.08] hover:border-white/[0.12] shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:shadow-black/60" style={{animationPlayState: 'running'}}>

<div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="opacity-0 animate-fade-in-scale animate-delay-500 relative mx-auto mb-8 w-full max-w-lg" style={{animationPlayState: 'running'}}>
<div className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-8 backdrop-blur-sm">

<div className="relative mb-8 flex justify-center">
<div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-500">
<svg className="lucide lucide-zap w-12 h-12 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>

<div className="absolute inset-0 rounded-2xl border border-amber-400/20 animate-pulse-slow" style={{animationPlayState: 'running'}}></div>
<div className="absolute -inset-2 rounded-2xl border border-amber-400/10 animate-pulse-slow" style={{animationDelay: '0.5s', animationPlayState: 'running'}}></div>
</div>
</div>

<div className="space-y-3">
<div className="opacity-0 animate-slide-in animate-delay-600 flex items-center gap-3" style={{animationPlayState: 'running'}}>
<div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-slow" style={{animationPlayState: 'running'}}></div>
<div className="flex-1 h-2 bg-slate-700/40 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" style={{width: '95%'}}></div>
</div>
<span className="text-xs text-emerald-400 font-medium w-12">50ms</span>
</div>
<div className="opacity-0 animate-slide-in animate-delay-700 flex items-center gap-3" style={{animationPlayState: 'running'}}>
<div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse-slow" style={{animationDelay: '0.3s', animationPlayState: 'running'}}></div>
<div className="flex-1 h-2 bg-slate-700/40 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-out" style={{width: '88%'}}></div>
</div>
<span className="text-xs text-blue-400 font-medium w-12">Sync</span>
</div>
<div className="opacity-0 animate-slide-in animate-delay-800 flex items-center gap-3" style={{animationPlayState: 'running'}}>
<div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse-slow" style={{animationDelay: '0.6s', animationPlayState: 'running'}}></div>
<div className="flex-1 h-2 bg-slate-700/40 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-400 to-violet-300 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1400 ease-out" style={{width: '92%'}}></div>
</div>
<span className="text-xs text-violet-400 font-medium w-12">API</span>
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animate-delay-600 flex flex-wrap justify-center gap-4 mb-8 text-sm" style={{animationPlayState: 'running'}}>
<div className="group/metric flex flex-col items-center rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] px-6 py-4 border border-white/[0.08] hover:border-emerald-400/20 transition-all duration-300">
<div className="text-2xl font-medium text-emerald-400 mb-1">50ms</div>
<span className="text-slate-400 group-hover/metric:text-slate-300 transition-colors duration-300">Interactions</span>
</div>
<div className="group/metric flex flex-col items-center rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] px-6 py-4 border border-white/[0.08] hover:border-blue-400/20 transition-all duration-300" style={{transform: 'translateY(0px) scale(1)'}}>
<div className="text-2xl font-medium text-blue-400 mb-1">Real-time</div>
<span className="text-slate-400 group-hover/metric:text-slate-300 transition-colors duration-300">Sync</span>
</div>
<div className="group/metric flex flex-col items-center rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] px-6 py-4 border border-white/[0.08] hover:border-violet-400/20 transition-all duration-300">
<div className="text-2xl font-medium text-violet-400 mb-1">99.9%</div>
<span className="text-slate-400 group-hover/metric:text-slate-300 transition-colors duration-300">Uptime</span>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animate-delay-700 mb-8" style={{animationPlayState: 'running'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group/tech bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-4 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
<svg className="lucide lucide-cpu w-4 h-4 text-emerald-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h4 className="text-lg font-medium text-white/90">Performance</h4>
</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Response time</span>
<span className="text-emerald-400 font-medium">&lt; 50ms</span>
</div>
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Throughput</span>
<span className="text-emerald-400 font-medium">10k req/s</span>
</div>
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Memory usage</span>
<span className="text-emerald-400 font-medium">&lt; 2MB</span>
</div>
</div>
</div>

<div className="group/tech bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-4 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-blue-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h4 className="text-lg font-medium text-white/90">Architecture</h4>
</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Edge computing</span>
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" style={{animationPlayState: 'running'}}></div>
</div>
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Global CDN</span>
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.3s', animationPlayState: 'running'}}></div>
</div>
<div className="flex items-center justify-between group/item hover:bg-white/[0.03] rounded-lg px-2 py-1 transition-all duration-200">
<span className="text-slate-300 group-hover/item:text-white">Auto-scaling</span>
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.6s', animationPlayState: 'running'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animate-delay-800 text-center lg:text-left" style={{animationPlayState: 'running'}}>
<h3 className="text-3xl font-medium mb-4 tracking-tight text-white/95">Turbocharged for speed</h3>
<p className="text-lg text-slate-300/90 leading-relaxed max-w-md mx-auto lg:mx-0 mb-4">
                        Experience lightning-fast performance with our globally distributed infrastructure and intelligent caching.
                    </p>
<div className="flex items-center gap-2 text-sm text-slate-400">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Powered by 50+ edge locations worldwide</span>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
